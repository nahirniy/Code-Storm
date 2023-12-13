import { funCartCreateMarkup } from './pr-list-markap';
import { funLoadLellAllLS } from './pr-list-localStorage';
import { loadFromLS } from '../../services/helpers';
import { counterProducts } from '../../services/helpers';

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

const LOCALSTORAGE_KEY = 'basket';
let cartResults = loadFromLS(LOCALSTORAGE_KEY) ?? [];
// добавляем в массив кол-во
const quantity = 'quantity';
cartResults.forEach(function (arr) {
  arr[quantity] = 1;
});

let arrayLength = cartResults.length;
let newTotal = cartTotal(cartResults);

cartProductList();

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
//=======колбек на li===
function onCartItem(evt) {
  const evtBtn = evt.target.closest('button');
  if (!evtBtn) {
    return;
  }
  // Определяем, какая кнопка была нажата
  const buttonClass = evtBtn.classList.value;
  const cartItem = evt.target.closest('.cart-item');
  const evtWrap = evt.target.closest('.cart-counter-wrap');
  // Выполняем соответствующую функцию
  switch (buttonClass) {
    case 'cart-btn-close':
      onCartItemDel(cartItem);
      break;
    case 'cart-counter-btn-minus':
      onMinus(evtWrap, cartItem);
      break;
    case 'cart-counter-btn-plus':
      onPlus(evtWrap, cartItem);
      break;
    default:
      break;
  }
}
// колбек удаления поштучно
function onCartItemDel(cart) {
  const cartIdDell = cart.dataset.id;
  console.log(cartIdDell);
  // удаление элемента из локалстораж и разметки
  const indexToRemove = cartResults.findIndex(obj => obj._id === cartIdDell);
  cartResults.splice(indexToRemove, 1);
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(cartResults));
  cart.remove();
  //============
  arrayLength -= 1;
  if (arrayLength < 4) {
    refs.cartItemContainer.classList.remove('cart-scrol');
  }
  cartTitleAdd(arrayLength);
  counterProducts(cartResults);
  // берем новый масив  и  пересситываем тотал
  newTotal = cartTotal(cartResults);
  console.log(cartResults);
  // если в корзине пусто - выводим пустую корзину
  const recountItem = cartResults.length;
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

// заменяем функцию cartTotal с кол-вом
function cartTotal(results) {
  const totalPrice = results.reduce((total, result) => {
    return total + result.price * result.quantity;
  }, 0);
  return totalPrice;
}
//функции на плюс и минус
function onPlus(wrap, cart) {
  const cartCounter = wrap.children[1];
  // console.dir(cartCounter);
  const numberText = parseInt(cartCounter.textContent);
  cartCounter.textContent = numberText + 1;

  // создаём в объекте новую пару с количеством
  const cartIdDell = cart.dataset.id;
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

function onMinus(wrap, cart) {
  const cartCounter = wrap.children[1];
  const numberText = parseInt(cartCounter.textContent);
  if (numberText === 1) {
    return;
  }
  cartCounter.textContent = numberText - 1;
  // создаём в объекте новую пару с количеством
  const cartIdDell = cart.dataset.id;
  const indexItem = cartResults.findIndex(obj => obj._id === cartIdDell);
  cartResults[indexItem].quantity = parseInt(cartCounter.textContent);
  // записали новый масив в локал сторож
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(cartResults));
  //пересчитали newTotal
  let newTotal = cartTotal(cartResults);
  // записали в итог
  refs.cartProductsSum.innerHTML = `$${String(newTotal.toFixed(2))}`;
}
