const openBottun = document.querySelector(".modal_button")
const clouseBottun = document.querySelector(".clouse_modal")
const modalBackdrop = document.querySelector('.modal-backdrop-order')
//////
openBottun.addEventListener('click', toglModul)
clouseBottun.addEventListener('click', toglModul)
function toglModul(){
    modalBackdrop.classList.toggle('is-hidden')
}
/////

