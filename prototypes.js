const person = {
  greet() {
    return "Hello , my name is " + this.name;
  },
};

const john = Object.create(person);
john.name = "John";
console.log(john.greet()); // Hello, my name is John

const obj1 = Object(42);
console.log(obj1.constructor === Number); // true

const prototype = Object.getPrototypeOf(String)
console.log(john)

const obj10 = {}
console.log(Object.getPrototypeOf(obj10)); // false
