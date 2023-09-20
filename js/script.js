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
startButton.innerHTML = 'Start Game';

//Data
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
//WHILE per inserire i numeri generati in uno span
let i = 0;
while (i < 5) {
  const randomNumber = uniqueRandomNumGenerator(randomNum);
  randomNum.push(randomNumber);
  const spanElement = document.createElement('span');
  spanElement.textContent = randomNumber;//Assegno allo span il numero 
  title.appendChild(spanElement); // Aggiungi lo span al titolo

  // Aggiungi uno spazio vuoto tra i numeri (tranne dopo l'ultimo numero)
  if (i < 4) {
    const spaceElement = document.createTextNode(' ');
    title.appendChild(spaceElement);
  }
  i++;
} // Stampo l'array con i numeri casuali generati

