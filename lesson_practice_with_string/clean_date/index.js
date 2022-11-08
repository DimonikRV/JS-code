function cleanTransactionsList(arr) {
  const cleanArr = arr
    .filter((el) => Number(String(el)))
    .map((num) => Number(String(num).trim()).toFixed(2));
  return cleanArr.map((num) => "$" + num);
}

console.log(cleanTransactionsList(["  1.9 ", "16.4", 17, " 1 dollar "]));
