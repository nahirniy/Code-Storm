
import { getCurrentProducts } from "../../services/food-api";
import { mainProductMarkup } from "./markup-main-product";
import { loadFromLS, saveToLS } from "../../services/helpers";


const ulTag = document.querySelector('.pagination');
const LOCALSTORAGE_KEY = 'params of search';
let totalPages = 5;
let page = 1;
let limit = 9;


function pagination(totalPages, page) {
    let litag = '';
    if (totalPages > limit) {
        if (totalPages > 1) {
            if (page > 1) {
                litag += `<button type="button" class="pagination-item" data-page="${Number(page - 1)}">
                <span><i class="fas arrow-left"></i>
                <svg class="icon-arrow" width="24" height="24">
                    <use href="../../../img/icons/sprite.svg#icon-arrow-left"></use>
                </svg></span></button>`;
            }

            if (page > 2) {
                litag += `<button type="button" class="number pagination-item" data-page="1">1</button>`;
                if (page > 3) {
                    litag += `<span class="dots">...</span>`;
                }
            }

            for (let currentPage = Math.max(1, page - 1); currentPage <= Math.min(totalPages, page + 1); currentPage++) {
                const activeLi = (currentPage === page) ? "active-page" : "";
                litag += `<button type="button" class="number ${activeLi} pagination-item" data-page="${currentPage}">${currentPage}</button>`;
            }

            if (page < totalPages - 1) {
                if (page < totalPages - 2) {
                    litag += `<span class="dots">...</span>`;
                }
                litag += `<button type="button" class="number pagination-item" data-page="${totalPages}">${totalPages}</button>`;
            }

            if (page < totalPages - 1) {
                litag += `<button type="button" class="pagination-item" data-page="${Number(page + 1)}">
                <span><i class="fas arrow-right"></i>
                <svg class="icon-arrow" width="24" height="24">
                    <use href="../../../img/icons/sprite.svg#icon-arrow-right"></use>
                </svg></span></button>`;
            }
        } else {
            for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
                const activeLi = (currentPage === page) ? "active-page" : "";
                litag += `<button type="button" class="number ${activeLi} pagination-item" data-page="${currentPage}">${currentPage}</button>`;
            }
        }
    }

    ulTag.innerHTML = '';
    ulTag.insertAdjacentHTML('beforeend', litag);

    document.querySelectorAll('.pagination-item').forEach(item => {
        item.removeEventListener('click', handlePaginationClick);
    });

    document.querySelectorAll('.pagination-item').forEach(item => {
        item.addEventListener('click', handlePaginationClick);
    });
}

function handlePaginationClick() {
    const clickedPage = parseInt(this.dataset.page);
    pagination(totalPages, clickedPage);
}

//pagination(totalPages, page);
/*--------------------------GET NUMBER OF PAGE-------------------*/
const form = document.querySelector('.filter_form')

form.addEventListener('click', getNumberPage)
    document.querySelectorAll('.pagination-item').forEach(item => {
        item.removeEventListener('click', getNumberPage);
    });

    document.querySelectorAll('.pagination-item').forEach(item => {
        item.addEventListener('click', getNumberPage);
    });

/*---------------------------------NEW PARAMS--------------------------------*/
async function getNumberPage() {
    const clickedPage = this.dataset.page;

    if (!isNaN(clickedPage)) {
        page = Number(clickedPage);
    } else if (this.classList.contains('arrow-left')) {
        page = Math.max(1, page - 1);
        console.log(page)
    } else if (this.classList.contains('arrow-right')) {
        page = Math.min(totalPages, page + 1);
    }

    const defaultParams = {
        keyword: null,
        category: null,
        page: 1,
        limit: 9,
        byABC: true,
    };

    try {
        const searchObjects = await getCurrentProducts(defaultParams);
        totalPages = searchObjects.totalPages;
        console.log('Search Results:', searchObjects.results);
        console.log('Total Pages:', searchObjects.totalPages);
        if (totalPages > limit) {
            pagination(totalPages, page);
        }
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}
ulTag.addEventListener('click', changePage);
async function changePage(e) {
  const isBtn = e.target.closest('.pagination-item');
  if (!isBtn) {
    return;
  }
  const currentPage = e.target.closest('.pagination-item').dataset.page;
  console.log(currentPage);
  console.log(currentPage);
  const oldParams = loadFromLS(LOCALSTORAGE_KEY);
  const newParams = { ...oldParams, page: currentPage };
  saveToLS(LOCALSTORAGE_KEY, newParams);
  const { results } = await getCurrentProducts(newParams);
  mainProductMarkup(results);
}


