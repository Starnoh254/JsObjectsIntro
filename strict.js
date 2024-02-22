let x = 10;
console.log(x); // Output: 10

function foo() {
  y = 20; // No error, y becomes a global variable
}
foo();
console.log(y); // Output: 20

// strict mode

("use strict");

let a = 10;
console.log(a); // Output: 10

function foo() {
  "use strict";
  b = 20; // No error, y becomes a global variable
}
foo();
console.log(b); // Output: 20
