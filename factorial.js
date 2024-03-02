function factorial(n){
    if (n < 0) return 'The input should be a non negative number'
    if (n === 0 || n === 1) return 1
    else{
        return n * factorial(n-1)
    }
}

console.log(factorial(10))