import { funCartCreateMarkup } from './pr-list-markap';
import { funEmplyCartCreateMarkup } from './pr-list-markap';
import { funLoadFromLS } from './pr-list-localStorage';
import { funLoadLellAllLS } from './pr-list-localStorage';
// console.log('чаокакао');
// console.log(funEmplyCartCreateMarkup());
const refs = {
  cartTitle: document.querySelector('.cart-title'),
  cartTitleContainer: document.querySelector('.cart-title-container'),
  cartItemContainer: document.querySelector('.cart-item-container'),
  cartBtnDelAll: document.querySelector('.cart-btn-del-all'),
};
// console.log(refs.cartBtnItem);
// console.log(refs.cartTitleContainer);
refs.cartItemContainer.addEventListener('click', onCartItem);
refs.cartBtnDelAll.addEventListener('click', onCartDellAll);

const LOCALSTORAGE_KEY = 'basket';
let cartResults = funLoadFromLS(LOCALSTORAGE_KEY);
let arrayLength = cartResults.length;
let newTotal = cartTotal(cartResults);
// console.log(newTotal);
cartProductList();

// console.log(cartResults);
// console.log(cartResults[0]._id);

// колбек кнопки удалить все
function onCartDellAll() {
  refs.cartItemContainer.innerHTML = '';
  // очистка локал стораж
  funLoadLellAllLS(LOCALSTORAGE_KEY);
  refs.cartBtnDelAll.classList.add('cart-display-none');
  cartEmply();
}

// колбек удаления поштучно
function onCartItem(evt) {
  // console.log(evt.target.nodeName);

  const evtBtn = evt.target.closest('.cart-btn-close');
  // console.log(evtBtn);
  if (!evtBtn.nodeName) {
    return;
  }
  // console.dir(evt.target);
  // const cartItemDell = evt.target.parentNode.parentNode.parentNode;
  const cartItemDell = evt.target.closest('.cart-item');
  const cartIdDell = cartItemDell.dataset.id;
  // удаление элемента из локалстораж и разметки
  const indexToRemove = cartResults.findIndex(obj => obj._id === cartIdDell);
  // console.log(indexToRemove);
  cartResults.splice(indexToRemove, 1);
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(cartResults));
  cartItemDell.remove();
  //============
  arrayLength -= 1;
  cartTitleAdd(arrayLength);
  // берем новый масив из локал сторож и  пересситываем тотал
  newTotal = cartTotal(cartResults);
  console.log(newTotal);
  // если в корзине пусто - выводим пустую корзину
  const recountItem = evt.currentTarget.childNodes.length;
  if (recountItem === 0) {
    refs.cartBtnDelAll.classList.add('cart-display-none');
    cartEmply();
  }
}

// добавление заголовка
function cartTitleAdd(leng) {
  refs.cartTitleContainer.classList.remove('cart-display-none');
  refs.cartTitle.textContent = `cart(${leng})`;
}
// главная функция-создание контента корзины
function cartProductList() {
  cartTitleAdd(arrayLength);
  if (!arrayLength) {
    cartEmply();
    return;
  }
  refs.cartBtnDelAll.classList.remove('cart-display-none');
  refs.cartItemContainer.innerHTML = funCartCreateMarkup(cartResults);
}

// функция для пустой корзины
function cartEmply() {
  cartTitleAdd(0);
  refs.cartItemContainer.innerHTML = funEmplyCartCreateMarkup();
}
// функция для подсчета тотал
function cartTotal(results) {
  const totalPrice = results.reduce((total, result) => {
    return total + result.price;
  }, 0);
  return totalPrice;
}
