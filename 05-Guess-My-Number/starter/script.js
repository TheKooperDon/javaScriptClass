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

const number = Math.random();

document.querySelector(`.check`).addEventListener('click', function () {
  const guess = document.querySelector(`.guess`).value;

  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(`.message`).textContent = `Please put a number in`;
  } else {
    document.querySelector(`.message`).textContent = `Keep guessing`;
  }
});
//'click' is the event something is happening.
//.guess is the input of text
//typeof is like what is it ? a number? a string? a boolian?
//!guess no guess
