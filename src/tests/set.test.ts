import { set } from "../index"

const students = { name: "Lam Nguyen" }

test("set value", () => {
  set(students, "name", "dds")
  expect(students).toStrictEqual({ name: "dds" })
})
