/*Exercise 4.6
Create a function factorial(a) that returns the factorial of a number.

That function must be recursive.*/
//loop blijft gaat tot hij aan het gegeven getal, de factorial nummer geeft//
function factorial(number){
  let result = 1;
  for ( let i = 1; i < number; i++){
    result = result  (i + 1);
    // (i + 1) staat gelijk aan 2
  }
  return result;
}

const readlineSync = require("readline-sync");

let a = readlineSync.question("give a number");
//
function factorial(a){
    if (a === 0)
    {
       return 1;
    }
     return a * factorial(a-1);
            
   }
   console.log(factorial(a));
/*https://www.w3resource.com/javascript-exercises/javascript-recursion-function-exercise-1.php*/

/*https://medium.freecodecamp.org/how-to-factorialize-a-number-in-javascript-9263c89a4b38*/

/*===: returns true if both operands have exactly the same value. Else it returns false.*/
/*Wanneer u een getal factorialiseert, 
vermenigvuldigt u dat aantal met elk opeenvolgend nummer minus één.*/

function factorialize(num) {
   // If the number is less than 0, reject it.
   if (num < 0) 
   // If the number is 0, its factorial is 1.
         return -1;
   else if (num == 0) 
       return 1;
       // Otherwise, call the recursive procedure again
   else {
       return (num * factorialize(num - 1));
               /* 
        First Part of the recursion method
        You need to remember that you won’t have just one call, you’ll have several nested calls
        
        Each call: num === "?"        	         num * factorialize(num - 1)
        1st call – factorialize(5) will return    5  * factorialize(5 - 1) // factorialize(4)
        2nd call – factorialize(4) will return    4  * factorialize(4 - 1) // factorialize(3)
        3rd call – factorialize(3) will return    3  * factorialize(3 - 1) // factorialize(2)
        4th call – factorialize(2) will return    2  * factorialize(2 - 1) // factorialize(1)
        5th call – factorialize(1) will return    1  * factorialize(1 - 1) // factorialize(0)
        
        Second part of the recursion method
        The method hits the if condition, it returns 1 which num will multiply itself with
        The function will exit with the total value
        
        5th call will return (5 * (5 - 1))     // num = 5 * 4
        4th call will return (20 * (4 - 1))    // num = 20 * 3
        3rd call will return (60 * (3 - 1))    // num = 60 * 2
        2nd call will return (120 * (2 - 1))   // num = 120 * 1
        1st call will return (120)             // num = 120
        
        If we sum up all the calls in one line, we have
        (5 * (5 - 1) * (4 - 1) * (3 - 1) * (2 - 1)) = 5 * 4 * 3 * 2 * 1 = 120
        */
   }
 }
 factorialize(5);

 console.log(factorial(5));

//https://medium.freecodecamp.org/how-to-factorialize-a-number-in-javascript-9263c89a4b38//
