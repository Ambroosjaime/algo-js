const readlineSync = require("readline-sync");

    myObject = {
    "name": "",
    "productionyear": "",
    "cast": "",

};

function askTvSerie(){
    myObject.name = readlineSync.question("give youre favorite tv serie");
    myObject.poductionyear = readlineSync.question("production year"); 
    myObject.cast = readlineSync.question("cast member");

    return  randomizeCast(myObject);
    //randomizeCast(myObject) word hier aangeroepen,
}

function randomizeCast(tvSerie){ 
    return myObject["cast"].split(' ').sort(function(){return 0.5-Math.random()}).join(' '); 
//hier roep ik mijn variable "cast" aan, deze steken we in een array.
//deze variable gaan we splitten (functie split)
//function sort, gaan een random positie geven in de array//
// function "join" samenvoegen
}
console.log(askTvSerie());



