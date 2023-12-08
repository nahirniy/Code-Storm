

let page = 1;
let limit = 6;
let totalPages = 0;

/*-------------------------CHECK LIMIT(WIDTH SCRENN--------------------*/

function addClickEventIfInRange() {
  let rezice = window.innerWidth;

  if (rezice <= 375) {
    limit = 6;
  } else if (rezice >= 375 && rezice <= 768) {
    limit = 8;
  } else {
    limit = 9;
  }
}

addClickEventIfInRange();

window.addEventListener('resize', () => addClickEventIfInRange());



// /*---------------------HANDLE CLICK BASKET--------------------*/
// function handleClickBasket(event) {
//   const clickedItem = event.currentTarget.closest('.resp-item');
//   if (clickedItem) {
//     const itemName = clickedItem.querySelector('.name-product').textContent;
//     const itemPrice = clickedItem.querySelector('.price-product').textContent;
//     const basketItem = { name: itemName, price: itemPrice };
//     localStorage.setItem(itemName, JSON.stringify(basketItem));

//     const basketIcon = clickedItem.querySelector('.href-icon');
//     if (basketIcon) {
//       basketIcon.setAttribute('href', `${sprite}#icon-checkmark`);
//     }
//   }
// }