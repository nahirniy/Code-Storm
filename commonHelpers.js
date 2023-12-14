import{s as y,l as f,c as m,a as I,b as w,d as E}from"./assets/scroll-up-9876d6b8.js";import"./assets/vendor-9038a9ee.js";const T=function(c){return c.map(({name:n,category:a,size:o,price:s,img:d,_id:i,amount:$})=>`<li class="cart-item" data-id="${i}">
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
                <h3 class="cart-info-price">$${s}</h3>
                <div class="cart-counter-wrap">
                    <button class="cart-counter-btn-minus" >
                    <svg class="cart-counter-icon">
        <use href="${y}#icon-minus"></use>
      </svg>
                    </button>
                    <span class="cart-counter-text" id="item-${i}-counter">${$}</span>
                    <button class="cart-counter-btn-plus"  >
                    <svg class="cart-counter-icon" >
        <use href="${y}#icon-plus"></use>
      </svg>
                    </button>
                </div>
                </div>
                
            </div>
        </div>

      </li>`).join("")},x=function(c){localStorage.removeItem(c)},e={cartContent:document.querySelector(".cart-content-wrap"),cartTitle:document.querySelector(".cart-title"),cartTitleContainer:document.querySelector(".cart-title-container"),cartItemContainer:document.querySelector(".cart-item-container"),cartBtnDelAll:document.querySelector(".cart-btn-del-all"),cartEmptyContent:document.querySelector(".cart-yellow-container"),cartProductsSum:document.querySelector(".order-products-sum"),cartBtnDellContainer:document.querySelector(".cart-btn-wrap"),cartOrderProducts:document.querySelector(".order-products")};e.cartItemContainer.addEventListener("click",P);e.cartBtnDelAll.addEventListener("click",k);const u="basket";let r=f(u)??[];const q="amount";r.forEach(function(t){t[q]=t.amount||1});let l=r.length,p=v(r);D();function k(){e.cartItemContainer.innerHTML="",x(u),l=0,r=[],C(l),m(r),e.cartEmptyContent.classList.remove("visually-hidden"),e.cartBtnDellContainer.classList.add("visually-hidden"),e.cartOrderProducts.classList.add("visually-hidden")}function P(t){const c=t.target.closest("button");if(!c)return;const n=c.classList.value,a=t.target.closest(".cart-item"),o=t.target.closest(".cart-counter-wrap");switch(n){case"cart-btn-close":A(a);break;case"cart-counter-btn-minus":M(o,a);break;case"cart-counter-btn-plus":B(o,a);break}}function A(t){const c=t.dataset.id,n=r.findIndex(o=>o._id===c);if(r.splice(n,1),localStorage.setItem(u,JSON.stringify(r)),t.remove(),l-=1,l<4&&e.cartItemContainer.classList.remove("cart-scrol"),C(l),m(r),p=v(r),r.length===0){e.cartEmptyContent.classList.remove("visually-hidden"),e.cartBtnDellContainer.classList.add("visually-hidden"),e.cartOrderProducts.classList.add("visually-hidden");return}e.cartProductsSum.innerHTML=`$${String(p.toFixed(2))}`,e.cartEmptyContent.classList.add("visually-hidden"),e.cartBtnDellContainer.classList.remove("visually-hidden"),e.cartOrderProducts.classList.remove("visually-hidden")}function C(t){e.cartTitle.textContent=`cart (${t})`}function D(){if(C(l),!l){e.cartEmptyContent.classList.remove("visually-hidden"),e.cartBtnDellContainer.classList.add("visually-hidden"),e.cartOrderProducts.classList.add("visually-hidden");return}e.cartEmptyContent.classList.add("visually-hidden"),e.cartBtnDellContainer.classList.remove("visually-hidden"),e.cartOrderProducts.classList.remove("visually-hidden"),e.cartItemContainer.innerHTML=T(r),e.cartProductsSum.innerHTML=`$${String(p.toFixed(2))}`}function v(t){return t.reduce((n,a)=>n+a.price*a.amount,0)}function B(t,c){const n=t.children[1],a=parseInt(n.textContent);n.textContent=a+1;const o=c.dataset.id,s=r.findIndex(i=>i._id===o);r[s].amount=parseInt(n.textContent),localStorage.setItem(u,JSON.stringify(r));let d=v(r);e.cartProductsSum.innerHTML=`$${String(d.toFixed(2))}`}function M(t,c){const n=t.children[1],a=parseInt(n.textContent);if(a===1)return;n.textContent=a-1;const o=c.dataset.id,s=r.findIndex(i=>i._id===o);r[s].amount=parseInt(n.textContent),localStorage.setItem(u,JSON.stringify(r));let d=v(r);e.cartProductsSum.innerHTML=`$${String(d.toFixed(2))}`}const S=document.querySelector(".modal-backdrop-order"),_=document.querySelector(".modal-order-close"),O=document.querySelector(".modal-order"),b=document.querySelector("body"),F=b.style.overflow;function H(){S.classList.remove("is-hidden"),O.classList.add("visible-modal"),b.style.overflow="hidden",document.addEventListener("keydown",t=>t.key==="Escape"?h():null)}function h(t){S.classList.add("is-hidden"),O.classList.remove("visible-modal"),I("basket",[]),document.querySelector(".order-products-sum").textContent="$0.00",b.style.overflow=F}S.addEventListener("click",t=>{t.target===t.currentTarget&&h()});_.addEventListener("click",h);const L="basket",R=f(L)??[],g=document.querySelector(".order-products-form"),G=document.querySelector(".cart-yellow-container"),K=document.querySelector(".cart-content-wrap");g.addEventListener("submit",async t=>{t.preventDefault();const c=f(L)??[],a=t.target.querySelector("#email").value,o=c.map(s=>({productId:s._id,amount:s.amount||1}));try{const s=await w({email:a,products:o});I(L,[]),m([]),H(),K.classList.add("visually-hidden"),G.classList.remove("visually-hidden")}catch(s){E(),console.log(s)}finally{g.reset()}});m(R);
//# sourceMappingURL=commonHelpers.js.map
