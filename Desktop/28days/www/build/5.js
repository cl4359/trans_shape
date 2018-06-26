webpackJsonp([5],{

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPageModule", function() { return TestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__test__ = __webpack_require__(686);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TestPageModule = (function () {
    function TestPageModule() {
    }
    TestPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__test__["a" /* TestPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__test__["a" /* TestPage */]),
            ],
        })
    ], TestPageModule);
    return TestPageModule;
}());

//# sourceMappingURL=test.module.js.map

/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestPage; });
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
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestPage = (function () {
    function TestPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TestPage.prototype.depressiontest = function () {
        this.navCtrl.push('TestdepressionPage');
    };
    TestPage.prototype.anxietytest = function () {
        this.navCtrl.push('TestanxietyPage');
    };
    TestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-test',template:/*ion-inline-start:"/Users/chaerinlim/Desktop/28days-master/src/pages/test/test.html"*/'<!--\n  Generated template for the TestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="daysgreen">\n    <ion-title>자가진단</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n	<ion-card class="cards">\n    <ion-card-content>\n\n    	<h2>우울증 자가진단</h2>\n    	<p>PHQ-9 TEST는 우울증 자가진단을 위한 9가지 질문으로 이루어진 환자 건강 설문지입니다. 이를 통해 심각도를 5단계로 알아볼 수 있습니다.</p>\n    	<p class="warning">보다 정확한 내용은 전문의의 도움을 받아야 합니다.</p>\n\n    	<div class="align-right">\n	    	<button ion-button clear small color="daysgreen" (click)="depressiontest()">\n	    		자가진단 시작하기\n	    	</button>\n	    </div>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class="cards">\n    <ion-card-content>\n\n    	<h2>불안 자가진단</h2>\n    	<p>STAI-X-1 TEST는 불안 자가진단을 위한 20가지 질문으로 이루어진 환자 건강 설문지입니다. 이를 통해 심각도를 4단계로 알아볼 수 있습니다.</p>\n    	<p class="warning">보다 정확한 내용은 전문의의 도움을 받아야 합니다.</p>\n\n    	<div class="align-right">\n	    	<button ion-button clear small color="daysgreen" (click)="anxietytest()">\n	    		자가진단 시작하기\n	    	</button>\n	    </div>\n\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/chaerinlim/Desktop/28days-master/src/pages/test/test.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], TestPage);
    return TestPage;
}());

//# sourceMappingURL=test.js.map

/***/ })

});
//# sourceMappingURL=5.js.map