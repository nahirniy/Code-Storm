import{s as y,l as S,a as C}from"./assets/food-api-5792d81d.js";import"./assets/vendor-424513b8.js";const f=function(r){return r.map(({name:e,category:o,size:n,price:i,img:l,_id:v})=>`<li class="cart-item" data-id="${v}">
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
              <span>${n}</span>
            </p>
          </div>
          <h3 class="cart-info-price">$${i}</h3>
        </div> 
      </div>
      <div class="cart-btn-wrap">
        <button name="button" type="button" class="cart-btn-close">
          <svg class="cart-icon-close">
            <use href="./img/icons/sprite.svg#icon-close"></use>
          </svg>
        </button>
      </div>
    </li>`).join("")},g=function(r){const e=localStorage.getItem(r);try{return JSON.parse(e)}catch{return e}},h=function(r){localStorage.removeItem(r)},c={cartContent:document.querySelector(".cart-content-wrap"),cartTitle:document.querySelector(".cart-title"),cartTitleContainer:document.querySelector(".cart-title-container"),cartItemContainer:document.querySelector(".cart-item-container"),cartBtnDelAll:document.querySelector(".cart-btn-del-all"),cartEmptyContent:document.querySelector(".cart-yellow-container")};c.cartItemContainer.addEventListener("click",O);c.cartBtnDelAll.addEventListener("click",E);const d="basket",a=g(d)??[],s=a.length;p(a);b();function E(){c.cartItemContainer.innerHTML="",h(d)}function O(t){if(!t.target.closest(".cart-btn-close").nodeName)return;const e=t.target.closest(".cart-item"),o=e.dataset.id,n=a.findIndex(l=>l._id===o);a.splice(n,1),localStorage.setItem(d,JSON.stringify(a)),e.remove(),s-=1,m(s),p(a),t.currentTarget.childNodes.length===0&&(c.cartEmptyContent.classList.remove("visually-hidden"),c.cartContent.classList.add("visually-hidden")),c.cartEmptyContent.classList.add("visually-hidden"),c.cartContent.classList.remove("visually-hidden")}function m(t){c.cartTitle.textContent=`cart(${t})`}function b(){if(m(s),!s){c.cartEmptyContent.classList.remove("visually-hidden"),c.cartContent.classList.add("visually-hidden");return}c.cartEmptyContent.classList.add("visually-hidden"),c.cartContent.classList.remove("visually-hidden"),c.cartItemContainer.innerHTML=f(a)}function p(t){return t.reduce((e,o)=>e+o.price,0)}function I(){const t=document.querySelector(".modal-backdrop-order"),r=document.querySelector(".modal-order");t.classList.remove("is-hidden"),r.classList.remove("is-hidden")}const q=document.querySelector(".modal-order-close");q.addEventListener("click",t=>{const r=document.querySelector(".modal-backdrop-order"),e=document.querySelector(".modal-order");r.classList.add("is-hidden"),e.classList.add("is-hidden"),y("basket",[]),document.querySelector(".order-products-sum").textContent="$0.00"});const A="basket",L=S(A)??[],k=L.reduce((t,r)=>t+r.price,0),T=document.querySelector(".order-products-sum");T.textContent=`$${String(k.toFixed(2))}`;const u=document.querySelector(".order-products-form");u.addEventListener("submit",t=>{t.preventDefault();const e=t.target.querySelector("#email").value;console.log("Order Details:"),console.log("Email:",e);const o=L.map(n=>({productId:n._id,amount:n.price}));C({email:e,products:o}).then(()=>{I()}).catch(n=>{}),u.reset()});
//# sourceMappingURL=commonHelpers.js.map
