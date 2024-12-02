export class StringCalculator {
  add(number: string): number {
    if(number === "") {
      return 0
    }
    return parseInt(number);
  }
}
