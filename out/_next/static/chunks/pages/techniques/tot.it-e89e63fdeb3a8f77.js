(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[68846],{45349:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/techniques/tot.it",function(){return t(53030)}])},31319:function(e,i){"use strict";i.Z={src:"/_next/static/media/TOT.3b13bc5e.png",height:550,width:1083,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAWElEQVR42h2LWw6AIAwEuf8pTYyIpOITWkopNk72Y5PJOGZuP3ZEpEkjwlqrGzq0q4mSi5HOGJdJEB0x2jJlD/NzJc4vgFcrAvhtX+GIWwr3e2GlkNau+gEXNlu9jOUmoAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4}},15134:function(e,i){"use strict";i.Z={src:"/_next/static/media/TOT2.9eb8f0f9.png",height:244,width:845,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAIAAADq9gq6AAAANElEQVR42gVAhwnAIBB0/zVDsL0d9c4CooCJ0XP0UTQxSTjz1SxqE+eeXkJNdhEki/yjhQd0WS2WR8xs3QAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:2}},9157:function(e,i){"use strict";i.Z={src:"/_next/static/media/TOT3.bf83699e.png",height:307,width:803,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAIAAAAhqtkfAAAAQUlEQVR42g3JQRLAQAQEQP//qZIMQWHlkvS1SUQiIjPP7szsnswwf4iZVbW7392eSb3LcDkIwB9V1VUe4aYQhuEDBJBELSfoAvUAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3}},41667:function(e,i,t){"use strict";t.d(i,{w:function(){return l}});var a=t(11527),n=t(5341),o=t(76484),r=t.n(o);function l(e){let{src:i,alt:t,full:o}=e;return(0,a.jsx)("div",{className:(0,n.Z)("mt-6 -mb-4 flex justify-center overflow-hidden rounded-xl border dark:border-zinc-800",o?"bg-white":"bg-zinc-100"),children:(0,a.jsx)(r(),{src:i,alt:t,className:(0,n.Z)("w-auto select-none bg-white",o?"":"ring-1 ring-gray-200")})})}},43677:function(e,i,t){"use strict";t.d(i,{Z:function(){return x}});var a=t(11527),n=t(50959),o=t(85274),r=t(5341);function l(e){return(0,a.jsx)("svg",{viewBox:"0 0 24 24",width:"24",height:"24",...e,children:(0,a.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}let s=e=>{let{children:i,className:t,...n}=e;return(0,a.jsx)("button",{className:(0,r.Z)("nextra-button nx-transition-all active:nx-opacity-50","nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-1.5","dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50",t),...n,children:i})};function c(e){return(0,a.jsx)("svg",{viewBox:"0 0 20 20",width:"1em",height:"1em",fill:"currentColor",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}function d(e){return(0,a.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",...e,children:[(0,a.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,a.jsx)("path",{d:"M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}let p=e=>{let{getValue:i,...t}=e,[o,r]=(0,n.useState)(!1);(0,n.useEffect)(()=>{if(!o)return;let e=setTimeout(()=>{r(!1)},2e3);return()=>{clearTimeout(e)}},[o]);let l=(0,n.useCallback)(async()=>{r(!0),(null==navigator?void 0:navigator.clipboard)||console.error("Access to clipboard rejected!");try{await navigator.clipboard.writeText(i())}catch(e){console.error("Failed to copy!")}},[i]);return(0,a.jsx)(s,{onClick:l,title:"Copy code",tabIndex:0,...t,children:(0,a.jsx)(o?c:d,{className:"nextra-copy-icon nx-pointer-events-none nx-h-4 nx-w-4"})})},u=e=>{let{children:i,className:t,hasCopyCode:o=!0,filename:c,...d}=e,u=(0,n.useRef)(null),g=(0,n.useCallback)(()=>{let e=document.documentElement.dataset,i="nextraWordWrap"in e;i?delete e.nextraWordWrap:e.nextraWordWrap=""},[]);return(0,a.jsxs)("div",{className:"nextra-code-block nx-relative nx-mt-6 first:nx-mt-0",children:[c&&(0,a.jsx)("div",{className:"nx-absolute nx-top-0 nx-z-[1] nx-w-full nx-truncate nx-rounded-t-xl nx-bg-primary-700/5 nx-py-2 nx-px-4 nx-text-xs nx-text-gray-700 dark:nx-bg-primary-300/10 dark:nx-text-gray-200",children:c}),(0,a.jsx)("pre",{className:(0,r.Z)("nx-bg-primary-700/5 nx-mb-4 nx-overflow-x-auto nx-rounded-xl nx-subpixel-antialiased dark:nx-bg-primary-300/10 nx-text-[.9em]","contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40",c?"nx-pt-12 nx-pb-4":"nx-py-4",t),ref:u,...d,children:n.isValidElement(i)&&"code"===i.type?i.props.children:i}),(0,a.jsxs)("div",{className:(0,r.Z)("nx-opacity-0 nx-transition [div:hover>&]:nx-opacity-100 focus-within:nx-opacity-100","nx-flex nx-gap-1 nx-absolute nx-m-[11px] nx-right-0",c?"nx-top-8":"nx-top-0"),children:[(0,a.jsx)(s,{onClick:g,className:"md:nx-hidden",title:"Toggle word wrap elvis",children:(0,a.jsx)(l,{className:"nx-pointer-events-none nx-h-4 nx-w-4"})}),o&&(0,a.jsx)(p,{getValue(){var e,i;return(null===(e=null===(i=u.current)||void 0===i?void 0:i.querySelector("code"))||void 0===e?void 0:e.textContent)||""}})]})]})},g={logo:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 206 246",fill:"none",children:[(0,a.jsx)("circle",{cx:"40",cy:"40",r:"40",fill:"currentColor"}),(0,a.jsx)("circle",{cx:"40",cy:"206",r:"40",fill:"currentColor"}),(0,a.jsx)("circle",{cx:"166",cy:"120",r:"40",fill:"currentColor"})]}),(0,a.jsx)("span",{style:{marginLeft:".4em",fontWeight:800},children:"Prompt Engineering Guide"})]}),i18n:[{locale:"en",text:"English"},{locale:"zh",text:"中文"},{locale:"jp",text:"日本語"},{locale:"pt",text:"Portugu\xeas"},{locale:"it",text:"Italian"},{locale:"tr",text:"T\xfcrk\xe7e"},{locale:"es",text:"Espa\xf1ol"},{locale:"fr",text:"Fran\xe7ais"},{locale:"kr",text:"한국어"},{locale:"ca",text:"Catal\xe0"},{locale:"fi",text:"Finnish"},{locale:"ru",text:"Русский"}],head:function(){let{title:e}=(0,o.ZR)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("title",{children:[e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"," "]}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,a.jsx)("meta",{property:"og:title",content:"Prompt Engineering Guide"}),(0,a.jsx)("meta",{property:"og:description",content:"A Comprehensive Overview of Prompt Engineering"}),(0,a.jsx)("meta",{name:"og:title",content:e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"}),(0,a.jsx)("link",{rel:"icon",href:"/144-favicon.svg",type:"image/svg+xml"}),(0,a.jsx)("link",{rel:"icon",href:"/144-favicon-dark.svg",type:"image/svg+xml",media:"(prefers-color-scheme: dark)"})]})},project:{link:"https://github.com/dair-ai/Prompt-Engineering-Guide"},chat:{link:"https://discord.gg/FUyz9vPAwf"},docsRepositoryBase:"https://github.com/dair-ai/Prompt-Engineering-Guide/tree/main/",footer:{text:"Copyright \xa9 2023 DAIR.AI"},search:{placeholder:"Search..."},components:{pre:u}};var x=g},53030:function(e,i,t){"use strict";t.r(i),t.d(i,{__toc:function(){return u}});var a=t(11527),n=t(55411),o=t(85274),r=t(43677);t(20492),t(95178);var l=t(82132),s=t(41667),c=t(31319),d=t(15134),p=t(9157);let u=[];function g(e){let i=Object.assign({h1:"h1",p:"p",a:"a",pre:"pre",code:"code",span:"span"},(0,l.a)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.h1,{children:"Tree of Thoughts (ToT)"}),"\n","\n",(0,a.jsxs)(i.p,{children:["Le tradizionali tecniche di prompting risultano inefficienti per task pi\xf9 complessi, che possono richiedere strategia o esplorazione di pi\xf9 possibilit\xe0. ",(0,a.jsx)(i.a,{href:"https://arxiv.org/abs/2305.10601",children:"Yao et el. (2023)"})," e ",(0,a.jsx)(i.a,{href:"https://arxiv.org/abs/2305.08291",children:"Long (2023)"}),' hanno proposto Tree of Thoughts (ToT), una generalizzazione della tecnica di chain-of-thought prompting che incoraggia l\'esplorazione di pi\xf9 "pensieri" che vengono utilizzati come step intermedi per effettuare problem solving con i Language Model (LM).']}),"\n",(0,a.jsx)(i.p,{children:'La tecnica ToT crea un albero di pensieri, dove i pensieri sono sequenze linguistiche che rappresentano i passi per raggiungere la risoluzione del problema. Questo approccio permette ad un LM di valutare i suoi stessi progressi intermedi verso la risoluzione del problema. L\'abilit\xe0 del LM di generare e valutare i "pensieri" viene combinata con algoritmi di ricerca (es.: breadth-first search e depth-first search), in modo da esplorare i pensieri con lookahead e backtracking.'}),"\n",(0,a.jsx)(i.p,{children:"La tecnica ToT \xe8 illustrata nella seguente immagine:"}),"\n",(0,a.jsx)(s.w,{src:c.Z,alt:"TOT"}),"\n",(0,a.jsxs)(i.p,{children:["Fonte: ",(0,a.jsx)(i.a,{href:"https://arxiv.org/abs/2305.10601",children:"Yao et el. (2023)"})]}),"\n",(0,a.jsxs)(i.p,{children:["Quando si usa la tecnica ToT, \xe8 necessario definire il numero di pensieri candidati (i pi\xf9 promettenti) e il numero di passi di necessari che il LM deve effettuare per raggiungere la soluzione.\nNel paper, il ",(0,a.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/24_(puzzle)",children:"Gioco del 24"})," viene utilizzato come task di ragionamento matematico che richiede una decomposizione in 3 passi, ognuno avente una equazione intermedia. Ad ogni passo, i migliori b=5 candidati vengono salvati."]}),"\n",(0,a.jsx)(i.p,{children:'Per effettuare una BFS nella tecnica ToT per il Gioco del 24, ogni passo candidato viene valutato in base alla possibilit\xe0 di raggiungere il numero 24 attraverso l\'operazione matematica proposta.\nAd ognuno viene assegnata un\'etichetta tra "sicuro/forse/impossibile". Come affermato dagli autori, lo scopo \xe8 quello di promuovere le soluzioni parziali corrette, che possono essere verificate guardando in avanti di pochi passi, eliminare le soluzioni parziali impossibili basandosi, per esempio, sulla grandezza del numero "il numero \xe8 troppo piccolo/grande per raggiungere 24 nei prossimi step", e tenere il resto, quelle etichettate con "forse". I valori vengono campionati 3 volte per ogni passo. Il processo \xe8 illustrato nell\'immagine:'}),"\n",(0,a.jsx)(s.w,{src:d.Z,alt:"TOT2"}),"\n",(0,a.jsxs)(i.p,{children:["Fonte: ",(0,a.jsx)(i.a,{href:"https://arxiv.org/abs/2305.10601",children:"Yao et el. (2023)"})]}),"\n",(0,a.jsx)(i.p,{children:"Dai risultati riportati nella figura sotto, la tecnica ToT risulta migliore delle altre tecniche di prompting:"}),"\n",(0,a.jsx)(s.w,{src:p.Z,alt:"TOT3"}),"\n",(0,a.jsxs)(i.p,{children:["Fonte: ",(0,a.jsx)(i.a,{href:"https://arxiv.org/abs/2305.10601",children:"Yao et el. (2023)"})]}),"\n",(0,a.jsxs)(i.p,{children:["Codice disponibile ",(0,a.jsx)(i.a,{href:"https://github.com/princeton-nlp/tree-of-thought-llm",children:"qui"})," and ",(0,a.jsx)(i.a,{href:"https://github.com/jieyilong/tree-of-thought-puzzle-solver",children:"here"})]}),"\n",(0,a.jsxs)(i.p,{children:["Ad alto livello, le principali idee di ",(0,a.jsx)(i.a,{href:"https://arxiv.org/abs/2305.10601",children:"Yao et el. (2023)"})," e ",(0,a.jsx)(i.a,{href:"https://arxiv.org/abs/2305.08291",children:"Long (2023)"})," sono simili. Entrambe potenziano le capacit\xe0 dei Large Language Model di risolvere compiti complessi utilizzando una ricerca su albero con una conversazione a pi\xf9 giri. Una delle differenze principali sta nelle strategie di ricerca utilizzate: ",(0,a.jsx)(i.a,{href:"https://arxiv.org/abs/2305.10601",children:"Yao et el. (2023)"})," utilizza algoritmi generici di ricerca come DFS/BFS/beam search, mentre la strategia di ricerca (cio\xe8 quando effettuare backtracking e di quanti livelli nell'albero, ecc.) proposta da ",(0,a.jsx)(i.a,{href:"https://arxiv.org/abs/2305.08291",children:"Long (2023)"}),' \xe8 controllata da un "ToT Controller", addestrato utilizzando il reinforcement learning (RL). DFS/BFS/Beam search sono algoritmi di ricerca generici, che non si adattano al problema specifico che si sta cercando di risolvere. Un ToT Controller, invece, essendo addestrato con  through RL potrebbe essere in grado di imparare da dati nuovi o attraverso self-play (AlphaGo vs brute force search). Quindi, il sistema ToT basato su RL pu\xf2 continuare ad evolversi ed adattarsi ad un LLM prefissato.']}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.a,{href:"https://github.com/dave1010/tree-of-thought-prompting",children:"Hulbert (2023)"})," ha proposto la tecnica di Tree-of-Thought Prompting, che applica il concetto principale della tecnica ToT utilizzando un singolo prompt testuale. Un esempio di prompt \xe8 il seguente:"]}),"\n",(0,a.jsx)(i.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsxs)(i.code,{"data-language":"text","data-theme":"default",children:[(0,a.jsx)(i.span,{className:"line",children:(0,a.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"Immagina che tre esperti stiano rispondendo a questa domanda."})}),"\n",(0,a.jsx)(i.span,{className:"line",children:(0,a.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"Tutti gli esperti scrivono un passo del loro ragionamento,"})}),"\n",(0,a.jsx)(i.span,{className:"line",children:(0,a.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"poi lo condividono con il gruppo di esperti."})}),"\n",(0,a.jsx)(i.span,{className:"line",children:(0,a.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"In seguito, tutti gli esperti andranno al passo successivo, etc."})}),"\n",(0,a.jsx)(i.span,{className:"line",children:(0,a.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"Se uno degli esperti capisce di aver sbagliato, dopo essere arrivato ad un qualiasi passo, l'esperto abbandona il gruppo."})}),"\n",(0,a.jsx)(i.span,{className:"line",children:(0,a.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"La domanda \xe8..."})})]})})]})}let x={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:i}=Object.assign({},(0,l.a)(),e.components);return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(g,{...e})}):g(e)},pageOpts:{filePath:"pages/techniques/tot.it.mdx",route:"/techniques/tot",timestamp:16874316e5,pageMap:[{kind:"Meta",locale:"it",data:{index:"Prompt Engineering",introduction:"Introduzione",techniques:"Tecniche",applications:"Applicazioni",models:"Modelli",risks:"Rischi & Abusi",papers:"Articoli scientifici",tools:"Strumenti",notebooks:"Notebook",datasets:"Dataset",readings:"Letture",course:{title:"Corso Prompt Engineering",type:"page"},services:{title:"Servizi",type:"page"},about:{title:"Informazioni",type:"page"}}},{kind:"MdxPage",name:"about",route:"/about",locale:"it"},{kind:"Folder",name:"applications",route:"/applications",children:[{kind:"Meta",locale:"it",data:{pal:"Programma-Assistito di Modelli Linguistici",generating:"Generazione di dati",coding:"Generating Code",workplace_casestudy:"Studio sul caso della classificazione del lavoro dei laureati",pf:"Prompt Function"}},{kind:"MdxPage",name:"coding",route:"/applications/coding",locale:"it"},{kind:"MdxPage",name:"generating",route:"/applications/generating",locale:"it"},{kind:"MdxPage",name:"pal",route:"/applications/pal",locale:"it"},{kind:"MdxPage",name:"pf",route:"/applications/pf",locale:"it"},{kind:"MdxPage",name:"workplace_casestudy",route:"/applications/workplace_casestudy",locale:"it"},{kind:"MdxPage",name:"generating_textbooks",route:"/applications/generating_textbooks",locale:"en"},{kind:"MdxPage",name:"synthetic_rag",route:"/applications/synthetic_rag",locale:"en"}]},{kind:"MdxPage",name:"applications",route:"/applications",locale:"it"},{kind:"MdxPage",name:"course",route:"/course",locale:"it"},{kind:"MdxPage",name:"datasets",route:"/datasets",locale:"it"},{kind:"MdxPage",name:"index",route:"/",locale:"it"},{kind:"Folder",name:"introduction",route:"/introduction",children:[{kind:"Meta",locale:"it",data:{settings:"Impostazioni LLM",basics:"I fondamentali del Prompt",elements:"Elementi di un Prompt",tips:"Suggermenti generali per la progettazione di Prompt",examples:"Esempi di Prompt"}},{kind:"MdxPage",name:"basics",route:"/introduction/basics",locale:"it"},{kind:"MdxPage",name:"elements",route:"/introduction/elements",locale:"it"},{kind:"MdxPage",name:"examples",route:"/introduction/examples",locale:"it"},{kind:"MdxPage",name:"settings",route:"/introduction/settings",locale:"it"},{kind:"MdxPage",name:"tips",route:"/introduction/tips",locale:"it"}]},{kind:"MdxPage",name:"introduction",route:"/introduction",locale:"it"},{kind:"Folder",name:"models",route:"/models",children:[{kind:"Meta",locale:"it",data:{flan:"Flan",chatgpt:"ChatGPT",llama:"LLaMA","gpt-4":"GPT-4","mistral-7b":"Mistral 7B",collection:"Collezione di Modelli"}},{kind:"MdxPage",name:"chatgpt",route:"/models/chatgpt",locale:"it"},{kind:"MdxPage",name:"collection",route:"/models/collection",locale:"it"},{kind:"MdxPage",name:"flan",route:"/models/flan",locale:"it"},{kind:"MdxPage",name:"gpt-4",route:"/models/gpt-4",locale:"it"},{kind:"MdxPage",name:"llama",route:"/models/llama",locale:"it"},{kind:"MdxPage",name:"mistral-7b",route:"/models/mistral-7b",locale:"it"}]},{kind:"MdxPage",name:"models",route:"/models",locale:"it"},{kind:"MdxPage",name:"notebooks",route:"/notebooks",locale:"it"},{kind:"MdxPage",name:"papers",route:"/papers",locale:"it"},{kind:"MdxPage",name:"readings",route:"/readings",locale:"it"},{kind:"Folder",name:"risks",route:"/risks",children:[{kind:"Meta",locale:"it",data:{adversarial:"Prompt Conflittuale",factuality:"Fattualit\xe0",biases:"Pregiudizi"}},{kind:"MdxPage",name:"adversarial",route:"/risks/adversarial",locale:"it"},{kind:"MdxPage",name:"biases",route:"/risks/biases",locale:"it"},{kind:"MdxPage",name:"factuality",route:"/risks/factuality",locale:"it"}]},{kind:"MdxPage",name:"risks",route:"/risks",locale:"it"},{kind:"MdxPage",name:"services",route:"/services",locale:"it"},{kind:"Folder",name:"techniques",route:"/techniques",children:[{kind:"Meta",locale:"it",data:{zeroshot:"Prompt Zero-shot",fewshot:"Prompt Few-shot",cot:"Prompt Chain-of-Thought",consistency:"Self-Consistency",knowledge:"Prompt Generate Knowledge",tot:"Tree of Thoughts",rag:"Retrieval Augmented Generation",art:"Automatic Reasoning and Tool-use",ape:"Automatic Prompt Engineer",activeprompt:"Prompt Attivo",dsp:"Prompt Directional Stimulus",react:"ReAct",multimodalcot:"Multimodal CoT",graph:"Graph Prompt"}},{kind:"MdxPage",name:"activeprompt",route:"/techniques/activeprompt",locale:"it"},{kind:"MdxPage",name:"ape",route:"/techniques/ape",locale:"it"},{kind:"MdxPage",name:"art",route:"/techniques/art",locale:"it"},{kind:"MdxPage",name:"consistency",route:"/techniques/consistency",locale:"it"},{kind:"MdxPage",name:"cot",route:"/techniques/cot",locale:"it"},{kind:"MdxPage",name:"dsp",route:"/techniques/dsp",locale:"it"},{kind:"MdxPage",name:"fewshot",route:"/techniques/fewshot",locale:"it"},{kind:"MdxPage",name:"graph",route:"/techniques/graph",locale:"it"},{kind:"MdxPage",name:"knowledge",route:"/techniques/knowledge",locale:"it"},{kind:"MdxPage",name:"multimodalcot",route:"/techniques/multimodalcot",locale:"it"},{kind:"MdxPage",name:"rag",route:"/techniques/rag",locale:"it"},{kind:"MdxPage",name:"react",route:"/techniques/react",locale:"it"},{kind:"MdxPage",name:"tot",route:"/techniques/tot",locale:"it"},{kind:"MdxPage",name:"zeroshot",route:"/techniques/zeroshot",locale:"it"}]},{kind:"MdxPage",name:"techniques",route:"/techniques",locale:"it"},{kind:"MdxPage",name:"tools",route:"/tools",locale:"it"}],flexsearch:{codeblocks:!0},title:"Tree of Thoughts (ToT)",headings:u},pageNextRoute:"/techniques/tot.it",nextraLayout:o.ZP,themeConfig:r.Z};i.default=(0,n.j)(x)}},function(e){e.O(0,[67892,49774,92888,40179],function(){return e(e.s=45349)}),_N_E=e.O()}]);