webpackJsonp([7],{

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupporterPageModule", function() { return SupporterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__supporter__ = __webpack_require__(684);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SupporterPageModule = (function () {
    function SupporterPageModule() {
    }
    SupporterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__supporter__["a" /* SupporterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__supporter__["a" /* SupporterPage */]),
            ],
        })
    ], SupporterPageModule);
    return SupporterPageModule;
}());

//# sourceMappingURL=supporter.module.js.map

/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupporterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chat_chat__ = __webpack_require__(404);
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
 * Generated class for the SupporterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SupporterPage = (function () {
    function SupporterPage(navCtrl, navParams, chat, viewCtrl, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.chat = chat;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.loadComplete = false;
    }
    SupporterPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create();
        this.loading.present();
        this.count = 0;
        this.chat.getallusersExceptbuddy().then(function (res) {
            console.log('SupporterPage - getallusersExceptbuddy - userprofiles : ' + JSON.stringify(res));
            _this.userprofiles = res;
            _this.usernum = _this.userprofiles.length;
            if (_this.usernum == 0) {
                var alert_1 = _this.alertCtrl.create({
                    title: '대화 가능한 서포터가 없습니다.',
                    message: '현재 대화 중인 서포터를 제외한 다른 서포터가 없습니다.',
                    buttons: [
                        {
                            text: '확인',
                            role: 'cancel',
                            handler: function () {
                                _this.loading.dismiss();
                                _this.navCtrl.setRoot('HomePage');
                            }
                        }
                    ]
                });
                alert_1.present();
            }
            else {
                _this.user = _this.userprofiles[_this.count];
                _this.ratingsA = _this.makeRating(0);
                _this.ratingsB = _this.makeRating(0);
                _this.ratingsC = _this.makeRating(0);
                _this.ratingsD = _this.makeRating(0);
                _this.loadComplete = true;
            }
            _this.loading.dismiss();
        });
    };
    SupporterPage.prototype.nextSupporter = function () {
        if (this.usernum <= 1) {
            return;
        }
        this.count++;
        if (this.count == this.usernum) {
            this.count = 0;
        }
        this.user = this.userprofiles[this.count];
    };
    SupporterPage.prototype.sendRequest = function () {
        var _this = this;
        this.chat.initializebuddy(this.userprofiles[this.count]);
        this.navCtrl.push('SupporterchatPage').then(function () {
            var index = _this.viewCtrl.index;
            _this.navCtrl.remove(index);
        });
    };
    SupporterPage.prototype.makeRating = function (num) {
        var ratings = [];
        for (var i = 1; i < 6; i++) {
            var rating = {};
            if (i <= num) {
                rating.src = 'assets/star-full.png';
            }
            else {
                rating.src = 'assets/star.png';
            }
            ratings.push(rating);
        }
        // console.log(JSON.stringify(ratings));
        return ratings;
    };
    SupporterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-supporter',template:/*ion-inline-start:"/Users/chaerinlim/Desktop/28days-master/src/pages/supporter/supporter.html"*/'<!--\n  Generated template for the SupporterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="daysgreen">\n    <ion-title>1:1 서포터</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card class="cards-bg" *ngIf="loadComplete">\n    <ion-card-content>\n\n    	<p class="username">{{ user.username }}</p>\n\n      <p class="level">서포터 – Lv.1</p>\n\n      <p class="greeting">안녕하세요! [{{ user.username }}]입니다.<br>함께 나아가요!</p>\n\n      <button class="review">리뷰보기</button>\n\n      <div class="ratingcontainer" align="center">\n        <div>\n          <span>응답시간</span>\n          <ul class="ratingstars">\n            <li *ngFor="let rating of ratingsA">\n              <img src="{{ rating.src }}">\n            </li>\n          </ul>\n        </div>\n        <div>\n          <span>공감능력</span>\n          <ul class="ratingstars">\n            <li *ngFor="let rating of ratingsB">\n              <img src="{{ rating.src }}">\n            </li>\n          </ul>\n        </div>\n        <div>\n          <span>도움정도</span>\n          <ul class="ratingstars">\n            <li *ngFor="let rating of ratingsC">\n              <img src="{{ rating.src }}">\n            </li>\n          </ul>\n        </div>\n        <div>\n          <span>프로정신</span>\n          <ul class="ratingstars">\n            <li *ngFor="let rating of ratingsD">\n              <img src="{{ rating.src }}">\n            </li>\n          </ul>\n        </div>\n      </div>\n\n    	<button ion-button full clear color="black" (click)="sendRequest()">\n    		채팅 요청하기\n    	</button>\n    	<button ion-button full clear color="daysgreen" (click)="nextSupporter()">\n    		다른 서포터 찾기\n    	</button>\n\n    </ion-card-content>\n  </ion-card>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/chaerinlim/Desktop/28days-master/src/pages/supporter/supporter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_chat_chat__["a" /* ChatProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SupporterPage);
    return SupporterPage;
}());

//# sourceMappingURL=supporter.js.map

/***/ })

});
//# sourceMappingURL=7.js.map