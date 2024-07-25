const deepClone = <T>(obj: T): T => {
  // Check if the value is null or not an object
  if (obj === null || typeof obj !== "object") {
    return obj
  }

  // Handle arrays
  if (Array.isArray(obj)) {
    const copy = []
    for (let i = 0; i < obj.length; i++) {
      copy[i] = deepClone(obj[i])
    }
    return copy as T
  }

  // Handle objects
  if (obj instanceof Object) {
    const copy = {} as T
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key as keyof T] = deepClone(obj[key])
      }
    }
    return copy as T
  }

  throw new Error("Unable to copy object! Its type isn't supported.")
}
export default deepClone
