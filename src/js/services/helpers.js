import Swal from 'sweetalert2';

// ТУТ ПИШЕ ТІЛЬКИ МАКС
export function saveToLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function loadFromLS(key) {
  const data = localStorage.getItem(key);

  try {
    return JSON.parse(data);
  } catch {
    showError();
    return data;
  }
}

export function createParams(parameters) {
  const { keyword, category, page, limit, ...rest } = parameters;
  const checkedSortBy = Object.keys(rest).length;

  const params = new URLSearchParams({
    page,
    limit,
  });

  if (keyword) {
    params.set('keyword', keyword);
  }

  if (category) {
    params.set('category', category);
  }

  if (checkedSortBy) {
    const [sortBy, state] = Object.entries(rest)[0];
    params.set(sortBy, state);
  }

  return params;
}

export function updateBasket(LOCALSTORAGE_KEY, currentProduct, basket) {
  const index = basket.findIndex(product => product._id === currentProduct._id);
  index !== -1 ? basket.splice(index, 1) : basket.push(currentProduct);

  saveToLS(LOCALSTORAGE_KEY, basket);
  counterProducts(basket);
}

export function counterProducts(basket) {
  const oldNumberProducts = document.querySelector('.number-products');
  const newNumberProducts = basket.length;

  oldNumberProducts.textContent = newNumberProducts;
}

export function editText(someText) {
  return someText.replaceAll('_', ' ');
}

export function showError() {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
  });
}

export function showLoader() {
  const loader = document.querySelector('.loader-container');
  loader.classList.remove('is-hidden');
}

export function hideLoader() {
  const loader = document.querySelector('.loader-container');

  setTimeout(() => loader.classList.add('is-hidden'), 300);
}

export function checkedParams(oldParams, newParams) {
  return !(JSON.stringify(oldParams) === JSON.stringify(newParams));
}

export function updateAllIcon(buttons, id, basket) {
  for (let i = 0; i < buttons.length; i += 1) {
    switch (true) {
      case buttons[i].classList.contains('main-products-btn'):
        updateIconMain(buttons[i], id, basket);
        break;
      case buttons[i].classList.contains('popular-products-btn'):
        updateIconPopular(buttons[i], id, basket);
        break;
      case buttons[i].classList.contains('discount-products-btn'):
        updateDiscountIcon(buttons[i], id, basket);
        break;
      default:
        break;
    }
  }
}

function updateIconMain(btn, id, products) {
  const checkmarkIcon = `<svg class="svg-checkmark" width="18" height="18">
            <use class="href-icon" href="${sprite}#icon-checkmark"></use>
          </svg>`;
  const basketIcon = `<svg class="svg-basket" width="18" height="18">
            <use class="href-icon" href="${sprite}#icon-basket"></use>
          </svg>`;

  const inStorage = products.some(({ _id }) => _id === id);

  btn.innerHTML = inStorage ? checkmarkIcon : basketIcon;
}

function updateDiscountIcon(btn, id, products) {
  const checkmarkIcon = `<svg class="svg-checkmark" width="18" height="18">
            <use class="href-icon" href="${sprite}#icon-checkmark"></use>
          </svg>`;
  const basketIcon = `<svg class="svg-basket" width="18" height="18">
            <use class="href-icon" href="${sprite}#icon-basket"></use>
          </svg>`;

  const inStorage = products.some(({ _id }) => _id === id);

  btn.innerHTML = inStorage ? checkmarkIcon : basketIcon;
}

function updateIconPopular(btn, id, products) {
  const checkmarkIcon = `<svg class="light-checkmark" width="12" height="12">
            <use class="href-icon" href="${sprite}#icon-checkmark"></use>
          </svg>`;
  const basketIcon = `<svg class="light-basket" width="12" height="12">
            <use class="href-icon" href="${sprite}#icon-basket"></use>
          </svg>`;

  const inStorage = products.some(({ _id }) => _id === id);

  btn.innerHTML = inStorage ? checkmarkIcon : basketIcon;
}
