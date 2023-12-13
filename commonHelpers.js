import{s as y,l as h,c as m,a as g,b as T,d as w}from"./assets/scroll-up-7d3575cf.js";import"./assets/vendor-9038a9ee.js";const x=function(c){return console.log(c),c.map(({name:n,category:a,size:o,price:i,img:d,_id:l,amount:E})=>`<li class="cart-item" data-id="${l}">
        <div class="cart-item-wrap">
          <div class="cart-img-container">
            <img class="cart-img" src="${d}" alt="${n}" />
          </div>
          <div class="cart-img-text">
          <div class="cart-item-title-wrap"><span class="cart-item-title">${n}</span>
          <button name="button" type="button" class="cart-btn-close" id="cart-btn-close">
          <svg class="cart-icon-close">
            <use href="${y}#icon-close"></use>
            
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
        <use href="${y}#icon-minus"></use>
      </svg>
                    </button>
                    <span class="cart-counter-text" id="item-${l}-counter">${E}</span>
                    <button class="cart-counter-btn-plus"  >
                    <svg class="cart-counter-icon" >
        <use href="${y}#icon-plus"></use>
      </svg>
                    </button>
                </div>
                </div>
                
            </div>
        </div>

      </li>`).join("")},q=function(c){localStorage.removeItem(c)},e={cartContent:document.querySelector(".cart-content-wrap"),cartTitle:document.querySelector(".cart-title"),cartTitleContainer:document.querySelector(".cart-title-container"),cartItemContainer:document.querySelector(".cart-item-container"),cartBtnDelAll:document.querySelector(".cart-btn-del-all"),cartEmptyContent:document.querySelector(".cart-yellow-container"),cartProductsSum:document.querySelector(".order-products-sum"),cartBtnDellContainer:document.querySelector(".cart-btn-wrap"),cartOrderProducts:document.querySelector(".order-products")};e.cartItemContainer.addEventListener("click",A);e.cartBtnDelAll.addEventListener("click",P);const u="basket";let r=h(u)??[];const k="amount";r.forEach(function(t){t[k]=t.amount||1});let s=r.length,p=v(r);B();function P(){e.cartItemContainer.innerHTML="",q(u),s=0,r=[],L(s),m(r),e.cartEmptyContent.classList.remove("visually-hidden"),e.cartBtnDellContainer.classList.add("visually-hidden"),e.cartOrderProducts.classList.add("visually-hidden")}function A(t){const c=t.target.closest("button");if(!c)return;const n=c.classList.value,a=t.target.closest(".cart-item"),o=t.target.closest(".cart-counter-wrap");switch(n){case"cart-btn-close":D(a);break;case"cart-counter-btn-minus":_(o,a);break;case"cart-counter-btn-plus":M(o,a);break}}function D(t){const c=t.dataset.id,n=r.findIndex(o=>o._id===c);if(r.splice(n,1),localStorage.setItem(u,JSON.stringify(r)),t.remove(),s-=1,s<4&&e.cartItemContainer.classList.remove("cart-scrol"),L(s),m(r),p=v(r),r.length===0){e.cartEmptyContent.classList.remove("visually-hidden"),e.cartBtnDellContainer.classList.add("visually-hidden"),e.cartOrderProducts.classList.add("visually-hidden");return}e.cartProductsSum.innerHTML=`$${String(p.toFixed(2))}`,e.cartEmptyContent.classList.add("visually-hidden"),e.cartBtnDellContainer.classList.remove("visually-hidden"),e.cartOrderProducts.classList.remove("visually-hidden")}function L(t){e.cartTitle.textContent=`cart (${t})`}function B(){if(L(s),!s){e.cartEmptyContent.classList.remove("visually-hidden"),e.cartBtnDellContainer.classList.add("visually-hidden"),e.cartOrderProducts.classList.add("visually-hidden");return}e.cartEmptyContent.classList.add("visually-hidden"),e.cartBtnDellContainer.classList.remove("visually-hidden"),e.cartOrderProducts.classList.remove("visually-hidden"),e.cartItemContainer.innerHTML=x(r),e.cartProductsSum.innerHTML=`$${String(p.toFixed(2))}`}function v(t){return t.reduce((n,a)=>n+a.price*a.amount,0)}function M(t,c){const n=t.children[1],a=parseInt(n.textContent);n.textContent=a+1;const o=c.dataset.id,i=r.findIndex(l=>l._id===o);r[i].amount=parseInt(n.textContent),localStorage.setItem(u,JSON.stringify(r));let d=v(r);e.cartProductsSum.innerHTML=`$${String(d.toFixed(2))}`}function _(t,c){const n=t.children[1],a=parseInt(n.textContent);if(a===1)return;n.textContent=a-1;const o=c.dataset.id,i=r.findIndex(l=>l._id===o);r[i].amount=parseInt(n.textContent),localStorage.setItem(u,JSON.stringify(r));let d=v(r);e.cartProductsSum.innerHTML=`$${String(d.toFixed(2))}`}const f=document.querySelector(".modal-backdrop-order"),F=document.querySelector(".modal-order-close"),I=document.querySelector(".modal-order"),C=document.querySelector("body"),H=C.style.overflow;function R(){f.classList.remove("is-hidden"),I.classList.add("visible-modal"),C.style.overflow="hidden",document.addEventListener("keydown",t=>t.key==="Escape"?S():null)}function S(t){f.classList.add("is-hidden"),I.classList.remove("visible-modal"),g("basket",[]),document.querySelector(".order-products-sum").textContent="$0.00",C.style.overflow=H}f.addEventListener("click",t=>{t.target===t.currentTarget&&S()});F.addEventListener("click",S);const O="basket",$=h(O)??[],b=document.querySelector(".order-products-form"),G=document.querySelector(".cart-yellow-container"),K=document.querySelector(".cart-content-wrap");b.addEventListener("submit",async t=>{t.preventDefault();const n=t.target.querySelector("#email").value,a=$.map(o=>({productId:o._id,amount:1}));try{const o=await T({email:n,products:a});g(O,[]),m([]),R(),K.classList.add("visually-hidden"),G.classList.remove("visually-hidden")}catch(o){w(),console.log(o)}finally{b.reset()}});m($);
//# sourceMappingURL=commonHelpers.js.map
