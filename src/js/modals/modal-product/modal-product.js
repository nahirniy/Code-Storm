const openBottun = document.querySelector(".modal_product_open")
const clouseBottun = document.querySelector(".clouse_modal")
const modalBackdrop = document.querySelector('.modal-backdrop-product')
//////
openBottun.addEventListener('click', toglModul)
clouseBottun.addEventListener('click', toglModul)
function toglModul(){
    modalBackdrop.classList.toggle('is-hidden')
}
/////
