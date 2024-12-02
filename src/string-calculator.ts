export class StringCalculator {
  add(numbers: string): number {
    if (numbers === "") {
      return 0;
    }
    if (!numbers.includes(",")) {
      return parseInt(numbers);
    }
    const normalizedInput = numbers.replace(/\n/g, ",");
    return normalizedInput
      .split(",")
      .map((num) => parseInt(num))
      .reduce((sum, num) => sum + num, 0);
  }
}
