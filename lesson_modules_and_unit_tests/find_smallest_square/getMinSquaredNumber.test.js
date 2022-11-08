import getMinSquaredNumber from "./getMinSquaredNumber.js";

console.log(getMinSquaredNumber([]));

it("should return null if arr.length === 0", () => {
  const result = getMinSquaredNumber([]);

  expect(result).toEqual(null);
});
it("should return null if !Array.isArray", () => {
  const result = getMinSquaredNumber("");

  expect(result).toEqual(null);
});

it("should return MinSquaredNumber", () => {
  const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);

  expect(result).toEqual(4);
});
