const shmoment = InitialDate => {
  let newDate = InitialDate;
  const addYear = (InitialDate, years) => {
    const oldDate = InitialDate.getFullYear();
    newDate = new Date(InitialDate.setFullYear(oldDate + years)).toString();
  };
  const addMonth = (InitialDate, months) => {
    const oldDate = InitialDate.getMonth();
    newDate = new Date(InitialDate.setMonth(oldDate + months)).toString();
  };
  const addDay = (InitialDate, days) => {
    const oldDate = InitialDate.getDate();
    newDate = new Date(InitialDate.setDate(oldDate + days)).toString();
  };
  const addHours = (InitialDate, hours) => {
    const oldDate = InitialDate.getHours();
    newDate = new Date(InitialDate.setHours(oldDate + hours)).toString();
  };
  const addMinutes = (InitialDate, minutes) => {
    const oldDate = InitialDate.getMinutes();
    newDate = new Date(InitialDate.setMinutes(oldDate + minutes)).toString();
  };
  const addSeconds = (InitialDate, seconds) => {
    const oldDate = InitialDate.getSeconds();
    newDate = new Date(InitialDate.setSeconds(oldDate + seconds)).toString();
  };
  const addMilliseconds = (InitialDate, milliseconds) => {
    const oldDate = InitialDate.getMilliseconds();
    newDate = new Date(InitialDate.setMilliseconds(oldDate + milliseconds)).toString();
  };
  const result = () => {
    return newDate;
  };
  const addObj = {
    years: addYear,
    months: addMonth,
    days: addDay,
    hours: addHours,
    minutes: addMinutes,
    seconds: addSeconds,
    milliseconds: addMilliseconds,
  };

  const compose =
    (...funcs) =>
    (key, value) => {
      const rightFunc = funcs.find(addObj[key]);
      return rightFunc(value);
    };

  const add = compose(addYear, addMonth, addDay, addHours, addMinutes, addSeconds, addMilliseconds);

  return {
    add,
    result,
  };
};

console.log(shmoment(new Date(2020, 0, 7, 17, 17)).add('minutes', 2));
