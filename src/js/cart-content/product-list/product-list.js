import sprite from '../../../img/icons/sprite.svg'
import { getCurrentProducts} from '../../services/food-api';




// async function fetchUsers(searchWord, page, limit) {
//   return fetch(`https://food-boutique.b.goit.study/api/products?keyword=${searchWord}&_page=${page}&limit=${limit}`, {
//     headers: {
//       Accept: "application/json",
//     },
//   })
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   });
// }



const inputWord = document.querySelector('input')
const btnSubmit = document.querySelector('.btn-submit')
const productList = document.querySelector('.product-list')
const productItem = document.querySelector('.photo-card')
let searchWord = ''
let page = 1
let limit = 6
let totalPages = 0
//console.log(limit)
/*------------ADAPTIVE RESIZE------------------------------------*/
// const checkWidthScreen = window.innerWidth;
// console.log(checkWidthScreen)
// window.addEventListener('resize', function (event) {
//    let rezice = window.innerWidth;
//   if (rezice >= 375 && rezice <= 768) {
//     btnSubmit.addEventListener('click', handleClick)
//   }
//   if (checkWidthScreen >= 375 && checkWidthScreen <= 768) {
//      btnSubmit.addEventListener('click', handleClick)
//   }
// })
/*-------------------------CHECK LIMIT(WIDTH SCRENN--------------------*/
const checkWidthScreen = window.innerWidth;
//console.log(checkWidthScreen);

function addClickEventIfInRange() {
  let rezice = window.innerWidth;

  if (rezice <= 375) {
   limit = 6
  } else if (rezice >= 375 && rezice <= 768) {
    limit = 8
  } else {
    limit = 9
  }
}

addClickEventIfInRange();

window.addEventListener('resize', function (event) {
  addClickEventIfInRange();
});
/*-----------------------------QUERY DATA WITH EVENT SUBMIT---------------------------*/
btnSubmit.addEventListener('click', handleClick);

async function handleClick(event) {
  event.preventDefault();
  searchWord = inputWord.value.trim();
  console.log(searchWord);

  try {
    const searchObjects = await getCurrentProducts({keyword:null, category: null, page: 1, limit: 6, byABC: false});
    let results = searchObjects.results; 
    let arrayLength = results.length;
    totalPages = searchObjects.totalPages
    //console.log(totalPages > limit);
    //console.log(arrayLength);

    if (arrayLength > 0) {
      productItem.innerHTML = '';
      productItem.insertAdjacentHTML("beforeend", Markup(results));
      const basketIcons = document.querySelectorAll('.svg-basket');
      basketIcons.forEach((icon) => {
        icon.addEventListener('click', handleClickBasket);
      });
    //   if (totalPages > limit ) {
    //     const MarkPagin = MarkupPagination()
    //    const markupPag = productList.insertAdjacentHTML("beforeend", MarkPagin)
    //  }

      
      //console.log(bascet)
    } else {
      productItem.innerHTML = '';
       const infoMessage = MarkupInfo();
      productItem.insertAdjacentHTML("beforeend", infoMessage);
    }
   
    //  btnSubmit[0].disabled = true;
    //  btnSubmit[0].classList.add('btn-submit');
    // inputWord.addEventListener('input', inputChange);
    clickIconBasket()
    localStorage.clear()

  } catch (error) {
    console.error(error);
  }
}
/*---------------ADD EVENT FOR ALL ICONS---------------------*/
function clickIconBasket() {
  const basketIcons = document.querySelectorAll('.svg-basket');
  basketIcons.forEach((icon) => {
    icon.addEventListener('click', handleClickBasket);
  });
}


/*---------------------CHECK BTN SUBMIT--------------------*/
// function inputChange() {
//     btnSubmit[0].disabled = false;
//     btnSubmit[0].classList.remove('btn-submit')
// }
/*-------------------------------MARKUP PAGINATION---------------------------------*/
//  function MarkupPagination() {
//   return `<div class="pagination">
//     <ul class="list-pagination">
//         <li class="item-pagination">
//             <svg>
//                 <use href="${sprite}#icon-arrow-left"></use>
//             </svg>
//         </li>
//         <li class="item-pagination">1</li>
//         <li class="item-pagination">2</li>
//         <li class="item-pagination">...</li>
//         <li class="item-pagination">7</li>
//         <li class="item-pagination">8</li>
//         <li class="item-pagination">
//             <svg>
//                 <use href="${sprite}#icon-arrow-right"></use>
//             </svg>
//         </li>
//     </ul>
// </div>`
// } 

/*--------------------------------CHECK IF ARRAY IS CLEAR----------------------------*/
function MarkupInfo() {
  
  return `<div class="info-query">
                <h3 class="info-text">Nothing was found for the selected <span class="info-word">filters...</span></h3>
                <p class="info-message">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.</p>
              </div>`;
  
}

/*-----------------------------------MARKUP----------------------------*/
function Markup(results) {
  return results
    .map((item) => {
      let formattedCategory = removeUnderscore(item.category);
      
      return `<li class="resp-item">
        <a class="img-link" href="${item.img}">
          <img class="photo" src="${item.img}" alt="${item.name}" loading="lazy"/>
        </a>
        <h2 class="name-product">${item.name}</h2>
        <div class="descr-product">
          <p class="category-product"><span class="style-word">Category:</span>${formattedCategory}</p>
          <p class="size-product"><span class="style-word">Size:</span>${item.size}</p>
          <p class="popular-product"><span class="style-word">Popularity:</span>${item.popularity}</p>
        </div>
        <div class="footer-product_card">
          <p class="price-product">$${item.price}</p>
          <svg class="svg-basket" width="34" height="34">
            <use class="href-icon" href="${sprite}#icon-basket"></use>
          </svg>
        </div>
      </li>`;
    })
    .join('');
}
function removeUnderscore(text) {
  return text.replace(/_/g, ' '); 
}

/*---------------------HANDLE CLICK BASKET--------------------*/
function handleClickBasket(event) {
  const clickedItem = event.currentTarget.closest('.resp-item');
  if (clickedItem) {
    const itemName = clickedItem.querySelector('.name-product').textContent;
    const itemPrice = clickedItem.querySelector('.price-product').textContent;
    const basketItem = { name: itemName, price: itemPrice };
    localStorage.setItem(itemName, JSON.stringify(basketItem));

   
    const basketIcon = clickedItem.querySelector('.href-icon');
    if (basketIcon) {
      basketIcon.setAttribute('href', `${sprite}#icon-checkmark`);
    }
  } 
}

