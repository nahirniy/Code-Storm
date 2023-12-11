import{l as p,s as S,a as C}from"./assets/modal-subscription-e00fb5e9.js";import"./assets/vendor-7a0e9089.js";const f=function(c){return c.map(({name:r,category:o,size:n,price:u,img:l,_id:y})=>`<li class="cart-item" data-id="${y}">
      <div class="cart-item-wrap">
        <div class="cart-img-container">
          <img class="cart-img" src="${l}" alt="${r}" />
        </div>
        <div class="cart-img-text">
        <div class="cart-item-title-wrap"><h3 class="cart-item-title">${r}</h3>
        <button name="button" type="button" class="cart-btn-close">
        <svg class="cart-icon-close">
          <use href="./img/icons/sprite.svg#icon-close"></use>
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
          <h3 class="cart-info-price">$${u}</h3>
        </div> 
      </div>
     
    </li>`).join("")},g=function(c){localStorage.removeItem(c)},e={cartContent:document.querySelector(".cart-content-wrap"),cartTitle:document.querySelector(".cart-title"),cartTitleContainer:document.querySelector(".cart-title-container"),cartItemContainer:document.querySelector(".cart-item-container"),cartBtnDelAll:document.querySelector(".cart-btn-del-all"),cartEmptyContent:document.querySelector(".cart-yellow-container"),cartProductsSum:document.querySelector(".order-products-sum")};e.cartItemContainer.addEventListener("click",E);e.cartBtnDelAll.addEventListener("click",h);const d="basket",a=p(d)??[];let s=a.length,i=L(a);O();function h(){e.cartItemContainer.innerHTML="",g(d)}function E(t){if(!t.target.closest(".cart-btn-close").nodeName)return;const r=t.target.closest(".cart-item"),o=r.dataset.id,n=a.findIndex(l=>l._id===o);if(a.splice(n,1),localStorage.setItem(d,JSON.stringify(a)),r.remove(),s-=1,v(s),i=L(a),t.currentTarget.childNodes.length===0){e.cartEmptyContent.classList.remove("visually-hidden"),e.cartContent.classList.add("visually-hidden");return}e.cartProductsSum.innerHTML=`$${String(i.toFixed(2))}`,e.cartEmptyContent.classList.add("visually-hidden"),e.cartContent.classList.remove("visually-hidden")}function v(t){e.cartTitle.textContent=`cart(${t})`}function O(){if(v(s),!s){e.cartEmptyContent.classList.remove("visually-hidden"),e.cartContent.classList.add("visually-hidden");return}e.cartEmptyContent.classList.add("visually-hidden"),e.cartContent.classList.remove("visually-hidden"),e.cartItemContainer.innerHTML=f(a),e.cartProductsSum.innerHTML=`$${String(i.toFixed(2))}`}function L(t){return t.reduce((r,o)=>r+o.price,0)}function T(){const t=document.querySelector(".modal-backdrop-order"),c=document.querySelector(".modal-order");t.classList.remove("is-hidden"),c.classList.remove("is-hidden")}const q=document.querySelector(".modal-order-close");q.addEventListener("click",t=>{const c=document.querySelector(".modal-backdrop-order"),r=document.querySelector(".modal-order");c.classList.add("is-hidden"),r.classList.add("is-hidden"),S("basket",[]),document.querySelector(".order-products-sum").textContent="$0.00"});const A="basket",I=p(A)??[],m=document.querySelector(".order-products-form");m.addEventListener("submit",t=>{t.preventDefault();const r=t.target.querySelector("#email").value;console.log("Order Details:"),console.log("Email:",r);const o=I.map(n=>({productId:n._id,amount:n.price}));C({email:r,products:o}).then(()=>{T()}).catch(n=>{}),m.reset()});
//# sourceMappingURL=commonHelpers.js.map
