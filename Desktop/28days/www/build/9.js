webpackJsonp([9],{

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestedchatPageModule", function() { return RequestedchatPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__requestedchat__ = __webpack_require__(682);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RequestedchatPageModule = (function () {
    function RequestedchatPageModule() {
    }
    RequestedchatPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__requestedchat__["a" /* RequestedchatPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__requestedchat__["a" /* RequestedchatPage */]),
            ],
        })
    ], RequestedchatPageModule);
    return RequestedchatPageModule;
}());

//# sourceMappingURL=requestedchat.module.js.map

/***/ }),

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestedchatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chat_chat__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(148);
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
 * Generated class for the RequestedchatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RequestedchatPage = (function () {
    function RequestedchatPage(navCtrl, navParams, chat, user) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.chat = chat;
        this.user = user;
    }
    RequestedchatPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.chat.getallRequestedinfos().then(function (info) {
            _this.requestedinfos = info;
        });
    };
    RequestedchatPage.prototype.supporterchat = function (item) {
        var _this = this;
        this.user.getUserprofile(item.buddyuid).then(function (userprofile) {
            _this.chat.initializebuddy(userprofile);
            _this.navCtrl.push('SupporterchatPage');
        });
    };
    RequestedchatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-requestedchat',template:/*ion-inline-start:"/Users/chaerinlim/Desktop/28days/src/pages/requestedchat/requestedchat.html"*/'<!--\n  Generated template for the RequestedchatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="daysgreen">\n    <ion-title>내가 요청 받은 채팅</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg">\n\n	<ion-list no-lines>\n		<ion-item-sliding *ngFor="let item of requestedinfos" (click)="supporterchat(item)">\n			<ion-item class="bottom-border">\n	      <ion-avatar item-start>\n	        <img src="{{ item.buddyphotoURL }}">\n	      </ion-avatar>\n	      <span class="username">{{ item.buddyusername }}</span>\n	      <span class="time">{{ item.recenttimestamp | date:\'hh:mm a\' }}</span>\n	      <div class="msg">{{ item.recentmessage }}</div>\n	    </ion-item>\n		</ion-item-sliding>\n		<ion-item-options>\n      <button ion-button color="danger">\n        <ion-icon name="trash"></ion-icon>\n      </button>\n    </ion-item-options>\n	</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/chaerinlim/Desktop/28days/src/pages/requestedchat/requestedchat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_chat_chat__["a" /* ChatProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */]])
    ], RequestedchatPage);
    return RequestedchatPage;
}());

//# sourceMappingURL=requestedchat.js.map

/***/ })

});
//# sourceMappingURL=9.js.map