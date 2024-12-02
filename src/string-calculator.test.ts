import { StringCalculator } from "./string-calculator";

describe("String Calculator", () => {
  let calculator: StringCalculator;
  beforeEach(() => {
    calculator = new StringCalculator();
  });

  it("should return 0 for empty string", () => {
    expect(calculator.add("")).toBe(0);
  });

  it("should return the number when single number is passed", () => {
    expect(calculator.add("1")).toBe(1);
  });

  it("should return sum when two numbers are passed"),
    () => {
      expect(calculator.add("1,2")).toBe(3);
    };
});
