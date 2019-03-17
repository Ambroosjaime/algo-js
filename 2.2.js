const readlineSync = require("readline-sync");

let min = readlineSync.question("Enter min?");
let max = readlineSync.question("Enter max?");
let current = readlineSync.question("Enter current?");
if ((current > min) && (current < max)){
console.log(current);
}
