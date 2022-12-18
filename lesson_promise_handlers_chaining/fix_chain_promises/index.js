const successPromise = new Promise(resolve => {
  resolve(32);
});

/*
 * исправь цепочку промисов, чтобы в последнем обработчике вывелось нужное число
 */

const myPromice = successPromise
  .then(number => {
    const halfNumber = number / 2;
    console.log(halfNumber);
    return halfNumber;
  })
  .then(number => {
    /* fix this handler */
    const squaredNumber = number * number;
    console.log(squaredNumber);
    return squaredNumber;
  })
  .then(result => {
    console.log(result); // 256
    return result;
  });

/*
 * исправь цепочку промисов, чтобы в последнем обработчике вывелось нужное число
 */

myPromice
  .then(number => {
    /* fix this handler */
    return number + 64;
  })
  .then(result => {
    console.log(result); // 320
  });

console.log(
  '!!! Обрати внимание, что этот текст вывелся самым первым. Ведь это синхронный код, а промисы - асинхронны !!!',
);
