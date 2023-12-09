import sprite from '../../../img/icons/sprite.svg';

const refs = {
  popularList: document.querySelector('.popular-list'),
};

export default function markupPopularList(arr) {
  const cards = arr.map(({ name, img, category, size, popularity, _id }) => {
    return `<li class="popular-item" data-id="${_id}">
                    <div class="wrapper-img">
                        <img
                            src="${img}"
                            alt="${name}"
                        />
                    </div>
                    <div class="popular-product-info">
                    <div class="popular-info-top">
                        <h3 class="product-name">${name}</h3>
                        <button type="button" class="btn-ligth-basket js-btn-basket">
                        <svg class="ligth-basket"><use width="12" height="12 "href="${sprite}#icon-basket"></use></svg>
                        </button>
                        </div>
                        <p class="product-category">Category: <span>${category.replace(
                          '_',
                          ' '
                        )}</span></p>
                        <div class="product-text">
                            <p>Size: <span>${size}</span></p>
                            <p>Popularity: <span>${popularity}</span></p>
                        </div>
                    </div>
                </li>`;
  });

  refs.popularList.insertAdjacentHTML('beforeend', cards.join(''));
}
