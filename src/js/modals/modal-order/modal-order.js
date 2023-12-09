import { saveToLS } from '../../services/helpers';

export function modalOrder() {
  const modalBackdropOrder = document.querySelector(".modal-backdrop-order");
  const modalOrder = document.querySelector(".modal-order");

  modalBackdropOrder.classList.remove("is-hidden");
  modalOrder.classList.remove("is-hidden");

}
const modalOrderClose = document.querySelector(".modal-order-close");
modalOrderClose.addEventListener("click", (event) => {
  const modalBackdropOrder = document.querySelector(".modal-backdrop-order");
  const modalOrder = document.querySelector(".modal-order");
  modalBackdropOrder.classList.add("is-hidden");
  modalOrder.classList.add("is-hidden");

  const LOCALSTORAGE_KEY = 'basket';
  saveToLS(LOCALSTORAGE_KEY, []);
  document.querySelector(".cart-content-empty").classList.remove("is-hidden");
  document.querySelector(".cart-content-wrap").classList.add("is-hidden");
} );

