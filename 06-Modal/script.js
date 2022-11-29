'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
//creating function to make code DRY (Don't repeat yourself)
const closeModal = function () {
  console.log('Popup closed');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}
//closing pop-up through close button
btnCloseModal.addEventListener('click', closeModal);

//closing pop-up through clicking outside
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal(); //now we have to call this closeModal fn.
  }
});
