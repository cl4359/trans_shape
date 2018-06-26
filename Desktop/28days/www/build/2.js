webpackJsonp([2],{

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordresetPageModule", function() { return PasswordresetPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__passwordreset__ = __webpack_require__(675);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PasswordresetPageModule = (function () {
    function PasswordresetPageModule() {
    }
    PasswordresetPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__passwordreset__["a" /* PasswordresetPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__passwordreset__["a" /* PasswordresetPage */]),
            ],
        })
    ], PasswordresetPageModule);
    return PasswordresetPageModule;
}());

//# sourceMappingURL=passwordreset.module.js.map

/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidator; });
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.isValid = function (control) {
        var re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(control.value);
        if (re) {
            return null;
        }
        return {
            "invalidEmail": true
        };
    };
    return EmailValidator;
}());

//# sourceMappingURL=email.js.map

/***/ }),

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordresetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_email__ = __webpack_require__(654);
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
 * Generated class for the PasswordresetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PasswordresetPage = (function () {
    function PasswordresetPage(navCtrl, auth, formBuilder, alertCtrl) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.resetPasswordForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__validators_email__["a" /* EmailValidator */].isValid])],
        });
    }
    PasswordresetPage.prototype.resetpassword = function () {
        var _this = this;
        if (!this.resetPasswordForm.valid) {
            console.log(this.resetPasswordForm.value.email);
            var alert_1 = this.alertCtrl.create({
                title: '이메일 주소',
                message: '이메일 주소의 형식이<br>올바르지 않습니다. 다시 확인해주세요!',
                buttons: [
                    {
                        text: '확인',
                        role: 'cancel'
                    }
                ]
            });
            alert_1.present();
        }
        else {
            this.auth.resetPassword(this.resetPasswordForm.value.email).then(function (user) {
                var alert = _this.alertCtrl.create({
                    title: '비밀번호 재설정 링크 발송 완료!',
                    message: "기입하신 이메일로 비밀번호 재설정 링크를<br>보냈어요. 이메일을 확인해주세요.",
                    buttons: [
                        {
                            text: '확인',
                            role: 'cancel',
                            handler: function () {
                                _this.navCtrl.pop();
                            }
                        }
                    ]
                });
                alert.present();
            }, function (error) {
                console.log(JSON.stringify(error));
                var message;
                if (error.code == 'auth/user-not-found') {
                    message = '등록되지 않은 이메일 주소입니다.<br>다시 확인해주세요!';
                }
                else {
                    message = error.message;
                }
                var errorAlert = _this.alertCtrl.create({
                    title: '이메일 주소',
                    message: message,
                    buttons: [
                        {
                            text: '확인',
                            role: 'cancel'
                        }
                    ]
                });
                errorAlert.present();
            });
        }
    };
    PasswordresetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-passwordreset',template:/*ion-inline-start:"/Users/chaerinlim/Desktop/28days-master/src/pages/passwordreset/passwordreset.html"*/'<!--\n  Generated template for the PasswordresetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="daysgreen">\n    <ion-title>비밀번호 찾기</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="cardsbg">\n\n	<ion-card>\n    <ion-card-content>\n\n    	<form [formGroup]="resetPasswordForm" (submit)="resetpassword()" novalidate>\n    		<h4>이메일 주소</h4>\n        <ion-input formControlName="email" type="email" placeholder="28days@gmail.com"\n        	[class.invalid]="!resetPasswordForm.controls.email.valid && resetPasswordForm.controls.email.dirty"></ion-input>\n	    	<p class="error-message" *ngIf="!resetPasswordForm.controls.email.valid && resetPasswordForm.controls.email.dirty">이메일 주소를 다시 확인해주세요!</p>\n\n	  		<p class="prompt">아래 버튼을 누르시면 기입한 이메일로<br>비밀번호 재설정 안내 절차를 발송합니다.</p>\n\n		    <button ion-button block color="daysgreen" type="submit">\n		      비밀번호 재설정 이메일 받기\n		    </button>\n\n		  </form>\n\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/chaerinlim/Desktop/28days-master/src/pages/passwordreset/passwordreset.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PasswordresetPage);
    return PasswordresetPage;
}());

//# sourceMappingURL=passwordreset.js.map

/***/ })

});
//# sourceMappingURL=2.js.map