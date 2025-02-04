'use strict';
// Selecting elements
const score0El = document.querySelector('#score--0');
//getElementById also works here instead of query
//document.querySelector is pulling from the html
const score1El = document.querySelector('#score--1');

// this is making that number start as 0 if you made it 52 it would start at 52
score0El.textContent = 0;
score1El.textContent = 0;
