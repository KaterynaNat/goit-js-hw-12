/* empty css                      */import{i,a as v,S as b}from"./assets/vendor-D73Uttp0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))p(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&p(n)}).observe(document,{childList:!0,subtree:!0});function l(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function p(t){if(t.ep)return;t.ep=!0;const s=l(t);fetch(t.href,s)}})();function L(r){return r.map(e=>`
            <li class="gallery-item">
                <a href="${e.largeImageURL}">
                <img class="galerry-img" src="${e.webformatURL}" alt="${e.tags}" width="360"/>
                </a>
                <div class="galerry-txt">
                    <div class="item-txt">
                        <p>Likes</p>
                        <span class="item-span">${e.likes}</span>
                    </div>
                    <div class="item-txt">
                        <p>Views</p>
                        <span class="item-span">${e.views}</span>
                    </div>
                    <div class="item-txt">
                        <p>Comments</p>
                        <span class="item-span">${e.comments}</span>
                    </div>
                    <div class="item-txt">
                        <p>Downloads</p>
                        <span class="item-span">${e.downloads}</span>
                    </div>
                </div>
            </li>
        `).join("")}const w="46809908-9f97c0ef37b027eaa1f813844",a=document.querySelector(".loader"),h=document.querySelector(".gallery-list"),o=document.querySelector(".load-btn");let m=1,f,d=0,c=0;function S(){m=1,c=0,a.classList.remove("unvisible"),o.classList.add("unvisible"),h.innerHTML="",y()}async function y(){let r=new URLSearchParams({key:w,q:`${localStorage.getItem("search")}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:m});await v.get(`https://pixabay.com/api/?${r}`).then(e=>{d=e.data.totalHits;const l=e.data.hits.length;l===0?(a.classList.add("unvisible"),i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"center",color:"#ca0000",messageColor:"white",close:!0,timeout:2e3,progressBar:!0,iconColor:"white",icon:!1,maxWidth:"300"})):(a.classList.add("unvisible"),h.insertAdjacentHTML("beforeend",L(e.data.hits)),c+=l,c>=d?(o.classList.add("unvisible"),i.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight",color:"blue",messageColor:"black",close:!0,timeout:2e3,progressBar:!0,iconColor:"white",icon:!1,maxWidth:"300"})):o.classList.remove("unvisible"))}).catch(e=>{a.classList.add("unvisible"),i.error({message:"Oooops, error. Please try again!",position:"center",color:"#ca0000",messageColor:"white",close:!0,timeout:2e3,progressBar:!0,iconColor:"white",icon:!1,maxWidth:"300"})}),f=new b(".gallery-item a",{disableScroll:!1,overlayOpacity:.9,disableRightClick:!0})}o.addEventListener("click",async()=>{if(c>=d){o.classList.add("unvisible"),i.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight",color:"blue",messageColor:"black",close:!0,timeout:2e3,progressBar:!0,iconColor:"white",icon:!1,maxWidth:"300"});return}a.classList.remove("unvisible"),o.classList.add("unvisible"),f.destroy(),m++,await y();const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:e*2,behavior:"smooth"})});const g=document.querySelector(".form"),C=document.querySelector(".input");let u=null;document.querySelector(".gallery");g.addEventListener("submit",r=>{r.preventDefault(),localStorage.removeItem("search"),u=C.value,u.trim()===""?i.error({message:"Enter your query",position:"center",color:"#ca0000",messageColor:"white",close:!1,timeout:1e3,progressBar:!1,iconColor:"white",con:!1}):(localStorage.setItem("search",u),S()),g.reset()});
//# sourceMappingURL=index.js.map
