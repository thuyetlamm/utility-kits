"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/index.tsx
var components_exports = {};
__export(components_exports, {
  Each: () => Each_default,
  Show: () => Show_default
});
module.exports = __toCommonJS(components_exports);

// src/components/Show/Show.tsx
var import_react = require("react");
var Show = ({ children }) => {
  let when = null;
  let otherwise = null;
  import_react.Children.forEach(children, (child) => {
    if (!(0, import_react.isValidElement)(child)) return;
    if (!child.props.isTrue) {
      otherwise = child;
    } else if (child.props.isTrue && !when) {
      when = child;
    }
  });
  return when || otherwise;
};
Show.When = ({ children, isTrue }) => {
  return isTrue && children;
};
Show.Else = ({
  children,
  render
}) => {
  return render || children;
};
var Show_default = Show;

// src/components/Each/Each.tsx
var import_react2 = __toESM(require("react"));
var DataList = ({ list, render, empty }) => {
  return /* @__PURE__ */ import_react2.default.createElement(import_react2.Fragment, null, /* @__PURE__ */ import_react2.default.createElement(Show_default, null, /* @__PURE__ */ import_react2.default.createElement(Show_default.When, { isTrue: Array.isArray(list) && list.length > 0 }, import_react2.Children.toArray(list.map(render))), /* @__PURE__ */ import_react2.default.createElement(Show_default.Else, null, empty)));
};
var Each_default = DataList;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Each,
  Show
});
//# sourceMappingURL=index.js.map