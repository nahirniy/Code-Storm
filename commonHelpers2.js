import"./assets/styles-9b9e63e5.js";import{n as v,a as d}from"./assets/vendor-424513b8.js";function u(e,s){localStorage.setItem(e,JSON.stringify(s))}function n(e){const s=localStorage.getItem(e);try{return JSON.parse(s)}catch{return v.Notify.failure("Oops! Something went wrong..."),s}}function k(e){const{keyword:s,category:t,page:a,limit:o,...r}=e,l=Object.keys(r).length,i=new URLSearchParams({page:a,limit:o});if(s&&i.set("keyword",s),t&&i.set("category",t),l){const[b,h]=Object.entries(r)[0];i.set(b,h)}return i}function $(e,s,t){const a=t.findIndex(o=>o._id===s._id);a!==-1?t.splice(a,1):t.push(s),u(e,t)}const f="basket",w=n(f)??[],L=document.querySelector(".product-list");async function P(e){if(!e.target.closest(".btn-basket"))return;const t=e.target.closest(".resp-item").dataset.id,o=n("main products").filter(({_id:r})=>t===r)[0];$(f,o,w)}L.addEventListener("click",P);d.defaults.baseURL="https://food-boutique.b.goit.study/api";const S=async()=>{const{data:e}=await d.get("/products/categories");return e},p=async e=>{const s=k(e),{data:t}=await d.get("/products/",{params:s});return t},C=async e=>{const{data:s}=await d.get(`/products/popular?limit=${e}`);return s},A=async()=>{const{data:e}=await d.get("/products/discount");return e},y="/Code-Storm/assets/sprite-f073391d.svg",E={popularList:document.querySelector(".popular-list")};function O(e){const s=e.map(({name:t,img:a,category:o,size:r,popularity:l,_id:i})=>`<li class="popular-item" data-id="${i}">
                    <div class="wrapper-img">
                        <img
                            src="${a}"
                            alt="${t}"
                        />
                    </div>
                    <div class="popular-product-info">
                    <div class="popular-info-top">
                        <h3 class="product-name">${t}</h3>
                        <button type="button" class="btn-ligth-basket js-btn-basket">
                        <svg class="ligth-basket"><use width="12" height="12 "href="${y}#icon-basket"></use></svg>
                        </button>
                        </div>
                        <p class="product-category">Category: <span>${o.replace("_"," ")}</span></p>
                        <div class="product-text">
                            <p>Size: <span>${r}</span></p>
                            <p>Popularity: <span>${l}</span></p>
                        </div>
                    </div>
                </li>`);E.popularList.insertAdjacentHTML("beforeend",s.join(""))}const _=5;C(_).then(e=>O(e));const j={discountList:document.querySelector(".discount-list")};function B(e){const s=e.map(({name:t,img:a,_id:o,price:r})=>`<li class="discount-item" data-id="${o}">
        <svg class="svg-discount" width="60" height="60">
          <use href="${y}#icon-discount-mark"></use>
        </svg>
        <div class="wrap-img">
          <img
            src="${a}"
            alt="${t}"
          />
        </div>
        <div class="discount-product-info">
          <h3 class="product-name">${t}</h3>
          <p class="product-price">$${r}</p>
          <button type="button" class="btn-basket">
          <svg class="svg-basket">
            <use class="href-icon" href="${y}#icon-basket"></use>
          </svg>
          </button>
        </div>
      </li>`);j.discountList.insertAdjacentHTML("beforeend",s.join(""))}A().then(e=>B(e));const M=document.querySelector(".product-list"),q="main products";function g(e){u(q,e);const s=e.map(t=>{let a=x(t.category),o=T(t.price);return`<li class="resp-item" data-id=${t._id} data-info="${t}">
        <div class="img" >
          <img class="photo" src="${t.img}" alt="${t.name}" loading="lazy"/>
        </div>
        <h2 class="name-product">${t.name}</h2>
        <div class="descr-product">
          <p class="category-product"><span class="style-word">Category:</span>${a}</p>
          <p class="size-product"><span class="style-word">Size:</span>${t.size}</p>
          <p class="popular-product"><span class="style-word">Popularity:</span>${t.popularity}</p>
        </div>
        <div class="footer-product_card">
          <p class="price-product">$${o}</p>
          <button type="button" class="btn-basket">
          <svg class="svg-basket" width="34" height="34">
            <use class="href-icon" href="${y}#icon-basket"></use>
          </svg>
          </button>
        </div>
      </li>`}).join("");M.innerHTML=s}function x(e){return e.replace(/_/g," ")}function T(e){return Number.isInteger(e)?`${e}.00`:e.toFixed(2)}const m=document.querySelector(".category-list"),I=document.querySelector(".form"),F=document.querySelector(".keyword"),N=document.querySelector(".filters-all-param-list"),c="params of search",z={keyword:null,category:null,page:1,limit:9,byABC:!0};n(c)??u(c,z);async function D(){const s=(await S()).map(t=>`<option value="${t}" class="category-type">${G(t)}</option>`).join("");m.insertAdjacentHTML("afterbegin",s)}async function R(e){const s=e.target.value,t=n(c);let a;s!=="show-all"?a={...t,category:s}:a={...t,category:null};const o=await p(a);o?g(o):console.log("Ploha"),u(c,a)}async function H(e){const t={...n(c),keyword:e.target.value},a=await p(t);g(a),u(c,t)}async function K(e){e.preventDefault();const s=n(c),t=await p(s);t?g(t):console.log("Ploha")}function G(e){return e.replaceAll("_"," ")}async function U(e){let s,t;switch(e.target.value){case"byAtoZ":s="byABC",t=!0;break;case"byZtoA":s="byABC",t=!1;break;case"byCheaperfirst":s="byPrice",t=!0;break;case"byExpensivefirst":s="byPrice",t=!1;break;case"byPopular":s="byPopularity",t=!1;break;case"byNotpopular":s="byPopularity",t=!0;break;default:s="byABC",t=!0;break}Y(s,t)}async function Y(e,s){const t=n(c),{[Object.keys(t).pop()]:a,...o}=t,r={...o,[e]:s},l=await p(r);g(l),u(c,r)}async function J(){const e=n(c),s=await p(e);g(s)}I.addEventListener("submit",K);N.addEventListener("change",U);m.addEventListener("change",R);F.addEventListener("input",H);document.addEventListener("DOMContentLoaded",D);document.addEventListener("DOMContentLoaded",J);
//# sourceMappingURL=commonHelpers2.js.map
