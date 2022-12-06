export const dayOfWeek = (date, days) => {
  const daysOfWeek = [Sun, Mon, Tue, Wed, Thu, Fri, Sur];
  const day = new Date(date).getDate();
  const dayInFuture = new Date(date).setDate(day + days);
  return daysOfWeek[new Date(dayInFuture).getDay()];
};
