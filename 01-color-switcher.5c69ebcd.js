const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),a=document.body;let n=null;function o(){a.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}t.addEventListener("click",(()=>{o(),n=setInterval(o,1e3)})),e.addEventListener("click",(()=>{clearInterval(n)}));
//# sourceMappingURL=01-color-switcher.5c69ebcd.js.map
