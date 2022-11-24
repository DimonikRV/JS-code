let result = 0;
const add = (num) => {
  result += num;
};
const decrease = (num) => {
  result -= num;
};
const reset = () => {
  result = 0;
};
const getMemo = () => {
  return result;
};

const calculator = () => {
  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};

const calc = calculator();
calc.add(5);
calc.decrease(4);
calc.getMemo();
console.log(calc.getMemo());
