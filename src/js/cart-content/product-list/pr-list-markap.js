import sprite from '../../../img/icons/sprite.svg';
// функция разметки корзины с товаром
export const funCartCreateMarkup = function createMarkup(arr) {
  return arr
    .map(
      ({
        name,
        category,
        size,
        price,
        img,
        _id,
      }) => `<li class="cart-item" data-id="${_id}">
      <div class="cart-item-wrap">
        <div class="cart-img-container">
          <img class="cart-img" src="${img}" alt="${name}" />
        </div>
        <div class="cart-img-text">
        <div class="cart-item-title-wrap"><h3 class="cart-item-title">${name}</h3>
        <button name="button" type="button" class="cart-btn-close">
        <svg class="cart-icon-close">
          <use href="${sprite}#icon-close"></use>
        </svg>
      </button>
        </div>
          
          <div class="cart-info-container">
            <p class="cart-info">
              Category:
              <span>${category.replaceAll('_', ' ')}</span>
            </p>
            <p class="cart-info cart-info-overflow">
              Size:
              <span>${size}</span>
            </p>
          </div>
          <h3 class="cart-info-price">$${price.toFixed(2)}</h3>
        </div> 
      </div>
     
    </li>`
    )
    .join('');
};
