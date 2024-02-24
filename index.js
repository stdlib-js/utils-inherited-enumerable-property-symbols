// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).inheritedEnumerablePropertySymbols=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,b=/^(\d+)$/,d=/^(\d+)e/,y=/\.0$/,h=/\.0*e/,v=/(\..*[^0])0*e/;function w(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":u(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=s.call(n,v,"$1e"),n=s.call(n,h,"e"),n=s.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,g,"e-0$1"),r.alternate&&(n=s.call(n,b,"$1."),n=s.call(n,d,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===f.call(r.specifier)?f.call(n):l.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,_=isNaN,O=Array.isArray;function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,t,n,o,a,u,l,f,s,p,g,b,d;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",l=1,f=0;f<r.length;f++)if(n=r[f],"string"==typeof n)u+=n;else{if(e=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(o=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,_(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,b=n.padRight,d=void 0,(d=g-p.length)<0?p:p=b?p+m(d):m(d)+p)),u+=n.arg||"",l+=1}return u}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function I(r){var e,t,n,i;for(t=[],i=0,n=x.exec(r);n;)(e=r.slice(i,x.lastIndex-n[0].length)).length&&t.push(e),t.push(T(n)),i=x.lastIndex,n=x.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function k(r){var e,t;if("string"!=typeof r)throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[I(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return S.apply(null,e)}var P,A=Object.prototype,V=A.toString,F=A.__defineGetter__,N=A.__defineSetter__,C=A.__lookupGetter__,$=A.__lookupSetter__;P=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(C.call(r,e)||$.call(r,e)?(n=r.__proto__,r.__proto__=A,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&F&&F.call(r,e,t.get),a&&N&&N.call(r,e,t.set),r};var R=P;function B(r,e,t){R(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function G(r){return"number"==typeof r}var L="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function U(){return L&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString;var M=Object.prototype.hasOwnProperty;function W(r,e){return null!=r&&M.call(r,e)}var X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"";var z=U()?function(r){var e,t,n;if(null==r)return Z.call(r);t=r[Y],e=W(r,Y);try{r[Y]=void 0}catch(e){return Z.call(r)}return n=Z.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return Z.call(r)},q=Number,D=q.prototype.toString;var H=U();function J(r){return"object"==typeof r&&(r instanceof q||(H?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Number]"===z(r)))}function K(r){return G(r)||J(r)}B(K,"isPrimitive",G),B(K,"isObject",J);var Q=Number.POSITIVE_INFINITY,rr=q.NEGATIVE_INFINITY,er=Math.floor;function tr(r){return r<Q&&r>rr&&er(e=r)===e;var e}function nr(r){return G(r)&&tr(r)}function ir(r){return J(r)&&tr(r.valueOf())}function or(r){return nr(r)||ir(r)}function ar(r){return nr(r)&&r>0}function cr(r){return ir(r)&&r.valueOf()>0}function ur(r){return ar(r)||cr(r)}function lr(r){return"string"==typeof r}B(or,"isPrimitive",nr),B(or,"isObject",ir),B(ur,"isPrimitive",ar),B(ur,"isObject",cr);var fr=String.prototype.valueOf;var sr=U();function pr(r){return"object"==typeof r&&(r instanceof String||(sr?function(r){try{return fr.call(r),!0}catch(r){return!1}}(r):"[object String]"===z(r)))}function gr(r){return lr(r)||pr(r)}function br(r){return r!=r}function dr(r){return G(r)&&br(r)}function yr(r){return J(r)&&br(r.valueOf())}function hr(r){return dr(r)||yr(r)}B(gr,"isPrimitive",lr),B(gr,"isObject",pr),B(hr,"isPrimitive",dr),B(hr,"isObject",yr);var vr=Object.prototype.propertyIsEnumerable;var wr=!vr.call("beep","0");function mr(r,e){var t;return null!=r&&(!(t=vr.call(r,e))&&wr&&gr(r)?!dr(e=+e)&&nr(e)&&e>=0&&e<r.length:t)}var jr,_r=void 0!==Object.getOwnPropertySymbols,Or=Object,Er=Or.getOwnPropertySymbols;jr=_r?function(r){return Er(Or(r))}:function(){return[]};var Sr=jr,xr=Object,Tr=/./;function Ir(r){return"boolean"==typeof r}var kr=Boolean,Pr=Boolean.prototype.toString;var Ar=U();function Vr(r){return"object"==typeof r&&(r instanceof kr||(Ar?function(r){try{return Pr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===z(r)))}function Fr(r){return Ir(r)||Vr(r)}B(Fr,"isPrimitive",Ir),B(Fr,"isObject",Vr);var Nr="object"==typeof self?self:null,Cr="object"==typeof window?window:null,$r="object"==typeof global?global:null,Rr="object"==typeof globalThis?globalThis:null;var Br=function(r){if(arguments.length){if(!Ir(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(Rr)return Rr;if(Nr)return Nr;if(Cr)return Cr;if($r)return $r;throw new Error("unexpected error. Unable to resolve global object.")}(),Gr=Br.document&&Br.document.childNodes,Lr=Int8Array;function Ur(){return/^\s*function\s*([^(]*)/i}var Zr,Mr=/^\s*function\s*([^(]*)/i;B(Ur,"REGEXP",Mr),Zr=Array.isArray?Array.isArray:function(r){return"[object Array]"===z(r)};var Wr=Zr;function Xr(r){return null!==r&&"object"==typeof r}var Yr=function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Wr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Xr);function zr(r){var e,t,n,i;if(("Object"===(t=z(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Mr.exec(n.toString()))return e[1]}return Xr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}B(Xr,"isObjectLikeArray",Yr);var qr="function"==typeof Tr||"object"==typeof Lr||"function"==typeof Gr?function(r){return zr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?zr(r).toLowerCase():e};var Dr,Hr,Jr=Object.getPrototypeOf;Hr=Object.getPrototypeOf,Dr="function"===qr(Hr)?Jr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===z(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Kr=Dr;function Qr(r){return null==r?null:(r=xr(r),Kr(r))}return function(r,e){var t,n,i,o,a,c,u,l;if(arguments.length>1){if(!ar(e))throw new TypeError(function(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}("1UX45",e));a=e}else a=9007199254740991;if(null==r)return[];for(i=Qr(r),t={},n=[],c=1;i&&c<=a;){for(o=Sr(i),l=0;l<o.length;l++)!1===W(t,u=o[l])&&mr(i,u)&&n.push(u),t[u]=!0;i=Qr(i),c+=1}return n}}));
//# sourceMappingURL=index.js.map
