import{l as r,c as Y,u as E,s as o,g as m,b as z,d as D,e as $,f as P,h as C,i as Z}from"./assets/modal-subscription-ca5b2084.js";import"./assets/vendor-7a0e9089.js";const T="basket",B=r(T)??[],W=document.querySelector(".product-list");async function J(t){if(!t.target.closest(".btn-basket"))return;const e=t.target.closest(".resp-item").dataset.id,n=r("main products").filter(({_id:c})=>e===c)[0];E(T,n,B)}Y(B);W.addEventListener("click",J);const f="/Code-Storm/assets/sprite-f073391d.svg",U=document.querySelector(".product-list"),V="main products";function L(t){o(V,t);const s=t.map(e=>{let a=Q(e.category),n=X(e.price);return`<li class="resp-item" data-id=${e._id}">
      ${e.is10PercentOff?`<svg class="svg-discount" width="60" height="60">
          <use href="${f}#icon-discount-mark"></use>
        </svg>
          `:""}
        <div class="img" >
          <img class="photo" src="${e.img}" alt="${e.name}" width="140" height="140" loading="lazy"/>
        </div>
        <h4 class="name-product">${e.name}</h4>
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
      </li>`}).join("");U.innerHTML=s}function Q(t){return t.replace(/_/g," ")}function X(t){return Number.isInteger(t)?`${t}.00`:t.toFixed(2)}const w=document.querySelector(".pagination"),O="params of search";let y=5,p=1,N=9;function _(t,s){let e="";if(t>N)if(t>1){s>1&&(e+=`<button type="button" class="pagination-item" data-page="${Number(s-1)}">
                <span><i class="fas arrow-left"></i>
                <svg class="icon-arrow" width="24" height="24">
                    <use href="../../../img/icons/sprite.svg#icon-arrow-left"></use>
                </svg></span></button>`),s>2&&(e+='<button type="button" class="number pagination-item" data-page="1">1</button>',s>3&&(e+='<span class="dots">...</span>'));for(let a=Math.max(1,s-1);a<=Math.min(t,s+1);a++)e+=`<button type="button" class="number ${a===s?"active-page":""} pagination-item" data-page="${a}">${a}</button>`;s<t-1&&(s<t-2&&(e+='<span class="dots">...</span>'),e+=`<button type="button" class="number pagination-item" data-page="${t}">${t}</button>`),s<t-1&&(e+=`<button type="button" class="pagination-item" data-page="${Number(s+1)}">
                <span><i class="fas arrow-right"></i>
                <svg class="icon-arrow" width="24" height="24">
                    <use href="../../../img/icons/sprite.svg#icon-arrow-right"></use>
                </svg></span></button>`)}else for(let a=1;a<=t;a++)e+=`<button type="button" class="number ${a===s?"active-page":""} pagination-item" data-page="${a}">${a}</button>`;w.innerHTML="",w.insertAdjacentHTML("beforeend",e),document.querySelectorAll(".pagination-item").forEach(a=>{a.removeEventListener("click",M)}),document.querySelectorAll(".pagination-item").forEach(a=>{a.addEventListener("click",M)})}function M(){const t=parseInt(this.dataset.page);_(y,t)}const tt=document.querySelector(".filter_form");tt.addEventListener("click",A);document.querySelectorAll(".pagination-item").forEach(t=>{t.removeEventListener("click",A)});document.querySelectorAll(".pagination-item").forEach(t=>{t.addEventListener("click",A)});async function A(){const t=this.dataset.page;isNaN(t)?this.classList.contains("arrow-left")?(p=Math.max(1,p-1),console.log(p)):this.classList.contains("arrow-right")&&(p=Math.min(y,p+1)):p=Number(t);const s={keyword:null,category:null,page:1,limit:9,byABC:!0};try{const e=await m(s);y=e.totalPages,console.log("Search Results:",e.results),console.log("Total Pages:",e.totalPages),y>N&&_(y,p)}catch(e){console.error("Error fetching products:",e)}}w.addEventListener("click",et);async function et(t){if(!t.target.closest(".pagination-item"))return;const e=t.target.closest(".pagination-item").dataset.page;console.log(e),console.log(e);const n={...r(O),page:e};o(O,n);const{results:c}=await m(n);L(c)}const st={popularList:document.querySelector(".popular-list")};function at(t){const s=t.map(({name:e,img:a,category:n,size:c,popularity:g,_id:l})=>`<li class="popular-item" data-id="${l}">
                    <div class="wrapper-img">
                        <img
                            src="${a}"
                            alt="${e}"
                        />
                    </div>
                    <div class="popular-product-info">
                    <div class="popular-info-top">
                        <h4 class="product-name">${e}</h4>
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
                </li>`);st.popularList.insertAdjacentHTML("beforeend",s.join(""))}const nt=5;z(nt).then(t=>{at(t),o("popular products",t)});const ct={popularList:document.querySelector(".popular-list")};ct.popularList.addEventListener("click",rt);async function rt(t){const s="basket",e=r(s)??[];if(!t.target.closest(".btn-light-basket"))return;const n=t.target.closest(".popular-item").dataset.id,g=r("popular products").filter(({_id:l})=>n===l)[0];E(s,g,e)}const it={discountList:document.querySelector(".discount-list")};function ot(t){const s=t.map(({name:e,img:a,_id:n,price:c})=>`<li class="discount-item" data-id="${n}">
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
          <h4 class="product-name">${e}</h4>
          <p class="product-price">$${c}</p>
          <button type="button" class="btn-basket">
          <svg class="svg-basket">
            <use class="href-icon" href="${f}#icon-basket"></use>
          </svg>
          </button>
        </div>
      </li>`);it.discountList.insertAdjacentHTML("beforeend",s.join(""))}D().then(t=>{ot(t),o("discount products",t)});const lt={discountList:document.querySelector(".discount-list")};lt.discountList.addEventListener("click",ut);async function ut(t){const s="basket",e=r(s)??[],a=t.target.closest(".btn-basket");if(!a)return;const n=t.target.closest(".discount-item").dataset.id,g=r("discount products").filter(({_id:l})=>n===l)[0];E(s,g,e),a.innerHTML=dt}const dt=`<svg class="svg-checkmark">
      <use href="${f}#icon-checkmark"></use>
    </svg>`,u="params of search";let i=r(u);async function pt(t){if(!t.target.classList.contains("category-type"))return;const s=t.target.dataset.category,e=r(u);if(s!=="show-all"?i={...e,category:s}:i={...e,category:null},!!q(e,i))try{$();const{results:n}=await m(i);n.length?(k.classList.add("visually-hidden"),L(n)):d(),o(u,i)}catch{d(),P()}finally{C()}}function gt(t){const e={...r(u),keyword:t.target.value};o(u,e)}async function ft(t){t.preventDefault();const s=r(u);if(q(s,i))try{$(),i=s;const{results:a}=await m(i);a.length?(k.classList.add("visually-hidden"),L(a)):d()}catch{d(),P()}finally{C()}}function mt(t){let s,e;switch(t.target.dataset.filterparam){case"byAtoZ":s="byABC",e=!0;break;case"byZtoA":s="byABC",e=!1;break;case"byCheaperfirst":s="byPrice",e=!0;break;case"byExpensivefirst":s="byPrice",e=!1;break;case"byPopular":s="byPopularity",e=!1;break;case"byNotpopular":s="byPopularity",e=!0;break;default:s="byABC",e=!0;break}yt(t,s,e)}async function yt(t,s,e){if(!t.target.classList.contains("filter-type"))return;const a=r(u),{[Object.keys(a).pop()]:n,...c}=a;if(i={...c,[s]:e},!!q(a,i))try{$();const{results:l}=await m(i);l.length?(k.classList.add("visually-hidden"),L(l)):d(),o(u,i)}catch{d(),P()}finally{C()}}function ht(t){const s=document.querySelector(".param-name");let e;const a=Object.entries(t),[n,c]=a[a.length-1];switch(n){case"byABC":c?e="A to Z":e="Z to A";break;case"byPrice":c?e="Cheaper first":e="Expensive first";break;case"byPopularity":c?e="Not popular":e="Popular";break;default:e="A to Z";break}s.textContent=e}function q(t,s){return JSON.stringify(t)!==JSON.stringify(s)}const h=document.querySelector(".category-list"),b=document.querySelector(".filters-all-param-list"),x=document.querySelector(".select-filter"),I=document.querySelector(".select-param"),S=document.querySelector(".category-name"),bt=document.querySelector(".param-name");x.addEventListener("click",()=>j(h));I.addEventListener("click",()=>j(b));h.addEventListener("click",t=>F(t,h,S));b.addEventListener("click",t=>F(t,b,bt));document.addEventListener("click",Lt);function j(t){t.classList.toggle("filter-hidden")}function F(t,s,e){const a=t.target;(a.classList.contains("category-type")||a.classList.contains("filter-type"))&&(e.textContent=a.textContent,s.classList.add("filter-hidden"))}function Lt(t){const s=x.contains(t.target),e=I.contains(t.target);!s&&!h.classList.contains("filter-hidden")&&h.classList.add("filter-hidden"),!e&&!b.classList.contains("filter-hidden")&&b.classList.add("filter-hidden")}const K=document.querySelector(".category-list"),kt=document.querySelector(".filters-all-param-list"),vt=document.querySelector(".form"),H=document.querySelector(".keyword"),k=document.querySelector(".info-query"),$t=document.querySelector(".product-list"),v="params of search",Pt={keyword:null,category:null,page:1,limit:G(),byABC:!0};r(v)??o(v,Pt);async function Ct(){const s=(await Z()).map(e=>`<li data-category="${e}" class="category-type">${R(e)}</li>`).join("");K.insertAdjacentHTML("afterbegin",s)}function R(t){return t.replaceAll("_"," ")}function G(){const t=window.innerWidth;let s=0;return t<768?s=6:t>=768&&t<1440?s=8:s=9,s}async function wt(){$();try{const t=r(v),s={...t,keyword:t.keyword||null,limit:G(),page:1};o(v,s);const{results:e}=await m(s);H.value=s.keyword,e.length?(k.classList.add("visually-hidden"),L(e)):d(),s.category!==null?S.textContent=R(s.category):S.textContent="Categories",ht(s)}catch{d(),P()}finally{C()}}function d(){$t.innerHTML="",k.classList.remove("visually-hidden")}vt.addEventListener("submit",ft);kt.addEventListener("click",mt);K.addEventListener("click",pt);H.addEventListener("input",gt);document.addEventListener("DOMContentLoaded",Ct);document.addEventListener("DOMContentLoaded",wt);
//# sourceMappingURL=commonHelpers2.js.map
