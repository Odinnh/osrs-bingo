(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function iu(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function ru(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=He(s)?uE(s):ru(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(He(t))return t;if(Ne(t))return t}}const aE=/;(?![^(]*\))/g,cE=/:([^]+)/,lE=/\/\*.*?\*\//gs;function uE(t){const e={};return t.replace(lE,"").split(aE).forEach(n=>{if(n){const s=n.split(cE);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ou(t){let e="";if(He(t))e=t;else if(Q(t))for(let n=0;n<t.length;n++){const s=ou(t[n]);s&&(e+=s+" ")}else if(Ne(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const hE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fE=iu(hE);function tg(t){return!!t||t===""}const dE=t=>He(t)?t:t==null?"":Q(t)||Ne(t)&&(t.toString===rg||!J(t.toString))?JSON.stringify(t,ng,2):String(t),ng=(t,e)=>e&&e.__v_isRef?ng(t,e.value):Bs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:sg(e)?{[`Set(${e.size})`]:[...e.values()]}:Ne(e)&&!Q(e)&&!og(e)?String(e):e,be={},Vs=[],Kt=()=>{},pE=()=>!1,gE=/^on[^a-z]/,ua=t=>gE.test(t),au=t=>t.startsWith("onUpdate:"),ht=Object.assign,cu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},mE=Object.prototype.hasOwnProperty,ae=(t,e)=>mE.call(t,e),Q=Array.isArray,Bs=t=>ha(t)==="[object Map]",sg=t=>ha(t)==="[object Set]",J=t=>typeof t=="function",He=t=>typeof t=="string",lu=t=>typeof t=="symbol",Ne=t=>t!==null&&typeof t=="object",ig=t=>Ne(t)&&J(t.then)&&J(t.catch),rg=Object.prototype.toString,ha=t=>rg.call(t),_E=t=>ha(t).slice(8,-1),og=t=>ha(t)==="[object Object]",uu=t=>He(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,mo=iu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},yE=/-(\w)/g,Xs=fa(t=>t.replace(yE,(e,n)=>n?n.toUpperCase():"")),vE=/\B([A-Z])/g,di=fa(t=>t.replace(vE,"-$1").toLowerCase()),ag=fa(t=>t.charAt(0).toUpperCase()+t.slice(1)),sc=fa(t=>t?`on${ag(t)}`:""),nr=(t,e)=>!Object.is(t,e),_o=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},So=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Hc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let af;const EE=()=>af||(af=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let It;class cg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=It,!e&&It&&(this.index=(It.scopes||(It.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=It;try{return It=this,e()}finally{It=n}}}on(){It=this}off(){It=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function wE(t){return new cg(t)}function TE(t,e=It){e&&e.active&&e.effects.push(t)}function lg(){return It}function IE(t){It&&It.cleanups.push(t)}const hu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ug=t=>(t.w&Bn)>0,hg=t=>(t.n&Bn)>0,CE=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Bn},bE=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];ug(i)&&!hg(i)?i.delete(t):e[n++]=i,i.w&=~Bn,i.n&=~Bn}e.length=n}},jc=new WeakMap;let Mi=0,Bn=1;const Kc=30;let Vt;const us=Symbol(""),qc=Symbol("");class fu{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,TE(this,s)}run(){if(!this.active)return this.fn();let e=Vt,n=Pn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Vt,Vt=this,Pn=!0,Bn=1<<++Mi,Mi<=Kc?CE(this):cf(this),this.fn()}finally{Mi<=Kc&&bE(this),Bn=1<<--Mi,Vt=this.parent,Pn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Vt===this?this.deferStop=!0:this.active&&(cf(this),this.onStop&&this.onStop(),this.active=!1)}}function cf(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Pn=!0;const fg=[];function pi(){fg.push(Pn),Pn=!1}function gi(){const t=fg.pop();Pn=t===void 0?!0:t}function wt(t,e,n){if(Pn&&Vt){let s=jc.get(t);s||jc.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=hu()),dg(i)}}function dg(t,e){let n=!1;Mi<=Kc?hg(t)||(t.n|=Bn,n=!ug(t)):n=!t.has(Vt),n&&(t.add(Vt),Vt.deps.push(t))}function En(t,e,n,s,i,r){const o=jc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Q(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Q(t)?uu(n)&&a.push(o.get("length")):(a.push(o.get(us)),Bs(t)&&a.push(o.get(qc)));break;case"delete":Q(t)||(a.push(o.get(us)),Bs(t)&&a.push(o.get(qc)));break;case"set":Bs(t)&&a.push(o.get(us));break}if(a.length===1)a[0]&&Wc(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Wc(hu(c))}}function Wc(t,e){const n=Q(t)?t:[...t];for(const s of n)s.computed&&lf(s);for(const s of n)s.computed||lf(s)}function lf(t,e){(t!==Vt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const SE=iu("__proto__,__v_isRef,__isVue"),pg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(lu)),AE=du(),RE=du(!1,!0),NE=du(!0),uf=kE();function kE(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ue(this);for(let r=0,o=this.length;r<o;r++)wt(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(ue)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){pi();const s=ue(this)[e].apply(this,n);return gi(),s}}),t}function DE(t){const e=ue(this);return wt(e,"has",t),e.hasOwnProperty(t)}function du(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?zE:vg:e?yg:_g).get(s))return s;const o=Q(s);if(!t){if(o&&ae(uf,i))return Reflect.get(uf,i,r);if(i==="hasOwnProperty")return DE}const a=Reflect.get(s,i,r);return(lu(i)?pg.has(i):SE(i))||(t||wt(s,"get",i),e)?a:Ye(a)?o&&uu(i)?a:a.value:Ne(a)?t?Eg(a):br(a):a}}const OE=gg(),PE=gg(!0);function gg(t=!1){return function(n,s,i,r){let o=n[s];if(Js(o)&&Ye(o)&&!Ye(i))return!1;if(!t&&(!Ao(i)&&!Js(i)&&(o=ue(o),i=ue(i)),!Q(n)&&Ye(o)&&!Ye(i)))return o.value=i,!0;const a=Q(n)&&uu(s)?Number(s)<n.length:ae(n,s),c=Reflect.set(n,s,i,r);return n===ue(r)&&(a?nr(i,o)&&En(n,"set",s,i):En(n,"add",s,i)),c}}function xE(t,e){const n=ae(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&En(t,"delete",e,void 0),s}function ME(t,e){const n=Reflect.has(t,e);return(!lu(e)||!pg.has(e))&&wt(t,"has",e),n}function LE(t){return wt(t,"iterate",Q(t)?"length":us),Reflect.ownKeys(t)}const mg={get:AE,set:OE,deleteProperty:xE,has:ME,ownKeys:LE},FE={get:NE,set(t,e){return!0},deleteProperty(t,e){return!0}},UE=ht({},mg,{get:RE,set:PE}),pu=t=>t,da=t=>Reflect.getPrototypeOf(t);function Yr(t,e,n=!1,s=!1){t=t.__v_raw;const i=ue(t),r=ue(e);n||(e!==r&&wt(i,"get",e),wt(i,"get",r));const{has:o}=da(i),a=s?pu:n?yu:sr;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Xr(t,e=!1){const n=this.__v_raw,s=ue(n),i=ue(t);return e||(t!==i&&wt(s,"has",t),wt(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Jr(t,e=!1){return t=t.__v_raw,!e&&wt(ue(t),"iterate",us),Reflect.get(t,"size",t)}function hf(t){t=ue(t);const e=ue(this);return da(e).has.call(e,t)||(e.add(t),En(e,"add",t,t)),this}function ff(t,e){e=ue(e);const n=ue(this),{has:s,get:i}=da(n);let r=s.call(n,t);r||(t=ue(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?nr(e,o)&&En(n,"set",t,e):En(n,"add",t,e),this}function df(t){const e=ue(this),{has:n,get:s}=da(e);let i=n.call(e,t);i||(t=ue(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&En(e,"delete",t,void 0),r}function pf(){const t=ue(this),e=t.size!==0,n=t.clear();return e&&En(t,"clear",void 0,void 0),n}function Zr(t,e){return function(s,i){const r=this,o=r.__v_raw,a=ue(o),c=e?pu:t?yu:sr;return!t&&wt(a,"iterate",us),o.forEach((l,u)=>s.call(i,c(l),c(u),r))}}function eo(t,e,n){return function(...s){const i=this.__v_raw,r=ue(i),o=Bs(r),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=i[t](...s),u=n?pu:e?yu:sr;return!e&&wt(r,"iterate",c?qc:us),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function An(t){return function(...e){return t==="delete"?!1:this}}function VE(){const t={get(r){return Yr(this,r)},get size(){return Jr(this)},has:Xr,add:hf,set:ff,delete:df,clear:pf,forEach:Zr(!1,!1)},e={get(r){return Yr(this,r,!1,!0)},get size(){return Jr(this)},has:Xr,add:hf,set:ff,delete:df,clear:pf,forEach:Zr(!1,!0)},n={get(r){return Yr(this,r,!0)},get size(){return Jr(this,!0)},has(r){return Xr.call(this,r,!0)},add:An("add"),set:An("set"),delete:An("delete"),clear:An("clear"),forEach:Zr(!0,!1)},s={get(r){return Yr(this,r,!0,!0)},get size(){return Jr(this,!0)},has(r){return Xr.call(this,r,!0)},add:An("add"),set:An("set"),delete:An("delete"),clear:An("clear"),forEach:Zr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=eo(r,!1,!1),n[r]=eo(r,!0,!1),e[r]=eo(r,!1,!0),s[r]=eo(r,!0,!0)}),[t,n,e,s]}const[BE,$E,HE,jE]=VE();function gu(t,e){const n=e?t?jE:HE:t?$E:BE;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ae(n,i)&&i in s?n:s,i,r)}const KE={get:gu(!1,!1)},qE={get:gu(!1,!0)},WE={get:gu(!0,!1)},_g=new WeakMap,yg=new WeakMap,vg=new WeakMap,zE=new WeakMap;function GE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function QE(t){return t.__v_skip||!Object.isExtensible(t)?0:GE(_E(t))}function br(t){return Js(t)?t:mu(t,!1,mg,KE,_g)}function YE(t){return mu(t,!1,UE,qE,yg)}function Eg(t){return mu(t,!0,FE,WE,vg)}function mu(t,e,n,s,i){if(!Ne(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=QE(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function $s(t){return Js(t)?$s(t.__v_raw):!!(t&&t.__v_isReactive)}function Js(t){return!!(t&&t.__v_isReadonly)}function Ao(t){return!!(t&&t.__v_isShallow)}function wg(t){return $s(t)||Js(t)}function ue(t){const e=t&&t.__v_raw;return e?ue(e):t}function _u(t){return So(t,"__v_skip",!0),t}const sr=t=>Ne(t)?br(t):t,yu=t=>Ne(t)?Eg(t):t;function Tg(t){Pn&&Vt&&(t=ue(t),dg(t.dep||(t.dep=hu())))}function Ig(t,e){t=ue(t);const n=t.dep;n&&Wc(n)}function Ye(t){return!!(t&&t.__v_isRef===!0)}function qt(t){return bg(t,!1)}function Cg(t){return bg(t,!0)}function bg(t,e){return Ye(t)?t:new XE(t,e)}class XE{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ue(e),this._value=n?e:sr(e)}get value(){return Tg(this),this._value}set value(e){const n=this.__v_isShallow||Ao(e)||Js(e);e=n?e:ue(e),nr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:sr(e),Ig(this))}}function Pe(t){return Ye(t)?t.value:t}const JE={get:(t,e,n)=>Pe(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ye(i)&&!Ye(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Sg(t){return $s(t)?t:new Proxy(t,JE)}var Ag;class ZE{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Ag]=!1,this._dirty=!0,this.effect=new fu(e,()=>{this._dirty||(this._dirty=!0,Ig(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=ue(this);return Tg(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Ag="__v_isReadonly";function ew(t,e,n=!1){let s,i;const r=J(t);return r?(s=t,i=Kt):(s=t.get,i=t.set),new ZE(s,i,r||!i,n)}function xn(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){pa(r,e,n)}return i}function Pt(t,e,n,s){if(J(t)){const r=xn(t,e,n,s);return r&&ig(r)&&r.catch(o=>{pa(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Pt(t[r],e,n,s));return i}function pa(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const l=r.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){xn(c,null,10,[t,o,a]);return}}tw(t,n,i,s)}function tw(t,e,n,s=!0){console.error(t)}let ir=!1,zc=!1;const at=[];let Zt=0;const Hs=[];let pn=null,ts=0;const Rg=Promise.resolve();let vu=null;function Ng(t){const e=vu||Rg;return t?e.then(this?t.bind(this):t):e}function nw(t){let e=Zt+1,n=at.length;for(;e<n;){const s=e+n>>>1;rr(at[s])<t?e=s+1:n=s}return e}function Eu(t){(!at.length||!at.includes(t,ir&&t.allowRecurse?Zt+1:Zt))&&(t.id==null?at.push(t):at.splice(nw(t.id),0,t),kg())}function kg(){!ir&&!zc&&(zc=!0,vu=Rg.then(Og))}function sw(t){const e=at.indexOf(t);e>Zt&&at.splice(e,1)}function iw(t){Q(t)?Hs.push(...t):(!pn||!pn.includes(t,t.allowRecurse?ts+1:ts))&&Hs.push(t),kg()}function gf(t,e=ir?Zt+1:0){for(;e<at.length;e++){const n=at[e];n&&n.pre&&(at.splice(e,1),e--,n())}}function Dg(t){if(Hs.length){const e=[...new Set(Hs)];if(Hs.length=0,pn){pn.push(...e);return}for(pn=e,pn.sort((n,s)=>rr(n)-rr(s)),ts=0;ts<pn.length;ts++)pn[ts]();pn=null,ts=0}}const rr=t=>t.id==null?1/0:t.id,rw=(t,e)=>{const n=rr(t)-rr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Og(t){zc=!1,ir=!0,at.sort(rw);const e=Kt;try{for(Zt=0;Zt<at.length;Zt++){const n=at[Zt];n&&n.active!==!1&&xn(n,null,14)}}finally{Zt=0,at.length=0,Dg(),ir=!1,vu=null,(at.length||Hs.length)&&Og()}}function ow(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||be;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||be;f&&(i=n.map(p=>He(p)?p.trim():p)),h&&(i=n.map(Hc))}let a,c=s[a=sc(e)]||s[a=sc(Xs(e))];!c&&r&&(c=s[a=sc(di(e))]),c&&Pt(c,t,6,i);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Pt(l,t,6,i)}}function Pg(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!J(t)){const c=l=>{const u=Pg(l,e,!0);u&&(a=!0,ht(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!a?(Ne(t)&&s.set(t,null),null):(Q(r)?r.forEach(c=>o[c]=null):ht(o,r),Ne(t)&&s.set(t,o),o)}function ga(t,e){return!t||!ua(e)?!1:(e=e.slice(2).replace(/Once$/,""),ae(t,e[0].toLowerCase()+e.slice(1))||ae(t,di(e))||ae(t,e))}let Dt=null,xg=null;function Ro(t){const e=Dt;return Dt=t,xg=t&&t.type.__scopeId||null,e}function aw(t,e=Dt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Cf(-1);const r=Ro(e);let o;try{o=t(...i)}finally{Ro(r),s._d&&Cf(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ic(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:p,ctx:m,inheritAttrs:_}=t;let v,C;const N=Ro(t);try{if(n.shapeFlag&4){const D=i||s;v=Jt(u.call(D,D,h,r,p,f,m)),C=c}else{const D=e;v=Jt(D.length>1?D(r,{attrs:c,slots:a,emit:l}):D(r,null)),C=e.props?c:cw(c)}}catch(D){ji.length=0,pa(D,t,1),v=pt(Wt)}let T=v;if(C&&_!==!1){const D=Object.keys(C),{shapeFlag:q}=T;D.length&&q&7&&(o&&D.some(au)&&(C=lw(C,o)),T=$n(T,C))}return n.dirs&&(T=$n(T),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&(T.transition=n.transition),v=T,Ro(N),v}const cw=t=>{let e;for(const n in t)(n==="class"||n==="style"||ua(n))&&((e||(e={}))[n]=t[n]);return e},lw=(t,e)=>{const n={};for(const s in t)(!au(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function uw(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:c}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?mf(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!ga(l,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?mf(s,o,l):!0:!!o;return!1}function mf(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!ga(n,r))return!0}return!1}function hw({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const fw=t=>t.__isSuspense;function dw(t,e){e&&e.pendingBranch?Q(t)?e.effects.push(...t):e.effects.push(t):iw(t)}function yo(t,e){if(Ue){let n=Ue.provides;const s=Ue.parent&&Ue.parent.provides;s===n&&(n=Ue.provides=Object.create(s)),n[t]=e}}function St(t,e,n=!1){const s=Ue||Dt;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&J(e)?e.call(s.proxy):e}}function pw(t,e){return wu(t,null,{flush:"post"})}const to={};function $i(t,e,n){return wu(t,e,n)}function wu(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=be){const a=lg()===(Ue==null?void 0:Ue.scope)?Ue:null;let c,l=!1,u=!1;if(Ye(t)?(c=()=>t.value,l=Ao(t)):$s(t)?(c=()=>t,s=!0):Q(t)?(u=!0,l=t.some(T=>$s(T)||Ao(T)),c=()=>t.map(T=>{if(Ye(T))return T.value;if($s(T))return is(T);if(J(T))return xn(T,a,2)})):J(t)?e?c=()=>xn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Pt(t,a,3,[f])}:c=Kt,e&&s){const T=c;c=()=>is(T())}let h,f=T=>{h=C.onStop=()=>{xn(T,a,4)}},p;if(ar)if(f=Kt,e?n&&Pt(e,a,3,[c(),u?[]:void 0,f]):c(),i==="sync"){const T=oT();p=T.__watcherHandles||(T.__watcherHandles=[])}else return Kt;let m=u?new Array(t.length).fill(to):to;const _=()=>{if(C.active)if(e){const T=C.run();(s||l||(u?T.some((D,q)=>nr(D,m[q])):nr(T,m)))&&(h&&h(),Pt(e,a,3,[T,m===to?void 0:u&&m[0]===to?[]:m,f]),m=T)}else C.run()};_.allowRecurse=!!e;let v;i==="sync"?v=_:i==="post"?v=()=>yt(_,a&&a.suspense):(_.pre=!0,a&&(_.id=a.uid),v=()=>Eu(_));const C=new fu(c,v);e?n?_():m=C.run():i==="post"?yt(C.run.bind(C),a&&a.suspense):C.run();const N=()=>{C.stop(),a&&a.scope&&cu(a.scope.effects,C)};return p&&p.push(N),N}function gw(t,e,n){const s=this.proxy,i=He(t)?t.includes(".")?Mg(s,t):()=>s[t]:t.bind(s,s);let r;J(e)?r=e:(r=e.handler,n=e);const o=Ue;ei(this);const a=wu(i,r.bind(s),n);return o?ei(o):hs(),a}function Mg(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function is(t,e){if(!Ne(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ye(t))is(t.value,e);else if(Q(t))for(let n=0;n<t.length;n++)is(t[n],e);else if(sg(t)||Bs(t))t.forEach(n=>{is(n,e)});else if(og(t))for(const n in t)is(t[n],e);return t}function mw(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Sr(()=>{t.isMounted=!0}),Bg(()=>{t.isUnmounting=!0}),t}const kt=[Function,Array],_w={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:kt,onEnter:kt,onAfterEnter:kt,onEnterCancelled:kt,onBeforeLeave:kt,onLeave:kt,onAfterLeave:kt,onLeaveCancelled:kt,onBeforeAppear:kt,onAppear:kt,onAfterAppear:kt,onAppearCancelled:kt},setup(t,{slots:e}){const n=Ar(),s=mw();let i;return()=>{const r=e.default&&Fg(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const _ of r)if(_.type!==Wt){o=_;break}}const a=ue(t),{mode:c}=a;if(s.isLeaving)return rc(o);const l=_f(o);if(!l)return rc(o);const u=Gc(l,a,s,n);Qc(l,u);const h=n.subTree,f=h&&_f(h);let p=!1;const{getTransitionKey:m}=l.type;if(m){const _=m();i===void 0?i=_:_!==i&&(i=_,p=!0)}if(f&&f.type!==Wt&&(!ns(l,f)||p)){const _=Gc(f,a,s,n);if(Qc(f,_),c==="out-in")return s.isLeaving=!0,_.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},rc(o);c==="in-out"&&l.type!==Wt&&(_.delayLeave=(v,C,N)=>{const T=Lg(s,f);T[String(f.key)]=f,v._leaveCb=()=>{C(),v._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=N})}return o}}},yw=_w;function Lg(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Gc(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:_,onAppear:v,onAfterAppear:C,onAppearCancelled:N}=e,T=String(t.key),D=Lg(n,t),q=(B,we)=>{B&&Pt(B,s,9,we)},ee=(B,we)=>{const ge=we[1];q(B,we),Q(B)?B.every(et=>et.length<=1)&&ge():B.length<=1&&ge()},fe={mode:r,persisted:o,beforeEnter(B){let we=a;if(!n.isMounted)if(i)we=_||a;else return;B._leaveCb&&B._leaveCb(!0);const ge=D[T];ge&&ns(t,ge)&&ge.el._leaveCb&&ge.el._leaveCb(),q(we,[B])},enter(B){let we=c,ge=l,et=u;if(!n.isMounted)if(i)we=v||c,ge=C||l,et=N||u;else return;let tt=!1;const Mt=B._enterCb=fn=>{tt||(tt=!0,fn?q(et,[B]):q(ge,[B]),fe.delayedLeave&&fe.delayedLeave(),B._enterCb=void 0)};we?ee(we,[B,Mt]):Mt()},leave(B,we){const ge=String(t.key);if(B._enterCb&&B._enterCb(!0),n.isUnmounting)return we();q(h,[B]);let et=!1;const tt=B._leaveCb=Mt=>{et||(et=!0,we(),Mt?q(m,[B]):q(p,[B]),B._leaveCb=void 0,D[ge]===t&&delete D[ge])};D[ge]=t,f?ee(f,[B,tt]):tt()},clone(B){return Gc(B,e,n,s)}};return fe}function rc(t){if(ma(t))return t=$n(t),t.children=null,t}function _f(t){return ma(t)?t.children?t.children[0]:void 0:t}function Qc(t,e){t.shapeFlag&6&&t.component?Qc(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Fg(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Ct?(o.patchFlag&128&&i++,s=s.concat(Fg(o.children,e,a))):(e||o.type!==Wt)&&s.push(a!=null?$n(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function Ug(t){return J(t)?{setup:t,name:t.name}:t}const vo=t=>!!t.type.__asyncLoader,ma=t=>t.type.__isKeepAlive;function vw(t,e){Vg(t,"a",e)}function Ew(t,e){Vg(t,"da",e)}function Vg(t,e,n=Ue){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(_a(e,s,n),n){let i=n.parent;for(;i&&i.parent;)ma(i.parent.vnode)&&ww(s,e,n,i),i=i.parent}}function ww(t,e,n,s){const i=_a(e,t,s,!0);Tu(()=>{cu(s[e],i)},n)}function _a(t,e,n=Ue,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;pi(),ei(n);const a=Pt(e,n,t,o);return hs(),gi(),a});return s?i.unshift(r):i.push(r),r}}const Cn=t=>(e,n=Ue)=>(!ar||t==="sp")&&_a(t,(...s)=>e(...s),n),Tw=Cn("bm"),Sr=Cn("m"),Iw=Cn("bu"),Cw=Cn("u"),Bg=Cn("bum"),Tu=Cn("um"),$g=Cn("sp"),bw=Cn("rtg"),Sw=Cn("rtc");function Aw(t,e=Ue){_a("ec",t,e)}function Rw(t,e){const n=Dt;if(n===null)return t;const s=wa(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,c,l=be]=e[r];o&&(J(o)&&(o={mounted:o,updated:o}),o.deep&&is(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Yn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let c=a.dir[s];c&&(pi(),Pt(c,n,8,[t.el,a,t,e]),gi())}}const Nw=Symbol();function kw(t,e,n,s){let i;const r=n&&n[s];if(Q(t)||He(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Ne(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];i[a]=e(t[l],l,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const Yc=t=>t?Jg(t)?wa(t)||t.proxy:Yc(t.parent):null,Hi=ht(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Yc(t.parent),$root:t=>Yc(t.root),$emit:t=>t.emit,$options:t=>Iu(t),$forceUpdate:t=>t.f||(t.f=()=>Eu(t.update)),$nextTick:t=>t.n||(t.n=Ng.bind(t.proxy)),$watch:t=>gw.bind(t)}),oc=(t,e)=>t!==be&&!t.__isScriptSetup&&ae(t,e),Dw={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(oc(s,e))return o[e]=1,s[e];if(i!==be&&ae(i,e))return o[e]=2,i[e];if((l=t.propsOptions[0])&&ae(l,e))return o[e]=3,r[e];if(n!==be&&ae(n,e))return o[e]=4,n[e];Xc&&(o[e]=0)}}const u=Hi[e];let h,f;if(u)return e==="$attrs"&&wt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==be&&ae(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,ae(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return oc(i,e)?(i[e]=n,!0):s!==be&&ae(s,e)?(s[e]=n,!0):ae(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==be&&ae(t,o)||oc(e,o)||(a=r[0])&&ae(a,o)||ae(s,o)||ae(Hi,o)||ae(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ae(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Xc=!0;function Ow(t){const e=Iu(t),n=t.proxy,s=t.ctx;Xc=!1,e.beforeCreate&&yf(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:m,activated:_,deactivated:v,beforeDestroy:C,beforeUnmount:N,destroyed:T,unmounted:D,render:q,renderTracked:ee,renderTriggered:fe,errorCaptured:B,serverPrefetch:we,expose:ge,inheritAttrs:et,components:tt,directives:Mt,filters:fn}=e;if(l&&Pw(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const Te in o){const ye=o[Te];J(ye)&&(s[Te]=ye.bind(n))}if(i){const Te=i.call(n,n);Ne(Te)&&(t.data=br(Te))}if(Xc=!0,r)for(const Te in r){const ye=r[Te],Lt=J(ye)?ye.bind(n,n):J(ye.get)?ye.get.bind(n,n):Kt,Qn=!J(ye)&&J(ye.set)?ye.set.bind(n):Kt,Ft=bt({get:Lt,set:Qn});Object.defineProperty(s,Te,{enumerable:!0,configurable:!0,get:()=>Ft.value,set:_t=>Ft.value=_t})}if(a)for(const Te in a)Hg(a[Te],s,n,Te);if(c){const Te=J(c)?c.call(n):c;Reflect.ownKeys(Te).forEach(ye=>{yo(ye,Te[ye])})}u&&yf(u,t,"c");function xe(Te,ye){Q(ye)?ye.forEach(Lt=>Te(Lt.bind(n))):ye&&Te(ye.bind(n))}if(xe(Tw,h),xe(Sr,f),xe(Iw,p),xe(Cw,m),xe(vw,_),xe(Ew,v),xe(Aw,B),xe(Sw,ee),xe(bw,fe),xe(Bg,N),xe(Tu,D),xe($g,we),Q(ge))if(ge.length){const Te=t.exposed||(t.exposed={});ge.forEach(ye=>{Object.defineProperty(Te,ye,{get:()=>n[ye],set:Lt=>n[ye]=Lt})})}else t.exposed||(t.exposed={});q&&t.render===Kt&&(t.render=q),et!=null&&(t.inheritAttrs=et),tt&&(t.components=tt),Mt&&(t.directives=Mt)}function Pw(t,e,n=Kt,s=!1){Q(t)&&(t=Jc(t));for(const i in t){const r=t[i];let o;Ne(r)?"default"in r?o=St(r.from||i,r.default,!0):o=St(r.from||i):o=St(r),Ye(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function yf(t,e,n){Pt(Q(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Hg(t,e,n,s){const i=s.includes(".")?Mg(n,s):()=>n[s];if(He(t)){const r=e[t];J(r)&&$i(i,r)}else if(J(t))$i(i,t.bind(n));else if(Ne(t))if(Q(t))t.forEach(r=>Hg(r,e,n,s));else{const r=J(t.handler)?t.handler.bind(n):e[t.handler];J(r)&&$i(i,r,t)}}function Iu(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let c;return a?c=a:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(l=>No(c,l,o,!0)),No(c,e,o)),Ne(e)&&r.set(e,c),c}function No(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&No(t,r,n,!0),i&&i.forEach(o=>No(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=xw[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const xw={data:vf,props:Jn,emits:Jn,methods:Jn,computed:Jn,beforeCreate:dt,created:dt,beforeMount:dt,mounted:dt,beforeUpdate:dt,updated:dt,beforeDestroy:dt,beforeUnmount:dt,destroyed:dt,unmounted:dt,activated:dt,deactivated:dt,errorCaptured:dt,serverPrefetch:dt,components:Jn,directives:Jn,watch:Lw,provide:vf,inject:Mw};function vf(t,e){return e?t?function(){return ht(J(t)?t.call(this,this):t,J(e)?e.call(this,this):e)}:e:t}function Mw(t,e){return Jn(Jc(t),Jc(e))}function Jc(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function dt(t,e){return t?[...new Set([].concat(t,e))]:e}function Jn(t,e){return t?ht(ht(Object.create(null),t),e):e}function Lw(t,e){if(!t)return e;if(!e)return t;const n=ht(Object.create(null),t);for(const s in e)n[s]=dt(t[s],e[s]);return n}function Fw(t,e,n,s=!1){const i={},r={};So(r,va,1),t.propsDefaults=Object.create(null),jg(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:YE(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Uw(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ue(i),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(ga(t.emitsOptions,f))continue;const p=e[f];if(c)if(ae(r,f))p!==r[f]&&(r[f]=p,l=!0);else{const m=Xs(f);i[m]=Zc(c,a,m,p,t,!1)}else p!==r[f]&&(r[f]=p,l=!0)}}}else{jg(t,e,i,r)&&(l=!0);let u;for(const h in a)(!e||!ae(e,h)&&((u=di(h))===h||!ae(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Zc(c,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!ae(e,h))&&(delete r[h],l=!0)}l&&En(t,"set","$attrs")}function jg(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(mo(c))continue;const l=e[c];let u;i&&ae(i,u=Xs(c))?!r||!r.includes(u)?n[u]=l:(a||(a={}))[u]=l:ga(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(r){const c=ue(n),l=a||be;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Zc(i,c,h,l[h],t,!ae(l,h))}}return o}function Zc(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=ae(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&J(c)){const{propsDefaults:l}=i;n in l?s=l[n]:(ei(i),s=l[n]=c.call(null,e),hs())}else s=c}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===di(n))&&(s=!0))}return s}function Kg(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let c=!1;if(!J(t)){const u=h=>{c=!0;const[f,p]=Kg(h,e,!0);ht(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return Ne(t)&&s.set(t,Vs),Vs;if(Q(r))for(let u=0;u<r.length;u++){const h=Xs(r[u]);Ef(h)&&(o[h]=be)}else if(r)for(const u in r){const h=Xs(u);if(Ef(h)){const f=r[u],p=o[h]=Q(f)||J(f)?{type:f}:Object.assign({},f);if(p){const m=If(Boolean,p.type),_=If(String,p.type);p[0]=m>-1,p[1]=_<0||m<_,(m>-1||ae(p,"default"))&&a.push(h)}}}const l=[o,a];return Ne(t)&&s.set(t,l),l}function Ef(t){return t[0]!=="$"}function wf(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Tf(t,e){return wf(t)===wf(e)}function If(t,e){return Q(e)?e.findIndex(n=>Tf(n,t)):J(e)&&Tf(e,t)?0:-1}const qg=t=>t[0]==="_"||t==="$stable",Cu=t=>Q(t)?t.map(Jt):[Jt(t)],Vw=(t,e,n)=>{if(e._n)return e;const s=aw((...i)=>Cu(e(...i)),n);return s._c=!1,s},Wg=(t,e,n)=>{const s=t._ctx;for(const i in t){if(qg(i))continue;const r=t[i];if(J(r))e[i]=Vw(i,r,s);else if(r!=null){const o=Cu(r);e[i]=()=>o}}},zg=(t,e)=>{const n=Cu(e);t.slots.default=()=>n},Bw=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ue(e),So(e,"_",n)):Wg(e,t.slots={})}else t.slots={},e&&zg(t,e);So(t.slots,va,1)},$w=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=be;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(ht(i,e),!n&&a===1&&delete i._):(r=!e.$stable,Wg(e,i)),o=e}else e&&(zg(t,e),o={default:1});if(r)for(const a in i)!qg(a)&&!(a in o)&&delete i[a]};function Gg(){return{app:null,config:{isNativeTag:pE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Hw=0;function jw(t,e){return function(s,i=null){J(s)||(s=Object.assign({},s)),i!=null&&!Ne(i)&&(i=null);const r=Gg(),o=new Set;let a=!1;const c=r.app={_uid:Hw++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:aT,get config(){return r.config},set config(l){},use(l,...u){return o.has(l)||(l&&J(l.install)?(o.add(l),l.install(c,...u)):J(l)&&(o.add(l),l(c,...u))),c},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),c},component(l,u){return u?(r.components[l]=u,c):r.components[l]},directive(l,u){return u?(r.directives[l]=u,c):r.directives[l]},mount(l,u,h){if(!a){const f=pt(s,i);return f.appContext=r,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,wa(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return r.provides[l]=u,c}};return c}}function el(t,e,n,s,i=!1){if(Q(t)){t.forEach((f,p)=>el(f,e&&(Q(e)?e[p]:e),n,s,i));return}if(vo(s)&&!i)return;const r=s.shapeFlag&4?wa(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:c}=t,l=e&&e.r,u=a.refs===be?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(He(l)?(u[l]=null,ae(h,l)&&(h[l]=null)):Ye(l)&&(l.value=null)),J(c))xn(c,a,12,[o,u]);else{const f=He(c),p=Ye(c);if(f||p){const m=()=>{if(t.f){const _=f?ae(h,c)?h[c]:u[c]:c.value;i?Q(_)&&cu(_,r):Q(_)?_.includes(r)||_.push(r):f?(u[c]=[r],ae(h,c)&&(h[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,ae(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,yt(m,n)):m()}}}const yt=dw;function Kw(t){return qw(t)}function qw(t,e){const n=EE();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=Kt,insertStaticContent:m}=t,_=(d,g,y,E=null,I=null,R=null,M=!1,A=null,k=!!g.dynamicChildren)=>{if(d===g)return;d&&!ns(d,g)&&(E=x(d),_t(d,I,R,!0),d=null),g.patchFlag===-2&&(k=!1,g.dynamicChildren=null);const{type:b,ref:H,shapeFlag:F}=g;switch(b){case ya:v(d,g,y,E);break;case Wt:C(d,g,y,E);break;case Eo:d==null&&N(g,y,E,M);break;case Ct:tt(d,g,y,E,I,R,M,A,k);break;default:F&1?q(d,g,y,E,I,R,M,A,k):F&6?Mt(d,g,y,E,I,R,M,A,k):(F&64||F&128)&&b.process(d,g,y,E,I,R,M,A,k,oe)}H!=null&&I&&el(H,d&&d.ref,R,g||d,!g)},v=(d,g,y,E)=>{if(d==null)s(g.el=a(g.children),y,E);else{const I=g.el=d.el;g.children!==d.children&&l(I,g.children)}},C=(d,g,y,E)=>{d==null?s(g.el=c(g.children||""),y,E):g.el=d.el},N=(d,g,y,E)=>{[d.el,d.anchor]=m(d.children,g,y,E,d.el,d.anchor)},T=({el:d,anchor:g},y,E)=>{let I;for(;d&&d!==g;)I=f(d),s(d,y,E),d=I;s(g,y,E)},D=({el:d,anchor:g})=>{let y;for(;d&&d!==g;)y=f(d),i(d),d=y;i(g)},q=(d,g,y,E,I,R,M,A,k)=>{M=M||g.type==="svg",d==null?ee(g,y,E,I,R,M,A,k):we(d,g,I,R,M,A,k)},ee=(d,g,y,E,I,R,M,A)=>{let k,b;const{type:H,props:F,shapeFlag:j,transition:G,dirs:te}=d;if(k=d.el=o(d.type,R,F&&F.is,F),j&8?u(k,d.children):j&16&&B(d.children,k,null,E,I,R&&H!=="foreignObject",M,A),te&&Yn(d,null,E,"created"),fe(k,d,d.scopeId,M,E),F){for(const ve in F)ve!=="value"&&!mo(ve)&&r(k,ve,null,F[ve],R,d.children,E,I,L);"value"in F&&r(k,"value",null,F.value),(b=F.onVnodeBeforeMount)&&Xt(b,E,d)}te&&Yn(d,null,E,"beforeMount");const Ie=(!I||I&&!I.pendingBranch)&&G&&!G.persisted;Ie&&G.beforeEnter(k),s(k,g,y),((b=F&&F.onVnodeMounted)||Ie||te)&&yt(()=>{b&&Xt(b,E,d),Ie&&G.enter(k),te&&Yn(d,null,E,"mounted")},I)},fe=(d,g,y,E,I)=>{if(y&&p(d,y),E)for(let R=0;R<E.length;R++)p(d,E[R]);if(I){let R=I.subTree;if(g===R){const M=I.vnode;fe(d,M,M.scopeId,M.slotScopeIds,I.parent)}}},B=(d,g,y,E,I,R,M,A,k=0)=>{for(let b=k;b<d.length;b++){const H=d[b]=A?kn(d[b]):Jt(d[b]);_(null,H,g,y,E,I,R,M,A)}},we=(d,g,y,E,I,R,M)=>{const A=g.el=d.el;let{patchFlag:k,dynamicChildren:b,dirs:H}=g;k|=d.patchFlag&16;const F=d.props||be,j=g.props||be;let G;y&&Xn(y,!1),(G=j.onVnodeBeforeUpdate)&&Xt(G,y,g,d),H&&Yn(g,d,y,"beforeUpdate"),y&&Xn(y,!0);const te=I&&g.type!=="foreignObject";if(b?ge(d.dynamicChildren,b,A,y,E,te,R):M||ye(d,g,A,null,y,E,te,R,!1),k>0){if(k&16)et(A,g,F,j,y,E,I);else if(k&2&&F.class!==j.class&&r(A,"class",null,j.class,I),k&4&&r(A,"style",F.style,j.style,I),k&8){const Ie=g.dynamicProps;for(let ve=0;ve<Ie.length;ve++){const Me=Ie[ve],Ut=F[Me],Ns=j[Me];(Ns!==Ut||Me==="value")&&r(A,Me,Ut,Ns,I,d.children,y,E,L)}}k&1&&d.children!==g.children&&u(A,g.children)}else!M&&b==null&&et(A,g,F,j,y,E,I);((G=j.onVnodeUpdated)||H)&&yt(()=>{G&&Xt(G,y,g,d),H&&Yn(g,d,y,"updated")},E)},ge=(d,g,y,E,I,R,M)=>{for(let A=0;A<g.length;A++){const k=d[A],b=g[A],H=k.el&&(k.type===Ct||!ns(k,b)||k.shapeFlag&70)?h(k.el):y;_(k,b,H,null,E,I,R,M,!0)}},et=(d,g,y,E,I,R,M)=>{if(y!==E){if(y!==be)for(const A in y)!mo(A)&&!(A in E)&&r(d,A,y[A],null,M,g.children,I,R,L);for(const A in E){if(mo(A))continue;const k=E[A],b=y[A];k!==b&&A!=="value"&&r(d,A,b,k,M,g.children,I,R,L)}"value"in E&&r(d,"value",y.value,E.value)}},tt=(d,g,y,E,I,R,M,A,k)=>{const b=g.el=d?d.el:a(""),H=g.anchor=d?d.anchor:a("");let{patchFlag:F,dynamicChildren:j,slotScopeIds:G}=g;G&&(A=A?A.concat(G):G),d==null?(s(b,y,E),s(H,y,E),B(g.children,y,H,I,R,M,A,k)):F>0&&F&64&&j&&d.dynamicChildren?(ge(d.dynamicChildren,j,y,I,R,M,A),(g.key!=null||I&&g===I.subTree)&&Qg(d,g,!0)):ye(d,g,y,H,I,R,M,A,k)},Mt=(d,g,y,E,I,R,M,A,k)=>{g.slotScopeIds=A,d==null?g.shapeFlag&512?I.ctx.activate(g,y,E,M,k):fn(g,y,E,I,R,M,k):Ai(d,g,k)},fn=(d,g,y,E,I,R,M)=>{const A=d.component=eT(d,E,I);if(ma(d)&&(A.ctx.renderer=oe),tT(A),A.asyncDep){if(I&&I.registerDep(A,xe),!d.el){const k=A.subTree=pt(Wt);C(null,k,g,y)}return}xe(A,d,g,y,I,R,M)},Ai=(d,g,y)=>{const E=g.component=d.component;if(uw(d,g,y))if(E.asyncDep&&!E.asyncResolved){Te(E,g,y);return}else E.next=g,sw(E.update),E.update();else g.el=d.el,E.vnode=g},xe=(d,g,y,E,I,R,M)=>{const A=()=>{if(d.isMounted){let{next:H,bu:F,u:j,parent:G,vnode:te}=d,Ie=H,ve;Xn(d,!1),H?(H.el=te.el,Te(d,H,M)):H=te,F&&_o(F),(ve=H.props&&H.props.onVnodeBeforeUpdate)&&Xt(ve,G,H,te),Xn(d,!0);const Me=ic(d),Ut=d.subTree;d.subTree=Me,_(Ut,Me,h(Ut.el),x(Ut),d,I,R),H.el=Me.el,Ie===null&&hw(d,Me.el),j&&yt(j,I),(ve=H.props&&H.props.onVnodeUpdated)&&yt(()=>Xt(ve,G,H,te),I)}else{let H;const{el:F,props:j}=g,{bm:G,m:te,parent:Ie}=d,ve=vo(g);if(Xn(d,!1),G&&_o(G),!ve&&(H=j&&j.onVnodeBeforeMount)&&Xt(H,Ie,g),Xn(d,!0),F&&Z){const Me=()=>{d.subTree=ic(d),Z(F,d.subTree,d,I,null)};ve?g.type.__asyncLoader().then(()=>!d.isUnmounted&&Me()):Me()}else{const Me=d.subTree=ic(d);_(null,Me,y,E,d,I,R),g.el=Me.el}if(te&&yt(te,I),!ve&&(H=j&&j.onVnodeMounted)){const Me=g;yt(()=>Xt(H,Ie,Me),I)}(g.shapeFlag&256||Ie&&vo(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&d.a&&yt(d.a,I),d.isMounted=!0,g=y=E=null}},k=d.effect=new fu(A,()=>Eu(b),d.scope),b=d.update=()=>k.run();b.id=d.uid,Xn(d,!0),b()},Te=(d,g,y)=>{g.component=d;const E=d.vnode.props;d.vnode=g,d.next=null,Uw(d,g.props,E,y),$w(d,g.children,y),pi(),gf(),gi()},ye=(d,g,y,E,I,R,M,A,k=!1)=>{const b=d&&d.children,H=d?d.shapeFlag:0,F=g.children,{patchFlag:j,shapeFlag:G}=g;if(j>0){if(j&128){Qn(b,F,y,E,I,R,M,A,k);return}else if(j&256){Lt(b,F,y,E,I,R,M,A,k);return}}G&8?(H&16&&L(b,I,R),F!==b&&u(y,F)):H&16?G&16?Qn(b,F,y,E,I,R,M,A,k):L(b,I,R,!0):(H&8&&u(y,""),G&16&&B(F,y,E,I,R,M,A,k))},Lt=(d,g,y,E,I,R,M,A,k)=>{d=d||Vs,g=g||Vs;const b=d.length,H=g.length,F=Math.min(b,H);let j;for(j=0;j<F;j++){const G=g[j]=k?kn(g[j]):Jt(g[j]);_(d[j],G,y,null,I,R,M,A,k)}b>H?L(d,I,R,!0,!1,F):B(g,y,E,I,R,M,A,k,F)},Qn=(d,g,y,E,I,R,M,A,k)=>{let b=0;const H=g.length;let F=d.length-1,j=H-1;for(;b<=F&&b<=j;){const G=d[b],te=g[b]=k?kn(g[b]):Jt(g[b]);if(ns(G,te))_(G,te,y,null,I,R,M,A,k);else break;b++}for(;b<=F&&b<=j;){const G=d[F],te=g[j]=k?kn(g[j]):Jt(g[j]);if(ns(G,te))_(G,te,y,null,I,R,M,A,k);else break;F--,j--}if(b>F){if(b<=j){const G=j+1,te=G<H?g[G].el:E;for(;b<=j;)_(null,g[b]=k?kn(g[b]):Jt(g[b]),y,te,I,R,M,A,k),b++}}else if(b>j)for(;b<=F;)_t(d[b],I,R,!0),b++;else{const G=b,te=b,Ie=new Map;for(b=te;b<=j;b++){const Tt=g[b]=k?kn(g[b]):Jt(g[b]);Tt.key!=null&&Ie.set(Tt.key,b)}let ve,Me=0;const Ut=j-te+1;let Ns=!1,sf=0;const Ri=new Array(Ut);for(b=0;b<Ut;b++)Ri[b]=0;for(b=G;b<=F;b++){const Tt=d[b];if(Me>=Ut){_t(Tt,I,R,!0);continue}let Yt;if(Tt.key!=null)Yt=Ie.get(Tt.key);else for(ve=te;ve<=j;ve++)if(Ri[ve-te]===0&&ns(Tt,g[ve])){Yt=ve;break}Yt===void 0?_t(Tt,I,R,!0):(Ri[Yt-te]=b+1,Yt>=sf?sf=Yt:Ns=!0,_(Tt,g[Yt],y,null,I,R,M,A,k),Me++)}const rf=Ns?Ww(Ri):Vs;for(ve=rf.length-1,b=Ut-1;b>=0;b--){const Tt=te+b,Yt=g[Tt],of=Tt+1<H?g[Tt+1].el:E;Ri[b]===0?_(null,Yt,y,of,I,R,M,A,k):Ns&&(ve<0||b!==rf[ve]?Ft(Yt,y,of,2):ve--)}}},Ft=(d,g,y,E,I=null)=>{const{el:R,type:M,transition:A,children:k,shapeFlag:b}=d;if(b&6){Ft(d.component.subTree,g,y,E);return}if(b&128){d.suspense.move(g,y,E);return}if(b&64){M.move(d,g,y,oe);return}if(M===Ct){s(R,g,y);for(let F=0;F<k.length;F++)Ft(k[F],g,y,E);s(d.anchor,g,y);return}if(M===Eo){T(d,g,y);return}if(E!==2&&b&1&&A)if(E===0)A.beforeEnter(R),s(R,g,y),yt(()=>A.enter(R),I);else{const{leave:F,delayLeave:j,afterLeave:G}=A,te=()=>s(R,g,y),Ie=()=>{F(R,()=>{te(),G&&G()})};j?j(R,te,Ie):Ie()}else s(R,g,y)},_t=(d,g,y,E=!1,I=!1)=>{const{type:R,props:M,ref:A,children:k,dynamicChildren:b,shapeFlag:H,patchFlag:F,dirs:j}=d;if(A!=null&&el(A,null,y,d,!0),H&256){g.ctx.deactivate(d);return}const G=H&1&&j,te=!vo(d);let Ie;if(te&&(Ie=M&&M.onVnodeBeforeUnmount)&&Xt(Ie,g,d),H&6)w(d.component,y,E);else{if(H&128){d.suspense.unmount(y,E);return}G&&Yn(d,null,g,"beforeUnmount"),H&64?d.type.remove(d,g,y,I,oe,E):b&&(R!==Ct||F>0&&F&64)?L(b,g,y,!1,!0):(R===Ct&&F&384||!I&&H&16)&&L(k,g,y),E&&Rs(d)}(te&&(Ie=M&&M.onVnodeUnmounted)||G)&&yt(()=>{Ie&&Xt(Ie,g,d),G&&Yn(d,null,g,"unmounted")},y)},Rs=d=>{const{type:g,el:y,anchor:E,transition:I}=d;if(g===Ct){Qr(y,E);return}if(g===Eo){D(d);return}const R=()=>{i(y),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(d.shapeFlag&1&&I&&!I.persisted){const{leave:M,delayLeave:A}=I,k=()=>M(y,R);A?A(d.el,R,k):k()}else R()},Qr=(d,g)=>{let y;for(;d!==g;)y=f(d),i(d),d=y;i(g)},w=(d,g,y)=>{const{bum:E,scope:I,update:R,subTree:M,um:A}=d;E&&_o(E),I.stop(),R&&(R.active=!1,_t(M,d,g,y)),A&&yt(A,g),yt(()=>{d.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},L=(d,g,y,E=!1,I=!1,R=0)=>{for(let M=R;M<d.length;M++)_t(d[M],g,y,E,I)},x=d=>d.shapeFlag&6?x(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),$=(d,g,y)=>{d==null?g._vnode&&_t(g._vnode,null,null,!0):_(g._vnode||null,d,g,null,null,null,y),gf(),Dg(),g._vnode=d},oe={p:_,um:_t,m:Ft,r:Rs,mt:fn,mc:B,pc:ye,pbc:ge,n:x,o:t};let ke,Z;return e&&([ke,Z]=e(oe)),{render:$,hydrate:ke,createApp:jw($,ke)}}function Xn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Qg(t,e,n=!1){const s=t.children,i=e.children;if(Q(s)&&Q(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=kn(i[r]),a.el=o.el),n||Qg(o,a)),a.type===ya&&(a.el=o.el)}}function Ww(t){const e=t.slice(),n=[0];let s,i,r,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(i=n[n.length-1],t[i]<l){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<l?r=a+1:o=a;l<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const zw=t=>t.__isTeleport,Ct=Symbol(void 0),ya=Symbol(void 0),Wt=Symbol(void 0),Eo=Symbol(void 0),ji=[];let $t=null;function yn(t=!1){ji.push($t=t?null:[])}function Gw(){ji.pop(),$t=ji[ji.length-1]||null}let or=1;function Cf(t){or+=t}function Yg(t){return t.dynamicChildren=or>0?$t||Vs:null,Gw(),or>0&&$t&&$t.push(t),t}function Zs(t,e,n,s,i,r){return Yg(gn(t,e,n,s,i,r,!0))}function bu(t,e,n,s,i){return Yg(pt(t,e,n,s,i,!0))}function tl(t){return t?t.__v_isVNode===!0:!1}function ns(t,e){return t.type===e.type&&t.key===e.key}const va="__vInternal",Xg=({key:t})=>t??null,wo=({ref:t,ref_key:e,ref_for:n})=>t!=null?He(t)||Ye(t)||J(t)?{i:Dt,r:t,k:e,f:!!n}:t:null;function gn(t,e=null,n=null,s=0,i=null,r=t===Ct?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Xg(e),ref:e&&wo(e),scopeId:xg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Dt};return a?(Au(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=He(n)?8:16),or>0&&!o&&$t&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&$t.push(c),c}const pt=Qw;function Qw(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Nw)&&(t=Wt),tl(t)){const a=$n(t,e,!0);return n&&Au(a,n),or>0&&!r&&$t&&(a.shapeFlag&6?$t[$t.indexOf(t)]=a:$t.push(a)),a.patchFlag|=-2,a}if(rT(t)&&(t=t.__vccOpts),e){e=Yw(e);let{class:a,style:c}=e;a&&!He(a)&&(e.class=ou(a)),Ne(c)&&(wg(c)&&!Q(c)&&(c=ht({},c)),e.style=ru(c))}const o=He(t)?1:fw(t)?128:zw(t)?64:Ne(t)?4:J(t)?2:0;return gn(t,e,n,s,i,o,r,!0)}function Yw(t){return t?wg(t)||va in t?ht({},t):t:null}function $n(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?Xw(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Xg(a),ref:e&&e.ref?n&&i?Q(i)?i.concat(wo(e)):[i,wo(e)]:wo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ct?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&$n(t.ssContent),ssFallback:t.ssFallback&&$n(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Ea(t=" ",e=0){return pt(ya,null,t,e)}function Su(t="",e=!1){return e?(yn(),bu(Wt,null,t)):pt(Wt,null,t)}function Jt(t){return t==null||typeof t=="boolean"?pt(Wt):Q(t)?pt(Ct,null,t.slice()):typeof t=="object"?kn(t):pt(ya,null,String(t))}function kn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:$n(t)}function Au(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(Q(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Au(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(va in e)?e._ctx=Dt:i===3&&Dt&&(Dt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else J(e)?(e={default:e,_ctx:Dt},n=32):(e=String(e),s&64?(n=16,e=[Ea(e)]):n=8);t.children=e,t.shapeFlag|=n}function Xw(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=ou([e.class,s.class]));else if(i==="style")e.style=ru([e.style,s.style]);else if(ua(i)){const r=e[i],o=s[i];o&&r!==o&&!(Q(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Xt(t,e,n,s=null){Pt(t,e,7,[n,s])}const Jw=Gg();let Zw=0;function eT(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Jw,r={uid:Zw++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new cg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Kg(s,i),emitsOptions:Pg(s,i),emit:null,emitted:null,propsDefaults:be,inheritAttrs:s.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=ow.bind(null,r),t.ce&&t.ce(r),r}let Ue=null;const Ar=()=>Ue||Dt,ei=t=>{Ue=t,t.scope.on()},hs=()=>{Ue&&Ue.scope.off(),Ue=null};function Jg(t){return t.vnode.shapeFlag&4}let ar=!1;function tT(t,e=!1){ar=e;const{props:n,children:s}=t.vnode,i=Jg(t);Fw(t,n,i,e),Bw(t,s);const r=i?nT(t,e):void 0;return ar=!1,r}function nT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=_u(new Proxy(t.ctx,Dw));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?iT(t):null;ei(t),pi();const r=xn(s,t,0,[t.props,i]);if(gi(),hs(),ig(r)){if(r.then(hs,hs),e)return r.then(o=>{bf(t,o,e)}).catch(o=>{pa(o,t,0)});t.asyncDep=r}else bf(t,r,e)}else Zg(t,e)}function bf(t,e,n){J(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ne(e)&&(t.setupState=Sg(e)),Zg(t,n)}let Sf;function Zg(t,e,n){const s=t.type;if(!t.render){if(!e&&Sf&&!s.render){const i=s.template||Iu(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=ht(ht({isCustomElement:r,delimiters:a},o),c);s.render=Sf(i,l)}}t.render=s.render||Kt}ei(t),pi(),Ow(t),gi(),hs()}function sT(t){return new Proxy(t.attrs,{get(e,n){return wt(t,"get","$attrs"),e[n]}})}function iT(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=sT(t))},slots:t.slots,emit:t.emit,expose:e}}function wa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Sg(_u(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Hi)return Hi[n](t)},has(e,n){return n in e||n in Hi}}))}function rT(t){return J(t)&&"__vccOpts"in t}const bt=(t,e)=>ew(t,e,ar);function em(t,e,n){const s=arguments.length;return s===2?Ne(e)&&!Q(e)?tl(e)?pt(t,null,[e]):pt(t,e):pt(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&tl(n)&&(n=[n]),pt(t,e,n))}const tm=Symbol(""),oT=()=>St(tm),aT="3.2.47",cT="http://www.w3.org/2000/svg",ss=typeof document<"u"?document:null,Af=ss&&ss.createElement("template"),lT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?ss.createElementNS(cT,t):ss.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>ss.createTextNode(t),createComment:t=>ss.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ss.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Af.innerHTML=s?`<svg>${t}</svg>`:t;const a=Af.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function uT(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function hT(t,e,n){const s=t.style,i=He(n);if(n&&!i){if(e&&!He(e))for(const r in e)n[r]==null&&nl(s,r,"");for(const r in n)nl(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Rf=/\s*!important$/;function nl(t,e,n){if(Q(n))n.forEach(s=>nl(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=fT(t,e);Rf.test(n)?t.setProperty(di(s),n.replace(Rf,""),"important"):t[s]=n}}const Nf=["Webkit","Moz","ms"],ac={};function fT(t,e){const n=ac[e];if(n)return n;let s=Xs(e);if(s!=="filter"&&s in t)return ac[e]=s;s=ag(s);for(let i=0;i<Nf.length;i++){const r=Nf[i]+s;if(r in t)return ac[e]=r}return e}const kf="http://www.w3.org/1999/xlink";function dT(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(kf,e.slice(6,e.length)):t.setAttributeNS(kf,e,n);else{const r=fE(e);n==null||r&&!tg(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function pT(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=tg(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Os(t,e,n,s){t.addEventListener(e,n,s)}function gT(t,e,n,s){t.removeEventListener(e,n,s)}function mT(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,c]=_T(e);if(s){const l=r[e]=ET(s,i);Os(t,a,l,c)}else o&&(gT(t,a,o,c),r[e]=void 0)}}const Df=/(?:Once|Passive|Capture)$/;function _T(t){let e;if(Df.test(t)){e={};let s;for(;s=t.match(Df);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):di(t.slice(2)),e]}let cc=0;const yT=Promise.resolve(),vT=()=>cc||(yT.then(()=>cc=0),cc=Date.now());function ET(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Pt(wT(s,n.value),e,5,[s])};return n.value=t,n.attached=vT(),n}function wT(t,e){if(Q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Of=/^on[a-z]/,TT=(t,e,n,s,i=!1,r,o,a,c)=>{e==="class"?uT(t,s,i):e==="style"?hT(t,n,s):ua(e)?au(e)||mT(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):IT(t,e,s,i))?pT(t,e,s,r,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),dT(t,e,s,i))};function IT(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Of.test(e)&&J(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Of.test(e)&&He(n)?!1:e in t}function CT(t){const e=Ar();if(!e)return;const n=e.ut=(i=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>il(r,i))},s=()=>{const i=t(e.proxy);sl(e.subTree,i),n(i)};pw(s),Sr(()=>{const i=new MutationObserver(s);i.observe(e.subTree.el.parentNode,{childList:!0}),Tu(()=>i.disconnect())})}function sl(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{sl(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)il(t.el,e);else if(t.type===Ct)t.children.forEach(n=>sl(n,e));else if(t.type===Eo){let{el:n,anchor:s}=t;for(;n&&(il(n,e),n!==s);)n=n.nextSibling}}function il(t,e){if(t.nodeType===1){const n=t.style;for(const s in e)n.setProperty(`--${s}`,e[s])}}const bT={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};yw.props;const Pf=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Q(e)?n=>_o(e,n):e};function ST(t){t.target.composing=!0}function xf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const AT={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=Pf(i);const r=s||i.props&&i.props.type==="number";Os(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Hc(a)),t._assign(a)}),n&&Os(t,"change",()=>{t.value=t.value.trim()}),e||(Os(t,"compositionstart",ST),Os(t,"compositionend",xf),Os(t,"change",xf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=Pf(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&Hc(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},RT=["ctrl","shift","alt","meta"],NT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>RT.some(n=>t[`${n}Key`]&&!e.includes(n))},kT=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=NT[e[i]];if(r&&r(n,e))return}return t(n,...s)},DT=ht({patchProp:TT},lT);let Mf;function OT(){return Mf||(Mf=Kw(DT))}const PT=(...t)=>{const e=OT().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=xT(s);if(!i)return;const r=e._component;!J(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function xT(t){return He(t)?document.querySelector(t):t}var MT=!1;/*!
  * pinia v2.0.35
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const LT=Symbol();var Lf;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Lf||(Lf={}));function FT(){const t=wE(!0),e=t.run(()=>qt({}));let n=[],s=[];const i=_u({install(r){i._a=r,r.provide(LT,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!MT?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}/**
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
 */const nm={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const P=function(t,e){if(!t)throw mi(e)},mi=function(t){return new Error("Firebase Database ("+nm.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const sm=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},UT=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ta={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(f=64)),s.push(n[u],n[h],n[f],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(sm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):UT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||l==null||h==null)throw new VT;const f=r<<2|a>>4;if(s.push(f),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const m=l<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class VT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const im=function(t){const e=sm(t);return Ta.encodeByteArray(e,!0)},ko=function(t){return im(t).replace(/\./g,"")},Do=function(t){try{return Ta.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function BT(t){return rm(void 0,t)}function rm(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!$T(n)||(t[n]=rm(t[n],e[n]));return t}function $T(t){return t!=="__proto__"}/**
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
 */function HT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const jT=()=>HT().__FIREBASE_DEFAULTS__,KT=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},qT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Do(t[1]);return e&&JSON.parse(e)},Ru=()=>{try{return jT()||KT()||qT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},WT=t=>{var e,n;return(n=(e=Ru())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},zT=t=>{const e=WT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},GT=()=>{var t;return(t=Ru())===null||t===void 0?void 0:t.config},QT=t=>{var e;return(e=Ru())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */function YT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ko(JSON.stringify(n)),ko(JSON.stringify(o)),a].join(".")}/**
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
 */function rn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Nu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rn())}function XT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function om(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function am(){return nm.NODE_ADMIN===!0}function cm(){try{return typeof indexedDB=="object"}catch{return!1}}function JT(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const ZT="FirebaseError";class bn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=ZT,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_i.prototype.create)}}class _i{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?eI(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new bn(i,a,s)}}function eI(t,e){return t.replace(tI,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const tI=/\{\$([^}]+)}/g;/**
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
 */function lr(t){return JSON.parse(t)}function Qe(t){return JSON.stringify(t)}/**
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
 */const lm=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=lr(Do(r[0])||""),n=lr(Do(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},nI=function(t){const e=lm(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},sI=function(t){const e=lm(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Sn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ti(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ff(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Oo(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function rl(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Uf(r)&&Uf(o)){if(!rl(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Uf(t){return t!==null&&typeof t=="object"}/**
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
 */function ku(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class iI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let h=0;h<80;h++){h<40?h<20?(l=a^r&(o^a),u=1518500249):(l=r^o^a,u=1859775393):h<60?(l=r&o|a&(r|o),u=2400959708):(l=r^o^a,u=3395469782);const f=(i<<5|i>>>27)+l+c+u+s[h]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function rI(t,e){const n=new oI(t,e);return n.subscribe.bind(n)}class oI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");aI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=lc),i.error===void 0&&(i.error=lc),i.complete===void 0&&(i.complete=lc);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function aI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function lc(){}function cI(t,e){return`${t} failed: ${e} argument `}/**
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
 */const lI=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,P(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ia=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Is(t){return t&&t._delegate?t._delegate:t}class Gt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Zn="[DEFAULT]";/**
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
 */class uI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new cr;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fI(e))try{this.getOrInitializeService({instanceIdentifier:Zn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Zn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zn){return this.instances.has(e)}getOptions(e=Zn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:hI(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Zn){return this.component?this.component.multipleInstances?e:Zn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hI(t){return t===Zn?void 0:t}function fI(t){return t.instantiationMode==="EAGER"}/**
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
 */class dI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new uI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const pI={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},gI=ce.INFO,mI={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},_I=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=mI[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rr{constructor(e){this.name=e,this._logLevel=gI,this._logHandler=_I,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const yI=(t,e)=>e.some(n=>t instanceof n);let Vf,Bf;function vI(){return Vf||(Vf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function EI(){return Bf||(Bf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const um=new WeakMap,ol=new WeakMap,hm=new WeakMap,uc=new WeakMap,Du=new WeakMap;function wI(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Mn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&um.set(n,t)}).catch(()=>{}),Du.set(e,t),e}function TI(t){if(ol.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});ol.set(t,e)}let al={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ol.get(t);if(e==="objectStoreNames")return t.objectStoreNames||hm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function II(t){al=t(al)}function CI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(hc(this),e,...n);return hm.set(s,e.sort?e.sort():[e]),Mn(s)}:EI().includes(t)?function(...e){return t.apply(hc(this),e),Mn(um.get(this))}:function(...e){return Mn(t.apply(hc(this),e))}}function bI(t){return typeof t=="function"?CI(t):(t instanceof IDBTransaction&&TI(t),yI(t,vI())?new Proxy(t,al):t)}function Mn(t){if(t instanceof IDBRequest)return wI(t);if(uc.has(t))return uc.get(t);const e=bI(t);return e!==t&&(uc.set(t,e),Du.set(e,t)),e}const hc=t=>Du.get(t);function SI(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Mn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Mn(o.result),c.oldVersion,c.newVersion,Mn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const AI=["get","getKey","getAll","getAllKeys","count"],RI=["put","add","delete","clear"],fc=new Map;function $f(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fc.get(e))return fc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=RI.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||AI.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return fc.set(e,r),r}II(t=>({...t,get:(e,n,s)=>$f(e,n)||t.get(e,n,s),has:(e,n)=>!!$f(e,n)||t.has(e,n)}));/**
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
 */class NI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(kI(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function kI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cl="@firebase/app",Hf="0.9.8";/**
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
 */const ms=new Rr("@firebase/app"),DI="@firebase/app-compat",OI="@firebase/analytics-compat",PI="@firebase/analytics",xI="@firebase/app-check-compat",MI="@firebase/app-check",LI="@firebase/auth",FI="@firebase/auth-compat",UI="@firebase/database",VI="@firebase/database-compat",BI="@firebase/functions",$I="@firebase/functions-compat",HI="@firebase/installations",jI="@firebase/installations-compat",KI="@firebase/messaging",qI="@firebase/messaging-compat",WI="@firebase/performance",zI="@firebase/performance-compat",GI="@firebase/remote-config",QI="@firebase/remote-config-compat",YI="@firebase/storage",XI="@firebase/storage-compat",JI="@firebase/firestore",ZI="@firebase/firestore-compat",eC="firebase",tC="9.20.0";/**
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
 */const ll="[DEFAULT]",nC={[cl]:"fire-core",[DI]:"fire-core-compat",[PI]:"fire-analytics",[OI]:"fire-analytics-compat",[MI]:"fire-app-check",[xI]:"fire-app-check-compat",[LI]:"fire-auth",[FI]:"fire-auth-compat",[UI]:"fire-rtdb",[VI]:"fire-rtdb-compat",[BI]:"fire-fn",[$I]:"fire-fn-compat",[HI]:"fire-iid",[jI]:"fire-iid-compat",[KI]:"fire-fcm",[qI]:"fire-fcm-compat",[WI]:"fire-perf",[zI]:"fire-perf-compat",[GI]:"fire-rc",[QI]:"fire-rc-compat",[YI]:"fire-gcs",[XI]:"fire-gcs-compat",[JI]:"fire-fst",[ZI]:"fire-fst-compat","fire-js":"fire-js",[eC]:"fire-js-all"};/**
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
 */const Po=new Map,ul=new Map;function sC(t,e){try{t.container.addComponent(e)}catch(n){ms.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function on(t){const e=t.name;if(ul.has(e))return ms.debug(`There were multiple attempts to register component ${e}.`),!1;ul.set(e,t);for(const n of Po.values())sC(n,t);return!0}function iC(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const rC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ln=new _i("app","Firebase",rC);/**
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
 */class oC{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Gt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ln.create("app-deleted",{appName:this._name})}}/**
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
 */const yi=tC;function fm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ll,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Ln.create("bad-app-name",{appName:String(i)});if(n||(n=GT()),!n)throw Ln.create("no-options");const r=Po.get(i);if(r){if(rl(n,r.options)&&rl(s,r.config))return r;throw Ln.create("duplicate-app",{appName:i})}const o=new dI(i);for(const c of ul.values())o.addComponent(c);const a=new oC(n,s,o);return Po.set(i,a),a}function dm(t=ll){const e=Po.get(t);if(!e&&t===ll)return fm();if(!e)throw Ln.create("no-app",{appName:t});return e}function At(t,e,n){var s;let i=(s=nC[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ms.warn(a.join(" "));return}on(new Gt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const aC="firebase-heartbeat-database",cC=1,ur="firebase-heartbeat-store";let dc=null;function pm(){return dc||(dc=SI(aC,cC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ur)}}}).catch(t=>{throw Ln.create("idb-open",{originalErrorMessage:t.message})})),dc}async function lC(t){try{return(await pm()).transaction(ur).objectStore(ur).get(gm(t))}catch(e){if(e instanceof bn)ms.warn(e.message);else{const n=Ln.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ms.warn(n.message)}}}async function jf(t,e){try{const s=(await pm()).transaction(ur,"readwrite");return await s.objectStore(ur).put(e,gm(t)),s.done}catch(n){if(n instanceof bn)ms.warn(n.message);else{const s=Ln.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ms.warn(s.message)}}}function gm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const uC=1024,hC=30*24*60*60*1e3;class fC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new pC(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Kf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=hC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Kf(),{heartbeatsToSend:n,unsentEntries:s}=dC(this._heartbeatsCache.heartbeats),i=ko(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Kf(){return new Date().toISOString().substring(0,10)}function dC(t,e=uC){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),qf(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),qf(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class pC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cm()?JT().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await lC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return jf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return jf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function qf(t){return ko(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function gC(t){on(new Gt("platform-logger",e=>new NI(e),"PRIVATE")),on(new Gt("heartbeat",e=>new fC(e),"PRIVATE")),At(cl,Hf,t),At(cl,Hf,"esm2017"),At("fire-js","")}gC("");function mm(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function _m(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mC=_m,ym=new _i("auth","Firebase",_m());/**
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
 */const xo=new Rr("@firebase/auth");function _C(t,...e){xo.logLevel<=ce.WARN&&xo.warn(`Auth (${yi}): ${t}`,...e)}function To(t,...e){xo.logLevel<=ce.ERROR&&xo.error(`Auth (${yi}): ${t}`,...e)}/**
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
 */function Wf(t,...e){throw Pu(t,...e)}function Ou(t,...e){return Pu(t,...e)}function yC(t,e,n){const s=Object.assign(Object.assign({},mC()),{[e]:n});return new _i("auth","Firebase",s).create(e,{appName:t.name})}function Pu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return ym.create(t,...e)}function de(t,e,...n){if(!t)throw Pu(e,...n)}function Ki(t){const e="INTERNAL ASSERTION FAILED: "+t;throw To(e),new Error(e)}function Mo(t,e){t||Ki(e)}function vC(){return zf()==="http:"||zf()==="https:"}function zf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function EC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vC()||XT()||"connection"in navigator)?navigator.onLine:!0}function wC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Nr{constructor(e,n){this.shortDelay=e,this.longDelay=n,Mo(n>e,"Short delay should be less than long delay!"),this.isMobile=Nu()||om()}get(){return EC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function TC(t,e){Mo(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class vm{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ki("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ki("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ki("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const IC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const CC=new Nr(3e4,6e4);function bC(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function xu(t,e,n,s,i={}){return Em(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=ku(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),vm.fetch()(wm(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function Em(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},IC),e);try{const i=new SC(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw no(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw no(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw no(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw no(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw yC(t,u,l);Wf(t,u)}}catch(i){if(i instanceof bn)throw i;Wf(t,"network-request-failed",{message:String(i)})}}function wm(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?TC(t.config,i):`${t.config.apiScheme}://${i}`}class SC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ou(this.auth,"network-request-failed")),CC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function no(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Ou(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function AC(t,e){return xu(t,"POST","/v1/accounts:delete",e)}async function RC(t,e){return xu(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function qi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function NC(t,e=!1){const n=Is(t),s=await n.getIdToken(e),i=Tm(s);de(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:qi(pc(i.auth_time)),issuedAtTime:qi(pc(i.iat)),expirationTime:qi(pc(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function pc(t){return Number(t)*1e3}function Tm(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return To("JWT malformed, contained fewer than 3 sections"),null;try{const i=Do(n);return i?JSON.parse(i):(To("Failed to decode base64 JWT payload"),null)}catch(i){return To("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function kC(t){const e=Tm(t);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function hl(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof bn&&DC(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function DC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class OC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Im{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=qi(this.lastLoginAt),this.creationTime=qi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Lo(t){var e;const n=t.auth,s=await t.getIdToken(),i=await hl(t,RC(n,{idToken:s}));de(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?MC(r.providerUserInfo):[],a=xC(t.providerData,o),c=t.isAnonymous,l=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Im(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function PC(t){const e=Is(t);await Lo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xC(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function MC(t){return t.map(e=>{var{providerId:n}=e,s=mm(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function LC(t,e){const n=await Em(t,{},async()=>{const s=ku({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=wm(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",vm.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class hr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return de(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await LC(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new hr;return s&&(de(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(de(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(de(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hr,this.toJSON())}_performRefresh(){return Ki("not implemented")}}/**
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
 */function Rn(t,e){de(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class js{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=mm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new OC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Im(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await hl(this,this.stsTokenManager.getToken(this.auth,e));return de(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return NC(this,e)}reload(){return PC(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new js(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Lo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await hl(this,AC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,p=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,C=(l=n.createdAt)!==null&&l!==void 0?l:void 0,N=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:T,emailVerified:D,isAnonymous:q,providerData:ee,stsTokenManager:fe}=n;de(T&&fe,e,"internal-error");const B=hr.fromJSON(this.name,fe);de(typeof T=="string",e,"internal-error"),Rn(h,e.name),Rn(f,e.name),de(typeof D=="boolean",e,"internal-error"),de(typeof q=="boolean",e,"internal-error"),Rn(p,e.name),Rn(m,e.name),Rn(_,e.name),Rn(v,e.name),Rn(C,e.name),Rn(N,e.name);const we=new js({uid:T,auth:e,email:f,emailVerified:D,displayName:h,isAnonymous:q,photoURL:m,phoneNumber:p,tenantId:_,stsTokenManager:B,createdAt:C,lastLoginAt:N});return ee&&Array.isArray(ee)&&(we.providerData=ee.map(ge=>Object.assign({},ge))),v&&(we._redirectEventId=v),we}static async _fromIdTokenResponse(e,n,s=!1){const i=new hr;i.updateFromServerResponse(n);const r=new js({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Lo(r),r}}/**
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
 */const Gf=new Map;function rs(t){Mo(t instanceof Function,"Expected a class definition");let e=Gf.get(t);return e?(Mo(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Gf.set(t,e),e)}/**
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
 */class Cm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Cm.type="NONE";const Qf=Cm;/**
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
 */function gc(t,e,n){return`firebase:${t}:${e}:${n}`}class Ks{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=gc(this.userKey,i.apiKey,r),this.fullPersistenceKey=gc("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?js._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ks(rs(Qf),e,s);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=i[0]||rs(Qf);const o=gc(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=js._fromJSON(e,u);l!==r&&(a=h),r=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Ks(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new Ks(r,e,s))}}/**
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
 */function Yf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(BC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(FC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(HC(e))return"Blackberry";if(jC(e))return"Webos";if(UC(e))return"Safari";if((e.includes("chrome/")||VC(e))&&!e.includes("edge/"))return"Chrome";if($C(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function FC(t=rn()){return/firefox\//i.test(t)}function UC(t=rn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function VC(t=rn()){return/crios\//i.test(t)}function BC(t=rn()){return/iemobile/i.test(t)}function $C(t=rn()){return/android/i.test(t)}function HC(t=rn()){return/blackberry/i.test(t)}function jC(t=rn()){return/webos/i.test(t)}/**
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
 */function bm(t,e=[]){let n;switch(t){case"Browser":n=Yf(rn());break;case"Worker":n=`${Yf(rn())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${yi}/${s}`}async function Sm(t,e){return xu(t,"GET","/v2/recaptchaConfig",bC(t,e))}function Xf(t){return t!==void 0&&t.enterprise!==void 0}class Am{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function KC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function qC(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Ou("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",KC().appendChild(s)})}const WC="https://www.google.com/recaptcha/enterprise.js?render=",zC="recaptcha-enterprise";class GC{constructor(e){this.type=zC,this.auth=Rm(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{Sm(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Am(c);return r.tenantId==null?r._agentRecaptchaConfig=l:r._tenantRecaptchaConfigs[r.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function i(r,o,a){const c=window.grecaptcha;Xf(c)?c.enterprise.ready(()=>{try{c.enterprise.execute(r,{action:e}).then(l=>{o(l)}).catch(l=>{a(l)})}catch(l){a(l)}}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&Xf(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}qC(WC+a).then(()=>{i(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}/**
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
 */class QC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class YC{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jf(this),this.idTokenSubscription=new Jf(this),this.beforeStateQueue=new QC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ym,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rs(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Ks.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Lo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Is(e):null;return n&&de(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(rs(e))})}async initializeRecaptchaConfig(){const e=await Sm(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Am(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new GC(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _i("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rs(e)||this._popupRedirectResolver;de(n,this,"argument-error"),this.redirectPersistenceManager=await Ks.create(this,[rs(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return de(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=bm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&_C(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Rm(t){return Is(t)}class Jf{constructor(e){this.auth=e,this.observer=null,this.addObserver=rI(n=>this.observer=n)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function XC(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(rs);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}new Nr(3e4,6e4);/**
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
 */new Nr(5e3,15e3);var Zf="@firebase/auth",ed="0.23.0";/**
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
 */class JC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ZC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function e0(t){on(new Gt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;de(o&&!o.includes(":"),"invalid-api-key",{appName:s.name}),de(!(a!=null&&a.includes(":")),"argument-error",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bm(t)},l=new YC(s,i,r,c);return XC(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),on(new Gt("auth-internal",e=>{const n=Rm(e.getProvider("auth").getImmediate());return(s=>new JC(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),At(Zf,ed,ZC(t)),At(Zf,ed,"esm2017")}/**
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
 */const t0=5*60;QT("authIdTokenMaxAge");e0("Browser");/**
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
 */const n0=new Map,s0={activated:!1,tokenObservers:[]};function an(t){return n0.get(t)||Object.assign({},s0)}const td={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class i0{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new cr,await r0(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new cr,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function r0(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const o0={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Fo=new _i("appCheck","AppCheck",o0);function a0(t){if(!an(t).activated)throw Fo.create("use-before-activation",{appName:t.name})}/**
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
 */const c0="firebase-app-check-database",l0=1,fl="firebase-app-check-store";let so=null;function u0(){return so||(so=new Promise((t,e)=>{try{const n=indexedDB.open(c0,l0);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(Fo.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(fl,{keyPath:"compositeKey"})}}}catch(n){e(Fo.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),so)}function h0(t,e){return f0(d0(t),e)}async function f0(t,e){const s=(await u0()).transaction(fl,"readwrite"),r=s.objectStore(fl).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=c=>{o()},s.onerror=c=>{var l;a(Fo.create("storage-set",{originalErrorMessage:(l=c.target.error)===null||l===void 0?void 0:l.message}))}})}function d0(t){return`${t.options.appId}-${t.name}`}/**
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
 */const dl=new Rr("@firebase/app-check");function nd(t,e){return cm()?h0(t,e).catch(n=>{dl.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const p0={error:"UNKNOWN_ERROR"};function g0(t){return Ta.encodeString(JSON.stringify(t),!1)}async function pl(t,e=!1){const n=t.app;a0(n);const s=an(n);let i=s.token,r;if(i&&!Li(i)&&(s.token=void 0,i=void 0),!i){const c=await s.cachedTokenPromise;c&&(Li(c)?i=c:await nd(n,void 0))}if(!e&&i&&Li(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await an(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?dl.warn(c.message):dl.error(c),r=c}let a;return i?r?Li(i)?a={token:i.token,internalError:r}:a=id(r):(a={token:i.token},s.token=i,await nd(n,i)):a=id(r),o&&y0(n,a),a}function m0(t,e,n,s){const{app:i}=t,r=an(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&Li(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),sd(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>sd(t))}function Nm(t,e){const n=an(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function sd(t){const{app:e}=t,n=an(e);let s=n.tokenRefresher;s||(s=_0(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function _0(t){const{app:e}=t;return new i0(async()=>{const n=an(e);let s;if(n.token?s=await pl(t,!0):s=await pl(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=an(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},td.RETRIAL_MIN_WAIT,td.RETRIAL_MAX_WAIT)}function y0(t,e){const n=an(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function Li(t){return t.expireTimeMillis-Date.now()>0}function id(t){return{token:g0(p0),error:t}}/**
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
 */class v0{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=an(this.app);for(const n of e)Nm(this.app,n.next);return Promise.resolve()}}function E0(t,e){return new v0(t,e)}function w0(t){return{getToken:e=>pl(t,e),addTokenListener:e=>m0(t,"INTERNAL",e),removeTokenListener:e=>Nm(t.app,e)}}const T0="@firebase/app-check",I0="0.6.5",C0="app-check",rd="app-check-internal";function b0(){on(new Gt(C0,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return E0(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(rd).initialize()})),on(new Gt(rd,t=>{const e=t.getProvider("app-check").getImmediate();return w0(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),At(T0,I0)}b0();var S0="firebase",A0="9.20.0";/**
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
 */At(S0,A0,"app");const km=Symbol("firebaseApp");function Mu(t){return Ar()&&St(km,null)||dm(t)}const nn=()=>{};function Lu(t,e){return e.split(".").reduce((n,s)=>n&&n[s],t)}function R0(t,e,n){const s=(""+e).split("."),i=s.pop(),r=s.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(i),1,n):r[i]=n}function Cs(t){return!!t&&typeof t=="object"}const N0=Object.prototype;function k0(t){return Cs(t)&&Object.getPrototypeOf(t)===N0}function Fu(t){return Cs(t)&&t.type==="document"}function Dm(t){return Cs(t)&&t.type==="collection"}function D0(t){return Fu(t)||Dm(t)}function O0(t){return Cs(t)&&t.type==="query"}function P0(t){return Cs(t)&&"ref"in t}function x0(t){return Cs(t)&&typeof t.bucket=="string"}function M0(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}function L0(){return!!(Ar()&&St(tm,null))}const od="@firebase/database",ad="0.14.4";/**
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
 */let Om="";function F0(t){Om=t}/**
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
 */class U0{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Qe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:lr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class V0{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Sn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Pm=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new U0(e)}}catch{}return new V0},os=Pm("localStorage"),gl=Pm("sessionStorage");/**
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
 */const qs=new Rr("@firebase/database"),B0=function(){let t=1;return function(){return t++}}(),xm=function(t){const e=lI(t),n=new iI;n.update(e);const s=n.digest();return Ta.encodeByteArray(s)},kr=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=kr.apply(null,s):typeof s=="object"?e+=Qe(s):e+=s,e+=" "}return e};let fs=null,cd=!0;const $0=function(t,e){P(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(qs.logLevel=ce.VERBOSE,fs=qs.log.bind(qs),e&&gl.set("logging_enabled",!0)):typeof t=="function"?fs=t:(fs=null,gl.remove("logging_enabled"))},it=function(...t){if(cd===!0&&(cd=!1,fs===null&&gl.get("logging_enabled")===!0&&$0(!0)),fs){const e=kr.apply(null,t);fs(e)}},Dr=function(t){return function(...e){it(t,...e)}},ml=function(...t){const e="FIREBASE INTERNAL ERROR: "+kr(...t);qs.error(e)},_s=function(...t){const e=`FIREBASE FATAL ERROR: ${kr(...t)}`;throw qs.error(e),new Error(e)},Rt=function(...t){const e="FIREBASE WARNING: "+kr(...t);qs.warn(e)},H0=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Rt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Mm=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},j0=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ni="[MIN_NAME]",ys="[MAX_NAME]",vi=function(t,e){if(t===e)return 0;if(t===ni||e===ys)return-1;if(e===ni||t===ys)return 1;{const n=ld(t),s=ld(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},K0=function(t,e){return t===e?0:t<e?-1:1},Ni=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Qe(e))},Uu=function(t){if(typeof t!="object"||t===null)return Qe(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Qe(e[s]),n+=":",n+=Uu(t[e[s]]);return n+="}",n},Lm=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function xt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Fm=function(t){P(!Mm(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const l=[];for(c=n;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(i?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let f=parseInt(u.substr(c,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},q0=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},W0=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},z0=new RegExp("^-?(0*)\\d{1,10}$"),G0=-2147483648,Q0=2147483647,ld=function(t){if(z0.test(t)){const e=Number(t);if(e>=G0&&e<=Q0)return e}return null},Or=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Rt("Exception was thrown by user callback.",n),e},Math.floor(0))}},Y0=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Wi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class X0{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Rt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class J0{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(it("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Rt(e)}}class _l{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}_l.OWNER="owner";/**
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
 */const Vu="5",Um="v",Vm="s",Bm="r",$m="f",Hm=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,jm="ls",Km="p",yl="ac",qm="websocket",Wm="long_polling";/**
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
 */class Z0{constructor(e,n,s,i,r=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=os.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&os.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function eb(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function zm(t,e,n){P(typeof e=="string","typeof type must == string"),P(typeof n=="object","typeof params must == object");let s;if(e===qm)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Wm)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);eb(t)&&(n.ns=t.namespace);const i=[];return xt(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class tb{constructor(){this.counters_={}}incrementCounter(e,n=1){Sn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return BT(this.counters_)}}/**
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
 */const mc={},_c={};function Bu(t){const e=t.toString();return mc[e]||(mc[e]=new tb),mc[e]}function nb(t,e){const n=t.toString();return _c[n]||(_c[n]=e()),_c[n]}/**
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
 */class sb{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Or(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const ud="start",ib="close",rb="pLPCommand",ob="pRTLPCB",Gm="id",Qm="pw",Ym="ser",ab="cb",cb="seg",lb="ts",ub="d",hb="dframe",Xm=1870,Jm=30,fb=Xm-Jm,db=25e3,pb=3e4;class Ls{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Dr(e),this.stats_=Bu(n),this.urlFn=c=>(this.appCheckToken&&(c[yl]=this.appCheckToken),zm(n,Wm,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new sb(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(pb)),j0(()=>{if(this.isClosed_)return;this.scriptTagHolder=new $u((...r)=>{const[o,a,c,l,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ud)this.id=a,this.password=c;else if(o===ib)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[ud]="t",s[Ym]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[ab]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Um]=Vu,this.transportSessionId&&(s[Vm]=this.transportSessionId),this.lastSessionId&&(s[jm]=this.lastSessionId),this.applicationId&&(s[Km]=this.applicationId),this.appCheckToken&&(s[yl]=this.appCheckToken),typeof location<"u"&&location.hostname&&Hm.test(location.hostname)&&(s[Bm]=$m);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ls.forceAllow_=!0}static forceDisallow(){Ls.forceDisallow_=!0}static isAvailable(){return Ls.forceAllow_?!0:!Ls.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!q0()&&!W0()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Qe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=im(n),i=Lm(s,fb);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[hb]="t",s[Gm]=e,s[Qm]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Qe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class $u{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=B0(),window[rb+this.uniqueCallbackIdentifier]=e,window[ob+this.uniqueCallbackIdentifier]=n,this.myIFrame=$u.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){it("frame writing exception"),a.stack&&it(a.stack),it(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||it("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Gm]=this.myID,e[Qm]=this.myPW,e[Ym]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Jm+s.length<=Xm;){const o=this.pendingSegs.shift();s=s+"&"+cb+i+"="+o.seg+"&"+lb+i+"="+o.ts+"&"+ub+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(db)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{it("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const gb=16384,mb=45e3;let Uo=null;typeof MozWebSocket<"u"?Uo=MozWebSocket:typeof WebSocket<"u"&&(Uo=WebSocket);class Bt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Dr(this.connId),this.stats_=Bu(n),this.connURL=Bt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Um]=Vu,typeof location<"u"&&location.hostname&&Hm.test(location.hostname)&&(o[Bm]=$m),n&&(o[Vm]=n),s&&(o[jm]=s),i&&(o[yl]=i),r&&(o[Km]=r),zm(e,qm,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,os.set("previous_websocket_failure",!0);try{let s;am(),this.mySock=new Uo(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Bt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Uo!==null&&!Bt.forceDisallow_}static previouslyFailed(){return os.isInMemoryStorage||os.get("previous_websocket_failure")===!0}markConnectionHealthy(){os.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=lr(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(P(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Qe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Lm(n,gb);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(mb))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Bt.responsesRequiredToBeHealthy=2;Bt.healthyTimeout=3e4;/**
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
 */class fr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ls,Bt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Bt&&Bt.isAvailable();let s=n&&!Bt.previouslyFailed();if(e.webSocketOnly&&(n||Rt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Bt];else{const i=this.transports_=[];for(const r of fr.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);fr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}fr.globalTransportInitialized_=!1;/**
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
 */const _b=6e4,yb=5e3,vb=10*1024,Eb=100*1024,yc="t",hd="d",wb="s",fd="r",Tb="e",dd="o",pd="a",gd="n",md="p",Ib="h";class Cb{constructor(e,n,s,i,r,o,a,c,l,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Dr("c:"+this.id+":"),this.transportManager_=new fr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Wi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Eb?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>vb?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(yc in e){const n=e[yc];n===pd?this.upgradeIfSecondaryHealthy_():n===fd?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===dd&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ni("t",e),s=Ni("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:md,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:pd,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:gd,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ni("t",e),s=Ni("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ni(yc,e);if(hd in e){const s=e[hd];if(n===Ib){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===gd){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===wb?this.onConnectionShutdown_(s):n===fd?this.onReset_(s):n===Tb?ml("Server Error: "+s):n===dd?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ml("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Vu!==s&&Rt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Wi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(_b))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Wi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(yb))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:md,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(os.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Zm{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class e_{constructor(e){this.allowedEvents_=e,this.listeners_={},P(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){P(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Vo extends e_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Nu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Vo}getInitialEvent(e){return P(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const _d=32,yd=768;class Ae{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ee(){return new Ae("")}function ie(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Hn(t){return t.pieces_.length-t.pieceNum_}function Se(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ae(t.pieces_,e)}function t_(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function bb(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function n_(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function s_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ae(e,0)}function We(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Ae)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Ae(n,0)}function ne(t){return t.pieceNum_>=t.pieces_.length}function Ot(t,e){const n=ie(t),s=ie(e);if(n===null)return e;if(n===s)return Ot(Se(t),Se(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function i_(t,e){if(Hn(t)!==Hn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Ht(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Hn(t)>Hn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Sb{constructor(e,n){this.errorPrefix_=n,this.parts_=n_(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ia(this.parts_[s]);r_(this)}}function Ab(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ia(e),r_(t)}function Rb(t){const e=t.parts_.pop();t.byteLength_-=Ia(e),t.parts_.length>0&&(t.byteLength_-=1)}function r_(t){if(t.byteLength_>yd)throw new Error(t.errorPrefix_+"has a key path longer than "+yd+" bytes ("+t.byteLength_+").");if(t.parts_.length>_d)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+_d+") or object contains a cycle "+es(t))}function es(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Hu extends e_{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Hu}getInitialEvent(e){return P(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ki=1e3,Nb=60*5*1e3,vd=30*1e3,kb=1.3,Db=3e4,Ob="server_kill",Ed=3;class vn extends Zm{constructor(e,n,s,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=vn.nextPersistentConnectionId_++,this.log_=Dr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ki,this.maxReconnectDelay_=Nb,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!am())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Hu.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Vo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Qe(r)),P(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new cr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),P(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;vn.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Sn(e,"w")){const s=ti(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Rt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||sI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=vd)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=nI(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Qe(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ml("Unrecognized action received from server: "+Qe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){P(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ki,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ki,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Db&&(this.reconnectDelay_=ki),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*kb)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+vn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},l=function(h){P(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?it("getToken() completed but was canceled"):(it("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new Cb(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,p=>{Rt(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(Ob)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Rt(h),c())}}}interrupt(e){it("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){it("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ff(this.interruptReasons_)&&(this.reconnectDelay_=ki,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Uu(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Ae(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){it("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ed&&(this.reconnectDelay_=vd,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){it("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ed&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Om.replace(/\./g,"-")]=1,Nu()?e["framework.cordova"]=1:om()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Vo.getInstance().currentlyOnline();return Ff(this.interruptReasons_)&&e}}vn.nextPersistentConnectionId_=0;vn.nextConnectionId_=0;/**
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
 */class Ca{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new re(ni,e),i=new re(ni,n);return this.compare(s,i)!==0}minPost(){return re.MIN}}/**
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
 */let io;class o_ extends Ca{static get __EMPTY_NODE(){return io}static set __EMPTY_NODE(e){io=e}compare(e,n){return vi(e.name,n.name)}isDefinedOn(e){throw mi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return re.MIN}maxPost(){return new re(ys,io)}makePost(e,n){return P(typeof e=="string","KeyIndex indexValue must always be a string."),new re(e,io)}toString(){return".key"}}const Ws=new o_;/**
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
 */class ro{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class qe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??qe.RED,this.left=i??Et.EMPTY_NODE,this.right=r??Et.EMPTY_NODE}copy(e,n,s,i,r){return new qe(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Et.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Et.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}qe.RED=!0;qe.BLACK=!1;class Pb{copy(e,n,s,i,r){return this}insert(e,n,s){return new qe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Et{constructor(e,n=Et.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Et(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,qe.BLACK,null,null))}remove(e){return new Et(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,qe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ro(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ro(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ro(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ro(this.root_,null,this.comparator_,!0,e)}}Et.EMPTY_NODE=new Pb;/**
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
 */function xb(t,e){return vi(t.name,e.name)}function ju(t,e){return vi(t,e)}/**
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
 */let vl;function Mb(t){vl=t}const a_=function(t){return typeof t=="number"?"number:"+Fm(t):"string:"+t},c_=function(t){if(t.isLeafNode()){const e=t.val();P(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Sn(e,".sv"),"Priority must be a string or number.")}else P(t===vl||t.isEmpty(),"priority of unexpected type.");P(t===vl||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let wd;class je{constructor(e,n=je.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,P(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),c_(this.priorityNode_)}static set __childrenNodeConstructor(e){wd=e}static get __childrenNodeConstructor(){return wd}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new je(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:je.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ne(e)?this:ie(e)===".priority"?this.priorityNode_:je.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:je.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ie(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(P(s!==".priority"||Hn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,je.__childrenNodeConstructor.EMPTY_NODE.updateChild(Se(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+a_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Fm(this.value_):e+=this.value_,this.lazyHash_=xm(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===je.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof je.__childrenNodeConstructor?-1:(P(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=je.VALUE_TYPE_ORDER.indexOf(n),r=je.VALUE_TYPE_ORDER.indexOf(s);return P(i>=0,"Unknown leaf type: "+n),P(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}je.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let l_,u_;function Lb(t){l_=t}function Fb(t){u_=t}class Ub extends Ca{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?vi(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return re.MIN}maxPost(){return new re(ys,new je("[PRIORITY-POST]",u_))}makePost(e,n){const s=l_(e);return new re(n,new je("[PRIORITY-POST]",s))}toString(){return".priority"}}const ct=new Ub;/**
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
 */const Vb=Math.log(2);class Bb{constructor(e){const n=r=>parseInt(Math.log(r)/Vb,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Bo=function(t,e,n,s){t.sort(e);const i=function(c,l){const u=l-c;let h,f;if(u===0)return null;if(u===1)return h=t[c],f=n?n(h):h,new qe(f,h.node,qe.BLACK,null,null);{const p=parseInt(u/2,10)+c,m=i(c,p),_=i(p+1,l);return h=t[p],f=n?n(h):h,new qe(f,h.node,qe.BLACK,m,_)}},r=function(c){let l=null,u=null,h=t.length;const f=function(m,_){const v=h-m,C=h;h-=m;const N=i(v+1,C),T=t[v],D=n?n(T):T;p(new qe(D,T.node,_,null,N))},p=function(m){l?(l.left=m,l=m):(u=m,l=m)};for(let m=0;m<c.count;++m){const _=c.nextBitIsOne(),v=Math.pow(2,c.count-(m+1));_?f(v,qe.BLACK):(f(v,qe.BLACK),f(v,qe.RED))}return u},o=new Bb(t.length),a=r(o);return new Et(s||e,a)};/**
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
 */let vc;const ks={};class mn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return P(ks&&ct,"ChildrenNode.ts has not been loaded"),vc=vc||new mn({".priority":ks},{".priority":ct}),vc}get(e){const n=ti(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Et?n:null}hasIndex(e){return Sn(this.indexSet_,e.toString())}addIndex(e,n){P(e!==Ws,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(re.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Bo(s,e.getCompare()):a=ks;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new mn(u,l)}addToIndexes(e,n){const s=Oo(this.indexes_,(i,r)=>{const o=ti(this.indexSet_,r);if(P(o,"Missing index implementation for "+r),i===ks)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(re.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),Bo(a,o.getCompare())}else return ks;else{const a=n.get(e.name);let c=i;return a&&(c=c.remove(new re(e.name,a))),c.insert(e,e.node)}});return new mn(s,this.indexSet_)}removeFromIndexes(e,n){const s=Oo(this.indexes_,i=>{if(i===ks)return i;{const r=n.get(e.name);return r?i.remove(new re(e.name,r)):i}});return new mn(s,this.indexSet_)}}/**
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
 */let Di;class pe{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&c_(this.priorityNode_),this.children_.isEmpty()&&P(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Di||(Di=new pe(new Et(ju),null,mn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Di}updatePriority(e){return this.children_.isEmpty()?this:new pe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Di:n}}getChild(e){const n=ie(e);return n===null?this:this.getImmediateChild(n).getChild(Se(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(P(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new re(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Di:this.priorityNode_;return new pe(i,o,r)}}updateChild(e,n){const s=ie(e);if(s===null)return n;{P(ie(e)!==".priority"||Hn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Se(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ct,(o,a)=>{n[o]=a.val(e),s++,r&&pe.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+a_(this.getPriority().val())+":"),this.forEachChild(ct,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":xm(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new re(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new re(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new re(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,re.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,re.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Pr?-1:0}withIndex(e){if(e===Ws||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new pe(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ws||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ct),i=n.getIterator(ct);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ws?null:this.indexMap_.get(e.toString())}}pe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class $b extends pe{constructor(){super(new Et(ju),pe.EMPTY_NODE,mn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return pe.EMPTY_NODE}isEmpty(){return!1}}const Pr=new $b;Object.defineProperties(re,{MIN:{value:new re(ni,pe.EMPTY_NODE)},MAX:{value:new re(ys,Pr)}});o_.__EMPTY_NODE=pe.EMPTY_NODE;je.__childrenNodeConstructor=pe;Mb(Pr);Fb(Pr);/**
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
 */const Hb=!0;function rt(t,e=null){if(t===null)return pe.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),P(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new je(n,rt(e))}if(!(t instanceof Array)&&Hb){const n=[];let s=!1;if(xt(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=rt(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new re(o,c)))}}),n.length===0)return pe.EMPTY_NODE;const r=Bo(n,xb,o=>o.name,ju);if(s){const o=Bo(n,ct.getCompare());return new pe(r,rt(e),new mn({".priority":o},{".priority":ct}))}else return new pe(r,rt(e),mn.Default)}else{let n=pe.EMPTY_NODE;return xt(t,(s,i)=>{if(Sn(t,s)&&s.substring(0,1)!=="."){const r=rt(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(rt(e))}}Lb(rt);/**
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
 */class jb extends Ca{constructor(e){super(),this.indexPath_=e,P(!ne(e)&&ie(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?vi(e.name,n.name):r}makePost(e,n){const s=rt(e),i=pe.EMPTY_NODE.updateChild(this.indexPath_,s);return new re(n,i)}maxPost(){const e=pe.EMPTY_NODE.updateChild(this.indexPath_,Pr);return new re(ys,e)}toString(){return n_(this.indexPath_,0).join("/")}}/**
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
 */class Kb extends Ca{compare(e,n){const s=e.node.compareTo(n.node);return s===0?vi(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return re.MIN}maxPost(){return re.MAX}makePost(e,n){const s=rt(e);return new re(n,s)}toString(){return".value"}}const qb=new Kb;/**
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
 */function Wb(t){return{type:"value",snapshotNode:t}}function zb(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Gb(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Td(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Qb(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Ku{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ct}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return P(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return P(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ni}hasEnd(){return this.endSet_}getIndexEndValue(){return P(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return P(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ys}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return P(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ct}copy(){const e=new Ku;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Id(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ct?n="$priority":t.index_===qb?n="$value":t.index_===Ws?n="$key":(P(t.index_ instanceof jb,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Qe(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Qe(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Qe(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Qe(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Qe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Cd(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ct&&(e.i=t.index_.toString()),e}/**
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
 */class $o extends Zm{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Dr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(P(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=$o.getListenId_(e,s),a={};this.listens_[o]=a;const c=Id(e._queryParams);this.restRequest_(r+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(r,h,!1,s),ti(this.listens_,o)===a){let f;l?l===401?f="permission_denied":f="rest_error:"+l:f="ok",i(f,null)}})}unlisten(e,n){const s=$o.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Id(e._queryParams),s=e._path.toString(),i=new cr;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ku(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=lr(a.responseText)}catch{Rt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&Rt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Yb{constructor(){this.rootNode_=pe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Ho(){return{value:null,children:new Map}}function h_(t,e,n){if(ne(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=ie(e);t.children.has(s)||t.children.set(s,Ho());const i=t.children.get(s);e=Se(e),h_(i,e,n)}}function El(t,e,n){t.value!==null?n(e,t.value):Xb(t,(s,i)=>{const r=new Ae(e.toString()+"/"+s);El(i,r,n)})}function Xb(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class Jb{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&xt(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const bd=10*1e3,Zb=30*1e3,eS=5*60*1e3;class tS{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Jb(e);const s=bd+(Zb-bd)*Math.random();Wi(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;xt(e,(i,r)=>{r>0&&Sn(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Wi(this.reportStats_.bind(this),Math.floor(Math.random()*2*eS))}}/**
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
 */var sn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(sn||(sn={}));function f_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function d_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function p_(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class jo{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=sn.ACK_USER_WRITE,this.source=f_()}operationForChild(e){if(ne(this.path)){if(this.affectedTree.value!=null)return P(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ae(e));return new jo(Ee(),n,this.revert)}}else return P(ie(this.path)===e,"operationForChild called for unrelated child."),new jo(Se(this.path),this.affectedTree,this.revert)}}/**
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
 */class vs{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=sn.OVERWRITE}operationForChild(e){return ne(this.path)?new vs(this.source,Ee(),this.snap.getImmediateChild(e)):new vs(this.source,Se(this.path),this.snap)}}/**
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
 */class dr{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=sn.MERGE}operationForChild(e){if(ne(this.path)){const n=this.children.subtree(new Ae(e));return n.isEmpty()?null:n.value?new vs(this.source,Ee(),n.value):new dr(this.source,Ee(),n)}else return P(ie(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new dr(this.source,Se(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class qu{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ne(e))return this.isFullyInitialized()&&!this.filtered_;const n=ie(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function nS(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Qb(o.childName,o.snapshotNode))}),Oi(t,i,"child_removed",e,s,n),Oi(t,i,"child_added",e,s,n),Oi(t,i,"child_moved",r,s,n),Oi(t,i,"child_changed",e,s,n),Oi(t,i,"value",e,s,n),i}function Oi(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,c)=>iS(t,a,c)),o.forEach(a=>{const c=sS(t,a,r);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,t.query_))})})}function sS(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function iS(t,e,n){if(e.childName==null||n.childName==null)throw mi("Should only compare child_ events.");const s=new re(e.childName,e.snapshotNode),i=new re(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function g_(t,e){return{eventCache:t,serverCache:e}}function zi(t,e,n,s){return g_(new qu(e,n,s),t.serverCache)}function m_(t,e,n,s){return g_(t.eventCache,new qu(e,n,s))}function wl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Es(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Ec;const rS=()=>(Ec||(Ec=new Et(K0)),Ec);class Ce{constructor(e,n=rS()){this.value=e,this.children=n}static fromObject(e){let n=new Ce(null);return xt(e,(s,i)=>{n=n.set(new Ae(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ee(),value:this.value};if(ne(e))return null;{const s=ie(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Se(e),n);return r!=null?{path:We(new Ae(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ne(e))return this;{const n=ie(e),s=this.children.get(n);return s!==null?s.subtree(Se(e)):new Ce(null)}}set(e,n){if(ne(e))return new Ce(n,this.children);{const s=ie(e),r=(this.children.get(s)||new Ce(null)).set(Se(e),n),o=this.children.insert(s,r);return new Ce(this.value,o)}}remove(e){if(ne(e))return this.children.isEmpty()?new Ce(null):new Ce(null,this.children);{const n=ie(e),s=this.children.get(n);if(s){const i=s.remove(Se(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Ce(null):new Ce(this.value,r)}else return this}}get(e){if(ne(e))return this.value;{const n=ie(e),s=this.children.get(n);return s?s.get(Se(e)):null}}setTree(e,n){if(ne(e))return n;{const s=ie(e),r=(this.children.get(s)||new Ce(null)).setTree(Se(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Ce(this.value,o)}}fold(e){return this.fold_(Ee(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(We(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Ee(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(ne(e))return null;{const r=ie(e),o=this.children.get(r);return o?o.findOnPath_(Se(e),We(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ee(),n)}foreachOnPath_(e,n,s){if(ne(e))return this;{this.value&&s(n,this.value);const i=ie(e),r=this.children.get(i);return r?r.foreachOnPath_(Se(e),We(n,i),s):new Ce(null)}}foreach(e){this.foreach_(Ee(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(We(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class zt{constructor(e){this.writeTree_=e}static empty(){return new zt(new Ce(null))}}function Gi(t,e,n){if(ne(e))return new zt(new Ce(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ot(i,e);return r=r.updateChild(o,n),new zt(t.writeTree_.set(i,r))}else{const i=new Ce(n),r=t.writeTree_.setTree(e,i);return new zt(r)}}}function Sd(t,e,n){let s=t;return xt(n,(i,r)=>{s=Gi(s,We(e,i),r)}),s}function Ad(t,e){if(ne(e))return zt.empty();{const n=t.writeTree_.setTree(e,new Ce(null));return new zt(n)}}function Tl(t,e){return bs(t,e)!=null}function bs(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ot(n.path,e)):null}function Rd(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ct,(s,i)=>{e.push(new re(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new re(s,i.value))}),e}function Fn(t,e){if(ne(e))return t;{const n=bs(t,e);return n!=null?new zt(new Ce(n)):new zt(t.writeTree_.subtree(e))}}function Il(t){return t.writeTree_.isEmpty()}function si(t,e){return __(Ee(),t.writeTree_,e)}function __(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(P(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=__(We(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(We(t,".priority"),s)),n}}/**
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
 */function y_(t,e){return I_(e,t)}function oS(t,e,n,s,i){P(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Gi(t.visibleWrites,e,n)),t.lastWriteId=s}function aS(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function cS(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);P(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&lS(a,s.path)?i=!1:Ht(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return uS(t),!0;if(s.snap)t.visibleWrites=Ad(t.visibleWrites,s.path);else{const a=s.children;xt(a,c=>{t.visibleWrites=Ad(t.visibleWrites,We(s.path,c))})}return!0}else return!1}function lS(t,e){if(t.snap)return Ht(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ht(We(t.path,n),e))return!0;return!1}function uS(t){t.visibleWrites=v_(t.allWrites,hS,Ee()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function hS(t){return t.visible}function v_(t,e,n){let s=zt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Ht(n,o)?(a=Ot(n,o),s=Gi(s,a,r.snap)):Ht(o,n)&&(a=Ot(o,n),s=Gi(s,Ee(),r.snap.getChild(a)));else if(r.children){if(Ht(n,o))a=Ot(n,o),s=Sd(s,a,r.children);else if(Ht(o,n))if(a=Ot(o,n),ne(a))s=Sd(s,Ee(),r.children);else{const c=ti(r.children,ie(a));if(c){const l=c.getChild(Se(a));s=Gi(s,Ee(),l)}}}else throw mi("WriteRecord should have .snap or .children")}}return s}function E_(t,e,n,s,i){if(!s&&!i){const r=bs(t.visibleWrites,e);if(r!=null)return r;{const o=Fn(t.visibleWrites,e);if(Il(o))return n;if(n==null&&!Tl(o,Ee()))return null;{const a=n||pe.EMPTY_NODE;return si(o,a)}}}else{const r=Fn(t.visibleWrites,e);if(!i&&Il(r))return n;if(!i&&n==null&&!Tl(r,Ee()))return null;{const o=function(l){return(l.visible||i)&&(!s||!~s.indexOf(l.writeId))&&(Ht(l.path,e)||Ht(e,l.path))},a=v_(t.allWrites,o,e),c=n||pe.EMPTY_NODE;return si(a,c)}}}function fS(t,e,n){let s=pe.EMPTY_NODE;const i=bs(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ct,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Fn(t.visibleWrites,e);return n.forEachChild(ct,(o,a)=>{const c=si(Fn(r,new Ae(o)),a);s=s.updateImmediateChild(o,c)}),Rd(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Fn(t.visibleWrites,e);return Rd(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function dS(t,e,n,s,i){P(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=We(e,n);if(Tl(t.visibleWrites,r))return null;{const o=Fn(t.visibleWrites,r);return Il(o)?i.getChild(n):si(o,i.getChild(n))}}function pS(t,e,n,s){const i=We(e,n),r=bs(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Fn(t.visibleWrites,i);return si(o,s.getNode().getImmediateChild(n))}else return null}function gS(t,e){return bs(t.visibleWrites,e)}function mS(t,e,n,s,i,r,o){let a;const c=Fn(t.visibleWrites,e),l=bs(c,Ee());if(l!=null)a=l;else if(n!=null)a=si(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=f.getNext();for(;p&&u.length<i;)h(p,s)!==0&&u.push(p),p=f.getNext();return u}else return[]}function _S(){return{visibleWrites:zt.empty(),allWrites:[],lastWriteId:-1}}function Cl(t,e,n,s){return E_(t.writeTree,t.treePath,e,n,s)}function w_(t,e){return fS(t.writeTree,t.treePath,e)}function Nd(t,e,n,s){return dS(t.writeTree,t.treePath,e,n,s)}function Ko(t,e){return gS(t.writeTree,We(t.treePath,e))}function yS(t,e,n,s,i,r){return mS(t.writeTree,t.treePath,e,n,s,i,r)}function Wu(t,e,n){return pS(t.writeTree,t.treePath,e,n)}function T_(t,e){return I_(We(t.treePath,e),t.writeTree)}function I_(t,e){return{treePath:t,writeTree:e}}/**
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
 */class vS{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;P(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),P(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Td(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Gb(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,zb(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Td(s,e.snapshotNode,i.oldSnap));else throw mi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class ES{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const C_=new ES;class zu{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new qu(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Wu(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Es(this.viewCache_),r=yS(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function wS(t,e){P(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),P(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function TS(t,e,n,s,i){const r=new vS;let o,a;if(n.type===sn.OVERWRITE){const l=n;l.source.fromUser?o=bl(t,e,l.path,l.snap,s,i,r):(P(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!ne(l.path),o=qo(t,e,l.path,l.snap,s,i,a,r))}else if(n.type===sn.MERGE){const l=n;l.source.fromUser?o=CS(t,e,l.path,l.children,s,i,r):(P(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=Sl(t,e,l.path,l.children,s,i,a,r))}else if(n.type===sn.ACK_USER_WRITE){const l=n;l.revert?o=AS(t,e,l.path,s,i,r):o=bS(t,e,l.path,l.affectedTree,s,i,r)}else if(n.type===sn.LISTEN_COMPLETE)o=SS(t,e,n.path,s,r);else throw mi("Unknown operation type: "+n.type);const c=r.getChanges();return IS(e,o,c),{viewCache:o,changes:c}}function IS(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=wl(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Wb(wl(e)))}}function b_(t,e,n,s,i,r){const o=e.eventCache;if(Ko(s,n)!=null)return e;{let a,c;if(ne(n))if(P(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=Es(e),u=l instanceof pe?l:pe.EMPTY_NODE,h=w_(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const l=Cl(s,Es(e));a=t.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=ie(n);if(l===".priority"){P(Hn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=Nd(s,n,u,c);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Se(n);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const f=Nd(s,n,o.getNode(),c);f!=null?h=o.getNode().getImmediateChild(l).updateChild(u,f):h=o.getNode().getImmediateChild(l)}else h=Wu(s,l,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),l,h,u,i,r):a=o.getNode()}}return zi(e,a,o.isFullyInitialized()||ne(n),t.filter.filtersNodes())}}function qo(t,e,n,s,i,r,o,a){const c=e.serverCache;let l;const u=o?t.filter:t.filter.getIndexedFilter();if(ne(n))l=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const p=c.getNode().updateChild(n,s);l=u.updateFullNode(c.getNode(),p,null)}else{const p=ie(n);if(!c.isCompleteForPath(n)&&Hn(n)>1)return e;const m=Se(n),v=c.getNode().getImmediateChild(p).updateChild(m,s);p===".priority"?l=u.updatePriority(c.getNode(),v):l=u.updateChild(c.getNode(),p,v,m,C_,null)}const h=m_(e,l,c.isFullyInitialized()||ne(n),u.filtersNodes()),f=new zu(i,h,r);return b_(t,h,n,i,f,a)}function bl(t,e,n,s,i,r,o){const a=e.eventCache;let c,l;const u=new zu(i,e,r);if(ne(n))l=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=zi(e,l,!0,t.filter.filtersNodes());else{const h=ie(n);if(h===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),s),c=zi(e,l,a.isFullyInitialized(),a.isFiltered());else{const f=Se(n),p=a.getNode().getImmediateChild(h);let m;if(ne(f))m=s;else{const _=u.getCompleteChild(h);_!=null?t_(f)===".priority"&&_.getChild(s_(f)).isEmpty()?m=_:m=_.updateChild(f,s):m=pe.EMPTY_NODE}if(p.equals(m))c=e;else{const _=t.filter.updateChild(a.getNode(),h,m,f,u,o);c=zi(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function kd(t,e){return t.eventCache.isCompleteForChild(e)}function CS(t,e,n,s,i,r,o){let a=e;return s.foreach((c,l)=>{const u=We(n,c);kd(e,ie(u))&&(a=bl(t,a,u,l,i,r,o))}),s.foreach((c,l)=>{const u=We(n,c);kd(e,ie(u))||(a=bl(t,a,u,l,i,r,o))}),a}function Dd(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Sl(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;ne(n)?l=s:l=new Ce(null).setTree(n,s);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),m=Dd(t,p,f);c=qo(t,c,new Ae(h),m,i,r,o,a)}}),l.children.inorderTraversal((h,f)=>{const p=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!p){const m=e.serverCache.getNode().getImmediateChild(h),_=Dd(t,m,f);c=qo(t,c,new Ae(h),_,i,r,o,a)}}),c}function bS(t,e,n,s,i,r,o){if(Ko(i,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(ne(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return qo(t,e,n,c.getNode().getChild(n),i,r,a,o);if(ne(n)){let l=new Ce(null);return c.getNode().forEachChild(Ws,(u,h)=>{l=l.set(new Ae(u),h)}),Sl(t,e,n,l,i,r,a,o)}else return e}else{let l=new Ce(null);return s.foreach((u,h)=>{const f=We(n,u);c.isCompleteForPath(f)&&(l=l.set(u,c.getNode().getChild(f)))}),Sl(t,e,n,l,i,r,a,o)}}function SS(t,e,n,s,i){const r=e.serverCache,o=m_(e,r.getNode(),r.isFullyInitialized()||ne(n),r.isFiltered());return b_(t,o,n,s,C_,i)}function AS(t,e,n,s,i,r){let o;if(Ko(s,n)!=null)return e;{const a=new zu(s,e,i),c=e.eventCache.getNode();let l;if(ne(n)||ie(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Cl(s,Es(e));else{const h=e.serverCache.getNode();P(h instanceof pe,"serverChildren would be complete if leaf node"),u=w_(s,h)}u=u,l=t.filter.updateFullNode(c,u,r)}else{const u=ie(n);let h=Wu(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=t.filter.updateChild(c,u,h,Se(n),a,r):e.eventCache.getNode().hasChild(u)?l=t.filter.updateChild(c,u,pe.EMPTY_NODE,Se(n),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Cl(s,Es(e)),o.isLeafNode()&&(l=t.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||Ko(s,Ee())!=null,zi(e,l,o,t.filter.filtersNodes())}}function RS(t,e){const n=Es(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ne(e)&&!n.getImmediateChild(ie(e)).isEmpty())?n.getChild(e):null}function Od(t,e,n,s){e.type===sn.MERGE&&e.source.queryId!==null&&(P(Es(t.viewCache_),"We should always have a full cache before handling merges"),P(wl(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=TS(t.processor_,i,e,n,s);return wS(t.processor_,r.viewCache),P(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,NS(t,r.changes,r.viewCache.eventCache.getNode(),null)}function NS(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return nS(t.eventGenerator_,e,n,i)}/**
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
 */let Pd;function kS(t){P(!Pd,"__referenceConstructor has already been defined"),Pd=t}function Gu(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return P(r!=null,"SyncTree gave us an op for an invalid query."),Od(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Od(o,e,n,s));return r}}function Qu(t,e){let n=null;for(const s of t.views.values())n=n||RS(s,e);return n}/**
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
 */let xd;function DS(t){P(!xd,"__referenceConstructor has already been defined"),xd=t}class Md{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ce(null),this.pendingWriteTree_=_S(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function OS(t,e,n,s,i){return oS(t.pendingWriteTree_,e,n,s,i),i?Sa(t,new vs(f_(),e,n)):[]}function Fs(t,e,n=!1){const s=aS(t.pendingWriteTree_,e);if(cS(t.pendingWriteTree_,e)){let r=new Ce(null);return s.snap!=null?r=r.set(Ee(),!0):xt(s.children,o=>{r=r.set(new Ae(o),!0)}),Sa(t,new jo(s.path,r,n))}else return[]}function ba(t,e,n){return Sa(t,new vs(d_(),e,n))}function PS(t,e,n){const s=Ce.fromObject(n);return Sa(t,new dr(d_(),e,s))}function xS(t,e,n,s){const i=N_(t,s);if(i!=null){const r=k_(i),o=r.path,a=r.queryId,c=Ot(o,e),l=new vs(p_(a),c,n);return D_(t,o,l)}else return[]}function MS(t,e,n,s){const i=N_(t,s);if(i){const r=k_(i),o=r.path,a=r.queryId,c=Ot(o,e),l=Ce.fromObject(n),u=new dr(p_(a),c,l);return D_(t,o,u)}else return[]}function S_(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=Ot(o,e),l=Qu(a,c);if(l)return l});return E_(i,e,r,n,!0)}function Sa(t,e){return A_(e,t.syncPointTree_,null,y_(t.pendingWriteTree_,Ee()))}function A_(t,e,n,s){if(ne(t.path))return R_(t,e,n,s);{const i=e.get(Ee());n==null&&i!=null&&(n=Qu(i,Ee()));let r=[];const o=ie(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const l=n?n.getImmediateChild(o):null,u=T_(s,o);r=r.concat(A_(a,c,l,u))}return i&&(r=r.concat(Gu(i,t,s,n))),r}}function R_(t,e,n,s){const i=e.get(Ee());n==null&&i!=null&&(n=Qu(i,Ee()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,l=T_(s,o),u=t.operationForChild(o);u&&(r=r.concat(R_(u,a,c,l)))}),i&&(r=r.concat(Gu(i,t,s,n))),r}function N_(t,e){return t.tagToQueryMap.get(e)}function k_(t){const e=t.indexOf("$");return P(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ae(t.substr(0,e))}}function D_(t,e,n){const s=t.syncPointTree_.get(e);P(s,"Missing sync point for query tag that we're tracking");const i=y_(t.pendingWriteTree_,e);return Gu(s,n,i,null)}/**
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
 */class Yu{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Yu(n)}node(){return this.node_}}class Xu{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=We(this.path_,e);return new Xu(this.syncTree_,n)}node(){return S_(this.syncTree_,this.path_)}}const LS=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ld=function(t,e,n){if(!t||typeof t!="object")return t;if(P(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return FS(t[".sv"],e,n);if(typeof t[".sv"]=="object")return US(t[".sv"],e);P(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},FS=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:P(!1,"Unexpected server value: "+t)}},US=function(t,e,n){t.hasOwnProperty("increment")||P(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&P(!1,"Unexpected increment value: "+s);const i=e.node();if(P(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},VS=function(t,e,n,s){return Ju(e,new Xu(n,t),s)},BS=function(t,e,n){return Ju(t,new Yu(e),n)};function Ju(t,e,n){const s=t.getPriority().val(),i=Ld(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Ld(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new je(a,rt(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new je(i))),o.forEachChild(ct,(a,c)=>{const l=Ju(c,e.getImmediateChild(a),n);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
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
 */class Zu{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function eh(t,e){let n=e instanceof Ae?e:new Ae(e),s=t,i=ie(n);for(;i!==null;){const r=ti(s.node.children,i)||{children:{},childCount:0};s=new Zu(i,s,r),n=Se(n),i=ie(n)}return s}function Ei(t){return t.node.value}function O_(t,e){t.node.value=e,Al(t)}function P_(t){return t.node.childCount>0}function $S(t){return Ei(t)===void 0&&!P_(t)}function Aa(t,e){xt(t.node.children,(n,s)=>{e(new Zu(n,t,s))})}function x_(t,e,n,s){n&&!s&&e(t),Aa(t,i=>{x_(i,e,!0,s)}),n&&s&&e(t)}function HS(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function xr(t){return new Ae(t.parent===null?t.name:xr(t.parent)+"/"+t.name)}function Al(t){t.parent!==null&&jS(t.parent,t.name,t)}function jS(t,e,n){const s=$S(n),i=Sn(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Al(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Al(t))}/**
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
 */const KS=/[\[\].#$\/\u0000-\u001F\u007F]/,qS=/[\[\].#$\u0000-\u001F\u007F]/,wc=10*1024*1024,M_=function(t){return typeof t=="string"&&t.length!==0&&!KS.test(t)},WS=function(t){return typeof t=="string"&&t.length!==0&&!qS.test(t)},zS=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),WS(t)},L_=function(t,e,n){const s=n instanceof Ae?new Sb(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+es(s));if(typeof e=="function")throw new Error(t+"contains a function "+es(s)+" with contents = "+e.toString());if(Mm(e))throw new Error(t+"contains "+e.toString()+" "+es(s));if(typeof e=="string"&&e.length>wc/3&&Ia(e)>wc)throw new Error(t+"contains a string greater than "+wc+" utf8 bytes "+es(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(xt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!M_(o)))throw new Error(t+" contains an invalid key ("+o+") "+es(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Ab(s,o),L_(t,a,s),Rb(s)}),i&&r)throw new Error(t+' contains ".value" child '+es(s)+" in addition to actual children.")}},GS=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!M_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!zS(n))throw new Error(cI(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class QS{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function YS(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!i_(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ss(t,e,n){YS(t,n),XS(t,s=>Ht(s,e)||Ht(e,s))}function XS(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(JS(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function JS(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();fs&&it("event: "+n.toString()),Or(s)}}}/**
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
 */const ZS="repo_interrupt",eA=25;class tA{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new QS,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ho(),this.transactionQueueTree_=new Zu,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function nA(t,e,n){if(t.stats_=Bu(t.repoInfo_),t.forceRestClient_||Y0())t.server_=new $o(t.repoInfo_,(s,i,r,o)=>{Fd(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Ud(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Qe(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new vn(t.repoInfo_,e,(s,i,r,o)=>{Fd(t,s,i,r,o)},s=>{Ud(t,s)},s=>{iA(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=nb(t.repoInfo_,()=>new tS(t.stats_,t.server_)),t.infoData_=new Yb,t.infoSyncTree_=new Md({startListening:(s,i,r,o)=>{let a=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(a=ba(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),th(t,"connected",!1),t.serverSyncTree_=new Md({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,c)=>{const l=o(a,c);Ss(t.eventQueue_,s._path,l)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function sA(t){const n=t.infoData_.getNode(new Ae(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function F_(t){return LS({timestamp:sA(t)})}function Fd(t,e,n,s,i){t.dataUpdateCount++;const r=new Ae(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=Oo(n,l=>rt(l));o=MS(t.serverSyncTree_,r,c,i)}else{const c=rt(n);o=xS(t.serverSyncTree_,r,c,i)}else if(s){const c=Oo(n,l=>rt(l));o=PS(t.serverSyncTree_,r,c)}else{const c=rt(n);o=ba(t.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=sh(t,r)),Ss(t.eventQueue_,a,o)}function Ud(t,e){th(t,"connected",e),e===!1&&oA(t)}function iA(t,e){xt(e,(n,s)=>{th(t,n,s)})}function th(t,e,n){const s=new Ae("/.info/"+e),i=rt(n);t.infoData_.updateSnapshot(s,i);const r=ba(t.infoSyncTree_,s,i);Ss(t.eventQueue_,s,r)}function rA(t){return t.nextWriteId_++}function oA(t){U_(t,"onDisconnectEvents");const e=F_(t),n=Ho();El(t.onDisconnect_,Ee(),(i,r)=>{const o=VS(i,r,t.serverSyncTree_,e);h_(n,i,o)});let s=[];El(n,Ee(),(i,r)=>{s=s.concat(ba(t.serverSyncTree_,i,r));const o=uA(t,i);sh(t,o)}),t.onDisconnect_=Ho(),Ss(t.eventQueue_,Ee(),s)}function aA(t){t.persistentConnection_&&t.persistentConnection_.interrupt(ZS)}function U_(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),it(n,...e)}function V_(t,e,n){return S_(t.serverSyncTree_,e,n)||pe.EMPTY_NODE}function nh(t,e=t.transactionQueueTree_){if(e||Ra(t,e),Ei(e)){const n=$_(t,e);P(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&cA(t,xr(e),n)}else P_(e)&&Aa(e,n=>{nh(t,n)})}function cA(t,e,n){const s=n.map(l=>l.currentWriteId),i=V_(t,e,s);let r=i;const o=i.hash();for(let l=0;l<n.length;l++){const u=n[l];P(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Ot(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;t.server_.put(c.toString(),a,l=>{U_(t,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(Fs(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Ra(t,eh(t.transactionQueueTree_,e)),nh(t,t.transactionQueueTree_),Ss(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)Or(h[f])}else{if(l==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Rt("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=l}sh(t,e)}},o)}function sh(t,e){const n=B_(t,e),s=xr(n),i=$_(t,n);return lA(t,i,s),s}function lA(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=Ot(n,c.path);let u=!1,h;if(P(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,i=i.concat(Fs(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=eA)u=!0,h="maxretry",i=i.concat(Fs(t.serverSyncTree_,c.currentWriteId,!0));else{const f=V_(t,c.path,o);c.currentInputSnapshot=f;const p=e[a].update(f.val());if(p!==void 0){L_("transaction failed: Data returned ",p,c.path);let m=rt(p);typeof p=="object"&&p!=null&&Sn(p,".priority")||(m=m.updatePriority(f.getPriority()));const v=c.currentWriteId,C=F_(t),N=BS(m,f,C);c.currentOutputSnapshotRaw=m,c.currentOutputSnapshotResolved=N,c.currentWriteId=rA(t),o.splice(o.indexOf(v),1),i=i.concat(OS(t.serverSyncTree_,c.path,N,c.currentWriteId,c.applyLocally)),i=i.concat(Fs(t.serverSyncTree_,v,!0))}else u=!0,h="nodata",i=i.concat(Fs(t.serverSyncTree_,c.currentWriteId,!0))}Ss(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Ra(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Or(s[a]);nh(t,t.transactionQueueTree_)}function B_(t,e){let n,s=t.transactionQueueTree_;for(n=ie(e);n!==null&&Ei(s)===void 0;)s=eh(s,n),e=Se(e),n=ie(e);return s}function $_(t,e){const n=[];return H_(t,e,n),n.sort((s,i)=>s.order-i.order),n}function H_(t,e,n){const s=Ei(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Aa(e,i=>{H_(t,i,n)})}function Ra(t,e){const n=Ei(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,O_(e,n.length>0?n:void 0)}Aa(e,s=>{Ra(t,s)})}function uA(t,e){const n=xr(B_(t,e)),s=eh(t.transactionQueueTree_,e);return HS(s,i=>{Tc(t,i)}),Tc(t,s),x_(s,i=>{Tc(t,i)}),n}function Tc(t,e){const n=Ei(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(P(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(P(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Fs(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?O_(e,void 0):n.length=r+1,Ss(t.eventQueue_,xr(e),i);for(let o=0;o<s.length;o++)Or(s[o])}}/**
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
 */function hA(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function fA(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Rt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Vd=function(t,e){const n=dA(t),s=n.namespace;n.domain==="firebase.com"&&_s(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&_s("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||H0();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Z0(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Ae(n.pathString)}},dA=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",c=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=hA(t.substring(u,h)));const f=fA(t.substring(Math.min(t.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const p=e.slice(0,l);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class ih{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return ne(this._path)?null:t_(this._path)}get ref(){return new wi(this._repo,this._path)}get _queryIdentifier(){const e=Cd(this._queryParams),n=Uu(e);return n==="{}"?"default":n}get _queryObject(){return Cd(this._queryParams)}isEqual(e){if(e=Is(e),!(e instanceof ih))return!1;const n=this._repo===e._repo,s=i_(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+bb(this._path)}}class wi extends ih{constructor(e,n){super(e,n,new Ku,!1)}get parent(){const e=s_(this._path);return e===null?null:new wi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}kS(wi);DS(wi);/**
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
 */const pA="FIREBASE_DATABASE_EMULATOR_HOST",Rl={};let gA=!1;function mA(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||_s("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),it("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Vd(r,i),a=o.repoInfo,c,l;typeof process<"u"&&process.env&&(l=process.env[pA]),l?(c=!0,r=`http://${l}?ns=${a.namespace}`,o=Vd(r,i),a=o.repoInfo):c=!o.repoInfo.secure;const u=i&&c?new _l(_l.OWNER):new J0(t.name,t.options,e);GS("Invalid Firebase Database URL",o),ne(o.path)||_s("Database URL must point to the root of a Firebase Database (not including a child path).");const h=yA(a,t,u,new X0(t.name,n));return new vA(h,t)}function _A(t,e){const n=Rl[e];(!n||n[t.key]!==t)&&_s(`Database ${e}(${t.repoInfo_}) has already been deleted.`),aA(t),delete n[t.key]}function yA(t,e,n,s){let i=Rl[e.name];i||(i={},Rl[e.name]=i);let r=i[t.toURLString()];return r&&_s("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new tA(t,gA,n,s),i[t.toURLString()]=r,r}class vA{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(nA(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new wi(this._repo,Ee())),this._rootInternal}_delete(){return this._rootInternal!==null&&(_A(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&_s("Cannot call "+e+" on a deleted database.")}}/**
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
 */function EA(t){F0(yi),on(new Gt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return mA(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),At(od,ad,t),At(od,ad,"esm2017")}vn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};vn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};EA();var wA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},U,rh=rh||{},z=wA||self;function Wo(){}function Na(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Mr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function TA(t){return Object.prototype.hasOwnProperty.call(t,Ic)&&t[Ic]||(t[Ic]=++IA)}var Ic="closure_uid_"+(1e9*Math.random()>>>0),IA=0;function CA(t,e,n){return t.call.apply(t.bind,arguments)}function bA(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function lt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?lt=CA:lt=bA,lt.apply(null,arguments)}function oo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ze(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Wn(){this.s=this.s,this.o=this.o}var SA=0;Wn.prototype.s=!1;Wn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),SA!=0)&&TA(this)};Wn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const j_=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function oh(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Bd(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Na(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function ut(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ut.prototype.h=function(){this.defaultPrevented=!0};var AA=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{z.addEventListener("test",Wo,e),z.removeEventListener("test",Wo,e)}catch{}return t}();function zo(t){return/^[\s\xa0]*$/.test(t)}var $d=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Cc(t,e){return t<e?-1:t>e?1:0}function ka(){var t=z.navigator;return t&&(t=t.userAgent)?t:""}function en(t){return ka().indexOf(t)!=-1}function ah(t){return ah[" "](t),t}ah[" "]=Wo;function RA(t){var e=DA;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var NA=en("Opera"),ii=en("Trident")||en("MSIE"),K_=en("Edge"),Nl=K_||ii,q_=en("Gecko")&&!(ka().toLowerCase().indexOf("webkit")!=-1&&!en("Edge"))&&!(en("Trident")||en("MSIE"))&&!en("Edge"),kA=ka().toLowerCase().indexOf("webkit")!=-1&&!en("Edge");function W_(){var t=z.document;return t?t.documentMode:void 0}var Go;e:{var bc="",Sc=function(){var t=ka();if(q_)return/rv:([^\);]+)(\)|;)/.exec(t);if(K_)return/Edge\/([\d\.]+)/.exec(t);if(ii)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(kA)return/WebKit\/(\S+)/.exec(t);if(NA)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Sc&&(bc=Sc?Sc[1]:""),ii){var Ac=W_();if(Ac!=null&&Ac>parseFloat(bc)){Go=String(Ac);break e}}Go=bc}var DA={};function OA(){return RA(function(){let t=0;const e=$d(String(Go)).split("."),n=$d("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Cc(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Cc(i[2].length==0,r[2].length==0)||Cc(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var kl;if(z.document&&ii){var Hd=W_();kl=Hd||parseInt(Go,10)||void 0}else kl=void 0;var PA=kl;function pr(t,e){if(ut.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(q_){e:{try{ah(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:xA[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&pr.X.h.call(this)}}Ze(pr,ut);var xA={2:"touch",3:"pen",4:"mouse"};pr.prototype.h=function(){pr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Lr="closure_listenable_"+(1e6*Math.random()|0),MA=0;function LA(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++MA,this.ba=this.ea=!1}function Da(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function ch(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function z_(t){const e={};for(const n in t)e[n]=t[n];return e}const jd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function G_(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<jd.length;r++)n=jd[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Oa(t){this.src=t,this.g={},this.h=0}Oa.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Ol(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new LA(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function Dl(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=j_(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Da(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ol(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var lh="closure_lm_"+(1e6*Math.random()|0),Rc={};function Q_(t,e,n,s,i){if(s&&s.once)return X_(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Q_(t,e[r],n,s,i);return null}return n=fh(n),t&&t[Lr]?t.N(e,n,Mr(s)?!!s.capture:!!s,i):Y_(t,e,n,!1,s,i)}function Y_(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Mr(i)?!!i.capture:!!i,a=hh(t);if(a||(t[lh]=a=new Oa(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=FA(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)AA||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Z_(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function FA(){function t(n){return e.call(t.src,t.listener,n)}const e=UA;return t}function X_(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)X_(t,e[r],n,s,i);return null}return n=fh(n),t&&t[Lr]?t.O(e,n,Mr(s)?!!s.capture:!!s,i):Y_(t,e,n,!0,s,i)}function J_(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)J_(t,e[r],n,s,i);else s=Mr(s)?!!s.capture:!!s,n=fh(n),t&&t[Lr]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Ol(r,n,s,i),-1<n&&(Da(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=hh(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ol(e,n,s,i)),(n=-1<t?e[t]:null)&&uh(n))}function uh(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Lr])Dl(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Z_(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=hh(e))?(Dl(n,t),n.h==0&&(n.src=null,e[lh]=null)):Da(t)}}}function Z_(t){return t in Rc?Rc[t]:Rc[t]="on"+t}function UA(t,e){if(t.ba)t=!0;else{e=new pr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&uh(t),t=n.call(s,e)}return t}function hh(t){return t=t[lh],t instanceof Oa?t:null}var Nc="__closure_events_fn_"+(1e9*Math.random()>>>0);function fh(t){return typeof t=="function"?t:(t[Nc]||(t[Nc]=function(e){return t.handleEvent(e)}),t[Nc])}function ze(){Wn.call(this),this.i=new Oa(this),this.P=this,this.I=null}Ze(ze,Wn);ze.prototype[Lr]=!0;ze.prototype.removeEventListener=function(t,e,n,s){J_(this,t,e,n,s)};function Xe(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new ut(e,t);else if(e instanceof ut)e.target=e.target||t;else{var i=e;e=new ut(s,t),G_(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=ao(o,s,!0,e)&&i}if(o=e.g=t,i=ao(o,s,!0,e)&&i,i=ao(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=ao(o,s,!1,e)&&i}ze.prototype.M=function(){if(ze.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Da(n[s]);delete t.g[e],t.h--}}this.I=null};ze.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};ze.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function ao(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Dl(t.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var dh=z.JSON.stringify;function VA(){var t=ny;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class BA{constructor(){this.h=this.g=null}add(e,n){const s=ey.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var ey=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new $A,t=>t.reset());class $A{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function HA(t){z.setTimeout(()=>{throw t},0)}function ty(t,e){Pl||jA(),xl||(Pl(),xl=!0),ny.add(t,e)}var Pl;function jA(){var t=z.Promise.resolve(void 0);Pl=function(){t.then(KA)}}var xl=!1,ny=new BA;function KA(){for(var t;t=VA();){try{t.h.call(t.g)}catch(n){HA(n)}var e=ey;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}xl=!1}function Pa(t,e){ze.call(this),this.h=t||1,this.g=e||z,this.j=lt(this.lb,this),this.l=Date.now()}Ze(Pa,ze);U=Pa.prototype;U.ca=!1;U.R=null;U.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Xe(this,"tick"),this.ca&&(ph(this),this.start()))}};U.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ph(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}U.M=function(){Pa.X.M.call(this),ph(this),delete this.g};function gh(t,e,n){if(typeof t=="function")n&&(t=lt(t,n));else if(t&&typeof t.handleEvent=="function")t=lt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:z.setTimeout(t,e||0)}function sy(t){t.g=gh(()=>{t.g=null,t.i&&(t.i=!1,sy(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class qA extends Wn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:sy(this)}M(){super.M(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gr(t){Wn.call(this),this.h=t,this.g={}}Ze(gr,Wn);var Kd=[];function iy(t,e,n,s){Array.isArray(n)||(n&&(Kd[0]=n.toString()),n=Kd);for(var i=0;i<n.length;i++){var r=Q_(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function ry(t){ch(t.g,function(e,n){this.g.hasOwnProperty(n)&&uh(e)},t),t.g={}}gr.prototype.M=function(){gr.X.M.call(this),ry(this)};gr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function xa(){this.g=!0}xa.prototype.Aa=function(){this.g=!1};function WA(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function zA(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function Us(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+QA(t,n)+(s?" "+s:"")})}function GA(t,e){t.info(function(){return"TIMEOUT: "+e})}xa.prototype.info=function(){};function QA(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return dh(n)}catch{return e}}var As={},qd=null;function Ma(){return qd=qd||new ze}As.Pa="serverreachability";function oy(t){ut.call(this,As.Pa,t)}Ze(oy,ut);function mr(t){const e=Ma();Xe(e,new oy(e))}As.STAT_EVENT="statevent";function ay(t,e){ut.call(this,As.STAT_EVENT,t),this.stat=e}Ze(ay,ut);function gt(t){const e=Ma();Xe(e,new ay(e,t))}As.Qa="timingevent";function cy(t,e){ut.call(this,As.Qa,t),this.size=e}Ze(cy,ut);function Fr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return z.setTimeout(function(){t()},e)}var La={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},ly={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function mh(){}mh.prototype.h=null;function Wd(t){return t.h||(t.h=t.i())}function uy(){}var Ur={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function _h(){ut.call(this,"d")}Ze(_h,ut);function yh(){ut.call(this,"c")}Ze(yh,ut);var Ml;function Fa(){}Ze(Fa,mh);Fa.prototype.g=function(){return new XMLHttpRequest};Fa.prototype.i=function(){return{}};Ml=new Fa;function Vr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new gr(this),this.O=YA,t=Nl?125:void 0,this.T=new Pa(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new hy}function hy(){this.i=null,this.g="",this.h=!1}var YA=45e3,Ll={},Qo={};U=Vr.prototype;U.setTimeout=function(t){this.O=t};function Fl(t,e,n){t.K=1,t.v=Va(wn(e)),t.s=n,t.P=!0,fy(t,null)}function fy(t,e){t.F=Date.now(),Br(t),t.A=wn(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Ey(n.i,"t",s),t.C=0,n=t.l.H,t.h=new hy,t.g=$y(t.l,n?e:null,!t.s),0<t.N&&(t.L=new qA(lt(t.La,t,t.g),t.N)),iy(t.S,t.g,"readystatechange",t.ib),e=t.H?z_(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),mr(),WA(t.j,t.u,t.A,t.m,t.U,t.s)}U.ib=function(t){t=t.target;const e=this.L;e&&_n(t)==3?e.l():this.La(t)};U.La=function(t){try{if(t==this.g)e:{const u=_n(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Nl||this.g&&(this.h.h||this.g.fa()||Yd(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?mr(3):mr(2)),Ua(this);var n=this.g.aa();this.Y=n;t:if(dy(this)){var s=Yd(this.g);t="";var i=s.length,r=_n(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){as(this),Qi(this);var o="";break t}this.h.i=new z.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,zA(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!zo(a)){var l=a;break t}}l=null}if(n=l)Us(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ul(this,n);else{this.i=!1,this.o=3,gt(12),as(this),Qi(this);break e}}this.P?(py(this,u,o),Nl&&this.i&&u==3&&(iy(this.S,this.T,"tick",this.hb),this.T.start())):(Us(this.j,this.m,o,null),Ul(this,o)),u==4&&as(this),this.i&&!this.I&&(u==4?Fy(this.l,this):(this.i=!1,Br(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,gt(12)):(this.o=0,gt(13)),as(this),Qi(this)}}}catch{}finally{}};function dy(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function py(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=XA(t,n),i==Qo){e==4&&(t.o=4,gt(14),s=!1),Us(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Ll){t.o=4,gt(15),Us(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Us(t.j,t.m,i,null),Ul(t,i);dy(t)&&i!=Qo&&i!=Ll&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,gt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),bh(e),e.K=!0,gt(11))):(Us(t.j,t.m,n,"[Invalid Chunked Response]"),as(t),Qi(t))}U.hb=function(){if(this.g){var t=_n(this.g),e=this.g.fa();this.C<e.length&&(Ua(this),py(this,t,e),this.i&&t!=4&&Br(this))}};function XA(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Qo:(n=Number(e.substring(n,s)),isNaN(n)?Ll:(s+=1,s+n>e.length?Qo:(e=e.substr(s,n),t.C=s+n,e)))}U.cancel=function(){this.I=!0,as(this)};function Br(t){t.V=Date.now()+t.O,gy(t,t.O)}function gy(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Fr(lt(t.gb,t),e)}function Ua(t){t.B&&(z.clearTimeout(t.B),t.B=null)}U.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(GA(this.j,this.A),this.K!=2&&(mr(),gt(17)),as(this),this.o=2,Qi(this)):gy(this,this.V-t)};function Qi(t){t.l.G==0||t.I||Fy(t.l,t)}function as(t){Ua(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,ph(t.T),ry(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ul(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Vl(n.h,t))){if(!t.J&&Vl(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Jo(n),Ha(n);else break e;Ch(n),gt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Fr(lt(n.cb,n),6e3));if(1>=Iy(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else cs(n,11)}else if((t.J||n.g==t)&&Jo(n),!zo(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=s.h;r.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(vh(r,r.h),r.h=null))}if(s.D){const _=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(s.za=_,Re(s.F,s.D,_))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=By(s,s.H?s.ka:null,s.V),o.J){Cy(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Ua(a),Br(a)),s.g=o}else My(s);0<n.i.length&&ja(n)}else l[0]!="stop"&&l[0]!="close"||cs(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?cs(n,7):Ih(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}mr(4)}catch{}}function JA(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Na(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function ZA(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Na(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function my(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Na(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=ZA(t),s=JA(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var _y=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function eR(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ds(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ds){this.h=e!==void 0?e:t.h,Yo(this,t.j),this.s=t.s,this.g=t.g,Xo(this,t.m),this.l=t.l,e=t.i;var n=new _r;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),zd(this,n),this.o=t.o}else t&&(n=String(t).match(_y))?(this.h=!!e,Yo(this,n[1]||"",!0),this.s=Fi(n[2]||""),this.g=Fi(n[3]||"",!0),Xo(this,n[4]),this.l=Fi(n[5]||"",!0),zd(this,n[6]||"",!0),this.o=Fi(n[7]||"")):(this.h=!!e,this.i=new _r(null,this.h))}ds.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ui(e,Gd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ui(e,Gd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ui(n,n.charAt(0)=="/"?sR:nR,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ui(n,rR)),t.join("")};function wn(t){return new ds(t)}function Yo(t,e,n){t.j=n?Fi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Xo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function zd(t,e,n){e instanceof _r?(t.i=e,oR(t.i,t.h)):(n||(e=Ui(e,iR)),t.i=new _r(e,t.h))}function Re(t,e,n){t.i.set(e,n)}function Va(t){return Re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Fi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ui(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,tR),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function tR(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Gd=/[#\/\?@]/g,nR=/[#\?:]/g,sR=/[#\?]/g,iR=/[#\?@]/g,rR=/#/g;function _r(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function zn(t){t.g||(t.g=new Map,t.h=0,t.i&&eR(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}U=_r.prototype;U.add=function(t,e){zn(this),this.i=null,t=Ti(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function yy(t,e){zn(t),e=Ti(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function vy(t,e){return zn(t),e=Ti(t,e),t.g.has(e)}U.forEach=function(t,e){zn(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};U.oa=function(){zn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};U.W=function(t){zn(this);let e=[];if(typeof t=="string")vy(this,t)&&(e=e.concat(this.g.get(Ti(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};U.set=function(t,e){return zn(this),this.i=null,t=Ti(this,t),vy(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};U.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Ey(t,e,n){yy(t,e),0<n.length&&(t.i=null,t.g.set(Ti(t,e),oh(n)),t.h+=n.length)}U.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Ti(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function oR(t,e){e&&!t.j&&(zn(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(yy(this,s),Ey(this,i,n))},t)),t.j=e}var aR=class{constructor(e,n){this.h=e,this.g=n}};function wy(t){this.l=t||cR,z.PerformanceNavigationTiming?(t=z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(z.g&&z.g.Ga&&z.g.Ga()&&z.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var cR=10;function Ty(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Iy(t){return t.h?1:t.g?t.g.size:0}function Vl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function vh(t,e){t.g?t.g.add(e):t.h=e}function Cy(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}wy.prototype.cancel=function(){if(this.i=by(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function by(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return oh(t.i)}function Eh(){}Eh.prototype.stringify=function(t){return z.JSON.stringify(t,void 0)};Eh.prototype.parse=function(t){return z.JSON.parse(t,void 0)};function lR(){this.g=new Eh}function uR(t,e,n){const s=n||"";try{my(t,function(i,r){let o=i;Mr(i)&&(o=dh(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function hR(t,e){const n=new xa;if(z.Image){const s=new Image;s.onload=oo(co,n,s,"TestLoadImage: loaded",!0,e),s.onerror=oo(co,n,s,"TestLoadImage: error",!1,e),s.onabort=oo(co,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=oo(co,n,s,"TestLoadImage: timeout",!1,e),z.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function co(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function $r(t){this.l=t.ac||null,this.j=t.jb||!1}Ze($r,mh);$r.prototype.g=function(){return new Ba(this.l,this.j)};$r.prototype.i=function(t){return function(){return t}}({});function Ba(t,e){ze.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=wh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ze(Ba,ze);var wh=0;U=Ba.prototype;U.open=function(t,e){if(this.readyState!=wh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,yr(this)};U.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||z).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};U.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Hr(this)),this.readyState=wh};U.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,yr(this)),this.g&&(this.readyState=3,yr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Sy(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Sy(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}U.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Hr(this):yr(this),this.readyState==3&&Sy(this)}};U.Va=function(t){this.g&&(this.response=this.responseText=t,Hr(this))};U.Ua=function(t){this.g&&(this.response=t,Hr(this))};U.ga=function(){this.g&&Hr(this)};function Hr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,yr(t)}U.setRequestHeader=function(t,e){this.v.append(t,e)};U.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};U.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function yr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ba.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var fR=z.JSON.parse;function Oe(t){ze.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ay,this.K=this.L=!1}Ze(Oe,ze);var Ay="",dR=/^https?$/i,pR=["POST","PUT"];U=Oe.prototype;U.Ka=function(t){this.L=t};U.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ml.g(),this.C=this.u?Wd(this.u):Wd(Ml),this.g.onreadystatechange=lt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Qd(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=z.FormData&&t instanceof z.FormData,!(0<=j_(pR,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{ky(this),0<this.B&&((this.K=gR(this.g))?(this.g.timeout=this.B,this.g.ontimeout=lt(this.qa,this)):this.A=gh(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Qd(this,r)}};function gR(t){return ii&&OA()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}U.qa=function(){typeof rh<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Xe(this,"timeout"),this.abort(8))};function Qd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ry(t),$a(t)}function Ry(t){t.D||(t.D=!0,Xe(t,"complete"),Xe(t,"error"))}U.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Xe(this,"complete"),Xe(this,"abort"),$a(this))};U.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),$a(this,!0)),Oe.X.M.call(this)};U.Ha=function(){this.s||(this.F||this.v||this.l?Ny(this):this.fb())};U.fb=function(){Ny(this)};function Ny(t){if(t.h&&typeof rh<"u"&&(!t.C[1]||_n(t)!=4||t.aa()!=2)){if(t.v&&_n(t)==4)gh(t.Ha,0,t);else if(Xe(t,"readystatechange"),_n(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(_y)[1]||null;if(!i&&z.self&&z.self.location){var r=z.self.location.protocol;i=r.substr(0,r.length-1)}s=!dR.test(i?i.toLowerCase():"")}n=s}if(n)Xe(t,"complete"),Xe(t,"success");else{t.m=6;try{var o=2<_n(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Ry(t)}}finally{$a(t)}}}}function $a(t,e){if(t.g){ky(t);const n=t.g,s=t.C[0]?Wo:null;t.g=null,t.C=null,e||Xe(t,"ready");try{n.onreadystatechange=s}catch{}}}function ky(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(z.clearTimeout(t.A),t.A=null)}function _n(t){return t.g?t.g.readyState:0}U.aa=function(){try{return 2<_n(this)?this.g.status:-1}catch{return-1}};U.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};U.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),fR(e)}};function Yd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Ay:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}U.Ea=function(){return this.m};U.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Dy(t){let e="";return ch(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Th(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Dy(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Re(t,e,n))}function Pi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Oy(t){this.Ca=0,this.i=[],this.j=new xa,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Pi("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Pi("baseRetryDelayMs",5e3,t),this.bb=Pi("retryDelaySeedMs",1e4,t),this.$a=Pi("forwardChannelMaxRetries",2,t),this.ta=Pi("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new wy(t&&t.concurrentRequestLimit),this.Fa=new lR,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}U=Oy.prototype;U.ma=8;U.G=1;function Ih(t){if(Py(t),t.G==3){var e=t.U++,n=wn(t.F);Re(n,"SID",t.I),Re(n,"RID",e),Re(n,"TYPE","terminate"),jr(t,n),e=new Vr(t,t.j,e,void 0),e.K=2,e.v=Va(wn(n)),n=!1,z.navigator&&z.navigator.sendBeacon&&(n=z.navigator.sendBeacon(e.v.toString(),"")),!n&&z.Image&&(new Image().src=e.v,n=!0),n||(e.g=$y(e.l,null),e.g.da(e.v)),e.F=Date.now(),Br(e)}Vy(t)}function Ha(t){t.g&&(bh(t),t.g.cancel(),t.g=null)}function Py(t){Ha(t),t.u&&(z.clearTimeout(t.u),t.u=null),Jo(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&z.clearTimeout(t.m),t.m=null)}function ja(t){Ty(t.h)||t.m||(t.m=!0,ty(t.Ja,t),t.C=0)}function mR(t,e){return Iy(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Fr(lt(t.Ja,t,e),Uy(t,t.C)),t.C++,!0)}U.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Vr(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=z_(r),G_(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=xy(this,i,e),n=wn(this.F),Re(n,"RID",t),Re(n,"CVER",22),this.D&&Re(n,"X-HTTP-Session-Id",this.D),jr(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(Dy(r)))+"&"+e:this.o&&Th(n,this.o,r)),vh(this.h,i),this.Ya&&Re(n,"TYPE","init"),this.O?(Re(n,"$req",e),Re(n,"SID","null"),i.Z=!0,Fl(i,n,null)):Fl(i,n,e),this.G=2}}else this.G==3&&(t?Xd(this,t):this.i.length==0||Ty(this.h)||Xd(this))};function Xd(t,e){var n;e?n=e.m:n=t.U++;const s=wn(t.F);Re(s,"SID",t.I),Re(s,"RID",n),Re(s,"AID",t.T),jr(t,s),t.o&&t.s&&Th(s,t.o,t.s),n=new Vr(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=xy(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),vh(t.h,n),Fl(n,s,e)}function jr(t,e){t.ia&&ch(t.ia,function(n,s){Re(e,s,n)}),t.l&&my({},function(n,s){Re(e,s,n)})}function xy(t,e,n){n=Math.min(t.i.length,n);var s=t.l?lt(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let l=i[c].h;const u=i[c].g;if(l-=r,0>l)r=Math.max(0,i[c].h-100),a=!1;else try{uR(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function My(t){t.g||t.u||(t.Z=1,ty(t.Ia,t),t.A=0)}function Ch(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Fr(lt(t.Ia,t),Uy(t,t.A)),t.A++,!0)}U.Ia=function(){if(this.u=null,Ly(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Fr(lt(this.eb,this),t)}};U.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,gt(10),Ha(this),Ly(this))};function bh(t){t.B!=null&&(z.clearTimeout(t.B),t.B=null)}function Ly(t){t.g=new Vr(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=wn(t.sa);Re(e,"RID","rpc"),Re(e,"SID",t.I),Re(e,"CI",t.L?"0":"1"),Re(e,"AID",t.T),Re(e,"TYPE","xmlhttp"),jr(t,e),t.o&&t.s&&Th(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Va(wn(e)),n.s=null,n.P=!0,fy(n,t)}U.cb=function(){this.v!=null&&(this.v=null,Ha(this),Ch(this),gt(19))};function Jo(t){t.v!=null&&(z.clearTimeout(t.v),t.v=null)}function Fy(t,e){var n=null;if(t.g==e){Jo(t),bh(t),t.g=null;var s=2}else if(Vl(t.h,e))n=e.D,Cy(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Ma(),Xe(s,new cy(s,n)),ja(t)}else My(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&mR(t,e)||s==2&&Ch(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:cs(t,5);break;case 4:cs(t,10);break;case 3:cs(t,6);break;default:cs(t,2)}}}function Uy(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function cs(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=lt(t.kb,t);n||(n=new ds("//www.google.com/images/cleardot.gif"),z.location&&z.location.protocol=="http"||Yo(n,"https"),Va(n)),hR(n.toString(),s)}else gt(2);t.G=0,t.l&&t.l.va(e),Vy(t),Py(t)}U.kb=function(t){t?(this.j.info("Successfully pinged google.com"),gt(2)):(this.j.info("Failed to ping google.com"),gt(1))};function Vy(t){if(t.G=0,t.la=[],t.l){const e=by(t.h);(e.length!=0||t.i.length!=0)&&(Bd(t.la,e),Bd(t.la,t.i),t.h.i.length=0,oh(t.i),t.i.length=0),t.l.ua()}}function By(t,e,n){var s=n instanceof ds?wn(n):new ds(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Xo(s,s.m);else{var i=z.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new ds(null,void 0);s&&Yo(r,s),e&&(r.g=e),i&&Xo(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&Re(s,n,e),Re(s,"VER",t.ma),jr(t,s),s}function $y(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Oe(new $r({jb:!0})):new Oe(t.ra),e.Ka(t.H),e}function Hy(){}U=Hy.prototype;U.xa=function(){};U.wa=function(){};U.va=function(){};U.ua=function(){};U.Ra=function(){};function Zo(){if(ii&&!(10<=Number(PA)))throw Error("Environmental error: no available transport.")}Zo.prototype.g=function(t,e){return new Nt(t,e)};function Nt(t,e){ze.call(this),this.g=new Oy(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!zo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!zo(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ii(this)}Ze(Nt,ze);Nt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;gt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=By(t,null,t.V),ja(t)};Nt.prototype.close=function(){Ih(this.g)};Nt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=dh(t),t=n);e.i.push(new aR(e.ab++,t)),e.G==3&&ja(e)};Nt.prototype.M=function(){this.g.l=null,delete this.j,Ih(this.g),delete this.g,Nt.X.M.call(this)};function jy(t){_h.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ze(jy,_h);function Ky(){yh.call(this),this.status=1}Ze(Ky,yh);function Ii(t){this.g=t}Ze(Ii,Hy);Ii.prototype.xa=function(){Xe(this.g,"a")};Ii.prototype.wa=function(t){Xe(this.g,new jy(t))};Ii.prototype.va=function(t){Xe(this.g,new Ky)};Ii.prototype.ua=function(){Xe(this.g,"b")};Zo.prototype.createWebChannel=Zo.prototype.g;Nt.prototype.send=Nt.prototype.u;Nt.prototype.open=Nt.prototype.m;Nt.prototype.close=Nt.prototype.close;La.NO_ERROR=0;La.TIMEOUT=8;La.HTTP_ERROR=6;ly.COMPLETE="complete";uy.EventType=Ur;Ur.OPEN="a";Ur.CLOSE="b";Ur.ERROR="c";Ur.MESSAGE="d";ze.prototype.listen=ze.prototype.N;Oe.prototype.listenOnce=Oe.prototype.O;Oe.prototype.getLastError=Oe.prototype.Oa;Oe.prototype.getLastErrorCode=Oe.prototype.Ea;Oe.prototype.getStatus=Oe.prototype.aa;Oe.prototype.getResponseJson=Oe.prototype.Sa;Oe.prototype.getResponseText=Oe.prototype.fa;Oe.prototype.send=Oe.prototype.da;Oe.prototype.setWithCredentials=Oe.prototype.Ka;var _R=function(){return new Zo},yR=function(){return Ma()},kc=La,vR=ly,ER=As,Jd={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},wR=$r,lo=uy,TR=Oe;const Zd="@firebase/firestore";/**
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
 */class st{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}st.UNAUTHENTICATED=new st(null),st.GOOGLE_CREDENTIALS=new st("google-credentials-uid"),st.FIRST_PARTY=new st("first-party-uid"),st.MOCK_USER=new st("mock-user");/**
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
 */const ws=new Rr("@firebase/firestore");function ep(){return ws.logLevel}function V(t,...e){if(ws.logLevel<=ce.DEBUG){const n=e.map(Sh);ws.debug(`Firestore (${Ci}): ${t}`,...n)}}function Tn(t,...e){if(ws.logLevel<=ce.ERROR){const n=e.map(Sh);ws.error(`Firestore (${Ci}): ${t}`,...n)}}function ea(t,...e){if(ws.logLevel<=ce.WARN){const n=e.map(Sh);ws.warn(`Firestore (${Ci}): ${t}`,...n)}}function Sh(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function X(t="Unexpected state"){const e=`FIRESTORE (${Ci}) INTERNAL ASSERTION FAILED: `+t;throw Tn(e),new Error(e)}function Be(t,e){t||X()}function he(t,e){return t}/**
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
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Un{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class qy{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class IR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(st.UNAUTHENTICATED))}shutdown(){}}class CR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class bR{constructor(e){this.t=e,this.currentUser=st.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new Un;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Un,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Un)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Be(typeof s.accessToken=="string"),new qy(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Be(e===null||typeof e=="string"),new st(e)}}class SR{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=st.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class AR{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new SR(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(st.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class RR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class NR{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=r=>{r.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?i(r):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Be(typeof n.token=="string"),this.T=n.token,new RR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function kR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class DR{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=kR(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function _e(t,e){return t<e?-1:t>e?1:0}function ri(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
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
 */class mt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return mt.fromMillis(Date.now())}static fromDate(e){return mt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new mt(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new mt(0,0))}static max(){return new Y(new mt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class vr{constructor(e,n,s){n===void 0?n=0:n>e.length&&X(),s===void 0?s=e.length-n:s>e.length-n&&X(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return vr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof vr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class De extends vr{construct(e,n,s){return new De(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new K(O.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new De(n)}static emptyPath(){return new De([])}}const OR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class vt extends vr{construct(e,n,s){return new vt(e,n,s)}static isValidIdentifier(e){return OR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),vt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new vt(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new K(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new K(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new K(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new K(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new vt(n)}static emptyPath(){return new vt([])}}/**
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
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(De.fromString(e))}static fromName(e){return new W(De.fromString(e).popFirst(5))}static empty(){return new W(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return De.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new De(e.slice()))}}function PR(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(s===1e9?new mt(n+1,0):new mt(n,s));return new jn(i,W.empty(),e)}function xR(t){return new jn(t.readTime,t.key,-1)}class jn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new jn(Y.min(),W.empty(),-1)}static max(){return new jn(Y.max(),W.empty(),-1)}}function MR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:_e(t.largestBatchId,e.largestBatchId))}/**
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
 */const LR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class FR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ah(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==LR)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Rh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Rh.ct=-1;function Ka(t){return t==null}function Bl(t){return t===0&&1/t==-1/0}/**
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
 */function tp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function qa(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function UR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Je{constructor(e,n){this.comparator=e,this.root=n||Ge.EMPTY}insert(e,n){return new Je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ge.BLACK,null,null))}remove(e){return new Je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ge.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new uo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new uo(this.root,e,this.comparator,!1)}getReverseIterator(){return new uo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new uo(this.root,e,this.comparator,!0)}}class uo{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ge{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ge.RED,this.left=i??Ge.EMPTY,this.right=r??Ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Ge(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ge.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}Ge.EMPTY=null,Ge.RED=!0,Ge.BLACK=!1;Ge.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Ge(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class $e{constructor(e){this.comparator=e,this.data=new Je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new np(this.data.getIterator())}getIteratorFrom(e){return new np(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof $e)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new $e(this.comparator);return n.data=e,n}}class np{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class On{constructor(e){this.fields=e,e.sort(vt.comparator)}static empty(){return new On([])}unionWith(e){let n=new $e(vt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new On(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ri(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class VR extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new VR("Invalid base64 string: "+i):i}}(e);return new ft(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const BR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kn(t){if(Be(!!t),typeof t=="string"){let e=0;const n=BR.exec(t);if(Be(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Fe(t.seconds),nanos:Fe(t.nanos)}}function Fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function oi(t){return typeof t=="string"?ft.fromBase64String(t):ft.fromUint8Array(t)}/**
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
 */function Wy(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function zy(t){const e=t.mapValue.fields.__previous_value__;return Wy(e)?zy(e):e}function Er(t){const e=Kn(t.mapValue.fields.__local_write_time__.timestampValue);return new mt(e.seconds,e.nanos)}/**
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
 */class $R{constructor(e,n,s,i,r,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class wr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new wr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof wr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ho={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ts(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Wy(t)?4:HR(t)?9007199254740991:10:X()}function cn(t,e){if(t===e)return!0;const n=Ts(t);if(n!==Ts(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Er(t).isEqual(Er(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Kn(s.timestampValue),o=Kn(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return oi(s.bytesValue).isEqual(oi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Fe(s.geoPointValue.latitude)===Fe(i.geoPointValue.latitude)&&Fe(s.geoPointValue.longitude)===Fe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Fe(s.integerValue)===Fe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=Fe(s.doubleValue),o=Fe(i.doubleValue);return r===o?Bl(r)===Bl(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return ri(t.arrayValue.values||[],e.arrayValue.values||[],cn);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(tp(r)!==tp(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!cn(r[a],o[a])))return!1;return!0}(t,e);default:return X()}}function Tr(t,e){return(t.values||[]).find(n=>cn(n,e))!==void 0}function ai(t,e){if(t===e)return 0;const n=Ts(t),s=Ts(e);if(n!==s)return _e(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return _e(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=Fe(i.integerValue||i.doubleValue),a=Fe(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return sp(t.timestampValue,e.timestampValue);case 4:return sp(Er(t),Er(e));case 5:return _e(t.stringValue,e.stringValue);case 6:return function(i,r){const o=oi(i),a=oi(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=_e(o[c],a[c]);if(l!==0)return l}return _e(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=_e(Fe(i.latitude),Fe(r.latitude));return o!==0?o:_e(Fe(i.longitude),Fe(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=ai(o[c],a[c]);if(l)return l}return _e(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===ho.mapValue&&r===ho.mapValue)return 0;if(i===ho.mapValue)return 1;if(r===ho.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=_e(a[u],l[u]);if(h!==0)return h;const f=ai(o[a[u]],c[l[u]]);if(f!==0)return f}return _e(a.length,l.length)}(t.mapValue,e.mapValue);default:throw X()}}function sp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return _e(t,e);const n=Kn(t),s=Kn(e),i=_e(n.seconds,s.seconds);return i!==0?i:_e(n.nanos,s.nanos)}function ci(t){return $l(t)}function $l(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=Kn(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?oi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,W.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=$l(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${$l(s.fields[a])}`;return r+"}"}(t.mapValue):X();var e,n}function Hl(t){return!!t&&"integerValue"in t}function Nh(t){return!!t&&"arrayValue"in t}function ip(t){return!!t&&"nullValue"in t}function rp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Dc(t){return!!t&&"mapValue"in t}function Yi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return qa(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Yi(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Yi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function HR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class tn{constructor(e){this.value=e}static empty(){return new tn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Dc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Yi(n)}setAll(e){let n=vt.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Yi(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());Dc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];Dc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){qa(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new tn(Yi(this.value))}}/**
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
 */class ot{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ot(e,0,Y.min(),Y.min(),Y.min(),tn.empty(),0)}static newFoundDocument(e,n,s,i){return new ot(e,1,n,Y.min(),s,i,0)}static newNoDocument(e,n){return new ot(e,2,n,Y.min(),Y.min(),tn.empty(),0)}static newUnknownDocument(e,n){return new ot(e,3,n,Y.min(),Y.min(),tn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ta{constructor(e,n){this.position=e,this.inclusive=n}}function op(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=W.comparator(W.fromName(o.referenceValue),n.key):s=ai(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function ap(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!cn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Xi{constructor(e,n="asc"){this.field=e,this.dir=n}}function jR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Gy{}class Ve extends Gy{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new qR(e,n,s):n==="array-contains"?new GR(e,s):n==="in"?new QR(e,s):n==="not-in"?new YR(e,s):n==="array-contains-any"?new XR(e,s):new Ve(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new WR(e,s):new zR(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ai(n,this.value)):n!==null&&Ts(this.value)===Ts(n)&&this.matchesComparison(ai(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ln extends Gy{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new ln(e,n)}matches(e){return Qy(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Qy(t){return t.op==="and"}function Yy(t){return KR(t)&&Qy(t)}function KR(t){for(const e of t.filters)if(e instanceof ln)return!1;return!0}function jl(t){if(t instanceof Ve)return t.field.canonicalString()+t.op.toString()+ci(t.value);if(Yy(t))return t.filters.map(e=>jl(e)).join(",");{const e=t.filters.map(n=>jl(n)).join(",");return`${t.op}(${e})`}}function Xy(t,e){return t instanceof Ve?function(n,s){return s instanceof Ve&&n.op===s.op&&n.field.isEqual(s.field)&&cn(n.value,s.value)}(t,e):t instanceof ln?function(n,s){return s instanceof ln&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&Xy(r,s.filters[o]),!0):!1}(t,e):void X()}function Jy(t){return t instanceof Ve?function(e){return`${e.field.canonicalString()} ${e.op} ${ci(e.value)}`}(t):t instanceof ln?function(e){return e.op.toString()+" {"+e.getFilters().map(Jy).join(" ,")+"}"}(t):"Filter"}class qR extends Ve{constructor(e,n,s){super(e,n,s),this.key=W.fromName(s.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class WR extends Ve{constructor(e,n){super(e,"in",n),this.keys=Zy("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class zR extends Ve{constructor(e,n){super(e,"not-in",n),this.keys=Zy("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Zy(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>W.fromName(s.referenceValue))}class GR extends Ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Nh(n)&&Tr(n.arrayValue,this.value)}}class QR extends Ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Tr(this.value.arrayValue,n)}}class YR extends Ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(Tr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Tr(this.value.arrayValue,n)}}class XR extends Ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Nh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Tr(this.value.arrayValue,s))}}/**
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
 */class JR{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function cp(t,e=null,n=[],s=[],i=null,r=null,o=null){return new JR(t,e,n,s,i,r,o)}function kh(t){const e=he(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>jl(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Ka(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ci(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ci(s)).join(",")),e.ft=n}return e.ft}function Dh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!jR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Xy(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ap(t.startAt,e.startAt)&&ap(t.endAt,e.endAt)}function Kl(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Wa{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this.wt=null,this.startAt,this.endAt}}function ZR(t,e,n,s,i,r,o,a){return new Wa(t,e,n,s,i,r,o,a)}function za(t){return new Wa(t)}function lp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function eN(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function tN(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function nN(t){return t.collectionGroup!==null}function zs(t){const e=he(t);if(e.dt===null){e.dt=[];const n=tN(e),s=eN(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new Xi(n)),e.dt.push(new Xi(vt.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.dt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Xi(vt.keyField(),r))}}}return e.dt}function In(t){const e=he(t);if(!e.wt)if(e.limitType==="F")e.wt=cp(e.path,e.collectionGroup,zs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of zs(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Xi(r.field,o))}const s=e.endAt?new ta(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new ta(e.startAt.position,e.startAt.inclusive):null;e.wt=cp(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.wt}function ql(t,e,n){return new Wa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ga(t,e){return Dh(In(t),In(e))&&t.limitType===e.limitType}function ev(t){return`${kh(In(t))}|lt:${t.limitType}`}function Wl(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Jy(s)).join(", ")}]`),Ka(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ci(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ci(s)).join(",")),`Target(${n})`}(In(t))}; limitType=${t.limitType})`}function Qa(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):W.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of zs(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=op(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,zs(n),s)||n.endAt&&!function(i,r,o){const a=op(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,zs(n),s))}(t,e)}function sN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function tv(t){return(e,n)=>{let s=!1;for(const i of zs(t)){const r=iN(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function iN(t,e,n){const s=t.field.isKeyField()?W.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?ai(a,c):X()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return X()}}/**
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
 */class bi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){qa(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return UR(this.inner)}size(){return this.innerSize}}/**
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
 */const rN=new Je(W.comparator);function qn(){return rN}const nv=new Je(W.comparator);function Vi(...t){let e=nv;for(const n of t)e=e.insert(n.key,n);return e}function oN(t){let e=nv;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function ls(){return Ji()}function sv(){return Ji()}function Ji(){return new bi(t=>t.toString(),(t,e)=>t.isEqual(e))}const aN=new $e(W.comparator);function le(...t){let e=aN;for(const n of t)e=e.add(n);return e}const cN=new $e(_e);function iv(){return cN}/**
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
 */function lN(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bl(e)?"-0":e}}function uN(t){return{integerValue:""+t}}/**
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
 */class Ya{constructor(){this._=void 0}}function hN(t,e,n){return t instanceof zl?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof na?rv(t,e):t instanceof sa?ov(t,e):function(s,i){const r=dN(s,i),o=up(r)+up(s._t);return Hl(r)&&Hl(s._t)?uN(o):lN(s.serializer,o)}(t,e)}function fN(t,e,n){return t instanceof na?rv(t,e):t instanceof sa?ov(t,e):n}function dN(t,e){return t instanceof Gl?Hl(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class zl extends Ya{}class na extends Ya{constructor(e){super(),this.elements=e}}function rv(t,e){const n=av(e);for(const s of t.elements)n.some(i=>cn(i,s))||n.push(s);return{arrayValue:{values:n}}}class sa extends Ya{constructor(e){super(),this.elements=e}}function ov(t,e){let n=av(e);for(const s of t.elements)n=n.filter(i=>!cn(i,s));return{arrayValue:{values:n}}}class Gl extends Ya{constructor(e,n){super(),this.serializer=e,this._t=n}}function up(t){return Fe(t.integerValue||t.doubleValue)}function av(t){return Nh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function pN(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof na&&s instanceof na||n instanceof sa&&s instanceof sa?ri(n.elements,s.elements,cn):n instanceof Gl&&s instanceof Gl?cn(n._t,s._t):n instanceof zl&&s instanceof zl}(t.transform,e.transform)}class ps{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ps}static exists(e){return new ps(void 0,e)}static updateTime(e){return new ps(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Io(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Oh{}function cv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new mN(t.key,ps.none()):new Ph(t.key,t.data,ps.none());{const n=t.data,s=tn.empty();let i=new $e(vt.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Xa(t.key,s,new On(i.toArray()),ps.none())}}function gN(t,e,n){t instanceof Ph?function(s,i,r){const o=s.value.clone(),a=fp(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Xa?function(s,i,r){if(!Io(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=fp(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(lv(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Zi(t,e,n,s){return t instanceof Ph?function(i,r,o,a){if(!Io(i.precondition,r))return o;const c=i.value.clone(),l=dp(i.fieldTransforms,a,r);return c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Xa?function(i,r,o,a){if(!Io(i.precondition,r))return o;const c=dp(i.fieldTransforms,a,r),l=r.data;return l.setAll(lv(i)),l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return Io(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function hp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ri(n,s,(i,r)=>pN(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ph extends Oh{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Xa extends Oh{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function lv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function fp(t,e,n){const s=new Map;Be(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,fN(o,a,n[i]))}return s}function dp(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,hN(r,o,e))}return s}class mN extends Oh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class _N{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&gN(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Zi(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Zi(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=sv();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const c=cv(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(Y.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&ri(this.mutations,e.mutations,(n,s)=>hp(n,s))&&ri(this.baseMutations,e.baseMutations,(n,s)=>hp(n,s))}}/**
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
 */class yN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class vN{constructor(e){this.count=e}}/**
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
 */var Le,se;function uv(t){if(t===void 0)return Tn("GRPC error has no .code"),O.UNKNOWN;switch(t){case Le.OK:return O.OK;case Le.CANCELLED:return O.CANCELLED;case Le.UNKNOWN:return O.UNKNOWN;case Le.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Le.INTERNAL:return O.INTERNAL;case Le.UNAVAILABLE:return O.UNAVAILABLE;case Le.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Le.NOT_FOUND:return O.NOT_FOUND;case Le.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Le.ABORTED:return O.ABORTED;case Le.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Le.DATA_LOSS:return O.DATA_LOSS;default:return X()}}(se=Le||(Le={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class xh{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return fo}static getOrCreateInstance(){return fo===null&&(fo=new xh),fo}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let fo=null;/**
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
 */class Ja{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,qr.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Ja(Y.min(),i,iv(),qn(),le())}}class qr{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new qr(s,n,le(),le(),le())}}/**
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
 */class Co{constructor(e,n,s,i){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=i}}class hv{constructor(e,n){this.targetId=e,this.Et=n}}class fv{constructor(e,n,s=ft.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class pp{constructor(){this.At=0,this.Rt=mp(),this.vt=ft.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=le(),n=le(),s=le();return this.Rt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:X()}}),new qr(this.vt,this.bt,e,n,s)}xt(){this.Pt=!1,this.Rt=mp()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class EN{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=qn(),this.qt=gp(),this.Ut=new $e(_e)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const s=this.jt(n);switch(e.state){case 0:this.Wt(n)&&s.Dt(e.resumeToken);break;case 1:s.$t(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.$t(),s.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(s.Mt(),s.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,i)=>{this.Wt(i)&&n(i)})}Jt(e){var n;const s=e.targetId,i=e.Et.count,r=this.Yt(s);if(r){const o=r.target;if(Kl(o))if(i===0){const a=new W(o.path);this.Qt(s,a,ot.newNoDocument(a,Y.min()))}else Be(i===1);else{const a=this.Zt(s);a!==i&&(this.Ht(s),this.Ut=this.Ut.add(s),(n=xh.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((r,o)=>{const a=this.Yt(o);if(a){if(r.current&&Kl(a.target)){const c=new W(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,ot.newNoDocument(c,e))}r.St&&(n.set(o,r.Ct()),r.xt())}});let s=le();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Yt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(e));const i=new Ja(e,n,this.Ut,this.Lt,s);return this.Lt=qn(),this.qt=gp(),this.Ut=new $e(_e),i}Gt(e,n){if(!this.Wt(e))return;const s=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.Wt(e))return;const i=this.jt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new pp,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new $e(_e),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||V("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new pp),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function gp(){return new Je(W.comparator)}function mp(){return new Je(W.comparator)}/**
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
 */const wN=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),TN=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),IN=(()=>({and:"AND",or:"OR"}))();class CN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function bN(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function SN(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Gs(t){return Be(!!t),Y.fromTimestamp(function(e){const n=Kn(e);return new mt(n.seconds,n.nanos)}(t))}function AN(t,e){return function(n){return new De(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function dv(t){const e=De.fromString(t);return Be(_v(e)),e}function Oc(t,e){const n=dv(e);if(n.get(1)!==t.databaseId.projectId)throw new K(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(pv(n))}function Ql(t,e){return AN(t.databaseId,e)}function RN(t){const e=dv(t);return e.length===4?De.emptyPath():pv(e)}function _p(t){return new De(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function pv(t){return Be(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function NN(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,l){return c.useProto3Json?(Be(l===void 0||typeof l=="string"),ft.fromBase64String(l||"")):(Be(l===void 0||l instanceof Uint8Array),ft.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?O.UNKNOWN:uv(c.code);return new K(l,c.message||"")}(o);n=new fv(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Oc(t,s.document.name),r=Gs(s.document.updateTime),o=s.document.createTime?Gs(s.document.createTime):Y.min(),a=new tn({mapValue:{fields:s.document.fields}}),c=ot.newFoundDocument(i,r,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new Co(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Oc(t,s.document),r=s.readTime?Gs(s.readTime):Y.min(),o=ot.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Co([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Oc(t,s.document),r=s.removedTargetIds||[];n=new Co([],r,i,null)}else{if(!("filter"in e))return X();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new vN(i),o=s.targetId;n=new hv(o,r)}}return n}function kN(t,e){return{documents:[Ql(t,e.path)]}}function DN(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Ql(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ql(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length!==0)return mv(ln.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Ps(u.field),direction:xN(u.dir)}}(l))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(c,l){return c.useProto3Json||Ka(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function ON(t){let e=RN(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Be(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=gv(u);return h instanceof ln&&Yy(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Xi(xs(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Ka(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new ta(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new ta(f,h)}(n.endAt)),ZR(e,i,o,r,a,"F",c,l)}function PN(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return X()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function gv(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=xs(e.unaryFilter.field);return Ve.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=xs(e.unaryFilter.field);return Ve.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=xs(e.unaryFilter.field);return Ve.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=xs(e.unaryFilter.field);return Ve.create(r,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(t):t.fieldFilter!==void 0?function(e){return Ve.create(xs(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return ln.create(e.compositeFilter.filters.map(n=>gv(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return X()}}(e.compositeFilter.op))}(t):X()}function xN(t){return wN[t]}function MN(t){return TN[t]}function LN(t){return IN[t]}function Ps(t){return{fieldPath:t.canonicalString()}}function xs(t){return vt.fromServerFormat(t.fieldPath)}function mv(t){return t instanceof Ve?function(e){if(e.op==="=="){if(rp(e.value))return{unaryFilter:{field:Ps(e.field),op:"IS_NAN"}};if(ip(e.value))return{unaryFilter:{field:Ps(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(rp(e.value))return{unaryFilter:{field:Ps(e.field),op:"IS_NOT_NAN"}};if(ip(e.value))return{unaryFilter:{field:Ps(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ps(e.field),op:MN(e.op),value:e.value}}}(t):t instanceof ln?function(e){const n=e.getFilters().map(s=>mv(s));return n.length===1?n[0]:{compositeFilter:{op:LN(e.op),filters:n}}}(t):X()}function _v(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class gs{constructor(e,n,s,i,r=Y.min(),o=Y.min(),a=ft.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new gs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new gs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new gs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class FN{constructor(e){this.se=e}}function UN(t){const e=ON({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ql(e,e.limit,"L"):e}/**
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
 */class VN{constructor(){this.He=new BN}addToCollectionParentIndex(e,n){return this.He.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(jn.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(jn.min())}updateCollectionGroup(e,n,s){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class BN{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new $e(De.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new $e(De.comparator)).toArray()}}/**
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
 */class $N{constructor(){this.changes=new bi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ot.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?S.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class HN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class jN{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&Zi(s.mutation,i,On.empty(),mt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,le()).next(()=>s))}getLocalViewOfDocuments(e,n,s=le()){const i=ls();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Vi();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=ls();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,le()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=qn();const o=Ji(),a=Ji();return n.forEach((c,l)=>{const u=s.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof Xa)?r=r.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Zi(u.mutation,l,u.mutation.getFieldMask(),mt.now())):o.set(l.key,On.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new HN(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Ji();let i=new Je((o,a)=>o-a),r=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||On.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(i.get(a.batchId)||le()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=sv();u.forEach(f=>{if(!r.has(f)){const p=cv(n.get(f),s.get(f));p!==null&&h.set(f,p),r=r.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return S.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return W.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):nN(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):S.resolve(ls());let a=-1,c=r;return o.next(l=>S.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?S.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,c,l,le())).next(u=>({batchId:a,changes:oN(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(s=>{let i=Vi();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=Vi();return this.indexManager.getCollectionParents(e,i).next(o=>S.forEach(o,a=>{const c=function(l,u){return new Wa(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,ot.newInvalidDocument(l)))});let o=Vi();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&Zi(l.mutation,c,On.empty(),mt.now()),Qa(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class KN{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return S.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Gs(s.createTime)}),S.resolve()}getNamedQuery(e,n){return S.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(s){return{name:s.name,query:UN(s.bundledQuery),readTime:Gs(s.readTime)}}(n)),S.resolve()}}/**
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
 */class qN{constructor(){this.overlays=new Je(W.comparator),this.ts=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const s=ls();return S.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.re(e,n,r)}),S.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.ts.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ts.delete(s)),S.resolve()}getOverlaysForCollection(e,n,s){const i=ls(),r=n.length+1,o=new W(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return S.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new Je((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=r.get(l.largestBatchId);u===null&&(u=ls(),r=r.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=ls(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return S.resolve(a)}re(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ts.get(i.largestBatchId).delete(s.key);this.ts.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new yN(n,s));let r=this.ts.get(n);r===void 0&&(r=le(),this.ts.set(n,r)),this.ts.set(n,r.add(s.key))}}/**
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
 */class Mh{constructor(){this.es=new $e(Ke.ns),this.ss=new $e(Ke.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const s=new Ke(e,n);this.es=this.es.add(s),this.ss=this.ss.add(s)}os(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.us(new Ke(e,n))}cs(e,n){e.forEach(s=>this.removeReference(s,n))}hs(e){const n=new W(new De([])),s=new Ke(n,e),i=new Ke(n,e+1),r=[];return this.ss.forEachInRange([s,i],o=>{this.us(o),r.push(o.key)}),r}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new W(new De([])),s=new Ke(n,e),i=new Ke(n,e+1);let r=le();return this.ss.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Ke(e,0),s=this.es.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ke{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return W.comparator(e.key,n.key)||_e(e.ds,n.ds)}static rs(e,n){return _e(e.ds,n.ds)||W.comparator(e.key,n.key)}}/**
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
 */class WN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new $e(Ke.ns)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new _N(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this._s=this._s.add(new Ke(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ys(s),r=i<0?0:i;return S.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ke(n,0),i=new Ke(n,Number.POSITIVE_INFINITY),r=[];return this._s.forEachInRange([s,i],o=>{const a=this.gs(o.ds);r.push(a)}),S.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new $e(_e);return n.forEach(i=>{const r=new Ke(i,0),o=new Ke(i,Number.POSITIVE_INFINITY);this._s.forEachInRange([r,o],a=>{s=s.add(a.ds)})}),S.resolve(this.ps(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;W.isDocumentKey(r)||(r=r.child(""));const o=new Ke(new W(r),0);let a=new $e(_e);return this._s.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.ds)),!0)},o),S.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(s=>{const i=this.gs(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Be(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this._s;return S.forEach(n.mutations,i=>{const r=new Ke(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this._s=s})}En(e){}containsKey(e,n){const s=new Ke(n,0),i=this._s.firstAfterOrEqual(s);return S.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class zN{constructor(e){this.Ts=e,this.docs=new Je(W.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Ts(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return S.resolve(s?s.document.mutableCopy():ot.newInvalidDocument(n))}getEntries(e,n){let s=qn();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():ot.newInvalidDocument(i))}),S.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=qn();const o=n.path,a=new W(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||MR(xR(u),s)<=0||(i.has(u.key)||Qa(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return S.resolve(r)}getAllFromCollectionGroup(e,n,s,i){X()}Es(e,n){return S.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new GN(this)}getSize(e){return S.resolve(this.size)}}class GN extends $N{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Jn.addEntry(e,i)):this.Jn.removeEntry(s)}),S.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
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
 */class QN{constructor(e){this.persistence=e,this.As=new bi(n=>kh(n),Dh),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Mh,this.targetCount=0,this.bs=li.vn()}forEachTarget(e,n){return this.As.forEach((s,i)=>n(i)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Rs&&(this.Rs=n),S.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new li(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.Sn(n),S.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.As.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),S.waitFor(r).next(()=>i)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const s=this.As.get(n)||null;return S.resolve(s)}addMatchingKeys(e,n,s){return this.vs.os(n,s),S.resolve()}removeMatchingKeys(e,n,s){this.vs.cs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),S.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),S.resolve()}getMatchingKeysForTargetId(e,n){const s=this.vs.fs(n);return S.resolve(s)}containsKey(e,n){return S.resolve(this.vs.containsKey(n))}}/**
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
 */class YN{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new Rh(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new QN(this),this.indexManager=new VN,this.remoteDocumentCache=function(s){return new zN(s)}(s=>this.referenceDelegate.Cs(s)),this.serializer=new FN(n),this.xs=new KN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new qN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ps[e.toKey()];return s||(s=new WN(n,this.referenceDelegate),this.Ps[e.toKey()]=s),s}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,s){V("MemoryPersistence","Starting transaction:",e);const i=new XN(this.Vs.next());return this.referenceDelegate.Ns(),s(i).next(r=>this.referenceDelegate.ks(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Os(e,n){return S.or(Object.values(this.Ps).map(s=>()=>s.containsKey(e,n)))}}class XN extends FR{constructor(e){super(),this.currentSequenceNumber=e}}class Lh{constructor(e){this.persistence=e,this.$s=new Mh,this.Ms=null}static Fs(e){return new Lh(e)}get Bs(){if(this.Ms)return this.Ms;throw X()}addReference(e,n,s){return this.$s.addReference(s,n),this.Bs.delete(s.toString()),S.resolve()}removeReference(e,n,s){return this.$s.removeReference(s,n),this.Bs.add(s.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),S.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(i=>this.Bs.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Bs.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Bs,s=>{const i=W.fromPath(s);return this.Ls(e,i).next(r=>{r||n.removeEntry(i,Y.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(s=>{s?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return S.or([()=>S.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
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
 */class Fh{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Vi=s,this.Si=i}static Di(e,n){let s=le(),i=le();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Fh(e,n.fromCache,s,i)}}/**
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
 */class JN{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Ni(e,n).next(r=>r||this.ki(e,n,i,s)).next(r=>r||this.Oi(e,n))}Ni(e,n){if(lp(n))return S.resolve(null);let s=In(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ql(n,null,"F"),s=In(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=le(...r);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.$i(n,a);return this.Mi(n,l,o,c.readTime)?this.Ni(e,ql(n,null,"F")):this.Fi(e,l,n,c)}))})))}ki(e,n,s,i){return lp(n)||i.isEqual(Y.min())?this.Oi(e,n):this.xi.getDocuments(e,s).next(r=>{const o=this.$i(n,r);return this.Mi(n,o,s,i)?this.Oi(e,n):(ep()<=ce.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Wl(n)),this.Fi(e,o,n,PR(i,-1)))})}$i(e,n){let s=new $e(tv(e));return n.forEach((i,r)=>{Qa(e,r)&&(s=s.add(r))}),s}Mi(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Oi(e,n){return ep()<=ce.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Wl(n)),this.xi.getDocumentsMatchingQuery(e,n,jn.min())}Fi(e,n,s,i){return this.xi.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class ZN{constructor(e,n,s,i){this.persistence=e,this.Bi=n,this.serializer=i,this.Li=new Je(_e),this.qi=new bi(r=>kh(r),Dh),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(s)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jN(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function ek(t,e,n,s){return new ZN(t,e,n,s)}async function yv(t,e){const n=he(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Gi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=le();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of r){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({Qi:l,removedBatchIds:o,addedBatchIds:a}))})})}function vv(t){const e=he(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function tk(t,e){const n=he(t),s=e.snapshotVersion;let i=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});i=n.Li;const a=[];e.targetChanges.forEach((u,h)=>{const f=i.get(h);if(!f)return;a.push(n.Ds.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(r,u.addedDocuments,h)));let p=f.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(ft.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),i=i.insert(h,p),function(m,_,v){return m.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(f,p,u)&&a.push(n.Ds.updateTargetData(r,p))});let c=qn(),l=le();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(nk(r,o,e.documentUpdates).next(u=>{c=u.zi,l=u.ji})),!s.isEqual(Y.min())){const u=n.Ds.getLastRemoteSnapshotVersion(r).next(h=>n.Ds.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return S.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,l)).next(()=>c)}).then(r=>(n.Li=i,r))}function nk(t,e,n){let s=le(),i=le();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=qn();return n.forEach((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(Y.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):V("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{zi:o,ji:i}})}function sk(t,e){const n=he(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Ds.getTargetData(s,e).next(r=>r?(i=r,S.resolve(i)):n.Ds.allocateTargetId(s).next(o=>(i=new gs(e,o,0,s.currentSequenceNumber),n.Ds.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Li.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Li=n.Li.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function Yl(t,e,n){const s=he(t),i=s.Li.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Kr(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Li=s.Li.remove(e),s.qi.delete(i.target)}function yp(t,e,n){const s=he(t);let i=Y.min(),r=le();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=he(a),h=u.qi.get(l);return h!==void 0?S.resolve(u.Li.get(h)):u.Ds.getTargetData(c,l)}(s,o,In(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ds.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Bi.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?r:le())).next(a=>(ik(s,sN(e),a),{documents:a,Wi:r})))}function ik(t,e,n){let s=t.Ui.get(e)||Y.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Ui.set(e,s)}class vp{constructor(){this.activeTargetIds=iv()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class rk{constructor(){this.Br=new vp,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,s){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new vp,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class ok{qr(e){}shutdown(){}}/**
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
 */class Ep{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let po=null;function Pc(){return po===null?po=268435456+Math.round(2147483648*Math.random()):po++,"0x"+po.toString(16)}/**
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
 */const ak={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class ck{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
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
 */const nt="WebChannelConnection";class lk extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,s,i,r){const o=Pc(),a=this.ao(e,n);V("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.ho(c,i,r),this.lo(e,a,c,s).then(l=>(V("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw ea("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}fo(e,n,s,i,r,o){return this.co(e,n,s,i,r)}ho(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ci,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ao(e,n){const s=ak[e];return`${this.ro}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,s,i){const r=Pc();return new Promise((o,a)=>{const c=new TR;c.setWithCredentials(!0),c.listenOnce(vR.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case kc.NO_ERROR:const u=c.getResponseJson();V(nt,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case kc.TIMEOUT:V(nt,`RPC '${e}' ${r} timed out`),a(new K(O.DEADLINE_EXCEEDED,"Request time out"));break;case kc.HTTP_ERROR:const h=c.getStatus();if(V(nt,`RPC '${e}' ${r} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const m=function(_){const v=_.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(v)>=0?v:O.UNKNOWN}(p.status);a(new K(m,p.message))}else a(new K(O.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new K(O.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{V(nt,`RPC '${e}' ${r} completed.`)}});const l=JSON.stringify(i);V(nt,`RPC '${e}' ${r} sending request:`,i),c.send(n,"POST",l,s,15)})}wo(e,n,s){const i=Pc(),r=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=_R(),a=yR(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new wR({})),this.ho(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const l=r.join("");V(nt,`Creating RPC '${e}' stream ${i}: ${l}`,c);const u=o.createWebChannel(l,c);let h=!1,f=!1;const p=new ck({Wr:_=>{f?V(nt,`Not sending because RPC '${e}' stream ${i} is closed:`,_):(h||(V(nt,`Opening RPC '${e}' stream ${i} transport.`),u.open(),h=!0),V(nt,`RPC '${e}' stream ${i} sending:`,_),u.send(_))},Hr:()=>u.close()}),m=(_,v,C)=>{_.listen(v,N=>{try{C(N)}catch(T){setTimeout(()=>{throw T},0)}})};return m(u,lo.EventType.OPEN,()=>{f||V(nt,`RPC '${e}' stream ${i} transport opened.`)}),m(u,lo.EventType.CLOSE,()=>{f||(f=!0,V(nt,`RPC '${e}' stream ${i} transport closed`),p.so())}),m(u,lo.EventType.ERROR,_=>{f||(f=!0,ea(nt,`RPC '${e}' stream ${i} transport errored:`,_),p.so(new K(O.UNAVAILABLE,"The operation could not be completed")))}),m(u,lo.EventType.MESSAGE,_=>{var v;if(!f){const C=_.data[0];Be(!!C);const N=C,T=N.error||((v=N[0])===null||v===void 0?void 0:v.error);if(T){V(nt,`RPC '${e}' stream ${i} received error:`,T);const D=T.status;let q=function(fe){const B=Le[fe];if(B!==void 0)return uv(B)}(D),ee=T.message;q===void 0&&(q=O.INTERNAL,ee="Unknown error status: "+D+" with message "+T.message),f=!0,p.so(new K(q,ee)),u.close()}else V(nt,`RPC '${e}' stream ${i} received:`,C),p.io(C)}}),m(a,ER.STAT_EVENT,_=>{_.stat===Jd.PROXY?V(nt,`RPC '${e}' stream ${i} detected buffering proxy`):_.stat===Jd.NOPROXY&&V(nt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{p.no()},0),p}}function xc(){return typeof document<"u"?document:null}/**
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
 */function Ev(t){return new CN(t,!0)}/**
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
 */class wv{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Ws=e,this.timerId=n,this._o=s,this.mo=i,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),i=Math.max(0,n-s);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class uk{constructor(e,n,s,i,r,o,a,c){this.Ws=e,this.bo=s,this.Po=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new wv(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(Tn(n.toString()),Tn("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Vo===n&&this.Ko(s,i)},s=>{e(()=>{const i=new K(O.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Go(i)})})}Ko(e,n){const s=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{s(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(i=>{s(()=>this.Go(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hk extends uk{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=NN(this.serializer,e),s=function(i){if(!("targetChange"in i))return Y.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?Y.min():r.readTime?Gs(r.readTime):Y.min()}(e);return this.listener.zo(n,s)}jo(e){const n={};n.database=_p(this.serializer),n.addTarget=function(i,r){let o;const a=r.target;return o=Kl(a)?{documents:kN(i,a)}:{query:DN(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=SN(i,r.resumeToken):r.snapshotVersion.compareTo(Y.min())>0&&(o.readTime=bN(i,r.snapshotVersion.toTimestamp())),o}(this.serializer,e);const s=PN(this.serializer,e);s&&(n.labels=s),this.Fo(n)}Wo(e){const n={};n.database=_p(this.serializer),n.removeTarget=e,this.Fo(n)}}/**
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
 */class fk extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.eu=!1}nu(){if(this.eu)throw new K(O.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.co(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(O.UNKNOWN,i.toString())})}fo(e,n,s,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.fo(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new K(O.UNKNOWN,r.toString())})}terminate(){this.eu=!0}}class dk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class pk{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=r,this._u.qr(o=>{s.enqueueAndForget(async()=>{zr(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=he(a);c.du.add(4),await Wr(c),c.mu.set("Unknown"),c.du.delete(4),await Za(c)}(this))})}),this.mu=new dk(s,i)}}async function Za(t){if(zr(t))for(const e of t.wu)await e(!0)}async function Wr(t){for(const e of t.wu)await e(!1)}function Tv(t,e){const n=he(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),Bh(n)?Vh(n):Si(n).No()&&Uh(n,e))}function Iv(t,e){const n=he(t),s=Si(n);n.fu.delete(e),s.No()&&Cv(n,e),n.fu.size===0&&(s.No()?s.$o():zr(n)&&n.mu.set("Unknown"))}function Uh(t,e){t.gu.Ot(e.targetId),Si(t).jo(e)}function Cv(t,e){t.gu.Ot(e),Si(t).Wo(e)}function Vh(t){t.gu=new EN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),Si(t).start(),t.mu.ou()}function Bh(t){return zr(t)&&!Si(t).xo()&&t.fu.size>0}function zr(t){return he(t).du.size===0}function bv(t){t.gu=void 0}async function gk(t){t.fu.forEach((e,n)=>{Uh(t,e)})}async function mk(t,e){bv(t),Bh(t)?(t.mu.au(e),Vh(t)):t.mu.set("Unknown")}async function _k(t,e,n){if(t.mu.set("Online"),e instanceof fv&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.fu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.fu.delete(o),s.gu.removeTarget(o))}(t,e)}catch(s){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await wp(t,s)}else if(e instanceof Co?t.gu.Kt(e):e instanceof hv?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(Y.min()))try{const s=await vv(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.gu.Xt(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.fu.get(c);l&&i.fu.set(c,l.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.fu.get(a);if(!c)return;i.fu.set(a,c.withResumeToken(ft.EMPTY_BYTE_STRING,c.snapshotVersion)),Cv(i,a);const l=new gs(c.target,a,1,c.sequenceNumber);Uh(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){V("RemoteStore","Failed to raise snapshot:",s),await wp(t,s)}}async function wp(t,e,n){if(!Kr(e))throw e;t.du.add(1),await Wr(t),t.mu.set("Offline"),n||(n=()=>vv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await Za(t)})}async function Tp(t,e){const n=he(t);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const s=zr(n);n.du.add(3),await Wr(n),s&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await Za(n)}async function yk(t,e){const n=he(t);e?(n.du.delete(2),await Za(n)):e||(n.du.add(2),await Wr(n),n.mu.set("Unknown"))}function Si(t){return t.yu||(t.yu=function(e,n,s){const i=he(e);return i.nu(),new hk(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Jr:gk.bind(null,t),Zr:mk.bind(null,t),zo:_k.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),Bh(t)?Vh(t):t.mu.set("Unknown")):(await t.yu.stop(),bv(t))})),t.yu}/**
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
 */class $h{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Un,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new $h(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sv(t,e){if(Tn("AsyncQueue",`${e}: ${t}`),Kr(t))return new K(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Qs{constructor(e){this.comparator=e?(n,s)=>e(n,s)||W.comparator(n.key,s.key):(n,s)=>W.comparator(n.key,s.key),this.keyedMap=Vi(),this.sortedSet=new Je(this.comparator)}static emptySet(e){return new Qs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Qs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Qs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Ip{constructor(){this.Iu=new Je(W.comparator)}track(e){const n=e.doc.key,s=this.Iu.get(n);s?e.type!==0&&s.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&s.type!==1?this.Iu=this.Iu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Iu=this.Iu.remove(n):e.type===1&&s.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):X():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,s)=>{e.push(s)}),e}}class ui{constructor(e,n,s,i,r,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ui(e,n,Qs.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ga(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class vk{constructor(){this.Eu=void 0,this.listeners=[]}}class Ek{constructor(){this.queries=new bi(e=>ev(e),Ga),this.onlineState="Unknown",this.Au=new Set}}async function Hh(t,e){const n=he(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new vk),i)try{r.Eu=await n.onListen(s)}catch(o){const a=Sv(o,`Initialization of query '${Wl(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Ru(n.onlineState),r.Eu&&e.vu(r.Eu)&&Kh(n)}async function jh(t,e){const n=he(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function wk(t,e){const n=he(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.vu(i)&&(s=!0);o.Eu=i}}s&&Kh(n)}function Tk(t,e,n){const s=he(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Kh(t){t.Au.forEach(e=>{e.next()})}class qh{constructor(e,n,s){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new ui(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.xu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=ui.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
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
 */class Av{constructor(e){this.key=e}}class Rv{constructor(e){this.key=e}}class Ik{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=le(),this.mutatedKeys=le(),this.Ku=tv(e),this.Gu=new Qs(this.Ku)}get Qu(){return this.Lu}zu(e,n){const s=n?n.ju:new Ip,i=n?n.Gu:this.Gu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const f=i.get(u),p=Qa(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),_=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let v=!1;f&&p?f.data.isEqual(p.data)?m!==_&&(s.track({type:3,doc:p}),v=!0):this.Wu(f,p)||(s.track({type:2,doc:p}),v=!0,(c&&this.Ku(p,c)>0||l&&this.Ku(p,l)<0)&&(a=!0)):!f&&p?(s.track({type:0,doc:p}),v=!0):f&&!p&&(s.track({type:1,doc:f}),v=!0,(c||l)&&(a=!0)),v&&(p?(o=o.add(p),r=_?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{Gu:o,ju:s,Mi:a,mutatedKeys:r}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const r=e.ju.Tu();r.sort((l,u)=>function(h,f){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return p(h)-p(f)}(l.type,u.type)||this.Ku(l.doc,u.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,r.length!==0||c?{snapshot:new ui(this.query,e.Gu,i,r,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Ip,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=le(),this.Gu.forEach(s=>{this.Zu(s.key)&&(this.Uu=this.Uu.add(s.key))});const n=[];return e.forEach(s=>{this.Uu.has(s)||n.push(new Rv(s))}),this.Uu.forEach(s=>{e.has(s)||n.push(new Av(s))}),n}Xu(e){this.Lu=e.Wi,this.Uu=le();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return ui.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class Ck{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class bk{constructor(e){this.key=e,this.ec=!1}}class Sk{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new bi(a=>ev(a),Ga),this.ic=new Map,this.rc=new Set,this.oc=new Je(W.comparator),this.uc=new Map,this.cc=new Mh,this.ac={},this.hc=new Map,this.lc=li.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function Ak(t,e){const n=xk(t);let s,i;const r=n.sc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.tc();else{const o=await sk(n.localStore,In(e));n.isPrimaryClient&&Tv(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await Rk(n,e,s,a==="current",o.resumeToken)}return i}async function Rk(t,e,n,s,i){t.dc=(h,f,p)=>async function(m,_,v,C){let N=_.view.zu(v);N.Mi&&(N=await yp(m.localStore,_.query,!1).then(({documents:q})=>_.view.zu(q,N)));const T=C&&C.targetChanges.get(_.targetId),D=_.view.applyChanges(N,m.isPrimaryClient,T);return bp(m,_.targetId,D.Yu),D.snapshot}(t,h,f,p);const r=await yp(t.localStore,e,!0),o=new Ik(e,r.Wi),a=o.zu(r.documents),c=qr.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,c);bp(t,n,l.Yu);const u=new Ck(e,n,o);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),l.snapshot}async function Nk(t,e){const n=he(t),s=n.sc.get(e),i=n.ic.get(s.targetId);if(i.length>1)return n.ic.set(s.targetId,i.filter(r=>!Ga(r,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Yl(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Iv(n.remoteStore,s.targetId),Xl(n,s.targetId)}).catch(Ah)):(Xl(n,s.targetId),await Yl(n.localStore,s.targetId,!0))}async function Nv(t,e){const n=he(t);try{const s=await tk(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.uc.get(r);o&&(Be(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?Be(o.ec):i.removedDocuments.size>0&&(Be(o.ec),o.ec=!1))}),await Dv(n,s,e)}catch(s){await Ah(s)}}function Cp(t,e,n){const s=he(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.sc.forEach((r,o)=>{const a=o.view.Ru(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=he(r);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Ru(o)&&(c=!0)}),c&&Kh(a)}(s.eventManager,e),i.length&&s.nc.zo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function kk(t,e,n){const s=he(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.uc.get(e),r=i&&i.key;if(r){let o=new Je(W.comparator);o=o.insert(r,ot.newNoDocument(r,Y.min()));const a=le().add(r),c=new Ja(Y.min(),new Map,new $e(_e),o,a);await Nv(s,c),s.oc=s.oc.remove(r),s.uc.delete(e),Wh(s)}else await Yl(s.localStore,e,!1).then(()=>Xl(s,e,n)).catch(Ah)}function Xl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc.wc(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(s=>{t.cc.containsKey(s)||kv(t,s)})}function kv(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(Iv(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Wh(t))}function bp(t,e,n){for(const s of n)s instanceof Av?(t.cc.addReference(s.key,e),Dk(t,s)):s instanceof Rv?(V("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||kv(t,s.key)):X()}function Dk(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(V("SyncEngine","New document in limbo: "+n),t.rc.add(s),Wh(t))}function Wh(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new W(De.fromString(e)),s=t.lc.next();t.uc.set(s,new bk(n)),t.oc=t.oc.insert(n,s),Tv(t.remoteStore,new gs(In(za(n.path)),s,2,Rh.ct))}}async function Dv(t,e,n){const s=he(t),i=[],r=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,c)=>{o.push(s.dc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=Fh.Di(c.targetId,l);r.push(u)}}))}),await Promise.all(o),s.nc.zo(i),await async function(a,c){const l=he(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>S.forEach(c,h=>S.forEach(h.Vi,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>S.forEach(h.Si,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!Kr(u))throw u;V("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.Li.get(h),p=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(p);l.Li=l.Li.insert(h,m)}}}(s.localStore,r))}async function Ok(t,e){const n=he(t);if(!n.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const s=await yv(n.localStore,e);n.currentUser=e,function(i,r){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new K(O.CANCELLED,r))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Dv(n,s.Qi)}}function Pk(t,e){const n=he(t),s=n.uc.get(e);if(s&&s.ec)return le().add(s.key);{let i=le();const r=n.ic.get(e);if(!r)return i;for(const o of r){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function xk(t){const e=he(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Nv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Pk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=kk.bind(null,e),e.nc.zo=wk.bind(null,e.eventManager),e.nc.wc=Tk.bind(null,e.eventManager),e}class Sp{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ev(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return ek(this.persistence,new JN,e.initialUser,this.serializer)}createPersistence(e){return new YN(Lh.Fs,this.serializer)}createSharedClientState(e){return new rk}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Mk{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Cp(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ok.bind(null,this.syncEngine),await yk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Ek}createDatastore(e){const n=Ev(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new lk(i));var i;return function(r,o,a,c){return new fk(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>Cp(this.syncEngine,a,0),o=Ep.D()?new Ep:new ok,new pk(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,c,l){const u=new Sk(s,i,r,o,a,c);return l&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=he(e);V("RemoteStore","RemoteStore shutting down."),n.du.add(5),await Wr(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
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
 */class zh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):Tn("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Lk{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=st.UNAUTHENTICATED,this.clientId=DR.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{V("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(V("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new K(O.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Un;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Sv(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Mc(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await yv(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ap(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Uk(t);V("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>Tp(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Tp(e.remoteStore,r)),t._onlineComponents=e}function Fk(t){return t.name==="FirebaseError"?t.code===O.FAILED_PRECONDITION||t.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Uk(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await Mc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Fk(n))throw n;ea("Error using user provided cache. Falling back to memory cache: "+n),await Mc(t,new Sp)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await Mc(t,new Sp);return t._offlineComponents}async function Vk(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await Ap(t,t._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await Ap(t,new Mk))),t._onlineComponents}async function ia(t){const e=await Vk(t),n=e.eventManager;return n.onListen=Ak.bind(null,e.syncEngine),n.onUnlisten=Nk.bind(null,e.syncEngine),n}function Bk(t,e,n={}){const s=new Un;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const l=new zh({next:h=>{r.enqueueAndForget(()=>jh(i,u));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new K(O.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new K(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new qh(za(o.path),l,{includeMetadataChanges:!0,xu:!0});return Hh(i,u)}(await ia(t),t.asyncQueue,e,n,s)),s.promise}function $k(t,e,n={}){const s=new Un;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const l=new zh({next:h=>{r.enqueueAndForget(()=>jh(i,u)),h.fromCache&&a.source==="server"?c.reject(new K(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new qh(o,l,{includeMetadataChanges:!0,xu:!0});return Hh(i,u)}(await ia(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */const Rp=new Map;/**
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
 */function Hk(t,e,n){if(!n)throw new K(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function jk(t,e,n,s){if(e===!0&&s===!0)throw new K(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Np(t){if(W.isDocumentKey(t))throw new K(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Kk(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function Vn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Kk(t);throw new K(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class kp{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new K(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,jk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Gh{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new kp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new K(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new K(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new kp(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new IR;switch(n.type){case"firstParty":return new AR(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new K(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Rp.get(e);n&&(V("ComponentProvider","Removing Datastore"),Rp.delete(e),n.terminate())}(this),Promise.resolve()}}function qk(t,e,n,s={}){var i;const r=(t=Vn(t,Gh))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&ea("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=st.MOCK_USER;else{o=YT(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new K(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new st(c)}t._authCredentials=new CR(new qy(o,a))}}/**
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
 */class Gn{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ys(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Gn(this.firestore,e,this._key)}}class Gr{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Gr(this.firestore,e,this._query)}}class Ys extends Gr{constructor(e,n,s){super(e,n,za(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Gn(this.firestore,null,new W(e))}withConverter(e){return new Ys(this.firestore,e,this._path)}}function Ov(t,e,...n){if(t=Is(t),Hk("collection","path",e),t instanceof Gh){const s=De.fromString(e,...n);return Np(s),new Ys(t,null,s)}{if(!(t instanceof Gn||t instanceof Ys))throw new K(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(De.fromString(e,...n));return Np(s),new Ys(t.firestore,null,s)}}/**
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
 */class Wk{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new wv(this,"async_queue_retry"),this.qc=()=>{const n=xc();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=xc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=xc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new Un;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!Kr(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(s=>{this.Mc=s,this.Fc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Tn("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Fc=!1,s))));return this.Nc=n,n}enqueueAfterDelay(e,n,s){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const i=$h.createAndSchedule(this,e,n,s,r=>this.Qc(r));return this.$c.push(i),i}Uc(){this.Mc&&X()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function Dp(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Ir extends Gh{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new Wk,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||xv(this),this._firestoreClient.terminate()}}function Pv(t,e){const n=typeof t=="object"?t:dm(),s=typeof t=="string"?t:e||"(default)",i=iC(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=zT("firestore");r&&qk(i,...r)}return i}function Qh(t){return t._firestoreClient||xv(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function xv(t){var e,n,s;const i=t._freezeSettings(),r=function(o,a,c,l){return new $R(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Lk(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
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
 */class ra{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ra(ft.fromBase64String(e))}catch(n){throw new K(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ra(ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Mv{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new vt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Lv{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}}const zk=new RegExp("[~\\*/\\[\\]]");function Gk(t,e,n){if(e.search(zk)>=0)throw Op(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Mv(...e.split("."))._internalPath}catch{throw Op(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Op(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new K(O.INVALID_ARGUMENT,a+t+c)}/**
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
 */class Fv{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Gn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Qk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Uv("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Qk extends Fv{data(){return super.data()}}function Uv(t,e){return typeof e=="string"?Gk(t,e):e instanceof Mv?e._internalPath:e._delegate._internalPath}/**
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
 */function Vv(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Yk{convertValue(e,n="none"){switch(Ts(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(oi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw X()}}convertObject(e,n){const s={};return qa(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Lv(Fe(e.latitude),Fe(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=zy(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Er(e));default:return null}}convertTimestamp(e){const n=Kn(e);return new mt(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=De.fromString(e);Be(_v(s));const i=new wr(s.get(1),s.get(3)),r=new W(s.popFirst(5));return i.isEqual(n)||Tn(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */class Bi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Bv extends Fv{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new bo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Uv("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class bo extends Bv{data(e={}){return super.data(e)}}class $v{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Bi(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new bo(this._firestore,this._userDataWriter,s.key,s,new Bi(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new bo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Bi(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new bo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Bi(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),l=r.indexOf(o.doc.key)),{type:Xk(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Xk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}/**
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
 */function Hv(t){t=Vn(t,Gn);const e=Vn(t.firestore,Ir);return Bk(Qh(e),t._key).then(n=>jv(e,t,n))}class Yh extends Yk{constructor(e){super(),this.firestore=e}convertBytes(e){return new ra(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Gn(this.firestore,null,n)}}function Jk(t){t=Vn(t,Gr);const e=Vn(t.firestore,Ir),n=Qh(e),s=new Yh(e);return Vv(t._query),$k(n,t._query).then(i=>new $v(e,s,t,i))}function Xh(t,...e){var n,s,i;t=Is(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Dp(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Dp(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,l,u;if(t instanceof Gn)l=Vn(t.firestore,Ir),u=za(t._key.path),c={next:h=>{e[o]&&e[o](jv(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Vn(t,Gr);l=Vn(h.firestore,Ir),u=h._query;const f=new Yh(l);c={next:p=>{e[o]&&e[o](new $v(l,f,h,p))},error:e[o+1],complete:e[o+2]},Vv(t._query)}return function(h,f,p,m){const _=new zh(m),v=new qh(f,_,p);return h.asyncQueue.enqueueAndForget(async()=>Hh(await ia(h),v)),()=>{_.yc(),h.asyncQueue.enqueueAndForget(async()=>jh(await ia(h),v))}}(Qh(l),u,a,c)}function jv(t,e,n){const s=n.docs.get(e._key),i=new Yh(t);return new Bv(t,i,e._key,s,new Bi(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Ci=n})(yi),on(new Gt("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new Ir(new bR(n.getProvider("auth-internal")),new NR(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new K(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wr(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),At(Zd,"3.10.1",t),At(Zd,"3.10.1","esm2017")})();/**
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
 */const Kv="firebasestorage.googleapis.com",Zk="storageBucket",eD=2*60*1e3,tD=10*60*1e3;/**
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
 */class hn extends bn{constructor(e,n,s=0){super(Lc(e),`Firebase Storage: ${n} (${Lc(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,hn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Lc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var un;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(un||(un={}));function Lc(t){return"storage/"+t}function nD(){const t="An unknown error occurred, please check the error payload for server response.";return new hn(un.UNKNOWN,t)}function sD(){return new hn(un.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function iD(){return new hn(un.CANCELED,"User canceled the upload/download.")}function rD(t){return new hn(un.INVALID_URL,"Invalid URL '"+t+"'.")}function oD(t){return new hn(un.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Pp(t){return new hn(un.INVALID_ARGUMENT,t)}function qv(){return new hn(un.APP_DELETED,"The Firebase app was deleted.")}function aD(t){return new hn(un.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class jt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=jt.makeFromUrl(e,n)}catch{return new jt(e,"")}if(s.path==="")return s;throw oD(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function l(D){D.path_=decodeURIComponent(D.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${i}/o${f}`,"i"),m={bucket:1,path:3},_=n===Kv?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",C=new RegExp(`^https?://${_}/${i}/${v}`,"i"),T=[{regex:a,indices:c,postModify:r},{regex:p,indices:m,postModify:l},{regex:C,indices:{bucket:1,path:2},postModify:l}];for(let D=0;D<T.length;D++){const q=T[D],ee=q.regex.exec(e);if(ee){const fe=ee[q.indices.bucket];let B=ee[q.indices.path];B||(B=""),s=new jt(fe,B),q.postModify(s);break}}if(s==null)throw rD(e);return s}}class cD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function lD(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...v){l||(l=!0,e.apply(null,v))}function h(v){i=setTimeout(()=>{i=null,t(p,c())},v)}function f(){r&&clearTimeout(r)}function p(v,...C){if(l){f();return}if(v){f(),u.call(null,v,...C);return}if(c()||o){f(),u.call(null,v,...C);return}s<64&&(s*=2);let T;a===1?(a=2,T=0):T=(s+Math.random())*1e3,h(T)}let m=!1;function _(v){m||(m=!0,f(),!l&&(i!==null?(v||(a=2),clearTimeout(i),h(0)):v||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,_(!0)},n),_}function uD(t){t(!1)}/**
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
 */function hD(t){return t!==void 0}function xp(t,e,n,s){if(s<e)throw Pp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Pp(`Invalid value for '${t}'. Expected ${n} or less.`)}function fD(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var oa;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(oa||(oa={}));/**
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
 */function dD(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
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
 */class pD{constructor(e,n,s,i,r,o,a,c,l,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,m)=>{this.resolve_=p,this.reject_=m,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new go(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===oa.NO_ERROR,c=r.getStatus();if(!a||dD(c,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===oa.ABORT;s(!1,new go(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new go(l,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());hD(c)?r(c):r()}catch(c){o(c)}else if(a!==null){const c=nD();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?qv():iD();o(c)}else{const c=sD();o(c)}};this.canceled_?n(!1,new go(!1,null,!0)):this.backoffId_=lD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&uD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class go{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function gD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function mD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function _D(t,e){e&&(t["X-Firebase-GMPID"]=e)}function yD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function vD(t,e,n,s,i,r,o=!0){const a=fD(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return _D(l,e),gD(l,n),mD(l,r),yD(l,s),new pD(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function ED(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function wD(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class aa{constructor(e,n){this._service=e,n instanceof jt?this._location=n:this._location=jt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new aa(e,n)}get root(){const e=new jt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return wD(this._location.path)}get storage(){return this._service}get parent(){const e=ED(this._location.path);if(e===null)return null;const n=new jt(this._location.bucket,e);return new aa(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw aD(e)}}function Mp(t,e){const n=e==null?void 0:e[Zk];return n==null?null:jt.makeFromBucketSpec(n,t)}class TD{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=Kv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=eD,this._maxUploadRetryTime=tD,this._requests=new Set,i!=null?this._bucket=jt.makeFromBucketSpec(i,this._host):this._bucket=Mp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=jt.makeFromBucketSpec(this._url,e):this._bucket=Mp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){xp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){xp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new aa(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new cD(qv());{const o=vD(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const Lp="@firebase/storage",Fp="0.11.2";/**
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
 */const ID="storage";function CD(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new TD(n,s,i,e,yi)}function bD(){on(new Gt(ID,CD,"PUBLIC").setMultipleInstances(!0)),At(Lp,Fp,""),At(Lp,Fp,"esm2017")}bD();const Fc=new WeakMap;function Wv(t,e){return Fc.has(e)||Fc.set(e,t||{f:{},r:{},s:{},u:{}}),Fc.get(e)}function SD(t,e,n,s){if(!t)return n;const[i,r]=zv(t);if(!i)return n;const o=Wv(void 0,s)[i]||{},a=e||r;return a&&a in o?o[a]:n}function AD(t,e,n,s){if(!t)return;const[i,r]=zv(t);if(!i)return;const o=Wv(void 0,s)[i],a=e||r;if(a)return n.then(c=>{o[a]=c}).catch(nn),a}function zv(t){return D0(t)||O0(t)?["f",t.path]:P0(t)?["r",t.toString()]:x0(t)?["s",t.toString()]:[]}const Uc=new WeakMap;function RD(t,e,n){const s=Mu();Uc.has(s)||Uc.set(s,new Map);const i=Uc.get(s),r=AD(e,n,t,s);return r&&i.set(r,t),r?()=>i.delete(r):nn}const ND={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function Jl(t,e,n,s){if(!k0(t))return[t,{}];const i=[{},{}],r=Object.keys(n).reduce((a,c)=>{const l=n[c];return a[l.path]=l.data(),a},{});function o(a,c,l,u){c=c||{};const[h,f]=u;Object.getOwnPropertyNames(a).forEach(p=>{const m=Object.getOwnPropertyDescriptor(a,p);m&&!m.enumerable&&Object.defineProperty(h,p,m)});for(const p in a){const m=a[p];if(m==null||m instanceof Date||m instanceof mt||m instanceof Lv)h[p]=m;else if(Fu(m)){const _=l+p;h[p]=_ in n?c[p]:m.path,f[_]=m.converter?m:m.withConverter(s.converter)}else if(Array.isArray(m)){h[p]=Array(m.length);for(let _=0;_<m.length;_++){const v=m[_];v&&v.path in r&&(h[p][_]=r[v.path])}o(m,c[p]||h[p],l+p+".",[h[p],f])}else Cs(m)?(h[p]={},o(m,c[p],l+p+".",[h[p],f])):h[p]=m}}return o(t,e,"",i),i}const Jh={reset:!1,wait:!0,maxRefDepth:2,converter:ND,snapshotOptions:{serverTimestamps:"estimate"}};function ca(t){for(const e in t)t[e].unsub()}function Zl(t,e,n,s,i,r,o,a,c){const[l,u]=Jl(s.data(t.snapshotOptions),Lu(e,n),i,t);r.set(e,n,l),eu(t,e,n,i,u,r,o,a,c)}function kD({ref:t,target:e,path:n,depth:s,resolve:i,reject:r,ops:o},a){const c=Object.create(null);let l=nn;return a.once?Hv(t).then(u=>{u.exists()?Zl(a,e,n,u,c,o,s,i,r):(o.set(e,n,null),i())}).catch(r):l=Xh(t,u=>{u.exists()?Zl(a,e,n,u,c,o,s,i,r):(o.set(e,n,null),i())},r),()=>{l(),ca(c)}}function eu(t,e,n,s,i,r,o,a,c){const l=Object.keys(i);if(Object.keys(s).filter(_=>l.indexOf(_)<0).forEach(_=>{s[_].unsub(),delete s[_]}),!l.length||++o>t.maxRefDepth)return a(n);let h=0;const f=l.length,p=Object.create(null);function m(_){_ in p&&++h>=f&&a(n)}l.forEach(_=>{const v=s[_],C=i[_],N=`${n}.${_}`;if(p[N]=!0,v)if(v.path!==C.path)v.unsub();else return;s[_]={data:()=>Lu(e,N),unsub:kD({ref:C,target:e,path:N,depth:o,ops:r,resolve:m.bind(null,N),reject:c},t),path:C.path}})}function DD(t,e,n,s,i,r){const o=Object.assign({},Jh,r),{snapshotListenOptions:a,snapshotOptions:c,wait:l,once:u}=o,h="value";let f=qt(l?[]:t.value);l||n.set(t,h,[]);const p=s;let m,_=nn;const v=[],C={added:({newIndex:T,doc:D})=>{v.splice(T,0,Object.create(null));const q=v[T],[ee,fe]=Jl(D.data(c),void 0,q,o);n.add(Pe(f),T,ee),eu(o,f,`${h}.${T}`,q,fe,n,0,s.bind(null,D),i)},modified:({oldIndex:T,newIndex:D,doc:q})=>{const ee=Pe(f),fe=v[T],B=ee[T],[we,ge]=Jl(q.data(c),B,fe,o);v.splice(D,0,fe),n.remove(ee,T),n.add(ee,D,we),eu(o,f,`${h}.${D}`,fe,ge,n,0,s,i)},removed:({oldIndex:T})=>{const D=Pe(f);n.remove(D,T),ca(v.splice(T,1)[0])}};function N(T){const D=T.docChanges(a);if(!m&&D.length){m=!0;let q=0;const ee=D.length,fe=Object.create(null);for(let B=0;B<ee;B++)fe[D[B].doc.id]=!0;s=B=>{B&&B.id in fe&&++q>=ee&&(l&&(n.set(t,h,Pe(f)),f=t),p(Pe(f)),s=nn)}}D.forEach(q=>{C[q.type](q)}),D.length||(l&&(n.set(t,h,Pe(f)),f=t),s(Pe(f)))}return u?Jk(e).then(N).catch(i):_=Xh(e,N,i),T=>{if(_(),T){const D=typeof T=="function"?T():[];n.set(t,h,D)}v.forEach(ca)}}function OD(t,e,n,s,i,r){const o=Object.assign({},Jh,r),a="value",c=Object.create(null);s=M0(s,()=>Lu(t,a));let l=nn;function u(h){h.exists()?Zl(o,t,a,h,c,n,0,s,i):(n.set(t,a,null),s(null))}return o.once?Hv(e).then(u).catch(i):l=Xh(e,u,i),h=>{if(l(),h){const f=typeof h=="function"?h():null;n.set(t,a,f)}ca(c)}}function PD(t,e){let n=nn;const s=Object.assign({},Jh,e),i=Pe(t),r=s.target||qt();L0()&&(s.once=!0);const o=SD(i,s.ssrKey,r.value,Mu());r.value=o;let c=!(Dm(i)?(o||[]).length>0:o!==void 0);const l=qt(!1),u=qt(),h=Cg(),f=lg();let p=nn;function m(){let C=Pe(t);const N=new Promise((T,D)=>{if(n(s.reset),!C)return n=nn,T(null);l.value=c,c=!0,C.converter||(C=C.withConverter(s.converter)),n=(Fu(C)?OD:DD)(r,C,xD,T,D,s)}).catch(T=>(h.value===N&&(u.value=T),Promise.reject(T))).finally(()=>{h.value===N&&(l.value=!1)});h.value=N}let _=nn;Ye(t)&&(_=$i(t,m)),m(),i&&(p=RD(h.value,i,s.ssrKey)),Ar()&&$g(()=>h.value),f&&IE(v);function v(C=s.reset){_(),p(),n(C)}return Object.defineProperties(r,{error:{get:()=>u},data:{get:()=>r},pending:{get:()=>l},promise:{get:()=>h},stop:{get:()=>v}})}const xD={set:(t,e,n)=>R0(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function MD(t,e){return PD(t,e)}function LD(t){return Pv(Mu(t))}function FD(t,{firebaseApp:e,modules:n=[]}){t.provide(km,e);for(const s of n)t.use(s.bind(null,e))}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ms=typeof window<"u";function UD(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const me=Object.assign;function Vc(t,e){const n={};for(const s in e){const i=e[s];n[s]=Qt(i)?i.map(t):t(i)}return n}const er=()=>{},Qt=Array.isArray,VD=/\/$/,BD=t=>t.replace(VD,"");function Bc(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),r=e.slice(c+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=KD(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function $D(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Up(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function HD(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&hi(e.matched[s],n.matched[i])&&Gv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function hi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Gv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!jD(t[n],e[n]))return!1;return!0}function jD(t,e){return Qt(t)?Vp(t,e):Qt(e)?Vp(e,t):t===e}function Vp(t,e){return Qt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function KD(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var Cr;(function(t){t.pop="pop",t.push="push"})(Cr||(Cr={}));var tr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(tr||(tr={}));function qD(t){if(!t)if(Ms){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),BD(t)}const WD=/^[^#]+#/;function zD(t,e){return t.replace(WD,"#")+e}function GD(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const ec=()=>({left:window.pageXOffset,top:window.pageYOffset});function QD(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=GD(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Bp(t,e){return(history.state?history.state.position-e:-1)+t}const tu=new Map;function YD(t,e){tu.set(t,e)}function XD(t){const e=tu.get(t);return tu.delete(t),e}let JD=()=>location.protocol+"//"+location.host;function Qv(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),Up(c,"")}return Up(n,t)+s+i}function ZD(t,e,n,s){let i=[],r=[],o=null;const a=({state:f})=>{const p=Qv(t,location),m=n.value,_=e.value;let v=0;if(f){if(n.value=p,e.value=f,o&&o===m){o=null;return}v=_?f.position-_.position:0}else s(p);i.forEach(C=>{C(n.value,m,{delta:v,type:Cr.pop,direction:v?v>0?tr.forward:tr.back:tr.unknown})})};function c(){o=n.value}function l(f){i.push(f);const p=()=>{const m=i.indexOf(f);m>-1&&i.splice(m,1)};return r.push(p),p}function u(){const{history:f}=window;f.state&&f.replaceState(me({},f.state,{scroll:ec()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function $p(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?ec():null}}function eO(t){const{history:e,location:n}=window,s={value:Qv(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:JD()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),i.value=l}catch(p){console.error(p),n[u?"replace":"assign"](f)}}function o(c,l){const u=me({},e.state,$p(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});r(c,u,!0),s.value=c}function a(c,l){const u=me({},i.value,e.state,{forward:c,scroll:ec()});r(u.current,u,!0);const h=me({},$p(s.value,c,null),{position:u.position+1},l);r(c,h,!1),s.value=c}return{location:s,state:i,push:a,replace:o}}function tO(t){t=qD(t);const e=eO(t),n=ZD(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=me({location:"",base:t,go:s,createHref:zD.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function nO(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),tO(t)}function sO(t){return typeof t=="string"||t&&typeof t=="object"}function Yv(t){return typeof t=="string"||typeof t=="symbol"}const Nn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Xv=Symbol("");var Hp;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Hp||(Hp={}));function fi(t,e){return me(new Error,{type:t,[Xv]:!0},e)}function dn(t,e){return t instanceof Error&&Xv in t&&(e==null||!!(t.type&e))}const jp="[^/]+?",iO={sensitive:!1,strict:!1,start:!0,end:!0},rO=/[.+*?^${}()[\]/\\]/g;function oO(t,e){const n=me({},iO,e),s=[];let i=n.start?"^":"";const r=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let h=0;h<l.length;h++){const f=l[h];let p=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(rO,"\\$&"),p+=40;else if(f.type===1){const{value:m,repeatable:_,optional:v,regexp:C}=f;r.push({name:m,repeatable:_,optional:v});const N=C||jp;if(N!==jp){p+=10;try{new RegExp(`(${N})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${m}" (${N}): `+D.message)}}let T=_?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;h||(T=v&&l.length<2?`(?:/${T})`:"/"+T),v&&(T+="?"),i+=T,p+=20,v&&(p+=-8),_&&(p+=-20),N===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",m=r[f-1];h[m.name]=p&&m.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:m,repeatable:_,optional:v}=p,C=m in l?l[m]:"";if(Qt(C)&&!_)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const N=Qt(C)?C.join("/"):C;if(!N)if(v)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=N}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:c}}function aO(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function cO(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=aO(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Kp(s))return 1;if(Kp(i))return-1}return i.length-s.length}function Kp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const lO={type:0,value:""},uO=/[a-zA-Z0-9_]/;function hO(t){if(!t)return[[]];if(t==="/")return[[lO]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,c,l="",u="";function h(){l&&(n===0?r.push({type:0,value:l}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:uO.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}function fO(t,e,n){const s=oO(hO(t.path),n),i=me(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function dO(t,e){const n=[],s=new Map;e=zp({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,f){const p=!f,m=pO(u);m.aliasOf=f&&f.record;const _=zp(e,u),v=[m];if("alias"in u){const T=typeof u.alias=="string"?[u.alias]:u.alias;for(const D of T)v.push(me({},m,{components:f?f.record.components:m.components,path:D,aliasOf:f?f.record:m}))}let C,N;for(const T of v){const{path:D}=T;if(h&&D[0]!=="/"){const q=h.record.path,ee=q[q.length-1]==="/"?"":"/";T.path=h.record.path+(D&&ee+D)}if(C=fO(T,h,_),f?f.alias.push(C):(N=N||C,N!==C&&N.alias.push(C),p&&u.name&&!Wp(C)&&o(u.name)),m.children){const q=m.children;for(let ee=0;ee<q.length;ee++)r(q[ee],C,f&&f.children[ee])}f=f||C,(C.record.components&&Object.keys(C.record.components).length||C.record.name||C.record.redirect)&&c(C)}return N?()=>{o(N)}:er}function o(u){if(Yv(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&cO(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Jv(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Wp(u)&&s.set(u.record.name,u)}function l(u,h){let f,p={},m,_;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw fi(1,{location:u});_=f.record.name,p=me(qp(h.params,f.keys.filter(N=>!N.optional).map(N=>N.name)),u.params&&qp(u.params,f.keys.map(N=>N.name))),m=f.stringify(p)}else if("path"in u)m=u.path,f=n.find(N=>N.re.test(m)),f&&(p=f.parse(m),_=f.record.name);else{if(f=h.name?s.get(h.name):n.find(N=>N.re.test(h.path)),!f)throw fi(1,{location:u,currentLocation:h});_=f.record.name,p=me({},h.params,u.params),m=f.stringify(p)}const v=[];let C=f;for(;C;)v.unshift(C.record),C=C.parent;return{name:_,path:m,params:p,matched:v,meta:mO(v)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function qp(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function pO(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:gO(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function gO(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Wp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function mO(t){return t.reduce((e,n)=>me(e,n.meta),{})}function zp(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Jv(t,e){return e.children.some(n=>n===t||Jv(t,n))}const Zv=/#/g,_O=/&/g,yO=/\//g,vO=/=/g,EO=/\?/g,eE=/\+/g,wO=/%5B/g,TO=/%5D/g,tE=/%5E/g,IO=/%60/g,nE=/%7B/g,CO=/%7C/g,sE=/%7D/g,bO=/%20/g;function Zh(t){return encodeURI(""+t).replace(CO,"|").replace(wO,"[").replace(TO,"]")}function SO(t){return Zh(t).replace(nE,"{").replace(sE,"}").replace(tE,"^")}function nu(t){return Zh(t).replace(eE,"%2B").replace(bO,"+").replace(Zv,"%23").replace(_O,"%26").replace(IO,"`").replace(nE,"{").replace(sE,"}").replace(tE,"^")}function AO(t){return nu(t).replace(vO,"%3D")}function RO(t){return Zh(t).replace(Zv,"%23").replace(EO,"%3F")}function NO(t){return t==null?"":RO(t).replace(yO,"%2F")}function la(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function kO(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(eE," "),o=r.indexOf("="),a=la(o<0?r:r.slice(0,o)),c=o<0?null:la(r.slice(o+1));if(a in e){let l=e[a];Qt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Gp(t){let e="";for(let n in t){const s=t[n];if(n=AO(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Qt(s)?s.map(r=>r&&nu(r)):[s&&nu(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function DO(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Qt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const OO=Symbol(""),Qp=Symbol(""),tc=Symbol(""),ef=Symbol(""),su=Symbol("");function xi(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Dn(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(fi(4,{from:n,to:e})):h instanceof Error?a(h):sO(h)?a(fi(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},l=t.call(s&&s.instances[i],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function $c(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(PO(a)){const l=(a.__vccOpts||a)[e];l&&i.push(Dn(l,n,s,r,o))}else{let c=a();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=UD(l)?l.default:l;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&Dn(f,n,s,r,o)()}))}}return i}function PO(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Yp(t){const e=St(tc),n=St(ef),s=bt(()=>e.resolve(Pe(t.to))),i=bt(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(hi.bind(null,u));if(f>-1)return f;const p=Xp(c[l-2]);return l>1&&Xp(u)===p&&h[h.length-1].path!==p?h.findIndex(hi.bind(null,c[l-2])):f}),r=bt(()=>i.value>-1&&FO(n.params,s.value.params)),o=bt(()=>i.value>-1&&i.value===n.matched.length-1&&Gv(n.params,s.value.params));function a(c={}){return LO(c)?e[Pe(t.replace)?"replace":"push"](Pe(t.to)).catch(er):Promise.resolve()}return{route:s,href:bt(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const xO=Ug({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Yp,setup(t,{slots:e}){const n=br(Yp(t)),{options:s}=St(tc),i=bt(()=>({[Jp(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Jp(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:em("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),MO=xO;function LO(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function FO(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Qt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Xp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Jp=(t,e,n)=>t??e??n,UO=Ug({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=St(su),i=bt(()=>t.route||s.value),r=St(Qp,0),o=bt(()=>{let l=Pe(r);const{matched:u}=i.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=bt(()=>i.value.matched[o.value]);yo(Qp,bt(()=>o.value+1)),yo(OO,a),yo(su,i);const c=qt();return $i(()=>[c.value,a.value,t.name],([l,u,h],[f,p,m])=>{u&&(u.instances[h]=l,p&&p!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!hi(u,p)||!f)&&(u.enterCallbacks[h]||[]).forEach(_=>_(l))},{flush:"post"}),()=>{const l=i.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return Zp(n.default,{Component:f,route:l});const p=h.props[u],m=p?p===!0?l.params:typeof p=="function"?p(l):p:null,v=em(f,me({},m,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Zp(n.default,{Component:v,route:l})||v}}});function Zp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const iE=UO;function VO(t){const e=dO(t.routes,t),n=t.parseQuery||kO,s=t.stringifyQuery||Gp,i=t.history,r=xi(),o=xi(),a=xi(),c=Cg(Nn);let l=Nn;Ms&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Vc.bind(null,w=>""+w),h=Vc.bind(null,NO),f=Vc.bind(null,la);function p(w,L){let x,$;return Yv(w)?(x=e.getRecordMatcher(w),$=L):$=w,e.addRoute($,x)}function m(w){const L=e.getRecordMatcher(w);L&&e.removeRoute(L)}function _(){return e.getRoutes().map(w=>w.record)}function v(w){return!!e.getRecordMatcher(w)}function C(w,L){if(L=me({},L||c.value),typeof w=="string"){const d=Bc(n,w,L.path),g=e.resolve({path:d.path},L),y=i.createHref(d.fullPath);return me(d,g,{params:f(g.params),hash:la(d.hash),redirectedFrom:void 0,href:y})}let x;if("path"in w)x=me({},w,{path:Bc(n,w.path,L.path).path});else{const d=me({},w.params);for(const g in d)d[g]==null&&delete d[g];x=me({},w,{params:h(w.params)}),L.params=h(L.params)}const $=e.resolve(x,L),oe=w.hash||"";$.params=u(f($.params));const ke=$D(s,me({},w,{hash:SO(oe),path:$.path})),Z=i.createHref(ke);return me({fullPath:ke,hash:oe,query:s===Gp?DO(w.query):w.query||{}},$,{redirectedFrom:void 0,href:Z})}function N(w){return typeof w=="string"?Bc(n,w,c.value.path):me({},w)}function T(w,L){if(l!==w)return fi(8,{from:L,to:w})}function D(w){return fe(w)}function q(w){return D(me(N(w),{replace:!0}))}function ee(w){const L=w.matched[w.matched.length-1];if(L&&L.redirect){const{redirect:x}=L;let $=typeof x=="function"?x(w):x;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=N($):{path:$},$.params={}),me({query:w.query,hash:w.hash,params:"path"in $?{}:w.params},$)}}function fe(w,L){const x=l=C(w),$=c.value,oe=w.state,ke=w.force,Z=w.replace===!0,d=ee(x);if(d)return fe(me(N(d),{state:typeof d=="object"?me({},oe,d.state):oe,force:ke,replace:Z}),L||x);const g=x;g.redirectedFrom=L;let y;return!ke&&HD(s,$,x)&&(y=fi(16,{to:g,from:$}),Qn($,$,!0,!1)),(y?Promise.resolve(y):we(g,$)).catch(E=>dn(E)?dn(E,2)?E:Lt(E):Te(E,g,$)).then(E=>{if(E){if(dn(E,2))return fe(me({replace:Z},N(E.to),{state:typeof E.to=="object"?me({},oe,E.to.state):oe,force:ke}),L||g)}else E=et(g,$,!0,Z,oe);return ge(g,$,E),E})}function B(w,L){const x=T(w,L);return x?Promise.reject(x):Promise.resolve()}function we(w,L){let x;const[$,oe,ke]=BO(w,L);x=$c($.reverse(),"beforeRouteLeave",w,L);for(const d of $)d.leaveGuards.forEach(g=>{x.push(Dn(g,w,L))});const Z=B.bind(null,w,L);return x.push(Z),Ds(x).then(()=>{x=[];for(const d of r.list())x.push(Dn(d,w,L));return x.push(Z),Ds(x)}).then(()=>{x=$c(oe,"beforeRouteUpdate",w,L);for(const d of oe)d.updateGuards.forEach(g=>{x.push(Dn(g,w,L))});return x.push(Z),Ds(x)}).then(()=>{x=[];for(const d of w.matched)if(d.beforeEnter&&!L.matched.includes(d))if(Qt(d.beforeEnter))for(const g of d.beforeEnter)x.push(Dn(g,w,L));else x.push(Dn(d.beforeEnter,w,L));return x.push(Z),Ds(x)}).then(()=>(w.matched.forEach(d=>d.enterCallbacks={}),x=$c(ke,"beforeRouteEnter",w,L),x.push(Z),Ds(x))).then(()=>{x=[];for(const d of o.list())x.push(Dn(d,w,L));return x.push(Z),Ds(x)}).catch(d=>dn(d,8)?d:Promise.reject(d))}function ge(w,L,x){for(const $ of a.list())$(w,L,x)}function et(w,L,x,$,oe){const ke=T(w,L);if(ke)return ke;const Z=L===Nn,d=Ms?history.state:{};x&&($||Z?i.replace(w.fullPath,me({scroll:Z&&d&&d.scroll},oe)):i.push(w.fullPath,oe)),c.value=w,Qn(w,L,x,Z),Lt()}let tt;function Mt(){tt||(tt=i.listen((w,L,x)=>{if(!Qr.listening)return;const $=C(w),oe=ee($);if(oe){fe(me(oe,{replace:!0}),$).catch(er);return}l=$;const ke=c.value;Ms&&YD(Bp(ke.fullPath,x.delta),ec()),we($,ke).catch(Z=>dn(Z,12)?Z:dn(Z,2)?(fe(Z.to,$).then(d=>{dn(d,20)&&!x.delta&&x.type===Cr.pop&&i.go(-1,!1)}).catch(er),Promise.reject()):(x.delta&&i.go(-x.delta,!1),Te(Z,$,ke))).then(Z=>{Z=Z||et($,ke,!1),Z&&(x.delta&&!dn(Z,8)?i.go(-x.delta,!1):x.type===Cr.pop&&dn(Z,20)&&i.go(-1,!1)),ge($,ke,Z)}).catch(er)}))}let fn=xi(),Ai=xi(),xe;function Te(w,L,x){Lt(w);const $=Ai.list();return $.length?$.forEach(oe=>oe(w,L,x)):console.error(w),Promise.reject(w)}function ye(){return xe&&c.value!==Nn?Promise.resolve():new Promise((w,L)=>{fn.add([w,L])})}function Lt(w){return xe||(xe=!w,Mt(),fn.list().forEach(([L,x])=>w?x(w):L()),fn.reset()),w}function Qn(w,L,x,$){const{scrollBehavior:oe}=t;if(!Ms||!oe)return Promise.resolve();const ke=!x&&XD(Bp(w.fullPath,0))||($||!x)&&history.state&&history.state.scroll||null;return Ng().then(()=>oe(w,L,ke)).then(Z=>Z&&QD(Z)).catch(Z=>Te(Z,w,L))}const Ft=w=>i.go(w);let _t;const Rs=new Set,Qr={currentRoute:c,listening:!0,addRoute:p,removeRoute:m,hasRoute:v,getRoutes:_,resolve:C,options:t,push:D,replace:q,go:Ft,back:()=>Ft(-1),forward:()=>Ft(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Ai.add,isReady:ye,install(w){const L=this;w.component("RouterLink",MO),w.component("RouterView",iE),w.config.globalProperties.$router=L,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>Pe(c)}),Ms&&!_t&&c.value===Nn&&(_t=!0,D(i.location).catch(oe=>{}));const x={};for(const oe in Nn)x[oe]=bt(()=>c.value[oe]);w.provide(tc,L),w.provide(ef,br(x)),w.provide(su,c);const $=w.unmount;Rs.add(w),w.unmount=function(){Rs.delete(w),Rs.size<1&&(l=Nn,tt&&tt(),tt=null,c.value=Nn,_t=!1,xe=!1),$()}}};return Qr}function Ds(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function BO(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(l=>hi(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>hi(l,c))||i.push(c))}return[n,s,i]}function $O(){return St(tc)}function tf(){return St(ef)}const HO=["onSubmit"],jO=["disabled"],KO={__name:"App",setup(t){const e=tf(),n=$O(),s=qt(""),i=()=>{n.push({name:"private-board",params:{id:s.value}})};return(r,o)=>(yn(),Zs(Ct,null,[gn("header",null,[gn("form",{onSubmit:kT(i,["prevent"])},[Ea(" Enter your bingo key: "),Rw(gn("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=a=>s.value=a)},null,512),[[AT,s.value]]),gn("button",{class:"btn",disabled:s.value==""},"team 1",8,jO)],40,HO)]),gn("section",null,[(yn(),bu(Pe(iE),{key:Pe(e).fullPath}))])],64))}};const rE=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},qO=["data-coord"],WO=["src"],zO={__name:"BoardTile",props:{tile:{type:Object,required:!0}},setup(t){const e=t,n=qt(null);return Sr(()=>{n.value=e.tile}),(s,i)=>n.value?(yn(),Zs("div",{key:0,class:"tile","data-coord":n.value.id},[gn("img",{src:n.value.img},null,8,WO)],8,qO)):Su("",!0)}},GO=rE(zO,[["__scopeId","data-v-82f2af94"]]),nf=fm({apiKey:"AIzaSyAnOiG77O1ukT9C2x8u1VbMLw7For9C_3w",authDomain:"bingo-50cec.firebaseapp.com",databaseURL:"https://bingo-50cec-default-rtdb.europe-west1.firebasedatabase.app",projectId:"bingo-50cec",storageBucket:"bingo-50cec.appspot.com",messagingSenderId:"866066986693",appId:"1:866066986693:web:de513df8434d232b0562ac",measurementId:"G-8F3EECYHQ0"}),QO=Pv(nf);Ov(QO,"todos");const YO={key:0,class:"bingo-board"},XO={__name:"BingoBoard",setup(t){CT(r=>({"8ad67dee":n.value,"7e346644":s.value}));const e=LD(nf),n=qt(7),s=qt(7),i=MD(Ov(e,"Tiles"));return(r,o)=>Pe(i)?(yn(),Zs("main",YO,[(yn(!0),Zs(Ct,null,kw(Pe(i),a=>(yn(),bu(GO,{key:a.id,tile:a},null,8,["tile"]))),128))])):Su("",!0)}},oE=rE(XO,[["__scopeId","data-v-81efc39b"]]),JO={key:0},ZO=gn("br",null,null,-1),eP={__name:"BoardView",setup(t){const e=tf(),n=bt(()=>e.params.id);return(s,i)=>Pe(n)?(yn(),Zs("p",JO,[Ea(" team "+dE(Pe(n)),1),ZO,pt(oE)])):Su("",!0)}},eg={__name:"BuildABoard",setup(t){const e=tf(),n=qt(null);return Sr(()=>{n.value=e.params.id}),(s,i)=>(yn(),Zs("p",null,[Ea("Build a board "),pt(oE)]))}},tP=VO({history:nO(),mode:"hash",routes:[{path:"/",name:"board-view",component:eg},{path:"/team/",name:"overview",component:eg},{path:"/team/:id",name:"private-board",param:!0,component:eP}]}),nc=PT(KO);nc.use(FT());nc.use(tP);nc.use(FD,{firebaseApp:nf});nc.mount("#app");
