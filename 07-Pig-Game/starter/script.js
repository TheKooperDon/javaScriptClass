'use strict';
// SELECTING ELEMENTS
//getElementById also works here instead of query
//document.querySelector is pulling from the html
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
//we pulling from where we got this image from in the html and we are hidding it with that hidden css thing
// getting all the other stuff below the dice aka the buttons
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//  STARTING CONDITIONS

// this is making that number start as 0 if you made it 52 it would start at 52
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden'); //we just added that class hidden to it. this also shows it in the hidden being added to the terminal. on the html file

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// ROLLING DICE FUNCTIONS

btnRoll.addEventListener('click', function () {
  // 1, generate a random dice
  const dice = Math.trunc(Math.random() * 6) + 1; //truc removes the .0
  console.log(dice);

  // 2. Display the dice

  diceEl.classList.remove('hidden'); // this removes that hidden css now

  diceEl.src = `dice-${dice}.png`; //src is the image thing

  // 3. check if rolled 1 if true switch to the next player

  if (dice !== 1) {
    // add dice number to the current score
    currentScore += dice;
    //score0El.textContent = currentScore; just saying that worked nvm that was my actually score not current score but same thign
    // current0El.textContent = currentScore; // better practice and were gonna change this i guess

    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    // the reason why its current--${} is because  theres two players so we are just swapping half of it . the -- doesnt mean shit its just what we called them in html
  } else {
    // switch player
    // we need to now give the score to the top part now
    activePlayer = activePlayer === 0 ? 1 : 0;

    //if active player is 0 then we want to change it to 0 we could do the long hand of that .
    //oh boy short hand
  }
}); //dummy this has to be ont he way bottom
