export const delay = (delay, callback, context, ...arg) => {
  setTimeout(callback.bind(context, ...arg), delay);
};
