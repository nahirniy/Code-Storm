import{l as i,c as nt,u as w,e as C,a as g,s as p,f as v,g as L,d as $,h as P,i as ct,j as rt,k as _,m as it,n as lt,o as dt}from"./assets/scroll-up-9876d6b8.js";import"./assets/vendor-9038a9ee.js";const A="basket",ut=document.querySelector(".product-list"),pt=i(A)??[];async function mt(t){const e=i(A)??[];if(!t.target.closest(".btn-basket"))return;const a=t.target.closest(".resp-item").dataset.id,c=i("main products").filter(({_id:r})=>a===r)[0],n=document.querySelectorAll(`[data-button-id="${a}"]`);w(A,c,e),C([...n],a,e)}nt(pt);ut.addEventListener("click",mt);const gt=document.querySelector(".product-list"),yt="main products";function x(t){g(yt,t);const e=i("basket")??[],s=t.map(a=>{const o=ft(a.category),c=bt(a.price),n=e.find(({_id:r})=>r===a._id);return`<li class="resp-item" data-id="${a._id}">
      ${a.is10PercentOff?`<svg class="svg-discount animation-icon" width="60" height="60">
          <use href="${p}#icon-discount-mark"></use>
        </svg>
          `:""}
        <div class="img" >
          <img class="photo" src="${a.img}" alt="${a.name}" width="140" height="140" loading="lazy"/>
        </div>
        <h4 class="name-product">${a.name}</h4>
        <div class="descr-product">
          <p class="category-product"><span class="style-word">Category:</span>${o}</p>
          <p class="size-product"><span class="style-word">Size:</span>${a.size}</p>
          <p class="popular-product"><span class="style-word">Popularity:</span>${a.popularity}</p>
        </div>
        <div class="footer-product_card">
          <p class="price-product">$${c}</p>
          <button 
            type="button" 
            class="btn-basket main-products-btn" 
            data-button-id="${a._id}"
            aria-label="Add or remove product from basket"  
          >
          ${n?`<svg class="svg-checkmark" width="18" height="18">
            <use class="href-icon" href="${p}#icon-checkmark"></use>
          </svg>`:`<svg class="svg-basket" width="18" height="18">
            <use class="href-icon" href="${p}#icon-basket"></use>
          </svg>`}
          </button>
        </div>
      </li>`}).join("");gt.innerHTML=s}function ft(t){return t.replace(/_/g," ")}function bt(t){return Number.isInteger(t)?`${t}.00`:t.toFixed(2)}const ht="params of search",W=document.querySelector(".pagination"),kt=document.querySelector(".pagination-btn-wrap"),vt=document.querySelector(".info-query"),Lt=document.querySelector(".product-list"),F=document.querySelector('[data-page="prev-page"]'),H=document.querySelector('[data-page="next-page"]');let l,y=1,K=1;function I(t,e=1){let s="",a=e,o=e,c=window.innerWidth;l=t,H.classList.remove("disabled"),F.classList.remove("disabled"),c>=768?(a-=1,o+=1,e>2&&(s+=`<button 
        type="button"
        class="number pagination-item"
        data-page="1"
        aria-label="This is 1 page">
        1
      </button>`,e>3&&(s+='<span class="dots">...</span>'))):e>2&&(s+=`<button 
        type="button"
        class="number pagination-item"
        data-page="1"
        aria-label="This is 1 page">
        1
      </button>`,s+='<span class="dots">...</span>'),e===l?(a=a-1,H.classList.add("disabled")):e===l-1&&(a=a-1),e===1?(o=o+1,F.classList.add("disabled")):e==2&&(o=o+1);for(let n=a;n<=o;n+=1)n>l||n<0||(n===0&&(n+=1),s+=`<button 
      type="button" 
      class="number pagination-item ${e===n?"active-page":""}"
      data-page="${n}"
      aria-label="This is ${n} page"
      >${n}
    </button>`);return c>=768?e<l-1&&(e<l-2&&(s+='<span class="dots"><span>...</span></span>'),s+=`<button 
      type="button"
        class="number pagination-item"
        data-page="${l}" 
        aria-label="This is ${l} page">
        ${l}
      </button>`):e<l-1&&(s+='<span class="dots"><span>...</span></span>',s+=`<button 
      type="button"
      class="number pagination-item"
      data-page="${l}">
      ${l}
    </button>`),kt.innerHTML=s,s}function $t(t){const e=t.target.closest("button");if(!e)return;const s=e.dataset.page;s==="next-page"?y+=1:s==="prev-page"?y-=1:y=Number(s),K!==y&&(Pt(y),I(l,y),K=y)}async function Pt(t){const s={...i(ht),page:t};try{v();const{results:a}=await L(s);x(a)}catch{vt.classList.remove("visually-hidden"),W.classList.add("visually-hidden"),Lt.innerHTML="",$()}finally{P()}}W.addEventListener("click",$t);const St={popularList:document.querySelector(".popular-list")},wt=i("basket")??[];function Ct(t){const e=t.map(({name:s,img:a,category:o,size:c,popularity:n,_id:r})=>{const u=wt.some(q=>q._id===r);return`<li class="popular-item" data-id="${r}">
                    <div class="wrapper-img">
                        <img
                            src="${a}"
                            alt="${s}"
                            width="56"
                            height="56" 
                            loading="lazy"
                        />
                    </div>
                    <div class="popular-product-info">
                    <div class="popular-info-top">
                        <h4 class="product-name">${s}</h4>
                        <button type="button" 
                          class="btn-light-basket popular-products-btn"
                          data-button-id="${r}"
                          aria-label="Add or remove product from basket">
                        ${u?`<svg class="light-checkmark" width="12" height="12">
                                  <use class="href-icon" href="${p}#icon-checkmark"></use>
                               </svg>`:`<svg class="light-basket" width="12" height="12">
                                 <use href="${p}#icon-basket"></use>
                              </svg>`}
                        </button>
                        </div>
                        <p class="product-category">Category: <span>${o.replace("_"," ")}</span></p>
                        <div class="product-text">
                            <p>Size: <span>${c}</span></p>
                            <p>Popularity: <span>${n}</span></p>
                        </div>
                    </div>
                </li>`});St.popularList.insertAdjacentHTML("beforeend",e.join(""))}const qt=5;ct(qt).then(t=>{Ct(t),g("popular products",t)}).catch(t=>console.log(t));const At={popularList:document.querySelector(".popular-list")};async function Et(t){const e="basket",s=i(e)??[];if(!t.target.closest(".btn-light-basket"))return;const o=t.target.closest(".popular-item").dataset.id,n=i("popular products").filter(({_id:u})=>o===u)[0],r=document.querySelectorAll(`[data-button-id="${o}"]`);w(e,n,s),C([...r],o,s)}At.popularList.addEventListener("click",Et);const Bt={discountList:document.querySelector(".discount-list")},Tt=i("basket")??[];function Mt(t){const e=t.map(({name:s,img:a,_id:o,price:c})=>{const n=Tt.some(r=>r._id===o);return`<li class="discount-item" data-id="${o}">
        <svg class="svg-discount animation-icon" width="60" height="60">
          <use href="${p}#icon-discount-mark"></use>
        </svg>
        <div class="wrap-img">
          <img
            src="${a}"
            alt="${s}"
            loading="lazy"
          />
        </div>
        <div class="discount-product-info">
          <h4 class="product-name">${s}</h4>
          <p class="product-price">$${c}</p>
          <button type="button"
            class="btn-basket discount-products-btn"
            data-button-id="${o}" 
            aria-label="Add or remove product from basket">
          ${n?`<svg class="svg-checkmark" width="18" height="18">
              <use class="href-icon" href="${p}#icon-checkmark"></use>
            </svg>`:`<svg class="svg-basket" width="18" height="18">
              <use class="href-icon" href="${p}#icon-basket"></use>
            </svg>`}
          </button>
        </div>
      </li>`});Bt.discountList.insertAdjacentHTML("beforeend",e.join(""))}rt().then(t=>{Mt(t),g("discount products",t)});const Ot={discountList:document.querySelector(".discount-list")};Ot.discountList.addEventListener("click",_t);async function _t(t){const e="basket",s=i(e)??[];if(!t.target.closest(".btn-basket"))return;const o=t.target.closest(".discount-item").dataset.id,n=i("discount products").filter(({_id:u})=>o===u)[0],r=document.querySelectorAll(`[data-button-id="${o}"]`);w(e,n,s),C([...r],o,s)}const G=document.querySelector(".pagination"),xt=document.querySelector(".pagination-btn-wrap"),m="params of search";let d=i(m);async function It(t){if(!t.target.classList.contains("category-type"))return;const e=t.target.dataset.category,s=i(m);if(e!=="show-all"?d={...s,category:e}:d={...s,category:null},!!_(s,d))try{v();const{results:o,totalPages:c}=await L(d);z(o,c),g(m,d)}catch{b(),$()}finally{P()}}function zt(t){const s={...i(m),keyword:t.target.value};g(m,s)}async function Rt(t){t.preventDefault();const e=i(m),s=_(e,d);if(d=e,!!s)try{v();const{results:a,totalPages:o}=await L(d);z(a,o)}catch{b(),$()}finally{P()}}function jt(t){let e,s;switch(t.target.dataset.filterparam){case"byAtoZ":e="byABC",s=!0;break;case"byZtoA":e="byABC",s=!1;break;case"byCheaperfirst":e="byPrice",s=!0;break;case"byExpensivefirst":e="byPrice",s=!1;break;case"byPopular":e="byPopularity",s=!1;break;case"byNotpopular":e="byPopularity",s=!0;break;default:e="byABC",s=!0;break}Dt(t,e,s)}async function Dt(t,e,s){if(!t.target.classList.contains("filter-type"))return;const a=i(m),{[Object.keys(a).pop()]:o,...c}=a;if(d={...c,[e]:s},!!_(a,d))try{v();const{results:r,totalPages:u}=await L(d);z(r,u),g(m,d)}catch{b(),$()}finally{P()}}function Ft(t){const e=document.querySelector(".param-name");let s;const a=Object.entries(t),[o,c]=a[a.length-1];switch(o){case"byABC":c?s="A to Z":s="Z to A";break;case"byPrice":c?s="Cheaper first":s="Expensive first";break;case"byPopularity":c?s="Not popular":s="Popular";break;default:s="A to Z";break}e.textContent=s}function z(t,e){e>1?(xt.innerHTML=I(e),G.classList.remove("visually-hidden")):G.classList.add("visually-hidden"),t.length?(R.classList.add("visually-hidden"),x(t)):b()}const h=document.querySelector(".category-list"),k=document.querySelector(".filters-all-param-list"),Y=document.querySelector(".select-filter"),N=document.querySelector(".select-param"),E=document.querySelector(".category-name"),Ht=document.querySelector(".param-name");Y.addEventListener("click",()=>Z(h));N.addEventListener("click",()=>Z(k));h.addEventListener("click",t=>U(t,h,E));k.addEventListener("click",t=>U(t,k,Ht));document.addEventListener("click",Kt);function Z(t){t.classList.toggle("filter-hidden")}function U(t,e,s){const a=t.target;(a.classList.contains("category-type")||a.classList.contains("filter-type"))&&(s.textContent=a.textContent,e.classList.add("filter-hidden"))}function Kt(t){const e=Y.contains(t.target),s=N.contains(t.target);!e&&!h.classList.contains("filter-hidden")&&h.classList.add("filter-hidden"),!s&&!k.classList.contains("filter-hidden")&&k.classList.add("filter-hidden")}const V=document.querySelector(".category-list"),Gt=document.querySelector(".filters-all-param-list"),Wt=document.querySelector(".form"),J=document.querySelector(".keyword"),R=document.querySelector(".info-query"),Yt=document.querySelector(".product-list"),B=document.querySelector(".pagination"),Nt=document.querySelector(".pagination-btn-wrap"),S="params of search",Zt={keyword:null,category:null,page:1,limit:X(),byABC:!0};i(S)??g(S,Zt);async function Ut(){const e=(await it()).map(s=>`<li data-category="${s}" class="category-type">${Q(s)}</li>`).join("");V.insertAdjacentHTML("afterbegin",e)}function Q(t){return t.replaceAll("_"," ")}function X(){const t=window.innerWidth;let e=0;return t<768?e=6:t>=768&&t<1440?e=8:e=9,e}async function Vt(){v();try{const t=i(S),e={...t,keyword:t.keyword||null,limit:X(),page:1};g(S,e);const{results:s,totalPages:a}=await L(e);J.value=e.keyword,a>1?(Nt.innerHTML=I(a),B.classList.remove("visually-hidden")):B.classList.add("visually-hidden"),s.length?(R.classList.add("visually-hidden"),x(s)):b(),e.category!==null?E.textContent=Q(e.category):E.textContent="Categories",Ft(e)}catch(t){b(),$(),console.log(t)}finally{P()}}function b(){Yt.innerHTML="",B.classList.add("visually-hidden"),R.classList.remove("visually-hidden")}Wt.addEventListener("submit",Rt);Gt.addEventListener("click",jt);V.addEventListener("click",It);J.addEventListener("input",zt);document.addEventListener("DOMContentLoaded",Ut);document.addEventListener("DOMContentLoaded",Vt);const Jt=document.querySelector(".clouse_modal"),T=document.querySelector(".modal-backdrop-product"),M=document.querySelector(".modal-product"),Qt=document.querySelector(".modal-product-inWindow"),Xt=document.querySelector(".product-list"),te=document.querySelector(".popular-section"),ee=document.querySelector(".discount-section"),tt="basket";let O,f;const et=()=>ae(f,O);function st(){document.querySelector(".modal-button").removeEventListener("click",et),j(),at(),M.classList.remove("visible-modal")}Jt.addEventListener("click",function(){st()});T.addEventListener("click",t=>{t.target==T&&st()});document.addEventListener("keydown",function(t){t.target.closest(".modal_window-item"),t.key==="Escape"&&document.body.style.overflow==="hidden"&&(j(),at())});function j(){T.classList.toggle("is-hidden")}function at(){document.body.style.overflow=""}async function D(t){O=i(tt)??[];const e=t.target.closest(".resp-item");if(e&&(f=e.dataset.id),t.target.closest(".btn-basket")||t.target.closest(".btn-light-basket"))return;const o=t.target.closest(".popular-item");o&&(f=o.dataset.id);const c=t.target.closest(".discount-item");if(c&&(f=c.dataset.id),!e&&!o&&!c)return;M.classList.add("visible-modal");const n=O.find(ot=>ot._id==f),r=await lt(f),u=dt(r.category),q=`<div class ="TestDiv1"><div class="img_modal2" >
    <img class="photo-modal" src="${r.img}" alt="${r.name}" width="160" height="160"  loading="lazy"/>
    </div>
    <div class="testDiv">
    <h3 class="name-product2">${r.name}</h3>
    <div class="descr-product2">
    <p class="category-product"><span class="style-word">Category:</span>${u}</p>
    <p class="size-product"><span class="style-word">Size:</span>${r.size}</p>
    <p class="popular-product"><span class="style-word">Popularity:</span>${r.popularity}</p>
    </div>
    <div class="desc-text"> <p class="textModalp">${r.desc||"Description will be added soon"}</p></div>
    </div>
    </div>
    <div class="footer-product_card2">
    <p class="price-product">$${r.price.toFixed(2)}</p></div>
    <div class = "end-modal">
    <button 
      type="button" 
      class="modal-button" 
      aria-label="Add or remove product from basket"><span
      span class ="textInButton">${n?"Remove from":"Add to"}</span><svg class="svg-basket2" width="18" height="18">
    <use class="href-icon" href="${p}#icon-basket"></use>
  </svg></button></div>`;Qt.innerHTML=q,M.style.display="block",document.body.style.overflow="hidden",j(),document.querySelector(".modal-button").addEventListener("click",et)}function se(t){const e=i("main products"),s=i("popular products"),a=i("discount products");return[...e,...s,...a].find(n=>n._id===t)}function ae(t,e){const s=se(t),a=document.querySelectorAll(`[data-button-id="${t}"]`);w(tt,s,e),C([...a],t,e);const o=e.find(n=>n._id===t),c=document.querySelector(".textInButton");o?c.textContent="Remove from":c.textContent="Add to"}Xt.addEventListener("click",D);te.addEventListener("click",D);ee.addEventListener("click",D);
//# sourceMappingURL=commonHelpers2.js.map
