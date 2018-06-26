webpackJsonp([22],{

/***/ 631:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GogosignupPageModule", function() { return GogosignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gogosignup__ = __webpack_require__(665);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GogosignupPageModule = (function () {
    function GogosignupPageModule() {
    }
    GogosignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__gogosignup__["a" /* GogosignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__gogosignup__["a" /* GogosignupPage */]),
            ],
        })
    ], GogosignupPageModule);
    return GogosignupPageModule;
}());

//# sourceMappingURL=gogosignup.module.js.map

/***/ }),

/***/ 665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GogosignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
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
 * Generated class for the GogosignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GogosignupPage = (function () {
    function GogosignupPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.showbtn = false;
    }
    GogosignupPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.nb.backButtonClick = function () {
            _this.backhandler();
        };
        this.username = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.displayName;
        this.chatmessages = [];
        this.gogomsg('28DAYS에 가입한 걸 환영해!!!', true).then(function () {
            _this.gogomsg("28DAYS\uB97C \uD1B5\uD574 " + _this.username + "\uC758 \uB9C8\uC74C\uC774 \uD3B8\uD574\uC9C8 \uC218 \uC788\uC744 \uAC70\uC57C~! " + _this.username + "\uC758 \uCE90\uB9AD\uD130\uB97C \uC124\uC815\uD560 \uC218\uAC00 \uC788\uB294\uB370 \uD55C \uBC88 \uBCF4\uB7EC \uAC00\uBCFC\uB798?", false).then(function () {
                setTimeout(function () {
                    _this.showbtn = true;
                }, 500);
            });
        });
    };
    GogosignupPage.prototype.backhandler = function () {
        this.navCtrl.setRoot('HomePage');
    };
    GogosignupPage.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    GogosignupPage.prototype.scrollToBottom = function () {
        this.content.scrollToBottom(0);
    };
    GogosignupPage.prototype.createmsg = function (showimage, gogo, message) {
        return {
            showimage: showimage,
            gogo: gogo,
            message: message,
            setblack: !gogo
        };
    };
    GogosignupPage.prototype.gogomsg = function (text, showimage) {
        var _this = this;
        var promise = new Promise(function (resolve) {
            var msg = _this.createmsg(showimage, true, '메시지를 입력 중입니다.');
            _this.chatmessages.push(msg);
            var count = 0;
            var intv = setInterval(function () {
                if (count % 3 == 0) {
                    msg.message = '메시지를 입력 중입니다.';
                }
                else if (count % 3 == 1) {
                    msg.message = '메시지를 입력 중입니다..';
                }
                else {
                    msg.message = '메시지를 입력 중입니다...';
                }
                count++;
            }, 400);
            setTimeout(function () {
                clearInterval(intv);
                msg.setblack = true;
                msg.message = text;
                resolve(true);
            }, 2000);
        });
        return promise;
    };
    GogosignupPage.prototype.button_1 = function () {
        this.btntext = '응 그래!';
        this.button();
    };
    GogosignupPage.prototype.button_2 = function () {
        this.btntext = '다음에 할래.';
        this.button();
    };
    GogosignupPage.prototype.button = function () {
        var _this = this;
        this.chatmessages.push(this.createmsg(false, false, "" + this.btntext));
        this.showbtn = false;
        if (this.btntext == '응 그래!') {
            this.moveToCharacter();
        }
        else {
            this.gogomsg('그래~ 메인 메뉴에서 다시 선택할 수 있어~!', true).then(function () {
                _this.moveToMain();
            });
        }
    };
    GogosignupPage.prototype.moveToCharacter = function () {
        var _this = this;
        setTimeout(function () {
            _this.navCtrl.push('CharacterPage');
        }, 1000);
    };
    GogosignupPage.prototype.moveToMain = function () {
        var _this = this;
        setTimeout(function () {
            _this.navCtrl.setRoot('HomePage');
        }, 1000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Navbar */])
    ], GogosignupPage.prototype, "nb", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], GogosignupPage.prototype, "content", void 0);
    GogosignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-gogosignup',template:/*ion-inline-start:"/Users/chaerinlim/Desktop/28days/src/pages/gogosignup/gogosignup.html"*/'<!--\n  Generated template for the GogosignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="daysgreen">\n    <ion-title>고고</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content #content>\n\n	<ul>\n    <li *ngFor="let msg of chatmessages">\n    	<div class="clearfix">\n		    <img *ngIf="msg.showimage" src="assets/gogo.png">\n	    	<p class="bubble buddy" [ngClass]="{setblack: msg.setblack}" *ngIf="msg.gogo">{{msg.message}}</p>\n	    	<p class="bubble me" *ngIf="!msg.gogo">{{msg.message}}</p>\n	    </div>\n  	</li>\n  </ul>\n\n</ion-content>\n\n<ion-footer>\n\n  <div class="btn2" *ngIf="showbtn">\n    <button class="btn2_1" (click)="button_1()">\n      응 그래!\n    </button>\n    <button (click)="button_2()">\n      다음에 할래.\n    </button>\n  </div>\n\n</ion-footer>\n'/*ion-inline-end:"/Users/chaerinlim/Desktop/28days/src/pages/gogosignup/gogosignup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], GogosignupPage);
    return GogosignupPage;
}());

//# sourceMappingURL=gogosignup.js.map

/***/ })

});
//# sourceMappingURL=22.js.map