export const getDiff = (startDate, endDate) => {
  let result;
  const diffDate = Math.abs(new Date(startDate).getTime() - new Date(endDate).getTime());
  const daysData = Math.trunc(diffDate / 86400000);

  const hoursData = Math.trunc((diffDate - daysData) / 3600000);

  const minutesData = Math.trunc((daysData - hoursData) / 60000);

  const secondsData = Math.trunc((hoursData - minutesData) / 1000);
  result = `${daysData}d ${hoursData}h ${minutesData}m ${secondsData}s`;

  return result;
};
getDiff(
  new Date(Date.UTC(2019, 10, 24, 20, 50, 34, 44)),
  new Date(Date.UTC(2019, 1, 22, 17, 52, 18)),
);
