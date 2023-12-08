import"./assets/styles-96fba96e.js";import{a as r}from"./assets/vendor-4d3d87e9.js";r.defaults.baseURL="https://food-boutique.b.goit.study/api";const i=async t=>{const{data:o}=await r.get(`/products/popular?limit=${t}`);return o};document.querySelector(".product-list");document.querySelector("input");document.querySelector(".btn-submit");document.querySelector(".product-list");document.querySelector(".photo-card");window.addEventListener("resize",function(t){});const n={popularList:document.querySelector(".popular-list")};function d(t){const o=t.map(({name:e,img:a,category:p,size:s,popularity:u,_id:c})=>`<li class="popular-item" data-id="${c}">
                    <div class="wrapper-img">
                        <img
                            src="${a}"
                            alt="${e}"
                        />
                    </div>
                    <div class="popular-product-info">
                        <h3 class="product-name">${e}</h3>
                        <p class="product-category">Category: <span>${p.replace("_"," ")}</span></p>
                        <div class="product-text">
                            <p>Size: <span>${s}</span></p>
                            <p>Popularity: <span>${u}</span></p>
                        </div>
                    </div>
                </li>`);n.popularList.insertAdjacentHTML("beforeend",o.join(""))}const l=5;i(l).then(t=>d(t));
//# sourceMappingURL=commonHelpers2.js.map
