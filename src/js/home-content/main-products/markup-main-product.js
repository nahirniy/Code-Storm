import { saveToLS } from '../../services/helpers';
import sprite from '../../../img/icons/sprite.svg';

const productMainList = document.querySelector('.product-list');
const LOCALSTORAGE_KEY = 'main products';


/*-----------------------------------MARKUP----------------------------*/

export function mainProductMarkup(mainProduct) {
  saveToLS(LOCALSTORAGE_KEY, mainProduct);
  const markup = mainProduct
    .map(item => {
      let formattedCategory = removeUnderscore(item.category);
      let formatPrice = formatNumber(item.price);
      return `<li class="resp-item" data-id="${item._id}" data-info="${item}" data-discount="${item.is10PercentOff}">
        <div class="img" >
          <img class="photo" src="${item.img}" alt="${item.name}" loading="lazy"/>
        </div>
        <h2 class="name-product">${item.name}</h2>
        <div class="descr-product">
          <p class="category-product"><span class="style-word">Category:</span>${formattedCategory}</p>
          <p class="size-product"><span class="style-word">Size:</span>${item.size}</p>
          <p class="popular-product"><span class="style-word">Popularity:</span>${item.popularity}</p>
        </div>
        <div class="footer-product_card">
          <p class="price-product">$${formatPrice}</p>
          <button type="button" class="btn-basket">
          <svg class="svg-basket" width="34" height="34">
            <use class="href-icon" href="${sprite}#icon-basket"></use>
          </svg>
          </button>
        </div>
      </li>`;
    })
    .join('');

  console.log(mainProduct.length)
  productMainList.innerHTML = markup;
 

  //   const productItems = document.querySelectorAll('.resp-item');
  // console.log(productItems);

  // productItems.forEach(productItem => {
  //   const isDiscount = item.is10PercentOff; // Assuming item.is10PercentOff is a boolean
  //   addDiscountIcon(productItem, isDiscount);
  // });
//   console.log(productItems)
//    productItems.forEach(productItem => {
//     const checkDiscount = productItem.dataset.discount;
//     if (checkDiscount === "true") {
//         console.log(checkDiscount);
//         addDiscountIcon(productItem);
//     } else {
//         console.log('data-discount is undefined for this item.');
//     }
// });
    
  
}
function removeUnderscore(text) {
  return text.replace(/_/g, ' ');
}
function formatNumber(number) {
  if (Number.isInteger(number)) {
    return `${number}.00`;
  } else {
    return number.toFixed(2);
  }
}

/*-------------------------------------ADD DISCOUNT ICON---------------------------------*/
 
// function addDiscountIcon(productItem) {
//     productItem.insertAdjacentHTML("beforeend", `
//         <svg class="svg-discount" width="60" height="60">
//             <use href="${sprite}#icon-discount-mark"></use>
//         </svg>
//     `);
// }
// function addDiscountIcon(productItem, isDiscount) {
//     if (isDiscount) {
//         const discountIcon = document.createElement('svg');
//         discountIcon.classList.add('svg-discount');
//         discountIcon.setAttribute('width', '60');
//         discountIcon.setAttribute('height', '60');
//         discountIcon.innerHTML = `<use href="${sprite}#icon-discount-mark"></use>`;

//         productItem.querySelector('.footer-product_card').appendChild(discountIcon);
//     }
// }