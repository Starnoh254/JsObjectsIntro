// syntatic sugar for js constructor / prototype 

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return `My name is ${this.firstName} ${this.lastName}`;
  }
}

const jane = new Person("Jane", "Doe");
const john = new Person("John", "Doe");

console.log(jane.getFullName());
console.log(john.getFullName());
