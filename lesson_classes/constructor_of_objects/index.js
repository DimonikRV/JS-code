class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(age) {
    if (age < 0) {
      return false;
    }
    this.age = age;
    if (age >= 25) {
      console.log(`New photo request was sent for ${this.name}`);
    }

    return age;
  }

  static createEmpty() {
    const user = {};
    user.name = "";
    user.age = null;
    return user;
  }
}
const user1 = new User("John", 12);
user1.setAge(25);
console.log(user1);
const emptyUser = User.createEmpty();
console.log(emptyUser);
