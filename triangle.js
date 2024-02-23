function triangle (numberOfSides){
    let spaces = numberOfSides - 1;
    let asteriks = numberOfSides - spaces;
    for (let i = 1; i <= numberOfSides; i ++){
        console.log(' '.repeat(spaces) + '*'.repeat(asteriks));
        spaces --;
        asteriks += 2;
        if (i == numberOfSides){
            console.log(' '.repeat(numberOfSides - 1) + "||")
        }
    }
    console.log("  MERRY CHRISTMAS")
}

triangle(9)