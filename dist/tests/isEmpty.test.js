"use strict";var V=Object.create;var h=Object.defineProperty;var w=Object.getOwnPropertyDescriptor;var S=Object.getOwnPropertyNames;var P=Object.getPrototypeOf,C=Object.prototype.hasOwnProperty;var E=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of S(t))!C.call(e,o)&&o!==n&&h(e,o,{get:()=>t[o],enumerable:!(r=w(t,o))||r.enumerable});return e};var F=(e,t,n)=>(n=e!=null?V(P(e)):{},E(t||!e||!e.__esModule?h(n,"default",{value:e,enumerable:!0}):n,e));var f=e=>Object.prototype.toString.call(e).slice(8,-1);var l=e=>f(e)==="Array";var u=e=>f(e)==="Function";var c=e=>f(e)==="String";var m=(e,t)=>{if(!u(e)||!u(t))throw new TypeError("Expected a function");let n=(...r)=>{let o=t?t.apply(null,r):r[0],i=n.cache;if(i.has(o))return i.get(o);let a=e.apply(null,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(m.Cache||Map),n};m.Cache=Map;var K=m;var M=500,k=e=>{let t=K(e,(...n)=>{let{cache:r}=t;return(r==null?void 0:r.size)===M&&(r==null||r.clear()),n});return t},b=k;var I=46,A=/\\(\\)?/g,B=RegExp(`[^.[\\]]+|\\[(?:([^"'][^[]*)|(["'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))`,"g"),ae=b(e=>{let t=[];return c(e)&&((e==null?void 0:e.charCodeAt(0))===I&&t.push(""),e==null||e.replace(B,(n,r,o,i)=>{var N;let a=n;o?a=(N=i==null?void 0:i.replace(A,"$1"))!=null?N:"":r&&(a=r.trim()),t.push(a)})),t});var _=e=>e?l(e)&&e instanceof Array?!e.length:c(e)&&e instanceof String?e.trim().length!==0:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e!=null?e:{}).length:!0,s=_;var p=require("react"),g=({children:e})=>{let t=null,n=null;return p.Children.forEach(e,r=>{(0,p.isValidElement)(r)&&(r.props.isTrue?r.props.isTrue&&!t&&(t=r):n=r)}),t||n};g.When=({children:e,isTrue:t})=>t&&e;g.Else=({children:e,render:t})=>t||e;var d=F(require("react"));describe("isEmpty function",()=>{it("should return true for an empty string",()=>{expect(s("")).toBe(!0)}),it("should return true for an empty array",()=>{expect(s([])).toBe(!0)}),it("should return true for an empty object",()=>{expect(s({})).toBe(!0)}),it("should return false for a non-empty string",()=>{expect(s("hello")).toBe(!1)}),it("should return false for a non-empty array",()=>{expect(s([1,2,3])).toBe(!1)}),it("should return false for a non-empty object",()=>{expect(s({name:"John",age:30})).toBe(!1)}),it("should handle null and undefined values",()=>{expect(s(null)).toBe(!0),expect(s(void 0)).toBe(!0)})});
//# sourceMappingURL=isEmpty.test.js.map