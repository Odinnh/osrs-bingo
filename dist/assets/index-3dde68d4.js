(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function pf(t,e){const n=Object.create(null),i=t.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function No(t){if(ee(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Ze(i)?KE(i):No(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(Ze(t))return t;if(Ue(t))return t}}const jE=/;(?![^(]*\))/g,zE=/:([^]+)/,HE=/\/\*.*?\*\//gs;function KE(t){const e={};return t.replace(HE,"").split(jE).forEach(n=>{if(n){const i=n.split(zE);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function pi(t){let e="";if(Ze(t))e=t;else if(ee(t))for(let n=0;n<t.length;n++){const i=pi(t[n]);i&&(e+=i+" ")}else if(Ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const WE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",qE=pf(WE);function Qy(t){return!!t||t===""}const $t=t=>Ze(t)?t:t==null?"":ee(t)||Ue(t)&&(t.toString===e_||!ie(t.toString))?JSON.stringify(t,Xy,2):String(t),Xy=(t,e)=>e&&e.__v_isRef?Xy(t,e.value):Ar(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:Jy(e)?{[`Set(${e.size})`]:[...e.values()]}:Ue(e)&&!ee(e)&&!t_(e)?String(e):e,Ne={},Sr=[],ln=()=>{},GE=()=>!1,YE=/^on[^a-z]/,jc=t=>YE.test(t),mf=t=>t.startsWith("onUpdate:"),kt=Object.assign,gf=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},QE=Object.prototype.hasOwnProperty,me=(t,e)=>QE.call(t,e),ee=Array.isArray,Ar=t=>zc(t)==="[object Map]",Jy=t=>zc(t)==="[object Set]",ie=t=>typeof t=="function",Ze=t=>typeof t=="string",yf=t=>typeof t=="symbol",Ue=t=>t!==null&&typeof t=="object",Zy=t=>Ue(t)&&ie(t.then)&&ie(t.catch),e_=Object.prototype.toString,zc=t=>e_.call(t),XE=t=>zc(t).slice(8,-1),t_=t=>zc(t)==="[object Object]",_f=t=>Ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,La=pf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Hc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},JE=/-(\w)/g,Cn=Hc(t=>t.replace(JE,(e,n)=>n?n.toUpperCase():"")),ZE=/\B([A-Z])/g,is=Hc(t=>t.replace(ZE,"-$1").toLowerCase()),Kc=Hc(t=>t.charAt(0).toUpperCase()+t.slice(1)),eu=Hc(t=>t?`on${Kc(t)}`:""),Zs=(t,e)=>!Object.is(t,e),Fa=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ya=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Bu=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Rp;const ew=()=>Rp||(Rp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ut;class n_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ut,!e&&Ut&&(this.index=(Ut.scopes||(Ut.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ut;try{return Ut=this,e()}finally{Ut=n}}}on(){Ut=this}off(){Ut=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function tw(t){return new n_(t)}function nw(t,e=Ut){e&&e.active&&e.effects.push(t)}function i_(){return Ut}function iw(t){Ut&&Ut.cleanups.push(t)}const vf=t=>{const e=new Set(t);return e.w=0,e.n=0,e},r_=t=>(t.w&mi)>0,s_=t=>(t.n&mi)>0,rw=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=mi},sw=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];r_(r)&&!s_(r)?r.delete(t):e[n++]=r,r.w&=~mi,r.n&=~mi}e.length=n}},ju=new WeakMap;let Rs=0,mi=1;const zu=30;let en;const Hi=Symbol(""),Hu=Symbol("");class bf{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,nw(this,i)}run(){if(!this.active)return this.fn();let e=en,n=ci;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=en,en=this,ci=!0,mi=1<<++Rs,Rs<=zu?rw(this):Np(this),this.fn()}finally{Rs<=zu&&sw(this),mi=1<<--Rs,en=this.parent,ci=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){en===this?this.deferStop=!0:this.active&&(Np(this),this.onStop&&this.onStop(),this.active=!1)}}function Np(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let ci=!0;const o_=[];function rs(){o_.push(ci),ci=!1}function ss(){const t=o_.pop();ci=t===void 0?!0:t}function Mt(t,e,n){if(ci&&en){let i=ju.get(t);i||ju.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=vf()),a_(r)}}function a_(t,e){let n=!1;Rs<=zu?s_(t)||(t.n|=mi,n=!r_(t)):n=!t.has(en),n&&(t.add(en),en.deps.push(t))}function jn(t,e,n,i,r,s){const o=ju.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ee(t)){const c=Number(i);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ee(t)?_f(n)&&a.push(o.get("length")):(a.push(o.get(Hi)),Ar(t)&&a.push(o.get(Hu)));break;case"delete":ee(t)||(a.push(o.get(Hi)),Ar(t)&&a.push(o.get(Hu)));break;case"set":Ar(t)&&a.push(o.get(Hi));break}if(a.length===1)a[0]&&Ku(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Ku(vf(c))}}function Ku(t,e){const n=ee(t)?t:[...t];for(const i of n)i.computed&&xp(i);for(const i of n)i.computed||xp(i)}function xp(t,e){(t!==en||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const ow=pf("__proto__,__v_isRef,__isVue"),c_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(yf)),aw=Ef(),cw=Ef(!1,!0),lw=Ef(!0),Op=uw();function uw(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=ve(this);for(let s=0,o=this.length;s<o;s++)Mt(i,"get",s+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(ve)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){rs();const i=ve(this)[e].apply(this,n);return ss(),i}}),t}function hw(t){const e=ve(this);return Mt(e,"has",t),e.hasOwnProperty(t)}function Ef(t=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(t?e?Aw:d_:e?f_:h_).get(i))return i;const o=ee(i);if(!t){if(o&&me(Op,r))return Reflect.get(Op,r,s);if(r==="hasOwnProperty")return hw}const a=Reflect.get(i,r,s);return(yf(r)?c_.has(r):ow(r))||(t||Mt(i,"get",r),e)?a:ut(a)?o&&_f(r)?a:a.value:Ue(a)?t?p_(a):xo(a):a}}const fw=l_(),dw=l_(!0);function l_(t=!1){return function(n,i,r,s){let o=n[i];if(Ur(o)&&ut(o)&&!ut(r))return!1;if(!t&&(!Qa(r)&&!Ur(r)&&(o=ve(o),r=ve(r)),!ee(n)&&ut(o)&&!ut(r)))return o.value=r,!0;const a=ee(n)&&_f(i)?Number(i)<n.length:me(n,i),c=Reflect.set(n,i,r,s);return n===ve(s)&&(a?Zs(r,o)&&jn(n,"set",i,r):jn(n,"add",i,r)),c}}function pw(t,e){const n=me(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&jn(t,"delete",e,void 0),i}function mw(t,e){const n=Reflect.has(t,e);return(!yf(e)||!c_.has(e))&&Mt(t,"has",e),n}function gw(t){return Mt(t,"iterate",ee(t)?"length":Hi),Reflect.ownKeys(t)}const u_={get:aw,set:fw,deleteProperty:pw,has:mw,ownKeys:gw},yw={get:lw,set(t,e){return!0},deleteProperty(t,e){return!0}},_w=kt({},u_,{get:cw,set:dw}),wf=t=>t,Wc=t=>Reflect.getPrototypeOf(t);function ca(t,e,n=!1,i=!1){t=t.__v_raw;const r=ve(t),s=ve(e);n||(e!==s&&Mt(r,"get",e),Mt(r,"get",s));const{has:o}=Wc(r),a=i?wf:n?Sf:eo;if(o.call(r,e))return a(t.get(e));if(o.call(r,s))return a(t.get(s));t!==r&&t.get(e)}function la(t,e=!1){const n=this.__v_raw,i=ve(n),r=ve(t);return e||(t!==r&&Mt(i,"has",t),Mt(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function ua(t,e=!1){return t=t.__v_raw,!e&&Mt(ve(t),"iterate",Hi),Reflect.get(t,"size",t)}function Dp(t){t=ve(t);const e=ve(this);return Wc(e).has.call(e,t)||(e.add(t),jn(e,"add",t,t)),this}function Pp(t,e){e=ve(e);const n=ve(this),{has:i,get:r}=Wc(n);let s=i.call(n,t);s||(t=ve(t),s=i.call(n,t));const o=r.call(n,t);return n.set(t,e),s?Zs(e,o)&&jn(n,"set",t,e):jn(n,"add",t,e),this}function Mp(t){const e=ve(this),{has:n,get:i}=Wc(e);let r=n.call(e,t);r||(t=ve(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&jn(e,"delete",t,void 0),s}function Lp(){const t=ve(this),e=t.size!==0,n=t.clear();return e&&jn(t,"clear",void 0,void 0),n}function ha(t,e){return function(i,r){const s=this,o=s.__v_raw,a=ve(o),c=e?wf:t?Sf:eo;return!t&&Mt(a,"iterate",Hi),o.forEach((l,u)=>i.call(r,c(l),c(u),s))}}function fa(t,e,n){return function(...i){const r=this.__v_raw,s=ve(r),o=Ar(s),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...i),u=n?wf:e?Sf:eo;return!e&&Mt(s,"iterate",c?Hu:Hi),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function ni(t){return function(...e){return t==="delete"?!1:this}}function vw(){const t={get(s){return ca(this,s)},get size(){return ua(this)},has:la,add:Dp,set:Pp,delete:Mp,clear:Lp,forEach:ha(!1,!1)},e={get(s){return ca(this,s,!1,!0)},get size(){return ua(this)},has:la,add:Dp,set:Pp,delete:Mp,clear:Lp,forEach:ha(!1,!0)},n={get(s){return ca(this,s,!0)},get size(){return ua(this,!0)},has(s){return la.call(this,s,!0)},add:ni("add"),set:ni("set"),delete:ni("delete"),clear:ni("clear"),forEach:ha(!0,!1)},i={get(s){return ca(this,s,!0,!0)},get size(){return ua(this,!0)},has(s){return la.call(this,s,!0)},add:ni("add"),set:ni("set"),delete:ni("delete"),clear:ni("clear"),forEach:ha(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=fa(s,!1,!1),n[s]=fa(s,!0,!1),e[s]=fa(s,!1,!0),i[s]=fa(s,!0,!0)}),[t,n,e,i]}const[bw,Ew,ww,Tw]=vw();function Tf(t,e){const n=e?t?Tw:ww:t?Ew:bw;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(me(n,r)&&r in i?n:i,r,s)}const Iw={get:Tf(!1,!1)},Cw={get:Tf(!1,!0)},Sw={get:Tf(!0,!1)},h_=new WeakMap,f_=new WeakMap,d_=new WeakMap,Aw=new WeakMap;function kw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Rw(t){return t.__v_skip||!Object.isExtensible(t)?0:kw(XE(t))}function xo(t){return Ur(t)?t:If(t,!1,u_,Iw,h_)}function Nw(t){return If(t,!1,_w,Cw,f_)}function p_(t){return If(t,!0,yw,Sw,d_)}function If(t,e,n,i,r){if(!Ue(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=Rw(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function kr(t){return Ur(t)?kr(t.__v_raw):!!(t&&t.__v_isReactive)}function Ur(t){return!!(t&&t.__v_isReadonly)}function Qa(t){return!!(t&&t.__v_isShallow)}function m_(t){return kr(t)||Ur(t)}function ve(t){const e=t&&t.__v_raw;return e?ve(e):t}function Cf(t){return Ya(t,"__v_skip",!0),t}const eo=t=>Ue(t)?xo(t):t,Sf=t=>Ue(t)?p_(t):t;function g_(t){ci&&en&&(t=ve(t),a_(t.dep||(t.dep=vf())))}function y_(t,e){t=ve(t);const n=t.dep;n&&Ku(n)}function ut(t){return!!(t&&t.__v_isRef===!0)}function Dt(t){return v_(t,!1)}function __(t){return v_(t,!0)}function v_(t,e){return ut(t)?t:new xw(t,e)}class xw{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ve(e),this._value=n?e:eo(e)}get value(){return g_(this),this._value}set value(e){const n=this.__v_isShallow||Qa(e)||Ur(e);e=n?e:ve(e),Zs(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:eo(e),y_(this))}}function O(t){return ut(t)?t.value:t}const Ow={get:(t,e,n)=>O(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return ut(r)&&!ut(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function b_(t){return kr(t)?t:new Proxy(t,Ow)}var E_;class Dw{constructor(e,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[E_]=!1,this._dirty=!0,this.effect=new bf(e,()=>{this._dirty||(this._dirty=!0,y_(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=ve(this);return g_(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}E_="__v_isReadonly";function Pw(t,e,n=!1){let i,r;const s=ie(t);return s?(i=t,r=ln):(i=t.get,r=t.set),new Dw(i,r,s||!r,n)}function li(t,e,n,i){let r;try{r=i?t(...i):t()}catch(s){qc(s,e,n)}return r}function un(t,e,n,i){if(ie(t)){const s=li(t,e,n,i);return s&&Zy(s)&&s.catch(o=>{qc(o,e,n)}),s}const r=[];for(let s=0;s<t.length;s++)r.push(un(t[s],e,n,i));return r}function qc(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){li(c,null,10,[t,o,a]);return}}Mw(t,n,r,i)}function Mw(t,e,n,i=!0){console.error(t)}let to=!1,Wu=!1;const vt=[];let _n=0;const Rr=[];let Ln=null,Di=0;const w_=Promise.resolve();let Af=null;function T_(t){const e=Af||w_;return t?e.then(this?t.bind(this):t):e}function Lw(t){let e=_n+1,n=vt.length;for(;e<n;){const i=e+n>>>1;no(vt[i])<t?e=i+1:n=i}return e}function kf(t){(!vt.length||!vt.includes(t,to&&t.allowRecurse?_n+1:_n))&&(t.id==null?vt.push(t):vt.splice(Lw(t.id),0,t),I_())}function I_(){!to&&!Wu&&(Wu=!0,Af=w_.then(S_))}function Fw(t){const e=vt.indexOf(t);e>_n&&vt.splice(e,1)}function Uw(t){ee(t)?Rr.push(...t):(!Ln||!Ln.includes(t,t.allowRecurse?Di+1:Di))&&Rr.push(t),I_()}function Fp(t,e=to?_n+1:0){for(;e<vt.length;e++){const n=vt[e];n&&n.pre&&(vt.splice(e,1),e--,n())}}function C_(t){if(Rr.length){const e=[...new Set(Rr)];if(Rr.length=0,Ln){Ln.push(...e);return}for(Ln=e,Ln.sort((n,i)=>no(n)-no(i)),Di=0;Di<Ln.length;Di++)Ln[Di]();Ln=null,Di=0}}const no=t=>t.id==null?1/0:t.id,Vw=(t,e)=>{const n=no(t)-no(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function S_(t){Wu=!1,to=!0,vt.sort(Vw);const e=ln;try{for(_n=0;_n<vt.length;_n++){const n=vt[_n];n&&n.active!==!1&&li(n,null,14)}}finally{_n=0,vt.length=0,C_(),to=!1,Af=null,(vt.length||Rr.length)&&S_()}}function $w(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Ne;let r=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=i[u]||Ne;f&&(r=n.map(d=>Ze(d)?d.trim():d)),h&&(r=n.map(Bu))}let a,c=i[a=eu(e)]||i[a=eu(Cn(e))];!c&&s&&(c=i[a=eu(is(e))]),c&&un(c,t,6,r);const l=i[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,un(l,t,6,r)}}function A_(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!ie(t)){const c=l=>{const u=A_(l,e,!0);u&&(a=!0,kt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!a?(Ue(t)&&i.set(t,null),null):(ee(s)?s.forEach(c=>o[c]=null):kt(o,s),Ue(t)&&i.set(t,o),o)}function Gc(t,e){return!t||!jc(e)?!1:(e=e.slice(2).replace(/Once$/,""),me(t,e[0].toLowerCase()+e.slice(1))||me(t,is(e))||me(t,e))}let Bt=null,Yc=null;function Xa(t){const e=Bt;return Bt=t,Yc=t&&t.type.__scopeId||null,e}function Oo(t){Yc=t}function Do(){Yc=null}function Bw(t,e=Bt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Wp(-1);const s=Xa(e);let o;try{o=t(...r)}finally{Xa(s),i._d&&Wp(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function tu(t){const{type:e,vnode:n,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:d,ctx:m,inheritAttrs:y}=t;let b,_;const v=Xa(t);try{if(n.shapeFlag&4){const I=r||i;b=yn(u.call(I,I,h,s,d,f,m)),_=c}else{const I=e;b=yn(I.length>1?I(s,{attrs:c,slots:a,emit:l}):I(s,null)),_=e.props?c:jw(c)}}catch(I){Fs.length=0,qc(I,t,1),b=Be(Yi)}let E=b;if(_&&y!==!1){const I=Object.keys(_),{shapeFlag:F}=E;I.length&&F&7&&(o&&I.some(mf)&&(_=zw(_,o)),E=$r(E,_))}return n.dirs&&(E=$r(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),b=E,Xa(v),b}const jw=t=>{let e;for(const n in t)(n==="class"||n==="style"||jc(n))&&((e||(e={}))[n]=t[n]);return e},zw=(t,e)=>{const n={};for(const i in t)(!mf(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Hw(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return i?Up(i,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!Gc(l,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Up(i,o,l):!0:!!o;return!1}function Up(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!Gc(n,s))return!0}return!1}function Kw({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Ww=t=>t.__isSuspense;function qw(t,e){e&&e.pendingBranch?ee(t)?e.effects.push(...t):e.effects.push(t):Uw(t)}function Ua(t,e){if(Ke){let n=Ke.provides;const i=Ke.parent&&Ke.parent.provides;i===n&&(n=Ke.provides=Object.create(i)),n[t]=e}}function jt(t,e,n=!1){const i=Ke||Bt;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ie(e)?e.call(i.proxy):e}}function Gw(t,e){return Rf(t,null,{flush:"post"})}const da={};function Nr(t,e,n){return Rf(t,e,n)}function Rf(t,e,{immediate:n,deep:i,flush:r,onTrack:s,onTrigger:o}=Ne){const a=i_()===(Ke==null?void 0:Ke.scope)?Ke:null;let c,l=!1,u=!1;if(ut(t)?(c=()=>t.value,l=Qa(t)):kr(t)?(c=()=>t,i=!0):ee(t)?(u=!0,l=t.some(E=>kr(E)||Qa(E)),c=()=>t.map(E=>{if(ut(E))return E.value;if(kr(E))return Li(E);if(ie(E))return li(E,a,2)})):ie(t)?e?c=()=>li(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),un(t,a,3,[f])}:c=ln,e&&i){const E=c;c=()=>Li(E())}let h,f=E=>{h=_.onStop=()=>{li(E,a,4)}},d;if(ro)if(f=ln,e?n&&un(e,a,3,[c(),u?[]:void 0,f]):c(),r==="sync"){const E=VT();d=E.__watcherHandles||(E.__watcherHandles=[])}else return ln;let m=u?new Array(t.length).fill(da):da;const y=()=>{if(_.active)if(e){const E=_.run();(i||l||(u?E.some((I,F)=>Zs(I,m[F])):Zs(E,m)))&&(h&&h(),un(e,a,3,[E,m===da?void 0:u&&m[0]===da?[]:m,f]),m=E)}else _.run()};y.allowRecurse=!!e;let b;r==="sync"?b=y:r==="post"?b=()=>xt(y,a&&a.suspense):(y.pre=!0,a&&(y.id=a.uid),b=()=>kf(y));const _=new bf(c,b);e?n?y():m=_.run():r==="post"?xt(_.run.bind(_),a&&a.suspense):_.run();const v=()=>{_.stop(),a&&a.scope&&gf(a.scope.effects,_)};return d&&d.push(v),v}function Yw(t,e,n){const i=this.proxy,r=Ze(t)?t.includes(".")?k_(i,t):()=>i[t]:t.bind(i,i);let s;ie(e)?s=e:(s=e.handler,n=e);const o=Ke;Br(this);const a=Rf(r,s.bind(i),n);return o?Br(o):Ki(),a}function k_(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function Li(t,e){if(!Ue(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ut(t))Li(t.value,e);else if(ee(t))for(let n=0;n<t.length;n++)Li(t[n],e);else if(Jy(t)||Ar(t))t.forEach(n=>{Li(n,e)});else if(t_(t))for(const n in t)Li(t[n],e);return t}function Po(t){return ie(t)?{setup:t,name:t.name}:t}const Va=t=>!!t.type.__asyncLoader,R_=t=>t.type.__isKeepAlive;function Qw(t,e){N_(t,"a",e)}function Xw(t,e){N_(t,"da",e)}function N_(t,e,n=Ke){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Qc(e,i,n),n){let r=n.parent;for(;r&&r.parent;)R_(r.parent.vnode)&&Jw(i,e,n,r),r=r.parent}}function Jw(t,e,n,i){const r=Qc(e,t,i,!0);Nf(()=>{gf(i[e],r)},n)}function Qc(t,e,n=Ke,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;rs(),Br(n);const a=un(e,n,t,o);return Ki(),ss(),a});return i?r.unshift(s):r.push(s),s}}const Xn=t=>(e,n=Ke)=>(!ro||t==="sp")&&Qc(t,(...i)=>e(...i),n),Zw=Xn("bm"),x_=Xn("m"),eT=Xn("bu"),tT=Xn("u"),nT=Xn("bum"),Nf=Xn("um"),O_=Xn("sp"),iT=Xn("rtg"),rT=Xn("rtc");function sT(t,e=Ke){Qc("ec",t,e)}function Xc(t,e){const n=Bt;if(n===null)return t;const i=tl(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,c,l=Ne]=e[s];o&&(ie(o)&&(o={mounted:o,updated:o}),o.deep&&Li(a),r.push({dir:o,instance:i,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function ki(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let c=a.dir[i];c&&(rs(),un(c,n,8,[t.el,a,t,e]),ss())}}const D_="components";function oT(t,e){return cT(D_,t,!0,e)||t}const aT=Symbol();function cT(t,e,n=!0,i=!1){const r=Bt||Ke;if(r){const s=r.type;if(t===D_){const a=FT(s,!1);if(a&&(a===e||a===Cn(e)||a===Kc(Cn(e))))return s}const o=Vp(r[t]||s[t],e)||Vp(r.appContext[t],e);return!o&&i?s:o}}function Vp(t,e){return t&&(t[e]||t[Cn(e)]||t[Kc(Cn(e))])}function Vr(t,e,n,i){let r;const s=n&&n[i];if(ee(t)||Ze(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(Ue(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,s&&s[a])}}else r=[];return n&&(n[i]=r),r}const qu=t=>t?H_(t)?tl(t)||t.proxy:qu(t.parent):null,Ls=kt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>qu(t.parent),$root:t=>qu(t.root),$emit:t=>t.emit,$options:t=>xf(t),$forceUpdate:t=>t.f||(t.f=()=>kf(t.update)),$nextTick:t=>t.n||(t.n=T_.bind(t.proxy)),$watch:t=>Yw.bind(t)}),nu=(t,e)=>t!==Ne&&!t.__isScriptSetup&&me(t,e),lT={get({_:t},e){const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(nu(i,e))return o[e]=1,i[e];if(r!==Ne&&me(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&me(l,e))return o[e]=3,s[e];if(n!==Ne&&me(n,e))return o[e]=4,n[e];Gu&&(o[e]=0)}}const u=Ls[e];let h,f;if(u)return e==="$attrs"&&Mt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ne&&me(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,me(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return nu(r,e)?(r[e]=n,!0):i!==Ne&&me(i,e)?(i[e]=n,!0):me(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==Ne&&me(t,o)||nu(e,o)||(a=s[0])&&me(a,o)||me(i,o)||me(Ls,o)||me(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:me(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Gu=!0;function uT(t){const e=xf(t),n=t.proxy,i=t.ctx;Gu=!1,e.beforeCreate&&$p(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:m,activated:y,deactivated:b,beforeDestroy:_,beforeUnmount:v,destroyed:E,unmounted:I,render:F,renderTracked:Q,renderTriggered:se,errorCaptured:_e,serverPrefetch:ze,expose:dt,inheritAttrs:ti,components:pn,directives:fr,filters:Si}=e;if(l&&hT(l,i,null,t.appContext.config.unwrapInjectedRef),o)for(const Ae in o){const Ie=o[Ae];ie(Ie)&&(i[Ae]=Ie.bind(n))}if(r){const Ae=r.call(n,n);Ue(Ae)&&(t.data=xo(Ae))}if(Gu=!0,s)for(const Ae in s){const Ie=s[Ae],Xt=ie(Ie)?Ie.bind(n,n):ie(Ie.get)?Ie.get.bind(n,n):ln,Ai=!ie(Ie)&&ie(Ie.set)?Ie.set.bind(n):ln,Jt=re({get:Xt,set:Ai});Object.defineProperty(i,Ae,{enumerable:!0,configurable:!0,get:()=>Jt.value,set:Rt=>Jt.value=Rt})}if(a)for(const Ae in a)P_(a[Ae],i,n,Ae);if(c){const Ae=ie(c)?c.call(n):c;Reflect.ownKeys(Ae).forEach(Ie=>{Ua(Ie,Ae[Ie])})}u&&$p(u,t,"c");function We(Ae,Ie){ee(Ie)?Ie.forEach(Xt=>Ae(Xt.bind(n))):Ie&&Ae(Ie.bind(n))}if(We(Zw,h),We(x_,f),We(eT,d),We(tT,m),We(Qw,y),We(Xw,b),We(sT,_e),We(rT,Q),We(iT,se),We(nT,v),We(Nf,I),We(O_,ze),ee(dt))if(dt.length){const Ae=t.exposed||(t.exposed={});dt.forEach(Ie=>{Object.defineProperty(Ae,Ie,{get:()=>n[Ie],set:Xt=>n[Ie]=Xt})})}else t.exposed||(t.exposed={});F&&t.render===ln&&(t.render=F),ti!=null&&(t.inheritAttrs=ti),pn&&(t.components=pn),fr&&(t.directives=fr)}function hT(t,e,n=ln,i=!1){ee(t)&&(t=Yu(t));for(const r in t){const s=t[r];let o;Ue(s)?"default"in s?o=jt(s.from||r,s.default,!0):o=jt(s.from||r):o=jt(s),ut(o)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function $p(t,e,n){un(ee(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function P_(t,e,n,i){const r=i.includes(".")?k_(n,i):()=>n[i];if(Ze(t)){const s=e[t];ie(s)&&Nr(r,s)}else if(ie(t))Nr(r,t.bind(n));else if(Ue(t))if(ee(t))t.forEach(s=>P_(s,e,n,i));else{const s=ie(t.handler)?t.handler.bind(n):e[t.handler];ie(s)&&Nr(r,s,t)}}function xf(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:!r.length&&!n&&!i?c=e:(c={},r.length&&r.forEach(l=>Ja(c,l,o,!0)),Ja(c,e,o)),Ue(e)&&s.set(e,c),c}function Ja(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Ja(t,s,n,!0),r&&r.forEach(o=>Ja(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=fT[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const fT={data:Bp,props:Ni,emits:Ni,methods:Ni,computed:Ni,beforeCreate:Ct,created:Ct,beforeMount:Ct,mounted:Ct,beforeUpdate:Ct,updated:Ct,beforeDestroy:Ct,beforeUnmount:Ct,destroyed:Ct,unmounted:Ct,activated:Ct,deactivated:Ct,errorCaptured:Ct,serverPrefetch:Ct,components:Ni,directives:Ni,watch:pT,provide:Bp,inject:dT};function Bp(t,e){return e?t?function(){return kt(ie(t)?t.call(this,this):t,ie(e)?e.call(this,this):e)}:e:t}function dT(t,e){return Ni(Yu(t),Yu(e))}function Yu(t){if(ee(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ct(t,e){return t?[...new Set([].concat(t,e))]:e}function Ni(t,e){return t?kt(kt(Object.create(null),t),e):e}function pT(t,e){if(!t)return e;if(!e)return t;const n=kt(Object.create(null),t);for(const i in e)n[i]=Ct(t[i],e[i]);return n}function mT(t,e,n,i=!1){const r={},s={};Ya(s,Zc,1),t.propsDefaults=Object.create(null),M_(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:Nw(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function gT(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=ve(r),[c]=t.propsOptions;let l=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Gc(t.emitsOptions,f))continue;const d=e[f];if(c)if(me(s,f))d!==s[f]&&(s[f]=d,l=!0);else{const m=Cn(f);r[m]=Qu(c,a,m,d,t,!1)}else d!==s[f]&&(s[f]=d,l=!0)}}}else{M_(t,e,r,s)&&(l=!0);let u;for(const h in a)(!e||!me(e,h)&&((u=is(h))===h||!me(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Qu(c,a,h,void 0,t,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!me(e,h))&&(delete s[h],l=!0)}l&&jn(t,"set","$attrs")}function M_(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(La(c))continue;const l=e[c];let u;r&&me(r,u=Cn(c))?!s||!s.includes(u)?n[u]=l:(a||(a={}))[u]=l:Gc(t.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,o=!0)}if(s){const c=ve(n),l=a||Ne;for(let u=0;u<s.length;u++){const h=s[u];n[h]=Qu(r,c,h,l[h],t,!me(l,h))}}return o}function Qu(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=me(o,"default");if(a&&i===void 0){const c=o.default;if(o.type!==Function&&ie(c)){const{propsDefaults:l}=r;n in l?i=l[n]:(Br(r),i=l[n]=c.call(null,e),Ki())}else i=c}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===is(n))&&(i=!0))}return i}function L_(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let c=!1;if(!ie(t)){const u=h=>{c=!0;const[f,d]=L_(h,e,!0);kt(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!c)return Ue(t)&&i.set(t,Sr),Sr;if(ee(s))for(let u=0;u<s.length;u++){const h=Cn(s[u]);jp(h)&&(o[h]=Ne)}else if(s)for(const u in s){const h=Cn(u);if(jp(h)){const f=s[u],d=o[h]=ee(f)||ie(f)?{type:f}:Object.assign({},f);if(d){const m=Kp(Boolean,d.type),y=Kp(String,d.type);d[0]=m>-1,d[1]=y<0||m<y,(m>-1||me(d,"default"))&&a.push(h)}}}const l=[o,a];return Ue(t)&&i.set(t,l),l}function jp(t){return t[0]!=="$"}function zp(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Hp(t,e){return zp(t)===zp(e)}function Kp(t,e){return ee(e)?e.findIndex(n=>Hp(n,t)):ie(e)&&Hp(e,t)?0:-1}const F_=t=>t[0]==="_"||t==="$stable",Of=t=>ee(t)?t.map(yn):[yn(t)],yT=(t,e,n)=>{if(e._n)return e;const i=Bw((...r)=>Of(e(...r)),n);return i._c=!1,i},U_=(t,e,n)=>{const i=t._ctx;for(const r in t){if(F_(r))continue;const s=t[r];if(ie(s))e[r]=yT(r,s,i);else if(s!=null){const o=Of(s);e[r]=()=>o}}},V_=(t,e)=>{const n=Of(e);t.slots.default=()=>n},_T=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ve(e),Ya(e,"_",n)):U_(e,t.slots={})}else t.slots={},e&&V_(t,e);Ya(t.slots,Zc,1)},vT=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=Ne;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(kt(r,e),!n&&a===1&&delete r._):(s=!e.$stable,U_(e,r)),o=e}else e&&(V_(t,e),o={default:1});if(s)for(const a in r)!F_(a)&&!(a in o)&&delete r[a]};function $_(){return{app:null,config:{isNativeTag:GE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let bT=0;function ET(t,e){return function(i,r=null){ie(i)||(i=Object.assign({},i)),r!=null&&!Ue(r)&&(r=null);const s=$_(),o=new Set;let a=!1;const c=s.app={_uid:bT++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:$T,get config(){return s.config},set config(l){},use(l,...u){return o.has(l)||(l&&ie(l.install)?(o.add(l),l.install(c,...u)):ie(l)&&(o.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,h){if(!a){const f=Be(i,r);return f.appContext=s,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,tl(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c}};return c}}function Xu(t,e,n,i,r=!1){if(ee(t)){t.forEach((f,d)=>Xu(f,e&&(ee(e)?e[d]:e),n,i,r));return}if(Va(i)&&!r)return;const s=i.shapeFlag&4?tl(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ne?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ze(l)?(u[l]=null,me(h,l)&&(h[l]=null)):ut(l)&&(l.value=null)),ie(c))li(c,a,12,[o,u]);else{const f=Ze(c),d=ut(c);if(f||d){const m=()=>{if(t.f){const y=f?me(h,c)?h[c]:u[c]:c.value;r?ee(y)&&gf(y,s):ee(y)?y.includes(s)||y.push(s):f?(u[c]=[s],me(h,c)&&(h[c]=u[c])):(c.value=[s],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,me(h,c)&&(h[c]=o)):d&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,xt(m,n)):m()}}}const xt=qw;function wT(t){return TT(t)}function TT(t,e){const n=ew();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=ln,insertStaticContent:m}=t,y=(p,g,w,T=null,S=null,x=null,L=!1,N=null,D=!!g.dynamicChildren)=>{if(p===g)return;p&&!ws(p,g)&&(T=M(p),Rt(p,S,x,!0),p=null),g.patchFlag===-2&&(D=!1,g.dynamicChildren=null);const{type:k,ref:K,shapeFlag:$}=g;switch(k){case Jc:b(p,g,w,T);break;case Yi:_(p,g,w,T);break;case $a:p==null&&v(g,w,T,L);break;case He:pn(p,g,w,T,S,x,L,N,D);break;default:$&1?F(p,g,w,T,S,x,L,N,D):$&6?fr(p,g,w,T,S,x,L,N,D):($&64||$&128)&&k.process(p,g,w,T,S,x,L,N,D,pe)}K!=null&&S&&Xu(K,p&&p.ref,x,g||p,!g)},b=(p,g,w,T)=>{if(p==null)i(g.el=a(g.children),w,T);else{const S=g.el=p.el;g.children!==p.children&&l(S,g.children)}},_=(p,g,w,T)=>{p==null?i(g.el=c(g.children||""),w,T):g.el=p.el},v=(p,g,w,T)=>{[p.el,p.anchor]=m(p.children,g,w,T,p.el,p.anchor)},E=({el:p,anchor:g},w,T)=>{let S;for(;p&&p!==g;)S=f(p),i(p,w,T),p=S;i(g,w,T)},I=({el:p,anchor:g})=>{let w;for(;p&&p!==g;)w=f(p),r(p),p=w;r(g)},F=(p,g,w,T,S,x,L,N,D)=>{L=L||g.type==="svg",p==null?Q(g,w,T,S,x,L,N,D):ze(p,g,S,x,L,N,D)},Q=(p,g,w,T,S,x,L,N)=>{let D,k;const{type:K,props:$,shapeFlag:W,transition:J,dirs:ae}=p;if(D=p.el=o(p.type,x,$&&$.is,$),W&8?u(D,p.children):W&16&&_e(p.children,D,null,T,S,x&&K!=="foreignObject",L,N),ae&&ki(p,null,T,"created"),se(D,p,p.scopeId,L,T),$){for(const Ce in $)Ce!=="value"&&!La(Ce)&&s(D,Ce,null,$[Ce],x,p.children,T,S,U);"value"in $&&s(D,"value",null,$.value),(k=$.onVnodeBeforeMount)&&gn(k,T,p)}ae&&ki(p,null,T,"beforeMount");const ke=(!S||S&&!S.pendingBranch)&&J&&!J.persisted;ke&&J.beforeEnter(D),i(D,g,w),((k=$&&$.onVnodeMounted)||ke||ae)&&xt(()=>{k&&gn(k,T,p),ke&&J.enter(D),ae&&ki(p,null,T,"mounted")},S)},se=(p,g,w,T,S)=>{if(w&&d(p,w),T)for(let x=0;x<T.length;x++)d(p,T[x]);if(S){let x=S.subTree;if(g===x){const L=S.vnode;se(p,L,L.scopeId,L.slotScopeIds,S.parent)}}},_e=(p,g,w,T,S,x,L,N,D=0)=>{for(let k=D;k<p.length;k++){const K=p[k]=N?oi(p[k]):yn(p[k]);y(null,K,g,w,T,S,x,L,N)}},ze=(p,g,w,T,S,x,L)=>{const N=g.el=p.el;let{patchFlag:D,dynamicChildren:k,dirs:K}=g;D|=p.patchFlag&16;const $=p.props||Ne,W=g.props||Ne;let J;w&&Ri(w,!1),(J=W.onVnodeBeforeUpdate)&&gn(J,w,g,p),K&&ki(g,p,w,"beforeUpdate"),w&&Ri(w,!0);const ae=S&&g.type!=="foreignObject";if(k?dt(p.dynamicChildren,k,N,w,T,ae,x):L||Ie(p,g,N,null,w,T,ae,x,!1),D>0){if(D&16)ti(N,g,$,W,w,T,S);else if(D&2&&$.class!==W.class&&s(N,"class",null,W.class,S),D&4&&s(N,"style",$.style,W.style,S),D&8){const ke=g.dynamicProps;for(let Ce=0;Ce<ke.length;Ce++){const qe=ke[Ce],Zt=$[qe],pr=W[qe];(pr!==Zt||qe==="value")&&s(N,qe,Zt,pr,S,p.children,w,T,U)}}D&1&&p.children!==g.children&&u(N,g.children)}else!L&&k==null&&ti(N,g,$,W,w,T,S);((J=W.onVnodeUpdated)||K)&&xt(()=>{J&&gn(J,w,g,p),K&&ki(g,p,w,"updated")},T)},dt=(p,g,w,T,S,x,L)=>{for(let N=0;N<g.length;N++){const D=p[N],k=g[N],K=D.el&&(D.type===He||!ws(D,k)||D.shapeFlag&70)?h(D.el):w;y(D,k,K,null,T,S,x,L,!0)}},ti=(p,g,w,T,S,x,L)=>{if(w!==T){if(w!==Ne)for(const N in w)!La(N)&&!(N in T)&&s(p,N,w[N],null,L,g.children,S,x,U);for(const N in T){if(La(N))continue;const D=T[N],k=w[N];D!==k&&N!=="value"&&s(p,N,k,D,L,g.children,S,x,U)}"value"in T&&s(p,"value",w.value,T.value)}},pn=(p,g,w,T,S,x,L,N,D)=>{const k=g.el=p?p.el:a(""),K=g.anchor=p?p.anchor:a("");let{patchFlag:$,dynamicChildren:W,slotScopeIds:J}=g;J&&(N=N?N.concat(J):J),p==null?(i(k,w,T),i(K,w,T),_e(g.children,w,K,S,x,L,N,D)):$>0&&$&64&&W&&p.dynamicChildren?(dt(p.dynamicChildren,W,w,S,x,L,N),(g.key!=null||S&&g===S.subTree)&&B_(p,g,!0)):Ie(p,g,w,K,S,x,L,N,D)},fr=(p,g,w,T,S,x,L,N,D)=>{g.slotScopeIds=N,p==null?g.shapeFlag&512?S.ctx.activate(g,w,T,L,D):Si(g,w,T,S,x,L,D):bs(p,g,D)},Si=(p,g,w,T,S,x,L)=>{const N=p.component=OT(p,T,S);if(R_(p)&&(N.ctx.renderer=pe),DT(N),N.asyncDep){if(S&&S.registerDep(N,We),!p.el){const D=N.subTree=Be(Yi);_(null,D,g,w)}return}We(N,p,g,w,S,x,L)},bs=(p,g,w)=>{const T=g.component=p.component;if(Hw(p,g,w))if(T.asyncDep&&!T.asyncResolved){Ae(T,g,w);return}else T.next=g,Fw(T.update),T.update();else g.el=p.el,T.vnode=g},We=(p,g,w,T,S,x,L)=>{const N=()=>{if(p.isMounted){let{next:K,bu:$,u:W,parent:J,vnode:ae}=p,ke=K,Ce;Ri(p,!1),K?(K.el=ae.el,Ae(p,K,L)):K=ae,$&&Fa($),(Ce=K.props&&K.props.onVnodeBeforeUpdate)&&gn(Ce,J,K,ae),Ri(p,!0);const qe=tu(p),Zt=p.subTree;p.subTree=qe,y(Zt,qe,h(Zt.el),M(Zt),p,S,x),K.el=qe.el,ke===null&&Kw(p,qe.el),W&&xt(W,S),(Ce=K.props&&K.props.onVnodeUpdated)&&xt(()=>gn(Ce,J,K,ae),S)}else{let K;const{el:$,props:W}=g,{bm:J,m:ae,parent:ke}=p,Ce=Va(g);if(Ri(p,!1),J&&Fa(J),!Ce&&(K=W&&W.onVnodeBeforeMount)&&gn(K,ke,g),Ri(p,!0),$&&oe){const qe=()=>{p.subTree=tu(p),oe($,p.subTree,p,S,null)};Ce?g.type.__asyncLoader().then(()=>!p.isUnmounted&&qe()):qe()}else{const qe=p.subTree=tu(p);y(null,qe,w,T,p,S,x),g.el=qe.el}if(ae&&xt(ae,S),!Ce&&(K=W&&W.onVnodeMounted)){const qe=g;xt(()=>gn(K,ke,qe),S)}(g.shapeFlag&256||ke&&Va(ke.vnode)&&ke.vnode.shapeFlag&256)&&p.a&&xt(p.a,S),p.isMounted=!0,g=w=T=null}},D=p.effect=new bf(N,()=>kf(k),p.scope),k=p.update=()=>D.run();k.id=p.uid,Ri(p,!0),k()},Ae=(p,g,w)=>{g.component=p;const T=p.vnode.props;p.vnode=g,p.next=null,gT(p,g.props,T,w),vT(p,g.children,w),rs(),Fp(),ss()},Ie=(p,g,w,T,S,x,L,N,D=!1)=>{const k=p&&p.children,K=p?p.shapeFlag:0,$=g.children,{patchFlag:W,shapeFlag:J}=g;if(W>0){if(W&128){Ai(k,$,w,T,S,x,L,N,D);return}else if(W&256){Xt(k,$,w,T,S,x,L,N,D);return}}J&8?(K&16&&U(k,S,x),$!==k&&u(w,$)):K&16?J&16?Ai(k,$,w,T,S,x,L,N,D):U(k,S,x,!0):(K&8&&u(w,""),J&16&&_e($,w,T,S,x,L,N,D))},Xt=(p,g,w,T,S,x,L,N,D)=>{p=p||Sr,g=g||Sr;const k=p.length,K=g.length,$=Math.min(k,K);let W;for(W=0;W<$;W++){const J=g[W]=D?oi(g[W]):yn(g[W]);y(p[W],J,w,null,S,x,L,N,D)}k>K?U(p,S,x,!0,!1,$):_e(g,w,T,S,x,L,N,D,$)},Ai=(p,g,w,T,S,x,L,N,D)=>{let k=0;const K=g.length;let $=p.length-1,W=K-1;for(;k<=$&&k<=W;){const J=p[k],ae=g[k]=D?oi(g[k]):yn(g[k]);if(ws(J,ae))y(J,ae,w,null,S,x,L,N,D);else break;k++}for(;k<=$&&k<=W;){const J=p[$],ae=g[W]=D?oi(g[W]):yn(g[W]);if(ws(J,ae))y(J,ae,w,null,S,x,L,N,D);else break;$--,W--}if(k>$){if(k<=W){const J=W+1,ae=J<K?g[J].el:T;for(;k<=W;)y(null,g[k]=D?oi(g[k]):yn(g[k]),w,ae,S,x,L,N,D),k++}}else if(k>W)for(;k<=$;)Rt(p[k],S,x,!0),k++;else{const J=k,ae=k,ke=new Map;for(k=ae;k<=W;k++){const Ft=g[k]=D?oi(g[k]):yn(g[k]);Ft.key!=null&&ke.set(Ft.key,k)}let Ce,qe=0;const Zt=W-ae+1;let pr=!1,Sp=0;const Es=new Array(Zt);for(k=0;k<Zt;k++)Es[k]=0;for(k=J;k<=$;k++){const Ft=p[k];if(qe>=Zt){Rt(Ft,S,x,!0);continue}let mn;if(Ft.key!=null)mn=ke.get(Ft.key);else for(Ce=ae;Ce<=W;Ce++)if(Es[Ce-ae]===0&&ws(Ft,g[Ce])){mn=Ce;break}mn===void 0?Rt(Ft,S,x,!0):(Es[mn-ae]=k+1,mn>=Sp?Sp=mn:pr=!0,y(Ft,g[mn],w,null,S,x,L,N,D),qe++)}const Ap=pr?IT(Es):Sr;for(Ce=Ap.length-1,k=Zt-1;k>=0;k--){const Ft=ae+k,mn=g[Ft],kp=Ft+1<K?g[Ft+1].el:T;Es[k]===0?y(null,mn,w,kp,S,x,L,N,D):pr&&(Ce<0||k!==Ap[Ce]?Jt(mn,w,kp,2):Ce--)}}},Jt=(p,g,w,T,S=null)=>{const{el:x,type:L,transition:N,children:D,shapeFlag:k}=p;if(k&6){Jt(p.component.subTree,g,w,T);return}if(k&128){p.suspense.move(g,w,T);return}if(k&64){L.move(p,g,w,pe);return}if(L===He){i(x,g,w);for(let $=0;$<D.length;$++)Jt(D[$],g,w,T);i(p.anchor,g,w);return}if(L===$a){E(p,g,w);return}if(T!==2&&k&1&&N)if(T===0)N.beforeEnter(x),i(x,g,w),xt(()=>N.enter(x),S);else{const{leave:$,delayLeave:W,afterLeave:J}=N,ae=()=>i(x,g,w),ke=()=>{$(x,()=>{ae(),J&&J()})};W?W(x,ae,ke):ke()}else i(x,g,w)},Rt=(p,g,w,T=!1,S=!1)=>{const{type:x,props:L,ref:N,children:D,dynamicChildren:k,shapeFlag:K,patchFlag:$,dirs:W}=p;if(N!=null&&Xu(N,null,w,p,!0),K&256){g.ctx.deactivate(p);return}const J=K&1&&W,ae=!Va(p);let ke;if(ae&&(ke=L&&L.onVnodeBeforeUnmount)&&gn(ke,g,p),K&6)C(p.component,w,T);else{if(K&128){p.suspense.unmount(w,T);return}J&&ki(p,null,g,"beforeUnmount"),K&64?p.type.remove(p,g,w,S,pe,T):k&&(x!==He||$>0&&$&64)?U(k,g,w,!1,!0):(x===He&&$&384||!S&&K&16)&&U(D,g,w),T&&dr(p)}(ae&&(ke=L&&L.onVnodeUnmounted)||J)&&xt(()=>{ke&&gn(ke,g,p),J&&ki(p,null,g,"unmounted")},w)},dr=p=>{const{type:g,el:w,anchor:T,transition:S}=p;if(g===He){aa(w,T);return}if(g===$a){I(p);return}const x=()=>{r(w),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(p.shapeFlag&1&&S&&!S.persisted){const{leave:L,delayLeave:N}=S,D=()=>L(w,x);N?N(p.el,x,D):D()}else x()},aa=(p,g)=>{let w;for(;p!==g;)w=f(p),r(p),p=w;r(g)},C=(p,g,w)=>{const{bum:T,scope:S,update:x,subTree:L,um:N}=p;T&&Fa(T),S.stop(),x&&(x.active=!1,Rt(L,p,g,w)),N&&xt(N,g),xt(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},U=(p,g,w,T=!1,S=!1,x=0)=>{for(let L=x;L<p.length;L++)Rt(p[L],g,w,T,S)},M=p=>p.shapeFlag&6?M(p.component.subTree):p.shapeFlag&128?p.suspense.next():f(p.anchor||p.el),H=(p,g,w)=>{p==null?g._vnode&&Rt(g._vnode,null,null,!0):y(g._vnode||null,p,g,null,null,null,w),Fp(),C_(),g._vnode=p},pe={p:y,um:Rt,m:Jt,r:dr,mt:Si,mc:_e,pc:Ie,pbc:dt,n:M,o:t};let Ve,oe;return e&&([Ve,oe]=e(pe)),{render:H,hydrate:Ve,createApp:ET(H,Ve)}}function Ri({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function B_(t,e,n=!1){const i=t.children,r=e.children;if(ee(i)&&ee(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=oi(r[s]),a.el=o.el),n||B_(o,a)),a.type===Jc&&(a.el=o.el)}}function IT(t){const e=t.slice(),n=[0];let i,r,s,o,a;const c=t.length;for(i=0;i<c;i++){const l=t[i];if(l!==0){if(r=n[n.length-1],t[r]<l){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<l?s=a+1:o=a;l<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const CT=t=>t.__isTeleport,He=Symbol(void 0),Jc=Symbol(void 0),Yi=Symbol(void 0),$a=Symbol(void 0),Fs=[];let rn=null;function te(t=!1){Fs.push(rn=t?null:[])}function ST(){Fs.pop(),rn=Fs[Fs.length-1]||null}let io=1;function Wp(t){io+=t}function j_(t){return t.dynamicChildren=io>0?rn||Sr:null,ST(),io>0&&rn&&rn.push(t),t}function ye(t,e,n,i,r,s){return j_(ce(t,e,n,i,r,s,!0))}function zn(t,e,n,i,r){return j_(Be(t,e,n,i,r,!0))}function Ju(t){return t?t.__v_isVNode===!0:!1}function ws(t,e){return t.type===e.type&&t.key===e.key}const Zc="__vInternal",z_=({key:t})=>t??null,Ba=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ze(t)||ut(t)||ie(t)?{i:Bt,r:t,k:e,f:!!n}:t:null;function ce(t,e=null,n=null,i=0,r=null,s=t===He?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&z_(e),ref:e&&Ba(e),scopeId:Yc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Bt};return a?(Df(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=Ze(n)?8:16),io>0&&!o&&rn&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&rn.push(c),c}const Be=AT;function AT(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===aT)&&(t=Yi),Ju(t)){const a=$r(t,e,!0);return n&&Df(a,n),io>0&&!s&&rn&&(a.shapeFlag&6?rn[rn.indexOf(t)]=a:rn.push(a)),a.patchFlag|=-2,a}if(UT(t)&&(t=t.__vccOpts),e){e=kT(e);let{class:a,style:c}=e;a&&!Ze(a)&&(e.class=pi(a)),Ue(c)&&(m_(c)&&!ee(c)&&(c=kt({},c)),e.style=No(c))}const o=Ze(t)?1:Ww(t)?128:CT(t)?64:Ue(t)?4:ie(t)?2:0;return ce(t,e,n,i,r,o,s,!0)}function kT(t){return t?m_(t)||Zc in t?kt({},t):t:null}function $r(t,e,n=!1){const{props:i,ref:r,patchFlag:s,children:o}=t,a=e?RT(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&z_(a),ref:e&&e.ref?n&&r?ee(r)?r.concat(Ba(e)):[r,Ba(e)]:Ba(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==He?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&$r(t.ssContent),ssFallback:t.ssFallback&&$r(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Yt(t=" ",e=0){return Be(Jc,null,t,e)}function ot(t="",e=!1){return e?(te(),zn(Yi,null,t)):Be(Yi,null,t)}function yn(t){return t==null||typeof t=="boolean"?Be(Yi):ee(t)?Be(He,null,t.slice()):typeof t=="object"?oi(t):Be(Jc,null,String(t))}function oi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:$r(t)}function Df(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(ee(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Df(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Zc in e)?e._ctx=Bt:r===3&&Bt&&(Bt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ie(e)?(e={default:e,_ctx:Bt},n=32):(e=String(e),i&64?(n=16,e=[Yt(e)]):n=8);t.children=e,t.shapeFlag|=n}function RT(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=pi([e.class,i.class]));else if(r==="style")e.style=No([e.style,i.style]);else if(jc(r)){const s=e[r],o=i[r];o&&s!==o&&!(ee(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function gn(t,e,n,i=null){un(t,e,7,[n,i])}const NT=$_();let xT=0;function OT(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||NT,s={uid:xT++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new n_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:L_(i,r),emitsOptions:A_(i,r),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:i.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=$w.bind(null,s),t.ce&&t.ce(s),s}let Ke=null;const el=()=>Ke||Bt,Br=t=>{Ke=t,t.scope.on()},Ki=()=>{Ke&&Ke.scope.off(),Ke=null};function H_(t){return t.vnode.shapeFlag&4}let ro=!1;function DT(t,e=!1){ro=e;const{props:n,children:i}=t.vnode,r=H_(t);mT(t,n,r,e),_T(t,i);const s=r?PT(t,e):void 0;return ro=!1,s}function PT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Cf(new Proxy(t.ctx,lT));const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?LT(t):null;Br(t),rs();const s=li(i,t,0,[t.props,r]);if(ss(),Ki(),Zy(s)){if(s.then(Ki,Ki),e)return s.then(o=>{qp(t,o,e)}).catch(o=>{qc(o,t,0)});t.asyncDep=s}else qp(t,s,e)}else K_(t,e)}function qp(t,e,n){ie(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ue(e)&&(t.setupState=b_(e)),K_(t,n)}let Gp;function K_(t,e,n){const i=t.type;if(!t.render){if(!e&&Gp&&!i.render){const r=i.template||xf(t).template;if(r){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=i,l=kt(kt({isCustomElement:s,delimiters:a},o),c);i.render=Gp(r,l)}}t.render=i.render||ln}Br(t),rs(),uT(t),ss(),Ki()}function MT(t){return new Proxy(t.attrs,{get(e,n){return Mt(t,"get","$attrs"),e[n]}})}function LT(t){const e=i=>{t.exposed=i||{}};let n;return{get attrs(){return n||(n=MT(t))},slots:t.slots,emit:t.emit,expose:e}}function tl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(b_(Cf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ls)return Ls[n](t)},has(e,n){return n in e||n in Ls}}))}function FT(t,e=!0){return ie(t)?t.displayName||t.name:t.name||e&&t.__name}function UT(t){return ie(t)&&"__vccOpts"in t}const re=(t,e)=>Pw(t,e,ro);function nl(t,e,n){const i=arguments.length;return i===2?Ue(e)&&!ee(e)?Ju(e)?Be(t,null,[e]):Be(t,e):Be(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Ju(n)&&(n=[n]),Be(t,e,n))}const W_=Symbol(""),VT=()=>jt(W_),$T="3.2.47",BT="http://www.w3.org/2000/svg",Pi=typeof document<"u"?document:null,Yp=Pi&&Pi.createElement("template"),jT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e?Pi.createElementNS(BT,t):Pi.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Pi.createTextNode(t),createComment:t=>Pi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Pi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Yp.innerHTML=i?`<svg>${t}</svg>`:t;const a=Yp.content;if(i){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function zT(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function HT(t,e,n){const i=t.style,r=Ze(n);if(n&&!r){if(e&&!Ze(e))for(const s in e)n[s]==null&&Zu(i,s,"");for(const s in n)Zu(i,s,n[s])}else{const s=i.display;r?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=s)}}const Qp=/\s*!important$/;function Zu(t,e,n){if(ee(n))n.forEach(i=>Zu(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=KT(t,e);Qp.test(n)?t.setProperty(is(i),n.replace(Qp,""),"important"):t[i]=n}}const Xp=["Webkit","Moz","ms"],iu={};function KT(t,e){const n=iu[e];if(n)return n;let i=Cn(e);if(i!=="filter"&&i in t)return iu[e]=i;i=Kc(i);for(let r=0;r<Xp.length;r++){const s=Xp[r]+i;if(s in t)return iu[e]=s}return e}const Jp="http://www.w3.org/1999/xlink";function WT(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Jp,e.slice(6,e.length)):t.setAttributeNS(Jp,e,n);else{const s=qE(e);n==null||s&&!Qy(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function qT(t,e,n,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Qy(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function yr(t,e,n,i){t.addEventListener(e,n,i)}function GT(t,e,n,i){t.removeEventListener(e,n,i)}function YT(t,e,n,i,r=null){const s=t._vei||(t._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,c]=QT(e);if(i){const l=s[e]=ZT(i,r);yr(t,a,l,c)}else o&&(GT(t,a,o,c),s[e]=void 0)}}const Zp=/(?:Once|Passive|Capture)$/;function QT(t){let e;if(Zp.test(t)){e={};let i;for(;i=t.match(Zp);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):is(t.slice(2)),e]}let ru=0;const XT=Promise.resolve(),JT=()=>ru||(XT.then(()=>ru=0),ru=Date.now());function ZT(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;un(eI(i,n.value),e,5,[i])};return n.value=t,n.attached=JT(),n}function eI(t,e){if(ee(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const em=/^on[a-z]/,tI=(t,e,n,i,r=!1,s,o,a,c)=>{e==="class"?zT(t,i,r):e==="style"?HT(t,n,i):jc(e)?mf(e)||YT(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):nI(t,e,i,r))?qT(t,e,i,s,o,a,c):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),WT(t,e,i,r))};function nI(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&em.test(e)&&ie(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||em.test(e)&&Ze(n)?!1:e in t}function Pf(t){const e=el();if(!e)return;const n=e.ut=(r=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(s=>th(s,r))},i=()=>{const r=t(e.proxy);eh(e.subTree,r),n(r)};Gw(i),x_(()=>{const r=new MutationObserver(i);r.observe(e.subTree.el.parentNode,{childList:!0}),Nf(()=>r.disconnect())})}function eh(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{eh(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)th(t.el,e);else if(t.type===He)t.children.forEach(n=>eh(n,e));else if(t.type===$a){let{el:n,anchor:i}=t;for(;n&&(th(n,e),n!==i);)n=n.nextSibling}}function th(t,e){if(t.nodeType===1){const n=t.style;for(const i in e)n.setProperty(`--${i}`,e[i])}}const tm=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ee(e)?n=>Fa(e,n):e};function iI(t){t.target.composing=!0}function nm(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const il={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t._assign=tm(r);const s=i||r.props&&r.props.type==="number";yr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=Bu(a)),t._assign(a)}),n&&yr(t,"change",()=>{t.value=t.value.trim()}),e||(yr(t,"compositionstart",iI),yr(t,"compositionend",nm),yr(t,"change",nm))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:r}},s){if(t._assign=tm(s),t.composing||document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===e||(r||t.type==="number")&&Bu(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},rI=["ctrl","shift","alt","meta"],sI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>rI.some(n=>t[`${n}Key`]&&!e.includes(n))},os=(t,e)=>(n,...i)=>{for(let r=0;r<e.length;r++){const s=sI[e[r]];if(s&&s(n,e))return}return t(n,...i)},oI=kt({patchProp:tI},jT);let im;function aI(){return im||(im=wT(oI))}const cI=(...t)=>{const e=aI().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=lI(i);if(!r)return;const s=e._component;!ie(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function lI(t){return Ze(t)?document.querySelector(t):t}var uI=!1;/*!
  * pinia v2.0.35
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const hI=Symbol();var rm;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(rm||(rm={}));function fI(){const t=tw(!0),e=t.run(()=>Dt({}));let n=[],i=[];const r=Cf({install(s){r._a=s,s.provide(hI,r),s.config.globalProperties.$pinia=r,i.forEach(o=>n.push(o)),i=[]},use(s){return!this._a&&!uI?i.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const P=function(t,e){if(!t)throw as(e)},as=function(t){return new Error("Firebase Database ("+q_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},dI=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},rl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|l>>6,d=l&63;c||(d=64,o||(f=64)),i.push(n[u],n[h],n[f],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(G_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||l==null||h==null)throw new pI;const f=s<<2|a>>4;if(i.push(f),l!==64){const d=a<<4&240|l>>2;if(i.push(d),h!==64){const m=l<<6&192|h;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class pI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Y_=function(t){const e=G_(t);return rl.encodeByteArray(e,!0)},Za=function(t){return Y_(t).replace(/\./g,"")},ec=function(t){try{return rl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(t){return Q_(void 0,t)}function Q_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!gI(n)||(t[n]=Q_(t[n],e[n]));return t}function gI(t){return t!=="__proto__"}/**
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
 */function yI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const _I=()=>yI().__FIREBASE_DEFAULTS__,vI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},bI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ec(t[1]);return e&&JSON.parse(e)},Mf=()=>{try{return _I()||vI()||bI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},EI=t=>{var e,n;return(n=(e=Mf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},wI=t=>{const e=EI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},TI=()=>{var t;return(t=Mf())===null||t===void 0?void 0:t.config},II=t=>{var e;return(e=Mf())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function CI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Za(JSON.stringify(n)),Za(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Lf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Sn())}function SI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function X_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function J_(){return q_.NODE_ADMIN===!0}function Z_(){try{return typeof indexedDB=="object"}catch{return!1}}function AI(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI="FirebaseError";class Jn extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=kI,Object.setPrototypeOf(this,Jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cs.prototype.create)}}class cs{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?RI(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Jn(r,a,i)}}function RI(t,e){return t.replace(NI,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const NI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(t){return JSON.parse(t)}function lt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev=function(t){let e={},n={},i={},r="";try{const s=t.split(".");e=oo(ec(s[0])||""),n=oo(ec(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:r}},xI=function(t){const e=ev(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},OI=function(t){const e=ev(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function jr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function sm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function tc(t,e,n){const i={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=e.call(n,t[r],r,t));return i}function nh(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(om(s)&&om(o)){if(!nh(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function om(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)i[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(f<<1|f>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let h=0;h<80;h++){h<40?h<20?(l=a^s&(o^a),u=1518500249):(l=s^o^a,u=1859775393):h<60?(l=s&o|a&(s|o),u=2400959708):(l=s^o^a,u=3395469782);const f=(r<<5|r>>>27)+l+c+u+i[h]&4294967295;c=a,a=o,o=(s<<30|s>>>2)&4294967295,s=r,r=f}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<n;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}}function PI(t,e){const n=new MI(t,e);return n.subscribe.bind(n)}class MI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");LI(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=su),r.error===void 0&&(r.error=su),r.complete===void 0&&(r.complete=su);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function LI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function su(){}function FI(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,P(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},sl=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Lt(t){return t&&t._delegate?t._delegate:t}class fn{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const xi="[DEFAULT]";/**
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
 */class VI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new so;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(BI(e))try{this.getOrInitializeService({instanceIdentifier:xi})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=xi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xi){return this.instances.has(e)}getOptions(e=xi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:$I(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=xi){return this.component?this.component.multipleInstances?e:xi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $I(t){return t===xi?void 0:t}function BI(t){return t.instantiationMode==="EAGER"}/**
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
 */class jI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new VI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const zI={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},HI=ge.INFO,KI={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},WI=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=KI[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mo{constructor(e){this.name=e,this._logLevel=HI,this._logHandler=WI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const qI=(t,e)=>e.some(n=>t instanceof n);let am,cm;function GI(){return am||(am=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function YI(){return cm||(cm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tv=new WeakMap,ih=new WeakMap,nv=new WeakMap,ou=new WeakMap,Uf=new WeakMap;function QI(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ui(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&tv.set(n,t)}).catch(()=>{}),Uf.set(e,t),e}function XI(t){if(ih.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ih.set(t,e)}let rh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ih.get(t);if(e==="objectStoreNames")return t.objectStoreNames||nv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ui(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function JI(t){rh=t(rh)}function ZI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(au(this),e,...n);return nv.set(i,e.sort?e.sort():[e]),ui(i)}:YI().includes(t)?function(...e){return t.apply(au(this),e),ui(tv.get(this))}:function(...e){return ui(t.apply(au(this),e))}}function eC(t){return typeof t=="function"?ZI(t):(t instanceof IDBTransaction&&XI(t),qI(t,GI())?new Proxy(t,rh):t)}function ui(t){if(t instanceof IDBRequest)return QI(t);if(ou.has(t))return ou.get(t);const e=eC(t);return e!==t&&(ou.set(t,e),Uf.set(e,t)),e}const au=t=>Uf.get(t);function tC(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=ui(o);return i&&o.addEventListener("upgradeneeded",c=>{i(ui(o.result),c.oldVersion,c.newVersion,ui(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{s&&c.addEventListener("close",()=>s()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const nC=["get","getKey","getAll","getAllKeys","count"],iC=["put","add","delete","clear"],cu=new Map;function lm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(cu.get(e))return cu.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=iC.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||nC.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return cu.set(e,s),s}JI(t=>({...t,get:(e,n,i)=>lm(e,n)||t.get(e,n,i),has:(e,n)=>!!lm(e,n)||t.has(e,n)}));/**
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
 */class rC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(sC(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function sC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const sh="@firebase/app",um="0.9.8";/**
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
 */const Qi=new Mo("@firebase/app"),oC="@firebase/app-compat",aC="@firebase/analytics-compat",cC="@firebase/analytics",lC="@firebase/app-check-compat",uC="@firebase/app-check",hC="@firebase/auth",fC="@firebase/auth-compat",dC="@firebase/database",pC="@firebase/database-compat",mC="@firebase/functions",gC="@firebase/functions-compat",yC="@firebase/installations",_C="@firebase/installations-compat",vC="@firebase/messaging",bC="@firebase/messaging-compat",EC="@firebase/performance",wC="@firebase/performance-compat",TC="@firebase/remote-config",IC="@firebase/remote-config-compat",CC="@firebase/storage",SC="@firebase/storage-compat",AC="@firebase/firestore",kC="@firebase/firestore-compat",RC="firebase",NC="9.20.0";/**
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
 */const oh="[DEFAULT]",xC={[sh]:"fire-core",[oC]:"fire-core-compat",[cC]:"fire-analytics",[aC]:"fire-analytics-compat",[uC]:"fire-app-check",[lC]:"fire-app-check-compat",[hC]:"fire-auth",[fC]:"fire-auth-compat",[dC]:"fire-rtdb",[pC]:"fire-rtdb-compat",[mC]:"fire-fn",[gC]:"fire-fn-compat",[yC]:"fire-iid",[_C]:"fire-iid-compat",[vC]:"fire-fcm",[bC]:"fire-fcm-compat",[EC]:"fire-perf",[wC]:"fire-perf-compat",[TC]:"fire-rc",[IC]:"fire-rc-compat",[CC]:"fire-gcs",[SC]:"fire-gcs-compat",[AC]:"fire-fst",[kC]:"fire-fst-compat","fire-js":"fire-js",[RC]:"fire-js-all"};/**
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
 */const nc=new Map,ah=new Map;function OC(t,e){try{t.container.addComponent(e)}catch(n){Qi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function An(t){const e=t.name;if(ah.has(e))return Qi.debug(`There were multiple attempts to register component ${e}.`),!1;ah.set(e,t);for(const n of nc.values())OC(n,t);return!0}function DC(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const PC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},hi=new cs("app","Firebase",PC);/**
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
 */class MC{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hi.create("app-deleted",{appName:this._name})}}/**
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
 */const ls=NC;function iv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:oh,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw hi.create("bad-app-name",{appName:String(r)});if(n||(n=TI()),!n)throw hi.create("no-options");const s=nc.get(r);if(s){if(nh(n,s.options)&&nh(i,s.config))return s;throw hi.create("duplicate-app",{appName:r})}const o=new jI(r);for(const c of ah.values())o.addComponent(c);const a=new MC(n,i,o);return nc.set(r,a),a}function rv(t=oh){const e=nc.get(t);if(!e&&t===oh)return iv();if(!e)throw hi.create("no-app",{appName:t});return e}function zt(t,e,n){var i;let r=(i=xC[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qi.warn(a.join(" "));return}An(new fn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const LC="firebase-heartbeat-database",FC=1,ao="firebase-heartbeat-store";let lu=null;function sv(){return lu||(lu=tC(LC,FC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ao)}}}).catch(t=>{throw hi.create("idb-open",{originalErrorMessage:t.message})})),lu}async function UC(t){try{return(await sv()).transaction(ao).objectStore(ao).get(ov(t))}catch(e){if(e instanceof Jn)Qi.warn(e.message);else{const n=hi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qi.warn(n.message)}}}async function hm(t,e){try{const i=(await sv()).transaction(ao,"readwrite");return await i.objectStore(ao).put(e,ov(t)),i.done}catch(n){if(n instanceof Jn)Qi.warn(n.message);else{const i=hi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qi.warn(i.message)}}}function ov(t){return`${t.name}!${t.options.appId}`}/**
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
 */const VC=1024,$C=30*24*60*60*1e3;class BC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zC(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=fm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=$C}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=fm(),{heartbeatsToSend:n,unsentEntries:i}=jC(this._heartbeatsCache.heartbeats),r=Za(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function fm(){return new Date().toISOString().substring(0,10)}function jC(t,e=VC){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),dm(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),dm(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class zC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Z_()?AI().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await UC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return hm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return hm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function dm(t){return Za(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function HC(t){An(new fn("platform-logger",e=>new rC(e),"PRIVATE")),An(new fn("heartbeat",e=>new BC(e),"PRIVATE")),zt(sh,um,t),zt(sh,um,"esm2017"),zt("fire-js","")}HC("");function av(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function cv(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const KC=cv,lv=new cs("auth","Firebase",cv());/**
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
 */const ic=new Mo("@firebase/auth");function WC(t,...e){ic.logLevel<=ge.WARN&&ic.warn(`Auth (${ls}): ${t}`,...e)}function ja(t,...e){ic.logLevel<=ge.ERROR&&ic.error(`Auth (${ls}): ${t}`,...e)}/**
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
 */function pm(t,...e){throw $f(t,...e)}function Vf(t,...e){return $f(t,...e)}function qC(t,e,n){const i=Object.assign(Object.assign({},KC()),{[e]:n});return new cs("auth","Firebase",i).create(e,{appName:t.name})}function $f(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return lv.create(t,...e)}function Ee(t,e,...n){if(!t)throw $f(e,...n)}function Us(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ja(e),new Error(e)}function rc(t,e){t||Us(e)}function GC(){return mm()==="http:"||mm()==="https:"}function mm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function YC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(GC()||SI()||"connection"in navigator)?navigator.onLine:!0}function QC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Lo{constructor(e,n){this.shortDelay=e,this.longDelay=n,rc(n>e,"Short delay should be less than long delay!"),this.isMobile=Lf()||X_()}get(){return YC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function XC(t,e){rc(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class uv{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Us("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Us("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Us("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const JC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ZC=new Lo(3e4,6e4);function eS(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Bf(t,e,n,i,r={}){return hv(t,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=Ff(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),uv.fetch()(fv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function hv(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},JC),e);try{const r=new tS(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw pa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw pa(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw pa(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw pa(t,"user-disabled",o);const u=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw qC(t,u,l);pm(t,u)}}catch(r){if(r instanceof Jn)throw r;pm(t,"network-request-failed",{message:String(r)})}}function fv(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?XC(t.config,r):`${t.config.apiScheme}://${r}`}class tS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Vf(this.auth,"network-request-failed")),ZC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function pa(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=Vf(t,e,i);return r.customData._tokenResponse=n,r}/**
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
 */async function nS(t,e){return Bf(t,"POST","/v1/accounts:delete",e)}async function iS(t,e){return Bf(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Vs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function rS(t,e=!1){const n=Lt(t),i=await n.getIdToken(e),r=dv(i);Ee(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Vs(uu(r.auth_time)),issuedAtTime:Vs(uu(r.iat)),expirationTime:Vs(uu(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function uu(t){return Number(t)*1e3}function dv(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return ja("JWT malformed, contained fewer than 3 sections"),null;try{const r=ec(n);return r?JSON.parse(r):(ja("Failed to decode base64 JWT payload"),null)}catch(r){return ja("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function sS(t){const e=dv(t);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ch(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Jn&&oS(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function oS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class aS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class pv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vs(this.lastLoginAt),this.creationTime=Vs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function sc(t){var e;const n=t.auth,i=await t.getIdToken(),r=await ch(t,iS(n,{idToken:i}));Ee(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?uS(s.providerUserInfo):[],a=lS(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new pv(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function cS(t){const e=Lt(t);await sc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lS(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function uS(t){return t.map(e=>{var{providerId:n}=e,i=av(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function hS(t,e){const n=await hv(t,{},async()=>{const i=Ff({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=fv(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",uv.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class co{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Ee(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await hS(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new co;return i&&(Ee(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(Ee(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(Ee(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new co,this.toJSON())}_performRefresh(){return Us("not implemented")}}/**
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
 */function ii(t,e){Ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class xr{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=av(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new aS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new pv(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ch(this,this.stsTokenManager.getToken(this.auth,e));return Ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return rS(this,e)}reload(){return cS(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new xr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await sc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ch(this,nS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,a,c,l,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,d=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,_=(l=n.createdAt)!==null&&l!==void 0?l:void 0,v=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:E,emailVerified:I,isAnonymous:F,providerData:Q,stsTokenManager:se}=n;Ee(E&&se,e,"internal-error");const _e=co.fromJSON(this.name,se);Ee(typeof E=="string",e,"internal-error"),ii(h,e.name),ii(f,e.name),Ee(typeof I=="boolean",e,"internal-error"),Ee(typeof F=="boolean",e,"internal-error"),ii(d,e.name),ii(m,e.name),ii(y,e.name),ii(b,e.name),ii(_,e.name),ii(v,e.name);const ze=new xr({uid:E,auth:e,email:f,emailVerified:I,displayName:h,isAnonymous:F,photoURL:m,phoneNumber:d,tenantId:y,stsTokenManager:_e,createdAt:_,lastLoginAt:v});return Q&&Array.isArray(Q)&&(ze.providerData=Q.map(dt=>Object.assign({},dt))),b&&(ze._redirectEventId=b),ze}static async _fromIdTokenResponse(e,n,i=!1){const r=new co;r.updateFromServerResponse(n);const s=new xr({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await sc(s),s}}/**
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
 */const gm=new Map;function Fi(t){rc(t instanceof Function,"Expected a class definition");let e=gm.get(t);return e?(rc(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,gm.set(t,e),e)}/**
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
 */class mv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}mv.type="NONE";const ym=mv;/**
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
 */function hu(t,e,n){return`firebase:${t}:${e}:${n}`}class Or{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=hu(this.userKey,r.apiKey,s),this.fullPersistenceKey=hu("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Or(Fi(ym),e,i);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=r[0]||Fi(ym);const o=hu(i,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=xr._fromJSON(e,u);l!==s&&(a=h),s=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Or(s,e,i):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Or(s,e,i))}}/**
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
 */function _m(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(mS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yS(e))return"Blackberry";if(_S(e))return"Webos";if(dS(e))return"Safari";if((e.includes("chrome/")||pS(e))&&!e.includes("edge/"))return"Chrome";if(gS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function fS(t=Sn()){return/firefox\//i.test(t)}function dS(t=Sn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function pS(t=Sn()){return/crios\//i.test(t)}function mS(t=Sn()){return/iemobile/i.test(t)}function gS(t=Sn()){return/android/i.test(t)}function yS(t=Sn()){return/blackberry/i.test(t)}function _S(t=Sn()){return/webos/i.test(t)}/**
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
 */function gv(t,e=[]){let n;switch(t){case"Browser":n=_m(Sn());break;case"Worker":n=`${_m(Sn())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ls}/${i}`}async function yv(t,e){return Bf(t,"GET","/v2/recaptchaConfig",eS(t,e))}function vm(t){return t!==void 0&&t.enterprise!==void 0}class _v{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function vS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function bS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=Vf("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",vS().appendChild(i)})}const ES="https://www.google.com/recaptcha/enterprise.js?render=",wS="recaptcha-enterprise";class TS{constructor(e){this.type=wS,this.auth=vv(e)}async verify(e="verify",n=!1){async function i(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{yv(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new _v(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(s,o,a){const c=window.grecaptcha;vm(c)?c.enterprise.ready(()=>{try{c.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(l=>{a(l)})}catch(l){a(l)}}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{i(this.auth).then(a=>{if(!n&&vm(window.grecaptcha))r(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}bS(ES+a).then(()=>{r(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}/**
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
 */class IS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */class CS{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bm(this),this.idTokenSubscription=new bm(this),this.beforeStateQueue=new IS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Fi(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await Or.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await sc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=QC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Lt(e):null;return n&&Ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Fi(e))})}async initializeRecaptchaConfig(){const e=await yv(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new _v(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new TS(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new cs("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Fi(e)||this._popupRedirectResolver;Ee(n,this,"argument-error"),this.redirectPersistenceManager=await Or.create(this,[Fi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Ee(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,i,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&WC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function vv(t){return Lt(t)}class bm{constructor(e){this.auth=e,this.observer=null,this.addObserver=PI(n=>this.observer=n)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function SS(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Fi);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}new Lo(3e4,6e4);/**
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
 */new Lo(2e3,1e4);/**
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
 */new Lo(3e4,6e4);/**
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
 */new Lo(5e3,15e3);var Em="@firebase/auth",wm="0.23.0";/**
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
 */class AS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function kS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function RS(t){An(new fn("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;Ee(o&&!o.includes(":"),"invalid-api-key",{appName:i.name}),Ee(!(a!=null&&a.includes(":")),"argument-error",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gv(t)},l=new CS(i,r,s,c);return SS(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),An(new fn("auth-internal",e=>{const n=vv(e.getProvider("auth").getImmediate());return(i=>new AS(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),zt(Em,wm,kS(t)),zt(Em,wm,"esm2017")}/**
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
 */const NS=5*60;II("authIdTokenMaxAge");RS("Browser");/**
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
 */const xS=new Map,OS={activated:!1,tokenObservers:[]};function kn(t){return xS.get(t)||Object.assign({},OS)}const Tm={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class DS{constructor(e,n,i,r,s){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=r,this.upperBound=s,this.pending=null,this.nextErrorWaitInterval=r,r>s)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new so,await PS(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new so,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function PS(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const MS={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},oc=new cs("appCheck","AppCheck",MS);function LS(t){if(!kn(t).activated)throw oc.create("use-before-activation",{appName:t.name})}/**
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
 */const FS="firebase-app-check-database",US=1,lh="firebase-app-check-store";let ma=null;function VS(){return ma||(ma=new Promise((t,e)=>{try{const n=indexedDB.open(FS,US);n.onsuccess=i=>{t(i.target.result)},n.onerror=i=>{var r;e(oc.create("storage-open",{originalErrorMessage:(r=i.target.error)===null||r===void 0?void 0:r.message}))},n.onupgradeneeded=i=>{const r=i.target.result;switch(i.oldVersion){case 0:r.createObjectStore(lh,{keyPath:"compositeKey"})}}}catch(n){e(oc.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),ma)}function $S(t,e){return BS(jS(t),e)}async function BS(t,e){const i=(await VS()).transaction(lh,"readwrite"),s=i.objectStore(lh).put({compositeKey:t,value:e});return new Promise((o,a)=>{s.onsuccess=c=>{o()},i.onerror=c=>{var l;a(oc.create("storage-set",{originalErrorMessage:(l=c.target.error)===null||l===void 0?void 0:l.message}))}})}function jS(t){return`${t.options.appId}-${t.name}`}/**
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
 */const uh=new Mo("@firebase/app-check");function Im(t,e){return Z_()?$S(t,e).catch(n=>{uh.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const zS={error:"UNKNOWN_ERROR"};function HS(t){return rl.encodeString(JSON.stringify(t),!1)}async function hh(t,e=!1){const n=t.app;LS(n);const i=kn(n);let r=i.token,s;if(r&&!Ns(r)&&(i.token=void 0,r=void 0),!r){const c=await i.cachedTokenPromise;c&&(Ns(c)?r=c:await Im(n,void 0))}if(!e&&r&&Ns(r))return{token:r.token};let o=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),r=await kn(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?uh.warn(c.message):uh.error(c),s=c}let a;return r?s?Ns(r)?a={token:r.token,internalError:s}:a=Sm(s):(a={token:r.token},i.token=r,await Im(n,r)):a=Sm(s),o&&qS(n,a),a}function KS(t,e,n,i){const{app:r}=t,s=kn(r),o={next:n,error:i,type:e};if(s.tokenObservers=[...s.tokenObservers,o],s.token&&Ns(s.token)){const a=s.token;Promise.resolve().then(()=>{n({token:a.token}),Cm(t)}).catch(()=>{})}s.cachedTokenPromise.then(()=>Cm(t))}function bv(t,e){const n=kn(t),i=n.tokenObservers.filter(r=>r.next!==e);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function Cm(t){const{app:e}=t,n=kn(e);let i=n.tokenRefresher;i||(i=WS(t),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function WS(t){const{app:e}=t;return new DS(async()=>{const n=kn(e);let i;if(n.token?i=await hh(t,!0):i=await hh(t),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=kn(e);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const r=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,r),Math.max(0,i-Date.now())}else return 0},Tm.RETRIAL_MIN_WAIT,Tm.RETRIAL_MAX_WAIT)}function qS(t,e){const n=kn(t).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function Ns(t){return t.expireTimeMillis-Date.now()>0}function Sm(t){return{token:HS(zS),error:t}}/**
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
 */class GS{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=kn(this.app);for(const n of e)bv(this.app,n.next);return Promise.resolve()}}function YS(t,e){return new GS(t,e)}function QS(t){return{getToken:e=>hh(t,e),addTokenListener:e=>KS(t,"INTERNAL",e),removeTokenListener:e=>bv(t.app,e)}}const XS="@firebase/app-check",JS="0.6.5",ZS="app-check",Am="app-check-internal";function eA(){An(new fn(ZS,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return YS(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Am).initialize()})),An(new fn(Am,t=>{const e=t.getProvider("app-check").getImmediate();return QS(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),zt(XS,JS)}eA();var tA="firebase",nA="9.20.0";/**
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
 */zt(tA,nA,"app");const Ev=Symbol("firebaseApp");function jf(t){return el()&&jt(Ev,null)||rv(t)}const bn=()=>{};function zf(t,e){return e.split(".").reduce((n,i)=>n&&n[i],t)}function iA(t,e,n){const i=(""+e).split("."),r=i.pop(),s=i.reduce((o,a)=>o&&o[a],t);if(s!=null)return Array.isArray(s)?s.splice(Number(r),1,n):s[r]=n}function sr(t){return!!t&&typeof t=="object"}const rA=Object.prototype;function sA(t){return sr(t)&&Object.getPrototypeOf(t)===rA}function Hf(t){return sr(t)&&t.type==="document"}function wv(t){return sr(t)&&t.type==="collection"}function oA(t){return Hf(t)||wv(t)}function aA(t){return sr(t)&&t.type==="query"}function cA(t){return sr(t)&&"ref"in t}function lA(t){return sr(t)&&typeof t.bucket=="string"}function uA(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}function hA(){return!!(el()&&jt(W_,null))}const km="@firebase/database",Rm="0.14.4";/**
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
 */let Tv="";function fA(t){Tv=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),lt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:oo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Zn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new dA(e)}}catch{}return new pA},Ui=Iv("localStorage"),fh=Iv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=new Mo("@firebase/database"),mA=function(){let t=1;return function(){return t++}}(),Cv=function(t){const e=UI(t),n=new DI;n.update(e);const i=n.digest();return rl.encodeByteArray(i)},Fo=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Fo.apply(null,i):typeof i=="object"?e+=lt(i):e+=i,e+=" "}return e};let Wi=null,Nm=!0;const gA=function(t,e){P(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Dr.logLevel=ge.VERBOSE,Wi=Dr.log.bind(Dr),e&&fh.set("logging_enabled",!0)):typeof t=="function"?Wi=t:(Wi=null,fh.remove("logging_enabled"))},gt=function(...t){if(Nm===!0&&(Nm=!1,Wi===null&&fh.get("logging_enabled")===!0&&gA(!0)),Wi){const e=Fo.apply(null,t);Wi(e)}},Uo=function(t){return function(...e){gt(t,...e)}},dh=function(...t){const e="FIREBASE INTERNAL ERROR: "+Fo(...t);Dr.error(e)},Xi=function(...t){const e=`FIREBASE FATAL ERROR: ${Fo(...t)}`;throw Dr.error(e),new Error(e)},Ht=function(...t){const e="FIREBASE WARNING: "+Fo(...t);Dr.warn(e)},yA=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ht("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Sv=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},_A=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},zr="[MIN_NAME]",Ji="[MAX_NAME]",us=function(t,e){if(t===e)return 0;if(t===zr||e===Ji)return-1;if(e===zr||t===Ji)return 1;{const n=xm(t),i=xm(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},vA=function(t,e){return t===e?0:t<e?-1:1},Ts=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+lt(e))},Kf=function(t){if(typeof t!="object"||t===null)return lt(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=lt(e[i]),n+=":",n+=Kf(t[e[i]]);return n+="}",n},Av=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let r=0;r<n;r+=e)r+e>n?i.push(t.substring(r,n)):i.push(t.substring(r,r+e));return i};function Qt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const kv=function(t){P(!Sv(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let r,s,o,a,c;t===0?(s=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),s=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-i-n))));const l=[];for(c=n;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(s%2?1:0),s=Math.floor(s/2);l.push(r?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let f=parseInt(u.substr(c,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},bA=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},EA=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},wA=new RegExp("^-?(0*)\\d{1,10}$"),TA=-2147483648,IA=2147483647,xm=function(t){if(wA.test(t)){const e=Number(t);if(e>=TA&&e<=IA)return e}return null},Vo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ht("Exception was thrown by user callback.",n),e},Math.floor(0))}},CA=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},$s=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class SA{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Ht(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(gt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ht(e)}}class ph{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ph.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf="5",Rv="v",Nv="s",xv="r",Ov="f",Dv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Pv="ls",Mv="p",mh="ac",Lv="websocket",Fv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e,n,i,r,s=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ui.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ui.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function RA(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Uv(t,e,n){P(typeof e=="string","typeof type must == string"),P(typeof n=="object","typeof params must == object");let i;if(e===Lv)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Fv)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);RA(t)&&(n.ns=t.namespace);const r=[];return Qt(n,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(){this.counters_={}}incrementCounter(e,n=1){Zn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return mI(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu={},du={};function qf(t){const e=t.toString();return fu[e]||(fu[e]=new NA),fu[e]}function xA(t,e){const n=t.toString();return du[n]||(du[n]=e()),du[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&Vo(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om="start",DA="close",PA="pLPCommand",MA="pRTLPCB",Vv="id",$v="pw",Bv="ser",LA="cb",FA="seg",UA="ts",VA="d",$A="dframe",jv=1870,zv=30,BA=jv-zv,jA=25e3,zA=3e4;class Er{constructor(e,n,i,r,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Uo(e),this.stats_=qf(n),this.urlFn=c=>(this.appCheckToken&&(c[mh]=this.appCheckToken),Uv(n,Fv,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new OA(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(zA)),_A(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Gf((...s)=>{const[o,a,c,l,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Om)this.id=a,this.password=c;else if(o===DA)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Om]="t",i[Bv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[LA]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Rv]=Wf,this.transportSessionId&&(i[Nv]=this.transportSessionId),this.lastSessionId&&(i[Pv]=this.lastSessionId),this.applicationId&&(i[Mv]=this.applicationId),this.appCheckToken&&(i[mh]=this.appCheckToken),typeof location<"u"&&location.hostname&&Dv.test(location.hostname)&&(i[xv]=Ov);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Er.forceAllow_=!0}static forceDisallow(){Er.forceDisallow_=!0}static isAvailable(){return Er.forceAllow_?!0:!Er.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!bA()&&!EA()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=lt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Y_(n),r=Av(i,BA);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[$A]="t",i[Vv]=e,i[$v]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=lt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Gf{constructor(e,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=mA(),window[PA+this.uniqueCallbackIdentifier]=e,window[MA+this.uniqueCallbackIdentifier]=n,this.myIFrame=Gf.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){gt("frame writing exception"),a.stack&&gt(a.stack),gt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||gt("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Vv]=this.myID,e[$v]=this.myPW,e[Bv]=this.currentSerial;let n=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+zv+i.length<=jv;){const o=this.pendingSegs.shift();i=i+"&"+FA+r+"="+o.seg+"&"+UA+r+"="+o.ts+"&"+VA+r+"="+o.d,r++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(i,Math.floor(jA)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{gt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HA=16384,KA=45e3;let ac=null;typeof MozWebSocket<"u"?ac=MozWebSocket:typeof WebSocket<"u"&&(ac=WebSocket);class tn{constructor(e,n,i,r,s,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Uo(this.connId),this.stats_=qf(n),this.connURL=tn.connectionURL_(n,o,a,r,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,r,s){const o={};return o[Rv]=Wf,typeof location<"u"&&location.hostname&&Dv.test(location.hostname)&&(o[xv]=Ov),n&&(o[Nv]=n),i&&(o[Pv]=i),r&&(o[mh]=r),s&&(o[Mv]=s),Uv(e,Lv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ui.set("previous_websocket_failure",!0);try{let i;J_(),this.mySock=new ac(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){tn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&ac!==null&&!tn.forceDisallow_}static previouslyFailed(){return Ui.isInMemoryStorage||Ui.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ui.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=oo(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(P(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=lt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Av(n,HA);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(KA))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}tn.responsesRequiredToBeHealthy=2;tn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Er,tn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=tn&&tn.isAvailable();let i=n&&!tn.previouslyFailed();if(e.webSocketOnly&&(n||Ht("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[tn];else{const r=this.transports_=[];for(const s of lo.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);lo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}lo.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA=6e4,qA=5e3,GA=10*1024,YA=100*1024,pu="t",Dm="d",QA="s",Pm="r",XA="e",Mm="o",Lm="a",Fm="n",Um="p",JA="h";class ZA{constructor(e,n,i,r,s,o,a,c,l,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Uo("c:"+this.id+":"),this.transportManager_=new lo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=$s(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>YA?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>GA?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(pu in e){const n=e[pu];n===Lm?this.upgradeIfSecondaryHealthy_():n===Pm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Mm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ts("t",e),i=Ts("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Um,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Lm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Fm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ts("t",e),i=Ts("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ts(pu,e);if(Dm in e){const i=e[Dm];if(n===JA){const r=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===Fm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===QA?this.onConnectionShutdown_(i):n===Pm?this.onReset_(i):n===XA?dh("Server Error: "+i):n===Mm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):dh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Wf!==i&&Ht("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),$s(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(WA))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):$s(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(qA))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Um,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ui.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Kv{constructor(e){this.allowedEvents_=e,this.listeners_={},P(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const r=this.getInitialEvent(e);r&&n.apply(i,r)}off(e,n,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===n&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(e){P(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc extends Kv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Lf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new cc}getInitialEvent(e){return P(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm=32,$m=768;class Me{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Se(){return new Me("")}function fe(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function gi(t){return t.pieces_.length-t.pieceNum_}function xe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Me(t.pieces_,e)}function Wv(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ek(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function qv(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Gv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Me(e,0)}function st(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof Me)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new Me(n,0)}function ue(t){return t.pieceNum_>=t.pieces_.length}function Gt(t,e){const n=fe(t),i=fe(e);if(n===null)return e;if(n===i)return Gt(xe(t),xe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Yv(t,e){if(gi(t)!==gi(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function sn(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(gi(t)>gi(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class tk{constructor(e,n){this.errorPrefix_=n,this.parts_=qv(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=sl(this.parts_[i]);Qv(this)}}function nk(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=sl(e),Qv(t)}function ik(t){const e=t.parts_.pop();t.byteLength_-=sl(e),t.parts_.length>0&&(t.byteLength_-=1)}function Qv(t){if(t.byteLength_>$m)throw new Error(t.errorPrefix_+"has a key path longer than "+$m+" bytes ("+t.byteLength_+").");if(t.parts_.length>Vm)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Vm+") or object contains a cycle "+Oi(t))}function Oi(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf extends Kv{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Yf}getInitialEvent(e){return P(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=1e3,rk=60*5*1e3,Bm=30*1e3,sk=1.3,ok=3e4,ak="server_kill",jm=3;class Vn extends Hv{constructor(e,n,i,r,s,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Vn.nextPersistentConnectionId_++,this.log_=Uo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Is,this.maxReconnectDelay_=rk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!J_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Yf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&cc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const r=++this.requestNumber_,s={r,a:e,b:n};this.log_(lt(s)),P(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const n=new so,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,i,r){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),P(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:i};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const c=a.d,l=a.s;Vn.warnOnListenWarnings_(c,n),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Zn(e,"w")){const i=jr(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Ht(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||OI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Bm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=xI(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,n)}sendUnlisten_(e,n,i,r){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,r){const s={p:n,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,i,r){this.putInternal("p",e,n,i,r)}merge(e,n,i,r){this.putInternal("m",e,n,i,r)}putInternal(e,n,i,r,s){this.initConnection_();const o={p:n,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+lt(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):dh("Unrecognized action received from server: "+lt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){P(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Is,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Is,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>ok&&(this.reconnectDelay_=Is),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*sk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Vn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,i())},l=function(h){P(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?gt("getToken() completed but was canceled"):(gt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new ZA(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,d=>{Ht(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(ak)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ht(h),c())}}}interrupt(e){gt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){gt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],sm(this.interruptReasons_)&&(this.reconnectDelay_=Is,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(s=>Kf(s)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const i=new Me(e).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(n),s.delete(n),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,n){gt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=jm&&(this.reconnectDelay_=Bm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){gt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=jm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Tv.replace(/\./g,"-")]=1,Lf()?e["framework.cordova"]=1:X_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=cc.getInstance().currentlyOnline();return sm(this.interruptReasons_)&&e}}Vn.nextPersistentConnectionId_=0;Vn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new de(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new de(zr,e),r=new de(zr,n);return this.compare(i,r)!==0}minPost(){return de.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ga;class Xv extends ol{static get __EMPTY_NODE(){return ga}static set __EMPTY_NODE(e){ga=e}compare(e,n){return us(e.name,n.name)}isDefinedOn(e){throw as("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return de.MIN}maxPost(){return new de(Ji,ga)}makePost(e,n){return P(typeof e=="string","KeyIndex indexValue must always be a string."),new de(e,ga)}toString(){return".key"}}const Pr=new Xv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,n,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class rt{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i??rt.RED,this.left=r??Ot.EMPTY_NODE,this.right=s??Ot.EMPTY_NODE}copy(e,n,i,r,s){return new rt(e??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ot.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,r;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return Ot.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}rt.RED=!0;rt.BLACK=!1;class ck{copy(e,n,i,r,s){return this}insert(e,n,i){return new rt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ot{constructor(e,n=Ot.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ot(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,rt.BLACK,null,null))}remove(e){return new Ot(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,rt.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,r=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ya(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ya(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ya(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ya(this.root_,null,this.comparator_,!0,e)}}Ot.EMPTY_NODE=new ck;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lk(t,e){return us(t.name,e.name)}function Qf(t,e){return us(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gh;function uk(t){gh=t}const Jv=function(t){return typeof t=="number"?"number:"+kv(t):"string:"+t},Zv=function(t){if(t.isLeafNode()){const e=t.val();P(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Zn(e,".sv"),"Priority must be a string or number.")}else P(t===gh||t.isEmpty(),"priority of unexpected type.");P(t===gh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zm;class nt{constructor(e,n=nt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,P(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Zv(this.priorityNode_)}static set __childrenNodeConstructor(e){zm=e}static get __childrenNodeConstructor(){return zm}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new nt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:nt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ue(e)?this:fe(e)===".priority"?this.priorityNode_:nt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:nt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=fe(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(P(i!==".priority"||gi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,nt.__childrenNodeConstructor.EMPTY_NODE.updateChild(xe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Jv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=kv(this.value_):e+=this.value_,this.lazyHash_=Cv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===nt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof nt.__childrenNodeConstructor?-1:(P(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,r=nt.VALUE_TYPE_ORDER.indexOf(n),s=nt.VALUE_TYPE_ORDER.indexOf(i);return P(r>=0,"Unknown leaf type: "+n),P(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}nt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let e0,t0;function hk(t){e0=t}function fk(t){t0=t}class dk extends ol{compare(e,n){const i=e.node.getPriority(),r=n.node.getPriority(),s=i.compareTo(r);return s===0?us(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return de.MIN}maxPost(){return new de(Ji,new nt("[PRIORITY-POST]",t0))}makePost(e,n){const i=e0(e);return new de(n,new nt("[PRIORITY-POST]",i))}toString(){return".priority"}}const Et=new dk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pk=Math.log(2);class mk{constructor(e){const n=s=>parseInt(Math.log(s)/pk,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const lc=function(t,e,n,i){t.sort(e);const r=function(c,l){const u=l-c;let h,f;if(u===0)return null;if(u===1)return h=t[c],f=n?n(h):h,new rt(f,h.node,rt.BLACK,null,null);{const d=parseInt(u/2,10)+c,m=r(c,d),y=r(d+1,l);return h=t[d],f=n?n(h):h,new rt(f,h.node,rt.BLACK,m,y)}},s=function(c){let l=null,u=null,h=t.length;const f=function(m,y){const b=h-m,_=h;h-=m;const v=r(b+1,_),E=t[b],I=n?n(E):E;d(new rt(I,E.node,y,null,v))},d=function(m){l?(l.left=m,l=m):(u=m,l=m)};for(let m=0;m<c.count;++m){const y=c.nextBitIsOne(),b=Math.pow(2,c.count-(m+1));y?f(b,rt.BLACK):(f(b,rt.BLACK),f(b,rt.RED))}return u},o=new mk(t.length),a=s(o);return new Ot(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mu;const mr={};class Fn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return P(mr&&Et,"ChildrenNode.ts has not been loaded"),mu=mu||new Fn({".priority":mr},{".priority":Et}),mu}get(e){const n=jr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ot?n:null}hasIndex(e){return Zn(this.indexSet_,e.toString())}addIndex(e,n){P(e!==Pr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=n.getIterator(de.Wrap);let o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();let a;r?a=lc(i,e.getCompare()):a=mr;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new Fn(u,l)}addToIndexes(e,n){const i=tc(this.indexes_,(r,s)=>{const o=jr(this.indexSet_,s);if(P(o,"Missing index implementation for "+s),r===mr)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(de.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),lc(a,o.getCompare())}else return mr;else{const a=n.get(e.name);let c=r;return a&&(c=c.remove(new de(e.name,a))),c.insert(e,e.node)}});return new Fn(i,this.indexSet_)}removeFromIndexes(e,n){const i=tc(this.indexes_,r=>{if(r===mr)return r;{const s=n.get(e.name);return s?r.remove(new de(e.name,s)):r}});return new Fn(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cs;class we{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Zv(this.priorityNode_),this.children_.isEmpty()&&P(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Cs||(Cs=new we(new Ot(Qf),null,Fn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Cs}updatePriority(e){return this.children_.isEmpty()?this:new we(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Cs:n}}getChild(e){const n=fe(e);return n===null?this:this.getImmediateChild(n).getChild(xe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(P(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new de(e,n);let r,s;n.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?Cs:this.priorityNode_;return new we(r,o,s)}}updateChild(e,n){const i=fe(e);if(i===null)return n;{P(fe(e)!==".priority"||gi(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(xe(e),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,r=0,s=!0;if(this.forEachChild(Et,(o,a)=>{n[o]=a.val(e),i++,s&&we.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Jv(this.getPriority().val())+":"),this.forEachChild(Et,(n,i)=>{const r=i.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":Cv(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new de(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new de(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new de(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,de.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,de.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===$o?-1:0}withIndex(e){if(e===Pr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new we(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Pr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(Et),r=n.getIterator(Et);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Pr?null:this.indexMap_.get(e.toString())}}we.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class gk extends we{constructor(){super(new Ot(Qf),we.EMPTY_NODE,Fn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return we.EMPTY_NODE}isEmpty(){return!1}}const $o=new gk;Object.defineProperties(de,{MIN:{value:new de(zr,we.EMPTY_NODE)},MAX:{value:new de(Ji,$o)}});Xv.__EMPTY_NODE=we.EMPTY_NODE;nt.__childrenNodeConstructor=we;uk($o);fk($o);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yk=!0;function yt(t,e=null){if(t===null)return we.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),P(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new nt(n,yt(e))}if(!(t instanceof Array)&&yk){const n=[];let i=!1;if(Qt(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=yt(a);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),n.push(new de(o,c)))}}),n.length===0)return we.EMPTY_NODE;const s=lc(n,lk,o=>o.name,Qf);if(i){const o=lc(n,Et.getCompare());return new we(s,yt(e),new Fn({".priority":o},{".priority":Et}))}else return new we(s,yt(e),Fn.Default)}else{let n=we.EMPTY_NODE;return Qt(t,(i,r)=>{if(Zn(t,i)&&i.substring(0,1)!=="."){const s=yt(r);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(i,s))}}),n.updatePriority(yt(e))}}hk(yt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k extends ol{constructor(e){super(),this.indexPath_=e,P(!ue(e)&&fe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),r=this.extractChild(n.node),s=i.compareTo(r);return s===0?us(e.name,n.name):s}makePost(e,n){const i=yt(e),r=we.EMPTY_NODE.updateChild(this.indexPath_,i);return new de(n,r)}maxPost(){const e=we.EMPTY_NODE.updateChild(this.indexPath_,$o);return new de(Ji,e)}toString(){return qv(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk extends ol{compare(e,n){const i=e.node.compareTo(n.node);return i===0?us(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return de.MIN}maxPost(){return de.MAX}makePost(e,n){const i=yt(e);return new de(n,i)}toString(){return".value"}}const bk=new vk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ek(t){return{type:"value",snapshotNode:t}}function wk(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Tk(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Hm(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Ik(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Et}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return P(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return P(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:zr}hasEnd(){return this.endSet_}getIndexEndValue(){return P(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return P(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ji}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return P(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Et}copy(){const e=new Xf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Km(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Et?n="$priority":t.index_===bk?n="$value":t.index_===Pr?n="$key":(P(t.index_ instanceof _k,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=lt(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=lt(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+lt(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=lt(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+lt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Wm(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Et&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc extends Hv{constructor(e,n,i,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=Uo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(P(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=uc.getListenId_(e,i),a={};this.listens_[o]=a;const c=Km(e._queryParams);this.restRequest_(s+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(s,h,!1,i),jr(this.listens_,o)===a){let f;l?l===401?f="permission_denied":f="rest_error:"+l:f="ok",r(f,null)}})}unlisten(e,n){const i=uc.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Km(e._queryParams),i=e._path.toString(),r=new so;return this.restRequest_(i+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(i,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(n.auth=r.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ff(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=oo(a.responseText)}catch{Ht("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,c)}else a.status!==401&&a.status!==404&&Ht("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(){this.rootNode_=we.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(){return{value:null,children:new Map}}function n0(t,e,n){if(ue(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=fe(e);t.children.has(i)||t.children.set(i,hc());const r=t.children.get(i);e=xe(e),n0(r,e,n)}}function yh(t,e,n){t.value!==null?n(e,t.value):Sk(t,(i,r)=>{const s=new Me(e.toString()+"/"+i);yh(r,s,n)})}function Sk(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Qt(this.last_,(i,r)=>{n[i]=n[i]-r}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm=10*1e3,kk=30*1e3,Rk=5*60*1e3;class Nk{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Ak(e);const i=qm+(kk-qm)*Math.random();$s(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;Qt(e,(r,s)=>{s>0&&Zn(this.statsToReport_,r)&&(n[r]=s,i=!0)}),i&&this.server_.reportStats(n),$s(this.reportStats_.bind(this),Math.floor(Math.random()*2*Rk))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var En;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(En||(En={}));function i0(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function r0(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function s0(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=En.ACK_USER_WRITE,this.source=i0()}operationForChild(e){if(ue(this.path)){if(this.affectedTree.value!=null)return P(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Me(e));return new fc(Se(),n,this.revert)}}else return P(fe(this.path)===e,"operationForChild called for unrelated child."),new fc(xe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=En.OVERWRITE}operationForChild(e){return ue(this.path)?new Zi(this.source,Se(),this.snap.getImmediateChild(e)):new Zi(this.source,xe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=En.MERGE}operationForChild(e){if(ue(this.path)){const n=this.children.subtree(new Me(e));return n.isEmpty()?null:n.value?new Zi(this.source,Se(),n.value):new uo(this.source,Se(),n)}else return P(fe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new uo(this.source,xe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ue(e))return this.isFullyInitialized()&&!this.filtered_;const n=fe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function xk(t,e,n,i){const r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(Ik(o.childName,o.snapshotNode))}),Ss(t,r,"child_removed",e,i,n),Ss(t,r,"child_added",e,i,n),Ss(t,r,"child_moved",s,i,n),Ss(t,r,"child_changed",e,i,n),Ss(t,r,"value",e,i,n),r}function Ss(t,e,n,i,r,s){const o=i.filter(a=>a.type===n);o.sort((a,c)=>Dk(t,a,c)),o.forEach(a=>{const c=Ok(t,a,s);r.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,t.query_))})})}function Ok(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Dk(t,e,n){if(e.childName==null||n.childName==null)throw as("Should only compare child_ events.");const i=new de(e.childName,e.snapshotNode),r=new de(n.childName,n.snapshotNode);return t.index_.compare(i,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o0(t,e){return{eventCache:t,serverCache:e}}function Bs(t,e,n,i){return o0(new Jf(e,n,i),t.serverCache)}function a0(t,e,n,i){return o0(t.eventCache,new Jf(e,n,i))}function _h(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function er(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gu;const Pk=()=>(gu||(gu=new Ot(vA)),gu);class Re{constructor(e,n=Pk()){this.value=e,this.children=n}static fromObject(e){let n=new Re(null);return Qt(e,(i,r)=>{n=n.set(new Me(i),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Se(),value:this.value};if(ue(e))return null;{const i=fe(e),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(xe(e),n);return s!=null?{path:st(new Me(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ue(e))return this;{const n=fe(e),i=this.children.get(n);return i!==null?i.subtree(xe(e)):new Re(null)}}set(e,n){if(ue(e))return new Re(n,this.children);{const i=fe(e),s=(this.children.get(i)||new Re(null)).set(xe(e),n),o=this.children.insert(i,s);return new Re(this.value,o)}}remove(e){if(ue(e))return this.children.isEmpty()?new Re(null):new Re(null,this.children);{const n=fe(e),i=this.children.get(n);if(i){const r=i.remove(xe(e));let s;return r.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,r),this.value===null&&s.isEmpty()?new Re(null):new Re(this.value,s)}else return this}}get(e){if(ue(e))return this.value;{const n=fe(e),i=this.children.get(n);return i?i.get(xe(e)):null}}setTree(e,n){if(ue(e))return n;{const i=fe(e),s=(this.children.get(i)||new Re(null)).setTree(xe(e),n);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new Re(this.value,o)}}fold(e){return this.fold_(Se(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(st(e,r),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,Se(),n)}findOnPath_(e,n,i){const r=this.value?i(n,this.value):!1;if(r)return r;if(ue(e))return null;{const s=fe(e),o=this.children.get(s);return o?o.findOnPath_(xe(e),st(n,s),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Se(),n)}foreachOnPath_(e,n,i){if(ue(e))return this;{this.value&&i(n,this.value);const r=fe(e),s=this.children.get(r);return s?s.foreachOnPath_(xe(e),st(n,r),i):new Re(null)}}foreach(e){this.foreach_(Se(),e)}foreach_(e,n){this.children.inorderTraversal((i,r)=>{r.foreach_(st(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this.writeTree_=e}static empty(){return new hn(new Re(null))}}function js(t,e,n){if(ue(e))return new hn(new Re(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let s=i.value;const o=Gt(r,e);return s=s.updateChild(o,n),new hn(t.writeTree_.set(r,s))}else{const r=new Re(n),s=t.writeTree_.setTree(e,r);return new hn(s)}}}function Gm(t,e,n){let i=t;return Qt(n,(r,s)=>{i=js(i,st(e,r),s)}),i}function Ym(t,e){if(ue(e))return hn.empty();{const n=t.writeTree_.setTree(e,new Re(null));return new hn(n)}}function vh(t,e){return or(t,e)!=null}function or(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Gt(n.path,e)):null}function Qm(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Et,(i,r)=>{e.push(new de(i,r))}):t.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new de(i,r.value))}),e}function fi(t,e){if(ue(e))return t;{const n=or(t,e);return n!=null?new hn(new Re(n)):new hn(t.writeTree_.subtree(e))}}function bh(t){return t.writeTree_.isEmpty()}function Hr(t,e){return c0(Se(),t.writeTree_,e)}function c0(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(P(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):n=c0(st(t,r),s,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(st(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l0(t,e){return p0(e,t)}function Mk(t,e,n,i,r){P(i>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:r}),r&&(t.visibleWrites=js(t.visibleWrites,e,n)),t.lastWriteId=i}function Lk(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function Fk(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);P(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let r=i.visible,s=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Uk(a,i.path)?r=!1:sn(i.path,a.path)&&(s=!0)),o--}if(r){if(s)return Vk(t),!0;if(i.snap)t.visibleWrites=Ym(t.visibleWrites,i.path);else{const a=i.children;Qt(a,c=>{t.visibleWrites=Ym(t.visibleWrites,st(i.path,c))})}return!0}else return!1}function Uk(t,e){if(t.snap)return sn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&sn(st(t.path,n),e))return!0;return!1}function Vk(t){t.visibleWrites=u0(t.allWrites,$k,Se()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function $k(t){return t.visible}function u0(t,e,n){let i=hn.empty();for(let r=0;r<t.length;++r){const s=t[r];if(e(s)){const o=s.path;let a;if(s.snap)sn(n,o)?(a=Gt(n,o),i=js(i,a,s.snap)):sn(o,n)&&(a=Gt(o,n),i=js(i,Se(),s.snap.getChild(a)));else if(s.children){if(sn(n,o))a=Gt(n,o),i=Gm(i,a,s.children);else if(sn(o,n))if(a=Gt(o,n),ue(a))i=Gm(i,Se(),s.children);else{const c=jr(s.children,fe(a));if(c){const l=c.getChild(xe(a));i=js(i,Se(),l)}}}else throw as("WriteRecord should have .snap or .children")}}return i}function h0(t,e,n,i,r){if(!i&&!r){const s=or(t.visibleWrites,e);if(s!=null)return s;{const o=fi(t.visibleWrites,e);if(bh(o))return n;if(n==null&&!vh(o,Se()))return null;{const a=n||we.EMPTY_NODE;return Hr(o,a)}}}else{const s=fi(t.visibleWrites,e);if(!r&&bh(s))return n;if(!r&&n==null&&!vh(s,Se()))return null;{const o=function(l){return(l.visible||r)&&(!i||!~i.indexOf(l.writeId))&&(sn(l.path,e)||sn(e,l.path))},a=u0(t.allWrites,o,e),c=n||we.EMPTY_NODE;return Hr(a,c)}}}function Bk(t,e,n){let i=we.EMPTY_NODE;const r=or(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(Et,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(n){const s=fi(t.visibleWrites,e);return n.forEachChild(Et,(o,a)=>{const c=Hr(fi(s,new Me(o)),a);i=i.updateImmediateChild(o,c)}),Qm(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=fi(t.visibleWrites,e);return Qm(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function jk(t,e,n,i,r){P(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=st(e,n);if(vh(t.visibleWrites,s))return null;{const o=fi(t.visibleWrites,s);return bh(o)?r.getChild(n):Hr(o,r.getChild(n))}}function zk(t,e,n,i){const r=st(e,n),s=or(t.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(n)){const o=fi(t.visibleWrites,r);return Hr(o,i.getNode().getImmediateChild(n))}else return null}function Hk(t,e){return or(t.visibleWrites,e)}function Kk(t,e,n,i,r,s,o){let a;const c=fi(t.visibleWrites,e),l=or(c,Se());if(l!=null)a=l;else if(n!=null)a=Hr(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let d=f.getNext();for(;d&&u.length<r;)h(d,i)!==0&&u.push(d),d=f.getNext();return u}else return[]}function Wk(){return{visibleWrites:hn.empty(),allWrites:[],lastWriteId:-1}}function Eh(t,e,n,i){return h0(t.writeTree,t.treePath,e,n,i)}function f0(t,e){return Bk(t.writeTree,t.treePath,e)}function Xm(t,e,n,i){return jk(t.writeTree,t.treePath,e,n,i)}function dc(t,e){return Hk(t.writeTree,st(t.treePath,e))}function qk(t,e,n,i,r,s){return Kk(t.writeTree,t.treePath,e,n,i,r,s)}function Zf(t,e,n){return zk(t.writeTree,t.treePath,e,n)}function d0(t,e){return p0(st(t.treePath,e),t.writeTree)}function p0(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;P(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),P(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(i,Hm(i,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(i,Tk(i,r.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(i,wk(i,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(i,Hm(i,e.snapshotNode,r.oldSnap));else throw as("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const m0=new Yk;class ed{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Jf(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Zf(this.writes_,e,i)}}getChildAfterChild(e,n,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:er(this.viewCache_),s=qk(this.writes_,r,n,1,i,e);return s.length===0?null:s[0]}}function Qk(t,e){P(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),P(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Xk(t,e,n,i,r){const s=new Gk;let o,a;if(n.type===En.OVERWRITE){const l=n;l.source.fromUser?o=wh(t,e,l.path,l.snap,i,r,s):(P(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!ue(l.path),o=pc(t,e,l.path,l.snap,i,r,a,s))}else if(n.type===En.MERGE){const l=n;l.source.fromUser?o=Zk(t,e,l.path,l.children,i,r,s):(P(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=Th(t,e,l.path,l.children,i,r,a,s))}else if(n.type===En.ACK_USER_WRITE){const l=n;l.revert?o=nR(t,e,l.path,i,r,s):o=eR(t,e,l.path,l.affectedTree,i,r,s)}else if(n.type===En.LISTEN_COMPLETE)o=tR(t,e,n.path,i,s);else throw as("Unknown operation type: "+n.type);const c=s.getChanges();return Jk(e,o,c),{viewCache:o,changes:c}}function Jk(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=_h(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(Ek(_h(e)))}}function g0(t,e,n,i,r,s){const o=e.eventCache;if(dc(i,n)!=null)return e;{let a,c;if(ue(n))if(P(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=er(e),u=l instanceof we?l:we.EMPTY_NODE,h=f0(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const l=Eh(i,er(e));a=t.filter.updateFullNode(e.eventCache.getNode(),l,s)}else{const l=fe(n);if(l===".priority"){P(gi(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=Xm(i,n,u,c);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=xe(n);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const f=Xm(i,n,o.getNode(),c);f!=null?h=o.getNode().getImmediateChild(l).updateChild(u,f):h=o.getNode().getImmediateChild(l)}else h=Zf(i,l,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),l,h,u,r,s):a=o.getNode()}}return Bs(e,a,o.isFullyInitialized()||ue(n),t.filter.filtersNodes())}}function pc(t,e,n,i,r,s,o,a){const c=e.serverCache;let l;const u=o?t.filter:t.filter.getIndexedFilter();if(ue(n))l=u.updateFullNode(c.getNode(),i,null);else if(u.filtersNodes()&&!c.isFiltered()){const d=c.getNode().updateChild(n,i);l=u.updateFullNode(c.getNode(),d,null)}else{const d=fe(n);if(!c.isCompleteForPath(n)&&gi(n)>1)return e;const m=xe(n),b=c.getNode().getImmediateChild(d).updateChild(m,i);d===".priority"?l=u.updatePriority(c.getNode(),b):l=u.updateChild(c.getNode(),d,b,m,m0,null)}const h=a0(e,l,c.isFullyInitialized()||ue(n),u.filtersNodes()),f=new ed(r,h,s);return g0(t,h,n,r,f,a)}function wh(t,e,n,i,r,s,o){const a=e.eventCache;let c,l;const u=new ed(r,e,s);if(ue(n))l=t.filter.updateFullNode(e.eventCache.getNode(),i,o),c=Bs(e,l,!0,t.filter.filtersNodes());else{const h=fe(n);if(h===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),i),c=Bs(e,l,a.isFullyInitialized(),a.isFiltered());else{const f=xe(n),d=a.getNode().getImmediateChild(h);let m;if(ue(f))m=i;else{const y=u.getCompleteChild(h);y!=null?Wv(f)===".priority"&&y.getChild(Gv(f)).isEmpty()?m=y:m=y.updateChild(f,i):m=we.EMPTY_NODE}if(d.equals(m))c=e;else{const y=t.filter.updateChild(a.getNode(),h,m,f,u,o);c=Bs(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function Jm(t,e){return t.eventCache.isCompleteForChild(e)}function Zk(t,e,n,i,r,s,o){let a=e;return i.foreach((c,l)=>{const u=st(n,c);Jm(e,fe(u))&&(a=wh(t,a,u,l,r,s,o))}),i.foreach((c,l)=>{const u=st(n,c);Jm(e,fe(u))||(a=wh(t,a,u,l,r,s,o))}),a}function Zm(t,e,n){return n.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function Th(t,e,n,i,r,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;ue(n)?l=i:l=new Re(null).setTree(n,i);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const d=e.serverCache.getNode().getImmediateChild(h),m=Zm(t,d,f);c=pc(t,c,new Me(h),m,r,s,o,a)}}),l.children.inorderTraversal((h,f)=>{const d=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!d){const m=e.serverCache.getNode().getImmediateChild(h),y=Zm(t,m,f);c=pc(t,c,new Me(h),y,r,s,o,a)}}),c}function eR(t,e,n,i,r,s,o){if(dc(r,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(i.value!=null){if(ue(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return pc(t,e,n,c.getNode().getChild(n),r,s,a,o);if(ue(n)){let l=new Re(null);return c.getNode().forEachChild(Pr,(u,h)=>{l=l.set(new Me(u),h)}),Th(t,e,n,l,r,s,a,o)}else return e}else{let l=new Re(null);return i.foreach((u,h)=>{const f=st(n,u);c.isCompleteForPath(f)&&(l=l.set(u,c.getNode().getChild(f)))}),Th(t,e,n,l,r,s,a,o)}}function tR(t,e,n,i,r){const s=e.serverCache,o=a0(e,s.getNode(),s.isFullyInitialized()||ue(n),s.isFiltered());return g0(t,o,n,i,m0,r)}function nR(t,e,n,i,r,s){let o;if(dc(i,n)!=null)return e;{const a=new ed(i,e,r),c=e.eventCache.getNode();let l;if(ue(n)||fe(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Eh(i,er(e));else{const h=e.serverCache.getNode();P(h instanceof we,"serverChildren would be complete if leaf node"),u=f0(i,h)}u=u,l=t.filter.updateFullNode(c,u,s)}else{const u=fe(n);let h=Zf(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=t.filter.updateChild(c,u,h,xe(n),a,s):e.eventCache.getNode().hasChild(u)?l=t.filter.updateChild(c,u,we.EMPTY_NODE,xe(n),a,s):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Eh(i,er(e)),o.isLeafNode()&&(l=t.filter.updateFullNode(l,o,s)))}return o=e.serverCache.isFullyInitialized()||dc(i,Se())!=null,Bs(e,l,o,t.filter.filtersNodes())}}function iR(t,e){const n=er(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ue(e)&&!n.getImmediateChild(fe(e)).isEmpty())?n.getChild(e):null}function eg(t,e,n,i){e.type===En.MERGE&&e.source.queryId!==null&&(P(er(t.viewCache_),"We should always have a full cache before handling merges"),P(_h(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,s=Xk(t.processor_,r,e,n,i);return Qk(t.processor_,s.viewCache),P(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,rR(t,s.changes,s.viewCache.eventCache.getNode(),null)}function rR(t,e,n,i){const r=i?[i]:t.eventRegistrations_;return xk(t.eventGenerator_,e,n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tg;function sR(t){P(!tg,"__referenceConstructor has already been defined"),tg=t}function td(t,e,n,i){const r=e.source.queryId;if(r!==null){const s=t.views.get(r);return P(s!=null,"SyncTree gave us an op for an invalid query."),eg(s,e,n,i)}else{let s=[];for(const o of t.views.values())s=s.concat(eg(o,e,n,i));return s}}function nd(t,e){let n=null;for(const i of t.views.values())n=n||iR(i,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ng;function oR(t){P(!ng,"__referenceConstructor has already been defined"),ng=t}class ig{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Re(null),this.pendingWriteTree_=Wk(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function aR(t,e,n,i,r){return Mk(t.pendingWriteTree_,e,n,i,r),r?cl(t,new Zi(i0(),e,n)):[]}function wr(t,e,n=!1){const i=Lk(t.pendingWriteTree_,e);if(Fk(t.pendingWriteTree_,e)){let s=new Re(null);return i.snap!=null?s=s.set(Se(),!0):Qt(i.children,o=>{s=s.set(new Me(o),!0)}),cl(t,new fc(i.path,s,n))}else return[]}function al(t,e,n){return cl(t,new Zi(r0(),e,n))}function cR(t,e,n){const i=Re.fromObject(n);return cl(t,new uo(r0(),e,i))}function lR(t,e,n,i){const r=b0(t,i);if(r!=null){const s=E0(r),o=s.path,a=s.queryId,c=Gt(o,e),l=new Zi(s0(a),c,n);return w0(t,o,l)}else return[]}function uR(t,e,n,i){const r=b0(t,i);if(r){const s=E0(r),o=s.path,a=s.queryId,c=Gt(o,e),l=Re.fromObject(n),u=new uo(s0(a),c,l);return w0(t,o,u)}else return[]}function y0(t,e,n){const r=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=Gt(o,e),l=nd(a,c);if(l)return l});return h0(r,e,s,n,!0)}function cl(t,e){return _0(e,t.syncPointTree_,null,l0(t.pendingWriteTree_,Se()))}function _0(t,e,n,i){if(ue(t.path))return v0(t,e,n,i);{const r=e.get(Se());n==null&&r!=null&&(n=nd(r,Se()));let s=[];const o=fe(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const l=n?n.getImmediateChild(o):null,u=d0(i,o);s=s.concat(_0(a,c,l,u))}return r&&(s=s.concat(td(r,t,i,n))),s}}function v0(t,e,n,i){const r=e.get(Se());n==null&&r!=null&&(n=nd(r,Se()));let s=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,l=d0(i,o),u=t.operationForChild(o);u&&(s=s.concat(v0(u,a,c,l)))}),r&&(s=s.concat(td(r,t,i,n))),s}function b0(t,e){return t.tagToQueryMap.get(e)}function E0(t){const e=t.indexOf("$");return P(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Me(t.substr(0,e))}}function w0(t,e,n){const i=t.syncPointTree_.get(e);P(i,"Missing sync point for query tag that we're tracking");const r=l0(t.pendingWriteTree_,e);return td(i,n,r,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new id(n)}node(){return this.node_}}class rd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=st(this.path_,e);return new rd(this.syncTree_,n)}node(){return y0(this.syncTree_,this.path_)}}const hR=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},rg=function(t,e,n){if(!t||typeof t!="object")return t;if(P(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return fR(t[".sv"],e,n);if(typeof t[".sv"]=="object")return dR(t[".sv"],e);P(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},fR=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:P(!1,"Unexpected server value: "+t)}},dR=function(t,e,n){t.hasOwnProperty("increment")||P(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&P(!1,"Unexpected increment value: "+i);const r=e.node();if(P(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},pR=function(t,e,n,i){return sd(e,new rd(n,t),i)},mR=function(t,e,n){return sd(t,new id(e),n)};function sd(t,e,n){const i=t.getPriority().val(),r=rg(i,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=rg(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new nt(a,yt(r)):t}else{const o=t;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new nt(r))),o.forEachChild(Et,(a,c)=>{const l=sd(c,e.getImmediateChild(a),n);l!==c&&(s=s.updateImmediateChild(a,l))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function ad(t,e){let n=e instanceof Me?e:new Me(e),i=t,r=fe(n);for(;r!==null;){const s=jr(i.node.children,r)||{children:{},childCount:0};i=new od(r,i,s),n=xe(n),r=fe(n)}return i}function hs(t){return t.node.value}function T0(t,e){t.node.value=e,Ih(t)}function I0(t){return t.node.childCount>0}function gR(t){return hs(t)===void 0&&!I0(t)}function ll(t,e){Qt(t.node.children,(n,i)=>{e(new od(n,t,i))})}function C0(t,e,n,i){n&&!i&&e(t),ll(t,r=>{C0(r,e,!0,i)}),n&&i&&e(t)}function yR(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Bo(t){return new Me(t.parent===null?t.name:Bo(t.parent)+"/"+t.name)}function Ih(t){t.parent!==null&&_R(t.parent,t.name,t)}function _R(t,e,n){const i=gR(n),r=Zn(t.node.children,e);i&&r?(delete t.node.children[e],t.node.childCount--,Ih(t)):!i&&!r&&(t.node.children[e]=n.node,t.node.childCount++,Ih(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vR=/[\[\].#$\/\u0000-\u001F\u007F]/,bR=/[\[\].#$\u0000-\u001F\u007F]/,yu=10*1024*1024,S0=function(t){return typeof t=="string"&&t.length!==0&&!vR.test(t)},ER=function(t){return typeof t=="string"&&t.length!==0&&!bR.test(t)},wR=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ER(t)},A0=function(t,e,n){const i=n instanceof Me?new tk(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Oi(i));if(typeof e=="function")throw new Error(t+"contains a function "+Oi(i)+" with contents = "+e.toString());if(Sv(e))throw new Error(t+"contains "+e.toString()+" "+Oi(i));if(typeof e=="string"&&e.length>yu/3&&sl(e)>yu)throw new Error(t+"contains a string greater than "+yu+" utf8 bytes "+Oi(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(Qt(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!S0(o)))throw new Error(t+" contains an invalid key ("+o+") "+Oi(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);nk(i,o),A0(t,a,i),ik(i)}),r&&s)throw new Error(t+' contains ".value" child '+Oi(i)+" in addition to actual children.")}},TR=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!S0(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!wR(n))throw new Error(FI(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function CR(t,e){let n=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();n!==null&&!Yv(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(r)}n&&t.eventLists_.push(n)}function ar(t,e,n){CR(t,n),SR(t,i=>sn(i,e)||sn(e,i))}function SR(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const r=t.eventLists_[i];if(r){const s=r.path;e(s)?(AR(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function AR(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Wi&&gt("event: "+n.toString()),Vo(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR="repo_interrupt",RR=25;class NR{constructor(e,n,i,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new IR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=hc(),this.transactionQueueTree_=new od,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function xR(t,e,n){if(t.stats_=qf(t.repoInfo_),t.forceRestClient_||CA())t.server_=new uc(t.repoInfo_,(i,r,s,o)=>{sg(t,i,r,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>og(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{lt(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new Vn(t.repoInfo_,e,(i,r,s,o)=>{sg(t,i,r,s,o)},i=>{og(t,i)},i=>{DR(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=xA(t.repoInfo_,()=>new Nk(t.stats_,t.server_)),t.infoData_=new Ck,t.infoSyncTree_=new ig({startListening:(i,r,s,o)=>{let a=[];const c=t.infoData_.getNode(i._path);return c.isEmpty()||(a=al(t.infoSyncTree_,i._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),cd(t,"connected",!1),t.serverSyncTree_=new ig({startListening:(i,r,s,o)=>(t.server_.listen(i,s,r,(a,c)=>{const l=o(a,c);ar(t.eventQueue_,i._path,l)}),[]),stopListening:(i,r)=>{t.server_.unlisten(i,r)}})}function OR(t){const n=t.infoData_.getNode(new Me(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function k0(t){return hR({timestamp:OR(t)})}function sg(t,e,n,i,r){t.dataUpdateCount++;const s=new Me(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(i){const c=tc(n,l=>yt(l));o=uR(t.serverSyncTree_,s,c,r)}else{const c=yt(n);o=lR(t.serverSyncTree_,s,c,r)}else if(i){const c=tc(n,l=>yt(l));o=cR(t.serverSyncTree_,s,c)}else{const c=yt(n);o=al(t.serverSyncTree_,s,c)}let a=s;o.length>0&&(a=ud(t,s)),ar(t.eventQueue_,a,o)}function og(t,e){cd(t,"connected",e),e===!1&&MR(t)}function DR(t,e){Qt(e,(n,i)=>{cd(t,n,i)})}function cd(t,e,n){const i=new Me("/.info/"+e),r=yt(n);t.infoData_.updateSnapshot(i,r);const s=al(t.infoSyncTree_,i,r);ar(t.eventQueue_,i,s)}function PR(t){return t.nextWriteId_++}function MR(t){R0(t,"onDisconnectEvents");const e=k0(t),n=hc();yh(t.onDisconnect_,Se(),(r,s)=>{const o=pR(r,s,t.serverSyncTree_,e);n0(n,r,o)});let i=[];yh(n,Se(),(r,s)=>{i=i.concat(al(t.serverSyncTree_,r,s));const o=VR(t,r);ud(t,o)}),t.onDisconnect_=hc(),ar(t.eventQueue_,Se(),i)}function LR(t){t.persistentConnection_&&t.persistentConnection_.interrupt(kR)}function R0(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),gt(n,...e)}function N0(t,e,n){return y0(t.serverSyncTree_,e,n)||we.EMPTY_NODE}function ld(t,e=t.transactionQueueTree_){if(e||ul(t,e),hs(e)){const n=O0(t,e);P(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&FR(t,Bo(e),n)}else I0(e)&&ll(e,n=>{ld(t,n)})}function FR(t,e,n){const i=n.map(l=>l.currentWriteId),r=N0(t,e,i);let s=r;const o=r.hash();for(let l=0;l<n.length;l++){const u=n[l];P(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Gt(e,u.path);s=s.updateChild(h,u.currentOutputSnapshotRaw)}const a=s.val(!0),c=e;t.server_.put(c.toString(),a,l=>{R0(t,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(wr(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();ul(t,ad(t.transactionQueueTree_,e)),ld(t,t.transactionQueueTree_),ar(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)Vo(h[f])}else{if(l==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ht("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=l}ud(t,e)}},o)}function ud(t,e){const n=x0(t,e),i=Bo(n),r=O0(t,n);return UR(t,r,i),i}function UR(t,e,n){if(e.length===0)return;const i=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=Gt(n,c.path);let u=!1,h;if(P(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,r=r.concat(wr(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=RR)u=!0,h="maxretry",r=r.concat(wr(t.serverSyncTree_,c.currentWriteId,!0));else{const f=N0(t,c.path,o);c.currentInputSnapshot=f;const d=e[a].update(f.val());if(d!==void 0){A0("transaction failed: Data returned ",d,c.path);let m=yt(d);typeof d=="object"&&d!=null&&Zn(d,".priority")||(m=m.updatePriority(f.getPriority()));const b=c.currentWriteId,_=k0(t),v=mR(m,f,_);c.currentOutputSnapshotRaw=m,c.currentOutputSnapshotResolved=v,c.currentWriteId=PR(t),o.splice(o.indexOf(b),1),r=r.concat(aR(t.serverSyncTree_,c.path,v,c.currentWriteId,c.applyLocally)),r=r.concat(wr(t.serverSyncTree_,b,!0))}else u=!0,h="nodata",r=r.concat(wr(t.serverSyncTree_,c.currentWriteId,!0))}ar(t.eventQueue_,n,r),r=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}ul(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)Vo(i[a]);ld(t,t.transactionQueueTree_)}function x0(t,e){let n,i=t.transactionQueueTree_;for(n=fe(e);n!==null&&hs(i)===void 0;)i=ad(i,n),e=xe(e),n=fe(e);return i}function O0(t,e){const n=[];return D0(t,e,n),n.sort((i,r)=>i.order-r.order),n}function D0(t,e,n){const i=hs(e);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);ll(e,r=>{D0(t,r,n)})}function ul(t,e){const n=hs(e);if(n){let i=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[i]=n[r],i++);n.length=i,T0(e,n.length>0?n:void 0)}ll(e,i=>{ul(t,i)})}function VR(t,e){const n=Bo(x0(t,e)),i=ad(t.transactionQueueTree_,e);return yR(i,r=>{_u(t,r)}),_u(t,i),C0(i,r=>{_u(t,r)}),n}function _u(t,e){const n=hs(e);if(n){const i=[];let r=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(P(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(P(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(wr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?T0(e,void 0):n.length=s+1,ar(t.eventQueue_,Bo(e),r);for(let o=0;o<i.length;o++)Vo(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $R(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function BR(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Ht(`Invalid query segment '${n}' in query '${t}'`)}return e}const ag=function(t,e){const n=jR(t),i=n.namespace;n.domain==="firebase.com"&&Xi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Xi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||yA();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new kA(n.host,n.secure,i,r,e,"",i!==n.subdomain),path:new Me(n.pathString)}},jR=function(t){let e="",n="",i="",r="",s="",o=!0,a="https",c=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(r=$R(t.substring(u,h)));const f=BR(t.substring(Math.min(t.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const d=e.slice(0,l);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{const m=e.indexOf(".");i=e.substring(0,m).toLowerCase(),n=e.substring(m+1),s=i}"ns"in f&&(s=f.ns)}return{host:e,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
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
 */class hd{constructor(e,n,i,r){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=r}get key(){return ue(this._path)?null:Wv(this._path)}get ref(){return new fs(this._repo,this._path)}get _queryIdentifier(){const e=Wm(this._queryParams),n=Kf(e);return n==="{}"?"default":n}get _queryObject(){return Wm(this._queryParams)}isEqual(e){if(e=Lt(e),!(e instanceof hd))return!1;const n=this._repo===e._repo,i=Yv(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+ek(this._path)}}class fs extends hd{constructor(e,n){super(e,n,new Xf,!1)}get parent(){const e=Gv(this._path);return e===null?null:new fs(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}sR(fs);oR(fs);/**
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
 */const zR="FIREBASE_DATABASE_EMULATOR_HOST",Ch={};let HR=!1;function KR(t,e,n,i,r){let s=i||t.options.databaseURL;s===void 0&&(t.options.projectId||Xi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),gt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ag(s,r),a=o.repoInfo,c,l;typeof process<"u"&&process.env&&(l=process.env[zR]),l?(c=!0,s=`http://${l}?ns=${a.namespace}`,o=ag(s,r),a=o.repoInfo):c=!o.repoInfo.secure;const u=r&&c?new ph(ph.OWNER):new AA(t.name,t.options,e);TR("Invalid Firebase Database URL",o),ue(o.path)||Xi("Database URL must point to the root of a Firebase Database (not including a child path).");const h=qR(a,t,u,new SA(t.name,n));return new GR(h,t)}function WR(t,e){const n=Ch[e];(!n||n[t.key]!==t)&&Xi(`Database ${e}(${t.repoInfo_}) has already been deleted.`),LR(t),delete n[t.key]}function qR(t,e,n,i){let r=Ch[e.name];r||(r={},Ch[e.name]=r);let s=r[t.toURLString()];return s&&Xi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new NR(t,HR,n,i),r[t.toURLString()]=s,s}class GR{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(xR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new fs(this._repo,Se())),this._rootInternal}_delete(){return this._rootInternal!==null&&(WR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Xi("Cannot call "+e+" on a deleted database.")}}/**
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
 */function YR(t){fA(ls),An(new fn("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return KR(i,r,s,n)},"PUBLIC").setMultipleInstances(!0)),zt(km,Rm,t),zt(km,Rm,"esm2017")}Vn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Vn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};YR();var QR=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},j,fd=fd||{},X=QR||self;function mc(){}function hl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function jo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function XR(t){return Object.prototype.hasOwnProperty.call(t,vu)&&t[vu]||(t[vu]=++JR)}var vu="closure_uid_"+(1e9*Math.random()>>>0),JR=0;function ZR(t,e,n){return t.call.apply(t.bind,arguments)}function eN(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,i),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function wt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?wt=ZR:wt=eN,wt.apply(null,arguments)}function _a(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function ft(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(i,r,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(i,o)}}function Ti(){this.s=this.s,this.o=this.o}var tN=0;Ti.prototype.s=!1;Ti.prototype.na=function(){!this.s&&(this.s=!0,this.M(),tN!=0)&&XR(this)};Ti.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const P0=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function dd(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function cg(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(hl(i)){const r=t.length||0,s=i.length||0;t.length=r+s;for(let o=0;o<s;o++)t[r+o]=i[o]}else t.push(i)}}function Tt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Tt.prototype.h=function(){this.defaultPrevented=!0};var nN=function(){if(!X.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{X.addEventListener("test",mc,e),X.removeEventListener("test",mc,e)}catch{}return t}();function gc(t){return/^[\s\xa0]*$/.test(t)}var lg=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function bu(t,e){return t<e?-1:t>e?1:0}function fl(){var t=X.navigator;return t&&(t=t.userAgent)?t:""}function vn(t){return fl().indexOf(t)!=-1}function pd(t){return pd[" "](t),t}pd[" "]=mc;function iN(t){var e=oN;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var rN=vn("Opera"),Kr=vn("Trident")||vn("MSIE"),M0=vn("Edge"),Sh=M0||Kr,L0=vn("Gecko")&&!(fl().toLowerCase().indexOf("webkit")!=-1&&!vn("Edge"))&&!(vn("Trident")||vn("MSIE"))&&!vn("Edge"),sN=fl().toLowerCase().indexOf("webkit")!=-1&&!vn("Edge");function F0(){var t=X.document;return t?t.documentMode:void 0}var yc;e:{var Eu="",wu=function(){var t=fl();if(L0)return/rv:([^\);]+)(\)|;)/.exec(t);if(M0)return/Edge\/([\d\.]+)/.exec(t);if(Kr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(sN)return/WebKit\/(\S+)/.exec(t);if(rN)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(wu&&(Eu=wu?wu[1]:""),Kr){var Tu=F0();if(Tu!=null&&Tu>parseFloat(Eu)){yc=String(Tu);break e}}yc=Eu}var oN={};function aN(){return iN(function(){let t=0;const e=lg(String(yc)).split("."),n=lg("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var r=e[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r[0].length==0&&s[0].length==0)break;t=bu(r[1].length==0?0:parseInt(r[1],10),s[1].length==0?0:parseInt(s[1],10))||bu(r[2].length==0,s[2].length==0)||bu(r[2],s[2]),r=r[3],s=s[3]}while(t==0)}return 0<=t})}var Ah;if(X.document&&Kr){var ug=F0();Ah=ug||parseInt(yc,10)||void 0}else Ah=void 0;var cN=Ah;function ho(t,e){if(Tt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(L0){e:{try{pd(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:lN[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ho.X.h.call(this)}}ft(ho,Tt);var lN={2:"touch",3:"pen",4:"mouse"};ho.prototype.h=function(){ho.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var zo="closure_listenable_"+(1e6*Math.random()|0),uN=0;function hN(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=r,this.key=++uN,this.ba=this.ea=!1}function dl(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function md(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function U0(t){const e={};for(const n in t)e[n]=t[n];return e}const hg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function V0(t,e){let n,i;for(let r=1;r<arguments.length;r++){i=arguments[r];for(n in i)t[n]=i[n];for(let s=0;s<hg.length;s++)n=hg[s],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function pl(t){this.src=t,this.g={},this.h=0}pl.prototype.add=function(t,e,n,i,r){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Rh(t,e,i,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new hN(e,this.src,s,!!i,r),e.ea=n,t.push(e)),e};function kh(t,e){var n=e.type;if(n in t.g){var i=t.g[n],r=P0(i,e),s;(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(dl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Rh(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==i)return r}return-1}var gd="closure_lm_"+(1e6*Math.random()|0),Iu={};function $0(t,e,n,i,r){if(i&&i.once)return j0(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)$0(t,e[s],n,i,r);return null}return n=vd(n),t&&t[zo]?t.N(e,n,jo(i)?!!i.capture:!!i,r):B0(t,e,n,!1,i,r)}function B0(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=jo(r)?!!r.capture:!!r,a=_d(t);if(a||(t[gd]=a=new pl(t)),n=a.add(e,n,i,o,s),n.proxy)return n;if(i=fN(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)nN||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(H0(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function fN(){function t(n){return e.call(t.src,t.listener,n)}const e=dN;return t}function j0(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)j0(t,e[s],n,i,r);return null}return n=vd(n),t&&t[zo]?t.O(e,n,jo(i)?!!i.capture:!!i,r):B0(t,e,n,!0,i,r)}function z0(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)z0(t,e[s],n,i,r);else i=jo(i)?!!i.capture:!!i,n=vd(n),t&&t[zo]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Rh(s,n,i,r),-1<n&&(dl(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=_d(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Rh(e,n,i,r)),(n=-1<t?e[t]:null)&&yd(n))}function yd(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[zo])kh(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(H0(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=_d(e))?(kh(n,t),n.h==0&&(n.src=null,e[gd]=null)):dl(t)}}}function H0(t){return t in Iu?Iu[t]:Iu[t]="on"+t}function dN(t,e){if(t.ba)t=!0;else{e=new ho(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&yd(t),t=n.call(i,e)}return t}function _d(t){return t=t[gd],t instanceof pl?t:null}var Cu="__closure_events_fn_"+(1e9*Math.random()>>>0);function vd(t){return typeof t=="function"?t:(t[Cu]||(t[Cu]=function(e){return t.handleEvent(e)}),t[Cu])}function at(){Ti.call(this),this.i=new pl(this),this.P=this,this.I=null}ft(at,Ti);at.prototype[zo]=!0;at.prototype.removeEventListener=function(t,e,n,i){z0(this,t,e,n,i)};function ht(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new Tt(e,t);else if(e instanceof Tt)e.target=e.target||t;else{var r=e;e=new Tt(i,t),V0(e,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=va(o,i,!0,e)&&r}if(o=e.g=t,r=va(o,i,!0,e)&&r,r=va(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)o=e.g=n[s],r=va(o,i,!1,e)&&r}at.prototype.M=function(){if(at.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)dl(n[i]);delete t.g[e],t.h--}}this.I=null};at.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};at.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function va(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&kh(t.i,o),r=a.call(c,i)!==!1&&r}}return r&&!i.defaultPrevented}var bd=X.JSON.stringify;function pN(){var t=q0;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class mN{constructor(){this.h=this.g=null}add(e,n){const i=K0.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var K0=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new gN,t=>t.reset());class gN{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function yN(t){X.setTimeout(()=>{throw t},0)}function W0(t,e){Nh||_N(),xh||(Nh(),xh=!0),q0.add(t,e)}var Nh;function _N(){var t=X.Promise.resolve(void 0);Nh=function(){t.then(vN)}}var xh=!1,q0=new mN;function vN(){for(var t;t=pN();){try{t.h.call(t.g)}catch(n){yN(n)}var e=K0;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}xh=!1}function ml(t,e){at.call(this),this.h=t||1,this.g=e||X,this.j=wt(this.lb,this),this.l=Date.now()}ft(ml,at);j=ml.prototype;j.ca=!1;j.R=null;j.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ht(this,"tick"),this.ca&&(Ed(this),this.start()))}};j.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ed(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}j.M=function(){ml.X.M.call(this),Ed(this),delete this.g};function wd(t,e,n){if(typeof t=="function")n&&(t=wt(t,n));else if(t&&typeof t.handleEvent=="function")t=wt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:X.setTimeout(t,e||0)}function G0(t){t.g=wd(()=>{t.g=null,t.i&&(t.i=!1,G0(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class bN extends Ti{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:G0(this)}M(){super.M(),this.g&&(X.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fo(t){Ti.call(this),this.h=t,this.g={}}ft(fo,Ti);var fg=[];function Y0(t,e,n,i){Array.isArray(n)||(n&&(fg[0]=n.toString()),n=fg);for(var r=0;r<n.length;r++){var s=$0(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Q0(t){md(t.g,function(e,n){this.g.hasOwnProperty(n)&&yd(e)},t),t.g={}}fo.prototype.M=function(){fo.X.M.call(this),Q0(this)};fo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function gl(){this.g=!0}gl.prototype.Aa=function(){this.g=!1};function EN(t,e,n,i,r,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function wN(t,e,n,i,r,s,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+`
`+n+`
`+s+" "+o})}function Tr(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+IN(t,n)+(i?" "+i:"")})}function TN(t,e){t.info(function(){return"TIMEOUT: "+e})}gl.prototype.info=function(){};function IN(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return bd(n)}catch{return e}}var cr={},dg=null;function yl(){return dg=dg||new at}cr.Pa="serverreachability";function X0(t){Tt.call(this,cr.Pa,t)}ft(X0,Tt);function po(t){const e=yl();ht(e,new X0(e))}cr.STAT_EVENT="statevent";function J0(t,e){Tt.call(this,cr.STAT_EVENT,t),this.stat=e}ft(J0,Tt);function At(t){const e=yl();ht(e,new J0(e,t))}cr.Qa="timingevent";function Z0(t,e){Tt.call(this,cr.Qa,t),this.size=e}ft(Z0,Tt);function Ho(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return X.setTimeout(function(){t()},e)}var _l={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},eb={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Td(){}Td.prototype.h=null;function pg(t){return t.h||(t.h=t.i())}function tb(){}var Ko={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Id(){Tt.call(this,"d")}ft(Id,Tt);function Cd(){Tt.call(this,"c")}ft(Cd,Tt);var Oh;function vl(){}ft(vl,Td);vl.prototype.g=function(){return new XMLHttpRequest};vl.prototype.i=function(){return{}};Oh=new vl;function Wo(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new fo(this),this.O=CN,t=Sh?125:void 0,this.T=new ml(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new nb}function nb(){this.i=null,this.g="",this.h=!1}var CN=45e3,Dh={},_c={};j=Wo.prototype;j.setTimeout=function(t){this.O=t};function Ph(t,e,n){t.K=1,t.v=El(Hn(e)),t.s=n,t.P=!0,ib(t,null)}function ib(t,e){t.F=Date.now(),qo(t),t.A=Hn(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),hb(n.i,"t",i),t.C=0,n=t.l.H,t.h=new nb,t.g=Ob(t.l,n?e:null,!t.s),0<t.N&&(t.L=new bN(wt(t.La,t,t.g),t.N)),Y0(t.S,t.g,"readystatechange",t.ib),e=t.H?U0(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),po(),EN(t.j,t.u,t.A,t.m,t.U,t.s)}j.ib=function(t){t=t.target;const e=this.L;e&&Un(t)==3?e.l():this.La(t)};j.La=function(t){try{if(t==this.g)e:{const u=Un(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Sh||this.g&&(this.h.h||this.g.fa()||_g(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?po(3):po(2)),bl(this);var n=this.g.aa();this.Y=n;t:if(rb(this)){var i=_g(this.g);t="";var r=i.length,s=Un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Vi(this),zs(this);var o="";break t}this.h.i=new X.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,wN(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!gc(a)){var l=a;break t}}l=null}if(n=l)Tr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Mh(this,n);else{this.i=!1,this.o=3,At(12),Vi(this),zs(this);break e}}this.P?(sb(this,u,o),Sh&&this.i&&u==3&&(Y0(this.S,this.T,"tick",this.hb),this.T.start())):(Tr(this.j,this.m,o,null),Mh(this,o)),u==4&&Vi(this),this.i&&!this.I&&(u==4?kb(this.l,this):(this.i=!1,qo(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,At(12)):(this.o=0,At(13)),Vi(this),zs(this)}}}catch{}finally{}};function rb(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function sb(t,e,n){let i=!0,r;for(;!t.I&&t.C<n.length;)if(r=SN(t,n),r==_c){e==4&&(t.o=4,At(14),i=!1),Tr(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Dh){t.o=4,At(15),Tr(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else Tr(t.j,t.m,r,null),Mh(t,r);rb(t)&&r!=_c&&r!=Dh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,At(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Od(e),e.K=!0,At(11))):(Tr(t.j,t.m,n,"[Invalid Chunked Response]"),Vi(t),zs(t))}j.hb=function(){if(this.g){var t=Un(this.g),e=this.g.fa();this.C<e.length&&(bl(this),sb(this,t,e),this.i&&t!=4&&qo(this))}};function SN(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?_c:(n=Number(e.substring(n,i)),isNaN(n)?Dh:(i+=1,i+n>e.length?_c:(e=e.substr(i,n),t.C=i+n,e)))}j.cancel=function(){this.I=!0,Vi(this)};function qo(t){t.V=Date.now()+t.O,ob(t,t.O)}function ob(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ho(wt(t.gb,t),e)}function bl(t){t.B&&(X.clearTimeout(t.B),t.B=null)}j.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(TN(this.j,this.A),this.K!=2&&(po(),At(17)),Vi(this),this.o=2,zs(this)):ob(this,this.V-t)};function zs(t){t.l.G==0||t.I||kb(t.l,t)}function Vi(t){bl(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Ed(t.T),Q0(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Mh(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Lh(n.h,t))){if(!t.J&&Lh(n.h,t)&&n.G==3){try{var i=n.Fa.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var r=i;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ec(n),Il(n);else break e;xd(n),At(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Ho(wt(n.cb,n),6e3));if(1>=pb(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else $i(n,11)}else if((t.J||n.g==t)&&Ec(n),!gc(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(i=1.5*f,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const d=t.g;if(d){const m=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var s=i.h;s.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Sd(s,s.h),s.h=null))}if(i.D){const y=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(i.za=y,Le(i.F,i.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),i=n;var o=t;if(i.sa=xb(i,i.H?i.ka:null,i.V),o.J){mb(i.h,o);var a=o,c=i.J;c&&a.setTimeout(c),a.B&&(bl(a),qo(a)),i.g=o}else Sb(i);0<n.i.length&&Cl(n)}else l[0]!="stop"&&l[0]!="close"||$i(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?$i(n,7):Nd(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}po(4)}catch{}}function AN(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(hl(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function kN(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(hl(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function ab(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(hl(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=kN(t),i=AN(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}var cb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function RN(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function qi(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof qi){this.h=e!==void 0?e:t.h,vc(this,t.j),this.s=t.s,this.g=t.g,bc(this,t.m),this.l=t.l,e=t.i;var n=new mo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),mg(this,n),this.o=t.o}else t&&(n=String(t).match(cb))?(this.h=!!e,vc(this,n[1]||"",!0),this.s=xs(n[2]||""),this.g=xs(n[3]||"",!0),bc(this,n[4]),this.l=xs(n[5]||"",!0),mg(this,n[6]||"",!0),this.o=xs(n[7]||"")):(this.h=!!e,this.i=new mo(null,this.h))}qi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Os(e,gg,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Os(e,gg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Os(n,n.charAt(0)=="/"?ON:xN,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Os(n,PN)),t.join("")};function Hn(t){return new qi(t)}function vc(t,e,n){t.j=n?xs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function bc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function mg(t,e,n){e instanceof mo?(t.i=e,MN(t.i,t.h)):(n||(e=Os(e,DN)),t.i=new mo(e,t.h))}function Le(t,e,n){t.i.set(e,n)}function El(t){return Le(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function xs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Os(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,NN),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function NN(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var gg=/[#\/\?@]/g,xN=/[#\?:]/g,ON=/[#\?]/g,DN=/[#\?@]/g,PN=/#/g;function mo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ii(t){t.g||(t.g=new Map,t.h=0,t.i&&RN(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}j=mo.prototype;j.add=function(t,e){Ii(this),this.i=null,t=ds(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function lb(t,e){Ii(t),e=ds(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function ub(t,e){return Ii(t),e=ds(t,e),t.g.has(e)}j.forEach=function(t,e){Ii(this),this.g.forEach(function(n,i){n.forEach(function(r){t.call(e,r,i,this)},this)},this)};j.oa=function(){Ii(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let s=0;s<r.length;s++)n.push(e[i])}return n};j.W=function(t){Ii(this);let e=[];if(typeof t=="string")ub(this,t)&&(e=e.concat(this.g.get(ds(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};j.set=function(t,e){return Ii(this),this.i=null,t=ds(this,t),ub(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};j.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function hb(t,e,n){lb(t,e),0<n.length&&(t.i=null,t.g.set(ds(t,e),dd(n)),t.h+=n.length)}j.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const s=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var r=s;o[i]!==""&&(r+="="+encodeURIComponent(String(o[i]))),t.push(r)}}return this.i=t.join("&")};function ds(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function MN(t,e){e&&!t.j&&(Ii(t),t.i=null,t.g.forEach(function(n,i){var r=i.toLowerCase();i!=r&&(lb(this,i),hb(this,r,n))},t)),t.j=e}var LN=class{constructor(e,n){this.h=e,this.g=n}};function fb(t){this.l=t||FN,X.PerformanceNavigationTiming?(t=X.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(X.g&&X.g.Ga&&X.g.Ga()&&X.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var FN=10;function db(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function pb(t){return t.h?1:t.g?t.g.size:0}function Lh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Sd(t,e){t.g?t.g.add(e):t.h=e}function mb(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}fb.prototype.cancel=function(){if(this.i=gb(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function gb(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return dd(t.i)}function Ad(){}Ad.prototype.stringify=function(t){return X.JSON.stringify(t,void 0)};Ad.prototype.parse=function(t){return X.JSON.parse(t,void 0)};function UN(){this.g=new Ad}function VN(t,e,n){const i=n||"";try{ab(t,function(r,s){let o=r;jo(r)&&(o=bd(r)),e.push(i+s+"="+encodeURIComponent(o))})}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function $N(t,e){const n=new gl;if(X.Image){const i=new Image;i.onload=_a(ba,n,i,"TestLoadImage: loaded",!0,e),i.onerror=_a(ba,n,i,"TestLoadImage: error",!1,e),i.onabort=_a(ba,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=_a(ba,n,i,"TestLoadImage: timeout",!1,e),X.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function ba(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch{}}function Go(t){this.l=t.ac||null,this.j=t.jb||!1}ft(Go,Td);Go.prototype.g=function(){return new wl(this.l,this.j)};Go.prototype.i=function(t){return function(){return t}}({});function wl(t,e){at.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=kd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ft(wl,at);var kd=0;j=wl.prototype;j.open=function(t,e){if(this.readyState!=kd)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,go(this)};j.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||X).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};j.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yo(this)),this.readyState=kd};j.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,go(this)),this.g&&(this.readyState=3,go(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof X.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;yb(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function yb(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}j.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Yo(this):go(this),this.readyState==3&&yb(this)}};j.Va=function(t){this.g&&(this.response=this.responseText=t,Yo(this))};j.Ua=function(t){this.g&&(this.response=t,Yo(this))};j.ga=function(){this.g&&Yo(this)};function Yo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,go(t)}j.setRequestHeader=function(t,e){this.v.append(t,e)};j.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};j.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function go(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(wl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var BN=X.JSON.parse;function je(t){at.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=_b,this.K=this.L=!1}ft(je,at);var _b="",jN=/^https?$/i,zN=["POST","PUT"];j=je.prototype;j.Ka=function(t){this.L=t};j.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Oh.g(),this.C=this.u?pg(this.u):pg(Oh),this.g.onreadystatechange=wt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){yg(this,s);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const s of i.keys())n.set(s,i.get(s));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),r=X.FormData&&t instanceof X.FormData,!(0<=P0(zN,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Eb(this),0<this.B&&((this.K=HN(this.g))?(this.g.timeout=this.B,this.g.ontimeout=wt(this.qa,this)):this.A=wd(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){yg(this,s)}};function HN(t){return Kr&&aN()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}j.qa=function(){typeof fd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ht(this,"timeout"),this.abort(8))};function yg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,vb(t),Tl(t)}function vb(t){t.D||(t.D=!0,ht(t,"complete"),ht(t,"error"))}j.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ht(this,"complete"),ht(this,"abort"),Tl(this))};j.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Tl(this,!0)),je.X.M.call(this)};j.Ha=function(){this.s||(this.F||this.v||this.l?bb(this):this.fb())};j.fb=function(){bb(this)};function bb(t){if(t.h&&typeof fd<"u"&&(!t.C[1]||Un(t)!=4||t.aa()!=2)){if(t.v&&Un(t)==4)wd(t.Ha,0,t);else if(ht(t,"readystatechange"),Un(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var r=String(t.H).match(cb)[1]||null;if(!r&&X.self&&X.self.location){var s=X.self.location.protocol;r=s.substr(0,s.length-1)}i=!jN.test(r?r.toLowerCase():"")}n=i}if(n)ht(t,"complete"),ht(t,"success");else{t.m=6;try{var o=2<Un(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",vb(t)}}finally{Tl(t)}}}}function Tl(t,e){if(t.g){Eb(t);const n=t.g,i=t.C[0]?mc:null;t.g=null,t.C=null,e||ht(t,"ready");try{n.onreadystatechange=i}catch{}}}function Eb(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(X.clearTimeout(t.A),t.A=null)}function Un(t){return t.g?t.g.readyState:0}j.aa=function(){try{return 2<Un(this)?this.g.status:-1}catch{return-1}};j.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};j.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),BN(e)}};function _g(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case _b:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}j.Ea=function(){return this.m};j.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function wb(t){let e="";return md(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function Rd(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=wb(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Le(t,e,n))}function As(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Tb(t){this.Ca=0,this.i=[],this.j=new gl,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=As("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=As("baseRetryDelayMs",5e3,t),this.bb=As("retryDelaySeedMs",1e4,t),this.$a=As("forwardChannelMaxRetries",2,t),this.ta=As("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new fb(t&&t.concurrentRequestLimit),this.Fa=new UN,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}j=Tb.prototype;j.ma=8;j.G=1;function Nd(t){if(Ib(t),t.G==3){var e=t.U++,n=Hn(t.F);Le(n,"SID",t.I),Le(n,"RID",e),Le(n,"TYPE","terminate"),Qo(t,n),e=new Wo(t,t.j,e,void 0),e.K=2,e.v=El(Hn(n)),n=!1,X.navigator&&X.navigator.sendBeacon&&(n=X.navigator.sendBeacon(e.v.toString(),"")),!n&&X.Image&&(new Image().src=e.v,n=!0),n||(e.g=Ob(e.l,null),e.g.da(e.v)),e.F=Date.now(),qo(e)}Nb(t)}function Il(t){t.g&&(Od(t),t.g.cancel(),t.g=null)}function Ib(t){Il(t),t.u&&(X.clearTimeout(t.u),t.u=null),Ec(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&X.clearTimeout(t.m),t.m=null)}function Cl(t){db(t.h)||t.m||(t.m=!0,W0(t.Ja,t),t.C=0)}function KN(t,e){return pb(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Ho(wt(t.Ja,t,e),Rb(t,t.C)),t.C++,!0)}j.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Wo(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=U0(s),V0(s,this.S)):s=this.S),this.o!==null||this.N||(r.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var i=this.i[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Cb(this,r,e),n=Hn(this.F),Le(n,"RID",t),Le(n,"CVER",22),this.D&&Le(n,"X-HTTP-Session-Id",this.D),Qo(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(wb(s)))+"&"+e:this.o&&Rd(n,this.o,s)),Sd(this.h,r),this.Ya&&Le(n,"TYPE","init"),this.O?(Le(n,"$req",e),Le(n,"SID","null"),r.Z=!0,Ph(r,n,null)):Ph(r,n,e),this.G=2}}else this.G==3&&(t?vg(this,t):this.i.length==0||db(this.h)||vg(this))};function vg(t,e){var n;e?n=e.m:n=t.U++;const i=Hn(t.F);Le(i,"SID",t.I),Le(i,"RID",n),Le(i,"AID",t.T),Qo(t,i),t.o&&t.s&&Rd(i,t.o,t.s),n=new Wo(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Cb(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Sd(t.h,n),Ph(n,i,e)}function Qo(t,e){t.ia&&md(t.ia,function(n,i){Le(e,i,n)}),t.l&&ab({},function(n,i){Le(e,i,n)})}function Cb(t,e,n){n=Math.min(t.i.length,n);var i=t.l?wt(t.l.Ra,t.l,t):null;e:{var r=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=r[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=s,0>l)s=Math.max(0,r[c].h-100),a=!1;else try{VN(u,o,"req"+l+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,i}function Sb(t){t.g||t.u||(t.Z=1,W0(t.Ia,t),t.A=0)}function xd(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Ho(wt(t.Ia,t),Rb(t,t.A)),t.A++,!0)}j.Ia=function(){if(this.u=null,Ab(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Ho(wt(this.eb,this),t)}};j.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,At(10),Il(this),Ab(this))};function Od(t){t.B!=null&&(X.clearTimeout(t.B),t.B=null)}function Ab(t){t.g=new Wo(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Hn(t.sa);Le(e,"RID","rpc"),Le(e,"SID",t.I),Le(e,"CI",t.L?"0":"1"),Le(e,"AID",t.T),Le(e,"TYPE","xmlhttp"),Qo(t,e),t.o&&t.s&&Rd(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=El(Hn(e)),n.s=null,n.P=!0,ib(n,t)}j.cb=function(){this.v!=null&&(this.v=null,Il(this),xd(this),At(19))};function Ec(t){t.v!=null&&(X.clearTimeout(t.v),t.v=null)}function kb(t,e){var n=null;if(t.g==e){Ec(t),Od(t),t.g=null;var i=2}else if(Lh(t.h,e))n=e.D,mb(t.h,e),i=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;i=yl(),ht(i,new Z0(i,n)),Cl(t)}else Sb(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(i==1&&KN(t,e)||i==2&&xd(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:$i(t,5);break;case 4:$i(t,10);break;case 3:$i(t,6);break;default:$i(t,2)}}}function Rb(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function $i(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var i=wt(t.kb,t);n||(n=new qi("//www.google.com/images/cleardot.gif"),X.location&&X.location.protocol=="http"||vc(n,"https"),El(n)),$N(n.toString(),i)}else At(2);t.G=0,t.l&&t.l.va(e),Nb(t),Ib(t)}j.kb=function(t){t?(this.j.info("Successfully pinged google.com"),At(2)):(this.j.info("Failed to ping google.com"),At(1))};function Nb(t){if(t.G=0,t.la=[],t.l){const e=gb(t.h);(e.length!=0||t.i.length!=0)&&(cg(t.la,e),cg(t.la,t.i),t.h.i.length=0,dd(t.i),t.i.length=0),t.l.ua()}}function xb(t,e,n){var i=n instanceof qi?Hn(n):new qi(n,void 0);if(i.g!="")e&&(i.g=e+"."+i.g),bc(i,i.m);else{var r=X.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new qi(null,void 0);i&&vc(s,i),e&&(s.g=e),r&&bc(s,r),n&&(s.l=n),i=s}return n=t.D,e=t.za,n&&e&&Le(i,n,e),Le(i,"VER",t.ma),Qo(t,i),i}function Ob(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new je(new Go({jb:!0})):new je(t.ra),e.Ka(t.H),e}function Db(){}j=Db.prototype;j.xa=function(){};j.wa=function(){};j.va=function(){};j.ua=function(){};j.Ra=function(){};function wc(){if(Kr&&!(10<=Number(cN)))throw Error("Environmental error: no available transport.")}wc.prototype.g=function(t,e){return new Kt(t,e)};function Kt(t,e){at.call(this),this.g=new Tb(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!gc(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!gc(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ps(this)}ft(Kt,at);Kt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;At(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=xb(t,null,t.V),Cl(t)};Kt.prototype.close=function(){Nd(this.g)};Kt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=bd(t),t=n);e.i.push(new LN(e.ab++,t)),e.G==3&&Cl(e)};Kt.prototype.M=function(){this.g.l=null,delete this.j,Nd(this.g),delete this.g,Kt.X.M.call(this)};function Pb(t){Id.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ft(Pb,Id);function Mb(){Cd.call(this),this.status=1}ft(Mb,Cd);function ps(t){this.g=t}ft(ps,Db);ps.prototype.xa=function(){ht(this.g,"a")};ps.prototype.wa=function(t){ht(this.g,new Pb(t))};ps.prototype.va=function(t){ht(this.g,new Mb)};ps.prototype.ua=function(){ht(this.g,"b")};wc.prototype.createWebChannel=wc.prototype.g;Kt.prototype.send=Kt.prototype.u;Kt.prototype.open=Kt.prototype.m;Kt.prototype.close=Kt.prototype.close;_l.NO_ERROR=0;_l.TIMEOUT=8;_l.HTTP_ERROR=6;eb.COMPLETE="complete";tb.EventType=Ko;Ko.OPEN="a";Ko.CLOSE="b";Ko.ERROR="c";Ko.MESSAGE="d";at.prototype.listen=at.prototype.N;je.prototype.listenOnce=je.prototype.O;je.prototype.getLastError=je.prototype.Oa;je.prototype.getLastErrorCode=je.prototype.Ea;je.prototype.getStatus=je.prototype.aa;je.prototype.getResponseJson=je.prototype.Sa;je.prototype.getResponseText=je.prototype.fa;je.prototype.send=je.prototype.da;je.prototype.setWithCredentials=je.prototype.Ka;var WN=function(){return new wc},qN=function(){return yl()},Su=_l,GN=eb,YN=cr,bg={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},QN=Go,Ea=tb,XN=je;const Eg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ms="9.20.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=new Mo("@firebase/firestore");function wg(){return tr.logLevel}function z(t,...e){if(tr.logLevel<=ge.DEBUG){const n=e.map(Dd);tr.debug(`Firestore (${ms}): ${t}`,...n)}}function Kn(t,...e){if(tr.logLevel<=ge.ERROR){const n=e.map(Dd);tr.error(`Firestore (${ms}): ${t}`,...n)}}function Tc(t,...e){if(tr.logLevel<=ge.WARN){const n=e.map(Dd);tr.warn(`Firestore (${ms}): ${t}`,...n)}}function Dd(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${ms}) INTERNAL ASSERTION FAILED: `+t;throw Kn(e),new Error(e)}function Pe(t,e){t||Y()}function ne(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Jn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class JN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(mt.UNAUTHENTICATED))}shutdown(){}}class ZN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ex{constructor(e){this.t=e,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const r=c=>this.i!==i?(i=this.i,n(c)):Promise.resolve();let s=new $n;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new $n,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new $n)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Pe(typeof i.accessToken=="string"),new Lb(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Pe(e===null||typeof e=="string"),new mt(e)}}class tx{constructor(e,n,i){this.h=e,this.l=n,this.m=i,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class nx{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new tx(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ix{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rx{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const i=s=>{s.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>i(s))};const r=s=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?r(s):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Pe(typeof n.token=="string"),this.T=n.token,new ix(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function sx(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const r=sx(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=e.charAt(r[s]%e.length))}return i}}function be(t,e){return t<e?-1:t>e?1:0}function Wr(t,e,n){return t.length===e.length&&t.every((i,r)=>n(i,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new Qe(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class yo{constructor(e,n,i){n===void 0?n=0:n>e.length&&Y(),i===void 0?i=e.length-n:i>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return yo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof yo?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let r=0;r<i;r++){const s=e.get(r),o=n.get(r);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Fe extends yo{construct(e,n,i){return new Fe(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new q(A.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(r=>r.length>0))}return new Fe(n)}static emptyPath(){return new Fe([])}}const ox=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bt extends yo{construct(e,n,i){return new bt(e,n,i)}static isValidIdentifier(e){return ox.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new bt(["__name__"])}static fromServerFormat(e){const n=[];let i="",r=0;const s=()=>{if(i.length===0)throw new q(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new q(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new q(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(i+=a,r++):(s(),r++)}if(s(),o)throw new q(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new bt(n)}static emptyPath(){return new bt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(Fe.fromString(e))}static fromName(e){return new G(Fe.fromString(e).popFirst(5))}static empty(){return new G(Fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new Fe(e.slice()))}}function ax(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,r=Z.fromTimestamp(i===1e9?new Qe(n+1,0):new Qe(n,i));return new yi(r,G.empty(),e)}function cx(t){return new yi(t.readTime,t.key,-1)}class yi{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new yi(Z.min(),G.empty(),-1)}static max(){return new yi(Z.max(),G.empty(),-1)}}function lx(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:be(t.largestBatchId,e.largestBatchId))}/**
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
 */const ux="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xo(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==ux)throw t;z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((i,r)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(i,r)},this.catchCallback=s=>{this.wrapFailure(n,s).next(i,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,i)=>{n(e)})}static reject(e){return new R((n,i)=>{i(e)})}static waitFor(e){return new R((n,i)=>{let r=0,s=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++s,o&&s===r&&n()},c=>i(c))}),o=!0,s===r&&n()})}static or(e){let n=R.resolve(!1);for(const i of e)n=n.next(r=>r?R.resolve(r):i());return n}static forEach(e,n){const i=[];return e.forEach((r,s)=>{i.push(n.call(this,r,s))}),this.waitFor(i)}static mapArray(e,n){return new R((i,r)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===s&&i(o)},u=>r(u))}})}static doWhile(e,n){return new R((i,r)=>{const s=()=>{e()===!0?n().next(()=>{s()},r):i()};s()})}}function Jo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Pd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ot(i),this.ut=i=>n.writeSequenceNumber(i))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Pd.ct=-1;function Sl(t){return t==null}function Ic(t){return t===0&&1/t==-1/0}function fx(t){return typeof t=="number"&&Number.isInteger(t)&&!Ic(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function lr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ub(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n){this.comparator=e,this.root=n||ct.EMPTY}insert(e,n){return new et(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ct.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(e,i.key);if(r===0)return n+i.left.size;r<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wa(this.root,e,this.comparator,!1)}getReverseIterator(){return new wa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wa(this.root,e,this.comparator,!0)}}class wa{constructor(e,n,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?i(e.key,n):1,n&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ct{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i??ct.RED,this.left=r??ct.EMPTY,this.right=s??ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,r,s){return new ct(e??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return ct.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(t,e,n,i,r){return this}insert(t,e,n){return new ct(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ig(this.data.getIterator())}getIteratorFrom(e){return new Ig(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Je(this.comparator);return n.data=e,n}}class Ig{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class on{constructor(e){this.fields=e,e.sort(bt.comparator)}static empty(){return new on([])}unionWith(e){let n=new Je(bt.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new on(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Wr(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class dx extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class It{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new dx("Invalid base64 string: "+r):r}}(e);return new It(n)}static fromUint8Array(e){const n=function(i){let r="";for(let s=0;s<i.length;++s)r+=String.fromCharCode(i[s]);return r}(e);return new It(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}It.EMPTY_BYTE_STRING=new It("");const px=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _i(t){if(Pe(!!t),typeof t=="string"){let e=0;const n=px.exec(t);if(Pe(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Ye(t.seconds),nanos:Ye(t.nanos)}}function Ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function qr(t){return typeof t=="string"?It.fromBase64String(t):It.fromUint8Array(t)}/**
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
 */function Vb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function $b(t){const e=t.mapValue.fields.__previous_value__;return Vb(e)?$b(e):e}function _o(t){const e=_i(t.mapValue.fields.__local_write_time__.timestampValue);return new Qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mx{constructor(e,n,i,r,s,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class vo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new vo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof vo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ta={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function nr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Vb(t)?4:gx(t)?9007199254740991:10:Y()}function Rn(t,e){if(t===e)return!0;const n=nr(t);if(n!==nr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return _o(t).isEqual(_o(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const s=_i(i.timestampValue),o=_i(r.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,r){return qr(i.bytesValue).isEqual(qr(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,r){return Ye(i.geoPointValue.latitude)===Ye(r.geoPointValue.latitude)&&Ye(i.geoPointValue.longitude)===Ye(r.geoPointValue.longitude)}(t,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return Ye(i.integerValue)===Ye(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const s=Ye(i.doubleValue),o=Ye(r.doubleValue);return s===o?Ic(s)===Ic(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Wr(t.arrayValue.values||[],e.arrayValue.values||[],Rn);case 10:return function(i,r){const s=i.mapValue.fields||{},o=r.mapValue.fields||{};if(Tg(s)!==Tg(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Rn(s[a],o[a])))return!1;return!0}(t,e);default:return Y()}}function bo(t,e){return(t.values||[]).find(n=>Rn(n,e))!==void 0}function Gr(t,e){if(t===e)return 0;const n=nr(t),i=nr(e);if(n!==i)return be(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return be(t.booleanValue,e.booleanValue);case 2:return function(r,s){const o=Ye(r.integerValue||r.doubleValue),a=Ye(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Cg(t.timestampValue,e.timestampValue);case 4:return Cg(_o(t),_o(e));case 5:return be(t.stringValue,e.stringValue);case 6:return function(r,s){const o=qr(r),a=qr(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,s){const o=r.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=be(o[c],a[c]);if(l!==0)return l}return be(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,s){const o=be(Ye(r.latitude),Ye(s.latitude));return o!==0?o:be(Ye(r.longitude),Ye(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,s){const o=r.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Gr(o[c],a[c]);if(l)return l}return be(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,s){if(r===Ta.mapValue&&s===Ta.mapValue)return 0;if(r===Ta.mapValue)return 1;if(s===Ta.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=s.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=be(a[u],l[u]);if(h!==0)return h;const f=Gr(o[a[u]],c[l[u]]);if(f!==0)return f}return be(a.length,l.length)}(t.mapValue,e.mapValue);default:throw Y()}}function Cg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return be(t,e);const n=_i(t),i=_i(e),r=be(n.seconds,i.seconds);return r!==0?r:be(n.nanos,i.nanos)}function Yr(t){return Fh(t)}function Fh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const r=_i(i);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?qr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,G.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let r="[",s=!0;for(const o of i.values||[])s?s=!1:r+=",",r+=Fh(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(i){const r=Object.keys(i.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Fh(i.fields[a])}`;return s+"}"}(t.mapValue):Y();var e,n}function Uh(t){return!!t&&"integerValue"in t}function Md(t){return!!t&&"arrayValue"in t}function Sg(t){return!!t&&"nullValue"in t}function Ag(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function za(t){return!!t&&"mapValue"in t}function Hs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return lr(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=Hs(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Hs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function gx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.value=e}static empty(){return new Vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!za(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Hs(n)}setAll(e){let n=bt.emptyPath(),i={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,i,r),i={},r=[],n=a.popLast()}o?i[a.lastSegment()]=Hs(o):r.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,i,r)}delete(e){const n=this.field(e.popLast());za(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Rn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let r=n.mapValue.fields[e.get(i)];za(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,i){lr(n,(r,s)=>e[r]=s);for(const r of i)delete e[r]}clone(){return new Vt(Hs(this.value))}}function Bb(t){const e=[];return lr(t.fields,(n,i)=>{const r=new bt([n]);if(za(i)){const s=Bb(i.mapValue).fields;if(s.length===0)e.push(r);else for(const o of s)e.push(r.child(o))}else e.push(r)}),new on(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,n,i,r,s,o,a){this.key=e,this.documentType=n,this.version=i,this.readTime=r,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new _t(e,0,Z.min(),Z.min(),Z.min(),Vt.empty(),0)}static newFoundDocument(e,n,i,r){return new _t(e,1,n,Z.min(),i,r,0)}static newNoDocument(e,n){return new _t(e,2,n,Z.min(),Z.min(),Vt.empty(),0)}static newUnknownDocument(e,n){return new _t(e,3,n,Z.min(),Z.min(),Vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Cc{constructor(e,n){this.position=e,this.inclusive=n}}function kg(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(s.field.isKeyField()?i=G.comparator(G.fromName(o.referenceValue),n.key):i=Gr(o,n.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return i}function Rg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Rn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ks{constructor(e,n="asc"){this.field=e,this.dir=n}}function yx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class jb{}class Xe extends jb{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new vx(e,n,i):n==="array-contains"?new wx(e,i):n==="in"?new Tx(e,i):n==="not-in"?new Ix(e,i):n==="array-contains-any"?new Cx(e,i):new Xe(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new bx(e,i):new Ex(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Gr(n,this.value)):n!==null&&nr(this.value)===nr(n)&&this.matchesComparison(Gr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Nn extends jb{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Nn(e,n)}matches(e){return zb(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function zb(t){return t.op==="and"}function Hb(t){return _x(t)&&zb(t)}function _x(t){for(const e of t.filters)if(e instanceof Nn)return!1;return!0}function Vh(t){if(t instanceof Xe)return t.field.canonicalString()+t.op.toString()+Yr(t.value);if(Hb(t))return t.filters.map(e=>Vh(e)).join(",");{const e=t.filters.map(n=>Vh(n)).join(",");return`${t.op}(${e})`}}function Kb(t,e){return t instanceof Xe?function(n,i){return i instanceof Xe&&n.op===i.op&&n.field.isEqual(i.field)&&Rn(n.value,i.value)}(t,e):t instanceof Nn?function(n,i){return i instanceof Nn&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((r,s,o)=>r&&Kb(s,i.filters[o]),!0):!1}(t,e):void Y()}function Wb(t){return t instanceof Xe?function(e){return`${e.field.canonicalString()} ${e.op} ${Yr(e.value)}`}(t):t instanceof Nn?function(e){return e.op.toString()+" {"+e.getFilters().map(Wb).join(" ,")+"}"}(t):"Filter"}class vx extends Xe{constructor(e,n,i){super(e,n,i),this.key=G.fromName(i.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class bx extends Xe{constructor(e,n){super(e,"in",n),this.keys=qb("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Ex extends Xe{constructor(e,n){super(e,"not-in",n),this.keys=qb("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function qb(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>G.fromName(i.referenceValue))}class wx extends Xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Md(n)&&bo(n.arrayValue,this.value)}}class Tx extends Xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&bo(this.value.arrayValue,n)}}class Ix extends Xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(bo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!bo(this.value.arrayValue,n)}}class Cx extends Xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Md(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>bo(this.value.arrayValue,i))}}/**
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
 */class Sx{constructor(e,n=null,i=[],r=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=r,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function Ng(t,e=null,n=[],i=[],r=null,s=null,o=null){return new Sx(t,e,n,i,r,s,o)}function Ld(t){const e=ne(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>Vh(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),Sl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Yr(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Yr(i)).join(",")),e.ft=n}return e.ft}function Fd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!yx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Kb(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Rg(t.startAt,e.startAt)&&Rg(t.endAt,e.endAt)}function $h(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e,n=null,i=[],r=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this.wt=null,this.startAt,this.endAt}}function Ax(t,e,n,i,r,s,o,a){return new Al(t,e,n,i,r,s,o,a)}function kl(t){return new Al(t)}function xg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function kx(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Rx(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Nx(t){return t.collectionGroup!==null}function Mr(t){const e=ne(t);if(e.dt===null){e.dt=[];const n=Rx(e),i=kx(e);if(n!==null&&i===null)n.isKeyField()||e.dt.push(new Ks(n)),e.dt.push(new Ks(bt.keyField(),"asc"));else{let r=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(r=!0);if(!r){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Ks(bt.keyField(),s))}}}return e.dt}function Wn(t){const e=ne(t);if(!e.wt)if(e.limitType==="F")e.wt=Ng(e.path,e.collectionGroup,Mr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Mr(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ks(s.field,o))}const i=e.endAt?new Cc(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Cc(e.startAt.position,e.startAt.inclusive):null;e.wt=Ng(e.path,e.collectionGroup,n,e.filters,e.limit,i,r)}return e.wt}function Bh(t,e,n){return new Al(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Rl(t,e){return Fd(Wn(t),Wn(e))&&t.limitType===e.limitType}function Gb(t){return`${Ld(Wn(t))}|lt:${t.limitType}`}function jh(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>Wb(i)).join(", ")}]`),Sl(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Yr(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Yr(i)).join(",")),`Target(${n})`}(Wn(t))}; limitType=${t.limitType})`}function Nl(t,e){return e.isFoundDocument()&&function(n,i){const r=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):G.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,i){for(const r of Mr(n))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const r of n.filters)if(!r.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!function(r,s,o){const a=kg(r,s,o);return r.inclusive?a<=0:a<0}(n.startAt,Mr(n),i)||n.endAt&&!function(r,s,o){const a=kg(r,s,o);return r.inclusive?a>=0:a>0}(n.endAt,Mr(n),i))}(t,e)}function xx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Yb(t){return(e,n)=>{let i=!1;for(const r of Mr(t)){const s=Ox(r,e,n);if(s!==0)return s;i=i||r.field.isKeyField()}return 0}}function Ox(t,e,n){const i=t.field.isKeyField()?G.comparator(e.key,n.key):function(r,s,o){const a=s.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Gr(a,c):Y()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Y()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[r,s]of i)if(this.equalsFn(r,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),r=this.inner[i];if(r===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return i.length===1?delete this.inner[n]:i.splice(r,1),this.innerSize--,!0;return!1}forEach(e){lr(this.inner,(n,i)=>{for(const[r,s]of i)e(r,s)})}isEmpty(){return Ub(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dx=new et(G.comparator);function qn(){return Dx}const Qb=new et(G.comparator);function Ds(...t){let e=Qb;for(const n of t)e=e.insert(n.key,n);return e}function Xb(t){let e=Qb;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function Bi(){return Ws()}function Jb(){return Ws()}function Ws(){return new gs(t=>t.toString(),(t,e)=>t.isEqual(e))}const Px=new et(G.comparator),Mx=new Je(G.comparator);function le(...t){let e=Mx;for(const n of t)e=e.add(n);return e}const Lx=new Je(be);function Zb(){return Lx}/**
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
 */function e1(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ic(e)?"-0":e}}function t1(t){return{integerValue:""+t}}function Fx(t,e){return fx(e)?t1(e):e1(t,e)}/**
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
 */class xl{constructor(){this._=void 0}}function Ux(t,e,n){return t instanceof Sc?function(i,r){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&(s.fields.__previous_value__=r),{mapValue:s}}(n,e):t instanceof Eo?i1(t,e):t instanceof wo?r1(t,e):function(i,r){const s=n1(i,r),o=Og(s)+Og(i._t);return Uh(s)&&Uh(i._t)?t1(o):e1(i.serializer,o)}(t,e)}function Vx(t,e,n){return t instanceof Eo?i1(t,e):t instanceof wo?r1(t,e):n}function n1(t,e){return t instanceof Ac?Uh(n=e)||function(i){return!!i&&"doubleValue"in i}(n)?e:{integerValue:0}:null;var n}class Sc extends xl{}class Eo extends xl{constructor(e){super(),this.elements=e}}function i1(t,e){const n=s1(e);for(const i of t.elements)n.some(r=>Rn(r,i))||n.push(i);return{arrayValue:{values:n}}}class wo extends xl{constructor(e){super(),this.elements=e}}function r1(t,e){let n=s1(e);for(const i of t.elements)n=n.filter(r=>!Rn(r,i));return{arrayValue:{values:n}}}class Ac extends xl{constructor(e,n){super(),this.serializer=e,this._t=n}}function Og(t){return Ye(t.integerValue||t.doubleValue)}function s1(t){return Md(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function $x(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof Eo&&i instanceof Eo||n instanceof wo&&i instanceof wo?Wr(n.elements,i.elements,Rn):n instanceof Ac&&i instanceof Ac?Rn(n._t,i._t):n instanceof Sc&&i instanceof Sc}(t.transform,e.transform)}class Bx{constructor(e,n){this.version=e,this.transformResults=n}}class Bn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Bn}static exists(e){return new Bn(void 0,e)}static updateTime(e){return new Bn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ha(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ol{}function o1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new c1(t.key,Bn.none()):new Dl(t.key,t.data,Bn.none());{const n=t.data,i=Vt.empty();let r=new Je(bt.comparator);for(let s of e.fields)if(!r.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?i.delete(s):i.set(s,o),r=r.add(s)}return new ur(t.key,i,new on(r.toArray()),Bn.none())}}function jx(t,e,n){t instanceof Dl?function(i,r,s){const o=i.value.clone(),a=Pg(i.fieldTransforms,r,s.transformResults);o.setAll(a),r.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ur?function(i,r,s){if(!Ha(i.precondition,r))return void r.convertToUnknownDocument(s.version);const o=Pg(i.fieldTransforms,r,s.transformResults),a=r.data;a.setAll(a1(i)),a.setAll(o),r.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(i,r,s){r.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function qs(t,e,n,i){return t instanceof Dl?function(r,s,o,a){if(!Ha(r.precondition,s))return o;const c=r.value.clone(),l=Mg(r.fieldTransforms,a,s);return c.setAll(l),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),null}(t,e,n,i):t instanceof ur?function(r,s,o,a){if(!Ha(r.precondition,s))return o;const c=Mg(r.fieldTransforms,a,s),l=s.data;return l.setAll(a1(r)),l.setAll(c),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,i):function(r,s,o){return Ha(r.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function zx(t,e){let n=null;for(const i of t.fieldTransforms){const r=e.data.field(i.field),s=n1(i.transform,r||null);s!=null&&(n===null&&(n=Vt.empty()),n.set(i.field,s))}return n||null}function Dg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Wr(n,i,(r,s)=>$x(r,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Dl extends Ol{constructor(e,n,i,r=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ur extends Ol{constructor(e,n,i,r,s=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function a1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function Pg(t,e,n){const i=new Map;Pe(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,Vx(o,a,n[r]))}return i}function Mg(t,e,n){const i=new Map;for(const r of t){const s=r.transform,o=n.data.field(r.field);i.set(r.field,Ux(s,o,e))}return i}class c1 extends Ol{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Hx extends Ol{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(e,n,i,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(e.key)&&jx(s,e,i[r])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=qs(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=qs(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=Jb();return this.mutations.forEach(r=>{const s=e.get(r.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(r.key)?null:a;const c=o1(o,a);c!==null&&i.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(Z.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&Wr(this.mutations,e.mutations,(n,i)=>Dg(n,i))&&Wr(this.baseMutations,e.baseMutations,(n,i)=>Dg(n,i))}}class Ud{constructor(e,n,i,r){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=r}static from(e,n,i){Pe(e.mutations.length===i.length);let r=Px;const s=e.mutations;for(let o=0;o<s.length;o++)r=r.insert(s[o].key,i[o].version);return new Ud(e,n,i,r)}}/**
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
 */class Wx{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class qx{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ge,he;function Gx(t){switch(t){default:return Y();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function l1(t){if(t===void 0)return Kn("GRPC error has no .code"),A.UNKNOWN;switch(t){case Ge.OK:return A.OK;case Ge.CANCELLED:return A.CANCELLED;case Ge.UNKNOWN:return A.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return A.INTERNAL;case Ge.UNAVAILABLE:return A.UNAVAILABLE;case Ge.UNAUTHENTICATED:return A.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case Ge.NOT_FOUND:return A.NOT_FOUND;case Ge.ALREADY_EXISTS:return A.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return A.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case Ge.ABORTED:return A.ABORTED;case Ge.OUT_OF_RANGE:return A.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return A.UNIMPLEMENTED;case Ge.DATA_LOSS:return A.DATA_LOSS;default:return Y()}}(he=Ge||(Ge={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Vd{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ia}static getOrCreateInstance(){return Ia===null&&(Ia=new Vd),Ia}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Ia=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,n,i,r,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const r=new Map;return r.set(e,Zo.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new Pl(Z.min(),r,Zb(),qn(),le())}}class Zo{constructor(e,n,i,r,s){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new Zo(i,n,le(),le(),le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,n,i,r){this.It=e,this.removedTargetIds=n,this.key=i,this.Tt=r}}class u1{constructor(e,n){this.targetId=e,this.Et=n}}class h1{constructor(e,n,i=It.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=r}}class Lg{constructor(){this.At=0,this.Rt=Ug(),this.vt=It.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=le(),n=le(),i=le();return this.Rt.forEach((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:i=i.add(r);break;default:Y()}}),new Zo(this.vt,this.bt,e,n,i)}xt(){this.Pt=!1,this.Rt=Ug()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class Yx{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=qn(),this.qt=Fg(),this.Ut=new Je(be)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const i=this.jt(n);switch(e.state){case 0:this.Wt(n)&&i.Dt(e.resumeToken);break;case 1:i.$t(),i.Vt||i.xt(),i.Dt(e.resumeToken);break;case 2:i.$t(),i.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(i.Mt(),i.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),i.Dt(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((i,r)=>{this.Wt(r)&&n(r)})}Jt(e){var n;const i=e.targetId,r=e.Et.count,s=this.Yt(i);if(s){const o=s.target;if($h(o))if(r===0){const a=new G(o.path);this.Qt(i,a,_t.newNoDocument(a,Z.min()))}else Pe(r===1);else{const a=this.Zt(i);a!==r&&(this.Ht(i),this.Ut=this.Ut.add(i),(n=Vd.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((s,o)=>{const a=this.Yt(o);if(a){if(s.current&&$h(a.target)){const c=new G(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,_t.newNoDocument(c,e))}s.St&&(n.set(o,s.Ct()),s.xt())}});let i=le();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Yt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(i=i.add(s))}),this.Lt.forEach((s,o)=>o.setReadTime(e));const r=new Pl(e,n,this.Ut,this.Lt,i);return this.Lt=qn(),this.qt=Fg(),this.Ut=new Je(be),r}Gt(e,n){if(!this.Wt(e))return;const i=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,i),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,i){if(!this.Wt(e))return;const r=this.jt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),i&&(this.Lt=this.Lt.insert(n,i))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new Lg,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Je(be),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||z("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new Lg),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function Fg(){return new et(G.comparator)}function Ug(){return new et(G.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qx=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Xx=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Jx=(()=>({and:"AND",or:"OR"}))();class Zx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function kc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function f1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function eO(t,e){return kc(t,e.toTimestamp())}function Tn(t){return Pe(!!t),Z.fromTimestamp(function(e){const n=_i(e);return new Qe(n.seconds,n.nanos)}(t))}function $d(t,e){return function(n){return new Fe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function d1(t){const e=Fe.fromString(t);return Pe(y1(e)),e}function zh(t,e){return $d(t.databaseId,e.path)}function Au(t,e){const n=d1(e);if(n.get(1)!==t.databaseId.projectId)throw new q(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(p1(n))}function Hh(t,e){return $d(t.databaseId,e)}function tO(t){const e=d1(t);return e.length===4?Fe.emptyPath():p1(e)}function Kh(t){return new Fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function p1(t){return Pe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Vg(t,e,n){return{name:zh(t,e),fields:n.value.mapValue.fields}}function nO(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=function(c,l){return c.useProto3Json?(Pe(l===void 0||typeof l=="string"),It.fromBase64String(l||"")):(Pe(l===void 0||l instanceof Uint8Array),It.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?A.UNKNOWN:l1(c.code);return new q(l,c.message||"")}(o);n=new h1(i,r,s,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=Au(t,i.document.name),s=Tn(i.document.updateTime),o=i.document.createTime?Tn(i.document.createTime):Z.min(),a=new Vt({mapValue:{fields:i.document.fields}}),c=_t.newFoundDocument(r,s,o,a),l=i.targetIds||[],u=i.removedTargetIds||[];n=new Ka(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=Au(t,i.document),s=i.readTime?Tn(i.readTime):Z.min(),o=_t.newNoDocument(r,s),a=i.removedTargetIds||[];n=new Ka([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=Au(t,i.document),s=i.removedTargetIds||[];n=new Ka([],s,r,null)}else{if(!("filter"in e))return Y();{e.filter;const i=e.filter;i.targetId;const r=i.count||0,s=new qx(r),o=i.targetId;n=new u1(o,s)}}return n}function iO(t,e){let n;if(e instanceof Dl)n={update:Vg(t,e.key,e.value)};else if(e instanceof c1)n={delete:zh(t,e.key)};else if(e instanceof ur)n={update:Vg(t,e.key,e.data),updateMask:fO(e.fieldMask)};else{if(!(e instanceof Hx))return Y();n={verify:zh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(r,s){const o=s.transform;if(o instanceof Sc)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Eo)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof wo)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ac)return{fieldPath:s.field.canonicalString(),increment:o._t};throw Y()}(0,i))),e.precondition.isNone||(n.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:eO(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:Y()}(t,e.precondition)),n}function rO(t,e){return t&&t.length>0?(Pe(e!==void 0),t.map(n=>function(i,r){let s=i.updateTime?Tn(i.updateTime):Tn(r);return s.isEqual(Z.min())&&(s=Tn(r)),new Bx(s,i.transformResults||[])}(n,e))):[]}function sO(t,e){return{documents:[Hh(t,e.path)]}}function oO(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=Hh(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Hh(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(c){if(c.length!==0)return g1(Nn.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const s=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:_r(u.field),direction:lO(u.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(c,l){return c.useProto3Json||Sl(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function aO(t){let e=tO(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){Pe(i===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=function(u){const h=m1(u);return h instanceof Nn&&Hb(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Ks(vr(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Sl(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new Cc(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new Cc(f,h)}(n.endAt)),Ax(e,r,o,s,a,"F",c,l)}function cO(t,e){const n=function(i,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Y()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function m1(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=vr(e.unaryFilter.field);return Xe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=vr(e.unaryFilter.field);return Xe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=vr(e.unaryFilter.field);return Xe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=vr(e.unaryFilter.field);return Xe.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(e){return Xe.create(vr(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Nn.create(e.compositeFilter.filters.map(n=>m1(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return Y()}}(e.compositeFilter.op))}(t):Y()}function lO(t){return Qx[t]}function uO(t){return Xx[t]}function hO(t){return Jx[t]}function _r(t){return{fieldPath:t.canonicalString()}}function vr(t){return bt.fromServerFormat(t.fieldPath)}function g1(t){return t instanceof Xe?function(e){if(e.op==="=="){if(Ag(e.value))return{unaryFilter:{field:_r(e.field),op:"IS_NAN"}};if(Sg(e.value))return{unaryFilter:{field:_r(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ag(e.value))return{unaryFilter:{field:_r(e.field),op:"IS_NOT_NAN"}};if(Sg(e.value))return{unaryFilter:{field:_r(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_r(e.field),op:uO(e.op),value:e.value}}}(t):t instanceof Nn?function(e){const n=e.getFilters().map(i=>g1(i));return n.length===1?n[0]:{compositeFilter:{op:hO(e.op),filters:n}}}(t):Y()}function fO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function y1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,n,i,r,s=Z.min(),o=Z.min(),a=It.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Gi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Gi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dO{constructor(e){this.se=e}}function pO(t){const e=aO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Bh(e,e.limit,"L"):e}/**
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
 */class mO{constructor(){this.He=new gO}addToCollectionParentIndex(e,n){return this.He.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(yi.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(yi.min())}updateCollectionGroup(e,n,i){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class gO{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n]||new Je(Fe.comparator),s=!r.has(i);return this.index[n]=r.add(i),s}has(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n];return r&&r.has(i)}getEntries(e){return(this.index[e]||new Je(Fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new Qr(0)}static bn(){return new Qr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yO{constructor(){this.changes=new gs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,_t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?R.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class _O{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(e,n,i,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=r}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(i=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(i!==null&&qs(i.mutation,r,on.empty(),Qe.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,le()).next(()=>i))}getLocalViewOfDocuments(e,n,i=le()){const r=Bi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,i).next(s=>{let o=Ds();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const i=Bi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,le()))}populateOverlays(e,n,i){const r=[];return i.forEach(s=>{n.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(e,r).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,i,r){let s=qn();const o=Ws(),a=Ws();return n.forEach((c,l)=>{const u=i.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof ur)?s=s.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),qs(u.mutation,l,u.mutation.getFieldMask(),Qe.now())):o.set(l.key,on.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new _O(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const i=Ws();let r=new et((o,a)=>o-a),s=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=i.get(c)||on.empty();u=a.applyToLocalView(l,u),i.set(c,u);const h=(r.get(a.batchId)||le()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Jb();u.forEach(f=>{if(!s.has(f)){const d=o1(n.get(f),i.get(f));d!==null&&h.set(f,d),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return R.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i){return function(r){return G.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Nx(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i):this.getDocumentsMatchingCollectionQuery(e,n,i)}getNextDocuments(e,n,i,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,r).next(s=>{const o=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,r-s.size):R.resolve(Bi());let a=-1,c=s;return o.next(l=>R.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?R.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,c,l,le())).next(u=>({batchId:a,changes:Xb(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(i=>{let r=Ds();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,i){const r=n.collectionGroup;let s=Ds();return this.indexManager.getCollectionParents(e,r).next(o=>R.forEach(o,a=>{const c=function(l,u){return new Al(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,i).next(l=>{l.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(s=>(r=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,r))).next(s=>{r.forEach((a,c)=>{const l=c.getKey();s.get(l)===null&&(s=s.insert(l,_t.newInvalidDocument(l)))});let o=Ds();return s.forEach((a,c)=>{const l=r.get(a);l!==void 0&&qs(l.mutation,c,on.empty(),Qe.now()),Nl(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class bO{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return R.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var i;return this.Zn.set(n.id,{id:(i=n).id,version:i.version,createTime:Tn(i.createTime)}),R.resolve()}getNamedQuery(e,n){return R.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(i){return{name:i.name,query:pO(i.bundledQuery),readTime:Tn(i.readTime)}}(n)),R.resolve()}}/**
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
 */class EO{constructor(){this.overlays=new et(G.comparator),this.ts=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const i=Bi();return R.forEach(n,r=>this.getOverlay(e,r).next(s=>{s!==null&&i.set(r,s)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((r,s)=>{this.re(e,n,s)}),R.resolve()}removeOverlaysForBatchId(e,n,i){const r=this.ts.get(i);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.ts.delete(i)),R.resolve()}getOverlaysForCollection(e,n,i){const r=Bi(),s=n.length+1,o=new G(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&c.largestBatchId>i&&r.set(c.getKey(),c)}return R.resolve(r)}getOverlaysForCollectionGroup(e,n,i,r){let s=new et((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>i){let u=s.get(l.largestBatchId);u===null&&(u=Bi(),s=s.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Bi(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return R.resolve(a)}re(e,n,i){const r=this.overlays.get(i.key);if(r!==null){const o=this.ts.get(r.largestBatchId).delete(i.key);this.ts.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new Wx(n,i));let s=this.ts.get(n);s===void 0&&(s=le(),this.ts.set(n,s)),this.ts.set(n,s.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(){this.es=new Je(it.ns),this.ss=new Je(it.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const i=new it(e,n);this.es=this.es.add(i),this.ss=this.ss.add(i)}os(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.us(new it(e,n))}cs(e,n){e.forEach(i=>this.removeReference(i,n))}hs(e){const n=new G(new Fe([])),i=new it(n,e),r=new it(n,e+1),s=[];return this.ss.forEachInRange([i,r],o=>{this.us(o),s.push(o.key)}),s}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new G(new Fe([])),i=new it(n,e),r=new it(n,e+1);let s=le();return this.ss.forEachInRange([i,r],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new it(e,0),i=this.es.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class it{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return G.comparator(e.key,n.key)||be(e.ds,n.ds)}static rs(e,n){return be(e.ds,n.ds)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new Je(it.ns)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,r){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Kx(s,n,i,r);this.mutationQueue.push(o);for(const a of r)this._s=this._s.add(new it(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,r=this.ys(i),s=r<0?0:r;return R.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new it(n,0),r=new it(n,Number.POSITIVE_INFINITY),s=[];return this._s.forEachInRange([i,r],o=>{const a=this.gs(o.ds);s.push(a)}),R.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new Je(be);return n.forEach(r=>{const s=new it(r,0),o=new it(r,Number.POSITIVE_INFINITY);this._s.forEachInRange([s,o],a=>{i=i.add(a.ds)})}),R.resolve(this.ps(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,r=i.length+1;let s=i;G.isDocumentKey(s)||(s=s.child(""));const o=new it(new G(s),0);let a=new Je(be);return this._s.forEachWhile(c=>{const l=c.key.path;return!!i.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.ds)),!0)},o),R.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(i=>{const r=this.gs(i);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Pe(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this._s;return R.forEach(n.mutations,r=>{const s=new it(r.key,n.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this._s=i})}En(e){}containsKey(e,n){const i=new it(n,0),r=this._s.firstAfterOrEqual(i);return R.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TO{constructor(e){this.Ts=e,this.docs=new et(G.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,r=this.docs.get(i),s=r?r.size:0,o=this.Ts(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return R.resolve(i?i.document.mutableCopy():_t.newInvalidDocument(n))}getEntries(e,n){let i=qn();return n.forEach(r=>{const s=this.docs.get(r);i=i.insert(r,s?s.document.mutableCopy():_t.newInvalidDocument(r))}),R.resolve(i)}getDocumentsMatchingQuery(e,n,i,r){let s=qn();const o=n.path,a=new G(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||lx(cx(u),i)<=0||(r.has(u.key)||Nl(n,u))&&(s=s.insert(u.key,u.mutableCopy()))}return R.resolve(s)}getAllFromCollectionGroup(e,n,i,r){Y()}Es(e,n){return R.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new IO(this)}getSize(e){return R.resolve(this.size)}}class IO extends yO{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((i,r)=>{r.isValidDocument()?n.push(this.Jn.addEntry(e,r)):this.Jn.removeEntry(i)}),R.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CO{constructor(e){this.persistence=e,this.As=new gs(n=>Ld(n),Fd),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Bd,this.targetCount=0,this.bs=Qr.vn()}forEachTarget(e,n){return this.As.forEach((i,r)=>n(r)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Rs&&(this.Rs=n),R.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new Qr(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.Sn(n),R.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,i){let r=0;const s=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.As.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),R.waitFor(s).next(()=>r)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const i=this.As.get(n)||null;return R.resolve(i)}addMatchingKeys(e,n,i){return this.vs.os(n,i),R.resolve()}removeMatchingKeys(e,n,i){this.vs.cs(n,i);const r=this.persistence.referenceDelegate,s=[];return r&&n.forEach(o=>{s.push(r.markPotentiallyOrphaned(e,o))}),R.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),R.resolve()}getMatchingKeysForTargetId(e,n){const i=this.vs.fs(n);return R.resolve(i)}containsKey(e,n){return R.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SO{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new Pd(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new CO(this),this.indexManager=new mO,this.remoteDocumentCache=function(i){return new TO(i)}(i=>this.referenceDelegate.Cs(i)),this.serializer=new dO(n),this.xs=new bO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new EO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.Ps[e.toKey()];return i||(i=new wO(n,this.referenceDelegate),this.Ps[e.toKey()]=i),i}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,i){z("MemoryPersistence","Starting transaction:",e);const r=new AO(this.Vs.next());return this.referenceDelegate.Ns(),i(r).next(s=>this.referenceDelegate.ks(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Os(e,n){return R.or(Object.values(this.Ps).map(i=>()=>i.containsKey(e,n)))}}class AO extends hx{constructor(e){super(),this.currentSequenceNumber=e}}class jd{constructor(e){this.persistence=e,this.$s=new Bd,this.Ms=null}static Fs(e){return new jd(e)}get Bs(){if(this.Ms)return this.Ms;throw Y()}addReference(e,n,i){return this.$s.addReference(i,n),this.Bs.delete(i.toString()),R.resolve()}removeReference(e,n,i){return this.$s.removeReference(i,n),this.Bs.add(i.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),R.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(r=>this.Bs.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(s=>this.Bs.add(s.toString()))}).next(()=>i.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Bs,i=>{const r=G.fromPath(i);return this.Ls(e,r).next(s=>{s||n.removeEntry(r,Z.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(i=>{i?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return R.or([()=>R.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,n,i,r){this.targetId=e,this.fromCache=n,this.Vi=i,this.Si=r}static Di(e,n){let i=le(),r=le();for(const s of n.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new zd(e,n.fromCache,i,r)}}/**
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
 */class kO{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,i,r){return this.Ni(e,n).next(s=>s||this.ki(e,n,r,i)).next(s=>s||this.Oi(e,n))}Ni(e,n){if(xg(n))return R.resolve(null);let i=Wn(n);return this.indexManager.getIndexType(e,i).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Bh(n,null,"F"),i=Wn(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(s=>{const o=le(...s);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(c=>{const l=this.$i(n,a);return this.Mi(n,l,o,c.readTime)?this.Ni(e,Bh(n,null,"F")):this.Fi(e,l,n,c)}))})))}ki(e,n,i,r){return xg(n)||r.isEqual(Z.min())?this.Oi(e,n):this.xi.getDocuments(e,i).next(s=>{const o=this.$i(n,s);return this.Mi(n,o,i,r)?this.Oi(e,n):(wg()<=ge.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),jh(n)),this.Fi(e,o,n,ax(r,-1)))})}$i(e,n){let i=new Je(Yb(e));return n.forEach((r,s)=>{Nl(e,s)&&(i=i.add(s))}),i}Mi(e,n,i,r){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Oi(e,n){return wg()<=ge.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",jh(n)),this.xi.getDocumentsMatchingQuery(e,n,yi.min())}Fi(e,n,i,r){return this.xi.getDocumentsMatchingQuery(e,i,r).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class RO{constructor(e,n,i,r){this.persistence=e,this.Bi=n,this.serializer=r,this.Li=new et(be),this.qi=new gs(s=>Ld(s),Fd),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(i)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new vO(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function NO(t,e,n,i){return new RO(t,e,n,i)}async function _1(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let r;return n.mutationQueue.getAllMutationBatches(i).next(s=>(r=s,n.Gi(e),n.mutationQueue.getAllMutationBatches(i))).next(s=>{const o=[],a=[];let c=le();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of s){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(i,c).next(l=>({Qi:l,removedBatchIds:o,addedBatchIds:a}))})})}function xO(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const r=e.batch.keys(),s=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=R.resolve();return h.forEach(d=>{f=f.next(()=>l.getEntry(a,d)).next(m=>{const y=c.docVersions.get(d);Pe(y!==null),m.version.compareTo(y)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,i,e,s).next(()=>s.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(o){let a=le();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(i,r))})}function v1(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function OO(t,e){const n=ne(t),i=e.snapshotVersion;let r=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});r=n.Li;const a=[];e.targetChanges.forEach((u,h)=>{const f=r.get(h);if(!f)return;a.push(n.Ds.removeMatchingKeys(s,u.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(s,u.addedDocuments,h)));let d=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?d=d.withResumeToken(It.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,i)),r=r.insert(h,d),function(m,y,b){return m.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(f,d,u)&&a.push(n.Ds.updateTargetData(s,d))});let c=qn(),l=le();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(DO(s,o,e.documentUpdates).next(u=>{c=u.zi,l=u.ji})),!i.isEqual(Z.min())){const u=n.Ds.getLastRemoteSnapshotVersion(s).next(h=>n.Ds.setTargetsMetadata(s,s.currentSequenceNumber,i));a.push(u)}return R.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,l)).next(()=>c)}).then(s=>(n.Li=r,s))}function DO(t,e,n){let i=le(),r=le();return n.forEach(s=>i=i.add(s)),e.getEntries(t,i).next(s=>{let o=qn();return n.forEach((a,c)=>{const l=s.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(Z.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):z("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{zi:o,ji:r}})}function PO(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function MO(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let r;return n.Ds.getTargetData(i,e).next(s=>s?(r=s,R.resolve(r)):n.Ds.allocateTargetId(i).next(o=>(r=new Gi(e,o,0,i.currentSequenceNumber),n.Ds.addTargetData(i,r).next(()=>r))))}).then(i=>{const r=n.Li.get(i.targetId);return(r===null||i.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Li=n.Li.insert(i.targetId,i),n.qi.set(e,i.targetId)),i})}async function Wh(t,e,n){const i=ne(t),r=i.Li.get(e),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,o=>i.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Jo(o))throw o;z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.Li=i.Li.remove(e),i.qi.delete(r.target)}function $g(t,e,n){const i=ne(t);let r=Z.min(),s=le();return i.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=ne(a),h=u.qi.get(l);return h!==void 0?R.resolve(u.Li.get(h)):u.Ds.getTargetData(c,l)}(i,o,Wn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,i.Ds.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>i.Bi.getDocumentsMatchingQuery(o,e,n?r:Z.min(),n?s:le())).next(a=>(LO(i,xx(e),a),{documents:a,Wi:s})))}function LO(t,e,n){let i=t.Ui.get(e)||Z.min();n.forEach((r,s)=>{s.readTime.compareTo(i)>0&&(i=s.readTime)}),t.Ui.set(e,i)}class Bg{constructor(){this.activeTargetIds=Zb()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class FO{constructor(){this.Br=new Bg,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,i){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new Bg,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class UO{qr(e){}shutdown(){}}/**
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
 */class jg{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ca=null;function ku(){return Ca===null?Ca=268435456+Math.round(2147483648*Math.random()):Ca++,"0x"+Ca.toString(16)}/**
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
 */const VO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection";class BO extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,i,r,s){const o=ku(),a=this.ao(e,n);z("RestConnection",`Sending RPC '${e}' ${o}:`,a,i);const c={};return this.ho(c,r,s),this.lo(e,a,c,i).then(l=>(z("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw Tc("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",i),l})}fo(e,n,i,r,s,o){return this.co(e,n,i,r,s)}ho(e,n,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+ms,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,s)=>e[s]=r),i&&i.headers.forEach((r,s)=>e[s]=r)}ao(e,n){const i=VO[e];return`${this.ro}/v1/${n}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,i,r){const s=ku();return new Promise((o,a)=>{const c=new XN;c.setWithCredentials(!0),c.listenOnce(GN.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Su.NO_ERROR:const u=c.getResponseJson();z(pt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(u)),o(u);break;case Su.TIMEOUT:z(pt,`RPC '${e}' ${s} timed out`),a(new q(A.DEADLINE_EXCEEDED,"Request time out"));break;case Su.HTTP_ERROR:const h=c.getStatus();if(z(pt,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const m=function(y){const b=y.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(b)>=0?b:A.UNKNOWN}(d.status);a(new q(m,d.message))}else a(new q(A.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new q(A.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{z(pt,`RPC '${e}' ${s} completed.`)}});const l=JSON.stringify(r);z(pt,`RPC '${e}' ${s} sending request:`,r),c.send(n,"POST",l,i,15)})}wo(e,n,i){const r=ku(),s=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=WN(),a=qN(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new QN({})),this.ho(c.initMessageHeaders,n,i),c.encodeInitMessageHeaders=!0;const l=s.join("");z(pt,`Creating RPC '${e}' stream ${r}: ${l}`,c);const u=o.createWebChannel(l,c);let h=!1,f=!1;const d=new $O({Wr:y=>{f?z(pt,`Not sending because RPC '${e}' stream ${r} is closed:`,y):(h||(z(pt,`Opening RPC '${e}' stream ${r} transport.`),u.open(),h=!0),z(pt,`RPC '${e}' stream ${r} sending:`,y),u.send(y))},Hr:()=>u.close()}),m=(y,b,_)=>{y.listen(b,v=>{try{_(v)}catch(E){setTimeout(()=>{throw E},0)}})};return m(u,Ea.EventType.OPEN,()=>{f||z(pt,`RPC '${e}' stream ${r} transport opened.`)}),m(u,Ea.EventType.CLOSE,()=>{f||(f=!0,z(pt,`RPC '${e}' stream ${r} transport closed`),d.so())}),m(u,Ea.EventType.ERROR,y=>{f||(f=!0,Tc(pt,`RPC '${e}' stream ${r} transport errored:`,y),d.so(new q(A.UNAVAILABLE,"The operation could not be completed")))}),m(u,Ea.EventType.MESSAGE,y=>{var b;if(!f){const _=y.data[0];Pe(!!_);const v=_,E=v.error||((b=v[0])===null||b===void 0?void 0:b.error);if(E){z(pt,`RPC '${e}' stream ${r} received error:`,E);const I=E.status;let F=function(se){const _e=Ge[se];if(_e!==void 0)return l1(_e)}(I),Q=E.message;F===void 0&&(F=A.INTERNAL,Q="Unknown error status: "+I+" with message "+E.message),f=!0,d.so(new q(F,Q)),u.close()}else z(pt,`RPC '${e}' stream ${r} received:`,_),d.io(_)}}),m(a,YN.STAT_EVENT,y=>{y.stat===bg.PROXY?z(pt,`RPC '${e}' stream ${r} detected buffering proxy`):y.stat===bg.NOPROXY&&z(pt,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{d.no()},0),d}}function Ru(){return typeof document<"u"?document:null}/**
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
 */function Ml(t){return new Zx(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(e,n,i=1e3,r=1.5,s=6e4){this.Ws=e,this.timerId=n,this._o=i,this.mo=r,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),i=Math.max(0,Date.now()-this.To),r=Math.max(0,n-i);r>0&&z("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,r,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(e,n,i,r,s,o,a,c){this.Ws=e,this.bo=i,this.Po=r,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new b1(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(Kn(n.toString()),Kn("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,r])=>{this.Vo===n&&this.Ko(i,r)},i=>{e(()=>{const r=new q(A.UNKNOWN,"Fetching auth token failed: "+i.message);return this.Go(r)})})}Ko(e,n){const i=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{i(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(r=>{i(()=>this.Go(r))}),this.stream.onMessage(r=>{i(()=>this.onMessage(r))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class jO extends E1{constructor(e,n,i,r,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,r,o),this.serializer=s}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=nO(this.serializer,e),i=function(r){if(!("targetChange"in r))return Z.min();const s=r.targetChange;return s.targetIds&&s.targetIds.length?Z.min():s.readTime?Tn(s.readTime):Z.min()}(e);return this.listener.zo(n,i)}jo(e){const n={};n.database=Kh(this.serializer),n.addTarget=function(r,s){let o;const a=s.target;return o=$h(a)?{documents:sO(r,a)}:{query:oO(r,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=f1(r,s.resumeToken):s.snapshotVersion.compareTo(Z.min())>0&&(o.readTime=kc(r,s.snapshotVersion.toTimestamp())),o}(this.serializer,e);const i=cO(this.serializer,e);i&&(n.labels=i),this.Fo(n)}Wo(e){const n={};n.database=Kh(this.serializer),n.removeTarget=e,this.Fo(n)}}class zO extends E1{constructor(e,n,i,r,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,r,o),this.serializer=s,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Pe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=rO(e.writeResults,e.commitTime),i=Tn(e.commitTime);return this.listener.Zo(i,n)}return Pe(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=Kh(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>iO(this.serializer,i))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HO extends class{}{constructor(e,n,i,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=r,this.eu=!1}nu(){if(this.eu)throw new q(A.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.connection.co(e,n,i,r,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new q(A.UNKNOWN,r.toString())})}fo(e,n,i,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.fo(e,n,i,s,o,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(A.UNKNOWN,s.toString())})}terminate(){this.eu=!0}}class KO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(Kn(n),this.ru=!1):z("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WO{constructor(e,n,i,r,s){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=s,this._u.qr(o=>{i.enqueueAndForget(async()=>{hr(this)&&(z("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=ne(a);c.du.add(4),await ea(c),c.mu.set("Unknown"),c.du.delete(4),await Ll(c)}(this))})}),this.mu=new KO(i,r)}}async function Ll(t){if(hr(t))for(const e of t.wu)await e(!0)}async function ea(t){for(const e of t.wu)await e(!1)}function w1(t,e){const n=ne(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),Wd(n)?Kd(n):ys(n).No()&&Hd(n,e))}function T1(t,e){const n=ne(t),i=ys(n);n.fu.delete(e),i.No()&&I1(n,e),n.fu.size===0&&(i.No()?i.$o():hr(n)&&n.mu.set("Unknown"))}function Hd(t,e){t.gu.Ot(e.targetId),ys(t).jo(e)}function I1(t,e){t.gu.Ot(e),ys(t).Wo(e)}function Kd(t){t.gu=new Yx({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),ys(t).start(),t.mu.ou()}function Wd(t){return hr(t)&&!ys(t).xo()&&t.fu.size>0}function hr(t){return ne(t).du.size===0}function C1(t){t.gu=void 0}async function qO(t){t.fu.forEach((e,n)=>{Hd(t,e)})}async function GO(t,e){C1(t),Wd(t)?(t.mu.au(e),Kd(t)):t.mu.set("Unknown")}async function YO(t,e,n){if(t.mu.set("Online"),e instanceof h1&&e.state===2&&e.cause)try{await async function(i,r){const s=r.cause;for(const o of r.targetIds)i.fu.has(o)&&(await i.remoteSyncer.rejectListen(o,s),i.fu.delete(o),i.gu.removeTarget(o))}(t,e)}catch(i){z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Rc(t,i)}else if(e instanceof Ka?t.gu.Kt(e):e instanceof u1?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(Z.min()))try{const i=await v1(t.localStore);n.compareTo(i)>=0&&await function(r,s){const o=r.gu.Xt(s);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.fu.get(c);l&&r.fu.set(c,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const c=r.fu.get(a);if(!c)return;r.fu.set(a,c.withResumeToken(It.EMPTY_BYTE_STRING,c.snapshotVersion)),I1(r,a);const l=new Gi(c.target,a,1,c.sequenceNumber);Hd(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(i){z("RemoteStore","Failed to raise snapshot:",i),await Rc(t,i)}}async function Rc(t,e,n){if(!Jo(e))throw e;t.du.add(1),await ea(t),t.mu.set("Offline"),n||(n=()=>v1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{z("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await Ll(t)})}function S1(t,e){return e().catch(n=>Rc(t,n,e))}async function Fl(t){const e=ne(t),n=vi(e);let i=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;QO(e);)try{const r=await PO(e.localStore,i);if(r===null){e.lu.length===0&&n.$o();break}i=r.batchId,XO(e,r)}catch(r){await Rc(e,r)}A1(e)&&k1(e)}function QO(t){return hr(t)&&t.lu.length<10}function XO(t,e){t.lu.push(e);const n=vi(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function A1(t){return hr(t)&&!vi(t).xo()&&t.lu.length>0}function k1(t){vi(t).start()}async function JO(t){vi(t).tu()}async function ZO(t){const e=vi(t);for(const n of t.lu)e.Yo(n.mutations)}async function eD(t,e,n){const i=t.lu.shift(),r=Ud.from(i,e,n);await S1(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Fl(t)}async function tD(t,e){e&&vi(t).Jo&&await async function(n,i){if(r=i.code,Gx(r)&&r!==A.ABORTED){const s=n.lu.shift();vi(n).Oo(),await S1(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Fl(n)}var r}(t,e),A1(t)&&k1(t)}async function zg(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),z("RemoteStore","RemoteStore received new credentials");const i=hr(n);n.du.add(3),await ea(n),i&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await Ll(n)}async function nD(t,e){const n=ne(t);e?(n.du.delete(2),await Ll(n)):e||(n.du.add(2),await ea(n),n.mu.set("Unknown"))}function ys(t){return t.yu||(t.yu=function(e,n,i){const r=ne(e);return r.nu(),new jO(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{Jr:qO.bind(null,t),Zr:GO.bind(null,t),zo:YO.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),Wd(t)?Kd(t):t.mu.set("Unknown")):(await t.yu.stop(),C1(t))})),t.yu}function vi(t){return t.pu||(t.pu=function(e,n,i){const r=ne(e);return r.nu(),new zO(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{Jr:JO.bind(null,t),Zr:tD.bind(null,t),Xo:ZO.bind(null,t),Zo:eD.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await Fl(t)):(await t.pu.stop(),t.lu.length>0&&(z("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e,n,i,r,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new $n,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,r,s){const o=Date.now()+i,a=new qd(e,n,o,r,s);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gd(t,e){if(Kn("AsyncQueue",`${e}: ${t}`),Jo(t))return new q(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e){this.comparator=e?(n,i)=>e(n,i)||G.comparator(n.key,i.key):(n,i)=>G.comparator(n.key,i.key),this.keyedMap=Ds(),this.sortedSet=new et(this.comparator)}static emptySet(e){return new Lr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Lr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new Lr;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(){this.Iu=new et(G.comparator)}track(e){const n=e.doc.key,i=this.Iu.get(n);i?e.type!==0&&i.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&i.type!==1?this.Iu=this.Iu.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Iu=this.Iu.remove(n):e.type===1&&i.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):Y():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,i)=>{e.push(i)}),e}}class Xr{constructor(e,n,i,r,s,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,i,r,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Xr(e,n,Lr.emptySet(n),o,i,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Rl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==i[r].type||!n[r].doc.isEqual(i[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{constructor(){this.Eu=void 0,this.listeners=[]}}class rD{constructor(){this.queries=new gs(e=>Gb(e),Rl),this.onlineState="Unknown",this.Au=new Set}}async function Yd(t,e){const n=ne(t),i=e.query;let r=!1,s=n.queries.get(i);if(s||(r=!0,s=new iD),r)try{s.Eu=await n.onListen(i)}catch(o){const a=Gd(o,`Initialization of query '${jh(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.listeners.push(e),e.Ru(n.onlineState),s.Eu&&e.vu(s.Eu)&&Xd(n)}async function Qd(t,e){const n=ne(t),i=e.query;let r=!1;const s=n.queries.get(i);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),r=s.listeners.length===0)}if(r)return n.queries.delete(i),n.onUnlisten(i)}function sD(t,e){const n=ne(t);let i=!1;for(const r of e){const s=r.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.vu(r)&&(i=!0);o.Eu=r}}i&&Xd(n)}function oD(t,e,n){const i=ne(t),r=i.queries.get(e);if(r)for(const s of r.listeners)s.onError(n);i.queries.delete(e)}function Xd(t){t.Au.forEach(e=>{e.next()})}class Jd{constructor(e,n,i){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=i||{}}vu(e){if(!this.options.includeMetadataChanges){const i=[];for(const r of e.docChanges)r.type!==3&&i.push(r);e=new Xr(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.xu||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=Xr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e){this.key=e}}class N1{constructor(e){this.key=e}}class aD{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=le(),this.mutatedKeys=le(),this.Ku=Yb(e),this.Gu=new Lr(this.Ku)}get Qu(){return this.Lu}zu(e,n){const i=n?n.ju:new Hg,r=n?n.Gu:this.Gu;let s=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const f=r.get(u),d=Nl(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),y=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let b=!1;f&&d?f.data.isEqual(d.data)?m!==y&&(i.track({type:3,doc:d}),b=!0):this.Wu(f,d)||(i.track({type:2,doc:d}),b=!0,(c&&this.Ku(d,c)>0||l&&this.Ku(d,l)<0)&&(a=!0)):!f&&d?(i.track({type:0,doc:d}),b=!0):f&&!d&&(i.track({type:1,doc:f}),b=!0,(c||l)&&(a=!0)),b&&(d?(o=o.add(d),s=y?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),i.track({type:1,doc:u})}return{Gu:o,ju:i,Mi:a,mutatedKeys:s}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const r=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const s=e.ju.Tu();s.sort((l,u)=>function(h,f){const d=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return d(h)-d(f)}(l.type,u.type)||this.Ku(l.doc,u.doc)),this.Hu(i);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,s.length!==0||c?{snapshot:new Xr(this.query,e.Gu,r,s,e.mutatedKeys,a===0,c,!1,!!i&&i.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Hg,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=le(),this.Gu.forEach(i=>{this.Zu(i.key)&&(this.Uu=this.Uu.add(i.key))});const n=[];return e.forEach(i=>{this.Uu.has(i)||n.push(new N1(i))}),this.Uu.forEach(i=>{e.has(i)||n.push(new R1(i))}),n}Xu(e){this.Lu=e.Wi,this.Uu=le();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return Xr.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class cD{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class lD{constructor(e){this.key=e,this.ec=!1}}class uD{constructor(e,n,i,r,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new gs(a=>Gb(a),Rl),this.ic=new Map,this.rc=new Set,this.oc=new et(G.comparator),this.uc=new Map,this.cc=new Bd,this.ac={},this.hc=new Map,this.lc=Qr.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function hD(t,e){const n=ED(t);let i,r;const s=n.sc.get(e);if(s)i=s.targetId,n.sharedClientState.addLocalQueryTarget(i),r=s.view.tc();else{const o=await MO(n.localStore,Wn(e));n.isPrimaryClient&&w1(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,r=await fD(n,e,i,a==="current",o.resumeToken)}return r}async function fD(t,e,n,i,r){t.dc=(h,f,d)=>async function(m,y,b,_){let v=y.view.zu(b);v.Mi&&(v=await $g(m.localStore,y.query,!1).then(({documents:F})=>y.view.zu(F,v)));const E=_&&_.targetChanges.get(y.targetId),I=y.view.applyChanges(v,m.isPrimaryClient,E);return Wg(m,y.targetId,I.Yu),I.snapshot}(t,h,f,d);const s=await $g(t.localStore,e,!0),o=new aD(e,s.Wi),a=o.zu(s.documents),c=Zo.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);Wg(t,n,l.Yu);const u=new cD(e,n,o);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),l.snapshot}async function dD(t,e){const n=ne(t),i=n.sc.get(e),r=n.ic.get(i.targetId);if(r.length>1)return n.ic.set(i.targetId,r.filter(s=>!Rl(s,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Wh(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),T1(n.remoteStore,i.targetId),qh(n,i.targetId)}).catch(Xo)):(qh(n,i.targetId),await Wh(n.localStore,i.targetId,!0))}async function pD(t,e,n){const i=wD(t);try{const r=await function(s,o){const a=ne(s),c=Qe.now(),l=o.reduce((f,d)=>f.add(d.key),le());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=qn(),m=le();return a.Ki.getEntries(f,l).next(y=>{d=y,d.forEach((b,_)=>{_.isValidDocument()||(m=m.add(b))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(y=>{u=y;const b=[];for(const _ of o){const v=zx(_,u.get(_.key).overlayedDocument);v!=null&&b.push(new ur(_.key,v,Bb(v.value.mapValue),Bn.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,b,o)}).next(y=>{h=y;const b=y.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(f,y.batchId,b)})}).then(()=>({batchId:h.batchId,changes:Xb(u)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(r.batchId),function(s,o,a){let c=s.ac[s.currentUser.toKey()];c||(c=new et(be)),c=c.insert(o,a),s.ac[s.currentUser.toKey()]=c}(i,r.batchId,n),await ta(i,r.changes),await Fl(i.remoteStore)}catch(r){const s=Gd(r,"Failed to persist write");n.reject(s)}}async function x1(t,e){const n=ne(t);try{const i=await OO(n.localStore,e);e.targetChanges.forEach((r,s)=>{const o=n.uc.get(s);o&&(Pe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ec=!0:r.modifiedDocuments.size>0?Pe(o.ec):r.removedDocuments.size>0&&(Pe(o.ec),o.ec=!1))}),await ta(n,i,e)}catch(i){await Xo(i)}}function Kg(t,e,n){const i=ne(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const r=[];i.sc.forEach((s,o)=>{const a=o.view.Ru(e);a.snapshot&&r.push(a.snapshot)}),function(s,o){const a=ne(s);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Ru(o)&&(c=!0)}),c&&Xd(a)}(i.eventManager,e),r.length&&i.nc.zo(r),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function mD(t,e,n){const i=ne(t);i.sharedClientState.updateQueryState(e,"rejected",n);const r=i.uc.get(e),s=r&&r.key;if(s){let o=new et(G.comparator);o=o.insert(s,_t.newNoDocument(s,Z.min()));const a=le().add(s),c=new Pl(Z.min(),new Map,new Je(be),o,a);await x1(i,c),i.oc=i.oc.remove(s),i.uc.delete(e),Zd(i)}else await Wh(i.localStore,e,!1).then(()=>qh(i,e,n)).catch(Xo)}async function gD(t,e){const n=ne(t),i=e.batch.batchId;try{const r=await xO(n.localStore,e);D1(n,i,null),O1(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await ta(n,r)}catch(r){await Xo(r)}}async function yD(t,e,n){const i=ne(t);try{const r=await function(s,o){const a=ne(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(Pe(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(i.localStore,e);D1(i,e,n),O1(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await ta(i,r)}catch(r){await Xo(r)}}function O1(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function D1(t,e,n){const i=ne(t);let r=i.ac[i.currentUser.toKey()];if(r){const s=r.get(e);s&&(n?s.reject(n):s.resolve(),r=r.remove(e)),i.ac[i.currentUser.toKey()]=r}}function qh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.ic.get(e))t.sc.delete(i),n&&t.nc.wc(i,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(i=>{t.cc.containsKey(i)||P1(t,i)})}function P1(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(T1(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Zd(t))}function Wg(t,e,n){for(const i of n)i instanceof R1?(t.cc.addReference(i.key,e),_D(t,i)):i instanceof N1?(z("SyncEngine","Document no longer in limbo: "+i.key),t.cc.removeReference(i.key,e),t.cc.containsKey(i.key)||P1(t,i.key)):Y()}function _D(t,e){const n=e.key,i=n.path.canonicalString();t.oc.get(n)||t.rc.has(i)||(z("SyncEngine","New document in limbo: "+n),t.rc.add(i),Zd(t))}function Zd(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new G(Fe.fromString(e)),i=t.lc.next();t.uc.set(i,new lD(n)),t.oc=t.oc.insert(n,i),w1(t.remoteStore,new Gi(Wn(kl(n.path)),i,2,Pd.ct))}}async function ta(t,e,n){const i=ne(t),r=[],s=[],o=[];i.sc.isEmpty()||(i.sc.forEach((a,c)=>{o.push(i.dc(c,e,n).then(l=>{if((l||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=zd.Di(c.targetId,l);s.push(u)}}))}),await Promise.all(o),i.nc.zo(r),await async function(a,c){const l=ne(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>R.forEach(c,h=>R.forEach(h.Vi,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>R.forEach(h.Si,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!Jo(u))throw u;z("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.Li.get(h),d=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(d);l.Li=l.Li.insert(h,m)}}}(i.localStore,s))}async function vD(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){z("SyncEngine","User change. New user:",e.toKey());const i=await _1(n.localStore,e);n.currentUser=e,function(r,s){r.hc.forEach(o=>{o.forEach(a=>{a.reject(new q(A.CANCELLED,s))})}),r.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await ta(n,i.Qi)}}function bD(t,e){const n=ne(t),i=n.uc.get(e);if(i&&i.ec)return le().add(i.key);{let r=le();const s=n.ic.get(e);if(!s)return r;for(const o of s){const a=n.sc.get(o);r=r.unionWith(a.view.Qu)}return r}}function ED(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=x1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=mD.bind(null,e),e.nc.zo=sD.bind(null,e.eventManager),e.nc.wc=oD.bind(null,e.eventManager),e}function wD(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=gD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=yD.bind(null,e),e}class qg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ml(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return NO(this.persistence,new kO,e.initialUser,this.serializer)}createPersistence(e){return new SO(jd.Fs,this.serializer)}createSharedClientState(e){return new FO}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class TD{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Kg(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=vD.bind(null,this.syncEngine),await nD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new rD}createDatastore(e){const n=Ml(e.databaseInfo.databaseId),i=(r=e.databaseInfo,new BO(r));var r;return function(s,o,a,c){return new HO(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return n=this.localStore,i=this.datastore,r=e.asyncQueue,s=a=>Kg(this.syncEngine,a,0),o=jg.D()?new jg:new UO,new WO(n,i,r,s,o);var n,i,r,s,o}createSyncEngine(e,n){return function(i,r,s,o,a,c,l){const u=new uD(i,r,s,o,a,c);return l&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ne(e);z("RemoteStore","RemoteStore shutting down."),n.du.add(5),await ea(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
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
 */class ep{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):Kn("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{constructor(e,n,i,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=r,this.user=mt.UNAUTHENTICATED,this.clientId=Fb.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async s=>{z("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(i,s=>(z("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $n;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=Gd(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Nu(t,e){t.asyncQueue.verifyOperationInProgress(),z("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async r=>{i.isEqual(r)||(await _1(e.localStore,r),i=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Gg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await SD(t);z("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(r=>zg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>zg(e.remoteStore,s)),t._onlineComponents=e}function CD(t){return t.name==="FirebaseError"?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function SD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){z("FirestoreClient","Using user provided OfflineComponentProvider");try{await Nu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!CD(n))throw n;Tc("Error using user provided cache. Falling back to memory cache: "+n),await Nu(t,new qg)}}else z("FirestoreClient","Using default OfflineComponentProvider"),await Nu(t,new qg);return t._offlineComponents}async function M1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(z("FirestoreClient","Using user provided OnlineComponentProvider"),await Gg(t,t._uninitializedComponentsProvider._online)):(z("FirestoreClient","Using default OnlineComponentProvider"),await Gg(t,new TD))),t._onlineComponents}function AD(t){return M1(t).then(e=>e.syncEngine)}async function Nc(t){const e=await M1(t),n=e.eventManager;return n.onListen=hD.bind(null,e.syncEngine),n.onUnlisten=dD.bind(null,e.syncEngine),n}function kD(t,e,n={}){const i=new $n;return t.asyncQueue.enqueueAndForget(async()=>function(r,s,o,a,c){const l=new ep({next:h=>{s.enqueueAndForget(()=>Qd(r,u));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new q(A.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new q(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Jd(kl(o.path),l,{includeMetadataChanges:!0,xu:!0});return Yd(r,u)}(await Nc(t),t.asyncQueue,e,n,i)),i.promise}function RD(t,e,n={}){const i=new $n;return t.asyncQueue.enqueueAndForget(async()=>function(r,s,o,a,c){const l=new ep({next:h=>{s.enqueueAndForget(()=>Qd(r,u)),h.fromCache&&a.source==="server"?c.reject(new q(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Jd(o,l,{includeMetadataChanges:!0,xu:!0});return Yd(r,u)}(await Nc(t),t.asyncQueue,e,n,i)),i.promise}/**
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
 */const Yg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L1(t,e,n){if(!n)throw new q(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ND(t,e,n,i){if(e===!0&&i===!0)throw new q(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Qg(t){if(!G.isDocumentKey(t))throw new q(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Xg(t){if(G.isDocumentKey(t))throw new q(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function tp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function In(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=tp(t);throw new q(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Jg{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new q(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,ND("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Ul{constructor(e,n,i,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new q(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new q(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jg(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new JN;switch(n.type){case"firstParty":return new nx(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new q(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Yg.get(e);n&&(z("ComponentProvider","Removing Datastore"),Yg.delete(e),n.terminate())}(this),Promise.resolve()}}function xD(t,e,n,i={}){var r;const s=(t=In(t,Ul))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Tc("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let o,a;if(typeof i.mockUserToken=="string")o=i.mockUserToken,a=mt.MOCK_USER;else{o=CI(i.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new q(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new mt(c)}t._authCredentials=new ZN(new Lb(o,a))}}/**
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
 */class Pt{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new di(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pt(this.firestore,e,this._key)}}class na{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new na(this.firestore,e,this._query)}}class di extends na{constructor(e,n,i){super(e,n,kl(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pt(this.firestore,null,new G(e))}withConverter(e){return new di(this.firestore,e,this._path)}}function To(t,e,...n){if(t=Lt(t),L1("collection","path",e),t instanceof Ul){const i=Fe.fromString(e,...n);return Xg(i),new di(t,null,i)}{if(!(t instanceof Pt||t instanceof di))throw new q(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Fe.fromString(e,...n));return Xg(i),new di(t.firestore,null,i)}}function St(t,e,...n){if(t=Lt(t),arguments.length===1&&(e=Fb.A()),L1("doc","path",e),t instanceof Ul){const i=Fe.fromString(e,...n);return Qg(i),new Pt(t,null,new G(i))}{if(!(t instanceof Pt||t instanceof di))throw new q(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Fe.fromString(e,...n));return Qg(i),new Pt(t.firestore,t instanceof di?t.converter:null,new G(i))}}/**
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
 */class OD{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new b1(this,"async_queue_retry"),this.qc=()=>{const n=Ru();n&&z("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=Ru();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=Ru();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new $n;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!Jo(e))throw e;z("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(i=>{this.Mc=i,this.Fc=!1;const r=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(i);throw Kn("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.Fc=!1,i))));return this.Nc=n,n}enqueueAfterDelay(e,n,i){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const r=qd.createAndSchedule(this,e,n,i,s=>this.Qc(s));return this.$c.push(r),r}Uc(){this.Mc&&Y()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function Zg(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const i=e;for(const r of n)if(r in i&&typeof i[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Jr extends Ul{constructor(e,n,i,r){super(e,n,i,r),this.type="firestore",this._queue=new OD,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||U1(this),this._firestoreClient.terminate()}}function F1(t,e){const n=typeof t=="object"?t:rv(),i=typeof t=="string"?t:e||"(default)",r=DC(n,"firestore").getImmediate({identifier:i});if(!r._initialized){const s=wI("firestore");s&&xD(r,...s)}return r}function Vl(t){return t._firestoreClient||U1(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function U1(t){var e,n,i;const r=t._freezeSettings(),s=function(o,a,c,l){return new mx(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new ID(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=r.cache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
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
 */class Zr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Zr(It.fromBase64String(e))}catch(n){throw new q(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Zr(It.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class $l{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class np{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DD=/^__.*__$/;class V1{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new ur(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function $1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class ip{constructor(e,n,i,r,s,o){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=r,s===void 0&&this.Jc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new ip(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Zc({path:i,ta:!1});return r.ea(e),r}na(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Zc({path:i,ta:!1});return r.Jc(),r}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return xc(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if($1(this.Yc)&&DD.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class PD{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||Ml(e)}ua(e,n,i,r=!1){return new ip({Yc:e,methodName:n,oa:i,path:bt.emptyPath(),ta:!1,ra:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function MD(t){const e=t._freezeSettings(),n=Ml(t._databaseId);return new PD(t._databaseId,!!e.ignoreUndefinedProperties,n)}class jl extends np{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof jl}}function LD(t,e,n,i){const r=t.ua(1,e,n);j1("Data must be an object, but it was:",r,i);const s=[],o=Vt.empty();lr(i,(c,l)=>{const u=rp(e,c,n);l=Lt(l);const h=r.na(u);if(l instanceof jl)s.push(u);else{const f=zl(l,h);f!=null&&(s.push(u),o.set(u,f))}});const a=new on(s);return new V1(o,a,r.fieldTransforms)}function FD(t,e,n,i,r,s){const o=t.ua(1,e,n),a=[ey(e,i,n)],c=[r];if(s.length%2!=0)throw new q(A.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(ey(e,s[f])),c.push(s[f+1]);const l=[],u=Vt.empty();for(let f=a.length-1;f>=0;--f)if(!$D(l,a[f])){const d=a[f];let m=c[f];m=Lt(m);const y=o.na(d);if(m instanceof jl)l.push(d);else{const b=zl(m,y);b!=null&&(l.push(d),u.set(d,b))}}const h=new on(l);return new V1(u,h,o.fieldTransforms)}function zl(t,e){if(B1(t=Lt(t)))return j1("Unsupported field value:",e,t),UD(t,e);if(t instanceof np)return function(n,i){if(!$1(i.Yc))throw i.ia(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.ia(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,i){const r=[];let s=0;for(const o of n){let a=zl(o,i.sa(s));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),s++}return{arrayValue:{values:r}}}(t,e)}return function(n,i){if((n=Lt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Fx(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Qe.fromDate(n);return{timestampValue:kc(i.serializer,r)}}if(n instanceof Qe){const r=new Qe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:kc(i.serializer,r)}}if(n instanceof Bl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Zr)return{bytesValue:f1(i.serializer,n._byteString)};if(n instanceof Pt){const r=i.databaseId,s=n.firestore._databaseId;if(!s.isEqual(r))throw i.ia(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:$d(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i.ia(`Unsupported field value: ${tp(n)}`)}(t,e)}function UD(t,e){const n={};return Ub(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):lr(t,(i,r)=>{const s=zl(r,e.Xc(i));s!=null&&(n[i]=s)}),{mapValue:{fields:n}}}function B1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Qe||t instanceof Bl||t instanceof Zr||t instanceof Pt||t instanceof np)}function j1(t,e,n){if(!B1(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=tp(n);throw i==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+i)}}function ey(t,e,n){if((e=Lt(e))instanceof $l)return e._internalPath;if(typeof e=="string")return rp(t,e);throw xc("Field path arguments must be of type string or ",t,!1,void 0,n)}const VD=new RegExp("[~\\*/\\[\\]]");function rp(t,e,n){if(e.search(VD)>=0)throw xc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new $l(...e.split("."))._internalPath}catch{throw xc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function xc(t,e,n,i,r){const s=i&&!i.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${i}`),o&&(c+=` in document ${r}`),c+=")"),new q(A.INVALID_ARGUMENT,a+t+c)}function $D(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class z1{constructor(e,n,i,r,s){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new BD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(H1("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class BD extends z1{data(){return super.data()}}function H1(t,e){return typeof e=="string"?rp(t,e):e instanceof $l?e._internalPath:e._delegate._internalPath}/**
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
 */function K1(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class jD{convertValue(e,n="none"){switch(nr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(qr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Y()}}convertObject(e,n){const i={};return lr(e.fields,(r,s)=>{i[r]=this.convertValue(s,n)}),i}convertGeoPoint(e){return new Bl(Ye(e.latitude),Ye(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=$b(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(_o(e));default:return null}}convertTimestamp(e){const n=_i(e);return new Qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=Fe.fromString(e);Pe(y1(i));const r=new vo(i.get(1),i.get(3)),s=new G(i.popFirst(5));return r.isEqual(n)||Kn(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */class Ps{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class W1 extends z1{constructor(e,n,i,r,s,o){super(e,n,i,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Wa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(H1("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class Wa extends W1{data(e={}){return super.data(e)}}class q1{constructor(e,n,i,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Ps(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new Wa(this._firestore,this._userDataWriter,i.key,i,new Ps(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(o=>{const a=new Wa(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Ps(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Wa(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Ps(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,l=-1;return o.type!==0&&(c=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),l=s.indexOf(o.doc.key)),{type:zD(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function zD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}/**
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
 */function G1(t){t=In(t,Pt);const e=In(t.firestore,Jr);return kD(Vl(e),t._key).then(n=>Y1(e,t,n))}class sp extends jD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Zr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Pt(this.firestore,null,n)}}function HD(t){t=In(t,na);const e=In(t.firestore,Jr),n=Vl(e),i=new sp(e);return K1(t._query),RD(n,t._query).then(r=>new q1(e,i,t,r))}function Mi(t,e,n,...i){t=In(t,Pt);const r=In(t.firestore,Jr),s=MD(r);let o;return o=typeof(e=Lt(e))=="string"||e instanceof $l?FD(s,"updateDoc",t._key,e,n,i):LD(s,"updateDoc",t._key,e),KD(r,[o.toMutation(t._key,Bn.exists(!0))])}function op(t,...e){var n,i,r;t=Lt(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Zg(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Zg(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,l,u;if(t instanceof Pt)l=In(t.firestore,Jr),u=kl(t._key.path),c={next:h=>{e[o]&&e[o](Y1(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=In(t,na);l=In(h.firestore,Jr),u=h._query;const f=new sp(l);c={next:d=>{e[o]&&e[o](new q1(l,f,h,d))},error:e[o+1],complete:e[o+2]},K1(t._query)}return function(h,f,d,m){const y=new ep(m),b=new Jd(f,y,d);return h.asyncQueue.enqueueAndForget(async()=>Yd(await Nc(h),b)),()=>{y.yc(),h.asyncQueue.enqueueAndForget(async()=>Qd(await Nc(h),b))}}(Vl(l),u,a,c)}function KD(t,e){return function(n,i){const r=new $n;return n.asyncQueue.enqueueAndForget(async()=>pD(await AD(n),i,r)),r.promise}(Vl(t),e)}function Y1(t,e,n){const i=n.docs.get(e._key),r=new sp(t);return new W1(t,r,e._key,i,new Ps(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){ms=n})(ls),An(new fn("firestore",(n,{instanceIdentifier:i,options:r})=>{const s=n.getProvider("app").getImmediate(),o=new Jr(new ex(n.getProvider("auth-internal")),new rx(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new q(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vo(a.options.projectId,c)}(s,i),s);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),zt(Eg,"3.10.1",t),zt(Eg,"3.10.1","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q1="firebasestorage.googleapis.com",WD="storageBucket",qD=2*60*1e3,GD=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends Jn{constructor(e,n,i=0){super(xu(e),`Firebase Storage: ${n} (${xu(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,On.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return xu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var xn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(xn||(xn={}));function xu(t){return"storage/"+t}function YD(){const t="An unknown error occurred, please check the error payload for server response.";return new On(xn.UNKNOWN,t)}function QD(){return new On(xn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function XD(){return new On(xn.CANCELED,"User canceled the upload/download.")}function JD(t){return new On(xn.INVALID_URL,"Invalid URL '"+t+"'.")}function ZD(t){return new On(xn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function ty(t){return new On(xn.INVALID_ARGUMENT,t)}function X1(){return new On(xn.APP_DELETED,"The Firebase app was deleted.")}function e2(t){return new On(xn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=an.makeFromUrl(e,n)}catch{return new an(e,"")}if(i.path==="")return i;throw ZD(e)}static makeFromUrl(e,n){let i=null;const r="([A-Za-z0-9.\\-_]+)";function s(I){I.path.charAt(I.path.length-1)==="/"&&(I.path_=I.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function l(I){I.path_=decodeURIComponent(I.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${r}/o${f}`,"i"),m={bucket:1,path:3},y=n===Q1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",_=new RegExp(`^https?://${y}/${r}/${b}`,"i"),E=[{regex:a,indices:c,postModify:s},{regex:d,indices:m,postModify:l},{regex:_,indices:{bucket:1,path:2},postModify:l}];for(let I=0;I<E.length;I++){const F=E[I],Q=F.regex.exec(e);if(Q){const se=Q[F.indices.bucket];let _e=Q[F.indices.path];_e||(_e=""),i=new an(se,_e),F.postModify(i);break}}if(i==null)throw JD(e);return i}}class t2{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n2(t,e,n){let i=1,r=null,s=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...b){l||(l=!0,e.apply(null,b))}function h(b){r=setTimeout(()=>{r=null,t(d,c())},b)}function f(){s&&clearTimeout(s)}function d(b,..._){if(l){f();return}if(b){f(),u.call(null,b,..._);return}if(c()||o){f(),u.call(null,b,..._);return}i<64&&(i*=2);let E;a===1?(a=2,E=0):E=(i+Math.random())*1e3,h(E)}let m=!1;function y(b){m||(m=!0,f(),!l&&(r!==null?(b||(a=2),clearTimeout(r),h(0)):b||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function i2(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r2(t){return t!==void 0}function ny(t,e,n,i){if(i<e)throw ty(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw ty(`Invalid value for '${t}'. Expected ${n} or less.`)}function s2(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const r=e(i)+"="+e(t[i]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Oc||(Oc={}));/**
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
 */function o2(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||r||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e,n,i,r,s,o,a,c,l,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,m)=>{this.resolve_=d,this.reject_=m,this.start_()})}start_(){const e=(i,r)=>{if(r){i(!1,new Sa(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Oc.NO_ERROR,c=s.getStatus();if(!a||o2(c,this.additionalRetryCodes_)&&this.retry){const u=s.getErrorCode()===Oc.ABORT;i(!1,new Sa(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;i(!0,new Sa(l,s))})},n=(i,r)=>{const s=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());r2(c)?s(c):s()}catch(c){o(c)}else if(a!==null){const c=YD();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?X1():XD();o(c)}else{const c=QD();o(c)}};this.canceled_?n(!1,new Sa(!1,null,!0)):this.backoffId_=n2(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&i2(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Sa{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function c2(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function l2(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function u2(t,e){e&&(t["X-Firebase-GMPID"]=e)}function h2(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function f2(t,e,n,i,r,s,o=!0){const a=s2(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return u2(l,e),c2(l,n),l2(l,s),h2(l,i),new a2(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d2(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function p2(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Dc{constructor(e,n){this._service=e,n instanceof an?this._location=n:this._location=an.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Dc(e,n)}get root(){const e=new an(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return p2(this._location.path)}get storage(){return this._service}get parent(){const e=d2(this._location.path);if(e===null)return null;const n=new an(this._location.bucket,e);return new Dc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw e2(e)}}function iy(t,e){const n=e==null?void 0:e[WD];return n==null?null:an.makeFromBucketSpec(n,t)}class m2{constructor(e,n,i,r,s){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=Q1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=qD,this._maxUploadRetryTime=GD,this._requests=new Set,r!=null?this._bucket=an.makeFromBucketSpec(r,this._host):this._bucket=iy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=an.makeFromBucketSpec(this._url,e):this._bucket=iy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ny("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ny("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Dc(this,e)}_makeRequest(e,n,i,r,s=!0){if(this._deleted)return new t2(X1());{const o=f2(e,this._appId,i,r,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,r).getPromise()}}const ry="@firebase/storage",sy="0.11.2";/**
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
 */const g2="storage";function y2(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new m2(n,i,r,e,ls)}function _2(){An(new fn(g2,y2,"PUBLIC").setMultipleInstances(!0)),zt(ry,sy,""),zt(ry,sy,"esm2017")}_2();const Ou=new WeakMap;function J1(t,e){return Ou.has(e)||Ou.set(e,t||{f:{},r:{},s:{},u:{}}),Ou.get(e)}function v2(t,e,n,i){if(!t)return n;const[r,s]=Z1(t);if(!r)return n;const o=J1(void 0,i)[r]||{},a=e||s;return a&&a in o?o[a]:n}function b2(t,e,n,i){if(!t)return;const[r,s]=Z1(t);if(!r)return;const o=J1(void 0,i)[r],a=e||s;if(a)return n.then(c=>{o[a]=c}).catch(bn),a}function Z1(t){return oA(t)||aA(t)?["f",t.path]:cA(t)?["r",t.toString()]:lA(t)?["s",t.toString()]:[]}const Du=new WeakMap;function E2(t,e,n){const i=jf();Du.has(i)||Du.set(i,new Map);const r=Du.get(i),s=b2(e,n,t,i);return s&&r.set(s,t),s?()=>r.delete(s):bn}const w2={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function Gh(t,e,n,i){if(!sA(t))return[t,{}];const r=[{},{}],s=Object.keys(n).reduce((a,c)=>{const l=n[c];return a[l.path]=l.data(),a},{});function o(a,c,l,u){c=c||{};const[h,f]=u;Object.getOwnPropertyNames(a).forEach(d=>{const m=Object.getOwnPropertyDescriptor(a,d);m&&!m.enumerable&&Object.defineProperty(h,d,m)});for(const d in a){const m=a[d];if(m==null||m instanceof Date||m instanceof Qe||m instanceof Bl)h[d]=m;else if(Hf(m)){const y=l+d;h[d]=y in n?c[d]:m.path,f[y]=m.converter?m:m.withConverter(i.converter)}else if(Array.isArray(m)){h[d]=Array(m.length);for(let y=0;y<m.length;y++){const b=m[y];b&&b.path in s&&(h[d][y]=s[b.path])}o(m,c[d]||h[d],l+d+".",[h[d],f])}else sr(m)?(h[d]={},o(m,c[d],l+d+".",[h[d],f])):h[d]=m}}return o(t,e,"",r),r}const ap={reset:!1,wait:!0,maxRefDepth:2,converter:w2,snapshotOptions:{serverTimestamps:"estimate"}};function Pc(t){for(const e in t)t[e].unsub()}function Yh(t,e,n,i,r,s,o,a,c){const[l,u]=Gh(i.data(t.snapshotOptions),zf(e,n),r,t);s.set(e,n,l),Qh(t,e,n,r,u,s,o,a,c)}function T2({ref:t,target:e,path:n,depth:i,resolve:r,reject:s,ops:o},a){const c=Object.create(null);let l=bn;return a.once?G1(t).then(u=>{u.exists()?Yh(a,e,n,u,c,o,i,r,s):(o.set(e,n,null),r())}).catch(s):l=op(t,u=>{u.exists()?Yh(a,e,n,u,c,o,i,r,s):(o.set(e,n,null),r())},s),()=>{l(),Pc(c)}}function Qh(t,e,n,i,r,s,o,a,c){const l=Object.keys(r);if(Object.keys(i).filter(y=>l.indexOf(y)<0).forEach(y=>{i[y].unsub(),delete i[y]}),!l.length||++o>t.maxRefDepth)return a(n);let h=0;const f=l.length,d=Object.create(null);function m(y){y in d&&++h>=f&&a(n)}l.forEach(y=>{const b=i[y],_=r[y],v=`${n}.${y}`;if(d[v]=!0,b)if(b.path!==_.path)b.unsub();else return;i[y]={data:()=>zf(e,v),unsub:T2({ref:_,target:e,path:v,depth:o,ops:s,resolve:m.bind(null,v),reject:c},t),path:_.path}})}function I2(t,e,n,i,r,s){const o=Object.assign({},ap,s),{snapshotListenOptions:a,snapshotOptions:c,wait:l,once:u}=o,h="value";let f=Dt(l?[]:t.value);l||n.set(t,h,[]);const d=i;let m,y=bn;const b=[],_={added:({newIndex:E,doc:I})=>{b.splice(E,0,Object.create(null));const F=b[E],[Q,se]=Gh(I.data(c),void 0,F,o);n.add(O(f),E,Q),Qh(o,f,`${h}.${E}`,F,se,n,0,i.bind(null,I),r)},modified:({oldIndex:E,newIndex:I,doc:F})=>{const Q=O(f),se=b[E],_e=Q[E],[ze,dt]=Gh(F.data(c),_e,se,o);b.splice(I,0,se),n.remove(Q,E),n.add(Q,I,ze),Qh(o,f,`${h}.${I}`,se,dt,n,0,i,r)},removed:({oldIndex:E})=>{const I=O(f);n.remove(I,E),Pc(b.splice(E,1)[0])}};function v(E){const I=E.docChanges(a);if(!m&&I.length){m=!0;let F=0;const Q=I.length,se=Object.create(null);for(let _e=0;_e<Q;_e++)se[I[_e].doc.id]=!0;i=_e=>{_e&&_e.id in se&&++F>=Q&&(l&&(n.set(t,h,O(f)),f=t),d(O(f)),i=bn)}}I.forEach(F=>{_[F.type](F)}),I.length||(l&&(n.set(t,h,O(f)),f=t),i(O(f)))}return u?HD(e).then(v).catch(r):y=op(e,v,r),E=>{if(y(),E){const I=typeof E=="function"?E():[];n.set(t,h,I)}b.forEach(Pc)}}function C2(t,e,n,i,r,s){const o=Object.assign({},ap,s),a="value",c=Object.create(null);i=uA(i,()=>zf(t,a));let l=bn;function u(h){h.exists()?Yh(o,t,a,h,c,n,0,i,r):(n.set(t,a,null),i(null))}return o.once?G1(e).then(u).catch(r):l=op(e,u,r),h=>{if(l(),h){const f=typeof h=="function"?h():null;n.set(t,a,f)}Pc(c)}}function S2(t,e){let n=bn;const i=Object.assign({},ap,e),r=O(t),s=i.target||Dt();hA()&&(i.once=!0);const o=v2(r,i.ssrKey,s.value,jf());s.value=o;let c=!(wv(r)?(o||[]).length>0:o!==void 0);const l=Dt(!1),u=Dt(),h=__(),f=i_();let d=bn;function m(){let _=O(t);const v=new Promise((E,I)=>{if(n(i.reset),!_)return n=bn,E(null);l.value=c,c=!0,_.converter||(_=_.withConverter(i.converter)),n=(Hf(_)?C2:I2)(s,_,A2,E,I,i)}).catch(E=>(h.value===v&&(u.value=E),Promise.reject(E))).finally(()=>{h.value===v&&(l.value=!1)});h.value=v}let y=bn;ut(t)&&(y=Nr(t,m)),m(),r&&(d=E2(h.value,r,i.ssrKey)),el()&&O_(()=>h.value),f&&iw(b);function b(_=i.reset){y(),d(),n(_)}return Object.defineProperties(s,{error:{get:()=>u},data:{get:()=>s},pending:{get:()=>l},promise:{get:()=>h},stop:{get:()=>b}})}const A2={set:(t,e,n)=>iA(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function qt(t,e){return S2(t,e)}function _s(t){return F1(jf(t))}function k2(t,{firebaseApp:e,modules:n=[]}){t.provide(Ev,e);for(const i of n)t.use(i.bind(null,e))}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const br=typeof window<"u";function R2(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Te=Object.assign;function Pu(t,e){const n={};for(const i in e){const r=e[i];n[i]=dn(r)?r.map(t):t(r)}return n}const Gs=()=>{},dn=Array.isArray,N2=/\/$/,x2=t=>t.replace(N2,"");function Mu(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(i=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),r=t(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=M2(i??e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function O2(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function oy(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function D2(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&es(e.matched[i],n.matched[r])&&eE(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function es(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function eE(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!P2(t[n],e[n]))return!1;return!0}function P2(t,e){return dn(t)?ay(t,e):dn(e)?ay(e,t):t===e}function ay(t,e){return dn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function M2(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/");let r=n.length-1,s,o;for(s=0;s<i.length;s++)if(o=i[s],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(s-(s===i.length?1:0)).join("/")}var Io;(function(t){t.pop="pop",t.push="push"})(Io||(Io={}));var Ys;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ys||(Ys={}));function L2(t){if(!t)if(br){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),x2(t)}const F2=/^[^#]+#/;function U2(t,e){return t.replace(F2,"#")+e}function V2(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Hl=()=>({left:window.pageXOffset,top:window.pageYOffset});function $2(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=V2(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function cy(t,e){return(history.state?history.state.position-e:-1)+t}const Xh=new Map;function B2(t,e){Xh.set(t,e)}function j2(t){const e=Xh.get(t);return Xh.delete(t),e}let z2=()=>location.protocol+"//"+location.host;function tE(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),oy(c,"")}return oy(n,t)+i+r}function H2(t,e,n,i){let r=[],s=[],o=null;const a=({state:f})=>{const d=tE(t,location),m=n.value,y=e.value;let b=0;if(f){if(n.value=d,e.value=f,o&&o===m){o=null;return}b=y?f.position-y.position:0}else i(d);r.forEach(_=>{_(n.value,m,{delta:b,type:Io.pop,direction:b?b>0?Ys.forward:Ys.back:Ys.unknown})})};function c(){o=n.value}function l(f){r.push(f);const d=()=>{const m=r.indexOf(f);m>-1&&r.splice(m,1)};return s.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(Te({},f.state,{scroll:Hl()}),"")}function h(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function ly(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?Hl():null}}function K2(t){const{history:e,location:n}=window,i={value:tE(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:z2()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),r.value=l}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(c,l){const u=Te({},e.state,ly(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});s(c,u,!0),i.value=c}function a(c,l){const u=Te({},r.value,e.state,{forward:c,scroll:Hl()});s(u.current,u,!0);const h=Te({},ly(i.value,c,null),{position:u.position+1},l);s(c,h,!1),i.value=c}return{location:i,state:r,push:a,replace:o}}function W2(t){t=L2(t);const e=K2(t),n=H2(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=Te({location:"",base:t,go:i,createHref:U2.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function q2(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),W2(t)}function G2(t){return typeof t=="string"||t&&typeof t=="object"}function nE(t){return typeof t=="string"||typeof t=="symbol"}const ri={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},iE=Symbol("");var uy;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(uy||(uy={}));function ts(t,e){return Te(new Error,{type:t,[iE]:!0},e)}function Mn(t,e){return t instanceof Error&&iE in t&&(e==null||!!(t.type&e))}const hy="[^/]+?",Y2={sensitive:!1,strict:!1,start:!0,end:!0},Q2=/[.+*?^${}()[\]/\\]/g;function X2(t,e){const n=Te({},Y2,e),i=[];let r=n.start?"^":"";const s=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const f=l[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(Q2,"\\$&"),d+=40;else if(f.type===1){const{value:m,repeatable:y,optional:b,regexp:_}=f;s.push({name:m,repeatable:y,optional:b});const v=_||hy;if(v!==hy){d+=10;try{new RegExp(`(${v})`)}catch(I){throw new Error(`Invalid custom RegExp for param "${m}" (${v}): `+I.message)}}let E=y?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;h||(E=b&&l.length<2?`(?:/${E})`:"/"+E),b&&(E+="?"),r+=E,d+=20,b&&(d+=-8),y&&(d+=-20),v===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(n.strict&&n.end){const l=i.length-1;i[l][i[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",m=s[f-1];h[m.name]=d&&m.repeatable?d.split("/"):d}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:m,repeatable:y,optional:b}=d,_=m in l?l[m]:"";if(dn(_)&&!y)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const v=dn(_)?_.join("/"):_;if(!v)if(b)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=v}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:c}}function J2(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Z2(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=J2(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(fy(i))return 1;if(fy(r))return-1}return r.length-i.length}function fy(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const eP={type:0,value:""},tP=/[a-zA-Z0-9_]/;function nP(t){if(!t)return[[]];if(t==="/")return[[eP]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${l}": ${d}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,c,l="",u="";function h(){l&&(n===0?s.push({type:0,value:l}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=i;break;case 1:c==="("?n=2:tP.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function iP(t,e,n){const i=X2(nP(t.path),n),r=Te(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function rP(t,e){const n=[],i=new Map;e=my({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,h,f){const d=!f,m=sP(u);m.aliasOf=f&&f.record;const y=my(e,u),b=[m];if("alias"in u){const E=typeof u.alias=="string"?[u.alias]:u.alias;for(const I of E)b.push(Te({},m,{components:f?f.record.components:m.components,path:I,aliasOf:f?f.record:m}))}let _,v;for(const E of b){const{path:I}=E;if(h&&I[0]!=="/"){const F=h.record.path,Q=F[F.length-1]==="/"?"":"/";E.path=h.record.path+(I&&Q+I)}if(_=iP(E,h,y),f?f.alias.push(_):(v=v||_,v!==_&&v.alias.push(_),d&&u.name&&!py(_)&&o(u.name)),m.children){const F=m.children;for(let Q=0;Q<F.length;Q++)s(F[Q],_,f&&f.children[Q])}f=f||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&c(_)}return v?()=>{o(v)}:Gs}function o(u){if(nE(u)){const h=i.get(u);h&&(i.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&Z2(u,n[h])>=0&&(u.record.path!==n[h].record.path||!rE(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!py(u)&&i.set(u.record.name,u)}function l(u,h){let f,d={},m,y;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw ts(1,{location:u});y=f.record.name,d=Te(dy(h.params,f.keys.filter(v=>!v.optional).map(v=>v.name)),u.params&&dy(u.params,f.keys.map(v=>v.name))),m=f.stringify(d)}else if("path"in u)m=u.path,f=n.find(v=>v.re.test(m)),f&&(d=f.parse(m),y=f.record.name);else{if(f=h.name?i.get(h.name):n.find(v=>v.re.test(h.path)),!f)throw ts(1,{location:u,currentLocation:h});y=f.record.name,d=Te({},h.params,u.params),m=f.stringify(d)}const b=[];let _=f;for(;_;)b.unshift(_.record),_=_.parent;return{name:y,path:m,params:d,matched:b,meta:aP(b)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function dy(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function sP(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:oP(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function oP(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="boolean"?n:n[i];return e}function py(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function aP(t){return t.reduce((e,n)=>Te(e,n.meta),{})}function my(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function rE(t,e){return e.children.some(n=>n===t||rE(t,n))}const sE=/#/g,cP=/&/g,lP=/\//g,uP=/=/g,hP=/\?/g,oE=/\+/g,fP=/%5B/g,dP=/%5D/g,aE=/%5E/g,pP=/%60/g,cE=/%7B/g,mP=/%7C/g,lE=/%7D/g,gP=/%20/g;function cp(t){return encodeURI(""+t).replace(mP,"|").replace(fP,"[").replace(dP,"]")}function yP(t){return cp(t).replace(cE,"{").replace(lE,"}").replace(aE,"^")}function Jh(t){return cp(t).replace(oE,"%2B").replace(gP,"+").replace(sE,"%23").replace(cP,"%26").replace(pP,"`").replace(cE,"{").replace(lE,"}").replace(aE,"^")}function _P(t){return Jh(t).replace(uP,"%3D")}function vP(t){return cp(t).replace(sE,"%23").replace(hP,"%3F")}function bP(t){return t==null?"":vP(t).replace(lP,"%2F")}function Mc(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function EP(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(oE," "),o=s.indexOf("="),a=Mc(o<0?s:s.slice(0,o)),c=o<0?null:Mc(s.slice(o+1));if(a in e){let l=e[a];dn(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function gy(t){let e="";for(let n in t){const i=t[n];if(n=_P(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(dn(i)?i.map(s=>s&&Jh(s)):[i&&Jh(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function wP(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=dn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const TP=Symbol(""),yy=Symbol(""),Kl=Symbol(""),lp=Symbol(""),Zh=Symbol("");function ks(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function ai(t,e,n,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(ts(4,{from:n,to:e})):h instanceof Error?a(h):G2(h)?a(ts(2,{from:e,to:h})):(s&&i.enterCallbacks[r]===s&&typeof h=="function"&&s.push(h),o())},l=t.call(i&&i.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Lu(t,e,n,i){const r=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(IP(a)){const l=(a.__vccOpts||a)[e];l&&r.push(ai(l,n,i,s,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=R2(l)?l.default:l;s.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&ai(f,n,i,s,o)()}))}}return r}function IP(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function _y(t){const e=jt(Kl),n=jt(lp),i=re(()=>e.resolve(O(t.to))),r=re(()=>{const{matched:c}=i.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(es.bind(null,u));if(f>-1)return f;const d=vy(c[l-2]);return l>1&&vy(u)===d&&h[h.length-1].path!==d?h.findIndex(es.bind(null,c[l-2])):f}),s=re(()=>r.value>-1&&kP(n.params,i.value.params)),o=re(()=>r.value>-1&&r.value===n.matched.length-1&&eE(n.params,i.value.params));function a(c={}){return AP(c)?e[O(t.replace)?"replace":"push"](O(t.to)).catch(Gs):Promise.resolve()}return{route:i,href:re(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const CP=Po({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:_y,setup(t,{slots:e}){const n=xo(_y(t)),{options:i}=jt(Kl),r=re(()=>({[by(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[by(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:nl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),SP=CP;function AP(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function kP(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!dn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function vy(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const by=(t,e,n)=>t??e??n,RP=Po({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=jt(Zh),r=re(()=>t.route||i.value),s=jt(yy,0),o=re(()=>{let l=O(s);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=re(()=>r.value.matched[o.value]);Ua(yy,re(()=>o.value+1)),Ua(TP,a),Ua(Zh,r);const c=Dt();return Nr(()=>[c.value,a.value,t.name],([l,u,h],[f,d,m])=>{u&&(u.instances[h]=l,d&&d!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),l&&u&&(!d||!es(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(y=>y(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return Ey(n.default,{Component:f,route:l});const d=h.props[u],m=d?d===!0?l.params:typeof d=="function"?d(l):d:null,b=nl(f,Te({},m,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Ey(n.default,{Component:b,route:l})||b}}});function Ey(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const up=RP;function NP(t){const e=rP(t.routes,t),n=t.parseQuery||EP,i=t.stringifyQuery||gy,r=t.history,s=ks(),o=ks(),a=ks(),c=__(ri);let l=ri;br&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Pu.bind(null,C=>""+C),h=Pu.bind(null,bP),f=Pu.bind(null,Mc);function d(C,U){let M,H;return nE(C)?(M=e.getRecordMatcher(C),H=U):H=C,e.addRoute(H,M)}function m(C){const U=e.getRecordMatcher(C);U&&e.removeRoute(U)}function y(){return e.getRoutes().map(C=>C.record)}function b(C){return!!e.getRecordMatcher(C)}function _(C,U){if(U=Te({},U||c.value),typeof C=="string"){const p=Mu(n,C,U.path),g=e.resolve({path:p.path},U),w=r.createHref(p.fullPath);return Te(p,g,{params:f(g.params),hash:Mc(p.hash),redirectedFrom:void 0,href:w})}let M;if("path"in C)M=Te({},C,{path:Mu(n,C.path,U.path).path});else{const p=Te({},C.params);for(const g in p)p[g]==null&&delete p[g];M=Te({},C,{params:h(C.params)}),U.params=h(U.params)}const H=e.resolve(M,U),pe=C.hash||"";H.params=u(f(H.params));const Ve=O2(i,Te({},C,{hash:yP(pe),path:H.path})),oe=r.createHref(Ve);return Te({fullPath:Ve,hash:pe,query:i===gy?wP(C.query):C.query||{}},H,{redirectedFrom:void 0,href:oe})}function v(C){return typeof C=="string"?Mu(n,C,c.value.path):Te({},C)}function E(C,U){if(l!==C)return ts(8,{from:U,to:C})}function I(C){return se(C)}function F(C){return I(Te(v(C),{replace:!0}))}function Q(C){const U=C.matched[C.matched.length-1];if(U&&U.redirect){const{redirect:M}=U;let H=typeof M=="function"?M(C):M;return typeof H=="string"&&(H=H.includes("?")||H.includes("#")?H=v(H):{path:H},H.params={}),Te({query:C.query,hash:C.hash,params:"path"in H?{}:C.params},H)}}function se(C,U){const M=l=_(C),H=c.value,pe=C.state,Ve=C.force,oe=C.replace===!0,p=Q(M);if(p)return se(Te(v(p),{state:typeof p=="object"?Te({},pe,p.state):pe,force:Ve,replace:oe}),U||M);const g=M;g.redirectedFrom=U;let w;return!Ve&&D2(i,H,M)&&(w=ts(16,{to:g,from:H}),Ai(H,H,!0,!1)),(w?Promise.resolve(w):ze(g,H)).catch(T=>Mn(T)?Mn(T,2)?T:Xt(T):Ae(T,g,H)).then(T=>{if(T){if(Mn(T,2))return se(Te({replace:oe},v(T.to),{state:typeof T.to=="object"?Te({},pe,T.to.state):pe,force:Ve}),U||g)}else T=ti(g,H,!0,oe,pe);return dt(g,H,T),T})}function _e(C,U){const M=E(C,U);return M?Promise.reject(M):Promise.resolve()}function ze(C,U){let M;const[H,pe,Ve]=xP(C,U);M=Lu(H.reverse(),"beforeRouteLeave",C,U);for(const p of H)p.leaveGuards.forEach(g=>{M.push(ai(g,C,U))});const oe=_e.bind(null,C,U);return M.push(oe),gr(M).then(()=>{M=[];for(const p of s.list())M.push(ai(p,C,U));return M.push(oe),gr(M)}).then(()=>{M=Lu(pe,"beforeRouteUpdate",C,U);for(const p of pe)p.updateGuards.forEach(g=>{M.push(ai(g,C,U))});return M.push(oe),gr(M)}).then(()=>{M=[];for(const p of C.matched)if(p.beforeEnter&&!U.matched.includes(p))if(dn(p.beforeEnter))for(const g of p.beforeEnter)M.push(ai(g,C,U));else M.push(ai(p.beforeEnter,C,U));return M.push(oe),gr(M)}).then(()=>(C.matched.forEach(p=>p.enterCallbacks={}),M=Lu(Ve,"beforeRouteEnter",C,U),M.push(oe),gr(M))).then(()=>{M=[];for(const p of o.list())M.push(ai(p,C,U));return M.push(oe),gr(M)}).catch(p=>Mn(p,8)?p:Promise.reject(p))}function dt(C,U,M){for(const H of a.list())H(C,U,M)}function ti(C,U,M,H,pe){const Ve=E(C,U);if(Ve)return Ve;const oe=U===ri,p=br?history.state:{};M&&(H||oe?r.replace(C.fullPath,Te({scroll:oe&&p&&p.scroll},pe)):r.push(C.fullPath,pe)),c.value=C,Ai(C,U,M,oe),Xt()}let pn;function fr(){pn||(pn=r.listen((C,U,M)=>{if(!aa.listening)return;const H=_(C),pe=Q(H);if(pe){se(Te(pe,{replace:!0}),H).catch(Gs);return}l=H;const Ve=c.value;br&&B2(cy(Ve.fullPath,M.delta),Hl()),ze(H,Ve).catch(oe=>Mn(oe,12)?oe:Mn(oe,2)?(se(oe.to,H).then(p=>{Mn(p,20)&&!M.delta&&M.type===Io.pop&&r.go(-1,!1)}).catch(Gs),Promise.reject()):(M.delta&&r.go(-M.delta,!1),Ae(oe,H,Ve))).then(oe=>{oe=oe||ti(H,Ve,!1),oe&&(M.delta&&!Mn(oe,8)?r.go(-M.delta,!1):M.type===Io.pop&&Mn(oe,20)&&r.go(-1,!1)),dt(H,Ve,oe)}).catch(Gs)}))}let Si=ks(),bs=ks(),We;function Ae(C,U,M){Xt(C);const H=bs.list();return H.length?H.forEach(pe=>pe(C,U,M)):console.error(C),Promise.reject(C)}function Ie(){return We&&c.value!==ri?Promise.resolve():new Promise((C,U)=>{Si.add([C,U])})}function Xt(C){return We||(We=!C,fr(),Si.list().forEach(([U,M])=>C?M(C):U()),Si.reset()),C}function Ai(C,U,M,H){const{scrollBehavior:pe}=t;if(!br||!pe)return Promise.resolve();const Ve=!M&&j2(cy(C.fullPath,0))||(H||!M)&&history.state&&history.state.scroll||null;return T_().then(()=>pe(C,U,Ve)).then(oe=>oe&&$2(oe)).catch(oe=>Ae(oe,C,U))}const Jt=C=>r.go(C);let Rt;const dr=new Set,aa={currentRoute:c,listening:!0,addRoute:d,removeRoute:m,hasRoute:b,getRoutes:y,resolve:_,options:t,push:I,replace:F,go:Jt,back:()=>Jt(-1),forward:()=>Jt(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:bs.add,isReady:Ie,install(C){const U=this;C.component("RouterLink",SP),C.component("RouterView",up),C.config.globalProperties.$router=U,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>O(c)}),br&&!Rt&&c.value===ri&&(Rt=!0,I(r.location).catch(pe=>{}));const M={};for(const pe in ri)M[pe]=re(()=>c.value[pe]);C.provide(Kl,U),C.provide(lp,xo(M)),C.provide(Zh,c);const H=C.unmount;dr.add(C),C.unmount=function(){dr.delete(C),dr.size<1&&(l=ri,pn&&pn(),pn=null,c.value=ri,Rt=!1,We=!1),H()}}};return aa}function gr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function xP(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(l=>es(l,a))?i.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>es(l,c))||r.push(c))}return[n,i,r]}function hp(){return jt(Kl)}function Wl(){return jt(lp)}const OP={class:"container"},DP={__name:"App",setup(t){const e=Wl();return(n,i)=>(te(),ye("div",OP,[(te(),zn(O(up),{key:O(e).fullPath}))]))}},Ci=iv({apiKey:"AIzaSyAnOiG77O1ukT9C2x8u1VbMLw7For9C_3w",authDomain:"bingo-50cec.firebaseapp.com",databaseURL:"https://bingo-50cec-default-rtdb.europe-west1.firebasedatabase.app",projectId:"bingo-50cec",storageBucket:"bingo-50cec.appspot.com",messagingSenderId:"866066986693",appId:"1:866066986693:web:de513df8434d232b0562ac",measurementId:"G-8F3EECYHQ0"}),PP=F1(Ci);To(PP,"todos");function wy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function V(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?wy(Object(n),!0).forEach(function(i){tt(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):wy(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Lc(t){return Lc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Lc(t)}function MP(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ty(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function LP(t,e,n){return e&&Ty(t.prototype,e),n&&Ty(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function tt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function fp(t,e){return UP(t)||$P(t,e)||uE(t,e)||jP()}function ia(t){return FP(t)||VP(t)||uE(t)||BP()}function FP(t){if(Array.isArray(t))return ef(t)}function UP(t){if(Array.isArray(t))return t}function VP(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function $P(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],r=!0,s=!1,o,a;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(c){s=!0,a=c}finally{try{!r&&n.return!=null&&n.return()}finally{if(s)throw a}}return i}}function uE(t,e){if(t){if(typeof t=="string")return ef(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ef(t,e)}}function ef(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function BP(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jP(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Iy=function(){},dp={},hE={},fE=null,dE={mark:Iy,measure:Iy};try{typeof window<"u"&&(dp=window),typeof document<"u"&&(hE=document),typeof MutationObserver<"u"&&(fE=MutationObserver),typeof performance<"u"&&(dE=performance)}catch{}var zP=dp.navigator||{},Cy=zP.userAgent,Sy=Cy===void 0?"":Cy,bi=dp,De=hE,Ay=fE,Aa=dE;bi.document;var ei=!!De.documentElement&&!!De.head&&typeof De.addEventListener=="function"&&typeof De.createElement=="function",pE=~Sy.indexOf("MSIE")||~Sy.indexOf("Trident/"),ka,Ra,Na,xa,Oa,Gn="___FONT_AWESOME___",tf=16,mE="fa",gE="svg-inline--fa",ir="data-fa-i2svg",nf="data-fa-pseudo-element",HP="data-fa-pseudo-element-pending",pp="data-prefix",mp="data-icon",ky="fontawesome-i2svg",KP="async",WP=["HTML","HEAD","STYLE","SCRIPT"],yE=function(){try{return!0}catch{return!1}}(),Oe="classic",$e="sharp",gp=[Oe,$e];function ra(t){return new Proxy(t,{get:function(n,i){return i in n?n[i]:n[Oe]}})}var Co=ra((ka={},tt(ka,Oe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),tt(ka,$e,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),ka)),So=ra((Ra={},tt(Ra,Oe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),tt(Ra,$e,{solid:"fass",regular:"fasr",light:"fasl"}),Ra)),Ao=ra((Na={},tt(Na,Oe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),tt(Na,$e,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Na)),qP=ra((xa={},tt(xa,Oe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),tt(xa,$e,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),xa)),GP=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,_E="fa-layers-text",YP=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,QP=ra((Oa={},tt(Oa,Oe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),tt(Oa,$e,{900:"fass",400:"fasr",300:"fasl"}),Oa)),vE=[1,2,3,4,5,6,7,8,9,10],XP=vE.concat([11,12,13,14,15,16,17,18,19,20]),JP=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ji={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ko=new Set;Object.keys(So[Oe]).map(ko.add.bind(ko));Object.keys(So[$e]).map(ko.add.bind(ko));var ZP=[].concat(gp,ia(ko),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ji.GROUP,ji.SWAP_OPACITY,ji.PRIMARY,ji.SECONDARY]).concat(vE.map(function(t){return"".concat(t,"x")})).concat(XP.map(function(t){return"w-".concat(t)})),Qs=bi.FontAwesomeConfig||{};function eM(t){var e=De.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function tM(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(De&&typeof De.querySelector=="function"){var nM=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];nM.forEach(function(t){var e=fp(t,2),n=e[0],i=e[1],r=tM(eM(n));r!=null&&(Qs[i]=r)})}var bE={styleDefault:"solid",familyDefault:"classic",cssPrefix:mE,replacementClass:gE,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Qs.familyPrefix&&(Qs.cssPrefix=Qs.familyPrefix);var ns=V(V({},bE),Qs);ns.autoReplaceSvg||(ns.observeMutations=!1);var B={};Object.keys(bE).forEach(function(t){Object.defineProperty(B,t,{enumerable:!0,set:function(n){ns[t]=n,Xs.forEach(function(i){return i(B)})},get:function(){return ns[t]}})});Object.defineProperty(B,"familyPrefix",{enumerable:!0,set:function(e){ns.cssPrefix=e,Xs.forEach(function(n){return n(B)})},get:function(){return ns.cssPrefix}});bi.FontAwesomeConfig=B;var Xs=[];function iM(t){return Xs.push(t),function(){Xs.splice(Xs.indexOf(t),1)}}var si=tf,wn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function rM(t){if(!(!t||!ei)){var e=De.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=De.head.childNodes,i=null,r=n.length-1;r>-1;r--){var s=n[r],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=s)}return De.head.insertBefore(e,i),t}}var sM="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ro(){for(var t=12,e="";t-- >0;)e+=sM[Math.random()*62|0];return e}function vs(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function yp(t){return t.classList?vs(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function EE(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function oM(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(EE(t[n]),'" ')},"").trim()}function ql(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function _p(t){return t.size!==wn.size||t.x!==wn.x||t.y!==wn.y||t.rotate!==wn.rotate||t.flipX||t.flipY}function aM(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(s," ").concat(o," ").concat(a)},l={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:c,path:l}}function cM(t){var e=t.transform,n=t.width,i=n===void 0?tf:n,r=t.height,s=r===void 0?tf:r,o=t.startCentered,a=o===void 0?!1:o,c="";return a&&pE?c+="translate(".concat(e.x/si-i/2,"em, ").concat(e.y/si-s/2,"em) "):a?c+="translate(calc(-50% + ".concat(e.x/si,"em), calc(-50% + ").concat(e.y/si,"em)) "):c+="translate(".concat(e.x/si,"em, ").concat(e.y/si,"em) "),c+="scale(".concat(e.size/si*(e.flipX?-1:1),", ").concat(e.size/si*(e.flipY?-1:1),") "),c+="rotate(".concat(e.rotate,"deg) "),c}var lM=`:root, :host {
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
}`;function wE(){var t=mE,e=gE,n=B.cssPrefix,i=B.replacementClass,r=lM;if(n!==t||i!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(i))}return r}var Ry=!1;function Fu(){B.autoAddCss&&!Ry&&(rM(wE()),Ry=!0)}var uM={mixout:function(){return{dom:{css:wE,insertCss:Fu}}},hooks:function(){return{beforeDOMElementCreation:function(){Fu()},beforeI2svg:function(){Fu()}}}},Yn=bi||{};Yn[Gn]||(Yn[Gn]={});Yn[Gn].styles||(Yn[Gn].styles={});Yn[Gn].hooks||(Yn[Gn].hooks={});Yn[Gn].shims||(Yn[Gn].shims=[]);var cn=Yn[Gn],TE=[],hM=function t(){De.removeEventListener("DOMContentLoaded",t),Fc=1,TE.map(function(e){return e()})},Fc=!1;ei&&(Fc=(De.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(De.readyState),Fc||De.addEventListener("DOMContentLoaded",hM));function fM(t){ei&&(Fc?setTimeout(t,0):TE.push(t))}function sa(t){var e=t.tag,n=t.attributes,i=n===void 0?{}:n,r=t.children,s=r===void 0?[]:r;return typeof t=="string"?EE(t):"<".concat(e," ").concat(oM(i),">").concat(s.map(sa).join(""),"</").concat(e,">")}function Ny(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var dM=function(e,n){return function(i,r,s,o){return e.call(n,i,r,s,o)}},Uu=function(e,n,i,r){var s=Object.keys(e),o=s.length,a=r!==void 0?dM(n,r):n,c,l,u;for(i===void 0?(c=1,u=e[s[0]]):(c=0,u=i);c<o;c++)l=s[c],u=a(u,e[l],l,e);return u};function pM(t){for(var e=[],n=0,i=t.length;n<i;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function rf(t){var e=pM(t);return e.length===1?e[0].toString(16):null}function mM(t,e){var n=t.length,i=t.charCodeAt(e),r;return i>=55296&&i<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function xy(t){return Object.keys(t).reduce(function(e,n){var i=t[n],r=!!i.icon;return r?e[i.iconName]=i.icon:e[n]=i,e},{})}function sf(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,r=i===void 0?!1:i,s=xy(e);typeof cn.hooks.addPack=="function"&&!r?cn.hooks.addPack(t,xy(e)):cn.styles[t]=V(V({},cn.styles[t]||{}),s),t==="fas"&&sf("fa",e)}var Da,Pa,Ma,Ir=cn.styles,gM=cn.shims,yM=(Da={},tt(Da,Oe,Object.values(Ao[Oe])),tt(Da,$e,Object.values(Ao[$e])),Da),vp=null,IE={},CE={},SE={},AE={},kE={},_M=(Pa={},tt(Pa,Oe,Object.keys(Co[Oe])),tt(Pa,$e,Object.keys(Co[$e])),Pa);function vM(t){return~ZP.indexOf(t)}function bM(t,e){var n=e.split("-"),i=n[0],r=n.slice(1).join("-");return i===t&&r!==""&&!vM(r)?r:null}var RE=function(){var e=function(s){return Uu(Ir,function(o,a,c){return o[c]=Uu(a,s,{}),o},{})};IE=e(function(r,s,o){if(s[3]&&(r[s[3]]=o),s[2]){var a=s[2].filter(function(c){return typeof c=="number"});a.forEach(function(c){r[c.toString(16)]=o})}return r}),CE=e(function(r,s,o){if(r[o]=o,s[2]){var a=s[2].filter(function(c){return typeof c=="string"});a.forEach(function(c){r[c]=o})}return r}),kE=e(function(r,s,o){var a=s[2];return r[o]=o,a.forEach(function(c){r[c]=o}),r});var n="far"in Ir||B.autoFetchSvg,i=Uu(gM,function(r,s){var o=s[0],a=s[1],c=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(r.names[o]={prefix:a,iconName:c}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:a,iconName:c}),r},{names:{},unicodes:{}});SE=i.names,AE=i.unicodes,vp=Gl(B.styleDefault,{family:B.familyDefault})};iM(function(t){vp=Gl(t.styleDefault,{family:B.familyDefault})});RE();function bp(t,e){return(IE[t]||{})[e]}function EM(t,e){return(CE[t]||{})[e]}function zi(t,e){return(kE[t]||{})[e]}function NE(t){return SE[t]||{prefix:null,iconName:null}}function wM(t){var e=AE[t],n=bp("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ei(){return vp}var Ep=function(){return{prefix:null,iconName:null,rest:[]}};function Gl(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,i=n===void 0?Oe:n,r=Co[i][t],s=So[i][t]||So[i][r],o=t in cn.styles?t:null;return s||o||null}var Oy=(Ma={},tt(Ma,Oe,Object.keys(Ao[Oe])),tt(Ma,$e,Object.keys(Ao[$e])),Ma);function Yl(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.skipLookups,r=i===void 0?!1:i,s=(e={},tt(e,Oe,"".concat(B.cssPrefix,"-").concat(Oe)),tt(e,$e,"".concat(B.cssPrefix,"-").concat($e)),e),o=null,a=Oe;(t.includes(s[Oe])||t.some(function(l){return Oy[Oe].includes(l)}))&&(a=Oe),(t.includes(s[$e])||t.some(function(l){return Oy[$e].includes(l)}))&&(a=$e);var c=t.reduce(function(l,u){var h=bM(B.cssPrefix,u);if(Ir[u]?(u=yM[a].includes(u)?qP[a][u]:u,o=u,l.prefix=u):_M[a].indexOf(u)>-1?(o=u,l.prefix=Gl(u,{family:a})):h?l.iconName=h:u!==B.replacementClass&&u!==s[Oe]&&u!==s[$e]&&l.rest.push(u),!r&&l.prefix&&l.iconName){var f=o==="fa"?NE(l.iconName):{},d=zi(l.prefix,l.iconName);f.prefix&&(o=null),l.iconName=f.iconName||d||l.iconName,l.prefix=f.prefix||l.prefix,l.prefix==="far"&&!Ir.far&&Ir.fas&&!B.autoFetchSvg&&(l.prefix="fas")}return l},Ep());return(t.includes("fa-brands")||t.includes("fab"))&&(c.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(c.prefix="fad"),!c.prefix&&a===$e&&(Ir.fass||B.autoFetchSvg)&&(c.prefix="fass",c.iconName=zi(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||o==="fa")&&(c.prefix=Ei()||"fas"),c}var TM=function(){function t(){MP(this,t),this.definitions={}}return LP(t,[{key:"add",value:function(){for(var n=this,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=V(V({},n.definitions[a]||{}),o[a]),sf(a,o[a]);var c=Ao[Oe][a];c&&sf(c,o[a]),RE()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var r=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(r).map(function(s){var o=r[s],a=o.prefix,c=o.iconName,l=o.icon,u=l[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(h){typeof h=="string"&&(n[a][h]=l)}),n[a][c]=l}),n}}]),t}(),Dy=[],Cr={},Fr={},IM=Object.keys(Fr);function CM(t,e){var n=e.mixoutsTo;return Dy=t,Cr={},Object.keys(Fr).forEach(function(i){IM.indexOf(i)===-1&&delete Fr[i]}),Dy.forEach(function(i){var r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),Lc(r[o])==="object"&&Object.keys(r[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=r[o][a]})}),i.hooks){var s=i.hooks();Object.keys(s).forEach(function(o){Cr[o]||(Cr[o]=[]),Cr[o].push(s[o])})}i.provides&&i.provides(Fr)}),n}function of(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];var s=Cr[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(i))}),e}function rr(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var r=Cr[t]||[];r.forEach(function(s){s.apply(null,n)})}function Qn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Fr[t]?Fr[t].apply(null,e):void 0}function af(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Ei();if(e)return e=zi(n,e)||e,Ny(xE.definitions,n,e)||Ny(cn.styles,n,e)}var xE=new TM,SM=function(){B.autoReplaceSvg=!1,B.observeMutations=!1,rr("noAuto")},AM={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ei?(rr("beforeI2svg",e),Qn("pseudoElements2svg",e),Qn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;B.autoReplaceSvg===!1&&(B.autoReplaceSvg=!0),B.observeMutations=!0,fM(function(){RM({autoReplaceSvgRoot:n}),rr("watch",e)})}},kM={icon:function(e){if(e===null)return null;if(Lc(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:zi(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=Gl(e[0]);return{prefix:i,iconName:zi(i,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(B.cssPrefix,"-"))>-1||e.match(GP))){var r=Yl(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||Ei(),iconName:zi(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var s=Ei();return{prefix:s,iconName:zi(s,e)||e}}}},Wt={noAuto:SM,config:B,dom:AM,parse:kM,library:xE,findIconDefinition:af,toHtml:sa},RM=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,i=n===void 0?De:n;(Object.keys(cn.styles).length>0||B.autoFetchSvg)&&ei&&B.autoReplaceSvg&&Wt.dom.i2svg({node:i})};function Ql(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return sa(i)})}}),Object.defineProperty(t,"node",{get:function(){if(ei){var i=De.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function NM(t){var e=t.children,n=t.main,i=t.mask,r=t.attributes,s=t.styles,o=t.transform;if(_p(o)&&n.found&&!i.found){var a=n.width,c=n.height,l={x:a/c/2,y:.5};r.style=ql(V(V({},s),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function xM(t){var e=t.prefix,n=t.iconName,i=t.children,r=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(B.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:V(V({},r),{},{id:o}),children:i}]}]}function wp(t){var e=t.icons,n=e.main,i=e.mask,r=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,c=t.title,l=t.maskId,u=t.titleId,h=t.extra,f=t.watchable,d=f===void 0?!1:f,m=i.found?i:n,y=m.width,b=m.height,_=r==="fak",v=[B.replacementClass,s?"".concat(B.cssPrefix,"-").concat(s):""].filter(function(ze){return h.classes.indexOf(ze)===-1}).filter(function(ze){return ze!==""||!!ze}).concat(h.classes).join(" "),E={children:[],attributes:V(V({},h.attributes),{},{"data-prefix":r,"data-icon":s,class:v,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(b)})},I=_&&!~h.classes.indexOf("fa-fw")?{width:"".concat(y/b*16*.0625,"em")}:{};d&&(E.attributes[ir]=""),c&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(u||Ro())},children:[c]}),delete E.attributes.title);var F=V(V({},E),{},{prefix:r,iconName:s,main:n,mask:i,maskId:l,transform:o,symbol:a,styles:V(V({},I),h.styles)}),Q=i.found&&n.found?Qn("generateAbstractMask",F)||{children:[],attributes:{}}:Qn("generateAbstractIcon",F)||{children:[],attributes:{}},se=Q.children,_e=Q.attributes;return F.children=se,F.attributes=_e,a?xM(F):NM(F)}function Py(t){var e=t.content,n=t.width,i=t.height,r=t.transform,s=t.title,o=t.extra,a=t.watchable,c=a===void 0?!1:a,l=V(V(V({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});c&&(l[ir]="");var u=V({},o.styles);_p(r)&&(u.transform=cM({transform:r,startCentered:!0,width:n,height:i}),u["-webkit-transform"]=u.transform);var h=ql(u);h.length>0&&(l.style=h);var f=[];return f.push({tag:"span",attributes:l,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function OM(t){var e=t.content,n=t.title,i=t.extra,r=V(V(V({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),s=ql(i.styles);s.length>0&&(r.style=s);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Vu=cn.styles;function cf(t){var e=t[0],n=t[1],i=t.slice(4),r=fp(i,1),s=r[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(B.cssPrefix,"-").concat(ji.GROUP)},children:[{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat(ji.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat(ji.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var DM={found:!1,width:512,height:512};function PM(t,e){!yE&&!B.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function lf(t,e){var n=e;return e==="fa"&&B.styleDefault!==null&&(e=Ei()),new Promise(function(i,r){if(Qn("missingIconAbstract"),n==="fa"){var s=NE(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Vu[e]&&Vu[e][t]){var o=Vu[e][t];return i(cf(o))}PM(t,e),i(V(V({},DM),{},{icon:B.showMissingIcons&&t?Qn("missingIconAbstract")||{}:{}}))})}var My=function(){},uf=B.measurePerformance&&Aa&&Aa.mark&&Aa.measure?Aa:{mark:My,measure:My},Ms='FA "6.4.0"',MM=function(e){return uf.mark("".concat(Ms," ").concat(e," begins")),function(){return OE(e)}},OE=function(e){uf.mark("".concat(Ms," ").concat(e," ends")),uf.measure("".concat(Ms," ").concat(e),"".concat(Ms," ").concat(e," begins"),"".concat(Ms," ").concat(e," ends"))},Tp={begin:MM,end:OE},qa=function(){};function Ly(t){var e=t.getAttribute?t.getAttribute(ir):null;return typeof e=="string"}function LM(t){var e=t.getAttribute?t.getAttribute(pp):null,n=t.getAttribute?t.getAttribute(mp):null;return e&&n}function FM(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(B.replacementClass)}function UM(){if(B.autoReplaceSvg===!0)return Ga.replace;var t=Ga[B.autoReplaceSvg];return t||Ga.replace}function VM(t){return De.createElementNS("http://www.w3.org/2000/svg",t)}function $M(t){return De.createElement(t)}function DE(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,i=n===void 0?t.tag==="svg"?VM:$M:n;if(typeof t=="string")return De.createTextNode(t);var r=i(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){r.appendChild(DE(o,{ceFn:i}))}),r}function BM(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Ga={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(DE(r),n)}),n.getAttribute(ir)===null&&B.keepOriginalSource){var i=De.createComment(BM(n));n.parentNode.replaceChild(i,n)}else n.remove()},nest:function(e){var n=e[0],i=e[1];if(~yp(n).indexOf(B.replacementClass))return Ga.replace(e);var r=new RegExp("".concat(B.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var s=i[0].attributes.class.split(" ").reduce(function(a,c){return c===B.replacementClass||c.match(r)?a.toSvg.push(c):a.toNode.push(c),a},{toNode:[],toSvg:[]});i[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=i.map(function(a){return sa(a)}).join(`
`);n.setAttribute(ir,""),n.innerHTML=o}};function Fy(t){t()}function PE(t,e){var n=typeof e=="function"?e:qa;if(t.length===0)n();else{var i=Fy;B.mutateApproach===KP&&(i=bi.requestAnimationFrame||Fy),i(function(){var r=UM(),s=Tp.begin("mutate");t.map(r),s(),n()})}}var Ip=!1;function ME(){Ip=!0}function hf(){Ip=!1}var Uc=null;function Uy(t){if(Ay&&B.observeMutations){var e=t.treeCallback,n=e===void 0?qa:e,i=t.nodeCallback,r=i===void 0?qa:i,s=t.pseudoElementsCallback,o=s===void 0?qa:s,a=t.observeMutationsRoot,c=a===void 0?De:a;Uc=new Ay(function(l){if(!Ip){var u=Ei();vs(l).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!Ly(h.addedNodes[0])&&(B.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&B.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&Ly(h.target)&&~JP.indexOf(h.attributeName))if(h.attributeName==="class"&&LM(h.target)){var f=Yl(yp(h.target)),d=f.prefix,m=f.iconName;h.target.setAttribute(pp,d||u),m&&h.target.setAttribute(mp,m)}else FM(h.target)&&r(h.target)})}}),ei&&Uc.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function jM(){Uc&&Uc.disconnect()}function zM(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(i,r){var s=r.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(i[o]=a.join(":").trim()),i},{})),n}function HM(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"",r=Yl(yp(t));return r.prefix||(r.prefix=Ei()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=EM(r.prefix,t.innerText)||bp(r.prefix,rf(t.innerText))),!r.iconName&&B.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function KM(t){var e=vs(t.attributes).reduce(function(r,s){return r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r},{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return B.autoA11y&&(n?e["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(i||Ro()):(e["aria-hidden"]="true",e.focusable="false")),e}function WM(){return{iconName:null,title:null,titleId:null,prefix:null,transform:wn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Vy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=HM(t),i=n.iconName,r=n.prefix,s=n.rest,o=KM(t),a=of("parseNodeAttributes",{},t),c=e.styleParser?zM(t):[];return V({iconName:i,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:wn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:c,attributes:o}},a)}var qM=cn.styles;function LE(t){var e=B.autoReplaceSvg==="nest"?Vy(t,{styleParser:!1}):Vy(t);return~e.extra.classes.indexOf(_E)?Qn("generateLayersText",t,e):Qn("generateSvgReplacementMutation",t,e)}var wi=new Set;gp.map(function(t){wi.add("fa-".concat(t))});Object.keys(Co[Oe]).map(wi.add.bind(wi));Object.keys(Co[$e]).map(wi.add.bind(wi));wi=ia(wi);function $y(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ei)return Promise.resolve();var n=De.documentElement.classList,i=function(h){return n.add("".concat(ky,"-").concat(h))},r=function(h){return n.remove("".concat(ky,"-").concat(h))},s=B.autoFetchSvg?wi:gp.map(function(u){return"fa-".concat(u)}).concat(Object.keys(qM));s.includes("fa")||s.push("fa");var o=[".".concat(_E,":not([").concat(ir,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(ir,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=vs(t.querySelectorAll(o))}catch{}if(a.length>0)i("pending"),r("complete");else return Promise.resolve();var c=Tp.begin("onTree"),l=a.reduce(function(u,h){try{var f=LE(h);f&&u.push(f)}catch(d){yE||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise(function(u,h){Promise.all(l).then(function(f){PE(f,function(){i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),c(),u()})}).catch(function(f){c(),h(f)})})}function GM(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;LE(t).then(function(n){n&&PE([n],e)})}function YM(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:af(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:af(r||{})),t(i,V(V({},n),{},{mask:r}))}}var QM=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,r=i===void 0?wn:i,s=n.symbol,o=s===void 0?!1:s,a=n.mask,c=a===void 0?null:a,l=n.maskId,u=l===void 0?null:l,h=n.title,f=h===void 0?null:h,d=n.titleId,m=d===void 0?null:d,y=n.classes,b=y===void 0?[]:y,_=n.attributes,v=_===void 0?{}:_,E=n.styles,I=E===void 0?{}:E;if(e){var F=e.prefix,Q=e.iconName,se=e.icon;return Ql(V({type:"icon"},e),function(){return rr("beforeDOMElementCreation",{iconDefinition:e,params:n}),B.autoA11y&&(f?v["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(m||Ro()):(v["aria-hidden"]="true",v.focusable="false")),wp({icons:{main:cf(se),mask:c?cf(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:F,iconName:Q,transform:V(V({},wn),r),symbol:o,title:f,maskId:u,titleId:m,extra:{attributes:v,styles:I,classes:b}})})}},XM={mixout:function(){return{icon:YM(QM)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=$y,n.nodeCallback=GM,n}}},provides:function(e){e.i2svg=function(n){var i=n.node,r=i===void 0?De:i,s=n.callback,o=s===void 0?function(){}:s;return $y(r,o)},e.generateSvgReplacementMutation=function(n,i){var r=i.iconName,s=i.title,o=i.titleId,a=i.prefix,c=i.transform,l=i.symbol,u=i.mask,h=i.maskId,f=i.extra;return new Promise(function(d,m){Promise.all([lf(r,a),u.iconName?lf(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var b=fp(y,2),_=b[0],v=b[1];d([n,wp({icons:{main:_,mask:v},prefix:a,iconName:r,transform:c,symbol:l,maskId:h,title:s,titleId:o,extra:f,watchable:!0})])}).catch(m)})},e.generateAbstractIcon=function(n){var i=n.children,r=n.attributes,s=n.main,o=n.transform,a=n.styles,c=ql(a);c.length>0&&(r.style=c);var l;return _p(o)&&(l=Qn("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),i.push(l||s.icon),{children:i,attributes:r}}}},JM={mixout:function(){return{layer:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.classes,s=r===void 0?[]:r;return Ql({type:"layer"},function(){rr("beforeDOMElementCreation",{assembler:n,params:i});var o=[];return n(function(a){Array.isArray(a)?a.map(function(c){o=o.concat(c.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(B.cssPrefix,"-layers")].concat(ia(s)).join(" ")},children:o}]})}}}},ZM={mixout:function(){return{counter:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.title,s=r===void 0?null:r,o=i.classes,a=o===void 0?[]:o,c=i.attributes,l=c===void 0?{}:c,u=i.styles,h=u===void 0?{}:u;return Ql({type:"counter",content:n},function(){return rr("beforeDOMElementCreation",{content:n,params:i}),OM({content:n.toString(),title:s,extra:{attributes:l,styles:h,classes:["".concat(B.cssPrefix,"-layers-counter")].concat(ia(a))}})})}}}},eL={mixout:function(){return{text:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.transform,s=r===void 0?wn:r,o=i.title,a=o===void 0?null:o,c=i.classes,l=c===void 0?[]:c,u=i.attributes,h=u===void 0?{}:u,f=i.styles,d=f===void 0?{}:f;return Ql({type:"text",content:n},function(){return rr("beforeDOMElementCreation",{content:n,params:i}),Py({content:n,transform:V(V({},wn),s),title:a,extra:{attributes:h,styles:d,classes:["".concat(B.cssPrefix,"-layers-text")].concat(ia(l))}})})}}},provides:function(e){e.generateLayersText=function(n,i){var r=i.title,s=i.transform,o=i.extra,a=null,c=null;if(pE){var l=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/l,c=u.height/l}return B.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Py({content:n.innerHTML,width:a,height:c,transform:s,title:r,extra:o,watchable:!0})])}}},tL=new RegExp('"',"ug"),By=[1105920,1112319];function nL(t){var e=t.replace(tL,""),n=mM(e,0),i=n>=By[0]&&n<=By[1],r=e.length===2?e[0]===e[1]:!1;return{value:rf(r?e[0]:e),isSecondary:i||r}}function jy(t,e){var n="".concat(HP).concat(e.replace(":","-"));return new Promise(function(i,r){if(t.getAttribute(n)!==null)return i();var s=vs(t.children),o=s.filter(function(se){return se.getAttribute(nf)===e})[0],a=bi.getComputedStyle(t,e),c=a.getPropertyValue("font-family").match(YP),l=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),i();if(c&&u!=="none"&&u!==""){var h=a.getPropertyValue("content"),f=~["Sharp"].indexOf(c[2])?$e:Oe,d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?So[f][c[2].toLowerCase()]:QP[f][l],m=nL(h),y=m.value,b=m.isSecondary,_=c[0].startsWith("FontAwesome"),v=bp(d,y),E=v;if(_){var I=wM(y);I.iconName&&I.prefix&&(v=I.iconName,d=I.prefix)}if(v&&!b&&(!o||o.getAttribute(pp)!==d||o.getAttribute(mp)!==E)){t.setAttribute(n,E),o&&t.removeChild(o);var F=WM(),Q=F.extra;Q.attributes[nf]=e,lf(v,d).then(function(se){var _e=wp(V(V({},F),{},{icons:{main:se,mask:Ep()},prefix:d,iconName:E,extra:Q,watchable:!0})),ze=De.createElement("svg");e==="::before"?t.insertBefore(ze,t.firstChild):t.appendChild(ze),ze.outerHTML=_e.map(function(dt){return sa(dt)}).join(`
`),t.removeAttribute(n),i()}).catch(r)}else i()}else i()})}function iL(t){return Promise.all([jy(t,"::before"),jy(t,"::after")])}function rL(t){return t.parentNode!==document.head&&!~WP.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(nf)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function zy(t){if(ei)return new Promise(function(e,n){var i=vs(t.querySelectorAll("*")).filter(rL).map(iL),r=Tp.begin("searchPseudoElements");ME(),Promise.all(i).then(function(){r(),hf(),e()}).catch(function(){r(),hf(),n()})})}var sL={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=zy,n}}},provides:function(e){e.pseudoElements2svg=function(n){var i=n.node,r=i===void 0?De:i;B.searchPseudoElements&&zy(r)}}},Hy=!1,oL={mixout:function(){return{dom:{unwatch:function(){ME(),Hy=!0}}}},hooks:function(){return{bootstrap:function(){Uy(of("mutationObserverCallbacks",{}))},noAuto:function(){jM()},watch:function(n){var i=n.observeMutationsRoot;Hy?hf():Uy(of("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},Ky=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,r){var s=r.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return i.flipX=!0,i;if(o&&a==="v")return i.flipY=!0,i;if(a=parseFloat(a),isNaN(a))return i;switch(o){case"grow":i.size=i.size+a;break;case"shrink":i.size=i.size-a;break;case"left":i.x=i.x-a;break;case"right":i.x=i.x+a;break;case"up":i.y=i.y-a;break;case"down":i.y=i.y+a;break;case"rotate":i.rotate=i.rotate+a;break}return i},n)},aL={mixout:function(){return{parse:{transform:function(n){return Ky(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-transform");return r&&(n.transform=Ky(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var i=n.main,r=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},c="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(c," ").concat(l," ").concat(u)},f={transform:"translate(".concat(o/2*-1," -256)")},d={outer:a,inner:h,path:f};return{tag:"g",attributes:V({},d.outer),children:[{tag:"g",attributes:V({},d.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:V(V({},i.icon.attributes),d.path)}]}]}}}},$u={x:0,y:0,width:"100%",height:"100%"};function Wy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function cL(t){return t.tag==="g"?t.children:[t]}var lL={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-mask"),s=r?Yl(r.split(" ").map(function(o){return o.trim()})):Ep();return s.prefix||(s.prefix=Ei()),n.mask=s,n.maskId=i.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var i=n.children,r=n.attributes,s=n.main,o=n.mask,a=n.maskId,c=n.transform,l=s.width,u=s.icon,h=o.width,f=o.icon,d=aM({transform:c,containerWidth:h,iconWidth:l}),m={tag:"rect",attributes:V(V({},$u),{},{fill:"white"})},y=u.children?{children:u.children.map(Wy)}:{},b={tag:"g",attributes:V({},d.inner),children:[Wy(V({tag:u.tag,attributes:V(V({},u.attributes),d.path)},y))]},_={tag:"g",attributes:V({},d.outer),children:[b]},v="mask-".concat(a||Ro()),E="clip-".concat(a||Ro()),I={tag:"mask",attributes:V(V({},$u),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[m,_]},F={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:cL(f)},I]};return i.push(F,{tag:"rect",attributes:V({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(v,")")},$u)}),{children:i,attributes:r}}}},uL={provides:function(e){var n=!1;bi.matchMedia&&(n=bi.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:V(V({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=V(V({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:V(V({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:V(V({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:V(V({},o),{},{values:"1;0;1;1;0;1;"})}),i.push(a),i.push({tag:"path",attributes:V(V({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:V(V({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||i.push({tag:"path",attributes:V(V({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:V(V({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},hL={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return n.symbol=s,n}}}},fL=[uM,XM,JM,ZM,eL,sL,oL,aL,lL,uL,hL];CM(fL,{mixoutsTo:Wt});Wt.noAuto;var FE=Wt.config,Dn=Wt.library;Wt.dom;var Vc=Wt.parse;Wt.findIconDefinition;Wt.toHtml;var dL=Wt.icon;Wt.layer;var pL=Wt.text;Wt.counter;function qy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function nn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?qy(Object(n),!0).forEach(function(i){Nt(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):qy(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function $c(t){return $c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$c(t)}function Nt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function mL(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function gL(t,e){if(t==null)return{};var n=mL(t,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function ff(t){return yL(t)||_L(t)||vL(t)||bL()}function yL(t){if(Array.isArray(t))return df(t)}function _L(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function vL(t,e){if(t){if(typeof t=="string")return df(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return df(t,e)}}function df(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function bL(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var EL=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},UE={exports:{}};(function(t){(function(e){var n=function(_,v,E){if(!l(v)||h(v)||f(v)||d(v)||c(v))return v;var I,F=0,Q=0;if(u(v))for(I=[],Q=v.length;F<Q;F++)I.push(n(_,v[F],E));else{I={};for(var se in v)Object.prototype.hasOwnProperty.call(v,se)&&(I[_(se,E)]=n(_,v[se],E))}return I},i=function(_,v){v=v||{};var E=v.separator||"_",I=v.split||/(?=[A-Z])/;return _.split(I).join(E)},r=function(_){return m(_)?_:(_=_.replace(/[\-_\s]+(.)?/g,function(v,E){return E?E.toUpperCase():""}),_.substr(0,1).toLowerCase()+_.substr(1))},s=function(_){var v=r(_);return v.substr(0,1).toUpperCase()+v.substr(1)},o=function(_,v){return i(_,v).toLowerCase()},a=Object.prototype.toString,c=function(_){return typeof _=="function"},l=function(_){return _===Object(_)},u=function(_){return a.call(_)=="[object Array]"},h=function(_){return a.call(_)=="[object Date]"},f=function(_){return a.call(_)=="[object RegExp]"},d=function(_){return a.call(_)=="[object Boolean]"},m=function(_){return _=_-0,_===_},y=function(_,v){var E=v&&"process"in v?v.process:v;return typeof E!="function"?_:function(I,F){return E(I,_,F)}},b={camelize:r,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(_,v){return n(y(r,v),_)},decamelizeKeys:function(_,v){return n(y(o,v),_,v)},pascalizeKeys:function(_,v){return n(y(s,v),_)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=b:e.humps=b})(EL)})(UE);var wL=UE.exports,TL=["class","style"];function IL(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),r=wL.camelize(n.slice(0,i)),s=n.slice(i+1).trim();return e[r]=s,e},{})}function CL(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Cp(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var i=(t.children||[]).map(function(c){return Cp(c)}),r=Object.keys(t.attributes||{}).reduce(function(c,l){var u=t.attributes[l];switch(l){case"class":c.class=CL(u);break;case"style":c.style=IL(u);break;default:c.attrs[l]=u}return c},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=gL(n,TL);return nl(t.tag,nn(nn(nn({},e),{},{class:r.class,style:nn(nn({},r.style),o)},r.attrs),a),i)}var VE=!1;try{VE=!0}catch{}function SL(){if(!VE&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Js(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Nt({},t,e):{}}function AL(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Nt(e,"fa-".concat(t.size),t.size!==null),Nt(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),Nt(e,"fa-pull-".concat(t.pull),t.pull!==null),Nt(e,"fa-swap-opacity",t.swapOpacity),Nt(e,"fa-bounce",t.bounce),Nt(e,"fa-shake",t.shake),Nt(e,"fa-beat",t.beat),Nt(e,"fa-fade",t.fade),Nt(e,"fa-beat-fade",t.beatFade),Nt(e,"fa-flash",t.flash),Nt(e,"fa-spin-pulse",t.spinPulse),Nt(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(i){return n[i]?i:null}).filter(function(i){return i})}function Gy(t){if(t&&$c(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Vc.icon)return Vc.icon(t);if(t===null)return null;if($c(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Bc=Po({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var i=n.attrs,r=re(function(){return Gy(e.icon)}),s=re(function(){return Js("classes",AL(e))}),o=re(function(){return Js("transform",typeof e.transform=="string"?Vc.transform(e.transform):e.transform)}),a=re(function(){return Js("mask",Gy(e.mask))}),c=re(function(){return dL(r.value,nn(nn(nn(nn({},s.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});Nr(c,function(u){if(!u)return SL("Could not find one or more icon(s)",r.value,a.value)},{immediate:!0});var l=re(function(){return c.value?Cp(c.value.abstract[0],{},i):null});return function(){return l.value}}});Po({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var i=n.slots,r=FE.familyPrefix,s=re(function(){return["".concat(r,"-layers")].concat(ff(e.fixedWidth?["".concat(r,"-fw")]:[]))});return function(){return nl("div",{class:s.value},i.default?i.default():[])}}});Po({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var i=n.attrs,r=FE.familyPrefix,s=re(function(){return Js("classes",[].concat(ff(e.counter?["".concat(r,"-layers-counter")]:[]),ff(e.position?["".concat(r,"-layers-").concat(e.position)]:[])))}),o=re(function(){return Js("transform",typeof e.transform=="string"?Vc.transform(e.transform):e.transform)}),a=re(function(){var l=pL(e.value.toString(),nn(nn({},o.value),s.value)),u=l.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),c=re(function(){return Cp(a.value,{},i)});return function(){return c.value}}});const Pn=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},kL={__name:"tileFlag",props:{color:{type:String,required:!0},icon:{type:String,required:!0},inverted:{type:Boolean,required:!1,default:()=>!1}},setup(t){const e=t;return Pf(n=>({"408312c6":e.color})),(n,i)=>(te(),ye("div",{class:pi(["flag",{inverted:e.inverted}]),style:No({backgroundColor:n.backgroundColor})},[Be(O(Bc),{class:"icon",icon:["fas",e.icon]},null,8,["icon"])],6))}},$E=Pn(kL,[["__scopeId","data-v-57f1afff"]]);const RL=["data-coord"],NL=["src"],xL={class:"boardTileFlags"},OL={__name:"BoardTile",props:{tile:{type:Object,required:!0},collected:{type:Array,default:()=>{}},verify:{type:Array,default:()=>{}},selected:{type:Boolean,default:!1},needVerifying:{type:Boolean,required:!1},groupsData:{type:Object}},setup(t){const e=t,n=re(()=>e.tile),i=re(()=>e.groupsData),r=re(()=>e.selected),s=re(()=>{var a;return(a=e.collected)==null?void 0:a.includes(n.value.id)}),o=re(()=>{var a;return(a=e.verify)==null?void 0:a.includes(n.value.id)});return(a,c)=>O(n)?(te(),ye("div",{key:0,class:pi(["tile",{isCollected:O(s),needVerifying:e.needVerifying,isVerify:O(o),isSelected:O(r)}]),"data-coord":O(n).id},[ce("img",{src:O(n).img||"https://oldschool.runescape.wiki/images/Frog_%28Ruins_of_Camdozaal%29.png?6ae5e"},null,8,NL),ce("div",xL,[O(i)?(te(!0),ye(He,{key:0},Vr(O(i),l=>(te(),ye(He,null,[l.collected.includes(O(n).id)?(te(),zn($E,{class:pi(["tileFlag","flag-end-"+l.flagEnd]),key:O(n).id+l.color,icon:l.icon,color:a.none,inverted:!0},null,8,["class","icon","color"])):ot("",!0)],64))),256)):ot("",!0)])],10,RL)):ot("",!0)}},Xl=Pn(OL,[["__scopeId","data-v-307296b9"]]);const BE=t=>(Oo("data-v-d426f905"),t=t(),Do(),t),DL={key:0},PL=["onClick","disabled"],ML={key:0},LL={class:"tooltip"},FL=BE(()=>ce("span",{class:"tooltiptext"},"Infestid89 would've gotten this tile on the 30th of April 2023 1:42 AM EST",-1)),UL={key:1},VL={class:"tooltip"},$L=BE(()=>ce("span",{class:"tooltiptext"},"LIES PHOENIX 1ST TRY!!!!",-1)),BL={__name:"sidePannel",props:{tileData:{type:Object,required:!0},collected:{type:Array,default:()=>{}},verify:{type:Array,default:()=>{}},boardUUID:{type:String,required:!0},teamUUID:{type:String,required:!0}},setup(t){const e=t,n=_s(Ci),i=async()=>{e.verify.includes(e.tileData.id)||Mi(St(n,"Boards",e.boardUUID,"Groups",e.teamUUID),{verify:[...e.verify,e.tileData.id]})};return(r,s)=>e.tileData?(te(),ye("div",DL,[Be(Xl,{tile:e.tileData,verify:e.verify,collected:e.collected},null,8,["tile","verify","collected"]),ce("h2",null,"{ "+$t(e.tileData.id.split("")[0])+" , "+$t(e.tileData.id.split("")[1])+" }",1),ce("h1",null,$t(e.tileData.title),1),ce("p",null,$t(e.tileData.description),1),ce("button",{class:"btn",onClick:os(i,["prevent"]),disabled:e.verify.includes(e.tileData.id)||e.collected.includes(e.tileData.id)}," Mark Collected ",8,PL),e.tileData.id==44?(te(),ye("div",ML,[ce("p",LL,[Be(O(Bc),{class:"icon",icon:["fas","disease"]}),FL])])):ot("",!0),e.tileData.id==41?(te(),ye("div",UL,[ce("p",VL,[Be(O(Bc),{class:"icon fire",icon:["fas","dove"]}),$L])])):ot("",!0)])):ot("",!0)}},jL=Pn(BL,[["__scopeId","data-v-d426f905"]]);const Jl=t=>(Oo("data-v-038ef935"),t=t(),Do(),t),zL={key:0},HL=Jl(()=>ce("br",null,null,-1)),KL={class:"tooltiptext"},WL=Jl(()=>ce("br",null,null,-1)),qL=Jl(()=>ce("br",null,null,-1)),GL=Jl(()=>ce("br",null,null,-1)),YL={__name:"scoreCard",props:{groupsData:{type:Object,required:!0}},setup(t){const e=t;return(n,i)=>(te(),ye("div",null,[e.groupsData?(te(),ye("ul",zL,[(te(!0),ye(He,null,Vr(e.groupsData,(r,s)=>(te(),ye("li",{key:s+t.groupsData,class:"tooltip"},[Be($E,{color:r.color,class:pi(["tileFlag","flag-end-"+r.flagEnd]),inverted:r.name=="Ahka's Cum Balls",icon:r.icon,style:No({"--groupColor":r.color,"--width":r.points/750*100*1.5+"px"})},null,8,["color","class","inverted","icon","style"]),Yt(" "+$t(r.name),1),HL,ce("span",KL,[(te(!0),ye(He,null,Vr(r.member,o=>(te(),ye("span",{key:o},[Yt($t(o),1),WL]))),128))]),Yt(" score: "+$t(r.points),1),qL,GL]))),128))])):ot("",!0)]))}},QL=Pn(YL,[["__scopeId","data-v-038ef935"]]);const XL={key:1,class:"bingo-board"},JL={key:0},ZL=["onSubmit"],e4={__name:"BingoBoard",props:{boardUUID:{type:String},teamCode:{type:String}},setup(t){const e=t;Pf(v=>({"5a9952df":O(h),"427be1a4":O(f)}));const n=_s(Ci),i=hp(),r=Dt(""),s=Dt(""),o=Dt(""),a=qt(St(n,"Boards",e.boardUUID)),c=qt(To(n,`Boards/${e.boardUUID}/Tiles`)),{data:l}=qt(St(n,`Boards/${e.boardUUID}/Groups/${e.teamCode}/`)),{data:u}=qt(To(n,"Boards",e.boardUUID,"Groups")),h=re(()=>{var v;return((v=a==null?void 0:a.value)==null?void 0:v.settings.width)||7}),f=re(()=>{var v;return((v=a==null?void 0:a.value)==null?void 0:v.settings.height)||7}),d=re(()=>{var v;return((v=l==null?void 0:l.value)==null?void 0:v.collected)||[]}),m=re(()=>{var v;return((v=l==null?void 0:l.value)==null?void 0:v.verify)||[]}),y=re(()=>{var E;let v={};return u&&((E=u==null?void 0:u.value)==null||E.forEach(I=>{I.name!="moderator"&&(v[I.id]={collected:I.collected,color:I.color,name:I.name,icon:I.icon,points:I.points,flagEnd:I.flagEnd,member:I.members})})),v||{}}),b=async()=>{var v;if(r.value!==""){let E={name:"private-board",params:{boardUUID:e.boardUUID,teamCode:r.value}};const{data:I}=qt(St(n,"Boards",e.boardUUID,"Groups",r.value));I&&((v=I==null?void 0:I.value)==null?void 0:v.name)=="moderator"&&(E.name="moderator"),i.push(E)}},_=v=>{s.value=v,o.value=v};return(v,E)=>{const I=oT("fontAwesomeIcon");return te(),ye(He,null,[O(u)?(te(),zn(QL,{key:0,class:"scoreCard",groupsData:O(y)},null,8,["groupsData"])):ot("",!0),O(c)?(te(),ye("main",XL,[(te(!0),ye(He,null,Vr(O(c),F=>(te(),zn(Xl,{key:F.id,tile:F,groupsData:O(y),selected:F==o.value,collected:O(d),verify:O(m),onClick:Q=>_(F)},null,8,["tile","groupsData","selected","collected","verify","onClick"]))),128))])):ot("",!0),ce("aside",null,[O(l)?(te(),ye("p",JL,[Be(I,{class:"icon",icon:["fas",O(l).icon]},null,8,["icon"]),Yt(" "+$t(O(l).name),1)])):ot("",!0),O(l)?ot("",!0):(te(),ye("form",{key:1,onSubmit:os(b,["prevent"])},[Yt(" team code: "),Xc(ce("input",{type:"text",name:"teamId","onUpdate:modelValue":E[0]||(E[0]=F=>r.value=F)},null,512),[[il,r.value]])],40,ZL)),Be(jL,{tileData:s.value,collected:O(d),verify:O(m),boardUUID:e.boardUUID,teamUUID:e.teamCode},null,8,["tileData","collected","verify","boardUUID","teamUUID"])])],64)}}},t4=Pn(e4,[["__scopeId","data-v-b5fdae2f"]]);const n4=t=>(Oo("data-v-7370c1e3"),t=t(),Do(),t),i4={key:0,class:"heading"},r4=n4(()=>ce("h2",null,"Notes",-1)),s4=["disabled"],o4={__name:"BoardView",setup(t){const e=_s(Ci),n=Wl(),i=Dt(""),r=re(()=>n.params.teamCode),s=re(()=>n.params.boardUUID),{data:o}=qt(St(e,`Boards/${s.value}/Groups/${r.value}/`)),a=async()=>{i.value=o.value.notes,await Mi(St(e,`Boards/${s.value}/Groups/${r.value}/`),{notes:i.value})};return(c,l)=>(te(),ye(He,null,[ce("section",null,[Be(t4,{boardUUID:O(s),teamCode:O(r)},null,8,["boardUUID","teamCode"])]),O(o)?(te(),ye("div",i4,[r4,ce("button",{class:"btn",onClick:a,disabled:i.value==O(o).notes}," Save notes ",8,s4)])):ot("",!0),O(o)?Xc((te(),ye("textarea",{key:1,name:"teamNotes",id:"teamNotes",rows:"10","onUpdate:modelValue":l[0]||(l[0]=u=>O(o).notes=u),onSubmit:l[1]||(l[1]=os(()=>{},["prevent"]))},null,544)),[[il,O(o).notes]]):ot("",!0)],64))}},Yy=Pn(o4,[["__scopeId","data-v-7370c1e3"]]);const a4=t=>(Oo("data-v-f2caaef0"),t=t(),Do(),t),c4=["for"],l4=a4(()=>ce("br",null,null,-1)),u4=["id","checked","onClick"],h4={__name:"moderatorSidePannel",props:{tileData:{type:Object,required:!0},boardUUID:{type:Object,required:!0},groups:{type:Object,required:!0}},setup(t){const e=t,n=_s(Ci),i=re(()=>e.tileData),r=re(()=>e.groups.filter(o=>o.name!=="moderator")),s=({tile:o,group:a})=>{a.collected.includes(o.id)?(Mi(St(n,"Boards",e.boardUUID,"Groups",a.id),{collected:a.collected.filter(c=>c!=o.id)}),Mi(St(n,"Boards",e.boardUUID,"Groups",a.id),{points:a.points-o.points})):(Mi(St(n,"Boards",e.boardUUID,"Groups",a.id),{collected:[...a.collected,o.id]}),Mi(St(n,"Boards",e.boardUUID,"Groups",a.id),{points:a.points+o.points}),a.verify.includes(o.id)&&Mi(St(n,"Boards",e.boardUUID,"Groups",a.id),{verify:a.verify.filter(c=>c!=o.id)}))};return(o,a)=>e.tileData?(te(),ye("div",{key:e.tileData.id},[Be(Xl,{tile:O(i),groupsData:e.groups},null,8,["tile","groupsData"]),ce("h2",null,"{ "+$t(O(i).id.split("")[0])+" , "+$t(O(i).id.split("")[1])+" }",1),ce("ul",null,[(te(!0),ye(He,null,Vr(O(r),c=>(te(),ye("li",{key:c.id+O(i).id,class:pi({checkThis:c.verify.includes(O(i).id)})},[ce("label",{for:c.id+O(i).id},[Yt($t(c.name)+" : "+$t(c.verify.includes(O(i).id)),1),l4,Yt(" collected: "),(te(),ye("input",{id:c.id+O(i).id,type:"checkbox",key:c.id+O(i).id,checked:c.collected.includes(O(i).id),onClick:os(l=>s({tile:O(i),group:c}),["prevent"])},null,8,u4))],8,c4)],2))),128))])])):ot("",!0)}},f4=Pn(h4,[["__scopeId","data-v-f2caaef0"]]);const d4={key:0,class:"bingo-board"},p4={key:0},m4={__name:"ModeratorBoard",props:{boardUUID:{type:String},teamCode:{type:String},groups:{type:Object}},setup(t){const e=t;Pf(f=>({"09909736":O(c),"51efde68":O(l)}));const n=_s(Ci),i=Dt(""),r=Dt(""),s=qt(St(n,"Boards",e.boardUUID)),o=qt(To(n,`Boards/${e.boardUUID}/Tiles`)),{data:a}=qt(St(n,`Boards/${e.boardUUID}/Groups/${e.teamCode}/`)),c=re(()=>{var f;return((f=s==null?void 0:s.value)==null?void 0:f.settings.width)||7}),l=re(()=>{var f;return((f=s==null?void 0:s.value)==null?void 0:f.settings.height)||7}),u=f=>{i.value=f,r.value=f},h=f=>{let d=!1;return e.groups&&e.groups.forEach(m=>{m.verify.includes(f.id)&&(d=!0)}),d};return(f,d)=>(te(),ye(He,null,[O(o)?(te(),ye("main",d4,[(te(!0),ye(He,null,Vr(O(o),m=>(te(),zn(Xl,{key:m.id,groupsData:e.groups,needVerifying:h(m),selected:m==r.value,tile:m,onClick:y=>u(m)},null,8,["groupsData","needVerifying","selected","tile","onClick"]))),128))])):ot("",!0),ce("aside",null,[O(a)?(te(),ye("p",p4,$t(O(a).name),1)):ot("",!0),(te(),zn(f4,{tileData:i.value,key:i.value,boardUUID:e.boardUUID,groups:e.groups},null,8,["tileData","boardUUID","groups"]))])],64))}},g4=Pn(m4,[["__scopeId","data-v-b604a635"]]);const Zl=t=>(Oo("data-v-eeb7e31c"),t=t(),Do(),t),y4=["onSubmit"],_4=Zl(()=>ce("br",null,null,-1)),v4=Zl(()=>ce("br",null,null,-1)),b4=Zl(()=>ce("br",null,null,-1)),E4=Zl(()=>ce("button",{type:"submit",class:"btn"}," Go To Board ",-1)),w4={__name:"ModeratorView",setup(t){const e=_s(Ci),n=Wl(),i=hp(),r=re(()=>n.params.teamCode),s=Dt(""),o=re(()=>n.params.boardUUID),{data:a}=qt(St(e,`Boards/${o.value}/Groups/${r.value}/`)),{data:c}=qt(To(e,"Boards",o.value,"Groups")),l=async()=>{if(r.value!==""){let u={name:"private-board",params:{boardUUID:o.value,teamCode:s.value}};const{data:h}=qt(St(e,"Boards",o.value,"Groups",s.value));h&&h.value.name=="moderator"&&(u.name="moderator"),i.push(u)}};return(u,h)=>(te(),ye("section",null,[O(a)&&O(a).name=="moderator"?(te(),zn(g4,{key:0,boardUUID:O(o),teamCode:O(r),onVerifyTile:h[0]||(h[0]=f=>u.verifyTile(u.tile,u.groupid)),groups:O(c)},null,8,["boardUUID","teamCode","groups"])):ot("",!0),ce("aside",null,[O(a)&&O(a).name!="moderator"?(te(),ye("form",{key:0,onSubmit:os(l,["prevent"])},[Yt(" You are not a moderator, "),_4,Yt("please enter your code to go to the appropriate board for your team"),v4,b4,Yt(" team code: "),Xc(ce("input",{type:"text",name:"teamId","onUpdate:modelValue":h[1]||(h[1]=f=>s.value=f)},null,512),[[il,s.value]]),E4],40,y4)):ot("",!0)])]))}},T4=Pn(w4,[["__scopeId","data-v-eeb7e31c"]]);const I4=["onSubmit"],C4=["disabled"],S4={__name:"HomeView",setup(t){const e=Wl(),n=hp(),i=Dt(""),r=()=>{n.push({name:"overview",params:{boardUUID:i.value}})};return(s,o)=>(te(),ye(He,null,[ce("form",{onSubmit:os(r,["prevent"])},[Yt(" Enter your bingo key: "),Xc(ce("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=a=>i.value=a)},null,512),[[il,i.value]]),ce("button",{class:"btn",disabled:i.value==""},"Open Board",8,C4)],40,I4),(te(),zn(O(up),{key:O(e).fullPath}))],64))}},A4=Pn(S4,[["__scopeId","data-v-63581e46"]]),k4=NP({history:q2(),mode:"hash",routes:[{path:"/",name:"Home",component:A4},{path:"/b/:boardUUID",name:"overview",param:!0,component:Yy},{path:"/b/:boardUUID/team/:teamCode",name:"private-board",param:!0,component:Yy},{path:"/b/:boardUUID/m/:teamCode",name:"moderator",param:!0,component:T4}]});var R4={prefix:"fas",iconName:"spaghetti-monster-flying",icon:[640,512,["pastafarianism"],"f67b","M208 64a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 0c0 16.2-6 31.1-16 42.3l15.6 31.2c18.7-6 39.9-9.5 64.4-9.5s45.8 3.5 64.4 9.5L400 106.3C390 95.1 384 80.2 384 64c0-35.3 28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64c-1.7 0-3.4-.1-5.1-.2L427.8 158c21.1 13.6 37.7 30.2 51.4 46.4c7.1 8.3 13.5 16.6 19.3 24l1.4 1.8c6.3 8.1 11.6 14.8 16.7 20.4C527.3 262.3 532.7 264 536 264c2.5 0 4.3-.6 7.1-3.3c3.7-3.5 7.1-8.8 12.5-17.4l.6-.9c4.6-7.4 11-17.6 19.4-25.7c9.7-9.3 22.9-16.7 40.4-16.7c13.3 0 24 10.7 24 24s-10.7 24-24 24c-2.5 0-4.3 .6-7.1 3.3c-3.7 3.5-7.1 8.8-12.5 17.4l-.6 .9c-4.6 7.4-11 17.6-19.4 25.7c-9.7 9.3-22.9 16.7-40.4 16.7c-18.5 0-32.9-8.5-44.3-18.6c-3.1 4-6.6 8.3-10.5 12.7c1.4 4.3 2.8 8.5 4 12.5c.9 3 1.8 5.8 2.6 8.6c3 9.8 5.5 18.2 8.6 25.9c3.9 9.8 7.4 15.4 10.8 18.5c2.6 2.4 5.9 4.3 12.8 4.3c8.7 0 16.9-4.2 33.7-13.2c15-8 35.7-18.8 62.3-18.8c13.3 0 24 10.7 24 24s-10.7 24-24 24c-13.4 0-24.7 5.2-39.7 13.2c-1 .6-2.1 1.1-3.2 1.7C559.9 414 541.4 424 520 424c-18.4 0-33.6-6.1-45.5-17.2c-11.1-10.3-17.9-23.7-22.7-36c-3.6-9-6.7-19.1-9.5-28.5c-16.4 12.3-36.1 23.6-58.9 31.3c3.6 10.8 8.4 23.5 14.4 36.2c7.5 15.9 16.2 30.4 25.8 40.5C433 460.5 441.2 464 448 464c13.3 0 24 10.7 24 24s-10.7 24-24 24c-25.2 0-45-13.5-59.5-28.8c-14.5-15.4-25.7-34.9-34.2-53c-8-17-14.1-33.8-18.3-46.9c-5.2 .4-10.6 .6-16 .6s-10.8-.2-16-.6c-4.2 13-10.3 29.9-18.3 46.9c-8.5 18.1-19.8 37.6-34.2 53C237 498.5 217.2 512 192 512c-13.3 0-24-10.7-24-24s10.7-24 24-24c6.8 0 15-3.5 24.5-13.7c9.5-10.1 18.3-24.6 25.8-40.5c5.9-12.6 10.7-25.4 14.4-36.2c-22.8-7.7-42.5-19-58.9-31.3c-2.9 9.4-6 19.5-9.5 28.5c-4.8 12.2-11.6 25.6-22.7 36C153.6 417.9 138.4 424 120 424c-21.4 0-39.9-10-53.1-17.1l0 0c-1.1-.6-2.2-1.2-3.2-1.7c-15-8-26.3-13.2-39.7-13.2c-13.3 0-24-10.7-24-24s10.7-24 24-24c26.6 0 47.3 10.8 62.3 18.8c16.8 9 25 13.2 33.7 13.2c6.8 0 10.2-1.9 12.8-4.3c3.4-3.2 7-8.8 10.8-18.5c3-7.7 5.6-16.1 8.6-25.9c.8-2.7 1.7-5.6 2.6-8.6c1.2-4 2.6-8.2 4-12.5c-3.9-4.5-7.4-8.8-10.5-12.7C136.9 303.5 122.5 312 104 312c-17.5 0-30.7-7.4-40.4-16.7c-8.4-8.1-14.8-18.3-19.4-25.7l-.6-.9c-5.4-8.6-8.8-13.9-12.5-17.4c-2.8-2.7-4.6-3.3-7.1-3.3c-13.3 0-24-10.7-24-24s10.7-24 24-24c17.5 0 30.7 7.4 40.4 16.7c8.4 8.1 14.8 18.3 19.4 25.7l.6 .9c5.4 8.6 8.8 13.9 12.5 17.4c2.8 2.7 4.6 3.3 7.1 3.3c3.3 0 8.7-1.7 19.4-13.4c5.1-5.6 10.4-12.3 16.7-20.4l1.4-1.8c5.8-7.4 12.2-15.7 19.3-24c13.8-16.2 30.3-32.8 51.4-46.4l-15.1-30.2c-1.7 .1-3.4 .2-5.1 .2c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64zm208 0a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z"]},N4={prefix:"fas",iconName:"spoon",icon:[512,512,[129348,61873,"utensil-spoon"],"f2e5","M245.8 220.9c-14.5-17.6-21.8-39.2-21.8-60.8C224 80 320 0 416 0c53 0 96 43 96 96c0 96-80 192-160.2 192c-21.6 0-43.2-7.3-60.8-21.8L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L245.8 220.9z"]},x4={prefix:"fas",iconName:"paw",icon:[512,512,[],"f1b0","M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"]},O4={prefix:"fas",iconName:"crow",icon:[640,512,[],"f520","M456 0c-48.6 0-88 39.4-88 88v29.2L12.5 390.6c-14 10.8-16.6 30.9-5.9 44.9s30.9 16.6 44.9 5.9L126.1 384H259.2l46.6 113.1c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3L311.1 384H352c1.1 0 2.1 0 3.2 0l46.6 113.2c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3l-42-102C484.9 354.1 544 280 544 192V128v-8l80.5-20.1c8.6-2.1 13.8-10.8 11.6-19.4C629 52 603.4 32 574 32H523.9C507.7 12.5 483.3 0 456 0zm0 64a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},D4={prefix:"fas",iconName:"frog",icon:[576,512,[],"f52e","M368 32c41.7 0 75.9 31.8 79.7 72.5l85.6 26.3c25.4 7.8 42.8 31.3 42.8 57.9c0 21.8-11.7 41.9-30.7 52.7L400.8 323.5 493.3 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H480c-8.5 0-16.6-3.4-22.6-9.4L346.9 360.2c11.7-36 3.2-77.1-25.4-105.7c-40.6-40.6-106.3-40.6-146.9-.1L101 324.4c-6.4 6.1-6.7 16.2-.6 22.6s16.2 6.6 22.6 .6l73.8-70.2 .1-.1 .1-.1c3.5-3.5 7.3-6.6 11.3-9.2c27.9-18.5 65.9-15.4 90.5 9.2c24.7 24.7 27.7 62.9 9 90.9c-2.6 3.8-5.6 7.5-9 10.9L261.8 416H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-35.3 0-64-28.7-64-64C0 249.6 127 112.9 289.3 97.5C296.2 60.2 328.8 32 368 32zm0 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]},P4={prefix:"fas",iconName:"feather-pointed",icon:[512,512,["feather-alt"],"f56b","M278.5 215.6L23 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l74.8-74.8c7.4 4.6 15.3 8.2 23.8 10.5C200.3 452.8 270 454.5 338 409.4c12.2-8.1 5.8-25.4-8.8-25.4l-16.1 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l97.7-29.3c3.4-1 6.4-3.1 8.4-6.1c4.4-6.4 8.6-12.9 12.6-19.6c6.2-10.3-1.5-23-13.5-23l-38.6 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l80.9-24.3c4.6-1.4 8.4-4.8 10.2-9.3C494.5 163 507.8 86.1 511.9 36.8c.8-9.9-3-19.6-10-26.6s-16.7-10.8-26.6-10C391.5 7 228.5 40.5 137.4 131.6C57.3 211.7 56.7 302.3 71.3 356.4c2.1 7.9 12 9.6 17.8 3.8L253.6 195.8c6.2-6.2 16.4-6.2 22.6 0c5.4 5.4 6.1 13.6 2.2 19.8z"]},M4={prefix:"fas",iconName:"dove",icon:[512,512,[128330],"f4ba","M160.8 96.5c14 17 31 30.9 49.5 42.2c25.9 15.8 53.7 25.9 77.7 31.6V138.8C265.8 108.5 250 71.5 248.6 28c-.4-11.3-7.5-21.5-18.4-24.4c-7.6-2-15.8-.2-21 5.8c-13.3 15.4-32.7 44.6-48.4 87.2zM320 144v30.6l0 0v1.3l0 0 0 32.1c-60.8-5.1-185-43.8-219.3-157.2C97.4 40 87.9 32 76.6 32c-7.9 0-15.3 3.9-18.8 11C46.8 65.9 32 112.1 32 176c0 116.9 80.1 180.5 118.4 202.8L11.8 416.6C6.7 418 2.6 421.8 .9 426.8s-.8 10.6 2.3 14.8C21.7 466.2 77.3 512 160 512c3.6 0 7.2-1.2 10-3.5L245.6 448H320c88.4 0 160-71.6 160-160V128l29.9-44.9c1.3-2 2.1-4.4 2.1-6.8c0-6.8-5.5-12.3-12.3-12.3H400c-44.2 0-80 35.8-80 80zm80-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32z"]},L4={prefix:"fas",iconName:"rocket",icon:[512,512,[],"f135","M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"]},F4={prefix:"fas",iconName:"disease",icon:[512,512,[],"f7fa","M236.4 61.4L227 75.5c-21.3 32-59.4 48.5-97.3 42.1l-59.6-9.9C33.4 101.6 0 129.9 .1 167.1c0 15.9 6.4 31.2 17.6 42.5l29.2 29.2c11 11 17.2 25.9 17.2 41.5c0 15.8-6.4 30.9-17.7 42L33.3 335.1C22.2 345.9 16 360.7 16 376.2c0 36.8 34.1 64.2 70.1 56.2l62.3-13.8c7.7-1.7 15.7-2.6 23.6-2.6h10c27.2 0 53.7 9.3 75 26.3L287.8 467c10.5 8.4 23.6 13 37 13c32.7 0 59.3-26.5 59.3-59.3l0-25.2c0-34.9 21.4-66.2 53.9-78.8l36.9-14.3c22.4-8.7 37.2-30.3 37.2-54.3c0-28.1-20.1-52.3-47.8-57.3l-28-5.1c-36.5-6.7-65.4-34.5-73.6-70.7l-7.1-31.5C348.9 53.4 322.1 32 291.3 32c-22 0-42.6 11-54.9 29.4zM160 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm0 80a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},U4={prefix:"fas",iconName:"hippo",icon:[640,512,[129435],"f6ed","M407 47c9.4-9.4 24.6-9.4 33.9 0l17.2 17.2c1.9-.1 3.9-.2 5.8-.2h32c11.2 0 21.9 2.3 31.6 6.5L543 55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L564 101.9c7.6 12.2 12 26.7 12 42.1c0 10.2 7.4 18.8 16.7 23c27.9 12.5 47.3 40.5 47.3 73c0 26.2-12.6 49.4-32 64v32c0 8.8-7.2 16-16 16H560c-8.8 0-16-7.2-16-16V320H480v16c0 8.8-7.2 16-16 16H432c-8.8 0-16-7.2-16-16V318.4c-11.8-2.4-22.7-7.4-32-14.4c-1.5-1.1-2.9-2.3-4.3-3.5c-17-14.7-27.7-36.4-27.7-60.5c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 44.7 26.2 83.2 64 101.2V352c0 17.7 14.3 32 32 32h32v64c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V372c-19.8 7.7-41.4 12-64 12s-44.2-4.3-64-12v76c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V329.1L45.9 369.7c-5.4 12.1-19.6 17.6-31.7 12.2S-3.3 362.4 2.1 350.3L24 300.9c5.3-11.9 8-24.7 8-37.7C32 155.7 117.2 68 223.8 64.1l.2-.1h7.2H256h32c41.7 0 83.4 12.1 117.2 25.7c1.7-1.8 3.5-3.6 5.3-5.2L407 81c-9.4-9.4-9.4-24.6 0-33.9zm73 185a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm88 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM480 144a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"]};Dn.add(L4);Dn.add(R4);Dn.add(x4);Dn.add(U4);Dn.add(O4);Dn.add(D4);Dn.add(P4);Dn.add(F4);Dn.add(M4);Dn.add(N4);const oa=cI(DP);oa.use(fI());oa.use(k4);oa.use(k2,{firebaseApp:Ci});oa.component("font-awesome-icon",Bc);oa.mount("#app");
