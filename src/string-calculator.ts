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
      if (delimiter.startsWith("[") && delimiter.endsWith("]")) {
        delimiter = delimiter.slice(1, -1);
      }
      numbersStr = numbers.substring(firstNewLine + 1);
    }

    const normalizedInput = numbersStr.replace(/\n/g, delimiter);
    const nums = normalizedInput.split(delimiter).map((num) => parseInt(num));

    const negative = nums.filter((n) => n < 0);
    if (negative.length > 0) {
      throw new Error(`negatives not allowed: ${negative.join(",")}`);
    }

    return nums.filter((num) => num <= 1000).reduce((sum, num) => sum + num, 0);
  }
}
