(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[12436],{58744:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/risks/factuality.es",function(){return n(41069)}])},43677:function(e,a,n){"use strict";n.d(a,{Z:function(){return m}});var t=n(11527),o=n(50959),s=n(85274),r=n(5341);function i(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",width:"24",height:"24",...e,children:(0,t.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}let l=e=>{let{children:a,className:n,...o}=e;return(0,t.jsx)("button",{className:(0,r.Z)("nextra-button nx-transition-all active:nx-opacity-50","nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-1.5","dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50",n),...o,children:a})};function c(e){return(0,t.jsx)("svg",{viewBox:"0 0 20 20",width:"1em",height:"1em",fill:"currentColor",...e,children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}function d(e){return(0,t.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",...e,children:[(0,t.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}let x=e=>{let{getValue:a,...n}=e,[s,r]=(0,o.useState)(!1);(0,o.useEffect)(()=>{if(!s)return;let e=setTimeout(()=>{r(!1)},2e3);return()=>{clearTimeout(e)}},[s]);let i=(0,o.useCallback)(async()=>{r(!0),(null==navigator?void 0:navigator.clipboard)||console.error("Access to clipboard rejected!");try{await navigator.clipboard.writeText(a())}catch(e){console.error("Failed to copy!")}},[a]);return(0,t.jsx)(l,{onClick:i,title:"Copy code",tabIndex:0,...n,children:(0,t.jsx)(s?c:d,{className:"nextra-copy-icon nx-pointer-events-none nx-h-4 nx-w-4"})})},p=e=>{let{children:a,className:n,hasCopyCode:s=!0,filename:c,...d}=e,p=(0,o.useRef)(null),u=(0,o.useCallback)(()=>{let e=document.documentElement.dataset,a="nextraWordWrap"in e;a?delete e.nextraWordWrap:e.nextraWordWrap=""},[]);return(0,t.jsxs)("div",{className:"nextra-code-block nx-relative nx-mt-6 first:nx-mt-0",children:[c&&(0,t.jsx)("div",{className:"nx-absolute nx-top-0 nx-z-[1] nx-w-full nx-truncate nx-rounded-t-xl nx-bg-primary-700/5 nx-py-2 nx-px-4 nx-text-xs nx-text-gray-700 dark:nx-bg-primary-300/10 dark:nx-text-gray-200",children:c}),(0,t.jsx)("pre",{className:(0,r.Z)("nx-bg-primary-700/5 nx-mb-4 nx-overflow-x-auto nx-rounded-xl nx-subpixel-antialiased dark:nx-bg-primary-300/10 nx-text-[.9em]","contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40",c?"nx-pt-12 nx-pb-4":"nx-py-4",n),ref:p,...d,children:o.isValidElement(a)&&"code"===a.type?a.props.children:a}),(0,t.jsxs)("div",{className:(0,r.Z)("nx-opacity-0 nx-transition [div:hover>&]:nx-opacity-100 focus-within:nx-opacity-100","nx-flex nx-gap-1 nx-absolute nx-m-[11px] nx-right-0",c?"nx-top-8":"nx-top-0"),children:[(0,t.jsx)(l,{onClick:u,className:"md:nx-hidden",title:"Toggle word wrap elvis",children:(0,t.jsx)(i,{className:"nx-pointer-events-none nx-h-4 nx-w-4"})}),s&&(0,t.jsx)(x,{getValue(){var e,a;return(null===(e=null===(a=p.current)||void 0===a?void 0:a.querySelector("code"))||void 0===e?void 0:e.textContent)||""}})]})]})},u={logo:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 206 246",fill:"none",children:[(0,t.jsx)("circle",{cx:"40",cy:"40",r:"40",fill:"currentColor"}),(0,t.jsx)("circle",{cx:"40",cy:"206",r:"40",fill:"currentColor"}),(0,t.jsx)("circle",{cx:"166",cy:"120",r:"40",fill:"currentColor"})]}),(0,t.jsx)("span",{style:{marginLeft:".4em",fontWeight:800},children:"Prompt Engineering Guide"})]}),i18n:[{locale:"en",text:"English"},{locale:"zh",text:"中文"},{locale:"jp",text:"日本語"},{locale:"pt",text:"Portugu\xeas"},{locale:"it",text:"Italian"},{locale:"tr",text:"T\xfcrk\xe7e"},{locale:"es",text:"Espa\xf1ol"},{locale:"fr",text:"Fran\xe7ais"},{locale:"kr",text:"한국어"},{locale:"ca",text:"Catal\xe0"},{locale:"fi",text:"Finnish"},{locale:"ru",text:"Русский"}],head:function(){let{title:e}=(0,s.ZR)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("title",{children:[e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"," "]}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,t.jsx)("meta",{property:"og:title",content:"Prompt Engineering Guide"}),(0,t.jsx)("meta",{property:"og:description",content:"A Comprehensive Overview of Prompt Engineering"}),(0,t.jsx)("meta",{name:"og:title",content:e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"}),(0,t.jsx)("link",{rel:"icon",href:"/144-favicon.svg",type:"image/svg+xml"}),(0,t.jsx)("link",{rel:"icon",href:"/144-favicon-dark.svg",type:"image/svg+xml",media:"(prefers-color-scheme: dark)"})]})},project:{link:"https://github.com/dair-ai/Prompt-Engineering-Guide"},chat:{link:"https://discord.gg/FUyz9vPAwf"},docsRepositoryBase:"https://github.com/dair-ai/Prompt-Engineering-Guide/tree/main/",footer:{text:"Copyright \xa9 2023 DAIR.AI"},search:{placeholder:"Search..."},components:{pre:p}};var m=u},41069:function(e,a,n){"use strict";n.r(a),n.d(a,{__toc:function(){return l}});var t=n(11527),o=n(55411),s=n(85274),r=n(43677);n(20492),n(95178);var i=n(82132);let l=[];function c(e){let a=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",em:"em",pre:"pre",code:"code",span:"span"},(0,i.a)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{children:"Veracidad"}),"\n",(0,t.jsx)(a.p,{children:"Los LLMs tienen una tendencia a generar respuestas que suenan coherentes y convincentes, pero a veces pueden ser inventadas. Mejorar las instrucciones puede ayudar a mejorar el modelo para generar respuestas m\xe1s precisas/factuales y reducir la probabilidad de generar respuestas inconsistentes e inventadas."}),"\n",(0,t.jsx)(a.p,{children:"Algunas soluciones pueden incluir:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"proporcionar verdades fundamentales (por ejemplo, un p\xe1rrafo de un art\xedculo relacionado o una entrada de Wikipedia) como parte del contexto para reducir la probabilidad de que el modelo produzca texto inventado."}),"\n",(0,t.jsx)(a.li,{children:'configurar el modelo para producir respuestas menos diversas disminuyendo los par\xe1metros de probabilidad e instruy\xe9ndolo a admitir (por ejemplo, "No lo s\xe9") cuando no sepa la respuesta.'}),"\n",(0,t.jsx)(a.li,{children:"proporcionar en las instrucciones una combinaci\xf3n de ejemplos de preguntas y respuestas que pueda conocer o no."}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"Veamos un ejemplo sencillo:"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.em,{children:"Prompt:"})}),"\n",(0,t.jsx)(a.pre,{"data-language":"text","data-theme":"default",children:(0,t.jsxs)(a.code,{"data-language":"text","data-theme":"default",children:[(0,t.jsx)(a.span,{className:"line",children:(0,t.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"P: \xbfQu\xe9 es un \xe1tomo?"})}),"\n",(0,t.jsx)(a.span,{className:"line",children:(0,t.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"R: Un \xe1tomo es una part\xedcula diminuta que lo conforma todo."})}),"\n",(0,t.jsx)(a.span,{className:"line",children:(0,t.jsx)(a.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,t.jsx)(a.span,{className:"line",children:(0,t.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"P: \xbfQui\xe9n es Alvan Muntz?"})}),"\n",(0,t.jsx)(a.span,{className:"line",children:(0,t.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"R: ?"})}),"\n",(0,t.jsx)(a.span,{className:"line",children:(0,t.jsx)(a.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,t.jsx)(a.span,{className:"line",children:(0,t.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"P: \xbfQu\xe9 es Kozar-09?"})}),"\n",(0,t.jsx)(a.span,{className:"line",children:(0,t.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"R: ?"})}),"\n",(0,t.jsx)(a.span,{className:"line",children:(0,t.jsx)(a.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,t.jsx)(a.span,{className:"line",children:(0,t.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"P: \xbfCu\xe1ntas lunas tiene Marte?"})}),"\n",(0,t.jsx)(a.span,{className:"line",children:(0,t.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"R: Dos, Fobos y Deimos."})}),"\n",(0,t.jsx)(a.span,{className:"line",children:(0,t.jsx)(a.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,t.jsx)(a.span,{className:"line",children:(0,t.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"P: \xbfQui\xe9n es Neto Beto Roberto?"})})]})}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.em,{children:"Salida:"})}),"\n",(0,t.jsx)(a.pre,{"data-language":"text","data-theme":"default",children:(0,t.jsx)(a.code,{"data-language":"text","data-theme":"default",children:(0,t.jsx)(a.span,{className:"line",children:(0,t.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"R: ?"})})})}),"\n",(0,t.jsx)(a.p,{children:'Invent\xe9 el nombre "Neto Beto Roberto", por lo que el modelo es correcto en este caso. Intenta cambiar la pregunta un poco y ve si puedes hacer que funcione. Hay diferentes formas de mejorar esto a\xfan m\xe1s bas\xe1ndose en todo lo que has aprendido hasta ahora.'})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:a}=Object.assign({},(0,i.a)(),e.components);return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/risks/factuality.es.mdx",route:"/risks/factuality",timestamp:1681412727e3,pageMap:[{kind:"Meta",locale:"es",data:{index:"Ingenier\xeda de Prompt",introduction:"Introducci\xf3n",techniques:"T\xe9cnicas",applications:"Aplicaciones",models:"Modelos",risks:"Riesgos y Malos Usos",papers:"Papers",tools:"Herramientas",notebooks:"Notebooks",datasets:"Datasets",readings:"Lecturas Adicionales",course:{title:"Curso de Ingenier\xeda de Prompt",type:"page"},services:{title:"Servicios",type:"page"},about:{title:"Acerca de",type:"page"}}},{kind:"MdxPage",name:"about",route:"/about",locale:"es"},{kind:"Folder",name:"applications",route:"/applications",children:[{kind:"Meta",locale:"es",data:{pal:"Modelos de lenguaje asistidos por programas",generating:"Generaci\xf3n de datos",coding:"Generating Code",workplace_casestudy:"Caso de estudio de clasificaci\xf3n de trabajo de graduados",pf:"Prompt Function"}},{kind:"MdxPage",name:"coding",route:"/applications/coding",locale:"es"},{kind:"MdxPage",name:"generating",route:"/applications/generating",locale:"es"},{kind:"MdxPage",name:"pal",route:"/applications/pal",locale:"es"},{kind:"MdxPage",name:"pf",route:"/applications/pf",locale:"es"},{kind:"MdxPage",name:"workplace_casestudy",route:"/applications/workplace_casestudy",locale:"es"},{kind:"MdxPage",name:"generating_textbooks",route:"/applications/generating_textbooks",locale:"en"},{kind:"MdxPage",name:"synthetic_rag",route:"/applications/synthetic_rag",locale:"en"}]},{kind:"MdxPage",name:"applications",route:"/applications",locale:"es"},{kind:"MdxPage",name:"course",route:"/course",locale:"es"},{kind:"MdxPage",name:"datasets",route:"/datasets",locale:"es"},{kind:"MdxPage",name:"index",route:"/",locale:"es"},{kind:"Folder",name:"introduction",route:"/introduction",children:[{kind:"Meta",locale:"es",data:{settings:"Configuraci\xf3n de LLM",basics:"Conceptos b\xe1sicos de prompting",elements:"Elementos de prompting",tips:"Consejos generales para dise\xf1ar prompts",examples:"Ejemplos de prompts"}},{kind:"MdxPage",name:"basics",route:"/introduction/basics",locale:"es"},{kind:"MdxPage",name:"elements",route:"/introduction/elements",locale:"es"},{kind:"MdxPage",name:"examples",route:"/introduction/examples",locale:"es"},{kind:"MdxPage",name:"settings",route:"/introduction/settings",locale:"es"},{kind:"MdxPage",name:"tips",route:"/introduction/tips",locale:"es"}]},{kind:"MdxPage",name:"introduction",route:"/introduction",locale:"es"},{kind:"Folder",name:"models",route:"/models",children:[{kind:"Meta",locale:"es",data:{flan:"Flan",chatgpt:"ChatGPT",llama:"LLaMA","gpt-4":"GPT-4","mistral-7b":"Mistral 7B",collection:"Listado de LLMs"}},{kind:"MdxPage",name:"chatgpt",route:"/models/chatgpt",locale:"es"},{kind:"MdxPage",name:"collection",route:"/models/collection",locale:"es"},{kind:"MdxPage",name:"flan",route:"/models/flan",locale:"es"},{kind:"MdxPage",name:"gpt-4",route:"/models/gpt-4",locale:"es"},{kind:"MdxPage",name:"llama",route:"/models/llama",locale:"es"},{kind:"MdxPage",name:"mistral-7b",route:"/models/mistral-7b",locale:"es"}]},{kind:"MdxPage",name:"models",route:"/models",locale:"es"},{kind:"MdxPage",name:"notebooks",route:"/notebooks",locale:"es"},{kind:"MdxPage",name:"papers",route:"/papers",locale:"es"},{kind:"MdxPage",name:"readings",route:"/readings",locale:"es"},{kind:"Folder",name:"risks",route:"/risks",children:[{kind:"Meta",locale:"es",data:{adversarial:"Adversarial Prompting",factuality:"Veracidad",biases:"Sesgos"}},{kind:"MdxPage",name:"adversarial",route:"/risks/adversarial",locale:"es"},{kind:"MdxPage",name:"biases",route:"/risks/biases",locale:"es"},{kind:"MdxPage",name:"factuality",route:"/risks/factuality",locale:"es"}]},{kind:"MdxPage",name:"risks",route:"/risks",locale:"es"},{kind:"MdxPage",name:"services",route:"/services",locale:"es"},{kind:"Folder",name:"techniques",route:"/techniques",children:[{kind:"Meta",locale:"es",data:{zeroshot:"Prompt sin entrenamiento previo (Zero-shot)",fewshot:"Prompt con pocas muestras (Few-shot)",cot:"Prompt cadena de pensamiento (CoT)",consistency:"Auto-consistencia",knowledge:"Prompt de conocimiento generado",tot:"Tree of Thoughts",rag:"Retrieval Augmented Generation",art:"Automatic Reasoning and Tool-use",ape:"Ingenier\xeda de prompts autom\xe1tico (APE)",activeprompt:"Prompt activo",dsp:"Prompt de Est\xedmulo direccional",react:"ReAct",multimodalcot:"Prompt CoT multimodal",graph:"Prompt de grafo"}},{kind:"MdxPage",name:"activeprompt",route:"/techniques/activeprompt",locale:"es"},{kind:"MdxPage",name:"ape",route:"/techniques/ape",locale:"es"},{kind:"MdxPage",name:"art",route:"/techniques/art",locale:"es"},{kind:"MdxPage",name:"consistency",route:"/techniques/consistency",locale:"es"},{kind:"MdxPage",name:"cot",route:"/techniques/cot",locale:"es"},{kind:"MdxPage",name:"dsp",route:"/techniques/dsp",locale:"es"},{kind:"MdxPage",name:"fewshot",route:"/techniques/fewshot",locale:"es"},{kind:"MdxPage",name:"graph",route:"/techniques/graph",locale:"es"},{kind:"MdxPage",name:"knowledge",route:"/techniques/knowledge",locale:"es"},{kind:"MdxPage",name:"multimodalcot",route:"/techniques/multimodalcot",locale:"es"},{kind:"MdxPage",name:"rag",route:"/techniques/rag",locale:"es"},{kind:"MdxPage",name:"react",route:"/techniques/react",locale:"es"},{kind:"MdxPage",name:"tot",route:"/techniques/tot",locale:"es"},{kind:"MdxPage",name:"zeroshot",route:"/techniques/zeroshot",locale:"es"}]},{kind:"MdxPage",name:"techniques",route:"/techniques",locale:"es"},{kind:"MdxPage",name:"tools",route:"/tools",locale:"es"}],flexsearch:{codeblocks:!0},title:"Veracidad",headings:l},pageNextRoute:"/risks/factuality.es",nextraLayout:s.ZP,themeConfig:r.Z};a.default=(0,o.j)(d)}},function(e){e.O(0,[67892,49774,92888,40179],function(){return e(e.s=58744)}),_N_E=e.O()}]);