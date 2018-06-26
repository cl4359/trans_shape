webpackJsonp([19],{

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageModule", function() { return IntroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__intro__ = __webpack_require__(668);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IntroPageModule = (function () {
    function IntroPageModule() {
    }
    IntroPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__intro__["a" /* IntroPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__intro__["a" /* IntroPage */]),
            ],
        })
    ], IntroPageModule);
    return IntroPageModule;
}());

//# sourceMappingURL=intro.module.js.map

/***/ }),

/***/ 668:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(402);
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
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IntroPage = (function () {
    function IntroPage(navCtrl, navParams, alertCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.showbtn1 = false;
        this.showinput1 = false;
        this.showbtn2 = false;
        this.showinput2 = false;
        this.showinput3 = false;
        this.showbtn3 = false;
        this.showbtn4 = false;
        this.showbtn5 = false;
        this.showbtn6 = false;
        this.showbtn7 = false;
        this.modaltime = [];
        this.showmodal = false;
        console.log('intro');
    }
    IntroPage.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    IntroPage.prototype.scrollToBottom = function () {
        this.content.scrollToBottom(0);
    };
    IntroPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('Intro - ionViewDieLoad');
        this.chatmessages = [];
        this.gogomsg('반가워! 이제 왔구나!\n여기는 고민타파 28일 Challenge 28DAYS야~!', true).then(function () {
            _this.gogomsg("나는 28DAYS의 챗봇 '고고'라고해!\n여기에선 익명으로 언제나 마음 속 고민을 해결할 수 있어~", false).then(function () {
                setTimeout(function () {
                    _this.showbtn1 = true;
                }, 500);
            });
        });
        this.modalchoices = [
            {
                id: 1, label: '아침'
            }, {
                id: 2, label: '점심'
            }, {
                id: 3, label: '저녁'
            }
        ];
    };
    IntroPage.prototype.createmsg = function (showimage, gogo, message) {
        return {
            showimage: showimage,
            gogo: gogo,
            message: message,
            setblack: !gogo
        };
    };
    IntroPage.prototype.gogomsg = function (text, showimage) {
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
    IntroPage.prototype.button1 = function () {
        var _this = this;
        this.chatmessages.push(this.createmsg(false, false, '와 그렇구나!'));
        this.showbtn1 = false;
        this.gogomsg('네 이름은 뭐야?\n내가 널 어떻게 불러야 할까?', true).then(function () {
            setTimeout(function () {
                _this.showinput1 = true;
            }, 500);
        });
    };
    IntroPage.prototype.input1 = function (ip1) {
        var _this = this;
        this.username = ip1.value.text;
        this.storage.set('username', this.username);
        this.chatmessages.push(this.createmsg(false, false, this.username));
        this.showinput1 = false;
        this.gogomsg(this.username + "!!! \uC815\uB9D0 \uC608\uC05C \uC774\uB984\uC774\uC57C!\n\uADF8\uB098\uC800\uB098,\n\uC694\uC998 \uC5B4\uB5A4 \uC77C\uB85C \uAC00\uC7A5 \uD798\uB4E4\uC5B4?", true).then(function () {
            setTimeout(function () {
                _this.showbtn2 = true;
            }, 500);
        });
    };
    IntroPage.prototype.button2_1 = function () {
        this.depressoranxiety = '불안';
        this.button2();
    };
    IntroPage.prototype.button2_2 = function () {
        this.depressoranxiety = '우울';
        this.button2();
    };
    IntroPage.prototype.button2 = function () {
        var _this = this;
        this.chatmessages.push(this.createmsg(false, false, this.depressoranxiety + "\uD574"));
        this.showbtn2 = false;
        this.gogomsg(this.depressoranxiety + "\uD588\uAD6C\uB098..\u315C\u315C \uB9CE\uC774 \uD798\uB4E4\uC5C8\uACA0\uB2E4..\n" + this.depressoranxiety + "\uD55C \uC9C0\uB294 \uBA87 \uC8FC \uC815\uB3C4 \uB410\uC5B4?", true).then(function () {
            setTimeout(function () {
                _this.showinput2 = true;
            }, 500);
        });
    };
    IntroPage.prototype.input2 = function (ip2) {
        var _this = this;
        this.chatmessages.push(this.createmsg(false, false, ip2.value.text + "\uC8FC \uC815\uB3C4 \uB410\uC5B4."));
        this.showinput2 = false;
        this.gogomsg(ip2.value.text + "\uC8FC \uB3D9\uC548 \uC815\uB9D0 \uD798\uB4E4\uC5C8\uACA0\uAD6C\uB098..\u315C\u315C", true).then(function () {
            _this.gogomsg("\uADF8\uB7FC \uC9C0\uAE08 \uC5BC\uB9C8\uB098 " + _this.depressoranxiety + "\uD574?\n1\uBD80\uD130 10\uAE4C\uC9C0 \uC911 \uD558\uB098 \uC785\uB825\uD574\uC904\uB798?\n1\uC740 \uC870\uAE08 " + _this.depressoranxiety + "\uD55C \uAC70\uACE0,\n10\uC740 \uB9CE\uC774 " + _this.depressoranxiety + "\uD55C \uAC70\uC57C.", false).then(function () {
                setTimeout(function () {
                    _this.showinput3 = true;
                }, 500);
            });
        });
    };
    IntroPage.prototype.input3 = function (ip3) {
        var _this = this;
        this.chatmessages.push(this.createmsg(false, false, "" + ip3.value.text));
        this.showinput3 = false;
        this.gogomsg('그랬구나.. 많이 힘들었겠다..', true).then(function () {
            _this.gogomsg('프로작, 졸피뎀, 자낙스와 같은\n정신 건강에 관련된 약을 복용하고 있니?', false).then(function () {
                setTimeout(function () {
                    _this.showbtn3 = true;
                }, 500);
            });
        });
    };
    IntroPage.prototype.button3_1 = function () {
        this.btn3text = '응';
        this.button3();
    };
    IntroPage.prototype.button3_2 = function () {
        this.btn3text = '아니';
        this.button3();
    };
    IntroPage.prototype.button3 = function () {
        var _this = this;
        this.chatmessages.push(this.createmsg(false, false, "" + this.btn3text));
        this.showbtn3 = false;
        this.gogomsg('그렇구나~\n약을 복용하면 평소에 내가 알람을 주고 싶어서 물어보게 되었어~', true).then(function () {
            if (_this.btn3text == '응') {
                _this.gogomsg('어떤 약을 복용하고 있는지 얘기해줄래?', false).then(function () {
                    setTimeout(function () {
                        _this.showbtn4 = true;
                    }, 500);
                });
            }
            else {
                _this.gogomsg('내가 감정상태를 알아볼 수 있는 설문지가 하나 있는데 테스트 한 번 받아보는 건 어때?', false).then(function () {
                    setTimeout(function () {
                        _this.showbtn5 = true;
                    }, 500);
                });
            }
        });
    };
    IntroPage.prototype.button4_1 = function () {
        this.btn4text = '응';
        this.button4();
    };
    IntroPage.prototype.button4_2 = function () {
        this.btn4text = '아니';
        this.button4();
    };
    IntroPage.prototype.button4 = function () {
        var _this = this;
        this.chatmessages.push(this.createmsg(false, false, "" + this.btn4text));
        this.showbtn4 = false;
        if (this.btn4text == '응') {
            setTimeout(function () {
                _this.showmodal = true;
            }, 500);
        }
        else {
            this.gogomsg('알겠어~ 나중에 알려주면 약을 복용하는데 알람을 줘서 도움을 줄게!', true).then(function () {
                _this.gogomsg('내가 감정상태를 알아볼 수 있는 설문지가 하나 있는데 테스트 한 번 받아보는 건 어때?', false).then(function () {
                    setTimeout(function () {
                        _this.showbtn5 = true;
                    }, 500);
                });
            });
        }
    };
    IntroPage.prototype.button5_1 = function () {
        this.btn5text = '응 해볼게!';
        this.button5();
    };
    IntroPage.prototype.button5_2 = function () {
        this.btn5text = '안 할래..';
        this.button5();
    };
    IntroPage.prototype.button5 = function () {
        var _this = this;
        this.chatmessages.push(this.createmsg(false, false, "" + this.btn5text));
        this.showbtn5 = false;
        if (this.btn5text == '응 해볼게!') {
            this.gogomsg('잘 생각했어!\n검사 페이지로 이동할게~!', true).then(function () {
                if (_this.depressoranxiety == '불안') {
                    _this.moveToTestanxiety();
                }
                else {
                    _this.moveToTestderpession();
                }
            });
        }
        else {
            this.gogomsg("\uADF8 \uB9C8\uC74C \uC774\uD574\uD574.. \uB098\uB3C4 \uADF8\uB7AC\uC5C8\uC5B4.. \uC544\uC8FC \uAC04\uB2E8\uD55C \uD14C\uC2A4\uD2B8\uC57C!\n" + this.username + "(\uC774) \uC0C1\uD0DC\uAC00 \uC5B4\uB5A4\uC9C0 \uB098\uB3C4 \uC54C\uACE0 \uC2F6\uC5B4\uC11C..\n\uB09C " + this.username + "(\uC774)\uAC00 \uC774 \uD14C\uC2A4\uD2B8\uB97C \uAF2D \uBC1B\uC544\uBD24\uC73C\uBA74 \uC88B\uACA0\uC5B4!", true).then(function () {
                setTimeout(function () {
                    _this.showbtn6 = true;
                }, 500);
            });
        }
    };
    IntroPage.prototype.button6_1 = function () {
        this.btn6text = '응 해볼게!';
        this.button6();
    };
    IntroPage.prototype.button6_2 = function () {
        this.btn6text = '안 할래..';
        this.button6();
    };
    IntroPage.prototype.button6 = function () {
        var _this = this;
        this.chatmessages.push(this.createmsg(false, false, "" + this.btn6text));
        this.showbtn6 = false;
        if (this.btn6text == '응 해볼게!') {
            this.gogomsg('잘 생각했어!\n검사 페이지로 이동할게~!', true).then(function () {
                if (_this.depressoranxiety == '불안') {
                    _this.moveToTestanxiety();
                }
                else {
                    _this.moveToTestderpession();
                }
            });
        }
        else {
            this.gogomsg('간단한 테스트야~\n지금 하기 싫다면 나중에 다시 메뉴에서 선택할 수 있어!', true).then(function () {
                setTimeout(function () {
                    _this.showbtn7 = true;
                }, 500);
            });
        }
    };
    IntroPage.prototype.button7_1 = function () {
        this.btn7text = '그래, 해볼게!';
        this.button7();
    };
    IntroPage.prototype.button7_2 = function () {
        this.btn7text = '다음에 할게.';
        this.button7();
    };
    IntroPage.prototype.button7 = function () {
        var _this = this;
        this.chatmessages.push(this.createmsg(false, false, "" + this.btn7text));
        this.showbtn7 = false;
        if (this.btn7text == '그래, 해볼게!') {
            this.gogomsg('잘 생각했어!\n검사 페이지로 이동할게~!', true).then(function () {
                if (_this.depressoranxiety == '불안') {
                    _this.moveToTestanxiety();
                }
                else {
                    _this.moveToTestderpession();
                }
            });
        }
        else {
            this.gogomsg('알겠어! 그럼 메인 화면으로 이동할게~!', true).then(function () {
                _this.moveToMain();
            });
        }
    };
    IntroPage.prototype.modalValue = function (choice) {
        if (this.modaltime.indexOf(choice.id) != -1) {
            this.modaltime = this.modaltime.filter(function (e) { return e !== choice.id; });
        }
        else {
            this.modaltime.push(choice.id);
        }
    };
    IntroPage.prototype.modalhandler = function (modal) {
        var _this = this;
        console.log(modal.value.mediname + ' / ' + modal.value.mediamount);
        console.log(JSON.stringify(this.modaltime));
        this.showmodal = false;
        this.gogomsg('얘기해줘서 고마워~ 약을 복용하는데 알람을 줘서 도움을 줄게!', true).then(function () {
            _this.gogomsg('내가 감정상태를 알아볼 수 있는 설문지가 하나 있는데 테스트 한 번 받아보는 건 어때?', false).then(function () {
                setTimeout(function () {
                    _this.showbtn5 = true;
                }, 500);
            });
        });
    };
    IntroPage.prototype.moveToTestderpession = function () {
        var _this = this;
        setTimeout(function () {
            _this.navCtrl.push('TestdepressionPage');
        }, 1000);
    };
    IntroPage.prototype.moveToTestanxiety = function () {
        var _this = this;
        setTimeout(function () {
            _this.navCtrl.push('TestanxietyPage');
        }, 1000);
    };
    IntroPage.prototype.moveToMain = function () {
        var _this = this;
        setTimeout(function () {
            _this.navCtrl.setRoot('HomePage');
        }, 1000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], IntroPage.prototype, "content", void 0);
    IntroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-intro',template:/*ion-inline-start:"/Users/chaerinlim/Desktop/28days/src/pages/intro/intro.html"*/'<!--\n  Generated template for the IntroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="daysgreen">\n    <ion-title>28DAYS – Intro</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content #content>\n\n  <ul>\n    <li *ngFor="let msg of chatmessages">\n    	<div class="clearfix">\n		    <img *ngIf="msg.showimage" src="assets/gogo.png">\n	    	<p class="bubble buddy" [ngClass]="{setblack: msg.setblack}" *ngIf="msg.gogo">{{msg.message}}</p>\n	    	<p class="bubble me" *ngIf="!msg.gogo">{{msg.message}}</p>\n	    </div>\n  	</li>\n  </ul>\n\n  <div class="modal" *ngIf="showmodal">\n    <div class="modal-inner">\n      <form #modal="ngForm" (ngSubmit)="modalhandler(modal)" novalidate>\n        <p>복용 중인 약물의 이름</p>\n        <ion-input class="tx" placeholder="복용 중인 약물의 이름을 입력해주세요" type="text" name="mediname" ngModel required></ion-input>\n        <p>복용 중인 약물의 용량</p>\n        <div class="mg">\n          <ion-input class="tx" placeholder="복용 중인 약물의 용량을 입력해주세요" type="text" name="mediamount" ngModel required></ion-input>\n          <span>mg</span>\n        </div>\n        <p>약물 복용 주기</p>\n        <div>\n          <span *ngFor="let choice of modalchoices">\n            <ion-checkbox color="daysgreen" (click)="modalValue(choice)" name="time"></ion-checkbox>\n            <label>{{choice.label}}</label>\n          </span>\n        </div>\n        <button [disabled]="modal.form.invalid || modaltime.length == 0">\n          확인\n        </button>\n      </form>\n    </div>\n  </div>\n\n</ion-content>\n\n<ion-footer>\n\n  <div class="btn1" *ngIf="showbtn1">\n    <button (click)="button1()">\n      와 그렇구나!\n    </button>\n  </div>\n\n  <div class="input1" *ngIf="showinput1">\n    <form #ip1="ngForm" (ngSubmit)="input1(ip1)" class="footerform" novalidate>\n      <input placeholder="이름을 입력해줘! (예: 길동)" type="text" name="text" ngModel required>\n      <button [disabled]="ip1.form.invalid">\n        <img src="assets/send.png">\n      </button>\n    </form>\n  </div>\n\n  <div class="btn2" *ngIf="showbtn2">\n    <button class="btn2_1" (click)="button2_1()">\n      불안해\n    </button>\n    <button (click)="button2_2()">\n      우울해\n    </button>\n  </div>\n\n  <div class="input1" *ngIf="showinput2">\n    <form #ip2="ngForm" (ngSubmit)="input2(ip2)" class="footerform" novalidate>\n      <input placeholder="몇 주 정도 됐는지 입력해줘! (예: 3)" type="text" name="text" ngModel required>\n      <button [disabled]="ip2.form.invalid">\n        <img src="assets/send.png">\n      </button>\n    </form>\n  </div>\n\n  <div class="input1" *ngIf="showinput3">\n    <form #ip3="ngForm" (ngSubmit)="input3(ip3)" class="footerform" novalidate>\n      <input placeholder="{{ depressoranxiety }}한 정도를 입력해줘! (예: 5)" type="text" name="text" ngModel required>\n      <button [disabled]="ip3.form.invalid">\n        <img src="assets/send.png">\n      </button>\n    </form>\n  </div>\n\n  <div class="btn2" *ngIf="showbtn3">\n    <button class="btn2_1" (click)="button3_1()">\n      응\n    </button>\n    <button (click)="button3_2()">\n      아니\n    </button>\n  </div>\n\n  <div class="btn2" *ngIf="showbtn4">\n    <button class="btn2_1" (click)="button4_1()">\n      응\n    </button>\n    <button (click)="button4_2()">\n      아니\n    </button>\n  </div>\n\n  <div class="btn2" *ngIf="showbtn5">\n    <button class="btn2_1" (click)="button5_1()">\n      응 해볼게!\n    </button>\n    <button (click)="button5_2()">\n      안 할래..\n    </button>\n  </div>\n\n  <div class="btn2" *ngIf="showbtn6">\n    <button class="btn2_1" (click)="button6_1()">\n      응 해볼게!\n    </button>\n    <button (click)="button6_2()">\n      안 할래..\n    </button>\n  </div>\n\n  <div class="btn2" *ngIf="showbtn7">\n    <button class="btn2_1" (click)="button7_1()">\n      그래, 해볼게!\n    </button>\n    <button (click)="button7_2()">\n      다음에 할게.\n    </button>\n  </div>\n\n</ion-footer>\n'/*ion-inline-end:"/Users/chaerinlim/Desktop/28days/src/pages/intro/intro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], IntroPage);
    return IntroPage;
}());

//# sourceMappingURL=intro.js.map

/***/ })

});
//# sourceMappingURL=19.js.map