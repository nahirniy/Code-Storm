import{l as r,g as Q,s as m,u as B,b as X,c as tt,d as b,e as v,f as L,h as $,i as M,j as et,k as st,m as ct}from"./assets/modal-subscription-0fdc5b89.js";import"./assets/vendor-a81688c2.js";const l="/Code-Storm/assets/sprite-f073391d.svg",at={popularList:document.querySelector(".popular-list")},nt=r("basket")??[];function ot(t){const s=t.map(({name:e,img:c,category:a,size:o,popularity:n,_id:i})=>{const p=nt.some(S=>S._id===i);return`<li class="popular-item" data-id="${i}">
                    <div class="wrapper-img">
                        <img
                            src="${c}"
                            alt="${e}"
                        />
                    </div>
                    <div class="popular-product-info">
                    <div class="popular-info-top">
                        <h4 class="product-name">${e}</h4>
                        <button type="button" class="btn-light-basket popular-products-btn" data-button-id="${i}">
                        ${p?`<svg class="light-checkmark" width="12" height="12">
                                  <use class="href-icon" href="${l}#icon-checkmark"></use>
                               </svg>`:`<svg class="light-basket" width="12" height="12">
                                 <use href="${l}#icon-basket"></use>
                              </svg>`}
                        </button>
                        </div>
                        <p class="product-category">Category: <span>${a.replace("_"," ")}</span></p>
                        <div class="product-text">
                            <p>Size: <span>${o}</span></p>
                            <p>Popularity: <span>${n}</span></p>
                        </div>
                    </div>
                </li>`});at.popularList.insertAdjacentHTML("beforeend",s.join(""))}const it=5;Q(it).then(t=>{ot(t),m("popular products",t)}).catch(t=>console.log(t));const rt={popularList:document.querySelector(".popular-list")};async function lt(t){const s="basket",e=r(s)??[];if(!t.target.closest(".btn-light-basket"))return;const a=t.target.closest(".popular-item").dataset.id,n=r("popular products").filter(({_id:p})=>a===p)[0],i=document.querySelectorAll(`[data-button-id="${a}"]`);B(s,n,e),I([...i],a,e)}function dt(t,s,e){const c=`<svg class="light-checkmark" width="12" height="12">
            <use class="href-icon" href="${l}#icon-checkmark"></use>
          </svg>`,a=`<svg class="light-basket" width="12" height="12">
            <use class="href-icon" href="${l}#icon-basket"></use>
          </svg>`,o=e.some(({_id:n})=>n===s);t.innerHTML=o?c:a}rt.popularList.addEventListener("click",lt);const ut={discountList:document.querySelector(".discount-list")},pt=r("basket")??[];function gt(t){const s=t.map(({name:e,img:c,_id:a,price:o})=>{const n=pt.some(i=>i._id===a);return`<li class="discount-item" data-id="${a}">
        <svg class="svg-discount" width="60" height="60">
          <use href="${l}#icon-discount-mark"></use>
        </svg>
        <div class="wrap-img">
          <img
            src="${c}"
            alt="${e}"
          />
        </div>
        <div class="discount-product-info">
          <h4 class="product-name">${e}</h4>
          <p class="product-price">$${o}</p>
          <button type="button" class="btn-basket discount-products-btn" data-button-id="${a}">
          ${n?`<svg class="svg-checkmark" width="18" height="18">
              <use class="href-icon" href="${l}#icon-checkmark"></use>
            </svg>`:`<svg class="svg-basket" width="18" height="18">
              <use class="href-icon" href="${l}#icon-basket"></use>
            </svg>`}
          </button>
        </div>
      </li>`});ut.discountList.insertAdjacentHTML("beforeend",s.join(""))}X().then(t=>{gt(t),m("discount products",t)});const mt={discountList:document.querySelector(".discount-list")};mt.discountList.addEventListener("click",ft);async function ft(t){const s="basket",e=r(s)??[];if(!t.target.closest(".btn-basket"))return;const a=t.target.closest(".discount-item").dataset.id,n=r("discount products").filter(({_id:p})=>a===p)[0],i=document.querySelectorAll(`[data-button-id="${a}"]`);B(s,n,e),I([...i],a,e)}function ht(t,s,e){const c=`<svg class="svg-checkmark" width="18" height="18">
            <use class="href-icon" href="${l}#icon-checkmark"></use>
          </svg>`,a=`<svg class="svg-basket" width="18" height="18">
            <use class="href-icon" href="${l}#icon-basket"></use>
          </svg>`,o=e.some(({_id:n})=>n===s);t.innerHTML=o?c:a}const C="basket",yt=document.querySelector(".product-list"),kt=r(C)??[];async function bt(t){const s=r(C)??[];if(!t.target.closest(".btn-basket"))return;const c=t.target.closest(".resp-item").dataset.id,o=r("main products").filter(({_id:i})=>c===i)[0],n=document.querySelectorAll(`[data-button-id="${c}"]`);B(C,o,s),I([...n],c,s)}function vt(t,s,e){const c=`<svg class="svg-checkmark" width="18" height="18">
            <use class="href-icon" href="${l}#icon-checkmark"></use>
          </svg>`,a=`<svg class="svg-basket" width="18" height="18">
            <use class="href-icon" href="${l}#icon-basket"></use>
          </svg>`,o=e.some(({_id:n})=>n===s);t.innerHTML=o?c:a}function I(t,s,e){for(let c=0;c<t.length;c+=1)switch(!0){case t[c].classList.contains("main-products-btn"):vt(t[c],s,e);break;case t[c].classList.contains("popular-products-btn"):dt(t[c],s,e);break;case t[c].classList.contains("discount-products-btn"):ht(t[c],s,e);break}}tt(kt);yt.addEventListener("click",bt);const Lt=document.querySelector(".product-list"),$t="main products",Pt=r("basket")??[];function T(t){m($t,t);const s=t.map(e=>{const c=wt(e.category),a=St(e.price),o=Pt.some(({_id:n})=>n===e._id);return`<li class="resp-item" data-id="${e._id}">
      ${e.is10PercentOff?`<svg class="svg-discount" width="60" height="60">
          <use href="${l}#icon-discount-mark"></use>
        </svg>
          `:""}
        <div class="img" >
          <img class="photo" src="${e.img}" alt="${e.name}" width="140" height="140" loading="lazy"/>
        </div>
        <h4 class="name-product">${e.name}</h4>
        <div class="descr-product">
          <p class="category-product"><span class="style-word">Category:</span>${c}</p>
          <p class="size-product"><span class="style-word">Size:</span>${e.size}</p>
          <p class="popular-product"><span class="style-word">Popularity:</span>${e.popularity}</p>
        </div>
        <div class="footer-product_card">
          <p class="price-product">$${a}</p>
          <button type="button" class="btn-basket main-products-btn" data-button-id="${e._id}">
          ${o?`<svg class="svg-checkmark" width="18" height="18">
            <use class="href-icon" href="${l}#icon-checkmark"></use>
          </svg>`:`<svg class="svg-basket" width="18" height="18">
            <use class="href-icon" href="${l}#icon-basket"></use>
          </svg>`}
          </button>
        </div>
      </li>`}).join("");Lt.innerHTML=s}function wt(t){return t.replace(/_/g," ")}function St(t){return Number.isInteger(t)?`${t}.00`:t.toFixed(2)}const Ct="params of search",R=document.querySelector(".pagination"),qt=document.querySelector(".pagination-btn-wrap"),Et=document.querySelector(".info-query"),At=document.querySelector(".product-list"),z=document.querySelector('[data-page="prev-page"]'),D=document.querySelector('[data-page="next-page"]');let d,f=1,F=1;function O(t,s=1){let e="",c=s,a=s,o=window.innerWidth;d=t,D.classList.remove("disabled"),z.classList.remove("disabled"),o>=768?(c-=1,a+=1,s>2&&(e+='<button type="button" class="number pagination-item" data-page="1">1</button>',s>3&&(e+='<span class="dots">...</span>'))):s>2&&(e+='<button type="button" class="number pagination-item" data-page="1">1</button>',e+='<span class="dots">...</span>'),s===d?(c=c-1,D.classList.add("disabled")):s===d-1&&(c=c-1),s===1?(a=a+1,z.classList.add("disabled")):s==2&&(a=a+1);for(let n=c;n<=a;n+=1)n>d||n<0||(n===0&&(n+=1),e+=`<button type="button" class="number pagination-item ${s===n?"active-page":""}" data-page="${n}">${n}</button>`);return o>=768?s<d-1&&(s<d-2&&(e+='<span class="dots"><span>...</span></span>'),e+=`<button type="button" class="number pagination-item" data-page="${d}">${d}</button>`):s<d-1&&(e+='<span class="dots"><span>...</span></span>',e+=`<button type="button" class="number pagination-item" data-page="${d}">${d}</button>`),qt.innerHTML=e,e}function Bt(t){const s=t.target.closest("button");if(!s)return;const e=s.dataset.page;e==="next-page"?f+=1:e==="prev-page"?f-=1:f=Number(e),F!==f&&(Mt(f),O(d,f),F=f)}async function Mt(t){const e={...r(Ct),page:t};try{b();const{results:c}=await v(e);T(c)}catch{Et.classList.remove("visually-hidden"),R.classList.add("visually-hidden"),At.innerHTML="",L()}finally{$()}}R.addEventListener("click",Bt);const K=document.querySelector(".pagination"),It=document.querySelector(".pagination-btn-wrap"),g="params of search";let u=r(g);async function Tt(t){if(!t.target.classList.contains("category-type"))return;const s=t.target.dataset.category,e=r(g);if(s!=="show-all"?u={...e,category:s}:u={...e,category:null},!!M(e,u))try{b();const{results:a,totalPages:o}=await v(u);_(a,o),m(g,u)}catch{h(),L()}finally{$()}}function Ot(t){const e={...r(g),keyword:t.target.value};m(g,e)}async function _t(t){t.preventDefault();const s=r(g),e=M(s,u);if(u=s,!!e)try{b();const{results:c,totalPages:a}=await v(u);_(c,a)}catch{h(),L()}finally{$()}}function xt(t){let s,e;switch(t.target.dataset.filterparam){case"byAtoZ":s="byABC",e=!0;break;case"byZtoA":s="byABC",e=!1;break;case"byCheaperfirst":s="byPrice",e=!0;break;case"byExpensivefirst":s="byPrice",e=!1;break;case"byPopular":s="byPopularity",e=!1;break;case"byNotpopular":s="byPopularity",e=!0;break;default:s="byABC",e=!0;break}Ht(t,s,e)}async function Ht(t,s,e){if(!t.target.classList.contains("filter-type"))return;const c=r(g),{[Object.keys(c).pop()]:a,...o}=c;if(u={...o,[s]:e},!!M(c,u))try{b();const{results:i,totalPages:p}=await v(u);_(i,p),m(g,u)}catch{h(),L()}finally{$()}}function jt(t){const s=document.querySelector(".param-name");let e;const c=Object.entries(t),[a,o]=c[c.length-1];switch(a){case"byABC":o?e="A to Z":e="Z to A";break;case"byPrice":o?e="Cheaper first":e="Expensive first";break;case"byPopularity":o?e="Not popular":e="Popular";break;default:e="A to Z";break}s.textContent=e}function _(t,s){s>1?(It.innerHTML=O(s),K.classList.remove("visually-hidden")):K.classList.add("visually-hidden"),t.length?(x.classList.add("visually-hidden"),T(t)):h()}const y=document.querySelector(".category-list"),k=document.querySelector(".filters-all-param-list"),W=document.querySelector(".select-filter"),G=document.querySelector(".select-param"),q=document.querySelector(".category-name"),zt=document.querySelector(".param-name");W.addEventListener("click",()=>N(y));G.addEventListener("click",()=>N(k));y.addEventListener("click",t=>Y(t,y,q));k.addEventListener("click",t=>Y(t,k,zt));document.addEventListener("click",Dt);function N(t){t.classList.toggle("filter-hidden")}function Y(t,s,e){const c=t.target;(c.classList.contains("category-type")||c.classList.contains("filter-type"))&&(e.textContent=c.textContent,s.classList.add("filter-hidden"))}function Dt(t){const s=W.contains(t.target),e=G.contains(t.target);!s&&!y.classList.contains("filter-hidden")&&y.classList.add("filter-hidden"),!e&&!k.classList.contains("filter-hidden")&&k.classList.add("filter-hidden")}const Z=document.querySelector(".category-list"),Ft=document.querySelector(".filters-all-param-list"),Kt=document.querySelector(".form"),U=document.querySelector(".keyword"),x=document.querySelector(".info-query"),Rt=document.querySelector(".product-list"),E=document.querySelector(".pagination"),Wt=document.querySelector(".pagination-btn-wrap"),P="params of search",Gt={keyword:null,category:null,page:1,limit:J(),byABC:!0};r(P)??m(P,Gt);async function Nt(){const s=(await et()).map(e=>`<li data-category="${e}" class="category-type">${V(e)}</li>`).join("");Z.insertAdjacentHTML("afterbegin",s)}function V(t){return t.replaceAll("_"," ")}function J(){const t=window.innerWidth;let s=0;return t<768?s=6:t>=768&&t<1440?s=8:s=9,s}async function Yt(){b();try{const t=r(P),s={...t,keyword:t.keyword||null,limit:J(),page:1};m(P,s);const{results:e,totalPages:c}=await v(s);U.value=s.keyword,c>1?(Wt.innerHTML=O(c),E.classList.remove("visually-hidden")):E.classList.add("visually-hidden"),e.length?(x.classList.add("visually-hidden"),T(e)):h(),s.category!==null?q.textContent=V(s.category):q.textContent="Categories",jt(s)}catch(t){h(),L(),console.log(t)}finally{$()}}function h(){Rt.innerHTML="",E.classList.add("visually-hidden"),x.classList.remove("visually-hidden")}Kt.addEventListener("submit",_t);Ft.addEventListener("click",xt);Z.addEventListener("click",Tt);U.addEventListener("input",Ot);document.addEventListener("DOMContentLoaded",Nt);document.addEventListener("DOMContentLoaded",Yt);const Zt=document.querySelector(".clouse_modal"),A=document.querySelector(".modal-backdrop-product"),Ut=document.querySelector(".modal-product"),Vt=document.querySelector(".modal-product-inWindow"),Jt=document.querySelector(".product-list"),Qt=document.querySelector(".popular-section"),Xt=document.querySelector(".discount-section");Zt.addEventListener("click",function(){w(),H()});A.addEventListener("click",function(t){t.target==A&&(w(),H())});document.addEventListener("keydown",function(t){t.target.closest(".modal_window-item"),t.key==="Escape"&&document.body.style.overflow==="hidden"&&(w(),H())});function w(){A.classList.toggle("is-hidden")}function H(){document.body.style.overflow=""}async function j(t){let s;const e=t.target.closest(".resp-item");if(e&&(s=e.dataset.id),t.target.closest(".btn-basket")||t.target.closest(".btn-light-basket"))return;const o=t.target.closest(".popular-item");o&&(s=o.dataset.id);const n=t.target.closest(".discount-item");if(n&&(s=n.dataset.id),!e&&!o&&!n)return;const i=await st(s),p=ct(i.category),S=`<div class ="TestDiv1"><div class="img_modal2" >
    <img class="photo-modal" src="${i.img}" alt="${i.name}" width="160" height="160"  loading="lazy"/>
    </div>
    <div class="testDiv">
    <h3 class="name-product2">${i.name}</h3>
    <div class="descr-product2">
    <p class="category-product"><span class="style-word">Category:</span>${p}</p>
    <p class="size-product"><span class="style-word">Size:</span>${i.size}</p>
    <p class="popular-product"><span class="style-word">Popularity:</span>${i.popularity}</p>
    </div>
    <div class="desc-text"> <p class="textModalp">${i.desc}</p></div>
    </div>
    </div>
    <div class="footer-product_card2">
    <p class="price-product">$${i.price}</p></div>
    <div class = "end-modal">
    <button type="button" class="modal-button"><span class ="textInButton">Add to</span><svg class="svg-basket2" width="18" height="18">
    <use class="href-icon" href="${l}#icon-basket"></use>
  </svg></button></div>`;Vt.innerHTML=S,Ut.style.display="block",document.body.style.overflow="hidden",w()}Jt.addEventListener("click",j);Qt.addEventListener("click",j);Xt.addEventListener("click",j);
//# sourceMappingURL=commonHelpers2.js.map
