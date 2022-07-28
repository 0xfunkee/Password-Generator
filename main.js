"use strict";

const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let newPsswd1 = "";
let newPsswd2 = "";
let passwordEl1 = document.getElementById("password-El1");
let passwordEl2 = document.querySelector("#password-El2");

const generatePsswd = function () {
  newPsswd1 = "";
  newPsswd2 = "";
  for (let i = 0; i < 15; i++) {
    let randomCombination1 = Math.floor(Math.random() * characters.length);
    newPsswd1 += characters[randomCombination1];
    let randomCombination2 = Math.floor(Math.random() * characters.length);
    newPsswd2 += characters[randomCombination2];
  }
  passwordEl1.value = newPsswd1;
  passwordEl2.value = newPsswd2;
};
