// src/components/Each/Each.tsx
import React, { Children as Children2, Fragment } from "react";

// src/components/Show/Show.tsx
import { Children, isValidElement } from "react";
var Show = ({ children }) => {
  let when = null;
  let otherwise = null;
  Children.forEach(children, (child) => {
    if (!isValidElement(child)) return;
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
var DataList = ({ list, render, empty }) => {
  return /* @__PURE__ */ React.createElement(Fragment, null, /* @__PURE__ */ React.createElement(Show_default, null, /* @__PURE__ */ React.createElement(Show_default.When, { isTrue: Array.isArray(list) && list.length > 0 }, Children2.toArray(list.map(render))), /* @__PURE__ */ React.createElement(Show_default.Else, null, empty)));
};
var Each_default = DataList;
export {
  Each_default as default
};
//# sourceMappingURL=Each.mjs.map