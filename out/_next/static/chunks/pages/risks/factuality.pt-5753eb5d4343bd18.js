(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7039],{50741:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/risks/factuality.pt",function(){return a(99687)}])},43677:function(e,t,a){"use strict";a.d(t,{Z:function(){return m}});var n=a(11527),o=a(50959),r=a(85274),i=a(5341);function s(e){return(0,n.jsx)("svg",{viewBox:"0 0 24 24",width:"24",height:"24",...e,children:(0,n.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}let l=e=>{let{children:t,className:a,...o}=e;return(0,n.jsx)("button",{className:(0,i.Z)("nextra-button nx-transition-all active:nx-opacity-50","nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-1.5","dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50",a),...o,children:t})};function c(e){return(0,n.jsx)("svg",{viewBox:"0 0 20 20",width:"1em",height:"1em",fill:"currentColor",...e,children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}function d(e){return(0,n.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",...e,children:[(0,n.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}let p=e=>{let{getValue:t,...a}=e,[r,i]=(0,o.useState)(!1);(0,o.useEffect)(()=>{if(!r)return;let e=setTimeout(()=>{i(!1)},2e3);return()=>{clearTimeout(e)}},[r]);let s=(0,o.useCallback)(async()=>{i(!0),(null==navigator?void 0:navigator.clipboard)||console.error("Access to clipboard rejected!");try{await navigator.clipboard.writeText(t())}catch(e){console.error("Failed to copy!")}},[t]);return(0,n.jsx)(l,{onClick:s,title:"Copy code",tabIndex:0,...a,children:(0,n.jsx)(r?c:d,{className:"nextra-copy-icon nx-pointer-events-none nx-h-4 nx-w-4"})})},x=e=>{let{children:t,className:a,hasCopyCode:r=!0,filename:c,...d}=e,x=(0,o.useRef)(null),u=(0,o.useCallback)(()=>{let e=document.documentElement.dataset,t="nextraWordWrap"in e;t?delete e.nextraWordWrap:e.nextraWordWrap=""},[]);return(0,n.jsxs)("div",{className:"nextra-code-block nx-relative nx-mt-6 first:nx-mt-0",children:[c&&(0,n.jsx)("div",{className:"nx-absolute nx-top-0 nx-z-[1] nx-w-full nx-truncate nx-rounded-t-xl nx-bg-primary-700/5 nx-py-2 nx-px-4 nx-text-xs nx-text-gray-700 dark:nx-bg-primary-300/10 dark:nx-text-gray-200",children:c}),(0,n.jsx)("pre",{className:(0,i.Z)("nx-bg-primary-700/5 nx-mb-4 nx-overflow-x-auto nx-rounded-xl nx-subpixel-antialiased dark:nx-bg-primary-300/10 nx-text-[.9em]","contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40",c?"nx-pt-12 nx-pb-4":"nx-py-4",a),ref:x,...d,children:o.isValidElement(t)&&"code"===t.type?t.props.children:t}),(0,n.jsxs)("div",{className:(0,i.Z)("nx-opacity-0 nx-transition [div:hover>&]:nx-opacity-100 focus-within:nx-opacity-100","nx-flex nx-gap-1 nx-absolute nx-m-[11px] nx-right-0",c?"nx-top-8":"nx-top-0"),children:[(0,n.jsx)(l,{onClick:u,className:"md:nx-hidden",title:"Toggle word wrap elvis",children:(0,n.jsx)(s,{className:"nx-pointer-events-none nx-h-4 nx-w-4"})}),r&&(0,n.jsx)(p,{getValue(){var e,t;return(null===(e=null===(t=x.current)||void 0===t?void 0:t.querySelector("code"))||void 0===e?void 0:e.textContent)||""}})]})]})},u={logo:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 206 246",fill:"none",children:[(0,n.jsx)("circle",{cx:"40",cy:"40",r:"40",fill:"currentColor"}),(0,n.jsx)("circle",{cx:"40",cy:"206",r:"40",fill:"currentColor"}),(0,n.jsx)("circle",{cx:"166",cy:"120",r:"40",fill:"currentColor"})]}),(0,n.jsx)("span",{style:{marginLeft:".4em",fontWeight:800},children:"Prompt Engineering Guide"})]}),i18n:[{locale:"en",text:"English"},{locale:"zh",text:"中文"},{locale:"jp",text:"日本語"},{locale:"pt",text:"Portugu\xeas"},{locale:"it",text:"Italian"},{locale:"tr",text:"T\xfcrk\xe7e"},{locale:"es",text:"Espa\xf1ol"},{locale:"fr",text:"Fran\xe7ais"},{locale:"kr",text:"한국어"},{locale:"ca",text:"Catal\xe0"},{locale:"fi",text:"Finnish"},{locale:"ru",text:"Русский"}],head:function(){let{title:e}=(0,r.ZR)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("title",{children:[e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"," "]}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,n.jsx)("meta",{property:"og:title",content:"Prompt Engineering Guide"}),(0,n.jsx)("meta",{property:"og:description",content:"A Comprehensive Overview of Prompt Engineering"}),(0,n.jsx)("meta",{name:"og:title",content:e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"}),(0,n.jsx)("link",{rel:"icon",href:"/144-favicon.svg",type:"image/svg+xml"}),(0,n.jsx)("link",{rel:"icon",href:"/144-favicon-dark.svg",type:"image/svg+xml",media:"(prefers-color-scheme: dark)"})]})},project:{link:"https://github.com/dair-ai/Prompt-Engineering-Guide"},chat:{link:"https://discord.gg/FUyz9vPAwf"},docsRepositoryBase:"https://github.com/dair-ai/Prompt-Engineering-Guide/tree/main/",footer:{text:"Copyright \xa9 2023 DAIR.AI"},search:{placeholder:"Search..."},components:{pre:x}};var m=u},99687:function(e,t,a){"use strict";a.r(t),a.d(t,{__toc:function(){return l}});var n=a(11527),o=a(55411),r=a(85274),i=a(43677);a(20492),a(95178);var s=a(82132);let l=[];function c(e){let t=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",em:"em",pre:"pre",code:"code",span:"span"},(0,s.a)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{children:"Factualidade"}),"\n",(0,n.jsx)(t.p,{children:"Os LLMs tendem a gerar respostas que soam coerentes e convincentes, mas \xe0s vezes podem ser inventadas. Melhorar os prompts pode ajudar a melhorar o modelo para gerar respostas mais precisas/factuais e reduzir a probabilidade de gerar respostas inconsistentes e inventadas."}),"\n",(0,n.jsx)(t.p,{children:"Algumas solu\xe7\xf5es podem incluir:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"fornecer informa\xe7\xf5es b\xe1sicas (por exemplo, par\xe1grafo de artigo relacionado ou entrada da Wikipedia) como parte do contexto para reduzir a probabilidade de o modelo produzir texto inventado."}),"\n",(0,n.jsx)(t.li,{children:'configurar o modelo para produzir respostas menos diversificadas diminuindo os par\xe2metros de probabilidade e instruindo-o a admitir (por exemplo, "n\xe3o sei") quando n\xe3o souber a resposta.'}),"\n",(0,n.jsx)(t.li,{children:"fornecer no prompt uma combina\xe7\xe3o de exemplos de perguntas e respostas que ele pode conhecer e n\xe3o saber"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Vejamos um exemplo simples:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Prompt:"})}),"\n",(0,n.jsx)(t.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsxs)(t.code,{"data-language":"text","data-theme":"default",children:[(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"Q: O que \xe9 um \xe1tomo?"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"A: Um \xe1tomo \xe9 uma pequena part\xedcula que comp\xf5e tudo."})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"Q: Quem \xe9 Alvan Muntz?"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"A: ?"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"Q: O que \xe9 Kozar-09?"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"A: ? P:"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"Q: Quantas luas Marte tem?"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"A: Dois, Fobos e Deimos."})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"A: Quem \xe9 Neto Beto Roberto?"})})]})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Sa\xedda:"})}),"\n",(0,n.jsx)(t.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsx)(t.code,{"data-language":"text","data-theme":"default",children:(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"A: ?"})})})}),"\n",(0,n.jsx)(t.p,{children:'Inventei o nome "Neto Beto Roberto" para que o modelo fique correto neste caso. Tente mudar um pouco a pergunta e veja se consegue faz\xea-la funcionar. Existem diferentes maneiras de melhorar isso ainda mais com base em tudo o que voc\xea aprendeu at\xe9 agora.'})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,s.a)(),e.components);return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/risks/factuality.pt.mdx",route:"/risks/factuality",timestamp:1680636145e3,pageMap:[{kind:"Meta",locale:"pt",data:{index:"Prompt Engineering",introduction:"Introdu\xe7\xe3o",techniques:"T\xe9cnicas",applications:"Aplica\xe7\xf5es",models:"Modelos",risks:"Riscos e usos indevidos",papers:"Artigos",tools:"Ferramentas",notebooks:"Notebooks",datasets:"Conjuntos de dados",readings:"Leituras Adicionais",course:{title:"Curso de Engenharia Prompt",type:"page"},services:{title:"Servi\xe7os",type:"page"},about:{title:"Sobre",type:"page"}}},{kind:"MdxPage",name:"about",route:"/about",locale:"pt"},{kind:"Folder",name:"applications",route:"/applications",children:[{kind:"Meta",locale:"pt",data:{pal:"Program-Aided Language Models",generating:"Generating Data",coding:"Generating Code",workplace_casestudy:"Graduate Job Classification Case Study",pf:"Prompt Function"}},{kind:"MdxPage",name:"coding",route:"/applications/coding",locale:"pt"},{kind:"MdxPage",name:"generating",route:"/applications/generating",locale:"pt"},{kind:"MdxPage",name:"pal",route:"/applications/pal",locale:"pt"},{kind:"MdxPage",name:"pf",route:"/applications/pf",locale:"pt"},{kind:"MdxPage",name:"workplace_casestudy",route:"/applications/workplace_casestudy",locale:"pt"},{kind:"MdxPage",name:"generating_textbooks",route:"/applications/generating_textbooks",locale:"en"},{kind:"MdxPage",name:"synthetic_rag",route:"/applications/synthetic_rag",locale:"en"}]},{kind:"MdxPage",name:"applications",route:"/applications",locale:"pt"},{kind:"MdxPage",name:"course",route:"/course",locale:"pt"},{kind:"MdxPage",name:"datasets",route:"/datasets",locale:"pt"},{kind:"MdxPage",name:"index",route:"/",locale:"pt"},{kind:"Folder",name:"introduction",route:"/introduction",children:[{kind:"Meta",locale:"pt",data:{settings:"Configura\xe7\xf5es LLM",basics:"B\xe1sico de Prompting",elements:"Elementos de Prompt",tips:"Dicas Gerais para Designing de Prompts",examples:"Exemplos de Prompts"}},{kind:"MdxPage",name:"basics",route:"/introduction/basics",locale:"pt"},{kind:"MdxPage",name:"elements",route:"/introduction/elements",locale:"pt"},{kind:"MdxPage",name:"examples",route:"/introduction/examples",locale:"pt"},{kind:"MdxPage",name:"settings",route:"/introduction/settings",locale:"pt"},{kind:"MdxPage",name:"tips",route:"/introduction/tips",locale:"pt"}]},{kind:"MdxPage",name:"introduction",route:"/introduction",locale:"pt"},{kind:"Folder",name:"models",route:"/models",children:[{kind:"Meta",locale:"pt",data:{flan:"Flan",chatgpt:"ChatGPT",llama:"LLaMA","gpt-4":"GPT-4","mistral-7b":"Mistral 7B",collection:"Model Collection"}},{kind:"MdxPage",name:"chatgpt",route:"/models/chatgpt",locale:"pt"},{kind:"MdxPage",name:"collection",route:"/models/collection",locale:"pt"},{kind:"MdxPage",name:"flan",route:"/models/flan",locale:"pt"},{kind:"MdxPage",name:"gpt-4",route:"/models/gpt-4",locale:"pt"},{kind:"MdxPage",name:"llama",route:"/models/llama",locale:"pt"},{kind:"MdxPage",name:"mistral-7b",route:"/models/mistral-7b",locale:"pt"}]},{kind:"MdxPage",name:"models",route:"/models",locale:"pt"},{kind:"MdxPage",name:"notebooks",route:"/notebooks",locale:"pt"},{kind:"MdxPage",name:"papers",route:"/papers",locale:"pt"},{kind:"MdxPage",name:"readings",route:"/readings",locale:"pt"},{kind:"Folder",name:"risks",route:"/risks",children:[{kind:"Meta",locale:"pt",data:{adversarial:"Adversarial Prompting",factuality:"Factuality",biases:"Biases"}},{kind:"MdxPage",name:"adversarial",route:"/risks/adversarial",locale:"pt"},{kind:"MdxPage",name:"biases",route:"/risks/biases",locale:"pt"},{kind:"MdxPage",name:"factuality",route:"/risks/factuality",locale:"pt"}]},{kind:"MdxPage",name:"risks",route:"/risks",locale:"pt"},{kind:"MdxPage",name:"services",route:"/services",locale:"pt"},{kind:"Folder",name:"techniques",route:"/techniques",children:[{kind:"Meta",locale:"pt",data:{zeroshot:"Zero-shot Prompting",fewshot:"Few-shot Prompting",cot:"Chain-of-Thought Prompting",consistency:"Self-Consistency",knowledge:"Generate Knowledge Prompting",tot:"Tree of Thoughts",rag:"Retrieval Augmented Generation",art:"Automatic Reasoning and Tool-use",ape:"Automatic Prompt Engineer",activeprompt:"Active-Prompt",dsp:"Directional Stimulus Prompting",react:"ReAct",multimodalcot:"Multimodal CoT",graph:"Graph Prompting"}},{kind:"MdxPage",name:"activeprompt",route:"/techniques/activeprompt",locale:"pt"},{kind:"MdxPage",name:"ape",route:"/techniques/ape",locale:"pt"},{kind:"MdxPage",name:"art",route:"/techniques/art",locale:"pt"},{kind:"MdxPage",name:"consistency",route:"/techniques/consistency",locale:"pt"},{kind:"MdxPage",name:"cot",route:"/techniques/cot",locale:"pt"},{kind:"MdxPage",name:"dsp",route:"/techniques/dsp",locale:"pt"},{kind:"MdxPage",name:"fewshot",route:"/techniques/fewshot",locale:"pt"},{kind:"MdxPage",name:"graph",route:"/techniques/graph",locale:"pt"},{kind:"MdxPage",name:"knowledge",route:"/techniques/knowledge",locale:"pt"},{kind:"MdxPage",name:"multimodalcot",route:"/techniques/multimodalcot",locale:"pt"},{kind:"MdxPage",name:"rag",route:"/techniques/rag",locale:"pt"},{kind:"MdxPage",name:"react",route:"/techniques/react",locale:"pt"},{kind:"MdxPage",name:"tot",route:"/techniques/tot",locale:"pt"},{kind:"MdxPage",name:"zeroshot",route:"/techniques/zeroshot",locale:"pt"}]},{kind:"MdxPage",name:"techniques",route:"/techniques",locale:"pt"},{kind:"MdxPage",name:"tools",route:"/tools",locale:"pt"}],flexsearch:{codeblocks:!0},title:"Factualidade",headings:l},pageNextRoute:"/risks/factuality.pt",nextraLayout:r.ZP,themeConfig:i.Z};t.default=(0,o.j)(d)}},function(e){e.O(0,[67892,49774,92888,40179],function(){return e(e.s=50741)}),_N_E=e.O()}]);