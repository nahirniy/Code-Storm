import { getPopularProducts } from '../../services/food-api';
import markupPopularList from './markup-popular-products';
import {
  loadFromLS,
  updateBasket,
  saveToLS,
  updateAllIcon,
} from '../../services/helpers';

const limitPopularProduct = 5;

getPopularProducts(limitPopularProduct)
  .then(data => {
    markupPopularList(data);
    saveToLS('popular products', data);
  })
  .catch(err => console.log(err));

const refs = {
  popularList: document.querySelector('.popular-list'),
};

async function handleClickBasket(event) {
  const LOCALSTORAGE_KEY = 'basket';
  const basket = loadFromLS(LOCALSTORAGE_KEY) ?? [];
  const clickedItem = event.target.closest('.btn-light-basket');
  if (!clickedItem) {
    return;
  }
  const id = event.target.closest('.popular-item').dataset.id;
  const currentProducts = loadFromLS('popular products');
  const someProduct = currentProducts.filter(({ _id }) => id === _id)[0];
  const currentButton = document.querySelectorAll(`[data-button-id="${id}"]`);

  updateBasket(LOCALSTORAGE_KEY, someProduct, basket);
  updateAllIcon([...currentButton], id, basket);
}

refs.popularList.addEventListener('click', handleClickBasket);
