import{a as l,S}from"./vendor-7a0e9089.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=c(e);fetch(e.href,n)}})();l.defaults.baseURL="https://food-boutique.b.goit.study/api";const Q=async()=>{const{data:t}=await l.get("/products/categories");return t},V=async t=>{const s=J(t),{data:c}=await l.get("/products/",{params:s});return c},W=async t=>{const{data:s}=await l.get(`/products/${t}`);return s},$=async t=>{const{data:s}=await l.get(`/products/popular?limit=${t}`);return s},w=async()=>{const{data:t}=await l.get("/products/discount");return t},X=async t=>{const{data:s}=await l.post("/orders",t);return s},a="/Code-Storm/assets/sprite-f073391d.svg",P={popularList:document.querySelector(".popular-list")},I=d("basket")??[];function q(t){const s=t.map(({name:c,img:o,category:e,size:n,popularity:r,_id:i})=>{const u=I.some(g=>g._id===i);return`<li class="popular-item" data-id="${i}">
                    <div class="wrapper-img">
                        <img
                            src="${o}"
                            alt="${c}"
                        />
                    </div>
                    <div class="popular-product-info">
                    <div class="popular-info-top">
                        <h4 class="product-name">${c}</h4>
                        <button type="button" class="btn-light-basket popular-products-btn" data-button-id="${i}">
                        ${u?`<svg class="light-checkmark" width="12" height="12">
                                  <use class="href-icon" href="${a}#icon-checkmark"></use>
                               </svg>`:`<svg class="light-basket" width="12" height="12">
                                 <use href="${a}#icon-basket"></use>
                              </svg>`}
                        </button>
                        </div>
                        <p class="product-category">Category: <span>${e.replace("_"," ")}</span></p>
                        <div class="product-text">
                            <p>Size: <span>${n}</span></p>
                            <p>Popularity: <span>${r}</span></p>
                        </div>
                    </div>
                </li>`});P.popularList.insertAdjacentHTML("beforeend",s.join(""))}const O=5;$(O).then(t=>{q(t),k("popular products",t)});const E={popularList:document.querySelector(".popular-list")};async function A(t){const s="basket",c=d(s)??[];if(!t.target.closest(".btn-light-basket"))return;const e=t.target.closest(".popular-item").dataset.id,r=d("popular products").filter(({_id:u})=>e===u)[0],i=document.querySelectorAll(`[data-button-id="${e}"]`);b(s,r,c),v([...i],e,c)}function B(t,s,c){const o=`<svg class="light-checkmark" width="12" height="12">
            <use class="href-icon" href="${a}#icon-checkmark"></use>
          </svg>`,e=`<svg class="light-basket" width="12" height="12">
            <use class="href-icon" href="${a}#icon-basket"></use>
          </svg>`,n=c.some(({_id:r})=>r===s);t.innerHTML=n?o:e}E.popularList.addEventListener("click",A);const f="basket",C=document.querySelector(".product-list"),M=d(f)??[];async function T(t){const s=d(f)??[];if(!t.target.closest(".btn-basket"))return;const o=t.target.closest(".resp-item").dataset.id,n=d("main products").filter(({_id:i})=>o===i)[0],r=document.querySelectorAll(`[data-button-id="${o}"]`);b(f,n,s),v([...r],o,s)}function N(t,s,c){const o=`<svg class="svg-checkmark" width="18" height="18">
            <use class="href-icon" href="${a}#icon-checkmark"></use>
          </svg>`,e=`<svg class="svg-basket" width="18" height="18">
            <use class="href-icon" href="${a}#icon-basket"></use>
          </svg>`,n=c.some(({_id:r})=>r===s);t.innerHTML=n?o:e}y(M);C.addEventListener("click",T);const x={discountList:document.querySelector(".discount-list")},j=d("basket")??[];function H(t){const s=t.map(({name:c,img:o,_id:e,price:n})=>{const r=j.some(i=>i._id===e);return`<li class="discount-item" data-id="${e}">
        <svg class="svg-discount" width="60" height="60">
          <use href="${a}#icon-discount-mark"></use>
        </svg>
        <div class="wrap-img">
          <img
            src="${o}"
            alt="${c}"
          />
        </div>
        <div class="discount-product-info">
          <h4 class="product-name">${c}</h4>
          <p class="product-price">$${n}</p>
          <button type="button" class="btn-basket discount-products-btn" data-button-id="${e}">
          ${r?`<svg class="svg-checkmark" width="18" height="18">
              <use class="href-icon" href="${a}#icon-checkmark"></use>
            </svg>`:`<svg class="svg-basket" width="18" height="18">
              <use class="href-icon" href="${a}#icon-basket"></use>
            </svg>`}
          </button>
        </div>
      </li>`});x.discountList.insertAdjacentHTML("beforeend",s.join(""))}w().then(t=>{H(t),k("discount products",t)});const R={discountList:document.querySelector(".discount-list")};R.discountList.addEventListener("click",_);async function _(t){const s="basket",c=d(s)??[];if(!t.target.closest(".btn-basket"))return;const e=t.target.closest(".discount-item").dataset.id,r=d("discount products").filter(({_id:u})=>e===u)[0],i=document.querySelectorAll(`[data-button-id="${e}"]`);b(s,r,c),v([...i],e,c)}function D(t,s,c){const o=`<svg class="svg-checkmark" width="18" height="18">
            <use class="href-icon" href="${a}#icon-checkmark"></use>
          </svg>`,e=`<svg class="svg-basket" width="18" height="18">
            <use class="href-icon" href="${a}#icon-basket"></use>
          </svg>`,n=c.some(({_id:r})=>r===s);t.innerHTML=n?o:e}function k(t,s){localStorage.setItem(t,JSON.stringify(s))}function d(t){const s=localStorage.getItem(t);try{return JSON.parse(s)}catch{return K(),s}}function J(t){const{keyword:s,category:c,page:o,limit:e,...n}=t,r=Object.keys(n).length,i=new URLSearchParams({page:o,limit:e});if(s&&i.set("keyword",s),c&&i.set("category",c),r){const[u,g]=Object.entries(n)[0];i.set(u,g)}return i}function b(t,s,c){const o=c.findIndex(e=>e._id===s._id);o!==-1?c.splice(o,1):c.push(s),k(t,c),y(c)}function y(t){const s=document.querySelector(".number-products"),c=t.length;s.textContent=c}function Z(t){return t.replaceAll("_"," ")}function K(){S.fire({icon:"error",title:"Oops...",text:"Something went wrong!"})}function tt(){document.querySelector(".loader-container").classList.remove("is-hidden")}function st(){const t=document.querySelector(".loader-container");setTimeout(()=>t.classList.add("is-hidden"),300)}function et(t,s){return JSON.stringify(t)!==JSON.stringify(s)}function v(t,s,c){for(let o=0;o<t.length;o+=1)switch(!0){case t[o].classList.contains("main-products-btn"):N(t[o],s,c);break;case t[o].classList.contains("popular-products-btn"):B(t[o],s,c);break;case t[o].classList.contains("discount-products-btn"):D(t[o],s,c);break}}const U=document.querySelector(".form-footer"),p=document.querySelector(".modal-subscription"),h=document.querySelector(".modal-unsubscription"),m=document.querySelector(".modal-backdrop-subscription");p.classList.add("is-hidden");h.classList.add("is-hidden");const L=t=>{const s=t.target;(s===p||s.closest(".close"))&&(p.classList.add("is-hidden"),m.classList.add("is-hidden")),(s===h||s.closest(".close"))&&(h.classList.add("is-hidden"),m.classList.add("is-hidden"))},G=()=>{p.classList.remove("is-hidden"),m.classList.remove("is-hidden")},Y=()=>{h.classList.remove("is-hidden"),m.classList.remove("is-hidden")},F=t=>{t?G():Y()};U.addEventListener("submit",t=>{t.preventDefault();const c=document.querySelector(".input-label").value.trim();F(c)});p.addEventListener("click",L);h.addEventListener("click",L);export{X as a,a as b,tt as c,K as d,et as e,Q as f,V as g,st as h,W as i,Z as j,d as l,k as s};
//# sourceMappingURL=modal-subscription-527bb0da.js.map
