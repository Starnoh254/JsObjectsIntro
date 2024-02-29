const person = {
  name: "Starnoh",
  greet() {
    console.log("Hello world");
  },
  getName() {
    return `My Name is ${this.name}`;
  },
};

person.greet();
console.log(person.getName());

// Using a constructor function

function Person(firstName, lastName) {
  if (!new.target) {
    throw new Error("The Person constructor must be called with new keyword");
  } else {
    console.log(new.target);
    this.firstName = firstName;
    this.lastName = lastName;
  }

  /*   Defining methods to the constructor function leads to memory inefficiency
   because each instance of Person will have its own copy of the method

  this.getFullName = function () {
    return ` Hello , my name is ${this.firstName} ${this.lastName}`;
  };
  */
}
// Instead  we use prototype so that all instances share the same version of the method
Person.prototype.getFullName = function () {
  return `Hello , my name is ${this.firstName} ${this.lastName}`;
};

const johnDoe = new Person("John", "Doe");

console.log(johnDoe);
console.log(johnDoe.firstName);
console.log(johnDoe.lastName);
console.log(johnDoe.getFullName());

try {
  const stanoJohn = Person("Starnoh", "John");
  console.log(stanoJohn);
  console.log(stanoJohn.firstName);
  console.log(stanoJohn.lastName);
  console.log(stanoJohn.getFullName());
} catch (err) {
  console.log(err.message);
}
