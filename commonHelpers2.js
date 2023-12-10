import{l as n,u as $,g as _,s as u,b as I,c as k,d as L,e as b,h as v,f as x}from"./assets/modal-subscription-0aa476b8.js";import"./assets/vendor-7a0e9089.js";const w="basket",j=n(w)??[],F=document.querySelector(".product-list");async function K(t){if(!t.target.closest(".btn-basket"))return;const e=t.target.closest(".resp-item").dataset.id,r=n("main products").filter(({_id:c})=>e===c)[0];$(w,r,j)}F.addEventListener("click",K);const y="/Code-Storm/assets/sprite-f073391d.svg",N={popularList:document.querySelector(".popular-list")};function G(t){const s=t.map(({name:e,img:a,category:r,size:c,popularity:p,_id:i})=>`<li class="popular-item" data-id="${i}">
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
                        <svg class="light-basket"><use width="12" height="12 "href="${y}#icon-basket"></use></svg>
                        </button>
                        </div>
                        <p class="product-category">Category: <span>${r.replace("_"," ")}</span></p>
                        <div class="product-text">
                            <p>Size: <span>${c}</span></p>
                            <p>Popularity: <span>${p}</span></p>
                        </div>
                    </div>
                </li>`);N.popularList.insertAdjacentHTML("beforeend",s.join(""))}const H=5;_(H).then(t=>{G(t),u("popular products",t)});const R={popularList:document.querySelector(".popular-list")};R.popularList.addEventListener("click",Y);async function Y(t){const s="basket",e=n(s)??[];if(!t.target.closest(".btn-light-basket"))return;const r=t.target.closest(".popular-item").dataset.id,p=n("popular products").filter(({_id:i})=>r===i)[0];$(s,p,e)}const z={discountList:document.querySelector(".discount-list")};function D(t){const s=t.map(({name:e,img:a,_id:r,price:c})=>`<li class="discount-item" data-id="${r}">
        <svg class="svg-discount" width="60" height="60">
          <use href="${y}#icon-discount-mark"></use>
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
            <use class="href-icon" href="${y}#icon-basket"></use>
          </svg>
          </button>
        </div>
      </li>`);z.discountList.insertAdjacentHTML("beforeend",s.join(""))}I().then(t=>{D(t),u("discount products",t)});const Z={discountList:document.querySelector(".discount-list")};Z.discountList.addEventListener("click",W);async function W(t){const s="basket",e=n(s)??[],a=t.target.closest(".btn-basket");if(!a)return;const r=t.target.closest(".discount-item").dataset.id,p=n("discount products").filter(({_id:i})=>r===i)[0];$(s,p,e),a.innerHTML=J}const J=`<svg class="svg-checkmark">
      <use href="${y}#icon-checkmark"></use>
    </svg>`,U=document.querySelector(".product-list"),V="main products";function C(t){u(V,t);const s=t.map(e=>{let a=Q(e.category),r=X(e.price);return`<li class="resp-item" data-id=${e._id} data-info="${e}">
      ${e.is10PercentOff?`<svg class="svg-discount" width="60" height="60">
          <use href="${y}#icon-discount-mark"></use>
        </svg>
          `:""}
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
            <use class="href-icon" href="${y}#icon-basket"></use>
          </svg>
          </button>
        </div>
      </li>`}).join("");U.innerHTML=s}function Q(t){return t.replace(/_/g," ")}function X(t){return Number.isInteger(t)?`${t}.00`:t.toFixed(2)}const l="params of search";let o=n(l);async function tt(t){if(!t.target.classList.contains("category-type"))return;const s=t.target.dataset.category,e=n(l);if(s!=="show-all"?o={...e,category:s}:o={...e,category:null},!!S(e,o))try{k();const{results:r}=await L(o);r.length?(m.classList.add("visually-hidden"),C(r)):d(),u(l,o)}catch{d(),b()}finally{v()}}function et(t){const e={...n(l),keyword:t.target.value};u(l,e)}async function st(t){t.preventDefault();const s=n(l);if(S(s,o))try{k(),o=s;const{results:a}=await L(o);a.length?(m.classList.add("visually-hidden"),C(a)):d()}catch{d(),b()}finally{v()}}function at(t){let s,e;switch(t.target.dataset.filterparam){case"byAtoZ":s="byABC",e=!0;break;case"byZtoA":s="byABC",e=!1;break;case"byCheaperfirst":s="byPrice",e=!0;break;case"byExpensivefirst":s="byPrice",e=!1;break;case"byPopular":s="byPopularity",e=!1;break;case"byNotpopular":s="byPopularity",e=!0;break;default:s="byABC",e=!0;break}rt(t,s,e)}async function rt(t,s,e){if(!t.target.classList.contains("filter-type"))return;const a=n(l),{[Object.keys(a).pop()]:r,...c}=a;if(o={...c,[s]:e},!!S(a,o))try{k();const{results:i}=await L(o);i.length?(m.classList.add("visually-hidden"),C(i)):d(),u(l,o)}catch{d(),b()}finally{v()}}function ct(t){const s=document.querySelector(".param-name");let e;const a=Object.entries(t),[r,c]=a[a.length-1];switch(r){case"byABC":c?e="A to Z":e="Z to A";break;case"byPrice":c?e="Cheaper first":e="Expensive first";break;case"byPopularity":c?e="Not popular":e="Popular";break;default:e="A to Z";break}s.textContent=e}function S(t,s){return JSON.stringify(t)!==JSON.stringify(s)}const f=document.querySelector(".category-list"),g=document.querySelector(".filters-all-param-list"),E=document.querySelector(".select-filter"),A=document.querySelector(".select-param"),P=document.querySelector(".category-name"),nt=document.querySelector(".param-name");E.addEventListener("click",()=>O(f));A.addEventListener("click",()=>O(g));f.addEventListener("click",t=>q(t,f,P));g.addEventListener("click",t=>q(t,g,nt));document.addEventListener("click",ot);function O(t){t.classList.toggle("filter-hidden")}function q(t,s,e){const a=t.target;(a.classList.contains("category-type")||a.classList.contains("filter-type"))&&(e.textContent=a.textContent,s.classList.add("filter-hidden"))}function ot(t){const s=E.contains(t.target),e=A.contains(t.target);!s&&!f.classList.contains("filter-hidden")&&f.classList.add("filter-hidden"),!e&&!g.classList.contains("filter-hidden")&&g.classList.add("filter-hidden")}const M=document.querySelector(".category-list"),it=document.querySelector(".filters-all-param-list"),lt=document.querySelector(".form"),T=document.querySelector(".keyword"),m=document.querySelector(".info-query"),dt=document.querySelector(".product-list"),h="params of search",ut={keyword:null,category:null,page:1,limit:yt(),byABC:!0};n(h)??u(h,ut);async function pt(){const s=(await x()).map(e=>`<li data-category="${e}" class="category-type">${B(e)}</li>`).join("");M.insertAdjacentHTML("afterbegin",s)}function B(t){return t.replaceAll("_"," ")}function yt(){const t=window.innerWidth;let s=0;return t<768?s=6:t>=768&&t<1440?s=8:s=9,s}async function ft(){k();try{const t=n(h),s={...t,keyword:t.keyword||null,page:1};u(h,s);const{results:e}=await L(s);T.value=s.keyword,e.length?(m.classList.add("visually-hidden"),C(e)):d(),s.category!==null?P.textContent=B(s.category):P.textContent="Categories",ct(s)}catch{d(),b()}finally{v()}}function d(){dt.innerHTML="",m.classList.remove("visually-hidden")}lt.addEventListener("submit",st);it.addEventListener("click",at);M.addEventListener("click",tt);T.addEventListener("input",et);document.addEventListener("DOMContentLoaded",pt);document.addEventListener("DOMContentLoaded",ft);
//# sourceMappingURL=commonHelpers2.js.map
