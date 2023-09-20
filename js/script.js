/* 
SVOLGIMENTO

1. Vado a richiamare i miei elementi
2. Creo il mio contatore dei secondi
3. Creo un array vuoto che contenga i numeri generati in futuro
4. Creo un array vuoto che andra a contenere i numeri scelti dall'utente
5. Genero costante che
    - 1] Mi crea 5 numeri randomici
    - 2] Una funzione di avvio gioco
    - 3] Vado a creare una funzione che faccia sparire gli elementi un secondo alla volta <br/>
         (interna alla funzione 2])
    - 4] Una funzione di reset
*/
//Element
const title = document.getElementById('title');
const startButton = document.getElementById('start');

//Data
let counterSec = 5;
const randomNum = [];
const selectedNum = [];

/* RANDOM NUM */
//FUNCTION Random number
function randomNumGenerator() {
  return Math.floor(Math.random() * 100 + 1)
}
//Function control Random number
function uniqueRandomNumGenerator(array) {
  let randomNumber;
  do {
    randomNumber = randomNumGenerator();
  } while (array.includes(randomNumber)); // Verifica se il numero è già presente nell'array
  return randomNumber;
}
//FOR per inserire i numeri generati nell'array
for (let i = 0; i < 5; i++) {
  const randomNumber = randomNumGenerator();
  randomNum.push(randomNumber);
}
console.log(randomNum); // Stampa l'array con i numeri casuali generati

//Random number Array

//
