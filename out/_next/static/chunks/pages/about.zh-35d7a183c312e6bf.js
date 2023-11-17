(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[74337],{54266:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about.zh",function(){return n(10410)}])},43677:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(11527),o=n(50959),i=n(85274),r=n(5341);function l(e){return(0,a.jsx)("svg",{viewBox:"0 0 24 24",width:"24",height:"24",...e,children:(0,a.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}let c=e=>{let{children:t,className:n,...o}=e;return(0,a.jsx)("button",{className:(0,r.Z)("nextra-button nx-transition-all active:nx-opacity-50","nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-1.5","dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50",n),...o,children:t})};function s(e){return(0,a.jsx)("svg",{viewBox:"0 0 20 20",width:"1em",height:"1em",fill:"currentColor",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}function d(e){return(0,a.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",...e,children:[(0,a.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,a.jsx)("path",{d:"M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}let x=e=>{let{getValue:t,...n}=e,[i,r]=(0,o.useState)(!1);(0,o.useEffect)(()=>{if(!i)return;let e=setTimeout(()=>{r(!1)},2e3);return()=>{clearTimeout(e)}},[i]);let l=(0,o.useCallback)(async()=>{r(!0),(null==navigator?void 0:navigator.clipboard)||console.error("Access to clipboard rejected!");try{await navigator.clipboard.writeText(t())}catch(e){console.error("Failed to copy!")}},[t]);return(0,a.jsx)(c,{onClick:l,title:"Copy code",tabIndex:0,...n,children:(0,a.jsx)(i?s:d,{className:"nextra-copy-icon nx-pointer-events-none nx-h-4 nx-w-4"})})},h=e=>{let{children:t,className:n,hasCopyCode:i=!0,filename:s,...d}=e,h=(0,o.useRef)(null),u=(0,o.useCallback)(()=>{let e=document.documentElement.dataset,t="nextraWordWrap"in e;t?delete e.nextraWordWrap:e.nextraWordWrap=""},[]);return(0,a.jsxs)("div",{className:"nextra-code-block nx-relative nx-mt-6 first:nx-mt-0",children:[s&&(0,a.jsx)("div",{className:"nx-absolute nx-top-0 nx-z-[1] nx-w-full nx-truncate nx-rounded-t-xl nx-bg-primary-700/5 nx-py-2 nx-px-4 nx-text-xs nx-text-gray-700 dark:nx-bg-primary-300/10 dark:nx-text-gray-200",children:s}),(0,a.jsx)("pre",{className:(0,r.Z)("nx-bg-primary-700/5 nx-mb-4 nx-overflow-x-auto nx-rounded-xl nx-subpixel-antialiased dark:nx-bg-primary-300/10 nx-text-[.9em]","contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40",s?"nx-pt-12 nx-pb-4":"nx-py-4",n),ref:h,...d,children:o.isValidElement(t)&&"code"===t.type?t.props.children:t}),(0,a.jsxs)("div",{className:(0,r.Z)("nx-opacity-0 nx-transition [div:hover>&]:nx-opacity-100 focus-within:nx-opacity-100","nx-flex nx-gap-1 nx-absolute nx-m-[11px] nx-right-0",s?"nx-top-8":"nx-top-0"),children:[(0,a.jsx)(c,{onClick:u,className:"md:nx-hidden",title:"Toggle word wrap elvis",children:(0,a.jsx)(l,{className:"nx-pointer-events-none nx-h-4 nx-w-4"})}),i&&(0,a.jsx)(x,{getValue(){var e,t;return(null===(e=null===(t=h.current)||void 0===t?void 0:t.querySelector("code"))||void 0===e?void 0:e.textContent)||""}})]})]})},u={logo:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 206 246",fill:"none",children:[(0,a.jsx)("circle",{cx:"40",cy:"40",r:"40",fill:"currentColor"}),(0,a.jsx)("circle",{cx:"40",cy:"206",r:"40",fill:"currentColor"}),(0,a.jsx)("circle",{cx:"166",cy:"120",r:"40",fill:"currentColor"})]}),(0,a.jsx)("span",{style:{marginLeft:".4em",fontWeight:800},children:"Prompt Engineering Guide"})]}),i18n:[{locale:"en",text:"English"},{locale:"zh",text:"中文"},{locale:"jp",text:"日本語"},{locale:"pt",text:"Portugu\xeas"},{locale:"it",text:"Italian"},{locale:"tr",text:"T\xfcrk\xe7e"},{locale:"es",text:"Espa\xf1ol"},{locale:"fr",text:"Fran\xe7ais"},{locale:"kr",text:"한국어"},{locale:"ca",text:"Catal\xe0"},{locale:"fi",text:"Finnish"},{locale:"ru",text:"Русский"}],head:function(){let{title:e}=(0,i.ZR)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("title",{children:[e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"," "]}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,a.jsx)("meta",{property:"og:title",content:"Prompt Engineering Guide"}),(0,a.jsx)("meta",{property:"og:description",content:"A Comprehensive Overview of Prompt Engineering"}),(0,a.jsx)("meta",{name:"og:title",content:e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"}),(0,a.jsx)("link",{rel:"icon",href:"/144-favicon.svg",type:"image/svg+xml"}),(0,a.jsx)("link",{rel:"icon",href:"/144-favicon-dark.svg",type:"image/svg+xml",media:"(prefers-color-scheme: dark)"})]})},project:{link:"https://github.com/dair-ai/Prompt-Engineering-Guide"},chat:{link:"https://discord.gg/FUyz9vPAwf"},docsRepositoryBase:"https://github.com/dair-ai/Prompt-Engineering-Guide/tree/main/",footer:{text:"Copyright \xa9 2023 DAIR.AI"},search:{placeholder:"Search..."},components:{pre:h}};var p=u},10410:function(e,t,n){"use strict";n.r(t),n.d(t,{__toc:function(){return c}});var a=n(11527),o=n(55411),i=n(85274),r=n(43677);n(20492),n(95178);var l=n(82132);let c=[];function s(e){let t=Object.assign({h1:"h1",p:"p",a:"a"},(0,l.a)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{children:"关于"}),"\n",(0,a.jsxs)(t.p,{children:["提示工程指南（Prompt Engineering Guide）是由 ",(0,a.jsx)(t.a,{href:"https://github.com/dair-ai",children:"DAIR.AI"})," 发起的项目，旨在帮助研发和行业内相关人员了解提示工程。"]}),"\n",(0,a.jsx)(t.p,{children:"以传播 AI 技术和研究成果为目标，DAIR.AI 的愿景是赋能新一代 AI 领域的创新者。"}),"\n",(0,a.jsx)(t.p,{children:"我们欢迎大家的贡献！大家可以查找页面上的编辑按钮参与贡献。"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://github.com/dair-ai/Prompt-Engineering-Guide#license",children:"查看许可信息"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["本项目受多个开源项目启发，其中包括 ",(0,a.jsx)(t.a,{href:"https://github.com/openai/openai-cookbook",children:"OpenAI CookBook"}),", ",(0,a.jsx)(t.a,{href:"http://pretrain.nlpedia.ai/",children:"Pretrain, Prompt, Predic"})," 和 ",(0,a.jsx)(t.a,{href:"https://learntipting.org/",children:"Learn Prompting"}),"。"]})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,l.a)(),e.components);return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(s,{...e})}):s(e)},pageOpts:{filePath:"pages/about.zh.mdx",route:"/about",timestamp:1680323867e3,pageMap:[{kind:"Meta",locale:"zh",data:{index:"提示工程指南",introduction:"提示工程简介",techniques:"提示技术",applications:"提示应用",models:"模型",risks:"风险和误用",papers:"论文",tools:"工具和库",notebooks:"Prompt Engineering 笔记本",datasets:"数据集",readings:"阅读推荐",course:{title:"提示工程课程",type:"page"},services:{title:"服务",type:"page"},about:{title:"关于",type:"page"}}},{kind:"MdxPage",name:"about",route:"/about",locale:"zh"},{kind:"Folder",name:"applications",route:"/applications",children:[{kind:"Meta",locale:"zh",data:{pal:"程序辅助语言模型",generating:"生成数据",coding:"Generating Code",workplace_casestudy:"毕业生工作分类案例研究",pf:"提示函数"}},{kind:"MdxPage",name:"coding",route:"/applications/coding",locale:"zh"},{kind:"MdxPage",name:"generating",route:"/applications/generating",locale:"zh"},{kind:"MdxPage",name:"pal",route:"/applications/pal",locale:"zh"},{kind:"MdxPage",name:"pf",route:"/applications/pf",locale:"zh"},{kind:"MdxPage",name:"workplace_casestudy",route:"/applications/workplace_casestudy",locale:"zh"},{kind:"MdxPage",name:"generating_textbooks",route:"/applications/generating_textbooks",locale:"en"},{kind:"MdxPage",name:"synthetic_rag",route:"/applications/synthetic_rag",locale:"en"}]},{kind:"MdxPage",name:"applications",route:"/applications",locale:"zh"},{kind:"MdxPage",name:"course",route:"/course",locale:"zh"},{kind:"MdxPage",name:"datasets",route:"/datasets",locale:"zh"},{kind:"MdxPage",name:"index",route:"/",locale:"zh"},{kind:"Folder",name:"introduction",route:"/introduction",children:[{kind:"Meta",locale:"zh",data:{settings:"大语言模型设置",basics:"基本概念",elements:"提示词要素",tips:"设计提示的通用技巧",examples:"提示词示例"}},{kind:"MdxPage",name:"basics",route:"/introduction/basics",locale:"zh"},{kind:"MdxPage",name:"elements",route:"/introduction/elements",locale:"zh"},{kind:"MdxPage",name:"examples",route:"/introduction/examples",locale:"zh"},{kind:"MdxPage",name:"settings",route:"/introduction/settings",locale:"zh"},{kind:"MdxPage",name:"tips",route:"/introduction/tips",locale:"zh"}]},{kind:"MdxPage",name:"introduction",route:"/introduction",locale:"zh"},{kind:"Folder",name:"models",route:"/models",children:[{kind:"Meta",locale:"zh",data:{flan:"Flan",chatgpt:"ChatGPT",llama:"LLaMA","gpt-4":"GPT-4","mistral-7b":"Mistral 7B",collection:"Model Collection"}},{kind:"MdxPage",name:"chatgpt",route:"/models/chatgpt",locale:"zh"},{kind:"MdxPage",name:"collection",route:"/models/collection",locale:"zh"},{kind:"MdxPage",name:"flan",route:"/models/flan",locale:"zh"},{kind:"MdxPage",name:"gpt-4",route:"/models/gpt-4",locale:"zh"},{kind:"MdxPage",name:"llama",route:"/models/llama",locale:"zh"},{kind:"MdxPage",name:"mistral-7b",route:"/models/mistral-7b",locale:"zh"}]},{kind:"MdxPage",name:"models",route:"/models",locale:"zh"},{kind:"MdxPage",name:"notebooks",route:"/notebooks",locale:"zh"},{kind:"MdxPage",name:"papers",route:"/papers",locale:"zh"},{kind:"MdxPage",name:"readings",route:"/readings",locale:"zh"},{kind:"Folder",name:"risks",route:"/risks",children:[{kind:"Meta",locale:"zh",data:{adversarial:"对抗性提示",factuality:"真实性",biases:"偏见"}},{kind:"MdxPage",name:"adversarial",route:"/risks/adversarial",locale:"zh"},{kind:"MdxPage",name:"biases",route:"/risks/biases",locale:"zh"},{kind:"MdxPage",name:"factuality",route:"/risks/factuality",locale:"zh"}]},{kind:"MdxPage",name:"risks",route:"/risks",locale:"zh"},{kind:"MdxPage",name:"services",route:"/services",locale:"zh"},{kind:"Folder",name:"techniques",route:"/techniques",children:[{kind:"Meta",locale:"zh",data:{zeroshot:"零样本提示",fewshot:"少样本提示",cot:"链式思考（CoT）提示",consistency:"自我一致性",knowledge:"生成知识提示",tot:"思维树（ToT）",rag:"检索增强生成 (RAG)",art:"自动推理并使用工具（ART）",ape:"自动提示工程师",activeprompt:"Active-Prompt",dsp:"方向性刺激提示",react:"ReAct框架",multimodalcot:"多模态思维链提示方法",graph:"基于图的提示"}},{kind:"MdxPage",name:"activeprompt",route:"/techniques/activeprompt",locale:"zh"},{kind:"MdxPage",name:"ape",route:"/techniques/ape",locale:"zh"},{kind:"MdxPage",name:"art",route:"/techniques/art",locale:"zh"},{kind:"MdxPage",name:"consistency",route:"/techniques/consistency",locale:"zh"},{kind:"MdxPage",name:"cot",route:"/techniques/cot",locale:"zh"},{kind:"MdxPage",name:"dsp",route:"/techniques/dsp",locale:"zh"},{kind:"MdxPage",name:"fewshot",route:"/techniques/fewshot",locale:"zh"},{kind:"MdxPage",name:"graph",route:"/techniques/graph",locale:"zh"},{kind:"MdxPage",name:"knowledge",route:"/techniques/knowledge",locale:"zh"},{kind:"MdxPage",name:"multimodalcot",route:"/techniques/multimodalcot",locale:"zh"},{kind:"MdxPage",name:"rag",route:"/techniques/rag",locale:"zh"},{kind:"MdxPage",name:"react",route:"/techniques/react",locale:"zh"},{kind:"MdxPage",name:"tot",route:"/techniques/tot",locale:"zh"},{kind:"MdxPage",name:"zeroshot",route:"/techniques/zeroshot",locale:"zh"}]},{kind:"MdxPage",name:"techniques",route:"/techniques",locale:"zh"},{kind:"MdxPage",name:"tools",route:"/tools",locale:"zh"}],flexsearch:{codeblocks:!0},title:"关于",headings:c},pageNextRoute:"/about.zh",nextraLayout:i.ZP,themeConfig:r.Z};t.default=(0,o.j)(d)}},function(e){e.O(0,[67892,49774,92888,40179],function(){return e(e.s=54266)}),_N_E=e.O()}]);