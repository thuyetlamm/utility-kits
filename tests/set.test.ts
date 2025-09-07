import { set } from "../src/index"

const students = { name: "Lam Nguyen" }

test("set value", () => {
  set(students, "name", "dds")
  expect(students).toStrictEqual({ name: "dds" })
})
