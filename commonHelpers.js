import{s as S,l as y,a as C}from"./assets/food-api-624d78b1.js";import"./assets/vendor-7a0e9089.js";const f=function(c){return c.map(({name:e,category:o,size:a,price:u,img:l,_id:v})=>`<li class="cart-item" data-id="${v}">
      <div class="cart-item-wrap">
        <div class="cart-img-container">
          <img class="cart-img" src="${l}" alt="${e}" />
        </div>
        <div class="cart-img-text">
          <h3 class="cart-item-title">${e}</h3>
          <div class="cart-info-container">
            <p class="cart-info">
              Category:
              <span>${o.replaceAll("_"," ")}</span>
            </p>
            <p class="cart-info">
              Size:
              <span>${a}</span>
            </p>
          </div>
          <h3 class="cart-info-price">$${u}</h3>
        </div> 
      </div>
      <div class="cart-btn-wrap">
        <button name="button" type="button" class="cart-btn-close">
          <svg class="cart-icon-close">
            <use href="./img/icons/sprite.svg#icon-close"></use>
          </svg>
        </button>
      </div>
    </li>`).join("")},g=function(c){const e=localStorage.getItem(c);try{return JSON.parse(e)}catch{return e}},h=function(c){localStorage.removeItem(c)},r={cartContent:document.querySelector(".cart-content-wrap"),cartTitle:document.querySelector(".cart-title"),cartTitleContainer:document.querySelector(".cart-title-container"),cartItemContainer:document.querySelector(".cart-item-container"),cartBtnDelAll:document.querySelector(".cart-btn-del-all"),cartEmptyContent:document.querySelector(".cart-yellow-container"),cartProductsSum:document.querySelector(".order-products-sum")};r.cartItemContainer.addEventListener("click",O);r.cartBtnDelAll.addEventListener("click",E);const i="basket",n=g(i)??[];let s=n.length,d=L(n);T();function E(){r.cartItemContainer.innerHTML="",h(i)}function O(t){if(!t.target.closest(".cart-btn-close").nodeName)return;const e=t.target.closest(".cart-item"),o=e.dataset.id,a=n.findIndex(l=>l._id===o);if(n.splice(a,1),localStorage.setItem(i,JSON.stringify(n)),e.remove(),s-=1,p(s),d=L(n),t.currentTarget.childNodes.length===0){r.cartEmptyContent.classList.remove("visually-hidden"),r.cartContent.classList.add("visually-hidden");return}r.cartProductsSum.innerHTML=`$${String(d.toFixed(2))}`,r.cartEmptyContent.classList.add("visually-hidden"),r.cartContent.classList.remove("visually-hidden")}function p(t){r.cartTitle.textContent=`cart(${t})`}function T(){if(p(s),!s){r.cartEmptyContent.classList.remove("visually-hidden"),r.cartContent.classList.add("visually-hidden");return}r.cartEmptyContent.classList.add("visually-hidden"),r.cartContent.classList.remove("visually-hidden"),r.cartItemContainer.innerHTML=f(n),r.cartProductsSum.innerHTML=`$${String(d.toFixed(2))}`}function L(t){return t.reduce((e,o)=>e+o.price,0)}function I(){const t=document.querySelector(".modal-backdrop-order"),c=document.querySelector(".modal-order");t.classList.remove("is-hidden"),c.classList.remove("is-hidden")}const b=document.querySelector(".modal-order-close");b.addEventListener("click",t=>{const c=document.querySelector(".modal-backdrop-order"),e=document.querySelector(".modal-order");c.classList.add("is-hidden"),e.classList.add("is-hidden"),S("basket",[]),document.querySelector(".order-products-sum").textContent="$0.00"});const q="basket",A=y(q)??[],m=document.querySelector(".order-products-form");m.addEventListener("submit",t=>{t.preventDefault();const e=t.target.querySelector("#email").value;console.log("Order Details:"),console.log("Email:",e);const o=A.map(a=>({productId:a._id,amount:a.price}));C({email:e,products:o}).then(()=>{I()}).catch(a=>{}),m.reset()});
//# sourceMappingURL=commonHelpers.js.map
