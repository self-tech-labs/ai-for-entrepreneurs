(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[98466],{7745:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/applications/pal.fi",function(){return s(14025)}])},76930:function(e,n){"use strict";n.Z={src:"/_next/static/media/pal.dfc96526.png",height:606,width:822,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAh0lEQVR42k3BSw6CMBAA0N7/VK4g0YUaE9IgfpDyaWcKlnbaoghueY8R+UA2erf8Zj28pQKte+894yUeCzjdezSBX7vkLCh813VhiKgAELUjkhJkUw+g7GhYwttdBvvCKDMVpThklQDnfGC31l4ew1MRxTnnVZrmjRyn+GHrRi1e2DXR2mjtH82thJu+jdmmAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:6}},41667:function(e,n,s){"use strict";s.d(n,{w:function(){return o}});var i=s(11527),t=s(5341),a=s(76484),r=s.n(a);function o(e){let{src:n,alt:s,full:a}=e;return(0,i.jsx)("div",{className:(0,t.Z)("mt-6 -mb-4 flex justify-center overflow-hidden rounded-xl border dark:border-zinc-800",a?"bg-white":"bg-zinc-100"),children:(0,i.jsx)(r(),{src:n,alt:s,className:(0,t.Z)("w-auto select-none bg-white",a?"":"ring-1 ring-gray-200")})})}},43677:function(e,n,s){"use strict";s.d(n,{Z:function(){return k}});var i=s(11527),t=s(50959),a=s(85274),r=s(5341);function o(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",width:"24",height:"24",...e,children:(0,i.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}let l=e=>{let{children:n,className:s,...t}=e;return(0,i.jsx)("button",{className:(0,r.Z)("nextra-button nx-transition-all active:nx-opacity-50","nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-1.5","dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50",s),...t,children:n})};function c(e){return(0,i.jsx)("svg",{viewBox:"0 0 20 20",width:"1em",height:"1em",fill:"currentColor",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}function d(e){return(0,i.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",...e,children:[(0,i.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,i.jsx)("path",{d:"M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}let h=e=>{let{getValue:n,...s}=e,[a,r]=(0,t.useState)(!1);(0,t.useEffect)(()=>{if(!a)return;let e=setTimeout(()=>{r(!1)},2e3);return()=>{clearTimeout(e)}},[a]);let o=(0,t.useCallback)(async()=>{r(!0),(null==navigator?void 0:navigator.clipboard)||console.error("Access to clipboard rejected!");try{await navigator.clipboard.writeText(n())}catch(e){console.error("Failed to copy!")}},[n]);return(0,i.jsx)(l,{onClick:o,title:"Copy code",tabIndex:0,...s,children:(0,i.jsx)(a?c:d,{className:"nextra-copy-icon nx-pointer-events-none nx-h-4 nx-w-4"})})},x=e=>{let{children:n,className:s,hasCopyCode:a=!0,filename:c,...d}=e,x=(0,t.useRef)(null),p=(0,t.useCallback)(()=>{let e=document.documentElement.dataset,n="nextraWordWrap"in e;n?delete e.nextraWordWrap:e.nextraWordWrap=""},[]);return(0,i.jsxs)("div",{className:"nextra-code-block nx-relative nx-mt-6 first:nx-mt-0",children:[c&&(0,i.jsx)("div",{className:"nx-absolute nx-top-0 nx-z-[1] nx-w-full nx-truncate nx-rounded-t-xl nx-bg-primary-700/5 nx-py-2 nx-px-4 nx-text-xs nx-text-gray-700 dark:nx-bg-primary-300/10 dark:nx-text-gray-200",children:c}),(0,i.jsx)("pre",{className:(0,r.Z)("nx-bg-primary-700/5 nx-mb-4 nx-overflow-x-auto nx-rounded-xl nx-subpixel-antialiased dark:nx-bg-primary-300/10 nx-text-[.9em]","contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40",c?"nx-pt-12 nx-pb-4":"nx-py-4",s),ref:x,...d,children:t.isValidElement(n)&&"code"===n.type?n.props.children:n}),(0,i.jsxs)("div",{className:(0,r.Z)("nx-opacity-0 nx-transition [div:hover>&]:nx-opacity-100 focus-within:nx-opacity-100","nx-flex nx-gap-1 nx-absolute nx-m-[11px] nx-right-0",c?"nx-top-8":"nx-top-0"),children:[(0,i.jsx)(l,{onClick:p,className:"md:nx-hidden",title:"Toggle word wrap elvis",children:(0,i.jsx)(o,{className:"nx-pointer-events-none nx-h-4 nx-w-4"})}),a&&(0,i.jsx)(h,{getValue(){var e,n;return(null===(e=null===(n=x.current)||void 0===n?void 0:n.querySelector("code"))||void 0===e?void 0:e.textContent)||""}})]})]})},p={logo:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 206 246",fill:"none",children:[(0,i.jsx)("circle",{cx:"40",cy:"40",r:"40",fill:"currentColor"}),(0,i.jsx)("circle",{cx:"40",cy:"206",r:"40",fill:"currentColor"}),(0,i.jsx)("circle",{cx:"166",cy:"120",r:"40",fill:"currentColor"})]}),(0,i.jsx)("span",{style:{marginLeft:".4em",fontWeight:800},children:"Prompt Engineering Guide"})]}),i18n:[{locale:"en",text:"English"},{locale:"zh",text:"中文"},{locale:"jp",text:"日本語"},{locale:"pt",text:"Portugu\xeas"},{locale:"it",text:"Italian"},{locale:"tr",text:"T\xfcrk\xe7e"},{locale:"es",text:"Espa\xf1ol"},{locale:"fr",text:"Fran\xe7ais"},{locale:"kr",text:"한국어"},{locale:"ca",text:"Catal\xe0"},{locale:"fi",text:"Finnish"},{locale:"ru",text:"Русский"}],head:function(){let{title:e}=(0,a.ZR)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("title",{children:[e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"," "]}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,i.jsx)("meta",{property:"og:title",content:"Prompt Engineering Guide"}),(0,i.jsx)("meta",{property:"og:description",content:"A Comprehensive Overview of Prompt Engineering"}),(0,i.jsx)("meta",{name:"og:title",content:e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"}),(0,i.jsx)("link",{rel:"icon",href:"/144-favicon.svg",type:"image/svg+xml"}),(0,i.jsx)("link",{rel:"icon",href:"/144-favicon-dark.svg",type:"image/svg+xml",media:"(prefers-color-scheme: dark)"})]})},project:{link:"https://github.com/dair-ai/Prompt-Engineering-Guide"},chat:{link:"https://discord.gg/FUyz9vPAwf"},docsRepositoryBase:"https://github.com/dair-ai/Prompt-Engineering-Guide/tree/main/",footer:{text:"Copyright \xa9 2023 DAIR.AI"},search:{placeholder:"Search..."},components:{pre:x}};var k=p},14025:function(e,n,s){"use strict";s.r(n),s.d(n,{__toc:function(){return d}});var i=s(11527),t=s(55411),a=s(85274),r=s(43677);s(20492),s(95178);var o=s(82132),l=s(41667),c=s(76930);let d=[];function h(e){let n=Object.assign({h1:"h1",p:"p",a:"a",pre:"pre",code:"code",span:"span"},(0,o.a)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{children:"PAL (Ohjelma-Avusteiset Kielimallit)"}),"\n","\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://arxiv.org/abs/2211.10435",children:"Gao ym., (2022)"})," esittelee menetelm\xe4n, joka k\xe4ytt\xe4\xe4 LLM:\xe4\xe4 luonnollisen kielen ongelmien lukemiseen ja hy\xf6dynt\xe4\xe4 ohjelmistoja v\xe4livaiheen p\xe4\xe4ttelyn generointiin. Ratkaisua kutsututaan ohjelma-avusteiseksi kielimalliksi (Program-Aided Language Model, PAL), ja se eroaa ajatusketjukehotteesta siten, ett\xe4 sen sijaan ett\xe4 se k\xe4ytt\xe4\xe4 vapaamuotoista teksti\xe4 ratkaisun saamiseksi, se siirt\xe4v\xe4\xe4 ratkaisuvaiheen ohjelmalliselle suoritusymp\xe4rist\xf6lle, kuten Python-tulkille."]}),"\n",(0,i.jsx)(l.w,{src:c.Z,alt:"PAL"}),"\n",(0,i.jsxs)(n.p,{children:["Kuvan l\xe4hde: ",(0,i.jsx)(n.a,{href:"https://arxiv.org/abs/2211.10435",children:"Gao ym., (2022)"})]}),"\n",(0,i.jsx)(n.p,{children:"Katsotaan esimerkki\xe4 k\xe4ytt\xe4m\xe4ll\xe4 LangChainia ja OpenAI GPT-3:a. Haluamme kehitt\xe4\xe4 yksinkertaisen sovelluksen, joka pystyy tulkitsemaan kysymyksen ja antamaan vastauksen hy\xf6dynt\xe4m\xe4ll\xe4 Python-tulkkia."}),"\n",(0,i.jsxs)(n.p,{children:["Erityisesti olemme kiinnostuneita luomaan toiminnallisuuden, joka mahdollistaa LLM:n k\xe4yt\xf6n kysymyksiin, jotka edellytt\xe4v\xe4t p\xe4iv\xe4m\xe4\xe4r\xe4tiedon ymm\xe4rt\xe4mist\xe4. Tarjoamme LLM:lle kehotteen, joka sis\xe4lt\xe4\xe4 muutamia esimerkkej\xe4, jotka on otettu ",(0,i.jsx)(n.a,{href:"https://github.com/reasoning-machines/pal/blob/main/pal/prompt/date_understanding_prompt.py",children:"t\xe4\xe4lt\xe4"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Tarvitsemme alla listatut ty\xf6kalut:"}),"\n",(0,i.jsx)(n.pre,{"data-language":"python","data-theme":"default",children:(0,i.jsxs)(n.code,{"data-language":"python","data-theme":"default",children:[(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" openai"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" datetime "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" datetime"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" dateutil"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"relativedelta "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" relativedelta"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" os"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" langchain"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"llms "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" OpenAI"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" dotenv "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" load_dotenv"})]})]})}),"\n",(0,i.jsx)(n.p,{children:"M\xe4\xe4ritell\xe4\xe4n ensin muutama asia:"}),"\n",(0,i.jsx)(n.pre,{"data-language":"python","data-theme":"default",children:(0,i.jsxs)(n.code,{"data-language":"python","data-theme":"default",children:[(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"load_dotenv"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"()"})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:" "}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"# API configuration"})}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"openai"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"api_key "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" os"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"getenv"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"("}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"OPENAI_API_KEY"'}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:")"})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:" "}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"# for LangChain"})}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"os"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"environ"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"["}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"OPENAI_API_KEY"'}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"]"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" os"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"getenv"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"("}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"OPENAI_API_KEY"'}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:")"})]})]})}),"\n",(0,i.jsx)(n.p,{children:"Mallin ymp\xe4rist\xf6n asetukset:"}),"\n",(0,i.jsx)(n.pre,{"data-language":"python","data-theme":"default",children:(0,i.jsx)(n.code,{"data-language":"python","data-theme":"default",children:(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"llm "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"OpenAI"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(model_name"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'text-davinci-003'"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:", temperature"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:")"})]})})}),"\n",(0,i.jsx)(n.p,{children:"Kehotteen + kysymyksen asetukset:"}),"\n",(0,i.jsx)(n.pre,{"data-language":"python","data-theme":"default",children:(0,i.jsxs)(n.code,{"data-language":"python","data-theme":"default",children:[(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"question "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Today is 27 February 2023. I was born exactly 25 years ago. What is the date I was born in MM/DD/YYYY?"'})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:" "}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"DATE_UNDERSTANDING_PROMPT "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"""'})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"# Q: 2015 is coming in 36 hours. What is the date one week from today in MM/DD/YYYY?"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"# If 2015 is coming in 36 hours, then today is 36 hours before."})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"today = datetime(2015, 1, 1) - relativedelta(hours=36)"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"# One week from today,"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"one_week_from_today = today + relativedelta(weeks=1)"})}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"# The answer formatted with %m/"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"%d"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"/%Y is"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"one_week_from_today.strftime('%m/"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"%d"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"/%Y')"})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"# Q: The first day of 2019 is a Tuesday, and today is the first Monday of 2019. What is the date today in MM/DD/YYYY?"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"# If the first day of 2019 is a Tuesday, and today is the first Monday of 2019, then today is 6 days later."})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"today = datetime(2019, 1, 1) + relativedelta(days=6)"})}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"# The answer formatted with %m/"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"%d"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"/%Y is"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"today.strftime('%m/"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"%d"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"/%Y')"})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"# Q: The concert was scheduled to be on 06/01/1943, but was delayed by one day to today. What is the date 10 days ago in MM/DD/YYYY?"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"# If the concert was scheduled to be on 06/01/1943, but was delayed by one day to today, then today is one day later."})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"today = datetime(1943, 6, 1) + relativedelta(days=1)"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"# 10 days ago,"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"ten_days_ago = today - relativedelta(days=10)"})}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"# The answer formatted with %m/"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"%d"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"/%Y is"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"ten_days_ago.strftime('%m/"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"%d"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"/%Y')"})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"# Q: It is 4/19/1969 today. What is the date 24 hours later in MM/DD/YYYY?"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"# It is 4/19/1969 today."})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"today = datetime(1969, 4, 19)"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"# 24 hours later,"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"later = today + relativedelta(hours=24)"})}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"# The answer formatted with %m/"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"%d"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"/%Y is"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"today.strftime('%m/"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"%d"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"/%Y')"})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"# Q: Jane thought today is 3/11/2002, but today is in fact Mar 12, which is 1 day later. What is the date 24 hours later in MM/DD/YYYY?"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"# If Jane thought today is 3/11/2002, but today is in fact Mar 12, then today is 3/12/2002."})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"today = datetime(2002, 3, 12)"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"# 24 hours later,"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"later = today + relativedelta(hours=24)"})}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"# The answer formatted with %m/"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"%d"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"/%Y is"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"later.strftime('%m/"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"%d"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"/%Y')"})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"# Q: Jane was born on the last day of Feburary in 2001. Today is her 16-year-old birthday. What is the date yesterday in MM/DD/YYYY?"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"# If Jane was born on the last day of Feburary in 2001 and today is her 16-year-old birthday, then today is 16 years later."})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"today = datetime(2001, 2, 28) + relativedelta(years=16)"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"# Yesterday,"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"yesterday = today - relativedelta(days=1)"})}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"# The answer formatted with %m/"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"%d"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"/%Y is"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"yesterday.strftime('%m/"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"%d"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"/%Y')"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"# Q: "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"{question}"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"""'}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"strip"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"()"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"+"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'\\n'"})]})]})}),"\n",(0,i.jsx)(n.pre,{"data-language":"python","data-theme":"default",children:(0,i.jsxs)(n.code,{"data-language":"python","data-theme":"default",children:[(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"llm_out "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"llm"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(DATE_UNDERSTANDING_PROMPT."}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"format"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(question"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"question))"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(llm_out)"})]})]})}),"\n",(0,i.jsx)(n.pre,{"data-language":"python","data-theme":"default",children:(0,i.jsxs)(n.code,{"data-language":"python","data-theme":"default",children:[(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"exec"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(llm_out)"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(born)"})]})]})}),"\n",(0,i.jsxs)(n.p,{children:["Lopputuloksena: ",(0,i.jsx)(n.code,{children:"02/27/1998"})]})]})}let x={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.a)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)},pageOpts:{filePath:"pages/applications/pal.fi.mdx",route:"/applications/pal",timestamp:1690089639e3,pageMap:[{kind:"Meta",locale:"fi",data:{index:"Prompt Engineering",introduction:"Introduction",techniques:"Techniques",applications:"Applications",models:"Models",risks:"Risks & Misuses",papers:"Papers",tools:"Tools",notebooks:"Notebooks",datasets:"Datasets",readings:"Additional Readings",course:{title:"Prompt Engineering Course",type:"page"},services:{title:"Services",type:"page"},about:{title:"About",type:"page"}}},{kind:"MdxPage",name:"about",route:"/about",locale:"fi"},{kind:"Folder",name:"applications",route:"/applications",children:[{kind:"Meta",locale:"fi",data:{pal:"Program-Aided Language Models",generating:"Generating Data",coding:"Generating Code",workplace_casestudy:"Graduate Job Classification Case Study",pf:"Prompt Function"}},{kind:"MdxPage",name:"coding",route:"/applications/coding",locale:"fi"},{kind:"MdxPage",name:"generating",route:"/applications/generating",locale:"fi"},{kind:"MdxPage",name:"pal",route:"/applications/pal",locale:"fi"},{kind:"MdxPage",name:"pf",route:"/applications/pf",locale:"fi"},{kind:"MdxPage",name:"workplace_casestudy",route:"/applications/workplace_casestudy",locale:"fi"},{kind:"MdxPage",name:"generating_textbooks",route:"/applications/generating_textbooks",locale:"en"},{kind:"MdxPage",name:"synthetic_rag",route:"/applications/synthetic_rag",locale:"en"}]},{kind:"MdxPage",name:"applications",route:"/applications",locale:"fi"},{kind:"MdxPage",name:"course",route:"/course",locale:"fi"},{kind:"MdxPage",name:"datasets",route:"/datasets",locale:"fi"},{kind:"MdxPage",name:"index",route:"/",locale:"fi"},{kind:"Folder",name:"introduction",route:"/introduction",children:[{kind:"Meta",locale:"fi",data:{settings:"LLM-asetukset",basics:"Kehottamisen perusteet",elements:"Kehotteiden elementit",tips:"Yleisi\xe4 vinkkej\xe4 kehotteiden suunnitteluun",examples:"Esimerkkej\xe4 kehotteista"}},{kind:"MdxPage",name:"basics",route:"/introduction/basics",locale:"fi"},{kind:"MdxPage",name:"elements",route:"/introduction/elements",locale:"fi"},{kind:"MdxPage",name:"examples",route:"/introduction/examples",locale:"fi"},{kind:"MdxPage",name:"settings",route:"/introduction/settings",locale:"fi"},{kind:"MdxPage",name:"tips",route:"/introduction/tips",locale:"fi"}]},{kind:"MdxPage",name:"introduction",route:"/introduction",locale:"fi"},{kind:"Folder",name:"models",route:"/models",children:[{kind:"Meta",locale:"fi",data:{flan:"Flan",chatgpt:"ChatGPT",llama:"LLaMA","gpt-4":"GPT-4","mistral-7b":"Mistral 7B",collection:"Model Collection"}},{kind:"MdxPage",name:"chatgpt",route:"/models/chatgpt",locale:"fi"},{kind:"MdxPage",name:"collection",route:"/models/collection",locale:"fi"},{kind:"MdxPage",name:"flan",route:"/models/flan",locale:"fi"},{kind:"MdxPage",name:"gpt-4",route:"/models/gpt-4",locale:"fi"},{kind:"MdxPage",name:"llama",route:"/models/llama",locale:"fi"},{kind:"MdxPage",name:"mistral-7b",route:"/models/mistral-7b",locale:"fi"}]},{kind:"MdxPage",name:"models",route:"/models",locale:"fi"},{kind:"MdxPage",name:"notebooks",route:"/notebooks",locale:"fi"},{kind:"MdxPage",name:"papers",route:"/papers",locale:"fi"},{kind:"MdxPage",name:"readings",route:"/readings",locale:"fi"},{kind:"Folder",name:"risks",route:"/risks",children:[{kind:"Meta",locale:"fi",data:{adversarial:"Adversarial Prompting",factuality:"Factuality",biases:"Biases"}},{kind:"MdxPage",name:"adversarial",route:"/risks/adversarial",locale:"fi"},{kind:"MdxPage",name:"biases",route:"/risks/biases",locale:"fi"},{kind:"MdxPage",name:"factuality",route:"/risks/factuality",locale:"fi"}]},{kind:"MdxPage",name:"risks",route:"/risks",locale:"fi"},{kind:"MdxPage",name:"services",route:"/services",locale:"fi"},{kind:"Folder",name:"techniques",route:"/techniques",children:[{kind:"Meta",locale:"fi",data:{zeroshot:"Zero-shot Prompting",fewshot:"Few-shot Prompting",cot:"Chain-of-Thought Prompting",consistency:"Self-Consistency",knowledge:"Generate Knowledge Prompting",tot:"Tree of Thoughts",rag:"Retrieval Augmented Generation",art:"Automatic Reasoning and Tool-use",ape:"Automatic Prompt Engineer",activeprompt:"Active-Prompt",dsp:"Directional Stimulus Prompting",react:"ReAct",multimodalcot:"Multimodal CoT",graph:"Graph Prompting"}},{kind:"MdxPage",name:"activeprompt",route:"/techniques/activeprompt",locale:"fi"},{kind:"MdxPage",name:"ape",route:"/techniques/ape",locale:"fi"},{kind:"MdxPage",name:"art",route:"/techniques/art",locale:"fi"},{kind:"MdxPage",name:"consistency",route:"/techniques/consistency",locale:"fi"},{kind:"MdxPage",name:"cot",route:"/techniques/cot",locale:"fi"},{kind:"MdxPage",name:"dsp",route:"/techniques/dsp",locale:"fi"},{kind:"MdxPage",name:"fewshot",route:"/techniques/fewshot",locale:"fi"},{kind:"MdxPage",name:"graph",route:"/techniques/graph",locale:"fi"},{kind:"MdxPage",name:"knowledge",route:"/techniques/knowledge",locale:"fi"},{kind:"MdxPage",name:"multimodalcot",route:"/techniques/multimodalcot",locale:"fi"},{kind:"MdxPage",name:"rag",route:"/techniques/rag",locale:"fi"},{kind:"MdxPage",name:"react",route:"/techniques/react",locale:"fi"},{kind:"MdxPage",name:"tot",route:"/techniques/tot",locale:"fi"},{kind:"MdxPage",name:"zeroshot",route:"/techniques/zeroshot",locale:"fi"}]},{kind:"MdxPage",name:"techniques",route:"/techniques",locale:"fi"},{kind:"MdxPage",name:"tools",route:"/tools",locale:"fi"}],flexsearch:{codeblocks:!0},title:"PAL (Ohjelma-Avusteiset Kielimallit)",headings:d},pageNextRoute:"/applications/pal.fi",nextraLayout:a.ZP,themeConfig:r.Z};n.default=(0,t.j)(x)}},function(e){e.O(0,[67892,49774,92888,40179],function(){return e(e.s=7745)}),_N_E=e.O()}]);