(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function yf(t,e){const n=Object.create(null),i=t.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function cs(t){if(te(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=et(i)?sw(i):cs(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(et(t))return t;if($e(t))return t}}const nw=/;(?![^(]*\))/g,iw=/:([^]+)/,rw=/\/\*.*?\*\//gs;function sw(t){const e={};return t.replace(rw,"").split(nw).forEach(n=>{if(n){const i=n.split(iw);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function vi(t){let e="";if(et(t))e=t;else if(te(t))for(let n=0;n<t.length;n++){const i=vi(t[n]);i&&(e+=i+" ")}else if($e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ow="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",aw=yf(ow);function Jy(t){return!!t||t===""}const Ot=t=>et(t)?t:t==null?"":te(t)||$e(t)&&(t.toString===n_||!se(t.toString))?JSON.stringify(t,Zy,2):String(t),Zy=(t,e)=>e&&e.__v_isRef?Zy(t,e.value):Dr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:e_(e)?{[`Set(${e.size})`]:[...e.values()]}:$e(e)&&!te(e)&&!i_(e)?String(e):e,xe={},xr=[],un=()=>{},cw=()=>!1,lw=/^on[^a-z]/,Kc=t=>lw.test(t),_f=t=>t.startsWith("onUpdate:"),kt=Object.assign,vf=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},uw=Object.prototype.hasOwnProperty,pe=(t,e)=>uw.call(t,e),te=Array.isArray,Dr=t=>Wc(t)==="[object Map]",e_=t=>Wc(t)==="[object Set]",se=t=>typeof t=="function",et=t=>typeof t=="string",bf=t=>typeof t=="symbol",$e=t=>t!==null&&typeof t=="object",t_=t=>$e(t)&&se(t.then)&&se(t.catch),n_=Object.prototype.toString,Wc=t=>n_.call(t),hw=t=>Wc(t).slice(8,-1),i_=t=>Wc(t)==="[object Object]",Ef=t=>et(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Va=yf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},fw=/-(\w)/g,kn=qc(t=>t.replace(fw,(e,n)=>n?n.toUpperCase():"")),dw=/\B([A-Z])/g,ls=qc(t=>t.replace(dw,"-$1").toLowerCase()),Gc=qc(t=>t.charAt(0).toUpperCase()+t.slice(1)),nu=qc(t=>t?`on${Gc(t)}`:""),ro=(t,e)=>!Object.is(t,e),$a=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ja=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},zu=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let xp;const pw=()=>xp||(xp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Bt;class r_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Bt,!e&&Bt&&(this.index=(Bt.scopes||(Bt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Bt;try{return Bt=this,e()}finally{Bt=n}}}on(){Bt=this}off(){Bt=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function s_(t){return new r_(t)}function mw(t,e=Bt){e&&e.active&&e.effects.push(t)}function wf(){return Bt}function o_(t){Bt&&Bt.cleanups.push(t)}const Tf=t=>{const e=new Set(t);return e.w=0,e.n=0,e},a_=t=>(t.w&bi)>0,c_=t=>(t.n&bi)>0,gw=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=bi},yw=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];a_(r)&&!c_(r)?r.delete(t):e[n++]=r,r.w&=~bi,r.n&=~bi}e.length=n}},Za=new WeakMap;let Os=0,bi=1;const Hu=30;let en;const Wi=Symbol(""),Ku=Symbol("");class If{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,mw(this,i)}run(){if(!this.active)return this.fn();let e=en,n=fi;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=en,en=this,fi=!0,bi=1<<++Os,Os<=Hu?gw(this):Dp(this),this.fn()}finally{Os<=Hu&&yw(this),bi=1<<--Os,en=this.parent,fi=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){en===this?this.deferStop=!0:this.active&&(Dp(this),this.onStop&&this.onStop(),this.active=!1)}}function Dp(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let fi=!0;const l_=[];function us(){l_.push(fi),fi=!1}function hs(){const t=l_.pop();fi=t===void 0?!0:t}function Ft(t,e,n){if(fi&&en){let i=Za.get(t);i||Za.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=Tf()),u_(r)}}function u_(t,e){let n=!1;Os<=Hu?c_(t)||(t.n|=bi,n=!a_(t)):n=!t.has(en),n&&(t.add(en),en.deps.push(t))}function Kn(t,e,n,i,r,s){const o=Za.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&te(t)){const c=Number(i);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":te(t)?Ef(n)&&a.push(o.get("length")):(a.push(o.get(Wi)),Dr(t)&&a.push(o.get(Ku)));break;case"delete":te(t)||(a.push(o.get(Wi)),Dr(t)&&a.push(o.get(Ku)));break;case"set":Dr(t)&&a.push(o.get(Wi));break}if(a.length===1)a[0]&&Wu(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Wu(Tf(c))}}function Wu(t,e){const n=te(t)?t:[...t];for(const i of n)i.computed&&Op(i);for(const i of n)i.computed||Op(i)}function Op(t,e){(t!==en||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function _w(t,e){var n;return(n=Za.get(t))===null||n===void 0?void 0:n.get(e)}const vw=yf("__proto__,__v_isRef,__isVue"),h_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(bf)),bw=Cf(),Ew=Cf(!1,!0),ww=Cf(!0),Pp=Tw();function Tw(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=ge(this);for(let s=0,o=this.length;s<o;s++)Ft(i,"get",s+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(ge)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){us();const i=ge(this)[e].apply(this,n);return hs(),i}}),t}function Iw(t){const e=ge(this);return Ft(e,"has",t),e.hasOwnProperty(t)}function Cf(t=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(t?e?$w:g_:e?m_:p_).get(i))return i;const o=te(i);if(!t){if(o&&pe(Pp,r))return Reflect.get(Pp,r,s);if(r==="hasOwnProperty")return Iw}const a=Reflect.get(i,r,s);return(bf(r)?h_.has(r):vw(r))||(t||Ft(i,"get",r),e)?a:je(a)?o&&Ef(r)?a:a.value:$e(a)?t?y_(a):fs(a):a}}const Cw=f_(),Sw=f_(!0);function f_(t=!1){return function(n,i,r,s){let o=n[i];if(Br(o)&&je(o)&&!je(r))return!1;if(!t&&(!ec(r)&&!Br(r)&&(o=ge(o),r=ge(r)),!te(n)&&je(o)&&!je(r)))return o.value=r,!0;const a=te(n)&&Ef(i)?Number(i)<n.length:pe(n,i),c=Reflect.set(n,i,r,s);return n===ge(s)&&(a?ro(r,o)&&Kn(n,"set",i,r):Kn(n,"add",i,r)),c}}function Aw(t,e){const n=pe(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&Kn(t,"delete",e,void 0),i}function kw(t,e){const n=Reflect.has(t,e);return(!bf(e)||!h_.has(e))&&Ft(t,"has",e),n}function Rw(t){return Ft(t,"iterate",te(t)?"length":Wi),Reflect.ownKeys(t)}const d_={get:bw,set:Cw,deleteProperty:Aw,has:kw,ownKeys:Rw},Nw={get:ww,set(t,e){return!0},deleteProperty(t,e){return!0}},xw=kt({},d_,{get:Ew,set:Sw}),Sf=t=>t,Yc=t=>Reflect.getPrototypeOf(t);function ha(t,e,n=!1,i=!1){t=t.__v_raw;const r=ge(t),s=ge(e);n||(e!==s&&Ft(r,"get",e),Ft(r,"get",s));const{has:o}=Yc(r),a=i?Sf:n?Rf:so;if(o.call(r,e))return a(t.get(e));if(o.call(r,s))return a(t.get(s));t!==r&&t.get(e)}function fa(t,e=!1){const n=this.__v_raw,i=ge(n),r=ge(t);return e||(t!==r&&Ft(i,"has",t),Ft(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function da(t,e=!1){return t=t.__v_raw,!e&&Ft(ge(t),"iterate",Wi),Reflect.get(t,"size",t)}function Mp(t){t=ge(t);const e=ge(this);return Yc(e).has.call(e,t)||(e.add(t),Kn(e,"add",t,t)),this}function Lp(t,e){e=ge(e);const n=ge(this),{has:i,get:r}=Yc(n);let s=i.call(n,t);s||(t=ge(t),s=i.call(n,t));const o=r.call(n,t);return n.set(t,e),s?ro(e,o)&&Kn(n,"set",t,e):Kn(n,"add",t,e),this}function Fp(t){const e=ge(this),{has:n,get:i}=Yc(e);let r=n.call(e,t);r||(t=ge(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&Kn(e,"delete",t,void 0),s}function Up(){const t=ge(this),e=t.size!==0,n=t.clear();return e&&Kn(t,"clear",void 0,void 0),n}function pa(t,e){return function(i,r){const s=this,o=s.__v_raw,a=ge(o),c=e?Sf:t?Rf:so;return!t&&Ft(a,"iterate",Wi),o.forEach((l,u)=>i.call(r,c(l),c(u),s))}}function ma(t,e,n){return function(...i){const r=this.__v_raw,s=ge(r),o=Dr(s),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...i),u=n?Sf:e?Rf:so;return!e&&Ft(s,"iterate",c?Ku:Wi),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function si(t){return function(...e){return t==="delete"?!1:this}}function Dw(){const t={get(s){return ha(this,s)},get size(){return da(this)},has:fa,add:Mp,set:Lp,delete:Fp,clear:Up,forEach:pa(!1,!1)},e={get(s){return ha(this,s,!1,!0)},get size(){return da(this)},has:fa,add:Mp,set:Lp,delete:Fp,clear:Up,forEach:pa(!1,!0)},n={get(s){return ha(this,s,!0)},get size(){return da(this,!0)},has(s){return fa.call(this,s,!0)},add:si("add"),set:si("set"),delete:si("delete"),clear:si("clear"),forEach:pa(!0,!1)},i={get(s){return ha(this,s,!0,!0)},get size(){return da(this,!0)},has(s){return fa.call(this,s,!0)},add:si("add"),set:si("set"),delete:si("delete"),clear:si("clear"),forEach:pa(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=ma(s,!1,!1),n[s]=ma(s,!0,!1),e[s]=ma(s,!1,!0),i[s]=ma(s,!0,!0)}),[t,n,e,i]}const[Ow,Pw,Mw,Lw]=Dw();function Af(t,e){const n=e?t?Lw:Mw:t?Pw:Ow;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(pe(n,r)&&r in i?n:i,r,s)}const Fw={get:Af(!1,!1)},Uw={get:Af(!1,!0)},Vw={get:Af(!0,!1)},p_=new WeakMap,m_=new WeakMap,g_=new WeakMap,$w=new WeakMap;function Bw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function jw(t){return t.__v_skip||!Object.isExtensible(t)?0:Bw(hw(t))}function fs(t){return Br(t)?t:kf(t,!1,d_,Fw,p_)}function zw(t){return kf(t,!1,xw,Uw,m_)}function y_(t){return kf(t,!0,Nw,Vw,g_)}function kf(t,e,n,i,r){if(!$e(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=jw(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function di(t){return Br(t)?di(t.__v_raw):!!(t&&t.__v_isReactive)}function Br(t){return!!(t&&t.__v_isReadonly)}function ec(t){return!!(t&&t.__v_isShallow)}function __(t){return di(t)||Br(t)}function ge(t){const e=t&&t.__v_raw;return e?ge(e):t}function jr(t){return Ja(t,"__v_skip",!0),t}const so=t=>$e(t)?fs(t):t,Rf=t=>$e(t)?y_(t):t;function v_(t){fi&&en&&(t=ge(t),u_(t.dep||(t.dep=Tf())))}function b_(t,e){t=ge(t);const n=t.dep;n&&Wu(n)}function je(t){return!!(t&&t.__v_isRef===!0)}function hn(t){return w_(t,!1)}function E_(t){return w_(t,!0)}function w_(t,e){return je(t)?t:new Hw(t,e)}class Hw{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ge(e),this._value=n?e:so(e)}get value(){return v_(this),this._value}set value(e){const n=this.__v_isShallow||ec(e)||Br(e);e=n?e:ge(e),ro(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:so(e),b_(this))}}function V(t){return je(t)?t.value:t}const Kw={get:(t,e,n)=>V(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return je(r)&&!je(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function T_(t){return di(t)?t:new Proxy(t,Kw)}function Ww(t){const e=te(t)?new Array(t.length):{};for(const n in t)e[n]=Gw(t,n);return e}class qw{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return _w(ge(this._object),this._key)}}function Gw(t,e,n){const i=t[e];return je(i)?i:new qw(t,e,n)}var I_;class Yw{constructor(e,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[I_]=!1,this._dirty=!0,this.effect=new If(e,()=>{this._dirty||(this._dirty=!0,b_(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=ge(this);return v_(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}I_="__v_isReadonly";function Qw(t,e,n=!1){let i,r;const s=se(t);return s?(i=t,r=un):(i=t.get,r=t.set),new Yw(i,r,s||!r,n)}function pi(t,e,n,i){let r;try{r=i?t(...i):t()}catch(s){Qc(s,e,n)}return r}function fn(t,e,n,i){if(se(t)){const s=pi(t,e,n,i);return s&&t_(s)&&s.catch(o=>{Qc(o,e,n)}),s}const r=[];for(let s=0;s<t.length;s++)r.push(fn(t[s],e,n,i));return r}function Qc(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){pi(c,null,10,[t,o,a]);return}}Xw(t,n,r,i)}function Xw(t,e,n,i=!0){console.error(t)}let oo=!1,qu=!1;const vt=[];let vn=0;const Or=[];let Un=null,Li=0;const C_=Promise.resolve();let Nf=null;function xf(t){const e=Nf||C_;return t?e.then(this?t.bind(this):t):e}function Jw(t){let e=vn+1,n=vt.length;for(;e<n;){const i=e+n>>>1;ao(vt[i])<t?e=i+1:n=i}return e}function Df(t){(!vt.length||!vt.includes(t,oo&&t.allowRecurse?vn+1:vn))&&(t.id==null?vt.push(t):vt.splice(Jw(t.id),0,t),S_())}function S_(){!oo&&!qu&&(qu=!0,Nf=C_.then(k_))}function Zw(t){const e=vt.indexOf(t);e>vn&&vt.splice(e,1)}function eT(t){te(t)?Or.push(...t):(!Un||!Un.includes(t,t.allowRecurse?Li+1:Li))&&Or.push(t),S_()}function Vp(t,e=oo?vn+1:0){for(;e<vt.length;e++){const n=vt[e];n&&n.pre&&(vt.splice(e,1),e--,n())}}function A_(t){if(Or.length){const e=[...new Set(Or)];if(Or.length=0,Un){Un.push(...e);return}for(Un=e,Un.sort((n,i)=>ao(n)-ao(i)),Li=0;Li<Un.length;Li++)Un[Li]();Un=null,Li=0}}const ao=t=>t.id==null?1/0:t.id,tT=(t,e)=>{const n=ao(t)-ao(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function k_(t){qu=!1,oo=!0,vt.sort(tT);const e=un;try{for(vn=0;vn<vt.length;vn++){const n=vt[vn];n&&n.active!==!1&&pi(n,null,14)}}finally{vn=0,vt.length=0,A_(),oo=!1,Nf=null,(vt.length||Or.length)&&k_()}}function nT(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||xe;let r=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=i[u]||xe;f&&(r=n.map(d=>et(d)?d.trim():d)),h&&(r=n.map(zu))}let a,c=i[a=nu(e)]||i[a=nu(kn(e))];!c&&s&&(c=i[a=nu(ls(e))]),c&&fn(c,t,6,r);const l=i[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,fn(l,t,6,r)}}function R_(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!se(t)){const c=l=>{const u=R_(l,e,!0);u&&(a=!0,kt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!a?($e(t)&&i.set(t,null),null):(te(s)?s.forEach(c=>o[c]=null):kt(o,s),$e(t)&&i.set(t,o),o)}function Xc(t,e){return!t||!Kc(e)?!1:(e=e.slice(2).replace(/Once$/,""),pe(t,e[0].toLowerCase()+e.slice(1))||pe(t,ls(e))||pe(t,e))}let zt=null,Jc=null;function tc(t){const e=zt;return zt=t,Jc=t&&t.type.__scopeId||null,e}function Zc(t){Jc=t}function el(){Jc=null}function iT(t,e=zt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Gp(-1);const s=tc(e);let o;try{o=t(...r)}finally{tc(s),i._d&&Gp(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function iu(t){const{type:e,vnode:n,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:d,ctx:m,inheritAttrs:y}=t;let b,_;const v=tc(t);try{if(n.shapeFlag&4){const S=r||i;b=_n(u.call(S,S,h,s,d,f,m)),_=c}else{const S=e;b=_n(S.length>1?S(s,{attrs:c,slots:a,emit:l}):S(s,null)),_=e.props?c:rT(c)}}catch(S){Bs.length=0,Qc(S,t,1),b=ht(Ji)}let E=b;if(_&&y!==!1){const S=Object.keys(_),{shapeFlag:P}=E;S.length&&P&7&&(o&&S.some(_f)&&(_=sT(_,o)),E=Hr(E,_))}return n.dirs&&(E=Hr(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),b=E,tc(v),b}const rT=t=>{let e;for(const n in t)(n==="class"||n==="style"||Kc(n))&&((e||(e={}))[n]=t[n]);return e},sT=(t,e)=>{const n={};for(const i in t)(!_f(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function oT(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return i?$p(i,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!Xc(l,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?$p(i,o,l):!0:!!o;return!1}function $p(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!Xc(n,s))return!0}return!1}function aT({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const cT=t=>t.__isSuspense;function lT(t,e){e&&e.pendingBranch?te(t)?e.effects.push(...t):e.effects.push(t):eT(t)}function Ba(t,e){if(We){let n=We.provides;const i=We.parent&&We.parent.provides;i===n&&(n=We.provides=Object.create(i)),n[t]=e}}function Mt(t,e,n=!1){const i=We||zt;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&se(e)?e.call(i.proxy):e}}function uT(t,e){return Of(t,null,{flush:"post"})}const ga={};function qi(t,e,n){return Of(t,e,n)}function Of(t,e,{immediate:n,deep:i,flush:r,onTrack:s,onTrigger:o}=xe){const a=wf()===(We==null?void 0:We.scope)?We:null;let c,l=!1,u=!1;if(je(t)?(c=()=>t.value,l=ec(t)):di(t)?(c=()=>t,i=!0):te(t)?(u=!0,l=t.some(E=>di(E)||ec(E)),c=()=>t.map(E=>{if(je(E))return E.value;if(di(E))return Ui(E);if(se(E))return pi(E,a,2)})):se(t)?e?c=()=>pi(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),fn(t,a,3,[f])}:c=un,e&&i){const E=c;c=()=>Ui(E())}let h,f=E=>{h=_.onStop=()=>{pi(E,a,4)}},d;if(lo)if(f=un,e?n&&fn(e,a,3,[c(),u?[]:void 0,f]):c(),r==="sync"){const E=eI();d=E.__watcherHandles||(E.__watcherHandles=[])}else return un;let m=u?new Array(t.length).fill(ga):ga;const y=()=>{if(_.active)if(e){const E=_.run();(i||l||(u?E.some((S,P)=>ro(S,m[P])):ro(E,m)))&&(h&&h(),fn(e,a,3,[E,m===ga?void 0:u&&m[0]===ga?[]:m,f]),m=E)}else _.run()};y.allowRecurse=!!e;let b;r==="sync"?b=y:r==="post"?b=()=>Dt(y,a&&a.suspense):(y.pre=!0,a&&(y.id=a.uid),b=()=>Df(y));const _=new If(c,b);e?n?y():m=_.run():r==="post"?Dt(_.run.bind(_),a&&a.suspense):_.run();const v=()=>{_.stop(),a&&a.scope&&vf(a.scope.effects,_)};return d&&d.push(v),v}function hT(t,e,n){const i=this.proxy,r=et(t)?t.includes(".")?N_(i,t):()=>i[t]:t.bind(i,i);let s;se(e)?s=e:(s=e.handler,n=e);const o=We;Kr(this);const a=Of(r,s.bind(i),n);return o?Kr(o):Gi(),a}function N_(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function Ui(t,e){if(!$e(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),je(t))Ui(t.value,e);else if(te(t))for(let n=0;n<t.length;n++)Ui(t[n],e);else if(e_(t)||Dr(t))t.forEach(n=>{Ui(n,e)});else if(i_(t))for(const n in t)Ui(t[n],e);return t}function Po(t){return se(t)?{setup:t,name:t.name}:t}const ja=t=>!!t.type.__asyncLoader,x_=t=>t.type.__isKeepAlive;function fT(t,e){D_(t,"a",e)}function dT(t,e){D_(t,"da",e)}function D_(t,e,n=We){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(tl(e,i,n),n){let r=n.parent;for(;r&&r.parent;)x_(r.parent.vnode)&&pT(i,e,n,r),r=r.parent}}function pT(t,e,n,i){const r=tl(e,t,i,!0);Pf(()=>{vf(i[e],r)},n)}function tl(t,e,n=We,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;us(),Kr(n);const a=fn(e,n,t,o);return Gi(),hs(),a});return i?r.unshift(s):r.push(s),s}}const Zn=t=>(e,n=We)=>(!lo||t==="sp")&&tl(t,(...i)=>e(...i),n),mT=Zn("bm"),O_=Zn("m"),gT=Zn("bu"),yT=Zn("u"),_T=Zn("bum"),Pf=Zn("um"),P_=Zn("sp"),vT=Zn("rtg"),bT=Zn("rtc");function ET(t,e=We){tl("ec",t,e)}function M_(t,e){const n=zt;if(n===null)return t;const i=rl(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,c,l=xe]=e[s];o&&(se(o)&&(o={mounted:o,updated:o}),o.deep&&Ui(a),r.push({dir:o,instance:i,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function xi(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let c=a.dir[i];c&&(us(),fn(c,n,8,[t.el,a,t,e]),hs())}}const L_="components";function F_(t,e){return TT(L_,t,!0,e)||t}const wT=Symbol();function TT(t,e,n=!0,i=!1){const r=zt||We;if(r){const s=r.type;if(t===L_){const a=JT(s,!1);if(a&&(a===e||a===kn(e)||a===Gc(kn(e))))return s}const o=Bp(r[t]||s[t],e)||Bp(r.appContext[t],e);return!o&&i?s:o}}function Bp(t,e){return t&&(t[e]||t[kn(e)]||t[Gc(kn(e))])}function zr(t,e,n,i){let r;const s=n&&n[i];if(te(t)||et(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if($e(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,s&&s[a])}}else r=[];return n&&(n[i]=r),r}const Gu=t=>t?G_(t)?rl(t)||t.proxy:Gu(t.parent):null,$s=kt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Gu(t.parent),$root:t=>Gu(t.root),$emit:t=>t.emit,$options:t=>Mf(t),$forceUpdate:t=>t.f||(t.f=()=>Df(t.update)),$nextTick:t=>t.n||(t.n=xf.bind(t.proxy)),$watch:t=>hT.bind(t)}),ru=(t,e)=>t!==xe&&!t.__isScriptSetup&&pe(t,e),IT={get({_:t},e){const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(ru(i,e))return o[e]=1,i[e];if(r!==xe&&pe(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&pe(l,e))return o[e]=3,s[e];if(n!==xe&&pe(n,e))return o[e]=4,n[e];Yu&&(o[e]=0)}}const u=$s[e];let h,f;if(u)return e==="$attrs"&&Ft(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==xe&&pe(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,pe(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return ru(r,e)?(r[e]=n,!0):i!==xe&&pe(i,e)?(i[e]=n,!0):pe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==xe&&pe(t,o)||ru(e,o)||(a=s[0])&&pe(a,o)||pe(i,o)||pe($s,o)||pe(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:pe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Yu=!0;function CT(t){const e=Mf(t),n=t.proxy,i=t.ctx;Yu=!1,e.beforeCreate&&jp(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:m,activated:y,deactivated:b,beforeDestroy:_,beforeUnmount:v,destroyed:E,unmounted:S,render:P,renderTracked:q,renderTriggered:$,errorCaptured:K,serverPrefetch:ye,expose:Fe,inheritAttrs:Rt,components:Gt,directives:ri,filters:Vt}=e;if(l&&ST(l,i,null,t.appContext.config.unwrapInjectedRef),o)for(const Ae in o){const Ie=o[Ae];se(Ie)&&(i[Ae]=Ie.bind(n))}if(r){const Ae=r.call(n,n);$e(Ae)&&(t.data=fs(Ae))}if(Yu=!0,s)for(const Ae in s){const Ie=s[Ae],Xt=se(Ie)?Ie.bind(n,n):se(Ie.get)?Ie.get.bind(n,n):un,Ni=!se(Ie)&&se(Ie.set)?Ie.set.bind(n):un,Jt=ve({get:Xt,set:Ni});Object.defineProperty(i,Ae,{enumerable:!0,configurable:!0,get:()=>Jt.value,set:Nt=>Jt.value=Nt})}if(a)for(const Ae in a)U_(a[Ae],i,n,Ae);if(c){const Ae=se(c)?c.call(n):c;Reflect.ownKeys(Ae).forEach(Ie=>{Ba(Ie,Ae[Ie])})}u&&jp(u,t,"c");function qe(Ae,Ie){te(Ie)?Ie.forEach(Xt=>Ae(Xt.bind(n))):Ie&&Ae(Ie.bind(n))}if(qe(mT,h),qe(O_,f),qe(gT,d),qe(yT,m),qe(fT,y),qe(dT,b),qe(ET,K),qe(bT,q),qe(vT,$),qe(_T,v),qe(Pf,S),qe(P_,ye),te(Fe))if(Fe.length){const Ae=t.exposed||(t.exposed={});Fe.forEach(Ie=>{Object.defineProperty(Ae,Ie,{get:()=>n[Ie],set:Xt=>n[Ie]=Xt})})}else t.exposed||(t.exposed={});P&&t.render===un&&(t.render=P),Rt!=null&&(t.inheritAttrs=Rt),Gt&&(t.components=Gt),ri&&(t.directives=ri)}function ST(t,e,n=un,i=!1){te(t)&&(t=Qu(t));for(const r in t){const s=t[r];let o;$e(s)?"default"in s?o=Mt(s.from||r,s.default,!0):o=Mt(s.from||r):o=Mt(s),je(o)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function jp(t,e,n){fn(te(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function U_(t,e,n,i){const r=i.includes(".")?N_(n,i):()=>n[i];if(et(t)){const s=e[t];se(s)&&qi(r,s)}else if(se(t))qi(r,t.bind(n));else if($e(t))if(te(t))t.forEach(s=>U_(s,e,n,i));else{const s=se(t.handler)?t.handler.bind(n):e[t.handler];se(s)&&qi(r,s,t)}}function Mf(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:!r.length&&!n&&!i?c=e:(c={},r.length&&r.forEach(l=>nc(c,l,o,!0)),nc(c,e,o)),$e(e)&&s.set(e,c),c}function nc(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&nc(t,s,n,!0),r&&r.forEach(o=>nc(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=AT[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const AT={data:zp,props:Oi,emits:Oi,methods:Oi,computed:Oi,beforeCreate:Ct,created:Ct,beforeMount:Ct,mounted:Ct,beforeUpdate:Ct,updated:Ct,beforeDestroy:Ct,beforeUnmount:Ct,destroyed:Ct,unmounted:Ct,activated:Ct,deactivated:Ct,errorCaptured:Ct,serverPrefetch:Ct,components:Oi,directives:Oi,watch:RT,provide:zp,inject:kT};function zp(t,e){return e?t?function(){return kt(se(t)?t.call(this,this):t,se(e)?e.call(this,this):e)}:e:t}function kT(t,e){return Oi(Qu(t),Qu(e))}function Qu(t){if(te(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ct(t,e){return t?[...new Set([].concat(t,e))]:e}function Oi(t,e){return t?kt(kt(Object.create(null),t),e):e}function RT(t,e){if(!t)return e;if(!e)return t;const n=kt(Object.create(null),t);for(const i in e)n[i]=Ct(t[i],e[i]);return n}function NT(t,e,n,i=!1){const r={},s={};Ja(s,il,1),t.propsDefaults=Object.create(null),V_(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:zw(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function xT(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=ge(r),[c]=t.propsOptions;let l=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Xc(t.emitsOptions,f))continue;const d=e[f];if(c)if(pe(s,f))d!==s[f]&&(s[f]=d,l=!0);else{const m=kn(f);r[m]=Xu(c,a,m,d,t,!1)}else d!==s[f]&&(s[f]=d,l=!0)}}}else{V_(t,e,r,s)&&(l=!0);let u;for(const h in a)(!e||!pe(e,h)&&((u=ls(h))===h||!pe(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Xu(c,a,h,void 0,t,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!pe(e,h))&&(delete s[h],l=!0)}l&&Kn(t,"set","$attrs")}function V_(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Va(c))continue;const l=e[c];let u;r&&pe(r,u=kn(c))?!s||!s.includes(u)?n[u]=l:(a||(a={}))[u]=l:Xc(t.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,o=!0)}if(s){const c=ge(n),l=a||xe;for(let u=0;u<s.length;u++){const h=s[u];n[h]=Xu(r,c,h,l[h],t,!pe(l,h))}}return o}function Xu(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=pe(o,"default");if(a&&i===void 0){const c=o.default;if(o.type!==Function&&se(c)){const{propsDefaults:l}=r;n in l?i=l[n]:(Kr(r),i=l[n]=c.call(null,e),Gi())}else i=c}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===ls(n))&&(i=!0))}return i}function $_(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let c=!1;if(!se(t)){const u=h=>{c=!0;const[f,d]=$_(h,e,!0);kt(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!c)return $e(t)&&i.set(t,xr),xr;if(te(s))for(let u=0;u<s.length;u++){const h=kn(s[u]);Hp(h)&&(o[h]=xe)}else if(s)for(const u in s){const h=kn(u);if(Hp(h)){const f=s[u],d=o[h]=te(f)||se(f)?{type:f}:Object.assign({},f);if(d){const m=qp(Boolean,d.type),y=qp(String,d.type);d[0]=m>-1,d[1]=y<0||m<y,(m>-1||pe(d,"default"))&&a.push(h)}}}const l=[o,a];return $e(t)&&i.set(t,l),l}function Hp(t){return t[0]!=="$"}function Kp(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Wp(t,e){return Kp(t)===Kp(e)}function qp(t,e){return te(e)?e.findIndex(n=>Wp(n,t)):se(e)&&Wp(e,t)?0:-1}const B_=t=>t[0]==="_"||t==="$stable",Lf=t=>te(t)?t.map(_n):[_n(t)],DT=(t,e,n)=>{if(e._n)return e;const i=iT((...r)=>Lf(e(...r)),n);return i._c=!1,i},j_=(t,e,n)=>{const i=t._ctx;for(const r in t){if(B_(r))continue;const s=t[r];if(se(s))e[r]=DT(r,s,i);else if(s!=null){const o=Lf(s);e[r]=()=>o}}},z_=(t,e)=>{const n=Lf(e);t.slots.default=()=>n},OT=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ge(e),Ja(e,"_",n)):j_(e,t.slots={})}else t.slots={},e&&z_(t,e);Ja(t.slots,il,1)},PT=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=xe;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(kt(r,e),!n&&a===1&&delete r._):(s=!e.$stable,j_(e,r)),o=e}else e&&(z_(t,e),o={default:1});if(s)for(const a in r)!B_(a)&&!(a in o)&&delete r[a]};function H_(){return{app:null,config:{isNativeTag:cw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let MT=0;function LT(t,e){return function(i,r=null){se(i)||(i=Object.assign({},i)),r!=null&&!$e(r)&&(r=null);const s=H_(),o=new Set;let a=!1;const c=s.app={_uid:MT++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:tI,get config(){return s.config},set config(l){},use(l,...u){return o.has(l)||(l&&se(l.install)?(o.add(l),l.install(c,...u)):se(l)&&(o.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,h){if(!a){const f=ht(i,r);return f.appContext=s,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,rl(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c}};return c}}function Ju(t,e,n,i,r=!1){if(te(t)){t.forEach((f,d)=>Ju(f,e&&(te(e)?e[d]:e),n,i,r));return}if(ja(i)&&!r)return;const s=i.shapeFlag&4?rl(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:c}=t,l=e&&e.r,u=a.refs===xe?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(et(l)?(u[l]=null,pe(h,l)&&(h[l]=null)):je(l)&&(l.value=null)),se(c))pi(c,a,12,[o,u]);else{const f=et(c),d=je(c);if(f||d){const m=()=>{if(t.f){const y=f?pe(h,c)?h[c]:u[c]:c.value;r?te(y)&&vf(y,s):te(y)?y.includes(s)||y.push(s):f?(u[c]=[s],pe(h,c)&&(h[c]=u[c])):(c.value=[s],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,pe(h,c)&&(h[c]=o)):d&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Dt(m,n)):m()}}}const Dt=lT;function FT(t){return UT(t)}function UT(t,e){const n=pw();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=un,insertStaticContent:m}=t,y=(p,g,w,T=null,C=null,x=null,L=!1,N=null,D=!!g.dynamicChildren)=>{if(p===g)return;p&&!Ss(p,g)&&(T=M(p),Nt(p,C,x,!0),p=null),g.patchFlag===-2&&(D=!1,g.dynamicChildren=null);const{type:k,ref:G,shapeFlag:B}=g;switch(k){case nl:b(p,g,w,T);break;case Ji:_(p,g,w,T);break;case za:p==null&&v(g,w,T,L);break;case Ke:Gt(p,g,w,T,C,x,L,N,D);break;default:B&1?P(p,g,w,T,C,x,L,N,D):B&6?ri(p,g,w,T,C,x,L,N,D):(B&64||B&128)&&k.process(p,g,w,T,C,x,L,N,D,de)}G!=null&&C&&Ju(G,p&&p.ref,x,g||p,!g)},b=(p,g,w,T)=>{if(p==null)i(g.el=a(g.children),w,T);else{const C=g.el=p.el;g.children!==p.children&&l(C,g.children)}},_=(p,g,w,T)=>{p==null?i(g.el=c(g.children||""),w,T):g.el=p.el},v=(p,g,w,T)=>{[p.el,p.anchor]=m(p.children,g,w,T,p.el,p.anchor)},E=({el:p,anchor:g},w,T)=>{let C;for(;p&&p!==g;)C=f(p),i(p,w,T),p=C;i(g,w,T)},S=({el:p,anchor:g})=>{let w;for(;p&&p!==g;)w=f(p),r(p),p=w;r(g)},P=(p,g,w,T,C,x,L,N,D)=>{L=L||g.type==="svg",p==null?q(g,w,T,C,x,L,N,D):ye(p,g,C,x,L,N,D)},q=(p,g,w,T,C,x,L,N)=>{let D,k;const{type:G,props:B,shapeFlag:Y,transition:ee,dirs:ae}=p;if(D=p.el=o(p.type,x,B&&B.is,B),Y&8?u(D,p.children):Y&16&&K(p.children,D,null,T,C,x&&G!=="foreignObject",L,N),ae&&xi(p,null,T,"created"),$(D,p,p.scopeId,L,T),B){for(const Ce in B)Ce!=="value"&&!Va(Ce)&&s(D,Ce,null,B[Ce],x,p.children,T,C,F);"value"in B&&s(D,"value",null,B.value),(k=B.onVnodeBeforeMount)&&yn(k,T,p)}ae&&xi(p,null,T,"beforeMount");const ke=(!C||C&&!C.pendingBranch)&&ee&&!ee.persisted;ke&&ee.beforeEnter(D),i(D,g,w),((k=B&&B.onVnodeMounted)||ke||ae)&&Dt(()=>{k&&yn(k,T,p),ke&&ee.enter(D),ae&&xi(p,null,T,"mounted")},C)},$=(p,g,w,T,C)=>{if(w&&d(p,w),T)for(let x=0;x<T.length;x++)d(p,T[x]);if(C){let x=C.subTree;if(g===x){const L=C.vnode;$(p,L,L.scopeId,L.slotScopeIds,C.parent)}}},K=(p,g,w,T,C,x,L,N,D=0)=>{for(let k=D;k<p.length;k++){const G=p[k]=N?ui(p[k]):_n(p[k]);y(null,G,g,w,T,C,x,L,N)}},ye=(p,g,w,T,C,x,L)=>{const N=g.el=p.el;let{patchFlag:D,dynamicChildren:k,dirs:G}=g;D|=p.patchFlag&16;const B=p.props||xe,Y=g.props||xe;let ee;w&&Di(w,!1),(ee=Y.onVnodeBeforeUpdate)&&yn(ee,w,g,p),G&&xi(g,p,w,"beforeUpdate"),w&&Di(w,!0);const ae=C&&g.type!=="foreignObject";if(k?Fe(p.dynamicChildren,k,N,w,T,ae,x):L||Ie(p,g,N,null,w,T,ae,x,!1),D>0){if(D&16)Rt(N,g,B,Y,w,T,C);else if(D&2&&B.class!==Y.class&&s(N,"class",null,Y.class,C),D&4&&s(N,"style",B.style,Y.style,C),D&8){const ke=g.dynamicProps;for(let Ce=0;Ce<ke.length;Ce++){const Ge=ke[Ce],Zt=B[Ge],yr=Y[Ge];(yr!==Zt||Ge==="value")&&s(N,Ge,Zt,yr,C,p.children,w,T,F)}}D&1&&p.children!==g.children&&u(N,g.children)}else!L&&k==null&&Rt(N,g,B,Y,w,T,C);((ee=Y.onVnodeUpdated)||G)&&Dt(()=>{ee&&yn(ee,w,g,p),G&&xi(g,p,w,"updated")},T)},Fe=(p,g,w,T,C,x,L)=>{for(let N=0;N<g.length;N++){const D=p[N],k=g[N],G=D.el&&(D.type===Ke||!Ss(D,k)||D.shapeFlag&70)?h(D.el):w;y(D,k,G,null,T,C,x,L,!0)}},Rt=(p,g,w,T,C,x,L)=>{if(w!==T){if(w!==xe)for(const N in w)!Va(N)&&!(N in T)&&s(p,N,w[N],null,L,g.children,C,x,F);for(const N in T){if(Va(N))continue;const D=T[N],k=w[N];D!==k&&N!=="value"&&s(p,N,k,D,L,g.children,C,x,F)}"value"in T&&s(p,"value",w.value,T.value)}},Gt=(p,g,w,T,C,x,L,N,D)=>{const k=g.el=p?p.el:a(""),G=g.anchor=p?p.anchor:a("");let{patchFlag:B,dynamicChildren:Y,slotScopeIds:ee}=g;ee&&(N=N?N.concat(ee):ee),p==null?(i(k,w,T),i(G,w,T),K(g.children,w,G,C,x,L,N,D)):B>0&&B&64&&Y&&p.dynamicChildren?(Fe(p.dynamicChildren,Y,w,C,x,L,N),(g.key!=null||C&&g===C.subTree)&&K_(p,g,!0)):Ie(p,g,w,G,C,x,L,N,D)},ri=(p,g,w,T,C,x,L,N,D)=>{g.slotScopeIds=N,p==null?g.shapeFlag&512?C.ctx.activate(g,w,T,L,D):Vt(g,w,T,C,x,L,D):it(p,g,D)},Vt=(p,g,w,T,C,x,L)=>{const N=p.component=qT(p,T,C);if(x_(p)&&(N.ctx.renderer=de),GT(N),N.asyncDep){if(C&&C.registerDep(N,qe),!p.el){const D=N.subTree=ht(Ji);_(null,D,g,w)}return}qe(N,p,g,w,C,x,L)},it=(p,g,w)=>{const T=g.component=p.component;if(oT(p,g,w))if(T.asyncDep&&!T.asyncResolved){Ae(T,g,w);return}else T.next=g,Zw(T.update),T.update();else g.el=p.el,T.vnode=g},qe=(p,g,w,T,C,x,L)=>{const N=()=>{if(p.isMounted){let{next:G,bu:B,u:Y,parent:ee,vnode:ae}=p,ke=G,Ce;Di(p,!1),G?(G.el=ae.el,Ae(p,G,L)):G=ae,B&&$a(B),(Ce=G.props&&G.props.onVnodeBeforeUpdate)&&yn(Ce,ee,G,ae),Di(p,!0);const Ge=iu(p),Zt=p.subTree;p.subTree=Ge,y(Zt,Ge,h(Zt.el),M(Zt),p,C,x),G.el=Ge.el,ke===null&&aT(p,Ge.el),Y&&Dt(Y,C),(Ce=G.props&&G.props.onVnodeUpdated)&&Dt(()=>yn(Ce,ee,G,ae),C)}else{let G;const{el:B,props:Y}=g,{bm:ee,m:ae,parent:ke}=p,Ce=ja(g);if(Di(p,!1),ee&&$a(ee),!Ce&&(G=Y&&Y.onVnodeBeforeMount)&&yn(G,ke,g),Di(p,!0),B&&oe){const Ge=()=>{p.subTree=iu(p),oe(B,p.subTree,p,C,null)};Ce?g.type.__asyncLoader().then(()=>!p.isUnmounted&&Ge()):Ge()}else{const Ge=p.subTree=iu(p);y(null,Ge,w,T,p,C,x),g.el=Ge.el}if(ae&&Dt(ae,C),!Ce&&(G=Y&&Y.onVnodeMounted)){const Ge=g;Dt(()=>yn(G,ke,Ge),C)}(g.shapeFlag&256||ke&&ja(ke.vnode)&&ke.vnode.shapeFlag&256)&&p.a&&Dt(p.a,C),p.isMounted=!0,g=w=T=null}},D=p.effect=new If(N,()=>Df(k),p.scope),k=p.update=()=>D.run();k.id=p.uid,Di(p,!0),k()},Ae=(p,g,w)=>{g.component=p;const T=p.vnode.props;p.vnode=g,p.next=null,xT(p,g.props,T,w),PT(p,g.children,w),us(),Vp(),hs()},Ie=(p,g,w,T,C,x,L,N,D=!1)=>{const k=p&&p.children,G=p?p.shapeFlag:0,B=g.children,{patchFlag:Y,shapeFlag:ee}=g;if(Y>0){if(Y&128){Ni(k,B,w,T,C,x,L,N,D);return}else if(Y&256){Xt(k,B,w,T,C,x,L,N,D);return}}ee&8?(G&16&&F(k,C,x),B!==k&&u(w,B)):G&16?ee&16?Ni(k,B,w,T,C,x,L,N,D):F(k,C,x,!0):(G&8&&u(w,""),ee&16&&K(B,w,T,C,x,L,N,D))},Xt=(p,g,w,T,C,x,L,N,D)=>{p=p||xr,g=g||xr;const k=p.length,G=g.length,B=Math.min(k,G);let Y;for(Y=0;Y<B;Y++){const ee=g[Y]=D?ui(g[Y]):_n(g[Y]);y(p[Y],ee,w,null,C,x,L,N,D)}k>G?F(p,C,x,!0,!1,B):K(g,w,T,C,x,L,N,D,B)},Ni=(p,g,w,T,C,x,L,N,D)=>{let k=0;const G=g.length;let B=p.length-1,Y=G-1;for(;k<=B&&k<=Y;){const ee=p[k],ae=g[k]=D?ui(g[k]):_n(g[k]);if(Ss(ee,ae))y(ee,ae,w,null,C,x,L,N,D);else break;k++}for(;k<=B&&k<=Y;){const ee=p[B],ae=g[Y]=D?ui(g[Y]):_n(g[Y]);if(Ss(ee,ae))y(ee,ae,w,null,C,x,L,N,D);else break;B--,Y--}if(k>B){if(k<=Y){const ee=Y+1,ae=ee<G?g[ee].el:T;for(;k<=Y;)y(null,g[k]=D?ui(g[k]):_n(g[k]),w,ae,C,x,L,N,D),k++}}else if(k>Y)for(;k<=B;)Nt(p[k],C,x,!0),k++;else{const ee=k,ae=k,ke=new Map;for(k=ae;k<=Y;k++){const $t=g[k]=D?ui(g[k]):_n(g[k]);$t.key!=null&&ke.set($t.key,k)}let Ce,Ge=0;const Zt=Y-ae+1;let yr=!1,kp=0;const Cs=new Array(Zt);for(k=0;k<Zt;k++)Cs[k]=0;for(k=ee;k<=B;k++){const $t=p[k];if(Ge>=Zt){Nt($t,C,x,!0);continue}let gn;if($t.key!=null)gn=ke.get($t.key);else for(Ce=ae;Ce<=Y;Ce++)if(Cs[Ce-ae]===0&&Ss($t,g[Ce])){gn=Ce;break}gn===void 0?Nt($t,C,x,!0):(Cs[gn-ae]=k+1,gn>=kp?kp=gn:yr=!0,y($t,g[gn],w,null,C,x,L,N,D),Ge++)}const Rp=yr?VT(Cs):xr;for(Ce=Rp.length-1,k=Zt-1;k>=0;k--){const $t=ae+k,gn=g[$t],Np=$t+1<G?g[$t+1].el:T;Cs[k]===0?y(null,gn,w,Np,C,x,L,N,D):yr&&(Ce<0||k!==Rp[Ce]?Jt(gn,w,Np,2):Ce--)}}},Jt=(p,g,w,T,C=null)=>{const{el:x,type:L,transition:N,children:D,shapeFlag:k}=p;if(k&6){Jt(p.component.subTree,g,w,T);return}if(k&128){p.suspense.move(g,w,T);return}if(k&64){L.move(p,g,w,de);return}if(L===Ke){i(x,g,w);for(let B=0;B<D.length;B++)Jt(D[B],g,w,T);i(p.anchor,g,w);return}if(L===za){E(p,g,w);return}if(T!==2&&k&1&&N)if(T===0)N.beforeEnter(x),i(x,g,w),Dt(()=>N.enter(x),C);else{const{leave:B,delayLeave:Y,afterLeave:ee}=N,ae=()=>i(x,g,w),ke=()=>{B(x,()=>{ae(),ee&&ee()})};Y?Y(x,ae,ke):ke()}else i(x,g,w)},Nt=(p,g,w,T=!1,C=!1)=>{const{type:x,props:L,ref:N,children:D,dynamicChildren:k,shapeFlag:G,patchFlag:B,dirs:Y}=p;if(N!=null&&Ju(N,null,w,p,!0),G&256){g.ctx.deactivate(p);return}const ee=G&1&&Y,ae=!ja(p);let ke;if(ae&&(ke=L&&L.onVnodeBeforeUnmount)&&yn(ke,g,p),G&6)I(p.component,w,T);else{if(G&128){p.suspense.unmount(w,T);return}ee&&xi(p,null,g,"beforeUnmount"),G&64?p.type.remove(p,g,w,C,de,T):k&&(x!==Ke||B>0&&B&64)?F(k,g,w,!1,!0):(x===Ke&&B&384||!C&&G&16)&&F(D,g,w),T&&gr(p)}(ae&&(ke=L&&L.onVnodeUnmounted)||ee)&&Dt(()=>{ke&&yn(ke,g,p),ee&&xi(p,null,g,"unmounted")},w)},gr=p=>{const{type:g,el:w,anchor:T,transition:C}=p;if(g===Ke){ua(w,T);return}if(g===za){S(p);return}const x=()=>{r(w),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(p.shapeFlag&1&&C&&!C.persisted){const{leave:L,delayLeave:N}=C,D=()=>L(w,x);N?N(p.el,x,D):D()}else x()},ua=(p,g)=>{let w;for(;p!==g;)w=f(p),r(p),p=w;r(g)},I=(p,g,w)=>{const{bum:T,scope:C,update:x,subTree:L,um:N}=p;T&&$a(T),C.stop(),x&&(x.active=!1,Nt(L,p,g,w)),N&&Dt(N,g),Dt(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},F=(p,g,w,T=!1,C=!1,x=0)=>{for(let L=x;L<p.length;L++)Nt(p[L],g,w,T,C)},M=p=>p.shapeFlag&6?M(p.component.subTree):p.shapeFlag&128?p.suspense.next():f(p.anchor||p.el),W=(p,g,w)=>{p==null?g._vnode&&Nt(g._vnode,null,null,!0):y(g._vnode||null,p,g,null,null,null,w),Vp(),A_(),g._vnode=p},de={p:y,um:Nt,m:Jt,r:gr,mt:Vt,mc:K,pc:Ie,pbc:Fe,n:M,o:t};let Be,oe;return e&&([Be,oe]=e(de)),{render:W,hydrate:Be,createApp:LT(W,Be)}}function Di({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function K_(t,e,n=!1){const i=t.children,r=e.children;if(te(i)&&te(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=ui(r[s]),a.el=o.el),n||K_(o,a)),a.type===nl&&(a.el=o.el)}}function VT(t){const e=t.slice(),n=[0];let i,r,s,o,a;const c=t.length;for(i=0;i<c;i++){const l=t[i];if(l!==0){if(r=n[n.length-1],t[r]<l){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<l?s=a+1:o=a;l<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const $T=t=>t.__isTeleport,Ke=Symbol(void 0),nl=Symbol(void 0),Ji=Symbol(void 0),za=Symbol(void 0),Bs=[];let sn=null;function re(t=!1){Bs.push(sn=t?null:[])}function BT(){Bs.pop(),sn=Bs[Bs.length-1]||null}let co=1;function Gp(t){co+=t}function W_(t){return t.dynamicChildren=co>0?sn||xr:null,BT(),co>0&&sn&&sn.push(t),t}function _e(t,e,n,i,r,s){return W_(Re(t,e,n,i,r,s,!0))}function Cn(t,e,n,i,r){return W_(ht(t,e,n,i,r,!0))}function Zu(t){return t?t.__v_isVNode===!0:!1}function Ss(t,e){return t.type===e.type&&t.key===e.key}const il="__vInternal",q_=({key:t})=>t??null,Ha=({ref:t,ref_key:e,ref_for:n})=>t!=null?et(t)||je(t)||se(t)?{i:zt,r:t,k:e,f:!!n}:t:null;function Re(t,e=null,n=null,i=0,r=null,s=t===Ke?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&q_(e),ref:e&&Ha(e),scopeId:Jc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:zt};return a?(Ff(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=et(n)?8:16),co>0&&!o&&sn&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&sn.push(c),c}const ht=jT;function jT(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===wT)&&(t=Ji),Zu(t)){const a=Hr(t,e,!0);return n&&Ff(a,n),co>0&&!s&&sn&&(a.shapeFlag&6?sn[sn.indexOf(t)]=a:sn.push(a)),a.patchFlag|=-2,a}if(ZT(t)&&(t=t.__vccOpts),e){e=zT(e);let{class:a,style:c}=e;a&&!et(a)&&(e.class=vi(a)),$e(c)&&(__(c)&&!te(c)&&(c=kt({},c)),e.style=cs(c))}const o=et(t)?1:cT(t)?128:$T(t)?64:$e(t)?4:se(t)?2:0;return Re(t,e,n,i,r,o,s,!0)}function zT(t){return t?__(t)||il in t?kt({},t):t:null}function Hr(t,e,n=!1){const{props:i,ref:r,patchFlag:s,children:o}=t,a=e?HT(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&q_(a),ref:e&&e.ref?n&&r?te(r)?r.concat(Ha(e)):[r,Ha(e)]:Ha(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ke?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Hr(t.ssContent),ssFallback:t.ssFallback&&Hr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Bn(t=" ",e=0){return ht(nl,null,t,e)}function St(t="",e=!1){return e?(re(),Cn(Ji,null,t)):ht(Ji,null,t)}function _n(t){return t==null||typeof t=="boolean"?ht(Ji):te(t)?ht(Ke,null,t.slice()):typeof t=="object"?ui(t):ht(nl,null,String(t))}function ui(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Hr(t)}function Ff(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(te(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Ff(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(il in e)?e._ctx=zt:r===3&&zt&&(zt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else se(e)?(e={default:e,_ctx:zt},n=32):(e=String(e),i&64?(n=16,e=[Bn(e)]):n=8);t.children=e,t.shapeFlag|=n}function HT(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=vi([e.class,i.class]));else if(r==="style")e.style=cs([e.style,i.style]);else if(Kc(r)){const s=e[r],o=i[r];o&&s!==o&&!(te(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function yn(t,e,n,i=null){fn(t,e,7,[n,i])}const KT=H_();let WT=0;function qT(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||KT,s={uid:WT++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new r_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$_(i,r),emitsOptions:R_(i,r),emit:null,emitted:null,propsDefaults:xe,inheritAttrs:i.inheritAttrs,ctx:xe,data:xe,props:xe,attrs:xe,slots:xe,refs:xe,setupState:xe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=nT.bind(null,s),t.ce&&t.ce(s),s}let We=null;const Mo=()=>We||zt,Kr=t=>{We=t,t.scope.on()},Gi=()=>{We&&We.scope.off(),We=null};function G_(t){return t.vnode.shapeFlag&4}let lo=!1;function GT(t,e=!1){lo=e;const{props:n,children:i}=t.vnode,r=G_(t);NT(t,n,r,e),OT(t,i);const s=r?YT(t,e):void 0;return lo=!1,s}function YT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=jr(new Proxy(t.ctx,IT));const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?XT(t):null;Kr(t),us();const s=pi(i,t,0,[t.props,r]);if(hs(),Gi(),t_(s)){if(s.then(Gi,Gi),e)return s.then(o=>{Yp(t,o,e)}).catch(o=>{Qc(o,t,0)});t.asyncDep=s}else Yp(t,s,e)}else Y_(t,e)}function Yp(t,e,n){se(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:$e(e)&&(t.setupState=T_(e)),Y_(t,n)}let Qp;function Y_(t,e,n){const i=t.type;if(!t.render){if(!e&&Qp&&!i.render){const r=i.template||Mf(t).template;if(r){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=i,l=kt(kt({isCustomElement:s,delimiters:a},o),c);i.render=Qp(r,l)}}t.render=i.render||un}Kr(t),us(),CT(t),hs(),Gi()}function QT(t){return new Proxy(t.attrs,{get(e,n){return Ft(t,"get","$attrs"),e[n]}})}function XT(t){const e=i=>{t.exposed=i||{}};let n;return{get attrs(){return n||(n=QT(t))},slots:t.slots,emit:t.emit,expose:e}}function rl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(T_(jr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in $s)return $s[n](t)},has(e,n){return n in e||n in $s}}))}function JT(t,e=!0){return se(t)?t.displayName||t.name:t.name||e&&t.__name}function ZT(t){return se(t)&&"__vccOpts"in t}const ve=(t,e)=>Qw(t,e,lo);function sl(t,e,n){const i=arguments.length;return i===2?$e(e)&&!te(e)?Zu(e)?ht(t,null,[e]):ht(t,e):ht(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Zu(n)&&(n=[n]),ht(t,e,n))}const Q_=Symbol(""),eI=()=>Mt(Q_),tI="3.2.47",nI="http://www.w3.org/2000/svg",Fi=typeof document<"u"?document:null,Xp=Fi&&Fi.createElement("template"),iI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e?Fi.createElementNS(nI,t):Fi.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Fi.createTextNode(t),createComment:t=>Fi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Fi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Xp.innerHTML=i?`<svg>${t}</svg>`:t;const a=Xp.content;if(i){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function rI(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function sI(t,e,n){const i=t.style,r=et(n);if(n&&!r){if(e&&!et(e))for(const s in e)n[s]==null&&eh(i,s,"");for(const s in n)eh(i,s,n[s])}else{const s=i.display;r?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=s)}}const Jp=/\s*!important$/;function eh(t,e,n){if(te(n))n.forEach(i=>eh(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=oI(t,e);Jp.test(n)?t.setProperty(ls(i),n.replace(Jp,""),"important"):t[i]=n}}const Zp=["Webkit","Moz","ms"],su={};function oI(t,e){const n=su[e];if(n)return n;let i=kn(e);if(i!=="filter"&&i in t)return su[e]=i;i=Gc(i);for(let r=0;r<Zp.length;r++){const s=Zp[r]+i;if(s in t)return su[e]=s}return e}const em="http://www.w3.org/1999/xlink";function aI(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(em,e.slice(6,e.length)):t.setAttributeNS(em,e,n);else{const s=aw(e);n==null||s&&!Jy(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function cI(t,e,n,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Jy(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Er(t,e,n,i){t.addEventListener(e,n,i)}function lI(t,e,n,i){t.removeEventListener(e,n,i)}function uI(t,e,n,i,r=null){const s=t._vei||(t._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,c]=hI(e);if(i){const l=s[e]=pI(i,r);Er(t,a,l,c)}else o&&(lI(t,a,o,c),s[e]=void 0)}}const tm=/(?:Once|Passive|Capture)$/;function hI(t){let e;if(tm.test(t)){e={};let i;for(;i=t.match(tm);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ls(t.slice(2)),e]}let ou=0;const fI=Promise.resolve(),dI=()=>ou||(fI.then(()=>ou=0),ou=Date.now());function pI(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;fn(mI(i,n.value),e,5,[i])};return n.value=t,n.attached=dI(),n}function mI(t,e){if(te(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const nm=/^on[a-z]/,gI=(t,e,n,i,r=!1,s,o,a,c)=>{e==="class"?rI(t,i,r):e==="style"?sI(t,n,i):Kc(e)?_f(e)||uI(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):yI(t,e,i,r))?cI(t,e,i,s,o,a,c):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),aI(t,e,i,r))};function yI(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&nm.test(e)&&se(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||nm.test(e)&&et(n)?!1:e in t}function X_(t){const e=Mo();if(!e)return;const n=e.ut=(r=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(s=>nh(s,r))},i=()=>{const r=t(e.proxy);th(e.subTree,r),n(r)};uT(i),O_(()=>{const r=new MutationObserver(i);r.observe(e.subTree.el.parentNode,{childList:!0}),Pf(()=>r.disconnect())})}function th(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{th(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)nh(t.el,e);else if(t.type===Ke)t.children.forEach(n=>th(n,e));else if(t.type===za){let{el:n,anchor:i}=t;for(;n&&(nh(n,e),n!==i);)n=n.nextSibling}}function nh(t,e){if(t.nodeType===1){const n=t.style;for(const i in e)n.setProperty(`--${i}`,e[i])}}const im=t=>{const e=t.props["onUpdate:modelValue"]||!1;return te(e)?n=>$a(e,n):e};function _I(t){t.target.composing=!0}function rm(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const J_={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t._assign=im(r);const s=i||r.props&&r.props.type==="number";Er(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=zu(a)),t._assign(a)}),n&&Er(t,"change",()=>{t.value=t.value.trim()}),e||(Er(t,"compositionstart",_I),Er(t,"compositionend",rm),Er(t,"change",rm))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:r}},s){if(t._assign=im(s),t.composing||document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===e||(r||t.type==="number")&&zu(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},vI=["ctrl","shift","alt","meta"],bI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>vI.some(n=>t[`${n}Key`]&&!e.includes(n))},ol=(t,e)=>(n,...i)=>{for(let r=0;r<e.length;r++){const s=bI[e[r]];if(s&&s(n,e))return}return t(n,...i)},EI=kt({patchProp:gI},iI);let sm;function wI(){return sm||(sm=FT(EI))}const TI=(...t)=>{const e=wI().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=II(i);if(!r)return;const s=e._component;!se(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function II(t){return et(t)?document.querySelector(t):t}var CI=!1;/*!
  * pinia v2.0.35
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Z_;const al=t=>Z_=t,ev=Symbol();function ih(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var js;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(js||(js={}));function SI(){const t=s_(!0),e=t.run(()=>hn({}));let n=[],i=[];const r=jr({install(s){al(r),r._a=s,s.provide(ev,r),s.config.globalProperties.$pinia=r,i.forEach(o=>n.push(o)),i=[]},use(s){return!this._a&&!CI?i.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const tv=()=>{};function om(t,e,n,i=tv){t.push(e);const r=()=>{const s=t.indexOf(e);s>-1&&(t.splice(s,1),i())};return!n&&wf()&&o_(r),r}function _r(t,...e){t.slice().forEach(n=>{n(...e)})}function rh(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,i)=>t.set(i,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],r=t[n];ih(r)&&ih(i)&&t.hasOwnProperty(n)&&!je(i)&&!di(i)?t[n]=rh(r,i):t[n]=i}return t}const AI=Symbol();function kI(t){return!ih(t)||!t.hasOwnProperty(AI)}const{assign:li}=Object;function RI(t){return!!(je(t)&&t.effect)}function NI(t,e,n,i){const{state:r,actions:s,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=r?r():{});const u=Ww(n.state.value[t]);return li(u,s,Object.keys(o||{}).reduce((h,f)=>(h[f]=jr(ve(()=>{al(n);const d=n._s.get(t);return o[f].call(d,d)})),h),{}))}return c=nv(t,l,e,n,i,!0),c}function nv(t,e,n={},i,r,s){let o;const a=li({actions:{}},n),c={deep:!0};let l,u,h=jr([]),f=jr([]),d;const m=i.state.value[t];!s&&!m&&(i.state.value[t]={}),hn({});let y;function b($){let K;l=u=!1,typeof $=="function"?($(i.state.value[t]),K={type:js.patchFunction,storeId:t,events:d}):(rh(i.state.value[t],$),K={type:js.patchObject,payload:$,storeId:t,events:d});const ye=y=Symbol();xf().then(()=>{y===ye&&(l=!0)}),u=!0,_r(h,K,i.state.value[t])}const _=s?function(){const{state:K}=n,ye=K?K():{};this.$patch(Fe=>{li(Fe,ye)})}:tv;function v(){o.stop(),h=[],f=[],i._s.delete(t)}function E($,K){return function(){al(i);const ye=Array.from(arguments),Fe=[],Rt=[];function Gt(it){Fe.push(it)}function ri(it){Rt.push(it)}_r(f,{args:ye,name:$,store:P,after:Gt,onError:ri});let Vt;try{Vt=K.apply(this&&this.$id===t?this:P,ye)}catch(it){throw _r(Rt,it),it}return Vt instanceof Promise?Vt.then(it=>(_r(Fe,it),it)).catch(it=>(_r(Rt,it),Promise.reject(it))):(_r(Fe,Vt),Vt)}}const S={_p:i,$id:t,$onAction:om.bind(null,f),$patch:b,$reset:_,$subscribe($,K={}){const ye=om(h,$,K.detached,()=>Fe()),Fe=o.run(()=>qi(()=>i.state.value[t],Rt=>{(K.flush==="sync"?u:l)&&$({storeId:t,type:js.direct,events:d},Rt)},li({},c,K)));return ye},$dispose:v},P=fs(S);i._s.set(t,P);const q=i._e.run(()=>(o=s_(),o.run(()=>e())));for(const $ in q){const K=q[$];if(je(K)&&!RI(K)||di(K))s||(m&&kI(K)&&(je(K)?K.value=m[$]:rh(K,m[$])),i.state.value[t][$]=K);else if(typeof K=="function"){const ye=E($,K);q[$]=ye,a.actions[$]=K}}return li(P,q),li(ge(P),q),Object.defineProperty(P,"$state",{get:()=>i.state.value[t],set:$=>{b(K=>{li(K,$)})}}),i._p.forEach($=>{li(P,o.run(()=>$({store:P,app:i._a,pinia:i,options:a})))}),m&&s&&n.hydrate&&n.hydrate(P.$state,m),l=!0,u=!0,P}function xI(t,e,n){let i,r;const s=typeof e=="function";typeof t=="string"?(i=t,r=s?n:e):(r=t,i=t.id);function o(a,c){const l=Mo();return a=a||l&&Mt(ev,null),a&&al(a),a=Z_,a._s.has(i)||(s?nv(i,e,r,a):NI(i,r,a)),a._s.get(i)}return o.$id=i,o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O=function(t,e){if(!t)throw ds(e)},ds=function(t){return new Error("Firebase Database ("+iv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},DI=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},cl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|l>>6,d=l&63;c||(d=64,o||(f=64)),i.push(n[u],n[h],n[f],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(rv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):DI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||l==null||h==null)throw new OI;const f=s<<2|a>>4;if(i.push(f),l!==64){const d=a<<4&240|l>>2;if(i.push(d),h!==64){const m=l<<6&192|h;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class OI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sv=function(t){const e=rv(t);return cl.encodeByteArray(e,!0)},ic=function(t){return sv(t).replace(/\./g,"")},rc=function(t){try{return cl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(t){return ov(void 0,t)}function ov(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!MI(n)||(t[n]=ov(t[n],e[n]));return t}function MI(t){return t!=="__proto__"}/**
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
 */function LI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const FI=()=>LI().__FIREBASE_DEFAULTS__,UI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},VI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&rc(t[1]);return e&&JSON.parse(e)},Uf=()=>{try{return FI()||UI()||VI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},$I=t=>{var e,n;return(n=(e=Uf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},BI=t=>{const e=$I(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},jI=()=>{var t;return(t=Uf())===null||t===void 0?void 0:t.config},zI=t=>{var e;return(e=Uf())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function HI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ic(JSON.stringify(n)),ic(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Rn())}function KI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function av(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cv(){return iv.NODE_ADMIN===!0}function lv(){try{return typeof indexedDB=="object"}catch{return!1}}function WI(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI="FirebaseError";class ei extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=qI,Object.setPrototypeOf(this,ei.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ps.prototype.create)}}class ps{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?GI(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new ei(r,a,i)}}function GI(t,e){return t.replace(YI,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const YI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(t){return JSON.parse(t)}function ut(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv=function(t){let e={},n={},i={},r="";try{const s=t.split(".");e=ho(rc(s[0])||""),n=ho(rc(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:r}},QI=function(t){const e=uv(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},XI=function(t){const e=uv(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Wr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function am(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function sc(t,e,n){const i={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=e.call(n,t[r],r,t));return i}function sh(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(cm(s)&&cm(o)){if(!sh(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function cm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)i[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(f<<1|f>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let h=0;h<80;h++){h<40?h<20?(l=a^s&(o^a),u=1518500249):(l=s^o^a,u=1859775393):h<60?(l=s&o|a&(s|o),u=2400959708):(l=s^o^a,u=3395469782);const f=(r<<5|r>>>27)+l+c+u+i[h]&4294967295;c=a,a=o,o=(s<<30|s>>>2)&4294967295,s=r,r=f}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<n;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}}function ZI(t,e){const n=new eC(t,e);return n.subscribe.bind(n)}class eC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");tC(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=au),r.error===void 0&&(r.error=au),r.complete===void 0&&(r.complete=au);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function au(){}function nC(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,O(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},ll=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ut(t){return t&&t._delegate?t._delegate:t}class pn{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Pi="[DEFAULT]";/**
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
 */class rC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new uo;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(oC(e))try{this.getOrInitializeService({instanceIdentifier:Pi})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=Pi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pi){return this.instances.has(e)}getOptions(e=Pi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:sC(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Pi){return this.component?this.component.multipleInstances?e:Pi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sC(t){return t===Pi?void 0:t}function oC(t){return t.instantiationMode==="EAGER"}/**
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
 */class aC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new rC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const cC={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},lC=me.INFO,uC={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},hC=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=uC[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Lo{constructor(e){this.name=e,this._logLevel=lC,this._logHandler=hC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const fC=(t,e)=>e.some(n=>t instanceof n);let lm,um;function dC(){return lm||(lm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pC(){return um||(um=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hv=new WeakMap,oh=new WeakMap,fv=new WeakMap,cu=new WeakMap,Bf=new WeakMap;function mC(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(mi(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&hv.set(n,t)}).catch(()=>{}),Bf.set(e,t),e}function gC(t){if(oh.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});oh.set(t,e)}let ah={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return oh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||fv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function yC(t){ah=t(ah)}function _C(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(lu(this),e,...n);return fv.set(i,e.sort?e.sort():[e]),mi(i)}:pC().includes(t)?function(...e){return t.apply(lu(this),e),mi(hv.get(this))}:function(...e){return mi(t.apply(lu(this),e))}}function vC(t){return typeof t=="function"?_C(t):(t instanceof IDBTransaction&&gC(t),fC(t,dC())?new Proxy(t,ah):t)}function mi(t){if(t instanceof IDBRequest)return mC(t);if(cu.has(t))return cu.get(t);const e=vC(t);return e!==t&&(cu.set(t,e),Bf.set(e,t)),e}const lu=t=>Bf.get(t);function bC(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=mi(o);return i&&o.addEventListener("upgradeneeded",c=>{i(mi(o.result),c.oldVersion,c.newVersion,mi(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{s&&c.addEventListener("close",()=>s()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const EC=["get","getKey","getAll","getAllKeys","count"],wC=["put","add","delete","clear"],uu=new Map;function hm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(uu.get(e))return uu.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=wC.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||EC.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return uu.set(e,s),s}yC(t=>({...t,get:(e,n,i)=>hm(e,n)||t.get(e,n,i),has:(e,n)=>!!hm(e,n)||t.has(e,n)}));/**
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
 */class TC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(IC(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function IC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ch="@firebase/app",fm="0.9.8";/**
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
 */const Zi=new Lo("@firebase/app"),CC="@firebase/app-compat",SC="@firebase/analytics-compat",AC="@firebase/analytics",kC="@firebase/app-check-compat",RC="@firebase/app-check",NC="@firebase/auth",xC="@firebase/auth-compat",DC="@firebase/database",OC="@firebase/database-compat",PC="@firebase/functions",MC="@firebase/functions-compat",LC="@firebase/installations",FC="@firebase/installations-compat",UC="@firebase/messaging",VC="@firebase/messaging-compat",$C="@firebase/performance",BC="@firebase/performance-compat",jC="@firebase/remote-config",zC="@firebase/remote-config-compat",HC="@firebase/storage",KC="@firebase/storage-compat",WC="@firebase/firestore",qC="@firebase/firestore-compat",GC="firebase",YC="9.20.0";/**
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
 */const lh="[DEFAULT]",QC={[ch]:"fire-core",[CC]:"fire-core-compat",[AC]:"fire-analytics",[SC]:"fire-analytics-compat",[RC]:"fire-app-check",[kC]:"fire-app-check-compat",[NC]:"fire-auth",[xC]:"fire-auth-compat",[DC]:"fire-rtdb",[OC]:"fire-rtdb-compat",[PC]:"fire-fn",[MC]:"fire-fn-compat",[LC]:"fire-iid",[FC]:"fire-iid-compat",[UC]:"fire-fcm",[VC]:"fire-fcm-compat",[$C]:"fire-perf",[BC]:"fire-perf-compat",[jC]:"fire-rc",[zC]:"fire-rc-compat",[HC]:"fire-gcs",[KC]:"fire-gcs-compat",[WC]:"fire-fst",[qC]:"fire-fst-compat","fire-js":"fire-js",[GC]:"fire-js-all"};/**
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
 */const oc=new Map,uh=new Map;function XC(t,e){try{t.container.addComponent(e)}catch(n){Zi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Nn(t){const e=t.name;if(uh.has(e))return Zi.debug(`There were multiple attempts to register component ${e}.`),!1;uh.set(e,t);for(const n of oc.values())XC(n,t);return!0}function JC(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const ZC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},gi=new ps("app","Firebase",ZC);/**
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
 */class eS{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gi.create("app-deleted",{appName:this._name})}}/**
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
 */const ms=YC;function dv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:lh,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw gi.create("bad-app-name",{appName:String(r)});if(n||(n=jI()),!n)throw gi.create("no-options");const s=oc.get(r);if(s){if(sh(n,s.options)&&sh(i,s.config))return s;throw gi.create("duplicate-app",{appName:r})}const o=new aC(r);for(const c of uh.values())o.addComponent(c);const a=new eS(n,i,o);return oc.set(r,a),a}function pv(t=lh){const e=oc.get(t);if(!e&&t===lh)return dv();if(!e)throw gi.create("no-app",{appName:t});return e}function Ht(t,e,n){var i;let r=(i=QC[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zi.warn(a.join(" "));return}Nn(new pn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const tS="firebase-heartbeat-database",nS=1,fo="firebase-heartbeat-store";let hu=null;function mv(){return hu||(hu=bC(tS,nS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(fo)}}}).catch(t=>{throw gi.create("idb-open",{originalErrorMessage:t.message})})),hu}async function iS(t){try{return(await mv()).transaction(fo).objectStore(fo).get(gv(t))}catch(e){if(e instanceof ei)Zi.warn(e.message);else{const n=gi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zi.warn(n.message)}}}async function dm(t,e){try{const i=(await mv()).transaction(fo,"readwrite");return await i.objectStore(fo).put(e,gv(t)),i.done}catch(n){if(n instanceof ei)Zi.warn(n.message);else{const i=gi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zi.warn(i.message)}}}function gv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const rS=1024,sS=30*24*60*60*1e3;class oS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cS(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=pm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=sS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=pm(),{heartbeatsToSend:n,unsentEntries:i}=aS(this._heartbeatsCache.heartbeats),r=ic(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function pm(){return new Date().toISOString().substring(0,10)}function aS(t,e=rS){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),mm(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),mm(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class cS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lv()?WI().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await iS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return dm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return dm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function mm(t){return ic(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function lS(t){Nn(new pn("platform-logger",e=>new TC(e),"PRIVATE")),Nn(new pn("heartbeat",e=>new oS(e),"PRIVATE")),Ht(ch,fm,t),Ht(ch,fm,"esm2017"),Ht("fire-js","")}lS("");function yv(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function _v(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uS=_v,vv=new ps("auth","Firebase",_v());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac=new Lo("@firebase/auth");function hS(t,...e){ac.logLevel<=me.WARN&&ac.warn(`Auth (${ms}): ${t}`,...e)}function Ka(t,...e){ac.logLevel<=me.ERROR&&ac.error(`Auth (${ms}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(t,...e){throw zf(t,...e)}function jf(t,...e){return zf(t,...e)}function fS(t,e,n){const i=Object.assign(Object.assign({},uS()),{[e]:n});return new ps("auth","Firebase",i).create(e,{appName:t.name})}function zf(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return vv.create(t,...e)}function Ee(t,e,...n){if(!t)throw zf(e,...n)}function zs(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ka(e),new Error(e)}function cc(t,e){t||zs(e)}function dS(){return ym()==="http:"||ym()==="https:"}function ym(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dS()||KI()||"connection"in navigator)?navigator.onLine:!0}function mS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,n){this.shortDelay=e,this.longDelay=n,cc(n>e,"Short delay should be less than long delay!"),this.isMobile=Vf()||av()}get(){return pS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gS(t,e){cc(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;zs("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;zs("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;zs("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S=new Fo(3e4,6e4);function vS(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Hf(t,e,n,i,r={}){return Ev(t,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=$f(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),bv.fetch()(wv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Ev(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},yS),e);try{const r=new bS(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ya(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ya(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ya(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ya(t,"user-disabled",o);const u=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw fS(t,u,l);gm(t,u)}}catch(r){if(r instanceof ei)throw r;gm(t,"network-request-failed",{message:String(r)})}}function wv(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?gS(t.config,r):`${t.config.apiScheme}://${r}`}class bS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(jf(this.auth,"network-request-failed")),_S.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ya(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=jf(t,e,i);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ES(t,e){return Hf(t,"POST","/v1/accounts:delete",e)}async function wS(t,e){return Hf(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function TS(t,e=!1){const n=Ut(t),i=await n.getIdToken(e),r=Tv(i);Ee(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Hs(fu(r.auth_time)),issuedAtTime:Hs(fu(r.iat)),expirationTime:Hs(fu(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function fu(t){return Number(t)*1e3}function Tv(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Ka("JWT malformed, contained fewer than 3 sections"),null;try{const r=rc(n);return r?JSON.parse(r):(Ka("Failed to decode base64 JWT payload"),null)}catch(r){return Ka("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function IS(t){const e=Tv(t);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hh(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof ei&&CS(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function CS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hs(this.lastLoginAt),this.creationTime=Hs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function lc(t){var e;const n=t.auth,i=await t.getIdToken(),r=await hh(t,wS(n,{idToken:i}));Ee(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?RS(s.providerUserInfo):[],a=kS(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Iv(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function AS(t){const e=Ut(t);await lc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kS(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function RS(t){return t.map(e=>{var{providerId:n}=e,i=yv(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NS(t,e){const n=await Ev(t,{},async()=>{const i=$f({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=wv(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",bv.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):IS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Ee(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await NS(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new po;return i&&(Ee(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(Ee(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(Ee(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new po,this.toJSON())}_performRefresh(){return zs("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(t,e){Ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Pr{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=yv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new SS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Iv(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await hh(this,this.stsTokenManager.getToken(this.auth,e));return Ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return TS(this,e)}reload(){return AS(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Pr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await lc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await hh(this,ES(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,a,c,l,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,d=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,_=(l=n.createdAt)!==null&&l!==void 0?l:void 0,v=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:E,emailVerified:S,isAnonymous:P,providerData:q,stsTokenManager:$}=n;Ee(E&&$,e,"internal-error");const K=po.fromJSON(this.name,$);Ee(typeof E=="string",e,"internal-error"),oi(h,e.name),oi(f,e.name),Ee(typeof S=="boolean",e,"internal-error"),Ee(typeof P=="boolean",e,"internal-error"),oi(d,e.name),oi(m,e.name),oi(y,e.name),oi(b,e.name),oi(_,e.name),oi(v,e.name);const ye=new Pr({uid:E,auth:e,email:f,emailVerified:S,displayName:h,isAnonymous:P,photoURL:m,phoneNumber:d,tenantId:y,stsTokenManager:K,createdAt:_,lastLoginAt:v});return q&&Array.isArray(q)&&(ye.providerData=q.map(Fe=>Object.assign({},Fe))),b&&(ye._redirectEventId=b),ye}static async _fromIdTokenResponse(e,n,i=!1){const r=new po;r.updateFromServerResponse(n);const s=new Pr({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await lc(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m=new Map;function Vi(t){cc(t instanceof Function,"Expected a class definition");let e=_m.get(t);return e?(cc(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_m.set(t,e),e)}/**
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
 */class Cv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Cv.type="NONE";const vm=Cv;/**
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
 */function du(t,e,n){return`firebase:${t}:${e}:${n}`}class Mr{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=du(this.userKey,r.apiKey,s),this.fullPersistenceKey=du("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Pr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Mr(Vi(vm),e,i);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=r[0]||Vi(vm);const o=du(i,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Pr._fromJSON(e,u);l!==s&&(a=h),s=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Mr(s,e,i):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Mr(s,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(PS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(LS(e))return"Blackberry";if(FS(e))return"Webos";if(DS(e))return"Safari";if((e.includes("chrome/")||OS(e))&&!e.includes("edge/"))return"Chrome";if(MS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function xS(t=Rn()){return/firefox\//i.test(t)}function DS(t=Rn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function OS(t=Rn()){return/crios\//i.test(t)}function PS(t=Rn()){return/iemobile/i.test(t)}function MS(t=Rn()){return/android/i.test(t)}function LS(t=Rn()){return/blackberry/i.test(t)}function FS(t=Rn()){return/webos/i.test(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sv(t,e=[]){let n;switch(t){case"Browser":n=bm(Rn());break;case"Worker":n=`${bm(Rn())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ms}/${i}`}async function Av(t,e){return Hf(t,"GET","/v2/recaptchaConfig",vS(t,e))}function Em(t){return t!==void 0&&t.enterprise!==void 0}class kv{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function US(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function VS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=jf("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",US().appendChild(i)})}const $S="https://www.google.com/recaptcha/enterprise.js?render=",BS="recaptcha-enterprise";class jS{constructor(e){this.type=BS,this.auth=Rv(e)}async verify(e="verify",n=!1){async function i(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Av(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new kv(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(s,o,a){const c=window.grecaptcha;Em(c)?c.enterprise.ready(()=>{try{c.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(l=>{a(l)})}catch(l){a(l)}}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{i(this.auth).then(a=>{if(!n&&Em(window.grecaptcha))r(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}VS($S+a).then(()=>{r(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}/**
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
 */class zS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wm(this),this.idTokenSubscription=new wm(this),this.beforeStateQueue=new zS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Vi(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await Mr.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await lc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ut(e):null;return n&&Ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Vi(e))})}async initializeRecaptchaConfig(){const e=await Av(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new kv(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new jS(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ps("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Vi(e)||this._popupRedirectResolver;Ee(n,this,"argument-error"),this.redirectPersistenceManager=await Mr.create(this,[Vi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Ee(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,i,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&hS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Rv(t){return Ut(t)}class wm{constructor(e){this.auth=e,this.observer=null,this.addObserver=ZI(n=>this.observer=n)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function KS(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Vi);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}new Fo(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Fo(2e3,1e4);/**
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
 */new Fo(3e4,6e4);/**
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
 */new Fo(5e3,15e3);var Tm="@firebase/auth",Im="0.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function GS(t){Nn(new pn("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;Ee(o&&!o.includes(":"),"invalid-api-key",{appName:i.name}),Ee(!(a!=null&&a.includes(":")),"argument-error",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sv(t)},l=new HS(i,r,s,c);return KS(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Nn(new pn("auth-internal",e=>{const n=Rv(e.getProvider("auth").getImmediate());return(i=>new WS(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ht(Tm,Im,qS(t)),Ht(Tm,Im,"esm2017")}/**
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
 */const YS=5*60;zI("authIdTokenMaxAge");GS("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS=new Map,XS={activated:!1,tokenObservers:[]};function xn(t){return QS.get(t)||Object.assign({},XS)}const Cm={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e,n,i,r,s){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=r,this.upperBound=s,this.pending=null,this.nextErrorWaitInterval=r,r>s)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new uo,await ZS(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new uo,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function ZS(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},uc=new ps("appCheck","AppCheck",eA);function tA(t){if(!xn(t).activated)throw uc.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA="firebase-app-check-database",iA=1,fh="firebase-app-check-store";let _a=null;function rA(){return _a||(_a=new Promise((t,e)=>{try{const n=indexedDB.open(nA,iA);n.onsuccess=i=>{t(i.target.result)},n.onerror=i=>{var r;e(uc.create("storage-open",{originalErrorMessage:(r=i.target.error)===null||r===void 0?void 0:r.message}))},n.onupgradeneeded=i=>{const r=i.target.result;switch(i.oldVersion){case 0:r.createObjectStore(fh,{keyPath:"compositeKey"})}}}catch(n){e(uc.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),_a)}function sA(t,e){return oA(aA(t),e)}async function oA(t,e){const i=(await rA()).transaction(fh,"readwrite"),s=i.objectStore(fh).put({compositeKey:t,value:e});return new Promise((o,a)=>{s.onsuccess=c=>{o()},i.onerror=c=>{var l;a(uc.create("storage-set",{originalErrorMessage:(l=c.target.error)===null||l===void 0?void 0:l.message}))}})}function aA(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh=new Lo("@firebase/app-check");function Sm(t,e){return lv()?sA(t,e).catch(n=>{dh.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA={error:"UNKNOWN_ERROR"};function lA(t){return cl.encodeString(JSON.stringify(t),!1)}async function ph(t,e=!1){const n=t.app;tA(n);const i=xn(n);let r=i.token,s;if(r&&!Ps(r)&&(i.token=void 0,r=void 0),!r){const c=await i.cachedTokenPromise;c&&(Ps(c)?r=c:await Sm(n,void 0))}if(!e&&r&&Ps(r))return{token:r.token};let o=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),r=await xn(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?dh.warn(c.message):dh.error(c),s=c}let a;return r?s?Ps(r)?a={token:r.token,internalError:s}:a=km(s):(a={token:r.token},i.token=r,await Sm(n,r)):a=km(s),o&&fA(n,a),a}function uA(t,e,n,i){const{app:r}=t,s=xn(r),o={next:n,error:i,type:e};if(s.tokenObservers=[...s.tokenObservers,o],s.token&&Ps(s.token)){const a=s.token;Promise.resolve().then(()=>{n({token:a.token}),Am(t)}).catch(()=>{})}s.cachedTokenPromise.then(()=>Am(t))}function Nv(t,e){const n=xn(t),i=n.tokenObservers.filter(r=>r.next!==e);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function Am(t){const{app:e}=t,n=xn(e);let i=n.tokenRefresher;i||(i=hA(t),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function hA(t){const{app:e}=t;return new JS(async()=>{const n=xn(e);let i;if(n.token?i=await ph(t,!0):i=await ph(t),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=xn(e);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const r=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,r),Math.max(0,i-Date.now())}else return 0},Cm.RETRIAL_MIN_WAIT,Cm.RETRIAL_MAX_WAIT)}function fA(t,e){const n=xn(t).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function Ps(t){return t.expireTimeMillis-Date.now()>0}function km(t){return{token:lA(cA),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=xn(this.app);for(const n of e)Nv(this.app,n.next);return Promise.resolve()}}function pA(t,e){return new dA(t,e)}function mA(t){return{getToken:e=>ph(t,e),addTokenListener:e=>uA(t,"INTERNAL",e),removeTokenListener:e=>Nv(t.app,e)}}const gA="@firebase/app-check",yA="0.6.5",_A="app-check",Rm="app-check-internal";function vA(){Nn(new pn(_A,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return pA(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Rm).initialize()})),Nn(new pn(Rm,t=>{const e=t.getProvider("app-check").getImmediate();return mA(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Ht(gA,yA)}vA();var bA="firebase",EA="9.20.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ht(bA,EA,"app");const xv=Symbol("firebaseApp");function Kf(t){return Mo()&&Mt(xv,null)||pv(t)}const wn=()=>{};function Wf(t,e){return e.split(".").reduce((n,i)=>n&&n[i],t)}function wA(t,e,n){const i=(""+e).split("."),r=i.pop(),s=i.reduce((o,a)=>o&&o[a],t);if(s!=null)return Array.isArray(s)?s.splice(Number(r),1,n):s[r]=n}function cr(t){return!!t&&typeof t=="object"}const TA=Object.prototype;function IA(t){return cr(t)&&Object.getPrototypeOf(t)===TA}function qf(t){return cr(t)&&t.type==="document"}function Dv(t){return cr(t)&&t.type==="collection"}function CA(t){return qf(t)||Dv(t)}function SA(t){return cr(t)&&t.type==="query"}function AA(t){return cr(t)&&"ref"in t}function kA(t){return cr(t)&&typeof t.bucket=="string"}function RA(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}function NA(){return!!(Mo()&&Mt(Q_,null))}const Nm="@firebase/database",xm="0.14.4";/**
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
 */let Ov="";function xA(t){Ov=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ut(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ho(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ti(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new DA(e)}}catch{}return new OA},$i=Pv("localStorage"),mh=Pv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=new Lo("@firebase/database"),PA=function(){let t=1;return function(){return t++}}(),Mv=function(t){const e=iC(t),n=new JI;n.update(e);const i=n.digest();return cl.encodeByteArray(i)},Uo=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Uo.apply(null,i):typeof i=="object"?e+=ut(i):e+=i,e+=" "}return e};let Yi=null,Dm=!0;const MA=function(t,e){O(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Lr.logLevel=me.VERBOSE,Yi=Lr.log.bind(Lr),e&&mh.set("logging_enabled",!0)):typeof t=="function"?Yi=t:(Yi=null,mh.remove("logging_enabled"))},gt=function(...t){if(Dm===!0&&(Dm=!1,Yi===null&&mh.get("logging_enabled")===!0&&MA(!0)),Yi){const e=Uo.apply(null,t);Yi(e)}},Vo=function(t){return function(...e){gt(t,...e)}},gh=function(...t){const e="FIREBASE INTERNAL ERROR: "+Uo(...t);Lr.error(e)},er=function(...t){const e=`FIREBASE FATAL ERROR: ${Uo(...t)}`;throw Lr.error(e),new Error(e)},Kt=function(...t){const e="FIREBASE WARNING: "+Uo(...t);Lr.warn(e)},LA=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Kt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Lv=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},FA=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},qr="[MIN_NAME]",tr="[MAX_NAME]",gs=function(t,e){if(t===e)return 0;if(t===qr||e===tr)return-1;if(e===qr||t===tr)return 1;{const n=Om(t),i=Om(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},UA=function(t,e){return t===e?0:t<e?-1:1},As=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ut(e))},Gf=function(t){if(typeof t!="object"||t===null)return ut(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=ut(e[i]),n+=":",n+=Gf(t[e[i]]);return n+="}",n},Fv=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let r=0;r<n;r+=e)r+e>n?i.push(t.substring(r,n)):i.push(t.substring(r,r+e));return i};function Qt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Uv=function(t){O(!Lv(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let r,s,o,a,c;t===0?(s=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),s=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-i-n))));const l=[];for(c=n;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(s%2?1:0),s=Math.floor(s/2);l.push(r?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let f=parseInt(u.substr(c,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},VA=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},$A=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},BA=new RegExp("^-?(0*)\\d{1,10}$"),jA=-2147483648,zA=2147483647,Om=function(t){if(BA.test(t)){const e=Number(t);if(e>=jA&&e<=zA)return e}return null},$o=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Kt("Exception was thrown by user callback.",n),e},Math.floor(0))}},HA=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ks=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class KA{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Kt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(gt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Kt(e)}}class yh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}yh.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf="5",Vv="v",$v="s",Bv="r",jv="f",zv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Hv="ls",Kv="p",_h="ac",Wv="websocket",qv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(e,n,i,r,s=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=$i.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&$i.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function GA(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Gv(t,e,n){O(typeof e=="string","typeof type must == string"),O(typeof n=="object","typeof params must == object");let i;if(e===Wv)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===qv)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);GA(t)&&(n.ns=t.namespace);const r=[];return Qt(n,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(){this.counters_={}}incrementCounter(e,n=1){ti(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return PI(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu={},mu={};function Qf(t){const e=t.toString();return pu[e]||(pu[e]=new YA),pu[e]}function QA(t,e){const n=t.toString();return mu[n]||(mu[n]=e()),mu[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&$o(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm="start",JA="close",ZA="pLPCommand",ek="pRTLPCB",Yv="id",Qv="pw",Xv="ser",tk="cb",nk="seg",ik="ts",rk="d",sk="dframe",Jv=1870,Zv=30,ok=Jv-Zv,ak=25e3,ck=3e4;class Sr{constructor(e,n,i,r,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Vo(e),this.stats_=Qf(n),this.urlFn=c=>(this.appCheckToken&&(c[_h]=this.appCheckToken),Gv(n,qv,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new XA(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ck)),FA(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Xf((...s)=>{const[o,a,c,l,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Pm)this.id=a,this.password=c;else if(o===JA)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Pm]="t",i[Xv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[tk]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Vv]=Yf,this.transportSessionId&&(i[$v]=this.transportSessionId),this.lastSessionId&&(i[Hv]=this.lastSessionId),this.applicationId&&(i[Kv]=this.applicationId),this.appCheckToken&&(i[_h]=this.appCheckToken),typeof location<"u"&&location.hostname&&zv.test(location.hostname)&&(i[Bv]=jv);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Sr.forceAllow_=!0}static forceDisallow(){Sr.forceDisallow_=!0}static isAvailable(){return Sr.forceAllow_?!0:!Sr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!VA()&&!$A()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ut(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=sv(n),r=Fv(i,ok);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[sk]="t",i[Yv]=e,i[Qv]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ut(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Xf{constructor(e,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=PA(),window[ZA+this.uniqueCallbackIdentifier]=e,window[ek+this.uniqueCallbackIdentifier]=n,this.myIFrame=Xf.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){gt("frame writing exception"),a.stack&&gt(a.stack),gt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||gt("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Yv]=this.myID,e[Qv]=this.myPW,e[Xv]=this.currentSerial;let n=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Zv+i.length<=Jv;){const o=this.pendingSegs.shift();i=i+"&"+nk+r+"="+o.seg+"&"+ik+r+"="+o.ts+"&"+rk+r+"="+o.d,r++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(i,Math.floor(ak)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{gt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lk=16384,uk=45e3;let hc=null;typeof MozWebSocket<"u"?hc=MozWebSocket:typeof WebSocket<"u"&&(hc=WebSocket);class tn{constructor(e,n,i,r,s,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Vo(this.connId),this.stats_=Qf(n),this.connURL=tn.connectionURL_(n,o,a,r,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,r,s){const o={};return o[Vv]=Yf,typeof location<"u"&&location.hostname&&zv.test(location.hostname)&&(o[Bv]=jv),n&&(o[$v]=n),i&&(o[Hv]=i),r&&(o[_h]=r),s&&(o[Kv]=s),Gv(e,Wv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,$i.set("previous_websocket_failure",!0);try{let i;cv(),this.mySock=new hc(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){tn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&hc!==null&&!tn.forceDisallow_}static previouslyFailed(){return $i.isInMemoryStorage||$i.get("previous_websocket_failure")===!0}markConnectionHealthy(){$i.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=ho(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(O(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=ut(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Fv(n,lk);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(uk))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}tn.responsesRequiredToBeHealthy=2;tn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Sr,tn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=tn&&tn.isAvailable();let i=n&&!tn.previouslyFailed();if(e.webSocketOnly&&(n||Kt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[tn];else{const r=this.transports_=[];for(const s of mo.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);mo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}mo.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hk=6e4,fk=5e3,dk=10*1024,pk=100*1024,gu="t",Mm="d",mk="s",Lm="r",gk="e",Fm="o",Um="a",Vm="n",$m="p",yk="h";class _k{constructor(e,n,i,r,s,o,a,c,l,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Vo("c:"+this.id+":"),this.transportManager_=new mo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Ks(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>pk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>dk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(gu in e){const n=e[gu];n===Um?this.upgradeIfSecondaryHealthy_():n===Lm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Fm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=As("t",e),i=As("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:$m,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Um,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Vm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=As("t",e),i=As("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=As(gu,e);if(Mm in e){const i=e[Mm];if(n===yk){const r=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===Vm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===mk?this.onConnectionShutdown_(i):n===Lm?this.onReset_(i):n===gk?gh("Server Error: "+i):n===Fm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):gh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Yf!==i&&Kt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Ks(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(hk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ks(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(fk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:$m,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&($i.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{put(e,n,i,r){}merge(e,n,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e){this.allowedEvents_=e,this.listeners_={},O(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const r=this.getInitialEvent(e);r&&n.apply(i,r)}off(e,n,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===n&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(e){O(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc extends t0{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Vf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new fc}getInitialEvent(e){return O(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm=32,jm=768;class Le{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Se(){return new Le("")}function he(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ei(t){return t.pieces_.length-t.pieceNum_}function De(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Le(t.pieces_,e)}function n0(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function vk(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function i0(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function r0(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Le(e,0)}function at(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof Le)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new Le(n,0)}function le(t){return t.pieceNum_>=t.pieces_.length}function Yt(t,e){const n=he(t),i=he(e);if(n===null)return e;if(n===i)return Yt(De(t),De(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function s0(t,e){if(Ei(t)!==Ei(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function on(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Ei(t)>Ei(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class bk{constructor(e,n){this.errorPrefix_=n,this.parts_=i0(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=ll(this.parts_[i]);o0(this)}}function Ek(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ll(e),o0(t)}function wk(t){const e=t.parts_.pop();t.byteLength_-=ll(e),t.parts_.length>0&&(t.byteLength_-=1)}function o0(t){if(t.byteLength_>jm)throw new Error(t.errorPrefix_+"has a key path longer than "+jm+" bytes ("+t.byteLength_+").");if(t.parts_.length>Bm)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Bm+") or object contains a cycle "+Mi(t))}function Mi(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf extends t0{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Jf}getInitialEvent(e){return O(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks=1e3,Tk=60*5*1e3,zm=30*1e3,Ik=1.3,Ck=3e4,Sk="server_kill",Hm=3;class jn extends e0{constructor(e,n,i,r,s,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=jn.nextPersistentConnectionId_++,this.log_=Vo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ks,this.maxReconnectDelay_=Tk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!cv())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Jf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&fc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const r=++this.requestNumber_,s={r,a:e,b:n};this.log_(ut(s)),O(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const n=new uo,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,i,r){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),O(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:i};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const c=a.d,l=a.s;jn.warnOnListenWarnings_(c,n),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ti(e,"w")){const i=Wr(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Kt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||XI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=zm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=QI(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,n)}sendUnlisten_(e,n,i,r){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,r){const s={p:n,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,i,r){this.putInternal("p",e,n,i,r)}merge(e,n,i,r){this.putInternal("m",e,n,i,r)}putInternal(e,n,i,r,s){this.initConnection_();const o={p:n,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ut(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):gh("Unrecognized action received from server: "+ut(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){O(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ks,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ks,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Ck&&(this.reconnectDelay_=ks),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Ik)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+jn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,i())},l=function(h){O(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?gt("getToken() completed but was canceled"):(gt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new _k(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,d=>{Kt(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(Sk)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Kt(h),c())}}}interrupt(e){gt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){gt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],am(this.interruptReasons_)&&(this.reconnectDelay_=ks,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(s=>Gf(s)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const i=new Le(e).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(n),s.delete(n),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,n){gt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Hm&&(this.reconnectDelay_=zm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){gt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Hm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Ov.replace(/\./g,"-")]=1,Vf()?e["framework.cordova"]=1:av()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=fc.getInstance().currentlyOnline();return am(this.interruptReasons_)&&e}}jn.nextPersistentConnectionId_=0;jn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ul{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new fe(qr,e),r=new fe(qr,n);return this.compare(i,r)!==0}minPost(){return fe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let va;class a0 extends ul{static get __EMPTY_NODE(){return va}static set __EMPTY_NODE(e){va=e}compare(e,n){return gs(e.name,n.name)}isDefinedOn(e){throw ds("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return fe.MIN}maxPost(){return new fe(tr,va)}makePost(e,n){return O(typeof e=="string","KeyIndex indexValue must always be a string."),new fe(e,va)}toString(){return".key"}}const Fr=new a0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,n,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ot{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i??ot.RED,this.left=r??Pt.EMPTY_NODE,this.right=s??Pt.EMPTY_NODE}copy(e,n,i,r,s){return new ot(e??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Pt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,r;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return Pt.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ot.RED=!0;ot.BLACK=!1;class Ak{copy(e,n,i,r,s){return this}insert(e,n,i){return new ot(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Pt{constructor(e,n=Pt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Pt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ot.BLACK,null,null))}remove(e){return new Pt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ot.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,r=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ba(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ba(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ba(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ba(this.root_,null,this.comparator_,!0,e)}}Pt.EMPTY_NODE=new Ak;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kk(t,e){return gs(t.name,e.name)}function Zf(t,e){return gs(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vh;function Rk(t){vh=t}const c0=function(t){return typeof t=="number"?"number:"+Uv(t):"string:"+t},l0=function(t){if(t.isLeafNode()){const e=t.val();O(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ti(e,".sv"),"Priority must be a string or number.")}else O(t===vh||t.isEmpty(),"priority of unexpected type.");O(t===vh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Km;class rt{constructor(e,n=rt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,O(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),l0(this.priorityNode_)}static set __childrenNodeConstructor(e){Km=e}static get __childrenNodeConstructor(){return Km}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new rt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:rt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return le(e)?this:he(e)===".priority"?this.priorityNode_:rt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:rt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=he(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(O(i!==".priority"||Ei(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,rt.__childrenNodeConstructor.EMPTY_NODE.updateChild(De(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+c0(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Uv(this.value_):e+=this.value_,this.lazyHash_=Mv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===rt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof rt.__childrenNodeConstructor?-1:(O(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,r=rt.VALUE_TYPE_ORDER.indexOf(n),s=rt.VALUE_TYPE_ORDER.indexOf(i);return O(r>=0,"Unknown leaf type: "+n),O(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}rt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let u0,h0;function Nk(t){u0=t}function xk(t){h0=t}class Dk extends ul{compare(e,n){const i=e.node.getPriority(),r=n.node.getPriority(),s=i.compareTo(r);return s===0?gs(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return fe.MIN}maxPost(){return new fe(tr,new rt("[PRIORITY-POST]",h0))}makePost(e,n){const i=u0(e);return new fe(n,new rt("[PRIORITY-POST]",i))}toString(){return".priority"}}const Et=new Dk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ok=Math.log(2);class Pk{constructor(e){const n=s=>parseInt(Math.log(s)/Ok,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const dc=function(t,e,n,i){t.sort(e);const r=function(c,l){const u=l-c;let h,f;if(u===0)return null;if(u===1)return h=t[c],f=n?n(h):h,new ot(f,h.node,ot.BLACK,null,null);{const d=parseInt(u/2,10)+c,m=r(c,d),y=r(d+1,l);return h=t[d],f=n?n(h):h,new ot(f,h.node,ot.BLACK,m,y)}},s=function(c){let l=null,u=null,h=t.length;const f=function(m,y){const b=h-m,_=h;h-=m;const v=r(b+1,_),E=t[b],S=n?n(E):E;d(new ot(S,E.node,y,null,v))},d=function(m){l?(l.left=m,l=m):(u=m,l=m)};for(let m=0;m<c.count;++m){const y=c.nextBitIsOne(),b=Math.pow(2,c.count-(m+1));y?f(b,ot.BLACK):(f(b,ot.BLACK),f(b,ot.RED))}return u},o=new Pk(t.length),a=s(o);return new Pt(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yu;const vr={};class Vn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return O(vr&&Et,"ChildrenNode.ts has not been loaded"),yu=yu||new Vn({".priority":vr},{".priority":Et}),yu}get(e){const n=Wr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Pt?n:null}hasIndex(e){return ti(this.indexSet_,e.toString())}addIndex(e,n){O(e!==Fr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=n.getIterator(fe.Wrap);let o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();let a;r?a=dc(i,e.getCompare()):a=vr;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new Vn(u,l)}addToIndexes(e,n){const i=sc(this.indexes_,(r,s)=>{const o=Wr(this.indexSet_,s);if(O(o,"Missing index implementation for "+s),r===vr)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(fe.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),dc(a,o.getCompare())}else return vr;else{const a=n.get(e.name);let c=r;return a&&(c=c.remove(new fe(e.name,a))),c.insert(e,e.node)}});return new Vn(i,this.indexSet_)}removeFromIndexes(e,n){const i=sc(this.indexes_,r=>{if(r===vr)return r;{const s=n.get(e.name);return s?r.remove(new fe(e.name,s)):r}});return new Vn(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rs;class we{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&l0(this.priorityNode_),this.children_.isEmpty()&&O(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Rs||(Rs=new we(new Pt(Zf),null,Vn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Rs}updatePriority(e){return this.children_.isEmpty()?this:new we(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Rs:n}}getChild(e){const n=he(e);return n===null?this:this.getImmediateChild(n).getChild(De(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(O(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new fe(e,n);let r,s;n.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?Rs:this.priorityNode_;return new we(r,o,s)}}updateChild(e,n){const i=he(e);if(i===null)return n;{O(he(e)!==".priority"||Ei(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(De(e),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,r=0,s=!0;if(this.forEachChild(Et,(o,a)=>{n[o]=a.val(e),i++,s&&we.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+c0(this.getPriority().val())+":"),this.forEachChild(Et,(n,i)=>{const r=i.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":Mv(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new fe(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new fe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new fe(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,fe.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,fe.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Bo?-1:0}withIndex(e){if(e===Fr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new we(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Fr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(Et),r=n.getIterator(Et);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Fr?null:this.indexMap_.get(e.toString())}}we.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Mk extends we{constructor(){super(new Pt(Zf),we.EMPTY_NODE,Vn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return we.EMPTY_NODE}isEmpty(){return!1}}const Bo=new Mk;Object.defineProperties(fe,{MIN:{value:new fe(qr,we.EMPTY_NODE)},MAX:{value:new fe(tr,Bo)}});a0.__EMPTY_NODE=we.EMPTY_NODE;rt.__childrenNodeConstructor=we;Rk(Bo);xk(Bo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk=!0;function yt(t,e=null){if(t===null)return we.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),O(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new rt(n,yt(e))}if(!(t instanceof Array)&&Lk){const n=[];let i=!1;if(Qt(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=yt(a);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),n.push(new fe(o,c)))}}),n.length===0)return we.EMPTY_NODE;const s=dc(n,kk,o=>o.name,Zf);if(i){const o=dc(n,Et.getCompare());return new we(s,yt(e),new Vn({".priority":o},{".priority":Et}))}else return new we(s,yt(e),Vn.Default)}else{let n=we.EMPTY_NODE;return Qt(t,(i,r)=>{if(ti(t,i)&&i.substring(0,1)!=="."){const s=yt(r);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(i,s))}}),n.updatePriority(yt(e))}}Nk(yt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk extends ul{constructor(e){super(),this.indexPath_=e,O(!le(e)&&he(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),r=this.extractChild(n.node),s=i.compareTo(r);return s===0?gs(e.name,n.name):s}makePost(e,n){const i=yt(e),r=we.EMPTY_NODE.updateChild(this.indexPath_,i);return new fe(n,r)}maxPost(){const e=we.EMPTY_NODE.updateChild(this.indexPath_,Bo);return new fe(tr,e)}toString(){return i0(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk extends ul{compare(e,n){const i=e.node.compareTo(n.node);return i===0?gs(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return fe.MIN}maxPost(){return fe.MAX}makePost(e,n){const i=yt(e);return new fe(n,i)}toString(){return".value"}}const Vk=new Uk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $k(t){return{type:"value",snapshotNode:t}}function Bk(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function jk(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Wm(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function zk(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Et}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return O(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return O(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:qr}hasEnd(){return this.endSet_}getIndexEndValue(){return O(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return O(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:tr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return O(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Et}copy(){const e=new ed;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function qm(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Et?n="$priority":t.index_===Vk?n="$value":t.index_===Fr?n="$key":(O(t.index_ instanceof Fk,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ut(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=ut(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+ut(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=ut(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+ut(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Gm(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Et&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc extends e0{constructor(e,n,i,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=Vo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(O(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=pc.getListenId_(e,i),a={};this.listens_[o]=a;const c=qm(e._queryParams);this.restRequest_(s+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(s,h,!1,i),Wr(this.listens_,o)===a){let f;l?l===401?f="permission_denied":f="rest_error:"+l:f="ok",r(f,null)}})}unlisten(e,n){const i=pc.getListenId_(e,n);delete this.listens_[i]}get(e){const n=qm(e._queryParams),i=e._path.toString(),r=new uo;return this.restRequest_(i+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(i,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(n.auth=r.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+$f(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=ho(a.responseText)}catch{Kt("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,c)}else a.status!==401&&a.status!==404&&Kt("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(){this.rootNode_=we.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(){return{value:null,children:new Map}}function f0(t,e,n){if(le(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=he(e);t.children.has(i)||t.children.set(i,mc());const r=t.children.get(i);e=De(e),f0(r,e,n)}}function bh(t,e,n){t.value!==null?n(e,t.value):Kk(t,(i,r)=>{const s=new Le(e.toString()+"/"+i);bh(r,s,n)})}function Kk(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Qt(this.last_,(i,r)=>{n[i]=n[i]-r}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym=10*1e3,qk=30*1e3,Gk=5*60*1e3;class Yk{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Wk(e);const i=Ym+(qk-Ym)*Math.random();Ks(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;Qt(e,(r,s)=>{s>0&&ti(this.statsToReport_,r)&&(n[r]=s,i=!0)}),i&&this.server_.reportStats(n),Ks(this.reportStats_.bind(this),Math.floor(Math.random()*2*Gk))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Tn||(Tn={}));function d0(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function p0(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function m0(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=Tn.ACK_USER_WRITE,this.source=d0()}operationForChild(e){if(le(this.path)){if(this.affectedTree.value!=null)return O(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Le(e));return new gc(Se(),n,this.revert)}}else return O(he(this.path)===e,"operationForChild called for unrelated child."),new gc(De(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=Tn.OVERWRITE}operationForChild(e){return le(this.path)?new nr(this.source,Se(),this.snap.getImmediateChild(e)):new nr(this.source,De(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=Tn.MERGE}operationForChild(e){if(le(this.path)){const n=this.children.subtree(new Le(e));return n.isEmpty()?null:n.value?new nr(this.source,Se(),n.value):new go(this.source,Se(),n)}else return O(he(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new go(this.source,De(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(le(e))return this.isFullyInitialized()&&!this.filtered_;const n=he(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function Qk(t,e,n,i){const r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(zk(o.childName,o.snapshotNode))}),Ns(t,r,"child_removed",e,i,n),Ns(t,r,"child_added",e,i,n),Ns(t,r,"child_moved",s,i,n),Ns(t,r,"child_changed",e,i,n),Ns(t,r,"value",e,i,n),r}function Ns(t,e,n,i,r,s){const o=i.filter(a=>a.type===n);o.sort((a,c)=>Jk(t,a,c)),o.forEach(a=>{const c=Xk(t,a,s);r.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,t.query_))})})}function Xk(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Jk(t,e,n){if(e.childName==null||n.childName==null)throw ds("Should only compare child_ events.");const i=new fe(e.childName,e.snapshotNode),r=new fe(n.childName,n.snapshotNode);return t.index_.compare(i,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0(t,e){return{eventCache:t,serverCache:e}}function Ws(t,e,n,i){return g0(new td(e,n,i),t.serverCache)}function y0(t,e,n,i){return g0(t.eventCache,new td(e,n,i))}function Eh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ir(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _u;const Zk=()=>(_u||(_u=new Pt(UA)),_u);class Ne{constructor(e,n=Zk()){this.value=e,this.children=n}static fromObject(e){let n=new Ne(null);return Qt(e,(i,r)=>{n=n.set(new Le(i),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Se(),value:this.value};if(le(e))return null;{const i=he(e),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(De(e),n);return s!=null?{path:at(new Le(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(le(e))return this;{const n=he(e),i=this.children.get(n);return i!==null?i.subtree(De(e)):new Ne(null)}}set(e,n){if(le(e))return new Ne(n,this.children);{const i=he(e),s=(this.children.get(i)||new Ne(null)).set(De(e),n),o=this.children.insert(i,s);return new Ne(this.value,o)}}remove(e){if(le(e))return this.children.isEmpty()?new Ne(null):new Ne(null,this.children);{const n=he(e),i=this.children.get(n);if(i){const r=i.remove(De(e));let s;return r.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,r),this.value===null&&s.isEmpty()?new Ne(null):new Ne(this.value,s)}else return this}}get(e){if(le(e))return this.value;{const n=he(e),i=this.children.get(n);return i?i.get(De(e)):null}}setTree(e,n){if(le(e))return n;{const i=he(e),s=(this.children.get(i)||new Ne(null)).setTree(De(e),n);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new Ne(this.value,o)}}fold(e){return this.fold_(Se(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(at(e,r),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,Se(),n)}findOnPath_(e,n,i){const r=this.value?i(n,this.value):!1;if(r)return r;if(le(e))return null;{const s=he(e),o=this.children.get(s);return o?o.findOnPath_(De(e),at(n,s),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Se(),n)}foreachOnPath_(e,n,i){if(le(e))return this;{this.value&&i(n,this.value);const r=he(e),s=this.children.get(r);return s?s.foreachOnPath_(De(e),at(n,r),i):new Ne(null)}}foreach(e){this.foreach_(Se(),e)}foreach_(e,n){this.children.inorderTraversal((i,r)=>{r.foreach_(at(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.writeTree_=e}static empty(){return new dn(new Ne(null))}}function qs(t,e,n){if(le(e))return new dn(new Ne(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let s=i.value;const o=Yt(r,e);return s=s.updateChild(o,n),new dn(t.writeTree_.set(r,s))}else{const r=new Ne(n),s=t.writeTree_.setTree(e,r);return new dn(s)}}}function Qm(t,e,n){let i=t;return Qt(n,(r,s)=>{i=qs(i,at(e,r),s)}),i}function Xm(t,e){if(le(e))return dn.empty();{const n=t.writeTree_.setTree(e,new Ne(null));return new dn(n)}}function wh(t,e){return lr(t,e)!=null}function lr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Yt(n.path,e)):null}function Jm(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Et,(i,r)=>{e.push(new fe(i,r))}):t.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new fe(i,r.value))}),e}function yi(t,e){if(le(e))return t;{const n=lr(t,e);return n!=null?new dn(new Ne(n)):new dn(t.writeTree_.subtree(e))}}function Th(t){return t.writeTree_.isEmpty()}function Gr(t,e){return _0(Se(),t.writeTree_,e)}function _0(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(O(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):n=_0(at(t,r),s,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(at(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v0(t,e){return I0(e,t)}function eR(t,e,n,i,r){O(i>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:r}),r&&(t.visibleWrites=qs(t.visibleWrites,e,n)),t.lastWriteId=i}function tR(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function nR(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);O(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let r=i.visible,s=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&iR(a,i.path)?r=!1:on(i.path,a.path)&&(s=!0)),o--}if(r){if(s)return rR(t),!0;if(i.snap)t.visibleWrites=Xm(t.visibleWrites,i.path);else{const a=i.children;Qt(a,c=>{t.visibleWrites=Xm(t.visibleWrites,at(i.path,c))})}return!0}else return!1}function iR(t,e){if(t.snap)return on(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&on(at(t.path,n),e))return!0;return!1}function rR(t){t.visibleWrites=b0(t.allWrites,sR,Se()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function sR(t){return t.visible}function b0(t,e,n){let i=dn.empty();for(let r=0;r<t.length;++r){const s=t[r];if(e(s)){const o=s.path;let a;if(s.snap)on(n,o)?(a=Yt(n,o),i=qs(i,a,s.snap)):on(o,n)&&(a=Yt(o,n),i=qs(i,Se(),s.snap.getChild(a)));else if(s.children){if(on(n,o))a=Yt(n,o),i=Qm(i,a,s.children);else if(on(o,n))if(a=Yt(o,n),le(a))i=Qm(i,Se(),s.children);else{const c=Wr(s.children,he(a));if(c){const l=c.getChild(De(a));i=qs(i,Se(),l)}}}else throw ds("WriteRecord should have .snap or .children")}}return i}function E0(t,e,n,i,r){if(!i&&!r){const s=lr(t.visibleWrites,e);if(s!=null)return s;{const o=yi(t.visibleWrites,e);if(Th(o))return n;if(n==null&&!wh(o,Se()))return null;{const a=n||we.EMPTY_NODE;return Gr(o,a)}}}else{const s=yi(t.visibleWrites,e);if(!r&&Th(s))return n;if(!r&&n==null&&!wh(s,Se()))return null;{const o=function(l){return(l.visible||r)&&(!i||!~i.indexOf(l.writeId))&&(on(l.path,e)||on(e,l.path))},a=b0(t.allWrites,o,e),c=n||we.EMPTY_NODE;return Gr(a,c)}}}function oR(t,e,n){let i=we.EMPTY_NODE;const r=lr(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(Et,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(n){const s=yi(t.visibleWrites,e);return n.forEachChild(Et,(o,a)=>{const c=Gr(yi(s,new Le(o)),a);i=i.updateImmediateChild(o,c)}),Jm(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=yi(t.visibleWrites,e);return Jm(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function aR(t,e,n,i,r){O(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=at(e,n);if(wh(t.visibleWrites,s))return null;{const o=yi(t.visibleWrites,s);return Th(o)?r.getChild(n):Gr(o,r.getChild(n))}}function cR(t,e,n,i){const r=at(e,n),s=lr(t.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(n)){const o=yi(t.visibleWrites,r);return Gr(o,i.getNode().getImmediateChild(n))}else return null}function lR(t,e){return lr(t.visibleWrites,e)}function uR(t,e,n,i,r,s,o){let a;const c=yi(t.visibleWrites,e),l=lr(c,Se());if(l!=null)a=l;else if(n!=null)a=Gr(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let d=f.getNext();for(;d&&u.length<r;)h(d,i)!==0&&u.push(d),d=f.getNext();return u}else return[]}function hR(){return{visibleWrites:dn.empty(),allWrites:[],lastWriteId:-1}}function Ih(t,e,n,i){return E0(t.writeTree,t.treePath,e,n,i)}function w0(t,e){return oR(t.writeTree,t.treePath,e)}function Zm(t,e,n,i){return aR(t.writeTree,t.treePath,e,n,i)}function yc(t,e){return lR(t.writeTree,at(t.treePath,e))}function fR(t,e,n,i,r,s){return uR(t.writeTree,t.treePath,e,n,i,r,s)}function nd(t,e,n){return cR(t.writeTree,t.treePath,e,n)}function T0(t,e){return I0(at(t.treePath,e),t.writeTree)}function I0(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;O(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),O(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(i,Wm(i,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(i,jk(i,r.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(i,Bk(i,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(i,Wm(i,e.snapshotNode,r.oldSnap));else throw ds("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const C0=new pR;class id{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new td(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return nd(this.writes_,e,i)}}getChildAfterChild(e,n,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ir(this.viewCache_),s=fR(this.writes_,r,n,1,i,e);return s.length===0?null:s[0]}}function mR(t,e){O(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),O(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function gR(t,e,n,i,r){const s=new dR;let o,a;if(n.type===Tn.OVERWRITE){const l=n;l.source.fromUser?o=Ch(t,e,l.path,l.snap,i,r,s):(O(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!le(l.path),o=_c(t,e,l.path,l.snap,i,r,a,s))}else if(n.type===Tn.MERGE){const l=n;l.source.fromUser?o=_R(t,e,l.path,l.children,i,r,s):(O(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=Sh(t,e,l.path,l.children,i,r,a,s))}else if(n.type===Tn.ACK_USER_WRITE){const l=n;l.revert?o=ER(t,e,l.path,i,r,s):o=vR(t,e,l.path,l.affectedTree,i,r,s)}else if(n.type===Tn.LISTEN_COMPLETE)o=bR(t,e,n.path,i,s);else throw ds("Unknown operation type: "+n.type);const c=s.getChanges();return yR(e,o,c),{viewCache:o,changes:c}}function yR(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=Eh(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push($k(Eh(e)))}}function S0(t,e,n,i,r,s){const o=e.eventCache;if(yc(i,n)!=null)return e;{let a,c;if(le(n))if(O(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=ir(e),u=l instanceof we?l:we.EMPTY_NODE,h=w0(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const l=Ih(i,ir(e));a=t.filter.updateFullNode(e.eventCache.getNode(),l,s)}else{const l=he(n);if(l===".priority"){O(Ei(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=Zm(i,n,u,c);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=De(n);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const f=Zm(i,n,o.getNode(),c);f!=null?h=o.getNode().getImmediateChild(l).updateChild(u,f):h=o.getNode().getImmediateChild(l)}else h=nd(i,l,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),l,h,u,r,s):a=o.getNode()}}return Ws(e,a,o.isFullyInitialized()||le(n),t.filter.filtersNodes())}}function _c(t,e,n,i,r,s,o,a){const c=e.serverCache;let l;const u=o?t.filter:t.filter.getIndexedFilter();if(le(n))l=u.updateFullNode(c.getNode(),i,null);else if(u.filtersNodes()&&!c.isFiltered()){const d=c.getNode().updateChild(n,i);l=u.updateFullNode(c.getNode(),d,null)}else{const d=he(n);if(!c.isCompleteForPath(n)&&Ei(n)>1)return e;const m=De(n),b=c.getNode().getImmediateChild(d).updateChild(m,i);d===".priority"?l=u.updatePriority(c.getNode(),b):l=u.updateChild(c.getNode(),d,b,m,C0,null)}const h=y0(e,l,c.isFullyInitialized()||le(n),u.filtersNodes()),f=new id(r,h,s);return S0(t,h,n,r,f,a)}function Ch(t,e,n,i,r,s,o){const a=e.eventCache;let c,l;const u=new id(r,e,s);if(le(n))l=t.filter.updateFullNode(e.eventCache.getNode(),i,o),c=Ws(e,l,!0,t.filter.filtersNodes());else{const h=he(n);if(h===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),i),c=Ws(e,l,a.isFullyInitialized(),a.isFiltered());else{const f=De(n),d=a.getNode().getImmediateChild(h);let m;if(le(f))m=i;else{const y=u.getCompleteChild(h);y!=null?n0(f)===".priority"&&y.getChild(r0(f)).isEmpty()?m=y:m=y.updateChild(f,i):m=we.EMPTY_NODE}if(d.equals(m))c=e;else{const y=t.filter.updateChild(a.getNode(),h,m,f,u,o);c=Ws(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function eg(t,e){return t.eventCache.isCompleteForChild(e)}function _R(t,e,n,i,r,s,o){let a=e;return i.foreach((c,l)=>{const u=at(n,c);eg(e,he(u))&&(a=Ch(t,a,u,l,r,s,o))}),i.foreach((c,l)=>{const u=at(n,c);eg(e,he(u))||(a=Ch(t,a,u,l,r,s,o))}),a}function tg(t,e,n){return n.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function Sh(t,e,n,i,r,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;le(n)?l=i:l=new Ne(null).setTree(n,i);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const d=e.serverCache.getNode().getImmediateChild(h),m=tg(t,d,f);c=_c(t,c,new Le(h),m,r,s,o,a)}}),l.children.inorderTraversal((h,f)=>{const d=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!d){const m=e.serverCache.getNode().getImmediateChild(h),y=tg(t,m,f);c=_c(t,c,new Le(h),y,r,s,o,a)}}),c}function vR(t,e,n,i,r,s,o){if(yc(r,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(i.value!=null){if(le(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return _c(t,e,n,c.getNode().getChild(n),r,s,a,o);if(le(n)){let l=new Ne(null);return c.getNode().forEachChild(Fr,(u,h)=>{l=l.set(new Le(u),h)}),Sh(t,e,n,l,r,s,a,o)}else return e}else{let l=new Ne(null);return i.foreach((u,h)=>{const f=at(n,u);c.isCompleteForPath(f)&&(l=l.set(u,c.getNode().getChild(f)))}),Sh(t,e,n,l,r,s,a,o)}}function bR(t,e,n,i,r){const s=e.serverCache,o=y0(e,s.getNode(),s.isFullyInitialized()||le(n),s.isFiltered());return S0(t,o,n,i,C0,r)}function ER(t,e,n,i,r,s){let o;if(yc(i,n)!=null)return e;{const a=new id(i,e,r),c=e.eventCache.getNode();let l;if(le(n)||he(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Ih(i,ir(e));else{const h=e.serverCache.getNode();O(h instanceof we,"serverChildren would be complete if leaf node"),u=w0(i,h)}u=u,l=t.filter.updateFullNode(c,u,s)}else{const u=he(n);let h=nd(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=t.filter.updateChild(c,u,h,De(n),a,s):e.eventCache.getNode().hasChild(u)?l=t.filter.updateChild(c,u,we.EMPTY_NODE,De(n),a,s):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ih(i,ir(e)),o.isLeafNode()&&(l=t.filter.updateFullNode(l,o,s)))}return o=e.serverCache.isFullyInitialized()||yc(i,Se())!=null,Ws(e,l,o,t.filter.filtersNodes())}}function wR(t,e){const n=ir(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!le(e)&&!n.getImmediateChild(he(e)).isEmpty())?n.getChild(e):null}function ng(t,e,n,i){e.type===Tn.MERGE&&e.source.queryId!==null&&(O(ir(t.viewCache_),"We should always have a full cache before handling merges"),O(Eh(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,s=gR(t.processor_,r,e,n,i);return mR(t.processor_,s.viewCache),O(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,TR(t,s.changes,s.viewCache.eventCache.getNode(),null)}function TR(t,e,n,i){const r=i?[i]:t.eventRegistrations_;return Qk(t.eventGenerator_,e,n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ig;function IR(t){O(!ig,"__referenceConstructor has already been defined"),ig=t}function rd(t,e,n,i){const r=e.source.queryId;if(r!==null){const s=t.views.get(r);return O(s!=null,"SyncTree gave us an op for an invalid query."),ng(s,e,n,i)}else{let s=[];for(const o of t.views.values())s=s.concat(ng(o,e,n,i));return s}}function sd(t,e){let n=null;for(const i of t.views.values())n=n||wR(i,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rg;function CR(t){O(!rg,"__referenceConstructor has already been defined"),rg=t}class sg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ne(null),this.pendingWriteTree_=hR(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function SR(t,e,n,i,r){return eR(t.pendingWriteTree_,e,n,i,r),r?fl(t,new nr(d0(),e,n)):[]}function Ar(t,e,n=!1){const i=tR(t.pendingWriteTree_,e);if(nR(t.pendingWriteTree_,e)){let s=new Ne(null);return i.snap!=null?s=s.set(Se(),!0):Qt(i.children,o=>{s=s.set(new Le(o),!0)}),fl(t,new gc(i.path,s,n))}else return[]}function hl(t,e,n){return fl(t,new nr(p0(),e,n))}function AR(t,e,n){const i=Ne.fromObject(n);return fl(t,new go(p0(),e,i))}function kR(t,e,n,i){const r=N0(t,i);if(r!=null){const s=x0(r),o=s.path,a=s.queryId,c=Yt(o,e),l=new nr(m0(a),c,n);return D0(t,o,l)}else return[]}function RR(t,e,n,i){const r=N0(t,i);if(r){const s=x0(r),o=s.path,a=s.queryId,c=Yt(o,e),l=Ne.fromObject(n),u=new go(m0(a),c,l);return D0(t,o,u)}else return[]}function A0(t,e,n){const r=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=Yt(o,e),l=sd(a,c);if(l)return l});return E0(r,e,s,n,!0)}function fl(t,e){return k0(e,t.syncPointTree_,null,v0(t.pendingWriteTree_,Se()))}function k0(t,e,n,i){if(le(t.path))return R0(t,e,n,i);{const r=e.get(Se());n==null&&r!=null&&(n=sd(r,Se()));let s=[];const o=he(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const l=n?n.getImmediateChild(o):null,u=T0(i,o);s=s.concat(k0(a,c,l,u))}return r&&(s=s.concat(rd(r,t,i,n))),s}}function R0(t,e,n,i){const r=e.get(Se());n==null&&r!=null&&(n=sd(r,Se()));let s=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,l=T0(i,o),u=t.operationForChild(o);u&&(s=s.concat(R0(u,a,c,l)))}),r&&(s=s.concat(rd(r,t,i,n))),s}function N0(t,e){return t.tagToQueryMap.get(e)}function x0(t){const e=t.indexOf("$");return O(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Le(t.substr(0,e))}}function D0(t,e,n){const i=t.syncPointTree_.get(e);O(i,"Missing sync point for query tag that we're tracking");const r=v0(t.pendingWriteTree_,e);return rd(i,n,r,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new od(n)}node(){return this.node_}}class ad{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=at(this.path_,e);return new ad(this.syncTree_,n)}node(){return A0(this.syncTree_,this.path_)}}const NR=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},og=function(t,e,n){if(!t||typeof t!="object")return t;if(O(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return xR(t[".sv"],e,n);if(typeof t[".sv"]=="object")return DR(t[".sv"],e);O(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},xR=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:O(!1,"Unexpected server value: "+t)}},DR=function(t,e,n){t.hasOwnProperty("increment")||O(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&O(!1,"Unexpected increment value: "+i);const r=e.node();if(O(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},OR=function(t,e,n,i){return cd(e,new ad(n,t),i)},PR=function(t,e,n){return cd(t,new od(e),n)};function cd(t,e,n){const i=t.getPriority().val(),r=og(i,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=og(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new rt(a,yt(r)):t}else{const o=t;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new rt(r))),o.forEachChild(Et,(a,c)=>{const l=cd(c,e.getImmediateChild(a),n);l!==c&&(s=s.updateImmediateChild(a,l))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function ud(t,e){let n=e instanceof Le?e:new Le(e),i=t,r=he(n);for(;r!==null;){const s=Wr(i.node.children,r)||{children:{},childCount:0};i=new ld(r,i,s),n=De(n),r=he(n)}return i}function ys(t){return t.node.value}function O0(t,e){t.node.value=e,Ah(t)}function P0(t){return t.node.childCount>0}function MR(t){return ys(t)===void 0&&!P0(t)}function dl(t,e){Qt(t.node.children,(n,i)=>{e(new ld(n,t,i))})}function M0(t,e,n,i){n&&!i&&e(t),dl(t,r=>{M0(r,e,!0,i)}),n&&i&&e(t)}function LR(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function jo(t){return new Le(t.parent===null?t.name:jo(t.parent)+"/"+t.name)}function Ah(t){t.parent!==null&&FR(t.parent,t.name,t)}function FR(t,e,n){const i=MR(n),r=ti(t.node.children,e);i&&r?(delete t.node.children[e],t.node.childCount--,Ah(t)):!i&&!r&&(t.node.children[e]=n.node,t.node.childCount++,Ah(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UR=/[\[\].#$\/\u0000-\u001F\u007F]/,VR=/[\[\].#$\u0000-\u001F\u007F]/,vu=10*1024*1024,L0=function(t){return typeof t=="string"&&t.length!==0&&!UR.test(t)},$R=function(t){return typeof t=="string"&&t.length!==0&&!VR.test(t)},BR=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),$R(t)},F0=function(t,e,n){const i=n instanceof Le?new bk(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Mi(i));if(typeof e=="function")throw new Error(t+"contains a function "+Mi(i)+" with contents = "+e.toString());if(Lv(e))throw new Error(t+"contains "+e.toString()+" "+Mi(i));if(typeof e=="string"&&e.length>vu/3&&ll(e)>vu)throw new Error(t+"contains a string greater than "+vu+" utf8 bytes "+Mi(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(Qt(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!L0(o)))throw new Error(t+" contains an invalid key ("+o+") "+Mi(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Ek(i,o),F0(t,a,i),wk(i)}),r&&s)throw new Error(t+' contains ".value" child '+Mi(i)+" in addition to actual children.")}},jR=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!L0(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!BR(n))throw new Error(nC(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function HR(t,e){let n=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();n!==null&&!s0(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(r)}n&&t.eventLists_.push(n)}function ur(t,e,n){HR(t,n),KR(t,i=>on(i,e)||on(e,i))}function KR(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const r=t.eventLists_[i];if(r){const s=r.path;e(s)?(WR(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function WR(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Yi&&gt("event: "+n.toString()),$o(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qR="repo_interrupt",GR=25;class YR{constructor(e,n,i,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new zR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=mc(),this.transactionQueueTree_=new ld,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function QR(t,e,n){if(t.stats_=Qf(t.repoInfo_),t.forceRestClient_||HA())t.server_=new pc(t.repoInfo_,(i,r,s,o)=>{ag(t,i,r,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>cg(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ut(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new jn(t.repoInfo_,e,(i,r,s,o)=>{ag(t,i,r,s,o)},i=>{cg(t,i)},i=>{JR(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=QA(t.repoInfo_,()=>new Yk(t.stats_,t.server_)),t.infoData_=new Hk,t.infoSyncTree_=new sg({startListening:(i,r,s,o)=>{let a=[];const c=t.infoData_.getNode(i._path);return c.isEmpty()||(a=hl(t.infoSyncTree_,i._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),hd(t,"connected",!1),t.serverSyncTree_=new sg({startListening:(i,r,s,o)=>(t.server_.listen(i,s,r,(a,c)=>{const l=o(a,c);ur(t.eventQueue_,i._path,l)}),[]),stopListening:(i,r)=>{t.server_.unlisten(i,r)}})}function XR(t){const n=t.infoData_.getNode(new Le(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function U0(t){return NR({timestamp:XR(t)})}function ag(t,e,n,i,r){t.dataUpdateCount++;const s=new Le(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(i){const c=sc(n,l=>yt(l));o=RR(t.serverSyncTree_,s,c,r)}else{const c=yt(n);o=kR(t.serverSyncTree_,s,c,r)}else if(i){const c=sc(n,l=>yt(l));o=AR(t.serverSyncTree_,s,c)}else{const c=yt(n);o=hl(t.serverSyncTree_,s,c)}let a=s;o.length>0&&(a=dd(t,s)),ur(t.eventQueue_,a,o)}function cg(t,e){hd(t,"connected",e),e===!1&&eN(t)}function JR(t,e){Qt(e,(n,i)=>{hd(t,n,i)})}function hd(t,e,n){const i=new Le("/.info/"+e),r=yt(n);t.infoData_.updateSnapshot(i,r);const s=hl(t.infoSyncTree_,i,r);ur(t.eventQueue_,i,s)}function ZR(t){return t.nextWriteId_++}function eN(t){V0(t,"onDisconnectEvents");const e=U0(t),n=mc();bh(t.onDisconnect_,Se(),(r,s)=>{const o=OR(r,s,t.serverSyncTree_,e);f0(n,r,o)});let i=[];bh(n,Se(),(r,s)=>{i=i.concat(hl(t.serverSyncTree_,r,s));const o=rN(t,r);dd(t,o)}),t.onDisconnect_=mc(),ur(t.eventQueue_,Se(),i)}function tN(t){t.persistentConnection_&&t.persistentConnection_.interrupt(qR)}function V0(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),gt(n,...e)}function $0(t,e,n){return A0(t.serverSyncTree_,e,n)||we.EMPTY_NODE}function fd(t,e=t.transactionQueueTree_){if(e||pl(t,e),ys(e)){const n=j0(t,e);O(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&nN(t,jo(e),n)}else P0(e)&&dl(e,n=>{fd(t,n)})}function nN(t,e,n){const i=n.map(l=>l.currentWriteId),r=$0(t,e,i);let s=r;const o=r.hash();for(let l=0;l<n.length;l++){const u=n[l];O(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Yt(e,u.path);s=s.updateChild(h,u.currentOutputSnapshotRaw)}const a=s.val(!0),c=e;t.server_.put(c.toString(),a,l=>{V0(t,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(Ar(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();pl(t,ud(t.transactionQueueTree_,e)),fd(t,t.transactionQueueTree_),ur(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)$o(h[f])}else{if(l==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Kt("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=l}dd(t,e)}},o)}function dd(t,e){const n=B0(t,e),i=jo(n),r=j0(t,n);return iN(t,r,i),i}function iN(t,e,n){if(e.length===0)return;const i=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=Yt(n,c.path);let u=!1,h;if(O(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,r=r.concat(Ar(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=GR)u=!0,h="maxretry",r=r.concat(Ar(t.serverSyncTree_,c.currentWriteId,!0));else{const f=$0(t,c.path,o);c.currentInputSnapshot=f;const d=e[a].update(f.val());if(d!==void 0){F0("transaction failed: Data returned ",d,c.path);let m=yt(d);typeof d=="object"&&d!=null&&ti(d,".priority")||(m=m.updatePriority(f.getPriority()));const b=c.currentWriteId,_=U0(t),v=PR(m,f,_);c.currentOutputSnapshotRaw=m,c.currentOutputSnapshotResolved=v,c.currentWriteId=ZR(t),o.splice(o.indexOf(b),1),r=r.concat(SR(t.serverSyncTree_,c.path,v,c.currentWriteId,c.applyLocally)),r=r.concat(Ar(t.serverSyncTree_,b,!0))}else u=!0,h="nodata",r=r.concat(Ar(t.serverSyncTree_,c.currentWriteId,!0))}ur(t.eventQueue_,n,r),r=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}pl(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)$o(i[a]);fd(t,t.transactionQueueTree_)}function B0(t,e){let n,i=t.transactionQueueTree_;for(n=he(e);n!==null&&ys(i)===void 0;)i=ud(i,n),e=De(e),n=he(e);return i}function j0(t,e){const n=[];return z0(t,e,n),n.sort((i,r)=>i.order-r.order),n}function z0(t,e,n){const i=ys(e);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);dl(e,r=>{z0(t,r,n)})}function pl(t,e){const n=ys(e);if(n){let i=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[i]=n[r],i++);n.length=i,O0(e,n.length>0?n:void 0)}dl(e,i=>{pl(t,i)})}function rN(t,e){const n=jo(B0(t,e)),i=ud(t.transactionQueueTree_,e);return LR(i,r=>{bu(t,r)}),bu(t,i),M0(i,r=>{bu(t,r)}),n}function bu(t,e){const n=ys(e);if(n){const i=[];let r=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(O(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(O(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(Ar(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?O0(e,void 0):n.length=s+1,ur(t.eventQueue_,jo(e),r);for(let o=0;o<i.length;o++)$o(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sN(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function oN(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Kt(`Invalid query segment '${n}' in query '${t}'`)}return e}const lg=function(t,e){const n=aN(t),i=n.namespace;n.domain==="firebase.com"&&er(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&er("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||LA();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new qA(n.host,n.secure,i,r,e,"",i!==n.subdomain),path:new Le(n.pathString)}},aN=function(t){let e="",n="",i="",r="",s="",o=!0,a="https",c=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(r=sN(t.substring(u,h)));const f=oN(t.substring(Math.min(t.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const d=e.slice(0,l);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{const m=e.indexOf(".");i=e.substring(0,m).toLowerCase(),n=e.substring(m+1),s=i}"ns"in f&&(s=f.ns)}return{host:e,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(e,n,i,r){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=r}get key(){return le(this._path)?null:n0(this._path)}get ref(){return new _s(this._repo,this._path)}get _queryIdentifier(){const e=Gm(this._queryParams),n=Gf(e);return n==="{}"?"default":n}get _queryObject(){return Gm(this._queryParams)}isEqual(e){if(e=Ut(e),!(e instanceof pd))return!1;const n=this._repo===e._repo,i=s0(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+vk(this._path)}}class _s extends pd{constructor(e,n){super(e,n,new ed,!1)}get parent(){const e=r0(this._path);return e===null?null:new _s(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}IR(_s);CR(_s);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cN="FIREBASE_DATABASE_EMULATOR_HOST",kh={};let lN=!1;function uN(t,e,n,i,r){let s=i||t.options.databaseURL;s===void 0&&(t.options.projectId||er("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),gt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=lg(s,r),a=o.repoInfo,c,l;typeof process<"u"&&process.env&&(l=process.env[cN]),l?(c=!0,s=`http://${l}?ns=${a.namespace}`,o=lg(s,r),a=o.repoInfo):c=!o.repoInfo.secure;const u=r&&c?new yh(yh.OWNER):new WA(t.name,t.options,e);jR("Invalid Firebase Database URL",o),le(o.path)||er("Database URL must point to the root of a Firebase Database (not including a child path).");const h=fN(a,t,u,new KA(t.name,n));return new dN(h,t)}function hN(t,e){const n=kh[e];(!n||n[t.key]!==t)&&er(`Database ${e}(${t.repoInfo_}) has already been deleted.`),tN(t),delete n[t.key]}function fN(t,e,n,i){let r=kh[e.name];r||(r={},kh[e.name]=r);let s=r[t.toURLString()];return s&&er("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new YR(t,lN,n,i),r[t.toURLString()]=s,s}class dN{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(QR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new _s(this._repo,Se())),this._rootInternal}_delete(){return this._rootInternal!==null&&(hN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&er("Cannot call "+e+" on a deleted database.")}}/**
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
 */function pN(t){xA(ms),Nn(new pn("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return uN(i,r,s,n)},"PUBLIC").setMultipleInstances(!0)),Ht(Nm,xm,t),Ht(Nm,xm,"esm2017")}jn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};jn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};pN();var mN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},z,md=md||{},Z=mN||self;function vc(){}function ml(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function zo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function gN(t){return Object.prototype.hasOwnProperty.call(t,Eu)&&t[Eu]||(t[Eu]=++yN)}var Eu="closure_uid_"+(1e9*Math.random()>>>0),yN=0;function _N(t,e,n){return t.call.apply(t.bind,arguments)}function vN(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,i),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function wt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?wt=_N:wt=vN,wt.apply(null,arguments)}function Ea(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function dt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(i,r,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(i,o)}}function ki(){this.s=this.s,this.o=this.o}var bN=0;ki.prototype.s=!1;ki.prototype.na=function(){!this.s&&(this.s=!0,this.M(),bN!=0)&&gN(this)};ki.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const H0=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function gd(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function ug(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(ml(i)){const r=t.length||0,s=i.length||0;t.length=r+s;for(let o=0;o<s;o++)t[r+o]=i[o]}else t.push(i)}}function Tt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Tt.prototype.h=function(){this.defaultPrevented=!0};var EN=function(){if(!Z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Z.addEventListener("test",vc,e),Z.removeEventListener("test",vc,e)}catch{}return t}();function bc(t){return/^[\s\xa0]*$/.test(t)}var hg=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function wu(t,e){return t<e?-1:t>e?1:0}function gl(){var t=Z.navigator;return t&&(t=t.userAgent)?t:""}function bn(t){return gl().indexOf(t)!=-1}function yd(t){return yd[" "](t),t}yd[" "]=vc;function wN(t){var e=CN;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var TN=bn("Opera"),Yr=bn("Trident")||bn("MSIE"),K0=bn("Edge"),Rh=K0||Yr,W0=bn("Gecko")&&!(gl().toLowerCase().indexOf("webkit")!=-1&&!bn("Edge"))&&!(bn("Trident")||bn("MSIE"))&&!bn("Edge"),IN=gl().toLowerCase().indexOf("webkit")!=-1&&!bn("Edge");function q0(){var t=Z.document;return t?t.documentMode:void 0}var Ec;e:{var Tu="",Iu=function(){var t=gl();if(W0)return/rv:([^\);]+)(\)|;)/.exec(t);if(K0)return/Edge\/([\d\.]+)/.exec(t);if(Yr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(IN)return/WebKit\/(\S+)/.exec(t);if(TN)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Iu&&(Tu=Iu?Iu[1]:""),Yr){var Cu=q0();if(Cu!=null&&Cu>parseFloat(Tu)){Ec=String(Cu);break e}}Ec=Tu}var CN={};function SN(){return wN(function(){let t=0;const e=hg(String(Ec)).split("."),n=hg("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var r=e[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r[0].length==0&&s[0].length==0)break;t=wu(r[1].length==0?0:parseInt(r[1],10),s[1].length==0?0:parseInt(s[1],10))||wu(r[2].length==0,s[2].length==0)||wu(r[2],s[2]),r=r[3],s=s[3]}while(t==0)}return 0<=t})}var Nh;if(Z.document&&Yr){var fg=q0();Nh=fg||parseInt(Ec,10)||void 0}else Nh=void 0;var AN=Nh;function yo(t,e){if(Tt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(W0){e:{try{yd(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:kN[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&yo.X.h.call(this)}}dt(yo,Tt);var kN={2:"touch",3:"pen",4:"mouse"};yo.prototype.h=function(){yo.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ho="closure_listenable_"+(1e6*Math.random()|0),RN=0;function NN(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=r,this.key=++RN,this.ba=this.ea=!1}function yl(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function _d(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function G0(t){const e={};for(const n in t)e[n]=t[n];return e}const dg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Y0(t,e){let n,i;for(let r=1;r<arguments.length;r++){i=arguments[r];for(n in i)t[n]=i[n];for(let s=0;s<dg.length;s++)n=dg[s],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function _l(t){this.src=t,this.g={},this.h=0}_l.prototype.add=function(t,e,n,i,r){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Dh(t,e,i,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new NN(e,this.src,s,!!i,r),e.ea=n,t.push(e)),e};function xh(t,e){var n=e.type;if(n in t.g){var i=t.g[n],r=H0(i,e),s;(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(yl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Dh(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==i)return r}return-1}var vd="closure_lm_"+(1e6*Math.random()|0),Su={};function Q0(t,e,n,i,r){if(i&&i.once)return J0(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Q0(t,e[s],n,i,r);return null}return n=wd(n),t&&t[Ho]?t.N(e,n,zo(i)?!!i.capture:!!i,r):X0(t,e,n,!1,i,r)}function X0(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=zo(r)?!!r.capture:!!r,a=Ed(t);if(a||(t[vd]=a=new _l(t)),n=a.add(e,n,i,o,s),n.proxy)return n;if(i=xN(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)EN||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(eb(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function xN(){function t(n){return e.call(t.src,t.listener,n)}const e=DN;return t}function J0(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)J0(t,e[s],n,i,r);return null}return n=wd(n),t&&t[Ho]?t.O(e,n,zo(i)?!!i.capture:!!i,r):X0(t,e,n,!0,i,r)}function Z0(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)Z0(t,e[s],n,i,r);else i=zo(i)?!!i.capture:!!i,n=wd(n),t&&t[Ho]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Dh(s,n,i,r),-1<n&&(yl(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ed(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Dh(e,n,i,r)),(n=-1<t?e[t]:null)&&bd(n))}function bd(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Ho])xh(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(eb(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Ed(e))?(xh(n,t),n.h==0&&(n.src=null,e[vd]=null)):yl(t)}}}function eb(t){return t in Su?Su[t]:Su[t]="on"+t}function DN(t,e){if(t.ba)t=!0;else{e=new yo(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&bd(t),t=n.call(i,e)}return t}function Ed(t){return t=t[vd],t instanceof _l?t:null}var Au="__closure_events_fn_"+(1e9*Math.random()>>>0);function wd(t){return typeof t=="function"?t:(t[Au]||(t[Au]=function(e){return t.handleEvent(e)}),t[Au])}function ct(){ki.call(this),this.i=new _l(this),this.P=this,this.I=null}dt(ct,ki);ct.prototype[Ho]=!0;ct.prototype.removeEventListener=function(t,e,n,i){Z0(this,t,e,n,i)};function ft(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new Tt(e,t);else if(e instanceof Tt)e.target=e.target||t;else{var r=e;e=new Tt(i,t),Y0(e,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=wa(o,i,!0,e)&&r}if(o=e.g=t,r=wa(o,i,!0,e)&&r,r=wa(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)o=e.g=n[s],r=wa(o,i,!1,e)&&r}ct.prototype.M=function(){if(ct.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)yl(n[i]);delete t.g[e],t.h--}}this.I=null};ct.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};ct.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function wa(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&xh(t.i,o),r=a.call(c,i)!==!1&&r}}return r&&!i.defaultPrevented}var Td=Z.JSON.stringify;function ON(){var t=ib;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class PN{constructor(){this.h=this.g=null}add(e,n){const i=tb.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var tb=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new MN,t=>t.reset());class MN{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function LN(t){Z.setTimeout(()=>{throw t},0)}function nb(t,e){Oh||FN(),Ph||(Oh(),Ph=!0),ib.add(t,e)}var Oh;function FN(){var t=Z.Promise.resolve(void 0);Oh=function(){t.then(UN)}}var Ph=!1,ib=new PN;function UN(){for(var t;t=ON();){try{t.h.call(t.g)}catch(n){LN(n)}var e=tb;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ph=!1}function vl(t,e){ct.call(this),this.h=t||1,this.g=e||Z,this.j=wt(this.lb,this),this.l=Date.now()}dt(vl,ct);z=vl.prototype;z.ca=!1;z.R=null;z.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ft(this,"tick"),this.ca&&(Id(this),this.start()))}};z.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Id(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}z.M=function(){vl.X.M.call(this),Id(this),delete this.g};function Cd(t,e,n){if(typeof t=="function")n&&(t=wt(t,n));else if(t&&typeof t.handleEvent=="function")t=wt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Z.setTimeout(t,e||0)}function rb(t){t.g=Cd(()=>{t.g=null,t.i&&(t.i=!1,rb(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class VN extends ki{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:rb(this)}M(){super.M(),this.g&&(Z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _o(t){ki.call(this),this.h=t,this.g={}}dt(_o,ki);var pg=[];function sb(t,e,n,i){Array.isArray(n)||(n&&(pg[0]=n.toString()),n=pg);for(var r=0;r<n.length;r++){var s=Q0(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function ob(t){_d(t.g,function(e,n){this.g.hasOwnProperty(n)&&bd(e)},t),t.g={}}_o.prototype.M=function(){_o.X.M.call(this),ob(this)};_o.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function bl(){this.g=!0}bl.prototype.Aa=function(){this.g=!1};function $N(t,e,n,i,r,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function BN(t,e,n,i,r,s,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+`
`+n+`
`+s+" "+o})}function kr(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+zN(t,n)+(i?" "+i:"")})}function jN(t,e){t.info(function(){return"TIMEOUT: "+e})}bl.prototype.info=function(){};function zN(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Td(n)}catch{return e}}var hr={},mg=null;function El(){return mg=mg||new ct}hr.Pa="serverreachability";function ab(t){Tt.call(this,hr.Pa,t)}dt(ab,Tt);function vo(t){const e=El();ft(e,new ab(e))}hr.STAT_EVENT="statevent";function cb(t,e){Tt.call(this,hr.STAT_EVENT,t),this.stat=e}dt(cb,Tt);function At(t){const e=El();ft(e,new cb(e,t))}hr.Qa="timingevent";function lb(t,e){Tt.call(this,hr.Qa,t),this.size=e}dt(lb,Tt);function Ko(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Z.setTimeout(function(){t()},e)}var wl={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},ub={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Sd(){}Sd.prototype.h=null;function gg(t){return t.h||(t.h=t.i())}function hb(){}var Wo={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Ad(){Tt.call(this,"d")}dt(Ad,Tt);function kd(){Tt.call(this,"c")}dt(kd,Tt);var Mh;function Tl(){}dt(Tl,Sd);Tl.prototype.g=function(){return new XMLHttpRequest};Tl.prototype.i=function(){return{}};Mh=new Tl;function qo(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new _o(this),this.O=HN,t=Rh?125:void 0,this.T=new vl(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new fb}function fb(){this.i=null,this.g="",this.h=!1}var HN=45e3,Lh={},wc={};z=qo.prototype;z.setTimeout=function(t){this.O=t};function Fh(t,e,n){t.K=1,t.v=Cl(Wn(e)),t.s=n,t.P=!0,db(t,null)}function db(t,e){t.F=Date.now(),Go(t),t.A=Wn(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),Eb(n.i,"t",i),t.C=0,n=t.l.H,t.h=new fb,t.g=jb(t.l,n?e:null,!t.s),0<t.N&&(t.L=new VN(wt(t.La,t,t.g),t.N)),sb(t.S,t.g,"readystatechange",t.ib),e=t.H?G0(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),vo(),$N(t.j,t.u,t.A,t.m,t.U,t.s)}z.ib=function(t){t=t.target;const e=this.L;e&&$n(t)==3?e.l():this.La(t)};z.La=function(t){try{if(t==this.g)e:{const u=$n(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Rh||this.g&&(this.h.h||this.g.fa()||bg(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?vo(3):vo(2)),Il(this);var n=this.g.aa();this.Y=n;t:if(pb(this)){var i=bg(this.g);t="";var r=i.length,s=$n(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Bi(this),Gs(this);var o="";break t}this.h.i=new Z.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,BN(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!bc(a)){var l=a;break t}}l=null}if(n=l)kr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Uh(this,n);else{this.i=!1,this.o=3,At(12),Bi(this),Gs(this);break e}}this.P?(mb(this,u,o),Rh&&this.i&&u==3&&(sb(this.S,this.T,"tick",this.hb),this.T.start())):(kr(this.j,this.m,o,null),Uh(this,o)),u==4&&Bi(this),this.i&&!this.I&&(u==4?Ub(this.l,this):(this.i=!1,Go(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,At(12)):(this.o=0,At(13)),Bi(this),Gs(this)}}}catch{}finally{}};function pb(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function mb(t,e,n){let i=!0,r;for(;!t.I&&t.C<n.length;)if(r=KN(t,n),r==wc){e==4&&(t.o=4,At(14),i=!1),kr(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Lh){t.o=4,At(15),kr(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else kr(t.j,t.m,r,null),Uh(t,r);pb(t)&&r!=wc&&r!=Lh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,At(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Md(e),e.K=!0,At(11))):(kr(t.j,t.m,n,"[Invalid Chunked Response]"),Bi(t),Gs(t))}z.hb=function(){if(this.g){var t=$n(this.g),e=this.g.fa();this.C<e.length&&(Il(this),mb(this,t,e),this.i&&t!=4&&Go(this))}};function KN(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?wc:(n=Number(e.substring(n,i)),isNaN(n)?Lh:(i+=1,i+n>e.length?wc:(e=e.substr(i,n),t.C=i+n,e)))}z.cancel=function(){this.I=!0,Bi(this)};function Go(t){t.V=Date.now()+t.O,gb(t,t.O)}function gb(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ko(wt(t.gb,t),e)}function Il(t){t.B&&(Z.clearTimeout(t.B),t.B=null)}z.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(jN(this.j,this.A),this.K!=2&&(vo(),At(17)),Bi(this),this.o=2,Gs(this)):gb(this,this.V-t)};function Gs(t){t.l.G==0||t.I||Ub(t.l,t)}function Bi(t){Il(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Id(t.T),ob(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Uh(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Vh(n.h,t))){if(!t.J&&Vh(n.h,t)&&n.G==3){try{var i=n.Fa.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var r=i;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Cc(n),kl(n);else break e;Pd(n),At(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Ko(wt(n.cb,n),6e3));if(1>=Ib(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else ji(n,11)}else if((t.J||n.g==t)&&Cc(n),!bc(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(i=1.5*f,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const d=t.g;if(d){const m=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var s=i.h;s.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Rd(s,s.h),s.h=null))}if(i.D){const y=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(i.za=y,Ue(i.F,i.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),i=n;var o=t;if(i.sa=Bb(i,i.H?i.ka:null,i.V),o.J){Cb(i.h,o);var a=o,c=i.J;c&&a.setTimeout(c),a.B&&(Il(a),Go(a)),i.g=o}else Lb(i);0<n.i.length&&Rl(n)}else l[0]!="stop"&&l[0]!="close"||ji(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?ji(n,7):Od(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}vo(4)}catch{}}function WN(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ml(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function qN(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ml(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function yb(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ml(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=qN(t),i=WN(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}var _b=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function GN(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Qi(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Qi){this.h=e!==void 0?e:t.h,Tc(this,t.j),this.s=t.s,this.g=t.g,Ic(this,t.m),this.l=t.l,e=t.i;var n=new bo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),yg(this,n),this.o=t.o}else t&&(n=String(t).match(_b))?(this.h=!!e,Tc(this,n[1]||"",!0),this.s=Ms(n[2]||""),this.g=Ms(n[3]||"",!0),Ic(this,n[4]),this.l=Ms(n[5]||"",!0),yg(this,n[6]||"",!0),this.o=Ms(n[7]||"")):(this.h=!!e,this.i=new bo(null,this.h))}Qi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ls(e,_g,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ls(e,_g,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ls(n,n.charAt(0)=="/"?XN:QN,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ls(n,ZN)),t.join("")};function Wn(t){return new Qi(t)}function Tc(t,e,n){t.j=n?Ms(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ic(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function yg(t,e,n){e instanceof bo?(t.i=e,ex(t.i,t.h)):(n||(e=Ls(e,JN)),t.i=new bo(e,t.h))}function Ue(t,e,n){t.i.set(e,n)}function Cl(t){return Ue(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ms(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ls(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,YN),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function YN(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var _g=/[#\/\?@]/g,QN=/[#\?:]/g,XN=/[#\?]/g,JN=/[#\?@]/g,ZN=/#/g;function bo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ri(t){t.g||(t.g=new Map,t.h=0,t.i&&GN(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}z=bo.prototype;z.add=function(t,e){Ri(this),this.i=null,t=vs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function vb(t,e){Ri(t),e=vs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function bb(t,e){return Ri(t),e=vs(t,e),t.g.has(e)}z.forEach=function(t,e){Ri(this),this.g.forEach(function(n,i){n.forEach(function(r){t.call(e,r,i,this)},this)},this)};z.oa=function(){Ri(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let s=0;s<r.length;s++)n.push(e[i])}return n};z.W=function(t){Ri(this);let e=[];if(typeof t=="string")bb(this,t)&&(e=e.concat(this.g.get(vs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};z.set=function(t,e){return Ri(this),this.i=null,t=vs(this,t),bb(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};z.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Eb(t,e,n){vb(t,e),0<n.length&&(t.i=null,t.g.set(vs(t,e),gd(n)),t.h+=n.length)}z.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const s=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var r=s;o[i]!==""&&(r+="="+encodeURIComponent(String(o[i]))),t.push(r)}}return this.i=t.join("&")};function vs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ex(t,e){e&&!t.j&&(Ri(t),t.i=null,t.g.forEach(function(n,i){var r=i.toLowerCase();i!=r&&(vb(this,i),Eb(this,r,n))},t)),t.j=e}var tx=class{constructor(e,n){this.h=e,this.g=n}};function wb(t){this.l=t||nx,Z.PerformanceNavigationTiming?(t=Z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Z.g&&Z.g.Ga&&Z.g.Ga()&&Z.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var nx=10;function Tb(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Ib(t){return t.h?1:t.g?t.g.size:0}function Vh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Rd(t,e){t.g?t.g.add(e):t.h=e}function Cb(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}wb.prototype.cancel=function(){if(this.i=Sb(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Sb(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return gd(t.i)}function Nd(){}Nd.prototype.stringify=function(t){return Z.JSON.stringify(t,void 0)};Nd.prototype.parse=function(t){return Z.JSON.parse(t,void 0)};function ix(){this.g=new Nd}function rx(t,e,n){const i=n||"";try{yb(t,function(r,s){let o=r;zo(r)&&(o=Td(r)),e.push(i+s+"="+encodeURIComponent(o))})}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function sx(t,e){const n=new bl;if(Z.Image){const i=new Image;i.onload=Ea(Ta,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Ea(Ta,n,i,"TestLoadImage: error",!1,e),i.onabort=Ea(Ta,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Ea(Ta,n,i,"TestLoadImage: timeout",!1,e),Z.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function Ta(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch{}}function Yo(t){this.l=t.ac||null,this.j=t.jb||!1}dt(Yo,Sd);Yo.prototype.g=function(){return new Sl(this.l,this.j)};Yo.prototype.i=function(t){return function(){return t}}({});function Sl(t,e){ct.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=xd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}dt(Sl,ct);var xd=0;z=Sl.prototype;z.open=function(t,e){if(this.readyState!=xd)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Eo(this)};z.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Z).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};z.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qo(this)),this.readyState=xd};z.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Eo(this)),this.g&&(this.readyState=3,Eo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ab(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Ab(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}z.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Qo(this):Eo(this),this.readyState==3&&Ab(this)}};z.Va=function(t){this.g&&(this.response=this.responseText=t,Qo(this))};z.Ua=function(t){this.g&&(this.response=t,Qo(this))};z.ga=function(){this.g&&Qo(this)};function Qo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Eo(t)}z.setRequestHeader=function(t,e){this.v.append(t,e)};z.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};z.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Eo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Sl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var ox=Z.JSON.parse;function He(t){ct.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=kb,this.K=this.L=!1}dt(He,ct);var kb="",ax=/^https?$/i,cx=["POST","PUT"];z=He.prototype;z.Ka=function(t){this.L=t};z.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Mh.g(),this.C=this.u?gg(this.u):gg(Mh),this.g.onreadystatechange=wt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){vg(this,s);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const s of i.keys())n.set(s,i.get(s));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),r=Z.FormData&&t instanceof Z.FormData,!(0<=H0(cx,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{xb(this),0<this.B&&((this.K=lx(this.g))?(this.g.timeout=this.B,this.g.ontimeout=wt(this.qa,this)):this.A=Cd(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){vg(this,s)}};function lx(t){return Yr&&SN()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}z.qa=function(){typeof md<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ft(this,"timeout"),this.abort(8))};function vg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Rb(t),Al(t)}function Rb(t){t.D||(t.D=!0,ft(t,"complete"),ft(t,"error"))}z.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ft(this,"complete"),ft(this,"abort"),Al(this))};z.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Al(this,!0)),He.X.M.call(this)};z.Ha=function(){this.s||(this.F||this.v||this.l?Nb(this):this.fb())};z.fb=function(){Nb(this)};function Nb(t){if(t.h&&typeof md<"u"&&(!t.C[1]||$n(t)!=4||t.aa()!=2)){if(t.v&&$n(t)==4)Cd(t.Ha,0,t);else if(ft(t,"readystatechange"),$n(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var r=String(t.H).match(_b)[1]||null;if(!r&&Z.self&&Z.self.location){var s=Z.self.location.protocol;r=s.substr(0,s.length-1)}i=!ax.test(r?r.toLowerCase():"")}n=i}if(n)ft(t,"complete"),ft(t,"success");else{t.m=6;try{var o=2<$n(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Rb(t)}}finally{Al(t)}}}}function Al(t,e){if(t.g){xb(t);const n=t.g,i=t.C[0]?vc:null;t.g=null,t.C=null,e||ft(t,"ready");try{n.onreadystatechange=i}catch{}}}function xb(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Z.clearTimeout(t.A),t.A=null)}function $n(t){return t.g?t.g.readyState:0}z.aa=function(){try{return 2<$n(this)?this.g.status:-1}catch{return-1}};z.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};z.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),ox(e)}};function bg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case kb:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}z.Ea=function(){return this.m};z.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Db(t){let e="";return _d(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function Dd(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=Db(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ue(t,e,n))}function xs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ob(t){this.Ca=0,this.i=[],this.j=new bl,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=xs("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=xs("baseRetryDelayMs",5e3,t),this.bb=xs("retryDelaySeedMs",1e4,t),this.$a=xs("forwardChannelMaxRetries",2,t),this.ta=xs("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new wb(t&&t.concurrentRequestLimit),this.Fa=new ix,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}z=Ob.prototype;z.ma=8;z.G=1;function Od(t){if(Pb(t),t.G==3){var e=t.U++,n=Wn(t.F);Ue(n,"SID",t.I),Ue(n,"RID",e),Ue(n,"TYPE","terminate"),Xo(t,n),e=new qo(t,t.j,e,void 0),e.K=2,e.v=Cl(Wn(n)),n=!1,Z.navigator&&Z.navigator.sendBeacon&&(n=Z.navigator.sendBeacon(e.v.toString(),"")),!n&&Z.Image&&(new Image().src=e.v,n=!0),n||(e.g=jb(e.l,null),e.g.da(e.v)),e.F=Date.now(),Go(e)}$b(t)}function kl(t){t.g&&(Md(t),t.g.cancel(),t.g=null)}function Pb(t){kl(t),t.u&&(Z.clearTimeout(t.u),t.u=null),Cc(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Z.clearTimeout(t.m),t.m=null)}function Rl(t){Tb(t.h)||t.m||(t.m=!0,nb(t.Ja,t),t.C=0)}function ux(t,e){return Ib(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Ko(wt(t.Ja,t,e),Vb(t,t.C)),t.C++,!0)}z.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new qo(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=G0(s),Y0(s,this.S)):s=this.S),this.o!==null||this.N||(r.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var i=this.i[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Mb(this,r,e),n=Wn(this.F),Ue(n,"RID",t),Ue(n,"CVER",22),this.D&&Ue(n,"X-HTTP-Session-Id",this.D),Xo(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(Db(s)))+"&"+e:this.o&&Dd(n,this.o,s)),Rd(this.h,r),this.Ya&&Ue(n,"TYPE","init"),this.O?(Ue(n,"$req",e),Ue(n,"SID","null"),r.Z=!0,Fh(r,n,null)):Fh(r,n,e),this.G=2}}else this.G==3&&(t?Eg(this,t):this.i.length==0||Tb(this.h)||Eg(this))};function Eg(t,e){var n;e?n=e.m:n=t.U++;const i=Wn(t.F);Ue(i,"SID",t.I),Ue(i,"RID",n),Ue(i,"AID",t.T),Xo(t,i),t.o&&t.s&&Dd(i,t.o,t.s),n=new qo(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Mb(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Rd(t.h,n),Fh(n,i,e)}function Xo(t,e){t.ia&&_d(t.ia,function(n,i){Ue(e,i,n)}),t.l&&yb({},function(n,i){Ue(e,i,n)})}function Mb(t,e,n){n=Math.min(t.i.length,n);var i=t.l?wt(t.l.Ra,t.l,t):null;e:{var r=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=r[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=s,0>l)s=Math.max(0,r[c].h-100),a=!1;else try{rx(u,o,"req"+l+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,i}function Lb(t){t.g||t.u||(t.Z=1,nb(t.Ia,t),t.A=0)}function Pd(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Ko(wt(t.Ia,t),Vb(t,t.A)),t.A++,!0)}z.Ia=function(){if(this.u=null,Fb(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Ko(wt(this.eb,this),t)}};z.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,At(10),kl(this),Fb(this))};function Md(t){t.B!=null&&(Z.clearTimeout(t.B),t.B=null)}function Fb(t){t.g=new qo(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Wn(t.sa);Ue(e,"RID","rpc"),Ue(e,"SID",t.I),Ue(e,"CI",t.L?"0":"1"),Ue(e,"AID",t.T),Ue(e,"TYPE","xmlhttp"),Xo(t,e),t.o&&t.s&&Dd(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Cl(Wn(e)),n.s=null,n.P=!0,db(n,t)}z.cb=function(){this.v!=null&&(this.v=null,kl(this),Pd(this),At(19))};function Cc(t){t.v!=null&&(Z.clearTimeout(t.v),t.v=null)}function Ub(t,e){var n=null;if(t.g==e){Cc(t),Md(t),t.g=null;var i=2}else if(Vh(t.h,e))n=e.D,Cb(t.h,e),i=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;i=El(),ft(i,new lb(i,n)),Rl(t)}else Lb(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(i==1&&ux(t,e)||i==2&&Pd(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:ji(t,5);break;case 4:ji(t,10);break;case 3:ji(t,6);break;default:ji(t,2)}}}function Vb(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function ji(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var i=wt(t.kb,t);n||(n=new Qi("//www.google.com/images/cleardot.gif"),Z.location&&Z.location.protocol=="http"||Tc(n,"https"),Cl(n)),sx(n.toString(),i)}else At(2);t.G=0,t.l&&t.l.va(e),$b(t),Pb(t)}z.kb=function(t){t?(this.j.info("Successfully pinged google.com"),At(2)):(this.j.info("Failed to ping google.com"),At(1))};function $b(t){if(t.G=0,t.la=[],t.l){const e=Sb(t.h);(e.length!=0||t.i.length!=0)&&(ug(t.la,e),ug(t.la,t.i),t.h.i.length=0,gd(t.i),t.i.length=0),t.l.ua()}}function Bb(t,e,n){var i=n instanceof Qi?Wn(n):new Qi(n,void 0);if(i.g!="")e&&(i.g=e+"."+i.g),Ic(i,i.m);else{var r=Z.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new Qi(null,void 0);i&&Tc(s,i),e&&(s.g=e),r&&Ic(s,r),n&&(s.l=n),i=s}return n=t.D,e=t.za,n&&e&&Ue(i,n,e),Ue(i,"VER",t.ma),Xo(t,i),i}function jb(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new He(new Yo({jb:!0})):new He(t.ra),e.Ka(t.H),e}function zb(){}z=zb.prototype;z.xa=function(){};z.wa=function(){};z.va=function(){};z.ua=function(){};z.Ra=function(){};function Sc(){if(Yr&&!(10<=Number(AN)))throw Error("Environmental error: no available transport.")}Sc.prototype.g=function(t,e){return new Wt(t,e)};function Wt(t,e){ct.call(this),this.g=new Ob(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!bc(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!bc(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new bs(this)}dt(Wt,ct);Wt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;At(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Bb(t,null,t.V),Rl(t)};Wt.prototype.close=function(){Od(this.g)};Wt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Td(t),t=n);e.i.push(new tx(e.ab++,t)),e.G==3&&Rl(e)};Wt.prototype.M=function(){this.g.l=null,delete this.j,Od(this.g),delete this.g,Wt.X.M.call(this)};function Hb(t){Ad.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}dt(Hb,Ad);function Kb(){kd.call(this),this.status=1}dt(Kb,kd);function bs(t){this.g=t}dt(bs,zb);bs.prototype.xa=function(){ft(this.g,"a")};bs.prototype.wa=function(t){ft(this.g,new Hb(t))};bs.prototype.va=function(t){ft(this.g,new Kb)};bs.prototype.ua=function(){ft(this.g,"b")};Sc.prototype.createWebChannel=Sc.prototype.g;Wt.prototype.send=Wt.prototype.u;Wt.prototype.open=Wt.prototype.m;Wt.prototype.close=Wt.prototype.close;wl.NO_ERROR=0;wl.TIMEOUT=8;wl.HTTP_ERROR=6;ub.COMPLETE="complete";hb.EventType=Wo;Wo.OPEN="a";Wo.CLOSE="b";Wo.ERROR="c";Wo.MESSAGE="d";ct.prototype.listen=ct.prototype.N;He.prototype.listenOnce=He.prototype.O;He.prototype.getLastError=He.prototype.Oa;He.prototype.getLastErrorCode=He.prototype.Ea;He.prototype.getStatus=He.prototype.aa;He.prototype.getResponseJson=He.prototype.Sa;He.prototype.getResponseText=He.prototype.fa;He.prototype.send=He.prototype.da;He.prototype.setWithCredentials=He.prototype.Ka;var hx=function(){return new Sc},fx=function(){return El()},ku=wl,dx=ub,px=hr,wg={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},mx=Yo,Ia=hb,gx=He;const Tg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Es="9.20.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=new Lo("@firebase/firestore");function Ig(){return rr.logLevel}function H(t,...e){if(rr.logLevel<=me.DEBUG){const n=e.map(Ld);rr.debug(`Firestore (${Es}): ${t}`,...n)}}function qn(t,...e){if(rr.logLevel<=me.ERROR){const n=e.map(Ld);rr.error(`Firestore (${Es}): ${t}`,...n)}}function Ac(t,...e){if(rr.logLevel<=me.WARN){const n=e.map(Ld);rr.warn(`Firestore (${Es}): ${t}`,...n)}}function Ld(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function J(t="Unexpected state"){const e=`FIRESTORE (${Es}) INTERNAL ASSERTION FAILED: `+t;throw qn(e),new Error(e)}function Me(t,e){t||J()}function ie(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Q extends ei{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class yx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(mt.UNAUTHENTICATED))}shutdown(){}}class _x{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class vx{constructor(e){this.t=e,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const r=c=>this.i!==i?(i=this.i,n(c)):Promise.resolve();let s=new zn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new zn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new zn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Me(typeof i.accessToken=="string"),new Wb(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Me(e===null||typeof e=="string"),new mt(e)}}class bx{constructor(e,n,i){this.h=e,this.l=n,this.m=i,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Ex{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new bx(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class wx{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Tx{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const i=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>i(s))};const r=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?r(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Me(typeof n.token=="string"),this.T=n.token,new wx(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ix(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const r=Ix(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=e.charAt(r[s]%e.length))}return i}}function be(t,e){return t<e?-1:t>e?1:0}function Qr(t,e,n){return t.length===e.length&&t.every((i,r)=>n(i,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Q(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Q(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Q(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Q(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Xe.fromMillis(Date.now())}static fromDate(e){return Xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new Xe(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ne(e)}static min(){return new ne(new Xe(0,0))}static max(){return new ne(new Xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,n,i){n===void 0?n=0:n>e.length&&J(),i===void 0?i=e.length-n:i>e.length-n&&J(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return wo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof wo?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let r=0;r<i;r++){const s=e.get(r),o=n.get(r);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ve extends wo{construct(e,n,i){return new Ve(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new Q(A.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(r=>r.length>0))}return new Ve(n)}static emptyPath(){return new Ve([])}}const Cx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bt extends wo{construct(e,n,i){return new bt(e,n,i)}static isValidIdentifier(e){return Cx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new bt(["__name__"])}static fromServerFormat(e){const n=[];let i="",r=0;const s=()=>{if(i.length===0)throw new Q(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new Q(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Q(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(i+=a,r++):(s(),r++)}if(s(),o)throw new Q(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new bt(n)}static emptyPath(){return new bt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Ve.fromString(e))}static fromName(e){return new X(Ve.fromString(e).popFirst(5))}static empty(){return new X(Ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Ve(e.slice()))}}function Sx(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,r=ne.fromTimestamp(i===1e9?new Xe(n+1,0):new Xe(n,i));return new wi(r,X.empty(),e)}function Ax(t){return new wi(t.readTime,t.key,-1)}class wi{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new wi(ne.min(),X.empty(),-1)}static max(){return new wi(ne.max(),X.empty(),-1)}}function kx(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:be(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Nx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jo(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==Rx)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((i,r)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(i,r)},this.catchCallback=s=>{this.wrapFailure(n,s).next(i,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,i)=>{n(e)})}static reject(e){return new R((n,i)=>{i(e)})}static waitFor(e){return new R((n,i)=>{let r=0,s=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++s,o&&s===r&&n()},c=>i(c))}),o=!0,s===r&&n()})}static or(e){let n=R.resolve(!1);for(const i of e)n=n.next(r=>r?R.resolve(r):i());return n}static forEach(e,n){const i=[];return e.forEach((r,s)=>{i.push(n.call(this,r,s))}),this.waitFor(i)}static mapArray(e,n){return new R((i,r)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===s&&i(o)},u=>r(u))}})}static doWhile(e,n){return new R((i,r)=>{const s=()=>{e()===!0?n().next(()=>{s()},r):i()};s()})}}function Zo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Fd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ot(i),this.ut=i=>n.writeSequenceNumber(i))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Fd.ct=-1;function Nl(t){return t==null}function kc(t){return t===0&&1/t==-1/0}function xx(t){return typeof t=="number"&&Number.isInteger(t)&&!kc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function fr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Gb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n){this.comparator=e,this.root=n||lt.EMPTY}insert(e,n){return new tt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(e){return new tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,lt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(e,i.key);if(r===0)return n+i.left.size;r<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ca(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ca(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ca(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ca(this.root,e,this.comparator,!0)}}class Ca{constructor(e,n,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?i(e.key,n):1,n&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class lt{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i??lt.RED,this.left=r??lt.EMPTY,this.right=s??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,r,s){return new lt(e??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return lt.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(t,e,n,i,r){return this}insert(t,e,n){return new lt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.comparator=e,this.data=new tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Sg(this.data.getIterator())}getIteratorFrom(e){return new Sg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof Ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ze(this.comparator);return n.data=e,n}}class Sg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.fields=e,e.sort(bt.comparator)}static empty(){return new an([])}unionWith(e){let n=new Ze(bt.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new an(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Qr(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class Dx extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Dx("Invalid base64 string: "+r):r}}(e);return new It(n)}static fromUint8Array(e){const n=function(i){let r="";for(let s=0;s<i.length;++s)r+=String.fromCharCode(i[s]);return r}(e);return new It(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}It.EMPTY_BYTE_STRING=new It("");const Ox=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ti(t){if(Me(!!t),typeof t=="string"){let e=0;const n=Ox.exec(t);if(Me(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Qe(t.seconds),nanos:Qe(t.nanos)}}function Qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Xr(t){return typeof t=="string"?It.fromBase64String(t):It.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Qb(t){const e=t.mapValue.fields.__previous_value__;return Yb(e)?Qb(e):e}function To(t){const e=Ti(t.mapValue.fields.__local_write_time__.timestampValue);return new Xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{constructor(e,n,i,r,s,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Io{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Io("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Io&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function sr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Yb(t)?4:Mx(t)?9007199254740991:10:J()}function Dn(t,e){if(t===e)return!0;const n=sr(t);if(n!==sr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return To(t).isEqual(To(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const s=Ti(i.timestampValue),o=Ti(r.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,r){return Xr(i.bytesValue).isEqual(Xr(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,r){return Qe(i.geoPointValue.latitude)===Qe(r.geoPointValue.latitude)&&Qe(i.geoPointValue.longitude)===Qe(r.geoPointValue.longitude)}(t,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return Qe(i.integerValue)===Qe(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const s=Qe(i.doubleValue),o=Qe(r.doubleValue);return s===o?kc(s)===kc(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Qr(t.arrayValue.values||[],e.arrayValue.values||[],Dn);case 10:return function(i,r){const s=i.mapValue.fields||{},o=r.mapValue.fields||{};if(Cg(s)!==Cg(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Dn(s[a],o[a])))return!1;return!0}(t,e);default:return J()}}function Co(t,e){return(t.values||[]).find(n=>Dn(n,e))!==void 0}function Jr(t,e){if(t===e)return 0;const n=sr(t),i=sr(e);if(n!==i)return be(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return be(t.booleanValue,e.booleanValue);case 2:return function(r,s){const o=Qe(r.integerValue||r.doubleValue),a=Qe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Ag(t.timestampValue,e.timestampValue);case 4:return Ag(To(t),To(e));case 5:return be(t.stringValue,e.stringValue);case 6:return function(r,s){const o=Xr(r),a=Xr(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,s){const o=r.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=be(o[c],a[c]);if(l!==0)return l}return be(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,s){const o=be(Qe(r.latitude),Qe(s.latitude));return o!==0?o:be(Qe(r.longitude),Qe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,s){const o=r.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Jr(o[c],a[c]);if(l)return l}return be(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,s){if(r===Sa.mapValue&&s===Sa.mapValue)return 0;if(r===Sa.mapValue)return 1;if(s===Sa.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=s.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=be(a[u],l[u]);if(h!==0)return h;const f=Jr(o[a[u]],c[l[u]]);if(f!==0)return f}return be(a.length,l.length)}(t.mapValue,e.mapValue);default:throw J()}}function Ag(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return be(t,e);const n=Ti(t),i=Ti(e),r=be(n.seconds,i.seconds);return r!==0?r:be(n.nanos,i.nanos)}function Zr(t){return $h(t)}function $h(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const r=Ti(i);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Xr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,X.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let r="[",s=!0;for(const o of i.values||[])s?s=!1:r+=",",r+=$h(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(i){const r=Object.keys(i.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${$h(i.fields[a])}`;return s+"}"}(t.mapValue):J();var e,n}function Bh(t){return!!t&&"integerValue"in t}function Ud(t){return!!t&&"arrayValue"in t}function kg(t){return!!t&&"nullValue"in t}function Rg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Wa(t){return!!t&&"mapValue"in t}function Ys(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return fr(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=Ys(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ys(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Mx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.value=e}static empty(){return new jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Wa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ys(n)}setAll(e){let n=bt.emptyPath(),i={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,i,r),i={},r=[],n=a.popLast()}o?i[a.lastSegment()]=Ys(o):r.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,i,r)}delete(e){const n=this.field(e.popLast());Wa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let r=n.mapValue.fields[e.get(i)];Wa(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,i){fr(n,(r,s)=>e[r]=s);for(const r of i)delete e[r]}clone(){return new jt(Ys(this.value))}}function Xb(t){const e=[];return fr(t.fields,(n,i)=>{const r=new bt([n]);if(Wa(i)){const s=Xb(i.mapValue).fields;if(s.length===0)e.push(r);else for(const o of s)e.push(r.child(o))}else e.push(r)}),new an(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,n,i,r,s,o,a){this.key=e,this.documentType=n,this.version=i,this.readTime=r,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new _t(e,0,ne.min(),ne.min(),ne.min(),jt.empty(),0)}static newFoundDocument(e,n,i,r){return new _t(e,1,n,ne.min(),i,r,0)}static newNoDocument(e,n){return new _t(e,2,n,ne.min(),ne.min(),jt.empty(),0)}static newUnknownDocument(e,n){return new _t(e,3,n,ne.min(),ne.min(),jt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Rc{constructor(e,n){this.position=e,this.inclusive=n}}function Ng(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(s.field.isKeyField()?i=X.comparator(X.fromName(o.referenceValue),n.key):i=Jr(o,n.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return i}function xg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Dn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Qs{constructor(e,n="asc"){this.field=e,this.dir=n}}function Lx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Jb{}class Je extends Jb{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new Ux(e,n,i):n==="array-contains"?new Bx(e,i):n==="in"?new jx(e,i):n==="not-in"?new zx(e,i):n==="array-contains-any"?new Hx(e,i):new Je(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new Vx(e,i):new $x(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Jr(n,this.value)):n!==null&&sr(this.value)===sr(n)&&this.matchesComparison(Jr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class On extends Jb{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new On(e,n)}matches(e){return Zb(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Zb(t){return t.op==="and"}function e1(t){return Fx(t)&&Zb(t)}function Fx(t){for(const e of t.filters)if(e instanceof On)return!1;return!0}function jh(t){if(t instanceof Je)return t.field.canonicalString()+t.op.toString()+Zr(t.value);if(e1(t))return t.filters.map(e=>jh(e)).join(",");{const e=t.filters.map(n=>jh(n)).join(",");return`${t.op}(${e})`}}function t1(t,e){return t instanceof Je?function(n,i){return i instanceof Je&&n.op===i.op&&n.field.isEqual(i.field)&&Dn(n.value,i.value)}(t,e):t instanceof On?function(n,i){return i instanceof On&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((r,s,o)=>r&&t1(s,i.filters[o]),!0):!1}(t,e):void J()}function n1(t){return t instanceof Je?function(e){return`${e.field.canonicalString()} ${e.op} ${Zr(e.value)}`}(t):t instanceof On?function(e){return e.op.toString()+" {"+e.getFilters().map(n1).join(" ,")+"}"}(t):"Filter"}class Ux extends Je{constructor(e,n,i){super(e,n,i),this.key=X.fromName(i.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class Vx extends Je{constructor(e,n){super(e,"in",n),this.keys=i1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class $x extends Je{constructor(e,n){super(e,"not-in",n),this.keys=i1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function i1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>X.fromName(i.referenceValue))}class Bx extends Je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ud(n)&&Co(n.arrayValue,this.value)}}class jx extends Je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Co(this.value.arrayValue,n)}}class zx extends Je{constructor(e,n){super(e,"not-in",n)}matches(e){if(Co(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Co(this.value.arrayValue,n)}}class Hx extends Je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ud(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Co(this.value.arrayValue,i))}}/**
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
 */class Kx{constructor(e,n=null,i=[],r=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=r,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function Dg(t,e=null,n=[],i=[],r=null,s=null,o=null){return new Kx(t,e,n,i,r,s,o)}function Vd(t){const e=ie(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>jh(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),Nl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Zr(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Zr(i)).join(",")),e.ft=n}return e.ft}function $d(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Lx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!t1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!xg(t.startAt,e.startAt)&&xg(t.endAt,e.endAt)}function zh(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,n=null,i=[],r=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this.wt=null,this.startAt,this.endAt}}function Wx(t,e,n,i,r,s,o,a){return new xl(t,e,n,i,r,s,o,a)}function Dl(t){return new xl(t)}function Og(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function qx(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Gx(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Yx(t){return t.collectionGroup!==null}function Ur(t){const e=ie(t);if(e.dt===null){e.dt=[];const n=Gx(e),i=qx(e);if(n!==null&&i===null)n.isKeyField()||e.dt.push(new Qs(n)),e.dt.push(new Qs(bt.keyField(),"asc"));else{let r=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(r=!0);if(!r){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Qs(bt.keyField(),s))}}}return e.dt}function Gn(t){const e=ie(t);if(!e.wt)if(e.limitType==="F")e.wt=Dg(e.path,e.collectionGroup,Ur(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Ur(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Qs(s.field,o))}const i=e.endAt?new Rc(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Rc(e.startAt.position,e.startAt.inclusive):null;e.wt=Dg(e.path,e.collectionGroup,n,e.filters,e.limit,i,r)}return e.wt}function Hh(t,e,n){return new xl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ol(t,e){return $d(Gn(t),Gn(e))&&t.limitType===e.limitType}function r1(t){return`${Vd(Gn(t))}|lt:${t.limitType}`}function Kh(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>n1(i)).join(", ")}]`),Nl(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Zr(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Zr(i)).join(",")),`Target(${n})`}(Gn(t))}; limitType=${t.limitType})`}function Pl(t,e){return e.isFoundDocument()&&function(n,i){const r=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):X.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,i){for(const r of Ur(n))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const r of n.filters)if(!r.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!function(r,s,o){const a=Ng(r,s,o);return r.inclusive?a<=0:a<0}(n.startAt,Ur(n),i)||n.endAt&&!function(r,s,o){const a=Ng(r,s,o);return r.inclusive?a>=0:a>0}(n.endAt,Ur(n),i))}(t,e)}function Qx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function s1(t){return(e,n)=>{let i=!1;for(const r of Ur(t)){const s=Xx(r,e,n);if(s!==0)return s;i=i||r.field.isKeyField()}return 0}}function Xx(t,e,n){const i=t.field.isKeyField()?X.comparator(e.key,n.key):function(r,s,o){const a=s.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Jr(a,c):J()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return J()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[r,s]of i)if(this.equalsFn(r,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),r=this.inner[i];if(r===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return i.length===1?delete this.inner[n]:i.splice(r,1),this.innerSize--,!0;return!1}forEach(e){fr(this.inner,(n,i)=>{for(const[r,s]of i)e(r,s)})}isEmpty(){return Gb(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jx=new tt(X.comparator);function Yn(){return Jx}const o1=new tt(X.comparator);function Fs(...t){let e=o1;for(const n of t)e=e.insert(n.key,n);return e}function a1(t){let e=o1;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function zi(){return Xs()}function c1(){return Xs()}function Xs(){return new ws(t=>t.toString(),(t,e)=>t.isEqual(e))}const Zx=new tt(X.comparator),eD=new Ze(X.comparator);function ce(...t){let e=eD;for(const n of t)e=e.add(n);return e}const tD=new Ze(be);function l1(){return tD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u1(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:kc(e)?"-0":e}}function h1(t){return{integerValue:""+t}}function nD(t,e){return xx(e)?h1(e):u1(t,e)}/**
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
 */class Ml{constructor(){this._=void 0}}function iD(t,e,n){return t instanceof Nc?function(i,r){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&(s.fields.__previous_value__=r),{mapValue:s}}(n,e):t instanceof So?d1(t,e):t instanceof Ao?p1(t,e):function(i,r){const s=f1(i,r),o=Pg(s)+Pg(i._t);return Bh(s)&&Bh(i._t)?h1(o):u1(i.serializer,o)}(t,e)}function rD(t,e,n){return t instanceof So?d1(t,e):t instanceof Ao?p1(t,e):n}function f1(t,e){return t instanceof xc?Bh(n=e)||function(i){return!!i&&"doubleValue"in i}(n)?e:{integerValue:0}:null;var n}class Nc extends Ml{}class So extends Ml{constructor(e){super(),this.elements=e}}function d1(t,e){const n=m1(e);for(const i of t.elements)n.some(r=>Dn(r,i))||n.push(i);return{arrayValue:{values:n}}}class Ao extends Ml{constructor(e){super(),this.elements=e}}function p1(t,e){let n=m1(e);for(const i of t.elements)n=n.filter(r=>!Dn(r,i));return{arrayValue:{values:n}}}class xc extends Ml{constructor(e,n){super(),this.serializer=e,this._t=n}}function Pg(t){return Qe(t.integerValue||t.doubleValue)}function m1(t){return Ud(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function sD(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof So&&i instanceof So||n instanceof Ao&&i instanceof Ao?Qr(n.elements,i.elements,Dn):n instanceof xc&&i instanceof xc?Dn(n._t,i._t):n instanceof Nc&&i instanceof Nc}(t.transform,e.transform)}class oD{constructor(e,n){this.version=e,this.transformResults=n}}class Hn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Hn}static exists(e){return new Hn(void 0,e)}static updateTime(e){return new Hn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function qa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ll{}function g1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new _1(t.key,Hn.none()):new Fl(t.key,t.data,Hn.none());{const n=t.data,i=jt.empty();let r=new Ze(bt.comparator);for(let s of e.fields)if(!r.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?i.delete(s):i.set(s,o),r=r.add(s)}return new dr(t.key,i,new an(r.toArray()),Hn.none())}}function aD(t,e,n){t instanceof Fl?function(i,r,s){const o=i.value.clone(),a=Lg(i.fieldTransforms,r,s.transformResults);o.setAll(a),r.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof dr?function(i,r,s){if(!qa(i.precondition,r))return void r.convertToUnknownDocument(s.version);const o=Lg(i.fieldTransforms,r,s.transformResults),a=r.data;a.setAll(y1(i)),a.setAll(o),r.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(i,r,s){r.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Js(t,e,n,i){return t instanceof Fl?function(r,s,o,a){if(!qa(r.precondition,s))return o;const c=r.value.clone(),l=Fg(r.fieldTransforms,a,s);return c.setAll(l),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),null}(t,e,n,i):t instanceof dr?function(r,s,o,a){if(!qa(r.precondition,s))return o;const c=Fg(r.fieldTransforms,a,s),l=s.data;return l.setAll(y1(r)),l.setAll(c),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,i):function(r,s,o){return qa(r.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function cD(t,e){let n=null;for(const i of t.fieldTransforms){const r=e.data.field(i.field),s=f1(i.transform,r||null);s!=null&&(n===null&&(n=jt.empty()),n.set(i.field,s))}return n||null}function Mg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Qr(n,i,(r,s)=>sD(r,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Fl extends Ll{constructor(e,n,i,r=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class dr extends Ll{constructor(e,n,i,r,s=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function y1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function Lg(t,e,n){const i=new Map;Me(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,rD(o,a,n[r]))}return i}function Fg(t,e,n){const i=new Map;for(const r of t){const s=r.transform,o=n.data.field(r.field);i.set(r.field,iD(s,o,e))}return i}class _1 extends Ll{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lD extends Ll{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD{constructor(e,n,i,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(e.key)&&aD(s,e,i[r])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=Js(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=Js(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=c1();return this.mutations.forEach(r=>{const s=e.get(r.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(r.key)?null:a;const c=g1(o,a);c!==null&&i.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(ne.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ce())}isEqual(e){return this.batchId===e.batchId&&Qr(this.mutations,e.mutations,(n,i)=>Mg(n,i))&&Qr(this.baseMutations,e.baseMutations,(n,i)=>Mg(n,i))}}class Bd{constructor(e,n,i,r){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=r}static from(e,n,i){Me(e.mutations.length===i.length);let r=Zx;const s=e.mutations;for(let o=0;o<s.length;o++)r=r.insert(s[o].key,i[o].version);return new Bd(e,n,i,r)}}/**
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
 */class hD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class fD{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ye,ue;function dD(t){switch(t){default:return J();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function v1(t){if(t===void 0)return qn("GRPC error has no .code"),A.UNKNOWN;switch(t){case Ye.OK:return A.OK;case Ye.CANCELLED:return A.CANCELLED;case Ye.UNKNOWN:return A.UNKNOWN;case Ye.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case Ye.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case Ye.INTERNAL:return A.INTERNAL;case Ye.UNAVAILABLE:return A.UNAVAILABLE;case Ye.UNAUTHENTICATED:return A.UNAUTHENTICATED;case Ye.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case Ye.NOT_FOUND:return A.NOT_FOUND;case Ye.ALREADY_EXISTS:return A.ALREADY_EXISTS;case Ye.PERMISSION_DENIED:return A.PERMISSION_DENIED;case Ye.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case Ye.ABORTED:return A.ABORTED;case Ye.OUT_OF_RANGE:return A.OUT_OF_RANGE;case Ye.UNIMPLEMENTED:return A.UNIMPLEMENTED;case Ye.DATA_LOSS:return A.DATA_LOSS;default:return J()}}(ue=Ye||(Ye={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class jd{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Aa}static getOrCreateInstance(){return Aa===null&&(Aa=new jd),Aa}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Aa=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,n,i,r,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const r=new Map;return r.set(e,ea.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new Ul(ne.min(),r,l1(),Yn(),ce())}}class ea{constructor(e,n,i,r,s){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new ea(i,n,ce(),ce(),ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,n,i,r){this.It=e,this.removedTargetIds=n,this.key=i,this.Tt=r}}class b1{constructor(e,n){this.targetId=e,this.Et=n}}class E1{constructor(e,n,i=It.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=r}}class Ug{constructor(){this.At=0,this.Rt=$g(),this.vt=It.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=ce(),n=ce(),i=ce();return this.Rt.forEach((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:i=i.add(r);break;default:J()}}),new ea(this.vt,this.bt,e,n,i)}xt(){this.Pt=!1,this.Rt=$g()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class pD{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=Yn(),this.qt=Vg(),this.Ut=new Ze(be)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const i=this.jt(n);switch(e.state){case 0:this.Wt(n)&&i.Dt(e.resumeToken);break;case 1:i.$t(),i.Vt||i.xt(),i.Dt(e.resumeToken);break;case 2:i.$t(),i.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(i.Mt(),i.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),i.Dt(e.resumeToken));break;default:J()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((i,r)=>{this.Wt(r)&&n(r)})}Jt(e){var n;const i=e.targetId,r=e.Et.count,s=this.Yt(i);if(s){const o=s.target;if(zh(o))if(r===0){const a=new X(o.path);this.Qt(i,a,_t.newNoDocument(a,ne.min()))}else Me(r===1);else{const a=this.Zt(i);a!==r&&(this.Ht(i),this.Ut=this.Ut.add(i),(n=jd.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((s,o)=>{const a=this.Yt(o);if(a){if(s.current&&zh(a.target)){const c=new X(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,_t.newNoDocument(c,e))}s.St&&(n.set(o,s.Ct()),s.xt())}});let i=ce();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Yt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(i=i.add(s))}),this.Lt.forEach((s,o)=>o.setReadTime(e));const r=new Ul(e,n,this.Ut,this.Lt,i);return this.Lt=Yn(),this.qt=Vg(),this.Ut=new Ze(be),r}Gt(e,n){if(!this.Wt(e))return;const i=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,i),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,i){if(!this.Wt(e))return;const r=this.jt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),i&&(this.Lt=this.Lt.insert(n,i))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new Ug,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Ze(be),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new Ug),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function Vg(){return new tt(X.comparator)}function $g(){return new tt(X.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mD=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),gD=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),yD=(()=>({and:"AND",or:"OR"}))();class _D{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Dc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function w1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function vD(t,e){return Dc(t,e.toTimestamp())}function Sn(t){return Me(!!t),ne.fromTimestamp(function(e){const n=Ti(e);return new Xe(n.seconds,n.nanos)}(t))}function zd(t,e){return function(n){return new Ve(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function T1(t){const e=Ve.fromString(t);return Me(A1(e)),e}function Wh(t,e){return zd(t.databaseId,e.path)}function Ru(t,e){const n=T1(e);if(n.get(1)!==t.databaseId.projectId)throw new Q(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Q(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(I1(n))}function qh(t,e){return zd(t.databaseId,e)}function bD(t){const e=T1(t);return e.length===4?Ve.emptyPath():I1(e)}function Gh(t){return new Ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function I1(t){return Me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Bg(t,e,n){return{name:Wh(t,e),fields:n.value.mapValue.fields}}function ED(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:J()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=function(c,l){return c.useProto3Json?(Me(l===void 0||typeof l=="string"),It.fromBase64String(l||"")):(Me(l===void 0||l instanceof Uint8Array),It.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?A.UNKNOWN:v1(c.code);return new Q(l,c.message||"")}(o);n=new E1(i,r,s,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=Ru(t,i.document.name),s=Sn(i.document.updateTime),o=i.document.createTime?Sn(i.document.createTime):ne.min(),a=new jt({mapValue:{fields:i.document.fields}}),c=_t.newFoundDocument(r,s,o,a),l=i.targetIds||[],u=i.removedTargetIds||[];n=new Ga(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=Ru(t,i.document),s=i.readTime?Sn(i.readTime):ne.min(),o=_t.newNoDocument(r,s),a=i.removedTargetIds||[];n=new Ga([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=Ru(t,i.document),s=i.removedTargetIds||[];n=new Ga([],s,r,null)}else{if(!("filter"in e))return J();{e.filter;const i=e.filter;i.targetId;const r=i.count||0,s=new fD(r),o=i.targetId;n=new b1(o,s)}}return n}function wD(t,e){let n;if(e instanceof Fl)n={update:Bg(t,e.key,e.value)};else if(e instanceof _1)n={delete:Wh(t,e.key)};else if(e instanceof dr)n={update:Bg(t,e.key,e.data),updateMask:xD(e.fieldMask)};else{if(!(e instanceof lD))return J();n={verify:Wh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(r,s){const o=s.transform;if(o instanceof Nc)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof So)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ao)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof xc)return{fieldPath:s.field.canonicalString(),increment:o._t};throw J()}(0,i))),e.precondition.isNone||(n.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:vD(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:J()}(t,e.precondition)),n}function TD(t,e){return t&&t.length>0?(Me(e!==void 0),t.map(n=>function(i,r){let s=i.updateTime?Sn(i.updateTime):Sn(r);return s.isEqual(ne.min())&&(s=Sn(r)),new oD(s,i.transformResults||[])}(n,e))):[]}function ID(t,e){return{documents:[qh(t,e.path)]}}function CD(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=qh(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=qh(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(c){if(c.length!==0)return S1(On.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const s=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:wr(u.field),direction:kD(u.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(c,l){return c.useProto3Json||Nl(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function SD(t){let e=bD(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){Me(i===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=function(u){const h=C1(u);return h instanceof On&&e1(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Qs(Tr(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Nl(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new Rc(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new Rc(f,h)}(n.endAt)),Wx(e,r,o,s,a,"F",c,l)}function AD(t,e){const n=function(i,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return J()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function C1(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Tr(e.unaryFilter.field);return Je.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Tr(e.unaryFilter.field);return Je.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Tr(e.unaryFilter.field);return Je.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Tr(e.unaryFilter.field);return Je.create(s,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(t):t.fieldFilter!==void 0?function(e){return Je.create(Tr(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return On.create(e.compositeFilter.filters.map(n=>C1(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return J()}}(e.compositeFilter.op))}(t):J()}function kD(t){return mD[t]}function RD(t){return gD[t]}function ND(t){return yD[t]}function wr(t){return{fieldPath:t.canonicalString()}}function Tr(t){return bt.fromServerFormat(t.fieldPath)}function S1(t){return t instanceof Je?function(e){if(e.op==="=="){if(Rg(e.value))return{unaryFilter:{field:wr(e.field),op:"IS_NAN"}};if(kg(e.value))return{unaryFilter:{field:wr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Rg(e.value))return{unaryFilter:{field:wr(e.field),op:"IS_NOT_NAN"}};if(kg(e.value))return{unaryFilter:{field:wr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:wr(e.field),op:RD(e.op),value:e.value}}}(t):t instanceof On?function(e){const n=e.getFilters().map(i=>S1(i));return n.length===1?n[0]:{compositeFilter:{op:ND(e.op),filters:n}}}(t):J()}function xD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function A1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,n,i,r,s=ne.min(),o=ne.min(),a=It.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Xi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Xi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Xi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD{constructor(e){this.se=e}}function OD(t){const e=SD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Hh(e,e.limit,"L"):e}/**
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
 */class PD{constructor(){this.He=new MD}addToCollectionParentIndex(e,n){return this.He.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(wi.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(wi.min())}updateCollectionGroup(e,n,i){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class MD{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n]||new Ze(Ve.comparator),s=!r.has(i);return this.index[n]=r.add(i),s}has(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n];return r&&r.has(i)}getEntries(e){return(this.index[e]||new Ze(Ve.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new es(0)}static bn(){return new es(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LD{constructor(){this.changes=new ws(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,_t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?R.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class FD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UD{constructor(e,n,i,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=r}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(i=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(i!==null&&Js(i.mutation,r,an.empty(),Xe.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,ce()).next(()=>i))}getLocalViewOfDocuments(e,n,i=ce()){const r=zi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,i).next(s=>{let o=Fs();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const i=zi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,ce()))}populateOverlays(e,n,i){const r=[];return i.forEach(s=>{n.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(e,r).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,i,r){let s=Yn();const o=Xs(),a=Xs();return n.forEach((c,l)=>{const u=i.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof dr)?s=s.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Js(u.mutation,l,u.mutation.getFieldMask(),Xe.now())):o.set(l.key,an.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new FD(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const i=Xs();let r=new tt((o,a)=>o-a),s=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=i.get(c)||an.empty();u=a.applyToLocalView(l,u),i.set(c,u);const h=(r.get(a.batchId)||ce()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=c1();u.forEach(f=>{if(!s.has(f)){const d=g1(n.get(f),i.get(f));d!==null&&h.set(f,d),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return R.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i){return function(r){return X.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Yx(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i):this.getDocumentsMatchingCollectionQuery(e,n,i)}getNextDocuments(e,n,i,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,r).next(s=>{const o=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,r-s.size):R.resolve(zi());let a=-1,c=s;return o.next(l=>R.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?R.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,c,l,ce())).next(u=>({batchId:a,changes:a1(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(i=>{let r=Fs();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,i){const r=n.collectionGroup;let s=Fs();return this.indexManager.getCollectionParents(e,r).next(o=>R.forEach(o,a=>{const c=function(l,u){return new xl(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,i).next(l=>{l.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(s=>(r=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,r))).next(s=>{r.forEach((a,c)=>{const l=c.getKey();s.get(l)===null&&(s=s.insert(l,_t.newInvalidDocument(l)))});let o=Fs();return s.forEach((a,c)=>{const l=r.get(a);l!==void 0&&Js(l.mutation,c,an.empty(),Xe.now()),Pl(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VD{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return R.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var i;return this.Zn.set(n.id,{id:(i=n).id,version:i.version,createTime:Sn(i.createTime)}),R.resolve()}getNamedQuery(e,n){return R.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(i){return{name:i.name,query:OD(i.bundledQuery),readTime:Sn(i.readTime)}}(n)),R.resolve()}}/**
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
 */class $D{constructor(){this.overlays=new tt(X.comparator),this.ts=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const i=zi();return R.forEach(n,r=>this.getOverlay(e,r).next(s=>{s!==null&&i.set(r,s)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((r,s)=>{this.re(e,n,s)}),R.resolve()}removeOverlaysForBatchId(e,n,i){const r=this.ts.get(i);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.ts.delete(i)),R.resolve()}getOverlaysForCollection(e,n,i){const r=zi(),s=n.length+1,o=new X(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&c.largestBatchId>i&&r.set(c.getKey(),c)}return R.resolve(r)}getOverlaysForCollectionGroup(e,n,i,r){let s=new tt((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>i){let u=s.get(l.largestBatchId);u===null&&(u=zi(),s=s.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=zi(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return R.resolve(a)}re(e,n,i){const r=this.overlays.get(i.key);if(r!==null){const o=this.ts.get(r.largestBatchId).delete(i.key);this.ts.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new hD(n,i));let s=this.ts.get(n);s===void 0&&(s=ce(),this.ts.set(n,s)),this.ts.set(n,s.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(){this.es=new Ze(st.ns),this.ss=new Ze(st.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const i=new st(e,n);this.es=this.es.add(i),this.ss=this.ss.add(i)}os(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.us(new st(e,n))}cs(e,n){e.forEach(i=>this.removeReference(i,n))}hs(e){const n=new X(new Ve([])),i=new st(n,e),r=new st(n,e+1),s=[];return this.ss.forEachInRange([i,r],o=>{this.us(o),s.push(o.key)}),s}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new X(new Ve([])),i=new st(n,e),r=new st(n,e+1);let s=ce();return this.ss.forEachInRange([i,r],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new st(e,0),i=this.es.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class st{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return X.comparator(e.key,n.key)||be(e.ds,n.ds)}static rs(e,n){return be(e.ds,n.ds)||X.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new Ze(st.ns)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,r){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new uD(s,n,i,r);this.mutationQueue.push(o);for(const a of r)this._s=this._s.add(new st(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,r=this.ys(i),s=r<0?0:r;return R.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new st(n,0),r=new st(n,Number.POSITIVE_INFINITY),s=[];return this._s.forEachInRange([i,r],o=>{const a=this.gs(o.ds);s.push(a)}),R.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new Ze(be);return n.forEach(r=>{const s=new st(r,0),o=new st(r,Number.POSITIVE_INFINITY);this._s.forEachInRange([s,o],a=>{i=i.add(a.ds)})}),R.resolve(this.ps(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,r=i.length+1;let s=i;X.isDocumentKey(s)||(s=s.child(""));const o=new st(new X(s),0);let a=new Ze(be);return this._s.forEachWhile(c=>{const l=c.key.path;return!!i.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.ds)),!0)},o),R.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(i=>{const r=this.gs(i);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Me(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this._s;return R.forEach(n.mutations,r=>{const s=new st(r.key,n.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this._s=i})}En(e){}containsKey(e,n){const i=new st(n,0),r=this._s.firstAfterOrEqual(i);return R.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jD{constructor(e){this.Ts=e,this.docs=new tt(X.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,r=this.docs.get(i),s=r?r.size:0,o=this.Ts(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return R.resolve(i?i.document.mutableCopy():_t.newInvalidDocument(n))}getEntries(e,n){let i=Yn();return n.forEach(r=>{const s=this.docs.get(r);i=i.insert(r,s?s.document.mutableCopy():_t.newInvalidDocument(r))}),R.resolve(i)}getDocumentsMatchingQuery(e,n,i,r){let s=Yn();const o=n.path,a=new X(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||kx(Ax(u),i)<=0||(r.has(u.key)||Pl(n,u))&&(s=s.insert(u.key,u.mutableCopy()))}return R.resolve(s)}getAllFromCollectionGroup(e,n,i,r){J()}Es(e,n){return R.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new zD(this)}getSize(e){return R.resolve(this.size)}}class zD extends LD{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((i,r)=>{r.isValidDocument()?n.push(this.Jn.addEntry(e,r)):this.Jn.removeEntry(i)}),R.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{constructor(e){this.persistence=e,this.As=new ws(n=>Vd(n),$d),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Hd,this.targetCount=0,this.bs=es.vn()}forEachTarget(e,n){return this.As.forEach((i,r)=>n(r)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Rs&&(this.Rs=n),R.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new es(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.Sn(n),R.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,i){let r=0;const s=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.As.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),R.waitFor(s).next(()=>r)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const i=this.As.get(n)||null;return R.resolve(i)}addMatchingKeys(e,n,i){return this.vs.os(n,i),R.resolve()}removeMatchingKeys(e,n,i){this.vs.cs(n,i);const r=this.persistence.referenceDelegate,s=[];return r&&n.forEach(o=>{s.push(r.markPotentiallyOrphaned(e,o))}),R.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),R.resolve()}getMatchingKeysForTargetId(e,n){const i=this.vs.fs(n);return R.resolve(i)}containsKey(e,n){return R.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new Fd(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new HD(this),this.indexManager=new PD,this.remoteDocumentCache=function(i){return new jD(i)}(i=>this.referenceDelegate.Cs(i)),this.serializer=new DD(n),this.xs=new VD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new $D,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.Ps[e.toKey()];return i||(i=new BD(n,this.referenceDelegate),this.Ps[e.toKey()]=i),i}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,i){H("MemoryPersistence","Starting transaction:",e);const r=new WD(this.Vs.next());return this.referenceDelegate.Ns(),i(r).next(s=>this.referenceDelegate.ks(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Os(e,n){return R.or(Object.values(this.Ps).map(i=>()=>i.containsKey(e,n)))}}class WD extends Nx{constructor(e){super(),this.currentSequenceNumber=e}}class Kd{constructor(e){this.persistence=e,this.$s=new Hd,this.Ms=null}static Fs(e){return new Kd(e)}get Bs(){if(this.Ms)return this.Ms;throw J()}addReference(e,n,i){return this.$s.addReference(i,n),this.Bs.delete(i.toString()),R.resolve()}removeReference(e,n,i){return this.$s.removeReference(i,n),this.Bs.add(i.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),R.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(r=>this.Bs.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(s=>this.Bs.add(s.toString()))}).next(()=>i.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Bs,i=>{const r=X.fromPath(i);return this.Ls(e,r).next(s=>{s||n.removeEntry(r,ne.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(i=>{i?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return R.or([()=>R.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e,n,i,r){this.targetId=e,this.fromCache=n,this.Vi=i,this.Si=r}static Di(e,n){let i=ce(),r=ce();for(const s of n.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Wd(e,n.fromCache,i,r)}}/**
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
 */class qD{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,i,r){return this.Ni(e,n).next(s=>s||this.ki(e,n,r,i)).next(s=>s||this.Oi(e,n))}Ni(e,n){if(Og(n))return R.resolve(null);let i=Gn(n);return this.indexManager.getIndexType(e,i).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Hh(n,null,"F"),i=Gn(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(s=>{const o=ce(...s);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(c=>{const l=this.$i(n,a);return this.Mi(n,l,o,c.readTime)?this.Ni(e,Hh(n,null,"F")):this.Fi(e,l,n,c)}))})))}ki(e,n,i,r){return Og(n)||r.isEqual(ne.min())?this.Oi(e,n):this.xi.getDocuments(e,i).next(s=>{const o=this.$i(n,s);return this.Mi(n,o,i,r)?this.Oi(e,n):(Ig()<=me.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Kh(n)),this.Fi(e,o,n,Sx(r,-1)))})}$i(e,n){let i=new Ze(s1(e));return n.forEach((r,s)=>{Pl(e,s)&&(i=i.add(s))}),i}Mi(e,n,i,r){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Oi(e,n){return Ig()<=me.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Kh(n)),this.xi.getDocumentsMatchingQuery(e,n,wi.min())}Fi(e,n,i,r){return this.xi.getDocumentsMatchingQuery(e,i,r).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GD{constructor(e,n,i,r){this.persistence=e,this.Bi=n,this.serializer=r,this.Li=new tt(be),this.qi=new ws(s=>Vd(s),$d),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(i)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new UD(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function YD(t,e,n,i){return new GD(t,e,n,i)}async function k1(t,e){const n=ie(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let r;return n.mutationQueue.getAllMutationBatches(i).next(s=>(r=s,n.Gi(e),n.mutationQueue.getAllMutationBatches(i))).next(s=>{const o=[],a=[];let c=ce();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of s){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(i,c).next(l=>({Qi:l,removedBatchIds:o,addedBatchIds:a}))})})}function QD(t,e){const n=ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const r=e.batch.keys(),s=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=R.resolve();return h.forEach(d=>{f=f.next(()=>l.getEntry(a,d)).next(m=>{const y=c.docVersions.get(d);Me(y!==null),m.version.compareTo(y)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,i,e,s).next(()=>s.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(o){let a=ce();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(i,r))})}function R1(t){const e=ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function XD(t,e){const n=ie(t),i=e.snapshotVersion;let r=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});r=n.Li;const a=[];e.targetChanges.forEach((u,h)=>{const f=r.get(h);if(!f)return;a.push(n.Ds.removeMatchingKeys(s,u.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(s,u.addedDocuments,h)));let d=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?d=d.withResumeToken(It.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,i)),r=r.insert(h,d),function(m,y,b){return m.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(f,d,u)&&a.push(n.Ds.updateTargetData(s,d))});let c=Yn(),l=ce();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(JD(s,o,e.documentUpdates).next(u=>{c=u.zi,l=u.ji})),!i.isEqual(ne.min())){const u=n.Ds.getLastRemoteSnapshotVersion(s).next(h=>n.Ds.setTargetsMetadata(s,s.currentSequenceNumber,i));a.push(u)}return R.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,l)).next(()=>c)}).then(s=>(n.Li=r,s))}function JD(t,e,n){let i=ce(),r=ce();return n.forEach(s=>i=i.add(s)),e.getEntries(t,i).next(s=>{let o=Yn();return n.forEach((a,c)=>{const l=s.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(ne.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):H("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{zi:o,ji:r}})}function ZD(t,e){const n=ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function eO(t,e){const n=ie(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let r;return n.Ds.getTargetData(i,e).next(s=>s?(r=s,R.resolve(r)):n.Ds.allocateTargetId(i).next(o=>(r=new Xi(e,o,0,i.currentSequenceNumber),n.Ds.addTargetData(i,r).next(()=>r))))}).then(i=>{const r=n.Li.get(i.targetId);return(r===null||i.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Li=n.Li.insert(i.targetId,i),n.qi.set(e,i.targetId)),i})}async function Yh(t,e,n){const i=ie(t),r=i.Li.get(e),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,o=>i.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Zo(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.Li=i.Li.remove(e),i.qi.delete(r.target)}function jg(t,e,n){const i=ie(t);let r=ne.min(),s=ce();return i.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=ie(a),h=u.qi.get(l);return h!==void 0?R.resolve(u.Li.get(h)):u.Ds.getTargetData(c,l)}(i,o,Gn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,i.Ds.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>i.Bi.getDocumentsMatchingQuery(o,e,n?r:ne.min(),n?s:ce())).next(a=>(tO(i,Qx(e),a),{documents:a,Wi:s})))}function tO(t,e,n){let i=t.Ui.get(e)||ne.min();n.forEach((r,s)=>{s.readTime.compareTo(i)>0&&(i=s.readTime)}),t.Ui.set(e,i)}class zg{constructor(){this.activeTargetIds=l1()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nO{constructor(){this.Br=new zg,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,i){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new zg,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class iO{qr(e){}shutdown(){}}/**
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
 */class Hg{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ka=null;function Nu(){return ka===null?ka=268435456+Math.round(2147483648*Math.random()):ka++,"0x"+ka.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection";class oO extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,i,r,s){const o=Nu(),a=this.ao(e,n);H("RestConnection",`Sending RPC '${e}' ${o}:`,a,i);const c={};return this.ho(c,r,s),this.lo(e,a,c,i).then(l=>(H("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw Ac("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",i),l})}fo(e,n,i,r,s,o){return this.co(e,n,i,r,s)}ho(e,n,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+Es,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,s)=>e[s]=r),i&&i.headers.forEach((r,s)=>e[s]=r)}ao(e,n){const i=rO[e];return`${this.ro}/v1/${n}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,i,r){const s=Nu();return new Promise((o,a)=>{const c=new gx;c.setWithCredentials(!0),c.listenOnce(dx.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ku.NO_ERROR:const u=c.getResponseJson();H(pt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(u)),o(u);break;case ku.TIMEOUT:H(pt,`RPC '${e}' ${s} timed out`),a(new Q(A.DEADLINE_EXCEEDED,"Request time out"));break;case ku.HTTP_ERROR:const h=c.getStatus();if(H(pt,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const m=function(y){const b=y.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(b)>=0?b:A.UNKNOWN}(d.status);a(new Q(m,d.message))}else a(new Q(A.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new Q(A.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{H(pt,`RPC '${e}' ${s} completed.`)}});const l=JSON.stringify(r);H(pt,`RPC '${e}' ${s} sending request:`,r),c.send(n,"POST",l,i,15)})}wo(e,n,i){const r=Nu(),s=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=hx(),a=fx(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new mx({})),this.ho(c.initMessageHeaders,n,i),c.encodeInitMessageHeaders=!0;const l=s.join("");H(pt,`Creating RPC '${e}' stream ${r}: ${l}`,c);const u=o.createWebChannel(l,c);let h=!1,f=!1;const d=new sO({Wr:y=>{f?H(pt,`Not sending because RPC '${e}' stream ${r} is closed:`,y):(h||(H(pt,`Opening RPC '${e}' stream ${r} transport.`),u.open(),h=!0),H(pt,`RPC '${e}' stream ${r} sending:`,y),u.send(y))},Hr:()=>u.close()}),m=(y,b,_)=>{y.listen(b,v=>{try{_(v)}catch(E){setTimeout(()=>{throw E},0)}})};return m(u,Ia.EventType.OPEN,()=>{f||H(pt,`RPC '${e}' stream ${r} transport opened.`)}),m(u,Ia.EventType.CLOSE,()=>{f||(f=!0,H(pt,`RPC '${e}' stream ${r} transport closed`),d.so())}),m(u,Ia.EventType.ERROR,y=>{f||(f=!0,Ac(pt,`RPC '${e}' stream ${r} transport errored:`,y),d.so(new Q(A.UNAVAILABLE,"The operation could not be completed")))}),m(u,Ia.EventType.MESSAGE,y=>{var b;if(!f){const _=y.data[0];Me(!!_);const v=_,E=v.error||((b=v[0])===null||b===void 0?void 0:b.error);if(E){H(pt,`RPC '${e}' stream ${r} received error:`,E);const S=E.status;let P=function($){const K=Ye[$];if(K!==void 0)return v1(K)}(S),q=E.message;P===void 0&&(P=A.INTERNAL,q="Unknown error status: "+S+" with message "+E.message),f=!0,d.so(new Q(P,q)),u.close()}else H(pt,`RPC '${e}' stream ${r} received:`,_),d.io(_)}}),m(a,px.STAT_EVENT,y=>{y.stat===wg.PROXY?H(pt,`RPC '${e}' stream ${r} detected buffering proxy`):y.stat===wg.NOPROXY&&H(pt,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{d.no()},0),d}}function xu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(t){return new _D(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(e,n,i=1e3,r=1.5,s=6e4){this.Ws=e,this.timerId=n,this._o=i,this.mo=r,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),i=Math.max(0,Date.now()-this.To),r=Math.max(0,n-i);r>0&&H("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,r,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(e,n,i,r,s,o,a,c){this.Ws=e,this.bo=i,this.Po=r,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new N1(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(qn(n.toString()),qn("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,r])=>{this.Vo===n&&this.Ko(i,r)},i=>{e(()=>{const r=new Q(A.UNKNOWN,"Fetching auth token failed: "+i.message);return this.Go(r)})})}Ko(e,n){const i=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{i(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(r=>{i(()=>this.Go(r))}),this.stream.onMessage(r=>{i(()=>this.onMessage(r))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class aO extends x1{constructor(e,n,i,r,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,r,o),this.serializer=s}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=ED(this.serializer,e),i=function(r){if(!("targetChange"in r))return ne.min();const s=r.targetChange;return s.targetIds&&s.targetIds.length?ne.min():s.readTime?Sn(s.readTime):ne.min()}(e);return this.listener.zo(n,i)}jo(e){const n={};n.database=Gh(this.serializer),n.addTarget=function(r,s){let o;const a=s.target;return o=zh(a)?{documents:ID(r,a)}:{query:CD(r,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=w1(r,s.resumeToken):s.snapshotVersion.compareTo(ne.min())>0&&(o.readTime=Dc(r,s.snapshotVersion.toTimestamp())),o}(this.serializer,e);const i=AD(this.serializer,e);i&&(n.labels=i),this.Fo(n)}Wo(e){const n={};n.database=Gh(this.serializer),n.removeTarget=e,this.Fo(n)}}class cO extends x1{constructor(e,n,i,r,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,r,o),this.serializer=s,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=TD(e.writeResults,e.commitTime),i=Sn(e.commitTime);return this.listener.Zo(i,n)}return Me(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=Gh(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>wD(this.serializer,i))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lO extends class{}{constructor(e,n,i,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=r,this.eu=!1}nu(){if(this.eu)throw new Q(A.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.connection.co(e,n,i,r,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new Q(A.UNKNOWN,r.toString())})}fo(e,n,i,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.fo(e,n,i,s,o,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Q(A.UNKNOWN,s.toString())})}terminate(){this.eu=!0}}class uO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(qn(n),this.ru=!1):H("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hO{constructor(e,n,i,r,s){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=s,this._u.qr(o=>{i.enqueueAndForget(async()=>{pr(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=ie(a);c.du.add(4),await ta(c),c.mu.set("Unknown"),c.du.delete(4),await $l(c)}(this))})}),this.mu=new uO(i,r)}}async function $l(t){if(pr(t))for(const e of t.wu)await e(!0)}async function ta(t){for(const e of t.wu)await e(!1)}function D1(t,e){const n=ie(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),Yd(n)?Gd(n):Ts(n).No()&&qd(n,e))}function O1(t,e){const n=ie(t),i=Ts(n);n.fu.delete(e),i.No()&&P1(n,e),n.fu.size===0&&(i.No()?i.$o():pr(n)&&n.mu.set("Unknown"))}function qd(t,e){t.gu.Ot(e.targetId),Ts(t).jo(e)}function P1(t,e){t.gu.Ot(e),Ts(t).Wo(e)}function Gd(t){t.gu=new pD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),Ts(t).start(),t.mu.ou()}function Yd(t){return pr(t)&&!Ts(t).xo()&&t.fu.size>0}function pr(t){return ie(t).du.size===0}function M1(t){t.gu=void 0}async function fO(t){t.fu.forEach((e,n)=>{qd(t,e)})}async function dO(t,e){M1(t),Yd(t)?(t.mu.au(e),Gd(t)):t.mu.set("Unknown")}async function pO(t,e,n){if(t.mu.set("Online"),e instanceof E1&&e.state===2&&e.cause)try{await async function(i,r){const s=r.cause;for(const o of r.targetIds)i.fu.has(o)&&(await i.remoteSyncer.rejectListen(o,s),i.fu.delete(o),i.gu.removeTarget(o))}(t,e)}catch(i){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Oc(t,i)}else if(e instanceof Ga?t.gu.Kt(e):e instanceof b1?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(ne.min()))try{const i=await R1(t.localStore);n.compareTo(i)>=0&&await function(r,s){const o=r.gu.Xt(s);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.fu.get(c);l&&r.fu.set(c,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const c=r.fu.get(a);if(!c)return;r.fu.set(a,c.withResumeToken(It.EMPTY_BYTE_STRING,c.snapshotVersion)),P1(r,a);const l=new Xi(c.target,a,1,c.sequenceNumber);qd(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(i){H("RemoteStore","Failed to raise snapshot:",i),await Oc(t,i)}}async function Oc(t,e,n){if(!Zo(e))throw e;t.du.add(1),await ta(t),t.mu.set("Offline"),n||(n=()=>R1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await $l(t)})}function L1(t,e){return e().catch(n=>Oc(t,n,e))}async function Bl(t){const e=ie(t),n=Ii(e);let i=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;mO(e);)try{const r=await ZD(e.localStore,i);if(r===null){e.lu.length===0&&n.$o();break}i=r.batchId,gO(e,r)}catch(r){await Oc(e,r)}F1(e)&&U1(e)}function mO(t){return pr(t)&&t.lu.length<10}function gO(t,e){t.lu.push(e);const n=Ii(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function F1(t){return pr(t)&&!Ii(t).xo()&&t.lu.length>0}function U1(t){Ii(t).start()}async function yO(t){Ii(t).tu()}async function _O(t){const e=Ii(t);for(const n of t.lu)e.Yo(n.mutations)}async function vO(t,e,n){const i=t.lu.shift(),r=Bd.from(i,e,n);await L1(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Bl(t)}async function bO(t,e){e&&Ii(t).Jo&&await async function(n,i){if(r=i.code,dD(r)&&r!==A.ABORTED){const s=n.lu.shift();Ii(n).Oo(),await L1(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Bl(n)}var r}(t,e),F1(t)&&U1(t)}async function Kg(t,e){const n=ie(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const i=pr(n);n.du.add(3),await ta(n),i&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await $l(n)}async function EO(t,e){const n=ie(t);e?(n.du.delete(2),await $l(n)):e||(n.du.add(2),await ta(n),n.mu.set("Unknown"))}function Ts(t){return t.yu||(t.yu=function(e,n,i){const r=ie(e);return r.nu(),new aO(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{Jr:fO.bind(null,t),Zr:dO.bind(null,t),zo:pO.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),Yd(t)?Gd(t):t.mu.set("Unknown")):(await t.yu.stop(),M1(t))})),t.yu}function Ii(t){return t.pu||(t.pu=function(e,n,i){const r=ie(e);return r.nu(),new cO(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{Jr:yO.bind(null,t),Zr:bO.bind(null,t),Xo:_O.bind(null,t),Zo:vO.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await Bl(t)):(await t.pu.stop(),t.lu.length>0&&(H("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e,n,i,r,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,r,s){const o=Date.now()+i,a=new Qd(e,n,o,r,s);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xd(t,e){if(qn("AsyncQueue",`${e}: ${t}`),Zo(t))return new Q(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e){this.comparator=e?(n,i)=>e(n,i)||X.comparator(n.key,i.key):(n,i)=>X.comparator(n.key,i.key),this.keyedMap=Fs(),this.sortedSet=new tt(this.comparator)}static emptySet(e){return new Vr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Vr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new Vr;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(){this.Iu=new tt(X.comparator)}track(e){const n=e.doc.key,i=this.Iu.get(n);i?e.type!==0&&i.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&i.type!==1?this.Iu=this.Iu.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Iu=this.Iu.remove(n):e.type===1&&i.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):J():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,i)=>{e.push(i)}),e}}class ts{constructor(e,n,i,r,s,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,i,r,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ts(e,n,Vr.emptySet(n),o,i,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ol(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==i[r].type||!n[r].doc.isEqual(i[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wO{constructor(){this.Eu=void 0,this.listeners=[]}}class TO{constructor(){this.queries=new ws(e=>r1(e),Ol),this.onlineState="Unknown",this.Au=new Set}}async function Jd(t,e){const n=ie(t),i=e.query;let r=!1,s=n.queries.get(i);if(s||(r=!0,s=new wO),r)try{s.Eu=await n.onListen(i)}catch(o){const a=Xd(o,`Initialization of query '${Kh(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.listeners.push(e),e.Ru(n.onlineState),s.Eu&&e.vu(s.Eu)&&ep(n)}async function Zd(t,e){const n=ie(t),i=e.query;let r=!1;const s=n.queries.get(i);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),r=s.listeners.length===0)}if(r)return n.queries.delete(i),n.onUnlisten(i)}function IO(t,e){const n=ie(t);let i=!1;for(const r of e){const s=r.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.vu(r)&&(i=!0);o.Eu=r}}i&&ep(n)}function CO(t,e,n){const i=ie(t),r=i.queries.get(e);if(r)for(const s of r.listeners)s.onError(n);i.queries.delete(e)}function ep(t){t.Au.forEach(e=>{e.next()})}class tp{constructor(e,n,i){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=i||{}}vu(e){if(!this.options.includeMetadataChanges){const i=[];for(const r of e.docChanges)r.type!==3&&i.push(r);e=new ts(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.xu||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=ts.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(e){this.key=e}}class $1{constructor(e){this.key=e}}class SO{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=ce(),this.mutatedKeys=ce(),this.Ku=s1(e),this.Gu=new Vr(this.Ku)}get Qu(){return this.Lu}zu(e,n){const i=n?n.ju:new Wg,r=n?n.Gu:this.Gu;let s=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const f=r.get(u),d=Pl(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),y=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let b=!1;f&&d?f.data.isEqual(d.data)?m!==y&&(i.track({type:3,doc:d}),b=!0):this.Wu(f,d)||(i.track({type:2,doc:d}),b=!0,(c&&this.Ku(d,c)>0||l&&this.Ku(d,l)<0)&&(a=!0)):!f&&d?(i.track({type:0,doc:d}),b=!0):f&&!d&&(i.track({type:1,doc:f}),b=!0,(c||l)&&(a=!0)),b&&(d?(o=o.add(d),s=y?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),i.track({type:1,doc:u})}return{Gu:o,ju:i,Mi:a,mutatedKeys:s}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const r=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const s=e.ju.Tu();s.sort((l,u)=>function(h,f){const d=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return d(h)-d(f)}(l.type,u.type)||this.Ku(l.doc,u.doc)),this.Hu(i);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,s.length!==0||c?{snapshot:new ts(this.query,e.Gu,r,s,e.mutatedKeys,a===0,c,!1,!!i&&i.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Wg,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=ce(),this.Gu.forEach(i=>{this.Zu(i.key)&&(this.Uu=this.Uu.add(i.key))});const n=[];return e.forEach(i=>{this.Uu.has(i)||n.push(new $1(i))}),this.Uu.forEach(i=>{e.has(i)||n.push(new V1(i))}),n}Xu(e){this.Lu=e.Wi,this.Uu=ce();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return ts.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class AO{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class kO{constructor(e){this.key=e,this.ec=!1}}class RO{constructor(e,n,i,r,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new ws(a=>r1(a),Ol),this.ic=new Map,this.rc=new Set,this.oc=new tt(X.comparator),this.uc=new Map,this.cc=new Hd,this.ac={},this.hc=new Map,this.lc=es.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function NO(t,e){const n=$O(t);let i,r;const s=n.sc.get(e);if(s)i=s.targetId,n.sharedClientState.addLocalQueryTarget(i),r=s.view.tc();else{const o=await eO(n.localStore,Gn(e));n.isPrimaryClient&&D1(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,r=await xO(n,e,i,a==="current",o.resumeToken)}return r}async function xO(t,e,n,i,r){t.dc=(h,f,d)=>async function(m,y,b,_){let v=y.view.zu(b);v.Mi&&(v=await jg(m.localStore,y.query,!1).then(({documents:P})=>y.view.zu(P,v)));const E=_&&_.targetChanges.get(y.targetId),S=y.view.applyChanges(v,m.isPrimaryClient,E);return Gg(m,y.targetId,S.Yu),S.snapshot}(t,h,f,d);const s=await jg(t.localStore,e,!0),o=new SO(e,s.Wi),a=o.zu(s.documents),c=ea.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);Gg(t,n,l.Yu);const u=new AO(e,n,o);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),l.snapshot}async function DO(t,e){const n=ie(t),i=n.sc.get(e),r=n.ic.get(i.targetId);if(r.length>1)return n.ic.set(i.targetId,r.filter(s=>!Ol(s,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Yh(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),O1(n.remoteStore,i.targetId),Qh(n,i.targetId)}).catch(Jo)):(Qh(n,i.targetId),await Yh(n.localStore,i.targetId,!0))}async function OO(t,e,n){const i=BO(t);try{const r=await function(s,o){const a=ie(s),c=Xe.now(),l=o.reduce((f,d)=>f.add(d.key),ce());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=Yn(),m=ce();return a.Ki.getEntries(f,l).next(y=>{d=y,d.forEach((b,_)=>{_.isValidDocument()||(m=m.add(b))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(y=>{u=y;const b=[];for(const _ of o){const v=cD(_,u.get(_.key).overlayedDocument);v!=null&&b.push(new dr(_.key,v,Xb(v.value.mapValue),Hn.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,b,o)}).next(y=>{h=y;const b=y.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(f,y.batchId,b)})}).then(()=>({batchId:h.batchId,changes:a1(u)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(r.batchId),function(s,o,a){let c=s.ac[s.currentUser.toKey()];c||(c=new tt(be)),c=c.insert(o,a),s.ac[s.currentUser.toKey()]=c}(i,r.batchId,n),await na(i,r.changes),await Bl(i.remoteStore)}catch(r){const s=Xd(r,"Failed to persist write");n.reject(s)}}async function B1(t,e){const n=ie(t);try{const i=await XD(n.localStore,e);e.targetChanges.forEach((r,s)=>{const o=n.uc.get(s);o&&(Me(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ec=!0:r.modifiedDocuments.size>0?Me(o.ec):r.removedDocuments.size>0&&(Me(o.ec),o.ec=!1))}),await na(n,i,e)}catch(i){await Jo(i)}}function qg(t,e,n){const i=ie(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const r=[];i.sc.forEach((s,o)=>{const a=o.view.Ru(e);a.snapshot&&r.push(a.snapshot)}),function(s,o){const a=ie(s);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Ru(o)&&(c=!0)}),c&&ep(a)}(i.eventManager,e),r.length&&i.nc.zo(r),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function PO(t,e,n){const i=ie(t);i.sharedClientState.updateQueryState(e,"rejected",n);const r=i.uc.get(e),s=r&&r.key;if(s){let o=new tt(X.comparator);o=o.insert(s,_t.newNoDocument(s,ne.min()));const a=ce().add(s),c=new Ul(ne.min(),new Map,new Ze(be),o,a);await B1(i,c),i.oc=i.oc.remove(s),i.uc.delete(e),np(i)}else await Yh(i.localStore,e,!1).then(()=>Qh(i,e,n)).catch(Jo)}async function MO(t,e){const n=ie(t),i=e.batch.batchId;try{const r=await QD(n.localStore,e);z1(n,i,null),j1(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await na(n,r)}catch(r){await Jo(r)}}async function LO(t,e,n){const i=ie(t);try{const r=await function(s,o){const a=ie(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(Me(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(i.localStore,e);z1(i,e,n),j1(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await na(i,r)}catch(r){await Jo(r)}}function j1(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function z1(t,e,n){const i=ie(t);let r=i.ac[i.currentUser.toKey()];if(r){const s=r.get(e);s&&(n?s.reject(n):s.resolve(),r=r.remove(e)),i.ac[i.currentUser.toKey()]=r}}function Qh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.ic.get(e))t.sc.delete(i),n&&t.nc.wc(i,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(i=>{t.cc.containsKey(i)||H1(t,i)})}function H1(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(O1(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),np(t))}function Gg(t,e,n){for(const i of n)i instanceof V1?(t.cc.addReference(i.key,e),FO(t,i)):i instanceof $1?(H("SyncEngine","Document no longer in limbo: "+i.key),t.cc.removeReference(i.key,e),t.cc.containsKey(i.key)||H1(t,i.key)):J()}function FO(t,e){const n=e.key,i=n.path.canonicalString();t.oc.get(n)||t.rc.has(i)||(H("SyncEngine","New document in limbo: "+n),t.rc.add(i),np(t))}function np(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new X(Ve.fromString(e)),i=t.lc.next();t.uc.set(i,new kO(n)),t.oc=t.oc.insert(n,i),D1(t.remoteStore,new Xi(Gn(Dl(n.path)),i,2,Fd.ct))}}async function na(t,e,n){const i=ie(t),r=[],s=[],o=[];i.sc.isEmpty()||(i.sc.forEach((a,c)=>{o.push(i.dc(c,e,n).then(l=>{if((l||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=Wd.Di(c.targetId,l);s.push(u)}}))}),await Promise.all(o),i.nc.zo(r),await async function(a,c){const l=ie(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>R.forEach(c,h=>R.forEach(h.Vi,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>R.forEach(h.Si,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!Zo(u))throw u;H("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.Li.get(h),d=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(d);l.Li=l.Li.insert(h,m)}}}(i.localStore,s))}async function UO(t,e){const n=ie(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const i=await k1(n.localStore,e);n.currentUser=e,function(r,s){r.hc.forEach(o=>{o.forEach(a=>{a.reject(new Q(A.CANCELLED,s))})}),r.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await na(n,i.Qi)}}function VO(t,e){const n=ie(t),i=n.uc.get(e);if(i&&i.ec)return ce().add(i.key);{let r=ce();const s=n.ic.get(e);if(!s)return r;for(const o of s){const a=n.sc.get(o);r=r.unionWith(a.view.Qu)}return r}}function $O(t){const e=ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=B1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=VO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=PO.bind(null,e),e.nc.zo=IO.bind(null,e.eventManager),e.nc.wc=CO.bind(null,e.eventManager),e}function BO(t){const e=ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=MO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=LO.bind(null,e),e}class Yg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Vl(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return YD(this.persistence,new qD,e.initialUser,this.serializer)}createPersistence(e){return new KD(Kd.Fs,this.serializer)}createSharedClientState(e){return new nO}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class jO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>qg(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=UO.bind(null,this.syncEngine),await EO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new TO}createDatastore(e){const n=Vl(e.databaseInfo.databaseId),i=(r=e.databaseInfo,new oO(r));var r;return function(s,o,a,c){return new lO(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return n=this.localStore,i=this.datastore,r=e.asyncQueue,s=a=>qg(this.syncEngine,a,0),o=Hg.D()?new Hg:new iO,new hO(n,i,r,s,o);var n,i,r,s,o}createSyncEngine(e,n){return function(i,r,s,o,a,c,l){const u=new RO(i,r,s,o,a,c);return l&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ie(e);H("RemoteStore","RemoteStore shutting down."),n.du.add(5),await ta(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ip{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):qn("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(e,n,i,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=r,this.user=mt.UNAUTHENTICATED,this.clientId=qb.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async s=>{H("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(i,s=>(H("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Q(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=Xd(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Du(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async r=>{i.isEqual(r)||(await k1(e.localStore,r),i=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Qg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await KO(t);H("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(r=>Kg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Kg(e.remoteStore,s)),t._onlineComponents=e}function HO(t){return t.name==="FirebaseError"?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function KO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await Du(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!HO(n))throw n;Ac("Error using user provided cache. Falling back to memory cache: "+n),await Du(t,new Yg)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await Du(t,new Yg);return t._offlineComponents}async function K1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await Qg(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await Qg(t,new jO))),t._onlineComponents}function WO(t){return K1(t).then(e=>e.syncEngine)}async function Pc(t){const e=await K1(t),n=e.eventManager;return n.onListen=NO.bind(null,e.syncEngine),n.onUnlisten=DO.bind(null,e.syncEngine),n}function qO(t,e,n={}){const i=new zn;return t.asyncQueue.enqueueAndForget(async()=>function(r,s,o,a,c){const l=new ip({next:h=>{s.enqueueAndForget(()=>Zd(r,u));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new Q(A.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new Q(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new tp(Dl(o.path),l,{includeMetadataChanges:!0,xu:!0});return Jd(r,u)}(await Pc(t),t.asyncQueue,e,n,i)),i.promise}function GO(t,e,n={}){const i=new zn;return t.asyncQueue.enqueueAndForget(async()=>function(r,s,o,a,c){const l=new ip({next:h=>{s.enqueueAndForget(()=>Zd(r,u)),h.fromCache&&a.source==="server"?c.reject(new Q(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new tp(o,l,{includeMetadataChanges:!0,xu:!0});return Jd(r,u)}(await Pc(t),t.asyncQueue,e,n,i)),i.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W1(t,e,n){if(!n)throw new Q(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function YO(t,e,n,i){if(e===!0&&i===!0)throw new Q(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Jg(t){if(!X.isDocumentKey(t))throw new Q(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Zg(t){if(X.isDocumentKey(t))throw new Q(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function rp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function An(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Q(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=rp(t);throw new Q(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new Q(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Q(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,YO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,n,i,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ey({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Q(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Q(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ey(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new yx;switch(n.type){case"firstParty":return new Ex(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Q(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Xg.get(e);n&&(H("ComponentProvider","Removing Datastore"),Xg.delete(e),n.terminate())}(this),Promise.resolve()}}function QO(t,e,n,i={}){var r;const s=(t=An(t,jl))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Ac("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let o,a;if(typeof i.mockUserToken=="string")o=i.mockUserToken,a=mt.MOCK_USER;else{o=HI(i.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new Q(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new mt(c)}t._authCredentials=new _x(new Wb(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _i(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Lt(this.firestore,e,this._key)}}class ia{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new ia(this.firestore,e,this._query)}}class _i extends ia{constructor(e,n,i){super(e,n,Dl(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Lt(this.firestore,null,new X(e))}withConverter(e){return new _i(this.firestore,e,this._path)}}function ns(t,e,...n){if(t=Ut(t),W1("collection","path",e),t instanceof jl){const i=Ve.fromString(e,...n);return Zg(i),new _i(t,null,i)}{if(!(t instanceof Lt||t instanceof _i))throw new Q(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Ve.fromString(e,...n));return Zg(i),new _i(t.firestore,null,i)}}function nn(t,e,...n){if(t=Ut(t),arguments.length===1&&(e=qb.A()),W1("doc","path",e),t instanceof jl){const i=Ve.fromString(e,...n);return Jg(i),new Lt(t,null,new X(i))}{if(!(t instanceof Lt||t instanceof _i))throw new Q(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Ve.fromString(e,...n));return Jg(i),new Lt(t.firestore,t instanceof _i?t.converter:null,new X(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XO{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new N1(this,"async_queue_retry"),this.qc=()=>{const n=xu();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=xu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=xu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new zn;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!Zo(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(i=>{this.Mc=i,this.Fc=!1;const r=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(i);throw qn("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.Fc=!1,i))));return this.Nc=n,n}enqueueAfterDelay(e,n,i){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const r=Qd.createAndSchedule(this,e,n,i,s=>this.Qc(s));return this.$c.push(r),r}Uc(){this.Mc&&J()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function ty(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const i=e;for(const r of n)if(r in i&&typeof i[r]=="function")return!0;return!1}(t,["next","error","complete"])}class is extends jl{constructor(e,n,i,r){super(e,n,i,r),this.type="firestore",this._queue=new XO,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||G1(this),this._firestoreClient.terminate()}}function q1(t,e){const n=typeof t=="object"?t:pv(),i=typeof t=="string"?t:e||"(default)",r=JC(n,"firestore").getImmediate({identifier:i});if(!r._initialized){const s=BI("firestore");s&&QO(r,...s)}return r}function zl(t){return t._firestoreClient||G1(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function G1(t){var e,n,i;const r=t._freezeSettings(),s=function(o,a,c,l){return new Px(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new zO(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=r.cache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new rs(It.fromBase64String(e))}catch(n){throw new Q(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new rs(It.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Q(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Q(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Q(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JO=/^__.*__$/;class Y1{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new dr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Q1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class op{constructor(e,n,i,r,s,o){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=r,s===void 0&&this.Jc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new op(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Zc({path:i,ta:!1});return r.ea(e),r}na(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Zc({path:i,ta:!1});return r.Jc(),r}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return Mc(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(Q1(this.Yc)&&JO.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class ZO{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||Vl(e)}ua(e,n,i,r=!1){return new op({Yc:e,methodName:n,oa:i,path:bt.emptyPath(),ta:!1,ra:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function e2(t){const e=t._freezeSettings(),n=Vl(t._databaseId);return new ZO(t._databaseId,!!e.ignoreUndefinedProperties,n)}class Wl extends sp{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Wl}}function t2(t,e,n,i){const r=t.ua(1,e,n);J1("Data must be an object, but it was:",r,i);const s=[],o=jt.empty();fr(i,(c,l)=>{const u=ap(e,c,n);l=Ut(l);const h=r.na(u);if(l instanceof Wl)s.push(u);else{const f=ql(l,h);f!=null&&(s.push(u),o.set(u,f))}});const a=new an(s);return new Y1(o,a,r.fieldTransforms)}function n2(t,e,n,i,r,s){const o=t.ua(1,e,n),a=[ny(e,i,n)],c=[r];if(s.length%2!=0)throw new Q(A.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(ny(e,s[f])),c.push(s[f+1]);const l=[],u=jt.empty();for(let f=a.length-1;f>=0;--f)if(!s2(l,a[f])){const d=a[f];let m=c[f];m=Ut(m);const y=o.na(d);if(m instanceof Wl)l.push(d);else{const b=ql(m,y);b!=null&&(l.push(d),u.set(d,b))}}const h=new an(l);return new Y1(u,h,o.fieldTransforms)}function ql(t,e){if(X1(t=Ut(t)))return J1("Unsupported field value:",e,t),i2(t,e);if(t instanceof sp)return function(n,i){if(!Q1(i.Yc))throw i.ia(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.ia(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,i){const r=[];let s=0;for(const o of n){let a=ql(o,i.sa(s));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),s++}return{arrayValue:{values:r}}}(t,e)}return function(n,i){if((n=Ut(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return nD(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Xe.fromDate(n);return{timestampValue:Dc(i.serializer,r)}}if(n instanceof Xe){const r=new Xe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Dc(i.serializer,r)}}if(n instanceof Kl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof rs)return{bytesValue:w1(i.serializer,n._byteString)};if(n instanceof Lt){const r=i.databaseId,s=n.firestore._databaseId;if(!s.isEqual(r))throw i.ia(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:zd(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i.ia(`Unsupported field value: ${rp(n)}`)}(t,e)}function i2(t,e){const n={};return Gb(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fr(t,(i,r)=>{const s=ql(r,e.Xc(i));s!=null&&(n[i]=s)}),{mapValue:{fields:n}}}function X1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Xe||t instanceof Kl||t instanceof rs||t instanceof Lt||t instanceof sp)}function J1(t,e,n){if(!X1(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=rp(n);throw i==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+i)}}function ny(t,e,n){if((e=Ut(e))instanceof Hl)return e._internalPath;if(typeof e=="string")return ap(t,e);throw Mc("Field path arguments must be of type string or ",t,!1,void 0,n)}const r2=new RegExp("[~\\*/\\[\\]]");function ap(t,e,n){if(e.search(r2)>=0)throw Mc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Hl(...e.split("."))._internalPath}catch{throw Mc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Mc(t,e,n,i,r){const s=i&&!i.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${i}`),o&&(c+=` in document ${r}`),c+=")"),new Q(A.INVALID_ARGUMENT,a+t+c)}function s2(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(e,n,i,r,s){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new o2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(eE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class o2 extends Z1{data(){return super.data()}}function eE(t,e){return typeof e=="string"?ap(t,e):e instanceof Hl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Q(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class a2{convertValue(e,n="none"){switch(sr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Xr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw J()}}convertObject(e,n){const i={};return fr(e.fields,(r,s)=>{i[r]=this.convertValue(s,n)}),i}convertGeoPoint(e){return new Kl(Qe(e.latitude),Qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=Qb(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(To(e));default:return null}}convertTimestamp(e){const n=Ti(e);return new Xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=Ve.fromString(e);Me(A1(i));const r=new Io(i.get(1),i.get(3)),s=new X(i.popFirst(5));return r.isEqual(n)||qn(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class nE extends Z1{constructor(e,n,i,r,s,o){super(e,n,i,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ya(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(eE("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class Ya extends nE{data(e={}){return super.data(e)}}class iE{constructor(e,n,i,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Us(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new Ya(this._firestore,this._userDataWriter,i.key,i,new Us(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Q(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(o=>{const a=new Ya(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Us(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Ya(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Us(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,l=-1;return o.type!==0&&(c=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),l=s.indexOf(o.doc.key)),{type:c2(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function c2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(t){t=An(t,Lt);const e=An(t.firestore,is);return qO(zl(e),t._key).then(n=>sE(e,t,n))}class cp extends a2{constructor(e){super(),this.firestore=e}convertBytes(e){return new rs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Lt(this.firestore,null,n)}}function l2(t){t=An(t,ia);const e=An(t.firestore,is),n=zl(e),i=new cp(e);return tE(t._query),GO(n,t._query).then(r=>new iE(e,i,t,r))}function Ir(t,e,n,...i){t=An(t,Lt);const r=An(t.firestore,is),s=e2(r);let o;return o=typeof(e=Ut(e))=="string"||e instanceof Hl?n2(s,"updateDoc",t._key,e,n,i):t2(s,"updateDoc",t._key,e),u2(r,[o.toMutation(t._key,Hn.exists(!0))])}function lp(t,...e){var n,i,r;t=Ut(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||ty(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(ty(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,l,u;if(t instanceof Lt)l=An(t.firestore,is),u=Dl(t._key.path),c={next:h=>{e[o]&&e[o](sE(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=An(t,ia);l=An(h.firestore,is),u=h._query;const f=new cp(l);c={next:d=>{e[o]&&e[o](new iE(l,f,h,d))},error:e[o+1],complete:e[o+2]},tE(t._query)}return function(h,f,d,m){const y=new ip(m),b=new tp(f,y,d);return h.asyncQueue.enqueueAndForget(async()=>Jd(await Pc(h),b)),()=>{y.yc(),h.asyncQueue.enqueueAndForget(async()=>Zd(await Pc(h),b))}}(zl(l),u,a,c)}function u2(t,e){return function(n,i){const r=new zn;return n.asyncQueue.enqueueAndForget(async()=>OO(await WO(n),i,r)),r.promise}(zl(t),e)}function sE(t,e,n){const i=n.docs.get(e._key),r=new cp(t);return new nE(t,r,e._key,i,new Us(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Es=n})(ms),Nn(new pn("firestore",(n,{instanceIdentifier:i,options:r})=>{const s=n.getProvider("app").getImmediate(),o=new is(new vx(n.getProvider("auth-internal")),new Tx(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new Q(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Io(a.options.projectId,c)}(s,i),s);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Ht(Tg,"3.10.1",t),Ht(Tg,"3.10.1","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE="firebasestorage.googleapis.com",h2="storageBucket",f2=2*60*1e3,d2=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends ei{constructor(e,n,i=0){super(Ou(e),`Firebase Storage: ${n} (${Ou(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Mn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ou(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Pn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Pn||(Pn={}));function Ou(t){return"storage/"+t}function p2(){const t="An unknown error occurred, please check the error payload for server response.";return new Mn(Pn.UNKNOWN,t)}function m2(){return new Mn(Pn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function g2(){return new Mn(Pn.CANCELED,"User canceled the upload/download.")}function y2(t){return new Mn(Pn.INVALID_URL,"Invalid URL '"+t+"'.")}function _2(t){return new Mn(Pn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function iy(t){return new Mn(Pn.INVALID_ARGUMENT,t)}function aE(){return new Mn(Pn.APP_DELETED,"The Firebase app was deleted.")}function v2(t){return new Mn(Pn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=cn.makeFromUrl(e,n)}catch{return new cn(e,"")}if(i.path==="")return i;throw _2(e)}static makeFromUrl(e,n){let i=null;const r="([A-Za-z0-9.\\-_]+)";function s(S){S.path.charAt(S.path.length-1)==="/"&&(S.path_=S.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function l(S){S.path_=decodeURIComponent(S.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${r}/o${f}`,"i"),m={bucket:1,path:3},y=n===oE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",_=new RegExp(`^https?://${y}/${r}/${b}`,"i"),E=[{regex:a,indices:c,postModify:s},{regex:d,indices:m,postModify:l},{regex:_,indices:{bucket:1,path:2},postModify:l}];for(let S=0;S<E.length;S++){const P=E[S],q=P.regex.exec(e);if(q){const $=q[P.indices.bucket];let K=q[P.indices.path];K||(K=""),i=new cn($,K),P.postModify(i);break}}if(i==null)throw y2(e);return i}}class b2{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E2(t,e,n){let i=1,r=null,s=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...b){l||(l=!0,e.apply(null,b))}function h(b){r=setTimeout(()=>{r=null,t(d,c())},b)}function f(){s&&clearTimeout(s)}function d(b,..._){if(l){f();return}if(b){f(),u.call(null,b,..._);return}if(c()||o){f(),u.call(null,b,..._);return}i<64&&(i*=2);let E;a===1?(a=2,E=0):E=(i+Math.random())*1e3,h(E)}let m=!1;function y(b){m||(m=!0,f(),!l&&(r!==null?(b||(a=2),clearTimeout(r),h(0)):b||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function w2(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T2(t){return t!==void 0}function ry(t,e,n,i){if(i<e)throw iy(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw iy(`Invalid value for '${t}'. Expected ${n} or less.`)}function I2(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const r=e(i)+"="+e(t[i]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Lc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Lc||(Lc={}));/**
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
 */function C2(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||r||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S2{constructor(e,n,i,r,s,o,a,c,l,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,m)=>{this.resolve_=d,this.reject_=m,this.start_()})}start_(){const e=(i,r)=>{if(r){i(!1,new Ra(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Lc.NO_ERROR,c=s.getStatus();if(!a||C2(c,this.additionalRetryCodes_)&&this.retry){const u=s.getErrorCode()===Lc.ABORT;i(!1,new Ra(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;i(!0,new Ra(l,s))})},n=(i,r)=>{const s=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());T2(c)?s(c):s()}catch(c){o(c)}else if(a!==null){const c=p2();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?aE():g2();o(c)}else{const c=m2();o(c)}};this.canceled_?n(!1,new Ra(!1,null,!0)):this.backoffId_=E2(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&w2(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ra{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function A2(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function k2(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function R2(t,e){e&&(t["X-Firebase-GMPID"]=e)}function N2(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function x2(t,e,n,i,r,s,o=!0){const a=I2(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return R2(l,e),A2(l,n),k2(l,s),N2(l,i),new S2(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D2(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function O2(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Fc{constructor(e,n){this._service=e,n instanceof cn?this._location=n:this._location=cn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Fc(e,n)}get root(){const e=new cn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return O2(this._location.path)}get storage(){return this._service}get parent(){const e=D2(this._location.path);if(e===null)return null;const n=new cn(this._location.bucket,e);return new Fc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw v2(e)}}function sy(t,e){const n=e==null?void 0:e[h2];return n==null?null:cn.makeFromBucketSpec(n,t)}class P2{constructor(e,n,i,r,s){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=oE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=f2,this._maxUploadRetryTime=d2,this._requests=new Set,r!=null?this._bucket=cn.makeFromBucketSpec(r,this._host):this._bucket=sy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=cn.makeFromBucketSpec(this._url,e):this._bucket=sy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ry("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ry("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Fc(this,e)}_makeRequest(e,n,i,r,s=!0){if(this._deleted)return new b2(aE());{const o=x2(e,this._appId,i,r,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,r).getPromise()}}const oy="@firebase/storage",ay="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M2="storage";function L2(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new P2(n,i,r,e,ms)}function F2(){Nn(new pn(M2,L2,"PUBLIC").setMultipleInstances(!0)),Ht(oy,ay,""),Ht(oy,ay,"esm2017")}F2();const Pu=new WeakMap;function cE(t,e){return Pu.has(e)||Pu.set(e,t||{f:{},r:{},s:{},u:{}}),Pu.get(e)}function U2(t,e,n,i){if(!t)return n;const[r,s]=lE(t);if(!r)return n;const o=cE(void 0,i)[r]||{},a=e||s;return a&&a in o?o[a]:n}function V2(t,e,n,i){if(!t)return;const[r,s]=lE(t);if(!r)return;const o=cE(void 0,i)[r],a=e||s;if(a)return n.then(c=>{o[a]=c}).catch(wn),a}function lE(t){return CA(t)||SA(t)?["f",t.path]:AA(t)?["r",t.toString()]:kA(t)?["s",t.toString()]:[]}const Mu=new WeakMap;function $2(t,e,n){const i=Kf();Mu.has(i)||Mu.set(i,new Map);const r=Mu.get(i),s=V2(e,n,t,i);return s&&r.set(s,t),s?()=>r.delete(s):wn}const B2={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function Xh(t,e,n,i){if(!IA(t))return[t,{}];const r=[{},{}],s=Object.keys(n).reduce((a,c)=>{const l=n[c];return a[l.path]=l.data(),a},{});function o(a,c,l,u){c=c||{};const[h,f]=u;Object.getOwnPropertyNames(a).forEach(d=>{const m=Object.getOwnPropertyDescriptor(a,d);m&&!m.enumerable&&Object.defineProperty(h,d,m)});for(const d in a){const m=a[d];if(m==null||m instanceof Date||m instanceof Xe||m instanceof Kl)h[d]=m;else if(qf(m)){const y=l+d;h[d]=y in n?c[d]:m.path,f[y]=m.converter?m:m.withConverter(i.converter)}else if(Array.isArray(m)){h[d]=Array(m.length);for(let y=0;y<m.length;y++){const b=m[y];b&&b.path in s&&(h[d][y]=s[b.path])}o(m,c[d]||h[d],l+d+".",[h[d],f])}else cr(m)?(h[d]={},o(m,c[d],l+d+".",[h[d],f])):h[d]=m}}return o(t,e,"",r),r}const up={reset:!1,wait:!0,maxRefDepth:2,converter:B2,snapshotOptions:{serverTimestamps:"estimate"}};function Uc(t){for(const e in t)t[e].unsub()}function Jh(t,e,n,i,r,s,o,a,c){const[l,u]=Xh(i.data(t.snapshotOptions),Wf(e,n),r,t);s.set(e,n,l),Zh(t,e,n,r,u,s,o,a,c)}function j2({ref:t,target:e,path:n,depth:i,resolve:r,reject:s,ops:o},a){const c=Object.create(null);let l=wn;return a.once?rE(t).then(u=>{u.exists()?Jh(a,e,n,u,c,o,i,r,s):(o.set(e,n,null),r())}).catch(s):l=lp(t,u=>{u.exists()?Jh(a,e,n,u,c,o,i,r,s):(o.set(e,n,null),r())},s),()=>{l(),Uc(c)}}function Zh(t,e,n,i,r,s,o,a,c){const l=Object.keys(r);if(Object.keys(i).filter(y=>l.indexOf(y)<0).forEach(y=>{i[y].unsub(),delete i[y]}),!l.length||++o>t.maxRefDepth)return a(n);let h=0;const f=l.length,d=Object.create(null);function m(y){y in d&&++h>=f&&a(n)}l.forEach(y=>{const b=i[y],_=r[y],v=`${n}.${y}`;if(d[v]=!0,b)if(b.path!==_.path)b.unsub();else return;i[y]={data:()=>Wf(e,v),unsub:j2({ref:_,target:e,path:v,depth:o,ops:s,resolve:m.bind(null,v),reject:c},t),path:_.path}})}function z2(t,e,n,i,r,s){const o=Object.assign({},up,s),{snapshotListenOptions:a,snapshotOptions:c,wait:l,once:u}=o,h="value";let f=hn(l?[]:t.value);l||n.set(t,h,[]);const d=i;let m,y=wn;const b=[],_={added:({newIndex:E,doc:S})=>{b.splice(E,0,Object.create(null));const P=b[E],[q,$]=Xh(S.data(c),void 0,P,o);n.add(V(f),E,q),Zh(o,f,`${h}.${E}`,P,$,n,0,i.bind(null,S),r)},modified:({oldIndex:E,newIndex:S,doc:P})=>{const q=V(f),$=b[E],K=q[E],[ye,Fe]=Xh(P.data(c),K,$,o);b.splice(S,0,$),n.remove(q,E),n.add(q,S,ye),Zh(o,f,`${h}.${S}`,$,Fe,n,0,i,r)},removed:({oldIndex:E})=>{const S=V(f);n.remove(S,E),Uc(b.splice(E,1)[0])}};function v(E){const S=E.docChanges(a);if(!m&&S.length){m=!0;let P=0;const q=S.length,$=Object.create(null);for(let K=0;K<q;K++)$[S[K].doc.id]=!0;i=K=>{K&&K.id in $&&++P>=q&&(l&&(n.set(t,h,V(f)),f=t),d(V(f)),i=wn)}}S.forEach(P=>{_[P.type](P)}),S.length||(l&&(n.set(t,h,V(f)),f=t),i(V(f)))}return u?l2(e).then(v).catch(r):y=lp(e,v,r),E=>{if(y(),E){const S=typeof E=="function"?E():[];n.set(t,h,S)}b.forEach(Uc)}}function H2(t,e,n,i,r,s){const o=Object.assign({},up,s),a="value",c=Object.create(null);i=RA(i,()=>Wf(t,a));let l=wn;function u(h){h.exists()?Jh(o,t,a,h,c,n,0,i,r):(n.set(t,a,null),i(null))}return o.once?rE(e).then(u).catch(r):l=lp(e,u,r),h=>{if(l(),h){const f=typeof h=="function"?h():null;n.set(t,a,f)}Uc(c)}}function K2(t,e){let n=wn;const i=Object.assign({},up,e),r=V(t),s=i.target||hn();NA()&&(i.once=!0);const o=U2(r,i.ssrKey,s.value,Kf());s.value=o;let c=!(Dv(r)?(o||[]).length>0:o!==void 0);const l=hn(!1),u=hn(),h=E_(),f=wf();let d=wn;function m(){let _=V(t);const v=new Promise((E,S)=>{if(n(i.reset),!_)return n=wn,E(null);l.value=c,c=!0,_.converter||(_=_.withConverter(i.converter)),n=(qf(_)?H2:z2)(s,_,W2,E,S,i)}).catch(E=>(h.value===v&&(u.value=E),Promise.reject(E))).finally(()=>{h.value===v&&(l.value=!1)});h.value=v}let y=wn;je(t)&&(y=qi(t,m)),m(),r&&(d=$2(h.value,r,i.ssrKey)),Mo()&&P_(()=>h.value),f&&o_(b);function b(_=i.reset){y(),d(),n(_)}return Object.defineProperties(s,{error:{get:()=>u},data:{get:()=>s},pending:{get:()=>l},promise:{get:()=>h},stop:{get:()=>b}})}const W2={set:(t,e,n)=>wA(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function En(t,e){return K2(t,e)}function ra(t){return q1(Kf(t))}function q2(t,{firebaseApp:e,modules:n=[]}){t.provide(xv,e);for(const i of n)t.use(i.bind(null,e))}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Cr=typeof window<"u";function G2(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Te=Object.assign;function Lu(t,e){const n={};for(const i in e){const r=e[i];n[i]=mn(r)?r.map(t):t(r)}return n}const Zs=()=>{},mn=Array.isArray,Y2=/\/$/,Q2=t=>t.replace(Y2,"");function Fu(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(i=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),r=t(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=eP(i??e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function X2(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function cy(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function J2(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&ss(e.matched[i],n.matched[r])&&uE(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ss(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function uE(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Z2(t[n],e[n]))return!1;return!0}function Z2(t,e){return mn(t)?ly(t,e):mn(e)?ly(e,t):t===e}function ly(t,e){return mn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function eP(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/");let r=n.length-1,s,o;for(s=0;s<i.length;s++)if(o=i[s],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(s-(s===i.length?1:0)).join("/")}var ko;(function(t){t.pop="pop",t.push="push"})(ko||(ko={}));var eo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(eo||(eo={}));function tP(t){if(!t)if(Cr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Q2(t)}const nP=/^[^#]+#/;function iP(t,e){return t.replace(nP,"#")+e}function rP(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Gl=()=>({left:window.pageXOffset,top:window.pageYOffset});function sP(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=rP(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function uy(t,e){return(history.state?history.state.position-e:-1)+t}const ef=new Map;function oP(t,e){ef.set(t,e)}function aP(t){const e=ef.get(t);return ef.delete(t),e}let cP=()=>location.protocol+"//"+location.host;function hE(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),cy(c,"")}return cy(n,t)+i+r}function lP(t,e,n,i){let r=[],s=[],o=null;const a=({state:f})=>{const d=hE(t,location),m=n.value,y=e.value;let b=0;if(f){if(n.value=d,e.value=f,o&&o===m){o=null;return}b=y?f.position-y.position:0}else i(d);r.forEach(_=>{_(n.value,m,{delta:b,type:ko.pop,direction:b?b>0?eo.forward:eo.back:eo.unknown})})};function c(){o=n.value}function l(f){r.push(f);const d=()=>{const m=r.indexOf(f);m>-1&&r.splice(m,1)};return s.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(Te({},f.state,{scroll:Gl()}),"")}function h(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function hy(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?Gl():null}}function uP(t){const{history:e,location:n}=window,i={value:hE(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:cP()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),r.value=l}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(c,l){const u=Te({},e.state,hy(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});s(c,u,!0),i.value=c}function a(c,l){const u=Te({},r.value,e.state,{forward:c,scroll:Gl()});s(u.current,u,!0);const h=Te({},hy(i.value,c,null),{position:u.position+1},l);s(c,h,!1),i.value=c}return{location:i,state:r,push:a,replace:o}}function hP(t){t=tP(t);const e=uP(t),n=lP(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=Te({location:"",base:t,go:i,createHref:iP.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function fP(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),hP(t)}function dP(t){return typeof t=="string"||t&&typeof t=="object"}function fE(t){return typeof t=="string"||typeof t=="symbol"}const ai={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},dE=Symbol("");var fy;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(fy||(fy={}));function os(t,e){return Te(new Error,{type:t,[dE]:!0},e)}function Fn(t,e){return t instanceof Error&&dE in t&&(e==null||!!(t.type&e))}const dy="[^/]+?",pP={sensitive:!1,strict:!1,start:!0,end:!0},mP=/[.+*?^${}()[\]/\\]/g;function gP(t,e){const n=Te({},pP,e),i=[];let r=n.start?"^":"";const s=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const f=l[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(mP,"\\$&"),d+=40;else if(f.type===1){const{value:m,repeatable:y,optional:b,regexp:_}=f;s.push({name:m,repeatable:y,optional:b});const v=_||dy;if(v!==dy){d+=10;try{new RegExp(`(${v})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${m}" (${v}): `+S.message)}}let E=y?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;h||(E=b&&l.length<2?`(?:/${E})`:"/"+E),b&&(E+="?"),r+=E,d+=20,b&&(d+=-8),y&&(d+=-20),v===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(n.strict&&n.end){const l=i.length-1;i[l][i[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",m=s[f-1];h[m.name]=d&&m.repeatable?d.split("/"):d}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:m,repeatable:y,optional:b}=d,_=m in l?l[m]:"";if(mn(_)&&!y)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const v=mn(_)?_.join("/"):_;if(!v)if(b)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=v}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:c}}function yP(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function _P(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=yP(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(py(i))return 1;if(py(r))return-1}return r.length-i.length}function py(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const vP={type:0,value:""},bP=/[a-zA-Z0-9_]/;function EP(t){if(!t)return[[]];if(t==="/")return[[vP]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${l}": ${d}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,c,l="",u="";function h(){l&&(n===0?s.push({type:0,value:l}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=i;break;case 1:c==="("?n=2:bP.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function wP(t,e,n){const i=gP(EP(t.path),n),r=Te(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function TP(t,e){const n=[],i=new Map;e=yy({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,h,f){const d=!f,m=IP(u);m.aliasOf=f&&f.record;const y=yy(e,u),b=[m];if("alias"in u){const E=typeof u.alias=="string"?[u.alias]:u.alias;for(const S of E)b.push(Te({},m,{components:f?f.record.components:m.components,path:S,aliasOf:f?f.record:m}))}let _,v;for(const E of b){const{path:S}=E;if(h&&S[0]!=="/"){const P=h.record.path,q=P[P.length-1]==="/"?"":"/";E.path=h.record.path+(S&&q+S)}if(_=wP(E,h,y),f?f.alias.push(_):(v=v||_,v!==_&&v.alias.push(_),d&&u.name&&!gy(_)&&o(u.name)),m.children){const P=m.children;for(let q=0;q<P.length;q++)s(P[q],_,f&&f.children[q])}f=f||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&c(_)}return v?()=>{o(v)}:Zs}function o(u){if(fE(u)){const h=i.get(u);h&&(i.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&_P(u,n[h])>=0&&(u.record.path!==n[h].record.path||!pE(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!gy(u)&&i.set(u.record.name,u)}function l(u,h){let f,d={},m,y;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw os(1,{location:u});y=f.record.name,d=Te(my(h.params,f.keys.filter(v=>!v.optional).map(v=>v.name)),u.params&&my(u.params,f.keys.map(v=>v.name))),m=f.stringify(d)}else if("path"in u)m=u.path,f=n.find(v=>v.re.test(m)),f&&(d=f.parse(m),y=f.record.name);else{if(f=h.name?i.get(h.name):n.find(v=>v.re.test(h.path)),!f)throw os(1,{location:u,currentLocation:h});y=f.record.name,d=Te({},h.params,u.params),m=f.stringify(d)}const b=[];let _=f;for(;_;)b.unshift(_.record),_=_.parent;return{name:y,path:m,params:d,matched:b,meta:SP(b)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function my(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function IP(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:CP(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function CP(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="boolean"?n:n[i];return e}function gy(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function SP(t){return t.reduce((e,n)=>Te(e,n.meta),{})}function yy(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function pE(t,e){return e.children.some(n=>n===t||pE(t,n))}const mE=/#/g,AP=/&/g,kP=/\//g,RP=/=/g,NP=/\?/g,gE=/\+/g,xP=/%5B/g,DP=/%5D/g,yE=/%5E/g,OP=/%60/g,_E=/%7B/g,PP=/%7C/g,vE=/%7D/g,MP=/%20/g;function hp(t){return encodeURI(""+t).replace(PP,"|").replace(xP,"[").replace(DP,"]")}function LP(t){return hp(t).replace(_E,"{").replace(vE,"}").replace(yE,"^")}function tf(t){return hp(t).replace(gE,"%2B").replace(MP,"+").replace(mE,"%23").replace(AP,"%26").replace(OP,"`").replace(_E,"{").replace(vE,"}").replace(yE,"^")}function FP(t){return tf(t).replace(RP,"%3D")}function UP(t){return hp(t).replace(mE,"%23").replace(NP,"%3F")}function VP(t){return t==null?"":UP(t).replace(kP,"%2F")}function Vc(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function $P(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(gE," "),o=s.indexOf("="),a=Vc(o<0?s:s.slice(0,o)),c=o<0?null:Vc(s.slice(o+1));if(a in e){let l=e[a];mn(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function _y(t){let e="";for(let n in t){const i=t[n];if(n=FP(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(mn(i)?i.map(s=>s&&tf(s)):[i&&tf(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function BP(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=mn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const jP=Symbol(""),vy=Symbol(""),Yl=Symbol(""),fp=Symbol(""),nf=Symbol("");function Ds(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function hi(t,e,n,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(os(4,{from:n,to:e})):h instanceof Error?a(h):dP(h)?a(os(2,{from:e,to:h})):(s&&i.enterCallbacks[r]===s&&typeof h=="function"&&s.push(h),o())},l=t.call(i&&i.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Uu(t,e,n,i){const r=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(zP(a)){const l=(a.__vccOpts||a)[e];l&&r.push(hi(l,n,i,s,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=G2(l)?l.default:l;s.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&hi(f,n,i,s,o)()}))}}return r}function zP(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function by(t){const e=Mt(Yl),n=Mt(fp),i=ve(()=>e.resolve(V(t.to))),r=ve(()=>{const{matched:c}=i.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(ss.bind(null,u));if(f>-1)return f;const d=Ey(c[l-2]);return l>1&&Ey(u)===d&&h[h.length-1].path!==d?h.findIndex(ss.bind(null,c[l-2])):f}),s=ve(()=>r.value>-1&&qP(n.params,i.value.params)),o=ve(()=>r.value>-1&&r.value===n.matched.length-1&&uE(n.params,i.value.params));function a(c={}){return WP(c)?e[V(t.replace)?"replace":"push"](V(t.to)).catch(Zs):Promise.resolve()}return{route:i,href:ve(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const HP=Po({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:by,setup(t,{slots:e}){const n=fs(by(t)),{options:i}=Mt(Yl),r=ve(()=>({[wy(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[wy(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:sl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),KP=HP;function WP(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function qP(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!mn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function Ey(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const wy=(t,e,n)=>t??e??n,GP=Po({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Mt(nf),r=ve(()=>t.route||i.value),s=Mt(vy,0),o=ve(()=>{let l=V(s);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=ve(()=>r.value.matched[o.value]);Ba(vy,ve(()=>o.value+1)),Ba(jP,a),Ba(nf,r);const c=hn();return qi(()=>[c.value,a.value,t.name],([l,u,h],[f,d,m])=>{u&&(u.instances[h]=l,d&&d!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),l&&u&&(!d||!ss(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(y=>y(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return Ty(n.default,{Component:f,route:l});const d=h.props[u],m=d?d===!0?l.params:typeof d=="function"?d(l):d:null,b=sl(f,Te({},m,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Ty(n.default,{Component:b,route:l})||b}}});function Ty(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const bE=GP;function YP(t){const e=TP(t.routes,t),n=t.parseQuery||$P,i=t.stringifyQuery||_y,r=t.history,s=Ds(),o=Ds(),a=Ds(),c=E_(ai);let l=ai;Cr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Lu.bind(null,I=>""+I),h=Lu.bind(null,VP),f=Lu.bind(null,Vc);function d(I,F){let M,W;return fE(I)?(M=e.getRecordMatcher(I),W=F):W=I,e.addRoute(W,M)}function m(I){const F=e.getRecordMatcher(I);F&&e.removeRoute(F)}function y(){return e.getRoutes().map(I=>I.record)}function b(I){return!!e.getRecordMatcher(I)}function _(I,F){if(F=Te({},F||c.value),typeof I=="string"){const p=Fu(n,I,F.path),g=e.resolve({path:p.path},F),w=r.createHref(p.fullPath);return Te(p,g,{params:f(g.params),hash:Vc(p.hash),redirectedFrom:void 0,href:w})}let M;if("path"in I)M=Te({},I,{path:Fu(n,I.path,F.path).path});else{const p=Te({},I.params);for(const g in p)p[g]==null&&delete p[g];M=Te({},I,{params:h(I.params)}),F.params=h(F.params)}const W=e.resolve(M,F),de=I.hash||"";W.params=u(f(W.params));const Be=X2(i,Te({},I,{hash:LP(de),path:W.path})),oe=r.createHref(Be);return Te({fullPath:Be,hash:de,query:i===_y?BP(I.query):I.query||{}},W,{redirectedFrom:void 0,href:oe})}function v(I){return typeof I=="string"?Fu(n,I,c.value.path):Te({},I)}function E(I,F){if(l!==I)return os(8,{from:F,to:I})}function S(I){return $(I)}function P(I){return S(Te(v(I),{replace:!0}))}function q(I){const F=I.matched[I.matched.length-1];if(F&&F.redirect){const{redirect:M}=F;let W=typeof M=="function"?M(I):M;return typeof W=="string"&&(W=W.includes("?")||W.includes("#")?W=v(W):{path:W},W.params={}),Te({query:I.query,hash:I.hash,params:"path"in W?{}:I.params},W)}}function $(I,F){const M=l=_(I),W=c.value,de=I.state,Be=I.force,oe=I.replace===!0,p=q(M);if(p)return $(Te(v(p),{state:typeof p=="object"?Te({},de,p.state):de,force:Be,replace:oe}),F||M);const g=M;g.redirectedFrom=F;let w;return!Be&&J2(i,W,M)&&(w=os(16,{to:g,from:W}),Ni(W,W,!0,!1)),(w?Promise.resolve(w):ye(g,W)).catch(T=>Fn(T)?Fn(T,2)?T:Xt(T):Ae(T,g,W)).then(T=>{if(T){if(Fn(T,2))return $(Te({replace:oe},v(T.to),{state:typeof T.to=="object"?Te({},de,T.to.state):de,force:Be}),F||g)}else T=Rt(g,W,!0,oe,de);return Fe(g,W,T),T})}function K(I,F){const M=E(I,F);return M?Promise.reject(M):Promise.resolve()}function ye(I,F){let M;const[W,de,Be]=QP(I,F);M=Uu(W.reverse(),"beforeRouteLeave",I,F);for(const p of W)p.leaveGuards.forEach(g=>{M.push(hi(g,I,F))});const oe=K.bind(null,I,F);return M.push(oe),br(M).then(()=>{M=[];for(const p of s.list())M.push(hi(p,I,F));return M.push(oe),br(M)}).then(()=>{M=Uu(de,"beforeRouteUpdate",I,F);for(const p of de)p.updateGuards.forEach(g=>{M.push(hi(g,I,F))});return M.push(oe),br(M)}).then(()=>{M=[];for(const p of I.matched)if(p.beforeEnter&&!F.matched.includes(p))if(mn(p.beforeEnter))for(const g of p.beforeEnter)M.push(hi(g,I,F));else M.push(hi(p.beforeEnter,I,F));return M.push(oe),br(M)}).then(()=>(I.matched.forEach(p=>p.enterCallbacks={}),M=Uu(Be,"beforeRouteEnter",I,F),M.push(oe),br(M))).then(()=>{M=[];for(const p of o.list())M.push(hi(p,I,F));return M.push(oe),br(M)}).catch(p=>Fn(p,8)?p:Promise.reject(p))}function Fe(I,F,M){for(const W of a.list())W(I,F,M)}function Rt(I,F,M,W,de){const Be=E(I,F);if(Be)return Be;const oe=F===ai,p=Cr?history.state:{};M&&(W||oe?r.replace(I.fullPath,Te({scroll:oe&&p&&p.scroll},de)):r.push(I.fullPath,de)),c.value=I,Ni(I,F,M,oe),Xt()}let Gt;function ri(){Gt||(Gt=r.listen((I,F,M)=>{if(!ua.listening)return;const W=_(I),de=q(W);if(de){$(Te(de,{replace:!0}),W).catch(Zs);return}l=W;const Be=c.value;Cr&&oP(uy(Be.fullPath,M.delta),Gl()),ye(W,Be).catch(oe=>Fn(oe,12)?oe:Fn(oe,2)?($(oe.to,W).then(p=>{Fn(p,20)&&!M.delta&&M.type===ko.pop&&r.go(-1,!1)}).catch(Zs),Promise.reject()):(M.delta&&r.go(-M.delta,!1),Ae(oe,W,Be))).then(oe=>{oe=oe||Rt(W,Be,!1),oe&&(M.delta&&!Fn(oe,8)?r.go(-M.delta,!1):M.type===ko.pop&&Fn(oe,20)&&r.go(-1,!1)),Fe(W,Be,oe)}).catch(Zs)}))}let Vt=Ds(),it=Ds(),qe;function Ae(I,F,M){Xt(I);const W=it.list();return W.length?W.forEach(de=>de(I,F,M)):console.error(I),Promise.reject(I)}function Ie(){return qe&&c.value!==ai?Promise.resolve():new Promise((I,F)=>{Vt.add([I,F])})}function Xt(I){return qe||(qe=!I,ri(),Vt.list().forEach(([F,M])=>I?M(I):F()),Vt.reset()),I}function Ni(I,F,M,W){const{scrollBehavior:de}=t;if(!Cr||!de)return Promise.resolve();const Be=!M&&aP(uy(I.fullPath,0))||(W||!M)&&history.state&&history.state.scroll||null;return xf().then(()=>de(I,F,Be)).then(oe=>oe&&sP(oe)).catch(oe=>Ae(oe,I,F))}const Jt=I=>r.go(I);let Nt;const gr=new Set,ua={currentRoute:c,listening:!0,addRoute:d,removeRoute:m,hasRoute:b,getRoutes:y,resolve:_,options:t,push:S,replace:P,go:Jt,back:()=>Jt(-1),forward:()=>Jt(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:it.add,isReady:Ie,install(I){const F=this;I.component("RouterLink",KP),I.component("RouterView",bE),I.config.globalProperties.$router=F,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>V(c)}),Cr&&!Nt&&c.value===ai&&(Nt=!0,S(r.location).catch(de=>{}));const M={};for(const de in ai)M[de]=ve(()=>c.value[de]);I.provide(Yl,F),I.provide(fp,fs(M)),I.provide(nf,c);const W=I.unmount;gr.add(I),I.unmount=function(){gr.delete(I),gr.size<1&&(l=ai,Gt&&Gt(),Gt=null,c.value=ai,Nt=!1,qe=!1),W()}}};return ua}function br(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function QP(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(l=>ss(l,a))?i.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>ss(l,c))||r.push(c))}return[n,i,r]}function dp(){return Mt(Yl)}function Ql(){return Mt(fp)}const XP={class:"container"},JP={__name:"App",setup(t){const e=Ql();return(n,i)=>{const r=F_("RouterView");return re(),_e("div",XP,[(re(),Cn(r,{key:V(e).fullPath}))])}}},mr=dv({apiKey:"AIzaSyAnOiG77O1ukT9C2x8u1VbMLw7For9C_3w",authDomain:"bingo-50cec.firebaseapp.com",databaseURL:"https://bingo-50cec-default-rtdb.europe-west1.firebasedatabase.app",projectId:"bingo-50cec",storageBucket:"bingo-50cec.appspot.com",messagingSenderId:"866066986693",appId:"1:866066986693:web:de513df8434d232b0562ac",measurementId:"G-8F3EECYHQ0"}),ZP=q1(mr);ns(ZP,"todos");function Iy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function U(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Iy(Object(n),!0).forEach(function(i){nt(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Iy(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function $c(t){return $c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$c(t)}function eM(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Cy(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function tM(t,e,n){return e&&Cy(t.prototype,e),n&&Cy(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function nt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function pp(t,e){return iM(t)||sM(t,e)||EE(t,e)||aM()}function sa(t){return nM(t)||rM(t)||EE(t)||oM()}function nM(t){if(Array.isArray(t))return rf(t)}function iM(t){if(Array.isArray(t))return t}function rM(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function sM(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],r=!0,s=!1,o,a;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(c){s=!0,a=c}finally{try{!r&&n.return!=null&&n.return()}finally{if(s)throw a}}return i}}function EE(t,e){if(t){if(typeof t=="string")return rf(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return rf(t,e)}}function rf(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function oM(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function aM(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Sy=function(){},mp={},wE={},TE=null,IE={mark:Sy,measure:Sy};try{typeof window<"u"&&(mp=window),typeof document<"u"&&(wE=document),typeof MutationObserver<"u"&&(TE=MutationObserver),typeof performance<"u"&&(IE=performance)}catch{}var cM=mp.navigator||{},Ay=cM.userAgent,ky=Ay===void 0?"":Ay,Ci=mp,Pe=wE,Ry=TE,Na=IE;Ci.document;var ni=!!Pe.documentElement&&!!Pe.head&&typeof Pe.addEventListener=="function"&&typeof Pe.createElement=="function",CE=~ky.indexOf("MSIE")||~ky.indexOf("Trident/"),xa,Da,Oa,Pa,Ma,Qn="___FONT_AWESOME___",sf=16,SE="fa",AE="svg-inline--fa",or="data-fa-i2svg",of="data-fa-pseudo-element",lM="data-fa-pseudo-element-pending",gp="data-prefix",yp="data-icon",Ny="fontawesome-i2svg",uM="async",hM=["HTML","HEAD","STYLE","SCRIPT"],kE=function(){try{return!0}catch{return!1}}(),Oe="classic",ze="sharp",_p=[Oe,ze];function oa(t){return new Proxy(t,{get:function(n,i){return i in n?n[i]:n[Oe]}})}var Ro=oa((xa={},nt(xa,Oe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),nt(xa,ze,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),xa)),No=oa((Da={},nt(Da,Oe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),nt(Da,ze,{solid:"fass",regular:"fasr",light:"fasl"}),Da)),xo=oa((Oa={},nt(Oa,Oe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),nt(Oa,ze,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Oa)),fM=oa((Pa={},nt(Pa,Oe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),nt(Pa,ze,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Pa)),dM=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,RE="fa-layers-text",pM=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,mM=oa((Ma={},nt(Ma,Oe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),nt(Ma,ze,{900:"fass",400:"fasr",300:"fasl"}),Ma)),NE=[1,2,3,4,5,6,7,8,9,10],gM=NE.concat([11,12,13,14,15,16,17,18,19,20]),yM=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Hi={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Do=new Set;Object.keys(No[Oe]).map(Do.add.bind(Do));Object.keys(No[ze]).map(Do.add.bind(Do));var _M=[].concat(_p,sa(Do),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Hi.GROUP,Hi.SWAP_OPACITY,Hi.PRIMARY,Hi.SECONDARY]).concat(NE.map(function(t){return"".concat(t,"x")})).concat(gM.map(function(t){return"w-".concat(t)})),to=Ci.FontAwesomeConfig||{};function vM(t){var e=Pe.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function bM(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Pe&&typeof Pe.querySelector=="function"){var EM=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];EM.forEach(function(t){var e=pp(t,2),n=e[0],i=e[1],r=bM(vM(n));r!=null&&(to[i]=r)})}var xE={styleDefault:"solid",familyDefault:"classic",cssPrefix:SE,replacementClass:AE,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};to.familyPrefix&&(to.cssPrefix=to.familyPrefix);var as=U(U({},xE),to);as.autoReplaceSvg||(as.observeMutations=!1);var j={};Object.keys(xE).forEach(function(t){Object.defineProperty(j,t,{enumerable:!0,set:function(n){as[t]=n,no.forEach(function(i){return i(j)})},get:function(){return as[t]}})});Object.defineProperty(j,"familyPrefix",{enumerable:!0,set:function(e){as.cssPrefix=e,no.forEach(function(n){return n(j)})},get:function(){return as.cssPrefix}});Ci.FontAwesomeConfig=j;var no=[];function wM(t){return no.push(t),function(){no.splice(no.indexOf(t),1)}}var ci=sf,In={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function TM(t){if(!(!t||!ni)){var e=Pe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Pe.head.childNodes,i=null,r=n.length-1;r>-1;r--){var s=n[r],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=s)}return Pe.head.insertBefore(e,i),t}}var IM="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Oo(){for(var t=12,e="";t-- >0;)e+=IM[Math.random()*62|0];return e}function Is(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function vp(t){return t.classList?Is(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function DE(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function CM(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(DE(t[n]),'" ')},"").trim()}function Xl(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function bp(t){return t.size!==In.size||t.x!==In.x||t.y!==In.y||t.rotate!==In.rotate||t.flipX||t.flipY}function SM(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(s," ").concat(o," ").concat(a)},l={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:c,path:l}}function AM(t){var e=t.transform,n=t.width,i=n===void 0?sf:n,r=t.height,s=r===void 0?sf:r,o=t.startCentered,a=o===void 0?!1:o,c="";return a&&CE?c+="translate(".concat(e.x/ci-i/2,"em, ").concat(e.y/ci-s/2,"em) "):a?c+="translate(calc(-50% + ".concat(e.x/ci,"em), calc(-50% + ").concat(e.y/ci,"em)) "):c+="translate(".concat(e.x/ci,"em, ").concat(e.y/ci,"em) "),c+="scale(".concat(e.size/ci*(e.flipX?-1:1),", ").concat(e.size/ci*(e.flipY?-1:1),") "),c+="rotate(".concat(e.rotate,"deg) "),c}var kM=`:root, :host {
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
}`;function OE(){var t=SE,e=AE,n=j.cssPrefix,i=j.replacementClass,r=kM;if(n!==t||i!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(i))}return r}var xy=!1;function Vu(){j.autoAddCss&&!xy&&(TM(OE()),xy=!0)}var RM={mixout:function(){return{dom:{css:OE,insertCss:Vu}}},hooks:function(){return{beforeDOMElementCreation:function(){Vu()},beforeI2svg:function(){Vu()}}}},Xn=Ci||{};Xn[Qn]||(Xn[Qn]={});Xn[Qn].styles||(Xn[Qn].styles={});Xn[Qn].hooks||(Xn[Qn].hooks={});Xn[Qn].shims||(Xn[Qn].shims=[]);var ln=Xn[Qn],PE=[],NM=function t(){Pe.removeEventListener("DOMContentLoaded",t),Bc=1,PE.map(function(e){return e()})},Bc=!1;ni&&(Bc=(Pe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Pe.readyState),Bc||Pe.addEventListener("DOMContentLoaded",NM));function xM(t){ni&&(Bc?setTimeout(t,0):PE.push(t))}function aa(t){var e=t.tag,n=t.attributes,i=n===void 0?{}:n,r=t.children,s=r===void 0?[]:r;return typeof t=="string"?DE(t):"<".concat(e," ").concat(CM(i),">").concat(s.map(aa).join(""),"</").concat(e,">")}function Dy(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var DM=function(e,n){return function(i,r,s,o){return e.call(n,i,r,s,o)}},$u=function(e,n,i,r){var s=Object.keys(e),o=s.length,a=r!==void 0?DM(n,r):n,c,l,u;for(i===void 0?(c=1,u=e[s[0]]):(c=0,u=i);c<o;c++)l=s[c],u=a(u,e[l],l,e);return u};function OM(t){for(var e=[],n=0,i=t.length;n<i;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function af(t){var e=OM(t);return e.length===1?e[0].toString(16):null}function PM(t,e){var n=t.length,i=t.charCodeAt(e),r;return i>=55296&&i<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function Oy(t){return Object.keys(t).reduce(function(e,n){var i=t[n],r=!!i.icon;return r?e[i.iconName]=i.icon:e[n]=i,e},{})}function cf(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,r=i===void 0?!1:i,s=Oy(e);typeof ln.hooks.addPack=="function"&&!r?ln.hooks.addPack(t,Oy(e)):ln.styles[t]=U(U({},ln.styles[t]||{}),s),t==="fas"&&cf("fa",e)}var La,Fa,Ua,Rr=ln.styles,MM=ln.shims,LM=(La={},nt(La,Oe,Object.values(xo[Oe])),nt(La,ze,Object.values(xo[ze])),La),Ep=null,ME={},LE={},FE={},UE={},VE={},FM=(Fa={},nt(Fa,Oe,Object.keys(Ro[Oe])),nt(Fa,ze,Object.keys(Ro[ze])),Fa);function UM(t){return~_M.indexOf(t)}function VM(t,e){var n=e.split("-"),i=n[0],r=n.slice(1).join("-");return i===t&&r!==""&&!UM(r)?r:null}var $E=function(){var e=function(s){return $u(Rr,function(o,a,c){return o[c]=$u(a,s,{}),o},{})};ME=e(function(r,s,o){if(s[3]&&(r[s[3]]=o),s[2]){var a=s[2].filter(function(c){return typeof c=="number"});a.forEach(function(c){r[c.toString(16)]=o})}return r}),LE=e(function(r,s,o){if(r[o]=o,s[2]){var a=s[2].filter(function(c){return typeof c=="string"});a.forEach(function(c){r[c]=o})}return r}),VE=e(function(r,s,o){var a=s[2];return r[o]=o,a.forEach(function(c){r[c]=o}),r});var n="far"in Rr||j.autoFetchSvg,i=$u(MM,function(r,s){var o=s[0],a=s[1],c=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(r.names[o]={prefix:a,iconName:c}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:a,iconName:c}),r},{names:{},unicodes:{}});FE=i.names,UE=i.unicodes,Ep=Jl(j.styleDefault,{family:j.familyDefault})};wM(function(t){Ep=Jl(t.styleDefault,{family:j.familyDefault})});$E();function wp(t,e){return(ME[t]||{})[e]}function $M(t,e){return(LE[t]||{})[e]}function Ki(t,e){return(VE[t]||{})[e]}function BE(t){return FE[t]||{prefix:null,iconName:null}}function BM(t){var e=UE[t],n=wp("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Si(){return Ep}var Tp=function(){return{prefix:null,iconName:null,rest:[]}};function Jl(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,i=n===void 0?Oe:n,r=Ro[i][t],s=No[i][t]||No[i][r],o=t in ln.styles?t:null;return s||o||null}var Py=(Ua={},nt(Ua,Oe,Object.keys(xo[Oe])),nt(Ua,ze,Object.keys(xo[ze])),Ua);function Zl(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.skipLookups,r=i===void 0?!1:i,s=(e={},nt(e,Oe,"".concat(j.cssPrefix,"-").concat(Oe)),nt(e,ze,"".concat(j.cssPrefix,"-").concat(ze)),e),o=null,a=Oe;(t.includes(s[Oe])||t.some(function(l){return Py[Oe].includes(l)}))&&(a=Oe),(t.includes(s[ze])||t.some(function(l){return Py[ze].includes(l)}))&&(a=ze);var c=t.reduce(function(l,u){var h=VM(j.cssPrefix,u);if(Rr[u]?(u=LM[a].includes(u)?fM[a][u]:u,o=u,l.prefix=u):FM[a].indexOf(u)>-1?(o=u,l.prefix=Jl(u,{family:a})):h?l.iconName=h:u!==j.replacementClass&&u!==s[Oe]&&u!==s[ze]&&l.rest.push(u),!r&&l.prefix&&l.iconName){var f=o==="fa"?BE(l.iconName):{},d=Ki(l.prefix,l.iconName);f.prefix&&(o=null),l.iconName=f.iconName||d||l.iconName,l.prefix=f.prefix||l.prefix,l.prefix==="far"&&!Rr.far&&Rr.fas&&!j.autoFetchSvg&&(l.prefix="fas")}return l},Tp());return(t.includes("fa-brands")||t.includes("fab"))&&(c.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(c.prefix="fad"),!c.prefix&&a===ze&&(Rr.fass||j.autoFetchSvg)&&(c.prefix="fass",c.iconName=Ki(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||o==="fa")&&(c.prefix=Si()||"fas"),c}var jM=function(){function t(){eM(this,t),this.definitions={}}return tM(t,[{key:"add",value:function(){for(var n=this,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=U(U({},n.definitions[a]||{}),o[a]),cf(a,o[a]);var c=xo[Oe][a];c&&cf(c,o[a]),$E()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var r=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(r).map(function(s){var o=r[s],a=o.prefix,c=o.iconName,l=o.icon,u=l[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(h){typeof h=="string"&&(n[a][h]=l)}),n[a][c]=l}),n}}]),t}(),My=[],Nr={},$r={},zM=Object.keys($r);function HM(t,e){var n=e.mixoutsTo;return My=t,Nr={},Object.keys($r).forEach(function(i){zM.indexOf(i)===-1&&delete $r[i]}),My.forEach(function(i){var r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),$c(r[o])==="object"&&Object.keys(r[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=r[o][a]})}),i.hooks){var s=i.hooks();Object.keys(s).forEach(function(o){Nr[o]||(Nr[o]=[]),Nr[o].push(s[o])})}i.provides&&i.provides($r)}),n}function lf(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];var s=Nr[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(i))}),e}function ar(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var r=Nr[t]||[];r.forEach(function(s){s.apply(null,n)})}function Jn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return $r[t]?$r[t].apply(null,e):void 0}function uf(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Si();if(e)return e=Ki(n,e)||e,Dy(jE.definitions,n,e)||Dy(ln.styles,n,e)}var jE=new jM,KM=function(){j.autoReplaceSvg=!1,j.observeMutations=!1,ar("noAuto")},WM={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ni?(ar("beforeI2svg",e),Jn("pseudoElements2svg",e),Jn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;j.autoReplaceSvg===!1&&(j.autoReplaceSvg=!0),j.observeMutations=!0,xM(function(){GM({autoReplaceSvgRoot:n}),ar("watch",e)})}},qM={icon:function(e){if(e===null)return null;if($c(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Ki(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=Jl(e[0]);return{prefix:i,iconName:Ki(i,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(j.cssPrefix,"-"))>-1||e.match(dM))){var r=Zl(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||Si(),iconName:Ki(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var s=Si();return{prefix:s,iconName:Ki(s,e)||e}}}},qt={noAuto:KM,config:j,dom:WM,parse:qM,library:jE,findIconDefinition:uf,toHtml:aa},GM=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,i=n===void 0?Pe:n;(Object.keys(ln.styles).length>0||j.autoFetchSvg)&&ni&&j.autoReplaceSvg&&qt.dom.i2svg({node:i})};function eu(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return aa(i)})}}),Object.defineProperty(t,"node",{get:function(){if(ni){var i=Pe.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function YM(t){var e=t.children,n=t.main,i=t.mask,r=t.attributes,s=t.styles,o=t.transform;if(bp(o)&&n.found&&!i.found){var a=n.width,c=n.height,l={x:a/c/2,y:.5};r.style=Xl(U(U({},s),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function QM(t){var e=t.prefix,n=t.iconName,i=t.children,r=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(j.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:U(U({},r),{},{id:o}),children:i}]}]}function Ip(t){var e=t.icons,n=e.main,i=e.mask,r=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,c=t.title,l=t.maskId,u=t.titleId,h=t.extra,f=t.watchable,d=f===void 0?!1:f,m=i.found?i:n,y=m.width,b=m.height,_=r==="fak",v=[j.replacementClass,s?"".concat(j.cssPrefix,"-").concat(s):""].filter(function(ye){return h.classes.indexOf(ye)===-1}).filter(function(ye){return ye!==""||!!ye}).concat(h.classes).join(" "),E={children:[],attributes:U(U({},h.attributes),{},{"data-prefix":r,"data-icon":s,class:v,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(b)})},S=_&&!~h.classes.indexOf("fa-fw")?{width:"".concat(y/b*16*.0625,"em")}:{};d&&(E.attributes[or]=""),c&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(u||Oo())},children:[c]}),delete E.attributes.title);var P=U(U({},E),{},{prefix:r,iconName:s,main:n,mask:i,maskId:l,transform:o,symbol:a,styles:U(U({},S),h.styles)}),q=i.found&&n.found?Jn("generateAbstractMask",P)||{children:[],attributes:{}}:Jn("generateAbstractIcon",P)||{children:[],attributes:{}},$=q.children,K=q.attributes;return P.children=$,P.attributes=K,a?QM(P):YM(P)}function Ly(t){var e=t.content,n=t.width,i=t.height,r=t.transform,s=t.title,o=t.extra,a=t.watchable,c=a===void 0?!1:a,l=U(U(U({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});c&&(l[or]="");var u=U({},o.styles);bp(r)&&(u.transform=AM({transform:r,startCentered:!0,width:n,height:i}),u["-webkit-transform"]=u.transform);var h=Xl(u);h.length>0&&(l.style=h);var f=[];return f.push({tag:"span",attributes:l,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function XM(t){var e=t.content,n=t.title,i=t.extra,r=U(U(U({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),s=Xl(i.styles);s.length>0&&(r.style=s);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Bu=ln.styles;function hf(t){var e=t[0],n=t[1],i=t.slice(4),r=pp(i,1),s=r[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(j.cssPrefix,"-").concat(Hi.GROUP)},children:[{tag:"path",attributes:{class:"".concat(j.cssPrefix,"-").concat(Hi.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(j.cssPrefix,"-").concat(Hi.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var JM={found:!1,width:512,height:512};function ZM(t,e){!kE&&!j.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function ff(t,e){var n=e;return e==="fa"&&j.styleDefault!==null&&(e=Si()),new Promise(function(i,r){if(Jn("missingIconAbstract"),n==="fa"){var s=BE(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Bu[e]&&Bu[e][t]){var o=Bu[e][t];return i(hf(o))}ZM(t,e),i(U(U({},JM),{},{icon:j.showMissingIcons&&t?Jn("missingIconAbstract")||{}:{}}))})}var Fy=function(){},df=j.measurePerformance&&Na&&Na.mark&&Na.measure?Na:{mark:Fy,measure:Fy},Vs='FA "6.4.0"',eL=function(e){return df.mark("".concat(Vs," ").concat(e," begins")),function(){return zE(e)}},zE=function(e){df.mark("".concat(Vs," ").concat(e," ends")),df.measure("".concat(Vs," ").concat(e),"".concat(Vs," ").concat(e," begins"),"".concat(Vs," ").concat(e," ends"))},Cp={begin:eL,end:zE},Qa=function(){};function Uy(t){var e=t.getAttribute?t.getAttribute(or):null;return typeof e=="string"}function tL(t){var e=t.getAttribute?t.getAttribute(gp):null,n=t.getAttribute?t.getAttribute(yp):null;return e&&n}function nL(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(j.replacementClass)}function iL(){if(j.autoReplaceSvg===!0)return Xa.replace;var t=Xa[j.autoReplaceSvg];return t||Xa.replace}function rL(t){return Pe.createElementNS("http://www.w3.org/2000/svg",t)}function sL(t){return Pe.createElement(t)}function HE(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,i=n===void 0?t.tag==="svg"?rL:sL:n;if(typeof t=="string")return Pe.createTextNode(t);var r=i(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){r.appendChild(HE(o,{ceFn:i}))}),r}function oL(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Xa={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(HE(r),n)}),n.getAttribute(or)===null&&j.keepOriginalSource){var i=Pe.createComment(oL(n));n.parentNode.replaceChild(i,n)}else n.remove()},nest:function(e){var n=e[0],i=e[1];if(~vp(n).indexOf(j.replacementClass))return Xa.replace(e);var r=new RegExp("".concat(j.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var s=i[0].attributes.class.split(" ").reduce(function(a,c){return c===j.replacementClass||c.match(r)?a.toSvg.push(c):a.toNode.push(c),a},{toNode:[],toSvg:[]});i[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=i.map(function(a){return aa(a)}).join(`
`);n.setAttribute(or,""),n.innerHTML=o}};function Vy(t){t()}function KE(t,e){var n=typeof e=="function"?e:Qa;if(t.length===0)n();else{var i=Vy;j.mutateApproach===uM&&(i=Ci.requestAnimationFrame||Vy),i(function(){var r=iL(),s=Cp.begin("mutate");t.map(r),s(),n()})}}var Sp=!1;function WE(){Sp=!0}function pf(){Sp=!1}var jc=null;function $y(t){if(Ry&&j.observeMutations){var e=t.treeCallback,n=e===void 0?Qa:e,i=t.nodeCallback,r=i===void 0?Qa:i,s=t.pseudoElementsCallback,o=s===void 0?Qa:s,a=t.observeMutationsRoot,c=a===void 0?Pe:a;jc=new Ry(function(l){if(!Sp){var u=Si();Is(l).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!Uy(h.addedNodes[0])&&(j.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&j.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&Uy(h.target)&&~yM.indexOf(h.attributeName))if(h.attributeName==="class"&&tL(h.target)){var f=Zl(vp(h.target)),d=f.prefix,m=f.iconName;h.target.setAttribute(gp,d||u),m&&h.target.setAttribute(yp,m)}else nL(h.target)&&r(h.target)})}}),ni&&jc.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function aL(){jc&&jc.disconnect()}function cL(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(i,r){var s=r.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(i[o]=a.join(":").trim()),i},{})),n}function lL(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"",r=Zl(vp(t));return r.prefix||(r.prefix=Si()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=$M(r.prefix,t.innerText)||wp(r.prefix,af(t.innerText))),!r.iconName&&j.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function uL(t){var e=Is(t.attributes).reduce(function(r,s){return r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r},{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return j.autoA11y&&(n?e["aria-labelledby"]="".concat(j.replacementClass,"-title-").concat(i||Oo()):(e["aria-hidden"]="true",e.focusable="false")),e}function hL(){return{iconName:null,title:null,titleId:null,prefix:null,transform:In,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function By(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=lL(t),i=n.iconName,r=n.prefix,s=n.rest,o=uL(t),a=lf("parseNodeAttributes",{},t),c=e.styleParser?cL(t):[];return U({iconName:i,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:In,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:c,attributes:o}},a)}var fL=ln.styles;function qE(t){var e=j.autoReplaceSvg==="nest"?By(t,{styleParser:!1}):By(t);return~e.extra.classes.indexOf(RE)?Jn("generateLayersText",t,e):Jn("generateSvgReplacementMutation",t,e)}var Ai=new Set;_p.map(function(t){Ai.add("fa-".concat(t))});Object.keys(Ro[Oe]).map(Ai.add.bind(Ai));Object.keys(Ro[ze]).map(Ai.add.bind(Ai));Ai=sa(Ai);function jy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ni)return Promise.resolve();var n=Pe.documentElement.classList,i=function(h){return n.add("".concat(Ny,"-").concat(h))},r=function(h){return n.remove("".concat(Ny,"-").concat(h))},s=j.autoFetchSvg?Ai:_p.map(function(u){return"fa-".concat(u)}).concat(Object.keys(fL));s.includes("fa")||s.push("fa");var o=[".".concat(RE,":not([").concat(or,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(or,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Is(t.querySelectorAll(o))}catch{}if(a.length>0)i("pending"),r("complete");else return Promise.resolve();var c=Cp.begin("onTree"),l=a.reduce(function(u,h){try{var f=qE(h);f&&u.push(f)}catch(d){kE||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise(function(u,h){Promise.all(l).then(function(f){KE(f,function(){i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),c(),u()})}).catch(function(f){c(),h(f)})})}function dL(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;qE(t).then(function(n){n&&KE([n],e)})}function pL(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:uf(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:uf(r||{})),t(i,U(U({},n),{},{mask:r}))}}var mL=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,r=i===void 0?In:i,s=n.symbol,o=s===void 0?!1:s,a=n.mask,c=a===void 0?null:a,l=n.maskId,u=l===void 0?null:l,h=n.title,f=h===void 0?null:h,d=n.titleId,m=d===void 0?null:d,y=n.classes,b=y===void 0?[]:y,_=n.attributes,v=_===void 0?{}:_,E=n.styles,S=E===void 0?{}:E;if(e){var P=e.prefix,q=e.iconName,$=e.icon;return eu(U({type:"icon"},e),function(){return ar("beforeDOMElementCreation",{iconDefinition:e,params:n}),j.autoA11y&&(f?v["aria-labelledby"]="".concat(j.replacementClass,"-title-").concat(m||Oo()):(v["aria-hidden"]="true",v.focusable="false")),Ip({icons:{main:hf($),mask:c?hf(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:P,iconName:q,transform:U(U({},In),r),symbol:o,title:f,maskId:u,titleId:m,extra:{attributes:v,styles:S,classes:b}})})}},gL={mixout:function(){return{icon:pL(mL)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=jy,n.nodeCallback=dL,n}}},provides:function(e){e.i2svg=function(n){var i=n.node,r=i===void 0?Pe:i,s=n.callback,o=s===void 0?function(){}:s;return jy(r,o)},e.generateSvgReplacementMutation=function(n,i){var r=i.iconName,s=i.title,o=i.titleId,a=i.prefix,c=i.transform,l=i.symbol,u=i.mask,h=i.maskId,f=i.extra;return new Promise(function(d,m){Promise.all([ff(r,a),u.iconName?ff(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var b=pp(y,2),_=b[0],v=b[1];d([n,Ip({icons:{main:_,mask:v},prefix:a,iconName:r,transform:c,symbol:l,maskId:h,title:s,titleId:o,extra:f,watchable:!0})])}).catch(m)})},e.generateAbstractIcon=function(n){var i=n.children,r=n.attributes,s=n.main,o=n.transform,a=n.styles,c=Xl(a);c.length>0&&(r.style=c);var l;return bp(o)&&(l=Jn("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),i.push(l||s.icon),{children:i,attributes:r}}}},yL={mixout:function(){return{layer:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.classes,s=r===void 0?[]:r;return eu({type:"layer"},function(){ar("beforeDOMElementCreation",{assembler:n,params:i});var o=[];return n(function(a){Array.isArray(a)?a.map(function(c){o=o.concat(c.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(j.cssPrefix,"-layers")].concat(sa(s)).join(" ")},children:o}]})}}}},_L={mixout:function(){return{counter:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.title,s=r===void 0?null:r,o=i.classes,a=o===void 0?[]:o,c=i.attributes,l=c===void 0?{}:c,u=i.styles,h=u===void 0?{}:u;return eu({type:"counter",content:n},function(){return ar("beforeDOMElementCreation",{content:n,params:i}),XM({content:n.toString(),title:s,extra:{attributes:l,styles:h,classes:["".concat(j.cssPrefix,"-layers-counter")].concat(sa(a))}})})}}}},vL={mixout:function(){return{text:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.transform,s=r===void 0?In:r,o=i.title,a=o===void 0?null:o,c=i.classes,l=c===void 0?[]:c,u=i.attributes,h=u===void 0?{}:u,f=i.styles,d=f===void 0?{}:f;return eu({type:"text",content:n},function(){return ar("beforeDOMElementCreation",{content:n,params:i}),Ly({content:n,transform:U(U({},In),s),title:a,extra:{attributes:h,styles:d,classes:["".concat(j.cssPrefix,"-layers-text")].concat(sa(l))}})})}}},provides:function(e){e.generateLayersText=function(n,i){var r=i.title,s=i.transform,o=i.extra,a=null,c=null;if(CE){var l=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/l,c=u.height/l}return j.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ly({content:n.innerHTML,width:a,height:c,transform:s,title:r,extra:o,watchable:!0})])}}},bL=new RegExp('"',"ug"),zy=[1105920,1112319];function EL(t){var e=t.replace(bL,""),n=PM(e,0),i=n>=zy[0]&&n<=zy[1],r=e.length===2?e[0]===e[1]:!1;return{value:af(r?e[0]:e),isSecondary:i||r}}function Hy(t,e){var n="".concat(lM).concat(e.replace(":","-"));return new Promise(function(i,r){if(t.getAttribute(n)!==null)return i();var s=Is(t.children),o=s.filter(function($){return $.getAttribute(of)===e})[0],a=Ci.getComputedStyle(t,e),c=a.getPropertyValue("font-family").match(pM),l=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),i();if(c&&u!=="none"&&u!==""){var h=a.getPropertyValue("content"),f=~["Sharp"].indexOf(c[2])?ze:Oe,d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?No[f][c[2].toLowerCase()]:mM[f][l],m=EL(h),y=m.value,b=m.isSecondary,_=c[0].startsWith("FontAwesome"),v=wp(d,y),E=v;if(_){var S=BM(y);S.iconName&&S.prefix&&(v=S.iconName,d=S.prefix)}if(v&&!b&&(!o||o.getAttribute(gp)!==d||o.getAttribute(yp)!==E)){t.setAttribute(n,E),o&&t.removeChild(o);var P=hL(),q=P.extra;q.attributes[of]=e,ff(v,d).then(function($){var K=Ip(U(U({},P),{},{icons:{main:$,mask:Tp()},prefix:d,iconName:E,extra:q,watchable:!0})),ye=Pe.createElement("svg");e==="::before"?t.insertBefore(ye,t.firstChild):t.appendChild(ye),ye.outerHTML=K.map(function(Fe){return aa(Fe)}).join(`
`),t.removeAttribute(n),i()}).catch(r)}else i()}else i()})}function wL(t){return Promise.all([Hy(t,"::before"),Hy(t,"::after")])}function TL(t){return t.parentNode!==document.head&&!~hM.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(of)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ky(t){if(ni)return new Promise(function(e,n){var i=Is(t.querySelectorAll("*")).filter(TL).map(wL),r=Cp.begin("searchPseudoElements");WE(),Promise.all(i).then(function(){r(),pf(),e()}).catch(function(){r(),pf(),n()})})}var IL={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ky,n}}},provides:function(e){e.pseudoElements2svg=function(n){var i=n.node,r=i===void 0?Pe:i;j.searchPseudoElements&&Ky(r)}}},Wy=!1,CL={mixout:function(){return{dom:{unwatch:function(){WE(),Wy=!0}}}},hooks:function(){return{bootstrap:function(){$y(lf("mutationObserverCallbacks",{}))},noAuto:function(){aL()},watch:function(n){var i=n.observeMutationsRoot;Wy?pf():$y(lf("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},qy=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,r){var s=r.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return i.flipX=!0,i;if(o&&a==="v")return i.flipY=!0,i;if(a=parseFloat(a),isNaN(a))return i;switch(o){case"grow":i.size=i.size+a;break;case"shrink":i.size=i.size-a;break;case"left":i.x=i.x-a;break;case"right":i.x=i.x+a;break;case"up":i.y=i.y-a;break;case"down":i.y=i.y+a;break;case"rotate":i.rotate=i.rotate+a;break}return i},n)},SL={mixout:function(){return{parse:{transform:function(n){return qy(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-transform");return r&&(n.transform=qy(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var i=n.main,r=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},c="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(c," ").concat(l," ").concat(u)},f={transform:"translate(".concat(o/2*-1," -256)")},d={outer:a,inner:h,path:f};return{tag:"g",attributes:U({},d.outer),children:[{tag:"g",attributes:U({},d.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:U(U({},i.icon.attributes),d.path)}]}]}}}},ju={x:0,y:0,width:"100%",height:"100%"};function Gy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function AL(t){return t.tag==="g"?t.children:[t]}var kL={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-mask"),s=r?Zl(r.split(" ").map(function(o){return o.trim()})):Tp();return s.prefix||(s.prefix=Si()),n.mask=s,n.maskId=i.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var i=n.children,r=n.attributes,s=n.main,o=n.mask,a=n.maskId,c=n.transform,l=s.width,u=s.icon,h=o.width,f=o.icon,d=SM({transform:c,containerWidth:h,iconWidth:l}),m={tag:"rect",attributes:U(U({},ju),{},{fill:"white"})},y=u.children?{children:u.children.map(Gy)}:{},b={tag:"g",attributes:U({},d.inner),children:[Gy(U({tag:u.tag,attributes:U(U({},u.attributes),d.path)},y))]},_={tag:"g",attributes:U({},d.outer),children:[b]},v="mask-".concat(a||Oo()),E="clip-".concat(a||Oo()),S={tag:"mask",attributes:U(U({},ju),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[m,_]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:AL(f)},S]};return i.push(P,{tag:"rect",attributes:U({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(v,")")},ju)}),{children:i,attributes:r}}}},RL={provides:function(e){var n=!1;Ci.matchMedia&&(n=Ci.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:U(U({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=U(U({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:U(U({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:U(U({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:U(U({},o),{},{values:"1;0;1;1;0;1;"})}),i.push(a),i.push({tag:"path",attributes:U(U({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:U(U({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||i.push({tag:"path",attributes:U(U({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:U(U({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},NL={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return n.symbol=s,n}}}},xL=[RM,gL,yL,_L,vL,IL,CL,SL,kL,RL,NL];HM(xL,{mixoutsTo:qt});qt.noAuto;var GE=qt.config,Ln=qt.library;qt.dom;var zc=qt.parse;qt.findIconDefinition;qt.toHtml;var DL=qt.icon;qt.layer;var OL=qt.text;qt.counter;function Yy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function rn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Yy(Object(n),!0).forEach(function(i){xt(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Yy(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Hc(t){return Hc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Hc(t)}function xt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function PL(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function ML(t,e){if(t==null)return{};var n=PL(t,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function mf(t){return LL(t)||FL(t)||UL(t)||VL()}function LL(t){if(Array.isArray(t))return gf(t)}function FL(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function UL(t,e){if(t){if(typeof t=="string")return gf(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return gf(t,e)}}function gf(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function VL(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var $L=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},YE={exports:{}};(function(t){(function(e){var n=function(_,v,E){if(!l(v)||h(v)||f(v)||d(v)||c(v))return v;var S,P=0,q=0;if(u(v))for(S=[],q=v.length;P<q;P++)S.push(n(_,v[P],E));else{S={};for(var $ in v)Object.prototype.hasOwnProperty.call(v,$)&&(S[_($,E)]=n(_,v[$],E))}return S},i=function(_,v){v=v||{};var E=v.separator||"_",S=v.split||/(?=[A-Z])/;return _.split(S).join(E)},r=function(_){return m(_)?_:(_=_.replace(/[\-_\s]+(.)?/g,function(v,E){return E?E.toUpperCase():""}),_.substr(0,1).toLowerCase()+_.substr(1))},s=function(_){var v=r(_);return v.substr(0,1).toUpperCase()+v.substr(1)},o=function(_,v){return i(_,v).toLowerCase()},a=Object.prototype.toString,c=function(_){return typeof _=="function"},l=function(_){return _===Object(_)},u=function(_){return a.call(_)=="[object Array]"},h=function(_){return a.call(_)=="[object Date]"},f=function(_){return a.call(_)=="[object RegExp]"},d=function(_){return a.call(_)=="[object Boolean]"},m=function(_){return _=_-0,_===_},y=function(_,v){var E=v&&"process"in v?v.process:v;return typeof E!="function"?_:function(S,P){return E(S,_,P)}},b={camelize:r,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(_,v){return n(y(r,v),_)},decamelizeKeys:function(_,v){return n(y(o,v),_,v)},pascalizeKeys:function(_,v){return n(y(s,v),_)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=b:e.humps=b})($L)})(YE);var BL=YE.exports,jL=["class","style"];function zL(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),r=BL.camelize(n.slice(0,i)),s=n.slice(i+1).trim();return e[r]=s,e},{})}function HL(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Ap(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var i=(t.children||[]).map(function(c){return Ap(c)}),r=Object.keys(t.attributes||{}).reduce(function(c,l){var u=t.attributes[l];switch(l){case"class":c.class=HL(u);break;case"style":c.style=zL(u);break;default:c.attrs[l]=u}return c},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=ML(n,jL);return sl(t.tag,rn(rn(rn({},e),{},{class:r.class,style:rn(rn({},r.style),o)},r.attrs),a),i)}var QE=!1;try{QE=!0}catch{}function KL(){if(!QE&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function io(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?xt({},t,e):{}}function WL(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},xt(e,"fa-".concat(t.size),t.size!==null),xt(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),xt(e,"fa-pull-".concat(t.pull),t.pull!==null),xt(e,"fa-swap-opacity",t.swapOpacity),xt(e,"fa-bounce",t.bounce),xt(e,"fa-shake",t.shake),xt(e,"fa-beat",t.beat),xt(e,"fa-fade",t.fade),xt(e,"fa-beat-fade",t.beatFade),xt(e,"fa-flash",t.flash),xt(e,"fa-spin-pulse",t.spinPulse),xt(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(i){return n[i]?i:null}).filter(function(i){return i})}function Qy(t){if(t&&Hc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(zc.icon)return zc.icon(t);if(t===null)return null;if(Hc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var XE=Po({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var i=n.attrs,r=ve(function(){return Qy(e.icon)}),s=ve(function(){return io("classes",WL(e))}),o=ve(function(){return io("transform",typeof e.transform=="string"?zc.transform(e.transform):e.transform)}),a=ve(function(){return io("mask",Qy(e.mask))}),c=ve(function(){return DL(r.value,rn(rn(rn(rn({},s.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});qi(c,function(u){if(!u)return KL("Could not find one or more icon(s)",r.value,a.value)},{immediate:!0});var l=ve(function(){return c.value?Ap(c.value.abstract[0],{},i):null});return function(){return l.value}}});Po({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var i=n.slots,r=GE.familyPrefix,s=ve(function(){return["".concat(r,"-layers")].concat(mf(e.fixedWidth?["".concat(r,"-fw")]:[]))});return function(){return sl("div",{class:s.value},i.default?i.default():[])}}});Po({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var i=n.attrs,r=GE.familyPrefix,s=ve(function(){return io("classes",[].concat(mf(e.counter?["".concat(r,"-layers-counter")]:[]),mf(e.position?["".concat(r,"-layers-").concat(e.position)]:[])))}),o=ve(function(){return io("transform",typeof e.transform=="string"?zc.transform(e.transform):e.transform)}),a=ve(function(){var l=OL(e.value.toString(),rn(rn({},o.value),s.value)),u=l.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),c=ve(function(){return Ap(a.value,{},i)});return function(){return c.value}}});const ii=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},qL={__name:"tileFlag",props:{color:{type:String,required:!0},icon:{type:String,required:!0},inverted:{type:Boolean,required:!1,default:()=>!1}},setup(t){const e=t;return X_(n=>({"8cf1e8de":e.color})),(n,i)=>(re(),_e("div",{class:vi(["flag",{inverted:e.inverted}]),style:cs({backgroundColor:n.backgroundColor})},[ht(V(XE),{class:"icon",icon:["fas",e.icon]},null,8,["icon"])],6))}},JE=ii(qL,[["__scopeId","data-v-b423d461"]]),ca=xI("board",()=>{const t=hn("");function e(n){t.value=n}return{selectedTile:t,setSelectedTile:e}});const GL=["src"],YL={class:"boardTileFlags"},QL={__name:"BoardTile",props:{tileData:{type:Object,required:!0},groupsData:{type:Object,required:!1},teamData:{type:Object,required:!1},needVerifying:{type:Boolean,required:!1}},setup(t){const e=t,n=ca();return(i,r)=>{var s,o,a,c;return re(),_e("div",{class:vi(["tile",{isSelected:V(n).selectedTile.id==e.tileData.id&&t.groupsData,isCollected:(o=(s=e.teamData)==null?void 0:s.collected)==null?void 0:o.includes(e.tileData.id),isVerify:(c=(a=e.teamData)==null?void 0:a.verify)==null?void 0:c.includes(e.tileData.id),needVerifying:e.needVerifying,allowHover:!!t.groupsData}])},[Re("img",{src:e.tileData.img||"https://oldschool.runescape.wiki/images/Frog_%28Ruins_of_Camdozaal%29.png?6ae5e"},null,8,GL),Re("div",YL,[e.groupsData?(re(!0),_e(Ke,{key:0},zr(e.groupsData,l=>(re(),Cn(JE,{key:e.tileData.id+l.color,class:vi(["tileFlag","flag-end-"+l.flagEnd]),icon:l.icon,color:i.none,inverted:!0,style:cs({opacity:l.collected.hasOwnProperty(e.tileData.id)?1:0})},null,8,["class","icon","color","style"]))),128)):St("",!0)])],2)}}},ZE=ii(QL,[["__scopeId","data-v-c4a10fdc"]]);const XL={key:0,class:"bingo-board"},JL={__name:"BingoBoard",props:{boardData:{type:Object,required:!0},groupsData:{type:Object,required:!0},teamData:{type:Object,required:!1,default:()=>({name:"all"})},tilesData:{type:Object,required:!0}},setup(t){const e=t;X_(r=>({"0dfb1ee3":e.boardData.settings.width,d0cc78ac:e.boardData.settings.height}));const n=ca(),i=r=>{n.setSelectedTile(r)};return(r,s)=>e.boardData?(re(),_e("main",XL,[(re(!0),_e(Ke,null,zr(e.tilesData,o=>(re(),Cn(ZE,{onClick:a=>i({id:o.id,...o}),key:o.id,tileData:o,groupsData:e.groupsData,teamData:e.teamData,selected:V(n).selectedTile==o.id},null,8,["onClick","tileData","groupsData","teamData","selected"]))),128))])):St("",!0)}},ew=ii(JL,[["__scopeId","data-v-85c10726"]]);const tu=t=>(Zc("data-v-5b987373"),t=t(),el(),t),ZL={key:0},e4=tu(()=>Re("br",null,null,-1)),t4={class:"tooltiptext"},n4=tu(()=>Re("br",null,null,-1)),i4=tu(()=>Re("br",null,null,-1)),r4=tu(()=>Re("br",null,null,-1)),s4={__name:"scoreCard",props:{groupsData:{type:Object,required:!0}},setup(t){const e=t;return(n,i)=>(re(),_e("div",null,[e.groupsData?(re(),_e("ul",ZL,[(re(!0),_e(Ke,null,zr(e.groupsData,(r,s)=>(re(),_e("li",{key:s+t.groupsData,class:"tooltip"},[ht(JE,{color:r.color,class:vi(["tileFlag","flag-end-"+r.flagEnd]),inverted:r.name=="Ahka's Cum Balls",icon:r.icon,style:cs({"--groupColor":r.color,"--width":r.points/750*100*1.5+"px"})},null,8,["color","class","inverted","icon","style"]),Bn(" "+Ot(r.name),1),e4,Re("span",t4,[(re(!0),_e(Ke,null,zr(r.member,o=>(re(),_e("span",{key:o},[Bn(Ot(o),1),n4]))),128))]),Bn(" score: "+Ot(r.points),1),i4,r4]))),128))])):St("",!0)]))}},o4=ii(s4,[["__scopeId","data-v-5b987373"]]),a4={__name:"sidePannel",props:{teamData:{type:Object},boardUUID:{type:String,required:!0}},setup(t){const e=t,n=ca(),i=ra(mr),r=()=>{var s;e.teamData&&((s=e.teamData)!=null&&s.verify.includes(n.selectedTile.id)||(console.log(e.teamData.id),Ir(nn(i,"Boards",e.boardUUID,"Groups",e.teamData.id),{verify:[...e.teamData.verify,n.selectedTile.id]})))};return(s,o)=>(re(),_e(Ke,null,[ht(ZE,{tileData:V(n).selectedTile},null,8,["tileData"]),Re("h2",null,Ot(V(n).selectedTile.id.split("")[0])+", "+Ot(V(n).selectedTile.id.split("")[1]),1),Re("h1",null,Ot(V(n).selectedTile.title),1),Re("p",null,Ot(V(n).selectedTile.description),1),t.teamData?(re(),_e("button",{key:0,class:"btn",onClick:o[0]||(o[0]=ol(a=>r(),["prevent"]))},"Mark Collected")):St("",!0)],64))}};const tw=t=>(Zc("data-v-30ddeebe"),t=t(),el(),t),c4=tw(()=>Re("section",null,null,-1)),l4={class:"main-section"},u4={key:2},h4={style:{"justify-content":"end",display:"flex"}},f4={key:0},d4=["onSubmit"],p4=tw(()=>Re("section",null,null,-1)),m4={__name:"BoardView",setup(t){const e=ca(),n=Ql(),i=dp(),r=ve(()=>n.params.teamCode||"all"),s=ve(()=>n.params.boardUUID||""),o=async()=>{var b;if(r.value!==""){let _={name:"private-board",params:{boardUUID:s.value,teamCode:r.value}};const{data:v}=En(nn(a,"Boards",s.value,"Groups",r.value));v&&((b=v==null?void 0:v.value)==null?void 0:b.name)=="moderator"&&(_.name="moderator"),i.push(_)}},a=ra(mr),{data:c}=En(ns(a,"Boards",s.value,"Groups")),l=En(nn(a,"Boards",s.value)),{data:u}=En(nn(a,`Boards/${s.value}/Groups/${r.value}/`)),h=ve(()=>{var _;let b={};return c&&((_=c==null?void 0:c.value)==null||_.forEach(v=>{v.name!="moderator"&&(b[v.id]={id:v.id,name:v.name,member:v.members,icon:v.icon,color:v.color,points:v.points,flagEnd:v.flagEnd,collected:v.collected,verify:v.verify})})),b||{}}),f=En(ns(a,`Boards/${s.value}/Tiles`)||"nothing"),d=hn(""),m=hn(!1),y=(b,_)=>{console.log(_)};return(b,_)=>{var E,S,P,q;const v=F_("fontAwesomeIcon");return re(),_e(Ke,null,[c4,Re("section",l4,[V(h)?(re(),Cn(o4,{key:0,class:"scoreCard",groupsData:V(h)},null,8,["groupsData"])):St("",!0),V(l)?(re(),Cn(ew,{key:1,boardData:V(l),groupsData:V(h),teamData:V(u),tilesData:V(f),onSetSelectedTile:_[0]||(_[0]=$=>y(b.tile))},null,8,["boardData","groupsData","teamData","tilesData"])):St("",!0),((S=(E=V(l))==null?void 0:E.settings)==null?void 0:S.mode)=="teams"||m.value?(re(),_e("aside",u4,[Re("div",h4,[m.value?(re(),_e("button",{key:0,class:"btn close",onClick:_[1]||(_[1]=()=>{m.value=!m.value,d.value=""})}," ╳ ")):St("",!0)]),((q=(P=V(l))==null?void 0:P.settings)==null?void 0:q.mode)=="teams"?(re(),_e(Ke,{key:0},[V(u)?(re(),_e("p",f4,[ht(v,{class:"icon",icon:["fas",V(u).icon]},null,8,["icon"]),Bn(" "+Ot(V(u).name),1)])):St("",!0),V(u)?St("",!0):(re(),_e("form",{key:1,onSubmit:ol(o,["prevent"])},[Bn(" team code: "),M_(Re("input",{type:"text",name:"teamId","onUpdate:modelValue":_[2]||(_[2]=$=>je(r)?r.value=$:null)},null,512),[[J_,V(r)]])],40,d4))],64)):St("",!0),V(e).selectedTile!=""?(re(),Cn(a4,{key:1,groupsData:V(h),teamData:V(u),boardData:V(l),boardUUID:V(s)},null,8,["groupsData","teamData","boardData","boardUUID"])):St("",!0)])):St("",!0)]),p4],64)}}},Xy=ii(m4,[["__scopeId","data-v-30ddeebe"]]);const g4=t=>(Zc("data-v-f2fc39d9"),t=t(),el(),t),y4=["for"],_4=g4(()=>Re("br",null,null,-1)),v4=["id","checked","onClick"],b4={__name:"moderatorSidePannel",props:{tileData:{type:Object,required:!0},boardUUID:{type:Object,required:!0},groupsData:{type:Object,required:!0},boardData:{type:Object,required:!0}},setup(t){const e=t,n=ra(mr),i=ve(()=>e.tileData),r=({tile:s,group:o})=>{if(console.log(Object.hasOwn(o.collected,s.id)),Object.hasOwn(o.collected,s.id)){let a={...o.collected};delete a[s.id],Ir(nn(n,"Boards",e.boardUUID,"Groups",o.id),{collected:a}),Ir(nn(n,"Boards",e.boardUUID,"Groups",o.id),{points:o.points-s.points})}else{let a={...o.collected};a[s.id]=new Date,console.log(a),Ir(nn(n,"Boards",e.boardUUID,"Groups",o.id),{collected:a}),Ir(nn(n,"Boards",e.boardUUID,"Groups",o.id),{points:o.points+s.points}),o.verify.includes(s.id)&&Ir(nn(n,"Boards",e.boardUUID,"Groups",o.id),{verify:o.verify.filter(c=>c!=s.id)})}};return(s,o)=>e.tileData?(re(),_e("div",{key:e.tileData.id},[Re("h2",null,"{ "+Ot(e.tileData.id.split("")[0])+" , "+Ot(e.tileData.id.split("")[1])+" }",1),Re("ul",null,[(re(!0),_e(Ke,null,zr(e.groupsData,a=>(re(),_e("li",{key:a.id+V(i).id,class:vi({checkThis:a.verify.includes(V(i).id)})},[Re("label",{for:a.id+V(i).id},[Bn(Ot(a.name)+" : "+Ot(a.verify.includes(V(i).id)),1),_4,Bn(" collected: "),(re(),_e("input",{id:a.id+V(i).id,type:"checkbox",key:a.id+V(i).id,checked:a.collected.hasOwnProperty(e.tileData.id),onClick:ol(c=>r({tile:V(i),group:a}),["prevent"])},null,8,v4))],8,y4)],2))),128))])])):St("",!0)}},E4=ii(b4,[["__scopeId","data-v-f2fc39d9"]]);const w4={key:0},T4={__name:"ModeratorView",setup(t){const e=ca(),n=Ql(),i=ve(()=>n.params.teamCode),r=ve(()=>n.params.boardUUID),s=ra(mr),{data:o}=En(ns(s,"Boards",r.value,"Groups")),a=En(nn(s,"Boards",r.value)),{data:c}=En(nn(s,`Boards/${r.value}/Groups/${i.value}/`)),l=ve(()=>{var f;let h={};return o&&((f=o==null?void 0:o.value)==null||f.forEach(d=>{d.name!="moderator"&&(h[d.id]={id:d.id,name:d.name,member:d.members,icon:d.icon,color:d.color,points:d.points,flagEnd:d.flagEnd,collected:d.collected,verify:d.verify})})),h||{}}),{data:u}=En(ns(s,`Boards/${r.value}/Tiles`));return(h,f)=>(re(),_e("section",null,[V(c)&&V(c).name=="moderator"?(re(),Cn(ew,{key:0,boardData:V(a),groupsData:V(l),teamData:V(c),tilesData:V(u)},null,8,["boardData","groupsData","teamData","tilesData"])):St("",!0),Re("aside",null,[V(c)?(re(),_e("p",w4,Ot(V(c).name),1)):St("",!0),(re(),Cn(E4,{tileData:V(e).selectedTile,key:V(e).selectedTile.id,boardUUID:V(r),groupsData:V(l),boardData:V(a)},null,8,["tileData","boardUUID","groupsData","boardData"]))])]))}},I4=ii(T4,[["__scopeId","data-v-4f4abe5e"]]);const C4=["onSubmit"],S4=["disabled"],A4={__name:"HomeView",setup(t){const e=Ql(),n=dp(),i=hn(""),r=()=>{n.push({name:"overview",params:{boardUUID:i.value}})};return(s,o)=>(re(),_e(Ke,null,[Re("form",{onSubmit:ol(r,["prevent"])},[Bn(" Enter your bingo key: "),M_(Re("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=a=>i.value=a)},null,512),[[J_,i.value]]),Re("button",{class:"btn",disabled:i.value==""},"Open Board",8,S4)],40,C4),(re(),Cn(V(bE),{key:V(e).fullPath}))],64))}},k4=ii(A4,[["__scopeId","data-v-f046e3a4"]]);const R4=t=>(Zc("data-v-bf18c5e9"),t=t(),el(),t),N4=R4(()=>Re("h1",null,"boardList:",-1)),x4={key:0},D4=["onClick"],O4={__name:"BoardList",setup(t){const e=ra(mr),n=En(ns(e,"Boards")),i=dp(),r=s=>{i.push({name:"overview",params:{boardUUID:s}})};return(s,o)=>(re(),_e(Ke,null,[N4,(re(),_e("ul",x4,[(re(!0),_e(Ke,null,zr(V(n),a=>(re(),_e("li",{key:a,onClick:c=>r(a.id)},Ot(a.name),9,D4))),128))]))],64))}},P4=ii(O4,[["__scopeId","data-v-bf18c5e9"]]),M4=YP({history:fP(),mode:"hash",routes:[{path:"/",name:"Home",component:k4},{path:"/b/:boardUUID",name:"overview",param:!0,component:Xy},{path:"/boards/",name:"boardOverview",param:!0,component:P4},{path:"/b/:boardUUID/team/:teamCode",name:"private-board",param:!0,component:Xy},{path:"/b/:boardUUID/m/:teamCode",name:"moderator",param:!0,component:I4}]});var L4={prefix:"fas",iconName:"spaghetti-monster-flying",icon:[640,512,["pastafarianism"],"f67b","M208 64a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 0c0 16.2-6 31.1-16 42.3l15.6 31.2c18.7-6 39.9-9.5 64.4-9.5s45.8 3.5 64.4 9.5L400 106.3C390 95.1 384 80.2 384 64c0-35.3 28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64c-1.7 0-3.4-.1-5.1-.2L427.8 158c21.1 13.6 37.7 30.2 51.4 46.4c7.1 8.3 13.5 16.6 19.3 24l1.4 1.8c6.3 8.1 11.6 14.8 16.7 20.4C527.3 262.3 532.7 264 536 264c2.5 0 4.3-.6 7.1-3.3c3.7-3.5 7.1-8.8 12.5-17.4l.6-.9c4.6-7.4 11-17.6 19.4-25.7c9.7-9.3 22.9-16.7 40.4-16.7c13.3 0 24 10.7 24 24s-10.7 24-24 24c-2.5 0-4.3 .6-7.1 3.3c-3.7 3.5-7.1 8.8-12.5 17.4l-.6 .9c-4.6 7.4-11 17.6-19.4 25.7c-9.7 9.3-22.9 16.7-40.4 16.7c-18.5 0-32.9-8.5-44.3-18.6c-3.1 4-6.6 8.3-10.5 12.7c1.4 4.3 2.8 8.5 4 12.5c.9 3 1.8 5.8 2.6 8.6c3 9.8 5.5 18.2 8.6 25.9c3.9 9.8 7.4 15.4 10.8 18.5c2.6 2.4 5.9 4.3 12.8 4.3c8.7 0 16.9-4.2 33.7-13.2c15-8 35.7-18.8 62.3-18.8c13.3 0 24 10.7 24 24s-10.7 24-24 24c-13.4 0-24.7 5.2-39.7 13.2c-1 .6-2.1 1.1-3.2 1.7C559.9 414 541.4 424 520 424c-18.4 0-33.6-6.1-45.5-17.2c-11.1-10.3-17.9-23.7-22.7-36c-3.6-9-6.7-19.1-9.5-28.5c-16.4 12.3-36.1 23.6-58.9 31.3c3.6 10.8 8.4 23.5 14.4 36.2c7.5 15.9 16.2 30.4 25.8 40.5C433 460.5 441.2 464 448 464c13.3 0 24 10.7 24 24s-10.7 24-24 24c-25.2 0-45-13.5-59.5-28.8c-14.5-15.4-25.7-34.9-34.2-53c-8-17-14.1-33.8-18.3-46.9c-5.2 .4-10.6 .6-16 .6s-10.8-.2-16-.6c-4.2 13-10.3 29.9-18.3 46.9c-8.5 18.1-19.8 37.6-34.2 53C237 498.5 217.2 512 192 512c-13.3 0-24-10.7-24-24s10.7-24 24-24c6.8 0 15-3.5 24.5-13.7c9.5-10.1 18.3-24.6 25.8-40.5c5.9-12.6 10.7-25.4 14.4-36.2c-22.8-7.7-42.5-19-58.9-31.3c-2.9 9.4-6 19.5-9.5 28.5c-4.8 12.2-11.6 25.6-22.7 36C153.6 417.9 138.4 424 120 424c-21.4 0-39.9-10-53.1-17.1l0 0c-1.1-.6-2.2-1.2-3.2-1.7c-15-8-26.3-13.2-39.7-13.2c-13.3 0-24-10.7-24-24s10.7-24 24-24c26.6 0 47.3 10.8 62.3 18.8c16.8 9 25 13.2 33.7 13.2c6.8 0 10.2-1.9 12.8-4.3c3.4-3.2 7-8.8 10.8-18.5c3-7.7 5.6-16.1 8.6-25.9c.8-2.7 1.7-5.6 2.6-8.6c1.2-4 2.6-8.2 4-12.5c-3.9-4.5-7.4-8.8-10.5-12.7C136.9 303.5 122.5 312 104 312c-17.5 0-30.7-7.4-40.4-16.7c-8.4-8.1-14.8-18.3-19.4-25.7l-.6-.9c-5.4-8.6-8.8-13.9-12.5-17.4c-2.8-2.7-4.6-3.3-7.1-3.3c-13.3 0-24-10.7-24-24s10.7-24 24-24c17.5 0 30.7 7.4 40.4 16.7c8.4 8.1 14.8 18.3 19.4 25.7l.6 .9c5.4 8.6 8.8 13.9 12.5 17.4c2.8 2.7 4.6 3.3 7.1 3.3c3.3 0 8.7-1.7 19.4-13.4c5.1-5.6 10.4-12.3 16.7-20.4l1.4-1.8c5.8-7.4 12.2-15.7 19.3-24c13.8-16.2 30.3-32.8 51.4-46.4l-15.1-30.2c-1.7 .1-3.4 .2-5.1 .2c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64zm208 0a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z"]},F4={prefix:"fas",iconName:"spoon",icon:[512,512,[129348,61873,"utensil-spoon"],"f2e5","M245.8 220.9c-14.5-17.6-21.8-39.2-21.8-60.8C224 80 320 0 416 0c53 0 96 43 96 96c0 96-80 192-160.2 192c-21.6 0-43.2-7.3-60.8-21.8L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L245.8 220.9z"]},U4={prefix:"fas",iconName:"paw",icon:[512,512,[],"f1b0","M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"]},V4={prefix:"fas",iconName:"crow",icon:[640,512,[],"f520","M456 0c-48.6 0-88 39.4-88 88v29.2L12.5 390.6c-14 10.8-16.6 30.9-5.9 44.9s30.9 16.6 44.9 5.9L126.1 384H259.2l46.6 113.1c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3L311.1 384H352c1.1 0 2.1 0 3.2 0l46.6 113.2c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3l-42-102C484.9 354.1 544 280 544 192V128v-8l80.5-20.1c8.6-2.1 13.8-10.8 11.6-19.4C629 52 603.4 32 574 32H523.9C507.7 12.5 483.3 0 456 0zm0 64a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},$4={prefix:"fas",iconName:"frog",icon:[576,512,[],"f52e","M368 32c41.7 0 75.9 31.8 79.7 72.5l85.6 26.3c25.4 7.8 42.8 31.3 42.8 57.9c0 21.8-11.7 41.9-30.7 52.7L400.8 323.5 493.3 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H480c-8.5 0-16.6-3.4-22.6-9.4L346.9 360.2c11.7-36 3.2-77.1-25.4-105.7c-40.6-40.6-106.3-40.6-146.9-.1L101 324.4c-6.4 6.1-6.7 16.2-.6 22.6s16.2 6.6 22.6 .6l73.8-70.2 .1-.1 .1-.1c3.5-3.5 7.3-6.6 11.3-9.2c27.9-18.5 65.9-15.4 90.5 9.2c24.7 24.7 27.7 62.9 9 90.9c-2.6 3.8-5.6 7.5-9 10.9L261.8 416H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-35.3 0-64-28.7-64-64C0 249.6 127 112.9 289.3 97.5C296.2 60.2 328.8 32 368 32zm0 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]},B4={prefix:"fas",iconName:"feather-pointed",icon:[512,512,["feather-alt"],"f56b","M278.5 215.6L23 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l74.8-74.8c7.4 4.6 15.3 8.2 23.8 10.5C200.3 452.8 270 454.5 338 409.4c12.2-8.1 5.8-25.4-8.8-25.4l-16.1 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l97.7-29.3c3.4-1 6.4-3.1 8.4-6.1c4.4-6.4 8.6-12.9 12.6-19.6c6.2-10.3-1.5-23-13.5-23l-38.6 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l80.9-24.3c4.6-1.4 8.4-4.8 10.2-9.3C494.5 163 507.8 86.1 511.9 36.8c.8-9.9-3-19.6-10-26.6s-16.7-10.8-26.6-10C391.5 7 228.5 40.5 137.4 131.6C57.3 211.7 56.7 302.3 71.3 356.4c2.1 7.9 12 9.6 17.8 3.8L253.6 195.8c6.2-6.2 16.4-6.2 22.6 0c5.4 5.4 6.1 13.6 2.2 19.8z"]},j4={prefix:"fas",iconName:"dove",icon:[512,512,[128330],"f4ba","M160.8 96.5c14 17 31 30.9 49.5 42.2c25.9 15.8 53.7 25.9 77.7 31.6V138.8C265.8 108.5 250 71.5 248.6 28c-.4-11.3-7.5-21.5-18.4-24.4c-7.6-2-15.8-.2-21 5.8c-13.3 15.4-32.7 44.6-48.4 87.2zM320 144v30.6l0 0v1.3l0 0 0 32.1c-60.8-5.1-185-43.8-219.3-157.2C97.4 40 87.9 32 76.6 32c-7.9 0-15.3 3.9-18.8 11C46.8 65.9 32 112.1 32 176c0 116.9 80.1 180.5 118.4 202.8L11.8 416.6C6.7 418 2.6 421.8 .9 426.8s-.8 10.6 2.3 14.8C21.7 466.2 77.3 512 160 512c3.6 0 7.2-1.2 10-3.5L245.6 448H320c88.4 0 160-71.6 160-160V128l29.9-44.9c1.3-2 2.1-4.4 2.1-6.8c0-6.8-5.5-12.3-12.3-12.3H400c-44.2 0-80 35.8-80 80zm80-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32z"]},z4={prefix:"fas",iconName:"rocket",icon:[512,512,[],"f135","M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"]},H4={prefix:"fas",iconName:"disease",icon:[512,512,[],"f7fa","M236.4 61.4L227 75.5c-21.3 32-59.4 48.5-97.3 42.1l-59.6-9.9C33.4 101.6 0 129.9 .1 167.1c0 15.9 6.4 31.2 17.6 42.5l29.2 29.2c11 11 17.2 25.9 17.2 41.5c0 15.8-6.4 30.9-17.7 42L33.3 335.1C22.2 345.9 16 360.7 16 376.2c0 36.8 34.1 64.2 70.1 56.2l62.3-13.8c7.7-1.7 15.7-2.6 23.6-2.6h10c27.2 0 53.7 9.3 75 26.3L287.8 467c10.5 8.4 23.6 13 37 13c32.7 0 59.3-26.5 59.3-59.3l0-25.2c0-34.9 21.4-66.2 53.9-78.8l36.9-14.3c22.4-8.7 37.2-30.3 37.2-54.3c0-28.1-20.1-52.3-47.8-57.3l-28-5.1c-36.5-6.7-65.4-34.5-73.6-70.7l-7.1-31.5C348.9 53.4 322.1 32 291.3 32c-22 0-42.6 11-54.9 29.4zM160 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm0 80a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},K4={prefix:"fas",iconName:"hippo",icon:[640,512,[129435],"f6ed","M407 47c9.4-9.4 24.6-9.4 33.9 0l17.2 17.2c1.9-.1 3.9-.2 5.8-.2h32c11.2 0 21.9 2.3 31.6 6.5L543 55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L564 101.9c7.6 12.2 12 26.7 12 42.1c0 10.2 7.4 18.8 16.7 23c27.9 12.5 47.3 40.5 47.3 73c0 26.2-12.6 49.4-32 64v32c0 8.8-7.2 16-16 16H560c-8.8 0-16-7.2-16-16V320H480v16c0 8.8-7.2 16-16 16H432c-8.8 0-16-7.2-16-16V318.4c-11.8-2.4-22.7-7.4-32-14.4c-1.5-1.1-2.9-2.3-4.3-3.5c-17-14.7-27.7-36.4-27.7-60.5c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 44.7 26.2 83.2 64 101.2V352c0 17.7 14.3 32 32 32h32v64c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V372c-19.8 7.7-41.4 12-64 12s-44.2-4.3-64-12v76c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V329.1L45.9 369.7c-5.4 12.1-19.6 17.6-31.7 12.2S-3.3 362.4 2.1 350.3L24 300.9c5.3-11.9 8-24.7 8-37.7C32 155.7 117.2 68 223.8 64.1l.2-.1h7.2H256h32c41.7 0 83.4 12.1 117.2 25.7c1.7-1.8 3.5-3.6 5.3-5.2L407 81c-9.4-9.4-9.4-24.6 0-33.9zm73 185a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm88 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM480 144a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"]};Ln.add(z4);Ln.add(L4);Ln.add(U4);Ln.add(K4);Ln.add(V4);Ln.add($4);Ln.add(B4);Ln.add(H4);Ln.add(j4);Ln.add(F4);const la=TI(JP);la.use(SI());la.use(M4);la.use(q2,{firebaseApp:mr});la.component("font-awesome-icon",XE);la.mount("#app");
