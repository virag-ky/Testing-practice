const { test, expect } = require("@jest/globals");
const Calculator = require("./calculator.js");

describe("addition", () => {
  const sum = new Calculator(2, 3);
  test("add two numbers", () => {
    expect(sum.add()).toBe(5);
  });

  const sum2 = new Calculator(-3, 2);
  test("add two numbers", () => {
    expect(sum2.add()).toBe(-1);
  });

  const sum3 = new Calculator("5", "2");
  test("add two strings", () => {
    expect(sum3.add()).toBe("52");
  });
});

describe("subtraction", () => {
  const result = new Calculator(5, 3);
  test("subtract two numbers", () => {
    expect(result.subtract()).toBe(2);
  });

  const result2 = new Calculator(-5, 4);
  test("subtract two numbers", () => {
    expect(result2.subtract()).toBe(-9);
  });

  const result3 = new Calculator(99, 99);
  test("subtract two numbers", () => {
    expect(result3.subtract()).toBe(0);
  });
});

describe("multiplication", () => {
  const result = new Calculator(5, 2);
  test("multiply two numbers", () => {
    expect(result.multiply()).toBe(10);
  });

  const result2 = new Calculator(-6, 2);
  test("multiply two numbers", () => {
    expect(result2.multiply()).toBe(-12);
  });

  const result3 = new Calculator(234, 983);
  test("multiply two numbers", () => {
    expect(result3.multiply()).toBe(230022);
  });
});

describe("division", () => {
  const product = new Calculator(10, 2);
  test("divide two numbers", () => {
    expect(product.divide()).toBe(5);
  });

  const product2 = new Calculator(-8, 4);
  test("divide two numbers", () => {
    expect(product2.divide()).toBe(-2);
  });

  const product3 = new Calculator(30, 5);
  test("divide two numbers", () => {
    expect(product3.divide()).toBe(6);
  });
});
