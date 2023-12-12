import{l as i,c as nt,u as w,d as C,a as g,s as p,e as v,g as L,f as $,h as P,i as ot,j as ct,k as _,m as at,n as rt,o as it}from"./assets/modal-subscription-18dd979e.js";import"./assets/vendor-a81688c2.js";const A="basket",lt=document.querySelector(".product-list"),dt=i(A)??[];async function ut(t){const s=i(A)??[];if(!t.target.closest(".btn-basket"))return;const n=t.target.closest(".resp-item").dataset.id,c=i("main products").filter(({_id:r})=>n===r)[0],a=document.querySelectorAll(`[data-button-id="${n}"]`);w(A,c,s),C([...a],n,s)}nt(dt);lt.addEventListener("click",ut);const pt=document.querySelector(".product-list"),mt="main products",gt=i("basket")??[];function x(t){g(mt,t);const s=t.map(e=>{const n=yt(e.category),o=ft(e.price),c=gt.some(({_id:a})=>a===e._id);return`<li class="resp-item" data-id="${e._id}">
      ${e.is10PercentOff?`<svg class="svg-discount" width="60" height="60">
          <use href="${p}#icon-discount-mark"></use>
        </svg>
          `:""}
        <div class="img" >
          <img class="photo" src="${e.img}" alt="${e.name}" width="140" height="140" loading="lazy"/>
        </div>
        <h4 class="name-product">${e.name}</h4>
        <div class="descr-product">
          <p class="category-product"><span class="style-word">Category:</span>${n}</p>
          <p class="size-product"><span class="style-word">Size:</span>${e.size}</p>
          <p class="popular-product"><span class="style-word">Popularity:</span>${e.popularity}</p>
        </div>
        <div class="footer-product_card">
          <p class="price-product">$${o}</p>
          <button type="button" class="btn-basket main-products-btn" data-button-id="${e._id}">
          ${c?`<svg class="svg-checkmark" width="18" height="18">
            <use class="href-icon" href="${p}#icon-checkmark"></use>
          </svg>`:`<svg class="svg-basket" width="18" height="18">
            <use class="href-icon" href="${p}#icon-basket"></use>
          </svg>`}
          </button>
        </div>
      </li>`}).join("");pt.innerHTML=s}function yt(t){return t.replace(/_/g," ")}function ft(t){return Number.isInteger(t)?`${t}.00`:t.toFixed(2)}const ht="params of search",W=document.querySelector(".pagination"),bt=document.querySelector(".pagination-btn-wrap"),kt=document.querySelector(".info-query"),vt=document.querySelector(".product-list"),K=document.querySelector('[data-page="prev-page"]'),D=document.querySelector('[data-page="next-page"]');let l,y=1,F=1;function I(t,s=1){let e="",n=s,o=s,c=window.innerWidth;l=t,D.classList.remove("disabled"),K.classList.remove("disabled"),c>=768?(n-=1,o+=1,s>2&&(e+='<button type="button" class="number pagination-item" data-page="1">1</button>',s>3&&(e+='<span class="dots">...</span>'))):s>2&&(e+='<button type="button" class="number pagination-item" data-page="1">1</button>',e+='<span class="dots">...</span>'),s===l?(n=n-1,D.classList.add("disabled")):s===l-1&&(n=n-1),s===1?(o=o+1,K.classList.add("disabled")):s==2&&(o=o+1);for(let a=n;a<=o;a+=1)a>l||a<0||(a===0&&(a+=1),e+=`<button type="button" class="number pagination-item ${s===a?"active-page":""}" data-page="${a}">${a}</button>`);return c>=768?s<l-1&&(s<l-2&&(e+='<span class="dots"><span>...</span></span>'),e+=`<button type="button" class="number pagination-item" data-page="${l}">${l}</button>`):s<l-1&&(e+='<span class="dots"><span>...</span></span>',e+=`<button type="button" class="number pagination-item" data-page="${l}">${l}</button>`),bt.innerHTML=e,e}function Lt(t){const s=t.target.closest("button");if(!s)return;const e=s.dataset.page;e==="next-page"?y+=1:e==="prev-page"?y-=1:y=Number(e),F!==y&&($t(y),I(l,y),F=y)}async function $t(t){const e={...i(ht),page:t};try{v();const{results:n}=await L(e);x(n)}catch{kt.classList.remove("visually-hidden"),W.classList.add("visually-hidden"),vt.innerHTML="",$()}finally{P()}}W.addEventListener("click",Lt);const Pt={popularList:document.querySelector(".popular-list")},St=i("basket")??[];function wt(t){const s=t.map(({name:e,img:n,category:o,size:c,popularity:a,_id:r})=>{const u=St.some(E=>E._id===r);return`<li class="popular-item" data-id="${r}">
                    <div class="wrapper-img">
                        <img
                            src="${n}"
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
                        <p class="product-category">Category: <span>${o.replace("_"," ")}</span></p>
                        <div class="product-text">
                            <p>Size: <span>${c}</span></p>
                            <p>Popularity: <span>${a}</span></p>
                        </div>
                    </div>
                </li>`});Pt.popularList.insertAdjacentHTML("beforeend",s.join(""))}const Ct=5;ot(Ct).then(t=>{wt(t),g("popular products",t)}).catch(t=>console.log(t));const qt={popularList:document.querySelector(".popular-list")};async function Et(t){const s="basket",e=i(s)??[];if(!t.target.closest(".btn-light-basket"))return;const o=t.target.closest(".popular-item").dataset.id,a=i("popular products").filter(({_id:u})=>o===u)[0],r=document.querySelectorAll(`[data-button-id="${o}"]`);w(s,a,e),C([...r],o,e)}qt.popularList.addEventListener("click",Et);const At={discountList:document.querySelector(".discount-list")},Bt=i("basket")??[];function Mt(t){const s=t.map(({name:e,img:n,_id:o,price:c})=>{const a=Bt.some(r=>r._id===o);return`<li class="discount-item" data-id="${o}">
        <svg class="svg-discount" width="60" height="60">
          <use href="${p}#icon-discount-mark"></use>
        </svg>
        <div class="wrap-img">
          <img
            src="${n}"
            alt="${e}"
          />
        </div>
        <div class="discount-product-info">
          <h4 class="product-name">${e}</h4>
          <p class="product-price">$${c}</p>
          <button type="button" class="btn-basket discount-products-btn" data-button-id="${o}">
          ${a?`<svg class="svg-checkmark" width="18" height="18">
              <use class="href-icon" href="${p}#icon-checkmark"></use>
            </svg>`:`<svg class="svg-basket" width="18" height="18">
              <use class="href-icon" href="${p}#icon-basket"></use>
            </svg>`}
          </button>
        </div>
      </li>`});At.discountList.insertAdjacentHTML("beforeend",s.join(""))}ct().then(t=>{Mt(t),g("discount products",t)});const Ot={discountList:document.querySelector(".discount-list")};Ot.discountList.addEventListener("click",Tt);async function Tt(t){const s="basket",e=i(s)??[];if(!t.target.closest(".btn-basket"))return;const o=t.target.closest(".discount-item").dataset.id,a=i("discount products").filter(({_id:u})=>o===u)[0],r=document.querySelectorAll(`[data-button-id="${o}"]`);w(s,a,e),C([...r],o,e)}const G=document.querySelector(".pagination"),_t=document.querySelector(".pagination-btn-wrap"),m="params of search";let d=i(m);async function xt(t){if(!t.target.classList.contains("category-type"))return;const s=t.target.dataset.category,e=i(m);if(s!=="show-all"?d={...e,category:s}:d={...e,category:null},!!_(e,d))try{v();const{results:o,totalPages:c}=await L(d);R(o,c),g(m,d)}catch{h(),$()}finally{P()}}function It(t){const e={...i(m),keyword:t.target.value};g(m,e)}async function Rt(t){t.preventDefault();const s=i(m),e=_(s,d);if(d=s,!!e)try{v();const{results:n,totalPages:o}=await L(d);R(n,o)}catch{h(),$()}finally{P()}}function jt(t){let s,e;switch(t.target.dataset.filterparam){case"byAtoZ":s="byABC",e=!0;break;case"byZtoA":s="byABC",e=!1;break;case"byCheaperfirst":s="byPrice",e=!0;break;case"byExpensivefirst":s="byPrice",e=!1;break;case"byPopular":s="byPopularity",e=!1;break;case"byNotpopular":s="byPopularity",e=!0;break;default:s="byABC",e=!0;break}zt(t,s,e)}async function zt(t,s,e){if(!t.target.classList.contains("filter-type"))return;const n=i(m),{[Object.keys(n).pop()]:o,...c}=n;if(d={...c,[s]:e},!!_(n,d))try{v();const{results:r,totalPages:u}=await L(d);R(r,u),g(m,d)}catch{h(),$()}finally{P()}}function Ht(t){const s=document.querySelector(".param-name");let e;const n=Object.entries(t),[o,c]=n[n.length-1];switch(o){case"byABC":c?e="A to Z":e="Z to A";break;case"byPrice":c?e="Cheaper first":e="Expensive first";break;case"byPopularity":c?e="Not popular":e="Popular";break;default:e="A to Z";break}s.textContent=e}function R(t,s){s>1?(_t.innerHTML=I(s),G.classList.remove("visually-hidden")):G.classList.add("visually-hidden"),t.length?(j.classList.add("visually-hidden"),x(t)):h()}const b=document.querySelector(".category-list"),k=document.querySelector(".filters-all-param-list"),Y=document.querySelector(".select-filter"),N=document.querySelector(".select-param"),B=document.querySelector(".category-name"),Kt=document.querySelector(".param-name");Y.addEventListener("click",()=>Z(b));N.addEventListener("click",()=>Z(k));b.addEventListener("click",t=>U(t,b,B));k.addEventListener("click",t=>U(t,k,Kt));document.addEventListener("click",Dt);function Z(t){t.classList.toggle("filter-hidden")}function U(t,s,e){const n=t.target;(n.classList.contains("category-type")||n.classList.contains("filter-type"))&&(e.textContent=n.textContent,s.classList.add("filter-hidden"))}function Dt(t){const s=Y.contains(t.target),e=N.contains(t.target);!s&&!b.classList.contains("filter-hidden")&&b.classList.add("filter-hidden"),!e&&!k.classList.contains("filter-hidden")&&k.classList.add("filter-hidden")}const V=document.querySelector(".category-list"),Ft=document.querySelector(".filters-all-param-list"),Gt=document.querySelector(".form"),J=document.querySelector(".keyword"),j=document.querySelector(".info-query"),Wt=document.querySelector(".product-list"),M=document.querySelector(".pagination"),Yt=document.querySelector(".pagination-btn-wrap"),S="params of search",Nt={keyword:null,category:null,page:1,limit:X(),byABC:!0};i(S)??g(S,Nt);async function Zt(){const s=(await at()).map(e=>`<li data-category="${e}" class="category-type">${Q(e)}</li>`).join("");V.insertAdjacentHTML("afterbegin",s)}function Q(t){return t.replaceAll("_"," ")}function X(){const t=window.innerWidth;let s=0;return t<768?s=6:t>=768&&t<1440?s=8:s=9,s}async function Ut(){v();try{const t=i(S),s={...t,keyword:t.keyword||null,limit:X(),page:1};g(S,s);const{results:e,totalPages:n}=await L(s);J.value=s.keyword,n>1?(Yt.innerHTML=I(n),M.classList.remove("visually-hidden")):M.classList.add("visually-hidden"),e.length?(j.classList.add("visually-hidden"),x(e)):h(),s.category!==null?B.textContent=Q(s.category):B.textContent="Categories",Ht(s)}catch(t){h(),$(),console.log(t)}finally{P()}}function h(){Wt.innerHTML="",M.classList.add("visually-hidden"),j.classList.remove("visually-hidden")}Gt.addEventListener("submit",Rt);Ft.addEventListener("click",jt);V.addEventListener("click",xt);J.addEventListener("input",It);document.addEventListener("DOMContentLoaded",Zt);document.addEventListener("DOMContentLoaded",Ut);const Vt=document.querySelector(".clouse_modal"),O=document.querySelector(".modal-backdrop-product"),Jt=document.querySelector(".modal-product"),Qt=document.querySelector(".modal-product-inWindow"),Xt=document.querySelector(".product-list"),te=document.querySelector(".popular-section"),ee=document.querySelector(".discount-section"),tt="basket";let T,f;const et=()=>oe(f,T);function se(){document.querySelector(".modal-button").removeEventListener("click",et),q(),z()}Vt.addEventListener("click",function(){q(),z()});O.addEventListener("click",t=>{t.target==O&&se()});document.addEventListener("keydown",function(t){t.target.closest(".modal_window-item"),t.key==="Escape"&&document.body.style.overflow==="hidden"&&(q(),z())});function q(){O.classList.toggle("is-hidden")}function z(){document.body.style.overflow=""}async function H(t){T=i(tt)??[];const s=t.target.closest(".resp-item");if(s&&(f=s.dataset.id),t.target.closest(".btn-basket")||t.target.closest(".btn-light-basket"))return;const o=t.target.closest(".popular-item");o&&(f=o.dataset.id);const c=t.target.closest(".discount-item");if(c&&(f=c.dataset.id),!s&&!o&&!c)return;const a=T.find(st=>st._id==f),r=await rt(f),u=it(r.category),E=`<div class ="TestDiv1"><div class="img_modal2" >
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
    <button type="button" class="modal-button"><span class ="textInButton">${a?"Remove from":"Add to"}</span><svg class="svg-basket2" width="18" height="18">
    <use class="href-icon" href="${p}#icon-basket"></use>
  </svg></button></div>`;Qt.innerHTML=E,Jt.style.display="block",document.body.style.overflow="hidden",q(),document.querySelector(".modal-button").addEventListener("click",et)}function ne(t){const s=i("main products"),e=i("popular products"),n=i("discount products");return[...s,...e,...n].find(a=>a._id===t)}function oe(t,s){const e=ne(t),n=document.querySelectorAll(`[data-button-id="${t}"]`);w(tt,e,s),C([...n],t,s);const o=s.find(a=>a._id===t),c=document.querySelector(".textInButton");o?c.textContent="Remove from":c.textContent="Add to"}Xt.addEventListener("click",H);te.addEventListener("click",H);ee.addEventListener("click",H);
//# sourceMappingURL=commonHelpers2.js.map
