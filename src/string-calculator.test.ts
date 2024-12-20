import { StringCalculator } from "./string-calculator";

describe("String Calculator", () => {
  let calculator: StringCalculator;
  beforeEach(() => {
    calculator = new StringCalculator();
  });

  it("should return 0 for empty string", () => {
    expect(calculator.calculate("")).toBe(0);
  });

  it("should return the number when single number is passed", () => {
    expect(calculator.calculate("1")).toBe(1);
  });

  it("should return sum when two numbers are passed", () => {
    expect(calculator.calculate("1,2")).toBe(3);
  });

  it("should handle an unknown amount of numbers", () => {
    expect(calculator.calculate("1,2,3,4,5")).toBe(15);
  });

  it("should handle newlines between numbers", () => {
    expect(calculator.calculate("1\n2,3")).toBe(6);
  });

  it("should support different delimiters", () => {
    expect(calculator.calculate("//;\n1;2")).toBe(3);
  });

  it("should throw an exception when negative numbers are used", () => {
    expect(() => calculator.calculate("-1,2")).toThrow("negatives not allowed: -1");
  });

  it("should thorw an exception with all the negative numbers in the message", () => {
    expect(() => calculator.calculate("-1,-2,3,-4")).toThrow(
      "negatives not allowed: -1,-2,-4"
    );
  });

  it("should ignore numbers greater than 1000", () => {
    expect(calculator.calculate("2,1001")).toBe(2);
  });

  it("should support delimiters of any length", () => {
    expect(calculator.calculate("//[***]\n1***2***3")).toBe(6);
  });

  it("should support multiple delimiters", () => {
    expect(calculator.calculate("//[*][%]\n1*2%3")).toBe(6);
  });
  
  it("should support multiple delimiters with varying lengths", () => {
    expect(calculator.calculate("//[***][#][%]\n1***2#3%4")).toBe(10);
  });

  it("should return product when the delimiter is asterisk (*)", () => {
    expect(calculator.calculate("//*\n2*3")).toBe(6);
  }) 
});
