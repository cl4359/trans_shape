webpackJsonp([30],{

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityPageModule", function() { return CommunityPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__community__ = __webpack_require__(657);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CommunityPageModule = (function () {
    function CommunityPageModule() {
    }
    CommunityPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__community__["a" /* CommunityPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__community__["a" /* CommunityPage */]),
            ],
        })
    ], CommunityPageModule);
    return CommunityPageModule;
}());

//# sourceMappingURL=community.module.js.map

/***/ }),

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_community_community__ = __webpack_require__(149);
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
 * Generated class for the CommunityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CommunityPage = (function () {
    function CommunityPage(navCtrl, navParams, community) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.community = community;
    }
    CommunityPage.prototype.depress = function () {
        this.community.initializecom(0);
        this.navCtrl.push('CommunitygroupPage');
    };
    CommunityPage.prototype.anxiety = function () {
        this.community.initializecom(1);
        this.navCtrl.push('CommunitygroupPage');
    };
    CommunityPage.prototype.schizo = function () {
        this.community.initializecom(2);
        this.navCtrl.push('CommunitygroupPage');
    };
    CommunityPage.prototype.trauma = function () {
        this.community.initializecom(3);
        this.navCtrl.push('CommunitygroupPage');
    };
    CommunityPage.prototype.school = function () {
        this.community.initializecom(4);
        this.navCtrl.push('CommunitygroupPage');
    };
    CommunityPage.prototype.family = function () {
        this.community.initializecom(5);
        this.navCtrl.push('CommunitygroupPage');
    };
    CommunityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-community',template:/*ion-inline-start:"/Users/chaerinlim/Desktop/28days-master/src/pages/community/community.html"*/'<!--\n  Generated template for the CommunityPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="daysgreen">\n    <ion-title>커뮤니티</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n	<div class="text">\n		<p>\n			자신의 경험에 대해 얘기하고<br>\n			서로가 가진 노하우를 공유해보아요!\n		</p>\n	</div>\n\n	<table class="buttons">\n	  <tr>\n	    <td align="center">\n	    	<div>\n	    		<button (click)="depress()">\n		    		<p>\n				    	우울증<br>\n							서포트 그룹\n				    </p>\n			  	</button>\n		    </div>\n	    </td>\n	    <td align="center">\n	    	<div>\n	    		<button (click)="anxiety()">\n		    		<p>\n				    	불안장애<br>\n							서포트 그룹\n				    </p>\n			  	</button>\n		    </div>\n	    </td>\n	    <td align="center">\n	    	<div (click)="schizo()">\n	    		<button>\n		    		<p>\n				    	조현병<br>\n							서포트 그룹\n				    </p>\n			  	</button>\n		    </div>\n	    </td>\n	  </tr>\n	  <tr>\n	    <td align="center">\n	    	<div>\n	    		<button (click)="trauma()">\n		    		<p>\n				    	트라우마<br>\n							서포트 그룹\n				    </p>\n			  	</button>\n		    </div>\n	    </td>\n	    <td align="center">\n	    	<div>\n	    		<button (click)="school()">\n		    		<p>\n				    	학교폭력<br>\n							서포트 그룹\n				    </p>\n			  	</button>\n		    </div>\n	    </td>\n	    <td align="center">\n	    	<div>\n	    		<button (click)="family()">\n		    		<p>\n				    	가정폭력<br>\n							서포트 그룹\n				    </p>\n			  	</button>\n		    </div>\n	    </td>\n	  </tr>\n	</table>\n\n</ion-content>\n'/*ion-inline-end:"/Users/chaerinlim/Desktop/28days-master/src/pages/community/community.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_community_community__["a" /* CommunityProvider */]])
    ], CommunityPage);
    return CommunityPage;
}());

//# sourceMappingURL=community.js.map

/***/ })

});
//# sourceMappingURL=30.js.map