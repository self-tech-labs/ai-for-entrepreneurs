(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8785],{28291:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/models/llama.zh",function(){return n(57577)}])},72257:function(e,t){"use strict";t.Z={src:"/_next/static/media/llama-1.ced83624.png",height:744,width:1099,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAWUlEQVR42g1NSRLAMAjy/z9tp0lU1GyXwolhlTWnjz6roAozkvG9VSkB32vRJjn3wj0Qe29hpL1PZsBUe69MbY2iuClTrPgYbMINVAA550REElUAipdci/gB50hyS3ziQDEAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5}},41667:function(e,t,n){"use strict";n.d(t,{w:function(){return l}});var a=n(11527),i=n(5341),r=n(76484),o=n.n(r);function l(e){let{src:t,alt:n,full:r}=e;return(0,a.jsx)("div",{className:(0,i.Z)("mt-6 -mb-4 flex justify-center overflow-hidden rounded-xl border dark:border-zinc-800",r?"bg-white":"bg-zinc-100"),children:(0,a.jsx)(o(),{src:t,alt:n,className:(0,i.Z)("w-auto select-none bg-white",r?"":"ring-1 ring-gray-200")})})}},43677:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var a=n(11527),i=n(50959),r=n(85274),o=n(5341);function l(e){return(0,a.jsx)("svg",{viewBox:"0 0 24 24",width:"24",height:"24",...e,children:(0,a.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}let s=e=>{let{children:t,className:n,...i}=e;return(0,a.jsx)("button",{className:(0,o.Z)("nextra-button nx-transition-all active:nx-opacity-50","nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-1.5","dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50",n),...i,children:t})};function c(e){return(0,a.jsx)("svg",{viewBox:"0 0 20 20",width:"1em",height:"1em",fill:"currentColor",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}function d(e){return(0,a.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",...e,children:[(0,a.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,a.jsx)("path",{d:"M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}let h=e=>{let{getValue:t,...n}=e,[r,o]=(0,i.useState)(!1);(0,i.useEffect)(()=>{if(!r)return;let e=setTimeout(()=>{o(!1)},2e3);return()=>{clearTimeout(e)}},[r]);let l=(0,i.useCallback)(async()=>{o(!0),(null==navigator?void 0:navigator.clipboard)||console.error("Access to clipboard rejected!");try{await navigator.clipboard.writeText(t())}catch(e){console.error("Failed to copy!")}},[t]);return(0,a.jsx)(s,{onClick:l,title:"Copy code",tabIndex:0,...n,children:(0,a.jsx)(r?c:d,{className:"nextra-copy-icon nx-pointer-events-none nx-h-4 nx-w-4"})})},x=e=>{let{children:t,className:n,hasCopyCode:r=!0,filename:c,...d}=e,x=(0,i.useRef)(null),u=(0,i.useCallback)(()=>{let e=document.documentElement.dataset,t="nextraWordWrap"in e;t?delete e.nextraWordWrap:e.nextraWordWrap=""},[]);return(0,a.jsxs)("div",{className:"nextra-code-block nx-relative nx-mt-6 first:nx-mt-0",children:[c&&(0,a.jsx)("div",{className:"nx-absolute nx-top-0 nx-z-[1] nx-w-full nx-truncate nx-rounded-t-xl nx-bg-primary-700/5 nx-py-2 nx-px-4 nx-text-xs nx-text-gray-700 dark:nx-bg-primary-300/10 dark:nx-text-gray-200",children:c}),(0,a.jsx)("pre",{className:(0,o.Z)("nx-bg-primary-700/5 nx-mb-4 nx-overflow-x-auto nx-rounded-xl nx-subpixel-antialiased dark:nx-bg-primary-300/10 nx-text-[.9em]","contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40",c?"nx-pt-12 nx-pb-4":"nx-py-4",n),ref:x,...d,children:i.isValidElement(t)&&"code"===t.type?t.props.children:t}),(0,a.jsxs)("div",{className:(0,o.Z)("nx-opacity-0 nx-transition [div:hover>&]:nx-opacity-100 focus-within:nx-opacity-100","nx-flex nx-gap-1 nx-absolute nx-m-[11px] nx-right-0",c?"nx-top-8":"nx-top-0"),children:[(0,a.jsx)(s,{onClick:u,className:"md:nx-hidden",title:"Toggle word wrap elvis",children:(0,a.jsx)(l,{className:"nx-pointer-events-none nx-h-4 nx-w-4"})}),r&&(0,a.jsx)(h,{getValue(){var e,t;return(null===(e=null===(t=x.current)||void 0===t?void 0:t.querySelector("code"))||void 0===e?void 0:e.textContent)||""}})]})]})},u={logo:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 206 246",fill:"none",children:[(0,a.jsx)("circle",{cx:"40",cy:"40",r:"40",fill:"currentColor"}),(0,a.jsx)("circle",{cx:"40",cy:"206",r:"40",fill:"currentColor"}),(0,a.jsx)("circle",{cx:"166",cy:"120",r:"40",fill:"currentColor"})]}),(0,a.jsx)("span",{style:{marginLeft:".4em",fontWeight:800},children:"Prompt Engineering Guide"})]}),i18n:[{locale:"en",text:"English"},{locale:"zh",text:"中文"},{locale:"jp",text:"日本語"},{locale:"pt",text:"Portugu\xeas"},{locale:"it",text:"Italian"},{locale:"tr",text:"T\xfcrk\xe7e"},{locale:"es",text:"Espa\xf1ol"},{locale:"fr",text:"Fran\xe7ais"},{locale:"kr",text:"한국어"},{locale:"ca",text:"Catal\xe0"},{locale:"fi",text:"Finnish"},{locale:"ru",text:"Русский"}],head:function(){let{title:e}=(0,r.ZR)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("title",{children:[e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"," "]}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,a.jsx)("meta",{property:"og:title",content:"Prompt Engineering Guide"}),(0,a.jsx)("meta",{property:"og:description",content:"A Comprehensive Overview of Prompt Engineering"}),(0,a.jsx)("meta",{name:"og:title",content:e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"}),(0,a.jsx)("link",{rel:"icon",href:"/144-favicon.svg",type:"image/svg+xml"}),(0,a.jsx)("link",{rel:"icon",href:"/144-favicon-dark.svg",type:"image/svg+xml",media:"(prefers-color-scheme: dark)"})]})},project:{link:"https://github.com/dair-ai/Prompt-Engineering-Guide"},chat:{link:"https://discord.gg/FUyz9vPAwf"},docsRepositoryBase:"https://github.com/dair-ai/Prompt-Engineering-Guide/tree/main/",footer:{text:"Copyright \xa9 2023 DAIR.AI"},search:{placeholder:"Search..."},components:{pre:x}};var g=u},57577:function(e,t,n){"use strict";n.r(t),n.d(t,{__toc:function(){return h}});var a=n(11527),i=n(55411),r=n(85274),o=n(43677);n(20492),n(95178);var l=n(82132),s=n(41667),c=n(63622),d=n(72257);let h=[{depth:2,value:"LLaMA: 开放且高效的基础语言模型",id:"llama-开放且高效的基础语言模型"},{depth:2,value:"有什么新鲜事？",id:"有什么新鲜事"},{depth:2,value:"能力与关键结果",id:"能力与关键结果"},{depth:2,value:"引用",id:"引用"}];function x(e){let t=Object.assign({h2:"h2",p:"p",a:"a",em:"em",ul:"ul",li:"li"},(0,l.a)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"llama-开放且高效的基础语言模型",children:"LLaMA: 开放且高效的基础语言模型"}),"\n",(0,a.jsx)(c.UW,{emoji:"⚠️",children:(0,a.jsx)(t.p,{children:"本节正在大力开发中。"})}),"\n","\n",(0,a.jsx)(t.h2,{id:"有什么新鲜事",children:"有什么新鲜事？"}),"\n",(0,a.jsx)(t.p,{children:"这篇论文介绍了一组基础语言模型，参数范围从70亿到650亿。"}),"\n",(0,a.jsx)(t.p,{children:"这些模型在可公开获取的数据集上进行了数万亿次训练。"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://arxiv.org/abs/2203.15556",children:"(Hoffman et al. 2022)"})," 的工作表明，在更小的计算预算下，对更多数据进行训练的较小模型可以实现比其较大的模型更好的性能。论文建议用 200B token训练 10B 的模型。然而，LLaMA 论文发现，即使在 1T token之后，7B 模型的性能也会继续提高。"]}),"\n",(0,a.jsx)(s.w,{src:d.Z,alt:"LLAMA1"}),"\n",(0,a.jsx)(t.p,{children:"这项工作专注于通过更多的token训练模型（LLaMA），使其在不同的推理预算下实现最佳性能。"}),"\n",(0,a.jsx)(t.h2,{id:"能力与关键结果",children:"能力与关键结果"}),"\n",(0,a.jsx)(t.p,{children:"总的来说，尽管 LLaMA-13B 模型比 GPT-3（175B）小10倍，但在许多基准测试上的表现仍优于 GPT-3，并且可以在单个GPU上运行。LLaMA 65B 与 Chinchilla-70B 和 PaLM-540B 等模型都具有竞争力。"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.em,{children:"Paper:"})," ",(0,a.jsx)(t.a,{href:"https://arxiv.org/abs/2302.13971",children:"LLaMA: 开放且高效的基础语言模型"})]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.em,{children:"Code:"})," ",(0,a.jsx)(t.a,{href:"https://github.com/facebookresearch/llama",children:"https://github.com/facebookresearch/llama"})]}),"\n",(0,a.jsx)(t.h2,{id:"引用",children:"引用"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://bair.berkeley.edu/blog/2023/04/03/koala/",children:"Koala: A Dialogue Model for Academic Research"})," (April 2023)"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://arxiv.org/abs/2304.01196",children:"Baize: An Open-Source Chat Model with Parameter-Efficient Tuning on Self-Chat Data"})," (April 2023)"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://vicuna.lmsys.org/",children:"Vicuna: An Open-Source Chatbot Impressing GPT-4 with 90%* ChatGPT Quality"})," (March 2023)"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://arxiv.org/abs/2303.16199",children:"LLaMA-Adapter: Efficient Fine-tuning of Language Models with Zero-init Attention"})," (March 2023)"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://github.com/nomic-ai/gpt4all",children:"GPT4All"})," (March 2023)"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://arxiv.org/abs/2303.14070",children:"ChatDoctor: A Medical Chat Model Fine-tuned on LLaMA Model using Medical Domain Knowledge"})," (March 2023)"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://github.com/tatsu-lab/stanford_alpaca",children:"Stanford Alpaca"})," (March 2023)"]}),"\n"]})]})}let u={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,l.a)(),e.components);return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(x,{...e})}):x(e)},pageOpts:{filePath:"pages/models/llama.zh.mdx",route:"/models/llama",timestamp:1684426049e3,pageMap:[{kind:"Meta",locale:"zh",data:{index:"提示工程指南",introduction:"提示工程简介",techniques:"提示技术",applications:"提示应用",models:"模型",risks:"风险和误用",papers:"论文",tools:"工具和库",notebooks:"Prompt Engineering 笔记本",datasets:"数据集",readings:"阅读推荐",course:{title:"提示工程课程",type:"page"},services:{title:"服务",type:"page"},about:{title:"关于",type:"page"}}},{kind:"MdxPage",name:"about",route:"/about",locale:"zh"},{kind:"Folder",name:"applications",route:"/applications",children:[{kind:"Meta",locale:"zh",data:{pal:"程序辅助语言模型",generating:"生成数据",coding:"Generating Code",workplace_casestudy:"毕业生工作分类案例研究",pf:"提示函数"}},{kind:"MdxPage",name:"coding",route:"/applications/coding",locale:"zh"},{kind:"MdxPage",name:"generating",route:"/applications/generating",locale:"zh"},{kind:"MdxPage",name:"pal",route:"/applications/pal",locale:"zh"},{kind:"MdxPage",name:"pf",route:"/applications/pf",locale:"zh"},{kind:"MdxPage",name:"workplace_casestudy",route:"/applications/workplace_casestudy",locale:"zh"},{kind:"MdxPage",name:"generating_textbooks",route:"/applications/generating_textbooks",locale:"en"},{kind:"MdxPage",name:"synthetic_rag",route:"/applications/synthetic_rag",locale:"en"}]},{kind:"MdxPage",name:"applications",route:"/applications",locale:"zh"},{kind:"MdxPage",name:"course",route:"/course",locale:"zh"},{kind:"MdxPage",name:"datasets",route:"/datasets",locale:"zh"},{kind:"MdxPage",name:"index",route:"/",locale:"zh"},{kind:"Folder",name:"introduction",route:"/introduction",children:[{kind:"Meta",locale:"zh",data:{settings:"大语言模型设置",basics:"基本概念",elements:"提示词要素",tips:"设计提示的通用技巧",examples:"提示词示例"}},{kind:"MdxPage",name:"basics",route:"/introduction/basics",locale:"zh"},{kind:"MdxPage",name:"elements",route:"/introduction/elements",locale:"zh"},{kind:"MdxPage",name:"examples",route:"/introduction/examples",locale:"zh"},{kind:"MdxPage",name:"settings",route:"/introduction/settings",locale:"zh"},{kind:"MdxPage",name:"tips",route:"/introduction/tips",locale:"zh"}]},{kind:"MdxPage",name:"introduction",route:"/introduction",locale:"zh"},{kind:"Folder",name:"models",route:"/models",children:[{kind:"Meta",locale:"zh",data:{flan:"Flan",chatgpt:"ChatGPT",llama:"LLaMA","gpt-4":"GPT-4","mistral-7b":"Mistral 7B",collection:"Model Collection"}},{kind:"MdxPage",name:"chatgpt",route:"/models/chatgpt",locale:"zh"},{kind:"MdxPage",name:"collection",route:"/models/collection",locale:"zh"},{kind:"MdxPage",name:"flan",route:"/models/flan",locale:"zh"},{kind:"MdxPage",name:"gpt-4",route:"/models/gpt-4",locale:"zh"},{kind:"MdxPage",name:"llama",route:"/models/llama",locale:"zh"},{kind:"MdxPage",name:"mistral-7b",route:"/models/mistral-7b",locale:"zh"}]},{kind:"MdxPage",name:"models",route:"/models",locale:"zh"},{kind:"MdxPage",name:"notebooks",route:"/notebooks",locale:"zh"},{kind:"MdxPage",name:"papers",route:"/papers",locale:"zh"},{kind:"MdxPage",name:"readings",route:"/readings",locale:"zh"},{kind:"Folder",name:"risks",route:"/risks",children:[{kind:"Meta",locale:"zh",data:{adversarial:"对抗性提示",factuality:"真实性",biases:"偏见"}},{kind:"MdxPage",name:"adversarial",route:"/risks/adversarial",locale:"zh"},{kind:"MdxPage",name:"biases",route:"/risks/biases",locale:"zh"},{kind:"MdxPage",name:"factuality",route:"/risks/factuality",locale:"zh"}]},{kind:"MdxPage",name:"risks",route:"/risks",locale:"zh"},{kind:"MdxPage",name:"services",route:"/services",locale:"zh"},{kind:"Folder",name:"techniques",route:"/techniques",children:[{kind:"Meta",locale:"zh",data:{zeroshot:"零样本提示",fewshot:"少样本提示",cot:"链式思考（CoT）提示",consistency:"自我一致性",knowledge:"生成知识提示",tot:"思维树（ToT）",rag:"检索增强生成 (RAG)",art:"自动推理并使用工具（ART）",ape:"自动提示工程师",activeprompt:"Active-Prompt",dsp:"方向性刺激提示",react:"ReAct框架",multimodalcot:"多模态思维链提示方法",graph:"基于图的提示"}},{kind:"MdxPage",name:"activeprompt",route:"/techniques/activeprompt",locale:"zh"},{kind:"MdxPage",name:"ape",route:"/techniques/ape",locale:"zh"},{kind:"MdxPage",name:"art",route:"/techniques/art",locale:"zh"},{kind:"MdxPage",name:"consistency",route:"/techniques/consistency",locale:"zh"},{kind:"MdxPage",name:"cot",route:"/techniques/cot",locale:"zh"},{kind:"MdxPage",name:"dsp",route:"/techniques/dsp",locale:"zh"},{kind:"MdxPage",name:"fewshot",route:"/techniques/fewshot",locale:"zh"},{kind:"MdxPage",name:"graph",route:"/techniques/graph",locale:"zh"},{kind:"MdxPage",name:"knowledge",route:"/techniques/knowledge",locale:"zh"},{kind:"MdxPage",name:"multimodalcot",route:"/techniques/multimodalcot",locale:"zh"},{kind:"MdxPage",name:"rag",route:"/techniques/rag",locale:"zh"},{kind:"MdxPage",name:"react",route:"/techniques/react",locale:"zh"},{kind:"MdxPage",name:"tot",route:"/techniques/tot",locale:"zh"},{kind:"MdxPage",name:"zeroshot",route:"/techniques/zeroshot",locale:"zh"}]},{kind:"MdxPage",name:"techniques",route:"/techniques",locale:"zh"},{kind:"MdxPage",name:"tools",route:"/tools",locale:"zh"}],flexsearch:{codeblocks:!0},title:"Llama",headings:h},pageNextRoute:"/models/llama.zh",nextraLayout:r.ZP,themeConfig:o.Z};t.default=(0,i.j)(u)}},function(e){e.O(0,[67892,49774,92888,40179],function(){return e(e.s=28291)}),_N_E=e.O()}]);