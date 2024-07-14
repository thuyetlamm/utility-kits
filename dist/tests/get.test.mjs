var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};

// src/get.ts
var get = (obj, key, defaultValue) => {
  if (!obj || !key) return void 0;
  const keyParts = key.split(".");
  let value = __spreadValues({}, obj);
  for (const part of keyParts) {
    value = value == null ? void 0 : value[part];
    if (value === void 0) {
      break;
    }
  }
  return value || defaultValue;
};
var get_default = get;

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

// src/components/Each/Each.tsx
import React, { Children as Children2, Fragment } from "react";

// src/tests/get.test.ts
test("get one floor", () => {
  const result = get_default({ a: 10 }, "a");
  expect(result).toBe(10);
});
test("is undifined", () => {
  const result = get_default(void 0, "a");
  expect(result).toBe(void 0);
});
test("get function", () => {
  const result = get_default({ a: 10, b: { z: 1 } }, "b.z");
  expect(result).toBe(1);
});
//# sourceMappingURL=get.test.mjs.map