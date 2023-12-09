import"./assets/styles-2864c19d.js";import{n as A,a as g}from"./assets/vendor-424513b8.js";function y(t,s){localStorage.setItem(t,JSON.stringify(s))}function i(t){const s=localStorage.getItem(t);try{return JSON.parse(s)}catch{return A.Notify.failure("Oops! Something went wrong..."),s}}function E(t){const{keyword:s,category:e,page:a,limit:r,...c}=t,l=Object.keys(c).length,u=new URLSearchParams({page:a,limit:r});if(s&&u.set("keyword",s),e&&u.set("category",e),l){const[S,w]=Object.entries(c)[0];u.set(S,w)}return u}function O(t,s,e){const a=e.findIndex(r=>r._id===s._id);a!==-1?e.splice(a,1):e.push(s),y(t,e)}const v="basket",q=i(v)??[],x=document.querySelector(".product-list");async function _(t){if(!t.target.closest(".btn-basket"))return;const e=t.target.closest(".resp-item").dataset.id,r=i("main products").filter(({_id:c})=>e===c)[0];O(v,r,q)}x.addEventListener("click",_);g.defaults.baseURL="https://food-boutique.b.goit.study/api";const j=async()=>{const{data:t}=await g.get("/products/categories");return t},m=async t=>{const s=E(t),{data:e}=await g.get("/products/",{params:s});return e},B=async t=>{const{data:s}=await g.get(`/products/popular?limit=${t}`);return s},M=async()=>{const{data:t}=await g.get("/products/discount");return t},f="/Code-Storm/assets/sprite-f073391d.svg",F={popularList:document.querySelector(".popular-list")};function I(t){const s=t.map(({name:e,img:a,category:r,size:c,popularity:l,_id:u})=>`<li class="popular-item" data-id="${u}">
                    <div class="wrapper-img">
                        <img
                            src="${a}"
                            alt="${e}"
                        />
                    </div>
                    <div class="popular-product-info">
                    <div class="popular-info-top">
                        <h3 class="product-name">${e}</h3>
                        <button type="button" class="btn-ligth-basket js-btn-basket">
                        <svg class="ligth-basket"><use width="12" height="12 "href="${f}#icon-basket"></use></svg>
                        </button>
                        </div>
                        <p class="product-category">Category: <span>${r.replace("_"," ")}</span></p>
                        <div class="product-text">
                            <p>Size: <span>${c}</span></p>
                            <p>Popularity: <span>${l}</span></p>
                        </div>
                    </div>
                </li>`);F.popularList.insertAdjacentHTML("beforeend",s.join(""))}const N=5;B(N).then(t=>I(t));const T={discountList:document.querySelector(".discount-list")};function z(t){const s=t.map(({name:e,img:a,_id:r,price:c})=>`<li class="discount-item" data-id="${r}">
        <svg class="svg-discount" width="60" height="60">
          <use href="${f}#icon-discount-mark"></use>
        </svg>
        <div class="wrap-img">
          <img
            src="${a}"
            alt="${e}"
          />
        </div>
        <div class="discount-product-info">
          <h3 class="product-name">${e}</h3>
          <p class="product-price">$${c}</p>
          <button type="button" class="btn-basket">
          <svg class="svg-basket">
            <use class="href-icon" href="${f}#icon-basket"></use>
          </svg>
          </button>
        </div>
      </li>`);T.discountList.insertAdjacentHTML("beforeend",s.join(""))}M().then(t=>z(t));const D=document.querySelector(".product-list"),R="main products";function h(t){y(R,t);const s=t.map(e=>{let a=Z(e.category),r=H(e.price);return`<li class="resp-item" data-id=${e._id} data-info="${e}">
        <div class="img" >
          <img class="photo" src="${e.img}" alt="${e.name}" loading="lazy"/>
        </div>
        <h2 class="name-product">${e.name}</h2>
        <div class="descr-product">
          <p class="category-product"><span class="style-word">Category:</span>${a}</p>
          <p class="size-product"><span class="style-word">Size:</span>${e.size}</p>
          <p class="popular-product"><span class="style-word">Popularity:</span>${e.popularity}</p>
        </div>
        <div class="footer-product_card">
          <p class="price-product">$${r}</p>
          <button type="button" class="btn-basket">
          <svg class="svg-basket" width="34" height="34">
            <use class="href-icon" href="${f}#icon-basket"></use>
          </svg>
          </button>
        </div>
      </li>`}).join("");D.innerHTML=s}function Z(t){return t.replace(/_/g," ")}function H(t){return Number.isInteger(t)?`${t}.00`:t.toFixed(2)}const d=document.querySelector(".category-list"),K=document.querySelector(".form"),G=document.querySelector(".keyword"),p=document.querySelector(".filters-all-param-list"),o=document.querySelector(".info-query"),n="params of search",U={keyword:null,category:null,page:1,limit:9,byABC:!0};i(n)??y(n,U);async function Y(){const s=(await j()).map(e=>`<li data-category="${e}" class="category-type">${L(e)}</li>`).join("");d.insertAdjacentHTML("afterbegin",s)}async function J(t){if(!t.target.classList.contains("category-type"))return;const s=t.target.dataset.category,e=i(n);let a;s!=="show-all"?a={...e,category:s}:a={...e,category:null};const{results:r}=await m(a);r.length?(o.classList.add(".visually-hidden"),h(r)):o.classList.remove(".visually-hidden"),y(n,a)}async function V(t){const e={...i(n),keyword:t.target.value};y(n,e)}async function Q(t){t.preventDefault();const s=i(n),{results:e}=await m(s);e.length?(o.classList.add(".visually-hidden"),h(e)):o.classList.remove(".visually-hidden")}function L(t){return t.replaceAll("_"," ")}async function W(t){let s,e;switch(t.target.dataset.filterparam){case"byAtoZ":s="byABC",e=!0;break;case"byZtoA":s="byABC",e=!1;break;case"byCheaperfirst":s="byPrice",e=!0;break;case"byExpensivefirst":s="byPrice",e=!1;break;case"byPopular":s="byPopularity",e=!1;break;case"byNotpopular":s="byPopularity",e=!0;break;default:s="byABC",e=!0;break}X(s,e)}async function X(t,s){const e=i(n),{[Object.keys(e).pop()]:a,...r}=e,c={...r,[t]:s},{results:l}=await m(c);console.log(l.length),l.length?(o.classList.add(".visually-hidden"),console.log("change filter"),h(l)):o.classList.remove(".visually-hidden"),y(n,c)}async function tt(){const t=i(n),{results:s}=await m(t);s.length?(o.classList.add(".visually-hidden"),h(s)):o.classList.remove(".visually-hidden"),t.category!==null?b.textContent=L(t.category):b.textContent="Categories",et(t)}function et(t){const s=document.querySelector(".param-name");let e;const a=Object.entries(t),[r,c]=a[a.length-1];switch(r){case"byABC":c?e="A to Z":e="Z to A";break;case"byPrice":c?e="Cheaper first":e="Expensive first";break;case"byPopularity":c?e="Not popular":e="Popular";break;default:e="A to Z";break}s.textContent=e}K.addEventListener("submit",Q);p.addEventListener("click",W);d.addEventListener("click",J);G.addEventListener("input",V);document.addEventListener("DOMContentLoaded",Y);document.addEventListener("DOMContentLoaded",tt);const k=document.querySelector(".select-filter"),C=document.querySelector(".select-param"),b=document.querySelector(".category-name"),st=document.querySelector(".param-name");k.addEventListener("click",()=>$(d));C.addEventListener("click",()=>$(p));d.addEventListener("click",t=>P(t,d,b));p.addEventListener("click",t=>P(t,p,st));document.addEventListener("click",at);function $(t){t.classList.toggle("filter-hidden")}function P(t,s,e){const a=t.target;(a.classList.contains("category-type")||a.classList.contains("filter-type"))&&(e.textContent=a.textContent,s.classList.add("filter-hidden"))}function at(t){const s=k.contains(t.target),e=C.contains(t.target);!s&&!d.classList.contains("filter-hidden")&&d.classList.add("filter-hidden"),!e&&!p.classList.contains("filter-hidden")&&p.classList.add("filter-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
