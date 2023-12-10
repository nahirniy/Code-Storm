import{s as f,l as v,a as h}from"./assets/food-api-b44bac1e.js";import"./assets/vendor-424513b8.js";const C=function(e){return e.map(({name:r,category:c,size:o,price:m,img:s,_id:S})=>`<li class="cart-item" data-id="${S}">
      <div class="cart-item-wrap">
        <div class="cart-img-container">
          <img class="cart-img" src="${s}" alt="${r}" />
        </div>
        <div class="cart-img-text">
          <h3 class="cart-item-title">${r}</h3>
          <div class="cart-info-container">
            <p class="cart-info">
              Category:
              <span>${c.replaceAll("_"," ")}</span>
            </p>
            <p class="cart-info">
              Size:
              <span>${o}</span>
            </p>
          </div>
          <h3 class="cart-info-price">$${m}</h3>
        </div> 
      </div>
      <div class="cart-btn-wrap">
        <button name="button" type="button" class="cart-btn-close">
          <svg class="cart-icon-close">
            <use href="./img/icons/sprite.svg#icon-close"></use>
          </svg>
        </button>
      </div>
    </li>`).join("")},k=function(){return`<div class="cart-yellow-container">
  <img
    class="cart-yellow-img"
    src="./img/cart/yellow shopping basket .png "
    alt="yellow shopping basket "
  />

  <h3 class="cart-yellow-title">
    Your basket is <span class="cart-yellow-span">empty...</span>
  </h3>
  <p class="cart-yellow-text">
    Go to the main page to select your favorite <br />
    products and add them to the cart.
  </p>
</div>`},b=function(e){const r=localStorage.getItem(e);try{return JSON.parse(r)}catch{return r}},A=function(e){localStorage.removeItem(e)},a={cartTitle:document.querySelector(".cart-title"),cartTitleContainer:document.querySelector(".cart-title-container"),cartItemContainer:document.querySelector(".cart-item-container"),cartBtnDelAll:document.querySelector(".cart-btn-del-all")};a.cartItemContainer.addEventListener("click",I);a.cartBtnDelAll.addEventListener("click",O);const i="basket";let n=b(i),l=n.length,p=L(n);T();function O(){a.cartItemContainer.innerHTML="",A(i),a.cartBtnDelAll.classList.add("cart-display-none"),u()}function I(t){if(!t.target.closest(".cart-btn-close").nodeName)return;const r=t.target.closest(".cart-item"),c=r.dataset.id,o=n.findIndex(s=>s._id===c);n.splice(o,1),localStorage.setItem(i,JSON.stringify(n)),r.remove(),l-=1,d(l),p=L(n),console.log(p),t.currentTarget.childNodes.length===0&&(a.cartBtnDelAll.classList.add("cart-display-none"),u())}function d(t){a.cartTitleContainer.classList.remove("cart-display-none"),a.cartTitle.textContent=`cart(${t})`}function T(){if(d(l),!l){u();return}a.cartBtnDelAll.classList.remove("cart-display-none"),a.cartItemContainer.innerHTML=C(n)}function u(){d(0),a.cartItemContainer.innerHTML=k()}function L(t){return t.reduce((r,c)=>r+c.price,0)}function E(){const t=document.querySelector(".modal-backdrop-order"),e=document.querySelector(".modal-order");t.classList.remove("is-hidden"),e.classList.remove("is-hidden")}const q=document.querySelector(".modal-order-close");q.addEventListener("click",t=>{const e=document.querySelector(".modal-backdrop-order"),r=document.querySelector(".modal-order");e.classList.add("is-hidden"),r.classList.add("is-hidden"),f("basket",[]),document.querySelector(".order-products-sum").textContent="$0.00"});const $="basket",g=v($)??[],w=g.reduce((t,e)=>t+e.price,0),D=document.querySelector(".order-products-sum");D.textContent=`$${String(w.toFixed(2))}`;const y=document.querySelector(".order-products-form");y.addEventListener("submit",t=>{t.preventDefault();const r=t.target.querySelector("#email").value;console.log("Order Details:"),console.log("Email:",r);const c=g.map(o=>({productId:o._id,amount:o.price}));h({email:r,products:c}).then(()=>{E()}).catch(o=>{}),y.reset()});
//# sourceMappingURL=commonHelpers.js.map
