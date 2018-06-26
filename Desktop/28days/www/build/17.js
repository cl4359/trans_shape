webpackJsonp([17],{

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MychatsPageModule", function() { return MychatsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mychats__ = __webpack_require__(671);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MychatsPageModule = (function () {
    function MychatsPageModule() {
    }
    MychatsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mychats__["a" /* MychatsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mychats__["a" /* MychatsPage */]),
            ],
        })
    ], MychatsPageModule);
    return MychatsPageModule;
}());

//# sourceMappingURL=mychats.module.js.map

/***/ }),

/***/ 671:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MychatsPage; });
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
 * Generated class for the MychatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MychatsPage = (function () {
    function MychatsPage(navCtrl, navParams, appCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appCtrl = appCtrl;
    }
    MychatsPage.prototype.requestchatpage = function () {
        this.appCtrl.getRootNavs()[0].push('RequestchatPage');
    };
    MychatsPage.prototype.requestedchatpage = function () {
        this.appCtrl.getRootNavs()[0].push('RequestedchatPage');
    };
    MychatsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mychats',template:/*ion-inline-start:"/Users/chaerinlim/Desktop/28days-master/src/pages/mychats/mychats.html"*/'<!--\n  Generated template for the MychatsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n\n	<ion-card class="cards-bg">\n    <ion-card-content>\n\n    	<h2>내가 요청한 채팅</h2>\n    	<p>내가 요청한 채팅의 목록을 확인할 수 있어요.</p>\n\n    	<div class="align-right">\n	    	<button ion-button clear small color="daysgreen" (click)="requestchatpage()">\n	    		자세히 보기\n	    	</button>\n	    </div>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class="cards-bg">\n    <ion-card-content>\n\n    	<h2>내가 요청 받은 채팅</h2>\n    	<p>내가 요청 받은 채팅의 목록을 확인할 수 있어요.</p>\n\n    	<div class="align-right">\n	    	<button ion-button clear small color="daysgreen" (click)="requestedchatpage()">\n	    		자세히 보기\n	    	</button>\n	    </div>\n\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/chaerinlim/Desktop/28days-master/src/pages/mychats/mychats.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], MychatsPage);
    return MychatsPage;
}());

//# sourceMappingURL=mychats.js.map

/***/ })

});
//# sourceMappingURL=17.js.map