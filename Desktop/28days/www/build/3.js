webpackJsonp([3],{

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestdepressionPageModule", function() { return TestdepressionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__testdepression__ = __webpack_require__(688);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TestdepressionPageModule = (function () {
    function TestdepressionPageModule() {
    }
    TestdepressionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__testdepression__["a" /* TestdepressionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__testdepression__["a" /* TestdepressionPage */]),
            ],
        })
    ], TestdepressionPageModule);
    return TestdepressionPageModule;
}());

//# sourceMappingURL=testdepression.module.js.map

/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestdepressionPage; });
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
 * Generated class for the TestdepressionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestdepressionPage = (function () {
    function TestdepressionPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.toquestion = false;
        this.toresult = false;
        this.answers = ['1일 이하', '2일 ~ 6일', '7일 ~ 12일', '거의 매일'];
        this.useranswers = [];
        this.question = '기분이 가라앉거나, 우울하거나, 희망이 없다고 느꼈다.';
        this.qcount = 0;
        this.questions = [
            '기분이 가라앉거나, 우울하거나, 희망이 없다고 느꼈다.',
            '평소 하던 일에 대한 흥미가 없어지거나 즐거움을 느끼지 못 했다.',
            '잠들기가 어렵거나 자주 깼다. 혹은 너무 많이 잤다.',
            '다른 사람들이 눈치 챌 정도로 평소보다 말과 행동이 느려졌다. 혹은 너무 안절부절못해서 가만히 있을 수 없었다.',
            '피곤하고 기운이 없었다.',
            '내가 잘못했거나, 내가 실패했다는 생각이 들었다, 혹은 자신과 가족을 실망시켰다고 생각했다.',
            '신문을 읽거나 TV를 보는 것과 같은 일상적인 일에도 집중을 할 수가 없었다.',
            '평소보다 식욕이 줄었다, 혹은 평소보다 많이 먹었다.',
            '차라리 죽는 것이 더 낫겠다고 생각했다. 혹은 자해할 생각을 했다.'
        ];
    }
    TestdepressionPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.nb.backButtonClick = function () {
            _this.backhandler();
        };
    };
    TestdepressionPage.prototype.backhandler = function () {
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
    TestdepressionPage.prototype.gotoquestions = function () {
        this.toquestion = true;
    };
    TestdepressionPage.prototype.nextquestion = function (answer) {
        if (this.qcount == 8) {
            this.useranswers.push(this.answers.indexOf(answer));
            console.log(this.useranswers.toString());
            this.getresult();
            this.toresult = true;
            return;
        }
        this.qcount++;
        this.question = this.questions[this.qcount];
        this.useranswers.push(this.answers.indexOf(answer));
        console.log(this.useranswers.toString());
    };
    TestdepressionPage.prototype.getresult = function () {
        var add = function (a, b) { return a + b; };
        this.score = this.useranswers.reduce(add);
        if (this.score <= 4) {
            this.category = ' 우울증 아님 ';
        }
        else if (this.score <= 9) {
            this.category = ' 가벼운 우울증 ';
        }
        else if (this.score <= 14) {
            this.category = ' 중간 정도 우울증 ';
        }
        else if (this.score <= 19) {
            this.category = ' 치료가 필요한 우울증 ';
        }
        else {
            this.category = ' 적극적 치료가 필요한 우울증 ';
        }
    };
    TestdepressionPage.prototype.close = function () {
        this.navCtrl.setRoot('HomePage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Navbar */])
    ], TestdepressionPage.prototype, "nb", void 0);
    TestdepressionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-testdepression',template:/*ion-inline-start:"/Users/chaerinlim/Desktop/28days/src/pages/testdepression/testdepression.html"*/'<!--\n  Generated template for the TestdepressionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="daysgreen">\n    <ion-title>우울증 자가진단</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<table class="start" *ngIf="!toquestion">\n		<div class="outer">\n		  <div class="middle">\n		    <div class="inner">\n		    	<h2>PHQ-9 TEST</h2>\n					<p>우울증 자가진단을 시작합니다 :)<br>지금부터 9가지 질문을 드릴 거에요!<br>지난 2주 동안 자신을 가장<br>잘 설명하는 답을 선택해주시면 돼요!</p>\n				</div>\n			</div>\n    </div>\n    <tr>\n	    <td valign="bottom">\n	      <div>\n	      	<button (click)="gotoquestions()">검사 시작하기</button>\n	      </div>\n	    </td>\n    </tr>\n  </table>\n\n  <table class="question" *ngIf="toquestion && !toresult">\n		<div class="outer">\n		  <div class="middle">\n		    <div class="inner">\n					<p>{{ question }}</p>\n				</div>\n			</div>\n    </div>\n    <tr>\n	    <td valign="bottom">\n	      <div id="answers">\n	      	<ul *ngFor="let answer of answers">\n	      		<li (click)="nextquestion(answer)">\n	      			<button>{{ answer }}</button>\n	      		</li>\n	      	</ul>\n	      </div>\n	    </td>\n    </tr>\n  </table>\n\n  <div class="outer" *ngIf="toresult">\n	  <div class="middle">\n	    <div class="inner">\n			  <table class="result">\n			    <div class="inner">\n			    	<h2>테스트 결과</h2>\n						<p class="score">우울증 자가진단 결과 점수는 <span>{{ score }}</span>으로,<br><span>[{{ category }}]</span> 구간에 계세요.</p>\n						<p>보다 정확한 진단은 전문가를 통해 진행하시기를 권장해요. 진단 이력은 내 프로필에서 확인하실 수 있어요.</p>\n					</div>\n			    <tr>\n				    <td valign="bottom">\n				      <div>\n				      	<button (click)="close()">닫기</button>\n				      </div>\n				    </td>\n			    </tr>\n			  </table>\n  		</div>\n		</div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/chaerinlim/Desktop/28days/src/pages/testdepression/testdepression.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], TestdepressionPage);
    return TestdepressionPage;
}());

//# sourceMappingURL=testdepression.js.map

/***/ })

});
//# sourceMappingURL=3.js.map