// ! -------------Style JS-------------
const categoryList = document.querySelector('.category-list');
const filtersABClist = document.querySelector('.filters-all-param-list');
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

export function toggleFilterVisibility(list) {
  list.classList.toggle('filter-hidden');
}

export function handleCategorySelection(e, list, nameElement) {
  const target = e.target;
  if (
    target.classList.contains('category-type') ||
    target.classList.contains('filter-type')
  ) {
    nameElement.textContent = target.textContent;
    list.classList.add('filter-hidden');
  }
}

export function hideFilterOnOutsideClick(e) {
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

export { categoryName };
