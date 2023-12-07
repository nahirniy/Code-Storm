import { getCurrentProducts } from '../../services/food-api';
import { markupInfoMainProduct, mainProductMarkup } from './markup-main-product';

const inputWord = document.querySelector('input')
const btnSubmit = document.querySelector('.btn-submit')
const productList = document.querySelector('.product-list')
const productItem = document.querySelector('.photo-card')
let searchWord = ''
let page = 1
let limit = 6
let totalPages = 0

/*-------------------------CHECK LIMIT(WIDTH SCRENN--------------------*/

function addClickEventIfInRange() {
  let rezice = window.innerWidth;

  if (rezice <= 375) {
   limit = 6
  } else if (rezice >= 375 && rezice <= 768) {
    limit = 8
  } else {
    limit = 9
  }
}

addClickEventIfInRange();

window.addEventListener('resize', function (event) {
  addClickEventIfInRange();
});
/*-----------------------------QUERY DATA WITH EVENT SUBMIT---------------------------*/
btnSubmit.addEventListener('click', handleClick);

async function handleClick(event) {
  event.preventDefault();
    searchWord = inputWord.value.trim();
    
  try {
    const searchObjects = await getCurrentProducts({keyword:null, category: null, page: 1, limit: limit, byABC: false});
    let results = searchObjects.results; 
    let arrayLength = results.length;
    totalPages = searchObjects.totalPages

    if (arrayLength > 0) {
      productItem.innerHTML = '';
      productItem.insertAdjacentHTML("beforeend", mainProductMarkup(results));
      const basketIcons = document.querySelectorAll('.svg-basket');
      basketIcons.forEach((icon) => {
        icon.addEventListener('click', handleClickBasket);
      });
    } else {
      productItem.innerHTML = '';
       const infoMessage = markupInfoMainProduct();
      productItem.insertAdjacentHTML("beforeend", infoMessage);
    }
    clickIconBasket()

  } catch (error) {
    console.error(error);
  }
}
/*---------------ADD EVENT FOR ALL ICONS---------------------*/
function clickIconBasket() {
  const basketIcons = document.querySelectorAll('.svg-basket');
  basketIcons.forEach((icon) => {
    icon.addEventListener('click', handleClickBasket);
  });
}


/*---------------------HANDLE CLICK BASKET--------------------*/
function handleClickBasket(event) {
  const clickedItem = event.currentTarget.closest('.resp-item');
  if (clickedItem) {
    const itemName = clickedItem.querySelector('.name-product').textContent;
    const itemPrice = clickedItem.querySelector('.price-product').textContent;
    const basketItem = { name: itemName, price: itemPrice };
    localStorage.setItem(itemName, JSON.stringify(basketItem));

   
    const basketIcon = clickedItem.querySelector('.href-icon');
    if (basketIcon) {
      basketIcon.setAttribute('href', `${sprite}#icon-checkmark`);
    }
  } 
}
