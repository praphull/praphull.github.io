!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(4)},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";function o(){}n.r(t);function r(e,t){for(const n in t)e[n]=t[n];return e}function s(e){return e()}function a(){return Object.create(null)}function i(e){e.forEach(s)}function c(e){return"function"==typeof e}function l(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function u(e,t,n,o){if(e){const r=d(e,t,n,o);return e[0](r)}}function d(e,t,n,o){return e[1]&&o?r(n.ctx.slice(),e[1](o(t))):n.ctx}function f(e,t,n,o){if(e[2]&&o){const r=e[2](o(n));if(void 0===t.dirty)return r;if("object"==typeof r){const e=[],n=Math.max(t.dirty.length,r.length);for(let o=0;o<n;o+=1)e[o]=t.dirty[o]|r[o];return e}return t.dirty|r}return t.dirty}new Set;function p(e,t){e.appendChild(t)}function $(e,t,n){e.insertBefore(t,n||null)}function m(e){e.parentNode.removeChild(e)}function g(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function h(e){return document.createElement(e)}function y(e){return document.createTextNode(e)}function v(){return y(" ")}function b(){return y("")}function x(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function w(e,t){t=""+t,e.data!==t&&(e.data=t)}new Set;let S;function k(e){S=e}const M=[],C=[],L=[],P=[],A=Promise.resolve();let T=!1;function O(){T||(T=!0,A.then(J))}function E(e){L.push(e)}let I=!1;const z=new Set;function J(){if(!I){I=!0;do{for(let e=0;e<M.length;e+=1){const t=M[e];k(t),_(t.$$)}for(M.length=0;C.length;)C.pop()();for(let e=0;e<L.length;e+=1){const t=L[e];z.has(t)||(z.add(t),t())}L.length=0}while(M.length);for(;P.length;)P.pop()();T=!1,I=!1,z.clear()}}function _(e){if(null!==e.fragment){e.update(),i(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(E)}}const D=new Set;let j;function B(e,t){e&&e.i&&(D.delete(e),e.i(t))}function N(e,t,n,o){if(e&&e.o){if(D.has(e))return;D.add(e),j.c.push(()=>{D.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function W(e,t){const n={},o={},r={$$scope:1};let s=e.length;for(;s--;){const a=e[s],i=t[s];if(i){for(const e in a)e in i||(o[e]=1);for(const e in i)r[e]||(n[e]=i[e],r[e]=1);e[s]=i}else for(const e in a)r[e]=1}for(const e in o)e in n||(n[e]=void 0);return n}function F(e){return"object"==typeof e&&null!==e?e:{}}new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]);let H;function G(e){e&&e.c()}function Q(e,t,n){const{fragment:o,on_mount:r,on_destroy:a,after_update:l}=e.$$;o&&o.m(t,n),E(()=>{const t=r.map(s).filter(c);a?a.push(...t):i(t),e.$$.on_mount=[]}),l.forEach(E)}function R(e,t){const n=e.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function X(e,t,n,r,s,c,l=[-1]){const u=S;k(e);const d=t.props||{},f=e.$$={fragment:null,ctx:null,props:c,update:o,not_equal:s,bound:a(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:a(),dirty:l};let p=!1;if(f.ctx=n?n(e,d,(t,n,...o)=>{const r=o.length?o[0]:n;return f.ctx&&s(f.ctx[t],f.ctx[t]=r)&&(f.bound[t]&&f.bound[t](r),p&&function(e,t){-1===e.$$.dirty[0]&&(M.push(e),O(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(e,t)),n}):[],f.update(),p=!0,i(f.before_update),f.fragment=!!r&&r(f.ctx),t.target){if(t.hydrate){const e=($=t.target,Array.from($.childNodes));f.fragment&&f.fragment.l(e),e.forEach(m)}else f.fragment&&f.fragment.c();t.intro&&B(e.$$.fragment),Q(e,t.target,t.anchor),J()}var $;k(u)}"function"==typeof HTMLElement&&(H=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(e,t,n){this[e]=n}$destroy(){R(this,1),this.$destroy=o}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}});class V{$destroy(){R(this,1),this.$destroy=o}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function U(e,t,n){const o=e.slice();return o[1]=t[n],o}function q(e){let t,n,o,r,s,a,i,c,l,u,d,f=e[1].name+"";return{c(){t=h("div"),n=h("a"),o=h("span"),r=h("i"),a=v(),i=h("span"),c=y(f),d=v(),x(r,"class",s="icon-themed "+e[1].icon+" fa-2x"),x(o,"class","icon"),x(n,"class","button"),x(n,"href",l=e[1].url),x(n,"target","_blank"),x(n,"title",u=e[1].name),x(t,"class","navbar-item")},m(e,s){$(e,t,s),p(t,n),p(n,o),p(o,r),p(n,a),p(n,i),p(i,c),p(t,d)},p(e,t){1&t&&s!==(s="icon-themed "+e[1].icon+" fa-2x")&&x(r,"class",s),1&t&&f!==(f=e[1].name+"")&&w(c,f),1&t&&l!==(l=e[1].url)&&x(n,"href",l),1&t&&u!==(u=e[1].name)&&x(n,"title",u)},d(e){e&&m(t)}}}function K(e){let t,n=e[1].url&&q(e);return{c(){n&&n.c(),t=b()},m(e,o){n&&n.m(e,o),$(e,t,o)},p(e,o){e[1].url?n?n.p(e,o):(n=q(e),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},d(e){n&&n.d(e),e&&m(t)}}}function Z(e){let t,n,r,s=e[0].contactDetails,a=[];for(let t=0;t<s.length;t+=1)a[t]=K(U(e,s,t));return{c(){t=h("nav"),n=h("div"),r=h("div");for(let e=0;e<a.length;e+=1)a[e].c();x(r,"class","navbar-end buttons"),x(n,"class","navbar-menu"),x(t,"class","navbar has-background-info is-hidden-touch"),x(t,"role","navigation"),x(t,"aria-label","main navigation")},m(e,o){$(e,t,o),p(t,n),p(n,r);for(let e=0;e<a.length;e+=1)a[e].m(r,null)},p(e,[t]){if(1&t){let n;for(s=e[0].contactDetails,n=0;n<s.length;n+=1){const o=U(e,s,n);a[n]?a[n].p(o,t):(a[n]=K(o),a[n].c(),a[n].m(r,null))}for(;n<a.length;n+=1)a[n].d(1);a.length=s.length}},i:o,o:o,d(e){e&&m(t),g(a,e)}}}function Y(e,t,n){let{info:o}=t;return e.$set=e=>{"info"in e&&n(0,o=e.info)},[o]}var ee=class extends V{constructor(e){super(),X(this,e,Y,Z,l,{info:0})}};function te(e){let t,n,o;const r=e[1].default,s=u(r,e,e[0],null);return{c(){t=h("section"),n=h("div"),s&&s.c(),x(n,"class","container"),x(t,"class","section condensed-section")},m(e,r){$(e,t,r),p(t,n),s&&s.m(n,null),o=!0},p(e,[t]){s&&s.p&&1&t&&s.p(d(r,e,e[0],null),f(r,e[0],t,null))},i(e){o||(B(s,e),o=!0)},o(e){N(s,e),o=!1},d(e){e&&m(t),s&&s.d(e)}}}function ne(e,t,n){let{$$slots:o={},$$scope:r}=t;return e.$set=e=>{"$$scope"in e&&n(0,r=e.$$scope)},[r,o]}var oe=class extends V{constructor(e){super(),X(this,e,ne,te,l,{})}};function re(e){let t,n,o,r=e[2]&&se(e);function s(e,t){return e[1]?ie:ae}let a=s(e),i=a(e);return{c(){t=h("div"),r&&r.c(),n=v(),i.c(),x(t,"class",o="is-size-"+e[4]+" has-text-dark has-text-weight-medium")},m(e,o){$(e,t,o),r&&r.m(t,null),p(t,n),i.m(t,null)},p(e,c){e[2]?r?r.p(e,c):(r=se(e),r.c(),r.m(t,n)):r&&(r.d(1),r=null),a===(a=s(e))&&i?i.p(e,c):(i.d(1),i=a(e),i&&(i.c(),i.m(t,null))),16&c&&o!==(o="is-size-"+e[4]+" has-text-dark has-text-weight-medium")&&x(t,"class",o)},d(e){e&&m(t),r&&r.d(),i.d()}}}function se(e){let t,n;return{c(){t=h("i"),x(t,"class",n="icon icon-themed "+e[2])},m(e,n){$(e,t,n)},p(e,o){4&o&&n!==(n="icon icon-themed "+e[2])&&x(t,"class",n)},d(e){e&&m(t)}}}function ae(e){let t;return{c(){t=y(e[0])},m(e,n){$(e,t,n)},p(e,n){1&n&&w(t,e[0])},d(e){e&&m(t)}}}function ie(e){let t,n;function o(e,n){return(null==t||2&n)&&(t=!!e[1].startsWith("#")),t?le:ce}let r=o(e,-1),s=r(e);return{c(){s.c(),n=b()},m(e,t){s.m(e,t),$(e,n,t)},p(e,t){r===(r=o(e,t))&&s?s.p(e,t):(s.d(1),s=r(e),s&&(s.c(),s.m(n.parentNode,n)))},d(e){s.d(e),e&&m(n)}}}function ce(e){let t,n;return{c(){t=h("a"),n=y(e[0]),x(t,"class","is-link"),x(t,"href",e[1]),x(t,"target","_blank")},m(e,o){$(e,t,o),p(t,n)},p(e,o){1&o&&w(n,e[0]),2&o&&x(t,"href",e[1])},d(e){e&&m(t)}}}function le(e){let t,n;return{c(){t=h("a"),n=y(e[0]),x(t,"class","is-link"),x(t,"href",e[1])},m(e,o){$(e,t,o),p(t,n)},p(e,o){1&o&&w(n,e[0]),2&o&&x(t,"href",e[1])},d(e){e&&m(t)}}}function ue(e){let t,n,o,r,s=e[0]&&re(e);const a=e[7].default,i=u(a,e,e[6],null);return{c(){t=h("div"),s&&s.c(),n=v(),o=h("div"),i&&i.c(),x(o,"class",e[3]),x(t,"class",e[5])},m(e,a){$(e,t,a),s&&s.m(t,null),p(t,n),p(t,o),i&&i.m(o,null),r=!0},p(e,[c]){e[0]?s?s.p(e,c):(s=re(e),s.c(),s.m(t,n)):s&&(s.d(1),s=null),i&&i.p&&64&c&&i.p(d(a,e,e[6],null),f(a,e[6],c,null)),(!r||8&c)&&x(o,"class",e[3]),(!r||32&c)&&x(t,"class",e[5])},i(e){r||(B(i,e),r=!0)},o(e){N(i,e),r=!1},d(e){e&&m(t),s&&s.d(),i&&i.d(e)}}}function de(e,t,n){let{header:o}=t,{url:r}=t,{icon:s}=t,{contentClass:a="has-text-grey"}=t,{headerSize:i="5"}=t,{headerClass:c="content"}=t,{$$slots:l={},$$scope:u}=t;return e.$set=e=>{"header"in e&&n(0,o=e.header),"url"in e&&n(1,r=e.url),"icon"in e&&n(2,s=e.icon),"contentClass"in e&&n(3,a=e.contentClass),"headerSize"in e&&n(4,i=e.headerSize),"headerClass"in e&&n(5,c=e.headerClass),"$$scope"in e&&n(6,u=e.$$scope)},[o,r,s,a,i,c,u,l]}var fe=class extends V{constructor(e){super(),X(this,e,de,ue,l,{header:0,url:1,icon:2,contentClass:3,headerSize:4,headerClass:5})}};n(1);function pe(e,t,n){const o=e.slice();return o[1]=t[n],o}function $e(e){let t;return{c(){t=y("Polyglot Developer - Bangalore, India.")},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function me(e){let t,n,o=e[1]+"";return{c(){t=h("span"),n=y(o),x(t,"class","tag is-info is-light svelte-1ykkc2n")},m(e,o){$(e,t,o),p(t,n)},p(e,t){1&t&&o!==(o=e[1]+"")&&w(n,o)},d(e){e&&m(t)}}}function ge(e){let t,n,o,r,s,a,i,c,l;const u=new fe({props:{header:"Praphull Purohit",headerSize:"4",$$slots:{default:[$e]},$$scope:{ctx:e}}});let d=e[0].tags,f=[];for(let t=0;t<d.length;t+=1)f[t]=me(pe(e,d,t));return{c(){t=h("div"),n=h("div"),n.innerHTML='<figure class="image is-1by1"><img src="/public/images/pp.jpg" alt="Praphull Purohit" class="svelte-1ykkc2n"></figure>',o=v(),r=h("div"),G(u.$$.fragment),s=v(),a=h("div"),a.innerHTML='<div class="content">I am a polyglot developer with 11 years of professional software development experience\n          across reactive\n          microservices, enterprise products and legacy applications across a range of programming language.\n        </div> \n\n        <div class="content">I have experience developing software for e-Commerce, Logistics, Supply Chain, Aircraft\n          maintenance and\n          Energy industries, and I&#39;m open to exploring new business domains.\n        </div> \n\n        <div class="content">For past 4 years, I have been working primarily on developing reactive microservices for\n          <a href="https://zilingo.com" target="_blank">Zilingo</a> using Scala, Akka and Play Framework.\n        </div>',i=v(),c=h("div");for(let e=0;e<f.length;e+=1)f[e].c();x(n,"class","column is-one-third is-mobile"),x(a,"class","content has-text-justified"),x(c,"class","content tag-container svelte-1ykkc2n"),x(r,"class","column is-two-thirds"),x(t,"class","columns")},m(e,d){$(e,t,d),p(t,n),p(t,o),p(t,r),Q(u,r,null),p(r,s),p(r,a),p(r,i),p(r,c);for(let e=0;e<f.length;e+=1)f[e].m(c,null);l=!0},p(e,t){const n={};if(16&t&&(n.$$scope={dirty:t,ctx:e}),u.$set(n),1&t){let n;for(d=e[0].tags,n=0;n<d.length;n+=1){const o=pe(e,d,n);f[n]?f[n].p(o,t):(f[n]=me(o),f[n].c(),f[n].m(c,null))}for(;n<f.length;n+=1)f[n].d(1);f.length=d.length}},i(e){l||(B(u.$$.fragment,e),l=!0)},o(e){N(u.$$.fragment,e),l=!1},d(e){e&&m(t),R(u),g(f,e)}}}function he(e){let t;const n=new oe({props:{$$slots:{default:[ge]},$$scope:{ctx:e}}});return{c(){G(n.$$.fragment)},m(e,o){Q(n,e,o),t=!0},p(e,[t]){const o={};17&t&&(o.$$scope={dirty:t,ctx:e}),n.$set(o)},i(e){t||(B(n.$$.fragment,e),t=!0)},o(e){N(n.$$.fragment,e),t=!1},d(e){R(n,e)}}}function ye(e,t,n){let{info:o}=t;return e.$set=e=>{"info"in e&&n(0,o=e.info)},[o]}var ve=class extends V{constructor(e){super(),X(this,e,ye,he,l,{info:0})}};function be(e,t,n){const o=e.slice();return o[2]=t[n],o}function xe(e,t,n){const o=e.slice();return o[5]=t[n],o}function we(e){let t;return{c(){t=y("Scala, Play Framework, PostgreSQL, Kafka, Webhooks, MongoDB, FoundationJS, Bulma, JavaScript, HTML, REST,\n          SOAP, XML")},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function Se(e){let t;return{c(){t=y("Java, ADF, Oracle/PLSQL, SOAP Web services, UTPLSQL, OAF, XML")},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function ke(e){let t;return{c(){t=y("Documentum, Java, C#, .Net, Oracle, XML")},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function Me(e){let t,n,o;const s=[e[1],{url:"#employment-details-6"},{header:"Zilingo"}];let a={$$slots:{default:[we]},$$scope:{ctx:e}};for(let e=0;e<s.length;e+=1)a=r(a,s[e]);const i=new fe({props:a}),c=[e[1],{url:"#employment-details-5"},{header:"Oracle"}];let l={$$slots:{default:[Se]},$$scope:{ctx:e}};for(let e=0;e<c.length;e+=1)l=r(l,c[e]);const u=new fe({props:l}),d=[e[1],{url:"#employment-details-3"},{header:"Infosys"}];let f={$$slots:{default:[ke]},$$scope:{ctx:e}};for(let e=0;e<d.length;e+=1)f=r(f,d[e]);const p=new fe({props:f});return{c(){G(i.$$.fragment),t=v(),G(u.$$.fragment),n=v(),G(p.$$.fragment)},m(e,r){Q(i,e,r),$(e,t,r),Q(u,e,r),$(e,n,r),Q(p,e,r),o=!0},p(e,t){const n=2&t?W(s,[F(e[1]),s[1],s[2]]):{};256&t&&(n.$$scope={dirty:t,ctx:e}),i.$set(n);const o=2&t?W(c,[F(e[1]),c[1],c[2]]):{};256&t&&(o.$$scope={dirty:t,ctx:e}),u.$set(o);const r=2&t?W(d,[F(e[1]),d[1],d[2]]):{};256&t&&(r.$$scope={dirty:t,ctx:e}),p.$set(r)},i(e){o||(B(i.$$.fragment,e),B(u.$$.fragment,e),B(p.$$.fragment,e),o=!0)},o(e){N(i.$$.fragment,e),N(u.$$.fragment,e),N(p.$$.fragment,e),o=!1},d(e){R(i,e),e&&m(t),R(u,e),e&&m(n),R(p,e)}}}function Ce(e){let t,n,o,r,s,a,i,c=e[5].duration+"",l=e[5].item+"";return{c(){t=h("div"),n=h("span"),o=y(c),r=v(),s=h("span"),a=y(l),i=v(),x(n,"class","tag"),x(s,"class","tag is-info"),x(t,"class","tags has-addons experience")},m(e,c){$(e,t,c),p(t,n),p(n,o),p(t,r),p(t,s),p(s,a),p(t,i)},p(e,t){1&t&&c!==(c=e[5].duration+"")&&w(o,c),1&t&&l!==(l=e[5].item+"")&&w(a,l)},d(e){e&&m(t)}}}function Le(e){let t,n=e[0].experience,o=[];for(let t=0;t<n.length;t+=1)o[t]=Ce(xe(e,n,t));return{c(){for(let e=0;e<o.length;e+=1)o[e].c();t=b()},m(e,n){for(let t=0;t<o.length;t+=1)o[t].m(e,n);$(e,t,n)},p(e,r){if(1&r){let s;for(n=e[0].experience,s=0;s<n.length;s+=1){const a=xe(e,n,s);o[s]?o[s].p(a,r):(o[s]=Ce(a),o[s].c(),o[s].m(t.parentNode,t))}for(;s<o.length;s+=1)o[s].d(1);o.length=n.length}},d(e){g(o,e),e&&m(t)}}}function Pe(e){let t,n,o=e[2]+"";return{c(){t=h("span"),n=y(o),x(t,"class","tag is-info")},m(e,o){$(e,t,o),p(t,n)},p(e,t){1&t&&o!==(o=e[2]+"")&&w(n,o)},d(e){e&&m(t)}}}function Ae(e){let t,n=e[0].preferred,o=[];for(let t=0;t<n.length;t+=1)o[t]=Pe(be(e,n,t));return{c(){for(let e=0;e<o.length;e+=1)o[e].c();t=b()},m(e,n){for(let t=0;t<o.length;t+=1)o[t].m(e,n);$(e,t,n)},p(e,r){if(1&r){let s;for(n=e[0].preferred,s=0;s<n.length;s+=1){const a=be(e,n,s);o[s]?o[s].p(a,r):(o[s]=Pe(a),o[s].c(),o[s].m(t.parentNode,t))}for(;s<o.length;s+=1)o[s].d(1);o.length=n.length}},d(e){g(o,e),e&&m(t)}}}function Te(e){let t,n,o,r,s,a,i;const c=new fe({props:{headerSize:Ee,header:"Summary",icon:"fa fa-list-alt",$$slots:{default:[Me]},$$scope:{ctx:e}}}),l=new fe({props:{headerSize:Ee,header:"Experience",icon:"fa fa-database",$$slots:{default:[Le]},$$scope:{ctx:e}}}),u=new fe({props:{headerSize:Ee,header:"What I love",icon:"fas fa-hand-holding-heart",contentClass:"has-text-black tags",$$slots:{default:[Ae]},$$scope:{ctx:e}}});return{c(){t=h("div"),n=h("div"),G(c.$$.fragment),o=v(),r=h("div"),G(l.$$.fragment),s=v(),a=h("div"),G(u.$$.fragment),x(n,"class","column is-one-third"),x(r,"class","column is-one-third"),x(a,"class","column is-one-third"),x(t,"class","columns")},m(e,d){$(e,t,d),p(t,n),Q(c,n,null),p(t,o),p(t,r),Q(l,r,null),p(t,s),p(t,a),Q(u,a,null),i=!0},p(e,t){const n={};256&t&&(n.$$scope={dirty:t,ctx:e}),c.$set(n);const o={};257&t&&(o.$$scope={dirty:t,ctx:e}),l.$set(o);const r={};257&t&&(r.$$scope={dirty:t,ctx:e}),u.$set(r)},i(e){i||(B(c.$$.fragment,e),B(l.$$.fragment,e),B(u.$$.fragment,e),i=!0)},o(e){N(c.$$.fragment,e),N(l.$$.fragment,e),N(u.$$.fragment,e),i=!1},d(e){e&&m(t),R(c),R(l),R(u)}}}function Oe(e){let t;const n=new oe({props:{title:"Skills",$$slots:{default:[Te]},$$scope:{ctx:e}}});return{c(){G(n.$$.fragment)},m(e,o){Q(n,e,o),t=!0},p(e,[t]){const o={};257&t&&(o.$$scope={dirty:t,ctx:e}),n.$set(o)},i(e){t||(B(n.$$.fragment,e),t=!0)},o(e){N(n.$$.fragment,e),t=!1},d(e){R(n,e)}}}const Ee=4;function Ie(e,t,n){let{info:o}=t;return e.$set=e=>{"info"in e&&n(0,o=e.info)},[o,{contentClass:"has-text-grey is-text-6",headerSize:"6"}]}var ze=class extends V{constructor(e){super(),X(this,e,Ie,Oe,l,{info:0})}};function Je(e){let t,n,o,r,s,a,i,c,l;const g=e[2].default,b=u(g,e,e[3],null);return{c(){t=h("div"),n=h("div"),o=h("i"),s=v(),a=y(e[1]),i=v(),c=h("div"),b&&b.c(),x(o,"class",r="icon-themed "+e[0]),x(n,"class","column is-one-third is-size-4"),x(c,"class","column is-two-thirds"),x(t,"class","columns")},m(e,r){$(e,t,r),p(t,n),p(n,o),p(n,s),p(n,a),p(t,i),p(t,c),b&&b.m(c,null),l=!0},p(e,t){(!l||1&t&&r!==(r="icon-themed "+e[0]))&&x(o,"class",r),(!l||2&t)&&w(a,e[1]),b&&b.p&&8&t&&b.p(d(g,e,e[3],null),f(g,e[3],t,null))},i(e){l||(B(b,e),l=!0)},o(e){N(b,e),l=!1},d(e){e&&m(t),b&&b.d(e)}}}function _e(e){let t;const n=new oe({props:{$$slots:{default:[Je]},$$scope:{ctx:e}}});return{c(){G(n.$$.fragment)},m(e,o){Q(n,e,o),t=!0},p(e,[t]){const o={};11&t&&(o.$$scope={dirty:t,ctx:e}),n.$set(o)},i(e){t||(B(n.$$.fragment,e),t=!0)},o(e){N(n.$$.fragment,e),t=!1},d(e){R(n,e)}}}function De(e,t,n){let{icon:o}=t,{title:r}=t,{$$slots:s={},$$scope:a}=t;return e.$set=e=>{"icon"in e&&n(0,o=e.icon),"title"in e&&n(1,r=e.title),"$$scope"in e&&n(3,a=e.$$scope)},[o,r,s,a]}var je=class extends V{constructor(e){super(),X(this,e,De,_e,l,{icon:0,title:1})}};function Be(e){let t;return{c(){t=y(e[2])},m(e,n){$(e,t,n)},p(e,n){4&n&&w(t,e[2])},d(e){e&&m(t)}}}function Ne(e){let t,n,o;return{c(){t=h("a"),n=y(e[2]),x(t,"name",o="employment-details-"+e[5]),x(t,"href",e[4]),x(t,"target","_blank")},m(e,o){$(e,t,o),p(t,n)},p(e,r){4&r&&w(n,e[2]),32&r&&o!==(o="employment-details-"+e[5])&&x(t,"name",o),16&r&&x(t,"href",e[4])},d(e){e&&m(t)}}}function We(e){let t,n,o,r;function s(e,t){return e[4]?Ne:Be}let a=s(e),i=a(e);return{c(){i.c(),t=y("\n    | "),n=y(e[0]),o=y(" ‐ "),r=y(e[1])},m(e,s){i.m(e,s),$(e,t,s),$(e,n,s),$(e,o,s),$(e,r,s)},p(e,o){a===(a=s(e))&&i?i.p(e,o):(i.d(1),i=a(e),i&&(i.c(),i.m(t.parentNode,t))),1&o&&w(n,e[0]),2&o&&w(r,e[1])},d(e){i.d(e),e&&m(t),e&&m(n),e&&m(o),e&&m(r)}}}function Fe(e){let t,n,o,r;const s=new fe({props:{header:e[3],headerClass:"content eh-header",$$slots:{default:[We]},$$scope:{ctx:e}}}),a=e[7].default,i=u(a,e,e[8],null);return{c(){t=h("div"),G(s.$$.fragment),n=v(),o=h("div"),i&&i.c(),x(o,"class",e[6]),x(t,"class","container")},m(e,a){$(e,t,a),Q(s,t,null),p(t,n),p(t,o),i&&i.m(o,null),r=!0},p(e,[t]){const n={};8&t&&(n.header=e[3]),311&t&&(n.$$scope={dirty:t,ctx:e}),s.$set(n),i&&i.p&&256&t&&i.p(d(a,e,e[8],null),f(a,e[8],t,null)),(!r||64&t)&&x(o,"class",e[6])},i(e){r||(B(s.$$.fragment,e),B(i,e),r=!0)},o(e){N(s.$$.fragment,e),N(i,e),r=!1},d(e){e&&m(t),R(s),i&&i.d(e)}}}function He(e,t,n){let{start:o}=t,{end:r}=t,{company:s}=t,{position:a}=t,{url:i}=t,{chronology:c}=t,{contentClass:l="content"}=t,{$$slots:u={},$$scope:d}=t;return e.$set=e=>{"start"in e&&n(0,o=e.start),"end"in e&&n(1,r=e.end),"company"in e&&n(2,s=e.company),"position"in e&&n(3,a=e.position),"url"in e&&n(4,i=e.url),"chronology"in e&&n(5,c=e.chronology),"contentClass"in e&&n(6,l=e.contentClass),"$$scope"in e&&n(8,d=e.$$scope)},[o,r,s,a,i,c,l,u,d]}var Ge=class extends V{constructor(e){super(),X(this,e,He,Fe,l,{start:0,end:1,company:2,position:3,url:4,chronology:5,contentClass:6})}};function Qe(e){let t;return{c(){t=h("ul"),t.innerHTML='<li>Rewrote the logistics API integrations system from scratch using Akka Actor system heavily. Scaled the system\n        from 1 API integration to 35. Designed the system to work with third party APIs of varying complexity and tech\n        stacks (webhooks, SOAP, REST, legacy XML APIs), and to handle tracking, shipping label, order and pickup\n        management for 100K+ live orders at peak, operating on mere 512 MB JVM memory.\n      </li> \n      <li>Collaborated with 3PL tech &amp; business counterparts across 9 countries/time zones (India, Singapore, Thailand,\n        Indonesia, Philippines, USA, Australia, China and Myanmar), and created specialized workflows to be able to\n        serve differences in operational processes of different 3PLs. Worked closely with Zilingo Operations teams\n        across regions to tweak systems for solving operational challenges in different business scenarios: B2C\n        logistics (efficiency), B2B logistics (cost) and cross-border logistics (first mile visibility &amp; customs).\n      </li> \n      <li>Designed/implemented an internal Scala library to publish data from different microservices in real-time using\n        Akka Streams and Kafka, with support for push/pull and selective data resyncing. The library can sync different\n        versions of same source data to different destinations (e.g. data-warehouses, other services)\n      </li> \n      <li>Designed/implemented a highly available zones backend system to serve country specific administrative zone\n        hierarchy and associated metadata (e.g. postal codes). The system supports different versions of data to be\n        served to different services at a given time, to ensure different microservices can adopt the data updates\n        gradually, and the service deployments are decoupled with the availability of data\n      </li> \n      <li>\n        SBT multi project configuration setup for data warehouse sync client library standardization\n      </li> \n      <li>Worked with devops and implemented specialized monitoring and alerts using Grafana for developer view of the\n        third party API performance and health\n      </li> \n      <li>Implemented internal services for seller rating management as the task for Scala/Play Framework onboarding and\n        delivered the entire service from ground up in the first 2 weeks. Did some work on a data validation system for\n        region specific/agnostic phone number verification using Google’s\n        <a href="https://github.com/google/libphonenumber">libphonenumber</a> library\n      </li>'},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function Re(e){let t;return{c(){t=h("ul"),t.innerHTML="<li>Worked in Oracle Fusion SCM - Manufacturing software development team for 1 year\n      </li> \n      <li>\n        Worked on the Work Order Execution and mass import components (Java, ADF, PLSQL, SOAP Web services, UTPLSQL)\n      </li>"},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function Xe(e){let t;return{c(){t=h("ul"),t.innerHTML="<li>Worked in Oracle EBS development team, for their CMRO product (Complex Maintenance, Repair and Overhaul)\n        that’s used for planning and execution of MRO activities on aeroplanes, engines and other complex equipment\n        (Java, OAF, PLSQL, XML)\n      </li> \n      <li>\n        Implemented extraction of CMRO Visits hierarchy as Microsoft Project supported XML, for better planning of\n        Visits in MS Project\n      </li> \n      <li>\n        Implemented Material and Squawks pages in new Non-routine Enhancement dashboard\n      </li> \n      <li>\n        Search Unit Configuration, and Search UC drill down pages in Maintenance Control Centre workbench\n      </li> \n      <li>\n        Integrated existing part changes page into MCC workbench\n      </li> \n      <li>\n        Converted Alternate Item Groups pages (Search/Manage) from CSI framework to OAF\n      </li>"},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function Ve(e){let t;return{c(){t=h("ul"),t.innerHTML="<li>Developed a tool to extract document/metadata from Livelink servers and store metadata as XMLs, content\n        natively in an organized structure (.Net/C#).\n      </li> \n      <li>\n        Feasibility analysis for migration of a decade old Livelink system to SharePoint\n      </li> \n      <li>\n        Worked on setting up an offshore data center for migration from existing Documentum and Livelink servers to\n        Sharepoint\n      </li>"},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function Ue(e){let t;return{c(){t=h("ul"),t.innerHTML="<li>Taxonomy standardization of more than 2 million documents in Documentum CMS\n      </li> \n      <li>\n        Production system upgrades for highly critical Documentum/Sharepoint docbases (Java, XML, Oracle)\n      </li> \n      <li>\n        Production support for almost 25 Documentum 5.3 and 6.5 docbases across the world\n      </li>"},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function qe(e){let t;return{c(){t=h("ul"),t.innerHTML="<li>Remote Compiler - Web-based IDE and compilation/execution environment for various programming languages (C,\n        C++, Java). Generalized the UI widgets created for the project as reusable component library (J2EE, JavaScript,\n        CSS, Compilers, Oracle)\n      </li>"},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function Ke(e){let t,n,o,s,a,i;const c=[e[0],{chronology:"6"},{position:"Junior Vice President, Logistics Tech"},{company:"Zilingo"},{start:"June 2016"},{end:"Present"},{url:"https://zilingo.com"}];let l={$$slots:{default:[Qe]},$$scope:{ctx:e}};for(let e=0;e<c.length;e+=1)l=r(l,c[e]);const u=new Ge({props:l}),d=[e[0],{chronology:"5"},{position:"Senior Applications Engineer"},{company:"Oracle"},{start:"November 2014"},{end:"June 2016"},{url:"https://www.oracle.com/in/applications/supply-chain-management/manufacturing/"}];let f={$$slots:{default:[Re]},$$scope:{ctx:e}};for(let e=0;e<d.length;e+=1)f=r(f,d[e]);const p=new Ge({props:f}),g=[e[0],{chronology:"4"},{position:"Applications Engineer"},{company:"Oracle"},{start:"March 2012"},{end:"November 2014"},{url:"https://www.oracle.com/a/ocom/docs/industries/oracle-cmro-045277.pdf"}];let h={$$slots:{default:[Xe]},$$scope:{ctx:e}};for(let e=0;e<g.length;e+=1)h=r(h,g[e]);const y=new Ge({props:h}),b=[e[0],{chronology:"3"},{position:"Senior Systems Engineer"},{company:"Infosys Limited"},{start:"October 2011"},{end:"March 2012"},{url:"https://www.infosys.com/"}];let x={$$slots:{default:[Ve]},$$scope:{ctx:e}};for(let e=0;e<b.length;e+=1)x=r(x,b[e]);const w=new Ge({props:x}),S=[e[0],{chronology:"2"},{position:"Systems Engineer"},{company:"Infosys Technologies Limited"},{start:"July 2009"},{end:"October 2011"}];let k={$$slots:{default:[Ue]},$$scope:{ctx:e}};for(let e=0;e<S.length;e+=1)k=r(k,S[e]);const M=new Ge({props:k}),C=[e[0],{chronology:"1"},{position:"Software Engineer, Intern"},{company:"Infosys Technologies Limited"},{start:"January 2009"},{end:"May 2009"}];let L={$$slots:{default:[qe]},$$scope:{ctx:e}};for(let e=0;e<C.length;e+=1)L=r(L,C[e]);const P=new Ge({props:L});return{c(){G(u.$$.fragment),t=v(),G(p.$$.fragment),n=v(),G(y.$$.fragment),o=v(),G(w.$$.fragment),s=v(),G(M.$$.fragment),a=v(),G(P.$$.fragment)},m(e,r){Q(u,e,r),$(e,t,r),Q(p,e,r),$(e,n,r),Q(y,e,r),$(e,o,r),Q(w,e,r),$(e,s,r),Q(M,e,r),$(e,a,r),Q(P,e,r),i=!0},p(e,t){const n=1&t?W(c,[F(e[0]),c[1],c[2],c[3],c[4],c[5],c[6]]):{};2&t&&(n.$$scope={dirty:t,ctx:e}),u.$set(n);const o=1&t?W(d,[F(e[0]),d[1],d[2],d[3],d[4],d[5],d[6]]):{};2&t&&(o.$$scope={dirty:t,ctx:e}),p.$set(o);const r=1&t?W(g,[F(e[0]),g[1],g[2],g[3],g[4],g[5],g[6]]):{};2&t&&(r.$$scope={dirty:t,ctx:e}),y.$set(r);const s=1&t?W(b,[F(e[0]),b[1],b[2],b[3],b[4],b[5],b[6]]):{};2&t&&(s.$$scope={dirty:t,ctx:e}),w.$set(s);const a=1&t?W(S,[F(e[0]),S[1],S[2],S[3],S[4],S[5]]):{};2&t&&(a.$$scope={dirty:t,ctx:e}),M.$set(a);const i=1&t?W(C,[F(e[0]),C[1],C[2],C[3],C[4],C[5]]):{};2&t&&(i.$$scope={dirty:t,ctx:e}),P.$set(i)},i(e){i||(B(u.$$.fragment,e),B(p.$$.fragment,e),B(y.$$.fragment,e),B(w.$$.fragment,e),B(M.$$.fragment,e),B(P.$$.fragment,e),i=!0)},o(e){N(u.$$.fragment,e),N(p.$$.fragment,e),N(y.$$.fragment,e),N(w.$$.fragment,e),N(M.$$.fragment,e),N(P.$$.fragment,e),i=!1},d(e){R(u,e),e&&m(t),R(p,e),e&&m(n),R(y,e),e&&m(o),R(w,e),e&&m(s),R(M,e),e&&m(a),R(P,e)}}}function Ze(e){let t;const n=new je({props:{icon:"fa fa-briefcase",title:"Employment History",$$slots:{default:[Ke]},$$scope:{ctx:e}}});return{c(){G(n.$$.fragment)},m(e,o){Q(n,e,o),t=!0},p(e,[t]){const o={};2&t&&(o.$$scope={dirty:t,ctx:e}),n.$set(o)},i(e){t||(B(n.$$.fragment,e),t=!0)},o(e){N(n.$$.fragment,e),t=!1},d(e){R(n,e)}}}function Ye(e){return[{contentClass:"content eh-content"}]}var et=class extends V{constructor(e){super(),X(this,e,Ye,Ze,l,{})}};function tt(e){let t,n;return{c(){t=h("a"),t.textContent="Scala library",n=y(" of commonly used financial functions (e.g. XIRR, NPV)"),x(t,"href","https://github.com/praphull/scala-finance"),x(t,"target","_blank")},m(e,o){$(e,t,o),$(e,n,o)},d(e){e&&m(t),e&&m(n)}}}function nt(e){let t;return{c(){t=y("Banana Kick - Android application (Java) and backend (Node.js) for booking sport venues (Android,\n      Node.js/Express.js, Mocha/Should.js, MySQL, AWS, Twitter Digits, JWT)")},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function ot(e){let t;return{c(){t=y("Online lecture delivery and collaboration platform (J2EE, Websphere Application Server, DB2)")},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function rt(e){let t;return{c(){t=y("Make your wish - Social Networking Portal for college/universities (J2EE, Websphere Application Server, DB2)")},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function st(e){let t;return{c(){t=y("SPEAR TankTank Game using Borland Graphics Libraries (C++, BGI)")},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function at(e){let t;return{c(){t=y("FECOMAS - Built Fee collection management system for the school (Visual Foxpro 6)")},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function it(e){let t,n,o,r,s,a,i;const c=new fe({props:{headerSize:lt,header:"Financial Functions Library",$$slots:{default:[tt]},$$scope:{ctx:e}}}),l=new fe({props:{headerSize:lt,header:"Android app & backend (2015-16)",$$slots:{default:[nt]},$$scope:{ctx:e}}}),u=new fe({props:{headerSize:lt,header:"Virtual Classroom (IBM TGMC 2008)",$$slots:{default:[ot]},$$scope:{ctx:e}}}),d=new fe({props:{headerSize:lt,header:"Social Networking Portal (IBM TGMC 2007)",$$slots:{default:[rt]},$$scope:{ctx:e}}}),f=new fe({props:{headerSize:lt,header:"Tank Game (2006)",$$slots:{default:[st]},$$scope:{ctx:e}}}),g=new fe({props:{headerSize:lt,header:"Fee collection management (2003-2005",$$slots:{default:[at]},$$scope:{ctx:e}}});return{c(){t=h("div"),G(c.$$.fragment),n=v(),G(l.$$.fragment),o=v(),G(u.$$.fragment),r=v(),G(d.$$.fragment),s=v(),G(f.$$.fragment),a=v(),G(g.$$.fragment),x(t,"class","content")},m(e,m){$(e,t,m),Q(c,t,null),p(t,n),Q(l,t,null),p(t,o),Q(u,t,null),p(t,r),Q(d,t,null),p(t,s),Q(f,t,null),p(t,a),Q(g,t,null),i=!0},p(e,t){const n={};1&t&&(n.$$scope={dirty:t,ctx:e}),c.$set(n);const o={};1&t&&(o.$$scope={dirty:t,ctx:e}),l.$set(o);const r={};1&t&&(r.$$scope={dirty:t,ctx:e}),u.$set(r);const s={};1&t&&(s.$$scope={dirty:t,ctx:e}),d.$set(s);const a={};1&t&&(a.$$scope={dirty:t,ctx:e}),f.$set(a);const i={};1&t&&(i.$$scope={dirty:t,ctx:e}),g.$set(i)},i(e){i||(B(c.$$.fragment,e),B(l.$$.fragment,e),B(u.$$.fragment,e),B(d.$$.fragment,e),B(f.$$.fragment,e),B(g.$$.fragment,e),i=!0)},o(e){N(c.$$.fragment,e),N(l.$$.fragment,e),N(u.$$.fragment,e),N(d.$$.fragment,e),N(f.$$.fragment,e),N(g.$$.fragment,e),i=!1},d(e){e&&m(t),R(c),R(l),R(u),R(d),R(f),R(g)}}}function ct(e){let t;const n=new je({props:{icon:"fa fa-laptop-code",title:"Projects/Tooling",$$slots:{default:[it]},$$scope:{ctx:e}}});return{c(){G(n.$$.fragment)},m(e,o){Q(n,e,o),t=!0},p(e,[t]){const o={};1&t&&(o.$$scope={dirty:t,ctx:e}),n.$set(o)},i(e){t||(B(n.$$.fragment,e),t=!0)},o(e){N(n.$$.fragment,e),t=!1},d(e){R(n,e)}}}const lt=6;var ut=class extends V{constructor(e){super(),X(this,e,null,ct,l,{})}};function dt(e){let t;return{c(){t=y("Bachelor of Technology, Computer Science Engineering | July 2005 - May 2009")},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function ft(e){let t;const n=new fe({props:{header:"Jaypee University of Information Technology, Waknaghat, IN",$$slots:{default:[dt]},$$scope:{ctx:e}}});return{c(){G(n.$$.fragment)},m(e,o){Q(n,e,o),t=!0},p(e,t){const o={};1&t&&(o.$$scope={dirty:t,ctx:e}),n.$set(o)},i(e){t||(B(n.$$.fragment,e),t=!0)},o(e){N(n.$$.fragment,e),t=!1},d(e){R(n,e)}}}function pt(e){let t;const n=new je({props:{icon:"fa fa-graduation-cap",title:"Education",$$slots:{default:[ft]},$$scope:{ctx:e}}});return{c(){G(n.$$.fragment)},m(e,o){Q(n,e,o),t=!0},p(e,[t]){const o={};1&t&&(o.$$scope={dirty:t,ctx:e}),n.$set(o)},i(e){t||(B(n.$$.fragment,e),t=!0)},o(e){N(n.$$.fragment,e),t=!1},d(e){R(n,e)}}}var $t=class extends V{constructor(e){super(),X(this,e,null,pt,l,{})}};n(2);function mt(e,t,n){const o=e.slice();return o[1]=t[n],o}function gt(e){let t,n,o,r,s,a=e[1].id+"";return{c(){t=h("i"),r=v(),s=y(a),x(t,"class",n="icon icon-themed fa-lg "+e[1].icon+" svelte-1duud3o"),x(t,"title",o=e[1].name)},m(e,n){$(e,t,n),$(e,r,n),$(e,s,n)},p(e,r){1&r&&n!==(n="icon icon-themed fa-lg "+e[1].icon+" svelte-1duud3o")&&x(t,"class",n),1&r&&o!==(o=e[1].name)&&x(t,"title",o),1&r&&a!==(a=e[1].id+"")&&w(s,a)},d(e){e&&m(t),e&&m(r),e&&m(s)}}}function ht(e){let t,n,o,r,s,a,i,c,l=e[1].id+"";return{c(){t=h("a"),n=h("i"),s=v(),a=y(l),x(n,"class",o="icon icon-themed fa-lg "+e[1].icon+" svelte-1duud3o"),x(n,"title",r=e[1].name),x(t,"class","has-text-info"),x(t,"href",i=e[1].url),x(t,"target","_blank"),x(t,"title",c=e[1].name)},m(e,o){$(e,t,o),p(t,n),p(t,s),p(t,a)},p(e,s){1&s&&o!==(o="icon icon-themed fa-lg "+e[1].icon+" svelte-1duud3o")&&x(n,"class",o),1&s&&r!==(r=e[1].name)&&x(n,"title",r),1&s&&l!==(l=e[1].id+"")&&w(a,l),1&s&&i!==(i=e[1].url)&&x(t,"href",i),1&s&&c!==(c=e[1].name)&&x(t,"title",c)},d(e){e&&m(t)}}}function yt(e){let t,n;function o(e,t){return e[1].url?ht:gt}let r=o(e),s=r(e);return{c(){t=h("span"),s.c(),n=v(),x(t,"class","footer-links has-text-info svelte-1duud3o")},m(e,o){$(e,t,o),s.m(t,null),p(t,n)},p(e,a){r===(r=o(e))&&s?s.p(e,a):(s.d(1),s=r(e),s&&(s.c(),s.m(t,n)))},d(e){e&&m(t),s.d()}}}function vt(e){let t,n,r,s,a,i,c,l=e[0].contactDetails,u=[];for(let t=0;t<l.length;t+=1)u[t]=yt(mt(e,l,t));return{c(){t=h("footer"),n=h("div"),r=h("p");for(let e=0;e<u.length;e+=1)u[e].c();s=v(),a=h("br"),i=v(),c=h("p"),c.innerHTML='\n      Hosted on <strong>Github pages.</strong> Built using <a href="https://bulma.io" target="_blank">Bulma</a> and\n      <a href="https://svelte.dev/" target="_blank">Svelte</a>.<br>\n      The <a href="https://github.com/praphull/praphull.github.io">source code</a> is licensed under\n      <a href="https://opensource.org/licenses/Apache-2.0">Apache License, Version 2.0</a> and everyone is free to\n      modify &amp; use it for their pages.<br>\n      Content copyright © Praphull Purohit.\n    ',x(n,"class","container has-text-centered"),x(t,"class","footer")},m(e,o){$(e,t,o),p(t,n),p(n,r);for(let e=0;e<u.length;e+=1)u[e].m(r,null);p(n,s),p(n,a),p(n,i),p(n,c)},p(e,[t]){if(1&t){let n;for(l=e[0].contactDetails,n=0;n<l.length;n+=1){const o=mt(e,l,n);u[n]?u[n].p(o,t):(u[n]=yt(o),u[n].c(),u[n].m(r,null))}for(;n<u.length;n+=1)u[n].d(1);u.length=l.length}},i:o,o:o,d(e){e&&m(t),g(u,e)}}}function bt(e,t,n){let{info:o}=t;return e.$set=e=>{"info"in e&&n(0,o=e.info)},[o]}var xt=class extends V{constructor(e){super(),X(this,e,bt,vt,l,{info:0})}};function wt(e){let t,n,o,r,s,a,i;const c=new ee({props:{info:e[0]}}),l=new ve({props:{info:e[0]}}),u=new ze({props:{info:e[0]}}),d=new et({}),f=new ut({}),p=new $t({}),g=new xt({props:{info:e[0]}});return{c(){G(c.$$.fragment),t=v(),G(l.$$.fragment),n=v(),G(u.$$.fragment),o=v(),G(d.$$.fragment),r=v(),G(f.$$.fragment),s=v(),G(p.$$.fragment),a=v(),G(g.$$.fragment)},m(e,m){Q(c,e,m),$(e,t,m),Q(l,e,m),$(e,n,m),Q(u,e,m),$(e,o,m),Q(d,e,m),$(e,r,m),Q(f,e,m),$(e,s,m),Q(p,e,m),$(e,a,m),Q(g,e,m),i=!0},p(e,[t]){const n={};1&t&&(n.info=e[0]),c.$set(n);const o={};1&t&&(o.info=e[0]),l.$set(o);const r={};1&t&&(r.info=e[0]),u.$set(r);const s={};1&t&&(s.info=e[0]),g.$set(s)},i(e){i||(B(c.$$.fragment,e),B(l.$$.fragment,e),B(u.$$.fragment,e),B(d.$$.fragment,e),B(f.$$.fragment,e),B(p.$$.fragment,e),B(g.$$.fragment,e),i=!0)},o(e){N(c.$$.fragment,e),N(l.$$.fragment,e),N(u.$$.fragment,e),N(d.$$.fragment,e),N(f.$$.fragment,e),N(p.$$.fragment,e),N(g.$$.fragment,e),i=!1},d(e){R(c,e),e&&m(t),R(l,e),e&&m(n),R(u,e),e&&m(o),R(d,e),e&&m(r),R(f,e),e&&m(s),R(p,e),e&&m(a),R(g,e)}}}function St(e,t,n){let{info:o}=t;return e.$set=e=>{"info"in e&&n(0,o=e.info)},[o]}var kt=class extends V{constructor(e){super(),X(this,e,St,wt,l,{info:0})}};n(3);const Mt=new kt({target:document.body,props:{info:{tags:["Scala","Play Framework","Akka","Java","PostgreSQL","Kafka","Oracle","PLSQL","Javascript","Node.js","C#","JWT","Android","SQL","MongoDB","Amazon Web Services","Microservices","Git","REST","SOAP","XML","Webhooks","Devops"],contactDetails:[{name:"LinkedIn",icon:"fab fa-linkedin",id:"praphull8888",url:"https://in.linkedin.com/in/praphull8888"},{name:"GitHub",icon:"fab fa-github-square",id:"praphull",url:"https://github.com/praphull"},{name:"Skype",icon:"fab fa-skype",id:"praphull.purohit"},{name:"Email",icon:"fa fa-envelope",id:"praphull8888 [at] gmail"}],experience:[{item:"Scala/Akka",duration:"4 years"},{item:"Java",duration:"7 years"},{item:"Oracle/PLSQL",duration:"6 years"},{item:"PostgreSQL",duration:"4 years"},{item:"HTML/Javascript",duration:"11 years"},{item:"Node.js",duration:"1 year"},{item:"C#",duration:"1 year"},{item:"Documentum",duration:"2 years"}],preferred:["Scala","Akka","Databases/SQL","Java","Node.js","JavaScript/Web"]}}});window.app=Mt;t.default=Mt}]);