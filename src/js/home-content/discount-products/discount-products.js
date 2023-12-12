import { getDiscountProducts } from '../../services/food-api';
import markupDiscountList from './markup-discount-products';
import {
  loadFromLS,
  updateBasket,
  saveToLS,
  updateAllIcon,
} from '../../services/helpers';

getDiscountProducts().then(data => {
  markupDiscountList(data);
  saveToLS('discount products', data);
});

const refs = {
  discountList: document.querySelector('.discount-list'),
};

refs.discountList.addEventListener('click', handleClickBasket);

async function handleClickBasket(event) {
  const LOCALSTORAGE_KEY = 'basket';
  const basket = loadFromLS(LOCALSTORAGE_KEY) ?? [];
  const clickedItem = event.target.closest('.btn-basket');
  if (!clickedItem) {
    return;
  }

  const id = event.target.closest('.discount-item').dataset.id;
  const currentProducts = loadFromLS('discount products');
  const someProduct = currentProducts.filter(({ _id }) => id === _id)[0];
  const currentButton = document.querySelectorAll(`[data-button-id="${id}"]`);

  updateBasket(LOCALSTORAGE_KEY, someProduct, basket);
  updateAllIcon([...currentButton], id, basket);
}
