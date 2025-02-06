'use strict';
//guessed i skipped this

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const CloseModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  //lets you close the popup
};

const OpenModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', OpenModal);

//this lets you the same class but guive each one a dif number now
// not really sure why we wouldnt do this in the html and just use 1 2 3

btnCloseModal.addEventListener('click', CloseModal);

overlay.addEventListener('click', CloseModal);

document.addEventListener('keydown', function (e) {
  //console.log('key was pressed here');
  //console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    CloseModal();
  }

  // console.log('escape was hit');
});
