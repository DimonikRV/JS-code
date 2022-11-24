const user = {
  firstName: "John",
  lastName: "Doe",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(fullName) {
    const arr = fullName.split(" ");
    const [firstName, lastName] = arr;
    this.firstName = firstName;
    this.lastName = lastName;
  },
};
console.log(user.getFullName());
console.log(user.setFullName("John Doe"));
