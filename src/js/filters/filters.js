import { getCategoryList, getCurrentProducts } from '../services/food-api';
import { loadFromLS, saveToLS } from '../services/helpers';

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
  console.log(currentCategory);
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

form.addEventListener('submit', formSub);
filtersABClist.addEventListener('change', getFilter);

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
  const oldParams = loadFromLS(LOCALSTORAGE_KEY);
  const newParams = { ...oldParams, [filter]: state };
  saveToLS(LOCALSTORAGE_KEY, newParams);
}

function formSub(e) {
  e.preventDefault();
  const currentParams = loadFromLS(LOCALSTORAGE_KEY);
  getCurrentProducts(currentParams)
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

categoryList.addEventListener('change', changeCategory);
input.addEventListener('input', changeKeyword);
createCategoryList();

function replaceText(arg) {
  return arg.replaceAll('_', ' ');
}

/*  
Создать функцию для редактирования текста.
Написать функцию по собмату не колбеком



input form в рефс
листнеры в низ





*/
