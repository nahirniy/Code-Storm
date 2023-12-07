import sprite from '../../../img/icons/sprite.svg'

/*--------------------------------CHECK IF ARRAY IS CLEAR----------------------------*/
export function markupInfoMainProduct() {
  
  return `<div class="info-query">
                <h3 class="info-text">Nothing was found for the selected <span class="info-word">filters...</span></h3>
                <p class="info-message">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.</p>
              </div>`;
  
}

/*-----------------------------------MARKUP----------------------------*/
export function mainProductMarkup(results) {
  return results
    .map((item) => {
      let formattedCategory = removeUnderscore(item.category);
      
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
          <p class="price-product">$${item.price}</p>
          <svg class="svg-basket" width="34" height="34">
            <use class="href-icon" href="${sprite}#icon-basket"></use>
          </svg>
        </div>
      </li>`;
    })
    .join('');
}
function removeUnderscore(text) {
  return text.replace(/_/g, ' '); 
}