import { modalOrder } from "../../modals/modal-order/modal-order";
import { addOrder } from "../../services/food-api";
import { Notify } from "notiflix";
import { loadFromLS } from '../../services/helpers';

const LOCALSTORAGE_KEY = 'basket';
const basket = loadFromLS(LOCALSTORAGE_KEY) ?? [];
const basketSum = basket.reduce((sum, product) => sum + product.price, 0);
const orderProductsSum = document.querySelector(".order-products-sum");
orderProductsSum.textContent = `$${String(basketSum.toFixed(2))}`;

const orderForm = document.querySelector('.order-products-form');
orderForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailInput = event.target.querySelector('#email');
  const email = emailInput.value;

  console.log('Order Details:');
  console.log('Email:', email);
  const orderProducts = basket.map(product => {
    return {
      productId: product._id,
      amount: product.price
    }
  });

  addOrder({
    email: email, products: orderProducts
  })
    .then(() => {
      modalOrder();
    })
    .catch(error => {

    })

  orderForm.reset();
});
