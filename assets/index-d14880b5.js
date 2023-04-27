(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function cu(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function lu(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=je(s)?vE(s):lu(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(je(t))return t;if(De(t))return t}}const mE=/;(?![^(]*\))/g,_E=/:([^]+)/,yE=/\/\*.*?\*\//gs;function vE(t){const e={};return t.replace(yE,"").split(mE).forEach(n=>{if(n){const s=n.split(_E);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function fa(t){let e="";if(je(t))e=t;else if(Q(t))for(let n=0;n<t.length;n++){const s=fa(t[n]);s&&(e+=s+" ")}else if(De(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const EE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wE=cu(EE);function og(t){return!!t||t===""}const lf=t=>je(t)?t:t==null?"":Q(t)||De(t)&&(t.toString===ug||!J(t.toString))?JSON.stringify(t,ag,2):String(t),ag=(t,e)=>e&&e.__v_isRef?ag(t,e.value):Hs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:cg(e)?{[`Set(${e.size})`]:[...e.values()]}:De(e)&&!Q(e)&&!hg(e)?String(e):e,Se={},$s=[],qt=()=>{},TE=()=>!1,IE=/^on[^a-z]/,da=t=>IE.test(t),uu=t=>t.startsWith("onUpdate:"),ft=Object.assign,hu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},CE=Object.prototype.hasOwnProperty,ae=(t,e)=>CE.call(t,e),Q=Array.isArray,Hs=t=>pa(t)==="[object Map]",cg=t=>pa(t)==="[object Set]",J=t=>typeof t=="function",je=t=>typeof t=="string",fu=t=>typeof t=="symbol",De=t=>t!==null&&typeof t=="object",lg=t=>De(t)&&J(t.then)&&J(t.catch),ug=Object.prototype.toString,pa=t=>ug.call(t),bE=t=>pa(t).slice(8,-1),hg=t=>pa(t)==="[object Object]",du=t=>je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,mo=cu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ga=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},SE=/-(\w)/g,Js=ga(t=>t.replace(SE,(e,n)=>n?n.toUpperCase():"")),AE=/\B([A-Z])/g,di=ga(t=>t.replace(AE,"-$1").toLowerCase()),fg=ga(t=>t.charAt(0).toUpperCase()+t.slice(1)),oc=ga(t=>t?`on${fg(t)}`:""),nr=(t,e)=>!Object.is(t,e),_o=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ao=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Wc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let uf;const RE=()=>uf||(uf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ct;class dg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ct,!e&&Ct&&(this.index=(Ct.scopes||(Ct.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ct;try{return Ct=this,e()}finally{Ct=n}}}on(){Ct=this}off(){Ct=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function NE(t){return new dg(t)}function kE(t,e=Ct){e&&e.active&&e.effects.push(t)}function pg(){return Ct}function DE(t){Ct&&Ct.cleanups.push(t)}const pu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},gg=t=>(t.w&jn)>0,mg=t=>(t.n&jn)>0,OE=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=jn},PE=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];gg(i)&&!mg(i)?i.delete(t):e[n++]=i,i.w&=~jn,i.n&=~jn}e.length=n}},zc=new WeakMap;let Mi=0,jn=1;const Gc=30;let Bt;const ds=Symbol(""),Qc=Symbol("");class gu{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,kE(this,s)}run(){if(!this.active)return this.fn();let e=Bt,n=xn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Bt,Bt=this,xn=!0,jn=1<<++Mi,Mi<=Gc?OE(this):hf(this),this.fn()}finally{Mi<=Gc&&PE(this),jn=1<<--Mi,Bt=this.parent,xn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Bt===this?this.deferStop=!0:this.active&&(hf(this),this.onStop&&this.onStop(),this.active=!1)}}function hf(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let xn=!0;const _g=[];function pi(){_g.push(xn),xn=!1}function gi(){const t=_g.pop();xn=t===void 0?!0:t}function Tt(t,e,n){if(xn&&Bt){let s=zc.get(t);s||zc.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=pu()),yg(i)}}function yg(t,e){let n=!1;Mi<=Gc?mg(t)||(t.n|=jn,n=!gg(t)):n=!t.has(Bt),n&&(t.add(Bt),Bt.deps.push(t))}function En(t,e,n,s,i,r){const o=zc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Q(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Q(t)?du(n)&&a.push(o.get("length")):(a.push(o.get(ds)),Hs(t)&&a.push(o.get(Qc)));break;case"delete":Q(t)||(a.push(o.get(ds)),Hs(t)&&a.push(o.get(Qc)));break;case"set":Hs(t)&&a.push(o.get(ds));break}if(a.length===1)a[0]&&Yc(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Yc(pu(c))}}function Yc(t,e){const n=Q(t)?t:[...t];for(const s of n)s.computed&&ff(s);for(const s of n)s.computed||ff(s)}function ff(t,e){(t!==Bt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const xE=cu("__proto__,__v_isRef,__isVue"),vg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(fu)),ME=mu(),LE=mu(!1,!0),FE=mu(!0),df=UE();function UE(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ue(this);for(let r=0,o=this.length;r<o;r++)Tt(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(ue)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){pi();const s=ue(this)[e].apply(this,n);return gi(),s}}),t}function VE(t){const e=ue(this);return Tt(e,"has",t),e.hasOwnProperty(t)}function mu(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?tw:Cg:e?Ig:Tg).get(s))return s;const o=Q(s);if(!t){if(o&&ae(df,i))return Reflect.get(df,i,r);if(i==="hasOwnProperty")return VE}const a=Reflect.get(s,i,r);return(fu(i)?vg.has(i):xE(i))||(t||Tt(s,"get",i),e)?a:Xe(a)?o&&du(i)?a:a.value:De(a)?t?bg(a):br(a):a}}const BE=Eg(),$E=Eg(!0);function Eg(t=!1){return function(n,s,i,r){let o=n[s];if(Zs(o)&&Xe(o)&&!Xe(i))return!1;if(!t&&(!Ro(i)&&!Zs(i)&&(o=ue(o),i=ue(i)),!Q(n)&&Xe(o)&&!Xe(i)))return o.value=i,!0;const a=Q(n)&&du(s)?Number(s)<n.length:ae(n,s),c=Reflect.set(n,s,i,r);return n===ue(r)&&(a?nr(i,o)&&En(n,"set",s,i):En(n,"add",s,i)),c}}function HE(t,e){const n=ae(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&En(t,"delete",e,void 0),s}function jE(t,e){const n=Reflect.has(t,e);return(!fu(e)||!vg.has(e))&&Tt(t,"has",e),n}function KE(t){return Tt(t,"iterate",Q(t)?"length":ds),Reflect.ownKeys(t)}const wg={get:ME,set:BE,deleteProperty:HE,has:jE,ownKeys:KE},qE={get:FE,set(t,e){return!0},deleteProperty(t,e){return!0}},WE=ft({},wg,{get:LE,set:$E}),_u=t=>t,ma=t=>Reflect.getPrototypeOf(t);function Yr(t,e,n=!1,s=!1){t=t.__v_raw;const i=ue(t),r=ue(e);n||(e!==r&&Tt(i,"get",e),Tt(i,"get",r));const{has:o}=ma(i),a=s?_u:n?wu:sr;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Xr(t,e=!1){const n=this.__v_raw,s=ue(n),i=ue(t);return e||(t!==i&&Tt(s,"has",t),Tt(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Jr(t,e=!1){return t=t.__v_raw,!e&&Tt(ue(t),"iterate",ds),Reflect.get(t,"size",t)}function pf(t){t=ue(t);const e=ue(this);return ma(e).has.call(e,t)||(e.add(t),En(e,"add",t,t)),this}function gf(t,e){e=ue(e);const n=ue(this),{has:s,get:i}=ma(n);let r=s.call(n,t);r||(t=ue(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?nr(e,o)&&En(n,"set",t,e):En(n,"add",t,e),this}function mf(t){const e=ue(this),{has:n,get:s}=ma(e);let i=n.call(e,t);i||(t=ue(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&En(e,"delete",t,void 0),r}function _f(){const t=ue(this),e=t.size!==0,n=t.clear();return e&&En(t,"clear",void 0,void 0),n}function Zr(t,e){return function(s,i){const r=this,o=r.__v_raw,a=ue(o),c=e?_u:t?wu:sr;return!t&&Tt(a,"iterate",ds),o.forEach((l,u)=>s.call(i,c(l),c(u),r))}}function eo(t,e,n){return function(...s){const i=this.__v_raw,r=ue(i),o=Hs(r),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=i[t](...s),u=n?_u:e?wu:sr;return!e&&Tt(r,"iterate",c?Qc:ds),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function An(t){return function(...e){return t==="delete"?!1:this}}function zE(){const t={get(r){return Yr(this,r)},get size(){return Jr(this)},has:Xr,add:pf,set:gf,delete:mf,clear:_f,forEach:Zr(!1,!1)},e={get(r){return Yr(this,r,!1,!0)},get size(){return Jr(this)},has:Xr,add:pf,set:gf,delete:mf,clear:_f,forEach:Zr(!1,!0)},n={get(r){return Yr(this,r,!0)},get size(){return Jr(this,!0)},has(r){return Xr.call(this,r,!0)},add:An("add"),set:An("set"),delete:An("delete"),clear:An("clear"),forEach:Zr(!0,!1)},s={get(r){return Yr(this,r,!0,!0)},get size(){return Jr(this,!0)},has(r){return Xr.call(this,r,!0)},add:An("add"),set:An("set"),delete:An("delete"),clear:An("clear"),forEach:Zr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=eo(r,!1,!1),n[r]=eo(r,!0,!1),e[r]=eo(r,!1,!0),s[r]=eo(r,!0,!0)}),[t,n,e,s]}const[GE,QE,YE,XE]=zE();function yu(t,e){const n=e?t?XE:YE:t?QE:GE;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ae(n,i)&&i in s?n:s,i,r)}const JE={get:yu(!1,!1)},ZE={get:yu(!1,!0)},ew={get:yu(!0,!1)},Tg=new WeakMap,Ig=new WeakMap,Cg=new WeakMap,tw=new WeakMap;function nw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function sw(t){return t.__v_skip||!Object.isExtensible(t)?0:nw(bE(t))}function br(t){return Zs(t)?t:vu(t,!1,wg,JE,Tg)}function iw(t){return vu(t,!1,WE,ZE,Ig)}function bg(t){return vu(t,!0,qE,ew,Cg)}function vu(t,e,n,s,i){if(!De(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=sw(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function js(t){return Zs(t)?js(t.__v_raw):!!(t&&t.__v_isReactive)}function Zs(t){return!!(t&&t.__v_isReadonly)}function Ro(t){return!!(t&&t.__v_isShallow)}function Sg(t){return js(t)||Zs(t)}function ue(t){const e=t&&t.__v_raw;return e?ue(e):t}function Eu(t){return Ao(t,"__v_skip",!0),t}const sr=t=>De(t)?br(t):t,wu=t=>De(t)?bg(t):t;function Ag(t){xn&&Bt&&(t=ue(t),yg(t.dep||(t.dep=pu())))}function Rg(t,e){t=ue(t);const n=t.dep;n&&Yc(n)}function Xe(t){return!!(t&&t.__v_isRef===!0)}function Mn(t){return kg(t,!1)}function Ng(t){return kg(t,!0)}function kg(t,e){return Xe(t)?t:new rw(t,e)}class rw{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ue(e),this._value=n?e:sr(e)}get value(){return Ag(this),this._value}set value(e){const n=this.__v_isShallow||Ro(e)||Zs(e);e=n?e:ue(e),nr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:sr(e),Rg(this))}}function fe(t){return Xe(t)?t.value:t}const ow={get:(t,e,n)=>fe(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Xe(i)&&!Xe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Dg(t){return js(t)?t:new Proxy(t,ow)}var Og;class aw{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Og]=!1,this._dirty=!0,this.effect=new gu(e,()=>{this._dirty||(this._dirty=!0,Rg(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=ue(this);return Ag(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Og="__v_isReadonly";function cw(t,e,n=!1){let s,i;const r=J(t);return r?(s=t,i=qt):(s=t.get,i=t.set),new aw(s,i,r||!i,n)}function Ln(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){_a(r,e,n)}return i}function xt(t,e,n,s){if(J(t)){const r=Ln(t,e,n,s);return r&&lg(r)&&r.catch(o=>{_a(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(xt(t[r],e,n,s));return i}function _a(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const l=r.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){Ln(c,null,10,[t,o,a]);return}}lw(t,n,i,s)}function lw(t,e,n,s=!0){console.error(t)}let ir=!1,Xc=!1;const ct=[];let en=0;const Ks=[];let mn=null,is=0;const Pg=Promise.resolve();let Tu=null;function xg(t){const e=Tu||Pg;return t?e.then(this?t.bind(this):t):e}function uw(t){let e=en+1,n=ct.length;for(;e<n;){const s=e+n>>>1;rr(ct[s])<t?e=s+1:n=s}return e}function Iu(t){(!ct.length||!ct.includes(t,ir&&t.allowRecurse?en+1:en))&&(t.id==null?ct.push(t):ct.splice(uw(t.id),0,t),Mg())}function Mg(){!ir&&!Xc&&(Xc=!0,Tu=Pg.then(Fg))}function hw(t){const e=ct.indexOf(t);e>en&&ct.splice(e,1)}function fw(t){Q(t)?Ks.push(...t):(!mn||!mn.includes(t,t.allowRecurse?is+1:is))&&Ks.push(t),Mg()}function yf(t,e=ir?en+1:0){for(;e<ct.length;e++){const n=ct[e];n&&n.pre&&(ct.splice(e,1),e--,n())}}function Lg(t){if(Ks.length){const e=[...new Set(Ks)];if(Ks.length=0,mn){mn.push(...e);return}for(mn=e,mn.sort((n,s)=>rr(n)-rr(s)),is=0;is<mn.length;is++)mn[is]();mn=null,is=0}}const rr=t=>t.id==null?1/0:t.id,dw=(t,e)=>{const n=rr(t)-rr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Fg(t){Xc=!1,ir=!0,ct.sort(dw);const e=qt;try{for(en=0;en<ct.length;en++){const n=ct[en];n&&n.active!==!1&&Ln(n,null,14)}}finally{en=0,ct.length=0,Lg(),ir=!1,Tu=null,(ct.length||Ks.length)&&Fg()}}function pw(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Se;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||Se;f&&(i=n.map(p=>je(p)?p.trim():p)),h&&(i=n.map(Wc))}let a,c=s[a=oc(e)]||s[a=oc(Js(e))];!c&&r&&(c=s[a=oc(di(e))]),c&&xt(c,t,6,i);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,xt(l,t,6,i)}}function Ug(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!J(t)){const c=l=>{const u=Ug(l,e,!0);u&&(a=!0,ft(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!a?(De(t)&&s.set(t,null),null):(Q(r)?r.forEach(c=>o[c]=null):ft(o,r),De(t)&&s.set(t,o),o)}function ya(t,e){return!t||!da(e)?!1:(e=e.slice(2).replace(/Once$/,""),ae(t,e[0].toLowerCase()+e.slice(1))||ae(t,di(e))||ae(t,e))}let Ot=null,Vg=null;function No(t){const e=Ot;return Ot=t,Vg=t&&t.type.__scopeId||null,e}function gw(t,e=Ot,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Af(-1);const r=No(e);let o;try{o=t(...i)}finally{No(r),s._d&&Af(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ac(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:p,ctx:m,inheritAttrs:_}=t;let v,C;const N=No(t);try{if(n.shapeFlag&4){const O=i||s;v=Zt(u.call(O,O,h,r,p,f,m)),C=c}else{const O=e;v=Zt(O.length>1?O(r,{attrs:c,slots:a,emit:l}):O(r,null)),C=e.props?c:mw(c)}}catch(O){ji.length=0,_a(O,t,1),v=St(Wt)}let T=v;if(C&&_!==!1){const O=Object.keys(C),{shapeFlag:W}=T;O.length&&W&7&&(o&&O.some(uu)&&(C=_w(C,o)),T=Kn(T,C))}return n.dirs&&(T=Kn(T),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&(T.transition=n.transition),v=T,No(N),v}const mw=t=>{let e;for(const n in t)(n==="class"||n==="style"||da(n))&&((e||(e={}))[n]=t[n]);return e},_w=(t,e)=>{const n={};for(const s in t)(!uu(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function yw(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:c}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?vf(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!ya(l,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?vf(s,o,l):!0:!!o;return!1}function vf(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!ya(n,r))return!0}return!1}function vw({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Ew=t=>t.__isSuspense;function ww(t,e){e&&e.pendingBranch?Q(t)?e.effects.push(...t):e.effects.push(t):fw(t)}function yo(t,e){if(Ue){let n=Ue.provides;const s=Ue.parent&&Ue.parent.provides;s===n&&(n=Ue.provides=Object.create(s)),n[t]=e}}function At(t,e,n=!1){const s=Ue||Ot;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&J(e)?e.call(s.proxy):e}}function Tw(t,e){return Cu(t,null,{flush:"post"})}const to={};function $i(t,e,n){return Cu(t,e,n)}function Cu(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Se){const a=pg()===(Ue==null?void 0:Ue.scope)?Ue:null;let c,l=!1,u=!1;if(Xe(t)?(c=()=>t.value,l=Ro(t)):js(t)?(c=()=>t,s=!0):Q(t)?(u=!0,l=t.some(T=>js(T)||Ro(T)),c=()=>t.map(T=>{if(Xe(T))return T.value;if(js(T))return as(T);if(J(T))return Ln(T,a,2)})):J(t)?e?c=()=>Ln(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),xt(t,a,3,[f])}:c=qt,e&&s){const T=c;c=()=>as(T())}let h,f=T=>{h=C.onStop=()=>{Ln(T,a,4)}},p;if(ar)if(f=qt,e?n&&xt(e,a,3,[c(),u?[]:void 0,f]):c(),i==="sync"){const T=dT();p=T.__watcherHandles||(T.__watcherHandles=[])}else return qt;let m=u?new Array(t.length).fill(to):to;const _=()=>{if(C.active)if(e){const T=C.run();(s||l||(u?T.some((O,W)=>nr(O,m[W])):nr(T,m)))&&(h&&h(),xt(e,a,3,[T,m===to?void 0:u&&m[0]===to?[]:m,f]),m=T)}else C.run()};_.allowRecurse=!!e;let v;i==="sync"?v=_:i==="post"?v=()=>vt(_,a&&a.suspense):(_.pre=!0,a&&(_.id=a.uid),v=()=>Iu(_));const C=new gu(c,v);e?n?_():m=C.run():i==="post"?vt(C.run.bind(C),a&&a.suspense):C.run();const N=()=>{C.stop(),a&&a.scope&&hu(a.scope.effects,C)};return p&&p.push(N),N}function Iw(t,e,n){const s=this.proxy,i=je(t)?t.includes(".")?Bg(s,t):()=>s[t]:t.bind(s,s);let r;J(e)?r=e:(r=e.handler,n=e);const o=Ue;ei(this);const a=Cu(i,r.bind(s),n);return o?ei(o):ps(),a}function Bg(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function as(t,e){if(!De(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Xe(t))as(t.value,e);else if(Q(t))for(let n=0;n<t.length;n++)as(t[n],e);else if(cg(t)||Hs(t))t.forEach(n=>{as(n,e)});else if(hg(t))for(const n in t)as(t[n],e);return t}function Cw(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return bu(()=>{t.isMounted=!0}),qg(()=>{t.isUnmounting=!0}),t}const Dt=[Function,Array],bw={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Dt,onEnter:Dt,onAfterEnter:Dt,onEnterCancelled:Dt,onBeforeLeave:Dt,onLeave:Dt,onAfterLeave:Dt,onLeaveCancelled:Dt,onBeforeAppear:Dt,onAppear:Dt,onAfterAppear:Dt,onAppearCancelled:Dt},setup(t,{slots:e}){const n=Ar(),s=Cw();let i;return()=>{const r=e.default&&Hg(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const _ of r)if(_.type!==Wt){o=_;break}}const a=ue(t),{mode:c}=a;if(s.isLeaving)return cc(o);const l=Ef(o);if(!l)return cc(o);const u=Jc(l,a,s,n);Zc(l,u);const h=n.subTree,f=h&&Ef(h);let p=!1;const{getTransitionKey:m}=l.type;if(m){const _=m();i===void 0?i=_:_!==i&&(i=_,p=!0)}if(f&&f.type!==Wt&&(!rs(l,f)||p)){const _=Jc(f,a,s,n);if(Zc(f,_),c==="out-in")return s.isLeaving=!0,_.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},cc(o);c==="in-out"&&l.type!==Wt&&(_.delayLeave=(v,C,N)=>{const T=$g(s,f);T[String(f.key)]=f,v._leaveCb=()=>{C(),v._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=N})}return o}}},Sw=bw;function $g(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Jc(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:_,onAppear:v,onAfterAppear:C,onAppearCancelled:N}=e,T=String(t.key),O=$g(n,t),W=(B,Te)=>{B&&xt(B,s,9,Te)},ee=(B,Te)=>{const me=Te[1];W(B,Te),Q(B)?B.every(tt=>tt.length<=1)&&me():B.length<=1&&me()},de={mode:r,persisted:o,beforeEnter(B){let Te=a;if(!n.isMounted)if(i)Te=_||a;else return;B._leaveCb&&B._leaveCb(!0);const me=O[T];me&&rs(t,me)&&me.el._leaveCb&&me.el._leaveCb(),W(Te,[B])},enter(B){let Te=c,me=l,tt=u;if(!n.isMounted)if(i)Te=v||c,me=C||l,tt=N||u;else return;let nt=!1;const Lt=B._enterCb=pn=>{nt||(nt=!0,pn?W(tt,[B]):W(me,[B]),de.delayedLeave&&de.delayedLeave(),B._enterCb=void 0)};Te?ee(Te,[B,Lt]):Lt()},leave(B,Te){const me=String(t.key);if(B._enterCb&&B._enterCb(!0),n.isUnmounting)return Te();W(h,[B]);let tt=!1;const nt=B._leaveCb=Lt=>{tt||(tt=!0,Te(),Lt?W(m,[B]):W(p,[B]),B._leaveCb=void 0,O[me]===t&&delete O[me])};O[me]=t,f?ee(f,[B,nt]):nt()},clone(B){return Jc(B,e,n,s)}};return de}function cc(t){if(va(t))return t=Kn(t),t.children=null,t}function Ef(t){return va(t)?t.children?t.children[0]:void 0:t}function Zc(t,e){t.shapeFlag&6&&t.component?Zc(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Hg(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===gt?(o.patchFlag&128&&i++,s=s.concat(Hg(o.children,e,a))):(e||o.type!==Wt)&&s.push(a!=null?Kn(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function jg(t){return J(t)?{setup:t,name:t.name}:t}const vo=t=>!!t.type.__asyncLoader,va=t=>t.type.__isKeepAlive;function Aw(t,e){Kg(t,"a",e)}function Rw(t,e){Kg(t,"da",e)}function Kg(t,e,n=Ue){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ea(e,s,n),n){let i=n.parent;for(;i&&i.parent;)va(i.parent.vnode)&&Nw(s,e,n,i),i=i.parent}}function Nw(t,e,n,s){const i=Ea(e,t,s,!0);Su(()=>{hu(s[e],i)},n)}function Ea(t,e,n=Ue,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;pi(),ei(n);const a=xt(e,n,t,o);return ps(),gi(),a});return s?i.unshift(r):i.push(r),r}}const Cn=t=>(e,n=Ue)=>(!ar||t==="sp")&&Ea(t,(...s)=>e(...s),n),kw=Cn("bm"),bu=Cn("m"),Dw=Cn("bu"),Ow=Cn("u"),qg=Cn("bum"),Su=Cn("um"),Wg=Cn("sp"),Pw=Cn("rtg"),xw=Cn("rtc");function Mw(t,e=Ue){Ea("ec",t,e)}function zg(t,e){const n=Ot;if(n===null)return t;const s=Ia(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,c,l=Se]=e[r];o&&(J(o)&&(o={mounted:o,updated:o}),o.deep&&as(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Zn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let c=a.dir[s];c&&(pi(),xt(c,n,8,[t.el,a,t,e]),gi())}}const Lw=Symbol();function Fw(t,e,n,s){let i;const r=n&&n[s];if(Q(t)||je(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(De(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];i[a]=e(t[l],l,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const el=t=>t?im(t)?Ia(t)||t.proxy:el(t.parent):null,Hi=ft(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>el(t.parent),$root:t=>el(t.root),$emit:t=>t.emit,$options:t=>Au(t),$forceUpdate:t=>t.f||(t.f=()=>Iu(t.update)),$nextTick:t=>t.n||(t.n=xg.bind(t.proxy)),$watch:t=>Iw.bind(t)}),lc=(t,e)=>t!==Se&&!t.__isScriptSetup&&ae(t,e),Uw={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(lc(s,e))return o[e]=1,s[e];if(i!==Se&&ae(i,e))return o[e]=2,i[e];if((l=t.propsOptions[0])&&ae(l,e))return o[e]=3,r[e];if(n!==Se&&ae(n,e))return o[e]=4,n[e];tl&&(o[e]=0)}}const u=Hi[e];let h,f;if(u)return e==="$attrs"&&Tt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Se&&ae(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,ae(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return lc(i,e)?(i[e]=n,!0):s!==Se&&ae(s,e)?(s[e]=n,!0):ae(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Se&&ae(t,o)||lc(e,o)||(a=r[0])&&ae(a,o)||ae(s,o)||ae(Hi,o)||ae(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ae(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let tl=!0;function Vw(t){const e=Au(t),n=t.proxy,s=t.ctx;tl=!1,e.beforeCreate&&wf(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:m,activated:_,deactivated:v,beforeDestroy:C,beforeUnmount:N,destroyed:T,unmounted:O,render:W,renderTracked:ee,renderTriggered:de,errorCaptured:B,serverPrefetch:Te,expose:me,inheritAttrs:tt,components:nt,directives:Lt,filters:pn}=e;if(l&&Bw(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const Ie in o){const ve=o[Ie];J(ve)&&(s[Ie]=ve.bind(n))}if(i){const Ie=i.call(n,n);De(Ie)&&(t.data=br(Ie))}if(tl=!0,r)for(const Ie in r){const ve=r[Ie],Ft=J(ve)?ve.bind(n,n):J(ve.get)?ve.get.bind(n,n):qt,Jn=!J(ve)&&J(ve.set)?ve.set.bind(n):qt,Ut=Ve({get:Ft,set:Jn});Object.defineProperty(s,Ie,{enumerable:!0,configurable:!0,get:()=>Ut.value,set:yt=>Ut.value=yt})}if(a)for(const Ie in a)Gg(a[Ie],s,n,Ie);if(c){const Ie=J(c)?c.call(n):c;Reflect.ownKeys(Ie).forEach(ve=>{yo(ve,Ie[ve])})}u&&wf(u,t,"c");function xe(Ie,ve){Q(ve)?ve.forEach(Ft=>Ie(Ft.bind(n))):ve&&Ie(ve.bind(n))}if(xe(kw,h),xe(bu,f),xe(Dw,p),xe(Ow,m),xe(Aw,_),xe(Rw,v),xe(Mw,B),xe(xw,ee),xe(Pw,de),xe(qg,N),xe(Su,O),xe(Wg,Te),Q(me))if(me.length){const Ie=t.exposed||(t.exposed={});me.forEach(ve=>{Object.defineProperty(Ie,ve,{get:()=>n[ve],set:Ft=>n[ve]=Ft})})}else t.exposed||(t.exposed={});W&&t.render===qt&&(t.render=W),tt!=null&&(t.inheritAttrs=tt),nt&&(t.components=nt),Lt&&(t.directives=Lt)}function Bw(t,e,n=qt,s=!1){Q(t)&&(t=nl(t));for(const i in t){const r=t[i];let o;De(r)?"default"in r?o=At(r.from||i,r.default,!0):o=At(r.from||i):o=At(r),Xe(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function wf(t,e,n){xt(Q(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Gg(t,e,n,s){const i=s.includes(".")?Bg(n,s):()=>n[s];if(je(t)){const r=e[t];J(r)&&$i(i,r)}else if(J(t))$i(i,t.bind(n));else if(De(t))if(Q(t))t.forEach(r=>Gg(r,e,n,s));else{const r=J(t.handler)?t.handler.bind(n):e[t.handler];J(r)&&$i(i,r,t)}}function Au(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let c;return a?c=a:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(l=>ko(c,l,o,!0)),ko(c,e,o)),De(e)&&r.set(e,c),c}function ko(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&ko(t,r,n,!0),i&&i.forEach(o=>ko(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=$w[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const $w={data:Tf,props:ts,emits:ts,methods:ts,computed:ts,beforeCreate:pt,created:pt,beforeMount:pt,mounted:pt,beforeUpdate:pt,updated:pt,beforeDestroy:pt,beforeUnmount:pt,destroyed:pt,unmounted:pt,activated:pt,deactivated:pt,errorCaptured:pt,serverPrefetch:pt,components:ts,directives:ts,watch:jw,provide:Tf,inject:Hw};function Tf(t,e){return e?t?function(){return ft(J(t)?t.call(this,this):t,J(e)?e.call(this,this):e)}:e:t}function Hw(t,e){return ts(nl(t),nl(e))}function nl(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function pt(t,e){return t?[...new Set([].concat(t,e))]:e}function ts(t,e){return t?ft(ft(Object.create(null),t),e):e}function jw(t,e){if(!t)return e;if(!e)return t;const n=ft(Object.create(null),t);for(const s in e)n[s]=pt(t[s],e[s]);return n}function Kw(t,e,n,s=!1){const i={},r={};Ao(r,Ta,1),t.propsDefaults=Object.create(null),Qg(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:iw(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function qw(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ue(i),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(ya(t.emitsOptions,f))continue;const p=e[f];if(c)if(ae(r,f))p!==r[f]&&(r[f]=p,l=!0);else{const m=Js(f);i[m]=sl(c,a,m,p,t,!1)}else p!==r[f]&&(r[f]=p,l=!0)}}}else{Qg(t,e,i,r)&&(l=!0);let u;for(const h in a)(!e||!ae(e,h)&&((u=di(h))===h||!ae(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=sl(c,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!ae(e,h))&&(delete r[h],l=!0)}l&&En(t,"set","$attrs")}function Qg(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(mo(c))continue;const l=e[c];let u;i&&ae(i,u=Js(c))?!r||!r.includes(u)?n[u]=l:(a||(a={}))[u]=l:ya(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(r){const c=ue(n),l=a||Se;for(let u=0;u<r.length;u++){const h=r[u];n[h]=sl(i,c,h,l[h],t,!ae(l,h))}}return o}function sl(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=ae(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&J(c)){const{propsDefaults:l}=i;n in l?s=l[n]:(ei(i),s=l[n]=c.call(null,e),ps())}else s=c}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===di(n))&&(s=!0))}return s}function Yg(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let c=!1;if(!J(t)){const u=h=>{c=!0;const[f,p]=Yg(h,e,!0);ft(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return De(t)&&s.set(t,$s),$s;if(Q(r))for(let u=0;u<r.length;u++){const h=Js(r[u]);If(h)&&(o[h]=Se)}else if(r)for(const u in r){const h=Js(u);if(If(h)){const f=r[u],p=o[h]=Q(f)||J(f)?{type:f}:Object.assign({},f);if(p){const m=Sf(Boolean,p.type),_=Sf(String,p.type);p[0]=m>-1,p[1]=_<0||m<_,(m>-1||ae(p,"default"))&&a.push(h)}}}const l=[o,a];return De(t)&&s.set(t,l),l}function If(t){return t[0]!=="$"}function Cf(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function bf(t,e){return Cf(t)===Cf(e)}function Sf(t,e){return Q(e)?e.findIndex(n=>bf(n,t)):J(e)&&bf(e,t)?0:-1}const Xg=t=>t[0]==="_"||t==="$stable",Ru=t=>Q(t)?t.map(Zt):[Zt(t)],Ww=(t,e,n)=>{if(e._n)return e;const s=gw((...i)=>Ru(e(...i)),n);return s._c=!1,s},Jg=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Xg(i))continue;const r=t[i];if(J(r))e[i]=Ww(i,r,s);else if(r!=null){const o=Ru(r);e[i]=()=>o}}},Zg=(t,e)=>{const n=Ru(e);t.slots.default=()=>n},zw=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ue(e),Ao(e,"_",n)):Jg(e,t.slots={})}else t.slots={},e&&Zg(t,e);Ao(t.slots,Ta,1)},Gw=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Se;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(ft(i,e),!n&&a===1&&delete i._):(r=!e.$stable,Jg(e,i)),o=e}else e&&(Zg(t,e),o={default:1});if(r)for(const a in i)!Xg(a)&&!(a in o)&&delete i[a]};function em(){return{app:null,config:{isNativeTag:TE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Qw=0;function Yw(t,e){return function(s,i=null){J(s)||(s=Object.assign({},s)),i!=null&&!De(i)&&(i=null);const r=em(),o=new Set;let a=!1;const c=r.app={_uid:Qw++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:pT,get config(){return r.config},set config(l){},use(l,...u){return o.has(l)||(l&&J(l.install)?(o.add(l),l.install(c,...u)):J(l)&&(o.add(l),l(c,...u))),c},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),c},component(l,u){return u?(r.components[l]=u,c):r.components[l]},directive(l,u){return u?(r.directives[l]=u,c):r.directives[l]},mount(l,u,h){if(!a){const f=St(s,i);return f.appContext=r,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,Ia(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return r.provides[l]=u,c}};return c}}function il(t,e,n,s,i=!1){if(Q(t)){t.forEach((f,p)=>il(f,e&&(Q(e)?e[p]:e),n,s,i));return}if(vo(s)&&!i)return;const r=s.shapeFlag&4?Ia(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Se?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(je(l)?(u[l]=null,ae(h,l)&&(h[l]=null)):Xe(l)&&(l.value=null)),J(c))Ln(c,a,12,[o,u]);else{const f=je(c),p=Xe(c);if(f||p){const m=()=>{if(t.f){const _=f?ae(h,c)?h[c]:u[c]:c.value;i?Q(_)&&hu(_,r):Q(_)?_.includes(r)||_.push(r):f?(u[c]=[r],ae(h,c)&&(h[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,ae(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,vt(m,n)):m()}}}const vt=ww;function Xw(t){return Jw(t)}function Jw(t,e){const n=RE();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=qt,insertStaticContent:m}=t,_=(d,g,y,E=null,I=null,R=null,M=!1,A=null,k=!!g.dynamicChildren)=>{if(d===g)return;d&&!rs(d,g)&&(E=x(d),yt(d,I,R,!0),d=null),g.patchFlag===-2&&(k=!1,g.dynamicChildren=null);const{type:b,ref:H,shapeFlag:F}=g;switch(b){case wa:v(d,g,y,E);break;case Wt:C(d,g,y,E);break;case Eo:d==null&&N(g,y,E,M);break;case gt:nt(d,g,y,E,I,R,M,A,k);break;default:F&1?W(d,g,y,E,I,R,M,A,k):F&6?Lt(d,g,y,E,I,R,M,A,k):(F&64||F&128)&&b.process(d,g,y,E,I,R,M,A,k,oe)}H!=null&&I&&il(H,d&&d.ref,R,g||d,!g)},v=(d,g,y,E)=>{if(d==null)s(g.el=a(g.children),y,E);else{const I=g.el=d.el;g.children!==d.children&&l(I,g.children)}},C=(d,g,y,E)=>{d==null?s(g.el=c(g.children||""),y,E):g.el=d.el},N=(d,g,y,E)=>{[d.el,d.anchor]=m(d.children,g,y,E,d.el,d.anchor)},T=({el:d,anchor:g},y,E)=>{let I;for(;d&&d!==g;)I=f(d),s(d,y,E),d=I;s(g,y,E)},O=({el:d,anchor:g})=>{let y;for(;d&&d!==g;)y=f(d),i(d),d=y;i(g)},W=(d,g,y,E,I,R,M,A,k)=>{M=M||g.type==="svg",d==null?ee(g,y,E,I,R,M,A,k):Te(d,g,I,R,M,A,k)},ee=(d,g,y,E,I,R,M,A)=>{let k,b;const{type:H,props:F,shapeFlag:j,transition:G,dirs:te}=d;if(k=d.el=o(d.type,R,F&&F.is,F),j&8?u(k,d.children):j&16&&B(d.children,k,null,E,I,R&&H!=="foreignObject",M,A),te&&Zn(d,null,E,"created"),de(k,d,d.scopeId,M,E),F){for(const Ee in F)Ee!=="value"&&!mo(Ee)&&r(k,Ee,null,F[Ee],R,d.children,E,I,L);"value"in F&&r(k,"value",null,F.value),(b=F.onVnodeBeforeMount)&&Jt(b,E,d)}te&&Zn(d,null,E,"beforeMount");const Ce=(!I||I&&!I.pendingBranch)&&G&&!G.persisted;Ce&&G.beforeEnter(k),s(k,g,y),((b=F&&F.onVnodeMounted)||Ce||te)&&vt(()=>{b&&Jt(b,E,d),Ce&&G.enter(k),te&&Zn(d,null,E,"mounted")},I)},de=(d,g,y,E,I)=>{if(y&&p(d,y),E)for(let R=0;R<E.length;R++)p(d,E[R]);if(I){let R=I.subTree;if(g===R){const M=I.vnode;de(d,M,M.scopeId,M.slotScopeIds,I.parent)}}},B=(d,g,y,E,I,R,M,A,k=0)=>{for(let b=k;b<d.length;b++){const H=d[b]=A?kn(d[b]):Zt(d[b]);_(null,H,g,y,E,I,R,M,A)}},Te=(d,g,y,E,I,R,M)=>{const A=g.el=d.el;let{patchFlag:k,dynamicChildren:b,dirs:H}=g;k|=d.patchFlag&16;const F=d.props||Se,j=g.props||Se;let G;y&&es(y,!1),(G=j.onVnodeBeforeUpdate)&&Jt(G,y,g,d),H&&Zn(g,d,y,"beforeUpdate"),y&&es(y,!0);const te=I&&g.type!=="foreignObject";if(b?me(d.dynamicChildren,b,A,y,E,te,R):M||ve(d,g,A,null,y,E,te,R,!1),k>0){if(k&16)tt(A,g,F,j,y,E,I);else if(k&2&&F.class!==j.class&&r(A,"class",null,j.class,I),k&4&&r(A,"style",F.style,j.style,I),k&8){const Ce=g.dynamicProps;for(let Ee=0;Ee<Ce.length;Ee++){const Me=Ce[Ee],Vt=F[Me],Ds=j[Me];(Ds!==Vt||Me==="value")&&r(A,Me,Vt,Ds,I,d.children,y,E,L)}}k&1&&d.children!==g.children&&u(A,g.children)}else!M&&b==null&&tt(A,g,F,j,y,E,I);((G=j.onVnodeUpdated)||H)&&vt(()=>{G&&Jt(G,y,g,d),H&&Zn(g,d,y,"updated")},E)},me=(d,g,y,E,I,R,M)=>{for(let A=0;A<g.length;A++){const k=d[A],b=g[A],H=k.el&&(k.type===gt||!rs(k,b)||k.shapeFlag&70)?h(k.el):y;_(k,b,H,null,E,I,R,M,!0)}},tt=(d,g,y,E,I,R,M)=>{if(y!==E){if(y!==Se)for(const A in y)!mo(A)&&!(A in E)&&r(d,A,y[A],null,M,g.children,I,R,L);for(const A in E){if(mo(A))continue;const k=E[A],b=y[A];k!==b&&A!=="value"&&r(d,A,b,k,M,g.children,I,R,L)}"value"in E&&r(d,"value",y.value,E.value)}},nt=(d,g,y,E,I,R,M,A,k)=>{const b=g.el=d?d.el:a(""),H=g.anchor=d?d.anchor:a("");let{patchFlag:F,dynamicChildren:j,slotScopeIds:G}=g;G&&(A=A?A.concat(G):G),d==null?(s(b,y,E),s(H,y,E),B(g.children,y,H,I,R,M,A,k)):F>0&&F&64&&j&&d.dynamicChildren?(me(d.dynamicChildren,j,y,I,R,M,A),(g.key!=null||I&&g===I.subTree)&&tm(d,g,!0)):ve(d,g,y,H,I,R,M,A,k)},Lt=(d,g,y,E,I,R,M,A,k)=>{g.slotScopeIds=A,d==null?g.shapeFlag&512?I.ctx.activate(g,y,E,M,k):pn(g,y,E,I,R,M,k):Ai(d,g,k)},pn=(d,g,y,E,I,R,M)=>{const A=d.component=aT(d,E,I);if(va(d)&&(A.ctx.renderer=oe),cT(A),A.asyncDep){if(I&&I.registerDep(A,xe),!d.el){const k=A.subTree=St(Wt);C(null,k,g,y)}return}xe(A,d,g,y,I,R,M)},Ai=(d,g,y)=>{const E=g.component=d.component;if(yw(d,g,y))if(E.asyncDep&&!E.asyncResolved){Ie(E,g,y);return}else E.next=g,hw(E.update),E.update();else g.el=d.el,E.vnode=g},xe=(d,g,y,E,I,R,M)=>{const A=()=>{if(d.isMounted){let{next:H,bu:F,u:j,parent:G,vnode:te}=d,Ce=H,Ee;es(d,!1),H?(H.el=te.el,Ie(d,H,M)):H=te,F&&_o(F),(Ee=H.props&&H.props.onVnodeBeforeUpdate)&&Jt(Ee,G,H,te),es(d,!0);const Me=ac(d),Vt=d.subTree;d.subTree=Me,_(Vt,Me,h(Vt.el),x(Vt),d,I,R),H.el=Me.el,Ce===null&&vw(d,Me.el),j&&vt(j,I),(Ee=H.props&&H.props.onVnodeUpdated)&&vt(()=>Jt(Ee,G,H,te),I)}else{let H;const{el:F,props:j}=g,{bm:G,m:te,parent:Ce}=d,Ee=vo(g);if(es(d,!1),G&&_o(G),!Ee&&(H=j&&j.onVnodeBeforeMount)&&Jt(H,Ce,g),es(d,!0),F&&Z){const Me=()=>{d.subTree=ac(d),Z(F,d.subTree,d,I,null)};Ee?g.type.__asyncLoader().then(()=>!d.isUnmounted&&Me()):Me()}else{const Me=d.subTree=ac(d);_(null,Me,y,E,d,I,R),g.el=Me.el}if(te&&vt(te,I),!Ee&&(H=j&&j.onVnodeMounted)){const Me=g;vt(()=>Jt(H,Ce,Me),I)}(g.shapeFlag&256||Ce&&vo(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&d.a&&vt(d.a,I),d.isMounted=!0,g=y=E=null}},k=d.effect=new gu(A,()=>Iu(b),d.scope),b=d.update=()=>k.run();b.id=d.uid,es(d,!0),b()},Ie=(d,g,y)=>{g.component=d;const E=d.vnode.props;d.vnode=g,d.next=null,qw(d,g.props,E,y),Gw(d,g.children,y),pi(),yf(),gi()},ve=(d,g,y,E,I,R,M,A,k=!1)=>{const b=d&&d.children,H=d?d.shapeFlag:0,F=g.children,{patchFlag:j,shapeFlag:G}=g;if(j>0){if(j&128){Jn(b,F,y,E,I,R,M,A,k);return}else if(j&256){Ft(b,F,y,E,I,R,M,A,k);return}}G&8?(H&16&&L(b,I,R),F!==b&&u(y,F)):H&16?G&16?Jn(b,F,y,E,I,R,M,A,k):L(b,I,R,!0):(H&8&&u(y,""),G&16&&B(F,y,E,I,R,M,A,k))},Ft=(d,g,y,E,I,R,M,A,k)=>{d=d||$s,g=g||$s;const b=d.length,H=g.length,F=Math.min(b,H);let j;for(j=0;j<F;j++){const G=g[j]=k?kn(g[j]):Zt(g[j]);_(d[j],G,y,null,I,R,M,A,k)}b>H?L(d,I,R,!0,!1,F):B(g,y,E,I,R,M,A,k,F)},Jn=(d,g,y,E,I,R,M,A,k)=>{let b=0;const H=g.length;let F=d.length-1,j=H-1;for(;b<=F&&b<=j;){const G=d[b],te=g[b]=k?kn(g[b]):Zt(g[b]);if(rs(G,te))_(G,te,y,null,I,R,M,A,k);else break;b++}for(;b<=F&&b<=j;){const G=d[F],te=g[j]=k?kn(g[j]):Zt(g[j]);if(rs(G,te))_(G,te,y,null,I,R,M,A,k);else break;F--,j--}if(b>F){if(b<=j){const G=j+1,te=G<H?g[G].el:E;for(;b<=j;)_(null,g[b]=k?kn(g[b]):Zt(g[b]),y,te,I,R,M,A,k),b++}}else if(b>j)for(;b<=F;)yt(d[b],I,R,!0),b++;else{const G=b,te=b,Ce=new Map;for(b=te;b<=j;b++){const It=g[b]=k?kn(g[b]):Zt(g[b]);It.key!=null&&Ce.set(It.key,b)}let Ee,Me=0;const Vt=j-te+1;let Ds=!1,of=0;const Ri=new Array(Vt);for(b=0;b<Vt;b++)Ri[b]=0;for(b=G;b<=F;b++){const It=d[b];if(Me>=Vt){yt(It,I,R,!0);continue}let Xt;if(It.key!=null)Xt=Ce.get(It.key);else for(Ee=te;Ee<=j;Ee++)if(Ri[Ee-te]===0&&rs(It,g[Ee])){Xt=Ee;break}Xt===void 0?yt(It,I,R,!0):(Ri[Xt-te]=b+1,Xt>=of?of=Xt:Ds=!0,_(It,g[Xt],y,null,I,R,M,A,k),Me++)}const af=Ds?Zw(Ri):$s;for(Ee=af.length-1,b=Vt-1;b>=0;b--){const It=te+b,Xt=g[It],cf=It+1<H?g[It+1].el:E;Ri[b]===0?_(null,Xt,y,cf,I,R,M,A,k):Ds&&(Ee<0||b!==af[Ee]?Ut(Xt,y,cf,2):Ee--)}}},Ut=(d,g,y,E,I=null)=>{const{el:R,type:M,transition:A,children:k,shapeFlag:b}=d;if(b&6){Ut(d.component.subTree,g,y,E);return}if(b&128){d.suspense.move(g,y,E);return}if(b&64){M.move(d,g,y,oe);return}if(M===gt){s(R,g,y);for(let F=0;F<k.length;F++)Ut(k[F],g,y,E);s(d.anchor,g,y);return}if(M===Eo){T(d,g,y);return}if(E!==2&&b&1&&A)if(E===0)A.beforeEnter(R),s(R,g,y),vt(()=>A.enter(R),I);else{const{leave:F,delayLeave:j,afterLeave:G}=A,te=()=>s(R,g,y),Ce=()=>{F(R,()=>{te(),G&&G()})};j?j(R,te,Ce):Ce()}else s(R,g,y)},yt=(d,g,y,E=!1,I=!1)=>{const{type:R,props:M,ref:A,children:k,dynamicChildren:b,shapeFlag:H,patchFlag:F,dirs:j}=d;if(A!=null&&il(A,null,y,d,!0),H&256){g.ctx.deactivate(d);return}const G=H&1&&j,te=!vo(d);let Ce;if(te&&(Ce=M&&M.onVnodeBeforeUnmount)&&Jt(Ce,g,d),H&6)w(d.component,y,E);else{if(H&128){d.suspense.unmount(y,E);return}G&&Zn(d,null,g,"beforeUnmount"),H&64?d.type.remove(d,g,y,I,oe,E):b&&(R!==gt||F>0&&F&64)?L(b,g,y,!1,!0):(R===gt&&F&384||!I&&H&16)&&L(k,g,y),E&&ks(d)}(te&&(Ce=M&&M.onVnodeUnmounted)||G)&&vt(()=>{Ce&&Jt(Ce,g,d),G&&Zn(d,null,g,"unmounted")},y)},ks=d=>{const{type:g,el:y,anchor:E,transition:I}=d;if(g===gt){Qr(y,E);return}if(g===Eo){O(d);return}const R=()=>{i(y),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(d.shapeFlag&1&&I&&!I.persisted){const{leave:M,delayLeave:A}=I,k=()=>M(y,R);A?A(d.el,R,k):k()}else R()},Qr=(d,g)=>{let y;for(;d!==g;)y=f(d),i(d),d=y;i(g)},w=(d,g,y)=>{const{bum:E,scope:I,update:R,subTree:M,um:A}=d;E&&_o(E),I.stop(),R&&(R.active=!1,yt(M,d,g,y)),A&&vt(A,g),vt(()=>{d.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},L=(d,g,y,E=!1,I=!1,R=0)=>{for(let M=R;M<d.length;M++)yt(d[M],g,y,E,I)},x=d=>d.shapeFlag&6?x(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),$=(d,g,y)=>{d==null?g._vnode&&yt(g._vnode,null,null,!0):_(g._vnode||null,d,g,null,null,null,y),yf(),Lg(),g._vnode=d},oe={p:_,um:yt,m:Ut,r:ks,mt:pn,mc:B,pc:ve,pbc:me,n:x,o:t};let Oe,Z;return e&&([Oe,Z]=e(oe)),{render:$,hydrate:Oe,createApp:Yw($,Oe)}}function es({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function tm(t,e,n=!1){const s=t.children,i=e.children;if(Q(s)&&Q(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=kn(i[r]),a.el=o.el),n||tm(o,a)),a.type===wa&&(a.el=o.el)}}function Zw(t){const e=t.slice(),n=[0];let s,i,r,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(i=n[n.length-1],t[i]<l){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<l?r=a+1:o=a;l<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const eT=t=>t.__isTeleport,gt=Symbol(void 0),wa=Symbol(void 0),Wt=Symbol(void 0),Eo=Symbol(void 0),ji=[];let Ht=null;function bt(t=!1){ji.push(Ht=t?null:[])}function tT(){ji.pop(),Ht=ji[ji.length-1]||null}let or=1;function Af(t){or+=t}function nm(t){return t.dynamicChildren=or>0?Ht||$s:null,tT(),or>0&&Ht&&Ht.push(t),t}function On(t,e,n,s,i,r){return nm(on(t,e,n,s,i,r,!0))}function Sr(t,e,n,s,i){return nm(St(t,e,n,s,i,!0))}function rl(t){return t?t.__v_isVNode===!0:!1}function rs(t,e){return t.type===e.type&&t.key===e.key}const Ta="__vInternal",sm=({key:t})=>t??null,wo=({ref:t,ref_key:e,ref_for:n})=>t!=null?je(t)||Xe(t)||J(t)?{i:Ot,r:t,k:e,f:!!n}:t:null;function on(t,e=null,n=null,s=0,i=null,r=t===gt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&sm(e),ref:e&&wo(e),scopeId:Vg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ot};return a?(Nu(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=je(n)?8:16),or>0&&!o&&Ht&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Ht.push(c),c}const St=nT;function nT(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Lw)&&(t=Wt),rl(t)){const a=Kn(t,e,!0);return n&&Nu(a,n),or>0&&!r&&Ht&&(a.shapeFlag&6?Ht[Ht.indexOf(t)]=a:Ht.push(a)),a.patchFlag|=-2,a}if(fT(t)&&(t=t.__vccOpts),e){e=sT(e);let{class:a,style:c}=e;a&&!je(a)&&(e.class=fa(a)),De(c)&&(Sg(c)&&!Q(c)&&(c=ft({},c)),e.style=lu(c))}const o=je(t)?1:Ew(t)?128:eT(t)?64:De(t)?4:J(t)?2:0;return on(t,e,n,s,i,o,r,!0)}function sT(t){return t?Sg(t)||Ta in t?ft({},t):t:null}function Kn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?iT(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&sm(a),ref:e&&e.ref?n&&i?Q(i)?i.concat(wo(e)):[i,wo(e)]:wo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==gt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Kn(t.ssContent),ssFallback:t.ssFallback&&Kn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Do(t=" ",e=0){return St(wa,null,t,e)}function To(t="",e=!1){return e?(bt(),Sr(Wt,null,t)):St(Wt,null,t)}function Zt(t){return t==null||typeof t=="boolean"?St(Wt):Q(t)?St(gt,null,t.slice()):typeof t=="object"?kn(t):St(wa,null,String(t))}function kn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Kn(t)}function Nu(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(Q(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Nu(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Ta in e)?e._ctx=Ot:i===3&&Ot&&(Ot.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else J(e)?(e={default:e,_ctx:Ot},n=32):(e=String(e),s&64?(n=16,e=[Do(e)]):n=8);t.children=e,t.shapeFlag|=n}function iT(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=fa([e.class,s.class]));else if(i==="style")e.style=lu([e.style,s.style]);else if(da(i)){const r=e[i],o=s[i];o&&r!==o&&!(Q(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Jt(t,e,n,s=null){xt(t,e,7,[n,s])}const rT=em();let oT=0;function aT(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||rT,r={uid:oT++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new dg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yg(s,i),emitsOptions:Ug(s,i),emit:null,emitted:null,propsDefaults:Se,inheritAttrs:s.inheritAttrs,ctx:Se,data:Se,props:Se,attrs:Se,slots:Se,refs:Se,setupState:Se,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=pw.bind(null,r),t.ce&&t.ce(r),r}let Ue=null;const Ar=()=>Ue||Ot,ei=t=>{Ue=t,t.scope.on()},ps=()=>{Ue&&Ue.scope.off(),Ue=null};function im(t){return t.vnode.shapeFlag&4}let ar=!1;function cT(t,e=!1){ar=e;const{props:n,children:s}=t.vnode,i=im(t);Kw(t,n,i,e),zw(t,s);const r=i?lT(t,e):void 0;return ar=!1,r}function lT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Eu(new Proxy(t.ctx,Uw));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?hT(t):null;ei(t),pi();const r=Ln(s,t,0,[t.props,i]);if(gi(),ps(),lg(r)){if(r.then(ps,ps),e)return r.then(o=>{Rf(t,o,e)}).catch(o=>{_a(o,t,0)});t.asyncDep=r}else Rf(t,r,e)}else rm(t,e)}function Rf(t,e,n){J(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:De(e)&&(t.setupState=Dg(e)),rm(t,n)}let Nf;function rm(t,e,n){const s=t.type;if(!t.render){if(!e&&Nf&&!s.render){const i=s.template||Au(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=ft(ft({isCustomElement:r,delimiters:a},o),c);s.render=Nf(i,l)}}t.render=s.render||qt}ei(t),pi(),Vw(t),gi(),ps()}function uT(t){return new Proxy(t.attrs,{get(e,n){return Tt(t,"get","$attrs"),e[n]}})}function hT(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=uT(t))},slots:t.slots,emit:t.emit,expose:e}}function Ia(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Dg(Eu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Hi)return Hi[n](t)},has(e,n){return n in e||n in Hi}}))}function fT(t){return J(t)&&"__vccOpts"in t}const Ve=(t,e)=>cw(t,e,ar);function om(t,e,n){const s=arguments.length;return s===2?De(e)&&!Q(e)?rl(e)?St(t,null,[e]):St(t,e):St(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&rl(n)&&(n=[n]),St(t,e,n))}const am=Symbol(""),dT=()=>At(am),pT="3.2.47",gT="http://www.w3.org/2000/svg",os=typeof document<"u"?document:null,kf=os&&os.createElement("template"),mT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?os.createElementNS(gT,t):os.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>os.createTextNode(t),createComment:t=>os.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>os.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{kf.innerHTML=s?`<svg>${t}</svg>`:t;const a=kf.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function _T(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function yT(t,e,n){const s=t.style,i=je(n);if(n&&!i){if(e&&!je(e))for(const r in e)n[r]==null&&ol(s,r,"");for(const r in n)ol(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Df=/\s*!important$/;function ol(t,e,n){if(Q(n))n.forEach(s=>ol(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=vT(t,e);Df.test(n)?t.setProperty(di(s),n.replace(Df,""),"important"):t[s]=n}}const Of=["Webkit","Moz","ms"],uc={};function vT(t,e){const n=uc[e];if(n)return n;let s=Js(e);if(s!=="filter"&&s in t)return uc[e]=s;s=fg(s);for(let i=0;i<Of.length;i++){const r=Of[i]+s;if(r in t)return uc[e]=r}return e}const Pf="http://www.w3.org/1999/xlink";function ET(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Pf,e.slice(6,e.length)):t.setAttributeNS(Pf,e,n);else{const r=wE(e);n==null||r&&!og(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function wT(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=og(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function xs(t,e,n,s){t.addEventListener(e,n,s)}function TT(t,e,n,s){t.removeEventListener(e,n,s)}function IT(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,c]=CT(e);if(s){const l=r[e]=AT(s,i);xs(t,a,l,c)}else o&&(TT(t,a,o,c),r[e]=void 0)}}const xf=/(?:Once|Passive|Capture)$/;function CT(t){let e;if(xf.test(t)){e={};let s;for(;s=t.match(xf);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):di(t.slice(2)),e]}let hc=0;const bT=Promise.resolve(),ST=()=>hc||(bT.then(()=>hc=0),hc=Date.now());function AT(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;xt(RT(s,n.value),e,5,[s])};return n.value=t,n.attached=ST(),n}function RT(t,e){if(Q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Mf=/^on[a-z]/,NT=(t,e,n,s,i=!1,r,o,a,c)=>{e==="class"?_T(t,s,i):e==="style"?yT(t,n,s):da(e)?uu(e)||IT(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):kT(t,e,s,i))?wT(t,e,s,r,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),ET(t,e,s,i))};function kT(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Mf.test(e)&&J(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Mf.test(e)&&je(n)?!1:e in t}function DT(t){const e=Ar();if(!e)return;const n=e.ut=(i=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>cl(r,i))},s=()=>{const i=t(e.proxy);al(e.subTree,i),n(i)};Tw(s),bu(()=>{const i=new MutationObserver(s);i.observe(e.subTree.el.parentNode,{childList:!0}),Su(()=>i.disconnect())})}function al(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{al(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)cl(t.el,e);else if(t.type===gt)t.children.forEach(n=>al(n,e));else if(t.type===Eo){let{el:n,anchor:s}=t;for(;n&&(cl(n,e),n!==s);)n=n.nextSibling}}function cl(t,e){if(t.nodeType===1){const n=t.style;for(const s in e)n.setProperty(`--${s}`,e[s])}}const OT={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Sw.props;const Lf=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Q(e)?n=>_o(e,n):e};function PT(t){t.target.composing=!0}function Ff(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const cm={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=Lf(i);const r=s||i.props&&i.props.type==="number";xs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Wc(a)),t._assign(a)}),n&&xs(t,"change",()=>{t.value=t.value.trim()}),e||(xs(t,"compositionstart",PT),xs(t,"compositionend",Ff),xs(t,"change",Ff))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=Lf(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&Wc(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},xT=["ctrl","shift","alt","meta"],MT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>xT.some(n=>t[`${n}Key`]&&!e.includes(n))},lm=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=MT[e[i]];if(r&&r(n,e))return}return t(n,...s)},LT=ft({patchProp:NT},mT);let Uf;function FT(){return Uf||(Uf=Xw(LT))}const UT=(...t)=>{const e=FT().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=VT(s);if(!i)return;const r=e._component;!J(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function VT(t){return je(t)?document.querySelector(t):t}var BT=!1;/*!
  * pinia v2.0.35
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const $T=Symbol();var Vf;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Vf||(Vf={}));function HT(){const t=NE(!0),e=t.run(()=>Mn({}));let n=[],s=[];const i=Eu({install(r){i._a=r,r.provide($T,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!BT?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P=function(t,e){if(!t)throw mi(e)},mi=function(t){return new Error("Firebase Database ("+um.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},jT=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ca={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(f=64)),s.push(n[u],n[h],n[f],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(hm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):jT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||l==null||h==null)throw new KT;const f=r<<2|a>>4;if(s.push(f),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const m=l<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class KT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fm=function(t){const e=hm(t);return Ca.encodeByteArray(e,!0)},Oo=function(t){return fm(t).replace(/\./g,"")},Po=function(t){try{return Ca.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qT(t){return dm(void 0,t)}function dm(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!WT(n)||(t[n]=dm(t[n],e[n]));return t}function WT(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT=()=>zT().__FIREBASE_DEFAULTS__,QT=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},YT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Po(t[1]);return e&&JSON.parse(e)},ku=()=>{try{return GT()||QT()||YT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},XT=t=>{var e,n;return(n=(e=ku())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},JT=t=>{const e=XT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},ZT=()=>{var t;return(t=ku())===null||t===void 0?void 0:t.config},eI=t=>{var e;return(e=ku())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Oo(JSON.stringify(n)),Oo(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Du(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(an())}function nI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function pm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gm(){return um.NODE_ADMIN===!0}function mm(){try{return typeof indexedDB=="object"}catch{return!1}}function sI(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI="FirebaseError";class bn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=iI,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_i.prototype.create)}}class _i{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?rI(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new bn(i,a,s)}}function rI(t,e){return t.replace(oI,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const oI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(t){return JSON.parse(t)}function Ye(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=lr(Po(r[0])||""),n=lr(Po(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},aI=function(t){const e=_m(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},cI=function(t){const e=_m(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ti(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Bf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xo(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function ll(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if($f(r)&&$f(o)){if(!ll(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function $f(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let h=0;h<80;h++){h<40?h<20?(l=a^r&(o^a),u=1518500249):(l=r^o^a,u=1859775393):h<60?(l=r&o|a&(r|o),u=2400959708):(l=r^o^a,u=3395469782);const f=(i<<5|i>>>27)+l+c+u+s[h]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function uI(t,e){const n=new hI(t,e);return n.subscribe.bind(n)}class hI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");fI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=fc),i.error===void 0&&(i.error=fc),i.complete===void 0&&(i.complete=fc);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function fc(){}function dI(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,P(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ba=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(t){return t&&t._delegate?t._delegate:t}class Qt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new cr;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_I(e))try{this.getOrInitializeService({instanceIdentifier:ns})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=ns){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ns){return this.instances.has(e)}getOptions(e=ns){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:mI(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ns){return this.component?this.component.multipleInstances?e:ns:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mI(t){return t===ns?void 0:t}function _I(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new gI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const vI={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},EI=ce.INFO,wI={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},TI=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=wI[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rr{constructor(e){this.name=e,this._logLevel=EI,this._logHandler=TI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const II=(t,e)=>e.some(n=>t instanceof n);let Hf,jf;function CI(){return Hf||(Hf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bI(){return jf||(jf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ym=new WeakMap,ul=new WeakMap,vm=new WeakMap,dc=new WeakMap,Pu=new WeakMap;function SI(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Fn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ym.set(n,t)}).catch(()=>{}),Pu.set(e,t),e}function AI(t){if(ul.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});ul.set(t,e)}let hl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ul.get(t);if(e==="objectStoreNames")return t.objectStoreNames||vm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function RI(t){hl=t(hl)}function NI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(pc(this),e,...n);return vm.set(s,e.sort?e.sort():[e]),Fn(s)}:bI().includes(t)?function(...e){return t.apply(pc(this),e),Fn(ym.get(this))}:function(...e){return Fn(t.apply(pc(this),e))}}function kI(t){return typeof t=="function"?NI(t):(t instanceof IDBTransaction&&AI(t),II(t,CI())?new Proxy(t,hl):t)}function Fn(t){if(t instanceof IDBRequest)return SI(t);if(dc.has(t))return dc.get(t);const e=kI(t);return e!==t&&(dc.set(t,e),Pu.set(e,t)),e}const pc=t=>Pu.get(t);function DI(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Fn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Fn(o.result),c.oldVersion,c.newVersion,Fn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const OI=["get","getKey","getAll","getAllKeys","count"],PI=["put","add","delete","clear"],gc=new Map;function Kf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(gc.get(e))return gc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=PI.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||OI.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return gc.set(e,r),r}RI(t=>({...t,get:(e,n,s)=>Kf(e,n)||t.get(e,n,s),has:(e,n)=>!!Kf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(MI(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function MI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fl="@firebase/app",qf="0.9.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=new Rr("@firebase/app"),LI="@firebase/app-compat",FI="@firebase/analytics-compat",UI="@firebase/analytics",VI="@firebase/app-check-compat",BI="@firebase/app-check",$I="@firebase/auth",HI="@firebase/auth-compat",jI="@firebase/database",KI="@firebase/database-compat",qI="@firebase/functions",WI="@firebase/functions-compat",zI="@firebase/installations",GI="@firebase/installations-compat",QI="@firebase/messaging",YI="@firebase/messaging-compat",XI="@firebase/performance",JI="@firebase/performance-compat",ZI="@firebase/remote-config",eC="@firebase/remote-config-compat",tC="@firebase/storage",nC="@firebase/storage-compat",sC="@firebase/firestore",iC="@firebase/firestore-compat",rC="firebase",oC="9.20.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl="[DEFAULT]",aC={[fl]:"fire-core",[LI]:"fire-core-compat",[UI]:"fire-analytics",[FI]:"fire-analytics-compat",[BI]:"fire-app-check",[VI]:"fire-app-check-compat",[$I]:"fire-auth",[HI]:"fire-auth-compat",[jI]:"fire-rtdb",[KI]:"fire-rtdb-compat",[qI]:"fire-fn",[WI]:"fire-fn-compat",[zI]:"fire-iid",[GI]:"fire-iid-compat",[QI]:"fire-fcm",[YI]:"fire-fcm-compat",[XI]:"fire-perf",[JI]:"fire-perf-compat",[ZI]:"fire-rc",[eC]:"fire-rc-compat",[tC]:"fire-gcs",[nC]:"fire-gcs-compat",[sC]:"fire-fst",[iC]:"fire-fst-compat","fire-js":"fire-js",[rC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo=new Map,pl=new Map;function cC(t,e){try{t.container.addComponent(e)}catch(n){vs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function cn(t){const e=t.name;if(pl.has(e))return vs.debug(`There were multiple attempts to register component ${e}.`),!1;pl.set(e,t);for(const n of Mo.values())cC(n,t);return!0}function lC(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Un=new _i("app","Firebase",uC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Un.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=oC;function Em(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:dl,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Un.create("bad-app-name",{appName:String(i)});if(n||(n=ZT()),!n)throw Un.create("no-options");const r=Mo.get(i);if(r){if(ll(n,r.options)&&ll(s,r.config))return r;throw Un.create("duplicate-app",{appName:i})}const o=new yI(i);for(const c of pl.values())o.addComponent(c);const a=new hC(n,s,o);return Mo.set(i,a),a}function wm(t=dl){const e=Mo.get(t);if(!e&&t===dl)return Em();if(!e)throw Un.create("no-app",{appName:t});return e}function Rt(t,e,n){var s;let i=(s=aC[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vs.warn(a.join(" "));return}cn(new Qt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC="firebase-heartbeat-database",dC=1,ur="firebase-heartbeat-store";let mc=null;function Tm(){return mc||(mc=DI(fC,dC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ur)}}}).catch(t=>{throw Un.create("idb-open",{originalErrorMessage:t.message})})),mc}async function pC(t){try{return(await Tm()).transaction(ur).objectStore(ur).get(Im(t))}catch(e){if(e instanceof bn)vs.warn(e.message);else{const n=Un.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});vs.warn(n.message)}}}async function Wf(t,e){try{const s=(await Tm()).transaction(ur,"readwrite");return await s.objectStore(ur).put(e,Im(t)),s.done}catch(n){if(n instanceof bn)vs.warn(n.message);else{const s=Un.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});vs.warn(s.message)}}}function Im(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC=1024,mC=30*24*60*60*1e3;class _C{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vC(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=zf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=mC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=zf(),{heartbeatsToSend:n,unsentEntries:s}=yC(this._heartbeatsCache.heartbeats),i=Oo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function zf(){return new Date().toISOString().substring(0,10)}function yC(t,e=gC){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Gf(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Gf(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class vC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mm()?sI().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await pC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Gf(t){return Oo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EC(t){cn(new Qt("platform-logger",e=>new xI(e),"PRIVATE")),cn(new Qt("heartbeat",e=>new _C(e),"PRIVATE")),Rt(fl,qf,t),Rt(fl,qf,"esm2017"),Rt("fire-js","")}EC("");function Cm(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function bm(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wC=bm,Sm=new _i("auth","Firebase",bm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo=new Rr("@firebase/auth");function TC(t,...e){Lo.logLevel<=ce.WARN&&Lo.warn(`Auth (${yi}): ${t}`,...e)}function Io(t,...e){Lo.logLevel<=ce.ERROR&&Lo.error(`Auth (${yi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(t,...e){throw Mu(t,...e)}function xu(t,...e){return Mu(t,...e)}function IC(t,e,n){const s=Object.assign(Object.assign({},wC()),{[e]:n});return new _i("auth","Firebase",s).create(e,{appName:t.name})}function Mu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Sm.create(t,...e)}function pe(t,e,...n){if(!t)throw Mu(e,...n)}function Ki(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Io(e),new Error(e)}function Fo(t,e){t||Ki(e)}function CC(){return Yf()==="http:"||Yf()==="https:"}function Yf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(CC()||nI()||"connection"in navigator)?navigator.onLine:!0}function SC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,n){this.shortDelay=e,this.longDelay=n,Fo(n>e,"Short delay should be less than long delay!"),this.isMobile=Du()||pm()}get(){return bC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AC(t,e){Fo(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ki("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ki("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ki("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC=new Nr(3e4,6e4);function kC(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Lu(t,e,n,s,i={}){return Rm(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Ou(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Am.fetch()(Nm(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function Rm(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},RC),e);try{const i=new DC(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw no(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw no(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw no(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw no(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw IC(t,u,l);Qf(t,u)}}catch(i){if(i instanceof bn)throw i;Qf(t,"network-request-failed",{message:String(i)})}}function Nm(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?AC(t.config,i):`${t.config.apiScheme}://${i}`}class DC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(xu(this.auth,"network-request-failed")),NC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function no(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=xu(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OC(t,e){return Lu(t,"POST","/v1/accounts:delete",e)}async function PC(t,e){return Lu(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function xC(t,e=!1){const n=Qn(t),s=await n.getIdToken(e),i=km(s);pe(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:qi(_c(i.auth_time)),issuedAtTime:qi(_c(i.iat)),expirationTime:qi(_c(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function _c(t){return Number(t)*1e3}function km(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Io("JWT malformed, contained fewer than 3 sections"),null;try{const i=Po(n);return i?JSON.parse(i):(Io("Failed to decode base64 JWT payload"),null)}catch(i){return Io("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function MC(t){const e=km(t);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gl(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof bn&&LC(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function LC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=qi(this.lastLoginAt),this.creationTime=qi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uo(t){var e;const n=t.auth,s=await t.getIdToken(),i=await gl(t,PC(n,{idToken:s}));pe(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?BC(r.providerUserInfo):[],a=VC(t.providerData,o),c=t.isAnonymous,l=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Dm(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function UC(t){const e=Qn(t);await Uo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function VC(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function BC(t){return t.map(e=>{var{providerId:n}=e,s=Cm(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $C(t,e){const n=await Rm(t,{},async()=>{const s=Ou({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Nm(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Am.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):MC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return pe(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await $C(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new hr;return s&&(pe(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(pe(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(pe(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hr,this.toJSON())}_performRefresh(){return Ki("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(t,e){pe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class qs{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Cm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new FC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Dm(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await gl(this,this.stsTokenManager.getToken(this.auth,e));return pe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return xC(this,e)}reload(){return UC(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new qs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Uo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await gl(this,OC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,p=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,C=(l=n.createdAt)!==null&&l!==void 0?l:void 0,N=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:T,emailVerified:O,isAnonymous:W,providerData:ee,stsTokenManager:de}=n;pe(T&&de,e,"internal-error");const B=hr.fromJSON(this.name,de);pe(typeof T=="string",e,"internal-error"),Rn(h,e.name),Rn(f,e.name),pe(typeof O=="boolean",e,"internal-error"),pe(typeof W=="boolean",e,"internal-error"),Rn(p,e.name),Rn(m,e.name),Rn(_,e.name),Rn(v,e.name),Rn(C,e.name),Rn(N,e.name);const Te=new qs({uid:T,auth:e,email:f,emailVerified:O,displayName:h,isAnonymous:W,photoURL:m,phoneNumber:p,tenantId:_,stsTokenManager:B,createdAt:C,lastLoginAt:N});return ee&&Array.isArray(ee)&&(Te.providerData=ee.map(me=>Object.assign({},me))),v&&(Te._redirectEventId=v),Te}static async _fromIdTokenResponse(e,n,s=!1){const i=new hr;i.updateFromServerResponse(n);const r=new qs({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Uo(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf=new Map;function cs(t){Fo(t instanceof Function,"Expected a class definition");let e=Xf.get(t);return e?(Fo(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Xf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Om.type="NONE";const Jf=Om;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(t,e,n){return`firebase:${t}:${e}:${n}`}class Ws{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=yc(this.userKey,i.apiKey,r),this.fullPersistenceKey=yc("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?qs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ws(cs(Jf),e,s);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=i[0]||cs(Jf);const o=yc(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=qs._fromJSON(e,u);l!==r&&(a=h),r=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Ws(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new Ws(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(HC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zC(e))return"Blackberry";if(GC(e))return"Webos";if(jC(e))return"Safari";if((e.includes("chrome/")||KC(e))&&!e.includes("edge/"))return"Chrome";if(WC(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function HC(t=an()){return/firefox\//i.test(t)}function jC(t=an()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function KC(t=an()){return/crios\//i.test(t)}function qC(t=an()){return/iemobile/i.test(t)}function WC(t=an()){return/android/i.test(t)}function zC(t=an()){return/blackberry/i.test(t)}function GC(t=an()){return/webos/i.test(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pm(t,e=[]){let n;switch(t){case"Browser":n=Zf(an());break;case"Worker":n=`${Zf(an())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${yi}/${s}`}async function xm(t,e){return Lu(t,"GET","/v2/recaptchaConfig",kC(t,e))}function ed(t){return t!==void 0&&t.enterprise!==void 0}class Mm{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function YC(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=xu("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",QC().appendChild(s)})}const XC="https://www.google.com/recaptcha/enterprise.js?render=",JC="recaptcha-enterprise";class ZC{constructor(e){this.type=JC,this.auth=Lm(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{xm(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Mm(c);return r.tenantId==null?r._agentRecaptchaConfig=l:r._tenantRecaptchaConfigs[r.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function i(r,o,a){const c=window.grecaptcha;ed(c)?c.enterprise.ready(()=>{try{c.enterprise.execute(r,{action:e}).then(l=>{o(l)}).catch(l=>{a(l)})}catch(l){a(l)}}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&ed(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}YC(XC+a).then(()=>{i(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new td(this),this.idTokenSubscription=new td(this),this.beforeStateQueue=new e0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=cs(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Ws.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Uo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=SC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Qn(e):null;return n&&pe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(cs(e))})}async initializeRecaptchaConfig(){const e=await xm(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Mm(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new ZC(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _i("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&cs(e)||this._popupRedirectResolver;pe(n,this,"argument-error"),this.redirectPersistenceManager=await Ws.create(this,[cs(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return pe(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Pm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&TC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Lm(t){return Qn(t)}class td{constructor(e){this.auth=e,this.observer=null,this.addObserver=uI(n=>this.observer=n)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function n0(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(cs);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}new Nr(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Nr(2e3,1e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Nr(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Nr(5e3,15e3);var nd="@firebase/auth",sd="0.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function r0(t){cn(new Qt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;pe(o&&!o.includes(":"),"invalid-api-key",{appName:s.name}),pe(!(a!=null&&a.includes(":")),"argument-error",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pm(t)},l=new t0(s,i,r,c);return n0(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),cn(new Qt("auth-internal",e=>{const n=Lm(e.getProvider("auth").getImmediate());return(s=>new s0(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rt(nd,sd,i0(t)),Rt(nd,sd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0=5*60;eI("authIdTokenMaxAge");r0("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0=new Map,c0={activated:!1,tokenObservers:[]};function ln(t){return a0.get(t)||Object.assign({},c0)}const id={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new cr,await u0(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new cr,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function u0(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Vo=new _i("appCheck","AppCheck",h0);function f0(t){if(!ln(t).activated)throw Vo.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0="firebase-app-check-database",p0=1,ml="firebase-app-check-store";let so=null;function g0(){return so||(so=new Promise((t,e)=>{try{const n=indexedDB.open(d0,p0);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(Vo.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(ml,{keyPath:"compositeKey"})}}}catch(n){e(Vo.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),so)}function m0(t,e){return _0(y0(t),e)}async function _0(t,e){const s=(await g0()).transaction(ml,"readwrite"),r=s.objectStore(ml).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=c=>{o()},s.onerror=c=>{var l;a(Vo.create("storage-set",{originalErrorMessage:(l=c.target.error)===null||l===void 0?void 0:l.message}))}})}function y0(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l=new Rr("@firebase/app-check");function rd(t,e){return mm()?m0(t,e).catch(n=>{_l.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0={error:"UNKNOWN_ERROR"};function E0(t){return Ca.encodeString(JSON.stringify(t),!1)}async function yl(t,e=!1){const n=t.app;f0(n);const s=ln(n);let i=s.token,r;if(i&&!Li(i)&&(s.token=void 0,i=void 0),!i){const c=await s.cachedTokenPromise;c&&(Li(c)?i=c:await rd(n,void 0))}if(!e&&i&&Li(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await ln(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?_l.warn(c.message):_l.error(c),r=c}let a;return i?r?Li(i)?a={token:i.token,internalError:r}:a=ad(r):(a={token:i.token},s.token=i,await rd(n,i)):a=ad(r),o&&I0(n,a),a}function w0(t,e,n,s){const{app:i}=t,r=ln(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&Li(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),od(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>od(t))}function Fm(t,e){const n=ln(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function od(t){const{app:e}=t,n=ln(e);let s=n.tokenRefresher;s||(s=T0(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function T0(t){const{app:e}=t;return new l0(async()=>{const n=ln(e);let s;if(n.token?s=await yl(t,!0):s=await yl(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=ln(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},id.RETRIAL_MIN_WAIT,id.RETRIAL_MAX_WAIT)}function I0(t,e){const n=ln(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function Li(t){return t.expireTimeMillis-Date.now()>0}function ad(t){return{token:E0(v0),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=ln(this.app);for(const n of e)Fm(this.app,n.next);return Promise.resolve()}}function b0(t,e){return new C0(t,e)}function S0(t){return{getToken:e=>yl(t,e),addTokenListener:e=>w0(t,"INTERNAL",e),removeTokenListener:e=>Fm(t.app,e)}}const A0="@firebase/app-check",R0="0.6.5",N0="app-check",cd="app-check-internal";function k0(){cn(new Qt(N0,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return b0(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(cd).initialize()})),cn(new Qt(cd,t=>{const e=t.getProvider("app-check").getImmediate();return S0(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Rt(A0,R0)}k0();var D0="firebase",O0="9.20.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rt(D0,O0,"app");const Um=Symbol("firebaseApp");function Fu(t){return Ar()&&At(Um,null)||wm(t)}const sn=()=>{};function Uu(t,e){return e.split(".").reduce((n,s)=>n&&n[s],t)}function P0(t,e,n){const s=(""+e).split("."),i=s.pop(),r=s.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(i),1,n):r[i]=n}function Ss(t){return!!t&&typeof t=="object"}const x0=Object.prototype;function M0(t){return Ss(t)&&Object.getPrototypeOf(t)===x0}function Vu(t){return Ss(t)&&t.type==="document"}function Vm(t){return Ss(t)&&t.type==="collection"}function L0(t){return Vu(t)||Vm(t)}function F0(t){return Ss(t)&&t.type==="query"}function U0(t){return Ss(t)&&"ref"in t}function V0(t){return Ss(t)&&typeof t.bucket=="string"}function B0(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}function $0(){return!!(Ar()&&At(am,null))}const ld="@firebase/database",ud="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bm="";function H0(t){Bm=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ye(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:lr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Sn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new j0(e)}}catch{}return new K0},ls=$m("localStorage"),vl=$m("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=new Rr("@firebase/database"),q0=function(){let t=1;return function(){return t++}}(),Hm=function(t){const e=pI(t),n=new lI;n.update(e);const s=n.digest();return Ca.encodeByteArray(s)},kr=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=kr.apply(null,s):typeof s=="object"?e+=Ye(s):e+=s,e+=" "}return e};let gs=null,hd=!0;const W0=function(t,e){P(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(zs.logLevel=ce.VERBOSE,gs=zs.log.bind(zs),e&&vl.set("logging_enabled",!0)):typeof t=="function"?gs=t:(gs=null,vl.remove("logging_enabled"))},rt=function(...t){if(hd===!0&&(hd=!1,gs===null&&vl.get("logging_enabled")===!0&&W0(!0)),gs){const e=kr.apply(null,t);gs(e)}},Dr=function(t){return function(...e){rt(t,...e)}},El=function(...t){const e="FIREBASE INTERNAL ERROR: "+kr(...t);zs.error(e)},Es=function(...t){const e=`FIREBASE FATAL ERROR: ${kr(...t)}`;throw zs.error(e),new Error(e)},Nt=function(...t){const e="FIREBASE WARNING: "+kr(...t);zs.warn(e)},z0=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Nt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},jm=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},G0=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ni="[MIN_NAME]",ws="[MAX_NAME]",vi=function(t,e){if(t===e)return 0;if(t===ni||e===ws)return-1;if(e===ni||t===ws)return 1;{const n=fd(t),s=fd(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Q0=function(t,e){return t===e?0:t<e?-1:1},Ni=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ye(e))},Bu=function(t){if(typeof t!="object"||t===null)return Ye(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ye(e[s]),n+=":",n+=Bu(t[e[s]]);return n+="}",n},Km=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Mt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const qm=function(t){P(!jm(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const l=[];for(c=n;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(i?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let f=parseInt(u.substr(c,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},Y0=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},X0=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},J0=new RegExp("^-?(0*)\\d{1,10}$"),Z0=-2147483648,eb=2147483647,fd=function(t){if(J0.test(t)){const e=Number(t);if(e>=Z0&&e<=eb)return e}return null},Or=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Nt("Exception was thrown by user callback.",n),e},Math.floor(0))}},tb=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Wi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Nt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(rt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Nt(e)}}class wl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}wl.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u="5",Wm="v",zm="s",Gm="r",Qm="f",Ym=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Xm="ls",Jm="p",Tl="ac",Zm="websocket",e_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e,n,s,i,r=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ls.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ls.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function rb(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function t_(t,e,n){P(typeof e=="string","typeof type must == string"),P(typeof n=="object","typeof params must == object");let s;if(e===Zm)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===e_)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);rb(t)&&(n.ns=t.namespace);const i=[];return Mt(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(){this.counters_={}}incrementCounter(e,n=1){Sn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return qT(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc={},Ec={};function Hu(t){const e=t.toString();return vc[e]||(vc[e]=new ob),vc[e]}function ab(t,e){const n=t.toString();return Ec[n]||(Ec[n]=e()),Ec[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Or(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd="start",lb="close",ub="pLPCommand",hb="pRTLPCB",n_="id",s_="pw",i_="ser",fb="cb",db="seg",pb="ts",gb="d",mb="dframe",r_=1870,o_=30,_b=r_-o_,yb=25e3,vb=3e4;class Us{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Dr(e),this.stats_=Hu(n),this.urlFn=c=>(this.appCheckToken&&(c[Tl]=this.appCheckToken),t_(n,e_,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new cb(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(vb)),G0(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ju((...r)=>{const[o,a,c,l,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===dd)this.id=a,this.password=c;else if(o===lb)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[dd]="t",s[i_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[fb]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Wm]=$u,this.transportSessionId&&(s[zm]=this.transportSessionId),this.lastSessionId&&(s[Xm]=this.lastSessionId),this.applicationId&&(s[Jm]=this.applicationId),this.appCheckToken&&(s[Tl]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ym.test(location.hostname)&&(s[Gm]=Qm);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Us.forceAllow_=!0}static forceDisallow(){Us.forceDisallow_=!0}static isAvailable(){return Us.forceAllow_?!0:!Us.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Y0()&&!X0()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ye(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=fm(n),i=Km(s,_b);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[mb]="t",s[n_]=e,s[s_]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ye(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ju{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=q0(),window[ub+this.uniqueCallbackIdentifier]=e,window[hb+this.uniqueCallbackIdentifier]=n,this.myIFrame=ju.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){rt("frame writing exception"),a.stack&&rt(a.stack),rt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||rt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[n_]=this.myID,e[s_]=this.myPW,e[i_]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+o_+s.length<=r_;){const o=this.pendingSegs.shift();s=s+"&"+db+i+"="+o.seg+"&"+pb+i+"="+o.ts+"&"+gb+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(yb)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{rt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb=16384,wb=45e3;let Bo=null;typeof MozWebSocket<"u"?Bo=MozWebSocket:typeof WebSocket<"u"&&(Bo=WebSocket);class $t{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Dr(this.connId),this.stats_=Hu(n),this.connURL=$t.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Wm]=$u,typeof location<"u"&&location.hostname&&Ym.test(location.hostname)&&(o[Gm]=Qm),n&&(o[zm]=n),s&&(o[Xm]=s),i&&(o[Tl]=i),r&&(o[Jm]=r),t_(e,Zm,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ls.set("previous_websocket_failure",!0);try{let s;gm(),this.mySock=new Bo(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){$t.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Bo!==null&&!$t.forceDisallow_}static previouslyFailed(){return ls.isInMemoryStorage||ls.get("previous_websocket_failure")===!0}markConnectionHealthy(){ls.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=lr(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(P(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ye(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Km(n,Eb);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(wb))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}$t.responsesRequiredToBeHealthy=2;$t.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Us,$t]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=$t&&$t.isAvailable();let s=n&&!$t.previouslyFailed();if(e.webSocketOnly&&(n||Nt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[$t];else{const i=this.transports_=[];for(const r of fr.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);fr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}fr.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb=6e4,Ib=5e3,Cb=10*1024,bb=100*1024,wc="t",pd="d",Sb="s",gd="r",Ab="e",md="o",_d="a",yd="n",vd="p",Rb="h";class Nb{constructor(e,n,s,i,r,o,a,c,l,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Dr("c:"+this.id+":"),this.transportManager_=new fr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Wi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>bb?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Cb?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(wc in e){const n=e[wc];n===_d?this.upgradeIfSecondaryHealthy_():n===gd?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===md&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ni("t",e),s=Ni("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:vd,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:_d,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:yd,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ni("t",e),s=Ni("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ni(wc,e);if(pd in e){const s=e[pd];if(n===Rb){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===yd){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Sb?this.onConnectionShutdown_(s):n===gd?this.onReset_(s):n===Ab?El("Server Error: "+s):n===md?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):El("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),$u!==s&&Nt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Wi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Tb))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Wi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Ib))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:vd,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ls.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e){this.allowedEvents_=e,this.listeners_={},P(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){P(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o extends c_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Du()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new $o}getInitialEvent(e){return P(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed=32,wd=768;class Re{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function we(){return new Re("")}function ie(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function qn(t){return t.pieces_.length-t.pieceNum_}function Ae(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Re(t.pieces_,e)}function l_(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function kb(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function u_(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function h_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Re(e,0)}function ze(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Re)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Re(n,0)}function ne(t){return t.pieceNum_>=t.pieces_.length}function Pt(t,e){const n=ie(t),s=ie(e);if(n===null)return e;if(n===s)return Pt(Ae(t),Ae(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function f_(t,e){if(qn(t)!==qn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function jt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(qn(t)>qn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Db{constructor(e,n){this.errorPrefix_=n,this.parts_=u_(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=ba(this.parts_[s]);d_(this)}}function Ob(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ba(e),d_(t)}function Pb(t){const e=t.parts_.pop();t.byteLength_-=ba(e),t.parts_.length>0&&(t.byteLength_-=1)}function d_(t){if(t.byteLength_>wd)throw new Error(t.errorPrefix_+"has a key path longer than "+wd+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ed)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ed+") or object contains a cycle "+ss(t))}function ss(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku extends c_{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Ku}getInitialEvent(e){return P(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=1e3,xb=60*5*1e3,Td=30*1e3,Mb=1.3,Lb=3e4,Fb="server_kill",Id=3;class vn extends a_{constructor(e,n,s,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=vn.nextPersistentConnectionId_++,this.log_=Dr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ki,this.maxReconnectDelay_=xb,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!gm())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ku.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&$o.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Ye(r)),P(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new cr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),P(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;vn.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Sn(e,"w")){const s=ti(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Nt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||cI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Td)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=aI(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ye(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):El("Unrecognized action received from server: "+Ye(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){P(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ki,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ki,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Lb&&(this.reconnectDelay_=ki),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Mb)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+vn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},l=function(h){P(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?rt("getToken() completed but was canceled"):(rt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new Nb(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,p=>{Nt(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(Fb)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Nt(h),c())}}}interrupt(e){rt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){rt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Bf(this.interruptReasons_)&&(this.reconnectDelay_=ki,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Bu(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Re(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){rt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Id&&(this.reconnectDelay_=Td,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){rt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Id&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Bm.replace(/\./g,"-")]=1,Du()?e["framework.cordova"]=1:pm()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=$o.getInstance().currentlyOnline();return Bf(this.interruptReasons_)&&e}}vn.nextPersistentConnectionId_=0;vn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new re(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new re(ni,e),i=new re(ni,n);return this.compare(s,i)!==0}minPost(){return re.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let io;class p_ extends Sa{static get __EMPTY_NODE(){return io}static set __EMPTY_NODE(e){io=e}compare(e,n){return vi(e.name,n.name)}isDefinedOn(e){throw mi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return re.MIN}maxPost(){return new re(ws,io)}makePost(e,n){return P(typeof e=="string","KeyIndex indexValue must always be a string."),new re(e,io)}toString(){return".key"}}const Gs=new p_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class We{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??We.RED,this.left=i??wt.EMPTY_NODE,this.right=r??wt.EMPTY_NODE}copy(e,n,s,i,r){return new We(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return wt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return wt.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}We.RED=!0;We.BLACK=!1;class Ub{copy(e,n,s,i,r){return this}insert(e,n,s){return new We(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class wt{constructor(e,n=wt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new wt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,We.BLACK,null,null))}remove(e){return new wt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,We.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ro(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ro(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ro(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ro(this.root_,null,this.comparator_,!0,e)}}wt.EMPTY_NODE=new Ub;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vb(t,e){return vi(t.name,e.name)}function qu(t,e){return vi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Il;function Bb(t){Il=t}const g_=function(t){return typeof t=="number"?"number:"+qm(t):"string:"+t},m_=function(t){if(t.isLeafNode()){const e=t.val();P(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Sn(e,".sv"),"Priority must be a string or number.")}else P(t===Il||t.isEmpty(),"priority of unexpected type.");P(t===Il||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cd;class Ke{constructor(e,n=Ke.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,P(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),m_(this.priorityNode_)}static set __childrenNodeConstructor(e){Cd=e}static get __childrenNodeConstructor(){return Cd}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ke(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ke.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ne(e)?this:ie(e)===".priority"?this.priorityNode_:Ke.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ke.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ie(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(P(s!==".priority"||qn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ke.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ae(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+g_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=qm(this.value_):e+=this.value_,this.lazyHash_=Hm(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ke.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ke.__childrenNodeConstructor?-1:(P(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ke.VALUE_TYPE_ORDER.indexOf(n),r=Ke.VALUE_TYPE_ORDER.indexOf(s);return P(i>=0,"Unknown leaf type: "+n),P(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ke.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __,y_;function $b(t){__=t}function Hb(t){y_=t}class jb extends Sa{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?vi(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return re.MIN}maxPost(){return new re(ws,new Ke("[PRIORITY-POST]",y_))}makePost(e,n){const s=__(e);return new re(n,new Ke("[PRIORITY-POST]",s))}toString(){return".priority"}}const lt=new jb;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kb=Math.log(2);class qb{constructor(e){const n=r=>parseInt(Math.log(r)/Kb,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ho=function(t,e,n,s){t.sort(e);const i=function(c,l){const u=l-c;let h,f;if(u===0)return null;if(u===1)return h=t[c],f=n?n(h):h,new We(f,h.node,We.BLACK,null,null);{const p=parseInt(u/2,10)+c,m=i(c,p),_=i(p+1,l);return h=t[p],f=n?n(h):h,new We(f,h.node,We.BLACK,m,_)}},r=function(c){let l=null,u=null,h=t.length;const f=function(m,_){const v=h-m,C=h;h-=m;const N=i(v+1,C),T=t[v],O=n?n(T):T;p(new We(O,T.node,_,null,N))},p=function(m){l?(l.left=m,l=m):(u=m,l=m)};for(let m=0;m<c.count;++m){const _=c.nextBitIsOne(),v=Math.pow(2,c.count-(m+1));_?f(v,We.BLACK):(f(v,We.BLACK),f(v,We.RED))}return u},o=new qb(t.length),a=r(o);return new wt(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tc;const Os={};class _n{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return P(Os&&lt,"ChildrenNode.ts has not been loaded"),Tc=Tc||new _n({".priority":Os},{".priority":lt}),Tc}get(e){const n=ti(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof wt?n:null}hasIndex(e){return Sn(this.indexSet_,e.toString())}addIndex(e,n){P(e!==Gs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(re.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Ho(s,e.getCompare()):a=Os;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new _n(u,l)}addToIndexes(e,n){const s=xo(this.indexes_,(i,r)=>{const o=ti(this.indexSet_,r);if(P(o,"Missing index implementation for "+r),i===Os)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(re.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),Ho(a,o.getCompare())}else return Os;else{const a=n.get(e.name);let c=i;return a&&(c=c.remove(new re(e.name,a))),c.insert(e,e.node)}});return new _n(s,this.indexSet_)}removeFromIndexes(e,n){const s=xo(this.indexes_,i=>{if(i===Os)return i;{const r=n.get(e.name);return r?i.remove(new re(e.name,r)):i}});return new _n(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Di;class ge{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&m_(this.priorityNode_),this.children_.isEmpty()&&P(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Di||(Di=new ge(new wt(qu),null,_n.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Di}updatePriority(e){return this.children_.isEmpty()?this:new ge(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Di:n}}getChild(e){const n=ie(e);return n===null?this:this.getImmediateChild(n).getChild(Ae(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(P(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new re(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Di:this.priorityNode_;return new ge(i,o,r)}}updateChild(e,n){const s=ie(e);if(s===null)return n;{P(ie(e)!==".priority"||qn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Ae(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(lt,(o,a)=>{n[o]=a.val(e),s++,r&&ge.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+g_(this.getPriority().val())+":"),this.forEachChild(lt,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Hm(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new re(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new re(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new re(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,re.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,re.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Pr?-1:0}withIndex(e){if(e===Gs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ge(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Gs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(lt),i=n.getIterator(lt);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Gs?null:this.indexMap_.get(e.toString())}}ge.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Wb extends ge{constructor(){super(new wt(qu),ge.EMPTY_NODE,_n.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ge.EMPTY_NODE}isEmpty(){return!1}}const Pr=new Wb;Object.defineProperties(re,{MIN:{value:new re(ni,ge.EMPTY_NODE)},MAX:{value:new re(ws,Pr)}});p_.__EMPTY_NODE=ge.EMPTY_NODE;Ke.__childrenNodeConstructor=ge;Bb(Pr);Hb(Pr);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb=!0;function ot(t,e=null){if(t===null)return ge.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),P(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ke(n,ot(e))}if(!(t instanceof Array)&&zb){const n=[];let s=!1;if(Mt(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=ot(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new re(o,c)))}}),n.length===0)return ge.EMPTY_NODE;const r=Ho(n,Vb,o=>o.name,qu);if(s){const o=Ho(n,lt.getCompare());return new ge(r,ot(e),new _n({".priority":o},{".priority":lt}))}else return new ge(r,ot(e),_n.Default)}else{let n=ge.EMPTY_NODE;return Mt(t,(s,i)=>{if(Sn(t,s)&&s.substring(0,1)!=="."){const r=ot(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ot(e))}}$b(ot);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb extends Sa{constructor(e){super(),this.indexPath_=e,P(!ne(e)&&ie(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?vi(e.name,n.name):r}makePost(e,n){const s=ot(e),i=ge.EMPTY_NODE.updateChild(this.indexPath_,s);return new re(n,i)}maxPost(){const e=ge.EMPTY_NODE.updateChild(this.indexPath_,Pr);return new re(ws,e)}toString(){return u_(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb extends Sa{compare(e,n){const s=e.node.compareTo(n.node);return s===0?vi(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return re.MIN}maxPost(){return re.MAX}makePost(e,n){const s=ot(e);return new re(n,s)}toString(){return".value"}}const Yb=new Qb;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xb(t){return{type:"value",snapshotNode:t}}function Jb(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Zb(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function bd(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function eS(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=lt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return P(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return P(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ni}hasEnd(){return this.endSet_}getIndexEndValue(){return P(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return P(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ws}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return P(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===lt}copy(){const e=new Wu;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Sd(t){const e={};if(t.isDefault())return e;let n;if(t.index_===lt?n="$priority":t.index_===Yb?n="$value":t.index_===Gs?n="$key":(P(t.index_ instanceof Gb,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ye(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Ye(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Ye(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Ye(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Ye(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ad(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==lt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo extends a_{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Dr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(P(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=jo.getListenId_(e,s),a={};this.listens_[o]=a;const c=Sd(e._queryParams);this.restRequest_(r+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(r,h,!1,s),ti(this.listens_,o)===a){let f;l?l===401?f="permission_denied":f="rest_error:"+l:f="ok",i(f,null)}})}unlisten(e,n){const s=jo.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Sd(e._queryParams),s=e._path.toString(),i=new cr;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ou(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=lr(a.responseText)}catch{Nt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&Nt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(){this.rootNode_=ge.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(){return{value:null,children:new Map}}function v_(t,e,n){if(ne(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=ie(e);t.children.has(s)||t.children.set(s,Ko());const i=t.children.get(s);e=Ae(e),v_(i,e,n)}}function Cl(t,e,n){t.value!==null?n(e,t.value):nS(t,(s,i)=>{const r=new Re(e.toString()+"/"+s);Cl(i,r,n)})}function nS(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Mt(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd=10*1e3,iS=30*1e3,rS=5*60*1e3;class oS{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new sS(e);const s=Rd+(iS-Rd)*Math.random();Wi(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Mt(e,(i,r)=>{r>0&&Sn(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Wi(this.reportStats_.bind(this),Math.floor(Math.random()*2*rS))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(rn||(rn={}));function E_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function w_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function T_(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=rn.ACK_USER_WRITE,this.source=E_()}operationForChild(e){if(ne(this.path)){if(this.affectedTree.value!=null)return P(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Re(e));return new qo(we(),n,this.revert)}}else return P(ie(this.path)===e,"operationForChild called for unrelated child."),new qo(Ae(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=rn.OVERWRITE}operationForChild(e){return ne(this.path)?new Ts(this.source,we(),this.snap.getImmediateChild(e)):new Ts(this.source,Ae(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=rn.MERGE}operationForChild(e){if(ne(this.path)){const n=this.children.subtree(new Re(e));return n.isEmpty()?null:n.value?new Ts(this.source,we(),n.value):new dr(this.source,we(),n)}else return P(ie(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new dr(this.source,Ae(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ne(e))return this.isFullyInitialized()&&!this.filtered_;const n=ie(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function aS(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(eS(o.childName,o.snapshotNode))}),Oi(t,i,"child_removed",e,s,n),Oi(t,i,"child_added",e,s,n),Oi(t,i,"child_moved",r,s,n),Oi(t,i,"child_changed",e,s,n),Oi(t,i,"value",e,s,n),i}function Oi(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,c)=>lS(t,a,c)),o.forEach(a=>{const c=cS(t,a,r);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,t.query_))})})}function cS(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function lS(t,e,n){if(e.childName==null||n.childName==null)throw mi("Should only compare child_ events.");const s=new re(e.childName,e.snapshotNode),i=new re(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(t,e){return{eventCache:t,serverCache:e}}function zi(t,e,n,s){return I_(new zu(e,n,s),t.serverCache)}function C_(t,e,n,s){return I_(t.eventCache,new zu(e,n,s))}function bl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Is(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ic;const uS=()=>(Ic||(Ic=new wt(Q0)),Ic);class be{constructor(e,n=uS()){this.value=e,this.children=n}static fromObject(e){let n=new be(null);return Mt(e,(s,i)=>{n=n.set(new Re(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:we(),value:this.value};if(ne(e))return null;{const s=ie(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Ae(e),n);return r!=null?{path:ze(new Re(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ne(e))return this;{const n=ie(e),s=this.children.get(n);return s!==null?s.subtree(Ae(e)):new be(null)}}set(e,n){if(ne(e))return new be(n,this.children);{const s=ie(e),r=(this.children.get(s)||new be(null)).set(Ae(e),n),o=this.children.insert(s,r);return new be(this.value,o)}}remove(e){if(ne(e))return this.children.isEmpty()?new be(null):new be(null,this.children);{const n=ie(e),s=this.children.get(n);if(s){const i=s.remove(Ae(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new be(null):new be(this.value,r)}else return this}}get(e){if(ne(e))return this.value;{const n=ie(e),s=this.children.get(n);return s?s.get(Ae(e)):null}}setTree(e,n){if(ne(e))return n;{const s=ie(e),r=(this.children.get(s)||new be(null)).setTree(Ae(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new be(this.value,o)}}fold(e){return this.fold_(we(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ze(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,we(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(ne(e))return null;{const r=ie(e),o=this.children.get(r);return o?o.findOnPath_(Ae(e),ze(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,we(),n)}foreachOnPath_(e,n,s){if(ne(e))return this;{this.value&&s(n,this.value);const i=ie(e),r=this.children.get(i);return r?r.foreachOnPath_(Ae(e),ze(n,i),s):new be(null)}}foreach(e){this.foreach_(we(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ze(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.writeTree_=e}static empty(){return new zt(new be(null))}}function Gi(t,e,n){if(ne(e))return new zt(new be(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Pt(i,e);return r=r.updateChild(o,n),new zt(t.writeTree_.set(i,r))}else{const i=new be(n),r=t.writeTree_.setTree(e,i);return new zt(r)}}}function Nd(t,e,n){let s=t;return Mt(n,(i,r)=>{s=Gi(s,ze(e,i),r)}),s}function kd(t,e){if(ne(e))return zt.empty();{const n=t.writeTree_.setTree(e,new be(null));return new zt(n)}}function Sl(t,e){return As(t,e)!=null}function As(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Pt(n.path,e)):null}function Dd(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(lt,(s,i)=>{e.push(new re(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new re(s,i.value))}),e}function Vn(t,e){if(ne(e))return t;{const n=As(t,e);return n!=null?new zt(new be(n)):new zt(t.writeTree_.subtree(e))}}function Al(t){return t.writeTree_.isEmpty()}function si(t,e){return b_(we(),t.writeTree_,e)}function b_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(P(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=b_(ze(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ze(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(t,e){return D_(e,t)}function hS(t,e,n,s,i){P(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Gi(t.visibleWrites,e,n)),t.lastWriteId=s}function fS(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function dS(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);P(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&pS(a,s.path)?i=!1:jt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return gS(t),!0;if(s.snap)t.visibleWrites=kd(t.visibleWrites,s.path);else{const a=s.children;Mt(a,c=>{t.visibleWrites=kd(t.visibleWrites,ze(s.path,c))})}return!0}else return!1}function pS(t,e){if(t.snap)return jt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&jt(ze(t.path,n),e))return!0;return!1}function gS(t){t.visibleWrites=A_(t.allWrites,mS,we()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function mS(t){return t.visible}function A_(t,e,n){let s=zt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)jt(n,o)?(a=Pt(n,o),s=Gi(s,a,r.snap)):jt(o,n)&&(a=Pt(o,n),s=Gi(s,we(),r.snap.getChild(a)));else if(r.children){if(jt(n,o))a=Pt(n,o),s=Nd(s,a,r.children);else if(jt(o,n))if(a=Pt(o,n),ne(a))s=Nd(s,we(),r.children);else{const c=ti(r.children,ie(a));if(c){const l=c.getChild(Ae(a));s=Gi(s,we(),l)}}}else throw mi("WriteRecord should have .snap or .children")}}return s}function R_(t,e,n,s,i){if(!s&&!i){const r=As(t.visibleWrites,e);if(r!=null)return r;{const o=Vn(t.visibleWrites,e);if(Al(o))return n;if(n==null&&!Sl(o,we()))return null;{const a=n||ge.EMPTY_NODE;return si(o,a)}}}else{const r=Vn(t.visibleWrites,e);if(!i&&Al(r))return n;if(!i&&n==null&&!Sl(r,we()))return null;{const o=function(l){return(l.visible||i)&&(!s||!~s.indexOf(l.writeId))&&(jt(l.path,e)||jt(e,l.path))},a=A_(t.allWrites,o,e),c=n||ge.EMPTY_NODE;return si(a,c)}}}function _S(t,e,n){let s=ge.EMPTY_NODE;const i=As(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(lt,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Vn(t.visibleWrites,e);return n.forEachChild(lt,(o,a)=>{const c=si(Vn(r,new Re(o)),a);s=s.updateImmediateChild(o,c)}),Dd(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Vn(t.visibleWrites,e);return Dd(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function yS(t,e,n,s,i){P(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ze(e,n);if(Sl(t.visibleWrites,r))return null;{const o=Vn(t.visibleWrites,r);return Al(o)?i.getChild(n):si(o,i.getChild(n))}}function vS(t,e,n,s){const i=ze(e,n),r=As(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Vn(t.visibleWrites,i);return si(o,s.getNode().getImmediateChild(n))}else return null}function ES(t,e){return As(t.visibleWrites,e)}function wS(t,e,n,s,i,r,o){let a;const c=Vn(t.visibleWrites,e),l=As(c,we());if(l!=null)a=l;else if(n!=null)a=si(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=f.getNext();for(;p&&u.length<i;)h(p,s)!==0&&u.push(p),p=f.getNext();return u}else return[]}function TS(){return{visibleWrites:zt.empty(),allWrites:[],lastWriteId:-1}}function Rl(t,e,n,s){return R_(t.writeTree,t.treePath,e,n,s)}function N_(t,e){return _S(t.writeTree,t.treePath,e)}function Od(t,e,n,s){return yS(t.writeTree,t.treePath,e,n,s)}function Wo(t,e){return ES(t.writeTree,ze(t.treePath,e))}function IS(t,e,n,s,i,r){return wS(t.writeTree,t.treePath,e,n,s,i,r)}function Gu(t,e,n){return vS(t.writeTree,t.treePath,e,n)}function k_(t,e){return D_(ze(t.treePath,e),t.writeTree)}function D_(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;P(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),P(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,bd(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Zb(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Jb(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,bd(s,e.snapshotNode,i.oldSnap));else throw mi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const O_=new bS;class Qu{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new zu(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Gu(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Is(this.viewCache_),r=IS(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function SS(t,e){P(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),P(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function AS(t,e,n,s,i){const r=new CS;let o,a;if(n.type===rn.OVERWRITE){const l=n;l.source.fromUser?o=Nl(t,e,l.path,l.snap,s,i,r):(P(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!ne(l.path),o=zo(t,e,l.path,l.snap,s,i,a,r))}else if(n.type===rn.MERGE){const l=n;l.source.fromUser?o=NS(t,e,l.path,l.children,s,i,r):(P(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=kl(t,e,l.path,l.children,s,i,a,r))}else if(n.type===rn.ACK_USER_WRITE){const l=n;l.revert?o=OS(t,e,l.path,s,i,r):o=kS(t,e,l.path,l.affectedTree,s,i,r)}else if(n.type===rn.LISTEN_COMPLETE)o=DS(t,e,n.path,s,r);else throw mi("Unknown operation type: "+n.type);const c=r.getChanges();return RS(e,o,c),{viewCache:o,changes:c}}function RS(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=bl(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Xb(bl(e)))}}function P_(t,e,n,s,i,r){const o=e.eventCache;if(Wo(s,n)!=null)return e;{let a,c;if(ne(n))if(P(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=Is(e),u=l instanceof ge?l:ge.EMPTY_NODE,h=N_(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const l=Rl(s,Is(e));a=t.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=ie(n);if(l===".priority"){P(qn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=Od(s,n,u,c);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Ae(n);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const f=Od(s,n,o.getNode(),c);f!=null?h=o.getNode().getImmediateChild(l).updateChild(u,f):h=o.getNode().getImmediateChild(l)}else h=Gu(s,l,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),l,h,u,i,r):a=o.getNode()}}return zi(e,a,o.isFullyInitialized()||ne(n),t.filter.filtersNodes())}}function zo(t,e,n,s,i,r,o,a){const c=e.serverCache;let l;const u=o?t.filter:t.filter.getIndexedFilter();if(ne(n))l=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const p=c.getNode().updateChild(n,s);l=u.updateFullNode(c.getNode(),p,null)}else{const p=ie(n);if(!c.isCompleteForPath(n)&&qn(n)>1)return e;const m=Ae(n),v=c.getNode().getImmediateChild(p).updateChild(m,s);p===".priority"?l=u.updatePriority(c.getNode(),v):l=u.updateChild(c.getNode(),p,v,m,O_,null)}const h=C_(e,l,c.isFullyInitialized()||ne(n),u.filtersNodes()),f=new Qu(i,h,r);return P_(t,h,n,i,f,a)}function Nl(t,e,n,s,i,r,o){const a=e.eventCache;let c,l;const u=new Qu(i,e,r);if(ne(n))l=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=zi(e,l,!0,t.filter.filtersNodes());else{const h=ie(n);if(h===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),s),c=zi(e,l,a.isFullyInitialized(),a.isFiltered());else{const f=Ae(n),p=a.getNode().getImmediateChild(h);let m;if(ne(f))m=s;else{const _=u.getCompleteChild(h);_!=null?l_(f)===".priority"&&_.getChild(h_(f)).isEmpty()?m=_:m=_.updateChild(f,s):m=ge.EMPTY_NODE}if(p.equals(m))c=e;else{const _=t.filter.updateChild(a.getNode(),h,m,f,u,o);c=zi(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function Pd(t,e){return t.eventCache.isCompleteForChild(e)}function NS(t,e,n,s,i,r,o){let a=e;return s.foreach((c,l)=>{const u=ze(n,c);Pd(e,ie(u))&&(a=Nl(t,a,u,l,i,r,o))}),s.foreach((c,l)=>{const u=ze(n,c);Pd(e,ie(u))||(a=Nl(t,a,u,l,i,r,o))}),a}function xd(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function kl(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;ne(n)?l=s:l=new be(null).setTree(n,s);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),m=xd(t,p,f);c=zo(t,c,new Re(h),m,i,r,o,a)}}),l.children.inorderTraversal((h,f)=>{const p=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!p){const m=e.serverCache.getNode().getImmediateChild(h),_=xd(t,m,f);c=zo(t,c,new Re(h),_,i,r,o,a)}}),c}function kS(t,e,n,s,i,r,o){if(Wo(i,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(ne(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return zo(t,e,n,c.getNode().getChild(n),i,r,a,o);if(ne(n)){let l=new be(null);return c.getNode().forEachChild(Gs,(u,h)=>{l=l.set(new Re(u),h)}),kl(t,e,n,l,i,r,a,o)}else return e}else{let l=new be(null);return s.foreach((u,h)=>{const f=ze(n,u);c.isCompleteForPath(f)&&(l=l.set(u,c.getNode().getChild(f)))}),kl(t,e,n,l,i,r,a,o)}}function DS(t,e,n,s,i){const r=e.serverCache,o=C_(e,r.getNode(),r.isFullyInitialized()||ne(n),r.isFiltered());return P_(t,o,n,s,O_,i)}function OS(t,e,n,s,i,r){let o;if(Wo(s,n)!=null)return e;{const a=new Qu(s,e,i),c=e.eventCache.getNode();let l;if(ne(n)||ie(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Rl(s,Is(e));else{const h=e.serverCache.getNode();P(h instanceof ge,"serverChildren would be complete if leaf node"),u=N_(s,h)}u=u,l=t.filter.updateFullNode(c,u,r)}else{const u=ie(n);let h=Gu(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=t.filter.updateChild(c,u,h,Ae(n),a,r):e.eventCache.getNode().hasChild(u)?l=t.filter.updateChild(c,u,ge.EMPTY_NODE,Ae(n),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Rl(s,Is(e)),o.isLeafNode()&&(l=t.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||Wo(s,we())!=null,zi(e,l,o,t.filter.filtersNodes())}}function PS(t,e){const n=Is(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ne(e)&&!n.getImmediateChild(ie(e)).isEmpty())?n.getChild(e):null}function Md(t,e,n,s){e.type===rn.MERGE&&e.source.queryId!==null&&(P(Is(t.viewCache_),"We should always have a full cache before handling merges"),P(bl(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=AS(t.processor_,i,e,n,s);return SS(t.processor_,r.viewCache),P(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,xS(t,r.changes,r.viewCache.eventCache.getNode(),null)}function xS(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return aS(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ld;function MS(t){P(!Ld,"__referenceConstructor has already been defined"),Ld=t}function Yu(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return P(r!=null,"SyncTree gave us an op for an invalid query."),Md(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Md(o,e,n,s));return r}}function Xu(t,e){let n=null;for(const s of t.views.values())n=n||PS(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fd;function LS(t){P(!Fd,"__referenceConstructor has already been defined"),Fd=t}class Ud{constructor(e){this.listenProvider_=e,this.syncPointTree_=new be(null),this.pendingWriteTree_=TS(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function FS(t,e,n,s,i){return hS(t.pendingWriteTree_,e,n,s,i),i?Ra(t,new Ts(E_(),e,n)):[]}function Vs(t,e,n=!1){const s=fS(t.pendingWriteTree_,e);if(dS(t.pendingWriteTree_,e)){let r=new be(null);return s.snap!=null?r=r.set(we(),!0):Mt(s.children,o=>{r=r.set(new Re(o),!0)}),Ra(t,new qo(s.path,r,n))}else return[]}function Aa(t,e,n){return Ra(t,new Ts(w_(),e,n))}function US(t,e,n){const s=be.fromObject(n);return Ra(t,new dr(w_(),e,s))}function VS(t,e,n,s){const i=F_(t,s);if(i!=null){const r=U_(i),o=r.path,a=r.queryId,c=Pt(o,e),l=new Ts(T_(a),c,n);return V_(t,o,l)}else return[]}function BS(t,e,n,s){const i=F_(t,s);if(i){const r=U_(i),o=r.path,a=r.queryId,c=Pt(o,e),l=be.fromObject(n),u=new dr(T_(a),c,l);return V_(t,o,u)}else return[]}function x_(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=Pt(o,e),l=Xu(a,c);if(l)return l});return R_(i,e,r,n,!0)}function Ra(t,e){return M_(e,t.syncPointTree_,null,S_(t.pendingWriteTree_,we()))}function M_(t,e,n,s){if(ne(t.path))return L_(t,e,n,s);{const i=e.get(we());n==null&&i!=null&&(n=Xu(i,we()));let r=[];const o=ie(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const l=n?n.getImmediateChild(o):null,u=k_(s,o);r=r.concat(M_(a,c,l,u))}return i&&(r=r.concat(Yu(i,t,s,n))),r}}function L_(t,e,n,s){const i=e.get(we());n==null&&i!=null&&(n=Xu(i,we()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,l=k_(s,o),u=t.operationForChild(o);u&&(r=r.concat(L_(u,a,c,l)))}),i&&(r=r.concat(Yu(i,t,s,n))),r}function F_(t,e){return t.tagToQueryMap.get(e)}function U_(t){const e=t.indexOf("$");return P(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Re(t.substr(0,e))}}function V_(t,e,n){const s=t.syncPointTree_.get(e);P(s,"Missing sync point for query tag that we're tracking");const i=S_(t.pendingWriteTree_,e);return Yu(s,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ju(n)}node(){return this.node_}}class Zu{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ze(this.path_,e);return new Zu(this.syncTree_,n)}node(){return x_(this.syncTree_,this.path_)}}const $S=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Vd=function(t,e,n){if(!t||typeof t!="object")return t;if(P(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return HS(t[".sv"],e,n);if(typeof t[".sv"]=="object")return jS(t[".sv"],e);P(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},HS=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:P(!1,"Unexpected server value: "+t)}},jS=function(t,e,n){t.hasOwnProperty("increment")||P(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&P(!1,"Unexpected increment value: "+s);const i=e.node();if(P(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},KS=function(t,e,n,s){return eh(e,new Zu(n,t),s)},qS=function(t,e,n){return eh(t,new Ju(e),n)};function eh(t,e,n){const s=t.getPriority().val(),i=Vd(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Vd(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ke(a,ot(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ke(i))),o.forEachChild(lt,(a,c)=>{const l=eh(c,e.getImmediateChild(a),n);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function nh(t,e){let n=e instanceof Re?e:new Re(e),s=t,i=ie(n);for(;i!==null;){const r=ti(s.node.children,i)||{children:{},childCount:0};s=new th(i,s,r),n=Ae(n),i=ie(n)}return s}function Ei(t){return t.node.value}function B_(t,e){t.node.value=e,Dl(t)}function $_(t){return t.node.childCount>0}function WS(t){return Ei(t)===void 0&&!$_(t)}function Na(t,e){Mt(t.node.children,(n,s)=>{e(new th(n,t,s))})}function H_(t,e,n,s){n&&!s&&e(t),Na(t,i=>{H_(i,e,!0,s)}),n&&s&&e(t)}function zS(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function xr(t){return new Re(t.parent===null?t.name:xr(t.parent)+"/"+t.name)}function Dl(t){t.parent!==null&&GS(t.parent,t.name,t)}function GS(t,e,n){const s=WS(n),i=Sn(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Dl(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Dl(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS=/[\[\].#$\/\u0000-\u001F\u007F]/,YS=/[\[\].#$\u0000-\u001F\u007F]/,Cc=10*1024*1024,j_=function(t){return typeof t=="string"&&t.length!==0&&!QS.test(t)},XS=function(t){return typeof t=="string"&&t.length!==0&&!YS.test(t)},JS=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),XS(t)},K_=function(t,e,n){const s=n instanceof Re?new Db(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ss(s));if(typeof e=="function")throw new Error(t+"contains a function "+ss(s)+" with contents = "+e.toString());if(jm(e))throw new Error(t+"contains "+e.toString()+" "+ss(s));if(typeof e=="string"&&e.length>Cc/3&&ba(e)>Cc)throw new Error(t+"contains a string greater than "+Cc+" utf8 bytes "+ss(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Mt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!j_(o)))throw new Error(t+" contains an invalid key ("+o+") "+ss(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Ob(s,o),K_(t,a,s),Pb(s)}),i&&r)throw new Error(t+' contains ".value" child '+ss(s)+" in addition to actual children.")}},ZS=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!j_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!JS(n))throw new Error(dI(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function tA(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!f_(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Rs(t,e,n){tA(t,n),nA(t,s=>jt(s,e)||jt(e,s))}function nA(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(sA(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function sA(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();gs&&rt("event: "+n.toString()),Or(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA="repo_interrupt",rA=25;class oA{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new eA,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ko(),this.transactionQueueTree_=new th,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function aA(t,e,n){if(t.stats_=Hu(t.repoInfo_),t.forceRestClient_||tb())t.server_=new jo(t.repoInfo_,(s,i,r,o)=>{Bd(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>$d(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ye(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new vn(t.repoInfo_,e,(s,i,r,o)=>{Bd(t,s,i,r,o)},s=>{$d(t,s)},s=>{lA(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=ab(t.repoInfo_,()=>new oS(t.stats_,t.server_)),t.infoData_=new tS,t.infoSyncTree_=new Ud({startListening:(s,i,r,o)=>{let a=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(a=Aa(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),sh(t,"connected",!1),t.serverSyncTree_=new Ud({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,c)=>{const l=o(a,c);Rs(t.eventQueue_,s._path,l)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function cA(t){const n=t.infoData_.getNode(new Re(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function q_(t){return $S({timestamp:cA(t)})}function Bd(t,e,n,s,i){t.dataUpdateCount++;const r=new Re(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=xo(n,l=>ot(l));o=BS(t.serverSyncTree_,r,c,i)}else{const c=ot(n);o=VS(t.serverSyncTree_,r,c,i)}else if(s){const c=xo(n,l=>ot(l));o=US(t.serverSyncTree_,r,c)}else{const c=ot(n);o=Aa(t.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=rh(t,r)),Rs(t.eventQueue_,a,o)}function $d(t,e){sh(t,"connected",e),e===!1&&hA(t)}function lA(t,e){Mt(e,(n,s)=>{sh(t,n,s)})}function sh(t,e,n){const s=new Re("/.info/"+e),i=ot(n);t.infoData_.updateSnapshot(s,i);const r=Aa(t.infoSyncTree_,s,i);Rs(t.eventQueue_,s,r)}function uA(t){return t.nextWriteId_++}function hA(t){W_(t,"onDisconnectEvents");const e=q_(t),n=Ko();Cl(t.onDisconnect_,we(),(i,r)=>{const o=KS(i,r,t.serverSyncTree_,e);v_(n,i,o)});let s=[];Cl(n,we(),(i,r)=>{s=s.concat(Aa(t.serverSyncTree_,i,r));const o=gA(t,i);rh(t,o)}),t.onDisconnect_=Ko(),Rs(t.eventQueue_,we(),s)}function fA(t){t.persistentConnection_&&t.persistentConnection_.interrupt(iA)}function W_(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),rt(n,...e)}function z_(t,e,n){return x_(t.serverSyncTree_,e,n)||ge.EMPTY_NODE}function ih(t,e=t.transactionQueueTree_){if(e||ka(t,e),Ei(e)){const n=Q_(t,e);P(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&dA(t,xr(e),n)}else $_(e)&&Na(e,n=>{ih(t,n)})}function dA(t,e,n){const s=n.map(l=>l.currentWriteId),i=z_(t,e,s);let r=i;const o=i.hash();for(let l=0;l<n.length;l++){const u=n[l];P(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Pt(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;t.server_.put(c.toString(),a,l=>{W_(t,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(Vs(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();ka(t,nh(t.transactionQueueTree_,e)),ih(t,t.transactionQueueTree_),Rs(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)Or(h[f])}else{if(l==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Nt("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=l}rh(t,e)}},o)}function rh(t,e){const n=G_(t,e),s=xr(n),i=Q_(t,n);return pA(t,i,s),s}function pA(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=Pt(n,c.path);let u=!1,h;if(P(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,i=i.concat(Vs(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=rA)u=!0,h="maxretry",i=i.concat(Vs(t.serverSyncTree_,c.currentWriteId,!0));else{const f=z_(t,c.path,o);c.currentInputSnapshot=f;const p=e[a].update(f.val());if(p!==void 0){K_("transaction failed: Data returned ",p,c.path);let m=ot(p);typeof p=="object"&&p!=null&&Sn(p,".priority")||(m=m.updatePriority(f.getPriority()));const v=c.currentWriteId,C=q_(t),N=qS(m,f,C);c.currentOutputSnapshotRaw=m,c.currentOutputSnapshotResolved=N,c.currentWriteId=uA(t),o.splice(o.indexOf(v),1),i=i.concat(FS(t.serverSyncTree_,c.path,N,c.currentWriteId,c.applyLocally)),i=i.concat(Vs(t.serverSyncTree_,v,!0))}else u=!0,h="nodata",i=i.concat(Vs(t.serverSyncTree_,c.currentWriteId,!0))}Rs(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}ka(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Or(s[a]);ih(t,t.transactionQueueTree_)}function G_(t,e){let n,s=t.transactionQueueTree_;for(n=ie(e);n!==null&&Ei(s)===void 0;)s=nh(s,n),e=Ae(e),n=ie(e);return s}function Q_(t,e){const n=[];return Y_(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Y_(t,e,n){const s=Ei(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Na(e,i=>{Y_(t,i,n)})}function ka(t,e){const n=Ei(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,B_(e,n.length>0?n:void 0)}Na(e,s=>{ka(t,s)})}function gA(t,e){const n=xr(G_(t,e)),s=nh(t.transactionQueueTree_,e);return zS(s,i=>{bc(t,i)}),bc(t,s),H_(s,i=>{bc(t,i)}),n}function bc(t,e){const n=Ei(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(P(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(P(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Vs(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?B_(e,void 0):n.length=r+1,Rs(t.eventQueue_,xr(e),i);for(let o=0;o<s.length;o++)Or(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mA(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function _A(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Nt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Hd=function(t,e){const n=yA(t),s=n.namespace;n.domain==="firebase.com"&&Es(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Es("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||z0();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new ib(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Re(n.pathString)}},yA=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",c=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=mA(t.substring(u,h)));const f=_A(t.substring(Math.min(t.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const p=e.slice(0,l);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return ne(this._path)?null:l_(this._path)}get ref(){return new wi(this._repo,this._path)}get _queryIdentifier(){const e=Ad(this._queryParams),n=Bu(e);return n==="{}"?"default":n}get _queryObject(){return Ad(this._queryParams)}isEqual(e){if(e=Qn(e),!(e instanceof oh))return!1;const n=this._repo===e._repo,s=f_(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+kb(this._path)}}class wi extends oh{constructor(e,n){super(e,n,new Wu,!1)}get parent(){const e=h_(this._path);return e===null?null:new wi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}MS(wi);LS(wi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA="FIREBASE_DATABASE_EMULATOR_HOST",Ol={};let EA=!1;function wA(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Es("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),rt("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Hd(r,i),a=o.repoInfo,c,l;typeof process<"u"&&process.env&&(l=process.env[vA]),l?(c=!0,r=`http://${l}?ns=${a.namespace}`,o=Hd(r,i),a=o.repoInfo):c=!o.repoInfo.secure;const u=i&&c?new wl(wl.OWNER):new sb(t.name,t.options,e);ZS("Invalid Firebase Database URL",o),ne(o.path)||Es("Database URL must point to the root of a Firebase Database (not including a child path).");const h=IA(a,t,u,new nb(t.name,n));return new CA(h,t)}function TA(t,e){const n=Ol[e];(!n||n[t.key]!==t)&&Es(`Database ${e}(${t.repoInfo_}) has already been deleted.`),fA(t),delete n[t.key]}function IA(t,e,n,s){let i=Ol[e.name];i||(i={},Ol[e.name]=i);let r=i[t.toURLString()];return r&&Es("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new oA(t,EA,n,s),i[t.toURLString()]=r,r}class CA{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(aA(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new wi(this._repo,we())),this._rootInternal}_delete(){return this._rootInternal!==null&&(TA(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Es("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bA(t){H0(yi),cn(new Qt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return wA(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Rt(ld,ud,t),Rt(ld,ud,"esm2017")}vn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};vn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};bA();var SA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},U,ah=ah||{},z=SA||self;function Go(){}function Da(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Mr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function AA(t){return Object.prototype.hasOwnProperty.call(t,Sc)&&t[Sc]||(t[Sc]=++RA)}var Sc="closure_uid_"+(1e9*Math.random()>>>0),RA=0;function NA(t,e,n){return t.call.apply(t.bind,arguments)}function kA(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function ut(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ut=NA:ut=kA,ut.apply(null,arguments)}function oo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function et(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Yn(){this.s=this.s,this.o=this.o}var DA=0;Yn.prototype.s=!1;Yn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),DA!=0)&&AA(this)};Yn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const X_=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ch(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function jd(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Da(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function ht(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var OA=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{z.addEventListener("test",Go,e),z.removeEventListener("test",Go,e)}catch{}return t}();function Qo(t){return/^[\s\xa0]*$/.test(t)}var Kd=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ac(t,e){return t<e?-1:t>e?1:0}function Oa(){var t=z.navigator;return t&&(t=t.userAgent)?t:""}function tn(t){return Oa().indexOf(t)!=-1}function lh(t){return lh[" "](t),t}lh[" "]=Go;function PA(t){var e=LA;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var xA=tn("Opera"),ii=tn("Trident")||tn("MSIE"),J_=tn("Edge"),Pl=J_||ii,Z_=tn("Gecko")&&!(Oa().toLowerCase().indexOf("webkit")!=-1&&!tn("Edge"))&&!(tn("Trident")||tn("MSIE"))&&!tn("Edge"),MA=Oa().toLowerCase().indexOf("webkit")!=-1&&!tn("Edge");function ey(){var t=z.document;return t?t.documentMode:void 0}var Yo;e:{var Rc="",Nc=function(){var t=Oa();if(Z_)return/rv:([^\);]+)(\)|;)/.exec(t);if(J_)return/Edge\/([\d\.]+)/.exec(t);if(ii)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(MA)return/WebKit\/(\S+)/.exec(t);if(xA)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Nc&&(Rc=Nc?Nc[1]:""),ii){var kc=ey();if(kc!=null&&kc>parseFloat(Rc)){Yo=String(kc);break e}}Yo=Rc}var LA={};function FA(){return PA(function(){let t=0;const e=Kd(String(Yo)).split("."),n=Kd("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Ac(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Ac(i[2].length==0,r[2].length==0)||Ac(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var xl;if(z.document&&ii){var qd=ey();xl=qd||parseInt(Yo,10)||void 0}else xl=void 0;var UA=xl;function pr(t,e){if(ht.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Z_){e:{try{lh(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:VA[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&pr.X.h.call(this)}}et(pr,ht);var VA={2:"touch",3:"pen",4:"mouse"};pr.prototype.h=function(){pr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Lr="closure_listenable_"+(1e6*Math.random()|0),BA=0;function $A(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++BA,this.ba=this.ea=!1}function Pa(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function uh(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function ty(t){const e={};for(const n in t)e[n]=t[n];return e}const Wd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ny(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<Wd.length;r++)n=Wd[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function xa(t){this.src=t,this.g={},this.h=0}xa.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Ll(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new $A(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function Ml(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=X_(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Pa(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ll(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var hh="closure_lm_"+(1e6*Math.random()|0),Dc={};function sy(t,e,n,s,i){if(s&&s.once)return ry(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)sy(t,e[r],n,s,i);return null}return n=ph(n),t&&t[Lr]?t.N(e,n,Mr(s)?!!s.capture:!!s,i):iy(t,e,n,!1,s,i)}function iy(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Mr(i)?!!i.capture:!!i,a=dh(t);if(a||(t[hh]=a=new xa(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=HA(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)OA||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(ay(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function HA(){function t(n){return e.call(t.src,t.listener,n)}const e=jA;return t}function ry(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)ry(t,e[r],n,s,i);return null}return n=ph(n),t&&t[Lr]?t.O(e,n,Mr(s)?!!s.capture:!!s,i):iy(t,e,n,!0,s,i)}function oy(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)oy(t,e[r],n,s,i);else s=Mr(s)?!!s.capture:!!s,n=ph(n),t&&t[Lr]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Ll(r,n,s,i),-1<n&&(Pa(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=dh(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ll(e,n,s,i)),(n=-1<t?e[t]:null)&&fh(n))}function fh(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Lr])Ml(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(ay(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=dh(e))?(Ml(n,t),n.h==0&&(n.src=null,e[hh]=null)):Pa(t)}}}function ay(t){return t in Dc?Dc[t]:Dc[t]="on"+t}function jA(t,e){if(t.ba)t=!0;else{e=new pr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&fh(t),t=n.call(s,e)}return t}function dh(t){return t=t[hh],t instanceof xa?t:null}var Oc="__closure_events_fn_"+(1e9*Math.random()>>>0);function ph(t){return typeof t=="function"?t:(t[Oc]||(t[Oc]=function(e){return t.handleEvent(e)}),t[Oc])}function Ge(){Yn.call(this),this.i=new xa(this),this.P=this,this.I=null}et(Ge,Yn);Ge.prototype[Lr]=!0;Ge.prototype.removeEventListener=function(t,e,n,s){oy(this,t,e,n,s)};function Je(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new ht(e,t);else if(e instanceof ht)e.target=e.target||t;else{var i=e;e=new ht(s,t),ny(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=ao(o,s,!0,e)&&i}if(o=e.g=t,i=ao(o,s,!0,e)&&i,i=ao(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=ao(o,s,!1,e)&&i}Ge.prototype.M=function(){if(Ge.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Pa(n[s]);delete t.g[e],t.h--}}this.I=null};Ge.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ge.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function ao(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Ml(t.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var gh=z.JSON.stringify;function KA(){var t=uy;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class qA{constructor(){this.h=this.g=null}add(e,n){const s=cy.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var cy=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new WA,t=>t.reset());class WA{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function zA(t){z.setTimeout(()=>{throw t},0)}function ly(t,e){Fl||GA(),Ul||(Fl(),Ul=!0),uy.add(t,e)}var Fl;function GA(){var t=z.Promise.resolve(void 0);Fl=function(){t.then(QA)}}var Ul=!1,uy=new qA;function QA(){for(var t;t=KA();){try{t.h.call(t.g)}catch(n){zA(n)}var e=cy;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ul=!1}function Ma(t,e){Ge.call(this),this.h=t||1,this.g=e||z,this.j=ut(this.lb,this),this.l=Date.now()}et(Ma,Ge);U=Ma.prototype;U.ca=!1;U.R=null;U.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Je(this,"tick"),this.ca&&(mh(this),this.start()))}};U.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function mh(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}U.M=function(){Ma.X.M.call(this),mh(this),delete this.g};function _h(t,e,n){if(typeof t=="function")n&&(t=ut(t,n));else if(t&&typeof t.handleEvent=="function")t=ut(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:z.setTimeout(t,e||0)}function hy(t){t.g=_h(()=>{t.g=null,t.i&&(t.i=!1,hy(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class YA extends Yn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:hy(this)}M(){super.M(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gr(t){Yn.call(this),this.h=t,this.g={}}et(gr,Yn);var zd=[];function fy(t,e,n,s){Array.isArray(n)||(n&&(zd[0]=n.toString()),n=zd);for(var i=0;i<n.length;i++){var r=sy(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function dy(t){uh(t.g,function(e,n){this.g.hasOwnProperty(n)&&fh(e)},t),t.g={}}gr.prototype.M=function(){gr.X.M.call(this),dy(this)};gr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function La(){this.g=!0}La.prototype.Aa=function(){this.g=!1};function XA(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function JA(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function Bs(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+eR(t,n)+(s?" "+s:"")})}function ZA(t,e){t.info(function(){return"TIMEOUT: "+e})}La.prototype.info=function(){};function eR(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return gh(n)}catch{return e}}var Ns={},Gd=null;function Fa(){return Gd=Gd||new Ge}Ns.Pa="serverreachability";function py(t){ht.call(this,Ns.Pa,t)}et(py,ht);function mr(t){const e=Fa();Je(e,new py(e))}Ns.STAT_EVENT="statevent";function gy(t,e){ht.call(this,Ns.STAT_EVENT,t),this.stat=e}et(gy,ht);function mt(t){const e=Fa();Je(e,new gy(e,t))}Ns.Qa="timingevent";function my(t,e){ht.call(this,Ns.Qa,t),this.size=e}et(my,ht);function Fr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return z.setTimeout(function(){t()},e)}var Ua={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},_y={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function yh(){}yh.prototype.h=null;function Qd(t){return t.h||(t.h=t.i())}function yy(){}var Ur={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function vh(){ht.call(this,"d")}et(vh,ht);function Eh(){ht.call(this,"c")}et(Eh,ht);var Vl;function Va(){}et(Va,yh);Va.prototype.g=function(){return new XMLHttpRequest};Va.prototype.i=function(){return{}};Vl=new Va;function Vr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new gr(this),this.O=tR,t=Pl?125:void 0,this.T=new Ma(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new vy}function vy(){this.i=null,this.g="",this.h=!1}var tR=45e3,Bl={},Xo={};U=Vr.prototype;U.setTimeout=function(t){this.O=t};function $l(t,e,n){t.K=1,t.v=$a(wn(e)),t.s=n,t.P=!0,Ey(t,null)}function Ey(t,e){t.F=Date.now(),Br(t),t.A=wn(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Ry(n.i,"t",s),t.C=0,n=t.l.H,t.h=new vy,t.g=Qy(t.l,n?e:null,!t.s),0<t.N&&(t.L=new YA(ut(t.La,t,t.g),t.N)),fy(t.S,t.g,"readystatechange",t.ib),e=t.H?ty(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),mr(),XA(t.j,t.u,t.A,t.m,t.U,t.s)}U.ib=function(t){t=t.target;const e=this.L;e&&yn(t)==3?e.l():this.La(t)};U.La=function(t){try{if(t==this.g)e:{const u=yn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Pl||this.g&&(this.h.h||this.g.fa()||Zd(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?mr(3):mr(2)),Ba(this);var n=this.g.aa();this.Y=n;t:if(wy(this)){var s=Zd(this.g);t="";var i=s.length,r=yn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){us(this),Qi(this);var o="";break t}this.h.i=new z.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,JA(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Qo(a)){var l=a;break t}}l=null}if(n=l)Bs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Hl(this,n);else{this.i=!1,this.o=3,mt(12),us(this),Qi(this);break e}}this.P?(Ty(this,u,o),Pl&&this.i&&u==3&&(fy(this.S,this.T,"tick",this.hb),this.T.start())):(Bs(this.j,this.m,o,null),Hl(this,o)),u==4&&us(this),this.i&&!this.I&&(u==4?qy(this.l,this):(this.i=!1,Br(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,mt(12)):(this.o=0,mt(13)),us(this),Qi(this)}}}catch{}finally{}};function wy(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Ty(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=nR(t,n),i==Xo){e==4&&(t.o=4,mt(14),s=!1),Bs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Bl){t.o=4,mt(15),Bs(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Bs(t.j,t.m,i,null),Hl(t,i);wy(t)&&i!=Xo&&i!=Bl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,mt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ah(e),e.K=!0,mt(11))):(Bs(t.j,t.m,n,"[Invalid Chunked Response]"),us(t),Qi(t))}U.hb=function(){if(this.g){var t=yn(this.g),e=this.g.fa();this.C<e.length&&(Ba(this),Ty(this,t,e),this.i&&t!=4&&Br(this))}};function nR(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Xo:(n=Number(e.substring(n,s)),isNaN(n)?Bl:(s+=1,s+n>e.length?Xo:(e=e.substr(s,n),t.C=s+n,e)))}U.cancel=function(){this.I=!0,us(this)};function Br(t){t.V=Date.now()+t.O,Iy(t,t.O)}function Iy(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Fr(ut(t.gb,t),e)}function Ba(t){t.B&&(z.clearTimeout(t.B),t.B=null)}U.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(ZA(this.j,this.A),this.K!=2&&(mr(),mt(17)),us(this),this.o=2,Qi(this)):Iy(this,this.V-t)};function Qi(t){t.l.G==0||t.I||qy(t.l,t)}function us(t){Ba(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,mh(t.T),dy(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Hl(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||jl(n.h,t))){if(!t.J&&jl(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ea(n),Ka(n);else break e;Sh(n),mt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Fr(ut(n.cb,n),6e3));if(1>=Dy(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else hs(n,11)}else if((t.J||n.g==t)&&ea(n),!Qo(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=s.h;r.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(wh(r,r.h),r.h=null))}if(s.D){const _=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(s.za=_,Ne(s.F,s.D,_))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Gy(s,s.H?s.ka:null,s.V),o.J){Oy(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Ba(a),Br(a)),s.g=o}else jy(s);0<n.i.length&&qa(n)}else l[0]!="stop"&&l[0]!="close"||hs(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?hs(n,7):bh(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}mr(4)}catch{}}function sR(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Da(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function iR(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Da(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Cy(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Da(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=iR(t),s=sR(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var by=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rR(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ms(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ms){this.h=e!==void 0?e:t.h,Jo(this,t.j),this.s=t.s,this.g=t.g,Zo(this,t.m),this.l=t.l,e=t.i;var n=new _r;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Yd(this,n),this.o=t.o}else t&&(n=String(t).match(by))?(this.h=!!e,Jo(this,n[1]||"",!0),this.s=Fi(n[2]||""),this.g=Fi(n[3]||"",!0),Zo(this,n[4]),this.l=Fi(n[5]||"",!0),Yd(this,n[6]||"",!0),this.o=Fi(n[7]||"")):(this.h=!!e,this.i=new _r(null,this.h))}ms.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ui(e,Xd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ui(e,Xd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ui(n,n.charAt(0)=="/"?cR:aR,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ui(n,uR)),t.join("")};function wn(t){return new ms(t)}function Jo(t,e,n){t.j=n?Fi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Zo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Yd(t,e,n){e instanceof _r?(t.i=e,hR(t.i,t.h)):(n||(e=Ui(e,lR)),t.i=new _r(e,t.h))}function Ne(t,e,n){t.i.set(e,n)}function $a(t){return Ne(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Fi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ui(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,oR),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function oR(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Xd=/[#\/\?@]/g,aR=/[#\?:]/g,cR=/[#\?]/g,lR=/[#\?@]/g,uR=/#/g;function _r(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Xn(t){t.g||(t.g=new Map,t.h=0,t.i&&rR(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}U=_r.prototype;U.add=function(t,e){Xn(this),this.i=null,t=Ti(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Sy(t,e){Xn(t),e=Ti(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Ay(t,e){return Xn(t),e=Ti(t,e),t.g.has(e)}U.forEach=function(t,e){Xn(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};U.oa=function(){Xn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};U.W=function(t){Xn(this);let e=[];if(typeof t=="string")Ay(this,t)&&(e=e.concat(this.g.get(Ti(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};U.set=function(t,e){return Xn(this),this.i=null,t=Ti(this,t),Ay(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};U.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Ry(t,e,n){Sy(t,e),0<n.length&&(t.i=null,t.g.set(Ti(t,e),ch(n)),t.h+=n.length)}U.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Ti(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function hR(t,e){e&&!t.j&&(Xn(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Sy(this,s),Ry(this,i,n))},t)),t.j=e}var fR=class{constructor(e,n){this.h=e,this.g=n}};function Ny(t){this.l=t||dR,z.PerformanceNavigationTiming?(t=z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(z.g&&z.g.Ga&&z.g.Ga()&&z.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var dR=10;function ky(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Dy(t){return t.h?1:t.g?t.g.size:0}function jl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function wh(t,e){t.g?t.g.add(e):t.h=e}function Oy(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Ny.prototype.cancel=function(){if(this.i=Py(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Py(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return ch(t.i)}function Th(){}Th.prototype.stringify=function(t){return z.JSON.stringify(t,void 0)};Th.prototype.parse=function(t){return z.JSON.parse(t,void 0)};function pR(){this.g=new Th}function gR(t,e,n){const s=n||"";try{Cy(t,function(i,r){let o=i;Mr(i)&&(o=gh(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function mR(t,e){const n=new La;if(z.Image){const s=new Image;s.onload=oo(co,n,s,"TestLoadImage: loaded",!0,e),s.onerror=oo(co,n,s,"TestLoadImage: error",!1,e),s.onabort=oo(co,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=oo(co,n,s,"TestLoadImage: timeout",!1,e),z.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function co(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function $r(t){this.l=t.ac||null,this.j=t.jb||!1}et($r,yh);$r.prototype.g=function(){return new Ha(this.l,this.j)};$r.prototype.i=function(t){return function(){return t}}({});function Ha(t,e){Ge.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Ih,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}et(Ha,Ge);var Ih=0;U=Ha.prototype;U.open=function(t,e){if(this.readyState!=Ih)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,yr(this)};U.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||z).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};U.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Hr(this)),this.readyState=Ih};U.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,yr(this)),this.g&&(this.readyState=3,yr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;xy(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function xy(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}U.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Hr(this):yr(this),this.readyState==3&&xy(this)}};U.Va=function(t){this.g&&(this.response=this.responseText=t,Hr(this))};U.Ua=function(t){this.g&&(this.response=t,Hr(this))};U.ga=function(){this.g&&Hr(this)};function Hr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,yr(t)}U.setRequestHeader=function(t,e){this.v.append(t,e)};U.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};U.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function yr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ha.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var _R=z.JSON.parse;function Pe(t){Ge.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=My,this.K=this.L=!1}et(Pe,Ge);var My="",yR=/^https?$/i,vR=["POST","PUT"];U=Pe.prototype;U.Ka=function(t){this.L=t};U.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Vl.g(),this.C=this.u?Qd(this.u):Qd(Vl),this.g.onreadystatechange=ut(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Jd(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=z.FormData&&t instanceof z.FormData,!(0<=X_(vR,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Uy(this),0<this.B&&((this.K=ER(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ut(this.qa,this)):this.A=_h(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Jd(this,r)}};function ER(t){return ii&&FA()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}U.qa=function(){typeof ah<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Je(this,"timeout"),this.abort(8))};function Jd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ly(t),ja(t)}function Ly(t){t.D||(t.D=!0,Je(t,"complete"),Je(t,"error"))}U.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Je(this,"complete"),Je(this,"abort"),ja(this))};U.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ja(this,!0)),Pe.X.M.call(this)};U.Ha=function(){this.s||(this.F||this.v||this.l?Fy(this):this.fb())};U.fb=function(){Fy(this)};function Fy(t){if(t.h&&typeof ah<"u"&&(!t.C[1]||yn(t)!=4||t.aa()!=2)){if(t.v&&yn(t)==4)_h(t.Ha,0,t);else if(Je(t,"readystatechange"),yn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(by)[1]||null;if(!i&&z.self&&z.self.location){var r=z.self.location.protocol;i=r.substr(0,r.length-1)}s=!yR.test(i?i.toLowerCase():"")}n=s}if(n)Je(t,"complete"),Je(t,"success");else{t.m=6;try{var o=2<yn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Ly(t)}}finally{ja(t)}}}}function ja(t,e){if(t.g){Uy(t);const n=t.g,s=t.C[0]?Go:null;t.g=null,t.C=null,e||Je(t,"ready");try{n.onreadystatechange=s}catch{}}}function Uy(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(z.clearTimeout(t.A),t.A=null)}function yn(t){return t.g?t.g.readyState:0}U.aa=function(){try{return 2<yn(this)?this.g.status:-1}catch{return-1}};U.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};U.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),_R(e)}};function Zd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case My:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}U.Ea=function(){return this.m};U.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Vy(t){let e="";return uh(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Ch(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Vy(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ne(t,e,n))}function Pi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function By(t){this.Ca=0,this.i=[],this.j=new La,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Pi("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Pi("baseRetryDelayMs",5e3,t),this.bb=Pi("retryDelaySeedMs",1e4,t),this.$a=Pi("forwardChannelMaxRetries",2,t),this.ta=Pi("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Ny(t&&t.concurrentRequestLimit),this.Fa=new pR,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}U=By.prototype;U.ma=8;U.G=1;function bh(t){if($y(t),t.G==3){var e=t.U++,n=wn(t.F);Ne(n,"SID",t.I),Ne(n,"RID",e),Ne(n,"TYPE","terminate"),jr(t,n),e=new Vr(t,t.j,e,void 0),e.K=2,e.v=$a(wn(n)),n=!1,z.navigator&&z.navigator.sendBeacon&&(n=z.navigator.sendBeacon(e.v.toString(),"")),!n&&z.Image&&(new Image().src=e.v,n=!0),n||(e.g=Qy(e.l,null),e.g.da(e.v)),e.F=Date.now(),Br(e)}zy(t)}function Ka(t){t.g&&(Ah(t),t.g.cancel(),t.g=null)}function $y(t){Ka(t),t.u&&(z.clearTimeout(t.u),t.u=null),ea(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&z.clearTimeout(t.m),t.m=null)}function qa(t){ky(t.h)||t.m||(t.m=!0,ly(t.Ja,t),t.C=0)}function wR(t,e){return Dy(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Fr(ut(t.Ja,t,e),Wy(t,t.C)),t.C++,!0)}U.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Vr(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=ty(r),ny(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Hy(this,i,e),n=wn(this.F),Ne(n,"RID",t),Ne(n,"CVER",22),this.D&&Ne(n,"X-HTTP-Session-Id",this.D),jr(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(Vy(r)))+"&"+e:this.o&&Ch(n,this.o,r)),wh(this.h,i),this.Ya&&Ne(n,"TYPE","init"),this.O?(Ne(n,"$req",e),Ne(n,"SID","null"),i.Z=!0,$l(i,n,null)):$l(i,n,e),this.G=2}}else this.G==3&&(t?ep(this,t):this.i.length==0||ky(this.h)||ep(this))};function ep(t,e){var n;e?n=e.m:n=t.U++;const s=wn(t.F);Ne(s,"SID",t.I),Ne(s,"RID",n),Ne(s,"AID",t.T),jr(t,s),t.o&&t.s&&Ch(s,t.o,t.s),n=new Vr(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Hy(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),wh(t.h,n),$l(n,s,e)}function jr(t,e){t.ia&&uh(t.ia,function(n,s){Ne(e,s,n)}),t.l&&Cy({},function(n,s){Ne(e,s,n)})}function Hy(t,e,n){n=Math.min(t.i.length,n);var s=t.l?ut(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let l=i[c].h;const u=i[c].g;if(l-=r,0>l)r=Math.max(0,i[c].h-100),a=!1;else try{gR(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function jy(t){t.g||t.u||(t.Z=1,ly(t.Ia,t),t.A=0)}function Sh(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Fr(ut(t.Ia,t),Wy(t,t.A)),t.A++,!0)}U.Ia=function(){if(this.u=null,Ky(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Fr(ut(this.eb,this),t)}};U.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,mt(10),Ka(this),Ky(this))};function Ah(t){t.B!=null&&(z.clearTimeout(t.B),t.B=null)}function Ky(t){t.g=new Vr(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=wn(t.sa);Ne(e,"RID","rpc"),Ne(e,"SID",t.I),Ne(e,"CI",t.L?"0":"1"),Ne(e,"AID",t.T),Ne(e,"TYPE","xmlhttp"),jr(t,e),t.o&&t.s&&Ch(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=$a(wn(e)),n.s=null,n.P=!0,Ey(n,t)}U.cb=function(){this.v!=null&&(this.v=null,Ka(this),Sh(this),mt(19))};function ea(t){t.v!=null&&(z.clearTimeout(t.v),t.v=null)}function qy(t,e){var n=null;if(t.g==e){ea(t),Ah(t),t.g=null;var s=2}else if(jl(t.h,e))n=e.D,Oy(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Fa(),Je(s,new my(s,n)),qa(t)}else jy(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&wR(t,e)||s==2&&Sh(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:hs(t,5);break;case 4:hs(t,10);break;case 3:hs(t,6);break;default:hs(t,2)}}}function Wy(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function hs(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=ut(t.kb,t);n||(n=new ms("//www.google.com/images/cleardot.gif"),z.location&&z.location.protocol=="http"||Jo(n,"https"),$a(n)),mR(n.toString(),s)}else mt(2);t.G=0,t.l&&t.l.va(e),zy(t),$y(t)}U.kb=function(t){t?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function zy(t){if(t.G=0,t.la=[],t.l){const e=Py(t.h);(e.length!=0||t.i.length!=0)&&(jd(t.la,e),jd(t.la,t.i),t.h.i.length=0,ch(t.i),t.i.length=0),t.l.ua()}}function Gy(t,e,n){var s=n instanceof ms?wn(n):new ms(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Zo(s,s.m);else{var i=z.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new ms(null,void 0);s&&Jo(r,s),e&&(r.g=e),i&&Zo(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&Ne(s,n,e),Ne(s,"VER",t.ma),jr(t,s),s}function Qy(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Pe(new $r({jb:!0})):new Pe(t.ra),e.Ka(t.H),e}function Yy(){}U=Yy.prototype;U.xa=function(){};U.wa=function(){};U.va=function(){};U.ua=function(){};U.Ra=function(){};function ta(){if(ii&&!(10<=Number(UA)))throw Error("Environmental error: no available transport.")}ta.prototype.g=function(t,e){return new kt(t,e)};function kt(t,e){Ge.call(this),this.g=new By(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Qo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Qo(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ii(this)}et(kt,Ge);kt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;mt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Gy(t,null,t.V),qa(t)};kt.prototype.close=function(){bh(this.g)};kt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=gh(t),t=n);e.i.push(new fR(e.ab++,t)),e.G==3&&qa(e)};kt.prototype.M=function(){this.g.l=null,delete this.j,bh(this.g),delete this.g,kt.X.M.call(this)};function Xy(t){vh.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}et(Xy,vh);function Jy(){Eh.call(this),this.status=1}et(Jy,Eh);function Ii(t){this.g=t}et(Ii,Yy);Ii.prototype.xa=function(){Je(this.g,"a")};Ii.prototype.wa=function(t){Je(this.g,new Xy(t))};Ii.prototype.va=function(t){Je(this.g,new Jy)};Ii.prototype.ua=function(){Je(this.g,"b")};ta.prototype.createWebChannel=ta.prototype.g;kt.prototype.send=kt.prototype.u;kt.prototype.open=kt.prototype.m;kt.prototype.close=kt.prototype.close;Ua.NO_ERROR=0;Ua.TIMEOUT=8;Ua.HTTP_ERROR=6;_y.COMPLETE="complete";yy.EventType=Ur;Ur.OPEN="a";Ur.CLOSE="b";Ur.ERROR="c";Ur.MESSAGE="d";Ge.prototype.listen=Ge.prototype.N;Pe.prototype.listenOnce=Pe.prototype.O;Pe.prototype.getLastError=Pe.prototype.Oa;Pe.prototype.getLastErrorCode=Pe.prototype.Ea;Pe.prototype.getStatus=Pe.prototype.aa;Pe.prototype.getResponseJson=Pe.prototype.Sa;Pe.prototype.getResponseText=Pe.prototype.fa;Pe.prototype.send=Pe.prototype.da;Pe.prototype.setWithCredentials=Pe.prototype.Ka;var TR=function(){return new ta},IR=function(){return Fa()},Pc=Ua,CR=_y,bR=Ns,tp={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},SR=$r,lo=yy,AR=Pe;const np="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ci="9.20.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=new Rr("@firebase/firestore");function sp(){return Cs.logLevel}function V(t,...e){if(Cs.logLevel<=ce.DEBUG){const n=e.map(Rh);Cs.debug(`Firestore (${Ci}): ${t}`,...n)}}function Tn(t,...e){if(Cs.logLevel<=ce.ERROR){const n=e.map(Rh);Cs.error(`Firestore (${Ci}): ${t}`,...n)}}function na(t,...e){if(Cs.logLevel<=ce.WARN){const n=e.map(Rh);Cs.warn(`Firestore (${Ci}): ${t}`,...n)}}function Rh(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t="Unexpected state"){const e=`FIRESTORE (${Ci}) INTERNAL ASSERTION FAILED: `+t;throw Tn(e),new Error(e)}function $e(t,e){t||X()}function he(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class RR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(it.UNAUTHENTICATED))}shutdown(){}}class NR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class kR{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new Bn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Bn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Bn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?($e(typeof s.accessToken=="string"),new Zy(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return $e(e===null||typeof e=="string"),new it(e)}}class DR{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=it.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class OR{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new DR(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class PR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xR{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=r=>{r.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?i(r):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?($e(typeof n.token=="string"),this.T=n.token,new PR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=MR(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function ye(t,e){return t<e?-1:t>e?1:0}function ri(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return _t.fromMillis(Date.now())}static fromDate(e){return _t.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new _t(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new _t(0,0))}static max(){return new Y(new _t(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,n,s){n===void 0?n=0:n>e.length&&X(),s===void 0?s=e.length-n:s>e.length-n&&X(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return vr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof vr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ke extends vr{construct(e,n,s){return new ke(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new K(D.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new ke(n)}static emptyPath(){return new ke([])}}const LR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Et extends vr{construct(e,n,s){return new Et(e,n,s)}static isValidIdentifier(e){return LR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Et(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new K(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new K(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new K(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new K(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Et(n)}static emptyPath(){return new Et([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(ke.fromString(e))}static fromName(e){return new q(ke.fromString(e).popFirst(5))}static empty(){return new q(ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new ke(e.slice()))}}function FR(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(s===1e9?new _t(n+1,0):new _t(n,s));return new Wn(i,q.empty(),e)}function UR(t){return new Wn(t.readTime,t.key,-1)}class Wn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Wn(Y.min(),q.empty(),-1)}static max(){return new Wn(Y.max(),q.empty(),-1)}}function VR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:ye(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $R{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nh(t){if(t.code!==D.FAILED_PRECONDITION||t.message!==BR)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,s)=>{n(e)})}static reject(e){return new S((n,s)=>{s(e)})}static waitFor(e){return new S((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(e){let n=S.resolve(!1);for(const s of e)n=n.next(i=>i?S.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new S((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new S((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Kr(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}kh.ct=-1;function Wa(t){return t==null}function Kl(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ip(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function za(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function HR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,n){this.comparator=e,this.root=n||Qe.EMPTY}insert(e,n){return new Ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new Ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new uo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new uo(this.root,e,this.comparator,!1)}getReverseIterator(){return new uo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new uo(this.root,e,this.comparator,!0)}}class uo{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Qe.RED,this.left=i??Qe.EMPTY,this.right=r??Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Qe(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Qe.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Qe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.comparator=e,this.data=new Ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new rp(this.data.getIterator())}getIteratorFrom(e){return new rp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof He)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new He(this.comparator);return n.data=e,n}}class rp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.fields=e,e.sort(Et.comparator)}static empty(){return new Pn([])}unionWith(e){let n=new He(Et.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Pn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ri(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new jR("Invalid base64 string: "+i):i}}(e);return new dt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new dt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const KR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zn(t){if($e(!!t),typeof t=="string"){let e=0;const n=KR.exec(t);if($e(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Fe(t.seconds),nanos:Fe(t.nanos)}}function Fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function oi(t){return typeof t=="string"?dt.fromBase64String(t):dt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tv(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function nv(t){const e=t.mapValue.fields.__previous_value__;return tv(e)?nv(e):e}function Er(t){const e=zn(t.mapValue.fields.__local_write_time__.timestampValue);return new _t(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e,n,s,i,r,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class wr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new wr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof wr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function bs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?tv(t)?4:WR(t)?9007199254740991:10:X()}function un(t,e){if(t===e)return!0;const n=bs(t);if(n!==bs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Er(t).isEqual(Er(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=zn(s.timestampValue),o=zn(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return oi(s.bytesValue).isEqual(oi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Fe(s.geoPointValue.latitude)===Fe(i.geoPointValue.latitude)&&Fe(s.geoPointValue.longitude)===Fe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Fe(s.integerValue)===Fe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=Fe(s.doubleValue),o=Fe(i.doubleValue);return r===o?Kl(r)===Kl(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return ri(t.arrayValue.values||[],e.arrayValue.values||[],un);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(ip(r)!==ip(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!un(r[a],o[a])))return!1;return!0}(t,e);default:return X()}}function Tr(t,e){return(t.values||[]).find(n=>un(n,e))!==void 0}function ai(t,e){if(t===e)return 0;const n=bs(t),s=bs(e);if(n!==s)return ye(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ye(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=Fe(i.integerValue||i.doubleValue),a=Fe(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return op(t.timestampValue,e.timestampValue);case 4:return op(Er(t),Er(e));case 5:return ye(t.stringValue,e.stringValue);case 6:return function(i,r){const o=oi(i),a=oi(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ye(o[c],a[c]);if(l!==0)return l}return ye(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=ye(Fe(i.latitude),Fe(r.latitude));return o!==0?o:ye(Fe(i.longitude),Fe(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=ai(o[c],a[c]);if(l)return l}return ye(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===ho.mapValue&&r===ho.mapValue)return 0;if(i===ho.mapValue)return 1;if(r===ho.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ye(a[u],l[u]);if(h!==0)return h;const f=ai(o[a[u]],c[l[u]]);if(f!==0)return f}return ye(a.length,l.length)}(t.mapValue,e.mapValue);default:throw X()}}function op(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=zn(t),s=zn(e),i=ye(n.seconds,s.seconds);return i!==0?i:ye(n.nanos,s.nanos)}function ci(t){return ql(t)}function ql(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=zn(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?oi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,q.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=ql(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${ql(s.fields[a])}`;return r+"}"}(t.mapValue):X();var e,n}function Wl(t){return!!t&&"integerValue"in t}function Dh(t){return!!t&&"arrayValue"in t}function ap(t){return!!t&&"nullValue"in t}function cp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function xc(t){return!!t&&"mapValue"in t}function Yi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return za(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Yi(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Yi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function WR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.value=e}static empty(){return new nn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!xc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Yi(n)}setAll(e){let n=Et.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Yi(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());xc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return un(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];xc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){za(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new nn(Yi(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new at(e,0,Y.min(),Y.min(),Y.min(),nn.empty(),0)}static newFoundDocument(e,n,s,i){return new at(e,1,n,Y.min(),s,i,0)}static newNoDocument(e,n){return new at(e,2,n,Y.min(),Y.min(),nn.empty(),0)}static newUnknownDocument(e,n){return new at(e,3,n,Y.min(),Y.min(),nn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=nn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=nn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof at&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new at(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,n){this.position=e,this.inclusive=n}}function lp(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=q.comparator(q.fromName(o.referenceValue),n.key):s=ai(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function up(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!un(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,n="asc"){this.field=e,this.dir=n}}function zR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{}class Be extends sv{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new QR(e,n,s):n==="array-contains"?new JR(e,s):n==="in"?new ZR(e,s):n==="not-in"?new eN(e,s):n==="array-contains-any"?new tN(e,s):new Be(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new YR(e,s):new XR(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ai(n,this.value)):n!==null&&bs(this.value)===bs(n)&&this.matchesComparison(ai(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class hn extends sv{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new hn(e,n)}matches(e){return iv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function iv(t){return t.op==="and"}function rv(t){return GR(t)&&iv(t)}function GR(t){for(const e of t.filters)if(e instanceof hn)return!1;return!0}function zl(t){if(t instanceof Be)return t.field.canonicalString()+t.op.toString()+ci(t.value);if(rv(t))return t.filters.map(e=>zl(e)).join(",");{const e=t.filters.map(n=>zl(n)).join(",");return`${t.op}(${e})`}}function ov(t,e){return t instanceof Be?function(n,s){return s instanceof Be&&n.op===s.op&&n.field.isEqual(s.field)&&un(n.value,s.value)}(t,e):t instanceof hn?function(n,s){return s instanceof hn&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&ov(r,s.filters[o]),!0):!1}(t,e):void X()}function av(t){return t instanceof Be?function(e){return`${e.field.canonicalString()} ${e.op} ${ci(e.value)}`}(t):t instanceof hn?function(e){return e.op.toString()+" {"+e.getFilters().map(av).join(" ,")+"}"}(t):"Filter"}class QR extends Be{constructor(e,n,s){super(e,n,s),this.key=q.fromName(s.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class YR extends Be{constructor(e,n){super(e,"in",n),this.keys=cv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class XR extends Be{constructor(e,n){super(e,"not-in",n),this.keys=cv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function cv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>q.fromName(s.referenceValue))}class JR extends Be{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Dh(n)&&Tr(n.arrayValue,this.value)}}class ZR extends Be{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Tr(this.value.arrayValue,n)}}class eN extends Be{constructor(e,n){super(e,"not-in",n)}matches(e){if(Tr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Tr(this.value.arrayValue,n)}}class tN extends Be{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Dh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Tr(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function hp(t,e=null,n=[],s=[],i=null,r=null,o=null){return new nN(t,e,n,s,i,r,o)}function Oh(t){const e=he(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>zl(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Wa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ci(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ci(s)).join(",")),e.ft=n}return e.ft}function Ph(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!zR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ov(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!up(t.startAt,e.startAt)&&up(t.endAt,e.endAt)}function Gl(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this.wt=null,this.startAt,this.endAt}}function sN(t,e,n,s,i,r,o,a){return new Ga(t,e,n,s,i,r,o,a)}function Qa(t){return new Ga(t)}function fp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function iN(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function rN(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function oN(t){return t.collectionGroup!==null}function Qs(t){const e=he(t);if(e.dt===null){e.dt=[];const n=rN(e),s=iN(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new Xi(n)),e.dt.push(new Xi(Et.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.dt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Xi(Et.keyField(),r))}}}return e.dt}function In(t){const e=he(t);if(!e.wt)if(e.limitType==="F")e.wt=hp(e.path,e.collectionGroup,Qs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Qs(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Xi(r.field,o))}const s=e.endAt?new sa(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new sa(e.startAt.position,e.startAt.inclusive):null;e.wt=hp(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.wt}function Ql(t,e,n){return new Ga(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ya(t,e){return Ph(In(t),In(e))&&t.limitType===e.limitType}function lv(t){return`${Oh(In(t))}|lt:${t.limitType}`}function Yl(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>av(s)).join(", ")}]`),Wa(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ci(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ci(s)).join(",")),`Target(${n})`}(In(t))}; limitType=${t.limitType})`}function Xa(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):q.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of Qs(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=lp(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Qs(n),s)||n.endAt&&!function(i,r,o){const a=lp(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Qs(n),s))}(t,e)}function aN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function uv(t){return(e,n)=>{let s=!1;for(const i of Qs(t)){const r=cN(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function cN(t,e,n){const s=t.field.isKeyField()?q.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?ai(a,c):X()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return X()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){za(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return HR(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lN=new Ze(q.comparator);function Gn(){return lN}const hv=new Ze(q.comparator);function Vi(...t){let e=hv;for(const n of t)e=e.insert(n.key,n);return e}function uN(t){let e=hv;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function fs(){return Ji()}function fv(){return Ji()}function Ji(){return new bi(t=>t.toString(),(t,e)=>t.isEqual(e))}const hN=new He(q.comparator);function le(...t){let e=hN;for(const n of t)e=e.add(n);return e}const fN=new He(ye);function dv(){return fN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dN(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Kl(e)?"-0":e}}function pN(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(){this._=void 0}}function gN(t,e,n){return t instanceof Xl?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof ia?pv(t,e):t instanceof ra?gv(t,e):function(s,i){const r=_N(s,i),o=dp(r)+dp(s._t);return Wl(r)&&Wl(s._t)?pN(o):dN(s.serializer,o)}(t,e)}function mN(t,e,n){return t instanceof ia?pv(t,e):t instanceof ra?gv(t,e):n}function _N(t,e){return t instanceof Jl?Wl(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Xl extends Ja{}class ia extends Ja{constructor(e){super(),this.elements=e}}function pv(t,e){const n=mv(e);for(const s of t.elements)n.some(i=>un(i,s))||n.push(s);return{arrayValue:{values:n}}}class ra extends Ja{constructor(e){super(),this.elements=e}}function gv(t,e){let n=mv(e);for(const s of t.elements)n=n.filter(i=>!un(i,s));return{arrayValue:{values:n}}}class Jl extends Ja{constructor(e,n){super(),this.serializer=e,this._t=n}}function dp(t){return Fe(t.integerValue||t.doubleValue)}function mv(t){return Dh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function yN(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof ia&&s instanceof ia||n instanceof ra&&s instanceof ra?ri(n.elements,s.elements,un):n instanceof Jl&&s instanceof Jl?un(n._t,s._t):n instanceof Xl&&s instanceof Xl}(t.transform,e.transform)}class _s{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new _s}static exists(e){return new _s(void 0,e)}static updateTime(e){return new _s(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Co(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class xh{}function _v(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new EN(t.key,_s.none()):new Mh(t.key,t.data,_s.none());{const n=t.data,s=nn.empty();let i=new He(Et.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Za(t.key,s,new Pn(i.toArray()),_s.none())}}function vN(t,e,n){t instanceof Mh?function(s,i,r){const o=s.value.clone(),a=gp(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Za?function(s,i,r){if(!Co(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=gp(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(yv(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Zi(t,e,n,s){return t instanceof Mh?function(i,r,o,a){if(!Co(i.precondition,r))return o;const c=i.value.clone(),l=mp(i.fieldTransforms,a,r);return c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Za?function(i,r,o,a){if(!Co(i.precondition,r))return o;const c=mp(i.fieldTransforms,a,r),l=r.data;return l.setAll(yv(i)),l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return Co(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function pp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ri(n,s,(i,r)=>yN(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Mh extends xh{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Za extends xh{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function yv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function gp(t,e,n){const s=new Map;$e(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,mN(o,a,n[i]))}return s}function mp(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,gN(r,o,e))}return s}class EN extends xh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wN{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&vN(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Zi(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Zi(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=fv();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const c=_v(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(Y.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&ri(this.mutations,e.mutations,(n,s)=>pp(n,s))&&ri(this.baseMutations,e.baseMutations,(n,s)=>pp(n,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le,se;function vv(t){if(t===void 0)return Tn("GRPC error has no .code"),D.UNKNOWN;switch(t){case Le.OK:return D.OK;case Le.CANCELLED:return D.CANCELLED;case Le.UNKNOWN:return D.UNKNOWN;case Le.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Le.INTERNAL:return D.INTERNAL;case Le.UNAVAILABLE:return D.UNAVAILABLE;case Le.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Le.NOT_FOUND:return D.NOT_FOUND;case Le.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Le.ABORTED:return D.ABORTED;case Le.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Le.DATA_LOSS:return D.DATA_LOSS;default:return X()}}(se=Le||(Le={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return fo}static getOrCreateInstance(){return fo===null&&(fo=new Lh),fo}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let fo=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,qr.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new ec(Y.min(),i,dv(),Gn(),le())}}class qr{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new qr(s,n,le(),le(),le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n,s,i){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=i}}class Ev{constructor(e,n){this.targetId=e,this.Et=n}}class wv{constructor(e,n,s=dt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class _p{constructor(){this.At=0,this.Rt=vp(),this.vt=dt.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=le(),n=le(),s=le();return this.Rt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:X()}}),new qr(this.vt,this.bt,e,n,s)}xt(){this.Pt=!1,this.Rt=vp()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class CN{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=Gn(),this.qt=yp(),this.Ut=new He(ye)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const s=this.jt(n);switch(e.state){case 0:this.Wt(n)&&s.Dt(e.resumeToken);break;case 1:s.$t(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.$t(),s.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(s.Mt(),s.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,i)=>{this.Wt(i)&&n(i)})}Jt(e){var n;const s=e.targetId,i=e.Et.count,r=this.Yt(s);if(r){const o=r.target;if(Gl(o))if(i===0){const a=new q(o.path);this.Qt(s,a,at.newNoDocument(a,Y.min()))}else $e(i===1);else{const a=this.Zt(s);a!==i&&(this.Ht(s),this.Ut=this.Ut.add(s),(n=Lh.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((r,o)=>{const a=this.Yt(o);if(a){if(r.current&&Gl(a.target)){const c=new q(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,at.newNoDocument(c,e))}r.St&&(n.set(o,r.Ct()),r.xt())}});let s=le();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Yt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(e));const i=new ec(e,n,this.Ut,this.Lt,s);return this.Lt=Gn(),this.qt=yp(),this.Ut=new He(ye),i}Gt(e,n){if(!this.Wt(e))return;const s=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.Wt(e))return;const i=this.jt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new _p,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new He(ye),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||V("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new _p),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function yp(){return new Ze(q.comparator)}function vp(){return new Ze(q.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bN=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),SN=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),AN=(()=>({and:"AND",or:"OR"}))();class RN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function NN(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function kN(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ys(t){return $e(!!t),Y.fromTimestamp(function(e){const n=zn(e);return new _t(n.seconds,n.nanos)}(t))}function DN(t,e){return function(n){return new ke(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Tv(t){const e=ke.fromString(t);return $e(Sv(e)),e}function Mc(t,e){const n=Tv(e);if(n.get(1)!==t.databaseId.projectId)throw new K(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(Iv(n))}function Zl(t,e){return DN(t.databaseId,e)}function ON(t){const e=Tv(t);return e.length===4?ke.emptyPath():Iv(e)}function Ep(t){return new ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Iv(t){return $e(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function PN(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,l){return c.useProto3Json?($e(l===void 0||typeof l=="string"),dt.fromBase64String(l||"")):($e(l===void 0||l instanceof Uint8Array),dt.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?D.UNKNOWN:vv(c.code);return new K(l,c.message||"")}(o);n=new wv(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Mc(t,s.document.name),r=Ys(s.document.updateTime),o=s.document.createTime?Ys(s.document.createTime):Y.min(),a=new nn({mapValue:{fields:s.document.fields}}),c=at.newFoundDocument(i,r,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new bo(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Mc(t,s.document),r=s.readTime?Ys(s.readTime):Y.min(),o=at.newNoDocument(i,r),a=s.removedTargetIds||[];n=new bo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Mc(t,s.document),r=s.removedTargetIds||[];n=new bo([],r,i,null)}else{if(!("filter"in e))return X();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new IN(i),o=s.targetId;n=new Ev(o,r)}}return n}function xN(t,e){return{documents:[Zl(t,e.path)]}}function MN(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Zl(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Zl(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length!==0)return bv(hn.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Ms(u.field),direction:UN(u.dir)}}(l))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(c,l){return c.useProto3Json||Wa(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function LN(t){let e=ON(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){$e(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=Cv(u);return h instanceof hn&&rv(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Xi(Ls(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Wa(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new sa(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new sa(f,h)}(n.endAt)),sN(e,i,o,r,a,"F",c,l)}function FN(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return X()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Cv(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ls(e.unaryFilter.field);return Be.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Ls(e.unaryFilter.field);return Be.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ls(e.unaryFilter.field);return Be.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Ls(e.unaryFilter.field);return Be.create(r,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(t):t.fieldFilter!==void 0?function(e){return Be.create(Ls(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return hn.create(e.compositeFilter.filters.map(n=>Cv(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return X()}}(e.compositeFilter.op))}(t):X()}function UN(t){return bN[t]}function VN(t){return SN[t]}function BN(t){return AN[t]}function Ms(t){return{fieldPath:t.canonicalString()}}function Ls(t){return Et.fromServerFormat(t.fieldPath)}function bv(t){return t instanceof Be?function(e){if(e.op==="=="){if(cp(e.value))return{unaryFilter:{field:Ms(e.field),op:"IS_NAN"}};if(ap(e.value))return{unaryFilter:{field:Ms(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(cp(e.value))return{unaryFilter:{field:Ms(e.field),op:"IS_NOT_NAN"}};if(ap(e.value))return{unaryFilter:{field:Ms(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ms(e.field),op:VN(e.op),value:e.value}}}(t):t instanceof hn?function(e){const n=e.getFilters().map(s=>bv(s));return n.length===1?n[0]:{compositeFilter:{op:BN(e.op),filters:n}}}(t):X()}function Sv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,n,s,i,r=Y.min(),o=Y.min(),a=dt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new ys(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new ys(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new ys(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(e){this.se=e}}function HN(t){const e=LN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ql(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN{constructor(){this.He=new KN}addToCollectionParentIndex(e,n){return this.He.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(Wn.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(Wn.min())}updateCollectionGroup(e,n,s){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class KN{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new He(ke.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new He(ke.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new li(0)}static bn(){return new li(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(){this.changes=new bi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,at.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?S.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&Zi(s.mutation,i,Pn.empty(),_t.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,le()).next(()=>s))}getLocalViewOfDocuments(e,n,s=le()){const i=fs();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Vi();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=fs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,le()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Gn();const o=Ji(),a=Ji();return n.forEach((c,l)=>{const u=s.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof Za)?r=r.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Zi(u.mutation,l,u.mutation.getFieldMask(),_t.now())):o.set(l.key,Pn.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new WN(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Ji();let i=new Ze((o,a)=>o-a),r=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Pn.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(i.get(a.batchId)||le()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=fv();u.forEach(f=>{if(!r.has(f)){const p=_v(n.get(f),s.get(f));p!==null&&h.set(f,p),r=r.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return S.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return q.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):oN(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):S.resolve(fs());let a=-1,c=r;return o.next(l=>S.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?S.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,c,l,le())).next(u=>({batchId:a,changes:uN(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(s=>{let i=Vi();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=Vi();return this.indexManager.getCollectionParents(e,i).next(o=>S.forEach(o,a=>{const c=function(l,u){return new Ga(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,at.newInvalidDocument(l)))});let o=Vi();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&Zi(l.mutation,c,Pn.empty(),_t.now()),Xa(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return S.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Ys(s.createTime)}),S.resolve()}getNamedQuery(e,n){return S.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(s){return{name:s.name,query:HN(s.bundledQuery),readTime:Ys(s.readTime)}}(n)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(){this.overlays=new Ze(q.comparator),this.ts=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const s=fs();return S.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.re(e,n,r)}),S.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.ts.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ts.delete(s)),S.resolve()}getOverlaysForCollection(e,n,s){const i=fs(),r=n.length+1,o=new q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return S.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new Ze((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=r.get(l.largestBatchId);u===null&&(u=fs(),r=r.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=fs(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return S.resolve(a)}re(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ts.get(i.largestBatchId).delete(s.key);this.ts.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new TN(n,s));let r=this.ts.get(n);r===void 0&&(r=le(),this.ts.set(n,r)),this.ts.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(){this.es=new He(qe.ns),this.ss=new He(qe.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const s=new qe(e,n);this.es=this.es.add(s),this.ss=this.ss.add(s)}os(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.us(new qe(e,n))}cs(e,n){e.forEach(s=>this.removeReference(s,n))}hs(e){const n=new q(new ke([])),s=new qe(n,e),i=new qe(n,e+1),r=[];return this.ss.forEachInRange([s,i],o=>{this.us(o),r.push(o.key)}),r}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new q(new ke([])),s=new qe(n,e),i=new qe(n,e+1);let r=le();return this.ss.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new qe(e,0),s=this.es.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class qe{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return q.comparator(e.key,n.key)||ye(e.ds,n.ds)}static rs(e,n){return ye(e.ds,n.ds)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new He(qe.ns)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new wN(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this._s=this._s.add(new qe(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ys(s),r=i<0?0:i;return S.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new qe(n,0),i=new qe(n,Number.POSITIVE_INFINITY),r=[];return this._s.forEachInRange([s,i],o=>{const a=this.gs(o.ds);r.push(a)}),S.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new He(ye);return n.forEach(i=>{const r=new qe(i,0),o=new qe(i,Number.POSITIVE_INFINITY);this._s.forEachInRange([r,o],a=>{s=s.add(a.ds)})}),S.resolve(this.ps(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;q.isDocumentKey(r)||(r=r.child(""));const o=new qe(new q(r),0);let a=new He(ye);return this._s.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.ds)),!0)},o),S.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(s=>{const i=this.gs(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){$e(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this._s;return S.forEach(n.mutations,i=>{const r=new qe(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this._s=s})}En(e){}containsKey(e,n){const s=new qe(n,0),i=this._s.firstAfterOrEqual(s);return S.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(e){this.Ts=e,this.docs=new Ze(q.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Ts(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return S.resolve(s?s.document.mutableCopy():at.newInvalidDocument(n))}getEntries(e,n){let s=Gn();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():at.newInvalidDocument(i))}),S.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=Gn();const o=n.path,a=new q(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||VR(UR(u),s)<=0||(i.has(u.key)||Xa(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return S.resolve(r)}getAllFromCollectionGroup(e,n,s,i){X()}Es(e,n){return S.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new JN(this)}getSize(e){return S.resolve(this.size)}}class JN extends qN{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Jn.addEntry(e,i)):this.Jn.removeEntry(s)}),S.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(e){this.persistence=e,this.As=new bi(n=>Oh(n),Ph),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Fh,this.targetCount=0,this.bs=li.vn()}forEachTarget(e,n){return this.As.forEach((s,i)=>n(i)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Rs&&(this.Rs=n),S.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new li(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.Sn(n),S.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.As.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),S.waitFor(r).next(()=>i)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const s=this.As.get(n)||null;return S.resolve(s)}addMatchingKeys(e,n,s){return this.vs.os(n,s),S.resolve()}removeMatchingKeys(e,n,s){this.vs.cs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),S.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),S.resolve()}getMatchingKeysForTargetId(e,n){const s=this.vs.fs(n);return S.resolve(s)}containsKey(e,n){return S.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new kh(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new ZN(this),this.indexManager=new jN,this.remoteDocumentCache=function(s){return new XN(s)}(s=>this.referenceDelegate.Cs(s)),this.serializer=new $N(n),this.xs=new GN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new QN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ps[e.toKey()];return s||(s=new YN(n,this.referenceDelegate),this.Ps[e.toKey()]=s),s}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,s){V("MemoryPersistence","Starting transaction:",e);const i=new tk(this.Vs.next());return this.referenceDelegate.Ns(),s(i).next(r=>this.referenceDelegate.ks(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Os(e,n){return S.or(Object.values(this.Ps).map(s=>()=>s.containsKey(e,n)))}}class tk extends $R{constructor(e){super(),this.currentSequenceNumber=e}}class Uh{constructor(e){this.persistence=e,this.$s=new Fh,this.Ms=null}static Fs(e){return new Uh(e)}get Bs(){if(this.Ms)return this.Ms;throw X()}addReference(e,n,s){return this.$s.addReference(s,n),this.Bs.delete(s.toString()),S.resolve()}removeReference(e,n,s){return this.$s.removeReference(s,n),this.Bs.add(s.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),S.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(i=>this.Bs.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Bs.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Bs,s=>{const i=q.fromPath(s);return this.Ls(e,i).next(r=>{r||n.removeEntry(i,Y.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(s=>{s?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return S.or([()=>S.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Vi=s,this.Si=i}static Di(e,n){let s=le(),i=le();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Vh(e,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Ni(e,n).next(r=>r||this.ki(e,n,i,s)).next(r=>r||this.Oi(e,n))}Ni(e,n){if(fp(n))return S.resolve(null);let s=In(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ql(n,null,"F"),s=In(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=le(...r);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.$i(n,a);return this.Mi(n,l,o,c.readTime)?this.Ni(e,Ql(n,null,"F")):this.Fi(e,l,n,c)}))})))}ki(e,n,s,i){return fp(n)||i.isEqual(Y.min())?this.Oi(e,n):this.xi.getDocuments(e,s).next(r=>{const o=this.$i(n,r);return this.Mi(n,o,s,i)?this.Oi(e,n):(sp()<=ce.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Yl(n)),this.Fi(e,o,n,FR(i,-1)))})}$i(e,n){let s=new He(uv(e));return n.forEach((i,r)=>{Xa(e,r)&&(s=s.add(r))}),s}Mi(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Oi(e,n){return sp()<=ce.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Yl(n)),this.xi.getDocumentsMatchingQuery(e,n,Wn.min())}Fi(e,n,s,i){return this.xi.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(e,n,s,i){this.persistence=e,this.Bi=n,this.serializer=i,this.Li=new Ze(ye),this.qi=new bi(r=>Oh(r),Ph),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(s)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zN(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function ik(t,e,n,s){return new sk(t,e,n,s)}async function Av(t,e){const n=he(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Gi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=le();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of r){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({Qi:l,removedBatchIds:o,addedBatchIds:a}))})})}function Rv(t){const e=he(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function rk(t,e){const n=he(t),s=e.snapshotVersion;let i=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});i=n.Li;const a=[];e.targetChanges.forEach((u,h)=>{const f=i.get(h);if(!f)return;a.push(n.Ds.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(r,u.addedDocuments,h)));let p=f.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(dt.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),i=i.insert(h,p),function(m,_,v){return m.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(f,p,u)&&a.push(n.Ds.updateTargetData(r,p))});let c=Gn(),l=le();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(ok(r,o,e.documentUpdates).next(u=>{c=u.zi,l=u.ji})),!s.isEqual(Y.min())){const u=n.Ds.getLastRemoteSnapshotVersion(r).next(h=>n.Ds.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return S.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,l)).next(()=>c)}).then(r=>(n.Li=i,r))}function ok(t,e,n){let s=le(),i=le();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Gn();return n.forEach((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(Y.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):V("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{zi:o,ji:i}})}function ak(t,e){const n=he(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Ds.getTargetData(s,e).next(r=>r?(i=r,S.resolve(i)):n.Ds.allocateTargetId(s).next(o=>(i=new ys(e,o,0,s.currentSequenceNumber),n.Ds.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Li.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Li=n.Li.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function eu(t,e,n){const s=he(t),i=s.Li.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Kr(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Li=s.Li.remove(e),s.qi.delete(i.target)}function wp(t,e,n){const s=he(t);let i=Y.min(),r=le();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=he(a),h=u.qi.get(l);return h!==void 0?S.resolve(u.Li.get(h)):u.Ds.getTargetData(c,l)}(s,o,In(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ds.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Bi.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?r:le())).next(a=>(ck(s,aN(e),a),{documents:a,Wi:r})))}function ck(t,e,n){let s=t.Ui.get(e)||Y.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Ui.set(e,s)}class Tp{constructor(){this.activeTargetIds=dv()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lk{constructor(){this.Br=new Tp,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,s){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new Tp,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let po=null;function Lc(){return po===null?po=268435456+Math.round(2147483648*Math.random()):po++,"0x"+po.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st="WebChannelConnection";class dk extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,s,i,r){const o=Lc(),a=this.ao(e,n);V("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.ho(c,i,r),this.lo(e,a,c,s).then(l=>(V("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw na("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}fo(e,n,s,i,r,o){return this.co(e,n,s,i,r)}ho(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ci,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ao(e,n){const s=hk[e];return`${this.ro}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,s,i){const r=Lc();return new Promise((o,a)=>{const c=new AR;c.setWithCredentials(!0),c.listenOnce(CR.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Pc.NO_ERROR:const u=c.getResponseJson();V(st,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case Pc.TIMEOUT:V(st,`RPC '${e}' ${r} timed out`),a(new K(D.DEADLINE_EXCEEDED,"Request time out"));break;case Pc.HTTP_ERROR:const h=c.getStatus();if(V(st,`RPC '${e}' ${r} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const m=function(_){const v=_.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(v)>=0?v:D.UNKNOWN}(p.status);a(new K(m,p.message))}else a(new K(D.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new K(D.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{V(st,`RPC '${e}' ${r} completed.`)}});const l=JSON.stringify(i);V(st,`RPC '${e}' ${r} sending request:`,i),c.send(n,"POST",l,s,15)})}wo(e,n,s){const i=Lc(),r=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=TR(),a=IR(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new SR({})),this.ho(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const l=r.join("");V(st,`Creating RPC '${e}' stream ${i}: ${l}`,c);const u=o.createWebChannel(l,c);let h=!1,f=!1;const p=new fk({Wr:_=>{f?V(st,`Not sending because RPC '${e}' stream ${i} is closed:`,_):(h||(V(st,`Opening RPC '${e}' stream ${i} transport.`),u.open(),h=!0),V(st,`RPC '${e}' stream ${i} sending:`,_),u.send(_))},Hr:()=>u.close()}),m=(_,v,C)=>{_.listen(v,N=>{try{C(N)}catch(T){setTimeout(()=>{throw T},0)}})};return m(u,lo.EventType.OPEN,()=>{f||V(st,`RPC '${e}' stream ${i} transport opened.`)}),m(u,lo.EventType.CLOSE,()=>{f||(f=!0,V(st,`RPC '${e}' stream ${i} transport closed`),p.so())}),m(u,lo.EventType.ERROR,_=>{f||(f=!0,na(st,`RPC '${e}' stream ${i} transport errored:`,_),p.so(new K(D.UNAVAILABLE,"The operation could not be completed")))}),m(u,lo.EventType.MESSAGE,_=>{var v;if(!f){const C=_.data[0];$e(!!C);const N=C,T=N.error||((v=N[0])===null||v===void 0?void 0:v.error);if(T){V(st,`RPC '${e}' stream ${i} received error:`,T);const O=T.status;let W=function(de){const B=Le[de];if(B!==void 0)return vv(B)}(O),ee=T.message;W===void 0&&(W=D.INTERNAL,ee="Unknown error status: "+O+" with message "+T.message),f=!0,p.so(new K(W,ee)),u.close()}else V(st,`RPC '${e}' stream ${i} received:`,C),p.io(C)}}),m(a,bR.STAT_EVENT,_=>{_.stat===tp.PROXY?V(st,`RPC '${e}' stream ${i} detected buffering proxy`):_.stat===tp.NOPROXY&&V(st,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{p.no()},0),p}}function Fc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(t){return new RN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Ws=e,this.timerId=n,this._o=s,this.mo=i,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),i=Math.max(0,n-s);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(e,n,s,i,r,o,a,c){this.Ws=e,this.bo=s,this.Po=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new kv(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===D.RESOURCE_EXHAUSTED?(Tn(n.toString()),Tn("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Vo===n&&this.Ko(s,i)},s=>{e(()=>{const i=new K(D.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Go(i)})})}Ko(e,n){const s=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{s(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(i=>{s(()=>this.Go(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class gk extends pk{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=PN(this.serializer,e),s=function(i){if(!("targetChange"in i))return Y.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?Y.min():r.readTime?Ys(r.readTime):Y.min()}(e);return this.listener.zo(n,s)}jo(e){const n={};n.database=Ep(this.serializer),n.addTarget=function(i,r){let o;const a=r.target;return o=Gl(a)?{documents:xN(i,a)}:{query:MN(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=kN(i,r.resumeToken):r.snapshotVersion.compareTo(Y.min())>0&&(o.readTime=NN(i,r.snapshotVersion.toTimestamp())),o}(this.serializer,e);const s=FN(this.serializer,e);s&&(n.labels=s),this.Fo(n)}Wo(e){const n={};n.database=Ep(this.serializer),n.removeTarget=e,this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.eu=!1}nu(){if(this.eu)throw new K(D.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.co(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(D.UNKNOWN,i.toString())})}fo(e,n,s,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.fo(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new K(D.UNKNOWN,r.toString())})}terminate(){this.eu=!0}}class _k{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(Tn(n),this.ru=!1):V("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=r,this._u.qr(o=>{s.enqueueAndForget(async()=>{zr(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=he(a);c.du.add(4),await Wr(c),c.mu.set("Unknown"),c.du.delete(4),await tc(c)}(this))})}),this.mu=new _k(s,i)}}async function tc(t){if(zr(t))for(const e of t.wu)await e(!0)}async function Wr(t){for(const e of t.wu)await e(!1)}function Dv(t,e){const n=he(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),Hh(n)?$h(n):Si(n).No()&&Bh(n,e))}function Ov(t,e){const n=he(t),s=Si(n);n.fu.delete(e),s.No()&&Pv(n,e),n.fu.size===0&&(s.No()?s.$o():zr(n)&&n.mu.set("Unknown"))}function Bh(t,e){t.gu.Ot(e.targetId),Si(t).jo(e)}function Pv(t,e){t.gu.Ot(e),Si(t).Wo(e)}function $h(t){t.gu=new CN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),Si(t).start(),t.mu.ou()}function Hh(t){return zr(t)&&!Si(t).xo()&&t.fu.size>0}function zr(t){return he(t).du.size===0}function xv(t){t.gu=void 0}async function vk(t){t.fu.forEach((e,n)=>{Bh(t,e)})}async function Ek(t,e){xv(t),Hh(t)?(t.mu.au(e),$h(t)):t.mu.set("Unknown")}async function wk(t,e,n){if(t.mu.set("Online"),e instanceof wv&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.fu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.fu.delete(o),s.gu.removeTarget(o))}(t,e)}catch(s){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Cp(t,s)}else if(e instanceof bo?t.gu.Kt(e):e instanceof Ev?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(Y.min()))try{const s=await Rv(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.gu.Xt(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.fu.get(c);l&&i.fu.set(c,l.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.fu.get(a);if(!c)return;i.fu.set(a,c.withResumeToken(dt.EMPTY_BYTE_STRING,c.snapshotVersion)),Pv(i,a);const l=new ys(c.target,a,1,c.sequenceNumber);Bh(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){V("RemoteStore","Failed to raise snapshot:",s),await Cp(t,s)}}async function Cp(t,e,n){if(!Kr(e))throw e;t.du.add(1),await Wr(t),t.mu.set("Offline"),n||(n=()=>Rv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await tc(t)})}async function bp(t,e){const n=he(t);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const s=zr(n);n.du.add(3),await Wr(n),s&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await tc(n)}async function Tk(t,e){const n=he(t);e?(n.du.delete(2),await tc(n)):e||(n.du.add(2),await Wr(n),n.mu.set("Unknown"))}function Si(t){return t.yu||(t.yu=function(e,n,s){const i=he(e);return i.nu(),new gk(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Jr:vk.bind(null,t),Zr:Ek.bind(null,t),zo:wk.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),Hh(t)?$h(t):t.mu.set("Unknown")):(await t.yu.stop(),xv(t))})),t.yu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Bn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new jh(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Mv(t,e){if(Tn("AsyncQueue",`${e}: ${t}`),Kr(t))return new K(D.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e){this.comparator=e?(n,s)=>e(n,s)||q.comparator(n.key,s.key):(n,s)=>q.comparator(n.key,s.key),this.keyedMap=Vi(),this.sortedSet=new Ze(this.comparator)}static emptySet(e){return new Xs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Xs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Xs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(){this.Iu=new Ze(q.comparator)}track(e){const n=e.doc.key,s=this.Iu.get(n);s?e.type!==0&&s.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&s.type!==1?this.Iu=this.Iu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Iu=this.Iu.remove(n):e.type===1&&s.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):X():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,s)=>{e.push(s)}),e}}class ui{constructor(e,n,s,i,r,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ui(e,n,Xs.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ya(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(){this.Eu=void 0,this.listeners=[]}}class Ck{constructor(){this.queries=new bi(e=>lv(e),Ya),this.onlineState="Unknown",this.Au=new Set}}async function Kh(t,e){const n=he(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Ik),i)try{r.Eu=await n.onListen(s)}catch(o){const a=Mv(o,`Initialization of query '${Yl(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Ru(n.onlineState),r.Eu&&e.vu(r.Eu)&&Wh(n)}async function qh(t,e){const n=he(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function bk(t,e){const n=he(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.vu(i)&&(s=!0);o.Eu=i}}s&&Wh(n)}function Sk(t,e,n){const s=he(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Wh(t){t.Au.forEach(e=>{e.next()})}class zh{constructor(e,n,s){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new ui(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.xu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=ui.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(e){this.key=e}}class Fv{constructor(e){this.key=e}}class Ak{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=le(),this.mutatedKeys=le(),this.Ku=uv(e),this.Gu=new Xs(this.Ku)}get Qu(){return this.Lu}zu(e,n){const s=n?n.ju:new Sp,i=n?n.Gu:this.Gu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const f=i.get(u),p=Xa(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),_=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let v=!1;f&&p?f.data.isEqual(p.data)?m!==_&&(s.track({type:3,doc:p}),v=!0):this.Wu(f,p)||(s.track({type:2,doc:p}),v=!0,(c&&this.Ku(p,c)>0||l&&this.Ku(p,l)<0)&&(a=!0)):!f&&p?(s.track({type:0,doc:p}),v=!0):f&&!p&&(s.track({type:1,doc:f}),v=!0,(c||l)&&(a=!0)),v&&(p?(o=o.add(p),r=_?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{Gu:o,ju:s,Mi:a,mutatedKeys:r}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const r=e.ju.Tu();r.sort((l,u)=>function(h,f){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return p(h)-p(f)}(l.type,u.type)||this.Ku(l.doc,u.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,r.length!==0||c?{snapshot:new ui(this.query,e.Gu,i,r,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Sp,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=le(),this.Gu.forEach(s=>{this.Zu(s.key)&&(this.Uu=this.Uu.add(s.key))});const n=[];return e.forEach(s=>{this.Uu.has(s)||n.push(new Fv(s))}),this.Uu.forEach(s=>{e.has(s)||n.push(new Lv(s))}),n}Xu(e){this.Lu=e.Wi,this.Uu=le();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return ui.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class Rk{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Nk{constructor(e){this.key=e,this.ec=!1}}class kk{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new bi(a=>lv(a),Ya),this.ic=new Map,this.rc=new Set,this.oc=new Ze(q.comparator),this.uc=new Map,this.cc=new Fh,this.ac={},this.hc=new Map,this.lc=li.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function Dk(t,e){const n=Uk(t);let s,i;const r=n.sc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.tc();else{const o=await ak(n.localStore,In(e));n.isPrimaryClient&&Dv(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await Ok(n,e,s,a==="current",o.resumeToken)}return i}async function Ok(t,e,n,s,i){t.dc=(h,f,p)=>async function(m,_,v,C){let N=_.view.zu(v);N.Mi&&(N=await wp(m.localStore,_.query,!1).then(({documents:W})=>_.view.zu(W,N)));const T=C&&C.targetChanges.get(_.targetId),O=_.view.applyChanges(N,m.isPrimaryClient,T);return Rp(m,_.targetId,O.Yu),O.snapshot}(t,h,f,p);const r=await wp(t.localStore,e,!0),o=new Ak(e,r.Wi),a=o.zu(r.documents),c=qr.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,c);Rp(t,n,l.Yu);const u=new Rk(e,n,o);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),l.snapshot}async function Pk(t,e){const n=he(t),s=n.sc.get(e),i=n.ic.get(s.targetId);if(i.length>1)return n.ic.set(s.targetId,i.filter(r=>!Ya(r,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await eu(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Ov(n.remoteStore,s.targetId),tu(n,s.targetId)}).catch(Nh)):(tu(n,s.targetId),await eu(n.localStore,s.targetId,!0))}async function Uv(t,e){const n=he(t);try{const s=await rk(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.uc.get(r);o&&($e(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?$e(o.ec):i.removedDocuments.size>0&&($e(o.ec),o.ec=!1))}),await Bv(n,s,e)}catch(s){await Nh(s)}}function Ap(t,e,n){const s=he(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.sc.forEach((r,o)=>{const a=o.view.Ru(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=he(r);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Ru(o)&&(c=!0)}),c&&Wh(a)}(s.eventManager,e),i.length&&s.nc.zo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function xk(t,e,n){const s=he(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.uc.get(e),r=i&&i.key;if(r){let o=new Ze(q.comparator);o=o.insert(r,at.newNoDocument(r,Y.min()));const a=le().add(r),c=new ec(Y.min(),new Map,new He(ye),o,a);await Uv(s,c),s.oc=s.oc.remove(r),s.uc.delete(e),Gh(s)}else await eu(s.localStore,e,!1).then(()=>tu(s,e,n)).catch(Nh)}function tu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc.wc(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(s=>{t.cc.containsKey(s)||Vv(t,s)})}function Vv(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(Ov(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Gh(t))}function Rp(t,e,n){for(const s of n)s instanceof Lv?(t.cc.addReference(s.key,e),Mk(t,s)):s instanceof Fv?(V("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||Vv(t,s.key)):X()}function Mk(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(V("SyncEngine","New document in limbo: "+n),t.rc.add(s),Gh(t))}function Gh(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new q(ke.fromString(e)),s=t.lc.next();t.uc.set(s,new Nk(n)),t.oc=t.oc.insert(n,s),Dv(t.remoteStore,new ys(In(Qa(n.path)),s,2,kh.ct))}}async function Bv(t,e,n){const s=he(t),i=[],r=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,c)=>{o.push(s.dc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=Vh.Di(c.targetId,l);r.push(u)}}))}),await Promise.all(o),s.nc.zo(i),await async function(a,c){const l=he(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>S.forEach(c,h=>S.forEach(h.Vi,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>S.forEach(h.Si,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!Kr(u))throw u;V("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.Li.get(h),p=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(p);l.Li=l.Li.insert(h,m)}}}(s.localStore,r))}async function Lk(t,e){const n=he(t);if(!n.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const s=await Av(n.localStore,e);n.currentUser=e,function(i,r){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new K(D.CANCELLED,r))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Bv(n,s.Qi)}}function Fk(t,e){const n=he(t),s=n.uc.get(e);if(s&&s.ec)return le().add(s.key);{let i=le();const r=n.ic.get(e);if(!r)return i;for(const o of r){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function Uk(t){const e=he(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Uv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Fk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=xk.bind(null,e),e.nc.zo=bk.bind(null,e.eventManager),e.nc.wc=Sk.bind(null,e.eventManager),e}class Np{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Nv(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return ik(this.persistence,new nk,e.initialUser,this.serializer)}createPersistence(e){return new ek(Uh.Fs,this.serializer)}createSharedClientState(e){return new lk}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Vk{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Ap(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Lk.bind(null,this.syncEngine),await Tk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Ck}createDatastore(e){const n=Nv(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new dk(i));var i;return function(r,o,a,c){return new mk(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>Ap(this.syncEngine,a,0),o=Ip.D()?new Ip:new uk,new yk(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,c,l){const u=new kk(s,i,r,o,a,c);return l&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=he(e);V("RemoteStore","RemoteStore shutting down."),n.du.add(5),await Wr(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):Tn("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=it.UNAUTHENTICATED,this.clientId=ev.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{V("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(V("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new K(D.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Bn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Mv(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Uc(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Av(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function kp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Hk(t);V("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>bp(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>bp(e.remoteStore,r)),t._onlineComponents=e}function $k(t){return t.name==="FirebaseError"?t.code===D.FAILED_PRECONDITION||t.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Hk(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await Uc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!$k(n))throw n;na("Error using user provided cache. Falling back to memory cache: "+n),await Uc(t,new Np)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await Uc(t,new Np);return t._offlineComponents}async function jk(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await kp(t,t._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await kp(t,new Vk))),t._onlineComponents}async function oa(t){const e=await jk(t),n=e.eventManager;return n.onListen=Dk.bind(null,e.syncEngine),n.onUnlisten=Pk.bind(null,e.syncEngine),n}function Kk(t,e,n={}){const s=new Bn;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const l=new Qh({next:h=>{r.enqueueAndForget(()=>qh(i,u));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new K(D.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new K(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new zh(Qa(o.path),l,{includeMetadataChanges:!0,xu:!0});return Kh(i,u)}(await oa(t),t.asyncQueue,e,n,s)),s.promise}function qk(t,e,n={}){const s=new Bn;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const l=new Qh({next:h=>{r.enqueueAndForget(()=>qh(i,u)),h.fromCache&&a.source==="server"?c.reject(new K(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new zh(o,l,{includeMetadataChanges:!0,xu:!0});return Kh(i,u)}(await oa(t),t.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(t,e,n){if(!n)throw new K(D.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Wk(t,e,n,s){if(e===!0&&s===!0)throw new K(D.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Op(t){if(!q.isDocumentKey(t))throw new K(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Pp(t){if(q.isDocumentKey(t))throw new K(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function zk(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function $n(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=zk(t);throw new K(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new K(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Wk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new K(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new K(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xp(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new RR;switch(n.type){case"firstParty":return new OR(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new K(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Dp.get(e);n&&(V("ComponentProvider","Removing Datastore"),Dp.delete(e),n.terminate())}(this),Promise.resolve()}}function Gk(t,e,n,s={}){var i;const r=(t=$n(t,nc))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&na("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=it.MOCK_USER;else{o=tI(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new K(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new it(c)}t._authCredentials=new NR(new Zy(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Gt(this.firestore,e,this._key)}}class Gr{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Gr(this.firestore,e,this._query)}}class Hn extends Gr{constructor(e,n,s){super(e,n,Qa(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Gt(this.firestore,null,new q(e))}withConverter(e){return new Hn(this.firestore,e,this._path)}}function Hv(t,e,...n){if(t=Qn(t),$v("collection","path",e),t instanceof nc){const s=ke.fromString(e,...n);return Pp(s),new Hn(t,null,s)}{if(!(t instanceof Gt||t instanceof Hn))throw new K(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ke.fromString(e,...n));return Pp(s),new Hn(t.firestore,null,s)}}function Mp(t,e,...n){if(t=Qn(t),arguments.length===1&&(e=ev.A()),$v("doc","path",e),t instanceof nc){const s=ke.fromString(e,...n);return Op(s),new Gt(t,null,new q(s))}{if(!(t instanceof Gt||t instanceof Hn))throw new K(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ke.fromString(e,...n));return Op(s),new Gt(t.firestore,t instanceof Hn?t.converter:null,new q(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new kv(this,"async_queue_retry"),this.qc=()=>{const n=Fc();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=Fc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=Fc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new Bn;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!Kr(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(s=>{this.Mc=s,this.Fc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Tn("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Fc=!1,s))));return this.Nc=n,n}enqueueAfterDelay(e,n,s){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const i=jh.createAndSchedule(this,e,n,s,r=>this.Qc(r));return this.$c.push(i),i}Uc(){this.Mc&&X()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function Lp(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Ir extends nc{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new Qk,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Kv(this),this._firestoreClient.terminate()}}function jv(t,e){const n=typeof t=="object"?t:wm(),s=typeof t=="string"?t:e||"(default)",i=lC(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=JT("firestore");r&&Gk(i,...r)}return i}function Yh(t){return t._firestoreClient||Kv(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Kv(t){var e,n,s;const i=t._freezeSettings(),r=function(o,a,c,l){return new qR(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Bk(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e){this._byteString=e}static fromBase64String(e){try{return new aa(dt.fromBase64String(e))}catch(n){throw new K(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new aa(dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}}const Yk=new RegExp("[~\\*/\\[\\]]");function Xk(t,e,n){if(e.search(Yk)>=0)throw Fp(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new qv(...e.split("."))._internalPath}catch{throw Fp(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Fp(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new K(D.INVALID_ARGUMENT,a+t+c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Jk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Gv("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Jk extends zv{data(){return super.data()}}function Gv(t,e){return typeof e=="string"?Xk(t,e):e instanceof qv?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qv(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Zk{convertValue(e,n="none"){switch(bs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(oi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw X()}}convertObject(e,n){const s={};return za(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Wv(Fe(e.latitude),Fe(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=nv(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Er(e));default:return null}}convertTimestamp(e){const n=zn(e);return new _t(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ke.fromString(e);$e(Sv(s));const i=new wr(s.get(1),s.get(3)),r=new q(s.popFirst(5));return i.isEqual(n)||Tn(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Yv extends zv{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new So(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Gv("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class So extends Yv{data(e={}){return super.data(e)}}class Xv{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Bi(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new So(this._firestore,this._userDataWriter,s.key,s,new Bi(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new So(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Bi(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new So(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Bi(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),l=r.indexOf(o.doc.key)),{type:eD(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function eD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jv(t){t=$n(t,Gt);const e=$n(t.firestore,Ir);return Kk(Yh(e),t._key).then(n=>Zv(e,t,n))}class Xh extends Zk{constructor(e){super(),this.firestore=e}convertBytes(e){return new aa(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Gt(this.firestore,null,n)}}function tD(t){t=$n(t,Gr);const e=$n(t.firestore,Ir),n=Yh(e),s=new Xh(e);return Qv(t._query),qk(n,t._query).then(i=>new Xv(e,s,t,i))}function Jh(t,...e){var n,s,i;t=Qn(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Lp(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Lp(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,l,u;if(t instanceof Gt)l=$n(t.firestore,Ir),u=Qa(t._key.path),c={next:h=>{e[o]&&e[o](Zv(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=$n(t,Gr);l=$n(h.firestore,Ir),u=h._query;const f=new Xh(l);c={next:p=>{e[o]&&e[o](new Xv(l,f,h,p))},error:e[o+1],complete:e[o+2]},Qv(t._query)}return function(h,f,p,m){const _=new Qh(m),v=new zh(f,_,p);return h.asyncQueue.enqueueAndForget(async()=>Kh(await oa(h),v)),()=>{_.yc(),h.asyncQueue.enqueueAndForget(async()=>qh(await oa(h),v))}}(Yh(l),u,a,c)}function Zv(t,e,n){const s=n.docs.get(e._key),i=new Xh(t);return new Yv(t,i,e._key,s,new Bi(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Ci=n})(yi),cn(new Qt("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new Ir(new kR(n.getProvider("auth-internal")),new xR(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new K(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wr(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Rt(np,"3.10.1",t),Rt(np,"3.10.1","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE="firebasestorage.googleapis.com",nD="storageBucket",sD=2*60*1e3,iD=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends bn{constructor(e,n,s=0){super(Vc(e),`Firebase Storage: ${n} (${Vc(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,dn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Vc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var fn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(fn||(fn={}));function Vc(t){return"storage/"+t}function rD(){const t="An unknown error occurred, please check the error payload for server response.";return new dn(fn.UNKNOWN,t)}function oD(){return new dn(fn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function aD(){return new dn(fn.CANCELED,"User canceled the upload/download.")}function cD(t){return new dn(fn.INVALID_URL,"Invalid URL '"+t+"'.")}function lD(t){return new dn(fn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Up(t){return new dn(fn.INVALID_ARGUMENT,t)}function tE(){return new dn(fn.APP_DELETED,"The Firebase app was deleted.")}function uD(t){return new dn(fn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Kt.makeFromUrl(e,n)}catch{return new Kt(e,"")}if(s.path==="")return s;throw lD(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function l(O){O.path_=decodeURIComponent(O.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${i}/o${f}`,"i"),m={bucket:1,path:3},_=n===eE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",C=new RegExp(`^https?://${_}/${i}/${v}`,"i"),T=[{regex:a,indices:c,postModify:r},{regex:p,indices:m,postModify:l},{regex:C,indices:{bucket:1,path:2},postModify:l}];for(let O=0;O<T.length;O++){const W=T[O],ee=W.regex.exec(e);if(ee){const de=ee[W.indices.bucket];let B=ee[W.indices.path];B||(B=""),s=new Kt(de,B),W.postModify(s);break}}if(s==null)throw cD(e);return s}}class hD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fD(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...v){l||(l=!0,e.apply(null,v))}function h(v){i=setTimeout(()=>{i=null,t(p,c())},v)}function f(){r&&clearTimeout(r)}function p(v,...C){if(l){f();return}if(v){f(),u.call(null,v,...C);return}if(c()||o){f(),u.call(null,v,...C);return}s<64&&(s*=2);let T;a===1?(a=2,T=0):T=(s+Math.random())*1e3,h(T)}let m=!1;function _(v){m||(m=!0,f(),!l&&(i!==null?(v||(a=2),clearTimeout(i),h(0)):v||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,_(!0)},n),_}function dD(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pD(t){return t!==void 0}function Vp(t,e,n,s){if(s<e)throw Up(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Up(`Invalid value for '${t}'. Expected ${n} or less.`)}function gD(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ca;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ca||(ca={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mD(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _D{constructor(e,n,s,i,r,o,a,c,l,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,m)=>{this.resolve_=p,this.reject_=m,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new go(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===ca.NO_ERROR,c=r.getStatus();if(!a||mD(c,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===ca.ABORT;s(!1,new go(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new go(l,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());pD(c)?r(c):r()}catch(c){o(c)}else if(a!==null){const c=rD();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?tE():aD();o(c)}else{const c=oD();o(c)}};this.canceled_?n(!1,new go(!1,null,!0)):this.backoffId_=fD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&dD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class go{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function yD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function vD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function ED(t,e){e&&(t["X-Firebase-GMPID"]=e)}function wD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function TD(t,e,n,s,i,r,o=!0){const a=gD(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return ED(l,e),yD(l,n),vD(l,r),wD(l,s),new _D(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ID(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function CD(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e,n){this._service=e,n instanceof Kt?this._location=n:this._location=Kt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new la(e,n)}get root(){const e=new Kt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return CD(this._location.path)}get storage(){return this._service}get parent(){const e=ID(this._location.path);if(e===null)return null;const n=new Kt(this._location.bucket,e);return new la(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw uD(e)}}function Bp(t,e){const n=e==null?void 0:e[nD];return n==null?null:Kt.makeFromBucketSpec(n,t)}class bD{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=eE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=sD,this._maxUploadRetryTime=iD,this._requests=new Set,i!=null?this._bucket=Kt.makeFromBucketSpec(i,this._host):this._bucket=Bp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Kt.makeFromBucketSpec(this._url,e):this._bucket=Bp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Vp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Vp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new la(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new hD(tE());{const o=TD(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const $p="@firebase/storage",Hp="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SD="storage";function AD(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new bD(n,s,i,e,yi)}function RD(){cn(new Qt(SD,AD,"PUBLIC").setMultipleInstances(!0)),Rt($p,Hp,""),Rt($p,Hp,"esm2017")}RD();const Bc=new WeakMap;function nE(t,e){return Bc.has(e)||Bc.set(e,t||{f:{},r:{},s:{},u:{}}),Bc.get(e)}function ND(t,e,n,s){if(!t)return n;const[i,r]=sE(t);if(!i)return n;const o=nE(void 0,s)[i]||{},a=e||r;return a&&a in o?o[a]:n}function kD(t,e,n,s){if(!t)return;const[i,r]=sE(t);if(!i)return;const o=nE(void 0,s)[i],a=e||r;if(a)return n.then(c=>{o[a]=c}).catch(sn),a}function sE(t){return L0(t)||F0(t)?["f",t.path]:U0(t)?["r",t.toString()]:V0(t)?["s",t.toString()]:[]}const $c=new WeakMap;function DD(t,e,n){const s=Fu();$c.has(s)||$c.set(s,new Map);const i=$c.get(s),r=kD(e,n,t,s);return r&&i.set(r,t),r?()=>i.delete(r):sn}const OD={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function nu(t,e,n,s){if(!M0(t))return[t,{}];const i=[{},{}],r=Object.keys(n).reduce((a,c)=>{const l=n[c];return a[l.path]=l.data(),a},{});function o(a,c,l,u){c=c||{};const[h,f]=u;Object.getOwnPropertyNames(a).forEach(p=>{const m=Object.getOwnPropertyDescriptor(a,p);m&&!m.enumerable&&Object.defineProperty(h,p,m)});for(const p in a){const m=a[p];if(m==null||m instanceof Date||m instanceof _t||m instanceof Wv)h[p]=m;else if(Vu(m)){const _=l+p;h[p]=_ in n?c[p]:m.path,f[_]=m.converter?m:m.withConverter(s.converter)}else if(Array.isArray(m)){h[p]=Array(m.length);for(let _=0;_<m.length;_++){const v=m[_];v&&v.path in r&&(h[p][_]=r[v.path])}o(m,c[p]||h[p],l+p+".",[h[p],f])}else Ss(m)?(h[p]={},o(m,c[p],l+p+".",[h[p],f])):h[p]=m}}return o(t,e,"",i),i}const Zh={reset:!1,wait:!0,maxRefDepth:2,converter:OD,snapshotOptions:{serverTimestamps:"estimate"}};function ua(t){for(const e in t)t[e].unsub()}function su(t,e,n,s,i,r,o,a,c){const[l,u]=nu(s.data(t.snapshotOptions),Uu(e,n),i,t);r.set(e,n,l),iu(t,e,n,i,u,r,o,a,c)}function PD({ref:t,target:e,path:n,depth:s,resolve:i,reject:r,ops:o},a){const c=Object.create(null);let l=sn;return a.once?Jv(t).then(u=>{u.exists()?su(a,e,n,u,c,o,s,i,r):(o.set(e,n,null),i())}).catch(r):l=Jh(t,u=>{u.exists()?su(a,e,n,u,c,o,s,i,r):(o.set(e,n,null),i())},r),()=>{l(),ua(c)}}function iu(t,e,n,s,i,r,o,a,c){const l=Object.keys(i);if(Object.keys(s).filter(_=>l.indexOf(_)<0).forEach(_=>{s[_].unsub(),delete s[_]}),!l.length||++o>t.maxRefDepth)return a(n);let h=0;const f=l.length,p=Object.create(null);function m(_){_ in p&&++h>=f&&a(n)}l.forEach(_=>{const v=s[_],C=i[_],N=`${n}.${_}`;if(p[N]=!0,v)if(v.path!==C.path)v.unsub();else return;s[_]={data:()=>Uu(e,N),unsub:PD({ref:C,target:e,path:N,depth:o,ops:r,resolve:m.bind(null,N),reject:c},t),path:C.path}})}function xD(t,e,n,s,i,r){const o=Object.assign({},Zh,r),{snapshotListenOptions:a,snapshotOptions:c,wait:l,once:u}=o,h="value";let f=Mn(l?[]:t.value);l||n.set(t,h,[]);const p=s;let m,_=sn;const v=[],C={added:({newIndex:T,doc:O})=>{v.splice(T,0,Object.create(null));const W=v[T],[ee,de]=nu(O.data(c),void 0,W,o);n.add(fe(f),T,ee),iu(o,f,`${h}.${T}`,W,de,n,0,s.bind(null,O),i)},modified:({oldIndex:T,newIndex:O,doc:W})=>{const ee=fe(f),de=v[T],B=ee[T],[Te,me]=nu(W.data(c),B,de,o);v.splice(O,0,de),n.remove(ee,T),n.add(ee,O,Te),iu(o,f,`${h}.${O}`,de,me,n,0,s,i)},removed:({oldIndex:T})=>{const O=fe(f);n.remove(O,T),ua(v.splice(T,1)[0])}};function N(T){const O=T.docChanges(a);if(!m&&O.length){m=!0;let W=0;const ee=O.length,de=Object.create(null);for(let B=0;B<ee;B++)de[O[B].doc.id]=!0;s=B=>{B&&B.id in de&&++W>=ee&&(l&&(n.set(t,h,fe(f)),f=t),p(fe(f)),s=sn)}}O.forEach(W=>{C[W.type](W)}),O.length||(l&&(n.set(t,h,fe(f)),f=t),s(fe(f)))}return u?tD(e).then(N).catch(i):_=Jh(e,N,i),T=>{if(_(),T){const O=typeof T=="function"?T():[];n.set(t,h,O)}v.forEach(ua)}}function MD(t,e,n,s,i,r){const o=Object.assign({},Zh,r),a="value",c=Object.create(null);s=B0(s,()=>Uu(t,a));let l=sn;function u(h){h.exists()?su(o,t,a,h,c,n,0,s,i):(n.set(t,a,null),s(null))}return o.once?Jv(e).then(u).catch(i):l=Jh(e,u,i),h=>{if(l(),h){const f=typeof h=="function"?h():null;n.set(t,a,f)}ua(c)}}function LD(t,e){let n=sn;const s=Object.assign({},Zh,e),i=fe(t),r=s.target||Mn();$0()&&(s.once=!0);const o=ND(i,s.ssrKey,r.value,Fu());r.value=o;let c=!(Vm(i)?(o||[]).length>0:o!==void 0);const l=Mn(!1),u=Mn(),h=Ng(),f=pg();let p=sn;function m(){let C=fe(t);const N=new Promise((T,O)=>{if(n(s.reset),!C)return n=sn,T(null);l.value=c,c=!0,C.converter||(C=C.withConverter(s.converter)),n=(Vu(C)?MD:xD)(r,C,FD,T,O,s)}).catch(T=>(h.value===N&&(u.value=T),Promise.reject(T))).finally(()=>{h.value===N&&(l.value=!1)});h.value=N}let _=sn;Xe(t)&&(_=$i(t,m)),m(),i&&(p=DD(h.value,i,s.ssrKey)),Ar()&&Wg(()=>h.value),f&&DE(v);function v(C=s.reset){_(),p(),n(C)}return Object.defineProperties(r,{error:{get:()=>u},data:{get:()=>r},pending:{get:()=>l},promise:{get:()=>h},stop:{get:()=>v}})}const FD={set:(t,e,n)=>P0(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function Hc(t,e){return LD(t,e)}function UD(t){return jv(Fu(t))}function VD(t,{firebaseApp:e,modules:n=[]}){t.provide(Um,e);for(const s of n)t.use(s.bind(null,e))}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Fs=typeof window<"u";function BD(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const _e=Object.assign;function jc(t,e){const n={};for(const s in e){const i=e[s];n[s]=Yt(i)?i.map(t):t(i)}return n}const er=()=>{},Yt=Array.isArray,$D=/\/$/,HD=t=>t.replace($D,"");function Kc(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),r=e.slice(c+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=WD(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function jD(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function jp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function KD(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&hi(e.matched[s],n.matched[i])&&iE(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function hi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function iE(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!qD(t[n],e[n]))return!1;return!0}function qD(t,e){return Yt(t)?Kp(t,e):Yt(e)?Kp(e,t):t===e}function Kp(t,e){return Yt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function WD(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var Cr;(function(t){t.pop="pop",t.push="push"})(Cr||(Cr={}));var tr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(tr||(tr={}));function zD(t){if(!t)if(Fs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),HD(t)}const GD=/^[^#]+#/;function QD(t,e){return t.replace(GD,"#")+e}function YD(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const sc=()=>({left:window.pageXOffset,top:window.pageYOffset});function XD(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=YD(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function qp(t,e){return(history.state?history.state.position-e:-1)+t}const ru=new Map;function JD(t,e){ru.set(t,e)}function ZD(t){const e=ru.get(t);return ru.delete(t),e}let eO=()=>location.protocol+"//"+location.host;function rE(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),jp(c,"")}return jp(n,t)+s+i}function tO(t,e,n,s){let i=[],r=[],o=null;const a=({state:f})=>{const p=rE(t,location),m=n.value,_=e.value;let v=0;if(f){if(n.value=p,e.value=f,o&&o===m){o=null;return}v=_?f.position-_.position:0}else s(p);i.forEach(C=>{C(n.value,m,{delta:v,type:Cr.pop,direction:v?v>0?tr.forward:tr.back:tr.unknown})})};function c(){o=n.value}function l(f){i.push(f);const p=()=>{const m=i.indexOf(f);m>-1&&i.splice(m,1)};return r.push(p),p}function u(){const{history:f}=window;f.state&&f.replaceState(_e({},f.state,{scroll:sc()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function Wp(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?sc():null}}function nO(t){const{history:e,location:n}=window,s={value:rE(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:eO()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),i.value=l}catch(p){console.error(p),n[u?"replace":"assign"](f)}}function o(c,l){const u=_e({},e.state,Wp(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});r(c,u,!0),s.value=c}function a(c,l){const u=_e({},i.value,e.state,{forward:c,scroll:sc()});r(u.current,u,!0);const h=_e({},Wp(s.value,c,null),{position:u.position+1},l);r(c,h,!1),s.value=c}return{location:s,state:i,push:a,replace:o}}function sO(t){t=zD(t);const e=nO(t),n=tO(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=_e({location:"",base:t,go:s,createHref:QD.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function iO(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),sO(t)}function rO(t){return typeof t=="string"||t&&typeof t=="object"}function oE(t){return typeof t=="string"||typeof t=="symbol"}const Nn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},aE=Symbol("");var zp;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(zp||(zp={}));function fi(t,e){return _e(new Error,{type:t,[aE]:!0},e)}function gn(t,e){return t instanceof Error&&aE in t&&(e==null||!!(t.type&e))}const Gp="[^/]+?",oO={sensitive:!1,strict:!1,start:!0,end:!0},aO=/[.+*?^${}()[\]/\\]/g;function cO(t,e){const n=_e({},oO,e),s=[];let i=n.start?"^":"";const r=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let h=0;h<l.length;h++){const f=l[h];let p=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(aO,"\\$&"),p+=40;else if(f.type===1){const{value:m,repeatable:_,optional:v,regexp:C}=f;r.push({name:m,repeatable:_,optional:v});const N=C||Gp;if(N!==Gp){p+=10;try{new RegExp(`(${N})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${m}" (${N}): `+O.message)}}let T=_?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;h||(T=v&&l.length<2?`(?:/${T})`:"/"+T),v&&(T+="?"),i+=T,p+=20,v&&(p+=-8),_&&(p+=-20),N===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",m=r[f-1];h[m.name]=p&&m.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:m,repeatable:_,optional:v}=p,C=m in l?l[m]:"";if(Yt(C)&&!_)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const N=Yt(C)?C.join("/"):C;if(!N)if(v)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=N}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:c}}function lO(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function uO(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=lO(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Qp(s))return 1;if(Qp(i))return-1}return i.length-s.length}function Qp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const hO={type:0,value:""},fO=/[a-zA-Z0-9_]/;function dO(t){if(!t)return[[]];if(t==="/")return[[hO]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,c,l="",u="";function h(){l&&(n===0?r.push({type:0,value:l}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:fO.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}function pO(t,e,n){const s=cO(dO(t.path),n),i=_e(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function gO(t,e){const n=[],s=new Map;e=Jp({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,f){const p=!f,m=mO(u);m.aliasOf=f&&f.record;const _=Jp(e,u),v=[m];if("alias"in u){const T=typeof u.alias=="string"?[u.alias]:u.alias;for(const O of T)v.push(_e({},m,{components:f?f.record.components:m.components,path:O,aliasOf:f?f.record:m}))}let C,N;for(const T of v){const{path:O}=T;if(h&&O[0]!=="/"){const W=h.record.path,ee=W[W.length-1]==="/"?"":"/";T.path=h.record.path+(O&&ee+O)}if(C=pO(T,h,_),f?f.alias.push(C):(N=N||C,N!==C&&N.alias.push(C),p&&u.name&&!Xp(C)&&o(u.name)),m.children){const W=m.children;for(let ee=0;ee<W.length;ee++)r(W[ee],C,f&&f.children[ee])}f=f||C,(C.record.components&&Object.keys(C.record.components).length||C.record.name||C.record.redirect)&&c(C)}return N?()=>{o(N)}:er}function o(u){if(oE(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&uO(u,n[h])>=0&&(u.record.path!==n[h].record.path||!cE(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Xp(u)&&s.set(u.record.name,u)}function l(u,h){let f,p={},m,_;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw fi(1,{location:u});_=f.record.name,p=_e(Yp(h.params,f.keys.filter(N=>!N.optional).map(N=>N.name)),u.params&&Yp(u.params,f.keys.map(N=>N.name))),m=f.stringify(p)}else if("path"in u)m=u.path,f=n.find(N=>N.re.test(m)),f&&(p=f.parse(m),_=f.record.name);else{if(f=h.name?s.get(h.name):n.find(N=>N.re.test(h.path)),!f)throw fi(1,{location:u,currentLocation:h});_=f.record.name,p=_e({},h.params,u.params),m=f.stringify(p)}const v=[];let C=f;for(;C;)v.unshift(C.record),C=C.parent;return{name:_,path:m,params:p,matched:v,meta:yO(v)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Yp(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function mO(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:_O(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function _O(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Xp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function yO(t){return t.reduce((e,n)=>_e(e,n.meta),{})}function Jp(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function cE(t,e){return e.children.some(n=>n===t||cE(t,n))}const lE=/#/g,vO=/&/g,EO=/\//g,wO=/=/g,TO=/\?/g,uE=/\+/g,IO=/%5B/g,CO=/%5D/g,hE=/%5E/g,bO=/%60/g,fE=/%7B/g,SO=/%7C/g,dE=/%7D/g,AO=/%20/g;function ef(t){return encodeURI(""+t).replace(SO,"|").replace(IO,"[").replace(CO,"]")}function RO(t){return ef(t).replace(fE,"{").replace(dE,"}").replace(hE,"^")}function ou(t){return ef(t).replace(uE,"%2B").replace(AO,"+").replace(lE,"%23").replace(vO,"%26").replace(bO,"`").replace(fE,"{").replace(dE,"}").replace(hE,"^")}function NO(t){return ou(t).replace(wO,"%3D")}function kO(t){return ef(t).replace(lE,"%23").replace(TO,"%3F")}function DO(t){return t==null?"":kO(t).replace(EO,"%2F")}function ha(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function OO(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(uE," "),o=r.indexOf("="),a=ha(o<0?r:r.slice(0,o)),c=o<0?null:ha(r.slice(o+1));if(a in e){let l=e[a];Yt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Zp(t){let e="";for(let n in t){const s=t[n];if(n=NO(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Yt(s)?s.map(r=>r&&ou(r)):[s&&ou(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function PO(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Yt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const xO=Symbol(""),eg=Symbol(""),ic=Symbol(""),tf=Symbol(""),au=Symbol("");function xi(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Dn(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(fi(4,{from:n,to:e})):h instanceof Error?a(h):rO(h)?a(fi(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},l=t.call(s&&s.instances[i],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function qc(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(MO(a)){const l=(a.__vccOpts||a)[e];l&&i.push(Dn(l,n,s,r,o))}else{let c=a();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=BD(l)?l.default:l;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&Dn(f,n,s,r,o)()}))}}return i}function MO(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function tg(t){const e=At(ic),n=At(tf),s=Ve(()=>e.resolve(fe(t.to))),i=Ve(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(hi.bind(null,u));if(f>-1)return f;const p=ng(c[l-2]);return l>1&&ng(u)===p&&h[h.length-1].path!==p?h.findIndex(hi.bind(null,c[l-2])):f}),r=Ve(()=>i.value>-1&&VO(n.params,s.value.params)),o=Ve(()=>i.value>-1&&i.value===n.matched.length-1&&iE(n.params,s.value.params));function a(c={}){return UO(c)?e[fe(t.replace)?"replace":"push"](fe(t.to)).catch(er):Promise.resolve()}return{route:s,href:Ve(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const LO=jg({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:tg,setup(t,{slots:e}){const n=br(tg(t)),{options:s}=At(ic),i=Ve(()=>({[sg(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[sg(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:om("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),FO=LO;function UO(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function VO(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Yt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function ng(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const sg=(t,e,n)=>t??e??n,BO=jg({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=At(au),i=Ve(()=>t.route||s.value),r=At(eg,0),o=Ve(()=>{let l=fe(r);const{matched:u}=i.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Ve(()=>i.value.matched[o.value]);yo(eg,Ve(()=>o.value+1)),yo(xO,a),yo(au,i);const c=Mn();return $i(()=>[c.value,a.value,t.name],([l,u,h],[f,p,m])=>{u&&(u.instances[h]=l,p&&p!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!hi(u,p)||!f)&&(u.enterCallbacks[h]||[]).forEach(_=>_(l))},{flush:"post"}),()=>{const l=i.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return ig(n.default,{Component:f,route:l});const p=h.props[u],m=p?p===!0?l.params:typeof p=="function"?p(l):p:null,v=om(f,_e({},m,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return ig(n.default,{Component:v,route:l})||v}}});function ig(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const nf=BO;function $O(t){const e=gO(t.routes,t),n=t.parseQuery||OO,s=t.stringifyQuery||Zp,i=t.history,r=xi(),o=xi(),a=xi(),c=Ng(Nn);let l=Nn;Fs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=jc.bind(null,w=>""+w),h=jc.bind(null,DO),f=jc.bind(null,ha);function p(w,L){let x,$;return oE(w)?(x=e.getRecordMatcher(w),$=L):$=w,e.addRoute($,x)}function m(w){const L=e.getRecordMatcher(w);L&&e.removeRoute(L)}function _(){return e.getRoutes().map(w=>w.record)}function v(w){return!!e.getRecordMatcher(w)}function C(w,L){if(L=_e({},L||c.value),typeof w=="string"){const d=Kc(n,w,L.path),g=e.resolve({path:d.path},L),y=i.createHref(d.fullPath);return _e(d,g,{params:f(g.params),hash:ha(d.hash),redirectedFrom:void 0,href:y})}let x;if("path"in w)x=_e({},w,{path:Kc(n,w.path,L.path).path});else{const d=_e({},w.params);for(const g in d)d[g]==null&&delete d[g];x=_e({},w,{params:h(w.params)}),L.params=h(L.params)}const $=e.resolve(x,L),oe=w.hash||"";$.params=u(f($.params));const Oe=jD(s,_e({},w,{hash:RO(oe),path:$.path})),Z=i.createHref(Oe);return _e({fullPath:Oe,hash:oe,query:s===Zp?PO(w.query):w.query||{}},$,{redirectedFrom:void 0,href:Z})}function N(w){return typeof w=="string"?Kc(n,w,c.value.path):_e({},w)}function T(w,L){if(l!==w)return fi(8,{from:L,to:w})}function O(w){return de(w)}function W(w){return O(_e(N(w),{replace:!0}))}function ee(w){const L=w.matched[w.matched.length-1];if(L&&L.redirect){const{redirect:x}=L;let $=typeof x=="function"?x(w):x;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=N($):{path:$},$.params={}),_e({query:w.query,hash:w.hash,params:"path"in $?{}:w.params},$)}}function de(w,L){const x=l=C(w),$=c.value,oe=w.state,Oe=w.force,Z=w.replace===!0,d=ee(x);if(d)return de(_e(N(d),{state:typeof d=="object"?_e({},oe,d.state):oe,force:Oe,replace:Z}),L||x);const g=x;g.redirectedFrom=L;let y;return!Oe&&KD(s,$,x)&&(y=fi(16,{to:g,from:$}),Jn($,$,!0,!1)),(y?Promise.resolve(y):Te(g,$)).catch(E=>gn(E)?gn(E,2)?E:Ft(E):Ie(E,g,$)).then(E=>{if(E){if(gn(E,2))return de(_e({replace:Z},N(E.to),{state:typeof E.to=="object"?_e({},oe,E.to.state):oe,force:Oe}),L||g)}else E=tt(g,$,!0,Z,oe);return me(g,$,E),E})}function B(w,L){const x=T(w,L);return x?Promise.reject(x):Promise.resolve()}function Te(w,L){let x;const[$,oe,Oe]=HO(w,L);x=qc($.reverse(),"beforeRouteLeave",w,L);for(const d of $)d.leaveGuards.forEach(g=>{x.push(Dn(g,w,L))});const Z=B.bind(null,w,L);return x.push(Z),Ps(x).then(()=>{x=[];for(const d of r.list())x.push(Dn(d,w,L));return x.push(Z),Ps(x)}).then(()=>{x=qc(oe,"beforeRouteUpdate",w,L);for(const d of oe)d.updateGuards.forEach(g=>{x.push(Dn(g,w,L))});return x.push(Z),Ps(x)}).then(()=>{x=[];for(const d of w.matched)if(d.beforeEnter&&!L.matched.includes(d))if(Yt(d.beforeEnter))for(const g of d.beforeEnter)x.push(Dn(g,w,L));else x.push(Dn(d.beforeEnter,w,L));return x.push(Z),Ps(x)}).then(()=>(w.matched.forEach(d=>d.enterCallbacks={}),x=qc(Oe,"beforeRouteEnter",w,L),x.push(Z),Ps(x))).then(()=>{x=[];for(const d of o.list())x.push(Dn(d,w,L));return x.push(Z),Ps(x)}).catch(d=>gn(d,8)?d:Promise.reject(d))}function me(w,L,x){for(const $ of a.list())$(w,L,x)}function tt(w,L,x,$,oe){const Oe=T(w,L);if(Oe)return Oe;const Z=L===Nn,d=Fs?history.state:{};x&&($||Z?i.replace(w.fullPath,_e({scroll:Z&&d&&d.scroll},oe)):i.push(w.fullPath,oe)),c.value=w,Jn(w,L,x,Z),Ft()}let nt;function Lt(){nt||(nt=i.listen((w,L,x)=>{if(!Qr.listening)return;const $=C(w),oe=ee($);if(oe){de(_e(oe,{replace:!0}),$).catch(er);return}l=$;const Oe=c.value;Fs&&JD(qp(Oe.fullPath,x.delta),sc()),Te($,Oe).catch(Z=>gn(Z,12)?Z:gn(Z,2)?(de(Z.to,$).then(d=>{gn(d,20)&&!x.delta&&x.type===Cr.pop&&i.go(-1,!1)}).catch(er),Promise.reject()):(x.delta&&i.go(-x.delta,!1),Ie(Z,$,Oe))).then(Z=>{Z=Z||tt($,Oe,!1),Z&&(x.delta&&!gn(Z,8)?i.go(-x.delta,!1):x.type===Cr.pop&&gn(Z,20)&&i.go(-1,!1)),me($,Oe,Z)}).catch(er)}))}let pn=xi(),Ai=xi(),xe;function Ie(w,L,x){Ft(w);const $=Ai.list();return $.length?$.forEach(oe=>oe(w,L,x)):console.error(w),Promise.reject(w)}function ve(){return xe&&c.value!==Nn?Promise.resolve():new Promise((w,L)=>{pn.add([w,L])})}function Ft(w){return xe||(xe=!w,Lt(),pn.list().forEach(([L,x])=>w?x(w):L()),pn.reset()),w}function Jn(w,L,x,$){const{scrollBehavior:oe}=t;if(!Fs||!oe)return Promise.resolve();const Oe=!x&&ZD(qp(w.fullPath,0))||($||!x)&&history.state&&history.state.scroll||null;return xg().then(()=>oe(w,L,Oe)).then(Z=>Z&&XD(Z)).catch(Z=>Ie(Z,w,L))}const Ut=w=>i.go(w);let yt;const ks=new Set,Qr={currentRoute:c,listening:!0,addRoute:p,removeRoute:m,hasRoute:v,getRoutes:_,resolve:C,options:t,push:O,replace:W,go:Ut,back:()=>Ut(-1),forward:()=>Ut(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Ai.add,isReady:ve,install(w){const L=this;w.component("RouterLink",FO),w.component("RouterView",nf),w.config.globalProperties.$router=L,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>fe(c)}),Fs&&!yt&&c.value===Nn&&(yt=!0,O(i.location).catch(oe=>{}));const x={};for(const oe in Nn)x[oe]=Ve(()=>c.value[oe]);w.provide(ic,L),w.provide(tf,br(x)),w.provide(au,c);const $=w.unmount;ks.add(w),w.unmount=function(){ks.delete(w),ks.size<1&&(l=Nn,nt&&nt(),nt=null,c.value=Nn,yt=!1,xe=!1),$()}}};return Qr}function Ps(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function HO(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(l=>hi(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>hi(l,c))||i.push(c))}return[n,s,i]}function pE(){return At(ic)}function sf(){return At(tf)}const jO=on("header",null,null,-1),KO={__name:"App",setup(t){const e=sf();return(n,s)=>(bt(),On(gt,null,[jO,on("section",null,[(bt(),Sr(fe(nf),{key:fe(e).fullPath}))])],64))}};const gE=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},qO=["data-coord"],WO=["src"],zO={__name:"BoardTile",props:{tile:{type:Object,required:!0},collected:{type:Array,default:()=>{}}},setup(t){const e=t,n=Ve(()=>e.tile),s=Ve(()=>e.collected.includes(n.value.id));return(i,r)=>fe(n)?(bt(),On("div",{key:0,class:fa(["tile",{isCollected:fe(s)}]),"data-coord":fe(n).id},[on("img",{src:fe(n).img||"https://oldschool.runescape.wiki/images/Frog_%28Ruins_of_Camdozaal%29.png?6ae5e"},null,8,WO)],10,qO)):To("",!0)}},GO=gE(zO,[["__scopeId","data-v-bf6d1bd9"]]),rf=Em({apiKey:"AIzaSyAnOiG77O1ukT9C2x8u1VbMLw7For9C_3w",authDomain:"bingo-50cec.firebaseapp.com",databaseURL:"https://bingo-50cec-default-rtdb.europe-west1.firebasedatabase.app",projectId:"bingo-50cec",storageBucket:"bingo-50cec.appspot.com",messagingSenderId:"866066986693",appId:"1:866066986693:web:de513df8434d232b0562ac",measurementId:"G-8F3EECYHQ0"}),QO=jv(rf);Hv(QO,"todos");const YO={key:0,class:"bingo-board"},XO={key:0},JO=["onSubmit"],ZO={__name:"BingoBoard",props:{boardUUID:{type:String},teamCode:{type:String}},setup(t){const e=t;DT(f=>({"3e890b3e":fe(c),"1ce4d7ec":fe(l)}));const n=UD(rf),s=pE(),i=Mn(""),r=Hc(Mp(n,"Boards",e.boardUUID)),o=Hc(Hv(n,`Boards/${e.boardUUID}/Tiles`)),{data:a}=Hc(Mp(n,`Boards/${e.boardUUID}/groups/${e.teamCode}/`)),c=Ve(()=>{var f;return((f=r==null?void 0:r.value)==null?void 0:f.settings.width)||7}),l=Ve(()=>{var f;return((f=r==null?void 0:r.value)==null?void 0:f.settings.height)||7}),u=Ve(()=>{var f;return((f=a==null?void 0:a.value)==null?void 0:f.collected)||[]}),h=()=>{i.value!==""&&s.push({name:"private-board",params:{boardUUID:e.boardUUID,teamCode:i.value}})};return(f,p)=>(bt(),On(gt,null,[fe(o)?(bt(),On("main",YO,[(bt(!0),On(gt,null,Fw(fe(o),m=>(bt(),Sr(GO,{key:m.id,tile:m,collected:fe(u)},null,8,["tile","collected"]))),128))])):To("",!0),on("aside",null,[Do(lf(fe(r))+" ",1),e.teamCode?(bt(),On("p",XO,lf(e.teamCode),1)):To("",!0),e.teamCode?To("",!0):(bt(),On("form",{key:1,onSubmit:lm(h,["prevent"])},[Do(" team code: "),zg(on("input",{type:"text",name:"teamId","onUpdate:modelValue":p[0]||(p[0]=m=>i.value=m)},null,512),[[cm,i.value]])],40,JO))])],64))}},eP=gE(ZO,[["__scopeId","data-v-4478a8b5"]]),rg={__name:"BoardView",setup(t){const e=sf(),n=Ve(()=>e.params.teamCode),s=Ve(()=>e.params.boardUUID);return(i,r)=>(bt(),Sr(eP,{boardUUID:fe(s),teamCode:fe(n)},null,8,["boardUUID","teamCode"]))}},tP=["onSubmit"],nP=["disabled"],sP={__name:"Home",setup(t){const e=sf(),n=pE(),s=Mn(""),i=()=>{n.push({name:"overview",params:{boardUUID:s.value}})};return(r,o)=>(bt(),On(gt,null,[on("form",{onSubmit:lm(i,["prevent"])},[Do(" Enter your bingo key: "),zg(on("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=a=>s.value=a)},null,512),[[cm,s.value]]),on("button",{class:"btn",disabled:s.value==""},"team 1",8,nP)],40,tP),(bt(),Sr(fe(nf),{key:fe(e).fullPath}))],64))}},iP=$O({history:iO(),mode:"hash",routes:[{path:"/",name:"Home",component:sP},{path:"/b/:boardUUID",name:"overview",param:!0,component:rg},{path:"/b/:boardUUID/team/:teamCode",name:"private-board",param:!0,component:rg}]}),rc=UT(KO);rc.use(HT());rc.use(iP);rc.use(VD,{firebaseApp:rf});rc.mount("#app");
