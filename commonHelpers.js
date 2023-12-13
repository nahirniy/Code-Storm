import{s as S,l as b,c as m,a as h,b as E,d as T}from"./assets/scroll-up-c0aefe53.js";import"./assets/vendor-9038a9ee.js";const w=function(c){return c.map(({name:n,category:a,size:o,price:i,img:d,_id:l})=>`<li class="cart-item" data-id="${l}">
        <div class="cart-item-wrap">
          <div class="cart-img-container">
            <img class="cart-img" src="${d}" alt="${n}" />
          </div>
          <div class="cart-img-text">
          <div class="cart-item-title-wrap"><span class="cart-item-title">${n}</span>
          <button name="button" type="button" class="cart-btn-close" id="cart-btn-close">
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
            <div class="counter-wrap">
                <h3 class="cart-info-price">$${i}</h3>
                <div class="cart-counter-wrap">
                    <button class="cart-counter-btn-minus" >
                    <svg class="cart-counter-icon">
        <use href="/img/icons/sprite.svg#icon-minus"></use>
      </svg>
                    </button>
                    <span class="cart-counter-text" id="item-${l}-counter">1</span>
                    <button class="cart-counter-btn-plus"  >
                    <svg class="cart-counter-icon" >
        <use href="${S}#icon-plus"></use>
      </svg>
                    </button>
                </div>
                </div>
                
            </div>
        </div>

      </li>`).join("")},x=function(c){localStorage.removeItem(c)},e={cartContent:document.querySelector(".cart-content-wrap"),cartTitle:document.querySelector(".cart-title"),cartTitleContainer:document.querySelector(".cart-title-container"),cartItemContainer:document.querySelector(".cart-item-container"),cartBtnDelAll:document.querySelector(".cart-btn-del-all"),cartEmptyContent:document.querySelector(".cart-yellow-container"),cartProductsSum:document.querySelector(".order-products-sum"),cartBtnDellContainer:document.querySelector(".cart-btn-wrap"),cartOrderProducts:document.querySelector(".order-products")};e.cartItemContainer.addEventListener("click",P);e.cartBtnDelAll.addEventListener("click",k);const u="basket";let r=b(u)??[];const $="quantity";r.forEach(function(t){t[$]=1});let s=r.length,y=v(r);D();function k(){e.cartItemContainer.innerHTML="",x(u),s=0,r=[],p(s),m(r),e.cartEmptyContent.classList.remove("visually-hidden"),e.cartBtnDellContainer.classList.add("visually-hidden"),e.cartOrderProducts.classList.add("visually-hidden")}function P(t){const c=t.target.closest("button");if(!c)return;const n=c.classList.value,a=t.target.closest(".cart-item"),o=t.target.closest(".cart-counter-wrap");switch(n){case"cart-btn-close":A(a);break;case"cart-counter-btn-minus":M(o,a);break;case"cart-counter-btn-plus":B(o,a);break}}function A(t){const c=t.dataset.id;console.log(c);const n=r.findIndex(o=>o._id===c);if(r.splice(n,1),localStorage.setItem(u,JSON.stringify(r)),t.remove(),s-=1,s<4&&e.cartItemContainer.classList.remove("cart-scrol"),p(s),m(r),y=v(r),console.log(r),r.length===0){e.cartEmptyContent.classList.remove("visually-hidden"),e.cartBtnDellContainer.classList.add("visually-hidden"),e.cartOrderProducts.classList.add("visually-hidden");return}e.cartProductsSum.innerHTML=`$${String(y.toFixed(2))}`,e.cartEmptyContent.classList.add("visually-hidden"),e.cartBtnDellContainer.classList.remove("visually-hidden"),e.cartOrderProducts.classList.remove("visually-hidden")}function p(t){e.cartTitle.textContent=`cart (${t})`}function D(){if(p(s),!s){e.cartEmptyContent.classList.remove("visually-hidden"),e.cartBtnDellContainer.classList.add("visually-hidden"),e.cartOrderProducts.classList.add("visually-hidden");return}e.cartEmptyContent.classList.add("visually-hidden"),e.cartBtnDellContainer.classList.remove("visually-hidden"),e.cartOrderProducts.classList.remove("visually-hidden"),e.cartItemContainer.innerHTML=w(r),e.cartProductsSum.innerHTML=`$${String(y.toFixed(2))}`}function v(t){return t.reduce((n,a)=>n+a.price*a.quantity,0)}function B(t,c){const n=t.children[1],a=parseInt(n.textContent);n.textContent=a+1;const o=c.dataset.id,i=r.findIndex(l=>l._id===o);r[i].quantity=parseInt(n.textContent),localStorage.setItem(u,JSON.stringify(r));let d=v(r);e.cartProductsSum.innerHTML=`$${String(d.toFixed(2))}`}function M(t,c){const n=t.children[1],a=parseInt(n.textContent);if(a===1)return;n.textContent=a-1;const o=c.dataset.id,i=r.findIndex(l=>l._id===o);r[i].quantity=parseInt(n.textContent),localStorage.setItem(u,JSON.stringify(r));let d=v(r);e.cartProductsSum.innerHTML=`$${String(d.toFixed(2))}`}const L=document.querySelector(".modal-backdrop-order"),_=document.querySelector(".modal-order-close"),I=document.querySelector(".modal-order"),f=document.querySelector("body"),F=f.style.overflow;function H(){L.classList.remove("is-hidden"),I.classList.add("visible-modal"),f.style.overflow="hidden",document.addEventListener("keydown",t=>t.key==="Escape"?C():null)}function C(t){L.classList.add("is-hidden"),I.classList.remove("visible-modal"),h("basket",[]),document.querySelector(".order-products-sum").textContent="$0.00",f.style.overflow=F}L.addEventListener("click",t=>{t.target===t.currentTarget&&C()});_.addEventListener("click",C);const O="basket",q=b(O)??[],g=document.querySelector(".order-products-form"),R=document.querySelector(".cart-yellow-container"),G=document.querySelector(".cart-content-wrap");g.addEventListener("submit",async t=>{t.preventDefault();const n=t.target.querySelector("#email").value,a=q.map(o=>({productId:o._id,amount:1}));try{const o=await E({email:n,products:a});h(O,[]),m([]),H(),G.classList.add("visually-hidden"),R.classList.remove("visually-hidden")}catch(o){T(),console.log(o)}finally{g.reset()}});m(q);
//# sourceMappingURL=commonHelpers.js.map
