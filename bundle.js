// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).inheritedEnumerablePropertySymbols=e()}(this,(function(){"use strict";function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e=9007199254740991,t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return t({},"x",{}),!0}catch(r){return!1}},i=Object.defineProperty,o=Object.prototype,a=o.toString,u=o.__defineGetter__,c=o.__defineSetter__,f=o.__lookupGetter__,s=o.__lookupSetter__;var l=function(r,e,t){var n,i,l,p;if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((i="value"in t)&&(f.call(r,e)||s.call(r,e)?(n=r.__proto__,r.__proto__=o,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),l="get"in t,p="set"in t,i&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&u&&u.call(r,e,t.get),p&&c&&c.call(r,e,t.set),r},p=i,v=l,g=n()?p:v;var d=function(r,e,t){g(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},m=d;var b=function(r){return"number"==typeof r};var h=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var y=function(){return h&&"symbol"==typeof Symbol.toStringTag},w=Object.prototype.toString,j=w;var P=function(r){return j.call(r)},E=Object.prototype.hasOwnProperty;var O=function(r,e){return null!=r&&E.call(r,e)},_="function"==typeof Symbol?Symbol.toStringTag:"",T=O,x=_,S=w;var V=P,k=function(r){var e,t,n;if(null==r)return S.call(r);t=r[x],e=T(r,x);try{r[x]=void 0}catch(e){return S.call(r)}return n=S.call(r),e?r[x]=t:delete r[x],n},I=y()?k:V,A=Number,F=A.prototype.toString;var R=I,$=A,M=function(r){try{return F.call(r),!0}catch(r){return!1}},C=y();var N=function(r){return"object"==typeof r&&(r instanceof $||(C?M(r):"[object Number]"===R(r)))},B=b,G=N;var L=m,Z=function(r){return B(r)||G(r)},W=N;L(Z,"isPrimitive",b),L(Z,"isObject",W);var X=Z,z=Number.POSITIVE_INFINITY,U=A.NEGATIVE_INFINITY,Y=Math.floor;var D=function(r){return Y(r)===r},q=z,H=U,J=D;var K=function(r){return r<q&&r>H&&J(r)},Q=X.isPrimitive,rr=K;var er=function(r){return Q(r)&&rr(r)},tr=X.isObject,nr=K;var ir=function(r){return tr(r)&&nr(r.valueOf())},or=er,ar=ir;var ur=m,cr=function(r){return or(r)||ar(r)},fr=ir;ur(cr,"isPrimitive",er),ur(cr,"isObject",fr);var sr=cr,lr=sr.isPrimitive;var pr=function(r){return lr(r)&&r>0},vr=sr.isObject;var gr=function(r){return vr(r)&&r.valueOf()>0},dr=pr,mr=gr;var br=m,hr=function(r){return dr(r)||mr(r)},yr=gr;br(hr,"isPrimitive",pr),br(hr,"isObject",yr);var wr=hr;var jr=function(r){return"string"==typeof r},Pr=String.prototype.valueOf;var Er=I,Or=function(r){try{return Pr.call(r),!0}catch(r){return!1}},_r=y();var Tr=function(r){return"object"==typeof r&&(r instanceof String||(_r?Or(r):"[object String]"===Er(r)))},xr=jr,Sr=Tr;var Vr=m,kr=function(r){return xr(r)||Sr(r)},Ir=Tr;Vr(kr,"isPrimitive",jr),Vr(kr,"isObject",Ir);var Ar=kr;var Fr=function(r){return r!=r},Rr=X.isPrimitive,$r=Fr;var Mr=function(r){return Rr(r)&&$r(r)},Cr=X.isObject,Nr=Fr;var Br=function(r){return Cr(r)&&Nr(r.valueOf())},Gr=Mr,Lr=Br;var Zr=m,Wr=function(r){return Gr(r)||Lr(r)},Xr=Br;Zr(Wr,"isPrimitive",Mr),Zr(Wr,"isObject",Xr);var zr,Ur=Wr,Yr=Object.prototype.propertyIsEnumerable;zr=!Yr.call("beep","0");var Dr=Ar,qr=Ur.isPrimitive,Hr=sr.isPrimitive,Jr=Yr,Kr=zr;var Qr=function(r,e){var t;return null!=r&&(!(t=Jr.call(r,e))&&Kr&&Dr(r)?!qr(e=+e)&&Hr(e)&&e>=0&&e<r.length:t)},re=Qr,ee=void 0!==Object.getOwnPropertySymbols,te=Object.getOwnPropertySymbols;var ne=ee?function(r){return te(Object(r))}:function(){return[]},ie=/./;var oe=function(r){return"boolean"==typeof r},ae=Boolean.prototype.toString;var ue=I,ce=function(r){try{return ae.call(r),!0}catch(r){return!1}},fe=y();var se=function(r){return"object"==typeof r&&(r instanceof Boolean||(fe?ce(r):"[object Boolean]"===ue(r)))},le=oe,pe=se;var ve=m,ge=function(r){return le(r)||pe(r)},de=se;ve(ge,"isPrimitive",oe),ve(ge,"isObject",de);var me=ge;var be=function(){return new Function("return this;")()},he="object"==typeof self?self:null,ye="object"==typeof window?window:null,we="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},je="object"==typeof we?we:null;module.exports=je;var Pe=me.isPrimitive,Ee=be,Oe=he,_e=ye,Te=r(Object.freeze({__proto__:null}));var xe=function(r){if(arguments.length){if(!Pe(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Ee()}if(Oe)return Oe;if(_e)return _e;if(Te)return Te;throw new Error("unexpected error. Unable to resolve global object.")},Se=xe(),Ve=Se.document&&Se.document.childNodes,ke=Int8Array,Ie=ie,Ae=Ve,Fe=ke;var Re=function(){return"function"==typeof Ie||"object"==typeof Fe||"function"==typeof Ae};var $e=function(){return/^\s*function\s*([^(]*)/i},Me=$e;m(Me,"REGEXP",$e());var Ce=Me,Ne=I;var Be=Array.isArray?Array.isArray:function(r){return"[object Array]"===Ne(r)};var Ge=function(r){return null!==r&&"object"==typeof r};m(Ge,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!Be(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Ge));var Le=Ge;var Ze=I,We=Ce.REGEXP,Xe=function(r){return Le(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var ze=function(r){var e,t,n;if(("Object"===(t=Ze(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=We.exec(n.toString()))return e[1]}return Xe(r)?"Buffer":t},Ue=ze;var Ye=ze;var De=function(r){var e;return null===r?"null":"object"===(e=typeof r)?Ue(r).toLowerCase():e},qe=function(r){return Ye(r).toLowerCase()},He=Re()?qe:De;var Je=function(r){return"function"===He(r)},Ke=Object.getPrototypeOf;var Qe=function(r){return r.__proto__},rt=I,et=Qe;var tt=function(r){var e=et(r);return e||null===e?e:"[object Function]"===rt(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},nt=Ke,it=tt,ot=Je(Object.getPrototypeOf)?nt:it;var at=function(r){return null==r?null:(r=Object(r),ot(r))},ut=D;var ct=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&ut(r.length)&&r.length>=0&&r.length<=9007199254740991},ft=sr.isPrimitive,st=Ar.isPrimitive,lt=Ur.isPrimitive;var pt=function(r,e,t){var n,i,o;if(!ct(r)&&!st(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!ft(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(st(r)){if(!st(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,lt(e)){for(o=i;o<n;o++)if(lt(r[o]))return!0;return!1}for(o=i;o<n;o++)if(r[o]===e)return!0;return!1},vt=pt,gt=Ar.isPrimitive;var dt=function(r){if(!gt(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},mt=Ar.isPrimitive;var bt=function(r){if(!mt(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},ht=dt,yt=bt,wt=Ar.isPrimitive;var jt=function(r){return wt(r)&&r===yt(r)&&r!==ht(r)},Pt=z,Et=U;var Ot=function(r){return r==r&&r>Et&&r<Pt},_t=sr.isPrimitive;var Tt=function(r){return _t(r)&&r>=0},xt=sr.isObject;var St=function(r){return xt(r)&&r.valueOf()>=0},Vt=Tt,kt=St;var It=m,At=function(r){return Vt(r)||kt(r)},Ft=St;It(At,"isPrimitive",Tt),It(At,"isObject",Ft);var Rt=At.isPrimitive,$t=Ar.isPrimitive;var Mt=function(r,e){var t,n;if(!$t(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!Rt(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},Ct=sr.isPrimitive,Nt=Ar.isPrimitive;var Bt=function(r,e,t){var n,i;if(!Nt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!Nt(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!Ct(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0},Gt=Mt,Lt=Bt;var Zt=function(r,e,t){var n=!1,i=e-r.length;return i<0||(Lt(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+Gt("0",i):Gt("0",i)+r,n&&(r="-"+r)),r},Wt=jt,Xt=bt,zt=dt,Ut=Ot,Yt=X.isPrimitive,Dt=Zt;var qt=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!Ut(n)){if(!Yt(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Dt(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Dt(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=Wt(r.specifier)?Xt(t):zt(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},Ht=Ar.isPrimitive,Jt=/[-\/\\^$*+?.()|[\]{}]/g;var Kt=function(r){var e,t;if(!Ht(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(Jt,"\\$&"):(e=(e=r.substring(1,t)).replace(Jt,"\\$&"),r=r[0]+e+r.substring(t))},Qt=RegExp.prototype.exec;var rn=I,en=function(r){try{return Qt.call(r),!0}catch(r){return!1}},tn=y();var nn=Kt,on=Je,an=Ar.isPrimitive,un=function(r){return"object"==typeof r&&(r instanceof RegExp||(tn?en(r):"[object RegExp]"===rn(r)))};var cn=jt,fn=bt,sn=dt,ln=function(r,e,t){if(!an(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(an(e))e=nn(e),e=new RegExp(e,"g");else if(!un(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!an(t)&&!on(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},pn=Ot,vn=X.isPrimitive,gn=function(r){return Math.abs(r)},dn=/e\+(\d)$/,mn=/e-(\d)$/,bn=/^(\d+)$/,hn=/^(\d+)e/,yn=/\.0$/,wn=/\.0*e/,jn=/(\..*[^0])0*e/;var Pn=function(r){var e,t,n=parseFloat(r.arg);if(!pn(n)){if(!vn(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":gn(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=ln(t,jn,"$1e"),t=ln(t,wn,"e"),t=ln(t,yn,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=ln(t,dn,"e+0$1"),t=ln(t,mn,"e-0$1"),r.alternate&&(t=ln(t,bn,"$1."),t=ln(t,hn,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=cn(r.specifier)?fn(t):sn(t)},En=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var On=Mt;var _n=Ar.isPrimitive,Tn=vt,xn=Fr,Sn=qt,Vn=Pn,kn=function(r){var e,t,n,i,o;for(e=0,n=[],o=En.exec(r);o;)(t=r.slice(e,En.lastIndex-o[0].length)).length&&n.push(t),(i=a(o,n.length))&&n.push(i),e=En.lastIndex,o=En.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function a(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},In=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+On(" ",n):On(" ",n)+r},An=Zt,Fn=String.fromCharCode;var Rn=function(r){var e,t,n,i,o,a,u,c,f;if(!_n(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=kn(r),a="",u=1,c=0;c<e.length;c++)if(n=e[c],_n(n))a+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!Tn(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,xn(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,xn(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=Sn(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!xn(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=xn(o)?String(n.arg):Fn(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=Vn(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=An(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=In(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a},$n=e,Mn=wr.isPrimitive,Cn=re,Nn=ne,Bn=at,Gn=O,Ln=Rn;var Zn=function(r,e){var t,n,i,o,a,u,c,f;if(arguments.length>1){if(!Mn(e))throw new TypeError(Ln("invalid argument. Second argument must be a positive integer. Value: `%s`.",e));a=e}else a=$n;if(null==r)return[];for(i=Bn(r),t={},n=[],u=1;i&&u<=a;){for(o=Nn(i),f=0;f<o.length;f++)c=o[f],!1===Gn(t,c)&&Cn(i,c)&&n.push(c),t[c]=!0;i=Bn(i),u+=1}return n};return Zn}));
//# sourceMappingURL=bundle.js.map
