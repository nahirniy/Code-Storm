import{s as C,l as v,a as f,b as h,c as g}from"./assets/modal-subscription-1b3a1ce8.js";import"./assets/vendor-a81688c2.js";const O=function(c){return c.map(({name:r,category:a,size:o,price:m,img:l,_id:S})=>`<li class="cart-item" data-id="${S}">
      <div class="cart-item-wrap">
        <div class="cart-img-container">
          <img class="cart-img" src="${l}" alt="${r}" />
        </div>
        <div class="cart-img-text">
        <div class="cart-item-title-wrap"><h3 class="cart-item-title">${r}</h3>
        <button name="button" type="button" class="cart-btn-close">
        <svg class="cart-icon-close">
          <use href="${C}#icon-close"></use>
        </svg>
      </button>
        </div>
          
          <div class="cart-info-container">
            <p class="cart-info">
              Category:
              <span>${a.replaceAll("_"," ")}</span>
            </p>
            <p class="cart-info cart-info-overflow">
              Size:
              <span>${o}</span>
            </p>
          </div>
          <h3 class="cart-info-price">$${m}</h3>
        </div> 
      </div>
     
    </li>`).join("")},E=function(c){localStorage.removeItem(c)},t={cartContent:document.querySelector(".cart-content-wrap"),cartTitle:document.querySelector(".cart-title"),cartTitleContainer:document.querySelector(".cart-title-container"),cartItemContainer:document.querySelector(".cart-item-container"),cartBtnDelAll:document.querySelector(".cart-btn-del-all"),cartEmptyContent:document.querySelector(".cart-yellow-container"),cartProductsSum:document.querySelector(".order-products-sum"),cartBtnDellContainer:document.querySelector(".cart-btn-wrap"),cartOrderProducts:document.querySelector(".order-products")};t.cartItemContainer.addEventListener("click",T);t.cartBtnDelAll.addEventListener("click",q);const i="basket",n=v(i)??[];let s=n.length,d=L(n);b();function q(){t.cartItemContainer.innerHTML="",E(i),s=0,u(s),t.cartEmptyContent.classList.remove("visually-hidden"),t.cartBtnDellContainer.classList.add("visually-hidden"),t.cartOrderProducts.classList.add("visually-hidden")}function T(e){if(!e.target.closest(".cart-btn-close").nodeName)return;const r=e.target.closest(".cart-item"),a=r.dataset.id,o=n.findIndex(l=>l._id===a);if(n.splice(o,1),localStorage.setItem(i,JSON.stringify(n)),r.remove(),s-=1,s<4&&t.cartItemContainer.classList.remove("cart-scrol"),u(s),d=L(n),e.currentTarget.childNodes.length===0){t.cartEmptyContent.classList.remove("visually-hidden"),t.cartBtnDellContainer.classList.add("visually-hidden"),t.cartOrderProducts.classList.add("visually-hidden");return}t.cartProductsSum.innerHTML=`$${String(d.toFixed(2))}`,t.cartEmptyContent.classList.add("visually-hidden"),t.cartContent.classList.remove("visually-hidden")}function u(e){t.cartTitle.textContent=`cart (${e})`}function b(){if(u(s),!s){t.cartEmptyContent.classList.remove("visually-hidden"),t.cartContent.classList.add("visually-hidden");return}t.cartEmptyContent.classList.add("visually-hidden"),t.cartContent.classList.remove("visually-hidden"),t.cartItemContainer.innerHTML=O(n),t.cartProductsSum.innerHTML=`$${String(d.toFixed(2))}`}function L(e){return e.reduce((r,a)=>r+a.price,0)}function I(){const e=document.querySelector(".modal-backdrop-order"),c=document.querySelector(".modal-order");e.classList.remove("is-hidden"),c.classList.remove("is-hidden")}const $=document.querySelector(".modal-order-close");$.addEventListener("click",e=>{const c=document.querySelector(".modal-backdrop-order"),r=document.querySelector(".modal-order");c.classList.add("is-hidden"),r.classList.add("is-hidden"),f("basket",[]),document.querySelector(".order-products-sum").textContent="$0.00"});const A="basket",y=v(A)??[],p=document.querySelector(".order-products-form");p.addEventListener("submit",e=>{e.preventDefault();const r=e.target.querySelector("#email").value;console.log("Order Details:"),console.log("Email:",r);const a=y.map(o=>({productId:o._id,amount:o.price}));h({email:r,products:a}).then(()=>{I()}).catch(o=>{}),p.reset()});g(y);
//# sourceMappingURL=commonHelpers.js.map
