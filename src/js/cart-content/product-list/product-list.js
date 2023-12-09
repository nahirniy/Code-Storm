import { funCartCreateMarkup } from './pr-list-markap';
import { funEmplyCartCreateMarkup } from './pr-list-markap';
import { funLoadFromLS } from './pr-list-localStorage';
import { funLoadLellOneLS } from './pr-list-localStorage';
import { funLoadLellAllLS } from './pr-list-localStorage';
console.log('чаокакао');
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

cartProductList();

console.log(cartResults);
console.log(cartResults[0]._id);
console.log(cartTotal(cartResults)); //?

// пример масива данных - подлежит удалению
// const cartResults = [
//   {
//     _id: '640c2dd963a319ea671e383b',
//     name: 'Ackee',
//     img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png',
//     category: 'Fresh_Produce',
//     price: 8.99,
//     size: '16 oz',
//     is10PercentOff: false,
//     popularity: 0,
//   },
//   {
//     _id: '640c2dd963a319ea671e3864',
//     name: 'Black Beans',
//     img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3864.png',
//     category: 'Pantry_Items',
//     price: 1.99,
//     size: '16oz',
//     is10PercentOff: false,
//     popularity: 0,
//   },
//   {
//     _id: '640c2dd963a319ea671e37ad',
//     name: 'Black Olives',
//     img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37ad.png',
//     category: 'Fresh_Produce',
//     price: 3.99,
//     size: '1 jar (16 oz)',
//     is10PercentOff: false,
//     popularity: 0,
//   },
// ];

// const names = cartResults.map(cartResult => cartResult.price);
// console.log(names);
// const toPrice = cartResults.reduce((total, cartResult) => {
//   return total + cartResult.price;
// }, 0);
// console.log(toPrice);

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
  console.log(evt.target.nodeName);
  // funLoadLellOneLS(LOCALSTORAGE_KEY, 1);
  if (
    evt.target.nodeName !== 'svg'
    // evt.target.nodeName !== 'use' ||
    // evt.target.nodeName !== 'BUTTON'
  ) {
    return;
  }
  console.dir(evt.target);
  const cartItemDell = evt.target.parentNode.parentNode.parentNode;
  const cartIdDell = cartItemDell.dataset.id;
  console.dir(cartIdDell);

  // удаление элемента из локалстораж
  const indexToRemove = cartResults.findIndex(obj => obj._id === cartIdDell);
  console.log(indexToRemove);
  const cartNeWResults = cartResults.splice(indexToRemove, 1);
  // console.log(cartNeWResults);
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(cartResults));
  cartItemDell.remove();
  //============
  arrayLength -= 1;
  cartTitleAdd(arrayLength);
  // берем новый масив из локал сторож и  пересситываем тотал
  console.log(cartTotal(cartResults));
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
  console.log(totalPrice);
  console.log(results);
}
