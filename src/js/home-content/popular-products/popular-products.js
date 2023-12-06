import { getPopularProducts } from '../../services/food-api';

const limitPopularProduct = 5;
const popularList = document.querySelector('.popular-list');

getPopularProducts(limitPopularProduct).then(data => markupPopularList(data));

function markupPopularList(arr) {
  const cards = arr.map(({ name, img, category, size, popularity }) => {
    return `<li class="popular-item">
                    <div class="wrapper-img">
                        <img
                            src="${img}"
                            alt="${name}"
                        />
                    </div>
                    <div class="popular-product-info">
                        <h3 class="product-name">${name}</h3>
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

  popularList.insertAdjacentHTML('beforeend', cards.join(''));
}
