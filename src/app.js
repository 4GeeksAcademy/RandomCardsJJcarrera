/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { read } from "@popperjs/core";

const pintasDisponibles = [
  {
    nombre: "diamante",
    simbolo: "♦",
    color: "red"
  },
  {
    nombre: "corazón",
    simbolo: "♥",
    color: "red"
  },
  {
    nombre: "trébol",
    simbolo: "♣",
    color: "black"
  },
  {
    nombre: "pica",
    simbolo: "♠",
    color: "black"
  },
  {
    nombre: "joker",
    simbolo: "🤡",
    color: "purple"
  }
];

const valoresDisponibles = [
  {
    simbolo: "A",
    valor: 13
  },
  {
    simbolo: "2",
    valor: 2
  },
  {
    simbolo: "3",
    valor: 3
  },
  {
    simbolo: "4",
    valor: 4
  },
  {
    simbolo: "5",
    valor: 5
  },
  {
    simbolo: "6",
    valor: 6
  },
  {
    simbolo: "7",
    valor: 7
  },
  {
    simbolo: "8",
    valor: 8
  },
  {
    simbolo: "9",
    valor: 9
  },
  {
    simbolo: "10",
    valor: 10
  },
  {
    simbolo: "J",
    valor: 11
  },
  {
    simbolo: "Q",
    valor: 12
  },
  {
    simbolo: "K",
    valor: 13
  }
];

function generarCartaAleatoria() {
  const pintaAleatoria =
    pintasDisponibles[Math.floor(Math.random() * pintasDisponibles.length)];
  const valorAleatorio =
    valoresDisponibles[Math.floor(Math.random() * valoresDisponibles.length)];

  return {
    simbolo: pintaAleatoria,
    valor: valorAleatorio
  };
}

document.getElementById("button-new").addEventListener("click", function() {
  const oldCard = document.querySelector(".cardInstance");
  if (oldCard) {
    oldCard.remove();
  }

  const cartaAleatoria = generarCartaAleatoria();
  console.log(cartaAleatoria);
  const newCard = document
    .getElementById("cardTemplate")
    .querySelector(".card")
    .cloneNode(true);

  document.body.appendChild(newCard);
  newCard.classList.add("cardInstance");
  newCard.querySelector(".value").innerText = cartaAleatoria.valor.simbolo;
  newCard.querySelector(".stickup").innerText = cartaAleatoria.simbolo.simbolo;
  newCard.querySelector(".stickup").classList.add(cartaAleatoria.simbolo.color);

  newCard.querySelector(".sticKdown").innerText =
    cartaAleatoria.simbolo.simbolo;
  newCard
    .querySelector(".sticKdown")
    .classList.add(cartaAleatoria.simbolo.color);

  window.newCard = newCard;
  window.cartaAleatoria = cartaAleatoria;

  console.log(newCard);
});
