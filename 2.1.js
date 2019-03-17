const readlineSync = require("readline-sync");

let age = readlineSync.question("enter your age?");
/*>=:returns true if the first operand is greater than or equal to the second one*/
if (age >= 18){

    console.log ("you are an adult");
}
/*<=:returns true if the first operand is lower than or equal to the second one*/
if (age <= 18){
    console.log ("you are not yet an adult");
}
