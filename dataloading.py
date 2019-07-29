from __future__ import print_function, division
import os
import os.path as osp
from skimage import io, transform
import numpy as np
import h5py
import torch
from torch.utils.data import Dataset, DataLoader
from torchvision import datasets, models, transforms, utils
import cv2
import argparse
from PIL import Image

imgfiles = []
path = "./rgb"
ext = ['.png']
# r=root, d=directories, f = files
for r, d, f in os.walk(path):
    for file in f:
        if any(n in file for n in ext):
            imgfiles.append(os.path.join(r, file))

title = open("imgnames.txt", "w+")
for i in range(len(imgfiles)):
    imgfiles[i]=(imgfiles[i])[10:-4]
    for j in range(len(imgfiles[i])):
        title.write(str(imgfiles[i][j]))
    title.write("\n")
title.close()

parser = argparse.ArgumentParser()
parser.add_argument('--imageRoot', default='./rgb', help='path to input images' )
parser.add_argument('--labelRoot', default='./normal', help='path to input images')

# The detail network setting
opt = parser.parse_args()
print(opt)

class TransparentObjectLoader(Dataset):

    def __init__(self, imageRoot, labelRoot, fileList, imWidth = None, imHeight = None, numClasses=2):
        super(TransparentObjectLoader, self).__init__()
        # Args:
        #     root_dir (string): Directory with all the images.
        #     transform (callable, optional): Optional transform to be applied
        #         on a sample.

        self.imageRoot = imageRoot
        self.labelRoot = labelRoot
        self.fileList = fileList

        with open(fileList, 'r') as fIn:
            imgNames = fIn.readlines()
        imgNames = [x.strip() for x in imgNames]
        imgNames = sorted(imgNames)

        # access rgb and normal
        self.imgNames = [osp.join(imageRoot, 'rgb_' + x + '.png') for x in imgNames]
        self.labelNames = [osp.join(labelRoot, 'normal_' + x + '.h5') for x in imgNames]

        self.count = len(self.imgNames)
        self.perm = list(range(self.count))

        print('Image Num: %d' % self.count)
        print(self.imgNames, self.labelNames)
        # If image height and width are None
        # do not do any cropping
        self.imHeight = imHeight
        self.imWidth = imWidth

        self.imMean = np.array([0.485, 0.456, 0.406], dtype=np.float32 )
        self.imStd = np.array([0.229, 0.224, 0.225], dtype = np.float32 )

        self.imMean = self.imMean.reshape([1, 1, 3] )
        self.imStd = self.imStd.reshape([1, 1, 3] )
        self.numClasses = numClasses

    def __len__(self):
        return self.count

    def __getitem__(self, idx):
        imName = self.imgNames[self.perm[idx]]
        labelName = self.labelNames[self.perm[idx]]

        im = self.loadImage(imName)
        label = self.loadLabel(labelName)

        if not (self.imHeight is None or self.imWidth is None):
            nrows, ncols = im.shape[1], im.shape[2]
            gapH = (nrows - self.imHeight )
            gapW = (ncols - self.imWidth )
            rs = int(np.round(np.random.random() * gapH ) )
            cs = int(np.round(np.random.random() * gapW ) )

            im = im[:, rs:rs+self.imHeight, cs:cs+self.imWidth]
            label = label[:, rs:rs+self.imHeight, cs:cs+self.imWidth]


        imgDict = {
        		'im' : im,
                'label': label}

        return imgDict

    def loadImage(self, imName):
        im = Image.open(imName)
        im = np.asarray(im)

        nrows, ncols = im.shape[0], im.shape[1]
        if not (self.imHeight is None or self.imWidth is None ):
            if nrows < self.imHeight or ncols < self.imWidth:
                scaleRow = float(nrows ) / float(self.imHeight )
                scaleCol = float(ncols ) / float(self.imWidth )
                if scaleRow > scaleCol:
                    ncols = int(np.ceil(ncols / scaleCol))
                    nrows = int(np.ceil(nrows / scaleCol))
                else:
                    ncols = int(np.ceil(ncols / scaleRow))
                    nrows = int(np.ceil(nrows / scaleRow))
                im = cv2.resize(im, (ncols, nrows), interpolation=cv2.INTER_LINEAR)

        if len(im.shape) == 2:
            print('Warning: load a gray image')
            im = im[:, :, np.newaxis]
            im = np.concatenate([im, im, im], axis=2)
        im = im.astype(np.float32 )  / 255.0

        im = (im - self.imMean) / self.imStd
        im = im.transpose([2, 0, 1])

        return im

    def loadLabel(self, labelName):
        hf = h5py.File(labelName, 'r')
        n1 = hf.get('data')

        label = np.array(n1)
        label = np.absolute(label)
        hf.close()

        labelIndex = np.mean(label, axis=2)
        # for i in range(labelIndex.shape[0]):
        #     for j in range(labelIndex.shape[1]):
        #         print(labelIndex[i][j])
        # print("labelIndex = ",labelIndex.shape)

        # if pixel is bigger than 0, change to 1, rest to 0  
        labelIndex = (labelIndex > 0)
        nrows, ncols = label.shape[0], label.shape[1]

        if not (self.imHeight is None or self.imWidth is None ):
            if nrows < self.imHeight or ncols < self.imWidth:
                scaleRow = float(nrows ) / float(self.imHeight )
                scaleCol = float(ncols ) / float(self.imWidth )
                if scaleRow > scaleCol:
                    ncols = int(np.ceil(ncols / scaleCol))
                    nrows = int(np.ceil(nrows / scaleCol))
                else:
                    ncols = int(np.ceil(ncols / scaleRow ) )
                    nrows = int(np.ceil(nrows / scaleRow ) )

            # labelIndex = cv2.resize(labelIndex, (ncols, nrows), interpolation=cv2.INTER_NEAREST )

        label = np.zeros([self.numClasses, nrows, ncols], dtype = np.float32)
        # 2 channels; if object is present, fg=1,bg=0; fg=0,bg=1
        # label[0] = np.where(labelIndex > 0, 1, 0)
        # label[1] = np.where(labelIndex > 0, 1, 0)

        label[0, labelIndex == 0] = 1
        label[1, labelIndex == 1] = 1

        return label


def save_label(label, cmap, name, nrows, ncols):
    label = label.detach().numpy()
    label = label.argmax(axis=1)

    imHeight, imWidth = label.shape[1], label.shape[2]
    outputImage = np.zeros((imHeight*nrows, imWidth*ncols, 3), dtype=np.float32)
    for r in range(0, nrows):
        for c in range(0, ncols):
            imId = r * ncols + c
            print(imId)
            if imId >= label.shape[0]:
                break
            
            # 0=black, 1=white

            # label.shape = (2,240,320)
            labelIm = label[imId, :, : ]
            print(labelIm.flatten())            
            labelIm = cmap[labelIm.flatten(), :]
            print(labelIm)

            labelIm = labelIm.reshape(imHeight, imWidth, 3)
            # print("labelIm = ",labelIm, labelIm.shape)

            rs = r * imHeight
            cs = c * imWidth
            outputImage[rs:rs+imHeight, cs:cs+imWidth, :] = labelIm

    outputImage = (np.clip(outputImage, 0, 1) * 255).astype(np.float32 )
    cv2.imwrite(name, outputImage[:, :, ::-1] )

    return

# Initialize dataLoader
Dataset = TransparentObjectLoader(
        imageRoot = opt.imageRoot,
        labelRoot = opt.labelRoot,
        fileList = "./imgnames.txt",
        imHeight = 240,
        imWidth = 320)

# split dataset
train_size = int(0.8 * len(Dataset))
test_size = len(Dataset) - train_size
train_dataset, test_dataset = torch.utils.data.random_split(Dataset, [train_size, test_size])

# load data
train_loader = DataLoader(train_dataset, batch_size=8, shuffle=True, num_workers=4)
test_loader = DataLoader(test_dataset, batch_size=2, shuffle=False, num_workers=0)

