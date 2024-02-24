// Pure functions in JS 
let sheepCount = 0;

const  addSheep = (count) => {
    return count + 1
};

sheepCount = addSheep(sheepCount);
sheepCount = addSheep(sheepCount);
sheepCount = addSheep(sheepCount);
console.log(sheepCount);


// another example of pure function 
const addNumbers = (a, b) => a + b;

console.log(addNumbers(2,3));