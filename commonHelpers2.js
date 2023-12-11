import{l as i,c as Q,u as q,s as p,b as h,g as k,d as v,h as L,e as X,f as tt,i as E,j as et,k as st,m as at}from"./assets/modal-subscription-c680eb99.js";import"./assets/vendor-7a0e9089.js";const z="basket",D=i(z)??[],nt=document.querySelector(".product-list");async function ct(t){if(!t.target.closest(".btn-basket"))return;const e=t.target.closest(".resp-item").dataset.id,n=i("main products").filter(({_id:c})=>e===c)[0];q(z,n,D)}Q(D);nt.addEventListener("click",ct);const y="/Code-Storm/assets/sprite-f073391d.svg",ot=document.querySelector(".product-list"),rt="main products";function A(t){p(rt,t);const s=t.map(e=>{let a=it(e.category),n=lt(e.price);return`<li class="resp-item" data-id="${e._id}">
      ${e.is10PercentOff?`<svg class="svg-discount" width="60" height="60">
          <use href="${y}#icon-discount-mark"></use>
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
            <use class="href-icon" href="${y}#icon-basket"></use>
          </svg>
          </button>
        </div>
      </li>`}).join("");ot.innerHTML=s}function it(t){return t.replace(/_/g," ")}function lt(t){return Number.isInteger(t)?`${t}.00`:t.toFixed(2)}const dt="params of search",F=document.querySelector(".pagination"),ut=document.querySelector(".pagination-btn-wrap"),pt=document.querySelector(".info-query"),mt=document.querySelector(".product-list"),x=document.querySelector('[data-page="prev-page"]'),I=document.querySelector('[data-page="next-page"]');let l,m=1,H=1;function M(t,s=1){let e="",a=s,n=s,c=window.innerWidth;l=t,I.classList.remove("disabled"),x.classList.remove("disabled"),c>=768?(a-=1,n+=1,s>2&&(e+='<button type="button" class="number pagination-item" data-page="1">1</button>',s>3&&(e+='<span class="dots">...</span>'))):s>2&&(e+='<button type="button" class="number pagination-item" data-page="1">1</button>',e+='<span class="dots">...</span>'),s===l?(a=a-1,I.classList.add("disabled")):s===l-1&&(a=a-1),s===1?(n=n+1,x.classList.add("disabled")):s==2&&(n=n+1);for(let o=a;o<=n;o+=1)o>l||(o===0&&(o+=1),e+=`<button type="button" class="number pagination-item ${s===o?"active-page":""}" data-page="${o}">${o}</button>`);return c>=768?s<l-1&&(s<l-2&&(e+='<span class="dots"><span>...</span></span>'),e+=`<button type="button" class="number pagination-item" data-page="${l}">${l}</button>`):s<l-1&&(e+='<span class="dots"><span>...</span></span>',e+=`<button type="button" class="number pagination-item" data-page="${l}">${l}</button>`),ut.innerHTML=e,e}function yt(t){const s=t.target.closest("button");if(!s)return;const e=s.dataset.page;e==="next-page"?m+=1:e==="prev-page"?m-=1:m=Number(e),H!==m&&(gt(m),M(l,m),H=m)}async function gt(t){const e={...i(dt),page:t};try{h();const{results:a}=await k(e);A(a)}catch{pt.classList.remove("visually-hidden"),F.classList.add("visually-hidden"),mt.innerHTML="",v()}finally{L()}}F.addEventListener("click",yt);const ft={popularList:document.querySelector(".popular-list")};function bt(t){const s=t.map(({name:e,img:a,category:n,size:c,popularity:o,_id:r})=>`<li class="popular-item" data-id="${r}">
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
                        <svg class="light-basket"><use width="12" height="12 "href="${y}#icon-basket"></use></svg>
                        </button>
                        </div>
                        <p class="product-category">Category: <span>${n.replace("_"," ")}</span></p>
                        <div class="product-text">
                            <p>Size: <span>${c}</span></p>
                            <p>Popularity: <span>${o}</span></p>
                        </div>
                    </div>
                </li>`);ft.popularList.insertAdjacentHTML("beforeend",s.join(""))}const ht=5;X(ht).then(t=>{bt(t),p("popular products",t)});const kt={popularList:document.querySelector(".popular-list")};kt.popularList.addEventListener("click",vt);async function vt(t){const s="basket",e=i(s)??[];if(!t.target.closest(".btn-light-basket"))return;const n=t.target.closest(".popular-item").dataset.id,o=i("popular products").filter(({_id:r})=>n===r)[0];q(s,o,e)}const Lt={discountList:document.querySelector(".discount-list")};function Pt(t){const s=t.map(({name:e,img:a,_id:n,price:c})=>`<li class="discount-item" data-id="${n}">
        <svg class="svg-discount" width="60" height="60">
          <use href="${y}#icon-discount-mark"></use>
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
            <use class="href-icon" href="${y}#icon-basket"></use>
          </svg>
          </button>
        </div>
      </li>`);Lt.discountList.insertAdjacentHTML("beforeend",s.join(""))}tt().then(t=>{Pt(t),p("discount products",t)});const $t={discountList:document.querySelector(".discount-list")};$t.discountList.addEventListener("click",wt);async function wt(t){const s="basket",e=i(s)??[],a=t.target.closest(".btn-basket");if(!a)return;const n=t.target.closest(".discount-item").dataset.id,o=i("discount products").filter(({_id:r})=>n===r)[0];q(s,o,e),a.innerHTML=St}const St=`<svg class="svg-checkmark">
      <use href="${y}#icon-checkmark"></use>
    </svg>`,j=document.querySelector(".pagination"),Ct=document.querySelector(".pagination-btn-wrap"),u="params of search";let d=i(u);async function qt(t){if(!t.target.classList.contains("category-type"))return;const s=t.target.dataset.category,e=i(u);if(s!=="show-all"?d={...e,category:s}:d={...e,category:null},!!E(e,d))try{h();const{results:n,totalPages:c}=await k(d);B(n,c),p(u,d)}catch{g(),v()}finally{L()}}function Et(t){const e={...i(u),keyword:t.target.value};p(u,e)}async function At(t){t.preventDefault();const s=i(u),e=E(s,d);if(d=s,!!e)try{h();const{results:a,totalPages:n}=await k(d);B(a,n)}catch{g(),v()}finally{L()}}function Mt(t){let s,e;switch(t.target.dataset.filterparam){case"byAtoZ":s="byABC",e=!0;break;case"byZtoA":s="byABC",e=!1;break;case"byCheaperfirst":s="byPrice",e=!0;break;case"byExpensivefirst":s="byPrice",e=!1;break;case"byPopular":s="byPopularity",e=!1;break;case"byNotpopular":s="byPopularity",e=!0;break;default:s="byABC",e=!0;break}Bt(t,s,e)}async function Bt(t,s,e){if(!t.target.classList.contains("filter-type"))return;const a=i(u),{[Object.keys(a).pop()]:n,...c}=a;if(d={...c,[s]:e},!!E(a,d))try{h();const{results:r,totalPages:w}=await k(d);B(r,w),p(u,d)}catch{g(),v()}finally{L()}}function Ot(t){const s=document.querySelector(".param-name");let e;const a=Object.entries(t),[n,c]=a[a.length-1];switch(n){case"byABC":c?e="A to Z":e="Z to A";break;case"byPrice":c?e="Cheaper first":e="Expensive first";break;case"byPopularity":c?e="Not popular":e="Popular";break;default:e="A to Z";break}s.textContent=e}function B(t,s){s>1?(Ct.innerHTML=M(s),j.classList.remove("visually-hidden")):j.classList.add("visually-hidden"),t.length?(O.classList.add("visually-hidden"),A(t)):g()}const f=document.querySelector(".category-list"),b=document.querySelector(".filters-all-param-list"),K=document.querySelector(".select-filter"),R=document.querySelector(".select-param"),S=document.querySelector(".category-name"),Tt=document.querySelector(".param-name");K.addEventListener("click",()=>W(f));R.addEventListener("click",()=>W(b));f.addEventListener("click",t=>G(t,f,S));b.addEventListener("click",t=>G(t,b,Tt));document.addEventListener("click",_t);function W(t){t.classList.toggle("filter-hidden")}function G(t,s,e){const a=t.target;(a.classList.contains("category-type")||a.classList.contains("filter-type"))&&(e.textContent=a.textContent,s.classList.add("filter-hidden"))}function _t(t){const s=K.contains(t.target),e=R.contains(t.target);!s&&!f.classList.contains("filter-hidden")&&f.classList.add("filter-hidden"),!e&&!b.classList.contains("filter-hidden")&&b.classList.add("filter-hidden")}const N=document.querySelector(".category-list"),xt=document.querySelector(".filters-all-param-list"),It=document.querySelector(".form"),Y=document.querySelector(".keyword"),O=document.querySelector(".info-query"),Ht=document.querySelector(".product-list"),C=document.querySelector(".pagination"),jt=document.querySelector(".pagination-btn-wrap"),P="params of search",zt={keyword:null,category:null,page:1,limit:U(),byABC:!0};i(P)??p(P,zt);async function Dt(){const s=(await et()).map(e=>`<li data-category="${e}" class="category-type">${Z(e)}</li>`).join("");N.insertAdjacentHTML("afterbegin",s)}function Z(t){return t.replaceAll("_"," ")}function U(){const t=window.innerWidth;let s=0;return t<768?s=6:t>=768&&t<1440?s=8:s=9,s}async function Ft(){h();try{const t=i(P),s={...t,keyword:t.keyword||null,limit:U(),page:1};p(P,s);const{results:e,totalPages:a}=await k(s);Y.value=s.keyword,a>1?(jt.innerHTML=M(a),C.classList.remove("visually-hidden")):C.classList.add("visually-hidden"),e.length?(O.classList.add("visually-hidden"),A(e)):g(),s.category!==null?S.textContent=Z(s.category):S.textContent="Categories",Ot(s)}catch{g(),v()}finally{L()}}function g(){Ht.innerHTML="",C.classList.add("visually-hidden"),O.classList.remove("visually-hidden")}It.addEventListener("submit",At);xt.addEventListener("click",Mt);N.addEventListener("click",qt);Y.addEventListener("input",Et);document.addEventListener("DOMContentLoaded",Dt);document.addEventListener("DOMContentLoaded",Ft);const Kt=document.querySelector(".clouse_modal"),V=document.querySelector(".modal-backdrop-product"),Rt=document.querySelector(".modal-product"),Wt=document.querySelector(".modal-product-inWindow"),Gt=document.querySelector(".product-list"),Nt=document.querySelector(".popular-section"),Yt=document.querySelector(".discount-section");Kt.addEventListener("click",function(){$(),T()});window.onclick=function(t){t.target==V&&($(),T())};document.addEventListener("keydown",function(t){t.target.closest(".modal_window-item"),t.key==="Escape"&&document.body.style.overflow=="hidden"&&($(),T())});function $(){V.classList.toggle("is-hidden")}function T(){document.body.style.overflow=""}async function _(t){let s;const e=t.target.closest(".resp-item");if(e&&(s=e.dataset.id),t.target.closest(".btn-basket")||t.target.closest(".btn-light-basket"))return;const c=t.target.closest(".popular-item");c&&(s=c.dataset.id);const o=t.target.closest(".discount-item");if(o&&(s=o.dataset.id),!e&&!c&&!o)return;const r=await st(s),w=at(r.category),J=`<div class ="TestDiv1"><div class="img_modal2" >
    <img class="photo" src="${r.img}" alt="${r.name}" loading="lazy"/>
    </div>
    <div class="testDiv">
    <h2 class="name-product2">${r.name}</h2>
    <div class="descr-product2">
    <p class="category-product"><span class="style-word">Category:</span>${w}</p>
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
    <use class="href-icon" href="${y}#icon-basket"></use>
  </svg></button></div>`;Wt.innerHTML=J,Rt.style.display="block",document.body.style.overflow="hidden",$()}Gt.addEventListener("click",_);Nt.addEventListener("click",_);Yt.addEventListener("click",_);
//# sourceMappingURL=commonHelpers2.js.map
