var B=Object.defineProperty;var q=(t,e,n)=>e in t?B(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var f=(t,e,n)=>(q(t,typeof e!="symbol"?e+"":e,n),n);function G(){}function z(t,e){for(const n in e)t[n]=e[n];return t}function F(t){return t()}function lt(){return Object.create(null)}function I(t){t.forEach(F)}function st(t){return typeof t=="function"}function ct(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function rt(t){return Object.keys(t).length===0}function R(t,...e){if(t==null){for(const i of e)i(void 0);return G}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ot(t,e,n){t.$$.on_destroy.push(R(e,n))}function ut(t,e,n,i){if(t){const l=M(t,e,n,i);return t[0](l)}}function M(t,e,n,i){return t[1]&&i?z(n.ctx.slice(),t[1](i(e))):n.ctx}function at(t,e,n,i){if(t[2]&&i){const l=t[2](i(n));if(e.dirty===void 0)return l;if(typeof l=="object"){const o=[],s=Math.max(e.dirty.length,l.length);for(let r=0;r<s;r+=1)o[r]=e.dirty[r]|l[r];return o}return e.dirty|l}return e.dirty}function ft(t,e,n,i,l,o){if(l){const s=M(e,n,i,o);t.p(s,l)}}function _t(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ht(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}let p=!1;function dt(){p=!0}function mt(){p=!1}function W(t,e,n,i){for(;t<e;){const l=t+(e-t>>1);n(l)<=i?t=l+1:e=l}return t}function J(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&c.push(a)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let l=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,a=(l>0&&e[n[l]].claim_order<=u?l+1:W(1,l,D=>e[n[D]].claim_order,u))-1;i[c]=n[a]+1;const w=a+1;n[w]=c,l=Math.max(w,l)}const o=[],s=[];let r=e.length-1;for(let c=n[l]+1;c!=0;c=i[c-1]){for(o.push(e[c-1]);r>=c;r--)s.push(e[r]);r--}for(;r>=0;r--)s.push(e[r]);o.reverse(),s.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<s.length;c++){for(;u<o.length&&s[c].claim_order>=o[u].claim_order;)u++;const a=u<o.length?o[u]:null;t.insertBefore(s[c],a)}}function K(t,e){if(p){for(J(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Q(t,e,n){t.insertBefore(e,n||null)}function U(t,e,n){p&&!n?K(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function x(t){t.parentNode&&t.parentNode.removeChild(t)}function pt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function L(t){return document.createElement(t)}function j(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function E(t){return document.createTextNode(t)}function yt(){return E(" ")}function gt(){return E("")}function bt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function H(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const V=["width","height"];function xt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&V.indexOf(i)===-1?t[i]=e[i]:H(t,i,e[i])}function vt(t,e){for(const n in e)H(t,n,e[n])}function Et(t){return t.dataset.svelteH}function wt(t){return Array.from(t.childNodes)}function P(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function S(t,e,n,i,l=!1){P(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const r=t[s];if(e(r)){const c=n(r);return c===void 0?t.splice(s,1):t[s]=c,l||(t.claim_info.last_index=s),r}}for(let s=t.claim_info.last_index-1;s>=0;s--){const r=t[s];if(e(r)){const c=n(r);return c===void 0?t.splice(s,1):t[s]=c,l?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,r}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function C(t,e,n,i){return S(t,l=>l.nodeName===e,l=>{const o=[];for(let s=0;s<l.attributes.length;s++){const r=l.attributes[s];n[r.name]||o.push(r.name)}o.forEach(s=>l.removeAttribute(s))},()=>i(e))}function Tt(t,e,n){return C(t,e,n,L)}function Nt(t,e,n){return C(t,e,n,j)}function X(t,e){return S(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>E(e),!0)}function At(t){return X(t," ")}function T(t,e,n){for(let i=n;i<t.length;i+=1){const l=t[i];if(l.nodeType===8&&l.textContent.trim()===e)return i}return-1}function kt(t,e){const n=T(t,"HTML_TAG_START",0),i=T(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new N(e);P(t);const l=t.splice(n,i-n+1);x(l[0]),x(l[l.length-1]);const o=l.slice(1,l.length-1);for(const s of o)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new N(e,o)}function Mt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Lt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Y(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}class Z{constructor(e=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=j(n.nodeName):this.e=L(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Q(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(x)}}class N extends Z{constructor(n=!1,i){super(n);f(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)U(this.t,this.n[i],n)}}function jt(t,e){return new t(e)}let m;function g(t){m=t}function y(){if(!m)throw new Error("Function called outside component initialization");return m}function Ht(t){y().$$.on_mount.push(t)}function Pt(t){y().$$.after_update.push(t)}function St(t){y().$$.on_destroy.push(t)}function Ct(){const t=y();return(e,n,{cancelable:i=!1}={})=>{const l=t.$$.callbacks[e];if(l){const o=Y(e,n,{cancelable:i});return l.slice().forEach(s=>{s.call(t,o)}),!o.defaultPrevented}return!0}}const d=[],A=[];let h=[];const k=[],O=Promise.resolve();let v=!1;function $(){v||(v=!0,O.then(et))}function Ot(){return $(),O}function tt(t){h.push(t)}const b=new Set;let _=0;function et(){if(_!==0)return;const t=m;do{try{for(;_<d.length;){const e=d[_];_++,g(e),nt(e.$$)}}catch(e){throw d.length=0,_=0,e}for(g(null),d.length=0,_=0;A.length;)A.pop()();for(let e=0;e<h.length;e+=1){const n=h[e];b.has(n)||(b.add(n),n())}h.length=0}while(d.length);for(;k.length;)k.pop()();v=!1,b.clear(),g(t)}function nt(t){if(t.fragment!==null){t.update(),I(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(tt)}}function Dt(t){const e=[],n=[];h.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),h=e}export{_t as A,at as B,G as C,ot as D,pt as E,St as F,z as G,ht as H,xt as I,j as J,N as K,Nt as L,kt as M,vt as N,Ct as O,lt as P,et as Q,st as R,rt as S,Dt as T,m as U,g as V,F as W,d as X,$ as Y,dt as Z,mt as _,yt as a,Pt as b,At as c,x as d,gt as e,L as f,Tt as g,wt as h,U as i,H as j,Lt as k,E as l,X as m,Mt as n,Ht as o,A as p,jt as q,tt as r,ct as s,Ot as t,Et as u,K as v,bt as w,I as x,ut as y,ft as z};
