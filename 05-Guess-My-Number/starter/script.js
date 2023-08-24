'use strict';

//console.log(document.querySelector(`.message`).textContent);

//this highlights the "Start Guessing" box if you google inspect the area.
//textContent is the actual

//DOM is what accesses HTML elements
/*
html > body > > section  > p > the actaul text


we need to get access to that final part of it.
*/
/*
console.log(document.querySelector(`.message`).textContent);
document.querySelector(`.message`).textContent = 'Start guessing the number.';
//this changed the actual text

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 10;

document.querySelector(`.guess`).value;
// = empty value.

document.querySelector(`.guess`).value = 23;

*/

//Now lets get the button working

//btn is just the global css for all btns but we want the actualy check button

//SECRET NUMBER.

let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
//trunc does a thing of not doing a 4.12141 which is the 1 is helpoing
document.querySelector(`.check`).addEventListener('click', function () {
  const guess = Number(document.querySelector(`.guess`).value);
  //console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector(`.message`).textContent = `Please put a number in`;
  } else if (guess === number) {
    // prettier-ignore
    document.querySelector(`.message`).textContent = `You got the number right! Lets goooo`;
    document.querySelector(`body`).style.backgroundColor = `green`;
    document.querySelector(`.number`).style.width = `30rem`;

    document.querySelector(`.number`).textContent = number;
    //highscore = score;
    //document.querySelector(`.highscore`).textContent = highscore;
    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }
  } else if (guess !== number) {
    if (score > 0) {
      document.querySelector(`.message`).textContent =
        guess > number
          ? `To high of a guess. Guess Lower`
          : `To high of a guess. Guess higher`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `You lost the game.`;
    }
  }
  /*
  else if (guess > 21 && guess > number) {
    if (score > 0) {
      // prettier-ignore
      document.querySelector(`.message`).textContent = `You went above 20. It must be a number less than 20. Guess Lower`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `You lost the game.`;
    }
  } else if (guess < 0 && guess < number) {
    if (score > 0) {
      // prettier-ignore
      document.querySelector(`.message`).textContent = `You went less than 1. It must be a number greater than 1. Guess Higher`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `You lost the game.`;
    }
  } else if (guess > number) {
    if (score > 0) {
      // prettier-ignore
      document.querySelector(`.message`).textContent = `To high of a guess. Guess Lower`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `You lost the game.`;
    }
  } else if (guess < number) {
    if (score > 0) {
      // prettier-ignore
      document.querySelector(`.message`).textContent = `To low of a guess. Guess Higher`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `You lost the game.`;
    }
  }
   */
  /*
  if (guess > highscore) {
    score = highscore;
    document.querySelector(`.highscore`).textContent = highscore;
  }*/
});

//'click' is the event something is happening.
//.guess is the input of text
//typeof is like what is it ? a number? a string? a boolian?
//!guess no guess

document.querySelector(`.again`).addEventListener('click', function () {
  //forgot to add a new random number
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(`.score`).textContent = 20;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.message`).textContent = `Start Guessing...`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
});
