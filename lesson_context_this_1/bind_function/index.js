function bind(func, context, ...arg1) {
  return function (...arg2) {
    return func.apply(context, [...arg1, ...arg2]);
  };
}

function sum(...arg) {
  return arg.concat(this.age, this.years);
}

const obj = {
  name: "John",
  lastName: "Doe",
  age: 18,
  years: 2003,
};
console.log(bind(sum, obj, 2, 3)());
