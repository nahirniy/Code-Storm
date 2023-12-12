import{s as O,l as L,c as l,a as p,b as g,d as q}from"./assets/scroll-up-30a3bb62.js";import"./assets/vendor-9038a9ee.js";const E=function(a){return a.map(({name:r,category:o,size:n,price:v,img:d,_id:f})=>`<li class="cart-item" data-id="${f}">
      <div class="cart-item-wrap">
        <div class="cart-img-container">
          <img class="cart-img" src="${d}" alt="${r}" />
        </div>
        <div class="cart-img-text">
        <div class="cart-item-title-wrap"><h3 class="cart-item-title">${r}</h3>
        <button name="button" type="button" class="cart-btn-close">
        <svg class="cart-icon-close">
          <use href="${O}#icon-close"></use>
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
          <h3 class="cart-info-price">$${v.toFixed(2)}</h3>
        </div> 
      </div>
     
    </li>`).join("")},b=function(a){localStorage.removeItem(a)},t={cartContent:document.querySelector(".cart-content-wrap"),cartTitle:document.querySelector(".cart-title"),cartTitleContainer:document.querySelector(".cart-title-container"),cartItemContainer:document.querySelector(".cart-item-container"),cartBtnDelAll:document.querySelector(".cart-btn-del-all"),cartEmptyContent:document.querySelector(".cart-yellow-container"),cartProductsSum:document.querySelector(".order-products-sum"),cartBtnDellContainer:document.querySelector(".cart-btn-wrap"),cartOrderProducts:document.querySelector(".order-products")};t.cartItemContainer.addEventListener("click",I);t.cartBtnDelAll.addEventListener("click",T);const u="basket";let c=L(u)??[],s=c.length,i=S(c);$();function T(){t.cartItemContainer.innerHTML="",b(u),s=0,c=[],m(s),l(c),t.cartEmptyContent.classList.remove("visually-hidden"),t.cartBtnDellContainer.classList.add("visually-hidden"),t.cartOrderProducts.classList.add("visually-hidden")}function I(e){if(!e.target.closest(".cart-btn-close").nodeName)return;const r=e.target.closest(".cart-item"),o=r.dataset.id,n=c.findIndex(d=>d._id===o);if(c.splice(n,1),localStorage.setItem(u,JSON.stringify(c)),r.remove(),s-=1,s<4&&t.cartItemContainer.classList.remove("cart-scrol"),m(s),l(c),i=S(c),e.currentTarget.childNodes.length===0){t.cartEmptyContent.classList.remove("visually-hidden"),t.cartBtnDellContainer.classList.add("visually-hidden"),t.cartOrderProducts.classList.add("visually-hidden");return}t.cartProductsSum.innerHTML=`$${String(i.toFixed(2))}`,t.cartEmptyContent.classList.add("visually-hidden"),t.cartBtnDellContainer.classList.remove("visually-hidden"),t.cartOrderProducts.classList.remove("visually-hidden")}function m(e){t.cartTitle.textContent=`cart (${e})`}function $(){if(m(s),!s){t.cartEmptyContent.classList.remove("visually-hidden"),t.cartBtnDellContainer.classList.add("visually-hidden"),t.cartOrderProducts.classList.add("visually-hidden");return}t.cartEmptyContent.classList.add("visually-hidden"),t.cartBtnDellContainer.classList.remove("visually-hidden"),t.cartOrderProducts.classList.remove("visually-hidden"),t.cartItemContainer.innerHTML=E(c),t.cartProductsSum.innerHTML=`$${String(i.toFixed(2))}`}function S(e){return e.reduce((r,o)=>r+o.price,0)}function A(){const e=document.querySelector(".modal-backdrop-order"),a=document.querySelector(".modal-order");e.classList.remove("is-hidden"),a.classList.add("visible-modal")}const P=document.querySelector(".modal-order-close");P.addEventListener("click",e=>{const a=document.querySelector(".modal-backdrop-order"),r=document.querySelector(".modal-order");a.classList.add("is-hidden"),r.classList.remove("visible-modal"),p("basket",[]),document.querySelector(".order-products-sum").textContent="$0.00"});const C="basket",h=L(C)??[],y=document.querySelector(".order-products-form"),k=document.querySelector(".cart-yellow-container"),B=document.querySelector(".cart-content-wrap");y.addEventListener("submit",async e=>{e.preventDefault();const r=e.target.querySelector("#email").value,o=h.map(n=>({productId:n._id,amount:1}));try{const n=await g({email:r,products:o});p(C,[]),l([]),A(),B.classList.add("visually-hidden"),k.classList.remove("visually-hidden")}catch(n){q(),console.log(n)}finally{y.reset()}});l(h);
//# sourceMappingURL=commonHelpers.js.map
