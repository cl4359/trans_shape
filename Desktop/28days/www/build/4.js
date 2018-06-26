webpackJsonp([4],{

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestanxietyPageModule", function() { return TestanxietyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__testanxiety__ = __webpack_require__(687);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TestanxietyPageModule = (function () {
    function TestanxietyPageModule() {
    }
    TestanxietyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__testanxiety__["a" /* TestanxietyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__testanxiety__["a" /* TestanxietyPage */]),
            ],
        })
    ], TestanxietyPageModule);
    return TestanxietyPageModule;
}());

//# sourceMappingURL=testanxiety.module.js.map

/***/ }),

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestanxietyPage; });
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
 * Generated class for the TestanxietyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestanxietyPage = (function () {
    function TestanxietyPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.toquestion = false;
        this.toresult = false;
        this.toresult2 = false;
        this.answers = ['전혀 그렇지 않다', '조금 그렇다', '보통으로 그렇다', '대단히 그렇다'];
        this.useranswers = [];
        this.question = '나는 마음이 차분하다.';
        this.qcount = 0;
        this.questions = [
            '나는 마음이 차분하다.',
            '나는 마음이 든든하다.',
            '나는 긴장되어 있다.',
            '나는 후회스럽고 서운하다.',
            '나는 마음이 편하다.',
            '나는 당황해서 어찌할 바를 모르겠다.',
            '나는 앞으로 불행이 있을까 걱정하고 있다.',
            '나는 마음이 놓인다.',
            '나는 불안하다.',
            '나는 편안하게 느낀다.',
            '나는 자신감이 있다.',
            '나는 짜증스럽다.',
            '나는 마음이 조마조마하다.',
            '나는 극도로 긴장되어 있다.',
            '내 마음은 긴장이 풀려 푸근하다.',
            '나는 만족스럽다.',
            '나는 걱정하고 있다.',
            '나는 흥분되어 어쩔 줄 모른다.',
            '나는 즐겁다.',
            '나는 기분이 좋다.'
        ];
        this.reversequestions = [1, 2, 5, 8, 10, 11, 15, 16, 19, 20];
    }
    TestanxietyPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.nb.backButtonClick = function () {
            _this.backhandler();
        };
    };
    TestanxietyPage.prototype.backhandler = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '테스트 취소',
            message: '아직 테스트가 완료되지 않았어요!<br>정말로 테스트를 취소하시겠어요?',
            buttons: [
                {
                    text: '계속할래요',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: '취소할래요',
                    cssClass: 'alertbtn',
                    handler: function () {
                        _this.navCtrl.setRoot('HomePage');
                    }
                }
            ]
        });
        alert.present();
    };
    TestanxietyPage.prototype.gotoquestions = function () {
        this.toquestion = true;
    };
    TestanxietyPage.prototype.nextquestion = function (answer) {
        this.useranswers.push(this.getscore(this.answers.indexOf(answer)));
        console.log(this.useranswers.toString());
        if (this.qcount == 19) {
            this.getresult();
            if (this.score <= 51) {
                this.toresult2 = true;
            }
            else {
                this.toresult = true;
            }
            return;
        }
        this.qcount++;
        this.question = this.questions[this.qcount];
    };
    TestanxietyPage.prototype.getscore = function (answerindex) {
        var score;
        if (this.reversequestions.indexOf(this.qcount + 1) == -1) {
            score = answerindex + 1;
        }
        else {
            score = 4 - answerindex;
        }
        return score;
    };
    TestanxietyPage.prototype.getresult = function () {
        var add = function (a, b) { return a + b; };
        this.score = this.useranswers.reduce(add);
        console.log('test score: ' + this.score);
        if (this.score <= 51) {
            this.category = ' 불안감이 없음 ';
        }
        else if (this.score <= 56) {
            this.category = ' 불안감이 약간 높음 ';
        }
        else if (this.score <= 61) {
            this.category = ' 불안감이 상당히 높음 ';
        }
        else {
            this.category = ' 불안감이 매우 높음 ';
        }
    };
    TestanxietyPage.prototype.close = function () {
        this.navCtrl.setRoot('HomePage');
    };
    TestanxietyPage.prototype.testdepression = function () {
        this.navCtrl.push('TestdepressionPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Navbar */])
    ], TestanxietyPage.prototype, "nb", void 0);
    TestanxietyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-testanxiety',template:/*ion-inline-start:"/Users/chaerinlim/Desktop/28days/src/pages/testanxiety/testanxiety.html"*/'<!--\n  Generated template for the TestanxietyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="daysgreen">\n    <ion-title>불안 자가진단</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<table class="start" *ngIf="!toquestion">\n		<div class="outer">\n		  <div class="middle">\n		    <div class="inner">\n		    	<h2>STAI-X-1 TEST</h2>\n					<p>불안 자가진단을 시작합니다 :)<br>지금부터 20가지 질문을 드릴 거에요!<br>지금 이 순간 자신을 가장<br>잘 설명하는 답을 선택해주시면 돼요!</p>\n				</div>\n			</div>\n    </div>\n    <tr>\n	    <td valign="bottom">\n	      <div>\n	      	<button (click)="gotoquestions()">검사 시작하기</button>\n	      </div>\n	    </td>\n    </tr>\n  </table>\n\n  <table class="question" *ngIf="toquestion && !toresult && !toresult2">\n		<div class="outer">\n		  <div class="middle">\n		    <div class="inner">\n					<p>{{ question }}</p>\n				</div>\n			</div>\n    </div>\n    <tr>\n	    <td valign="bottom">\n	      <div id="answers">\n	      	<ul *ngFor="let answer of answers">\n	      		<li (click)="nextquestion(answer)">\n	      			<button>{{ answer }}</button>\n	      		</li>\n	      	</ul>\n	      </div>\n	    </td>\n    </tr>\n  </table>\n\n  <div class="outer" *ngIf="toresult">\n	  <div class="middle">\n	    <div class="inner">\n			  <table class="result">\n			    <div class="inner">\n			    	<h2>테스트 결과</h2>\n						<p class="score">불안 자가진단 결과 점수는 <span>{{ score }}</span>으로,<br><span>[{{ category }}]</span> 구간에 계세요.</p>\n						<p>보다 정확한 진단은 전문가를 통해 진행하시기를 권장해요. 진단 이력은 내 프로필에서 확인하실 수 있어요.</p>\n					</div>\n			    <tr>\n				    <td valign="bottom">\n				      <div>\n				      	<button (click)="close()">닫기</button>\n				      </div>\n				    </td>\n			    </tr>\n			  </table>\n  		</div>\n		</div>\n  </div>\n\n  <div class="outer" *ngIf="toresult2">\n	  <div class="middle">\n	    <div class="inner">\n			  <table class="result">\n			    <div class="inner">\n			    	<h2>테스트 결과</h2>\n						<p class="score">불안 자가진단 결과 점수는 <span>{{ score }}</span>으로,<br><span>[{{ category }}]</span> 구간에 계세요.</p>\n						<p class="ask">혹시 우울하진 않나요?<br>우울 테스트가 있는데 해볼래요?</p>\n						<p>보다 정확한 진단은 전문가를 통해 진행하시기를 권장해요. 진단 이력은 내 프로필에서 확인하실 수 있어요.</p>\n					</div>\n			    <tr>\n				    <td valign="bottom">\n				      <div>\n				      	<button (click)="testdepression()">우울증 자가진단 해보기</button>\n				      	<button (click)="close()">닫기</button>\n				      </div>\n				    </td>\n			    </tr>\n			  </table>\n  		</div>\n		</div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/chaerinlim/Desktop/28days/src/pages/testanxiety/testanxiety.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], TestanxietyPage);
    return TestanxietyPage;
}());

//# sourceMappingURL=testanxiety.js.map

/***/ })

});
//# sourceMappingURL=4.js.map