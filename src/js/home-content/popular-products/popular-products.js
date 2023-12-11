import { getPopularProducts } from '../../services/food-api';
import markupPopularList from './markup-popular-products';
import { loadFromLS, updateBasket, saveToLS } from '../../services/helpers';
import sprite from '../../../img/icons/sprite.svg';
import { updateAllIcon } from '../main-products/main-products';

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

export function updateIconPopular(btn, id, products) {
  const checkmarkIcon = `<svg class="light-checkmark" width="12" height="12">
            <use class="href-icon" href="${sprite}#icon-checkmark"></use>
          </svg>`;
  const basketIcon = `<svg class="light-basket" width="12" height="12">
            <use class="href-icon" href="${sprite}#icon-basket"></use>
          </svg>`;

  const inStorage = products.some(({ _id }) => _id === id);

  btn.innerHTML = inStorage ? checkmarkIcon : basketIcon;
}

refs.popularList.addEventListener('click', handleClickBasket);
