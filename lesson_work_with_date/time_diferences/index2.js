const getDiff = (startDate, endDate) => {
  let result;
  const diffDate = Math.abs(startDate - endDate);
  console.log(diffDate);
  const daysData = Math.trunc(diffDate / 86400000);
  console.log(daysData);
  const hoursData = new Date(diffDate).getUTCHours();
  console.log(hoursData);
  const minutesData = new Date(diffDate).getUTCMinutes();
  console.log(minutesData);
  const secondsData = new Date(diffDate).getUTCSeconds();
  console.log(minutesData);
  result = `${daysData}d ${hoursData}h ${minutesData}m ${secondsData}s`;

  return result;
};
getDiff(
  new Date(Date.UTC(2019, 10, 24, 20, 50, 34, 44)),
  new Date(Date.UTC(2019, 1, 22, 17, 52, 18)),
);
