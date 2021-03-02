


// chiedo mail
var promptInput = prompt("quale è la tua email??")

//creo array
var archivio = ["", "marco@gmail.com", "giorgio@gmail.com", "claudio@gmail.com", "andrea@gmail.com", "francesco.em.livio@gmail.com", "francem.livio@gmail.com"];

//controllo se è nel database
var soldatino = false;
//scorro array
for (var i = 0; i < archivio.length; i++) {
   if (archivio[i] == promptInput) {
    soldatino = true
  }
}

if (soldatino) {
  console.log("Hai eseguito l'accesso!");
  document.getElementById('result').innerHTML = "Hai eseguito l'accesso!"; // trasporta scritte in js in html
} else {
  console.log("Spiacenti ma questa mail non è registrata.");
  document.getElementById('result').innerHTML = "Spiacenti ma questa mail non è registrata."; // trasporta scritte in js in html
}


//bonus
alert("adesso il sistema lancerà un dado per te e uno per se stesso. vediamo chi vince!")
var numberCPU = Math.floor(Math.random()*(6-1+1)+1);
console.log(numberCPU);
var numberPlayer = Math.floor(Math.random()*(6-1+1)+1);
console.log(numberPlayer);
