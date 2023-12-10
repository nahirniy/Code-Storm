import { getCategoryList, getCurrentProducts } from '../services/food-api';
import {
  hideLoader,
  loadFromLS,
  saveToLS,
  showError,
  showLoader,
} from '../services/helpers';
import { mainProductMarkup } from '../home-content/main-products/markup-main-product';
import {
  changeCategory,
  changeKeyword,
  formSub,
  getFilter,
  setStateFilter,
} from './filters-request';
import { categoryName } from './filters-style';

const categoryList = document.querySelector('.category-list');
const filtersABClist = document.querySelector('.filters-all-param-list');
const form = document.querySelector('.form');
const input = document.querySelector('.keyword');
const emptyContent = document.querySelector('.info-query');
const productMainList = document.querySelector('.product-list');

const LOCALSTORAGE_KEY = 'params of search';

const defaultParams = {
  keyword: null,
  category: null,
  page: 1,
  limit: checkWidth(),
  byABC: true,
};

loadFromLS(LOCALSTORAGE_KEY) ?? saveToLS(LOCALSTORAGE_KEY, defaultParams);

// Создаем разметку категорий
async function createCategoryList() {
  const categories = await getCategoryList();
  const markup = categories
    .map(
      category =>
        `<li data-category="${category}" class="category-type">${replaceText(
          category
        )}</li>`
    )
    .join('');
  categoryList.insertAdjacentHTML('afterbegin', markup);
}

// редактирование текста
function replaceText(arg) {
  return arg.replaceAll('_', ' ');
}

// limit
function checkWidth() {
  const screenWidth = window.innerWidth;
  let limit = 0;
  if (screenWidth < 768) {
    limit = 6;
  } else if (screenWidth >= 768 && screenWidth < 1440) {
    limit = 8;
  } else {
    limit = 9;
  }

  return limit;
}

// Разметка с обновлением названий
async function loadMarkup() {
  showLoader();

  try {
    const defaultParams = loadFromLS(LOCALSTORAGE_KEY);
    const { results } = await getCurrentProducts(defaultParams);

    if (!results.length) {
      unsuccessSearch();
    } else {
      emptyContent.classList.add('visually-hidden');
      mainProductMarkup(results);
    }

    if (defaultParams.category !== null) {
      categoryName.textContent = replaceText(defaultParams.category);
    } else {
      categoryName.textContent = 'Categories';
    }

    setStateFilter(defaultParams);
  } catch {
    unsuccessSearch();
    showError();
  } finally {
    hideLoader();
  }
}

export function unsuccessSearch() {
  productMainList.innerHTML = '';
  emptyContent.classList.remove('visually-hidden');
}

form.addEventListener('submit', formSub);
filtersABClist.addEventListener('click', getFilter);
categoryList.addEventListener('click', changeCategory);
input.addEventListener('input', changeKeyword);
document.addEventListener('DOMContentLoaded', createCategoryList);
document.addEventListener('DOMContentLoaded', loadMarkup);

export { emptyContent, productMainList, LOCALSTORAGE_KEY };
