(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,n,t){e.exports=t(17)},,,,,,function(e,n,t){},function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(1),o=t.n(i),c=(t(14),t(3)),l=t(4),s=t(6),u=t(5),d=t(7),p=(t(15),t(16),function(e){function n(){var e;return Object(c.a)(this,n),(e=Object(s.a)(this,Object(u.a)(n).call(this))).successCallback=function(e){alert("successCallback(): "+JSON.stringify(e)),e.withFingerprint?(alert("Successfully encrypted credentials."),alert("Encrypted credentials: "+e.token)):e.withBackup&&alert("Authenticated with backup password")},e.errorCallback=function(e){e===window.FingerprintAuth.ERRORS.FINGERPRINT_CANCELLED?alert("FingerprintAuth Dialog Cancelled!"):alert("FingerprintAuth Error: "+e)},e.state={name:"React"},e}return Object(d.a)(n,e),Object(l.a)(n,[{key:"componentWillMount",value:function(){var e=this;if(window.FingerprintAuth){window.FingerprintAuth.isAvailable(function(n){alert(JSON.stringify(n)),n.isAvailable&&window.FingerprintAuth.encrypt({clientId:"myAppName",username:"currentUser",password:"currentUserPassword"},e.successCallback,e.errorCallback)},function(e){alert("isAvailableError(): "+e)})}}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("p",null,"React + cordova"),a.a.createElement("p",null,"Finger Print Login"))}}]),n}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=function(){o.a.render(a.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})};window.cordova?document.addEventListener("deviceready",w,!1):w()}],[[8,1,2]]]);
//# sourceMappingURL=main.04cd655e.chunk.js.map