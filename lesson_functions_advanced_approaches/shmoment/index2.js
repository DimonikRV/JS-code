const shmoment = InitialDate => {
  let result = InitialDate;

  const getMethodsNames = {
    years: 'getFullYear',
    months: 'getMonth',
    days: 'getDate',
    hours: 'getHours',
    minutes: 'getMinutes',
    seconds: 'getSeconds',
    milliseconds: 'getMilliseconds',
  };

  const setMethodsNames = {
    years: 'setFullYear',
    months: 'setMonth',
    days: 'setDate',
    hours: 'setHours',
    minutes: 'setMinutes',
    seconds: 'setSeconds',
    milliseconds: 'setMilliseconds',
  };
  const calculator = {
    add(name, value) {
      const currentUnitValue = result[getMethodsNames[name]]();
      result = new Date(result[setMethodsNames[name](currentUnitValue + value)]);
      return this;
    },
    subtract(name, value) {
      const currentUnitValue = result[getMethodsNames[name]]();
      result = new Date(result[setMethodsNames[name](currentUnitValue - value)]);
      return this;
    },
    result() {
      return result;
    },
  };
  return calculator;
};
console.log(
  shmoment(new Date(2020, 0, 7, 17, 17))
    .add('minutes', 2)
    .add('days', 8)
    .subtract('years', 1)
    .result(),
);
