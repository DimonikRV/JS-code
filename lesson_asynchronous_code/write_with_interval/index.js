'use strict';

/**
 * @param {number} count
 * @param {number} period
 * @return {undefined}
 */
export const pinger = (count, period) => {
  const pingTxt = 'Ping';
  console.log(pingTxt);
  const interval = setInterval(() => console.log(pingTxt), period);
  let item = count;
};

// examples
pinger(5, 100); // makes 5 writes with 100 ms interval
pinger(7, 150); // makes 7 writes with 1500 ms interval
