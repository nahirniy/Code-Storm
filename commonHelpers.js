import{s as a,l as n,a as l}from"./assets/food-api-2456832c.js";import"./assets/vendor-424513b8.js";function m(){const e=document.querySelector(".modal-backdrop-order"),r=document.querySelector(".modal-order");e.classList.remove("is-hidden"),r.classList.remove("is-hidden")}const u=document.querySelector(".modal-order-close");u.addEventListener("click",e=>{const r=document.querySelector(".modal-backdrop-order"),o=document.querySelector(".modal-order");r.classList.add("is-hidden"),o.classList.add("is-hidden"),a("basket",[]),document.querySelector(".order-products-sum").textContent="$0.00"});const i="basket",s=n(i)??[],S=s.reduce((e,r)=>e+r.price,0),p=document.querySelector(".order-products-sum");p.textContent=`$${String(S.toFixed(2))}`;const c=document.querySelector(".order-products-form");c.addEventListener("submit",e=>{e.preventDefault();const o=e.target.querySelector("#email").value;console.log("Order Details:"),console.log("Email:",o);const d=s.map(t=>({productId:t._id,amount:t.price}));l({email:o,products:d}).then(()=>{m()}).catch(t=>{}),c.reset()});
//# sourceMappingURL=commonHelpers.js.map
