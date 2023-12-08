import { getCategoryList, getCurrentProducts } from '../services/food-api';
import { loadFromLS, saveToLS } from '../services/helpers';
import { mainProductMarkup } from '../home-content/main-products/markup-main-product';

const categoryList = document.querySelector('.category-list');
const form = document.querySelector('.form');
const input = document.querySelector('.keyword');
const filtersABClist = document.querySelector('.filters-all-param-list');

const LOCALSTORAGE_KEY = 'params of search';
const defaultParams = {
  keyword: null,
  category: null,
  page: 1,
  limit: 9,
  byABC: true,
};

loadFromLS(LOCALSTORAGE_KEY) ?? saveToLS(LOCALSTORAGE_KEY, defaultParams);

async function createCategoryList() {
  const categories = await getCategoryList();
  const markup = categories
    .map(
      category =>
        `<option value="${category}" class="category-type">${replaceText(
          category
        )}</option>`
    )
    .join('');
  categoryList.insertAdjacentHTML('afterbegin', markup);
}

async function changeCategory(e) {
  const currentCategory = e.target.value;
  const oldParams = loadFromLS(LOCALSTORAGE_KEY);
  let newParams;
  if (currentCategory !== 'show-all') {
    newParams = { ...oldParams, category: currentCategory };
  } else {
    newParams = { ...oldParams, category: null };
  }
  const currentProduct = await getCurrentProducts(newParams);

  if (!currentProduct) {
    console.log('Ploha');
  } else {
    mainProductMarkup(currentProduct);
  }
  saveToLS(LOCALSTORAGE_KEY, newParams);
}

async function changeKeyword(e) {
  const oldParams = loadFromLS(LOCALSTORAGE_KEY);
  const newParams = { ...oldParams, keyword: e.target.value };
  const newFilterBy = await getCurrentProducts(newParams);
  mainProductMarkup(newFilterBy);
  saveToLS(LOCALSTORAGE_KEY, newParams);
}

async function formSub(e) {
  e.preventDefault();
  const currentParams = loadFromLS(LOCALSTORAGE_KEY);
  const currentProduct = await getCurrentProducts(currentParams);
  if (!currentProduct) {
    console.log('Ploha');
  } else {
    mainProductMarkup(currentProduct);
  }
}

function replaceText(arg) {
  return arg.replaceAll('_', ' ');
}

async function getFilter(e) {
  let filter;
  let state;
  let args = e.target.value;
  switch (args) {
    case 'byAtoZ':
      filter = 'byABC';
      state = true;
      break;
    case 'byZtoA':
      filter = 'byABC';
      state = false;
      break;
    case 'byCheaperfirst':
      filter = 'byPrice';
      state = true;
      break;
    case 'byExpensivefirst':
      filter = 'byPrice';
      state = false;
      break;
    case 'byPopular':
      filter = 'byPopularity';
      state = false;
      break;
    case 'byNotpopular':
      filter = 'byPopularity';
      state = true;
      break;
    default:
      filter = 'byABC';
      state = true;
      break;
  }

  changeFilter(filter, state);
}

async function changeFilter(filter, state) {
  const oldParams = loadFromLS(LOCALSTORAGE_KEY);
  const { [Object.keys(oldParams).pop()]: _, ...rest } = oldParams;
  const newParams = { ...rest, [filter]: state };
  const newFilterBy = await getCurrentProducts(newParams);
  mainProductMarkup(newFilterBy);
  saveToLS(LOCALSTORAGE_KEY, newParams);
}

async function loadMarkup() {
  const defaultParams = loadFromLS(LOCALSTORAGE_KEY);
  const currentProduct = await getCurrentProducts(defaultParams);
  mainProductMarkup(currentProduct);
}

form.addEventListener('submit', formSub);
filtersABClist.addEventListener('change', getFilter);
categoryList.addEventListener('change', changeCategory);
input.addEventListener('input', changeKeyword);
document.addEventListener('DOMContentLoaded', createCategoryList);
document.addEventListener('DOMContentLoaded', loadMarkup);

// ! -------------Style Choice JS-------------
