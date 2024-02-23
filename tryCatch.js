function tryCatch (divider){
    try {
        if (divider === 0){
            throw  new Error('Cannot divide by zero');
        }
    }
    catch(error){
        console.log(error.message)
    }
}


tryCatch(0)