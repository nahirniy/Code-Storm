// функция разметки
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
          <h3 class="cart-item-title">${name}</h3>
          <div class="cart-info-container">
            <p class="cart-info">
              Category:
              <span>${category}</span>
            </p>
            <p class="cart-info">
              Size:
              <span>${size}</span>
            </p>
          </div>
          <h3>${price}</h3>
        </div>
      </div>
      <div class="cart-btn-wrap">
        <button name="button" type="button" class="cart-btn-close">
          <svg class="cart-icon-basket">
            <use href=".\img\icons\sprite.svg#icon-close"></use>
          </svg>
        </button>
      </div>
    </li>`
    )
    .join('');
};
