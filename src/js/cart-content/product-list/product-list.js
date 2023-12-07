// (() => {
//     const refs = {
//       openModalBtn: document.querySelector("[data-modal-open]"),
//       closeModalBtn: document.querySelector("[data-modal-close]"),
//       modal: document.querySelector("[data-modal]"),
//     };

//     refs.openModalBtn.addEventListener("click", toggleModal);
//     refs.closeModalBtn.addEventListener("click", toggleModal);

//     function toggleModal() {
//       refs.modal.classList.toggle("is-hidden");
//     }
//   })();
console.log('чаокакао');
const refs = {
  cartTitle: document.querySelector('.cart-title'),
  cartTitleContainer: document.querySelector('.cart-title-container'),
  cartItemContainer: document.querySelector('.cart-item-container'),
  cartBtnDelAll: document.querySelector('.cart-btn-del-all'),
};
// console.log(refs.cartBtnDelAll);
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
function onCartDellAll() {}
// колбек удаления поштучно
function onCartItem() {}
// функция разметки
function createMarkup(arr) {
  return arr
    .map(
      ({ name, category, size, price, img }) => `<li class="cart-item">
        <button name="button" class="cart-btn-close">
          <svg class="cart-icon-basket">
            <use href=".\img\icons\sprite.svg#icon-close"></use>
          </svg>
        </button>
        <div class="cart-img-container">
          <img class="cart-img" src="${img}" alt="${name}" />
        </div>
        <div class="cart-img-text">
          <h3 class="cart-item-title">${name}</h3>
          <div class="cart-info-container">
            <p class="cart-info">
              Category:
              <span>${category}</span>
            </p>
            <p class="cart-info">
              Size:
              <span>${size}</span>
            </p>
          </div>
          <h3>${price}</h3>
        </div>
      </li>`
    )
    .join('');
}
// console.log(createMarkup(cartResults));
// добавление заголовка
function cartTitleAdd() {
  refs.cartTitleContainer.classList.remove('cart-display-none');
  refs.cartTitleContainer.insertAdjacentHTML(
    'beforeend',
    `<h2 class="cart-title">cart(${arrayLength})</h2>`
  );
}
// главная функция
function cartProductList() {
  cartTitleAdd();
  if (!arrayLength) {
    cartEmply();
    return;
  }
  refs.cartBtnDelAll.classList.remove('cart-display-none');
  refs.cartItemContainer.innerHTML = createMarkup(cartResults);
}
cartProductList();
// функция для пустой корзины
function cartEmply() {}
