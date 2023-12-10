const formElem = document.querySelector('.form-footer');
const modalSubscription = document.querySelector('.modal-subscription');
const modalUnsubscription = document.querySelector('.modal-unsubscription');
const modalBackElem = document.querySelector('.modal-backdrop-subscription');

modalSubscription.classList.add('is-hidden');
modalUnsubscription.classList.add('is-hidden');

const closeModal = event => {
  const target = event.target;
  if (target === modalSubscription || target.closest('.close')) {
    modalSubscription.classList.add('is-hidden');
    modalBackElem.classList.add('is-hidden');
  }
  if (target === modalUnsubscription || target.closest('.close')) {
    modalUnsubscription.classList.add('is-hidden');
    modalBackElem.classList.add('is-hidden');
  }
};
const openModalSubscription = () => {
  modalSubscription.classList.remove('is-hidden');
  modalBackElem.classList.remove('is-hidden');
};
const openModalUnsubscription = () => {
  modalUnsubscription.classList.remove('is-hidden');
  modalBackElem.classList.remove('is-hidden');
};
const handleSubscription = email => {
  if (email) {
    openModalSubscription();
  } else {
    openModalUnsubscription();
  }
};
formElem.addEventListener('submit', e => {
  e.preventDefault();
  const emailInput = document.querySelector('.input-label');
  const email = emailInput.value.trim();
  handleSubscription(email);
});
modalSubscription.addEventListener('click', closeModal);
modalUnsubscription.addEventListener('click', closeModal);
