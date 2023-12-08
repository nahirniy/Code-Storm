import"./assets/styles-d2cec294.js";import{n as P,a as y}from"./assets/vendor-424513b8.js";function l(e,a){localStorage.setItem(e,JSON.stringify(a))}function n(e){const a=localStorage.getItem(e);try{return JSON.parse(a)}catch{return P.Notify.failure("Oops! Something went wrong..."),a}}function h(e){const{keyword:a,category:t,page:s,limit:r,...c}=e,u=Object.keys(c).length,i=new URLSearchParams({page:s,limit:r});if(a&&i.set("keyword",a),t&&i.set("category",t),u){const[m,b]=Object.entries(c)[0];i.set(m,b)}return i}function v(e,a,t){const s=t.findIndex(r=>r._id===a._id);console.log(a),s!==-1?t.splice(s,1):t.push(a),l(e,t)}const g="basket",w=n(g)??[],L=document.querySelector(".product-list");async function k(e){if(!e.target.closest(".btn-basket"))return;const t=e.target.closest(".resp-item").dataset.id,r=n("main products").filter(({_id:c})=>t===c)[0];v(g,r,w)}L.addEventListener("click",k);y.defaults.baseURL="https://food-boutique.b.goit.study/api";const $=async()=>{const{data:e}=await y.get("/products/categories");return e},d=async e=>{const a=h(e),{data:t}=await y.get("/products/",{params:a});return t},S=async e=>{const{data:a}=await y.get(`/products/popular?limit=${e}`);return a},C={popularList:document.querySelector(".popular-list")};function A(e){const a=e.map(({name:t,img:s,category:r,size:c,popularity:u,_id:i})=>`<li class="popular-item" data-id="${i}">
                    <div class="wrapper-img">
                        <img
                            src="${s}"
                            alt="${t}"
                        />
                    </div>
                    <div class="popular-product-info">
                        <h3 class="product-name">${t}</h3>
                        <p class="product-category">Category: <span>${r.replace("_"," ")}</span></p>
                        <div class="product-text">
                            <p>Size: <span>${c}</span></p>
                            <p>Popularity: <span>${u}</span></p>
                        </div>
                    </div>
                </li>`);C.popularList.insertAdjacentHTML("beforeend",a.join(""))}const E=5;S(E).then(e=>A(e));const O="/Code-Storm/assets/sprite-f073391d.svg",_=document.querySelector(".product-list"),B="main products";function p({results:e}){l(B,e);const a=e.map(t=>{let s=x(t.category),r=M(t.price);return`<li class="resp-item" data-id=${t._id} data-info="${t}">
        <div class="img" >
          <img class="photo" src="${t.img}" alt="${t.name}" loading="lazy"/>
        </div>
        <h2 class="name-product">${t.name}</h2>
        <div class="descr-product">
          <p class="category-product"><span class="style-word">Category:</span>${s}</p>
          <p class="size-product"><span class="style-word">Size:</span>${t.size}</p>
          <p class="popular-product"><span class="style-word">Popularity:</span>${t.popularity}</p>
        </div>
        <div class="footer-product_card">
          <p class="price-product">$${r}</p>
          <button type="button" class="btn-basket">
          <svg class="svg-basket" width="34" height="34">
            <use class="href-icon" href="${O}#icon-basket"></use>
          </svg>
          </button>
        </div>
      </li>`}).join("");_.innerHTML=a}function x(e){return e.replace(/_/g," ")}function M(e){return Number.isInteger(e)?`${e}.00`:e.toFixed(2)}const f=document.querySelector(".category-list"),j=document.querySelector(".form"),q=document.querySelector(".keyword"),T=document.querySelector(".filters-all-param-list"),o="params of search",I={keyword:null,category:null,page:1,limit:9,byABC:!0};n(o)??l(o,I);async function F(){const a=(await $()).map(t=>`<option value="${t}" class="category-type">${K(t)}</option>`).join("");f.insertAdjacentHTML("afterbegin",a)}async function N(e){const a=e.target.value,t=n(o);let s;a!=="show-all"?s={...t,category:a}:s={...t,category:null};const r=await d(s);r?p(r):console.log("Ploha"),l(o,s)}async function z(e){const t={...n(o),keyword:e.target.value},s=await d(t);p(s),l(o,t)}async function R(e){e.preventDefault();const a=n(o),t=await d(a);t?p(t):console.log("Ploha")}function K(e){return e.replaceAll("_"," ")}async function D(e){let a,t;switch(e.target.value){case"byAtoZ":a="byABC",t=!0;break;case"byZtoA":a="byABC",t=!1;break;case"byCheaperfirst":a="byPrice",t=!0;break;case"byExpensivefirst":a="byPrice",t=!1;break;case"byPopular":a="byPopularity",t=!1;break;case"byNotpopular":a="byPopularity",t=!0;break;default:a="byABC",t=!0;break}G(a,t)}async function G(e,a){const t=n(o),{[Object.keys(t).pop()]:s,...r}=t,c={...r,[e]:a},u=await d(c);p(u),l(o,c)}async function H(){const e=n(o),a=await d(e);p(a)}j.addEventListener("submit",R);T.addEventListener("change",D);f.addEventListener("change",N);q.addEventListener("input",z);document.addEventListener("DOMContentLoaded",F);document.addEventListener("DOMContentLoaded",H);
//# sourceMappingURL=commonHelpers2.js.map
