// Classes in Js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  talk() {
    return `Hello , my name is ${this.name} and I am ${this.age} years old`;
  }
}

const stan = new Person("Stan", 20);

console.log(stan.talk());

class Employee extends Person {
  constructor(name, age, proffession) {
    super(name, age);
    this.proffession = proffession;
  }

  introduction() {
    return `
        ${super.talk()}
         I work as a ${this.proffession}
         `;
  }
}

const john = new Employee("John", 25, "Software Engineer");
console.log(john.talk())
console.log(john.introduction());
