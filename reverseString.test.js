const reverseString = require("./reverseString.js");

test("returns olleh", () => {
  expect(reverseString("hello")).toBe("olleh");
});
