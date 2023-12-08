const clouseBottun = document.querySelector(".clouse_subscription")
const modalSubs = document.querySelector('.modal-backdrop-subscription')
clouseBottun.addEventListener('click', clouse_subs)
function clouse_subs(){
    modalSubs.classList.toggle('is-hidden')
}
