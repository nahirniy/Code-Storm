import { getCategoryList, getCurrentProducts } from '../services/food-api';
import { loadFromLS, saveToLS } from '../services/helpers';

const categoryList = document.querySelector('.category-list');
const form = document.querySelector('.form');
const input = document.querySelector('.keyword');
const LOCALSTORAGE_KEY = 'params of search';
const defaultParams = {
  keyword: null,
  category: null,
  page: 1,
  limit: 9,
  sortBy: null,
};

async function createCategoryList() {
  const categories = await getCategoryList();
  const markup = categories
    .map(
      category =>
        `<option value="${category}" class="item">${category}</option>`
    )
    .join('');
  categoryList.insertAdjacentHTML('beforeend', markup.replaceAll('_', ' '));
}

async function changeCategory(e) {
  if (!e.target.classList.contains('item')) {
    return;
  }
  const currentCategory = e.target.value;
  const oldParams = loadFromLS(LOCALSTORAGE_KEY);
  const newParams = { ...oldParams, category: currentCategory };
  getCurrentProducts(newParams)
    .then(data => console.log(data))
    .catch(err => console.log(err));
  saveToLS(LOCALSTORAGE_KEY, newParams);
}

function changeKeyword(e) {
  const oldParams = loadFromLS(LOCALSTORAGE_KEY);
  const newParams = { ...oldParams, keyword: e.target.value };
  saveToLS(LOCALSTORAGE_KEY, newParams);
}
form.addEventListener('submit', e => {
  e.preventDefault();
  const currentParams = loadFromLS(LOCALSTORAGE_KEY);
  getCurrentProducts(currentParams)
    .then(data => console.log(data))
    .catch(err => console.log(err));
});
categoryList.addEventListener('change', changeCategory);
input.addEventListener('input', changeKeyword);
createCategoryList();
saveToLS(LOCALSTORAGE_KEY, defaultParams);
