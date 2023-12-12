import { getCurrentProducts } from '../../services/food-api';
import { mainProductMarkup } from './markup-main-product';
import {
  checkedParams,
  hideLoader,
  loadFromLS,
  saveToLS,
  showError,
  showLoader,
} from '../../services/helpers';

const LOCALSTORAGE_KEY = 'params of search';
const pagination = document.querySelector('.pagination');
const paginationBtnWrap = document.querySelector('.pagination-btn-wrap');
const emptyContent = document.querySelector('.info-query');
const productMainList = document.querySelector('.product-list');
const prevPage = document.querySelector('[data-page="prev-page"]');
const nextPage = document.querySelector('[data-page="next-page"]');

let totalPages;
let page = 1;
let previousPage = 1;

export function createPagination(allPages, page = 1) {
  let markup = '';
  let beforePage = page;
  let afterPage = page;
  let sizeScreen = window.innerWidth;

  totalPages = allPages;

  nextPage.classList.remove('disabled');
  prevPage.classList.remove('disabled');

  if (sizeScreen >= 768) {
    beforePage -= 1;
    afterPage += 1;

    if (page > 2) {
      markup += `<button 
        type="button"
        class="number pagination-item"
        data-page="1"
        aria-label="This is 1 page">
        1
      </button>`;

      if (page > 3) {
        markup += `<span class="dots">...</span>`;
      }
    }
  } else {
    if (page > 2) {
      markup += `<button 
        type="button"
        class="number pagination-item"
        data-page="1"
        aria-label="This is 1 page">
        1
      </button>`;
      markup += `<span class="dots">...</span>`;
    }
  }

  if (page === totalPages) {
    beforePage = beforePage - 1;

    nextPage.classList.add('disabled');
  } else if (page === totalPages - 1) {
    beforePage = beforePage - 1;
  }

  if (page === 1) {
    afterPage = afterPage + 1;

    prevPage.classList.add('disabled');
  } else if (page == 2) {
    afterPage = afterPage + 1;
  }

  for (let plength = beforePage; plength <= afterPage; plength += 1) {
    if (plength > totalPages || plength < 0) {
      continue;
    }

    if (plength === 0) {
      plength += 1;
    }

    markup += `<button 
      type="button" 
      class="number pagination-item 
      ${page === plength ? 'active-page' : ''}" 
      data-page="${plength}">${plength}
      aria-label="This is ${plength} page"
    </button>`;
  }

  if (sizeScreen >= 768) {
    if (page < totalPages - 1) {
      if (page < totalPages - 2) {
        markup += `<span class="dots"><span>...</span></span>`;
      }
      markup += `<button 
      type="button"
        class="number pagination-item"
        data-page="${totalPages}" 
        aria-label="This is ${totalPages} page">
        ${totalPages}
      </button>`;
    }
  } else {
    if (page < totalPages - 1) {
      markup += `<span class="dots"><span>...</span></span>`;
      markup += `<button 
      type="button"
      class="number pagination-item"
      data-page="${totalPages}">
      ${totalPages}
    </button>`;
    }
  }

  paginationBtnWrap.innerHTML = markup;
  return markup;
}

function changePage(e) {
  const isBtn = e.target.closest('button');
  if (!isBtn) {
    return;
  }

  const currentPage = isBtn.dataset.page;

  if (currentPage === 'next-page') {
    page += 1;
  } else if (currentPage === 'prev-page') {
    page -= 1;
  } else {
    page = Number(currentPage);
  }

  if (previousPage === page) {
    return;
  }

  createPage(page);
  createPagination(totalPages, page);
  previousPage = page;
}

async function createPage(newPage) {
  const oldParams = loadFromLS(LOCALSTORAGE_KEY);
  const newParams = { ...oldParams, page: newPage };

  try {
    showLoader();

    const { results } = await getCurrentProducts(newParams);

    mainProductMarkup(results);
  } catch {
    emptyContent.classList.remove('visually-hidden');
    pagination.classList.add('visually-hidden');
    productMainList.innerHTML = '';
    showError();
  } finally {
    hideLoader();
  }
}

pagination.addEventListener('click', changePage);
