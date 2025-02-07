'use strict';
const button = document.querySelectorAll('.cute-button');
const leftButton = button[0];
const middleButton = button[1];
const rightButton = button[2];
const jeffHeading = document.querySelector('jeffSyle');

/*leftButton.addEventListener('click', function () {
  jeffFont.style.fontFamily = 'Arial, sans-serif';
});

*/
leftButton.addEventListener('click', function () {
  console.log('Left button clicked!');
});
