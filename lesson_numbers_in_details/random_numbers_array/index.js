"use strict";

/**
 * @param {number} length
 * @param {number} from
 * @param {number} to
 * @return {number[]}
 */

// const getRandomNumbers = (length, from, to) => {
//   const newArr = [];
//   if (to - from < 1 || from > to) {
//     return null;
//   }
//   for (let i = 0; i < length; i += 1) {
//     newArr.push(Math.round(Math.random() * (to - from) + from));
//   }

//   return newArr;

// };
const getRandomNumbers = (length, from, to) => {
  if (Math.trunc(to) - Math.trunc(from) === 0 || from > to) {
    return null;
  }

  const randomArr = new Array(length)
    .fill()
    .map((num) =>
      Math.floor(
        Math.random() * (Math.floor(to) - Math.ceil(from)) + Math.floor(ceil)
      )
    );

  return randomArr;
};

// examples
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 2, 2, 2, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 3, 2, 3, 2]
console.log(getRandomNumbers(3, 2.4, 4.5)); // ==> [4, 3, 4]
console.log(getRandomNumbers(3, 1.9, 2.5)); // ==> [2, 2, 2]

console.log(getRandomNumbers(7, 1.4, 1.9)); // ==> null
console.log(getRandomNumbers(7, 2.11, 2.9)); // ==> null
console.log(getRandomNumbers(1, 2.5, 0.9)); // ==> null
console.log(getRandomNumbers(50, 90.5, 95));
