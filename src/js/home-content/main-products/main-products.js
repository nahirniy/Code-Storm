import sprite from '../../../img/icons/sprite.svg';
import { getProductById } from '../../services/food-api'
//import { updateSlider } from '../../home-content/main-products/pagination'
let limit = 6
let totalPages = 0;
const productMainList = document.querySelector('.product-list')
productMainList.addEventListener("click", handleClickBasket)



async function handleClickBasket(event) {
  const clickedItem = event.target.closest('.btn-basket');
  console.log(clickedItem);

  if (clickedItem) {
    const currentId = event.target.closest('.resp-item').dataset.id;
    console.log(currentId);

   
    const existingData = localStorage.getItem("SelectProduct");
    const basketItems = existingData ? JSON.parse(existingData) : [];

    
    const isAlreadyInBasket = basketItems.some(item => item.id === currentId);

    if (!isAlreadyInBasket) {
      try {
        const currentProduct = await getProductById(currentId);
        const basketItem = { id: currentId, product: currentProduct };
        basketItems.push(basketItem);
        localStorage.setItem("SelectProduct", JSON.stringify(basketItems));

        
        console.log('Item added to the basket:', basketItem);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    } else {
      console.log('Item already in the basket:', currentId);
      const basketIcon = clickedItem.querySelector('.href-icon');
      basketIcon.setAttribute('href', `${sprite}#icon-checkmark`);
    }
  }
}
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







