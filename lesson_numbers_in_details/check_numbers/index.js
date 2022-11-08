function getFiniteNumbers(arr) {
  return arr.filter((num) => Number.isFinite(num));
}
function getFiniteNumbersV2(arr) {
  return arr.filter((num) => isFinite(num));
}
function getNaN(arr) {
  return arr.filter((num) => Number.isNaN(num));
}
function getNaNV2(arr) {
  return arr.filter((num) => isNaN(num));
}
function getIntegers(arr) {
  return arr.filter((num) => Number.isInteger(num));
}

console.log(getFiniteNumbers([3.33, 3, Infinity, 9, NaN]));
console.log(getFiniteNumbersV2([3.33, Infinity, 9, NaN]));
console.log(getNaN([3.33, "6", "text", undefined, null, 9, NaN]));
console.log(getNaNV2([3.33, "6", "text", undefined, null, 9, 6.12]));
console.log(getIntegers([3.33, "6", "text", undefined, null, 9, 6.12]));
