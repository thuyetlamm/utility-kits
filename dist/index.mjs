var $=Object.defineProperty;var F=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var E=(e,t,r)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t)=>{for(var r in t||(t={}))B.call(t,r)&&E(e,r,t[r]);if(F)for(var r of F(t))X.call(t,r)&&E(e,r,t[r]);return e};var a=e=>Object.prototype.toString.call(e).slice(8,-1),f=e=>a(e)==="Object",b=e=>a(e)==="Array",m=e=>a(e)==="NaN",c=e=>a(e)==="Function",g=e=>a(e)==="Number",T=e=>a(e)==="String",O=e=>a(e)==="Symbol",p=e=>a(e)==="Null",Z=e=>a(e)==="Undefined";var q=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,G=/^\w*$/,H=(e,t)=>Array.isArray(e)?!1:["Number","Boolean","Null","Symbol"].includes(a(e))?!0:G.test(e)||!q.test(e)||t!=null&&e in Object(t),k=H;var V=(e,t)=>{if(!c(e)||!c(t))throw new TypeError("Expected a function");let r=(...n)=>{let s=t?t.apply(null,n):n[0],o=r.cache;if(o.has(s))return o.get(s);let i=e.apply(null,n);return r.cache=o.set(s,i)||o,i};return r.cache=new(V.Cache||Map),r};V.Cache=Map;var I=V;var J=500,L=e=>{let t=I(e,(...r)=>{let{cache:n}=t;return(n==null?void 0:n.size)===J&&(n==null||n.clear()),r});return t},A=L;var Q=46,D=/\\(\\)?/g,Y=RegExp(`[^.[\\]]+|\\[(?:([^"'][^[]*)|(["'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))`,"g"),v=A(e=>{let t=[];return T(e)&&((e==null?void 0:e.charCodeAt(0))===Q&&t.push(""),e==null||e.replace(Y,(r,n,s,o)=>{var u;let i=r;s?i=(u=o==null?void 0:o.replace(D,"$1"))!=null?u:"":n&&(i=n.trim()),t.push(i)})),t}),R=v;function ee(e,t){return Array.isArray(e)?e:k(e,t)?[e]:R(e)}var N=ee;var te=(e,t,r)=>{if(!e||!t)return;let n=N(t,e),s=y({},e);for(let o of n)if(s=s==null?void 0:s[o],s===void 0)break;return s||r},re=te;var w=e=>{if(e===null||typeof e!="object")return e;if(Array.isArray(e)){let t=[];for(let r=0;r<e.length;r++)t[r]=w(e[r]);return t}if(e instanceof Object){let t={};for(let r in e)e.hasOwnProperty(r)&&(t[r]=w(e[r]));return t}throw new Error("Unable to copy object! Its type isn't supported.")},h=w;var ne=e=>e?b(e)&&e instanceof Array?!e.length:T(e)&&e instanceof String?e.trim().length!==0:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e!=null?e:{}).length:!0,oe=ne;var _=(e,t)=>{if(!e||!t)return e!=null?e:t;let r=h(e),n=h(t);if(Array.isArray(r)&&Array.isArray(n))return[...r,...n];if(typeof e=="object"&&typeof t=="object"){let s=y({},r);for(let o in t)if(t.hasOwnProperty(o)){let i=r[o],u=n[o];n[o]instanceof Object&&o in r?s[o]=_(i,u):s[o]=u}return s}throw new Error("Both target and source should be either objects or arrays")},se=_;var K="Invalid input: The result of the operation is NaN (Not a Number). Please ensure that all provided values are valid numbers.",ie=(e,t)=>{let r=Number(e),n=Number(t);if(m(n+r))throw K;return r>=n},ae=(e,t)=>{let r=Number(e),n=Number(t);if(m(n+r))throw K;return r>n},ue=(e,t)=>{let r=Number(e),n=Number(t);if(m(n+r))throw K;return r<=n},fe=(e,t)=>{let r=Number(e),n=Number(t);if(m(n+r))throw K;return r<n},ce={gte:ie,lt:fe,lte:ue,gt:ae},pe=ce;import{Children as me,isValidElement as le}from"react";var S=({children:e})=>{let t=null,r=null;return me.forEach(e,n=>{le(n)&&(n.props.isTrue?n.props.isTrue&&!t&&(t=n):r=n)}),t||r};S.When=({children:e,isTrue:t})=>t&&e;S.Else=({children:e,render:t})=>t||e;var l=S;import x,{Children as de,Fragment as Te}from"react";var ye=({list:e,render:t,empty:r})=>x.createElement(Te,null,x.createElement(l,null,x.createElement(l.When,{isTrue:Array.isArray(e)&&e.length>0},de.toArray(e.map(t))),x.createElement(l.Else,null,r))),z=ye;var Ne=9007199254740991,he=/^(?:0|[1-9]\d*)$/;function Ke(e,t=Ne){return!!t&&(g(e)||!O(e)&&he.test(e))&&Number(e)>-1&&Number(e)%1===0&&Number(e)<t}var U=Ke;var xe=Object.prototype.hasOwnProperty;function W(e,t,r){t==="__proto__"?Object.defineProperty(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}function be(e,t){return e===t||e!==e&&t!==t}function ge(e,t,r){let n=e[t];xe.call(e,t)&&be(n,r)?r===void 0&&!(t in e)&&W(e,t,r):(r!==0||1/Number(r)===1/Number(n))&&W(e,t,r)}var j=ge;var Oe=1/0;function Ve(e){if(["Symbol","String"].includes(a(e)))return e;let t=`${e}`;return t==="0"&&1/Number(e)===-Oe?"-0":t}function we(e,t,r){if(!f(e))return e;t=N(t,e);let n=t.length,s=n-1,o=-1,i=e;for(;!p(i)&&++o<n;){let u=Ve(t[o]),P=r;if(o!==s){let C=i[u];P=f(C)?C:U(t[o+1])?[]:{}}j(i,u,P),i=i[u]}return e}var d=we;var Se=(e,t,r)=>{if(!f(e)||p(e))return e;if(c(r)&&r instanceof Function){let n=r();return d(e,t,n)}return d(e,t,r)},Pe=Se;var Ce=(e,t,r)=>{if(!e||!f(e)||p(e))return e;if(c(r)&&r instanceof Function){let n=r();return d(e,t,n)}return d(e,t,r)},Fe=Ce;export{z as Each,l as Show,pe as compare,h as deepClone,re as get,b as isArray,oe as isEmpty,c as isFunction,m as isNaN,p as isNull,g as isNumber,f as isObject,T as isString,O as isSymbol,Z as isUndefined,se as merge,Pe as set,Fe as setNew};
//# sourceMappingURL=index.mjs.map