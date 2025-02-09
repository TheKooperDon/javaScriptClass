'use strict';
const button = document.querySelectorAll('.cute-button');
const leftButton = button[0];
const middleButton = button[1];
const rightButton = button[2];
const jeffHeading = document.querySelector('.jeffStyle'); // Correct spelling
const fontSize = ['10px', '20px', '50px', '100px', '200px'];
const FontColor = [
  'color: blue',
  'color: green',
  'color: red',
  'color: yellow',
];
const randomFonts = [
  "Brush Script MT', cursive",
  'Arial, sans-serif',
  'Courier New, monospace',
  'Georgia, serif',
  'Times New Roman, Times, serif',
  'Verdana, sans-serif',
];

const randomIndex = Math.floor(Math.random() * randomFonts.length);
const randomFont = randomFonts[randomIndex];

const randomFontSizeIndex = Math.floor(Math.random() * fontSize.length);
const randomFontSize = fontSize[randomFontSizeIndex];

/*leftButton.addEventListener('click', function () {
  jeffFont.style.fontFamily = 'Arial, sans-serif';
});

*/
//fonts
leftButton.addEventListener('click', function () {
  console.log('Left button clicked!');
  //jeffHeading.style.fontFamily = 'arial';
  jeffHeading.style.fontFamily = randomFont;
  // to keep changing i need to do a do whole loop we are gonna pause this idea

  //do the other buttons now see if we can do it just on our own.
  //randomFonts.style.Math.floor(Math.random() * randomFonts.length);
  console.log('did i even choose a font', randomFont);
  console.log('jeffHeading');
});
//size
middleButton.addEventListener('click', function () {
  console.log('middle button clicked!');
  jeffHeading.style.fontSize = randomFontSize;
});

//color
rightButton.addEventListener('click', function () {
  console.log('right button clicked!');
});
