import{l as n,u as b,g as E,s as d,b as w,c as f,d as q}from"./assets/food-api-b44bac1e.js";import"./assets/vendor-424513b8.js";const h="basket",M=n(h)??[],O=document.querySelector(".product-list");async function T(t){if(!t.target.closest(".btn-basket"))return;const e=t.target.closest(".resp-item").dataset.id,a=n("main products").filter(({_id:r})=>e===r)[0];b(h,a,M)}O.addEventListener("click",T);const p="/Code-Storm/assets/sprite-f073391d.svg",B={popularList:document.querySelector(".popular-list")};function I(t){const s=t.map(({name:e,img:c,category:a,size:r,popularity:i,_id:u})=>`<li class="popular-item" data-id="${u}">
                    <div class="wrapper-img">
                        <img
                            src="${c}"
                            alt="${e}"
                        />
                    </div>
                    <div class="popular-product-info">
                    <div class="popular-info-top">
                        <h3 class="product-name">${e}</h3>
                        <button type="button" class="btn-light-basket">
                        <svg class="light-basket"><use width="12" height="12 "href="${p}#icon-basket"></use></svg>
                        </button>
                        </div>
                        <p class="product-category">Category: <span>${a.replace("_"," ")}</span></p>
                        <div class="product-text">
                            <p>Size: <span>${r}</span></p>
                            <p>Popularity: <span>${i}</span></p>
                        </div>
                    </div>
                </li>`);B.popularList.insertAdjacentHTML("beforeend",s.join(""))}const _=5;E(_).then(t=>{I(t),d("popular products",t)});const x={popularList:document.querySelector(".popular-list")};x.popularList.addEventListener("click",j);async function j(t){const s="basket",e=n(s)??[];if(!t.target.closest(".btn-light-basket"))return;const a=t.target.closest(".popular-item").dataset.id,i=n("popular products").filter(({_id:u})=>a===u)[0];b(s,i,e)}const F={discountList:document.querySelector(".discount-list")};function H(t){const s=t.map(({name:e,img:c,_id:a,price:r})=>`<li class="discount-item" data-id="${a}">
        <svg class="svg-discount" width="60" height="60">
          <use href="${p}#icon-discount-mark"></use>
        </svg>
        <div class="wrap-img">
          <img
            src="${c}"
            alt="${e}"
          />
        </div>
        <div class="discount-product-info">
          <h3 class="product-name">${e}</h3>
          <p class="product-price">$${r}</p>
          <button type="button" class="btn-basket">
          <svg class="svg-basket">
            <use class="href-icon" href="${p}#icon-basket"></use>
          </svg>
          </button>
        </div>
      </li>`);F.discountList.insertAdjacentHTML("beforeend",s.join(""))}w().then(t=>{H(t),d("discount products",t)});const K={discountList:document.querySelector(".discount-list")};K.discountList.addEventListener("click",N);async function N(t){const s="basket",e=n(s)??[],c=t.target.closest(".btn-basket");if(!c)return;const a=t.target.closest(".discount-item").dataset.id,i=n("discount products").filter(({_id:u})=>a===u)[0];b(s,i,e),c.innerHTML=z}const z=`<svg class="svg-checkmark">
      <use href="${p}#icon-checkmark"></use>
    </svg>`,D=document.querySelector(".product-list"),G="main products";function m(t){d(G,t);const s=t.map(e=>{let c=R(e.category),a=Y(e.price);return`<li class="resp-item" data-id=${e._id} data-info="${e}">
        <div class="img" >
          <img class="photo" src="${e.img}" alt="${e.name}" loading="lazy"/>
        </div>
        <h2 class="name-product">${e.name}</h2>
        <div class="descr-product">
          <p class="category-product"><span class="style-word">Category:</span>${c}</p>
          <p class="size-product"><span class="style-word">Size:</span>${e.size}</p>
          <p class="popular-product"><span class="style-word">Popularity:</span>${e.popularity}</p>
        </div>
        <div class="footer-product_card">
          <p class="price-product">$${a}</p>
          <button type="button" class="btn-basket">
          <svg class="svg-basket" width="34" height="34">
            <use class="href-icon" href="${p}#icon-basket"></use>
          </svg>
          </button>
        </div>
      </li>`}).join("");D.innerHTML=s}function R(t){return t.replace(/_/g," ")}function Y(t){return Number.isInteger(t)?`${t}.00`:t.toFixed(2)}async function Z(t){if(!t.target.classList.contains("category-type"))return;const s=t.target.dataset.category,e=n(o);let c;s!=="show-all"?c={...e,category:s}:c={...e,category:null};const{results:a}=await f(c);a.length?(l.classList.add("visually-hidden"),m(a)):(l.classList.remove("visually-hidden"),L.innerHTML=""),d(o,c)}async function W(t){const e={...n(o),keyword:t.target.value};d(o,e)}async function U(t){t.preventDefault();const s=n(o),{results:e}=await f(s);e.length?(l.classList.add("visually-hidden"),m(e)):(l.classList.remove("visually-hidden"),L.innerHTML="")}async function V(t){let s,e;switch(t.target.dataset.filterparam){case"byAtoZ":s="byABC",e=!0;break;case"byZtoA":s="byABC",e=!1;break;case"byCheaperfirst":s="byPrice",e=!0;break;case"byExpensivefirst":s="byPrice",e=!1;break;case"byPopular":s="byPopularity",e=!1;break;case"byNotpopular":s="byPopularity",e=!0;break;default:s="byABC",e=!0;break}J(s,e)}async function J(t,s){const e=n(o),{[Object.keys(e).pop()]:c,...a}=e,r={...a,[t]:s},{results:i}=await f(r);i.length?(l.classList.add("visually-hidden"),m(i)):(L.innerHTML="",l.classList.remove("visually-hidden")),d(o,r)}function Q(t){const s=document.querySelector(".param-name");let e;const c=Object.entries(t),[a,r]=c[c.length-1];switch(a){case"byABC":r?e="A to Z":e="Z to A";break;case"byPrice":r?e="Cheaper first":e="Expensive first";break;case"byPopularity":r?e="Not popular":e="Popular";break;default:e="A to Z";break}s.textContent=e}const y=document.querySelector(".category-list"),g=document.querySelector(".filters-all-param-list"),v=document.querySelector(".select-filter"),C=document.querySelector(".select-param"),k=document.querySelector(".category-name"),X=document.querySelector(".param-name");v.addEventListener("click",()=>$(y));C.addEventListener("click",()=>$(g));y.addEventListener("click",t=>P(t,y,k));g.addEventListener("click",t=>P(t,g,X));document.addEventListener("click",tt);function $(t){t.classList.toggle("filter-hidden")}function P(t,s,e){const c=t.target;(c.classList.contains("category-type")||c.classList.contains("filter-type"))&&(e.textContent=c.textContent,s.classList.add("filter-hidden"))}function tt(t){const s=v.contains(t.target),e=C.contains(t.target);!s&&!y.classList.contains("filter-hidden")&&y.classList.add("filter-hidden"),!e&&!g.classList.contains("filter-hidden")&&g.classList.add("filter-hidden")}const S=document.querySelector(".category-list"),et=document.querySelector(".filters-all-param-list"),st=document.querySelector(".form"),ct=document.querySelector(".keyword"),l=document.querySelector(".info-query"),L=document.querySelector(".product-list"),o="params of search",at={keyword:null,category:null,page:1,limit:nt(),byABC:!0};n(o)??d(o,at);async function rt(){const s=(await q()).map(e=>`<li data-category="${e}" class="category-type">${A(e)}</li>`).join("");S.insertAdjacentHTML("afterbegin",s)}function A(t){return t.replaceAll("_"," ")}function nt(){const t=window.innerWidth;let s=0;return t<768?s=6:t>=768&&t<1440?s=8:s=9,s}async function ot(){const t=n(o),{results:s}=await f(t);s.length?(l.classList.add("visually-hidden"),m(s)):(L.innerHTML="",l.classList.remove("visually-hidden")),t.category!==null?k.textContent=A(t.category):k.textContent="Categories",Q(t)}st.addEventListener("submit",U);et.addEventListener("click",V);S.addEventListener("click",Z);ct.addEventListener("input",W);document.addEventListener("DOMContentLoaded",rt);document.addEventListener("DOMContentLoaded",ot);
//# sourceMappingURL=commonHelpers2.js.map
