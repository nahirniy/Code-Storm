import{l as o,c as D,u as S,s as u,b as h,g as L,d as k,h as v,e as Z,f as U,i as w,j as V}from"./assets/modal-subscription-e00fb5e9.js";import"./assets/vendor-7a0e9089.js";const _="basket",I=o(_)??[],J=document.querySelector(".product-list");async function Q(e){if(!e.target.closest(".btn-basket"))return;const t=e.target.closest(".resp-item").dataset.id,n=o("main products").filter(({_id:c})=>t===c)[0];S(_,n,I)}D(I);J.addEventListener("click",Q);const y="/Code-Storm/assets/sprite-f073391d.svg",X=document.querySelector(".product-list"),tt="main products";function E(e){u(tt,e);const s=e.map(t=>{let a=et(t.category),n=st(t.price);return`<li class="resp-item" data-id="${t._id}">
      ${t.is10PercentOff?`<svg class="svg-discount" width="60" height="60">
          <use href="${y}#icon-discount-mark"></use>
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
          <button type="button" class="btn-basket">
          <svg class="svg-basket" width="34" height="34">
            <use class="href-icon" href="${y}#icon-basket"></use>
          </svg>
          </button>
        </div>
      </li>`}).join("");X.innerHTML=s}function et(e){return e.replace(/_/g," ")}function st(e){return Number.isInteger(e)?`${e}.00`:e.toFixed(2)}const at="params of search",j=document.querySelector(".pagination"),nt=document.querySelector(".pagination-btn-wrap"),ct=document.querySelector(".info-query"),rt=document.querySelector(".product-list"),M=document.querySelector('[data-page="prev-page"]'),T=document.querySelector('[data-page="next-page"]');let i,g=1,B=1;function q(e,s=1){let t="",a=s,n=s,c=window.innerWidth;i=e,T.classList.remove("disabled"),M.classList.remove("disabled"),c>=768?(a-=1,n+=1,s>2&&(t+='<button type="button" class="number pagination-item" data-page="1">1</button>',s>3&&(t+='<span class="dots">...</span>'))):s>2&&(t+='<button type="button" class="number pagination-item" data-page="1">1</button>',t+='<span class="dots">...</span>'),s===i?(a=a-1,T.classList.add("disabled")):s===i-1&&(a=a-1),s===1?(n=n+1,M.classList.add("disabled")):s==2&&(n=n+1);for(let r=a;r<=n;r+=1)r>i||(r===0&&(r+=1),t+=`<button type="button" class="number pagination-item ${s===r?"active-page":""}" data-page="${r}">${r}</button>`);return c>=768?s<i-1&&(s<i-2&&(t+='<span class="dots"><span>...</span></span>'),t+=`<button type="button" class="number pagination-item" data-page="${i}">${i}</button>`):s<i-1&&(t+='<span class="dots"><span>...</span></span>',t+=`<button type="button" class="number pagination-item" data-page="${i}">${i}</button>`),nt.innerHTML=t,t}function ot(e){const s=e.target.closest("button");if(!s)return;const t=s.dataset.page;t==="next-page"?g+=1:t==="prev-page"?g-=1:g=Number(t),B!==g&&(it(g),q(i,g),B=g)}async function it(e){const t={...o(at),page:e};try{h();const{results:a}=await L(t);E(a)}catch{ct.classList.remove("visually-hidden"),j.classList.add("visually-hidden"),rt.innerHTML="",k()}finally{v()}}j.addEventListener("click",ot);const lt={popularList:document.querySelector(".popular-list")};function dt(e){const s=e.map(({name:t,img:a,category:n,size:c,popularity:r,_id:p})=>`<li class="popular-item" data-id="${p}">
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
                        <svg class="light-basket"><use width="12" height="12 "href="${y}#icon-basket"></use></svg>
                        </button>
                        </div>
                        <p class="product-category">Category: <span>${n.replace("_"," ")}</span></p>
                        <div class="product-text">
                            <p>Size: <span>${c}</span></p>
                            <p>Popularity: <span>${r}</span></p>
                        </div>
                    </div>
                </li>`);lt.popularList.insertAdjacentHTML("beforeend",s.join(""))}const ut=5;Z(ut).then(e=>{dt(e),u("popular products",e)});const pt={popularList:document.querySelector(".popular-list")};pt.popularList.addEventListener("click",gt);async function gt(e){const s="basket",t=o(s)??[];if(!e.target.closest(".btn-light-basket"))return;const n=e.target.closest(".popular-item").dataset.id,r=o("popular products").filter(({_id:p})=>n===p)[0];S(s,r,t)}const yt={discountList:document.querySelector(".discount-list")};function ft(e){const s=e.map(({name:t,img:a,_id:n,price:c})=>`<li class="discount-item" data-id="${n}">
        <svg class="svg-discount" width="60" height="60">
          <use href="${y}#icon-discount-mark"></use>
        </svg>
        <div class="wrap-img">
          <img
            src="${a}"
            alt="${t}"
          />
        </div>
        <div class="discount-product-info">
          <h4 class="product-name">${t}</h4>
          <p class="product-price">$${c}</p>
          <button type="button" class="btn-basket">
          <svg class="svg-basket">
            <use class="href-icon" href="${y}#icon-basket"></use>
          </svg>
          </button>
        </div>
      </li>`);yt.discountList.insertAdjacentHTML("beforeend",s.join(""))}U().then(e=>{ft(e),u("discount products",e)});const mt={discountList:document.querySelector(".discount-list")};mt.discountList.addEventListener("click",bt);async function bt(e){const s="basket",t=o(s)??[],a=e.target.closest(".btn-basket");if(!a)return;const n=e.target.closest(".discount-item").dataset.id,r=o("discount products").filter(({_id:p})=>n===p)[0];S(s,r,t),a.innerHTML=ht}const ht=`<svg class="svg-checkmark">
      <use href="${y}#icon-checkmark"></use>
    </svg>`,x=document.querySelector(".pagination"),Lt=document.querySelector(".pagination-btn-wrap"),d="params of search";let l=o(d);async function kt(e){if(!e.target.classList.contains("category-type"))return;const s=e.target.dataset.category,t=o(d);if(s!=="show-all"?l={...t,category:s}:l={...t,category:null},!!w(t,l))try{h();const{results:n,totalPages:c}=await L(l);A(n,c),u(d,l)}catch{f(),k()}finally{v()}}function vt(e){const t={...o(d),keyword:e.target.value};u(d,t)}async function Pt(e){e.preventDefault();const s=o(d),t=w(s,l);if(l=s,!!t)try{h();const{results:a,totalPages:n}=await L(l);A(a,n)}catch{f(),k()}finally{v()}}function $t(e){let s,t;switch(e.target.dataset.filterparam){case"byAtoZ":s="byABC",t=!0;break;case"byZtoA":s="byABC",t=!1;break;case"byCheaperfirst":s="byPrice",t=!0;break;case"byExpensivefirst":s="byPrice",t=!1;break;case"byPopular":s="byPopularity",t=!1;break;case"byNotpopular":s="byPopularity",t=!0;break;default:s="byABC",t=!0;break}Ct(e,s,t)}async function Ct(e,s,t){if(!e.target.classList.contains("filter-type"))return;const a=o(d),{[Object.keys(a).pop()]:n,...c}=a;if(l={...c,[s]:t},!!w(a,l))try{h();const{results:p,totalPages:z}=await L(l);A(p,z),u(d,l)}catch{f(),k()}finally{v()}}function St(e){const s=document.querySelector(".param-name");let t;const a=Object.entries(e),[n,c]=a[a.length-1];switch(n){case"byABC":c?t="A to Z":t="Z to A";break;case"byPrice":c?t="Cheaper first":t="Expensive first";break;case"byPopularity":c?t="Not popular":t="Popular";break;default:t="A to Z";break}s.textContent=t}function A(e,s){s>1?(Lt.innerHTML=q(s),x.classList.remove("visually-hidden")):x.classList.add("visually-hidden"),e.length?(O.classList.add("visually-hidden"),E(e)):f()}const m=document.querySelector(".category-list"),b=document.querySelector(".filters-all-param-list"),H=document.querySelector(".select-filter"),F=document.querySelector(".select-param"),$=document.querySelector(".category-name"),wt=document.querySelector(".param-name");H.addEventListener("click",()=>K(m));F.addEventListener("click",()=>K(b));m.addEventListener("click",e=>G(e,m,$));b.addEventListener("click",e=>G(e,b,wt));document.addEventListener("click",Et);function K(e){e.classList.toggle("filter-hidden")}function G(e,s,t){const a=e.target;(a.classList.contains("category-type")||a.classList.contains("filter-type"))&&(t.textContent=a.textContent,s.classList.add("filter-hidden"))}function Et(e){const s=H.contains(e.target),t=F.contains(e.target);!s&&!m.classList.contains("filter-hidden")&&m.classList.add("filter-hidden"),!t&&!b.classList.contains("filter-hidden")&&b.classList.add("filter-hidden")}const N=document.querySelector(".category-list"),qt=document.querySelector(".filters-all-param-list"),At=document.querySelector(".form"),R=document.querySelector(".keyword"),O=document.querySelector(".info-query"),Ot=document.querySelector(".product-list"),C=document.querySelector(".pagination"),Mt=document.querySelector(".pagination-btn-wrap"),P="params of search",Tt={keyword:null,category:null,page:1,limit:Y(),byABC:!0};o(P)??u(P,Tt);async function Bt(){const s=(await V()).map(t=>`<li data-category="${t}" class="category-type">${W(t)}</li>`).join("");N.insertAdjacentHTML("afterbegin",s)}function W(e){return e.replaceAll("_"," ")}function Y(){const e=window.innerWidth;let s=0;return e<768?s=6:e>=768&&e<1440?s=8:s=9,s}async function xt(){h();try{const e=o(P),s={...e,keyword:e.keyword||null,limit:Y(),page:1};u(P,s);const{results:t,totalPages:a}=await L(s);R.value=s.keyword,a>1?(Mt.innerHTML=q(a),C.classList.remove("visually-hidden")):C.classList.add("visually-hidden"),t.length?(O.classList.add("visually-hidden"),E(t)):f(),s.category!==null?$.textContent=W(s.category):$.textContent="Categories",St(s)}catch{f(),k()}finally{v()}}function f(){Ot.innerHTML="",C.classList.add("visually-hidden"),O.classList.remove("visually-hidden")}At.addEventListener("submit",Pt);qt.addEventListener("click",$t);N.addEventListener("click",kt);R.addEventListener("input",vt);document.addEventListener("DOMContentLoaded",Bt);document.addEventListener("DOMContentLoaded",xt);
//# sourceMappingURL=commonHelpers2.js.map
