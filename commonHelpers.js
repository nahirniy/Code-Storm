import{s as y,l as h,c as m,a as g,b as T,d as w}from"./assets/scroll-up-9876d6b8.js";import"./assets/vendor-9038a9ee.js";const x=function(o){return o.map(({name:n,category:c,size:a,price:i,img:d,_id:l,amount:E})=>`<li class="cart-item" data-id="${l}">
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
                <span>${c.replaceAll("_"," ")}</span>
              </p>
              <p class="cart-info cart-info-overflow">
                Size:
                <span>${a}</span>
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

      </li>`).join("")},q=function(o){localStorage.removeItem(o)},e={cartContent:document.querySelector(".cart-content-wrap"),cartTitle:document.querySelector(".cart-title"),cartTitleContainer:document.querySelector(".cart-title-container"),cartItemContainer:document.querySelector(".cart-item-container"),cartBtnDelAll:document.querySelector(".cart-btn-del-all"),cartEmptyContent:document.querySelector(".cart-yellow-container"),cartProductsSum:document.querySelector(".order-products-sum"),cartBtnDellContainer:document.querySelector(".cart-btn-wrap"),cartOrderProducts:document.querySelector(".order-products")};e.cartItemContainer.addEventListener("click",A);e.cartBtnDelAll.addEventListener("click",P);const u="basket";let r=h(u)??[];const k="amount";r.forEach(function(t){t[k]=t.amount||1});let s=r.length,p=v(r);B();function P(){e.cartItemContainer.innerHTML="",q(u),s=0,r=[],L(s),m(r),e.cartEmptyContent.classList.remove("visually-hidden"),e.cartBtnDellContainer.classList.add("visually-hidden"),e.cartOrderProducts.classList.add("visually-hidden")}function A(t){const o=t.target.closest("button");if(!o)return;const n=o.classList.value,c=t.target.closest(".cart-item"),a=t.target.closest(".cart-counter-wrap");switch(n){case"cart-btn-close":D(c);break;case"cart-counter-btn-minus":_(a,c);break;case"cart-counter-btn-plus":M(a,c);break}}function D(t){const o=t.dataset.id,n=r.findIndex(a=>a._id===o);if(r.splice(n,1),localStorage.setItem(u,JSON.stringify(r)),t.remove(),s-=1,s<4&&e.cartItemContainer.classList.remove("cart-scrol"),L(s),m(r),p=v(r),r.length===0){e.cartEmptyContent.classList.remove("visually-hidden"),e.cartBtnDellContainer.classList.add("visually-hidden"),e.cartOrderProducts.classList.add("visually-hidden");return}e.cartProductsSum.innerHTML=`$${String(p.toFixed(2))}`,e.cartEmptyContent.classList.add("visually-hidden"),e.cartBtnDellContainer.classList.remove("visually-hidden"),e.cartOrderProducts.classList.remove("visually-hidden")}function L(t){e.cartTitle.textContent=`cart (${t})`}function B(){if(L(s),!s){e.cartEmptyContent.classList.remove("visually-hidden"),e.cartBtnDellContainer.classList.add("visually-hidden"),e.cartOrderProducts.classList.add("visually-hidden");return}e.cartEmptyContent.classList.add("visually-hidden"),e.cartBtnDellContainer.classList.remove("visually-hidden"),e.cartOrderProducts.classList.remove("visually-hidden"),e.cartItemContainer.innerHTML=x(r),e.cartProductsSum.innerHTML=`$${String(p.toFixed(2))}`}function v(t){return t.reduce((n,c)=>n+c.price*c.amount,0)}function M(t,o){const n=t.children[1],c=parseInt(n.textContent);n.textContent=c+1;const a=o.dataset.id,i=r.findIndex(l=>l._id===a);r[i].amount=parseInt(n.textContent),localStorage.setItem(u,JSON.stringify(r));let d=v(r);e.cartProductsSum.innerHTML=`$${String(d.toFixed(2))}`}function _(t,o){const n=t.children[1],c=parseInt(n.textContent);if(c===1)return;n.textContent=c-1;const a=o.dataset.id,i=r.findIndex(l=>l._id===a);r[i].amount=parseInt(n.textContent),localStorage.setItem(u,JSON.stringify(r));let d=v(r);e.cartProductsSum.innerHTML=`$${String(d.toFixed(2))}`}const f=document.querySelector(".modal-backdrop-order"),F=document.querySelector(".modal-order-close"),I=document.querySelector(".modal-order"),C=document.querySelector("body"),H=C.style.overflow;function R(){f.classList.remove("is-hidden"),I.classList.add("visible-modal"),C.style.overflow="hidden",document.addEventListener("keydown",t=>t.key==="Escape"?S():null)}function S(t){f.classList.add("is-hidden"),I.classList.remove("visible-modal"),g("basket",[]),document.querySelector(".order-products-sum").textContent="$0.00",C.style.overflow=H}f.addEventListener("click",t=>{t.target===t.currentTarget&&S()});F.addEventListener("click",S);const O="basket",$=h(O)??[],b=document.querySelector(".order-products-form"),G=document.querySelector(".cart-yellow-container"),K=document.querySelector(".cart-content-wrap");b.addEventListener("submit",async t=>{t.preventDefault();const n=t.target.querySelector("#email").value,c=$.map(a=>({productId:a._id,amount:a.amount}));try{const a=await T({email:n,products:c});g(O,[]),m([]),R(),K.classList.add("visually-hidden"),G.classList.remove("visually-hidden")}catch(a){w(),console.log(a)}finally{b.reset()}});m($);
//# sourceMappingURL=commonHelpers.js.map
