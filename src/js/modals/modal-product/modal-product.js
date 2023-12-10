import { loadFromLS } from "../../services/helpers"
import { getProductById } from "../../services/food-api"
import sprite from '../../../img/icons/sprite.svg'
//////////
const clouseBottun = document.querySelector(".clouse_modal")
const modalBackdrop = document.querySelector('.modal-backdrop-product')
const modal_window = document.querySelector('.modal-product')
const window_inModal = document.querySelector('.modal-product-inWindow')
const productMainList2 = document.querySelector('.product-list');
const popularProduct = document.querySelector('.popular-section')
const DiscounProduct = document.querySelector('.discount-section')
//////


clouseBottun.addEventListener('click', function(){
    toglModul();
    OnScroll()
})
// modalBackdrop.addEventListener('click', clouseBackdrop )
// function clouseBackdrop (event){
//    const modalBackDrp = event.target.closest('.modal-backdrop-product');
//    if (!modalBackDrp){
//     toglModul()
//     OnScroll()
//    }
// }

window.onclick = function(event) {
    if (event.target == modalBackdrop) {
        toglModul();
        OnScroll()
    }
}

document.addEventListener('keydown', function(event) {
    const closestRespItem = event.target.closest('.modal_window-item');
    if (event.key === 'Escape' &&  document.body.style.overflow == 'hidden') {
        toglModul();
        OnScroll()
    }
  });


function toglModul(){
    modalBackdrop.classList.toggle('is-hidden')
}
function OnScroll(){
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
    if (closestRespItem){
        currentIdModal = closestRespItem.dataset.id;
        console.log(currentIdModal)
    }
    const clickedButton = event.target.closest('.btn-basket');
    if (clickedButton) { 
        return; 
    }
/////////
const closestPopularItem = event.target.closest('.popular-item');
if (closestPopularItem) {
    currentIdModal = closestPopularItem.dataset.id;
    console.log(currentIdModal)
}

const closestDiscounItem = event.target.closest('.discount-item');
if(closestDiscounItem){
    currentIdModal = closestDiscounItem.dataset.id;
    console.log(currentIdModal)
}

if (!closestRespItem && !closestPopularItem && !closestDiscounItem) {
    return;
}

/////////
    // const currentIdModal = closestRespItem.dataset.id;
    const currentProduct = await getProductById(currentIdModal);
    
    const marcap = `<div class="img" >
    <img class="photo" src="${currentProduct.img}" alt="${currentProduct.name}" loading="lazy"/>
    </div>
    <h2 class="name-product">${currentProduct.name}</h2>
    <div class="descr-product">
    <p class="category-product"><span class="style-word">Category:</span>${currentProduct.category}</p>
    <p class="size-product"><span class="style-word">Size:</span>${currentProduct.size}</p>
    <p class="popular-product"><span class="style-word">Popularity:</span>${currentProduct.popularity}</p>
    </div>
    <div class="desc-text"> <p class="textModalp">${currentProduct.desc}</p></div>
    
    <div class="footer-product_card2">
    <p class="price-product">$${currentProduct.price}</p></div>
    <div class = "end-modal">
    <button type="button" class="modal-button">Add to<svg class="svg-basket2" width="34" height="34">
    <use class="href-icon" href="${sprite}#icon-basket"></use>
  </svg></button></div>`
    window_inModal.innerHTML = marcap;
     ///
    modal_window.style.display = 'block';
  document.body.style.overflow = 'hidden'
     ///
    toglModul()

}
productMainList2.addEventListener("click", handleClickOnLi);
popularProduct.addEventListener("click", handleClickOnLi);
DiscounProduct.addEventListener("click", handleClickOnLi);