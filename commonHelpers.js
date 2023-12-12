import{s as g,l as p,c as l,a as L,b as q,d as E}from"./assets/scroll-up-6c7d3482.js";import"./assets/vendor-9038a9ee.js";const O=function(c){return c.map(({name:r,category:o,size:n,price:y,img:d,_id:h})=>`<li class="cart-item" data-id="${h}">
      <div class="cart-item-wrap">
        <div class="cart-img-container">
          <img class="cart-img" src="${d}" alt="${r}" />
        </div>
        <div class="cart-img-text">
        <div class="cart-item-title-wrap"><h3 class="cart-item-title">${r}</h3>
        <button name="button" type="button" class="cart-btn-close">
        <svg class="cart-icon-close">
          <use href="${g}#icon-close"></use>
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
              <span>${n}</span>
            </p>
          </div>
          <h3 class="cart-info-price">$${y.toFixed(2)}</h3>
        </div> 
      </div>
     
    </li>`).join("")},b=function(c){localStorage.removeItem(c)},t={cartContent:document.querySelector(".cart-content-wrap"),cartTitle:document.querySelector(".cart-title"),cartTitleContainer:document.querySelector(".cart-title-container"),cartItemContainer:document.querySelector(".cart-item-container"),cartBtnDelAll:document.querySelector(".cart-btn-del-all"),cartEmptyContent:document.querySelector(".cart-yellow-container"),cartProductsSum:document.querySelector(".order-products-sum"),cartBtnDellContainer:document.querySelector(".cart-btn-wrap"),cartOrderProducts:document.querySelector(".order-products")};t.cartItemContainer.addEventListener("click",I);t.cartBtnDelAll.addEventListener("click",T);const u="basket";let a=p(u)??[],s=a.length,i=S(a);$();function T(){t.cartItemContainer.innerHTML="",b(u),s=0,a=[],m(s),l(a),t.cartEmptyContent.classList.remove("visually-hidden"),t.cartBtnDellContainer.classList.add("visually-hidden"),t.cartOrderProducts.classList.add("visually-hidden")}function I(e){if(!e.target.closest(".cart-btn-close").nodeName)return;const r=e.target.closest(".cart-item"),o=r.dataset.id,n=a.findIndex(d=>d._id===o);if(a.splice(n,1),localStorage.setItem(u,JSON.stringify(a)),r.remove(),s-=1,s<4&&t.cartItemContainer.classList.remove("cart-scrol"),m(s),l(a),i=S(a),e.currentTarget.childNodes.length===0){t.cartEmptyContent.classList.remove("visually-hidden"),t.cartBtnDellContainer.classList.add("visually-hidden"),t.cartOrderProducts.classList.add("visually-hidden");return}t.cartProductsSum.innerHTML=`$${String(i.toFixed(2))}`,t.cartEmptyContent.classList.add("visually-hidden"),t.cartContent.classList.remove("visually-hidden")}function m(e){t.cartTitle.textContent=`cart (${e})`}function $(){if(m(s),!s){t.cartEmptyContent.classList.remove("visually-hidden"),t.cartContent.classList.add("visually-hidden");return}t.cartEmptyContent.classList.add("visually-hidden"),t.cartContent.classList.remove("visually-hidden"),t.cartItemContainer.innerHTML=O(a),t.cartProductsSum.innerHTML=`$${String(i.toFixed(2))}`}function S(e){return e.reduce((r,o)=>r+o.price,0)}function A(){const e=document.querySelector(".modal-backdrop-order"),c=document.querySelector(".modal-order");e.classList.remove("is-hidden"),c.classList.add("visible-modal")}const k=document.querySelector(".modal-order-close");k.addEventListener("click",e=>{const c=document.querySelector(".modal-backdrop-order"),r=document.querySelector(".modal-order");c.classList.add("is-hidden"),r.classList.remove("visible-modal"),L("basket",[]),document.querySelector(".order-products-sum").textContent="$0.00"});const C="basket",f=p(C)??[],v=document.querySelector(".order-products-form"),w=document.querySelector(".cart-yellow-container"),P=document.querySelector(".cart-content-wrap");v.addEventListener("submit",async e=>{e.preventDefault();const r=e.target.querySelector("#email").value,o=f.map(n=>({productId:n._id,amount:1}));try{const n=await q({email:r,products:o});L(C,[]),l([]),A(),P.classList.add("visually-hidden"),w.classList.remove("visually-hidden")}catch(n){E(),console.log(n)}finally{v.reset()}});l(f);
//# sourceMappingURL=commonHelpers.js.map
