(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function uf(t,e){const n=Object.create(null),i=t.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function Fl(t){if(ee(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Xe(i)?Bw(i):Fl(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(Xe(t))return t;if(Ue(t))return t}}const Uw=/;(?![^(]*\))/g,Vw=/:([^]+)/,$w=/\/\*.*?\*\//gs;function Bw(t){const e={};return t.replace($w,"").split(Uw).forEach(n=>{if(n){const i=n.split(Vw);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Zr(t){let e="";if(Xe(t))e=t;else if(ee(t))for(let n=0;n<t.length;n++){const i=Zr(t[n]);i&&(e+=i+" ")}else if(Ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const jw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zw=uf(jw);function Gy(t){return!!t||t===""}const _n=t=>Xe(t)?t:t==null?"":ee(t)||Ue(t)&&(t.toString===Jy||!ne(t.toString))?JSON.stringify(t,Yy,2):String(t),Yy=(t,e)=>e&&e.__v_isRef?Yy(t,e.value):Ir(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:Qy(e)?{[`Set(${e.size})`]:[...e.values()]}:Ue(e)&&!ee(e)&&!Zy(e)?String(e):e,ke={},Tr=[],an=()=>{},Hw=()=>!1,Kw=/^on[^a-z]/,Ul=t=>Kw.test(t),hf=t=>t.startsWith("onUpdate:"),St=Object.assign,ff=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ww=Object.prototype.hasOwnProperty,de=(t,e)=>Ww.call(t,e),ee=Array.isArray,Ir=t=>Vl(t)==="[object Map]",Qy=t=>Vl(t)==="[object Set]",ne=t=>typeof t=="function",Xe=t=>typeof t=="string",df=t=>typeof t=="symbol",Ue=t=>t!==null&&typeof t=="object",Xy=t=>Ue(t)&&ne(t.then)&&ne(t.catch),Jy=Object.prototype.toString,Vl=t=>Jy.call(t),qw=t=>Vl(t).slice(8,-1),Zy=t=>Vl(t)==="[object Object]",pf=t=>Xe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Oa=uf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$l=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Gw=/-(\w)/g,In=$l(t=>t.replace(Gw,(e,n)=>n?n.toUpperCase():"")),Yw=/\B([A-Z])/g,es=$l(t=>t.replace(Yw,"-$1").toLowerCase()),Bl=$l(t=>t.charAt(0).toUpperCase()+t.slice(1)),Qc=$l(t=>t?`on${Bl(t)}`:""),Xs=(t,e)=>!Object.is(t,e),Da=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ka=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Fu=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ap;const Qw=()=>Ap||(Ap=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ft;class e_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ft,!e&&Ft&&(this.index=(Ft.scopes||(Ft.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ft;try{return Ft=this,e()}finally{Ft=n}}}on(){Ft=this}off(){Ft=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Xw(t){return new e_(t)}function Jw(t,e=Ft){e&&e.active&&e.effects.push(t)}function t_(){return Ft}function Zw(t){Ft&&Ft.cleanups.push(t)}const mf=t=>{const e=new Set(t);return e.w=0,e.n=0,e},n_=t=>(t.w&hi)>0,i_=t=>(t.n&hi)>0,eT=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=hi},tT=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];n_(r)&&!i_(r)?r.delete(t):e[n++]=r,r.w&=~hi,r.n&=~hi}e.length=n}},Uu=new WeakMap;let Ss=0,hi=1;const Vu=30;let Jt;const Bi=Symbol(""),$u=Symbol("");class gf{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Jw(this,i)}run(){if(!this.active)return this.fn();let e=Jt,n=si;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Jt,Jt=this,si=!0,hi=1<<++Ss,Ss<=Vu?eT(this):kp(this),this.fn()}finally{Ss<=Vu&&tT(this),hi=1<<--Ss,Jt=this.parent,si=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Jt===this?this.deferStop=!0:this.active&&(kp(this),this.onStop&&this.onStop(),this.active=!1)}}function kp(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let si=!0;const r_=[];function ts(){r_.push(si),si=!1}function ns(){const t=r_.pop();si=t===void 0?!0:t}function Pt(t,e,n){if(si&&Jt){let i=Uu.get(t);i||Uu.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=mf()),s_(r)}}function s_(t,e){let n=!1;Ss<=Vu?i_(t)||(t.n|=hi,n=!n_(t)):n=!t.has(Jt),n&&(t.add(Jt),Jt.deps.push(t))}function $n(t,e,n,i,r,s){const o=Uu.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ee(t)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ee(t)?pf(n)&&a.push(o.get("length")):(a.push(o.get(Bi)),Ir(t)&&a.push(o.get($u)));break;case"delete":ee(t)||(a.push(o.get(Bi)),Ir(t)&&a.push(o.get($u)));break;case"set":Ir(t)&&a.push(o.get(Bi));break}if(a.length===1)a[0]&&Bu(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Bu(mf(l))}}function Bu(t,e){const n=ee(t)?t:[...t];for(const i of n)i.computed&&Rp(i);for(const i of n)i.computed||Rp(i)}function Rp(t,e){(t!==Jt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const nT=uf("__proto__,__v_isRef,__isVue"),o_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(df)),iT=yf(),rT=yf(!1,!0),sT=yf(!0),Np=oT();function oT(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=ye(this);for(let s=0,o=this.length;s<o;s++)Pt(i,"get",s+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(ye)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ts();const i=ye(this)[e].apply(this,n);return ns(),i}}),t}function aT(t){const e=ye(this);return Pt(e,"has",t),e.hasOwnProperty(t)}function yf(t=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(t?e?TT:h_:e?u_:c_).get(i))return i;const o=ee(i);if(!t){if(o&&de(Np,r))return Reflect.get(Np,r,s);if(r==="hasOwnProperty")return aT}const a=Reflect.get(i,r,s);return(df(r)?o_.has(r):nT(r))||(t||Pt(i,"get",r),e)?a:ct(a)?o&&pf(r)?a:a.value:Ue(a)?t?f_(a):ko(a):a}}const lT=a_(),cT=a_(!0);function a_(t=!1){return function(n,i,r,s){let o=n[i];if(Mr(o)&&ct(o)&&!ct(r))return!1;if(!t&&(!Wa(r)&&!Mr(r)&&(o=ye(o),r=ye(r)),!ee(n)&&ct(o)&&!ct(r)))return o.value=r,!0;const a=ee(n)&&pf(i)?Number(i)<n.length:de(n,i),l=Reflect.set(n,i,r,s);return n===ye(s)&&(a?Xs(r,o)&&$n(n,"set",i,r):$n(n,"add",i,r)),l}}function uT(t,e){const n=de(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&$n(t,"delete",e,void 0),i}function hT(t,e){const n=Reflect.has(t,e);return(!df(e)||!o_.has(e))&&Pt(t,"has",e),n}function fT(t){return Pt(t,"iterate",ee(t)?"length":Bi),Reflect.ownKeys(t)}const l_={get:iT,set:lT,deleteProperty:uT,has:hT,ownKeys:fT},dT={get:sT,set(t,e){return!0},deleteProperty(t,e){return!0}},pT=St({},l_,{get:rT,set:cT}),_f=t=>t,jl=t=>Reflect.getPrototypeOf(t);function ra(t,e,n=!1,i=!1){t=t.__v_raw;const r=ye(t),s=ye(e);n||(e!==s&&Pt(r,"get",e),Pt(r,"get",s));const{has:o}=jl(r),a=i?_f:n?wf:Js;if(o.call(r,e))return a(t.get(e));if(o.call(r,s))return a(t.get(s));t!==r&&t.get(e)}function sa(t,e=!1){const n=this.__v_raw,i=ye(n),r=ye(t);return e||(t!==r&&Pt(i,"has",t),Pt(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function oa(t,e=!1){return t=t.__v_raw,!e&&Pt(ye(t),"iterate",Bi),Reflect.get(t,"size",t)}function xp(t){t=ye(t);const e=ye(this);return jl(e).has.call(e,t)||(e.add(t),$n(e,"add",t,t)),this}function Op(t,e){e=ye(e);const n=ye(this),{has:i,get:r}=jl(n);let s=i.call(n,t);s||(t=ye(t),s=i.call(n,t));const o=r.call(n,t);return n.set(t,e),s?Xs(e,o)&&$n(n,"set",t,e):$n(n,"add",t,e),this}function Dp(t){const e=ye(this),{has:n,get:i}=jl(e);let r=n.call(e,t);r||(t=ye(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&$n(e,"delete",t,void 0),s}function Pp(){const t=ye(this),e=t.size!==0,n=t.clear();return e&&$n(t,"clear",void 0,void 0),n}function aa(t,e){return function(i,r){const s=this,o=s.__v_raw,a=ye(o),l=e?_f:t?wf:Js;return!t&&Pt(a,"iterate",Bi),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function la(t,e,n){return function(...i){const r=this.__v_raw,s=ye(r),o=Ir(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?_f:e?wf:Js;return!e&&Pt(s,"iterate",l?$u:Bi),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Zn(t){return function(...e){return t==="delete"?!1:this}}function mT(){const t={get(s){return ra(this,s)},get size(){return oa(this)},has:sa,add:xp,set:Op,delete:Dp,clear:Pp,forEach:aa(!1,!1)},e={get(s){return ra(this,s,!1,!0)},get size(){return oa(this)},has:sa,add:xp,set:Op,delete:Dp,clear:Pp,forEach:aa(!1,!0)},n={get(s){return ra(this,s,!0)},get size(){return oa(this,!0)},has(s){return sa.call(this,s,!0)},add:Zn("add"),set:Zn("set"),delete:Zn("delete"),clear:Zn("clear"),forEach:aa(!0,!1)},i={get(s){return ra(this,s,!0,!0)},get size(){return oa(this,!0)},has(s){return sa.call(this,s,!0)},add:Zn("add"),set:Zn("set"),delete:Zn("delete"),clear:Zn("clear"),forEach:aa(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=la(s,!1,!1),n[s]=la(s,!0,!1),e[s]=la(s,!1,!0),i[s]=la(s,!0,!0)}),[t,n,e,i]}const[gT,yT,_T,vT]=mT();function vf(t,e){const n=e?t?vT:_T:t?yT:gT;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(de(n,r)&&r in i?n:i,r,s)}const bT={get:vf(!1,!1)},ET={get:vf(!1,!0)},wT={get:vf(!0,!1)},c_=new WeakMap,u_=new WeakMap,h_=new WeakMap,TT=new WeakMap;function IT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function CT(t){return t.__v_skip||!Object.isExtensible(t)?0:IT(qw(t))}function ko(t){return Mr(t)?t:bf(t,!1,l_,bT,c_)}function ST(t){return bf(t,!1,pT,ET,u_)}function f_(t){return bf(t,!0,dT,wT,h_)}function bf(t,e,n,i,r){if(!Ue(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=CT(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function Cr(t){return Mr(t)?Cr(t.__v_raw):!!(t&&t.__v_isReactive)}function Mr(t){return!!(t&&t.__v_isReadonly)}function Wa(t){return!!(t&&t.__v_isShallow)}function d_(t){return Cr(t)||Mr(t)}function ye(t){const e=t&&t.__v_raw;return e?ye(e):t}function Ef(t){return Ka(t,"__v_skip",!0),t}const Js=t=>Ue(t)?ko(t):t,wf=t=>Ue(t)?f_(t):t;function p_(t){si&&Jt&&(t=ye(t),s_(t.dep||(t.dep=mf())))}function m_(t,e){t=ye(t);const n=t.dep;n&&Bu(n)}function ct(t){return!!(t&&t.__v_isRef===!0)}function xt(t){return y_(t,!1)}function g_(t){return y_(t,!0)}function y_(t,e){return ct(t)?t:new AT(t,e)}class AT{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ye(e),this._value=n?e:Js(e)}get value(){return p_(this),this._value}set value(e){const n=this.__v_isShallow||Wa(e)||Mr(e);e=n?e:ye(e),Xs(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Js(e),m_(this))}}function L(t){return ct(t)?t.value:t}const kT={get:(t,e,n)=>L(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return ct(r)&&!ct(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function __(t){return Cr(t)?t:new Proxy(t,kT)}var v_;class RT{constructor(e,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[v_]=!1,this._dirty=!0,this.effect=new gf(e,()=>{this._dirty||(this._dirty=!0,m_(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=ye(this);return p_(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}v_="__v_isReadonly";function NT(t,e,n=!1){let i,r;const s=ne(t);return s?(i=t,r=an):(i=t.get,r=t.set),new RT(i,r,s||!r,n)}function oi(t,e,n,i){let r;try{r=i?t(...i):t()}catch(s){zl(s,e,n)}return r}function ln(t,e,n,i){if(ne(t)){const s=oi(t,e,n,i);return s&&Xy(s)&&s.catch(o=>{zl(o,e,n)}),s}const r=[];for(let s=0;s<t.length;s++)r.push(ln(t[s],e,n,i));return r}function zl(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){oi(l,null,10,[t,o,a]);return}}xT(t,n,r,i)}function xT(t,e,n,i=!0){console.error(t)}let Zs=!1,ju=!1;const _t=[];let gn=0;const Sr=[];let Dn=null,xi=0;const b_=Promise.resolve();let Tf=null;function E_(t){const e=Tf||b_;return t?e.then(this?t.bind(this):t):e}function OT(t){let e=gn+1,n=_t.length;for(;e<n;){const i=e+n>>>1;eo(_t[i])<t?e=i+1:n=i}return e}function If(t){(!_t.length||!_t.includes(t,Zs&&t.allowRecurse?gn+1:gn))&&(t.id==null?_t.push(t):_t.splice(OT(t.id),0,t),w_())}function w_(){!Zs&&!ju&&(ju=!0,Tf=b_.then(I_))}function DT(t){const e=_t.indexOf(t);e>gn&&_t.splice(e,1)}function PT(t){ee(t)?Sr.push(...t):(!Dn||!Dn.includes(t,t.allowRecurse?xi+1:xi))&&Sr.push(t),w_()}function Mp(t,e=Zs?gn+1:0){for(;e<_t.length;e++){const n=_t[e];n&&n.pre&&(_t.splice(e,1),e--,n())}}function T_(t){if(Sr.length){const e=[...new Set(Sr)];if(Sr.length=0,Dn){Dn.push(...e);return}for(Dn=e,Dn.sort((n,i)=>eo(n)-eo(i)),xi=0;xi<Dn.length;xi++)Dn[xi]();Dn=null,xi=0}}const eo=t=>t.id==null?1/0:t.id,MT=(t,e)=>{const n=eo(t)-eo(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function I_(t){ju=!1,Zs=!0,_t.sort(MT);const e=an;try{for(gn=0;gn<_t.length;gn++){const n=_t[gn];n&&n.active!==!1&&oi(n,null,14)}}finally{gn=0,_t.length=0,T_(),Zs=!1,Tf=null,(_t.length||Sr.length)&&I_()}}function LT(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||ke;let r=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=i[u]||ke;f&&(r=n.map(d=>Xe(d)?d.trim():d)),h&&(r=n.map(Fu))}let a,l=i[a=Qc(e)]||i[a=Qc(In(e))];!l&&s&&(l=i[a=Qc(es(e))]),l&&ln(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ln(c,t,6,r)}}function C_(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!ne(t)){const l=c=>{const u=C_(c,e,!0);u&&(a=!0,St(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(Ue(t)&&i.set(t,null),null):(ee(s)?s.forEach(l=>o[l]=null):St(o,s),Ue(t)&&i.set(t,o),o)}function Hl(t,e){return!t||!Ul(e)?!1:(e=e.slice(2).replace(/Once$/,""),de(t,e[0].toLowerCase()+e.slice(1))||de(t,es(e))||de(t,e))}let Vt=null,Kl=null;function qa(t){const e=Vt;return Vt=t,Kl=t&&t.type.__scopeId||null,e}function Cf(t){Kl=t}function Sf(){Kl=null}function FT(t,e=Vt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Hp(-1);const s=qa(e);let o;try{o=t(...r)}finally{qa(s),i._d&&Hp(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Xc(t){const{type:e,vnode:n,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:m,inheritAttrs:y}=t;let b,_;const v=qa(t);try{if(n.shapeFlag&4){const I=r||i;b=mn(u.call(I,I,h,s,d,f,m)),_=l}else{const I=e;b=mn(I.length>1?I(s,{attrs:l,slots:a,emit:c}):I(s,null)),_=e.props?l:UT(l)}}catch(I){Ps.length=0,zl(I,t,1),b=st(Wi)}let E=b;if(_&&y!==!1){const I=Object.keys(_),{shapeFlag:V}=E;I.length&&V&7&&(o&&I.some(hf)&&(_=VT(_,o)),E=Lr(E,_))}return n.dirs&&(E=Lr(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),b=E,qa(v),b}const UT=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ul(n))&&((e||(e={}))[n]=t[n]);return e},VT=(t,e)=>{const n={};for(const i in t)(!hf(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function $T(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Lp(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!Hl(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Lp(i,o,c):!0:!!o;return!1}function Lp(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!Hl(n,s))return!0}return!1}function BT({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const jT=t=>t.__isSuspense;function zT(t,e){e&&e.pendingBranch?ee(t)?e.effects.push(...t):e.effects.push(t):PT(t)}function Pa(t,e){if(ze){let n=ze.provides;const i=ze.parent&&ze.parent.provides;i===n&&(n=ze.provides=Object.create(i)),n[t]=e}}function $t(t,e,n=!1){const i=ze||Vt;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ne(e)?e.call(i.proxy):e}}function HT(t,e){return Af(t,null,{flush:"post"})}const ca={};function Ar(t,e,n){return Af(t,e,n)}function Af(t,e,{immediate:n,deep:i,flush:r,onTrack:s,onTrigger:o}=ke){const a=t_()===(ze==null?void 0:ze.scope)?ze:null;let l,c=!1,u=!1;if(ct(t)?(l=()=>t.value,c=Wa(t)):Cr(t)?(l=()=>t,i=!0):ee(t)?(u=!0,c=t.some(E=>Cr(E)||Wa(E)),l=()=>t.map(E=>{if(ct(E))return E.value;if(Cr(E))return Di(E);if(ne(E))return oi(E,a,2)})):ne(t)?e?l=()=>oi(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),ln(t,a,3,[f])}:l=an,e&&i){const E=l;l=()=>Di(E())}let h,f=E=>{h=_.onStop=()=>{oi(E,a,4)}},d;if(no)if(f=an,e?n&&ln(e,a,3,[l(),u?[]:void 0,f]):l(),r==="sync"){const E=MI();d=E.__watcherHandles||(E.__watcherHandles=[])}else return an;let m=u?new Array(t.length).fill(ca):ca;const y=()=>{if(_.active)if(e){const E=_.run();(i||c||(u?E.some((I,V)=>Xs(I,m[V])):Xs(E,m)))&&(h&&h(),ln(e,a,3,[E,m===ca?void 0:u&&m[0]===ca?[]:m,f]),m=E)}else _.run()};y.allowRecurse=!!e;let b;r==="sync"?b=y:r==="post"?b=()=>Rt(y,a&&a.suspense):(y.pre=!0,a&&(y.id=a.uid),b=()=>If(y));const _=new gf(l,b);e?n?y():m=_.run():r==="post"?Rt(_.run.bind(_),a&&a.suspense):_.run();const v=()=>{_.stop(),a&&a.scope&&ff(a.scope.effects,_)};return d&&d.push(v),v}function KT(t,e,n){const i=this.proxy,r=Xe(t)?t.includes(".")?S_(i,t):()=>i[t]:t.bind(i,i);let s;ne(e)?s=e:(s=e.handler,n=e);const o=ze;Fr(this);const a=Af(r,s.bind(i),n);return o?Fr(o):ji(),a}function S_(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function Di(t,e){if(!Ue(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ct(t))Di(t.value,e);else if(ee(t))for(let n=0;n<t.length;n++)Di(t[n],e);else if(Qy(t)||Ir(t))t.forEach(n=>{Di(n,e)});else if(Zy(t))for(const n in t)Di(t[n],e);return t}function Ro(t){return ne(t)?{setup:t,name:t.name}:t}const Ma=t=>!!t.type.__asyncLoader,A_=t=>t.type.__isKeepAlive;function WT(t,e){k_(t,"a",e)}function qT(t,e){k_(t,"da",e)}function k_(t,e,n=ze){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Wl(e,i,n),n){let r=n.parent;for(;r&&r.parent;)A_(r.parent.vnode)&&GT(i,e,n,r),r=r.parent}}function GT(t,e,n,i){const r=Wl(e,t,i,!0);kf(()=>{ff(i[e],r)},n)}function Wl(t,e,n=ze,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ts(),Fr(n);const a=ln(e,n,t,o);return ji(),ns(),a});return i?r.unshift(s):r.push(s),s}}const Gn=t=>(e,n=ze)=>(!no||t==="sp")&&Wl(t,(...i)=>e(...i),n),YT=Gn("bm"),R_=Gn("m"),QT=Gn("bu"),XT=Gn("u"),JT=Gn("bum"),kf=Gn("um"),N_=Gn("sp"),ZT=Gn("rtg"),eI=Gn("rtc");function tI(t,e=ze){Wl("ec",t,e)}function ql(t,e){const n=Vt;if(n===null)return t;const i=Jl(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=ke]=e[s];o&&(ne(o)&&(o={mounted:o,updated:o}),o.deep&&Di(a),r.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Si(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(ts(),ln(l,n,8,[t.el,a,t,e]),ns())}}const x_="components";function nI(t,e){return rI(x_,t,!0,e)||t}const iI=Symbol();function rI(t,e,n=!0,i=!1){const r=Vt||ze;if(r){const s=r.type;if(t===x_){const a=DI(s,!1);if(a&&(a===e||a===In(e)||a===Bl(In(e))))return s}const o=Fp(r[t]||s[t],e)||Fp(r.appContext[t],e);return!o&&i?s:o}}function Fp(t,e){return t&&(t[e]||t[In(e)]||t[Bl(In(e))])}function Gl(t,e,n,i){let r;const s=n&&n[i];if(ee(t)||Xe(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(Ue(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,s&&s[a])}}else r=[];return n&&(n[i]=r),r}const zu=t=>t?j_(t)?Jl(t)||t.proxy:zu(t.parent):null,Ds=St(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>zu(t.parent),$root:t=>zu(t.root),$emit:t=>t.emit,$options:t=>Rf(t),$forceUpdate:t=>t.f||(t.f=()=>If(t.update)),$nextTick:t=>t.n||(t.n=E_.bind(t.proxy)),$watch:t=>KT.bind(t)}),Jc=(t,e)=>t!==ke&&!t.__isScriptSetup&&de(t,e),sI={get({_:t},e){const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Jc(i,e))return o[e]=1,i[e];if(r!==ke&&de(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&de(c,e))return o[e]=3,s[e];if(n!==ke&&de(n,e))return o[e]=4,n[e];Hu&&(o[e]=0)}}const u=Ds[e];let h,f;if(u)return e==="$attrs"&&Pt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ke&&de(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,de(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return Jc(r,e)?(r[e]=n,!0):i!==ke&&de(i,e)?(i[e]=n,!0):de(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==ke&&de(t,o)||Jc(e,o)||(a=s[0])&&de(a,o)||de(i,o)||de(Ds,o)||de(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:de(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Hu=!0;function oI(t){const e=Rf(t),n=t.proxy,i=t.ctx;Hu=!1,e.beforeCreate&&Up(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:m,activated:y,deactivated:b,beforeDestroy:_,beforeUnmount:v,destroyed:E,unmounted:I,render:V,renderTracked:X,renderTriggered:re,errorCaptured:ge,serverPrefetch:je,expose:ft,inheritAttrs:Jn,components:fn,directives:cr,filters:Ii}=e;if(c&&aI(c,i,null,t.appContext.config.unwrapInjectedRef),o)for(const Ce in o){const we=o[Ce];ne(we)&&(i[Ce]=we.bind(n))}if(r){const Ce=r.call(n,n);Ue(Ce)&&(t.data=ko(Ce))}if(Hu=!0,s)for(const Ce in s){const we=s[Ce],Yt=ne(we)?we.bind(n,n):ne(we.get)?we.get.bind(n,n):an,Ci=!ne(we)&&ne(we.set)?we.set.bind(n):an,Qt=ie({get:Yt,set:Ci});Object.defineProperty(i,Ce,{enumerable:!0,configurable:!0,get:()=>Qt.value,set:At=>Qt.value=At})}if(a)for(const Ce in a)O_(a[Ce],i,n,Ce);if(l){const Ce=ne(l)?l.call(n):l;Reflect.ownKeys(Ce).forEach(we=>{Pa(we,Ce[we])})}u&&Up(u,t,"c");function He(Ce,we){ee(we)?we.forEach(Yt=>Ce(Yt.bind(n))):we&&Ce(we.bind(n))}if(He(YT,h),He(R_,f),He(QT,d),He(XT,m),He(WT,y),He(qT,b),He(tI,ge),He(eI,X),He(ZT,re),He(JT,v),He(kf,I),He(N_,je),ee(ft))if(ft.length){const Ce=t.exposed||(t.exposed={});ft.forEach(we=>{Object.defineProperty(Ce,we,{get:()=>n[we],set:Yt=>n[we]=Yt})})}else t.exposed||(t.exposed={});V&&t.render===an&&(t.render=V),Jn!=null&&(t.inheritAttrs=Jn),fn&&(t.components=fn),cr&&(t.directives=cr)}function aI(t,e,n=an,i=!1){ee(t)&&(t=Ku(t));for(const r in t){const s=t[r];let o;Ue(s)?"default"in s?o=$t(s.from||r,s.default,!0):o=$t(s.from||r):o=$t(s),ct(o)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Up(t,e,n){ln(ee(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function O_(t,e,n,i){const r=i.includes(".")?S_(n,i):()=>n[i];if(Xe(t)){const s=e[t];ne(s)&&Ar(r,s)}else if(ne(t))Ar(r,t.bind(n));else if(Ue(t))if(ee(t))t.forEach(s=>O_(s,e,n,i));else{const s=ne(t.handler)?t.handler.bind(n):e[t.handler];ne(s)&&Ar(r,s,t)}}function Rf(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Ga(l,c,o,!0)),Ga(l,e,o)),Ue(e)&&s.set(e,l),l}function Ga(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Ga(t,s,n,!0),r&&r.forEach(o=>Ga(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=lI[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const lI={data:Vp,props:ki,emits:ki,methods:ki,computed:ki,beforeCreate:It,created:It,beforeMount:It,mounted:It,beforeUpdate:It,updated:It,beforeDestroy:It,beforeUnmount:It,destroyed:It,unmounted:It,activated:It,deactivated:It,errorCaptured:It,serverPrefetch:It,components:ki,directives:ki,watch:uI,provide:Vp,inject:cI};function Vp(t,e){return e?t?function(){return St(ne(t)?t.call(this,this):t,ne(e)?e.call(this,this):e)}:e:t}function cI(t,e){return ki(Ku(t),Ku(e))}function Ku(t){if(ee(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function It(t,e){return t?[...new Set([].concat(t,e))]:e}function ki(t,e){return t?St(St(Object.create(null),t),e):e}function uI(t,e){if(!t)return e;if(!e)return t;const n=St(Object.create(null),t);for(const i in e)n[i]=It(t[i],e[i]);return n}function hI(t,e,n,i=!1){const r={},s={};Ka(s,Ql,1),t.propsDefaults=Object.create(null),D_(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:ST(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function fI(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=ye(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Hl(t.emitsOptions,f))continue;const d=e[f];if(l)if(de(s,f))d!==s[f]&&(s[f]=d,c=!0);else{const m=In(f);r[m]=Wu(l,a,m,d,t,!1)}else d!==s[f]&&(s[f]=d,c=!0)}}}else{D_(t,e,r,s)&&(c=!0);let u;for(const h in a)(!e||!de(e,h)&&((u=es(h))===h||!de(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Wu(l,a,h,void 0,t,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!de(e,h))&&(delete s[h],c=!0)}c&&$n(t,"set","$attrs")}function D_(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Oa(l))continue;const c=e[l];let u;r&&de(r,u=In(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:Hl(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=ye(n),c=a||ke;for(let u=0;u<s.length;u++){const h=s[u];n[h]=Wu(r,l,h,c[h],t,!de(c,h))}}return o}function Wu(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=de(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&ne(l)){const{propsDefaults:c}=r;n in c?i=c[n]:(Fr(r),i=c[n]=l.call(null,e),ji())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===es(n))&&(i=!0))}return i}function P_(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!ne(t)){const u=h=>{l=!0;const[f,d]=P_(h,e,!0);St(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return Ue(t)&&i.set(t,Tr),Tr;if(ee(s))for(let u=0;u<s.length;u++){const h=In(s[u]);$p(h)&&(o[h]=ke)}else if(s)for(const u in s){const h=In(u);if($p(h)){const f=s[u],d=o[h]=ee(f)||ne(f)?{type:f}:Object.assign({},f);if(d){const m=zp(Boolean,d.type),y=zp(String,d.type);d[0]=m>-1,d[1]=y<0||m<y,(m>-1||de(d,"default"))&&a.push(h)}}}const c=[o,a];return Ue(t)&&i.set(t,c),c}function $p(t){return t[0]!=="$"}function Bp(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function jp(t,e){return Bp(t)===Bp(e)}function zp(t,e){return ee(e)?e.findIndex(n=>jp(n,t)):ne(e)&&jp(e,t)?0:-1}const M_=t=>t[0]==="_"||t==="$stable",Nf=t=>ee(t)?t.map(mn):[mn(t)],dI=(t,e,n)=>{if(e._n)return e;const i=FT((...r)=>Nf(e(...r)),n);return i._c=!1,i},L_=(t,e,n)=>{const i=t._ctx;for(const r in t){if(M_(r))continue;const s=t[r];if(ne(s))e[r]=dI(r,s,i);else if(s!=null){const o=Nf(s);e[r]=()=>o}}},F_=(t,e)=>{const n=Nf(e);t.slots.default=()=>n},pI=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ye(e),Ka(e,"_",n)):L_(e,t.slots={})}else t.slots={},e&&F_(t,e);Ka(t.slots,Ql,1)},mI=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=ke;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(St(r,e),!n&&a===1&&delete r._):(s=!e.$stable,L_(e,r)),o=e}else e&&(F_(t,e),o={default:1});if(s)for(const a in r)!M_(a)&&!(a in o)&&delete r[a]};function U_(){return{app:null,config:{isNativeTag:Hw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let gI=0;function yI(t,e){return function(i,r=null){ne(i)||(i=Object.assign({},i)),r!=null&&!Ue(r)&&(r=null);const s=U_(),o=new Set;let a=!1;const l=s.app={_uid:gI++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:LI,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&ne(c.install)?(o.add(c),c.install(l,...u)):ne(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const f=st(i,r);return f.appContext=s,u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,Jl(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function qu(t,e,n,i,r=!1){if(ee(t)){t.forEach((f,d)=>qu(f,e&&(ee(e)?e[d]:e),n,i,r));return}if(Ma(i)&&!r)return;const s=i.shapeFlag&4?Jl(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ke?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Xe(c)?(u[c]=null,de(h,c)&&(h[c]=null)):ct(c)&&(c.value=null)),ne(l))oi(l,a,12,[o,u]);else{const f=Xe(l),d=ct(l);if(f||d){const m=()=>{if(t.f){const y=f?de(h,l)?h[l]:u[l]:l.value;r?ee(y)&&ff(y,s):ee(y)?y.includes(s)||y.push(s):f?(u[l]=[s],de(h,l)&&(h[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,de(h,l)&&(h[l]=o)):d&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Rt(m,n)):m()}}}const Rt=zT;function _I(t){return vI(t)}function vI(t,e){const n=Qw();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=an,insertStaticContent:m}=t,y=(p,g,w,T=null,S=null,x=null,M=!1,N=null,O=!!g.dynamicChildren)=>{if(p===g)return;p&&!vs(p,g)&&(T=P(p),At(p,S,x,!0),p=null),g.patchFlag===-2&&(O=!1,g.dynamicChildren=null);const{type:k,ref:K,shapeFlag:$}=g;switch(k){case Yl:b(p,g,w,T);break;case Wi:_(p,g,w,T);break;case La:p==null&&v(g,w,T,M);break;case it:fn(p,g,w,T,S,x,M,N,O);break;default:$&1?V(p,g,w,T,S,x,M,N,O):$&6?cr(p,g,w,T,S,x,M,N,O):($&64||$&128)&&k.process(p,g,w,T,S,x,M,N,O,fe)}K!=null&&S&&qu(K,p&&p.ref,x,g||p,!g)},b=(p,g,w,T)=>{if(p==null)i(g.el=a(g.children),w,T);else{const S=g.el=p.el;g.children!==p.children&&c(S,g.children)}},_=(p,g,w,T)=>{p==null?i(g.el=l(g.children||""),w,T):g.el=p.el},v=(p,g,w,T)=>{[p.el,p.anchor]=m(p.children,g,w,T,p.el,p.anchor)},E=({el:p,anchor:g},w,T)=>{let S;for(;p&&p!==g;)S=f(p),i(p,w,T),p=S;i(g,w,T)},I=({el:p,anchor:g})=>{let w;for(;p&&p!==g;)w=f(p),r(p),p=w;r(g)},V=(p,g,w,T,S,x,M,N,O)=>{M=M||g.type==="svg",p==null?X(g,w,T,S,x,M,N,O):je(p,g,S,x,M,N,O)},X=(p,g,w,T,S,x,M,N)=>{let O,k;const{type:K,props:$,shapeFlag:W,transition:J,dirs:oe}=p;if(O=p.el=o(p.type,x,$&&$.is,$),W&8?u(O,p.children):W&16&&ge(p.children,O,null,T,S,x&&K!=="foreignObject",M,N),oe&&Si(p,null,T,"created"),re(O,p,p.scopeId,M,T),$){for(const Te in $)Te!=="value"&&!Oa(Te)&&s(O,Te,null,$[Te],x,p.children,T,S,F);"value"in $&&s(O,"value",null,$.value),(k=$.onVnodeBeforeMount)&&pn(k,T,p)}oe&&Si(p,null,T,"beforeMount");const Se=(!S||S&&!S.pendingBranch)&&J&&!J.persisted;Se&&J.beforeEnter(O),i(O,g,w),((k=$&&$.onVnodeMounted)||Se||oe)&&Rt(()=>{k&&pn(k,T,p),Se&&J.enter(O),oe&&Si(p,null,T,"mounted")},S)},re=(p,g,w,T,S)=>{if(w&&d(p,w),T)for(let x=0;x<T.length;x++)d(p,T[x]);if(S){let x=S.subTree;if(g===x){const M=S.vnode;re(p,M,M.scopeId,M.slotScopeIds,S.parent)}}},ge=(p,g,w,T,S,x,M,N,O=0)=>{for(let k=O;k<p.length;k++){const K=p[k]=N?ii(p[k]):mn(p[k]);y(null,K,g,w,T,S,x,M,N)}},je=(p,g,w,T,S,x,M)=>{const N=g.el=p.el;let{patchFlag:O,dynamicChildren:k,dirs:K}=g;O|=p.patchFlag&16;const $=p.props||ke,W=g.props||ke;let J;w&&Ai(w,!1),(J=W.onVnodeBeforeUpdate)&&pn(J,w,g,p),K&&Si(g,p,w,"beforeUpdate"),w&&Ai(w,!0);const oe=S&&g.type!=="foreignObject";if(k?ft(p.dynamicChildren,k,N,w,T,oe,x):M||we(p,g,N,null,w,T,oe,x,!1),O>0){if(O&16)Jn(N,g,$,W,w,T,S);else if(O&2&&$.class!==W.class&&s(N,"class",null,W.class,S),O&4&&s(N,"style",$.style,W.style,S),O&8){const Se=g.dynamicProps;for(let Te=0;Te<Se.length;Te++){const Ke=Se[Te],Xt=$[Ke],hr=W[Ke];(hr!==Xt||Ke==="value")&&s(N,Ke,Xt,hr,S,p.children,w,T,F)}}O&1&&p.children!==g.children&&u(N,g.children)}else!M&&k==null&&Jn(N,g,$,W,w,T,S);((J=W.onVnodeUpdated)||K)&&Rt(()=>{J&&pn(J,w,g,p),K&&Si(g,p,w,"updated")},T)},ft=(p,g,w,T,S,x,M)=>{for(let N=0;N<g.length;N++){const O=p[N],k=g[N],K=O.el&&(O.type===it||!vs(O,k)||O.shapeFlag&70)?h(O.el):w;y(O,k,K,null,T,S,x,M,!0)}},Jn=(p,g,w,T,S,x,M)=>{if(w!==T){if(w!==ke)for(const N in w)!Oa(N)&&!(N in T)&&s(p,N,w[N],null,M,g.children,S,x,F);for(const N in T){if(Oa(N))continue;const O=T[N],k=w[N];O!==k&&N!=="value"&&s(p,N,k,O,M,g.children,S,x,F)}"value"in T&&s(p,"value",w.value,T.value)}},fn=(p,g,w,T,S,x,M,N,O)=>{const k=g.el=p?p.el:a(""),K=g.anchor=p?p.anchor:a("");let{patchFlag:$,dynamicChildren:W,slotScopeIds:J}=g;J&&(N=N?N.concat(J):J),p==null?(i(k,w,T),i(K,w,T),ge(g.children,w,K,S,x,M,N,O)):$>0&&$&64&&W&&p.dynamicChildren?(ft(p.dynamicChildren,W,w,S,x,M,N),(g.key!=null||S&&g===S.subTree)&&V_(p,g,!0)):we(p,g,w,K,S,x,M,N,O)},cr=(p,g,w,T,S,x,M,N,O)=>{g.slotScopeIds=N,p==null?g.shapeFlag&512?S.ctx.activate(g,w,T,M,O):Ii(g,w,T,S,x,M,O):ys(p,g,O)},Ii=(p,g,w,T,S,x,M)=>{const N=p.component=kI(p,T,S);if(A_(p)&&(N.ctx.renderer=fe),RI(N),N.asyncDep){if(S&&S.registerDep(N,He),!p.el){const O=N.subTree=st(Wi);_(null,O,g,w)}return}He(N,p,g,w,S,x,M)},ys=(p,g,w)=>{const T=g.component=p.component;if($T(p,g,w))if(T.asyncDep&&!T.asyncResolved){Ce(T,g,w);return}else T.next=g,DT(T.update),T.update();else g.el=p.el,T.vnode=g},He=(p,g,w,T,S,x,M)=>{const N=()=>{if(p.isMounted){let{next:K,bu:$,u:W,parent:J,vnode:oe}=p,Se=K,Te;Ai(p,!1),K?(K.el=oe.el,Ce(p,K,M)):K=oe,$&&Da($),(Te=K.props&&K.props.onVnodeBeforeUpdate)&&pn(Te,J,K,oe),Ai(p,!0);const Ke=Xc(p),Xt=p.subTree;p.subTree=Ke,y(Xt,Ke,h(Xt.el),P(Xt),p,S,x),K.el=Ke.el,Se===null&&BT(p,Ke.el),W&&Rt(W,S),(Te=K.props&&K.props.onVnodeUpdated)&&Rt(()=>pn(Te,J,K,oe),S)}else{let K;const{el:$,props:W}=g,{bm:J,m:oe,parent:Se}=p,Te=Ma(g);if(Ai(p,!1),J&&Da(J),!Te&&(K=W&&W.onVnodeBeforeMount)&&pn(K,Se,g),Ai(p,!0),$&&se){const Ke=()=>{p.subTree=Xc(p),se($,p.subTree,p,S,null)};Te?g.type.__asyncLoader().then(()=>!p.isUnmounted&&Ke()):Ke()}else{const Ke=p.subTree=Xc(p);y(null,Ke,w,T,p,S,x),g.el=Ke.el}if(oe&&Rt(oe,S),!Te&&(K=W&&W.onVnodeMounted)){const Ke=g;Rt(()=>pn(K,Se,Ke),S)}(g.shapeFlag&256||Se&&Ma(Se.vnode)&&Se.vnode.shapeFlag&256)&&p.a&&Rt(p.a,S),p.isMounted=!0,g=w=T=null}},O=p.effect=new gf(N,()=>If(k),p.scope),k=p.update=()=>O.run();k.id=p.uid,Ai(p,!0),k()},Ce=(p,g,w)=>{g.component=p;const T=p.vnode.props;p.vnode=g,p.next=null,fI(p,g.props,T,w),mI(p,g.children,w),ts(),Mp(),ns()},we=(p,g,w,T,S,x,M,N,O=!1)=>{const k=p&&p.children,K=p?p.shapeFlag:0,$=g.children,{patchFlag:W,shapeFlag:J}=g;if(W>0){if(W&128){Ci(k,$,w,T,S,x,M,N,O);return}else if(W&256){Yt(k,$,w,T,S,x,M,N,O);return}}J&8?(K&16&&F(k,S,x),$!==k&&u(w,$)):K&16?J&16?Ci(k,$,w,T,S,x,M,N,O):F(k,S,x,!0):(K&8&&u(w,""),J&16&&ge($,w,T,S,x,M,N,O))},Yt=(p,g,w,T,S,x,M,N,O)=>{p=p||Tr,g=g||Tr;const k=p.length,K=g.length,$=Math.min(k,K);let W;for(W=0;W<$;W++){const J=g[W]=O?ii(g[W]):mn(g[W]);y(p[W],J,w,null,S,x,M,N,O)}k>K?F(p,S,x,!0,!1,$):ge(g,w,T,S,x,M,N,O,$)},Ci=(p,g,w,T,S,x,M,N,O)=>{let k=0;const K=g.length;let $=p.length-1,W=K-1;for(;k<=$&&k<=W;){const J=p[k],oe=g[k]=O?ii(g[k]):mn(g[k]);if(vs(J,oe))y(J,oe,w,null,S,x,M,N,O);else break;k++}for(;k<=$&&k<=W;){const J=p[$],oe=g[W]=O?ii(g[W]):mn(g[W]);if(vs(J,oe))y(J,oe,w,null,S,x,M,N,O);else break;$--,W--}if(k>$){if(k<=W){const J=W+1,oe=J<K?g[J].el:T;for(;k<=W;)y(null,g[k]=O?ii(g[k]):mn(g[k]),w,oe,S,x,M,N,O),k++}}else if(k>W)for(;k<=$;)At(p[k],S,x,!0),k++;else{const J=k,oe=k,Se=new Map;for(k=oe;k<=W;k++){const Lt=g[k]=O?ii(g[k]):mn(g[k]);Lt.key!=null&&Se.set(Lt.key,k)}let Te,Ke=0;const Xt=W-oe+1;let hr=!1,Ip=0;const _s=new Array(Xt);for(k=0;k<Xt;k++)_s[k]=0;for(k=J;k<=$;k++){const Lt=p[k];if(Ke>=Xt){At(Lt,S,x,!0);continue}let dn;if(Lt.key!=null)dn=Se.get(Lt.key);else for(Te=oe;Te<=W;Te++)if(_s[Te-oe]===0&&vs(Lt,g[Te])){dn=Te;break}dn===void 0?At(Lt,S,x,!0):(_s[dn-oe]=k+1,dn>=Ip?Ip=dn:hr=!0,y(Lt,g[dn],w,null,S,x,M,N,O),Ke++)}const Cp=hr?bI(_s):Tr;for(Te=Cp.length-1,k=Xt-1;k>=0;k--){const Lt=oe+k,dn=g[Lt],Sp=Lt+1<K?g[Lt+1].el:T;_s[k]===0?y(null,dn,w,Sp,S,x,M,N,O):hr&&(Te<0||k!==Cp[Te]?Qt(dn,w,Sp,2):Te--)}}},Qt=(p,g,w,T,S=null)=>{const{el:x,type:M,transition:N,children:O,shapeFlag:k}=p;if(k&6){Qt(p.component.subTree,g,w,T);return}if(k&128){p.suspense.move(g,w,T);return}if(k&64){M.move(p,g,w,fe);return}if(M===it){i(x,g,w);for(let $=0;$<O.length;$++)Qt(O[$],g,w,T);i(p.anchor,g,w);return}if(M===La){E(p,g,w);return}if(T!==2&&k&1&&N)if(T===0)N.beforeEnter(x),i(x,g,w),Rt(()=>N.enter(x),S);else{const{leave:$,delayLeave:W,afterLeave:J}=N,oe=()=>i(x,g,w),Se=()=>{$(x,()=>{oe(),J&&J()})};W?W(x,oe,Se):Se()}else i(x,g,w)},At=(p,g,w,T=!1,S=!1)=>{const{type:x,props:M,ref:N,children:O,dynamicChildren:k,shapeFlag:K,patchFlag:$,dirs:W}=p;if(N!=null&&qu(N,null,w,p,!0),K&256){g.ctx.deactivate(p);return}const J=K&1&&W,oe=!Ma(p);let Se;if(oe&&(Se=M&&M.onVnodeBeforeUnmount)&&pn(Se,g,p),K&6)C(p.component,w,T);else{if(K&128){p.suspense.unmount(w,T);return}J&&Si(p,null,g,"beforeUnmount"),K&64?p.type.remove(p,g,w,S,fe,T):k&&(x!==it||$>0&&$&64)?F(k,g,w,!1,!0):(x===it&&$&384||!S&&K&16)&&F(O,g,w),T&&ur(p)}(oe&&(Se=M&&M.onVnodeUnmounted)||J)&&Rt(()=>{Se&&pn(Se,g,p),J&&Si(p,null,g,"unmounted")},w)},ur=p=>{const{type:g,el:w,anchor:T,transition:S}=p;if(g===it){ia(w,T);return}if(g===La){I(p);return}const x=()=>{r(w),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(p.shapeFlag&1&&S&&!S.persisted){const{leave:M,delayLeave:N}=S,O=()=>M(w,x);N?N(p.el,x,O):O()}else x()},ia=(p,g)=>{let w;for(;p!==g;)w=f(p),r(p),p=w;r(g)},C=(p,g,w)=>{const{bum:T,scope:S,update:x,subTree:M,um:N}=p;T&&Da(T),S.stop(),x&&(x.active=!1,At(M,p,g,w)),N&&Rt(N,g),Rt(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},F=(p,g,w,T=!1,S=!1,x=0)=>{for(let M=x;M<p.length;M++)At(p[M],g,w,T,S)},P=p=>p.shapeFlag&6?P(p.component.subTree):p.shapeFlag&128?p.suspense.next():f(p.anchor||p.el),H=(p,g,w)=>{p==null?g._vnode&&At(g._vnode,null,null,!0):y(g._vnode||null,p,g,null,null,null,w),Mp(),T_(),g._vnode=p},fe={p:y,um:At,m:Qt,r:ur,mt:Ii,mc:ge,pc:we,pbc:ft,n:P,o:t};let Ve,se;return e&&([Ve,se]=e(fe)),{render:H,hydrate:Ve,createApp:yI(H,Ve)}}function Ai({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function V_(t,e,n=!1){const i=t.children,r=e.children;if(ee(i)&&ee(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=ii(r[s]),a.el=o.el),n||V_(o,a)),a.type===Yl&&(a.el=o.el)}}function bI(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const EI=t=>t.__isTeleport,it=Symbol(void 0),Yl=Symbol(void 0),Wi=Symbol(void 0),La=Symbol(void 0),Ps=[];let tn=null;function me(t=!1){Ps.push(tn=t?null:[])}function wI(){Ps.pop(),tn=Ps[Ps.length-1]||null}let to=1;function Hp(t){to+=t}function $_(t){return t.dynamicChildren=to>0?tn||Tr:null,wI(),to>0&&tn&&tn.push(t),t}function xe(t,e,n,i,r,s){return $_(Oe(t,e,n,i,r,s,!0))}function fi(t,e,n,i,r){return $_(st(t,e,n,i,r,!0))}function Gu(t){return t?t.__v_isVNode===!0:!1}function vs(t,e){return t.type===e.type&&t.key===e.key}const Ql="__vInternal",B_=({key:t})=>t??null,Fa=({ref:t,ref_key:e,ref_for:n})=>t!=null?Xe(t)||ct(t)||ne(t)?{i:Vt,r:t,k:e,f:!!n}:t:null;function Oe(t,e=null,n=null,i=0,r=null,s=t===it?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&B_(e),ref:e&&Fa(e),scopeId:Kl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Vt};return a?(xf(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Xe(n)?8:16),to>0&&!o&&tn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&tn.push(l),l}const st=TI;function TI(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===iI)&&(t=Wi),Gu(t)){const a=Lr(t,e,!0);return n&&xf(a,n),to>0&&!s&&tn&&(a.shapeFlag&6?tn[tn.indexOf(t)]=a:tn.push(a)),a.patchFlag|=-2,a}if(PI(t)&&(t=t.__vccOpts),e){e=II(e);let{class:a,style:l}=e;a&&!Xe(a)&&(e.class=Zr(a)),Ue(l)&&(d_(l)&&!ee(l)&&(l=St({},l)),e.style=Fl(l))}const o=Xe(t)?1:jT(t)?128:EI(t)?64:Ue(t)?4:ne(t)?2:0;return Oe(t,e,n,i,r,o,s,!0)}function II(t){return t?d_(t)||Ql in t?St({},t):t:null}function Lr(t,e,n=!1){const{props:i,ref:r,patchFlag:s,children:o}=t,a=e?CI(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&B_(a),ref:e&&e.ref?n&&r?ee(r)?r.concat(Fa(e)):[r,Fa(e)]:Fa(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==it?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Lr(t.ssContent),ssFallback:t.ssFallback&&Lr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Ln(t=" ",e=0){return st(Yl,null,t,e)}function Ot(t="",e=!1){return e?(me(),fi(Wi,null,t)):st(Wi,null,t)}function mn(t){return t==null||typeof t=="boolean"?st(Wi):ee(t)?st(it,null,t.slice()):typeof t=="object"?ii(t):st(Yl,null,String(t))}function ii(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Lr(t)}function xf(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(ee(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),xf(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Ql in e)?e._ctx=Vt:r===3&&Vt&&(Vt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ne(e)?(e={default:e,_ctx:Vt},n=32):(e=String(e),i&64?(n=16,e=[Ln(e)]):n=8);t.children=e,t.shapeFlag|=n}function CI(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Zr([e.class,i.class]));else if(r==="style")e.style=Fl([e.style,i.style]);else if(Ul(r)){const s=e[r],o=i[r];o&&s!==o&&!(ee(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function pn(t,e,n,i=null){ln(t,e,7,[n,i])}const SI=U_();let AI=0;function kI(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||SI,s={uid:AI++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new e_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:P_(i,r),emitsOptions:C_(i,r),emit:null,emitted:null,propsDefaults:ke,inheritAttrs:i.inheritAttrs,ctx:ke,data:ke,props:ke,attrs:ke,slots:ke,refs:ke,setupState:ke,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=LT.bind(null,s),t.ce&&t.ce(s),s}let ze=null;const Xl=()=>ze||Vt,Fr=t=>{ze=t,t.scope.on()},ji=()=>{ze&&ze.scope.off(),ze=null};function j_(t){return t.vnode.shapeFlag&4}let no=!1;function RI(t,e=!1){no=e;const{props:n,children:i}=t.vnode,r=j_(t);hI(t,n,r,e),pI(t,i);const s=r?NI(t,e):void 0;return no=!1,s}function NI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ef(new Proxy(t.ctx,sI));const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?OI(t):null;Fr(t),ts();const s=oi(i,t,0,[t.props,r]);if(ns(),ji(),Xy(s)){if(s.then(ji,ji),e)return s.then(o=>{Kp(t,o,e)}).catch(o=>{zl(o,t,0)});t.asyncDep=s}else Kp(t,s,e)}else z_(t,e)}function Kp(t,e,n){ne(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ue(e)&&(t.setupState=__(e)),z_(t,n)}let Wp;function z_(t,e,n){const i=t.type;if(!t.render){if(!e&&Wp&&!i.render){const r=i.template||Rf(t).template;if(r){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=St(St({isCustomElement:s,delimiters:a},o),l);i.render=Wp(r,c)}}t.render=i.render||an}Fr(t),ts(),oI(t),ns(),ji()}function xI(t){return new Proxy(t.attrs,{get(e,n){return Pt(t,"get","$attrs"),e[n]}})}function OI(t){const e=i=>{t.exposed=i||{}};let n;return{get attrs(){return n||(n=xI(t))},slots:t.slots,emit:t.emit,expose:e}}function Jl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(__(Ef(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ds)return Ds[n](t)},has(e,n){return n in e||n in Ds}}))}function DI(t,e=!0){return ne(t)?t.displayName||t.name:t.name||e&&t.__name}function PI(t){return ne(t)&&"__vccOpts"in t}const ie=(t,e)=>NT(t,e,no);function Zl(t,e,n){const i=arguments.length;return i===2?Ue(e)&&!ee(e)?Gu(e)?st(t,null,[e]):st(t,e):st(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Gu(n)&&(n=[n]),st(t,e,n))}const H_=Symbol(""),MI=()=>$t(H_),LI="3.2.47",FI="http://www.w3.org/2000/svg",Oi=typeof document<"u"?document:null,qp=Oi&&Oi.createElement("template"),UI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e?Oi.createElementNS(FI,t):Oi.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Oi.createTextNode(t),createComment:t=>Oi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Oi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{qp.innerHTML=i?`<svg>${t}</svg>`:t;const a=qp.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function VI(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function $I(t,e,n){const i=t.style,r=Xe(n);if(n&&!r){if(e&&!Xe(e))for(const s in e)n[s]==null&&Yu(i,s,"");for(const s in n)Yu(i,s,n[s])}else{const s=i.display;r?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=s)}}const Gp=/\s*!important$/;function Yu(t,e,n){if(ee(n))n.forEach(i=>Yu(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=BI(t,e);Gp.test(n)?t.setProperty(es(i),n.replace(Gp,""),"important"):t[i]=n}}const Yp=["Webkit","Moz","ms"],Zc={};function BI(t,e){const n=Zc[e];if(n)return n;let i=In(e);if(i!=="filter"&&i in t)return Zc[e]=i;i=Bl(i);for(let r=0;r<Yp.length;r++){const s=Yp[r]+i;if(s in t)return Zc[e]=s}return e}const Qp="http://www.w3.org/1999/xlink";function jI(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Qp,e.slice(6,e.length)):t.setAttributeNS(Qp,e,n);else{const s=zw(e);n==null||s&&!Gy(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function zI(t,e,n,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Gy(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function pr(t,e,n,i){t.addEventListener(e,n,i)}function HI(t,e,n,i){t.removeEventListener(e,n,i)}function KI(t,e,n,i,r=null){const s=t._vei||(t._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=WI(e);if(i){const c=s[e]=YI(i,r);pr(t,a,c,l)}else o&&(HI(t,a,o,l),s[e]=void 0)}}const Xp=/(?:Once|Passive|Capture)$/;function WI(t){let e;if(Xp.test(t)){e={};let i;for(;i=t.match(Xp);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):es(t.slice(2)),e]}let eu=0;const qI=Promise.resolve(),GI=()=>eu||(qI.then(()=>eu=0),eu=Date.now());function YI(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;ln(QI(i,n.value),e,5,[i])};return n.value=t,n.attached=GI(),n}function QI(t,e){if(ee(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Jp=/^on[a-z]/,XI=(t,e,n,i,r=!1,s,o,a,l)=>{e==="class"?VI(t,i,r):e==="style"?$I(t,n,i):Ul(e)?hf(e)||KI(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):JI(t,e,i,r))?zI(t,e,i,s,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),jI(t,e,i,r))};function JI(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&Jp.test(e)&&ne(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Jp.test(e)&&Xe(n)?!1:e in t}function Of(t){const e=Xl();if(!e)return;const n=e.ut=(r=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(s=>Xu(s,r))},i=()=>{const r=t(e.proxy);Qu(e.subTree,r),n(r)};HT(i),R_(()=>{const r=new MutationObserver(i);r.observe(e.subTree.el.parentNode,{childList:!0}),kf(()=>r.disconnect())})}function Qu(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Qu(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)Xu(t.el,e);else if(t.type===it)t.children.forEach(n=>Qu(n,e));else if(t.type===La){let{el:n,anchor:i}=t;for(;n&&(Xu(n,e),n!==i);)n=n.nextSibling}}function Xu(t,e){if(t.nodeType===1){const n=t.style;for(const i in e)n.setProperty(`--${i}`,e[i])}}const Zp=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ee(e)?n=>Da(e,n):e};function ZI(t){t.target.composing=!0}function em(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ec={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t._assign=Zp(r);const s=i||r.props&&r.props.type==="number";pr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=Fu(a)),t._assign(a)}),n&&pr(t,"change",()=>{t.value=t.value.trim()}),e||(pr(t,"compositionstart",ZI),pr(t,"compositionend",em),pr(t,"change",em))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:r}},s){if(t._assign=Zp(s),t.composing||document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===e||(r||t.type==="number")&&Fu(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},e1=["ctrl","shift","alt","meta"],t1={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>e1.some(n=>t[`${n}Key`]&&!e.includes(n))},is=(t,e)=>(n,...i)=>{for(let r=0;r<e.length;r++){const s=t1[e[r]];if(s&&s(n,e))return}return t(n,...i)},n1=St({patchProp:XI},UI);let tm;function i1(){return tm||(tm=_I(n1))}const r1=(...t)=>{const e=i1().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=s1(i);if(!r)return;const s=e._component;!ne(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function s1(t){return Xe(t)?document.querySelector(t):t}var o1=!1;/*!
  * pinia v2.0.35
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const a1=Symbol();var nm;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(nm||(nm={}));function l1(){const t=Xw(!0),e=t.run(()=>xt({}));let n=[],i=[];const r=Ef({install(s){r._a=s,s.provide(a1,r),s.config.globalProperties.$pinia=r,i.forEach(o=>n.push(o)),i=[]},use(s){return!this._a&&!o1?i.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D=function(t,e){if(!t)throw rs(e)},rs=function(t){return new Error("Firebase Database ("+K_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},c1=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},tc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(f=64)),i.push(n[u],n[h],n[f],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(W_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):c1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||c==null||h==null)throw new u1;const f=s<<2|a>>4;if(i.push(f),c!==64){const d=a<<4&240|c>>2;if(i.push(d),h!==64){const m=c<<6&192|h;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class u1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const q_=function(t){const e=W_(t);return tc.encodeByteArray(e,!0)},Ya=function(t){return q_(t).replace(/\./g,"")},Qa=function(t){try{return tc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h1(t){return G_(void 0,t)}function G_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!f1(n)||(t[n]=G_(t[n],e[n]));return t}function f1(t){return t!=="__proto__"}/**
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
 */function d1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const p1=()=>d1().__FIREBASE_DEFAULTS__,m1=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},g1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Qa(t[1]);return e&&JSON.parse(e)},Df=()=>{try{return p1()||m1()||g1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},y1=t=>{var e,n;return(n=(e=Df())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},_1=t=>{const e=y1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},v1=()=>{var t;return(t=Df())===null||t===void 0?void 0:t.config},b1=t=>{var e;return(e=Df())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function E1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ya(JSON.stringify(n)),Ya(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Cn())}function w1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Y_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Q_(){return K_.NODE_ADMIN===!0}function X_(){try{return typeof indexedDB=="object"}catch{return!1}}function T1(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I1="FirebaseError";class Yn extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=I1,Object.setPrototypeOf(this,Yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ss.prototype.create)}}class ss{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?C1(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Yn(r,a,i)}}function C1(t,e){return t.replace(S1,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const S1=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(t){return JSON.parse(t)}function lt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_=function(t){let e={},n={},i={},r="";try{const s=t.split(".");e=ro(Qa(s[0])||""),n=ro(Qa(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:r}},A1=function(t){const e=J_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},k1=function(t){const e=J_(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ur(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function im(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Xa(t,e,n){const i={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=e.call(n,t[r],r,t));return i}function Ju(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(rm(s)&&rm(o)){if(!Ju(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function rm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)i[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(f<<1|f>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):h<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const f=(r<<5|r>>>27)+c+l+u+i[h]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=r,r=f}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<n;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}}function N1(t,e){const n=new x1(t,e);return n.subscribe.bind(n)}class x1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");O1(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=tu),r.error===void 0&&(r.error=tu),r.complete===void 0&&(r.complete=tu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function O1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function tu(){}function D1(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P1=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,D(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},nc=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Mt(t){return t&&t._delegate?t._delegate:t}class un{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ri="[DEFAULT]";/**
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
 */class M1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new io;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(F1(e))try{this.getOrInitializeService({instanceIdentifier:Ri})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=Ri){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ri){return this.instances.has(e)}getOptions(e=Ri){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:L1(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ri){return this.component?this.component.multipleInstances?e:Ri:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function L1(t){return t===Ri?void 0:t}function F1(t){return t.instantiationMode==="EAGER"}/**
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
 */class U1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new M1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const V1={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},$1=pe.INFO,B1={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},j1=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=B1[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class No{constructor(e){this.name=e,this._logLevel=$1,this._logHandler=j1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?V1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const z1=(t,e)=>e.some(n=>t instanceof n);let sm,om;function H1(){return sm||(sm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function K1(){return om||(om=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Z_=new WeakMap,Zu=new WeakMap,ev=new WeakMap,nu=new WeakMap,Lf=new WeakMap;function W1(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ai(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Z_.set(n,t)}).catch(()=>{}),Lf.set(e,t),e}function q1(t){if(Zu.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Zu.set(t,e)}let eh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Zu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ev.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ai(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function G1(t){eh=t(eh)}function Y1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(iu(this),e,...n);return ev.set(i,e.sort?e.sort():[e]),ai(i)}:K1().includes(t)?function(...e){return t.apply(iu(this),e),ai(Z_.get(this))}:function(...e){return ai(t.apply(iu(this),e))}}function Q1(t){return typeof t=="function"?Y1(t):(t instanceof IDBTransaction&&q1(t),z1(t,H1())?new Proxy(t,eh):t)}function ai(t){if(t instanceof IDBRequest)return W1(t);if(nu.has(t))return nu.get(t);const e=Q1(t);return e!==t&&(nu.set(t,e),Lf.set(e,t)),e}const iu=t=>Lf.get(t);function X1(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=ai(o);return i&&o.addEventListener("upgradeneeded",l=>{i(ai(o.result),l.oldVersion,l.newVersion,ai(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const J1=["get","getKey","getAll","getAllKeys","count"],Z1=["put","add","delete","clear"],ru=new Map;function am(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ru.get(e))return ru.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=Z1.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||J1.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return ru.set(e,s),s}G1(t=>({...t,get:(e,n,i)=>am(e,n)||t.get(e,n,i),has:(e,n)=>!!am(e,n)||t.has(e,n)}));/**
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
 */class eC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(tC(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function tC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const th="@firebase/app",lm="0.9.8";/**
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
 */const qi=new No("@firebase/app"),nC="@firebase/app-compat",iC="@firebase/analytics-compat",rC="@firebase/analytics",sC="@firebase/app-check-compat",oC="@firebase/app-check",aC="@firebase/auth",lC="@firebase/auth-compat",cC="@firebase/database",uC="@firebase/database-compat",hC="@firebase/functions",fC="@firebase/functions-compat",dC="@firebase/installations",pC="@firebase/installations-compat",mC="@firebase/messaging",gC="@firebase/messaging-compat",yC="@firebase/performance",_C="@firebase/performance-compat",vC="@firebase/remote-config",bC="@firebase/remote-config-compat",EC="@firebase/storage",wC="@firebase/storage-compat",TC="@firebase/firestore",IC="@firebase/firestore-compat",CC="firebase",SC="9.20.0";/**
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
 */const nh="[DEFAULT]",AC={[th]:"fire-core",[nC]:"fire-core-compat",[rC]:"fire-analytics",[iC]:"fire-analytics-compat",[oC]:"fire-app-check",[sC]:"fire-app-check-compat",[aC]:"fire-auth",[lC]:"fire-auth-compat",[cC]:"fire-rtdb",[uC]:"fire-rtdb-compat",[hC]:"fire-fn",[fC]:"fire-fn-compat",[dC]:"fire-iid",[pC]:"fire-iid-compat",[mC]:"fire-fcm",[gC]:"fire-fcm-compat",[yC]:"fire-perf",[_C]:"fire-perf-compat",[vC]:"fire-rc",[bC]:"fire-rc-compat",[EC]:"fire-gcs",[wC]:"fire-gcs-compat",[TC]:"fire-fst",[IC]:"fire-fst-compat","fire-js":"fire-js",[CC]:"fire-js-all"};/**
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
 */const Ja=new Map,ih=new Map;function kC(t,e){try{t.container.addComponent(e)}catch(n){qi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Sn(t){const e=t.name;if(ih.has(e))return qi.debug(`There were multiple attempts to register component ${e}.`),!1;ih.set(e,t);for(const n of Ja.values())kC(n,t);return!0}function RC(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const NC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},li=new ss("app","Firebase",NC);/**
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
 */class xC{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw li.create("app-deleted",{appName:this._name})}}/**
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
 */const os=SC;function tv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:nh,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw li.create("bad-app-name",{appName:String(r)});if(n||(n=v1()),!n)throw li.create("no-options");const s=Ja.get(r);if(s){if(Ju(n,s.options)&&Ju(i,s.config))return s;throw li.create("duplicate-app",{appName:r})}const o=new U1(r);for(const l of ih.values())o.addComponent(l);const a=new xC(n,i,o);return Ja.set(r,a),a}function nv(t=nh){const e=Ja.get(t);if(!e&&t===nh)return tv();if(!e)throw li.create("no-app",{appName:t});return e}function Bt(t,e,n){var i;let r=(i=AC[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qi.warn(a.join(" "));return}Sn(new un(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const OC="firebase-heartbeat-database",DC=1,so="firebase-heartbeat-store";let su=null;function iv(){return su||(su=X1(OC,DC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(so)}}}).catch(t=>{throw li.create("idb-open",{originalErrorMessage:t.message})})),su}async function PC(t){try{return(await iv()).transaction(so).objectStore(so).get(rv(t))}catch(e){if(e instanceof Yn)qi.warn(e.message);else{const n=li.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qi.warn(n.message)}}}async function cm(t,e){try{const i=(await iv()).transaction(so,"readwrite");return await i.objectStore(so).put(e,rv(t)),i.done}catch(n){if(n instanceof Yn)qi.warn(n.message);else{const i=li.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qi.warn(i.message)}}}function rv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const MC=1024,LC=30*24*60*60*1e3;class FC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new VC(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=um();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=LC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=um(),{heartbeatsToSend:n,unsentEntries:i}=UC(this._heartbeatsCache.heartbeats),r=Ya(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function um(){return new Date().toISOString().substring(0,10)}function UC(t,e=MC){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),hm(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),hm(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class VC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return X_()?T1().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await PC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return cm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return cm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function hm(t){return Ya(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function $C(t){Sn(new un("platform-logger",e=>new eC(e),"PRIVATE")),Sn(new un("heartbeat",e=>new FC(e),"PRIVATE")),Bt(th,lm,t),Bt(th,lm,"esm2017"),Bt("fire-js","")}$C("");function sv(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function ov(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const BC=ov,av=new ss("auth","Firebase",ov());/**
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
 */const Za=new No("@firebase/auth");function jC(t,...e){Za.logLevel<=pe.WARN&&Za.warn(`Auth (${os}): ${t}`,...e)}function Ua(t,...e){Za.logLevel<=pe.ERROR&&Za.error(`Auth (${os}): ${t}`,...e)}/**
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
 */function fm(t,...e){throw Uf(t,...e)}function Ff(t,...e){return Uf(t,...e)}function zC(t,e,n){const i=Object.assign(Object.assign({},BC()),{[e]:n});return new ss("auth","Firebase",i).create(e,{appName:t.name})}function Uf(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return av.create(t,...e)}function ve(t,e,...n){if(!t)throw Uf(e,...n)}function Ms(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ua(e),new Error(e)}function el(t,e){t||Ms(e)}function HC(){return dm()==="http:"||dm()==="https:"}function dm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function KC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(HC()||w1()||"connection"in navigator)?navigator.onLine:!0}function WC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class xo{constructor(e,n){this.shortDelay=e,this.longDelay=n,el(n>e,"Short delay should be less than long delay!"),this.isMobile=Pf()||Y_()}get(){return KC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function qC(t,e){el(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class lv{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ms("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ms("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ms("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const GC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const YC=new xo(3e4,6e4);function QC(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Vf(t,e,n,i,r={}){return cv(t,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=Mf(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),lv.fetch()(uv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function cv(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},GC),e);try{const r=new XC(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ua(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ua(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ua(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ua(t,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw zC(t,u,c);fm(t,u)}}catch(r){if(r instanceof Yn)throw r;fm(t,"network-request-failed",{message:String(r)})}}function uv(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?qC(t.config,r):`${t.config.apiScheme}://${r}`}class XC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Ff(this.auth,"network-request-failed")),YC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ua(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=Ff(t,e,i);return r.customData._tokenResponse=n,r}/**
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
 */async function JC(t,e){return Vf(t,"POST","/v1/accounts:delete",e)}async function ZC(t,e){return Vf(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ls(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function eS(t,e=!1){const n=Mt(t),i=await n.getIdToken(e),r=hv(i);ve(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Ls(ou(r.auth_time)),issuedAtTime:Ls(ou(r.iat)),expirationTime:Ls(ou(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ou(t){return Number(t)*1e3}function hv(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Ua("JWT malformed, contained fewer than 3 sections"),null;try{const r=Qa(n);return r?JSON.parse(r):(Ua("Failed to decode base64 JWT payload"),null)}catch(r){return Ua("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function tS(t){const e=hv(t);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function rh(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Yn&&nS(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function nS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class iS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class fv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ls(this.lastLoginAt),this.creationTime=Ls(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function tl(t){var e;const n=t.auth,i=await t.getIdToken(),r=await rh(t,ZC(n,{idToken:i}));ve(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?oS(s.providerUserInfo):[],a=sS(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new fv(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function rS(t){const e=Mt(t);await tl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sS(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function oS(t){return t.map(e=>{var{providerId:n}=e,i=sv(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function aS(t,e){const n=await cv(t,{},async()=>{const i=Mf({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=uv(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",lv.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class oo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):tS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ve(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await aS(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new oo;return i&&(ve(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(ve(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(ve(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new oo,this.toJSON())}_performRefresh(){return Ms("not implemented")}}/**
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
 */function ei(t,e){ve(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class kr{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=sv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new iS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new fv(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await rh(this,this.stsTokenManager.getToken(this.auth,e));return ve(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return eS(this,e)}reload(){return rS(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new kr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await tl(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await rh(this,JC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,a,l,c,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,d=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,_=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:E,emailVerified:I,isAnonymous:V,providerData:X,stsTokenManager:re}=n;ve(E&&re,e,"internal-error");const ge=oo.fromJSON(this.name,re);ve(typeof E=="string",e,"internal-error"),ei(h,e.name),ei(f,e.name),ve(typeof I=="boolean",e,"internal-error"),ve(typeof V=="boolean",e,"internal-error"),ei(d,e.name),ei(m,e.name),ei(y,e.name),ei(b,e.name),ei(_,e.name),ei(v,e.name);const je=new kr({uid:E,auth:e,email:f,emailVerified:I,displayName:h,isAnonymous:V,photoURL:m,phoneNumber:d,tenantId:y,stsTokenManager:ge,createdAt:_,lastLoginAt:v});return X&&Array.isArray(X)&&(je.providerData=X.map(ft=>Object.assign({},ft))),b&&(je._redirectEventId=b),je}static async _fromIdTokenResponse(e,n,i=!1){const r=new oo;r.updateFromServerResponse(n);const s=new kr({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await tl(s),s}}/**
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
 */const pm=new Map;function Pi(t){el(t instanceof Function,"Expected a class definition");let e=pm.get(t);return e?(el(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,pm.set(t,e),e)}/**
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
 */class dv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}dv.type="NONE";const mm=dv;/**
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
 */function au(t,e,n){return`firebase:${t}:${e}:${n}`}class Rr{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=au(this.userKey,r.apiKey,s),this.fullPersistenceKey=au("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?kr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Rr(Pi(mm),e,i);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||Pi(mm);const o=au(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=kr._fromJSON(e,u);c!==s&&(a=h),s=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Rr(s,e,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Rr(s,e,i))}}/**
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
 */function gm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(lS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(dS(e))return"Blackberry";if(pS(e))return"Webos";if(cS(e))return"Safari";if((e.includes("chrome/")||uS(e))&&!e.includes("edge/"))return"Chrome";if(fS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function lS(t=Cn()){return/firefox\//i.test(t)}function cS(t=Cn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function uS(t=Cn()){return/crios\//i.test(t)}function hS(t=Cn()){return/iemobile/i.test(t)}function fS(t=Cn()){return/android/i.test(t)}function dS(t=Cn()){return/blackberry/i.test(t)}function pS(t=Cn()){return/webos/i.test(t)}/**
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
 */function pv(t,e=[]){let n;switch(t){case"Browser":n=gm(Cn());break;case"Worker":n=`${gm(Cn())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${os}/${i}`}async function mv(t,e){return Vf(t,"GET","/v2/recaptchaConfig",QC(t,e))}function ym(t){return t!==void 0&&t.enterprise!==void 0}class gv{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function mS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function gS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=Ff("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",mS().appendChild(i)})}const yS="https://www.google.com/recaptcha/enterprise.js?render=",_S="recaptcha-enterprise";class vS{constructor(e){this.type=_S,this.auth=yv(e)}async verify(e="verify",n=!1){async function i(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{mv(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new gv(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function r(s,o,a){const l=window.grecaptcha;ym(l)?l.enterprise.ready(()=>{try{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(c=>{a(c)})}catch(c){a(c)}}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{i(this.auth).then(a=>{if(!n&&ym(window.grecaptcha))r(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}gS(yS+a).then(()=>{r(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class bS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */class ES{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _m(this),this.idTokenSubscription=new _m(this),this.beforeStateQueue=new bS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=av,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Pi(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await Rr.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await tl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=WC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Mt(e):null;return n&&ve(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Pi(e))})}async initializeRecaptchaConfig(){const e=await mv(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new gv(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new vS(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ss("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Pi(e)||this._popupRedirectResolver;ve(n,this,"argument-error"),this.redirectPersistenceManager=await Rr.create(this,[Pi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ve(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,i,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&jC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function yv(t){return Mt(t)}class _m{constructor(e){this.auth=e,this.observer=null,this.addObserver=N1(n=>this.observer=n)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function wS(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Pi);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}new xo(3e4,6e4);/**
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
 */new xo(2e3,1e4);/**
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
 */new xo(3e4,6e4);/**
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
 */new xo(5e3,15e3);var vm="@firebase/auth",bm="0.23.0";/**
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
 */class TS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function IS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function CS(t){Sn(new un("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;ve(o&&!o.includes(":"),"invalid-api-key",{appName:i.name}),ve(!(a!=null&&a.includes(":")),"argument-error",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pv(t)},c=new ES(i,r,s,l);return wS(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Sn(new un("auth-internal",e=>{const n=yv(e.getProvider("auth").getImmediate());return(i=>new TS(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bt(vm,bm,IS(t)),Bt(vm,bm,"esm2017")}/**
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
 */const SS=5*60;b1("authIdTokenMaxAge");CS("Browser");/**
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
 */const AS=new Map,kS={activated:!1,tokenObservers:[]};function An(t){return AS.get(t)||Object.assign({},kS)}const Em={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class RS{constructor(e,n,i,r,s){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=r,this.upperBound=s,this.pending=null,this.nextErrorWaitInterval=r,r>s)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new io,await NS(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new io,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function NS(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const xS={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},nl=new ss("appCheck","AppCheck",xS);function OS(t){if(!An(t).activated)throw nl.create("use-before-activation",{appName:t.name})}/**
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
 */const DS="firebase-app-check-database",PS=1,sh="firebase-app-check-store";let ha=null;function MS(){return ha||(ha=new Promise((t,e)=>{try{const n=indexedDB.open(DS,PS);n.onsuccess=i=>{t(i.target.result)},n.onerror=i=>{var r;e(nl.create("storage-open",{originalErrorMessage:(r=i.target.error)===null||r===void 0?void 0:r.message}))},n.onupgradeneeded=i=>{const r=i.target.result;switch(i.oldVersion){case 0:r.createObjectStore(sh,{keyPath:"compositeKey"})}}}catch(n){e(nl.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),ha)}function LS(t,e){return FS(US(t),e)}async function FS(t,e){const i=(await MS()).transaction(sh,"readwrite"),s=i.objectStore(sh).put({compositeKey:t,value:e});return new Promise((o,a)=>{s.onsuccess=l=>{o()},i.onerror=l=>{var c;a(nl.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function US(t){return`${t.options.appId}-${t.name}`}/**
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
 */const oh=new No("@firebase/app-check");function wm(t,e){return X_()?LS(t,e).catch(n=>{oh.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const VS={error:"UNKNOWN_ERROR"};function $S(t){return tc.encodeString(JSON.stringify(t),!1)}async function ah(t,e=!1){const n=t.app;OS(n);const i=An(n);let r=i.token,s;if(r&&!As(r)&&(i.token=void 0,r=void 0),!r){const l=await i.cachedTokenPromise;l&&(As(l)?r=l:await wm(n,void 0))}if(!e&&r&&As(r))return{token:r.token};let o=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),r=await An(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?oh.warn(l.message):oh.error(l),s=l}let a;return r?s?As(r)?a={token:r.token,internalError:s}:a=Im(s):(a={token:r.token},i.token=r,await wm(n,r)):a=Im(s),o&&zS(n,a),a}function BS(t,e,n,i){const{app:r}=t,s=An(r),o={next:n,error:i,type:e};if(s.tokenObservers=[...s.tokenObservers,o],s.token&&As(s.token)){const a=s.token;Promise.resolve().then(()=>{n({token:a.token}),Tm(t)}).catch(()=>{})}s.cachedTokenPromise.then(()=>Tm(t))}function _v(t,e){const n=An(t),i=n.tokenObservers.filter(r=>r.next!==e);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function Tm(t){const{app:e}=t,n=An(e);let i=n.tokenRefresher;i||(i=jS(t),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function jS(t){const{app:e}=t;return new RS(async()=>{const n=An(e);let i;if(n.token?i=await ah(t,!0):i=await ah(t),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=An(e);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const r=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,r),Math.max(0,i-Date.now())}else return 0},Em.RETRIAL_MIN_WAIT,Em.RETRIAL_MAX_WAIT)}function zS(t,e){const n=An(t).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function As(t){return t.expireTimeMillis-Date.now()>0}function Im(t){return{token:$S(VS),error:t}}/**
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
 */class HS{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=An(this.app);for(const n of e)_v(this.app,n.next);return Promise.resolve()}}function KS(t,e){return new HS(t,e)}function WS(t){return{getToken:e=>ah(t,e),addTokenListener:e=>BS(t,"INTERNAL",e),removeTokenListener:e=>_v(t.app,e)}}const qS="@firebase/app-check",GS="0.6.5",YS="app-check",Cm="app-check-internal";function QS(){Sn(new un(YS,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return KS(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Cm).initialize()})),Sn(new un(Cm,t=>{const e=t.getProvider("app-check").getImmediate();return WS(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Bt(qS,GS)}QS();var XS="firebase",JS="9.20.0";/**
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
 */Bt(XS,JS,"app");const vv=Symbol("firebaseApp");function $f(t){return Xl()&&$t(vv,null)||nv(t)}const vn=()=>{};function Bf(t,e){return e.split(".").reduce((n,i)=>n&&n[i],t)}function ZS(t,e,n){const i=(""+e).split("."),r=i.pop(),s=i.reduce((o,a)=>o&&o[a],t);if(s!=null)return Array.isArray(s)?s.splice(Number(r),1,n):s[r]=n}function nr(t){return!!t&&typeof t=="object"}const eA=Object.prototype;function tA(t){return nr(t)&&Object.getPrototypeOf(t)===eA}function jf(t){return nr(t)&&t.type==="document"}function bv(t){return nr(t)&&t.type==="collection"}function nA(t){return jf(t)||bv(t)}function iA(t){return nr(t)&&t.type==="query"}function rA(t){return nr(t)&&"ref"in t}function sA(t){return nr(t)&&typeof t.bucket=="string"}function oA(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}function aA(){return!!(Xl()&&$t(H_,null))}const Sm="@firebase/database",Am="0.14.4";/**
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
 */let Ev="";function lA(t){Ev=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),lt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ro(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Qn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new cA(e)}}catch{}return new uA},Mi=wv("localStorage"),lh=wv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=new No("@firebase/database"),hA=function(){let t=1;return function(){return t++}}(),Tv=function(t){const e=P1(t),n=new R1;n.update(e);const i=n.digest();return tc.encodeByteArray(i)},Oo=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Oo.apply(null,i):typeof i=="object"?e+=lt(i):e+=i,e+=" "}return e};let zi=null,km=!0;const fA=function(t,e){D(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Nr.logLevel=pe.VERBOSE,zi=Nr.log.bind(Nr),e&&lh.set("logging_enabled",!0)):typeof t=="function"?zi=t:(zi=null,lh.remove("logging_enabled"))},mt=function(...t){if(km===!0&&(km=!1,zi===null&&lh.get("logging_enabled")===!0&&fA(!0)),zi){const e=Oo.apply(null,t);zi(e)}},Do=function(t){return function(...e){mt(t,...e)}},ch=function(...t){const e="FIREBASE INTERNAL ERROR: "+Oo(...t);Nr.error(e)},Gi=function(...t){const e=`FIREBASE FATAL ERROR: ${Oo(...t)}`;throw Nr.error(e),new Error(e)},jt=function(...t){const e="FIREBASE WARNING: "+Oo(...t);Nr.warn(e)},dA=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&jt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Iv=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},pA=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Vr="[MIN_NAME]",Yi="[MAX_NAME]",as=function(t,e){if(t===e)return 0;if(t===Vr||e===Yi)return-1;if(e===Vr||t===Yi)return 1;{const n=Rm(t),i=Rm(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},mA=function(t,e){return t===e?0:t<e?-1:1},bs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+lt(e))},zf=function(t){if(typeof t!="object"||t===null)return lt(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=lt(e[i]),n+=":",n+=zf(t[e[i]]);return n+="}",n},Cv=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let r=0;r<n;r+=e)r+e>n?i.push(t.substring(r,n)):i.push(t.substring(r,r+e));return i};function Gt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Sv=function(t){D(!Iv(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let r,s,o,a,l;t===0?(s=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),s=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(r?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},gA=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},yA=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},_A=new RegExp("^-?(0*)\\d{1,10}$"),vA=-2147483648,bA=2147483647,Rm=function(t){if(_A.test(t)){const e=Number(t);if(e>=vA&&e<=bA)return e}return null},Po=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw jt("Exception was thrown by user callback.",n),e},Math.floor(0))}},EA=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Fs=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class wA{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){jt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(mt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',jt(e)}}class uh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}uh.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf="5",Av="v",kv="s",Rv="r",Nv="f",xv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ov="ls",Dv="p",hh="ac",Pv="websocket",Mv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(e,n,i,r,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Mi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Mi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function CA(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Lv(t,e,n){D(typeof e=="string","typeof type must == string"),D(typeof n=="object","typeof params must == object");let i;if(e===Pv)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Mv)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);CA(t)&&(n.ns=t.namespace);const r=[];return Gt(n,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(){this.counters_={}}incrementCounter(e,n=1){Qn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return h1(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu={},cu={};function Kf(t){const e=t.toString();return lu[e]||(lu[e]=new SA),lu[e]}function AA(t,e){const n=t.toString();return cu[n]||(cu[n]=e()),cu[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&Po(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm="start",RA="close",NA="pLPCommand",xA="pRTLPCB",Fv="id",Uv="pw",Vv="ser",OA="cb",DA="seg",PA="ts",MA="d",LA="dframe",$v=1870,Bv=30,FA=$v-Bv,UA=25e3,VA=3e4;class _r{constructor(e,n,i,r,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Do(e),this.stats_=Kf(n),this.urlFn=l=>(this.appCheckToken&&(l[hh]=this.appCheckToken),Lv(n,Mv,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new kA(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(VA)),pA(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Wf((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Nm)this.id=a,this.password=l;else if(o===RA)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Nm]="t",i[Vv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[OA]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Av]=Hf,this.transportSessionId&&(i[kv]=this.transportSessionId),this.lastSessionId&&(i[Ov]=this.lastSessionId),this.applicationId&&(i[Dv]=this.applicationId),this.appCheckToken&&(i[hh]=this.appCheckToken),typeof location<"u"&&location.hostname&&xv.test(location.hostname)&&(i[Rv]=Nv);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){_r.forceAllow_=!0}static forceDisallow(){_r.forceDisallow_=!0}static isAvailable(){return _r.forceAllow_?!0:!_r.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!gA()&&!yA()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=lt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=q_(n),r=Cv(i,FA);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[LA]="t",i[Fv]=e,i[Uv]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=lt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Wf{constructor(e,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=hA(),window[NA+this.uniqueCallbackIdentifier]=e,window[xA+this.uniqueCallbackIdentifier]=n,this.myIFrame=Wf.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){mt("frame writing exception"),a.stack&&mt(a.stack),mt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||mt("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Fv]=this.myID,e[Uv]=this.myPW,e[Vv]=this.currentSerial;let n=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Bv+i.length<=$v;){const o=this.pendingSegs.shift();i=i+"&"+DA+r+"="+o.seg+"&"+PA+r+"="+o.ts+"&"+MA+r+"="+o.d,r++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(i,Math.floor(UA)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{mt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A=16384,BA=45e3;let il=null;typeof MozWebSocket<"u"?il=MozWebSocket:typeof WebSocket<"u"&&(il=WebSocket);class Zt{constructor(e,n,i,r,s,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Do(this.connId),this.stats_=Kf(n),this.connURL=Zt.connectionURL_(n,o,a,r,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,r,s){const o={};return o[Av]=Hf,typeof location<"u"&&location.hostname&&xv.test(location.hostname)&&(o[Rv]=Nv),n&&(o[kv]=n),i&&(o[Ov]=i),r&&(o[hh]=r),s&&(o[Dv]=s),Lv(e,Pv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Mi.set("previous_websocket_failure",!0);try{let i;Q_(),this.mySock=new il(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){Zt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&il!==null&&!Zt.forceDisallow_}static previouslyFailed(){return Mi.isInMemoryStorage||Mi.get("previous_websocket_failure")===!0}markConnectionHealthy(){Mi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=ro(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(D(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=lt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Cv(n,$A);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(BA))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Zt.responsesRequiredToBeHealthy=2;Zt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[_r,Zt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Zt&&Zt.isAvailable();let i=n&&!Zt.previouslyFailed();if(e.webSocketOnly&&(n||jt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Zt];else{const r=this.transports_=[];for(const s of ao.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);ao.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ao.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA=6e4,zA=5e3,HA=10*1024,KA=100*1024,uu="t",xm="d",WA="s",Om="r",qA="e",Dm="o",Pm="a",Mm="n",Lm="p",GA="h";class YA{constructor(e,n,i,r,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Do("c:"+this.id+":"),this.transportManager_=new ao(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Fs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>KA?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>HA?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(uu in e){const n=e[uu];n===Pm?this.upgradeIfSecondaryHealthy_():n===Om?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Dm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=bs("t",e),i=bs("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Lm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Pm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Mm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=bs("t",e),i=bs("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=bs(uu,e);if(xm in e){const i=e[xm];if(n===GA){const r=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===Mm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===WA?this.onConnectionShutdown_(i):n===Om?this.onReset_(i):n===qA?ch("Server Error: "+i):n===Dm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ch("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Hf!==i&&jt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Fs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(jA))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Fs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(zA))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Lm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Mi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{put(e,n,i,r){}merge(e,n,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e){this.allowedEvents_=e,this.listeners_={},D(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const r=this.getInitialEvent(e);r&&n.apply(i,r)}off(e,n,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===n&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(e){D(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl extends zv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Pf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new rl}getInitialEvent(e){return D(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm=32,Um=768;class Me{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ie(){return new Me("")}function ue(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function di(t){return t.pieces_.length-t.pieceNum_}function Re(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Me(t.pieces_,e)}function Hv(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function QA(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Kv(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Wv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Me(e,0)}function rt(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof Me)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new Me(n,0)}function le(t){return t.pieceNum_>=t.pieces_.length}function qt(t,e){const n=ue(t),i=ue(e);if(n===null)return e;if(n===i)return qt(Re(t),Re(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function qv(t,e){if(di(t)!==di(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function nn(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(di(t)>di(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class XA{constructor(e,n){this.errorPrefix_=n,this.parts_=Kv(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=nc(this.parts_[i]);Gv(this)}}function JA(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=nc(e),Gv(t)}function ZA(t){const e=t.parts_.pop();t.byteLength_-=nc(e),t.parts_.length>0&&(t.byteLength_-=1)}function Gv(t){if(t.byteLength_>Um)throw new Error(t.errorPrefix_+"has a key path longer than "+Um+" bytes ("+t.byteLength_+").");if(t.parts_.length>Fm)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Fm+") or object contains a cycle "+Ni(t))}function Ni(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf extends zv{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new qf}getInitialEvent(e){return D(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es=1e3,ek=60*5*1e3,Vm=30*1e3,tk=1.3,nk=3e4,ik="server_kill",$m=3;class Fn extends jv{constructor(e,n,i,r,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Fn.nextPersistentConnectionId_++,this.log_=Do("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Es,this.maxReconnectDelay_=ek,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Q_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");qf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&rl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const r=++this.requestNumber_,s={r,a:e,b:n};this.log_(lt(s)),D(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const n=new io,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,i,r){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),D(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:i};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;Fn.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Qn(e,"w")){const i=Ur(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();jt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||k1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Vm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=A1(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,n)}sendUnlisten_(e,n,i,r){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,r){const s={p:n,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,i,r){this.putInternal("p",e,n,i,r)}merge(e,n,i,r){this.putInternal("m",e,n,i,r)}putInternal(e,n,i,r,s){this.initConnection_();const o={p:n,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+lt(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ch("Unrecognized action received from server: "+lt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){D(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Es,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Es,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>nk&&(this.reconnectDelay_=Es),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*tk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Fn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(h){D(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?mt("getToken() completed but was canceled"):(mt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new YA(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,d=>{jt(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(ik)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&jt(h),l())}}}interrupt(e){mt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){mt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],im(this.interruptReasons_)&&(this.reconnectDelay_=Es,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(s=>zf(s)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const i=new Me(e).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(n),s.delete(n),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,n){mt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=$m&&(this.reconnectDelay_=Vm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){mt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=$m&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Ev.replace(/\./g,"-")]=1,Pf()?e["framework.cordova"]=1:Y_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=rl.getInstance().currentlyOnline();return im(this.interruptReasons_)&&e}}Fn.nextPersistentConnectionId_=0;Fn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new he(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new he(Vr,e),r=new he(Vr,n);return this.compare(i,r)!==0}minPost(){return he.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fa;class Yv extends ic{static get __EMPTY_NODE(){return fa}static set __EMPTY_NODE(e){fa=e}compare(e,n){return as(e.name,n.name)}isDefinedOn(e){throw rs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return he.MIN}maxPost(){return new he(Yi,fa)}makePost(e,n){return D(typeof e=="string","KeyIndex indexValue must always be a string."),new he(e,fa)}toString(){return".key"}}const xr=new Yv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,n,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class nt{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i??nt.RED,this.left=r??Nt.EMPTY_NODE,this.right=s??Nt.EMPTY_NODE}copy(e,n,i,r,s){return new nt(e??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Nt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,r;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return Nt.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}nt.RED=!0;nt.BLACK=!1;class rk{copy(e,n,i,r,s){return this}insert(e,n,i){return new nt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Nt{constructor(e,n=Nt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Nt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,nt.BLACK,null,null))}remove(e){return new Nt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,nt.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,r=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new da(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new da(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new da(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new da(this.root_,null,this.comparator_,!0,e)}}Nt.EMPTY_NODE=new rk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sk(t,e){return as(t.name,e.name)}function Gf(t,e){return as(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fh;function ok(t){fh=t}const Qv=function(t){return typeof t=="number"?"number:"+Sv(t):"string:"+t},Xv=function(t){if(t.isLeafNode()){const e=t.val();D(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Qn(e,".sv"),"Priority must be a string or number.")}else D(t===fh||t.isEmpty(),"priority of unexpected type.");D(t===fh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bm;class et{constructor(e,n=et.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,D(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Xv(this.priorityNode_)}static set __childrenNodeConstructor(e){Bm=e}static get __childrenNodeConstructor(){return Bm}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new et(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:et.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return le(e)?this:ue(e)===".priority"?this.priorityNode_:et.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:et.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=ue(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(D(i!==".priority"||di(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,et.__childrenNodeConstructor.EMPTY_NODE.updateChild(Re(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Qv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Sv(this.value_):e+=this.value_,this.lazyHash_=Tv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===et.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof et.__childrenNodeConstructor?-1:(D(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,r=et.VALUE_TYPE_ORDER.indexOf(n),s=et.VALUE_TYPE_ORDER.indexOf(i);return D(r>=0,"Unknown leaf type: "+n),D(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}et.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jv,Zv;function ak(t){Jv=t}function lk(t){Zv=t}class ck extends ic{compare(e,n){const i=e.node.getPriority(),r=n.node.getPriority(),s=i.compareTo(r);return s===0?as(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return he.MIN}maxPost(){return new he(Yi,new et("[PRIORITY-POST]",Zv))}makePost(e,n){const i=Jv(e);return new he(n,new et("[PRIORITY-POST]",i))}toString(){return".priority"}}const bt=new ck;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk=Math.log(2);class hk{constructor(e){const n=s=>parseInt(Math.log(s)/uk,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const sl=function(t,e,n,i){t.sort(e);const r=function(l,c){const u=c-l;let h,f;if(u===0)return null;if(u===1)return h=t[l],f=n?n(h):h,new nt(f,h.node,nt.BLACK,null,null);{const d=parseInt(u/2,10)+l,m=r(l,d),y=r(d+1,c);return h=t[d],f=n?n(h):h,new nt(f,h.node,nt.BLACK,m,y)}},s=function(l){let c=null,u=null,h=t.length;const f=function(m,y){const b=h-m,_=h;h-=m;const v=r(b+1,_),E=t[b],I=n?n(E):E;d(new nt(I,E.node,y,null,v))},d=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const y=l.nextBitIsOne(),b=Math.pow(2,l.count-(m+1));y?f(b,nt.BLACK):(f(b,nt.BLACK),f(b,nt.RED))}return u},o=new hk(t.length),a=s(o);return new Nt(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hu;const fr={};class Pn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return D(fr&&bt,"ChildrenNode.ts has not been loaded"),hu=hu||new Pn({".priority":fr},{".priority":bt}),hu}get(e){const n=Ur(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Nt?n:null}hasIndex(e){return Qn(this.indexSet_,e.toString())}addIndex(e,n){D(e!==xr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=n.getIterator(he.Wrap);let o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();let a;r?a=sl(i,e.getCompare()):a=fr;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Pn(u,c)}addToIndexes(e,n){const i=Xa(this.indexes_,(r,s)=>{const o=Ur(this.indexSet_,s);if(D(o,"Missing index implementation for "+s),r===fr)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(he.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),sl(a,o.getCompare())}else return fr;else{const a=n.get(e.name);let l=r;return a&&(l=l.remove(new he(e.name,a))),l.insert(e,e.node)}});return new Pn(i,this.indexSet_)}removeFromIndexes(e,n){const i=Xa(this.indexes_,r=>{if(r===fr)return r;{const s=n.get(e.name);return s?r.remove(new he(e.name,s)):r}});return new Pn(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ws;class be{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Xv(this.priorityNode_),this.children_.isEmpty()&&D(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ws||(ws=new be(new Nt(Gf),null,Pn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ws}updatePriority(e){return this.children_.isEmpty()?this:new be(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ws:n}}getChild(e){const n=ue(e);return n===null?this:this.getImmediateChild(n).getChild(Re(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(D(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new he(e,n);let r,s;n.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?ws:this.priorityNode_;return new be(r,o,s)}}updateChild(e,n){const i=ue(e);if(i===null)return n;{D(ue(e)!==".priority"||di(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(Re(e),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,r=0,s=!0;if(this.forEachChild(bt,(o,a)=>{n[o]=a.val(e),i++,s&&be.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Qv(this.getPriority().val())+":"),this.forEachChild(bt,(n,i)=>{const r=i.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":Tv(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new he(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new he(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new he(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,he.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,he.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Mo?-1:0}withIndex(e){if(e===xr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new be(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===xr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(bt),r=n.getIterator(bt);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===xr?null:this.indexMap_.get(e.toString())}}be.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class fk extends be{constructor(){super(new Nt(Gf),be.EMPTY_NODE,Pn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return be.EMPTY_NODE}isEmpty(){return!1}}const Mo=new fk;Object.defineProperties(he,{MIN:{value:new he(Vr,be.EMPTY_NODE)},MAX:{value:new he(Yi,Mo)}});Yv.__EMPTY_NODE=be.EMPTY_NODE;et.__childrenNodeConstructor=be;ok(Mo);lk(Mo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dk=!0;function gt(t,e=null){if(t===null)return be.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),D(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new et(n,gt(e))}if(!(t instanceof Array)&&dk){const n=[];let i=!1;if(Gt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=gt(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new he(o,l)))}}),n.length===0)return be.EMPTY_NODE;const s=sl(n,sk,o=>o.name,Gf);if(i){const o=sl(n,bt.getCompare());return new be(s,gt(e),new Pn({".priority":o},{".priority":bt}))}else return new be(s,gt(e),Pn.Default)}else{let n=be.EMPTY_NODE;return Gt(t,(i,r)=>{if(Qn(t,i)&&i.substring(0,1)!=="."){const s=gt(r);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(i,s))}}),n.updatePriority(gt(e))}}ak(gt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk extends ic{constructor(e){super(),this.indexPath_=e,D(!le(e)&&ue(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),r=this.extractChild(n.node),s=i.compareTo(r);return s===0?as(e.name,n.name):s}makePost(e,n){const i=gt(e),r=be.EMPTY_NODE.updateChild(this.indexPath_,i);return new he(n,r)}maxPost(){const e=be.EMPTY_NODE.updateChild(this.indexPath_,Mo);return new he(Yi,e)}toString(){return Kv(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk extends ic{compare(e,n){const i=e.node.compareTo(n.node);return i===0?as(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return he.MIN}maxPost(){return he.MAX}makePost(e,n){const i=gt(e);return new he(n,i)}toString(){return".value"}}const gk=new mk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yk(t){return{type:"value",snapshotNode:t}}function _k(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function vk(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function jm(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function bk(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=bt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return D(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return D(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Vr}hasEnd(){return this.endSet_}getIndexEndValue(){return D(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return D(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Yi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return D(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===bt}copy(){const e=new Yf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function zm(t){const e={};if(t.isDefault())return e;let n;if(t.index_===bt?n="$priority":t.index_===gk?n="$value":t.index_===xr?n="$key":(D(t.index_ instanceof pk,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=lt(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=lt(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+lt(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=lt(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+lt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Hm(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==bt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol extends jv{constructor(e,n,i,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=Do("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(D(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=ol.getListenId_(e,i),a={};this.listens_[o]=a;const l=zm(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(s,h,!1,i),Ur(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",r(f,null)}})}unlisten(e,n){const i=ol.getListenId_(e,n);delete this.listens_[i]}get(e){const n=zm(e._queryParams),i=e._path.toString(),r=new io;return this.restRequest_(i+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(i,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(n.auth=r.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Mf(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ro(a.responseText)}catch{jt("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&jt("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(){this.rootNode_=be.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(){return{value:null,children:new Map}}function eb(t,e,n){if(le(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=ue(e);t.children.has(i)||t.children.set(i,al());const r=t.children.get(i);e=Re(e),eb(r,e,n)}}function dh(t,e,n){t.value!==null?n(e,t.value):wk(t,(i,r)=>{const s=new Me(e.toString()+"/"+i);dh(r,s,n)})}function wk(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Gt(this.last_,(i,r)=>{n[i]=n[i]-r}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km=10*1e3,Ik=30*1e3,Ck=5*60*1e3;class Sk{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Tk(e);const i=Km+(Ik-Km)*Math.random();Fs(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;Gt(e,(r,s)=>{s>0&&Qn(this.statsToReport_,r)&&(n[r]=s,i=!0)}),i&&this.server_.reportStats(n),Fs(this.reportStats_.bind(this),Math.floor(Math.random()*2*Ck))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(bn||(bn={}));function tb(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function nb(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ib(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=bn.ACK_USER_WRITE,this.source=tb()}operationForChild(e){if(le(this.path)){if(this.affectedTree.value!=null)return D(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Me(e));return new ll(Ie(),n,this.revert)}}else return D(ue(this.path)===e,"operationForChild called for unrelated child."),new ll(Re(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=bn.OVERWRITE}operationForChild(e){return le(this.path)?new Qi(this.source,Ie(),this.snap.getImmediateChild(e)):new Qi(this.source,Re(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=bn.MERGE}operationForChild(e){if(le(this.path)){const n=this.children.subtree(new Me(e));return n.isEmpty()?null:n.value?new Qi(this.source,Ie(),n.value):new lo(this.source,Ie(),n)}else return D(ue(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new lo(this.source,Re(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(le(e))return this.isFullyInitialized()&&!this.filtered_;const n=ue(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function Ak(t,e,n,i){const r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(bk(o.childName,o.snapshotNode))}),Ts(t,r,"child_removed",e,i,n),Ts(t,r,"child_added",e,i,n),Ts(t,r,"child_moved",s,i,n),Ts(t,r,"child_changed",e,i,n),Ts(t,r,"value",e,i,n),r}function Ts(t,e,n,i,r,s){const o=i.filter(a=>a.type===n);o.sort((a,l)=>Rk(t,a,l)),o.forEach(a=>{const l=kk(t,a,s);r.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function kk(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Rk(t,e,n){if(e.childName==null||n.childName==null)throw rs("Should only compare child_ events.");const i=new he(e.childName,e.snapshotNode),r=new he(n.childName,n.snapshotNode);return t.index_.compare(i,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rb(t,e){return{eventCache:t,serverCache:e}}function Us(t,e,n,i){return rb(new Qf(e,n,i),t.serverCache)}function sb(t,e,n,i){return rb(t.eventCache,new Qf(e,n,i))}function ph(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Xi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fu;const Nk=()=>(fu||(fu=new Nt(mA)),fu);class Ae{constructor(e,n=Nk()){this.value=e,this.children=n}static fromObject(e){let n=new Ae(null);return Gt(e,(i,r)=>{n=n.set(new Me(i),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ie(),value:this.value};if(le(e))return null;{const i=ue(e),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(Re(e),n);return s!=null?{path:rt(new Me(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(le(e))return this;{const n=ue(e),i=this.children.get(n);return i!==null?i.subtree(Re(e)):new Ae(null)}}set(e,n){if(le(e))return new Ae(n,this.children);{const i=ue(e),s=(this.children.get(i)||new Ae(null)).set(Re(e),n),o=this.children.insert(i,s);return new Ae(this.value,o)}}remove(e){if(le(e))return this.children.isEmpty()?new Ae(null):new Ae(null,this.children);{const n=ue(e),i=this.children.get(n);if(i){const r=i.remove(Re(e));let s;return r.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,r),this.value===null&&s.isEmpty()?new Ae(null):new Ae(this.value,s)}else return this}}get(e){if(le(e))return this.value;{const n=ue(e),i=this.children.get(n);return i?i.get(Re(e)):null}}setTree(e,n){if(le(e))return n;{const i=ue(e),s=(this.children.get(i)||new Ae(null)).setTree(Re(e),n);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new Ae(this.value,o)}}fold(e){return this.fold_(Ie(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(rt(e,r),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,Ie(),n)}findOnPath_(e,n,i){const r=this.value?i(n,this.value):!1;if(r)return r;if(le(e))return null;{const s=ue(e),o=this.children.get(s);return o?o.findOnPath_(Re(e),rt(n,s),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ie(),n)}foreachOnPath_(e,n,i){if(le(e))return this;{this.value&&i(n,this.value);const r=ue(e),s=this.children.get(r);return s?s.foreachOnPath_(Re(e),rt(n,r),i):new Ae(null)}}foreach(e){this.foreach_(Ie(),e)}foreach_(e,n){this.children.inorderTraversal((i,r)=>{r.foreach_(rt(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.writeTree_=e}static empty(){return new cn(new Ae(null))}}function Vs(t,e,n){if(le(e))return new cn(new Ae(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let s=i.value;const o=qt(r,e);return s=s.updateChild(o,n),new cn(t.writeTree_.set(r,s))}else{const r=new Ae(n),s=t.writeTree_.setTree(e,r);return new cn(s)}}}function Wm(t,e,n){let i=t;return Gt(n,(r,s)=>{i=Vs(i,rt(e,r),s)}),i}function qm(t,e){if(le(e))return cn.empty();{const n=t.writeTree_.setTree(e,new Ae(null));return new cn(n)}}function mh(t,e){return ir(t,e)!=null}function ir(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(qt(n.path,e)):null}function Gm(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(bt,(i,r)=>{e.push(new he(i,r))}):t.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new he(i,r.value))}),e}function ci(t,e){if(le(e))return t;{const n=ir(t,e);return n!=null?new cn(new Ae(n)):new cn(t.writeTree_.subtree(e))}}function gh(t){return t.writeTree_.isEmpty()}function $r(t,e){return ob(Ie(),t.writeTree_,e)}function ob(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(D(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):n=ob(rt(t,r),s,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(rt(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ab(t,e){return fb(e,t)}function xk(t,e,n,i,r){D(i>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:r}),r&&(t.visibleWrites=Vs(t.visibleWrites,e,n)),t.lastWriteId=i}function Ok(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function Dk(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);D(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let r=i.visible,s=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Pk(a,i.path)?r=!1:nn(i.path,a.path)&&(s=!0)),o--}if(r){if(s)return Mk(t),!0;if(i.snap)t.visibleWrites=qm(t.visibleWrites,i.path);else{const a=i.children;Gt(a,l=>{t.visibleWrites=qm(t.visibleWrites,rt(i.path,l))})}return!0}else return!1}function Pk(t,e){if(t.snap)return nn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&nn(rt(t.path,n),e))return!0;return!1}function Mk(t){t.visibleWrites=lb(t.allWrites,Lk,Ie()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Lk(t){return t.visible}function lb(t,e,n){let i=cn.empty();for(let r=0;r<t.length;++r){const s=t[r];if(e(s)){const o=s.path;let a;if(s.snap)nn(n,o)?(a=qt(n,o),i=Vs(i,a,s.snap)):nn(o,n)&&(a=qt(o,n),i=Vs(i,Ie(),s.snap.getChild(a)));else if(s.children){if(nn(n,o))a=qt(n,o),i=Wm(i,a,s.children);else if(nn(o,n))if(a=qt(o,n),le(a))i=Wm(i,Ie(),s.children);else{const l=Ur(s.children,ue(a));if(l){const c=l.getChild(Re(a));i=Vs(i,Ie(),c)}}}else throw rs("WriteRecord should have .snap or .children")}}return i}function cb(t,e,n,i,r){if(!i&&!r){const s=ir(t.visibleWrites,e);if(s!=null)return s;{const o=ci(t.visibleWrites,e);if(gh(o))return n;if(n==null&&!mh(o,Ie()))return null;{const a=n||be.EMPTY_NODE;return $r(o,a)}}}else{const s=ci(t.visibleWrites,e);if(!r&&gh(s))return n;if(!r&&n==null&&!mh(s,Ie()))return null;{const o=function(c){return(c.visible||r)&&(!i||!~i.indexOf(c.writeId))&&(nn(c.path,e)||nn(e,c.path))},a=lb(t.allWrites,o,e),l=n||be.EMPTY_NODE;return $r(a,l)}}}function Fk(t,e,n){let i=be.EMPTY_NODE;const r=ir(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(bt,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(n){const s=ci(t.visibleWrites,e);return n.forEachChild(bt,(o,a)=>{const l=$r(ci(s,new Me(o)),a);i=i.updateImmediateChild(o,l)}),Gm(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=ci(t.visibleWrites,e);return Gm(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Uk(t,e,n,i,r){D(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=rt(e,n);if(mh(t.visibleWrites,s))return null;{const o=ci(t.visibleWrites,s);return gh(o)?r.getChild(n):$r(o,r.getChild(n))}}function Vk(t,e,n,i){const r=rt(e,n),s=ir(t.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(n)){const o=ci(t.visibleWrites,r);return $r(o,i.getNode().getImmediateChild(n))}else return null}function $k(t,e){return ir(t.visibleWrites,e)}function Bk(t,e,n,i,r,s,o){let a;const l=ci(t.visibleWrites,e),c=ir(l,Ie());if(c!=null)a=c;else if(n!=null)a=$r(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let d=f.getNext();for(;d&&u.length<r;)h(d,i)!==0&&u.push(d),d=f.getNext();return u}else return[]}function jk(){return{visibleWrites:cn.empty(),allWrites:[],lastWriteId:-1}}function yh(t,e,n,i){return cb(t.writeTree,t.treePath,e,n,i)}function ub(t,e){return Fk(t.writeTree,t.treePath,e)}function Ym(t,e,n,i){return Uk(t.writeTree,t.treePath,e,n,i)}function cl(t,e){return $k(t.writeTree,rt(t.treePath,e))}function zk(t,e,n,i,r,s){return Bk(t.writeTree,t.treePath,e,n,i,r,s)}function Xf(t,e,n){return Vk(t.writeTree,t.treePath,e,n)}function hb(t,e){return fb(rt(t.treePath,e),t.writeTree)}function fb(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;D(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),D(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(i,jm(i,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(i,vk(i,r.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(i,_k(i,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(i,jm(i,e.snapshotNode,r.oldSnap));else throw rs("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const db=new Kk;class Jf{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Qf(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Xf(this.writes_,e,i)}}getChildAfterChild(e,n,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Xi(this.viewCache_),s=zk(this.writes_,r,n,1,i,e);return s.length===0?null:s[0]}}function Wk(t,e){D(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),D(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function qk(t,e,n,i,r){const s=new Hk;let o,a;if(n.type===bn.OVERWRITE){const c=n;c.source.fromUser?o=_h(t,e,c.path,c.snap,i,r,s):(D(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!le(c.path),o=ul(t,e,c.path,c.snap,i,r,a,s))}else if(n.type===bn.MERGE){const c=n;c.source.fromUser?o=Yk(t,e,c.path,c.children,i,r,s):(D(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=vh(t,e,c.path,c.children,i,r,a,s))}else if(n.type===bn.ACK_USER_WRITE){const c=n;c.revert?o=Jk(t,e,c.path,i,r,s):o=Qk(t,e,c.path,c.affectedTree,i,r,s)}else if(n.type===bn.LISTEN_COMPLETE)o=Xk(t,e,n.path,i,s);else throw rs("Unknown operation type: "+n.type);const l=s.getChanges();return Gk(e,o,l),{viewCache:o,changes:l}}function Gk(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=ph(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(yk(ph(e)))}}function pb(t,e,n,i,r,s){const o=e.eventCache;if(cl(i,n)!=null)return e;{let a,l;if(le(n))if(D(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Xi(e),u=c instanceof be?c:be.EMPTY_NODE,h=ub(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const c=yh(i,Xi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=ue(n);if(c===".priority"){D(di(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Ym(i,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Re(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=Ym(i,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=Xf(i,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,r,s):a=o.getNode()}}return Us(e,a,o.isFullyInitialized()||le(n),t.filter.filtersNodes())}}function ul(t,e,n,i,r,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(le(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const d=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),d,null)}else{const d=ue(n);if(!l.isCompleteForPath(n)&&di(n)>1)return e;const m=Re(n),b=l.getNode().getImmediateChild(d).updateChild(m,i);d===".priority"?c=u.updatePriority(l.getNode(),b):c=u.updateChild(l.getNode(),d,b,m,db,null)}const h=sb(e,c,l.isFullyInitialized()||le(n),u.filtersNodes()),f=new Jf(r,h,s);return pb(t,h,n,r,f,a)}function _h(t,e,n,i,r,s,o){const a=e.eventCache;let l,c;const u=new Jf(r,e,s);if(le(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Us(e,c,!0,t.filter.filtersNodes());else{const h=ue(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=Us(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=Re(n),d=a.getNode().getImmediateChild(h);let m;if(le(f))m=i;else{const y=u.getCompleteChild(h);y!=null?Hv(f)===".priority"&&y.getChild(Wv(f)).isEmpty()?m=y:m=y.updateChild(f,i):m=be.EMPTY_NODE}if(d.equals(m))l=e;else{const y=t.filter.updateChild(a.getNode(),h,m,f,u,o);l=Us(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Qm(t,e){return t.eventCache.isCompleteForChild(e)}function Yk(t,e,n,i,r,s,o){let a=e;return i.foreach((l,c)=>{const u=rt(n,l);Qm(e,ue(u))&&(a=_h(t,a,u,c,r,s,o))}),i.foreach((l,c)=>{const u=rt(n,l);Qm(e,ue(u))||(a=_h(t,a,u,c,r,s,o))}),a}function Xm(t,e,n){return n.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function vh(t,e,n,i,r,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;le(n)?c=i:c=new Ae(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const d=e.serverCache.getNode().getImmediateChild(h),m=Xm(t,d,f);l=ul(t,l,new Me(h),m,r,s,o,a)}}),c.children.inorderTraversal((h,f)=>{const d=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!d){const m=e.serverCache.getNode().getImmediateChild(h),y=Xm(t,m,f);l=ul(t,l,new Me(h),y,r,s,o,a)}}),l}function Qk(t,e,n,i,r,s,o){if(cl(r,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(le(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ul(t,e,n,l.getNode().getChild(n),r,s,a,o);if(le(n)){let c=new Ae(null);return l.getNode().forEachChild(xr,(u,h)=>{c=c.set(new Me(u),h)}),vh(t,e,n,c,r,s,a,o)}else return e}else{let c=new Ae(null);return i.foreach((u,h)=>{const f=rt(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),vh(t,e,n,c,r,s,a,o)}}function Xk(t,e,n,i,r){const s=e.serverCache,o=sb(e,s.getNode(),s.isFullyInitialized()||le(n),s.isFiltered());return pb(t,o,n,i,db,r)}function Jk(t,e,n,i,r,s){let o;if(cl(i,n)!=null)return e;{const a=new Jf(i,e,r),l=e.eventCache.getNode();let c;if(le(n)||ue(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=yh(i,Xi(e));else{const h=e.serverCache.getNode();D(h instanceof be,"serverChildren would be complete if leaf node"),u=ub(i,h)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=ue(n);let h=Xf(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Re(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,be.EMPTY_NODE,Re(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=yh(i,Xi(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||cl(i,Ie())!=null,Us(e,c,o,t.filter.filtersNodes())}}function Zk(t,e){const n=Xi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!le(e)&&!n.getImmediateChild(ue(e)).isEmpty())?n.getChild(e):null}function Jm(t,e,n,i){e.type===bn.MERGE&&e.source.queryId!==null&&(D(Xi(t.viewCache_),"We should always have a full cache before handling merges"),D(ph(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,s=qk(t.processor_,r,e,n,i);return Wk(t.processor_,s.viewCache),D(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,eR(t,s.changes,s.viewCache.eventCache.getNode(),null)}function eR(t,e,n,i){const r=i?[i]:t.eventRegistrations_;return Ak(t.eventGenerator_,e,n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zm;function tR(t){D(!Zm,"__referenceConstructor has already been defined"),Zm=t}function Zf(t,e,n,i){const r=e.source.queryId;if(r!==null){const s=t.views.get(r);return D(s!=null,"SyncTree gave us an op for an invalid query."),Jm(s,e,n,i)}else{let s=[];for(const o of t.views.values())s=s.concat(Jm(o,e,n,i));return s}}function ed(t,e){let n=null;for(const i of t.views.values())n=n||Zk(i,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eg;function nR(t){D(!eg,"__referenceConstructor has already been defined"),eg=t}class tg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ae(null),this.pendingWriteTree_=jk(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function iR(t,e,n,i,r){return xk(t.pendingWriteTree_,e,n,i,r),r?sc(t,new Qi(tb(),e,n)):[]}function vr(t,e,n=!1){const i=Ok(t.pendingWriteTree_,e);if(Dk(t.pendingWriteTree_,e)){let s=new Ae(null);return i.snap!=null?s=s.set(Ie(),!0):Gt(i.children,o=>{s=s.set(new Me(o),!0)}),sc(t,new ll(i.path,s,n))}else return[]}function rc(t,e,n){return sc(t,new Qi(nb(),e,n))}function rR(t,e,n){const i=Ae.fromObject(n);return sc(t,new lo(nb(),e,i))}function sR(t,e,n,i){const r=_b(t,i);if(r!=null){const s=vb(r),o=s.path,a=s.queryId,l=qt(o,e),c=new Qi(ib(a),l,n);return bb(t,o,c)}else return[]}function oR(t,e,n,i){const r=_b(t,i);if(r){const s=vb(r),o=s.path,a=s.queryId,l=qt(o,e),c=Ae.fromObject(n),u=new lo(ib(a),l,c);return bb(t,o,u)}else return[]}function mb(t,e,n){const r=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=qt(o,e),c=ed(a,l);if(c)return c});return cb(r,e,s,n,!0)}function sc(t,e){return gb(e,t.syncPointTree_,null,ab(t.pendingWriteTree_,Ie()))}function gb(t,e,n,i){if(le(t.path))return yb(t,e,n,i);{const r=e.get(Ie());n==null&&r!=null&&(n=ed(r,Ie()));let s=[];const o=ue(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=hb(i,o);s=s.concat(gb(a,l,c,u))}return r&&(s=s.concat(Zf(r,t,i,n))),s}}function yb(t,e,n,i){const r=e.get(Ie());n==null&&r!=null&&(n=ed(r,Ie()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=hb(i,o),u=t.operationForChild(o);u&&(s=s.concat(yb(u,a,l,c)))}),r&&(s=s.concat(Zf(r,t,i,n))),s}function _b(t,e){return t.tagToQueryMap.get(e)}function vb(t){const e=t.indexOf("$");return D(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Me(t.substr(0,e))}}function bb(t,e,n){const i=t.syncPointTree_.get(e);D(i,"Missing sync point for query tag that we're tracking");const r=ab(t.pendingWriteTree_,e);return Zf(i,n,r,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new td(n)}node(){return this.node_}}class nd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=rt(this.path_,e);return new nd(this.syncTree_,n)}node(){return mb(this.syncTree_,this.path_)}}const aR=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ng=function(t,e,n){if(!t||typeof t!="object")return t;if(D(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return lR(t[".sv"],e,n);if(typeof t[".sv"]=="object")return cR(t[".sv"],e);D(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},lR=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:D(!1,"Unexpected server value: "+t)}},cR=function(t,e,n){t.hasOwnProperty("increment")||D(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&D(!1,"Unexpected increment value: "+i);const r=e.node();if(D(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},uR=function(t,e,n,i){return id(e,new nd(n,t),i)},hR=function(t,e,n){return id(t,new td(e),n)};function id(t,e,n){const i=t.getPriority().val(),r=ng(i,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=ng(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new et(a,gt(r)):t}else{const o=t;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new et(r))),o.forEachChild(bt,(a,l)=>{const c=id(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function sd(t,e){let n=e instanceof Me?e:new Me(e),i=t,r=ue(n);for(;r!==null;){const s=Ur(i.node.children,r)||{children:{},childCount:0};i=new rd(r,i,s),n=Re(n),r=ue(n)}return i}function ls(t){return t.node.value}function Eb(t,e){t.node.value=e,bh(t)}function wb(t){return t.node.childCount>0}function fR(t){return ls(t)===void 0&&!wb(t)}function oc(t,e){Gt(t.node.children,(n,i)=>{e(new rd(n,t,i))})}function Tb(t,e,n,i){n&&!i&&e(t),oc(t,r=>{Tb(r,e,!0,i)}),n&&i&&e(t)}function dR(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Lo(t){return new Me(t.parent===null?t.name:Lo(t.parent)+"/"+t.name)}function bh(t){t.parent!==null&&pR(t.parent,t.name,t)}function pR(t,e,n){const i=fR(n),r=Qn(t.node.children,e);i&&r?(delete t.node.children[e],t.node.childCount--,bh(t)):!i&&!r&&(t.node.children[e]=n.node,t.node.childCount++,bh(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR=/[\[\].#$\/\u0000-\u001F\u007F]/,gR=/[\[\].#$\u0000-\u001F\u007F]/,du=10*1024*1024,Ib=function(t){return typeof t=="string"&&t.length!==0&&!mR.test(t)},yR=function(t){return typeof t=="string"&&t.length!==0&&!gR.test(t)},_R=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),yR(t)},Cb=function(t,e,n){const i=n instanceof Me?new XA(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ni(i));if(typeof e=="function")throw new Error(t+"contains a function "+Ni(i)+" with contents = "+e.toString());if(Iv(e))throw new Error(t+"contains "+e.toString()+" "+Ni(i));if(typeof e=="string"&&e.length>du/3&&nc(e)>du)throw new Error(t+"contains a string greater than "+du+" utf8 bytes "+Ni(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(Gt(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Ib(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ni(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);JA(i,o),Cb(t,a,i),ZA(i)}),r&&s)throw new Error(t+' contains ".value" child '+Ni(i)+" in addition to actual children.")}},vR=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ib(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!_R(n))throw new Error(D1(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ER(t,e){let n=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();n!==null&&!qv(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(r)}n&&t.eventLists_.push(n)}function rr(t,e,n){ER(t,n),wR(t,i=>nn(i,e)||nn(e,i))}function wR(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const r=t.eventLists_[i];if(r){const s=r.path;e(s)?(TR(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function TR(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();zi&&mt("event: "+n.toString()),Po(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR="repo_interrupt",CR=25;class SR{constructor(e,n,i,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new bR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=al(),this.transactionQueueTree_=new rd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function AR(t,e,n){if(t.stats_=Kf(t.repoInfo_),t.forceRestClient_||EA())t.server_=new ol(t.repoInfo_,(i,r,s,o)=>{ig(t,i,r,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>rg(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{lt(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new Fn(t.repoInfo_,e,(i,r,s,o)=>{ig(t,i,r,s,o)},i=>{rg(t,i)},i=>{RR(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=AA(t.repoInfo_,()=>new Sk(t.stats_,t.server_)),t.infoData_=new Ek,t.infoSyncTree_=new tg({startListening:(i,r,s,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=rc(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),od(t,"connected",!1),t.serverSyncTree_=new tg({startListening:(i,r,s,o)=>(t.server_.listen(i,s,r,(a,l)=>{const c=o(a,l);rr(t.eventQueue_,i._path,c)}),[]),stopListening:(i,r)=>{t.server_.unlisten(i,r)}})}function kR(t){const n=t.infoData_.getNode(new Me(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Sb(t){return aR({timestamp:kR(t)})}function ig(t,e,n,i,r){t.dataUpdateCount++;const s=new Me(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(i){const l=Xa(n,c=>gt(c));o=oR(t.serverSyncTree_,s,l,r)}else{const l=gt(n);o=sR(t.serverSyncTree_,s,l,r)}else if(i){const l=Xa(n,c=>gt(c));o=rR(t.serverSyncTree_,s,l)}else{const l=gt(n);o=rc(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=ld(t,s)),rr(t.eventQueue_,a,o)}function rg(t,e){od(t,"connected",e),e===!1&&xR(t)}function RR(t,e){Gt(e,(n,i)=>{od(t,n,i)})}function od(t,e,n){const i=new Me("/.info/"+e),r=gt(n);t.infoData_.updateSnapshot(i,r);const s=rc(t.infoSyncTree_,i,r);rr(t.eventQueue_,i,s)}function NR(t){return t.nextWriteId_++}function xR(t){Ab(t,"onDisconnectEvents");const e=Sb(t),n=al();dh(t.onDisconnect_,Ie(),(r,s)=>{const o=uR(r,s,t.serverSyncTree_,e);eb(n,r,o)});let i=[];dh(n,Ie(),(r,s)=>{i=i.concat(rc(t.serverSyncTree_,r,s));const o=MR(t,r);ld(t,o)}),t.onDisconnect_=al(),rr(t.eventQueue_,Ie(),i)}function OR(t){t.persistentConnection_&&t.persistentConnection_.interrupt(IR)}function Ab(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),mt(n,...e)}function kb(t,e,n){return mb(t.serverSyncTree_,e,n)||be.EMPTY_NODE}function ad(t,e=t.transactionQueueTree_){if(e||ac(t,e),ls(e)){const n=Nb(t,e);D(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&DR(t,Lo(e),n)}else wb(e)&&oc(e,n=>{ad(t,n)})}function DR(t,e,n){const i=n.map(c=>c.currentWriteId),r=kb(t,e,i);let s=r;const o=r.hash();for(let c=0;c<n.length;c++){const u=n[c];D(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=qt(e,u.path);s=s.updateChild(h,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Ab(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(vr(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();ac(t,sd(t.transactionQueueTree_,e)),ad(t,t.transactionQueueTree_),rr(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)Po(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{jt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}ld(t,e)}},o)}function ld(t,e){const n=Rb(t,e),i=Lo(n),r=Nb(t,n);return PR(t,r,i),i}function PR(t,e,n){if(e.length===0)return;const i=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=qt(n,l.path);let u=!1,h;if(D(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,r=r.concat(vr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=CR)u=!0,h="maxretry",r=r.concat(vr(t.serverSyncTree_,l.currentWriteId,!0));else{const f=kb(t,l.path,o);l.currentInputSnapshot=f;const d=e[a].update(f.val());if(d!==void 0){Cb("transaction failed: Data returned ",d,l.path);let m=gt(d);typeof d=="object"&&d!=null&&Qn(d,".priority")||(m=m.updatePriority(f.getPriority()));const b=l.currentWriteId,_=Sb(t),v=hR(m,f,_);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=v,l.currentWriteId=NR(t),o.splice(o.indexOf(b),1),r=r.concat(iR(t.serverSyncTree_,l.path,v,l.currentWriteId,l.applyLocally)),r=r.concat(vr(t.serverSyncTree_,b,!0))}else u=!0,h="nodata",r=r.concat(vr(t.serverSyncTree_,l.currentWriteId,!0))}rr(t.eventQueue_,n,r),r=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}ac(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)Po(i[a]);ad(t,t.transactionQueueTree_)}function Rb(t,e){let n,i=t.transactionQueueTree_;for(n=ue(e);n!==null&&ls(i)===void 0;)i=sd(i,n),e=Re(e),n=ue(e);return i}function Nb(t,e){const n=[];return xb(t,e,n),n.sort((i,r)=>i.order-r.order),n}function xb(t,e,n){const i=ls(e);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);oc(e,r=>{xb(t,r,n)})}function ac(t,e){const n=ls(e);if(n){let i=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[i]=n[r],i++);n.length=i,Eb(e,n.length>0?n:void 0)}oc(e,i=>{ac(t,i)})}function MR(t,e){const n=Lo(Rb(t,e)),i=sd(t.transactionQueueTree_,e);return dR(i,r=>{pu(t,r)}),pu(t,i),Tb(i,r=>{pu(t,r)}),n}function pu(t,e){const n=ls(e);if(n){const i=[];let r=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(D(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(D(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(vr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Eb(e,void 0):n.length=s+1,rr(t.eventQueue_,Lo(e),r);for(let o=0;o<i.length;o++)Po(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LR(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function FR(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):jt(`Invalid query segment '${n}' in query '${t}'`)}return e}const sg=function(t,e){const n=UR(t),i=n.namespace;n.domain==="firebase.com"&&Gi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Gi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||dA();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new IA(n.host,n.secure,i,r,e,"",i!==n.subdomain),path:new Me(n.pathString)}},UR=function(t){let e="",n="",i="",r="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(r=LR(t.substring(u,h)));const f=FR(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const d=e.slice(0,c);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{const m=e.indexOf(".");i=e.substring(0,m).toLowerCase(),n=e.substring(m+1),s=i}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
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
 */class cd{constructor(e,n,i,r){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=r}get key(){return le(this._path)?null:Hv(this._path)}get ref(){return new cs(this._repo,this._path)}get _queryIdentifier(){const e=Hm(this._queryParams),n=zf(e);return n==="{}"?"default":n}get _queryObject(){return Hm(this._queryParams)}isEqual(e){if(e=Mt(e),!(e instanceof cd))return!1;const n=this._repo===e._repo,i=qv(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+QA(this._path)}}class cs extends cd{constructor(e,n){super(e,n,new Yf,!1)}get parent(){const e=Wv(this._path);return e===null?null:new cs(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}tR(cs);nR(cs);/**
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
 */const VR="FIREBASE_DATABASE_EMULATOR_HOST",Eh={};let $R=!1;function BR(t,e,n,i,r){let s=i||t.options.databaseURL;s===void 0&&(t.options.projectId||Gi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),mt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=sg(s,r),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[VR]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=sg(s,r),a=o.repoInfo):l=!o.repoInfo.secure;const u=r&&l?new uh(uh.OWNER):new TA(t.name,t.options,e);vR("Invalid Firebase Database URL",o),le(o.path)||Gi("Database URL must point to the root of a Firebase Database (not including a child path).");const h=zR(a,t,u,new wA(t.name,n));return new HR(h,t)}function jR(t,e){const n=Eh[e];(!n||n[t.key]!==t)&&Gi(`Database ${e}(${t.repoInfo_}) has already been deleted.`),OR(t),delete n[t.key]}function zR(t,e,n,i){let r=Eh[e.name];r||(r={},Eh[e.name]=r);let s=r[t.toURLString()];return s&&Gi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new SR(t,$R,n,i),r[t.toURLString()]=s,s}class HR{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(AR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new cs(this._repo,Ie())),this._rootInternal}_delete(){return this._rootInternal!==null&&(jR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Gi("Cannot call "+e+" on a deleted database.")}}/**
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
 */function KR(t){lA(os),Sn(new un("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return BR(i,r,s,n)},"PUBLIC").setMultipleInstances(!0)),Bt(Sm,Am,t),Bt(Sm,Am,"esm2017")}Fn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Fn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};KR();var WR=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},j,ud=ud||{},Q=WR||self;function hl(){}function lc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Fo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function qR(t){return Object.prototype.hasOwnProperty.call(t,mu)&&t[mu]||(t[mu]=++GR)}var mu="closure_uid_"+(1e9*Math.random()>>>0),GR=0;function YR(t,e,n){return t.call.apply(t.bind,arguments)}function QR(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,i),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Et(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Et=YR:Et=QR,Et.apply(null,arguments)}function pa(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function ht(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(i,r,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(i,o)}}function bi(){this.s=this.s,this.o=this.o}var XR=0;bi.prototype.s=!1;bi.prototype.na=function(){!this.s&&(this.s=!0,this.M(),XR!=0)&&qR(this)};bi.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ob=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function hd(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function og(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(lc(i)){const r=t.length||0,s=i.length||0;t.length=r+s;for(let o=0;o<s;o++)t[r+o]=i[o]}else t.push(i)}}function wt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}wt.prototype.h=function(){this.defaultPrevented=!0};var JR=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Q.addEventListener("test",hl,e),Q.removeEventListener("test",hl,e)}catch{}return t}();function fl(t){return/^[\s\xa0]*$/.test(t)}var ag=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function gu(t,e){return t<e?-1:t>e?1:0}function cc(){var t=Q.navigator;return t&&(t=t.userAgent)?t:""}function yn(t){return cc().indexOf(t)!=-1}function fd(t){return fd[" "](t),t}fd[" "]=hl;function ZR(t){var e=nN;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var eN=yn("Opera"),Br=yn("Trident")||yn("MSIE"),Db=yn("Edge"),wh=Db||Br,Pb=yn("Gecko")&&!(cc().toLowerCase().indexOf("webkit")!=-1&&!yn("Edge"))&&!(yn("Trident")||yn("MSIE"))&&!yn("Edge"),tN=cc().toLowerCase().indexOf("webkit")!=-1&&!yn("Edge");function Mb(){var t=Q.document;return t?t.documentMode:void 0}var dl;e:{var yu="",_u=function(){var t=cc();if(Pb)return/rv:([^\);]+)(\)|;)/.exec(t);if(Db)return/Edge\/([\d\.]+)/.exec(t);if(Br)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(tN)return/WebKit\/(\S+)/.exec(t);if(eN)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(_u&&(yu=_u?_u[1]:""),Br){var vu=Mb();if(vu!=null&&vu>parseFloat(yu)){dl=String(vu);break e}}dl=yu}var nN={};function iN(){return ZR(function(){let t=0;const e=ag(String(dl)).split("."),n=ag("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var r=e[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r[0].length==0&&s[0].length==0)break;t=gu(r[1].length==0?0:parseInt(r[1],10),s[1].length==0?0:parseInt(s[1],10))||gu(r[2].length==0,s[2].length==0)||gu(r[2],s[2]),r=r[3],s=s[3]}while(t==0)}return 0<=t})}var Th;if(Q.document&&Br){var lg=Mb();Th=lg||parseInt(dl,10)||void 0}else Th=void 0;var rN=Th;function co(t,e){if(wt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Pb){e:{try{fd(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:sN[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&co.X.h.call(this)}}ht(co,wt);var sN={2:"touch",3:"pen",4:"mouse"};co.prototype.h=function(){co.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Uo="closure_listenable_"+(1e6*Math.random()|0),oN=0;function aN(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=r,this.key=++oN,this.ba=this.ea=!1}function uc(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function dd(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function Lb(t){const e={};for(const n in t)e[n]=t[n];return e}const cg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Fb(t,e){let n,i;for(let r=1;r<arguments.length;r++){i=arguments[r];for(n in i)t[n]=i[n];for(let s=0;s<cg.length;s++)n=cg[s],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function hc(t){this.src=t,this.g={},this.h=0}hc.prototype.add=function(t,e,n,i,r){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Ch(t,e,i,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new aN(e,this.src,s,!!i,r),e.ea=n,t.push(e)),e};function Ih(t,e){var n=e.type;if(n in t.g){var i=t.g[n],r=Ob(i,e),s;(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(uc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ch(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==i)return r}return-1}var pd="closure_lm_"+(1e6*Math.random()|0),bu={};function Ub(t,e,n,i,r){if(i&&i.once)return $b(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Ub(t,e[s],n,i,r);return null}return n=yd(n),t&&t[Uo]?t.N(e,n,Fo(i)?!!i.capture:!!i,r):Vb(t,e,n,!1,i,r)}function Vb(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=Fo(r)?!!r.capture:!!r,a=gd(t);if(a||(t[pd]=a=new hc(t)),n=a.add(e,n,i,o,s),n.proxy)return n;if(i=lN(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)JR||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(jb(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function lN(){function t(n){return e.call(t.src,t.listener,n)}const e=cN;return t}function $b(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)$b(t,e[s],n,i,r);return null}return n=yd(n),t&&t[Uo]?t.O(e,n,Fo(i)?!!i.capture:!!i,r):Vb(t,e,n,!0,i,r)}function Bb(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)Bb(t,e[s],n,i,r);else i=Fo(i)?!!i.capture:!!i,n=yd(n),t&&t[Uo]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Ch(s,n,i,r),-1<n&&(uc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=gd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ch(e,n,i,r)),(n=-1<t?e[t]:null)&&md(n))}function md(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Uo])Ih(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(jb(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=gd(e))?(Ih(n,t),n.h==0&&(n.src=null,e[pd]=null)):uc(t)}}}function jb(t){return t in bu?bu[t]:bu[t]="on"+t}function cN(t,e){if(t.ba)t=!0;else{e=new co(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&md(t),t=n.call(i,e)}return t}function gd(t){return t=t[pd],t instanceof hc?t:null}var Eu="__closure_events_fn_"+(1e9*Math.random()>>>0);function yd(t){return typeof t=="function"?t:(t[Eu]||(t[Eu]=function(e){return t.handleEvent(e)}),t[Eu])}function ot(){bi.call(this),this.i=new hc(this),this.P=this,this.I=null}ht(ot,bi);ot.prototype[Uo]=!0;ot.prototype.removeEventListener=function(t,e,n,i){Bb(this,t,e,n,i)};function ut(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new wt(e,t);else if(e instanceof wt)e.target=e.target||t;else{var r=e;e=new wt(i,t),Fb(e,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=ma(o,i,!0,e)&&r}if(o=e.g=t,r=ma(o,i,!0,e)&&r,r=ma(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)o=e.g=n[s],r=ma(o,i,!1,e)&&r}ot.prototype.M=function(){if(ot.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)uc(n[i]);delete t.g[e],t.h--}}this.I=null};ot.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};ot.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function ma(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&Ih(t.i,o),r=a.call(l,i)!==!1&&r}}return r&&!i.defaultPrevented}var _d=Q.JSON.stringify;function uN(){var t=Kb;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class hN{constructor(){this.h=this.g=null}add(e,n){const i=zb.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var zb=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new fN,t=>t.reset());class fN{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function dN(t){Q.setTimeout(()=>{throw t},0)}function Hb(t,e){Sh||pN(),Ah||(Sh(),Ah=!0),Kb.add(t,e)}var Sh;function pN(){var t=Q.Promise.resolve(void 0);Sh=function(){t.then(mN)}}var Ah=!1,Kb=new hN;function mN(){for(var t;t=uN();){try{t.h.call(t.g)}catch(n){dN(n)}var e=zb;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ah=!1}function fc(t,e){ot.call(this),this.h=t||1,this.g=e||Q,this.j=Et(this.lb,this),this.l=Date.now()}ht(fc,ot);j=fc.prototype;j.ca=!1;j.R=null;j.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ut(this,"tick"),this.ca&&(vd(this),this.start()))}};j.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function vd(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}j.M=function(){fc.X.M.call(this),vd(this),delete this.g};function bd(t,e,n){if(typeof t=="function")n&&(t=Et(t,n));else if(t&&typeof t.handleEvent=="function")t=Et(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function Wb(t){t.g=bd(()=>{t.g=null,t.i&&(t.i=!1,Wb(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class gN extends bi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Wb(this)}M(){super.M(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function uo(t){bi.call(this),this.h=t,this.g={}}ht(uo,bi);var ug=[];function qb(t,e,n,i){Array.isArray(n)||(n&&(ug[0]=n.toString()),n=ug);for(var r=0;r<n.length;r++){var s=Ub(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Gb(t){dd(t.g,function(e,n){this.g.hasOwnProperty(n)&&md(e)},t),t.g={}}uo.prototype.M=function(){uo.X.M.call(this),Gb(this)};uo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function dc(){this.g=!0}dc.prototype.Aa=function(){this.g=!1};function yN(t,e,n,i,r,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function _N(t,e,n,i,r,s,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+`
`+n+`
`+s+" "+o})}function br(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+bN(t,n)+(i?" "+i:"")})}function vN(t,e){t.info(function(){return"TIMEOUT: "+e})}dc.prototype.info=function(){};function bN(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return _d(n)}catch{return e}}var sr={},hg=null;function pc(){return hg=hg||new ot}sr.Pa="serverreachability";function Yb(t){wt.call(this,sr.Pa,t)}ht(Yb,wt);function ho(t){const e=pc();ut(e,new Yb(e))}sr.STAT_EVENT="statevent";function Qb(t,e){wt.call(this,sr.STAT_EVENT,t),this.stat=e}ht(Qb,wt);function Ct(t){const e=pc();ut(e,new Qb(e,t))}sr.Qa="timingevent";function Xb(t,e){wt.call(this,sr.Qa,t),this.size=e}ht(Xb,wt);function Vo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var mc={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Jb={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Ed(){}Ed.prototype.h=null;function fg(t){return t.h||(t.h=t.i())}function Zb(){}var $o={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function wd(){wt.call(this,"d")}ht(wd,wt);function Td(){wt.call(this,"c")}ht(Td,wt);var kh;function gc(){}ht(gc,Ed);gc.prototype.g=function(){return new XMLHttpRequest};gc.prototype.i=function(){return{}};kh=new gc;function Bo(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new uo(this),this.O=EN,t=wh?125:void 0,this.T=new fc(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new e0}function e0(){this.i=null,this.g="",this.h=!1}var EN=45e3,Rh={},pl={};j=Bo.prototype;j.setTimeout=function(t){this.O=t};function Nh(t,e,n){t.K=1,t.v=_c(Bn(e)),t.s=n,t.P=!0,t0(t,null)}function t0(t,e){t.F=Date.now(),jo(t),t.A=Bn(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),c0(n.i,"t",i),t.C=0,n=t.l.H,t.h=new e0,t.g=N0(t.l,n?e:null,!t.s),0<t.N&&(t.L=new gN(Et(t.La,t,t.g),t.N)),qb(t.S,t.g,"readystatechange",t.ib),e=t.H?Lb(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ho(),yN(t.j,t.u,t.A,t.m,t.U,t.s)}j.ib=function(t){t=t.target;const e=this.L;e&&Mn(t)==3?e.l():this.La(t)};j.La=function(t){try{if(t==this.g)e:{const u=Mn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||wh||this.g&&(this.h.h||this.g.fa()||gg(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?ho(3):ho(2)),yc(this);var n=this.g.aa();this.Y=n;t:if(n0(this)){var i=gg(this.g);t="";var r=i.length,s=Mn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Li(this),$s(this);var o="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,_N(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!fl(a)){var c=a;break t}}c=null}if(n=c)br(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,xh(this,n);else{this.i=!1,this.o=3,Ct(12),Li(this),$s(this);break e}}this.P?(i0(this,u,o),wh&&this.i&&u==3&&(qb(this.S,this.T,"tick",this.hb),this.T.start())):(br(this.j,this.m,o,null),xh(this,o)),u==4&&Li(this),this.i&&!this.I&&(u==4?S0(this.l,this):(this.i=!1,jo(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ct(12)):(this.o=0,Ct(13)),Li(this),$s(this)}}}catch{}finally{}};function n0(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function i0(t,e,n){let i=!0,r;for(;!t.I&&t.C<n.length;)if(r=wN(t,n),r==pl){e==4&&(t.o=4,Ct(14),i=!1),br(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Rh){t.o=4,Ct(15),br(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else br(t.j,t.m,r,null),xh(t,r);n0(t)&&r!=pl&&r!=Rh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ct(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Nd(e),e.K=!0,Ct(11))):(br(t.j,t.m,n,"[Invalid Chunked Response]"),Li(t),$s(t))}j.hb=function(){if(this.g){var t=Mn(this.g),e=this.g.fa();this.C<e.length&&(yc(this),i0(this,t,e),this.i&&t!=4&&jo(this))}};function wN(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?pl:(n=Number(e.substring(n,i)),isNaN(n)?Rh:(i+=1,i+n>e.length?pl:(e=e.substr(i,n),t.C=i+n,e)))}j.cancel=function(){this.I=!0,Li(this)};function jo(t){t.V=Date.now()+t.O,r0(t,t.O)}function r0(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Vo(Et(t.gb,t),e)}function yc(t){t.B&&(Q.clearTimeout(t.B),t.B=null)}j.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(vN(this.j,this.A),this.K!=2&&(ho(),Ct(17)),Li(this),this.o=2,$s(this)):r0(this,this.V-t)};function $s(t){t.l.G==0||t.I||S0(t.l,t)}function Li(t){yc(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,vd(t.T),Gb(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function xh(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Oh(n.h,t))){if(!t.J&&Oh(n.h,t)&&n.G==3){try{var i=n.Fa.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var r=i;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)yl(n),Ec(n);else break e;Rd(n),Ct(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Vo(Et(n.cb,n),6e3));if(1>=f0(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Fi(n,11)}else if((t.J||n.g==t)&&yl(n),!fl(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(i=1.5*f,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const d=t.g;if(d){const m=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var s=i.h;s.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Id(s,s.h),s.h=null))}if(i.D){const y=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(i.za=y,Le(i.F,i.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),i=n;var o=t;if(i.sa=R0(i,i.H?i.ka:null,i.V),o.J){d0(i.h,o);var a=o,l=i.J;l&&a.setTimeout(l),a.B&&(yc(a),jo(a)),i.g=o}else I0(i);0<n.i.length&&wc(n)}else c[0]!="stop"&&c[0]!="close"||Fi(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Fi(n,7):kd(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}ho(4)}catch{}}function TN(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(lc(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function IN(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(lc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function s0(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(lc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=IN(t),i=TN(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}var o0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function CN(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Hi(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Hi){this.h=e!==void 0?e:t.h,ml(this,t.j),this.s=t.s,this.g=t.g,gl(this,t.m),this.l=t.l,e=t.i;var n=new fo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),dg(this,n),this.o=t.o}else t&&(n=String(t).match(o0))?(this.h=!!e,ml(this,n[1]||"",!0),this.s=ks(n[2]||""),this.g=ks(n[3]||"",!0),gl(this,n[4]),this.l=ks(n[5]||"",!0),dg(this,n[6]||"",!0),this.o=ks(n[7]||"")):(this.h=!!e,this.i=new fo(null,this.h))}Hi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Rs(e,pg,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Rs(e,pg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Rs(n,n.charAt(0)=="/"?kN:AN,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Rs(n,NN)),t.join("")};function Bn(t){return new Hi(t)}function ml(t,e,n){t.j=n?ks(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function gl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function dg(t,e,n){e instanceof fo?(t.i=e,xN(t.i,t.h)):(n||(e=Rs(e,RN)),t.i=new fo(e,t.h))}function Le(t,e,n){t.i.set(e,n)}function _c(t){return Le(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ks(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Rs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,SN),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function SN(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var pg=/[#\/\?@]/g,AN=/[#\?:]/g,kN=/[#\?]/g,RN=/[#\?@]/g,NN=/#/g;function fo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ei(t){t.g||(t.g=new Map,t.h=0,t.i&&CN(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}j=fo.prototype;j.add=function(t,e){Ei(this),this.i=null,t=us(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function a0(t,e){Ei(t),e=us(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function l0(t,e){return Ei(t),e=us(t,e),t.g.has(e)}j.forEach=function(t,e){Ei(this),this.g.forEach(function(n,i){n.forEach(function(r){t.call(e,r,i,this)},this)},this)};j.oa=function(){Ei(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let s=0;s<r.length;s++)n.push(e[i])}return n};j.W=function(t){Ei(this);let e=[];if(typeof t=="string")l0(this,t)&&(e=e.concat(this.g.get(us(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};j.set=function(t,e){return Ei(this),this.i=null,t=us(this,t),l0(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};j.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function c0(t,e,n){a0(t,e),0<n.length&&(t.i=null,t.g.set(us(t,e),hd(n)),t.h+=n.length)}j.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const s=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var r=s;o[i]!==""&&(r+="="+encodeURIComponent(String(o[i]))),t.push(r)}}return this.i=t.join("&")};function us(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function xN(t,e){e&&!t.j&&(Ei(t),t.i=null,t.g.forEach(function(n,i){var r=i.toLowerCase();i!=r&&(a0(this,i),c0(this,r,n))},t)),t.j=e}var ON=class{constructor(e,n){this.h=e,this.g=n}};function u0(t){this.l=t||DN,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ga&&Q.g.Ga()&&Q.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var DN=10;function h0(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function f0(t){return t.h?1:t.g?t.g.size:0}function Oh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Id(t,e){t.g?t.g.add(e):t.h=e}function d0(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}u0.prototype.cancel=function(){if(this.i=p0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function p0(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return hd(t.i)}function Cd(){}Cd.prototype.stringify=function(t){return Q.JSON.stringify(t,void 0)};Cd.prototype.parse=function(t){return Q.JSON.parse(t,void 0)};function PN(){this.g=new Cd}function MN(t,e,n){const i=n||"";try{s0(t,function(r,s){let o=r;Fo(r)&&(o=_d(r)),e.push(i+s+"="+encodeURIComponent(o))})}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function LN(t,e){const n=new dc;if(Q.Image){const i=new Image;i.onload=pa(ga,n,i,"TestLoadImage: loaded",!0,e),i.onerror=pa(ga,n,i,"TestLoadImage: error",!1,e),i.onabort=pa(ga,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=pa(ga,n,i,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function ga(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch{}}function zo(t){this.l=t.ac||null,this.j=t.jb||!1}ht(zo,Ed);zo.prototype.g=function(){return new vc(this.l,this.j)};zo.prototype.i=function(t){return function(){return t}}({});function vc(t,e){ot.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Sd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ht(vc,ot);var Sd=0;j=vc.prototype;j.open=function(t,e){if(this.readyState!=Sd)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,po(this)};j.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Q).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};j.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ho(this)),this.readyState=Sd};j.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,po(this)),this.g&&(this.readyState=3,po(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;m0(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function m0(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}j.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ho(this):po(this),this.readyState==3&&m0(this)}};j.Va=function(t){this.g&&(this.response=this.responseText=t,Ho(this))};j.Ua=function(t){this.g&&(this.response=t,Ho(this))};j.ga=function(){this.g&&Ho(this)};function Ho(t){t.readyState=4,t.l=null,t.j=null,t.A=null,po(t)}j.setRequestHeader=function(t,e){this.v.append(t,e)};j.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};j.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function po(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(vc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var FN=Q.JSON.parse;function Be(t){ot.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=g0,this.K=this.L=!1}ht(Be,ot);var g0="",UN=/^https?$/i,VN=["POST","PUT"];j=Be.prototype;j.Ka=function(t){this.L=t};j.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():kh.g(),this.C=this.u?fg(this.u):fg(kh),this.g.onreadystatechange=Et(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){mg(this,s);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const s of i.keys())n.set(s,i.get(s));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),r=Q.FormData&&t instanceof Q.FormData,!(0<=Ob(VN,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{v0(this),0<this.B&&((this.K=$N(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Et(this.qa,this)):this.A=bd(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){mg(this,s)}};function $N(t){return Br&&iN()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}j.qa=function(){typeof ud<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ut(this,"timeout"),this.abort(8))};function mg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,y0(t),bc(t)}function y0(t){t.D||(t.D=!0,ut(t,"complete"),ut(t,"error"))}j.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ut(this,"complete"),ut(this,"abort"),bc(this))};j.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),bc(this,!0)),Be.X.M.call(this)};j.Ha=function(){this.s||(this.F||this.v||this.l?_0(this):this.fb())};j.fb=function(){_0(this)};function _0(t){if(t.h&&typeof ud<"u"&&(!t.C[1]||Mn(t)!=4||t.aa()!=2)){if(t.v&&Mn(t)==4)bd(t.Ha,0,t);else if(ut(t,"readystatechange"),Mn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var r=String(t.H).match(o0)[1]||null;if(!r&&Q.self&&Q.self.location){var s=Q.self.location.protocol;r=s.substr(0,s.length-1)}i=!UN.test(r?r.toLowerCase():"")}n=i}if(n)ut(t,"complete"),ut(t,"success");else{t.m=6;try{var o=2<Mn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",y0(t)}}finally{bc(t)}}}}function bc(t,e){if(t.g){v0(t);const n=t.g,i=t.C[0]?hl:null;t.g=null,t.C=null,e||ut(t,"ready");try{n.onreadystatechange=i}catch{}}}function v0(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}function Mn(t){return t.g?t.g.readyState:0}j.aa=function(){try{return 2<Mn(this)?this.g.status:-1}catch{return-1}};j.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};j.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),FN(e)}};function gg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case g0:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}j.Ea=function(){return this.m};j.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function b0(t){let e="";return dd(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function Ad(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=b0(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Le(t,e,n))}function Is(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function E0(t){this.Ca=0,this.i=[],this.j=new dc,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Is("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Is("baseRetryDelayMs",5e3,t),this.bb=Is("retryDelaySeedMs",1e4,t),this.$a=Is("forwardChannelMaxRetries",2,t),this.ta=Is("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new u0(t&&t.concurrentRequestLimit),this.Fa=new PN,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}j=E0.prototype;j.ma=8;j.G=1;function kd(t){if(w0(t),t.G==3){var e=t.U++,n=Bn(t.F);Le(n,"SID",t.I),Le(n,"RID",e),Le(n,"TYPE","terminate"),Ko(t,n),e=new Bo(t,t.j,e,void 0),e.K=2,e.v=_c(Bn(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon&&(n=Q.navigator.sendBeacon(e.v.toString(),"")),!n&&Q.Image&&(new Image().src=e.v,n=!0),n||(e.g=N0(e.l,null),e.g.da(e.v)),e.F=Date.now(),jo(e)}k0(t)}function Ec(t){t.g&&(Nd(t),t.g.cancel(),t.g=null)}function w0(t){Ec(t),t.u&&(Q.clearTimeout(t.u),t.u=null),yl(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function wc(t){h0(t.h)||t.m||(t.m=!0,Hb(t.Ja,t),t.C=0)}function BN(t,e){return f0(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Vo(Et(t.Ja,t,e),A0(t,t.C)),t.C++,!0)}j.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Bo(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=Lb(s),Fb(s,this.S)):s=this.S),this.o!==null||this.N||(r.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var i=this.i[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=T0(this,r,e),n=Bn(this.F),Le(n,"RID",t),Le(n,"CVER",22),this.D&&Le(n,"X-HTTP-Session-Id",this.D),Ko(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(b0(s)))+"&"+e:this.o&&Ad(n,this.o,s)),Id(this.h,r),this.Ya&&Le(n,"TYPE","init"),this.O?(Le(n,"$req",e),Le(n,"SID","null"),r.Z=!0,Nh(r,n,null)):Nh(r,n,e),this.G=2}}else this.G==3&&(t?yg(this,t):this.i.length==0||h0(this.h)||yg(this))};function yg(t,e){var n;e?n=e.m:n=t.U++;const i=Bn(t.F);Le(i,"SID",t.I),Le(i,"RID",n),Le(i,"AID",t.T),Ko(t,i),t.o&&t.s&&Ad(i,t.o,t.s),n=new Bo(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=T0(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Id(t.h,n),Nh(n,i,e)}function Ko(t,e){t.ia&&dd(t.ia,function(n,i){Le(e,i,n)}),t.l&&s0({},function(n,i){Le(e,i,n)})}function T0(t,e,n){n=Math.min(t.i.length,n);var i=t.l?Et(t.l.Ra,t.l,t):null;e:{var r=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=r[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let c=r[l].h;const u=r[l].g;if(c-=s,0>c)s=Math.max(0,r[l].h-100),a=!1;else try{MN(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,i}function I0(t){t.g||t.u||(t.Z=1,Hb(t.Ia,t),t.A=0)}function Rd(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Vo(Et(t.Ia,t),A0(t,t.A)),t.A++,!0)}j.Ia=function(){if(this.u=null,C0(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Vo(Et(this.eb,this),t)}};j.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ct(10),Ec(this),C0(this))};function Nd(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function C0(t){t.g=new Bo(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Bn(t.sa);Le(e,"RID","rpc"),Le(e,"SID",t.I),Le(e,"CI",t.L?"0":"1"),Le(e,"AID",t.T),Le(e,"TYPE","xmlhttp"),Ko(t,e),t.o&&t.s&&Ad(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=_c(Bn(e)),n.s=null,n.P=!0,t0(n,t)}j.cb=function(){this.v!=null&&(this.v=null,Ec(this),Rd(this),Ct(19))};function yl(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function S0(t,e){var n=null;if(t.g==e){yl(t),Nd(t),t.g=null;var i=2}else if(Oh(t.h,e))n=e.D,d0(t.h,e),i=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;i=pc(),ut(i,new Xb(i,n)),wc(t)}else I0(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(i==1&&BN(t,e)||i==2&&Rd(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Fi(t,5);break;case 4:Fi(t,10);break;case 3:Fi(t,6);break;default:Fi(t,2)}}}function A0(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Fi(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var i=Et(t.kb,t);n||(n=new Hi("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||ml(n,"https"),_c(n)),LN(n.toString(),i)}else Ct(2);t.G=0,t.l&&t.l.va(e),k0(t),w0(t)}j.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Ct(2)):(this.j.info("Failed to ping google.com"),Ct(1))};function k0(t){if(t.G=0,t.la=[],t.l){const e=p0(t.h);(e.length!=0||t.i.length!=0)&&(og(t.la,e),og(t.la,t.i),t.h.i.length=0,hd(t.i),t.i.length=0),t.l.ua()}}function R0(t,e,n){var i=n instanceof Hi?Bn(n):new Hi(n,void 0);if(i.g!="")e&&(i.g=e+"."+i.g),gl(i,i.m);else{var r=Q.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new Hi(null,void 0);i&&ml(s,i),e&&(s.g=e),r&&gl(s,r),n&&(s.l=n),i=s}return n=t.D,e=t.za,n&&e&&Le(i,n,e),Le(i,"VER",t.ma),Ko(t,i),i}function N0(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Be(new zo({jb:!0})):new Be(t.ra),e.Ka(t.H),e}function x0(){}j=x0.prototype;j.xa=function(){};j.wa=function(){};j.va=function(){};j.ua=function(){};j.Ra=function(){};function _l(){if(Br&&!(10<=Number(rN)))throw Error("Environmental error: no available transport.")}_l.prototype.g=function(t,e){return new Ht(t,e)};function Ht(t,e){ot.call(this),this.g=new E0(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!fl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!fl(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new hs(this)}ht(Ht,ot);Ht.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Ct(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=R0(t,null,t.V),wc(t)};Ht.prototype.close=function(){kd(this.g)};Ht.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=_d(t),t=n);e.i.push(new ON(e.ab++,t)),e.G==3&&wc(e)};Ht.prototype.M=function(){this.g.l=null,delete this.j,kd(this.g),delete this.g,Ht.X.M.call(this)};function O0(t){wd.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ht(O0,wd);function D0(){Td.call(this),this.status=1}ht(D0,Td);function hs(t){this.g=t}ht(hs,x0);hs.prototype.xa=function(){ut(this.g,"a")};hs.prototype.wa=function(t){ut(this.g,new O0(t))};hs.prototype.va=function(t){ut(this.g,new D0)};hs.prototype.ua=function(){ut(this.g,"b")};_l.prototype.createWebChannel=_l.prototype.g;Ht.prototype.send=Ht.prototype.u;Ht.prototype.open=Ht.prototype.m;Ht.prototype.close=Ht.prototype.close;mc.NO_ERROR=0;mc.TIMEOUT=8;mc.HTTP_ERROR=6;Jb.COMPLETE="complete";Zb.EventType=$o;$o.OPEN="a";$o.CLOSE="b";$o.ERROR="c";$o.MESSAGE="d";ot.prototype.listen=ot.prototype.N;Be.prototype.listenOnce=Be.prototype.O;Be.prototype.getLastError=Be.prototype.Oa;Be.prototype.getLastErrorCode=Be.prototype.Ea;Be.prototype.getStatus=Be.prototype.aa;Be.prototype.getResponseJson=Be.prototype.Sa;Be.prototype.getResponseText=Be.prototype.fa;Be.prototype.send=Be.prototype.da;Be.prototype.setWithCredentials=Be.prototype.Ka;var jN=function(){return new _l},zN=function(){return pc()},wu=mc,HN=Jb,KN=sr,_g={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},WN=zo,ya=Zb,qN=Be;const vg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fs="9.20.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji=new No("@firebase/firestore");function bg(){return Ji.logLevel}function z(t,...e){if(Ji.logLevel<=pe.DEBUG){const n=e.map(xd);Ji.debug(`Firestore (${fs}): ${t}`,...n)}}function jn(t,...e){if(Ji.logLevel<=pe.ERROR){const n=e.map(xd);Ji.error(`Firestore (${fs}): ${t}`,...n)}}function vl(t,...e){if(Ji.logLevel<=pe.WARN){const n=e.map(xd);Ji.warn(`Firestore (${fs}): ${t}`,...n)}}function xd(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${fs}) INTERNAL ASSERTION FAILED: `+t;throw jn(e),new Error(e)}function Pe(t,e){t||Y()}function te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Yn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class P0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class GN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(pt.UNAUTHENTICATED))}shutdown(){}}class YN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class QN{constructor(e){this.t=e,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const r=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let s=new Un;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Un,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Un)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Pe(typeof i.accessToken=="string"),new P0(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Pe(e===null||typeof e=="string"),new pt(e)}}class XN{constructor(e,n,i){this.h=e,this.l=n,this.m=i,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class JN{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new XN(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ZN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ex{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const i=s=>{s.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>i(s))};const r=s=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?r(s):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Pe(typeof n.token=="string"),this.T=n.token,new ZN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function tx(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const r=tx(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=e.charAt(r[s]%e.length))}return i}}function _e(t,e){return t<e?-1:t>e?1:0}function jr(t,e,n){return t.length===e.length&&t.every((i,r)=>n(i,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ge.fromMillis(Date.now())}static fromDate(e){return Ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new Ge(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new Ge(0,0))}static max(){return new Z(new Ge(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,n,i){n===void 0?n=0:n>e.length&&Y(),i===void 0?i=e.length-n:i>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return mo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof mo?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let r=0;r<i;r++){const s=e.get(r),o=n.get(r);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Fe extends mo{construct(e,n,i){return new Fe(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new q(A.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(r=>r.length>0))}return new Fe(n)}static emptyPath(){return new Fe([])}}const nx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class vt extends mo{construct(e,n,i){return new vt(e,n,i)}static isValidIdentifier(e){return nx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),vt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new vt(["__name__"])}static fromServerFormat(e){const n=[];let i="",r=0;const s=()=>{if(i.length===0)throw new q(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new q(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new q(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(i+=a,r++):(s(),r++)}if(s(),o)throw new q(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new vt(n)}static emptyPath(){return new vt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(Fe.fromString(e))}static fromName(e){return new G(Fe.fromString(e).popFirst(5))}static empty(){return new G(Fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new Fe(e.slice()))}}function ix(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,r=Z.fromTimestamp(i===1e9?new Ge(n+1,0):new Ge(n,i));return new pi(r,G.empty(),e)}function rx(t){return new pi(t.readTime,t.key,-1)}class pi{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new pi(Z.min(),G.empty(),-1)}static max(){return new pi(Z.max(),G.empty(),-1)}}function sx(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:_e(t.largestBatchId,e.largestBatchId))}/**
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
 */const ox="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ax{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wo(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==ox)throw t;z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((i,r)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(i,r)},this.catchCallback=s=>{this.wrapFailure(n,s).next(i,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,i)=>{n(e)})}static reject(e){return new R((n,i)=>{i(e)})}static waitFor(e){return new R((n,i)=>{let r=0,s=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++s,o&&s===r&&n()},l=>i(l))}),o=!0,s===r&&n()})}static or(e){let n=R.resolve(!1);for(const i of e)n=n.next(r=>r?R.resolve(r):i());return n}static forEach(e,n){const i=[];return e.forEach((r,s)=>{i.push(n.call(this,r,s))}),this.waitFor(i)}static mapArray(e,n){return new R((i,r)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===s&&i(o)},u=>r(u))}})}static doWhile(e,n){return new R((i,r)=>{const s=()=>{e()===!0?n().next(()=>{s()},r):i()};s()})}}function qo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Od{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ot(i),this.ut=i=>n.writeSequenceNumber(i))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Od.ct=-1;function Tc(t){return t==null}function bl(t){return t===0&&1/t==-1/0}function lx(t){return typeof t=="number"&&Number.isInteger(t)&&!bl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function or(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function L0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new Je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new Je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(e,i.key);if(r===0)return n+i.left.size;r<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _a(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _a(this.root,e,this.comparator,!1)}getReverseIterator(){return new _a(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _a(this.root,e,this.comparator,!0)}}class _a{constructor(e,n,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?i(e.key,n):1,n&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i??at.RED,this.left=r??at.EMPTY,this.right=s??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,r,s){return new at(e??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return at.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(t,e,n,i,r){return this}insert(t,e,n){return new at(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.comparator=e,this.data=new Je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new wg(this.data.getIterator())}getIteratorFrom(e){return new wg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof Qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Qe(this.comparator);return n.data=e,n}}class wg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class rn{constructor(e){this.fields=e,e.sort(vt.comparator)}static empty(){return new rn([])}unionWith(e){let n=new Qe(vt.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new rn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return jr(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class cx extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new cx("Invalid base64 string: "+r):r}}(e);return new Tt(n)}static fromUint8Array(e){const n=function(i){let r="";for(let s=0;s<i.length;++s)r+=String.fromCharCode(i[s]);return r}(e);return new Tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Tt.EMPTY_BYTE_STRING=new Tt("");const ux=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mi(t){if(Pe(!!t),typeof t=="string"){let e=0;const n=ux.exec(t);if(Pe(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:qe(t.seconds),nanos:qe(t.nanos)}}function qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function zr(t){return typeof t=="string"?Tt.fromBase64String(t):Tt.fromUint8Array(t)}/**
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
 */function F0(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function U0(t){const e=t.mapValue.fields.__previous_value__;return F0(e)?U0(e):e}function go(t){const e=mi(t.mapValue.fields.__local_write_time__.timestampValue);return new Ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx{constructor(e,n,i,r,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class yo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new yo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof yo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const va={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Zi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?F0(t)?4:fx(t)?9007199254740991:10:Y()}function kn(t,e){if(t===e)return!0;const n=Zi(t);if(n!==Zi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return go(t).isEqual(go(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const s=mi(i.timestampValue),o=mi(r.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,r){return zr(i.bytesValue).isEqual(zr(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,r){return qe(i.geoPointValue.latitude)===qe(r.geoPointValue.latitude)&&qe(i.geoPointValue.longitude)===qe(r.geoPointValue.longitude)}(t,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return qe(i.integerValue)===qe(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const s=qe(i.doubleValue),o=qe(r.doubleValue);return s===o?bl(s)===bl(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return jr(t.arrayValue.values||[],e.arrayValue.values||[],kn);case 10:return function(i,r){const s=i.mapValue.fields||{},o=r.mapValue.fields||{};if(Eg(s)!==Eg(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!kn(s[a],o[a])))return!1;return!0}(t,e);default:return Y()}}function _o(t,e){return(t.values||[]).find(n=>kn(n,e))!==void 0}function Hr(t,e){if(t===e)return 0;const n=Zi(t),i=Zi(e);if(n!==i)return _e(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return _e(t.booleanValue,e.booleanValue);case 2:return function(r,s){const o=qe(r.integerValue||r.doubleValue),a=qe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Tg(t.timestampValue,e.timestampValue);case 4:return Tg(go(t),go(e));case 5:return _e(t.stringValue,e.stringValue);case 6:return function(r,s){const o=zr(r),a=zr(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,s){const o=r.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=_e(o[l],a[l]);if(c!==0)return c}return _e(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,s){const o=_e(qe(r.latitude),qe(s.latitude));return o!==0?o:_e(qe(r.longitude),qe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,s){const o=r.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Hr(o[l],a[l]);if(c)return c}return _e(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,s){if(r===va.mapValue&&s===va.mapValue)return 0;if(r===va.mapValue)return 1;if(s===va.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),l=s.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=_e(a[u],c[u]);if(h!==0)return h;const f=Hr(o[a[u]],l[c[u]]);if(f!==0)return f}return _e(a.length,c.length)}(t.mapValue,e.mapValue);default:throw Y()}}function Tg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return _e(t,e);const n=mi(t),i=mi(e),r=_e(n.seconds,i.seconds);return r!==0?r:_e(n.nanos,i.nanos)}function Kr(t){return Dh(t)}function Dh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const r=mi(i);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?zr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,G.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let r="[",s=!0;for(const o of i.values||[])s?s=!1:r+=",",r+=Dh(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(i){const r=Object.keys(i.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Dh(i.fields[a])}`;return s+"}"}(t.mapValue):Y();var e,n}function Ph(t){return!!t&&"integerValue"in t}function Dd(t){return!!t&&"arrayValue"in t}function Ig(t){return!!t&&"nullValue"in t}function Cg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Va(t){return!!t&&"mapValue"in t}function Bs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return or(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=Bs(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Bs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function fx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.value=e}static empty(){return new Ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Va(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Bs(n)}setAll(e){let n=vt.emptyPath(),i={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,r),i={},r=[],n=a.popLast()}o?i[a.lastSegment()]=Bs(o):r.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,i,r)}delete(e){const n=this.field(e.popLast());Va(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return kn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let r=n.mapValue.fields[e.get(i)];Va(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,i){or(n,(r,s)=>e[r]=s);for(const r of i)delete e[r]}clone(){return new Ut(Bs(this.value))}}function V0(t){const e=[];return or(t.fields,(n,i)=>{const r=new vt([n]);if(Va(i)){const s=V0(i.mapValue).fields;if(s.length===0)e.push(r);else for(const o of s)e.push(r.child(o))}else e.push(r)}),new rn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,n,i,r,s,o,a){this.key=e,this.documentType=n,this.version=i,this.readTime=r,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new yt(e,0,Z.min(),Z.min(),Z.min(),Ut.empty(),0)}static newFoundDocument(e,n,i,r){return new yt(e,1,n,Z.min(),i,r,0)}static newNoDocument(e,n){return new yt(e,2,n,Z.min(),Z.min(),Ut.empty(),0)}static newUnknownDocument(e,n){return new yt(e,3,n,Z.min(),Z.min(),Ut.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof yt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class El{constructor(e,n){this.position=e,this.inclusive=n}}function Sg(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(s.field.isKeyField()?i=G.comparator(G.fromName(o.referenceValue),n.key):i=Hr(o,n.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return i}function Ag(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!kn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class js{constructor(e,n="asc"){this.field=e,this.dir=n}}function dx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class $0{}class Ye extends $0{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new mx(e,n,i):n==="array-contains"?new _x(e,i):n==="in"?new vx(e,i):n==="not-in"?new bx(e,i):n==="array-contains-any"?new Ex(e,i):new Ye(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new gx(e,i):new yx(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Hr(n,this.value)):n!==null&&Zi(this.value)===Zi(n)&&this.matchesComparison(Hr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Rn extends $0{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Rn(e,n)}matches(e){return B0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function B0(t){return t.op==="and"}function j0(t){return px(t)&&B0(t)}function px(t){for(const e of t.filters)if(e instanceof Rn)return!1;return!0}function Mh(t){if(t instanceof Ye)return t.field.canonicalString()+t.op.toString()+Kr(t.value);if(j0(t))return t.filters.map(e=>Mh(e)).join(",");{const e=t.filters.map(n=>Mh(n)).join(",");return`${t.op}(${e})`}}function z0(t,e){return t instanceof Ye?function(n,i){return i instanceof Ye&&n.op===i.op&&n.field.isEqual(i.field)&&kn(n.value,i.value)}(t,e):t instanceof Rn?function(n,i){return i instanceof Rn&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((r,s,o)=>r&&z0(s,i.filters[o]),!0):!1}(t,e):void Y()}function H0(t){return t instanceof Ye?function(e){return`${e.field.canonicalString()} ${e.op} ${Kr(e.value)}`}(t):t instanceof Rn?function(e){return e.op.toString()+" {"+e.getFilters().map(H0).join(" ,")+"}"}(t):"Filter"}class mx extends Ye{constructor(e,n,i){super(e,n,i),this.key=G.fromName(i.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class gx extends Ye{constructor(e,n){super(e,"in",n),this.keys=K0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class yx extends Ye{constructor(e,n){super(e,"not-in",n),this.keys=K0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function K0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>G.fromName(i.referenceValue))}class _x extends Ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Dd(n)&&_o(n.arrayValue,this.value)}}class vx extends Ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&_o(this.value.arrayValue,n)}}class bx extends Ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(_o(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!_o(this.value.arrayValue,n)}}class Ex extends Ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Dd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>_o(this.value.arrayValue,i))}}/**
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
 */class wx{constructor(e,n=null,i=[],r=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=r,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function kg(t,e=null,n=[],i=[],r=null,s=null,o=null){return new wx(t,e,n,i,r,s,o)}function Pd(t){const e=te(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>Mh(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),Tc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Kr(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Kr(i)).join(",")),e.ft=n}return e.ft}function Md(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!dx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!z0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ag(t.startAt,e.startAt)&&Ag(t.endAt,e.endAt)}function Lh(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e,n=null,i=[],r=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this.wt=null,this.startAt,this.endAt}}function Tx(t,e,n,i,r,s,o,a){return new Ic(t,e,n,i,r,s,o,a)}function Cc(t){return new Ic(t)}function Rg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Ix(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Cx(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Sx(t){return t.collectionGroup!==null}function Or(t){const e=te(t);if(e.dt===null){e.dt=[];const n=Cx(e),i=Ix(e);if(n!==null&&i===null)n.isKeyField()||e.dt.push(new js(n)),e.dt.push(new js(vt.keyField(),"asc"));else{let r=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(r=!0);if(!r){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new js(vt.keyField(),s))}}}return e.dt}function zn(t){const e=te(t);if(!e.wt)if(e.limitType==="F")e.wt=kg(e.path,e.collectionGroup,Or(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Or(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new js(s.field,o))}const i=e.endAt?new El(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new El(e.startAt.position,e.startAt.inclusive):null;e.wt=kg(e.path,e.collectionGroup,n,e.filters,e.limit,i,r)}return e.wt}function Fh(t,e,n){return new Ic(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Sc(t,e){return Md(zn(t),zn(e))&&t.limitType===e.limitType}function W0(t){return`${Pd(zn(t))}|lt:${t.limitType}`}function Uh(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>H0(i)).join(", ")}]`),Tc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Kr(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Kr(i)).join(",")),`Target(${n})`}(zn(t))}; limitType=${t.limitType})`}function Ac(t,e){return e.isFoundDocument()&&function(n,i){const r=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):G.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,i){for(const r of Or(n))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const r of n.filters)if(!r.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!function(r,s,o){const a=Sg(r,s,o);return r.inclusive?a<=0:a<0}(n.startAt,Or(n),i)||n.endAt&&!function(r,s,o){const a=Sg(r,s,o);return r.inclusive?a>=0:a>0}(n.endAt,Or(n),i))}(t,e)}function Ax(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function q0(t){return(e,n)=>{let i=!1;for(const r of Or(t)){const s=kx(r,e,n);if(s!==0)return s;i=i||r.field.isKeyField()}return 0}}function kx(t,e,n){const i=t.field.isKeyField()?G.comparator(e.key,n.key):function(r,s,o){const a=s.data.field(r),l=o.data.field(r);return a!==null&&l!==null?Hr(a,l):Y()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Y()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[r,s]of i)if(this.equalsFn(r,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),r=this.inner[i];if(r===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return i.length===1?delete this.inner[n]:i.splice(r,1),this.innerSize--,!0;return!1}forEach(e){or(this.inner,(n,i)=>{for(const[r,s]of i)e(r,s)})}isEmpty(){return L0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rx=new Je(G.comparator);function Hn(){return Rx}const G0=new Je(G.comparator);function Ns(...t){let e=G0;for(const n of t)e=e.insert(n.key,n);return e}function Y0(t){let e=G0;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function Ui(){return zs()}function Q0(){return zs()}function zs(){return new ds(t=>t.toString(),(t,e)=>t.isEqual(e))}const Nx=new Je(G.comparator),xx=new Qe(G.comparator);function ae(...t){let e=xx;for(const n of t)e=e.add(n);return e}const Ox=new Qe(_e);function X0(){return Ox}/**
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
 */function J0(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bl(e)?"-0":e}}function Z0(t){return{integerValue:""+t}}function Dx(t,e){return lx(e)?Z0(e):J0(t,e)}/**
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
 */class kc{constructor(){this._=void 0}}function Px(t,e,n){return t instanceof wl?function(i,r){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&(s.fields.__previous_value__=r),{mapValue:s}}(n,e):t instanceof vo?tE(t,e):t instanceof bo?nE(t,e):function(i,r){const s=eE(i,r),o=Ng(s)+Ng(i._t);return Ph(s)&&Ph(i._t)?Z0(o):J0(i.serializer,o)}(t,e)}function Mx(t,e,n){return t instanceof vo?tE(t,e):t instanceof bo?nE(t,e):n}function eE(t,e){return t instanceof Tl?Ph(n=e)||function(i){return!!i&&"doubleValue"in i}(n)?e:{integerValue:0}:null;var n}class wl extends kc{}class vo extends kc{constructor(e){super(),this.elements=e}}function tE(t,e){const n=iE(e);for(const i of t.elements)n.some(r=>kn(r,i))||n.push(i);return{arrayValue:{values:n}}}class bo extends kc{constructor(e){super(),this.elements=e}}function nE(t,e){let n=iE(e);for(const i of t.elements)n=n.filter(r=>!kn(r,i));return{arrayValue:{values:n}}}class Tl extends kc{constructor(e,n){super(),this.serializer=e,this._t=n}}function Ng(t){return qe(t.integerValue||t.doubleValue)}function iE(t){return Dd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Lx(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof vo&&i instanceof vo||n instanceof bo&&i instanceof bo?jr(n.elements,i.elements,kn):n instanceof Tl&&i instanceof Tl?kn(n._t,i._t):n instanceof wl&&i instanceof wl}(t.transform,e.transform)}class Fx{constructor(e,n){this.version=e,this.transformResults=n}}class Vn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Vn}static exists(e){return new Vn(void 0,e)}static updateTime(e){return new Vn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $a(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Rc{}function rE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new oE(t.key,Vn.none()):new Nc(t.key,t.data,Vn.none());{const n=t.data,i=Ut.empty();let r=new Qe(vt.comparator);for(let s of e.fields)if(!r.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?i.delete(s):i.set(s,o),r=r.add(s)}return new ar(t.key,i,new rn(r.toArray()),Vn.none())}}function Ux(t,e,n){t instanceof Nc?function(i,r,s){const o=i.value.clone(),a=Og(i.fieldTransforms,r,s.transformResults);o.setAll(a),r.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ar?function(i,r,s){if(!$a(i.precondition,r))return void r.convertToUnknownDocument(s.version);const o=Og(i.fieldTransforms,r,s.transformResults),a=r.data;a.setAll(sE(i)),a.setAll(o),r.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(i,r,s){r.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Hs(t,e,n,i){return t instanceof Nc?function(r,s,o,a){if(!$a(r.precondition,s))return o;const l=r.value.clone(),c=Dg(r.fieldTransforms,a,s);return l.setAll(c),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,i):t instanceof ar?function(r,s,o,a){if(!$a(r.precondition,s))return o;const l=Dg(r.fieldTransforms,a,s),c=s.data;return c.setAll(sE(r)),c.setAll(l),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,i):function(r,s,o){return $a(r.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function Vx(t,e){let n=null;for(const i of t.fieldTransforms){const r=e.data.field(i.field),s=eE(i.transform,r||null);s!=null&&(n===null&&(n=Ut.empty()),n.set(i.field,s))}return n||null}function xg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&jr(n,i,(r,s)=>Lx(r,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Nc extends Rc{constructor(e,n,i,r=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ar extends Rc{constructor(e,n,i,r,s=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function sE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function Og(t,e,n){const i=new Map;Pe(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,Mx(o,a,n[r]))}return i}function Dg(t,e,n){const i=new Map;for(const r of t){const s=r.transform,o=n.data.field(r.field);i.set(r.field,Px(s,o,e))}return i}class oE extends Rc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $x extends Rc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{constructor(e,n,i,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(e.key)&&Ux(s,e,i[r])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=Hs(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=Hs(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=Q0();return this.mutations.forEach(r=>{const s=e.get(r.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(r.key)?null:a;const l=rE(o,a);l!==null&&i.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(Z.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ae())}isEqual(e){return this.batchId===e.batchId&&jr(this.mutations,e.mutations,(n,i)=>xg(n,i))&&jr(this.baseMutations,e.baseMutations,(n,i)=>xg(n,i))}}class Ld{constructor(e,n,i,r){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=r}static from(e,n,i){Pe(e.mutations.length===i.length);let r=Nx;const s=e.mutations;for(let o=0;o<s.length;o++)r=r.insert(s[o].key,i[o].version);return new Ld(e,n,i,r)}}/**
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
 */class jx{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class zx{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var We,ce;function Hx(t){switch(t){default:return Y();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function aE(t){if(t===void 0)return jn("GRPC error has no .code"),A.UNKNOWN;switch(t){case We.OK:return A.OK;case We.CANCELLED:return A.CANCELLED;case We.UNKNOWN:return A.UNKNOWN;case We.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case We.INTERNAL:return A.INTERNAL;case We.UNAVAILABLE:return A.UNAVAILABLE;case We.UNAUTHENTICATED:return A.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case We.NOT_FOUND:return A.NOT_FOUND;case We.ALREADY_EXISTS:return A.ALREADY_EXISTS;case We.PERMISSION_DENIED:return A.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case We.ABORTED:return A.ABORTED;case We.OUT_OF_RANGE:return A.OUT_OF_RANGE;case We.UNIMPLEMENTED:return A.UNIMPLEMENTED;case We.DATA_LOSS:return A.DATA_LOSS;default:return Y()}}(ce=We||(We={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Fd{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ba}static getOrCreateInstance(){return ba===null&&(ba=new Fd),ba}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let ba=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,n,i,r,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const r=new Map;return r.set(e,Go.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new xc(Z.min(),r,X0(),Hn(),ae())}}class Go{constructor(e,n,i,r,s){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new Go(i,n,ae(),ae(),ae())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,n,i,r){this.It=e,this.removedTargetIds=n,this.key=i,this.Tt=r}}class lE{constructor(e,n){this.targetId=e,this.Et=n}}class cE{constructor(e,n,i=Tt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=r}}class Pg{constructor(){this.At=0,this.Rt=Lg(),this.vt=Tt.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=ae(),n=ae(),i=ae();return this.Rt.forEach((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:i=i.add(r);break;default:Y()}}),new Go(this.vt,this.bt,e,n,i)}xt(){this.Pt=!1,this.Rt=Lg()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class Kx{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=Hn(),this.qt=Mg(),this.Ut=new Qe(_e)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const i=this.jt(n);switch(e.state){case 0:this.Wt(n)&&i.Dt(e.resumeToken);break;case 1:i.$t(),i.Vt||i.xt(),i.Dt(e.resumeToken);break;case 2:i.$t(),i.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(i.Mt(),i.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),i.Dt(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((i,r)=>{this.Wt(r)&&n(r)})}Jt(e){var n;const i=e.targetId,r=e.Et.count,s=this.Yt(i);if(s){const o=s.target;if(Lh(o))if(r===0){const a=new G(o.path);this.Qt(i,a,yt.newNoDocument(a,Z.min()))}else Pe(r===1);else{const a=this.Zt(i);a!==r&&(this.Ht(i),this.Ut=this.Ut.add(i),(n=Fd.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((s,o)=>{const a=this.Yt(o);if(a){if(s.current&&Lh(a.target)){const l=new G(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,yt.newNoDocument(l,e))}s.St&&(n.set(o,s.Ct()),s.xt())}});let i=ae();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Yt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(i=i.add(s))}),this.Lt.forEach((s,o)=>o.setReadTime(e));const r=new xc(e,n,this.Ut,this.Lt,i);return this.Lt=Hn(),this.qt=Mg(),this.Ut=new Qe(_e),r}Gt(e,n){if(!this.Wt(e))return;const i=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,i),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,i){if(!this.Wt(e))return;const r=this.jt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),i&&(this.Lt=this.Lt.insert(n,i))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new Pg,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Qe(_e),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||z("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new Pg),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function Mg(){return new Je(G.comparator)}function Lg(){return new Je(G.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wx=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),qx=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Gx=(()=>({and:"AND",or:"OR"}))();class Yx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Il(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function uE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Qx(t,e){return Il(t,e.toTimestamp())}function wn(t){return Pe(!!t),Z.fromTimestamp(function(e){const n=mi(e);return new Ge(n.seconds,n.nanos)}(t))}function Ud(t,e){return function(n){return new Fe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function hE(t){const e=Fe.fromString(t);return Pe(mE(e)),e}function Vh(t,e){return Ud(t.databaseId,e.path)}function Tu(t,e){const n=hE(e);if(n.get(1)!==t.databaseId.projectId)throw new q(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(fE(n))}function $h(t,e){return Ud(t.databaseId,e)}function Xx(t){const e=hE(t);return e.length===4?Fe.emptyPath():fE(e)}function Bh(t){return new Fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function fE(t){return Pe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Fg(t,e,n){return{name:Vh(t,e),fields:n.value.mapValue.fields}}function Jx(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=function(l,c){return l.useProto3Json?(Pe(c===void 0||typeof c=="string"),Tt.fromBase64String(c||"")):(Pe(c===void 0||c instanceof Uint8Array),Tt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?A.UNKNOWN:aE(l.code);return new q(c,l.message||"")}(o);n=new cE(i,r,s,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=Tu(t,i.document.name),s=wn(i.document.updateTime),o=i.document.createTime?wn(i.document.createTime):Z.min(),a=new Ut({mapValue:{fields:i.document.fields}}),l=yt.newFoundDocument(r,s,o,a),c=i.targetIds||[],u=i.removedTargetIds||[];n=new Ba(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=Tu(t,i.document),s=i.readTime?wn(i.readTime):Z.min(),o=yt.newNoDocument(r,s),a=i.removedTargetIds||[];n=new Ba([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=Tu(t,i.document),s=i.removedTargetIds||[];n=new Ba([],s,r,null)}else{if(!("filter"in e))return Y();{e.filter;const i=e.filter;i.targetId;const r=i.count||0,s=new zx(r),o=i.targetId;n=new lE(o,s)}}return n}function Zx(t,e){let n;if(e instanceof Nc)n={update:Fg(t,e.key,e.value)};else if(e instanceof oE)n={delete:Vh(t,e.key)};else if(e instanceof ar)n={update:Fg(t,e.key,e.data),updateMask:lO(e.fieldMask)};else{if(!(e instanceof $x))return Y();n={verify:Vh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(r,s){const o=s.transform;if(o instanceof wl)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof vo)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof bo)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Tl)return{fieldPath:s.field.canonicalString(),increment:o._t};throw Y()}(0,i))),e.precondition.isNone||(n.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:Qx(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:Y()}(t,e.precondition)),n}function eO(t,e){return t&&t.length>0?(Pe(e!==void 0),t.map(n=>function(i,r){let s=i.updateTime?wn(i.updateTime):wn(r);return s.isEqual(Z.min())&&(s=wn(r)),new Fx(s,i.transformResults||[])}(n,e))):[]}function tO(t,e){return{documents:[$h(t,e.path)]}}function nO(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=$h(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=$h(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(l){if(l.length!==0)return pE(Rn.create(l,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const s=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:mr(u.field),direction:sO(u.dir)}}(c))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,c){return l.useProto3Json||Tc(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function iO(t){let e=Xx(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){Pe(i===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=function(u){const h=dE(u);return h instanceof Rn&&j0(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new js(gr(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Tc(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,f=u.values||[];return new El(f,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,f=u.values||[];return new El(f,h)}(n.endAt)),Tx(e,r,o,s,a,"F",l,c)}function rO(t,e){const n=function(i,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Y()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function dE(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=gr(e.unaryFilter.field);return Ye.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=gr(e.unaryFilter.field);return Ye.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=gr(e.unaryFilter.field);return Ye.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=gr(e.unaryFilter.field);return Ye.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(e){return Ye.create(gr(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Rn.create(e.compositeFilter.filters.map(n=>dE(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return Y()}}(e.compositeFilter.op))}(t):Y()}function sO(t){return Wx[t]}function oO(t){return qx[t]}function aO(t){return Gx[t]}function mr(t){return{fieldPath:t.canonicalString()}}function gr(t){return vt.fromServerFormat(t.fieldPath)}function pE(t){return t instanceof Ye?function(e){if(e.op==="=="){if(Cg(e.value))return{unaryFilter:{field:mr(e.field),op:"IS_NAN"}};if(Ig(e.value))return{unaryFilter:{field:mr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Cg(e.value))return{unaryFilter:{field:mr(e.field),op:"IS_NOT_NAN"}};if(Ig(e.value))return{unaryFilter:{field:mr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mr(e.field),op:oO(e.op),value:e.value}}}(t):t instanceof Rn?function(e){const n=e.getFilters().map(i=>pE(i));return n.length===1?n[0]:{compositeFilter:{op:aO(e.op),filters:n}}}(t):Y()}function lO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function mE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,n,i,r,s=Z.min(),o=Z.min(),a=Tt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Ki(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Ki(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ki(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(e){this.se=e}}function uO(t){const e=iO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Fh(e,e.limit,"L"):e}/**
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
 */class hO{constructor(){this.He=new fO}addToCollectionParentIndex(e,n){return this.He.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(pi.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(pi.min())}updateCollectionGroup(e,n,i){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class fO{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n]||new Qe(Fe.comparator),s=!r.has(i);return this.index[n]=r.add(i),s}has(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n];return r&&r.has(i)}getEntries(e){return(this.index[e]||new Qe(Fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new Wr(0)}static bn(){return new Wr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dO{constructor(){this.changes=new ds(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,yt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?R.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class pO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mO{constructor(e,n,i,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=r}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(i=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(i!==null&&Hs(i.mutation,r,rn.empty(),Ge.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,ae()).next(()=>i))}getLocalViewOfDocuments(e,n,i=ae()){const r=Ui();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,i).next(s=>{let o=Ns();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const i=Ui();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,ae()))}populateOverlays(e,n,i){const r=[];return i.forEach(s=>{n.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(e,r).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,i,r){let s=Hn();const o=zs(),a=zs();return n.forEach((l,c)=>{const u=i.get(c.key);r.has(c.key)&&(u===void 0||u.mutation instanceof ar)?s=s.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Hs(u.mutation,c,u.mutation.getFieldMask(),Ge.now())):o.set(c.key,rn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new pO(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const i=zs();let r=new Je((o,a)=>o-a),s=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=i.get(l)||rn.empty();u=a.applyToLocalView(c,u),i.set(l,u);const h=(r.get(a.batchId)||ae()).add(l);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=Q0();u.forEach(f=>{if(!s.has(f)){const d=rE(n.get(f),i.get(f));d!==null&&h.set(f,d),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return R.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i){return function(r){return G.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Sx(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i):this.getDocumentsMatchingCollectionQuery(e,n,i)}getNextDocuments(e,n,i,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,r).next(s=>{const o=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,r-s.size):R.resolve(Ui());let a=-1,l=s;return o.next(c=>R.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?R.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,ae())).next(u=>({batchId:a,changes:Y0(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(i=>{let r=Ns();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,i){const r=n.collectionGroup;let s=Ns();return this.indexManager.getCollectionParents(e,r).next(o=>R.forEach(o,a=>{const l=function(c,u){return new Ic(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,l,i).next(c=>{c.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(s=>(r=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,r))).next(s=>{r.forEach((a,l)=>{const c=l.getKey();s.get(c)===null&&(s=s.insert(c,yt.newInvalidDocument(c)))});let o=Ns();return s.forEach((a,l)=>{const c=r.get(a);c!==void 0&&Hs(c.mutation,l,rn.empty(),Ge.now()),Ac(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class gO{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return R.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var i;return this.Zn.set(n.id,{id:(i=n).id,version:i.version,createTime:wn(i.createTime)}),R.resolve()}getNamedQuery(e,n){return R.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(i){return{name:i.name,query:uO(i.bundledQuery),readTime:wn(i.readTime)}}(n)),R.resolve()}}/**
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
 */class yO{constructor(){this.overlays=new Je(G.comparator),this.ts=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const i=Ui();return R.forEach(n,r=>this.getOverlay(e,r).next(s=>{s!==null&&i.set(r,s)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((r,s)=>{this.re(e,n,s)}),R.resolve()}removeOverlaysForBatchId(e,n,i){const r=this.ts.get(i);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.ts.delete(i)),R.resolve()}getOverlaysForCollection(e,n,i){const r=Ui(),s=n.length+1,o=new G(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>i&&r.set(l.getKey(),l)}return R.resolve(r)}getOverlaysForCollectionGroup(e,n,i,r){let s=new Je((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>i){let u=s.get(c.largestBatchId);u===null&&(u=Ui(),s=s.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Ui(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=r)););return R.resolve(a)}re(e,n,i){const r=this.overlays.get(i.key);if(r!==null){const o=this.ts.get(r.largestBatchId).delete(i.key);this.ts.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new jx(n,i));let s=this.ts.get(n);s===void 0&&(s=ae(),this.ts.set(n,s)),this.ts.set(n,s.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(){this.es=new Qe(tt.ns),this.ss=new Qe(tt.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const i=new tt(e,n);this.es=this.es.add(i),this.ss=this.ss.add(i)}os(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.us(new tt(e,n))}cs(e,n){e.forEach(i=>this.removeReference(i,n))}hs(e){const n=new G(new Fe([])),i=new tt(n,e),r=new tt(n,e+1),s=[];return this.ss.forEachInRange([i,r],o=>{this.us(o),s.push(o.key)}),s}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new G(new Fe([])),i=new tt(n,e),r=new tt(n,e+1);let s=ae();return this.ss.forEachInRange([i,r],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new tt(e,0),i=this.es.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class tt{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return G.comparator(e.key,n.key)||_e(e.ds,n.ds)}static rs(e,n){return _e(e.ds,n.ds)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _O{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new Qe(tt.ns)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,r){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Bx(s,n,i,r);this.mutationQueue.push(o);for(const a of r)this._s=this._s.add(new tt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,r=this.ys(i),s=r<0?0:r;return R.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new tt(n,0),r=new tt(n,Number.POSITIVE_INFINITY),s=[];return this._s.forEachInRange([i,r],o=>{const a=this.gs(o.ds);s.push(a)}),R.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new Qe(_e);return n.forEach(r=>{const s=new tt(r,0),o=new tt(r,Number.POSITIVE_INFINITY);this._s.forEachInRange([s,o],a=>{i=i.add(a.ds)})}),R.resolve(this.ps(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,r=i.length+1;let s=i;G.isDocumentKey(s)||(s=s.child(""));const o=new tt(new G(s),0);let a=new Qe(_e);return this._s.forEachWhile(l=>{const c=l.key.path;return!!i.isPrefixOf(c)&&(c.length===r&&(a=a.add(l.ds)),!0)},o),R.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(i=>{const r=this.gs(i);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Pe(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this._s;return R.forEach(n.mutations,r=>{const s=new tt(r.key,n.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this._s=i})}En(e){}containsKey(e,n){const i=new tt(n,0),r=this._s.firstAfterOrEqual(i);return R.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(e){this.Ts=e,this.docs=new Je(G.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,r=this.docs.get(i),s=r?r.size:0,o=this.Ts(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return R.resolve(i?i.document.mutableCopy():yt.newInvalidDocument(n))}getEntries(e,n){let i=Hn();return n.forEach(r=>{const s=this.docs.get(r);i=i.insert(r,s?s.document.mutableCopy():yt.newInvalidDocument(r))}),R.resolve(i)}getDocumentsMatchingQuery(e,n,i,r){let s=Hn();const o=n.path,a=new G(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||sx(rx(u),i)<=0||(r.has(u.key)||Ac(n,u))&&(s=s.insert(u.key,u.mutableCopy()))}return R.resolve(s)}getAllFromCollectionGroup(e,n,i,r){Y()}Es(e,n){return R.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new bO(this)}getSize(e){return R.resolve(this.size)}}class bO extends dO{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((i,r)=>{r.isValidDocument()?n.push(this.Jn.addEntry(e,r)):this.Jn.removeEntry(i)}),R.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EO{constructor(e){this.persistence=e,this.As=new ds(n=>Pd(n),Md),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Vd,this.targetCount=0,this.bs=Wr.vn()}forEachTarget(e,n){return this.As.forEach((i,r)=>n(r)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Rs&&(this.Rs=n),R.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new Wr(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.Sn(n),R.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,i){let r=0;const s=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.As.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),R.waitFor(s).next(()=>r)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const i=this.As.get(n)||null;return R.resolve(i)}addMatchingKeys(e,n,i){return this.vs.os(n,i),R.resolve()}removeMatchingKeys(e,n,i){this.vs.cs(n,i);const r=this.persistence.referenceDelegate,s=[];return r&&n.forEach(o=>{s.push(r.markPotentiallyOrphaned(e,o))}),R.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),R.resolve()}getMatchingKeysForTargetId(e,n){const i=this.vs.fs(n);return R.resolve(i)}containsKey(e,n){return R.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wO{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new Od(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new EO(this),this.indexManager=new hO,this.remoteDocumentCache=function(i){return new vO(i)}(i=>this.referenceDelegate.Cs(i)),this.serializer=new cO(n),this.xs=new gO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new yO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.Ps[e.toKey()];return i||(i=new _O(n,this.referenceDelegate),this.Ps[e.toKey()]=i),i}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,i){z("MemoryPersistence","Starting transaction:",e);const r=new TO(this.Vs.next());return this.referenceDelegate.Ns(),i(r).next(s=>this.referenceDelegate.ks(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Os(e,n){return R.or(Object.values(this.Ps).map(i=>()=>i.containsKey(e,n)))}}class TO extends ax{constructor(e){super(),this.currentSequenceNumber=e}}class $d{constructor(e){this.persistence=e,this.$s=new Vd,this.Ms=null}static Fs(e){return new $d(e)}get Bs(){if(this.Ms)return this.Ms;throw Y()}addReference(e,n,i){return this.$s.addReference(i,n),this.Bs.delete(i.toString()),R.resolve()}removeReference(e,n,i){return this.$s.removeReference(i,n),this.Bs.add(i.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),R.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(r=>this.Bs.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(s=>this.Bs.add(s.toString()))}).next(()=>i.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Bs,i=>{const r=G.fromPath(i);return this.Ls(e,r).next(s=>{s||n.removeEntry(r,Z.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(i=>{i?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return R.or([()=>R.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e,n,i,r){this.targetId=e,this.fromCache=n,this.Vi=i,this.Si=r}static Di(e,n){let i=ae(),r=ae();for(const s of n.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Bd(e,n.fromCache,i,r)}}/**
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
 */class IO{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,i,r){return this.Ni(e,n).next(s=>s||this.ki(e,n,r,i)).next(s=>s||this.Oi(e,n))}Ni(e,n){if(Rg(n))return R.resolve(null);let i=zn(n);return this.indexManager.getIndexType(e,i).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Fh(n,null,"F"),i=zn(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(s=>{const o=ae(...s);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(l=>{const c=this.$i(n,a);return this.Mi(n,c,o,l.readTime)?this.Ni(e,Fh(n,null,"F")):this.Fi(e,c,n,l)}))})))}ki(e,n,i,r){return Rg(n)||r.isEqual(Z.min())?this.Oi(e,n):this.xi.getDocuments(e,i).next(s=>{const o=this.$i(n,s);return this.Mi(n,o,i,r)?this.Oi(e,n):(bg()<=pe.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Uh(n)),this.Fi(e,o,n,ix(r,-1)))})}$i(e,n){let i=new Qe(q0(e));return n.forEach((r,s)=>{Ac(e,s)&&(i=i.add(s))}),i}Mi(e,n,i,r){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Oi(e,n){return bg()<=pe.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",Uh(n)),this.xi.getDocumentsMatchingQuery(e,n,pi.min())}Fi(e,n,i,r){return this.xi.getDocumentsMatchingQuery(e,i,r).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class CO{constructor(e,n,i,r){this.persistence=e,this.Bi=n,this.serializer=r,this.Li=new Je(_e),this.qi=new ds(s=>Pd(s),Md),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(i)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new mO(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function SO(t,e,n,i){return new CO(t,e,n,i)}async function gE(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let r;return n.mutationQueue.getAllMutationBatches(i).next(s=>(r=s,n.Gi(e),n.mutationQueue.getAllMutationBatches(i))).next(s=>{const o=[],a=[];let l=ae();for(const c of r){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of s){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(i,l).next(c=>({Qi:c,removedBatchIds:o,addedBatchIds:a}))})})}function AO(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const r=e.batch.keys(),s=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let f=R.resolve();return h.forEach(d=>{f=f.next(()=>c.getEntry(a,d)).next(m=>{const y=l.docVersions.get(d);Pe(y!==null),m.version.compareTo(y)<0&&(u.applyToRemoteDocument(m,l),m.isValidDocument()&&(m.setReadTime(l.commitVersion),c.addEntry(m)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,i,e,s).next(()=>s.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(o){let a=ae();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(i,r))})}function yE(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function kO(t,e){const n=te(t),i=e.snapshotVersion;let r=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});r=n.Li;const a=[];e.targetChanges.forEach((u,h)=>{const f=r.get(h);if(!f)return;a.push(n.Ds.removeMatchingKeys(s,u.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(s,u.addedDocuments,h)));let d=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?d=d.withResumeToken(Tt.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,i)),r=r.insert(h,d),function(m,y,b){return m.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(f,d,u)&&a.push(n.Ds.updateTargetData(s,d))});let l=Hn(),c=ae();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(RO(s,o,e.documentUpdates).next(u=>{l=u.zi,c=u.ji})),!i.isEqual(Z.min())){const u=n.Ds.getLastRemoteSnapshotVersion(s).next(h=>n.Ds.setTargetsMetadata(s,s.currentSequenceNumber,i));a.push(u)}return R.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.Li=r,s))}function RO(t,e,n){let i=ae(),r=ae();return n.forEach(s=>i=i.add(s)),e.getEntries(t,i).next(s=>{let o=Hn();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(r=r.add(a)),l.isNoDocument()&&l.version.isEqual(Z.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):z("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{zi:o,ji:r}})}function NO(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function xO(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let r;return n.Ds.getTargetData(i,e).next(s=>s?(r=s,R.resolve(r)):n.Ds.allocateTargetId(i).next(o=>(r=new Ki(e,o,0,i.currentSequenceNumber),n.Ds.addTargetData(i,r).next(()=>r))))}).then(i=>{const r=n.Li.get(i.targetId);return(r===null||i.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Li=n.Li.insert(i.targetId,i),n.qi.set(e,i.targetId)),i})}async function jh(t,e,n){const i=te(t),r=i.Li.get(e),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,o=>i.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!qo(o))throw o;z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.Li=i.Li.remove(e),i.qi.delete(r.target)}function Ug(t,e,n){const i=te(t);let r=Z.min(),s=ae();return i.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=te(a),h=u.qi.get(c);return h!==void 0?R.resolve(u.Li.get(h)):u.Ds.getTargetData(l,c)}(i,o,zn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,i.Ds.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>i.Bi.getDocumentsMatchingQuery(o,e,n?r:Z.min(),n?s:ae())).next(a=>(OO(i,Ax(e),a),{documents:a,Wi:s})))}function OO(t,e,n){let i=t.Ui.get(e)||Z.min();n.forEach((r,s)=>{s.readTime.compareTo(i)>0&&(i=s.readTime)}),t.Ui.set(e,i)}class Vg{constructor(){this.activeTargetIds=X0()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class DO{constructor(){this.Br=new Vg,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,i){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new Vg,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class PO{qr(e){}shutdown(){}}/**
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
 */class $g{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ea=null;function Iu(){return Ea===null?Ea=268435456+Math.round(2147483648*Math.random()):Ea++,"0x"+Ea.toString(16)}/**
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
 */const MO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LO{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt="WebChannelConnection";class FO extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,i,r,s){const o=Iu(),a=this.ao(e,n);z("RestConnection",`Sending RPC '${e}' ${o}:`,a,i);const l={};return this.ho(l,r,s),this.lo(e,a,l,i).then(c=>(z("RestConnection",`Received RPC '${e}' ${o}: `,c),c),c=>{throw vl("RestConnection",`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",i),c})}fo(e,n,i,r,s,o){return this.co(e,n,i,r,s)}ho(e,n,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+fs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,s)=>e[s]=r),i&&i.headers.forEach((r,s)=>e[s]=r)}ao(e,n){const i=MO[e];return`${this.ro}/v1/${n}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,i,r){const s=Iu();return new Promise((o,a)=>{const l=new qN;l.setWithCredentials(!0),l.listenOnce(HN.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case wu.NO_ERROR:const u=l.getResponseJson();z(dt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(u)),o(u);break;case wu.TIMEOUT:z(dt,`RPC '${e}' ${s} timed out`),a(new q(A.DEADLINE_EXCEEDED,"Request time out"));break;case wu.HTTP_ERROR:const h=l.getStatus();if(z(dt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const m=function(y){const b=y.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(b)>=0?b:A.UNKNOWN}(d.status);a(new q(m,d.message))}else a(new q(A.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new q(A.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{z(dt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(r);z(dt,`RPC '${e}' ${s} sending request:`,r),l.send(n,"POST",c,i,15)})}wo(e,n,i){const r=Iu(),s=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=jN(),a=zN(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new WN({})),this.ho(l.initMessageHeaders,n,i),l.encodeInitMessageHeaders=!0;const c=s.join("");z(dt,`Creating RPC '${e}' stream ${r}: ${c}`,l);const u=o.createWebChannel(c,l);let h=!1,f=!1;const d=new LO({Wr:y=>{f?z(dt,`Not sending because RPC '${e}' stream ${r} is closed:`,y):(h||(z(dt,`Opening RPC '${e}' stream ${r} transport.`),u.open(),h=!0),z(dt,`RPC '${e}' stream ${r} sending:`,y),u.send(y))},Hr:()=>u.close()}),m=(y,b,_)=>{y.listen(b,v=>{try{_(v)}catch(E){setTimeout(()=>{throw E},0)}})};return m(u,ya.EventType.OPEN,()=>{f||z(dt,`RPC '${e}' stream ${r} transport opened.`)}),m(u,ya.EventType.CLOSE,()=>{f||(f=!0,z(dt,`RPC '${e}' stream ${r} transport closed`),d.so())}),m(u,ya.EventType.ERROR,y=>{f||(f=!0,vl(dt,`RPC '${e}' stream ${r} transport errored:`,y),d.so(new q(A.UNAVAILABLE,"The operation could not be completed")))}),m(u,ya.EventType.MESSAGE,y=>{var b;if(!f){const _=y.data[0];Pe(!!_);const v=_,E=v.error||((b=v[0])===null||b===void 0?void 0:b.error);if(E){z(dt,`RPC '${e}' stream ${r} received error:`,E);const I=E.status;let V=function(re){const ge=We[re];if(ge!==void 0)return aE(ge)}(I),X=E.message;V===void 0&&(V=A.INTERNAL,X="Unknown error status: "+I+" with message "+E.message),f=!0,d.so(new q(V,X)),u.close()}else z(dt,`RPC '${e}' stream ${r} received:`,_),d.io(_)}}),m(a,KN.STAT_EVENT,y=>{y.stat===_g.PROXY?z(dt,`RPC '${e}' stream ${r} detected buffering proxy`):y.stat===_g.NOPROXY&&z(dt,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{d.no()},0),d}}function Cu(){return typeof document<"u"?document:null}/**
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
 */function Oc(t){return new Yx(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e,n,i=1e3,r=1.5,s=6e4){this.Ws=e,this.timerId=n,this._o=i,this.mo=r,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),i=Math.max(0,Date.now()-this.To),r=Math.max(0,n-i);r>0&&z("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,r,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e,n,i,r,s,o,a,l){this.Ws=e,this.bo=i,this.Po=r,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new _E(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(jn(n.toString()),jn("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,r])=>{this.Vo===n&&this.Ko(i,r)},i=>{e(()=>{const r=new q(A.UNKNOWN,"Fetching auth token failed: "+i.message);return this.Go(r)})})}Ko(e,n){const i=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{i(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(r=>{i(()=>this.Go(r))}),this.stream.onMessage(r=>{i(()=>this.onMessage(r))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class UO extends vE{constructor(e,n,i,r,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,r,o),this.serializer=s}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=Jx(this.serializer,e),i=function(r){if(!("targetChange"in r))return Z.min();const s=r.targetChange;return s.targetIds&&s.targetIds.length?Z.min():s.readTime?wn(s.readTime):Z.min()}(e);return this.listener.zo(n,i)}jo(e){const n={};n.database=Bh(this.serializer),n.addTarget=function(r,s){let o;const a=s.target;return o=Lh(a)?{documents:tO(r,a)}:{query:nO(r,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=uE(r,s.resumeToken):s.snapshotVersion.compareTo(Z.min())>0&&(o.readTime=Il(r,s.snapshotVersion.toTimestamp())),o}(this.serializer,e);const i=rO(this.serializer,e);i&&(n.labels=i),this.Fo(n)}Wo(e){const n={};n.database=Bh(this.serializer),n.removeTarget=e,this.Fo(n)}}class VO extends vE{constructor(e,n,i,r,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,r,o),this.serializer=s,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Pe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=eO(e.writeResults,e.commitTime),i=wn(e.commitTime);return this.listener.Zo(i,n)}return Pe(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=Bh(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>Zx(this.serializer,i))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O extends class{}{constructor(e,n,i,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=r,this.eu=!1}nu(){if(this.eu)throw new q(A.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.connection.co(e,n,i,r,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new q(A.UNKNOWN,r.toString())})}fo(e,n,i,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.fo(e,n,i,s,o,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(A.UNKNOWN,s.toString())})}terminate(){this.eu=!0}}class BO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(jn(n),this.ru=!1):z("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jO{constructor(e,n,i,r,s){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=s,this._u.qr(o=>{i.enqueueAndForget(async()=>{lr(this)&&(z("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=te(a);l.du.add(4),await Yo(l),l.mu.set("Unknown"),l.du.delete(4),await Dc(l)}(this))})}),this.mu=new BO(i,r)}}async function Dc(t){if(lr(t))for(const e of t.wu)await e(!0)}async function Yo(t){for(const e of t.wu)await e(!1)}function bE(t,e){const n=te(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),Hd(n)?zd(n):ps(n).No()&&jd(n,e))}function EE(t,e){const n=te(t),i=ps(n);n.fu.delete(e),i.No()&&wE(n,e),n.fu.size===0&&(i.No()?i.$o():lr(n)&&n.mu.set("Unknown"))}function jd(t,e){t.gu.Ot(e.targetId),ps(t).jo(e)}function wE(t,e){t.gu.Ot(e),ps(t).Wo(e)}function zd(t){t.gu=new Kx({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),ps(t).start(),t.mu.ou()}function Hd(t){return lr(t)&&!ps(t).xo()&&t.fu.size>0}function lr(t){return te(t).du.size===0}function TE(t){t.gu=void 0}async function zO(t){t.fu.forEach((e,n)=>{jd(t,e)})}async function HO(t,e){TE(t),Hd(t)?(t.mu.au(e),zd(t)):t.mu.set("Unknown")}async function KO(t,e,n){if(t.mu.set("Online"),e instanceof cE&&e.state===2&&e.cause)try{await async function(i,r){const s=r.cause;for(const o of r.targetIds)i.fu.has(o)&&(await i.remoteSyncer.rejectListen(o,s),i.fu.delete(o),i.gu.removeTarget(o))}(t,e)}catch(i){z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Cl(t,i)}else if(e instanceof Ba?t.gu.Kt(e):e instanceof lE?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(Z.min()))try{const i=await yE(t.localStore);n.compareTo(i)>=0&&await function(r,s){const o=r.gu.Xt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=r.fu.get(l);c&&r.fu.set(l,c.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=r.fu.get(a);if(!l)return;r.fu.set(a,l.withResumeToken(Tt.EMPTY_BYTE_STRING,l.snapshotVersion)),wE(r,a);const c=new Ki(l.target,a,1,l.sequenceNumber);jd(r,c)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(i){z("RemoteStore","Failed to raise snapshot:",i),await Cl(t,i)}}async function Cl(t,e,n){if(!qo(e))throw e;t.du.add(1),await Yo(t),t.mu.set("Offline"),n||(n=()=>yE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{z("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await Dc(t)})}function IE(t,e){return e().catch(n=>Cl(t,n,e))}async function Pc(t){const e=te(t),n=gi(e);let i=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;WO(e);)try{const r=await NO(e.localStore,i);if(r===null){e.lu.length===0&&n.$o();break}i=r.batchId,qO(e,r)}catch(r){await Cl(e,r)}CE(e)&&SE(e)}function WO(t){return lr(t)&&t.lu.length<10}function qO(t,e){t.lu.push(e);const n=gi(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function CE(t){return lr(t)&&!gi(t).xo()&&t.lu.length>0}function SE(t){gi(t).start()}async function GO(t){gi(t).tu()}async function YO(t){const e=gi(t);for(const n of t.lu)e.Yo(n.mutations)}async function QO(t,e,n){const i=t.lu.shift(),r=Ld.from(i,e,n);await IE(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Pc(t)}async function XO(t,e){e&&gi(t).Jo&&await async function(n,i){if(r=i.code,Hx(r)&&r!==A.ABORTED){const s=n.lu.shift();gi(n).Oo(),await IE(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Pc(n)}var r}(t,e),CE(t)&&SE(t)}async function Bg(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),z("RemoteStore","RemoteStore received new credentials");const i=lr(n);n.du.add(3),await Yo(n),i&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await Dc(n)}async function JO(t,e){const n=te(t);e?(n.du.delete(2),await Dc(n)):e||(n.du.add(2),await Yo(n),n.mu.set("Unknown"))}function ps(t){return t.yu||(t.yu=function(e,n,i){const r=te(e);return r.nu(),new UO(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{Jr:zO.bind(null,t),Zr:HO.bind(null,t),zo:KO.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),Hd(t)?zd(t):t.mu.set("Unknown")):(await t.yu.stop(),TE(t))})),t.yu}function gi(t){return t.pu||(t.pu=function(e,n,i){const r=te(e);return r.nu(),new VO(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{Jr:GO.bind(null,t),Zr:XO.bind(null,t),Xo:YO.bind(null,t),Zo:QO.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await Pc(t)):(await t.pu.stop(),t.lu.length>0&&(z("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e,n,i,r,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new Un,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,r,s){const o=Date.now()+i,a=new Kd(e,n,o,r,s);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wd(t,e){if(jn("AsyncQueue",`${e}: ${t}`),qo(t))return new q(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e){this.comparator=e?(n,i)=>e(n,i)||G.comparator(n.key,i.key):(n,i)=>G.comparator(n.key,i.key),this.keyedMap=Ns(),this.sortedSet=new Je(this.comparator)}static emptySet(e){return new Dr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Dr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new Dr;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(){this.Iu=new Je(G.comparator)}track(e){const n=e.doc.key,i=this.Iu.get(n);i?e.type!==0&&i.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&i.type!==1?this.Iu=this.Iu.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Iu=this.Iu.remove(n):e.type===1&&i.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):Y():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,i)=>{e.push(i)}),e}}class qr{constructor(e,n,i,r,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,i,r,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new qr(e,n,Dr.emptySet(n),o,i,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Sc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==i[r].type||!n[r].doc.isEqual(i[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZO{constructor(){this.Eu=void 0,this.listeners=[]}}class eD{constructor(){this.queries=new ds(e=>W0(e),Sc),this.onlineState="Unknown",this.Au=new Set}}async function qd(t,e){const n=te(t),i=e.query;let r=!1,s=n.queries.get(i);if(s||(r=!0,s=new ZO),r)try{s.Eu=await n.onListen(i)}catch(o){const a=Wd(o,`Initialization of query '${Uh(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.listeners.push(e),e.Ru(n.onlineState),s.Eu&&e.vu(s.Eu)&&Yd(n)}async function Gd(t,e){const n=te(t),i=e.query;let r=!1;const s=n.queries.get(i);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),r=s.listeners.length===0)}if(r)return n.queries.delete(i),n.onUnlisten(i)}function tD(t,e){const n=te(t);let i=!1;for(const r of e){const s=r.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.vu(r)&&(i=!0);o.Eu=r}}i&&Yd(n)}function nD(t,e,n){const i=te(t),r=i.queries.get(e);if(r)for(const s of r.listeners)s.onError(n);i.queries.delete(e)}function Yd(t){t.Au.forEach(e=>{e.next()})}class Qd{constructor(e,n,i){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=i||{}}vu(e){if(!this.options.includeMetadataChanges){const i=[];for(const r of e.docChanges)r.type!==3&&i.push(r);e=new qr(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.xu||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=qr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e){this.key=e}}class kE{constructor(e){this.key=e}}class iD{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=ae(),this.mutatedKeys=ae(),this.Ku=q0(e),this.Gu=new Dr(this.Ku)}get Qu(){return this.Lu}zu(e,n){const i=n?n.ju:new jg,r=n?n.Gu:this.Gu;let s=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const l=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,c=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const f=r.get(u),d=Ac(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),y=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let b=!1;f&&d?f.data.isEqual(d.data)?m!==y&&(i.track({type:3,doc:d}),b=!0):this.Wu(f,d)||(i.track({type:2,doc:d}),b=!0,(l&&this.Ku(d,l)>0||c&&this.Ku(d,c)<0)&&(a=!0)):!f&&d?(i.track({type:0,doc:d}),b=!0):f&&!d&&(i.track({type:1,doc:f}),b=!0,(l||c)&&(a=!0)),b&&(d?(o=o.add(d),s=y?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),i.track({type:1,doc:u})}return{Gu:o,ju:i,Mi:a,mutatedKeys:s}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const r=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const s=e.ju.Tu();s.sort((c,u)=>function(h,f){const d=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return d(h)-d(f)}(c.type,u.type)||this.Ku(c.doc,u.doc)),this.Hu(i);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,s.length!==0||l?{snapshot:new qr(this.query,e.Gu,r,s,e.mutatedKeys,a===0,l,!1,!!i&&i.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new jg,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=ae(),this.Gu.forEach(i=>{this.Zu(i.key)&&(this.Uu=this.Uu.add(i.key))});const n=[];return e.forEach(i=>{this.Uu.has(i)||n.push(new kE(i))}),this.Uu.forEach(i=>{e.has(i)||n.push(new AE(i))}),n}Xu(e){this.Lu=e.Wi,this.Uu=ae();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return qr.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class rD{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class sD{constructor(e){this.key=e,this.ec=!1}}class oD{constructor(e,n,i,r,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new ds(a=>W0(a),Sc),this.ic=new Map,this.rc=new Set,this.oc=new Je(G.comparator),this.uc=new Map,this.cc=new Vd,this.ac={},this.hc=new Map,this.lc=Wr.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function aD(t,e){const n=yD(t);let i,r;const s=n.sc.get(e);if(s)i=s.targetId,n.sharedClientState.addLocalQueryTarget(i),r=s.view.tc();else{const o=await xO(n.localStore,zn(e));n.isPrimaryClient&&bE(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,r=await lD(n,e,i,a==="current",o.resumeToken)}return r}async function lD(t,e,n,i,r){t.dc=(h,f,d)=>async function(m,y,b,_){let v=y.view.zu(b);v.Mi&&(v=await Ug(m.localStore,y.query,!1).then(({documents:V})=>y.view.zu(V,v)));const E=_&&_.targetChanges.get(y.targetId),I=y.view.applyChanges(v,m.isPrimaryClient,E);return Hg(m,y.targetId,I.Yu),I.snapshot}(t,h,f,d);const s=await Ug(t.localStore,e,!0),o=new iD(e,s.Wi),a=o.zu(s.documents),l=Go.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",r),c=o.applyChanges(a,t.isPrimaryClient,l);Hg(t,n,c.Yu);const u=new rD(e,n,o);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),c.snapshot}async function cD(t,e){const n=te(t),i=n.sc.get(e),r=n.ic.get(i.targetId);if(r.length>1)return n.ic.set(i.targetId,r.filter(s=>!Sc(s,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await jh(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),EE(n.remoteStore,i.targetId),zh(n,i.targetId)}).catch(Wo)):(zh(n,i.targetId),await jh(n.localStore,i.targetId,!0))}async function uD(t,e,n){const i=_D(t);try{const r=await function(s,o){const a=te(s),l=Ge.now(),c=o.reduce((f,d)=>f.add(d.key),ae());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=Hn(),m=ae();return a.Ki.getEntries(f,c).next(y=>{d=y,d.forEach((b,_)=>{_.isValidDocument()||(m=m.add(b))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(y=>{u=y;const b=[];for(const _ of o){const v=Vx(_,u.get(_.key).overlayedDocument);v!=null&&b.push(new ar(_.key,v,V0(v.value.mapValue),Vn.exists(!0)))}return a.mutationQueue.addMutationBatch(f,l,b,o)}).next(y=>{h=y;const b=y.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(f,y.batchId,b)})}).then(()=>({batchId:h.batchId,changes:Y0(u)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(r.batchId),function(s,o,a){let l=s.ac[s.currentUser.toKey()];l||(l=new Je(_e)),l=l.insert(o,a),s.ac[s.currentUser.toKey()]=l}(i,r.batchId,n),await Qo(i,r.changes),await Pc(i.remoteStore)}catch(r){const s=Wd(r,"Failed to persist write");n.reject(s)}}async function RE(t,e){const n=te(t);try{const i=await kO(n.localStore,e);e.targetChanges.forEach((r,s)=>{const o=n.uc.get(s);o&&(Pe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ec=!0:r.modifiedDocuments.size>0?Pe(o.ec):r.removedDocuments.size>0&&(Pe(o.ec),o.ec=!1))}),await Qo(n,i,e)}catch(i){await Wo(i)}}function zg(t,e,n){const i=te(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const r=[];i.sc.forEach((s,o)=>{const a=o.view.Ru(e);a.snapshot&&r.push(a.snapshot)}),function(s,o){const a=te(s);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.Ru(o)&&(l=!0)}),l&&Yd(a)}(i.eventManager,e),r.length&&i.nc.zo(r),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function hD(t,e,n){const i=te(t);i.sharedClientState.updateQueryState(e,"rejected",n);const r=i.uc.get(e),s=r&&r.key;if(s){let o=new Je(G.comparator);o=o.insert(s,yt.newNoDocument(s,Z.min()));const a=ae().add(s),l=new xc(Z.min(),new Map,new Qe(_e),o,a);await RE(i,l),i.oc=i.oc.remove(s),i.uc.delete(e),Xd(i)}else await jh(i.localStore,e,!1).then(()=>zh(i,e,n)).catch(Wo)}async function fD(t,e){const n=te(t),i=e.batch.batchId;try{const r=await AO(n.localStore,e);xE(n,i,null),NE(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Qo(n,r)}catch(r){await Wo(r)}}async function dD(t,e,n){const i=te(t);try{const r=await function(s,o){const a=te(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(Pe(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(i.localStore,e);xE(i,e,n),NE(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await Qo(i,r)}catch(r){await Wo(r)}}function NE(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function xE(t,e,n){const i=te(t);let r=i.ac[i.currentUser.toKey()];if(r){const s=r.get(e);s&&(n?s.reject(n):s.resolve(),r=r.remove(e)),i.ac[i.currentUser.toKey()]=r}}function zh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.ic.get(e))t.sc.delete(i),n&&t.nc.wc(i,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(i=>{t.cc.containsKey(i)||OE(t,i)})}function OE(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(EE(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Xd(t))}function Hg(t,e,n){for(const i of n)i instanceof AE?(t.cc.addReference(i.key,e),pD(t,i)):i instanceof kE?(z("SyncEngine","Document no longer in limbo: "+i.key),t.cc.removeReference(i.key,e),t.cc.containsKey(i.key)||OE(t,i.key)):Y()}function pD(t,e){const n=e.key,i=n.path.canonicalString();t.oc.get(n)||t.rc.has(i)||(z("SyncEngine","New document in limbo: "+n),t.rc.add(i),Xd(t))}function Xd(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new G(Fe.fromString(e)),i=t.lc.next();t.uc.set(i,new sD(n)),t.oc=t.oc.insert(n,i),bE(t.remoteStore,new Ki(zn(Cc(n.path)),i,2,Od.ct))}}async function Qo(t,e,n){const i=te(t),r=[],s=[],o=[];i.sc.isEmpty()||(i.sc.forEach((a,l)=>{o.push(i.dc(l,e,n).then(c=>{if((c||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){r.push(c);const u=Bd.Di(l.targetId,c);s.push(u)}}))}),await Promise.all(o),i.nc.zo(r),await async function(a,l){const c=te(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>R.forEach(l,h=>R.forEach(h.Vi,f=>c.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>R.forEach(h.Si,f=>c.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!qo(u))throw u;z("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const f=c.Li.get(h),d=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(d);c.Li=c.Li.insert(h,m)}}}(i.localStore,s))}async function mD(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){z("SyncEngine","User change. New user:",e.toKey());const i=await gE(n.localStore,e);n.currentUser=e,function(r,s){r.hc.forEach(o=>{o.forEach(a=>{a.reject(new q(A.CANCELLED,s))})}),r.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Qo(n,i.Qi)}}function gD(t,e){const n=te(t),i=n.uc.get(e);if(i&&i.ec)return ae().add(i.key);{let r=ae();const s=n.ic.get(e);if(!s)return r;for(const o of s){const a=n.sc.get(o);r=r.unionWith(a.view.Qu)}return r}}function yD(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=RE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hD.bind(null,e),e.nc.zo=tD.bind(null,e.eventManager),e.nc.wc=nD.bind(null,e.eventManager),e}function _D(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=fD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=dD.bind(null,e),e}class Kg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Oc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return SO(this.persistence,new IO,e.initialUser,this.serializer)}createPersistence(e){return new wO($d.Fs,this.serializer)}createSharedClientState(e){return new DO}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class vD{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>zg(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=mD.bind(null,this.syncEngine),await JO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new eD}createDatastore(e){const n=Oc(e.databaseInfo.databaseId),i=(r=e.databaseInfo,new FO(r));var r;return function(s,o,a,l){return new $O(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return n=this.localStore,i=this.datastore,r=e.asyncQueue,s=a=>zg(this.syncEngine,a,0),o=$g.D()?new $g:new PO,new jO(n,i,r,s,o);var n,i,r,s,o}createSyncEngine(e,n){return function(i,r,s,o,a,l,c){const u=new oD(i,r,s,o,a,l);return c&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=te(e);z("RemoteStore","RemoteStore shutting down."),n.du.add(5),await Yo(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
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
 */class Jd{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):jn("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bD{constructor(e,n,i,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=r,this.user=pt.UNAUTHENTICATED,this.clientId=M0.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async s=>{z("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(i,s=>(z("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Un;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=Wd(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Su(t,e){t.asyncQueue.verifyOperationInProgress(),z("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async r=>{i.isEqual(r)||(await gE(e.localStore,r),i=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Wg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await wD(t);z("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(r=>Bg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Bg(e.remoteStore,s)),t._onlineComponents=e}function ED(t){return t.name==="FirebaseError"?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function wD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){z("FirestoreClient","Using user provided OfflineComponentProvider");try{await Su(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!ED(n))throw n;vl("Error using user provided cache. Falling back to memory cache: "+n),await Su(t,new Kg)}}else z("FirestoreClient","Using default OfflineComponentProvider"),await Su(t,new Kg);return t._offlineComponents}async function DE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(z("FirestoreClient","Using user provided OnlineComponentProvider"),await Wg(t,t._uninitializedComponentsProvider._online)):(z("FirestoreClient","Using default OnlineComponentProvider"),await Wg(t,new vD))),t._onlineComponents}function TD(t){return DE(t).then(e=>e.syncEngine)}async function Sl(t){const e=await DE(t),n=e.eventManager;return n.onListen=aD.bind(null,e.syncEngine),n.onUnlisten=cD.bind(null,e.syncEngine),n}function ID(t,e,n={}){const i=new Un;return t.asyncQueue.enqueueAndForget(async()=>function(r,s,o,a,l){const c=new Jd({next:h=>{s.enqueueAndForget(()=>Gd(r,u));const f=h.docs.has(o);!f&&h.fromCache?l.reject(new q(A.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?l.reject(new q(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new Qd(Cc(o.path),c,{includeMetadataChanges:!0,xu:!0});return qd(r,u)}(await Sl(t),t.asyncQueue,e,n,i)),i.promise}function CD(t,e,n={}){const i=new Un;return t.asyncQueue.enqueueAndForget(async()=>function(r,s,o,a,l){const c=new Jd({next:h=>{s.enqueueAndForget(()=>Gd(r,u)),h.fromCache&&a.source==="server"?l.reject(new q(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new Qd(o,c,{includeMetadataChanges:!0,xu:!0});return qd(r,u)}(await Sl(t),t.asyncQueue,e,n,i)),i.promise}/**
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
 */const qg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PE(t,e,n){if(!n)throw new q(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function SD(t,e,n,i){if(e===!0&&i===!0)throw new q(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Gg(t){if(!G.isDocumentKey(t))throw new q(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Yg(t){if(G.isDocumentKey(t))throw new q(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Zd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function Tn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Zd(t);throw new q(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Qg{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new q(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,SD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Mc{constructor(e,n,i,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new q(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new q(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qg(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new GN;switch(n.type){case"firstParty":return new JN(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new q(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=qg.get(e);n&&(z("ComponentProvider","Removing Datastore"),qg.delete(e),n.terminate())}(this),Promise.resolve()}}function AD(t,e,n,i={}){var r;const s=(t=Tn(t,Mc))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&vl("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let o,a;if(typeof i.mockUserToken=="string")o=i.mockUserToken,a=pt.MOCK_USER;else{o=E1(i.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const l=i.mockUserToken.sub||i.mockUserToken.user_id;if(!l)throw new q(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new pt(l)}t._authCredentials=new YN(new P0(o,a))}}/**
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
 */class Dt{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ui(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Dt(this.firestore,e,this._key)}}class Xo{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Xo(this.firestore,e,this._query)}}class ui extends Xo{constructor(e,n,i){super(e,n,Cc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Dt(this.firestore,null,new G(e))}withConverter(e){return new ui(this.firestore,e,this._path)}}function Eo(t,e,...n){if(t=Mt(t),PE("collection","path",e),t instanceof Mc){const i=Fe.fromString(e,...n);return Yg(i),new ui(t,null,i)}{if(!(t instanceof Dt||t instanceof ui))throw new q(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Fe.fromString(e,...n));return Yg(i),new ui(t.firestore,null,i)}}function zt(t,e,...n){if(t=Mt(t),arguments.length===1&&(e=M0.A()),PE("doc","path",e),t instanceof Mc){const i=Fe.fromString(e,...n);return Gg(i),new Dt(t,null,new G(i))}{if(!(t instanceof Dt||t instanceof ui))throw new q(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Fe.fromString(e,...n));return Gg(i),new Dt(t.firestore,t instanceof ui?t.converter:null,new G(i))}}/**
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
 */class kD{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new _E(this,"async_queue_retry"),this.qc=()=>{const n=Cu();n&&z("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=Cu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=Cu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new Un;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!qo(e))throw e;z("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(i=>{this.Mc=i,this.Fc=!1;const r=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(i);throw jn("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.Fc=!1,i))));return this.Nc=n,n}enqueueAfterDelay(e,n,i){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const r=Kd.createAndSchedule(this,e,n,i,s=>this.Qc(s));return this.$c.push(r),r}Uc(){this.Mc&&Y()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function Xg(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const i=e;for(const r of n)if(r in i&&typeof i[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Gr extends Mc{constructor(e,n,i,r){super(e,n,i,r),this.type="firestore",this._queue=new kD,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||LE(this),this._firestoreClient.terminate()}}function ME(t,e){const n=typeof t=="object"?t:nv(),i=typeof t=="string"?t:e||"(default)",r=RC(n,"firestore").getImmediate({identifier:i});if(!r._initialized){const s=_1("firestore");s&&AD(r,...s)}return r}function Lc(t){return t._firestoreClient||LE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function LE(t){var e,n,i;const r=t._freezeSettings(),s=function(o,a,l,c){return new hx(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new bD(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=r.cache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
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
 */class Yr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Yr(Tt.fromBase64String(e))}catch(n){throw new q(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Yr(Tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Fc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new vt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ep{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RD=/^__.*__$/;class FE{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new ar(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function UE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class tp{constructor(e,n,i,r,s,o){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=r,s===void 0&&this.Jc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new tp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Zc({path:i,ta:!1});return r.ea(e),r}na(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Zc({path:i,ta:!1});return r.Jc(),r}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return Al(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(UE(this.Yc)&&RD.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class ND{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||Oc(e)}ua(e,n,i,r=!1){return new tp({Yc:e,methodName:n,oa:i,path:vt.emptyPath(),ta:!1,ra:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xD(t){const e=t._freezeSettings(),n=Oc(t._databaseId);return new ND(t._databaseId,!!e.ignoreUndefinedProperties,n)}class Vc extends ep{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Vc}}function OD(t,e,n,i){const r=t.ua(1,e,n);$E("Data must be an object, but it was:",r,i);const s=[],o=Ut.empty();or(i,(l,c)=>{const u=np(e,l,n);c=Mt(c);const h=r.na(u);if(c instanceof Vc)s.push(u);else{const f=$c(c,h);f!=null&&(s.push(u),o.set(u,f))}});const a=new rn(s);return new FE(o,a,r.fieldTransforms)}function DD(t,e,n,i,r,s){const o=t.ua(1,e,n),a=[Jg(e,i,n)],l=[r];if(s.length%2!=0)throw new q(A.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(Jg(e,s[f])),l.push(s[f+1]);const c=[],u=Ut.empty();for(let f=a.length-1;f>=0;--f)if(!LD(c,a[f])){const d=a[f];let m=l[f];m=Mt(m);const y=o.na(d);if(m instanceof Vc)c.push(d);else{const b=$c(m,y);b!=null&&(c.push(d),u.set(d,b))}}const h=new rn(c);return new FE(u,h,o.fieldTransforms)}function $c(t,e){if(VE(t=Mt(t)))return $E("Unsupported field value:",e,t),PD(t,e);if(t instanceof ep)return function(n,i){if(!UE(i.Yc))throw i.ia(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.ia(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,i){const r=[];let s=0;for(const o of n){let a=$c(o,i.sa(s));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),s++}return{arrayValue:{values:r}}}(t,e)}return function(n,i){if((n=Mt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Dx(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Ge.fromDate(n);return{timestampValue:Il(i.serializer,r)}}if(n instanceof Ge){const r=new Ge(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Il(i.serializer,r)}}if(n instanceof Uc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Yr)return{bytesValue:uE(i.serializer,n._byteString)};if(n instanceof Dt){const r=i.databaseId,s=n.firestore._databaseId;if(!s.isEqual(r))throw i.ia(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Ud(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i.ia(`Unsupported field value: ${Zd(n)}`)}(t,e)}function PD(t,e){const n={};return L0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):or(t,(i,r)=>{const s=$c(r,e.Xc(i));s!=null&&(n[i]=s)}),{mapValue:{fields:n}}}function VE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ge||t instanceof Uc||t instanceof Yr||t instanceof Dt||t instanceof ep)}function $E(t,e,n){if(!VE(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=Zd(n);throw i==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+i)}}function Jg(t,e,n){if((e=Mt(e))instanceof Fc)return e._internalPath;if(typeof e=="string")return np(t,e);throw Al("Field path arguments must be of type string or ",t,!1,void 0,n)}const MD=new RegExp("[~\\*/\\[\\]]");function np(t,e,n){if(e.search(MD)>=0)throw Al(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Fc(...e.split("."))._internalPath}catch{throw Al(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Al(t,e,n,i,r){const s=i&&!i.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${i}`),o&&(l+=` in document ${r}`),l+=")"),new q(A.INVALID_ARGUMENT,a+t+l)}function LD(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class BE{constructor(e,n,i,r,s){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new FD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(jE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class FD extends BE{data(){return super.data()}}function jE(t,e){return typeof e=="string"?np(t,e):e instanceof Fc?e._internalPath:e._delegate._internalPath}/**
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
 */function zE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class UD{convertValue(e,n="none"){switch(Zi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(zr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Y()}}convertObject(e,n){const i={};return or(e.fields,(r,s)=>{i[r]=this.convertValue(s,n)}),i}convertGeoPoint(e){return new Uc(qe(e.latitude),qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=U0(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(go(e));default:return null}}convertTimestamp(e){const n=mi(e);return new Ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=Fe.fromString(e);Pe(mE(i));const r=new yo(i.get(1),i.get(3)),s=new G(i.popFirst(5));return r.isEqual(n)||jn(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */class xs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class HE extends BE{constructor(e,n,i,r,s,o){super(e,n,i,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ja(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(jE("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class ja extends HE{data(e={}){return super.data(e)}}class KE{constructor(e,n,i,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new xs(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new ja(this._firestore,this._userDataWriter,i.key,i,new xs(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(o=>{const a=new ja(i._firestore,i._userDataWriter,o.doc.key,o.doc,new xs(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new ja(i._firestore,i._userDataWriter,o.doc.key,o.doc,new xs(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,c=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),c=s.indexOf(o.doc.key)),{type:VD(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function VD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}/**
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
 */function WE(t){t=Tn(t,Dt);const e=Tn(t.firestore,Gr);return ID(Lc(e),t._key).then(n=>qE(e,t,n))}class ip extends UD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Yr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Dt(this.firestore,null,n)}}function $D(t){t=Tn(t,Xo);const e=Tn(t.firestore,Gr),n=Lc(e),i=new ip(e);return zE(t._query),CD(n,t._query).then(r=>new KE(e,i,t,r))}function Ks(t,e,n,...i){t=Tn(t,Dt);const r=Tn(t.firestore,Gr),s=xD(r);let o;return o=typeof(e=Mt(e))=="string"||e instanceof Fc?DD(s,"updateDoc",t._key,e,n,i):OD(s,"updateDoc",t._key,e),BD(r,[o.toMutation(t._key,Vn.exists(!0))])}function rp(t,...e){var n,i,r;t=Mt(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Xg(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Xg(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let l,c,u;if(t instanceof Dt)c=Tn(t.firestore,Gr),u=Cc(t._key.path),l={next:h=>{e[o]&&e[o](qE(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Tn(t,Xo);c=Tn(h.firestore,Gr),u=h._query;const f=new ip(c);l={next:d=>{e[o]&&e[o](new KE(c,f,h,d))},error:e[o+1],complete:e[o+2]},zE(t._query)}return function(h,f,d,m){const y=new Jd(m),b=new Qd(f,y,d);return h.asyncQueue.enqueueAndForget(async()=>qd(await Sl(h),b)),()=>{y.yc(),h.asyncQueue.enqueueAndForget(async()=>Gd(await Sl(h),b))}}(Lc(c),u,a,l)}function BD(t,e){return function(n,i){const r=new Un;return n.asyncQueue.enqueueAndForget(async()=>uD(await TD(n),i,r)),r.promise}(Lc(t),e)}function qE(t,e,n){const i=n.docs.get(e._key),r=new ip(t);return new HE(t,r,e._key,i,new xs(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){fs=n})(os),Sn(new un("firestore",(n,{instanceIdentifier:i,options:r})=>{const s=n.getProvider("app").getImmediate(),o=new Gr(new QN(n.getProvider("auth-internal")),new ex(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new q(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yo(a.options.projectId,l)}(s,i),s);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Bt(vg,"3.10.1",t),Bt(vg,"3.10.1","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE="firebasestorage.googleapis.com",jD="storageBucket",zD=2*60*1e3,HD=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends Yn{constructor(e,n,i=0){super(Au(e),`Firebase Storage: ${n} (${Au(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,xn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Au(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Nn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Nn||(Nn={}));function Au(t){return"storage/"+t}function KD(){const t="An unknown error occurred, please check the error payload for server response.";return new xn(Nn.UNKNOWN,t)}function WD(){return new xn(Nn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function qD(){return new xn(Nn.CANCELED,"User canceled the upload/download.")}function GD(t){return new xn(Nn.INVALID_URL,"Invalid URL '"+t+"'.")}function YD(t){return new xn(Nn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Zg(t){return new xn(Nn.INVALID_ARGUMENT,t)}function YE(){return new xn(Nn.APP_DELETED,"The Firebase app was deleted.")}function QD(t){return new xn(Nn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=sn.makeFromUrl(e,n)}catch{return new sn(e,"")}if(i.path==="")return i;throw YD(e)}static makeFromUrl(e,n){let i=null;const r="([A-Za-z0-9.\\-_]+)";function s(I){I.path.charAt(I.path.length-1)==="/"&&(I.path_=I.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),l={bucket:1,path:3};function c(I){I.path_=decodeURIComponent(I.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${r}/o${f}`,"i"),m={bucket:1,path:3},y=n===GE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",_=new RegExp(`^https?://${y}/${r}/${b}`,"i"),E=[{regex:a,indices:l,postModify:s},{regex:d,indices:m,postModify:c},{regex:_,indices:{bucket:1,path:2},postModify:c}];for(let I=0;I<E.length;I++){const V=E[I],X=V.regex.exec(e);if(X){const re=X[V.indices.bucket];let ge=X[V.indices.path];ge||(ge=""),i=new sn(re,ge),V.postModify(i);break}}if(i==null)throw GD(e);return i}}class XD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JD(t,e,n){let i=1,r=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...b){c||(c=!0,e.apply(null,b))}function h(b){r=setTimeout(()=>{r=null,t(d,l())},b)}function f(){s&&clearTimeout(s)}function d(b,..._){if(c){f();return}if(b){f(),u.call(null,b,..._);return}if(l()||o){f(),u.call(null,b,..._);return}i<64&&(i*=2);let E;a===1?(a=2,E=0):E=(i+Math.random())*1e3,h(E)}let m=!1;function y(b){m||(m=!0,f(),!c&&(r!==null?(b||(a=2),clearTimeout(r),h(0)):b||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function ZD(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eP(t){return t!==void 0}function ey(t,e,n,i){if(i<e)throw Zg(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw Zg(`Invalid value for '${t}'. Expected ${n} or less.`)}function tP(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const r=e(i)+"="+e(t[i]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kl;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(kl||(kl={}));/**
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
 */function nP(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||r||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e,n,i,r,s,o,a,l,c,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,m)=>{this.resolve_=d,this.reject_=m,this.start_()})}start_(){const e=(i,r)=>{if(r){i(!1,new wa(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===kl.NO_ERROR,l=s.getStatus();if(!a||nP(l,this.additionalRetryCodes_)&&this.retry){const u=s.getErrorCode()===kl.ABORT;i(!1,new wa(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;i(!0,new wa(c,s))})},n=(i,r)=>{const s=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());eP(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=KD();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(r.canceled){const l=this.appDelete_?YE():qD();o(l)}else{const l=WD();o(l)}};this.canceled_?n(!1,new wa(!1,null,!0)):this.backoffId_=JD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&ZD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class wa{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function rP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function sP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function oP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function aP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function lP(t,e,n,i,r,s,o=!0){const a=tP(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return oP(c,e),rP(c,n),sP(c,s),aP(c,i),new iP(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function uP(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Rl{constructor(e,n){this._service=e,n instanceof sn?this._location=n:this._location=sn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Rl(e,n)}get root(){const e=new sn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return uP(this._location.path)}get storage(){return this._service}get parent(){const e=cP(this._location.path);if(e===null)return null;const n=new sn(this._location.bucket,e);return new Rl(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw QD(e)}}function ty(t,e){const n=e==null?void 0:e[jD];return n==null?null:sn.makeFromBucketSpec(n,t)}class hP{constructor(e,n,i,r,s){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=GE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=zD,this._maxUploadRetryTime=HD,this._requests=new Set,r!=null?this._bucket=sn.makeFromBucketSpec(r,this._host):this._bucket=ty(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=sn.makeFromBucketSpec(this._url,e):this._bucket=ty(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ey("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ey("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Rl(this,e)}_makeRequest(e,n,i,r,s=!0){if(this._deleted)return new XD(YE());{const o=lP(e,this._appId,i,r,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,r).getPromise()}}const ny="@firebase/storage",iy="0.11.2";/**
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
 */const fP="storage";function dP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new hP(n,i,r,e,os)}function pP(){Sn(new un(fP,dP,"PUBLIC").setMultipleInstances(!0)),Bt(ny,iy,""),Bt(ny,iy,"esm2017")}pP();const ku=new WeakMap;function QE(t,e){return ku.has(e)||ku.set(e,t||{f:{},r:{},s:{},u:{}}),ku.get(e)}function mP(t,e,n,i){if(!t)return n;const[r,s]=XE(t);if(!r)return n;const o=QE(void 0,i)[r]||{},a=e||s;return a&&a in o?o[a]:n}function gP(t,e,n,i){if(!t)return;const[r,s]=XE(t);if(!r)return;const o=QE(void 0,i)[r],a=e||s;if(a)return n.then(l=>{o[a]=l}).catch(vn),a}function XE(t){return nA(t)||iA(t)?["f",t.path]:rA(t)?["r",t.toString()]:sA(t)?["s",t.toString()]:[]}const Ru=new WeakMap;function yP(t,e,n){const i=$f();Ru.has(i)||Ru.set(i,new Map);const r=Ru.get(i),s=gP(e,n,t,i);return s&&r.set(s,t),s?()=>r.delete(s):vn}const _P={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function Hh(t,e,n,i){if(!tA(t))return[t,{}];const r=[{},{}],s=Object.keys(n).reduce((a,l)=>{const c=n[l];return a[c.path]=c.data(),a},{});function o(a,l,c,u){l=l||{};const[h,f]=u;Object.getOwnPropertyNames(a).forEach(d=>{const m=Object.getOwnPropertyDescriptor(a,d);m&&!m.enumerable&&Object.defineProperty(h,d,m)});for(const d in a){const m=a[d];if(m==null||m instanceof Date||m instanceof Ge||m instanceof Uc)h[d]=m;else if(jf(m)){const y=c+d;h[d]=y in n?l[d]:m.path,f[y]=m.converter?m:m.withConverter(i.converter)}else if(Array.isArray(m)){h[d]=Array(m.length);for(let y=0;y<m.length;y++){const b=m[y];b&&b.path in s&&(h[d][y]=s[b.path])}o(m,l[d]||h[d],c+d+".",[h[d],f])}else nr(m)?(h[d]={},o(m,l[d],c+d+".",[h[d],f])):h[d]=m}}return o(t,e,"",r),r}const sp={reset:!1,wait:!0,maxRefDepth:2,converter:_P,snapshotOptions:{serverTimestamps:"estimate"}};function Nl(t){for(const e in t)t[e].unsub()}function Kh(t,e,n,i,r,s,o,a,l){const[c,u]=Hh(i.data(t.snapshotOptions),Bf(e,n),r,t);s.set(e,n,c),Wh(t,e,n,r,u,s,o,a,l)}function vP({ref:t,target:e,path:n,depth:i,resolve:r,reject:s,ops:o},a){const l=Object.create(null);let c=vn;return a.once?WE(t).then(u=>{u.exists()?Kh(a,e,n,u,l,o,i,r,s):(o.set(e,n,null),r())}).catch(s):c=rp(t,u=>{u.exists()?Kh(a,e,n,u,l,o,i,r,s):(o.set(e,n,null),r())},s),()=>{c(),Nl(l)}}function Wh(t,e,n,i,r,s,o,a,l){const c=Object.keys(r);if(Object.keys(i).filter(y=>c.indexOf(y)<0).forEach(y=>{i[y].unsub(),delete i[y]}),!c.length||++o>t.maxRefDepth)return a(n);let h=0;const f=c.length,d=Object.create(null);function m(y){y in d&&++h>=f&&a(n)}c.forEach(y=>{const b=i[y],_=r[y],v=`${n}.${y}`;if(d[v]=!0,b)if(b.path!==_.path)b.unsub();else return;i[y]={data:()=>Bf(e,v),unsub:vP({ref:_,target:e,path:v,depth:o,ops:s,resolve:m.bind(null,v),reject:l},t),path:_.path}})}function bP(t,e,n,i,r,s){const o=Object.assign({},sp,s),{snapshotListenOptions:a,snapshotOptions:l,wait:c,once:u}=o,h="value";let f=xt(c?[]:t.value);c||n.set(t,h,[]);const d=i;let m,y=vn;const b=[],_={added:({newIndex:E,doc:I})=>{b.splice(E,0,Object.create(null));const V=b[E],[X,re]=Hh(I.data(l),void 0,V,o);n.add(L(f),E,X),Wh(o,f,`${h}.${E}`,V,re,n,0,i.bind(null,I),r)},modified:({oldIndex:E,newIndex:I,doc:V})=>{const X=L(f),re=b[E],ge=X[E],[je,ft]=Hh(V.data(l),ge,re,o);b.splice(I,0,re),n.remove(X,E),n.add(X,I,je),Wh(o,f,`${h}.${I}`,re,ft,n,0,i,r)},removed:({oldIndex:E})=>{const I=L(f);n.remove(I,E),Nl(b.splice(E,1)[0])}};function v(E){const I=E.docChanges(a);if(!m&&I.length){m=!0;let V=0;const X=I.length,re=Object.create(null);for(let ge=0;ge<X;ge++)re[I[ge].doc.id]=!0;i=ge=>{ge&&ge.id in re&&++V>=X&&(c&&(n.set(t,h,L(f)),f=t),d(L(f)),i=vn)}}I.forEach(V=>{_[V.type](V)}),I.length||(c&&(n.set(t,h,L(f)),f=t),i(L(f)))}return u?$D(e).then(v).catch(r):y=rp(e,v,r),E=>{if(y(),E){const I=typeof E=="function"?E():[];n.set(t,h,I)}b.forEach(Nl)}}function EP(t,e,n,i,r,s){const o=Object.assign({},sp,s),a="value",l=Object.create(null);i=oA(i,()=>Bf(t,a));let c=vn;function u(h){h.exists()?Kh(o,t,a,h,l,n,0,i,r):(n.set(t,a,null),i(null))}return o.once?WE(e).then(u).catch(r):c=rp(e,u,r),h=>{if(c(),h){const f=typeof h=="function"?h():null;n.set(t,a,f)}Nl(l)}}function wP(t,e){let n=vn;const i=Object.assign({},sp,e),r=L(t),s=i.target||xt();aA()&&(i.once=!0);const o=mP(r,i.ssrKey,s.value,$f());s.value=o;let l=!(bv(r)?(o||[]).length>0:o!==void 0);const c=xt(!1),u=xt(),h=g_(),f=t_();let d=vn;function m(){let _=L(t);const v=new Promise((E,I)=>{if(n(i.reset),!_)return n=vn,E(null);c.value=l,l=!0,_.converter||(_=_.withConverter(i.converter)),n=(jf(_)?EP:bP)(s,_,TP,E,I,i)}).catch(E=>(h.value===v&&(u.value=E),Promise.reject(E))).finally(()=>{h.value===v&&(c.value=!1)});h.value=v}let y=vn;ct(t)&&(y=Ar(t,m)),m(),r&&(d=yP(h.value,r,i.ssrKey)),Xl()&&N_(()=>h.value),f&&Zw(b);function b(_=i.reset){y(),d(),n(_)}return Object.defineProperties(s,{error:{get:()=>u},data:{get:()=>s},pending:{get:()=>c},promise:{get:()=>h},stop:{get:()=>b}})}const TP={set:(t,e,n)=>ZS(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function Wt(t,e){return wP(t,e)}function ms(t){return ME($f(t))}function IP(t,{firebaseApp:e,modules:n=[]}){t.provide(vv,e);for(const i of n)t.use(i.bind(null,e))}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const yr=typeof window<"u";function CP(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ee=Object.assign;function Nu(t,e){const n={};for(const i in e){const r=e[i];n[i]=hn(r)?r.map(t):t(r)}return n}const Ws=()=>{},hn=Array.isArray,SP=/\/$/,AP=t=>t.replace(SP,"");function xu(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=t(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=xP(i??e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function kP(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ry(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function RP(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&Qr(e.matched[i],n.matched[r])&&JE(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Qr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function JE(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!NP(t[n],e[n]))return!1;return!0}function NP(t,e){return hn(t)?sy(t,e):hn(e)?sy(e,t):t===e}function sy(t,e){return hn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function xP(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/");let r=n.length-1,s,o;for(s=0;s<i.length;s++)if(o=i[s],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(s-(s===i.length?1:0)).join("/")}var wo;(function(t){t.pop="pop",t.push="push"})(wo||(wo={}));var qs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(qs||(qs={}));function OP(t){if(!t)if(yr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),AP(t)}const DP=/^[^#]+#/;function PP(t,e){return t.replace(DP,"#")+e}function MP(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Bc=()=>({left:window.pageXOffset,top:window.pageYOffset});function LP(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=MP(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function oy(t,e){return(history.state?history.state.position-e:-1)+t}const qh=new Map;function FP(t,e){qh.set(t,e)}function UP(t){const e=qh.get(t);return qh.delete(t),e}let VP=()=>location.protocol+"//"+location.host;function ZE(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),ry(l,"")}return ry(n,t)+i+r}function $P(t,e,n,i){let r=[],s=[],o=null;const a=({state:f})=>{const d=ZE(t,location),m=n.value,y=e.value;let b=0;if(f){if(n.value=d,e.value=f,o&&o===m){o=null;return}b=y?f.position-y.position:0}else i(d);r.forEach(_=>{_(n.value,m,{delta:b,type:wo.pop,direction:b?b>0?qs.forward:qs.back:qs.unknown})})};function l(){o=n.value}function c(f){r.push(f);const d=()=>{const m=r.indexOf(f);m>-1&&r.splice(m,1)};return s.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(Ee({},f.state,{scroll:Bc()}),"")}function h(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function ay(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?Bc():null}}function BP(t){const{history:e,location:n}=window,i={value:ZE(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:VP()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),r.value=c}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(l,c){const u=Ee({},e.state,ay(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=Ee({},r.value,e.state,{forward:l,scroll:Bc()});s(u.current,u,!0);const h=Ee({},ay(i.value,l,null),{position:u.position+1},c);s(l,h,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function jP(t){t=OP(t);const e=BP(t),n=$P(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=Ee({location:"",base:t,go:i,createHref:PP.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function zP(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),jP(t)}function HP(t){return typeof t=="string"||t&&typeof t=="object"}function ew(t){return typeof t=="string"||typeof t=="symbol"}const ti={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},tw=Symbol("");var ly;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ly||(ly={}));function Xr(t,e){return Ee(new Error,{type:t,[tw]:!0},e)}function On(t,e){return t instanceof Error&&tw in t&&(e==null||!!(t.type&e))}const cy="[^/]+?",KP={sensitive:!1,strict:!1,start:!0,end:!0},WP=/[.+*?^${}()[\]/\\]/g;function qP(t,e){const n=Ee({},KP,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(WP,"\\$&"),d+=40;else if(f.type===1){const{value:m,repeatable:y,optional:b,regexp:_}=f;s.push({name:m,repeatable:y,optional:b});const v=_||cy;if(v!==cy){d+=10;try{new RegExp(`(${v})`)}catch(I){throw new Error(`Invalid custom RegExp for param "${m}" (${v}): `+I.message)}}let E=y?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;h||(E=b&&c.length<2?`(?:/${E})`:"/"+E),b&&(E+="?"),r+=E,d+=20,b&&(d+=-8),y&&(d+=-20),v===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",m=s[f-1];h[m.name]=d&&m.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:m,repeatable:y,optional:b}=d,_=m in c?c[m]:"";if(hn(_)&&!y)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const v=hn(_)?_.join("/"):_;if(!v)if(b)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=v}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function GP(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function YP(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=GP(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(uy(i))return 1;if(uy(r))return-1}return r.length-i.length}function uy(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const QP={type:0,value:""},XP=/[a-zA-Z0-9_]/;function JP(t){if(!t)return[[]];if(t==="/")return[[QP]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${c}": ${d}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function h(){c&&(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):f();break;case 4:f(),n=i;break;case 1:l==="("?n=2:XP.test(l)?f():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),r}function ZP(t,e,n){const i=qP(JP(t.path),n),r=Ee(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function eM(t,e){const n=[],i=new Map;e=dy({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,h,f){const d=!f,m=tM(u);m.aliasOf=f&&f.record;const y=dy(e,u),b=[m];if("alias"in u){const E=typeof u.alias=="string"?[u.alias]:u.alias;for(const I of E)b.push(Ee({},m,{components:f?f.record.components:m.components,path:I,aliasOf:f?f.record:m}))}let _,v;for(const E of b){const{path:I}=E;if(h&&I[0]!=="/"){const V=h.record.path,X=V[V.length-1]==="/"?"":"/";E.path=h.record.path+(I&&X+I)}if(_=ZP(E,h,y),f?f.alias.push(_):(v=v||_,v!==_&&v.alias.push(_),d&&u.name&&!fy(_)&&o(u.name)),m.children){const V=m.children;for(let X=0;X<V.length;X++)s(V[X],_,f&&f.children[X])}f=f||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&l(_)}return v?()=>{o(v)}:Ws}function o(u){if(ew(u)){const h=i.get(u);h&&(i.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&YP(u,n[h])>=0&&(u.record.path!==n[h].record.path||!nw(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!fy(u)&&i.set(u.record.name,u)}function c(u,h){let f,d={},m,y;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw Xr(1,{location:u});y=f.record.name,d=Ee(hy(h.params,f.keys.filter(v=>!v.optional).map(v=>v.name)),u.params&&hy(u.params,f.keys.map(v=>v.name))),m=f.stringify(d)}else if("path"in u)m=u.path,f=n.find(v=>v.re.test(m)),f&&(d=f.parse(m),y=f.record.name);else{if(f=h.name?i.get(h.name):n.find(v=>v.re.test(h.path)),!f)throw Xr(1,{location:u,currentLocation:h});y=f.record.name,d=Ee({},h.params,u.params),m=f.stringify(d)}const b=[];let _=f;for(;_;)b.unshift(_.record),_=_.parent;return{name:y,path:m,params:d,matched:b,meta:iM(b)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function hy(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function tM(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:nM(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function nM(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="boolean"?n:n[i];return e}function fy(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function iM(t){return t.reduce((e,n)=>Ee(e,n.meta),{})}function dy(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function nw(t,e){return e.children.some(n=>n===t||nw(t,n))}const iw=/#/g,rM=/&/g,sM=/\//g,oM=/=/g,aM=/\?/g,rw=/\+/g,lM=/%5B/g,cM=/%5D/g,sw=/%5E/g,uM=/%60/g,ow=/%7B/g,hM=/%7C/g,aw=/%7D/g,fM=/%20/g;function op(t){return encodeURI(""+t).replace(hM,"|").replace(lM,"[").replace(cM,"]")}function dM(t){return op(t).replace(ow,"{").replace(aw,"}").replace(sw,"^")}function Gh(t){return op(t).replace(rw,"%2B").replace(fM,"+").replace(iw,"%23").replace(rM,"%26").replace(uM,"`").replace(ow,"{").replace(aw,"}").replace(sw,"^")}function pM(t){return Gh(t).replace(oM,"%3D")}function mM(t){return op(t).replace(iw,"%23").replace(aM,"%3F")}function gM(t){return t==null?"":mM(t).replace(sM,"%2F")}function xl(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function yM(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(rw," "),o=s.indexOf("="),a=xl(o<0?s:s.slice(0,o)),l=o<0?null:xl(s.slice(o+1));if(a in e){let c=e[a];hn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function py(t){let e="";for(let n in t){const i=t[n];if(n=pM(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(hn(i)?i.map(s=>s&&Gh(s)):[i&&Gh(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function _M(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=hn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const vM=Symbol(""),my=Symbol(""),jc=Symbol(""),ap=Symbol(""),Yh=Symbol("");function Cs(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function ri(t,e,n,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Xr(4,{from:n,to:e})):h instanceof Error?a(h):HP(h)?a(Xr(2,{from:e,to:h})):(s&&i.enterCallbacks[r]===s&&typeof h=="function"&&s.push(h),o())},c=t.call(i&&i.instances[r],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Ou(t,e,n,i){const r=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(bM(a)){const c=(a.__vccOpts||a)[e];c&&r.push(ri(c,n,i,s,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=CP(c)?c.default:c;s.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&ri(f,n,i,s,o)()}))}}return r}function bM(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function gy(t){const e=$t(jc),n=$t(ap),i=ie(()=>e.resolve(L(t.to))),r=ie(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Qr.bind(null,u));if(f>-1)return f;const d=yy(l[c-2]);return c>1&&yy(u)===d&&h[h.length-1].path!==d?h.findIndex(Qr.bind(null,l[c-2])):f}),s=ie(()=>r.value>-1&&IM(n.params,i.value.params)),o=ie(()=>r.value>-1&&r.value===n.matched.length-1&&JE(n.params,i.value.params));function a(l={}){return TM(l)?e[L(t.replace)?"replace":"push"](L(t.to)).catch(Ws):Promise.resolve()}return{route:i,href:ie(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const EM=Ro({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:gy,setup(t,{slots:e}){const n=ko(gy(t)),{options:i}=$t(jc),r=ie(()=>({[_y(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[_y(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:Zl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),wM=EM;function TM(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function IM(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!hn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function yy(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const _y=(t,e,n)=>t??e??n,CM=Ro({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=$t(Yh),r=ie(()=>t.route||i.value),s=$t(my,0),o=ie(()=>{let c=L(s);const{matched:u}=r.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=ie(()=>r.value.matched[o.value]);Pa(my,ie(()=>o.value+1)),Pa(vM,a),Pa(Yh,r);const l=xt();return Ar(()=>[l.value,a.value,t.name],([c,u,h],[f,d,m])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Qr(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return vy(n.default,{Component:f,route:c});const d=h.props[u],m=d?d===!0?c.params:typeof d=="function"?d(c):d:null,b=Zl(f,Ee({},m,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return vy(n.default,{Component:b,route:c})||b}}});function vy(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const lp=CM;function SM(t){const e=eM(t.routes,t),n=t.parseQuery||yM,i=t.stringifyQuery||py,r=t.history,s=Cs(),o=Cs(),a=Cs(),l=g_(ti);let c=ti;yr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Nu.bind(null,C=>""+C),h=Nu.bind(null,gM),f=Nu.bind(null,xl);function d(C,F){let P,H;return ew(C)?(P=e.getRecordMatcher(C),H=F):H=C,e.addRoute(H,P)}function m(C){const F=e.getRecordMatcher(C);F&&e.removeRoute(F)}function y(){return e.getRoutes().map(C=>C.record)}function b(C){return!!e.getRecordMatcher(C)}function _(C,F){if(F=Ee({},F||l.value),typeof C=="string"){const p=xu(n,C,F.path),g=e.resolve({path:p.path},F),w=r.createHref(p.fullPath);return Ee(p,g,{params:f(g.params),hash:xl(p.hash),redirectedFrom:void 0,href:w})}let P;if("path"in C)P=Ee({},C,{path:xu(n,C.path,F.path).path});else{const p=Ee({},C.params);for(const g in p)p[g]==null&&delete p[g];P=Ee({},C,{params:h(C.params)}),F.params=h(F.params)}const H=e.resolve(P,F),fe=C.hash||"";H.params=u(f(H.params));const Ve=kP(i,Ee({},C,{hash:dM(fe),path:H.path})),se=r.createHref(Ve);return Ee({fullPath:Ve,hash:fe,query:i===py?_M(C.query):C.query||{}},H,{redirectedFrom:void 0,href:se})}function v(C){return typeof C=="string"?xu(n,C,l.value.path):Ee({},C)}function E(C,F){if(c!==C)return Xr(8,{from:F,to:C})}function I(C){return re(C)}function V(C){return I(Ee(v(C),{replace:!0}))}function X(C){const F=C.matched[C.matched.length-1];if(F&&F.redirect){const{redirect:P}=F;let H=typeof P=="function"?P(C):P;return typeof H=="string"&&(H=H.includes("?")||H.includes("#")?H=v(H):{path:H},H.params={}),Ee({query:C.query,hash:C.hash,params:"path"in H?{}:C.params},H)}}function re(C,F){const P=c=_(C),H=l.value,fe=C.state,Ve=C.force,se=C.replace===!0,p=X(P);if(p)return re(Ee(v(p),{state:typeof p=="object"?Ee({},fe,p.state):fe,force:Ve,replace:se}),F||P);const g=P;g.redirectedFrom=F;let w;return!Ve&&RP(i,H,P)&&(w=Xr(16,{to:g,from:H}),Ci(H,H,!0,!1)),(w?Promise.resolve(w):je(g,H)).catch(T=>On(T)?On(T,2)?T:Yt(T):Ce(T,g,H)).then(T=>{if(T){if(On(T,2))return re(Ee({replace:se},v(T.to),{state:typeof T.to=="object"?Ee({},fe,T.to.state):fe,force:Ve}),F||g)}else T=Jn(g,H,!0,se,fe);return ft(g,H,T),T})}function ge(C,F){const P=E(C,F);return P?Promise.reject(P):Promise.resolve()}function je(C,F){let P;const[H,fe,Ve]=AM(C,F);P=Ou(H.reverse(),"beforeRouteLeave",C,F);for(const p of H)p.leaveGuards.forEach(g=>{P.push(ri(g,C,F))});const se=ge.bind(null,C,F);return P.push(se),dr(P).then(()=>{P=[];for(const p of s.list())P.push(ri(p,C,F));return P.push(se),dr(P)}).then(()=>{P=Ou(fe,"beforeRouteUpdate",C,F);for(const p of fe)p.updateGuards.forEach(g=>{P.push(ri(g,C,F))});return P.push(se),dr(P)}).then(()=>{P=[];for(const p of C.matched)if(p.beforeEnter&&!F.matched.includes(p))if(hn(p.beforeEnter))for(const g of p.beforeEnter)P.push(ri(g,C,F));else P.push(ri(p.beforeEnter,C,F));return P.push(se),dr(P)}).then(()=>(C.matched.forEach(p=>p.enterCallbacks={}),P=Ou(Ve,"beforeRouteEnter",C,F),P.push(se),dr(P))).then(()=>{P=[];for(const p of o.list())P.push(ri(p,C,F));return P.push(se),dr(P)}).catch(p=>On(p,8)?p:Promise.reject(p))}function ft(C,F,P){for(const H of a.list())H(C,F,P)}function Jn(C,F,P,H,fe){const Ve=E(C,F);if(Ve)return Ve;const se=F===ti,p=yr?history.state:{};P&&(H||se?r.replace(C.fullPath,Ee({scroll:se&&p&&p.scroll},fe)):r.push(C.fullPath,fe)),l.value=C,Ci(C,F,P,se),Yt()}let fn;function cr(){fn||(fn=r.listen((C,F,P)=>{if(!ia.listening)return;const H=_(C),fe=X(H);if(fe){re(Ee(fe,{replace:!0}),H).catch(Ws);return}c=H;const Ve=l.value;yr&&FP(oy(Ve.fullPath,P.delta),Bc()),je(H,Ve).catch(se=>On(se,12)?se:On(se,2)?(re(se.to,H).then(p=>{On(p,20)&&!P.delta&&P.type===wo.pop&&r.go(-1,!1)}).catch(Ws),Promise.reject()):(P.delta&&r.go(-P.delta,!1),Ce(se,H,Ve))).then(se=>{se=se||Jn(H,Ve,!1),se&&(P.delta&&!On(se,8)?r.go(-P.delta,!1):P.type===wo.pop&&On(se,20)&&r.go(-1,!1)),ft(H,Ve,se)}).catch(Ws)}))}let Ii=Cs(),ys=Cs(),He;function Ce(C,F,P){Yt(C);const H=ys.list();return H.length?H.forEach(fe=>fe(C,F,P)):console.error(C),Promise.reject(C)}function we(){return He&&l.value!==ti?Promise.resolve():new Promise((C,F)=>{Ii.add([C,F])})}function Yt(C){return He||(He=!C,cr(),Ii.list().forEach(([F,P])=>C?P(C):F()),Ii.reset()),C}function Ci(C,F,P,H){const{scrollBehavior:fe}=t;if(!yr||!fe)return Promise.resolve();const Ve=!P&&UP(oy(C.fullPath,0))||(H||!P)&&history.state&&history.state.scroll||null;return E_().then(()=>fe(C,F,Ve)).then(se=>se&&LP(se)).catch(se=>Ce(se,C,F))}const Qt=C=>r.go(C);let At;const ur=new Set,ia={currentRoute:l,listening:!0,addRoute:d,removeRoute:m,hasRoute:b,getRoutes:y,resolve:_,options:t,push:I,replace:V,go:Qt,back:()=>Qt(-1),forward:()=>Qt(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:ys.add,isReady:we,install(C){const F=this;C.component("RouterLink",wM),C.component("RouterView",lp),C.config.globalProperties.$router=F,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>L(l)}),yr&&!At&&l.value===ti&&(At=!0,I(r.location).catch(fe=>{}));const P={};for(const fe in ti)P[fe]=ie(()=>l.value[fe]);C.provide(jc,F),C.provide(ap,ko(P)),C.provide(Yh,l);const H=C.unmount;ur.add(C),C.unmount=function(){ur.delete(C),ur.size<1&&(c=ti,fn&&fn(),fn=null,l.value=ti,At=!1,He=!1),H()}}};return ia}function dr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function AM(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>Qr(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Qr(c,l))||r.push(l))}return[n,i,r]}function cp(){return $t(jc)}function zc(){return $t(ap)}const kM={class:"container"},RM={__name:"App",setup(t){const e=zc();return(n,i)=>(me(),xe("div",kM,[(me(),fi(L(lp),{key:L(e).fullPath}))]))}},wi=tv({apiKey:"AIzaSyAnOiG77O1ukT9C2x8u1VbMLw7For9C_3w",authDomain:"bingo-50cec.firebaseapp.com",databaseURL:"https://bingo-50cec-default-rtdb.europe-west1.firebasedatabase.app",projectId:"bingo-50cec",storageBucket:"bingo-50cec.appspot.com",messagingSenderId:"866066986693",appId:"1:866066986693:web:de513df8434d232b0562ac",measurementId:"G-8F3EECYHQ0"}),NM=ME(wi);Eo(NM,"todos");const Ti=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},xM={__name:"tileFlag",props:{color:{type:String,required:!0},icon:{type:String,required:!0}},setup(t){const e=t;return Of(n=>({"358ba632":e.color})),(n,i)=>{const r=nI("font-awesome-icon");return me(),xe("div",{class:"flag",style:Fl({backgroundColor:n.backgroundColor})},[st(r,{icon:["fas",e.icon]},null,8,["icon"])],4)}}},OM=Ti(xM,[["__scopeId","data-v-eede2cf1"]]);const DM=["data-coord"],PM=["src"],MM={__name:"BoardTile",props:{tile:{type:Object,required:!0},collected:{type:Array,default:()=>{}},verify:{type:Array,default:()=>{}},selected:{type:Boolean,default:!1},needVerifying:{type:Boolean,required:!1},groupsData:{type:Object}},setup(t){const e=t,n=ie(()=>e.tile),i=ie(()=>e.groupsData),r=ie(()=>e.selected),s=ie(()=>{var a;return(a=e.collected)==null?void 0:a.includes(n.value.id)}),o=ie(()=>{var a;return(a=e.verify)==null?void 0:a.includes(n.value.id)});return(a,l)=>L(n)?(me(),xe("div",{key:0,class:Zr(["tile",{isCollected:L(s),needVerifying:e.needVerifying,isVerify:L(o),isSelected:L(r)}]),"data-coord":L(n).id},[Oe("img",{src:"https://oldschool.runescape.wiki/images/Frog_%28Ruins_of_Camdozaal%29.png?6ae5e"},null,8,PM),L(i)?(me(!0),xe(it,{key:0},Gl(L(i),c=>(me(),xe("div",null,[c.collected.includes(L(n).id)?(me(),fi(OM,{key:L(n).id+c.color,icon:c.icon,color:c.color},null,8,["icon","color"])):Ot("",!0)]))),256)):Ot("",!0)],10,DM)):Ot("",!0)}},Hc=Ti(MM,[["__scopeId","data-v-aa7c032a"]]),LM={key:0},FM=["onClick","disabled"],UM={__name:"sidePannel",props:{tileData:{type:Object,required:!0},collected:{type:Array,default:()=>{}},verify:{type:Array,default:()=>{}},boardUUID:{type:String,required:!0},teamUUID:{type:String,required:!0}},setup(t){const e=t,n=ms(wi),i=async()=>{e.verify.includes(e.tileData.id)||Ks(zt(n,"Boards",e.boardUUID,"Groups",e.teamUUID),{verify:[...e.verify,e.tileData.id]})};return(r,s)=>e.tileData?(me(),xe("div",LM,[st(Hc,{tile:e.tileData,verify:e.verify,collected:e.collected},null,8,["tile","verify","collected"]),Oe("h2",null,"{ "+_n(e.tileData.id.split("")[0])+" , "+_n(e.tileData.id.split("")[1])+" }",1),Oe("h1",null,_n(e.tileData.title),1),Oe("p",null,_n(e.tileData.description),1),Oe("button",{class:"btn",onClick:is(i,["prevent"]),disabled:e.verify.includes(e.tileData.id)||e.collected.includes(e.tileData.id)},"Mark Collected",8,FM)])):Ot("",!0)}};const VM={key:0,class:"bingo-board"},$M={key:0},BM=["onSubmit"],jM={__name:"BingoBoard",props:{boardUUID:{type:String},teamCode:{type:String}},setup(t){const e=t;Of(v=>({"69d85b38":L(h),"7d978049":L(f)}));const n=ms(wi),i=cp(),r=xt(""),s=xt(""),o=xt(""),a=Wt(zt(n,"Boards",e.boardUUID)),l=Wt(Eo(n,`Boards/${e.boardUUID}/Tiles`)),{data:c}=Wt(zt(n,`Boards/${e.boardUUID}/Groups/${e.teamCode}/`)),{data:u}=Wt(Eo(n,"Boards",e.boardUUID,"Groups")),h=ie(()=>{var v;return((v=a==null?void 0:a.value)==null?void 0:v.settings.width)||7}),f=ie(()=>{var v;return((v=a==null?void 0:a.value)==null?void 0:v.settings.height)||7}),d=ie(()=>{var v;return((v=c==null?void 0:c.value)==null?void 0:v.collected)||[]}),m=ie(()=>{var v;return((v=c==null?void 0:c.value)==null?void 0:v.verify)||[]}),y=ie(()=>{var E;let v={};return u&&((E=u==null?void 0:u.value)==null||E.forEach((I,V)=>{I.name!="moderator"&&(v[I.id]={collected:I.collected,color:I.color,name:I.name,icon:I.icon})})),v||{}}),b=async()=>{if(r.value!==""){let v={name:"private-board",params:{boardUUID:e.boardUUID,teamCode:r.value}};const{data:E}=Wt(zt(n,"Boards",e.boardUUID,"Groups",r.value));E&&E.value.name=="moderator"&&(v.name="moderator"),i.push(v)}},_=v=>{s.value=v,o.value=v};return(v,E)=>(me(),xe(it,null,[L(l)?(me(),xe("main",VM,[(me(!0),xe(it,null,Gl(L(l),I=>(me(),fi(Hc,{key:I.id,tile:I,groupsData:L(y),selected:I==o.value,collected:L(d),class:Zr({needVerify:v.needVerifying(e.tileData.id)}),verify:L(m),onClick:V=>_(I)},null,8,["tile","groupsData","selected","collected","class","verify","onClick"]))),128))])):Ot("",!0),Oe("aside",null,[L(c)?(me(),xe("p",$M,_n(L(c).name),1)):Ot("",!0),L(c)?Ot("",!0):(me(),xe("form",{key:1,onSubmit:is(b,["prevent"])},[Ln(" team code: "),ql(Oe("input",{type:"text",name:"teamId","onUpdate:modelValue":E[0]||(E[0]=I=>r.value=I)},null,512),[[ec,r.value]])],40,BM)),st(UM,{tileData:s.value,collected:L(d),verify:L(m),boardUUID:e.boardUUID,teamUUID:e.teamCode},null,8,["tileData","collected","verify","boardUUID","teamUUID"])])],64))}},zM=Ti(jM,[["__scopeId","data-v-9a05c52a"]]);const HM=t=>(Cf("data-v-2c91e7bf"),t=t(),Sf(),t),KM={key:0,class:"heading"},WM=HM(()=>Oe("h2",null,"Notes",-1)),qM=["disabled"],GM={__name:"BoardView",setup(t){const e=ms(wi),n=zc(),i=xt(""),r=ie(()=>n.params.teamCode),s=ie(()=>n.params.boardUUID),{data:o}=Wt(zt(e,`Boards/${s.value}/Groups/${r.value}/`)),a=async()=>{i.value=o.value.notes,await Ks(zt(e,`Boards/${s.value}/Groups/${r.value}/`),{notes:i.value})};return(l,c)=>(me(),xe(it,null,[Oe("section",null,[st(zM,{boardUUID:L(s),teamCode:L(r)},null,8,["boardUUID","teamCode"])]),L(o)?(me(),xe("div",KM,[WM,Ln(),Oe("button",{class:"btn",onClick:a,disabled:i.value==L(o).notes},"Save notes",8,qM)])):Ot("",!0),L(o)?ql((me(),xe("textarea",{key:1,name:"teamNotes",id:"teamNotes",rows:"10","onUpdate:modelValue":c[0]||(c[0]=u=>L(o).notes=u),onSubmit:c[1]||(c[1]=is(()=>{},["prevent"]))},null,544)),[[ec,L(o).notes]]):Ot("",!0)],64))}},by=Ti(GM,[["__scopeId","data-v-2c91e7bf"]]);const YM=t=>(Cf("data-v-1589afe4"),t=t(),Sf(),t),QM=YM(()=>Oe("br",null,null,-1)),XM=["checked","onClick"],JM={__name:"moderatorSidePannel",props:{tileData:{type:Object,required:!0},boardUUID:{type:Object,required:!0},groups:{type:Object,required:!0}},setup(t){const e=t,n=ms(wi),i=ie(()=>e.tileData),r=ie(()=>e.groups),s=({id:o,group:a})=>{a.collected.includes(o)?Ks(zt(n,"Boards",e.boardUUID,"Groups",a.id),{collected:a.collected.filter(l=>l!=o)}):(Ks(zt(n,"Boards",e.boardUUID,"Groups",a.id),{collected:[...a.collected,o]}),a.verify.includes(o)&&Ks(zt(n,"Boards",e.boardUUID,"Groups",a.id),{verify:a.verify.filter(l=>l!=o)}))};return(o,a)=>e.tileData?(me(),xe("div",{key:e.tileData.id},[st(Hc,{tile:L(i)},null,8,["tile"]),Oe("h2",null,"{ "+_n(L(i).id.split("")[0])+" , "+_n(L(i).id.split("")[1])+" }",1),Oe("ul",null,[(me(!0),xe(it,null,Gl(L(r),l=>(me(),xe("li",{key:l.id+L(i).id,class:Zr({checkThis:l.verify.includes(L(i).id)})},[Ln(_n(l.name)+" : "+_n(l.verify.includes(L(i).id)),1),QM,Ln(" collected: "),(me(),xe("input",{type:"checkbox",key:l.id+L(i).id,checked:l.collected.includes(L(i).id),onClick:is(c=>s({id:L(i).id,group:l}),["prevent"])},null,8,XM))],2))),128))])])):Ot("",!0)}},ZM=Ti(JM,[["__scopeId","data-v-1589afe4"]]);const eL={key:0,class:"bingo-board"},tL={key:0},nL={__name:"ModeratorBoard",props:{boardUUID:{type:String},teamCode:{type:String},groups:{type:Object}},setup(t){const e=t;Of(f=>({"422aa59f":L(l),"2d49d724":L(c)}));const n=ms(wi),i=xt(""),r=xt(""),s=Wt(zt(n,"Boards",e.boardUUID)),o=Wt(Eo(n,`Boards/${e.boardUUID}/Tiles`)),{data:a}=Wt(zt(n,`Boards/${e.boardUUID}/Groups/${e.teamCode}/`)),l=ie(()=>{var f;return((f=s==null?void 0:s.value)==null?void 0:f.settings.width)||7}),c=ie(()=>{var f;return((f=s==null?void 0:s.value)==null?void 0:f.settings.height)||7}),u=f=>{i.value=f,r.value=f},h=f=>{let d=!1;return e.groups&&e.groups.forEach(m=>{m.verify.includes(f)&&(d=!0)}),d};return(f,d)=>(me(),xe(it,null,[L(o)?(me(),xe("main",eL,[(me(!0),xe(it,null,Gl(L(o),m=>(me(),fi(Hc,{key:m.id,needVerifying:h(m.id),selected:m==r.value,tile:m,onClick:y=>u(m)},null,8,["needVerifying","selected","tile","onClick"]))),128))])):Ot("",!0),Oe("aside",null,[L(a)?(me(),xe("p",tL,_n(L(a).name),1)):Ot("",!0),(me(),fi(ZM,{tileData:i.value,key:i.value,boardUUID:e.boardUUID,groups:e.groups},null,8,["tileData","boardUUID","groups"]))])],64))}},iL=Ti(nL,[["__scopeId","data-v-34d8010c"]]);const Kc=t=>(Cf("data-v-313e8530"),t=t(),Sf(),t),rL=["onSubmit"],sL=Kc(()=>Oe("br",null,null,-1)),oL=Kc(()=>Oe("br",null,null,-1)),aL=Kc(()=>Oe("br",null,null,-1)),lL=Kc(()=>Oe("button",{type:"submit",class:"btn"},"Go To Board",-1)),cL={__name:"ModeratorView",setup(t){const e=ms(wi),n=zc(),i=cp(),r=ie(()=>n.params.teamCode),s=xt(""),o=ie(()=>n.params.boardUUID),{data:a}=Wt(zt(e,`Boards/${o.value}/Groups/${r.value}/`)),{data:l}=Wt(Eo(e,"Boards",o.value,"Groups")),c=h=>{},u=async()=>{if(r.value!==""){let h={name:"private-board",params:{boardUUID:o.value,teamCode:s.value}};const{data:f}=Wt(zt(e,"Boards",o.value,"Groups",s.value));f&&f.value.name=="moderator"&&(h.name="moderator"),i.push(h)}};return(h,f)=>(me(),xe("section",null,[L(a)&&L(a).name=="moderator"?(me(),fi(iL,{key:0,boardUUID:L(o),teamCode:L(r),onVerifyTile:f[0]||(f[0]=d=>c(h.tile,h.groupid)),groups:L(l)},null,8,["boardUUID","teamCode","groups"])):Ot("",!0),Oe("aside",null,[L(a)&&L(a).name!="moderator"?(me(),xe("form",{key:0,onSubmit:is(u,["prevent"])},[Ln(" You are not a moderator, "),sL,Ln("please enter your code to go to the appropriate board for your team"),oL,aL,Ln(" team code: "),ql(Oe("input",{type:"text",name:"teamId","onUpdate:modelValue":f[1]||(f[1]=d=>s.value=d)},null,512),[[ec,s.value]]),lL],40,rL)):Ot("",!0)])]))}},uL=Ti(cL,[["__scopeId","data-v-313e8530"]]);const hL=["onSubmit"],fL=["disabled"],dL={__name:"Home",setup(t){const e=zc(),n=cp(),i=xt(""),r=()=>{n.push({name:"overview",params:{boardUUID:i.value}})};return(s,o)=>(me(),xe(it,null,[Oe("form",{onSubmit:is(r,["prevent"])},[Ln(" Enter your bingo key: "),ql(Oe("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=a=>i.value=a)},null,512),[[ec,i.value]]),Oe("button",{class:"btn",disabled:i.value==""},"Open Board",8,fL)],40,hL),(me(),fi(L(lp),{key:L(e).fullPath}))],64))}},pL=Ti(dL,[["__scopeId","data-v-629c09ef"]]),mL=SM({history:zP(),mode:"hash",routes:[{path:"/",name:"Home",component:pL},{path:"/b/:boardUUID",name:"overview",param:!0,component:by},{path:"/b/:boardUUID/team/:teamCode",name:"private-board",param:!0,component:by},{path:"/b/:boardUUID/m/:teamCode",name:"moderator",param:!0,component:uL}]});function Ey(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function U(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ey(Object(n),!0).forEach(function(i){Ze(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ey(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Ol(t){return Ol=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ol(t)}function gL(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function wy(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function yL(t,e,n){return e&&wy(t.prototype,e),n&&wy(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ze(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function up(t,e){return vL(t)||EL(t,e)||lw(t,e)||TL()}function Jo(t){return _L(t)||bL(t)||lw(t)||wL()}function _L(t){if(Array.isArray(t))return Qh(t)}function vL(t){if(Array.isArray(t))return t}function bL(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function EL(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],r=!0,s=!1,o,a;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(l){s=!0,a=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(s)throw a}}return i}}function lw(t,e){if(t){if(typeof t=="string")return Qh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Qh(t,e)}}function Qh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function wL(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function TL(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ty=function(){},hp={},cw={},uw=null,hw={mark:Ty,measure:Ty};try{typeof window<"u"&&(hp=window),typeof document<"u"&&(cw=document),typeof MutationObserver<"u"&&(uw=MutationObserver),typeof performance<"u"&&(hw=performance)}catch{}var IL=hp.navigator||{},Iy=IL.userAgent,Cy=Iy===void 0?"":Iy,yi=hp,De=cw,Sy=uw,Ta=hw;yi.document;var Xn=!!De.documentElement&&!!De.head&&typeof De.addEventListener=="function"&&typeof De.createElement=="function",fw=~Cy.indexOf("MSIE")||~Cy.indexOf("Trident/"),Ia,Ca,Sa,Aa,ka,Kn="___FONT_AWESOME___",Xh=16,dw="fa",pw="svg-inline--fa",er="data-fa-i2svg",Jh="data-fa-pseudo-element",CL="data-fa-pseudo-element-pending",fp="data-prefix",dp="data-icon",Ay="fontawesome-i2svg",SL="async",AL=["HTML","HEAD","STYLE","SCRIPT"],mw=function(){try{return!0}catch{return!1}}(),Ne="classic",$e="sharp",pp=[Ne,$e];function Zo(t){return new Proxy(t,{get:function(n,i){return i in n?n[i]:n[Ne]}})}var To=Zo((Ia={},Ze(Ia,Ne,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Ze(Ia,$e,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Ia)),Io=Zo((Ca={},Ze(Ca,Ne,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ze(Ca,$e,{solid:"fass",regular:"fasr",light:"fasl"}),Ca)),Co=Zo((Sa={},Ze(Sa,Ne,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ze(Sa,$e,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Sa)),kL=Zo((Aa={},Ze(Aa,Ne,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ze(Aa,$e,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Aa)),RL=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,gw="fa-layers-text",NL=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,xL=Zo((ka={},Ze(ka,Ne,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ze(ka,$e,{900:"fass",400:"fasr",300:"fasl"}),ka)),yw=[1,2,3,4,5,6,7,8,9,10],OL=yw.concat([11,12,13,14,15,16,17,18,19,20]),DL=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Vi={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},So=new Set;Object.keys(Io[Ne]).map(So.add.bind(So));Object.keys(Io[$e]).map(So.add.bind(So));var PL=[].concat(pp,Jo(So),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Vi.GROUP,Vi.SWAP_OPACITY,Vi.PRIMARY,Vi.SECONDARY]).concat(yw.map(function(t){return"".concat(t,"x")})).concat(OL.map(function(t){return"w-".concat(t)})),Gs=yi.FontAwesomeConfig||{};function ML(t){var e=De.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function LL(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(De&&typeof De.querySelector=="function"){var FL=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];FL.forEach(function(t){var e=up(t,2),n=e[0],i=e[1],r=LL(ML(n));r!=null&&(Gs[i]=r)})}var _w={styleDefault:"solid",familyDefault:"classic",cssPrefix:dw,replacementClass:pw,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Gs.familyPrefix&&(Gs.cssPrefix=Gs.familyPrefix);var Jr=U(U({},_w),Gs);Jr.autoReplaceSvg||(Jr.observeMutations=!1);var B={};Object.keys(_w).forEach(function(t){Object.defineProperty(B,t,{enumerable:!0,set:function(n){Jr[t]=n,Ys.forEach(function(i){return i(B)})},get:function(){return Jr[t]}})});Object.defineProperty(B,"familyPrefix",{enumerable:!0,set:function(e){Jr.cssPrefix=e,Ys.forEach(function(n){return n(B)})},get:function(){return Jr.cssPrefix}});yi.FontAwesomeConfig=B;var Ys=[];function UL(t){return Ys.push(t),function(){Ys.splice(Ys.indexOf(t),1)}}var ni=Xh,En={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function VL(t){if(!(!t||!Xn)){var e=De.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=De.head.childNodes,i=null,r=n.length-1;r>-1;r--){var s=n[r],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=s)}return De.head.insertBefore(e,i),t}}var $L="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ao(){for(var t=12,e="";t-- >0;)e+=$L[Math.random()*62|0];return e}function gs(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function mp(t){return t.classList?gs(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function vw(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function BL(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(vw(t[n]),'" ')},"").trim()}function Wc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function gp(t){return t.size!==En.size||t.x!==En.x||t.y!==En.y||t.rotate!==En.rotate||t.flipX||t.flipY}function jL(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:c}}function zL(t){var e=t.transform,n=t.width,i=n===void 0?Xh:n,r=t.height,s=r===void 0?Xh:r,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&fw?l+="translate(".concat(e.x/ni-i/2,"em, ").concat(e.y/ni-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/ni,"em), calc(-50% + ").concat(e.y/ni,"em)) "):l+="translate(".concat(e.x/ni,"em, ").concat(e.y/ni,"em) "),l+="scale(".concat(e.size/ni*(e.flipX?-1:1),", ").concat(e.size/ni*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var HL=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function bw(){var t=dw,e=pw,n=B.cssPrefix,i=B.replacementClass,r=HL;if(n!==t||i!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(i))}return r}var ky=!1;function Du(){B.autoAddCss&&!ky&&(VL(bw()),ky=!0)}var KL={mixout:function(){return{dom:{css:bw,insertCss:Du}}},hooks:function(){return{beforeDOMElementCreation:function(){Du()},beforeI2svg:function(){Du()}}}},Wn=yi||{};Wn[Kn]||(Wn[Kn]={});Wn[Kn].styles||(Wn[Kn].styles={});Wn[Kn].hooks||(Wn[Kn].hooks={});Wn[Kn].shims||(Wn[Kn].shims=[]);var on=Wn[Kn],Ew=[],WL=function t(){De.removeEventListener("DOMContentLoaded",t),Dl=1,Ew.map(function(e){return e()})},Dl=!1;Xn&&(Dl=(De.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(De.readyState),Dl||De.addEventListener("DOMContentLoaded",WL));function qL(t){Xn&&(Dl?setTimeout(t,0):Ew.push(t))}function ea(t){var e=t.tag,n=t.attributes,i=n===void 0?{}:n,r=t.children,s=r===void 0?[]:r;return typeof t=="string"?vw(t):"<".concat(e," ").concat(BL(i),">").concat(s.map(ea).join(""),"</").concat(e,">")}function Ry(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var GL=function(e,n){return function(i,r,s,o){return e.call(n,i,r,s,o)}},Pu=function(e,n,i,r){var s=Object.keys(e),o=s.length,a=r!==void 0?GL(n,r):n,l,c,u;for(i===void 0?(l=1,u=e[s[0]]):(l=0,u=i);l<o;l++)c=s[l],u=a(u,e[c],c,e);return u};function YL(t){for(var e=[],n=0,i=t.length;n<i;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Zh(t){var e=YL(t);return e.length===1?e[0].toString(16):null}function QL(t,e){var n=t.length,i=t.charCodeAt(e),r;return i>=55296&&i<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function Ny(t){return Object.keys(t).reduce(function(e,n){var i=t[n],r=!!i.icon;return r?e[i.iconName]=i.icon:e[n]=i,e},{})}function ef(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,r=i===void 0?!1:i,s=Ny(e);typeof on.hooks.addPack=="function"&&!r?on.hooks.addPack(t,Ny(e)):on.styles[t]=U(U({},on.styles[t]||{}),s),t==="fas"&&ef("fa",e)}var Ra,Na,xa,Er=on.styles,XL=on.shims,JL=(Ra={},Ze(Ra,Ne,Object.values(Co[Ne])),Ze(Ra,$e,Object.values(Co[$e])),Ra),yp=null,ww={},Tw={},Iw={},Cw={},Sw={},ZL=(Na={},Ze(Na,Ne,Object.keys(To[Ne])),Ze(Na,$e,Object.keys(To[$e])),Na);function e2(t){return~PL.indexOf(t)}function t2(t,e){var n=e.split("-"),i=n[0],r=n.slice(1).join("-");return i===t&&r!==""&&!e2(r)?r:null}var Aw=function(){var e=function(s){return Pu(Er,function(o,a,l){return o[l]=Pu(a,s,{}),o},{})};ww=e(function(r,s,o){if(s[3]&&(r[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){r[l.toString(16)]=o})}return r}),Tw=e(function(r,s,o){if(r[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){r[l]=o})}return r}),Sw=e(function(r,s,o){var a=s[2];return r[o]=o,a.forEach(function(l){r[l]=o}),r});var n="far"in Er||B.autoFetchSvg,i=Pu(XL,function(r,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(r.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:a,iconName:l}),r},{names:{},unicodes:{}});Iw=i.names,Cw=i.unicodes,yp=qc(B.styleDefault,{family:B.familyDefault})};UL(function(t){yp=qc(t.styleDefault,{family:B.familyDefault})});Aw();function _p(t,e){return(ww[t]||{})[e]}function n2(t,e){return(Tw[t]||{})[e]}function $i(t,e){return(Sw[t]||{})[e]}function kw(t){return Iw[t]||{prefix:null,iconName:null}}function i2(t){var e=Cw[t],n=_p("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function _i(){return yp}var vp=function(){return{prefix:null,iconName:null,rest:[]}};function qc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,i=n===void 0?Ne:n,r=To[i][t],s=Io[i][t]||Io[i][r],o=t in on.styles?t:null;return s||o||null}var xy=(xa={},Ze(xa,Ne,Object.keys(Co[Ne])),Ze(xa,$e,Object.keys(Co[$e])),xa);function Gc(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.skipLookups,r=i===void 0?!1:i,s=(e={},Ze(e,Ne,"".concat(B.cssPrefix,"-").concat(Ne)),Ze(e,$e,"".concat(B.cssPrefix,"-").concat($e)),e),o=null,a=Ne;(t.includes(s[Ne])||t.some(function(c){return xy[Ne].includes(c)}))&&(a=Ne),(t.includes(s[$e])||t.some(function(c){return xy[$e].includes(c)}))&&(a=$e);var l=t.reduce(function(c,u){var h=t2(B.cssPrefix,u);if(Er[u]?(u=JL[a].includes(u)?kL[a][u]:u,o=u,c.prefix=u):ZL[a].indexOf(u)>-1?(o=u,c.prefix=qc(u,{family:a})):h?c.iconName=h:u!==B.replacementClass&&u!==s[Ne]&&u!==s[$e]&&c.rest.push(u),!r&&c.prefix&&c.iconName){var f=o==="fa"?kw(c.iconName):{},d=$i(c.prefix,c.iconName);f.prefix&&(o=null),c.iconName=f.iconName||d||c.iconName,c.prefix=f.prefix||c.prefix,c.prefix==="far"&&!Er.far&&Er.fas&&!B.autoFetchSvg&&(c.prefix="fas")}return c},vp());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===$e&&(Er.fass||B.autoFetchSvg)&&(l.prefix="fass",l.iconName=$i(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=_i()||"fas"),l}var r2=function(){function t(){gL(this,t),this.definitions={}}return yL(t,[{key:"add",value:function(){for(var n=this,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=U(U({},n.definitions[a]||{}),o[a]),ef(a,o[a]);var l=Co[Ne][a];l&&ef(l,o[a]),Aw()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var r=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(r).map(function(s){var o=r[s],a=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(h){typeof h=="string"&&(n[a][h]=c)}),n[a][l]=c}),n}}]),t}(),Oy=[],wr={},Pr={},s2=Object.keys(Pr);function o2(t,e){var n=e.mixoutsTo;return Oy=t,wr={},Object.keys(Pr).forEach(function(i){s2.indexOf(i)===-1&&delete Pr[i]}),Oy.forEach(function(i){var r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),Ol(r[o])==="object"&&Object.keys(r[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=r[o][a]})}),i.hooks){var s=i.hooks();Object.keys(s).forEach(function(o){wr[o]||(wr[o]=[]),wr[o].push(s[o])})}i.provides&&i.provides(Pr)}),n}function tf(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];var s=wr[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(i))}),e}function tr(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var r=wr[t]||[];r.forEach(function(s){s.apply(null,n)})}function qn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Pr[t]?Pr[t].apply(null,e):void 0}function nf(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||_i();if(e)return e=$i(n,e)||e,Ry(Rw.definitions,n,e)||Ry(on.styles,n,e)}var Rw=new r2,a2=function(){B.autoReplaceSvg=!1,B.observeMutations=!1,tr("noAuto")},l2={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Xn?(tr("beforeI2svg",e),qn("pseudoElements2svg",e),qn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;B.autoReplaceSvg===!1&&(B.autoReplaceSvg=!0),B.observeMutations=!0,qL(function(){u2({autoReplaceSvgRoot:n}),tr("watch",e)})}},c2={icon:function(e){if(e===null)return null;if(Ol(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:$i(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=qc(e[0]);return{prefix:i,iconName:$i(i,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(B.cssPrefix,"-"))>-1||e.match(RL))){var r=Gc(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||_i(),iconName:$i(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var s=_i();return{prefix:s,iconName:$i(s,e)||e}}}},Kt={noAuto:a2,config:B,dom:l2,parse:c2,library:Rw,findIconDefinition:nf,toHtml:ea},u2=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,i=n===void 0?De:n;(Object.keys(on.styles).length>0||B.autoFetchSvg)&&Xn&&B.autoReplaceSvg&&Kt.dom.i2svg({node:i})};function Yc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return ea(i)})}}),Object.defineProperty(t,"node",{get:function(){if(Xn){var i=De.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function h2(t){var e=t.children,n=t.main,i=t.mask,r=t.attributes,s=t.styles,o=t.transform;if(gp(o)&&n.found&&!i.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};r.style=Wc(U(U({},s),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function f2(t){var e=t.prefix,n=t.iconName,i=t.children,r=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(B.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:U(U({},r),{},{id:o}),children:i}]}]}function bp(t){var e=t.icons,n=e.main,i=e.mask,r=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,c=t.maskId,u=t.titleId,h=t.extra,f=t.watchable,d=f===void 0?!1:f,m=i.found?i:n,y=m.width,b=m.height,_=r==="fak",v=[B.replacementClass,s?"".concat(B.cssPrefix,"-").concat(s):""].filter(function(je){return h.classes.indexOf(je)===-1}).filter(function(je){return je!==""||!!je}).concat(h.classes).join(" "),E={children:[],attributes:U(U({},h.attributes),{},{"data-prefix":r,"data-icon":s,class:v,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(b)})},I=_&&!~h.classes.indexOf("fa-fw")?{width:"".concat(y/b*16*.0625,"em")}:{};d&&(E.attributes[er]=""),l&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(u||Ao())},children:[l]}),delete E.attributes.title);var V=U(U({},E),{},{prefix:r,iconName:s,main:n,mask:i,maskId:c,transform:o,symbol:a,styles:U(U({},I),h.styles)}),X=i.found&&n.found?qn("generateAbstractMask",V)||{children:[],attributes:{}}:qn("generateAbstractIcon",V)||{children:[],attributes:{}},re=X.children,ge=X.attributes;return V.children=re,V.attributes=ge,a?f2(V):h2(V)}function Dy(t){var e=t.content,n=t.width,i=t.height,r=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,c=U(U(U({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(c[er]="");var u=U({},o.styles);gp(r)&&(u.transform=zL({transform:r,startCentered:!0,width:n,height:i}),u["-webkit-transform"]=u.transform);var h=Wc(u);h.length>0&&(c.style=h);var f=[];return f.push({tag:"span",attributes:c,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function d2(t){var e=t.content,n=t.title,i=t.extra,r=U(U(U({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),s=Wc(i.styles);s.length>0&&(r.style=s);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Mu=on.styles;function rf(t){var e=t[0],n=t[1],i=t.slice(4),r=up(i,1),s=r[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(B.cssPrefix,"-").concat(Vi.GROUP)},children:[{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat(Vi.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat(Vi.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var p2={found:!1,width:512,height:512};function m2(t,e){!mw&&!B.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function sf(t,e){var n=e;return e==="fa"&&B.styleDefault!==null&&(e=_i()),new Promise(function(i,r){if(qn("missingIconAbstract"),n==="fa"){var s=kw(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Mu[e]&&Mu[e][t]){var o=Mu[e][t];return i(rf(o))}m2(t,e),i(U(U({},p2),{},{icon:B.showMissingIcons&&t?qn("missingIconAbstract")||{}:{}}))})}var Py=function(){},of=B.measurePerformance&&Ta&&Ta.mark&&Ta.measure?Ta:{mark:Py,measure:Py},Os='FA "6.4.0"',g2=function(e){return of.mark("".concat(Os," ").concat(e," begins")),function(){return Nw(e)}},Nw=function(e){of.mark("".concat(Os," ").concat(e," ends")),of.measure("".concat(Os," ").concat(e),"".concat(Os," ").concat(e," begins"),"".concat(Os," ").concat(e," ends"))},Ep={begin:g2,end:Nw},za=function(){};function My(t){var e=t.getAttribute?t.getAttribute(er):null;return typeof e=="string"}function y2(t){var e=t.getAttribute?t.getAttribute(fp):null,n=t.getAttribute?t.getAttribute(dp):null;return e&&n}function _2(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(B.replacementClass)}function v2(){if(B.autoReplaceSvg===!0)return Ha.replace;var t=Ha[B.autoReplaceSvg];return t||Ha.replace}function b2(t){return De.createElementNS("http://www.w3.org/2000/svg",t)}function E2(t){return De.createElement(t)}function xw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,i=n===void 0?t.tag==="svg"?b2:E2:n;if(typeof t=="string")return De.createTextNode(t);var r=i(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){r.appendChild(xw(o,{ceFn:i}))}),r}function w2(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Ha={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(xw(r),n)}),n.getAttribute(er)===null&&B.keepOriginalSource){var i=De.createComment(w2(n));n.parentNode.replaceChild(i,n)}else n.remove()},nest:function(e){var n=e[0],i=e[1];if(~mp(n).indexOf(B.replacementClass))return Ha.replace(e);var r=new RegExp("".concat(B.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var s=i[0].attributes.class.split(" ").reduce(function(a,l){return l===B.replacementClass||l.match(r)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});i[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=i.map(function(a){return ea(a)}).join(`
`);n.setAttribute(er,""),n.innerHTML=o}};function Ly(t){t()}function Ow(t,e){var n=typeof e=="function"?e:za;if(t.length===0)n();else{var i=Ly;B.mutateApproach===SL&&(i=yi.requestAnimationFrame||Ly),i(function(){var r=v2(),s=Ep.begin("mutate");t.map(r),s(),n()})}}var wp=!1;function Dw(){wp=!0}function af(){wp=!1}var Pl=null;function Fy(t){if(Sy&&B.observeMutations){var e=t.treeCallback,n=e===void 0?za:e,i=t.nodeCallback,r=i===void 0?za:i,s=t.pseudoElementsCallback,o=s===void 0?za:s,a=t.observeMutationsRoot,l=a===void 0?De:a;Pl=new Sy(function(c){if(!wp){var u=_i();gs(c).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!My(h.addedNodes[0])&&(B.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&B.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&My(h.target)&&~DL.indexOf(h.attributeName))if(h.attributeName==="class"&&y2(h.target)){var f=Gc(mp(h.target)),d=f.prefix,m=f.iconName;h.target.setAttribute(fp,d||u),m&&h.target.setAttribute(dp,m)}else _2(h.target)&&r(h.target)})}}),Xn&&Pl.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function T2(){Pl&&Pl.disconnect()}function I2(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(i,r){var s=r.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(i[o]=a.join(":").trim()),i},{})),n}function C2(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"",r=Gc(mp(t));return r.prefix||(r.prefix=_i()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=n2(r.prefix,t.innerText)||_p(r.prefix,Zh(t.innerText))),!r.iconName&&B.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function S2(t){var e=gs(t.attributes).reduce(function(r,s){return r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r},{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return B.autoA11y&&(n?e["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(i||Ao()):(e["aria-hidden"]="true",e.focusable="false")),e}function A2(){return{iconName:null,title:null,titleId:null,prefix:null,transform:En,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Uy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=C2(t),i=n.iconName,r=n.prefix,s=n.rest,o=S2(t),a=tf("parseNodeAttributes",{},t),l=e.styleParser?I2(t):[];return U({iconName:i,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:En,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var k2=on.styles;function Pw(t){var e=B.autoReplaceSvg==="nest"?Uy(t,{styleParser:!1}):Uy(t);return~e.extra.classes.indexOf(gw)?qn("generateLayersText",t,e):qn("generateSvgReplacementMutation",t,e)}var vi=new Set;pp.map(function(t){vi.add("fa-".concat(t))});Object.keys(To[Ne]).map(vi.add.bind(vi));Object.keys(To[$e]).map(vi.add.bind(vi));vi=Jo(vi);function Vy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Xn)return Promise.resolve();var n=De.documentElement.classList,i=function(h){return n.add("".concat(Ay,"-").concat(h))},r=function(h){return n.remove("".concat(Ay,"-").concat(h))},s=B.autoFetchSvg?vi:pp.map(function(u){return"fa-".concat(u)}).concat(Object.keys(k2));s.includes("fa")||s.push("fa");var o=[".".concat(gw,":not([").concat(er,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(er,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=gs(t.querySelectorAll(o))}catch{}if(a.length>0)i("pending"),r("complete");else return Promise.resolve();var l=Ep.begin("onTree"),c=a.reduce(function(u,h){try{var f=Pw(h);f&&u.push(f)}catch(d){mw||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise(function(u,h){Promise.all(c).then(function(f){Ow(f,function(){i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(f){l(),h(f)})})}function R2(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Pw(t).then(function(n){n&&Ow([n],e)})}function N2(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:nf(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:nf(r||{})),t(i,U(U({},n),{},{mask:r}))}}var x2=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,r=i===void 0?En:i,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,c=n.maskId,u=c===void 0?null:c,h=n.title,f=h===void 0?null:h,d=n.titleId,m=d===void 0?null:d,y=n.classes,b=y===void 0?[]:y,_=n.attributes,v=_===void 0?{}:_,E=n.styles,I=E===void 0?{}:E;if(e){var V=e.prefix,X=e.iconName,re=e.icon;return Yc(U({type:"icon"},e),function(){return tr("beforeDOMElementCreation",{iconDefinition:e,params:n}),B.autoA11y&&(f?v["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(m||Ao()):(v["aria-hidden"]="true",v.focusable="false")),bp({icons:{main:rf(re),mask:l?rf(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:V,iconName:X,transform:U(U({},En),r),symbol:o,title:f,maskId:u,titleId:m,extra:{attributes:v,styles:I,classes:b}})})}},O2={mixout:function(){return{icon:N2(x2)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Vy,n.nodeCallback=R2,n}}},provides:function(e){e.i2svg=function(n){var i=n.node,r=i===void 0?De:i,s=n.callback,o=s===void 0?function(){}:s;return Vy(r,o)},e.generateSvgReplacementMutation=function(n,i){var r=i.iconName,s=i.title,o=i.titleId,a=i.prefix,l=i.transform,c=i.symbol,u=i.mask,h=i.maskId,f=i.extra;return new Promise(function(d,m){Promise.all([sf(r,a),u.iconName?sf(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var b=up(y,2),_=b[0],v=b[1];d([n,bp({icons:{main:_,mask:v},prefix:a,iconName:r,transform:l,symbol:c,maskId:h,title:s,titleId:o,extra:f,watchable:!0})])}).catch(m)})},e.generateAbstractIcon=function(n){var i=n.children,r=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Wc(a);l.length>0&&(r.style=l);var c;return gp(o)&&(c=qn("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),i.push(c||s.icon),{children:i,attributes:r}}}},D2={mixout:function(){return{layer:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.classes,s=r===void 0?[]:r;return Yc({type:"layer"},function(){tr("beforeDOMElementCreation",{assembler:n,params:i});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(B.cssPrefix,"-layers")].concat(Jo(s)).join(" ")},children:o}]})}}}},P2={mixout:function(){return{counter:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.title,s=r===void 0?null:r,o=i.classes,a=o===void 0?[]:o,l=i.attributes,c=l===void 0?{}:l,u=i.styles,h=u===void 0?{}:u;return Yc({type:"counter",content:n},function(){return tr("beforeDOMElementCreation",{content:n,params:i}),d2({content:n.toString(),title:s,extra:{attributes:c,styles:h,classes:["".concat(B.cssPrefix,"-layers-counter")].concat(Jo(a))}})})}}}},M2={mixout:function(){return{text:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.transform,s=r===void 0?En:r,o=i.title,a=o===void 0?null:o,l=i.classes,c=l===void 0?[]:l,u=i.attributes,h=u===void 0?{}:u,f=i.styles,d=f===void 0?{}:f;return Yc({type:"text",content:n},function(){return tr("beforeDOMElementCreation",{content:n,params:i}),Dy({content:n,transform:U(U({},En),s),title:a,extra:{attributes:h,styles:d,classes:["".concat(B.cssPrefix,"-layers-text")].concat(Jo(c))}})})}}},provides:function(e){e.generateLayersText=function(n,i){var r=i.title,s=i.transform,o=i.extra,a=null,l=null;if(fw){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/c,l=u.height/c}return B.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Dy({content:n.innerHTML,width:a,height:l,transform:s,title:r,extra:o,watchable:!0})])}}},L2=new RegExp('"',"ug"),$y=[1105920,1112319];function F2(t){var e=t.replace(L2,""),n=QL(e,0),i=n>=$y[0]&&n<=$y[1],r=e.length===2?e[0]===e[1]:!1;return{value:Zh(r?e[0]:e),isSecondary:i||r}}function By(t,e){var n="".concat(CL).concat(e.replace(":","-"));return new Promise(function(i,r){if(t.getAttribute(n)!==null)return i();var s=gs(t.children),o=s.filter(function(re){return re.getAttribute(Jh)===e})[0],a=yi.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(NL),c=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),i();if(l&&u!=="none"&&u!==""){var h=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?$e:Ne,d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Io[f][l[2].toLowerCase()]:xL[f][c],m=F2(h),y=m.value,b=m.isSecondary,_=l[0].startsWith("FontAwesome"),v=_p(d,y),E=v;if(_){var I=i2(y);I.iconName&&I.prefix&&(v=I.iconName,d=I.prefix)}if(v&&!b&&(!o||o.getAttribute(fp)!==d||o.getAttribute(dp)!==E)){t.setAttribute(n,E),o&&t.removeChild(o);var V=A2(),X=V.extra;X.attributes[Jh]=e,sf(v,d).then(function(re){var ge=bp(U(U({},V),{},{icons:{main:re,mask:vp()},prefix:d,iconName:E,extra:X,watchable:!0})),je=De.createElement("svg");e==="::before"?t.insertBefore(je,t.firstChild):t.appendChild(je),je.outerHTML=ge.map(function(ft){return ea(ft)}).join(`
`),t.removeAttribute(n),i()}).catch(r)}else i()}else i()})}function U2(t){return Promise.all([By(t,"::before"),By(t,"::after")])}function V2(t){return t.parentNode!==document.head&&!~AL.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Jh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function jy(t){if(Xn)return new Promise(function(e,n){var i=gs(t.querySelectorAll("*")).filter(V2).map(U2),r=Ep.begin("searchPseudoElements");Dw(),Promise.all(i).then(function(){r(),af(),e()}).catch(function(){r(),af(),n()})})}var $2={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=jy,n}}},provides:function(e){e.pseudoElements2svg=function(n){var i=n.node,r=i===void 0?De:i;B.searchPseudoElements&&jy(r)}}},zy=!1,B2={mixout:function(){return{dom:{unwatch:function(){Dw(),zy=!0}}}},hooks:function(){return{bootstrap:function(){Fy(tf("mutationObserverCallbacks",{}))},noAuto:function(){T2()},watch:function(n){var i=n.observeMutationsRoot;zy?af():Fy(tf("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},Hy=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,r){var s=r.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return i.flipX=!0,i;if(o&&a==="v")return i.flipY=!0,i;if(a=parseFloat(a),isNaN(a))return i;switch(o){case"grow":i.size=i.size+a;break;case"shrink":i.size=i.size-a;break;case"left":i.x=i.x-a;break;case"right":i.x=i.x+a;break;case"up":i.y=i.y-a;break;case"down":i.y=i.y+a;break;case"rotate":i.rotate=i.rotate+a;break}return i},n)},j2={mixout:function(){return{parse:{transform:function(n){return Hy(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-transform");return r&&(n.transform=Hy(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var i=n.main,r=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(l," ").concat(c," ").concat(u)},f={transform:"translate(".concat(o/2*-1," -256)")},d={outer:a,inner:h,path:f};return{tag:"g",attributes:U({},d.outer),children:[{tag:"g",attributes:U({},d.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:U(U({},i.icon.attributes),d.path)}]}]}}}},Lu={x:0,y:0,width:"100%",height:"100%"};function Ky(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function z2(t){return t.tag==="g"?t.children:[t]}var H2={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-mask"),s=r?Gc(r.split(" ").map(function(o){return o.trim()})):vp();return s.prefix||(s.prefix=_i()),n.mask=s,n.maskId=i.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var i=n.children,r=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,c=s.width,u=s.icon,h=o.width,f=o.icon,d=jL({transform:l,containerWidth:h,iconWidth:c}),m={tag:"rect",attributes:U(U({},Lu),{},{fill:"white"})},y=u.children?{children:u.children.map(Ky)}:{},b={tag:"g",attributes:U({},d.inner),children:[Ky(U({tag:u.tag,attributes:U(U({},u.attributes),d.path)},y))]},_={tag:"g",attributes:U({},d.outer),children:[b]},v="mask-".concat(a||Ao()),E="clip-".concat(a||Ao()),I={tag:"mask",attributes:U(U({},Lu),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[m,_]},V={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:z2(f)},I]};return i.push(V,{tag:"rect",attributes:U({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(v,")")},Lu)}),{children:i,attributes:r}}}},K2={provides:function(e){var n=!1;yi.matchMedia&&(n=yi.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:U(U({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=U(U({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:U(U({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:U(U({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:U(U({},o),{},{values:"1;0;1;1;0;1;"})}),i.push(a),i.push({tag:"path",attributes:U(U({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:U(U({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||i.push({tag:"path",attributes:U(U({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:U(U({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},W2={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return n.symbol=s,n}}}},q2=[KL,O2,D2,P2,M2,$2,B2,j2,H2,K2,W2];o2(q2,{mixoutsTo:Kt});Kt.noAuto;var Mw=Kt.config,ta=Kt.library;Kt.dom;var Ml=Kt.parse;Kt.findIconDefinition;Kt.toHtml;var G2=Kt.icon;Kt.layer;var Y2=Kt.text;Kt.counter;var Q2={prefix:"fas",iconName:"crow",icon:[640,512,[],"f520","M456 0c-48.6 0-88 39.4-88 88v29.2L12.5 390.6c-14 10.8-16.6 30.9-5.9 44.9s30.9 16.6 44.9 5.9L126.1 384H259.2l46.6 113.1c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3L311.1 384H352c1.1 0 2.1 0 3.2 0l46.6 113.2c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3l-42-102C484.9 354.1 544 280 544 192V128v-8l80.5-20.1c8.6-2.1 13.8-10.8 11.6-19.4C629 52 603.4 32 574 32H523.9C507.7 12.5 483.3 0 456 0zm0 64a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},X2={prefix:"fas",iconName:"frog",icon:[576,512,[],"f52e","M368 32c41.7 0 75.9 31.8 79.7 72.5l85.6 26.3c25.4 7.8 42.8 31.3 42.8 57.9c0 21.8-11.7 41.9-30.7 52.7L400.8 323.5 493.3 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H480c-8.5 0-16.6-3.4-22.6-9.4L346.9 360.2c11.7-36 3.2-77.1-25.4-105.7c-40.6-40.6-106.3-40.6-146.9-.1L101 324.4c-6.4 6.1-6.7 16.2-.6 22.6s16.2 6.6 22.6 .6l73.8-70.2 .1-.1 .1-.1c3.5-3.5 7.3-6.6 11.3-9.2c27.9-18.5 65.9-15.4 90.5 9.2c24.7 24.7 27.7 62.9 9 90.9c-2.6 3.8-5.6 7.5-9 10.9L261.8 416H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-35.3 0-64-28.7-64-64C0 249.6 127 112.9 289.3 97.5C296.2 60.2 328.8 32 368 32zm0 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]},J2={prefix:"fas",iconName:"feather-pointed",icon:[512,512,["feather-alt"],"f56b","M278.5 215.6L23 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l74.8-74.8c7.4 4.6 15.3 8.2 23.8 10.5C200.3 452.8 270 454.5 338 409.4c12.2-8.1 5.8-25.4-8.8-25.4l-16.1 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l97.7-29.3c3.4-1 6.4-3.1 8.4-6.1c4.4-6.4 8.6-12.9 12.6-19.6c6.2-10.3-1.5-23-13.5-23l-38.6 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l80.9-24.3c4.6-1.4 8.4-4.8 10.2-9.3C494.5 163 507.8 86.1 511.9 36.8c.8-9.9-3-19.6-10-26.6s-16.7-10.8-26.6-10C391.5 7 228.5 40.5 137.4 131.6C57.3 211.7 56.7 302.3 71.3 356.4c2.1 7.9 12 9.6 17.8 3.8L253.6 195.8c6.2-6.2 16.4-6.2 22.6 0c5.4 5.4 6.1 13.6 2.2 19.8z"]},Z2={prefix:"fas",iconName:"cat",icon:[576,512,[128008],"f6be","M320 192h17.1c22.1 38.3 63.5 64 110.9 64c11 0 21.8-1.4 32-4v4 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V339.2L280 448h56c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-53 0-96-43-96-96V192.5c0-16.1-12-29.8-28-31.8l-7.9-1c-17.5-2.2-30-18.2-27.8-35.7s18.2-30 35.7-27.8l7.9 1c48 6 84.1 46.8 84.1 95.3v85.3c34.4-51.7 93.2-85.8 160-85.8zm160 26.5v0c-10 3.5-20.8 5.5-32 5.5c-28.4 0-54-12.4-71.6-32h0c-3.7-4.1-7-8.5-9.9-13.2C357.3 164 352 146.6 352 128v0V32 12 10.7C352 4.8 356.7 .1 362.6 0h.2c3.3 0 6.4 1.6 8.4 4.2l0 .1L384 21.3l27.2 36.3L416 64h64l4.8-6.4L512 21.3 524.8 4.3l0-.1c2-2.6 5.1-4.2 8.4-4.2h.2C539.3 .1 544 4.8 544 10.7V12 32v96c0 17.3-4.6 33.6-12.6 47.6c-11.3 19.8-29.6 35.2-51.4 42.9zM432 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"]},eF={prefix:"fas",iconName:"hippo",icon:[640,512,[129435],"f6ed","M407 47c9.4-9.4 24.6-9.4 33.9 0l17.2 17.2c1.9-.1 3.9-.2 5.8-.2h32c11.2 0 21.9 2.3 31.6 6.5L543 55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L564 101.9c7.6 12.2 12 26.7 12 42.1c0 10.2 7.4 18.8 16.7 23c27.9 12.5 47.3 40.5 47.3 73c0 26.2-12.6 49.4-32 64v32c0 8.8-7.2 16-16 16H560c-8.8 0-16-7.2-16-16V320H480v16c0 8.8-7.2 16-16 16H432c-8.8 0-16-7.2-16-16V318.4c-11.8-2.4-22.7-7.4-32-14.4c-1.5-1.1-2.9-2.3-4.3-3.5c-17-14.7-27.7-36.4-27.7-60.5c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 44.7 26.2 83.2 64 101.2V352c0 17.7 14.3 32 32 32h32v64c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V372c-19.8 7.7-41.4 12-64 12s-44.2-4.3-64-12v76c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V329.1L45.9 369.7c-5.4 12.1-19.6 17.6-31.7 12.2S-3.3 362.4 2.1 350.3L24 300.9c5.3-11.9 8-24.7 8-37.7C32 155.7 117.2 68 223.8 64.1l.2-.1h7.2H256h32c41.7 0 83.4 12.1 117.2 25.7c1.7-1.8 3.5-3.6 5.3-5.2L407 81c-9.4-9.4-9.4-24.6 0-33.9zm73 185a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm88 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM480 144a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"]};function Wy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function en(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Wy(Object(n),!0).forEach(function(i){kt(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Wy(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Ll(t){return Ll=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ll(t)}function kt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function tF(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function nF(t,e){if(t==null)return{};var n=tF(t,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function lf(t){return iF(t)||rF(t)||sF(t)||oF()}function iF(t){if(Array.isArray(t))return cf(t)}function rF(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function sF(t,e){if(t){if(typeof t=="string")return cf(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return cf(t,e)}}function cf(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function oF(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var aF=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Lw={exports:{}};(function(t){(function(e){var n=function(_,v,E){if(!c(v)||h(v)||f(v)||d(v)||l(v))return v;var I,V=0,X=0;if(u(v))for(I=[],X=v.length;V<X;V++)I.push(n(_,v[V],E));else{I={};for(var re in v)Object.prototype.hasOwnProperty.call(v,re)&&(I[_(re,E)]=n(_,v[re],E))}return I},i=function(_,v){v=v||{};var E=v.separator||"_",I=v.split||/(?=[A-Z])/;return _.split(I).join(E)},r=function(_){return m(_)?_:(_=_.replace(/[\-_\s]+(.)?/g,function(v,E){return E?E.toUpperCase():""}),_.substr(0,1).toLowerCase()+_.substr(1))},s=function(_){var v=r(_);return v.substr(0,1).toUpperCase()+v.substr(1)},o=function(_,v){return i(_,v).toLowerCase()},a=Object.prototype.toString,l=function(_){return typeof _=="function"},c=function(_){return _===Object(_)},u=function(_){return a.call(_)=="[object Array]"},h=function(_){return a.call(_)=="[object Date]"},f=function(_){return a.call(_)=="[object RegExp]"},d=function(_){return a.call(_)=="[object Boolean]"},m=function(_){return _=_-0,_===_},y=function(_,v){var E=v&&"process"in v?v.process:v;return typeof E!="function"?_:function(I,V){return E(I,_,V)}},b={camelize:r,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(_,v){return n(y(r,v),_)},decamelizeKeys:function(_,v){return n(y(o,v),_,v)},pascalizeKeys:function(_,v){return n(y(s,v),_)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=b:e.humps=b})(aF)})(Lw);var lF=Lw.exports,cF=["class","style"];function uF(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),r=lF.camelize(n.slice(0,i)),s=n.slice(i+1).trim();return e[r]=s,e},{})}function hF(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Tp(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var i=(t.children||[]).map(function(l){return Tp(l)}),r=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=hF(u);break;case"style":l.style=uF(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=nF(n,cF);return Zl(t.tag,en(en(en({},e),{},{class:r.class,style:en(en({},r.style),o)},r.attrs),a),i)}var Fw=!1;try{Fw=!0}catch{}function fF(){if(!Fw&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Qs(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?kt({},t,e):{}}function dF(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},kt(e,"fa-".concat(t.size),t.size!==null),kt(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),kt(e,"fa-pull-".concat(t.pull),t.pull!==null),kt(e,"fa-swap-opacity",t.swapOpacity),kt(e,"fa-bounce",t.bounce),kt(e,"fa-shake",t.shake),kt(e,"fa-beat",t.beat),kt(e,"fa-fade",t.fade),kt(e,"fa-beat-fade",t.beatFade),kt(e,"fa-flash",t.flash),kt(e,"fa-spin-pulse",t.spinPulse),kt(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(i){return n[i]?i:null}).filter(function(i){return i})}function qy(t){if(t&&Ll(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Ml.icon)return Ml.icon(t);if(t===null)return null;if(Ll(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var pF=Ro({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var i=n.attrs,r=ie(function(){return qy(e.icon)}),s=ie(function(){return Qs("classes",dF(e))}),o=ie(function(){return Qs("transform",typeof e.transform=="string"?Ml.transform(e.transform):e.transform)}),a=ie(function(){return Qs("mask",qy(e.mask))}),l=ie(function(){return G2(r.value,en(en(en(en({},s.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});Ar(l,function(u){if(!u)return fF("Could not find one or more icon(s)",r.value,a.value)},{immediate:!0});var c=ie(function(){return l.value?Tp(l.value.abstract[0],{},i):null});return function(){return c.value}}});Ro({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var i=n.slots,r=Mw.familyPrefix,s=ie(function(){return["".concat(r,"-layers")].concat(lf(e.fixedWidth?["".concat(r,"-fw")]:[]))});return function(){return Zl("div",{class:s.value},i.default?i.default():[])}}});Ro({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var i=n.attrs,r=Mw.familyPrefix,s=ie(function(){return Qs("classes",[].concat(lf(e.counter?["".concat(r,"-layers-counter")]:[]),lf(e.position?["".concat(r,"-layers-").concat(e.position)]:[])))}),o=ie(function(){return Qs("transform",typeof e.transform=="string"?Ml.transform(e.transform):e.transform)}),a=ie(function(){var c=Y2(e.value.toString(),en(en({},o.value),s.value)),u=c.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=ie(function(){return Tp(a.value,{},i)});return function(){return l.value}}});ta.add(eF);ta.add(Q2);ta.add(X2);ta.add(J2);ta.add(Z2);const na=r1(RM);na.use(l1());na.use(mL);na.use(IP,{firebaseApp:wi});na.component("font-awesome-icon",pF);na.mount("#app");
