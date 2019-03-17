const readlineSync = require("readline-sync");
let result = 0;
//vraagt om een nummer in te voeren
let n = parseInt(readlineSync.question("Enter a number "));
//nummer staat op 0, als getal groter is dan 0 vraagt nog
for(let i = 0; i < n; i++){
    result = result + parseInt(readlineSync.question("Enter a number "));
}
console.log(result);
