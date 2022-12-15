'use strict';

/**
 * @param {number} count
 * @param {number} period
 * @return {undefined}
 */
export const pinger = (count, period) => {
  const pingTxt = 'Ping';
  console.log(pingTxt);
  let item = count - 1;
  const interval = setInterval(() => {
    if (item > 0) {
      item -= 1;
      console.log(pingTxt);
    } else {
      clearInterval(interval);
    }
  }, period);
};

// examples
pinger(5, 100); // makes 5 writes with 100 ms interval
pinger(7, 150); // makes 7 writes with 1500 ms interval
