(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[429],{1481:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/explore/dex",function(){return l(5491)}])},9287:function(e,t,l){"use strict";l.d(t,{s:function(){return d}});var s=l(5893),i=l(2024),n=l(7857),a=l(3967),r=l.n(a),o=l(1163);function d(e){let{displayId:t,displayStripCustomStyle:l,displayItem:i}=e,n=i.length<=2;return(0,s.jsx)("section",{id:t,className:r()("card-outline-2 p-[0.5px] rounded-[30px]",l),children:(0,s.jsx)("div",{className:"card-bg rounded-[30px] py-10 px-6",children:(0,s.jsx)("div",{className:r()("flex lg:flex-row flex-col gap-y-4",{"md:flex-row":n}),children:i.map((e,t)=>(0,s.jsx)(c,{title:e.title,stats:e.stats,desc:e.desc,prefix:e.prefix,descStyle:e.descStyle,isTabletHorizontal:n,testID:e.testID},t))})})})}function c(e){let{title:t,stats:l,desc:a,prefix:d,descStyle:c,testID:x,isTabletHorizontal:p=!1}=e,u=(0,o.useRouter)(),{suffix:g,value:m}=(0,i.O)(void 0===l?"N/A":l.toString());return(0,s.jsxs)("article",{className:r()("flex lg:grow grow-0 lg:flex-col flex-row lg:items-center items-start gap-y-2 gap-x-2",{"md:flex-col md:items-center md:grow":p}),children:[(0,s.jsx)("div",{className:r()("lg:w-full md:w-[316px] w-[135px] lg:text-center bg-clip-text text-transparent accent-gradient-2 font-bold leading-5",{"md:w-full md:text-center":p}),"data-testid":"statistic-title-".concat(x),children:t}),(0,s.jsxs)("div",{className:r()("flex flex-col lg:items-center items-end lg:gap-y-2 gap-y-1 lg:grow-0 grow",{"md:items-center md:gap-y-2 md:grow-0":p}),children:[(0,s.jsx)("div",{className:r()("text-dark-1000 text-xl leading-6 lg:text-[52px] lg:leading-[52px]",{"md:text-[32px] md:leading-[36px]":p}),children:l?"de"===u.locale?(0,s.jsxs)(s.Fragment,{children:[""!==g?" ":"",(0,s.jsx)(n.ZP,{onUpdate:e=>{let{reset:t,start:l}=e;t(),l()},end:Number(m),enableScrollSpy:!0,duration:.5})," ",null!=g?g:""," ",null!=d?d:""," "]}):(0,s.jsxs)(s.Fragment,{children:[null!=d?d:"",(0,s.jsx)(n.ZP,{onUpdate:e=>{let{reset:t,start:l}=e;t(),l()},end:Number(m),enableScrollSpy:!0,duration:.5}),""!==g?"".concat(g):""]}):(0,s.jsx)(s.Fragment,{children:"N/A"})}),void 0!==a&&(0,s.jsx)("div",{className:r()("font-desc text-dark-700 lg:text-base lg:leading-6 md:text-sm text-xs text-right",c),children:a})]})]})}},2024:function(e,t,l){"use strict";l.d(t,{O:function(){return r}});var s=l(794),i=l(1163);let n={3:"K+",6:"M+",9:"B+",12:"T+"},a={3:"Tsd.",6:"Mio.",9:"Mrd.",12:"Bio."};function r(e){var t,l;let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=(0,i.useRouter)(),d=(0,s.Z)(e),c=null!==d.e?Math.floor(d.e/3):0,x="";x="de"===o.locale?"".concat(null!==(t=a[3*c])&&void 0!==t?t:""):"".concat(null!==(l=n[3*c])&&void 0!==l?l:"");let p={suffix:x,value:e};return x&&(p.value=d.dividedBy(1e3**c).toFormat(r)),p}},5491:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return f}});var s=l(5893),i=l(2751),n=l(6475),a=l(3233),r=l(7294),o=l(938),d=l(9287),c=l(9204);function x(){let e=(0,c.k)(),[t,l]=(0,r.useState)(),[i,n]=(0,r.useState)(void 0),[x,g]=(0,r.useState)(void 0),{t:m}=(0,a.$)("page-explore-dex");(0,r.useEffect)(()=>{e.stats.get().then(e=>{l(e)}).catch(e=>console.error(e)),p(e).then(e=>{n(e)}).catch(e=>console.error(e)),u(e).then(e=>{g(e)}).catch(e=>console.error(e))},[e,e.poolpairs,e.stats,e.tokens]);let h=[{title:m("statisticsDisplay.totalValueLocked.title"),prefix:"$",stats:null==t?void 0:t.tvl.dex,testID:"total-value-locked"},{title:m("statisticsDisplay.tradingVolume.title"),prefix:"$",stats:i,testID:"trading-volume"},{title:m("statisticsDisplay.tokens.title"),stats:x,testID:"statistics-display-tokens"}];return(0,s.jsx)(o.W,{className:"lg:mt-[69px] md:mt-[33px] mt-0 lg:mb-[180px] mb-[72px]",children:(0,s.jsx)(d.s,{displayItem:h,displayStripCustomStyle:"-scroll-mt-[100px]",displayId:"explore-dex-statistics-display"})})}async function p(e){let t;let l=[],s=!1;do{let i=await e.poolpairs.list(200,t);l.push(...i),s=i.hasNext,t=i.nextToken}while(s);return l.reduce((e,t)=>{var l,s;return e+(null!==(s=null===(l=t.volume)||void 0===l?void 0:l.h24)&&void 0!==s?s:0)},0)}async function u(e){let t;let l=[],s=!1;do{let i=await e.tokens.list(200,t);l.push(...i),s=i.hasNext,t=i.nextToken}while(s);let i=l.filter(e=>e.isLPS||e.isDAT);return i.length}var g=l(4469),m=l(8566);function h(){let{t:e}=(0,a.$)("page-explore-dex"),t=[{title:e("whyDEX.trade.title"),desc:e("whyDEX.trade.desc"),icon:m.Q.TRADE_ASSETS},{title:e("whyDEX.wideSelection.title"),desc:e("whyDEX.wideSelection.desc"),icon:m.Q.WIDE_SELECTION_OF_TOKENS},{title:e("whyDEX.mineLiquidity.title"),desc:e("whyDEX.mineLiquidity.desc"),icon:m.Q.PROFIT_FROM_LIQUIDITY_MINING},{title:e("whyDEX.advancedSwaps.title"),desc:e("whyDEX.advancedSwaps.desc"),icon:m.Q.ADVANCED_SWAPS}];return(0,s.jsx)(g.q,{title:e("whyDEX.title"),description:e("whyDEX.desc"),buttonText:e("whyDEX.button"),isSecondaryButton:!0,href:"https://defiscan.live/dex",testID:"explore-dex",children:(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)(m.n,{items:t,id:"tablet-desktop-screen",customClassStyle:"flex-col",customParagraphStyle:"mt-[25px]",customSectionStyle:"gap-y-[60px]"}),(0,s.jsx)("div",{className:"absolute h-8 w-8 right-[-15px] sm:top-[-70px] md:-right-10 md:top-0 lg:h-[45px] lg:w-[45px] lg:top-[-50px] lg:right-[-22px] bg-contain bg-no-repeat mix-blend-screen bg-[url('/assets/img/explore/cross-accent-6.png')]"}),(0,s.jsx)("div",{className:"absolute left-[200px] opacity-70 top-0 h-[445.91px] w-[290.56px] rotate-90 md:left-[500px] bg-contain bg-no-repeat mix-blend-screen bg-[url('/assets/img/explore/grid-accent-6.png')]"})]})})}function f(){let{t:e}=(0,a.$)("page-explore-dex");return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.F,{title:e("heroBanner.subtitle")}),(0,s.jsx)(i.y,{title:e("heroBanner.title"),subtitle:e("heroBanner.subtitle"),desc:e("heroBanner.desc"),heroBg:i.N.DIAMOND_COIN,hasStartExploringButton:!0,startExploringJumpLink:"#explore-dex-statistics-display",testID:"explore-dex-decentralized-exchange"}),(0,s.jsx)(x,{}),(0,s.jsx)(h,{})]})}}},function(e){e.O(0,[138,492,373,774,888,179],function(){return e(e.s=1481)}),_N_E=e.O()}]);