


// chiedo mail
var email = prompt("quale è la tua email??")

//creo array
var emails = ["marco", "giorgio", "luca", "giuseppe", "jacopo", "filippo"];

//controllo se è nel database
var soldatino = false;
//scorro array
for (var i = 0; i < emails.length; i++) {
   if (emails[i] == email) {
    soldatino = true
  }
}

if (soldatino) {
  console.log("la tua email è stata registrata!");
} else {
  console.log("mi spiace non fai parte di questa mailing list");
}
