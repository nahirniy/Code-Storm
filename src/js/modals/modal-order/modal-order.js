import { saveToLS } from '../../services/helpers';

const modalBackdropOrder = document.querySelector('.modal-backdrop-order');
const modalOrderClose = document.querySelector('.modal-order-close');
const modalOrder = document.querySelector('.modal-order');
const body = document.querySelector('body');
const defaultOverflow = body.style.overflow;

export function modalOrderOpen() {
  modalBackdropOrder.classList.remove('is-hidden');
  modalOrder.classList.add('visible-modal');

  body.style.overflow = 'hidden';
  document.addEventListener('keydown', e =>
    e.key === 'Escape' ? closeModal(e) : null
  );
}

function closeModal(e) {
  modalBackdropOrder.classList.add('is-hidden');
  modalOrder.classList.remove('visible-modal');

  const LOCALSTORAGE_KEY = 'basket';
  saveToLS(LOCALSTORAGE_KEY, []);
  document.querySelector('.order-products-sum').textContent = '$0.00';
  body.style.overflow = defaultOverflow;
}

modalBackdropOrder.addEventListener('click', e => {
  if (e.target !== e.currentTarget) {
    return;
  }

  closeModal(e);
});

modalOrderClose.addEventListener('click', closeModal);
