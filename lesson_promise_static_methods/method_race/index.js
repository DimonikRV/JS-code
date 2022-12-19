const getRandomNumber = (from, to) => {
  return from + Math.random() * (to - from);
};

const request = url =>
  new Promise(resolve => {
    const randomDelay = getRandomNumber(1000, 3000);
    setTimeout(
      () =>
        resolve({
          userData: {
            name: 'Tom',
            age: 17,
          },
          source: url,
        }),
      randomDelay,
    );
  });

// export const getUserASAP = userId =>
//   new Promise(resolve => {

//     );
//   });
