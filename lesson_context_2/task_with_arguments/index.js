function sumOfSquares() {
  return [...arguments].reduce((acc, el) => acc + el ** 2, 0);
}

console.log(sumOfSquares(2, 3, 45, 6, 7, 8));
