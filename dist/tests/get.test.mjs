// src/get.ts
var get = (obj, key, defaultValue) => {
  if (!obj || !key) return void 0;
  const keyParts = key.split(".");
  let value = { ...obj };
  for (const part of keyParts) {
    value = value?.[part];
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