(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[703],{70619:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/techniques/cot.pt",function(){return t(4841)}])},18148:function(e,a){"use strict";a.Z={src:"/_next/static/media/cot.1933d9fe.png",height:473,width:940,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAZElEQVR42gUASQqDMDD//05PPZVSeuoH6gYuREeis5DRJOKGAdTaOiZKMTZAFpwwhRCMsMwTeu/DupYt/TIsOp55MY7diJBi2tL2t1k+VIAgKkajepVj38/j+lbvZ/H4NK+B+xtcfFgA5JyddQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4}},82169:function(e,a){"use strict";a.Z={src:"/_next/static/media/zero-cot.79793bee.png",height:508,width:944,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAATUlEQVR42h2JQRKAIAzE+P9LdYTWbXcL3GRMbkmjmEdxrZUMd0O8VWpmg8z6Gebm8DcQ2aTKTEl7byB792E4oQEgOec847mf++oORdYHytta7nzGHpcAAAAASUVORK5CYII=",blurWidth:8,blurHeight:4}},41667:function(e,a,t){"use strict";t.d(a,{w:function(){return i}});var n=t(11527),o=t(5341),s=t(76484),r=t.n(s);function i(e){let{src:a,alt:t,full:s}=e;return(0,n.jsx)("div",{className:(0,o.Z)("mt-6 -mb-4 flex justify-center overflow-hidden rounded-xl border dark:border-zinc-800",s?"bg-white":"bg-zinc-100"),children:(0,n.jsx)(r(),{src:a,alt:t,className:(0,o.Z)("w-auto select-none bg-white",s?"":"ring-1 ring-gray-200")})})}},43677:function(e,a,t){"use strict";t.d(a,{Z:function(){return h}});var n=t(11527),o=t(50959),s=t(85274),r=t(5341);function i(e){return(0,n.jsx)("svg",{viewBox:"0 0 24 24",width:"24",height:"24",...e,children:(0,n.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}let l=e=>{let{children:a,className:t,...o}=e;return(0,n.jsx)("button",{className:(0,r.Z)("nextra-button nx-transition-all active:nx-opacity-50","nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-1.5","dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50",t),...o,children:a})};function c(e){return(0,n.jsx)("svg",{viewBox:"0 0 20 20",width:"1em",height:"1em",fill:"currentColor",...e,children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}function d(e){return(0,n.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",...e,children:[(0,n.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}let x=e=>{let{getValue:a,...t}=e,[s,r]=(0,o.useState)(!1);(0,o.useEffect)(()=>{if(!s)return;let e=setTimeout(()=>{r(!1)},2e3);return()=>{clearTimeout(e)}},[s]);let i=(0,o.useCallback)(async()=>{r(!0),(null==navigator?void 0:navigator.clipboard)||console.error("Access to clipboard rejected!");try{await navigator.clipboard.writeText(a())}catch(e){console.error("Failed to copy!")}},[a]);return(0,n.jsx)(l,{onClick:i,title:"Copy code",tabIndex:0,...t,children:(0,n.jsx)(s?c:d,{className:"nextra-copy-icon nx-pointer-events-none nx-h-4 nx-w-4"})})},p=e=>{let{children:a,className:t,hasCopyCode:s=!0,filename:c,...d}=e,p=(0,o.useRef)(null),m=(0,o.useCallback)(()=>{let e=document.documentElement.dataset,a="nextraWordWrap"in e;a?delete e.nextraWordWrap:e.nextraWordWrap=""},[]);return(0,n.jsxs)("div",{className:"nextra-code-block nx-relative nx-mt-6 first:nx-mt-0",children:[c&&(0,n.jsx)("div",{className:"nx-absolute nx-top-0 nx-z-[1] nx-w-full nx-truncate nx-rounded-t-xl nx-bg-primary-700/5 nx-py-2 nx-px-4 nx-text-xs nx-text-gray-700 dark:nx-bg-primary-300/10 dark:nx-text-gray-200",children:c}),(0,n.jsx)("pre",{className:(0,r.Z)("nx-bg-primary-700/5 nx-mb-4 nx-overflow-x-auto nx-rounded-xl nx-subpixel-antialiased dark:nx-bg-primary-300/10 nx-text-[.9em]","contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40",c?"nx-pt-12 nx-pb-4":"nx-py-4",t),ref:p,...d,children:o.isValidElement(a)&&"code"===a.type?a.props.children:a}),(0,n.jsxs)("div",{className:(0,r.Z)("nx-opacity-0 nx-transition [div:hover>&]:nx-opacity-100 focus-within:nx-opacity-100","nx-flex nx-gap-1 nx-absolute nx-m-[11px] nx-right-0",c?"nx-top-8":"nx-top-0"),children:[(0,n.jsx)(l,{onClick:m,className:"md:nx-hidden",title:"Toggle word wrap elvis",children:(0,n.jsx)(i,{className:"nx-pointer-events-none nx-h-4 nx-w-4"})}),s&&(0,n.jsx)(x,{getValue(){var e,a;return(null===(e=null===(a=p.current)||void 0===a?void 0:a.querySelector("code"))||void 0===e?void 0:e.textContent)||""}})]})]})},m={logo:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 206 246",fill:"none",children:[(0,n.jsx)("circle",{cx:"40",cy:"40",r:"40",fill:"currentColor"}),(0,n.jsx)("circle",{cx:"40",cy:"206",r:"40",fill:"currentColor"}),(0,n.jsx)("circle",{cx:"166",cy:"120",r:"40",fill:"currentColor"})]}),(0,n.jsx)("span",{style:{marginLeft:".4em",fontWeight:800},children:"Prompt Engineering Guide"})]}),i18n:[{locale:"en",text:"English"},{locale:"zh",text:"中文"},{locale:"jp",text:"日本語"},{locale:"pt",text:"Portugu\xeas"},{locale:"it",text:"Italian"},{locale:"tr",text:"T\xfcrk\xe7e"},{locale:"es",text:"Espa\xf1ol"},{locale:"fr",text:"Fran\xe7ais"},{locale:"kr",text:"한국어"},{locale:"ca",text:"Catal\xe0"},{locale:"fi",text:"Finnish"},{locale:"ru",text:"Русский"}],head:function(){let{title:e}=(0,s.ZR)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("title",{children:[e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"," "]}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,n.jsx)("meta",{property:"og:title",content:"Prompt Engineering Guide"}),(0,n.jsx)("meta",{property:"og:description",content:"A Comprehensive Overview of Prompt Engineering"}),(0,n.jsx)("meta",{name:"og:title",content:e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"}),(0,n.jsx)("link",{rel:"icon",href:"/144-favicon.svg",type:"image/svg+xml"}),(0,n.jsx)("link",{rel:"icon",href:"/144-favicon-dark.svg",type:"image/svg+xml",media:"(prefers-color-scheme: dark)"})]})},project:{link:"https://github.com/dair-ai/Prompt-Engineering-Guide"},chat:{link:"https://discord.gg/FUyz9vPAwf"},docsRepositoryBase:"https://github.com/dair-ai/Prompt-Engineering-Guide/tree/main/",footer:{text:"Copyright \xa9 2023 DAIR.AI"},search:{placeholder:"Search..."},components:{pre:p}};var h=m},4841:function(e,a,t){"use strict";t.r(a),t.d(a,{__toc:function(){return x}});var n=t(11527),o=t(55411),s=t(85274),r=t(43677);t(20492),t(95178);var i=t(82132),l=t(41667),c=t(18148),d=t(82169);let x=[{depth:2,value:"Cadeia-de-Pensamento (CoT) Prompting",id:"cadeia-de-pensamento-cot-prompting"},{depth:2,value:"Prompt COT Zero-Shot",id:"prompt-cot-zero-shot"}];function p(e){let a=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",em:"em",pre:"pre",code:"code",span:"span"},(0,i.a)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{children:"Cadeia-de-Pensamento Prompt"}),"\n","\n",(0,n.jsx)(a.h2,{id:"cadeia-de-pensamento-cot-prompting",children:"Cadeia-de-Pensamento (CoT) Prompting"}),"\n",(0,n.jsx)(l.w,{src:c.Z,alt:"COT"}),"\n",(0,n.jsxs)(a.p,{children:["Fonte da imagem: ",(0,n.jsx)(a.a,{href:"https://arxiv.org/abs/2201.11903",children:"Wei et al. (2022)"})]}),"\n",(0,n.jsxs)(a.p,{children:["Introduzido em ",(0,n.jsx)(a.a,{href:"https://arxiv.org/abs/2201.11903",children:"Wei et al. (2022)"}),", a solicita\xe7\xe3o de cadeia de pensamento (CoT) permite recursos de racioc\xednio complexos por meio de etapas intermedi\xe1rias de racioc\xednio. Voc\xea pode combin\xe1-lo com prompts de poucos tiros para obter melhores resultados em tarefas mais complexas que exigem racioc\xednio antes de responder."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.em,{children:"Prompt:"})}),"\n",(0,n.jsx)(a.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsxs)(a.code,{"data-language":"text","data-theme":"default",children:[(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Os n\xfameros \xedmpares neste grupo somam um n\xfamero par: 4, 8, 9, 15, 12, 2, 1."})}),"\n",(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"R: Somando todos os n\xfameros \xedmpares (9, 15, 1) d\xe1 25. A resposta \xe9 Falso."})}),"\n",(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Os n\xfameros \xedmpares neste grupo somam um n\xfamero par: 17, 10, 19, 4, 8, 12, 24."})}),"\n",(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"R: Somando todos os n\xfameros \xedmpares (17, 19) d\xe1 36. A resposta \xe9 Verdadeiro."})}),"\n",(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Os n\xfameros \xedmpares neste grupo somam um n\xfamero par: 16, 11, 14, 4, 8, 13, 24."})}),"\n",(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"R: Somando todos os n\xfameros \xedmpares (11, 13) d\xe1 24. A resposta \xe9 Verdadeiro."})}),"\n",(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Os n\xfameros \xedmpares neste grupo somam um n\xfamero par: 17, 9, 10, 12, 13, 4, 2."})}),"\n",(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"R: Somando todos os n\xfameros \xedmpares (17, 9, 13) d\xe1 39. A resposta \xe9 Falso."})}),"\n",(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Os n\xfameros \xedmpares neste grupo somam um n\xfamero par: 15, 32, 5, 13, 82, 7, 1."})}),"\n",(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"A:"})})]})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.em,{children:"Sa\xedda:"})}),"\n",(0,n.jsx)(a.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsx)(a.code,{"data-language":"text","data-theme":"default",children:(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Somando todos os n\xfameros \xedmpares (15, 5, 13, 7, 1) d\xe1 41. A resposta \xe9 Falso."})})})}),"\n",(0,n.jsx)(a.p,{children:"Uau! Podemos ver um resultado perfeito quando fornecemos a etapa de racioc\xednio. Na verdade, podemos resolver essa tarefa fornecendo ainda menos exemplos, ou seja, apenas um exemplo parece suficiente:"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.em,{children:"Prompt:"})}),"\n",(0,n.jsx)(a.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsxs)(a.code,{"data-language":"text","data-theme":"default",children:[(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Os n\xfameros \xedmpares neste grupo somam um n\xfamero par: 4, 8, 9, 15, 12, 2, 1."})}),"\n",(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"R: Somando todos os n\xfameros \xedmpares (9, 15, 1) d\xe1 25. A resposta \xe9 Falso."})}),"\n",(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Os n\xfameros \xedmpares neste grupo somam um n\xfamero par: 15, 32, 5, 13, 82, 7, 1."})}),"\n",(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"A:"})})]})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.em,{children:"Sa\xedda:"})}),"\n",(0,n.jsx)(a.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsx)(a.code,{"data-language":"text","data-theme":"default",children:(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Somando todos os n\xfameros \xedmpares (15, 5, 13, 7, 1) d\xe1 41. A resposta \xe9 Falso."})})})}),"\n",(0,n.jsx)(a.p,{children:"Tenha em mente que os autores afirmam que esta \xe9 uma habilidade emergente que surge com modelos de linguagem suficientemente grandes."}),"\n",(0,n.jsx)(a.h2,{id:"prompt-cot-zero-shot",children:"Prompt COT Zero-Shot"}),"\n",(0,n.jsx)(l.w,{src:d.Z,alt:"Zero-shot COT"}),"\n",(0,n.jsxs)(a.p,{children:["Fonte da imagem: ",(0,n.jsx)(a.a,{href:"https://arxiv.org/abs/2205.11916",children:"Kojima et al. (2022)"})]}),"\n",(0,n.jsxs)(a.p,{children:["Uma ideia recente que surgiu mais recentemente \xe9 a ideia de ",(0,n.jsx)(a.a,{href:"https://arxiv.org/abs/2205.11916",children:"zero-shot CoT"}),' (Kojima et al. 2022) que envolve essencialmente adicionar "Vamos pensar passo a passo" para a solicita\xe7\xe3o original. Vamos tentar um problema simples e ver como o modelo funciona:']}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.em,{children:"Prompt:"})}),"\n",(0,n.jsx)(a.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsx)(a.code,{"data-language":"text","data-theme":"default",children:(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Fui ao mercado e comprei 10 ma\xe7\xe3s. Dei 2 ma\xe7\xe3s ao vizinho e 2 ao reparador. Ent\xe3o fui comprar mais 5 ma\xe7\xe3s e comi 1. Com quantas ma\xe7\xe3s fiquei?"})})})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.em,{children:"Sa\xedda:"})}),"\n",(0,n.jsx)(a.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsx)(a.code,{"data-language":"text","data-theme":"default",children:(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"11 ma\xe7\xe3s"})})})}),"\n",(0,n.jsx)(a.p,{children:"A resposta est\xe1 incorreta! Agora vamos tentar com o prompt especial."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.em,{children:"Prompt:"})}),"\n",(0,n.jsx)(a.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsxs)(a.code,{"data-language":"text","data-theme":"default",children:[(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Fui ao mercado e comprei 10 ma\xe7\xe3s. Dei 2 ma\xe7\xe3s ao vizinho e 2 ao reparador. Ent\xe3o fui comprar mais 5 ma\xe7\xe3s e comi 1. Com quantas ma\xe7\xe3s fiquei?"})}),"\n",(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Vamos pensar passo a passo."})})]})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.em,{children:"Sa\xedda:"})}),"\n",(0,n.jsx)(a.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsxs)(a.code,{"data-language":"text","data-theme":"default",children:[(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Primeiro, voc\xea come\xe7ou com 10 ma\xe7\xe3s."})}),"\n",(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Voc\xea deu 2 ma\xe7\xe3s para o vizinho e 2 para o reparador, ent\xe3o voc\xea tinha 6 ma\xe7\xe3s sobrando."})}),"\n",(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Ent\xe3o voc\xea comprou mais 5 ma\xe7\xe3s, ent\xe3o agora voc\xea tinha 11 ma\xe7\xe3s."})}),"\n",(0,n.jsx)(a.span,{className:"line",children:(0,n.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Finalmente, voc\xea comeu 1 ma\xe7\xe3, ent\xe3o ficaria com 10 ma\xe7\xe3s."})})]})}),"\n",(0,n.jsx)(a.p,{children:"\xc9 impressionante que esse prompt simples seja eficaz nessa tarefa. Isso \xe9 particularmente \xfatil onde voc\xea n\xe3o tem muitos exemplos para usar no prompt."})]})}let m={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:a}=Object.assign({},(0,i.a)(),e.components);return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(p,{...e})}):p(e)},pageOpts:{filePath:"pages/techniques/cot.pt.mdx",route:"/techniques/cot",timestamp:1680636145e3,pageMap:[{kind:"Meta",locale:"pt",data:{index:"Prompt Engineering",introduction:"Introdu\xe7\xe3o",techniques:"T\xe9cnicas",applications:"Aplica\xe7\xf5es",models:"Modelos",risks:"Riscos e usos indevidos",papers:"Artigos",tools:"Ferramentas",notebooks:"Notebooks",datasets:"Conjuntos de dados",readings:"Leituras Adicionais",course:{title:"Curso de Engenharia Prompt",type:"page"},services:{title:"Servi\xe7os",type:"page"},about:{title:"Sobre",type:"page"}}},{kind:"MdxPage",name:"about",route:"/about",locale:"pt"},{kind:"Folder",name:"applications",route:"/applications",children:[{kind:"Meta",locale:"pt",data:{pal:"Program-Aided Language Models",generating:"Generating Data",coding:"Generating Code",workplace_casestudy:"Graduate Job Classification Case Study",pf:"Prompt Function"}},{kind:"MdxPage",name:"coding",route:"/applications/coding",locale:"pt"},{kind:"MdxPage",name:"generating",route:"/applications/generating",locale:"pt"},{kind:"MdxPage",name:"pal",route:"/applications/pal",locale:"pt"},{kind:"MdxPage",name:"pf",route:"/applications/pf",locale:"pt"},{kind:"MdxPage",name:"workplace_casestudy",route:"/applications/workplace_casestudy",locale:"pt"},{kind:"MdxPage",name:"generating_textbooks",route:"/applications/generating_textbooks",locale:"en"},{kind:"MdxPage",name:"synthetic_rag",route:"/applications/synthetic_rag",locale:"en"}]},{kind:"MdxPage",name:"applications",route:"/applications",locale:"pt"},{kind:"MdxPage",name:"course",route:"/course",locale:"pt"},{kind:"MdxPage",name:"datasets",route:"/datasets",locale:"pt"},{kind:"MdxPage",name:"index",route:"/",locale:"pt"},{kind:"Folder",name:"introduction",route:"/introduction",children:[{kind:"Meta",locale:"pt",data:{settings:"Configura\xe7\xf5es LLM",basics:"B\xe1sico de Prompting",elements:"Elementos de Prompt",tips:"Dicas Gerais para Designing de Prompts",examples:"Exemplos de Prompts"}},{kind:"MdxPage",name:"basics",route:"/introduction/basics",locale:"pt"},{kind:"MdxPage",name:"elements",route:"/introduction/elements",locale:"pt"},{kind:"MdxPage",name:"examples",route:"/introduction/examples",locale:"pt"},{kind:"MdxPage",name:"settings",route:"/introduction/settings",locale:"pt"},{kind:"MdxPage",name:"tips",route:"/introduction/tips",locale:"pt"}]},{kind:"MdxPage",name:"introduction",route:"/introduction",locale:"pt"},{kind:"Folder",name:"models",route:"/models",children:[{kind:"Meta",locale:"pt",data:{flan:"Flan",chatgpt:"ChatGPT",llama:"LLaMA","gpt-4":"GPT-4","mistral-7b":"Mistral 7B",collection:"Model Collection"}},{kind:"MdxPage",name:"chatgpt",route:"/models/chatgpt",locale:"pt"},{kind:"MdxPage",name:"collection",route:"/models/collection",locale:"pt"},{kind:"MdxPage",name:"flan",route:"/models/flan",locale:"pt"},{kind:"MdxPage",name:"gpt-4",route:"/models/gpt-4",locale:"pt"},{kind:"MdxPage",name:"llama",route:"/models/llama",locale:"pt"},{kind:"MdxPage",name:"mistral-7b",route:"/models/mistral-7b",locale:"pt"}]},{kind:"MdxPage",name:"models",route:"/models",locale:"pt"},{kind:"MdxPage",name:"notebooks",route:"/notebooks",locale:"pt"},{kind:"MdxPage",name:"papers",route:"/papers",locale:"pt"},{kind:"MdxPage",name:"readings",route:"/readings",locale:"pt"},{kind:"Folder",name:"risks",route:"/risks",children:[{kind:"Meta",locale:"pt",data:{adversarial:"Adversarial Prompting",factuality:"Factuality",biases:"Biases"}},{kind:"MdxPage",name:"adversarial",route:"/risks/adversarial",locale:"pt"},{kind:"MdxPage",name:"biases",route:"/risks/biases",locale:"pt"},{kind:"MdxPage",name:"factuality",route:"/risks/factuality",locale:"pt"}]},{kind:"MdxPage",name:"risks",route:"/risks",locale:"pt"},{kind:"MdxPage",name:"services",route:"/services",locale:"pt"},{kind:"Folder",name:"techniques",route:"/techniques",children:[{kind:"Meta",locale:"pt",data:{zeroshot:"Zero-shot Prompting",fewshot:"Few-shot Prompting",cot:"Chain-of-Thought Prompting",consistency:"Self-Consistency",knowledge:"Generate Knowledge Prompting",tot:"Tree of Thoughts",rag:"Retrieval Augmented Generation",art:"Automatic Reasoning and Tool-use",ape:"Automatic Prompt Engineer",activeprompt:"Active-Prompt",dsp:"Directional Stimulus Prompting",react:"ReAct",multimodalcot:"Multimodal CoT",graph:"Graph Prompting"}},{kind:"MdxPage",name:"activeprompt",route:"/techniques/activeprompt",locale:"pt"},{kind:"MdxPage",name:"ape",route:"/techniques/ape",locale:"pt"},{kind:"MdxPage",name:"art",route:"/techniques/art",locale:"pt"},{kind:"MdxPage",name:"consistency",route:"/techniques/consistency",locale:"pt"},{kind:"MdxPage",name:"cot",route:"/techniques/cot",locale:"pt"},{kind:"MdxPage",name:"dsp",route:"/techniques/dsp",locale:"pt"},{kind:"MdxPage",name:"fewshot",route:"/techniques/fewshot",locale:"pt"},{kind:"MdxPage",name:"graph",route:"/techniques/graph",locale:"pt"},{kind:"MdxPage",name:"knowledge",route:"/techniques/knowledge",locale:"pt"},{kind:"MdxPage",name:"multimodalcot",route:"/techniques/multimodalcot",locale:"pt"},{kind:"MdxPage",name:"rag",route:"/techniques/rag",locale:"pt"},{kind:"MdxPage",name:"react",route:"/techniques/react",locale:"pt"},{kind:"MdxPage",name:"tot",route:"/techniques/tot",locale:"pt"},{kind:"MdxPage",name:"zeroshot",route:"/techniques/zeroshot",locale:"pt"}]},{kind:"MdxPage",name:"techniques",route:"/techniques",locale:"pt"},{kind:"MdxPage",name:"tools",route:"/tools",locale:"pt"}],flexsearch:{codeblocks:!0},title:"Cadeia-de-Pensamento Prompt",headings:x},pageNextRoute:"/techniques/cot.pt",nextraLayout:s.ZP,themeConfig:r.Z};a.default=(0,o.j)(m)}},function(e){e.O(0,[67892,49774,92888,40179],function(){return e(e.s=70619)}),_N_E=e.O()}]);