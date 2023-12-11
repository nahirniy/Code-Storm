import {
  counterProducts,
  loadFromLS,
  updateBasket,
} from '../../services/helpers';
import sprite from '../../../img/icons/sprite.svg';

const LOCALSTORAGE_KEY = 'basket';
const productMainList = document.querySelector('.product-list');
const basket = loadFromLS(LOCALSTORAGE_KEY) ?? [];

async function handleClickBasket(event) {
  const newBasket = loadFromLS(LOCALSTORAGE_KEY) ?? [];
  const clickedItem = event.target.closest('.btn-basket');
  if (!clickedItem) {
    return;
  }

  const currentId = event.target.closest('.resp-item').dataset.id;
  const currentProducts = loadFromLS('main products');
  const someProduct = currentProducts.filter(({ _id }) => currentId === _id)[0];

  updateIcon(clickedItem, currentId, newBasket);
  updateBasket(LOCALSTORAGE_KEY, someProduct, newBasket);
}

function updateIcon(btn, id, products) {
  const checkmarkIcon = `<svg class="svg-checkmark" width="18" height="18">
            <use class="href-icon" href="${sprite}#icon-checkmark"></use>
          </svg>`;
  const basketIcon = `<svg class="svg-basket" width="18" height="18">
            <use class="href-icon" href="${sprite}#icon-basket"></use>
          </svg>`;

  const inStorage = products.some(({ _id }) => _id === id);

  btn.innerHTML = inStorage ? basketIcon : checkmarkIcon;
}

counterProducts(basket);

productMainList.addEventListener('click', handleClickBasket);
