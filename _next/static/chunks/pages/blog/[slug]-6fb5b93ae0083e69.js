(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{9937:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return r(4630)}])},4500:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(5893);function i(e){let{children:t,onClick:r,className:i}=e;return(0,n.jsx)("button",{className:"transition-opacity duration-300 hover:bg-transparent bg-opacity-5 dark:bg-opacity-5 border border-opacity-50 rounded p-2 font-medium ".concat(i),onClick:r,children:t})}},1087:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(5893),i=r(7294),o=r(5678),l=r(5639),s=r(4500);function a(){let[e,t]=function(){let e=(0,l.Z)(),[t,r]=(0,o._)("dark-mode-enabled"),n=function(e,t,r){let n=(0,l.Z)(),o=e.map(e=>null==n?void 0:n.matchMedia(e)),s=()=>{let e=o.findIndex(e=>null==e?void 0:e.matches);return void 0!==t[e]?t[e]:r},[a,c]=(0,i.useState)(s);return(0,i.useEffect)(()=>{let e=()=>c(s);return o.forEach(t=>t.addListener(e)),()=>o.forEach(t=>t.removeListener(e))},[]),a}(["(prefers-color-scheme: dark)"],[!0],!1),s=void 0!==t?t:n;(0,i.useEffect)(()=>{let e="dark";s?document.documentElement.classList.add(e):document.documentElement.classList.remove(e)},[s,e]);let a=(0,i.useCallback)(()=>{r(e=>!e)},[r]);return[s,a]}();return(0,n.jsx)(s.Z,{"aria-label":"Toggle Dark Mode",className:"text-indigo-800 dark:text-yellow-300 bg-indigo-800 dark:bg-yellow-300 border-indigo-800 dark:border-yellow-300 dark:bg-opacity-10 px-2 py-2",onClick:t,children:e?(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}):(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})})}},4050:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(5893),i=r(9008),o=r.n(i);r(7294);var l=r(1664),s=r.n(l),a=r(1087);function c(){return(0,n.jsxs)("header",{className:"pb-12 flex justify-between items-baseline",children:[(0,n.jsx)(s(),{href:"/",legacyBehavior:!0,children:(0,n.jsxs)("div",{className:"space-y-2",children:[(0,n.jsx)("h1",{className:"font-bold text-3xl sm:text-4xl",children:"Jerome Olvera"}),(0,n.jsx)("h2",{className:"text-lg sm:text-xl opacity-90 dark:opacity-100",children:"Software Engineer"})]})}),(0,n.jsx)(a.Z,{})]})}var d=r(4500);function u(e){let{children:t}=e;return(0,n.jsx)("nav",{className:"flex flex-wrap space-x-3 pb-16",children:t})}u.Link=function(e){let{href:t,children:r}=e;return(0,n.jsx)(d.Z,{className:"bg-red-400 dark:bg-red-300 text-red-400 dark:text-red-300 border-red-400 dark:border-red-300 px-4 py-1",children:(0,n.jsx)(s(),{href:t,children:r})})};var f={Html:function(e){let{children:t,title:r,description:i}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o(),{children:[(0,n.jsx)("title",{children:"".concat(r," | ").concat(i)}),(0,n.jsx)("meta",{name:"description",content:i}),(0,n.jsx)("meta",{property:"og:site_name",content:r}),(0,n.jsx)("meta",{property:"og:description",content:i}),(0,n.jsx)("meta",{name:"twitter:title",content:r}),(0,n.jsx)("meta",{name:"twitter:description",content:i}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:site",content:"@sediceyerom"})]}),(0,n.jsxs)("main",{className:"px-6 sm:px-8 pt-16 pb-32 max-w-screen-md mx-auto",children:[(0,n.jsx)(c,{}),t]})]})},Navigation:function(){return(0,n.jsxs)(u,{children:[(0,n.jsx)(u.Link,{href:"https://github.com/jerolan",children:"Github"}),(0,n.jsx)(u.Link,{href:"https://twitter.com/sediceyerom",children:"Twitter"}),(0,n.jsx)(u.Link,{href:"/blog",children:"Blog"})]})},Header:c}},5639:function(e,t,r){"use strict";function n(){return window}r.d(t,{Z:function(){return n}})},3271:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return Image}});let n=r(8754),i=r(1757),o=i._(r(7294)),l=n._(r(3935)),s=n._(r(9201)),a=r(3914),c=r(5494),d=r(869);r(1905);let u=r(1823),f=n._(r(4545)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function p(e,t,r,n,i,o){let l=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===l)return;e["data-loaded-src"]=l;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}})}function g(e){let[t,r]=o.version.split(".",2),n=parseInt(t,10),i=parseInt(r,10);return n>18||18===n&&i>=3?{fetchPriority:e}:{fetchpriority:e}}let h=(0,o.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:l,width:s,decoding:a,className:c,style:d,fetchPriority:u,placeholder:f,loading:m,unoptimized:h,fill:x,onLoadRef:b,onLoadingCompleteRef:v,setBlurComplete:w,setShowAltText:y,onLoad:j,onError:_,...k}=e;return o.default.createElement("img",{...k,...g(u),loading:m,width:s,height:l,decoding:a,"data-nimg":x?"fill":"1",className:c,style:d,sizes:i,srcSet:n,src:r,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(_&&(e.src=e.src),e.complete&&p(e,f,b,v,w,h))},[r,f,b,v,w,_,h,t]),onLoad:e=>{let t=e.currentTarget;p(t,f,b,v,w,h)},onError:e=>{y(!0),"empty"!==f&&w(!0),_&&_(e)}})});function x(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...g(r.fetchPriority)};return t&&l.default.preload?(l.default.preload(r.src,n),null):o.default.createElement(s.default,null,o.default.createElement("link",{key:"__nimg-"+r.src+r.srcSet+r.sizes,rel:"preload",href:r.srcSet?void 0:r.src,...n}))}let Image=(0,o.forwardRef)((e,t)=>{let r=(0,o.useContext)(u.RouterContext),n=(0,o.useContext)(d.ImageConfigContext),i=(0,o.useMemo)(()=>{let e=m||n||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:l,onLoadingComplete:s}=e,p=(0,o.useRef)(l);(0,o.useEffect)(()=>{p.current=l},[l]);let g=(0,o.useRef)(s);(0,o.useEffect)(()=>{g.current=s},[s]);let[b,v]=(0,o.useState)(!1),[w,y]=(0,o.useState)(!1),{props:j,meta:_}=(0,a.getImgProps)(e,{defaultLoader:f.default,imgConf:i,blurComplete:b,showAltText:w});return o.default.createElement(o.default.Fragment,null,o.default.createElement(h,{...j,unoptimized:_.unoptimized,placeholder:_.placeholder,fill:_.fill,onLoadRef:p,onLoadingCompleteRef:g,setBlurComplete:v,setShowAltText:y,ref:t}),_.priority?o.default.createElement(x,{isAppRouter:!r,imgAttributes:j}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3914:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return s}}),r(1905);let n=r(2393),i=r(5494);function o(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function s(e,t){var r;let s,a,c,{src:d,sizes:u,unoptimized:f=!1,priority:m=!1,loading:p,className:g,quality:h,width:x,height:b,fill:v=!1,style:w,onLoad:y,onLoadingComplete:j,placeholder:_="empty",blurDataURL:k,fetchPriority:S,layout:C,objectFit:E,objectPosition:N,lazyBoundary:z,lazyRoot:P,...M}=e,{imgConf:O,showAltText:L,blurComplete:I,defaultLoader:R}=t,Z=O||i.imageConfigDefault;if("allSizes"in Z)s=Z;else{let e=[...Z.deviceSizes,...Z.imageSizes].sort((e,t)=>e-t),t=Z.deviceSizes.sort((e,t)=>e-t);s={...Z,allSizes:e,deviceSizes:t}}let B=M.loader||R;delete M.loader,delete M.srcSet;let T="__next_img_default"in B;if(T){if("custom"===s.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=B;B=t=>{let{config:r,...n}=t;return e(n)}}if(C){"fill"===C&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[C];t&&!u&&(u=t)}let A="",D=l(x),F=l(b);if("object"==typeof(r=d)&&(o(r)||void 0!==r.src)){let e=o(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,c=e.blurHeight,k=k||e.blurDataURL,A=e.src,!v){if(D||F){if(D&&!F){let t=D/e.width;F=Math.round(e.height*t)}else if(!D&&F){let t=F/e.height;D=Math.round(e.width*t)}}else D=e.width,F=e.height}}let H=!m&&("lazy"===p||void 0===p);(!(d="string"==typeof d?d:A)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,H=!1),s.unoptimized&&(f=!0),T&&d.endsWith(".svg")&&!s.dangerouslyAllowSVG&&(f=!0),m&&(S="high");let G=l(h),W=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:E,objectPosition:N}:{},L?{}:{color:"transparent"},w),q=I||"empty"===_?null:"blur"===_?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:D,heightInt:F,blurWidth:a,blurHeight:c,blurDataURL:k||"",objectFit:W.objectFit})+'")':'url("'+_+'")',U=q?{backgroundSize:W.objectFit||"cover",backgroundPosition:W.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:q}:{},J=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:l,loader:s}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:a,kind:c}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let o=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:o,kind:"x"}}(t,i,l),d=a.length-1;return{sizes:l||"w"!==c?l:"100vw",srcSet:a.map((e,n)=>s({config:t,src:r,quality:o,width:e})+" "+("w"===c?e:n+1)+c).join(", "),src:s({config:t,src:r,quality:o,width:a[d]})}}({config:s,src:d,unoptimized:f,width:D,quality:G,sizes:u,loader:B}),V={...M,loading:H?"lazy":p,fetchPriority:S,width:D,height:F,decoding:"async",className:g,style:{...W,...U},sizes:J.sizes,srcSet:J.srcSet,src:J.src},Y={unoptimized:f,priority:m,placeholder:_,fill:v};return{props:V,meta:Y}}},2393:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:l}=e,s=n?40*n:t,a=i?40*i:r,c=s&&a?"viewBox='0 0 "+s+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},645:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{unstable_getImgProps:function(){return a},default:function(){return c}});let n=r(8754),i=r(3914),o=r(1905),l=r(3271),s=n._(r(4545)),a=e=>{(0,o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,i.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},c=l.Image},4545:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},4630:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return h},default:function(){return x}});var n=r(5893),i=r(9008),o=r.n(i),l=r(5675),s=r.n(l),a=r(7294),c=r(5639),d=r(1087),u={Title:function(e){let{children:t}=e;return(0,n.jsx)("h1",{className:"font-bold text-3xl md:text-4xl pb-12",children:t})},Cover:function(e){let{src:t,alt:r}=e;return(0,n.jsxs)("div",{className:"pb-8 space-y-3",children:[(0,n.jsx)("div",{className:"relative h-96 w-full",children:(0,n.jsx)(s(),{fill:!0,quality:100,src:"/images/".concat(t),alt:r,className:"object-contain object-center",loading:"lazy"})}),(0,n.jsx)("p",{className:"text-center text-sm italic opacity-80",children:r})]})},FloatingHeader:function(e){let{title:t}=e,r=(0,a.useRef)(null),i=(0,c.Z)(),o=(0,a.useCallback)(()=>{let e=3*document.querySelector("header").offsetHeight;(null==i?void 0:i.pageYOffset)>e?r.current.style.top=0:r.current.style.top="".concat(-(3*r.current.offsetHeight),"px")},[i]);return(0,a.useEffect)(()=>{o(),i.onscroll=o},[o,i]),(0,n.jsx)("div",{ref:r,style:{transitionProperty:"top"},className:"fixed duration-300 left-0 right-0 z-50 bg-white dark:bg-black bg-opacity-80 dark:bg-opacity-80 backdrop-filter backdrop-blur",children:(0,n.jsxs)("div",{className:"px-6 sm:px-8 py-6 sm:py-8 max-w-screen-md mx-auto flex justify-between items-center",children:[(0,n.jsx)("button",{onClick:function(){null==i||i.scrollTo({top:0,behavior:"smooth"})},children:(0,n.jsx)("span",{className:"font-bold text-md md:text-xl",children:t})}),(0,n.jsx)(d.Z,{})]})})}},f=r(3918),m=r.n(f);function p(e){let{children:t}=e;return(0,n.jsx)("div",{className:m().markdown,dangerouslySetInnerHTML:{__html:t}})}var g=r(4050),h=!0;function x(e){let{post:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o(),{children:(0,n.jsx)("meta",{property:"og:image",content:t.cover.src})}),(0,n.jsxs)(g.Z.Html,{title:t.title,description:t.excerpt,children:[(0,n.jsx)(g.Z.Navigation,{}),(0,n.jsx)(u.FloatingHeader,{title:t.title}),(0,n.jsx)(u.Title,{children:t.title}),(0,n.jsx)(u.Cover,{src:t.cover.src,alt:t.cover.alt}),(0,n.jsx)(p,{children:t.content})]})]})}},3918:function(e){e.exports={markdown:"Markdown_markdown__gL5wC"}},5675:function(e,t,r){e.exports=r(645)}},function(e){e.O(0,[519,774,888,179],function(){return e(e.s=9937)}),_N_E=e.O()}]);