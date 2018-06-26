webpackJsonp([23],{

/***/ 630:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GogohomePageModule", function() { return GogohomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gogohome__ = __webpack_require__(664);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GogohomePageModule = (function () {
    function GogohomePageModule() {
    }
    GogohomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__gogohome__["a" /* GogohomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__gogohome__["a" /* GogohomePage */]),
            ],
        })
    ], GogohomePageModule);
    return GogohomePageModule;
}());

//# sourceMappingURL=gogohome.module.js.map

/***/ }),

/***/ 664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GogohomePage; });
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
 * Generated class for the GogohomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GogohomePage = (function () {
    function GogohomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.showbtn1 = false;
        this.showbtn2 = false;
        this.answer = '';
        this.answers1 = [
            '얘기해봐~',
            '그렇구나~',
            '그래~!'
        ];
        this.answers2 = [
            '그렇긴 해',
            '그래, 알았어~',
            '그렇구나',
            '응 그렇지',
            '그렇구나!'
        ];
        this.scenario = 0;
    }
    GogohomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.scenario = Math.floor(Math.random() * 2);
        this.chatmessages = [];
        if (this.scenario) {
            this.gogomsg('안녕?\n내 이름은 고고야~\n내가 누군지 궁금하지 않니? +_+', true).then(function () {
                setTimeout(function () {
                    _this.answer = _this.answers1[0];
                    _this.showbtn1 = true;
                }, 500);
            });
        }
        else {
            this.gogomsg('이 앱 이름이 28DAYS 이자너?\n트웨니에잇데이즈 라고 읽어야 할지.. 그냥 이십..', true).then(function () {
                _this.gogomsg('왠지 이상한 말을 할 뻔했어 ㅎㅎ\n여하튼 어떻게 읽어야 할지 감이 잘 안오지?', false).then(function () {
                    setTimeout(function () {
                        _this.answer = _this.answers2[0];
                        _this.showbtn2 = true;
                    }, 500);
                });
            });
        }
    };
    GogohomePage.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    GogohomePage.prototype.scrollToBottom = function () {
        this.content.scrollToBottom(0);
    };
    GogohomePage.prototype.createmsg = function (showimage, gogo, message) {
        return {
            showimage: showimage,
            gogo: gogo,
            message: message,
            setblack: !gogo
        };
    };
    GogohomePage.prototype.gogomsg = function (text, showimage) {
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
    GogohomePage.prototype.button1 = function (answer) {
        var _this = this;
        if (answer == this.answers1[0]) {
            this.chatmessages.push(this.createmsg(false, false, answer));
            this.showbtn1 = false;
            this.gogomsg('설명할 기회를 줘서 고마웡~ㅎㅎ\n고민을 고민하는 피플, 고고플!\n앞 글자를 따서 내 이름은 고고라고 정해졌대~', true).then(function () {
                _this.gogomsg('게임을 시작하면 처음에 옆에서 쫑알쫑알하는 캐릭터들이 있지?\n그것처럼 28DAYS를 사용하는 데 도움을 주려고 만들어졌어~', false).then(function () {
                    setTimeout(function () {
                        _this.answer = _this.answers1[1];
                        _this.showbtn1 = true;
                    }, 500);
                });
            });
        }
        else if (answer == this.answers1[1]) {
            this.chatmessages.push(this.createmsg(false, false, answer));
            this.showbtn1 = false;
            this.gogomsg('매일 네 상태를 확인할 수 있도록\n옆에서 쫑알쫑알 될 거 같아~\n귀찮을 수도 있지만 예쁘게 봐줭~', true).then(function () {
                setTimeout(function () {
                    _this.answer = _this.answers1[2];
                    _this.showbtn1 = true;
                }, 500);
            });
        }
        else if (answer == this.answers1[2]) {
            this.chatmessages.push(this.createmsg(false, false, answer));
            this.showbtn1 = false;
            this.gogomsg('날 찾아와줘서 정말 고마워~!', true).then(function () {
                _this.gogomsg('메뉴에 도움이 될 수 있는 정보도 많으니까 찬찬히 둘러봐봐~\n난 이만 갈껭~~~', false).then(function () {
                    _this.moveToHome();
                });
            });
        }
    };
    GogohomePage.prototype.button2 = function (answer) {
        var _this = this;
        if (answer == this.answers2[0]) {
            this.chatmessages.push(this.createmsg(false, false, answer));
            this.showbtn2 = false;
            this.gogomsg('사실 어떻게 읽을 지는 우리가 정할 수 있는 건 아닌 거 같지만 ㅎㅎ', true).then(function () {
                _this.gogomsg('28DAYS의 뜻을 설명해줄게~\n왜 이름이 이렇게 된 건지 얘기해주고 싶어서~', false).then(function () {
                    setTimeout(function () {
                        _this.answer = _this.answers2[1];
                        _this.showbtn2 = true;
                    }, 500);
                });
            });
        }
        else if (answer == this.answers2[1]) {
            this.chatmessages.push(this.createmsg(false, false, answer));
            this.showbtn2 = false;
            this.gogomsg('정신과 의원, 병원에 가는 사람들이 보통 28일의 주기로 찾아 간데~', true).then(function () {
                _this.gogomsg('근데 병원에 가고 나서 다음에 다시 가기까지 혼자 견디다 보니 증상이 안 좋아질 수도 있다고 하더라구..', false).then(function () {
                    setTimeout(function () {
                        _this.answer = _this.answers2[2];
                        _this.showbtn2 = true;
                    }, 500);
                });
            });
        }
        else if (answer == this.answers2[2]) {
            this.chatmessages.push(this.createmsg(false, false, answer));
            this.showbtn2 = false;
            this.gogomsg('감기 같은 병은 콧물이나 기침이 나는 걸 보고 어떤 약을 먹어야 하고, 어떤 병원에 가야 하는지 알 수 있자너?', true).then(function () {
                setTimeout(function () {
                    _this.answer = _this.answers2[3];
                    _this.showbtn2 = true;
                }, 500);
            });
        }
        else if (answer == this.answers2[3]) {
            this.chatmessages.push(this.createmsg(false, false, answer));
            this.showbtn1 = false;
            this.gogomsg('근데, 마음이 아플 때는 어떤 증상이 있는지.. 어떤 약을 먹어야 할지.. 어디로 가야 할지 알기가 어렵다고 하더라구..', true).then(function () {
                _this.gogomsg('그래서 서로의 경험을 공유하고 얘기를 할 수 있으면 28일을 견디기에도 좋을 것 같아서 이 앱을 만들고 이름을 그렇게 지었대~', false).then(function () {
                    setTimeout(function () {
                        _this.answer = _this.answers2[4];
                        _this.showbtn2 = true;
                    }, 500);
                });
            });
        }
        else if (answer == this.answers2[4]) {
            this.chatmessages.push(this.createmsg(false, false, answer));
            this.showbtn2 = false;
            this.gogomsg('재미없을 수 있는 얘기를 끝까지 들어줘서 고마워~', true).then(function () {
                _this.gogomsg('메뉴에 도움이 될 수 있는 정보도 많으니까 찬찬히 둘러봐봐~\n난 이만 갈껭~~~', false).then(function () {
                    _this.moveToHome();
                });
            });
        }
    };
    GogohomePage.prototype.moveToHome = function () {
        var _this = this;
        setTimeout(function () {
            _this.navCtrl.setRoot('HomePage');
        }, 1000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], GogohomePage.prototype, "content", void 0);
    GogohomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-gogohome',template:/*ion-inline-start:"/Users/chaerinlim/Desktop/28days/src/pages/gogohome/gogohome.html"*/'<!--\n  Generated template for the GogohomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="daysgreen">\n    <ion-title>고고</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content #content>\n\n	<ul>\n    <li *ngFor="let msg of chatmessages">\n    	<div class="clearfix">\n		    <img *ngIf="msg.showimage" src="assets/gogo.png">\n	    	<p class="bubble buddy" [ngClass]="{setblack: msg.setblack}" *ngIf="msg.gogo">{{msg.message}}</p>\n	    	<p class="bubble me" *ngIf="!msg.gogo">{{msg.message}}</p>\n	    </div>\n  	</li>\n  </ul>\n\n</ion-content>\n\n<ion-footer>\n\n  <div class="btn1" *ngIf="showbtn1">\n    <button (click)="button1(answer)">\n      {{answer}}\n    </button>\n  </div>\n\n  <div class="btn1" *ngIf="showbtn2">\n    <button (click)="button2(answer)">\n      {{answer}}\n    </button>\n  </div>\n\n</ion-footer>\n'/*ion-inline-end:"/Users/chaerinlim/Desktop/28days/src/pages/gogohome/gogohome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], GogohomePage);
    return GogohomePage;
}());

//# sourceMappingURL=gogohome.js.map

/***/ })

});
//# sourceMappingURL=23.js.map