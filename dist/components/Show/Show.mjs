import{Children as i,isValidElement as n}from"react";var o=({children:r})=>{let e=null,t=null;return i.forEach(r,l=>{n(l)&&(l.props.isTrue?l.props.isTrue&&!e&&(e=l):t=l)}),e||t};o.When=({children:r,isTrue:e})=>e&&r;o.Else=({children:r,render:e})=>e||r;var u=o;export{u as default};
//# sourceMappingURL=Show.mjs.map