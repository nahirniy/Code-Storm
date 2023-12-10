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
          <h3 class="cart-item-title">${name}</h3>
          <div class="cart-info-container">
            <p class="cart-info">
              Category:
              <span>${category.replaceAll('_', ' ')}</span>
            </p>
            <p class="cart-info">
              Size:
              <span>${size}</span>
            </p>
          </div>
          <h3 class="cart-info-price">$${price}</h3>
        </div> 
      </div>
      <div class="cart-btn-wrap">
        <button name="button" type="button" class="cart-btn-close">
          <svg class="cart-icon-close">
            <use href="./img/icons/sprite.svg#icon-close"></use>
          </svg>
        </button>
      </div>
    </li>`
    )
    .join('');
};
// функция разметки пустой корзины
export const funEmplyCartCreateMarkup = function createEmplyMarkup() {
  const emplyMarkup = `<div class="cart-yellow-container">
  <img
    class="cart-yellow-img"
    src="./img/cart/yellow shopping basket .png "
    alt="yellow shopping basket "
  />

  <h3 class="cart-yellow-title">
    Your basket is <span class="cart-yellow-span">empty...</span>
  </h3>
  <p class="cart-yellow-text">
    Go to the main page to select your favorite <br />
    products and add them to the cart.
  </p>
</div>`;
  return emplyMarkup;
};
