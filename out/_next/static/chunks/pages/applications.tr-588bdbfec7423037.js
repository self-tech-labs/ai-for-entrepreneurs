(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[22970],{70369:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/applications.tr",function(){return a(85329)}])},43677:function(e,t,a){"use strict";a.d(t,{Z:function(){return g}});var n=a(11527),r=a(50959),i=a(85274),l=a(5341);function o(e){return(0,n.jsx)("svg",{viewBox:"0 0 24 24",width:"24",height:"24",...e,children:(0,n.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}let c=e=>{let{children:t,className:a,...r}=e;return(0,n.jsx)("button",{className:(0,l.Z)("nextra-button nx-transition-all active:nx-opacity-50","nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-1.5","dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50",a),...r,children:t})};function s(e){return(0,n.jsx)("svg",{viewBox:"0 0 20 20",width:"1em",height:"1em",fill:"currentColor",...e,children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}function d(e){return(0,n.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",...e,children:[(0,n.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}let x=e=>{let{getValue:t,...a}=e,[i,l]=(0,r.useState)(!1);(0,r.useEffect)(()=>{if(!i)return;let e=setTimeout(()=>{l(!1)},2e3);return()=>{clearTimeout(e)}},[i]);let o=(0,r.useCallback)(async()=>{l(!0),(null==navigator?void 0:navigator.clipboard)||console.error("Access to clipboard rejected!");try{await navigator.clipboard.writeText(t())}catch(e){console.error("Failed to copy!")}},[t]);return(0,n.jsx)(c,{onClick:o,title:"Copy code",tabIndex:0,...a,children:(0,n.jsx)(i?s:d,{className:"nextra-copy-icon nx-pointer-events-none nx-h-4 nx-w-4"})})},m=e=>{let{children:t,className:a,hasCopyCode:i=!0,filename:s,...d}=e,m=(0,r.useRef)(null),u=(0,r.useCallback)(()=>{let e=document.documentElement.dataset,t="nextraWordWrap"in e;t?delete e.nextraWordWrap:e.nextraWordWrap=""},[]);return(0,n.jsxs)("div",{className:"nextra-code-block nx-relative nx-mt-6 first:nx-mt-0",children:[s&&(0,n.jsx)("div",{className:"nx-absolute nx-top-0 nx-z-[1] nx-w-full nx-truncate nx-rounded-t-xl nx-bg-primary-700/5 nx-py-2 nx-px-4 nx-text-xs nx-text-gray-700 dark:nx-bg-primary-300/10 dark:nx-text-gray-200",children:s}),(0,n.jsx)("pre",{className:(0,l.Z)("nx-bg-primary-700/5 nx-mb-4 nx-overflow-x-auto nx-rounded-xl nx-subpixel-antialiased dark:nx-bg-primary-300/10 nx-text-[.9em]","contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40",s?"nx-pt-12 nx-pb-4":"nx-py-4",a),ref:m,...d,children:r.isValidElement(t)&&"code"===t.type?t.props.children:t}),(0,n.jsxs)("div",{className:(0,l.Z)("nx-opacity-0 nx-transition [div:hover>&]:nx-opacity-100 focus-within:nx-opacity-100","nx-flex nx-gap-1 nx-absolute nx-m-[11px] nx-right-0",s?"nx-top-8":"nx-top-0"),children:[(0,n.jsx)(c,{onClick:u,className:"md:nx-hidden",title:"Toggle word wrap elvis",children:(0,n.jsx)(o,{className:"nx-pointer-events-none nx-h-4 nx-w-4"})}),i&&(0,n.jsx)(x,{getValue(){var e,t;return(null===(e=null===(t=m.current)||void 0===t?void 0:t.querySelector("code"))||void 0===e?void 0:e.textContent)||""}})]})]})},u={logo:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 206 246",fill:"none",children:[(0,n.jsx)("circle",{cx:"40",cy:"40",r:"40",fill:"currentColor"}),(0,n.jsx)("circle",{cx:"40",cy:"206",r:"40",fill:"currentColor"}),(0,n.jsx)("circle",{cx:"166",cy:"120",r:"40",fill:"currentColor"})]}),(0,n.jsx)("span",{style:{marginLeft:".4em",fontWeight:800},children:"Prompt Engineering Guide"})]}),i18n:[{locale:"en",text:"English"},{locale:"zh",text:"中文"},{locale:"jp",text:"日本語"},{locale:"pt",text:"Portugu\xeas"},{locale:"it",text:"Italian"},{locale:"tr",text:"T\xfcrk\xe7e"},{locale:"es",text:"Espa\xf1ol"},{locale:"fr",text:"Fran\xe7ais"},{locale:"kr",text:"한국어"},{locale:"ca",text:"Catal\xe0"},{locale:"fi",text:"Finnish"},{locale:"ru",text:"Русский"}],head:function(){let{title:e}=(0,i.ZR)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("title",{children:[e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"," "]}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,n.jsx)("meta",{property:"og:title",content:"Prompt Engineering Guide"}),(0,n.jsx)("meta",{property:"og:description",content:"A Comprehensive Overview of Prompt Engineering"}),(0,n.jsx)("meta",{name:"og:title",content:e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"}),(0,n.jsx)("link",{rel:"icon",href:"/144-favicon.svg",type:"image/svg+xml"}),(0,n.jsx)("link",{rel:"icon",href:"/144-favicon-dark.svg",type:"image/svg+xml",media:"(prefers-color-scheme: dark)"})]})},project:{link:"https://github.com/dair-ai/Prompt-Engineering-Guide"},chat:{link:"https://discord.gg/FUyz9vPAwf"},docsRepositoryBase:"https://github.com/dair-ai/Prompt-Engineering-Guide/tree/main/",footer:{text:"Copyright \xa9 2023 DAIR.AI"},search:{placeholder:"Search..."},components:{pre:m}};var g=u},85329:function(e,t,a){"use strict";a.r(t),a.d(t,{__toc:function(){return s}});var n=a(11527),r=a(55411),i=a(85274),l=a(43677);a(20492),a(95178);var o=a(82132),c=a(63622);let s=[];function d(e){let t=Object.assign({h1:"h1",p:"p"},(0,o.a)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{children:"İstemci Uygulamaları"}),"\n","\n",(0,n.jsx)(t.p,{children:"Bu b\xf6l\xfcmde, yararlı ve daha gelişmiş g\xf6revleri ger\xe7ekleştirmek i\xe7in hızlı m\xfchendisliği kullanabileceğimiz bazı gelişmiş ve ilgin\xe7 yolları ele alacağız."}),"\n",(0,n.jsx)(c.UW,{emoji:"⚠️",children:(0,n.jsx)(t.p,{children:"Bu b\xf6l\xfcm yoğun bir geliştirme aşamasındadır."})})]})}let x={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,o.a)(),e.components);return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/applications.tr.mdx",route:"/applications",timestamp:1693344886e3,pageMap:[{kind:"Meta",locale:"tr",data:{index:"İstem M\xfchendisliği",introduction:"Giriş",techniques:"Teknikler",applications:"Uygulamalar",models:"Modeller",risks:"Riskler ve K\xf6t\xfcye Kullanımlar",papers:"Makaleler",tools:"Ara\xe7lar",notebooks:"Notlar",datasets:"Veri K\xfcmeleri",readings:"Ek Okumalar",course:{title:"İstem M\xfchendisliği Kursu",type:"page"},services:{title:"Hizmetler",type:"page"},about:{title:"Hakkında",type:"page"}}},{kind:"MdxPage",name:"about",route:"/about",locale:"tr"},{kind:"Folder",name:"applications",route:"/applications",children:[{kind:"Meta",locale:"tr",data:{pal:"Program Destekli Dil Modelleri",generating:"Veri \xdcretimi",coding:"Kod \xdcretimi",workplace_casestudy:"Lisans\xfcst\xfc İş Sınıflandırması Vaka \xc7alışması",pf:"İstem Fonksiyonu"}},{kind:"MdxPage",name:"coding",route:"/applications/coding",locale:"tr"},{kind:"MdxPage",name:"generating",route:"/applications/generating",locale:"tr"},{kind:"MdxPage",name:"pal",route:"/applications/pal",locale:"tr"},{kind:"MdxPage",name:"pf",route:"/applications/pf",locale:"tr"},{kind:"MdxPage",name:"workplace_casestudy",route:"/applications/workplace_casestudy",locale:"tr"},{kind:"MdxPage",name:"generating_textbooks",route:"/applications/generating_textbooks",locale:"en"},{kind:"MdxPage",name:"synthetic_rag",route:"/applications/synthetic_rag",locale:"en"}]},{kind:"MdxPage",name:"applications",route:"/applications",locale:"tr"},{kind:"MdxPage",name:"course",route:"/course",locale:"tr"},{kind:"MdxPage",name:"datasets",route:"/datasets",locale:"tr"},{kind:"MdxPage",name:"index",route:"/",locale:"tr"},{kind:"Folder",name:"introduction",route:"/introduction",children:[{kind:"Meta",locale:"tr",data:{settings:"LLM Ayarları",basics:"İstemlerin Temelleri",elements:"Bir İstemin Unsurları",tips:"İstemlerin Tasarlanması İ\xe7in Genel İpu\xe7ları",examples:"\xd6rnek İstemler"}},{kind:"MdxPage",name:"basics",route:"/introduction/basics",locale:"tr"},{kind:"MdxPage",name:"elements",route:"/introduction/elements",locale:"tr"},{kind:"MdxPage",name:"examples",route:"/introduction/examples",locale:"tr"},{kind:"MdxPage",name:"settings",route:"/introduction/settings",locale:"tr"},{kind:"MdxPage",name:"tips",route:"/introduction/tips",locale:"tr"}]},{kind:"MdxPage",name:"introduction",route:"/introduction",locale:"tr"},{kind:"Folder",name:"models",route:"/models",children:[{kind:"Meta",locale:"tr",data:{flan:"Flan",chatgpt:"ChatGPT",llama:"LLaMA","gpt-4":"GPT-4","mistral-7b":"Mistral 7B",collection:"LLM Koleksiyonu"}},{kind:"MdxPage",name:"chatgpt",route:"/models/chatgpt",locale:"tr"},{kind:"MdxPage",name:"collection",route:"/models/collection",locale:"tr"},{kind:"MdxPage",name:"flan",route:"/models/flan",locale:"tr"},{kind:"MdxPage",name:"gpt-4",route:"/models/gpt-4",locale:"tr"},{kind:"MdxPage",name:"llama",route:"/models/llama",locale:"tr"},{kind:"MdxPage",name:"mistral-7b",route:"/models/mistral-7b",locale:"tr"}]},{kind:"MdxPage",name:"models",route:"/models",locale:"tr"},{kind:"MdxPage",name:"notebooks",route:"/notebooks",locale:"tr"},{kind:"MdxPage",name:"papers",route:"/papers",locale:"tr"},{kind:"MdxPage",name:"readings",route:"/readings",locale:"tr"},{kind:"Folder",name:"risks",route:"/risks",children:[{kind:"Meta",locale:"tr",data:{adversarial:"D\xfcşmanca İstemler",factuality:"Ger\xe7eklik",biases:"\xd6nyargılar"}},{kind:"MdxPage",name:"adversarial",route:"/risks/adversarial",locale:"tr"},{kind:"MdxPage",name:"biases",route:"/risks/biases",locale:"tr"},{kind:"MdxPage",name:"factuality",route:"/risks/factuality",locale:"tr"}]},{kind:"MdxPage",name:"risks",route:"/risks",locale:"tr"},{kind:"MdxPage",name:"services",route:"/services",locale:"tr"},{kind:"Folder",name:"techniques",route:"/techniques",children:[{kind:"Meta",locale:"tr",data:{zeroshot:"Sıfır-\xd6rnekli İstem",fewshot:"Az-\xd6rnekli İstem",cot:"D\xfcş\xfcnce Zinciri İstemleri",consistency:"\xd6z-Tutarlılık",knowledge:"\xdcretilmiş Bilgi İstemleri",tot:"D\xfcş\xfcnce Ağacı",rag:"Veri Alımı Artırılmış \xdcretim",art:"Otomatik Akıl Y\xfcr\xfctme ve Ara\xe7 Kullanımı",ape:"Otomatik İstem M\xfchendisi",activeprompt:"Aktif-İstem",dsp:"Y\xf6nlendirici Uyarı İstemi",react:"ReAct",multimodalcot:"\xc7ok Modlu CoT İstemi",graph:"Grafik İstemi"}},{kind:"MdxPage",name:"activeprompt",route:"/techniques/activeprompt",locale:"tr"},{kind:"MdxPage",name:"ape",route:"/techniques/ape",locale:"tr"},{kind:"MdxPage",name:"art",route:"/techniques/art",locale:"tr"},{kind:"MdxPage",name:"consistency",route:"/techniques/consistency",locale:"tr"},{kind:"MdxPage",name:"cot",route:"/techniques/cot",locale:"tr"},{kind:"MdxPage",name:"dsp",route:"/techniques/dsp",locale:"tr"},{kind:"MdxPage",name:"fewshot",route:"/techniques/fewshot",locale:"tr"},{kind:"MdxPage",name:"graph",route:"/techniques/graph",locale:"tr"},{kind:"MdxPage",name:"knowledge",route:"/techniques/knowledge",locale:"tr"},{kind:"MdxPage",name:"multimodalcot",route:"/techniques/multimodalcot",locale:"tr"},{kind:"MdxPage",name:"rag",route:"/techniques/rag",locale:"tr"},{kind:"MdxPage",name:"react",route:"/techniques/react",locale:"tr"},{kind:"MdxPage",name:"tot",route:"/techniques/tot",locale:"tr"},{kind:"MdxPage",name:"zeroshot",route:"/techniques/zeroshot",locale:"tr"}]},{kind:"MdxPage",name:"techniques",route:"/techniques",locale:"tr"},{kind:"MdxPage",name:"tools",route:"/tools",locale:"tr"}],flexsearch:{codeblocks:!0},title:"İstemci Uygulamaları",headings:s},pageNextRoute:"/applications.tr",nextraLayout:i.ZP,themeConfig:l.Z};t.default=(0,r.j)(x)}},function(e){e.O(0,[67892,49774,92888,40179],function(){return e(e.s=70369)}),_N_E=e.O()}]);