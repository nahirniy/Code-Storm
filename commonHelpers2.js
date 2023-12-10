import{l as r,u as E,s as o,g as m,b as R,c as G,d as $,e as P,h as C,f as Y}from"./assets/modal-subscription-3b55eb65.js";import"./assets/vendor-7a0e9089.js";const T="basket",z=r(T)??[],D=document.querySelector(".product-list");async function Z(t){if(!t.target.closest(".btn-basket"))return;const e=t.target.closest(".resp-item").dataset.id,n=r("main products").filter(({_id:c})=>e===c)[0];E(T,n,z)}D.addEventListener("click",Z);const f="/Code-Storm/assets/sprite-f073391d.svg",W=document.querySelector(".product-list"),J="main products";function L(t){o(J,t);const s=t.map(e=>{let a=U(e.category),n=V(e.price);return`<li class="resp-item" data-id=${e._id} data-info="${e}">
      ${e.is10PercentOff?`<svg class="svg-discount" width="60" height="60">
          <use href="${f}#icon-discount-mark"></use>
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
          <p class="price-product">$${n}</p>
          <button type="button" class="btn-basket">
          <svg class="svg-basket" width="34" height="34">
            <use class="href-icon" href="${f}#icon-basket"></use>
          </svg>
          </button>
        </div>
      </li>`}).join("");W.innerHTML=s}function U(t){return t.replace(/_/g," ")}function V(t){return Number.isInteger(t)?`${t}.00`:t.toFixed(2)}const w=document.querySelector(".pagination"),O="params of search";let y=5,p=1,B=9;function N(t,s){let e="";if(t>B)if(t>1){s>1&&(e+=`<button type="button" class="pagination-item" data-page="${Number(s-1)}">
                <span><i class="fas arrow-left"></i>
                <svg class="icon-arrow" width="24" height="24">
                    <use href="../../../img/icons/sprite.svg#icon-arrow-left"></use>
                </svg></span></button>`),s>2&&(e+='<button type="button" class="number pagination-item" data-page="1">1</button>',s>3&&(e+='<span class="dots">...</span>'));for(let a=Math.max(1,s-1);a<=Math.min(t,s+1);a++)e+=`<button type="button" class="number ${a===s?"active-page":""} pagination-item" data-page="${a}">${a}</button>`;s<t-1&&(s<t-2&&(e+='<span class="dots">...</span>'),e+=`<button type="button" class="number pagination-item" data-page="${t}">${t}</button>`),s<t-1&&(e+=`<button type="button" class="pagination-item" data-page="${Number(s+1)}">
                <span><i class="fas arrow-right"></i>
                <svg class="icon-arrow" width="24" height="24">
                    <use href="../../../img/icons/sprite.svg#icon-arrow-right"></use>
                </svg></span></button>`)}else for(let a=1;a<=t;a++)e+=`<button type="button" class="number ${a===s?"active-page":""} pagination-item" data-page="${a}">${a}</button>`;w.innerHTML="",w.insertAdjacentHTML("beforeend",e),document.querySelectorAll(".pagination-item").forEach(a=>{a.removeEventListener("click",M)}),document.querySelectorAll(".pagination-item").forEach(a=>{a.addEventListener("click",M)})}function M(){const t=parseInt(this.dataset.page);N(y,t)}const Q=document.querySelector(".filter_form");Q.addEventListener("click",A);document.querySelectorAll(".pagination-item").forEach(t=>{t.removeEventListener("click",A)});document.querySelectorAll(".pagination-item").forEach(t=>{t.addEventListener("click",A)});async function A(){const t=this.dataset.page;isNaN(t)?this.classList.contains("arrow-left")?(p=Math.max(1,p-1),console.log(p)):this.classList.contains("arrow-right")&&(p=Math.min(y,p+1)):p=Number(t);const s={keyword:null,category:null,page:1,limit:9,byABC:!0};try{const e=await m(s);y=e.totalPages,console.log("Search Results:",e.results),console.log("Total Pages:",e.totalPages),y>B&&N(y,p)}catch(e){console.error("Error fetching products:",e)}}w.addEventListener("click",X);async function X(t){if(!t.target.closest(".pagination-item"))return;const e=t.target.closest(".pagination-item").dataset.page;console.log(e),console.log(e);const n={...r(O),page:e};o(O,n);const{results:c}=await m(n);L(c)}const tt={popularList:document.querySelector(".popular-list")};function et(t){const s=t.map(({name:e,img:a,category:n,size:c,popularity:g,_id:l})=>`<li class="popular-item" data-id="${l}">
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
                        <svg class="light-basket"><use width="12" height="12 "href="${f}#icon-basket"></use></svg>
                        </button>
                        </div>
                        <p class="product-category">Category: <span>${n.replace("_"," ")}</span></p>
                        <div class="product-text">
                            <p>Size: <span>${c}</span></p>
                            <p>Popularity: <span>${g}</span></p>
                        </div>
                    </div>
                </li>`);tt.popularList.insertAdjacentHTML("beforeend",s.join(""))}const st=5;R(st).then(t=>{et(t),o("popular products",t)});const at={popularList:document.querySelector(".popular-list")};at.popularList.addEventListener("click",nt);async function nt(t){const s="basket",e=r(s)??[];if(!t.target.closest(".btn-light-basket"))return;const n=t.target.closest(".popular-item").dataset.id,g=r("popular products").filter(({_id:l})=>n===l)[0];E(s,g,e)}const ct={discountList:document.querySelector(".discount-list")};function rt(t){const s=t.map(({name:e,img:a,_id:n,price:c})=>`<li class="discount-item" data-id="${n}">
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
      </li>`);ct.discountList.insertAdjacentHTML("beforeend",s.join(""))}G().then(t=>{rt(t),o("discount products",t)});const it={discountList:document.querySelector(".discount-list")};it.discountList.addEventListener("click",ot);async function ot(t){const s="basket",e=r(s)??[],a=t.target.closest(".btn-basket");if(!a)return;const n=t.target.closest(".discount-item").dataset.id,g=r("discount products").filter(({_id:l})=>n===l)[0];E(s,g,e),a.innerHTML=lt}const lt=`<svg class="svg-checkmark">
      <use href="${f}#icon-checkmark"></use>
    </svg>`,u="params of search";let i=r(u);async function ut(t){if(!t.target.classList.contains("category-type"))return;const s=t.target.dataset.category,e=r(u);if(s!=="show-all"?i={...e,category:s}:i={...e,category:null},!!q(e,i))try{$();const{results:n}=await m(i);n.length?(k.classList.add("visually-hidden"),L(n)):d(),o(u,i)}catch{d(),P()}finally{C()}}function dt(t){const e={...r(u),keyword:t.target.value};o(u,e)}async function pt(t){t.preventDefault();const s=r(u);if(q(s,i))try{$(),i=s;const{results:a}=await m(i);a.length?(k.classList.add("visually-hidden"),L(a)):d()}catch{d(),P()}finally{C()}}function gt(t){let s,e;switch(t.target.dataset.filterparam){case"byAtoZ":s="byABC",e=!0;break;case"byZtoA":s="byABC",e=!1;break;case"byCheaperfirst":s="byPrice",e=!0;break;case"byExpensivefirst":s="byPrice",e=!1;break;case"byPopular":s="byPopularity",e=!1;break;case"byNotpopular":s="byPopularity",e=!0;break;default:s="byABC",e=!0;break}ft(t,s,e)}async function ft(t,s,e){if(!t.target.classList.contains("filter-type"))return;const a=r(u),{[Object.keys(a).pop()]:n,...c}=a;if(i={...c,[s]:e},!!q(a,i))try{$();const{results:l}=await m(i);l.length?(k.classList.add("visually-hidden"),L(l)):d(),o(u,i)}catch{d(),P()}finally{C()}}function mt(t){const s=document.querySelector(".param-name");let e;const a=Object.entries(t),[n,c]=a[a.length-1];switch(n){case"byABC":c?e="A to Z":e="Z to A";break;case"byPrice":c?e="Cheaper first":e="Expensive first";break;case"byPopularity":c?e="Not popular":e="Popular";break;default:e="A to Z";break}s.textContent=e}function q(t,s){return JSON.stringify(t)!==JSON.stringify(s)}const h=document.querySelector(".category-list"),b=document.querySelector(".filters-all-param-list"),_=document.querySelector(".select-filter"),x=document.querySelector(".select-param"),S=document.querySelector(".category-name"),yt=document.querySelector(".param-name");_.addEventListener("click",()=>I(h));x.addEventListener("click",()=>I(b));h.addEventListener("click",t=>j(t,h,S));b.addEventListener("click",t=>j(t,b,yt));document.addEventListener("click",ht);function I(t){t.classList.toggle("filter-hidden")}function j(t,s,e){const a=t.target;(a.classList.contains("category-type")||a.classList.contains("filter-type"))&&(e.textContent=a.textContent,s.classList.add("filter-hidden"))}function ht(t){const s=_.contains(t.target),e=x.contains(t.target);!s&&!h.classList.contains("filter-hidden")&&h.classList.add("filter-hidden"),!e&&!b.classList.contains("filter-hidden")&&b.classList.add("filter-hidden")}const F=document.querySelector(".category-list"),bt=document.querySelector(".filters-all-param-list"),Lt=document.querySelector(".form"),K=document.querySelector(".keyword"),k=document.querySelector(".info-query"),kt=document.querySelector(".product-list"),v="params of search",vt={keyword:null,category:null,page:1,limit:Pt(),byABC:!0};r(v)??o(v,vt);async function $t(){const s=(await Y()).map(e=>`<li data-category="${e}" class="category-type">${H(e)}</li>`).join("");F.insertAdjacentHTML("afterbegin",s)}function H(t){return t.replaceAll("_"," ")}function Pt(){const t=window.innerWidth;let s=0;return t<768?s=6:t>=768&&t<1440?s=8:s=9,s}async function Ct(){$();try{const t=r(v),s={...t,keyword:t.keyword||null,page:1};o(v,s);const{results:e}=await m(s);K.value=s.keyword,e.length?(k.classList.add("visually-hidden"),L(e)):d(),s.category!==null?S.textContent=H(s.category):S.textContent="Categories",mt(s)}catch{d(),P()}finally{C()}}function d(){kt.innerHTML="",k.classList.remove("visually-hidden")}Lt.addEventListener("submit",pt);bt.addEventListener("click",gt);F.addEventListener("click",ut);K.addEventListener("input",dt);document.addEventListener("DOMContentLoaded",$t);document.addEventListener("DOMContentLoaded",Ct);
//# sourceMappingURL=commonHelpers2.js.map
