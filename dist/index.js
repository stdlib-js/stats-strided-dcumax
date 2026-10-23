"use strict";var c=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(n){throw (r=0, n)}};};var m=c(function(D,p){
var x=require('@stdlib/math-base-assert-is-nan/dist'),E=require('@stdlib/math-base-assert-is-positive-zero/dist');function O(a,r,n,f,i,s,q){var e,o,u,v,t;if(a<=0)return i;if(o=f,u=q,e=r[o],i[u]=e,u+=s,t=1,x(e)===!1)for(t;t<a;t++){if(o+=n,v=r[o],x(v)){e=v;break}(v>e||v===e&&E(v))&&(e=v),i[u]=e,u+=s}if(x(e))for(t;t<a;t++)i[u]=e,u+=s;return i}p.exports=O
});var y=c(function(F,l){
var j=require('@stdlib/strided-base-stride2offset/dist'),P=m();function Z(a,r,n,f,i){var s=j(a,n),q=j(a,i);return P(a,r,n,s,f,i,q)}l.exports=Z
});var b=c(function(G,_){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=y(),h=m();g(R,"ndarray",h);_.exports=R
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=b(),d,k=z(w(__dirname,"./native.js"));A(k)?d=B:d=k;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
