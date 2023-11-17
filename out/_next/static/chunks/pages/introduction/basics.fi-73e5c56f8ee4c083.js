(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[58019],{14147:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/introduction/basics.fi",function(){return a(55782)}])},43677:function(e,t,a){"use strict";a.d(t,{Z:function(){return m}});var n=a(11527),i=a(50959),s=a(85274),l=a(5341);function o(e){return(0,n.jsx)("svg",{viewBox:"0 0 24 24",width:"24",height:"24",...e,children:(0,n.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}let r=e=>{let{children:t,className:a,...i}=e;return(0,n.jsx)("button",{className:(0,l.Z)("nextra-button nx-transition-all active:nx-opacity-50","nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-1.5","dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50",a),...i,children:t})};function c(e){return(0,n.jsx)("svg",{viewBox:"0 0 20 20",width:"1em",height:"1em",fill:"currentColor",...e,children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}function x(e){return(0,n.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",...e,children:[(0,n.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}let d=e=>{let{getValue:t,...a}=e,[s,l]=(0,i.useState)(!1);(0,i.useEffect)(()=>{if(!s)return;let e=setTimeout(()=>{l(!1)},2e3);return()=>{clearTimeout(e)}},[s]);let o=(0,i.useCallback)(async()=>{l(!0),(null==navigator?void 0:navigator.clipboard)||console.error("Access to clipboard rejected!");try{await navigator.clipboard.writeText(t())}catch(e){console.error("Failed to copy!")}},[t]);return(0,n.jsx)(r,{onClick:o,title:"Copy code",tabIndex:0,...a,children:(0,n.jsx)(s?c:x,{className:"nextra-copy-icon nx-pointer-events-none nx-h-4 nx-w-4"})})},u=e=>{let{children:t,className:a,hasCopyCode:s=!0,filename:c,...x}=e,u=(0,i.useRef)(null),h=(0,i.useCallback)(()=>{let e=document.documentElement.dataset,t="nextraWordWrap"in e;t?delete e.nextraWordWrap:e.nextraWordWrap=""},[]);return(0,n.jsxs)("div",{className:"nextra-code-block nx-relative nx-mt-6 first:nx-mt-0",children:[c&&(0,n.jsx)("div",{className:"nx-absolute nx-top-0 nx-z-[1] nx-w-full nx-truncate nx-rounded-t-xl nx-bg-primary-700/5 nx-py-2 nx-px-4 nx-text-xs nx-text-gray-700 dark:nx-bg-primary-300/10 dark:nx-text-gray-200",children:c}),(0,n.jsx)("pre",{className:(0,l.Z)("nx-bg-primary-700/5 nx-mb-4 nx-overflow-x-auto nx-rounded-xl nx-subpixel-antialiased dark:nx-bg-primary-300/10 nx-text-[.9em]","contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40",c?"nx-pt-12 nx-pb-4":"nx-py-4",a),ref:u,...x,children:i.isValidElement(t)&&"code"===t.type?t.props.children:t}),(0,n.jsxs)("div",{className:(0,l.Z)("nx-opacity-0 nx-transition [div:hover>&]:nx-opacity-100 focus-within:nx-opacity-100","nx-flex nx-gap-1 nx-absolute nx-m-[11px] nx-right-0",c?"nx-top-8":"nx-top-0"),children:[(0,n.jsx)(r,{onClick:h,className:"md:nx-hidden",title:"Toggle word wrap elvis",children:(0,n.jsx)(o,{className:"nx-pointer-events-none nx-h-4 nx-w-4"})}),s&&(0,n.jsx)(d,{getValue(){var e,t;return(null===(e=null===(t=u.current)||void 0===t?void 0:t.querySelector("code"))||void 0===e?void 0:e.textContent)||""}})]})]})},h={logo:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 206 246",fill:"none",children:[(0,n.jsx)("circle",{cx:"40",cy:"40",r:"40",fill:"currentColor"}),(0,n.jsx)("circle",{cx:"40",cy:"206",r:"40",fill:"currentColor"}),(0,n.jsx)("circle",{cx:"166",cy:"120",r:"40",fill:"currentColor"})]}),(0,n.jsx)("span",{style:{marginLeft:".4em",fontWeight:800},children:"Prompt Engineering Guide"})]}),i18n:[{locale:"en",text:"English"},{locale:"zh",text:"中文"},{locale:"jp",text:"日本語"},{locale:"pt",text:"Portugu\xeas"},{locale:"it",text:"Italian"},{locale:"tr",text:"T\xfcrk\xe7e"},{locale:"es",text:"Espa\xf1ol"},{locale:"fr",text:"Fran\xe7ais"},{locale:"kr",text:"한국어"},{locale:"ca",text:"Catal\xe0"},{locale:"fi",text:"Finnish"},{locale:"ru",text:"Русский"}],head:function(){let{title:e}=(0,s.ZR)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("title",{children:[e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"," "]}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,n.jsx)("meta",{property:"og:title",content:"Prompt Engineering Guide"}),(0,n.jsx)("meta",{property:"og:description",content:"A Comprehensive Overview of Prompt Engineering"}),(0,n.jsx)("meta",{name:"og:title",content:e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"}),(0,n.jsx)("link",{rel:"icon",href:"/144-favicon.svg",type:"image/svg+xml"}),(0,n.jsx)("link",{rel:"icon",href:"/144-favicon-dark.svg",type:"image/svg+xml",media:"(prefers-color-scheme: dark)"})]})},project:{link:"https://github.com/dair-ai/Prompt-Engineering-Guide"},chat:{link:"https://discord.gg/FUyz9vPAwf"},docsRepositoryBase:"https://github.com/dair-ai/Prompt-Engineering-Guide/tree/main/",footer:{text:"Copyright \xa9 2023 DAIR.AI"},search:{placeholder:"Search..."},components:{pre:u}};var m=h},55782:function(e,t,a){"use strict";a.r(t),a.d(t,{__toc:function(){return r}});var n=a(11527),i=a(55411),s=a(85274),l=a(43677);a(20492),a(95178);var o=a(82132);let r=[{depth:2,value:"Peruskehote",id:"peruskehote"},{depth:2,value:"Kehotteen Muotoilu",id:"kehotteen-muotoilu"}];function c(e){let t=Object.assign({h1:"h1",h2:"h2",p:"p",em:"em",pre:"pre",code:"code",span:"span",strong:"strong"},(0,o.a)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{children:"Kehotteiden perusteet"}),"\n",(0,n.jsx)(t.h2,{id:"peruskehote",children:"Peruskehote"}),"\n",(0,n.jsxs)(t.p,{children:["Yksinkertaisilla kehotteilla voi saavuttaa paljon, mutta tulosten laatu riippuu siit\xe4, kuinka paljon tietoa sis\xe4llyt\xe4t kehotteeseen ja kuinka hyvin se on muotoiltu. Kehote voi sis\xe4lt\xe4\xe4 tietoa, kuten ",(0,n.jsx)(t.em,{children:"ohjeen"})," tai ",(0,n.jsx)(t.em,{children:"kysymyksen"}),", sek\xe4 muita yksityiskohtia, kuten ",(0,n.jsx)(t.em,{children:"kontekstia"}),", ",(0,n.jsx)(t.em,{children:"tietosis\xe4lt\xf6\xe4"})," tai ",(0,n.jsx)(t.em,{children:"esimerkkej\xe4"}),". Voit k\xe4ytt\xe4\xe4 n\xe4it\xe4 elementtej\xe4 ohjeistamaan mallia paremmin ja saada parempia tuloksia."]}),"\n",(0,n.jsx)(t.p,{children:"Aloitetaan tarkastelemalla perusesimerkki\xe4 yksinkertaisesta kehotteesta:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Kehote"})}),"\n",(0,n.jsx)(t.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsx)(t.code,{"data-language":"text","data-theme":"default",children:(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"Taivas on"})})})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Tulos:"})}),"\n",(0,n.jsx)(t.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsxs)(t.code,{"data-language":"text","data-theme":"default",children:[(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"sininen. Taivas on sininen johtuen Rayleigh'n sirontailmi\xf6st\xe4. Auringonvalo koostuu monista eri aallonpituuksista, ja kun se kulkee ilmakeh\xe4n l\xe4pi, se kohtaa molekyylej\xe4 ja pienhiukkasia. N\xe4m\xe4 molekyylit ja hiukkaset hajottavat auringonvaloa eri suuntiin. Lyhyemm\xe4t aallonpituudet, kuten sininen ja violetti, hajaantuvat voimakkaammin kuin pidemm\xe4t aallonpituudet, kuten punainen ja keltainen."})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"}})})]})}),"\n",(0,n.jsx)(t.p,{children:'Kuten n\xe4et, kielimalli tuottaa jatkumon merkkijonoja, jotka ovat j\xe4rkevi\xe4 annetussa kontekstissa "Taivas on". Tulos saattaa olla odottamaton tai kaukana siit\xe4 teht\xe4v\xe4st\xe4, jonka haluat saavuttaa.'}),"\n",(0,n.jsx)(t.p,{children:"T\xe4m\xe4 perusesimerkki korostaa my\xf6s tarvetta antaa enemm\xe4n kontekstia tai tarkempia ohjeita siit\xe4, mit\xe4 haluat tarkalleen saavuttaa."}),"\n",(0,n.jsx)(t.p,{children:"Kokeillaan parantaa sit\xe4 hieman:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Kehote:"})}),"\n",(0,n.jsx)(t.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsxs)(t.code,{"data-language":"text","data-theme":"default",children:[(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"T\xe4ydenn\xe4 lause: "})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"Taivas on"})})]})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Tulos:"})}),"\n",(0,n.jsx)(t.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsx)(t.code,{"data-language":"text","data-theme":"default",children:(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"sininen ja pilvet leijailevat kevyesti tuulen mukana, luoden kauniin maiseman."})})})}),"\n",(0,n.jsxs)(t.p,{children:['Onko se parempi? Kyll\xe4, kerroit mallille, ett\xe4 sen pit\xe4\xe4 t\xe4ydent\xe4\xe4 lause, joten tulos n\xe4ytt\xe4\xe4 paljon paremmalta, koska se noudattaa tarkalleen sit\xe4, mit\xe4 kerroit sen tekev\xe4n ("t\xe4ydenn\xe4 lause"). T\xe4m\xe4 l\xe4hestymistapa, jossa mallia\nohjeistetaan suorittamaan teht\xe4v\xe4 optimaalisten kehotteiden avulla, on sit\xe4, mit\xe4 kutsutaan ',(0,n.jsx)(t.strong,{children:"kehotesuunnitteluksi"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Edell\xe4 oleva esimerkki antaa peruskuvauksen siit\xe4, mit\xe4 LLM:ill\xe4 on mahdollista saavuttaa t\xe4n\xe4\xe4n. Nykyiset LLM:t pystyv\xe4t suorittamaan monenlaisia kehittyneit\xe4 teht\xe4vi\xe4, jotka vaihtelevat tekstin tiivist\xe4misest\xe4 matemaattiseen p\xe4\xe4ttelyyn ja koodin luomiseen."}),"\n",(0,n.jsx)(t.h2,{id:"kehotteen-muotoilu",children:"Kehotteen Muotoilu"}),"\n",(0,n.jsx)(t.p,{children:"Edellisess\xe4 esimerkiss\xe4 kokeilimme eritt\xe4in yksinkertaista kehotetta. Tyypillinen kehote on seuraavassa muodossa:"}),"\n",(0,n.jsx)(t.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsx)(t.code,{"data-language":"text","data-theme":"default",children:(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"<Kysymys>?"})})})}),"\n",(0,n.jsx)(t.p,{children:"tai"}),"\n",(0,n.jsx)(t.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsx)(t.code,{"data-language":"text","data-theme":"default",children:(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"<Ohje>"})})})}),"\n",(0,n.jsx)(t.p,{children:"Voit muotoilla t\xe4m\xe4n kysymys-vastaus (QA) -muotoon, joka on standardi monissa QA-aineistoissa, seuraavasti:"}),"\n",(0,n.jsx)(t.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsxs)(t.code,{"data-language":"text","data-theme":"default",children:[(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"Q: <Kysymys>?"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"A: "})})]})}),"\n",(0,n.jsxs)(t.p,{children:["Kun k\xe4yt\xe4t yll\xe4 olevan kaltaista kehotetta, sit\xe4 kutsutaan my\xf6s ",(0,n.jsx)(t.em,{children:"nollaohjauskehotteeksi"}),". T\xe4ll\xf6in annat mallille suoraan kysymyksen, antamatta esimerkkej\xe4 teht\xe4v\xe4st\xe4, jonka haluat sen suorittavan. Jotkut suuret kielimallit pystyv\xe4t toteuttamaan nollaohjauskehotteita, mutta se riippuu teht\xe4v\xe4n monimutkaisuudesta ja sen sis\xe4ll\xf6st\xe4."]}),"\n",(0,n.jsxs)(t.p,{children:["Ottaen huomioon yll\xe4 olevan kehotteenn muotoilun, yksi suosittu ja tehokas kehotetekniikka on ",(0,n.jsx)(t.em,{children:"v\xe4h\xe4isen ohjauksen kehotteen"})," k\xe4ytt\xf6, jossa tarjoat esimerkkej\xe4 halutulle toiminnalle. Voit muotoilla v\xe4h\xe4isen ohjauksen kehotteita seuraavasti:"]}),"\n",(0,n.jsx)(t.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsxs)(t.code,{"data-language":"text","data-theme":"default",children:[(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"<Kysymys>?"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"<Vastaus>"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"<Kysymys>?"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"<Vastaus>"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"<Kysymys>?"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"<Vastaus>"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"<Kysymys>?"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"}})})]})}),"\n",(0,n.jsx)(t.p,{children:"Kysymys/vastaus-tyyliin muotoiltu lopputulos n\xe4ytt\xe4\xe4 t\xe4lt\xe4:"}),"\n",(0,n.jsx)(t.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsxs)(t.code,{"data-language":"text","data-theme":"default",children:[(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"Q: <Kysymys>?"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"A: <Vastaus>"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"Q: <Kysymys>?"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"A: <Vastaus>"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"Q: <Kysymys>?"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"A: <Vastaus>"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"Q: <Kysymys>?"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"A:"})})]})}),"\n",(0,n.jsx)(t.p,{children:"Pid\xe4 mieless\xe4, ett\xe4 kysymys/vastaus-muotoilun k\xe4ytt\xf6 ei ole ainoa tapa muotoilla kehotteita. Kehotteen muoto riippuu teht\xe4v\xe4st\xe4, johon haluat kielimallin keskittyv\xe4n. Esimerkiksi yksinkertaisen luokitteluteht\xe4v\xe4n suorittamiseksi voit antaa esimerkkej\xe4, jotka havainnollistavat teht\xe4v\xe4\xe4 seuraavasti:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Kehote:"})}),"\n",(0,n.jsx)(t.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsxs)(t.code,{"data-language":"text","data-theme":"default",children:[(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"T\xe4m\xe4 on mahtavaa! // Positiivinen"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"T\xe4m\xe4 on huono! // Negatiivinen"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"Vau, tuo elokuva oli upea! // Positiivinen"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"Mik\xe4 kamala esitys! //"})})]})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Tulos:"})}),"\n",(0,n.jsx)(t.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsx)(t.code,{"data-language":"text","data-theme":"default",children:(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"Negatiivinen"})})})}),"\n",(0,n.jsx)(t.p,{children:"V\xe4h\xe4isen ohjauksen kehotteet auttavat mallia oppimaan teht\xe4v\xe4n kontekstista ja tuottamaan parempia tuloksia, koska ne tarjoavat mallille esimerkkej\xe4 siit\xe4, mit\xe4 silt\xe4 odotetaan. T\xe4m\xe4nkaltainen kontekstin avulla tapahtuva oppiminen on yksi kielimallien keskeisist\xe4 ominaisuuksista, kun ne suorittavat erilaisia teht\xe4vi\xe4."})]})}let x={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,o.a)(),e.components);return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/introduction/basics.fi.mdx",route:"/introduction/basics",pageMap:[{kind:"Meta",locale:"fi",data:{index:"Prompt Engineering",introduction:"Introduction",techniques:"Techniques",applications:"Applications",models:"Models",risks:"Risks & Misuses",papers:"Papers",tools:"Tools",notebooks:"Notebooks",datasets:"Datasets",readings:"Additional Readings",course:{title:"Prompt Engineering Course",type:"page"},services:{title:"Services",type:"page"},about:{title:"About",type:"page"}}},{kind:"MdxPage",name:"about",route:"/about",locale:"fi"},{kind:"Folder",name:"applications",route:"/applications",children:[{kind:"Meta",locale:"fi",data:{pal:"Program-Aided Language Models",generating:"Generating Data",coding:"Generating Code",workplace_casestudy:"Graduate Job Classification Case Study",pf:"Prompt Function"}},{kind:"MdxPage",name:"coding",route:"/applications/coding",locale:"fi"},{kind:"MdxPage",name:"generating",route:"/applications/generating",locale:"fi"},{kind:"MdxPage",name:"pal",route:"/applications/pal",locale:"fi"},{kind:"MdxPage",name:"pf",route:"/applications/pf",locale:"fi"},{kind:"MdxPage",name:"workplace_casestudy",route:"/applications/workplace_casestudy",locale:"fi"},{kind:"MdxPage",name:"generating_textbooks",route:"/applications/generating_textbooks",locale:"en"},{kind:"MdxPage",name:"synthetic_rag",route:"/applications/synthetic_rag",locale:"en"}]},{kind:"MdxPage",name:"applications",route:"/applications",locale:"fi"},{kind:"MdxPage",name:"course",route:"/course",locale:"fi"},{kind:"MdxPage",name:"datasets",route:"/datasets",locale:"fi"},{kind:"MdxPage",name:"index",route:"/",locale:"fi"},{kind:"Folder",name:"introduction",route:"/introduction",children:[{kind:"Meta",locale:"fi",data:{settings:"LLM-asetukset",basics:"Kehottamisen perusteet",elements:"Kehotteiden elementit",tips:"Yleisi\xe4 vinkkej\xe4 kehotteiden suunnitteluun",examples:"Esimerkkej\xe4 kehotteista"}},{kind:"MdxPage",name:"basics",route:"/introduction/basics",locale:"fi"},{kind:"MdxPage",name:"elements",route:"/introduction/elements",locale:"fi"},{kind:"MdxPage",name:"examples",route:"/introduction/examples",locale:"fi"},{kind:"MdxPage",name:"settings",route:"/introduction/settings",locale:"fi"},{kind:"MdxPage",name:"tips",route:"/introduction/tips",locale:"fi"}]},{kind:"MdxPage",name:"introduction",route:"/introduction",locale:"fi"},{kind:"Folder",name:"models",route:"/models",children:[{kind:"Meta",locale:"fi",data:{flan:"Flan",chatgpt:"ChatGPT",llama:"LLaMA","gpt-4":"GPT-4","mistral-7b":"Mistral 7B",collection:"Model Collection"}},{kind:"MdxPage",name:"chatgpt",route:"/models/chatgpt",locale:"fi"},{kind:"MdxPage",name:"collection",route:"/models/collection",locale:"fi"},{kind:"MdxPage",name:"flan",route:"/models/flan",locale:"fi"},{kind:"MdxPage",name:"gpt-4",route:"/models/gpt-4",locale:"fi"},{kind:"MdxPage",name:"llama",route:"/models/llama",locale:"fi"},{kind:"MdxPage",name:"mistral-7b",route:"/models/mistral-7b",locale:"fi"}]},{kind:"MdxPage",name:"models",route:"/models",locale:"fi"},{kind:"MdxPage",name:"notebooks",route:"/notebooks",locale:"fi"},{kind:"MdxPage",name:"papers",route:"/papers",locale:"fi"},{kind:"MdxPage",name:"readings",route:"/readings",locale:"fi"},{kind:"Folder",name:"risks",route:"/risks",children:[{kind:"Meta",locale:"fi",data:{adversarial:"Adversarial Prompting",factuality:"Factuality",biases:"Biases"}},{kind:"MdxPage",name:"adversarial",route:"/risks/adversarial",locale:"fi"},{kind:"MdxPage",name:"biases",route:"/risks/biases",locale:"fi"},{kind:"MdxPage",name:"factuality",route:"/risks/factuality",locale:"fi"}]},{kind:"MdxPage",name:"risks",route:"/risks",locale:"fi"},{kind:"MdxPage",name:"services",route:"/services",locale:"fi"},{kind:"Folder",name:"techniques",route:"/techniques",children:[{kind:"Meta",locale:"fi",data:{zeroshot:"Zero-shot Prompting",fewshot:"Few-shot Prompting",cot:"Chain-of-Thought Prompting",consistency:"Self-Consistency",knowledge:"Generate Knowledge Prompting",tot:"Tree of Thoughts",rag:"Retrieval Augmented Generation",art:"Automatic Reasoning and Tool-use",ape:"Automatic Prompt Engineer",activeprompt:"Active-Prompt",dsp:"Directional Stimulus Prompting",react:"ReAct",multimodalcot:"Multimodal CoT",graph:"Graph Prompting"}},{kind:"MdxPage",name:"activeprompt",route:"/techniques/activeprompt",locale:"fi"},{kind:"MdxPage",name:"ape",route:"/techniques/ape",locale:"fi"},{kind:"MdxPage",name:"art",route:"/techniques/art",locale:"fi"},{kind:"MdxPage",name:"consistency",route:"/techniques/consistency",locale:"fi"},{kind:"MdxPage",name:"cot",route:"/techniques/cot",locale:"fi"},{kind:"MdxPage",name:"dsp",route:"/techniques/dsp",locale:"fi"},{kind:"MdxPage",name:"fewshot",route:"/techniques/fewshot",locale:"fi"},{kind:"MdxPage",name:"graph",route:"/techniques/graph",locale:"fi"},{kind:"MdxPage",name:"knowledge",route:"/techniques/knowledge",locale:"fi"},{kind:"MdxPage",name:"multimodalcot",route:"/techniques/multimodalcot",locale:"fi"},{kind:"MdxPage",name:"rag",route:"/techniques/rag",locale:"fi"},{kind:"MdxPage",name:"react",route:"/techniques/react",locale:"fi"},{kind:"MdxPage",name:"tot",route:"/techniques/tot",locale:"fi"},{kind:"MdxPage",name:"zeroshot",route:"/techniques/zeroshot",locale:"fi"}]},{kind:"MdxPage",name:"techniques",route:"/techniques",locale:"fi"},{kind:"MdxPage",name:"tools",route:"/tools",locale:"fi"}],flexsearch:{codeblocks:!0},title:"Kehotteiden perusteet",headings:r},pageNextRoute:"/introduction/basics.fi",nextraLayout:s.ZP,themeConfig:l.Z};t.default=(0,i.j)(x)}},function(e){e.O(0,[67892,49774,92888,40179],function(){return e(e.s=14147)}),_N_E=e.O()}]);