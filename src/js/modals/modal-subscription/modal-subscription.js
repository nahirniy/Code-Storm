const btnElem = document.querySelector('.subscribe');
const modalSubscription = document.querySelector('.modal-subscription');
const modalUnsubscription = document.querySelector('.modal-unsubscription');
const modalBackElem = document.querySelector('.modal-backdrop-subscription');

modalSubscription.style.cssText = `
  display: none;
  visibility: visible;
  opacity: 0;
`;

modalUnsubscription.style.cssText = `
  display: none;
  visibility: visible;
  opacity: 0;
`;

const closeModal = event => {
  const target = event.target;

  if (target === modalSubscription || target.closest('.close')) {
    modalSubscription.style.visibility = 'hidden';
    modalSubscription.style.opacity = 0;
  }

  if (target === modalUnsubscription || target.closest('.close')) {
    modalUnsubscription.style.visibility = 'hidden';
    modalUnsubscription.style.opacity = 0;
  }
};

const openModalSubscription = () => {
  modalSubscription.style.display = 'flex';
  modalSubscription.style.visibility = 'visible';
  modalSubscription.style.opacity = 1;
};

const openModalUnsubscription = () => {
  modalUnsubscription.style.display = 'flex';
  modalUnsubscription.style.visibility = 'visible';
  modalUnsubscription.style.opacity = 1;
};

const handleSubscription = email => {
  if (email) {
    openModalSubscription();
  } else {
    openModalUnsubscription();
  }
};

btnElem.addEventListener('click', () => {
  const emailInput = document.querySelector('.email-input');
  const email = emailInput.value.trim();

  handleSubscription(email);
});

modalSubscription.addEventListener('click', closeModal);
modalUnsubscription.addEventListener('click', closeModal);
