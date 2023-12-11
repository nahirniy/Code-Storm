import sprite from '../../../img/icons/sprite.svg';

const refs = {
  discountList: document.querySelector('.discount-list'),
};

export default function markupDiscountList(arr) {
  const cards = arr.map(({ name, img, _id, price }) => {
    return `<li class="discount-item" data-id="${_id}">
        <svg class="svg-discount" width="60" height="60">
          <use href="${sprite}#icon-discount-mark"></use>
        </svg>
        <div class="wrap-img">
          <img
            src="${img}"
            alt="${name}"
          />
        </div>
        <div class="discount-product-info">
          <h4 class="product-name">${name}</h4>
          <p class="product-price">$${price}</p>
          <button type="button" class="btn-basket">
          <svg class="svg-basket">
            <use class="href-icon" href="${sprite}#icon-basket"></use>
          </svg>
          </button>
        </div>
      </li>`;
  });

  refs.discountList.insertAdjacentHTML('beforeend', cards.join(''));
}
