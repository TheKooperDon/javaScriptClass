'use strict';
const button = document.querySelectorAll('.cute-button');
const jeff = document.querySelectorAll('.jeff');
const jeffFont = document.getElementById('jeffFont');

button.addEventListener('click', function () {
  jeffFont.style.fontfamily = 'Arial, sans-serif';
});
