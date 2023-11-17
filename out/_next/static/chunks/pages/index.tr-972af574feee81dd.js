(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[56420],{91191:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/index.tr",function(){return t(75022)}])},43677:function(e,i,t){"use strict";t.d(i,{Z:function(){return k}});var a=t(11527),n=t(50959),r=t(85274),l=t(5341);function o(e){return(0,a.jsx)("svg",{viewBox:"0 0 24 24",width:"24",height:"24",...e,children:(0,a.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}let s=e=>{let{children:i,className:t,...n}=e;return(0,a.jsx)("button",{className:(0,l.Z)("nextra-button nx-transition-all active:nx-opacity-50","nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-1.5","dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50",t),...n,children:i})};function c(e){return(0,a.jsx)("svg",{viewBox:"0 0 20 20",width:"1em",height:"1em",fill:"currentColor",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}function d(e){return(0,a.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",...e,children:[(0,a.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,a.jsx)("path",{d:"M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}let x=e=>{let{getValue:i,...t}=e,[r,l]=(0,n.useState)(!1);(0,n.useEffect)(()=>{if(!r)return;let e=setTimeout(()=>{l(!1)},2e3);return()=>{clearTimeout(e)}},[r]);let o=(0,n.useCallback)(async()=>{l(!0),(null==navigator?void 0:navigator.clipboard)||console.error("Access to clipboard rejected!");try{await navigator.clipboard.writeText(i())}catch(e){console.error("Failed to copy!")}},[i]);return(0,a.jsx)(s,{onClick:o,title:"Copy code",tabIndex:0,...t,children:(0,a.jsx)(r?c:d,{className:"nextra-copy-icon nx-pointer-events-none nx-h-4 nx-w-4"})})},m=e=>{let{children:i,className:t,hasCopyCode:r=!0,filename:c,...d}=e,m=(0,n.useRef)(null),u=(0,n.useCallback)(()=>{let e=document.documentElement.dataset,i="nextraWordWrap"in e;i?delete e.nextraWordWrap:e.nextraWordWrap=""},[]);return(0,a.jsxs)("div",{className:"nextra-code-block nx-relative nx-mt-6 first:nx-mt-0",children:[c&&(0,a.jsx)("div",{className:"nx-absolute nx-top-0 nx-z-[1] nx-w-full nx-truncate nx-rounded-t-xl nx-bg-primary-700/5 nx-py-2 nx-px-4 nx-text-xs nx-text-gray-700 dark:nx-bg-primary-300/10 dark:nx-text-gray-200",children:c}),(0,a.jsx)("pre",{className:(0,l.Z)("nx-bg-primary-700/5 nx-mb-4 nx-overflow-x-auto nx-rounded-xl nx-subpixel-antialiased dark:nx-bg-primary-300/10 nx-text-[.9em]","contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40",c?"nx-pt-12 nx-pb-4":"nx-py-4",t),ref:m,...d,children:n.isValidElement(i)&&"code"===i.type?i.props.children:i}),(0,a.jsxs)("div",{className:(0,l.Z)("nx-opacity-0 nx-transition [div:hover>&]:nx-opacity-100 focus-within:nx-opacity-100","nx-flex nx-gap-1 nx-absolute nx-m-[11px] nx-right-0",c?"nx-top-8":"nx-top-0"),children:[(0,a.jsx)(s,{onClick:u,className:"md:nx-hidden",title:"Toggle word wrap elvis",children:(0,a.jsx)(o,{className:"nx-pointer-events-none nx-h-4 nx-w-4"})}),r&&(0,a.jsx)(x,{getValue(){var e,i;return(null===(e=null===(i=m.current)||void 0===i?void 0:i.querySelector("code"))||void 0===e?void 0:e.textContent)||""}})]})]})},u={logo:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 206 246",fill:"none",children:[(0,a.jsx)("circle",{cx:"40",cy:"40",r:"40",fill:"currentColor"}),(0,a.jsx)("circle",{cx:"40",cy:"206",r:"40",fill:"currentColor"}),(0,a.jsx)("circle",{cx:"166",cy:"120",r:"40",fill:"currentColor"})]}),(0,a.jsx)("span",{style:{marginLeft:".4em",fontWeight:800},children:"Prompt Engineering Guide"})]}),i18n:[{locale:"en",text:"English"},{locale:"zh",text:"中文"},{locale:"jp",text:"日本語"},{locale:"pt",text:"Portugu\xeas"},{locale:"it",text:"Italian"},{locale:"tr",text:"T\xfcrk\xe7e"},{locale:"es",text:"Espa\xf1ol"},{locale:"fr",text:"Fran\xe7ais"},{locale:"kr",text:"한국어"},{locale:"ca",text:"Catal\xe0"},{locale:"fi",text:"Finnish"},{locale:"ru",text:"Русский"}],head:function(){let{title:e}=(0,r.ZR)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("title",{children:[e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"," "]}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,a.jsx)("meta",{property:"og:title",content:"Prompt Engineering Guide"}),(0,a.jsx)("meta",{property:"og:description",content:"A Comprehensive Overview of Prompt Engineering"}),(0,a.jsx)("meta",{name:"og:title",content:e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"}),(0,a.jsx)("link",{rel:"icon",href:"/144-favicon.svg",type:"image/svg+xml"}),(0,a.jsx)("link",{rel:"icon",href:"/144-favicon-dark.svg",type:"image/svg+xml",media:"(prefers-color-scheme: dark)"})]})},project:{link:"https://github.com/dair-ai/Prompt-Engineering-Guide"},chat:{link:"https://discord.gg/FUyz9vPAwf"},docsRepositoryBase:"https://github.com/dair-ai/Prompt-Engineering-Guide/tree/main/",footer:{text:"Copyright \xa9 2023 DAIR.AI"},search:{placeholder:"Search..."},components:{pre:m}};var k=u},75022:function(e,i,t){"use strict";t.r(i),t.d(i,{__toc:function(){return s}});var a=t(11527),n=t(55411),r=t(85274),l=t(43677);t(20492),t(95178);var o=t(82132);let s=[];function c(e){let i=Object.assign({h1:"h1",p:"p",hr:"hr",a:"a"},(0,o.a)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.h1,{children:"İstem M\xfchendisliği Kılavuzu"}),"\n",(0,a.jsx)(i.p,{children:"İstem m\xfchendisliği, dil modellerini (LM'ler) \xe7eşitli uygulamalar ve araştırma konuları i\xe7in etkin bir şekilde kullanmak \xfczere istemlerin geliştirilmesi ve optimize edilmesi i\xe7in nispeten yeni bir disiplindir. İstem m\xfchendisliği becerileri, b\xfcy\xfck dil modellerinin (LLM) yeteneklerini ve sınırlamalarını daha iyi anlamayı sağlar."}),"\n",(0,a.jsx)(i.p,{children:"Araştırmacılar, LLM'lerin kapasitesini soru cevaplama ve aritmetik akıl y\xfcr\xfctme gibi \xe7eşitli basit ve karmaşık g\xf6revlerde artırmak i\xe7in istem m\xfchendisliğini kullanır. Geliştiriciler, LLM'ler ve diğer ara\xe7larla aray\xfcz sağlayan sağlam ve etkili istem teknikleri tasarlamak i\xe7in istem m\xfchendisliğini kullanır."}),"\n",(0,a.jsx)(i.p,{children:"İstem m\xfchendisliği sadece istemlerin tasarlanması ve geliştirilmesi hakkında değildir. LLM'lerle etkileşim ve geliştirme i\xe7in faydalı olan geniş bir beceri ve teknik yelpazesini kapsar. LLM'lerle aray\xfcz kurma, bunlarla birlikte \xe7alışma ve yeteneklerini anlama becerisi \xf6nemli bir beceridir. İstem m\xfchendisliğini, LLM'lerin g\xfcvenliğini artırmak ve alan bilgisi ve dış ara\xe7larla LLM'leri geliştirmek gibi yeni yetenekler oluşturmak i\xe7in kullanabilirsiniz."}),"\n",(0,a.jsx)(i.p,{children:"LLM'lerle geliştirme konusunda y\xfcksek ilgi nedeniyle, istem m\xfchendisliği ile ilgili t\xfcm son makaleleri, \xf6ğrenme rehberlerini, modelleri, dersleri, referansları, yeni LLM yeteneklerini ve ara\xe7ları i\xe7eren yeni bir istem m\xfchendisliği kılavuzu oluşturduk."}),"\n",(0,a.jsx)(i.hr,{}),"\n",(0,a.jsxs)(i.p,{children:["Y\xfcksek talep nedeniyle, ",(0,a.jsx)(i.a,{href:"https://maven.com/dair-ai/prompt-engineering-llms",children:"LLM'ler i\xe7in İstem M\xfchendisliği \xfczerine kohort tabanlı yeni bir kurs"})," sunmak \xfczere Maven ile iş birliği yapmış bulunmaktayız."]}),"\n",(0,a.jsxs)(i.p,{children:["Meta AI ve Elastic gibi şirketlerde \xe7alışmış ve AI ve LLM'ler konusunda yılların deneyimine sahip olan ",(0,a.jsx)(i.a,{href:"https://www.linkedin.com/in/omarsar/",children:"Elvis Saravia"}),", bu kursun \xf6ğretmeni olacak."]}),"\n",(0,a.jsx)(i.p,{children:"Bu uygulamalı kurs, b\xfcy\xfck dil modelleri (LLM'ler) ile etkili bir şekilde \xe7alışma ve bu modellerle birlikte yaratma i\xe7in istem m\xfchendisliği teknikleri/ara\xe7ları, kullanım durumları, egzersizleri ve projeleri kapsayacaktır."}),"\n",(0,a.jsx)(i.p,{children:"Ge\xe7miş \xf6ğrencilerimiz, LinkedIn, Amazon, JPMorgan Chase & Co., Intuit, Fidelity Investments, Coinbase, Guru ve bir\xe7ok diğer organizasyonda yazılım m\xfchendisi, AI araştırmacısı ve uygulayıcısı gibi \xe7eşitli kişilerden oluşmaktadır."})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:i}=Object.assign({},(0,o.a)(),e.components);return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/index.tr.mdx",route:"/",timestamp:1693344886e3,pageMap:[{kind:"Meta",locale:"tr",data:{index:"İstem M\xfchendisliği",introduction:"Giriş",techniques:"Teknikler",applications:"Uygulamalar",models:"Modeller",risks:"Riskler ve K\xf6t\xfcye Kullanımlar",papers:"Makaleler",tools:"Ara\xe7lar",notebooks:"Notlar",datasets:"Veri K\xfcmeleri",readings:"Ek Okumalar",course:{title:"İstem M\xfchendisliği Kursu",type:"page"},services:{title:"Hizmetler",type:"page"},about:{title:"Hakkında",type:"page"}}},{kind:"MdxPage",name:"about",route:"/about",locale:"tr"},{kind:"Folder",name:"applications",route:"/applications",children:[{kind:"Meta",locale:"tr",data:{pal:"Program Destekli Dil Modelleri",generating:"Veri \xdcretimi",coding:"Kod \xdcretimi",workplace_casestudy:"Lisans\xfcst\xfc İş Sınıflandırması Vaka \xc7alışması",pf:"İstem Fonksiyonu"}},{kind:"MdxPage",name:"coding",route:"/applications/coding",locale:"tr"},{kind:"MdxPage",name:"generating",route:"/applications/generating",locale:"tr"},{kind:"MdxPage",name:"pal",route:"/applications/pal",locale:"tr"},{kind:"MdxPage",name:"pf",route:"/applications/pf",locale:"tr"},{kind:"MdxPage",name:"workplace_casestudy",route:"/applications/workplace_casestudy",locale:"tr"},{kind:"MdxPage",name:"generating_textbooks",route:"/applications/generating_textbooks",locale:"en"},{kind:"MdxPage",name:"synthetic_rag",route:"/applications/synthetic_rag",locale:"en"}]},{kind:"MdxPage",name:"applications",route:"/applications",locale:"tr"},{kind:"MdxPage",name:"course",route:"/course",locale:"tr"},{kind:"MdxPage",name:"datasets",route:"/datasets",locale:"tr"},{kind:"MdxPage",name:"index",route:"/",locale:"tr"},{kind:"Folder",name:"introduction",route:"/introduction",children:[{kind:"Meta",locale:"tr",data:{settings:"LLM Ayarları",basics:"İstemlerin Temelleri",elements:"Bir İstemin Unsurları",tips:"İstemlerin Tasarlanması İ\xe7in Genel İpu\xe7ları",examples:"\xd6rnek İstemler"}},{kind:"MdxPage",name:"basics",route:"/introduction/basics",locale:"tr"},{kind:"MdxPage",name:"elements",route:"/introduction/elements",locale:"tr"},{kind:"MdxPage",name:"examples",route:"/introduction/examples",locale:"tr"},{kind:"MdxPage",name:"settings",route:"/introduction/settings",locale:"tr"},{kind:"MdxPage",name:"tips",route:"/introduction/tips",locale:"tr"}]},{kind:"MdxPage",name:"introduction",route:"/introduction",locale:"tr"},{kind:"Folder",name:"models",route:"/models",children:[{kind:"Meta",locale:"tr",data:{flan:"Flan",chatgpt:"ChatGPT",llama:"LLaMA","gpt-4":"GPT-4","mistral-7b":"Mistral 7B",collection:"LLM Koleksiyonu"}},{kind:"MdxPage",name:"chatgpt",route:"/models/chatgpt",locale:"tr"},{kind:"MdxPage",name:"collection",route:"/models/collection",locale:"tr"},{kind:"MdxPage",name:"flan",route:"/models/flan",locale:"tr"},{kind:"MdxPage",name:"gpt-4",route:"/models/gpt-4",locale:"tr"},{kind:"MdxPage",name:"llama",route:"/models/llama",locale:"tr"},{kind:"MdxPage",name:"mistral-7b",route:"/models/mistral-7b",locale:"tr"}]},{kind:"MdxPage",name:"models",route:"/models",locale:"tr"},{kind:"MdxPage",name:"notebooks",route:"/notebooks",locale:"tr"},{kind:"MdxPage",name:"papers",route:"/papers",locale:"tr"},{kind:"MdxPage",name:"readings",route:"/readings",locale:"tr"},{kind:"Folder",name:"risks",route:"/risks",children:[{kind:"Meta",locale:"tr",data:{adversarial:"D\xfcşmanca İstemler",factuality:"Ger\xe7eklik",biases:"\xd6nyargılar"}},{kind:"MdxPage",name:"adversarial",route:"/risks/adversarial",locale:"tr"},{kind:"MdxPage",name:"biases",route:"/risks/biases",locale:"tr"},{kind:"MdxPage",name:"factuality",route:"/risks/factuality",locale:"tr"}]},{kind:"MdxPage",name:"risks",route:"/risks",locale:"tr"},{kind:"MdxPage",name:"services",route:"/services",locale:"tr"},{kind:"Folder",name:"techniques",route:"/techniques",children:[{kind:"Meta",locale:"tr",data:{zeroshot:"Sıfır-\xd6rnekli İstem",fewshot:"Az-\xd6rnekli İstem",cot:"D\xfcş\xfcnce Zinciri İstemleri",consistency:"\xd6z-Tutarlılık",knowledge:"\xdcretilmiş Bilgi İstemleri",tot:"D\xfcş\xfcnce Ağacı",rag:"Veri Alımı Artırılmış \xdcretim",art:"Otomatik Akıl Y\xfcr\xfctme ve Ara\xe7 Kullanımı",ape:"Otomatik İstem M\xfchendisi",activeprompt:"Aktif-İstem",dsp:"Y\xf6nlendirici Uyarı İstemi",react:"ReAct",multimodalcot:"\xc7ok Modlu CoT İstemi",graph:"Grafik İstemi"}},{kind:"MdxPage",name:"activeprompt",route:"/techniques/activeprompt",locale:"tr"},{kind:"MdxPage",name:"ape",route:"/techniques/ape",locale:"tr"},{kind:"MdxPage",name:"art",route:"/techniques/art",locale:"tr"},{kind:"MdxPage",name:"consistency",route:"/techniques/consistency",locale:"tr"},{kind:"MdxPage",name:"cot",route:"/techniques/cot",locale:"tr"},{kind:"MdxPage",name:"dsp",route:"/techniques/dsp",locale:"tr"},{kind:"MdxPage",name:"fewshot",route:"/techniques/fewshot",locale:"tr"},{kind:"MdxPage",name:"graph",route:"/techniques/graph",locale:"tr"},{kind:"MdxPage",name:"knowledge",route:"/techniques/knowledge",locale:"tr"},{kind:"MdxPage",name:"multimodalcot",route:"/techniques/multimodalcot",locale:"tr"},{kind:"MdxPage",name:"rag",route:"/techniques/rag",locale:"tr"},{kind:"MdxPage",name:"react",route:"/techniques/react",locale:"tr"},{kind:"MdxPage",name:"tot",route:"/techniques/tot",locale:"tr"},{kind:"MdxPage",name:"zeroshot",route:"/techniques/zeroshot",locale:"tr"}]},{kind:"MdxPage",name:"techniques",route:"/techniques",locale:"tr"},{kind:"MdxPage",name:"tools",route:"/tools",locale:"tr"}],flexsearch:{codeblocks:!0},title:"İstem M\xfchendisliği Kılavuzu",headings:s},pageNextRoute:"/index.tr",nextraLayout:r.ZP,themeConfig:l.Z};i.default=(0,n.j)(d)}},function(e){e.O(0,[67892,49774,92888,40179],function(){return e(e.s=91191)}),_N_E=e.O()}]);