webpackJsonp([11],{

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostdetailPageModule", function() { return PostdetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postdetail__ = __webpack_require__(678);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PostdetailPageModule = (function () {
    function PostdetailPageModule() {
    }
    PostdetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__postdetail__["a" /* PostdetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__postdetail__["a" /* PostdetailPage */]),
            ],
        })
    ], PostdetailPageModule);
    return PostdetailPageModule;
}());

//# sourceMappingURL=postdetail.module.js.map

/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
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
 * Generated class for the PostdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PostdetailPage = (function () {
    function PostdetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadpost = false;
    }
    PostdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PostdetailPage');
        this.post = this.navParams.get('post');
        this.loadpost = true;
    };
    PostdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-postdetail',template:/*ion-inline-start:"/Users/chaerinlim/Desktop/28days/src/pages/postdetail/postdetail.html"*/'<!--\n  Generated template for the PostdetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="daysgreen">\n    <ion-title>포스트</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n	<div *ngIf="loadpost">\n\n		<div class="picture">\n			<img src="{{ post.imgsrc }}">\n		</div>\n\n		<div class="middle">\n			<div class="head">\n				<span class="title">{{ post.title }}</span>\n				<div class="comment-like">\n					<button class="comment" (click)="comment(post)">\n						<div>\n							<img src="assets/comment.png">\n							<span>{{ post.comment }}</span>\n						</div>\n					</button>\n					<button class="like" (click)="like(post)">\n						<div>\n							<img src="{{ post.likesrc }}">\n							<span>{{ post.like }}</span>\n						</div>\n					</button>\n				</div>\n			</div>\n\n			<div class="writer">\n				<img src="{{ post.writerimg }}">\n				<div class="name-time">\n					<p class="name">{{ post.writername }}</p>\n					<span class="time">{{ post.timestamp | date:\'yyyy.MM.dd a hh:mm\' }}</span>\n				</div>\n				<p class="major">{{ post.writermajor }}</p>\n			</div>\n		</div>\n\n		<div class="body">\n			<p>{{ post.body }}</p>\n		</div>\n\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/chaerinlim/Desktop/28days/src/pages/postdetail/postdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], PostdetailPage);
    return PostdetailPage;
}());

//# sourceMappingURL=postdetail.js.map

/***/ })

});
//# sourceMappingURL=11.js.map