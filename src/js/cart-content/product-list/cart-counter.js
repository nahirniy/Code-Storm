// const LOCALSTORAGE_KEY = 'basket';

// export const onMinusFoo = function onMinus(evt) {
//   console.log('нг');
//   const cartCounter = document.getElementById(`item-${id}-counter`);
//   console.log(cartCounter);
//   const numberText = parseInt(cartCounter.textContent);
//   if (numberText === 1) {
//     return;
//   }
//   cartCounter.textContent = numberText - 1;
//   // создаём в объекте новую пару с количеством
//   const indexItem = cartResults.findIndex(obj => obj._id === id);
//   console.log(indexItem);
//   cartResults[indexItem].quantity = parseInt(cartCounter.textContent);
//   // записали новый масив в локал сторож
//   console.log(cartResults);
//   //пересчитали newTotal
//   let newTotal = cartTotal(cartResults);
//   console.log(newTotal);
//   // записали в итог
//   refs.cartProductsSum.innerHTML = `$${String(newTotal.toFixed(2))}`;
// };

// export const onPlusFoo = function onPlus() {
//   console.log('qw');

//   const evtBtn = evt.target.closest('.cart-counter-wrap');
//   console.dir(evtBtn);
//   const cartCounter = evtBtn.children[1];
//   console.log(cartCounter.textContent);
//   const numberText = parseInt(cartCounter.textContent);
//   cartCounter.textContent = numberText + 1;
//   console.log(cartCounter.textContent);

//   // создаём в объекте новую пару с количеством
//   const indexItem = cartResults.findIndex(obj => obj._id === id);
//   console.log(indexItem);
//   cartResults[indexItem].quantity = parseInt(cartCounter.textContent);
//   // записали новый масив в локал сторож
//   console.log(cartResults);
//   //пересчитали newTotal
//   let newTotal = cartTotal(cartResults);
//   console.log(newTotal);
//   // записали в итог
//   refs.cartProductsSum.innerHTML = `$${String(newTotal.toFixed(2))}`;
// };
