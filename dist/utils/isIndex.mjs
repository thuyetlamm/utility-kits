var n=t=>Object.prototype.toString.call(t).slice(8,-1);var o=t=>n(t)==="Number";var r=t=>n(t)==="Symbol";var s=9007199254740991,i=/^(?:0|[1-9]\d*)$/;function c(t,e=s){return!!e&&(o(t)||!r(t)&&i.test(t))&&Number(t)>-1&&Number(t)%1===0&&Number(t)<e}var l=c;export{l as default};
//# sourceMappingURL=isIndex.mjs.map