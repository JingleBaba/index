import{g as i,T as m,r as f,o as d,c as p,a as s,b as l,t as g,S as _,M as h,d as y,e as x,f as v,h as b}from"./vendor.8ec47068.js";const T=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}};T();var w="/shopify-prismic/assets/paper-plane.cbad8e74.png",u=(t,r)=>{const o=t.__vccOpts||t;for(const[a,e]of r)o[a]=e;return o};i.registerPlugin(m);const S={setup(){const t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],r=new Date().getDay();return{today:f(t[r])}},mounted(){i.to("#cursor",{opacity:0,repeat:-1});const t=i.timeline({repeat:-1});["amazing","superb","Fantastic","Bravo"].forEach(o=>{const a=i.timeline({yoyo:!0,repeat:1});a.to("#greet",{duration:2,text:o}),t.add(a)})}},$={className:"font-poppins bg-red-200 w-full text-banner h-screen grid place-items-center content-center",id:"first"},N=s("h1",{class:"font-medium leading-tight text-5xl mt-0 mb-5 relative"},[s("img",{src:w,class:"paper-plane w-20 absolute top-5 -left-28"}),l(" Hi, Welcome")],-1),P=s("h2",{class:"headingText font-medium leading-tight text-8xl mt-0 mb-5"},"Stay Bold ",-1),B={class:"headingText font-medium leading-tight text-8xl mt-0 mb-5"},W=l("Have a "),k=s("span",{id:"cursor"},"_",-1),L=s("span",{id:"greet"},null,-1);function O(t,r,o,a,e,n){return d(),p("div",$,[N,P,s("h2",B,[W,k,L,l(" "+g(a.today),1)])])}var A=u(S,[["render",O]]);i.registerPlugin(_,h);const M={components:{TextBanner:A},mounted(){const t=i.timeline({scrollTrigger:{trigger:".text-banner",pin:!0,scrub:1,pinSpacer:!1,pinSpacing:!1}});t.fromTo(".headingText",{opacity:1},{duration:2,opacity:0}),t.to(".paper-plane",{duration:15,delay:-2,motionPath:{path:[{x:window.innerWidth/8*3,y:100},{x:window.innerWidth/8*4,y:-100},{x:window.innerWidth/8*3,y:-50},{x:window.innerWidth/8*5,y:-800}],curviness:2,autoRotate:!0}}),t.to("#first",{duration:1,y:550,delay:-9})}},D={className:"font-poppins animation-container",style:{"min-height":"160vh"}};function E(t,r,o,a,e,n){const c=y("text-banner");return d(),p("div",D,[x(c)])}var F=u(M,[["render",E]]);const V={setup(t){return(r,o)=>(d(),v(F))}};b(V).mount("#app");