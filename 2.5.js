const readlineSync = require("readline-sync");
//bepaald input van de gebruiker
let a = 0;
//checkt of het al 42 is
while( a != 42){
    a = parseInt(readlineSync.question("Give a number"));
    //checkt ook als het niet 42 is
    if(a != 42){
        console.log("are you sure");
    }
    //anders geeft hij correct
    else{
        console.log("correct");
    }
}









