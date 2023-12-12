import{l as i,c as Q,u as B,d as M,a as m,s as p,e as k,g as v,f as L,h as $,i as X,j as tt,k as O,m as et,n as st,o as at}from"./assets/modal-subscription-85f0e445.js";import"./assets/vendor-a81688c2.js";const C="basket",ct=document.querySelector(".product-list"),nt=i(C)??[];async function ot(t){const s=i(C)??[];if(!t.target.closest(".btn-basket"))return;const a=t.target.closest(".resp-item").dataset.id,o=i("main products").filter(({_id:r})=>a===r)[0],n=document.querySelectorAll(`[data-button-id="${a}"]`);B(C,o,s),M([...n],a,s)}Q(nt);ct.addEventListener("click",ot);const rt=document.querySelector(".product-list"),it="main products",lt=i("basket")??[];function T(t){m(it,t);const s=t.map(e=>{const a=dt(e.category),c=ut(e.price),o=lt.some(({_id:n})=>n===e._id);return`<li class="resp-item" data-id="${e._id}">
      ${e.is10PercentOff?`<svg class="svg-discount" width="60" height="60">
          <use href="${p}#icon-discount-mark"></use>
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
          <p class="price-product">$${c}</p>
          <button type="button" class="btn-basket main-products-btn" data-button-id="${e._id}">
          ${o?`<svg class="svg-checkmark" width="18" height="18">
            <use class="href-icon" href="${p}#icon-checkmark"></use>
          </svg>`:`<svg class="svg-basket" width="18" height="18">
            <use class="href-icon" href="${p}#icon-basket"></use>
          </svg>`}
          </button>
        </div>
      </li>`}).join("");rt.innerHTML=s}function dt(t){return t.replace(/_/g," ")}function ut(t){return Number.isInteger(t)?`${t}.00`:t.toFixed(2)}const pt="params of search",R=document.querySelector(".pagination"),gt=document.querySelector(".pagination-btn-wrap"),mt=document.querySelector(".info-query"),yt=document.querySelector(".product-list"),H=document.querySelector('[data-page="prev-page"]'),D=document.querySelector('[data-page="next-page"]');let l,y=1,F=1;function _(t,s=1){let e="",a=s,c=s,o=window.innerWidth;l=t,D.classList.remove("disabled"),H.classList.remove("disabled"),o>=768?(a-=1,c+=1,s>2&&(e+='<button type="button" class="number pagination-item" data-page="1">1</button>',s>3&&(e+='<span class="dots">...</span>'))):s>2&&(e+='<button type="button" class="number pagination-item" data-page="1">1</button>',e+='<span class="dots">...</span>'),s===l?(a=a-1,D.classList.add("disabled")):s===l-1&&(a=a-1),s===1?(c=c+1,H.classList.add("disabled")):s==2&&(c=c+1);for(let n=a;n<=c;n+=1)n>l||n<0||(n===0&&(n+=1),e+=`<button type="button" class="number pagination-item ${s===n?"active-page":""}" data-page="${n}">${n}</button>`);return o>=768?s<l-1&&(s<l-2&&(e+='<span class="dots"><span>...</span></span>'),e+=`<button type="button" class="number pagination-item" data-page="${l}">${l}</button>`):s<l-1&&(e+='<span class="dots"><span>...</span></span>',e+=`<button type="button" class="number pagination-item" data-page="${l}">${l}</button>`),gt.innerHTML=e,e}function ft(t){const s=t.target.closest("button");if(!s)return;const e=s.dataset.page;e==="next-page"?y+=1:e==="prev-page"?y-=1:y=Number(e),F!==y&&(ht(y),_(l,y),F=y)}async function ht(t){const e={...i(pt),page:t};try{k();const{results:a}=await v(e);T(a)}catch{mt.classList.remove("visually-hidden"),R.classList.add("visually-hidden"),yt.innerHTML="",L()}finally{$()}}R.addEventListener("click",ft);const bt={popularList:document.querySelector(".popular-list")},kt=i("basket")??[];function vt(t){const s=t.map(({name:e,img:a,category:c,size:o,popularity:n,_id:r})=>{const u=kt.some(S=>S._id===r);return`<li class="popular-item" data-id="${r}">
                    <div class="wrapper-img">
                        <img
                            src="${a}"
                            alt="${e}"
                        />
                    </div>
                    <div class="popular-product-info">
                    <div class="popular-info-top">
                        <h4 class="product-name">${e}</h4>
                        <button type="button" class="btn-light-basket popular-products-btn" data-button-id="${r}">
                        ${u?`<svg class="light-checkmark" width="12" height="12">
                                  <use class="href-icon" href="${p}#icon-checkmark"></use>
                               </svg>`:`<svg class="light-basket" width="12" height="12">
                                 <use href="${p}#icon-basket"></use>
                              </svg>`}
                        </button>
                        </div>
                        <p class="product-category">Category: <span>${c.replace("_"," ")}</span></p>
                        <div class="product-text">
                            <p>Size: <span>${o}</span></p>
                            <p>Popularity: <span>${n}</span></p>
                        </div>
                    </div>
                </li>`});bt.popularList.insertAdjacentHTML("beforeend",s.join(""))}const Lt=5;X(Lt).then(t=>{vt(t),m("popular products",t)}).catch(t=>console.log(t));const $t={popularList:document.querySelector(".popular-list")};async function Pt(t){const s="basket",e=i(s)??[];if(!t.target.closest(".btn-light-basket"))return;const c=t.target.closest(".popular-item").dataset.id,n=i("popular products").filter(({_id:u})=>c===u)[0],r=document.querySelectorAll(`[data-button-id="${c}"]`);B(s,n,e),M([...r],c,e)}$t.popularList.addEventListener("click",Pt);const wt={discountList:document.querySelector(".discount-list")},St=i("basket")??[];function Ct(t){const s=t.map(({name:e,img:a,_id:c,price:o})=>{const n=St.some(r=>r._id===c);return`<li class="discount-item" data-id="${c}">
        <svg class="svg-discount" width="60" height="60">
          <use href="${p}#icon-discount-mark"></use>
        </svg>
        <div class="wrap-img">
          <img
            src="${a}"
            alt="${e}"
          />
        </div>
        <div class="discount-product-info">
          <h4 class="product-name">${e}</h4>
          <p class="product-price">$${o}</p>
          <button type="button" class="btn-basket discount-products-btn" data-button-id="${c}">
          ${n?`<svg class="svg-checkmark" width="18" height="18">
              <use class="href-icon" href="${p}#icon-checkmark"></use>
            </svg>`:`<svg class="svg-basket" width="18" height="18">
              <use class="href-icon" href="${p}#icon-basket"></use>
            </svg>`}
          </button>
        </div>
      </li>`});wt.discountList.insertAdjacentHTML("beforeend",s.join(""))}tt().then(t=>{Ct(t),m("discount products",t)});const qt={discountList:document.querySelector(".discount-list")};qt.discountList.addEventListener("click",Et);async function Et(t){const s="basket",e=i(s)??[];if(!t.target.closest(".btn-basket"))return;const c=t.target.closest(".discount-item").dataset.id,n=i("discount products").filter(({_id:u})=>c===u)[0],r=document.querySelectorAll(`[data-button-id="${c}"]`);B(s,n,e),M([...r],c,e)}const K=document.querySelector(".pagination"),At=document.querySelector(".pagination-btn-wrap"),g="params of search";let d=i(g);async function Bt(t){if(!t.target.classList.contains("category-type"))return;const s=t.target.dataset.category,e=i(g);if(s!=="show-all"?d={...e,category:s}:d={...e,category:null},!!O(e,d))try{k();const{results:c,totalPages:o}=await v(d);x(c,o),m(g,d)}catch{f(),L()}finally{$()}}function Mt(t){const e={...i(g),keyword:t.target.value};m(g,e)}async function Ot(t){t.preventDefault();const s=i(g),e=O(s,d);if(d=s,!!e)try{k();const{results:a,totalPages:c}=await v(d);x(a,c)}catch{f(),L()}finally{$()}}function Tt(t){let s,e;switch(t.target.dataset.filterparam){case"byAtoZ":s="byABC",e=!0;break;case"byZtoA":s="byABC",e=!1;break;case"byCheaperfirst":s="byPrice",e=!0;break;case"byExpensivefirst":s="byPrice",e=!1;break;case"byPopular":s="byPopularity",e=!1;break;case"byNotpopular":s="byPopularity",e=!0;break;default:s="byABC",e=!0;break}_t(t,s,e)}async function _t(t,s,e){if(!t.target.classList.contains("filter-type"))return;const a=i(g),{[Object.keys(a).pop()]:c,...o}=a;if(d={...o,[s]:e},!!O(a,d))try{k();const{results:r,totalPages:u}=await v(d);x(r,u),m(g,d)}catch{f(),L()}finally{$()}}function xt(t){const s=document.querySelector(".param-name");let e;const a=Object.entries(t),[c,o]=a[a.length-1];switch(c){case"byABC":o?e="A to Z":e="Z to A";break;case"byPrice":o?e="Cheaper first":e="Expensive first";break;case"byPopularity":o?e="Not popular":e="Popular";break;default:e="A to Z";break}s.textContent=e}function x(t,s){s>1?(At.innerHTML=_(s),K.classList.remove("visually-hidden")):K.classList.add("visually-hidden"),t.length?(I.classList.add("visually-hidden"),T(t)):f()}const h=document.querySelector(".category-list"),b=document.querySelector(".filters-all-param-list"),W=document.querySelector(".select-filter"),G=document.querySelector(".select-param"),q=document.querySelector(".category-name"),It=document.querySelector(".param-name");W.addEventListener("click",()=>N(h));G.addEventListener("click",()=>N(b));h.addEventListener("click",t=>Y(t,h,q));b.addEventListener("click",t=>Y(t,b,It));document.addEventListener("click",jt);function N(t){t.classList.toggle("filter-hidden")}function Y(t,s,e){const a=t.target;(a.classList.contains("category-type")||a.classList.contains("filter-type"))&&(e.textContent=a.textContent,s.classList.add("filter-hidden"))}function jt(t){const s=W.contains(t.target),e=G.contains(t.target);!s&&!h.classList.contains("filter-hidden")&&h.classList.add("filter-hidden"),!e&&!b.classList.contains("filter-hidden")&&b.classList.add("filter-hidden")}const Z=document.querySelector(".category-list"),zt=document.querySelector(".filters-all-param-list"),Ht=document.querySelector(".form"),U=document.querySelector(".keyword"),I=document.querySelector(".info-query"),Dt=document.querySelector(".product-list"),E=document.querySelector(".pagination"),Ft=document.querySelector(".pagination-btn-wrap"),P="params of search",Kt={keyword:null,category:null,page:1,limit:J(),byABC:!0};i(P)??m(P,Kt);async function Rt(){const s=(await et()).map(e=>`<li data-category="${e}" class="category-type">${V(e)}</li>`).join("");Z.insertAdjacentHTML("afterbegin",s)}function V(t){return t.replaceAll("_"," ")}function J(){const t=window.innerWidth;let s=0;return t<768?s=6:t>=768&&t<1440?s=8:s=9,s}async function Wt(){k();try{const t=i(P),s={...t,keyword:t.keyword||null,limit:J(),page:1};m(P,s);const{results:e,totalPages:a}=await v(s);U.value=s.keyword,a>1?(Ft.innerHTML=_(a),E.classList.remove("visually-hidden")):E.classList.add("visually-hidden"),e.length?(I.classList.add("visually-hidden"),T(e)):f(),s.category!==null?q.textContent=V(s.category):q.textContent="Categories",xt(s)}catch(t){f(),L(),console.log(t)}finally{$()}}function f(){Dt.innerHTML="",E.classList.add("visually-hidden"),I.classList.remove("visually-hidden")}Ht.addEventListener("submit",Ot);zt.addEventListener("click",Tt);Z.addEventListener("click",Bt);U.addEventListener("input",Mt);document.addEventListener("DOMContentLoaded",Rt);document.addEventListener("DOMContentLoaded",Wt);const Gt=document.querySelector(".clouse_modal"),A=document.querySelector(".modal-backdrop-product"),Nt=document.querySelector(".modal-product"),Yt=document.querySelector(".modal-product-inWindow"),Zt=document.querySelector(".product-list"),Ut=document.querySelector(".popular-section"),Vt=document.querySelector(".discount-section");Gt.addEventListener("click",function(){w(),j()});A.addEventListener("click",function(t){t.target==A&&(w(),j())});document.addEventListener("keydown",function(t){t.target.closest(".modal_window-item"),t.key==="Escape"&&document.body.style.overflow==="hidden"&&(w(),j())});function w(){A.classList.toggle("is-hidden")}function j(){document.body.style.overflow=""}async function z(t){let s;const e=t.target.closest(".resp-item");if(e&&(s=e.dataset.id),t.target.closest(".btn-basket")||t.target.closest(".btn-light-basket"))return;const o=t.target.closest(".popular-item");o&&(s=o.dataset.id);const n=t.target.closest(".discount-item");if(n&&(s=n.dataset.id),!e&&!o&&!n)return;const r=await st(s),u=at(r.category),S=`<div class ="TestDiv1"><div class="img_modal2" >
    <img class="photo-modal" src="${r.img}" alt="${r.name}" width="160" height="160"  loading="lazy"/>
    </div>
    <div class="testDiv">
    <h3 class="name-product2">${r.name}</h3>
    <div class="descr-product2">
    <p class="category-product"><span class="style-word">Category:</span>${u}</p>
    <p class="size-product"><span class="style-word">Size:</span>${r.size}</p>
    <p class="popular-product"><span class="style-word">Popularity:</span>${r.popularity}</p>
    </div>
    <div class="desc-text"> <p class="textModalp">${r.desc}</p></div>
    </div>
    </div>
    <div class="footer-product_card2">
    <p class="price-product">$${r.price}</p></div>
    <div class = "end-modal">
    <button type="button" class="modal-button"><span class ="textInButton">Add to</span><svg class="svg-basket2" width="18" height="18">
    <use class="href-icon" href="${p}#icon-basket"></use>
  </svg></button></div>`;Yt.innerHTML=S,Nt.style.display="block",document.body.style.overflow="hidden",w()}Zt.addEventListener("click",z);Ut.addEventListener("click",z);Vt.addEventListener("click",z);
//# sourceMappingURL=commonHelpers2.js.map
