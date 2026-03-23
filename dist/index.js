"use strict";var g=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var f=g(function(d,p){
var h=require('@stdlib/constants-float64-max-safe-integer/dist'),q=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,l=require('@stdlib/assert-is-enumerable-property/dist'),y=require('@stdlib/utils-property-symbols/dist'),m=require('@stdlib/utils-get-prototype-of/dist'),P=require('@stdlib/assert-has-own-property/dist'),b=require('@stdlib/error-tools-fmtprodmsg/dist');function c(i,r){var n,u,e,o,s,v,t,a;if(arguments.length>1){if(!q(r))throw new TypeError(b('1UX45',r));s=r}else s=h;if(i==null)return[];for(e=m(i),n={},u=[],v=1;e&&v<=s;){for(o=y(e),a=0;a<o.length;a++)t=o[a],P(n,t)===!1&&l(e,t)&&u.push(t),n[t]=!0;e=m(e),v+=1}return u}p.exports=c
});var E=f();module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
