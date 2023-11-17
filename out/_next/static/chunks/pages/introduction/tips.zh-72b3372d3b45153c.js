(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[54189],{98163:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/introduction/tips.zh",function(){return a(91613)}])},43677:function(e,n,a){"use strict";a.d(n,{Z:function(){return u}});var t=a(11527),l=a(50959),i=a(85274),r=a(5341);function s(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",width:"24",height:"24",...e,children:(0,t.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}let o=e=>{let{children:n,className:a,...l}=e;return(0,t.jsx)("button",{className:(0,r.Z)("nextra-button nx-transition-all active:nx-opacity-50","nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-1.5","dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50",a),...l,children:n})};function c(e){return(0,t.jsx)("svg",{viewBox:"0 0 20 20",width:"1em",height:"1em",fill:"currentColor",...e,children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}function d(e){return(0,t.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",...e,children:[(0,t.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}let x=e=>{let{getValue:n,...a}=e,[i,r]=(0,l.useState)(!1);(0,l.useEffect)(()=>{if(!i)return;let e=setTimeout(()=>{r(!1)},2e3);return()=>{clearTimeout(e)}},[i]);let s=(0,l.useCallback)(async()=>{r(!0),(null==navigator?void 0:navigator.clipboard)||console.error("Access to clipboard rejected!");try{await navigator.clipboard.writeText(n())}catch(e){console.error("Failed to copy!")}},[n]);return(0,t.jsx)(o,{onClick:s,title:"Copy code",tabIndex:0,...a,children:(0,t.jsx)(i?c:d,{className:"nextra-copy-icon nx-pointer-events-none nx-h-4 nx-w-4"})})},h=e=>{let{children:n,className:a,hasCopyCode:i=!0,filename:c,...d}=e,h=(0,l.useRef)(null),p=(0,l.useCallback)(()=>{let e=document.documentElement.dataset,n="nextraWordWrap"in e;n?delete e.nextraWordWrap:e.nextraWordWrap=""},[]);return(0,t.jsxs)("div",{className:"nextra-code-block nx-relative nx-mt-6 first:nx-mt-0",children:[c&&(0,t.jsx)("div",{className:"nx-absolute nx-top-0 nx-z-[1] nx-w-full nx-truncate nx-rounded-t-xl nx-bg-primary-700/5 nx-py-2 nx-px-4 nx-text-xs nx-text-gray-700 dark:nx-bg-primary-300/10 dark:nx-text-gray-200",children:c}),(0,t.jsx)("pre",{className:(0,r.Z)("nx-bg-primary-700/5 nx-mb-4 nx-overflow-x-auto nx-rounded-xl nx-subpixel-antialiased dark:nx-bg-primary-300/10 nx-text-[.9em]","contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40",c?"nx-pt-12 nx-pb-4":"nx-py-4",a),ref:h,...d,children:l.isValidElement(n)&&"code"===n.type?n.props.children:n}),(0,t.jsxs)("div",{className:(0,r.Z)("nx-opacity-0 nx-transition [div:hover>&]:nx-opacity-100 focus-within:nx-opacity-100","nx-flex nx-gap-1 nx-absolute nx-m-[11px] nx-right-0",c?"nx-top-8":"nx-top-0"),children:[(0,t.jsx)(o,{onClick:p,className:"md:nx-hidden",title:"Toggle word wrap elvis",children:(0,t.jsx)(s,{className:"nx-pointer-events-none nx-h-4 nx-w-4"})}),i&&(0,t.jsx)(x,{getValue(){var e,n;return(null===(e=null===(n=h.current)||void 0===n?void 0:n.querySelector("code"))||void 0===e?void 0:e.textContent)||""}})]})]})},p={logo:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 206 246",fill:"none",children:[(0,t.jsx)("circle",{cx:"40",cy:"40",r:"40",fill:"currentColor"}),(0,t.jsx)("circle",{cx:"40",cy:"206",r:"40",fill:"currentColor"}),(0,t.jsx)("circle",{cx:"166",cy:"120",r:"40",fill:"currentColor"})]}),(0,t.jsx)("span",{style:{marginLeft:".4em",fontWeight:800},children:"Prompt Engineering Guide"})]}),i18n:[{locale:"en",text:"English"},{locale:"zh",text:"中文"},{locale:"jp",text:"日本語"},{locale:"pt",text:"Portugu\xeas"},{locale:"it",text:"Italian"},{locale:"tr",text:"T\xfcrk\xe7e"},{locale:"es",text:"Espa\xf1ol"},{locale:"fr",text:"Fran\xe7ais"},{locale:"kr",text:"한국어"},{locale:"ca",text:"Catal\xe0"},{locale:"fi",text:"Finnish"},{locale:"ru",text:"Русский"}],head:function(){let{title:e}=(0,i.ZR)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("title",{children:[e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"," "]}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,t.jsx)("meta",{property:"og:title",content:"Prompt Engineering Guide"}),(0,t.jsx)("meta",{property:"og:description",content:"A Comprehensive Overview of Prompt Engineering"}),(0,t.jsx)("meta",{name:"og:title",content:e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"}),(0,t.jsx)("link",{rel:"icon",href:"/144-favicon.svg",type:"image/svg+xml"}),(0,t.jsx)("link",{rel:"icon",href:"/144-favicon-dark.svg",type:"image/svg+xml",media:"(prefers-color-scheme: dark)"})]})},project:{link:"https://github.com/dair-ai/Prompt-Engineering-Guide"},chat:{link:"https://discord.gg/FUyz9vPAwf"},docsRepositoryBase:"https://github.com/dair-ai/Prompt-Engineering-Guide/tree/main/",footer:{text:"Copyright \xa9 2023 DAIR.AI"},search:{placeholder:"Search..."},components:{pre:h}};var u=p},91613:function(e,n,a){"use strict";a.r(n),a.d(n,{__toc:function(){return o}});var t=a(11527),l=a(55411),i=a(85274),r=a(43677);a(20492),a(95178);var s=a(82132);let o=[{depth:3,value:"从简单开始",id:"从简单开始"},{depth:3,value:"指令",id:"指令"},{depth:3,value:"具体性",id:"具体性"},{depth:3,value:"避免不精确",id:"避免不精确"},{depth:3,value:"做还是不做？",id:"做还是不做"}];function c(e){let n=Object.assign({h1:"h1",p:"p",h3:"h3",em:"em",pre:"pre",code:"code",span:"span",a:"a"},(0,s.a)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{children:"设计提示的通用技巧"}),"\n",(0,t.jsx)(n.p,{children:"以下是设计提示时需要记住的一些技巧："}),"\n",(0,t.jsx)(n.h3,{id:"从简单开始",children:"从简单开始"}),"\n",(0,t.jsx)(n.p,{children:"在设计提示时，需要记住这是一个迭代的过程，需要大量的实验来获得最佳结果。使用像OpenAI或Cohere这样的简单平台是一个很好的起点。"}),"\n",(0,t.jsx)(n.p,{children:"您可以从简单的提示开始，随着您的目标是获得更好的结果，不断添加更多的元素和上下文。在此过程中对您的提示进行版本控制是至关重要的。当您阅读本指南时，您会看到许多例子，其中具体性、简洁性和简明性通常会给您带来更好的结果。"}),"\n",(0,t.jsx)(n.p,{children:"当您有一个涉及许多不同子任务的大任务时，您可以尝试将任务分解为更简单的子任务，并随着获得更好的结果而不断构建。这避免了在提示设计过程中一开始就添加过多的复杂性。"}),"\n",(0,t.jsx)(n.h3,{id:"指令",children:"指令"}),"\n",(0,t.jsx)(n.p,{children:"您可以使用命令来指示模型执行各种简单任务，例如“写入”、“分类”、“总结”、“翻译”、“排序”等，从而为各种简单任务设计有效的提示。"}),"\n",(0,t.jsx)(n.p,{children:"请记住，您还需要进行大量的实验，以查看哪种方法最有效。尝试使用不同的关键字、上下文和数据尝试不同的指令，看看哪种方法最适合您的特定用例和任务。通常情况下，上下文与您要执行的任务越具体和相关，效果越好。我们将在即将推出的指南中介绍采样和添加更多上下文的重要性。"}),"\n",(0,t.jsx)(n.p,{children:"其他人建议将指令放在提示的开头。建议使用一些清晰的分隔符，如“###”，来分隔指令和上下文。"}),"\n",(0,t.jsx)(n.p,{children:"例如："}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"提示："})}),"\n",(0,t.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,t.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"### 指令 ###"})}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"将以下文本翻译成西班牙语："})}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"文本：“hello！”"})})]})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"输出："})}),"\n",(0,t.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,t.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"\xa1Hola!"})})})}),"\n",(0,t.jsx)(n.h3,{id:"具体性",children:"具体性"}),"\n",(0,t.jsx)(n.p,{children:"对您希望模型执行的指令和任务非常具体。提示越具体和详细，结果就越好。当您有所期望的结果或生成样式时，这一点尤为重要。没有特定的令牌或关键字会导致更好的结果。更重要的是具有良好的格式和描述性提示。实际上，在提示中提供示例非常有效，可以以特定格式获得所需的输出。"}),"\n",(0,t.jsx)(n.p,{children:"在设计提示时，您还应考虑提示的长度，因为提示的长度有限制。考虑到您应该具体和详细的程度是需要考虑的。包含太多不必要的细节并不一定是一个好方法。这些细节应该是相关的，并有助于完成手头的任务。这是您需要进行大量实验的事情。我们鼓励大量实验和迭代，以优化您的应用程序的提示。"}),"\n",(0,t.jsx)(n.p,{children:"例如，让我们尝试从一段文本中提取特定信息的简单提示。"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"提示："})}),"\n",(0,t.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,t.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"提取以下文本中的地名。"})}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"所需格式："})}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"地点：<逗号分隔的公司名称列表>"})}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"输入：“虽然这些发展对研究人员来说是令人鼓舞的，但仍有许多谜团。里斯本未知的香帕利莫德中心的神经免疫学家Henrique Veiga-Fernandes说：“我们经常在大脑和我们在周围看到的效果之间有一个黑匣子。”“如果我们想在治疗背景下使用它，我们实际上需要了解机制。””"})})]})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"输出："})}),"\n",(0,t.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,t.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"地点：里斯本，香帕利莫德中心"})})})}),"\n",(0,t.jsxs)(n.p,{children:["输入文本来自",(0,t.jsx)(n.a,{href:"https://www.nature.com/articles/d41586-023-00509-z",children:"这篇Nature文章"}),"。"]}),"\n",(0,t.jsx)(n.h3,{id:"避免不精确",children:"避免不精确"}),"\n",(0,t.jsx)(n.p,{children:"在上面关于详细和格式改进的提示中，很容易陷入想要过于聪明的提示陷阱，从而可能创建不精确的描述。通常最好是具体和直接。这里的类比非常类似于有效的沟通——越直接，信息传递就越有效。"}),"\n",(0,t.jsx)(n.p,{children:"例如，您可能有兴趣了解提示工程的概念。您可以尝试这样做："}),"\n",(0,t.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,t.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"解释提示工程的概念。保持解释简短，只有几句话，不要过于描述。"})})})}),"\n",(0,t.jsx)(n.p,{children:"从上面的提示中不清楚要使用多少句话和什么样的风格。您可能仍然可以通过上面的提示获得良好的响应，但更好的提示是非常具体、简洁和直接的。例如："}),"\n",(0,t.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,t.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"使用2-3句话向高中学生解释提示工程的概念。"})})})}),"\n",(0,t.jsx)(n.h3,{id:"做还是不做",children:"做还是不做？"}),"\n",(0,t.jsx)(n.p,{children:"设计提示时的另一个常见技巧是避免说不要做什么，而是说要做什么。这鼓励更具体化，并关注导致模型产生良好响应的细节。"}),"\n",(0,t.jsx)(n.p,{children:"以下是一个电影推荐聊天机器人的示例，因为我写的指令——关注于不要做什么，而失败了。"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"提示："})}),"\n",(0,t.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,t.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"以下是向客户推荐电影的代理程序。不要询问兴趣。不要询问个人信息。"})}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"客户：请根据我的兴趣推荐电影。"})}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"代理："})})]})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"输出："})}),"\n",(0,t.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,t.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"当然，我可以根据您的兴趣推荐电影。您想看什么类型的电影？您喜欢动作片、喜剧片、爱情片还是其他类型的电影？"})})})}),"\n",(0,t.jsx)(n.p,{children:"以下是更好的提示："}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"提示："})}),"\n",(0,t.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,t.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"以下是向客户推荐电影的代理程序。代理负责从全球热门电影中推荐电影。它应该避免询问用户的偏好并避免询问个人信息。如果代理没有电影推荐，它应该回答“抱歉，今天找不到电影推荐。”。"})}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"```顾客：请根据我的兴趣推荐一部电影。"})}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"客服："})}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"}})})]})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"输出："})}),"\n",(0,t.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,t.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"抱歉，我没有关于您兴趣的任何信息。不过，这是目前全球热门的电影列表：[电影列表]。希望您能找到喜欢的电影！"})})})}),"\n",(0,t.jsxs)(n.p,{children:["上述示例中的一些内容摘自",(0,t.jsx)(n.a,{href:"https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-openai-api",children:'"Best practices for prompt engineering with OpenAI API" article.'})]})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.a)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/introduction/tips.zh.mdx",route:"/introduction/tips",timestamp:1681394039e3,pageMap:[{kind:"Meta",locale:"zh",data:{index:"提示工程指南",introduction:"提示工程简介",techniques:"提示技术",applications:"提示应用",models:"模型",risks:"风险和误用",papers:"论文",tools:"工具和库",notebooks:"Prompt Engineering 笔记本",datasets:"数据集",readings:"阅读推荐",course:{title:"提示工程课程",type:"page"},services:{title:"服务",type:"page"},about:{title:"关于",type:"page"}}},{kind:"MdxPage",name:"about",route:"/about",locale:"zh"},{kind:"Folder",name:"applications",route:"/applications",children:[{kind:"Meta",locale:"zh",data:{pal:"程序辅助语言模型",generating:"生成数据",coding:"Generating Code",workplace_casestudy:"毕业生工作分类案例研究",pf:"提示函数"}},{kind:"MdxPage",name:"coding",route:"/applications/coding",locale:"zh"},{kind:"MdxPage",name:"generating",route:"/applications/generating",locale:"zh"},{kind:"MdxPage",name:"pal",route:"/applications/pal",locale:"zh"},{kind:"MdxPage",name:"pf",route:"/applications/pf",locale:"zh"},{kind:"MdxPage",name:"workplace_casestudy",route:"/applications/workplace_casestudy",locale:"zh"},{kind:"MdxPage",name:"generating_textbooks",route:"/applications/generating_textbooks",locale:"en"},{kind:"MdxPage",name:"synthetic_rag",route:"/applications/synthetic_rag",locale:"en"}]},{kind:"MdxPage",name:"applications",route:"/applications",locale:"zh"},{kind:"MdxPage",name:"course",route:"/course",locale:"zh"},{kind:"MdxPage",name:"datasets",route:"/datasets",locale:"zh"},{kind:"MdxPage",name:"index",route:"/",locale:"zh"},{kind:"Folder",name:"introduction",route:"/introduction",children:[{kind:"Meta",locale:"zh",data:{settings:"大语言模型设置",basics:"基本概念",elements:"提示词要素",tips:"设计提示的通用技巧",examples:"提示词示例"}},{kind:"MdxPage",name:"basics",route:"/introduction/basics",locale:"zh"},{kind:"MdxPage",name:"elements",route:"/introduction/elements",locale:"zh"},{kind:"MdxPage",name:"examples",route:"/introduction/examples",locale:"zh"},{kind:"MdxPage",name:"settings",route:"/introduction/settings",locale:"zh"},{kind:"MdxPage",name:"tips",route:"/introduction/tips",locale:"zh"}]},{kind:"MdxPage",name:"introduction",route:"/introduction",locale:"zh"},{kind:"Folder",name:"models",route:"/models",children:[{kind:"Meta",locale:"zh",data:{flan:"Flan",chatgpt:"ChatGPT",llama:"LLaMA","gpt-4":"GPT-4","mistral-7b":"Mistral 7B",collection:"Model Collection"}},{kind:"MdxPage",name:"chatgpt",route:"/models/chatgpt",locale:"zh"},{kind:"MdxPage",name:"collection",route:"/models/collection",locale:"zh"},{kind:"MdxPage",name:"flan",route:"/models/flan",locale:"zh"},{kind:"MdxPage",name:"gpt-4",route:"/models/gpt-4",locale:"zh"},{kind:"MdxPage",name:"llama",route:"/models/llama",locale:"zh"},{kind:"MdxPage",name:"mistral-7b",route:"/models/mistral-7b",locale:"zh"}]},{kind:"MdxPage",name:"models",route:"/models",locale:"zh"},{kind:"MdxPage",name:"notebooks",route:"/notebooks",locale:"zh"},{kind:"MdxPage",name:"papers",route:"/papers",locale:"zh"},{kind:"MdxPage",name:"readings",route:"/readings",locale:"zh"},{kind:"Folder",name:"risks",route:"/risks",children:[{kind:"Meta",locale:"zh",data:{adversarial:"对抗性提示",factuality:"真实性",biases:"偏见"}},{kind:"MdxPage",name:"adversarial",route:"/risks/adversarial",locale:"zh"},{kind:"MdxPage",name:"biases",route:"/risks/biases",locale:"zh"},{kind:"MdxPage",name:"factuality",route:"/risks/factuality",locale:"zh"}]},{kind:"MdxPage",name:"risks",route:"/risks",locale:"zh"},{kind:"MdxPage",name:"services",route:"/services",locale:"zh"},{kind:"Folder",name:"techniques",route:"/techniques",children:[{kind:"Meta",locale:"zh",data:{zeroshot:"零样本提示",fewshot:"少样本提示",cot:"链式思考（CoT）提示",consistency:"自我一致性",knowledge:"生成知识提示",tot:"思维树（ToT）",rag:"检索增强生成 (RAG)",art:"自动推理并使用工具（ART）",ape:"自动提示工程师",activeprompt:"Active-Prompt",dsp:"方向性刺激提示",react:"ReAct框架",multimodalcot:"多模态思维链提示方法",graph:"基于图的提示"}},{kind:"MdxPage",name:"activeprompt",route:"/techniques/activeprompt",locale:"zh"},{kind:"MdxPage",name:"ape",route:"/techniques/ape",locale:"zh"},{kind:"MdxPage",name:"art",route:"/techniques/art",locale:"zh"},{kind:"MdxPage",name:"consistency",route:"/techniques/consistency",locale:"zh"},{kind:"MdxPage",name:"cot",route:"/techniques/cot",locale:"zh"},{kind:"MdxPage",name:"dsp",route:"/techniques/dsp",locale:"zh"},{kind:"MdxPage",name:"fewshot",route:"/techniques/fewshot",locale:"zh"},{kind:"MdxPage",name:"graph",route:"/techniques/graph",locale:"zh"},{kind:"MdxPage",name:"knowledge",route:"/techniques/knowledge",locale:"zh"},{kind:"MdxPage",name:"multimodalcot",route:"/techniques/multimodalcot",locale:"zh"},{kind:"MdxPage",name:"rag",route:"/techniques/rag",locale:"zh"},{kind:"MdxPage",name:"react",route:"/techniques/react",locale:"zh"},{kind:"MdxPage",name:"tot",route:"/techniques/tot",locale:"zh"},{kind:"MdxPage",name:"zeroshot",route:"/techniques/zeroshot",locale:"zh"}]},{kind:"MdxPage",name:"techniques",route:"/techniques",locale:"zh"},{kind:"MdxPage",name:"tools",route:"/tools",locale:"zh"}],flexsearch:{codeblocks:!0},title:"设计提示的通用技巧",headings:o},pageNextRoute:"/introduction/tips.zh",nextraLayout:i.ZP,themeConfig:r.Z};n.default=(0,l.j)(d)}},function(e){e.O(0,[67892,49774,92888,40179],function(){return e(e.s=98163)}),_N_E=e.O()}]);