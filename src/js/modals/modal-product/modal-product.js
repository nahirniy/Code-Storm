import { loadFromLS } from "../../services/helpers"
import { getProductById } from "../../services/food-api"
//////////
const clouseBottun = document.querySelector(".clouse_modal")
const modalBackdrop = document.querySelector('.modal-backdrop-product')
const productMainList2 = document.querySelector('.product-list');
const modal_window = document.querySelector('.modal-product')
const window_inModal = document.querySelector('.modal-product-inWindow')
//////

clouseBottun.addEventListener('click', function(){
    toglModul();
    OnScroll()
})
function toglModul(){
    modalBackdrop.classList.toggle('is-hidden')
}
function OnScroll(){
    modal_window.style.display = 'none';
    document.body.style.overflow = 'auto';
}
/////////

// const testButton = document.querySelector('.btn-basket')

// testButton.addEventListener('click', testFunctD)



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

    const closestRespItem = event.target.closest('.resp-item');
    if (!closestRespItem) {
        return;
    }

    const currentId2 = closestRespItem.dataset.id;
   
    const currentProduct = await getProductById(currentId2);
    
 
    const marcap = `<div class="img_modal" >
    <img class="photo" src="${currentProduct.img}" alt="${currentProduct.name}" loading="lazy"/>
    </div>
    <h2 class="name-product">${currentProduct.name}</h2>
    <div class="descr-product">
    <p class="category-product"><span class="style-word">Category:</span>${currentProduct.category}</p>
    <p class="size-product"><span class="style-word">Size:</span>${currentProduct.size}</p>
    <p class="popular-product"><span class="style-word">Popularity:</span>${currentProduct.popularity}</p>
    </div>
    <div class="desc-text"><span>${currentProduct.desc}</span></div>
    <div class="footer-product_card">
    <p class="price-product">$${currentProduct.price}</p>
    <button type="button" class="modal-button">Add</button>`
   
    window_inModal.innerHTML = marcap;
    modal_window.style.display = 'block';
  document.body.style.overflow = 'hidden'
    toglModul()

}
productMainList2.addEventListener("click", handleClickOnLi);

