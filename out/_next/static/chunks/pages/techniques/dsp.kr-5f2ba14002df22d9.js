(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9786],{26516:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/techniques/dsp.kr",function(){return n(68958)}])},61127:function(e,t){"use strict";t.Z={src:"/_next/static/media/dsp.27a0005f.jpeg",height:649,width:1075,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAArAT/xAAZEAABBQAAAAAAAAAAAAAAAAACAAEhIjH/2gAIAQEAAT8AACizav/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z",blurWidth:8,blurHeight:5}},41667:function(e,t,n){"use strict";n.d(t,{w:function(){return l}});var a=n(11527),r=n(5341),o=n(76484),i=n.n(o);function l(e){let{src:t,alt:n,full:o}=e;return(0,a.jsx)("div",{className:(0,r.Z)("mt-6 -mb-4 flex justify-center overflow-hidden rounded-xl border dark:border-zinc-800",o?"bg-white":"bg-zinc-100"),children:(0,a.jsx)(i(),{src:t,alt:n,className:(0,r.Z)("w-auto select-none bg-white",o?"":"ring-1 ring-gray-200")})})}},43677:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(11527),r=n(50959),o=n(85274),i=n(5341);function l(e){return(0,a.jsx)("svg",{viewBox:"0 0 24 24",width:"24",height:"24",...e,children:(0,a.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}let s=e=>{let{children:t,className:n,...r}=e;return(0,a.jsx)("button",{className:(0,i.Z)("nextra-button nx-transition-all active:nx-opacity-50","nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-1.5","dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50",n),...r,children:t})};function c(e){return(0,a.jsx)("svg",{viewBox:"0 0 20 20",width:"1em",height:"1em",fill:"currentColor",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}function d(e){return(0,a.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",...e,children:[(0,a.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,a.jsx)("path",{d:"M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}let x=e=>{let{getValue:t,...n}=e,[o,i]=(0,r.useState)(!1);(0,r.useEffect)(()=>{if(!o)return;let e=setTimeout(()=>{i(!1)},2e3);return()=>{clearTimeout(e)}},[o]);let l=(0,r.useCallback)(async()=>{i(!0),(null==navigator?void 0:navigator.clipboard)||console.error("Access to clipboard rejected!");try{await navigator.clipboard.writeText(t())}catch(e){console.error("Failed to copy!")}},[t]);return(0,a.jsx)(s,{onClick:l,title:"Copy code",tabIndex:0,...n,children:(0,a.jsx)(o?c:d,{className:"nextra-copy-icon nx-pointer-events-none nx-h-4 nx-w-4"})})},u=e=>{let{children:t,className:n,hasCopyCode:o=!0,filename:c,...d}=e,u=(0,r.useRef)(null),g=(0,r.useCallback)(()=>{let e=document.documentElement.dataset,t="nextraWordWrap"in e;t?delete e.nextraWordWrap:e.nextraWordWrap=""},[]);return(0,a.jsxs)("div",{className:"nextra-code-block nx-relative nx-mt-6 first:nx-mt-0",children:[c&&(0,a.jsx)("div",{className:"nx-absolute nx-top-0 nx-z-[1] nx-w-full nx-truncate nx-rounded-t-xl nx-bg-primary-700/5 nx-py-2 nx-px-4 nx-text-xs nx-text-gray-700 dark:nx-bg-primary-300/10 dark:nx-text-gray-200",children:c}),(0,a.jsx)("pre",{className:(0,i.Z)("nx-bg-primary-700/5 nx-mb-4 nx-overflow-x-auto nx-rounded-xl nx-subpixel-antialiased dark:nx-bg-primary-300/10 nx-text-[.9em]","contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40",c?"nx-pt-12 nx-pb-4":"nx-py-4",n),ref:u,...d,children:r.isValidElement(t)&&"code"===t.type?t.props.children:t}),(0,a.jsxs)("div",{className:(0,i.Z)("nx-opacity-0 nx-transition [div:hover>&]:nx-opacity-100 focus-within:nx-opacity-100","nx-flex nx-gap-1 nx-absolute nx-m-[11px] nx-right-0",c?"nx-top-8":"nx-top-0"),children:[(0,a.jsx)(s,{onClick:g,className:"md:nx-hidden",title:"Toggle word wrap elvis",children:(0,a.jsx)(l,{className:"nx-pointer-events-none nx-h-4 nx-w-4"})}),o&&(0,a.jsx)(x,{getValue(){var e,t;return(null===(e=null===(t=u.current)||void 0===t?void 0:t.querySelector("code"))||void 0===e?void 0:e.textContent)||""}})]})]})},g={logo:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 206 246",fill:"none",children:[(0,a.jsx)("circle",{cx:"40",cy:"40",r:"40",fill:"currentColor"}),(0,a.jsx)("circle",{cx:"40",cy:"206",r:"40",fill:"currentColor"}),(0,a.jsx)("circle",{cx:"166",cy:"120",r:"40",fill:"currentColor"})]}),(0,a.jsx)("span",{style:{marginLeft:".4em",fontWeight:800},children:"Prompt Engineering Guide"})]}),i18n:[{locale:"en",text:"English"},{locale:"zh",text:"中文"},{locale:"jp",text:"日本語"},{locale:"pt",text:"Portugu\xeas"},{locale:"it",text:"Italian"},{locale:"tr",text:"T\xfcrk\xe7e"},{locale:"es",text:"Espa\xf1ol"},{locale:"fr",text:"Fran\xe7ais"},{locale:"kr",text:"한국어"},{locale:"ca",text:"Catal\xe0"},{locale:"fi",text:"Finnish"},{locale:"ru",text:"Русский"}],head:function(){let{title:e}=(0,o.ZR)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("title",{children:[e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"," "]}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,a.jsx)("meta",{property:"og:title",content:"Prompt Engineering Guide"}),(0,a.jsx)("meta",{property:"og:description",content:"A Comprehensive Overview of Prompt Engineering"}),(0,a.jsx)("meta",{name:"og:title",content:e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"}),(0,a.jsx)("link",{rel:"icon",href:"/144-favicon.svg",type:"image/svg+xml"}),(0,a.jsx)("link",{rel:"icon",href:"/144-favicon-dark.svg",type:"image/svg+xml",media:"(prefers-color-scheme: dark)"})]})},project:{link:"https://github.com/dair-ai/Prompt-Engineering-Guide"},chat:{link:"https://discord.gg/FUyz9vPAwf"},docsRepositoryBase:"https://github.com/dair-ai/Prompt-Engineering-Guide/tree/main/",footer:{text:"Copyright \xa9 2023 DAIR.AI"},search:{placeholder:"Search..."},components:{pre:u}};var p=g},68958:function(e,t,n){"use strict";n.r(t),n.d(t,{__toc:function(){return d}});var a=n(11527),r=n(55411),o=n(85274),i=n(43677);n(20492),n(95178);var l=n(82132),s=n(41667),c=n(61127);let d=[];function x(e){let t=Object.assign({h1:"h1",p:"p",a:"a"},(0,l.a)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{children:"Directional Stimulus Prompting"}),"\n","\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://arxiv.org/abs/2302.11520",children:"Li et al., (2023)"})," 에서는 원하는 요약을 생성하는 데 있어 대규모언어모델을 더 잘 안내하는 새로운 프롬프팅 기법을 제안합니다."]}),"\n",(0,a.jsx)(t.p,{children:"조정 가능한 정책 언어모델(Tuneable policy LM)은 자극(stimulus)/힌트(hint)를 생성하도록 훈련됩니다. 대규모언어모델을 최적화하기 위해 강화 학습(RL)을 더 많이 사용하고 있습니다."}),"\n",(0,a.jsx)(t.p,{children:"아래 그림은 방향 자극 프롬프팅(directional stimulus prompting)이 표준 프롬프팅과 어떻게 비교되는지 보여줍니다. 정책 언어모델은 블랙박스 고정 대규모언어모델(black-box frozen LLM)을 안내하는 힌트를 생성하기 위해 작게 최적화될 수 있습니다."}),"\n",(0,a.jsx)(s.w,{src:c.Z,alt:"DSP"}),"\n",(0,a.jsxs)(t.p,{children:["이미지 출처: ",(0,a.jsx)(t.a,{href:"https://arxiv.org/abs/2302.11520",children:"Li et al., (2023)"})]}),"\n",(0,a.jsx)(t.p,{children:"전체 예시는 곧 제공될 예정입니다!"})]})}let u={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,l.a)(),e.components);return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(x,{...e})}):x(e)},pageOpts:{filePath:"pages/techniques/dsp.kr.mdx",route:"/techniques/dsp",timestamp:1696506801e3,pageMap:[{kind:"Meta",locale:"kr",data:{index:"Prompt Engineering",introduction:"Introduction",techniques:"Techniques",applications:"Applications",models:"Models",risks:"Risks & Misuses",papers:"Papers",tools:"Tools",notebooks:"Notebooks",datasets:"Datasets",readings:"Additional Readings",course:{title:"Prompt Engineering Course",type:"page"},services:{title:"Services",type:"page"},about:{title:"About",type:"page"}}},{kind:"MdxPage",name:"about",route:"/about",locale:"kr"},{kind:"Folder",name:"applications",route:"/applications",children:[{kind:"Meta",locale:"kr",data:{pal:"PAL（프로그램지원언어모델）",generating:"데이터 생성",coding:"코드 생성",workplace_casestudy:"학위가 필요한 직업을 분류한 사례 연구",pf:"프롬프트 함수"}},{kind:"MdxPage",name:"coding",route:"/applications/coding",locale:"kr"},{kind:"MdxPage",name:"generating",route:"/applications/generating",locale:"kr"},{kind:"MdxPage",name:"pal",route:"/applications/pal",locale:"kr"},{kind:"MdxPage",name:"pf",route:"/applications/pf",locale:"kr"},{kind:"MdxPage",name:"workplace_casestudy",route:"/applications/workplace_casestudy",locale:"kr"},{kind:"MdxPage",name:"generating_textbooks",route:"/applications/generating_textbooks",locale:"en"},{kind:"MdxPage",name:"synthetic_rag",route:"/applications/synthetic_rag",locale:"en"}]},{kind:"MdxPage",name:"applications",route:"/applications",locale:"kr"},{kind:"MdxPage",name:"course",route:"/course",locale:"kr"},{kind:"MdxPage",name:"datasets",route:"/datasets",locale:"kr"},{kind:"MdxPage",name:"index",route:"/",locale:"kr"},{kind:"Folder",name:"introduction",route:"/introduction",children:[{kind:"Meta",locale:"kr",data:{settings:"LLM 설정",basics:"프롬프트의 기초",elements:"프롬프트의 구성 요소",tips:"프롬프트 설계에 관한 일반적인 팁",examples:"프롬프트 예시"}},{kind:"MdxPage",name:"basics",route:"/introduction/basics",locale:"kr"},{kind:"MdxPage",name:"elements",route:"/introduction/elements",locale:"kr"},{kind:"MdxPage",name:"examples",route:"/introduction/examples",locale:"kr"},{kind:"MdxPage",name:"settings",route:"/introduction/settings",locale:"kr"},{kind:"MdxPage",name:"tips",route:"/introduction/tips",locale:"kr"}]},{kind:"MdxPage",name:"introduction",route:"/introduction",locale:"kr"},{kind:"Folder",name:"models",route:"/models",children:[{kind:"Meta",locale:"kr",data:{flan:"Flan",chatgpt:"ChatGPT",llama:"LLaMA","gpt-4":"GPT-4","mistral-7b":"Mistral 7B",collection:"Model Collection"}},{kind:"MdxPage",name:"chatgpt",route:"/models/chatgpt",locale:"kr"},{kind:"MdxPage",name:"collection",route:"/models/collection",locale:"kr"},{kind:"MdxPage",name:"flan",route:"/models/flan",locale:"kr"},{kind:"MdxPage",name:"gpt-4",route:"/models/gpt-4",locale:"kr"},{kind:"MdxPage",name:"llama",route:"/models/llama",locale:"kr"},{kind:"MdxPage",name:"mistral-7b",route:"/models/mistral-7b",locale:"kr"}]},{kind:"MdxPage",name:"models",route:"/models",locale:"kr"},{kind:"MdxPage",name:"notebooks",route:"/notebooks",locale:"kr"},{kind:"MdxPage",name:"papers",route:"/papers",locale:"kr"},{kind:"MdxPage",name:"readings",route:"/readings",locale:"kr"},{kind:"Folder",name:"risks",route:"/risks",children:[{kind:"Meta",locale:"kr",data:{adversarial:"적대적 프롬프팅",factuality:"사실성",biases:"편향"}},{kind:"MdxPage",name:"adversarial",route:"/risks/adversarial",locale:"kr"},{kind:"MdxPage",name:"biases",route:"/risks/biases",locale:"kr"},{kind:"MdxPage",name:"factuality",route:"/risks/factuality",locale:"kr"}]},{kind:"MdxPage",name:"risks",route:"/risks",locale:"kr"},{kind:"MdxPage",name:"services",route:"/services",locale:"kr"},{kind:"Folder",name:"techniques",route:"/techniques",children:[{kind:"Meta",locale:"kr",data:{zeroshot:"Zero-shot Prompting",fewshot:"Few-shot Prompting",cot:"Chain-of-Thought Prompting",consistency:"Self-Consistency",knowledge:"Generate Knowledge Prompting",tot:"Tree of Thoughts",rag:"Retrieval Augmented Generation",art:"Automatic Reasoning and Tool-use",ape:"Automatic Prompt Engineer",activeprompt:"Active-Prompt",dsp:"Directional Stimulus Prompting",react:"ReAct",multimodalcot:"Multimodal CoT",graph:"Graph Prompting"}},{kind:"MdxPage",name:"activeprompt",route:"/techniques/activeprompt",locale:"kr"},{kind:"MdxPage",name:"ape",route:"/techniques/ape",locale:"kr"},{kind:"MdxPage",name:"art",route:"/techniques/art",locale:"kr"},{kind:"MdxPage",name:"consistency",route:"/techniques/consistency",locale:"kr"},{kind:"MdxPage",name:"cot",route:"/techniques/cot",locale:"kr"},{kind:"MdxPage",name:"dsp",route:"/techniques/dsp",locale:"kr"},{kind:"MdxPage",name:"fewshot",route:"/techniques/fewshot",locale:"kr"},{kind:"MdxPage",name:"graph",route:"/techniques/graph",locale:"kr"},{kind:"MdxPage",name:"knowledge",route:"/techniques/knowledge",locale:"kr"},{kind:"MdxPage",name:"multimodalcot",route:"/techniques/multimodalcot",locale:"kr"},{kind:"MdxPage",name:"rag",route:"/techniques/rag",locale:"kr"},{kind:"MdxPage",name:"react",route:"/techniques/react",locale:"kr"},{kind:"MdxPage",name:"tot",route:"/techniques/tot",locale:"kr"},{kind:"MdxPage",name:"zeroshot",route:"/techniques/zeroshot",locale:"kr"}]},{kind:"MdxPage",name:"techniques",route:"/techniques",locale:"kr"},{kind:"MdxPage",name:"tools",route:"/tools",locale:"kr"}],flexsearch:{codeblocks:!0},title:"Directional Stimulus Prompting",headings:d},pageNextRoute:"/techniques/dsp.kr",nextraLayout:o.ZP,themeConfig:i.Z};t.default=(0,r.j)(u)}},function(e){e.O(0,[67892,49774,92888,40179],function(){return e(e.s=26516)}),_N_E=e.O()}]);