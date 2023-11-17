(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[89163],{89481:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/applications/coding.it",function(){return n(51077)}])},43677:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var i=n(11527),a=n(50959),o=n(85274),r=n(5341);function l(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",width:"24",height:"24",...e,children:(0,i.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}let c=e=>{let{children:t,className:n,...a}=e;return(0,i.jsx)("button",{className:(0,r.Z)("nextra-button nx-transition-all active:nx-opacity-50","nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-1.5","dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50",n),...a,children:t})};function s(e){return(0,i.jsx)("svg",{viewBox:"0 0 20 20",width:"1em",height:"1em",fill:"currentColor",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}function d(e){return(0,i.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",...e,children:[(0,i.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,i.jsx)("path",{d:"M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}let x=e=>{let{getValue:t,...n}=e,[o,r]=(0,a.useState)(!1);(0,a.useEffect)(()=>{if(!o)return;let e=setTimeout(()=>{r(!1)},2e3);return()=>{clearTimeout(e)}},[o]);let l=(0,a.useCallback)(async()=>{r(!0),(null==navigator?void 0:navigator.clipboard)||console.error("Access to clipboard rejected!");try{await navigator.clipboard.writeText(t())}catch(e){console.error("Failed to copy!")}},[t]);return(0,i.jsx)(c,{onClick:l,title:"Copy code",tabIndex:0,...n,children:(0,i.jsx)(o?s:d,{className:"nextra-copy-icon nx-pointer-events-none nx-h-4 nx-w-4"})})},u=e=>{let{children:t,className:n,hasCopyCode:o=!0,filename:s,...d}=e,u=(0,a.useRef)(null),p=(0,a.useCallback)(()=>{let e=document.documentElement.dataset,t="nextraWordWrap"in e;t?delete e.nextraWordWrap:e.nextraWordWrap=""},[]);return(0,i.jsxs)("div",{className:"nextra-code-block nx-relative nx-mt-6 first:nx-mt-0",children:[s&&(0,i.jsx)("div",{className:"nx-absolute nx-top-0 nx-z-[1] nx-w-full nx-truncate nx-rounded-t-xl nx-bg-primary-700/5 nx-py-2 nx-px-4 nx-text-xs nx-text-gray-700 dark:nx-bg-primary-300/10 dark:nx-text-gray-200",children:s}),(0,i.jsx)("pre",{className:(0,r.Z)("nx-bg-primary-700/5 nx-mb-4 nx-overflow-x-auto nx-rounded-xl nx-subpixel-antialiased dark:nx-bg-primary-300/10 nx-text-[.9em]","contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40",s?"nx-pt-12 nx-pb-4":"nx-py-4",n),ref:u,...d,children:a.isValidElement(t)&&"code"===t.type?t.props.children:t}),(0,i.jsxs)("div",{className:(0,r.Z)("nx-opacity-0 nx-transition [div:hover>&]:nx-opacity-100 focus-within:nx-opacity-100","nx-flex nx-gap-1 nx-absolute nx-m-[11px] nx-right-0",s?"nx-top-8":"nx-top-0"),children:[(0,i.jsx)(c,{onClick:p,className:"md:nx-hidden",title:"Toggle word wrap elvis",children:(0,i.jsx)(l,{className:"nx-pointer-events-none nx-h-4 nx-w-4"})}),o&&(0,i.jsx)(x,{getValue(){var e,t;return(null===(e=null===(t=u.current)||void 0===t?void 0:t.querySelector("code"))||void 0===e?void 0:e.textContent)||""}})]})]})},p={logo:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 206 246",fill:"none",children:[(0,i.jsx)("circle",{cx:"40",cy:"40",r:"40",fill:"currentColor"}),(0,i.jsx)("circle",{cx:"40",cy:"206",r:"40",fill:"currentColor"}),(0,i.jsx)("circle",{cx:"166",cy:"120",r:"40",fill:"currentColor"})]}),(0,i.jsx)("span",{style:{marginLeft:".4em",fontWeight:800},children:"Prompt Engineering Guide"})]}),i18n:[{locale:"en",text:"English"},{locale:"zh",text:"中文"},{locale:"jp",text:"日本語"},{locale:"pt",text:"Portugu\xeas"},{locale:"it",text:"Italian"},{locale:"tr",text:"T\xfcrk\xe7e"},{locale:"es",text:"Espa\xf1ol"},{locale:"fr",text:"Fran\xe7ais"},{locale:"kr",text:"한국어"},{locale:"ca",text:"Catal\xe0"},{locale:"fi",text:"Finnish"},{locale:"ru",text:"Русский"}],head:function(){let{title:e}=(0,o.ZR)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("title",{children:[e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"," "]}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,i.jsx)("meta",{property:"og:title",content:"Prompt Engineering Guide"}),(0,i.jsx)("meta",{property:"og:description",content:"A Comprehensive Overview of Prompt Engineering"}),(0,i.jsx)("meta",{name:"og:title",content:e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"}),(0,i.jsx)("link",{rel:"icon",href:"/144-favicon.svg",type:"image/svg+xml"}),(0,i.jsx)("link",{rel:"icon",href:"/144-favicon-dark.svg",type:"image/svg+xml",media:"(prefers-color-scheme: dark)"})]})},project:{link:"https://github.com/dair-ai/Prompt-Engineering-Guide"},chat:{link:"https://discord.gg/FUyz9vPAwf"},docsRepositoryBase:"https://github.com/dair-ai/Prompt-Engineering-Guide/tree/main/",footer:{text:"Copyright \xa9 2023 DAIR.AI"},search:{placeholder:"Search..."},components:{pre:u}};var g=p},51077:function(e,t,n){"use strict";n.r(t),n.d(t,{__toc:function(){return c}});var i=n(11527),a=n(55411),o=n(85274),r=n(43677);n(20492),n(95178);var l=n(82132);let c=[];function s(e){let t=Object.assign({h1:"h1",p:"p",code:"code"},(0,l.a)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{children:"Generating Code"}),"\n",(0,i.jsxs)(t.p,{children:["Needs translation! Feel free to contribute a translating by clicking the ",(0,i.jsx)(t.code,{children:"Edit this page"})," button on the right side."]})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,l.a)(),e.components);return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(s,{...e})}):s(e)},pageOpts:{filePath:"pages/applications/coding.it.mdx",route:"/applications/coding",timestamp:1682042943e3,pageMap:[{kind:"Meta",locale:"it",data:{index:"Prompt Engineering",introduction:"Introduzione",techniques:"Tecniche",applications:"Applicazioni",models:"Modelli",risks:"Rischi & Abusi",papers:"Articoli scientifici",tools:"Strumenti",notebooks:"Notebook",datasets:"Dataset",readings:"Letture",course:{title:"Corso Prompt Engineering",type:"page"},services:{title:"Servizi",type:"page"},about:{title:"Informazioni",type:"page"}}},{kind:"MdxPage",name:"about",route:"/about",locale:"it"},{kind:"Folder",name:"applications",route:"/applications",children:[{kind:"Meta",locale:"it",data:{pal:"Programma-Assistito di Modelli Linguistici",generating:"Generazione di dati",coding:"Generating Code",workplace_casestudy:"Studio sul caso della classificazione del lavoro dei laureati",pf:"Prompt Function"}},{kind:"MdxPage",name:"coding",route:"/applications/coding",locale:"it"},{kind:"MdxPage",name:"generating",route:"/applications/generating",locale:"it"},{kind:"MdxPage",name:"pal",route:"/applications/pal",locale:"it"},{kind:"MdxPage",name:"pf",route:"/applications/pf",locale:"it"},{kind:"MdxPage",name:"workplace_casestudy",route:"/applications/workplace_casestudy",locale:"it"},{kind:"MdxPage",name:"generating_textbooks",route:"/applications/generating_textbooks",locale:"en"},{kind:"MdxPage",name:"synthetic_rag",route:"/applications/synthetic_rag",locale:"en"}]},{kind:"MdxPage",name:"applications",route:"/applications",locale:"it"},{kind:"MdxPage",name:"course",route:"/course",locale:"it"},{kind:"MdxPage",name:"datasets",route:"/datasets",locale:"it"},{kind:"MdxPage",name:"index",route:"/",locale:"it"},{kind:"Folder",name:"introduction",route:"/introduction",children:[{kind:"Meta",locale:"it",data:{settings:"Impostazioni LLM",basics:"I fondamentali del Prompt",elements:"Elementi di un Prompt",tips:"Suggermenti generali per la progettazione di Prompt",examples:"Esempi di Prompt"}},{kind:"MdxPage",name:"basics",route:"/introduction/basics",locale:"it"},{kind:"MdxPage",name:"elements",route:"/introduction/elements",locale:"it"},{kind:"MdxPage",name:"examples",route:"/introduction/examples",locale:"it"},{kind:"MdxPage",name:"settings",route:"/introduction/settings",locale:"it"},{kind:"MdxPage",name:"tips",route:"/introduction/tips",locale:"it"}]},{kind:"MdxPage",name:"introduction",route:"/introduction",locale:"it"},{kind:"Folder",name:"models",route:"/models",children:[{kind:"Meta",locale:"it",data:{flan:"Flan",chatgpt:"ChatGPT",llama:"LLaMA","gpt-4":"GPT-4","mistral-7b":"Mistral 7B",collection:"Collezione di Modelli"}},{kind:"MdxPage",name:"chatgpt",route:"/models/chatgpt",locale:"it"},{kind:"MdxPage",name:"collection",route:"/models/collection",locale:"it"},{kind:"MdxPage",name:"flan",route:"/models/flan",locale:"it"},{kind:"MdxPage",name:"gpt-4",route:"/models/gpt-4",locale:"it"},{kind:"MdxPage",name:"llama",route:"/models/llama",locale:"it"},{kind:"MdxPage",name:"mistral-7b",route:"/models/mistral-7b",locale:"it"}]},{kind:"MdxPage",name:"models",route:"/models",locale:"it"},{kind:"MdxPage",name:"notebooks",route:"/notebooks",locale:"it"},{kind:"MdxPage",name:"papers",route:"/papers",locale:"it"},{kind:"MdxPage",name:"readings",route:"/readings",locale:"it"},{kind:"Folder",name:"risks",route:"/risks",children:[{kind:"Meta",locale:"it",data:{adversarial:"Prompt Conflittuale",factuality:"Fattualit\xe0",biases:"Pregiudizi"}},{kind:"MdxPage",name:"adversarial",route:"/risks/adversarial",locale:"it"},{kind:"MdxPage",name:"biases",route:"/risks/biases",locale:"it"},{kind:"MdxPage",name:"factuality",route:"/risks/factuality",locale:"it"}]},{kind:"MdxPage",name:"risks",route:"/risks",locale:"it"},{kind:"MdxPage",name:"services",route:"/services",locale:"it"},{kind:"Folder",name:"techniques",route:"/techniques",children:[{kind:"Meta",locale:"it",data:{zeroshot:"Prompt Zero-shot",fewshot:"Prompt Few-shot",cot:"Prompt Chain-of-Thought",consistency:"Self-Consistency",knowledge:"Prompt Generate Knowledge",tot:"Tree of Thoughts",rag:"Retrieval Augmented Generation",art:"Automatic Reasoning and Tool-use",ape:"Automatic Prompt Engineer",activeprompt:"Prompt Attivo",dsp:"Prompt Directional Stimulus",react:"ReAct",multimodalcot:"Multimodal CoT",graph:"Graph Prompt"}},{kind:"MdxPage",name:"activeprompt",route:"/techniques/activeprompt",locale:"it"},{kind:"MdxPage",name:"ape",route:"/techniques/ape",locale:"it"},{kind:"MdxPage",name:"art",route:"/techniques/art",locale:"it"},{kind:"MdxPage",name:"consistency",route:"/techniques/consistency",locale:"it"},{kind:"MdxPage",name:"cot",route:"/techniques/cot",locale:"it"},{kind:"MdxPage",name:"dsp",route:"/techniques/dsp",locale:"it"},{kind:"MdxPage",name:"fewshot",route:"/techniques/fewshot",locale:"it"},{kind:"MdxPage",name:"graph",route:"/techniques/graph",locale:"it"},{kind:"MdxPage",name:"knowledge",route:"/techniques/knowledge",locale:"it"},{kind:"MdxPage",name:"multimodalcot",route:"/techniques/multimodalcot",locale:"it"},{kind:"MdxPage",name:"rag",route:"/techniques/rag",locale:"it"},{kind:"MdxPage",name:"react",route:"/techniques/react",locale:"it"},{kind:"MdxPage",name:"tot",route:"/techniques/tot",locale:"it"},{kind:"MdxPage",name:"zeroshot",route:"/techniques/zeroshot",locale:"it"}]},{kind:"MdxPage",name:"techniques",route:"/techniques",locale:"it"},{kind:"MdxPage",name:"tools",route:"/tools",locale:"it"}],flexsearch:{codeblocks:!0},title:"Generating Code",headings:c},pageNextRoute:"/applications/coding.it",nextraLayout:o.ZP,themeConfig:r.Z};t.default=(0,a.j)(d)}},function(e){e.O(0,[67892,49774,92888,40179],function(){return e(e.s=89481)}),_N_E=e.O()}]);