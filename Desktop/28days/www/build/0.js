webpackJsonp([0],{

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(680);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
            ],
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

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

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validators_email__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validators_match_other_validator__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__validators_password__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(402);
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
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(navCtrl, auth, user, formBuilder, loadingCtrl, alertCtrl, storage) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.user = user;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.clickmale = false;
        this.clickfemale = false;
        this.gender = '';
        this.signupForm = formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(8)])],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__validators_email__["a" /* EmailValidator */].isValid])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_7__validators_password__["a" /* PasswordValidator */].isValid])],
            passwordconfirm: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, Object(__WEBPACK_IMPORTED_MODULE_6__validators_match_other_validator__["a" /* matchOtherValidator */])('password')])],
            age: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    SignupPage.prototype.signupUser = function () {
        var _this = this;
        if (!this.signupForm.valid || !this.usernameAvailable || this.gender == '') {
            console.log(this.signupForm.value.name);
            var alert_1 = this.alertCtrl.create({
                title: '회원가입 오류',
                message: '모든 항목을 모두 입력하였는지 확인하여 주시고 각 항목의 형식을 지켜주세요!',
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
            this.auth.signupUser(this.signupForm.value.email, this.signupForm.value.password).then(function () {
                _this.user.updateUserprofile(_this.signupForm.value.name, _this.gender, _this.signupForm.value.age).then(function () {
                    _this.storage.set('localcred', {
                        email: _this.signupForm.value.email,
                        password: _this.signupForm.value.password
                    });
                    _this.navCtrl.push('GogosignupPage');
                });
            }, function (error) {
                console.log(JSON.stringify(error));
                var message;
                if (error.code == 'auth/email-already-in-use') {
                    message = '이미 등록된 이메일 주소입니다.<br>다시 확인해주세요!';
                }
                else {
                    message = error.message;
                }
                _this.loading.dismiss().then(function () {
                    var alert = _this.alertCtrl.create({
                        title: '회원가입 오류',
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
                dismissOnPageChange: true,
            });
            this.loading.present();
        }
    };
    SignupPage.prototype.checkUsername = function () {
        var _this = this;
        if (this.signupForm.value.name.length > 0) {
            this.user.checkUsername(this.signupForm.value.name).then(function (snapshot) {
                _this.usernameAvailable = !snapshot.exists();
            });
        }
    };
    SignupPage.prototype.setMale = function () {
        this.clickmale = true;
        this.clickfemale = false;
        this.gender = 'M';
    };
    SignupPage.prototype.setFemale = function () {
        this.clickmale = false;
        this.clickfemale = true;
        this.gender = 'F';
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/chaerinlim/Desktop/28days/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<<ion-header>\n\n  <ion-navbar color="daysgreen">\n    <ion-title>회원가입</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="cardsbg">\n\n	<ion-card>\n    <ion-card-content>\n\n    	<form [formGroup]="signupForm" novalidate>\n    		<h4>이름(별명)</h4>\n        <ion-input formControlName="name" type="text" placeholder="28DAYS (8글자까지 입력)"\n        	[class.invalid]="(!signupForm.controls.name.valid && signupForm.controls.name.dirty) || (signupForm.controls.name.valid && !usernameAvailable)"\n        	(keyup)="checkUsername()"></ion-input>\n      	<p class="error-message" *ngIf="!signupForm.controls.name.valid && signupForm.controls.name.dirty">\n          8글자 이하로 만들어주세요!\n        </p>\n    		<p class="error-message" *ngIf="signupForm.controls.name.valid && !usernameAvailable">\n          이미 사용 중인 이름입니다!\n        </p>\n      	<h4>이메일 주소</h4>\n        <ion-input formControlName="email" type="email" placeholder="28days@gmail.com"\n        	[class.invalid]="!signupForm.controls.email.valid && signupForm.controls.email.dirty"></ion-input>\n      	<p class="error-message" *ngIf="!signupForm.controls.email.valid && signupForm.controls.email.dirty">\n          이메일 주소를 다시 확인해주세요!\n        </p>\n      	<h4>비밀번호</h4>\n        <ion-input formControlName="password" type="password" placeholder="8자리 이상 숫자, 문자 조합"\n        	[class.invalid]="!signupForm.controls.password.valid && signupForm.controls.password.dirty"></ion-input>\n      	<p class="error-message" *ngIf="!signupForm.controls.password.valid && signupForm.controls.password.dirty">\n          8자리 이상, 숫자와 문자를 조합해주세요!\n        </p>\n    		<h4>비밀번호 확인</h4>\n        <ion-input formControlName="passwordconfirm" type="password" placeholder="8자리 이상 숫자, 문자 조합"\n        	[class.invalid]="!signupForm.controls.passwordconfirm.valid && signupForm.controls.passwordconfirm.dirty"></ion-input>\n      	<p class="error-message" *ngIf="!signupForm.controls.passwordconfirm.valid && signupForm.controls.passwordconfirm.dirty">\n          비밀번호가 맞지 않습니다.\n        </p>\n        <h4>성별</h4>\n        <div class="btn2">\n          <button class="btn2_1" [class.greenbtn]="clickmale" (click)="setMale()">\n            남\n          </button>\n          <button [class.greenbtn]="clickfemale" (click)="setFemale()">\n            여\n          </button>\n        </div>\n        <h4>나이</h4>\n        <ion-input formControlName="age" type="number" placeholder="나이를 입력해주세요."></ion-input>\n    		<p class="prompt">28DAYS의 <span>이용약관</span> 및 <span>개인정보취급방침</span>에 동의합니다.</p>\n      	<button ion-button block color="daysgreen" (click)="signupUser()">\n          회원가입하기!\n        </button>\n      </form>\n\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/chaerinlim/Desktop/28days/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = matchOtherValidator;
function matchOtherValidator(otherControlName) {
    var thisControl;
    var otherControl;
    return function matchOtherValidate(control) {
        if (!control.parent) {
            return null;
        }
        // Initializing the validator.
        if (!thisControl) {
            thisControl = control;
            otherControl = control.parent.get(otherControlName);
            if (!otherControl) {
                throw new Error('matchOtherValidator(): other control is not found in parent group');
            }
            otherControl.valueChanges.subscribe(function () {
                thisControl.updateValueAndValidity();
            });
        }
        if (!otherControl) {
            return null;
        }
        if (otherControl.value !== thisControl.value) {
            return {
                matchOther: true
            };
        }
        return null;
    };
}
//# sourceMappingURL=match-other-validator.js.map

/***/ })

});
//# sourceMappingURL=0.js.map