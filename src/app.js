/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  // console.log("Hello Rigo from the console!");
  let palos = ["♦", "♥", "♠", "♣"];
  let num = [2, 3, 4, 5, 6, 7, 8, 9, "A", "J", "Q", "K"];
  let paloRandom = palos[Math.floor(Math.random() * palos.length)];

  let numRandom = num[Math.floor(Math.random() * num.length)];
  console.log(paloRandom, numRandom);
  document.getElementById("paloArriba").innerHTML = paloRandom;
  document.getElementById("paloAbajo").innerHTML = paloRandom;
  document.getElementById("numero").innerHTML = numRandom;

  if (paloRandom == "♥" || paloRandom == "♦") {
    document.getElementById("paloArriba").style.color = "red";
    document.getElementById("paloAbajo").style.color = "red";
  }
};
