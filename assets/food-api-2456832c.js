import{n as l,a}from"./vendor-424513b8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function f(o,t){localStorage.setItem(o,JSON.stringify(t))}function y(o){const t=localStorage.getItem(o);try{return JSON.parse(t)}catch{return l.Notify.failure("Oops! Something went wrong..."),t}}function p(o){const{keyword:t,category:s,page:n,limit:e,...r}=o,i=Object.keys(r).length,c=new URLSearchParams({page:n,limit:e});if(t&&c.set("keyword",t),s&&c.set("category",s),i){const[u,d]=Object.entries(r)[0];c.set(u,d)}return c}function m(o,t,s){const n=s.findIndex(e=>e._id===t._id);n!==-1?s.splice(n,1):s.push(t),f(o,s)}a.defaults.baseURL="https://food-boutique.b.goit.study/api";const h=async()=>{const{data:o}=await a.get("/products/categories");return o},w=async o=>{const t=p(o),{data:s}=await a.get("/products/",{params:t});return s},L=async o=>{const{data:t}=await a.get(`/products/popular?limit=${o}`);return t},O=async()=>{const{data:o}=await a.get("/products/discount");return o},S=async o=>{const{data:t}=await a.post("/orders",o);return t};export{S as a,O as b,h as c,w as d,L as g,y as l,f as s,m as u};
//# sourceMappingURL=food-api-2456832c.js.map
