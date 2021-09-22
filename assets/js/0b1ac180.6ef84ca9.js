"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[872],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=s(r),h=o,d=f["".concat(l,".").concat(h)]||f[h]||p[h]||c;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<c;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1215:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var n=r(7462),o=r(3366),c=(r(7294),r(3905)),a=["components"],i={sidebar_position:1},l="Overview",s={unversionedId:"architecture/overview",id:"architecture/overview",isDocsHomePage:!1,title:"Overview",description:"Metaplex is actually not a single contract, but a contract ecosystem, consisting of four contracts that interact with one another. Only one of the contracts (Metaplex) actually knows about the other three, while the others represent primitives in the ecosystem and do not interact with each other at all. First, we'll go over what each contract does at a glance, and then we'll cover the full life cycle of a token becoming an NFT and getting auctioned to see the ecosystem in action. Following that will be modules for each contract.",source:"@site/docs/architecture/overview.md",sourceDirName:"architecture",slug:"/architecture/overview",permalink:"/docs/docs/architecture/overview",editUrl:"https://github.com/metaplex/docs/docs/architecture/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Installation",permalink:"/docs/docs/create-store/installation"},next:{title:"The Contracts",permalink:"/docs/docs/architecture/contracts"}},u=[],p={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"overview"},"Overview"),(0,c.kt)("p",null,"Metaplex is actually not a single contract, but a contract ecosystem, consisting of four contracts that interact with one another. Only one of the contracts (Metaplex) actually knows about the other three, while the others represent primitives in the ecosystem and do not interact with each other at all. First, we'll go over what each contract does at a glance, and then we'll cover the full life cycle of a token becoming an NFT and getting auctioned to see the ecosystem in action. Following that will be modules for each contract."))}f.isMDXComponent=!0}}]);