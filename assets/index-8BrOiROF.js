var f=Object.defineProperty;var k=(e,t,i)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var u=(e,t,i)=>k(e,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))y(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&y(a)}).observe(document,{childList:!0,subtree:!0});function i(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function y(o){if(o.ep)return;o.ep=!0;const l=i(o);fetch(o.href,l)}})();class n{constructor(t){u(this,"mhBlock");this.mhBlock=t}show(t=!1,i=!0){t?t==="fade"?this.showFade():t==="top"?this.showTop():t==="bottom"?this.showBottom():t==="left"?this.showLeft():t==="right"?this.showRight():t==="zoom"&&this.showZoom():this.showWithoutAnimation(),i?this.mhBlock.style.backgroundColor="rgba(0, 0, 0, 0.5)":this.mhBlock.style.backgroundColor="transparent"}hide(t=!1){t?t==="fade"?this.hideFade():t==="top"?this.hideTop():t==="left"?this.hideLeft():t==="right"?this.hideRight():t==="bottom"?this.hideBottom():t==="zoom"&&this.hideZoom():this.hideWithoutAnimation(),this.mhBlock.style.backgroundColor="transparent"}showWithoutAnimation(){this.mhBlock.style.opacity="1",this.mhBlock.style.display="block"}showFade(){this.mhBlock.style.display="block",setTimeout(()=>{this.mhBlock.style.opacity="1"})}showTop(){const t=this.mhBlock.querySelector(".modal-helper-content-block");this.mhBlock.style.display="block",t.style.transform="translate(-50%, calc(-50% - 50px))",setTimeout(()=>{this.mhBlock.style.opacity="1",t.style.transform="translate(-50%, -50%)"})}showBottom(){const t=this.mhBlock.querySelector(".modal-helper-content-block");this.mhBlock.style.display="block",t.style.transform="translate(-50%, calc(-50% + 50px))",setTimeout(()=>{this.mhBlock.style.opacity="1",t.style.transform="translate(-50%, -50%)"})}showLeft(){const t=this.mhBlock.querySelector(".modal-helper-content-block");this.mhBlock.style.display="block",t.style.transform="translate(calc(-50% - 50px), -50%)",setTimeout(()=>{this.mhBlock.style.opacity="1",t.style.transform="translate(-50%, -50%)"})}showRight(){const t=this.mhBlock.querySelector(".modal-helper-content-block");this.mhBlock.style.display="block",t.style.transform="translate(calc(-50% + 50px), -50%)",setTimeout(()=>{this.mhBlock.style.opacity="1",t.style.transform="translate(-50%, -50%)"})}showZoom(){const t=this.mhBlock.querySelector(".modal-helper-content-block");this.mhBlock.style.display="block",t.style.transform="translate(-50%, -50%) scale(0.7)",setTimeout(()=>{this.mhBlock.style.opacity="1",t.style.transform="translate(-50%, -50%) scale(1)"})}hideWithoutAnimation(){this.mhBlock.style.opacity="0",this.mhBlock.style.display="none"}hideFade(){this.mhBlock.style.opacity="0",setTimeout(()=>{this.mhBlock.style.display="none"},200)}hideTop(){const t=this.mhBlock.querySelector(".modal-helper-content-block");this.mhBlock.style.opacity="0",t.style.transform="translate(-50%, calc(-50% - 50px))",setTimeout(()=>{this.mhBlock.style.display="none",t.style.transform="translate(-50%, -50%)"},200)}hideBottom(){const t=this.mhBlock.querySelector(".modal-helper-content-block");this.mhBlock.style.opacity="0",t.style.transform="translate(-50%, calc(-50% + 50px))",setTimeout(()=>{this.mhBlock.style.display="none",t.style.transform="translate(-50%, -50%)"},200)}hideLeft(){const t=this.mhBlock.querySelector(".modal-helper-content-block");this.mhBlock.style.opacity="0",t.style.transform="translate(calc(-50% - 50px), -50%)",setTimeout(()=>{this.mhBlock.style.display="none",t.style.transform="translate(-50%, -50%)"},200)}hideRight(){const t=this.mhBlock.querySelector(".modal-helper-content-block");this.mhBlock.style.opacity="0",t.style.transform="translate(calc(-50% + 50px), -50%)",setTimeout(()=>{this.mhBlock.style.display="none",t.style.transform="translate(-50%, -50%)"},200)}hideZoom(){const t=this.mhBlock.querySelector(".modal-helper-content-block");this.mhBlock.style.opacity="0",t.style.transform="translate(-50%, -50%) scale(0.7)",setTimeout(()=>{this.mhBlock.style.display="none",t.style.transform="translate(-50%, -50%) scale(1)"},200)}}const s=document.querySelector(".modal-helper"),m=document.querySelector(".modal-helper-content-block"),d=document.querySelector(".modal-helper-content-block .button-close"),p=document.querySelector(".btn-no-anim"),b=document.querySelector(".btn-fade"),B=document.querySelector(".btn-zoom"),w=document.querySelector(".btn-top"),L=document.querySelector(".btn-bottom"),g=document.querySelector(".btn-right"),q=document.querySelector(".btn-left"),h=document.querySelector(".checkbox-blackout");let c=!1,r=!1;s==null||s.addEventListener("click",()=>{new n(s).hide(r)});d==null||d.addEventListener("click",()=>{new n(s).hide(r)});document.addEventListener("keydown",e=>{e.key==="Escape"&&new n(s).hide(r)});m==null||m.addEventListener("click",e=>{e.stopPropagation()});h==null||h.addEventListener("click",()=>{c?(c=!1,h.classList.replace("checked","unchecked")):(c=!0,h.classList.replace("unchecked","checked"))});p.addEventListener("click",()=>{new n(s).show(!1,c),r=!1});b.addEventListener("click",()=>{new n(s).show("fade",c),r="fade"});B.addEventListener("click",()=>{new n(s).show("zoom",c),r="zoom"});w.addEventListener("click",()=>{new n(s).show("top",c),r="top"});L.addEventListener("click",()=>{new n(s).show("bottom",c),r="bottom"});q.addEventListener("click",()=>{new n(s).show("left",c),r="left"});g.addEventListener("click",()=>{new n(s).show("right",c),r="right"});
