import{l as i,c as ot,u as w,e as C,a as g,s as p,f as v,g as L,d as $,h as P,i as ct,j as rt,k as _,m as it,n as lt,o as dt}from"./assets/modal-subscription-27fb4c0b.js";import"./assets/vendor-a81688c2.js";const E="basket",ut=document.querySelector(".product-list"),pt=i(E)??[];async function mt(t){const e=i(E)??[];if(!t.target.closest(".btn-basket"))return;const n=t.target.closest(".resp-item").dataset.id,o=i("main products").filter(({_id:r})=>n===r)[0],c=document.querySelectorAll(`[data-button-id="${n}"]`);w(E,o,e),C([...c],n,e)}ot(pt);ut.addEventListener("click",mt);const gt=document.querySelector(".product-list"),yt="main products";function x(t){g(yt,t);const e=i("basket")??[],s=t.map(n=>{const a=ft(n.category),o=ht(n.price),c=e.find(({_id:r})=>r===n._id);return`<li class="resp-item" data-id="${n._id}">
      ${n.is10PercentOff?`<svg class="svg-discount" width="60" height="60">
          <use href="${p}#icon-discount-mark"></use>
        </svg>
          `:""}
        <div class="img" >
          <img class="photo" src="${n.img}" alt="${n.name}" width="140" height="140" loading="lazy"/>
        </div>
        <h4 class="name-product">${n.name}</h4>
        <div class="descr-product">
          <p class="category-product"><span class="style-word">Category:</span>${a}</p>
          <p class="size-product"><span class="style-word">Size:</span>${n.size}</p>
          <p class="popular-product"><span class="style-word">Popularity:</span>${n.popularity}</p>
        </div>
        <div class="footer-product_card">
          <p class="price-product">$${o}</p>
          <button type="button" class="btn-basket main-products-btn" data-button-id="${n._id}">
          ${c?`<svg class="svg-checkmark" width="18" height="18">
            <use class="href-icon" href="${p}#icon-checkmark"></use>
          </svg>`:`<svg class="svg-basket" width="18" height="18">
            <use class="href-icon" href="${p}#icon-basket"></use>
          </svg>`}
          </button>
        </div>
      </li>`}).join("");gt.innerHTML=s}function ft(t){return t.replace(/_/g," ")}function ht(t){return Number.isInteger(t)?`${t}.00`:t.toFixed(2)}const bt="params of search",W=document.querySelector(".pagination"),kt=document.querySelector(".pagination-btn-wrap"),vt=document.querySelector(".info-query"),Lt=document.querySelector(".product-list"),K=document.querySelector('[data-page="prev-page"]'),D=document.querySelector('[data-page="next-page"]');let l,y=1,F=1;function I(t,e=1){let s="",n=e,a=e,o=window.innerWidth;l=t,D.classList.remove("disabled"),K.classList.remove("disabled"),o>=768?(n-=1,a+=1,e>2&&(s+='<button type="button" class="number pagination-item" data-page="1">1</button>',e>3&&(s+='<span class="dots">...</span>'))):e>2&&(s+='<button type="button" class="number pagination-item" data-page="1">1</button>',s+='<span class="dots">...</span>'),e===l?(n=n-1,D.classList.add("disabled")):e===l-1&&(n=n-1),e===1?(a=a+1,K.classList.add("disabled")):e==2&&(a=a+1);for(let c=n;c<=a;c+=1)c>l||c<0||(c===0&&(c+=1),s+=`<button type="button" class="number pagination-item ${e===c?"active-page":""}" data-page="${c}">${c}</button>`);return o>=768?e<l-1&&(e<l-2&&(s+='<span class="dots"><span>...</span></span>'),s+=`<button type="button" class="number pagination-item" data-page="${l}">${l}</button>`):e<l-1&&(s+='<span class="dots"><span>...</span></span>',s+=`<button type="button" class="number pagination-item" data-page="${l}">${l}</button>`),kt.innerHTML=s,s}function $t(t){const e=t.target.closest("button");if(!e)return;const s=e.dataset.page;s==="next-page"?y+=1:s==="prev-page"?y-=1:y=Number(s),F!==y&&(Pt(y),I(l,y),F=y)}async function Pt(t){const s={...i(bt),page:t};try{v();const{results:n}=await L(s);x(n)}catch{vt.classList.remove("visually-hidden"),W.classList.add("visually-hidden"),Lt.innerHTML="",$()}finally{P()}}W.addEventListener("click",$t);const St={popularList:document.querySelector(".popular-list")},wt=i("basket")??[];function Ct(t){const e=t.map(({name:s,img:n,category:a,size:o,popularity:c,_id:r})=>{const u=wt.some(q=>q._id===r);return`<li class="popular-item" data-id="${r}">
                    <div class="wrapper-img">
                        <img
                            src="${n}"
                            alt="${s}"
                        />
                    </div>
                    <div class="popular-product-info">
                    <div class="popular-info-top">
                        <h4 class="product-name">${s}</h4>
                        <button type="button" class="btn-light-basket popular-products-btn" data-button-id="${r}">
                        ${u?`<svg class="light-checkmark" width="12" height="12">
                                  <use class="href-icon" href="${p}#icon-checkmark"></use>
                               </svg>`:`<svg class="light-basket" width="12" height="12">
                                 <use href="${p}#icon-basket"></use>
                              </svg>`}
                        </button>
                        </div>
                        <p class="product-category">Category: <span>${a.replace("_"," ")}</span></p>
                        <div class="product-text">
                            <p>Size: <span>${o}</span></p>
                            <p>Popularity: <span>${c}</span></p>
                        </div>
                    </div>
                </li>`});St.popularList.insertAdjacentHTML("beforeend",e.join(""))}const qt=5;ct(qt).then(t=>{Ct(t),g("popular products",t)}).catch(t=>console.log(t));const Et={popularList:document.querySelector(".popular-list")};async function At(t){const e="basket",s=i(e)??[];if(!t.target.closest(".btn-light-basket"))return;const a=t.target.closest(".popular-item").dataset.id,c=i("popular products").filter(({_id:u})=>a===u)[0],r=document.querySelectorAll(`[data-button-id="${a}"]`);w(e,c,s),C([...r],a,s)}Et.popularList.addEventListener("click",At);const Bt={discountList:document.querySelector(".discount-list")},Mt=i("basket")??[];function Ot(t){const e=t.map(({name:s,img:n,_id:a,price:o})=>{const c=Mt.some(r=>r._id===a);return`<li class="discount-item" data-id="${a}">
        <svg class="svg-discount" width="60" height="60">
          <use href="${p}#icon-discount-mark"></use>
        </svg>
        <div class="wrap-img">
          <img
            src="${n}"
            alt="${s}"
          />
        </div>
        <div class="discount-product-info">
          <h4 class="product-name">${s}</h4>
          <p class="product-price">$${o}</p>
          <button type="button" class="btn-basket discount-products-btn" data-button-id="${a}">
          ${c?`<svg class="svg-checkmark" width="18" height="18">
              <use class="href-icon" href="${p}#icon-checkmark"></use>
            </svg>`:`<svg class="svg-basket" width="18" height="18">
              <use class="href-icon" href="${p}#icon-basket"></use>
            </svg>`}
          </button>
        </div>
      </li>`});Bt.discountList.insertAdjacentHTML("beforeend",e.join(""))}rt().then(t=>{Ot(t),g("discount products",t)});const Tt={discountList:document.querySelector(".discount-list")};Tt.discountList.addEventListener("click",_t);async function _t(t){const e="basket",s=i(e)??[];if(!t.target.closest(".btn-basket"))return;const a=t.target.closest(".discount-item").dataset.id,c=i("discount products").filter(({_id:u})=>a===u)[0],r=document.querySelectorAll(`[data-button-id="${a}"]`);w(e,c,s),C([...r],a,s)}const G=document.querySelector(".pagination"),xt=document.querySelector(".pagination-btn-wrap"),m="params of search";let d=i(m);async function It(t){if(!t.target.classList.contains("category-type"))return;const e=t.target.dataset.category,s=i(m);if(e!=="show-all"?d={...s,category:e}:d={...s,category:null},!!_(s,d))try{v();const{results:a,totalPages:o}=await L(d);R(a,o),g(m,d)}catch{h(),$()}finally{P()}}function Rt(t){const s={...i(m),keyword:t.target.value};g(m,s)}async function jt(t){t.preventDefault();const e=i(m),s=_(e,d);if(d=e,!!s)try{v();const{results:n,totalPages:a}=await L(d);R(n,a)}catch{h(),$()}finally{P()}}function zt(t){let e,s;switch(t.target.dataset.filterparam){case"byAtoZ":e="byABC",s=!0;break;case"byZtoA":e="byABC",s=!1;break;case"byCheaperfirst":e="byPrice",s=!0;break;case"byExpensivefirst":e="byPrice",s=!1;break;case"byPopular":e="byPopularity",s=!1;break;case"byNotpopular":e="byPopularity",s=!0;break;default:e="byABC",s=!0;break}Ht(t,e,s)}async function Ht(t,e,s){if(!t.target.classList.contains("filter-type"))return;const n=i(m),{[Object.keys(n).pop()]:a,...o}=n;if(d={...o,[e]:s},!!_(n,d))try{v();const{results:r,totalPages:u}=await L(d);R(r,u),g(m,d)}catch{h(),$()}finally{P()}}function Kt(t){const e=document.querySelector(".param-name");let s;const n=Object.entries(t),[a,o]=n[n.length-1];switch(a){case"byABC":o?s="A to Z":s="Z to A";break;case"byPrice":o?s="Cheaper first":s="Expensive first";break;case"byPopularity":o?s="Not popular":s="Popular";break;default:s="A to Z";break}e.textContent=s}function R(t,e){e>1?(xt.innerHTML=I(e),G.classList.remove("visually-hidden")):G.classList.add("visually-hidden"),t.length?(j.classList.add("visually-hidden"),x(t)):h()}const b=document.querySelector(".category-list"),k=document.querySelector(".filters-all-param-list"),Y=document.querySelector(".select-filter"),N=document.querySelector(".select-param"),A=document.querySelector(".category-name"),Dt=document.querySelector(".param-name");Y.addEventListener("click",()=>Z(b));N.addEventListener("click",()=>Z(k));b.addEventListener("click",t=>U(t,b,A));k.addEventListener("click",t=>U(t,k,Dt));document.addEventListener("click",Ft);function Z(t){t.classList.toggle("filter-hidden")}function U(t,e,s){const n=t.target;(n.classList.contains("category-type")||n.classList.contains("filter-type"))&&(s.textContent=n.textContent,e.classList.add("filter-hidden"))}function Ft(t){const e=Y.contains(t.target),s=N.contains(t.target);!e&&!b.classList.contains("filter-hidden")&&b.classList.add("filter-hidden"),!s&&!k.classList.contains("filter-hidden")&&k.classList.add("filter-hidden")}const V=document.querySelector(".category-list"),Gt=document.querySelector(".filters-all-param-list"),Wt=document.querySelector(".form"),J=document.querySelector(".keyword"),j=document.querySelector(".info-query"),Yt=document.querySelector(".product-list"),B=document.querySelector(".pagination"),Nt=document.querySelector(".pagination-btn-wrap"),S="params of search",Zt={keyword:null,category:null,page:1,limit:X(),byABC:!0};i(S)??g(S,Zt);async function Ut(){const e=(await it()).map(s=>`<li data-category="${s}" class="category-type">${Q(s)}</li>`).join("");V.insertAdjacentHTML("afterbegin",e)}function Q(t){return t.replaceAll("_"," ")}function X(){const t=window.innerWidth;let e=0;return t<768?e=6:t>=768&&t<1440?e=8:e=9,e}async function Vt(){v();try{const t=i(S),e={...t,keyword:t.keyword||null,limit:X(),page:1};g(S,e);const{results:s,totalPages:n}=await L(e);J.value=e.keyword,n>1?(Nt.innerHTML=I(n),B.classList.remove("visually-hidden")):B.classList.add("visually-hidden"),s.length?(j.classList.add("visually-hidden"),x(s)):h(),e.category!==null?A.textContent=Q(e.category):A.textContent="Categories",Kt(e)}catch(t){h(),$(),console.log(t)}finally{P()}}function h(){Yt.innerHTML="",B.classList.add("visually-hidden"),j.classList.remove("visually-hidden")}Wt.addEventListener("submit",jt);Gt.addEventListener("click",zt);V.addEventListener("click",It);J.addEventListener("input",Rt);document.addEventListener("DOMContentLoaded",Ut);document.addEventListener("DOMContentLoaded",Vt);const Jt=document.querySelector(".clouse_modal"),M=document.querySelector(".modal-backdrop-product"),O=document.querySelector(".modal-product"),Qt=document.querySelector(".modal-product-inWindow"),Xt=document.querySelector(".product-list"),te=document.querySelector(".popular-section"),ee=document.querySelector(".discount-section"),tt="basket";let T,f;const et=()=>ne(f,T);function st(){document.querySelector(".modal-button").removeEventListener("click",et),z(),nt(),O.classList.remove("visible-modal")}Jt.addEventListener("click",function(){st()});M.addEventListener("click",t=>{t.target==M&&st()});document.addEventListener("keydown",function(t){t.target.closest(".modal_window-item"),t.key==="Escape"&&document.body.style.overflow==="hidden"&&(z(),nt())});function z(){M.classList.toggle("is-hidden")}function nt(){document.body.style.overflow=""}async function H(t){T=i(tt)??[];const e=t.target.closest(".resp-item");if(e&&(f=e.dataset.id),t.target.closest(".btn-basket")||t.target.closest(".btn-light-basket"))return;const a=t.target.closest(".popular-item");a&&(f=a.dataset.id);const o=t.target.closest(".discount-item");if(o&&(f=o.dataset.id),!e&&!a&&!o)return;O.classList.add("visible-modal");const c=T.find(at=>at._id==f),r=await lt(f),u=dt(r.category),q=`<div class ="TestDiv1"><div class="img_modal2" >
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
    <button type="button" class="modal-button"><span class ="textInButton">${c?"Remove from":"Add to"}</span><svg class="svg-basket2" width="18" height="18">
    <use class="href-icon" href="${p}#icon-basket"></use>
  </svg></button></div>`;Qt.innerHTML=q,O.style.display="block",document.body.style.overflow="hidden",z(),document.querySelector(".modal-button").addEventListener("click",et)}function se(t){const e=i("main products"),s=i("popular products"),n=i("discount products");return[...e,...s,...n].find(c=>c._id===t)}function ne(t,e){const s=se(t),n=document.querySelectorAll(`[data-button-id="${t}"]`);w(tt,s,e),C([...n],t,e);const a=e.find(c=>c._id===t),o=document.querySelector(".textInButton");a?o.textContent="Remove from":o.textContent="Add to"}Xt.addEventListener("click",H);te.addEventListener("click",H);ee.addEventListener("click",H);
//# sourceMappingURL=commonHelpers2.js.map
