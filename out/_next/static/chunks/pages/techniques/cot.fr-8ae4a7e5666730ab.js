(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[28328],{30363:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/techniques/cot.fr",function(){return t(31155)}])},18148:function(e,n){"use strict";n.Z={src:"/_next/static/media/cot.1933d9fe.png",height:473,width:940,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAZElEQVR42gUASQqDMDD//05PPZVSeuoH6gYuREeis5DRJOKGAdTaOiZKMTZAFpwwhRCMsMwTeu/DupYt/TIsOp55MY7diJBi2tL2t1k+VIAgKkajepVj38/j+lbvZ/H4NK+B+xtcfFgA5JyddQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4}},82169:function(e,n){"use strict";n.Z={src:"/_next/static/media/zero-cot.79793bee.png",height:508,width:944,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAATUlEQVR42h2JQRKAIAzE+P9LdYTWbXcL3GRMbkmjmEdxrZUMd0O8VWpmg8z6Gebm8DcQ2aTKTEl7byB792E4oQEgOec847mf++oORdYHytta7nzGHpcAAAAASUVORK5CYII=",blurWidth:8,blurHeight:4}},41667:function(e,n,t){"use strict";t.d(n,{w:function(){return i}});var a=t(11527),s=t(5341),r=t(76484),o=t.n(r);function i(e){let{src:n,alt:t,full:r}=e;return(0,a.jsx)("div",{className:(0,s.Z)("mt-6 -mb-4 flex justify-center overflow-hidden rounded-xl border dark:border-zinc-800",r?"bg-white":"bg-zinc-100"),children:(0,a.jsx)(o(),{src:n,alt:t,className:(0,s.Z)("w-auto select-none bg-white",r?"":"ring-1 ring-gray-200")})})}},43677:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var a=t(11527),s=t(50959),r=t(85274),o=t(5341);function i(e){return(0,a.jsx)("svg",{viewBox:"0 0 24 24",width:"24",height:"24",...e,children:(0,a.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}let l=e=>{let{children:n,className:t,...s}=e;return(0,a.jsx)("button",{className:(0,o.Z)("nextra-button nx-transition-all active:nx-opacity-50","nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-1.5","dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50",t),...s,children:n})};function c(e){return(0,a.jsx)("svg",{viewBox:"0 0 20 20",width:"1em",height:"1em",fill:"currentColor",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}function d(e){return(0,a.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",...e,children:[(0,a.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,a.jsx)("path",{d:"M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}let x=e=>{let{getValue:n,...t}=e,[r,o]=(0,s.useState)(!1);(0,s.useEffect)(()=>{if(!r)return;let e=setTimeout(()=>{o(!1)},2e3);return()=>{clearTimeout(e)}},[r]);let i=(0,s.useCallback)(async()=>{o(!0),(null==navigator?void 0:navigator.clipboard)||console.error("Access to clipboard rejected!");try{await navigator.clipboard.writeText(n())}catch(e){console.error("Failed to copy!")}},[n]);return(0,a.jsx)(l,{onClick:i,title:"Copy code",tabIndex:0,...t,children:(0,a.jsx)(r?c:d,{className:"nextra-copy-icon nx-pointer-events-none nx-h-4 nx-w-4"})})},p=e=>{let{children:n,className:t,hasCopyCode:r=!0,filename:c,...d}=e,p=(0,s.useRef)(null),m=(0,s.useCallback)(()=>{let e=document.documentElement.dataset,n="nextraWordWrap"in e;n?delete e.nextraWordWrap:e.nextraWordWrap=""},[]);return(0,a.jsxs)("div",{className:"nextra-code-block nx-relative nx-mt-6 first:nx-mt-0",children:[c&&(0,a.jsx)("div",{className:"nx-absolute nx-top-0 nx-z-[1] nx-w-full nx-truncate nx-rounded-t-xl nx-bg-primary-700/5 nx-py-2 nx-px-4 nx-text-xs nx-text-gray-700 dark:nx-bg-primary-300/10 dark:nx-text-gray-200",children:c}),(0,a.jsx)("pre",{className:(0,o.Z)("nx-bg-primary-700/5 nx-mb-4 nx-overflow-x-auto nx-rounded-xl nx-subpixel-antialiased dark:nx-bg-primary-300/10 nx-text-[.9em]","contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40",c?"nx-pt-12 nx-pb-4":"nx-py-4",t),ref:p,...d,children:s.isValidElement(n)&&"code"===n.type?n.props.children:n}),(0,a.jsxs)("div",{className:(0,o.Z)("nx-opacity-0 nx-transition [div:hover>&]:nx-opacity-100 focus-within:nx-opacity-100","nx-flex nx-gap-1 nx-absolute nx-m-[11px] nx-right-0",c?"nx-top-8":"nx-top-0"),children:[(0,a.jsx)(l,{onClick:m,className:"md:nx-hidden",title:"Toggle word wrap elvis",children:(0,a.jsx)(i,{className:"nx-pointer-events-none nx-h-4 nx-w-4"})}),r&&(0,a.jsx)(x,{getValue(){var e,n;return(null===(e=null===(n=p.current)||void 0===n?void 0:n.querySelector("code"))||void 0===e?void 0:e.textContent)||""}})]})]})},m={logo:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 206 246",fill:"none",children:[(0,a.jsx)("circle",{cx:"40",cy:"40",r:"40",fill:"currentColor"}),(0,a.jsx)("circle",{cx:"40",cy:"206",r:"40",fill:"currentColor"}),(0,a.jsx)("circle",{cx:"166",cy:"120",r:"40",fill:"currentColor"})]}),(0,a.jsx)("span",{style:{marginLeft:".4em",fontWeight:800},children:"Prompt Engineering Guide"})]}),i18n:[{locale:"en",text:"English"},{locale:"zh",text:"中文"},{locale:"jp",text:"日本語"},{locale:"pt",text:"Portugu\xeas"},{locale:"it",text:"Italian"},{locale:"tr",text:"T\xfcrk\xe7e"},{locale:"es",text:"Espa\xf1ol"},{locale:"fr",text:"Fran\xe7ais"},{locale:"kr",text:"한국어"},{locale:"ca",text:"Catal\xe0"},{locale:"fi",text:"Finnish"},{locale:"ru",text:"Русский"}],head:function(){let{title:e}=(0,r.ZR)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("title",{children:[e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"," "]}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,a.jsx)("meta",{property:"og:title",content:"Prompt Engineering Guide"}),(0,a.jsx)("meta",{property:"og:description",content:"A Comprehensive Overview of Prompt Engineering"}),(0,a.jsx)("meta",{name:"og:title",content:e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"}),(0,a.jsx)("link",{rel:"icon",href:"/144-favicon.svg",type:"image/svg+xml"}),(0,a.jsx)("link",{rel:"icon",href:"/144-favicon-dark.svg",type:"image/svg+xml",media:"(prefers-color-scheme: dark)"})]})},project:{link:"https://github.com/dair-ai/Prompt-Engineering-Guide"},chat:{link:"https://discord.gg/FUyz9vPAwf"},docsRepositoryBase:"https://github.com/dair-ai/Prompt-Engineering-Guide/tree/main/",footer:{text:"Copyright \xa9 2023 DAIR.AI"},search:{placeholder:"Search..."},components:{pre:p}};var u=m},31155:function(e,n,t){"use strict";t.r(n),t.d(n,{__toc:function(){return x}});var a=t(11527),s=t(55411),r=t(85274),o=t(43677);t(20492),t(95178);var i=t(82132),l=t(41667),c=t(18148),d=t(82169);let x=[{depth:2,value:"Chain-of-Thought (CoT) Prompting",id:"chain-of-thought-cot-prompting"},{depth:2,value:"Zero-shot COT Prompting",id:"zero-shot-cot-prompting"}];function p(e){let n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",em:"em",pre:"pre",code:"code",span:"span"},(0,i.a)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{children:"Chain-of-Thought Prompting"}),"\n","\n",(0,a.jsx)(n.h2,{id:"chain-of-thought-cot-prompting",children:"Chain-of-Thought (CoT) Prompting"}),"\n",(0,a.jsx)(l.w,{src:c.Z,alt:"COT"}),"\n",(0,a.jsxs)(n.p,{children:["Image Source: ",(0,a.jsx)(n.a,{href:"https://arxiv.org/abs/2201.11903",children:"Wei et al. (2022)"})]}),"\n",(0,a.jsxs)(n.p,{children:["Introduit dans ",(0,a.jsx)(n.a,{href:"https://arxiv.org/abs/2201.11903",children:"Wei et al. (2022)"}),', le prompt "chain-of-thought" (CoT) permet des capacit\xe9s de raisonnement complexes gr\xe2ce \xe0 des \xe9tapes de raisonnement interm\xe9diaires. Vous pouvez le combiner avec des prompts \xe0 quelques exemples pour obtenir de meilleurs r\xe9sultats sur des t\xe2ches plus complexes qui n\xe9cessitent un raisonnement avant de r\xe9pondre.']}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Prompt:"})}),"\n",(0,a.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"La somme des nombres impairs de ce groupe donne un nombre pair\xa0: 4, 8, 9, 15, 12, 2, 1."})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"R : L'addition de tous les nombres impairs (9, 15, 1) donne 25. La r\xe9ponse est Faux."})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"La somme des nombres impairs de ce groupe donne un nombre pair\xa0: 17, 10, 19, 4, 8, 12, 24."})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"R : L'addition de tous les nombres impairs (17, 19) donne 36. La r\xe9ponse est Vrai."})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"La somme des nombres impairs de ce groupe donne un nombre pair\xa0: 16, 11, 14, 4, 8, 13, 24."})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"R : L'addition de tous les nombres impairs (11, 13) donne 24. La r\xe9ponse est Vrai."})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"La somme des nombres impairs de ce groupe donne un nombre pair\xa0: 17, 9, 10, 12, 13, 4, 2."})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"R : L'addition de tous les nombres impairs (17, 9, 13) donne 39. La r\xe9ponse est Faux."})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"La somme des nombres impairs de ce groupe donne un nombre pair\xa0: 15, 32, 5, 13, 82, 7, 1."})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"R\xa0:"})})]})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Output:"})}),"\n",(0,a.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"L'addition de tous les nombres impairs (15, 5, 13, 7, 1) donne 41. La r\xe9ponse est Faux."})})})}),"\n",(0,a.jsx)(n.p,{children:"Wow! Nous pouvons voir un r\xe9sultat parfait lorsque nous avons fourni l'\xe9tape de raisonnement. En fait, nous pouvons r\xe9soudre cette t\xe2che en ne fournissant encore moins d'exemples, c'est-\xe0-dire qu'un seul exemple semble suffisant:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Prompt:"})}),"\n",(0,a.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"La somme des nombres impairs de ce groupe donne un nombre pair\xa0: 4, 8, 9, 15, 12, 2, 1."})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"R : L'addition de tous les nombres impairs (9, 15, 1) donne 25. La r\xe9ponse est Faux."})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"La somme des nombres impairs de ce groupe donne un nombre pair\xa0: 15, 32, 5, 13, 82, 7, 1."})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"R :"})})]})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Output:"})}),"\n",(0,a.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"L'addition de tous les nombres impairs (15, 5, 13, 7, 1) donne 41. La r\xe9ponse est Faux."})})})}),"\n",(0,a.jsx)(n.p,{children:"Gardez \xe0 l'esprit que les auteurs affirment que c'est une capacit\xe9 \xe9mergente qui se produit avec des mod\xe8les de langage suffisamment grands."}),"\n",(0,a.jsx)(n.h2,{id:"zero-shot-cot-prompting",children:"Zero-shot COT Prompting"}),"\n",(0,a.jsx)(l.w,{src:d.Z,alt:"Zero-shot COT"}),"\n",(0,a.jsxs)(n.p,{children:["Image Source: ",(0,a.jsx)(n.a,{href:"https://arxiv.org/abs/2205.11916",children:"Kojima et al. (2022)"})]}),"\n",(0,a.jsxs)(n.p,{children:["Une id\xe9e r\xe9cente qui est sortie plus r\xe9cemment est l'id\xe9e de ",(0,a.jsx)(n.a,{href:"https://arxiv.org/abs/2205.11916",children:"zero-shot CoT"})," (Kojima et al. 2022) qui consiste essentiellement \xe0 ajouter \xab\xa0Pensons \xe9tape par \xe9tape\xa0\xbb aux prompt d'origine. Essayons un probl\xe8me simple et voyons comment le mod\xe8le fonctionne\xa0:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Prompt:"})}),"\n",(0,a.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"Je suis all\xe9 au march\xe9 et j'ai achet\xe9 10 pommes. J'ai donn\xe9 2 pommes au voisin et 2 au d\xe9panneur. Je suis ensuite all\xe9 acheter 5 pommes de plus et j'en ai mang\xe9 1. Avec combien de pommes suis-je rest\xe9 ?"})})})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Output:"})}),"\n",(0,a.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"11 pommes"})})})}),"\n",(0,a.jsx)(n.p,{children:"La r\xe9ponse est incorrecte ! Essayons maintenant avec l'invite sp\xe9ciale."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Prompt:"})}),"\n",(0,a.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"Je suis all\xe9 au march\xe9 et j'ai achet\xe9 10 pommes. J'ai donn\xe9 2 pommes au voisin et 2 au d\xe9panneur. Je suis ensuite all\xe9 acheter 5 pommes de plus et j'en ai mang\xe9 1. Avec combien de pommes suis-je rest\xe9 ?"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"R\xe9fl\xe9chissons \xe9tape par \xe9tape."})})]})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Output:"})}),"\n",(0,a.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"Tout d'abord, vous avez commenc\xe9 avec 10 pommes."})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"Vous avez donn\xe9 2 pommes au voisin et 2 au r\xe9parateur, il vous restait donc 6 pommes."})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"Ensuite, vous avez achet\xe9 5 pommes de plus, alors vous avez maintenant 11 pommes."})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"Enfin, vous avez mang\xe9 1 pomme, vous resterez donc avec 10 pommes."})})]})}),"\n",(0,a.jsx)(n.p,{children:"C'est impressionnant que cette instruction simple soit efficace pour cette t\xe2che. Cela est particuli\xe8rement utile lorsque vous n'avez pas trop d'exemples \xe0 utiliser dans l'instruction."})]})}let m={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.a)(),e.components);return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)},pageOpts:{filePath:"pages/techniques/cot.fr.mdx",route:"/techniques/cot",timestamp:1682195664e3,pageMap:[{kind:"Meta",locale:"fr",data:{index:"Prompt Engineering",introduction:"Introduction",techniques:"Techniques",applications:"Applications",models:"Models",risks:"Risques et M\xe9susages",papers:"Papers",workflows:"Workflows Genilem",tools:"Outils",notebooks:"Notebooks",datasets:"Datasets",readings:"Lectures suppl\xe9mentaires",course:{title:"Prompt Engineering Course",type:"page"},services:{title:"Services",type:"page"},about:{title:"\xc0 propos",type:"page"}}},{kind:"MdxPage",name:"about",route:"/about",locale:"fr"},{kind:"Folder",name:"applications",route:"/applications",children:[{kind:"Meta",locale:"fr",data:{pal:"Mod\xe8les de langage assist\xe9s par programme",generating:"G\xe9n\xe9ration de donn\xe9es",coding:"Generating Code",workplace_casestudy:"\xc9tude de cas sur la classification des emplois des dipl\xf4m\xe9s",pf:"Prompt Function"}},{kind:"MdxPage",name:"coding",route:"/applications/coding",locale:"fr"},{kind:"MdxPage",name:"generating",route:"/applications/generating",locale:"fr"},{kind:"MdxPage",name:"pal",route:"/applications/pal",locale:"fr"},{kind:"MdxPage",name:"pf",route:"/applications/pf",locale:"fr"},{kind:"MdxPage",name:"workplace_casestudy",route:"/applications/workplace_casestudy",locale:"fr"},{kind:"MdxPage",name:"generating_textbooks",route:"/applications/generating_textbooks",locale:"en"},{kind:"MdxPage",name:"synthetic_rag",route:"/applications/synthetic_rag",locale:"en"}]},{kind:"MdxPage",name:"applications",route:"/applications",locale:"fr"},{kind:"MdxPage",name:"course",route:"/course",locale:"fr"},{kind:"MdxPage",name:"datasets",route:"/datasets",locale:"fr"},{kind:"MdxPage",name:"index",route:"/",locale:"fr"},{kind:"Folder",name:"introduction",route:"/introduction",children:[{kind:"Meta",locale:"fr",data:{settings:"Param\xe8tres LLM",basics:"Principes de base en Prompting",elements:"\xc9l\xe9ments d'un prompt",tips:"Conseils g\xe9n\xe9raux pour la conception de prompts",examples:"Exemples de prompts"}},{kind:"MdxPage",name:"basics",route:"/introduction/basics",locale:"fr"},{kind:"MdxPage",name:"elements",route:"/introduction/elements",locale:"fr"},{kind:"MdxPage",name:"examples",route:"/introduction/examples",locale:"fr"},{kind:"MdxPage",name:"settings",route:"/introduction/settings",locale:"fr"},{kind:"MdxPage",name:"tips",route:"/introduction/tips",locale:"fr"}]},{kind:"MdxPage",name:"introduction",route:"/introduction",locale:"fr"},{kind:"Folder",name:"models",route:"/models",children:[{kind:"Meta",locale:"fr",data:{flan:"Flan",chatgpt:"ChatGPT",llama:"LLaMA","gpt-4":"GPT-4","mistral-7b":"Mistral 7B",collection:"Collection de mod\xe8les"}},{kind:"MdxPage",name:"chatgpt",route:"/models/chatgpt",locale:"fr"},{kind:"MdxPage",name:"collection",route:"/models/collection",locale:"fr"},{kind:"MdxPage",name:"flan",route:"/models/flan",locale:"fr"},{kind:"MdxPage",name:"gpt-4",route:"/models/gpt-4",locale:"fr"},{kind:"MdxPage",name:"llama",route:"/models/llama",locale:"fr"},{kind:"MdxPage",name:"mistral-7b",route:"/models/mistral-7b",locale:"fr"}]},{kind:"MdxPage",name:"models",route:"/models",locale:"fr"},{kind:"MdxPage",name:"notebooks",route:"/notebooks",locale:"fr"},{kind:"MdxPage",name:"papers",route:"/papers",locale:"fr"},{kind:"MdxPage",name:"readings",route:"/readings",locale:"fr"},{kind:"Folder",name:"risks",route:"/risks",children:[{kind:"Meta",locale:"fr",data:{adversarial:"Incitation contradictoire",factuality:"Factualit\xe9",biases:"Biases"}},{kind:"MdxPage",name:"adversarial",route:"/risks/adversarial",locale:"fr"},{kind:"MdxPage",name:"biases",route:"/risks/biases",locale:"fr"},{kind:"MdxPage",name:"factuality",route:"/risks/factuality",locale:"fr"}]},{kind:"MdxPage",name:"risks",route:"/risks",locale:"fr"},{kind:"MdxPage",name:"services",route:"/services",locale:"fr"},{kind:"Folder",name:"techniques",route:"/techniques",children:[{kind:"Meta",locale:"fr",data:{zeroshot:"Zero-shot Prompting",fewshot:"Few-shot Prompting",cot:"Chain-of-Thought Prompting",consistency:"Self-Consistency",knowledge:"Generate Knowledge Prompting",tot:"Tree of Thoughts",rag:"Retrieval Augmented Generation",art:"Automatic Reasoning and Tool-use",ape:"Automatic Prompt Engineer",activeprompt:"Active-Prompt",dsp:"Directional Stimulus Prompting",react:"ReAct",multimodalcot:"Multimodal CoT",graph:"Graph Prompting"}},{kind:"MdxPage",name:"activeprompt",route:"/techniques/activeprompt",locale:"fr"},{kind:"MdxPage",name:"ape",route:"/techniques/ape",locale:"fr"},{kind:"MdxPage",name:"art",route:"/techniques/art",locale:"fr"},{kind:"MdxPage",name:"consistency",route:"/techniques/consistency",locale:"fr"},{kind:"MdxPage",name:"cot",route:"/techniques/cot",locale:"fr"},{kind:"MdxPage",name:"dsp",route:"/techniques/dsp",locale:"fr"},{kind:"MdxPage",name:"fewshot",route:"/techniques/fewshot",locale:"fr"},{kind:"MdxPage",name:"graph",route:"/techniques/graph",locale:"fr"},{kind:"MdxPage",name:"knowledge",route:"/techniques/knowledge",locale:"fr"},{kind:"MdxPage",name:"multimodalcot",route:"/techniques/multimodalcot",locale:"fr"},{kind:"MdxPage",name:"rag",route:"/techniques/rag",locale:"fr"},{kind:"MdxPage",name:"react",route:"/techniques/react",locale:"fr"},{kind:"MdxPage",name:"tot",route:"/techniques/tot",locale:"fr"},{kind:"MdxPage",name:"zeroshot",route:"/techniques/zeroshot",locale:"fr"}]},{kind:"MdxPage",name:"techniques",route:"/techniques",locale:"fr"},{kind:"MdxPage",name:"tools",route:"/tools",locale:"fr"},{kind:"MdxPage",name:"workflows",route:"/workflows",locale:"fr"}],flexsearch:{codeblocks:!0},title:"Chain-of-Thought Prompting",headings:x},pageNextRoute:"/techniques/cot.fr",nextraLayout:r.ZP,themeConfig:o.Z};n.default=(0,s.j)(m)}},function(e){e.O(0,[67892,49774,92888,40179],function(){return e(e.s=30363)}),_N_E=e.O()}]);