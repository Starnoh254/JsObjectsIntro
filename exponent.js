/* fuction to get the result of powering a number 
For example , exponent(2,3) gives you 8 as the result */


function exponent (base , exp){
    if (exp === 0) return 1
    let result = base;
    for(let i = 1 ; i < exp; i ++){
        result = result * base
        // console.log(i)
    }
    return result;
}

console.log(exponent(7,2))


