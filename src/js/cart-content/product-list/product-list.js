import { funCartCreateMarkup } from './pr-list-markap';
import { funLoadLellAllLS } from './pr-list-localStorage';
import { loadFromLS } from '../../services/helpers';

const refs = {
  cartContent: document.querySelector('.cart-content-wrap'),
  cartTitle: document.querySelector('.cart-title'),
  cartTitleContainer: document.querySelector('.cart-title-container'),
  cartItemContainer: document.querySelector('.cart-item-container'),
  cartBtnDelAll: document.querySelector('.cart-btn-del-all'),
  cartEmptyContent: document.querySelector('.cart-yellow-container'),
  cartProductsSum: document.querySelector('.order-products-sum'),
};

refs.cartItemContainer.addEventListener('click', onCartItem);
refs.cartBtnDelAll.addEventListener('click', onCartDellAll);

const LOCALSTORAGE_KEY = 'basket';
const cartResults = loadFromLS(LOCALSTORAGE_KEY) ?? [];
let arrayLength = cartResults.length;
let newTotal = cartTotal(cartResults);

cartProductList();

// колбек кнопки удалить все
function onCartDellAll() {
  refs.cartItemContainer.innerHTML = '';

  funLoadLellAllLS(LOCALSTORAGE_KEY);
}

// колбек удаления поштучно
function onCartItem(evt) {
  const evtBtn = evt.target.closest('.cart-btn-close');
  if (!evtBtn.nodeName) {
    return;
  }

  const cartItemDell = evt.target.closest('.cart-item');
  const cartIdDell = cartItemDell.dataset.id;

  // удаление элемента из локалстораж и разметки
  const indexToRemove = cartResults.findIndex(obj => obj._id === cartIdDell);

  cartResults.splice(indexToRemove, 1);
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(cartResults));
  cartItemDell.remove();

  //============
  arrayLength -= 1;
  cartTitleAdd(arrayLength);

  // берем новый масив из локал сторож и  пересситываем тотал
  newTotal = cartTotal(cartResults);

  // если в корзине пусто - выводим пустую корзину
  const recountItem = evt.currentTarget.childNodes.length;
  if (recountItem === 0) {
    refs.cartEmptyContent.classList.remove('visually-hidden');
    refs.cartContent.classList.add('visually-hidden');

    return;
  }

  refs.cartProductsSum.innerHTML = `$${String(newTotal.toFixed(2))}`;
  refs.cartEmptyContent.classList.add('visually-hidden');
  refs.cartContent.classList.remove('visually-hidden');
}

// добавление заголовка
function cartTitleAdd(leng) {
  refs.cartTitle.textContent = `cart(${leng})`;
}

// главная функция-создание контента корзины
function cartProductList() {
  cartTitleAdd(arrayLength);

  if (!arrayLength) {
    refs.cartEmptyContent.classList.remove('visually-hidden');
    refs.cartContent.classList.add('visually-hidden');
    return;
  }

  refs.cartEmptyContent.classList.add('visually-hidden');
  refs.cartContent.classList.remove('visually-hidden');

  refs.cartItemContainer.innerHTML = funCartCreateMarkup(cartResults);
  refs.cartProductsSum.innerHTML = `$${String(newTotal.toFixed(2))}`;
}

// функция для подсчета тотал
function cartTotal(results) {
  const totalPrice = results.reduce((total, result) => {
    return total + result.price;
  }, 0);
  return totalPrice;
}
