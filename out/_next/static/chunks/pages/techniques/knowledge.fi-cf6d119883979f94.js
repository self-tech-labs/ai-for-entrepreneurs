(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[60438],{49258:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/techniques/knowledge.fi",function(){return t(97459)}])},19205:function(e,a){"use strict";a.Z={src:"/_next/static/media/gen-knowledge.055b8d37.png",height:511,width:793,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAbUlEQVR42iXB0Q6CMAwF0P3/P/kXRk1MeBA0Ctm6du1tCYP4wDlpbWJECpfXVaZbUxNjrEheKy9zJsbn7r+nmrOpBpICc86lFPPo+wHTyNOGlpjoO45ExLV6hKm0xyXKOynRMgwiAuA47b337Q9/onEI421g2QAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5}},41667:function(e,a,t){"use strict";t.d(a,{w:function(){return o}});var i=t(11527),n=t(5341),l=t(76484),s=t.n(l);function o(e){let{src:a,alt:t,full:l}=e;return(0,i.jsx)("div",{className:(0,n.Z)("mt-6 -mb-4 flex justify-center overflow-hidden rounded-xl border dark:border-zinc-800",l?"bg-white":"bg-zinc-100"),children:(0,i.jsx)(s(),{src:a,alt:t,className:(0,n.Z)("w-auto select-none bg-white",l?"":"ring-1 ring-gray-200")})})}},43677:function(e,a,t){"use strict";t.d(a,{Z:function(){return h}});var i=t(11527),n=t(50959),l=t(85274),s=t(5341);function o(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",width:"24",height:"24",...e,children:(0,i.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}let r=e=>{let{children:a,className:t,...n}=e;return(0,i.jsx)("button",{className:(0,s.Z)("nextra-button nx-transition-all active:nx-opacity-50","nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-1.5","dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50",t),...n,children:a})};function x(e){return(0,i.jsx)("svg",{viewBox:"0 0 20 20",width:"1em",height:"1em",fill:"currentColor",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}function c(e){return(0,i.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",...e,children:[(0,i.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,i.jsx)("path",{d:"M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}let d=e=>{let{getValue:a,...t}=e,[l,s]=(0,n.useState)(!1);(0,n.useEffect)(()=>{if(!l)return;let e=setTimeout(()=>{s(!1)},2e3);return()=>{clearTimeout(e)}},[l]);let o=(0,n.useCallback)(async()=>{s(!0),(null==navigator?void 0:navigator.clipboard)||console.error("Access to clipboard rejected!");try{await navigator.clipboard.writeText(a())}catch(e){console.error("Failed to copy!")}},[a]);return(0,i.jsx)(r,{onClick:o,title:"Copy code",tabIndex:0,...t,children:(0,i.jsx)(l?x:c,{className:"nextra-copy-icon nx-pointer-events-none nx-h-4 nx-w-4"})})},u=e=>{let{children:a,className:t,hasCopyCode:l=!0,filename:x,...c}=e,u=(0,n.useRef)(null),m=(0,n.useCallback)(()=>{let e=document.documentElement.dataset,a="nextraWordWrap"in e;a?delete e.nextraWordWrap:e.nextraWordWrap=""},[]);return(0,i.jsxs)("div",{className:"nextra-code-block nx-relative nx-mt-6 first:nx-mt-0",children:[x&&(0,i.jsx)("div",{className:"nx-absolute nx-top-0 nx-z-[1] nx-w-full nx-truncate nx-rounded-t-xl nx-bg-primary-700/5 nx-py-2 nx-px-4 nx-text-xs nx-text-gray-700 dark:nx-bg-primary-300/10 dark:nx-text-gray-200",children:x}),(0,i.jsx)("pre",{className:(0,s.Z)("nx-bg-primary-700/5 nx-mb-4 nx-overflow-x-auto nx-rounded-xl nx-subpixel-antialiased dark:nx-bg-primary-300/10 nx-text-[.9em]","contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40",x?"nx-pt-12 nx-pb-4":"nx-py-4",t),ref:u,...c,children:n.isValidElement(a)&&"code"===a.type?a.props.children:a}),(0,i.jsxs)("div",{className:(0,s.Z)("nx-opacity-0 nx-transition [div:hover>&]:nx-opacity-100 focus-within:nx-opacity-100","nx-flex nx-gap-1 nx-absolute nx-m-[11px] nx-right-0",x?"nx-top-8":"nx-top-0"),children:[(0,i.jsx)(r,{onClick:m,className:"md:nx-hidden",title:"Toggle word wrap elvis",children:(0,i.jsx)(o,{className:"nx-pointer-events-none nx-h-4 nx-w-4"})}),l&&(0,i.jsx)(d,{getValue(){var e,a;return(null===(e=null===(a=u.current)||void 0===a?void 0:a.querySelector("code"))||void 0===e?void 0:e.textContent)||""}})]})]})},m={logo:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 206 246",fill:"none",children:[(0,i.jsx)("circle",{cx:"40",cy:"40",r:"40",fill:"currentColor"}),(0,i.jsx)("circle",{cx:"40",cy:"206",r:"40",fill:"currentColor"}),(0,i.jsx)("circle",{cx:"166",cy:"120",r:"40",fill:"currentColor"})]}),(0,i.jsx)("span",{style:{marginLeft:".4em",fontWeight:800},children:"Prompt Engineering Guide"})]}),i18n:[{locale:"en",text:"English"},{locale:"zh",text:"中文"},{locale:"jp",text:"日本語"},{locale:"pt",text:"Portugu\xeas"},{locale:"it",text:"Italian"},{locale:"tr",text:"T\xfcrk\xe7e"},{locale:"es",text:"Espa\xf1ol"},{locale:"fr",text:"Fran\xe7ais"},{locale:"kr",text:"한국어"},{locale:"ca",text:"Catal\xe0"},{locale:"fi",text:"Finnish"},{locale:"ru",text:"Русский"}],head:function(){let{title:e}=(0,l.ZR)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("title",{children:[e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"," "]}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,i.jsx)("meta",{property:"og:title",content:"Prompt Engineering Guide"}),(0,i.jsx)("meta",{property:"og:description",content:"A Comprehensive Overview of Prompt Engineering"}),(0,i.jsx)("meta",{name:"og:title",content:e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"}),(0,i.jsx)("link",{rel:"icon",href:"/144-favicon.svg",type:"image/svg+xml"}),(0,i.jsx)("link",{rel:"icon",href:"/144-favicon-dark.svg",type:"image/svg+xml",media:"(prefers-color-scheme: dark)"})]})},project:{link:"https://github.com/dair-ai/Prompt-Engineering-Guide"},chat:{link:"https://discord.gg/FUyz9vPAwf"},docsRepositoryBase:"https://github.com/dair-ai/Prompt-Engineering-Guide/tree/main/",footer:{text:"Copyright \xa9 2023 DAIR.AI"},search:{placeholder:"Search..."},components:{pre:u}};var h=m},97459:function(e,a,t){"use strict";t.r(a),t.d(a,{__toc:function(){return c}});var i=t(11527),n=t(55411),l=t(85274),s=t(43677);t(20492),t(95178);var o=t(82132),r=t(41667),x=t(19205);let c=[];function d(e){let a=Object.assign({h1:"h1",p:"p",a:"a",em:"em",pre:"pre",code:"code",span:"span"},(0,o.a)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.h1,{children:"Tuotettu Tiet\xe4myskehote"}),"\n","\n",(0,i.jsx)(r.w,{src:x.Z,alt:"GENKNOW"}),"\n",(0,i.jsxs)(a.p,{children:["Kuvan l\xe4hde: ",(0,i.jsx)(a.a,{href:"https://arxiv.org/pdf/2110.08387.pdf",children:"Liu ym. 2022"})]}),"\n",(0,i.jsx)(a.p,{children:"LLM:t kehittyv\xe4t jatkuvasti, ja yksi suosittu tekniikka on tietojen tai informaation sis\xe4llytt\xe4minen, mik\xe4 auttaa mallia tekem\xe4\xe4n tarkempia ennusteita."}),"\n",(0,i.jsxs)(a.p,{children:["K\xe4ytt\xe4en samankaltaista ideaa, voisiko mallia k\xe4ytt\xe4\xe4 my\xf6s tiedon tuottamiseen ennen ennusteen tekemist\xe4? T\xe4t\xe4 yritet\xe4\xe4n ",(0,i.jsx)(a.a,{href:"https://arxiv.org/pdf/2110.08387.pdf",children:"Liu ym. 2022"}),"-artikkelissa -- tuottaa tietoa, jota k\xe4ytet\xe4\xe4n osana kehotetta. Erityist\xe4 huomiota kiinnitettiin siihen, kuinka hy\xf6dyllist\xe4 t\xe4m\xe4 on teht\xe4viss\xe4, jotka vaativat maalaisj\xe4rke\xe4."]}),"\n",(0,i.jsx)(a.p,{children:"Kokeillaan yksinkertaista kehotetta:"}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.em,{children:"Kehote:"})}),"\n",(0,i.jsx)(a.pre,{"data-language":"text","data-theme":"default",children:(0,i.jsx)(a.code,{"data-language":"text","data-theme":"default",children:(0,i.jsx)(a.span,{className:"line",children:(0,i.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Onko golfin tavoitteena saada enemm\xe4n pisteit\xe4 kuin muilla? Kyll\xe4 vai ei?"})})})}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.em,{children:"Tulos:"})}),"\n",(0,i.jsx)(a.pre,{"data-language":"text","data-theme":"default",children:(0,i.jsx)(a.code,{"data-language":"text","data-theme":"default",children:(0,i.jsx)(a.span,{className:"line",children:(0,i.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Kyll\xe4, golfin tavoitteena on saada v\xe4hemm\xe4n pisteit\xe4 kuin muut pelaajat. Golfissa pelin voittaja on se pelaaja, jolla on v\xe4hiten ly\xf6ntej\xe4 rei\xe4n l\xe4p\xe4isemiseen. Jokaisesta ly\xf6nnist\xe4 pelaajalle kertyy yksi piste, joten v\xe4hemm\xe4n ly\xf6ntej\xe4 tarkoittaa v\xe4hemm\xe4n pisteit\xe4. T\xe4m\xe4n vuoksi golfin tavoitteena onkin saada v\xe4hemm\xe4n pisteit\xe4 kuin muut pelaajat."})})})}),"\n",(0,i.jsx)(a.p,{children:"T\xe4m\xe4ntyyppiset virheet paljastavat LLM:ien rajoitukset teht\xe4viss\xe4, jotka vaativat laajempaa tietoa maailmasta. Kuinka voimme parantaa t\xe4t\xe4 tiedon tuottamisen avulla?"}),"\n",(0,i.jsx)(a.p,{children:'Ensin tuotamme muutamia "tietoja":'}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.em,{children:"Kehote:"})}),"\n",(0,i.jsx)(a.pre,{"data-language":"text","data-theme":"default",children:(0,i.jsxs)(a.code,{"data-language":"text","data-theme":"default",children:[(0,i.jsx)(a.span,{className:"line",children:(0,i.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Sy\xf6te: Kreikka on suurempi kuin Meksiko."})}),"\n",(0,i.jsx)(a.span,{className:"line",children:(0,i.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Tieto: Kreikka on noin 131 957 neli\xf6kilometri\xe4, kun taas Meksiko on noin 1 964 375 neli\xf6kilometri\xe4, mik\xe4 tekee Meksikosta 1 389 % suuremman kuin Kreikka."})}),"\n",(0,i.jsx)(a.span,{className:"line",children:(0,i.jsx)(a.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,i.jsx)(a.span,{className:"line",children:(0,i.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Sy\xf6te: Lasit huurtuvat aina."})}),"\n",(0,i.jsx)(a.span,{className:"line",children:(0,i.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Tieto: Kosteus tiivistyy silm\xe4lasien linsseihin, kun vesih\xf6yry hiest\xe4si, hengityksest\xe4si ja ymp\xe4r\xf6iv\xe4st\xe4 ilmankosteudesta laskeutuu kylm\xe4lle pinnalle, j\xe4\xe4htyy ja muuttuu pieniksi vesipisaroiksi, muodostaen kalvon, jonka n\xe4et huuruna. Linssisi ovat suhteellisen viile\xe4t verrattuna hengitykseesi, erityisesti kun ulkoilma on kylm\xe4."})}),"\n",(0,i.jsx)(a.span,{className:"line",children:(0,i.jsx)(a.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,i.jsx)(a.span,{className:"line",children:(0,i.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Sy\xf6te: Kala pystyy ajattelemaan."})}),"\n",(0,i.jsx)(a.span,{className:"line",children:(0,i.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Tieto: Kalat ovat \xe4lykk\xe4\xe4mpi\xe4 kuin milt\xe4 ne n\xe4ytt\xe4v\xe4t. Monilla alueilla, kuten muistissa, niiden kognitiiviset kyvyt vastaavat tai ylitt\xe4v\xe4t ”korkeampien” selk\xe4rankaisten, kuten ei-ihmisapinoiden, kyvyt. Kalojen pitk\xe4aikainen muisti auttaa niit\xe4 seuraamaan monimutkaisia sosiaalisia suhteita."})}),"\n",(0,i.jsx)(a.span,{className:"line",children:(0,i.jsx)(a.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,i.jsx)(a.span,{className:"line",children:(0,i.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Sy\xf6te: Tupakoinnin yleinen vaikutus elinaikana on suurempi kuin normaali riski saada keuhkosy\xf6p\xe4."})}),"\n",(0,i.jsx)(a.span,{className:"line",children:(0,i.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Tieto: Ne, jotka johdonmukaisesti tupakoivat keskim\xe4\xe4rin v\xe4hemm\xe4n kuin yhden savukkeen p\xe4iv\xe4ss\xe4 elinaikanaan, olivat yhdeks\xe4n kertaa suuremmassa riskiss\xe4 kuolla keuhkosy\xf6p\xe4\xe4n kuin tupakoimattomat. Niill\xe4, jotka polttivat yhden ja 10 savuketta p\xe4iv\xe4ss\xe4, riski kuolla keuhkosy\xf6p\xe4\xe4n oli l\xe4hes 12 kertaa suurempi kuin tupakoimattomilla."})}),"\n",(0,i.jsx)(a.span,{className:"line",children:(0,i.jsx)(a.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,i.jsx)(a.span,{className:"line",children:(0,i.jsx)(a.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,i.jsx)(a.span,{className:"line",children:(0,i.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Sy\xf6te: Golfin osana on yritt\xe4\xe4 saada enemm\xe4n pisteit\xe4 kuin muilla."})}),"\n",(0,i.jsx)(a.span,{className:"line",children:(0,i.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Tieto:"})})]})}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.em,{children:"Tieto 1:"})}),"\n",(0,i.jsx)(a.pre,{"data-language":"text","data-theme":"default",children:(0,i.jsx)(a.code,{"data-language":"text","data-theme":"default",children:(0,i.jsx)(a.span,{className:"line",children:(0,i.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Golfissa tavoitteena on saada mahdollisimman v\xe4h\xe4n ly\xf6ntej\xe4 kierroksen aikana. Pelaaja, jolla on v\xe4hiten ly\xf6ntej\xe4, voittaa. Eli oikeastaan golfin tavoite on saada pienempi pistem\xe4\xe4r\xe4 kuin muilla."})})})}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.em,{children:"Tieto 2:"})}),"\n",(0,i.jsx)(a.pre,{"data-language":"text","data-theme":"default",children:(0,i.jsx)(a.code,{"data-language":"text","data-theme":"default",children:(0,i.jsx)(a.span,{className:"line",children:(0,i.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Golfin tavoitteena on saavuttaa mahdollisimman v\xe4h\xe4n ly\xf6ntej\xe4 pelikent\xe4n l\xe4pi ja saada siten mahdollisimman alhainen kokonaispistem\xe4\xe4r\xe4. Golfkent\xe4ll\xe4 on erilaisia esteit\xe4 ja haasteita, jotka pelaajien on otettava huomioon, kuten bunkkereita ja vesiesteit\xe4. Tavoitteena on my\xf6s pelata reilusti ja noudattaa hyvi\xe4 golf-etikettej\xe4. Golf on yleisesti ottaen kohtuullisen fyysinen urheilulaji, joka vaatii hyv\xe4\xe4 tasapainoa, koordinaatiota ja kest\xe4vyytt\xe4."})})})}),"\n",(0,i.jsxs)(a.p,{children:["K\xe4yt\xe4mme ",(0,i.jsx)(a.a,{href:"https://arxiv.org/pdf/2110.08387.pdf",children:"Liu ym. 2022"}),"-artikkelissa annettua kehotetta."]}),"\n",(0,i.jsx)(a.p,{children:"Seuraava vaihe on integroida tieto ja tehd\xe4 ennuste. Kysymys on muutettu QA-muotoon vastauksen muodon ohjaamiseksi."}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.em,{children:"Kehote:"})}),"\n",(0,i.jsx)(a.pre,{"data-language":"text","data-theme":"default",children:(0,i.jsxs)(a.code,{"data-language":"text","data-theme":"default",children:[(0,i.jsx)(a.span,{className:"line",children:(0,i.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Kysymys: Onko golfin tavoitteena saada enemm\xe4n pisteit\xe4 kuin muilla? Kyll\xe4 vai ei?"})}),"\n",(0,i.jsx)(a.span,{className:"line",children:(0,i.jsx)(a.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,i.jsx)(a.span,{className:"line",children:(0,i.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Tieto: Golfin tavoitteena on pelata joukko reiki\xe4 mahdollisimman pienell\xe4 ly\xf6ntim\xe4\xe4r\xe4ll\xe4. Golfkierros koostuu yleens\xe4 18 rei\xe4st\xe4. Jokainen reik\xe4 pelataan kerran kierroksen aikana tavallisella golfkent\xe4ll\xe4. Jokainen ly\xf6nti lasketaan yhdeksi pisteeksi, ja ly\xf6ntien kokonaism\xe4\xe4r\xe4\xe4 k\xe4ytet\xe4\xe4n pelin voittajan m\xe4\xe4ritt\xe4miseen."})}),"\n",(0,i.jsx)(a.span,{className:"line",children:(0,i.jsx)(a.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,i.jsx)(a.span,{className:"line",children:(0,i.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Selit\xe4 ja vastaa:"})})]})}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.em,{children:"Vastaus 1 (luottamus eritt\xe4in korkea):"})}),"\n",(0,i.jsx)(a.pre,{"data-language":"text","data-theme":"default",children:(0,i.jsx)(a.code,{"data-language":"text","data-theme":"default",children:(0,i.jsx)(a.span,{className:"line",children:(0,i.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Ei, golfin tavoitteena ei ole saada enemm\xe4n pisteit\xe4 kuin muilla. Pikemminkin tavoitteena on pelata joukko reiki\xe4 mahdollisimman pienell\xe4 ly\xf6ntim\xe4\xe4r\xe4ll\xe4. Ly\xf6ntien kokonaism\xe4\xe4r\xe4\xe4 k\xe4ytet\xe4\xe4n pelin voittajan m\xe4\xe4ritt\xe4miseen, ei pisteiden kokonaism\xe4\xe4r\xe4\xe4."})})})}),"\n",(0,i.jsx)(a.pre,{"data-language":"text","data-theme":"default",children:(0,i.jsxs)(a.code,{"data-language":"text","data-theme":"default",children:[(0,i.jsx)(a.span,{className:"line",children:(0,i.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Kysymys: Onko golfin tavoitteena saada enemm\xe4n pisteit\xe4 kuin muilla? Kyll\xe4 vai ei?"})}),"\n",(0,i.jsx)(a.span,{className:"line",children:(0,i.jsx)(a.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,i.jsx)(a.span,{className:"line",children:(0,i.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Tieto: Golf on tarkkuutta vaativa maila- ja pallopeli, jossa kilpailevat pelaajat (tai golfarit) k\xe4ytt\xe4v\xe4t monenlaisia mailoja ly\xf6d\xe4kseen palloja reikiin kent\xe4ll\xe4 mahdollisimman pienell\xe4 ly\xf6ntim\xe4\xe4r\xe4ll\xe4. Tavoitteena on suorittaa kentt\xe4 alhaisimmalla tuloksella, joka lasketaan yhteen jokaisen rei\xe4n ly\xf6ntien kokonaism\xe4\xe4r\xe4st\xe4. Pelaaja, jolla on alhaisin tulos, voittaa pelin."})}),"\n",(0,i.jsx)(a.span,{className:"line",children:(0,i.jsx)(a.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,i.jsx)(a.span,{className:"line",children:(0,i.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Selit\xe4 ja vastaa:"})})]})}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.em,{children:"Vastaus 2 (luottamus paljon alhaisempi):"})}),"\n",(0,i.jsx)(a.pre,{"data-language":"text","data-theme":"default",children:(0,i.jsx)(a.code,{"data-language":"text","data-theme":"default",children:(0,i.jsx)(a.span,{className:"line",children:(0,i.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Kyll\xe4, osa golfista on yritt\xe4\xe4 saada enemm\xe4n pisteit\xe4 kuin muilla. Jokainen pelaaja yritt\xe4\xe4 suorittaa kent\xe4n alhaisimmalla tuloksella, joka lasketaan yhteen jokaisen rei\xe4n ly\xf6ntien kokonaism\xe4\xe4r\xe4st\xe4. Pelaaja, jolla on alhaisin tulos, voittaa pelin."})})})}),"\n",(0,i.jsx)(a.p,{children:"T\xe4ss\xe4 esimerkiss\xe4 ilmeni mielenkiintoisia asioita. Ensimm\xe4isess\xe4 vastauksessa malli oli eritt\xe4in luottavainen, mutta toisessa v\xe4hemm\xe4n. Lis\xe4tietoja saat artikkelista."})]})}let u={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:a}=Object.assign({},(0,o.a)(),e.components);return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/techniques/knowledge.fi.mdx",route:"/techniques/knowledge",pageMap:[{kind:"Meta",locale:"fi",data:{index:"Prompt Engineering",introduction:"Introduction",techniques:"Techniques",applications:"Applications",models:"Models",risks:"Risks & Misuses",papers:"Papers",tools:"Tools",notebooks:"Notebooks",datasets:"Datasets",readings:"Additional Readings",course:{title:"Prompt Engineering Course",type:"page"},services:{title:"Services",type:"page"},about:{title:"About",type:"page"}}},{kind:"MdxPage",name:"about",route:"/about",locale:"fi"},{kind:"Folder",name:"applications",route:"/applications",children:[{kind:"Meta",locale:"fi",data:{pal:"Program-Aided Language Models",generating:"Generating Data",coding:"Generating Code",workplace_casestudy:"Graduate Job Classification Case Study",pf:"Prompt Function"}},{kind:"MdxPage",name:"coding",route:"/applications/coding",locale:"fi"},{kind:"MdxPage",name:"generating",route:"/applications/generating",locale:"fi"},{kind:"MdxPage",name:"pal",route:"/applications/pal",locale:"fi"},{kind:"MdxPage",name:"pf",route:"/applications/pf",locale:"fi"},{kind:"MdxPage",name:"workplace_casestudy",route:"/applications/workplace_casestudy",locale:"fi"},{kind:"MdxPage",name:"generating_textbooks",route:"/applications/generating_textbooks",locale:"en"},{kind:"MdxPage",name:"synthetic_rag",route:"/applications/synthetic_rag",locale:"en"}]},{kind:"MdxPage",name:"applications",route:"/applications",locale:"fi"},{kind:"MdxPage",name:"course",route:"/course",locale:"fi"},{kind:"MdxPage",name:"datasets",route:"/datasets",locale:"fi"},{kind:"MdxPage",name:"index",route:"/",locale:"fi"},{kind:"Folder",name:"introduction",route:"/introduction",children:[{kind:"Meta",locale:"fi",data:{settings:"LLM-asetukset",basics:"Kehottamisen perusteet",elements:"Kehotteiden elementit",tips:"Yleisi\xe4 vinkkej\xe4 kehotteiden suunnitteluun",examples:"Esimerkkej\xe4 kehotteista"}},{kind:"MdxPage",name:"basics",route:"/introduction/basics",locale:"fi"},{kind:"MdxPage",name:"elements",route:"/introduction/elements",locale:"fi"},{kind:"MdxPage",name:"examples",route:"/introduction/examples",locale:"fi"},{kind:"MdxPage",name:"settings",route:"/introduction/settings",locale:"fi"},{kind:"MdxPage",name:"tips",route:"/introduction/tips",locale:"fi"}]},{kind:"MdxPage",name:"introduction",route:"/introduction",locale:"fi"},{kind:"Folder",name:"models",route:"/models",children:[{kind:"Meta",locale:"fi",data:{flan:"Flan",chatgpt:"ChatGPT",llama:"LLaMA","gpt-4":"GPT-4","mistral-7b":"Mistral 7B",collection:"Model Collection"}},{kind:"MdxPage",name:"chatgpt",route:"/models/chatgpt",locale:"fi"},{kind:"MdxPage",name:"collection",route:"/models/collection",locale:"fi"},{kind:"MdxPage",name:"flan",route:"/models/flan",locale:"fi"},{kind:"MdxPage",name:"gpt-4",route:"/models/gpt-4",locale:"fi"},{kind:"MdxPage",name:"llama",route:"/models/llama",locale:"fi"},{kind:"MdxPage",name:"mistral-7b",route:"/models/mistral-7b",locale:"fi"}]},{kind:"MdxPage",name:"models",route:"/models",locale:"fi"},{kind:"MdxPage",name:"notebooks",route:"/notebooks",locale:"fi"},{kind:"MdxPage",name:"papers",route:"/papers",locale:"fi"},{kind:"MdxPage",name:"readings",route:"/readings",locale:"fi"},{kind:"Folder",name:"risks",route:"/risks",children:[{kind:"Meta",locale:"fi",data:{adversarial:"Adversarial Prompting",factuality:"Factuality",biases:"Biases"}},{kind:"MdxPage",name:"adversarial",route:"/risks/adversarial",locale:"fi"},{kind:"MdxPage",name:"biases",route:"/risks/biases",locale:"fi"},{kind:"MdxPage",name:"factuality",route:"/risks/factuality",locale:"fi"}]},{kind:"MdxPage",name:"risks",route:"/risks",locale:"fi"},{kind:"MdxPage",name:"services",route:"/services",locale:"fi"},{kind:"Folder",name:"techniques",route:"/techniques",children:[{kind:"Meta",locale:"fi",data:{zeroshot:"Zero-shot Prompting",fewshot:"Few-shot Prompting",cot:"Chain-of-Thought Prompting",consistency:"Self-Consistency",knowledge:"Generate Knowledge Prompting",tot:"Tree of Thoughts",rag:"Retrieval Augmented Generation",art:"Automatic Reasoning and Tool-use",ape:"Automatic Prompt Engineer",activeprompt:"Active-Prompt",dsp:"Directional Stimulus Prompting",react:"ReAct",multimodalcot:"Multimodal CoT",graph:"Graph Prompting"}},{kind:"MdxPage",name:"activeprompt",route:"/techniques/activeprompt",locale:"fi"},{kind:"MdxPage",name:"ape",route:"/techniques/ape",locale:"fi"},{kind:"MdxPage",name:"art",route:"/techniques/art",locale:"fi"},{kind:"MdxPage",name:"consistency",route:"/techniques/consistency",locale:"fi"},{kind:"MdxPage",name:"cot",route:"/techniques/cot",locale:"fi"},{kind:"MdxPage",name:"dsp",route:"/techniques/dsp",locale:"fi"},{kind:"MdxPage",name:"fewshot",route:"/techniques/fewshot",locale:"fi"},{kind:"MdxPage",name:"graph",route:"/techniques/graph",locale:"fi"},{kind:"MdxPage",name:"knowledge",route:"/techniques/knowledge",locale:"fi"},{kind:"MdxPage",name:"multimodalcot",route:"/techniques/multimodalcot",locale:"fi"},{kind:"MdxPage",name:"rag",route:"/techniques/rag",locale:"fi"},{kind:"MdxPage",name:"react",route:"/techniques/react",locale:"fi"},{kind:"MdxPage",name:"tot",route:"/techniques/tot",locale:"fi"},{kind:"MdxPage",name:"zeroshot",route:"/techniques/zeroshot",locale:"fi"}]},{kind:"MdxPage",name:"techniques",route:"/techniques",locale:"fi"},{kind:"MdxPage",name:"tools",route:"/tools",locale:"fi"}],flexsearch:{codeblocks:!0},title:"Tuotettu Tiet\xe4myskehote",headings:c},pageNextRoute:"/techniques/knowledge.fi",nextraLayout:l.ZP,themeConfig:s.Z};a.default=(0,n.j)(u)}},function(e){e.O(0,[67892,49774,92888,40179],function(){return e(e.s=49258)}),_N_E=e.O()}]);