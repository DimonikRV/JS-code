function getOwnProps(obj) {
  const ownProps = [];
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop) && typeof obj[prop] !== "function") {
      ownProps.push(prop);
    }
  }
  return ownProps;
}

const ship = {
  name: "Argo",
  age: 17,
  hasVheels: false,
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    this.move();
  },
  stopMachine() {
    this.stop();
    console.log(`${this.name} lifting anchor down`);
  },
};
console.log(getOwnProps(ship));
