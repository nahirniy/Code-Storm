 import { getCurrentProducts } from "../../services/food-api";
 import { mainProductMarkup } from "./markup-main-product";
//import{ loadMarkup } from "../../filters/filters"
const ulTag = document.querySelector('.pagination');
let totalPages = 5;
let page = 1;
let limit = 9;
let afterPage = page - 1;

function pagination(totalPages, page) {
    let litag = '';
    if (totalPages > limit) {
        if (totalPages > 4) {
            if (page > 1) {
                litag += `<button type="button" class="pagination-item" data-page="${page - 1}">
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
                litag += `<button type="button" class="pagination-item" data-page="${page + 1}">
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
//let newParams;
async function getNumberPage() {
    const clickedPage = parseInt(this.dataset.page);
  console.log(clickedPage)
    if (!isNaN(clickedPage)) {
        page = clickedPage; 
        //pagination(totalPages, page);
    } else if (this.dataset.page === 'arrow-left') {
        page = Math.max(1, page - 1); 
        //pagination(totalPages, page);
    } else if (this.dataset.page === 'arrow-right') {
        page = Math.min(totalPages, page + 1); 
        //pagination(totalPages, page);
    }

    const newParams = {
        page: page,
        keyword: null,
        category: null,
        limit: limit,
        byABC: false,
    };
    console.log('New Params:', newParams);
//     const defaultParams = {
//   keyword: null,
//   category: null,
//   page: 1,
//   limit: 9,
//   byABC: true,
// };
      try {
        const searchObjects = await getCurrentProducts(newParams);
       totalPages = searchObjects.totalPages
        console.log('Search Results:', searchObjects.results);
          console.log('Total Pages:', searchObjects.totalPages);
          if (totalPages > limit) {
              pagination(totalPages, page);
              //mainProductMarkup()

          }
    } catch (error) {
        console.error('Error fetching products:', error);
    }
 }
pagination(totalPages, page);














