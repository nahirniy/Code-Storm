import"./assets/styles-2864c19d.js";import{n as E,a as g}from"./assets/vendor-424513b8.js";function y(t,s){localStorage.setItem(t,JSON.stringify(s))}function i(t){const s=localStorage.getItem(t);try{return JSON.parse(s)}catch{return E.Notify.failure("Oops! Something went wrong..."),s}}function q(t){const{keyword:s,category:e,page:a,limit:r,...n}=t,l=Object.keys(n).length,u=new URLSearchParams({page:a,limit:r});if(s&&u.set("keyword",s),e&&u.set("category",e),l){const[w,A]=Object.entries(n)[0];u.set(w,A)}return u}function O(t,s,e){const a=e.findIndex(r=>r._id===s._id);a!==-1?e.splice(a,1):e.push(s),y(t,e)}const v="basket",x=i(v)??[],M=document.querySelector(".product-list");async function _(t){if(!t.target.closest(".btn-basket"))return;const e=t.target.closest(".resp-item").dataset.id,r=i("main products").filter(({_id:n})=>e===n)[0];O(v,r,x)}M.addEventListener("click",_);g.defaults.baseURL="https://food-boutique.b.goit.study/api";const T=async()=>{const{data:t}=await g.get("/products/categories");return t},m=async t=>{const s=q(t),{data:e}=await g.get("/products/",{params:s});return e},j=async t=>{const{data:s}=await g.get(`/products/popular?limit=${t}`);return s},B=async()=>{const{data:t}=await g.get("/products/discount");return t},f="/Code-Storm/assets/sprite-f073391d.svg",F={popularList:document.querySelector(".popular-list")};function I(t){const s=t.map(({name:e,img:a,category:r,size:n,popularity:l,_id:u})=>`<li class="popular-item" data-id="${u}">
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
                            <p>Size: <span>${n}</span></p>
                            <p>Popularity: <span>${l}</span></p>
                        </div>
                    </div>
                </li>`);F.popularList.insertAdjacentHTML("beforeend",s.join(""))}const N=5;j(N).then(t=>I(t));const H={discountList:document.querySelector(".discount-list")};function z(t){const s=t.map(({name:e,img:a,_id:r,price:n})=>`<li class="discount-item" data-id="${r}">
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
          <p class="product-price">$${n}</p>
          <button type="button" class="btn-basket">
          <svg class="svg-basket">
            <use class="href-icon" href="${f}#icon-basket"></use>
          </svg>
          </button>
        </div>
      </li>`);H.discountList.insertAdjacentHTML("beforeend",s.join(""))}B().then(t=>z(t));const D=document.querySelector(".product-list"),R="main products";function b(t){y(R,t);const s=t.map(e=>{let a=Z(e.category),r=K(e.price);return`<li class="resp-item" data-id=${e._id} data-info="${e}">
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
      </li>`}).join("");D.innerHTML=s}function Z(t){return t.replace(/_/g," ")}function K(t){return Number.isInteger(t)?`${t}.00`:t.toFixed(2)}const d=document.querySelector(".category-list"),G=document.querySelector(".form"),U=document.querySelector(".keyword"),p=document.querySelector(".filters-all-param-list"),o=document.querySelector(".info-query"),h=document.querySelector(".product-list"),c="params of search",Y={keyword:null,category:null,page:1,limit:9,byABC:!0};i(c)??y(c,Y);async function J(){const s=(await T()).map(e=>`<li data-category="${e}" class="category-type">${k(e)}</li>`).join("");d.insertAdjacentHTML("afterbegin",s)}async function V(t){if(!t.target.classList.contains("category-type"))return;const s=t.target.dataset.category,e=i(c);let a;s!=="show-all"?a={...e,category:s}:a={...e,category:null};const{results:r}=await m(a);r.length?(o.classList.add("visually-hidden"),b(r)):(o.classList.remove("visually-hidden"),h.innerHTML=""),y(c,a)}async function Q(t){const e={...i(c),keyword:t.target.value};y(c,e)}async function W(t){t.preventDefault();const s=i(c),{results:e}=await m(s);e.length?(o.classList.add("visually-hidden"),b(e)):(o.classList.remove("visually-hidden"),h.innerHTML="")}function k(t){return t.replaceAll("_"," ")}async function X(t){let s,e;switch(t.target.dataset.filterparam){case"byAtoZ":s="byABC",e=!0;break;case"byZtoA":s="byABC",e=!1;break;case"byCheaperfirst":s="byPrice",e=!0;break;case"byExpensivefirst":s="byPrice",e=!1;break;case"byPopular":s="byPopularity",e=!1;break;case"byNotpopular":s="byPopularity",e=!0;break;default:s="byABC",e=!0;break}tt(s,e)}async function tt(t,s){const e=i(c),{[Object.keys(e).pop()]:a,...r}=e,n={...r,[t]:s},{results:l}=await m(n);console.log(l.length),l.length?(o.classList.add("visually-hidden"),b(l)):(h.innerHTML="",o.classList.remove("visually-hidden")),y(c,n)}async function et(){const t=i(c),{results:s}=await m(t);s.length?(o.classList.add("visually-hidden"),b(s)):(h.innerHTML="",o.classList.remove("visually-hidden")),t.category!==null?L.textContent=k(t.category):L.textContent="Categories",st(t)}function st(t){const s=document.querySelector(".param-name");let e;const a=Object.entries(t),[r,n]=a[a.length-1];switch(r){case"byABC":n?e="A to Z":e="Z to A";break;case"byPrice":n?e="Cheaper first":e="Expensive first";break;case"byPopularity":n?e="Not popular":e="Popular";break;default:e="A to Z";break}s.textContent=e}G.addEventListener("submit",W);p.addEventListener("click",X);d.addEventListener("click",V);U.addEventListener("input",Q);document.addEventListener("DOMContentLoaded",J);document.addEventListener("DOMContentLoaded",et);const C=document.querySelector(".select-filter"),$=document.querySelector(".select-param"),L=document.querySelector(".category-name"),at=document.querySelector(".param-name");C.addEventListener("click",()=>P(d));$.addEventListener("click",()=>P(p));d.addEventListener("click",t=>S(t,d,L));p.addEventListener("click",t=>S(t,p,at));document.addEventListener("click",rt);function P(t){t.classList.toggle("filter-hidden")}function S(t,s,e){const a=t.target;(a.classList.contains("category-type")||a.classList.contains("filter-type"))&&(e.textContent=a.textContent,s.classList.add("filter-hidden"))}function rt(t){const s=C.contains(t.target),e=$.contains(t.target);!s&&!d.classList.contains("filter-hidden")&&d.classList.add("filter-hidden"),!e&&!p.classList.contains("filter-hidden")&&p.classList.add("filter-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
