import deepClone from "./deepClone"
import { MergeObject } from "./types/merge"

const merge = <T extends object>(target: T, source: T) => {
  if (!target || !source) return target ?? source

  const clonedTarget = deepClone(target)
  const clonedSource = deepClone(source)

  if (Array.isArray(clonedTarget) && Array.isArray(clonedSource)) {
    return [...clonedTarget, ...clonedSource] as T
  }

  if (typeof target === "object" && typeof source === "object") {
    const result: T = { ...clonedTarget } as T
    for (const key in source) {
      if (source.hasOwnProperty(key)) {
        const targetValue = clonedTarget[key] // Store target value for potential recursion
        const sourceValue = clonedSource[key]
        if (clonedSource[key] instanceof Object && key in clonedTarget) {
          result[key] = merge(
            targetValue as MergeObject<typeof targetValue>,
            sourceValue as MergeObject<typeof sourceValue>,
          )
        } else {
          result[key] = sourceValue
        }
      }
    }
    return result
  }

  throw new Error("Both target and source should be either objects or arrays")
}

export default merge
