export const sum = value => {
  let result = 0;
  const recursion = value => {
    if (value === 0) return;
    result += value;
    recursion(value - 1);
  };
  recursion(value);
  return result;
};
