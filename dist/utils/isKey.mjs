var o=e=>Object.prototype.toString.call(e).slice(8,-1);var n=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,s=/^\w*$/,i=(e,t)=>Array.isArray(e)?!1:["Number","Boolean","Null","Symbol"].includes(o(e))?!0:s.test(e)||!n.test(e)||t!=null&&e in Object(t),b=i;export{b as default};
//# sourceMappingURL=isKey.mjs.map