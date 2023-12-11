import { getPopularProducts } from '../../services/food-api';
import markupPopularList from './markup-popular-products';
import { loadFromLS, updateBasket, saveToLS } from '../../services/helpers';
import sprite from '../../../img/icons/sprite.svg';

const limitPopularProduct = 5;

getPopularProducts(limitPopularProduct).then(data => {
  markupPopularList(data);
  saveToLS('popular products', data);
});

const refs = {
  popularList: document.querySelector('.popular-list'),
};

refs.popularList.addEventListener('click', handleClickBasket);

async function handleClickBasket(event) {
  const LOCALSTORAGE_KEY = 'basket';
  const basket = loadFromLS(LOCALSTORAGE_KEY) ?? [];
  const clickedItem = event.target.closest('.btn-light-basket');
  if (!clickedItem) {
    return;
  }
  const currentId = event.target.closest('.popular-item').dataset.id;
  const currentProducts = loadFromLS('popular products');
  const someProduct = currentProducts.filter(({ _id }) => currentId === _id)[0];
  updateBasket(LOCALSTORAGE_KEY, someProduct, basket);
  updateIcon(clickedItem, currentId, basket);
}

export function updateIcon(btn, id, products) {
  const checkmarkIcon = `<svg class="light-checkmark" width="12" height="12">
            <use class="href-icon" href="${sprite}#icon-checkmark"></use>
          </svg>`;
  const basketIcon = `<svg class="light-basket" width="12" height="12">
            <use class="href-icon" href="${sprite}#icon-basket"></use>
          </svg>`;

  const inStorage = products.some(({ _id }) => _id === id);

  btn.innerHTML = inStorage ? checkmarkIcon : basketIcon;
}
