import os
import os.path as osp
import torch
import torchvision
import torch.nn as nn
import torch.nn.functional as F
from torch.autograd import Variable
import torchvision.models.resnet as resnet
import torch.optim as optim
from skimage import io, transform
import numpy as np
import h5py
import argparse
import numpy as np
import torchvision.utils as vutils
import matplotlib.pyplot as plt
from torch.utils.data import Dataset, DataLoader
from torchvision import datasets, models, transforms, utils
import dataloading

plt.ion()   # interactive mode

parser = argparse.ArgumentParser()
parser.add_argument('--imageRoot', default='./rgb', help='path to input images' )
parser.add_argument('--labelRoot', default='./normal', help='path to input images')
parser.add_argument('--isPretrained', default=True, help='whether to load the pretrained model or not' )
parser.add_argument('--initLREncoder', type=float, default=1e-5, help='the initial learning rate for encoder' )
parser.add_argument('--initLRDecoder', type=float, default=1e-4, help='the Initial learning rate for decoder' )
parser.add_argument('--nepoch', type=int, default=10, help='the training epoch' )
parser.add_argument('--experiment', default='checkpoint', help='the path to store sampled images and models' )
parser.add_argument('--batchSize', type=int, default=8, help='the size of a batch' )
parser.add_argument('--gpuId', type=int, default=0, help='gpu id used for training the network' )
parser.add_argument('--noCuda', action='store_true', help='do not use cuda for training' )


# The detail network setting
opt = parser.parse_args()
print(opt)

imBatch = Variable(torch.FloatTensor(opt.batchSize, 3, 480, 640))
labelBatch = Variable(torch.FloatTensor(opt.batchSize, 2, 480, 640))

# if torch.cuda.is_available() and opt.noCuda:
#     print("WARNING: You have a CUDA device, so you should probably run with --cuda")

############################
#######Residual block#######
############################
class ResBlock(nn.Module ):
    def __init__(self, inch, outch, stride=1, dilation=1):
        # Residual Block
        # inch: input feature channel
        # outch: output feature channel
        # stride: the stride of  convolution layer
        super(ResBlock, self).__init__()

        #Like Try-catch. If we don't have a stride of 1 or 2, stops the running.
        assert(stride == 1 or stride == 2)

        #Definition of the resblock architecture. We need 2 convolutional layers, each one with
        #their respective batch normalization.
        self.conv1 = nn.Conv2d(inch, outch, 3, stride, padding = dilation, bias=False,
                dilation = dilation)
        self.bn1 = nn.BatchNorm2d(outch)
        self.conv2 = nn.Conv2d(outch, outch, 3, 1, padding = dilation, bias=False,
                dilation = dilation)
        self.bn2 = nn.BatchNorm2d(outch)


        #If the number of the input channels is different as the output channels, the mapping function
        #is used to do "match" between the sizes.
        #Otherwise, the mapping parameter is setting as 'None'.
        if inch != outch:
            self.mapping = nn.Sequential(
                        nn.Conv2d(inch, outch, 1, stride, bias=False ),
                        nn.BatchNorm2d(outch )
                    )
        else:
            self.mapping = None

    def forward(self, x):
        #We need create a copy of our layer to be added to the result of the resblock.

        y = x
        if not self.mapping is None:
            y = self.mapping(y)

        #Sequence of the layers
        out = F.relu(self.bn1(self.conv1(x)), inplace=True)
        out = self.bn2(self.conv2(out))

        #The input 'y' is added to the reslult of the resblock, named 'out'
        out += y
        out = F.relu(out, inplace=True)

        return out

############################
##########Enconder##########
############################
class encoder(nn.Module):
    def __init__(self):
        #The enconder is defined by 1 block of convolution, batch normalization and maxpool layers.
        #The next blocks are Residual Blocks defined above.
        super(encoder, self ).__init__()

        #Conv2d(inch, outch, kernel, stride, padding, bias)
        self.conv1 = nn.Conv2d(3, 64, kernel_size=7, stride=2, padding=3, bias=False)

        #Batchnorm with input channels equal as the output of Convolution.
        self.bn1 = nn.BatchNorm2d(64)
        self.maxpool = nn.MaxPool2d(kernel_size=3, stride=2, padding=1)

        #ResBlock(inch, outch, stride)
        self.b1_1 = ResBlock(64, 64, 1)
        self.b1_2 = ResBlock(64, 64, 1)

        self.b2_1 = ResBlock(64, 128, 2)
        self.b2_2 = ResBlock(128, 128, 1)

        self.b3_1 = ResBlock(128, 256, 2)
        self.b3_2 = ResBlock(256, 256, 1)

        self.b4_1 = ResBlock(256, 512, 2)
        self.b4_2 = ResBlock(512, 512, 1)

    def forward(self, im):
        x1 = F.relu(self.bn1(self.conv1(im)), inplace=True)
        x2 = self.b1_2(self.b1_1(self.maxpool(x1)))
        x3 = self.b2_2(self.b2_1(x2))
        x4 = self.b3_2(self.b3_1(x3))
        x5 = self.b4_2(self.b4_1(x4))
        return x1, x2, x3, x4, x5

############################
##########Decoder###########
############################
class decoder(nn.Module ):
    #Decoder is defined by 5 convolutional layers, 4 batch normalization and 1 activation function.

    def __init__(self ):
        super(decoder, self).__init__()
        # in_channels, out_channels, kernel_size, stride=1, padding=0

        #The Convolutional Transpose layer is the process to resize the image to obtain a large size using
        #the inverse convolution operation.

        #ConvTranspose2d(inch, outch, kernel, stride, padding)
        self.conv1 = nn.ConvTranspose2d(512+256+128, 256, 4, 2, 1)
        self.bn1 = nn.BatchNorm2d(256)
        self.conv2 = nn.ConvTranspose2d(256+64, 128, 4, 2, 1)
        self.bn2 = nn.BatchNorm2d(128)
        self.conv3 = nn.ConvTranspose2d(128, 64, 4, 2, 1)
        self.bn3 = nn.BatchNorm2d(64)
        self.conv4 = nn.ConvTranspose2d(64+64, 32, 4, 2, 1)
        self.bn4 = nn.BatchNorm2d(32)
        self.conv5 = nn.Conv2d(32, 2, 3, 1, 1)
        self.sf = nn.Softmax(dim=1)

    def forward(self, im, x1, x2, x3, x4, x5):

        _, _, nh, nw = x3.size()
        x5 = F.interpolate(x5, [nh, nw], mode='bilinear')
        x4 = F.interpolate(x4, [nh, nw], mode='bilinear')
        y1 = F.relu(self.bn1(self.conv1(torch.cat( [x3, x4, x5], dim=1))), inplace=True )

        _, _, nh, nw = x2.size()
        y1 = F.interpolate(y1, [nh, nw], mode='bilinear')
        # concatenate to retrieve higher resolution
        y2 = F.relu(self.bn2(self.conv2(torch.cat([y1, x2], dim=1) ) ), inplace=True)

        y3 = F.relu(self.bn3(self.conv3(y2)), inplace=True)

        _, _, nh, nw = x1.size()
        y3 = F.interpolate(y3, [nh, nw], mode='bilinear')
        y4 = F.relu(self.bn4(self.conv4(torch.cat([y3, x1], dim=1) )), inplace=True)

        y5 = self.sf(self.conv5(y4))

        _, _, nh, nw = im.size()
        y5 = F.interpolate(y5, [nh, nw], mode='bilinear')
        pred = -torch.log(torch.clamp(y5, min=1e-8))

        return pred


def loadPretrainedWeight(network, isOutput = False ):
    paramList = []
    resnet18 = resnet.resnet18(pretrained=True)
    for param in resnet18.parameters():
        paramList.append(param)

    cnt = 0
    for param in network.parameters():
        if paramList[cnt ].size() == param.size():
            param.data.copy_(paramList[cnt].data)
            if isOutput:
                print(param.size())
        else:
            print(param.shape, paramList[cnt].shape)
            break
        cnt += 1

encoder = encoder()
decoder = decoder()
if opt.isPretrained:
    loadPretrainedWeight(encoder, isOutput = True )

# Move network and containers to gpu
# if not opt.noCuda:
#     imBatch = imBatch.cuda(opt.gpuId)
#     encoder = encoder.cuda(opt.gpuId)
#     decoder = decoder.cuda(opt.gpuId)

# Initialize optimizer
optEncoder = optim.Adam(encoder.parameters(), lr=opt.initLREncoder, betas=(0.5, 0.999) )
optDecoder = optim.Adam(decoder.parameters(), lr=opt.initLRDecoder, betas=(0.5, 0.999) )

lossArr = []
accuracyArr = []
iteration = 0
for epoch in range(0, opt.nepoch):
    trainingLog = open('{0}/trainingLog_{1}.txt'.format(opt.experiment, epoch), 'w+')
    np.random.seed(epoch )

    # train_dataset
    for i, dataBatch in enumerate(dataloading.train_loader):
        iteration += 1

        # Read data
        image_cpu = dataBatch['im']
        # with torch.no_grad():
        #     imBatch.resize_(image_cpu.size()).copy(image_cpu)

        imBatch.resize_(image_cpu.size() )
        imBatch.data.copy_(image_cpu)

        label_cpu = dataBatch['label']
        # with torch.no_grad():
        #     labelBatch.resize_(label_cpu.size()).copy(label_cpu)
        labelBatch.resize_(label_cpu.size() )
        labelBatch.data.copy_(label_cpu)

        # Train network
        optEncoder.zero_grad()
        optDecoder.zero_grad()

        x1, x2, x3, x4, x5 = encoder(imBatch)
        pred = decoder(imBatch, x1, x2, x3, x4, x5)

        print("continuing..")

        # why use torch.mean()?
        loss = torch.mean(pred * labelBatch)
        loss.backward()

        optEncoder.step()
        optDecoder.step()

        # confcounts = utils.computeAccuracy(pred, labelIndexBatch, maskBatch )
        # accuracy = np.zeros(opt.numClasses, dtype=np.float32 )
        # for n in range(0, opt.numClasses ):
        #     rowSum = np.sum(confcounts[n, :] )
        #     colSum = np.sum(confcounts[:, n] )
        #     interSum = confcounts[n, n]
        #     accuracy[n] = float(100.0 * interSum) / max(float(rowSum + colSum - interSum ), 1e-5 )

        # Output the log information
        lossArr.append(loss.cpu().data.item() )
        # accuracyArr.append(np.mean(accuracy ) )

        print("wait...")

        if iteration >= 1000:
            meanLoss = np.mean(np.array(lossArr[-1000:] ) )
            meanAccuracy = np.mean(np.array(accuracyArr[-1000:] ) )
        else:
            meanLoss = np.mean(np.array(lossArr[:] ) )
            meanAccuracy = np.mean(np.array(accuracyArr[:] ) )

        print('Epoch %d iteration %d: Loss %.5f Accumulated Loss %.5f'  \
                % (epoch, iteration, lossArr[-1], meanLoss ) )
        # print('Epoch %d iteraion %d: Accuracy %.5f Accumulated Accuracy %.5f'  \
        #         % (epoch, iteration, accuracyArr[-1], meanAccuracy ) )
        trainingLog.write('Epoch %d iteration %d: Loss %.5f Accumulated Loss %.5f \n' \
                % (epoch, iteration, lossArr[-1], meanLoss ) )
        # trainingLog.write('Epoch %d iteration %d: Accuracy %.5f Accumulated Accuracy %.5f \n' \
        #         % (epoch, iteration, accuracyArr[-1], meanAccuracy ) )

        if iteration % 500 == 0 or iteration == 1:
            vutils.save_image( imBatch.data , '%s/images_%d.png' % (opt.experiment, iteration), padding=0, nrow=4, normalize = True)

    trainingLog.close()

    if (epoch+1) % 10 == 0:
        np.save('%s/loss.npy' % opt.experiment, np.array(lossArr))
        # np.save('%s/accuracy.npy' % opt.experiment, np.array(accuracyArr))
        torch.save( encoder.state_dict(), '%s/encoder_%d.pth' % (opt.experiment, epoch+1))
        torch.save( decoder.state_dict(), '%s/decoder_%d.pth' % (opt.experiment, epoch+1))

    if (epoch+1) % 30 == 0:
        for param_group in optEncoder.param_groups:
            param_group['lr'] /= 2
        for param_group in optDecoder.param_groups:
            param_group['lr'] /= 2
