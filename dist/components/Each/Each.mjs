import n,{Children as a,Fragment as p}from"react";import{Children as h,isValidElement as s}from"react";var i=({children:e})=>{let r=null,t=null;return h.forEach(e,o=>{s(o)&&(o.props.isTrue?o.props.isTrue&&!r&&(r=o):t=o)}),r||t};i.When=({children:e,isTrue:r})=>r&&e;i.Else=({children:e,render:r})=>r||e;var l=i;var d=({list:e,render:r,empty:t})=>n.createElement(p,null,n.createElement(l,null,n.createElement(l.When,{isTrue:Array.isArray(e)&&e.length>0},a.toArray(e.map(r))),n.createElement(l.Else,null,t))),T=d;export{T as default};
//# sourceMappingURL=Each.mjs.map