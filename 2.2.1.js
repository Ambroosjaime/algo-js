const readlineSync = require("readline-sync");

let min = readlineSync.question("Enter min?");
let max = readlineSync.question("Enter max?");
let current = readlineSync.question("Enter current?");
if (min > max){
    console.log("error");
  }