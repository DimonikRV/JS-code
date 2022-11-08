function getTotalPrice(arr) {
  return "$" + Math.floor(arr.reduce((sum, num) => sum + num, 0) * 100) / 100;
}

console.log(getTotalPrice([777, 3.6, 1, 0, 0.236]));
