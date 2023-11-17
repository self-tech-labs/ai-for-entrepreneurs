(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[96539],{70837:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/applications/generating.ca",function(){return n(8335)}])},43677:function(e,a,n){"use strict";n.d(a,{Z:function(){return u}});var t=n(11527),s=n(50959),i=n(85274),l=n(5341);function r(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",width:"24",height:"24",...e,children:(0,t.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}let o=e=>{let{children:a,className:n,...s}=e;return(0,t.jsx)("button",{className:(0,l.Z)("nextra-button nx-transition-all active:nx-opacity-50","nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-1.5","dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50",n),...s,children:a})};function c(e){return(0,t.jsx)("svg",{viewBox:"0 0 20 20",width:"1em",height:"1em",fill:"currentColor",...e,children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}function d(e){return(0,t.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",...e,children:[(0,t.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}let x=e=>{let{getValue:a,...n}=e,[i,l]=(0,s.useState)(!1);(0,s.useEffect)(()=>{if(!i)return;let e=setTimeout(()=>{l(!1)},2e3);return()=>{clearTimeout(e)}},[i]);let r=(0,s.useCallback)(async()=>{l(!0),(null==navigator?void 0:navigator.clipboard)||console.error("Access to clipboard rejected!");try{await navigator.clipboard.writeText(a())}catch(e){console.error("Failed to copy!")}},[a]);return(0,t.jsx)(o,{onClick:r,title:"Copy code",tabIndex:0,...n,children:(0,t.jsx)(i?c:d,{className:"nextra-copy-icon nx-pointer-events-none nx-h-4 nx-w-4"})})},p=e=>{let{children:a,className:n,hasCopyCode:i=!0,filename:c,...d}=e,p=(0,s.useRef)(null),m=(0,s.useCallback)(()=>{let e=document.documentElement.dataset,a="nextraWordWrap"in e;a?delete e.nextraWordWrap:e.nextraWordWrap=""},[]);return(0,t.jsxs)("div",{className:"nextra-code-block nx-relative nx-mt-6 first:nx-mt-0",children:[c&&(0,t.jsx)("div",{className:"nx-absolute nx-top-0 nx-z-[1] nx-w-full nx-truncate nx-rounded-t-xl nx-bg-primary-700/5 nx-py-2 nx-px-4 nx-text-xs nx-text-gray-700 dark:nx-bg-primary-300/10 dark:nx-text-gray-200",children:c}),(0,t.jsx)("pre",{className:(0,l.Z)("nx-bg-primary-700/5 nx-mb-4 nx-overflow-x-auto nx-rounded-xl nx-subpixel-antialiased dark:nx-bg-primary-300/10 nx-text-[.9em]","contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40",c?"nx-pt-12 nx-pb-4":"nx-py-4",n),ref:p,...d,children:s.isValidElement(a)&&"code"===a.type?a.props.children:a}),(0,t.jsxs)("div",{className:(0,l.Z)("nx-opacity-0 nx-transition [div:hover>&]:nx-opacity-100 focus-within:nx-opacity-100","nx-flex nx-gap-1 nx-absolute nx-m-[11px] nx-right-0",c?"nx-top-8":"nx-top-0"),children:[(0,t.jsx)(o,{onClick:m,className:"md:nx-hidden",title:"Toggle word wrap elvis",children:(0,t.jsx)(r,{className:"nx-pointer-events-none nx-h-4 nx-w-4"})}),i&&(0,t.jsx)(x,{getValue(){var e,a;return(null===(e=null===(a=p.current)||void 0===a?void 0:a.querySelector("code"))||void 0===e?void 0:e.textContent)||""}})]})]})},m={logo:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 206 246",fill:"none",children:[(0,t.jsx)("circle",{cx:"40",cy:"40",r:"40",fill:"currentColor"}),(0,t.jsx)("circle",{cx:"40",cy:"206",r:"40",fill:"currentColor"}),(0,t.jsx)("circle",{cx:"166",cy:"120",r:"40",fill:"currentColor"})]}),(0,t.jsx)("span",{style:{marginLeft:".4em",fontWeight:800},children:"Prompt Engineering Guide"})]}),i18n:[{locale:"en",text:"English"},{locale:"zh",text:"中文"},{locale:"jp",text:"日本語"},{locale:"pt",text:"Portugu\xeas"},{locale:"it",text:"Italian"},{locale:"tr",text:"T\xfcrk\xe7e"},{locale:"es",text:"Espa\xf1ol"},{locale:"fr",text:"Fran\xe7ais"},{locale:"kr",text:"한국어"},{locale:"ca",text:"Catal\xe0"},{locale:"fi",text:"Finnish"},{locale:"ru",text:"Русский"}],head:function(){let{title:e}=(0,i.ZR)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("title",{children:[e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"," "]}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,t.jsx)("meta",{property:"og:title",content:"Prompt Engineering Guide"}),(0,t.jsx)("meta",{property:"og:description",content:"A Comprehensive Overview of Prompt Engineering"}),(0,t.jsx)("meta",{name:"og:title",content:e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"}),(0,t.jsx)("link",{rel:"icon",href:"/144-favicon.svg",type:"image/svg+xml"}),(0,t.jsx)("link",{rel:"icon",href:"/144-favicon-dark.svg",type:"image/svg+xml",media:"(prefers-color-scheme: dark)"})]})},project:{link:"https://github.com/dair-ai/Prompt-Engineering-Guide"},chat:{link:"https://discord.gg/FUyz9vPAwf"},docsRepositoryBase:"https://github.com/dair-ai/Prompt-Engineering-Guide/tree/main/",footer:{text:"Copyright \xa9 2023 DAIR.AI"},search:{placeholder:"Search..."},components:{pre:p}};var u=m},8335:function(e,a,n){"use strict";n.r(a),n.d(a,{__toc:function(){return o}});var t=n(11527),s=n(55411),i=n(85274),l=n(43677);n(20492),n(95178);var r=n(82132);let o=[];function c(e){let a=Object.assign({h1:"h1",p:"p",em:"em",pre:"pre",code:"code",span:"span"},(0,r.a)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{children:"Generaci\xf3 de dades"}),"\n",(0,t.jsx)(a.p,{children:"Els LLMs tenen una gran capacitat per generar text coherent. L'\xfas d'estrat\xe8gies de prompts efectives pot dirigir el model per produir respostes millors, m\xe9s consistents i m\xe9s factuales. Els LLMs tamb\xe9 poden ser especialment \xfatils per generar dades, que \xe9s realment \xfatil per realitzar tot tipus d'experiments i avaluacions. Per exemple, podem utilitzar-lo per generar mostres r\xe0pides per a un classificador de sentiments com aquest:"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.em,{children:"Prompt:"})}),"\n",(0,t.jsx)(a.pre,{"data-language":"text","data-theme":"default",children:(0,t.jsxs)(a.code,{"data-language":"text","data-theme":"default",children:[(0,t.jsx)(a.span,{className:"line",children:(0,t.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Genera 10 exemples per a l'an\xe0lisi de sentiments. Els exemples es classifiquen com a positius o negatius. Genera 2 exemples negatius i 8 exemples positius. Utilitza aquest format per als exemples:"})}),"\n",(0,t.jsx)(a.span,{className:"line",children:(0,t.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Q: <frase>"})}),"\n",(0,t.jsx)(a.span,{className:"line",children:(0,t.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"A: <sentiment>"})})]})}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.em,{children:"Sortida:"})}),"\n",(0,t.jsx)(a.pre,{"data-language":"text","data-theme":"default",children:(0,t.jsxs)(a.code,{"data-language":"text","data-theme":"default",children:[(0,t.jsx)(a.span,{className:"line",children:(0,t.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Q: Acabo de rebre la millor not\xedcia de la meva vida!"})}),"\n",(0,t.jsx)(a.span,{className:"line",children:(0,t.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"A: Positiu"})}),"\n",(0,t.jsx)(a.span,{className:"line",children:(0,t.jsx)(a.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,t.jsx)(a.span,{className:"line",children:(0,t.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Q: Ens han pujat el sou a la feina!"})}),"\n",(0,t.jsx)(a.span,{className:"line",children:(0,t.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"A: Positiu"})}),"\n",(0,t.jsx)(a.span,{className:"line",children:(0,t.jsx)(a.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,t.jsx)(a.span,{className:"line",children:(0,t.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Q: Estic molt orgull\xf3s del que he aconseguit avui."})}),"\n",(0,t.jsx)(a.span,{className:"line",children:(0,t.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"A: Positiu"})}),"\n",(0,t.jsx)(a.span,{className:"line",children:(0,t.jsx)(a.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,t.jsx)(a.span,{className:"line",children:(0,t.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Q: Estic tenint el millor dia de la meva vida!"})}),"\n",(0,t.jsx)(a.span,{className:"line",children:(0,t.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"A: Positiu"})}),"\n",(0,t.jsx)(a.span,{className:"line",children:(0,t.jsx)(a.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,t.jsx)(a.span,{className:"line",children:(0,t.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Q: Estic molt emocionat pel cap de setmana."})}),"\n",(0,t.jsx)(a.span,{className:"line",children:(0,t.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"A: Positiu"})}),"\n",(0,t.jsx)(a.span,{className:"line",children:(0,t.jsx)(a.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,t.jsx)(a.span,{className:"line",children:(0,t.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Q: Acabo de rebre el millor regal de la meva vida!"})}),"\n",(0,t.jsx)(a.span,{className:"line",children:(0,t.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"A: Positiu"})}),"\n",(0,t.jsx)(a.span,{className:"line",children:(0,t.jsx)(a.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,t.jsx)(a.span,{className:"line",children:(0,t.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Q: Estic tan feli\xe7 ara mateix."})}),"\n",(0,t.jsx)(a.span,{className:"line",children:(0,t.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"A: Positiu"})}),"\n",(0,t.jsx)(a.span,{className:"line",children:(0,t.jsx)(a.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,t.jsx)(a.span,{className:"line",children:(0,t.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Q: Estic tan agra\xeft de tenir una fam\xedlia tan incre\xefble."})}),"\n",(0,t.jsx)(a.span,{className:"line",children:(0,t.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"A: Positiu"})}),"\n",(0,t.jsx)(a.span,{className:"line",children:(0,t.jsx)(a.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,t.jsx)(a.span,{className:"line",children:(0,t.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Q: El temps a fora est\xe0 molt ennuvolat."})}),"\n",(0,t.jsx)(a.span,{className:"line",children:(0,t.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"A: Negatiu"})}),"\n",(0,t.jsx)(a.span,{className:"line",children:(0,t.jsx)(a.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,t.jsx)(a.span,{className:"line",children:(0,t.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Q: Acabo de rebre una not\xedcia terrible."})}),"\n",(0,t.jsx)(a.span,{className:"line",children:(0,t.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"A: Negatiu"})})]})}),"\n",(0,t.jsx)(a.p,{children:"Aix\xf2 \xe9s molt \xfatil. De fet, utilitzem aquest exemple per a una prova diferent en una altra secci\xf3 de les guies."})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:a}=Object.assign({},(0,r.a)(),e.components);return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/applications/generating.ca.mdx",route:"/applications/generating",timestamp:1683903982e3,pageMap:[{kind:"Meta",locale:"ca",data:{index:"Prompt Engineering",introduction:"Introduction",techniques:"Techniques",applications:"Applications",models:"Models",risks:"Risks & Misuses",papers:"Papers",tools:"Tools",notebooks:"Notebooks",datasets:"Datasets",readings:"Additional Readings",course:{title:"Prompt Engineering Course",type:"page"},services:{title:"Services",type:"page"},about:{title:"About",type:"page"}}},{kind:"MdxPage",name:"about",route:"/about",locale:"ca"},{kind:"Folder",name:"applications",route:"/applications",children:[{kind:"Meta",locale:"ca",data:{pal:"Models de Llenguatge Assistits per Programa",generating:"Generaci\xf3 de Dades",coding:"Generaci\xf3 de Codi",workplace_casestudy:"Estudi de Cas de Classificaci\xf3 de Llocs de Treball per a Titulats",pf:"Prompt Function"}},{kind:"MdxPage",name:"coding",route:"/applications/coding",locale:"ca"},{kind:"MdxPage",name:"generating",route:"/applications/generating",locale:"ca"},{kind:"MdxPage",name:"pal",route:"/applications/pal",locale:"ca"},{kind:"MdxPage",name:"pf",route:"/applications/pf",locale:"ca"},{kind:"MdxPage",name:"workplace_casestudy",route:"/applications/workplace_casestudy",locale:"ca"},{kind:"MdxPage",name:"generating_textbooks",route:"/applications/generating_textbooks",locale:"en"},{kind:"MdxPage",name:"synthetic_rag",route:"/applications/synthetic_rag",locale:"en"}]},{kind:"MdxPage",name:"applications",route:"/applications",locale:"ca"},{kind:"MdxPage",name:"course",route:"/course",locale:"ca"},{kind:"MdxPage",name:"datasets",route:"/datasets",locale:"ca"},{kind:"MdxPage",name:"index",route:"/",locale:"ca"},{kind:"Folder",name:"introduction",route:"/introduction",children:[{kind:"Meta",locale:"ca",data:{settings:"Configuraci\xf3 de LLM",basics:"Conceptes B\xe0sics de la Creaci\xf3 de Prompts",elements:"Elements del Prompt",tips:"Consells Generals per Dissenyar Prompts",examples:"Exemples de Prompts"}},{kind:"MdxPage",name:"basics",route:"/introduction/basics",locale:"ca"},{kind:"MdxPage",name:"elements",route:"/introduction/elements",locale:"ca"},{kind:"MdxPage",name:"examples",route:"/introduction/examples",locale:"ca"},{kind:"MdxPage",name:"settings",route:"/introduction/settings",locale:"ca"},{kind:"MdxPage",name:"tips",route:"/introduction/tips",locale:"ca"}]},{kind:"MdxPage",name:"introduction",route:"/introduction",locale:"ca"},{kind:"Folder",name:"models",route:"/models",children:[{kind:"Meta",locale:"ca",data:{flan:"Flan",chatgpt:"ChatGPT",llama:"LLaMA","gpt-4":"GPT-4","mistral-7b":"Mistral 7B",collection:"Col\xb7lecci\xf3 de Models"}},{kind:"MdxPage",name:"chatgpt",route:"/models/chatgpt",locale:"ca"},{kind:"MdxPage",name:"collection",route:"/models/collection",locale:"ca"},{kind:"MdxPage",name:"flan",route:"/models/flan",locale:"ca"},{kind:"MdxPage",name:"gpt-4",route:"/models/gpt-4",locale:"ca"},{kind:"MdxPage",name:"llama",route:"/models/llama",locale:"ca"},{kind:"MdxPage",name:"mistral-7b",route:"/models/mistral-7b",locale:"ca"}]},{kind:"MdxPage",name:"models",route:"/models",locale:"ca"},{kind:"MdxPage",name:"notebooks",route:"/notebooks",locale:"ca"},{kind:"MdxPage",name:"papers",route:"/papers",locale:"ca"},{kind:"MdxPage",name:"readings",route:"/readings",locale:"ca"},{kind:"Folder",name:"risks",route:"/risks",children:[{kind:"Meta",locale:"ca",data:{adversarial:"Adversarial Prompting",factuality:"Factualitat",biases:"Sesgos"}},{kind:"MdxPage",name:"adversarial",route:"/risks/adversarial",locale:"ca"},{kind:"MdxPage",name:"biases",route:"/risks/biases",locale:"ca"},{kind:"MdxPage",name:"factuality",route:"/risks/factuality",locale:"ca"}]},{kind:"MdxPage",name:"risks",route:"/risks",locale:"ca"},{kind:"MdxPage",name:"services",route:"/services",locale:"ca"},{kind:"Folder",name:"techniques",route:"/techniques",children:[{kind:"Meta",locale:"ca",data:{zeroshot:"Prompt sense entrenament previ (Zero-shot)",fewshot:"Prompt amb poques mostres (Few-shot)",cot:"Prompt cadena de pensament (CoT)",consistency:"Autoconsist\xe8ncia",knowledge:"Prompt de coneixement generat",tot:"Tree of Thoughts",rag:"Retrieval Augmented Generation",art:"Automatic Reasoning and Tool-use",ape:"Enginyeria de prompts autom\xe0tic (APE)",activeprompt:"Prompt actiu",dsp:"Prompt d'Est\xedmul dirigit",react:"ReAct",multimodalcot:"Prompt CoT multimodal",graph:"Prompt de graf"}},{kind:"MdxPage",name:"activeprompt",route:"/techniques/activeprompt",locale:"ca"},{kind:"MdxPage",name:"ape",route:"/techniques/ape",locale:"ca"},{kind:"MdxPage",name:"art",route:"/techniques/art",locale:"ca"},{kind:"MdxPage",name:"consistency",route:"/techniques/consistency",locale:"ca"},{kind:"MdxPage",name:"cot",route:"/techniques/cot",locale:"ca"},{kind:"MdxPage",name:"dsp",route:"/techniques/dsp",locale:"ca"},{kind:"MdxPage",name:"fewshot",route:"/techniques/fewshot",locale:"ca"},{kind:"MdxPage",name:"graph",route:"/techniques/graph",locale:"ca"},{kind:"MdxPage",name:"knowledge",route:"/techniques/knowledge",locale:"ca"},{kind:"MdxPage",name:"multimodalcot",route:"/techniques/multimodalcot",locale:"ca"},{kind:"MdxPage",name:"rag",route:"/techniques/rag",locale:"ca"},{kind:"MdxPage",name:"react",route:"/techniques/react",locale:"ca"},{kind:"MdxPage",name:"tot",route:"/techniques/tot",locale:"ca"},{kind:"MdxPage",name:"zeroshot",route:"/techniques/zeroshot",locale:"ca"}]},{kind:"MdxPage",name:"techniques",route:"/techniques",locale:"ca"},{kind:"MdxPage",name:"tools",route:"/tools",locale:"ca"}],flexsearch:{codeblocks:!0},title:"Generaci\xf3 de dades",headings:o},pageNextRoute:"/applications/generating.ca",nextraLayout:i.ZP,themeConfig:l.Z};a.default=(0,s.j)(d)}},function(e){e.O(0,[67892,49774,92888,40179],function(){return e(e.s=70837)}),_N_E=e.O()}]);