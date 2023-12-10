import{l as n,u as $,g as O,s as u,b as M,c as m,d as h,e as k,h as b,f as B}from"./assets/modal-subscription-4d282987.js";import"./assets/vendor-7a0e9089.js";const C="basket",T=n(C)??[],I=document.querySelector(".product-list");async function _(t){if(!t.target.closest(".btn-basket"))return;const e=t.target.closest(".resp-item").dataset.id,a=n("main products").filter(({_id:r})=>e===r)[0];$(C,a,T)}I.addEventListener("click",_);const p="/Code-Storm/assets/sprite-f073391d.svg",x={popularList:document.querySelector(".popular-list")};function j(t){const s=t.map(({name:e,img:c,category:a,size:r,popularity:i,_id:l})=>`<li class="popular-item" data-id="${l}">
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
                </li>`);x.popularList.insertAdjacentHTML("beforeend",s.join(""))}const F=5;O(F).then(t=>{j(t),u("popular products",t)});const H={popularList:document.querySelector(".popular-list")};H.popularList.addEventListener("click",K);async function K(t){const s="basket",e=n(s)??[];if(!t.target.closest(".btn-light-basket"))return;const a=t.target.closest(".popular-item").dataset.id,i=n("popular products").filter(({_id:l})=>a===l)[0];$(s,i,e)}const N={discountList:document.querySelector(".discount-list")};function z(t){const s=t.map(({name:e,img:c,_id:a,price:r})=>`<li class="discount-item" data-id="${a}">
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
      </li>`);N.discountList.insertAdjacentHTML("beforeend",s.join(""))}M().then(t=>{z(t),u("discount products",t)});const D={discountList:document.querySelector(".discount-list")};D.discountList.addEventListener("click",G);async function G(t){const s="basket",e=n(s)??[],c=t.target.closest(".btn-basket");if(!c)return;const a=t.target.closest(".discount-item").dataset.id,i=n("discount products").filter(({_id:l})=>a===l)[0];$(s,i,e),c.innerHTML=R}const R=`<svg class="svg-checkmark">
      <use href="${p}#icon-checkmark"></use>
    </svg>`,Y=document.querySelector(".product-list"),Z="main products";function L(t){u(Z,t);const s=t.map(e=>{let c=W(e.category),a=U(e.price);return`<li class="resp-item" data-id=${e._id} data-info="${e}">
      ${e.is10PercentOff?`<svg class="svg-discount" width="60" height="60">
          <use href="${p}#icon-discount-mark"></use>
        </svg>
          `:""}
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
      </li>`}).join("");Y.innerHTML=s}function W(t){return t.replace(/_/g," ")}function U(t){return Number.isInteger(t)?`${t}.00`:t.toFixed(2)}async function V(t){if(t.target.classList.contains("category-type"))try{m();const s=t.target.dataset.category,e=n(o);let c;s!=="show-all"?c={...e,category:s}:c={...e,category:null};const{results:a}=await h(c);a.length?(g.classList.add("visually-hidden"),L(a)):d(),u(o,c)}catch{d(),k()}finally{b()}}function J(t){const e={...n(o),keyword:t.target.value};u(o,e)}async function Q(t){t.preventDefault();try{m();const s=n(o),{results:e}=await h(s);e.length?(g.classList.add("visually-hidden"),L(e)):d()}catch{d(),k()}finally{b()}}function X(t){let s,e;switch(t.target.dataset.filterparam){case"byAtoZ":s="byABC",e=!0;break;case"byZtoA":s="byABC",e=!1;break;case"byCheaperfirst":s="byPrice",e=!0;break;case"byExpensivefirst":s="byPrice",e=!1;break;case"byPopular":s="byPopularity",e=!1;break;case"byNotpopular":s="byPopularity",e=!0;break;default:s="byABC",e=!0;break}tt(t,s,e)}async function tt(t,s,e){if(t.target.classList.contains("filter-type"))try{m();const c=n(o),{[Object.keys(c).pop()]:a,...r}=c,i={...r,[s]:e},{results:l}=await h(i);l.length?(g.classList.add("visually-hidden"),L(l)):d(),u(o,i)}catch{d(),k()}finally{b()}}function et(t){const s=document.querySelector(".param-name");let e;const c=Object.entries(t),[a,r]=c[c.length-1];switch(a){case"byABC":r?e="A to Z":e="Z to A";break;case"byPrice":r?e="Cheaper first":e="Expensive first";break;case"byPopularity":r?e="Not popular":e="Popular";break;default:e="A to Z";break}s.textContent=e}const y=document.querySelector(".category-list"),f=document.querySelector(".filters-all-param-list"),P=document.querySelector(".select-filter"),S=document.querySelector(".select-param"),v=document.querySelector(".category-name"),st=document.querySelector(".param-name");P.addEventListener("click",()=>w(y));S.addEventListener("click",()=>w(f));y.addEventListener("click",t=>E(t,y,v));f.addEventListener("click",t=>E(t,f,st));document.addEventListener("click",ct);function w(t){t.classList.toggle("filter-hidden")}function E(t,s,e){const c=t.target;(c.classList.contains("category-type")||c.classList.contains("filter-type"))&&(e.textContent=c.textContent,s.classList.add("filter-hidden"))}function ct(t){const s=P.contains(t.target),e=S.contains(t.target);!s&&!y.classList.contains("filter-hidden")&&y.classList.add("filter-hidden"),!e&&!f.classList.contains("filter-hidden")&&f.classList.add("filter-hidden")}const A=document.querySelector(".category-list"),at=document.querySelector(".filters-all-param-list"),rt=document.querySelector(".form"),nt=document.querySelector(".keyword"),g=document.querySelector(".info-query"),ot=document.querySelector(".product-list"),o="params of search",it={keyword:null,category:null,page:1,limit:dt(),byABC:!0};n(o)??u(o,it);async function lt(){const s=(await B()).map(e=>`<li data-category="${e}" class="category-type">${q(e)}</li>`).join("");A.insertAdjacentHTML("afterbegin",s)}function q(t){return t.replaceAll("_"," ")}function dt(){const t=window.innerWidth;let s=0;return t<768?s=6:t>=768&&t<1440?s=8:s=9,s}async function ut(){m();try{const t=n(o),{results:s}=await h(t);s.length?(g.classList.add("visually-hidden"),L(s)):d(),t.category!==null?v.textContent=q(t.category):v.textContent="Categories",et(t)}catch{d(),k()}finally{b()}}function d(){ot.innerHTML="",g.classList.remove("visually-hidden")}rt.addEventListener("submit",Q);at.addEventListener("click",X);A.addEventListener("click",V);nt.addEventListener("input",J);document.addEventListener("DOMContentLoaded",lt);document.addEventListener("DOMContentLoaded",ut);
//# sourceMappingURL=commonHelpers2.js.map
