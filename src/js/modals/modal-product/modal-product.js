import {
  loadFromLS,
  updateAllIcon,
  updateBasket,
} from '../../services/helpers';
import { getProductById } from '../../services/food-api';
import { editText } from '../../services/helpers';
import sprite from '../../../img/icons/sprite.svg';
//////////
const clouseBottun = document.querySelector('.clouse_modal');
const modalBackdrop = document.querySelector('.modal-backdrop-product');
const modal_window = document.querySelector('.modal-product');
const window_inModal = document.querySelector('.modal-product-inWindow');
const productMainList2 = document.querySelector('.product-list');
const popularProduct = document.querySelector('.popular-section');
const DiscounProduct = document.querySelector('.discount-section');
//////

const LOCALSTORAGE_KEY = 'basket';
let basket;
let currentIdModal;

const handleClickBtn = () => optionsModal(currentIdModal, basket);

function closeModal() {
  document
    .querySelector('.modal-button')
    .removeEventListener('click', handleClickBtn);

  toglModul();
  OnScroll();

  modal_window.classList.remove('visible-modal');
}

clouseBottun.addEventListener('click', function () {
  closeModal();
});

modalBackdrop.addEventListener('click', event => {
  if (event.target == modalBackdrop) {
    closeModal();
  }
});

document.addEventListener('keydown', function (event) {
  const closestRespItem = event.target.closest('.modal_window-item');
  if (event.key === 'Escape' && document.body.style.overflow === 'hidden') {
    toglModul();
    OnScroll();
  }
});

function toglModul() {
  modalBackdrop.classList.toggle('is-hidden');
}
function OnScroll() {
  document.body.style.overflow = '';
}

async function handleClickOnLi(event) {
  basket = loadFromLS(LOCALSTORAGE_KEY) ?? [];

  const closestRespItem = event.target.closest('.resp-item');
  if (closestRespItem) {
    currentIdModal = closestRespItem.dataset.id;
  }
  const clickedButton = event.target.closest('.btn-basket');
  if (clickedButton) {
    return;
  }
  const clickButtn = event.target.closest('.btn-light-basket');
  if (clickButtn) {
    return;
  }
  /////////
  const closestPopularItem = event.target.closest('.popular-item');
  if (closestPopularItem) {
    currentIdModal = closestPopularItem.dataset.id;
  }

  const closestDiscounItem = event.target.closest('.discount-item');
  if (closestDiscounItem) {
    currentIdModal = closestDiscounItem.dataset.id;
  }

  if (!closestRespItem && !closestPopularItem && !closestDiscounItem) {
    return;
  }

  modal_window.classList.add('visible-modal');

  const inStorage = basket.find(product => product._id == currentIdModal);
  const currentProduct = await getProductById(currentIdModal);
  const editTest = editText(currentProduct.category);
  const marcap = `<div class ="TestDiv1"><div class="img_modal2" >
    <img class="photo-modal" src="${currentProduct.img}" alt="${
    currentProduct.name
  }" width="160" height="160"  loading="lazy"/>
    </div>
    <div class="testDiv">
    <h3 class="name-product2">${currentProduct.name}</h3>
    <div class="descr-product2">
    <p class="category-product"><span class="style-word">Category:</span>${editTest}</p>
    <p class="size-product"><span class="style-word">Size:</span>${
      currentProduct.size
    }</p>
    <p class="popular-product"><span class="style-word">Popularity:</span>${
      currentProduct.popularity
    }</p>
    </div>
    <div class="desc-text"> <p class="textModalp">${
      currentProduct.desc
    }</p></div>
    </div>
    </div>
    <div class="footer-product_card2">
    <p class="price-product">$${currentProduct.price}</p></div>
    <div class = "end-modal">
    <button type="button" class="modal-button"><span class ="textInButton">${
      inStorage ? 'Remove from' : 'Add to'
    }</span><svg class="svg-basket2" width="18" height="18">
    <use class="href-icon" href="${sprite}#icon-basket"></use>
  </svg></button></div>`;
  window_inModal.innerHTML = marcap;
  ///
  modal_window.style.display = 'block';
  document.body.style.overflow = 'hidden';

  toglModul();

  const currentBtn = document.querySelector('.modal-button');
  currentBtn.addEventListener('click', handleClickBtn);
}

function findProduct(id) {
  const mainProducts = loadFromLS('main products');
  const popularProducts = loadFromLS('popular products');
  const discountProducts = loadFromLS('discount products');

  const allProducts = [
    ...mainProducts,
    ...popularProducts,
    ...discountProducts,
  ];

  const currentProduct = allProducts.find(product => product._id === id);

  return currentProduct;
}

function optionsModal(id, basket) {
  const product = findProduct(id);
  const currentButtons = document.querySelectorAll(`[data-button-id="${id}"]`);

  updateBasket(LOCALSTORAGE_KEY, product, basket);
  updateAllIcon([...currentButtons], id, basket);

  const inBasket = basket.find(product => product._id === id);
  const textInBtn = document.querySelector('.textInButton');

  inBasket
    ? (textInBtn.textContent = 'Remove from')
    : (textInBtn.textContent = 'Add to');
}

productMainList2.addEventListener('click', handleClickOnLi);
popularProduct.addEventListener('click', handleClickOnLi);
DiscounProduct.addEventListener('click', handleClickOnLi);
