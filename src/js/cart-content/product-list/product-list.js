import { funCartCreateMarkup } from './pr-list-markap';
import { funLoadLellAllLS } from './pr-list-localStorage';
import { loadFromLS } from '../../services/helpers';
import { counterProducts } from '../../services/helpers';
// import { onPlusFoo } from './cart-counter';
// import { onMinusFoo } from './cart-counter';

const refs = {
  cartContent: document.querySelector('.cart-content-wrap'),
  cartTitle: document.querySelector('.cart-title'),
  cartTitleContainer: document.querySelector('.cart-title-container'),
  cartItemContainer: document.querySelector('.cart-item-container'),
  cartBtnDelAll: document.querySelector('.cart-btn-del-all'),
  cartEmptyContent: document.querySelector('.cart-yellow-container'),
  cartProductsSum: document.querySelector('.order-products-sum'),
  cartBtnDellContainer: document.querySelector('.cart-btn-wrap'),
  cartOrderProducts: document.querySelector('.order-products'),
};

refs.cartItemContainer.addEventListener('click', onCartItem);
refs.cartBtnDelAll.addEventListener('click', onCartDellAll);

refs.cartItemContainer.addEventListener('click', onPlus);
refs.cartItemContainer.addEventListener('click', onMinus);

const LOCALSTORAGE_KEY = 'basket';
let cartResults = loadFromLS(LOCALSTORAGE_KEY) ?? [];
// добавляем в массив кол-во
const quantity = 'quantity';
cartResults.forEach(function (arr) {
  arr[quantity] = 1;
});
console.log(cartResults);
let arrayLength = cartResults.length;
let newTotal = cartTotal(cartResults);

cartProductList();

// const plusBtn = document.querySelector('.cart-counter-btn-plus');
//

// колбек кнопки удалить все
function onCartDellAll() {
  refs.cartItemContainer.innerHTML = '';

  funLoadLellAllLS(LOCALSTORAGE_KEY);
  arrayLength = 0;
  cartResults = [];
  cartTitleAdd(arrayLength);
  counterProducts(cartResults);
  refs.cartEmptyContent.classList.remove('visually-hidden');
  refs.cartBtnDellContainer.classList.add('visually-hidden');
  refs.cartOrderProducts.classList.add('visually-hidden');
}

// колбек удаления поштучно
function onCartItem(evt) {
  const evtBtn = evt.target.closest('.cart-btn-close');

  const classBtn = evtBtn.classList.value;
  console.log(classBtn);
  if (classBtn !== 'cart-btn-close') {
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
  if (arrayLength < 4) {
    refs.cartItemContainer.classList.remove('cart-scrol');
  }
  cartTitleAdd(arrayLength);
  counterProducts(cartResults);

  // берем новый масив из локал сторож и  пересситываем тотал
  newTotal = cartTotal(cartResults);

  // если в корзине пусто - выводим пустую корзину
  const recountItem = evt.currentTarget.childNodes.length;
  if (recountItem === 0) {
    refs.cartEmptyContent.classList.remove('visually-hidden');
    refs.cartBtnDellContainer.classList.add('visually-hidden');
    refs.cartOrderProducts.classList.add('visually-hidden');
    return;
  }

  refs.cartProductsSum.innerHTML = `$${String(newTotal.toFixed(2))}`;
  refs.cartEmptyContent.classList.add('visually-hidden');
  refs.cartBtnDellContainer.classList.remove('visually-hidden');
  refs.cartOrderProducts.classList.remove('visually-hidden');
}

// добавление заголовка
function cartTitleAdd(leng) {
  refs.cartTitle.textContent = `cart (${leng})`;
}

// главная функция-создание контента корзины
function cartProductList() {
  cartTitleAdd(arrayLength);

  if (!arrayLength) {
    refs.cartEmptyContent.classList.remove('visually-hidden');
    refs.cartBtnDellContainer.classList.add('visually-hidden');
    refs.cartOrderProducts.classList.add('visually-hidden');
    return;
  }

  refs.cartEmptyContent.classList.add('visually-hidden');
  refs.cartBtnDellContainer.classList.remove('visually-hidden');
  refs.cartOrderProducts.classList.remove('visually-hidden');

  refs.cartItemContainer.innerHTML = funCartCreateMarkup(cartResults);
  refs.cartProductsSum.innerHTML = `$${String(newTotal.toFixed(2))}`;
}

// функция для подсчета тотал
// function cartTotal(results) {
//   const totalPrice = results.reduce((total, result) => {
//     return total + result.price;
//   }, 0);
//   return totalPrice;
// }
// заменяем функцию cartTotal с кол-вом
function cartTotal(results) {
  const totalPrice = results.reduce((total, result) => {
    return total + result.price * result.quantity;
  }, 0);
  return totalPrice;
}
//функции на плюс и минус
function onPlus(evt) {
  const evtBtn = evt.target.closest('.cart-counter-btn-plus');
  const classBtn = evtBtn.classList.value;
  console.log(classBtn);
  if (classBtn !== 'cart-counter-btn-plus') {
    return;
  }
  console.log(classBtn);
  const evtWrap = evt.target.closest('.cart-counter-wrap');
  // const itemId = console.dir(evtBtn);
  const cartCounter = evtWrap.children[1];
  // console.dir(cartCounter);
  const numberText = parseInt(cartCounter.textContent);
  cartCounter.textContent = numberText + 1;
  console.log(cartCounter.textContent);
  // создаём в объекте новую пару с количеством
  const cartItemDell = evt.target.closest('.cart-item');
  const cartIdDell = cartItemDell.dataset.id;
  const indexItem = cartResults.findIndex(obj => obj._id === cartIdDell);
  // console.log(indexItem);
  cartResults[indexItem].quantity = parseInt(cartCounter.textContent);
  // записали новый масив в локал сторож
  // console.log(cartResults);
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(cartResults));
  //пересчитали newTotal
  let newTotal = cartTotal(cartResults);
  // console.log(newTotal);
  // записали в итог
  refs.cartProductsSum.innerHTML = `$${String(newTotal.toFixed(2))}`;
}

function onMinus(evt) {
  // console.log('нг');
  const evtBtn = evt.target.closest('.cart-counter-btn-minus');
  const classBtn = evtBtn.classList.value;
  // console.log(classBtn);
  if (classBtn !== 'cart-counter-btn-minus') {
    return;
  }
  const evtWrap = evt.target.closest('.cart-counter-wrap');
  const cartCounter = evtWrap.children[1];
  const numberText = parseInt(cartCounter.textContent);
  if (numberText === 1) {
    return;
  }
  cartCounter.textContent = numberText - 1;
  // создаём в объекте новую пару с количеством
  const cartItemDell = evt.target.closest('.cart-item');
  const cartIdDell = cartItemDell.dataset.id;
  const indexItem = cartResults.findIndex(obj => obj._id === cartIdDell);
  cartResults[indexItem].quantity = parseInt(cartCounter.textContent);
  // записали новый масив в локал сторож
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(cartResults));
  //пересчитали newTotal
  let newTotal = cartTotal(cartResults);
  // console.log(newTotal);
  // записали в итог
  refs.cartProductsSum.innerHTML = `$${String(newTotal.toFixed(2))}`;
}
