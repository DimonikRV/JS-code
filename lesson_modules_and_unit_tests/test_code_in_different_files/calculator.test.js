import sum, { getSquaredArray, getOddNumbers } from "./calculator.js";

it("get new array with squared numbers", () => {
  const result = getSquaredArray([1, 2, 3, 4, 5, 6]);

  expect(result).toEqual([1, 4, 9, 16, 25, 36]);
});
it("get new array with odd numbers", () => {
  const result = getOddNumbers([1, 2, 3, 4, 5, 6]);

  expect(result).toEqual([1, 3, 5]);
});
it("get sum of numbers", () => {
  const result = sum(3, 4);

  expect(result).toEqual(7);
});
