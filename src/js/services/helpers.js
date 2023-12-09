// ТУТ ПИШЕ ТІЛЬКИ МАКС
import { Notify } from 'notiflix';

export function saveToLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function loadFromLS(key) {
  const data = localStorage.getItem(key);

  try {
    return JSON.parse(data);
  } catch {
    Notify.failure('Oops! Something went wrong...');
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
}

export function editText(someText) {
  return someText.replaceAll('_', ' ');
}
