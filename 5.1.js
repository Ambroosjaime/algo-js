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

    return myObject;
}

console.log(askTvSerie());


/*Create a function named askTvSerie() that will ask the user for the following data about its favorite TV serie:
Name 
Production year
Names of the cast members (there can be as much as the user want)
That function must gather all the data in a single object and return it. The data structure must be elegant.*/
/*Create a program that use that function to generate a TV serie object and display it to the user in JSON format.*/

/*let myObject = {
    // we can use the "" notation for the key
    "firstname": "Gerard",
    // ... or just specify it this way if we want
    name: "Lambert",
    // we can use any type for the value
    age: 42
  };*/ 


  /*const readlineSync = require("readline-sync");

  let myObject{
  name: "tv serie",
  productionyear: "productionyear",
  cast: "cast",

};

  /*function askTvSerie(){ (maakt een functie)
    myObject.name = readlineSync.question("give youre favorite tv serie");
    myObject.poductionyear = readlineSync.question("production year"); 
    myObject.cast = readlineSync.question("cast member");

    return myObject;    (laat de vragen terugkeren)
};


  // name: nooit een =, enkel bij function gebruiken of bij ee variable//
  /*https://github.com/becodeorg/GNK-Holberton-1.9/blob/master/02-De-helling/02-Javascript/js-basics-algo/05-objects.md*/