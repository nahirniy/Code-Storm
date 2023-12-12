import{s as S,l as v,a as C,b as f}from"./assets/modal-subscription-5d537d84.js";import"./assets/vendor-a81688c2.js";const h=function(c){return c.map(({name:r,category:a,size:o,price:m,img:l,_id:y})=>`<li class="cart-item" data-id="${y}">
      <div class="cart-item-wrap">
        <div class="cart-img-container">
          <img class="cart-img" src="${l}" alt="${r}" />
        </div>
        <div class="cart-img-text">
        <div class="cart-item-title-wrap"><h3 class="cart-item-title">${r}</h3>
        <button name="button" type="button" class="cart-btn-close">
        <svg class="cart-icon-close">
          <use href="${S}#icon-close"></use>
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
     
    </li>`).join("")},g=function(c){localStorage.removeItem(c)},t={cartContent:document.querySelector(".cart-content-wrap"),cartTitle:document.querySelector(".cart-title"),cartTitleContainer:document.querySelector(".cart-title-container"),cartItemContainer:document.querySelector(".cart-item-container"),cartBtnDelAll:document.querySelector(".cart-btn-del-all"),cartEmptyContent:document.querySelector(".cart-yellow-container"),cartProductsSum:document.querySelector(".order-products-sum"),cartBtnDellContainer:document.querySelector(".cart-btn-wrap"),cartOrderProducts:document.querySelector(".order-products")};t.cartItemContainer.addEventListener("click",E);t.cartBtnDelAll.addEventListener("click",O);const i="basket",n=v(i)??[];let s=n.length,d=L(n);q();function O(){t.cartItemContainer.innerHTML="",g(i),s=0,u(s),t.cartEmptyContent.classList.remove("visually-hidden"),t.cartBtnDellContainer.classList.add("visually-hidden"),t.cartOrderProducts.classList.add("visually-hidden")}function E(e){if(!e.target.closest(".cart-btn-close").nodeName)return;const r=e.target.closest(".cart-item"),a=r.dataset.id,o=n.findIndex(l=>l._id===a);if(n.splice(o,1),localStorage.setItem(i,JSON.stringify(n)),r.remove(),s-=1,s<4&&t.cartItemContainer.classList.remove("cart-scrol"),u(s),d=L(n),e.currentTarget.childNodes.length===0){t.cartEmptyContent.classList.remove("visually-hidden"),t.cartBtnDellContainer.classList.add("visually-hidden"),t.cartOrderProducts.classList.add("visually-hidden");return}t.cartProductsSum.innerHTML=`$${String(d.toFixed(2))}`,t.cartEmptyContent.classList.add("visually-hidden"),t.cartContent.classList.remove("visually-hidden")}function u(e){t.cartTitle.textContent=`cart (${e})`}function q(){if(u(s),!s){t.cartEmptyContent.classList.remove("visually-hidden"),t.cartContent.classList.add("visually-hidden");return}t.cartEmptyContent.classList.add("visually-hidden"),t.cartContent.classList.remove("visually-hidden"),t.cartItemContainer.innerHTML=h(n),t.cartProductsSum.innerHTML=`$${String(d.toFixed(2))}`}function L(e){return e.reduce((r,a)=>r+a.price,0)}function T(){const e=document.querySelector(".modal-backdrop-order"),c=document.querySelector(".modal-order");e.classList.remove("is-hidden"),c.classList.remove("is-hidden")}const b=document.querySelector(".modal-order-close");b.addEventListener("click",e=>{const c=document.querySelector(".modal-backdrop-order"),r=document.querySelector(".modal-order");c.classList.add("is-hidden"),r.classList.add("is-hidden"),C("basket",[]),document.querySelector(".order-products-sum").textContent="$0.00"});const I="basket",$=v(I)??[],p=document.querySelector(".order-products-form");p.addEventListener("submit",e=>{e.preventDefault();const r=e.target.querySelector("#email").value;console.log("Order Details:"),console.log("Email:",r);const a=$.map(o=>({productId:o._id,amount:o.price}));f({email:r,products:a}).then(()=>{T()}).catch(o=>{}),p.reset()});
//# sourceMappingURL=commonHelpers.js.map
