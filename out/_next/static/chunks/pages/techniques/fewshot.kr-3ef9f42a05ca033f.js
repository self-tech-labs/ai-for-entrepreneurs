(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[72090],{45110:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/techniques/fewshot.kr",function(){return t(41824)}])},43677:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var a=t(11527),r=t(50959),l=t(85274),s=t(5341);function i(e){return(0,a.jsx)("svg",{viewBox:"0 0 24 24",width:"24",height:"24",...e,children:(0,a.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}let o=e=>{let{children:n,className:t,...r}=e;return(0,a.jsx)("button",{className:(0,s.Z)("nextra-button nx-transition-all active:nx-opacity-50","nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-1.5","dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50",t),...r,children:n})};function c(e){return(0,a.jsx)("svg",{viewBox:"0 0 20 20",width:"1em",height:"1em",fill:"currentColor",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}function d(e){return(0,a.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",...e,children:[(0,a.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,a.jsx)("path",{d:"M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}let x=e=>{let{getValue:n,...t}=e,[l,s]=(0,r.useState)(!1);(0,r.useEffect)(()=>{if(!l)return;let e=setTimeout(()=>{s(!1)},2e3);return()=>{clearTimeout(e)}},[l]);let i=(0,r.useCallback)(async()=>{s(!0),(null==navigator?void 0:navigator.clipboard)||console.error("Access to clipboard rejected!");try{await navigator.clipboard.writeText(n())}catch(e){console.error("Failed to copy!")}},[n]);return(0,a.jsx)(o,{onClick:i,title:"Copy code",tabIndex:0,...t,children:(0,a.jsx)(l?c:d,{className:"nextra-copy-icon nx-pointer-events-none nx-h-4 nx-w-4"})})},h=e=>{let{children:n,className:t,hasCopyCode:l=!0,filename:c,...d}=e,h=(0,r.useRef)(null),p=(0,r.useCallback)(()=>{let e=document.documentElement.dataset,n="nextraWordWrap"in e;n?delete e.nextraWordWrap:e.nextraWordWrap=""},[]);return(0,a.jsxs)("div",{className:"nextra-code-block nx-relative nx-mt-6 first:nx-mt-0",children:[c&&(0,a.jsx)("div",{className:"nx-absolute nx-top-0 nx-z-[1] nx-w-full nx-truncate nx-rounded-t-xl nx-bg-primary-700/5 nx-py-2 nx-px-4 nx-text-xs nx-text-gray-700 dark:nx-bg-primary-300/10 dark:nx-text-gray-200",children:c}),(0,a.jsx)("pre",{className:(0,s.Z)("nx-bg-primary-700/5 nx-mb-4 nx-overflow-x-auto nx-rounded-xl nx-subpixel-antialiased dark:nx-bg-primary-300/10 nx-text-[.9em]","contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40",c?"nx-pt-12 nx-pb-4":"nx-py-4",t),ref:h,...d,children:r.isValidElement(n)&&"code"===n.type?n.props.children:n}),(0,a.jsxs)("div",{className:(0,s.Z)("nx-opacity-0 nx-transition [div:hover>&]:nx-opacity-100 focus-within:nx-opacity-100","nx-flex nx-gap-1 nx-absolute nx-m-[11px] nx-right-0",c?"nx-top-8":"nx-top-0"),children:[(0,a.jsx)(o,{onClick:p,className:"md:nx-hidden",title:"Toggle word wrap elvis",children:(0,a.jsx)(i,{className:"nx-pointer-events-none nx-h-4 nx-w-4"})}),l&&(0,a.jsx)(x,{getValue(){var e,n;return(null===(e=null===(n=h.current)||void 0===n?void 0:n.querySelector("code"))||void 0===e?void 0:e.textContent)||""}})]})]})},p={logo:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 206 246",fill:"none",children:[(0,a.jsx)("circle",{cx:"40",cy:"40",r:"40",fill:"currentColor"}),(0,a.jsx)("circle",{cx:"40",cy:"206",r:"40",fill:"currentColor"}),(0,a.jsx)("circle",{cx:"166",cy:"120",r:"40",fill:"currentColor"})]}),(0,a.jsx)("span",{style:{marginLeft:".4em",fontWeight:800},children:"Prompt Engineering Guide"})]}),i18n:[{locale:"en",text:"English"},{locale:"zh",text:"中文"},{locale:"jp",text:"日本語"},{locale:"pt",text:"Portugu\xeas"},{locale:"it",text:"Italian"},{locale:"tr",text:"T\xfcrk\xe7e"},{locale:"es",text:"Espa\xf1ol"},{locale:"fr",text:"Fran\xe7ais"},{locale:"kr",text:"한국어"},{locale:"ca",text:"Catal\xe0"},{locale:"fi",text:"Finnish"},{locale:"ru",text:"Русский"}],head:function(){let{title:e}=(0,l.ZR)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("title",{children:[e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"," "]}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,a.jsx)("meta",{property:"og:title",content:"Prompt Engineering Guide"}),(0,a.jsx)("meta",{property:"og:description",content:"A Comprehensive Overview of Prompt Engineering"}),(0,a.jsx)("meta",{name:"og:title",content:e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"}),(0,a.jsx)("link",{rel:"icon",href:"/144-favicon.svg",type:"image/svg+xml"}),(0,a.jsx)("link",{rel:"icon",href:"/144-favicon-dark.svg",type:"image/svg+xml",media:"(prefers-color-scheme: dark)"})]})},project:{link:"https://github.com/dair-ai/Prompt-Engineering-Guide"},chat:{link:"https://discord.gg/FUyz9vPAwf"},docsRepositoryBase:"https://github.com/dair-ai/Prompt-Engineering-Guide/tree/main/",footer:{text:"Copyright \xa9 2023 DAIR.AI"},search:{placeholder:"Search..."},components:{pre:h}};var u=p},41824:function(e,n,t){"use strict";t.r(n),t.d(n,{__toc:function(){return o}});var a=t(11527),r=t(55411),l=t(85274),s=t(43677);t(20492),t(95178);var i=t(82132);let o=[{depth:3,value:"Limitations of Few-shot Prompting",id:"limitations-of-few-shot-prompting"}];function c(e){let n=Object.assign({h1:"h1",p:"p",a:"a",em:"em",pre:"pre",code:"code",span:"span",ul:"ul",li:"li",h3:"h3"},(0,i.a)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{children:"Few-Shot Prompting"}),"\n",(0,a.jsx)(n.p,{children:"대규모언어모델은 뛰어난 제로샷(zero-shot) 기능을 보여 주지만, 복잡한 작업에서는 여전히 개선이 필요합니다. 퓨샷(few-shot) 프롬프트는 프롬프트에서 데모를 제공하여 모델이 더 나은 성능을 발휘하도록 유도하는 문맥 내 학습을 가능하게 하는 기술로 사용할 수 있습니다. 이 데모는 모델이 응답을 생성하기를 원하는 후속 예제에 대한 조건부 역할을 합니다."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://arxiv.org/pdf/2302.13971.pdf",children:"Touvron et al. 2023"}),"에 따르면 모델이 충분한 크기로 커졌을 때 ",(0,a.jsx)(n.a,{href:"https://arxiv.org/abs/2001.08361",children:"(Kaplan et al., 2020)"}),"에 처음으로 퓨샷 속성이 나타났습니다."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://arxiv.org/abs/2005.14165",children:"Brown et al. 2020"}),"에 제시된 예제를 통해 퓨샷 프롬프트를 시연해 보겠습니다. 이 예제에서는 문장에서 새로운 단어를 올바르게 사용하는 것이 과제입니다."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Prompt:"})}),"\n",(0,a.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:'"whatpu"는 탄자니아에 서식하는 작은 털복숭이 동물입니다. whatpu를 사용하는 문장의 예'})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"라는 단어를 사용하는 문장의 예입니다:"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"우리는 아프리카를 여행하고 있었는데 아주 귀여운 whatpu를 보았습니다."})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:'"farduddle"을 한다는 것은 정말 빠르게 위아래로 점프한다는 뜻입니다. farduddle을 사용하는 문장의 예'})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"를 사용하는 문장의 예입니다:"})})]})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Output:"})}),"\n",(0,a.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"게임에서 이겼을 때 우리 모두는 farduddle를 시작했습니다."})})})}),"\n",(0,a.jsx)(n.p,{children:"게임에서 이겼을 때, 우리는 모델이 하나의 예시(예, 1-shot)만 제공함으로써 어떻게든 과제를 수행하는 방법을 학습했음을 관찰할 수 있습니다. 더 어려운 과제의 경우 예시(예, 3-shot, 5-shot, 10-shot, etc.)를 늘려가며 실험해 볼 수 있습니다."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://arxiv.org/abs/2202.12837",children:"Min et al. (2022)"}),"의 연구 결과에 따라, 다음은 퓨샷을 사용할 때 시연 및 예시에 도움이 되는 몇 가지 팁입니다."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:'"레이블 공간과 데모에서 지정한 입력 텍스트의 분포는 (개별 입력에 대해 레이블이 올바른지 여부와 관계없이) 모두 중요합니다."'}),"\n",(0,a.jsx)(n.li,{children:"사용하는 형식도 성능에 중요한 역할을 하며, 무작위 레이블만 사용하더라도 레이블이 전혀 없는 것보다 훨씬 낫습니다."}),"\n",(0,a.jsx)(n.li,{children:"추가 결과에 따르면 라벨의 실제 분포에서 (균일한 분포 대신) 무작위 라벨을 선택하는 것도 도움이 됩니다."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"몇 가지 예를 살펴보겠습니다. 먼저 무작위 레이블이 있는 예제(즉, 부정 및 긍정 레이블이 입력에 무작위로 할당됨)를 시도해 보겠습니다."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Prompt:"})}),"\n",(0,a.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"정말 멋지네요! // 부정"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"이건 나쁘다! // 긍정"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"와우 그 영화 정말 멋졌어요! // 긍정"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"정말 끔찍한 쇼였어! //"})})]})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Output:"})}),"\n",(0,a.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"부정"})})})}),"\n",(0,a.jsx)(n.p,{children:"레이블이 무작위로 지정되었음에도 불구하고 여전히 정답을 얻을 수 있습니다. 형식도 그대로 유지한 것도 도움이 됩니다. 실제로 추가 실험을 통해 우리가 실험하고 있는 최신 GPT 모델은 무작위 형식에도 더 강력해지고 있는 것으로 보입니다. 예시:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Prompt:"})}),"\n",(0,a.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"긍정적 이거 멋지다!"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"이것은 나쁘다! 부정적"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"와우, 그 영화 정말 멋졌어요!"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"긍정"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"정말 끔찍한 쇼였어! --"})})]})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Output:"})}),"\n",(0,a.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"부정"})})})}),"\n",(0,a.jsx)(n.p,{children:"위의 형식에는 일관성이 없지만 모델은 여전히 올바른 레이블을 예측했습니다. 다양한 프롬프트의 변형을 포함하여 더 다양하고 복잡한 작업에서도 이러한 결과가 유지되는지 확인하기 위해 더 철저한 분석을 수행해야 합니다."}),"\n",(0,a.jsx)(n.h3,{id:"limitations-of-few-shot-prompting",children:"Limitations of Few-shot Prompting"}),"\n",(0,a.jsx)(n.p,{children:"일반적인 퓨샷 프롬프트는 많은 작업에 효과적이지만, 특히 복잡한 추론 작업을 처리할 때는 여전히 완벽한 기술은 아닙니다. 그 이유를 설명해 보겠습니다. 다음 작업을 제공했던 이전 예제를 기억하시나요?"}),"\n",(0,a.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"이 집합{15, 32, 5, 13, 82, 7, 1}에서 홀수를 모두 더하면 짝수이다."})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"A:"})})]})}),"\n",(0,a.jsx)(n.p,{children:"이 작업을 다시 시도하면 모델이 다음과 같이 출력합니다."}),"\n",(0,a.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"네, 이 집합의 홀수를 모두 더하면 짝수인 107입니다."})})})}),"\n",(0,a.jsx)(n.p,{children:"이는 정답이 아니며, 이러한 시스템의 한계를 보여줄 뿐만 아니라 더 발전된 프롬프트 엔지니어링이 필요하다는 것을 보여줍니다."}),"\n",(0,a.jsx)(n.p,{children:"몇 가지 예를 추가하여 몇 번의 질문으로 프롬프트가 결과를 개선하는지 확인해 보겠습니다."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Prompt:"})}),"\n",(0,a.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"이 집합 {4, 8, 9, 15, 12, 2, 1}에서 홀수의 합은 짝수입니다."})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"A: 답은 거짓입니다."})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"이 집합 {17, 10, 19, 4, 8, 12, 24}에서 홀수의 합은 짝수입니다."})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"A: 정답은 참입니다."})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"이 집합 {16, 11, 14, 4, 8, 13, 24}에서 홀수의 합은 짝수입니다."})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"A: 답은 참입니다."})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"이 집합 {17, 9, 10, 12, 13, 4, 2}에서 홀수의 합은 짝수입니다."})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"A: 답은 거짓입니다."})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"이 집합 {15, 32, 5, 13, 82, 7, 1}에서 홀수의 합은 짝수입니다."})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"A:"})})]})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Output:"})}),"\n",(0,a.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"답은 참입니다."})})})}),"\n",(0,a.jsxs)(n.p,{children:["작동하지 않았습니다. 이러한 유형의 추론 문제에 대해 신뢰할 수 있는 답변을 얻으려면 몇 번의 프롬프트만으로는 충분하지 않은 것 같습니다. 위의 예는 작업에 대한 기본 정보를 제공합니다. 자세히 살펴보면 우리가 소개한 작업 유형에는 몇 가지 추론 단계가 더 포함되어 있습니다. 즉, 문제를 여러 단계로 나누고 이를 모델에 시연하면 도움이 될 수 있습니다. 최근에는 더 복잡한 산술, 상식, 상징적 추론 작업을 처리하기 위해 ",(0,a.jsx)(n.a,{href:"https://arxiv.org/abs/2201.11903",children:"생각의 사슬(chain-of-thought; CoT) 프롬프팅"}),"이 대중화되었습니다."]}),"\n",(0,a.jsx)(n.p,{children:"전반적으로 예제를 제공하는 것이 특정 문제를 해결하는 데 유용한 것으로 보입니다. 제로샷 프롬프트와 퓨샷 프롬프트가 만족할 만한 답변을 주지 못한 경우 모델이 학습한 내용이 해당 작업을 잘 수행하기에 충분하지 않다는 의미일 수 있습니다. 이때부터 모델을 미세 조정하거나 고급 프롬프트 기법을 실험해 보는 것이 좋습니다. 다음에는 인기 있는 프롬프트 기법 중 하나인 생각의 사슬 프롬프팅에 대해 이야기해 보겠습니다."})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.a)(),e.components);return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/techniques/fewshot.kr.mdx",route:"/techniques/fewshot",timestamp:1696506801e3,pageMap:[{kind:"Meta",locale:"kr",data:{index:"Prompt Engineering",introduction:"Introduction",techniques:"Techniques",applications:"Applications",models:"Models",risks:"Risks & Misuses",papers:"Papers",tools:"Tools",notebooks:"Notebooks",datasets:"Datasets",readings:"Additional Readings",course:{title:"Prompt Engineering Course",type:"page"},services:{title:"Services",type:"page"},about:{title:"About",type:"page"}}},{kind:"MdxPage",name:"about",route:"/about",locale:"kr"},{kind:"Folder",name:"applications",route:"/applications",children:[{kind:"Meta",locale:"kr",data:{pal:"PAL（프로그램지원언어모델）",generating:"데이터 생성",coding:"코드 생성",workplace_casestudy:"학위가 필요한 직업을 분류한 사례 연구",pf:"프롬프트 함수"}},{kind:"MdxPage",name:"coding",route:"/applications/coding",locale:"kr"},{kind:"MdxPage",name:"generating",route:"/applications/generating",locale:"kr"},{kind:"MdxPage",name:"pal",route:"/applications/pal",locale:"kr"},{kind:"MdxPage",name:"pf",route:"/applications/pf",locale:"kr"},{kind:"MdxPage",name:"workplace_casestudy",route:"/applications/workplace_casestudy",locale:"kr"},{kind:"MdxPage",name:"generating_textbooks",route:"/applications/generating_textbooks",locale:"en"},{kind:"MdxPage",name:"synthetic_rag",route:"/applications/synthetic_rag",locale:"en"}]},{kind:"MdxPage",name:"applications",route:"/applications",locale:"kr"},{kind:"MdxPage",name:"course",route:"/course",locale:"kr"},{kind:"MdxPage",name:"datasets",route:"/datasets",locale:"kr"},{kind:"MdxPage",name:"index",route:"/",locale:"kr"},{kind:"Folder",name:"introduction",route:"/introduction",children:[{kind:"Meta",locale:"kr",data:{settings:"LLM 설정",basics:"프롬프트의 기초",elements:"프롬프트의 구성 요소",tips:"프롬프트 설계에 관한 일반적인 팁",examples:"프롬프트 예시"}},{kind:"MdxPage",name:"basics",route:"/introduction/basics",locale:"kr"},{kind:"MdxPage",name:"elements",route:"/introduction/elements",locale:"kr"},{kind:"MdxPage",name:"examples",route:"/introduction/examples",locale:"kr"},{kind:"MdxPage",name:"settings",route:"/introduction/settings",locale:"kr"},{kind:"MdxPage",name:"tips",route:"/introduction/tips",locale:"kr"}]},{kind:"MdxPage",name:"introduction",route:"/introduction",locale:"kr"},{kind:"Folder",name:"models",route:"/models",children:[{kind:"Meta",locale:"kr",data:{flan:"Flan",chatgpt:"ChatGPT",llama:"LLaMA","gpt-4":"GPT-4","mistral-7b":"Mistral 7B",collection:"Model Collection"}},{kind:"MdxPage",name:"chatgpt",route:"/models/chatgpt",locale:"kr"},{kind:"MdxPage",name:"collection",route:"/models/collection",locale:"kr"},{kind:"MdxPage",name:"flan",route:"/models/flan",locale:"kr"},{kind:"MdxPage",name:"gpt-4",route:"/models/gpt-4",locale:"kr"},{kind:"MdxPage",name:"llama",route:"/models/llama",locale:"kr"},{kind:"MdxPage",name:"mistral-7b",route:"/models/mistral-7b",locale:"kr"}]},{kind:"MdxPage",name:"models",route:"/models",locale:"kr"},{kind:"MdxPage",name:"notebooks",route:"/notebooks",locale:"kr"},{kind:"MdxPage",name:"papers",route:"/papers",locale:"kr"},{kind:"MdxPage",name:"readings",route:"/readings",locale:"kr"},{kind:"Folder",name:"risks",route:"/risks",children:[{kind:"Meta",locale:"kr",data:{adversarial:"적대적 프롬프팅",factuality:"사실성",biases:"편향"}},{kind:"MdxPage",name:"adversarial",route:"/risks/adversarial",locale:"kr"},{kind:"MdxPage",name:"biases",route:"/risks/biases",locale:"kr"},{kind:"MdxPage",name:"factuality",route:"/risks/factuality",locale:"kr"}]},{kind:"MdxPage",name:"risks",route:"/risks",locale:"kr"},{kind:"MdxPage",name:"services",route:"/services",locale:"kr"},{kind:"Folder",name:"techniques",route:"/techniques",children:[{kind:"Meta",locale:"kr",data:{zeroshot:"Zero-shot Prompting",fewshot:"Few-shot Prompting",cot:"Chain-of-Thought Prompting",consistency:"Self-Consistency",knowledge:"Generate Knowledge Prompting",tot:"Tree of Thoughts",rag:"Retrieval Augmented Generation",art:"Automatic Reasoning and Tool-use",ape:"Automatic Prompt Engineer",activeprompt:"Active-Prompt",dsp:"Directional Stimulus Prompting",react:"ReAct",multimodalcot:"Multimodal CoT",graph:"Graph Prompting"}},{kind:"MdxPage",name:"activeprompt",route:"/techniques/activeprompt",locale:"kr"},{kind:"MdxPage",name:"ape",route:"/techniques/ape",locale:"kr"},{kind:"MdxPage",name:"art",route:"/techniques/art",locale:"kr"},{kind:"MdxPage",name:"consistency",route:"/techniques/consistency",locale:"kr"},{kind:"MdxPage",name:"cot",route:"/techniques/cot",locale:"kr"},{kind:"MdxPage",name:"dsp",route:"/techniques/dsp",locale:"kr"},{kind:"MdxPage",name:"fewshot",route:"/techniques/fewshot",locale:"kr"},{kind:"MdxPage",name:"graph",route:"/techniques/graph",locale:"kr"},{kind:"MdxPage",name:"knowledge",route:"/techniques/knowledge",locale:"kr"},{kind:"MdxPage",name:"multimodalcot",route:"/techniques/multimodalcot",locale:"kr"},{kind:"MdxPage",name:"rag",route:"/techniques/rag",locale:"kr"},{kind:"MdxPage",name:"react",route:"/techniques/react",locale:"kr"},{kind:"MdxPage",name:"tot",route:"/techniques/tot",locale:"kr"},{kind:"MdxPage",name:"zeroshot",route:"/techniques/zeroshot",locale:"kr"}]},{kind:"MdxPage",name:"techniques",route:"/techniques",locale:"kr"},{kind:"MdxPage",name:"tools",route:"/tools",locale:"kr"}],flexsearch:{codeblocks:!0},title:"Few-Shot Prompting",headings:o},pageNextRoute:"/techniques/fewshot.kr",nextraLayout:l.ZP,themeConfig:s.Z};n.default=(0,r.j)(d)}},function(e){e.O(0,[67892,49774,92888,40179],function(){return e(e.s=45110)}),_N_E=e.O()}]);