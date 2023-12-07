import"./assets/styles-97682b21.js";import{a as l}from"./assets/vendor-4d3d87e9.js";function g(t){const{keyword:e,category:s,page:o,limit:c,...r}=t,p=Object.keys(r).length,n=new URLSearchParams({page:o,limit:c});if(e&&n.set("keyword",e),s&&n.set("category",s),p){const[f,y]=Object.entries(r)[0];n.set(f,y)}return n}l.defaults.baseURL="https://food-boutique.b.goit.study/api";const m=async t=>{const e=g(t),{data:s}=await l.get("/products/",{params:e});return s},h="/Code-Storm/assets/sprite-f073391d.svg";function k(){return`<div class="info-query">
                <h3 class="info-text">Nothing was found for the selected <span class="info-word">filters...</span></h3>
                <p class="info-message">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.</p>
              </div>`}function b(t){return t.map(e=>{let s=v(e.category);return`<li class="resp-item">
        <a class="img-link" href="${e.img}">
          <img class="photo" src="${e.img}" alt="${e.name}" loading="lazy"/>
        </a>
        <h2 class="name-product">${e.name}</h2>
        <div class="descr-product">
          <p class="category-product"><span class="style-word">Category:</span>${s}</p>
          <p class="size-product"><span class="style-word">Size:</span>${e.size}</p>
          <p class="popular-product"><span class="style-word">Popularity:</span>${e.popularity}</p>
        </div>
        <div class="footer-product_card">
          <p class="price-product">$${e.price}</p>
          <svg class="svg-basket" width="34" height="34">
            <use class="href-icon" href="${h}#icon-basket"></use>
          </svg>
        </div>
      </li>`}).join("")}function v(t){return t.replace(/_/g," ")}const w=document.querySelector("input"),S=document.querySelector(".btn-submit");document.querySelector(".product-list");const a=document.querySelector(".photo-card");let i=6,I=0;function u(){let t=window.innerWidth;t<=375?i=6:t>=375&&t<=768?i=8:i=9}u();window.addEventListener("resize",function(t){u()});S.addEventListener("click",$);async function $(t){t.preventDefault(),w.value.trim();try{const e=await m({keyword:null,category:null,page:1,limit:i,byABC:!1});let s=e.results,o=s.length;if(I=e.totalPages,o>0)a.innerHTML="",a.insertAdjacentHTML("beforeend",b(s)),document.querySelectorAll(".svg-basket").forEach(r=>{r.addEventListener("click",d)});else{a.innerHTML="";const c=k();a.insertAdjacentHTML("beforeend",c)}q()}catch(e){console.error(e)}}function q(){document.querySelectorAll(".svg-basket").forEach(e=>{e.addEventListener("click",d)})}function d(t){const e=t.currentTarget.closest(".resp-item");if(e){const s=e.querySelector(".name-product").textContent,o=e.querySelector(".price-product").textContent,c={name:s,price:o};localStorage.setItem(s,JSON.stringify(c));const r=e.querySelector(".href-icon");r&&r.setAttribute("href",`${sprite}#icon-checkmark`)}}
//# sourceMappingURL=commonHelpers2.js.map
