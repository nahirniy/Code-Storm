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
  updateBasket(LOCALSTORAGE_KEY, someProduct, basket);

  // Вішаємо галочку замість корзинки
  clickedItem.innerHTML = iconCheckMark;
}

const iconCheckMark = `<svg class="svg-checkmark">
      <use href="${sprite}#icon-checkmark"></use>
    </svg>`;
