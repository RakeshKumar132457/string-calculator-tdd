export class StringCalculator {
  add(numbers: string): number {
    if (numbers === "") {
      return 0;
    }
    if (!numbers.includes(",") && !numbers.startsWith("//")) {
      const num = parseInt(numbers);
      if (num < 0) {
        throw new Error(`negatives not allowed: ${num}`);
      }
      return num;
    }

    let delimiter = ",";
    let numbersStr = numbers;

    if (numbers.startsWith("//")) {
      const firstNewLine = numbers.indexOf("\n");
      delimiter = numbers.substring(2, firstNewLine);
      numbersStr = numbers.substring(firstNewLine + 1);
    }

    const normalizedInput = numbersStr.replace(/\n/g, delimiter);
    const nums = normalizedInput.split(delimiter).map((num) => parseInt(num));

    const negative = nums.find((n) => n < 0);
    if (negative !== undefined) {
      throw new Error(`negatives not allowed: ${negative}`);
    }

    return nums.reduce((sum, num) => sum + num, 0);
  }
}
