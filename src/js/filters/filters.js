import { getCategoryList, getCurrentProducts } from '../services/food-api';
import { loadFromLS, saveToLS } from '../services/helpers';
import { mainProductMarkup } from '../home-content/main-products/markup-main-product';

const categoryList = document.querySelector('.category-list');
const form = document.querySelector('.form');
const input = document.querySelector('.keyword');
const filtersABClist = document.querySelector('.filters-all-param-list');
const emptyContent = document.querySelector('.info-query');

const LOCALSTORAGE_KEY = 'params of search';
const defaultParams = {
  keyword: null,
  category: null,
  page: 1,
  limit: 9,
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

// Проверяем и записываем выбранную категорию в лок. хранилище.
async function changeCategory(e) {
  if (!e.target.classList.contains('category-type')) {
    return;
  }
  const currentCategory = e.target.dataset.category;
  const oldParams = loadFromLS(LOCALSTORAGE_KEY);
  let newParams;
  if (currentCategory !== 'show-all') {
    newParams = { ...oldParams, category: currentCategory };
  } else {
    newParams = { ...oldParams, category: null };
  }
  const { result } = await getCurrentProducts(newParams);
  if (!result) {
    emptyContent.classList.remove('.visually-hidden');
  } else {
    emptyContent.classList.add('.visually-hidden');
    mainProductMarkup(result);
  }
  saveToLS(LOCALSTORAGE_KEY, newParams);
}

// Записываем велью с инпуты(строки ввода в параметры локал)
async function changeKeyword(e) {
  const oldParams = loadFromLS(LOCALSTORAGE_KEY);
  const newParams = { ...oldParams, keyword: e.target.value };
  saveToLS(LOCALSTORAGE_KEY, newParams);
}

// По нажатию кнопки создаем разметку по данным с хранилища.
async function formSub(e) {
  e.preventDefault();
  const currentParams = loadFromLS(LOCALSTORAGE_KEY);
  const { results } = await getCurrentProducts(currentParams);
  if (!results.length) {
    emptyContent.classList.remove('.visually-hidden');
  } else {
    emptyContent.classList.add('.visually-hidden');
    mainProductMarkup(results);
  }
}

// редактирование текста
function replaceText(arg) {
  return arg.replaceAll('_', ' ');
}

// Определяем фильтр параметров поиска и отрисовуем
async function getFilter(e) {
  let filter;
  let state;
  let args = e.target.dataset.filterparam;
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

// Проверка и отрисовка параметров поиска
async function changeFilter(filter, state) {
  const oldParams = loadFromLS(LOCALSTORAGE_KEY);

  const { [Object.keys(oldParams).pop()]: _, ...rest } = oldParams;
  const newParams = { ...rest, [filter]: state };

  const { results } = await getCurrentProducts(newParams);

  if (!!results.length) {
    emptyContent.classList.remove('.visually-hidden');
  } else {
    emptyContent.classList.add('.visually-hidden');
    mainProductMarkup(results);
  }

  saveToLS(LOCALSTORAGE_KEY, newParams);
}

// Разметка с обновлением названий
async function loadMarkup() {
  const defaultParams = loadFromLS(LOCALSTORAGE_KEY);
  const { results } = await getCurrentProducts(defaultParams);

  if (!results.length) {
    emptyContent.classList.remove('.visually-hidden');
    console.log('hi');
  } else {
    emptyContent.classList.add('.visually-hidden');
    mainProductMarkup(results);
  }

  if (defaultParams.category !== null) {
    categoryName.textContent = replaceText(defaultParams.category);
  } else {
    categoryName.textContent = 'Categories';
  }

  setStateFilter(defaultParams);
}

function setStateFilter(params) {
  const filterBy = document.querySelector('.param-name');
  let filter;
  const arrParams = Object.entries(params);
  const [sortBy, state] = arrParams[arrParams.length - 1];
  switch (sortBy) {
    case 'byABC':
      state ? (filter = 'A to Z') : (filter = 'Z to A');
      break;
    case 'byPrice':
      state ? (filter = 'Cheaper first') : (filter = 'Expensive first');
      break;
    case 'byPopularity':
      state ? (filter = 'Popular') : (filter = 'Not popular');
      break;
    default:
      filter = 'A to Z';
      break;
  }
  filterBy.textContent = filter;
}
form.addEventListener('submit', formSub);
filtersABClist.addEventListener('click', getFilter);
categoryList.addEventListener('click', changeCategory);
input.addEventListener('input', changeKeyword);
document.addEventListener('DOMContentLoaded', createCategoryList);
document.addEventListener('DOMContentLoaded', loadMarkup);

// ! -------------Style Choice JS-------------

const selectFilterCategories = document.querySelector('.select-filter');
const selectParamCategories = document.querySelector('.select-param');
const categoryName = document.querySelector('.category-name');
const paramName = document.querySelector('.param-name');

selectFilterCategories.addEventListener('click', () =>
  toggleFilterVisibility(categoryList)
);
selectParamCategories.addEventListener('click', () =>
  toggleFilterVisibility(filtersABClist)
);
categoryList.addEventListener('click', e =>
  handleCategorySelection(e, categoryList, categoryName)
);
filtersABClist.addEventListener('click', e =>
  handleCategorySelection(e, filtersABClist, paramName)
);
document.addEventListener('click', hideFilterOnOutsideClick);

function toggleFilterVisibility(list) {
  list.classList.toggle('filter-hidden');
}

function handleCategorySelection(e, list, nameElement) {
  const target = e.target;
  if (
    target.classList.contains('category-type') ||
    target.classList.contains('filter-type')
  ) {
    nameElement.textContent = target.textContent;
    list.classList.add('filter-hidden');
  }
}

function hideFilterOnOutsideClick(e) {
  const isClickInsideFirstList = selectFilterCategories.contains(e.target);
  const isClickInsideSecondList = selectParamCategories.contains(e.target);

  if (
    !isClickInsideFirstList &&
    !categoryList.classList.contains('filter-hidden')
  ) {
    categoryList.classList.add('filter-hidden');
  }

  if (
    !isClickInsideSecondList &&
    !filtersABClist.classList.contains('filter-hidden')
  ) {
    filtersABClist.classList.add('filter-hidden');
  }
}
