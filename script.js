'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const showModal = document.querySelectorAll('.show-modal');

const show = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const hide = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', show);
}

closeModal.addEventListener('click', hide);

overlay.addEventListener('click', hide);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') hide();
});
