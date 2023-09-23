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
const numberContainer = document.getElementById('number-container');
const startButton = document.getElementById('start');
//
title.innerHTML = 'Premi il pulsante invio per giocare.'
startButton.innerHTML = 'Start Game';

//Data
let randomNum = [];
const selectedNum = [];
let spanElements = [];

/* INIT GAME */

startButton.addEventListener('click', function() {
  //WHILE per inserire i numeri generati in uno span
  let i = 0;
  while (i < 5) {
    const randomNumber = uniqueRandomNumGenerator(randomNum);
    randomNum.push(randomNumber);
    const spanElement = document.createElement('span');
    spanElement.textContent = randomNumber;//Assegno allo span il numero 
    numberContainer.appendChild(spanElement); // Aggiungi lo span al titolo
    if (i < 4) {
      const spaceElement = document.createTextNode(' ');
      numberContainer.appendChild(spaceElement);
    }
    i++;
  }
  console.log(randomNum)
  title.innerHTML = 'Memorizza i numeri qui sotto'
  hideOneSpanPerSecond()
  promptUserNumber()
  randomNum = []
  spanElements = Array.from(numberContainer.querySelectorAll('span'));
});

/* FUNCTION */
//Random number
function randomNumGenerator() {
  return Math.floor(Math.random() * 100 + 1)
}
//Control Random number
function uniqueRandomNumGenerator(array) {
  let randomNumber;
  do {
    randomNumber = randomNumGenerator();
  } while (array.includes(randomNumber)); // Verifica se il numero è già presente nell'array
  return randomNumber;
}

//Timing function 
function hideOneSpanPerSecond() {
  startButton.style.visibility='hidden';
  let spanIndex = 0;
  setInterval(function() {
    const intervalId = setInterval(function() {
      // Verifica se abbiamo raggiunto l'ultimo span
      if (spanIndex >= spanElements.length) {
        clearInterval(intervalId); // Ferma l'intervallo se siamo arrivati all'ultimo span
        return;
      }
      const spanToHide = spanElements[spanIndex];
      spanToHide.style.visibility = 'hidden';
      spanIndex++;
    }, 1000);// Faccio sparire un numero al secondo
  }, 5000)//Aspetto 5 secondi prima di far sparire i numeri
}
//
function promptUserNumber() {
  const delayPrompt = setInterval(function() {
    for (let i = 0; i < spanElements.length; i++) {
      const userNumber = parseInt(prompt("INSERISCI I NUMERI PRIMA ELENCATI"));
      selectedNum.push(userNumber);
      if (selectedNum.length === spanElements.length) {
        clearInterval(delayPrompt);
        title.innerHTML = `Hai indovinato ${scoreObtained(randomNum, selectedNum)} numeri.`;
        startButton.innerHTML = 'Rigioca';
        startButton.style.visibility = 'visible';
        numberContainer.innerHTML= ''
      }
    }
  }, 11000);
}
//
function scoreObtained(array1, array2) {
  let score = 0;
  for (const numero of array1) {
    if (array2.includes(numero)) {
      score++;
    }
  }
  return score;
}