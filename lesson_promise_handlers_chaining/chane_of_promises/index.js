export const asyncCalculator = numbr =>
  new Promise(resolve => {
    setTimeout(() => {
      console.log(`Initial value:${numbr}`);
      resolve(numbr);
    }, 500);
  })
    .then(
      numbr =>
        new Promise(resolve => {
          setTimeout(() => {
            const squaredNum = numbr ** 2;
            console.log(`Squared value:${squaredNum}`);
            resolve(squaredNum);
          }, 500);
        }),
    )
    .then(numbr => {
      const result = numbr * 2;
      console.log(`Doubled value:${result}`);
      return result;
    });

asyncCalculator(5);
