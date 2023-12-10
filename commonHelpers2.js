import{l as n,u as b,g as E,s as u,b as A,c as w,d as m}from"./assets/food-api-2456832c.js";import"./assets/vendor-424513b8.js";const h="basket",q=n(h)??[],M=document.querySelector(".product-list");async function O(t){if(!t.target.closest(".btn-basket"))return;const e=t.target.closest(".resp-item").dataset.id,c=n("main products").filter(({_id:r})=>e===r)[0];b(h,c,q)}M.addEventListener("click",O);const g="/Code-Storm/assets/sprite-f073391d.svg",T={popularList:document.querySelector(".popular-list")};function B(t){const s=t.map(({name:e,img:a,category:c,size:r,popularity:i,_id:y})=>`<li class="popular-item" data-id="${y}">
                    <div class="wrapper-img">
                        <img
                            src="${a}"
                            alt="${e}"
                        />
                    </div>
                    <div class="popular-product-info">
                    <div class="popular-info-top">
                        <h3 class="product-name">${e}</h3>
                        <button type="button" class="btn-light-basket">
                        <svg class="light-basket"><use width="12" height="12 "href="${g}#icon-basket"></use></svg>
                        </button>
                        </div>
                        <p class="product-category">Category: <span>${c.replace("_"," ")}</span></p>
                        <div class="product-text">
                            <p>Size: <span>${r}</span></p>
                            <p>Popularity: <span>${i}</span></p>
                        </div>
                    </div>
                </li>`);T.popularList.insertAdjacentHTML("beforeend",s.join(""))}const I=5;E(I).then(t=>{B(t),u("popular products",t)});const _={popularList:document.querySelector(".popular-list")};_.popularList.addEventListener("click",x);async function x(t){const s="basket",e=n(s)??[];if(!t.target.closest(".btn-light-basket"))return;const c=t.target.closest(".popular-item").dataset.id,i=n("popular products").filter(({_id:y})=>c===y)[0];b(s,i,e)}const j={discountList:document.querySelector(".discount-list")};function F(t){const s=t.map(({name:e,img:a,_id:c,price:r})=>`<li class="discount-item" data-id="${c}">
        <svg class="svg-discount" width="60" height="60">
          <use href="${g}#icon-discount-mark"></use>
        </svg>
        <div class="wrap-img">
          <img
            src="${a}"
            alt="${e}"
          />
        </div>
        <div class="discount-product-info">
          <h3 class="product-name">${e}</h3>
          <p class="product-price">$${r}</p>
          <button type="button" class="btn-basket">
          <svg class="svg-basket">
            <use class="href-icon" href="${g}#icon-basket"></use>
          </svg>
          </button>
        </div>
      </li>`);j.discountList.insertAdjacentHTML("beforeend",s.join(""))}A().then(t=>{F(t),u("discount products",t)});const H={discountList:document.querySelector(".discount-list")};H.discountList.addEventListener("click",K);async function K(t){const s="basket",e=n(s)??[],a=t.target.closest(".btn-basket");if(!a)return;const c=t.target.closest(".discount-item").dataset.id,i=n("discount products").filter(({_id:y})=>c===y)[0];b(s,i,e),a.innerHTML=N}const N=`<svg class="svg-checkmark">
      <use href="${g}#icon-checkmark"></use>
    </svg>`,z=document.querySelector(".product-list"),D="main products";function f(t){u(D,t);const s=t.map(e=>{let a=G(e.category),c=R(e.price);return`<li class="resp-item" data-id=${e._id} data-info="${e}">
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
          <p class="price-product">$${c}</p>
          <button type="button" class="btn-basket">
          <svg class="svg-basket" width="34" height="34">
            <use class="href-icon" href="${g}#icon-basket"></use>
          </svg>
          </button>
        </div>
      </li>`}).join("");z.innerHTML=s}function G(t){return t.replace(/_/g," ")}function R(t){return Number.isInteger(t)?`${t}.00`:t.toFixed(2)}const d=document.querySelector(".category-list"),Y=document.querySelector(".form"),Z=document.querySelector(".keyword"),p=document.querySelector(".filters-all-param-list"),l=document.querySelector(".info-query"),L=document.querySelector(".product-list"),o="params of search",U={keyword:null,category:null,page:1,limit:9,byABC:!0};n(o)??u(o,U);async function V(){const s=(await w()).map(e=>`<li data-category="${e}" class="category-type">${v(e)}</li>`).join("");d.insertAdjacentHTML("afterbegin",s)}async function J(t){if(!t.target.classList.contains("category-type"))return;const s=t.target.dataset.category,e=n(o);let a;s!=="show-all"?a={...e,category:s}:a={...e,category:null};const{results:c}=await m(a);c.length?(l.classList.add("visually-hidden"),f(c)):(l.classList.remove("visually-hidden"),L.innerHTML=""),u(o,a)}async function Q(t){const e={...n(o),keyword:t.target.value};u(o,e)}async function W(t){t.preventDefault();const s=n(o),{results:e}=await m(s);e.length?(l.classList.add("visually-hidden"),f(e)):(l.classList.remove("visually-hidden"),L.innerHTML="")}function v(t){return t.replaceAll("_"," ")}async function X(t){let s,e;switch(t.target.dataset.filterparam){case"byAtoZ":s="byABC",e=!0;break;case"byZtoA":s="byABC",e=!1;break;case"byCheaperfirst":s="byPrice",e=!0;break;case"byExpensivefirst":s="byPrice",e=!1;break;case"byPopular":s="byPopularity",e=!1;break;case"byNotpopular":s="byPopularity",e=!0;break;default:s="byABC",e=!0;break}tt(s,e)}async function tt(t,s){const e=n(o),{[Object.keys(e).pop()]:a,...c}=e,r={...c,[t]:s},{results:i}=await m(r);console.log(i.length),i.length?(l.classList.add("visually-hidden"),f(i)):(L.innerHTML="",l.classList.remove("visually-hidden")),u(o,r)}async function et(){const t=n(o),{results:s}=await m(t);s.length?(l.classList.add("visually-hidden"),f(s)):(L.innerHTML="",l.classList.remove("visually-hidden")),t.category!==null?k.textContent=v(t.category):k.textContent="Categories",st(t)}function st(t){const s=document.querySelector(".param-name");let e;const a=Object.entries(t),[c,r]=a[a.length-1];switch(c){case"byABC":r?e="A to Z":e="Z to A";break;case"byPrice":r?e="Cheaper first":e="Expensive first";break;case"byPopularity":r?e="Not popular":e="Popular";break;default:e="A to Z";break}s.textContent=e}Y.addEventListener("submit",W);p.addEventListener("click",X);d.addEventListener("click",J);Z.addEventListener("input",Q);document.addEventListener("DOMContentLoaded",V);document.addEventListener("DOMContentLoaded",et);const C=document.querySelector(".select-filter"),$=document.querySelector(".select-param"),k=document.querySelector(".category-name"),at=document.querySelector(".param-name");C.addEventListener("click",()=>P(d));$.addEventListener("click",()=>P(p));d.addEventListener("click",t=>S(t,d,k));p.addEventListener("click",t=>S(t,p,at));document.addEventListener("click",ct);function P(t){t.classList.toggle("filter-hidden")}function S(t,s,e){const a=t.target;(a.classList.contains("category-type")||a.classList.contains("filter-type"))&&(e.textContent=a.textContent,s.classList.add("filter-hidden"))}function ct(t){const s=C.contains(t.target),e=$.contains(t.target);!s&&!d.classList.contains("filter-hidden")&&d.classList.add("filter-hidden"),!e&&!p.classList.contains("filter-hidden")&&p.classList.add("filter-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
