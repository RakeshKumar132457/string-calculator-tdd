export class StringCalculator {
  add(numbers: string): number {
    if (numbers === "") {
      return 0;
    }
    if (!numbers.includes(",") && !numbers.startsWith("//")) {
      return parseInt(numbers);
    }

    let delimiter = ",";
    let numbersStr = numbers;

    if (numbers.startsWith("//")) {
      const firstNewLine = numbers.indexOf("\n");
      delimiter = numbers.substring(2, firstNewLine);
      numbersStr = numbers.substring(firstNewLine + 1);
    }

    const normalizedInput = numbersStr.replace(/\n/g, delimiter);
    return normalizedInput
      .split(delimiter)
      .map((num) => parseInt(num))
      .reduce((sum, num) => sum + num, 0);
  }
}
