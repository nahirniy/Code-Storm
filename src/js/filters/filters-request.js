import { getCurrentProducts } from '../services/food-api';
import {
  hideLoader,
  loadFromLS,
  saveToLS,
  showError,
  showLoader,
} from '../services/helpers';
import { mainProductMarkup } from '../home-content/main-products/markup-main-product';
import {
  emptyContent,
  productMainList,
  LOCALSTORAGE_KEY,
  unsuccessSearch,
} from './filters';

// Проверяем и записываем выбранную категорию в лок. хранилище.

export async function changeCategory(e) {
  if (!e.target.classList.contains('category-type')) {
    return;
  }

  try {
    showLoader();

    const currentCategory = e.target.dataset.category;
    const oldParams = loadFromLS(LOCALSTORAGE_KEY);
    let newParams;
    if (currentCategory !== 'show-all') {
      newParams = { ...oldParams, category: currentCategory };
    } else {
      newParams = { ...oldParams, category: null };
    }

    const { results } = await getCurrentProducts(newParams);
    if (!results.length) {
      unsuccessSearch();
    } else {
      emptyContent.classList.add('visually-hidden');
      mainProductMarkup(results);
    }
    saveToLS(LOCALSTORAGE_KEY, newParams);
  } catch {
    unsuccessSearch();
    showError();
  } finally {
    hideLoader();
  }
}

// Записываем велью с инпуты(строки ввода в параметры локал)
export function changeKeyword(e) {
  const oldParams = loadFromLS(LOCALSTORAGE_KEY);
  const newParams = { ...oldParams, keyword: e.target.value };
  saveToLS(LOCALSTORAGE_KEY, newParams);
}

// По нажатию кнопки создаем разметку по данным с хранилища.
export async function formSub(e) {
  e.preventDefault();

  try {
    showLoader();

    const currentParams = loadFromLS(LOCALSTORAGE_KEY);
    const { results } = await getCurrentProducts(currentParams);
    if (!results.length) {
      unsuccessSearch();
    } else {
      emptyContent.classList.add('visually-hidden');
      mainProductMarkup(results);
    }
  } catch {
    unsuccessSearch();
    showError();
  } finally {
    hideLoader();
  }
}

// Определяем фильтр параметров поиска и отрисовуем
export function getFilter(e) {
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

  changeFilter(e, filter, state);
}

// Проверка и отрисовка параметров поиска
async function changeFilter(e, filter, state) {
  if (!e.target.classList.contains('filter-type')) {
    return;
  }

  try {
    showLoader();

    const oldParams = loadFromLS(LOCALSTORAGE_KEY);

    const { [Object.keys(oldParams).pop()]: _, ...rest } = oldParams;
    const newParams = { ...rest, [filter]: state };

    const { results } = await getCurrentProducts(newParams);

    if (!results.length) {
      unsuccessSearch();
    } else {
      emptyContent.classList.add('visually-hidden');
      mainProductMarkup(results);
    }

    saveToLS(LOCALSTORAGE_KEY, newParams);
  } catch {
    unsuccessSearch();
    showError();
  } finally {
    hideLoader();
  }
}

export function setStateFilter(params) {
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
      state ? (filter = 'Not popular') : (filter = 'Popular');
      break;
    default:
      filter = 'A to Z';
      break;
  }
  filterBy.textContent = filter;
}
