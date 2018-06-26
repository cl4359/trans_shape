webpackJsonp([31],{

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterPageModule", function() { return CharacterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__character__ = __webpack_require__(656);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CharacterPageModule = (function () {
    function CharacterPageModule() {
    }
    CharacterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__character__["a" /* CharacterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__character__["a" /* CharacterPage */]),
            ],
        })
    ], CharacterPageModule);
    return CharacterPageModule;
}());

//# sourceMappingURL=character.module.js.map

/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
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
 * Generated class for the CharacterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CharacterPage = (function () {
    function CharacterPage(navCtrl, navParams, user, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = user;
        this.loadingCtrl = loadingCtrl;
        // flags which character is picked
        this.p = [false, false, false, false];
    }
    CharacterPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('original profile index : ' + __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.photoURL.charAt(14));
        this.originpick = parseInt(__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.photoURL.charAt(14));
        this.pick = this.originpick;
        // set flags which character was set
        if (this.pick != 0) {
            this.p[this.pick - 1] = true;
        }
        // set back button click listener
        this.nb.backButtonClick = function () {
            _this.backhandler();
        };
    };
    CharacterPage.prototype.backhandler = function () {
        // go to home page
        this.navCtrl.setRoot('HomePage');
    };
    CharacterPage.prototype.changecharacter = function (num) {
        // user pick a specific character (index : num)
        this.p = [false, false, false, false];
        this.p[num] = true;
        this.pick = num + 1;
    };
    CharacterPage.prototype.setcharacter = function () {
        var _this = this;
        if (this.pick == this.originpick) {
            // not change character image
            this.navCtrl.setRoot('HomePage');
            return;
        }
        // change character image
        this.user.updatePhoto("assets/profile" + this.pick + ".png").then(function () {
            _this.navCtrl.setRoot('HomePage');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Navbar */])
    ], CharacterPage.prototype, "nb", void 0);
    CharacterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-character',template:/*ion-inline-start:"/Users/chaerinlim/Desktop/28days-master/src/pages/character/character.html"*/'<!--\n  Generated template for the CharacterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="daysgreen">\n    <ion-title>캐릭터</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<div class="text">\n		<p>자신을 대신 나타내줄 수 있는<br>캐릭터를 선택해볼까요?</p>\n	</div>\n\n	<table class="profiles">\n	  <tr>\n	    <td align="center">\n	    	<div>\n	    		<button class="photo" [class.darken]="!p[0]" (click)="changecharacter(0)">\n						<img src="assets/profile1.png">\n					</button>\n					<span *ngIf="p[0]"></span>\n		    </div>\n	    </td>\n	    <td align="center">\n	    	<div>\n	    		<button class="photo" [class.darken]="!p[1]" (click)="changecharacter(1)">\n						<img src="assets/profile2.png">\n					</button>\n					<span *ngIf="p[1]"></span>\n		    </div>\n	    </td>\n	  </tr>\n	  <tr>\n	    <td align="center">\n	    	<div>\n	    		<button class="photo" [class.darken]="!p[2]" (click)="changecharacter(2)">\n						<img src="assets/profile3.png">\n					</button>\n					<span *ngIf="p[2]"></span>\n		    </div>\n	    </td>\n	    <td align="center">\n	    	<div>\n	    		<button class="photo" [class.darken]="!p[3]" (click)="changecharacter(3)">\n						<img src="assets/profile4.png">\n					</button>\n					<span *ngIf="p[3]"></span>\n		    </div>\n	    </td>\n	  </tr>\n	</table>\n\n	<button ion-button block color="daysgreen" (click)="setcharacter()">\n    캐릭터 정하기\n  </button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/chaerinlim/Desktop/28days-master/src/pages/character/character.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], CharacterPage);
    return CharacterPage;
}());

//# sourceMappingURL=character.js.map

/***/ })

});
//# sourceMappingURL=31.js.map