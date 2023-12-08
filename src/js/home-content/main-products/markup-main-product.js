import sprite from '../../../img/icons/sprite.svg';


const productMainList = document.querySelector('.product-list')


/*-----------------------------------MARKUP----------------------------*/
export function mainProductMarkup({ results }) {
  const markup = results
    .map(item => {
      let formattedCategory = removeUnderscore(item.category);
      let formatPrice = formatNumber(item.price)
      return `<li class="resp-item">
        <a class="img-link" href="${item.img}">
          <img class="photo" src="${item.img}" alt="${item.name}" loading="lazy"/>
        </a>
        <h2 class="name-product">${item.name}</h2>
        <div class="descr-product">
          <p class="category-product"><span class="style-word">Category:</span>${formattedCategory}</p>
          <p class="size-product"><span class="style-word">Size:</span>${item.size}</p>
          <p class="popular-product"><span class="style-word">Popularity:</span>${item.popularity}</p>
        </div>
        <div class="footer-product_card">
          <p class="price-product">$${formatPrice}</p>
          <svg class="svg-basket" width="34" height="34">
            <use class="href-icon" href="${sprite}#icon-basket"></use>
          </svg>
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
