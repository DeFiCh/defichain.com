(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[396],{1173:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/privacy-policy",function(){return n(3281)}])},6475:function(e,t,n){"use strict";n.d(t,{F:function(){return s}});var l=n(5893),r=n(9138),i=n.n(r),c=n(9008),a=n.n(c);function s(e){let t=void 0!==e.title?"".concat(e.title," – DeFiChain"):void 0,n=void 0!==e.description?i()(e.description,{length:220}):void 0;return(0,l.jsxs)(a(),{children:[void 0!==t&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("title",{children:t},"title"),(0,l.jsx)("meta",{name:"og:title",content:t},"og:title")]}),void 0!==n&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("meta",{name:"description",content:n},"description"),(0,l.jsx)("meta",{name:"og:description",content:n},"og:description")]}),e.children]})}},1701:function(e,t,n){"use strict";n.d(t,{T:function(){return c}});var l=n(5893),r=n(3967),i=n.n(r);function c(e){let{text:t,customStyle:n,testID:r}=e;return(0,l.jsx)("div",{"data-testid":"section-desc-".concat(r),className:i()("font-desc tracking-[0.03em] text-base text-dark-700","lg:text-xl lg:leading-8 lg:tracking-normal",n),children:t})}},9980:function(e,t,n){"use strict";n.d(t,{V:function(){return c}});var l=n(5893),r=n(3967),i=n.n(r);function c(e){let{text:t,customStyle:n,testID:r}=e;return(0,l.jsx)("h1",{"data-testid":"section-header-".concat(r),className:i()("text-dark-1000 text-[40px] leading-[44px] tracking-[-0.02em]","md:text-5xl md:leading-[52px] md:tracking-normal","lg:text-[80px] lg:leading-[84px] md:tracking-normal",n),children:t})}},3078:function(e,t,n){"use strict";n.d(t,{N:function(){return c}});var l=n(5893),r=n(3967),i=n.n(r);function c(e){let{text:t,customStyle:n,testID:r}=e;return(0,l.jsx)("h3",{"data-testid":"section-title-".concat(r),className:i()("accent-gradient-1 text-transparent bg-clip-text font-mono","leading-[18px] lg:leading-4 tracking-[0.04em] text-base",null!=n?n:"w-fit"),children:t})}},3281:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return N},default:function(){return w}});var l=n(5893),r=n(938),i=n(7294),c=n(3078),a=n(9980),s=n(1701),o=n(3967),d=n.n(o),x=n(6199),u=n(9234),g=n(7545),p=n(5772),f=n(2276),m=n(6475),h=n(3233);function v(e){let{headings:t,activeId:n,parentReference:r}=e,{t:i}=(0,h.$)("page-privacypolicy");return(0,l.jsxs)("ul",{className:"lg:w-9/12",children:[(0,l.jsx)("li",{className:"mb-6",children:(0,l.jsx)("a",{className:"font-sans font-bold text-xl",children:i("content.outline")})}),t.map((e,t)=>(0,l.jsx)("li",{className:d()("mb-6",{active:e.id===n}),children:(0,l.jsx)("a",{href:"#".concat(e.id),"data-testid":"link-".concat(e.id),className:d()("font-sans font-semibold text-[18px] leading-6 text-dark-500",{"!text-brand-100":e.id===n}),onClick:()=>{r.current.querySelector("#".concat(e.id)).scrollIntoView({behavior:"smooth"})},children:"".concat(t+1,". ").concat(e.title)})},e.id))]})}let b=e=>{let[t,n]=(0,i.useState)([]);return(0,i.useEffect)(()=>{let t=Array.from(e.current.querySelectorAll("main h2")),l=j(t);n(l)},[]),{nestedHeadings:t}},j=e=>{let t=[];return e.forEach(e=>{let{title:n,id:l}=e;""!==n&&"H2"===e.nodeName&&t.push({id:l,title:n})}),t},k=(e,t)=>{let n=(0,i.useRef)({});(0,i.useEffect)(()=>{if(null===t.current)return()=>{};let l=Array.from(t.current.querySelectorAll("h2[id]")),r=new IntersectionObserver(t=>{var r,i;n.current=t.reduce((e,t)=>(e[t.target.id]=t,e),n.current);let c=[];Object.keys(n.current).forEach(e=>{let t=n.current[e];t.isIntersecting&&c.push(t)});let a=e=>l.findIndex(t=>(null==t?void 0:t.id)===e);if(1===c.length)e(null===(r=c[0])||void 0===r?void 0:r.target.id);else if(c.length>1){let t=c.sort((e,t)=>a(e.target.id)-a(t.target.id));e(null===(i=t[0])||void 0===i?void 0:i.target.id)}},{root:null,rootMargin:"-15% 0% -65% 0px"});return l.forEach(e=>r.observe(e)),()=>r.disconnect()},[e])};function y(e){let{parentReference:t}=e,[n,r]=(0,i.useState)(),{nestedHeadings:c}=b(t);return k(r,t),(0,l.jsx)(v,{headings:c,activeId:n,parentReference:t})}var N=!0;function w(e){let{post:t}=e,{t:n}=(0,h.$)("page-privacypolicy"),o=(0,i.useRef)(null);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(m.F,{title:n("Header.subtitle")}),(0,l.jsx)("div",{className:"py-8 md:py-8 lg:py-16 border-b border-gray-800 border-opacity-50",children:(0,l.jsxs)(r.W,{className:"flex flex-row gap-x-12 relative",children:[(0,l.jsx)("div",{className:"absolute lg:block hidden w-[417px] h-[324px] top-[-158px] left-[-267px] md:top-[-42px] md:left-[-110px] lg:h-[297px] bg-contain bg-no-repeat mix-blend-screen bg-[url(/assets/img/common/emptyCubeDesktop.png)]"}),(0,l.jsx)("div",{className:"hidden lg:block md:w-3/12 flex-1"}),(0,l.jsx)("div",{className:"flex flex-col w-full lg:w-9/12 lg:px-2",children:(0,l.jsxs)("div",{className:d()("flex flex-col gap-y-5 w-full lg:w-[812px]"),children:[(0,l.jsx)(c.N,{text:n("Header.sectionTitle"),testID:"privacy-policy-protecting"}),(0,l.jsx)(a.V,{text:n("Header.subtitle"),testID:"privacy-policy-protecting"}),(0,l.jsx)(s.T,{text:n("Header.desc"),customStyle:"!text-base !tracking-[.03em] lg:!tracking-normal lg:!text-xl lg:!leading-7",testID:"privacy-policy-protecting"})]})})]})}),(0,l.jsxs)(r.W,{className:"flex flex-row mb-[72px] md:mb-[96px] lg:mb-[184px]",children:[(0,l.jsx)("div",{className:"hidden h-full sticky top-[100px] lg:block md:w-3/12 lg:pt-[64px] flex-1",children:(0,l.jsx)(y,{parentReference:o})}),(0,l.jsx)("div",{className:"flex flex-col w-full mt-8 lg:mt-0 lg:pt-16 lg:w-9/12 lg:pl-2",children:(0,l.jsx)("div",{ref:o,className:d()("text-dark-1000 font-desc break-words","text-base tracking-[0.03em]","lg:text-xl lg:tracking-normal lg:leading-8","lg:w-11/12"),children:(0,l.jsx)(p.D,{remarkPlugins:[x.Z],rehypePlugins:[f.Z,[g.Z,{behavior:"wrap",properties:{className:["no-underline hover:underline"]}}],[u.Z]],children:t.content})})})]})]})}}},function(e){e.O(0,[138,400,234,774,888,179],function(){return e(e.s=1173)}),_N_E=e.O()}]);