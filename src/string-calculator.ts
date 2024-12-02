export class StringCalculator {
  add(numbers: string): number {
    if (numbers === "") {
      return 0;
    }
    if (!numbers.includes(",")) {
      return parseInt(numbers);
    }
    const nums = numbers.split(",");
    return parseInt(nums[0]) + parseInt(nums[1]);
  }
}
