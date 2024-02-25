// For .. of loops
// The for..of loop iterates over the values of an iterable object. An iterable is any value that can be iterated upon,

const ages = [12, 13, 14, 15];
for (age of ages) {
  console.log(age);
}


// for ... in
let person = { name: "John", age: 30 };
for (key in person){
    console.log(key)
    console.log(person[key]);
}
