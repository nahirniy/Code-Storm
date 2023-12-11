import { getDiscountProducts } from '../../services/food-api';
import markupDiscountList from './markup-discount-products';
import { loadFromLS, updateBasket, saveToLS } from '../../services/helpers';
import sprite from '../../../img/icons/sprite.svg';

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
  const currentId = event.target.closest('.discount-item').dataset.id;
  const currentProducts = loadFromLS('discount products');
  const someProduct = currentProducts.filter(({ _id }) => currentId === _id)[0];

  updateIcon(clickedItem, currentId, basket);
  updateBasket(LOCALSTORAGE_KEY, someProduct, basket);
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
