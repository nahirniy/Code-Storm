import{a as u,S as $}from"./vendor-7a0e9089.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const n of c)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function e(c){const n={};return c.integrity&&(n.integrity=c.integrity),c.referrerpolicy&&(n.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?n.credentials="include":c.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(c){if(c.ep)return;c.ep=!0;const n=e(c);fetch(c.href,n)}})();u.defaults.baseURL="https://food-boutique.b.goit.study/api";const W=async()=>{const{data:t}=await u.get("/products/categories");return t},X=async t=>{const s=U(t),{data:e}=await u.get("/products/",{params:s});return e},Z=async t=>{const{data:s}=await u.get(`/products/${t}`);return s},w=async t=>{const{data:s}=await u.get(`/products/popular?limit=${t}`);return s},P=async()=>{const{data:t}=await u.get("/products/discount");return t},tt=async t=>{const{data:s}=await u.post("/orders",t);return s},I=async t=>{const{data:s}=await u.post("/subscription",t);return s},a="/Code-Storm/assets/sprite-f073391d.svg",q={popularList:document.querySelector(".popular-list")},E=d("basket")??[];function O(t){const s=t.map(({name:e,img:o,category:c,size:n,popularity:r,_id:i})=>{const l=E.some(g=>g._id===i);return`<li class="popular-item" data-id="${i}">
                    <div class="wrapper-img">
                        <img
                            src="${o}"
                            alt="${e}"
                        />
                    </div>
                    <div class="popular-product-info">
                    <div class="popular-info-top">
                        <h4 class="product-name">${e}</h4>
                        <button type="button" class="btn-light-basket popular-products-btn" data-button-id="${i}">
                        ${l?`<svg class="light-checkmark" width="12" height="12">
                                  <use class="href-icon" href="${a}#icon-checkmark"></use>
                               </svg>`:`<svg class="light-basket" width="12" height="12">
                                 <use href="${a}#icon-basket"></use>
                              </svg>`}
                        </button>
                        </div>
                        <p class="product-category">Category: <span>${c.replace("_"," ")}</span></p>
                        <div class="product-text">
                            <p>Size: <span>${n}</span></p>
                            <p>Popularity: <span>${r}</span></p>
                        </div>
                    </div>
                </li>`});q.popularList.insertAdjacentHTML("beforeend",s.join(""))}const A=5;w(A).then(t=>{O(t),k("popular products",t)});const B={popularList:document.querySelector(".popular-list")};async function C(t){const s="basket",e=d(s)??[];if(!t.target.closest(".btn-light-basket"))return;const c=t.target.closest(".popular-item").dataset.id,r=d("popular products").filter(({_id:l})=>c===l)[0],i=document.querySelectorAll(`[data-button-id="${c}"]`);b(s,r,e),y([...i],c,e)}function M(t,s,e){const o=`<svg class="light-checkmark" width="12" height="12">
            <use class="href-icon" href="${a}#icon-checkmark"></use>
          </svg>`,c=`<svg class="light-basket" width="12" height="12">
            <use class="href-icon" href="${a}#icon-basket"></use>
          </svg>`,n=e.some(({_id:r})=>r===s);t.innerHTML=n?o:c}B.popularList.addEventListener("click",C);const f="basket",T=document.querySelector(".product-list"),x=d(f)??[];async function N(t){const s=d(f)??[];if(!t.target.closest(".btn-basket"))return;const o=t.target.closest(".resp-item").dataset.id,n=d("main products").filter(({_id:i})=>o===i)[0],r=document.querySelectorAll(`[data-button-id="${o}"]`);b(f,n,s),y([...r],o,s)}function j(t,s,e){const o=`<svg class="svg-checkmark" width="18" height="18">
            <use class="href-icon" href="${a}#icon-checkmark"></use>
          </svg>`,c=`<svg class="svg-basket" width="18" height="18">
            <use class="href-icon" href="${a}#icon-basket"></use>
          </svg>`,n=e.some(({_id:r})=>r===s);t.innerHTML=n?o:c}v(x);T.addEventListener("click",N);const H={discountList:document.querySelector(".discount-list")},R=d("basket")??[];function _(t){const s=t.map(({name:e,img:o,_id:c,price:n})=>{const r=R.some(i=>i._id===c);return`<li class="discount-item" data-id="${c}">
        <svg class="svg-discount" width="60" height="60">
          <use href="${a}#icon-discount-mark"></use>
        </svg>
        <div class="wrap-img">
          <img
            src="${o}"
            alt="${e}"
          />
        </div>
        <div class="discount-product-info">
          <h4 class="product-name">${e}</h4>
          <p class="product-price">$${n}</p>
          <button type="button" class="btn-basket discount-products-btn" data-button-id="${c}">
          ${r?`<svg class="svg-checkmark" width="18" height="18">
              <use class="href-icon" href="${a}#icon-checkmark"></use>
            </svg>`:`<svg class="svg-basket" width="18" height="18">
              <use class="href-icon" href="${a}#icon-basket"></use>
            </svg>`}
          </button>
        </div>
      </li>`});H.discountList.insertAdjacentHTML("beforeend",s.join(""))}P().then(t=>{_(t),k("discount products",t)});const D={discountList:document.querySelector(".discount-list")};D.discountList.addEventListener("click",J);async function J(t){const s="basket",e=d(s)??[];if(!t.target.closest(".btn-basket"))return;const c=t.target.closest(".discount-item").dataset.id,r=d("discount products").filter(({_id:l})=>c===l)[0],i=document.querySelectorAll(`[data-button-id="${c}"]`);b(s,r,e),y([...i],c,e)}function K(t,s,e){const o=`<svg class="svg-checkmark" width="18" height="18">
            <use class="href-icon" href="${a}#icon-checkmark"></use>
          </svg>`,c=`<svg class="svg-basket" width="18" height="18">
            <use class="href-icon" href="${a}#icon-basket"></use>
          </svg>`,n=e.some(({_id:r})=>r===s);t.innerHTML=n?o:c}function k(t,s){localStorage.setItem(t,JSON.stringify(s))}function d(t){const s=localStorage.getItem(t);try{return JSON.parse(s)}catch{return L(),s}}function U(t){const{keyword:s,category:e,page:o,limit:c,...n}=t,r=Object.keys(n).length,i=new URLSearchParams({page:o,limit:c});if(s&&i.set("keyword",s),e&&i.set("category",e),r){const[l,g]=Object.entries(n)[0];i.set(l,g)}return i}function b(t,s,e){const o=e.findIndex(c=>c._id===s._id);o!==-1?e.splice(o,1):e.push(s),k(t,e),v(e)}function v(t){const s=document.querySelector(".number-products"),e=t.length;s.textContent=e}function st(t){return t.replaceAll("_"," ")}function L(){$.fire({icon:"error",title:"Oops...",text:"Something went wrong!"})}function et(){document.querySelector(".loader-container").classList.remove("is-hidden")}function ct(){const t=document.querySelector(".loader-container");setTimeout(()=>t.classList.add("is-hidden"),300)}function ot(t,s){return JSON.stringify(t)!==JSON.stringify(s)}function y(t,s,e){for(let o=0;o<t.length;o+=1)switch(!0){case t[o].classList.contains("main-products-btn"):j(t[o],s,e);break;case t[o].classList.contains("popular-products-btn"):M(t[o],s,e);break;case t[o].classList.contains("discount-products-btn"):K(t[o],s,e);break}}const G=document.querySelector(".form-footer"),p=document.querySelector(".modal-subscription"),h=document.querySelector(".modal-unsubscription"),m=document.querySelector(".modal-backdrop-subscription");p.classList.add("is-hidden");h.classList.add("is-hidden");const S=t=>{const s=t.target;(s===p||s.closest(".close"))&&(p.classList.add("is-hidden"),m.classList.add("is-hidden")),(s===h||s.closest(".close"))&&(h.classList.add("is-hidden"),m.classList.add("is-hidden"))},Y=()=>{p.classList.remove("is-hidden"),m.classList.remove("is-hidden")},F=()=>{h.classList.remove("is-hidden"),m.classList.remove("is-hidden")},z=async t=>{const s={email:t};try{const e=await I(s);Y()}catch(e){e.response.data.message==="Subscription already exists"?F():L()}};function Q(t){t.preventDefault();const e=document.querySelector(".input-label").value.trim();z(e)}G.addEventListener("submit",Q);p.addEventListener("click",S);h.addEventListener("click",S);export{tt as a,a as b,et as c,L as d,ot as e,W as f,X as g,ct as h,Z as i,st as j,d as l,k as s};
//# sourceMappingURL=modal-subscription-3a4f00f7.js.map
