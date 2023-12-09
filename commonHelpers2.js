import"./assets/styles-7fa91617.js";import{n as O,a as f}from"./assets/vendor-424513b8.js";function u(t,s){localStorage.setItem(t,JSON.stringify(s))}function n(t){const s=localStorage.getItem(t);try{return JSON.parse(s)}catch{return O.Notify.failure("Oops! Something went wrong..."),s}}function q(t){const{keyword:s,category:e,page:a,limit:c,...r}=t,o=Object.keys(r).length,i=new URLSearchParams({page:a,limit:c});if(s&&i.set("keyword",s),e&&i.set("category",e),o){const[E,A]=Object.entries(r)[0];i.set(E,A)}return i}function b(t,s,e){const a=e.findIndex(c=>c._id===s._id);a!==-1?e.splice(a,1):e.push(s),u(t,e)}const v="basket",M=n(v)??[],T=document.querySelector(".product-list");async function _(t){if(!t.target.closest(".btn-basket"))return;const e=t.target.closest(".resp-item").dataset.id,c=n("main products").filter(({_id:r})=>e===r)[0];b(v,c,M)}T.addEventListener("click",_);f.defaults.baseURL="https://food-boutique.b.goit.study/api";const x=async()=>{const{data:t}=await f.get("/products/categories");return t},m=async t=>{const s=q(t),{data:e}=await f.get("/products/",{params:s});return e},B=async t=>{const{data:s}=await f.get(`/products/popular?limit=${t}`);return s},I=async()=>{const{data:t}=await f.get("/products/discount");return t},g="/Code-Storm/assets/sprite-f073391d.svg",j={popularList:document.querySelector(".popular-list")};function F(t){const s=t.map(({name:e,img:a,category:c,size:r,popularity:o,_id:i})=>`<li class="popular-item" data-id="${i}">
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
                            <p>Popularity: <span>${o}</span></p>
                        </div>
                    </div>
                </li>`);j.popularList.insertAdjacentHTML("beforeend",s.join(""))}const H=5;B(H).then(t=>{F(t),u("popular products",t)});const N={popularList:document.querySelector(".popular-list")};N.popularList.addEventListener("click",R);async function R(t){const s="basket",e=n(s)??[];if(!t.target.closest(".btn-light-basket"))return;const c=t.target.closest(".popular-item").dataset.id,o=n("popular products").filter(({_id:i})=>c===i)[0];b(s,o,e)}const K={discountList:document.querySelector(".discount-list")};function z(t){const s=t.map(({name:e,img:a,_id:c,price:r})=>`<li class="discount-item" data-id="${c}">
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
      </li>`);K.discountList.insertAdjacentHTML("beforeend",s.join(""))}I().then(t=>{z(t),u("discount products",t)});const D={discountList:document.querySelector(".discount-list")};D.discountList.addEventListener("click",G);async function G(t){const s="basket",e=n(s)??[],a=t.target.closest(".btn-basket");if(!a)return;const c=t.target.closest(".discount-item").dataset.id,o=n("discount products").filter(({_id:i})=>c===i)[0];b(s,o,e),a.innerHTML=Y}const Y=`<svg class="svg-checkmark">
      <use href="${g}#icon-checkmark"></use>
    </svg>`,Z=document.querySelector(".product-list"),U="main products";function L(t){u(U,t);const s=t.map(e=>{let a=J(e.category),c=V(e.price);return`<li class="resp-item" data-id=${e._id} data-info="${e}">
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
      </li>`}).join("");Z.innerHTML=s}function J(t){return t.replace(/_/g," ")}function V(t){return Number.isInteger(t)?`${t}.00`:t.toFixed(2)}const p=document.querySelector(".category-list"),Q=document.querySelector(".form"),W=document.querySelector(".keyword"),y=document.querySelector(".filters-all-param-list"),d=document.querySelector(".info-query"),h=document.querySelector(".product-list"),l="params of search",X={keyword:null,category:null,page:1,limit:9,byABC:!0};n(l)??u(l,X);async function tt(){const s=(await x()).map(e=>`<li data-category="${e}" class="category-type">${C(e)}</li>`).join("");p.insertAdjacentHTML("afterbegin",s)}async function et(t){if(!t.target.classList.contains("category-type"))return;const s=t.target.dataset.category,e=n(l);let a;s!=="show-all"?a={...e,category:s}:a={...e,category:null};const{results:c}=await m(a);c.length?(d.classList.add("visually-hidden"),L(c)):(d.classList.remove("visually-hidden"),h.innerHTML=""),u(l,a)}async function st(t){const e={...n(l),keyword:t.target.value};u(l,e)}async function at(t){t.preventDefault();const s=n(l),{results:e}=await m(s);e.length?(d.classList.add("visually-hidden"),L(e)):(d.classList.remove("visually-hidden"),h.innerHTML="")}function C(t){return t.replaceAll("_"," ")}async function ct(t){let s,e;switch(t.target.dataset.filterparam){case"byAtoZ":s="byABC",e=!0;break;case"byZtoA":s="byABC",e=!1;break;case"byCheaperfirst":s="byPrice",e=!0;break;case"byExpensivefirst":s="byPrice",e=!1;break;case"byPopular":s="byPopularity",e=!1;break;case"byNotpopular":s="byPopularity",e=!0;break;default:s="byABC",e=!0;break}rt(s,e)}async function rt(t,s){const e=n(l),{[Object.keys(e).pop()]:a,...c}=e,r={...c,[t]:s},{results:o}=await m(r);console.log(o.length),o.length?(d.classList.add("visually-hidden"),L(o)):(h.innerHTML="",d.classList.remove("visually-hidden")),u(l,r)}async function nt(){const t=n(l),{results:s}=await m(t);s.length?(d.classList.add("visually-hidden"),L(s)):(h.innerHTML="",d.classList.remove("visually-hidden")),t.category!==null?k.textContent=C(t.category):k.textContent="Categories",ot(t)}function ot(t){const s=document.querySelector(".param-name");let e;const a=Object.entries(t),[c,r]=a[a.length-1];switch(c){case"byABC":r?e="A to Z":e="Z to A";break;case"byPrice":r?e="Cheaper first":e="Expensive first";break;case"byPopularity":r?e="Not popular":e="Popular";break;default:e="A to Z";break}s.textContent=e}Q.addEventListener("submit",at);y.addEventListener("click",ct);p.addEventListener("click",et);W.addEventListener("input",st);document.addEventListener("DOMContentLoaded",tt);document.addEventListener("DOMContentLoaded",nt);const $=document.querySelector(".select-filter"),P=document.querySelector(".select-param"),k=document.querySelector(".category-name"),it=document.querySelector(".param-name");$.addEventListener("click",()=>S(p));P.addEventListener("click",()=>S(y));p.addEventListener("click",t=>w(t,p,k));y.addEventListener("click",t=>w(t,y,it));document.addEventListener("click",lt);function S(t){t.classList.toggle("filter-hidden")}function w(t,s,e){const a=t.target;(a.classList.contains("category-type")||a.classList.contains("filter-type"))&&(e.textContent=a.textContent,s.classList.add("filter-hidden"))}function lt(t){const s=$.contains(t.target),e=P.contains(t.target);!s&&!p.classList.contains("filter-hidden")&&p.classList.add("filter-hidden"),!e&&!y.classList.contains("filter-hidden")&&y.classList.add("filter-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
