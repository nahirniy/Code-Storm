import {
  counterProducts,
  loadFromLS,
  updateBasket,
} from '../../services/helpers';

//import { updateSlider } from '../../home-content/main-products/pagination'

let limit = 6;
let totalPages = 0;
const LOCALSTORAGE_KEY = 'basket';
const basket = loadFromLS(LOCALSTORAGE_KEY) ?? [];
const productMainList = document.querySelector('.product-list');

async function handleClickBasket(event) {
  const clickedItem = event.target.closest('.btn-basket');
  if (!clickedItem) {
    return;
  }
  const currentId = event.target.closest('.resp-item').dataset.id;
  const currentProducts = loadFromLS('main products');
  const someProduct = currentProducts.filter(({ _id }) => currentId === _id)[0];
  updateBasket(LOCALSTORAGE_KEY, someProduct, basket);
}
counterProducts(basket);

productMainList.addEventListener('click', handleClickBasket);
