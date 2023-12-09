const openButton = document.getElementById('data-modal-open');
const modal = document.getElementById('data-modal');
const closeButton = document.getElementById('data-modal-close');

openButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', event => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
