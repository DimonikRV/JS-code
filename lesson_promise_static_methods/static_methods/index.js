const getOneValue = values => {
  values.filter(notIsNaN => !isNaN(notIsNaN)).reduce((acc, values) => acc + Number(values), 0);
};

export const asyncSum = (...asyncNumber) =>
  Promise.all(asyncNumber)
    .then(numbers => getOneValue(numbers))
    .catch(() => Promise.reject(new Error("Can't calculate")));
