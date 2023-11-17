(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[43435],{30698:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/course.jp",function(){return t(74327)}])},43677:function(e,n,t){"use strict";t.d(n,{Z:function(){return g}});var a=t(11527),o=t(50959),i=t(85274),r=t(5341);function l(e){return(0,a.jsx)("svg",{viewBox:"0 0 24 24",width:"24",height:"24",...e,children:(0,a.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}let s=e=>{let{children:n,className:t,...o}=e;return(0,a.jsx)("button",{className:(0,r.Z)("nextra-button nx-transition-all active:nx-opacity-50","nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-1.5","dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50",t),...o,children:n})};function c(e){return(0,a.jsx)("svg",{viewBox:"0 0 20 20",width:"1em",height:"1em",fill:"currentColor",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}function d(e){return(0,a.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",...e,children:[(0,a.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,a.jsx)("path",{d:"M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}let p=e=>{let{getValue:n,...t}=e,[i,r]=(0,o.useState)(!1);(0,o.useEffect)(()=>{if(!i)return;let e=setTimeout(()=>{r(!1)},2e3);return()=>{clearTimeout(e)}},[i]);let l=(0,o.useCallback)(async()=>{r(!0),(null==navigator?void 0:navigator.clipboard)||console.error("Access to clipboard rejected!");try{await navigator.clipboard.writeText(n())}catch(e){console.error("Failed to copy!")}},[n]);return(0,a.jsx)(s,{onClick:l,title:"Copy code",tabIndex:0,...t,children:(0,a.jsx)(i?c:d,{className:"nextra-copy-icon nx-pointer-events-none nx-h-4 nx-w-4"})})},u=e=>{let{children:n,className:t,hasCopyCode:i=!0,filename:c,...d}=e,u=(0,o.useRef)(null),x=(0,o.useCallback)(()=>{let e=document.documentElement.dataset,n="nextraWordWrap"in e;n?delete e.nextraWordWrap:e.nextraWordWrap=""},[]);return(0,a.jsxs)("div",{className:"nextra-code-block nx-relative nx-mt-6 first:nx-mt-0",children:[c&&(0,a.jsx)("div",{className:"nx-absolute nx-top-0 nx-z-[1] nx-w-full nx-truncate nx-rounded-t-xl nx-bg-primary-700/5 nx-py-2 nx-px-4 nx-text-xs nx-text-gray-700 dark:nx-bg-primary-300/10 dark:nx-text-gray-200",children:c}),(0,a.jsx)("pre",{className:(0,r.Z)("nx-bg-primary-700/5 nx-mb-4 nx-overflow-x-auto nx-rounded-xl nx-subpixel-antialiased dark:nx-bg-primary-300/10 nx-text-[.9em]","contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40",c?"nx-pt-12 nx-pb-4":"nx-py-4",t),ref:u,...d,children:o.isValidElement(n)&&"code"===n.type?n.props.children:n}),(0,a.jsxs)("div",{className:(0,r.Z)("nx-opacity-0 nx-transition [div:hover>&]:nx-opacity-100 focus-within:nx-opacity-100","nx-flex nx-gap-1 nx-absolute nx-m-[11px] nx-right-0",c?"nx-top-8":"nx-top-0"),children:[(0,a.jsx)(s,{onClick:x,className:"md:nx-hidden",title:"Toggle word wrap elvis",children:(0,a.jsx)(l,{className:"nx-pointer-events-none nx-h-4 nx-w-4"})}),i&&(0,a.jsx)(p,{getValue(){var e,n;return(null===(e=null===(n=u.current)||void 0===n?void 0:n.querySelector("code"))||void 0===e?void 0:e.textContent)||""}})]})]})},x={logo:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 206 246",fill:"none",children:[(0,a.jsx)("circle",{cx:"40",cy:"40",r:"40",fill:"currentColor"}),(0,a.jsx)("circle",{cx:"40",cy:"206",r:"40",fill:"currentColor"}),(0,a.jsx)("circle",{cx:"166",cy:"120",r:"40",fill:"currentColor"})]}),(0,a.jsx)("span",{style:{marginLeft:".4em",fontWeight:800},children:"Prompt Engineering Guide"})]}),i18n:[{locale:"en",text:"English"},{locale:"zh",text:"中文"},{locale:"jp",text:"日本語"},{locale:"pt",text:"Portugu\xeas"},{locale:"it",text:"Italian"},{locale:"tr",text:"T\xfcrk\xe7e"},{locale:"es",text:"Espa\xf1ol"},{locale:"fr",text:"Fran\xe7ais"},{locale:"kr",text:"한국어"},{locale:"ca",text:"Catal\xe0"},{locale:"fi",text:"Finnish"},{locale:"ru",text:"Русский"}],head:function(){let{title:e}=(0,i.ZR)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("title",{children:[e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"," "]}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,a.jsx)("meta",{property:"og:title",content:"Prompt Engineering Guide"}),(0,a.jsx)("meta",{property:"og:description",content:"A Comprehensive Overview of Prompt Engineering"}),(0,a.jsx)("meta",{name:"og:title",content:e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"}),(0,a.jsx)("link",{rel:"icon",href:"/144-favicon.svg",type:"image/svg+xml"}),(0,a.jsx)("link",{rel:"icon",href:"/144-favicon-dark.svg",type:"image/svg+xml",media:"(prefers-color-scheme: dark)"})]})},project:{link:"https://github.com/dair-ai/Prompt-Engineering-Guide"},chat:{link:"https://discord.gg/FUyz9vPAwf"},docsRepositoryBase:"https://github.com/dair-ai/Prompt-Engineering-Guide/tree/main/",footer:{text:"Copyright \xa9 2023 DAIR.AI"},search:{placeholder:"Search..."},components:{pre:u}};var g=x},74327:function(e,n,t){"use strict";t.r(n),t.d(n,{__toc:function(){return s}});var a=t(11527),o=t(55411),i=t(85274),r=t(43677);t(20492),t(95178);var l=t(82132);let s=[];function c(e){let n=Object.assign({h1:"h1",p:"p",a:"a"},(0,l.a)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{children:"Prompt Engineering Course"}),"\n",(0,a.jsxs)(n.p,{children:["Due to high demand, we are partnering with Maven to deliver a new course on Prompt Engineering for LLMs. If you are interested, ",(0,a.jsx)(n.a,{href:"https://maven.com/forms/4f11a9",children:"join the waitlist"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://www.linkedin.com/in/omarsar/",children:"Elvis Saravia"}),", who has worked at companies like Meta AI and Elastic, and has years of experience in AI and LLMs, will be the instructor for this course."]}),"\n",(0,a.jsx)(n.p,{children:"This hands-on course will cover prompt engineering techniques, use cases, and tools for effectively building applications on top of large language models (LLMs)."}),"\n",(0,a.jsx)(n.p,{children:"Our learners range from software engineers to the top AI researchers and practitioners in organizations like LinkedIn, Amazon, JPMorgan Chase & Co., Intuit, Fidelity Investments, Coinbase, Guru, and many others."})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,l.a)(),e.components);return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/course.jp.mdx",route:"/course",timestamp:1684586755e3,pageMap:[{kind:"Meta",locale:"jp",data:{index:"Prompt Engineering",introduction:"Introduction",techniques:"Techniques",applications:"Applications",models:"Models",risks:"Risks & Misuses",papers:"Papers",tools:"Tools",notebooks:"Notebooks",datasets:"Datasets",readings:"Additional Readings",course:{title:"Prompt Engineering Course",type:"page"},services:{title:"Services",type:"page"},about:{title:"About",type:"page"}}},{kind:"MdxPage",name:"about",route:"/about",locale:"jp"},{kind:"Folder",name:"applications",route:"/applications",children:[{kind:"Meta",locale:"jp",data:{pal:"PAL（プログラム支援言語モデル）",generating:"データ生成",coding:"Generating Code",workplace_casestudy:"Graduate Job Classification Case Study",pf:"Prompt Function"}},{kind:"MdxPage",name:"coding",route:"/applications/coding",locale:"jp"},{kind:"MdxPage",name:"generating",route:"/applications/generating",locale:"jp"},{kind:"MdxPage",name:"pal",route:"/applications/pal",locale:"jp"},{kind:"MdxPage",name:"pf",route:"/applications/pf",locale:"jp"},{kind:"MdxPage",name:"workplace_casestudy",route:"/applications/workplace_casestudy",locale:"jp"},{kind:"MdxPage",name:"generating_textbooks",route:"/applications/generating_textbooks",locale:"en"},{kind:"MdxPage",name:"synthetic_rag",route:"/applications/synthetic_rag",locale:"en"}]},{kind:"MdxPage",name:"applications",route:"/applications",locale:"jp"},{kind:"MdxPage",name:"course",route:"/course",locale:"jp"},{kind:"MdxPage",name:"datasets",route:"/datasets",locale:"jp"},{kind:"MdxPage",name:"index",route:"/",locale:"jp"},{kind:"Folder",name:"introduction",route:"/introduction",children:[{kind:"Meta",locale:"jp",data:{settings:"LLM設定",basics:"基本的なプロンプティング",elements:"プロンプトの要素",tips:"プロンプトをデザインする一般的なTips",examples:"プロンプトの例"}},{kind:"MdxPage",name:"basics",route:"/introduction/basics",locale:"jp"},{kind:"MdxPage",name:"elements",route:"/introduction/elements",locale:"jp"},{kind:"MdxPage",name:"examples",route:"/introduction/examples",locale:"jp"},{kind:"MdxPage",name:"settings",route:"/introduction/settings",locale:"jp"},{kind:"MdxPage",name:"tips",route:"/introduction/tips",locale:"jp"}]},{kind:"MdxPage",name:"introduction",route:"/introduction",locale:"jp"},{kind:"Folder",name:"models",route:"/models",children:[{kind:"Meta",locale:"jp",data:{flan:"Flan",chatgpt:"ChatGPT",llama:"LLaMA","gpt-4":"GPT-4","mistral-7b":"Mistral 7B",collection:"Model Collection"}},{kind:"MdxPage",name:"chatgpt",route:"/models/chatgpt",locale:"jp"},{kind:"MdxPage",name:"collection",route:"/models/collection",locale:"jp"},{kind:"MdxPage",name:"flan",route:"/models/flan",locale:"jp"},{kind:"MdxPage",name:"gpt-4",route:"/models/gpt-4",locale:"jp"},{kind:"MdxPage",name:"llama",route:"/models/llama",locale:"jp"},{kind:"MdxPage",name:"mistral-7b",route:"/models/mistral-7b",locale:"jp"}]},{kind:"MdxPage",name:"models",route:"/models",locale:"jp"},{kind:"MdxPage",name:"notebooks",route:"/notebooks",locale:"jp"},{kind:"MdxPage",name:"papers",route:"/papers",locale:"jp"},{kind:"MdxPage",name:"readings",route:"/readings",locale:"jp"},{kind:"Folder",name:"risks",route:"/risks",children:[{kind:"Meta",locale:"jp",data:{adversarial:"敵対的Prompting",factuality:"事実性",biases:"バイアス"}},{kind:"MdxPage",name:"adversarial",route:"/risks/adversarial",locale:"jp"},{kind:"MdxPage",name:"biases",route:"/risks/biases",locale:"jp"},{kind:"MdxPage",name:"factuality",route:"/risks/factuality",locale:"jp"}]},{kind:"MdxPage",name:"risks",route:"/risks",locale:"jp"},{kind:"MdxPage",name:"services",route:"/services",locale:"jp"},{kind:"Folder",name:"techniques",route:"/techniques",children:[{kind:"Meta",locale:"jp",data:{zeroshot:"Zero-shotプロンプティング",fewshot:"Few-shotプロンプティング",cot:"Chain-of-Thoughtプロンプティング",consistency:"自己整合性（Self-Consistency）",knowledge:"知識生成プロンプティング",tot:"Tree of Thoughts",rag:"Retrieval Augmented Generation",art:"Automatic Reasoning and Tool-use",ape:"自動プロンプトエンジニア",activeprompt:"アクティブプロンプト",dsp:"方向性刺激プロンプティング",react:"ReAct",multimodalcot:"マルチモーダルCoT",graph:"グラフプロンプト（GraphPrompts）"}},{kind:"MdxPage",name:"activeprompt",route:"/techniques/activeprompt",locale:"jp"},{kind:"MdxPage",name:"ape",route:"/techniques/ape",locale:"jp"},{kind:"MdxPage",name:"art",route:"/techniques/art",locale:"jp"},{kind:"MdxPage",name:"consistency",route:"/techniques/consistency",locale:"jp"},{kind:"MdxPage",name:"cot",route:"/techniques/cot",locale:"jp"},{kind:"MdxPage",name:"dsp",route:"/techniques/dsp",locale:"jp"},{kind:"MdxPage",name:"fewshot",route:"/techniques/fewshot",locale:"jp"},{kind:"MdxPage",name:"graph",route:"/techniques/graph",locale:"jp"},{kind:"MdxPage",name:"knowledge",route:"/techniques/knowledge",locale:"jp"},{kind:"MdxPage",name:"multimodalcot",route:"/techniques/multimodalcot",locale:"jp"},{kind:"MdxPage",name:"rag",route:"/techniques/rag",locale:"jp"},{kind:"MdxPage",name:"react",route:"/techniques/react",locale:"jp"},{kind:"MdxPage",name:"tot",route:"/techniques/tot",locale:"jp"},{kind:"MdxPage",name:"zeroshot",route:"/techniques/zeroshot",locale:"jp"}]},{kind:"MdxPage",name:"techniques",route:"/techniques",locale:"jp"},{kind:"MdxPage",name:"tools",route:"/tools",locale:"jp"}],flexsearch:{codeblocks:!0},title:"Prompt Engineering Course",headings:s},pageNextRoute:"/course.jp",nextraLayout:i.ZP,themeConfig:r.Z};n.default=(0,o.j)(d)}},function(e){e.O(0,[67892,49774,92888,40179],function(){return e(e.s=30698)}),_N_E=e.O()}]);