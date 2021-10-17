/* TRACCIA: 
Scrivi un programma che esegua un ciclo da 1 a 100 
e a ogni iterazione appenda un elemento html al container 
con uno stile differente a seconda del valore dell'indice
per i multipli di 3, 
per i multipli di 5 
e per i valori che sono sia multipli di 3 che di 5. */

// Rappresentare un ciclo da 1 a 100

const listElement = document.querySelector(".list");

for (let i = 1; i <= 100; i++) {
  let element;
  if (i % 3 == 0 && i % 5 == 0) {
    element = `<li class='both'>FizzBuzz</li>`;

    console.log("fizzbuzz");
  } else if (i % 3 == 0) {
    element = `<li class='tre'>Fizz</li>`;
    console.log("fizz");
  } else if (i % 5 == 0) {
    element = `<li class='cinque'>Buzz</li>`;
    console.log("buzz");
  } else {
    element = `<li>${i} </li>`;
    console.log(i);
  }

  console.log(element);
  listElement.insertAdjacentHTML("beforeend", element);
}
