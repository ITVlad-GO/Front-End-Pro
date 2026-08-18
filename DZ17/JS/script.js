class Calc {
  constructor() {
    this.history = [];
  }

  add(firstNum, secondNum) {
    const result = firstNum + secondNum;
    this.history.push({
      name: "add",
      firstNumber: firstNum,
      secondNumber: secondNum,
      result,
    });
    return result;
  }

  subtract(firstNum, secondNum) {
    const result = firstNum - secondNum;
    this.history.push({
      name: "subtract",
      firstNumber: firstNum,
      secondNumber: secondNum,
      result,
    });
    return result;
  }

  multiply(firstNum, secondNum) {
    const result = firstNum * secondNum;
    this.history.push({
      name: "multiply",
      firstNumber: firstNum,
      secondNumber: secondNum,
      result,
    });
    return result;
  }
}

const calc = new Calc();

console.log(calc.multiply(2, 5));
console.log(calc.subtract(10, 5));
console.log(calc.add(2, 5));

console.log(calc.history);
