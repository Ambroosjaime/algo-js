const readlineSync = require("readline-sync");

let n = parseInt(readlineSync.question("generate a number"));

function multiRand(n){
    let a = []
    for (i = 0; i< n; i++){
      //maakt een random nummer
      a.push(Math.floor(Math.random()* 11));
    }
    //daar push hij die naar de var a
    return a;
}
console.log(multiRand(n)); 

//By reusing the function rand10() created in Exercise 2, write a function named multiRand(n) 
//that returns an array of n numbers between 1 and 10. You should not modify anything in rand10() to achieve this.

//Write a documentation for the multiRand(n) function.

//Use that function to create a program that will ask the number of random numbers to generate then 
//display that same number of random numbers.