export const wallet = {
  transactions: [],
  getMax() {
    return Math.max.apply(null, this.transactions);
  },
  getMin() {
    return Math.min.apply(null, this.transactions);
  },
};
