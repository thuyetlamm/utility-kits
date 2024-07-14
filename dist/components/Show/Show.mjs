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
var Show_default = Show;
Show.When = ({ children, isTrue }) => {
  return isTrue && children;
};
Show.Else = ({
  children,
  render
}) => {
  return render || children;
};
export {
  Show_default as default
};
//# sourceMappingURL=Show.mjs.map