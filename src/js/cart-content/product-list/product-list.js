async function fetchUsers(searchWord, page, limit) {
  return fetch(`https://food-boutique.b.goit.study/api/products?keyword=${searchWord}&_page=${page}&limit=${limit}`, {
    headers: {
      Accept: "application/json",
    },
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
}



const inputWord = document.querySelector('input')
const btnSubmit = document.querySelector('.btn-submit')
const productList = document.querySelector('.product-list')

const productItem = document.querySelector('.photo-card')
let searchWord = ''
let page = 1
let limit = 6
console.log(limit)
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
console.log(checkWidthScreen);

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
    const searchObjects = await fetchUsers(searchWord, page, limit);
    let results = searchObjects.results; 
    let arrayLength = results.length;
    console.log(results);
    console.log(arrayLength);

    if (arrayLength > 0) {
      productItem.innerHTML = '';
      productItem.insertAdjacentHTML("beforeend", Markup(results));
    } else {
      productItem.innerHTML = '';
       const infoMessage = MarkupInfo();
      productItem.insertAdjacentHTML("beforeend", infoMessage);
    }
     btnSubmit.disabled = true;
     btnSubmit.classList.add('btn-submit');
     inputWord.addEventListener('input', inputChange);


  } catch (error) {
    console.error(error);
  }
}
/*---------------------CHECK BTN SUBMIT--------------------*/
function inputChange() {
    btnSubmit.disabled = false;
    btnSubmit.classList.remove('btn-submit')
}

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
        <div class="descr-product"
        <p class="category-product"><span class="style-word">Category:</span>${formattedCategory}</p>
        <p class="size-product"><span class="style-word">Size:</span>${item.size}</p>
        <p class="popular-product"><span class="style-word">Popularity:</span>${item.popularity}</p>
        </div>
        <div class="footer-product_card">
        <p class="price-product">${item.price}</p>
          <svg class="svg-basket" width="18" height="18">
        <use href="//src/img/icons/sprite.svg#icon-basket"></use>
    </svg>
    </div>
      </li>`;
    })
    .join('');
}

function removeUnderscore(text) {
  return text.replace(/_/g, ' '); 
}