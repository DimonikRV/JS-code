const getMinSquaredNumber = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  const absArr = arr.map((num) => Math.abs(num));
  const minNum = Math.min(...absArr);
  return minNum ** 2;
};
export default getMinSquaredNumber;
