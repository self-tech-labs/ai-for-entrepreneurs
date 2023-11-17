(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[14383],{18405:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/models/collection.fr",function(){return n(45499)}])},43677:function(e,r,n){"use strict";n.d(r,{Z:function(){return u}});var t=n(11527),a=n(50959),i=n(85274),s=n(5341);function d(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",width:"24",height:"24",...e,children:(0,t.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}let l=e=>{let{children:r,className:n,...a}=e;return(0,t.jsx)("button",{className:(0,s.Z)("nextra-button nx-transition-all active:nx-opacity-50","nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-1.5","dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50",n),...a,children:r})};function o(e){return(0,t.jsx)("svg",{viewBox:"0 0 20 20",width:"1em",height:"1em",fill:"currentColor",...e,children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}function c(e){return(0,t.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",...e,children:[(0,t.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}let h=e=>{let{getValue:r,...n}=e,[i,s]=(0,a.useState)(!1);(0,a.useEffect)(()=>{if(!i)return;let e=setTimeout(()=>{s(!1)},2e3);return()=>{clearTimeout(e)}},[i]);let d=(0,a.useCallback)(async()=>{s(!0),(null==navigator?void 0:navigator.clipboard)||console.error("Access to clipboard rejected!");try{await navigator.clipboard.writeText(r())}catch(e){console.error("Failed to copy!")}},[r]);return(0,t.jsx)(l,{onClick:d,title:"Copy code",tabIndex:0,...n,children:(0,t.jsx)(i?o:c,{className:"nextra-copy-icon nx-pointer-events-none nx-h-4 nx-w-4"})})},x=e=>{let{children:r,className:n,hasCopyCode:i=!0,filename:o,...c}=e,x=(0,a.useRef)(null),g=(0,a.useCallback)(()=>{let e=document.documentElement.dataset,r="nextraWordWrap"in e;r?delete e.nextraWordWrap:e.nextraWordWrap=""},[]);return(0,t.jsxs)("div",{className:"nextra-code-block nx-relative nx-mt-6 first:nx-mt-0",children:[o&&(0,t.jsx)("div",{className:"nx-absolute nx-top-0 nx-z-[1] nx-w-full nx-truncate nx-rounded-t-xl nx-bg-primary-700/5 nx-py-2 nx-px-4 nx-text-xs nx-text-gray-700 dark:nx-bg-primary-300/10 dark:nx-text-gray-200",children:o}),(0,t.jsx)("pre",{className:(0,s.Z)("nx-bg-primary-700/5 nx-mb-4 nx-overflow-x-auto nx-rounded-xl nx-subpixel-antialiased dark:nx-bg-primary-300/10 nx-text-[.9em]","contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40",o?"nx-pt-12 nx-pb-4":"nx-py-4",n),ref:x,...c,children:a.isValidElement(r)&&"code"===r.type?r.props.children:r}),(0,t.jsxs)("div",{className:(0,s.Z)("nx-opacity-0 nx-transition [div:hover>&]:nx-opacity-100 focus-within:nx-opacity-100","nx-flex nx-gap-1 nx-absolute nx-m-[11px] nx-right-0",o?"nx-top-8":"nx-top-0"),children:[(0,t.jsx)(l,{onClick:g,className:"md:nx-hidden",title:"Toggle word wrap elvis",children:(0,t.jsx)(d,{className:"nx-pointer-events-none nx-h-4 nx-w-4"})}),i&&(0,t.jsx)(h,{getValue(){var e,r;return(null===(e=null===(r=x.current)||void 0===r?void 0:r.querySelector("code"))||void 0===e?void 0:e.textContent)||""}})]})]})},g={logo:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 206 246",fill:"none",children:[(0,t.jsx)("circle",{cx:"40",cy:"40",r:"40",fill:"currentColor"}),(0,t.jsx)("circle",{cx:"40",cy:"206",r:"40",fill:"currentColor"}),(0,t.jsx)("circle",{cx:"166",cy:"120",r:"40",fill:"currentColor"})]}),(0,t.jsx)("span",{style:{marginLeft:".4em",fontWeight:800},children:"Prompt Engineering Guide"})]}),i18n:[{locale:"en",text:"English"},{locale:"zh",text:"中文"},{locale:"jp",text:"日本語"},{locale:"pt",text:"Portugu\xeas"},{locale:"it",text:"Italian"},{locale:"tr",text:"T\xfcrk\xe7e"},{locale:"es",text:"Espa\xf1ol"},{locale:"fr",text:"Fran\xe7ais"},{locale:"kr",text:"한국어"},{locale:"ca",text:"Catal\xe0"},{locale:"fi",text:"Finnish"},{locale:"ru",text:"Русский"}],head:function(){let{title:e}=(0,i.ZR)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("title",{children:[e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"," "]}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,t.jsx)("meta",{property:"og:title",content:"Prompt Engineering Guide"}),(0,t.jsx)("meta",{property:"og:description",content:"A Comprehensive Overview of Prompt Engineering"}),(0,t.jsx)("meta",{name:"og:title",content:e?e+" | Prompt Engineering Guide":"Prompt Engineering Guide"}),(0,t.jsx)("link",{rel:"icon",href:"/144-favicon.svg",type:"image/svg+xml"}),(0,t.jsx)("link",{rel:"icon",href:"/144-favicon-dark.svg",type:"image/svg+xml",media:"(prefers-color-scheme: dark)"})]})},project:{link:"https://github.com/dair-ai/Prompt-Engineering-Guide"},chat:{link:"https://discord.gg/FUyz9vPAwf"},docsRepositoryBase:"https://github.com/dair-ai/Prompt-Engineering-Guide/tree/main/",footer:{text:"Copyright \xa9 2023 DAIR.AI"},search:{placeholder:"Search..."},components:{pre:x}};var u=g},45499:function(e,r,n){"use strict";n.r(r),n.d(r,{__toc:function(){return o}});var t=n(11527),a=n(55411),i=n(85274),s=n(43677);n(20492),n(95178);var d=n(82132),l=n(63622);let o=[{depth:2,value:"Models",id:"models"}];function c(e){let r=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,d.a)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{children:"Model Collection"}),"\n","\n",(0,t.jsx)(l.UW,{emoji:"⚠️",children:(0,t.jsx)(r.p,{children:"Cette section est en plein d\xe9veloppement."})}),"\n",(0,t.jsxs)(r.p,{children:["Cette section est compos\xe9e d'une collection et d'un r\xe9sum\xe9 des LLMs notables et fondamentaux. Donn\xe9es adopt\xe9es de ",(0,t.jsx)(r.a,{href:"https://paperswithcode.com/methods/category/language-models",children:"Papers with Code"})," et du travail r\xe9cent de ",(0,t.jsx)(r.a,{href:"https://arxiv.org/pdf/2303.18223.pdf",children:"Zhao et al. (2023)"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"models",children:"Models"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Model"}),(0,t.jsx)(r.th,{children:"Release Date"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arxiv.org/abs/1810.04805",children:"BERT"})}),(0,t.jsx)(r.td,{children:"2018"}),(0,t.jsx)(r.td,{children:"Bidirectional Encoder Representations from Transformers"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://s3-us-west-2.amazonaws.com/openai-assets/research-covers/language-unsupervised/language_understanding_paper.pdf",children:"GPT"})}),(0,t.jsx)(r.td,{children:"2018"}),(0,t.jsx)(r.td,{children:"Improving Language Understanding by Generative Pre-Training"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arxiv.org/abs/1907.11692",children:"RoBERTa"})}),(0,t.jsx)(r.td,{children:"2019"}),(0,t.jsx)(r.td,{children:"A Robustly Optimized BERT Pretraining Approach"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf",children:"GPT-2"})}),(0,t.jsx)(r.td,{children:"2019"}),(0,t.jsx)(r.td,{children:"Language Models are Unsupervised Multitask Learners"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arxiv.org/abs/1910.10683",children:"T5"})}),(0,t.jsx)(r.td,{children:"2019"}),(0,t.jsx)(r.td,{children:"Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arxiv.org/abs/1910.13461",children:"BART"})}),(0,t.jsx)(r.td,{children:"2019"}),(0,t.jsx)(r.td,{children:"Denoising Sequence-to-Sequence Pre-training for Natural Language Generation, Translation, and Comprehension"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arxiv.org/abs/1909.11942",children:"ALBERT"})}),(0,t.jsx)(r.td,{children:"2019"}),(0,t.jsx)(r.td,{children:"A Lite BERT for Self-supervised Learning of Language Representations"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arxiv.org/abs/1906.08237",children:"XLNet"})}),(0,t.jsx)(r.td,{children:"2019"}),(0,t.jsx)(r.td,{children:"Generalized Autoregressive Pretraining for Language Understanding and Generation"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arxiv.org/abs/1909.05858",children:"CTRL"})}),(0,t.jsx)(r.td,{children:"2019"}),(0,t.jsx)(r.td,{children:"CTRL: A Conditional Transformer Language Model for Controllable Generation"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arxiv.org/abs/1904.09223v1",children:"ERNIE"})}),(0,t.jsx)(r.td,{children:"2019"}),(0,t.jsx)(r.td,{children:"ERNIE: Enhanced Representation through Knowledge Integration"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arxiv.org/abs/2006.16668v1",children:"GShard"})}),(0,t.jsx)(r.td,{children:"2020"}),(0,t.jsx)(r.td,{children:"GShard: Scaling Giant Models with Conditional Computation and Automatic Sharding"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arxiv.org/abs/2005.14165",children:"GPT-3"})}),(0,t.jsx)(r.td,{children:"2020"}),(0,t.jsx)(r.td,{children:"Language Models are Few-Shot Learners"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arxiv.org/abs/2201.08239v3",children:"LaMDA"})}),(0,t.jsx)(r.td,{children:"2021"}),(0,t.jsx)(r.td,{children:"LaMDA: Language Models for Dialog Applications"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arxiv.org/abs/2104.12369v1",children:"PanGu-α"})}),(0,t.jsx)(r.td,{children:"2021"}),(0,t.jsx)(r.td,{children:"PanGu-α: Large-scale Autoregressive Pretrained Chinese Language Models with Auto-parallel Computation"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arxiv.org/abs/2010.11934v3",children:"mT5"})}),(0,t.jsx)(r.td,{children:"2021"}),(0,t.jsx)(r.td,{children:"mT5: A massively multilingual pre-trained text-to-text transformer"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arxiv.org/abs/2106.10715v3",children:"CPM-2"})}),(0,t.jsx)(r.td,{children:"2021"}),(0,t.jsx)(r.td,{children:"CPM-2: Large-scale Cost-effective Pre-trained Language Models"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arxiv.org/abs/2110.08207",children:"T0"})}),(0,t.jsx)(r.td,{children:"2021"}),(0,t.jsx)(r.td,{children:"Multitask Prompted Training Enables Zero-Shot Task Generalization"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arxiv.org/abs/2109.04650",children:"HyperCLOVA"})}),(0,t.jsx)(r.td,{children:"2021"}),(0,t.jsx)(r.td,{children:"What Changes Can Large-scale Language Models Bring? Intensive Study on HyperCLOVA: Billions-scale Korean Generative Pretrained Transformers"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arxiv.org/abs/2107.03374v2",children:"Codex"})}),(0,t.jsx)(r.td,{children:"2021"}),(0,t.jsx)(r.td,{children:"Evaluating Large Language Models Trained on Code"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arxiv.org/abs/2107.02137v1",children:"ERNIE 3.0"})}),(0,t.jsx)(r.td,{children:"2021"}),(0,t.jsx)(r.td,{children:"ERNIE 3.0: Large-scale Knowledge Enhanced Pre-training for Language Understanding and Generation"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://uploads-ssl.webflow.com/60fd4503684b466578c0d307/61138924626a6981ee09caf6_jurassic_tech_paper.pdf",children:"Jurassic-1"})}),(0,t.jsx)(r.td,{children:"2021"}),(0,t.jsx)(r.td,{children:"Jurassic-1: Technical Details and Evaluation"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arxiv.org/abs/2109.01652v5",children:"FLAN"})}),(0,t.jsx)(r.td,{children:"2021"}),(0,t.jsx)(r.td,{children:"Finetuned Language Models Are Zero-Shot Learners"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arxiv.org/abs/2201.11990v3",children:"MT-NLG"})}),(0,t.jsx)(r.td,{children:"2021"}),(0,t.jsx)(r.td,{children:"Using DeepSpeed and Megatron to Train Megatron-Turing NLG 530B, A Large-Scale Generative Language Model"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arxiv.org/abs/2110.04725v2",children:"Yuan 1.0"})}),(0,t.jsx)(r.td,{children:"2021"}),(0,t.jsx)(r.td,{children:"Yuan 1.0: Large-Scale Pre-trained Language Model in Zero-Shot and Few-Shot Learning"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arxiv.org/abs/2112.09332v3",children:"WebGPT"})}),(0,t.jsx)(r.td,{children:"2021"}),(0,t.jsx)(r.td,{children:"WebGPT: Browser-assisted question-answering with human feedback"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arxiv.org/abs/2112.11446v2",children:"Gopher"})}),(0,t.jsx)(r.td,{children:"2021"}),(0,t.jsx)(r.td,{children:"Scaling Language Models: Methods, Analysis & Insights from Training Gopher"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arxiv.org/abs/2112.12731v1",children:"ERNIE 3.0 Titan"})}),(0,t.jsx)(r.td,{children:"2021"}),(0,t.jsx)(r.td,{children:"ERNIE 3.0 Titan: Exploring Larger-scale Knowledge Enhanced Pre-training for Language Understanding and Generation"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arxiv.org/abs/2112.06905",children:"GLaM"})}),(0,t.jsx)(r.td,{children:"2021"}),(0,t.jsx)(r.td,{children:"GLaM: Efficient Scaling of Language Models with Mixture-of-Experts"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arxiv.org/abs/2203.02155v1",children:"InstructGPT"})}),(0,t.jsx)(r.td,{children:"2022"}),(0,t.jsx)(r.td,{children:"Training language models to follow instructions with human feedback"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arxiv.org/abs/2204.06745v1",children:"GPT-NeoX-20B"})}),(0,t.jsx)(r.td,{children:"2022"}),(0,t.jsx)(r.td,{children:"GPT-NeoX-20B: An Open-Source Autoregressive Language Model"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arxiv.org/abs/2203.07814v1",children:"AlphaCode"})}),(0,t.jsx)(r.td,{children:"2022"}),(0,t.jsx)(r.td,{children:"Competition-Level Code Generation with AlphaCode"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arxiv.org/abs/2203.13474v5",children:"CodeGen"})}),(0,t.jsx)(r.td,{children:"2022"}),(0,t.jsx)(r.td,{children:"CodeGen: An Open Large Language Model for Code with Multi-Turn Program Synthesis"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arxiv.org/abs/2203.15556",children:"Chinchilla"})}),(0,t.jsx)(r.td,{children:"2022"}),(0,t.jsx)(r.td,{children:"Shows that for a compute budget, the best performances are not achieved by the largest models but by smaller models trained on more data."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arxiv.org/abs/2204.07705v3",children:"Tk-Instruct"})}),(0,t.jsx)(r.td,{children:"2022"}),(0,t.jsx)(r.td,{children:"Super-NaturalInstructions: Generalization via Declarative Instructions on 1600+ NLP Tasks"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arxiv.org/abs/2205.05131v3",children:"UL2"})}),(0,t.jsx)(r.td,{children:"2022"}),(0,t.jsx)(r.td,{children:"UL2: Unifying Language Learning Paradigms"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arxiv.org/abs/2204.02311v5",children:"PaLM"})}),(0,t.jsx)(r.td,{children:"2022"}),(0,t.jsx)(r.td,{children:"PaLM: Scaling Language Modeling with Pathways"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arxiv.org/abs/2205.01068",children:"OPT"})}),(0,t.jsx)(r.td,{children:"2022"}),(0,t.jsx)(r.td,{children:"OPT: Open Pre-trained Transformer Language Models"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arxiv.org/abs/2211.05100v3",children:"BLOOM"})}),(0,t.jsx)(r.td,{children:"2022"}),(0,t.jsx)(r.td,{children:"BLOOM: A 176B-Parameter Open-Access Multilingual Language Model"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arxiv.org/abs/2210.02414v1",children:"GLM-130B"})}),(0,t.jsx)(r.td,{children:"2022"}),(0,t.jsx)(r.td,{children:"GLM-130B: An Open Bilingual Pre-trained Model"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arxiv.org/abs/2208.01448v2",children:"AlexaTM"})}),(0,t.jsx)(r.td,{children:"2022"}),(0,t.jsx)(r.td,{children:"AlexaTM 20B: Few-Shot Learning Using a Large-Scale Multilingual Seq2Seq Model"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arxiv.org/abs/2210.11416v5",children:"Flan-T5"})}),(0,t.jsx)(r.td,{children:"2022"}),(0,t.jsx)(r.td,{children:"Scaling Instruction-Finetuned Language Models"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arxiv.org/abs/2209.14375",children:"Sparrow"})}),(0,t.jsx)(r.td,{children:"2022"}),(0,t.jsx)(r.td,{children:"Improving alignment of dialogue agents via targeted human judgements"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arxiv.org/abs/2210.11399v2",children:"U-PaLM"})}),(0,t.jsx)(r.td,{children:"2022"}),(0,t.jsx)(r.td,{children:"Transcending Scaling Laws with 0.1% Extra Compute"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arxiv.org/abs/2211.01786v1",children:"mT0"})}),(0,t.jsx)(r.td,{children:"2022"}),(0,t.jsx)(r.td,{children:"Crosslingual Generalization through Multitask Finetuning"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arxiv.org/abs/2211.09085v1",children:"Galactica"})}),(0,t.jsx)(r.td,{children:"2022"}),(0,t.jsx)(r.td,{children:"Galactica: A Large Language Model for Science"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arxiv.org/abs/2212.12017v3",children:"OPT-IML"})}),(0,t.jsx)(r.td,{children:"2022"}),(0,t.jsx)(r.td,{children:"OPT-IML: Scaling Language Model Instruction Meta Learning through the Lens of Generalization"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arxiv.org/abs/2302.13971v1",children:"LLaMA"})}),(0,t.jsx)(r.td,{children:"2023"}),(0,t.jsx)(r.td,{children:"LLaMA: Open and Efficient Foundation Language Models"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arxiv.org/abs/2303.08774v3",children:"GPT-4"})}),(0,t.jsx)(r.td,{children:"2023"}),(0,t.jsx)(r.td,{children:"GPT-4 Technical Report"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arxiv.org/abs/2303.10845v1",children:"PanGu-Σ"})}),(0,t.jsx)(r.td,{children:"2023"}),(0,t.jsx)(r.td,{children:"PanGu-Σ: Towards Trillion Parameter Language Model with Sparse Heterogeneous Computing"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arxiv.org/abs/2303.17564v1",children:"BloombergGPT"})}),(0,t.jsx)(r.td,{children:"2023"}),(0,t.jsx)(r.td,{children:"BloombergGPT: A Large Language Model for Finance"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://arxiv.org/abs/2304.03208",children:"Cerebras-GPT"})}),(0,t.jsx)(r.td,{children:"2023"}),(0,t.jsx)(r.td,{children:"Cerebras-GPT: Open Compute-Optimal Language Models Trained on the Cerebras Wafer-Scale Cluster"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://ai.google/static/documents/palm2techreport.pdf",children:"PaLM 2"})}),(0,t.jsx)(r.td,{children:"2023"}),(0,t.jsx)(r.td,{children:"A Language Model that has better multilingual and reasoning capabilities and is more compute-efficient than its predecessor PaLM."})]})]})]})]})}let h={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,d.a)(),e.components);return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/models/collection.fr.mdx",route:"/models/collection",timestamp:1684273448e3,pageMap:[{kind:"Meta",locale:"fr",data:{index:"Prompt Engineering",introduction:"Introduction",techniques:"Techniques",applications:"Applications",models:"Models",risks:"Risques et M\xe9susages",papers:"Papers",workflows:"Workflows Genilem",tools:"Outils",notebooks:"Notebooks",datasets:"Datasets",readings:"Lectures suppl\xe9mentaires",course:{title:"Prompt Engineering Course",type:"page"},services:{title:"Services",type:"page"},about:{title:"\xc0 propos",type:"page"}}},{kind:"MdxPage",name:"about",route:"/about",locale:"fr"},{kind:"Folder",name:"applications",route:"/applications",children:[{kind:"Meta",locale:"fr",data:{pal:"Mod\xe8les de langage assist\xe9s par programme",generating:"G\xe9n\xe9ration de donn\xe9es",coding:"Generating Code",workplace_casestudy:"\xc9tude de cas sur la classification des emplois des dipl\xf4m\xe9s",pf:"Prompt Function"}},{kind:"MdxPage",name:"coding",route:"/applications/coding",locale:"fr"},{kind:"MdxPage",name:"generating",route:"/applications/generating",locale:"fr"},{kind:"MdxPage",name:"pal",route:"/applications/pal",locale:"fr"},{kind:"MdxPage",name:"pf",route:"/applications/pf",locale:"fr"},{kind:"MdxPage",name:"workplace_casestudy",route:"/applications/workplace_casestudy",locale:"fr"},{kind:"MdxPage",name:"generating_textbooks",route:"/applications/generating_textbooks",locale:"en"},{kind:"MdxPage",name:"synthetic_rag",route:"/applications/synthetic_rag",locale:"en"}]},{kind:"MdxPage",name:"applications",route:"/applications",locale:"fr"},{kind:"MdxPage",name:"course",route:"/course",locale:"fr"},{kind:"MdxPage",name:"datasets",route:"/datasets",locale:"fr"},{kind:"MdxPage",name:"index",route:"/",locale:"fr"},{kind:"Folder",name:"introduction",route:"/introduction",children:[{kind:"Meta",locale:"fr",data:{settings:"Param\xe8tres LLM",basics:"Principes de base en Prompting",elements:"\xc9l\xe9ments d'un prompt",tips:"Conseils g\xe9n\xe9raux pour la conception de prompts",examples:"Exemples de prompts"}},{kind:"MdxPage",name:"basics",route:"/introduction/basics",locale:"fr"},{kind:"MdxPage",name:"elements",route:"/introduction/elements",locale:"fr"},{kind:"MdxPage",name:"examples",route:"/introduction/examples",locale:"fr"},{kind:"MdxPage",name:"settings",route:"/introduction/settings",locale:"fr"},{kind:"MdxPage",name:"tips",route:"/introduction/tips",locale:"fr"}]},{kind:"MdxPage",name:"introduction",route:"/introduction",locale:"fr"},{kind:"Folder",name:"models",route:"/models",children:[{kind:"Meta",locale:"fr",data:{flan:"Flan",chatgpt:"ChatGPT",llama:"LLaMA","gpt-4":"GPT-4","mistral-7b":"Mistral 7B",collection:"Collection de mod\xe8les"}},{kind:"MdxPage",name:"chatgpt",route:"/models/chatgpt",locale:"fr"},{kind:"MdxPage",name:"collection",route:"/models/collection",locale:"fr"},{kind:"MdxPage",name:"flan",route:"/models/flan",locale:"fr"},{kind:"MdxPage",name:"gpt-4",route:"/models/gpt-4",locale:"fr"},{kind:"MdxPage",name:"llama",route:"/models/llama",locale:"fr"},{kind:"MdxPage",name:"mistral-7b",route:"/models/mistral-7b",locale:"fr"}]},{kind:"MdxPage",name:"models",route:"/models",locale:"fr"},{kind:"MdxPage",name:"notebooks",route:"/notebooks",locale:"fr"},{kind:"MdxPage",name:"papers",route:"/papers",locale:"fr"},{kind:"MdxPage",name:"readings",route:"/readings",locale:"fr"},{kind:"Folder",name:"risks",route:"/risks",children:[{kind:"Meta",locale:"fr",data:{adversarial:"Incitation contradictoire",factuality:"Factualit\xe9",biases:"Biases"}},{kind:"MdxPage",name:"adversarial",route:"/risks/adversarial",locale:"fr"},{kind:"MdxPage",name:"biases",route:"/risks/biases",locale:"fr"},{kind:"MdxPage",name:"factuality",route:"/risks/factuality",locale:"fr"}]},{kind:"MdxPage",name:"risks",route:"/risks",locale:"fr"},{kind:"MdxPage",name:"services",route:"/services",locale:"fr"},{kind:"Folder",name:"techniques",route:"/techniques",children:[{kind:"Meta",locale:"fr",data:{zeroshot:"Zero-shot Prompting",fewshot:"Few-shot Prompting",cot:"Chain-of-Thought Prompting",consistency:"Self-Consistency",knowledge:"Generate Knowledge Prompting",tot:"Tree of Thoughts",rag:"Retrieval Augmented Generation",art:"Automatic Reasoning and Tool-use",ape:"Automatic Prompt Engineer",activeprompt:"Active-Prompt",dsp:"Directional Stimulus Prompting",react:"ReAct",multimodalcot:"Multimodal CoT",graph:"Graph Prompting"}},{kind:"MdxPage",name:"activeprompt",route:"/techniques/activeprompt",locale:"fr"},{kind:"MdxPage",name:"ape",route:"/techniques/ape",locale:"fr"},{kind:"MdxPage",name:"art",route:"/techniques/art",locale:"fr"},{kind:"MdxPage",name:"consistency",route:"/techniques/consistency",locale:"fr"},{kind:"MdxPage",name:"cot",route:"/techniques/cot",locale:"fr"},{kind:"MdxPage",name:"dsp",route:"/techniques/dsp",locale:"fr"},{kind:"MdxPage",name:"fewshot",route:"/techniques/fewshot",locale:"fr"},{kind:"MdxPage",name:"graph",route:"/techniques/graph",locale:"fr"},{kind:"MdxPage",name:"knowledge",route:"/techniques/knowledge",locale:"fr"},{kind:"MdxPage",name:"multimodalcot",route:"/techniques/multimodalcot",locale:"fr"},{kind:"MdxPage",name:"rag",route:"/techniques/rag",locale:"fr"},{kind:"MdxPage",name:"react",route:"/techniques/react",locale:"fr"},{kind:"MdxPage",name:"tot",route:"/techniques/tot",locale:"fr"},{kind:"MdxPage",name:"zeroshot",route:"/techniques/zeroshot",locale:"fr"}]},{kind:"MdxPage",name:"techniques",route:"/techniques",locale:"fr"},{kind:"MdxPage",name:"tools",route:"/tools",locale:"fr"},{kind:"MdxPage",name:"workflows",route:"/workflows",locale:"fr"}],flexsearch:{codeblocks:!0},title:"Model Collection",headings:o},pageNextRoute:"/models/collection.fr",nextraLayout:i.ZP,themeConfig:s.Z};r.default=(0,a.j)(h)}},function(e){e.O(0,[67892,49774,92888,40179],function(){return e(e.s=18405)}),_N_E=e.O()}]);