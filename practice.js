// write a program that finds if a person is ready to vote

function canVote(age) {
  return age > 18 ? true : false;
}

if (canVote(2)) {
  console.log("You are eligible to vote");
} else {
  console.log("Sorry, you are not yet old enough to vote");
}

// program that takes an array of numbers as input and returns the sum of all the numbers in the array

function addNumbers (arr){
    let sum = 0;
    for(num in arr){
        sum += arr[num];
    }    
    return sum;
}

console.log(addNumbers([30,40,90]));
