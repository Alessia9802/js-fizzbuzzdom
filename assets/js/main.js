/* TRACCIA: 
Scrivi un programma che esegua un ciclo da 1 a 100 
e a ogni iterazione appenda un elemento html al container 
con uno stile differente a seconda del valore dell'indice
per i multipli di 3, 
per i multipli di 5 
e per i valori che sono sia multipli di 3 che di 5. */

document.body.style.backgroundColor = "#183A4A";
document.getElementById("titolo").style.color = "white";

// Rappresentare un ciclo da 1 a 100

let list = document.querySelector(".list");

for (let i = 1; i <= 100; i++) {
  console.log(i);
  const element = `<li class="box"> ${i} </li>`;

  list.innerHTML += element;
}

const multipliDiTre = document.querySelector("li.box");
console.log(multipliDiTre);

const multipliDiCinque = document.querySelector("li.box");
console.log(multipliDiCinque);

const colori = document.querySelector("li.box");
console.log(colori);

if (multipliDiTre * 3) {
  colori.className = "tre";
}
