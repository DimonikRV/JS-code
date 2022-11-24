const defer = (func, ms) => {
  return function () {
    setTimeout(() => func.call(this, ...arguments), ms);
  };
};

const user = {
  name: "John",
  sayHi() {
    console.log(`${this.name} you are right!`);
  },
};
// console.log(user.sayHi());
const newDefer = defer(user.sayHi, 2000);
newDefer();

// newDefer.call({ name: "Bob" });
