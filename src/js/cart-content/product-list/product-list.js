import { funCartCreateMarkup } from './pr-list-markap';
console.log('чаокакао');
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

// забрираю массив с локалсторож с помощью метода
function loadFromLS(key) {
  const data = localStorage.getItem(key);
  try {
    // console.log(JSON.parse(data));
    return JSON.parse(data);
  } catch {
    // console.log(data);
    return data;
  }
}
// пример масива данных - подлежит удалению
const cartResults = [
  {
    _id: '640c2dd963a319ea671e383b',
    name: 'Ackee',
    img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png',
    category: 'Fresh_Produce',
    price: 8.99,
    size: '16 oz',
    is10PercentOff: false,
    popularity: 0,
  },
  {
    _id: '640c2dd963a319ea671e3864',
    name: 'Black Beans',
    img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3864.png',
    category: 'Pantry_Items',
    price: 1.99,
    size: '16oz',
    is10PercentOff: false,
    popularity: 0,
  },
  {
    _id: '640c2dd963a319ea671e37ad',
    name: 'Black Olives',
    img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37ad.png',
    category: 'Fresh_Produce',
    price: 3.99,
    size: '1 jar (16 oz)',
    is10PercentOff: false,
    popularity: 0,
  },
];
let arrayLength = cartResults.length;
console.log(arrayLength);
// колбек кнопки удалить все
function onCartDellAll() {
  refs.cartItemContainer.innerHTML = '';
  refs.cartTitleContainer.innerHTML = '';
  arrayLength = 0;
  refs.cartBtnDelAll.classList.add('cart-display-none');
  cartTitleAdd(arrayLength);
  cartEmply();
}
// колбек удаления поштучно
function onCartItem(evt) {
  // console.log('qwe');
  console.log(evt.target.nodeName);
  if (evt.target.nodeName !== 'svg') {
    return;
  }
  console.log('zwe');
  const cartItemDell = evt.target.parentNode.parentNode.parentNode;
  // console.log(cartItemDell);
  cartItemDell.remove();
  arrayLength -= 1;
  cartTitleAdd(arrayLength);
  // функция пересчета тотала
  const recountItem = evt.currentTarget.childNodes.length;
  if (recountItem === 0) {
    cartEmply();
  }
}

// добавление заголовка
function cartTitleAdd(leng) {
  refs.cartTitleContainer.classList.remove('cart-display-none');
  refs.cartTitle.textContent = `cart(${leng})`;
}
// главная функция
function cartProductList() {
  cartTitleAdd(arrayLength);
  if (!arrayLength) {
    cartEmply();
    return;
  }
  refs.cartBtnDelAll.classList.remove('cart-display-none');
  refs.cartItemContainer.innerHTML = funCartCreateMarkup(cartResults);
}
cartProductList();
// функция для пустой корзины
function cartEmply() {}
