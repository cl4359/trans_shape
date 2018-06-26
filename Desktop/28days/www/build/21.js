webpackJsonp([21],{

/***/ 632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GogosupporterPageModule", function() { return GogosupporterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gogosupporter__ = __webpack_require__(666);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GogosupporterPageModule = (function () {
    function GogosupporterPageModule() {
    }
    GogosupporterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__gogosupporter__["a" /* GogosupporterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__gogosupporter__["a" /* GogosupporterPage */]),
            ],
        })
    ], GogosupporterPageModule);
    return GogosupporterPageModule;
}());

//# sourceMappingURL=gogosupporter.module.js.map

/***/ }),

/***/ 666:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GogosupporterPage; });
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
 * Generated class for the GogosupporterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GogosupporterPage = (function () {
    function GogosupporterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.showbtn1 = false;
        this.showbtn2 = false;
    }
    GogosupporterPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.chatmessages = [];
        this.gogomsg('1:1 서포터라는 것이\n생소할까봐 설명을 준비해봤어~', true).then(function () {
            _this.gogomsg('1:1 서포터는 나와 비슷한 증상을 가진 사람들과 서로 이야기 하면서 서로의 경험을 이야기 하는거야', false).then(function () {
                setTimeout(function () {
                    _this.showbtn1 = true;
                }, 500);
            });
        });
    };
    GogosupporterPage.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    GogosupporterPage.prototype.scrollToBottom = function () {
        this.content.scrollToBottom(0);
    };
    GogosupporterPage.prototype.createmsg = function (showimage, gogo, message) {
        return {
            showimage: showimage,
            gogo: gogo,
            message: message,
            setblack: !gogo
        };
    };
    GogosupporterPage.prototype.gogomsg = function (text, showimage) {
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
    GogosupporterPage.prototype.button1 = function () {
        var _this = this;
        this.chatmessages.push(this.createmsg(false, false, '그렇구나!'));
        this.showbtn1 = false;
        this.gogomsg('나와 비슷한 사람이 있고, 서로 어떻게 이겨나가고 있는지 이야기 하는 걸로도 마음이 나아질 수 있거든~!', true).then(function () {
            _this.gogomsg('다만, 대화에서 개인정보나 금융정보를 이야기하는 것은 위험하니까 조심해야 해!', false).then(function () {
                setTimeout(function () {
                    _this.showbtn2 = true;
                }, 500);
            });
        });
    };
    GogosupporterPage.prototype.button2 = function () {
        var _this = this;
        this.chatmessages.push(this.createmsg(false, false, '알았어!'));
        this.showbtn2 = false;
        this.gogomsg('대화 시작 후 30분 동안은 무료이고, 이후에는 결제가 필요해~', true).then(function () {
            _this.gogomsg('그럼 이제 서포터를 찾아보자~!', false).then(function () {
                _this.moveToSupporter();
            });
        });
    };
    GogosupporterPage.prototype.moveToSupporter = function () {
        var _this = this;
        setTimeout(function () {
            _this.navCtrl.push('SupporterPage');
        }, 1000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], GogosupporterPage.prototype, "content", void 0);
    GogosupporterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-gogosupporter',template:/*ion-inline-start:"/Users/chaerinlim/Desktop/28days-master/src/pages/gogosupporter/gogosupporter.html"*/'<!--\n  Generated template for the GogosupporterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="daysgreen">\n    <ion-title>고고</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content #content>\n\n	<ul>\n    <li *ngFor="let msg of chatmessages">\n    	<div class="clearfix">\n		    <img *ngIf="msg.showimage" src="assets/gogo.png">\n	    	<p class="bubble buddy" [ngClass]="{setblack: msg.setblack}" *ngIf="msg.gogo">{{msg.message}}</p>\n	    	<p class="bubble me" *ngIf="!msg.gogo">{{msg.message}}</p>\n	    </div>\n  	</li>\n  </ul>\n\n</ion-content>\n\n<ion-footer>\n\n  <div class="btn1" *ngIf="showbtn1">\n    <button (click)="button1()">\n      그렇구나.\n    </button>\n  </div>\n\n  <div class="btn1" *ngIf="showbtn2">\n    <button (click)="button2()">\n      알았어!\n    </button>\n  </div>\n\n</ion-footer>\n'/*ion-inline-end:"/Users/chaerinlim/Desktop/28days-master/src/pages/gogosupporter/gogosupporter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], GogosupporterPage);
    return GogosupporterPage;
}());

//# sourceMappingURL=gogosupporter.js.map

/***/ })

});
//# sourceMappingURL=21.js.map