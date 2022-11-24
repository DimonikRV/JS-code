/* eslint-disable max-classes-per-file */

class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}

class UserRepository {
  constructor(users) {
    this._users = Object.freeze(users);
  }
  get users() {
    return this._users;
  }

  getUserNames() {
    return this._users.map((user) => user._name);
  }

  getUserIds() {
    return this._users.map((user) => user._id);
  }

  getUserNameById(userId) {
    const user = this._users.find((user) => user._id === userId);
    const { name } = user;
    return name;
  }
}
const newUserRepository = [
  { _id: "1", _name: "Tom", _sessionId: "session-id" },
  { _id: "2", _name: "Jack", _sessionId: "session-id" },
].find((user) => user._id === "1");
const { name } = newUserRepository;

console.log(newUserRepository);
console.log(name);
// console.log(new UserRepository(newUserRepository));
// console.log(newUserRepository.getUserNames());
// examples
const user = new User("1", "Tom", "session-id");
const user1 = new User("1", "Jack", "session-id");

// console.log(user);
// console.log(user1);
// получить свойства можем
console.log(user.id); // ===> '1'
console.log(user.name); // ===> 'Tom'
console.log(user.sessionId); // ===> 'session-id'

// но изменить эти свойства нельзя
// user.name = 'Bob'; // пытаемся изменить старое значение
// console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует
