webpackJsonp([28],{

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunitygroupPageModule", function() { return CommunitygroupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__communitygroup__ = __webpack_require__(661);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CommunitygroupPageModule = (function () {
    function CommunitygroupPageModule() {
    }
    CommunitygroupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__communitygroup__["a" /* CommunitygroupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__communitygroup__["a" /* CommunitygroupPage */]),
            ],
        })
    ], CommunitygroupPageModule);
    return CommunitygroupPageModule;
}());

//# sourceMappingURL=communitygroup.module.js.map

/***/ }),

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunitygroupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_community_community__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_communitycomment_communitycomment__ = __webpack_require__(405);
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
 * Generated class for the CommunitygroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CommunitygroupPage = (function () {
    function CommunitygroupPage(navCtrl, navParams, community, loadingCtrl, cocomment) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.community = community;
        this.loadingCtrl = loadingCtrl;
        this.cocomment = cocomment;
        this.title = this.community.title;
    }
    CommunitygroupPage.prototype.ionViewDidLoad = function () {
    };
    CommunitygroupPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create();
        this.loading.present();
        this.community.getallposts().then(function (posts) {
            _this.posts = posts;
            _this.content.scrollToTop(0);
            _this.loading.dismiss();
        });
    };
    CommunitygroupPage.prototype.comment = function (post) {
        this.cocomment.initializecomment(post);
        this.navCtrl.push('CommunitycommentPage');
    };
    CommunitygroupPage.prototype.like = function (post) {
        if (post.likesrc == 'assets/like.png') {
            this.community.setLike(post).then(function () {
                post.likesrc = 'assets/like-full.png';
                post.like++;
            });
        }
        else {
            this.community.deleteLike(post).then(function () {
                post.likesrc = 'assets/like.png';
                post.like--;
            });
        }
    };
    CommunitygroupPage.prototype.communitywrite = function () {
        this.navCtrl.push('CommunitywritePage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], CommunitygroupPage.prototype, "content", void 0);
    CommunitygroupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-communitygroup',template:/*ion-inline-start:"/Users/chaerinlim/Desktop/28days/src/pages/communitygroup/communitygroup.html"*/'<!--\n  Generated template for the CommunitygroupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n	<ion-navbar color="daysgreen">\n		<ion-title>{{ title }}</ion-title>\n	</ion-navbar>\n\n</ion-header>\n\n\n<ion-content #content>\n\n	<ul>\n		<li *ngFor="let post of posts">\n			<div class="post">\n				<div class="name">\n					<span>{{ post.username }}</span>\n					<button>\n						<ion-icon name="more" color="gray"></ion-icon>\n					</button>\n				</div>\n				<div class="picture" *ngIf="post.url">\n					<img src="{{ post.url }}">\n				</div>\n				<div class="group-time">\n					<span class="group">{{ title }}</span>\n					<span class="time">{{ post.timestamp | date:\'yyyy.MM.dd a hh:mm\' }}</span>\n				</div>\n				<div class="text">\n					<p>{{ post.text }}</p>\n				</div>\n				<div class="comment-like">\n					<button class="comment" (click)="comment(post)">\n						<div>\n							<img src="assets/comment.png">\n							<span>{{ post.comment }}</span>\n						</div>\n					</button>\n					<button class="like" (click)="like(post)">\n						<div>\n							<img src="{{ post.likesrc }}">\n							<span>{{ post.like }}</span>\n						</div>\n					</button>\n				</div>\n			</div>\n		</li>\n	</ul>\n\n</ion-content>\n\n<ion-footer>\n	<button ion-button full color="gray" (click)="communitywrite()">글쓰기</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/chaerinlim/Desktop/28days/src/pages/communitygroup/communitygroup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_community_community__["a" /* CommunityProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_communitycomment_communitycomment__["a" /* CommunitycommentProvider */]])
    ], CommunitygroupPage);
    return CommunitygroupPage;
}());

//# sourceMappingURL=communitygroup.js.map

/***/ })

});
//# sourceMappingURL=28.js.map