const user = {
  firstMame: "John",
  lastName: "Doe",
  getFullName() {
    return `${this.firstMame} ${this.lastName}`;
  },
};

console.log(user.getFullName());
