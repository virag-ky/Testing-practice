const capitalizeString = require("./capitalizeString.js");

test("capitalize the first character of a string", () => {
  expect(capitalizeString("hello")).toBe("Hello");
});
