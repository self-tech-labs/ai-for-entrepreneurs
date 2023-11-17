(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81733],{8918:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/applications/pf.zh",function(){return a(14684)}])},43677:function(e,n,a){"use strict";a.d(n,{Z:function(){return u}});var t=a(11527),l=a(50959),i=a(85274),r=a(5341);function s(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",width:"24",height:"24",...e,children:(0,t.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}let o=e=>{let{children:n,className:a,...l}=e;return(0,t.jsx)("button",{className:(0,r.Z)("nextra-button nx-transition-all active:nx-opacity-50","nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-1.5","dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50",a),...l,children:n})};function c(e){return(0,t.jsx)("svg",{viewBox:"0 0 20 20",width:"1em",height:"1em",fill:"currentColor",...e,children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}function d(e){return(0,t.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",...e,children:[(0,t.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}let h=e=>{let{getValue:n,...a}=e,[i,r]=(0,l.useState)(!1);(0,l.useEffect)(()=>{if(!i)return;let e=setTimeout(()=>{r(!1)},2e3);return()=>{clearTimeout(e)}},[i]);let s=(0,l.useCallback)(async()=>{r(!0),(null==navigator?void 0:navigator.clipboard)||console.error("Access to clipboard rejected!");try{await navigator.clipboard.writeText(n())}catch(e){console.error("Failed to copy!")}},[n]);return(0,t.jsx)(o,{onClick:s,title:"Copy code",tabIndex:0,...a,children:(0,t.jsx)(i?c:d,{className:"nextra-copy-icon nx-pointer-events-none nx-h-4 nx-w-4"})})},x=e=>{let{children:n,className:a,hasCopyCode:i=!0,filename:c,...d}=e,x=(0,l.useRef)(null),p=(0,l.useCallback)(()=>{let e=document.documentElement.dataset,n="nextraWordWrap"in e;n?delete e.nextraWordWrap:e.nextraWordWrap=""},[]);return(0,t.jsxs)("div",{className:"nextra-code-block nx-relative nx-mt-6 first:nx-mt-0",children:[c&&(0,t.jsx)("div",{className:"nx-absolute nx-top-0 nx-z-[1] nx-w-full nx-truncate nx-rounded-t-xl nx-bg-primary-700/5 nx-py-2 nx-px-4 nx-text-xs nx-text-gray-700 dark:nx-bg-primary-300/10 dark:nx-text-gray-200",children:c}),(0,t.jsx)("pre",{className:(0,r.Z)("nx-bg-primary-700/5 nx-mb-4 nx-overflow-x-auto nx-rounded-xl nx-subpixel-antialiased dark:nx-bg-primary-300/10 nx-text-[.9em]","contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40",c?"nx-pt-12 nx-pb-4":"nx-py-4",a),ref:x,...d,children:l.isValidElement(n)&&"code"===n.type?n.props.children:n}),(0,t.jsxs)("div",{className:(0,r.Z)("nx-opacity-0 nx-transition [div:hover>&]:nx-opacity-100 focus-within:nx-opacity-100","nx-flex nx-gap-1 nx-absolute nx-m-[11px] nx-right-0",c?"nx-top-8":"nx-top-0"),children:[(0,t.jsx)(o,{onClick:p,className:"md:nx-hidden",title:"Toggle word wrap elvis",children:(0,t.jsx)(s,{className:"nx-pointer-events-none nx-h-4 nx-w-4"})}),i&&(0,t.jsx)(h,{getValue(){var e,n;return(null===(e=null===(n=x.current)||void 0===n?void 0:n.querySelector("code"))||void 0===e?void 0:e.textContent)||""}})]})]})},p={logo:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 206 246",fill:"none",children:[(0,t.jsx)("circle",{cx:"40",cy:"40",r:"40",fill:"currentColor"}),(0,t.jsx)("circle",{cx:"40",cy:"206",r:"40",fill:"currentColor"}),(0,t.jsx)("circle",{cx:"166",cy:"120",r:"40",fill:"currentColor"})]}),(0,t.jsx)("span",{style:{marginLeft:".4em",fontWeight:800},children:"Prompt Engineering Guide"})]}),i18n:[{locale:"en",text:"English"},{locale:"zh",text:"中文"},{locale:"jp",text:"日本語"},{locale:"pt",text:"Portugu\xeas"},{locale:"it",text:"Italian"},{locale:"tr",text:"T\xfcrk\xe7e"},{locale:"es",text:"Espa\xf1ol"},{locale:"fr",text:"Fran\xe7ais"},{locale:"kr",text:"한국어"},{locale:"ca",text:"Catal\xe0"},{locale:"fi",text:"Finnish"},{locale:"ru",text:"Русский"}],head:function(){let{title:e}=(0,i.ZR)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("title",{children:[e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"," "]}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,t.jsx)("meta",{property:"og:title",content:"Prompt Engineering Guide"}),(0,t.jsx)("meta",{property:"og:description",content:"A Comprehensive Overview of Prompt Engineering"}),(0,t.jsx)("meta",{name:"og:title",content:e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"}),(0,t.jsx)("link",{rel:"icon",href:"/144-favicon.svg",type:"image/svg+xml"}),(0,t.jsx)("link",{rel:"icon",href:"/144-favicon-dark.svg",type:"image/svg+xml",media:"(prefers-color-scheme: dark)"})]})},project:{link:"https://github.com/dair-ai/Prompt-Engineering-Guide"},chat:{link:"https://discord.gg/FUyz9vPAwf"},docsRepositoryBase:"https://github.com/dair-ai/Prompt-Engineering-Guide/tree/main/",footer:{text:"Copyright \xa9 2023 DAIR.AI"},search:{placeholder:"Search..."},components:{pre:x}};var u=p},14684:function(e,n,a){"use strict";a.r(n),a.d(n,{__toc:function(){return o}});var t=a(11527),l=a(55411),i=a(85274),r=a(43677);a(20492),a(95178);var s=a(82132);let o=[{depth:2,value:"介绍",id:"介绍"},{depth:2,value:"实例",id:"实例"},{depth:3,value:"英语学习助手",id:"英语学习助手"},{depth:4,value:"函数描述",id:"函数描述"},{depth:3,value:"多参数函数",id:"多参数函数"},{depth:3,value:"思考",id:"思考"}];function c(e){let n=Object.assign({h1:"h1",h2:"h2",p:"p",em:"em",blockquote:"blockquote",strong:"strong",pre:"pre",code:"code",span:"span",h3:"h3",h4:"h4",ul:"ul",li:"li",a:"a"},(0,s.a)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{children:"提示函数"}),"\n",(0,t.jsx)(n.h2,{id:"介绍",children:"介绍"}),"\n",(0,t.jsx)(n.p,{children:"当我们将 GPT 的对话界面与编程语言的 shell 进行类比时，封装的提示可以被视为形成一个函数。这个函数有一个独特的名称，当我们用输入文本调用这个名称时，它根据内部设定的规则产生结果。简而言之，我们构建了一个可重用的提示，它有一个易于与 GPT 交互的名称。这就像有一个方便的工具，让 GPT 代表我们执行特定的任务 - 我们只需提供输入，就可以得到所需的输出。"}),"\n",(0,t.jsx)(n.p,{children:"通过将提示封装成函数，您可以创建一系列函数来建立工作流程。每个函数代表一个特定的步骤或任务，当按特定顺序组合时，它们可以自动化复杂的流程或更高效地解决问题。这种方法使得与 GPT 的交互更加结构化和高效，最终增强了其功能，使其成为完成各种任务的强大工具。"}),"\n",(0,t.jsx)(n.p,{children:"因此，在我们使用函数之前，我们需要让 GPT 知道它的存在。下面是定义该函数的提示内容。"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"提示:"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["我们将使用",(0,t.jsx)(n.strong,{children:"元提示"}),"来称呼这个提示。\n这个提示已在 GPT3.5 上进行了测试，并在 GPT4 上表现得更好。"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,t.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"你好，ChatGPT！希望你一切都好。我正在寻求你的帮助，想要解决一个特定的功能。我知道你有处理信息和执行各种任务的能力，这是基于提供的指示。为了帮助你更容易地理解我的请求，我将使用一个模板来描述函数、输入和对输入的处理方法。请在下面找到详细信息："})}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"function_name：[函数名称]"})}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"input：[输入]"})}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"rule：[关于如何处理输入的说明]"})}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"我恳请你根据我提供的细节为这个函数提供输出。非常感谢你的帮助。谢谢！"})}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:'我将使用方括号内的相关信息替换函数所需执行的内容。这个详细的介绍应该能够帮助你更高效地理解我的请求并提供所需的输出。格式是function_name(input)。如果你理解了，请用一个词回答"好的"'})})]})}),"\n",(0,t.jsx)(n.h2,{id:"实例",children:"实例"}),"\n",(0,t.jsx)(n.h3,{id:"英语学习助手",children:"英语学习助手"}),"\n",(0,t.jsx)(n.p,{children:"例如，假设我们想要使用 GPT 来辅助我们的英语学习。我们可以通过创建一系列的函数来简化这个过程。"}),"\n",(0,t.jsx)(n.p,{children:"这个例子已在 GPT3.5 上进行了测试，并在 GPT4 上表现得更好。"}),"\n",(0,t.jsx)(n.h4,{id:"函数描述",children:"函数描述"}),"\n",(0,t.jsxs)(n.p,{children:["我们需要将在上面部分定义的 GPT",(0,t.jsx)(n.strong,{children:"元提示"}),"粘贴在这一节中。"]}),"\n",(0,t.jsxs)(n.p,{children:["然后我们将创建一个 ",(0,t.jsx)(n.code,{children:"trans_word"})," 函数。"]}),"\n",(0,t.jsx)(n.p,{children:"这个函数会提示 GPT 将中文翻译成英文。"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"提示:"})}),"\n",(0,t.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,t.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"function_name: [trans_word]"})}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:'input: ["文本"]'})}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:'rule: [我希望你能扮演英文翻译员、拼写纠正员和改进员的角色。我将提供包含任何语言中"文本"的输入形式，你将检测语言，翻译并用英文纠正我的文本，并给出答案。]'})})]})}),"\n",(0,t.jsx)(n.p,{children:"编写一个扩展文本的函数。"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"提示:"})}),"\n",(0,t.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,t.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"function_name: [expand_word]"})}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:'input: ["文本"]'})}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:'rule: [请充当一个聊天机器人、拼写纠正员和语言增强员。我将提供包含任何语言中的"文本"的输入形式，并输出原始语言。我希望你保持意思不变，但使其更具文学性。]'})})]})}),"\n",(0,t.jsx)(n.p,{children:"编写一个纠正文本的函数。"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"提示:"})}),"\n",(0,t.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,t.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"function_name: [fix_english]"})}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:'input: ["文本"]'})}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:'rule: [请充当英文专家、拼写纠正员和语言增强员的角色。我将提供包含"文本"的输入形式，我希望你能改进文本的词汇和句子，使其更自然、更优雅。保持意思不变。]'})})]})}),"\n",(0,t.jsx)(n.p,{children:"最后，你可以独立运行这个函数，或者将它们串联在一起。"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"提示:"})}),"\n",(0,t.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,t.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"trans_word('婆罗摩火山处于享有“千岛之国”美称的印度尼西亚. 多岛之国印尼有4500座之多的火山, 世界著名的十大活火山有三座在这里.')"})}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"fix_english('Finally, you can run the function independently or chain them together.')"})}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"fix_english(expand_word(trans_word('婆罗摩火山处于享有“千岛之国”美称的印度尼西亚. 多岛之国印尼有4500座之多的火山, 世界著名的十大活火山有三座在这里.')))"})})]})}),"\n",(0,t.jsx)(n.p,{children:"通过以这种格式表示函数，你可以清晰地看到每个函数的名称、输入以及处理输入的规则。这为理解工作流程中每个步骤的功能和目的提供了一种有组织的方式。"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"提示:"}),"\n如果你不想让 ChatGPT 输出过多的信息，你可以在定义函数规则后简单地添加一句话。"]}),"\n",(0,t.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,t.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"除非你不理解该函数，否则请不要说其他事情"})})})}),"\n",(0,t.jsx)(n.h3,{id:"多参数函数",children:"多参数函数"}),"\n",(0,t.jsx)(n.p,{children:"让我们创建一个多参数函数，通过接受五个输入参数生成一个密码，并输出生成的密码。"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"提示:"})}),"\n",(0,t.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,t.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"function_name: [pg]"})}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:'input: ["length", "capitalized", "lowercase", "numbers", "special"]'})}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:'rule: [作为一个密码生成器，我将为需要一个安全密码的个人提供帮助。我会提供包括"length"（长度）、"capitalized"（大写字母）、"lowercase"（小写字母）、"numbers"（数字）和"special"（特殊字符）在内的输入形式。你的任务是使用这些输入形式生成一个复杂的密码，并将其提供给我。在你的回答中，请不要包含任何解释或额外的信息，只需提供生成的密码即可。例如，如果输入形式是length = 8、capitalized = 1、lowercase = 5、numbers = 2、special = 1，你的回答应该是一个类似于"D5%t9Bgf"的密码。]'})})]})}),"\n",(0,t.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,t.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"pg(length = 10, capitalized = 1, lowercase = 5, numbers = 2, special = 1)"})}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"pg(10,1,5,2,1)"})})]})}),"\n",(0,t.jsx)(n.h3,{id:"思考",children:"思考"}),"\n",(0,t.jsx)(n.p,{children:"现在，已经有许多项目正在开发基于 GPT 的编程工具，例如："}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/features/copilot",children:"GitHub Copilot"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.microsoft.com/en-us/ai",children:"Microsoft AI"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://openai.com/blog/chatgpt-plugins",children:"chatgpt-plugins"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/hwchase17/langchain",children:"LangChain"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/PrefectHQ/marvin",children:"marvin"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"但是那些项目要么是为产品客户设计的，要么是为那些能够使用 Python 或其他编程语言进行编码的用户设计的。\n对于普通用户来说，可以使用这个简单的模板进行日常工作，并进行几次迭代。使用一个笔记应用程序来记录函数，甚至可以将其更新为一个库。\n或者，一些开源的 ChatGPT 工具，比如 ChatGPT-Next-Web、chatbox 和 ChatGPT-Desktop，也可以使用。目前，ChatGPT-Next-Web 允许在初始化新聊天之前添加一些片段。\n我们可以利用这个功能来添加我们的函数，然后可以使用它。"})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.a)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/applications/pf.zh.mdx",route:"/applications/pf",timestamp:1687664346e3,pageMap:[{kind:"Meta",locale:"zh",data:{index:"提示工程指南",introduction:"提示工程简介",techniques:"提示技术",applications:"提示应用",models:"模型",risks:"风险和误用",papers:"论文",tools:"工具和库",notebooks:"Prompt Engineering 笔记本",datasets:"数据集",readings:"阅读推荐",course:{title:"提示工程课程",type:"page"},services:{title:"服务",type:"page"},about:{title:"关于",type:"page"}}},{kind:"MdxPage",name:"about",route:"/about",locale:"zh"},{kind:"Folder",name:"applications",route:"/applications",children:[{kind:"Meta",locale:"zh",data:{pal:"程序辅助语言模型",generating:"生成数据",coding:"Generating Code",workplace_casestudy:"毕业生工作分类案例研究",pf:"提示函数"}},{kind:"MdxPage",name:"coding",route:"/applications/coding",locale:"zh"},{kind:"MdxPage",name:"generating",route:"/applications/generating",locale:"zh"},{kind:"MdxPage",name:"pal",route:"/applications/pal",locale:"zh"},{kind:"MdxPage",name:"pf",route:"/applications/pf",locale:"zh"},{kind:"MdxPage",name:"workplace_casestudy",route:"/applications/workplace_casestudy",locale:"zh"},{kind:"MdxPage",name:"generating_textbooks",route:"/applications/generating_textbooks",locale:"en"},{kind:"MdxPage",name:"synthetic_rag",route:"/applications/synthetic_rag",locale:"en"}]},{kind:"MdxPage",name:"applications",route:"/applications",locale:"zh"},{kind:"MdxPage",name:"course",route:"/course",locale:"zh"},{kind:"MdxPage",name:"datasets",route:"/datasets",locale:"zh"},{kind:"MdxPage",name:"index",route:"/",locale:"zh"},{kind:"Folder",name:"introduction",route:"/introduction",children:[{kind:"Meta",locale:"zh",data:{settings:"大语言模型设置",basics:"基本概念",elements:"提示词要素",tips:"设计提示的通用技巧",examples:"提示词示例"}},{kind:"MdxPage",name:"basics",route:"/introduction/basics",locale:"zh"},{kind:"MdxPage",name:"elements",route:"/introduction/elements",locale:"zh"},{kind:"MdxPage",name:"examples",route:"/introduction/examples",locale:"zh"},{kind:"MdxPage",name:"settings",route:"/introduction/settings",locale:"zh"},{kind:"MdxPage",name:"tips",route:"/introduction/tips",locale:"zh"}]},{kind:"MdxPage",name:"introduction",route:"/introduction",locale:"zh"},{kind:"Folder",name:"models",route:"/models",children:[{kind:"Meta",locale:"zh",data:{flan:"Flan",chatgpt:"ChatGPT",llama:"LLaMA","gpt-4":"GPT-4","mistral-7b":"Mistral 7B",collection:"Model Collection"}},{kind:"MdxPage",name:"chatgpt",route:"/models/chatgpt",locale:"zh"},{kind:"MdxPage",name:"collection",route:"/models/collection",locale:"zh"},{kind:"MdxPage",name:"flan",route:"/models/flan",locale:"zh"},{kind:"MdxPage",name:"gpt-4",route:"/models/gpt-4",locale:"zh"},{kind:"MdxPage",name:"llama",route:"/models/llama",locale:"zh"},{kind:"MdxPage",name:"mistral-7b",route:"/models/mistral-7b",locale:"zh"}]},{kind:"MdxPage",name:"models",route:"/models",locale:"zh"},{kind:"MdxPage",name:"notebooks",route:"/notebooks",locale:"zh"},{kind:"MdxPage",name:"papers",route:"/papers",locale:"zh"},{kind:"MdxPage",name:"readings",route:"/readings",locale:"zh"},{kind:"Folder",name:"risks",route:"/risks",children:[{kind:"Meta",locale:"zh",data:{adversarial:"对抗性提示",factuality:"真实性",biases:"偏见"}},{kind:"MdxPage",name:"adversarial",route:"/risks/adversarial",locale:"zh"},{kind:"MdxPage",name:"biases",route:"/risks/biases",locale:"zh"},{kind:"MdxPage",name:"factuality",route:"/risks/factuality",locale:"zh"}]},{kind:"MdxPage",name:"risks",route:"/risks",locale:"zh"},{kind:"MdxPage",name:"services",route:"/services",locale:"zh"},{kind:"Folder",name:"techniques",route:"/techniques",children:[{kind:"Meta",locale:"zh",data:{zeroshot:"零样本提示",fewshot:"少样本提示",cot:"链式思考（CoT）提示",consistency:"自我一致性",knowledge:"生成知识提示",tot:"思维树（ToT）",rag:"检索增强生成 (RAG)",art:"自动推理并使用工具（ART）",ape:"自动提示工程师",activeprompt:"Active-Prompt",dsp:"方向性刺激提示",react:"ReAct框架",multimodalcot:"多模态思维链提示方法",graph:"基于图的提示"}},{kind:"MdxPage",name:"activeprompt",route:"/techniques/activeprompt",locale:"zh"},{kind:"MdxPage",name:"ape",route:"/techniques/ape",locale:"zh"},{kind:"MdxPage",name:"art",route:"/techniques/art",locale:"zh"},{kind:"MdxPage",name:"consistency",route:"/techniques/consistency",locale:"zh"},{kind:"MdxPage",name:"cot",route:"/techniques/cot",locale:"zh"},{kind:"MdxPage",name:"dsp",route:"/techniques/dsp",locale:"zh"},{kind:"MdxPage",name:"fewshot",route:"/techniques/fewshot",locale:"zh"},{kind:"MdxPage",name:"graph",route:"/techniques/graph",locale:"zh"},{kind:"MdxPage",name:"knowledge",route:"/techniques/knowledge",locale:"zh"},{kind:"MdxPage",name:"multimodalcot",route:"/techniques/multimodalcot",locale:"zh"},{kind:"MdxPage",name:"rag",route:"/techniques/rag",locale:"zh"},{kind:"MdxPage",name:"react",route:"/techniques/react",locale:"zh"},{kind:"MdxPage",name:"tot",route:"/techniques/tot",locale:"zh"},{kind:"MdxPage",name:"zeroshot",route:"/techniques/zeroshot",locale:"zh"}]},{kind:"MdxPage",name:"techniques",route:"/techniques",locale:"zh"},{kind:"MdxPage",name:"tools",route:"/tools",locale:"zh"}],flexsearch:{codeblocks:!0},title:"提示函数",headings:o},pageNextRoute:"/applications/pf.zh",nextraLayout:i.ZP,themeConfig:r.Z};n.default=(0,l.j)(d)}},function(e){e.O(0,[67892,49774,92888,40179],function(){return e(e.s=8918)}),_N_E=e.O()}]);