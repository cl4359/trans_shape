webpackJsonp([1],{

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(669);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

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

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordValidator; });
var PasswordValidator = (function () {
    function PasswordValidator() {
    }
    PasswordValidator.isValid = function (control) {
        var re = /\d/.test(control.value) && /[a-zA-Z]/.test(control.value);
        if (re) {
            return null;
        }
        return {
            "invalidPassword": true
        };
    };
    return PasswordValidator;
}());

//# sourceMappingURL=password.js.map

/***/ }),

/***/ 669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_email__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validators_password__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(402);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, auth, formBuilder, alertCtrl, loadingCtrl, storage) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.loginForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__validators_email__["a" /* EmailValidator */].isValid])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_5__validators_password__["a" /* PasswordValidator */].isValid])]
        });
    }
    LoginPage.prototype.signin = function () {
        var _this = this;
        if (!this.loginForm.valid) {
            console.log(this.loginForm.value.email + '/' + this.loginForm.value.password);
            var alert_1 = this.alertCtrl.create({
                title: '로그인 오류',
                message: '이메일 주소와 비밀번호의 형식이<br>올바르지 않습니다. 다시 확인해주세요!',
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
            this.auth.loginUser(this.loginForm.value.email, this.loginForm.value.password).then(function (authData) {
                _this.storage.set('localcred', {
                    email: _this.loginForm.value.email,
                    password: _this.loginForm.value.password
                });
                _this.navCtrl.setRoot('HomePage');
            }, function (error) {
                console.log(JSON.stringify(error));
                var message;
                if (error.code == 'auth/wrong-password') {
                    message = '비밀번호가 맞지 않습니다.<br>다시 확인해주세요!';
                }
                else if (error.code == 'auth/user-not-found') {
                    message = '등록되지 않은 이메일 주소입니다.<br>다시 확인해주세요!';
                }
                else {
                    message = error.message;
                    console.log('error msg' + message);
                }
                _this.loading.dismiss().then(function () {
                    var alert = _this.alertCtrl.create({
                        title: '로그인 오류',
                        message: message,
                        buttons: [
                            {
                                text: '확인',
                                role: 'cancel'
                            }
                        ]
                    });
                    alert.present();
                });
            });
            this.loading = this.loadingCtrl.create({
                dismissOnPageChange: true
            });
            this.loading.present();
        }
    };
    LoginPage.prototype.passwordreset = function () {
        this.navCtrl.push('PasswordresetPage');
    };
    LoginPage.prototype.signup = function () {
        this.navCtrl.push('SignupPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/chaerinlim/Desktop/28days-master/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="daysgreen">\n    <ion-title>로그인</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="cardsbg">\n\n  <ion-card>\n    <ion-card-content>\n\n    	<form [formGroup]="loginForm" novalidate>\n      	<h4>이메일 주소</h4>\n        <ion-input class="email" formControlName="email" type="email" placeholder="28days@gmail.com"></ion-input>\n      	<h4>비밀번호</h4>\n        <ion-input formControlName="password" type="password" placeholder="8자리 이상 숫자, 문자 조합"\n        	[class.invalid]="!loginForm.controls.password.valid && loginForm.controls.password.dirty"></ion-input>\n      	<p class="error-message" *ngIf="!loginForm.controls.password.valid && loginForm.controls.password.dirty">\n          8자리 이상, 숫자와 문자를 조합해주세요!\n        </p>\n      	<button class="pwreset" ion-button small float-right clear color="danger" (click)="passwordreset()">\n          비밀번호가 기억이 안 나세요?\n        </button>\n      	<button ion-button block color="daysgreen" (click)="signin()">\n          로그인\n        </button>\n      </form>\n\n    	<p class="prompt">아직 28DAYS에 가입을 안 하셨나요?<br>28DAYS와 함께<br>마음의 고민을 떨쳐내요!</p>\n\n      <div class="signup">\n      	<button ion-button block color="daysgreen" (click)="signup()">\n          회원가입하기\n        </button>\n      </div>\n\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/chaerinlim/Desktop/28days-master/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=1.js.map