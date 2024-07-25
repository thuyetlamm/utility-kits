import { isFunction } from "../checkTypes"

const REGEX_CHARACTER_SPECIAL = new RegExp(
  "/\\/\\*[\\s\\S]*?\\*\\/|\\/\\/.*$/gm",
)

const convertFn = (fn: any) => {
  if (!isFunction(fn)) return ""
  return fn.toString().replace(REGEX_CHARACTER_SPECIAL, "")
}

export default convertFn
