const createCalculator = () => {
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

  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};

const calc1 = createCalculator();
const calc2 = createCalculator();

calc1().add(4);
calc1().decrease(2);
console.log(calc1().getMemo());

calc2().add(7);
calc2().reset();
console.log(calc2().getMemo());
