import sprite from '../../../img/icons/sprite.svg';
import { loadFromLS } from '../../services/helpers';

const refs = {
  discountList: document.querySelector('.discount-list'),
};
const basket = loadFromLS('basket') ?? [];

export default function markupDiscountList(arr) {
  const cards = arr.map(({ name, img, _id, price }) => {
    const inStorage = basket.some(product => product._id === _id);

    return `<li class="discount-item" data-id="${_id}">
        <svg class="svg-discount animation-icon" width="60" height="60">
          <use href="${sprite}#icon-discount-mark"></use>
        </svg>
        <div class="wrap-img">
          <img
            src="${img}"
            alt="${name}"
            loading="lazy"
          />
        </div>
        <div class="discount-product-info">
          <h4 class="product-name">${name}</h4>
          <p class="product-price">$${price}</p>
          <button type="button"
            class="btn-basket discount-products-btn"
            data-button-id="${_id}" 
            aria-label="Add or remove product from basket">
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
  });

  refs.discountList.insertAdjacentHTML('beforeend', cards.join(''));
}
