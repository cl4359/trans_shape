webpackJsonp([13],{

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function() { return PaymentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment__ = __webpack_require__(677);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaymentPageModule = (function () {
    function PaymentPageModule() {
    }
    PaymentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__payment__["a" /* PaymentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__payment__["a" /* PaymentPage */]),
            ],
        })
    ], PaymentPageModule);
    return PaymentPageModule;
}());

//# sourceMappingURL=payment.module.js.map

/***/ }),

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
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


// import { IamportService } from 'iamport-ionic-kcp';

var PaymentPage = (function () {
    function PaymentPage(navCtrl, navParams, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.init();
        this.itemName = navParams.get("itemName");
        this.itemPrice = navParams.get("itemPrice");
        this.discountPrice = "0";
        this.totalPrice = (parseInt(this.itemPrice.replace(/,/g, '')) - parseInt(this.discountPrice)).toLocaleString();
    }
    PaymentPage.prototype.init = function () {
        if (typeof cordova !== 'undefined') {
            // Open the InAppBrowser Cordova plugin
            var browser = cordova.InAppBrowser.open('abc.com', '_blank', 'location=no,toolbar=no');
            // Add the event listener to the InAppBrowser instance
            browser.addEventListener('loadstop', function (event) {
                console.log("loadstop");
            });
            // this.platform.ready().then(() => {
            //   let browser = cordova.InAppBrowser('https://ionic.io', '_system');
            //   browser.on("loadstop").subscribe(()=> console.log("loadstop"));
            // });
        }
    };
    PaymentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentPage');
    };
    PaymentPage.prototype.payment = function (event) {
        // const param = {
        //   pay_method : 'card',
        //   merchant_uid: 'merchant_' + new Date().getTime(),
        //   name: '주문명:결제테스트',
        //   amount: 1,
        //   buyer_email: 'hscho1226@gmail.com',
        //   buyer_name: '조현성',
        //   buyer_tel: '010-4005-6928',
        //   buyer_addr: '서울특별시 강남구 삼성동',
        //   buyer_postcode: '123-456'
        // };
        // this.iamport.payment("imp30525823", param)
        //   .then((response) => {
        //     if (response.isSuccess()) {
        //       //TODO: 결제성공 처리
        //       console.log("payment success");
        //     }
        //   })
        //   .catch((err) => {
        //     alert(err)
        //   });
        // }
    };
    PaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-payment',template:/*ion-inline-start:"/Users/chaerinlim/Desktop/28days/src/pages/payment/payment.html"*/'<!--\n  Generated template for the PaymentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="daysgreen">\n    <ion-title>멤버십 결제하기</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card class="cards-bg">\n    <ion-card-content>\n      <div>\n        <p class="alignleft">{{ itemName + "" }}</p>\n        <p class="alignright">{{ itemPrice + "" }}원</p>\n      </div>\n      <div style="clear: both;"></div>\n      <ion-card class="cards-white">\n        <ion-card-content>\n          <p>혜택</p>\n          <p class="textcontent">28일 동안 선택한 서포터에게 횟수에 제한 없이 무제한으로 대화를 진행</p>\n        </ion-card-content>\n      </ion-card>\n    </ion-card-content>\n  </ion-card>  \n\n  <ion-card class="cards-bg">\n    <ion-card-content>\n      <p>쿠폰 적용</p>\n      <button></button>\n      <hr width="100%">\n      <div class="alignright">\n        <p>적용</p>\n        \n      </div>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class="cards-bg">\n    <ion-card-content>\n      <div>\n        <p class="alignleft">멤버십 금액</p>\n        <p class="alignright">{{ itemPrice + "" }}원</p>\n      </div>\n      <hr width="100%">\n      <div>\n        <p class="alignleft">할인 금액</p>\n        <p class="alignright">{{ discountPrice + "" }}원</p>\n      </div>\n      <hr width="100%">\n      <div>\n        <p class="alignleft green">결제 금액</p>\n        <p class="alignright green">{{ totalPrice + "" }}원</p>\n      </div>\n      <hr width="100%">\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class="cards-bg">\n    <ion-card-content>\n      <p>결제 수단 선택</p>\n      <label class="methodContainer">카드 결제\n        <input type="radio" checked="checked" name="paymentMethod" value="card">\n        <span class="checkmark"></span>\n      </label>\n      <label class="methodContainer">무통장 입금\n        <input type="radio" name="paymentMethod" value="trans">\n        <span class="checkmark"></span>\n      </label>\n    </ion-card-content>\n  </ion-card>\n\n  <button ion-button block color="daysgreen" (click)="payment()">\n    결제하기\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Users/chaerinlim/Desktop/28days/src/pages/payment/payment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */]])
    ], PaymentPage);
    return PaymentPage;
}());

//# sourceMappingURL=payment.js.map

/***/ })

});
//# sourceMappingURL=13.js.map