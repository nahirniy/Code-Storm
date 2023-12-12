import { addEmail } from '../../services/food-api';
import { showError } from '../../services/helpers';

const formElem = document.querySelector('.form-footer');
const modalSubscription = document.querySelector('.modal-subscription');
const modalUnsubscription = document.querySelector('.modal-unsubscription');
const modalBackElem = document.querySelector('.modal-backdrop-subscription');
const body = document.querySelector('body');
const overflow = document.body.style.overflow;

const closeModal = event => {
  const target = event.target;
  if (target === modalSubscription || target.closest('.close')) {
    modalSubscription.classList.remove('visible-modal');
    setTimeout(() => modalSubscription.classList.add('visually-hidden'), 500);
    modalBackElem.classList.add('is-hidden');

    document.removeEventListener('keydown', closeModal);
    body.style.overflow = overflow;
  }
  if (target === modalUnsubscription || target.closest('.close')) {
    modalUnsubscription.classList.remove('visible-modal');
    setTimeout(() => modalUnsubscription.classList.add('visually-hidden'), 500);
    modalBackElem.classList.add('is-hidden');

    document.removeEventListener('keydown', closeModal);
    body.style.overflow = overflow;
  }

  if (event.key === 'Escape') {
    closeModalOption();
  }

  if (target === modalBackElem) {
    closeModalOption();
  }
};

const openModalSubscription = () => {
  modalSubscription.classList.add('visible-modal');
  modalSubscription.classList.remove('visually-hidden');
  modalBackElem.classList.remove('is-hidden');

  document.addEventListener('keydown', closeModal);
  body.style.overflow = 'hidden';
};

const openModalUnsubscription = () => {
  modalUnsubscription.classList.add('visible-modal');
  modalUnsubscription.classList.remove('visually-hidden');
  modalBackElem.classList.remove('is-hidden');

  document.addEventListener('keydown', closeModal);
  body.style.overflow = 'hidden';
};

const handleSubscription = async email => {
  const body = { email };

  try {
    const checkedEmail = await addEmail(body);

    openModalSubscription();
    formElem.reset();
  } catch (err) {
    if (err.response.data.message === 'Subscription already exists') {
      openModalUnsubscription();
    } else {
      showError();
    }
  }
};

function handleSubmit(e) {
  e.preventDefault();
  const emailInput = document.querySelector('.input-label');
  const email = emailInput.value.trim();
  handleSubscription(email);
}

function closeModalOption() {
  modalSubscription.classList.remove('visible-modal');
  setTimeout(() => modalSubscription.classList.add('visually-hidden'), 500);
  modalBackElem.classList.add('is-hidden');

  modalUnsubscription.classList.remove('visible-modal');
  setTimeout(() => modalUnsubscription.classList.add('visually-hidden'), 500);
  modalBackElem.classList.add('is-hidden');

  document.removeEventListener('keydown', closeModal);
  body.style.overflow = overflow;
}

formElem.addEventListener('submit', handleSubmit);
modalBackElem.addEventListener('click', closeModal);
