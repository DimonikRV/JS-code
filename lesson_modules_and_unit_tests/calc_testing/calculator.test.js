import { calc } from "./calculator.js";

it('Should make sum if "+"', () => {
  const result = calc("2 + 3");

  expect(result).toEqual("2 + 3 = 5");
});

it('Should minus if "-"', () => {
  const result = calc("2 - 3");

  expect(result).toEqual("2 - 3 = -1");
});

it('Should multiply if "*"', () => {
  const result = calc("2 * 3");

  expect(result).toEqual("2 * 3 = 6");
});
it('Should divide if "/"', () => {
  const result = calc("2 / 3");

  expect(result).toEqual("2 / 3 = 0.6666666666666666");
});

it("Should return null if !String", () => {
  const result = calc(5);

  expect(result).toEqual(null);
});
