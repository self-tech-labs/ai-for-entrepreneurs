(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[33831],{87953:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/techniques/tot.zh",function(){return n(47982)}])},31319:function(e,t){"use strict";t.Z={src:"/_next/static/media/TOT.3b13bc5e.png",height:550,width:1083,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAWElEQVR42h2LWw6AIAwEuf8pTYyIpOITWkopNk72Y5PJOGZuP3ZEpEkjwlqrGzq0q4mSi5HOGJdJEB0x2jJlD/NzJc4vgFcrAvhtX+GIWwr3e2GlkNau+gEXNlu9jOUmoAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4}},15134:function(e,t){"use strict";t.Z={src:"/_next/static/media/TOT2.9eb8f0f9.png",height:244,width:845,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAIAAADq9gq6AAAANElEQVR42gVAhwnAIBB0/zVDsL0d9c4CooCJ0XP0UTQxSTjz1SxqE+eeXkJNdhEki/yjhQd0WS2WR8xs3QAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:2}},9157:function(e,t){"use strict";t.Z={src:"/_next/static/media/TOT3.bf83699e.png",height:307,width:803,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAIAAAAhqtkfAAAAQUlEQVR42g3JQRLAQAQEQP//qZIMQWHlkvS1SUQiIjPP7szsnswwf4iZVbW7392eSb3LcDkIwB9V1VUe4aYQhuEDBJBELSfoAvUAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3}},41667:function(e,t,n){"use strict";n.d(t,{w:function(){return l}});var a=n(11527),o=n(5341),r=n(76484),i=n.n(r);function l(e){let{src:t,alt:n,full:r}=e;return(0,a.jsx)("div",{className:(0,o.Z)("mt-6 -mb-4 flex justify-center overflow-hidden rounded-xl border dark:border-zinc-800",r?"bg-white":"bg-zinc-100"),children:(0,a.jsx)(i(),{src:t,alt:n,className:(0,o.Z)("w-auto select-none bg-white",r?"":"ring-1 ring-gray-200")})})}},43677:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var a=n(11527),o=n(50959),r=n(85274),i=n(5341);function l(e){return(0,a.jsx)("svg",{viewBox:"0 0 24 24",width:"24",height:"24",...e,children:(0,a.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}let s=e=>{let{children:t,className:n,...o}=e;return(0,a.jsx)("button",{className:(0,i.Z)("nextra-button nx-transition-all active:nx-opacity-50","nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-1.5","dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50",n),...o,children:t})};function c(e){return(0,a.jsx)("svg",{viewBox:"0 0 20 20",width:"1em",height:"1em",fill:"currentColor",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}function d(e){return(0,a.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",...e,children:[(0,a.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,a.jsx)("path",{d:"M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}let h=e=>{let{getValue:t,...n}=e,[r,i]=(0,o.useState)(!1);(0,o.useEffect)(()=>{if(!r)return;let e=setTimeout(()=>{i(!1)},2e3);return()=>{clearTimeout(e)}},[r]);let l=(0,o.useCallback)(async()=>{i(!0),(null==navigator?void 0:navigator.clipboard)||console.error("Access to clipboard rejected!");try{await navigator.clipboard.writeText(t())}catch(e){console.error("Failed to copy!")}},[t]);return(0,a.jsx)(s,{onClick:l,title:"Copy code",tabIndex:0,...n,children:(0,a.jsx)(r?c:d,{className:"nextra-copy-icon nx-pointer-events-none nx-h-4 nx-w-4"})})},x=e=>{let{children:t,className:n,hasCopyCode:r=!0,filename:c,...d}=e,x=(0,o.useRef)(null),u=(0,o.useCallback)(()=>{let e=document.documentElement.dataset,t="nextraWordWrap"in e;t?delete e.nextraWordWrap:e.nextraWordWrap=""},[]);return(0,a.jsxs)("div",{className:"nextra-code-block nx-relative nx-mt-6 first:nx-mt-0",children:[c&&(0,a.jsx)("div",{className:"nx-absolute nx-top-0 nx-z-[1] nx-w-full nx-truncate nx-rounded-t-xl nx-bg-primary-700/5 nx-py-2 nx-px-4 nx-text-xs nx-text-gray-700 dark:nx-bg-primary-300/10 dark:nx-text-gray-200",children:c}),(0,a.jsx)("pre",{className:(0,i.Z)("nx-bg-primary-700/5 nx-mb-4 nx-overflow-x-auto nx-rounded-xl nx-subpixel-antialiased dark:nx-bg-primary-300/10 nx-text-[.9em]","contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40",c?"nx-pt-12 nx-pb-4":"nx-py-4",n),ref:x,...d,children:o.isValidElement(t)&&"code"===t.type?t.props.children:t}),(0,a.jsxs)("div",{className:(0,i.Z)("nx-opacity-0 nx-transition [div:hover>&]:nx-opacity-100 focus-within:nx-opacity-100","nx-flex nx-gap-1 nx-absolute nx-m-[11px] nx-right-0",c?"nx-top-8":"nx-top-0"),children:[(0,a.jsx)(s,{onClick:u,className:"md:nx-hidden",title:"Toggle word wrap elvis",children:(0,a.jsx)(l,{className:"nx-pointer-events-none nx-h-4 nx-w-4"})}),r&&(0,a.jsx)(h,{getValue(){var e,t;return(null===(e=null===(t=x.current)||void 0===t?void 0:t.querySelector("code"))||void 0===e?void 0:e.textContent)||""}})]})]})},u={logo:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 206 246",fill:"none",children:[(0,a.jsx)("circle",{cx:"40",cy:"40",r:"40",fill:"currentColor"}),(0,a.jsx)("circle",{cx:"40",cy:"206",r:"40",fill:"currentColor"}),(0,a.jsx)("circle",{cx:"166",cy:"120",r:"40",fill:"currentColor"})]}),(0,a.jsx)("span",{style:{marginLeft:".4em",fontWeight:800},children:"Prompt Engineering Guide"})]}),i18n:[{locale:"en",text:"English"},{locale:"zh",text:"中文"},{locale:"jp",text:"日本語"},{locale:"pt",text:"Portugu\xeas"},{locale:"it",text:"Italian"},{locale:"tr",text:"T\xfcrk\xe7e"},{locale:"es",text:"Espa\xf1ol"},{locale:"fr",text:"Fran\xe7ais"},{locale:"kr",text:"한국어"},{locale:"ca",text:"Catal\xe0"},{locale:"fi",text:"Finnish"},{locale:"ru",text:"Русский"}],head:function(){let{title:e}=(0,r.ZR)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("title",{children:[e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"," "]}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,a.jsx)("meta",{property:"og:title",content:"Prompt Engineering Guide"}),(0,a.jsx)("meta",{property:"og:description",content:"A Comprehensive Overview of Prompt Engineering"}),(0,a.jsx)("meta",{name:"og:title",content:e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"}),(0,a.jsx)("link",{rel:"icon",href:"/144-favicon.svg",type:"image/svg+xml"}),(0,a.jsx)("link",{rel:"icon",href:"/144-favicon-dark.svg",type:"image/svg+xml",media:"(prefers-color-scheme: dark)"})]})},project:{link:"https://github.com/dair-ai/Prompt-Engineering-Guide"},chat:{link:"https://discord.gg/FUyz9vPAwf"},docsRepositoryBase:"https://github.com/dair-ai/Prompt-Engineering-Guide/tree/main/",footer:{text:"Copyright \xa9 2023 DAIR.AI"},search:{placeholder:"Search..."},components:{pre:x}};var g=u},47982:function(e,t,n){"use strict";n.r(t),n.d(t,{__toc:function(){return x}});var a=n(11527),o=n(55411),r=n(85274),i=n(43677);n(20492),n(95178);var l=n(82132),s=n(41667),c=n(31319),d=n(15134),h=n(9157);let x=[];function u(e){let t=Object.assign({h1:"h1",p:"p",a:"a",pre:"pre",code:"code",span:"span"},(0,l.a)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{children:"思维树 (ToT)"}),"\n","\n",(0,a.jsxs)(t.p,{children:["对于需要探索或预判战略的复杂任务来说，传统或简单的提示技巧是不够的。最近，",(0,a.jsx)(t.a,{href:"https://arxiv.org/abs/2305.10601",children:"Yao et el. (2023)"})," 提出了思维树（Tree of Thoughts，ToT）框架，该框架基于思维链提示进行了总结，引导语言模型探索把思维作为中间步骤来解决通用问题。"]}),"\n",(0,a.jsx)(t.p,{children:"ToT 维护着一棵思维树，思维由连贯的语言序列表示，这个序列就是解决问题的中间步骤。使用这种方法，LM 能够自己对严谨推理过程的中间思维进行评估。LM 将生成及评估思维的能力与搜索算法（如广度优先搜索和深度优先搜索）相结合，在系统性探索思维的时候可以向前验证和回溯。"}),"\n",(0,a.jsx)(t.p,{children:"ToT 框架原理如下："}),"\n",(0,a.jsx)(s.w,{src:c.Z,alt:"TOT"}),"\n",(0,a.jsxs)(t.p,{children:["图片援引自：",(0,a.jsx)(t.a,{href:"https://arxiv.org/abs/2305.10601",children:"Yao et el. (2023)"})]}),"\n",(0,a.jsx)(t.p,{children:"ToT 需要针对不同的任务定义思维/步骤的数量以及每步的候选项数量。例如，论文中的“算 24 游戏”是一种数学推理任务，需要分成 3 个思维步骤，每一步都需要一个中间方程。而每个步骤保留最优的（best） 5 个候选项。"}),"\n",(0,a.jsx)(t.p,{children:"ToT 完成算 24 的游戏任务要执行广度优先搜索（BFS），每步思维的候选项都要求 LM 给出能否得到 24 的评估：“sure/maybe/impossible”（一定能/可能/不可能） 。作者讲到：“目的是得到经过少量向前尝试就可以验证正确（sure）的局部解，基于‘太大/太小’的常识消除那些不可能（impossible）的局部解，其余的局部解作为‘maybe’保留。”每步思维都要抽样得到 3 个评估结果。整个过程如下图所示："}),"\n",(0,a.jsx)(s.w,{src:d.Z,alt:"TOT2"}),"\n",(0,a.jsxs)(t.p,{children:["图片援引自：",(0,a.jsx)(t.a,{href:"https://arxiv.org/abs/2305.10601",children:"Yao et el. (2023)"})]}),"\n",(0,a.jsx)(t.p,{children:"从下图中报告的结果来看，ToT 的表现大大超过了其他提示方法："}),"\n",(0,a.jsx)(s.w,{src:h.Z,alt:"TOT3"}),"\n",(0,a.jsxs)(t.p,{children:["图片援引自：",(0,a.jsx)(t.a,{href:"https://arxiv.org/abs/2305.10601",children:"Yao et el. (2023)"})]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://github.com/princeton-nlp/tree-of-thought-llm",children:"这里"}),"还有",(0,a.jsx)(t.a,{href:"https://github.com/jieyilong/tree-of-thought-puzzle-solver",children:"这里"}),"可以找到代码例子。"]}),"\n",(0,a.jsxs)(t.p,{children:["从大方向上来看，",(0,a.jsx)(t.a,{href:"https://arxiv.org/abs/2305.10601",children:"Yao et el. (2023)"})," 和 ",(0,a.jsx)(t.a,{href:"https://arxiv.org/abs/2305.08291",children:"Long (2023)"})," 的核心思路是类似的。两种方法都是以多轮对话搜索树的形式来增强 LLM 解决复杂问题的能力。主要区别在于 ",(0,a.jsx)(t.a,{href:"https://arxiv.org/abs/2305.10601",children:"Yao et el. (2023)"})," 采用了深度优先（DFS）/广度优先（BFS）/集束（beam）搜索，而 ",(0,a.jsx)(t.a,{href:"https://arxiv.org/abs/2305.08291",children:"Long (2023)"})," 则提出由强化学习（Reinforcement Learning）训练出的 “ToT 控制器”（ToT Controller）来驱动树的搜索策略(宝库什么时候回退和搜索到哪一级回退等等)。深度优先/广度优先/集束搜索是通用搜索策略，并不针对具体问题。相比之下，由强化学习训练出的 ToT 控制器有可能从新的数据集学习，或是在自对弈（AlphaGo vs. 蛮力搜索）的过程中学习。因此，即使采用的是冻结的 LLM，基于强化学习构建的 ToT 系统仍然可以不断进化，学习新的知识。"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://github.com/dave1010/tree-of-thought-prompting",children:"Hulbert (2023)"})," 提出了思维树（ToT）提示法，将 ToT 框架的主要概念概括成了一段简短的提示词，指导 LLM 在一次提示中对中间思维做出评估。ToT 提示词的例子如下："]}),"\n",(0,a.jsx)(t.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsxs)(t.code,{"data-language":"text","data-theme":"default",children:[(0,a.jsx)(t.span,{className:"line",children:(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"假设三位不同的专家来回答这个问题。"})}),"\n",(0,a.jsx)(t.span,{className:"line",children:(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"所有专家都写下他们思考这个问题的第一个步骤，然后与大家分享。"})}),"\n",(0,a.jsx)(t.span,{className:"line",children:(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"然后，所有专家都写下他们思考的下一个步骤并分享。"})}),"\n",(0,a.jsx)(t.span,{className:"line",children:(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"以此类推，直到所有专家写完他们思考的所有步骤。"})}),"\n",(0,a.jsx)(t.span,{className:"line",children:(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"只要大家发现有专家的步骤出错了，就让这位专家离开。"})}),"\n",(0,a.jsx)(t.span,{className:"line",children:(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"请问..."})})]})})]})}let g={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,l.a)(),e.components);return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)},pageOpts:{filePath:"pages/techniques/tot.zh.mdx",route:"/techniques/tot",timestamp:1692589307e3,pageMap:[{kind:"Meta",locale:"zh",data:{index:"提示工程指南",introduction:"提示工程简介",techniques:"提示技术",applications:"提示应用",models:"模型",risks:"风险和误用",papers:"论文",tools:"工具和库",notebooks:"Prompt Engineering 笔记本",datasets:"数据集",readings:"阅读推荐",course:{title:"提示工程课程",type:"page"},services:{title:"服务",type:"page"},about:{title:"关于",type:"page"}}},{kind:"MdxPage",name:"about",route:"/about",locale:"zh"},{kind:"Folder",name:"applications",route:"/applications",children:[{kind:"Meta",locale:"zh",data:{pal:"程序辅助语言模型",generating:"生成数据",coding:"Generating Code",workplace_casestudy:"毕业生工作分类案例研究",pf:"提示函数"}},{kind:"MdxPage",name:"coding",route:"/applications/coding",locale:"zh"},{kind:"MdxPage",name:"generating",route:"/applications/generating",locale:"zh"},{kind:"MdxPage",name:"pal",route:"/applications/pal",locale:"zh"},{kind:"MdxPage",name:"pf",route:"/applications/pf",locale:"zh"},{kind:"MdxPage",name:"workplace_casestudy",route:"/applications/workplace_casestudy",locale:"zh"},{kind:"MdxPage",name:"generating_textbooks",route:"/applications/generating_textbooks",locale:"en"},{kind:"MdxPage",name:"synthetic_rag",route:"/applications/synthetic_rag",locale:"en"}]},{kind:"MdxPage",name:"applications",route:"/applications",locale:"zh"},{kind:"MdxPage",name:"course",route:"/course",locale:"zh"},{kind:"MdxPage",name:"datasets",route:"/datasets",locale:"zh"},{kind:"MdxPage",name:"index",route:"/",locale:"zh"},{kind:"Folder",name:"introduction",route:"/introduction",children:[{kind:"Meta",locale:"zh",data:{settings:"大语言模型设置",basics:"基本概念",elements:"提示词要素",tips:"设计提示的通用技巧",examples:"提示词示例"}},{kind:"MdxPage",name:"basics",route:"/introduction/basics",locale:"zh"},{kind:"MdxPage",name:"elements",route:"/introduction/elements",locale:"zh"},{kind:"MdxPage",name:"examples",route:"/introduction/examples",locale:"zh"},{kind:"MdxPage",name:"settings",route:"/introduction/settings",locale:"zh"},{kind:"MdxPage",name:"tips",route:"/introduction/tips",locale:"zh"}]},{kind:"MdxPage",name:"introduction",route:"/introduction",locale:"zh"},{kind:"Folder",name:"models",route:"/models",children:[{kind:"Meta",locale:"zh",data:{flan:"Flan",chatgpt:"ChatGPT",llama:"LLaMA","gpt-4":"GPT-4","mistral-7b":"Mistral 7B",collection:"Model Collection"}},{kind:"MdxPage",name:"chatgpt",route:"/models/chatgpt",locale:"zh"},{kind:"MdxPage",name:"collection",route:"/models/collection",locale:"zh"},{kind:"MdxPage",name:"flan",route:"/models/flan",locale:"zh"},{kind:"MdxPage",name:"gpt-4",route:"/models/gpt-4",locale:"zh"},{kind:"MdxPage",name:"llama",route:"/models/llama",locale:"zh"},{kind:"MdxPage",name:"mistral-7b",route:"/models/mistral-7b",locale:"zh"}]},{kind:"MdxPage",name:"models",route:"/models",locale:"zh"},{kind:"MdxPage",name:"notebooks",route:"/notebooks",locale:"zh"},{kind:"MdxPage",name:"papers",route:"/papers",locale:"zh"},{kind:"MdxPage",name:"readings",route:"/readings",locale:"zh"},{kind:"Folder",name:"risks",route:"/risks",children:[{kind:"Meta",locale:"zh",data:{adversarial:"对抗性提示",factuality:"真实性",biases:"偏见"}},{kind:"MdxPage",name:"adversarial",route:"/risks/adversarial",locale:"zh"},{kind:"MdxPage",name:"biases",route:"/risks/biases",locale:"zh"},{kind:"MdxPage",name:"factuality",route:"/risks/factuality",locale:"zh"}]},{kind:"MdxPage",name:"risks",route:"/risks",locale:"zh"},{kind:"MdxPage",name:"services",route:"/services",locale:"zh"},{kind:"Folder",name:"techniques",route:"/techniques",children:[{kind:"Meta",locale:"zh",data:{zeroshot:"零样本提示",fewshot:"少样本提示",cot:"链式思考（CoT）提示",consistency:"自我一致性",knowledge:"生成知识提示",tot:"思维树（ToT）",rag:"检索增强生成 (RAG)",art:"自动推理并使用工具（ART）",ape:"自动提示工程师",activeprompt:"Active-Prompt",dsp:"方向性刺激提示",react:"ReAct框架",multimodalcot:"多模态思维链提示方法",graph:"基于图的提示"}},{kind:"MdxPage",name:"activeprompt",route:"/techniques/activeprompt",locale:"zh"},{kind:"MdxPage",name:"ape",route:"/techniques/ape",locale:"zh"},{kind:"MdxPage",name:"art",route:"/techniques/art",locale:"zh"},{kind:"MdxPage",name:"consistency",route:"/techniques/consistency",locale:"zh"},{kind:"MdxPage",name:"cot",route:"/techniques/cot",locale:"zh"},{kind:"MdxPage",name:"dsp",route:"/techniques/dsp",locale:"zh"},{kind:"MdxPage",name:"fewshot",route:"/techniques/fewshot",locale:"zh"},{kind:"MdxPage",name:"graph",route:"/techniques/graph",locale:"zh"},{kind:"MdxPage",name:"knowledge",route:"/techniques/knowledge",locale:"zh"},{kind:"MdxPage",name:"multimodalcot",route:"/techniques/multimodalcot",locale:"zh"},{kind:"MdxPage",name:"rag",route:"/techniques/rag",locale:"zh"},{kind:"MdxPage",name:"react",route:"/techniques/react",locale:"zh"},{kind:"MdxPage",name:"tot",route:"/techniques/tot",locale:"zh"},{kind:"MdxPage",name:"zeroshot",route:"/techniques/zeroshot",locale:"zh"}]},{kind:"MdxPage",name:"techniques",route:"/techniques",locale:"zh"},{kind:"MdxPage",name:"tools",route:"/tools",locale:"zh"}],flexsearch:{codeblocks:!0},title:"思维树 (ToT)",headings:x},pageNextRoute:"/techniques/tot.zh",nextraLayout:r.ZP,themeConfig:i.Z};t.default=(0,o.j)(g)}},function(e){e.O(0,[67892,49774,92888,40179],function(){return e(e.s=87953)}),_N_E=e.O()}]);