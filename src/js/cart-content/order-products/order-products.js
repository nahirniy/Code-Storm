import { modalOrder } from "../../modals/modal-order/modal-order";
import { addOrder } from "../../services/food-api";
import { Notify } from "notiflix";

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

    })

  orderForm.reset();
});
