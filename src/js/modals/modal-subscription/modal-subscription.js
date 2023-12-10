const btnElem = document.querySelector('.subscribe');
const modalElem = document.querySelector('.modal');

modalElem.style.cssText = `
display:none;
visibility: hidden
opacity: 0;
`;

const closeModal = event => {
  const target = event.target;

  if (target === modalElem || target.closest('.close')) {
    modalElem.style.visibility = 'hidden';
    modalElem.style.opacity = 0;
  }
};

const openModal = () => {
  modalElem.style.display = 'flex';
  modalElem.style.visibility = 'visible';
  modalElem.style.opacity = 1;
};
openModal();
btnElem.addEventListener('click', openModal);
modalElem.addEventListener('click', closeModal);
