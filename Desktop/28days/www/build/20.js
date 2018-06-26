webpackJsonp([20],{

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(667);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(402);
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
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = (function () {
    function HomePage(navCtrl, alertCtrl, auth, userProvider, storage, loadingCtrl, params, modalCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.userProvider = userProvider;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.params = params;
        this.modalCtrl = modalCtrl;
        this.showmodal = false;
        // Receive message from push notifications
        if (params.data.message) {
            console.log('message: ' + params.data.message);
        }
    }
    HomePage_1 = HomePage;
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad - Home');
        // present loading
        this.loading = this.loadingCtrl.create();
        this.loading.present();
        // set defualt user photo
        this.photoURL = 'assets/profile0.png';
        // check if user already logged-in
        this.user = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser;
        if (this.user) {
            // user already logged-in
            console.log('this.user: ' + this.user.displayName + '/' + this.user.photoURL);
            this.username = this.user.displayName;
            this.photoURL = this.user.photoURL;
            this.userProvider.getUserprofile(this.user.uid).then(function (userprofile) {
                console.log("user profile");
                console.log(JSON.stringify(userprofile));
                _this.userprofile = userprofile;
                _this.greeting = _this.userprofile.greeting;
                _this.loading.dismiss();
            });
        }
        else {
            // check if cache info exists in local storage
            this.storage.get('localcred').then(function (localcred) {
                if (localcred) {
                    // cache exists
                    _this.auth.loginUser(localcred.email, localcred.password).then(function (user) {
                        console.log('Home - ionViewDidLoad - load token ' + user.displayName + '/' + user.photoURL);
                        _this.user = user;
                        _this.username = _this.user.displayName;
                        _this.photoURL = _this.user.photoURL;
                        _this.userProvider.getUserprofile(_this.user.uid).then(function (userprofile) {
                            console.log("user profile");
                            console.log(JSON.stringify(userprofile));
                            _this.userprofile = userprofile;
                            _this.greeting = _this.userprofile.greeting;
                            _this.loading.dismiss();
                        });
                    });
                }
                else {
                    // cache not found
                    // get username which is typed by user in Intro
                    _this.storage.get('username').then(function (username) {
                        if (username) {
                            _this.username = username;
                        }
                        else {
                            _this.username = '28days';
                        }
                        _this.greeting = "안녕하세요! " + _this.username + " 입니다. 함께 나아가요!";
                        _this.loading.dismiss();
                    });
                }
            });
        }
    };
    HomePage.prototype.loginpage = function () {
        var _this = this;
        if (this.user) {
            var alert_1 = this.alertCtrl.create({
                title: '이미 로그인되어 있습니다.',
                message: '28days에서 로그아웃하시겠습니까?',
                buttons: [
                    {
                        text: '확인',
                        handler: function () {
                            // log out from firebase auth service and remove previous cache about user credential
                            _this.auth.logoutUser().then(function () {
                                _this.storage.remove('localcred').then(function () {
                                    _this.navCtrl.setRoot(HomePage_1);
                                });
                            });
                        }
                    },
                    {
                        text: '취소',
                        role: 'cancel',
                        handler: function () {
                        }
                    }
                ]
            });
            alert_1.present();
        }
        else {
            this.navCtrl.push('LoginPage');
        }
    };
    HomePage.prototype.mypage = function () {
        if (this.user) {
            this.navCtrl.push('MypagePage');
        }
        else {
            this.pleaselogin();
        }
    };
    HomePage.prototype.changecharacter = function () {
        if (this.user) {
            this.navCtrl.push('CharacterPage');
        }
        else {
            this.pleaselogin();
        }
    };
    HomePage.prototype.changename = function () {
        if (this.user) {
            // this.navCtrl.push('SupporterPage');
        }
        else {
            this.pleaselogin();
        }
    };
    HomePage.prototype.changegreeting = function () {
        var _this = this;
        if (this.user) {
            // this.navCtrl.push('SupporterPage');
            setTimeout(function () {
                _this.origGreeting = _this.greeting;
                _this.showmodal = true;
            }, 500);
        }
        else {
            this.pleaselogin();
        }
    };
    HomePage.prototype.community = function () {
        if (this.user) {
            this.navCtrl.push('CommunityPage');
        }
        else {
            this.pleaselogin();
        }
    };
    HomePage.prototype.supporter = function () {
        if (this.user) {
            // this.navCtrl.push('GogosupporterPage');
            this.navCtrl.push('SupporterPage');
        }
        else {
            this.pleaselogin();
        }
    };
    HomePage.prototype.post = function () {
        if (this.user) {
            this.navCtrl.push('PostPage');
        }
        else {
            this.pleaselogin();
        }
    };
    HomePage.prototype.meditate = function () {
        if (this.user) {
            this.navCtrl.push('MeditatePage');
        }
        else {
            this.pleaselogin();
        }
    };
    HomePage.prototype.test = function () {
        this.navCtrl.push('TestPage');
    };
    HomePage.prototype.diary = function () {
        if (this.user) {
            this.navCtrl.push('DiaryPage');
        }
        else {
            this.pleaselogin();
        }
    };
    HomePage.prototype.emotionbasket = function () {
        if (this.user) {
            this.navCtrl.push('EmotionbasketPage');
        }
        else {
            this.pleaselogin();
        }
    };
    HomePage.prototype.pleaselogin = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '로그인 후 사용하실 수 있습니다.',
            message: '28days에 로그인하시겠습니까?',
            buttons: [
                {
                    text: '확인',
                    handler: function () {
                        _this.navCtrl.push('LoginPage');
                    }
                },
                {
                    text: '취소',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.gogo = function () {
        this.navCtrl.push('GogohomePage');
    };
    HomePage.prototype.modalhandler = function (modal) {
        this.greeting = modal.value.greeting;
        this.showmodal = false;
        this.userProvider.updateGreeting(modal.value.greeting).then(function () { });
    };
    HomePage.prototype.dismissModal = function () {
        this.showmodal = false;
        this.greeting = this.origGreeting;
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/chaerinlim/Desktop/28days/src/pages/home/home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="daysgreen">\n  	<ion-buttons left>\n	    <button ion-button icon-only (click)="loginpage()">\n	      <ion-icon name="log-in"></ion-icon>\n	    </button>\n	  </ion-buttons> \n    <ion-title>\n      28DAYS\n    </ion-title>\n    <ion-buttons right>\n	    <button ion-button icon-only (click)="mypage()">\n	      <ion-icon name="settings"></ion-icon>\n	    </button>\n	  </ion-buttons> \n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n	<div align="center" class="userprofile">\n		<button class="photo" (click)="changecharacter()">\n			<img src="{{photoURL}}">\n		</button>\n		<div>\n			<p class="username" (click)="changename()">{{username}}</p>\n		</div>\n		<button class="greeting" (click)="changegreeting()">\n			<p>\n				{{ greeting }}\n			</p>\n		</button>\n		<ul class="vertical-buttons">\n			<li>\n				<button (click)="test()">\n					<img src="assets/test.png">\n				</button>\n			</li>\n			<li>\n				<button (click)="diary()">\n					<img src="assets/diary.png">\n				</button>\n			</li>\n			<li>\n				<button (click)="emotionbasket()">\n					<img src="assets/basket.png">\n				</button>\n			</li>\n		</ul>\n	</div>\n	<div align="center" class="mainmenu">\n		<ul>\n			<li>\n				<button (click)="community()">\n					다른 사람의 고민을 엿볼까요?<br>\n					<p>커뮤니티</p>\n				</button>\n			</li>\n			<li>\n				<button (click)="supporter()">\n					마음이 맞는 사람과 이야기 할까요?<br>\n					<p>1:1 서포터</p>\n				</button>\n			</li>\n			<li>\n				<button (click)="post()">\n					정신건강 관련 정보가 궁금하세요?<br>\n					<p>포스트</p>\n				</button>\n			</li>\n			<li>\n				<button (click)="meditate()">\n					내 마음을 달래볼까요?<br>\n					<p>명상하기</p>\n				</button>\n			</li>\n		</ul>\n	</div>\n\n	<div align="center" class="gogo">\n		<button (click)="gogo()">\n			<img src="assets/gogo.png">\n		</button>\n	</div>\n\n	<div class="modal" *ngIf="showmodal">\n	    <div class="modal-inner">\n	      <form #modal="ngForm" (ngSubmit)="modalhandler(modal)" novalidate>\n	        <p>인사말 관리</p>\n	        <ion-input class="tx" type="text" name="greeting" [(ngModel)]="greeting" required></ion-input>\n	        <button type="reset" (click)="dismissModal()">\n	          취소\n	        </button> \n	        <button type="submit">\n	          확인\n	        </button>\n	      </form>\n	    </div>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/chaerinlim/Desktop/28days/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=20.js.map