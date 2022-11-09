import { reverseString, withdraw, getAdults } from "./index.js";

it("should return null if !Array.isArray", () => {
  const result = reverseString("");

  expect(result).toEqual(null);
});

it("should return null if !Array.isArray", () => {
  const result = reverseString([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  expect(result).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1]);
});

it("initial array shouldn't changed", () => {
  const result = reverseString([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const initArr = result.reverse();
  expect(result).toEqual(initArr);
});
// ============================================================================================

it("should return  -1 if amount > balances[index]", () => {
  const result = withdraw(["Ann", "John", "User"], [1400, 87, -6], "User", 10);

  expect(result).toEqual(-1);
});

it('should return " balances[index] - amount " if "amount < balances[index]" ', () => {
  const result = withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50);

  expect(result).toEqual(37);
});
it('should return " balances[index] - amount " if "amount < balances[index]" ', () => {
  const result = withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50);

  expect(result).not.toEqual(87);
});
// =========================================================================================

it('should return  "{}" if empty obj', () => {
  const result = getAdults({});

  expect(result).toEqual({});
});

it("should return object with values >= 18", () => {
  const result = getAdults({ "John Doe": 19, Tom: 17, Bob: 18 });

  expect(result).toEqual({ "John Doe": 19, Bob: 18 });
});

it("Obj shouldn't be changed ", () => {
  const result = getAdults({ "John Doe": 19, Tom: 17, Bob: 18 });
  const obj = { "John Doe": 19, Tom: 17, Bob: 18 };
  expect(obj).toEqual(obj);
});
