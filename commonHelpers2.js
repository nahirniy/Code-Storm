import{l as i,c as J,u as A,s as g,b,g as v,d as L,h as $,e as Q,f as X,i as M,j as tt,k as et,m as st}from"./assets/modal-subscription-7bcc00ed.js";import"./assets/vendor-7a0e9089.js";const l="/Code-Storm/assets/sprite-f073391d.svg",C="basket",at=document.querySelector(".product-list"),ct=i(C)??[];async function nt(e){const s=i(C)??[],t=e.target.closest(".btn-basket");if(!t)return;const a=e.target.closest(".resp-item").dataset.id,o=i("main products").filter(({_id:n})=>a===n)[0];ot(t,a,s),A(C,o,s)}function ot(e,s,t){const a=`<svg class="svg-checkmark" width="18" height="18">
            <use class="href-icon" href="${l}#icon-checkmark"></use>
          </svg>`,c=`<svg class="svg-basket" width="18" height="18">
            <use class="href-icon" href="${l}#icon-basket"></use>
          </svg>`,o=t.some(({_id:n})=>n===s);e.innerHTML=o?c:a}J(ct);at.addEventListener("click",nt);const rt=document.querySelector(".product-list"),it="main products",lt=i("basket")??[];function B(e){g(it,e);const s=e.map(t=>{const a=dt(t.category),c=ut(t.price),o=lt.some(({_id:n})=>n===t._id);return`<li class="resp-item" data-id="${t._id}">
      ${t.is10PercentOff?`<svg class="svg-discount" width="60" height="60">
          <use href="${l}#icon-discount-mark"></use>
        </svg>
          `:""}
        <div class="img" >
          <img class="photo" src="${t.img}" alt="${t.name}" width="140" height="140" loading="lazy"/>
        </div>
        <h4 class="name-product">${t.name}</h4>
        <div class="descr-product">
          <p class="category-product"><span class="style-word">Category:</span>${a}</p>
          <p class="size-product"><span class="style-word">Size:</span>${t.size}</p>
          <p class="popular-product"><span class="style-word">Popularity:</span>${t.popularity}</p>
        </div>
        <div class="footer-product_card">
          <p class="price-product">$${c}</p>
          <button type="button" class="btn-basket">
          ${o?`<svg class="svg-checkmark" width="18" height="18">
            <use class="href-icon" href="${l}#icon-checkmark"></use>
          </svg>`:`<svg class="svg-basket" width="18" height="18">
            <use class="href-icon" href="${l}#icon-basket"></use>
          </svg>`}
          </button>
        </div>
      </li>`}).join("");rt.innerHTML=s}function dt(e){return e.replace(/_/g," ")}function ut(e){return Number.isInteger(e)?`${e}.00`:e.toFixed(2)}const pt="params of search",F=document.querySelector(".pagination"),gt=document.querySelector(".pagination-btn-wrap"),mt=document.querySelector(".info-query"),ft=document.querySelector(".product-list"),H=document.querySelector('[data-page="prev-page"]'),j=document.querySelector('[data-page="next-page"]');let d,m=1,z=1;function T(e,s=1){let t="",a=s,c=s,o=window.innerWidth;d=e,j.classList.remove("disabled"),H.classList.remove("disabled"),o>=768?(a-=1,c+=1,s>2&&(t+='<button type="button" class="number pagination-item" data-page="1">1</button>',s>3&&(t+='<span class="dots">...</span>'))):s>2&&(t+='<button type="button" class="number pagination-item" data-page="1">1</button>',t+='<span class="dots">...</span>'),s===d?(a=a-1,j.classList.add("disabled")):s===d-1&&(a=a-1),s===1?(c=c+1,H.classList.add("disabled")):s==2&&(c=c+1);for(let n=a;n<=c;n+=1)n>d||n<0||(n===0&&(n+=1),t+=`<button type="button" class="number pagination-item ${s===n?"active-page":""}" data-page="${n}">${n}</button>`);return o>=768?s<d-1&&(s<d-2&&(t+='<span class="dots"><span>...</span></span>'),t+=`<button type="button" class="number pagination-item" data-page="${d}">${d}</button>`):s<d-1&&(t+='<span class="dots"><span>...</span></span>',t+=`<button type="button" class="number pagination-item" data-page="${d}">${d}</button>`),gt.innerHTML=t,t}function ht(e){const s=e.target.closest("button");if(!s)return;const t=s.dataset.page;t==="next-page"?m+=1:t==="prev-page"?m-=1:m=Number(t),z!==m&&(yt(m),T(d,m),z=m)}async function yt(e){const t={...i(pt),page:e};try{b();const{results:a}=await v(t);B(a)}catch{mt.classList.remove("visually-hidden"),F.classList.add("visually-hidden"),ft.innerHTML="",L()}finally{$()}}F.addEventListener("click",ht);const kt={popularList:document.querySelector(".popular-list")},bt=i("basket")??[];function vt(e){const s=e.map(({name:t,img:a,category:c,size:o,popularity:n,_id:r})=>{const h=bt.some(S=>S._id===r);return`<li class="popular-item" data-id="${r}">
                    <div class="wrapper-img">
                        <img
                            src="${a}"
                            alt="${t}"
                        />
                    </div>
                    <div class="popular-product-info">
                    <div class="popular-info-top">
                        <h4 class="product-name">${t}</h4>
                        <button type="button" class="btn-light-basket">
                        ${h?`<svg class="light-checkmark" width="12" height="12">
                                  <use class="href-icon" href="${l}#icon-checkmark"></use>
                               </svg>`:`<svg class="light-basket" width="12" height="12">
                                 <use href="${l}#icon-basket"></use>
                              </svg>`}
                        </button>
                        </div>
                        <p class="product-category">Category: <span>${c.replace("_"," ")}</span></p>
                        <div class="product-text">
                            <p>Size: <span>${o}</span></p>
                            <p>Popularity: <span>${n}</span></p>
                        </div>
                    </div>
                </li>`});kt.popularList.insertAdjacentHTML("beforeend",s.join(""))}const Lt=5;Q(Lt).then(e=>{vt(e),g("popular products",e)});const $t={popularList:document.querySelector(".popular-list")};$t.popularList.addEventListener("click",wt);async function wt(e){const s="basket",t=i(s)??[],a=e.target.closest(".btn-light-basket");if(!a)return;const c=e.target.closest(".popular-item").dataset.id,n=i("popular products").filter(({_id:r})=>c===r)[0];A(s,n,t),Pt(a,c,t)}function Pt(e,s,t){const a=`<svg class="light-checkmark" width="12" height="12">
            <use class="href-icon" href="${l}#icon-checkmark"></use>
          </svg>`,c=`<svg class="light-basket" width="12" height="12">
            <use class="href-icon" href="${l}#icon-basket"></use>
          </svg>`,o=t.some(({_id:n})=>n===s);e.innerHTML=o?a:c}const St={discountList:document.querySelector(".discount-list")},Ct=i("basket")??[];function qt(e){const s=e.map(({name:t,img:a,_id:c,price:o})=>{const n=Ct.some(r=>r._id===c);return`<li class="discount-item" data-id="${c}">
        <svg class="svg-discount" width="60" height="60">
          <use href="${l}#icon-discount-mark"></use>
        </svg>
        <div class="wrap-img">
          <img
            src="${a}"
            alt="${t}"
          />
        </div>
        <div class="discount-product-info">
          <h4 class="product-name">${t}</h4>
          <p class="product-price">$${o}</p>
          <button type="button" class="btn-basket">
          ${n?`<svg class="svg-checkmark" width="18" height="18">
              <use class="href-icon" href="${l}#icon-checkmark"></use>
            </svg>`:`<svg class="svg-basket" width="18" height="18">
              <use class="href-icon" href="${l}#icon-basket"></use>
            </svg>`}
          </button>
        </div>
      </li>`});St.discountList.insertAdjacentHTML("beforeend",s.join(""))}X().then(e=>{qt(e),g("discount products",e)});const Et={discountList:document.querySelector(".discount-list")};Et.discountList.addEventListener("click",At);async function At(e){const s="basket",t=i(s)??[],a=e.target.closest(".btn-basket");if(!a)return;const c=e.target.closest(".discount-item").dataset.id,n=i("discount products").filter(({_id:r})=>c===r)[0];Mt(a,c,t),A(s,n,t)}function Mt(e,s,t){const a=`<svg class="svg-checkmark" width="18" height="18">
            <use class="href-icon" href="${l}#icon-checkmark"></use>
          </svg>`,c=`<svg class="svg-basket" width="18" height="18">
            <use class="href-icon" href="${l}#icon-basket"></use>
          </svg>`,o=t.some(({_id:n})=>n===s);e.innerHTML=o?c:a}const D=document.querySelector(".pagination"),Bt=document.querySelector(".pagination-btn-wrap"),p="params of search";let u=i(p);async function Tt(e){if(!e.target.classList.contains("category-type"))return;const s=e.target.dataset.category,t=i(p);if(s!=="show-all"?u={...t,category:s}:u={...t,category:null},!!M(t,u))try{b();const{results:c,totalPages:o}=await v(u);I(c,o),g(p,u)}catch{f(),L()}finally{$()}}function It(e){const t={...i(p),keyword:e.target.value};g(p,t)}async function Ot(e){e.preventDefault();const s=i(p),t=M(s,u);if(u=s,!!t)try{b();const{results:a,totalPages:c}=await v(u);I(a,c)}catch{f(),L()}finally{$()}}function _t(e){let s,t;switch(e.target.dataset.filterparam){case"byAtoZ":s="byABC",t=!0;break;case"byZtoA":s="byABC",t=!1;break;case"byCheaperfirst":s="byPrice",t=!0;break;case"byExpensivefirst":s="byPrice",t=!1;break;case"byPopular":s="byPopularity",t=!1;break;case"byNotpopular":s="byPopularity",t=!0;break;default:s="byABC",t=!0;break}xt(e,s,t)}async function xt(e,s,t){if(!e.target.classList.contains("filter-type"))return;const a=i(p),{[Object.keys(a).pop()]:c,...o}=a;if(u={...o,[s]:t},!!M(a,u))try{b();const{results:r,totalPages:h}=await v(u);I(r,h),g(p,u)}catch{f(),L()}finally{$()}}function Ht(e){const s=document.querySelector(".param-name");let t;const a=Object.entries(e),[c,o]=a[a.length-1];switch(c){case"byABC":o?t="A to Z":t="Z to A";break;case"byPrice":o?t="Cheaper first":t="Expensive first";break;case"byPopularity":o?t="Not popular":t="Popular";break;default:t="A to Z";break}s.textContent=t}function I(e,s){s>1?(Bt.innerHTML=T(s),D.classList.remove("visually-hidden")):D.classList.add("visually-hidden"),e.length?(O.classList.add("visually-hidden"),B(e)):f()}const y=document.querySelector(".category-list"),k=document.querySelector(".filters-all-param-list"),K=document.querySelector(".select-filter"),R=document.querySelector(".select-param"),q=document.querySelector(".category-name"),jt=document.querySelector(".param-name");K.addEventListener("click",()=>W(y));R.addEventListener("click",()=>W(k));y.addEventListener("click",e=>G(e,y,q));k.addEventListener("click",e=>G(e,k,jt));document.addEventListener("click",zt);function W(e){e.classList.toggle("filter-hidden")}function G(e,s,t){const a=e.target;(a.classList.contains("category-type")||a.classList.contains("filter-type"))&&(t.textContent=a.textContent,s.classList.add("filter-hidden"))}function zt(e){const s=K.contains(e.target),t=R.contains(e.target);!s&&!y.classList.contains("filter-hidden")&&y.classList.add("filter-hidden"),!t&&!k.classList.contains("filter-hidden")&&k.classList.add("filter-hidden")}const N=document.querySelector(".category-list"),Dt=document.querySelector(".filters-all-param-list"),Ft=document.querySelector(".form"),Y=document.querySelector(".keyword"),O=document.querySelector(".info-query"),Kt=document.querySelector(".product-list"),E=document.querySelector(".pagination"),Rt=document.querySelector(".pagination-btn-wrap"),w="params of search",Wt={keyword:null,category:null,page:1,limit:U(),byABC:!0};i(w)??g(w,Wt);async function Gt(){const s=(await tt()).map(t=>`<li data-category="${t}" class="category-type">${Z(t)}</li>`).join("");N.insertAdjacentHTML("afterbegin",s)}function Z(e){return e.replaceAll("_"," ")}function U(){const e=window.innerWidth;let s=0;return e<768?s=6:e>=768&&e<1440?s=8:s=9,s}async function Nt(){b();try{const e=i(w),s={...e,keyword:e.keyword||null,limit:U(),page:1};g(w,s);const{results:t,totalPages:a}=await v(s);Y.value=s.keyword,a>1?(Rt.innerHTML=T(a),E.classList.remove("visually-hidden")):E.classList.add("visually-hidden"),t.length?(O.classList.add("visually-hidden"),B(t)):f(),s.category!==null?q.textContent=Z(s.category):q.textContent="Categories",Ht(s)}catch(e){f(),L(),console.log(e)}finally{$()}}function f(){Kt.innerHTML="",E.classList.add("visually-hidden"),O.classList.remove("visually-hidden")}Ft.addEventListener("submit",Ot);Dt.addEventListener("click",_t);N.addEventListener("click",Tt);Y.addEventListener("input",It);document.addEventListener("DOMContentLoaded",Gt);document.addEventListener("DOMContentLoaded",Nt);const Yt=document.querySelector(".clouse_modal"),V=document.querySelector(".modal-backdrop-product"),Zt=document.querySelector(".modal-product"),Ut=document.querySelector(".modal-product-inWindow"),Vt=document.querySelector(".product-list"),Jt=document.querySelector(".popular-section"),Qt=document.querySelector(".discount-section");Yt.addEventListener("click",function(){P(),_()});window.onclick=function(e){e.target==V&&(P(),_())};document.addEventListener("keydown",function(e){e.target.closest(".modal_window-item"),e.key==="Escape"&&document.body.style.overflow=="hidden"&&(P(),_())});function P(){V.classList.toggle("is-hidden")}function _(){document.body.style.overflow=""}async function x(e){let s;const t=e.target.closest(".resp-item");if(t&&(s=t.dataset.id),e.target.closest(".btn-basket")||e.target.closest(".btn-light-basket"))return;const o=e.target.closest(".popular-item");o&&(s=o.dataset.id);const n=e.target.closest(".discount-item");if(n&&(s=n.dataset.id),!t&&!o&&!n)return;const r=await et(s),h=st(r.category),S=`<div class ="TestDiv1"><div class="img_modal2" >
    <img class="photo" src="${r.img}" alt="${r.name}" loading="lazy"/>
    </div>
    <div class="testDiv">
    <h2 class="name-product2">${r.name}</h2>
    <div class="descr-product2">
    <p class="category-product"><span class="style-word">Category:</span>${h}</p>
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
    <use class="href-icon" href="${l}#icon-basket"></use>
  </svg></button></div>`;Ut.innerHTML=S,Zt.style.display="block",document.body.style.overflow="hidden",P()}Vt.addEventListener("click",x);Jt.addEventListener("click",x);Qt.addEventListener("click",x);
//# sourceMappingURL=commonHelpers2.js.map
