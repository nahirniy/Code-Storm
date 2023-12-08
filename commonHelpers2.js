import"./assets/styles-eea4b901.js";import{n as b,a as d}from"./assets/vendor-4dc38fff.js";function y(a,e){localStorage.setItem(a,JSON.stringify(e))}function i(a){const e=localStorage.getItem(a);try{return JSON.parse(e)}catch{return b.Notify.failure("Oops! Something went wrong..."),e}}function w(a){const{keyword:e,category:t,page:r,limit:o,...c}=a,l=Object.keys(c).length,n=new URLSearchParams({page:r,limit:o});if(e&&n.set("keyword",e),t&&n.set("category",t),l){const[m,f]=Object.entries(c)[0];n.set(m,f)}return n}d.defaults.baseURL="https://food-boutique.b.goit.study/api";const P=async()=>{const{data:a}=await d.get("/products/categories");return a},u=async a=>{const e=w(a),{data:t}=await d.get("/products/",{params:e});return t},h=async a=>{const{data:e}=await d.get(`/products/popular?limit=${a}`);return e},v="/Code-Storm/assets/sprite-f073391d.svg",L=document.querySelector(".product-list");function p({results:a}){const e=a.map(t=>{let r=S(t.category);return`<li class="resp-item">
        <a class="img-link" href="${t.img}">
          <img class="photo" src="${t.img}" alt="${t.name}" loading="lazy"/>
        </a>
        <h2 class="name-product">${t.name}</h2>
        <div class="descr-product">
          <p class="category-product"><span class="style-word">Category:</span>${r}</p>
          <p class="size-product"><span class="style-word">Size:</span>${t.size}</p>
          <p class="popular-product"><span class="style-word">Popularity:</span>${t.popularity}</p>
        </div>
        <div class="footer-product_card">
          <p class="price-product">$${t.price}</p>
          <svg class="svg-basket" width="34" height="34">
            <use class="href-icon" href="${v}#icon-basket"></use>
          </svg>
        </div>
      </li>`}).join("");L.innerHTML=e}function S(a){return a.replace(/_/g," ")}document.querySelector("input");document.querySelector(".btn-submit");document.querySelector(".product-list");document.querySelector(".photo-card");window.addEventListener("resize",function(a){});const k={popularList:document.querySelector(".popular-list")};function $(a){const e=a.map(({name:t,img:r,category:o,size:c,popularity:l,_id:n})=>`<li class="popular-item" data-id="${n}">
                    <div class="wrapper-img">
                        <img
                            src="${r}"
                            alt="${t}"
                        />
                    </div>
                    <div class="popular-product-info">
                        <h3 class="product-name">${t}</h3>
                        <p class="product-category">Category: <span>${o.replace("_"," ")}</span></p>
                        <div class="product-text">
                            <p>Size: <span>${c}</span></p>
                            <p>Popularity: <span>${l}</span></p>
                        </div>
                    </div>
                </li>`);k.popularList.insertAdjacentHTML("beforeend",e.join(""))}const C=5;h(C).then(a=>$(a));const g=document.querySelector(".category-list"),A=document.querySelector(".form"),q=document.querySelector(".keyword"),E=document.querySelector(".filters-all-param-list"),s="params of search",O={keyword:null,category:null,page:1,limit:9,byABC:!0};i(s)??y(s,O);async function B(){const e=(await P()).map(t=>`<option value="${t}" class="category-type">${x(t)}</option>`).join("");g.insertAdjacentHTML("afterbegin",e)}async function _(a){const e=a.target.value,t=i(s);let r;e!=="show-all"?r={...t,category:e}:r={...t,category:null};const o=await u(r);o?p(o):console.log("Ploha"),y(s,r)}async function j(a){const t={...i(s),keyword:a.target.value},r=await u(t);p(r),y(s,t)}async function M(a){a.preventDefault();const e=i(s),t=await u(e);t?p(t):console.log("Ploha")}function x(a){return a.replaceAll("_"," ")}async function z(a){let e,t;switch(a.target.value){case"byAtoZ":e="byABC",t=!0;break;case"byZtoA":e="byABC",t=!1;break;case"byCheaperfirst":e="byPrice",t=!0;break;case"byExpensivefirst":e="byPrice",t=!1;break;case"byPopular":e="byPopularity",t=!1;break;case"byNotpopular":e="byPopularity",t=!0;break;default:e="byABC",t=!0;break}T(e,t)}async function T(a,e){const t=i(s),{[Object.keys(t).pop()]:r,...o}=t,c={...o,[a]:e},l=await u(c);p(l),y(s,c)}async function F(){const a=i(s),e=await u(a);p(e)}A.addEventListener("submit",M);E.addEventListener("change",z);g.addEventListener("change",_);q.addEventListener("input",j);document.addEventListener("DOMContentLoaded",B);document.addEventListener("DOMContentLoaded",F);
//# sourceMappingURL=commonHelpers2.js.map
