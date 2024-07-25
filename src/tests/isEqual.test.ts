import { isEqual } from "../compare" // Adjust the import path to your actual file

// test("compare identical objects", () => {
//   expect(isEqual({ a: 1 }, { a: 1 })).toBe(true)
// })
//
// test("compare different objects", () => {
//   expect(isEqual({ a: 1 }, { a: 2 })).toBe(false)
// })
//
// test("compare identical nested objects", () => {
//   expect(isEqual({ a: { b: 1 } }, { a: { b: 1 } })).toBe(true)
// })
//
// test("compare different nested objects", () => {
//   expect(isEqual({ a: { b: 1 } }, { a: { b: 2 } })).toBe(false)
// })
//
// test("compare identical arrays", () => {
//   expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true)
// })
//
// test("compare different arrays", () => {
//   expect(isEqual([1, 2, 3], [1, 2, 4])).toBe(false)
// })
//
// test("compare arrays of different lengths", () => {
//   expect(isEqual([1, 2, 3], [1, 2])).toBe(false)
// })
//
// test("compare identical nested arrays", () => {
//   expect(isEqual([[1, 2], [3, 4]], [[1, 2], [3, 4]])).toBe(true)
// })
//
// test("compare different nested arrays", () => {
//   expect(isEqual([[1, 2], [3, 4]], [[1, 2], [4, 3]])).toBe(false)
// })
//
// test("compare identical strings", () => {
//   expect(isEqual("test", "test")).toBe(true)
// })
//
// test("compare different strings", () => {
//   expect(isEqual("test", "Test")).toBe(false)
// })
//
// test("compare identical numbers", () => {
//   expect(isEqual(123, 123)).toBe(true)
// })
//
// test("compare different numbers", () => {
//   expect(isEqual(123, 456)).toBe(false)
// })
//
// test("compare null to null", () => {
//   expect(isEqual(null, null)).toBe(true)
// })
//
// test("compare null to object", () => {
//   expect(isEqual(null, {})).toBe(false)
// })
//
// test("compare undefined to undefined", () => {
//   expect(isEqual(undefined, undefined)).toBe(true)
// })
//
// test("compare undefined to object", () => {
//   expect(isEqual(undefined, {})).toBe(false)
// })
//
// test("compare true to true", () => {
//   expect(isEqual(true, true)).toBe(true)
// })
//
// test("compare true to false", () => {
//   expect(isEqual(true, false)).toBe(false)
// })
//
// test("compare identical dates", () => {
//   expect(isEqual(new Date("2024-01-01"), new Date("2024-01-01"))).toBe(true)
// })
//
// test("compare different dates", () => {
//   expect(isEqual(new Date("2024-01-01"), new Date("2024-01-02"))).toBe(false)
// })
//
// test("compare objects with identical functions", () => {
//   const func = () => {
//   }
//   expect(isEqual({ a: func }, { a: func })).toBe(true)
// })
//
// test("compare objects with different functions", () => {
//   expect(isEqual({
//     a: () => {
//     },
//   }, {
//     a: () => {
//     },
//   })).toBe(false)
// })
//
// test("compare array to object", () => {
//   expect(isEqual([1, 2, 3], { 0: 1, 1: 2, 2: 3 })).toBe(false)
// })
//
// test("compare number to string", () => {
//   expect(isEqual(123, "123")).toBe(false)
// })
//
// test("compare boolean to number", () => {
//   expect(isEqual(true, 1)).toBe(false)
// })
//
// test("compare identical mixed arrays", () => {
//   expect(isEqual([1, "two", { three: 3 }], [1, "two", { three: 3 }])).toBe(true)
// })
//
// test("compare different mixed arrays", () => {
//   expect(isEqual([1, "two", { three: 3 }], [1, "two", { three: 4 }])).toBe(false)
// })
//
// test("compare object with extra property", () => {
//   expect(isEqual({ a: 1 }, { a: 1, b: 2 })).toBe(false)
// })
//
// test("compare identical empty objects", () => {
//   expect(isEqual({}, {})).toBe(true)
// })
//
// test("compare identical empty arrays", () => {
//   expect(isEqual([], [])).toBe(true)
// })
//
test("compare identical nested empty objects", () => {
  expect(isEqual({ a: {} }, { a: {} })).toBe(true)
})
//
// test("compare identical nested empty arrays", () => {
//   expect(isEqual([[]], [[]])).toBe(true)
// })
//
// test("compare object to null", () => {
//   expect(isEqual({ a: 1 }, null)).toBe(false)
// })
//
// test("compare array to null", () => {
//   expect(isEqual([1, 2, 3], null)).toBe(false)
// })
//
// test("compare identical numbers and strings", () => {
//   expect(isEqual(123, "123")).toBe(false)
// })
//
// test("compare nested objects with arrays", () => {
//   expect(isEqual({ a: [1, 2, 3] }, { a: [1, 2, 3] })).toBe(true)
// })
//
// test("compare nested objects with different arrays", () => {
//   expect(isEqual({ a: [1, 2, 3] }, { a: [1, 2, 4] })).toBe(false)
// })
//
// test("compare arrays of objects", () => {
//   expect(isEqual([{ a: 1 }, { b: 2 }], [{ a: 1 }, { b: 2 }])).toBe(true)
// })
//
// test("compare arrays of different objects", () => {
//   expect(isEqual([{ a: 1 }, { b: 2 }], [{ a: 1 }, { b: 3 }])).toBe(false)
// })
//
// test("compare nested objects with different structures", () => {
//   expect(isEqual({ a: { b: 1, c: 2 } }, { a: { b: 1 } })).toBe(false)
// })
//
// test("compare objects with different keys but same values", () => {
//   expect(isEqual({ a: 1 }, { b: 1 })).toBe(false)
// })
//
// test("compare arrays with different element types", () => {
//   expect(isEqual([1, "two", 3], [1, 2, 3])).toBe(false)
// })
//
// test("compare nested arrays with different lengths", () => {
//   expect(isEqual([[1, 2], [3]], [[1, 2], [3, 4]])).toBe(false)
// })
//
// test("compare identical objects with different key orders", () => {
//   expect(isEqual({ a: 1, b: 2 }, { b: 2, a: 1 })).toBe(true)
// })
//
// test("compare different nested objects with same key order", () => {
//   expect(isEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } })).toBe(false)
// })
//
// test("compare identical objects with symbols", () => {
//   const sym = Symbol()
//   expect(isEqual({ [sym]: 1 }, { [sym]: 1 })).toBe(true)
// })
//
// test("compare different objects with symbols", () => {
//   const sym1 = Symbol()
//   const sym2 = Symbol()
//   expect(isEqual({ [sym1]: 1 }, { [sym2]: 1 })).toBe(false)
// })
//
// test("compare objects with different symbol and string keys", () => {
//   const sym = Symbol()
//   expect(isEqual({ [sym]: 1 }, { a: 1 })).toBe(false)
// })
//
// test("compare identical sets", () => {
//   expect(isEqual(new Set([1, 2, 3]), new Set([1, 2, 3]))).toBe(true)
// })
//
// test("compare different sets", () => {
//   expect(isEqual(new Set([1, 2, 3]), new Set([1, 2, 4]))).toBe(false)
// })
//
// test("compare identical maps", () => {
//   expect(isEqual(new Map([[1, "a"], [2, "b"]]), new Map([[1, "a"], [2, "b"]]))).toBe(true)
// })
//
// test("compare different maps", () => {
//   expect(isEqual(new Map([[1, "a"], [2, "b"]]), new Map([[1, "a"], [2, "c"]]))).toBe(false)
// })
//
// test("compare map to object", () => {
//   expect(isEqual(new Map([[1, "a"], [2, "b"]]), { 1: "a", 2: "b" })).toBe(false)
// })
//
// test("compare set to array", () => {
//   expect(isEqual(new Set([1, 2, 3]), [1, 2, 3])).toBe(false)
// })
//
// test("compare identical dates with different times", () => {
//   expect(isEqual(new Date("2024-01-01T00:00:00"), new Date("2024-01-01T12:00:00"))).toBe(false)
// })
//
// test("compare objects with functions returning the same value", () => {
//   expect(isEqual({ a: () => 1 }, { a: () => 1 })).toBe(false)
// })
//
// test("compare identical objects with nested arrays", () => {
//   expect(isEqual({ a: [1, { b: 2 }] }, { a: [1, { b: 2 }] })).toBe(true)
// })
//
// test("compare different objects with nested arrays", () => {
//   expect(isEqual({ a: [1, { b: 2 }] }, { a: [1, { b: 3 }] })).toBe(false)
// })
//
// test("compare identical objects with multiple data types", () => {
//   expect(isEqual({ a: 1, b: "string", c: true }, { a: 1, b: "string", c: true })).toBe(true)
// })
//
// test("compare different objects with multiple data types", () => {
//   expect(isEqual({ a: 1, b: "string", c: true }, { a: 1, b: "string", c: false })).toBe(false)
// })
//
// test("compare objects with identical NaN values", () => {
//   expect(isEqual({ a: NaN }, { a: NaN })).toBe(true)
// })
//
// test("compare objects with NaN and number", () => {
//   expect(isEqual({ a: NaN }, { a: 1 })).toBe(false)
// })
//
// test("compare arrays with identical NaN values", () => {
//   expect(isEqual([NaN], [NaN])).toBe(true)
// })
//
// test("compare arrays with NaN and number", () => {
//   expect(isEqual([NaN], [1])).toBe(false)
// })
//
// test("compare identical arrays with nested empty objects", () => {
//   expect(isEqual([{ a: {} }], [{ a: {} }])).toBe(true)
// })
//
// test("compare different arrays with nested empty objects", () => {
//   expect(isEqual([{ a: {} }], [{ a: { b: 1 } }])).toBe(false)
// })
//
// test("compare identical arrays with nested empty arrays", () => {
//   expect(isEqual([[[]]], [[[]]])).toBe(true)
// })
//
// test("compare different arrays with nested empty arrays", () => {
//   expect(isEqual([[[]]], [[[1]]])).toBe(false)
// })
//
// test("compare objects with undefined values", () => {
//   expect(isEqual({ a: undefined }, { a: undefined })).toBe(true)
// })
//
// test("compare objects with undefined and missing key", () => {
//   expect(isEqual({ a: undefined }, {})).toBe(false)
// })
//
// test("compare objects with identical null values", () => {
//   expect(isEqual({ a: null }, { a: null })).toBe(true)
// })
//
// test("compare objects with null and undefined", () => {
//   expect(isEqual({ a: null }, { a: undefined })).toBe(false)
// })
//
// test("compare objects with identical symbols", () => {
//   const sym = Symbol()
//   expect(isEqual({ [sym]: 1 }, { [sym]: 1 })).toBe(true)
// })
//
// test("compare different objects with identical symbols", () => {
//   const sym = Symbol()
//   expect(isEqual({ [sym]: 1 }, { [sym]: 2 })).toBe(false)
// })
//
// test("compare arrays with undefined values", () => {
//   expect(isEqual([undefined], [undefined])).toBe(true)
// })
//
// test("compare arrays with undefined and missing value", () => {
//   expect(isEqual([undefined], [])).toBe(false)
// })
//
// test("compare arrays with null values", () => {
//   expect(isEqual([null], [null])).toBe(true)
// })
//
// test("compare arrays with null and undefined", () => {
//   expect(isEqual([null], [undefined])).toBe(false)
// })
//
// test("compare objects with identical functions with different implementations", () => {
//   expect(isEqual({ a: () => 1 }, { a: () => 2 })).toBe(false)
// })
//
// test("compare arrays with identical functions", () => {
//   const func = () => {
//   }
//   expect(isEqual([func], [func])).toBe(true)
// })
//
// test("compare arrays with different functions", () => {
//   expect(isEqual([() => {
//   }], [() => {
//   }])).toBe(false)
// })
//
// test("compare objects with nested identical functions", () => {
//   const func = () => {
//   }
//   expect(isEqual({ a: { b: func } }, { a: { b: func } })).toBe(true)
// })
//
// test("compare objects with nested different functions", () => {
//   expect(isEqual({
//     a: {
//       b: () => {
//       },
//     },
//   }, {
//     a: {
//       b: () => {
//       },
//     },
//   })).toBe(false)
// })
//
// test("compare objects with identical functions returning objects", () => {
//   const func = () => ({})
//   expect(isEqual({ a: func }, { a: func })).toBe(true)
// })
//
// test("compare objects with different functions returning objects", () => {
//   expect(isEqual({ a: () => ({}) }, { a: () => ({}) })).toBe(true)
// })

// test("compare objects with identical async functions", () => {
//   const func = async () => {
//   }
//   expect(isEqual({ a: func }, { a: func })).toBe(true)
// })

test("compare objects with different async functions", () => {
  const result = isEqual(
    {
      a: async () => {},
    },
    {
      a: async () => {},
    },
  )
  expect(result).toBe(true)
})

// test("compare objects with identical generators", () => {
//   const func = function* () {
//   }
//   expect(isEqual({ a: func }, { a: func })).toBe(true)
// })
//
// test("compare objects with different generators", () => {
//   expect(isEqual({
//     a: function* () {
//     },
//   }, {
//     a: function* () {
//     },
//   })).toBe(false)
// })
