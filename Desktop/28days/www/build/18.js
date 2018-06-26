webpackJsonp([18],{

/***/ 636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeditatePageModule", function() { return MeditatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__meditate__ = __webpack_require__(670);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MeditatePageModule = (function () {
    function MeditatePageModule() {
    }
    MeditatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__meditate__["a" /* MeditatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__meditate__["a" /* MeditatePage */]),
            ],
        })
    ], MeditatePageModule);
    return MeditatePageModule;
}());

//# sourceMappingURL=meditate.module.js.map

/***/ }),

/***/ 670:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeditatePage; });
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
 * Generated class for the MeditatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MeditatePage = (function () {
    function MeditatePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.meditations = [
            {
                name: "깊은 심호흡",
                audioSource: "assets/audio/sample1.m4a",
            },
            {
                name: "바디 스캔",
                audioSource: "assets/audio/sample2.m4a",
            },
            {
                name: "인내의 마음",
                audioSource: "assets/audio/sample3.m4a",
            },
            {
                name: "초심자의 마음",
                audioSource: "assets/audio/sample4.m4a",
            },
            {
                name: "나에 대한 신뢰",
                audioSource: "assets/audio/sample5.m4a",
            },
        ];
        this.shownMeditation = null;
    }
    MeditatePage.prototype.toggleMeditation = function (idx) {
        if (this.isMeditationShown(idx)) {
            this.shownMeditation = null;
        }
        else {
            this.shownMeditation = idx;
        }
    };
    ;
    MeditatePage.prototype.isMeditationShown = function (idx) {
        return this.shownMeditation === idx;
    };
    ;
    MeditatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-meditate',template:/*ion-inline-start:"/Users/chaerinlim/Desktop/28days-master/src/pages/meditate/meditate.html"*/'<!--\n  Generated template for the MeditatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="daysgreen">\n    <ion-title>마음챙김 명상</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-list >\n		<div class="list-item" \n				  *ngFor="let m of meditations; let i=index" \n				  (click)="toggleMeditation(\'idx\'+i)" \n				  [ngClass]="{active: isMeditationShown(\'idx\'+i)}">\n			&middot;  {{m.name}}\n			<div *ngIf="isMeditationShown(\'idx\'+i)">\n				<audio controls>\n					<source src="{{ m.audioSource }}" type="audio/mp4">\n				</audio>\n			</div>\n		</div>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/chaerinlim/Desktop/28days-master/src/pages/meditate/meditate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], MeditatePage);
    return MeditatePage;
}());

//# sourceMappingURL=meditate.js.map

/***/ })

});
//# sourceMappingURL=18.js.map