import{s as q,l as S,c as d,a as C,b as w,d as T}from"./assets/scroll-up-0dd02456.js";import"./assets/vendor-9038a9ee.js";const I=function(n){return n.map(({name:a,category:o,size:c,price:p,img:i,_id:b})=>`<li class="cart-item" data-id="${b}">
      <div class="cart-item-wrap">
        <div class="cart-img-container">
          <img class="cart-img" src="${i}" alt="${a}" />
        </div>
        <div class="cart-img-text">
        <div class="cart-item-title-wrap"><h3 class="cart-item-title">${a}</h3>
        <button name="button" type="button" class="cart-btn-close" aria-label="Close modal window">
        <svg class="cart-icon-close">
          <use href="${q}#icon-close"></use>
        </svg>
      </button>
        </div>
          
          <div class="cart-info-container">
            <p class="cart-info">
              Category:
              <span>${o.replaceAll("_"," ")}</span>
            </p>
            <p class="cart-info cart-info-overflow">
              Size:
              <span>${c}</span>
            </p>
          </div>
          <h3 class="cart-info-price">$${p.toFixed(2)}</h3>
        </div> 
      </div>
     
    </li>`).join("")},$=function(n){localStorage.removeItem(n)},t={cartContent:document.querySelector(".cart-content-wrap"),cartTitle:document.querySelector(".cart-title"),cartTitleContainer:document.querySelector(".cart-title-container"),cartItemContainer:document.querySelector(".cart-item-container"),cartBtnDelAll:document.querySelector(".cart-btn-del-all"),cartEmptyContent:document.querySelector(".cart-yellow-container"),cartProductsSum:document.querySelector(".order-products-sum"),cartBtnDellContainer:document.querySelector(".cart-btn-wrap"),cartOrderProducts:document.querySelector(".order-products")};t.cartItemContainer.addEventListener("click",k);t.cartBtnDelAll.addEventListener("click",A);const m="basket";let r=S(m)??[],s=r.length,u=h(r);P();function A(){t.cartItemContainer.innerHTML="",$(m),s=0,r=[],v(s),d(r),t.cartEmptyContent.classList.remove("visually-hidden"),t.cartBtnDellContainer.classList.add("visually-hidden"),t.cartOrderProducts.classList.add("visually-hidden")}function k(e){if(!e.target.closest(".cart-btn-close").nodeName)return;const a=e.target.closest(".cart-item"),o=a.dataset.id,c=r.findIndex(i=>i._id===o);if(r.splice(c,1),localStorage.setItem(m,JSON.stringify(r)),a.remove(),s-=1,s<4&&t.cartItemContainer.classList.remove("cart-scrol"),v(s),d(r),u=h(r),e.currentTarget.childNodes.length===0){t.cartEmptyContent.classList.remove("visually-hidden"),t.cartBtnDellContainer.classList.add("visually-hidden"),t.cartOrderProducts.classList.add("visually-hidden");return}t.cartProductsSum.innerHTML=`$${String(u.toFixed(2))}`,t.cartEmptyContent.classList.add("visually-hidden"),t.cartBtnDellContainer.classList.remove("visually-hidden"),t.cartOrderProducts.classList.remove("visually-hidden")}function v(e){t.cartTitle.textContent=`cart (${e})`}function P(){if(v(s),!s){t.cartEmptyContent.classList.remove("visually-hidden"),t.cartBtnDellContainer.classList.add("visually-hidden"),t.cartOrderProducts.classList.add("visually-hidden");return}t.cartEmptyContent.classList.add("visually-hidden"),t.cartBtnDellContainer.classList.remove("visually-hidden"),t.cartOrderProducts.classList.remove("visually-hidden"),t.cartItemContainer.innerHTML=I(r),t.cartProductsSum.innerHTML=`$${String(u.toFixed(2))}`}function h(e){return e.reduce((a,o)=>a+o.price,0)}const l=document.querySelector(".modal-backdrop-order"),D=document.querySelector(".modal-order-close"),g=document.querySelector(".modal-order"),y=document.querySelector("body"),B=y.style.overflow;function x(){l.classList.remove("is-hidden"),g.classList.add("visible-modal"),y.style.overflow="hidden",document.addEventListener("keydown",e=>e.key==="Escape"?L(e):null)}function L(e){if(e.target!==l)return;l.classList.add("is-hidden"),g.classList.remove("visible-modal"),C("basket",[]),document.querySelector(".order-products-sum").textContent="$0.00",y.style.overflow=B}l.addEventListener("click",e=>{e.target===e.currentTarget&&L(e)});D.addEventListener("click",L);const E="basket",O=S(E)??[],f=document.querySelector(".order-products-form"),M=document.querySelector(".cart-yellow-container"),_=document.querySelector(".cart-content-wrap");f.addEventListener("submit",async e=>{e.preventDefault();const a=e.target.querySelector("#email").value,o=O.map(c=>({productId:c._id,amount:1}));try{const c=await w({email:a,products:o});C(E,[]),d([]),x(),_.classList.add("visually-hidden"),M.classList.remove("visually-hidden")}catch(c){T(),console.log(c)}finally{f.reset()}});d(O);
//# sourceMappingURL=commonHelpers.js.map
