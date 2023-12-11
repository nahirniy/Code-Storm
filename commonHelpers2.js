import{l as d,s as g,b as k,c as h,g as b,d as v,h as L,e as E,f as U,i as V,j as J}from"./assets/modal-subscription-3a4f00f7.js";import"./assets/vendor-7a0e9089.js";const Q=document.querySelector(".product-list"),X="main products",tt=d("basket")??[];function A(e){g(X,e);const s=e.map(t=>{const a=et(t.category),n=st(t.price),o=tt.some(({_id:c})=>c===t._id);return`<li class="resp-item" data-id="${t._id}">
      ${t.is10PercentOff?`<svg class="svg-discount" width="60" height="60">
          <use href="${k}#icon-discount-mark"></use>
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
          <p class="price-product">$${n}</p>
          <button type="button" class="btn-basket main-products-btn" data-button-id="${t._id}">
          ${o?`<svg class="svg-checkmark" width="18" height="18">
            <use class="href-icon" href="${k}#icon-checkmark"></use>
          </svg>`:`<svg class="svg-basket" width="18" height="18">
            <use class="href-icon" href="${k}#icon-basket"></use>
          </svg>`}
          </button>
        </div>
      </li>`}).join("");Q.innerHTML=s}function et(e){return e.replace(/_/g," ")}function st(e){return Number.isInteger(e)?`${e}.00`:e.toFixed(2)}const at="params of search",H=document.querySelector(".pagination"),nt=document.querySelector(".pagination-btn-wrap"),ot=document.querySelector(".info-query"),ct=document.querySelector(".product-list"),x=document.querySelector('[data-page="prev-page"]'),z=document.querySelector('[data-page="next-page"]');let i,p=1,F=1;function B(e,s=1){let t="",a=s,n=s,o=window.innerWidth;i=e,z.classList.remove("disabled"),x.classList.remove("disabled"),o>=768?(a-=1,n+=1,s>2&&(t+='<button type="button" class="number pagination-item" data-page="1">1</button>',s>3&&(t+='<span class="dots">...</span>'))):s>2&&(t+='<button type="button" class="number pagination-item" data-page="1">1</button>',t+='<span class="dots">...</span>'),s===i?(a=a-1,z.classList.add("disabled")):s===i-1&&(a=a-1),s===1?(n=n+1,x.classList.add("disabled")):s==2&&(n=n+1);for(let c=a;c<=n;c+=1)c>i||c<0||(c===0&&(c+=1),t+=`<button type="button" class="number pagination-item ${s===c?"active-page":""}" data-page="${c}">${c}</button>`);return o>=768?s<i-1&&(s<i-2&&(t+='<span class="dots"><span>...</span></span>'),t+=`<button type="button" class="number pagination-item" data-page="${i}">${i}</button>`):s<i-1&&(t+='<span class="dots"><span>...</span></span>',t+=`<button type="button" class="number pagination-item" data-page="${i}">${i}</button>`),nt.innerHTML=t,t}function it(e){const s=e.target.closest("button");if(!s)return;const t=s.dataset.page;t==="next-page"?p+=1:t==="prev-page"?p-=1:p=Number(t),F!==p&&(rt(p),B(i,p),F=p)}async function rt(e){const t={...d(at),page:e};try{h();const{results:a}=await b(t);A(a)}catch{ot.classList.remove("visually-hidden"),H.classList.add("visually-hidden"),ct.innerHTML="",v()}finally{L()}}H.addEventListener("click",it);const I=document.querySelector(".pagination"),lt=document.querySelector(".pagination-btn-wrap"),u="params of search";let r=d(u);async function dt(e){if(!e.target.classList.contains("category-type"))return;const s=e.target.dataset.category,t=d(u);if(s!=="show-all"?r={...t,category:s}:r={...t,category:null},!!E(t,r))try{h();const{results:n,totalPages:o}=await b(r);M(n,o),g(u,r)}catch{y(),v()}finally{L()}}function ut(e){const t={...d(u),keyword:e.target.value};g(u,t)}async function pt(e){e.preventDefault();const s=d(u),t=E(s,r);if(r=s,!!t)try{h();const{results:a,totalPages:n}=await b(r);M(a,n)}catch{y(),v()}finally{L()}}function yt(e){let s,t;switch(e.target.dataset.filterparam){case"byAtoZ":s="byABC",t=!0;break;case"byZtoA":s="byABC",t=!1;break;case"byCheaperfirst":s="byPrice",t=!0;break;case"byExpensivefirst":s="byPrice",t=!1;break;case"byPopular":s="byPopularity",t=!1;break;case"byNotpopular":s="byPopularity",t=!0;break;default:s="byABC",t=!0;break}gt(e,s,t)}async function gt(e,s,t){if(!e.target.classList.contains("filter-type"))return;const a=d(u),{[Object.keys(a).pop()]:n,...o}=a;if(r={...o,[s]:t},!!E(a,r))try{h();const{results:l,totalPages:S}=await b(r);M(l,S),g(u,r)}catch{y(),v()}finally{L()}}function mt(e){const s=document.querySelector(".param-name");let t;const a=Object.entries(e),[n,o]=a[a.length-1];switch(n){case"byABC":o?t="A to Z":t="Z to A";break;case"byPrice":o?t="Cheaper first":t="Expensive first";break;case"byPopularity":o?t="Not popular":t="Popular";break;default:t="A to Z";break}s.textContent=t}function M(e,s){s>1?(lt.innerHTML=B(s),I.classList.remove("visually-hidden")):I.classList.add("visually-hidden"),e.length?(O.classList.add("visually-hidden"),A(e)):y()}const m=document.querySelector(".category-list"),f=document.querySelector(".filters-all-param-list"),W=document.querySelector(".select-filter"),D=document.querySelector(".select-param"),$=document.querySelector(".category-name"),ft=document.querySelector(".param-name");W.addEventListener("click",()=>N(m));D.addEventListener("click",()=>N(f));m.addEventListener("click",e=>j(e,m,$));f.addEventListener("click",e=>j(e,f,ft));document.addEventListener("click",ht);function N(e){e.classList.toggle("filter-hidden")}function j(e,s,t){const a=e.target;(a.classList.contains("category-type")||a.classList.contains("filter-type"))&&(t.textContent=a.textContent,s.classList.add("filter-hidden"))}function ht(e){const s=W.contains(e.target),t=D.contains(e.target);!s&&!m.classList.contains("filter-hidden")&&m.classList.add("filter-hidden"),!t&&!f.classList.contains("filter-hidden")&&f.classList.add("filter-hidden")}const K=document.querySelector(".category-list"),bt=document.querySelector(".filters-all-param-list"),vt=document.querySelector(".form"),R=document.querySelector(".keyword"),O=document.querySelector(".info-query"),Lt=document.querySelector(".product-list"),C=document.querySelector(".pagination"),kt=document.querySelector(".pagination-btn-wrap"),w="params of search",wt={keyword:null,category:null,page:1,limit:G(),byABC:!0};d(w)??g(w,wt);async function Pt(){const s=(await U()).map(t=>`<li data-category="${t}" class="category-type">${Z(t)}</li>`).join("");K.insertAdjacentHTML("afterbegin",s)}function Z(e){return e.replaceAll("_"," ")}function G(){const e=window.innerWidth;let s=0;return e<768?s=6:e>=768&&e<1440?s=8:s=9,s}async function St(){h();try{const e=d(w),s={...e,keyword:e.keyword||null,limit:G(),page:1};g(w,s);const{results:t,totalPages:a}=await b(s);R.value=s.keyword,a>1?(kt.innerHTML=B(a),C.classList.remove("visually-hidden")):C.classList.add("visually-hidden"),t.length?(O.classList.add("visually-hidden"),A(t)):y(),s.category!==null?$.textContent=Z(s.category):$.textContent="Categories",mt(s)}catch(e){y(),v(),console.log(e)}finally{L()}}function y(){Lt.innerHTML="",C.classList.add("visually-hidden"),O.classList.remove("visually-hidden")}vt.addEventListener("submit",pt);bt.addEventListener("click",yt);K.addEventListener("click",dt);R.addEventListener("input",ut);document.addEventListener("DOMContentLoaded",Pt);document.addEventListener("DOMContentLoaded",St);const $t=document.querySelector(".clouse_modal"),q=document.querySelector(".modal-backdrop-product"),Ct=document.querySelector(".modal-product"),qt=document.querySelector(".modal-product-inWindow"),Et=document.querySelector(".product-list"),At=document.querySelector(".popular-section"),Bt=document.querySelector(".discount-section");$t.addEventListener("click",function(){P(),T()});q.addEventListener("click",function(e){e.target==q&&(P(),T())});document.addEventListener("keydown",function(e){e.target.closest(".modal_window-item"),e.key==="Escape"&&document.body.style.overflow==="hidden"&&(P(),T())});function P(){q.classList.toggle("is-hidden")}function T(){document.body.style.overflow=""}async function _(e){let s;const t=e.target.closest(".resp-item");if(t&&(s=t.dataset.id),e.target.closest(".btn-basket")||e.target.closest(".btn-light-basket"))return;const o=e.target.closest(".popular-item");o&&(s=o.dataset.id);const c=e.target.closest(".discount-item");if(c&&(s=c.dataset.id),!t&&!o&&!c)return;const l=await V(s),S=J(l.category),Y=`<div class ="TestDiv1"><div class="img_modal2" >
    <img class="photo-modal" src="${l.img}" alt="${l.name}" width="160" height="160"  loading="lazy"/>
    </div>
    <div class="testDiv">
    <h3 class="name-product2">${l.name}</h3>
    <div class="descr-product2">
    <p class="category-product"><span class="style-word">Category:</span>${S}</p>
    <p class="size-product"><span class="style-word">Size:</span>${l.size}</p>
    <p class="popular-product"><span class="style-word">Popularity:</span>${l.popularity}</p>
    </div>
    <div class="desc-text"> <p class="textModalp">${l.desc}</p></div>
    </div>
    </div>
    <div class="footer-product_card2">
    <p class="price-product">$${l.price}</p></div>
    <div class = "end-modal">
    <button type="button" class="modal-button"><span class ="textInButton">Add to</span><svg class="svg-basket2" width="18" height="18">
    <use class="href-icon" href="${k}#icon-basket"></use>
  </svg></button></div>`;qt.innerHTML=Y,Ct.style.display="block",document.body.style.overflow="hidden",P()}Et.addEventListener("click",_);At.addEventListener("click",_);Bt.addEventListener("click",_);
//# sourceMappingURL=commonHelpers2.js.map
