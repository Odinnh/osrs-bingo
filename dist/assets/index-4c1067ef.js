(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function ff(t,e){const n=Object.create(null),i=t.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function ko(t){if(ee(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Ze(i)?Hw(i):ko(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(Ze(t))return t;if(Ue(t))return t}}const Bw=/;(?![^(]*\))/g,jw=/:([^]+)/,zw=/\/\*.*?\*\//gs;function Hw(t){const e={};return t.replace(zw,"").split(Bw).forEach(n=>{if(n){const i=n.split(jw);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function di(t){let e="";if(Ze(t))e=t;else if(ee(t))for(let n=0;n<t.length;n++){const i=di(t[n]);i&&(e+=i+" ")}else if(Ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Kw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ww=ff(Kw);function Yy(t){return!!t||t===""}const vn=t=>Ze(t)?t:t==null?"":ee(t)||Ue(t)&&(t.toString===Zy||!ne(t.toString))?JSON.stringify(t,Qy,2):String(t),Qy=(t,e)=>e&&e.__v_isRef?Qy(t,e.value):Sr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:Xy(e)?{[`Set(${e.size})`]:[...e.values()]}:Ue(e)&&!ee(e)&&!e_(e)?String(e):e,Ne={},Cr=[],ln=()=>{},qw=()=>!1,Gw=/^on[^a-z]/,Vl=t=>Gw.test(t),df=t=>t.startsWith("onUpdate:"),kt=Object.assign,pf=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Yw=Object.prototype.hasOwnProperty,pe=(t,e)=>Yw.call(t,e),ee=Array.isArray,Sr=t=>$l(t)==="[object Map]",Xy=t=>$l(t)==="[object Set]",ne=t=>typeof t=="function",Ze=t=>typeof t=="string",mf=t=>typeof t=="symbol",Ue=t=>t!==null&&typeof t=="object",Jy=t=>Ue(t)&&ne(t.then)&&ne(t.catch),Zy=Object.prototype.toString,$l=t=>Zy.call(t),Qw=t=>$l(t).slice(8,-1),e_=t=>$l(t)==="[object Object]",gf=t=>Ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Pa=ff(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Bl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Xw=/-(\w)/g,Cn=Bl(t=>t.replace(Xw,(e,n)=>n?n.toUpperCase():"")),Jw=/\B([A-Z])/g,ts=Bl(t=>t.replace(Jw,"-$1").toLowerCase()),jl=Bl(t=>t.charAt(0).toUpperCase()+t.slice(1)),Jc=Bl(t=>t?`on${jl(t)}`:""),Xs=(t,e)=>!Object.is(t,e),Ma=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},qa=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Vu=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let kp;const Zw=()=>kp||(kp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ut;class t_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ut,!e&&Ut&&(this.index=(Ut.scopes||(Ut.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ut;try{return Ut=this,e()}finally{Ut=n}}}on(){Ut=this}off(){Ut=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function eT(t){return new t_(t)}function tT(t,e=Ut){e&&e.active&&e.effects.push(t)}function n_(){return Ut}function nT(t){Ut&&Ut.cleanups.push(t)}const yf=t=>{const e=new Set(t);return e.w=0,e.n=0,e},i_=t=>(t.w&pi)>0,r_=t=>(t.n&pi)>0,iT=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=pi},rT=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];i_(r)&&!r_(r)?r.delete(t):e[n++]=r,r.w&=~pi,r.n&=~pi}e.length=n}},$u=new WeakMap;let As=0,pi=1;const Bu=30;let Zt;const zi=Symbol(""),ju=Symbol("");class _f{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,tT(this,i)}run(){if(!this.active)return this.fn();let e=Zt,n=ai;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Zt,Zt=this,ai=!0,pi=1<<++As,As<=Bu?iT(this):Rp(this),this.fn()}finally{As<=Bu&&rT(this),pi=1<<--As,Zt=this.parent,ai=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Zt===this?this.deferStop=!0:this.active&&(Rp(this),this.onStop&&this.onStop(),this.active=!1)}}function Rp(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let ai=!0;const s_=[];function ns(){s_.push(ai),ai=!1}function is(){const t=s_.pop();ai=t===void 0?!0:t}function Mt(t,e,n){if(ai&&Zt){let i=$u.get(t);i||$u.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=yf()),o_(r)}}function o_(t,e){let n=!1;As<=Bu?r_(t)||(t.n|=pi,n=!i_(t)):n=!t.has(Zt),n&&(t.add(Zt),Zt.deps.push(t))}function $n(t,e,n,i,r,s){const o=$u.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ee(t)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ee(t)?gf(n)&&a.push(o.get("length")):(a.push(o.get(zi)),Sr(t)&&a.push(o.get(ju)));break;case"delete":ee(t)||(a.push(o.get(zi)),Sr(t)&&a.push(o.get(ju)));break;case"set":Sr(t)&&a.push(o.get(zi));break}if(a.length===1)a[0]&&zu(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);zu(yf(l))}}function zu(t,e){const n=ee(t)?t:[...t];for(const i of n)i.computed&&Np(i);for(const i of n)i.computed||Np(i)}function Np(t,e){(t!==Zt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const sT=ff("__proto__,__v_isRef,__isVue"),a_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(mf)),oT=vf(),aT=vf(!1,!0),lT=vf(!0),xp=cT();function cT(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=ye(this);for(let s=0,o=this.length;s<o;s++)Mt(i,"get",s+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(ye)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ns();const i=ye(this)[e].apply(this,n);return is(),i}}),t}function uT(t){const e=ye(this);return Mt(e,"has",t),e.hasOwnProperty(t)}function vf(t=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(t?e?ST:f_:e?h_:u_).get(i))return i;const o=ee(i);if(!t){if(o&&pe(xp,r))return Reflect.get(xp,r,s);if(r==="hasOwnProperty")return uT}const a=Reflect.get(i,r,s);return(mf(r)?a_.has(r):sT(r))||(t||Mt(i,"get",r),e)?a:ct(a)?o&&gf(r)?a:a.value:Ue(a)?t?d_(a):Ro(a):a}}const hT=l_(),fT=l_(!0);function l_(t=!1){return function(n,i,r,s){let o=n[i];if(Fr(o)&&ct(o)&&!ct(r))return!1;if(!t&&(!Ga(r)&&!Fr(r)&&(o=ye(o),r=ye(r)),!ee(n)&&ct(o)&&!ct(r)))return o.value=r,!0;const a=ee(n)&&gf(i)?Number(i)<n.length:pe(n,i),l=Reflect.set(n,i,r,s);return n===ye(s)&&(a?Xs(r,o)&&$n(n,"set",i,r):$n(n,"add",i,r)),l}}function dT(t,e){const n=pe(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&$n(t,"delete",e,void 0),i}function pT(t,e){const n=Reflect.has(t,e);return(!mf(e)||!a_.has(e))&&Mt(t,"has",e),n}function mT(t){return Mt(t,"iterate",ee(t)?"length":zi),Reflect.ownKeys(t)}const c_={get:oT,set:hT,deleteProperty:dT,has:pT,ownKeys:mT},gT={get:lT,set(t,e){return!0},deleteProperty(t,e){return!0}},yT=kt({},c_,{get:aT,set:fT}),bf=t=>t,zl=t=>Reflect.getPrototypeOf(t);function oa(t,e,n=!1,i=!1){t=t.__v_raw;const r=ye(t),s=ye(e);n||(e!==s&&Mt(r,"get",e),Mt(r,"get",s));const{has:o}=zl(r),a=i?bf:n?If:Js;if(o.call(r,e))return a(t.get(e));if(o.call(r,s))return a(t.get(s));t!==r&&t.get(e)}function aa(t,e=!1){const n=this.__v_raw,i=ye(n),r=ye(t);return e||(t!==r&&Mt(i,"has",t),Mt(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function la(t,e=!1){return t=t.__v_raw,!e&&Mt(ye(t),"iterate",zi),Reflect.get(t,"size",t)}function Op(t){t=ye(t);const e=ye(this);return zl(e).has.call(e,t)||(e.add(t),$n(e,"add",t,t)),this}function Dp(t,e){e=ye(e);const n=ye(this),{has:i,get:r}=zl(n);let s=i.call(n,t);s||(t=ye(t),s=i.call(n,t));const o=r.call(n,t);return n.set(t,e),s?Xs(e,o)&&$n(n,"set",t,e):$n(n,"add",t,e),this}function Pp(t){const e=ye(this),{has:n,get:i}=zl(e);let r=n.call(e,t);r||(t=ye(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&$n(e,"delete",t,void 0),s}function Mp(){const t=ye(this),e=t.size!==0,n=t.clear();return e&&$n(t,"clear",void 0,void 0),n}function ca(t,e){return function(i,r){const s=this,o=s.__v_raw,a=ye(o),l=e?bf:t?If:Js;return!t&&Mt(a,"iterate",zi),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function ua(t,e,n){return function(...i){const r=this.__v_raw,s=ye(r),o=Sr(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?bf:e?If:Js;return!e&&Mt(s,"iterate",l?ju:zi),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function ti(t){return function(...e){return t==="delete"?!1:this}}function _T(){const t={get(s){return oa(this,s)},get size(){return la(this)},has:aa,add:Op,set:Dp,delete:Pp,clear:Mp,forEach:ca(!1,!1)},e={get(s){return oa(this,s,!1,!0)},get size(){return la(this)},has:aa,add:Op,set:Dp,delete:Pp,clear:Mp,forEach:ca(!1,!0)},n={get(s){return oa(this,s,!0)},get size(){return la(this,!0)},has(s){return aa.call(this,s,!0)},add:ti("add"),set:ti("set"),delete:ti("delete"),clear:ti("clear"),forEach:ca(!0,!1)},i={get(s){return oa(this,s,!0,!0)},get size(){return la(this,!0)},has(s){return aa.call(this,s,!0)},add:ti("add"),set:ti("set"),delete:ti("delete"),clear:ti("clear"),forEach:ca(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=ua(s,!1,!1),n[s]=ua(s,!0,!1),e[s]=ua(s,!1,!0),i[s]=ua(s,!0,!0)}),[t,n,e,i]}const[vT,bT,ET,wT]=_T();function Ef(t,e){const n=e?t?wT:ET:t?bT:vT;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(pe(n,r)&&r in i?n:i,r,s)}const TT={get:Ef(!1,!1)},IT={get:Ef(!1,!0)},CT={get:Ef(!0,!1)},u_=new WeakMap,h_=new WeakMap,f_=new WeakMap,ST=new WeakMap;function AT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function kT(t){return t.__v_skip||!Object.isExtensible(t)?0:AT(Qw(t))}function Ro(t){return Fr(t)?t:wf(t,!1,c_,TT,u_)}function RT(t){return wf(t,!1,yT,IT,h_)}function d_(t){return wf(t,!0,gT,CT,f_)}function wf(t,e,n,i,r){if(!Ue(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=kT(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function Ar(t){return Fr(t)?Ar(t.__v_raw):!!(t&&t.__v_isReactive)}function Fr(t){return!!(t&&t.__v_isReadonly)}function Ga(t){return!!(t&&t.__v_isShallow)}function p_(t){return Ar(t)||Fr(t)}function ye(t){const e=t&&t.__v_raw;return e?ye(e):t}function Tf(t){return qa(t,"__v_skip",!0),t}const Js=t=>Ue(t)?Ro(t):t,If=t=>Ue(t)?d_(t):t;function m_(t){ai&&Zt&&(t=ye(t),o_(t.dep||(t.dep=yf())))}function g_(t,e){t=ye(t);const n=t.dep;n&&zu(n)}function ct(t){return!!(t&&t.__v_isRef===!0)}function Dt(t){return __(t,!1)}function y_(t){return __(t,!0)}function __(t,e){return ct(t)?t:new NT(t,e)}class NT{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ye(e),this._value=n?e:Js(e)}get value(){return m_(this),this._value}set value(e){const n=this.__v_isShallow||Ga(e)||Fr(e);e=n?e:ye(e),Xs(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Js(e),g_(this))}}function P(t){return ct(t)?t.value:t}const xT={get:(t,e,n)=>P(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return ct(r)&&!ct(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function v_(t){return Ar(t)?t:new Proxy(t,xT)}var b_;class OT{constructor(e,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[b_]=!1,this._dirty=!0,this.effect=new _f(e,()=>{this._dirty||(this._dirty=!0,g_(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=ye(this);return m_(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}b_="__v_isReadonly";function DT(t,e,n=!1){let i,r;const s=ne(t);return s?(i=t,r=ln):(i=t.get,r=t.set),new OT(i,r,s||!r,n)}function li(t,e,n,i){let r;try{r=i?t(...i):t()}catch(s){Hl(s,e,n)}return r}function cn(t,e,n,i){if(ne(t)){const s=li(t,e,n,i);return s&&Jy(s)&&s.catch(o=>{Hl(o,e,n)}),s}const r=[];for(let s=0;s<t.length;s++)r.push(cn(t[s],e,n,i));return r}function Hl(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){li(l,null,10,[t,o,a]);return}}PT(t,n,r,i)}function PT(t,e,n,i=!0){console.error(t)}let Zs=!1,Hu=!1;const _t=[];let yn=0;const kr=[];let Pn=null,Oi=0;const E_=Promise.resolve();let Cf=null;function w_(t){const e=Cf||E_;return t?e.then(this?t.bind(this):t):e}function MT(t){let e=yn+1,n=_t.length;for(;e<n;){const i=e+n>>>1;eo(_t[i])<t?e=i+1:n=i}return e}function Sf(t){(!_t.length||!_t.includes(t,Zs&&t.allowRecurse?yn+1:yn))&&(t.id==null?_t.push(t):_t.splice(MT(t.id),0,t),T_())}function T_(){!Zs&&!Hu&&(Hu=!0,Cf=E_.then(C_))}function LT(t){const e=_t.indexOf(t);e>yn&&_t.splice(e,1)}function FT(t){ee(t)?kr.push(...t):(!Pn||!Pn.includes(t,t.allowRecurse?Oi+1:Oi))&&kr.push(t),T_()}function Lp(t,e=Zs?yn+1:0){for(;e<_t.length;e++){const n=_t[e];n&&n.pre&&(_t.splice(e,1),e--,n())}}function I_(t){if(kr.length){const e=[...new Set(kr)];if(kr.length=0,Pn){Pn.push(...e);return}for(Pn=e,Pn.sort((n,i)=>eo(n)-eo(i)),Oi=0;Oi<Pn.length;Oi++)Pn[Oi]();Pn=null,Oi=0}}const eo=t=>t.id==null?1/0:t.id,UT=(t,e)=>{const n=eo(t)-eo(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function C_(t){Hu=!1,Zs=!0,_t.sort(UT);const e=ln;try{for(yn=0;yn<_t.length;yn++){const n=_t[yn];n&&n.active!==!1&&li(n,null,14)}}finally{yn=0,_t.length=0,I_(),Zs=!1,Cf=null,(_t.length||kr.length)&&C_()}}function VT(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Ne;let r=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=i[u]||Ne;f&&(r=n.map(d=>Ze(d)?d.trim():d)),h&&(r=n.map(Vu))}let a,l=i[a=Jc(e)]||i[a=Jc(Cn(e))];!l&&s&&(l=i[a=Jc(ts(e))]),l&&cn(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,cn(c,t,6,r)}}function S_(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!ne(t)){const l=c=>{const u=S_(c,e,!0);u&&(a=!0,kt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(Ue(t)&&i.set(t,null),null):(ee(s)?s.forEach(l=>o[l]=null):kt(o,s),Ue(t)&&i.set(t,o),o)}function Kl(t,e){return!t||!Vl(e)?!1:(e=e.slice(2).replace(/Once$/,""),pe(t,e[0].toLowerCase()+e.slice(1))||pe(t,ts(e))||pe(t,e))}let $t=null,Wl=null;function Ya(t){const e=$t;return $t=t,Wl=t&&t.type.__scopeId||null,e}function ql(t){Wl=t}function Gl(){Wl=null}function $T(t,e=$t,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Kp(-1);const s=Ya(e);let o;try{o=t(...r)}finally{Ya(s),i._d&&Kp(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Zc(t){const{type:e,vnode:n,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:m,inheritAttrs:y}=t;let b,_;const v=Ya(t);try{if(n.shapeFlag&4){const I=r||i;b=gn(u.call(I,I,h,s,d,f,m)),_=l}else{const I=e;b=gn(I.length>1?I(s,{attrs:l,slots:a,emit:c}):I(s,null)),_=e.props?l:BT(l)}}catch(I){Ms.length=0,Hl(I,t,1),b=Ye(Gi)}let E=b;if(_&&y!==!1){const I=Object.keys(_),{shapeFlag:F}=E;I.length&&F&7&&(o&&I.some(df)&&(_=jT(_,o)),E=Ur(E,_))}return n.dirs&&(E=Ur(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),b=E,Ya(v),b}const BT=t=>{let e;for(const n in t)(n==="class"||n==="style"||Vl(n))&&((e||(e={}))[n]=t[n]);return e},jT=(t,e)=>{const n={};for(const i in t)(!df(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function zT(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Fp(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!Kl(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Fp(i,o,c):!0:!!o;return!1}function Fp(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!Kl(n,s))return!0}return!1}function HT({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const KT=t=>t.__isSuspense;function WT(t,e){e&&e.pendingBranch?ee(t)?e.effects.push(...t):e.effects.push(t):FT(t)}function La(t,e){if(ze){let n=ze.provides;const i=ze.parent&&ze.parent.provides;i===n&&(n=ze.provides=Object.create(i)),n[t]=e}}function Bt(t,e,n=!1){const i=ze||$t;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ne(e)?e.call(i.proxy):e}}function qT(t,e){return Af(t,null,{flush:"post"})}const ha={};function Rr(t,e,n){return Af(t,e,n)}function Af(t,e,{immediate:n,deep:i,flush:r,onTrack:s,onTrigger:o}=Ne){const a=n_()===(ze==null?void 0:ze.scope)?ze:null;let l,c=!1,u=!1;if(ct(t)?(l=()=>t.value,c=Ga(t)):Ar(t)?(l=()=>t,i=!0):ee(t)?(u=!0,c=t.some(E=>Ar(E)||Ga(E)),l=()=>t.map(E=>{if(ct(E))return E.value;if(Ar(E))return Mi(E);if(ne(E))return li(E,a,2)})):ne(t)?e?l=()=>li(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),cn(t,a,3,[f])}:l=ln,e&&i){const E=l;l=()=>Mi(E())}let h,f=E=>{h=_.onStop=()=>{li(E,a,4)}},d;if(no)if(f=ln,e?n&&cn(e,a,3,[l(),u?[]:void 0,f]):l(),r==="sync"){const E=FI();d=E.__watcherHandles||(E.__watcherHandles=[])}else return ln;let m=u?new Array(t.length).fill(ha):ha;const y=()=>{if(_.active)if(e){const E=_.run();(i||c||(u?E.some((I,F)=>Xs(I,m[F])):Xs(E,m)))&&(h&&h(),cn(e,a,3,[E,m===ha?void 0:u&&m[0]===ha?[]:m,f]),m=E)}else _.run()};y.allowRecurse=!!e;let b;r==="sync"?b=y:r==="post"?b=()=>xt(y,a&&a.suspense):(y.pre=!0,a&&(y.id=a.uid),b=()=>Sf(y));const _=new _f(l,b);e?n?y():m=_.run():r==="post"?xt(_.run.bind(_),a&&a.suspense):_.run();const v=()=>{_.stop(),a&&a.scope&&pf(a.scope.effects,_)};return d&&d.push(v),v}function GT(t,e,n){const i=this.proxy,r=Ze(t)?t.includes(".")?A_(i,t):()=>i[t]:t.bind(i,i);let s;ne(e)?s=e:(s=e.handler,n=e);const o=ze;Vr(this);const a=Af(r,s.bind(i),n);return o?Vr(o):Hi(),a}function A_(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function Mi(t,e){if(!Ue(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ct(t))Mi(t.value,e);else if(ee(t))for(let n=0;n<t.length;n++)Mi(t[n],e);else if(Xy(t)||Sr(t))t.forEach(n=>{Mi(n,e)});else if(e_(t))for(const n in t)Mi(t[n],e);return t}function No(t){return ne(t)?{setup:t,name:t.name}:t}const Fa=t=>!!t.type.__asyncLoader,k_=t=>t.type.__isKeepAlive;function YT(t,e){R_(t,"a",e)}function QT(t,e){R_(t,"da",e)}function R_(t,e,n=ze){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Yl(e,i,n),n){let r=n.parent;for(;r&&r.parent;)k_(r.parent.vnode)&&XT(i,e,n,r),r=r.parent}}function XT(t,e,n,i){const r=Yl(e,t,i,!0);kf(()=>{pf(i[e],r)},n)}function Yl(t,e,n=ze,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ns(),Vr(n);const a=cn(e,n,t,o);return Hi(),is(),a});return i?r.unshift(s):r.push(s),s}}const Yn=t=>(e,n=ze)=>(!no||t==="sp")&&Yl(t,(...i)=>e(...i),n),JT=Yn("bm"),N_=Yn("m"),ZT=Yn("bu"),eI=Yn("u"),tI=Yn("bum"),kf=Yn("um"),x_=Yn("sp"),nI=Yn("rtg"),iI=Yn("rtc");function rI(t,e=ze){Yl("ec",t,e)}function Ql(t,e){const n=$t;if(n===null)return t;const i=ec(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=Ne]=e[s];o&&(ne(o)&&(o={mounted:o,updated:o}),o.deep&&Mi(a),r.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Ai(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(ns(),cn(l,n,8,[t.el,a,t,e]),is())}}const O_="components";function D_(t,e){return oI(O_,t,!0,e)||t}const sI=Symbol();function oI(t,e,n=!0,i=!1){const r=$t||ze;if(r){const s=r.type;if(t===O_){const a=MI(s,!1);if(a&&(a===e||a===Cn(e)||a===jl(Cn(e))))return s}const o=Up(r[t]||s[t],e)||Up(r.appContext[t],e);return!o&&i?s:o}}function Up(t,e){return t&&(t[e]||t[Cn(e)]||t[jl(Cn(e))])}function xo(t,e,n,i){let r;const s=n&&n[i];if(ee(t)||Ze(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(Ue(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,s&&s[a])}}else r=[];return n&&(n[i]=r),r}const Ku=t=>t?H_(t)?ec(t)||t.proxy:Ku(t.parent):null,Ps=kt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ku(t.parent),$root:t=>Ku(t.root),$emit:t=>t.emit,$options:t=>Rf(t),$forceUpdate:t=>t.f||(t.f=()=>Sf(t.update)),$nextTick:t=>t.n||(t.n=w_.bind(t.proxy)),$watch:t=>GT.bind(t)}),eu=(t,e)=>t!==Ne&&!t.__isScriptSetup&&pe(t,e),aI={get({_:t},e){const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(eu(i,e))return o[e]=1,i[e];if(r!==Ne&&pe(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&pe(c,e))return o[e]=3,s[e];if(n!==Ne&&pe(n,e))return o[e]=4,n[e];Wu&&(o[e]=0)}}const u=Ps[e];let h,f;if(u)return e==="$attrs"&&Mt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ne&&pe(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,pe(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return eu(r,e)?(r[e]=n,!0):i!==Ne&&pe(i,e)?(i[e]=n,!0):pe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==Ne&&pe(t,o)||eu(e,o)||(a=s[0])&&pe(a,o)||pe(i,o)||pe(Ps,o)||pe(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:pe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Wu=!0;function lI(t){const e=Rf(t),n=t.proxy,i=t.ctx;Wu=!1,e.beforeCreate&&Vp(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:m,activated:y,deactivated:b,beforeDestroy:_,beforeUnmount:v,destroyed:E,unmounted:I,render:F,renderTracked:Q,renderTriggered:re,errorCaptured:ge,serverPrefetch:je,expose:ft,inheritAttrs:ei,components:dn,directives:hr,filters:Ci}=e;if(c&&cI(c,i,null,t.appContext.config.unwrapInjectedRef),o)for(const Ae in o){const Ie=o[Ae];ne(Ie)&&(i[Ae]=Ie.bind(n))}if(r){const Ae=r.call(n,n);Ue(Ae)&&(t.data=Ro(Ae))}if(Wu=!0,s)for(const Ae in s){const Ie=s[Ae],Qt=ne(Ie)?Ie.bind(n,n):ne(Ie.get)?Ie.get.bind(n,n):ln,Si=!ne(Ie)&&ne(Ie.set)?Ie.set.bind(n):ln,Xt=ie({get:Qt,set:Si});Object.defineProperty(i,Ae,{enumerable:!0,configurable:!0,get:()=>Xt.value,set:Rt=>Xt.value=Rt})}if(a)for(const Ae in a)P_(a[Ae],i,n,Ae);if(l){const Ae=ne(l)?l.call(n):l;Reflect.ownKeys(Ae).forEach(Ie=>{La(Ie,Ae[Ie])})}u&&Vp(u,t,"c");function He(Ae,Ie){ee(Ie)?Ie.forEach(Qt=>Ae(Qt.bind(n))):Ie&&Ae(Ie.bind(n))}if(He(JT,h),He(N_,f),He(ZT,d),He(eI,m),He(YT,y),He(QT,b),He(rI,ge),He(iI,Q),He(nI,re),He(tI,v),He(kf,I),He(x_,je),ee(ft))if(ft.length){const Ae=t.exposed||(t.exposed={});ft.forEach(Ie=>{Object.defineProperty(Ae,Ie,{get:()=>n[Ie],set:Qt=>n[Ie]=Qt})})}else t.exposed||(t.exposed={});F&&t.render===ln&&(t.render=F),ei!=null&&(t.inheritAttrs=ei),dn&&(t.components=dn),hr&&(t.directives=hr)}function cI(t,e,n=ln,i=!1){ee(t)&&(t=qu(t));for(const r in t){const s=t[r];let o;Ue(s)?"default"in s?o=Bt(s.from||r,s.default,!0):o=Bt(s.from||r):o=Bt(s),ct(o)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Vp(t,e,n){cn(ee(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function P_(t,e,n,i){const r=i.includes(".")?A_(n,i):()=>n[i];if(Ze(t)){const s=e[t];ne(s)&&Rr(r,s)}else if(ne(t))Rr(r,t.bind(n));else if(Ue(t))if(ee(t))t.forEach(s=>P_(s,e,n,i));else{const s=ne(t.handler)?t.handler.bind(n):e[t.handler];ne(s)&&Rr(r,s,t)}}function Rf(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Qa(l,c,o,!0)),Qa(l,e,o)),Ue(e)&&s.set(e,l),l}function Qa(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Qa(t,s,n,!0),r&&r.forEach(o=>Qa(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=uI[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const uI={data:$p,props:Ri,emits:Ri,methods:Ri,computed:Ri,beforeCreate:Ct,created:Ct,beforeMount:Ct,mounted:Ct,beforeUpdate:Ct,updated:Ct,beforeDestroy:Ct,beforeUnmount:Ct,destroyed:Ct,unmounted:Ct,activated:Ct,deactivated:Ct,errorCaptured:Ct,serverPrefetch:Ct,components:Ri,directives:Ri,watch:fI,provide:$p,inject:hI};function $p(t,e){return e?t?function(){return kt(ne(t)?t.call(this,this):t,ne(e)?e.call(this,this):e)}:e:t}function hI(t,e){return Ri(qu(t),qu(e))}function qu(t){if(ee(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ct(t,e){return t?[...new Set([].concat(t,e))]:e}function Ri(t,e){return t?kt(kt(Object.create(null),t),e):e}function fI(t,e){if(!t)return e;if(!e)return t;const n=kt(Object.create(null),t);for(const i in e)n[i]=Ct(t[i],e[i]);return n}function dI(t,e,n,i=!1){const r={},s={};qa(s,Jl,1),t.propsDefaults=Object.create(null),M_(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:RT(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function pI(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=ye(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Kl(t.emitsOptions,f))continue;const d=e[f];if(l)if(pe(s,f))d!==s[f]&&(s[f]=d,c=!0);else{const m=Cn(f);r[m]=Gu(l,a,m,d,t,!1)}else d!==s[f]&&(s[f]=d,c=!0)}}}else{M_(t,e,r,s)&&(c=!0);let u;for(const h in a)(!e||!pe(e,h)&&((u=ts(h))===h||!pe(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Gu(l,a,h,void 0,t,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!pe(e,h))&&(delete s[h],c=!0)}c&&$n(t,"set","$attrs")}function M_(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Pa(l))continue;const c=e[l];let u;r&&pe(r,u=Cn(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:Kl(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=ye(n),c=a||Ne;for(let u=0;u<s.length;u++){const h=s[u];n[h]=Gu(r,l,h,c[h],t,!pe(c,h))}}return o}function Gu(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=pe(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&ne(l)){const{propsDefaults:c}=r;n in c?i=c[n]:(Vr(r),i=c[n]=l.call(null,e),Hi())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===ts(n))&&(i=!0))}return i}function L_(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!ne(t)){const u=h=>{l=!0;const[f,d]=L_(h,e,!0);kt(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return Ue(t)&&i.set(t,Cr),Cr;if(ee(s))for(let u=0;u<s.length;u++){const h=Cn(s[u]);Bp(h)&&(o[h]=Ne)}else if(s)for(const u in s){const h=Cn(u);if(Bp(h)){const f=s[u],d=o[h]=ee(f)||ne(f)?{type:f}:Object.assign({},f);if(d){const m=Hp(Boolean,d.type),y=Hp(String,d.type);d[0]=m>-1,d[1]=y<0||m<y,(m>-1||pe(d,"default"))&&a.push(h)}}}const c=[o,a];return Ue(t)&&i.set(t,c),c}function Bp(t){return t[0]!=="$"}function jp(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function zp(t,e){return jp(t)===jp(e)}function Hp(t,e){return ee(e)?e.findIndex(n=>zp(n,t)):ne(e)&&zp(e,t)?0:-1}const F_=t=>t[0]==="_"||t==="$stable",Nf=t=>ee(t)?t.map(gn):[gn(t)],mI=(t,e,n)=>{if(e._n)return e;const i=$T((...r)=>Nf(e(...r)),n);return i._c=!1,i},U_=(t,e,n)=>{const i=t._ctx;for(const r in t){if(F_(r))continue;const s=t[r];if(ne(s))e[r]=mI(r,s,i);else if(s!=null){const o=Nf(s);e[r]=()=>o}}},V_=(t,e)=>{const n=Nf(e);t.slots.default=()=>n},gI=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ye(e),qa(e,"_",n)):U_(e,t.slots={})}else t.slots={},e&&V_(t,e);qa(t.slots,Jl,1)},yI=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=Ne;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(kt(r,e),!n&&a===1&&delete r._):(s=!e.$stable,U_(e,r)),o=e}else e&&(V_(t,e),o={default:1});if(s)for(const a in r)!F_(a)&&!(a in o)&&delete r[a]};function $_(){return{app:null,config:{isNativeTag:qw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _I=0;function vI(t,e){return function(i,r=null){ne(i)||(i=Object.assign({},i)),r!=null&&!Ue(r)&&(r=null);const s=$_(),o=new Set;let a=!1;const l=s.app={_uid:_I++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:UI,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&ne(c.install)?(o.add(c),c.install(l,...u)):ne(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const f=Ye(i,r);return f.appContext=s,u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,ec(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Yu(t,e,n,i,r=!1){if(ee(t)){t.forEach((f,d)=>Yu(f,e&&(ee(e)?e[d]:e),n,i,r));return}if(Fa(i)&&!r)return;const s=i.shapeFlag&4?ec(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Ne?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Ze(c)?(u[c]=null,pe(h,c)&&(h[c]=null)):ct(c)&&(c.value=null)),ne(l))li(l,a,12,[o,u]);else{const f=Ze(l),d=ct(l);if(f||d){const m=()=>{if(t.f){const y=f?pe(h,l)?h[l]:u[l]:l.value;r?ee(y)&&pf(y,s):ee(y)?y.includes(s)||y.push(s):f?(u[l]=[s],pe(h,l)&&(h[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,pe(h,l)&&(h[l]=o)):d&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,xt(m,n)):m()}}}const xt=WT;function bI(t){return EI(t)}function EI(t,e){const n=Zw();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=ln,insertStaticContent:m}=t,y=(p,g,w,T=null,S=null,x=null,L=!1,N=null,O=!!g.dynamicChildren)=>{if(p===g)return;p&&!bs(p,g)&&(T=M(p),Rt(p,S,x,!0),p=null),g.patchFlag===-2&&(O=!1,g.dynamicChildren=null);const{type:k,ref:K,shapeFlag:$}=g;switch(k){case Xl:b(p,g,w,T);break;case Gi:_(p,g,w,T);break;case Ua:p==null&&v(g,w,T,L);break;case Ge:dn(p,g,w,T,S,x,L,N,O);break;default:$&1?F(p,g,w,T,S,x,L,N,O):$&6?hr(p,g,w,T,S,x,L,N,O):($&64||$&128)&&k.process(p,g,w,T,S,x,L,N,O,de)}K!=null&&S&&Yu(K,p&&p.ref,x,g||p,!g)},b=(p,g,w,T)=>{if(p==null)i(g.el=a(g.children),w,T);else{const S=g.el=p.el;g.children!==p.children&&c(S,g.children)}},_=(p,g,w,T)=>{p==null?i(g.el=l(g.children||""),w,T):g.el=p.el},v=(p,g,w,T)=>{[p.el,p.anchor]=m(p.children,g,w,T,p.el,p.anchor)},E=({el:p,anchor:g},w,T)=>{let S;for(;p&&p!==g;)S=f(p),i(p,w,T),p=S;i(g,w,T)},I=({el:p,anchor:g})=>{let w;for(;p&&p!==g;)w=f(p),r(p),p=w;r(g)},F=(p,g,w,T,S,x,L,N,O)=>{L=L||g.type==="svg",p==null?Q(g,w,T,S,x,L,N,O):je(p,g,S,x,L,N,O)},Q=(p,g,w,T,S,x,L,N)=>{let O,k;const{type:K,props:$,shapeFlag:W,transition:J,dirs:ae}=p;if(O=p.el=o(p.type,x,$&&$.is,$),W&8?u(O,p.children):W&16&&ge(p.children,O,null,T,S,x&&K!=="foreignObject",L,N),ae&&Ai(p,null,T,"created"),re(O,p,p.scopeId,L,T),$){for(const Ce in $)Ce!=="value"&&!Pa(Ce)&&s(O,Ce,null,$[Ce],x,p.children,T,S,U);"value"in $&&s(O,"value",null,$.value),(k=$.onVnodeBeforeMount)&&mn(k,T,p)}ae&&Ai(p,null,T,"beforeMount");const ke=(!S||S&&!S.pendingBranch)&&J&&!J.persisted;ke&&J.beforeEnter(O),i(O,g,w),((k=$&&$.onVnodeMounted)||ke||ae)&&xt(()=>{k&&mn(k,T,p),ke&&J.enter(O),ae&&Ai(p,null,T,"mounted")},S)},re=(p,g,w,T,S)=>{if(w&&d(p,w),T)for(let x=0;x<T.length;x++)d(p,T[x]);if(S){let x=S.subTree;if(g===x){const L=S.vnode;re(p,L,L.scopeId,L.slotScopeIds,S.parent)}}},ge=(p,g,w,T,S,x,L,N,O=0)=>{for(let k=O;k<p.length;k++){const K=p[k]=N?si(p[k]):gn(p[k]);y(null,K,g,w,T,S,x,L,N)}},je=(p,g,w,T,S,x,L)=>{const N=g.el=p.el;let{patchFlag:O,dynamicChildren:k,dirs:K}=g;O|=p.patchFlag&16;const $=p.props||Ne,W=g.props||Ne;let J;w&&ki(w,!1),(J=W.onVnodeBeforeUpdate)&&mn(J,w,g,p),K&&Ai(g,p,w,"beforeUpdate"),w&&ki(w,!0);const ae=S&&g.type!=="foreignObject";if(k?ft(p.dynamicChildren,k,N,w,T,ae,x):L||Ie(p,g,N,null,w,T,ae,x,!1),O>0){if(O&16)ei(N,g,$,W,w,T,S);else if(O&2&&$.class!==W.class&&s(N,"class",null,W.class,S),O&4&&s(N,"style",$.style,W.style,S),O&8){const ke=g.dynamicProps;for(let Ce=0;Ce<ke.length;Ce++){const Ke=ke[Ce],Jt=$[Ke],dr=W[Ke];(dr!==Jt||Ke==="value")&&s(N,Ke,Jt,dr,S,p.children,w,T,U)}}O&1&&p.children!==g.children&&u(N,g.children)}else!L&&k==null&&ei(N,g,$,W,w,T,S);((J=W.onVnodeUpdated)||K)&&xt(()=>{J&&mn(J,w,g,p),K&&Ai(g,p,w,"updated")},T)},ft=(p,g,w,T,S,x,L)=>{for(let N=0;N<g.length;N++){const O=p[N],k=g[N],K=O.el&&(O.type===Ge||!bs(O,k)||O.shapeFlag&70)?h(O.el):w;y(O,k,K,null,T,S,x,L,!0)}},ei=(p,g,w,T,S,x,L)=>{if(w!==T){if(w!==Ne)for(const N in w)!Pa(N)&&!(N in T)&&s(p,N,w[N],null,L,g.children,S,x,U);for(const N in T){if(Pa(N))continue;const O=T[N],k=w[N];O!==k&&N!=="value"&&s(p,N,k,O,L,g.children,S,x,U)}"value"in T&&s(p,"value",w.value,T.value)}},dn=(p,g,w,T,S,x,L,N,O)=>{const k=g.el=p?p.el:a(""),K=g.anchor=p?p.anchor:a("");let{patchFlag:$,dynamicChildren:W,slotScopeIds:J}=g;J&&(N=N?N.concat(J):J),p==null?(i(k,w,T),i(K,w,T),ge(g.children,w,K,S,x,L,N,O)):$>0&&$&64&&W&&p.dynamicChildren?(ft(p.dynamicChildren,W,w,S,x,L,N),(g.key!=null||S&&g===S.subTree)&&B_(p,g,!0)):Ie(p,g,w,K,S,x,L,N,O)},hr=(p,g,w,T,S,x,L,N,O)=>{g.slotScopeIds=N,p==null?g.shapeFlag&512?S.ctx.activate(g,w,T,L,O):Ci(g,w,T,S,x,L,O):_s(p,g,O)},Ci=(p,g,w,T,S,x,L)=>{const N=p.component=NI(p,T,S);if(k_(p)&&(N.ctx.renderer=de),xI(N),N.asyncDep){if(S&&S.registerDep(N,He),!p.el){const O=N.subTree=Ye(Gi);_(null,O,g,w)}return}He(N,p,g,w,S,x,L)},_s=(p,g,w)=>{const T=g.component=p.component;if(zT(p,g,w))if(T.asyncDep&&!T.asyncResolved){Ae(T,g,w);return}else T.next=g,LT(T.update),T.update();else g.el=p.el,T.vnode=g},He=(p,g,w,T,S,x,L)=>{const N=()=>{if(p.isMounted){let{next:K,bu:$,u:W,parent:J,vnode:ae}=p,ke=K,Ce;ki(p,!1),K?(K.el=ae.el,Ae(p,K,L)):K=ae,$&&Ma($),(Ce=K.props&&K.props.onVnodeBeforeUpdate)&&mn(Ce,J,K,ae),ki(p,!0);const Ke=Zc(p),Jt=p.subTree;p.subTree=Ke,y(Jt,Ke,h(Jt.el),M(Jt),p,S,x),K.el=Ke.el,ke===null&&HT(p,Ke.el),W&&xt(W,S),(Ce=K.props&&K.props.onVnodeUpdated)&&xt(()=>mn(Ce,J,K,ae),S)}else{let K;const{el:$,props:W}=g,{bm:J,m:ae,parent:ke}=p,Ce=Fa(g);if(ki(p,!1),J&&Ma(J),!Ce&&(K=W&&W.onVnodeBeforeMount)&&mn(K,ke,g),ki(p,!0),$&&se){const Ke=()=>{p.subTree=Zc(p),se($,p.subTree,p,S,null)};Ce?g.type.__asyncLoader().then(()=>!p.isUnmounted&&Ke()):Ke()}else{const Ke=p.subTree=Zc(p);y(null,Ke,w,T,p,S,x),g.el=Ke.el}if(ae&&xt(ae,S),!Ce&&(K=W&&W.onVnodeMounted)){const Ke=g;xt(()=>mn(K,ke,Ke),S)}(g.shapeFlag&256||ke&&Fa(ke.vnode)&&ke.vnode.shapeFlag&256)&&p.a&&xt(p.a,S),p.isMounted=!0,g=w=T=null}},O=p.effect=new _f(N,()=>Sf(k),p.scope),k=p.update=()=>O.run();k.id=p.uid,ki(p,!0),k()},Ae=(p,g,w)=>{g.component=p;const T=p.vnode.props;p.vnode=g,p.next=null,pI(p,g.props,T,w),yI(p,g.children,w),ns(),Lp(),is()},Ie=(p,g,w,T,S,x,L,N,O=!1)=>{const k=p&&p.children,K=p?p.shapeFlag:0,$=g.children,{patchFlag:W,shapeFlag:J}=g;if(W>0){if(W&128){Si(k,$,w,T,S,x,L,N,O);return}else if(W&256){Qt(k,$,w,T,S,x,L,N,O);return}}J&8?(K&16&&U(k,S,x),$!==k&&u(w,$)):K&16?J&16?Si(k,$,w,T,S,x,L,N,O):U(k,S,x,!0):(K&8&&u(w,""),J&16&&ge($,w,T,S,x,L,N,O))},Qt=(p,g,w,T,S,x,L,N,O)=>{p=p||Cr,g=g||Cr;const k=p.length,K=g.length,$=Math.min(k,K);let W;for(W=0;W<$;W++){const J=g[W]=O?si(g[W]):gn(g[W]);y(p[W],J,w,null,S,x,L,N,O)}k>K?U(p,S,x,!0,!1,$):ge(g,w,T,S,x,L,N,O,$)},Si=(p,g,w,T,S,x,L,N,O)=>{let k=0;const K=g.length;let $=p.length-1,W=K-1;for(;k<=$&&k<=W;){const J=p[k],ae=g[k]=O?si(g[k]):gn(g[k]);if(bs(J,ae))y(J,ae,w,null,S,x,L,N,O);else break;k++}for(;k<=$&&k<=W;){const J=p[$],ae=g[W]=O?si(g[W]):gn(g[W]);if(bs(J,ae))y(J,ae,w,null,S,x,L,N,O);else break;$--,W--}if(k>$){if(k<=W){const J=W+1,ae=J<K?g[J].el:T;for(;k<=W;)y(null,g[k]=O?si(g[k]):gn(g[k]),w,ae,S,x,L,N,O),k++}}else if(k>W)for(;k<=$;)Rt(p[k],S,x,!0),k++;else{const J=k,ae=k,ke=new Map;for(k=ae;k<=W;k++){const Ft=g[k]=O?si(g[k]):gn(g[k]);Ft.key!=null&&ke.set(Ft.key,k)}let Ce,Ke=0;const Jt=W-ae+1;let dr=!1,Cp=0;const vs=new Array(Jt);for(k=0;k<Jt;k++)vs[k]=0;for(k=J;k<=$;k++){const Ft=p[k];if(Ke>=Jt){Rt(Ft,S,x,!0);continue}let pn;if(Ft.key!=null)pn=ke.get(Ft.key);else for(Ce=ae;Ce<=W;Ce++)if(vs[Ce-ae]===0&&bs(Ft,g[Ce])){pn=Ce;break}pn===void 0?Rt(Ft,S,x,!0):(vs[pn-ae]=k+1,pn>=Cp?Cp=pn:dr=!0,y(Ft,g[pn],w,null,S,x,L,N,O),Ke++)}const Sp=dr?wI(vs):Cr;for(Ce=Sp.length-1,k=Jt-1;k>=0;k--){const Ft=ae+k,pn=g[Ft],Ap=Ft+1<K?g[Ft+1].el:T;vs[k]===0?y(null,pn,w,Ap,S,x,L,N,O):dr&&(Ce<0||k!==Sp[Ce]?Xt(pn,w,Ap,2):Ce--)}}},Xt=(p,g,w,T,S=null)=>{const{el:x,type:L,transition:N,children:O,shapeFlag:k}=p;if(k&6){Xt(p.component.subTree,g,w,T);return}if(k&128){p.suspense.move(g,w,T);return}if(k&64){L.move(p,g,w,de);return}if(L===Ge){i(x,g,w);for(let $=0;$<O.length;$++)Xt(O[$],g,w,T);i(p.anchor,g,w);return}if(L===Ua){E(p,g,w);return}if(T!==2&&k&1&&N)if(T===0)N.beforeEnter(x),i(x,g,w),xt(()=>N.enter(x),S);else{const{leave:$,delayLeave:W,afterLeave:J}=N,ae=()=>i(x,g,w),ke=()=>{$(x,()=>{ae(),J&&J()})};W?W(x,ae,ke):ke()}else i(x,g,w)},Rt=(p,g,w,T=!1,S=!1)=>{const{type:x,props:L,ref:N,children:O,dynamicChildren:k,shapeFlag:K,patchFlag:$,dirs:W}=p;if(N!=null&&Yu(N,null,w,p,!0),K&256){g.ctx.deactivate(p);return}const J=K&1&&W,ae=!Fa(p);let ke;if(ae&&(ke=L&&L.onVnodeBeforeUnmount)&&mn(ke,g,p),K&6)C(p.component,w,T);else{if(K&128){p.suspense.unmount(w,T);return}J&&Ai(p,null,g,"beforeUnmount"),K&64?p.type.remove(p,g,w,S,de,T):k&&(x!==Ge||$>0&&$&64)?U(k,g,w,!1,!0):(x===Ge&&$&384||!S&&K&16)&&U(O,g,w),T&&fr(p)}(ae&&(ke=L&&L.onVnodeUnmounted)||J)&&xt(()=>{ke&&mn(ke,g,p),J&&Ai(p,null,g,"unmounted")},w)},fr=p=>{const{type:g,el:w,anchor:T,transition:S}=p;if(g===Ge){sa(w,T);return}if(g===Ua){I(p);return}const x=()=>{r(w),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(p.shapeFlag&1&&S&&!S.persisted){const{leave:L,delayLeave:N}=S,O=()=>L(w,x);N?N(p.el,x,O):O()}else x()},sa=(p,g)=>{let w;for(;p!==g;)w=f(p),r(p),p=w;r(g)},C=(p,g,w)=>{const{bum:T,scope:S,update:x,subTree:L,um:N}=p;T&&Ma(T),S.stop(),x&&(x.active=!1,Rt(L,p,g,w)),N&&xt(N,g),xt(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},U=(p,g,w,T=!1,S=!1,x=0)=>{for(let L=x;L<p.length;L++)Rt(p[L],g,w,T,S)},M=p=>p.shapeFlag&6?M(p.component.subTree):p.shapeFlag&128?p.suspense.next():f(p.anchor||p.el),H=(p,g,w)=>{p==null?g._vnode&&Rt(g._vnode,null,null,!0):y(g._vnode||null,p,g,null,null,null,w),Lp(),I_(),g._vnode=p},de={p:y,um:Rt,m:Xt,r:fr,mt:Ci,mc:ge,pc:Ie,pbc:ft,n:M,o:t};let Ve,se;return e&&([Ve,se]=e(de)),{render:H,hydrate:Ve,createApp:vI(H,Ve)}}function ki({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function B_(t,e,n=!1){const i=t.children,r=e.children;if(ee(i)&&ee(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=si(r[s]),a.el=o.el),n||B_(o,a)),a.type===Xl&&(a.el=o.el)}}function wI(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const TI=t=>t.__isTeleport,Ge=Symbol(void 0),Xl=Symbol(void 0),Gi=Symbol(void 0),Ua=Symbol(void 0),Ms=[];let nn=null;function oe(t=!1){Ms.push(nn=t?null:[])}function II(){Ms.pop(),nn=Ms[Ms.length-1]||null}let to=1;function Kp(t){to+=t}function j_(t){return t.dynamicChildren=to>0?nn||Cr:null,II(),to>0&&nn&&nn.push(t),t}function we(t,e,n,i,r,s){return j_(Te(t,e,n,i,r,s,!0))}function Bn(t,e,n,i,r){return j_(Ye(t,e,n,i,r,!0))}function Qu(t){return t?t.__v_isVNode===!0:!1}function bs(t,e){return t.type===e.type&&t.key===e.key}const Jl="__vInternal",z_=({key:t})=>t??null,Va=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ze(t)||ct(t)||ne(t)?{i:$t,r:t,k:e,f:!!n}:t:null;function Te(t,e=null,n=null,i=0,r=null,s=t===Ge?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&z_(e),ref:e&&Va(e),scopeId:Wl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:$t};return a?(xf(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Ze(n)?8:16),to>0&&!o&&nn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&nn.push(l),l}const Ye=CI;function CI(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===sI)&&(t=Gi),Qu(t)){const a=Ur(t,e,!0);return n&&xf(a,n),to>0&&!s&&nn&&(a.shapeFlag&6?nn[nn.indexOf(t)]=a:nn.push(a)),a.patchFlag|=-2,a}if(LI(t)&&(t=t.__vccOpts),e){e=SI(e);let{class:a,style:l}=e;a&&!Ze(a)&&(e.class=di(a)),Ue(l)&&(p_(l)&&!ee(l)&&(l=kt({},l)),e.style=ko(l))}const o=Ze(t)?1:KT(t)?128:TI(t)?64:Ue(t)?4:ne(t)?2:0;return Te(t,e,n,i,r,o,s,!0)}function SI(t){return t?p_(t)||Jl in t?kt({},t):t:null}function Ur(t,e,n=!1){const{props:i,ref:r,patchFlag:s,children:o}=t,a=e?AI(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&z_(a),ref:e&&e.ref?n&&r?ee(r)?r.concat(Va(e)):[r,Va(e)]:Va(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ge?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ur(t.ssContent),ssFallback:t.ssFallback&&Ur(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Gt(t=" ",e=0){return Ye(Xl,null,t,e)}function bt(t="",e=!1){return e?(oe(),Bn(Gi,null,t)):Ye(Gi,null,t)}function gn(t){return t==null||typeof t=="boolean"?Ye(Gi):ee(t)?Ye(Ge,null,t.slice()):typeof t=="object"?si(t):Ye(Xl,null,String(t))}function si(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ur(t)}function xf(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(ee(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),xf(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Jl in e)?e._ctx=$t:r===3&&$t&&($t.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ne(e)?(e={default:e,_ctx:$t},n=32):(e=String(e),i&64?(n=16,e=[Gt(e)]):n=8);t.children=e,t.shapeFlag|=n}function AI(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=di([e.class,i.class]));else if(r==="style")e.style=ko([e.style,i.style]);else if(Vl(r)){const s=e[r],o=i[r];o&&s!==o&&!(ee(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function mn(t,e,n,i=null){cn(t,e,7,[n,i])}const kI=$_();let RI=0;function NI(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||kI,s={uid:RI++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new t_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:L_(i,r),emitsOptions:S_(i,r),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:i.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=VT.bind(null,s),t.ce&&t.ce(s),s}let ze=null;const Zl=()=>ze||$t,Vr=t=>{ze=t,t.scope.on()},Hi=()=>{ze&&ze.scope.off(),ze=null};function H_(t){return t.vnode.shapeFlag&4}let no=!1;function xI(t,e=!1){no=e;const{props:n,children:i}=t.vnode,r=H_(t);dI(t,n,r,e),gI(t,i);const s=r?OI(t,e):void 0;return no=!1,s}function OI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Tf(new Proxy(t.ctx,aI));const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?PI(t):null;Vr(t),ns();const s=li(i,t,0,[t.props,r]);if(is(),Hi(),Jy(s)){if(s.then(Hi,Hi),e)return s.then(o=>{Wp(t,o,e)}).catch(o=>{Hl(o,t,0)});t.asyncDep=s}else Wp(t,s,e)}else K_(t,e)}function Wp(t,e,n){ne(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ue(e)&&(t.setupState=v_(e)),K_(t,n)}let qp;function K_(t,e,n){const i=t.type;if(!t.render){if(!e&&qp&&!i.render){const r=i.template||Rf(t).template;if(r){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=kt(kt({isCustomElement:s,delimiters:a},o),l);i.render=qp(r,c)}}t.render=i.render||ln}Vr(t),ns(),lI(t),is(),Hi()}function DI(t){return new Proxy(t.attrs,{get(e,n){return Mt(t,"get","$attrs"),e[n]}})}function PI(t){const e=i=>{t.exposed=i||{}};let n;return{get attrs(){return n||(n=DI(t))},slots:t.slots,emit:t.emit,expose:e}}function ec(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(v_(Tf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ps)return Ps[n](t)},has(e,n){return n in e||n in Ps}}))}function MI(t,e=!0){return ne(t)?t.displayName||t.name:t.name||e&&t.__name}function LI(t){return ne(t)&&"__vccOpts"in t}const ie=(t,e)=>DT(t,e,no);function tc(t,e,n){const i=arguments.length;return i===2?Ue(e)&&!ee(e)?Qu(e)?Ye(t,null,[e]):Ye(t,e):Ye(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Qu(n)&&(n=[n]),Ye(t,e,n))}const W_=Symbol(""),FI=()=>Bt(W_),UI="3.2.47",VI="http://www.w3.org/2000/svg",Di=typeof document<"u"?document:null,Gp=Di&&Di.createElement("template"),$I={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e?Di.createElementNS(VI,t):Di.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Di.createTextNode(t),createComment:t=>Di.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Di.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Gp.innerHTML=i?`<svg>${t}</svg>`:t;const a=Gp.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function BI(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function jI(t,e,n){const i=t.style,r=Ze(n);if(n&&!r){if(e&&!Ze(e))for(const s in e)n[s]==null&&Xu(i,s,"");for(const s in n)Xu(i,s,n[s])}else{const s=i.display;r?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=s)}}const Yp=/\s*!important$/;function Xu(t,e,n){if(ee(n))n.forEach(i=>Xu(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=zI(t,e);Yp.test(n)?t.setProperty(ts(i),n.replace(Yp,""),"important"):t[i]=n}}const Qp=["Webkit","Moz","ms"],tu={};function zI(t,e){const n=tu[e];if(n)return n;let i=Cn(e);if(i!=="filter"&&i in t)return tu[e]=i;i=jl(i);for(let r=0;r<Qp.length;r++){const s=Qp[r]+i;if(s in t)return tu[e]=s}return e}const Xp="http://www.w3.org/1999/xlink";function HI(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Xp,e.slice(6,e.length)):t.setAttributeNS(Xp,e,n);else{const s=Ww(e);n==null||s&&!Yy(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function KI(t,e,n,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Yy(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function gr(t,e,n,i){t.addEventListener(e,n,i)}function WI(t,e,n,i){t.removeEventListener(e,n,i)}function qI(t,e,n,i,r=null){const s=t._vei||(t._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=GI(e);if(i){const c=s[e]=XI(i,r);gr(t,a,c,l)}else o&&(WI(t,a,o,l),s[e]=void 0)}}const Jp=/(?:Once|Passive|Capture)$/;function GI(t){let e;if(Jp.test(t)){e={};let i;for(;i=t.match(Jp);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ts(t.slice(2)),e]}let nu=0;const YI=Promise.resolve(),QI=()=>nu||(YI.then(()=>nu=0),nu=Date.now());function XI(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;cn(JI(i,n.value),e,5,[i])};return n.value=t,n.attached=QI(),n}function JI(t,e){if(ee(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Zp=/^on[a-z]/,ZI=(t,e,n,i,r=!1,s,o,a,l)=>{e==="class"?BI(t,i,r):e==="style"?jI(t,n,i):Vl(e)?df(e)||qI(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):e1(t,e,i,r))?KI(t,e,i,s,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),HI(t,e,i,r))};function e1(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&Zp.test(e)&&ne(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Zp.test(e)&&Ze(n)?!1:e in t}function Of(t){const e=Zl();if(!e)return;const n=e.ut=(r=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(s=>Zu(s,r))},i=()=>{const r=t(e.proxy);Ju(e.subTree,r),n(r)};qT(i),N_(()=>{const r=new MutationObserver(i);r.observe(e.subTree.el.parentNode,{childList:!0}),kf(()=>r.disconnect())})}function Ju(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Ju(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)Zu(t.el,e);else if(t.type===Ge)t.children.forEach(n=>Ju(n,e));else if(t.type===Ua){let{el:n,anchor:i}=t;for(;n&&(Zu(n,e),n!==i);)n=n.nextSibling}}function Zu(t,e){if(t.nodeType===1){const n=t.style;for(const i in e)n.setProperty(`--${i}`,e[i])}}const em=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ee(e)?n=>Ma(e,n):e};function t1(t){t.target.composing=!0}function tm(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const nc={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t._assign=em(r);const s=i||r.props&&r.props.type==="number";gr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=Vu(a)),t._assign(a)}),n&&gr(t,"change",()=>{t.value=t.value.trim()}),e||(gr(t,"compositionstart",t1),gr(t,"compositionend",tm),gr(t,"change",tm))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:r}},s){if(t._assign=em(s),t.composing||document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===e||(r||t.type==="number")&&Vu(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},n1=["ctrl","shift","alt","meta"],i1={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>n1.some(n=>t[`${n}Key`]&&!e.includes(n))},rs=(t,e)=>(n,...i)=>{for(let r=0;r<e.length;r++){const s=i1[e[r]];if(s&&s(n,e))return}return t(n,...i)},r1=kt({patchProp:ZI},$I);let nm;function s1(){return nm||(nm=bI(r1))}const o1=(...t)=>{const e=s1().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=a1(i);if(!r)return;const s=e._component;!ne(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function a1(t){return Ze(t)?document.querySelector(t):t}var l1=!1;/*!
  * pinia v2.0.35
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const c1=Symbol();var im;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(im||(im={}));function u1(){const t=eT(!0),e=t.run(()=>Dt({}));let n=[],i=[];const r=Tf({install(s){r._a=s,s.provide(c1,r),s.config.globalProperties.$pinia=r,i.forEach(o=>n.push(o)),i=[]},use(s){return!this._a&&!l1?i.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D=function(t,e){if(!t)throw ss(e)},ss=function(t){return new Error("Firebase Database ("+q_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},h1=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ic={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(f=64)),i.push(n[u],n[h],n[f],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(G_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):h1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||c==null||h==null)throw new f1;const f=s<<2|a>>4;if(i.push(f),c!==64){const d=a<<4&240|c>>2;if(i.push(d),h!==64){const m=c<<6&192|h;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class f1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Y_=function(t){const e=G_(t);return ic.encodeByteArray(e,!0)},Xa=function(t){return Y_(t).replace(/\./g,"")},Ja=function(t){try{return ic.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d1(t){return Q_(void 0,t)}function Q_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!p1(n)||(t[n]=Q_(t[n],e[n]));return t}function p1(t){return t!=="__proto__"}/**
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
 */function m1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const g1=()=>m1().__FIREBASE_DEFAULTS__,y1=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},_1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ja(t[1]);return e&&JSON.parse(e)},Df=()=>{try{return g1()||y1()||_1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},v1=t=>{var e,n;return(n=(e=Df())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},b1=t=>{const e=v1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},E1=()=>{var t;return(t=Df())===null||t===void 0?void 0:t.config},w1=t=>{var e;return(e=Df())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function T1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Xa(JSON.stringify(n)),Xa(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Sn())}function I1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function X_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function J_(){return q_.NODE_ADMIN===!0}function Z_(){try{return typeof indexedDB=="object"}catch{return!1}}function C1(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S1="FirebaseError";class Qn extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=S1,Object.setPrototypeOf(this,Qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,os.prototype.create)}}class os{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?A1(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Qn(r,a,i)}}function A1(t,e){return t.replace(k1,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const k1=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ev=function(t){let e={},n={},i={},r="";try{const s=t.split(".");e=ro(Ja(s[0])||""),n=ro(Ja(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:r}},R1=function(t){const e=ev(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},N1=function(t){const e=ev(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function $r(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function rm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Za(t,e,n){const i={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=e.call(n,t[r],r,t));return i}function eh(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(sm(s)&&sm(o)){if(!eh(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function sm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class x1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)i[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(f<<1|f>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):h<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const f=(r<<5|r>>>27)+c+l+u+i[h]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=r,r=f}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<n;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}}function O1(t,e){const n=new D1(t,e);return n.subscribe.bind(n)}class D1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");P1(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=iu),r.error===void 0&&(r.error=iu),r.complete===void 0&&(r.complete=iu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function P1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function iu(){}function M1(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,D(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},rc=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Lt(t){return t&&t._delegate?t._delegate:t}class hn{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ni="[DEFAULT]";/**
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
 */class F1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new io;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(V1(e))try{this.getOrInitializeService({instanceIdentifier:Ni})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=Ni){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ni){return this.instances.has(e)}getOptions(e=Ni){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:U1(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ni){return this.component?this.component.multipleInstances?e:Ni:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function U1(t){return t===Ni?void 0:t}function V1(t){return t.instantiationMode==="EAGER"}/**
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
 */class $1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new F1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const B1={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},j1=me.INFO,z1={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},H1=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=z1[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Oo{constructor(e){this.name=e,this._logLevel=j1,this._logHandler=H1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?B1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const K1=(t,e)=>e.some(n=>t instanceof n);let om,am;function W1(){return om||(om=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function q1(){return am||(am=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tv=new WeakMap,th=new WeakMap,nv=new WeakMap,ru=new WeakMap,Lf=new WeakMap;function G1(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ci(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&tv.set(n,t)}).catch(()=>{}),Lf.set(e,t),e}function Y1(t){if(th.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});th.set(t,e)}let nh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return th.get(t);if(e==="objectStoreNames")return t.objectStoreNames||nv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ci(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Q1(t){nh=t(nh)}function X1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(su(this),e,...n);return nv.set(i,e.sort?e.sort():[e]),ci(i)}:q1().includes(t)?function(...e){return t.apply(su(this),e),ci(tv.get(this))}:function(...e){return ci(t.apply(su(this),e))}}function J1(t){return typeof t=="function"?X1(t):(t instanceof IDBTransaction&&Y1(t),K1(t,W1())?new Proxy(t,nh):t)}function ci(t){if(t instanceof IDBRequest)return G1(t);if(ru.has(t))return ru.get(t);const e=J1(t);return e!==t&&(ru.set(t,e),Lf.set(e,t)),e}const su=t=>Lf.get(t);function Z1(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=ci(o);return i&&o.addEventListener("upgradeneeded",l=>{i(ci(o.result),l.oldVersion,l.newVersion,ci(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const eC=["get","getKey","getAll","getAllKeys","count"],tC=["put","add","delete","clear"],ou=new Map;function lm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ou.get(e))return ou.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=tC.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||eC.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return ou.set(e,s),s}Q1(t=>({...t,get:(e,n,i)=>lm(e,n)||t.get(e,n,i),has:(e,n)=>!!lm(e,n)||t.has(e,n)}));/**
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
 */class nC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(iC(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function iC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ih="@firebase/app",cm="0.9.8";/**
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
 */const Yi=new Oo("@firebase/app"),rC="@firebase/app-compat",sC="@firebase/analytics-compat",oC="@firebase/analytics",aC="@firebase/app-check-compat",lC="@firebase/app-check",cC="@firebase/auth",uC="@firebase/auth-compat",hC="@firebase/database",fC="@firebase/database-compat",dC="@firebase/functions",pC="@firebase/functions-compat",mC="@firebase/installations",gC="@firebase/installations-compat",yC="@firebase/messaging",_C="@firebase/messaging-compat",vC="@firebase/performance",bC="@firebase/performance-compat",EC="@firebase/remote-config",wC="@firebase/remote-config-compat",TC="@firebase/storage",IC="@firebase/storage-compat",CC="@firebase/firestore",SC="@firebase/firestore-compat",AC="firebase",kC="9.20.0";/**
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
 */const rh="[DEFAULT]",RC={[ih]:"fire-core",[rC]:"fire-core-compat",[oC]:"fire-analytics",[sC]:"fire-analytics-compat",[lC]:"fire-app-check",[aC]:"fire-app-check-compat",[cC]:"fire-auth",[uC]:"fire-auth-compat",[hC]:"fire-rtdb",[fC]:"fire-rtdb-compat",[dC]:"fire-fn",[pC]:"fire-fn-compat",[mC]:"fire-iid",[gC]:"fire-iid-compat",[yC]:"fire-fcm",[_C]:"fire-fcm-compat",[vC]:"fire-perf",[bC]:"fire-perf-compat",[EC]:"fire-rc",[wC]:"fire-rc-compat",[TC]:"fire-gcs",[IC]:"fire-gcs-compat",[CC]:"fire-fst",[SC]:"fire-fst-compat","fire-js":"fire-js",[AC]:"fire-js-all"};/**
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
 */const el=new Map,sh=new Map;function NC(t,e){try{t.container.addComponent(e)}catch(n){Yi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function An(t){const e=t.name;if(sh.has(e))return Yi.debug(`There were multiple attempts to register component ${e}.`),!1;sh.set(e,t);for(const n of el.values())NC(n,t);return!0}function xC(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const OC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ui=new os("app","Firebase",OC);/**
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
 */class DC{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ui.create("app-deleted",{appName:this._name})}}/**
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
 */const as=kC;function iv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:rh,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw ui.create("bad-app-name",{appName:String(r)});if(n||(n=E1()),!n)throw ui.create("no-options");const s=el.get(r);if(s){if(eh(n,s.options)&&eh(i,s.config))return s;throw ui.create("duplicate-app",{appName:r})}const o=new $1(r);for(const l of sh.values())o.addComponent(l);const a=new DC(n,i,o);return el.set(r,a),a}function rv(t=rh){const e=el.get(t);if(!e&&t===rh)return iv();if(!e)throw ui.create("no-app",{appName:t});return e}function jt(t,e,n){var i;let r=(i=RC[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Yi.warn(a.join(" "));return}An(new hn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const PC="firebase-heartbeat-database",MC=1,so="firebase-heartbeat-store";let au=null;function sv(){return au||(au=Z1(PC,MC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(so)}}}).catch(t=>{throw ui.create("idb-open",{originalErrorMessage:t.message})})),au}async function LC(t){try{return(await sv()).transaction(so).objectStore(so).get(ov(t))}catch(e){if(e instanceof Qn)Yi.warn(e.message);else{const n=ui.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Yi.warn(n.message)}}}async function um(t,e){try{const i=(await sv()).transaction(so,"readwrite");return await i.objectStore(so).put(e,ov(t)),i.done}catch(n){if(n instanceof Qn)Yi.warn(n.message);else{const i=ui.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Yi.warn(i.message)}}}function ov(t){return`${t.name}!${t.options.appId}`}/**
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
 */const FC=1024,UC=30*24*60*60*1e3;class VC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new BC(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=hm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=UC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=hm(),{heartbeatsToSend:n,unsentEntries:i}=$C(this._heartbeatsCache.heartbeats),r=Xa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function hm(){return new Date().toISOString().substring(0,10)}function $C(t,e=FC){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),fm(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),fm(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class BC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Z_()?C1().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await LC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return um(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return um(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function fm(t){return Xa(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function jC(t){An(new hn("platform-logger",e=>new nC(e),"PRIVATE")),An(new hn("heartbeat",e=>new VC(e),"PRIVATE")),jt(ih,cm,t),jt(ih,cm,"esm2017"),jt("fire-js","")}jC("");function av(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function lv(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zC=lv,cv=new os("auth","Firebase",lv());/**
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
 */const tl=new Oo("@firebase/auth");function HC(t,...e){tl.logLevel<=me.WARN&&tl.warn(`Auth (${as}): ${t}`,...e)}function $a(t,...e){tl.logLevel<=me.ERROR&&tl.error(`Auth (${as}): ${t}`,...e)}/**
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
 */function dm(t,...e){throw Uf(t,...e)}function Ff(t,...e){return Uf(t,...e)}function KC(t,e,n){const i=Object.assign(Object.assign({},zC()),{[e]:n});return new os("auth","Firebase",i).create(e,{appName:t.name})}function Uf(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return cv.create(t,...e)}function ve(t,e,...n){if(!t)throw Uf(e,...n)}function Ls(t){const e="INTERNAL ASSERTION FAILED: "+t;throw $a(e),new Error(e)}function nl(t,e){t||Ls(e)}function WC(){return pm()==="http:"||pm()==="https:"}function pm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function qC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(WC()||I1()||"connection"in navigator)?navigator.onLine:!0}function GC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Do{constructor(e,n){this.shortDelay=e,this.longDelay=n,nl(n>e,"Short delay should be less than long delay!"),this.isMobile=Pf()||X_()}get(){return qC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function YC(t,e){nl(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class uv{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ls("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ls("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ls("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const QC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const XC=new Do(3e4,6e4);function JC(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Vf(t,e,n,i,r={}){return hv(t,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=Mf(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),uv.fetch()(fv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function hv(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},QC),e);try{const r=new ZC(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw fa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw fa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw fa(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw fa(t,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw KC(t,u,c);dm(t,u)}}catch(r){if(r instanceof Qn)throw r;dm(t,"network-request-failed",{message:String(r)})}}function fv(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?YC(t.config,r):`${t.config.apiScheme}://${r}`}class ZC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Ff(this.auth,"network-request-failed")),XC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function fa(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=Ff(t,e,i);return r.customData._tokenResponse=n,r}/**
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
 */async function eS(t,e){return Vf(t,"POST","/v1/accounts:delete",e)}async function tS(t,e){return Vf(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Fs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nS(t,e=!1){const n=Lt(t),i=await n.getIdToken(e),r=dv(i);ve(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Fs(lu(r.auth_time)),issuedAtTime:Fs(lu(r.iat)),expirationTime:Fs(lu(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function lu(t){return Number(t)*1e3}function dv(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return $a("JWT malformed, contained fewer than 3 sections"),null;try{const r=Ja(n);return r?JSON.parse(r):($a("Failed to decode base64 JWT payload"),null)}catch(r){return $a("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function iS(t){const e=dv(t);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function oh(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Qn&&rS(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function rS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class sS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class pv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fs(this.lastLoginAt),this.creationTime=Fs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function il(t){var e;const n=t.auth,i=await t.getIdToken(),r=await oh(t,tS(n,{idToken:i}));ve(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?lS(s.providerUserInfo):[],a=aS(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new pv(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function oS(t){const e=Lt(t);await il(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function aS(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function lS(t){return t.map(e=>{var{providerId:n}=e,i=av(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function cS(t,e){const n=await hv(t,{},async()=>{const i=Mf({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=fv(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",uv.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class oo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):iS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ve(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await cS(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new oo;return i&&(ve(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(ve(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(ve(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new oo,this.toJSON())}_performRefresh(){return Ls("not implemented")}}/**
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
 */function ni(t,e){ve(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Nr{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=av(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new pv(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await oh(this,this.stsTokenManager.getToken(this.auth,e));return ve(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return nS(this,e)}reload(){return oS(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Nr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await il(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await oh(this,eS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,a,l,c,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,d=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,_=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:E,emailVerified:I,isAnonymous:F,providerData:Q,stsTokenManager:re}=n;ve(E&&re,e,"internal-error");const ge=oo.fromJSON(this.name,re);ve(typeof E=="string",e,"internal-error"),ni(h,e.name),ni(f,e.name),ve(typeof I=="boolean",e,"internal-error"),ve(typeof F=="boolean",e,"internal-error"),ni(d,e.name),ni(m,e.name),ni(y,e.name),ni(b,e.name),ni(_,e.name),ni(v,e.name);const je=new Nr({uid:E,auth:e,email:f,emailVerified:I,displayName:h,isAnonymous:F,photoURL:m,phoneNumber:d,tenantId:y,stsTokenManager:ge,createdAt:_,lastLoginAt:v});return Q&&Array.isArray(Q)&&(je.providerData=Q.map(ft=>Object.assign({},ft))),b&&(je._redirectEventId=b),je}static async _fromIdTokenResponse(e,n,i=!1){const r=new oo;r.updateFromServerResponse(n);const s=new Nr({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await il(s),s}}/**
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
 */const mm=new Map;function Li(t){nl(t instanceof Function,"Expected a class definition");let e=mm.get(t);return e?(nl(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,mm.set(t,e),e)}/**
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
 */class mv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}mv.type="NONE";const gm=mv;/**
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
 */function cu(t,e,n){return`firebase:${t}:${e}:${n}`}class xr{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=cu(this.userKey,r.apiKey,s),this.fullPersistenceKey=cu("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Nr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new xr(Li(gm),e,i);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||Li(gm);const o=cu(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Nr._fromJSON(e,u);c!==s&&(a=h),s=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new xr(s,e,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new xr(s,e,i))}}/**
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
 */function ym(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(uS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mS(e))return"Blackberry";if(gS(e))return"Webos";if(hS(e))return"Safari";if((e.includes("chrome/")||fS(e))&&!e.includes("edge/"))return"Chrome";if(pS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function uS(t=Sn()){return/firefox\//i.test(t)}function hS(t=Sn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fS(t=Sn()){return/crios\//i.test(t)}function dS(t=Sn()){return/iemobile/i.test(t)}function pS(t=Sn()){return/android/i.test(t)}function mS(t=Sn()){return/blackberry/i.test(t)}function gS(t=Sn()){return/webos/i.test(t)}/**
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
 */function gv(t,e=[]){let n;switch(t){case"Browser":n=ym(Sn());break;case"Worker":n=`${ym(Sn())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${as}/${i}`}async function yv(t,e){return Vf(t,"GET","/v2/recaptchaConfig",JC(t,e))}function _m(t){return t!==void 0&&t.enterprise!==void 0}class _v{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function yS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function _S(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=Ff("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",yS().appendChild(i)})}const vS="https://www.google.com/recaptcha/enterprise.js?render=",bS="recaptcha-enterprise";class ES{constructor(e){this.type=bS,this.auth=vv(e)}async verify(e="verify",n=!1){async function i(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{yv(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new _v(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function r(s,o,a){const l=window.grecaptcha;_m(l)?l.enterprise.ready(()=>{try{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(c=>{a(c)})}catch(c){a(c)}}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{i(this.auth).then(a=>{if(!n&&_m(window.grecaptcha))r(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}_S(vS+a).then(()=>{r(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class wS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */class TS{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vm(this),this.idTokenSubscription=new vm(this),this.beforeStateQueue=new wS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Li(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await xr.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await il(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=GC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Lt(e):null;return n&&ve(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Li(e))})}async initializeRecaptchaConfig(){const e=await yv(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new _v(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new ES(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new os("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Li(e)||this._popupRedirectResolver;ve(n,this,"argument-error"),this.redirectPersistenceManager=await xr.create(this,[Li(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ve(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,i,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&HC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function vv(t){return Lt(t)}class vm{constructor(e){this.auth=e,this.observer=null,this.addObserver=O1(n=>this.observer=n)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function IS(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Li);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}new Do(3e4,6e4);/**
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
 */new Do(2e3,1e4);/**
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
 */new Do(3e4,6e4);/**
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
 */new Do(5e3,15e3);var bm="@firebase/auth",Em="0.23.0";/**
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
 */class CS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function SS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function AS(t){An(new hn("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;ve(o&&!o.includes(":"),"invalid-api-key",{appName:i.name}),ve(!(a!=null&&a.includes(":")),"argument-error",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gv(t)},c=new TS(i,r,s,l);return IS(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),An(new hn("auth-internal",e=>{const n=vv(e.getProvider("auth").getImmediate());return(i=>new CS(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),jt(bm,Em,SS(t)),jt(bm,Em,"esm2017")}/**
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
 */const kS=5*60;w1("authIdTokenMaxAge");AS("Browser");/**
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
 */const RS=new Map,NS={activated:!1,tokenObservers:[]};function kn(t){return RS.get(t)||Object.assign({},NS)}const wm={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class xS{constructor(e,n,i,r,s){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=r,this.upperBound=s,this.pending=null,this.nextErrorWaitInterval=r,r>s)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new io,await OS(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new io,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function OS(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const DS={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},rl=new os("appCheck","AppCheck",DS);function PS(t){if(!kn(t).activated)throw rl.create("use-before-activation",{appName:t.name})}/**
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
 */const MS="firebase-app-check-database",LS=1,ah="firebase-app-check-store";let da=null;function FS(){return da||(da=new Promise((t,e)=>{try{const n=indexedDB.open(MS,LS);n.onsuccess=i=>{t(i.target.result)},n.onerror=i=>{var r;e(rl.create("storage-open",{originalErrorMessage:(r=i.target.error)===null||r===void 0?void 0:r.message}))},n.onupgradeneeded=i=>{const r=i.target.result;switch(i.oldVersion){case 0:r.createObjectStore(ah,{keyPath:"compositeKey"})}}}catch(n){e(rl.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),da)}function US(t,e){return VS($S(t),e)}async function VS(t,e){const i=(await FS()).transaction(ah,"readwrite"),s=i.objectStore(ah).put({compositeKey:t,value:e});return new Promise((o,a)=>{s.onsuccess=l=>{o()},i.onerror=l=>{var c;a(rl.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function $S(t){return`${t.options.appId}-${t.name}`}/**
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
 */const lh=new Oo("@firebase/app-check");function Tm(t,e){return Z_()?US(t,e).catch(n=>{lh.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const BS={error:"UNKNOWN_ERROR"};function jS(t){return ic.encodeString(JSON.stringify(t),!1)}async function ch(t,e=!1){const n=t.app;PS(n);const i=kn(n);let r=i.token,s;if(r&&!ks(r)&&(i.token=void 0,r=void 0),!r){const l=await i.cachedTokenPromise;l&&(ks(l)?r=l:await Tm(n,void 0))}if(!e&&r&&ks(r))return{token:r.token};let o=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),r=await kn(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?lh.warn(l.message):lh.error(l),s=l}let a;return r?s?ks(r)?a={token:r.token,internalError:s}:a=Cm(s):(a={token:r.token},i.token=r,await Tm(n,r)):a=Cm(s),o&&KS(n,a),a}function zS(t,e,n,i){const{app:r}=t,s=kn(r),o={next:n,error:i,type:e};if(s.tokenObservers=[...s.tokenObservers,o],s.token&&ks(s.token)){const a=s.token;Promise.resolve().then(()=>{n({token:a.token}),Im(t)}).catch(()=>{})}s.cachedTokenPromise.then(()=>Im(t))}function bv(t,e){const n=kn(t),i=n.tokenObservers.filter(r=>r.next!==e);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function Im(t){const{app:e}=t,n=kn(e);let i=n.tokenRefresher;i||(i=HS(t),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function HS(t){const{app:e}=t;return new xS(async()=>{const n=kn(e);let i;if(n.token?i=await ch(t,!0):i=await ch(t),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=kn(e);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const r=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,r),Math.max(0,i-Date.now())}else return 0},wm.RETRIAL_MIN_WAIT,wm.RETRIAL_MAX_WAIT)}function KS(t,e){const n=kn(t).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function ks(t){return t.expireTimeMillis-Date.now()>0}function Cm(t){return{token:jS(BS),error:t}}/**
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
 */class WS{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=kn(this.app);for(const n of e)bv(this.app,n.next);return Promise.resolve()}}function qS(t,e){return new WS(t,e)}function GS(t){return{getToken:e=>ch(t,e),addTokenListener:e=>zS(t,"INTERNAL",e),removeTokenListener:e=>bv(t.app,e)}}const YS="@firebase/app-check",QS="0.6.5",XS="app-check",Sm="app-check-internal";function JS(){An(new hn(XS,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return qS(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Sm).initialize()})),An(new hn(Sm,t=>{const e=t.getProvider("app-check").getImmediate();return GS(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),jt(YS,QS)}JS();var ZS="firebase",eA="9.20.0";/**
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
 */jt(ZS,eA,"app");const Ev=Symbol("firebaseApp");function $f(t){return Zl()&&Bt(Ev,null)||rv(t)}const bn=()=>{};function Bf(t,e){return e.split(".").reduce((n,i)=>n&&n[i],t)}function tA(t,e,n){const i=(""+e).split("."),r=i.pop(),s=i.reduce((o,a)=>o&&o[a],t);if(s!=null)return Array.isArray(s)?s.splice(Number(r),1,n):s[r]=n}function rr(t){return!!t&&typeof t=="object"}const nA=Object.prototype;function iA(t){return rr(t)&&Object.getPrototypeOf(t)===nA}function jf(t){return rr(t)&&t.type==="document"}function wv(t){return rr(t)&&t.type==="collection"}function rA(t){return jf(t)||wv(t)}function sA(t){return rr(t)&&t.type==="query"}function oA(t){return rr(t)&&"ref"in t}function aA(t){return rr(t)&&typeof t.bucket=="string"}function lA(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}function cA(){return!!(Zl()&&Bt(W_,null))}const Am="@firebase/database",km="0.14.4";/**
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
 */let Tv="";function uA(t){Tv=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),lt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ro(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Xn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new hA(e)}}catch{}return new fA},Fi=Iv("localStorage"),uh=Iv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new Oo("@firebase/database"),dA=function(){let t=1;return function(){return t++}}(),Cv=function(t){const e=L1(t),n=new x1;n.update(e);const i=n.digest();return ic.encodeByteArray(i)},Po=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Po.apply(null,i):typeof i=="object"?e+=lt(i):e+=i,e+=" "}return e};let Ki=null,Rm=!0;const pA=function(t,e){D(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Or.logLevel=me.VERBOSE,Ki=Or.log.bind(Or),e&&uh.set("logging_enabled",!0)):typeof t=="function"?Ki=t:(Ki=null,uh.remove("logging_enabled"))},mt=function(...t){if(Rm===!0&&(Rm=!1,Ki===null&&uh.get("logging_enabled")===!0&&pA(!0)),Ki){const e=Po.apply(null,t);Ki(e)}},Mo=function(t){return function(...e){mt(t,...e)}},hh=function(...t){const e="FIREBASE INTERNAL ERROR: "+Po(...t);Or.error(e)},Qi=function(...t){const e=`FIREBASE FATAL ERROR: ${Po(...t)}`;throw Or.error(e),new Error(e)},zt=function(...t){const e="FIREBASE WARNING: "+Po(...t);Or.warn(e)},mA=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&zt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Sv=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},gA=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Br="[MIN_NAME]",Xi="[MAX_NAME]",ls=function(t,e){if(t===e)return 0;if(t===Br||e===Xi)return-1;if(e===Br||t===Xi)return 1;{const n=Nm(t),i=Nm(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},yA=function(t,e){return t===e?0:t<e?-1:1},Es=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+lt(e))},zf=function(t){if(typeof t!="object"||t===null)return lt(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=lt(e[i]),n+=":",n+=zf(t[e[i]]);return n+="}",n},Av=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let r=0;r<n;r+=e)r+e>n?i.push(t.substring(r,n)):i.push(t.substring(r,r+e));return i};function Yt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const kv=function(t){D(!Sv(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let r,s,o,a,l;t===0?(s=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),s=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(r?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},_A=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},vA=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},bA=new RegExp("^-?(0*)\\d{1,10}$"),EA=-2147483648,wA=2147483647,Nm=function(t){if(bA.test(t)){const e=Number(t);if(e>=EA&&e<=wA)return e}return null},Lo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw zt("Exception was thrown by user callback.",n),e},Math.floor(0))}},TA=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Us=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class IA{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){zt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(mt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',zt(e)}}class fh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}fh.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf="5",Rv="v",Nv="s",xv="r",Ov="f",Dv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Pv="ls",Mv="p",dh="ac",Lv="websocket",Fv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e,n,i,r,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Fi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Fi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function AA(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Uv(t,e,n){D(typeof e=="string","typeof type must == string"),D(typeof n=="object","typeof params must == object");let i;if(e===Lv)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Fv)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);AA(t)&&(n.ns=t.namespace);const r=[];return Yt(n,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(){this.counters_={}}incrementCounter(e,n=1){Xn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return d1(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu={},hu={};function Kf(t){const e=t.toString();return uu[e]||(uu[e]=new kA),uu[e]}function RA(t,e){const n=t.toString();return hu[n]||(hu[n]=e()),hu[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&Lo(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm="start",xA="close",OA="pLPCommand",DA="pRTLPCB",Vv="id",$v="pw",Bv="ser",PA="cb",MA="seg",LA="ts",FA="d",UA="dframe",jv=1870,zv=30,VA=jv-zv,$A=25e3,BA=3e4;class br{constructor(e,n,i,r,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Mo(e),this.stats_=Kf(n),this.urlFn=l=>(this.appCheckToken&&(l[dh]=this.appCheckToken),Uv(n,Fv,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new NA(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(BA)),gA(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Wf((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===xm)this.id=a,this.password=l;else if(o===xA)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[xm]="t",i[Bv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[PA]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Rv]=Hf,this.transportSessionId&&(i[Nv]=this.transportSessionId),this.lastSessionId&&(i[Pv]=this.lastSessionId),this.applicationId&&(i[Mv]=this.applicationId),this.appCheckToken&&(i[dh]=this.appCheckToken),typeof location<"u"&&location.hostname&&Dv.test(location.hostname)&&(i[xv]=Ov);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){br.forceAllow_=!0}static forceDisallow(){br.forceDisallow_=!0}static isAvailable(){return br.forceAllow_?!0:!br.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!_A()&&!vA()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=lt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Y_(n),r=Av(i,VA);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[UA]="t",i[Vv]=e,i[$v]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=lt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Wf{constructor(e,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=dA(),window[OA+this.uniqueCallbackIdentifier]=e,window[DA+this.uniqueCallbackIdentifier]=n,this.myIFrame=Wf.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){mt("frame writing exception"),a.stack&&mt(a.stack),mt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||mt("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Vv]=this.myID,e[$v]=this.myPW,e[Bv]=this.currentSerial;let n=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+zv+i.length<=jv;){const o=this.pendingSegs.shift();i=i+"&"+MA+r+"="+o.seg+"&"+LA+r+"="+o.ts+"&"+FA+r+"="+o.d,r++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(i,Math.floor($A)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{mt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA=16384,zA=45e3;let sl=null;typeof MozWebSocket<"u"?sl=MozWebSocket:typeof WebSocket<"u"&&(sl=WebSocket);class en{constructor(e,n,i,r,s,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Mo(this.connId),this.stats_=Kf(n),this.connURL=en.connectionURL_(n,o,a,r,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,r,s){const o={};return o[Rv]=Hf,typeof location<"u"&&location.hostname&&Dv.test(location.hostname)&&(o[xv]=Ov),n&&(o[Nv]=n),i&&(o[Pv]=i),r&&(o[dh]=r),s&&(o[Mv]=s),Uv(e,Lv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Fi.set("previous_websocket_failure",!0);try{let i;J_(),this.mySock=new sl(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){en.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&sl!==null&&!en.forceDisallow_}static previouslyFailed(){return Fi.isInMemoryStorage||Fi.get("previous_websocket_failure")===!0}markConnectionHealthy(){Fi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=ro(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(D(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=lt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Av(n,jA);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(zA))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}en.responsesRequiredToBeHealthy=2;en.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[br,en]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=en&&en.isAvailable();let i=n&&!en.previouslyFailed();if(e.webSocketOnly&&(n||zt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[en];else{const r=this.transports_=[];for(const s of ao.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);ao.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ao.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HA=6e4,KA=5e3,WA=10*1024,qA=100*1024,fu="t",Om="d",GA="s",Dm="r",YA="e",Pm="o",Mm="a",Lm="n",Fm="p",QA="h";class XA{constructor(e,n,i,r,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Mo("c:"+this.id+":"),this.transportManager_=new ao(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Us(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>qA?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>WA?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(fu in e){const n=e[fu];n===Mm?this.upgradeIfSecondaryHealthy_():n===Dm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Pm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Es("t",e),i=Es("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Fm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Mm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Lm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Es("t",e),i=Es("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Es(fu,e);if(Om in e){const i=e[Om];if(n===QA){const r=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===Lm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===GA?this.onConnectionShutdown_(i):n===Dm?this.onReset_(i):n===YA?hh("Server Error: "+i):n===Pm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):hh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Hf!==i&&zt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Us(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(HA))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Us(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(KA))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Fm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Fi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{put(e,n,i,r){}merge(e,n,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(e){this.allowedEvents_=e,this.listeners_={},D(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const r=this.getInitialEvent(e);r&&n.apply(i,r)}off(e,n,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===n&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(e){D(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol extends Kv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Pf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ol}getInitialEvent(e){return D(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um=32,Vm=768;class Me{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Se(){return new Me("")}function he(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function mi(t){return t.pieces_.length-t.pieceNum_}function xe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Me(t.pieces_,e)}function Wv(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function JA(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function qv(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Gv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Me(e,0)}function st(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof Me)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new Me(n,0)}function ce(t){return t.pieceNum_>=t.pieces_.length}function qt(t,e){const n=he(t),i=he(e);if(n===null)return e;if(n===i)return qt(xe(t),xe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Yv(t,e){if(mi(t)!==mi(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function rn(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(mi(t)>mi(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class ZA{constructor(e,n){this.errorPrefix_=n,this.parts_=qv(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=rc(this.parts_[i]);Qv(this)}}function ek(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=rc(e),Qv(t)}function tk(t){const e=t.parts_.pop();t.byteLength_-=rc(e),t.parts_.length>0&&(t.byteLength_-=1)}function Qv(t){if(t.byteLength_>Vm)throw new Error(t.errorPrefix_+"has a key path longer than "+Vm+" bytes ("+t.byteLength_+").");if(t.parts_.length>Um)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Um+") or object contains a cycle "+xi(t))}function xi(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf extends Kv{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new qf}getInitialEvent(e){return D(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=1e3,nk=60*5*1e3,$m=30*1e3,ik=1.3,rk=3e4,sk="server_kill",Bm=3;class Fn extends Hv{constructor(e,n,i,r,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Fn.nextPersistentConnectionId_++,this.log_=Mo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ws,this.maxReconnectDelay_=nk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!J_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");qf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ol.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const r=++this.requestNumber_,s={r,a:e,b:n};this.log_(lt(s)),D(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const n=new io,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,i,r){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),D(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:i};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;Fn.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Xn(e,"w")){const i=$r(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();zt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||N1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=$m)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=R1(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,n)}sendUnlisten_(e,n,i,r){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,r){const s={p:n,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,i,r){this.putInternal("p",e,n,i,r)}merge(e,n,i,r){this.putInternal("m",e,n,i,r)}putInternal(e,n,i,r,s){this.initConnection_();const o={p:n,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+lt(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):hh("Unrecognized action received from server: "+lt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){D(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ws,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ws,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>rk&&(this.reconnectDelay_=ws),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*ik)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Fn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(h){D(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?mt("getToken() completed but was canceled"):(mt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new XA(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,d=>{zt(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(sk)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&zt(h),l())}}}interrupt(e){mt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){mt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],rm(this.interruptReasons_)&&(this.reconnectDelay_=ws,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(s=>zf(s)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const i=new Me(e).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(n),s.delete(n),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,n){mt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Bm&&(this.reconnectDelay_=$m,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){mt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Bm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Tv.replace(/\./g,"-")]=1,Pf()?e["framework.cordova"]=1:X_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ol.getInstance().currentlyOnline();return rm(this.interruptReasons_)&&e}}Fn.nextPersistentConnectionId_=0;Fn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new fe(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new fe(Br,e),r=new fe(Br,n);return this.compare(i,r)!==0}minPost(){return fe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pa;class Xv extends sc{static get __EMPTY_NODE(){return pa}static set __EMPTY_NODE(e){pa=e}compare(e,n){return ls(e.name,n.name)}isDefinedOn(e){throw ss("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return fe.MIN}maxPost(){return new fe(Xi,pa)}makePost(e,n){return D(typeof e=="string","KeyIndex indexValue must always be a string."),new fe(e,pa)}toString(){return".key"}}const Dr=new Xv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,n,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class rt{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i??rt.RED,this.left=r??Ot.EMPTY_NODE,this.right=s??Ot.EMPTY_NODE}copy(e,n,i,r,s){return new rt(e??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ot.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,r;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return Ot.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}rt.RED=!0;rt.BLACK=!1;class ok{copy(e,n,i,r,s){return this}insert(e,n,i){return new rt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ot{constructor(e,n=Ot.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ot(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,rt.BLACK,null,null))}remove(e){return new Ot(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,rt.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,r=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ma(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ma(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ma(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ma(this.root_,null,this.comparator_,!0,e)}}Ot.EMPTY_NODE=new ok;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ak(t,e){return ls(t.name,e.name)}function Gf(t,e){return ls(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ph;function lk(t){ph=t}const Jv=function(t){return typeof t=="number"?"number:"+kv(t):"string:"+t},Zv=function(t){if(t.isLeafNode()){const e=t.val();D(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Xn(e,".sv"),"Priority must be a string or number.")}else D(t===ph||t.isEmpty(),"priority of unexpected type.");D(t===ph||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jm;class nt{constructor(e,n=nt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,D(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Zv(this.priorityNode_)}static set __childrenNodeConstructor(e){jm=e}static get __childrenNodeConstructor(){return jm}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new nt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:nt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ce(e)?this:he(e)===".priority"?this.priorityNode_:nt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:nt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=he(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(D(i!==".priority"||mi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,nt.__childrenNodeConstructor.EMPTY_NODE.updateChild(xe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Jv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=kv(this.value_):e+=this.value_,this.lazyHash_=Cv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===nt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof nt.__childrenNodeConstructor?-1:(D(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,r=nt.VALUE_TYPE_ORDER.indexOf(n),s=nt.VALUE_TYPE_ORDER.indexOf(i);return D(r>=0,"Unknown leaf type: "+n),D(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}nt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eb,tb;function ck(t){eb=t}function uk(t){tb=t}class hk extends sc{compare(e,n){const i=e.node.getPriority(),r=n.node.getPriority(),s=i.compareTo(r);return s===0?ls(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return fe.MIN}maxPost(){return new fe(Xi,new nt("[PRIORITY-POST]",tb))}makePost(e,n){const i=eb(e);return new fe(n,new nt("[PRIORITY-POST]",i))}toString(){return".priority"}}const Et=new hk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fk=Math.log(2);class dk{constructor(e){const n=s=>parseInt(Math.log(s)/fk,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const al=function(t,e,n,i){t.sort(e);const r=function(l,c){const u=c-l;let h,f;if(u===0)return null;if(u===1)return h=t[l],f=n?n(h):h,new rt(f,h.node,rt.BLACK,null,null);{const d=parseInt(u/2,10)+l,m=r(l,d),y=r(d+1,c);return h=t[d],f=n?n(h):h,new rt(f,h.node,rt.BLACK,m,y)}},s=function(l){let c=null,u=null,h=t.length;const f=function(m,y){const b=h-m,_=h;h-=m;const v=r(b+1,_),E=t[b],I=n?n(E):E;d(new rt(I,E.node,y,null,v))},d=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const y=l.nextBitIsOne(),b=Math.pow(2,l.count-(m+1));y?f(b,rt.BLACK):(f(b,rt.BLACK),f(b,rt.RED))}return u},o=new dk(t.length),a=s(o);return new Ot(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let du;const pr={};class Mn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return D(pr&&Et,"ChildrenNode.ts has not been loaded"),du=du||new Mn({".priority":pr},{".priority":Et}),du}get(e){const n=$r(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ot?n:null}hasIndex(e){return Xn(this.indexSet_,e.toString())}addIndex(e,n){D(e!==Dr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=n.getIterator(fe.Wrap);let o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();let a;r?a=al(i,e.getCompare()):a=pr;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Mn(u,c)}addToIndexes(e,n){const i=Za(this.indexes_,(r,s)=>{const o=$r(this.indexSet_,s);if(D(o,"Missing index implementation for "+s),r===pr)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(fe.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),al(a,o.getCompare())}else return pr;else{const a=n.get(e.name);let l=r;return a&&(l=l.remove(new fe(e.name,a))),l.insert(e,e.node)}});return new Mn(i,this.indexSet_)}removeFromIndexes(e,n){const i=Za(this.indexes_,r=>{if(r===pr)return r;{const s=n.get(e.name);return s?r.remove(new fe(e.name,s)):r}});return new Mn(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ts;class be{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Zv(this.priorityNode_),this.children_.isEmpty()&&D(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ts||(Ts=new be(new Ot(Gf),null,Mn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ts}updatePriority(e){return this.children_.isEmpty()?this:new be(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ts:n}}getChild(e){const n=he(e);return n===null?this:this.getImmediateChild(n).getChild(xe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(D(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new fe(e,n);let r,s;n.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?Ts:this.priorityNode_;return new be(r,o,s)}}updateChild(e,n){const i=he(e);if(i===null)return n;{D(he(e)!==".priority"||mi(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(xe(e),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,r=0,s=!0;if(this.forEachChild(Et,(o,a)=>{n[o]=a.val(e),i++,s&&be.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Jv(this.getPriority().val())+":"),this.forEachChild(Et,(n,i)=>{const r=i.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":Cv(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new fe(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new fe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new fe(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,fe.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,fe.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Fo?-1:0}withIndex(e){if(e===Dr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new be(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Dr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(Et),r=n.getIterator(Et);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Dr?null:this.indexMap_.get(e.toString())}}be.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class pk extends be{constructor(){super(new Ot(Gf),be.EMPTY_NODE,Mn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return be.EMPTY_NODE}isEmpty(){return!1}}const Fo=new pk;Object.defineProperties(fe,{MIN:{value:new fe(Br,be.EMPTY_NODE)},MAX:{value:new fe(Xi,Fo)}});Xv.__EMPTY_NODE=be.EMPTY_NODE;nt.__childrenNodeConstructor=be;lk(Fo);uk(Fo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk=!0;function gt(t,e=null){if(t===null)return be.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),D(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new nt(n,gt(e))}if(!(t instanceof Array)&&mk){const n=[];let i=!1;if(Yt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=gt(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new fe(o,l)))}}),n.length===0)return be.EMPTY_NODE;const s=al(n,ak,o=>o.name,Gf);if(i){const o=al(n,Et.getCompare());return new be(s,gt(e),new Mn({".priority":o},{".priority":Et}))}else return new be(s,gt(e),Mn.Default)}else{let n=be.EMPTY_NODE;return Yt(t,(i,r)=>{if(Xn(t,i)&&i.substring(0,1)!=="."){const s=gt(r);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(i,s))}}),n.updatePriority(gt(e))}}ck(gt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk extends sc{constructor(e){super(),this.indexPath_=e,D(!ce(e)&&he(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),r=this.extractChild(n.node),s=i.compareTo(r);return s===0?ls(e.name,n.name):s}makePost(e,n){const i=gt(e),r=be.EMPTY_NODE.updateChild(this.indexPath_,i);return new fe(n,r)}maxPost(){const e=be.EMPTY_NODE.updateChild(this.indexPath_,Fo);return new fe(Xi,e)}toString(){return qv(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk extends sc{compare(e,n){const i=e.node.compareTo(n.node);return i===0?ls(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return fe.MIN}maxPost(){return fe.MAX}makePost(e,n){const i=gt(e);return new fe(n,i)}toString(){return".value"}}const _k=new yk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vk(t){return{type:"value",snapshotNode:t}}function bk(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ek(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function zm(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function wk(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Et}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return D(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return D(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Br}hasEnd(){return this.endSet_}getIndexEndValue(){return D(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return D(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Xi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return D(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Et}copy(){const e=new Yf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Hm(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Et?n="$priority":t.index_===_k?n="$value":t.index_===Dr?n="$key":(D(t.index_ instanceof gk,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=lt(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=lt(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+lt(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=lt(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+lt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Km(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Et&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll extends Hv{constructor(e,n,i,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=Mo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(D(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=ll.getListenId_(e,i),a={};this.listens_[o]=a;const l=Hm(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(s,h,!1,i),$r(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",r(f,null)}})}unlisten(e,n){const i=ll.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Hm(e._queryParams),i=e._path.toString(),r=new io;return this.restRequest_(i+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(i,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(n.auth=r.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Mf(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ro(a.responseText)}catch{zt("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&zt("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(){this.rootNode_=be.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(){return{value:null,children:new Map}}function nb(t,e,n){if(ce(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=he(e);t.children.has(i)||t.children.set(i,cl());const r=t.children.get(i);e=xe(e),nb(r,e,n)}}function mh(t,e,n){t.value!==null?n(e,t.value):Ik(t,(i,r)=>{const s=new Me(e.toString()+"/"+i);mh(r,s,n)})}function Ik(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Yt(this.last_,(i,r)=>{n[i]=n[i]-r}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm=10*1e3,Sk=30*1e3,Ak=5*60*1e3;class kk{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Ck(e);const i=Wm+(Sk-Wm)*Math.random();Us(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;Yt(e,(r,s)=>{s>0&&Xn(this.statsToReport_,r)&&(n[r]=s,i=!0)}),i&&this.server_.reportStats(n),Us(this.reportStats_.bind(this),Math.floor(Math.random()*2*Ak))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var En;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(En||(En={}));function ib(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function rb(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function sb(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=En.ACK_USER_WRITE,this.source=ib()}operationForChild(e){if(ce(this.path)){if(this.affectedTree.value!=null)return D(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Me(e));return new ul(Se(),n,this.revert)}}else return D(he(this.path)===e,"operationForChild called for unrelated child."),new ul(xe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=En.OVERWRITE}operationForChild(e){return ce(this.path)?new Ji(this.source,Se(),this.snap.getImmediateChild(e)):new Ji(this.source,xe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=En.MERGE}operationForChild(e){if(ce(this.path)){const n=this.children.subtree(new Me(e));return n.isEmpty()?null:n.value?new Ji(this.source,Se(),n.value):new lo(this.source,Se(),n)}else return D(he(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new lo(this.source,xe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ce(e))return this.isFullyInitialized()&&!this.filtered_;const n=he(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function Rk(t,e,n,i){const r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(wk(o.childName,o.snapshotNode))}),Is(t,r,"child_removed",e,i,n),Is(t,r,"child_added",e,i,n),Is(t,r,"child_moved",s,i,n),Is(t,r,"child_changed",e,i,n),Is(t,r,"value",e,i,n),r}function Is(t,e,n,i,r,s){const o=i.filter(a=>a.type===n);o.sort((a,l)=>xk(t,a,l)),o.forEach(a=>{const l=Nk(t,a,s);r.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Nk(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function xk(t,e,n){if(e.childName==null||n.childName==null)throw ss("Should only compare child_ events.");const i=new fe(e.childName,e.snapshotNode),r=new fe(n.childName,n.snapshotNode);return t.index_.compare(i,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ob(t,e){return{eventCache:t,serverCache:e}}function Vs(t,e,n,i){return ob(new Qf(e,n,i),t.serverCache)}function ab(t,e,n,i){return ob(t.eventCache,new Qf(e,n,i))}function gh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Zi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pu;const Ok=()=>(pu||(pu=new Ot(yA)),pu);class Re{constructor(e,n=Ok()){this.value=e,this.children=n}static fromObject(e){let n=new Re(null);return Yt(e,(i,r)=>{n=n.set(new Me(i),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Se(),value:this.value};if(ce(e))return null;{const i=he(e),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(xe(e),n);return s!=null?{path:st(new Me(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ce(e))return this;{const n=he(e),i=this.children.get(n);return i!==null?i.subtree(xe(e)):new Re(null)}}set(e,n){if(ce(e))return new Re(n,this.children);{const i=he(e),s=(this.children.get(i)||new Re(null)).set(xe(e),n),o=this.children.insert(i,s);return new Re(this.value,o)}}remove(e){if(ce(e))return this.children.isEmpty()?new Re(null):new Re(null,this.children);{const n=he(e),i=this.children.get(n);if(i){const r=i.remove(xe(e));let s;return r.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,r),this.value===null&&s.isEmpty()?new Re(null):new Re(this.value,s)}else return this}}get(e){if(ce(e))return this.value;{const n=he(e),i=this.children.get(n);return i?i.get(xe(e)):null}}setTree(e,n){if(ce(e))return n;{const i=he(e),s=(this.children.get(i)||new Re(null)).setTree(xe(e),n);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new Re(this.value,o)}}fold(e){return this.fold_(Se(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(st(e,r),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,Se(),n)}findOnPath_(e,n,i){const r=this.value?i(n,this.value):!1;if(r)return r;if(ce(e))return null;{const s=he(e),o=this.children.get(s);return o?o.findOnPath_(xe(e),st(n,s),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Se(),n)}foreachOnPath_(e,n,i){if(ce(e))return this;{this.value&&i(n,this.value);const r=he(e),s=this.children.get(r);return s?s.foreachOnPath_(xe(e),st(n,r),i):new Re(null)}}foreach(e){this.foreach_(Se(),e)}foreach_(e,n){this.children.inorderTraversal((i,r)=>{r.foreach_(st(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.writeTree_=e}static empty(){return new un(new Re(null))}}function $s(t,e,n){if(ce(e))return new un(new Re(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let s=i.value;const o=qt(r,e);return s=s.updateChild(o,n),new un(t.writeTree_.set(r,s))}else{const r=new Re(n),s=t.writeTree_.setTree(e,r);return new un(s)}}}function qm(t,e,n){let i=t;return Yt(n,(r,s)=>{i=$s(i,st(e,r),s)}),i}function Gm(t,e){if(ce(e))return un.empty();{const n=t.writeTree_.setTree(e,new Re(null));return new un(n)}}function yh(t,e){return sr(t,e)!=null}function sr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(qt(n.path,e)):null}function Ym(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Et,(i,r)=>{e.push(new fe(i,r))}):t.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new fe(i,r.value))}),e}function hi(t,e){if(ce(e))return t;{const n=sr(t,e);return n!=null?new un(new Re(n)):new un(t.writeTree_.subtree(e))}}function _h(t){return t.writeTree_.isEmpty()}function jr(t,e){return lb(Se(),t.writeTree_,e)}function lb(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(D(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):n=lb(st(t,r),s,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(st(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cb(t,e){return pb(e,t)}function Dk(t,e,n,i,r){D(i>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:r}),r&&(t.visibleWrites=$s(t.visibleWrites,e,n)),t.lastWriteId=i}function Pk(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function Mk(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);D(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let r=i.visible,s=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Lk(a,i.path)?r=!1:rn(i.path,a.path)&&(s=!0)),o--}if(r){if(s)return Fk(t),!0;if(i.snap)t.visibleWrites=Gm(t.visibleWrites,i.path);else{const a=i.children;Yt(a,l=>{t.visibleWrites=Gm(t.visibleWrites,st(i.path,l))})}return!0}else return!1}function Lk(t,e){if(t.snap)return rn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&rn(st(t.path,n),e))return!0;return!1}function Fk(t){t.visibleWrites=ub(t.allWrites,Uk,Se()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Uk(t){return t.visible}function ub(t,e,n){let i=un.empty();for(let r=0;r<t.length;++r){const s=t[r];if(e(s)){const o=s.path;let a;if(s.snap)rn(n,o)?(a=qt(n,o),i=$s(i,a,s.snap)):rn(o,n)&&(a=qt(o,n),i=$s(i,Se(),s.snap.getChild(a)));else if(s.children){if(rn(n,o))a=qt(n,o),i=qm(i,a,s.children);else if(rn(o,n))if(a=qt(o,n),ce(a))i=qm(i,Se(),s.children);else{const l=$r(s.children,he(a));if(l){const c=l.getChild(xe(a));i=$s(i,Se(),c)}}}else throw ss("WriteRecord should have .snap or .children")}}return i}function hb(t,e,n,i,r){if(!i&&!r){const s=sr(t.visibleWrites,e);if(s!=null)return s;{const o=hi(t.visibleWrites,e);if(_h(o))return n;if(n==null&&!yh(o,Se()))return null;{const a=n||be.EMPTY_NODE;return jr(o,a)}}}else{const s=hi(t.visibleWrites,e);if(!r&&_h(s))return n;if(!r&&n==null&&!yh(s,Se()))return null;{const o=function(c){return(c.visible||r)&&(!i||!~i.indexOf(c.writeId))&&(rn(c.path,e)||rn(e,c.path))},a=ub(t.allWrites,o,e),l=n||be.EMPTY_NODE;return jr(a,l)}}}function Vk(t,e,n){let i=be.EMPTY_NODE;const r=sr(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(Et,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(n){const s=hi(t.visibleWrites,e);return n.forEachChild(Et,(o,a)=>{const l=jr(hi(s,new Me(o)),a);i=i.updateImmediateChild(o,l)}),Ym(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=hi(t.visibleWrites,e);return Ym(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function $k(t,e,n,i,r){D(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=st(e,n);if(yh(t.visibleWrites,s))return null;{const o=hi(t.visibleWrites,s);return _h(o)?r.getChild(n):jr(o,r.getChild(n))}}function Bk(t,e,n,i){const r=st(e,n),s=sr(t.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(n)){const o=hi(t.visibleWrites,r);return jr(o,i.getNode().getImmediateChild(n))}else return null}function jk(t,e){return sr(t.visibleWrites,e)}function zk(t,e,n,i,r,s,o){let a;const l=hi(t.visibleWrites,e),c=sr(l,Se());if(c!=null)a=c;else if(n!=null)a=jr(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let d=f.getNext();for(;d&&u.length<r;)h(d,i)!==0&&u.push(d),d=f.getNext();return u}else return[]}function Hk(){return{visibleWrites:un.empty(),allWrites:[],lastWriteId:-1}}function vh(t,e,n,i){return hb(t.writeTree,t.treePath,e,n,i)}function fb(t,e){return Vk(t.writeTree,t.treePath,e)}function Qm(t,e,n,i){return $k(t.writeTree,t.treePath,e,n,i)}function hl(t,e){return jk(t.writeTree,st(t.treePath,e))}function Kk(t,e,n,i,r,s){return zk(t.writeTree,t.treePath,e,n,i,r,s)}function Xf(t,e,n){return Bk(t.writeTree,t.treePath,e,n)}function db(t,e){return pb(st(t.treePath,e),t.writeTree)}function pb(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;D(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),D(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(i,zm(i,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(i,Ek(i,r.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(i,bk(i,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(i,zm(i,e.snapshotNode,r.oldSnap));else throw ss("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qk{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const mb=new qk;class Jf{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Qf(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Xf(this.writes_,e,i)}}getChildAfterChild(e,n,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Zi(this.viewCache_),s=Kk(this.writes_,r,n,1,i,e);return s.length===0?null:s[0]}}function Gk(t,e){D(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),D(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Yk(t,e,n,i,r){const s=new Wk;let o,a;if(n.type===En.OVERWRITE){const c=n;c.source.fromUser?o=bh(t,e,c.path,c.snap,i,r,s):(D(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ce(c.path),o=fl(t,e,c.path,c.snap,i,r,a,s))}else if(n.type===En.MERGE){const c=n;c.source.fromUser?o=Xk(t,e,c.path,c.children,i,r,s):(D(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Eh(t,e,c.path,c.children,i,r,a,s))}else if(n.type===En.ACK_USER_WRITE){const c=n;c.revert?o=eR(t,e,c.path,i,r,s):o=Jk(t,e,c.path,c.affectedTree,i,r,s)}else if(n.type===En.LISTEN_COMPLETE)o=Zk(t,e,n.path,i,s);else throw ss("Unknown operation type: "+n.type);const l=s.getChanges();return Qk(e,o,l),{viewCache:o,changes:l}}function Qk(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=gh(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(vk(gh(e)))}}function gb(t,e,n,i,r,s){const o=e.eventCache;if(hl(i,n)!=null)return e;{let a,l;if(ce(n))if(D(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Zi(e),u=c instanceof be?c:be.EMPTY_NODE,h=fb(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const c=vh(i,Zi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=he(n);if(c===".priority"){D(mi(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Qm(i,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=xe(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=Qm(i,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=Xf(i,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,r,s):a=o.getNode()}}return Vs(e,a,o.isFullyInitialized()||ce(n),t.filter.filtersNodes())}}function fl(t,e,n,i,r,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(ce(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const d=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),d,null)}else{const d=he(n);if(!l.isCompleteForPath(n)&&mi(n)>1)return e;const m=xe(n),b=l.getNode().getImmediateChild(d).updateChild(m,i);d===".priority"?c=u.updatePriority(l.getNode(),b):c=u.updateChild(l.getNode(),d,b,m,mb,null)}const h=ab(e,c,l.isFullyInitialized()||ce(n),u.filtersNodes()),f=new Jf(r,h,s);return gb(t,h,n,r,f,a)}function bh(t,e,n,i,r,s,o){const a=e.eventCache;let l,c;const u=new Jf(r,e,s);if(ce(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Vs(e,c,!0,t.filter.filtersNodes());else{const h=he(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=Vs(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=xe(n),d=a.getNode().getImmediateChild(h);let m;if(ce(f))m=i;else{const y=u.getCompleteChild(h);y!=null?Wv(f)===".priority"&&y.getChild(Gv(f)).isEmpty()?m=y:m=y.updateChild(f,i):m=be.EMPTY_NODE}if(d.equals(m))l=e;else{const y=t.filter.updateChild(a.getNode(),h,m,f,u,o);l=Vs(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Xm(t,e){return t.eventCache.isCompleteForChild(e)}function Xk(t,e,n,i,r,s,o){let a=e;return i.foreach((l,c)=>{const u=st(n,l);Xm(e,he(u))&&(a=bh(t,a,u,c,r,s,o))}),i.foreach((l,c)=>{const u=st(n,l);Xm(e,he(u))||(a=bh(t,a,u,c,r,s,o))}),a}function Jm(t,e,n){return n.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function Eh(t,e,n,i,r,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ce(n)?c=i:c=new Re(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const d=e.serverCache.getNode().getImmediateChild(h),m=Jm(t,d,f);l=fl(t,l,new Me(h),m,r,s,o,a)}}),c.children.inorderTraversal((h,f)=>{const d=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!d){const m=e.serverCache.getNode().getImmediateChild(h),y=Jm(t,m,f);l=fl(t,l,new Me(h),y,r,s,o,a)}}),l}function Jk(t,e,n,i,r,s,o){if(hl(r,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(ce(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return fl(t,e,n,l.getNode().getChild(n),r,s,a,o);if(ce(n)){let c=new Re(null);return l.getNode().forEachChild(Dr,(u,h)=>{c=c.set(new Me(u),h)}),Eh(t,e,n,c,r,s,a,o)}else return e}else{let c=new Re(null);return i.foreach((u,h)=>{const f=st(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),Eh(t,e,n,c,r,s,a,o)}}function Zk(t,e,n,i,r){const s=e.serverCache,o=ab(e,s.getNode(),s.isFullyInitialized()||ce(n),s.isFiltered());return gb(t,o,n,i,mb,r)}function eR(t,e,n,i,r,s){let o;if(hl(i,n)!=null)return e;{const a=new Jf(i,e,r),l=e.eventCache.getNode();let c;if(ce(n)||he(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=vh(i,Zi(e));else{const h=e.serverCache.getNode();D(h instanceof be,"serverChildren would be complete if leaf node"),u=fb(i,h)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=he(n);let h=Xf(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,xe(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,be.EMPTY_NODE,xe(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=vh(i,Zi(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||hl(i,Se())!=null,Vs(e,c,o,t.filter.filtersNodes())}}function tR(t,e){const n=Zi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ce(e)&&!n.getImmediateChild(he(e)).isEmpty())?n.getChild(e):null}function Zm(t,e,n,i){e.type===En.MERGE&&e.source.queryId!==null&&(D(Zi(t.viewCache_),"We should always have a full cache before handling merges"),D(gh(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,s=Yk(t.processor_,r,e,n,i);return Gk(t.processor_,s.viewCache),D(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,nR(t,s.changes,s.viewCache.eventCache.getNode(),null)}function nR(t,e,n,i){const r=i?[i]:t.eventRegistrations_;return Rk(t.eventGenerator_,e,n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eg;function iR(t){D(!eg,"__referenceConstructor has already been defined"),eg=t}function Zf(t,e,n,i){const r=e.source.queryId;if(r!==null){const s=t.views.get(r);return D(s!=null,"SyncTree gave us an op for an invalid query."),Zm(s,e,n,i)}else{let s=[];for(const o of t.views.values())s=s.concat(Zm(o,e,n,i));return s}}function ed(t,e){let n=null;for(const i of t.views.values())n=n||tR(i,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tg;function rR(t){D(!tg,"__referenceConstructor has already been defined"),tg=t}class ng{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Re(null),this.pendingWriteTree_=Hk(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function sR(t,e,n,i,r){return Dk(t.pendingWriteTree_,e,n,i,r),r?ac(t,new Ji(ib(),e,n)):[]}function Er(t,e,n=!1){const i=Pk(t.pendingWriteTree_,e);if(Mk(t.pendingWriteTree_,e)){let s=new Re(null);return i.snap!=null?s=s.set(Se(),!0):Yt(i.children,o=>{s=s.set(new Me(o),!0)}),ac(t,new ul(i.path,s,n))}else return[]}function oc(t,e,n){return ac(t,new Ji(rb(),e,n))}function oR(t,e,n){const i=Re.fromObject(n);return ac(t,new lo(rb(),e,i))}function aR(t,e,n,i){const r=bb(t,i);if(r!=null){const s=Eb(r),o=s.path,a=s.queryId,l=qt(o,e),c=new Ji(sb(a),l,n);return wb(t,o,c)}else return[]}function lR(t,e,n,i){const r=bb(t,i);if(r){const s=Eb(r),o=s.path,a=s.queryId,l=qt(o,e),c=Re.fromObject(n),u=new lo(sb(a),l,c);return wb(t,o,u)}else return[]}function yb(t,e,n){const r=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=qt(o,e),c=ed(a,l);if(c)return c});return hb(r,e,s,n,!0)}function ac(t,e){return _b(e,t.syncPointTree_,null,cb(t.pendingWriteTree_,Se()))}function _b(t,e,n,i){if(ce(t.path))return vb(t,e,n,i);{const r=e.get(Se());n==null&&r!=null&&(n=ed(r,Se()));let s=[];const o=he(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=db(i,o);s=s.concat(_b(a,l,c,u))}return r&&(s=s.concat(Zf(r,t,i,n))),s}}function vb(t,e,n,i){const r=e.get(Se());n==null&&r!=null&&(n=ed(r,Se()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=db(i,o),u=t.operationForChild(o);u&&(s=s.concat(vb(u,a,l,c)))}),r&&(s=s.concat(Zf(r,t,i,n))),s}function bb(t,e){return t.tagToQueryMap.get(e)}function Eb(t){const e=t.indexOf("$");return D(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Me(t.substr(0,e))}}function wb(t,e,n){const i=t.syncPointTree_.get(e);D(i,"Missing sync point for query tag that we're tracking");const r=cb(t.pendingWriteTree_,e);return Zf(i,n,r,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new td(n)}node(){return this.node_}}class nd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=st(this.path_,e);return new nd(this.syncTree_,n)}node(){return yb(this.syncTree_,this.path_)}}const cR=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ig=function(t,e,n){if(!t||typeof t!="object")return t;if(D(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return uR(t[".sv"],e,n);if(typeof t[".sv"]=="object")return hR(t[".sv"],e);D(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},uR=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:D(!1,"Unexpected server value: "+t)}},hR=function(t,e,n){t.hasOwnProperty("increment")||D(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&D(!1,"Unexpected increment value: "+i);const r=e.node();if(D(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},fR=function(t,e,n,i){return id(e,new nd(n,t),i)},dR=function(t,e,n){return id(t,new td(e),n)};function id(t,e,n){const i=t.getPriority().val(),r=ig(i,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=ig(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new nt(a,gt(r)):t}else{const o=t;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new nt(r))),o.forEachChild(Et,(a,l)=>{const c=id(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function sd(t,e){let n=e instanceof Me?e:new Me(e),i=t,r=he(n);for(;r!==null;){const s=$r(i.node.children,r)||{children:{},childCount:0};i=new rd(r,i,s),n=xe(n),r=he(n)}return i}function cs(t){return t.node.value}function Tb(t,e){t.node.value=e,wh(t)}function Ib(t){return t.node.childCount>0}function pR(t){return cs(t)===void 0&&!Ib(t)}function lc(t,e){Yt(t.node.children,(n,i)=>{e(new rd(n,t,i))})}function Cb(t,e,n,i){n&&!i&&e(t),lc(t,r=>{Cb(r,e,!0,i)}),n&&i&&e(t)}function mR(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Uo(t){return new Me(t.parent===null?t.name:Uo(t.parent)+"/"+t.name)}function wh(t){t.parent!==null&&gR(t.parent,t.name,t)}function gR(t,e,n){const i=pR(n),r=Xn(t.node.children,e);i&&r?(delete t.node.children[e],t.node.childCount--,wh(t)):!i&&!r&&(t.node.children[e]=n.node,t.node.childCount++,wh(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yR=/[\[\].#$\/\u0000-\u001F\u007F]/,_R=/[\[\].#$\u0000-\u001F\u007F]/,mu=10*1024*1024,Sb=function(t){return typeof t=="string"&&t.length!==0&&!yR.test(t)},vR=function(t){return typeof t=="string"&&t.length!==0&&!_R.test(t)},bR=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),vR(t)},Ab=function(t,e,n){const i=n instanceof Me?new ZA(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+xi(i));if(typeof e=="function")throw new Error(t+"contains a function "+xi(i)+" with contents = "+e.toString());if(Sv(e))throw new Error(t+"contains "+e.toString()+" "+xi(i));if(typeof e=="string"&&e.length>mu/3&&rc(e)>mu)throw new Error(t+"contains a string greater than "+mu+" utf8 bytes "+xi(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(Yt(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Sb(o)))throw new Error(t+" contains an invalid key ("+o+") "+xi(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ek(i,o),Ab(t,a,i),tk(i)}),r&&s)throw new Error(t+' contains ".value" child '+xi(i)+" in addition to actual children.")}},ER=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Sb(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!bR(n))throw new Error(M1(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function TR(t,e){let n=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();n!==null&&!Yv(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(r)}n&&t.eventLists_.push(n)}function or(t,e,n){TR(t,n),IR(t,i=>rn(i,e)||rn(e,i))}function IR(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const r=t.eventLists_[i];if(r){const s=r.path;e(s)?(CR(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function CR(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Ki&&mt("event: "+n.toString()),Lo(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SR="repo_interrupt",AR=25;class kR{constructor(e,n,i,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new wR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=cl(),this.transactionQueueTree_=new rd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function RR(t,e,n){if(t.stats_=Kf(t.repoInfo_),t.forceRestClient_||TA())t.server_=new ll(t.repoInfo_,(i,r,s,o)=>{rg(t,i,r,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>sg(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{lt(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new Fn(t.repoInfo_,e,(i,r,s,o)=>{rg(t,i,r,s,o)},i=>{sg(t,i)},i=>{xR(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=RA(t.repoInfo_,()=>new kk(t.stats_,t.server_)),t.infoData_=new Tk,t.infoSyncTree_=new ng({startListening:(i,r,s,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=oc(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),od(t,"connected",!1),t.serverSyncTree_=new ng({startListening:(i,r,s,o)=>(t.server_.listen(i,s,r,(a,l)=>{const c=o(a,l);or(t.eventQueue_,i._path,c)}),[]),stopListening:(i,r)=>{t.server_.unlisten(i,r)}})}function NR(t){const n=t.infoData_.getNode(new Me(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function kb(t){return cR({timestamp:NR(t)})}function rg(t,e,n,i,r){t.dataUpdateCount++;const s=new Me(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(i){const l=Za(n,c=>gt(c));o=lR(t.serverSyncTree_,s,l,r)}else{const l=gt(n);o=aR(t.serverSyncTree_,s,l,r)}else if(i){const l=Za(n,c=>gt(c));o=oR(t.serverSyncTree_,s,l)}else{const l=gt(n);o=oc(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=ld(t,s)),or(t.eventQueue_,a,o)}function sg(t,e){od(t,"connected",e),e===!1&&DR(t)}function xR(t,e){Yt(e,(n,i)=>{od(t,n,i)})}function od(t,e,n){const i=new Me("/.info/"+e),r=gt(n);t.infoData_.updateSnapshot(i,r);const s=oc(t.infoSyncTree_,i,r);or(t.eventQueue_,i,s)}function OR(t){return t.nextWriteId_++}function DR(t){Rb(t,"onDisconnectEvents");const e=kb(t),n=cl();mh(t.onDisconnect_,Se(),(r,s)=>{const o=fR(r,s,t.serverSyncTree_,e);nb(n,r,o)});let i=[];mh(n,Se(),(r,s)=>{i=i.concat(oc(t.serverSyncTree_,r,s));const o=FR(t,r);ld(t,o)}),t.onDisconnect_=cl(),or(t.eventQueue_,Se(),i)}function PR(t){t.persistentConnection_&&t.persistentConnection_.interrupt(SR)}function Rb(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),mt(n,...e)}function Nb(t,e,n){return yb(t.serverSyncTree_,e,n)||be.EMPTY_NODE}function ad(t,e=t.transactionQueueTree_){if(e||cc(t,e),cs(e)){const n=Ob(t,e);D(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&MR(t,Uo(e),n)}else Ib(e)&&lc(e,n=>{ad(t,n)})}function MR(t,e,n){const i=n.map(c=>c.currentWriteId),r=Nb(t,e,i);let s=r;const o=r.hash();for(let c=0;c<n.length;c++){const u=n[c];D(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=qt(e,u.path);s=s.updateChild(h,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Rb(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(Er(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();cc(t,sd(t.transactionQueueTree_,e)),ad(t,t.transactionQueueTree_),or(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)Lo(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{zt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}ld(t,e)}},o)}function ld(t,e){const n=xb(t,e),i=Uo(n),r=Ob(t,n);return LR(t,r,i),i}function LR(t,e,n){if(e.length===0)return;const i=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=qt(n,l.path);let u=!1,h;if(D(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,r=r.concat(Er(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=AR)u=!0,h="maxretry",r=r.concat(Er(t.serverSyncTree_,l.currentWriteId,!0));else{const f=Nb(t,l.path,o);l.currentInputSnapshot=f;const d=e[a].update(f.val());if(d!==void 0){Ab("transaction failed: Data returned ",d,l.path);let m=gt(d);typeof d=="object"&&d!=null&&Xn(d,".priority")||(m=m.updatePriority(f.getPriority()));const b=l.currentWriteId,_=kb(t),v=dR(m,f,_);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=v,l.currentWriteId=OR(t),o.splice(o.indexOf(b),1),r=r.concat(sR(t.serverSyncTree_,l.path,v,l.currentWriteId,l.applyLocally)),r=r.concat(Er(t.serverSyncTree_,b,!0))}else u=!0,h="nodata",r=r.concat(Er(t.serverSyncTree_,l.currentWriteId,!0))}or(t.eventQueue_,n,r),r=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}cc(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)Lo(i[a]);ad(t,t.transactionQueueTree_)}function xb(t,e){let n,i=t.transactionQueueTree_;for(n=he(e);n!==null&&cs(i)===void 0;)i=sd(i,n),e=xe(e),n=he(e);return i}function Ob(t,e){const n=[];return Db(t,e,n),n.sort((i,r)=>i.order-r.order),n}function Db(t,e,n){const i=cs(e);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);lc(e,r=>{Db(t,r,n)})}function cc(t,e){const n=cs(e);if(n){let i=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[i]=n[r],i++);n.length=i,Tb(e,n.length>0?n:void 0)}lc(e,i=>{cc(t,i)})}function FR(t,e){const n=Uo(xb(t,e)),i=sd(t.transactionQueueTree_,e);return mR(i,r=>{gu(t,r)}),gu(t,i),Cb(i,r=>{gu(t,r)}),n}function gu(t,e){const n=cs(e);if(n){const i=[];let r=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(D(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(D(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(Er(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Tb(e,void 0):n.length=s+1,or(t.eventQueue_,Uo(e),r);for(let o=0;o<i.length;o++)Lo(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UR(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function VR(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):zt(`Invalid query segment '${n}' in query '${t}'`)}return e}const og=function(t,e){const n=$R(t),i=n.namespace;n.domain==="firebase.com"&&Qi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Qi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||mA();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new SA(n.host,n.secure,i,r,e,"",i!==n.subdomain),path:new Me(n.pathString)}},$R=function(t){let e="",n="",i="",r="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(r=UR(t.substring(u,h)));const f=VR(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const d=e.slice(0,c);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{const m=e.indexOf(".");i=e.substring(0,m).toLowerCase(),n=e.substring(m+1),s=i}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
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
 */class cd{constructor(e,n,i,r){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=r}get key(){return ce(this._path)?null:Wv(this._path)}get ref(){return new us(this._repo,this._path)}get _queryIdentifier(){const e=Km(this._queryParams),n=zf(e);return n==="{}"?"default":n}get _queryObject(){return Km(this._queryParams)}isEqual(e){if(e=Lt(e),!(e instanceof cd))return!1;const n=this._repo===e._repo,i=Yv(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+JA(this._path)}}class us extends cd{constructor(e,n){super(e,n,new Yf,!1)}get parent(){const e=Gv(this._path);return e===null?null:new us(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}iR(us);rR(us);/**
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
 */const BR="FIREBASE_DATABASE_EMULATOR_HOST",Th={};let jR=!1;function zR(t,e,n,i,r){let s=i||t.options.databaseURL;s===void 0&&(t.options.projectId||Qi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),mt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=og(s,r),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[BR]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=og(s,r),a=o.repoInfo):l=!o.repoInfo.secure;const u=r&&l?new fh(fh.OWNER):new CA(t.name,t.options,e);ER("Invalid Firebase Database URL",o),ce(o.path)||Qi("Database URL must point to the root of a Firebase Database (not including a child path).");const h=KR(a,t,u,new IA(t.name,n));return new WR(h,t)}function HR(t,e){const n=Th[e];(!n||n[t.key]!==t)&&Qi(`Database ${e}(${t.repoInfo_}) has already been deleted.`),PR(t),delete n[t.key]}function KR(t,e,n,i){let r=Th[e.name];r||(r={},Th[e.name]=r);let s=r[t.toURLString()];return s&&Qi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new kR(t,jR,n,i),r[t.toURLString()]=s,s}class WR{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(RR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new us(this._repo,Se())),this._rootInternal}_delete(){return this._rootInternal!==null&&(HR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Qi("Cannot call "+e+" on a deleted database.")}}/**
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
 */function qR(t){uA(as),An(new hn("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return zR(i,r,s,n)},"PUBLIC").setMultipleInstances(!0)),jt(Am,km,t),jt(Am,km,"esm2017")}Fn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Fn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};qR();var GR=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},j,ud=ud||{},X=GR||self;function dl(){}function uc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Vo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function YR(t){return Object.prototype.hasOwnProperty.call(t,yu)&&t[yu]||(t[yu]=++QR)}var yu="closure_uid_"+(1e9*Math.random()>>>0),QR=0;function XR(t,e,n){return t.call.apply(t.bind,arguments)}function JR(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,i),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function wt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?wt=XR:wt=JR,wt.apply(null,arguments)}function ga(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function ht(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(i,r,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(i,o)}}function wi(){this.s=this.s,this.o=this.o}var ZR=0;wi.prototype.s=!1;wi.prototype.na=function(){!this.s&&(this.s=!0,this.M(),ZR!=0)&&YR(this)};wi.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Pb=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function hd(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function ag(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(uc(i)){const r=t.length||0,s=i.length||0;t.length=r+s;for(let o=0;o<s;o++)t[r+o]=i[o]}else t.push(i)}}function Tt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Tt.prototype.h=function(){this.defaultPrevented=!0};var eN=function(){if(!X.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{X.addEventListener("test",dl,e),X.removeEventListener("test",dl,e)}catch{}return t}();function pl(t){return/^[\s\xa0]*$/.test(t)}var lg=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function _u(t,e){return t<e?-1:t>e?1:0}function hc(){var t=X.navigator;return t&&(t=t.userAgent)?t:""}function _n(t){return hc().indexOf(t)!=-1}function fd(t){return fd[" "](t),t}fd[" "]=dl;function tN(t){var e=rN;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var nN=_n("Opera"),zr=_n("Trident")||_n("MSIE"),Mb=_n("Edge"),Ih=Mb||zr,Lb=_n("Gecko")&&!(hc().toLowerCase().indexOf("webkit")!=-1&&!_n("Edge"))&&!(_n("Trident")||_n("MSIE"))&&!_n("Edge"),iN=hc().toLowerCase().indexOf("webkit")!=-1&&!_n("Edge");function Fb(){var t=X.document;return t?t.documentMode:void 0}var ml;e:{var vu="",bu=function(){var t=hc();if(Lb)return/rv:([^\);]+)(\)|;)/.exec(t);if(Mb)return/Edge\/([\d\.]+)/.exec(t);if(zr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(iN)return/WebKit\/(\S+)/.exec(t);if(nN)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(bu&&(vu=bu?bu[1]:""),zr){var Eu=Fb();if(Eu!=null&&Eu>parseFloat(vu)){ml=String(Eu);break e}}ml=vu}var rN={};function sN(){return tN(function(){let t=0;const e=lg(String(ml)).split("."),n=lg("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var r=e[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r[0].length==0&&s[0].length==0)break;t=_u(r[1].length==0?0:parseInt(r[1],10),s[1].length==0?0:parseInt(s[1],10))||_u(r[2].length==0,s[2].length==0)||_u(r[2],s[2]),r=r[3],s=s[3]}while(t==0)}return 0<=t})}var Ch;if(X.document&&zr){var cg=Fb();Ch=cg||parseInt(ml,10)||void 0}else Ch=void 0;var oN=Ch;function co(t,e){if(Tt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Lb){e:{try{fd(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:aN[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&co.X.h.call(this)}}ht(co,Tt);var aN={2:"touch",3:"pen",4:"mouse"};co.prototype.h=function(){co.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var $o="closure_listenable_"+(1e6*Math.random()|0),lN=0;function cN(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=r,this.key=++lN,this.ba=this.ea=!1}function fc(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function dd(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function Ub(t){const e={};for(const n in t)e[n]=t[n];return e}const ug="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Vb(t,e){let n,i;for(let r=1;r<arguments.length;r++){i=arguments[r];for(n in i)t[n]=i[n];for(let s=0;s<ug.length;s++)n=ug[s],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function dc(t){this.src=t,this.g={},this.h=0}dc.prototype.add=function(t,e,n,i,r){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Ah(t,e,i,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new cN(e,this.src,s,!!i,r),e.ea=n,t.push(e)),e};function Sh(t,e){var n=e.type;if(n in t.g){var i=t.g[n],r=Pb(i,e),s;(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(fc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ah(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==i)return r}return-1}var pd="closure_lm_"+(1e6*Math.random()|0),wu={};function $b(t,e,n,i,r){if(i&&i.once)return jb(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)$b(t,e[s],n,i,r);return null}return n=yd(n),t&&t[$o]?t.N(e,n,Vo(i)?!!i.capture:!!i,r):Bb(t,e,n,!1,i,r)}function Bb(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=Vo(r)?!!r.capture:!!r,a=gd(t);if(a||(t[pd]=a=new dc(t)),n=a.add(e,n,i,o,s),n.proxy)return n;if(i=uN(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)eN||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(Hb(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function uN(){function t(n){return e.call(t.src,t.listener,n)}const e=hN;return t}function jb(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)jb(t,e[s],n,i,r);return null}return n=yd(n),t&&t[$o]?t.O(e,n,Vo(i)?!!i.capture:!!i,r):Bb(t,e,n,!0,i,r)}function zb(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)zb(t,e[s],n,i,r);else i=Vo(i)?!!i.capture:!!i,n=yd(n),t&&t[$o]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Ah(s,n,i,r),-1<n&&(fc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=gd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ah(e,n,i,r)),(n=-1<t?e[t]:null)&&md(n))}function md(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[$o])Sh(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Hb(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=gd(e))?(Sh(n,t),n.h==0&&(n.src=null,e[pd]=null)):fc(t)}}}function Hb(t){return t in wu?wu[t]:wu[t]="on"+t}function hN(t,e){if(t.ba)t=!0;else{e=new co(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&md(t),t=n.call(i,e)}return t}function gd(t){return t=t[pd],t instanceof dc?t:null}var Tu="__closure_events_fn_"+(1e9*Math.random()>>>0);function yd(t){return typeof t=="function"?t:(t[Tu]||(t[Tu]=function(e){return t.handleEvent(e)}),t[Tu])}function ot(){wi.call(this),this.i=new dc(this),this.P=this,this.I=null}ht(ot,wi);ot.prototype[$o]=!0;ot.prototype.removeEventListener=function(t,e,n,i){zb(this,t,e,n,i)};function ut(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new Tt(e,t);else if(e instanceof Tt)e.target=e.target||t;else{var r=e;e=new Tt(i,t),Vb(e,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=ya(o,i,!0,e)&&r}if(o=e.g=t,r=ya(o,i,!0,e)&&r,r=ya(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)o=e.g=n[s],r=ya(o,i,!1,e)&&r}ot.prototype.M=function(){if(ot.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)fc(n[i]);delete t.g[e],t.h--}}this.I=null};ot.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};ot.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function ya(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&Sh(t.i,o),r=a.call(l,i)!==!1&&r}}return r&&!i.defaultPrevented}var _d=X.JSON.stringify;function fN(){var t=qb;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class dN{constructor(){this.h=this.g=null}add(e,n){const i=Kb.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var Kb=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new pN,t=>t.reset());class pN{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function mN(t){X.setTimeout(()=>{throw t},0)}function Wb(t,e){kh||gN(),Rh||(kh(),Rh=!0),qb.add(t,e)}var kh;function gN(){var t=X.Promise.resolve(void 0);kh=function(){t.then(yN)}}var Rh=!1,qb=new dN;function yN(){for(var t;t=fN();){try{t.h.call(t.g)}catch(n){mN(n)}var e=Kb;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Rh=!1}function pc(t,e){ot.call(this),this.h=t||1,this.g=e||X,this.j=wt(this.lb,this),this.l=Date.now()}ht(pc,ot);j=pc.prototype;j.ca=!1;j.R=null;j.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ut(this,"tick"),this.ca&&(vd(this),this.start()))}};j.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function vd(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}j.M=function(){pc.X.M.call(this),vd(this),delete this.g};function bd(t,e,n){if(typeof t=="function")n&&(t=wt(t,n));else if(t&&typeof t.handleEvent=="function")t=wt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:X.setTimeout(t,e||0)}function Gb(t){t.g=bd(()=>{t.g=null,t.i&&(t.i=!1,Gb(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class _N extends wi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Gb(this)}M(){super.M(),this.g&&(X.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function uo(t){wi.call(this),this.h=t,this.g={}}ht(uo,wi);var hg=[];function Yb(t,e,n,i){Array.isArray(n)||(n&&(hg[0]=n.toString()),n=hg);for(var r=0;r<n.length;r++){var s=$b(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Qb(t){dd(t.g,function(e,n){this.g.hasOwnProperty(n)&&md(e)},t),t.g={}}uo.prototype.M=function(){uo.X.M.call(this),Qb(this)};uo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function mc(){this.g=!0}mc.prototype.Aa=function(){this.g=!1};function vN(t,e,n,i,r,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function bN(t,e,n,i,r,s,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+`
`+n+`
`+s+" "+o})}function wr(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+wN(t,n)+(i?" "+i:"")})}function EN(t,e){t.info(function(){return"TIMEOUT: "+e})}mc.prototype.info=function(){};function wN(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return _d(n)}catch{return e}}var ar={},fg=null;function gc(){return fg=fg||new ot}ar.Pa="serverreachability";function Xb(t){Tt.call(this,ar.Pa,t)}ht(Xb,Tt);function ho(t){const e=gc();ut(e,new Xb(e))}ar.STAT_EVENT="statevent";function Jb(t,e){Tt.call(this,ar.STAT_EVENT,t),this.stat=e}ht(Jb,Tt);function At(t){const e=gc();ut(e,new Jb(e,t))}ar.Qa="timingevent";function Zb(t,e){Tt.call(this,ar.Qa,t),this.size=e}ht(Zb,Tt);function Bo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return X.setTimeout(function(){t()},e)}var yc={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},e0={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Ed(){}Ed.prototype.h=null;function dg(t){return t.h||(t.h=t.i())}function t0(){}var jo={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function wd(){Tt.call(this,"d")}ht(wd,Tt);function Td(){Tt.call(this,"c")}ht(Td,Tt);var Nh;function _c(){}ht(_c,Ed);_c.prototype.g=function(){return new XMLHttpRequest};_c.prototype.i=function(){return{}};Nh=new _c;function zo(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new uo(this),this.O=TN,t=Ih?125:void 0,this.T=new pc(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new n0}function n0(){this.i=null,this.g="",this.h=!1}var TN=45e3,xh={},gl={};j=zo.prototype;j.setTimeout=function(t){this.O=t};function Oh(t,e,n){t.K=1,t.v=bc(jn(e)),t.s=n,t.P=!0,i0(t,null)}function i0(t,e){t.F=Date.now(),Ho(t),t.A=jn(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),h0(n.i,"t",i),t.C=0,n=t.l.H,t.h=new n0,t.g=O0(t.l,n?e:null,!t.s),0<t.N&&(t.L=new _N(wt(t.La,t,t.g),t.N)),Yb(t.S,t.g,"readystatechange",t.ib),e=t.H?Ub(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ho(),vN(t.j,t.u,t.A,t.m,t.U,t.s)}j.ib=function(t){t=t.target;const e=this.L;e&&Ln(t)==3?e.l():this.La(t)};j.La=function(t){try{if(t==this.g)e:{const u=Ln(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Ih||this.g&&(this.h.h||this.g.fa()||yg(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?ho(3):ho(2)),vc(this);var n=this.g.aa();this.Y=n;t:if(r0(this)){var i=yg(this.g);t="";var r=i.length,s=Ln(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ui(this),Bs(this);var o="";break t}this.h.i=new X.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,bN(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!pl(a)){var c=a;break t}}c=null}if(n=c)wr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Dh(this,n);else{this.i=!1,this.o=3,At(12),Ui(this),Bs(this);break e}}this.P?(s0(this,u,o),Ih&&this.i&&u==3&&(Yb(this.S,this.T,"tick",this.hb),this.T.start())):(wr(this.j,this.m,o,null),Dh(this,o)),u==4&&Ui(this),this.i&&!this.I&&(u==4?k0(this.l,this):(this.i=!1,Ho(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,At(12)):(this.o=0,At(13)),Ui(this),Bs(this)}}}catch{}finally{}};function r0(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function s0(t,e,n){let i=!0,r;for(;!t.I&&t.C<n.length;)if(r=IN(t,n),r==gl){e==4&&(t.o=4,At(14),i=!1),wr(t.j,t.m,null,"[Incomplete Response]");break}else if(r==xh){t.o=4,At(15),wr(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else wr(t.j,t.m,r,null),Dh(t,r);r0(t)&&r!=gl&&r!=xh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,At(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Nd(e),e.K=!0,At(11))):(wr(t.j,t.m,n,"[Invalid Chunked Response]"),Ui(t),Bs(t))}j.hb=function(){if(this.g){var t=Ln(this.g),e=this.g.fa();this.C<e.length&&(vc(this),s0(this,t,e),this.i&&t!=4&&Ho(this))}};function IN(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?gl:(n=Number(e.substring(n,i)),isNaN(n)?xh:(i+=1,i+n>e.length?gl:(e=e.substr(i,n),t.C=i+n,e)))}j.cancel=function(){this.I=!0,Ui(this)};function Ho(t){t.V=Date.now()+t.O,o0(t,t.O)}function o0(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Bo(wt(t.gb,t),e)}function vc(t){t.B&&(X.clearTimeout(t.B),t.B=null)}j.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(EN(this.j,this.A),this.K!=2&&(ho(),At(17)),Ui(this),this.o=2,Bs(this)):o0(this,this.V-t)};function Bs(t){t.l.G==0||t.I||k0(t.l,t)}function Ui(t){vc(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,vd(t.T),Qb(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Dh(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Ph(n.h,t))){if(!t.J&&Ph(n.h,t)&&n.G==3){try{var i=n.Fa.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var r=i;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)vl(n),Tc(n);else break e;Rd(n),At(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Bo(wt(n.cb,n),6e3));if(1>=p0(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Vi(n,11)}else if((t.J||n.g==t)&&vl(n),!pl(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(i=1.5*f,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const d=t.g;if(d){const m=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var s=i.h;s.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Id(s,s.h),s.h=null))}if(i.D){const y=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(i.za=y,Le(i.F,i.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),i=n;var o=t;if(i.sa=x0(i,i.H?i.ka:null,i.V),o.J){m0(i.h,o);var a=o,l=i.J;l&&a.setTimeout(l),a.B&&(vc(a),Ho(a)),i.g=o}else S0(i);0<n.i.length&&Ic(n)}else c[0]!="stop"&&c[0]!="close"||Vi(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Vi(n,7):kd(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}ho(4)}catch{}}function CN(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(uc(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function SN(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(uc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function a0(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(uc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=SN(t),i=CN(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}var l0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function AN(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Wi(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Wi){this.h=e!==void 0?e:t.h,yl(this,t.j),this.s=t.s,this.g=t.g,_l(this,t.m),this.l=t.l,e=t.i;var n=new fo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),pg(this,n),this.o=t.o}else t&&(n=String(t).match(l0))?(this.h=!!e,yl(this,n[1]||"",!0),this.s=Rs(n[2]||""),this.g=Rs(n[3]||"",!0),_l(this,n[4]),this.l=Rs(n[5]||"",!0),pg(this,n[6]||"",!0),this.o=Rs(n[7]||"")):(this.h=!!e,this.i=new fo(null,this.h))}Wi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ns(e,mg,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ns(e,mg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ns(n,n.charAt(0)=="/"?NN:RN,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ns(n,ON)),t.join("")};function jn(t){return new Wi(t)}function yl(t,e,n){t.j=n?Rs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function _l(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function pg(t,e,n){e instanceof fo?(t.i=e,DN(t.i,t.h)):(n||(e=Ns(e,xN)),t.i=new fo(e,t.h))}function Le(t,e,n){t.i.set(e,n)}function bc(t){return Le(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Rs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ns(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,kN),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function kN(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var mg=/[#\/\?@]/g,RN=/[#\?:]/g,NN=/[#\?]/g,xN=/[#\?@]/g,ON=/#/g;function fo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ti(t){t.g||(t.g=new Map,t.h=0,t.i&&AN(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}j=fo.prototype;j.add=function(t,e){Ti(this),this.i=null,t=hs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function c0(t,e){Ti(t),e=hs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function u0(t,e){return Ti(t),e=hs(t,e),t.g.has(e)}j.forEach=function(t,e){Ti(this),this.g.forEach(function(n,i){n.forEach(function(r){t.call(e,r,i,this)},this)},this)};j.oa=function(){Ti(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let s=0;s<r.length;s++)n.push(e[i])}return n};j.W=function(t){Ti(this);let e=[];if(typeof t=="string")u0(this,t)&&(e=e.concat(this.g.get(hs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};j.set=function(t,e){return Ti(this),this.i=null,t=hs(this,t),u0(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};j.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function h0(t,e,n){c0(t,e),0<n.length&&(t.i=null,t.g.set(hs(t,e),hd(n)),t.h+=n.length)}j.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const s=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var r=s;o[i]!==""&&(r+="="+encodeURIComponent(String(o[i]))),t.push(r)}}return this.i=t.join("&")};function hs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function DN(t,e){e&&!t.j&&(Ti(t),t.i=null,t.g.forEach(function(n,i){var r=i.toLowerCase();i!=r&&(c0(this,i),h0(this,r,n))},t)),t.j=e}var PN=class{constructor(e,n){this.h=e,this.g=n}};function f0(t){this.l=t||MN,X.PerformanceNavigationTiming?(t=X.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(X.g&&X.g.Ga&&X.g.Ga()&&X.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var MN=10;function d0(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function p0(t){return t.h?1:t.g?t.g.size:0}function Ph(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Id(t,e){t.g?t.g.add(e):t.h=e}function m0(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}f0.prototype.cancel=function(){if(this.i=g0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function g0(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return hd(t.i)}function Cd(){}Cd.prototype.stringify=function(t){return X.JSON.stringify(t,void 0)};Cd.prototype.parse=function(t){return X.JSON.parse(t,void 0)};function LN(){this.g=new Cd}function FN(t,e,n){const i=n||"";try{a0(t,function(r,s){let o=r;Vo(r)&&(o=_d(r)),e.push(i+s+"="+encodeURIComponent(o))})}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function UN(t,e){const n=new mc;if(X.Image){const i=new Image;i.onload=ga(_a,n,i,"TestLoadImage: loaded",!0,e),i.onerror=ga(_a,n,i,"TestLoadImage: error",!1,e),i.onabort=ga(_a,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=ga(_a,n,i,"TestLoadImage: timeout",!1,e),X.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function _a(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch{}}function Ko(t){this.l=t.ac||null,this.j=t.jb||!1}ht(Ko,Ed);Ko.prototype.g=function(){return new Ec(this.l,this.j)};Ko.prototype.i=function(t){return function(){return t}}({});function Ec(t,e){ot.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Sd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ht(Ec,ot);var Sd=0;j=Ec.prototype;j.open=function(t,e){if(this.readyState!=Sd)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,po(this)};j.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||X).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};j.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Wo(this)),this.readyState=Sd};j.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,po(this)),this.g&&(this.readyState=3,po(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof X.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;y0(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function y0(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}j.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Wo(this):po(this),this.readyState==3&&y0(this)}};j.Va=function(t){this.g&&(this.response=this.responseText=t,Wo(this))};j.Ua=function(t){this.g&&(this.response=t,Wo(this))};j.ga=function(){this.g&&Wo(this)};function Wo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,po(t)}j.setRequestHeader=function(t,e){this.v.append(t,e)};j.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};j.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function po(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ec.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var VN=X.JSON.parse;function Be(t){ot.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=_0,this.K=this.L=!1}ht(Be,ot);var _0="",$N=/^https?$/i,BN=["POST","PUT"];j=Be.prototype;j.Ka=function(t){this.L=t};j.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Nh.g(),this.C=this.u?dg(this.u):dg(Nh),this.g.onreadystatechange=wt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){gg(this,s);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const s of i.keys())n.set(s,i.get(s));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),r=X.FormData&&t instanceof X.FormData,!(0<=Pb(BN,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{E0(this),0<this.B&&((this.K=jN(this.g))?(this.g.timeout=this.B,this.g.ontimeout=wt(this.qa,this)):this.A=bd(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){gg(this,s)}};function jN(t){return zr&&sN()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}j.qa=function(){typeof ud<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ut(this,"timeout"),this.abort(8))};function gg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,v0(t),wc(t)}function v0(t){t.D||(t.D=!0,ut(t,"complete"),ut(t,"error"))}j.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ut(this,"complete"),ut(this,"abort"),wc(this))};j.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),wc(this,!0)),Be.X.M.call(this)};j.Ha=function(){this.s||(this.F||this.v||this.l?b0(this):this.fb())};j.fb=function(){b0(this)};function b0(t){if(t.h&&typeof ud<"u"&&(!t.C[1]||Ln(t)!=4||t.aa()!=2)){if(t.v&&Ln(t)==4)bd(t.Ha,0,t);else if(ut(t,"readystatechange"),Ln(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var r=String(t.H).match(l0)[1]||null;if(!r&&X.self&&X.self.location){var s=X.self.location.protocol;r=s.substr(0,s.length-1)}i=!$N.test(r?r.toLowerCase():"")}n=i}if(n)ut(t,"complete"),ut(t,"success");else{t.m=6;try{var o=2<Ln(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",v0(t)}}finally{wc(t)}}}}function wc(t,e){if(t.g){E0(t);const n=t.g,i=t.C[0]?dl:null;t.g=null,t.C=null,e||ut(t,"ready");try{n.onreadystatechange=i}catch{}}}function E0(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(X.clearTimeout(t.A),t.A=null)}function Ln(t){return t.g?t.g.readyState:0}j.aa=function(){try{return 2<Ln(this)?this.g.status:-1}catch{return-1}};j.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};j.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),VN(e)}};function yg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case _0:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}j.Ea=function(){return this.m};j.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function w0(t){let e="";return dd(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function Ad(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=w0(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Le(t,e,n))}function Cs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function T0(t){this.Ca=0,this.i=[],this.j=new mc,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Cs("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Cs("baseRetryDelayMs",5e3,t),this.bb=Cs("retryDelaySeedMs",1e4,t),this.$a=Cs("forwardChannelMaxRetries",2,t),this.ta=Cs("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new f0(t&&t.concurrentRequestLimit),this.Fa=new LN,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}j=T0.prototype;j.ma=8;j.G=1;function kd(t){if(I0(t),t.G==3){var e=t.U++,n=jn(t.F);Le(n,"SID",t.I),Le(n,"RID",e),Le(n,"TYPE","terminate"),qo(t,n),e=new zo(t,t.j,e,void 0),e.K=2,e.v=bc(jn(n)),n=!1,X.navigator&&X.navigator.sendBeacon&&(n=X.navigator.sendBeacon(e.v.toString(),"")),!n&&X.Image&&(new Image().src=e.v,n=!0),n||(e.g=O0(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ho(e)}N0(t)}function Tc(t){t.g&&(Nd(t),t.g.cancel(),t.g=null)}function I0(t){Tc(t),t.u&&(X.clearTimeout(t.u),t.u=null),vl(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&X.clearTimeout(t.m),t.m=null)}function Ic(t){d0(t.h)||t.m||(t.m=!0,Wb(t.Ja,t),t.C=0)}function zN(t,e){return p0(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Bo(wt(t.Ja,t,e),R0(t,t.C)),t.C++,!0)}j.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new zo(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=Ub(s),Vb(s,this.S)):s=this.S),this.o!==null||this.N||(r.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var i=this.i[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=C0(this,r,e),n=jn(this.F),Le(n,"RID",t),Le(n,"CVER",22),this.D&&Le(n,"X-HTTP-Session-Id",this.D),qo(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(w0(s)))+"&"+e:this.o&&Ad(n,this.o,s)),Id(this.h,r),this.Ya&&Le(n,"TYPE","init"),this.O?(Le(n,"$req",e),Le(n,"SID","null"),r.Z=!0,Oh(r,n,null)):Oh(r,n,e),this.G=2}}else this.G==3&&(t?_g(this,t):this.i.length==0||d0(this.h)||_g(this))};function _g(t,e){var n;e?n=e.m:n=t.U++;const i=jn(t.F);Le(i,"SID",t.I),Le(i,"RID",n),Le(i,"AID",t.T),qo(t,i),t.o&&t.s&&Ad(i,t.o,t.s),n=new zo(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=C0(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Id(t.h,n),Oh(n,i,e)}function qo(t,e){t.ia&&dd(t.ia,function(n,i){Le(e,i,n)}),t.l&&a0({},function(n,i){Le(e,i,n)})}function C0(t,e,n){n=Math.min(t.i.length,n);var i=t.l?wt(t.l.Ra,t.l,t):null;e:{var r=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=r[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let c=r[l].h;const u=r[l].g;if(c-=s,0>c)s=Math.max(0,r[l].h-100),a=!1;else try{FN(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,i}function S0(t){t.g||t.u||(t.Z=1,Wb(t.Ia,t),t.A=0)}function Rd(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Bo(wt(t.Ia,t),R0(t,t.A)),t.A++,!0)}j.Ia=function(){if(this.u=null,A0(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Bo(wt(this.eb,this),t)}};j.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,At(10),Tc(this),A0(this))};function Nd(t){t.B!=null&&(X.clearTimeout(t.B),t.B=null)}function A0(t){t.g=new zo(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=jn(t.sa);Le(e,"RID","rpc"),Le(e,"SID",t.I),Le(e,"CI",t.L?"0":"1"),Le(e,"AID",t.T),Le(e,"TYPE","xmlhttp"),qo(t,e),t.o&&t.s&&Ad(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=bc(jn(e)),n.s=null,n.P=!0,i0(n,t)}j.cb=function(){this.v!=null&&(this.v=null,Tc(this),Rd(this),At(19))};function vl(t){t.v!=null&&(X.clearTimeout(t.v),t.v=null)}function k0(t,e){var n=null;if(t.g==e){vl(t),Nd(t),t.g=null;var i=2}else if(Ph(t.h,e))n=e.D,m0(t.h,e),i=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;i=gc(),ut(i,new Zb(i,n)),Ic(t)}else S0(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(i==1&&zN(t,e)||i==2&&Rd(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Vi(t,5);break;case 4:Vi(t,10);break;case 3:Vi(t,6);break;default:Vi(t,2)}}}function R0(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Vi(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var i=wt(t.kb,t);n||(n=new Wi("//www.google.com/images/cleardot.gif"),X.location&&X.location.protocol=="http"||yl(n,"https"),bc(n)),UN(n.toString(),i)}else At(2);t.G=0,t.l&&t.l.va(e),N0(t),I0(t)}j.kb=function(t){t?(this.j.info("Successfully pinged google.com"),At(2)):(this.j.info("Failed to ping google.com"),At(1))};function N0(t){if(t.G=0,t.la=[],t.l){const e=g0(t.h);(e.length!=0||t.i.length!=0)&&(ag(t.la,e),ag(t.la,t.i),t.h.i.length=0,hd(t.i),t.i.length=0),t.l.ua()}}function x0(t,e,n){var i=n instanceof Wi?jn(n):new Wi(n,void 0);if(i.g!="")e&&(i.g=e+"."+i.g),_l(i,i.m);else{var r=X.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new Wi(null,void 0);i&&yl(s,i),e&&(s.g=e),r&&_l(s,r),n&&(s.l=n),i=s}return n=t.D,e=t.za,n&&e&&Le(i,n,e),Le(i,"VER",t.ma),qo(t,i),i}function O0(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Be(new Ko({jb:!0})):new Be(t.ra),e.Ka(t.H),e}function D0(){}j=D0.prototype;j.xa=function(){};j.wa=function(){};j.va=function(){};j.ua=function(){};j.Ra=function(){};function bl(){if(zr&&!(10<=Number(oN)))throw Error("Environmental error: no available transport.")}bl.prototype.g=function(t,e){return new Ht(t,e)};function Ht(t,e){ot.call(this),this.g=new T0(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!pl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!pl(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new fs(this)}ht(Ht,ot);Ht.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;At(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=x0(t,null,t.V),Ic(t)};Ht.prototype.close=function(){kd(this.g)};Ht.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=_d(t),t=n);e.i.push(new PN(e.ab++,t)),e.G==3&&Ic(e)};Ht.prototype.M=function(){this.g.l=null,delete this.j,kd(this.g),delete this.g,Ht.X.M.call(this)};function P0(t){wd.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ht(P0,wd);function M0(){Td.call(this),this.status=1}ht(M0,Td);function fs(t){this.g=t}ht(fs,D0);fs.prototype.xa=function(){ut(this.g,"a")};fs.prototype.wa=function(t){ut(this.g,new P0(t))};fs.prototype.va=function(t){ut(this.g,new M0)};fs.prototype.ua=function(){ut(this.g,"b")};bl.prototype.createWebChannel=bl.prototype.g;Ht.prototype.send=Ht.prototype.u;Ht.prototype.open=Ht.prototype.m;Ht.prototype.close=Ht.prototype.close;yc.NO_ERROR=0;yc.TIMEOUT=8;yc.HTTP_ERROR=6;e0.COMPLETE="complete";t0.EventType=jo;jo.OPEN="a";jo.CLOSE="b";jo.ERROR="c";jo.MESSAGE="d";ot.prototype.listen=ot.prototype.N;Be.prototype.listenOnce=Be.prototype.O;Be.prototype.getLastError=Be.prototype.Oa;Be.prototype.getLastErrorCode=Be.prototype.Ea;Be.prototype.getStatus=Be.prototype.aa;Be.prototype.getResponseJson=Be.prototype.Sa;Be.prototype.getResponseText=Be.prototype.fa;Be.prototype.send=Be.prototype.da;Be.prototype.setWithCredentials=Be.prototype.Ka;var HN=function(){return new bl},KN=function(){return gc()},Iu=yc,WN=e0,qN=ar,vg={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},GN=Ko,va=t0,YN=Be;const bg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let ds="9.20.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er=new Oo("@firebase/firestore");function Eg(){return er.logLevel}function z(t,...e){if(er.logLevel<=me.DEBUG){const n=e.map(xd);er.debug(`Firestore (${ds}): ${t}`,...n)}}function zn(t,...e){if(er.logLevel<=me.ERROR){const n=e.map(xd);er.error(`Firestore (${ds}): ${t}`,...n)}}function El(t,...e){if(er.logLevel<=me.WARN){const n=e.map(xd);er.warn(`Firestore (${ds}): ${t}`,...n)}}function xd(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${ds}) INTERNAL ASSERTION FAILED: `+t;throw zn(e),new Error(e)}function Pe(t,e){t||Y()}function te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Qn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class L0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class QN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(pt.UNAUTHENTICATED))}shutdown(){}}class XN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class JN{constructor(e){this.t=e,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const r=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let s=new Un;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Un,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Un)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Pe(typeof i.accessToken=="string"),new L0(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Pe(e===null||typeof e=="string"),new pt(e)}}class ZN{constructor(e,n,i){this.h=e,this.l=n,this.m=i,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class ex{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new ZN(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class tx{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nx{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const i=s=>{s.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>i(s))};const r=s=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?r(s):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Pe(typeof n.token=="string"),this.T=n.token,new tx(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function ix(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const r=ix(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=e.charAt(r[s]%e.length))}return i}}function _e(t,e){return t<e?-1:t>e?1:0}function Hr(t,e,n){return t.length===e.length&&t.every((i,r)=>n(i,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new Qe(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new Qe(0,0))}static max(){return new Z(new Qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,n,i){n===void 0?n=0:n>e.length&&Y(),i===void 0?i=e.length-n:i>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return mo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof mo?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let r=0;r<i;r++){const s=e.get(r),o=n.get(r);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Fe extends mo{construct(e,n,i){return new Fe(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new q(A.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(r=>r.length>0))}return new Fe(n)}static emptyPath(){return new Fe([])}}const rx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class vt extends mo{construct(e,n,i){return new vt(e,n,i)}static isValidIdentifier(e){return rx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),vt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new vt(["__name__"])}static fromServerFormat(e){const n=[];let i="",r=0;const s=()=>{if(i.length===0)throw new q(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new q(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new q(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(i+=a,r++):(s(),r++)}if(s(),o)throw new q(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new vt(n)}static emptyPath(){return new vt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(Fe.fromString(e))}static fromName(e){return new G(Fe.fromString(e).popFirst(5))}static empty(){return new G(Fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new Fe(e.slice()))}}function sx(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,r=Z.fromTimestamp(i===1e9?new Qe(n+1,0):new Qe(n,i));return new gi(r,G.empty(),e)}function ox(t){return new gi(t.readTime,t.key,-1)}class gi{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new gi(Z.min(),G.empty(),-1)}static max(){return new gi(Z.max(),G.empty(),-1)}}function ax(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:_e(t.largestBatchId,e.largestBatchId))}/**
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
 */const lx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Go(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==lx)throw t;z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((i,r)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(i,r)},this.catchCallback=s=>{this.wrapFailure(n,s).next(i,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,i)=>{n(e)})}static reject(e){return new R((n,i)=>{i(e)})}static waitFor(e){return new R((n,i)=>{let r=0,s=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++s,o&&s===r&&n()},l=>i(l))}),o=!0,s===r&&n()})}static or(e){let n=R.resolve(!1);for(const i of e)n=n.next(r=>r?R.resolve(r):i());return n}static forEach(e,n){const i=[];return e.forEach((r,s)=>{i.push(n.call(this,r,s))}),this.waitFor(i)}static mapArray(e,n){return new R((i,r)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===s&&i(o)},u=>r(u))}})}static doWhile(e,n){return new R((i,r)=>{const s=()=>{e()===!0?n().next(()=>{s()},r):i()};s()})}}function Yo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Od{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ot(i),this.ut=i=>n.writeSequenceNumber(i))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Od.ct=-1;function Cc(t){return t==null}function wl(t){return t===0&&1/t==-1/0}function ux(t){return typeof t=="number"&&Number.isInteger(t)&&!wl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function lr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function U0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new et(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(e,i.key);if(r===0)return n+i.left.size;r<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ba(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ba(this.root,e,this.comparator,!1)}getReverseIterator(){return new ba(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ba(this.root,e,this.comparator,!0)}}class ba{constructor(e,n,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?i(e.key,n):1,n&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i??at.RED,this.left=r??at.EMPTY,this.right=s??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,r,s){return new at(e??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return at.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(t,e,n,i,r){return this}insert(t,e,n){return new at(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Tg(this.data.getIterator())}getIteratorFrom(e){return new Tg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Je(this.comparator);return n.data=e,n}}class Tg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class sn{constructor(e){this.fields=e,e.sort(vt.comparator)}static empty(){return new sn([])}unionWith(e){let n=new Je(vt.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new sn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Hr(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class hx extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class It{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new hx("Invalid base64 string: "+r):r}}(e);return new It(n)}static fromUint8Array(e){const n=function(i){let r="";for(let s=0;s<i.length;++s)r+=String.fromCharCode(i[s]);return r}(e);return new It(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}It.EMPTY_BYTE_STRING=new It("");const fx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yi(t){if(Pe(!!t),typeof t=="string"){let e=0;const n=fx.exec(t);if(Pe(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:qe(t.seconds),nanos:qe(t.nanos)}}function qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Kr(t){return typeof t=="string"?It.fromBase64String(t):It.fromUint8Array(t)}/**
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
 */function V0(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function $0(t){const e=t.mapValue.fields.__previous_value__;return V0(e)?$0(e):e}function go(t){const e=yi(t.mapValue.fields.__local_write_time__.timestampValue);return new Qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(e,n,i,r,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class yo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new yo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof yo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ea={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function tr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?V0(t)?4:px(t)?9007199254740991:10:Y()}function Rn(t,e){if(t===e)return!0;const n=tr(t);if(n!==tr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return go(t).isEqual(go(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const s=yi(i.timestampValue),o=yi(r.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,r){return Kr(i.bytesValue).isEqual(Kr(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,r){return qe(i.geoPointValue.latitude)===qe(r.geoPointValue.latitude)&&qe(i.geoPointValue.longitude)===qe(r.geoPointValue.longitude)}(t,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return qe(i.integerValue)===qe(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const s=qe(i.doubleValue),o=qe(r.doubleValue);return s===o?wl(s)===wl(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Hr(t.arrayValue.values||[],e.arrayValue.values||[],Rn);case 10:return function(i,r){const s=i.mapValue.fields||{},o=r.mapValue.fields||{};if(wg(s)!==wg(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Rn(s[a],o[a])))return!1;return!0}(t,e);default:return Y()}}function _o(t,e){return(t.values||[]).find(n=>Rn(n,e))!==void 0}function Wr(t,e){if(t===e)return 0;const n=tr(t),i=tr(e);if(n!==i)return _e(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return _e(t.booleanValue,e.booleanValue);case 2:return function(r,s){const o=qe(r.integerValue||r.doubleValue),a=qe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Ig(t.timestampValue,e.timestampValue);case 4:return Ig(go(t),go(e));case 5:return _e(t.stringValue,e.stringValue);case 6:return function(r,s){const o=Kr(r),a=Kr(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,s){const o=r.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=_e(o[l],a[l]);if(c!==0)return c}return _e(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,s){const o=_e(qe(r.latitude),qe(s.latitude));return o!==0?o:_e(qe(r.longitude),qe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,s){const o=r.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Wr(o[l],a[l]);if(c)return c}return _e(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,s){if(r===Ea.mapValue&&s===Ea.mapValue)return 0;if(r===Ea.mapValue)return 1;if(s===Ea.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),l=s.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=_e(a[u],c[u]);if(h!==0)return h;const f=Wr(o[a[u]],l[c[u]]);if(f!==0)return f}return _e(a.length,c.length)}(t.mapValue,e.mapValue);default:throw Y()}}function Ig(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return _e(t,e);const n=yi(t),i=yi(e),r=_e(n.seconds,i.seconds);return r!==0?r:_e(n.nanos,i.nanos)}function qr(t){return Mh(t)}function Mh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const r=yi(i);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Kr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,G.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let r="[",s=!0;for(const o of i.values||[])s?s=!1:r+=",",r+=Mh(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(i){const r=Object.keys(i.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Mh(i.fields[a])}`;return s+"}"}(t.mapValue):Y();var e,n}function Lh(t){return!!t&&"integerValue"in t}function Dd(t){return!!t&&"arrayValue"in t}function Cg(t){return!!t&&"nullValue"in t}function Sg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ba(t){return!!t&&"mapValue"in t}function js(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return lr(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=js(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=js(t.arrayValue.values[n]);return e}return Object.assign({},t)}function px(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.value=e}static empty(){return new Vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Ba(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=js(n)}setAll(e){let n=vt.emptyPath(),i={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,r),i={},r=[],n=a.popLast()}o?i[a.lastSegment()]=js(o):r.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,i,r)}delete(e){const n=this.field(e.popLast());Ba(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Rn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let r=n.mapValue.fields[e.get(i)];Ba(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,i){lr(n,(r,s)=>e[r]=s);for(const r of i)delete e[r]}clone(){return new Vt(js(this.value))}}function B0(t){const e=[];return lr(t.fields,(n,i)=>{const r=new vt([n]);if(Ba(i)){const s=B0(i.mapValue).fields;if(s.length===0)e.push(r);else for(const o of s)e.push(r.child(o))}else e.push(r)}),new sn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,n,i,r,s,o,a){this.key=e,this.documentType=n,this.version=i,this.readTime=r,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new yt(e,0,Z.min(),Z.min(),Z.min(),Vt.empty(),0)}static newFoundDocument(e,n,i,r){return new yt(e,1,n,Z.min(),i,r,0)}static newNoDocument(e,n){return new yt(e,2,n,Z.min(),Z.min(),Vt.empty(),0)}static newUnknownDocument(e,n){return new yt(e,3,n,Z.min(),Z.min(),Vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof yt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Tl{constructor(e,n){this.position=e,this.inclusive=n}}function Ag(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(s.field.isKeyField()?i=G.comparator(G.fromName(o.referenceValue),n.key):i=Wr(o,n.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return i}function kg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Rn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class zs{constructor(e,n="asc"){this.field=e,this.dir=n}}function mx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class j0{}class Xe extends j0{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new yx(e,n,i):n==="array-contains"?new bx(e,i):n==="in"?new Ex(e,i):n==="not-in"?new wx(e,i):n==="array-contains-any"?new Tx(e,i):new Xe(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new _x(e,i):new vx(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Wr(n,this.value)):n!==null&&tr(this.value)===tr(n)&&this.matchesComparison(Wr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Nn extends j0{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Nn(e,n)}matches(e){return z0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function z0(t){return t.op==="and"}function H0(t){return gx(t)&&z0(t)}function gx(t){for(const e of t.filters)if(e instanceof Nn)return!1;return!0}function Fh(t){if(t instanceof Xe)return t.field.canonicalString()+t.op.toString()+qr(t.value);if(H0(t))return t.filters.map(e=>Fh(e)).join(",");{const e=t.filters.map(n=>Fh(n)).join(",");return`${t.op}(${e})`}}function K0(t,e){return t instanceof Xe?function(n,i){return i instanceof Xe&&n.op===i.op&&n.field.isEqual(i.field)&&Rn(n.value,i.value)}(t,e):t instanceof Nn?function(n,i){return i instanceof Nn&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((r,s,o)=>r&&K0(s,i.filters[o]),!0):!1}(t,e):void Y()}function W0(t){return t instanceof Xe?function(e){return`${e.field.canonicalString()} ${e.op} ${qr(e.value)}`}(t):t instanceof Nn?function(e){return e.op.toString()+" {"+e.getFilters().map(W0).join(" ,")+"}"}(t):"Filter"}class yx extends Xe{constructor(e,n,i){super(e,n,i),this.key=G.fromName(i.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class _x extends Xe{constructor(e,n){super(e,"in",n),this.keys=q0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class vx extends Xe{constructor(e,n){super(e,"not-in",n),this.keys=q0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function q0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>G.fromName(i.referenceValue))}class bx extends Xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Dd(n)&&_o(n.arrayValue,this.value)}}class Ex extends Xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&_o(this.value.arrayValue,n)}}class wx extends Xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(_o(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!_o(this.value.arrayValue,n)}}class Tx extends Xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Dd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>_o(this.value.arrayValue,i))}}/**
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
 */class Ix{constructor(e,n=null,i=[],r=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=r,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function Rg(t,e=null,n=[],i=[],r=null,s=null,o=null){return new Ix(t,e,n,i,r,s,o)}function Pd(t){const e=te(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>Fh(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),Cc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>qr(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>qr(i)).join(",")),e.ft=n}return e.ft}function Md(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!mx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!K0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!kg(t.startAt,e.startAt)&&kg(t.endAt,e.endAt)}function Uh(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e,n=null,i=[],r=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this.wt=null,this.startAt,this.endAt}}function Cx(t,e,n,i,r,s,o,a){return new Sc(t,e,n,i,r,s,o,a)}function Ac(t){return new Sc(t)}function Ng(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Sx(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ax(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function kx(t){return t.collectionGroup!==null}function Pr(t){const e=te(t);if(e.dt===null){e.dt=[];const n=Ax(e),i=Sx(e);if(n!==null&&i===null)n.isKeyField()||e.dt.push(new zs(n)),e.dt.push(new zs(vt.keyField(),"asc"));else{let r=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(r=!0);if(!r){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new zs(vt.keyField(),s))}}}return e.dt}function Hn(t){const e=te(t);if(!e.wt)if(e.limitType==="F")e.wt=Rg(e.path,e.collectionGroup,Pr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Pr(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new zs(s.field,o))}const i=e.endAt?new Tl(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Tl(e.startAt.position,e.startAt.inclusive):null;e.wt=Rg(e.path,e.collectionGroup,n,e.filters,e.limit,i,r)}return e.wt}function Vh(t,e,n){return new Sc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function kc(t,e){return Md(Hn(t),Hn(e))&&t.limitType===e.limitType}function G0(t){return`${Pd(Hn(t))}|lt:${t.limitType}`}function $h(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>W0(i)).join(", ")}]`),Cc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>qr(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>qr(i)).join(",")),`Target(${n})`}(Hn(t))}; limitType=${t.limitType})`}function Rc(t,e){return e.isFoundDocument()&&function(n,i){const r=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):G.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,i){for(const r of Pr(n))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const r of n.filters)if(!r.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!function(r,s,o){const a=Ag(r,s,o);return r.inclusive?a<=0:a<0}(n.startAt,Pr(n),i)||n.endAt&&!function(r,s,o){const a=Ag(r,s,o);return r.inclusive?a>=0:a>0}(n.endAt,Pr(n),i))}(t,e)}function Rx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Y0(t){return(e,n)=>{let i=!1;for(const r of Pr(t)){const s=Nx(r,e,n);if(s!==0)return s;i=i||r.field.isKeyField()}return 0}}function Nx(t,e,n){const i=t.field.isKeyField()?G.comparator(e.key,n.key):function(r,s,o){const a=s.data.field(r),l=o.data.field(r);return a!==null&&l!==null?Wr(a,l):Y()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Y()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[r,s]of i)if(this.equalsFn(r,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),r=this.inner[i];if(r===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return i.length===1?delete this.inner[n]:i.splice(r,1),this.innerSize--,!0;return!1}forEach(e){lr(this.inner,(n,i)=>{for(const[r,s]of i)e(r,s)})}isEmpty(){return U0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xx=new et(G.comparator);function Kn(){return xx}const Q0=new et(G.comparator);function xs(...t){let e=Q0;for(const n of t)e=e.insert(n.key,n);return e}function X0(t){let e=Q0;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function $i(){return Hs()}function J0(){return Hs()}function Hs(){return new ps(t=>t.toString(),(t,e)=>t.isEqual(e))}const Ox=new et(G.comparator),Dx=new Je(G.comparator);function le(...t){let e=Dx;for(const n of t)e=e.add(n);return e}const Px=new Je(_e);function Z0(){return Px}/**
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
 */function eE(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wl(e)?"-0":e}}function tE(t){return{integerValue:""+t}}function Mx(t,e){return ux(e)?tE(e):eE(t,e)}/**
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
 */class Nc{constructor(){this._=void 0}}function Lx(t,e,n){return t instanceof Il?function(i,r){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&(s.fields.__previous_value__=r),{mapValue:s}}(n,e):t instanceof vo?iE(t,e):t instanceof bo?rE(t,e):function(i,r){const s=nE(i,r),o=xg(s)+xg(i._t);return Lh(s)&&Lh(i._t)?tE(o):eE(i.serializer,o)}(t,e)}function Fx(t,e,n){return t instanceof vo?iE(t,e):t instanceof bo?rE(t,e):n}function nE(t,e){return t instanceof Cl?Lh(n=e)||function(i){return!!i&&"doubleValue"in i}(n)?e:{integerValue:0}:null;var n}class Il extends Nc{}class vo extends Nc{constructor(e){super(),this.elements=e}}function iE(t,e){const n=sE(e);for(const i of t.elements)n.some(r=>Rn(r,i))||n.push(i);return{arrayValue:{values:n}}}class bo extends Nc{constructor(e){super(),this.elements=e}}function rE(t,e){let n=sE(e);for(const i of t.elements)n=n.filter(r=>!Rn(r,i));return{arrayValue:{values:n}}}class Cl extends Nc{constructor(e,n){super(),this.serializer=e,this._t=n}}function xg(t){return qe(t.integerValue||t.doubleValue)}function sE(t){return Dd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Ux(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof vo&&i instanceof vo||n instanceof bo&&i instanceof bo?Hr(n.elements,i.elements,Rn):n instanceof Cl&&i instanceof Cl?Rn(n._t,i._t):n instanceof Il&&i instanceof Il}(t.transform,e.transform)}class Vx{constructor(e,n){this.version=e,this.transformResults=n}}class Vn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Vn}static exists(e){return new Vn(void 0,e)}static updateTime(e){return new Vn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ja(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class xc{}function oE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new lE(t.key,Vn.none()):new Oc(t.key,t.data,Vn.none());{const n=t.data,i=Vt.empty();let r=new Je(vt.comparator);for(let s of e.fields)if(!r.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?i.delete(s):i.set(s,o),r=r.add(s)}return new cr(t.key,i,new sn(r.toArray()),Vn.none())}}function $x(t,e,n){t instanceof Oc?function(i,r,s){const o=i.value.clone(),a=Dg(i.fieldTransforms,r,s.transformResults);o.setAll(a),r.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof cr?function(i,r,s){if(!ja(i.precondition,r))return void r.convertToUnknownDocument(s.version);const o=Dg(i.fieldTransforms,r,s.transformResults),a=r.data;a.setAll(aE(i)),a.setAll(o),r.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(i,r,s){r.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Ks(t,e,n,i){return t instanceof Oc?function(r,s,o,a){if(!ja(r.precondition,s))return o;const l=r.value.clone(),c=Pg(r.fieldTransforms,a,s);return l.setAll(c),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,i):t instanceof cr?function(r,s,o,a){if(!ja(r.precondition,s))return o;const l=Pg(r.fieldTransforms,a,s),c=s.data;return c.setAll(aE(r)),c.setAll(l),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,i):function(r,s,o){return ja(r.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function Bx(t,e){let n=null;for(const i of t.fieldTransforms){const r=e.data.field(i.field),s=nE(i.transform,r||null);s!=null&&(n===null&&(n=Vt.empty()),n.set(i.field,s))}return n||null}function Og(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Hr(n,i,(r,s)=>Ux(r,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Oc extends xc{constructor(e,n,i,r=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class cr extends xc{constructor(e,n,i,r,s=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function aE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function Dg(t,e,n){const i=new Map;Pe(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,Fx(o,a,n[r]))}return i}function Pg(t,e,n){const i=new Map;for(const r of t){const s=r.transform,o=n.data.field(r.field);i.set(r.field,Lx(s,o,e))}return i}class lE extends xc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jx extends xc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{constructor(e,n,i,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(e.key)&&$x(s,e,i[r])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=Ks(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=Ks(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=J0();return this.mutations.forEach(r=>{const s=e.get(r.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(r.key)?null:a;const l=oE(o,a);l!==null&&i.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(Z.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&Hr(this.mutations,e.mutations,(n,i)=>Og(n,i))&&Hr(this.baseMutations,e.baseMutations,(n,i)=>Og(n,i))}}class Ld{constructor(e,n,i,r){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=r}static from(e,n,i){Pe(e.mutations.length===i.length);let r=Ox;const s=e.mutations;for(let o=0;o<s.length;o++)r=r.insert(s[o].key,i[o].version);return new Ld(e,n,i,r)}}/**
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
 */class Hx{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Kx{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var We,ue;function Wx(t){switch(t){default:return Y();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function cE(t){if(t===void 0)return zn("GRPC error has no .code"),A.UNKNOWN;switch(t){case We.OK:return A.OK;case We.CANCELLED:return A.CANCELLED;case We.UNKNOWN:return A.UNKNOWN;case We.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case We.INTERNAL:return A.INTERNAL;case We.UNAVAILABLE:return A.UNAVAILABLE;case We.UNAUTHENTICATED:return A.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case We.NOT_FOUND:return A.NOT_FOUND;case We.ALREADY_EXISTS:return A.ALREADY_EXISTS;case We.PERMISSION_DENIED:return A.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case We.ABORTED:return A.ABORTED;case We.OUT_OF_RANGE:return A.OUT_OF_RANGE;case We.UNIMPLEMENTED:return A.UNIMPLEMENTED;case We.DATA_LOSS:return A.DATA_LOSS;default:return Y()}}(ue=We||(We={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Fd{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return wa}static getOrCreateInstance(){return wa===null&&(wa=new Fd),wa}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let wa=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,n,i,r,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const r=new Map;return r.set(e,Qo.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new Dc(Z.min(),r,Z0(),Kn(),le())}}class Qo{constructor(e,n,i,r,s){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new Qo(i,n,le(),le(),le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e,n,i,r){this.It=e,this.removedTargetIds=n,this.key=i,this.Tt=r}}class uE{constructor(e,n){this.targetId=e,this.Et=n}}class hE{constructor(e,n,i=It.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=r}}class Mg{constructor(){this.At=0,this.Rt=Fg(),this.vt=It.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=le(),n=le(),i=le();return this.Rt.forEach((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:i=i.add(r);break;default:Y()}}),new Qo(this.vt,this.bt,e,n,i)}xt(){this.Pt=!1,this.Rt=Fg()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class qx{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=Kn(),this.qt=Lg(),this.Ut=new Je(_e)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const i=this.jt(n);switch(e.state){case 0:this.Wt(n)&&i.Dt(e.resumeToken);break;case 1:i.$t(),i.Vt||i.xt(),i.Dt(e.resumeToken);break;case 2:i.$t(),i.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(i.Mt(),i.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),i.Dt(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((i,r)=>{this.Wt(r)&&n(r)})}Jt(e){var n;const i=e.targetId,r=e.Et.count,s=this.Yt(i);if(s){const o=s.target;if(Uh(o))if(r===0){const a=new G(o.path);this.Qt(i,a,yt.newNoDocument(a,Z.min()))}else Pe(r===1);else{const a=this.Zt(i);a!==r&&(this.Ht(i),this.Ut=this.Ut.add(i),(n=Fd.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((s,o)=>{const a=this.Yt(o);if(a){if(s.current&&Uh(a.target)){const l=new G(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,yt.newNoDocument(l,e))}s.St&&(n.set(o,s.Ct()),s.xt())}});let i=le();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Yt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(i=i.add(s))}),this.Lt.forEach((s,o)=>o.setReadTime(e));const r=new Dc(e,n,this.Ut,this.Lt,i);return this.Lt=Kn(),this.qt=Lg(),this.Ut=new Je(_e),r}Gt(e,n){if(!this.Wt(e))return;const i=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,i),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,i){if(!this.Wt(e))return;const r=this.jt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),i&&(this.Lt=this.Lt.insert(n,i))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new Mg,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Je(_e),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||z("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new Mg),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function Lg(){return new et(G.comparator)}function Fg(){return new et(G.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gx=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Yx=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Qx=(()=>({and:"AND",or:"OR"}))();class Xx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Sl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Jx(t,e){return Sl(t,e.toTimestamp())}function Tn(t){return Pe(!!t),Z.fromTimestamp(function(e){const n=yi(e);return new Qe(n.seconds,n.nanos)}(t))}function Ud(t,e){return function(n){return new Fe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function dE(t){const e=Fe.fromString(t);return Pe(yE(e)),e}function Bh(t,e){return Ud(t.databaseId,e.path)}function Cu(t,e){const n=dE(e);if(n.get(1)!==t.databaseId.projectId)throw new q(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(pE(n))}function jh(t,e){return Ud(t.databaseId,e)}function Zx(t){const e=dE(t);return e.length===4?Fe.emptyPath():pE(e)}function zh(t){return new Fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function pE(t){return Pe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ug(t,e,n){return{name:Bh(t,e),fields:n.value.mapValue.fields}}function eO(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=function(l,c){return l.useProto3Json?(Pe(c===void 0||typeof c=="string"),It.fromBase64String(c||"")):(Pe(c===void 0||c instanceof Uint8Array),It.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?A.UNKNOWN:cE(l.code);return new q(c,l.message||"")}(o);n=new hE(i,r,s,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=Cu(t,i.document.name),s=Tn(i.document.updateTime),o=i.document.createTime?Tn(i.document.createTime):Z.min(),a=new Vt({mapValue:{fields:i.document.fields}}),l=yt.newFoundDocument(r,s,o,a),c=i.targetIds||[],u=i.removedTargetIds||[];n=new za(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=Cu(t,i.document),s=i.readTime?Tn(i.readTime):Z.min(),o=yt.newNoDocument(r,s),a=i.removedTargetIds||[];n=new za([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=Cu(t,i.document),s=i.removedTargetIds||[];n=new za([],s,r,null)}else{if(!("filter"in e))return Y();{e.filter;const i=e.filter;i.targetId;const r=i.count||0,s=new Kx(r),o=i.targetId;n=new uE(o,s)}}return n}function tO(t,e){let n;if(e instanceof Oc)n={update:Ug(t,e.key,e.value)};else if(e instanceof lE)n={delete:Bh(t,e.key)};else if(e instanceof cr)n={update:Ug(t,e.key,e.data),updateMask:uO(e.fieldMask)};else{if(!(e instanceof jx))return Y();n={verify:Bh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(r,s){const o=s.transform;if(o instanceof Il)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof vo)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof bo)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Cl)return{fieldPath:s.field.canonicalString(),increment:o._t};throw Y()}(0,i))),e.precondition.isNone||(n.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:Jx(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:Y()}(t,e.precondition)),n}function nO(t,e){return t&&t.length>0?(Pe(e!==void 0),t.map(n=>function(i,r){let s=i.updateTime?Tn(i.updateTime):Tn(r);return s.isEqual(Z.min())&&(s=Tn(r)),new Vx(s,i.transformResults||[])}(n,e))):[]}function iO(t,e){return{documents:[jh(t,e.path)]}}function rO(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=jh(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=jh(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(l){if(l.length!==0)return gE(Nn.create(l,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const s=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:yr(u.field),direction:aO(u.dir)}}(c))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,c){return l.useProto3Json||Cc(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function sO(t){let e=Zx(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){Pe(i===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=function(u){const h=mE(u);return h instanceof Nn&&H0(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new zs(_r(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Cc(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,f=u.values||[];return new Tl(f,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,f=u.values||[];return new Tl(f,h)}(n.endAt)),Cx(e,r,o,s,a,"F",l,c)}function oO(t,e){const n=function(i,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Y()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function mE(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=_r(e.unaryFilter.field);return Xe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=_r(e.unaryFilter.field);return Xe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=_r(e.unaryFilter.field);return Xe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=_r(e.unaryFilter.field);return Xe.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(e){return Xe.create(_r(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Nn.create(e.compositeFilter.filters.map(n=>mE(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return Y()}}(e.compositeFilter.op))}(t):Y()}function aO(t){return Gx[t]}function lO(t){return Yx[t]}function cO(t){return Qx[t]}function yr(t){return{fieldPath:t.canonicalString()}}function _r(t){return vt.fromServerFormat(t.fieldPath)}function gE(t){return t instanceof Xe?function(e){if(e.op==="=="){if(Sg(e.value))return{unaryFilter:{field:yr(e.field),op:"IS_NAN"}};if(Cg(e.value))return{unaryFilter:{field:yr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Sg(e.value))return{unaryFilter:{field:yr(e.field),op:"IS_NOT_NAN"}};if(Cg(e.value))return{unaryFilter:{field:yr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:yr(e.field),op:lO(e.op),value:e.value}}}(t):t instanceof Nn?function(e){const n=e.getFilters().map(i=>gE(i));return n.length===1?n[0]:{compositeFilter:{op:cO(e.op),filters:n}}}(t):Y()}function uO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function yE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,n,i,r,s=Z.min(),o=Z.min(),a=It.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new qi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new qi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new qi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hO{constructor(e){this.se=e}}function fO(t){const e=sO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Vh(e,e.limit,"L"):e}/**
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
 */class dO{constructor(){this.He=new pO}addToCollectionParentIndex(e,n){return this.He.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(gi.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(gi.min())}updateCollectionGroup(e,n,i){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class pO{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n]||new Je(Fe.comparator),s=!r.has(i);return this.index[n]=r.add(i),s}has(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n];return r&&r.has(i)}getEntries(e){return(this.index[e]||new Je(Fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new Gr(0)}static bn(){return new Gr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mO{constructor(){this.changes=new ps(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,yt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?R.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class gO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yO{constructor(e,n,i,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=r}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(i=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(i!==null&&Ks(i.mutation,r,sn.empty(),Qe.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,le()).next(()=>i))}getLocalViewOfDocuments(e,n,i=le()){const r=$i();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,i).next(s=>{let o=xs();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const i=$i();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,le()))}populateOverlays(e,n,i){const r=[];return i.forEach(s=>{n.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(e,r).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,i,r){let s=Kn();const o=Hs(),a=Hs();return n.forEach((l,c)=>{const u=i.get(c.key);r.has(c.key)&&(u===void 0||u.mutation instanceof cr)?s=s.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Ks(u.mutation,c,u.mutation.getFieldMask(),Qe.now())):o.set(c.key,sn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new gO(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const i=Hs();let r=new et((o,a)=>o-a),s=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=i.get(l)||sn.empty();u=a.applyToLocalView(c,u),i.set(l,u);const h=(r.get(a.batchId)||le()).add(l);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=J0();u.forEach(f=>{if(!s.has(f)){const d=oE(n.get(f),i.get(f));d!==null&&h.set(f,d),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return R.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i){return function(r){return G.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):kx(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i):this.getDocumentsMatchingCollectionQuery(e,n,i)}getNextDocuments(e,n,i,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,r).next(s=>{const o=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,r-s.size):R.resolve($i());let a=-1,l=s;return o.next(c=>R.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?R.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,le())).next(u=>({batchId:a,changes:X0(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(i=>{let r=xs();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,i){const r=n.collectionGroup;let s=xs();return this.indexManager.getCollectionParents(e,r).next(o=>R.forEach(o,a=>{const l=function(c,u){return new Sc(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,l,i).next(c=>{c.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(s=>(r=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,r))).next(s=>{r.forEach((a,l)=>{const c=l.getKey();s.get(c)===null&&(s=s.insert(c,yt.newInvalidDocument(c)))});let o=xs();return s.forEach((a,l)=>{const c=r.get(a);c!==void 0&&Ks(c.mutation,l,sn.empty(),Qe.now()),Rc(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class _O{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return R.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var i;return this.Zn.set(n.id,{id:(i=n).id,version:i.version,createTime:Tn(i.createTime)}),R.resolve()}getNamedQuery(e,n){return R.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(i){return{name:i.name,query:fO(i.bundledQuery),readTime:Tn(i.readTime)}}(n)),R.resolve()}}/**
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
 */class vO{constructor(){this.overlays=new et(G.comparator),this.ts=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const i=$i();return R.forEach(n,r=>this.getOverlay(e,r).next(s=>{s!==null&&i.set(r,s)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((r,s)=>{this.re(e,n,s)}),R.resolve()}removeOverlaysForBatchId(e,n,i){const r=this.ts.get(i);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.ts.delete(i)),R.resolve()}getOverlaysForCollection(e,n,i){const r=$i(),s=n.length+1,o=new G(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>i&&r.set(l.getKey(),l)}return R.resolve(r)}getOverlaysForCollectionGroup(e,n,i,r){let s=new et((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>i){let u=s.get(c.largestBatchId);u===null&&(u=$i(),s=s.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=$i(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=r)););return R.resolve(a)}re(e,n,i){const r=this.overlays.get(i.key);if(r!==null){const o=this.ts.get(r.largestBatchId).delete(i.key);this.ts.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new Hx(n,i));let s=this.ts.get(n);s===void 0&&(s=le(),this.ts.set(n,s)),this.ts.set(n,s.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(){this.es=new Je(it.ns),this.ss=new Je(it.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const i=new it(e,n);this.es=this.es.add(i),this.ss=this.ss.add(i)}os(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.us(new it(e,n))}cs(e,n){e.forEach(i=>this.removeReference(i,n))}hs(e){const n=new G(new Fe([])),i=new it(n,e),r=new it(n,e+1),s=[];return this.ss.forEachInRange([i,r],o=>{this.us(o),s.push(o.key)}),s}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new G(new Fe([])),i=new it(n,e),r=new it(n,e+1);let s=le();return this.ss.forEachInRange([i,r],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new it(e,0),i=this.es.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class it{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return G.comparator(e.key,n.key)||_e(e.ds,n.ds)}static rs(e,n){return _e(e.ds,n.ds)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new Je(it.ns)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,r){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new zx(s,n,i,r);this.mutationQueue.push(o);for(const a of r)this._s=this._s.add(new it(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,r=this.ys(i),s=r<0?0:r;return R.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new it(n,0),r=new it(n,Number.POSITIVE_INFINITY),s=[];return this._s.forEachInRange([i,r],o=>{const a=this.gs(o.ds);s.push(a)}),R.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new Je(_e);return n.forEach(r=>{const s=new it(r,0),o=new it(r,Number.POSITIVE_INFINITY);this._s.forEachInRange([s,o],a=>{i=i.add(a.ds)})}),R.resolve(this.ps(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,r=i.length+1;let s=i;G.isDocumentKey(s)||(s=s.child(""));const o=new it(new G(s),0);let a=new Je(_e);return this._s.forEachWhile(l=>{const c=l.key.path;return!!i.isPrefixOf(c)&&(c.length===r&&(a=a.add(l.ds)),!0)},o),R.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(i=>{const r=this.gs(i);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Pe(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this._s;return R.forEach(n.mutations,r=>{const s=new it(r.key,n.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this._s=i})}En(e){}containsKey(e,n){const i=new it(n,0),r=this._s.firstAfterOrEqual(i);return R.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EO{constructor(e){this.Ts=e,this.docs=new et(G.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,r=this.docs.get(i),s=r?r.size:0,o=this.Ts(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return R.resolve(i?i.document.mutableCopy():yt.newInvalidDocument(n))}getEntries(e,n){let i=Kn();return n.forEach(r=>{const s=this.docs.get(r);i=i.insert(r,s?s.document.mutableCopy():yt.newInvalidDocument(r))}),R.resolve(i)}getDocumentsMatchingQuery(e,n,i,r){let s=Kn();const o=n.path,a=new G(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||ax(ox(u),i)<=0||(r.has(u.key)||Rc(n,u))&&(s=s.insert(u.key,u.mutableCopy()))}return R.resolve(s)}getAllFromCollectionGroup(e,n,i,r){Y()}Es(e,n){return R.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new wO(this)}getSize(e){return R.resolve(this.size)}}class wO extends mO{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((i,r)=>{r.isValidDocument()?n.push(this.Jn.addEntry(e,r)):this.Jn.removeEntry(i)}),R.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TO{constructor(e){this.persistence=e,this.As=new ps(n=>Pd(n),Md),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Vd,this.targetCount=0,this.bs=Gr.vn()}forEachTarget(e,n){return this.As.forEach((i,r)=>n(r)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Rs&&(this.Rs=n),R.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new Gr(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.Sn(n),R.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,i){let r=0;const s=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.As.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),R.waitFor(s).next(()=>r)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const i=this.As.get(n)||null;return R.resolve(i)}addMatchingKeys(e,n,i){return this.vs.os(n,i),R.resolve()}removeMatchingKeys(e,n,i){this.vs.cs(n,i);const r=this.persistence.referenceDelegate,s=[];return r&&n.forEach(o=>{s.push(r.markPotentiallyOrphaned(e,o))}),R.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),R.resolve()}getMatchingKeysForTargetId(e,n){const i=this.vs.fs(n);return R.resolve(i)}containsKey(e,n){return R.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new Od(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new TO(this),this.indexManager=new dO,this.remoteDocumentCache=function(i){return new EO(i)}(i=>this.referenceDelegate.Cs(i)),this.serializer=new hO(n),this.xs=new _O(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new vO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.Ps[e.toKey()];return i||(i=new bO(n,this.referenceDelegate),this.Ps[e.toKey()]=i),i}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,i){z("MemoryPersistence","Starting transaction:",e);const r=new CO(this.Vs.next());return this.referenceDelegate.Ns(),i(r).next(s=>this.referenceDelegate.ks(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Os(e,n){return R.or(Object.values(this.Ps).map(i=>()=>i.containsKey(e,n)))}}class CO extends cx{constructor(e){super(),this.currentSequenceNumber=e}}class $d{constructor(e){this.persistence=e,this.$s=new Vd,this.Ms=null}static Fs(e){return new $d(e)}get Bs(){if(this.Ms)return this.Ms;throw Y()}addReference(e,n,i){return this.$s.addReference(i,n),this.Bs.delete(i.toString()),R.resolve()}removeReference(e,n,i){return this.$s.removeReference(i,n),this.Bs.add(i.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),R.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(r=>this.Bs.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(s=>this.Bs.add(s.toString()))}).next(()=>i.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Bs,i=>{const r=G.fromPath(i);return this.Ls(e,r).next(s=>{s||n.removeEntry(r,Z.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(i=>{i?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return R.or([()=>R.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e,n,i,r){this.targetId=e,this.fromCache=n,this.Vi=i,this.Si=r}static Di(e,n){let i=le(),r=le();for(const s of n.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Bd(e,n.fromCache,i,r)}}/**
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
 */class SO{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,i,r){return this.Ni(e,n).next(s=>s||this.ki(e,n,r,i)).next(s=>s||this.Oi(e,n))}Ni(e,n){if(Ng(n))return R.resolve(null);let i=Hn(n);return this.indexManager.getIndexType(e,i).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Vh(n,null,"F"),i=Hn(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(s=>{const o=le(...s);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(l=>{const c=this.$i(n,a);return this.Mi(n,c,o,l.readTime)?this.Ni(e,Vh(n,null,"F")):this.Fi(e,c,n,l)}))})))}ki(e,n,i,r){return Ng(n)||r.isEqual(Z.min())?this.Oi(e,n):this.xi.getDocuments(e,i).next(s=>{const o=this.$i(n,s);return this.Mi(n,o,i,r)?this.Oi(e,n):(Eg()<=me.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),$h(n)),this.Fi(e,o,n,sx(r,-1)))})}$i(e,n){let i=new Je(Y0(e));return n.forEach((r,s)=>{Rc(e,s)&&(i=i.add(s))}),i}Mi(e,n,i,r){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Oi(e,n){return Eg()<=me.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",$h(n)),this.xi.getDocumentsMatchingQuery(e,n,gi.min())}Fi(e,n,i,r){return this.xi.getDocumentsMatchingQuery(e,i,r).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class AO{constructor(e,n,i,r){this.persistence=e,this.Bi=n,this.serializer=r,this.Li=new et(_e),this.qi=new ps(s=>Pd(s),Md),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(i)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new yO(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function kO(t,e,n,i){return new AO(t,e,n,i)}async function _E(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let r;return n.mutationQueue.getAllMutationBatches(i).next(s=>(r=s,n.Gi(e),n.mutationQueue.getAllMutationBatches(i))).next(s=>{const o=[],a=[];let l=le();for(const c of r){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of s){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(i,l).next(c=>({Qi:c,removedBatchIds:o,addedBatchIds:a}))})})}function RO(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const r=e.batch.keys(),s=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let f=R.resolve();return h.forEach(d=>{f=f.next(()=>c.getEntry(a,d)).next(m=>{const y=l.docVersions.get(d);Pe(y!==null),m.version.compareTo(y)<0&&(u.applyToRemoteDocument(m,l),m.isValidDocument()&&(m.setReadTime(l.commitVersion),c.addEntry(m)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,i,e,s).next(()=>s.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(o){let a=le();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(i,r))})}function vE(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function NO(t,e){const n=te(t),i=e.snapshotVersion;let r=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});r=n.Li;const a=[];e.targetChanges.forEach((u,h)=>{const f=r.get(h);if(!f)return;a.push(n.Ds.removeMatchingKeys(s,u.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(s,u.addedDocuments,h)));let d=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?d=d.withResumeToken(It.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,i)),r=r.insert(h,d),function(m,y,b){return m.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(f,d,u)&&a.push(n.Ds.updateTargetData(s,d))});let l=Kn(),c=le();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(xO(s,o,e.documentUpdates).next(u=>{l=u.zi,c=u.ji})),!i.isEqual(Z.min())){const u=n.Ds.getLastRemoteSnapshotVersion(s).next(h=>n.Ds.setTargetsMetadata(s,s.currentSequenceNumber,i));a.push(u)}return R.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.Li=r,s))}function xO(t,e,n){let i=le(),r=le();return n.forEach(s=>i=i.add(s)),e.getEntries(t,i).next(s=>{let o=Kn();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(r=r.add(a)),l.isNoDocument()&&l.version.isEqual(Z.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):z("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{zi:o,ji:r}})}function OO(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function DO(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let r;return n.Ds.getTargetData(i,e).next(s=>s?(r=s,R.resolve(r)):n.Ds.allocateTargetId(i).next(o=>(r=new qi(e,o,0,i.currentSequenceNumber),n.Ds.addTargetData(i,r).next(()=>r))))}).then(i=>{const r=n.Li.get(i.targetId);return(r===null||i.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Li=n.Li.insert(i.targetId,i),n.qi.set(e,i.targetId)),i})}async function Hh(t,e,n){const i=te(t),r=i.Li.get(e),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,o=>i.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Yo(o))throw o;z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.Li=i.Li.remove(e),i.qi.delete(r.target)}function Vg(t,e,n){const i=te(t);let r=Z.min(),s=le();return i.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=te(a),h=u.qi.get(c);return h!==void 0?R.resolve(u.Li.get(h)):u.Ds.getTargetData(l,c)}(i,o,Hn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,i.Ds.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>i.Bi.getDocumentsMatchingQuery(o,e,n?r:Z.min(),n?s:le())).next(a=>(PO(i,Rx(e),a),{documents:a,Wi:s})))}function PO(t,e,n){let i=t.Ui.get(e)||Z.min();n.forEach((r,s)=>{s.readTime.compareTo(i)>0&&(i=s.readTime)}),t.Ui.set(e,i)}class $g{constructor(){this.activeTargetIds=Z0()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class MO{constructor(){this.Br=new $g,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,i){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new $g,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class LO{qr(e){}shutdown(){}}/**
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
 */class Bg{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ta=null;function Su(){return Ta===null?Ta=268435456+Math.round(2147483648*Math.random()):Ta++,"0x"+Ta.toString(16)}/**
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
 */const FO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UO{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt="WebChannelConnection";class VO extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,i,r,s){const o=Su(),a=this.ao(e,n);z("RestConnection",`Sending RPC '${e}' ${o}:`,a,i);const l={};return this.ho(l,r,s),this.lo(e,a,l,i).then(c=>(z("RestConnection",`Received RPC '${e}' ${o}: `,c),c),c=>{throw El("RestConnection",`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",i),c})}fo(e,n,i,r,s,o){return this.co(e,n,i,r,s)}ho(e,n,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+ds,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,s)=>e[s]=r),i&&i.headers.forEach((r,s)=>e[s]=r)}ao(e,n){const i=FO[e];return`${this.ro}/v1/${n}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,i,r){const s=Su();return new Promise((o,a)=>{const l=new YN;l.setWithCredentials(!0),l.listenOnce(WN.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Iu.NO_ERROR:const u=l.getResponseJson();z(dt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(u)),o(u);break;case Iu.TIMEOUT:z(dt,`RPC '${e}' ${s} timed out`),a(new q(A.DEADLINE_EXCEEDED,"Request time out"));break;case Iu.HTTP_ERROR:const h=l.getStatus();if(z(dt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const m=function(y){const b=y.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(b)>=0?b:A.UNKNOWN}(d.status);a(new q(m,d.message))}else a(new q(A.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new q(A.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{z(dt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(r);z(dt,`RPC '${e}' ${s} sending request:`,r),l.send(n,"POST",c,i,15)})}wo(e,n,i){const r=Su(),s=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=HN(),a=KN(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new GN({})),this.ho(l.initMessageHeaders,n,i),l.encodeInitMessageHeaders=!0;const c=s.join("");z(dt,`Creating RPC '${e}' stream ${r}: ${c}`,l);const u=o.createWebChannel(c,l);let h=!1,f=!1;const d=new UO({Wr:y=>{f?z(dt,`Not sending because RPC '${e}' stream ${r} is closed:`,y):(h||(z(dt,`Opening RPC '${e}' stream ${r} transport.`),u.open(),h=!0),z(dt,`RPC '${e}' stream ${r} sending:`,y),u.send(y))},Hr:()=>u.close()}),m=(y,b,_)=>{y.listen(b,v=>{try{_(v)}catch(E){setTimeout(()=>{throw E},0)}})};return m(u,va.EventType.OPEN,()=>{f||z(dt,`RPC '${e}' stream ${r} transport opened.`)}),m(u,va.EventType.CLOSE,()=>{f||(f=!0,z(dt,`RPC '${e}' stream ${r} transport closed`),d.so())}),m(u,va.EventType.ERROR,y=>{f||(f=!0,El(dt,`RPC '${e}' stream ${r} transport errored:`,y),d.so(new q(A.UNAVAILABLE,"The operation could not be completed")))}),m(u,va.EventType.MESSAGE,y=>{var b;if(!f){const _=y.data[0];Pe(!!_);const v=_,E=v.error||((b=v[0])===null||b===void 0?void 0:b.error);if(E){z(dt,`RPC '${e}' stream ${r} received error:`,E);const I=E.status;let F=function(re){const ge=We[re];if(ge!==void 0)return cE(ge)}(I),Q=E.message;F===void 0&&(F=A.INTERNAL,Q="Unknown error status: "+I+" with message "+E.message),f=!0,d.so(new q(F,Q)),u.close()}else z(dt,`RPC '${e}' stream ${r} received:`,_),d.io(_)}}),m(a,qN.STAT_EVENT,y=>{y.stat===vg.PROXY?z(dt,`RPC '${e}' stream ${r} detected buffering proxy`):y.stat===vg.NOPROXY&&z(dt,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{d.no()},0),d}}function Au(){return typeof document<"u"?document:null}/**
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
 */function Pc(t){return new Xx(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(e,n,i=1e3,r=1.5,s=6e4){this.Ws=e,this.timerId=n,this._o=i,this.mo=r,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),i=Math.max(0,Date.now()-this.To),r=Math.max(0,n-i);r>0&&z("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,r,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e,n,i,r,s,o,a,l){this.Ws=e,this.bo=i,this.Po=r,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new bE(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(zn(n.toString()),zn("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,r])=>{this.Vo===n&&this.Ko(i,r)},i=>{e(()=>{const r=new q(A.UNKNOWN,"Fetching auth token failed: "+i.message);return this.Go(r)})})}Ko(e,n){const i=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{i(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(r=>{i(()=>this.Go(r))}),this.stream.onMessage(r=>{i(()=>this.onMessage(r))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class $O extends EE{constructor(e,n,i,r,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,r,o),this.serializer=s}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=eO(this.serializer,e),i=function(r){if(!("targetChange"in r))return Z.min();const s=r.targetChange;return s.targetIds&&s.targetIds.length?Z.min():s.readTime?Tn(s.readTime):Z.min()}(e);return this.listener.zo(n,i)}jo(e){const n={};n.database=zh(this.serializer),n.addTarget=function(r,s){let o;const a=s.target;return o=Uh(a)?{documents:iO(r,a)}:{query:rO(r,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=fE(r,s.resumeToken):s.snapshotVersion.compareTo(Z.min())>0&&(o.readTime=Sl(r,s.snapshotVersion.toTimestamp())),o}(this.serializer,e);const i=oO(this.serializer,e);i&&(n.labels=i),this.Fo(n)}Wo(e){const n={};n.database=zh(this.serializer),n.removeTarget=e,this.Fo(n)}}class BO extends EE{constructor(e,n,i,r,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,r,o),this.serializer=s,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Pe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=nO(e.writeResults,e.commitTime),i=Tn(e.commitTime);return this.listener.Zo(i,n)}return Pe(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=zh(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>tO(this.serializer,i))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jO extends class{}{constructor(e,n,i,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=r,this.eu=!1}nu(){if(this.eu)throw new q(A.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.connection.co(e,n,i,r,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new q(A.UNKNOWN,r.toString())})}fo(e,n,i,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.fo(e,n,i,s,o,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(A.UNKNOWN,s.toString())})}terminate(){this.eu=!0}}class zO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(zn(n),this.ru=!1):z("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HO{constructor(e,n,i,r,s){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=s,this._u.qr(o=>{i.enqueueAndForget(async()=>{ur(this)&&(z("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=te(a);l.du.add(4),await Xo(l),l.mu.set("Unknown"),l.du.delete(4),await Mc(l)}(this))})}),this.mu=new zO(i,r)}}async function Mc(t){if(ur(t))for(const e of t.wu)await e(!0)}async function Xo(t){for(const e of t.wu)await e(!1)}function wE(t,e){const n=te(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),Hd(n)?zd(n):ms(n).No()&&jd(n,e))}function TE(t,e){const n=te(t),i=ms(n);n.fu.delete(e),i.No()&&IE(n,e),n.fu.size===0&&(i.No()?i.$o():ur(n)&&n.mu.set("Unknown"))}function jd(t,e){t.gu.Ot(e.targetId),ms(t).jo(e)}function IE(t,e){t.gu.Ot(e),ms(t).Wo(e)}function zd(t){t.gu=new qx({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),ms(t).start(),t.mu.ou()}function Hd(t){return ur(t)&&!ms(t).xo()&&t.fu.size>0}function ur(t){return te(t).du.size===0}function CE(t){t.gu=void 0}async function KO(t){t.fu.forEach((e,n)=>{jd(t,e)})}async function WO(t,e){CE(t),Hd(t)?(t.mu.au(e),zd(t)):t.mu.set("Unknown")}async function qO(t,e,n){if(t.mu.set("Online"),e instanceof hE&&e.state===2&&e.cause)try{await async function(i,r){const s=r.cause;for(const o of r.targetIds)i.fu.has(o)&&(await i.remoteSyncer.rejectListen(o,s),i.fu.delete(o),i.gu.removeTarget(o))}(t,e)}catch(i){z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Al(t,i)}else if(e instanceof za?t.gu.Kt(e):e instanceof uE?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(Z.min()))try{const i=await vE(t.localStore);n.compareTo(i)>=0&&await function(r,s){const o=r.gu.Xt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=r.fu.get(l);c&&r.fu.set(l,c.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=r.fu.get(a);if(!l)return;r.fu.set(a,l.withResumeToken(It.EMPTY_BYTE_STRING,l.snapshotVersion)),IE(r,a);const c=new qi(l.target,a,1,l.sequenceNumber);jd(r,c)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(i){z("RemoteStore","Failed to raise snapshot:",i),await Al(t,i)}}async function Al(t,e,n){if(!Yo(e))throw e;t.du.add(1),await Xo(t),t.mu.set("Offline"),n||(n=()=>vE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{z("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await Mc(t)})}function SE(t,e){return e().catch(n=>Al(t,n,e))}async function Lc(t){const e=te(t),n=_i(e);let i=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;GO(e);)try{const r=await OO(e.localStore,i);if(r===null){e.lu.length===0&&n.$o();break}i=r.batchId,YO(e,r)}catch(r){await Al(e,r)}AE(e)&&kE(e)}function GO(t){return ur(t)&&t.lu.length<10}function YO(t,e){t.lu.push(e);const n=_i(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function AE(t){return ur(t)&&!_i(t).xo()&&t.lu.length>0}function kE(t){_i(t).start()}async function QO(t){_i(t).tu()}async function XO(t){const e=_i(t);for(const n of t.lu)e.Yo(n.mutations)}async function JO(t,e,n){const i=t.lu.shift(),r=Ld.from(i,e,n);await SE(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Lc(t)}async function ZO(t,e){e&&_i(t).Jo&&await async function(n,i){if(r=i.code,Wx(r)&&r!==A.ABORTED){const s=n.lu.shift();_i(n).Oo(),await SE(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Lc(n)}var r}(t,e),AE(t)&&kE(t)}async function jg(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),z("RemoteStore","RemoteStore received new credentials");const i=ur(n);n.du.add(3),await Xo(n),i&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await Mc(n)}async function eD(t,e){const n=te(t);e?(n.du.delete(2),await Mc(n)):e||(n.du.add(2),await Xo(n),n.mu.set("Unknown"))}function ms(t){return t.yu||(t.yu=function(e,n,i){const r=te(e);return r.nu(),new $O(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{Jr:KO.bind(null,t),Zr:WO.bind(null,t),zo:qO.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),Hd(t)?zd(t):t.mu.set("Unknown")):(await t.yu.stop(),CE(t))})),t.yu}function _i(t){return t.pu||(t.pu=function(e,n,i){const r=te(e);return r.nu(),new BO(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{Jr:QO.bind(null,t),Zr:ZO.bind(null,t),Xo:XO.bind(null,t),Zo:JO.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await Lc(t)):(await t.pu.stop(),t.lu.length>0&&(z("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e,n,i,r,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new Un,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,r,s){const o=Date.now()+i,a=new Kd(e,n,o,r,s);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wd(t,e){if(zn("AsyncQueue",`${e}: ${t}`),Yo(t))return new q(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e){this.comparator=e?(n,i)=>e(n,i)||G.comparator(n.key,i.key):(n,i)=>G.comparator(n.key,i.key),this.keyedMap=xs(),this.sortedSet=new et(this.comparator)}static emptySet(e){return new Mr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Mr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new Mr;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(){this.Iu=new et(G.comparator)}track(e){const n=e.doc.key,i=this.Iu.get(n);i?e.type!==0&&i.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&i.type!==1?this.Iu=this.Iu.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Iu=this.Iu.remove(n):e.type===1&&i.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):Y():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,i)=>{e.push(i)}),e}}class Yr{constructor(e,n,i,r,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,i,r,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Yr(e,n,Mr.emptySet(n),o,i,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&kc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==i[r].type||!n[r].doc.isEqual(i[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{constructor(){this.Eu=void 0,this.listeners=[]}}class nD{constructor(){this.queries=new ps(e=>G0(e),kc),this.onlineState="Unknown",this.Au=new Set}}async function qd(t,e){const n=te(t),i=e.query;let r=!1,s=n.queries.get(i);if(s||(r=!0,s=new tD),r)try{s.Eu=await n.onListen(i)}catch(o){const a=Wd(o,`Initialization of query '${$h(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.listeners.push(e),e.Ru(n.onlineState),s.Eu&&e.vu(s.Eu)&&Yd(n)}async function Gd(t,e){const n=te(t),i=e.query;let r=!1;const s=n.queries.get(i);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),r=s.listeners.length===0)}if(r)return n.queries.delete(i),n.onUnlisten(i)}function iD(t,e){const n=te(t);let i=!1;for(const r of e){const s=r.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.vu(r)&&(i=!0);o.Eu=r}}i&&Yd(n)}function rD(t,e,n){const i=te(t),r=i.queries.get(e);if(r)for(const s of r.listeners)s.onError(n);i.queries.delete(e)}function Yd(t){t.Au.forEach(e=>{e.next()})}class Qd{constructor(e,n,i){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=i||{}}vu(e){if(!this.options.includeMetadataChanges){const i=[];for(const r of e.docChanges)r.type!==3&&i.push(r);e=new Yr(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.xu||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=Yr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(e){this.key=e}}class NE{constructor(e){this.key=e}}class sD{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=le(),this.mutatedKeys=le(),this.Ku=Y0(e),this.Gu=new Mr(this.Ku)}get Qu(){return this.Lu}zu(e,n){const i=n?n.ju:new zg,r=n?n.Gu:this.Gu;let s=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const l=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,c=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const f=r.get(u),d=Rc(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),y=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let b=!1;f&&d?f.data.isEqual(d.data)?m!==y&&(i.track({type:3,doc:d}),b=!0):this.Wu(f,d)||(i.track({type:2,doc:d}),b=!0,(l&&this.Ku(d,l)>0||c&&this.Ku(d,c)<0)&&(a=!0)):!f&&d?(i.track({type:0,doc:d}),b=!0):f&&!d&&(i.track({type:1,doc:f}),b=!0,(l||c)&&(a=!0)),b&&(d?(o=o.add(d),s=y?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),i.track({type:1,doc:u})}return{Gu:o,ju:i,Mi:a,mutatedKeys:s}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const r=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const s=e.ju.Tu();s.sort((c,u)=>function(h,f){const d=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return d(h)-d(f)}(c.type,u.type)||this.Ku(c.doc,u.doc)),this.Hu(i);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,s.length!==0||l?{snapshot:new Yr(this.query,e.Gu,r,s,e.mutatedKeys,a===0,l,!1,!!i&&i.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new zg,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=le(),this.Gu.forEach(i=>{this.Zu(i.key)&&(this.Uu=this.Uu.add(i.key))});const n=[];return e.forEach(i=>{this.Uu.has(i)||n.push(new NE(i))}),this.Uu.forEach(i=>{e.has(i)||n.push(new RE(i))}),n}Xu(e){this.Lu=e.Wi,this.Uu=le();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return Yr.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class oD{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class aD{constructor(e){this.key=e,this.ec=!1}}class lD{constructor(e,n,i,r,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new ps(a=>G0(a),kc),this.ic=new Map,this.rc=new Set,this.oc=new et(G.comparator),this.uc=new Map,this.cc=new Vd,this.ac={},this.hc=new Map,this.lc=Gr.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function cD(t,e){const n=vD(t);let i,r;const s=n.sc.get(e);if(s)i=s.targetId,n.sharedClientState.addLocalQueryTarget(i),r=s.view.tc();else{const o=await DO(n.localStore,Hn(e));n.isPrimaryClient&&wE(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,r=await uD(n,e,i,a==="current",o.resumeToken)}return r}async function uD(t,e,n,i,r){t.dc=(h,f,d)=>async function(m,y,b,_){let v=y.view.zu(b);v.Mi&&(v=await Vg(m.localStore,y.query,!1).then(({documents:F})=>y.view.zu(F,v)));const E=_&&_.targetChanges.get(y.targetId),I=y.view.applyChanges(v,m.isPrimaryClient,E);return Kg(m,y.targetId,I.Yu),I.snapshot}(t,h,f,d);const s=await Vg(t.localStore,e,!0),o=new sD(e,s.Wi),a=o.zu(s.documents),l=Qo.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",r),c=o.applyChanges(a,t.isPrimaryClient,l);Kg(t,n,c.Yu);const u=new oD(e,n,o);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),c.snapshot}async function hD(t,e){const n=te(t),i=n.sc.get(e),r=n.ic.get(i.targetId);if(r.length>1)return n.ic.set(i.targetId,r.filter(s=>!kc(s,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Hh(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),TE(n.remoteStore,i.targetId),Kh(n,i.targetId)}).catch(Go)):(Kh(n,i.targetId),await Hh(n.localStore,i.targetId,!0))}async function fD(t,e,n){const i=bD(t);try{const r=await function(s,o){const a=te(s),l=Qe.now(),c=o.reduce((f,d)=>f.add(d.key),le());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=Kn(),m=le();return a.Ki.getEntries(f,c).next(y=>{d=y,d.forEach((b,_)=>{_.isValidDocument()||(m=m.add(b))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(y=>{u=y;const b=[];for(const _ of o){const v=Bx(_,u.get(_.key).overlayedDocument);v!=null&&b.push(new cr(_.key,v,B0(v.value.mapValue),Vn.exists(!0)))}return a.mutationQueue.addMutationBatch(f,l,b,o)}).next(y=>{h=y;const b=y.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(f,y.batchId,b)})}).then(()=>({batchId:h.batchId,changes:X0(u)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(r.batchId),function(s,o,a){let l=s.ac[s.currentUser.toKey()];l||(l=new et(_e)),l=l.insert(o,a),s.ac[s.currentUser.toKey()]=l}(i,r.batchId,n),await Jo(i,r.changes),await Lc(i.remoteStore)}catch(r){const s=Wd(r,"Failed to persist write");n.reject(s)}}async function xE(t,e){const n=te(t);try{const i=await NO(n.localStore,e);e.targetChanges.forEach((r,s)=>{const o=n.uc.get(s);o&&(Pe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ec=!0:r.modifiedDocuments.size>0?Pe(o.ec):r.removedDocuments.size>0&&(Pe(o.ec),o.ec=!1))}),await Jo(n,i,e)}catch(i){await Go(i)}}function Hg(t,e,n){const i=te(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const r=[];i.sc.forEach((s,o)=>{const a=o.view.Ru(e);a.snapshot&&r.push(a.snapshot)}),function(s,o){const a=te(s);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.Ru(o)&&(l=!0)}),l&&Yd(a)}(i.eventManager,e),r.length&&i.nc.zo(r),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function dD(t,e,n){const i=te(t);i.sharedClientState.updateQueryState(e,"rejected",n);const r=i.uc.get(e),s=r&&r.key;if(s){let o=new et(G.comparator);o=o.insert(s,yt.newNoDocument(s,Z.min()));const a=le().add(s),l=new Dc(Z.min(),new Map,new Je(_e),o,a);await xE(i,l),i.oc=i.oc.remove(s),i.uc.delete(e),Xd(i)}else await Hh(i.localStore,e,!1).then(()=>Kh(i,e,n)).catch(Go)}async function pD(t,e){const n=te(t),i=e.batch.batchId;try{const r=await RO(n.localStore,e);DE(n,i,null),OE(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Jo(n,r)}catch(r){await Go(r)}}async function mD(t,e,n){const i=te(t);try{const r=await function(s,o){const a=te(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(Pe(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(i.localStore,e);DE(i,e,n),OE(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await Jo(i,r)}catch(r){await Go(r)}}function OE(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function DE(t,e,n){const i=te(t);let r=i.ac[i.currentUser.toKey()];if(r){const s=r.get(e);s&&(n?s.reject(n):s.resolve(),r=r.remove(e)),i.ac[i.currentUser.toKey()]=r}}function Kh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.ic.get(e))t.sc.delete(i),n&&t.nc.wc(i,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(i=>{t.cc.containsKey(i)||PE(t,i)})}function PE(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(TE(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Xd(t))}function Kg(t,e,n){for(const i of n)i instanceof RE?(t.cc.addReference(i.key,e),gD(t,i)):i instanceof NE?(z("SyncEngine","Document no longer in limbo: "+i.key),t.cc.removeReference(i.key,e),t.cc.containsKey(i.key)||PE(t,i.key)):Y()}function gD(t,e){const n=e.key,i=n.path.canonicalString();t.oc.get(n)||t.rc.has(i)||(z("SyncEngine","New document in limbo: "+n),t.rc.add(i),Xd(t))}function Xd(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new G(Fe.fromString(e)),i=t.lc.next();t.uc.set(i,new aD(n)),t.oc=t.oc.insert(n,i),wE(t.remoteStore,new qi(Hn(Ac(n.path)),i,2,Od.ct))}}async function Jo(t,e,n){const i=te(t),r=[],s=[],o=[];i.sc.isEmpty()||(i.sc.forEach((a,l)=>{o.push(i.dc(l,e,n).then(c=>{if((c||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){r.push(c);const u=Bd.Di(l.targetId,c);s.push(u)}}))}),await Promise.all(o),i.nc.zo(r),await async function(a,l){const c=te(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>R.forEach(l,h=>R.forEach(h.Vi,f=>c.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>R.forEach(h.Si,f=>c.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!Yo(u))throw u;z("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const f=c.Li.get(h),d=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(d);c.Li=c.Li.insert(h,m)}}}(i.localStore,s))}async function yD(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){z("SyncEngine","User change. New user:",e.toKey());const i=await _E(n.localStore,e);n.currentUser=e,function(r,s){r.hc.forEach(o=>{o.forEach(a=>{a.reject(new q(A.CANCELLED,s))})}),r.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Jo(n,i.Qi)}}function _D(t,e){const n=te(t),i=n.uc.get(e);if(i&&i.ec)return le().add(i.key);{let r=le();const s=n.ic.get(e);if(!s)return r;for(const o of s){const a=n.sc.get(o);r=r.unionWith(a.view.Qu)}return r}}function vD(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=xE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_D.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dD.bind(null,e),e.nc.zo=iD.bind(null,e.eventManager),e.nc.wc=rD.bind(null,e.eventManager),e}function bD(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=pD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=mD.bind(null,e),e}class Wg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Pc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return kO(this.persistence,new SO,e.initialUser,this.serializer)}createPersistence(e){return new IO($d.Fs,this.serializer)}createSharedClientState(e){return new MO}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ED{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Hg(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=yD.bind(null,this.syncEngine),await eD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new nD}createDatastore(e){const n=Pc(e.databaseInfo.databaseId),i=(r=e.databaseInfo,new VO(r));var r;return function(s,o,a,l){return new jO(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return n=this.localStore,i=this.datastore,r=e.asyncQueue,s=a=>Hg(this.syncEngine,a,0),o=Bg.D()?new Bg:new LO,new HO(n,i,r,s,o);var n,i,r,s,o}createSyncEngine(e,n){return function(i,r,s,o,a,l,c){const u=new lD(i,r,s,o,a,l);return c&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=te(e);z("RemoteStore","RemoteStore shutting down."),n.du.add(5),await Xo(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
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
 */class Jd{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):zn("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wD{constructor(e,n,i,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=r,this.user=pt.UNAUTHENTICATED,this.clientId=F0.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async s=>{z("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(i,s=>(z("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Un;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=Wd(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function ku(t,e){t.asyncQueue.verifyOperationInProgress(),z("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async r=>{i.isEqual(r)||(await _E(e.localStore,r),i=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function qg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ID(t);z("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(r=>jg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>jg(e.remoteStore,s)),t._onlineComponents=e}function TD(t){return t.name==="FirebaseError"?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function ID(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){z("FirestoreClient","Using user provided OfflineComponentProvider");try{await ku(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!TD(n))throw n;El("Error using user provided cache. Falling back to memory cache: "+n),await ku(t,new Wg)}}else z("FirestoreClient","Using default OfflineComponentProvider"),await ku(t,new Wg);return t._offlineComponents}async function ME(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(z("FirestoreClient","Using user provided OnlineComponentProvider"),await qg(t,t._uninitializedComponentsProvider._online)):(z("FirestoreClient","Using default OnlineComponentProvider"),await qg(t,new ED))),t._onlineComponents}function CD(t){return ME(t).then(e=>e.syncEngine)}async function kl(t){const e=await ME(t),n=e.eventManager;return n.onListen=cD.bind(null,e.syncEngine),n.onUnlisten=hD.bind(null,e.syncEngine),n}function SD(t,e,n={}){const i=new Un;return t.asyncQueue.enqueueAndForget(async()=>function(r,s,o,a,l){const c=new Jd({next:h=>{s.enqueueAndForget(()=>Gd(r,u));const f=h.docs.has(o);!f&&h.fromCache?l.reject(new q(A.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?l.reject(new q(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new Qd(Ac(o.path),c,{includeMetadataChanges:!0,xu:!0});return qd(r,u)}(await kl(t),t.asyncQueue,e,n,i)),i.promise}function AD(t,e,n={}){const i=new Un;return t.asyncQueue.enqueueAndForget(async()=>function(r,s,o,a,l){const c=new Jd({next:h=>{s.enqueueAndForget(()=>Gd(r,u)),h.fromCache&&a.source==="server"?l.reject(new q(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new Qd(o,c,{includeMetadataChanges:!0,xu:!0});return qd(r,u)}(await kl(t),t.asyncQueue,e,n,i)),i.promise}/**
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
 */const Gg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE(t,e,n){if(!n)throw new q(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function kD(t,e,n,i){if(e===!0&&i===!0)throw new q(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Yg(t){if(!G.isDocumentKey(t))throw new q(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Qg(t){if(G.isDocumentKey(t))throw new q(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Zd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function In(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Zd(t);throw new q(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Xg{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new q(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,kD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Fc{constructor(e,n,i,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new q(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new q(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xg(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new QN;switch(n.type){case"firstParty":return new ex(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new q(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Gg.get(e);n&&(z("ComponentProvider","Removing Datastore"),Gg.delete(e),n.terminate())}(this),Promise.resolve()}}function RD(t,e,n,i={}){var r;const s=(t=In(t,Fc))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&El("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let o,a;if(typeof i.mockUserToken=="string")o=i.mockUserToken,a=pt.MOCK_USER;else{o=T1(i.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const l=i.mockUserToken.sub||i.mockUserToken.user_id;if(!l)throw new q(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new pt(l)}t._authCredentials=new XN(new L0(o,a))}}/**
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
 */class Pt{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pt(this.firestore,e,this._key)}}class Zo{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Zo(this.firestore,e,this._query)}}class fi extends Zo{constructor(e,n,i){super(e,n,Ac(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pt(this.firestore,null,new G(e))}withConverter(e){return new fi(this.firestore,e,this._path)}}function Eo(t,e,...n){if(t=Lt(t),LE("collection","path",e),t instanceof Fc){const i=Fe.fromString(e,...n);return Qg(i),new fi(t,null,i)}{if(!(t instanceof Pt||t instanceof fi))throw new q(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Fe.fromString(e,...n));return Qg(i),new fi(t.firestore,null,i)}}function St(t,e,...n){if(t=Lt(t),arguments.length===1&&(e=F0.A()),LE("doc","path",e),t instanceof Fc){const i=Fe.fromString(e,...n);return Yg(i),new Pt(t,null,new G(i))}{if(!(t instanceof Pt||t instanceof fi))throw new q(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Fe.fromString(e,...n));return Yg(i),new Pt(t.firestore,t instanceof fi?t.converter:null,new G(i))}}/**
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
 */class ND{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new bE(this,"async_queue_retry"),this.qc=()=>{const n=Au();n&&z("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=Au();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=Au();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new Un;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!Yo(e))throw e;z("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(i=>{this.Mc=i,this.Fc=!1;const r=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(i);throw zn("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.Fc=!1,i))));return this.Nc=n,n}enqueueAfterDelay(e,n,i){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const r=Kd.createAndSchedule(this,e,n,i,s=>this.Qc(s));return this.$c.push(r),r}Uc(){this.Mc&&Y()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function Jg(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const i=e;for(const r of n)if(r in i&&typeof i[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Qr extends Fc{constructor(e,n,i,r){super(e,n,i,r),this.type="firestore",this._queue=new ND,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||UE(this),this._firestoreClient.terminate()}}function FE(t,e){const n=typeof t=="object"?t:rv(),i=typeof t=="string"?t:e||"(default)",r=xC(n,"firestore").getImmediate({identifier:i});if(!r._initialized){const s=b1("firestore");s&&RD(r,...s)}return r}function Uc(t){return t._firestoreClient||UE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function UE(t){var e,n,i;const r=t._freezeSettings(),s=function(o,a,l,c){return new dx(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new wD(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=r.cache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
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
 */class Xr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xr(It.fromBase64String(e))}catch(n){throw new q(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Xr(It.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Vc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new vt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class $c{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xD=/^__.*__$/;class VE{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new cr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function $E(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class tp{constructor(e,n,i,r,s,o){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=r,s===void 0&&this.Jc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new tp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Zc({path:i,ta:!1});return r.ea(e),r}na(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Zc({path:i,ta:!1});return r.Jc(),r}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return Rl(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if($E(this.Yc)&&xD.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class OD{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||Pc(e)}ua(e,n,i,r=!1){return new tp({Yc:e,methodName:n,oa:i,path:vt.emptyPath(),ta:!1,ra:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function DD(t){const e=t._freezeSettings(),n=Pc(t._databaseId);return new OD(t._databaseId,!!e.ignoreUndefinedProperties,n)}class Bc extends ep{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Bc}}function PD(t,e,n,i){const r=t.ua(1,e,n);jE("Data must be an object, but it was:",r,i);const s=[],o=Vt.empty();lr(i,(l,c)=>{const u=np(e,l,n);c=Lt(c);const h=r.na(u);if(c instanceof Bc)s.push(u);else{const f=jc(c,h);f!=null&&(s.push(u),o.set(u,f))}});const a=new sn(s);return new VE(o,a,r.fieldTransforms)}function MD(t,e,n,i,r,s){const o=t.ua(1,e,n),a=[Zg(e,i,n)],l=[r];if(s.length%2!=0)throw new q(A.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(Zg(e,s[f])),l.push(s[f+1]);const c=[],u=Vt.empty();for(let f=a.length-1;f>=0;--f)if(!UD(c,a[f])){const d=a[f];let m=l[f];m=Lt(m);const y=o.na(d);if(m instanceof Bc)c.push(d);else{const b=jc(m,y);b!=null&&(c.push(d),u.set(d,b))}}const h=new sn(c);return new VE(u,h,o.fieldTransforms)}function jc(t,e){if(BE(t=Lt(t)))return jE("Unsupported field value:",e,t),LD(t,e);if(t instanceof ep)return function(n,i){if(!$E(i.Yc))throw i.ia(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.ia(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,i){const r=[];let s=0;for(const o of n){let a=jc(o,i.sa(s));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),s++}return{arrayValue:{values:r}}}(t,e)}return function(n,i){if((n=Lt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Mx(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Qe.fromDate(n);return{timestampValue:Sl(i.serializer,r)}}if(n instanceof Qe){const r=new Qe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Sl(i.serializer,r)}}if(n instanceof $c)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Xr)return{bytesValue:fE(i.serializer,n._byteString)};if(n instanceof Pt){const r=i.databaseId,s=n.firestore._databaseId;if(!s.isEqual(r))throw i.ia(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Ud(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i.ia(`Unsupported field value: ${Zd(n)}`)}(t,e)}function LD(t,e){const n={};return U0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):lr(t,(i,r)=>{const s=jc(r,e.Xc(i));s!=null&&(n[i]=s)}),{mapValue:{fields:n}}}function BE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Qe||t instanceof $c||t instanceof Xr||t instanceof Pt||t instanceof ep)}function jE(t,e,n){if(!BE(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=Zd(n);throw i==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+i)}}function Zg(t,e,n){if((e=Lt(e))instanceof Vc)return e._internalPath;if(typeof e=="string")return np(t,e);throw Rl("Field path arguments must be of type string or ",t,!1,void 0,n)}const FD=new RegExp("[~\\*/\\[\\]]");function np(t,e,n){if(e.search(FD)>=0)throw Rl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Vc(...e.split("."))._internalPath}catch{throw Rl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Rl(t,e,n,i,r){const s=i&&!i.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${i}`),o&&(l+=` in document ${r}`),l+=")"),new q(A.INVALID_ARGUMENT,a+t+l)}function UD(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class zE{constructor(e,n,i,r,s){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new VD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(HE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class VD extends zE{data(){return super.data()}}function HE(t,e){return typeof e=="string"?np(t,e):e instanceof Vc?e._internalPath:e._delegate._internalPath}/**
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
 */function KE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class $D{convertValue(e,n="none"){switch(tr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Kr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Y()}}convertObject(e,n){const i={};return lr(e.fields,(r,s)=>{i[r]=this.convertValue(s,n)}),i}convertGeoPoint(e){return new $c(qe(e.latitude),qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=$0(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(go(e));default:return null}}convertTimestamp(e){const n=yi(e);return new Qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=Fe.fromString(e);Pe(yE(i));const r=new yo(i.get(1),i.get(3)),s=new G(i.popFirst(5));return r.isEqual(n)||zn(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */class Os{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class WE extends zE{constructor(e,n,i,r,s,o){super(e,n,i,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ha(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(HE("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class Ha extends WE{data(e={}){return super.data(e)}}class qE{constructor(e,n,i,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Os(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new Ha(this._firestore,this._userDataWriter,i.key,i,new Os(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(o=>{const a=new Ha(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Os(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Ha(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Os(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,c=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),c=s.indexOf(o.doc.key)),{type:BD(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function BD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}/**
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
 */function GE(t){t=In(t,Pt);const e=In(t.firestore,Qr);return SD(Uc(e),t._key).then(n=>YE(e,t,n))}class ip extends $D{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Pt(this.firestore,null,n)}}function jD(t){t=In(t,Zo);const e=In(t.firestore,Qr),n=Uc(e),i=new ip(e);return KE(t._query),AD(n,t._query).then(r=>new qE(e,i,t,r))}function Pi(t,e,n,...i){t=In(t,Pt);const r=In(t.firestore,Qr),s=DD(r);let o;return o=typeof(e=Lt(e))=="string"||e instanceof Vc?MD(s,"updateDoc",t._key,e,n,i):PD(s,"updateDoc",t._key,e),zD(r,[o.toMutation(t._key,Vn.exists(!0))])}function rp(t,...e){var n,i,r;t=Lt(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Jg(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Jg(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let l,c,u;if(t instanceof Pt)c=In(t.firestore,Qr),u=Ac(t._key.path),l={next:h=>{e[o]&&e[o](YE(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=In(t,Zo);c=In(h.firestore,Qr),u=h._query;const f=new ip(c);l={next:d=>{e[o]&&e[o](new qE(c,f,h,d))},error:e[o+1],complete:e[o+2]},KE(t._query)}return function(h,f,d,m){const y=new Jd(m),b=new Qd(f,y,d);return h.asyncQueue.enqueueAndForget(async()=>qd(await kl(h),b)),()=>{y.yc(),h.asyncQueue.enqueueAndForget(async()=>Gd(await kl(h),b))}}(Uc(c),u,a,l)}function zD(t,e){return function(n,i){const r=new Un;return n.asyncQueue.enqueueAndForget(async()=>fD(await CD(n),i,r)),r.promise}(Uc(t),e)}function YE(t,e,n){const i=n.docs.get(e._key),r=new ip(t);return new WE(t,r,e._key,i,new Os(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){ds=n})(as),An(new hn("firestore",(n,{instanceIdentifier:i,options:r})=>{const s=n.getProvider("app").getImmediate(),o=new Qr(new JN(n.getProvider("auth-internal")),new nx(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new q(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yo(a.options.projectId,l)}(s,i),s);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),jt(bg,"3.10.1",t),jt(bg,"3.10.1","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE="firebasestorage.googleapis.com",HD="storageBucket",KD=2*60*1e3,WD=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends Qn{constructor(e,n,i=0){super(Ru(e),`Firebase Storage: ${n} (${Ru(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,On.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ru(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var xn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(xn||(xn={}));function Ru(t){return"storage/"+t}function qD(){const t="An unknown error occurred, please check the error payload for server response.";return new On(xn.UNKNOWN,t)}function GD(){return new On(xn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function YD(){return new On(xn.CANCELED,"User canceled the upload/download.")}function QD(t){return new On(xn.INVALID_URL,"Invalid URL '"+t+"'.")}function XD(t){return new On(xn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function ey(t){return new On(xn.INVALID_ARGUMENT,t)}function XE(){return new On(xn.APP_DELETED,"The Firebase app was deleted.")}function JD(t){return new On(xn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=on.makeFromUrl(e,n)}catch{return new on(e,"")}if(i.path==="")return i;throw XD(e)}static makeFromUrl(e,n){let i=null;const r="([A-Za-z0-9.\\-_]+)";function s(I){I.path.charAt(I.path.length-1)==="/"&&(I.path_=I.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),l={bucket:1,path:3};function c(I){I.path_=decodeURIComponent(I.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${r}/o${f}`,"i"),m={bucket:1,path:3},y=n===QE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",_=new RegExp(`^https?://${y}/${r}/${b}`,"i"),E=[{regex:a,indices:l,postModify:s},{regex:d,indices:m,postModify:c},{regex:_,indices:{bucket:1,path:2},postModify:c}];for(let I=0;I<E.length;I++){const F=E[I],Q=F.regex.exec(e);if(Q){const re=Q[F.indices.bucket];let ge=Q[F.indices.path];ge||(ge=""),i=new on(re,ge),F.postModify(i);break}}if(i==null)throw QD(e);return i}}class ZD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eP(t,e,n){let i=1,r=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...b){c||(c=!0,e.apply(null,b))}function h(b){r=setTimeout(()=>{r=null,t(d,l())},b)}function f(){s&&clearTimeout(s)}function d(b,..._){if(c){f();return}if(b){f(),u.call(null,b,..._);return}if(l()||o){f(),u.call(null,b,..._);return}i<64&&(i*=2);let E;a===1?(a=2,E=0):E=(i+Math.random())*1e3,h(E)}let m=!1;function y(b){m||(m=!0,f(),!c&&(r!==null?(b||(a=2),clearTimeout(r),h(0)):b||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function tP(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nP(t){return t!==void 0}function ty(t,e,n,i){if(i<e)throw ey(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw ey(`Invalid value for '${t}'. Expected ${n} or less.`)}function iP(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const r=e(i)+"="+e(t[i]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Nl;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Nl||(Nl={}));/**
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
 */function rP(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||r||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(e,n,i,r,s,o,a,l,c,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,m)=>{this.resolve_=d,this.reject_=m,this.start_()})}start_(){const e=(i,r)=>{if(r){i(!1,new Ia(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Nl.NO_ERROR,l=s.getStatus();if(!a||rP(l,this.additionalRetryCodes_)&&this.retry){const u=s.getErrorCode()===Nl.ABORT;i(!1,new Ia(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;i(!0,new Ia(c,s))})},n=(i,r)=>{const s=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());nP(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=qD();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(r.canceled){const l=this.appDelete_?XE():YD();o(l)}else{const l=GD();o(l)}};this.canceled_?n(!1,new Ia(!1,null,!0)):this.backoffId_=eP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&tP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ia{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function oP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function aP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function lP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function cP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function uP(t,e,n,i,r,s,o=!0){const a=iP(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return lP(c,e),oP(c,n),aP(c,s),cP(c,i),new sP(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function fP(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class xl{constructor(e,n){this._service=e,n instanceof on?this._location=n:this._location=on.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new xl(e,n)}get root(){const e=new on(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return fP(this._location.path)}get storage(){return this._service}get parent(){const e=hP(this._location.path);if(e===null)return null;const n=new on(this._location.bucket,e);return new xl(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw JD(e)}}function ny(t,e){const n=e==null?void 0:e[HD];return n==null?null:on.makeFromBucketSpec(n,t)}class dP{constructor(e,n,i,r,s){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=QE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=KD,this._maxUploadRetryTime=WD,this._requests=new Set,r!=null?this._bucket=on.makeFromBucketSpec(r,this._host):this._bucket=ny(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=on.makeFromBucketSpec(this._url,e):this._bucket=ny(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ty("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ty("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new xl(this,e)}_makeRequest(e,n,i,r,s=!0){if(this._deleted)return new ZD(XE());{const o=uP(e,this._appId,i,r,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,r).getPromise()}}const iy="@firebase/storage",ry="0.11.2";/**
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
 */const pP="storage";function mP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new dP(n,i,r,e,as)}function gP(){An(new hn(pP,mP,"PUBLIC").setMultipleInstances(!0)),jt(iy,ry,""),jt(iy,ry,"esm2017")}gP();const Nu=new WeakMap;function JE(t,e){return Nu.has(e)||Nu.set(e,t||{f:{},r:{},s:{},u:{}}),Nu.get(e)}function yP(t,e,n,i){if(!t)return n;const[r,s]=ZE(t);if(!r)return n;const o=JE(void 0,i)[r]||{},a=e||s;return a&&a in o?o[a]:n}function _P(t,e,n,i){if(!t)return;const[r,s]=ZE(t);if(!r)return;const o=JE(void 0,i)[r],a=e||s;if(a)return n.then(l=>{o[a]=l}).catch(bn),a}function ZE(t){return rA(t)||sA(t)?["f",t.path]:oA(t)?["r",t.toString()]:aA(t)?["s",t.toString()]:[]}const xu=new WeakMap;function vP(t,e,n){const i=$f();xu.has(i)||xu.set(i,new Map);const r=xu.get(i),s=_P(e,n,t,i);return s&&r.set(s,t),s?()=>r.delete(s):bn}const bP={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function Wh(t,e,n,i){if(!iA(t))return[t,{}];const r=[{},{}],s=Object.keys(n).reduce((a,l)=>{const c=n[l];return a[c.path]=c.data(),a},{});function o(a,l,c,u){l=l||{};const[h,f]=u;Object.getOwnPropertyNames(a).forEach(d=>{const m=Object.getOwnPropertyDescriptor(a,d);m&&!m.enumerable&&Object.defineProperty(h,d,m)});for(const d in a){const m=a[d];if(m==null||m instanceof Date||m instanceof Qe||m instanceof $c)h[d]=m;else if(jf(m)){const y=c+d;h[d]=y in n?l[d]:m.path,f[y]=m.converter?m:m.withConverter(i.converter)}else if(Array.isArray(m)){h[d]=Array(m.length);for(let y=0;y<m.length;y++){const b=m[y];b&&b.path in s&&(h[d][y]=s[b.path])}o(m,l[d]||h[d],c+d+".",[h[d],f])}else rr(m)?(h[d]={},o(m,l[d],c+d+".",[h[d],f])):h[d]=m}}return o(t,e,"",r),r}const sp={reset:!1,wait:!0,maxRefDepth:2,converter:bP,snapshotOptions:{serverTimestamps:"estimate"}};function Ol(t){for(const e in t)t[e].unsub()}function qh(t,e,n,i,r,s,o,a,l){const[c,u]=Wh(i.data(t.snapshotOptions),Bf(e,n),r,t);s.set(e,n,c),Gh(t,e,n,r,u,s,o,a,l)}function EP({ref:t,target:e,path:n,depth:i,resolve:r,reject:s,ops:o},a){const l=Object.create(null);let c=bn;return a.once?GE(t).then(u=>{u.exists()?qh(a,e,n,u,l,o,i,r,s):(o.set(e,n,null),r())}).catch(s):c=rp(t,u=>{u.exists()?qh(a,e,n,u,l,o,i,r,s):(o.set(e,n,null),r())},s),()=>{c(),Ol(l)}}function Gh(t,e,n,i,r,s,o,a,l){const c=Object.keys(r);if(Object.keys(i).filter(y=>c.indexOf(y)<0).forEach(y=>{i[y].unsub(),delete i[y]}),!c.length||++o>t.maxRefDepth)return a(n);let h=0;const f=c.length,d=Object.create(null);function m(y){y in d&&++h>=f&&a(n)}c.forEach(y=>{const b=i[y],_=r[y],v=`${n}.${y}`;if(d[v]=!0,b)if(b.path!==_.path)b.unsub();else return;i[y]={data:()=>Bf(e,v),unsub:EP({ref:_,target:e,path:v,depth:o,ops:s,resolve:m.bind(null,v),reject:l},t),path:_.path}})}function wP(t,e,n,i,r,s){const o=Object.assign({},sp,s),{snapshotListenOptions:a,snapshotOptions:l,wait:c,once:u}=o,h="value";let f=Dt(c?[]:t.value);c||n.set(t,h,[]);const d=i;let m,y=bn;const b=[],_={added:({newIndex:E,doc:I})=>{b.splice(E,0,Object.create(null));const F=b[E],[Q,re]=Wh(I.data(l),void 0,F,o);n.add(P(f),E,Q),Gh(o,f,`${h}.${E}`,F,re,n,0,i.bind(null,I),r)},modified:({oldIndex:E,newIndex:I,doc:F})=>{const Q=P(f),re=b[E],ge=Q[E],[je,ft]=Wh(F.data(l),ge,re,o);b.splice(I,0,re),n.remove(Q,E),n.add(Q,I,je),Gh(o,f,`${h}.${I}`,re,ft,n,0,i,r)},removed:({oldIndex:E})=>{const I=P(f);n.remove(I,E),Ol(b.splice(E,1)[0])}};function v(E){const I=E.docChanges(a);if(!m&&I.length){m=!0;let F=0;const Q=I.length,re=Object.create(null);for(let ge=0;ge<Q;ge++)re[I[ge].doc.id]=!0;i=ge=>{ge&&ge.id in re&&++F>=Q&&(c&&(n.set(t,h,P(f)),f=t),d(P(f)),i=bn)}}I.forEach(F=>{_[F.type](F)}),I.length||(c&&(n.set(t,h,P(f)),f=t),i(P(f)))}return u?jD(e).then(v).catch(r):y=rp(e,v,r),E=>{if(y(),E){const I=typeof E=="function"?E():[];n.set(t,h,I)}b.forEach(Ol)}}function TP(t,e,n,i,r,s){const o=Object.assign({},sp,s),a="value",l=Object.create(null);i=lA(i,()=>Bf(t,a));let c=bn;function u(h){h.exists()?qh(o,t,a,h,l,n,0,i,r):(n.set(t,a,null),i(null))}return o.once?GE(e).then(u).catch(r):c=rp(e,u,r),h=>{if(c(),h){const f=typeof h=="function"?h():null;n.set(t,a,f)}Ol(l)}}function IP(t,e){let n=bn;const i=Object.assign({},sp,e),r=P(t),s=i.target||Dt();cA()&&(i.once=!0);const o=yP(r,i.ssrKey,s.value,$f());s.value=o;let l=!(wv(r)?(o||[]).length>0:o!==void 0);const c=Dt(!1),u=Dt(),h=y_(),f=n_();let d=bn;function m(){let _=P(t);const v=new Promise((E,I)=>{if(n(i.reset),!_)return n=bn,E(null);c.value=l,l=!0,_.converter||(_=_.withConverter(i.converter)),n=(jf(_)?TP:wP)(s,_,CP,E,I,i)}).catch(E=>(h.value===v&&(u.value=E),Promise.reject(E))).finally(()=>{h.value===v&&(c.value=!1)});h.value=v}let y=bn;ct(t)&&(y=Rr(t,m)),m(),r&&(d=vP(h.value,r,i.ssrKey)),Zl()&&x_(()=>h.value),f&&nT(b);function b(_=i.reset){y(),d(),n(_)}return Object.defineProperties(s,{error:{get:()=>u},data:{get:()=>s},pending:{get:()=>c},promise:{get:()=>h},stop:{get:()=>b}})}const CP={set:(t,e,n)=>tA(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function Wt(t,e){return IP(t,e)}function gs(t){return FE($f(t))}function SP(t,{firebaseApp:e,modules:n=[]}){t.provide(Ev,e);for(const i of n)t.use(i.bind(null,e))}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const vr=typeof window<"u";function AP(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ee=Object.assign;function Ou(t,e){const n={};for(const i in e){const r=e[i];n[i]=fn(r)?r.map(t):t(r)}return n}const Ws=()=>{},fn=Array.isArray,kP=/\/$/,RP=t=>t.replace(kP,"");function Du(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=t(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=DP(i??e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function NP(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function sy(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function xP(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&Jr(e.matched[i],n.matched[r])&&ew(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Jr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ew(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!OP(t[n],e[n]))return!1;return!0}function OP(t,e){return fn(t)?oy(t,e):fn(e)?oy(e,t):t===e}function oy(t,e){return fn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function DP(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/");let r=n.length-1,s,o;for(s=0;s<i.length;s++)if(o=i[s],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(s-(s===i.length?1:0)).join("/")}var wo;(function(t){t.pop="pop",t.push="push"})(wo||(wo={}));var qs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(qs||(qs={}));function PP(t){if(!t)if(vr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),RP(t)}const MP=/^[^#]+#/;function LP(t,e){return t.replace(MP,"#")+e}function FP(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const zc=()=>({left:window.pageXOffset,top:window.pageYOffset});function UP(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=FP(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function ay(t,e){return(history.state?history.state.position-e:-1)+t}const Yh=new Map;function VP(t,e){Yh.set(t,e)}function $P(t){const e=Yh.get(t);return Yh.delete(t),e}let BP=()=>location.protocol+"//"+location.host;function tw(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),sy(l,"")}return sy(n,t)+i+r}function jP(t,e,n,i){let r=[],s=[],o=null;const a=({state:f})=>{const d=tw(t,location),m=n.value,y=e.value;let b=0;if(f){if(n.value=d,e.value=f,o&&o===m){o=null;return}b=y?f.position-y.position:0}else i(d);r.forEach(_=>{_(n.value,m,{delta:b,type:wo.pop,direction:b?b>0?qs.forward:qs.back:qs.unknown})})};function l(){o=n.value}function c(f){r.push(f);const d=()=>{const m=r.indexOf(f);m>-1&&r.splice(m,1)};return s.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(Ee({},f.state,{scroll:zc()}),"")}function h(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function ly(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?zc():null}}function zP(t){const{history:e,location:n}=window,i={value:tw(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:BP()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),r.value=c}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(l,c){const u=Ee({},e.state,ly(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=Ee({},r.value,e.state,{forward:l,scroll:zc()});s(u.current,u,!0);const h=Ee({},ly(i.value,l,null),{position:u.position+1},c);s(l,h,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function HP(t){t=PP(t);const e=zP(t),n=jP(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=Ee({location:"",base:t,go:i,createHref:LP.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function KP(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),HP(t)}function WP(t){return typeof t=="string"||t&&typeof t=="object"}function nw(t){return typeof t=="string"||typeof t=="symbol"}const ii={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},iw=Symbol("");var cy;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(cy||(cy={}));function Zr(t,e){return Ee(new Error,{type:t,[iw]:!0},e)}function Dn(t,e){return t instanceof Error&&iw in t&&(e==null||!!(t.type&e))}const uy="[^/]+?",qP={sensitive:!1,strict:!1,start:!0,end:!0},GP=/[.+*?^${}()[\]/\\]/g;function YP(t,e){const n=Ee({},qP,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(GP,"\\$&"),d+=40;else if(f.type===1){const{value:m,repeatable:y,optional:b,regexp:_}=f;s.push({name:m,repeatable:y,optional:b});const v=_||uy;if(v!==uy){d+=10;try{new RegExp(`(${v})`)}catch(I){throw new Error(`Invalid custom RegExp for param "${m}" (${v}): `+I.message)}}let E=y?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;h||(E=b&&c.length<2?`(?:/${E})`:"/"+E),b&&(E+="?"),r+=E,d+=20,b&&(d+=-8),y&&(d+=-20),v===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",m=s[f-1];h[m.name]=d&&m.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:m,repeatable:y,optional:b}=d,_=m in c?c[m]:"";if(fn(_)&&!y)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const v=fn(_)?_.join("/"):_;if(!v)if(b)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=v}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function QP(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function XP(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=QP(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(hy(i))return 1;if(hy(r))return-1}return r.length-i.length}function hy(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const JP={type:0,value:""},ZP=/[a-zA-Z0-9_]/;function eM(t){if(!t)return[[]];if(t==="/")return[[JP]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${c}": ${d}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function h(){c&&(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):f();break;case 4:f(),n=i;break;case 1:l==="("?n=2:ZP.test(l)?f():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),r}function tM(t,e,n){const i=YP(eM(t.path),n),r=Ee(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function nM(t,e){const n=[],i=new Map;e=py({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,h,f){const d=!f,m=iM(u);m.aliasOf=f&&f.record;const y=py(e,u),b=[m];if("alias"in u){const E=typeof u.alias=="string"?[u.alias]:u.alias;for(const I of E)b.push(Ee({},m,{components:f?f.record.components:m.components,path:I,aliasOf:f?f.record:m}))}let _,v;for(const E of b){const{path:I}=E;if(h&&I[0]!=="/"){const F=h.record.path,Q=F[F.length-1]==="/"?"":"/";E.path=h.record.path+(I&&Q+I)}if(_=tM(E,h,y),f?f.alias.push(_):(v=v||_,v!==_&&v.alias.push(_),d&&u.name&&!dy(_)&&o(u.name)),m.children){const F=m.children;for(let Q=0;Q<F.length;Q++)s(F[Q],_,f&&f.children[Q])}f=f||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&l(_)}return v?()=>{o(v)}:Ws}function o(u){if(nw(u)){const h=i.get(u);h&&(i.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&XP(u,n[h])>=0&&(u.record.path!==n[h].record.path||!rw(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!dy(u)&&i.set(u.record.name,u)}function c(u,h){let f,d={},m,y;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw Zr(1,{location:u});y=f.record.name,d=Ee(fy(h.params,f.keys.filter(v=>!v.optional).map(v=>v.name)),u.params&&fy(u.params,f.keys.map(v=>v.name))),m=f.stringify(d)}else if("path"in u)m=u.path,f=n.find(v=>v.re.test(m)),f&&(d=f.parse(m),y=f.record.name);else{if(f=h.name?i.get(h.name):n.find(v=>v.re.test(h.path)),!f)throw Zr(1,{location:u,currentLocation:h});y=f.record.name,d=Ee({},h.params,u.params),m=f.stringify(d)}const b=[];let _=f;for(;_;)b.unshift(_.record),_=_.parent;return{name:y,path:m,params:d,matched:b,meta:sM(b)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function fy(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function iM(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:rM(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function rM(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="boolean"?n:n[i];return e}function dy(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function sM(t){return t.reduce((e,n)=>Ee(e,n.meta),{})}function py(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function rw(t,e){return e.children.some(n=>n===t||rw(t,n))}const sw=/#/g,oM=/&/g,aM=/\//g,lM=/=/g,cM=/\?/g,ow=/\+/g,uM=/%5B/g,hM=/%5D/g,aw=/%5E/g,fM=/%60/g,lw=/%7B/g,dM=/%7C/g,cw=/%7D/g,pM=/%20/g;function op(t){return encodeURI(""+t).replace(dM,"|").replace(uM,"[").replace(hM,"]")}function mM(t){return op(t).replace(lw,"{").replace(cw,"}").replace(aw,"^")}function Qh(t){return op(t).replace(ow,"%2B").replace(pM,"+").replace(sw,"%23").replace(oM,"%26").replace(fM,"`").replace(lw,"{").replace(cw,"}").replace(aw,"^")}function gM(t){return Qh(t).replace(lM,"%3D")}function yM(t){return op(t).replace(sw,"%23").replace(cM,"%3F")}function _M(t){return t==null?"":yM(t).replace(aM,"%2F")}function Dl(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function vM(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(ow," "),o=s.indexOf("="),a=Dl(o<0?s:s.slice(0,o)),l=o<0?null:Dl(s.slice(o+1));if(a in e){let c=e[a];fn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function my(t){let e="";for(let n in t){const i=t[n];if(n=gM(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(fn(i)?i.map(s=>s&&Qh(s)):[i&&Qh(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function bM(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=fn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const EM=Symbol(""),gy=Symbol(""),Hc=Symbol(""),ap=Symbol(""),Xh=Symbol("");function Ss(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function oi(t,e,n,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Zr(4,{from:n,to:e})):h instanceof Error?a(h):WP(h)?a(Zr(2,{from:e,to:h})):(s&&i.enterCallbacks[r]===s&&typeof h=="function"&&s.push(h),o())},c=t.call(i&&i.instances[r],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Pu(t,e,n,i){const r=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(wM(a)){const c=(a.__vccOpts||a)[e];c&&r.push(oi(c,n,i,s,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=AP(c)?c.default:c;s.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&oi(f,n,i,s,o)()}))}}return r}function wM(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function yy(t){const e=Bt(Hc),n=Bt(ap),i=ie(()=>e.resolve(P(t.to))),r=ie(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Jr.bind(null,u));if(f>-1)return f;const d=_y(l[c-2]);return c>1&&_y(u)===d&&h[h.length-1].path!==d?h.findIndex(Jr.bind(null,l[c-2])):f}),s=ie(()=>r.value>-1&&SM(n.params,i.value.params)),o=ie(()=>r.value>-1&&r.value===n.matched.length-1&&ew(n.params,i.value.params));function a(l={}){return CM(l)?e[P(t.replace)?"replace":"push"](P(t.to)).catch(Ws):Promise.resolve()}return{route:i,href:ie(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const TM=No({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:yy,setup(t,{slots:e}){const n=Ro(yy(t)),{options:i}=Bt(Hc),r=ie(()=>({[vy(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[vy(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:tc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),IM=TM;function CM(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function SM(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!fn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function _y(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const vy=(t,e,n)=>t??e??n,AM=No({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Bt(Xh),r=ie(()=>t.route||i.value),s=Bt(gy,0),o=ie(()=>{let c=P(s);const{matched:u}=r.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=ie(()=>r.value.matched[o.value]);La(gy,ie(()=>o.value+1)),La(EM,a),La(Xh,r);const l=Dt();return Rr(()=>[l.value,a.value,t.name],([c,u,h],[f,d,m])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Jr(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return by(n.default,{Component:f,route:c});const d=h.props[u],m=d?d===!0?c.params:typeof d=="function"?d(c):d:null,b=tc(f,Ee({},m,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return by(n.default,{Component:b,route:c})||b}}});function by(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const lp=AM;function kM(t){const e=nM(t.routes,t),n=t.parseQuery||vM,i=t.stringifyQuery||my,r=t.history,s=Ss(),o=Ss(),a=Ss(),l=y_(ii);let c=ii;vr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ou.bind(null,C=>""+C),h=Ou.bind(null,_M),f=Ou.bind(null,Dl);function d(C,U){let M,H;return nw(C)?(M=e.getRecordMatcher(C),H=U):H=C,e.addRoute(H,M)}function m(C){const U=e.getRecordMatcher(C);U&&e.removeRoute(U)}function y(){return e.getRoutes().map(C=>C.record)}function b(C){return!!e.getRecordMatcher(C)}function _(C,U){if(U=Ee({},U||l.value),typeof C=="string"){const p=Du(n,C,U.path),g=e.resolve({path:p.path},U),w=r.createHref(p.fullPath);return Ee(p,g,{params:f(g.params),hash:Dl(p.hash),redirectedFrom:void 0,href:w})}let M;if("path"in C)M=Ee({},C,{path:Du(n,C.path,U.path).path});else{const p=Ee({},C.params);for(const g in p)p[g]==null&&delete p[g];M=Ee({},C,{params:h(C.params)}),U.params=h(U.params)}const H=e.resolve(M,U),de=C.hash||"";H.params=u(f(H.params));const Ve=NP(i,Ee({},C,{hash:mM(de),path:H.path})),se=r.createHref(Ve);return Ee({fullPath:Ve,hash:de,query:i===my?bM(C.query):C.query||{}},H,{redirectedFrom:void 0,href:se})}function v(C){return typeof C=="string"?Du(n,C,l.value.path):Ee({},C)}function E(C,U){if(c!==C)return Zr(8,{from:U,to:C})}function I(C){return re(C)}function F(C){return I(Ee(v(C),{replace:!0}))}function Q(C){const U=C.matched[C.matched.length-1];if(U&&U.redirect){const{redirect:M}=U;let H=typeof M=="function"?M(C):M;return typeof H=="string"&&(H=H.includes("?")||H.includes("#")?H=v(H):{path:H},H.params={}),Ee({query:C.query,hash:C.hash,params:"path"in H?{}:C.params},H)}}function re(C,U){const M=c=_(C),H=l.value,de=C.state,Ve=C.force,se=C.replace===!0,p=Q(M);if(p)return re(Ee(v(p),{state:typeof p=="object"?Ee({},de,p.state):de,force:Ve,replace:se}),U||M);const g=M;g.redirectedFrom=U;let w;return!Ve&&xP(i,H,M)&&(w=Zr(16,{to:g,from:H}),Si(H,H,!0,!1)),(w?Promise.resolve(w):je(g,H)).catch(T=>Dn(T)?Dn(T,2)?T:Qt(T):Ae(T,g,H)).then(T=>{if(T){if(Dn(T,2))return re(Ee({replace:se},v(T.to),{state:typeof T.to=="object"?Ee({},de,T.to.state):de,force:Ve}),U||g)}else T=ei(g,H,!0,se,de);return ft(g,H,T),T})}function ge(C,U){const M=E(C,U);return M?Promise.reject(M):Promise.resolve()}function je(C,U){let M;const[H,de,Ve]=RM(C,U);M=Pu(H.reverse(),"beforeRouteLeave",C,U);for(const p of H)p.leaveGuards.forEach(g=>{M.push(oi(g,C,U))});const se=ge.bind(null,C,U);return M.push(se),mr(M).then(()=>{M=[];for(const p of s.list())M.push(oi(p,C,U));return M.push(se),mr(M)}).then(()=>{M=Pu(de,"beforeRouteUpdate",C,U);for(const p of de)p.updateGuards.forEach(g=>{M.push(oi(g,C,U))});return M.push(se),mr(M)}).then(()=>{M=[];for(const p of C.matched)if(p.beforeEnter&&!U.matched.includes(p))if(fn(p.beforeEnter))for(const g of p.beforeEnter)M.push(oi(g,C,U));else M.push(oi(p.beforeEnter,C,U));return M.push(se),mr(M)}).then(()=>(C.matched.forEach(p=>p.enterCallbacks={}),M=Pu(Ve,"beforeRouteEnter",C,U),M.push(se),mr(M))).then(()=>{M=[];for(const p of o.list())M.push(oi(p,C,U));return M.push(se),mr(M)}).catch(p=>Dn(p,8)?p:Promise.reject(p))}function ft(C,U,M){for(const H of a.list())H(C,U,M)}function ei(C,U,M,H,de){const Ve=E(C,U);if(Ve)return Ve;const se=U===ii,p=vr?history.state:{};M&&(H||se?r.replace(C.fullPath,Ee({scroll:se&&p&&p.scroll},de)):r.push(C.fullPath,de)),l.value=C,Si(C,U,M,se),Qt()}let dn;function hr(){dn||(dn=r.listen((C,U,M)=>{if(!sa.listening)return;const H=_(C),de=Q(H);if(de){re(Ee(de,{replace:!0}),H).catch(Ws);return}c=H;const Ve=l.value;vr&&VP(ay(Ve.fullPath,M.delta),zc()),je(H,Ve).catch(se=>Dn(se,12)?se:Dn(se,2)?(re(se.to,H).then(p=>{Dn(p,20)&&!M.delta&&M.type===wo.pop&&r.go(-1,!1)}).catch(Ws),Promise.reject()):(M.delta&&r.go(-M.delta,!1),Ae(se,H,Ve))).then(se=>{se=se||ei(H,Ve,!1),se&&(M.delta&&!Dn(se,8)?r.go(-M.delta,!1):M.type===wo.pop&&Dn(se,20)&&r.go(-1,!1)),ft(H,Ve,se)}).catch(Ws)}))}let Ci=Ss(),_s=Ss(),He;function Ae(C,U,M){Qt(C);const H=_s.list();return H.length?H.forEach(de=>de(C,U,M)):console.error(C),Promise.reject(C)}function Ie(){return He&&l.value!==ii?Promise.resolve():new Promise((C,U)=>{Ci.add([C,U])})}function Qt(C){return He||(He=!C,hr(),Ci.list().forEach(([U,M])=>C?M(C):U()),Ci.reset()),C}function Si(C,U,M,H){const{scrollBehavior:de}=t;if(!vr||!de)return Promise.resolve();const Ve=!M&&$P(ay(C.fullPath,0))||(H||!M)&&history.state&&history.state.scroll||null;return w_().then(()=>de(C,U,Ve)).then(se=>se&&UP(se)).catch(se=>Ae(se,C,U))}const Xt=C=>r.go(C);let Rt;const fr=new Set,sa={currentRoute:l,listening:!0,addRoute:d,removeRoute:m,hasRoute:b,getRoutes:y,resolve:_,options:t,push:I,replace:F,go:Xt,back:()=>Xt(-1),forward:()=>Xt(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:_s.add,isReady:Ie,install(C){const U=this;C.component("RouterLink",IM),C.component("RouterView",lp),C.config.globalProperties.$router=U,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>P(l)}),vr&&!Rt&&l.value===ii&&(Rt=!0,I(r.location).catch(de=>{}));const M={};for(const de in ii)M[de]=ie(()=>l.value[de]);C.provide(Hc,U),C.provide(ap,Ro(M)),C.provide(Xh,l);const H=C.unmount;fr.add(C),C.unmount=function(){fr.delete(C),fr.size<1&&(c=ii,dn&&dn(),dn=null,l.value=ii,Rt=!1,He=!1),H()}}};return sa}function mr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function RM(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>Jr(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Jr(c,l))||r.push(l))}return[n,i,r]}function cp(){return Bt(Hc)}function Kc(){return Bt(ap)}const NM={class:"container"},xM={__name:"App",setup(t){const e=Kc();return(n,i)=>(oe(),we("div",NM,[(oe(),Bn(P(lp),{key:P(e).fullPath}))]))}},Ii=iv({apiKey:"AIzaSyAnOiG77O1ukT9C2x8u1VbMLw7For9C_3w",authDomain:"bingo-50cec.firebaseapp.com",databaseURL:"https://bingo-50cec-default-rtdb.europe-west1.firebasedatabase.app",projectId:"bingo-50cec",storageBucket:"bingo-50cec.appspot.com",messagingSenderId:"866066986693",appId:"1:866066986693:web:de513df8434d232b0562ac",measurementId:"G-8F3EECYHQ0"}),OM=FE(Ii);Eo(OM,"todos");const Jn=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},DM={__name:"tileFlag",props:{color:{type:String,required:!0},icon:{type:String,required:!0},inverted:{type:String,required:!1,default:()=>!1}},setup(t){const e=t;return Of(n=>({ddb5d130:e.color})),(n,i)=>{const r=D_("font-awesome-icon");return oe(),we("div",{class:di(["flag",{inverted:e.inverted}]),style:ko({backgroundColor:n.backgroundColor})},[Ye(r,{class:"icon",icon:["fas",e.icon]},null,8,["icon"])],6)}}},uw=Jn(DM,[["__scopeId","data-v-b5948cb0"]]);const PM=["data-coord"],MM=["src"],LM={class:"boardTileFlags"},FM={__name:"BoardTile",props:{tile:{type:Object,required:!0},collected:{type:Array,default:()=>{}},verify:{type:Array,default:()=>{}},selected:{type:Boolean,default:!1},needVerifying:{type:Boolean,required:!1},groupsData:{type:Object}},setup(t){const e=t,n=ie(()=>e.tile),i=ie(()=>e.groupsData),r=ie(()=>e.selected),s=ie(()=>{var a;return(a=e.collected)==null?void 0:a.includes(n.value.id)}),o=ie(()=>{var a;return(a=e.verify)==null?void 0:a.includes(n.value.id)});return(a,l)=>P(n)?(oe(),we("div",{key:0,class:di(["tile",{isCollected:P(s),needVerifying:e.needVerifying,isVerify:P(o),isSelected:P(r)}]),"data-coord":P(n).id},[Te("img",{src:"https://oldschool.runescape.wiki/images/Frog_%28Ruins_of_Camdozaal%29.png?6ae5e"},null,8,MM),Te("div",LM,[P(i)?(oe(!0),we(Ge,{key:0},xo(P(i),c=>(oe(),we(Ge,null,[c.collected.includes(P(n).id)?(oe(),Bn(uw,{class:di(["tileFlag","flag-end-"+c.flagEnd]),key:P(n).id+c.color,icon:c.icon,color:a.none,inverted:!0},null,8,["class","icon","color"])):bt("",!0)],64))),256)):bt("",!0)])],10,PM)):bt("",!0)}},Wc=Jn(FM,[["__scopeId","data-v-71910c51"]]),UM={key:0},VM=Te("h1",null,"props.tileData.title",-1),$M=Te("p",null,"props.tileData.description",-1),BM=["onClick","disabled"],jM={__name:"sidePannel",props:{tileData:{type:Object,required:!0},collected:{type:Array,default:()=>{}},verify:{type:Array,default:()=>{}},boardUUID:{type:String,required:!0},teamUUID:{type:String,required:!0}},setup(t){const e=t,n=gs(Ii),i=async()=>{e.verify.includes(e.tileData.id)||Pi(St(n,"Boards",e.boardUUID,"Groups",e.teamUUID),{verify:[...e.verify,e.tileData.id]})};return(r,s)=>e.tileData?(oe(),we("div",UM,[Ye(Wc,{tile:e.tileData,verify:e.verify,collected:e.collected},null,8,["tile","verify","collected"]),Te("h2",null,"{ "+vn(e.tileData.id.split("")[0])+" , "+vn(e.tileData.id.split("")[1])+" }",1),VM,$M,Te("button",{class:"btn",onClick:rs(i,["prevent"]),disabled:e.verify.includes(e.tileData.id)||e.collected.includes(e.tileData.id)},"Mark Collected",8,BM)])):bt("",!0)}};const up=t=>(ql("data-v-e5d9f7cb"),t=t(),Gl(),t),zM={key:0},HM=up(()=>Te("br",null,null,-1)),KM=up(()=>Te("br",null,null,-1)),WM=up(()=>Te("br",null,null,-1)),qM={__name:"scoreCard",props:{groupsData:{type:Object,required:!0}},setup(t){const e=t;return(n,i)=>(oe(),we("div",null,[e.groupsData?(oe(),we("ul",zM,[(oe(!0),we(Ge,null,xo(e.groupsData,(r,s)=>(oe(),we("li",{key:s+t.groupsData},[Ye(uw,{color:r.color,class:di(["tileFlag","flag-end-"+r.flagEnd]),icon:r.icon,style:ko({"--groupColor":r.color,"--width":750/750*100*1.5+"px"})},null,8,["color","class","icon","style"]),Gt(" "+vn(r.name),1),HM,Gt(" score: "+vn(r.points),1),KM,WM]))),128))])):bt("",!0)]))}},GM=Jn(qM,[["__scopeId","data-v-e5d9f7cb"]]);const YM={key:1,class:"bingo-board"},QM={key:0},XM=["onSubmit"],JM={__name:"BingoBoard",props:{boardUUID:{type:String},teamCode:{type:String}},setup(t){const e=t;Of(v=>({"4649320a":P(h),"690e1563":P(f)}));const n=gs(Ii),i=cp(),r=Dt(""),s=Dt(""),o=Dt(""),a=Wt(St(n,"Boards",e.boardUUID)),l=Wt(Eo(n,`Boards/${e.boardUUID}/Tiles`)),{data:c}=Wt(St(n,`Boards/${e.boardUUID}/Groups/${e.teamCode}/`)),{data:u}=Wt(Eo(n,"Boards",e.boardUUID,"Groups")),h=ie(()=>{var v;return((v=a==null?void 0:a.value)==null?void 0:v.settings.width)||7}),f=ie(()=>{var v;return((v=a==null?void 0:a.value)==null?void 0:v.settings.height)||7}),d=ie(()=>{var v;return((v=c==null?void 0:c.value)==null?void 0:v.collected)||[]}),m=ie(()=>{var v;return((v=c==null?void 0:c.value)==null?void 0:v.verify)||[]}),y=ie(()=>{var E;let v={};return u&&((E=u==null?void 0:u.value)==null||E.forEach((I,F)=>{I.name!="moderator"&&(v[I.id]={collected:I.collected,color:I.color,name:I.name,icon:I.icon,points:I.points,flagEnd:I.flagEnd})})),v||{}}),b=async()=>{var v;if(r.value!==""){let E={name:"private-board",params:{boardUUID:e.boardUUID,teamCode:r.value}};const{data:I}=Wt(St(n,"Boards",e.boardUUID,"Groups",r.value));I&&((v=I==null?void 0:I.value)==null?void 0:v.name)=="moderator"&&(E.name="moderator"),i.push(E)}},_=v=>{s.value=v,o.value=v};return(v,E)=>{const I=D_("font-awesome-icon");return oe(),we(Ge,null,[P(u)?(oe(),Bn(GM,{key:0,class:"scoreCard",groupsData:P(y)},null,8,["groupsData"])):bt("",!0),P(l)?(oe(),we("main",YM,[(oe(!0),we(Ge,null,xo(P(l),F=>(oe(),Bn(Wc,{key:F.id,tile:F,groupsData:P(y),selected:F==o.value,collected:P(d),verify:P(m),onClick:Q=>_(F)},null,8,["tile","groupsData","selected","collected","verify","onClick"]))),128))])):bt("",!0),Te("aside",null,[P(c)?(oe(),we("p",QM,[Ye(I,{class:"icon",icon:["fas",P(c).icon]},null,8,["icon"]),Gt(" "+vn(P(c).name),1)])):bt("",!0),P(c)?bt("",!0):(oe(),we("form",{key:1,onSubmit:rs(b,["prevent"])},[Gt(" team code: "),Ql(Te("input",{type:"text",name:"teamId","onUpdate:modelValue":E[0]||(E[0]=F=>r.value=F)},null,512),[[nc,r.value]])],40,XM)),Ye(jM,{tileData:s.value,collected:P(d),verify:P(m),boardUUID:e.boardUUID,teamUUID:e.teamCode},null,8,["tileData","collected","verify","boardUUID","teamUUID"])])],64)}}},ZM=Jn(JM,[["__scopeId","data-v-3a475415"]]);const eL=t=>(ql("data-v-2c91e7bf"),t=t(),Gl(),t),tL={key:0,class:"heading"},nL=eL(()=>Te("h2",null,"Notes",-1)),iL=["disabled"],rL={__name:"BoardView",setup(t){const e=gs(Ii),n=Kc(),i=Dt(""),r=ie(()=>n.params.teamCode),s=ie(()=>n.params.boardUUID),{data:o}=Wt(St(e,`Boards/${s.value}/Groups/${r.value}/`)),a=async()=>{i.value=o.value.notes,await Pi(St(e,`Boards/${s.value}/Groups/${r.value}/`),{notes:i.value})};return(l,c)=>(oe(),we(Ge,null,[Te("section",null,[Ye(ZM,{boardUUID:P(s),teamCode:P(r)},null,8,["boardUUID","teamCode"])]),P(o)?(oe(),we("div",tL,[nL,Gt(),Te("button",{class:"btn",onClick:a,disabled:i.value==P(o).notes},"Save notes",8,iL)])):bt("",!0),P(o)?Ql((oe(),we("textarea",{key:1,name:"teamNotes",id:"teamNotes",rows:"10","onUpdate:modelValue":c[0]||(c[0]=u=>P(o).notes=u),onSubmit:c[1]||(c[1]=rs(()=>{},["prevent"]))},null,544)),[[nc,P(o).notes]]):bt("",!0)],64))}},Ey=Jn(rL,[["__scopeId","data-v-2c91e7bf"]]);const sL=t=>(ql("data-v-1d7f4765"),t=t(),Gl(),t),oL=sL(()=>Te("br",null,null,-1)),aL=["checked","onClick"],lL={__name:"moderatorSidePannel",props:{tileData:{type:Object,required:!0},boardUUID:{type:Object,required:!0},groups:{type:Object,required:!0}},setup(t){const e=t,n=gs(Ii),i=ie(()=>e.tileData),r=ie(()=>e.groups),s=({tile:o,group:a})=>{a.collected.includes(o.id)?(Pi(St(n,"Boards",e.boardUUID,"Groups",a.id),{collected:a.collected.filter(l=>l!=o.id)}),Pi(St(n,"Boards",e.boardUUID,"Groups",a.id),{points:a.points-o.points})):(Pi(St(n,"Boards",e.boardUUID,"Groups",a.id),{collected:[...a.collected,o.id]}),Pi(St(n,"Boards",e.boardUUID,"Groups",a.id),{points:a.points+o.points}),a.verify.includes(o.id)&&Pi(St(n,"Boards",e.boardUUID,"Groups",a.id),{verify:a.verify.filter(l=>l!=o.id)}))};return(o,a)=>e.tileData?(oe(),we("div",{key:e.tileData.id},[Ye(Wc,{tile:P(i)},null,8,["tile"]),Te("h2",null,"{ "+vn(P(i).id.split("")[0])+" , "+vn(P(i).id.split("")[1])+" }",1),Te("ul",null,[(oe(!0),we(Ge,null,xo(P(r),l=>(oe(),we("li",{key:l.id+P(i).id,class:di({checkThis:l.verify.includes(P(i).id)})},[Gt(vn(l.name)+" : "+vn(l.verify.includes(P(i).id)),1),oL,Gt(" collected: "),(oe(),we("input",{type:"checkbox",key:l.id+P(i).id,checked:l.collected.includes(P(i).id),onClick:rs(c=>s({tile:P(i),group:l}),["prevent"])},null,8,aL))],2))),128))])])):bt("",!0)}},cL=Jn(lL,[["__scopeId","data-v-1d7f4765"]]);const uL={key:0,class:"bingo-board"},hL={key:0},fL={__name:"ModeratorBoard",props:{boardUUID:{type:String},teamCode:{type:String},groups:{type:Object}},setup(t){const e=t;Of(f=>({"2e70b338":P(l),"165e2c49":P(c)}));const n=gs(Ii),i=Dt(""),r=Dt(""),s=Wt(St(n,"Boards",e.boardUUID)),o=Wt(Eo(n,`Boards/${e.boardUUID}/Tiles`)),{data:a}=Wt(St(n,`Boards/${e.boardUUID}/Groups/${e.teamCode}/`)),l=ie(()=>{var f;return((f=s==null?void 0:s.value)==null?void 0:f.settings.width)||7}),c=ie(()=>{var f;return((f=s==null?void 0:s.value)==null?void 0:f.settings.height)||7}),u=f=>{i.value=f,r.value=f},h=f=>{let d=!1;return e.groups&&e.groups.forEach(m=>{m.verify.includes(f.id)&&(d=!0)}),d};return(f,d)=>(oe(),we(Ge,null,[P(o)?(oe(),we("main",uL,[(oe(!0),we(Ge,null,xo(P(o),m=>(oe(),Bn(Wc,{key:m.id,needVerifying:h(m),selected:m==r.value,tile:m,onClick:y=>u(m)},null,8,["needVerifying","selected","tile","onClick"]))),128))])):bt("",!0),Te("aside",null,[P(a)?(oe(),we("p",hL,vn(P(a).name),1)):bt("",!0),(oe(),Bn(cL,{tileData:i.value,key:i.value,boardUUID:e.boardUUID,groups:e.groups},null,8,["tileData","boardUUID","groups"]))])],64))}},dL=Jn(fL,[["__scopeId","data-v-dee37e0a"]]);const qc=t=>(ql("data-v-313e8530"),t=t(),Gl(),t),pL=["onSubmit"],mL=qc(()=>Te("br",null,null,-1)),gL=qc(()=>Te("br",null,null,-1)),yL=qc(()=>Te("br",null,null,-1)),_L=qc(()=>Te("button",{type:"submit",class:"btn"},"Go To Board",-1)),vL={__name:"ModeratorView",setup(t){const e=gs(Ii),n=Kc(),i=cp(),r=ie(()=>n.params.teamCode),s=Dt(""),o=ie(()=>n.params.boardUUID),{data:a}=Wt(St(e,`Boards/${o.value}/Groups/${r.value}/`)),{data:l}=Wt(Eo(e,"Boards",o.value,"Groups")),c=h=>{},u=async()=>{if(r.value!==""){let h={name:"private-board",params:{boardUUID:o.value,teamCode:s.value}};const{data:f}=Wt(St(e,"Boards",o.value,"Groups",s.value));f&&f.value.name=="moderator"&&(h.name="moderator"),i.push(h)}};return(h,f)=>(oe(),we("section",null,[P(a)&&P(a).name=="moderator"?(oe(),Bn(dL,{key:0,boardUUID:P(o),teamCode:P(r),onVerifyTile:f[0]||(f[0]=d=>c(h.tile,h.groupid)),groups:P(l)},null,8,["boardUUID","teamCode","groups"])):bt("",!0),Te("aside",null,[P(a)&&P(a).name!="moderator"?(oe(),we("form",{key:0,onSubmit:rs(u,["prevent"])},[Gt(" You are not a moderator, "),mL,Gt("please enter your code to go to the appropriate board for your team"),gL,yL,Gt(" team code: "),Ql(Te("input",{type:"text",name:"teamId","onUpdate:modelValue":f[1]||(f[1]=d=>s.value=d)},null,512),[[nc,s.value]]),_L],40,pL)):bt("",!0)])]))}},bL=Jn(vL,[["__scopeId","data-v-313e8530"]]);const EL=["onSubmit"],wL=["disabled"],TL={__name:"Home",setup(t){const e=Kc(),n=cp(),i=Dt(""),r=()=>{n.push({name:"overview",params:{boardUUID:i.value}})};return(s,o)=>(oe(),we(Ge,null,[Te("form",{onSubmit:rs(r,["prevent"])},[Gt(" Enter your bingo key: "),Ql(Te("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=a=>i.value=a)},null,512),[[nc,i.value]]),Te("button",{class:"btn",disabled:i.value==""},"Open Board",8,wL)],40,EL),(oe(),Bn(P(lp),{key:P(e).fullPath}))],64))}},IL=Jn(TL,[["__scopeId","data-v-629c09ef"]]),CL=kM({history:KP(),mode:"hash",routes:[{path:"/",name:"Home",component:IL},{path:"/b/:boardUUID",name:"overview",param:!0,component:Ey},{path:"/b/:boardUUID/team/:teamCode",name:"private-board",param:!0,component:Ey},{path:"/b/:boardUUID/m/:teamCode",name:"moderator",param:!0,component:bL}]});function wy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function V(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?wy(Object(n),!0).forEach(function(i){tt(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):wy(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Pl(t){return Pl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Pl(t)}function SL(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ty(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function AL(t,e,n){return e&&Ty(t.prototype,e),n&&Ty(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function tt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function hp(t,e){return RL(t)||xL(t,e)||hw(t,e)||DL()}function ea(t){return kL(t)||NL(t)||hw(t)||OL()}function kL(t){if(Array.isArray(t))return Jh(t)}function RL(t){if(Array.isArray(t))return t}function NL(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function xL(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],r=!0,s=!1,o,a;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(l){s=!0,a=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(s)throw a}}return i}}function hw(t,e){if(t){if(typeof t=="string")return Jh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Jh(t,e)}}function Jh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function OL(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function DL(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Iy=function(){},fp={},fw={},dw=null,pw={mark:Iy,measure:Iy};try{typeof window<"u"&&(fp=window),typeof document<"u"&&(fw=document),typeof MutationObserver<"u"&&(dw=MutationObserver),typeof performance<"u"&&(pw=performance)}catch{}var PL=fp.navigator||{},Cy=PL.userAgent,Sy=Cy===void 0?"":Cy,vi=fp,De=fw,Ay=dw,Ca=pw;vi.document;var Zn=!!De.documentElement&&!!De.head&&typeof De.addEventListener=="function"&&typeof De.createElement=="function",mw=~Sy.indexOf("MSIE")||~Sy.indexOf("Trident/"),Sa,Aa,ka,Ra,Na,Wn="___FONT_AWESOME___",Zh=16,gw="fa",yw="svg-inline--fa",nr="data-fa-i2svg",ef="data-fa-pseudo-element",ML="data-fa-pseudo-element-pending",dp="data-prefix",pp="data-icon",ky="fontawesome-i2svg",LL="async",FL=["HTML","HEAD","STYLE","SCRIPT"],_w=function(){try{return!0}catch{return!1}}(),Oe="classic",$e="sharp",mp=[Oe,$e];function ta(t){return new Proxy(t,{get:function(n,i){return i in n?n[i]:n[Oe]}})}var To=ta((Sa={},tt(Sa,Oe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),tt(Sa,$e,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Sa)),Io=ta((Aa={},tt(Aa,Oe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),tt(Aa,$e,{solid:"fass",regular:"fasr",light:"fasl"}),Aa)),Co=ta((ka={},tt(ka,Oe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),tt(ka,$e,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),ka)),UL=ta((Ra={},tt(Ra,Oe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),tt(Ra,$e,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Ra)),VL=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,vw="fa-layers-text",$L=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,BL=ta((Na={},tt(Na,Oe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),tt(Na,$e,{900:"fass",400:"fasr",300:"fasl"}),Na)),bw=[1,2,3,4,5,6,7,8,9,10],jL=bw.concat([11,12,13,14,15,16,17,18,19,20]),zL=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Bi={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},So=new Set;Object.keys(Io[Oe]).map(So.add.bind(So));Object.keys(Io[$e]).map(So.add.bind(So));var HL=[].concat(mp,ea(So),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Bi.GROUP,Bi.SWAP_OPACITY,Bi.PRIMARY,Bi.SECONDARY]).concat(bw.map(function(t){return"".concat(t,"x")})).concat(jL.map(function(t){return"w-".concat(t)})),Gs=vi.FontAwesomeConfig||{};function KL(t){var e=De.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function WL(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(De&&typeof De.querySelector=="function"){var qL=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];qL.forEach(function(t){var e=hp(t,2),n=e[0],i=e[1],r=WL(KL(n));r!=null&&(Gs[i]=r)})}var Ew={styleDefault:"solid",familyDefault:"classic",cssPrefix:gw,replacementClass:yw,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Gs.familyPrefix&&(Gs.cssPrefix=Gs.familyPrefix);var es=V(V({},Ew),Gs);es.autoReplaceSvg||(es.observeMutations=!1);var B={};Object.keys(Ew).forEach(function(t){Object.defineProperty(B,t,{enumerable:!0,set:function(n){es[t]=n,Ys.forEach(function(i){return i(B)})},get:function(){return es[t]}})});Object.defineProperty(B,"familyPrefix",{enumerable:!0,set:function(e){es.cssPrefix=e,Ys.forEach(function(n){return n(B)})},get:function(){return es.cssPrefix}});vi.FontAwesomeConfig=B;var Ys=[];function GL(t){return Ys.push(t),function(){Ys.splice(Ys.indexOf(t),1)}}var ri=Zh,wn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function YL(t){if(!(!t||!Zn)){var e=De.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=De.head.childNodes,i=null,r=n.length-1;r>-1;r--){var s=n[r],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=s)}return De.head.insertBefore(e,i),t}}var QL="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ao(){for(var t=12,e="";t-- >0;)e+=QL[Math.random()*62|0];return e}function ys(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function gp(t){return t.classList?ys(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function ww(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function XL(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(ww(t[n]),'" ')},"").trim()}function Gc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function yp(t){return t.size!==wn.size||t.x!==wn.x||t.y!==wn.y||t.rotate!==wn.rotate||t.flipX||t.flipY}function JL(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:c}}function ZL(t){var e=t.transform,n=t.width,i=n===void 0?Zh:n,r=t.height,s=r===void 0?Zh:r,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&mw?l+="translate(".concat(e.x/ri-i/2,"em, ").concat(e.y/ri-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/ri,"em), calc(-50% + ").concat(e.y/ri,"em)) "):l+="translate(".concat(e.x/ri,"em, ").concat(e.y/ri,"em) "),l+="scale(".concat(e.size/ri*(e.flipX?-1:1),", ").concat(e.size/ri*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var e2=`:root, :host {
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
}`;function Tw(){var t=gw,e=yw,n=B.cssPrefix,i=B.replacementClass,r=e2;if(n!==t||i!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(i))}return r}var Ry=!1;function Mu(){B.autoAddCss&&!Ry&&(YL(Tw()),Ry=!0)}var t2={mixout:function(){return{dom:{css:Tw,insertCss:Mu}}},hooks:function(){return{beforeDOMElementCreation:function(){Mu()},beforeI2svg:function(){Mu()}}}},qn=vi||{};qn[Wn]||(qn[Wn]={});qn[Wn].styles||(qn[Wn].styles={});qn[Wn].hooks||(qn[Wn].hooks={});qn[Wn].shims||(qn[Wn].shims=[]);var an=qn[Wn],Iw=[],n2=function t(){De.removeEventListener("DOMContentLoaded",t),Ml=1,Iw.map(function(e){return e()})},Ml=!1;Zn&&(Ml=(De.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(De.readyState),Ml||De.addEventListener("DOMContentLoaded",n2));function i2(t){Zn&&(Ml?setTimeout(t,0):Iw.push(t))}function na(t){var e=t.tag,n=t.attributes,i=n===void 0?{}:n,r=t.children,s=r===void 0?[]:r;return typeof t=="string"?ww(t):"<".concat(e," ").concat(XL(i),">").concat(s.map(na).join(""),"</").concat(e,">")}function Ny(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var r2=function(e,n){return function(i,r,s,o){return e.call(n,i,r,s,o)}},Lu=function(e,n,i,r){var s=Object.keys(e),o=s.length,a=r!==void 0?r2(n,r):n,l,c,u;for(i===void 0?(l=1,u=e[s[0]]):(l=0,u=i);l<o;l++)c=s[l],u=a(u,e[c],c,e);return u};function s2(t){for(var e=[],n=0,i=t.length;n<i;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function tf(t){var e=s2(t);return e.length===1?e[0].toString(16):null}function o2(t,e){var n=t.length,i=t.charCodeAt(e),r;return i>=55296&&i<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function xy(t){return Object.keys(t).reduce(function(e,n){var i=t[n],r=!!i.icon;return r?e[i.iconName]=i.icon:e[n]=i,e},{})}function nf(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,r=i===void 0?!1:i,s=xy(e);typeof an.hooks.addPack=="function"&&!r?an.hooks.addPack(t,xy(e)):an.styles[t]=V(V({},an.styles[t]||{}),s),t==="fas"&&nf("fa",e)}var xa,Oa,Da,Tr=an.styles,a2=an.shims,l2=(xa={},tt(xa,Oe,Object.values(Co[Oe])),tt(xa,$e,Object.values(Co[$e])),xa),_p=null,Cw={},Sw={},Aw={},kw={},Rw={},c2=(Oa={},tt(Oa,Oe,Object.keys(To[Oe])),tt(Oa,$e,Object.keys(To[$e])),Oa);function u2(t){return~HL.indexOf(t)}function h2(t,e){var n=e.split("-"),i=n[0],r=n.slice(1).join("-");return i===t&&r!==""&&!u2(r)?r:null}var Nw=function(){var e=function(s){return Lu(Tr,function(o,a,l){return o[l]=Lu(a,s,{}),o},{})};Cw=e(function(r,s,o){if(s[3]&&(r[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){r[l.toString(16)]=o})}return r}),Sw=e(function(r,s,o){if(r[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){r[l]=o})}return r}),Rw=e(function(r,s,o){var a=s[2];return r[o]=o,a.forEach(function(l){r[l]=o}),r});var n="far"in Tr||B.autoFetchSvg,i=Lu(a2,function(r,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(r.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:a,iconName:l}),r},{names:{},unicodes:{}});Aw=i.names,kw=i.unicodes,_p=Yc(B.styleDefault,{family:B.familyDefault})};GL(function(t){_p=Yc(t.styleDefault,{family:B.familyDefault})});Nw();function vp(t,e){return(Cw[t]||{})[e]}function f2(t,e){return(Sw[t]||{})[e]}function ji(t,e){return(Rw[t]||{})[e]}function xw(t){return Aw[t]||{prefix:null,iconName:null}}function d2(t){var e=kw[t],n=vp("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function bi(){return _p}var bp=function(){return{prefix:null,iconName:null,rest:[]}};function Yc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,i=n===void 0?Oe:n,r=To[i][t],s=Io[i][t]||Io[i][r],o=t in an.styles?t:null;return s||o||null}var Oy=(Da={},tt(Da,Oe,Object.keys(Co[Oe])),tt(Da,$e,Object.keys(Co[$e])),Da);function Qc(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.skipLookups,r=i===void 0?!1:i,s=(e={},tt(e,Oe,"".concat(B.cssPrefix,"-").concat(Oe)),tt(e,$e,"".concat(B.cssPrefix,"-").concat($e)),e),o=null,a=Oe;(t.includes(s[Oe])||t.some(function(c){return Oy[Oe].includes(c)}))&&(a=Oe),(t.includes(s[$e])||t.some(function(c){return Oy[$e].includes(c)}))&&(a=$e);var l=t.reduce(function(c,u){var h=h2(B.cssPrefix,u);if(Tr[u]?(u=l2[a].includes(u)?UL[a][u]:u,o=u,c.prefix=u):c2[a].indexOf(u)>-1?(o=u,c.prefix=Yc(u,{family:a})):h?c.iconName=h:u!==B.replacementClass&&u!==s[Oe]&&u!==s[$e]&&c.rest.push(u),!r&&c.prefix&&c.iconName){var f=o==="fa"?xw(c.iconName):{},d=ji(c.prefix,c.iconName);f.prefix&&(o=null),c.iconName=f.iconName||d||c.iconName,c.prefix=f.prefix||c.prefix,c.prefix==="far"&&!Tr.far&&Tr.fas&&!B.autoFetchSvg&&(c.prefix="fas")}return c},bp());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===$e&&(Tr.fass||B.autoFetchSvg)&&(l.prefix="fass",l.iconName=ji(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=bi()||"fas"),l}var p2=function(){function t(){SL(this,t),this.definitions={}}return AL(t,[{key:"add",value:function(){for(var n=this,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=V(V({},n.definitions[a]||{}),o[a]),nf(a,o[a]);var l=Co[Oe][a];l&&nf(l,o[a]),Nw()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var r=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(r).map(function(s){var o=r[s],a=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(h){typeof h=="string"&&(n[a][h]=c)}),n[a][l]=c}),n}}]),t}(),Dy=[],Ir={},Lr={},m2=Object.keys(Lr);function g2(t,e){var n=e.mixoutsTo;return Dy=t,Ir={},Object.keys(Lr).forEach(function(i){m2.indexOf(i)===-1&&delete Lr[i]}),Dy.forEach(function(i){var r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),Pl(r[o])==="object"&&Object.keys(r[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=r[o][a]})}),i.hooks){var s=i.hooks();Object.keys(s).forEach(function(o){Ir[o]||(Ir[o]=[]),Ir[o].push(s[o])})}i.provides&&i.provides(Lr)}),n}function rf(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];var s=Ir[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(i))}),e}function ir(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var r=Ir[t]||[];r.forEach(function(s){s.apply(null,n)})}function Gn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Lr[t]?Lr[t].apply(null,e):void 0}function sf(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||bi();if(e)return e=ji(n,e)||e,Ny(Ow.definitions,n,e)||Ny(an.styles,n,e)}var Ow=new p2,y2=function(){B.autoReplaceSvg=!1,B.observeMutations=!1,ir("noAuto")},_2={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Zn?(ir("beforeI2svg",e),Gn("pseudoElements2svg",e),Gn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;B.autoReplaceSvg===!1&&(B.autoReplaceSvg=!0),B.observeMutations=!0,i2(function(){b2({autoReplaceSvgRoot:n}),ir("watch",e)})}},v2={icon:function(e){if(e===null)return null;if(Pl(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ji(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=Yc(e[0]);return{prefix:i,iconName:ji(i,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(B.cssPrefix,"-"))>-1||e.match(VL))){var r=Qc(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||bi(),iconName:ji(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var s=bi();return{prefix:s,iconName:ji(s,e)||e}}}},Kt={noAuto:y2,config:B,dom:_2,parse:v2,library:Ow,findIconDefinition:sf,toHtml:na},b2=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,i=n===void 0?De:n;(Object.keys(an.styles).length>0||B.autoFetchSvg)&&Zn&&B.autoReplaceSvg&&Kt.dom.i2svg({node:i})};function Xc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return na(i)})}}),Object.defineProperty(t,"node",{get:function(){if(Zn){var i=De.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function E2(t){var e=t.children,n=t.main,i=t.mask,r=t.attributes,s=t.styles,o=t.transform;if(yp(o)&&n.found&&!i.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};r.style=Gc(V(V({},s),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function w2(t){var e=t.prefix,n=t.iconName,i=t.children,r=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(B.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:V(V({},r),{},{id:o}),children:i}]}]}function Ep(t){var e=t.icons,n=e.main,i=e.mask,r=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,c=t.maskId,u=t.titleId,h=t.extra,f=t.watchable,d=f===void 0?!1:f,m=i.found?i:n,y=m.width,b=m.height,_=r==="fak",v=[B.replacementClass,s?"".concat(B.cssPrefix,"-").concat(s):""].filter(function(je){return h.classes.indexOf(je)===-1}).filter(function(je){return je!==""||!!je}).concat(h.classes).join(" "),E={children:[],attributes:V(V({},h.attributes),{},{"data-prefix":r,"data-icon":s,class:v,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(b)})},I=_&&!~h.classes.indexOf("fa-fw")?{width:"".concat(y/b*16*.0625,"em")}:{};d&&(E.attributes[nr]=""),l&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(u||Ao())},children:[l]}),delete E.attributes.title);var F=V(V({},E),{},{prefix:r,iconName:s,main:n,mask:i,maskId:c,transform:o,symbol:a,styles:V(V({},I),h.styles)}),Q=i.found&&n.found?Gn("generateAbstractMask",F)||{children:[],attributes:{}}:Gn("generateAbstractIcon",F)||{children:[],attributes:{}},re=Q.children,ge=Q.attributes;return F.children=re,F.attributes=ge,a?w2(F):E2(F)}function Py(t){var e=t.content,n=t.width,i=t.height,r=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,c=V(V(V({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(c[nr]="");var u=V({},o.styles);yp(r)&&(u.transform=ZL({transform:r,startCentered:!0,width:n,height:i}),u["-webkit-transform"]=u.transform);var h=Gc(u);h.length>0&&(c.style=h);var f=[];return f.push({tag:"span",attributes:c,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function T2(t){var e=t.content,n=t.title,i=t.extra,r=V(V(V({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),s=Gc(i.styles);s.length>0&&(r.style=s);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Fu=an.styles;function of(t){var e=t[0],n=t[1],i=t.slice(4),r=hp(i,1),s=r[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(B.cssPrefix,"-").concat(Bi.GROUP)},children:[{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat(Bi.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat(Bi.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var I2={found:!1,width:512,height:512};function C2(t,e){!_w&&!B.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function af(t,e){var n=e;return e==="fa"&&B.styleDefault!==null&&(e=bi()),new Promise(function(i,r){if(Gn("missingIconAbstract"),n==="fa"){var s=xw(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Fu[e]&&Fu[e][t]){var o=Fu[e][t];return i(of(o))}C2(t,e),i(V(V({},I2),{},{icon:B.showMissingIcons&&t?Gn("missingIconAbstract")||{}:{}}))})}var My=function(){},lf=B.measurePerformance&&Ca&&Ca.mark&&Ca.measure?Ca:{mark:My,measure:My},Ds='FA "6.4.0"',S2=function(e){return lf.mark("".concat(Ds," ").concat(e," begins")),function(){return Dw(e)}},Dw=function(e){lf.mark("".concat(Ds," ").concat(e," ends")),lf.measure("".concat(Ds," ").concat(e),"".concat(Ds," ").concat(e," begins"),"".concat(Ds," ").concat(e," ends"))},wp={begin:S2,end:Dw},Ka=function(){};function Ly(t){var e=t.getAttribute?t.getAttribute(nr):null;return typeof e=="string"}function A2(t){var e=t.getAttribute?t.getAttribute(dp):null,n=t.getAttribute?t.getAttribute(pp):null;return e&&n}function k2(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(B.replacementClass)}function R2(){if(B.autoReplaceSvg===!0)return Wa.replace;var t=Wa[B.autoReplaceSvg];return t||Wa.replace}function N2(t){return De.createElementNS("http://www.w3.org/2000/svg",t)}function x2(t){return De.createElement(t)}function Pw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,i=n===void 0?t.tag==="svg"?N2:x2:n;if(typeof t=="string")return De.createTextNode(t);var r=i(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){r.appendChild(Pw(o,{ceFn:i}))}),r}function O2(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Wa={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(Pw(r),n)}),n.getAttribute(nr)===null&&B.keepOriginalSource){var i=De.createComment(O2(n));n.parentNode.replaceChild(i,n)}else n.remove()},nest:function(e){var n=e[0],i=e[1];if(~gp(n).indexOf(B.replacementClass))return Wa.replace(e);var r=new RegExp("".concat(B.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var s=i[0].attributes.class.split(" ").reduce(function(a,l){return l===B.replacementClass||l.match(r)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});i[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=i.map(function(a){return na(a)}).join(`
`);n.setAttribute(nr,""),n.innerHTML=o}};function Fy(t){t()}function Mw(t,e){var n=typeof e=="function"?e:Ka;if(t.length===0)n();else{var i=Fy;B.mutateApproach===LL&&(i=vi.requestAnimationFrame||Fy),i(function(){var r=R2(),s=wp.begin("mutate");t.map(r),s(),n()})}}var Tp=!1;function Lw(){Tp=!0}function cf(){Tp=!1}var Ll=null;function Uy(t){if(Ay&&B.observeMutations){var e=t.treeCallback,n=e===void 0?Ka:e,i=t.nodeCallback,r=i===void 0?Ka:i,s=t.pseudoElementsCallback,o=s===void 0?Ka:s,a=t.observeMutationsRoot,l=a===void 0?De:a;Ll=new Ay(function(c){if(!Tp){var u=bi();ys(c).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!Ly(h.addedNodes[0])&&(B.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&B.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&Ly(h.target)&&~zL.indexOf(h.attributeName))if(h.attributeName==="class"&&A2(h.target)){var f=Qc(gp(h.target)),d=f.prefix,m=f.iconName;h.target.setAttribute(dp,d||u),m&&h.target.setAttribute(pp,m)}else k2(h.target)&&r(h.target)})}}),Zn&&Ll.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function D2(){Ll&&Ll.disconnect()}function P2(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(i,r){var s=r.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(i[o]=a.join(":").trim()),i},{})),n}function M2(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"",r=Qc(gp(t));return r.prefix||(r.prefix=bi()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=f2(r.prefix,t.innerText)||vp(r.prefix,tf(t.innerText))),!r.iconName&&B.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function L2(t){var e=ys(t.attributes).reduce(function(r,s){return r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r},{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return B.autoA11y&&(n?e["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(i||Ao()):(e["aria-hidden"]="true",e.focusable="false")),e}function F2(){return{iconName:null,title:null,titleId:null,prefix:null,transform:wn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Vy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=M2(t),i=n.iconName,r=n.prefix,s=n.rest,o=L2(t),a=rf("parseNodeAttributes",{},t),l=e.styleParser?P2(t):[];return V({iconName:i,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:wn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var U2=an.styles;function Fw(t){var e=B.autoReplaceSvg==="nest"?Vy(t,{styleParser:!1}):Vy(t);return~e.extra.classes.indexOf(vw)?Gn("generateLayersText",t,e):Gn("generateSvgReplacementMutation",t,e)}var Ei=new Set;mp.map(function(t){Ei.add("fa-".concat(t))});Object.keys(To[Oe]).map(Ei.add.bind(Ei));Object.keys(To[$e]).map(Ei.add.bind(Ei));Ei=ea(Ei);function $y(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Zn)return Promise.resolve();var n=De.documentElement.classList,i=function(h){return n.add("".concat(ky,"-").concat(h))},r=function(h){return n.remove("".concat(ky,"-").concat(h))},s=B.autoFetchSvg?Ei:mp.map(function(u){return"fa-".concat(u)}).concat(Object.keys(U2));s.includes("fa")||s.push("fa");var o=[".".concat(vw,":not([").concat(nr,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(nr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=ys(t.querySelectorAll(o))}catch{}if(a.length>0)i("pending"),r("complete");else return Promise.resolve();var l=wp.begin("onTree"),c=a.reduce(function(u,h){try{var f=Fw(h);f&&u.push(f)}catch(d){_w||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise(function(u,h){Promise.all(c).then(function(f){Mw(f,function(){i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(f){l(),h(f)})})}function V2(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Fw(t).then(function(n){n&&Mw([n],e)})}function $2(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:sf(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:sf(r||{})),t(i,V(V({},n),{},{mask:r}))}}var B2=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,r=i===void 0?wn:i,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,c=n.maskId,u=c===void 0?null:c,h=n.title,f=h===void 0?null:h,d=n.titleId,m=d===void 0?null:d,y=n.classes,b=y===void 0?[]:y,_=n.attributes,v=_===void 0?{}:_,E=n.styles,I=E===void 0?{}:E;if(e){var F=e.prefix,Q=e.iconName,re=e.icon;return Xc(V({type:"icon"},e),function(){return ir("beforeDOMElementCreation",{iconDefinition:e,params:n}),B.autoA11y&&(f?v["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(m||Ao()):(v["aria-hidden"]="true",v.focusable="false")),Ep({icons:{main:of(re),mask:l?of(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:F,iconName:Q,transform:V(V({},wn),r),symbol:o,title:f,maskId:u,titleId:m,extra:{attributes:v,styles:I,classes:b}})})}},j2={mixout:function(){return{icon:$2(B2)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=$y,n.nodeCallback=V2,n}}},provides:function(e){e.i2svg=function(n){var i=n.node,r=i===void 0?De:i,s=n.callback,o=s===void 0?function(){}:s;return $y(r,o)},e.generateSvgReplacementMutation=function(n,i){var r=i.iconName,s=i.title,o=i.titleId,a=i.prefix,l=i.transform,c=i.symbol,u=i.mask,h=i.maskId,f=i.extra;return new Promise(function(d,m){Promise.all([af(r,a),u.iconName?af(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var b=hp(y,2),_=b[0],v=b[1];d([n,Ep({icons:{main:_,mask:v},prefix:a,iconName:r,transform:l,symbol:c,maskId:h,title:s,titleId:o,extra:f,watchable:!0})])}).catch(m)})},e.generateAbstractIcon=function(n){var i=n.children,r=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Gc(a);l.length>0&&(r.style=l);var c;return yp(o)&&(c=Gn("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),i.push(c||s.icon),{children:i,attributes:r}}}},z2={mixout:function(){return{layer:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.classes,s=r===void 0?[]:r;return Xc({type:"layer"},function(){ir("beforeDOMElementCreation",{assembler:n,params:i});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(B.cssPrefix,"-layers")].concat(ea(s)).join(" ")},children:o}]})}}}},H2={mixout:function(){return{counter:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.title,s=r===void 0?null:r,o=i.classes,a=o===void 0?[]:o,l=i.attributes,c=l===void 0?{}:l,u=i.styles,h=u===void 0?{}:u;return Xc({type:"counter",content:n},function(){return ir("beforeDOMElementCreation",{content:n,params:i}),T2({content:n.toString(),title:s,extra:{attributes:c,styles:h,classes:["".concat(B.cssPrefix,"-layers-counter")].concat(ea(a))}})})}}}},K2={mixout:function(){return{text:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.transform,s=r===void 0?wn:r,o=i.title,a=o===void 0?null:o,l=i.classes,c=l===void 0?[]:l,u=i.attributes,h=u===void 0?{}:u,f=i.styles,d=f===void 0?{}:f;return Xc({type:"text",content:n},function(){return ir("beforeDOMElementCreation",{content:n,params:i}),Py({content:n,transform:V(V({},wn),s),title:a,extra:{attributes:h,styles:d,classes:["".concat(B.cssPrefix,"-layers-text")].concat(ea(c))}})})}}},provides:function(e){e.generateLayersText=function(n,i){var r=i.title,s=i.transform,o=i.extra,a=null,l=null;if(mw){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/c,l=u.height/c}return B.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Py({content:n.innerHTML,width:a,height:l,transform:s,title:r,extra:o,watchable:!0})])}}},W2=new RegExp('"',"ug"),By=[1105920,1112319];function q2(t){var e=t.replace(W2,""),n=o2(e,0),i=n>=By[0]&&n<=By[1],r=e.length===2?e[0]===e[1]:!1;return{value:tf(r?e[0]:e),isSecondary:i||r}}function jy(t,e){var n="".concat(ML).concat(e.replace(":","-"));return new Promise(function(i,r){if(t.getAttribute(n)!==null)return i();var s=ys(t.children),o=s.filter(function(re){return re.getAttribute(ef)===e})[0],a=vi.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match($L),c=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),i();if(l&&u!=="none"&&u!==""){var h=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?$e:Oe,d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Io[f][l[2].toLowerCase()]:BL[f][c],m=q2(h),y=m.value,b=m.isSecondary,_=l[0].startsWith("FontAwesome"),v=vp(d,y),E=v;if(_){var I=d2(y);I.iconName&&I.prefix&&(v=I.iconName,d=I.prefix)}if(v&&!b&&(!o||o.getAttribute(dp)!==d||o.getAttribute(pp)!==E)){t.setAttribute(n,E),o&&t.removeChild(o);var F=F2(),Q=F.extra;Q.attributes[ef]=e,af(v,d).then(function(re){var ge=Ep(V(V({},F),{},{icons:{main:re,mask:bp()},prefix:d,iconName:E,extra:Q,watchable:!0})),je=De.createElement("svg");e==="::before"?t.insertBefore(je,t.firstChild):t.appendChild(je),je.outerHTML=ge.map(function(ft){return na(ft)}).join(`
`),t.removeAttribute(n),i()}).catch(r)}else i()}else i()})}function G2(t){return Promise.all([jy(t,"::before"),jy(t,"::after")])}function Y2(t){return t.parentNode!==document.head&&!~FL.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(ef)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function zy(t){if(Zn)return new Promise(function(e,n){var i=ys(t.querySelectorAll("*")).filter(Y2).map(G2),r=wp.begin("searchPseudoElements");Lw(),Promise.all(i).then(function(){r(),cf(),e()}).catch(function(){r(),cf(),n()})})}var Q2={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=zy,n}}},provides:function(e){e.pseudoElements2svg=function(n){var i=n.node,r=i===void 0?De:i;B.searchPseudoElements&&zy(r)}}},Hy=!1,X2={mixout:function(){return{dom:{unwatch:function(){Lw(),Hy=!0}}}},hooks:function(){return{bootstrap:function(){Uy(rf("mutationObserverCallbacks",{}))},noAuto:function(){D2()},watch:function(n){var i=n.observeMutationsRoot;Hy?cf():Uy(rf("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},Ky=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,r){var s=r.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return i.flipX=!0,i;if(o&&a==="v")return i.flipY=!0,i;if(a=parseFloat(a),isNaN(a))return i;switch(o){case"grow":i.size=i.size+a;break;case"shrink":i.size=i.size-a;break;case"left":i.x=i.x-a;break;case"right":i.x=i.x+a;break;case"up":i.y=i.y-a;break;case"down":i.y=i.y+a;break;case"rotate":i.rotate=i.rotate+a;break}return i},n)},J2={mixout:function(){return{parse:{transform:function(n){return Ky(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-transform");return r&&(n.transform=Ky(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var i=n.main,r=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(l," ").concat(c," ").concat(u)},f={transform:"translate(".concat(o/2*-1," -256)")},d={outer:a,inner:h,path:f};return{tag:"g",attributes:V({},d.outer),children:[{tag:"g",attributes:V({},d.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:V(V({},i.icon.attributes),d.path)}]}]}}}},Uu={x:0,y:0,width:"100%",height:"100%"};function Wy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Z2(t){return t.tag==="g"?t.children:[t]}var eF={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-mask"),s=r?Qc(r.split(" ").map(function(o){return o.trim()})):bp();return s.prefix||(s.prefix=bi()),n.mask=s,n.maskId=i.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var i=n.children,r=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,c=s.width,u=s.icon,h=o.width,f=o.icon,d=JL({transform:l,containerWidth:h,iconWidth:c}),m={tag:"rect",attributes:V(V({},Uu),{},{fill:"white"})},y=u.children?{children:u.children.map(Wy)}:{},b={tag:"g",attributes:V({},d.inner),children:[Wy(V({tag:u.tag,attributes:V(V({},u.attributes),d.path)},y))]},_={tag:"g",attributes:V({},d.outer),children:[b]},v="mask-".concat(a||Ao()),E="clip-".concat(a||Ao()),I={tag:"mask",attributes:V(V({},Uu),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[m,_]},F={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:Z2(f)},I]};return i.push(F,{tag:"rect",attributes:V({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(v,")")},Uu)}),{children:i,attributes:r}}}},tF={provides:function(e){var n=!1;vi.matchMedia&&(n=vi.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:V(V({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=V(V({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:V(V({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:V(V({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:V(V({},o),{},{values:"1;0;1;1;0;1;"})}),i.push(a),i.push({tag:"path",attributes:V(V({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:V(V({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||i.push({tag:"path",attributes:V(V({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:V(V({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},nF={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return n.symbol=s,n}}}},iF=[t2,j2,z2,H2,K2,Q2,X2,J2,eF,tF,nF];g2(iF,{mixoutsTo:Kt});Kt.noAuto;var Uw=Kt.config,ia=Kt.library;Kt.dom;var Fl=Kt.parse;Kt.findIconDefinition;Kt.toHtml;var rF=Kt.icon;Kt.layer;var sF=Kt.text;Kt.counter;var oF={prefix:"fas",iconName:"crow",icon:[640,512,[],"f520","M456 0c-48.6 0-88 39.4-88 88v29.2L12.5 390.6c-14 10.8-16.6 30.9-5.9 44.9s30.9 16.6 44.9 5.9L126.1 384H259.2l46.6 113.1c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3L311.1 384H352c1.1 0 2.1 0 3.2 0l46.6 113.2c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3l-42-102C484.9 354.1 544 280 544 192V128v-8l80.5-20.1c8.6-2.1 13.8-10.8 11.6-19.4C629 52 603.4 32 574 32H523.9C507.7 12.5 483.3 0 456 0zm0 64a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},aF={prefix:"fas",iconName:"frog",icon:[576,512,[],"f52e","M368 32c41.7 0 75.9 31.8 79.7 72.5l85.6 26.3c25.4 7.8 42.8 31.3 42.8 57.9c0 21.8-11.7 41.9-30.7 52.7L400.8 323.5 493.3 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H480c-8.5 0-16.6-3.4-22.6-9.4L346.9 360.2c11.7-36 3.2-77.1-25.4-105.7c-40.6-40.6-106.3-40.6-146.9-.1L101 324.4c-6.4 6.1-6.7 16.2-.6 22.6s16.2 6.6 22.6 .6l73.8-70.2 .1-.1 .1-.1c3.5-3.5 7.3-6.6 11.3-9.2c27.9-18.5 65.9-15.4 90.5 9.2c24.7 24.7 27.7 62.9 9 90.9c-2.6 3.8-5.6 7.5-9 10.9L261.8 416H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-35.3 0-64-28.7-64-64C0 249.6 127 112.9 289.3 97.5C296.2 60.2 328.8 32 368 32zm0 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]},lF={prefix:"fas",iconName:"feather-pointed",icon:[512,512,["feather-alt"],"f56b","M278.5 215.6L23 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l74.8-74.8c7.4 4.6 15.3 8.2 23.8 10.5C200.3 452.8 270 454.5 338 409.4c12.2-8.1 5.8-25.4-8.8-25.4l-16.1 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l97.7-29.3c3.4-1 6.4-3.1 8.4-6.1c4.4-6.4 8.6-12.9 12.6-19.6c6.2-10.3-1.5-23-13.5-23l-38.6 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l80.9-24.3c4.6-1.4 8.4-4.8 10.2-9.3C494.5 163 507.8 86.1 511.9 36.8c.8-9.9-3-19.6-10-26.6s-16.7-10.8-26.6-10C391.5 7 228.5 40.5 137.4 131.6C57.3 211.7 56.7 302.3 71.3 356.4c2.1 7.9 12 9.6 17.8 3.8L253.6 195.8c6.2-6.2 16.4-6.2 22.6 0c5.4 5.4 6.1 13.6 2.2 19.8z"]},cF={prefix:"fas",iconName:"cat",icon:[576,512,[128008],"f6be","M320 192h17.1c22.1 38.3 63.5 64 110.9 64c11 0 21.8-1.4 32-4v4 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V339.2L280 448h56c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-53 0-96-43-96-96V192.5c0-16.1-12-29.8-28-31.8l-7.9-1c-17.5-2.2-30-18.2-27.8-35.7s18.2-30 35.7-27.8l7.9 1c48 6 84.1 46.8 84.1 95.3v85.3c34.4-51.7 93.2-85.8 160-85.8zm160 26.5v0c-10 3.5-20.8 5.5-32 5.5c-28.4 0-54-12.4-71.6-32h0c-3.7-4.1-7-8.5-9.9-13.2C357.3 164 352 146.6 352 128v0V32 12 10.7C352 4.8 356.7 .1 362.6 0h.2c3.3 0 6.4 1.6 8.4 4.2l0 .1L384 21.3l27.2 36.3L416 64h64l4.8-6.4L512 21.3 524.8 4.3l0-.1c2-2.6 5.1-4.2 8.4-4.2h.2C539.3 .1 544 4.8 544 10.7V12 32v96c0 17.3-4.6 33.6-12.6 47.6c-11.3 19.8-29.6 35.2-51.4 42.9zM432 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"]},uF={prefix:"fas",iconName:"hippo",icon:[640,512,[129435],"f6ed","M407 47c9.4-9.4 24.6-9.4 33.9 0l17.2 17.2c1.9-.1 3.9-.2 5.8-.2h32c11.2 0 21.9 2.3 31.6 6.5L543 55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L564 101.9c7.6 12.2 12 26.7 12 42.1c0 10.2 7.4 18.8 16.7 23c27.9 12.5 47.3 40.5 47.3 73c0 26.2-12.6 49.4-32 64v32c0 8.8-7.2 16-16 16H560c-8.8 0-16-7.2-16-16V320H480v16c0 8.8-7.2 16-16 16H432c-8.8 0-16-7.2-16-16V318.4c-11.8-2.4-22.7-7.4-32-14.4c-1.5-1.1-2.9-2.3-4.3-3.5c-17-14.7-27.7-36.4-27.7-60.5c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 44.7 26.2 83.2 64 101.2V352c0 17.7 14.3 32 32 32h32v64c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V372c-19.8 7.7-41.4 12-64 12s-44.2-4.3-64-12v76c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V329.1L45.9 369.7c-5.4 12.1-19.6 17.6-31.7 12.2S-3.3 362.4 2.1 350.3L24 300.9c5.3-11.9 8-24.7 8-37.7C32 155.7 117.2 68 223.8 64.1l.2-.1h7.2H256h32c41.7 0 83.4 12.1 117.2 25.7c1.7-1.8 3.5-3.6 5.3-5.2L407 81c-9.4-9.4-9.4-24.6 0-33.9zm73 185a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm88 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM480 144a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"]};function qy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function tn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?qy(Object(n),!0).forEach(function(i){Nt(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):qy(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Ul(t){return Ul=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ul(t)}function Nt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function hF(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function fF(t,e){if(t==null)return{};var n=hF(t,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function uf(t){return dF(t)||pF(t)||mF(t)||gF()}function dF(t){if(Array.isArray(t))return hf(t)}function pF(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function mF(t,e){if(t){if(typeof t=="string")return hf(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return hf(t,e)}}function hf(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function gF(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var yF=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Vw={exports:{}};(function(t){(function(e){var n=function(_,v,E){if(!c(v)||h(v)||f(v)||d(v)||l(v))return v;var I,F=0,Q=0;if(u(v))for(I=[],Q=v.length;F<Q;F++)I.push(n(_,v[F],E));else{I={};for(var re in v)Object.prototype.hasOwnProperty.call(v,re)&&(I[_(re,E)]=n(_,v[re],E))}return I},i=function(_,v){v=v||{};var E=v.separator||"_",I=v.split||/(?=[A-Z])/;return _.split(I).join(E)},r=function(_){return m(_)?_:(_=_.replace(/[\-_\s]+(.)?/g,function(v,E){return E?E.toUpperCase():""}),_.substr(0,1).toLowerCase()+_.substr(1))},s=function(_){var v=r(_);return v.substr(0,1).toUpperCase()+v.substr(1)},o=function(_,v){return i(_,v).toLowerCase()},a=Object.prototype.toString,l=function(_){return typeof _=="function"},c=function(_){return _===Object(_)},u=function(_){return a.call(_)=="[object Array]"},h=function(_){return a.call(_)=="[object Date]"},f=function(_){return a.call(_)=="[object RegExp]"},d=function(_){return a.call(_)=="[object Boolean]"},m=function(_){return _=_-0,_===_},y=function(_,v){var E=v&&"process"in v?v.process:v;return typeof E!="function"?_:function(I,F){return E(I,_,F)}},b={camelize:r,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(_,v){return n(y(r,v),_)},decamelizeKeys:function(_,v){return n(y(o,v),_,v)},pascalizeKeys:function(_,v){return n(y(s,v),_)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=b:e.humps=b})(yF)})(Vw);var _F=Vw.exports,vF=["class","style"];function bF(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),r=_F.camelize(n.slice(0,i)),s=n.slice(i+1).trim();return e[r]=s,e},{})}function EF(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Ip(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var i=(t.children||[]).map(function(l){return Ip(l)}),r=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=EF(u);break;case"style":l.style=bF(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=fF(n,vF);return tc(t.tag,tn(tn(tn({},e),{},{class:r.class,style:tn(tn({},r.style),o)},r.attrs),a),i)}var $w=!1;try{$w=!0}catch{}function wF(){if(!$w&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Qs(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Nt({},t,e):{}}function TF(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Nt(e,"fa-".concat(t.size),t.size!==null),Nt(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),Nt(e,"fa-pull-".concat(t.pull),t.pull!==null),Nt(e,"fa-swap-opacity",t.swapOpacity),Nt(e,"fa-bounce",t.bounce),Nt(e,"fa-shake",t.shake),Nt(e,"fa-beat",t.beat),Nt(e,"fa-fade",t.fade),Nt(e,"fa-beat-fade",t.beatFade),Nt(e,"fa-flash",t.flash),Nt(e,"fa-spin-pulse",t.spinPulse),Nt(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(i){return n[i]?i:null}).filter(function(i){return i})}function Gy(t){if(t&&Ul(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Fl.icon)return Fl.icon(t);if(t===null)return null;if(Ul(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var IF=No({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var i=n.attrs,r=ie(function(){return Gy(e.icon)}),s=ie(function(){return Qs("classes",TF(e))}),o=ie(function(){return Qs("transform",typeof e.transform=="string"?Fl.transform(e.transform):e.transform)}),a=ie(function(){return Qs("mask",Gy(e.mask))}),l=ie(function(){return rF(r.value,tn(tn(tn(tn({},s.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});Rr(l,function(u){if(!u)return wF("Could not find one or more icon(s)",r.value,a.value)},{immediate:!0});var c=ie(function(){return l.value?Ip(l.value.abstract[0],{},i):null});return function(){return c.value}}});No({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var i=n.slots,r=Uw.familyPrefix,s=ie(function(){return["".concat(r,"-layers")].concat(uf(e.fixedWidth?["".concat(r,"-fw")]:[]))});return function(){return tc("div",{class:s.value},i.default?i.default():[])}}});No({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var i=n.attrs,r=Uw.familyPrefix,s=ie(function(){return Qs("classes",[].concat(uf(e.counter?["".concat(r,"-layers-counter")]:[]),uf(e.position?["".concat(r,"-layers-").concat(e.position)]:[])))}),o=ie(function(){return Qs("transform",typeof e.transform=="string"?Fl.transform(e.transform):e.transform)}),a=ie(function(){var c=sF(e.value.toString(),tn(tn({},o.value),s.value)),u=c.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=ie(function(){return Ip(a.value,{},i)});return function(){return l.value}}});ia.add(uF);ia.add(oF);ia.add(aF);ia.add(lF);ia.add(cF);const ra=o1(xM);ra.use(u1());ra.use(CL);ra.use(SP,{firebaseApp:Ii});ra.component("font-awesome-icon",IF);ra.mount("#app");
