export const dayOfWeek = (date, days) => {
  const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];
  const day = new Date(date).getDate();
  const dayInFuture = new Date(date).setDate(day + days);
  return daysOfWeek[new Date(dayInFuture).getDay()];
};
console.log(dayOfWeek(new Date(2019, 0, 1), 14));
