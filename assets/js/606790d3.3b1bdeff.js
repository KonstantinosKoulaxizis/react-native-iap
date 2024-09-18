"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1964],{5680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>h});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),l=p(r),m=a,h=l["".concat(c,".").concat(m)]||l[m]||u[m]||s;return r?n.createElement(h,i(i({ref:t},d),{},{components:r})):n.createElement(h,i({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[l]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8663:(e,t,r)=>{r.d(t,{A:()=>a});var n=r(6540);function a(e){let{className:t="adfit",style:r,unit:a,height:s,width:i}=e;return(0,n.useEffect)((()=>{let e=document.createElement("ins"),r=document.createElement("script");e.className="kakao_ad_area",e.style="display:none; width:100%;",r.async="true",r.type="text/javascript",r.src="//t1.daumcdn.net/kas/static/ba.min.js",e.setAttribute("data-ad-width",i.toString()),e.setAttribute("data-ad-height",s.toString()),e.setAttribute("data-ad-unit",a.toString()),document.querySelector(`.${t}`).appendChild(e),document.querySelector(`.${t}`).appendChild(r)}),[]),n.createElement("div",{style:r},n.createElement("div",{className:t}))}},1748:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(6540),a=r(8663);function s(){return n.createElement(a.A,{unit:"DAN-YTmjDwlbcP42HBg6",height:100,width:320,className:"adfit-top",style:{flex:1,marginTop:24,marginBottom:24}})}},1206:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=r(8168),a=(r(6540),r(5680)),s=r(1748);const i={title:"Purchase Updated Listener",sidebar_label:"purchaseUpdatedListener",sidebar_position:11},o=void 0,c={unversionedId:"api-reference/methods/listeners/purchase-updated-listener",id:"api-reference/methods/listeners/purchase-updated-listener",title:"Purchase Updated Listener",description:"Register a callback that gets called when the store has any updates to purchases that have not yet been finished, consumed or acknowledged. Returns a React Native EmitterSubscription on which you can call .remove() to stop receiving updates. Register you listener as soon as possible and react to updates at all times.",source:"@site/docs/api-reference/methods/listeners/purchase-updated-listener.mdx",sourceDirName:"api-reference/methods/listeners",slug:"/api-reference/methods/listeners/purchase-updated-listener",permalink:"/docs/api-reference/methods/listeners/purchase-updated-listener",draft:!1,editUrl:"https://github.com/dooboolab-community/react-native-iap/edit/main/docs/docs/api-reference/methods/listeners/purchase-updated-listener.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Purchase Updated Listener",sidebar_label:"purchaseUpdatedListener",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"purchaseErrorListener",permalink:"/docs/api-reference/methods/listeners/purchase-error-listener"},next:{title:"promotedProductListener",permalink:"/docs/api-reference/methods/listeners/promoted-product-listener"}},p={},d=[{value:"Signature",id:"signature",level:2},{value:"Usage",id:"usage",level:2}],l={toc:d},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)(s.A,{mdxType:"AdFitTopFixed"}),(0,a.yg)("h1",{id:"purchaseupdatedlistener"},(0,a.yg)("inlineCode",{parentName:"h1"},"purchaseUpdatedListener")),(0,a.yg)("p",null,"Register a callback that gets called when the store has any updates to purchases that have not yet been finished, consumed or acknowledged. Returns a React Native ",(0,a.yg)("inlineCode",{parentName:"p"},"EmitterSubscription")," on which you can call ",(0,a.yg)("inlineCode",{parentName:"p"},".remove()")," to stop receiving updates. Register you listener as soon as possible and react to updates at all times."),(0,a.yg)("h2",{id:"signature"},"Signature"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"purchaseUpdatedListener((purchase: Purchase) => {});\n")),(0,a.yg)("h2",{id:"usage"},"Usage"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import React, {useEffect} from 'react';\nimport {View} from 'react-native';\nimport {purchaseUpdatedListener} from 'react-native-iap';\n\nconst App = () => {\n  useEffect(() => {\n    const subscription = purchaseUpdatedListener((purchase: Purchase) => {\n      console.log(purchase);\n    });\n\n    return () => {\n      subscription.remove();\n    };\n  }, []);\n\n  return <View />;\n};\n")))}m.isMDXComponent=!0}}]);