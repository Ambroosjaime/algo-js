
const  readlineSync  =  require ( "readline-sync");
/*code give shoezise-question + input Shoesize*/
let shoesize = readlineSync.question("what is your shoe size?");
/*code give birth-question + Input birth*/
let birth = readlineSync.question("What is your birth year?");
/*code uitkomst*/
console.log ((shoesize * 2 + 5) * 50 - birth + 1766);




