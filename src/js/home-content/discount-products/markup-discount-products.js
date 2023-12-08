import sprite from '../../../img/icons/sprite.svg';

const refs = {
  discountList: document.querySelector('.discount-list'),
};

export default function markupDiscountList(arr) {
  const cards = arr.map(({ name, img, _id, price }) => {
    return `<li class="discount-item" data-id="${_id}"><div class="wrap-img">
          <img
            src="${img}"
            alt="${name}"
          />
        </div>
        <div class="discount-product-info">
          <h3 class="product-name">${name}</h3>
          <p class="product-price">$${price}</p>
          <svg class="svg-basket" width="34" height="34">
            <use class="href-icon" href="${sprite}#icon-basket"></use>
          </svg>
        </div>
      </li>`;
  });

  refs.discountList.insertAdjacentHTML('beforeend', cards.join(''));
}
