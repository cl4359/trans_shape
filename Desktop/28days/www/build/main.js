webpackJsonp([32],{

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserProvider = (function () {
    function UserProvider() {
        this.fireusers = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('/users');
        this.fireusernames = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('/usernames');
    }
    UserProvider.prototype.checkUsername = function (username) {
        username = username.toLowerCase();
        return this.fireusernames.child(username).once("value");
    };
    UserProvider.prototype.updateUserprofile = function (username, gender, age) {
        var _this = this;
        var uid = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.uid;
        var data = {};
        data[username] = uid;
        var promise = new Promise(function (resolve) {
            __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.updateProfile({
                displayName: username,
                photoURL: "assets/profile0.png"
            }).then(function () {
                _this.fireusers.child(uid).update({
                    uid: uid,
                    username: username,
                    greeting: "안녕하세요! " + username + " 입니다. 함께 나아가요!",
                    gender: gender,
                    age: age,
                    photoURL: "assets/profile0.png"
                }).then(function () {
                    _this.fireusernames.update(data).then(function () {
                        resolve(true);
                    });
                });
            });
        });
        return promise;
    };
    UserProvider.prototype.getallUserprofiles = function () {
        var _this = this;
        var promise = new Promise(function (resolve) {
            _this.fireusers.once("value").then(function (snapshot) {
                var userprofiles = [];
                snapshot.forEach(function (childSnapshot) {
                    userprofiles.push(childSnapshot.val());
                });
                resolve(userprofiles);
            });
        });
        return promise;
    };
    UserProvider.prototype.updatePhoto = function (path) {
        var _this = this;
        var uid = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.uid;
        var promise = new Promise(function (resolve) {
            __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.updateProfile({
                displayName: __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.displayName,
                photoURL: path
            }).then(function () {
                _this.fireusers.child(uid).update({
                    photoURL: path
                }).then(function () {
                    resolve(true);
                });
            });
        });
        return promise;
    };
    UserProvider.prototype.getUserprofile = function (uid) {
        var _this = this;
        var promise = new Promise(function (resolve) {
            _this.fireusers.child(uid).once("value").then(function (snapshot) {
                resolve(snapshot.val());
            });
        });
        return promise;
    };
    UserProvider.prototype.updateGreeting = function (greeting) {
        var _this = this;
        var uid = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.uid;
        var promise = new Promise(function (resolve) {
            _this.fireusers.child(uid).update({
                greeting: greeting
            }).then(function () {
                resolve(true);
            });
        });
        return promise;
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunityProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the CommunityProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CommunityProvider = (function () {
    function CommunityProvider() {
        this.firecommunity = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('/community');
        this.firelike = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('/like');
        this.firestore = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.storage();
        this.namecomlist = [
            'depression',
            'anxiety',
            'schizophrenia',
            'trauma',
            'school',
            'family'
        ];
        this.titlelist = [
            '우울증 서포트 그룹',
            '불안장애 서포트 그룹',
            '조현병 서포트 그룹',
            '트라우마 서포트 그룹',
            '학교폭력 서포트 그룹',
            '가정폭력 서포트 그룹'
        ];
    }
    /* community provider initializer */
    CommunityProvider.prototype.initializecom = function (order) {
        this.title = this.titlelist[order];
        this.namecom = this.namecomlist[order];
    };
    /* upload post to firebase */
    CommunityProvider.prototype.uploadPost = function (txt, dataURL) {
        var _this = this;
        var uid = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.uid;
        var promise = new Promise(function (resolve) {
            var newPostRef = _this.firecommunity.child(_this.namecom).push();
            var postId = newPostRef.key;
            if (dataURL) {
                var imageStore = _this.firestore.ref('/community/' + _this.namecom).child(postId);
                imageStore.putString(dataURL, 'base64', { contentType: 'image/jpeg' }).then(function (savedImage) {
                    newPostRef.set({
                        postid: postId,
                        uid: uid,
                        username: __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.displayName,
                        text: txt,
                        url: savedImage.downloadURL,
                        timestamp: __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database.ServerValue.TIMESTAMP,
                        comment: 0,
                        like: 0
                    }).then(function () {
                        resolve(true);
                    });
                });
            }
            else {
                newPostRef.set({
                    postid: postId,
                    uid: uid,
                    username: __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.displayName,
                    text: txt,
                    url: null,
                    timestamp: __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database.ServerValue.TIMESTAMP,
                    comment: 0,
                    like: 0
                }).then(function () {
                    resolve(true);
                });
            }
        });
        return promise;
    };
    /* get all posts in firebase */
    CommunityProvider.prototype.getallposts = function () {
        var _this = this;
        var uid = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.uid;
        var promise = new Promise(function (resolve) {
            _this.firecommunity.child(_this.namecom).orderByChild('timestamp').once("value").then(function (snapshot) {
                _this.firelike.child(uid + "/" + _this.namecom).once("value").then(function (likesnapshot) {
                    var likepostid = [];
                    likesnapshot.forEach(function (childSnapshot) {
                        likepostid.push(childSnapshot.key);
                    });
                    var posts = [];
                    snapshot.forEach(function (childSnapshot) {
                        var post = childSnapshot.val();
                        // if user liked this post, set like img to full heart
                        // else, set like img to empty heart
                        if (likepostid.indexOf(post.postid) != -1) {
                            post.likesrc = "assets/like-full.png";
                        }
                        else {
                            post.likesrc = "assets/like.png";
                        }
                        posts.push(post);
                    });
                    posts.reverse();
                    resolve(posts);
                });
            });
        });
        return promise;
    };
    /* when user click like of a post, save timestamp and add 1 to the number of like of a post */
    CommunityProvider.prototype.setLike = function (post) {
        var _this = this;
        var uid = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.uid;
        var promise = new Promise(function (resolve) {
            _this.firelike.child(uid + "/" + _this.namecom + "/" + post.postid).set({
                timestamp: __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database.ServerValue.TIMESTAMP
            }).then(function () {
                _this.firecommunity.child(_this.namecom + "/" + post.postid).update({
                    like: post.like + 1
                }).then(function () {
                    resolve(true);
                });
            });
        });
        return promise;
    };
    /* when user click unlike of a post, remove timestamp and subtract 1 to the number of like of a post*/
    CommunityProvider.prototype.deleteLike = function (post) {
        var _this = this;
        var uid = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.uid;
        var promise = new Promise(function (resolve) {
            _this.firelike.child(uid + "/" + _this.namecom + "/" + post.postid).remove().then(function () {
                _this.firecommunity.child(_this.namecom + "/" + post.postid).update({
                    like: post.like - 1
                }).then(function () {
                    resolve(true);
                });
            });
        });
        return promise;
    };
    /* when user write comment, add 1 to the number of comments of a post */
    CommunityProvider.prototype.addComment = function (post) {
        var _this = this;
        var promise = new Promise(function (resolve) {
            _this.firecommunity.child(_this.namecom + "/" + post.postid).once("value").then(function (snapshot) {
                _this.firecommunity.child(_this.namecom + "/" + post.postid).update({
                    comment: snapshot.val().comment + 1
                }).then(function () {
                    resolve(true);
                });
            });
        });
        return promise;
    };
    CommunityProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CommunityProvider);
    return CommunityProvider;
}());

//# sourceMappingURL=community.js.map

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 159;

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/character/character.module": [
		622,
		31
	],
	"../pages/community/community.module": [
		623,
		30
	],
	"../pages/communitycomment/communitycomment.module": [
		624,
		29
	],
	"../pages/communitygroup/communitygroup.module": [
		625,
		28
	],
	"../pages/communitywrite/communitywrite.module": [
		626,
		27
	],
	"../pages/diary/diary.module": [
		627,
		26
	],
	"../pages/emotionbasket/emotionbasket.module": [
		628,
		25
	],
	"../pages/emotionthrow/emotionthrow.module": [
		629,
		24
	],
	"../pages/gogohome/gogohome.module": [
		630,
		23
	],
	"../pages/gogosignup/gogosignup.module": [
		631,
		22
	],
	"../pages/gogosupporter/gogosupporter.module": [
		632,
		21
	],
	"../pages/home/home.module": [
		633,
		20
	],
	"../pages/intro/intro.module": [
		634,
		19
	],
	"../pages/login/login.module": [
		635,
		1
	],
	"../pages/meditate/meditate.module": [
		636,
		18
	],
	"../pages/mychats/mychats.module": [
		637,
		17
	],
	"../pages/mydepository/mydepository.module": [
		638,
		16
	],
	"../pages/mypage/mypage.module": [
		639,
		15
	],
	"../pages/mysetting/mysetting.module": [
		640,
		14
	],
	"../pages/passwordreset/passwordreset.module": [
		641,
		2
	],
	"../pages/payment/payment.module": [
		642,
		13
	],
	"../pages/post/post.module": [
		643,
		12
	],
	"../pages/postdetail/postdetail.module": [
		644,
		11
	],
	"../pages/requestchat/requestchat.module": [
		645,
		10
	],
	"../pages/requestedchat/requestedchat.module": [
		646,
		9
	],
	"../pages/signup/signup.module": [
		647,
		0
	],
	"../pages/splash/splash.module": [
		648,
		8
	],
	"../pages/supporter/supporter.module": [
		649,
		7
	],
	"../pages/supporterchat/supporterchat.module": [
		650,
		6
	],
	"../pages/test/test.module": [
		651,
		5
	],
	"../pages/testanxiety/testanxiety.module": [
		652,
		4
	],
	"../pages/testdepression/testdepression.module": [
		653,
		3
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 200;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var AuthProvider = (function () {
    function AuthProvider() {
    }
    AuthProvider.prototype.loginUser = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().signInWithEmailAndPassword(email, password);
    };
    AuthProvider.prototype.resetPassword = function (email) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().sendPasswordResetEmail(email);
    };
    AuthProvider.prototype.logoutUser = function () {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().signOut();
    };
    AuthProvider.prototype.signupUser = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().createUserWithEmailAndPassword(email, password);
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the ChatProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ChatProvider = (function () {
    function ChatProvider(user, events) {
        this.user = user;
        this.events = events;
        this.firechat = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/chats');
        this.fireusers = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/users');
    }
    ChatProvider.prototype.getallusersExceptbuddy = function () {
        var _this = this;
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        var promise = new Promise(function (resolve) {
            _this.firechat.child(uid).once("value").then(function (snapshot) {
                var buddies = [];
                snapshot.forEach(function (childSnapshot) {
                    buddies.push(childSnapshot.key);
                });
                _this.user.getallUserprofiles().then(function (res) {
                    var users = [];
                    for (var i in res) {
                        if (res[i].uid != uid && buddies.indexOf(res[i].uid) == -1) {
                            users.push(res[i]);
                        }
                    }
                    resolve(users);
                });
            });
        });
        return promise;
    };
    ChatProvider.prototype.initializebuddy = function (buddy) {
        this.buddy = buddy;
    };
    ChatProvider.prototype.sendmessage = function (msg) {
        var _this = this;
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        var promise = new Promise(function (resolve) {
            _this.firechat.child(uid + "/" + _this.buddy.uid).once("value").then(function (snapshot) {
                if (snapshot.val()) {
                    console.log('add message to existed chat');
                    _this.firechat.child(uid + "/" + _this.buddy.uid).update({
                        recentmessage: msg,
                        recenttimestamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP
                    }).then(function () { return _this.firechat.child(_this.buddy.uid + "/" + uid).update({
                        recentmessage: msg,
                        recenttimestamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP
                    }); }).then(function () { return _this.firechat.child(uid + "/" + _this.buddy.uid + "/messages").push().set({
                        message: msg,
                        sentby: uid,
                        timestamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP
                    }); }).then(function () { return _this.firechat.child(_this.buddy.uid + "/" + uid + "/messages").push().set({
                        message: msg,
                        sentby: uid,
                        timestamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP
                    }); }).then(function () {
                        resolve(true);
                    });
                }
                else {
                    console.log('create new chat');
                    _this.firechat.child(uid + "/" + _this.buddy.uid).set({
                        requester: uid,
                        buddyuid: _this.buddy.uid,
                        recentmessage: msg,
                        recenttimestamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP
                    }).then(function () {
                        _this.firechat.child(_this.buddy.uid + "/" + uid).set({
                            requester: uid,
                            buddyuid: uid,
                            recentmessage: msg,
                            recenttimestamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP
                        }).then(function () {
                            _this.firechat.child(uid + "/" + _this.buddy.uid + "/messages").push().set({
                                message: msg,
                                sentby: uid,
                                timestamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP
                            }).then(function () { return _this.firechat.child(_this.buddy.uid + "/" + uid + "/messages").push().set({
                                message: msg,
                                sentby: uid,
                                timestamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP
                            }); }).then(function () {
                                resolve(true);
                            });
                        });
                    });
                }
            });
        });
        return promise;
    };
    ChatProvider.prototype.getallmessages = function () {
        var _this = this;
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        this.firechat.child(uid + "/" + this.buddy.uid + "/messages").on('value', function (snapshot) {
            _this.chatmessages = [];
            for (var i in snapshot.val()) {
                _this.chatmessages.push(snapshot.val()[i]);
            }
            _this.setshowprofileimageprop();
            _this.events.publish('newmessage');
        });
    };
    ChatProvider.prototype.stoplistenmessages = function () {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        this.firechat.child(uid + "/" + this.buddy.uid + "/messages").off();
    };
    ChatProvider.prototype.setshowprofileimageprop = function () {
        var showimage = true;
        for (var i in this.chatmessages) {
            if (this.chatmessages[i].sentby == this.buddy.uid) {
                if (showimage) {
                    this.chatmessages[i].showprofileimage = true;
                    showimage = false;
                }
            }
            else {
                showimage = true;
            }
        }
    };
    ChatProvider.prototype.getallRequestinfos = function () {
        var _this = this;
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        var promise = new Promise(function (resolve) {
            _this.firechat.child(uid).once("value").then(function (snapshot) {
                var requestchatuids = [];
                var requestchats = [];
                snapshot.forEach(function (childSnapshot) {
                    if (childSnapshot.val().requester == uid) {
                        requestchatuids.push(childSnapshot.val().buddyuid);
                        requestchats.push(childSnapshot.val());
                    }
                });
                _this.fireusers.once("value").then(function (userprofile) {
                    userprofile.forEach(function (childSnapshot) {
                        var index = requestchatuids.indexOf(childSnapshot.val().uid);
                        if (index != -1) {
                            requestchats[index].buddyusername = childSnapshot.val().username;
                            requestchats[index].buddyphotoURL = childSnapshot.val().photoURL;
                        }
                    });
                    resolve(requestchats);
                });
            });
        });
        return promise;
    };
    ChatProvider.prototype.deleteChat = function (buddyuid) {
        var _this = this;
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        var promise = new Promise(function (resolve) {
            _this.firechat.child(uid + "/" + buddyuid).remove().then(function () {
                resolve(true);
            });
        });
        return promise;
    };
    ChatProvider.prototype.getallRequestedinfos = function () {
        var _this = this;
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        var promise = new Promise(function (resolve) {
            _this.firechat.child(uid).once("value").then(function (snapshot) {
                var requestedchatuids = [];
                var requestedchats = [];
                snapshot.forEach(function (childSnapshot) {
                    if (childSnapshot.val().requester != uid) {
                        requestedchatuids.push(childSnapshot.val().buddyuid);
                        requestedchats.push(childSnapshot.val());
                    }
                });
                _this.fireusers.once("value").then(function (userprofile) {
                    userprofile.forEach(function (childSnapshot) {
                        var index = requestedchatuids.indexOf(childSnapshot.val().uid);
                        if (index != -1) {
                            requestedchats[index].buddyusername = childSnapshot.val().username;
                            requestedchats[index].buddyphotoURL = childSnapshot.val().photoURL;
                        }
                    });
                    resolve(requestedchats);
                });
            });
        });
        return promise;
    };
    ChatProvider.prototype.checkstart = function () {
        var _this = this;
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        var promise = new Promise(function (resolve) {
            _this.firechat.child(uid + "/" + _this.buddy.uid).once("value").then(function (snapshot) {
                if (snapshot.val()) {
                    resolve(false);
                }
                else {
                    resolve(true);
                }
            });
        });
        return promise;
    };
    ChatProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], ChatProvider);
    return ChatProvider;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunitycommentProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_community_community__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the CommunitycommentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CommunitycommentProvider = (function () {
    function CommunitycommentProvider(community, events) {
        this.community = community;
        this.events = events;
        this.firecomment = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/communitycomment');
    }
    CommunitycommentProvider.prototype.initializecomment = function (post) {
        this.post = post;
        this.postid = post.postid;
    };
    CommunitycommentProvider.prototype.uploadcomment = function (txt) {
        var _this = this;
        var promise = new Promise(function (resolve) {
            var newCommentRef = _this.firecomment.child(_this.community.namecom + "/" + _this.postid).push();
            var commentid = newCommentRef.key;
            newCommentRef.set({
                postid: _this.postid,
                commentid: commentid,
                uid: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid,
                username: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.displayName,
                text: txt,
                timestamp: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database.ServerValue.TIMESTAMP,
                subcommentnum: 0
            }).then(function () {
                // add 1 to the number of comment of a post
                _this.community.addComment(_this.post).then(function () {
                    resolve(true);
                });
            });
        });
        return promise;
    };
    CommunitycommentProvider.prototype.getallcomments = function () {
        var _this = this;
        // on function listens for data changes at a particular location
        this.firecomment.child(this.community.namecom + "/" + this.postid).on('value', function (snapshot) {
            _this.comments = [];
            for (var i in snapshot.val()) {
                _this.comments.push(snapshot.val()[i]);
            }
            _this.events.publish('community-newcomment');
        });
    };
    CommunitycommentProvider.prototype.stoplistencomments = function () {
        // off function detaches a callback previously attached with on()
        this.firecomment.child(this.community.namecom + "/" + this.postid).off();
    };
    CommunitycommentProvider.prototype.uploadSubcomment = function (commentid, txt) {
        var _this = this;
        var promise = new Promise(function (resolve) {
            var newSubcommentRef = _this.firecomment.child(_this.community.namecom + "/" + _this.postid + "/" + commentid + "/subcomment").push();
            var subcommentid = newSubcommentRef.key;
            newSubcommentRef.set({
                subcommentid: subcommentid,
                uid: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid,
                username: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.displayName,
                text: txt,
                timestamp: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database.ServerValue.TIMESTAMP
            }).then(function () {
                // add 1 to the number of subcomments of a comment
                _this.addSubcomment(commentid).then(function () {
                    resolve(true);
                });
            });
        });
        return promise;
    };
    /* add 1 to the number of subcomments of a comment */
    CommunitycommentProvider.prototype.addSubcomment = function (commentid) {
        var _this = this;
        var promise = new Promise(function (resolve) {
            _this.firecomment.child(_this.community.namecom + "/" + _this.postid + "/" + commentid).once("value").then(function (snapshot) {
                _this.firecomment.child(_this.community.namecom + "/" + _this.postid + "/" + commentid).update({
                    subcommentnum: snapshot.val().subcommentnum + 1
                }).then(function () {
                    resolve(true);
                });
            });
        });
        return promise;
    };
    CommunitycommentProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_community_community__["a" /* CommunityProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* Events */]])
    ], CommunitycommentProvider);
    return CommunitycommentProvider;
}());

//# sourceMappingURL=communitycomment.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmotionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the EmotionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var EmotionProvider = (function () {
    function EmotionProvider() {
        this.fireemotion = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('/emotions');
        this.length = 0;
    }
    EmotionProvider.prototype.updateEmotion = function (length) {
        var uid = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.uid;
        this.length = length;
        return this.fireemotion.child(uid).set({ length: length });
    };
    EmotionProvider.prototype.getEmotion = function () {
        var _this = this;
        var uid = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.uid;
        var promise = new Promise(function (resolve) {
            _this.fireemotion.child(uid).once("value").then(function (snapshot) {
                if (snapshot.val()) {
                    _this.length = snapshot.val().length;
                    resolve(snapshot.val().length);
                }
                else {
                    _this.length = 0;
                    resolve(0);
                }
            });
        });
        return promise;
    };
    EmotionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], EmotionProvider);
    return EmotionProvider;
}());

//# sourceMappingURL=emotion.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the PostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PostProvider = (function () {
    function PostProvider() {
        this.firepost = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('/post');
        this.firelike = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('/like');
        this.namecom = 'post';
    }
    PostProvider.prototype.uploadpost = function (title, imgsrc, body, writerimg, writername, writermajor) {
        var _this = this;
        var promise = new Promise(function (resolve) {
            var newPostRef = _this.firepost.push();
            var postId = newPostRef.key;
            newPostRef.set({
                postid: postId,
                title: title,
                imgsrc: imgsrc,
                body: body,
                writerimg: writerimg,
                writername: writername,
                writermajor: writermajor,
                timestamp: __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database.ServerValue.TIMESTAMP,
                comment: 0,
                like: 0
            }).then(function () {
                resolve(true);
            });
        });
        return promise;
    };
    PostProvider.prototype.getallposts = function () {
        var _this = this;
        var uid = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.uid;
        var promise = new Promise(function (resolve) {
            _this.firepost.orderByChild('timestamp').once("value").then(function (snapshot) {
                _this.firelike.child(uid + "/" + _this.namecom).once("value").then(function (likesnapshot) {
                    var likepostid = [];
                    likesnapshot.forEach(function (childSnapshot) {
                        likepostid.push(childSnapshot.key);
                    });
                    var posts = [];
                    snapshot.forEach(function (childSnapshot) {
                        var post = childSnapshot.val();
                        if (likepostid.indexOf(post.postid) != -1) {
                            post.likesrc = "assets/like-full.png";
                        }
                        else {
                            post.likesrc = "assets/like.png";
                        }
                        posts.push(post);
                    });
                    posts.reverse();
                    resolve(posts);
                });
            });
        });
        return promise;
    };
    PostProvider.prototype.setLike = function (post) {
        var _this = this;
        var uid = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.uid;
        var promise = new Promise(function (resolve) {
            _this.firelike.child(uid + "/" + _this.namecom + "/" + post.postid).set({
                timestamp: __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database.ServerValue.TIMESTAMP
            }).then(function () {
                _this.firepost.child("" + post.postid).update({
                    like: post.like + 1
                }).then(function () {
                    resolve(true);
                });
            });
        });
        return promise;
    };
    PostProvider.prototype.deleteLike = function (post) {
        var _this = this;
        var uid = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.uid;
        var promise = new Promise(function (resolve) {
            _this.firelike.child(uid + "/" + _this.namecom + "/" + post.postid).remove().then(function () {
                _this.firepost.child("" + post.postid).update({
                    like: post.like - 1
                }).then(function () {
                    resolve(true);
                });
            });
        });
        return promise;
    };
    PostProvider.prototype.addComment = function (post) {
        var _this = this;
        var promise = new Promise(function (resolve) {
            _this.firepost.child("" + post.postid).once("value").then(function (snapshot) {
                _this.firepost.child("" + post.postid).update({
                    comment: snapshot.val().comment + 1
                }).then(function () {
                    resolve(true);
                });
            });
        });
        return promise;
    };
    PostProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], PostProvider);
    return PostProvider;
}());

//# sourceMappingURL=post.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(434);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_user_user__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_chat_chat__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_emotion_emotion__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_community_community__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_communitycomment_communitycomment__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_post_post__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_in_app_browser__ = __webpack_require__(621);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















// import { IamportService } from 'iamport-ionic-kcp';

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/character/character.module#CharacterPageModule', name: 'CharacterPage', segment: 'character', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/community/community.module#CommunityPageModule', name: 'CommunityPage', segment: 'community', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/communitycomment/communitycomment.module#CommunitycommentPageModule', name: 'CommunitycommentPage', segment: 'communitycomment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/communitygroup/communitygroup.module#CommunitygroupPageModule', name: 'CommunitygroupPage', segment: 'communitygroup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/communitywrite/communitywrite.module#CommunitywritePageModule', name: 'CommunitywritePage', segment: 'communitywrite', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/diary/diary.module#DiaryPageModule', name: 'DiaryPage', segment: 'diary', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/emotionbasket/emotionbasket.module#EmotionbasketPageModule', name: 'EmotionbasketPage', segment: 'emotionbasket', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/emotionthrow/emotionthrow.module#EmotionthrowPageModule', name: 'EmotionthrowPage', segment: 'emotionthrow', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gogohome/gogohome.module#GogohomePageModule', name: 'GogohomePage', segment: 'gogohome', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gogosignup/gogosignup.module#GogosignupPageModule', name: 'GogosignupPage', segment: 'gogosignup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gogosupporter/gogosupporter.module#GogosupporterPageModule', name: 'GogosupporterPage', segment: 'gogosupporter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intro/intro.module#IntroPageModule', name: 'IntroPage', segment: 'intro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/meditate/meditate.module#MeditatePageModule', name: 'MeditatePage', segment: 'meditate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mychats/mychats.module#MychatsPageModule', name: 'MychatsPage', segment: 'mychats', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mydepository/mydepository.module#MydepositoryPageModule', name: 'MydepositoryPage', segment: 'mydepository', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mypage/mypage.module#MypagePageModule', name: 'MypagePage', segment: 'mypage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mysetting/mysetting.module#MysettingPageModule', name: 'MysettingPage', segment: 'mysetting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/passwordreset/passwordreset.module#PasswordresetPageModule', name: 'PasswordresetPage', segment: 'passwordreset', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment/payment.module#PaymentPageModule', name: 'PaymentPage', segment: 'payment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/post/post.module#PostPageModule', name: 'PostPage', segment: 'post', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/postdetail/postdetail.module#PostdetailPageModule', name: 'PostdetailPage', segment: 'postdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/requestchat/requestchat.module#RequestchatPageModule', name: 'RequestchatPage', segment: 'requestchat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/requestedchat/requestedchat.module#RequestedchatPageModule', name: 'RequestedchatPage', segment: 'requestedchat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/splash/splash.module#SplashPageModule', name: 'SplashPage', segment: 'splash', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/supporter/supporter.module#SupporterPageModule', name: 'SupporterPage', segment: 'supporter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/supporterchat/supporterchat.module#SupporterchatPageModule', name: 'SupporterchatPage', segment: 'supporterchat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/test/test.module#TestPageModule', name: 'TestPage', segment: 'test', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/testanxiety/testanxiety.module#TestanxietyPageModule', name: 'TestanxietyPage', segment: 'testanxiety', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/testdepression/testdepression.module#TestdepressionPageModule', name: 'TestdepressionPage', segment: 'testdepression', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__["a" /* FilePath */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_chat_chat__["a" /* ChatProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_emotion_emotion__["a" /* EmotionProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_community_community__["a" /* CommunityProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_communitycomment_communitycomment__["a" /* CommunitycommentProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_post_post__["a" /* PostProvider */],
                // IamportService,
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 246,
	"./af.js": 246,
	"./ar": 247,
	"./ar-dz": 248,
	"./ar-dz.js": 248,
	"./ar-kw": 249,
	"./ar-kw.js": 249,
	"./ar-ly": 250,
	"./ar-ly.js": 250,
	"./ar-ma": 251,
	"./ar-ma.js": 251,
	"./ar-sa": 252,
	"./ar-sa.js": 252,
	"./ar-tn": 253,
	"./ar-tn.js": 253,
	"./ar.js": 247,
	"./az": 254,
	"./az.js": 254,
	"./be": 255,
	"./be.js": 255,
	"./bg": 256,
	"./bg.js": 256,
	"./bn": 257,
	"./bn.js": 257,
	"./bo": 258,
	"./bo.js": 258,
	"./br": 259,
	"./br.js": 259,
	"./bs": 260,
	"./bs.js": 260,
	"./ca": 261,
	"./ca.js": 261,
	"./cs": 262,
	"./cs.js": 262,
	"./cv": 263,
	"./cv.js": 263,
	"./cy": 264,
	"./cy.js": 264,
	"./da": 265,
	"./da.js": 265,
	"./de": 266,
	"./de-at": 267,
	"./de-at.js": 267,
	"./de-ch": 268,
	"./de-ch.js": 268,
	"./de.js": 266,
	"./dv": 269,
	"./dv.js": 269,
	"./el": 270,
	"./el.js": 270,
	"./en-au": 271,
	"./en-au.js": 271,
	"./en-ca": 272,
	"./en-ca.js": 272,
	"./en-gb": 273,
	"./en-gb.js": 273,
	"./en-ie": 274,
	"./en-ie.js": 274,
	"./en-nz": 275,
	"./en-nz.js": 275,
	"./eo": 276,
	"./eo.js": 276,
	"./es": 277,
	"./es-do": 278,
	"./es-do.js": 278,
	"./es.js": 277,
	"./et": 279,
	"./et.js": 279,
	"./eu": 280,
	"./eu.js": 280,
	"./fa": 281,
	"./fa.js": 281,
	"./fi": 282,
	"./fi.js": 282,
	"./fo": 283,
	"./fo.js": 283,
	"./fr": 284,
	"./fr-ca": 285,
	"./fr-ca.js": 285,
	"./fr-ch": 286,
	"./fr-ch.js": 286,
	"./fr.js": 284,
	"./fy": 287,
	"./fy.js": 287,
	"./gd": 288,
	"./gd.js": 288,
	"./gl": 289,
	"./gl.js": 289,
	"./gom-latn": 290,
	"./gom-latn.js": 290,
	"./he": 291,
	"./he.js": 291,
	"./hi": 292,
	"./hi.js": 292,
	"./hr": 293,
	"./hr.js": 293,
	"./hu": 294,
	"./hu.js": 294,
	"./hy-am": 295,
	"./hy-am.js": 295,
	"./id": 296,
	"./id.js": 296,
	"./is": 297,
	"./is.js": 297,
	"./it": 298,
	"./it.js": 298,
	"./ja": 299,
	"./ja.js": 299,
	"./jv": 300,
	"./jv.js": 300,
	"./ka": 301,
	"./ka.js": 301,
	"./kk": 302,
	"./kk.js": 302,
	"./km": 303,
	"./km.js": 303,
	"./kn": 304,
	"./kn.js": 304,
	"./ko": 305,
	"./ko.js": 305,
	"./ky": 306,
	"./ky.js": 306,
	"./lb": 307,
	"./lb.js": 307,
	"./lo": 308,
	"./lo.js": 308,
	"./lt": 309,
	"./lt.js": 309,
	"./lv": 310,
	"./lv.js": 310,
	"./me": 311,
	"./me.js": 311,
	"./mi": 312,
	"./mi.js": 312,
	"./mk": 313,
	"./mk.js": 313,
	"./ml": 314,
	"./ml.js": 314,
	"./mr": 315,
	"./mr.js": 315,
	"./ms": 316,
	"./ms-my": 317,
	"./ms-my.js": 317,
	"./ms.js": 316,
	"./my": 318,
	"./my.js": 318,
	"./nb": 319,
	"./nb.js": 319,
	"./ne": 320,
	"./ne.js": 320,
	"./nl": 321,
	"./nl-be": 322,
	"./nl-be.js": 322,
	"./nl.js": 321,
	"./nn": 323,
	"./nn.js": 323,
	"./pa-in": 324,
	"./pa-in.js": 324,
	"./pl": 325,
	"./pl.js": 325,
	"./pt": 326,
	"./pt-br": 327,
	"./pt-br.js": 327,
	"./pt.js": 326,
	"./ro": 328,
	"./ro.js": 328,
	"./ru": 329,
	"./ru.js": 329,
	"./sd": 330,
	"./sd.js": 330,
	"./se": 331,
	"./se.js": 331,
	"./si": 332,
	"./si.js": 332,
	"./sk": 333,
	"./sk.js": 333,
	"./sl": 334,
	"./sl.js": 334,
	"./sq": 335,
	"./sq.js": 335,
	"./sr": 336,
	"./sr-cyrl": 337,
	"./sr-cyrl.js": 337,
	"./sr.js": 336,
	"./ss": 338,
	"./ss.js": 338,
	"./sv": 339,
	"./sv.js": 339,
	"./sw": 340,
	"./sw.js": 340,
	"./ta": 341,
	"./ta.js": 341,
	"./te": 342,
	"./te.js": 342,
	"./tet": 343,
	"./tet.js": 343,
	"./th": 344,
	"./th.js": 344,
	"./tl-ph": 345,
	"./tl-ph.js": 345,
	"./tlh": 346,
	"./tlh.js": 346,
	"./tr": 347,
	"./tr.js": 347,
	"./tzl": 348,
	"./tzl.js": 348,
	"./tzm": 349,
	"./tzm-latn": 350,
	"./tzm-latn.js": 350,
	"./tzm.js": 349,
	"./uk": 351,
	"./uk.js": 351,
	"./ur": 352,
	"./ur.js": 352,
	"./uz": 353,
	"./uz-latn": 354,
	"./uz-latn.js": 354,
	"./uz.js": 353,
	"./vi": 355,
	"./vi.js": 355,
	"./x-pseudo": 356,
	"./x-pseudo.js": 356,
	"./yo": 357,
	"./yo.js": 357,
	"./zh-cn": 358,
	"./zh-cn.js": 358,
	"./zh-hk": 359,
	"./zh-hk.js": 359,
	"./zh-tw": 360,
	"./zh-tw.js": 360
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 578;

/***/ }),

/***/ 620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { Push, PushObject, PushOptions } from '@ionic-native/push';


// firebase config
var firebaseConfig = {
    apiKey: "AIzaSyBz5qFakcahaCIdkR1XbDemZEJc37-l7vs",
    authDomain: "days-fd14f.firebaseapp.com",
    databaseURL: "https://days-fd14f.firebaseio.com",
    projectId: "days-fd14f",
    storageBucket: "days-fd14f.appspot.com",
    messagingSenderId: "209011208541"
};
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, 
        // public push: Push, 
        alertCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.alertCtrl = alertCtrl;
        // set entry page of app
        this.rootPage = 'SplashPage';
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.initializeApp(firebaseConfig);
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            // this.initPushNotification();
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/chaerinlim/Desktop/28days-master/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/chaerinlim/Desktop/28days-master/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[410]);
//# sourceMappingURL=main.js.map