class Dog {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  fn() {
    return "FN";
  }

  static sfn() {
    return "SFN";
  }
}
const lucy = new Dog("Lucy");
const { sfn } = Dog;
const { name: aa, fn: fnnn, getName } = lucy;

console.log(lucy.sfn)
//console.log(aa, sfn(), fnnn(), getName); // ?
//getName(); // ?
