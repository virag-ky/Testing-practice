const stringLength = require("./stringLength.js");

test("returns 5 as the length of string", () => {
  expect(stringLength("hello")).toBe(5);
});

test("throws an error because the length is less than 1", () => {
  expect(stringLength("he")).toBeGreaterThan(1);
});

test("throws an error because the length is more than 10", () => {
  expect(stringLength("world")).toBeLessThan(10);
});
