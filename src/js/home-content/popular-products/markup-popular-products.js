import sprite from '../../../img/icons/sprite.svg';
import { loadFromLS } from '../../services/helpers';

const refs = {
  popularList: document.querySelector('.popular-list'),
};

const basket = loadFromLS('basket') ?? [];

export default function markupPopularList(arr) {
  const cards = arr.map(({ name, img, category, size, popularity, _id }) => {
    const inStorage = basket.some(product => product._id === _id);

    return `<li class="popular-item" data-id="${_id}">
                    <div class="wrapper-img">
                        <img
                            src="${img}"
                            alt="${name}"
                        />
                    </div>
                    <div class="popular-product-info">
                    <div class="popular-info-top">
                        <h4 class="product-name">${name}</h4>
                        <button type="button" class="btn-light-basket popular-products-btn" data-button-id="${_id}">
                        ${
                          inStorage
                            ? `<svg class="light-checkmark" width="12" height="12">
                                  <use class="href-icon" href="${sprite}#icon-checkmark"></use>
                               </svg>`
                            : `<svg class="light-basket" width="12" height="12">
                                 <use href="${sprite}#icon-basket"></use>
                              </svg>`
                        }
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
