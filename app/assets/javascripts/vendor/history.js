!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.History=t():e.History=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var a=n(17),o=r(a);t.createHistory=o["default"];var i=n(18),u=r(i);t.createHashHistory=u["default"];var s=n(19),f=r(s);t.createMemoryHistory=f["default"];var c=n(12),l=r(c);t.createLocation=l["default"];var d=n(22),p=r(d);t.useBasename=p["default"];var h=n(13),g=r(h);t.useBeforeUnload=g["default"];var y=n(14),v=r(y);t.useQueries=v["default"];var m=n(1),b=r(m);t.Actions=b["default"];var O=n(20),w=r(O);t.enableBeforeUnload=w["default"];var x=n(21),P=r(x);t.enableQueries=P["default"]},function(e,t){"use strict";t.__esModule=!0;var n="PUSH";t.PUSH=n;var r="REPLACE";t.REPLACE=r;var a="POP";t.POP=a,t["default"]={PUSH:n,REPLACE:r,POP:a}},function(e,t,n){"use strict";var r=function(){};e.exports=r},function(e,t){"use strict";t.__esModule=!0;var n=!("undefined"==typeof window||!window.document||!window.document.createElement);t.canUseDOM=n},function(e,t){"use strict";function n(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)}function r(e,t,n){e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent("on"+t,n)}function a(){return window.location.href.split("#")[1]||""}function o(e){window.location.replace(window.location.pathname+window.location.search+"#"+e)}function i(){return window.location.pathname+window.location.search+window.location.hash}function u(e){e&&window.history.go(e)}function s(e,t){t(window.confirm(e))}function f(){var e=navigator.userAgent;return-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone")?window.history&&"pushState"in window.history:!1}function c(){var e=navigator.userAgent;return-1===e.indexOf("Firefox")}t.__esModule=!0,t.addEventListener=n,t.removeEventListener=r,t.getHashPath=a,t.replaceHashPath=o,t.getWindowPath=i,t.go=u,t.getUserConfirmation=s,t.supportsHistory=f,t.supportsGoWithoutReloadUsingHash=c},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){return function(){return i["default"](!1,"[history] "+t),e.apply(this,arguments)}}t.__esModule=!0;var o=n(2),i=r(o);t["default"]=a,e.exports=t["default"]},function(e,t,n){"use strict";var r=function(e,t,n,r,a,o,i,u){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[n,r,a,o,i,u],c=0;s=new Error("Invariant Violation: "+t.replace(/%s/g,function(){return f[c++]}))}throw s.framesToPop=1,s}};e.exports=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e){var t=e.match(/^https?:\/\/[^\/]*/);return null==t?e:(u["default"](!1,'A path must be pathname + search + hash only, not a fully qualified URL like "%s"',e),e.substring(t[0].length))}function o(e){var t=a(e),n="",r="",o=t.indexOf("#");-1!==o&&(r=t.substring(o),t=t.substring(0,o));var i=t.indexOf("?");return-1!==i&&(n=t.substring(i),t=t.substring(0,i)),""===t&&(t="/"),{pathname:t,search:n,hash:r}}t.__esModule=!0;var i=n(2),u=r(i);t["default"]=o,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t,n){var r=e(t,n);e.length<2?n(r):i["default"](void 0===r,'You should not "return" in a transition hook with a callback argument; call the callback instead')}t.__esModule=!0;var o=n(2),i=r(o);t["default"]=a,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e){return f+e}function o(e,t){try{window.sessionStorage.setItem(a(e),JSON.stringify(t))}catch(n){if(n.name===c||0===window.sessionStorage.length)return void s["default"](!1,"[history] Unable to save state; sessionStorage is not available in Safari private mode");throw n}}function i(e){var t=window.sessionStorage.getItem(a(e));if(t)try{return JSON.parse(t)}catch(n){}return null}t.__esModule=!0,t.saveState=o,t.readState=i;var u=n(2),s=r(u),f="@@History/",c="QuotaExceededError"},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e){function t(e){return u["default"](s.canUseDOM,"DOM history needs a DOM"),n.listen(e)}var n=l["default"](o({getUserConfirmation:f.getUserConfirmation},e,{go:f.go}));return o({},n,{listen:t})}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(6),u=r(i),s=n(3),f=n(4),c=n(11),l=r(c);t["default"]=a,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e){return Math.random().toString(36).substr(2,e)}function o(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.key===t.key&&f["default"](e.state,t.state)}function i(){function e(e){return U.push(e),function(){U=U.filter(function(t){return t!==e})}}function t(){return R&&R.action===l.POP?B.indexOf(R.key):D?B.indexOf(D.key):-1}function n(e){var n=t();D=e,D.action===l.PUSH?B=[].concat(B.slice(0,n+1),[D.key]):D.action===l.REPLACE&&(B[n]=D.key),C.forEach(function(e){e(D)})}function r(e){if(C.push(e),D)e(D);else{var t=S();B=[t.key],n(t)}return function(){C=C.filter(function(t){return t!==e})}}function i(e,t){c.loopAsync(U.length,function(t,n,r){g["default"](U[t],e,function(e){null!=e?r(e):n()})},function(e){T&&"string"==typeof e?T(e,function(e){t(e!==!1)}):t(e!==!1)})}function s(e){D&&o(D,e)||(R=e,i(e,function(t){if(R===e)if(t)M(e)!==!1&&n(e);else if(D&&e.action===l.POP){var r=B.indexOf(D.key),a=B.indexOf(e.key);-1!==r&&-1!==a&&A(r-a)}}))}function f(e,t){s(x(t,e,l.PUSH,b()))}function d(e,t){s(x(t,e,l.REPLACE,b()))}function h(){A(-1)}function y(){A(1)}function b(){return a(E)}function O(e){if(null==e||"string"==typeof e)return e;var t=e.pathname,n=e.search,r=e.hash,a=t;return n&&(a+=n),r&&(a+=r),a}function w(e){return O(e)}function x(e,t,n){var r=arguments.length<=3||void 0===arguments[3]?b():arguments[3];return p["default"](e,t,n,r)}function P(e){D?(j(D,e),n(D)):j(S(),e)}function j(e,t){e.state=u({},e.state,t),L(e.key,e.state)}function _(e){-1===U.indexOf(e)&&U.push(e)}function H(e){U=U.filter(function(t){return t!==e})}var k=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],S=k.getCurrentLocation,M=k.finishTransition,L=k.saveState,A=k.go,E=k.keyLength,T=k.getUserConfirmation;"number"!=typeof E&&(E=m);var U=[],B=[],C=[],D=void 0,R=void 0;return{listenBefore:e,listen:r,transitionTo:s,pushState:f,replaceState:d,go:A,goBack:h,goForward:y,createKey:b,createPath:O,createHref:w,createLocation:x,setState:v["default"](P,"setState is deprecated; use location.key to save state instead"),registerTransitionHook:v["default"](_,"registerTransitionHook is deprecated; use listenBefore instead"),unregisterTransitionHook:v["default"](H,"unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead")}}t.__esModule=!0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=n(23),f=r(s),c=n(16),l=n(1),d=n(12),p=r(d),h=n(8),g=r(h),y=n(5),v=r(y),m=6;t["default"]=i,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(){var e=arguments.length<=0||void 0===arguments[0]?"/":arguments[0],t=arguments.length<=1||void 0===arguments[1]?null:arguments[1],n=arguments.length<=2||void 0===arguments[2]?o.POP:arguments[2],r=arguments.length<=3||void 0===arguments[3]?null:arguments[3];"string"==typeof e&&(e=u["default"](e));var a=e.pathname||"/",i=e.search||"",s=e.hash||"";return{pathname:a,search:i,hash:s,state:t,action:n,key:r}}t.__esModule=!0;var o=n(1),i=n(7),u=r(i);t["default"]=a,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e){function t(t){var n=e();return"string"==typeof n?((t||window.event).returnValue=n,n):void 0}return c.addEventListener(window,"beforeunload",t),function(){c.removeEventListener(window,"beforeunload",t)}}function o(e){return function(t){function n(){for(var e=void 0,t=0,n=p.length;null==e&&n>t;++t)e=p[t].call();return e}function r(e){return p.push(e),1===p.length&&(f.canUseDOM?l=a(n):s["default"](!1,"listenBeforeUnload only works in DOM environments")),function(){p=p.filter(function(t){return t!==e}),0===p.length&&l&&(l(),l=null)}}function o(e){f.canUseDOM&&-1===p.indexOf(e)&&(p.push(e),1===p.length&&(l=a(n)))}function u(e){p.length>0&&(p=p.filter(function(t){return t!==e}),0===p.length&&l())}var c=e(t),l=void 0,p=[];return i({},c,{listenBeforeUnload:r,registerBeforeUnloadHook:d["default"](o,"registerBeforeUnloadHook is deprecated; use listenBeforeUnload instead"),unregisterBeforeUnloadHook:d["default"](u,"unregisterBeforeUnloadHook is deprecated; use the callback returned from listenBeforeUnload instead")})}}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(2),s=r(u),f=n(3),c=n(4),l=n(5),d=r(l);t["default"]=o,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e){return c["default"].stringify(e,{arrayFormat:"brackets"})}function i(e){return c["default"].parse(e)}function u(e){return function(){function t(e){return null==e.query&&(e.query=m(e.search.substring(1))),e}function n(e,t){var n=void 0;if(!t||""===(n=v(t)))return e;"string"==typeof e&&(e=h["default"](e));var r=e.search+(e.search?"&":"?")+n;return s({},e,{search:r})}function r(e){return O.listenBefore(function(n,r){d["default"](e,t(n),r)})}function u(e){return O.listen(function(n){e(t(n))})}function f(e,t,r){return O.pushState(e,n(t,r))}function c(e,t,r){return O.replaceState(e,n(t,r))}function l(e,t){return O.createPath(n(e,t))}function p(e,t){return O.createHref(n(e,t))}function g(){return t(O.createLocation.apply(O,arguments))}var y=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],v=y.stringifyQuery,m=y.parseQueryString,b=a(y,["stringifyQuery","parseQueryString"]),O=e(b);return"function"!=typeof v&&(v=o),"function"!=typeof m&&(m=i),s({},O,{listenBefore:r,listen:u,pushState:f,replaceState:c,createPath:l,createHref:p,createLocation:g})}}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=n(26),c=r(f),l=n(8),d=r(l),p=n(7),h=r(p);t["default"]=u,e.exports=t["default"]},function(e,t){var n={};n.hexTable=new Array(256);for(var r=0;256>r;++r)n.hexTable[r]="%"+((16>r?"0":"")+r.toString(16)).toUpperCase();t.arrayToObject=function(e,t){for(var n=t.plainObjects?Object.create(null):{},r=0,a=e.length;a>r;++r)"undefined"!=typeof e[r]&&(n[r]=e[r]);return n},t.merge=function(e,n,r){if(!n)return e;if("object"!=typeof n)return Array.isArray(e)?e.push(n):"object"==typeof e?e[n]=!0:e=[e,n],e;if("object"!=typeof e)return e=[e].concat(n);Array.isArray(e)&&!Array.isArray(n)&&(e=t.arrayToObject(e,r));for(var a=Object.keys(n),o=0,i=a.length;i>o;++o){var u=a[o],s=n[u];Object.prototype.hasOwnProperty.call(e,u)?e[u]=t.merge(e[u],s,r):e[u]=s}return e},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},t.encode=function(e){if(0===e.length)return e;"string"!=typeof e&&(e=""+e);for(var t="",r=0,a=e.length;a>r;++r){var o=e.charCodeAt(r);45===o||46===o||95===o||126===o||o>=48&&57>=o||o>=65&&90>=o||o>=97&&122>=o?t+=e[r]:128>o?t+=n.hexTable[o]:2048>o?t+=n.hexTable[192|o>>6]+n.hexTable[128|63&o]:55296>o||o>=57344?t+=n.hexTable[224|o>>12]+n.hexTable[128|o>>6&63]+n.hexTable[128|63&o]:(++r,o=65536+((1023&o)<<10|1023&e.charCodeAt(r)),t+=n.hexTable[240|o>>18]+n.hexTable[128|o>>12&63]+n.hexTable[128|o>>6&63]+n.hexTable[128|63&o])}return t},t.compact=function(e,n){if("object"!=typeof e||null===e)return e;n=n||[];var r=n.indexOf(e);if(-1!==r)return n[r];if(n.push(e),Array.isArray(e)){for(var a=[],o=0,i=e.length;i>o;++o)"undefined"!=typeof e[o]&&a.push(e[o]);return a}var u=Object.keys(e);for(o=0,i=u.length;i>o;++o){var s=u[o];e[s]=t.compact(e[s],n)}return e},t.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null===e||"undefined"==typeof e?!1:!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},function(e,t){"use strict";function n(e,t,n){function r(){i=!0,n.apply(this,arguments)}function a(){i||(e>o?t.call(this,o++,a,r):r.apply(this,arguments))}var o=0,i=!1;a()}t.__esModule=!0,t.loopAsync=n},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(){function e(e){e=e||window.history.state||{};var t=c.getWindowPath(),n=e,r=n.key,a=void 0;return r?a=l.readState(r):(a=null,r=m.createKey(),y&&window.history.replaceState(o({},e,{key:r}),null,t)),m.createLocation(t,a,void 0,r)}function t(t){function n(t){void 0!==t.state&&r(e(t.state))}var r=t.transitionTo;return c.addEventListener(window,"popstate",n),function(){c.removeEventListener(window,"popstate",n)}}function n(e){var t=e.basename,n=e.pathname,r=e.search,a=e.hash,o=e.state,i=e.action,u=e.key;if(i!==s.POP){l.saveState(u,o);var f=(t||"")+n+r+a,c={key:u};if(i===s.PUSH){if(v)return window.location.href=f,!1;window.history.pushState(c,null,f)}else{if(v)return window.location.replace(f),!1;window.history.replaceState(c,null,f)}}}function r(e){1===++b&&(O=t(m));var n=m.listenBefore(e);return function(){n(),0===--b&&O()}}function a(e){1===++b&&(O=t(m));var n=m.listen(e);return function(){n(),0===--b&&O()}}function i(e){1===++b&&(O=t(m)),m.registerTransitionHook(e)}function d(e){m.unregisterTransitionHook(e),0===--b&&O()}var h=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];u["default"](f.canUseDOM,"Browser history needs a DOM");var g=h.forceRefresh,y=c.supportsHistory(),v=!y||g,m=p["default"](o({},h,{getCurrentLocation:e,finishTransition:n,saveState:l.saveState})),b=0,O=void 0;return o({},m,{listenBefore:r,listen:a,registerTransitionHook:i,unregisterTransitionHook:d})}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(6),u=r(i),s=n(1),f=n(3),c=n(4),l=n(9),d=n(10),p=r(d);t["default"]=a,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e){return"string"==typeof e&&"/"===e.charAt(0)}function o(){var e=v.getHashPath();return a(e)?!0:(v.replaceHashPath("/"+e),!1)}function i(e,t,n){return e+(-1===e.indexOf("?")?"?":"&")+(t+"="+n)}function u(e,t){return e.replace(new RegExp("[?&]?"+t+"=[a-zA-Z0-9]+"),"")}function s(e,t){var n=e.match(new RegExp("\\?.*?\\b"+t+"=(.+?)\\b"));return n&&n[1]}function f(){function e(){var e=v.getHashPath(),t=void 0,n=void 0;return _?(t=s(e,_),e=u(e,_),t?n=m.readState(t):(n=null,t=H.createKey(),v.replaceHashPath(i(e,_,t)))):t=n=null,H.createLocation(e,n,void 0,t)}function t(t){function n(){o()&&r(e())}var r=t.transitionTo;return o(),v.addEventListener(window,"hashchange",n),function(){v.removeEventListener(window,"hashchange",n)}}function n(e){var t=e.basename,n=e.pathname,r=e.search,a=e.state,o=e.action,u=e.key;if(o!==g.POP){var s=(t||"")+n+r;_&&(s=i(s,_,u)),s===v.getHashPath()?d["default"](!1,"You cannot %s the same path using hash history",o):(_?m.saveState(u,a):e.key=e.state=null,o===g.PUSH?window.location.hash=s:v.replaceHashPath(s))}}function r(e){1===++k&&(S=t(H));var n=H.listenBefore(e);return function(){n(),0===--k&&S()}}function a(e){1===++k&&(S=t(H));var n=H.listen(e);return function(){n(),0===--k&&S()}}function f(e,t){d["default"](_||null==e,"You cannot use state without a queryKey it will be dropped"),H.pushState(e,t)}function l(e,t){d["default"](_||null==e,"You cannot use state without a queryKey it will be dropped"),H.replaceState(e,t)}function p(e){d["default"](M,"Hash history go(n) causes a full page reload in this browser"),H.go(e)}function b(e){return"#"+H.createHref(e)}function x(e){1===++k&&(S=t(H)),H.registerTransitionHook(e)}function P(e){H.unregisterTransitionHook(e),0===--k&&S()}var j=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];h["default"](y.canUseDOM,"Hash history needs a DOM");var _=j.queryKey;(void 0===_||_)&&(_="string"==typeof _?_:w);var H=O["default"](c({},j,{getCurrentLocation:e,finishTransition:n,saveState:m.saveState})),k=0,S=void 0,M=v.supportsGoWithoutReloadUsingHash();return c({},H,{listenBefore:r,listen:a,pushState:f,replaceState:l,go:p,createHref:b,registerTransitionHook:x,unregisterTransitionHook:P})}t.__esModule=!0;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=n(2),d=r(l),p=n(6),h=r(p),g=n(1),y=n(3),v=n(4),m=n(9),b=n(10),O=r(b),w="_k";t["default"]=f,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e){return e.filter(function(e){return e.state}).reduce(function(e,t){return e[t.key]=t.state,e},{})}function o(){function e(e,t){y[e]=t}function t(e){return y[e]}function n(){var e=h[g],n=e.key,r=e.basename,a=e.pathname,o=e.search,i=(r||"")+a+(o||""),u=void 0;return n?u=t(n):(u=null,n=d.createKey(),e.key=n),d.createLocation(i,u,void 0,n)}function r(e){var t=g+e;return t>=0&&t<h.length}function o(e){if(e){s["default"](r(e),"Cannot go(%s) there is not enough history",e),g+=e;var t=n();d.transitionTo(i({},t,{action:f.POP}))}}function u(t){switch(t.action){case f.PUSH:g+=1,g<h.length&&h.splice(g),h.push(t),e(t.key,t.state);break;case f.REPLACE:h[g]=t,e(t.key,t.state)}}var c=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];Array.isArray(c)?c={entries:c}:"string"==typeof c&&(c={entries:[c]});var d=l["default"](i({},c,{getCurrentLocation:n,finishTransition:u,saveState:e,go:o})),p=c,h=p.entries,g=p.current;"string"==typeof h?h=[h]:Array.isArray(h)||(h=["/"]),h=h.map(function(e){var t=d.createKey();return"string"==typeof e?{pathname:e,key:t}:"object"==typeof e&&e?i({},e,{key:t}):void s["default"](!1,"Unable to create history entry from %s",e)}),null==g?g=h.length-1:s["default"](g>=0&&g<h.length,"Current index must be >= 0 and < %s, was %s",h.length,g);var y=a(h);return d}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(6),s=r(u),f=n(1),c=n(11),l=r(c);t["default"]=o,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var a=n(5),o=r(a),i=n(13),u=r(i);t["default"]=o["default"](u["default"],"enableBeforeUnload is deprecated, use useBeforeUnload instead"),e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var a=n(5),o=r(a),i=n(14),u=r(i);t["default"]=o["default"](u["default"],"enableQueries is deprecated, use useQueries instead"),e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e){return function(){function t(e){return y&&null==e.basename&&(0===e.pathname.indexOf(y)?(e.pathname=e.pathname.substring(y.length),e.basename=y,""===e.pathname&&(e.pathname="/")):e.basename=""),e}function n(e){if(!y)return e;"string"==typeof e&&(e=l["default"](e));var t=e.pathname,n="/"===y.slice(-1)?y:y+"/",r="/"===t.charAt(0)?t.slice(1):t,a=n+r;return i({},e,{pathname:a})}function r(e){return m.listenBefore(function(n,r){f["default"](e,t(n),r)})}function o(e){return m.listen(function(n){e(t(n))})}function s(e,t){m.pushState(e,n(t))}function c(e,t){m.replaceState(e,n(t))}function d(e){return m.createPath(n(e))}function p(e){return m.createHref(n(e))}function h(){return t(m.createLocation.apply(m,arguments))}var g=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],y=g.basename,v=a(g,["basename"]),m=e(v);if(null==y&&u.canUseDOM){var b=document.getElementsByTagName("base")[0];b&&(y=b.href)}return i({},m,{listenBefore:r,listen:o,pushState:s,replaceState:c,createPath:d,createHref:p,createLocation:h})}}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(3),s=n(8),f=r(s),c=n(7),l=r(c);t["default"]=o,e.exports=t["default"]},function(e,t,n){function r(e){return null===e||void 0===e}function a(e){return e&&"object"==typeof e&&"number"==typeof e.length?"function"!=typeof e.copy||"function"!=typeof e.slice?!1:e.length>0&&"number"!=typeof e[0]?!1:!0:!1}function o(e,t,n){var o,c;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(s(e))return s(t)?(e=i.call(e),t=i.call(t),f(e,t,n)):!1;if(a(e)){if(!a(t))return!1;if(e.length!==t.length)return!1;for(o=0;o<e.length;o++)if(e[o]!==t[o])return!1;return!0}try{var l=u(e),d=u(t)}catch(p){return!1}if(l.length!=d.length)return!1;for(l.sort(),d.sort(),o=l.length-1;o>=0;o--)if(l[o]!=d[o])return!1;for(o=l.length-1;o>=0;o--)if(c=l[o],!f(e[c],t[c],n))return!1;return typeof e==typeof t}var i=Array.prototype.slice,u=n(25),s=n(24),f=e.exports=function(e,t,n){return n||(n={}),e===t?!0:e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:o(e,t,n)}},function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var a="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=a?n:r,t.supported=n,t.unsupported=r},function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},function(e,t,n){var r=n(28),a=n(27);e.exports={stringify:r,parse:a}},function(e,t,n){var r=n(15),a={delimiter:"&",depth:5,arrayLimit:20,parameterLimit:1e3,strictNullHandling:!1,plainObjects:!1,allowPrototypes:!1};a.parseValues=function(e,t){for(var n={},a=e.split(t.delimiter,t.parameterLimit===1/0?void 0:t.parameterLimit),o=0,i=a.length;i>o;++o){var u=a[o],s=-1===u.indexOf("]=")?u.indexOf("="):u.indexOf("]=")+1;if(-1===s)n[r.decode(u)]="",t.strictNullHandling&&(n[r.decode(u)]=null);else{var f=r.decode(u.slice(0,s)),c=r.decode(u.slice(s+1));Object.prototype.hasOwnProperty.call(n,f)?n[f]=[].concat(n[f]).concat(c):n[f]=c}}return n},a.parseObject=function(e,t,n){if(!e.length)return t;var r,o=e.shift();if("[]"===o)r=[],r=r.concat(a.parseObject(e,t,n));else{r=n.plainObjects?Object.create(null):{};var i="["===o[0]&&"]"===o[o.length-1]?o.slice(1,o.length-1):o,u=parseInt(i,10),s=""+u;!isNaN(u)&&o!==i&&s===i&&u>=0&&n.parseArrays&&u<=n.arrayLimit?(r=[],r[u]=a.parseObject(e,t,n)):r[i]=a.parseObject(e,t,n)}return r},a.parseKeys=function(e,t,n){if(e){n.allowDots&&(e=e.replace(/\.([^\.\[]+)/g,"[$1]"));var r=/^([^\[\]]*)/,o=/(\[[^\[\]]*\])/g,i=r.exec(e),u=[];if(i[1]){if(!n.plainObjects&&Object.prototype.hasOwnProperty(i[1])&&!n.allowPrototypes)return;u.push(i[1])}for(var s=0;null!==(i=o.exec(e))&&s<n.depth;)++s,(n.plainObjects||!Object.prototype.hasOwnProperty(i[1].replace(/\[|\]/g,""))||n.allowPrototypes)&&u.push(i[1]);return i&&u.push("["+e.slice(i.index)+"]"),a.parseObject(u,t,n)}},e.exports=function(e,t){if(t=t||{},t.delimiter="string"==typeof t.delimiter||r.isRegExp(t.delimiter)?t.delimiter:a.delimiter,t.depth="number"==typeof t.depth?t.depth:a.depth,t.arrayLimit="number"==typeof t.arrayLimit?t.arrayLimit:a.arrayLimit,t.parseArrays=t.parseArrays!==!1,t.allowDots=t.allowDots!==!1,t.plainObjects="boolean"==typeof t.plainObjects?t.plainObjects:a.plainObjects,t.allowPrototypes="boolean"==typeof t.allowPrototypes?t.allowPrototypes:a.allowPrototypes,t.parameterLimit="number"==typeof t.parameterLimit?t.parameterLimit:a.parameterLimit,t.strictNullHandling="boolean"==typeof t.strictNullHandling?t.strictNullHandling:a.strictNullHandling,""===e||null===e||"undefined"==typeof e)return t.plainObjects?Object.create(null):{};for(var n="string"==typeof e?a.parseValues(e,t):e,o=t.plainObjects?Object.create(null):{},i=Object.keys(n),u=0,s=i.length;s>u;++u){var f=i[u],c=a.parseKeys(f,n[f],t);o=r.merge(o,c,t)}return r.compact(o)}},function(e,t,n){var r=n(15),a={delimiter:"&",arrayPrefixGenerators:{brackets:function(e,t){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e,t){return e}},strictNullHandling:!1};a.stringify=function(e,t,n,o,i){if("function"==typeof i)e=i(t,e);else if(r.isBuffer(e))e=e.toString();else if(e instanceof Date)e=e.toISOString();else if(null===e){if(o)return r.encode(t);e=""}if("string"==typeof e||"number"==typeof e||"boolean"==typeof e)return[r.encode(t)+"="+r.encode(e)];var u=[];if("undefined"==typeof e)return u;for(var s=Array.isArray(i)?i:Object.keys(e),f=0,c=s.length;c>f;++f){var l=s[f];u=Array.isArray(e)?u.concat(a.stringify(e[l],n(t,l),n,o,i)):u.concat(a.stringify(e[l],t+"["+l+"]",n,o,i))}return u},e.exports=function(e,t){t=t||{};var n,r,o="undefined"==typeof t.delimiter?a.delimiter:t.delimiter,i="boolean"==typeof t.strictNullHandling?t.strictNullHandling:a.strictNullHandling;"function"==typeof t.filter?(r=t.filter,e=r("",e)):Array.isArray(t.filter)&&(n=r=t.filter);var u=[];if("object"!=typeof e||null===e)return"";var s;s=t.arrayFormat in a.arrayPrefixGenerators?t.arrayFormat:"indices"in t?t.indices?"indices":"repeat":"indices";var f=a.arrayPrefixGenerators[s];n||(n=Object.keys(e));for(var c=0,l=n.length;l>c;++c){var d=n[c];u=u.concat(a.stringify(e[d],d,f,i,r))}return u.join(o)}}])});