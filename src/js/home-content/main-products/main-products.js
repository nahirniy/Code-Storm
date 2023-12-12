import {
  counterProducts,
  loadFromLS,
  updateAllIcon,
  updateBasket,
} from '../../services/helpers';

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

counterProducts(basket);

productMainList.addEventListener('click', handleClickBasket);
