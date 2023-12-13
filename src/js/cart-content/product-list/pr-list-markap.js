import sprite from '../../../img/icons/sprite.svg';
// функция разметки корзины с товаром без кол-ва
// export const funCartCreateMarkup = function createMarkup(arr) {
//   return arr
//     .map(
//       ({
//         name,
//         category,
//         size,
//         price,
//         img,
//         _id,
//       }) => `<li class="cart-item" data-id="${_id}">
//       <div class="cart-item-wrap">
//         <div class="cart-img-container">
//           <img class="cart-img" src="${img}" alt="${name}" />
//         </div>
//         <div class="cart-img-text">
//         <div class="cart-item-title-wrap"><h3 class="cart-item-title">${name}</h3>
//         <button name="button" type="button" class="cart-btn-close" aria-label="Close modal window">
//         <svg class="cart-icon-close">
//           <use href="${sprite}#icon-close"></use>
//         </svg>
//       </button>
//         </div>

//           <div class="cart-info-container">
//             <p class="cart-info">
//               Category:
//               <span>${category.replaceAll('_', ' ')}</span>
//             </p>
//             <p class="cart-info cart-info-overflow">
//               Size:
//               <span>${size}</span>
//             </p>
//           </div>
//           <h3 class="cart-info-price">$${price.toFixed(2)}</h3>
//         </div>
//       </div>

//     </li>`
//     )
//     .join('');
// };
// функция разметки корзины с товаром с кол-вом
export const funCartCreateMarkup = function createMarkup(arr) {
  console.log(arr);

  return arr
    .map(
      ({
        name,
        category,
        size,
        price,
        img,
        _id,
        amount,
      }) => `<li class="cart-item" data-id="${_id}">
        <div class="cart-item-wrap">
          <div class="cart-img-container">
            <img class="cart-img" src="${img}" alt="${name}" />
          </div>
          <div class="cart-img-text">
          <div class="cart-item-title-wrap"><span class="cart-item-title">${name}</span>
          <button name="button" type="button" class="cart-btn-close" id="cart-btn-close">
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
            <div class="counter-wrap">
                <h3 class="cart-info-price">$${price}</h3>
                <div class="cart-counter-wrap">
                    <button class="cart-counter-btn-minus" >
                    <svg class="cart-counter-icon">
        <use href="${sprite}#icon-minus"></use>
      </svg>
                    </button>
                    <span class="cart-counter-text" id="item-${_id}-counter">${amount}</span>
                    <button class="cart-counter-btn-plus"  >
                    <svg class="cart-counter-icon" >
        <use href="${sprite}#icon-plus"></use>
      </svg>
                    </button>
                </div>
                </div>
                
            </div>
        </div>

      </li>`
    )
    .join('');
};
