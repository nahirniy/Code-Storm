import { modalOrder } from "../../modals/modal-order/modal-order";
import { addOrder } from "../../services/food-api";
import { Notify } from "notiflix";
document.addEventListener('DOMContentLoaded', () => {
  const orderForm = document.querySelector('.order-products-form');

    orderForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const emailInput = event.target.querySelector('#email');
      const email = emailInput.value;

      console.log('Order Details:');
      console.log('Email:', email);
      addOrder({ email: email, products: [] })
        .then(() => {
          modalOrder();
        })
        .catch(error => {
          Notify.failure(error.message);
        })
      orderForm.reset();
    });
  });