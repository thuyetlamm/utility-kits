"use strict";var s=Object.defineProperty;var i=Object.getOwnPropertyDescriptor;var l=Object.getOwnPropertyNames;var a=Object.prototype.hasOwnProperty;var b=(e,t)=>{for(var r in t)s(e,r,{get:t[r],enumerable:!0})},m=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of l(t))!a.call(e,o)&&o!==r&&s(e,o,{get:()=>t[o],enumerable:!(n=i(t,o))||n.enumerable});return e};var N=e=>m(s({},"__esModule",{value:!0}),e);var T={};b(T,{default:()=>v});module.exports=N(T);var p=e=>Object.prototype.toString.call(e).slice(8,-1);var c=e=>p(e)==="NaN";var u="Invalid input: The result of the operation is NaN (Not a Number). Please ensure that all provided values are valid numbers.",d=(e,t)=>{let r=Number(e),n=Number(t);if(c(n+r))throw u;return r>=n},x=(e,t)=>{let r=Number(e),n=Number(t);if(c(n+r))throw u;return r>n},f=(e,t)=>{let r=Number(e),n=Number(t);if(c(n+r))throw u;return r<=n},y=(e,t)=>{let r=Number(e),n=Number(t);if(c(n+r))throw u;return r<n},h={gte:d,lt:y,lte:f,gt:x},v=h;
//# sourceMappingURL=compare.js.map