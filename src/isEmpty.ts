const isEmpty = <T>(obj: T) => {
    // Check for an empty string
    if (typeof obj === "string" && obj.trim().length === 0) return true
    return !Object.keys(obj ?? {}).length
}
export default isEmpty
