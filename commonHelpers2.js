import"./assets/styles-d3345b9c.js";import{n as b,a as d}from"./assets/vendor-4dc38fff.js";window.addEventListener("resize",()=>void 0);function y(e,a){localStorage.setItem(e,JSON.stringify(a))}function i(e){const a=localStorage.getItem(e);try{return JSON.parse(a)}catch{return b.Notify.failure("Oops! Something went wrong..."),a}}function w(e){const{keyword:a,category:t,page:r,limit:s,...n}=e,l=Object.keys(n).length,c=new URLSearchParams({page:r,limit:s});if(a&&c.set("keyword",a),t&&c.set("category",t),l){const[f,m]=Object.entries(n)[0];c.set(f,m)}return c}d.defaults.baseURL="https://food-boutique.b.goit.study/api";const P=async()=>{const{data:e}=await d.get("/products/categories");return e},u=async e=>{const a=w(e),{data:t}=await d.get("/products/",{params:a});return t},v=async e=>{const{data:a}=await d.get(`/products/popular?limit=${e}`);return a},h={popularList:document.querySelector(".popular-list")};function L(e){const a=e.map(({name:t,img:r,category:s,size:n,popularity:l,_id:c})=>`<li class="popular-item" data-id="${c}">
                    <div class="wrapper-img">
                        <img
                            src="${r}"
                            alt="${t}"
                        />
                    </div>
                    <div class="popular-product-info">
                        <h3 class="product-name">${t}</h3>
                        <p class="product-category">Category: <span>${s.replace("_"," ")}</span></p>
                        <div class="product-text">
                            <p>Size: <span>${n}</span></p>
                            <p>Popularity: <span>${l}</span></p>
                        </div>
                    </div>
                </li>`);h.popularList.insertAdjacentHTML("beforeend",a.join(""))}const k=5;v(k).then(e=>L(e));const $="/Code-Storm/assets/sprite-f073391d.svg",S=document.querySelector(".product-list");function p({results:e}){const a=e.map(t=>{let r=C(t.category),s=A(t.price);return`<li class="resp-item" data-id="${t._id}">
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
          <p class="price-product">$${s}</p>
          <svg class="svg-basket" width="34" height="34">
            <use class="href-icon" href="${$}#icon-basket"></use>
          </svg>
        </div>
      </li>`}).join("");S.innerHTML=a}function C(e){return e.replace(/_/g," ")}function A(e){return Number.isInteger(e)?`${e}.00`:e.toFixed(2)}const g=document.querySelector(".category-list"),E=document.querySelector(".form"),O=document.querySelector(".keyword"),_=document.querySelector(".filters-all-param-list"),o="params of search",B={keyword:null,category:null,page:1,limit:9,byABC:!0};i(o)??y(o,B);async function j(){const a=(await P()).map(t=>`<option value="${t}" class="category-type">${z(t)}</option>`).join("");g.insertAdjacentHTML("afterbegin",a)}async function M(e){const a=e.target.value,t=i(o);let r;a!=="show-all"?r={...t,category:a}:r={...t,category:null};const s=await u(r);s?p(s):console.log("Ploha"),y(o,r)}async function q(e){const t={...i(o),keyword:e.target.value},r=await u(t);p(r),y(o,t)}async function x(e){e.preventDefault();const a=i(o),t=await u(a);t?p(t):console.log("Ploha")}function z(e){return e.replaceAll("_"," ")}async function F(e){let a,t;switch(e.target.value){case"byAtoZ":a="byABC",t=!0;break;case"byZtoA":a="byABC",t=!1;break;case"byCheaperfirst":a="byPrice",t=!0;break;case"byExpensivefirst":a="byPrice",t=!1;break;case"byPopular":a="byPopularity",t=!1;break;case"byNotpopular":a="byPopularity",t=!0;break;default:a="byABC",t=!0;break}N(a,t)}async function N(e,a){const t=i(o),{[Object.keys(t).pop()]:r,...s}=t,n={...s,[e]:a},l=await u(n);p(l),y(o,n)}async function T(){const e=i(o),a=await u(e);p(a)}E.addEventListener("submit",x);_.addEventListener("change",F);g.addEventListener("change",M);O.addEventListener("input",q);document.addEventListener("DOMContentLoaded",j);document.addEventListener("DOMContentLoaded",T);
//# sourceMappingURL=commonHelpers2.js.map
