import { loadFromLS, saveToLS } from '../../services/helpers';
import sprite from '../../../img/icons/sprite.svg';

const productMainList = document.querySelector('.product-list');
const LOCALSTORAGE_KEY = 'main products';
const basket = loadFromLS('basket') ?? [];

/*-----------------------------------MARKUP----------------------------*/

export function mainProductMarkup(mainProduct) {
  saveToLS(LOCALSTORAGE_KEY, mainProduct);

  const markup = mainProduct
    .map(item => {
      const formattedCategory = removeUnderscore(item.category);
      const formatPrice = formatNumber(item.price);
      const inStorage = basket.some(({ _id }) => _id === item._id);

      return `<li class="resp-item" data-id="${item._id}">
      ${
        item.is10PercentOff
          ? `<svg class="svg-discount" width="60" height="60">
          <use href="${sprite}#icon-discount-mark"></use>
        </svg>
          `
          : ''
      }
        <div class="img" >
          <img class="photo" src="${item.img}" alt="${
        item.name
      }" width="140" height="140" loading="lazy"/>
        </div>
        <h4 class="name-product">${item.name}</h4>
        <div class="descr-product">
          <p class="category-product"><span class="style-word">Category:</span>${formattedCategory}</p>
          <p class="size-product"><span class="style-word">Size:</span>${
            item.size
          }</p>
          <p class="popular-product"><span class="style-word">Popularity:</span>${
            item.popularity
          }</p>
        </div>
        <div class="footer-product_card">
          <p class="price-product">$${formatPrice}</p>
          <button type="button" class="btn-basket">
          ${
            inStorage
              ? `<svg class="svg-checkmark" width="18" height="18">
            <use class="href-icon" href="${sprite}#icon-checkmark"></use>
          </svg>`
              : `<svg class="svg-basket" width="18" height="18">
            <use class="href-icon" href="${sprite}#icon-basket"></use>
          </svg>`
          }
          </button>
        </div>
      </li>`;
    })
    .join('');

  productMainList.innerHTML = markup;
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
