(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[19369],{71917:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about.fr",function(){return n(68614)}])},43677:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(11527),a=n(50959),o=n(85274),i=n(5341);function l(e){return(0,r.jsx)("svg",{viewBox:"0 0 24 24",width:"24",height:"24",...e,children:(0,r.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}let s=e=>{let{children:t,className:n,...a}=e;return(0,r.jsx)("button",{className:(0,i.Z)("nextra-button nx-transition-all active:nx-opacity-50","nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-1.5","dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50",n),...a,children:t})};function c(e){return(0,r.jsx)("svg",{viewBox:"0 0 20 20",width:"1em",height:"1em",fill:"currentColor",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}function d(e){return(0,r.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",...e,children:[(0,r.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)("path",{d:"M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}let x=e=>{let{getValue:t,...n}=e,[o,i]=(0,a.useState)(!1);(0,a.useEffect)(()=>{if(!o)return;let e=setTimeout(()=>{i(!1)},2e3);return()=>{clearTimeout(e)}},[o]);let l=(0,a.useCallback)(async()=>{i(!0),(null==navigator?void 0:navigator.clipboard)||console.error("Access to clipboard rejected!");try{await navigator.clipboard.writeText(t())}catch(e){console.error("Failed to copy!")}},[t]);return(0,r.jsx)(s,{onClick:l,title:"Copy code",tabIndex:0,...n,children:(0,r.jsx)(o?c:d,{className:"nextra-copy-icon nx-pointer-events-none nx-h-4 nx-w-4"})})},u=e=>{let{children:t,className:n,hasCopyCode:o=!0,filename:c,...d}=e,u=(0,a.useRef)(null),p=(0,a.useCallback)(()=>{let e=document.documentElement.dataset,t="nextraWordWrap"in e;t?delete e.nextraWordWrap:e.nextraWordWrap=""},[]);return(0,r.jsxs)("div",{className:"nextra-code-block nx-relative nx-mt-6 first:nx-mt-0",children:[c&&(0,r.jsx)("div",{className:"nx-absolute nx-top-0 nx-z-[1] nx-w-full nx-truncate nx-rounded-t-xl nx-bg-primary-700/5 nx-py-2 nx-px-4 nx-text-xs nx-text-gray-700 dark:nx-bg-primary-300/10 dark:nx-text-gray-200",children:c}),(0,r.jsx)("pre",{className:(0,i.Z)("nx-bg-primary-700/5 nx-mb-4 nx-overflow-x-auto nx-rounded-xl nx-subpixel-antialiased dark:nx-bg-primary-300/10 nx-text-[.9em]","contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40",c?"nx-pt-12 nx-pb-4":"nx-py-4",n),ref:u,...d,children:a.isValidElement(t)&&"code"===t.type?t.props.children:t}),(0,r.jsxs)("div",{className:(0,i.Z)("nx-opacity-0 nx-transition [div:hover>&]:nx-opacity-100 focus-within:nx-opacity-100","nx-flex nx-gap-1 nx-absolute nx-m-[11px] nx-right-0",c?"nx-top-8":"nx-top-0"),children:[(0,r.jsx)(s,{onClick:p,className:"md:nx-hidden",title:"Toggle word wrap elvis",children:(0,r.jsx)(l,{className:"nx-pointer-events-none nx-h-4 nx-w-4"})}),o&&(0,r.jsx)(x,{getValue(){var e,t;return(null===(e=null===(t=u.current)||void 0===t?void 0:t.querySelector("code"))||void 0===e?void 0:e.textContent)||""}})]})]})},p={logo:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 206 246",fill:"none",children:[(0,r.jsx)("circle",{cx:"40",cy:"40",r:"40",fill:"currentColor"}),(0,r.jsx)("circle",{cx:"40",cy:"206",r:"40",fill:"currentColor"}),(0,r.jsx)("circle",{cx:"166",cy:"120",r:"40",fill:"currentColor"})]}),(0,r.jsx)("span",{style:{marginLeft:".4em",fontWeight:800},children:"Prompt Engineering Guide"})]}),i18n:[{locale:"en",text:"English"},{locale:"zh",text:"中文"},{locale:"jp",text:"日本語"},{locale:"pt",text:"Portugu\xeas"},{locale:"it",text:"Italian"},{locale:"tr",text:"T\xfcrk\xe7e"},{locale:"es",text:"Espa\xf1ol"},{locale:"fr",text:"Fran\xe7ais"},{locale:"kr",text:"한국어"},{locale:"ca",text:"Catal\xe0"},{locale:"fi",text:"Finnish"},{locale:"ru",text:"Русский"}],head:function(){let{title:e}=(0,o.ZR)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("title",{children:[e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"," "]}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,r.jsx)("meta",{property:"og:title",content:"Prompt Engineering Guide"}),(0,r.jsx)("meta",{property:"og:description",content:"A Comprehensive Overview of Prompt Engineering"}),(0,r.jsx)("meta",{name:"og:title",content:e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"}),(0,r.jsx)("link",{rel:"icon",href:"/144-favicon.svg",type:"image/svg+xml"}),(0,r.jsx)("link",{rel:"icon",href:"/144-favicon-dark.svg",type:"image/svg+xml",media:"(prefers-color-scheme: dark)"})]})},project:{link:"https://github.com/dair-ai/Prompt-Engineering-Guide"},chat:{link:"https://discord.gg/FUyz9vPAwf"},docsRepositoryBase:"https://github.com/dair-ai/Prompt-Engineering-Guide/tree/main/",footer:{text:"Copyright \xa9 2023 DAIR.AI"},search:{placeholder:"Search..."},components:{pre:u}};var m=p},68614:function(e,t,n){"use strict";n.r(t),n.d(t,{__toc:function(){return s}});var r=n(11527),a=n(55411),o=n(85274),i=n(43677);n(20492),n(95178);var l=n(82132);let s=[];function c(e){let t=Object.assign({h1:"h1",p:"p",a:"a"},(0,l.a)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{children:"About"}),"\n",(0,r.jsxs)(t.p,{children:["Le guide Prompt Engineering est un projet de ",(0,r.jsx)(t.a,{href:"https://github.com/dair-ai",children:"DAIR.AI"}),". Il vise \xe0 former les chercheurs et les praticiens sur le prompt engineering."]}),"\n",(0,r.jsx)(t.p,{children:"DAIR.AI vise \xe0 d\xe9mocratiser la recherche, l'\xe9ducation et les technologies en intelligence artificielle. Notre mission est de permettre \xe0 la prochaine g\xe9n\xe9ration d'innovateurs et de cr\xe9ateurs en IA d'\xe9merger."}),"\n",(0,r.jsx)(t.p,{children:"Nous encourageons la communaut\xe9 \xe0 contribuer. Rep\xe9rez les boutons de modification."}),"\n",(0,r.jsxs)(t.p,{children:["License information ",(0,r.jsx)(t.a,{href:"https://github.com/dair-ai/Prompt-Engineering-Guide#license",children:"here"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Nous nous inspirons de nombreuses open resources comme ",(0,r.jsx)(t.a,{href:"https://github.com/openai/openai-cookbook",children:"OpenAI CookBook"}),", ",(0,r.jsx)(t.a,{href:"http://pretrain.nlpedia.ai/",children:"Pretrain, Prompt, Predict"}),", ",(0,r.jsx)(t.a,{href:"https://learnprompting.org/",children:"Learn Prompting"}),", et bien d'autres."]})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,l.a)(),e.components);return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/about.fr.mdx",route:"/about",timestamp:1682195664e3,pageMap:[{kind:"Meta",locale:"fr",data:{index:"Prompt Engineering",introduction:"Introduction",techniques:"Techniques",applications:"Applications",models:"Models",risks:"Risques et M\xe9susages",papers:"Papers",workflows:"Workflows Genilem",tools:"Outils",notebooks:"Notebooks",datasets:"Datasets",readings:"Lectures suppl\xe9mentaires",course:{title:"Prompt Engineering Course",type:"page"},services:{title:"Services",type:"page"},about:{title:"\xc0 propos",type:"page"}}},{kind:"MdxPage",name:"about",route:"/about",locale:"fr"},{kind:"Folder",name:"applications",route:"/applications",children:[{kind:"Meta",locale:"fr",data:{pal:"Mod\xe8les de langage assist\xe9s par programme",generating:"G\xe9n\xe9ration de donn\xe9es",coding:"Generating Code",workplace_casestudy:"\xc9tude de cas sur la classification des emplois des dipl\xf4m\xe9s",pf:"Prompt Function"}},{kind:"MdxPage",name:"coding",route:"/applications/coding",locale:"fr"},{kind:"MdxPage",name:"generating",route:"/applications/generating",locale:"fr"},{kind:"MdxPage",name:"pal",route:"/applications/pal",locale:"fr"},{kind:"MdxPage",name:"pf",route:"/applications/pf",locale:"fr"},{kind:"MdxPage",name:"workplace_casestudy",route:"/applications/workplace_casestudy",locale:"fr"},{kind:"MdxPage",name:"generating_textbooks",route:"/applications/generating_textbooks",locale:"en"},{kind:"MdxPage",name:"synthetic_rag",route:"/applications/synthetic_rag",locale:"en"}]},{kind:"MdxPage",name:"applications",route:"/applications",locale:"fr"},{kind:"MdxPage",name:"course",route:"/course",locale:"fr"},{kind:"MdxPage",name:"datasets",route:"/datasets",locale:"fr"},{kind:"MdxPage",name:"index",route:"/",locale:"fr"},{kind:"Folder",name:"introduction",route:"/introduction",children:[{kind:"Meta",locale:"fr",data:{settings:"Param\xe8tres LLM",basics:"Principes de base en Prompting",elements:"\xc9l\xe9ments d'un prompt",tips:"Conseils g\xe9n\xe9raux pour la conception de prompts",examples:"Exemples de prompts"}},{kind:"MdxPage",name:"basics",route:"/introduction/basics",locale:"fr"},{kind:"MdxPage",name:"elements",route:"/introduction/elements",locale:"fr"},{kind:"MdxPage",name:"examples",route:"/introduction/examples",locale:"fr"},{kind:"MdxPage",name:"settings",route:"/introduction/settings",locale:"fr"},{kind:"MdxPage",name:"tips",route:"/introduction/tips",locale:"fr"}]},{kind:"MdxPage",name:"introduction",route:"/introduction",locale:"fr"},{kind:"Folder",name:"models",route:"/models",children:[{kind:"Meta",locale:"fr",data:{flan:"Flan",chatgpt:"ChatGPT",llama:"LLaMA","gpt-4":"GPT-4","mistral-7b":"Mistral 7B",collection:"Collection de mod\xe8les"}},{kind:"MdxPage",name:"chatgpt",route:"/models/chatgpt",locale:"fr"},{kind:"MdxPage",name:"collection",route:"/models/collection",locale:"fr"},{kind:"MdxPage",name:"flan",route:"/models/flan",locale:"fr"},{kind:"MdxPage",name:"gpt-4",route:"/models/gpt-4",locale:"fr"},{kind:"MdxPage",name:"llama",route:"/models/llama",locale:"fr"},{kind:"MdxPage",name:"mistral-7b",route:"/models/mistral-7b",locale:"fr"}]},{kind:"MdxPage",name:"models",route:"/models",locale:"fr"},{kind:"MdxPage",name:"notebooks",route:"/notebooks",locale:"fr"},{kind:"MdxPage",name:"papers",route:"/papers",locale:"fr"},{kind:"MdxPage",name:"readings",route:"/readings",locale:"fr"},{kind:"Folder",name:"risks",route:"/risks",children:[{kind:"Meta",locale:"fr",data:{adversarial:"Incitation contradictoire",factuality:"Factualit\xe9",biases:"Biases"}},{kind:"MdxPage",name:"adversarial",route:"/risks/adversarial",locale:"fr"},{kind:"MdxPage",name:"biases",route:"/risks/biases",locale:"fr"},{kind:"MdxPage",name:"factuality",route:"/risks/factuality",locale:"fr"}]},{kind:"MdxPage",name:"risks",route:"/risks",locale:"fr"},{kind:"MdxPage",name:"services",route:"/services",locale:"fr"},{kind:"Folder",name:"techniques",route:"/techniques",children:[{kind:"Meta",locale:"fr",data:{zeroshot:"Zero-shot Prompting",fewshot:"Few-shot Prompting",cot:"Chain-of-Thought Prompting",consistency:"Self-Consistency",knowledge:"Generate Knowledge Prompting",tot:"Tree of Thoughts",rag:"Retrieval Augmented Generation",art:"Automatic Reasoning and Tool-use",ape:"Automatic Prompt Engineer",activeprompt:"Active-Prompt",dsp:"Directional Stimulus Prompting",react:"ReAct",multimodalcot:"Multimodal CoT",graph:"Graph Prompting"}},{kind:"MdxPage",name:"activeprompt",route:"/techniques/activeprompt",locale:"fr"},{kind:"MdxPage",name:"ape",route:"/techniques/ape",locale:"fr"},{kind:"MdxPage",name:"art",route:"/techniques/art",locale:"fr"},{kind:"MdxPage",name:"consistency",route:"/techniques/consistency",locale:"fr"},{kind:"MdxPage",name:"cot",route:"/techniques/cot",locale:"fr"},{kind:"MdxPage",name:"dsp",route:"/techniques/dsp",locale:"fr"},{kind:"MdxPage",name:"fewshot",route:"/techniques/fewshot",locale:"fr"},{kind:"MdxPage",name:"graph",route:"/techniques/graph",locale:"fr"},{kind:"MdxPage",name:"knowledge",route:"/techniques/knowledge",locale:"fr"},{kind:"MdxPage",name:"multimodalcot",route:"/techniques/multimodalcot",locale:"fr"},{kind:"MdxPage",name:"rag",route:"/techniques/rag",locale:"fr"},{kind:"MdxPage",name:"react",route:"/techniques/react",locale:"fr"},{kind:"MdxPage",name:"tot",route:"/techniques/tot",locale:"fr"},{kind:"MdxPage",name:"zeroshot",route:"/techniques/zeroshot",locale:"fr"}]},{kind:"MdxPage",name:"techniques",route:"/techniques",locale:"fr"},{kind:"MdxPage",name:"tools",route:"/tools",locale:"fr"},{kind:"MdxPage",name:"workflows",route:"/workflows",locale:"fr"}],flexsearch:{codeblocks:!0},title:"About",headings:s},pageNextRoute:"/about.fr",nextraLayout:o.ZP,themeConfig:i.Z};t.default=(0,a.j)(d)}},function(e){e.O(0,[67892,49774,92888,40179],function(){return e(e.s=71917)}),_N_E=e.O()}]);