webpackJsonp([29],{

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunitycommentPageModule", function() { return CommunitycommentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__communitycomment__ = __webpack_require__(658);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CommunitycommentPageModule = (function () {
    function CommunitycommentPageModule() {
    }
    CommunitycommentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__communitycomment__["a" /* CommunitycommentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__communitycomment__["a" /* CommunitycommentPage */]),
            ],
        })
    ], CommunitycommentPageModule);
    return CommunitycommentPageModule;
}());

//# sourceMappingURL=communitycomment.module.js.map

/***/ }),

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunitycommentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_communitycomment_communitycomment__ = __webpack_require__(405);
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
 * Generated class for the CommunitycommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CommunitycommentPage = (function () {
    function CommunitycommentPage(navCtrl, navParams, events, zone, cocomment, formBuilder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.zone = zone;
        this.cocomment = cocomment;
        this.formBuilder = formBuilder;
        this.list_showsubcomment = [];
        // this event is published when any changes related to firebase comment data happen in CommunitycommentProvider
        this.events.subscribe('community-newcomment', function () {
            _this.comments = [];
            _this.zone.run(function () {
                _this.comments = _this.cocomment.comments;
                _this.setshowsubcomment(_this.comments);
            });
        });
        // set validator for comment input form and subcomment input form
        // text must be required
        this.commentForm = formBuilder.group({
            txt: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
        this.subcommentForm = formBuilder.group({
            txt: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    CommunitycommentPage.prototype.ionViewDidLoad = function () {
        this.cocomment.getallcomments();
    };
    CommunitycommentPage.prototype.ionViewWillLeave = function () {
        console.log('ionViewWillLeave - Communitycomment');
        this.events.unsubscribe('community-newcomment');
        this.cocomment.stoplistencomments();
    };
    /* user writes comment and push enter button */
    CommunitycommentPage.prototype.writeComment = function () {
        if (this.commentForm.valid) {
            var txt = this.commentForm.value.txt;
            this.commentForm.reset();
            this.cocomment.uploadcomment(txt);
        }
    };
    /* user clicks subcomment of a comment */
    CommunitycommentPage.prototype.showsubcomment = function (comment) {
        if (comment.showsubcomment) {
            comment.showsubcomment = false;
            // remove commentid from list of subcomments which were opened
            var index = this.list_showsubcomment.indexOf(comment.commentid);
            if (index > -1) {
                this.list_showsubcomment.splice(index, 1);
            }
        }
        else {
            comment.showsubcomment = true;
            // push commentid to list of subcomments which were opened
            this.list_showsubcomment.push(comment.commentid);
        }
    };
    /* user writes subcomment and push enter button */
    CommunitycommentPage.prototype.writeSubcomment = function (comment) {
        if (this.subcommentForm.valid) {
            var txt = this.subcommentForm.value.txt;
            this.subcommentForm.reset();
            this.cocomment.uploadSubcomment(comment.commentid, txt);
        }
    };
    // JSONtoArray(json) {
    // 	return Object.keys(json).map(function(k) { return json[k] });
    // }
    /* set previous state about whether subcomments were shown or not */
    CommunitycommentPage.prototype.setshowsubcomment = function (comments) {
        for (var i = 0; i < comments.length; i++) {
            if (this.list_showsubcomment.indexOf(comments[i].commentid) > -1) {
                comments[i].showsubcomment = true;
            }
        }
    };
    CommunitycommentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-communitycomment',template:/*ion-inline-start:"/Users/chaerinlim/Desktop/28days/src/pages/communitycomment/communitycomment.html"*/'<!--\n  Generated template for the CommunitycommentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="daysgreen">\n    <ion-title>댓글</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n	<ul>\n		<li *ngFor="let comment of comments">\n			<div class="comment">\n				<div class="bubble">\n					<p class="name">{{ comment.username }}</p>\n					<p class="text">{{ comment.text }}</p>\n				</div>\n				<div class="btn">\n					<button (click)="showsubcomment(comment)">답글 달기<span *ngIf="comment.subcommentnum != 0"> - 답글 {{ comment.subcommentnum }}개</span></button>\n				</div>\n			</div>\n			<div *ngIf="comment.showsubcomment">\n				<ul class="subcommentlist" *ngIf="comment.subcommentnum != 0">\n					<li *ngFor="let subcomment of JSONtoArray(comment.subcomment)">\n						<div class="subcomment">\n							<div class="bubble">\n								<p class="name">{{ subcomment.username }}</p>\n								<p class="text">{{ subcomment.text }}</p>\n							</div>\n						</div>\n					</li>\n				</ul>\n				<div class="subcomment">\n					<form [formGroup]="subcommentForm" class="commentform">\n						<input formControlName="txt" type="text">\n						<button (click)="writeSubcomment(comment)">\n							<img src="assets/send.png">\n						</button>\n					</form>\n				</div>\n			</div>\n		</li>\n	</ul>\n\n</ion-content>\n\n<ion-footer>\n\n	<form [formGroup]="commentForm" class="footerform">\n		<input formControlName="txt" type="text">\n		<button (click)="writeComment()">\n			<img src="assets/send.png">\n		</button>\n	</form>\n\n</ion-footer>\n'/*ion-inline-end:"/Users/chaerinlim/Desktop/28days/src/pages/communitycomment/communitycomment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_3__providers_communitycomment_communitycomment__["a" /* CommunitycommentProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], CommunitycommentPage);
    return CommunitycommentPage;
}());

//# sourceMappingURL=communitycomment.js.map

/***/ })

});
//# sourceMappingURL=29.js.map