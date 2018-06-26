webpackJsonp([26],{

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiaryPageModule", function() { return DiaryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__diary__ = __webpack_require__(660);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DiaryPageModule = (function () {
    function DiaryPageModule() {
    }
    DiaryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__diary__["a" /* DiaryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__diary__["a" /* DiaryPage */]),
            ],
        })
    ], DiaryPageModule);
    return DiaryPageModule;
}());

//# sourceMappingURL=diary.module.js.map

/***/ }),

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Canvas */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
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
 * Generated class for the DiaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Canvas = (function () {
    function Canvas() {
    }
    Canvas = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: 'canvas' })
    ], Canvas);
    return Canvas;
}());

var DiaryPage = (function () {
    function DiaryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.button1src = 'assets/diary11.png';
        this.button2src = 'assets/diary2.png';
        this.button3src = 'assets/diary3.png';
        this.button4src = 'assets/diary4.png';
        this.button1chose = true;
        this.button2chose = false;
        this.button3chose = false;
        this.button4chose = false;
        this.showLineChart = true;
        this.showLineChart2 = false;
        this.showLineChart3 = false;
        this.showBarChart = false;
        console.log('constructor');
        this.d = new Date();
        this.year = this.d.getFullYear();
        this.month = this.d.getMonth() + 1;
        this.dayArrays = this.createDayArrays(this.d.getDay(), this.daysInMonth(this.year, this.month));
    }
    DiaryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad');
    };
    DiaryPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        console.log('ngAfterViewInit');
        var i = 0;
        this.lineCanvases.forEach(function (lc) {
            _this.createLineChart(lc, _this.dayArrays[i], _this.createTestArray(_this.dayArrays[i]));
            i++;
        });
        this.lineCanvases.changes.subscribe(function (r) {
            var i = 0;
            _this.lineCanvases.forEach(function (lc) {
                _this.createLineChart(lc, _this.dayArrays[i], _this.createTestArray(_this.dayArrays[i]));
                i++;
            });
        });
        this.lineCanvases2.changes.subscribe(function (r) {
            var i = 0;
            _this.lineCanvases2.forEach(function (lc) {
                _this.createLineChart2(lc, _this.dayArrays[i], _this.createTestArray2(_this.dayArrays[i]));
                i++;
            });
        });
        this.lineCanvases3.changes.subscribe(function (r) {
            var i = 0;
            _this.lineCanvases3.forEach(function (lc) {
                _this.createLineChart3(lc, _this.dayArrays[i], _this.createTestArray3(_this.dayArrays[i]));
                i++;
            });
        });
        this.barCanvas.changes.subscribe(function (r) {
            if (_this.barCanvas.first == null) {
                return;
            }
            _this.createBarChart(_this.barCanvas.first);
        });
    };
    DiaryPage.prototype.daysInMonth = function (year, month) {
        return new Date(year, month, 0).getDate();
    };
    DiaryPage.prototype.createDayArrays = function (firstday, daysinmonth) {
        var dayArrays = [];
        var dayArray = [];
        for (var i = 0; i < daysinmonth; i++) {
            if (firstday % 7 == 0) {
                if (dayArray.length != 0) {
                    dayArrays.push(this.fillnull(dayArray));
                }
                dayArray = [];
                dayArray.push(i + 1);
            }
            else {
                dayArray.push(i + 1);
            }
            firstday++;
        }
        if (dayArray.length != 0) {
            dayArrays.push(this.fillnull(dayArray));
        }
        console.log(JSON.stringify(dayArrays));
        return dayArrays;
    };
    DiaryPage.prototype.createTestArray = function (dayarray) {
        var testArray = [];
        for (var i = 0; i < dayarray.length; i++) {
            if (dayarray[i]) {
                testArray.push(i % 5 + 1);
            }
            else {
                testArray.push(null);
            }
        }
        return testArray;
    };
    DiaryPage.prototype.createTestArray2 = function (dayarray) {
        var testArray = [];
        for (var i = 0; i < dayarray.length; i++) {
            if (dayarray[i]) {
                testArray.push(i % 3 + 1);
            }
            else {
                testArray.push(null);
            }
        }
        return testArray;
    };
    DiaryPage.prototype.createTestArray3 = function (dayarray) {
        var testArray = [];
        for (var i = 0; i < dayarray.length; i++) {
            if (dayarray[i]) {
                testArray.push(i % 2);
            }
            else {
                testArray.push(null);
            }
        }
        return testArray;
    };
    DiaryPage.prototype.fillnull = function (dayarray) {
        if (dayarray[0] == 1) {
            while (dayarray.length != 7) {
                dayarray.unshift(null);
            }
        }
        else {
            while (dayarray.length != 7) {
                dayarray.push(null);
            }
        }
        return dayarray;
    };
    DiaryPage.prototype.monthprev = function () {
        if (this.month == 1) {
            this.d.setFullYear(this.year - 1, 11, 1);
        }
        else {
            this.d.setFullYear(this.year, this.month - 2, 1);
        }
        this.year = this.d.getFullYear();
        this.month = this.d.getMonth() + 1;
        this.dayArrays = this.createDayArrays(this.d.getDay(), this.daysInMonth(this.year, this.month));
        this.button1();
    };
    DiaryPage.prototype.monthnext = function () {
        if (this.month == 12) {
            this.d.setFullYear(this.year + 1, 0, 1);
        }
        else {
            this.d.setFullYear(this.year, this.month, 1);
        }
        this.year = this.d.getFullYear();
        this.month = this.d.getMonth() + 1;
        this.dayArrays = this.createDayArrays(this.d.getDay(), this.daysInMonth(this.year, this.month));
        this.button1();
    };
    DiaryPage.prototype.button1 = function () {
        this.button1src = 'assets/diary11.png';
        this.button2src = 'assets/diary2.png';
        this.button3src = 'assets/diary3.png';
        this.button4src = 'assets/diary4.png';
        this.button1chose = true;
        this.button2chose = false;
        this.button3chose = false;
        this.button4chose = false;
        this.showLineChart = true;
        this.showLineChart2 = false;
        this.showLineChart3 = false;
        this.showBarChart = false;
    };
    DiaryPage.prototype.button2 = function () {
        this.button1src = 'assets/diary1.png';
        this.button2src = 'assets/diary22.png';
        this.button3src = 'assets/diary3.png';
        this.button4src = 'assets/diary4.png';
        this.button1chose = false;
        this.button2chose = true;
        this.button3chose = false;
        this.button4chose = false;
        this.showLineChart = false;
        this.showLineChart2 = true;
        this.showLineChart3 = false;
        this.showBarChart = false;
    };
    DiaryPage.prototype.button3 = function () {
        this.button1src = 'assets/diary1.png';
        this.button2src = 'assets/diary2.png';
        this.button3src = 'assets/diary33.png';
        this.button4src = 'assets/diary4.png';
        this.button1chose = false;
        this.button2chose = false;
        this.button3chose = true;
        this.button4chose = false;
        this.showLineChart = false;
        this.showLineChart2 = false;
        this.showLineChart3 = true;
        this.showBarChart = false;
    };
    DiaryPage.prototype.button4 = function () {
        this.button1src = 'assets/diary1.png';
        this.button2src = 'assets/diary2.png';
        this.button3src = 'assets/diary3.png';
        this.button4src = 'assets/diary44.png';
        this.button1chose = false;
        this.button2chose = false;
        this.button3chose = false;
        this.button4chose = true;
        this.showLineChart = false;
        this.showLineChart2 = false;
        this.showLineChart3 = false;
        this.showBarChart = true;
    };
    DiaryPage.prototype.createLineChart = function (canvas, labels, data) {
        var colorArray = [];
        for (var i = 0; i < data.length; i++) {
            if (data[i]) {
                if (data[i] < 3) {
                    colorArray.push('rgba(160,160,160,1)');
                }
                else {
                    colorArray.push('rgba(97,185,105,1)');
                }
            }
            else {
                colorArray.push(null);
            }
        }
        var chart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](canvas.nativeElement, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                        label: '',
                        data: data,
                        backgroundColor: 'rgba(97,185,105,1)',
                        borderColor: 'rgba(97,185,105,1)',
                        borderWidth: 1.5,
                        borderJoinStyle: 'round',
                        fill: false,
                        lineTension: 0,
                        pointBackgroundColor: colorArray,
                        pointBorderColor: colorArray,
                        pointBorderWidth: 0,
                        pointRadius: 2.5,
                        spanGaps: true
                    }]
            },
            options: {
                layout: {
                    padding: {
                        left: 12,
                        right: 23,
                        top: 5,
                        bottom: -5
                    }
                },
                tooltips: {
                    enabled: false
                },
                legend: {
                    display: false,
                },
                scales: {
                    xAxes: [{
                            ticks: {
                                display: false,
                            },
                            gridLines: {
                                display: false,
                                drawBorder: false
                            }
                        }],
                    yAxes: [{
                            ticks: {
                                display: false,
                                max: 5,
                                min: 1,
                                stepSize: 1
                            },
                            gridLines: {
                                display: false,
                                drawBorder: false
                            }
                        }]
                },
                animation: {
                    duration: 0,
                },
                hover: {
                    animationDuration: 0,
                },
                responsiveAnimationDuration: 0,
            }
        });
        return chart;
    };
    DiaryPage.prototype.createLineChart2 = function (canvas, labels, data) {
        var colorArray = [];
        for (var i = 0; i < data.length; i++) {
            if (data[i]) {
                if (data[i] < 2) {
                    colorArray.push('rgba(160,160,160,1)');
                }
                else {
                    colorArray.push('rgba(97,185,105,1)');
                }
            }
            else {
                colorArray.push(null);
            }
        }
        var chart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](canvas.nativeElement, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                        label: '',
                        data: data,
                        backgroundColor: 'rgba(97,185,105,1)',
                        borderColor: 'rgba(97,185,105,1)',
                        borderWidth: 1.5,
                        borderJoinStyle: 'round',
                        fill: false,
                        lineTension: 0,
                        pointBackgroundColor: colorArray,
                        pointBorderColor: colorArray,
                        pointBorderWidth: 0,
                        pointRadius: 2.5,
                        spanGaps: true
                    }]
            },
            options: {
                layout: {
                    padding: {
                        left: 12,
                        right: 23,
                        top: 5,
                        bottom: -5
                    }
                },
                tooltips: {
                    enabled: false
                },
                legend: {
                    display: false,
                },
                scales: {
                    xAxes: [{
                            ticks: {
                                display: false,
                            },
                            gridLines: {
                                display: false,
                                drawBorder: false
                            }
                        }],
                    yAxes: [{
                            ticks: {
                                display: false,
                                max: 3,
                                min: 1,
                                stepSize: 1
                            },
                            gridLines: {
                                display: false,
                                drawBorder: false
                            }
                        }]
                },
                animation: {
                    duration: 0,
                },
                hover: {
                    animationDuration: 0,
                },
                responsiveAnimationDuration: 0,
            }
        });
        return chart;
    };
    DiaryPage.prototype.createLineChart3 = function (canvas, labels, data) {
        var dataArray = [];
        var colorArray = [];
        for (var i = 0; i < data.length; i++) {
            if (data[i] != null) {
                if (data[i] == 0) {
                    colorArray.push('rgba(245,61,61,1)');
                }
                else {
                    colorArray.push('rgba(72,138,255,1)');
                }
                dataArray.push(1);
            }
            else {
                colorArray.push(null);
                dataArray.push(null);
            }
        }
        var chart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](canvas.nativeElement, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                        label: '',
                        data: dataArray,
                        backgroundColor: 'rgba(160,160,160,1)',
                        borderColor: 'rgba(160,160,160,1)',
                        borderWidth: 1.5,
                        borderJoinStyle: 'round',
                        fill: false,
                        lineTension: 0,
                        pointBackgroundColor: colorArray,
                        pointBorderColor: colorArray,
                        pointBorderWidth: 0,
                        pointRadius: 5,
                        spanGaps: true
                    }]
            },
            options: {
                layout: {
                    padding: {
                        left: 12,
                        right: 23,
                        top: 5,
                        bottom: -5
                    }
                },
                tooltips: {
                    enabled: false
                },
                legend: {
                    display: false,
                },
                scales: {
                    xAxes: [{
                            ticks: {
                                display: false,
                            },
                            gridLines: {
                                display: false,
                                drawBorder: false
                            }
                        }],
                    yAxes: [{
                            ticks: {
                                display: false,
                                max: 2,
                                min: 0,
                                stepSize: 1
                            },
                            gridLines: {
                                display: false,
                                drawBorder: false
                            }
                        }]
                },
                animation: {
                    duration: 0,
                },
                hover: {
                    animationDuration: 0,
                },
                responsiveAnimationDuration: 0,
            }
        });
        return chart;
    };
    DiaryPage.prototype.createBarChart = function (canvas) {
        var chart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](canvas.nativeElement, {
            type: 'bar',
            data: {
                labels: ["28일 전", "19일 전", "8일 전", "오늘"],
                datasets: [{
                        data: [21, 19, 27, 14],
                        backgroundColor: 'rgba(97,185,105,0.5)',
                        borderColor: 'rgba(97,185,105,1)',
                        borderWidth: 1
                    }]
            },
            options: {
                tooltips: {
                    enabled: false
                },
                legend: {
                    display: false,
                },
                scales: {
                    xAxes: [{
                            barPercentage: 0.4,
                            gridLines: {
                                display: false
                            }
                        }],
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                },
                animation: {
                    duration: 0,
                    onComplete: function () {
                        var ctx = this.chart.ctx;
                        ctx.textAlign = "center";
                        ctx.textBaseline = "middle";
                        var chart = this;
                        var datasets = this.config.data.datasets;
                        datasets.forEach(function (dataset, i) {
                            ctx.font = "10px Arial";
                            ctx.fillStyle = "Black";
                            chart.getDatasetMeta(i).data.forEach(function (p, j) {
                                ctx.fillText(datasets[i].data[j], p._model.x, p._model.y - 10);
                            });
                        });
                    }
                },
                hover: {
                    animationDuration: 0,
                },
                responsiveAnimationDuration: 0,
            }
        });
        return chart;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('lineCanvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], DiaryPage.prototype, "lineCanvases", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('lineCanvas2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], DiaryPage.prototype, "lineCanvases2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('lineCanvas3'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], DiaryPage.prototype, "lineCanvases3", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('barCanvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], DiaryPage.prototype, "barCanvas", void 0);
    DiaryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-diary',template:/*ion-inline-start:"/Users/chaerinlim/Desktop/28days/src/pages/diary/diary.html"*/'<!--\n  Generated template for the DiaryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="daysgreen">\n    <ion-title>28DAYS 다이어리</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg">\n\n	<div align="center" class="date">\n		<div class="valign">\n			<button (click)="monthprev()">\n				<ion-icon name="ios-arrow-dropleft"></ion-icon>\n			</button>\n			<span class="year">{{year}}</span><span>.   </span><span class="month">{{month}}</span>\n			<button (click)="monthnext()">\n				<ion-icon name="ios-arrow-dropright"></ion-icon>\n			</button>\n		</div>\n	</div>\n\n	<div class="buttonset">\n		<table>\n		  <tr>\n		    <th [ngClass]="{borderbottomgreen: button1chose}">\n		    	<button class="photo" (click)="button1()">\n						<img src="{{button1src}}">\n						<p>괜찮아</p>\n						<span class="num">16</span><span class="denom">/</span><span class="denom">31</span>\n					</button>\n		    </th>\n		    <th [ngClass]="{borderbottomgreen: button2chose}">\n		    	<button class="photo" (click)="button2()">\n						<img src="{{button2src}}">\n						<p>보통이야</p>\n						<span class="num">16</span><span class="denom">/</span><span class="denom">31</span>\n					</button>\n		    </th> \n		    <th [ngClass]="{borderbottomgreen: button3chose}">\n		    	<button class="photo" (click)="button3()">\n						<img src="{{button3src}}">\n						<p>먹었어</p>\n						<span class="num">16</span><span class="denom">/</span><span class="denom">31</span>\n					</button>\n		    </th>\n		    <th [ngClass]="{borderbottomgreen: button4chose}">\n		    	<button class="photo" (click)="button4()">\n						<img src="{{button4src}}">\n						<p>점수평균</p>\n						<span class="num">19.6</span>\n					</button>\n		    </th> \n		  </tr>\n		</table>\n	</div>\n\n	<div class="body" *ngIf="showLineChart">\n		<table *ngFor="let dayArray of dayArrays">\n			<tr>\n				<td *ngFor="let day of dayArray">\n					<div align="center">\n						<p>{{day}}</p>\n					</div>\n				</td>\n			</tr>\n			<canvas #lineCanvas width="300" height="50"></canvas>\n		</table>\n	</div>\n\n	<div class="body" *ngIf="showLineChart2">\n		<table *ngFor="let dayArray of dayArrays">\n			<tr>\n				<td *ngFor="let day of dayArray">\n					<div align="center">\n						<p>{{day}}</p>\n					</div>\n				</td>\n			</tr>\n			<canvas #lineCanvas2 width="300" height="50"></canvas>\n		</table>\n	</div>\n\n	<div class="body" *ngIf="showLineChart3">\n		<table *ngFor="let dayArray of dayArrays">\n			<tr>\n				<td *ngFor="let day of dayArray">\n					<div align="center">\n						<p>{{day}}</p>\n					</div>\n				</td>\n			</tr>\n			<canvas #lineCanvas3 width="300" height="30"></canvas>\n		</table>\n	</div>\n\n	<div class="body2" align="center" *ngIf="showBarChart">\n		<p>현재 [<span>우울 극복</span>]에 도전하고 있어요!</p>\n		<canvas #barCanvas width="300" height="200"></canvas>\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/chaerinlim/Desktop/28days/src/pages/diary/diary.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], DiaryPage);
    return DiaryPage;
}());

//# sourceMappingURL=diary.js.map

/***/ })

});
//# sourceMappingURL=26.js.map