"use strict";var m=Object.create;var h=Object.defineProperty;var u=Object.getOwnPropertyDescriptor;var f=Object.getOwnPropertyNames;var P=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty;var C=(e,r)=>{for(var o in r)h(e,o,{get:r[o],enumerable:!0})},p=(e,r,o,l)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of f(r))!c.call(e,a)&&a!==o&&h(e,a,{get:()=>r[a],enumerable:!(l=u(r,a))||l.enumerable});return e};var E=(e,r,o)=>(o=e!=null?m(P(e)):{},p(r||!e||!e.__esModule?h(o,"default",{value:e,enumerable:!0}):o,e)),w=e=>p(h({},"__esModule",{value:!0}),e);var S={};C(S,{Each:()=>d,Show:()=>n});module.exports=w(S);var i=require("react"),s=({children:e})=>{let r=null,o=null;return i.Children.forEach(e,l=>{(0,i.isValidElement)(l)&&(l.props.isTrue?l.props.isTrue&&!r&&(r=l):o=l)}),r||o};s.When=({children:e,isTrue:r})=>r&&e;s.Else=({children:e,render:r})=>r||e;var n=s;var t=E(require("react"));var T=({list:e,render:r,empty:o})=>t.default.createElement(t.Fragment,null,t.default.createElement(n,null,t.default.createElement(n.When,{isTrue:Array.isArray(e)&&e.length>0},t.Children.toArray(e.map(r))),t.default.createElement(n.Else,null,o))),d=T;0&&(module.exports={Each,Show});
//# sourceMappingURL=index.js.map