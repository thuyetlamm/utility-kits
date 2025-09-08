const deepClone = <T>(obj: T): T => {
  // Use native structuredClone if available (faster and more reliable)
  if (typeof structuredClone !== "undefined") {
    try {
      return structuredClone(obj)
    } catch {
      // Fallback to manual implementation if structuredClone fails
    }
  }

  // Check if the value is null or not an object
  if (obj === null || typeof obj !== "object") {
    return obj
  }

  // Handle Date objects
  if (obj instanceof Date) {
    return new Date(obj.getTime()) as T
  }

  // Handle RegExp objects
  if (obj instanceof RegExp) {
    return new RegExp(obj.source, obj.flags) as T
  }

  // Handle arrays
  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item)) as T
  }

  // Handle objects
  if (obj instanceof Object) {
    const copy = {} as T
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        copy[key as keyof T] = deepClone(obj[key])
      }
    }
    return copy as T
  }

  throw new Error("Unable to copy object! Its type isn't supported.")
}
export default deepClone
