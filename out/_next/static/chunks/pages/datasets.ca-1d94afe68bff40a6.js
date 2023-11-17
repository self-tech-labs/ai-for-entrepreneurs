(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[28553],{83012:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/datasets.ca",function(){return a(50978)}])},43677:function(e,t,a){"use strict";a.d(t,{Z:function(){return m}});var n=a(11527),o=a(50959),i=a(85274),r=a(5341);function l(e){return(0,n.jsx)("svg",{viewBox:"0 0 24 24",width:"24",height:"24",...e,children:(0,n.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}let s=e=>{let{children:t,className:a,...o}=e;return(0,n.jsx)("button",{className:(0,r.Z)("nextra-button nx-transition-all active:nx-opacity-50","nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-1.5","dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50",a),...o,children:t})};function c(e){return(0,n.jsx)("svg",{viewBox:"0 0 20 20",width:"1em",height:"1em",fill:"currentColor",...e,children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}function d(e){return(0,n.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",...e,children:[(0,n.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}let x=e=>{let{getValue:t,...a}=e,[i,r]=(0,o.useState)(!1);(0,o.useEffect)(()=>{if(!i)return;let e=setTimeout(()=>{r(!1)},2e3);return()=>{clearTimeout(e)}},[i]);let l=(0,o.useCallback)(async()=>{r(!0),(null==navigator?void 0:navigator.clipboard)||console.error("Access to clipboard rejected!");try{await navigator.clipboard.writeText(t())}catch(e){console.error("Failed to copy!")}},[t]);return(0,n.jsx)(s,{onClick:l,title:"Copy code",tabIndex:0,...a,children:(0,n.jsx)(i?c:d,{className:"nextra-copy-icon nx-pointer-events-none nx-h-4 nx-w-4"})})},p=e=>{let{children:t,className:a,hasCopyCode:i=!0,filename:c,...d}=e,p=(0,o.useRef)(null),u=(0,o.useCallback)(()=>{let e=document.documentElement.dataset,t="nextraWordWrap"in e;t?delete e.nextraWordWrap:e.nextraWordWrap=""},[]);return(0,n.jsxs)("div",{className:"nextra-code-block nx-relative nx-mt-6 first:nx-mt-0",children:[c&&(0,n.jsx)("div",{className:"nx-absolute nx-top-0 nx-z-[1] nx-w-full nx-truncate nx-rounded-t-xl nx-bg-primary-700/5 nx-py-2 nx-px-4 nx-text-xs nx-text-gray-700 dark:nx-bg-primary-300/10 dark:nx-text-gray-200",children:c}),(0,n.jsx)("pre",{className:(0,r.Z)("nx-bg-primary-700/5 nx-mb-4 nx-overflow-x-auto nx-rounded-xl nx-subpixel-antialiased dark:nx-bg-primary-300/10 nx-text-[.9em]","contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40",c?"nx-pt-12 nx-pb-4":"nx-py-4",a),ref:p,...d,children:o.isValidElement(t)&&"code"===t.type?t.props.children:t}),(0,n.jsxs)("div",{className:(0,r.Z)("nx-opacity-0 nx-transition [div:hover>&]:nx-opacity-100 focus-within:nx-opacity-100","nx-flex nx-gap-1 nx-absolute nx-m-[11px] nx-right-0",c?"nx-top-8":"nx-top-0"),children:[(0,n.jsx)(s,{onClick:u,className:"md:nx-hidden",title:"Toggle word wrap elvis",children:(0,n.jsx)(l,{className:"nx-pointer-events-none nx-h-4 nx-w-4"})}),i&&(0,n.jsx)(x,{getValue(){var e,t;return(null===(e=null===(t=p.current)||void 0===t?void 0:t.querySelector("code"))||void 0===e?void 0:e.textContent)||""}})]})]})},u={logo:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 206 246",fill:"none",children:[(0,n.jsx)("circle",{cx:"40",cy:"40",r:"40",fill:"currentColor"}),(0,n.jsx)("circle",{cx:"40",cy:"206",r:"40",fill:"currentColor"}),(0,n.jsx)("circle",{cx:"166",cy:"120",r:"40",fill:"currentColor"})]}),(0,n.jsx)("span",{style:{marginLeft:".4em",fontWeight:800},children:"Prompt Engineering Guide"})]}),i18n:[{locale:"en",text:"English"},{locale:"zh",text:"中文"},{locale:"jp",text:"日本語"},{locale:"pt",text:"Portugu\xeas"},{locale:"it",text:"Italian"},{locale:"tr",text:"T\xfcrk\xe7e"},{locale:"es",text:"Espa\xf1ol"},{locale:"fr",text:"Fran\xe7ais"},{locale:"kr",text:"한국어"},{locale:"ca",text:"Catal\xe0"},{locale:"fi",text:"Finnish"},{locale:"ru",text:"Русский"}],head:function(){let{title:e}=(0,i.ZR)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("title",{children:[e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"," "]}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,n.jsx)("meta",{property:"og:title",content:"Prompt Engineering Guide"}),(0,n.jsx)("meta",{property:"og:description",content:"A Comprehensive Overview of Prompt Engineering"}),(0,n.jsx)("meta",{name:"og:title",content:e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"}),(0,n.jsx)("link",{rel:"icon",href:"/144-favicon.svg",type:"image/svg+xml"}),(0,n.jsx)("link",{rel:"icon",href:"/144-favicon-dark.svg",type:"image/svg+xml",media:"(prefers-color-scheme: dark)"})]})},project:{link:"https://github.com/dair-ai/Prompt-Engineering-Guide"},chat:{link:"https://discord.gg/FUyz9vPAwf"},docsRepositoryBase:"https://github.com/dair-ai/Prompt-Engineering-Guide/tree/main/",footer:{text:"Copyright \xa9 2023 DAIR.AI"},search:{placeholder:"Search..."},components:{pre:p}};var m=u},50978:function(e,t,a){"use strict";a.r(t),a.d(t,{__toc:function(){return s}});var n=a(11527),o=a(55411),i=a(85274),r=a(43677);a(20492),a(95178);var l=a(82132);let s=[{depth:4,value:"(Ordenats per Nom)",id:"ordenats-per-nom"}];function c(e){let t=Object.assign({h1:"h1",h4:"h4",ul:"ul",li:"li",a:"a"},(0,l.a)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{children:"Datasets"}),"\n",(0,n.jsx)(t.h4,{id:"ordenats-per-nom",children:"(Ordenats per Nom)"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/anthropics/hh-rlhf/tree/master/red-team-attempts",children:"Anthropic's Red Team dataset"}),", ",(0,n.jsx)(t.a,{href:"https://arxiv.org/abs/2209.07858",children:"(paper)"})]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://huggingface.co/datasets/fka/awesome-chatgpt-prompts",children:"Awesome ChatGPT Prompts"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/poloclub/diffusiondb",children:"DiffusionDB"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://huggingface.co/datasets/succinctly/midjourney-prompts",children:"Midjourney Prompts"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://huggingface.co/datasets/bigscience/P3",children:"P3 - Public Pool of Prompts"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://parti.research.google",children:"PartiPrompts"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://allenai.org/data/real-toxicity-prompts",children:"Real Toxicity Prompts"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://huggingface.co/datasets/Gustavosta/Stable-Diffusion-Prompts",children:"Stable Diffusion Dataset"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.reddit.com/r/WritingPrompts",children:"WritingPrompts"})}),"\n"]})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,l.a)(),e.components);return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/datasets.ca.mdx",route:"/datasets",timestamp:1683903982e3,pageMap:[{kind:"Meta",locale:"ca",data:{index:"Prompt Engineering",introduction:"Introduction",techniques:"Techniques",applications:"Applications",models:"Models",risks:"Risks & Misuses",papers:"Papers",tools:"Tools",notebooks:"Notebooks",datasets:"Datasets",readings:"Additional Readings",course:{title:"Prompt Engineering Course",type:"page"},services:{title:"Services",type:"page"},about:{title:"About",type:"page"}}},{kind:"MdxPage",name:"about",route:"/about",locale:"ca"},{kind:"Folder",name:"applications",route:"/applications",children:[{kind:"Meta",locale:"ca",data:{pal:"Models de Llenguatge Assistits per Programa",generating:"Generaci\xf3 de Dades",coding:"Generaci\xf3 de Codi",workplace_casestudy:"Estudi de Cas de Classificaci\xf3 de Llocs de Treball per a Titulats",pf:"Prompt Function"}},{kind:"MdxPage",name:"coding",route:"/applications/coding",locale:"ca"},{kind:"MdxPage",name:"generating",route:"/applications/generating",locale:"ca"},{kind:"MdxPage",name:"pal",route:"/applications/pal",locale:"ca"},{kind:"MdxPage",name:"pf",route:"/applications/pf",locale:"ca"},{kind:"MdxPage",name:"workplace_casestudy",route:"/applications/workplace_casestudy",locale:"ca"},{kind:"MdxPage",name:"generating_textbooks",route:"/applications/generating_textbooks",locale:"en"},{kind:"MdxPage",name:"synthetic_rag",route:"/applications/synthetic_rag",locale:"en"}]},{kind:"MdxPage",name:"applications",route:"/applications",locale:"ca"},{kind:"MdxPage",name:"course",route:"/course",locale:"ca"},{kind:"MdxPage",name:"datasets",route:"/datasets",locale:"ca"},{kind:"MdxPage",name:"index",route:"/",locale:"ca"},{kind:"Folder",name:"introduction",route:"/introduction",children:[{kind:"Meta",locale:"ca",data:{settings:"Configuraci\xf3 de LLM",basics:"Conceptes B\xe0sics de la Creaci\xf3 de Prompts",elements:"Elements del Prompt",tips:"Consells Generals per Dissenyar Prompts",examples:"Exemples de Prompts"}},{kind:"MdxPage",name:"basics",route:"/introduction/basics",locale:"ca"},{kind:"MdxPage",name:"elements",route:"/introduction/elements",locale:"ca"},{kind:"MdxPage",name:"examples",route:"/introduction/examples",locale:"ca"},{kind:"MdxPage",name:"settings",route:"/introduction/settings",locale:"ca"},{kind:"MdxPage",name:"tips",route:"/introduction/tips",locale:"ca"}]},{kind:"MdxPage",name:"introduction",route:"/introduction",locale:"ca"},{kind:"Folder",name:"models",route:"/models",children:[{kind:"Meta",locale:"ca",data:{flan:"Flan",chatgpt:"ChatGPT",llama:"LLaMA","gpt-4":"GPT-4","mistral-7b":"Mistral 7B",collection:"Col\xb7lecci\xf3 de Models"}},{kind:"MdxPage",name:"chatgpt",route:"/models/chatgpt",locale:"ca"},{kind:"MdxPage",name:"collection",route:"/models/collection",locale:"ca"},{kind:"MdxPage",name:"flan",route:"/models/flan",locale:"ca"},{kind:"MdxPage",name:"gpt-4",route:"/models/gpt-4",locale:"ca"},{kind:"MdxPage",name:"llama",route:"/models/llama",locale:"ca"},{kind:"MdxPage",name:"mistral-7b",route:"/models/mistral-7b",locale:"ca"}]},{kind:"MdxPage",name:"models",route:"/models",locale:"ca"},{kind:"MdxPage",name:"notebooks",route:"/notebooks",locale:"ca"},{kind:"MdxPage",name:"papers",route:"/papers",locale:"ca"},{kind:"MdxPage",name:"readings",route:"/readings",locale:"ca"},{kind:"Folder",name:"risks",route:"/risks",children:[{kind:"Meta",locale:"ca",data:{adversarial:"Adversarial Prompting",factuality:"Factualitat",biases:"Sesgos"}},{kind:"MdxPage",name:"adversarial",route:"/risks/adversarial",locale:"ca"},{kind:"MdxPage",name:"biases",route:"/risks/biases",locale:"ca"},{kind:"MdxPage",name:"factuality",route:"/risks/factuality",locale:"ca"}]},{kind:"MdxPage",name:"risks",route:"/risks",locale:"ca"},{kind:"MdxPage",name:"services",route:"/services",locale:"ca"},{kind:"Folder",name:"techniques",route:"/techniques",children:[{kind:"Meta",locale:"ca",data:{zeroshot:"Prompt sense entrenament previ (Zero-shot)",fewshot:"Prompt amb poques mostres (Few-shot)",cot:"Prompt cadena de pensament (CoT)",consistency:"Autoconsist\xe8ncia",knowledge:"Prompt de coneixement generat",tot:"Tree of Thoughts",rag:"Retrieval Augmented Generation",art:"Automatic Reasoning and Tool-use",ape:"Enginyeria de prompts autom\xe0tic (APE)",activeprompt:"Prompt actiu",dsp:"Prompt d'Est\xedmul dirigit",react:"ReAct",multimodalcot:"Prompt CoT multimodal",graph:"Prompt de graf"}},{kind:"MdxPage",name:"activeprompt",route:"/techniques/activeprompt",locale:"ca"},{kind:"MdxPage",name:"ape",route:"/techniques/ape",locale:"ca"},{kind:"MdxPage",name:"art",route:"/techniques/art",locale:"ca"},{kind:"MdxPage",name:"consistency",route:"/techniques/consistency",locale:"ca"},{kind:"MdxPage",name:"cot",route:"/techniques/cot",locale:"ca"},{kind:"MdxPage",name:"dsp",route:"/techniques/dsp",locale:"ca"},{kind:"MdxPage",name:"fewshot",route:"/techniques/fewshot",locale:"ca"},{kind:"MdxPage",name:"graph",route:"/techniques/graph",locale:"ca"},{kind:"MdxPage",name:"knowledge",route:"/techniques/knowledge",locale:"ca"},{kind:"MdxPage",name:"multimodalcot",route:"/techniques/multimodalcot",locale:"ca"},{kind:"MdxPage",name:"rag",route:"/techniques/rag",locale:"ca"},{kind:"MdxPage",name:"react",route:"/techniques/react",locale:"ca"},{kind:"MdxPage",name:"tot",route:"/techniques/tot",locale:"ca"},{kind:"MdxPage",name:"zeroshot",route:"/techniques/zeroshot",locale:"ca"}]},{kind:"MdxPage",name:"techniques",route:"/techniques",locale:"ca"},{kind:"MdxPage",name:"tools",route:"/tools",locale:"ca"}],flexsearch:{codeblocks:!0},title:"Datasets",headings:s},pageNextRoute:"/datasets.ca",nextraLayout:i.ZP,themeConfig:r.Z};t.default=(0,o.j)(d)}},function(e){e.O(0,[67892,49774,92888,40179],function(){return e(e.s=83012)}),_N_E=e.O()}]);