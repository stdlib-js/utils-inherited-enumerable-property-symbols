// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).inheritedEnumerablePropertySymbols=r()}(this,(function(){"use strict";var t=9007199254740991,r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,c=o.__defineSetter__,f=o.__lookupGetter__,l=o.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,e){var n,a,p,y;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(f.call(t,r)||l.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),p="get"in e,y="set"in e,a&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,r,e.get),y&&c&&c.call(t,r,e.set),t};var a=e;function p(t,r,e){a(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function y(t){return"number"==typeof t}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return b&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function j(t,r){return null!=t&&d.call(t,r)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var g=s()?function(t){var r,e,n;if(null==t)return v.call(t);e=t[m],r=j(t,m);try{t[m]=void 0}catch(r){return v.call(t)}return n=v.call(t),r?t[m]=e:delete t[m],n}:function(t){return v.call(t)},_=Number,O=_.prototype.toString;var w=s();function h(t){return"object"==typeof t&&(t instanceof _||(w?function(t){try{return O.call(t),!0}catch(t){return!1}}(t):"[object Number]"===g(t)))}function S(t){return y(t)||h(t)}p(S,"isPrimitive",y),p(S,"isObject",h);var P=Number.POSITIVE_INFINITY,E=_.NEGATIVE_INFINITY,I=Math.floor;function T(t){return t<P&&t>E&&I(r=t)===r;var r}function A(t){return y(t)&&T(t)}function N(t){return h(t)&&T(t.valueOf())}function B(t){return A(t)||N(t)}function V(t){return A(t)&&t>0}function x(t){return N(t)&&t.valueOf()>0}function F(t){return V(t)||x(t)}function k(t){return"string"==typeof t}p(B,"isPrimitive",A),p(B,"isObject",N),p(F,"isPrimitive",V),p(F,"isObject",x);var C=String.prototype.valueOf;var G=s();function L(t){return"object"==typeof t&&(t instanceof String||(G?function(t){try{return C.call(t),!0}catch(t){return!1}}(t):"[object String]"===g(t)))}function M(t){return k(t)||L(t)}function R(t){return t!=t}function U(t){return y(t)&&R(t)}function Y(t){return h(t)&&R(t.valueOf())}function X(t){return U(t)||Y(t)}p(M,"isPrimitive",k),p(M,"isObject",L),p(X,"isPrimitive",U),p(X,"isObject",Y);var q=Object.prototype.propertyIsEnumerable;var z=!q.call("beep","0");function D(t,r){var e;return null!=t&&(!(e=q.call(t,r))&&z&&M(t)?!U(r=+r)&&A(r)&&r>=0&&r<t.length:e)}var H,J=void 0!==Object.getOwnPropertySymbols,K=Object.getOwnPropertySymbols;H=J?function(t){return K(Object(t))}:function(){return[]};var Q=H,W=/./;function Z(t){return"boolean"==typeof t}var $=Boolean.prototype.toString;var tt=s();function rt(t){return"object"==typeof t&&(t instanceof Boolean||(tt?function(t){try{return $.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===g(t)))}function et(t){return Z(t)||rt(t)}function nt(){return new Function("return this;")()}p(et,"isPrimitive",Z),p(et,"isObject",rt);var ot="object"==typeof self?self:null,ut="object"==typeof window?window:null,it="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ct="object"==typeof it?it:null;var ft=function(t){if(arguments.length){if(!Z(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return nt()}if(ot)return ot;if(ut)return ut;if(ct)return ct;throw new Error("unexpected error. Unable to resolve global object.")}(),lt=ft.document&&ft.document.childNodes,at=Int8Array;function pt(){return/^\s*function\s*([^(]*)/i}var yt,bt=/^\s*function\s*([^(]*)/i;p(pt,"REGEXP",bt),yt=Array.isArray?Array.isArray:function(t){return"[object Array]"===g(t)};var st=yt;function vt(t){return null!==t&&"object"==typeof t}var dt=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!st(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(vt);function jt(t){var r,e,n,o;if(("Object"===(e=g(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=bt.exec(n.toString()))return r[1]}return vt(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}p(vt,"isObjectLikeArray",dt);var mt="function"==typeof W||"object"==typeof at||"function"==typeof lt?function(t){return jt(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?jt(t).toLowerCase():r};var gt,_t,Ot=Object.getPrototypeOf;_t=Object.getPrototypeOf,gt="function"===mt(_t)?Ot:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===g(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var wt=gt;function ht(t){return null==t?null:(t=Object(t),wt(t))}function St(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}return function(r,e){var n,o,u,i,c,f,l,a;if(arguments.length>1){if(!V(e))throw new TypeError(St("0k74I",e));c=e}else c=t;if(null==r)return[];for(u=ht(r),n={},o=[],f=1;u&&f<=c;){for(i=Q(u),a=0;a<i.length;a++)!1===j(n,l=i[a])&&D(u,l)&&o.push(l),n[l]=!0;u=ht(u),f+=1}return o}}));
//# sourceMappingURL=browser.js.map
