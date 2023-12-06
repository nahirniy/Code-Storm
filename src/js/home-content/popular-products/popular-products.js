import axios from 'axios';

function fetchPopularProducts() {
  return axios
    .get('https://food-boutique.b.goit.study/api/products/popular?limit=5')
    .then(response => response.data);
}
// console.log замінити на markupPopularList
fetchPopularProducts().then(data => console.log('Popular product:', data));

const popularList = document.querySelector('.popular-list');

// function markupPopularList(arr) {
//   const cards = arr.map(({ name, img, category, size, popularity }) => {
//     return `<li class="popular-item">
//         <div class="wrapper-img" ><img src="${img}" alt="${name}" /></div>
//                     <div>
//                         <h3 class="product-name">${name}</h3>
//                         <p class="product-info">Category:<b>${category.replace(
//                           '_',
//                           ' '
//                         )}</b></p>
//                         <p class="product-info">Size:<b>${size}</b></p>
//                         <p class="product-info">Popularity:<b>${popularity}</b></p>
//                     </div>
//                 </li>`;
//   });

//   popularList.insertAdjacentHTML('beforeend', cards.join(''));
// }
