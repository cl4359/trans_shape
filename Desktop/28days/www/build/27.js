webpackJsonp([27],{

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunitywritePageModule", function() { return CommunitywritePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__communitywrite__ = __webpack_require__(660);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CommunitywritePageModule = (function () {
    function CommunitywritePageModule() {
    }
    CommunitywritePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__communitywrite__["a" /* CommunitywritePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__communitywrite__["a" /* CommunitywritePage */]),
            ],
        })
    ], CommunitywritePageModule);
    return CommunitywritePageModule;
}());

//# sourceMappingURL=communitywrite.module.js.map

/***/ }),

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunitywritePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_community_community__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(407);
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
 * Generated class for the CommunitywritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CommunitywritePage = (function () {
    function CommunitywritePage(navCtrl, navParams, community, camera, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.community = community;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.pick = false;
        this.text = '';
        this.title = this.community.title;
    }
    CommunitywritePage.prototype.write = function () {
        var _this = this;
        this.community.uploadPost(this.text, this.dataURL).then(function () {
            _this.navCtrl.pop();
        });
        var loading = this.loadingCtrl.create({
            dismissOnPageChange: true,
        });
        loading.present();
    };
    CommunitywritePage.prototype.openGallery = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imagePath) {
            console.log('CAMERA getPicture - imagePath : ' + imagePath);
            _this.fileURL = 'data:image/jpeg;base64,' + imagePath;
            _this.dataURL = imagePath;
            _this.pick = true;
        }, function (err) {
            // Handle error
            console.log('openGallery error : ' + err.toString());
        });
    };
    CommunitywritePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-communitywrite',template:/*ion-inline-start:"/Users/chaerinlim/Desktop/28days-master/src/pages/communitywrite/communitywrite.html"*/'<!--\n  Generated template for the CommunitywritePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="daysgreen">\n    <ion-title>글쓰기</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div class="header">\n		<p class="group">{{ title }}</p>\n		<p class="text">당신의 방식으로 표현해 보세요!</p>\n	</div>\n	<div>\n		<textarea [(ngModel)]="text"></textarea>\n	</div>\n	<div class="imagechooser">\n		<button class="gallery" (click)="openGallery()" *ngIf="!pick">\n			<div>\n				<ion-icon name="camera"></ion-icon>\n				<span>사진 업로드 또는 변경</span>\n			</div>\n		</button>\n		<button class="image" (click)="openGallery()" *ngIf="pick">\n			<img src="{{ fileURL }}">\n		</button>\n	</div>\n</ion-content>\n\n<ion-footer>\n  <button ion-button full color="gray" (click)="write()">글 등록하기</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/chaerinlim/Desktop/28days-master/src/pages/communitywrite/communitywrite.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_community_community__["a" /* CommunityProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], CommunitywritePage);
    return CommunitywritePage;
}());

//# sourceMappingURL=communitywrite.js.map

/***/ })

});
//# sourceMappingURL=27.js.map