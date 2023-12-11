import { loadFromLS } from '../../services/helpers';
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

clouseBottun.addEventListener('click', function () {
  toglModul();
  OnScroll();
});
// modalBackdrop.addEventListener('click', clouseBackdrop )
// function clouseBackdrop (event){
//    const modalBackDrp = event.target.closest('.modal-backdrop-product');
//    if (!modalBackDrp){
//     toglModul()
//     OnScroll()
//    }
// }

window.onclick = function (event) {
  if (event.target == modalBackdrop) {
    toglModul();
    OnScroll();
  }
};

document.addEventListener('keydown', function (event) {
  const closestRespItem = event.target.closest('.modal_window-item');
  if (event.key === 'Escape' && document.body.style.overflow == 'hidden') {
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
/////////

// const TestMod = localStorage.getItem(basket)
// const LOCALSTORAGE_KEY = 'basket'
// const basketTest = loadFromLS(LOCALSTORAGE_KEY) ?? [];
// console.log(basketTest)
// console.log(basketTest[0]._id)
// // const CurrntTestProduct = loadFromLS(currentProduct)
// const testCurren = "640c2dd963a319ea671e3861"
// const currentProduct = await getProductById(testCurren);
// console.log(currentProduct)

async function handleClickOnLi(event) {
  let currentIdModal;
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
  // editText()
  /////////

  const currentProduct = await getProductById(currentIdModal);
  const editTest = editText(currentProduct.category);
  const marcap = `<div class ="TestDiv1"><div class="img_modal2" >
    <img class="photo-modal" src="${currentProduct.img}" alt="${currentProduct.name}" width="160" height="160"  loading="lazy"/>
    </div>
    <div class="testDiv">
    <h3 class="name-product2">${currentProduct.name}</h3>
    <div class="descr-product2">
    <p class="category-product"><span class="style-word">Category:</span>${editTest}</p>
    <p class="size-product"><span class="style-word">Size:</span>${currentProduct.size}</p>
    <p class="popular-product"><span class="style-word">Popularity:</span>${currentProduct.popularity}</p>
    </div>
    <div class="desc-text"> <p class="textModalp">${currentProduct.desc}</p></div>
    </div>
    </div>
    <div class="footer-product_card2">
    <p class="price-product">$${currentProduct.price}</p></div>
    <div class = "end-modal">
    <button type="button" class="modal-button"><span class ="textInButton">Add to</span><svg class="svg-basket2" width="18" height="18">
    <use class="href-icon" href="${sprite}#icon-basket"></use>
  </svg></button></div>`;
  window_inModal.innerHTML = marcap;
  ///
  modal_window.style.display = 'block';
  document.body.style.overflow = 'hidden';
  ///

  toglModul();
}
productMainList2.addEventListener('click', handleClickOnLi);
popularProduct.addEventListener('click', handleClickOnLi);
DiscounProduct.addEventListener('click', handleClickOnLi);
