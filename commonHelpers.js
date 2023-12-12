import{s as S,l as p,a as C,b as f}from"./assets/modal-subscription-183fc798.js";import"./assets/vendor-a81688c2.js";const h=function(c){return c.map(({name:r,category:o,size:a,price:u,img:l,_id:y})=>`<li class="cart-item" data-id="${y}">
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
              <span>${o.replaceAll("_"," ")}</span>
            </p>
            <p class="cart-info cart-info-overflow">
              Size:
              <span>${a}</span>
            </p>
          </div>
          <h3 class="cart-info-price">$${u}</h3>
        </div> 
      </div>
     
    </li>`).join("")},g=function(c){localStorage.removeItem(c)},e={cartContent:document.querySelector(".cart-content-wrap"),cartTitle:document.querySelector(".cart-title"),cartTitleContainer:document.querySelector(".cart-title-container"),cartItemContainer:document.querySelector(".cart-item-container"),cartBtnDelAll:document.querySelector(".cart-btn-del-all"),cartEmptyContent:document.querySelector(".cart-yellow-container"),cartProductsSum:document.querySelector(".order-products-sum")};e.cartItemContainer.addEventListener("click",O);e.cartBtnDelAll.addEventListener("click",E);const d="basket",n=p(d)??[];let s=n.length,i=v(n);T();function E(){e.cartItemContainer.innerHTML="",g(d)}function O(t){if(!t.target.closest(".cart-btn-close").nodeName)return;const r=t.target.closest(".cart-item"),o=r.dataset.id,a=n.findIndex(l=>l._id===o);if(n.splice(a,1),localStorage.setItem(d,JSON.stringify(n)),r.remove(),s-=1,L(s),i=v(n),t.currentTarget.childNodes.length===0){e.cartEmptyContent.classList.remove("visually-hidden"),e.cartContent.classList.add("visually-hidden");return}e.cartProductsSum.innerHTML=`$${String(i.toFixed(2))}`,e.cartEmptyContent.classList.add("visually-hidden"),e.cartContent.classList.remove("visually-hidden")}function L(t){e.cartTitle.textContent=`cart(${t})`}function T(){if(L(s),!s){e.cartEmptyContent.classList.remove("visually-hidden"),e.cartContent.classList.add("visually-hidden");return}e.cartEmptyContent.classList.add("visually-hidden"),e.cartContent.classList.remove("visually-hidden"),e.cartItemContainer.innerHTML=h(n),e.cartProductsSum.innerHTML=`$${String(i.toFixed(2))}`}function v(t){return t.reduce((r,o)=>r+o.price,0)}function $(){const t=document.querySelector(".modal-backdrop-order"),c=document.querySelector(".modal-order");t.classList.remove("is-hidden"),c.classList.remove("is-hidden")}const b=document.querySelector(".modal-order-close");b.addEventListener("click",t=>{const c=document.querySelector(".modal-backdrop-order"),r=document.querySelector(".modal-order");c.classList.add("is-hidden"),r.classList.add("is-hidden"),C("basket",[]),document.querySelector(".order-products-sum").textContent="$0.00"});const q="basket",A=p(q)??[],m=document.querySelector(".order-products-form");m.addEventListener("submit",t=>{t.preventDefault();const r=t.target.querySelector("#email").value;console.log("Order Details:"),console.log("Email:",r);const o=A.map(a=>({productId:a._id,amount:a.price}));f({email:r,products:o}).then(()=>{$()}).catch(a=>{}),m.reset()});
//# sourceMappingURL=commonHelpers.js.map
