const superRound = (num, prec) => {
  return [
    Math.floor(num * 10 ** prec) / 10 ** prec,
    Math.trunc(num * 10 ** prec) / 10 ** prec,
    Math.ceil(num * 10 ** prec) / 10 ** prec,
    Math.round(num * 10 ** prec) / 10 ** prec,
    Number(num.toFixed(prec)),
  ]; // put your code here
};

// examples
superRound(11.12556, 2); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
superRound(6.113, 3); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
console.log(superRound(11.12556, 2));
console.log(superRound(6.1143, 3));
