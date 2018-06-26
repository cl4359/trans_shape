webpackJsonp([6],{

/***/ 650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupporterchatPageModule", function() { return SupporterchatPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__supporterchat__ = __webpack_require__(685);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SupporterchatPageModule = (function () {
    function SupporterchatPageModule() {
    }
    SupporterchatPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__supporterchat__["a" /* SupporterchatPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__supporterchat__["a" /* SupporterchatPage */]),
            ],
        })
    ], SupporterchatPageModule);
    return SupporterchatPageModule;
}());

//# sourceMappingURL=supporterchat.module.js.map

/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupporterchatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chat_chat__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(26);
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
 * Generated class for the SupporterchatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SupporterchatPage = (function () {
    function SupporterchatPage(navCtrl, navParams, chat, events, zone, formBuilder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.chat = chat;
        this.events = events;
        this.zone = zone;
        this.formBuilder = formBuilder;
        this.showinput = false;
        console.log('SupporterchatPage - constructor');
        this.buddy = this.chat.buddy;
        this.events.subscribe('newmessage', function () {
            _this.chatmessages = [];
            _this.zone.run(function () {
                _this.chatmessages = _this.chat.chatmessages;
            });
        });
        this.inputForm = formBuilder.group({
            txt: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
    }
    SupporterchatPage.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    SupporterchatPage.prototype.scrollToBottom = function () {
        this.content.scrollToBottom(0);
    };
    SupporterchatPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('SupporterchatPage - ionViewDidLoad');
        this.chat.checkstart().then(function (isstart) {
            if (isstart) {
                _this.gogomessages = [];
                _this.gogomsg('서포터에게 채팅을 요청했어!\n확인 후 Push 알림을 줄 거야~!', true).then(function () {
                    _this.gogomsg('요즘 가장 해결하고 싶은 고민이 뭐야? 어떤 것 때문에 요청을 하게 됐니?\n얘기해줄 수 있어?', false).then(function () {
                        _this.gogomsg('서포터에게 알려주면 좀 더 편하게 얘기를 할 수 있을 것 같아서~', false).then(function () {
                            setTimeout(function () {
                                _this.showinput = true;
                                _this.chat.getallmessages();
                            }, 500);
                        });
                    });
                });
            }
            else {
                _this.gogomessages = [
                    _this.createmsg(true, '서포터에게 채팅을 요청했어!\n확인 후 Push 알림을 줄 거야~!', true),
                    _this.createmsg(false, '요즘 가장 해결하고 싶은 고민이 뭐야? 어떤 것 때문에 요청을 하게 됐니?\n얘기해줄 수 있어?', true),
                    _this.createmsg(false, '서포터에게 알려주면 좀 더 편하게 얘기를 할 수 있을 것 같아서~', true)
                ];
                _this.showinput = true;
                _this.chat.getallmessages();
            }
        });
        // this.chat.getallmessages();
    };
    SupporterchatPage.prototype.ionViewWillLeave = function () {
        this.events.unsubscribe('newmessage');
        this.chat.stoplistenmessages();
    };
    SupporterchatPage.prototype.sendmessage = function () {
        if (this.inputForm.valid) {
            var txt = this.inputForm.value.txt;
            this.inputForm.reset();
            // if-else for testing only
            if (txt == 'pay') {
                this.payMembership();
            }
            else {
                this.chat.sendmessage(txt);
            }
        }
    };
    SupporterchatPage.prototype.createmsg = function (showimage, message, setblack) {
        return {
            showimage: showimage,
            message: message,
            setblack: setblack
        };
    };
    SupporterchatPage.prototype.gogomsg = function (text, showimage) {
        var _this = this;
        var promise = new Promise(function (resolve) {
            var msg = _this.createmsg(showimage, '메시지를 입력 중입니다.', false);
            _this.gogomessages.push(msg);
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
    SupporterchatPage.prototype.payMembership = function () {
        this.navCtrl.push('PaymentPage', {
            itemName: "무제한 서포터",
            itemPrice: "9,900"
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], SupporterchatPage.prototype, "content", void 0);
    SupporterchatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-supporterchat',template:/*ion-inline-start:"/Users/chaerinlim/Desktop/28days/src/pages/supporterchat/supporterchat.html"*/'<!--\n  Generated template for the SupporterchatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="daysgreen">\n    <ion-title>{{buddy.username}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content #content class="bg">\n\n  <ul>\n    <li *ngFor="let msg of gogomessages">\n      <div>\n        <img *ngIf="msg.showimage" src="assets/gogo.png">\n        <p class="bubble gogo" [ngClass]="{setblack: msg.setblack}">{{msg.message}}</p>\n      </div>\n    </li>\n  </ul>\n\n  <ul class="chat">\n    <li *ngFor="let msg of chatmessages">\n    	<div *ngIf="msg.sentby == buddy.uid">\n		    <img *ngIf="msg.showprofileimage" src="{{buddy.photoURL}}">\n	    	<p class="bubble buddy">{{ msg.message }}</p>\n        <span class="timebuddy">{{ msg.timestamp | date:\'hh:mm a\' }}</span>\n      </div>\n      <div class="mymsg" *ngIf="msg.sentby != buddy.uid">\n        <span class="time">{{ msg.timestamp | date:\'hh:mm a\' }}</span>\n	    	<p class="bubble me">{{ msg.message }}</p>\n	    </div>\n  	</li>\n  </ul>\n\n</ion-content>\n\n<ion-footer *ngIf="showinput">\n\n  <form [formGroup]="inputForm" class="footerform">\n    <input formControlName="txt" type="text">\n    <button (click)="sendmessage()">\n      <img src="assets/send.png">\n    </button>\n  </form>\n\n</ion-footer>\n'/*ion-inline-end:"/Users/chaerinlim/Desktop/28days/src/pages/supporterchat/supporterchat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_chat_chat__["a" /* ChatProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], SupporterchatPage);
    return SupporterchatPage;
}());

//# sourceMappingURL=supporterchat.js.map

/***/ })

});
//# sourceMappingURL=6.js.map