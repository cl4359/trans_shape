webpackJsonp([15],{

/***/ 639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MypagePageModule", function() { return MypagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mypage__ = __webpack_require__(673);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MypagePageModule = (function () {
    function MypagePageModule() {
    }
    MypagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mypage__["a" /* MypagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mypage__["a" /* MypagePage */]),
            ],
        })
    ], MypagePageModule);
    return MypagePageModule;
}());

//# sourceMappingURL=mypage.module.js.map

/***/ }),

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MypagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the MypagePage page.
 *
 * S팅e https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MypagePage = (function () {
    function MypagePage() {
        this.tab1 = "MychatsPage";
        this.tab2 = "MydepositoryPage";
        this.tab3 = "MysettingPage";
    }
    MypagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mypage',template:/*ion-inline-start:"/Users/chaerinlim/Desktop/28days-master/src/pages/mypage/mypage.html"*/'<!--\n  Generated template for the MychatsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="daysgreen">\n    <ion-title>나의 페이지</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n	<ion-tabs color="daysgreen" tabsPlacement="top">\n	  <ion-tab [root]="tab1" tabTitle="채팅기록"></ion-tab>\n	  <ion-tab [root]="tab2" tabTitle="보관소"></ion-tab>\n	  <ion-tab [root]="tab3" tabTitle="세팅"></ion-tab>\n	</ion-tabs>\n\n</ion-content>\n'/*ion-inline-end:"/Users/chaerinlim/Desktop/28days-master/src/pages/mypage/mypage.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], MypagePage);
    return MypagePage;
}());

//# sourceMappingURL=mypage.js.map

/***/ })

});
//# sourceMappingURL=15.js.map