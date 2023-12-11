import {
  counterProducts,
  loadFromLS,
  updateAllIcon,
  updateBasket,
} from '../../services/helpers';
import sprite from '../../../img/icons/sprite.svg';
import { updateIconPopular } from '../popular-products/popular-products';

const LOCALSTORAGE_KEY = 'basket';
const productMainList = document.querySelector('.product-list');
const basket = loadFromLS(LOCALSTORAGE_KEY) ?? [];

async function handleClickBasket(event) {
  const newBasket = loadFromLS(LOCALSTORAGE_KEY) ?? [];
  const clickedItem = event.target.closest('.btn-basket');
  if (!clickedItem) {
    return;
  }

  const id = event.target.closest('.resp-item').dataset.id;
  const currentProducts = loadFromLS('main products');
  const someProduct = currentProducts.filter(({ _id }) => id === _id)[0];
  const currentButton = document.querySelectorAll(`[data-button-id="${id}"]`);

  updateBasket(LOCALSTORAGE_KEY, someProduct, newBasket);
  updateAllIcon([...currentButton], id, newBasket);
}
export function updateIconMain(btn, id, products) {
  const checkmarkIcon = `<svg class="svg-checkmark" width="18" height="18">
            <use class="href-icon" href="${sprite}#icon-checkmark"></use>
          </svg>`;
  const basketIcon = `<svg class="svg-basket" width="18" height="18">
            <use class="href-icon" href="${sprite}#icon-basket"></use>
          </svg>`;

  const inStorage = products.some(({ _id }) => _id === id);

  btn.innerHTML = inStorage ? checkmarkIcon : basketIcon;
}
counterProducts(basket);

productMainList.addEventListener('click', handleClickBasket);
