export const delay = ms => {
  const delayPromise = new Promise(resolve => setTimeout(() => resolve(), ms));
  return delayPromise;
};

delay(3000).then(() => console.log('Done'));
