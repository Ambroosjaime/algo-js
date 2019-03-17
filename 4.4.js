
function sum() {
    return this.a + this.b + this.c;
  }
  
  var o = {
    a: 1,
    b: 2,
    c: 3,
    get average() {
      return (this.a + this.b + this.c) / 3;
    }
  };

  Object.defineProperty(o, 'sum', {                                  
      get: sum, enumerable: true, configurable: true}); 
  console.log(o.average, o.sum); // 2, 6



//(bron info)//
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this


const arrMax = arr => Math.max(1, 2, 3, 4, 5, 6);
console.log(Math.max(1, 2, 3, 4, 5, 6));


const arrMin = arr => Math.min(1, 2, 3, 4, 5, 6);
console.log(Math.min(1, 2, 3, 4, 5, 6));

//https://codeburst.io/javascript-arrays-finding-the-minimum-maximum-sum-average-values-f02f1b0ce332




//Create a function named average(arr) that takes an array of numbers as argument and returns the average.
//Create a function named min(arr) that takes an array of numbers as argument and returns the minimum element.
//Create a function named max(arr) that takes an array of numbers as argument and returns the maximum element.
//create a program that asks a number to the user then generate that same amount of random numbers but also displays their average, min and max. To do so, use the three functions you just created as well as the multiRand(n) function created in Exercise 3.

