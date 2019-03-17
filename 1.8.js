const readlineSync = require ("readline-sync");
/*vraag 1*/
let age = readlineSync.question ("question 1/3 What is your age?");
/*vraag 2*/
let color = readlineSync.question ("question 2/3 What is your favorite color?");
/*vraag 3*/
let birth = readlineSync.question ("question 3/3 what is your birthday?");
/*uitkomst*/
console.log("the first question was what was your age:" + age);
console.log("the second question was what was your favorite color:" + color);
console.log("the last question was what was your birthday:" + birth);
