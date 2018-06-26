webpackJsonp([25],{

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmotionbasketPageModule", function() { return EmotionbasketPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__emotionbasket__ = __webpack_require__(662);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EmotionbasketPageModule = (function () {
    function EmotionbasketPageModule() {
    }
    EmotionbasketPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__emotionbasket__["a" /* EmotionbasketPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__emotionbasket__["a" /* EmotionbasketPage */]),
            ],
        })
    ], EmotionbasketPageModule);
    return EmotionbasketPageModule;
}());

//# sourceMappingURL=emotionbasket.module.js.map

/***/ }),

/***/ 662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmotionbasketPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_emotion_emotion__ = __webpack_require__(406);
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
 * Generated class for the EmotionbasketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EmotionbasketPage = (function () {
    function EmotionbasketPage(navCtrl, navParams, alertCtrl, emotion, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.emotion = emotion;
        this.loadingCtrl = loadingCtrl;
        this.one = 0;
        this.ten = 0;
        this.hundred = 0;
        this.thousand = 0;
        this.tenthousand = 0;
    }
    EmotionbasketPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad - EmotionbasketPage');
        this.loading = this.loadingCtrl.create();
        this.loading.present();
        this.emotion.getEmotion().then(function (res) {
            console.log('EmotionbasketPage - ionViewDidLoad: length: ' + res);
            _this.setlength(res);
            _this.loading.dismiss();
        });
    };
    EmotionbasketPage.prototype.ionViewWillEnter = function () {
        console.log('emotionbasket - ionViewWillEnter');
        this.setlength(this.emotion.length);
    };
    EmotionbasketPage.prototype.alert = function () {
        var alert = this.alertCtrl.create({
            title: '쓰레기통에 버린 건 잊어버려요~',
            message: '버려버린 감정쓰레기들을 다시 보는 건 내 감정에 도움이 되지 않을 거에요. 버린 감정쓰레기는 28DAYS가 모두 없애버릴게요!',
            buttons: [
                {
                    text: '버리자!',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        alert.present();
    };
    EmotionbasketPage.prototype.emotionthrow = function () {
        this.navCtrl.push('EmotionthrowPage');
    };
    EmotionbasketPage.prototype.setlength = function (len) {
        // var length = len;
        var length = (len - len % 10) / 10;
        this.one = length % 10;
        this.ten = (length - length % 10) / 10 % 10;
        this.hundred = (length - length % 100) / 100 % 10;
        this.thousand = (length - length % 1000) / 1000 % 10;
        this.tenthousand = (length - length % 10000) / 10000 % 10;
    };
    EmotionbasketPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-emotionbasket',template:/*ion-inline-start:"/Users/chaerinlim/Desktop/28days-master/src/pages/emotionbasket/emotionbasket.html"*/'<!--\n  Generated template for the EmotionbasketPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="daysgreen">\n    <ion-title>감정 쓰레기통</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n	<div class="container">\n		<table>\n			<div class="outer">\n			  <div class="middle">\n			    <div class="inner">\n						<p class="text">지금까지 내가 버린 감정쓰레기</p>\n						<span>{{ tenthousand }}</span>\n						<span>{{ thousand }}</span>\n						<span>{{ hundred }}</span>\n						<span>{{ ten }}</span>\n						<span>{{ one }}</span>\n						<p class="kg">Kg</p>\n						<div class="image">\n							<button (click)="alert()">\n								<img src="assets/basket-in.png">\n							</button>\n						</div>\n					</div>\n				</div>\n	    </div>\n	    <tr>\n		    <td valign="bottom">\n		      <div>\n		      	<button (click)="emotionthrow()" class="btn">감정쓰레기 버리기</button>\n		      </div>\n		    </td>\n	    </tr>\n	  </table>\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/chaerinlim/Desktop/28days-master/src/pages/emotionbasket/emotionbasket.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_emotion_emotion__["a" /* EmotionProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], EmotionbasketPage);
    return EmotionbasketPage;
}());

//# sourceMappingURL=emotionbasket.js.map

/***/ })

});
//# sourceMappingURL=25.js.map