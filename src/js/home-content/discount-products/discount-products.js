import { getDiscountProducts } from '../../services/food-api';

getDiscountProducts().then(data => console.log(data));

const refs = {
  discountList: document.querySelector('.discount-list'),
};

console.log(refs.discountList);
