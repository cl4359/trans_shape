webpackJsonp([12],{

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPageModule", function() { return PostPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post__ = __webpack_require__(677);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PostPageModule = (function () {
    function PostPageModule() {
    }
    PostPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__post__["a" /* PostPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__post__["a" /* PostPage */]),
            ],
        })
    ], PostPageModule);
    return PostPageModule;
}());

//# sourceMappingURL=post.module.js.map

/***/ }),

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_post_post__ = __webpack_require__(409);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PostPage = (function () {
    // posts = [
    // 	[this.Post('assets/post1.png', '약.. 계속 먹어야 하는 걸까요?'), this.Post('assets/post2.png', 'XX 상담소에 다녀왔어요.')],
    // 	[this.Post('assets/post3.png', '의사를 만날 때의사를 만날 때의사를 만날 때의사를 만날 때'), this.Post('assets/post4.png', '부작용은 어떤 것이 있을까?')],
    // 	[this.Post('assets/post5.png', '스트레스 다루기'), this.Post('assets/post1.png', '약.. 계속 먹어야 하는 걸까요?')],
    // 	[this.Post('assets/post2.png', 'XX 상담소에 다녀왔어요.'), this.Post('assets/post3.png', '의사를 만날 때')],
    // 	[this.Post('assets/post4.png', '부작용은 어떤 것이 있을까?')]
    // ];
    function PostPage(navCtrl, navParams, post, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.post = post;
        this.loadingCtrl = loadingCtrl;
    }
    PostPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad - PostPage');
        // this.generatePosts();
        // title, imgsrc, body, writerimg, writername, writermajor
        this.loading = this.loadingCtrl.create();
        this.loading.present();
        this.post.getallposts().then(function (posts) {
            _this.posts = _this.groupTwoPosts(posts);
            // this.content.scrollToTop(0);
            setTimeout(function () {
                _this.loading.dismiss();
            }, 2000);
            console.log(JSON.stringify(_this.posts));
        });
    };
    PostPage.prototype.groupTwoPosts = function (posts) {
        var twoposts = [];
        var twopost = [];
        for (var i = 0; i < posts.length; i++) {
            twopost.push(posts[i]);
            if (i % 2 == 1) {
                twoposts.push(twopost);
                twopost = [];
            }
        }
        if (twopost.length > 0) {
            twoposts.push(twopost);
        }
        return twoposts;
    };
    PostPage.prototype.Post = function (img, title) {
        var post = new Object();
        post['img'] = img;
        post['title'] = title;
        return post;
    };
    PostPage.prototype.postdetail = function (post) {
        this.navCtrl.push('PostdetailPage', { post: post });
    };
    PostPage.prototype.generatePosts = function () {
        this.post.uploadpost('약.. 계속 먹어야 하는 걸까요?', 'https://firebasestorage.googleapis.com/v0/b/days-fd14f.appspot.com/o/post%2Fpost1.png?alt=media&token=b1ba7274-43bd-4d7d-8752-4aeeffba9de3', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 'https://firebasestorage.googleapis.com/v0/b/days-fd14f.appspot.com/o/post%2Fpostwriter.png?alt=media&token=7079ec90-2487-4d2e-bc5b-153175503ca5', 'Siena Shundi', 'Clinical Social Work / Therapist');
        this.post.uploadpost('XX 상담소에 다녀왔어요.', 'https://firebasestorage.googleapis.com/v0/b/days-fd14f.appspot.com/o/post%2Fpost2.png?alt=media&token=f9961ddb-1e4e-4260-b385-c7cb6b08e776', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 'https://firebasestorage.googleapis.com/v0/b/days-fd14f.appspot.com/o/post%2Fpostwriter.png?alt=media&token=7079ec90-2487-4d2e-bc5b-153175503ca5', 'Siena Shundi', 'Clinical Social Work / Therapist');
        this.post.uploadpost('약.. 계속 먹어야 하는 걸까요?', 'https://firebasestorage.googleapis.com/v0/b/days-fd14f.appspot.com/o/post%2Fpost1.png?alt=media&token=b1ba7274-43bd-4d7d-8752-4aeeffba9de3', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 'https://firebasestorage.googleapis.com/v0/b/days-fd14f.appspot.com/o/post%2Fpostwriter.png?alt=media&token=7079ec90-2487-4d2e-bc5b-153175503ca5', 'Siena Shundi', 'Clinical Social Work / Therapist');
        this.post.uploadpost('XX 상담소에 다녀왔어요.', 'https://firebasestorage.googleapis.com/v0/b/days-fd14f.appspot.com/o/post%2Fpost2.png?alt=media&token=f9961ddb-1e4e-4260-b385-c7cb6b08e776', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 'https://firebasestorage.googleapis.com/v0/b/days-fd14f.appspot.com/o/post%2Fpostwriter.png?alt=media&token=7079ec90-2487-4d2e-bc5b-153175503ca5', 'Siena Shundi', 'Clinical Social Work / Therapist');
        this.post.uploadpost('약.. 계속 먹어야 하는 걸까요?', 'https://firebasestorage.googleapis.com/v0/b/days-fd14f.appspot.com/o/post%2Fpost1.png?alt=media&token=b1ba7274-43bd-4d7d-8752-4aeeffba9de3', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 'https://firebasestorage.googleapis.com/v0/b/days-fd14f.appspot.com/o/post%2Fpostwriter.png?alt=media&token=7079ec90-2487-4d2e-bc5b-153175503ca5', 'Siena Shundi', 'Clinical Social Work / Therapist');
        this.post.uploadpost('XX 상담소에 다녀왔어요.', 'https://firebasestorage.googleapis.com/v0/b/days-fd14f.appspot.com/o/post%2Fpost2.png?alt=media&token=f9961ddb-1e4e-4260-b385-c7cb6b08e776', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 'https://firebasestorage.googleapis.com/v0/b/days-fd14f.appspot.com/o/post%2Fpostwriter.png?alt=media&token=7079ec90-2487-4d2e-bc5b-153175503ca5', 'Siena Shundi', 'Clinical Social Work / Therapist');
        this.post.uploadpost('약.. 계속 먹어야 하는 걸까요?', 'https://firebasestorage.googleapis.com/v0/b/days-fd14f.appspot.com/o/post%2Fpost1.png?alt=media&token=b1ba7274-43bd-4d7d-8752-4aeeffba9de3', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 'https://firebasestorage.googleapis.com/v0/b/days-fd14f.appspot.com/o/post%2Fpostwriter.png?alt=media&token=7079ec90-2487-4d2e-bc5b-153175503ca5', 'Siena Shundi', 'Clinical Social Work / Therapist');
        this.post.uploadpost('XX 상담소에 다녀왔어요.', 'https://firebasestorage.googleapis.com/v0/b/days-fd14f.appspot.com/o/post%2Fpost2.png?alt=media&token=f9961ddb-1e4e-4260-b385-c7cb6b08e776', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 'https://firebasestorage.googleapis.com/v0/b/days-fd14f.appspot.com/o/post%2Fpostwriter.png?alt=media&token=7079ec90-2487-4d2e-bc5b-153175503ca5', 'Siena Shundi', 'Clinical Social Work / Therapist');
        this.post.uploadpost('약.. 계속 먹어야 하는 걸까요?', 'https://firebasestorage.googleapis.com/v0/b/days-fd14f.appspot.com/o/post%2Fpost1.png?alt=media&token=b1ba7274-43bd-4d7d-8752-4aeeffba9de3', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 'https://firebasestorage.googleapis.com/v0/b/days-fd14f.appspot.com/o/post%2Fpostwriter.png?alt=media&token=7079ec90-2487-4d2e-bc5b-153175503ca5', 'Siena Shundi', 'Clinical Social Work / Therapist');
    };
    PostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-post',template:/*ion-inline-start:"/Users/chaerinlim/Desktop/28days-master/src/pages/post/post.html"*/'<!--\n  Generated template for the PostPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="daysgreen">\n    <ion-title>포스트</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n	<table class="table">\n	  <tr *ngFor="let twopost of posts">\n	    <td *ngFor="let post of twopost">\n	    	<button (click)="postdetail(post)">\n		    	<img src="{{post.imgsrc}}">\n		    	<div>\n			    	<p align="left" class="block-with-text">{{post.title}}</p>\n			    </div>\n		    </button>\n	    </td>\n	  </tr>\n	</table>\n\n</ion-content>\n'/*ion-inline-end:"/Users/chaerinlim/Desktop/28days-master/src/pages/post/post.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_post_post__["a" /* PostProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], PostPage);
    return PostPage;
}());

//# sourceMappingURL=post.js.map

/***/ })

});
//# sourceMappingURL=12.js.map