it("17 is equal 17", () => {
  expect(17).toEqual(17);
});

it("18 is not equal 17", () => {
  expect(18).not.toEqual(17);
});

const getEvenNumbers = (arr) => arr.filter((num) => num % 2 === 0);

it("get newArray with even numbers", () => {
  const result = getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  expect(result).toEqual([2, 4, 6, 8]);
});
