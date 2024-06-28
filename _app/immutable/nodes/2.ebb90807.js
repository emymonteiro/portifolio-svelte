import{s as Z,y as ve,f as x,a as D,g as p,h as E,d as _,c as k,j as c,i as N,v as h,z as ge,A as xe,B as pe,u as L,C as se,E as ue,l as _e,m as $e,n as we,q as Ce,e as ye}from"../chunks/scheduler.68b3b587.js";import{S as ee,i as te,a as V,t as j,b as q,d as z,m as B,e as F,g as de,c as he}from"../chunks/index.e060e014.js";import{I as Q}from"../chunks/Icon.f1b64e73.js";function Y(a){return(a==null?void 0:a.length)!==void 0?a:Array.from(a)}function K(a){return a%2==0}const qe=a=>({}),Ve=a=>({}),Be=a=>({}),De=a=>({}),Fe=a=>({}),ke=a=>({});function ze(a){let e,t,l,s,r,n,w,u,m,f,d;const b=a[2].content,i=ve(b,a,a[1],ke),I=a[2].img,o=ve(I,a,a[1],De),$=a[2].footer,v=ve($,a,a[1],Ve);return{c(){e=x("section"),t=x("div"),l=x("div"),s=x("div"),i&&i.c(),r=D(),n=x("div"),o&&o.c(),u=D(),m=x("div"),v&&v.c(),this.h()},l(g){e=p(g,"SECTION",{class:!0});var C=E(e);t=p(C,"DIV",{class:!0});var U=E(t);l=p(U,"DIV",{class:!0});var J=E(l);s=p(J,"DIV",{class:!0});var M=E(s);i&&i.l(M),M.forEach(_),r=k(J),n=p(J,"DIV",{class:!0});var T=E(n);o&&o.l(T),T.forEach(_),J.forEach(_),u=k(U),m=p(U,"DIV",{class:!0});var G=E(m);v&&v.l(G),G.forEach(_),U.forEach(_),C.forEach(_),this.h()},h(){c(s,"class","md:w-[50%]"),c(n,"class","md:w-[50%] w-full pb-8 md:pb-0 md:h-96 ml-auto flex items-center justify-center"),c(l,"class",w=`flex ${K(a[0])?"md:flex-row":"md:flex-row-reverse"} flex-col-reverse
			items-center w-full overflow-hidden`),c(m,"class","mt-32 md:mt-0 w-full md:max-w-4xl md:pl-8 pl-0 ml-8 md:ml-0"),c(t,"class","flex flex-col w-full items-center md:max-w-4xl max-w-lg"),c(e,"class",f=`h-[calc(100vh+5rem)] md:h-[calc(100vh-5rem)] ${K(a[0])?"bg-base-200":"bg-base-100"} flex items-center justify-center`)},m(g,C){N(g,e,C),h(e,t),h(t,l),h(l,s),i&&i.m(s,null),h(l,r),h(l,n),o&&o.m(n,null),h(t,u),h(t,m),v&&v.m(m,null),d=!0},p(g,[C]){i&&i.p&&(!d||C&2)&&ge(i,b,g,g[1],d?pe(b,g[1],C,Fe):xe(g[1]),ke),o&&o.p&&(!d||C&2)&&ge(o,I,g,g[1],d?pe(I,g[1],C,Be):xe(g[1]),De),(!d||C&1&&w!==(w=`flex ${K(g[0])?"md:flex-row":"md:flex-row-reverse"} flex-col-reverse
			items-center w-full overflow-hidden`))&&c(l,"class",w),v&&v.p&&(!d||C&2)&&ge(v,$,g,g[1],d?pe($,g[1],C,qe):xe(g[1]),Ve),(!d||C&1&&f!==(f=`h-[calc(100vh+5rem)] md:h-[calc(100vh-5rem)] ${K(g[0])?"bg-base-200":"bg-base-100"} flex items-center justify-center`))&&c(e,"class",f)},i(g){d||(V(i,g),V(o,g),V(v,g),d=!0)},o(g){j(i,g),j(o,g),j(v,g),d=!1},d(g){g&&_(e),i&&i.d(g),o&&o.d(g),v&&v.d(g)}}}function Je(a,e,t){let{$$slots:l={},$$scope:s}=e,{index:r}=e;return a.$$set=n=>{"index"in n&&t(0,r=n.index),"$$scope"in n&&t(1,s=n.$$scope)},[r,s,l]}class Pe extends ee{constructor(e){super(),te(this,e,Je,ze,Z,{index:0})}}function Ge(a){let e,t='<img src="workplace.jpg" class="w-full rounded-xl" alt=""/>';return{c(){e=x("div"),e.innerHTML=t,this.h()},l(l){e=p(l,"DIV",{slot:!0,class:!0,"data-svelte-h":!0}),L(e)!=="svelte-10675kd"&&(e.innerHTML=t),this.h()},h(){c(e,"slot","img"),c(e,"class","flex")},m(l,s){N(l,e,s)},p:se,d(l){l&&_(e)}}}function Re(a){let e,t=`<h1 class="text-info uppercase font-bold text-xl">About me</h1> <h2 class="font-bold text-2xl text-base-content">A Front-end Developer who loves challenges 💻</h2> <span class="">I&#39;ve been working in development for years, I&#39;ve always learned everything on my own and
				I&#39;ve had as many autonomous personal projects as well as startups projects. I adapt very
				well to work environments. I really enjoy learning new things and solving problems.</span>`;return{c(){e=x("span"),e.innerHTML=t,this.h()},l(l){e=p(l,"SPAN",{slot:!0,class:!0,"data-svelte-h":!0}),L(e)!=="svelte-xe7pd7"&&(e.innerHTML=t),this.h()},h(){c(e,"slot","content"),c(e,"class","flex flex-col gap-3 max-w-sm md:pl-5 pl-0")},m(l,s){N(l,e,s)},p:se,d(l){l&&_(e)}}}function Oe(a){let e,t,l;return t=new Pe({props:{index:a[0],$$slots:{content:[Re],img:[Ge]},$$scope:{ctx:a}}}),{c(){e=x("div"),q(t.$$.fragment),this.h()},l(s){e=p(s,"DIV",{id:!0,class:!0});var r=E(e);z(t.$$.fragment,r),r.forEach(_),this.h()},h(){c(e,"id","About"),c(e,"class","px-5")},m(s,r){N(s,e,r),B(t,e,null),l=!0},p(s,[r]){const n={};r&1&&(n.index=s[0]),r&2&&(n.$$scope={dirty:r,ctx:s}),t.$set(n)},i(s){l||(V(t.$$.fragment,s),l=!0)},o(s){j(t.$$.fragment,s),l=!1},d(s){s&&_(e),F(t)}}}function Ue(a,e,t){let{index:l}=e;return a.$$set=s=>{"index"in s&&t(0,l=s.index)},[l]}class We extends ee{constructor(e){super(),te(this,e,Ue,Oe,Z,{index:0})}}function Ke(a){let e,t,l,s="Contact",r,n,w="If you wanna talk, let's make it happen ✉️",u,m,f,d,b,i,I='<h1 class="font-semibold text-xl">Location</h1> <span class="text-md">Campo Grande, MS - Brazil</span>',o,$,v,g,C,U='<h1 class="font-semibold text-xl">Mail</h1> <a href="mailto:emymonteiro.sweetie@gmail.com" target="_blank" class="text-ellipsis text-md hover:text-info">emymonteiro.sweetie@gmail.com</a>',J,M;return d=new Q({props:{class:"text-3xl text-info",icon:"uiw:map"}}),v=new Q({props:{class:"text-3xl text-info",icon:"material-symbols:mail-outline"}}),{c(){e=x("div"),t=x("div"),l=x("h1"),l.textContent=s,r=D(),n=x("h2"),n.textContent=w,u=D(),m=x("div"),f=x("div"),q(d.$$.fragment),b=D(),i=x("div"),i.innerHTML=I,o=D(),$=x("div"),q(v.$$.fragment),g=D(),C=x("div"),C.innerHTML=U,this.h()},l(T){e=p(T,"DIV",{id:!0,class:!0});var G=E(e);t=p(G,"DIV",{class:!0});var H=E(t);l=p(H,"H1",{class:!0,"data-svelte-h":!0}),L(l)!=="svelte-tyxmhu"&&(l.textContent=s),r=k(H),n=p(H,"H2",{class:!0,"data-svelte-h":!0}),L(n)!=="svelte-ydrcow"&&(n.textContent=w),u=k(H),m=p(H,"DIV",{class:!0});var R=E(m);f=p(R,"DIV",{class:!0});var le=E(f);z(d.$$.fragment,le),b=k(le),i=p(le,"DIV",{"data-svelte-h":!0}),L(i)!=="svelte-18gkech"&&(i.innerHTML=I),le.forEach(_),o=k(R),$=p(R,"DIV",{class:!0});var X=E($);z(v.$$.fragment,X),g=k(X),C=p(X,"DIV",{class:!0,"data-svelte-h":!0}),L(C)!=="svelte-1ot9rj7"&&(C.innerHTML=U),X.forEach(_),R.forEach(_),H.forEach(_),G.forEach(_),this.h()},h(){c(l,"class","text-info uppercase font-bold text-xl"),c(n,"class","font-bold text-2xl text-base-content"),c(f,"class","flex items-center gap-6"),c(C,"class","w-full break-all"),c($,"class","flex items-center gap-6"),c(m,"class","mt-10 flex gap-10 w-full md:flex-row flex-col"),c(t,"class","flex flex-col w-full md:max-w-4xl max-w-lg"),c(e,"id","Contact"),c(e,"class",J=`flex w-full items-center flex-col ${K(a[0])?"bg-base-200":"bg-base-100"} p-20`)},m(T,G){N(T,e,G),h(e,t),h(t,l),h(t,r),h(t,n),h(t,u),h(t,m),h(m,f),B(d,f,null),h(f,b),h(f,i),h(m,o),h(m,$),B(v,$,null),h($,g),h($,C),M=!0},p(T,[G]){(!M||G&1&&J!==(J=`flex w-full items-center flex-col ${K(T[0])?"bg-base-200":"bg-base-100"} p-20`))&&c(e,"class",J)},i(T){M||(V(d.$$.fragment,T),V(v.$$.fragment,T),M=!0)},o(T){j(d.$$.fragment,T),j(v.$$.fragment,T),M=!1},d(T){T&&_(e),F(d),F(v)}}}function Qe(a,e,t){let{index:l}=e;return a.$$set=s=>{"index"in s&&t(0,l=s.index)},[l]}class Xe extends ee{constructor(e){super(),te(this,e,Qe,Ke,Z,{index:0})}}function Ye(a){let e,t,l="Copyright © 2023. All content was made with love",s,r,n,w,u,m,f,d;return w=new Q({props:{class:"hover:text-info",icon:"mdi:linkedin"}}),f=new Q({props:{class:"hover:text-info",icon:"mdi:github"}}),{c(){e=x("div"),t=x("h1"),t.textContent=l,s=D(),r=x("div"),n=x("a"),q(w.$$.fragment),u=D(),m=x("a"),q(f.$$.fragment),this.h()},l(b){e=p(b,"DIV",{class:!0});var i=E(e);t=p(i,"H1",{class:!0,"data-svelte-h":!0}),L(t)!=="svelte-pn41uz"&&(t.textContent=l),s=k(i),r=p(i,"DIV",{class:!0});var I=E(r);n=p(I,"A",{href:!0,target:!0});var o=E(n);z(w.$$.fragment,o),o.forEach(_),u=k(I),m=p(I,"A",{href:!0,target:!0});var $=E(m);z(f.$$.fragment,$),$.forEach(_),I.forEach(_),i.forEach(_),this.h()},h(){c(t,"class","font-semibold text-xl flex md:max-w-2xl max-w-sm mx-5 flex-wrap"),c(n,"href","https://www.linkedin.com/in/emilly-monteiro-580254191/"),c(n,"target","_blank"),c(m,"href","https://github.com/emymonteiro"),c(m,"target","_blank"),c(r,"class","text-3xl flex gap-3 w-sm flex-wrap"),c(e,"class","bg-neutral-focus text-center h-32 flex items-center justify-around text-neutral-content")},m(b,i){N(b,e,i),h(e,t),h(e,s),h(e,r),h(r,n),B(w,n,null),h(r,u),h(r,m),B(f,m,null),d=!0},p:se,i(b){d||(V(w.$$.fragment,b),V(f.$$.fragment,b),d=!0)},o(b){j(w.$$.fragment,b),j(f.$$.fragment,b),d=!1},d(b){b&&_(e),F(w),F(f)}}}class Ze extends ee{constructor(e){super(),te(this,e,null,Ye,Z,{})}}function je(a,e,t){const l=a.slice();return l[2]=e[t],l}function et(a){let e,t,l="Front-End Svelte & VueJS Developer ☕",s,r,n=`Hi, I&#39;m Emilly Monteiro. a technology enthusiast who loves challenges.
				<ul class="font-medium"><li>📌 Campo Grande, MS - Brazil</li></ul>`,w,u,m,f,d,b,i,I;return f=new Q({props:{class:"hover:text-blue-700",icon:"mdi:linkedin"}}),i=new Q({props:{class:"hover:text-blue-700",icon:"mdi:github"}}),{c(){e=x("div"),t=x("span"),t.textContent=l,s=D(),r=x("span"),r.innerHTML=n,w=D(),u=x("div"),m=x("a"),q(f.$$.fragment),d=D(),b=x("a"),q(i.$$.fragment),this.h()},l(o){e=p(o,"DIV",{slot:!0,class:!0});var $=E(e);t=p($,"SPAN",{class:!0,"data-svelte-h":!0}),L(t)!=="svelte-1b8jyv1"&&(t.textContent=l),s=k($),r=p($,"SPAN",{class:!0,"data-svelte-h":!0}),L(r)!=="svelte-uvj3ds"&&(r.innerHTML=n),w=k($),u=p($,"DIV",{class:!0});var v=E(u);m=p(v,"A",{href:!0,target:!0});var g=E(m);z(f.$$.fragment,g),g.forEach(_),d=k(v),b=p(v,"A",{href:!0,target:!0});var C=E(b);z(i.$$.fragment,C),C.forEach(_),v.forEach(_),$.forEach(_),this.h()},h(){c(t,"class","text-4xl flex md:w-full font-bold"),c(r,"class","max-w-sm flex flex-col gap-2"),c(m,"href","https://www.linkedin.com/in/emilly-monteiro-580254191/"),c(m,"target","_blank"),c(b,"href","https://github.com/emymonteiro"),c(b,"target","_blank"),c(u,"class","flex text-3xl gap-2 text-center w-full"),c(e,"slot","content"),c(e,"class","flex flex-col gap-5 w-full p-4")},m(o,$){N(o,e,$),h(e,t),h(e,s),h(e,r),h(e,w),h(e,u),h(u,m),B(f,m,null),h(u,d),h(u,b),B(i,b,null),I=!0},p:se,i(o){I||(V(f.$$.fragment,o),V(i.$$.fragment,o),I=!0)},o(o){j(f.$$.fragment,o),j(i.$$.fragment,o),I=!1},d(o){o&&_(e),F(f),F(i)}}}function tt(a){let e,t='<img src="https://i.ibb.co/R9NVqMd/Emy-1-removebg-preview.png" alt=""/>';return{c(){e=x("div"),e.innerHTML=t,this.h()},l(l){e=p(l,"DIV",{slot:!0,class:!0,"data-svelte-h":!0}),L(e)!=="svelte-ftql1g"&&(e.innerHTML=t),this.h()},h(){c(e,"slot","img"),c(e,"class","w-full flex items-center justify-center")},m(l,s){N(l,e,s)},p:se,d(l){l&&_(e)}}}function Te(a){let e,t,l,s;return t=new Q({props:{class:"hover:text-4xl transition-all cursor-pointer",icon:a[2]}}),{c(){e=x("button"),q(t.$$.fragment),l=D(),this.h()},l(r){e=p(r,"BUTTON",{class:!0});var n=E(e);z(t.$$.fragment,n),l=k(n),n.forEach(_),this.h()},h(){c(e,"class","w-10 h-10")},m(r,n){N(r,e,n),B(t,e,null),h(e,l),s=!0},p:se,i(r){s||(V(t.$$.fragment,r),s=!0)},o(r){j(t.$$.fragment,r),s=!1},d(r){r&&_(e),F(t)}}}function lt(a){let e,t,l='<span>Tech Stack</span> <div class="md:hidden w-24 h-[0.1rem] bg-slate-400"></div>',s,r,n="|",w,u,m,f=Y(a[1]),d=[];for(let i=0;i<f.length;i+=1)d[i]=Te(je(a,f,i));const b=i=>j(d[i],1,1,()=>{d[i]=null});return{c(){e=x("div"),t=x("div"),t.innerHTML=l,s=D(),r=x("div"),r.textContent=n,w=D(),u=x("div");for(let i=0;i<d.length;i+=1)d[i].c();this.h()},l(i){e=p(i,"DIV",{slot:!0,class:!0});var I=E(e);t=p(I,"DIV",{class:!0,"data-svelte-h":!0}),L(t)!=="svelte-yea6tc"&&(t.innerHTML=l),s=k(I),r=p(I,"DIV",{class:!0,"data-svelte-h":!0}),L(r)!=="svelte-1a0alk3"&&(r.textContent=n),w=k(I),u=p(I,"DIV",{class:!0});var o=E(u);for(let $=0;$<d.length;$+=1)d[$].l(o);o.forEach(_),I.forEach(_),this.h()},h(){c(t,"class","font-medium text-center flex flex-col"),c(r,"class","font-light hidden md:block"),c(u,"class","flex gap-2 text-3xl"),c(e,"slot","footer"),c(e,"class","flex md:flex-row flex-col text-xl items-center gap-5")},m(i,I){N(i,e,I),h(e,t),h(e,s),h(e,r),h(e,w),h(e,u);for(let o=0;o<d.length;o+=1)d[o]&&d[o].m(u,null);m=!0},p(i,I){if(I&2){f=Y(i[1]);let o;for(o=0;o<f.length;o+=1){const $=je(i,f,o);d[o]?(d[o].p($,I),V(d[o],1)):(d[o]=Te($),d[o].c(),V(d[o],1),d[o].m(u,null))}for(de(),o=f.length;o<d.length;o+=1)b(o);he()}},i(i){if(!m){for(let I=0;I<f.length;I+=1)V(d[I]);m=!0}},o(i){d=d.filter(Boolean);for(let I=0;I<d.length;I+=1)j(d[I]);m=!1},d(i){i&&_(e),ue(d,i)}}}function nt(a){let e,t,l;return t=new Pe({props:{index:a[0],$$slots:{footer:[lt],img:[tt],content:[et]},$$scope:{ctx:a}}}),{c(){e=x("div"),q(t.$$.fragment),this.h()},l(s){e=p(s,"DIV",{id:!0});var r=E(e);z(t.$$.fragment,r),r.forEach(_),this.h()},h(){c(e,"id","Home")},m(s,r){N(s,e,r),B(t,e,null),l=!0},p(s,[r]){const n={};r&1&&(n.index=s[0]),r&32&&(n.$$scope={dirty:r,ctx:s}),t.$set(n)},i(s){l||(V(t.$$.fragment,s),l=!0)},o(s){j(t.$$.fragment,s),l=!1},d(s){s&&_(e),F(t)}}}function st(a,e,t){let{index:l}=e;const s=["vscode-icons:file-type-html","vscode-icons:file-type-css","vscode-icons:file-type-js-official","vscode-icons:file-type-svelte","vscode-icons:file-type-vue","vscode-icons:file-type-tailwind","vscode-icons:file-type-scss"];return a.$$set=r=>{"index"in r&&t(0,l=r.index)},[l,s]}class rt extends ee{constructor(e){super(),te(this,e,st,nt,Z,{index:0})}}function Ae(a,e,t){const l=a.slice();return l[2]=e[t],l}function He(a){let e,t,l=a[2]+"",s,r;return{c(){e=x("div"),t=x("span"),s=_e(l),r=D(),this.h()},l(n){e=p(n,"DIV",{class:!0});var w=E(e);t=p(w,"SPAN",{});var u=E(t);s=$e(u,l),u.forEach(_),r=k(w),w.forEach(_),this.h()},h(){c(e,"class","shadow py-1 px-3 rounded-md border flex items-center justify-center font-semibold")},m(n,w){N(n,e,w),h(e,t),h(t,s),h(e,r)},p(n,w){w&2&&l!==(l=n[2]+"")&&we(s,l)},d(n){n&&_(e)}}}function at(a){let e,t,l,s,r,n,w,u=a[1].title+"",m,f,d,b=a[1].description+"",i,I,o,$,v,g,C,U="Code",J,M,T,G,H,R,le="Live Demo",X,ne,ae,ie,W,re=Y(a[1].tags),S=[];for(let y=0;y<re.length;y+=1)S[y]=He(Ae(a,re,y));return M=new Q({props:{class:"",icon:"ri:github-line"}}),ne=new Q({props:{class:"",icon:"akar-icons:link-out"}}),{c(){e=x("div"),t=x("div"),l=x("div"),r=D(),n=x("div"),w=x("h1"),m=_e(u),f=D(),d=x("span"),i=_e(b),I=D(),o=x("div");for(let y=0;y<S.length;y+=1)S[y].c();$=D(),v=x("div"),g=x("a"),C=x("span"),C.textContent=U,J=D(),q(M.$$.fragment),G=D(),H=x("a"),R=x("span"),R.textContent=le,X=D(),q(ne.$$.fragment),this.h()},l(y){e=p(y,"DIV",{class:!0});var P=E(e);t=p(P,"DIV",{class:!0});var A=E(t);l=p(A,"DIV",{class:!0,style:!0}),E(l).forEach(_),A.forEach(_),r=k(P),n=p(P,"DIV",{class:!0});var O=E(n);w=p(O,"H1",{class:!0});var be=E(w);m=$e(be,u),be.forEach(_),f=k(O),d=p(O,"SPAN",{class:!0});var Ie=E(d);i=$e(Ie,b),Ie.forEach(_),I=k(O),o=p(O,"DIV",{class:!0});var Ee=E(o);for(let me=0;me<S.length;me+=1)S[me].l(Ee);Ee.forEach(_),$=k(O),v=p(O,"DIV",{class:!0});var oe=E(v);g=p(oe,"A",{href:!0,target:!0,class:!0});var ce=E(g);C=p(ce,"SPAN",{"data-svelte-h":!0}),L(C)!=="svelte-1xw5f77"&&(C.textContent=U),J=k(ce),z(M.$$.fragment,ce),ce.forEach(_),G=k(oe),H=p(oe,"A",{href:!0,target:!0,class:!0});var fe=E(H);R=p(fe,"SPAN",{"data-svelte-h":!0}),L(R)!=="svelte-r9w6qd"&&(R.textContent=le),X=k(fe),z(ne.$$.fragment,fe),fe.forEach(_),oe.forEach(_),O.forEach(_),P.forEach(_),this.h()},h(){c(l,"class","h-96 max-xs:h-60 max-h-full rounded-xl w-full md:h-full flex items-center bg-cover bg-center"),c(l,"style",s=`background-image: url("${a[1].img}");`),c(t,"class","md:w-[60%] w-full p-5"),c(w,"class","font-bold text-xl"),c(d,"class","description text-gray-500 text-lg"),c(o,"class","flex gap-3"),c(g,"href",T=a[1].github),c(g,"target","_blank"),c(g,"class","hover:text-info font-medium text-lg flex gap-1 items-center"),c(H,"href",ae=a[1].demo),c(H,"target","_blank"),c(H,"class","hover:text-info font-medium text-lg flex gap-1 items-center"),c(v,"class","flex gap-8"),c(n,"class","py-10 px-5 h-full md:w-[40%] flex flex-col gap-5 items-center"),c(e,"class",ie=`bg-base-100 rounded-xl w-3xl shadow flex ${K(a[0])?"md:flex-row":"md:flex-row-reverse"} flex-col items-stretch md:max-h-96`)},m(y,P){N(y,e,P),h(e,t),h(t,l),h(e,r),h(e,n),h(n,w),h(w,m),h(n,f),h(n,d),h(d,i),h(n,I),h(n,o);for(let A=0;A<S.length;A+=1)S[A]&&S[A].m(o,null);h(n,$),h(n,v),h(v,g),h(g,C),h(g,J),B(M,g,null),h(v,G),h(v,H),h(H,R),h(H,X),B(ne,H,null),W=!0},p(y,[P]){if((!W||P&2&&s!==(s=`background-image: url("${y[1].img}");`))&&c(l,"style",s),(!W||P&2)&&u!==(u=y[1].title+"")&&we(m,u),(!W||P&2)&&b!==(b=y[1].description+"")&&we(i,b),P&2){re=Y(y[1].tags);let A;for(A=0;A<re.length;A+=1){const O=Ae(y,re,A);S[A]?S[A].p(O,P):(S[A]=He(O),S[A].c(),S[A].m(o,null))}for(;A<S.length;A+=1)S[A].d(1);S.length=re.length}(!W||P&2&&T!==(T=y[1].github))&&c(g,"href",T),(!W||P&2&&ae!==(ae=y[1].demo))&&c(H,"href",ae),(!W||P&1&&ie!==(ie=`bg-base-100 rounded-xl w-3xl shadow flex ${K(y[0])?"md:flex-row":"md:flex-row-reverse"} flex-col items-stretch md:max-h-96`))&&c(e,"class",ie)},i(y){W||(V(M.$$.fragment,y),V(ne.$$.fragment,y),W=!0)},o(y){j(M.$$.fragment,y),j(ne.$$.fragment,y),W=!1},d(y){y&&_(e),ue(S,y),F(M),F(ne)}}}function it(a,e,t){let{index:l}=e,{Item:s}=e;return a.$$set=r=>{"index"in r&&t(0,l=r.index),"Item"in r&&t(1,s=r.Item)},[l,s]}class ot extends ee{constructor(e){super(),te(this,e,it,at,Z,{index:0,Item:1})}}function Se(a,e,t){const l=a.slice();return l[2]=e[t],l[4]=t,l}function Me(a){let e,t;return e=new ot({props:{Item:a[2],index:a[4]}}),{c(){q(e.$$.fragment)},l(l){z(e.$$.fragment,l)},m(l,s){B(e,l,s),t=!0},p:se,i(l){t||(V(e.$$.fragment,l),t=!0)},o(l){j(e.$$.fragment,l),t=!1},d(l){F(e,l)}}}function ct(a){let e,t,l,s="Projects",r,n,w="Each project is an unique piece of development 🧩",u,m,f,d,b=Y(a[1]),i=[];for(let o=0;o<b.length;o+=1)i[o]=Me(Se(a,b,o));const I=o=>j(i[o],1,1,()=>{i[o]=null});return{c(){e=x("div"),t=x("div"),l=x("h1"),l.textContent=s,r=D(),n=x("h2"),n.textContent=w,u=D(),m=x("div");for(let o=0;o<i.length;o+=1)i[o].c();this.h()},l(o){e=p(o,"DIV",{id:!0,class:!0});var $=E(e);t=p($,"DIV",{class:!0});var v=E(t);l=p(v,"H1",{class:!0,"data-svelte-h":!0}),L(l)!=="svelte-11vs7qa"&&(l.textContent=s),r=k(v),n=p(v,"H2",{class:!0,"data-svelte-h":!0}),L(n)!=="svelte-14z9bvj"&&(n.textContent=w),u=k(v),m=p(v,"DIV",{class:!0});var g=E(m);for(let C=0;C<i.length;C+=1)i[C].l(g);g.forEach(_),v.forEach(_),$.forEach(_),this.h()},h(){c(l,"class","text-info uppercase font-bold text-xl pt-5 pl-5 md:p-0"),c(n,"class","font-bold text-2xl text-base-content pl-5 md:p-0"),c(m,"class","mt-10 flex flex-col gap-10 w-full"),c(t,"class","flex flex-col w-full md:max-w-4xl"),c(e,"id","Projects"),c(e,"class",f=`flex w-full items-center flex-col ${K(a[0])?"bg-base-200":"bg-base-100"} xs:p-5 sm:p-10 md:p-20`)},m(o,$){N(o,e,$),h(e,t),h(t,l),h(t,r),h(t,n),h(t,u),h(t,m);for(let v=0;v<i.length;v+=1)i[v]&&i[v].m(m,null);d=!0},p(o,[$]){if($&2){b=Y(o[1]);let v;for(v=0;v<b.length;v+=1){const g=Se(o,b,v);i[v]?(i[v].p(g,$),V(i[v],1)):(i[v]=Me(g),i[v].c(),V(i[v],1),i[v].m(m,null))}for(de(),v=b.length;v<i.length;v+=1)I(v);he()}(!d||$&1&&f!==(f=`flex w-full items-center flex-col ${K(o[0])?"bg-base-200":"bg-base-100"} xs:p-5 sm:p-10 md:p-20`))&&c(e,"class",f)},i(o){if(!d){for(let $=0;$<b.length;$+=1)V(i[$]);d=!0}},o(o){i=i.filter(Boolean);for(let $=0;$<i.length;$+=1)j(i[$]);d=!1},d(o){o&&_(e),ue(i,o)}}}function ft(a,e,t){let{index:l}=e;const s=[{title:"Clothes Store 🧥",img:"clothes.jpg",description:"A clothe store website is an online platform which helps people to buy clothes at home. The website provides a store bag that allow users to manage their items before buying.",tags:["Svelte","Tailwind"],github:"https://github.com/emymonteiro/clothes-store",demo:"https://emymonteiro.github.io/clothes-store/"},{title:"Url Shortner 🔗",img:"shortner.jpeg",description:"A webpage that allows you to short some links, with sign in and sign up system and gives you the power to organize and favorite your preffered links.",tags:["VueJS","Windicss","Firebase"],github:"https://github.com/emymonteiro/url-shorter",demo:"https://eshortener.netlify.app"},{title:"Twitter Clone 🐦",img:"twitter.png",description:"A clone of Twitter made with VueJS and Tailwind, I've also have a similar version that I've made using React, but my skills with React are inferior in comparision with VueJS or Svelte.",tags:["VueJS","Tailwind"],github:"https://github.com/emymonteiro/vite-js-twitter",demo:"https://emymonteiro.github.io/vite-js-twitter/"}];return a.$$set=r=>{"index"in r&&t(0,l=r.index)},[l,s]}class ut extends ee{constructor(e){super(),te(this,e,ft,ct,Z,{index:0})}}function Le(a,e,t){const l=a.slice();return l[1]=e[t],l[3]=t,l}function Ne(a){let e,t,l;var s=a[1];function r(n,w){return{props:{index:n[3]}}}return s&&(e=Ce(s,r(a))),{c(){e&&q(e.$$.fragment),t=ye()},l(n){e&&z(e.$$.fragment,n),t=ye()},m(n,w){e&&B(e,n,w),N(n,t,w),l=!0},p(n,w){if(s!==(s=n[1])){if(e){de();const u=e;j(u.$$.fragment,1,0,()=>{F(u,1)}),he()}s?(e=Ce(s,r(n)),q(e.$$.fragment),V(e.$$.fragment,1),B(e,t.parentNode,t)):e=null}},i(n){l||(e&&V(e.$$.fragment,n),l=!0)},o(n){e&&j(e.$$.fragment,n),l=!1},d(n){n&&_(t),e&&F(e,n)}}}function dt(a){let e,t,l,s,r=Y(a[0]),n=[];for(let u=0;u<r.length;u+=1)n[u]=Ne(Le(a,r,u));const w=u=>j(n[u],1,1,()=>{n[u]=null});return l=new Ze({}),{c(){e=x("div");for(let u=0;u<n.length;u+=1)n[u].c();t=D(),q(l.$$.fragment),this.h()},l(u){e=p(u,"DIV",{class:!0});var m=E(e);for(let f=0;f<n.length;f+=1)n[f].l(m);t=k(m),z(l.$$.fragment,m),m.forEach(_),this.h()},h(){c(e,"class","overflow-auto scrollbar-hide md:scrollbar-default")},m(u,m){N(u,e,m);for(let f=0;f<n.length;f+=1)n[f]&&n[f].m(e,null);h(e,t),B(l,e,null),s=!0},p(u,[m]){if(m&1){r=Y(u[0]);let f;for(f=0;f<r.length;f+=1){const d=Le(u,r,f);n[f]?(n[f].p(d,m),V(n[f],1)):(n[f]=Ne(d),n[f].c(),V(n[f],1),n[f].m(e,t))}for(de(),f=r.length;f<n.length;f+=1)w(f);he()}},i(u){if(!s){for(let m=0;m<r.length;m+=1)V(n[m]);V(l.$$.fragment,u),s=!0}},o(u){n=n.filter(Boolean);for(let m=0;m<n.length;m+=1)j(n[m]);j(l.$$.fragment,u),s=!1},d(u){u&&_(e),ue(n,u),F(l)}}}function ht(a){return[[rt,We,ut,Xe]]}class xt extends ee{constructor(e){super(),te(this,e,ht,dt,Z,{})}}export{xt as component};