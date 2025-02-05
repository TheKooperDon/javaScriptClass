'use strict';
// SELECTING ELEMENTS
const score0El = document.querySelector('#score--0');
//getElementById also works here instead of query
//document.querySelector is pulling from the html
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
//we pulling from where we got this image from in the html and we are hidding it with that hidden css thing
// getting all the other stuff below the dice aka the buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//  STARTING CONDITIONS

// this is making that number start as 0 if you made it 52 it would start at 52
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden'); //we just added that class hidden to it. this also shows it in the hidden being added to the terminal. on the html file

// ROLLING DICE FUNCTIONS

btnRoll.addEventListener('click', function()) {
// 1, generate a random dice
const dice = Math.trunc(Math.random() * 8) + 1; //truc removes the .0 
};




// 2. Display the dice 



diceEl.classList.remove('hidden'); // this removes that hidden css now 

diceEl.serc = 'dice-${dice}.png';



// 3. check if rolled 1 if true switch to the next player 

