function calculator(a, b) {
  switch (this.operation) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "/":
      return a / b;
    case "*":
      return a * b;
    default:
      return NaN;
  }
}

const multiplier = calculator.bind({
  operation: "*",
});
/*
 * Ф-ция multiplier должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 2 числа и возвращать из произведение
 */

// put your code here

/*
 * Ф-ция summator должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 2 числа и возвращать из сумму
 */

// put your code
const summator = calculator.bind({
  operation: "+",
});

/*
 * Ф-ция twice должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 1 число и возвращать это число умноженное на 2
 */

// put your code here

const twice = calculator.bind(
  {
    operation: "*",
  },
  2
);
const arr = toString([1, 2, 3, 4, 5, 6]);
console.log(arr);
