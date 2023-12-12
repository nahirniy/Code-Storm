import { modalOrderOpen } from '../../modals/modal-order/modal-order';
import { addOrder } from '../../services/food-api';
import {
  counterProducts,
  loadFromLS,
  saveToLS,
  showError,
} from '../../services/helpers';

const LOCALSTORAGE_KEY = 'basket';
const basket = loadFromLS(LOCALSTORAGE_KEY) ?? [];

const orderForm = document.querySelector('.order-products-form');
const emptyContent = document.querySelector('.cart-yellow-container');
const cartContent = document.querySelector('.cart-content-wrap');

orderForm.addEventListener('submit', async event => {
  event.preventDefault();
  const emailInput = event.target.querySelector('#email');
  const email = emailInput.value;

  const orderProducts = basket.map(product => {
    return {
      productId: product._id,
      amount: 1,
    };
  });

  try {
    const order = await addOrder({
      email: email,
      products: orderProducts,
    });

    saveToLS(LOCALSTORAGE_KEY, []);
    counterProducts([]);
    modalOrderOpen();

    cartContent.classList.add('visually-hidden');
    emptyContent.classList.remove('visually-hidden');
  } catch (err) {
    showError();
    console.log(err);
  } finally {
    orderForm.reset();
  }
});

counterProducts(basket);
