'use strict';

const buttonList = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.close-modal');

const displayModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < buttonList.length; i++) {
  buttonList[i].addEventListener('click', displayModal);
}

close.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.body.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});
