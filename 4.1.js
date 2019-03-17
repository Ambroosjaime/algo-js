//maakt een functie calcSurface(die de berekening van de rechthoek opmeet)
function calcSurface(a,b){
    return a * b; //getallen die je ingeeft *
}

const readlineSync = require("readline-sync");
let width = parseInt(readlineSync.question("give the width of a rectangle"));//maakt een vraag, opgeven van de grote
let length = parseInt(readlineSync.question("give the length"));//maakt een vraag, opgeven van de lengte

console.log(calcSurface(width,length));//geeft de som weer van de ingevoerde cijfer grote * lengte

