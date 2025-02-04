'use strict';
// Selecting elements
const score0El = document.querySelector('#score--0');
//getElementById also works here instead of query
//document.querySelector is pulling from the html
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice'); //we pulling from where we got this image from in the html and we are hidding it with that hidden css thing
// getting all the other stuff below the dice aka the buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// this is making that number start as 0 if you made it 52 it would start at 52
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden'); //we just added that class hidden to it. this also shows it in the hidden being added to the terminal. on the html file
