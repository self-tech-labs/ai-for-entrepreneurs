(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[29414],{73262:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/introduction/tips.pt",function(){return t(66641)}])},43677:function(e,a,t){"use strict";t.d(a,{Z:function(){return u}});var o=t(11527),n=t(50959),r=t(85274),s=t(5341);function i(e){return(0,o.jsx)("svg",{viewBox:"0 0 24 24",width:"24",height:"24",...e,children:(0,o.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}let l=e=>{let{children:a,className:t,...n}=e;return(0,o.jsx)("button",{className:(0,s.Z)("nextra-button nx-transition-all active:nx-opacity-50","nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-1.5","dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50",t),...n,children:a})};function c(e){return(0,o.jsx)("svg",{viewBox:"0 0 20 20",width:"1em",height:"1em",fill:"currentColor",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}function d(e){return(0,o.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",...e,children:[(0,o.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)("path",{d:"M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}let x=e=>{let{getValue:a,...t}=e,[r,s]=(0,n.useState)(!1);(0,n.useEffect)(()=>{if(!r)return;let e=setTimeout(()=>{s(!1)},2e3);return()=>{clearTimeout(e)}},[r]);let i=(0,n.useCallback)(async()=>{s(!0),(null==navigator?void 0:navigator.clipboard)||console.error("Access to clipboard rejected!");try{await navigator.clipboard.writeText(a())}catch(e){console.error("Failed to copy!")}},[a]);return(0,o.jsx)(l,{onClick:i,title:"Copy code",tabIndex:0,...t,children:(0,o.jsx)(r?c:d,{className:"nextra-copy-icon nx-pointer-events-none nx-h-4 nx-w-4"})})},p=e=>{let{children:a,className:t,hasCopyCode:r=!0,filename:c,...d}=e,p=(0,n.useRef)(null),m=(0,n.useCallback)(()=>{let e=document.documentElement.dataset,a="nextraWordWrap"in e;a?delete e.nextraWordWrap:e.nextraWordWrap=""},[]);return(0,o.jsxs)("div",{className:"nextra-code-block nx-relative nx-mt-6 first:nx-mt-0",children:[c&&(0,o.jsx)("div",{className:"nx-absolute nx-top-0 nx-z-[1] nx-w-full nx-truncate nx-rounded-t-xl nx-bg-primary-700/5 nx-py-2 nx-px-4 nx-text-xs nx-text-gray-700 dark:nx-bg-primary-300/10 dark:nx-text-gray-200",children:c}),(0,o.jsx)("pre",{className:(0,s.Z)("nx-bg-primary-700/5 nx-mb-4 nx-overflow-x-auto nx-rounded-xl nx-subpixel-antialiased dark:nx-bg-primary-300/10 nx-text-[.9em]","contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40",c?"nx-pt-12 nx-pb-4":"nx-py-4",t),ref:p,...d,children:n.isValidElement(a)&&"code"===a.type?a.props.children:a}),(0,o.jsxs)("div",{className:(0,s.Z)("nx-opacity-0 nx-transition [div:hover>&]:nx-opacity-100 focus-within:nx-opacity-100","nx-flex nx-gap-1 nx-absolute nx-m-[11px] nx-right-0",c?"nx-top-8":"nx-top-0"),children:[(0,o.jsx)(l,{onClick:m,className:"md:nx-hidden",title:"Toggle word wrap elvis",children:(0,o.jsx)(i,{className:"nx-pointer-events-none nx-h-4 nx-w-4"})}),r&&(0,o.jsx)(x,{getValue(){var e,a;return(null===(e=null===(a=p.current)||void 0===a?void 0:a.querySelector("code"))||void 0===e?void 0:e.textContent)||""}})]})]})},m={logo:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 206 246",fill:"none",children:[(0,o.jsx)("circle",{cx:"40",cy:"40",r:"40",fill:"currentColor"}),(0,o.jsx)("circle",{cx:"40",cy:"206",r:"40",fill:"currentColor"}),(0,o.jsx)("circle",{cx:"166",cy:"120",r:"40",fill:"currentColor"})]}),(0,o.jsx)("span",{style:{marginLeft:".4em",fontWeight:800},children:"Prompt Engineering Guide"})]}),i18n:[{locale:"en",text:"English"},{locale:"zh",text:"中文"},{locale:"jp",text:"日本語"},{locale:"pt",text:"Portugu\xeas"},{locale:"it",text:"Italian"},{locale:"tr",text:"T\xfcrk\xe7e"},{locale:"es",text:"Espa\xf1ol"},{locale:"fr",text:"Fran\xe7ais"},{locale:"kr",text:"한국어"},{locale:"ca",text:"Catal\xe0"},{locale:"fi",text:"Finnish"},{locale:"ru",text:"Русский"}],head:function(){let{title:e}=(0,r.ZR)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("title",{children:[e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"," "]}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,o.jsx)("meta",{property:"og:title",content:"Prompt Engineering Guide"}),(0,o.jsx)("meta",{property:"og:description",content:"A Comprehensive Overview of Prompt Engineering"}),(0,o.jsx)("meta",{name:"og:title",content:e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"}),(0,o.jsx)("link",{rel:"icon",href:"/144-favicon.svg",type:"image/svg+xml"}),(0,o.jsx)("link",{rel:"icon",href:"/144-favicon-dark.svg",type:"image/svg+xml",media:"(prefers-color-scheme: dark)"})]})},project:{link:"https://github.com/dair-ai/Prompt-Engineering-Guide"},chat:{link:"https://discord.gg/FUyz9vPAwf"},docsRepositoryBase:"https://github.com/dair-ai/Prompt-Engineering-Guide/tree/main/",footer:{text:"Copyright \xa9 2023 DAIR.AI"},search:{placeholder:"Search..."},components:{pre:p}};var u=m},66641:function(e,a,t){"use strict";t.r(a),t.d(a,{__toc:function(){return l}});var o=t(11527),n=t(55411),r=t(85274),s=t(43677);t(20492),t(95178);var i=t(82132);let l=[{depth:3,value:"Comece Simples",id:"comece-simples"},{depth:3,value:"A instru\xe7\xe3o",id:"a-instru\xe7\xe3o"},{depth:3,value:"Especificidade",id:"especificidade"},{depth:3,value:"Evite Imprecis\xf5es",id:"evite-imprecis\xf5es"},{depth:3,value:"Fazer ou n\xe3o fazer?",id:"fazer-ou-n\xe3o-fazer"}];function c(e){let a=Object.assign({h1:"h1",p:"p",h3:"h3",em:"em",pre:"pre",code:"code",span:"span",a:"a"},(0,i.a)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.h1,{children:"Dicas gerais para projetar prompts"}),"\n",(0,o.jsx)(a.p,{children:"Aqui est\xe3o algumas dicas para manter em mente ao projetar seus prompts:"}),"\n",(0,o.jsx)(a.h3,{id:"comece-simples",children:"Comece Simples"}),"\n",(0,o.jsx)(a.p,{children:"Ao come\xe7ar a criar prompts, voc\xea deve ter em mente que \xe9 realmente um processo iterativo que requer muita experimenta\xe7\xe3o para obter os melhores resultados. Usar um playground simples como OpenAI ou Cohere's \xe9 um bom ponto de partida."}),"\n",(0,o.jsx)(a.p,{children:"Voc\xea pode come\xe7ar com prompts simples e continuar adicionando mais elementos e contexto \xe0 medida que busca melhores resultados. O controle de vers\xe3o do seu prompt ao longo do caminho \xe9 vital por esse motivo. Ao ler o guia, voc\xea ver\xe1 muitos exemplos em que a especificidade, a simplicidade e a concis\xe3o geralmente lhe dar\xe3o melhores resultados."}),"\n",(0,o.jsx)(a.p,{children:"Quando voc\xea tem uma grande tarefa que envolve muitas subtarefas diferentes, pode tentar dividir a tarefa em subtarefas mais simples e continuar aumentando conforme obt\xe9m melhores resultados. Isso evita adicionar muita complexidade ao processo de design do prompt no in\xedcio."}),"\n",(0,o.jsx)(a.h3,{id:"a-instru\xe7\xe3o",children:"A instru\xe7\xe3o"}),"\n",(0,o.jsx)(a.p,{children:'Voc\xea pode criar prompts eficazes para v\xe1rias tarefas simples usando comandos para instruir o modelo sobre o que deseja alcan\xe7ar, como "Escrever", "Classificar", "Resumir", "Traduzir", "Ordenar" etc.'}),"\n",(0,o.jsx)(a.p,{children:"Tenha em mente que voc\xea tamb\xe9m precisa experimentar muito para ver o que funciona melhor. Experimente instru\xe7\xf5es diferentes com palavras-chave, contextos e dados diferentes e veja o que funciona melhor para seu caso de uso e tarefa espec\xedficos. Normalmente, quanto mais espec\xedfico e relevante for o contexto para a tarefa que voc\xea est\xe1 tentando executar, melhor. Abordaremos a import\xe2ncia da amostragem e da adi\xe7\xe3o de mais contexto nos pr\xf3ximos guias."}),"\n",(0,o.jsx)(a.p,{children:'Outros recomendam que as instru\xe7\xf5es sejam colocadas no in\xedcio do prompt. Tamb\xe9m \xe9 recomendado que algum separador claro como "###" seja usado para separar a instru\xe7\xe3o e o contexto.'}),"\n",(0,o.jsx)(a.p,{children:"Por exemplo:"}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.em,{children:"Prompt:"})}),"\n",(0,o.jsx)(a.pre,{"data-language":"text","data-theme":"default",children:(0,o.jsxs)(a.code,{"data-language":"text","data-theme":"default",children:[(0,o.jsx)(a.span,{className:"line",children:(0,o.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"### Instru\xe7\xe3o ###"})}),"\n",(0,o.jsx)(a.span,{className:"line",children:(0,o.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Traduza o texto abaixo para o espanhol:"})}),"\n",(0,o.jsx)(a.span,{className:"line",children:(0,o.jsx)(a.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,o.jsx)(a.span,{className:"line",children:(0,o.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:'Texto: "ol\xe1!"'})})]})}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.em,{children:"Sa\xedda:"})}),"\n",(0,o.jsx)(a.pre,{"data-language":"text","data-theme":"default",children:(0,o.jsx)(a.code,{"data-language":"text","data-theme":"default",children:(0,o.jsx)(a.span,{className:"line",children:(0,o.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"\xa1Hola!"})})})}),"\n",(0,o.jsx)(a.h3,{id:"especificidade",children:"Especificidade"}),"\n",(0,o.jsx)(a.p,{children:"Seja muito espec\xedfico sobre a instru\xe7\xe3o e a tarefa que deseja que o modelo execute. Quanto mais descritivo e detalhado for o prompt, melhores ser\xe3o os resultados. Isso \xe9 particularmente importante quando voc\xea tem um resultado desejado ou estilo de gera\xe7\xe3o que est\xe1 buscando. N\xe3o h\xe1 tokens ou palavras-chave espec\xedficas que levem a melhores resultados. \xc9 mais importante ter um bom formato e um prompt descritivo. Na verdade, fornecer exemplos no prompt \xe9 muito eficaz para obter a sa\xedda desejada em formatos espec\xedficos."}),"\n",(0,o.jsx)(a.p,{children:"Ao criar prompts, voc\xea tamb\xe9m deve ter em mente o tamanho do prompt, pois h\xe1 limita\xe7\xf5es em rela\xe7\xe3o a qu\xe3o grande ele pode ser. Pensar em qu\xe3o espec\xedfico e detalhado voc\xea deve ser \xe9 algo a se considerar. Incluir muitos detalhes desnecess\xe1rios n\xe3o \xe9 necessariamente uma boa abordagem. Os detalhes devem ser relevantes e contribuir para a tarefa em m\xe3os. Isso \xe9 algo que voc\xea precisar\xe1 experimentar muito. Incentivamos muita experimenta\xe7\xe3o e itera\xe7\xe3o para otimizar os prompts de seus aplicativos."}),"\n",(0,o.jsx)(a.p,{children:"Como exemplo, vamos tentar um prompt simples para extrair informa\xe7\xf5es espec\xedficas de um texto."}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.em,{children:"Prompt:"})}),"\n",(0,o.jsx)(a.pre,{"data-language":"text","data-theme":"default",children:(0,o.jsxs)(a.code,{"data-language":"text","data-theme":"default",children:[(0,o.jsx)(a.span,{className:"line",children:(0,o.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Extraia o nome dos lugares no texto a seguir."})}),"\n",(0,o.jsx)(a.span,{className:"line",children:(0,o.jsx)(a.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,o.jsx)(a.span,{className:"line",children:(0,o.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Formato desejado:"})}),"\n",(0,o.jsx)(a.span,{className:"line",children:(0,o.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Local: <lista_separada_por_v\xedrgulas_de_nomes_de_empresas>"})}),"\n",(0,o.jsx)(a.span,{className:"line",children:(0,o.jsx)(a.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,o.jsx)(a.span,{className:"line",children:(0,o.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:'Input: "Embora estes desenvolvimentos sejam encorajadores para os investigadores, muito ainda \xe9 um mist\xe9rio. “Muitas vezes temos uma caixa preta entre o c\xe9rebro e o efeito que vemos na periferia”, diz Henrique Veiga-Fernandes, neuroimunologista do Centro Champalimaud para o Desconhecido em Lisboa. “Se queremos utiliz\xe1-lo no contexto terap\xeautico, precisamos de facto de perceber o mecanismo."'})})]})}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.em,{children:"Sa\xedda:"})}),"\n",(0,o.jsx)(a.pre,{"data-language":"text","data-theme":"default",children:(0,o.jsx)(a.code,{"data-language":"text","data-theme":"default",children:(0,o.jsx)(a.span,{className:"line",children:(0,o.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Local: Centro Champalimaud para o Desconhecido, Lisboa"})})})}),"\n",(0,o.jsxs)(a.p,{children:["O texto de entrada \xe9 obtido ",(0,o.jsx)(a.a,{href:"https://www.nature.com/articles/d41586-023-00509-z",children:"neste artigo da Nature"}),"."]}),"\n",(0,o.jsx)(a.h3,{id:"evite-imprecis\xf5es",children:"Evite Imprecis\xf5es"}),"\n",(0,o.jsx)(a.p,{children:"Dadas as dicas acima sobre como ser detalhado e melhorar o formato, \xe9 f\xe1cil cair na armadilha de querer ser muito inteligente sobre os prompts e potencialmente criar descri\xe7\xf5es imprecisas. Geralmente \xe9 melhor ser espec\xedfico e direto. A analogia aqui \xe9 muito semelhante \xe0 comunica\xe7\xe3o eficaz - quanto mais direta, mais eficaz a mensagem \xe9 transmitida."}),"\n",(0,o.jsx)(a.p,{children:"Por exemplo, voc\xea pode estar interessado em aprender o conceito de engenharia de prompt. Voc\xea pode tentar algo como:"}),"\n",(0,o.jsx)(a.pre,{"data-language":"text","data-theme":"default",children:(0,o.jsx)(a.code,{"data-language":"text","data-theme":"default",children:(0,o.jsx)(a.span,{className:"line",children:(0,o.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Explique o conceito de engenharia de prompt. Mantenha a explica\xe7\xe3o curta, apenas algumas frases, e n\xe3o seja muito descritivo."})})})}),"\n",(0,o.jsx)(a.p,{children:"N\xe3o est\xe1 claro no prompt acima quantas frases usar e qual estilo. Voc\xea ainda pode obter uma boa resposta com o prompt acima, mas o melhor prompt seria aquele que \xe9 muito espec\xedfico, conciso e direto ao ponto. Algo como:"}),"\n",(0,o.jsx)(a.pre,{"data-language":"text","data-theme":"default",children:(0,o.jsx)(a.code,{"data-language":"text","data-theme":"default",children:(0,o.jsx)(a.span,{className:"line",children:(0,o.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Use 2 a 3 frases para explicar o conceito de engenharia de prompt a um aluno do ensino m\xe9dio."})})})}),"\n",(0,o.jsx)(a.h3,{id:"fazer-ou-n\xe3o-fazer",children:"Fazer ou n\xe3o fazer?"}),"\n",(0,o.jsx)(a.p,{children:"Outra dica comum ao criar prompts \xe9 evitar dizer o que n\xe3o fazer, mas dizer o que fazer. Isso incentiva mais especificidade e concentra-se nos detalhes que levam a boas respostas do modelo."}),"\n",(0,o.jsx)(a.p,{children:"Aqui est\xe1 um exemplo de um chatbot de recomenda\xe7\xe3o de filme falhando exatamente no que eu n\xe3o quero que ele fa\xe7a por causa de como escrevi a instru\xe7\xe3o -- focando no que n\xe3o fazer."}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.em,{children:"Prompt:"})}),"\n",(0,o.jsx)(a.pre,{"data-language":"text","data-theme":"default",children:(0,o.jsxs)(a.code,{"data-language":"text","data-theme":"default",children:[(0,o.jsx)(a.span,{className:"line",children:(0,o.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"O agente a seguir recomenda filmes para um cliente. N\xc3O PE\xc7A INTERESSES. N\xc3O PE\xc7A INFORMA\xc7\xd5ES PESSOAIS."})}),"\n",(0,o.jsx)(a.span,{className:"line",children:(0,o.jsx)(a.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,o.jsx)(a.span,{className:"line",children:(0,o.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Cliente: Por favor, recomende um filme baseado nos meus interesses."})}),"\n",(0,o.jsx)(a.span,{className:"line",children:(0,o.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Agente:"})})]})}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.em,{children:"Sa\xedda:"})}),"\n",(0,o.jsx)(a.pre,{"data-language":"text","data-theme":"default",children:(0,o.jsx)(a.code,{"data-language":"text","data-theme":"default",children:(0,o.jsx)(a.span,{className:"line",children:(0,o.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Claro, posso recomendar um filme baseado em seus interesses. Que tipo de filme voc\xea gostaria de assistir? Voc\xea prefere a\xe7\xe3o, com\xe9dia, romance ou outra coisa?"})})})}),"\n",(0,o.jsx)(a.p,{children:"Aqui est\xe1 um prompt melhor:"}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.em,{children:"Prompt:"})}),"\n",(0,o.jsx)(a.pre,{"data-language":"text","data-theme":"default",children:(0,o.jsxs)(a.code,{"data-language":"text","data-theme":"default",children:[(0,o.jsx)(a.span,{className:"line",children:(0,o.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:'O agente a seguir recomenda filmes para um cliente. O agente \xe9 respons\xe1vel por recomendar um filme dos principais filmes de tend\xeancias globais. Deve abster-se de perguntar aos usu\xe1rios sobre suas prefer\xeancias e evitar pedir informa\xe7\xf5es pessoais. Se o agente n\xe3o tiver um filme para recomendar, ele deve responder "Desculpe, n\xe3o foi poss\xedvel encontrar um filme para recomendar hoje.".'})}),"\n",(0,o.jsx)(a.span,{className:"line",children:(0,o.jsx)(a.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,o.jsx)(a.span,{className:"line",children:(0,o.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Cliente: Por favor, recomende um filme baseado nos meus interesses."})}),"\n",(0,o.jsx)(a.span,{className:"line",children:(0,o.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Agente:"})})]})}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.em,{children:"Sa\xedda:"})}),"\n",(0,o.jsx)(a.pre,{"data-language":"text","data-theme":"default",children:(0,o.jsx)(a.code,{"data-language":"text","data-theme":"default",children:(0,o.jsx)(a.span,{className:"line",children:(0,o.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Desculpe, n\xe3o tenho nenhuma informa\xe7\xe3o sobre seus interesses. No entanto, aqui est\xe1 uma lista dos principais filmes de tend\xeancias globais no momento: [lista de filmes]. Espero que encontre algo que goste!"})})})}),"\n",(0,o.jsxs)(a.p,{children:["Alguns dos exemplos acima foram adotados do ",(0,o.jsx)(a.a,{href:"https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-openai-api",children:'artigo "Melhores pr\xe1ticas para engenharia de prompt com OpenAI API".'})]})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:a}=Object.assign({},(0,i.a)(),e.components);return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/introduction/tips.pt.mdx",route:"/introduction/tips",timestamp:1681391275e3,pageMap:[{kind:"Meta",locale:"pt",data:{index:"Prompt Engineering",introduction:"Introdu\xe7\xe3o",techniques:"T\xe9cnicas",applications:"Aplica\xe7\xf5es",models:"Modelos",risks:"Riscos e usos indevidos",papers:"Artigos",tools:"Ferramentas",notebooks:"Notebooks",datasets:"Conjuntos de dados",readings:"Leituras Adicionais",course:{title:"Curso de Engenharia Prompt",type:"page"},services:{title:"Servi\xe7os",type:"page"},about:{title:"Sobre",type:"page"}}},{kind:"MdxPage",name:"about",route:"/about",locale:"pt"},{kind:"Folder",name:"applications",route:"/applications",children:[{kind:"Meta",locale:"pt",data:{pal:"Program-Aided Language Models",generating:"Generating Data",coding:"Generating Code",workplace_casestudy:"Graduate Job Classification Case Study",pf:"Prompt Function"}},{kind:"MdxPage",name:"coding",route:"/applications/coding",locale:"pt"},{kind:"MdxPage",name:"generating",route:"/applications/generating",locale:"pt"},{kind:"MdxPage",name:"pal",route:"/applications/pal",locale:"pt"},{kind:"MdxPage",name:"pf",route:"/applications/pf",locale:"pt"},{kind:"MdxPage",name:"workplace_casestudy",route:"/applications/workplace_casestudy",locale:"pt"},{kind:"MdxPage",name:"generating_textbooks",route:"/applications/generating_textbooks",locale:"en"},{kind:"MdxPage",name:"synthetic_rag",route:"/applications/synthetic_rag",locale:"en"}]},{kind:"MdxPage",name:"applications",route:"/applications",locale:"pt"},{kind:"MdxPage",name:"course",route:"/course",locale:"pt"},{kind:"MdxPage",name:"datasets",route:"/datasets",locale:"pt"},{kind:"MdxPage",name:"index",route:"/",locale:"pt"},{kind:"Folder",name:"introduction",route:"/introduction",children:[{kind:"Meta",locale:"pt",data:{settings:"Configura\xe7\xf5es LLM",basics:"B\xe1sico de Prompting",elements:"Elementos de Prompt",tips:"Dicas Gerais para Designing de Prompts",examples:"Exemplos de Prompts"}},{kind:"MdxPage",name:"basics",route:"/introduction/basics",locale:"pt"},{kind:"MdxPage",name:"elements",route:"/introduction/elements",locale:"pt"},{kind:"MdxPage",name:"examples",route:"/introduction/examples",locale:"pt"},{kind:"MdxPage",name:"settings",route:"/introduction/settings",locale:"pt"},{kind:"MdxPage",name:"tips",route:"/introduction/tips",locale:"pt"}]},{kind:"MdxPage",name:"introduction",route:"/introduction",locale:"pt"},{kind:"Folder",name:"models",route:"/models",children:[{kind:"Meta",locale:"pt",data:{flan:"Flan",chatgpt:"ChatGPT",llama:"LLaMA","gpt-4":"GPT-4","mistral-7b":"Mistral 7B",collection:"Model Collection"}},{kind:"MdxPage",name:"chatgpt",route:"/models/chatgpt",locale:"pt"},{kind:"MdxPage",name:"collection",route:"/models/collection",locale:"pt"},{kind:"MdxPage",name:"flan",route:"/models/flan",locale:"pt"},{kind:"MdxPage",name:"gpt-4",route:"/models/gpt-4",locale:"pt"},{kind:"MdxPage",name:"llama",route:"/models/llama",locale:"pt"},{kind:"MdxPage",name:"mistral-7b",route:"/models/mistral-7b",locale:"pt"}]},{kind:"MdxPage",name:"models",route:"/models",locale:"pt"},{kind:"MdxPage",name:"notebooks",route:"/notebooks",locale:"pt"},{kind:"MdxPage",name:"papers",route:"/papers",locale:"pt"},{kind:"MdxPage",name:"readings",route:"/readings",locale:"pt"},{kind:"Folder",name:"risks",route:"/risks",children:[{kind:"Meta",locale:"pt",data:{adversarial:"Adversarial Prompting",factuality:"Factuality",biases:"Biases"}},{kind:"MdxPage",name:"adversarial",route:"/risks/adversarial",locale:"pt"},{kind:"MdxPage",name:"biases",route:"/risks/biases",locale:"pt"},{kind:"MdxPage",name:"factuality",route:"/risks/factuality",locale:"pt"}]},{kind:"MdxPage",name:"risks",route:"/risks",locale:"pt"},{kind:"MdxPage",name:"services",route:"/services",locale:"pt"},{kind:"Folder",name:"techniques",route:"/techniques",children:[{kind:"Meta",locale:"pt",data:{zeroshot:"Zero-shot Prompting",fewshot:"Few-shot Prompting",cot:"Chain-of-Thought Prompting",consistency:"Self-Consistency",knowledge:"Generate Knowledge Prompting",tot:"Tree of Thoughts",rag:"Retrieval Augmented Generation",art:"Automatic Reasoning and Tool-use",ape:"Automatic Prompt Engineer",activeprompt:"Active-Prompt",dsp:"Directional Stimulus Prompting",react:"ReAct",multimodalcot:"Multimodal CoT",graph:"Graph Prompting"}},{kind:"MdxPage",name:"activeprompt",route:"/techniques/activeprompt",locale:"pt"},{kind:"MdxPage",name:"ape",route:"/techniques/ape",locale:"pt"},{kind:"MdxPage",name:"art",route:"/techniques/art",locale:"pt"},{kind:"MdxPage",name:"consistency",route:"/techniques/consistency",locale:"pt"},{kind:"MdxPage",name:"cot",route:"/techniques/cot",locale:"pt"},{kind:"MdxPage",name:"dsp",route:"/techniques/dsp",locale:"pt"},{kind:"MdxPage",name:"fewshot",route:"/techniques/fewshot",locale:"pt"},{kind:"MdxPage",name:"graph",route:"/techniques/graph",locale:"pt"},{kind:"MdxPage",name:"knowledge",route:"/techniques/knowledge",locale:"pt"},{kind:"MdxPage",name:"multimodalcot",route:"/techniques/multimodalcot",locale:"pt"},{kind:"MdxPage",name:"rag",route:"/techniques/rag",locale:"pt"},{kind:"MdxPage",name:"react",route:"/techniques/react",locale:"pt"},{kind:"MdxPage",name:"tot",route:"/techniques/tot",locale:"pt"},{kind:"MdxPage",name:"zeroshot",route:"/techniques/zeroshot",locale:"pt"}]},{kind:"MdxPage",name:"techniques",route:"/techniques",locale:"pt"},{kind:"MdxPage",name:"tools",route:"/tools",locale:"pt"}],flexsearch:{codeblocks:!0},title:"Dicas gerais para projetar prompts",headings:l},pageNextRoute:"/introduction/tips.pt",nextraLayout:r.ZP,themeConfig:s.Z};a.default=(0,n.j)(d)}},function(e){e.O(0,[67892,49774,92888,40179],function(){return e(e.s=73262)}),_N_E=e.O()}]);