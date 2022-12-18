export const asyncCalculator = number =>
  new Promise(resolve => {
    setTimeout(() => {
      console.log(`Initial value:${number}`);
      resolve(number);
    }, 500);
  })
    .then(
      number =>
        new Promise(resolve => {
          setTimeout(() => {
            const squaredNum = number ** 2;
            console.log(`Squared value:${squaredNum}`);
            resolve(squaredNum);
          }, 500);
        }),
    )
    .then(number => {
      const result = number * 2;
      console.log(`Doubled value:${result}`);
      return result;
    });

asyncCalculator(5);
