(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function gf(t,e){const n=Object.create(null),i=t.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function Po(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Ze(i)?Xw(i):Po(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(Ze(t))return t;if(Ue(t))return t}}const Gw=/;(?![^(]*\))/g,Yw=/:([^]+)/,Qw=/\/\*.*?\*\//gs;function Xw(t){const e={};return t.replace(Qw,"").split(Gw).forEach(n=>{if(n){const i=n.split(Yw);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function jn(t){let e="";if(Ze(t))e=t;else if(ne(t))for(let n=0;n<t.length;n++){const i=jn(t[n]);i&&(e+=i+" ")}else if(Ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Jw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Zw=gf(Jw);function Xy(t){return!!t||t===""}const Bt=t=>Ze(t)?t:t==null?"":ne(t)||Ue(t)&&(t.toString===t_||!re(t.toString))?JSON.stringify(t,Jy,2):String(t),Jy=(t,e)=>e&&e.__v_isRef?Jy(t,e.value):Dr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:Zy(e)?{[`Set(${e.size})`]:[...e.values()]}:Ue(e)&&!ne(e)&&!n_(e)?String(e):e,Ne={},xr=[],un=()=>{},eE=()=>!1,tE=/^on[^a-z]/,Kc=t=>tE.test(t),yf=t=>t.startsWith("onUpdate:"),xt=Object.assign,_f=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},nE=Object.prototype.hasOwnProperty,ge=(t,e)=>nE.call(t,e),ne=Array.isArray,Dr=t=>Wc(t)==="[object Map]",Zy=t=>Wc(t)==="[object Set]",re=t=>typeof t=="function",Ze=t=>typeof t=="string",vf=t=>typeof t=="symbol",Ue=t=>t!==null&&typeof t=="object",e_=t=>Ue(t)&&re(t.then)&&re(t.catch),t_=Object.prototype.toString,Wc=t=>t_.call(t),iE=t=>Wc(t).slice(8,-1),n_=t=>Wc(t)==="[object Object]",bf=t=>Ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Va=gf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},rE=/-(\w)/g,An=qc(t=>t.replace(rE,(e,n)=>n?n.toUpperCase():"")),sE=/\B([A-Z])/g,as=qc(t=>t.replace(sE,"-$1").toLowerCase()),Gc=qc(t=>t.charAt(0).toUpperCase()+t.slice(1)),tu=qc(t=>t?`on${Gc(t)}`:""),io=(t,e)=>!Object.is(t,e),$a=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ja=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ju=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let xp;const oE=()=>xp||(xp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let $t;class i_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=$t,!e&&$t&&(this.index=($t.scopes||($t.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=$t;try{return $t=this,e()}finally{$t=n}}}on(){$t=this}off(){$t=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function aE(t){return new i_(t)}function cE(t,e=$t){e&&e.active&&e.effects.push(t)}function r_(){return $t}function lE(t){$t&&$t.cleanups.push(t)}const wf=t=>{const e=new Set(t);return e.w=0,e.n=0,e},s_=t=>(t.w&gi)>0,o_=t=>(t.n&gi)>0,uE=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=gi},hE=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];s_(r)&&!o_(r)?r.delete(t):e[n++]=r,r.w&=~gi,r.n&=~gi}e.length=n}},zu=new WeakMap;let Os=0,gi=1;const Hu=30;let nn;const Ki=Symbol(""),Ku=Symbol("");class Ef{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,cE(this,i)}run(){if(!this.active)return this.fn();let e=nn,n=ui;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=nn,nn=this,ui=!0,gi=1<<++Os,Os<=Hu?uE(this):Dp(this),this.fn()}finally{Os<=Hu&&hE(this),gi=1<<--Os,nn=this.parent,ui=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){nn===this?this.deferStop=!0:this.active&&(Dp(this),this.onStop&&this.onStop(),this.active=!1)}}function Dp(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let ui=!0;const a_=[];function cs(){a_.push(ui),ui=!1}function ls(){const t=a_.pop();ui=t===void 0?!0:t}function Ft(t,e,n){if(ui&&nn){let i=zu.get(t);i||zu.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=wf()),c_(r)}}function c_(t,e){let n=!1;Os<=Hu?o_(t)||(t.n|=gi,n=!s_(t)):n=!t.has(nn),n&&(t.add(nn),nn.deps.push(t))}function zn(t,e,n,i,r,s){const o=zu.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ne(t)){const c=Number(i);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ne(t)?bf(n)&&a.push(o.get("length")):(a.push(o.get(Ki)),Dr(t)&&a.push(o.get(Ku)));break;case"delete":ne(t)||(a.push(o.get(Ki)),Dr(t)&&a.push(o.get(Ku)));break;case"set":Dr(t)&&a.push(o.get(Ki));break}if(a.length===1)a[0]&&Wu(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Wu(wf(c))}}function Wu(t,e){const n=ne(t)?t:[...t];for(const i of n)i.computed&&Op(i);for(const i of n)i.computed||Op(i)}function Op(t,e){(t!==nn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const fE=gf("__proto__,__v_isRef,__isVue"),l_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(vf)),dE=Tf(),pE=Tf(!1,!0),mE=Tf(!0),Pp=gE();function gE(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=ve(this);for(let s=0,o=this.length;s<o;s++)Ft(i,"get",s+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(ve)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){cs();const i=ve(this)[e].apply(this,n);return ls(),i}}),t}function yE(t){const e=ve(this);return Ft(e,"has",t),e.hasOwnProperty(t)}function Tf(t=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(t?e?OE:p_:e?d_:f_).get(i))return i;const o=ne(i);if(!t){if(o&&ge(Pp,r))return Reflect.get(Pp,r,s);if(r==="hasOwnProperty")return yE}const a=Reflect.get(i,r,s);return(vf(r)?l_.has(r):fE(r))||(t||Ft(i,"get",r),e)?a:ut(a)?o&&bf(r)?a:a.value:Ue(a)?t?m_(a):Mo(a):a}}const _E=u_(),vE=u_(!0);function u_(t=!1){return function(n,i,r,s){let o=n[i];if(zr(o)&&ut(o)&&!ut(r))return!1;if(!t&&(!Za(r)&&!zr(r)&&(o=ve(o),r=ve(r)),!ne(n)&&ut(o)&&!ut(r)))return o.value=r,!0;const a=ne(n)&&bf(i)?Number(i)<n.length:ge(n,i),c=Reflect.set(n,i,r,s);return n===ve(s)&&(a?io(r,o)&&zn(n,"set",i,r):zn(n,"add",i,r)),c}}function bE(t,e){const n=ge(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&zn(t,"delete",e,void 0),i}function wE(t,e){const n=Reflect.has(t,e);return(!vf(e)||!l_.has(e))&&Ft(t,"has",e),n}function EE(t){return Ft(t,"iterate",ne(t)?"length":Ki),Reflect.ownKeys(t)}const h_={get:dE,set:_E,deleteProperty:bE,has:wE,ownKeys:EE},TE={get:mE,set(t,e){return!0},deleteProperty(t,e){return!0}},IE=xt({},h_,{get:pE,set:vE}),If=t=>t,Yc=t=>Reflect.getPrototypeOf(t);function ha(t,e,n=!1,i=!1){t=t.__v_raw;const r=ve(t),s=ve(e);n||(e!==s&&Ft(r,"get",e),Ft(r,"get",s));const{has:o}=Yc(r),a=i?If:n?kf:ro;if(o.call(r,e))return a(t.get(e));if(o.call(r,s))return a(t.get(s));t!==r&&t.get(e)}function fa(t,e=!1){const n=this.__v_raw,i=ve(n),r=ve(t);return e||(t!==r&&Ft(i,"has",t),Ft(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function da(t,e=!1){return t=t.__v_raw,!e&&Ft(ve(t),"iterate",Ki),Reflect.get(t,"size",t)}function Mp(t){t=ve(t);const e=ve(this);return Yc(e).has.call(e,t)||(e.add(t),zn(e,"add",t,t)),this}function Lp(t,e){e=ve(e);const n=ve(this),{has:i,get:r}=Yc(n);let s=i.call(n,t);s||(t=ve(t),s=i.call(n,t));const o=r.call(n,t);return n.set(t,e),s?io(e,o)&&zn(n,"set",t,e):zn(n,"add",t,e),this}function Fp(t){const e=ve(this),{has:n,get:i}=Yc(e);let r=n.call(e,t);r||(t=ve(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&zn(e,"delete",t,void 0),s}function Up(){const t=ve(this),e=t.size!==0,n=t.clear();return e&&zn(t,"clear",void 0,void 0),n}function pa(t,e){return function(i,r){const s=this,o=s.__v_raw,a=ve(o),c=e?If:t?kf:ro;return!t&&Ft(a,"iterate",Ki),o.forEach((l,u)=>i.call(r,c(l),c(u),s))}}function ma(t,e,n){return function(...i){const r=this.__v_raw,s=ve(r),o=Dr(s),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...i),u=n?If:e?kf:ro;return!e&&Ft(s,"iterate",c?Ku:Ki),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function ri(t){return function(...e){return t==="delete"?!1:this}}function CE(){const t={get(s){return ha(this,s)},get size(){return da(this)},has:fa,add:Mp,set:Lp,delete:Fp,clear:Up,forEach:pa(!1,!1)},e={get(s){return ha(this,s,!1,!0)},get size(){return da(this)},has:fa,add:Mp,set:Lp,delete:Fp,clear:Up,forEach:pa(!1,!0)},n={get(s){return ha(this,s,!0)},get size(){return da(this,!0)},has(s){return fa.call(this,s,!0)},add:ri("add"),set:ri("set"),delete:ri("delete"),clear:ri("clear"),forEach:pa(!0,!1)},i={get(s){return ha(this,s,!0,!0)},get size(){return da(this,!0)},has(s){return fa.call(this,s,!0)},add:ri("add"),set:ri("set"),delete:ri("delete"),clear:ri("clear"),forEach:pa(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=ma(s,!1,!1),n[s]=ma(s,!0,!1),e[s]=ma(s,!1,!0),i[s]=ma(s,!0,!0)}),[t,n,e,i]}const[SE,AE,kE,RE]=CE();function Cf(t,e){const n=e?t?RE:kE:t?AE:SE;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(ge(n,r)&&r in i?n:i,r,s)}const NE={get:Cf(!1,!1)},xE={get:Cf(!1,!0)},DE={get:Cf(!0,!1)},f_=new WeakMap,d_=new WeakMap,p_=new WeakMap,OE=new WeakMap;function PE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ME(t){return t.__v_skip||!Object.isExtensible(t)?0:PE(iE(t))}function Mo(t){return zr(t)?t:Sf(t,!1,h_,NE,f_)}function LE(t){return Sf(t,!1,IE,xE,d_)}function m_(t){return Sf(t,!0,TE,DE,p_)}function Sf(t,e,n,i,r){if(!Ue(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=ME(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function Or(t){return zr(t)?Or(t.__v_raw):!!(t&&t.__v_isReactive)}function zr(t){return!!(t&&t.__v_isReadonly)}function Za(t){return!!(t&&t.__v_isShallow)}function g_(t){return Or(t)||zr(t)}function ve(t){const e=t&&t.__v_raw;return e?ve(e):t}function Af(t){return Ja(t,"__v_skip",!0),t}const ro=t=>Ue(t)?Mo(t):t,kf=t=>Ue(t)?m_(t):t;function y_(t){ui&&nn&&(t=ve(t),c_(t.dep||(t.dep=wf())))}function __(t,e){t=ve(t);const n=t.dep;n&&Wu(n)}function ut(t){return!!(t&&t.__v_isRef===!0)}function Tt(t){return b_(t,!1)}function v_(t){return b_(t,!0)}function b_(t,e){return ut(t)?t:new FE(t,e)}class FE{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ve(e),this._value=n?e:ro(e)}get value(){return y_(this),this._value}set value(e){const n=this.__v_isShallow||Za(e)||zr(e);e=n?e:ve(e),io(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ro(e),__(this))}}function D(t){return ut(t)?t.value:t}const UE={get:(t,e,n)=>D(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return ut(r)&&!ut(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function w_(t){return Or(t)?t:new Proxy(t,UE)}var E_;class VE{constructor(e,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[E_]=!1,this._dirty=!0,this.effect=new Ef(e,()=>{this._dirty||(this._dirty=!0,__(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=ve(this);return y_(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}E_="__v_isReadonly";function $E(t,e,n=!1){let i,r;const s=re(t);return s?(i=t,r=un):(i=t.get,r=t.set),new VE(i,r,s||!r,n)}function hi(t,e,n,i){let r;try{r=i?t(...i):t()}catch(s){Qc(s,e,n)}return r}function hn(t,e,n,i){if(re(t)){const s=hi(t,e,n,i);return s&&e_(s)&&s.catch(o=>{Qc(o,e,n)}),s}const r=[];for(let s=0;s<t.length;s++)r.push(hn(t[s],e,n,i));return r}function Qc(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){hi(c,null,10,[t,o,a]);return}}BE(t,n,r,i)}function BE(t,e,n,i=!0){console.error(t)}let so=!1,qu=!1;const vt=[];let bn=0;const Pr=[];let Fn=null,Pi=0;const T_=Promise.resolve();let Rf=null;function I_(t){const e=Rf||T_;return t?e.then(this?t.bind(this):t):e}function jE(t){let e=bn+1,n=vt.length;for(;e<n;){const i=e+n>>>1;oo(vt[i])<t?e=i+1:n=i}return e}function Nf(t){(!vt.length||!vt.includes(t,so&&t.allowRecurse?bn+1:bn))&&(t.id==null?vt.push(t):vt.splice(jE(t.id),0,t),C_())}function C_(){!so&&!qu&&(qu=!0,Rf=T_.then(A_))}function zE(t){const e=vt.indexOf(t);e>bn&&vt.splice(e,1)}function HE(t){ne(t)?Pr.push(...t):(!Fn||!Fn.includes(t,t.allowRecurse?Pi+1:Pi))&&Pr.push(t),C_()}function Vp(t,e=so?bn+1:0){for(;e<vt.length;e++){const n=vt[e];n&&n.pre&&(vt.splice(e,1),e--,n())}}function S_(t){if(Pr.length){const e=[...new Set(Pr)];if(Pr.length=0,Fn){Fn.push(...e);return}for(Fn=e,Fn.sort((n,i)=>oo(n)-oo(i)),Pi=0;Pi<Fn.length;Pi++)Fn[Pi]();Fn=null,Pi=0}}const oo=t=>t.id==null?1/0:t.id,KE=(t,e)=>{const n=oo(t)-oo(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function A_(t){qu=!1,so=!0,vt.sort(KE);const e=un;try{for(bn=0;bn<vt.length;bn++){const n=vt[bn];n&&n.active!==!1&&hi(n,null,14)}}finally{bn=0,vt.length=0,S_(),so=!1,Rf=null,(vt.length||Pr.length)&&A_()}}function WE(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Ne;let r=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=i[u]||Ne;f&&(r=n.map(d=>Ze(d)?d.trim():d)),h&&(r=n.map(ju))}let a,c=i[a=tu(e)]||i[a=tu(An(e))];!c&&s&&(c=i[a=tu(as(e))]),c&&hn(c,t,6,r);const l=i[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,hn(l,t,6,r)}}function k_(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!re(t)){const c=l=>{const u=k_(l,e,!0);u&&(a=!0,xt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!a?(Ue(t)&&i.set(t,null),null):(ne(s)?s.forEach(c=>o[c]=null):xt(o,s),Ue(t)&&i.set(t,o),o)}function Xc(t,e){return!t||!Kc(e)?!1:(e=e.slice(2).replace(/Once$/,""),ge(t,e[0].toLowerCase()+e.slice(1))||ge(t,as(e))||ge(t,e))}let jt=null,Jc=null;function ec(t){const e=jt;return jt=t,Jc=t&&t.type.__scopeId||null,e}function us(t){Jc=t}function hs(){Jc=null}function qE(t,e=jt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Gp(-1);const s=ec(e);let o;try{o=t(...r)}finally{ec(s),i._d&&Gp(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function nu(t){const{type:e,vnode:n,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:d,ctx:m,inheritAttrs:y}=t;let b,_;const v=ec(t);try{if(n.shapeFlag&4){const I=r||i;b=vn(u.call(I,I,h,s,d,f,m)),_=c}else{const I=e;b=vn(I.length>1?I(s,{attrs:c,slots:a,emit:l}):I(s,null)),_=e.props?c:GE(c)}}catch(I){Bs.length=0,Qc(I,t,1),b=$e(Ji)}let w=b;if(_&&y!==!1){const I=Object.keys(_),{shapeFlag:F}=w;I.length&&F&7&&(o&&I.some(yf)&&(_=YE(_,o)),w=Kr(w,_))}return n.dirs&&(w=Kr(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),b=w,ec(v),b}const GE=t=>{let e;for(const n in t)(n==="class"||n==="style"||Kc(n))&&((e||(e={}))[n]=t[n]);return e},YE=(t,e)=>{const n={};for(const i in t)(!yf(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function QE(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return i?$p(i,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!Xc(l,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?$p(i,o,l):!0:!!o;return!1}function $p(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!Xc(n,s))return!0}return!1}function XE({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const JE=t=>t.__isSuspense;function ZE(t,e){e&&e.pendingBranch?ne(t)?e.effects.push(...t):e.effects.push(t):HE(t)}function Ba(t,e){if(Ke){let n=Ke.provides;const i=Ke.parent&&Ke.parent.provides;i===n&&(n=Ke.provides=Object.create(i)),n[t]=e}}function Ht(t,e,n=!1){const i=Ke||jt;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&re(e)?e.call(i.proxy):e}}function eT(t,e){return xf(t,null,{flush:"post"})}const ga={};function Mr(t,e,n){return xf(t,e,n)}function xf(t,e,{immediate:n,deep:i,flush:r,onTrack:s,onTrigger:o}=Ne){const a=r_()===(Ke==null?void 0:Ke.scope)?Ke:null;let c,l=!1,u=!1;if(ut(t)?(c=()=>t.value,l=Za(t)):Or(t)?(c=()=>t,i=!0):ne(t)?(u=!0,l=t.some(w=>Or(w)||Za(w)),c=()=>t.map(w=>{if(ut(w))return w.value;if(Or(w))return Fi(w);if(re(w))return hi(w,a,2)})):re(t)?e?c=()=>hi(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),hn(t,a,3,[f])}:c=un,e&&i){const w=c;c=()=>Fi(w())}let h,f=w=>{h=_.onStop=()=>{hi(w,a,4)}},d;if(co)if(f=un,e?n&&hn(e,a,3,[c(),u?[]:void 0,f]):c(),r==="sync"){const w=HT();d=w.__watcherHandles||(w.__watcherHandles=[])}else return un;let m=u?new Array(t.length).fill(ga):ga;const y=()=>{if(_.active)if(e){const w=_.run();(i||l||(u?w.some((I,F)=>io(I,m[F])):io(w,m)))&&(h&&h(),hn(e,a,3,[w,m===ga?void 0:u&&m[0]===ga?[]:m,f]),m=w)}else _.run()};y.allowRecurse=!!e;let b;r==="sync"?b=y:r==="post"?b=()=>Pt(y,a&&a.suspense):(y.pre=!0,a&&(y.id=a.uid),b=()=>Nf(y));const _=new Ef(c,b);e?n?y():m=_.run():r==="post"?Pt(_.run.bind(_),a&&a.suspense):_.run();const v=()=>{_.stop(),a&&a.scope&&_f(a.scope.effects,_)};return d&&d.push(v),v}function tT(t,e,n){const i=this.proxy,r=Ze(t)?t.includes(".")?R_(i,t):()=>i[t]:t.bind(i,i);let s;re(e)?s=e:(s=e.handler,n=e);const o=Ke;Wr(this);const a=xf(r,s.bind(i),n);return o?Wr(o):qi(),a}function R_(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function Fi(t,e){if(!Ue(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ut(t))Fi(t.value,e);else if(ne(t))for(let n=0;n<t.length;n++)Fi(t[n],e);else if(Zy(t)||Dr(t))t.forEach(n=>{Fi(n,e)});else if(n_(t))for(const n in t)Fi(t[n],e);return t}function Lo(t){return re(t)?{setup:t,name:t.name}:t}const ja=t=>!!t.type.__asyncLoader,N_=t=>t.type.__isKeepAlive;function nT(t,e){x_(t,"a",e)}function iT(t,e){x_(t,"da",e)}function x_(t,e,n=Ke){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Zc(e,i,n),n){let r=n.parent;for(;r&&r.parent;)N_(r.parent.vnode)&&rT(i,e,n,r),r=r.parent}}function rT(t,e,n,i){const r=Zc(e,t,i,!0);Df(()=>{_f(i[e],r)},n)}function Zc(t,e,n=Ke,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;cs(),Wr(n);const a=hn(e,n,t,o);return qi(),ls(),a});return i?r.unshift(s):r.push(s),s}}const Jn=t=>(e,n=Ke)=>(!co||t==="sp")&&Zc(t,(...i)=>e(...i),n),sT=Jn("bm"),D_=Jn("m"),oT=Jn("bu"),aT=Jn("u"),cT=Jn("bum"),Df=Jn("um"),O_=Jn("sp"),lT=Jn("rtg"),uT=Jn("rtc");function hT(t,e=Ke){Zc("ec",t,e)}function Wi(t,e){const n=jt;if(n===null)return t;const i=il(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,c,l=Ne]=e[s];o&&(re(o)&&(o={mounted:o,updated:o}),o.deep&&Fi(a),r.push({dir:o,instance:i,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Ri(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let c=a.dir[i];c&&(cs(),hn(c,n,8,[t.el,a,t,e]),ls())}}const P_="components";function M_(t,e){return dT(P_,t,!0,e)||t}const fT=Symbol();function dT(t,e,n=!0,i=!1){const r=jt||Ke;if(r){const s=r.type;if(t===P_){const a=jT(s,!1);if(a&&(a===e||a===An(e)||a===Gc(An(e))))return s}const o=Bp(r[t]||s[t],e)||Bp(r.appContext[t],e);return!o&&i?s:o}}function Bp(t,e){return t&&(t[e]||t[An(e)]||t[Gc(An(e))])}function Hr(t,e,n,i){let r;const s=n&&n[i];if(ne(t)||Ze(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(Ue(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,s&&s[a])}}else r=[];return n&&(n[i]=r),r}const Gu=t=>t?W_(t)?il(t)||t.proxy:Gu(t.parent):null,$s=xt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Gu(t.parent),$root:t=>Gu(t.root),$emit:t=>t.emit,$options:t=>Of(t),$forceUpdate:t=>t.f||(t.f=()=>Nf(t.update)),$nextTick:t=>t.n||(t.n=I_.bind(t.proxy)),$watch:t=>tT.bind(t)}),iu=(t,e)=>t!==Ne&&!t.__isScriptSetup&&ge(t,e),pT={get({_:t},e){const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(iu(i,e))return o[e]=1,i[e];if(r!==Ne&&ge(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&ge(l,e))return o[e]=3,s[e];if(n!==Ne&&ge(n,e))return o[e]=4,n[e];Yu&&(o[e]=0)}}const u=$s[e];let h,f;if(u)return e==="$attrs"&&Ft(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ne&&ge(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,ge(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return iu(r,e)?(r[e]=n,!0):i!==Ne&&ge(i,e)?(i[e]=n,!0):ge(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==Ne&&ge(t,o)||iu(e,o)||(a=s[0])&&ge(a,o)||ge(i,o)||ge($s,o)||ge(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ge(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Yu=!0;function mT(t){const e=Of(t),n=t.proxy,i=t.ctx;Yu=!1,e.beforeCreate&&jp(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:m,activated:y,deactivated:b,beforeDestroy:_,beforeUnmount:v,destroyed:w,unmounted:I,render:F,renderTracked:X,renderTriggered:oe,errorCaptured:_e,serverPrefetch:He,expose:dt,inheritAttrs:ii,components:gn,directives:yr,filters:Ai}=e;if(l&&gT(l,i,null,t.appContext.config.unwrapInjectedRef),o)for(const Ae in o){const Ie=o[Ae];re(Ie)&&(i[Ae]=Ie.bind(n))}if(r){const Ae=r.call(n,n);Ue(Ae)&&(t.data=Mo(Ae))}if(Yu=!0,s)for(const Ae in s){const Ie=s[Ae],Zt=re(Ie)?Ie.bind(n,n):re(Ie.get)?Ie.get.bind(n,n):un,ki=!re(Ie)&&re(Ie.set)?Ie.set.bind(n):un,en=se({get:Zt,set:ki});Object.defineProperty(i,Ae,{enumerable:!0,configurable:!0,get:()=>en.value,set:Dt=>en.value=Dt})}if(a)for(const Ae in a)L_(a[Ae],i,n,Ae);if(c){const Ae=re(c)?c.call(n):c;Reflect.ownKeys(Ae).forEach(Ie=>{Ba(Ie,Ae[Ie])})}u&&jp(u,t,"c");function We(Ae,Ie){ne(Ie)?Ie.forEach(Zt=>Ae(Zt.bind(n))):Ie&&Ae(Ie.bind(n))}if(We(sT,h),We(D_,f),We(oT,d),We(aT,m),We(nT,y),We(iT,b),We(hT,_e),We(uT,X),We(lT,oe),We(cT,v),We(Df,I),We(O_,He),ne(dt))if(dt.length){const Ae=t.exposed||(t.exposed={});dt.forEach(Ie=>{Object.defineProperty(Ae,Ie,{get:()=>n[Ie],set:Zt=>n[Ie]=Zt})})}else t.exposed||(t.exposed={});F&&t.render===un&&(t.render=F),ii!=null&&(t.inheritAttrs=ii),gn&&(t.components=gn),yr&&(t.directives=yr)}function gT(t,e,n=un,i=!1){ne(t)&&(t=Qu(t));for(const r in t){const s=t[r];let o;Ue(s)?"default"in s?o=Ht(s.from||r,s.default,!0):o=Ht(s.from||r):o=Ht(s),ut(o)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function jp(t,e,n){hn(ne(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function L_(t,e,n,i){const r=i.includes(".")?R_(n,i):()=>n[i];if(Ze(t)){const s=e[t];re(s)&&Mr(r,s)}else if(re(t))Mr(r,t.bind(n));else if(Ue(t))if(ne(t))t.forEach(s=>L_(s,e,n,i));else{const s=re(t.handler)?t.handler.bind(n):e[t.handler];re(s)&&Mr(r,s,t)}}function Of(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:!r.length&&!n&&!i?c=e:(c={},r.length&&r.forEach(l=>tc(c,l,o,!0)),tc(c,e,o)),Ue(e)&&s.set(e,c),c}function tc(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&tc(t,s,n,!0),r&&r.forEach(o=>tc(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=yT[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const yT={data:zp,props:xi,emits:xi,methods:xi,computed:xi,beforeCreate:At,created:At,beforeMount:At,mounted:At,beforeUpdate:At,updated:At,beforeDestroy:At,beforeUnmount:At,destroyed:At,unmounted:At,activated:At,deactivated:At,errorCaptured:At,serverPrefetch:At,components:xi,directives:xi,watch:vT,provide:zp,inject:_T};function zp(t,e){return e?t?function(){return xt(re(t)?t.call(this,this):t,re(e)?e.call(this,this):e)}:e:t}function _T(t,e){return xi(Qu(t),Qu(e))}function Qu(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function At(t,e){return t?[...new Set([].concat(t,e))]:e}function xi(t,e){return t?xt(xt(Object.create(null),t),e):e}function vT(t,e){if(!t)return e;if(!e)return t;const n=xt(Object.create(null),t);for(const i in e)n[i]=At(t[i],e[i]);return n}function bT(t,e,n,i=!1){const r={},s={};Ja(s,tl,1),t.propsDefaults=Object.create(null),F_(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:LE(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function wT(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=ve(r),[c]=t.propsOptions;let l=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Xc(t.emitsOptions,f))continue;const d=e[f];if(c)if(ge(s,f))d!==s[f]&&(s[f]=d,l=!0);else{const m=An(f);r[m]=Xu(c,a,m,d,t,!1)}else d!==s[f]&&(s[f]=d,l=!0)}}}else{F_(t,e,r,s)&&(l=!0);let u;for(const h in a)(!e||!ge(e,h)&&((u=as(h))===h||!ge(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Xu(c,a,h,void 0,t,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!ge(e,h))&&(delete s[h],l=!0)}l&&zn(t,"set","$attrs")}function F_(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Va(c))continue;const l=e[c];let u;r&&ge(r,u=An(c))?!s||!s.includes(u)?n[u]=l:(a||(a={}))[u]=l:Xc(t.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,o=!0)}if(s){const c=ve(n),l=a||Ne;for(let u=0;u<s.length;u++){const h=s[u];n[h]=Xu(r,c,h,l[h],t,!ge(l,h))}}return o}function Xu(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=ge(o,"default");if(a&&i===void 0){const c=o.default;if(o.type!==Function&&re(c)){const{propsDefaults:l}=r;n in l?i=l[n]:(Wr(r),i=l[n]=c.call(null,e),qi())}else i=c}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===as(n))&&(i=!0))}return i}function U_(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let c=!1;if(!re(t)){const u=h=>{c=!0;const[f,d]=U_(h,e,!0);xt(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!c)return Ue(t)&&i.set(t,xr),xr;if(ne(s))for(let u=0;u<s.length;u++){const h=An(s[u]);Hp(h)&&(o[h]=Ne)}else if(s)for(const u in s){const h=An(u);if(Hp(h)){const f=s[u],d=o[h]=ne(f)||re(f)?{type:f}:Object.assign({},f);if(d){const m=qp(Boolean,d.type),y=qp(String,d.type);d[0]=m>-1,d[1]=y<0||m<y,(m>-1||ge(d,"default"))&&a.push(h)}}}const l=[o,a];return Ue(t)&&i.set(t,l),l}function Hp(t){return t[0]!=="$"}function Kp(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Wp(t,e){return Kp(t)===Kp(e)}function qp(t,e){return ne(e)?e.findIndex(n=>Wp(n,t)):re(e)&&Wp(e,t)?0:-1}const V_=t=>t[0]==="_"||t==="$stable",Pf=t=>ne(t)?t.map(vn):[vn(t)],ET=(t,e,n)=>{if(e._n)return e;const i=qE((...r)=>Pf(e(...r)),n);return i._c=!1,i},$_=(t,e,n)=>{const i=t._ctx;for(const r in t){if(V_(r))continue;const s=t[r];if(re(s))e[r]=ET(r,s,i);else if(s!=null){const o=Pf(s);e[r]=()=>o}}},B_=(t,e)=>{const n=Pf(e);t.slots.default=()=>n},TT=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ve(e),Ja(e,"_",n)):$_(e,t.slots={})}else t.slots={},e&&B_(t,e);Ja(t.slots,tl,1)},IT=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=Ne;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(xt(r,e),!n&&a===1&&delete r._):(s=!e.$stable,$_(e,r)),o=e}else e&&(B_(t,e),o={default:1});if(s)for(const a in r)!V_(a)&&!(a in o)&&delete r[a]};function j_(){return{app:null,config:{isNativeTag:eE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let CT=0;function ST(t,e){return function(i,r=null){re(i)||(i=Object.assign({},i)),r!=null&&!Ue(r)&&(r=null);const s=j_(),o=new Set;let a=!1;const c=s.app={_uid:CT++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:KT,get config(){return s.config},set config(l){},use(l,...u){return o.has(l)||(l&&re(l.install)?(o.add(l),l.install(c,...u)):re(l)&&(o.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,h){if(!a){const f=$e(i,r);return f.appContext=s,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,il(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c}};return c}}function Ju(t,e,n,i,r=!1){if(ne(t)){t.forEach((f,d)=>Ju(f,e&&(ne(e)?e[d]:e),n,i,r));return}if(ja(i)&&!r)return;const s=i.shapeFlag&4?il(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ne?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ze(l)?(u[l]=null,ge(h,l)&&(h[l]=null)):ut(l)&&(l.value=null)),re(c))hi(c,a,12,[o,u]);else{const f=Ze(c),d=ut(c);if(f||d){const m=()=>{if(t.f){const y=f?ge(h,c)?h[c]:u[c]:c.value;r?ne(y)&&_f(y,s):ne(y)?y.includes(s)||y.push(s):f?(u[c]=[s],ge(h,c)&&(h[c]=u[c])):(c.value=[s],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,ge(h,c)&&(h[c]=o)):d&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Pt(m,n)):m()}}}const Pt=ZE;function AT(t){return kT(t)}function kT(t,e){const n=oE();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=un,insertStaticContent:m}=t,y=(p,g,E,T=null,S=null,x=null,L=!1,N=null,O=!!g.dynamicChildren)=>{if(p===g)return;p&&!Ss(p,g)&&(T=M(p),Dt(p,S,x,!0),p=null),g.patchFlag===-2&&(O=!1,g.dynamicChildren=null);const{type:k,ref:K,shapeFlag:$}=g;switch(k){case el:b(p,g,E,T);break;case Ji:_(p,g,E,T);break;case za:p==null&&v(g,E,T,L);break;case je:gn(p,g,E,T,S,x,L,N,O);break;default:$&1?F(p,g,E,T,S,x,L,N,O):$&6?yr(p,g,E,T,S,x,L,N,O):($&64||$&128)&&k.process(p,g,E,T,S,x,L,N,O,me)}K!=null&&S&&Ju(K,p&&p.ref,x,g||p,!g)},b=(p,g,E,T)=>{if(p==null)i(g.el=a(g.children),E,T);else{const S=g.el=p.el;g.children!==p.children&&l(S,g.children)}},_=(p,g,E,T)=>{p==null?i(g.el=c(g.children||""),E,T):g.el=p.el},v=(p,g,E,T)=>{[p.el,p.anchor]=m(p.children,g,E,T,p.el,p.anchor)},w=({el:p,anchor:g},E,T)=>{let S;for(;p&&p!==g;)S=f(p),i(p,E,T),p=S;i(g,E,T)},I=({el:p,anchor:g})=>{let E;for(;p&&p!==g;)E=f(p),r(p),p=E;r(g)},F=(p,g,E,T,S,x,L,N,O)=>{L=L||g.type==="svg",p==null?X(g,E,T,S,x,L,N,O):He(p,g,S,x,L,N,O)},X=(p,g,E,T,S,x,L,N)=>{let O,k;const{type:K,props:$,shapeFlag:W,transition:Z,dirs:ce}=p;if(O=p.el=o(p.type,x,$&&$.is,$),W&8?u(O,p.children):W&16&&_e(p.children,O,null,T,S,x&&K!=="foreignObject",L,N),ce&&Ri(p,null,T,"created"),oe(O,p,p.scopeId,L,T),$){for(const Ce in $)Ce!=="value"&&!Va(Ce)&&s(O,Ce,null,$[Ce],x,p.children,T,S,U);"value"in $&&s(O,"value",null,$.value),(k=$.onVnodeBeforeMount)&&_n(k,T,p)}ce&&Ri(p,null,T,"beforeMount");const ke=(!S||S&&!S.pendingBranch)&&Z&&!Z.persisted;ke&&Z.beforeEnter(O),i(O,g,E),((k=$&&$.onVnodeMounted)||ke||ce)&&Pt(()=>{k&&_n(k,T,p),ke&&Z.enter(O),ce&&Ri(p,null,T,"mounted")},S)},oe=(p,g,E,T,S)=>{if(E&&d(p,E),T)for(let x=0;x<T.length;x++)d(p,T[x]);if(S){let x=S.subTree;if(g===x){const L=S.vnode;oe(p,L,L.scopeId,L.slotScopeIds,S.parent)}}},_e=(p,g,E,T,S,x,L,N,O=0)=>{for(let k=O;k<p.length;k++){const K=p[k]=N?ci(p[k]):vn(p[k]);y(null,K,g,E,T,S,x,L,N)}},He=(p,g,E,T,S,x,L)=>{const N=g.el=p.el;let{patchFlag:O,dynamicChildren:k,dirs:K}=g;O|=p.patchFlag&16;const $=p.props||Ne,W=g.props||Ne;let Z;E&&Ni(E,!1),(Z=W.onVnodeBeforeUpdate)&&_n(Z,E,g,p),K&&Ri(g,p,E,"beforeUpdate"),E&&Ni(E,!0);const ce=S&&g.type!=="foreignObject";if(k?dt(p.dynamicChildren,k,N,E,T,ce,x):L||Ie(p,g,N,null,E,T,ce,x,!1),O>0){if(O&16)ii(N,g,$,W,E,T,S);else if(O&2&&$.class!==W.class&&s(N,"class",null,W.class,S),O&4&&s(N,"style",$.style,W.style,S),O&8){const ke=g.dynamicProps;for(let Ce=0;Ce<ke.length;Ce++){const qe=ke[Ce],tn=$[qe],vr=W[qe];(vr!==tn||qe==="value")&&s(N,qe,tn,vr,S,p.children,E,T,U)}}O&1&&p.children!==g.children&&u(N,g.children)}else!L&&k==null&&ii(N,g,$,W,E,T,S);((Z=W.onVnodeUpdated)||K)&&Pt(()=>{Z&&_n(Z,E,g,p),K&&Ri(g,p,E,"updated")},T)},dt=(p,g,E,T,S,x,L)=>{for(let N=0;N<g.length;N++){const O=p[N],k=g[N],K=O.el&&(O.type===je||!Ss(O,k)||O.shapeFlag&70)?h(O.el):E;y(O,k,K,null,T,S,x,L,!0)}},ii=(p,g,E,T,S,x,L)=>{if(E!==T){if(E!==Ne)for(const N in E)!Va(N)&&!(N in T)&&s(p,N,E[N],null,L,g.children,S,x,U);for(const N in T){if(Va(N))continue;const O=T[N],k=E[N];O!==k&&N!=="value"&&s(p,N,k,O,L,g.children,S,x,U)}"value"in T&&s(p,"value",E.value,T.value)}},gn=(p,g,E,T,S,x,L,N,O)=>{const k=g.el=p?p.el:a(""),K=g.anchor=p?p.anchor:a("");let{patchFlag:$,dynamicChildren:W,slotScopeIds:Z}=g;Z&&(N=N?N.concat(Z):Z),p==null?(i(k,E,T),i(K,E,T),_e(g.children,E,K,S,x,L,N,O)):$>0&&$&64&&W&&p.dynamicChildren?(dt(p.dynamicChildren,W,E,S,x,L,N),(g.key!=null||S&&g===S.subTree)&&z_(p,g,!0)):Ie(p,g,E,K,S,x,L,N,O)},yr=(p,g,E,T,S,x,L,N,O)=>{g.slotScopeIds=N,p==null?g.shapeFlag&512?S.ctx.activate(g,E,T,L,O):Ai(g,E,T,S,x,L,O):Is(p,g,O)},Ai=(p,g,E,T,S,x,L)=>{const N=p.component=FT(p,T,S);if(N_(p)&&(N.ctx.renderer=me),UT(N),N.asyncDep){if(S&&S.registerDep(N,We),!p.el){const O=N.subTree=$e(Ji);_(null,O,g,E)}return}We(N,p,g,E,S,x,L)},Is=(p,g,E)=>{const T=g.component=p.component;if(QE(p,g,E))if(T.asyncDep&&!T.asyncResolved){Ae(T,g,E);return}else T.next=g,zE(T.update),T.update();else g.el=p.el,T.vnode=g},We=(p,g,E,T,S,x,L)=>{const N=()=>{if(p.isMounted){let{next:K,bu:$,u:W,parent:Z,vnode:ce}=p,ke=K,Ce;Ni(p,!1),K?(K.el=ce.el,Ae(p,K,L)):K=ce,$&&$a($),(Ce=K.props&&K.props.onVnodeBeforeUpdate)&&_n(Ce,Z,K,ce),Ni(p,!0);const qe=nu(p),tn=p.subTree;p.subTree=qe,y(tn,qe,h(tn.el),M(tn),p,S,x),K.el=qe.el,ke===null&&XE(p,qe.el),W&&Pt(W,S),(Ce=K.props&&K.props.onVnodeUpdated)&&Pt(()=>_n(Ce,Z,K,ce),S)}else{let K;const{el:$,props:W}=g,{bm:Z,m:ce,parent:ke}=p,Ce=ja(g);if(Ni(p,!1),Z&&$a(Z),!Ce&&(K=W&&W.onVnodeBeforeMount)&&_n(K,ke,g),Ni(p,!0),$&&ae){const qe=()=>{p.subTree=nu(p),ae($,p.subTree,p,S,null)};Ce?g.type.__asyncLoader().then(()=>!p.isUnmounted&&qe()):qe()}else{const qe=p.subTree=nu(p);y(null,qe,E,T,p,S,x),g.el=qe.el}if(ce&&Pt(ce,S),!Ce&&(K=W&&W.onVnodeMounted)){const qe=g;Pt(()=>_n(K,ke,qe),S)}(g.shapeFlag&256||ke&&ja(ke.vnode)&&ke.vnode.shapeFlag&256)&&p.a&&Pt(p.a,S),p.isMounted=!0,g=E=T=null}},O=p.effect=new Ef(N,()=>Nf(k),p.scope),k=p.update=()=>O.run();k.id=p.uid,Ni(p,!0),k()},Ae=(p,g,E)=>{g.component=p;const T=p.vnode.props;p.vnode=g,p.next=null,wT(p,g.props,T,E),IT(p,g.children,E),cs(),Vp(),ls()},Ie=(p,g,E,T,S,x,L,N,O=!1)=>{const k=p&&p.children,K=p?p.shapeFlag:0,$=g.children,{patchFlag:W,shapeFlag:Z}=g;if(W>0){if(W&128){ki(k,$,E,T,S,x,L,N,O);return}else if(W&256){Zt(k,$,E,T,S,x,L,N,O);return}}Z&8?(K&16&&U(k,S,x),$!==k&&u(E,$)):K&16?Z&16?ki(k,$,E,T,S,x,L,N,O):U(k,S,x,!0):(K&8&&u(E,""),Z&16&&_e($,E,T,S,x,L,N,O))},Zt=(p,g,E,T,S,x,L,N,O)=>{p=p||xr,g=g||xr;const k=p.length,K=g.length,$=Math.min(k,K);let W;for(W=0;W<$;W++){const Z=g[W]=O?ci(g[W]):vn(g[W]);y(p[W],Z,E,null,S,x,L,N,O)}k>K?U(p,S,x,!0,!1,$):_e(g,E,T,S,x,L,N,O,$)},ki=(p,g,E,T,S,x,L,N,O)=>{let k=0;const K=g.length;let $=p.length-1,W=K-1;for(;k<=$&&k<=W;){const Z=p[k],ce=g[k]=O?ci(g[k]):vn(g[k]);if(Ss(Z,ce))y(Z,ce,E,null,S,x,L,N,O);else break;k++}for(;k<=$&&k<=W;){const Z=p[$],ce=g[W]=O?ci(g[W]):vn(g[W]);if(Ss(Z,ce))y(Z,ce,E,null,S,x,L,N,O);else break;$--,W--}if(k>$){if(k<=W){const Z=W+1,ce=Z<K?g[Z].el:T;for(;k<=W;)y(null,g[k]=O?ci(g[k]):vn(g[k]),E,ce,S,x,L,N,O),k++}}else if(k>W)for(;k<=$;)Dt(p[k],S,x,!0),k++;else{const Z=k,ce=k,ke=new Map;for(k=ce;k<=W;k++){const Vt=g[k]=O?ci(g[k]):vn(g[k]);Vt.key!=null&&ke.set(Vt.key,k)}let Ce,qe=0;const tn=W-ce+1;let vr=!1,kp=0;const Cs=new Array(tn);for(k=0;k<tn;k++)Cs[k]=0;for(k=Z;k<=$;k++){const Vt=p[k];if(qe>=tn){Dt(Vt,S,x,!0);continue}let yn;if(Vt.key!=null)yn=ke.get(Vt.key);else for(Ce=ce;Ce<=W;Ce++)if(Cs[Ce-ce]===0&&Ss(Vt,g[Ce])){yn=Ce;break}yn===void 0?Dt(Vt,S,x,!0):(Cs[yn-ce]=k+1,yn>=kp?kp=yn:vr=!0,y(Vt,g[yn],E,null,S,x,L,N,O),qe++)}const Rp=vr?RT(Cs):xr;for(Ce=Rp.length-1,k=tn-1;k>=0;k--){const Vt=ce+k,yn=g[Vt],Np=Vt+1<K?g[Vt+1].el:T;Cs[k]===0?y(null,yn,E,Np,S,x,L,N,O):vr&&(Ce<0||k!==Rp[Ce]?en(yn,E,Np,2):Ce--)}}},en=(p,g,E,T,S=null)=>{const{el:x,type:L,transition:N,children:O,shapeFlag:k}=p;if(k&6){en(p.component.subTree,g,E,T);return}if(k&128){p.suspense.move(g,E,T);return}if(k&64){L.move(p,g,E,me);return}if(L===je){i(x,g,E);for(let $=0;$<O.length;$++)en(O[$],g,E,T);i(p.anchor,g,E);return}if(L===za){w(p,g,E);return}if(T!==2&&k&1&&N)if(T===0)N.beforeEnter(x),i(x,g,E),Pt(()=>N.enter(x),S);else{const{leave:$,delayLeave:W,afterLeave:Z}=N,ce=()=>i(x,g,E),ke=()=>{$(x,()=>{ce(),Z&&Z()})};W?W(x,ce,ke):ke()}else i(x,g,E)},Dt=(p,g,E,T=!1,S=!1)=>{const{type:x,props:L,ref:N,children:O,dynamicChildren:k,shapeFlag:K,patchFlag:$,dirs:W}=p;if(N!=null&&Ju(N,null,E,p,!0),K&256){g.ctx.deactivate(p);return}const Z=K&1&&W,ce=!ja(p);let ke;if(ce&&(ke=L&&L.onVnodeBeforeUnmount)&&_n(ke,g,p),K&6)C(p.component,E,T);else{if(K&128){p.suspense.unmount(E,T);return}Z&&Ri(p,null,g,"beforeUnmount"),K&64?p.type.remove(p,g,E,S,me,T):k&&(x!==je||$>0&&$&64)?U(k,g,E,!1,!0):(x===je&&$&384||!S&&K&16)&&U(O,g,E),T&&_r(p)}(ce&&(ke=L&&L.onVnodeUnmounted)||Z)&&Pt(()=>{ke&&_n(ke,g,p),Z&&Ri(p,null,g,"unmounted")},E)},_r=p=>{const{type:g,el:E,anchor:T,transition:S}=p;if(g===je){ua(E,T);return}if(g===za){I(p);return}const x=()=>{r(E),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(p.shapeFlag&1&&S&&!S.persisted){const{leave:L,delayLeave:N}=S,O=()=>L(E,x);N?N(p.el,x,O):O()}else x()},ua=(p,g)=>{let E;for(;p!==g;)E=f(p),r(p),p=E;r(g)},C=(p,g,E)=>{const{bum:T,scope:S,update:x,subTree:L,um:N}=p;T&&$a(T),S.stop(),x&&(x.active=!1,Dt(L,p,g,E)),N&&Pt(N,g),Pt(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},U=(p,g,E,T=!1,S=!1,x=0)=>{for(let L=x;L<p.length;L++)Dt(p[L],g,E,T,S)},M=p=>p.shapeFlag&6?M(p.component.subTree):p.shapeFlag&128?p.suspense.next():f(p.anchor||p.el),H=(p,g,E)=>{p==null?g._vnode&&Dt(g._vnode,null,null,!0):y(g._vnode||null,p,g,null,null,null,E),Vp(),S_(),g._vnode=p},me={p:y,um:Dt,m:en,r:_r,mt:Ai,mc:_e,pc:Ie,pbc:dt,n:M,o:t};let Ve,ae;return e&&([Ve,ae]=e(me)),{render:H,hydrate:Ve,createApp:ST(H,Ve)}}function Ni({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function z_(t,e,n=!1){const i=t.children,r=e.children;if(ne(i)&&ne(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=ci(r[s]),a.el=o.el),n||z_(o,a)),a.type===el&&(a.el=o.el)}}function RT(t){const e=t.slice(),n=[0];let i,r,s,o,a;const c=t.length;for(i=0;i<c;i++){const l=t[i];if(l!==0){if(r=n[n.length-1],t[r]<l){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<l?s=a+1:o=a;l<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const NT=t=>t.__isTeleport,je=Symbol(void 0),el=Symbol(void 0),Ji=Symbol(void 0),za=Symbol(void 0),Bs=[];let on=null;function te(t=!1){Bs.push(on=t?null:[])}function xT(){Bs.pop(),on=Bs[Bs.length-1]||null}let ao=1;function Gp(t){ao+=t}function H_(t){return t.dynamicChildren=ao>0?on||xr:null,xT(),ao>0&&on&&on.push(t),t}function de(t,e,n,i,r,s){return H_(Y(t,e,n,i,r,s,!0))}function Hn(t,e,n,i,r){return H_($e(t,e,n,i,r,!0))}function Zu(t){return t?t.__v_isVNode===!0:!1}function Ss(t,e){return t.type===e.type&&t.key===e.key}const tl="__vInternal",K_=({key:t})=>t??null,Ha=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ze(t)||ut(t)||re(t)?{i:jt,r:t,k:e,f:!!n}:t:null;function Y(t,e=null,n=null,i=0,r=null,s=t===je?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&K_(e),ref:e&&Ha(e),scopeId:Jc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:jt};return a?(Mf(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=Ze(n)?8:16),ao>0&&!o&&on&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&on.push(c),c}const $e=DT;function DT(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===fT)&&(t=Ji),Zu(t)){const a=Kr(t,e,!0);return n&&Mf(a,n),ao>0&&!s&&on&&(a.shapeFlag&6?on[on.indexOf(t)]=a:on.push(a)),a.patchFlag|=-2,a}if(zT(t)&&(t=t.__vccOpts),e){e=OT(e);let{class:a,style:c}=e;a&&!Ze(a)&&(e.class=jn(a)),Ue(c)&&(g_(c)&&!ne(c)&&(c=xt({},c)),e.style=Po(c))}const o=Ze(t)?1:JE(t)?128:NT(t)?64:Ue(t)?4:re(t)?2:0;return Y(t,e,n,i,r,o,s,!0)}function OT(t){return t?g_(t)||tl in t?xt({},t):t:null}function Kr(t,e,n=!1){const{props:i,ref:r,patchFlag:s,children:o}=t,a=e?PT(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&K_(a),ref:e&&e.ref?n&&r?ne(r)?r.concat(Ha(e)):[r,Ha(e)]:Ha(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==je?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Kr(t.ssContent),ssFallback:t.ssFallback&&Kr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Rt(t=" ",e=0){return $e(el,null,t,e)}function ot(t="",e=!1){return e?(te(),Hn(Ji,null,t)):$e(Ji,null,t)}function vn(t){return t==null||typeof t=="boolean"?$e(Ji):ne(t)?$e(je,null,t.slice()):typeof t=="object"?ci(t):$e(el,null,String(t))}function ci(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Kr(t)}function Mf(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(ne(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Mf(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(tl in e)?e._ctx=jt:r===3&&jt&&(jt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else re(e)?(e={default:e,_ctx:jt},n=32):(e=String(e),i&64?(n=16,e=[Rt(e)]):n=8);t.children=e,t.shapeFlag|=n}function PT(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=jn([e.class,i.class]));else if(r==="style")e.style=Po([e.style,i.style]);else if(Kc(r)){const s=e[r],o=i[r];o&&s!==o&&!(ne(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function _n(t,e,n,i=null){hn(t,e,7,[n,i])}const MT=j_();let LT=0;function FT(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||MT,s={uid:LT++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new i_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:U_(i,r),emitsOptions:k_(i,r),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:i.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=WE.bind(null,s),t.ce&&t.ce(s),s}let Ke=null;const nl=()=>Ke||jt,Wr=t=>{Ke=t,t.scope.on()},qi=()=>{Ke&&Ke.scope.off(),Ke=null};function W_(t){return t.vnode.shapeFlag&4}let co=!1;function UT(t,e=!1){co=e;const{props:n,children:i}=t.vnode,r=W_(t);bT(t,n,r,e),TT(t,i);const s=r?VT(t,e):void 0;return co=!1,s}function VT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Af(new Proxy(t.ctx,pT));const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?BT(t):null;Wr(t),cs();const s=hi(i,t,0,[t.props,r]);if(ls(),qi(),e_(s)){if(s.then(qi,qi),e)return s.then(o=>{Yp(t,o,e)}).catch(o=>{Qc(o,t,0)});t.asyncDep=s}else Yp(t,s,e)}else q_(t,e)}function Yp(t,e,n){re(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ue(e)&&(t.setupState=w_(e)),q_(t,n)}let Qp;function q_(t,e,n){const i=t.type;if(!t.render){if(!e&&Qp&&!i.render){const r=i.template||Of(t).template;if(r){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=i,l=xt(xt({isCustomElement:s,delimiters:a},o),c);i.render=Qp(r,l)}}t.render=i.render||un}Wr(t),cs(),mT(t),ls(),qi()}function $T(t){return new Proxy(t.attrs,{get(e,n){return Ft(t,"get","$attrs"),e[n]}})}function BT(t){const e=i=>{t.exposed=i||{}};let n;return{get attrs(){return n||(n=$T(t))},slots:t.slots,emit:t.emit,expose:e}}function il(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(w_(Af(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in $s)return $s[n](t)},has(e,n){return n in e||n in $s}}))}function jT(t,e=!0){return re(t)?t.displayName||t.name:t.name||e&&t.__name}function zT(t){return re(t)&&"__vccOpts"in t}const se=(t,e)=>$E(t,e,co);function rl(t,e,n){const i=arguments.length;return i===2?Ue(e)&&!ne(e)?Zu(e)?$e(t,null,[e]):$e(t,e):$e(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Zu(n)&&(n=[n]),$e(t,e,n))}const G_=Symbol(""),HT=()=>Ht(G_),KT="3.2.47",WT="http://www.w3.org/2000/svg",Mi=typeof document<"u"?document:null,Xp=Mi&&Mi.createElement("template"),qT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e?Mi.createElementNS(WT,t):Mi.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Mi.createTextNode(t),createComment:t=>Mi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Mi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Xp.innerHTML=i?`<svg>${t}</svg>`:t;const a=Xp.content;if(i){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function GT(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function YT(t,e,n){const i=t.style,r=Ze(n);if(n&&!r){if(e&&!Ze(e))for(const s in e)n[s]==null&&eh(i,s,"");for(const s in n)eh(i,s,n[s])}else{const s=i.display;r?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=s)}}const Jp=/\s*!important$/;function eh(t,e,n){if(ne(n))n.forEach(i=>eh(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=QT(t,e);Jp.test(n)?t.setProperty(as(i),n.replace(Jp,""),"important"):t[i]=n}}const Zp=["Webkit","Moz","ms"],ru={};function QT(t,e){const n=ru[e];if(n)return n;let i=An(e);if(i!=="filter"&&i in t)return ru[e]=i;i=Gc(i);for(let r=0;r<Zp.length;r++){const s=Zp[r]+i;if(s in t)return ru[e]=s}return e}const em="http://www.w3.org/1999/xlink";function XT(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(em,e.slice(6,e.length)):t.setAttributeNS(em,e,n);else{const s=Zw(e);n==null||s&&!Xy(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function JT(t,e,n,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Xy(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Er(t,e,n,i){t.addEventListener(e,n,i)}function ZT(t,e,n,i){t.removeEventListener(e,n,i)}function eI(t,e,n,i,r=null){const s=t._vei||(t._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,c]=tI(e);if(i){const l=s[e]=rI(i,r);Er(t,a,l,c)}else o&&(ZT(t,a,o,c),s[e]=void 0)}}const tm=/(?:Once|Passive|Capture)$/;function tI(t){let e;if(tm.test(t)){e={};let i;for(;i=t.match(tm);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):as(t.slice(2)),e]}let su=0;const nI=Promise.resolve(),iI=()=>su||(nI.then(()=>su=0),su=Date.now());function rI(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;hn(sI(i,n.value),e,5,[i])};return n.value=t,n.attached=iI(),n}function sI(t,e){if(ne(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const nm=/^on[a-z]/,oI=(t,e,n,i,r=!1,s,o,a,c)=>{e==="class"?GT(t,i,r):e==="style"?YT(t,n,i):Kc(e)?yf(e)||eI(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):aI(t,e,i,r))?JT(t,e,i,s,o,a,c):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),XT(t,e,i,r))};function aI(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&nm.test(e)&&re(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||nm.test(e)&&Ze(n)?!1:e in t}function Lf(t){const e=nl();if(!e)return;const n=e.ut=(r=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(s=>nh(s,r))},i=()=>{const r=t(e.proxy);th(e.subTree,r),n(r)};eT(i),D_(()=>{const r=new MutationObserver(i);r.observe(e.subTree.el.parentNode,{childList:!0}),Df(()=>r.disconnect())})}function th(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{th(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)nh(t.el,e);else if(t.type===je)t.children.forEach(n=>th(n,e));else if(t.type===za){let{el:n,anchor:i}=t;for(;n&&(nh(n,e),n!==i);)n=n.nextSibling}}function nh(t,e){if(t.nodeType===1){const n=t.style;for(const i in e)n.setProperty(`--${i}`,e[i])}}const im=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ne(e)?n=>$a(e,n):e};function cI(t){t.target.composing=!0}function rm(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Gi={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t._assign=im(r);const s=i||r.props&&r.props.type==="number";Er(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=ju(a)),t._assign(a)}),n&&Er(t,"change",()=>{t.value=t.value.trim()}),e||(Er(t,"compositionstart",cI),Er(t,"compositionend",rm),Er(t,"change",rm))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:r}},s){if(t._assign=im(s),t.composing||document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===e||(r||t.type==="number")&&ju(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},lI=["ctrl","shift","alt","meta"],uI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>lI.some(n=>t[`${n}Key`]&&!e.includes(n))},lr=(t,e)=>(n,...i)=>{for(let r=0;r<e.length;r++){const s=uI[e[r]];if(s&&s(n,e))return}return t(n,...i)},hI=xt({patchProp:oI},qT);let sm;function fI(){return sm||(sm=AT(hI))}const dI=(...t)=>{const e=fI().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=pI(i);if(!r)return;const s=e._component;!re(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function pI(t){return Ze(t)?document.querySelector(t):t}var mI=!1;/*!
  * pinia v2.0.35
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const gI=Symbol();var om;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(om||(om={}));function yI(){const t=aE(!0),e=t.run(()=>Tt({}));let n=[],i=[];const r=Af({install(s){r._a=s,s.provide(gI,r),s.config.globalProperties.$pinia=r,i.forEach(o=>n.push(o)),i=[]},use(s){return!this._a&&!mI?i.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P=function(t,e){if(!t)throw fs(e)},fs=function(t){return new Error("Firebase Database ("+Y_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},_I=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},sl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|l>>6,d=l&63;c||(d=64,o||(f=64)),i.push(n[u],n[h],n[f],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Q_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_I(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||l==null||h==null)throw new vI;const f=s<<2|a>>4;if(i.push(f),l!==64){const d=a<<4&240|l>>2;if(i.push(d),h!==64){const m=l<<6&192|h;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class vI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const X_=function(t){const e=Q_(t);return sl.encodeByteArray(e,!0)},nc=function(t){return X_(t).replace(/\./g,"")},ic=function(t){try{return sl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(t){return J_(void 0,t)}function J_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!wI(n)||(t[n]=J_(t[n],e[n]));return t}function wI(t){return t!=="__proto__"}/**
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
 */function EI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const TI=()=>EI().__FIREBASE_DEFAULTS__,II=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},CI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ic(t[1]);return e&&JSON.parse(e)},Ff=()=>{try{return TI()||II()||CI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},SI=t=>{var e,n;return(n=(e=Ff())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},AI=t=>{const e=SI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},kI=()=>{var t;return(t=Ff())===null||t===void 0?void 0:t.config},RI=t=>{var e;return(e=Ff())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function NI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[nc(JSON.stringify(n)),nc(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Uf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(kn())}function xI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Z_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ev(){return Y_.NODE_ADMIN===!0}function tv(){try{return typeof indexedDB=="object"}catch{return!1}}function DI(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI="FirebaseError";class Zn extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=OI,Object.setPrototypeOf(this,Zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ds.prototype.create)}}class ds{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?PI(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Zn(r,a,i)}}function PI(t,e){return t.replace(MI,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const MI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(t){return JSON.parse(t)}function lt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv=function(t){let e={},n={},i={},r="";try{const s=t.split(".");e=uo(ic(s[0])||""),n=uo(ic(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:r}},LI=function(t){const e=nv(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},FI=function(t){const e=nv(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function qr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function am(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function rc(t,e,n){const i={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=e.call(n,t[r],r,t));return i}function ih(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(cm(s)&&cm(o)){if(!ih(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function cm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)i[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(f<<1|f>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let h=0;h<80;h++){h<40?h<20?(l=a^s&(o^a),u=1518500249):(l=s^o^a,u=1859775393):h<60?(l=s&o|a&(s|o),u=2400959708):(l=s^o^a,u=3395469782);const f=(r<<5|r>>>27)+l+c+u+i[h]&4294967295;c=a,a=o,o=(s<<30|s>>>2)&4294967295,s=r,r=f}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<n;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}}function VI(t,e){const n=new $I(t,e);return n.subscribe.bind(n)}class $I{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");BI(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=ou),r.error===void 0&&(r.error=ou),r.complete===void 0&&(r.complete=ou);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function BI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ou(){}function jI(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,P(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},ol=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ut(t){return t&&t._delegate?t._delegate:t}class dn{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Di="[DEFAULT]";/**
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
 */class HI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new lo;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(WI(e))try{this.getOrInitializeService({instanceIdentifier:Di})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=Di){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Di){return this.instances.has(e)}getOptions(e=Di){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:KI(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Di){return this.component?this.component.multipleInstances?e:Di:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function KI(t){return t===Di?void 0:t}function WI(t){return t.instantiationMode==="EAGER"}/**
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
 */class qI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new HI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const GI={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},YI=ye.INFO,QI={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},XI=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=QI[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fo{constructor(e){this.name=e,this._logLevel=YI,this._logHandler=XI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?GI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const JI=(t,e)=>e.some(n=>t instanceof n);let lm,um;function ZI(){return lm||(lm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function eC(){return um||(um=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const iv=new WeakMap,rh=new WeakMap,rv=new WeakMap,au=new WeakMap,$f=new WeakMap;function tC(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(fi(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&iv.set(n,t)}).catch(()=>{}),$f.set(e,t),e}function nC(t){if(rh.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});rh.set(t,e)}let sh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return rh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||rv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function iC(t){sh=t(sh)}function rC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(cu(this),e,...n);return rv.set(i,e.sort?e.sort():[e]),fi(i)}:eC().includes(t)?function(...e){return t.apply(cu(this),e),fi(iv.get(this))}:function(...e){return fi(t.apply(cu(this),e))}}function sC(t){return typeof t=="function"?rC(t):(t instanceof IDBTransaction&&nC(t),JI(t,ZI())?new Proxy(t,sh):t)}function fi(t){if(t instanceof IDBRequest)return tC(t);if(au.has(t))return au.get(t);const e=sC(t);return e!==t&&(au.set(t,e),$f.set(e,t)),e}const cu=t=>$f.get(t);function oC(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=fi(o);return i&&o.addEventListener("upgradeneeded",c=>{i(fi(o.result),c.oldVersion,c.newVersion,fi(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{s&&c.addEventListener("close",()=>s()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const aC=["get","getKey","getAll","getAllKeys","count"],cC=["put","add","delete","clear"],lu=new Map;function hm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(lu.get(e))return lu.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=cC.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||aC.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return lu.set(e,s),s}iC(t=>({...t,get:(e,n,i)=>hm(e,n)||t.get(e,n,i),has:(e,n)=>!!hm(e,n)||t.has(e,n)}));/**
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
 */class lC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(uC(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function uC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const oh="@firebase/app",fm="0.9.8";/**
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
 */const Zi=new Fo("@firebase/app"),hC="@firebase/app-compat",fC="@firebase/analytics-compat",dC="@firebase/analytics",pC="@firebase/app-check-compat",mC="@firebase/app-check",gC="@firebase/auth",yC="@firebase/auth-compat",_C="@firebase/database",vC="@firebase/database-compat",bC="@firebase/functions",wC="@firebase/functions-compat",EC="@firebase/installations",TC="@firebase/installations-compat",IC="@firebase/messaging",CC="@firebase/messaging-compat",SC="@firebase/performance",AC="@firebase/performance-compat",kC="@firebase/remote-config",RC="@firebase/remote-config-compat",NC="@firebase/storage",xC="@firebase/storage-compat",DC="@firebase/firestore",OC="@firebase/firestore-compat",PC="firebase",MC="9.20.0";/**
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
 */const ah="[DEFAULT]",LC={[oh]:"fire-core",[hC]:"fire-core-compat",[dC]:"fire-analytics",[fC]:"fire-analytics-compat",[mC]:"fire-app-check",[pC]:"fire-app-check-compat",[gC]:"fire-auth",[yC]:"fire-auth-compat",[_C]:"fire-rtdb",[vC]:"fire-rtdb-compat",[bC]:"fire-fn",[wC]:"fire-fn-compat",[EC]:"fire-iid",[TC]:"fire-iid-compat",[IC]:"fire-fcm",[CC]:"fire-fcm-compat",[SC]:"fire-perf",[AC]:"fire-perf-compat",[kC]:"fire-rc",[RC]:"fire-rc-compat",[NC]:"fire-gcs",[xC]:"fire-gcs-compat",[DC]:"fire-fst",[OC]:"fire-fst-compat","fire-js":"fire-js",[PC]:"fire-js-all"};/**
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
 */const sc=new Map,ch=new Map;function FC(t,e){try{t.container.addComponent(e)}catch(n){Zi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Rn(t){const e=t.name;if(ch.has(e))return Zi.debug(`There were multiple attempts to register component ${e}.`),!1;ch.set(e,t);for(const n of sc.values())FC(n,t);return!0}function UC(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const VC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},di=new ds("app","Firebase",VC);/**
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
 */class $C{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw di.create("app-deleted",{appName:this._name})}}/**
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
 */const ps=MC;function sv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:ah,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw di.create("bad-app-name",{appName:String(r)});if(n||(n=kI()),!n)throw di.create("no-options");const s=sc.get(r);if(s){if(ih(n,s.options)&&ih(i,s.config))return s;throw di.create("duplicate-app",{appName:r})}const o=new qI(r);for(const c of ch.values())o.addComponent(c);const a=new $C(n,i,o);return sc.set(r,a),a}function ov(t=ah){const e=sc.get(t);if(!e&&t===ah)return sv();if(!e)throw di.create("no-app",{appName:t});return e}function Kt(t,e,n){var i;let r=(i=LC[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zi.warn(a.join(" "));return}Rn(new dn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const BC="firebase-heartbeat-database",jC=1,ho="firebase-heartbeat-store";let uu=null;function av(){return uu||(uu=oC(BC,jC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ho)}}}).catch(t=>{throw di.create("idb-open",{originalErrorMessage:t.message})})),uu}async function zC(t){try{return(await av()).transaction(ho).objectStore(ho).get(cv(t))}catch(e){if(e instanceof Zn)Zi.warn(e.message);else{const n=di.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zi.warn(n.message)}}}async function dm(t,e){try{const i=(await av()).transaction(ho,"readwrite");return await i.objectStore(ho).put(e,cv(t)),i.done}catch(n){if(n instanceof Zn)Zi.warn(n.message);else{const i=di.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zi.warn(i.message)}}}function cv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const HC=1024,KC=30*24*60*60*1e3;class WC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new GC(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=pm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=KC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=pm(),{heartbeatsToSend:n,unsentEntries:i}=qC(this._heartbeatsCache.heartbeats),r=nc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function pm(){return new Date().toISOString().substring(0,10)}function qC(t,e=HC){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),mm(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),mm(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class GC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tv()?DI().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await zC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return dm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return dm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function mm(t){return nc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function YC(t){Rn(new dn("platform-logger",e=>new lC(e),"PRIVATE")),Rn(new dn("heartbeat",e=>new WC(e),"PRIVATE")),Kt(oh,fm,t),Kt(oh,fm,"esm2017"),Kt("fire-js","")}YC("");function lv(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function uv(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const QC=uv,hv=new ds("auth","Firebase",uv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc=new Fo("@firebase/auth");function XC(t,...e){oc.logLevel<=ye.WARN&&oc.warn(`Auth (${ps}): ${t}`,...e)}function Ka(t,...e){oc.logLevel<=ye.ERROR&&oc.error(`Auth (${ps}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(t,...e){throw jf(t,...e)}function Bf(t,...e){return jf(t,...e)}function JC(t,e,n){const i=Object.assign(Object.assign({},QC()),{[e]:n});return new ds("auth","Firebase",i).create(e,{appName:t.name})}function jf(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return hv.create(t,...e)}function we(t,e,...n){if(!t)throw jf(e,...n)}function js(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ka(e),new Error(e)}function ac(t,e){t||js(e)}function ZC(){return ym()==="http:"||ym()==="https:"}function ym(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ZC()||xI()||"connection"in navigator)?navigator.onLine:!0}function tS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,n){this.shortDelay=e,this.longDelay=n,ac(n>e,"Short delay should be less than long delay!"),this.isMobile=Uf()||Z_()}get(){return eS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nS(t,e){ac(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;js("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;js("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;js("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS=new Uo(3e4,6e4);function sS(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function zf(t,e,n,i,r={}){return dv(t,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=Vf(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),fv.fetch()(pv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function dv(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},iS),e);try{const r=new oS(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ya(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ya(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ya(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ya(t,"user-disabled",o);const u=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw JC(t,u,l);gm(t,u)}}catch(r){if(r instanceof Zn)throw r;gm(t,"network-request-failed",{message:String(r)})}}function pv(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?nS(t.config,r):`${t.config.apiScheme}://${r}`}class oS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Bf(this.auth,"network-request-failed")),rS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ya(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=Bf(t,e,i);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aS(t,e){return zf(t,"POST","/v1/accounts:delete",e)}async function cS(t,e){return zf(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lS(t,e=!1){const n=Ut(t),i=await n.getIdToken(e),r=mv(i);we(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:zs(hu(r.auth_time)),issuedAtTime:zs(hu(r.iat)),expirationTime:zs(hu(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function hu(t){return Number(t)*1e3}function mv(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Ka("JWT malformed, contained fewer than 3 sections"),null;try{const r=ic(n);return r?JSON.parse(r):(Ka("Failed to decode base64 JWT payload"),null)}catch(r){return Ka("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function uS(t){const e=mv(t);return we(e,"internal-error"),we(typeof e.exp<"u","internal-error"),we(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lh(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Zn&&hS(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function hS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zs(this.lastLoginAt),this.creationTime=zs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function cc(t){var e;const n=t.auth,i=await t.getIdToken(),r=await lh(t,cS(n,{idToken:i}));we(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?mS(s.providerUserInfo):[],a=pS(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new gv(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function dS(t){const e=Ut(t);await cc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pS(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function mS(t){return t.map(e=>{var{providerId:n}=e,i=lv(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gS(t,e){const n=await dv(t,{},async()=>{const i=Vf({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=pv(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",fv.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){we(e.idToken,"internal-error"),we(typeof e.idToken<"u","internal-error"),we(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):uS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return we(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await gS(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new fo;return i&&(we(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(we(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(we(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fo,this.toJSON())}_performRefresh(){return js("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(t,e){we(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Lr{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=lv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new gv(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await lh(this,this.stsTokenManager.getToken(this.auth,e));return we(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return lS(this,e)}reload(){return dS(this)}_assign(e){this!==e&&(we(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Lr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){we(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await cc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await lh(this,aS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,a,c,l,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,d=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,_=(l=n.createdAt)!==null&&l!==void 0?l:void 0,v=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:w,emailVerified:I,isAnonymous:F,providerData:X,stsTokenManager:oe}=n;we(w&&oe,e,"internal-error");const _e=fo.fromJSON(this.name,oe);we(typeof w=="string",e,"internal-error"),si(h,e.name),si(f,e.name),we(typeof I=="boolean",e,"internal-error"),we(typeof F=="boolean",e,"internal-error"),si(d,e.name),si(m,e.name),si(y,e.name),si(b,e.name),si(_,e.name),si(v,e.name);const He=new Lr({uid:w,auth:e,email:f,emailVerified:I,displayName:h,isAnonymous:F,photoURL:m,phoneNumber:d,tenantId:y,stsTokenManager:_e,createdAt:_,lastLoginAt:v});return X&&Array.isArray(X)&&(He.providerData=X.map(dt=>Object.assign({},dt))),b&&(He._redirectEventId=b),He}static async _fromIdTokenResponse(e,n,i=!1){const r=new fo;r.updateFromServerResponse(n);const s=new Lr({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await cc(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m=new Map;function Ui(t){ac(t instanceof Function,"Expected a class definition");let e=_m.get(t);return e?(ac(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_m.set(t,e),e)}/**
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
 */class yv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}yv.type="NONE";const vm=yv;/**
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
 */function fu(t,e,n){return`firebase:${t}:${e}:${n}`}class Fr{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=fu(this.userKey,r.apiKey,s),this.fullPersistenceKey=fu("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Lr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Fr(Ui(vm),e,i);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=r[0]||Ui(vm);const o=fu(i,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Lr._fromJSON(e,u);l!==s&&(a=h),s=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Fr(s,e,i):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Fr(s,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ES(e))return"Blackberry";if(TS(e))return"Webos";if(_S(e))return"Safari";if((e.includes("chrome/")||vS(e))&&!e.includes("edge/"))return"Chrome";if(wS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function yS(t=kn()){return/firefox\//i.test(t)}function _S(t=kn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vS(t=kn()){return/crios\//i.test(t)}function bS(t=kn()){return/iemobile/i.test(t)}function wS(t=kn()){return/android/i.test(t)}function ES(t=kn()){return/blackberry/i.test(t)}function TS(t=kn()){return/webos/i.test(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _v(t,e=[]){let n;switch(t){case"Browser":n=bm(kn());break;case"Worker":n=`${bm(kn())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ps}/${i}`}async function vv(t,e){return zf(t,"GET","/v2/recaptchaConfig",sS(t,e))}function wm(t){return t!==void 0&&t.enterprise!==void 0}class bv{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function CS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=Bf("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",IS().appendChild(i)})}const SS="https://www.google.com/recaptcha/enterprise.js?render=",AS="recaptcha-enterprise";class kS{constructor(e){this.type=AS,this.auth=wv(e)}async verify(e="verify",n=!1){async function i(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{vv(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new bv(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(s,o,a){const c=window.grecaptcha;wm(c)?c.enterprise.ready(()=>{try{c.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(l=>{a(l)})}catch(l){a(l)}}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{i(this.auth).then(a=>{if(!n&&wm(window.grecaptcha))r(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}CS(SS+a).then(()=>{r(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}/**
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
 */class RS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Em(this),this.idTokenSubscription=new Em(this),this.beforeStateQueue=new RS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ui(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await Fr.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return we(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await cc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=tS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ut(e):null;return n&&we(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&we(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ui(e))})}async initializeRecaptchaConfig(){const e=await vv(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new bv(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new kS(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ds("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ui(e)||this._popupRedirectResolver;we(n,this,"argument-error"),this.redirectPersistenceManager=await Fr.create(this,[Ui(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return we(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,i,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return we(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_v(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&XC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function wv(t){return Ut(t)}class Em{constructor(e){this.auth=e,this.observer=null,this.addObserver=VI(n=>this.observer=n)}get next(){return we(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function xS(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Ui);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}new Uo(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uo(2e3,1e4);/**
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
 */new Uo(3e4,6e4);/**
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
 */new Uo(5e3,15e3);var Tm="@firebase/auth",Im="0.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){we(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function PS(t){Rn(new dn("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;we(o&&!o.includes(":"),"invalid-api-key",{appName:i.name}),we(!(a!=null&&a.includes(":")),"argument-error",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_v(t)},l=new NS(i,r,s,c);return xS(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Rn(new dn("auth-internal",e=>{const n=wv(e.getProvider("auth").getImmediate());return(i=>new DS(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kt(Tm,Im,OS(t)),Kt(Tm,Im,"esm2017")}/**
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
 */const MS=5*60;RI("authIdTokenMaxAge");PS("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LS=new Map,FS={activated:!1,tokenObservers:[]};function Nn(t){return LS.get(t)||Object.assign({},FS)}const Cm={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e,n,i,r,s){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=r,this.upperBound=s,this.pending=null,this.nextErrorWaitInterval=r,r>s)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new lo,await VS(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new lo,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function VS(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},lc=new ds("appCheck","AppCheck",$S);function BS(t){if(!Nn(t).activated)throw lc.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS="firebase-app-check-database",zS=1,uh="firebase-app-check-store";let _a=null;function HS(){return _a||(_a=new Promise((t,e)=>{try{const n=indexedDB.open(jS,zS);n.onsuccess=i=>{t(i.target.result)},n.onerror=i=>{var r;e(lc.create("storage-open",{originalErrorMessage:(r=i.target.error)===null||r===void 0?void 0:r.message}))},n.onupgradeneeded=i=>{const r=i.target.result;switch(i.oldVersion){case 0:r.createObjectStore(uh,{keyPath:"compositeKey"})}}}catch(n){e(lc.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),_a)}function KS(t,e){return WS(qS(t),e)}async function WS(t,e){const i=(await HS()).transaction(uh,"readwrite"),s=i.objectStore(uh).put({compositeKey:t,value:e});return new Promise((o,a)=>{s.onsuccess=c=>{o()},i.onerror=c=>{var l;a(lc.create("storage-set",{originalErrorMessage:(l=c.target.error)===null||l===void 0?void 0:l.message}))}})}function qS(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh=new Fo("@firebase/app-check");function Sm(t,e){return tv()?KS(t,e).catch(n=>{hh.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS={error:"UNKNOWN_ERROR"};function YS(t){return sl.encodeString(JSON.stringify(t),!1)}async function fh(t,e=!1){const n=t.app;BS(n);const i=Nn(n);let r=i.token,s;if(r&&!Ps(r)&&(i.token=void 0,r=void 0),!r){const c=await i.cachedTokenPromise;c&&(Ps(c)?r=c:await Sm(n,void 0))}if(!e&&r&&Ps(r))return{token:r.token};let o=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),r=await Nn(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?hh.warn(c.message):hh.error(c),s=c}let a;return r?s?Ps(r)?a={token:r.token,internalError:s}:a=km(s):(a={token:r.token},i.token=r,await Sm(n,r)):a=km(s),o&&JS(n,a),a}function QS(t,e,n,i){const{app:r}=t,s=Nn(r),o={next:n,error:i,type:e};if(s.tokenObservers=[...s.tokenObservers,o],s.token&&Ps(s.token)){const a=s.token;Promise.resolve().then(()=>{n({token:a.token}),Am(t)}).catch(()=>{})}s.cachedTokenPromise.then(()=>Am(t))}function Ev(t,e){const n=Nn(t),i=n.tokenObservers.filter(r=>r.next!==e);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function Am(t){const{app:e}=t,n=Nn(e);let i=n.tokenRefresher;i||(i=XS(t),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function XS(t){const{app:e}=t;return new US(async()=>{const n=Nn(e);let i;if(n.token?i=await fh(t,!0):i=await fh(t),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=Nn(e);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const r=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,r),Math.max(0,i-Date.now())}else return 0},Cm.RETRIAL_MIN_WAIT,Cm.RETRIAL_MAX_WAIT)}function JS(t,e){const n=Nn(t).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function Ps(t){return t.expireTimeMillis-Date.now()>0}function km(t){return{token:YS(GS),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Nn(this.app);for(const n of e)Ev(this.app,n.next);return Promise.resolve()}}function eA(t,e){return new ZS(t,e)}function tA(t){return{getToken:e=>fh(t,e),addTokenListener:e=>QS(t,"INTERNAL",e),removeTokenListener:e=>Ev(t.app,e)}}const nA="@firebase/app-check",iA="0.6.5",rA="app-check",Rm="app-check-internal";function sA(){Rn(new dn(rA,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return eA(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Rm).initialize()})),Rn(new dn(Rm,t=>{const e=t.getProvider("app-check").getImmediate();return tA(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Kt(nA,iA)}sA();var oA="firebase",aA="9.20.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kt(oA,aA,"app");const Tv=Symbol("firebaseApp");function Hf(t){return nl()&&Ht(Tv,null)||ov(t)}const En=()=>{};function Kf(t,e){return e.split(".").reduce((n,i)=>n&&n[i],t)}function cA(t,e,n){const i=(""+e).split("."),r=i.pop(),s=i.reduce((o,a)=>o&&o[a],t);if(s!=null)return Array.isArray(s)?s.splice(Number(r),1,n):s[r]=n}function ur(t){return!!t&&typeof t=="object"}const lA=Object.prototype;function uA(t){return ur(t)&&Object.getPrototypeOf(t)===lA}function Wf(t){return ur(t)&&t.type==="document"}function Iv(t){return ur(t)&&t.type==="collection"}function hA(t){return Wf(t)||Iv(t)}function fA(t){return ur(t)&&t.type==="query"}function dA(t){return ur(t)&&"ref"in t}function pA(t){return ur(t)&&typeof t.bucket=="string"}function mA(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}function gA(){return!!(nl()&&Ht(G_,null))}const Nm="@firebase/database",xm="0.14.4";/**
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
 */let Cv="";function yA(t){Cv=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),lt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:uo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ei(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new _A(e)}}catch{}return new vA},Vi=Sv("localStorage"),dh=Sv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur=new Fo("@firebase/database"),bA=function(){let t=1;return function(){return t++}}(),Av=function(t){const e=zI(t),n=new UI;n.update(e);const i=n.digest();return sl.encodeByteArray(i)},Vo=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Vo.apply(null,i):typeof i=="object"?e+=lt(i):e+=i,e+=" "}return e};let Yi=null,Dm=!0;const wA=function(t,e){P(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Ur.logLevel=ye.VERBOSE,Yi=Ur.log.bind(Ur),e&&dh.set("logging_enabled",!0)):typeof t=="function"?Yi=t:(Yi=null,dh.remove("logging_enabled"))},gt=function(...t){if(Dm===!0&&(Dm=!1,Yi===null&&dh.get("logging_enabled")===!0&&wA(!0)),Yi){const e=Vo.apply(null,t);Yi(e)}},$o=function(t){return function(...e){gt(t,...e)}},ph=function(...t){const e="FIREBASE INTERNAL ERROR: "+Vo(...t);Ur.error(e)},er=function(...t){const e=`FIREBASE FATAL ERROR: ${Vo(...t)}`;throw Ur.error(e),new Error(e)},Wt=function(...t){const e="FIREBASE WARNING: "+Vo(...t);Ur.warn(e)},EA=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Wt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},kv=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},TA=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Gr="[MIN_NAME]",tr="[MAX_NAME]",ms=function(t,e){if(t===e)return 0;if(t===Gr||e===tr)return-1;if(e===Gr||t===tr)return 1;{const n=Om(t),i=Om(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},IA=function(t,e){return t===e?0:t<e?-1:1},As=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+lt(e))},qf=function(t){if(typeof t!="object"||t===null)return lt(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=lt(e[i]),n+=":",n+=qf(t[e[i]]);return n+="}",n},Rv=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let r=0;r<n;r+=e)r+e>n?i.push(t.substring(r,n)):i.push(t.substring(r,r+e));return i};function Jt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Nv=function(t){P(!kv(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let r,s,o,a,c;t===0?(s=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),s=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-i-n))));const l=[];for(c=n;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(s%2?1:0),s=Math.floor(s/2);l.push(r?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let f=parseInt(u.substr(c,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},CA=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},SA=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},AA=new RegExp("^-?(0*)\\d{1,10}$"),kA=-2147483648,RA=2147483647,Om=function(t){if(AA.test(t)){const e=Number(t);if(e>=kA&&e<=RA)return e}return null},Bo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Wt("Exception was thrown by user callback.",n),e},Math.floor(0))}},NA=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Hs=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class xA{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Wt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(gt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Wt(e)}}class mh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}mh.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf="5",xv="v",Dv="s",Ov="r",Pv="f",Mv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Lv="ls",Fv="p",gh="ac",Uv="websocket",Vv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e,n,i,r,s=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Vi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Vi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function PA(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function $v(t,e,n){P(typeof e=="string","typeof type must == string"),P(typeof n=="object","typeof params must == object");let i;if(e===Uv)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Vv)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);PA(t)&&(n.ns=t.namespace);const r=[];return Jt(n,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(){this.counters_={}}incrementCounter(e,n=1){ei(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return bI(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du={},pu={};function Yf(t){const e=t.toString();return du[e]||(du[e]=new MA),du[e]}function LA(t,e){const n=t.toString();return pu[n]||(pu[n]=e()),pu[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&Bo(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm="start",UA="close",VA="pLPCommand",$A="pRTLPCB",Bv="id",jv="pw",zv="ser",BA="cb",jA="seg",zA="ts",HA="d",KA="dframe",Hv=1870,Kv=30,WA=Hv-Kv,qA=25e3,GA=3e4;class Sr{constructor(e,n,i,r,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=$o(e),this.stats_=Yf(n),this.urlFn=c=>(this.appCheckToken&&(c[gh]=this.appCheckToken),$v(n,Vv,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new FA(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(GA)),TA(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Qf((...s)=>{const[o,a,c,l,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Pm)this.id=a,this.password=c;else if(o===UA)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Pm]="t",i[zv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[BA]=this.scriptTagHolder.uniqueCallbackIdentifier),i[xv]=Gf,this.transportSessionId&&(i[Dv]=this.transportSessionId),this.lastSessionId&&(i[Lv]=this.lastSessionId),this.applicationId&&(i[Fv]=this.applicationId),this.appCheckToken&&(i[gh]=this.appCheckToken),typeof location<"u"&&location.hostname&&Mv.test(location.hostname)&&(i[Ov]=Pv);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Sr.forceAllow_=!0}static forceDisallow(){Sr.forceDisallow_=!0}static isAvailable(){return Sr.forceAllow_?!0:!Sr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!CA()&&!SA()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=lt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=X_(n),r=Rv(i,WA);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[KA]="t",i[Bv]=e,i[jv]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=lt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Qf{constructor(e,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=bA(),window[VA+this.uniqueCallbackIdentifier]=e,window[$A+this.uniqueCallbackIdentifier]=n,this.myIFrame=Qf.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){gt("frame writing exception"),a.stack&&gt(a.stack),gt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||gt("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Bv]=this.myID,e[jv]=this.myPW,e[zv]=this.currentSerial;let n=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Kv+i.length<=Hv;){const o=this.pendingSegs.shift();i=i+"&"+jA+r+"="+o.seg+"&"+zA+r+"="+o.ts+"&"+HA+r+"="+o.d,r++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(i,Math.floor(qA)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{gt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA=16384,QA=45e3;let uc=null;typeof MozWebSocket<"u"?uc=MozWebSocket:typeof WebSocket<"u"&&(uc=WebSocket);class rn{constructor(e,n,i,r,s,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=$o(this.connId),this.stats_=Yf(n),this.connURL=rn.connectionURL_(n,o,a,r,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,r,s){const o={};return o[xv]=Gf,typeof location<"u"&&location.hostname&&Mv.test(location.hostname)&&(o[Ov]=Pv),n&&(o[Dv]=n),i&&(o[Lv]=i),r&&(o[gh]=r),s&&(o[Fv]=s),$v(e,Uv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Vi.set("previous_websocket_failure",!0);try{let i;ev(),this.mySock=new uc(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){rn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&uc!==null&&!rn.forceDisallow_}static previouslyFailed(){return Vi.isInMemoryStorage||Vi.get("previous_websocket_failure")===!0}markConnectionHealthy(){Vi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=uo(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(P(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=lt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Rv(n,YA);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(QA))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}rn.responsesRequiredToBeHealthy=2;rn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Sr,rn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=rn&&rn.isAvailable();let i=n&&!rn.previouslyFailed();if(e.webSocketOnly&&(n||Wt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[rn];else{const r=this.transports_=[];for(const s of po.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);po.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}po.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA=6e4,JA=5e3,ZA=10*1024,ek=100*1024,mu="t",Mm="d",tk="s",Lm="r",nk="e",Fm="o",Um="a",Vm="n",$m="p",ik="h";class rk{constructor(e,n,i,r,s,o,a,c,l,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=$o("c:"+this.id+":"),this.transportManager_=new po(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Hs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ek?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ZA?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(mu in e){const n=e[mu];n===Um?this.upgradeIfSecondaryHealthy_():n===Lm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Fm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=As("t",e),i=As("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:$m,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Um,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Vm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=As("t",e),i=As("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=As(mu,e);if(Mm in e){const i=e[Mm];if(n===ik){const r=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===Vm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===tk?this.onConnectionShutdown_(i):n===Lm?this.onReset_(i):n===nk?ph("Server Error: "+i):n===Fm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ph("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Gf!==i&&Wt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Hs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(XA))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Hs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(JA))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:$m,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Vi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{put(e,n,i,r){}merge(e,n,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(e){this.allowedEvents_=e,this.listeners_={},P(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const r=this.getInitialEvent(e);r&&n.apply(i,r)}off(e,n,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===n&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(e){P(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc extends qv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Uf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new hc}getInitialEvent(e){return P(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm=32,jm=768;class Me{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Se(){return new Me("")}function fe(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function yi(t){return t.pieces_.length-t.pieceNum_}function xe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Me(t.pieces_,e)}function Gv(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function sk(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Yv(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Qv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Me(e,0)}function st(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof Me)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new Me(n,0)}function ue(t){return t.pieceNum_>=t.pieces_.length}function Qt(t,e){const n=fe(t),i=fe(e);if(n===null)return e;if(n===i)return Qt(xe(t),xe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Xv(t,e){if(yi(t)!==yi(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function an(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(yi(t)>yi(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class ok{constructor(e,n){this.errorPrefix_=n,this.parts_=Yv(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=ol(this.parts_[i]);Jv(this)}}function ak(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ol(e),Jv(t)}function ck(t){const e=t.parts_.pop();t.byteLength_-=ol(e),t.parts_.length>0&&(t.byteLength_-=1)}function Jv(t){if(t.byteLength_>jm)throw new Error(t.errorPrefix_+"has a key path longer than "+jm+" bytes ("+t.byteLength_+").");if(t.parts_.length>Bm)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Bm+") or object contains a cycle "+Oi(t))}function Oi(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf extends qv{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Xf}getInitialEvent(e){return P(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks=1e3,lk=60*5*1e3,zm=30*1e3,uk=1.3,hk=3e4,fk="server_kill",Hm=3;class $n extends Wv{constructor(e,n,i,r,s,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=$n.nextPersistentConnectionId_++,this.log_=$o("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ks,this.maxReconnectDelay_=lk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!ev())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Xf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&hc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const r=++this.requestNumber_,s={r,a:e,b:n};this.log_(lt(s)),P(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const n=new lo,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,i,r){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),P(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:i};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const c=a.d,l=a.s;$n.warnOnListenWarnings_(c,n),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ei(e,"w")){const i=qr(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Wt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||FI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=zm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=LI(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,n)}sendUnlisten_(e,n,i,r){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,r){const s={p:n,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,i,r){this.putInternal("p",e,n,i,r)}merge(e,n,i,r){this.putInternal("m",e,n,i,r)}putInternal(e,n,i,r,s){this.initConnection_();const o={p:n,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+lt(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ph("Unrecognized action received from server: "+lt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){P(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ks,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ks,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>hk&&(this.reconnectDelay_=ks),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*uk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+$n.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,i())},l=function(h){P(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?gt("getToken() completed but was canceled"):(gt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new rk(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,d=>{Wt(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(fk)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Wt(h),c())}}}interrupt(e){gt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){gt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],am(this.interruptReasons_)&&(this.reconnectDelay_=ks,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(s=>qf(s)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const i=new Me(e).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(n),s.delete(n),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,n){gt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Hm&&(this.reconnectDelay_=zm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){gt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Hm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Cv.replace(/\./g,"-")]=1,Uf()?e["framework.cordova"]=1:Z_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=hc.getInstance().currentlyOnline();return am(this.interruptReasons_)&&e}}$n.nextPersistentConnectionId_=0;$n.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new pe(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new pe(Gr,e),r=new pe(Gr,n);return this.compare(i,r)!==0}minPost(){return pe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let va;class Zv extends al{static get __EMPTY_NODE(){return va}static set __EMPTY_NODE(e){va=e}compare(e,n){return ms(e.name,n.name)}isDefinedOn(e){throw fs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return pe.MIN}maxPost(){return new pe(tr,va)}makePost(e,n){return P(typeof e=="string","KeyIndex indexValue must always be a string."),new pe(e,va)}toString(){return".key"}}const Vr=new Zv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,n,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class rt{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i??rt.RED,this.left=r??Lt.EMPTY_NODE,this.right=s??Lt.EMPTY_NODE}copy(e,n,i,r,s){return new rt(e??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Lt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,r;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return Lt.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}rt.RED=!0;rt.BLACK=!1;class dk{copy(e,n,i,r,s){return this}insert(e,n,i){return new rt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Lt{constructor(e,n=Lt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Lt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,rt.BLACK,null,null))}remove(e){return new Lt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,rt.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,r=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ba(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ba(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ba(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ba(this.root_,null,this.comparator_,!0,e)}}Lt.EMPTY_NODE=new dk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pk(t,e){return ms(t.name,e.name)}function Jf(t,e){return ms(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yh;function mk(t){yh=t}const e0=function(t){return typeof t=="number"?"number:"+Nv(t):"string:"+t},t0=function(t){if(t.isLeafNode()){const e=t.val();P(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ei(e,".sv"),"Priority must be a string or number.")}else P(t===yh||t.isEmpty(),"priority of unexpected type.");P(t===yh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Km;class nt{constructor(e,n=nt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,P(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),t0(this.priorityNode_)}static set __childrenNodeConstructor(e){Km=e}static get __childrenNodeConstructor(){return Km}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new nt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:nt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ue(e)?this:fe(e)===".priority"?this.priorityNode_:nt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:nt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=fe(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(P(i!==".priority"||yi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,nt.__childrenNodeConstructor.EMPTY_NODE.updateChild(xe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+e0(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Nv(this.value_):e+=this.value_,this.lazyHash_=Av(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===nt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof nt.__childrenNodeConstructor?-1:(P(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,r=nt.VALUE_TYPE_ORDER.indexOf(n),s=nt.VALUE_TYPE_ORDER.indexOf(i);return P(r>=0,"Unknown leaf type: "+n),P(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}nt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let n0,i0;function gk(t){n0=t}function yk(t){i0=t}class _k extends al{compare(e,n){const i=e.node.getPriority(),r=n.node.getPriority(),s=i.compareTo(r);return s===0?ms(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return pe.MIN}maxPost(){return new pe(tr,new nt("[PRIORITY-POST]",i0))}makePost(e,n){const i=n0(e);return new pe(n,new nt("[PRIORITY-POST]",i))}toString(){return".priority"}}const Et=new _k;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk=Math.log(2);class bk{constructor(e){const n=s=>parseInt(Math.log(s)/vk,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const fc=function(t,e,n,i){t.sort(e);const r=function(c,l){const u=l-c;let h,f;if(u===0)return null;if(u===1)return h=t[c],f=n?n(h):h,new rt(f,h.node,rt.BLACK,null,null);{const d=parseInt(u/2,10)+c,m=r(c,d),y=r(d+1,l);return h=t[d],f=n?n(h):h,new rt(f,h.node,rt.BLACK,m,y)}},s=function(c){let l=null,u=null,h=t.length;const f=function(m,y){const b=h-m,_=h;h-=m;const v=r(b+1,_),w=t[b],I=n?n(w):w;d(new rt(I,w.node,y,null,v))},d=function(m){l?(l.left=m,l=m):(u=m,l=m)};for(let m=0;m<c.count;++m){const y=c.nextBitIsOne(),b=Math.pow(2,c.count-(m+1));y?f(b,rt.BLACK):(f(b,rt.BLACK),f(b,rt.RED))}return u},o=new bk(t.length),a=s(o);return new Lt(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gu;const br={};class Un{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return P(br&&Et,"ChildrenNode.ts has not been loaded"),gu=gu||new Un({".priority":br},{".priority":Et}),gu}get(e){const n=qr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Lt?n:null}hasIndex(e){return ei(this.indexSet_,e.toString())}addIndex(e,n){P(e!==Vr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=n.getIterator(pe.Wrap);let o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();let a;r?a=fc(i,e.getCompare()):a=br;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new Un(u,l)}addToIndexes(e,n){const i=rc(this.indexes_,(r,s)=>{const o=qr(this.indexSet_,s);if(P(o,"Missing index implementation for "+s),r===br)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(pe.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),fc(a,o.getCompare())}else return br;else{const a=n.get(e.name);let c=r;return a&&(c=c.remove(new pe(e.name,a))),c.insert(e,e.node)}});return new Un(i,this.indexSet_)}removeFromIndexes(e,n){const i=rc(this.indexes_,r=>{if(r===br)return r;{const s=n.get(e.name);return s?r.remove(new pe(e.name,s)):r}});return new Un(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rs;class Ee{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&t0(this.priorityNode_),this.children_.isEmpty()&&P(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Rs||(Rs=new Ee(new Lt(Jf),null,Un.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Rs}updatePriority(e){return this.children_.isEmpty()?this:new Ee(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Rs:n}}getChild(e){const n=fe(e);return n===null?this:this.getImmediateChild(n).getChild(xe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(P(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new pe(e,n);let r,s;n.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?Rs:this.priorityNode_;return new Ee(r,o,s)}}updateChild(e,n){const i=fe(e);if(i===null)return n;{P(fe(e)!==".priority"||yi(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(xe(e),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,r=0,s=!0;if(this.forEachChild(Et,(o,a)=>{n[o]=a.val(e),i++,s&&Ee.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+e0(this.getPriority().val())+":"),this.forEachChild(Et,(n,i)=>{const r=i.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":Av(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new pe(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new pe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new pe(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,pe.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,pe.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===jo?-1:0}withIndex(e){if(e===Vr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Ee(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Vr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(Et),r=n.getIterator(Et);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Vr?null:this.indexMap_.get(e.toString())}}Ee.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class wk extends Ee{constructor(){super(new Lt(Jf),Ee.EMPTY_NODE,Un.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ee.EMPTY_NODE}isEmpty(){return!1}}const jo=new wk;Object.defineProperties(pe,{MIN:{value:new pe(Gr,Ee.EMPTY_NODE)},MAX:{value:new pe(tr,jo)}});Zv.__EMPTY_NODE=Ee.EMPTY_NODE;nt.__childrenNodeConstructor=Ee;mk(jo);yk(jo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek=!0;function yt(t,e=null){if(t===null)return Ee.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),P(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new nt(n,yt(e))}if(!(t instanceof Array)&&Ek){const n=[];let i=!1;if(Jt(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=yt(a);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),n.push(new pe(o,c)))}}),n.length===0)return Ee.EMPTY_NODE;const s=fc(n,pk,o=>o.name,Jf);if(i){const o=fc(n,Et.getCompare());return new Ee(s,yt(e),new Un({".priority":o},{".priority":Et}))}else return new Ee(s,yt(e),Un.Default)}else{let n=Ee.EMPTY_NODE;return Jt(t,(i,r)=>{if(ei(t,i)&&i.substring(0,1)!=="."){const s=yt(r);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(i,s))}}),n.updatePriority(yt(e))}}gk(yt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk extends al{constructor(e){super(),this.indexPath_=e,P(!ue(e)&&fe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),r=this.extractChild(n.node),s=i.compareTo(r);return s===0?ms(e.name,n.name):s}makePost(e,n){const i=yt(e),r=Ee.EMPTY_NODE.updateChild(this.indexPath_,i);return new pe(n,r)}maxPost(){const e=Ee.EMPTY_NODE.updateChild(this.indexPath_,jo);return new pe(tr,e)}toString(){return Yv(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik extends al{compare(e,n){const i=e.node.compareTo(n.node);return i===0?ms(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return pe.MIN}maxPost(){return pe.MAX}makePost(e,n){const i=yt(e);return new pe(n,i)}toString(){return".value"}}const Ck=new Ik;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sk(t){return{type:"value",snapshotNode:t}}function Ak(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function kk(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Wm(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Rk(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Et}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return P(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return P(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Gr}hasEnd(){return this.endSet_}getIndexEndValue(){return P(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return P(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:tr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return P(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Et}copy(){const e=new Zf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function qm(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Et?n="$priority":t.index_===Ck?n="$value":t.index_===Vr?n="$key":(P(t.index_ instanceof Tk,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=lt(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=lt(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+lt(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=lt(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+lt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Gm(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Et&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc extends Wv{constructor(e,n,i,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=$o("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(P(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=dc.getListenId_(e,i),a={};this.listens_[o]=a;const c=qm(e._queryParams);this.restRequest_(s+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(s,h,!1,i),qr(this.listens_,o)===a){let f;l?l===401?f="permission_denied":f="rest_error:"+l:f="ok",r(f,null)}})}unlisten(e,n){const i=dc.getListenId_(e,n);delete this.listens_[i]}get(e){const n=qm(e._queryParams),i=e._path.toString(),r=new lo;return this.restRequest_(i+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(i,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(n.auth=r.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Vf(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=uo(a.responseText)}catch{Wt("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,c)}else a.status!==401&&a.status!==404&&Wt("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(){this.rootNode_=Ee.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(){return{value:null,children:new Map}}function r0(t,e,n){if(ue(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=fe(e);t.children.has(i)||t.children.set(i,pc());const r=t.children.get(i);e=xe(e),r0(r,e,n)}}function _h(t,e,n){t.value!==null?n(e,t.value):xk(t,(i,r)=>{const s=new Me(e.toString()+"/"+i);_h(r,s,n)})}function xk(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Jt(this.last_,(i,r)=>{n[i]=n[i]-r}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym=10*1e3,Ok=30*1e3,Pk=5*60*1e3;class Mk{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Dk(e);const i=Ym+(Ok-Ym)*Math.random();Hs(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;Jt(e,(r,s)=>{s>0&&ei(this.statsToReport_,r)&&(n[r]=s,i=!0)}),i&&this.server_.reportStats(n),Hs(this.reportStats_.bind(this),Math.floor(Math.random()*2*Pk))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Tn||(Tn={}));function s0(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function o0(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function a0(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=Tn.ACK_USER_WRITE,this.source=s0()}operationForChild(e){if(ue(this.path)){if(this.affectedTree.value!=null)return P(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Me(e));return new mc(Se(),n,this.revert)}}else return P(fe(this.path)===e,"operationForChild called for unrelated child."),new mc(xe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=Tn.OVERWRITE}operationForChild(e){return ue(this.path)?new nr(this.source,Se(),this.snap.getImmediateChild(e)):new nr(this.source,xe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=Tn.MERGE}operationForChild(e){if(ue(this.path)){const n=this.children.subtree(new Me(e));return n.isEmpty()?null:n.value?new nr(this.source,Se(),n.value):new mo(this.source,Se(),n)}else return P(fe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new mo(this.source,xe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ue(e))return this.isFullyInitialized()&&!this.filtered_;const n=fe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function Lk(t,e,n,i){const r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(Rk(o.childName,o.snapshotNode))}),Ns(t,r,"child_removed",e,i,n),Ns(t,r,"child_added",e,i,n),Ns(t,r,"child_moved",s,i,n),Ns(t,r,"child_changed",e,i,n),Ns(t,r,"value",e,i,n),r}function Ns(t,e,n,i,r,s){const o=i.filter(a=>a.type===n);o.sort((a,c)=>Uk(t,a,c)),o.forEach(a=>{const c=Fk(t,a,s);r.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,t.query_))})})}function Fk(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Uk(t,e,n){if(e.childName==null||n.childName==null)throw fs("Should only compare child_ events.");const i=new pe(e.childName,e.snapshotNode),r=new pe(n.childName,n.snapshotNode);return t.index_.compare(i,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c0(t,e){return{eventCache:t,serverCache:e}}function Ks(t,e,n,i){return c0(new ed(e,n,i),t.serverCache)}function l0(t,e,n,i){return c0(t.eventCache,new ed(e,n,i))}function vh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ir(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yu;const Vk=()=>(yu||(yu=new Lt(IA)),yu);class Re{constructor(e,n=Vk()){this.value=e,this.children=n}static fromObject(e){let n=new Re(null);return Jt(e,(i,r)=>{n=n.set(new Me(i),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Se(),value:this.value};if(ue(e))return null;{const i=fe(e),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(xe(e),n);return s!=null?{path:st(new Me(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ue(e))return this;{const n=fe(e),i=this.children.get(n);return i!==null?i.subtree(xe(e)):new Re(null)}}set(e,n){if(ue(e))return new Re(n,this.children);{const i=fe(e),s=(this.children.get(i)||new Re(null)).set(xe(e),n),o=this.children.insert(i,s);return new Re(this.value,o)}}remove(e){if(ue(e))return this.children.isEmpty()?new Re(null):new Re(null,this.children);{const n=fe(e),i=this.children.get(n);if(i){const r=i.remove(xe(e));let s;return r.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,r),this.value===null&&s.isEmpty()?new Re(null):new Re(this.value,s)}else return this}}get(e){if(ue(e))return this.value;{const n=fe(e),i=this.children.get(n);return i?i.get(xe(e)):null}}setTree(e,n){if(ue(e))return n;{const i=fe(e),s=(this.children.get(i)||new Re(null)).setTree(xe(e),n);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new Re(this.value,o)}}fold(e){return this.fold_(Se(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(st(e,r),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,Se(),n)}findOnPath_(e,n,i){const r=this.value?i(n,this.value):!1;if(r)return r;if(ue(e))return null;{const s=fe(e),o=this.children.get(s);return o?o.findOnPath_(xe(e),st(n,s),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Se(),n)}foreachOnPath_(e,n,i){if(ue(e))return this;{this.value&&i(n,this.value);const r=fe(e),s=this.children.get(r);return s?s.foreachOnPath_(xe(e),st(n,r),i):new Re(null)}}foreach(e){this.foreach_(Se(),e)}foreach_(e,n){this.children.inorderTraversal((i,r)=>{r.foreach_(st(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.writeTree_=e}static empty(){return new fn(new Re(null))}}function Ws(t,e,n){if(ue(e))return new fn(new Re(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let s=i.value;const o=Qt(r,e);return s=s.updateChild(o,n),new fn(t.writeTree_.set(r,s))}else{const r=new Re(n),s=t.writeTree_.setTree(e,r);return new fn(s)}}}function Qm(t,e,n){let i=t;return Jt(n,(r,s)=>{i=Ws(i,st(e,r),s)}),i}function Xm(t,e){if(ue(e))return fn.empty();{const n=t.writeTree_.setTree(e,new Re(null));return new fn(n)}}function bh(t,e){return hr(t,e)!=null}function hr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Qt(n.path,e)):null}function Jm(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Et,(i,r)=>{e.push(new pe(i,r))}):t.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new pe(i,r.value))}),e}function pi(t,e){if(ue(e))return t;{const n=hr(t,e);return n!=null?new fn(new Re(n)):new fn(t.writeTree_.subtree(e))}}function wh(t){return t.writeTree_.isEmpty()}function Yr(t,e){return u0(Se(),t.writeTree_,e)}function u0(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(P(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):n=u0(st(t,r),s,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(st(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h0(t,e){return g0(e,t)}function $k(t,e,n,i,r){P(i>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:r}),r&&(t.visibleWrites=Ws(t.visibleWrites,e,n)),t.lastWriteId=i}function Bk(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function jk(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);P(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let r=i.visible,s=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&zk(a,i.path)?r=!1:an(i.path,a.path)&&(s=!0)),o--}if(r){if(s)return Hk(t),!0;if(i.snap)t.visibleWrites=Xm(t.visibleWrites,i.path);else{const a=i.children;Jt(a,c=>{t.visibleWrites=Xm(t.visibleWrites,st(i.path,c))})}return!0}else return!1}function zk(t,e){if(t.snap)return an(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&an(st(t.path,n),e))return!0;return!1}function Hk(t){t.visibleWrites=f0(t.allWrites,Kk,Se()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Kk(t){return t.visible}function f0(t,e,n){let i=fn.empty();for(let r=0;r<t.length;++r){const s=t[r];if(e(s)){const o=s.path;let a;if(s.snap)an(n,o)?(a=Qt(n,o),i=Ws(i,a,s.snap)):an(o,n)&&(a=Qt(o,n),i=Ws(i,Se(),s.snap.getChild(a)));else if(s.children){if(an(n,o))a=Qt(n,o),i=Qm(i,a,s.children);else if(an(o,n))if(a=Qt(o,n),ue(a))i=Qm(i,Se(),s.children);else{const c=qr(s.children,fe(a));if(c){const l=c.getChild(xe(a));i=Ws(i,Se(),l)}}}else throw fs("WriteRecord should have .snap or .children")}}return i}function d0(t,e,n,i,r){if(!i&&!r){const s=hr(t.visibleWrites,e);if(s!=null)return s;{const o=pi(t.visibleWrites,e);if(wh(o))return n;if(n==null&&!bh(o,Se()))return null;{const a=n||Ee.EMPTY_NODE;return Yr(o,a)}}}else{const s=pi(t.visibleWrites,e);if(!r&&wh(s))return n;if(!r&&n==null&&!bh(s,Se()))return null;{const o=function(l){return(l.visible||r)&&(!i||!~i.indexOf(l.writeId))&&(an(l.path,e)||an(e,l.path))},a=f0(t.allWrites,o,e),c=n||Ee.EMPTY_NODE;return Yr(a,c)}}}function Wk(t,e,n){let i=Ee.EMPTY_NODE;const r=hr(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(Et,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(n){const s=pi(t.visibleWrites,e);return n.forEachChild(Et,(o,a)=>{const c=Yr(pi(s,new Me(o)),a);i=i.updateImmediateChild(o,c)}),Jm(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=pi(t.visibleWrites,e);return Jm(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function qk(t,e,n,i,r){P(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=st(e,n);if(bh(t.visibleWrites,s))return null;{const o=pi(t.visibleWrites,s);return wh(o)?r.getChild(n):Yr(o,r.getChild(n))}}function Gk(t,e,n,i){const r=st(e,n),s=hr(t.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(n)){const o=pi(t.visibleWrites,r);return Yr(o,i.getNode().getImmediateChild(n))}else return null}function Yk(t,e){return hr(t.visibleWrites,e)}function Qk(t,e,n,i,r,s,o){let a;const c=pi(t.visibleWrites,e),l=hr(c,Se());if(l!=null)a=l;else if(n!=null)a=Yr(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let d=f.getNext();for(;d&&u.length<r;)h(d,i)!==0&&u.push(d),d=f.getNext();return u}else return[]}function Xk(){return{visibleWrites:fn.empty(),allWrites:[],lastWriteId:-1}}function Eh(t,e,n,i){return d0(t.writeTree,t.treePath,e,n,i)}function p0(t,e){return Wk(t.writeTree,t.treePath,e)}function Zm(t,e,n,i){return qk(t.writeTree,t.treePath,e,n,i)}function gc(t,e){return Yk(t.writeTree,st(t.treePath,e))}function Jk(t,e,n,i,r,s){return Qk(t.writeTree,t.treePath,e,n,i,r,s)}function td(t,e,n){return Gk(t.writeTree,t.treePath,e,n)}function m0(t,e){return g0(st(t.treePath,e),t.writeTree)}function g0(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;P(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),P(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(i,Wm(i,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(i,kk(i,r.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(i,Ak(i,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(i,Wm(i,e.snapshotNode,r.oldSnap));else throw fs("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const y0=new eR;class nd{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new ed(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return td(this.writes_,e,i)}}getChildAfterChild(e,n,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ir(this.viewCache_),s=Jk(this.writes_,r,n,1,i,e);return s.length===0?null:s[0]}}function tR(t,e){P(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),P(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function nR(t,e,n,i,r){const s=new Zk;let o,a;if(n.type===Tn.OVERWRITE){const l=n;l.source.fromUser?o=Th(t,e,l.path,l.snap,i,r,s):(P(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!ue(l.path),o=yc(t,e,l.path,l.snap,i,r,a,s))}else if(n.type===Tn.MERGE){const l=n;l.source.fromUser?o=rR(t,e,l.path,l.children,i,r,s):(P(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=Ih(t,e,l.path,l.children,i,r,a,s))}else if(n.type===Tn.ACK_USER_WRITE){const l=n;l.revert?o=aR(t,e,l.path,i,r,s):o=sR(t,e,l.path,l.affectedTree,i,r,s)}else if(n.type===Tn.LISTEN_COMPLETE)o=oR(t,e,n.path,i,s);else throw fs("Unknown operation type: "+n.type);const c=s.getChanges();return iR(e,o,c),{viewCache:o,changes:c}}function iR(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=vh(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(Sk(vh(e)))}}function _0(t,e,n,i,r,s){const o=e.eventCache;if(gc(i,n)!=null)return e;{let a,c;if(ue(n))if(P(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=ir(e),u=l instanceof Ee?l:Ee.EMPTY_NODE,h=p0(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const l=Eh(i,ir(e));a=t.filter.updateFullNode(e.eventCache.getNode(),l,s)}else{const l=fe(n);if(l===".priority"){P(yi(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=Zm(i,n,u,c);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=xe(n);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const f=Zm(i,n,o.getNode(),c);f!=null?h=o.getNode().getImmediateChild(l).updateChild(u,f):h=o.getNode().getImmediateChild(l)}else h=td(i,l,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),l,h,u,r,s):a=o.getNode()}}return Ks(e,a,o.isFullyInitialized()||ue(n),t.filter.filtersNodes())}}function yc(t,e,n,i,r,s,o,a){const c=e.serverCache;let l;const u=o?t.filter:t.filter.getIndexedFilter();if(ue(n))l=u.updateFullNode(c.getNode(),i,null);else if(u.filtersNodes()&&!c.isFiltered()){const d=c.getNode().updateChild(n,i);l=u.updateFullNode(c.getNode(),d,null)}else{const d=fe(n);if(!c.isCompleteForPath(n)&&yi(n)>1)return e;const m=xe(n),b=c.getNode().getImmediateChild(d).updateChild(m,i);d===".priority"?l=u.updatePriority(c.getNode(),b):l=u.updateChild(c.getNode(),d,b,m,y0,null)}const h=l0(e,l,c.isFullyInitialized()||ue(n),u.filtersNodes()),f=new nd(r,h,s);return _0(t,h,n,r,f,a)}function Th(t,e,n,i,r,s,o){const a=e.eventCache;let c,l;const u=new nd(r,e,s);if(ue(n))l=t.filter.updateFullNode(e.eventCache.getNode(),i,o),c=Ks(e,l,!0,t.filter.filtersNodes());else{const h=fe(n);if(h===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),i),c=Ks(e,l,a.isFullyInitialized(),a.isFiltered());else{const f=xe(n),d=a.getNode().getImmediateChild(h);let m;if(ue(f))m=i;else{const y=u.getCompleteChild(h);y!=null?Gv(f)===".priority"&&y.getChild(Qv(f)).isEmpty()?m=y:m=y.updateChild(f,i):m=Ee.EMPTY_NODE}if(d.equals(m))c=e;else{const y=t.filter.updateChild(a.getNode(),h,m,f,u,o);c=Ks(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function eg(t,e){return t.eventCache.isCompleteForChild(e)}function rR(t,e,n,i,r,s,o){let a=e;return i.foreach((c,l)=>{const u=st(n,c);eg(e,fe(u))&&(a=Th(t,a,u,l,r,s,o))}),i.foreach((c,l)=>{const u=st(n,c);eg(e,fe(u))||(a=Th(t,a,u,l,r,s,o))}),a}function tg(t,e,n){return n.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function Ih(t,e,n,i,r,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;ue(n)?l=i:l=new Re(null).setTree(n,i);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const d=e.serverCache.getNode().getImmediateChild(h),m=tg(t,d,f);c=yc(t,c,new Me(h),m,r,s,o,a)}}),l.children.inorderTraversal((h,f)=>{const d=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!d){const m=e.serverCache.getNode().getImmediateChild(h),y=tg(t,m,f);c=yc(t,c,new Me(h),y,r,s,o,a)}}),c}function sR(t,e,n,i,r,s,o){if(gc(r,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(i.value!=null){if(ue(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return yc(t,e,n,c.getNode().getChild(n),r,s,a,o);if(ue(n)){let l=new Re(null);return c.getNode().forEachChild(Vr,(u,h)=>{l=l.set(new Me(u),h)}),Ih(t,e,n,l,r,s,a,o)}else return e}else{let l=new Re(null);return i.foreach((u,h)=>{const f=st(n,u);c.isCompleteForPath(f)&&(l=l.set(u,c.getNode().getChild(f)))}),Ih(t,e,n,l,r,s,a,o)}}function oR(t,e,n,i,r){const s=e.serverCache,o=l0(e,s.getNode(),s.isFullyInitialized()||ue(n),s.isFiltered());return _0(t,o,n,i,y0,r)}function aR(t,e,n,i,r,s){let o;if(gc(i,n)!=null)return e;{const a=new nd(i,e,r),c=e.eventCache.getNode();let l;if(ue(n)||fe(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Eh(i,ir(e));else{const h=e.serverCache.getNode();P(h instanceof Ee,"serverChildren would be complete if leaf node"),u=p0(i,h)}u=u,l=t.filter.updateFullNode(c,u,s)}else{const u=fe(n);let h=td(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=t.filter.updateChild(c,u,h,xe(n),a,s):e.eventCache.getNode().hasChild(u)?l=t.filter.updateChild(c,u,Ee.EMPTY_NODE,xe(n),a,s):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Eh(i,ir(e)),o.isLeafNode()&&(l=t.filter.updateFullNode(l,o,s)))}return o=e.serverCache.isFullyInitialized()||gc(i,Se())!=null,Ks(e,l,o,t.filter.filtersNodes())}}function cR(t,e){const n=ir(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ue(e)&&!n.getImmediateChild(fe(e)).isEmpty())?n.getChild(e):null}function ng(t,e,n,i){e.type===Tn.MERGE&&e.source.queryId!==null&&(P(ir(t.viewCache_),"We should always have a full cache before handling merges"),P(vh(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,s=nR(t.processor_,r,e,n,i);return tR(t.processor_,s.viewCache),P(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,lR(t,s.changes,s.viewCache.eventCache.getNode(),null)}function lR(t,e,n,i){const r=i?[i]:t.eventRegistrations_;return Lk(t.eventGenerator_,e,n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ig;function uR(t){P(!ig,"__referenceConstructor has already been defined"),ig=t}function id(t,e,n,i){const r=e.source.queryId;if(r!==null){const s=t.views.get(r);return P(s!=null,"SyncTree gave us an op for an invalid query."),ng(s,e,n,i)}else{let s=[];for(const o of t.views.values())s=s.concat(ng(o,e,n,i));return s}}function rd(t,e){let n=null;for(const i of t.views.values())n=n||cR(i,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rg;function hR(t){P(!rg,"__referenceConstructor has already been defined"),rg=t}class sg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Re(null),this.pendingWriteTree_=Xk(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function fR(t,e,n,i,r){return $k(t.pendingWriteTree_,e,n,i,r),r?ll(t,new nr(s0(),e,n)):[]}function Ar(t,e,n=!1){const i=Bk(t.pendingWriteTree_,e);if(jk(t.pendingWriteTree_,e)){let s=new Re(null);return i.snap!=null?s=s.set(Se(),!0):Jt(i.children,o=>{s=s.set(new Me(o),!0)}),ll(t,new mc(i.path,s,n))}else return[]}function cl(t,e,n){return ll(t,new nr(o0(),e,n))}function dR(t,e,n){const i=Re.fromObject(n);return ll(t,new mo(o0(),e,i))}function pR(t,e,n,i){const r=E0(t,i);if(r!=null){const s=T0(r),o=s.path,a=s.queryId,c=Qt(o,e),l=new nr(a0(a),c,n);return I0(t,o,l)}else return[]}function mR(t,e,n,i){const r=E0(t,i);if(r){const s=T0(r),o=s.path,a=s.queryId,c=Qt(o,e),l=Re.fromObject(n),u=new mo(a0(a),c,l);return I0(t,o,u)}else return[]}function v0(t,e,n){const r=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=Qt(o,e),l=rd(a,c);if(l)return l});return d0(r,e,s,n,!0)}function ll(t,e){return b0(e,t.syncPointTree_,null,h0(t.pendingWriteTree_,Se()))}function b0(t,e,n,i){if(ue(t.path))return w0(t,e,n,i);{const r=e.get(Se());n==null&&r!=null&&(n=rd(r,Se()));let s=[];const o=fe(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const l=n?n.getImmediateChild(o):null,u=m0(i,o);s=s.concat(b0(a,c,l,u))}return r&&(s=s.concat(id(r,t,i,n))),s}}function w0(t,e,n,i){const r=e.get(Se());n==null&&r!=null&&(n=rd(r,Se()));let s=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,l=m0(i,o),u=t.operationForChild(o);u&&(s=s.concat(w0(u,a,c,l)))}),r&&(s=s.concat(id(r,t,i,n))),s}function E0(t,e){return t.tagToQueryMap.get(e)}function T0(t){const e=t.indexOf("$");return P(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Me(t.substr(0,e))}}function I0(t,e,n){const i=t.syncPointTree_.get(e);P(i,"Missing sync point for query tag that we're tracking");const r=h0(t.pendingWriteTree_,e);return id(i,n,r,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new sd(n)}node(){return this.node_}}class od{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=st(this.path_,e);return new od(this.syncTree_,n)}node(){return v0(this.syncTree_,this.path_)}}const gR=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},og=function(t,e,n){if(!t||typeof t!="object")return t;if(P(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return yR(t[".sv"],e,n);if(typeof t[".sv"]=="object")return _R(t[".sv"],e);P(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},yR=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:P(!1,"Unexpected server value: "+t)}},_R=function(t,e,n){t.hasOwnProperty("increment")||P(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&P(!1,"Unexpected increment value: "+i);const r=e.node();if(P(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},vR=function(t,e,n,i){return ad(e,new od(n,t),i)},bR=function(t,e,n){return ad(t,new sd(e),n)};function ad(t,e,n){const i=t.getPriority().val(),r=og(i,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=og(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new nt(a,yt(r)):t}else{const o=t;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new nt(r))),o.forEachChild(Et,(a,c)=>{const l=ad(c,e.getImmediateChild(a),n);l!==c&&(s=s.updateImmediateChild(a,l))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function ld(t,e){let n=e instanceof Me?e:new Me(e),i=t,r=fe(n);for(;r!==null;){const s=qr(i.node.children,r)||{children:{},childCount:0};i=new cd(r,i,s),n=xe(n),r=fe(n)}return i}function gs(t){return t.node.value}function C0(t,e){t.node.value=e,Ch(t)}function S0(t){return t.node.childCount>0}function wR(t){return gs(t)===void 0&&!S0(t)}function ul(t,e){Jt(t.node.children,(n,i)=>{e(new cd(n,t,i))})}function A0(t,e,n,i){n&&!i&&e(t),ul(t,r=>{A0(r,e,!0,i)}),n&&i&&e(t)}function ER(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function zo(t){return new Me(t.parent===null?t.name:zo(t.parent)+"/"+t.name)}function Ch(t){t.parent!==null&&TR(t.parent,t.name,t)}function TR(t,e,n){const i=wR(n),r=ei(t.node.children,e);i&&r?(delete t.node.children[e],t.node.childCount--,Ch(t)):!i&&!r&&(t.node.children[e]=n.node,t.node.childCount++,Ch(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR=/[\[\].#$\/\u0000-\u001F\u007F]/,CR=/[\[\].#$\u0000-\u001F\u007F]/,_u=10*1024*1024,k0=function(t){return typeof t=="string"&&t.length!==0&&!IR.test(t)},SR=function(t){return typeof t=="string"&&t.length!==0&&!CR.test(t)},AR=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),SR(t)},R0=function(t,e,n){const i=n instanceof Me?new ok(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Oi(i));if(typeof e=="function")throw new Error(t+"contains a function "+Oi(i)+" with contents = "+e.toString());if(kv(e))throw new Error(t+"contains "+e.toString()+" "+Oi(i));if(typeof e=="string"&&e.length>_u/3&&ol(e)>_u)throw new Error(t+"contains a string greater than "+_u+" utf8 bytes "+Oi(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(Jt(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!k0(o)))throw new Error(t+" contains an invalid key ("+o+") "+Oi(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ak(i,o),R0(t,a,i),ck(i)}),r&&s)throw new Error(t+' contains ".value" child '+Oi(i)+" in addition to actual children.")}},kR=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!k0(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!AR(n))throw new Error(jI(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function NR(t,e){let n=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();n!==null&&!Xv(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(r)}n&&t.eventLists_.push(n)}function fr(t,e,n){NR(t,n),xR(t,i=>an(i,e)||an(e,i))}function xR(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const r=t.eventLists_[i];if(r){const s=r.path;e(s)?(DR(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function DR(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Yi&&gt("event: "+n.toString()),Bo(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR="repo_interrupt",PR=25;class MR{constructor(e,n,i,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new RR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=pc(),this.transactionQueueTree_=new cd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function LR(t,e,n){if(t.stats_=Yf(t.repoInfo_),t.forceRestClient_||NA())t.server_=new dc(t.repoInfo_,(i,r,s,o)=>{ag(t,i,r,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>cg(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{lt(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new $n(t.repoInfo_,e,(i,r,s,o)=>{ag(t,i,r,s,o)},i=>{cg(t,i)},i=>{UR(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=LA(t.repoInfo_,()=>new Mk(t.stats_,t.server_)),t.infoData_=new Nk,t.infoSyncTree_=new sg({startListening:(i,r,s,o)=>{let a=[];const c=t.infoData_.getNode(i._path);return c.isEmpty()||(a=cl(t.infoSyncTree_,i._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ud(t,"connected",!1),t.serverSyncTree_=new sg({startListening:(i,r,s,o)=>(t.server_.listen(i,s,r,(a,c)=>{const l=o(a,c);fr(t.eventQueue_,i._path,l)}),[]),stopListening:(i,r)=>{t.server_.unlisten(i,r)}})}function FR(t){const n=t.infoData_.getNode(new Me(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function N0(t){return gR({timestamp:FR(t)})}function ag(t,e,n,i,r){t.dataUpdateCount++;const s=new Me(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(i){const c=rc(n,l=>yt(l));o=mR(t.serverSyncTree_,s,c,r)}else{const c=yt(n);o=pR(t.serverSyncTree_,s,c,r)}else if(i){const c=rc(n,l=>yt(l));o=dR(t.serverSyncTree_,s,c)}else{const c=yt(n);o=cl(t.serverSyncTree_,s,c)}let a=s;o.length>0&&(a=fd(t,s)),fr(t.eventQueue_,a,o)}function cg(t,e){ud(t,"connected",e),e===!1&&$R(t)}function UR(t,e){Jt(e,(n,i)=>{ud(t,n,i)})}function ud(t,e,n){const i=new Me("/.info/"+e),r=yt(n);t.infoData_.updateSnapshot(i,r);const s=cl(t.infoSyncTree_,i,r);fr(t.eventQueue_,i,s)}function VR(t){return t.nextWriteId_++}function $R(t){x0(t,"onDisconnectEvents");const e=N0(t),n=pc();_h(t.onDisconnect_,Se(),(r,s)=>{const o=vR(r,s,t.serverSyncTree_,e);r0(n,r,o)});let i=[];_h(n,Se(),(r,s)=>{i=i.concat(cl(t.serverSyncTree_,r,s));const o=HR(t,r);fd(t,o)}),t.onDisconnect_=pc(),fr(t.eventQueue_,Se(),i)}function BR(t){t.persistentConnection_&&t.persistentConnection_.interrupt(OR)}function x0(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),gt(n,...e)}function D0(t,e,n){return v0(t.serverSyncTree_,e,n)||Ee.EMPTY_NODE}function hd(t,e=t.transactionQueueTree_){if(e||hl(t,e),gs(e)){const n=P0(t,e);P(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&jR(t,zo(e),n)}else S0(e)&&ul(e,n=>{hd(t,n)})}function jR(t,e,n){const i=n.map(l=>l.currentWriteId),r=D0(t,e,i);let s=r;const o=r.hash();for(let l=0;l<n.length;l++){const u=n[l];P(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Qt(e,u.path);s=s.updateChild(h,u.currentOutputSnapshotRaw)}const a=s.val(!0),c=e;t.server_.put(c.toString(),a,l=>{x0(t,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(Ar(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();hl(t,ld(t.transactionQueueTree_,e)),hd(t,t.transactionQueueTree_),fr(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)Bo(h[f])}else{if(l==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Wt("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=l}fd(t,e)}},o)}function fd(t,e){const n=O0(t,e),i=zo(n),r=P0(t,n);return zR(t,r,i),i}function zR(t,e,n){if(e.length===0)return;const i=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=Qt(n,c.path);let u=!1,h;if(P(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,r=r.concat(Ar(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=PR)u=!0,h="maxretry",r=r.concat(Ar(t.serverSyncTree_,c.currentWriteId,!0));else{const f=D0(t,c.path,o);c.currentInputSnapshot=f;const d=e[a].update(f.val());if(d!==void 0){R0("transaction failed: Data returned ",d,c.path);let m=yt(d);typeof d=="object"&&d!=null&&ei(d,".priority")||(m=m.updatePriority(f.getPriority()));const b=c.currentWriteId,_=N0(t),v=bR(m,f,_);c.currentOutputSnapshotRaw=m,c.currentOutputSnapshotResolved=v,c.currentWriteId=VR(t),o.splice(o.indexOf(b),1),r=r.concat(fR(t.serverSyncTree_,c.path,v,c.currentWriteId,c.applyLocally)),r=r.concat(Ar(t.serverSyncTree_,b,!0))}else u=!0,h="nodata",r=r.concat(Ar(t.serverSyncTree_,c.currentWriteId,!0))}fr(t.eventQueue_,n,r),r=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}hl(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)Bo(i[a]);hd(t,t.transactionQueueTree_)}function O0(t,e){let n,i=t.transactionQueueTree_;for(n=fe(e);n!==null&&gs(i)===void 0;)i=ld(i,n),e=xe(e),n=fe(e);return i}function P0(t,e){const n=[];return M0(t,e,n),n.sort((i,r)=>i.order-r.order),n}function M0(t,e,n){const i=gs(e);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);ul(e,r=>{M0(t,r,n)})}function hl(t,e){const n=gs(e);if(n){let i=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[i]=n[r],i++);n.length=i,C0(e,n.length>0?n:void 0)}ul(e,i=>{hl(t,i)})}function HR(t,e){const n=zo(O0(t,e)),i=ld(t.transactionQueueTree_,e);return ER(i,r=>{vu(t,r)}),vu(t,i),A0(i,r=>{vu(t,r)}),n}function vu(t,e){const n=gs(e);if(n){const i=[];let r=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(P(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(P(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(Ar(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?C0(e,void 0):n.length=s+1,fr(t.eventQueue_,zo(e),r);for(let o=0;o<i.length;o++)Bo(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KR(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function WR(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Wt(`Invalid query segment '${n}' in query '${t}'`)}return e}const lg=function(t,e){const n=qR(t),i=n.namespace;n.domain==="firebase.com"&&er(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&er("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||EA();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new OA(n.host,n.secure,i,r,e,"",i!==n.subdomain),path:new Me(n.pathString)}},qR=function(t){let e="",n="",i="",r="",s="",o=!0,a="https",c=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(r=KR(t.substring(u,h)));const f=WR(t.substring(Math.min(t.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const d=e.slice(0,l);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{const m=e.indexOf(".");i=e.substring(0,m).toLowerCase(),n=e.substring(m+1),s=i}"ns"in f&&(s=f.ns)}return{host:e,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,n,i,r){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=r}get key(){return ue(this._path)?null:Gv(this._path)}get ref(){return new ys(this._repo,this._path)}get _queryIdentifier(){const e=Gm(this._queryParams),n=qf(e);return n==="{}"?"default":n}get _queryObject(){return Gm(this._queryParams)}isEqual(e){if(e=Ut(e),!(e instanceof dd))return!1;const n=this._repo===e._repo,i=Xv(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+sk(this._path)}}class ys extends dd{constructor(e,n){super(e,n,new Zf,!1)}get parent(){const e=Qv(this._path);return e===null?null:new ys(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}uR(ys);hR(ys);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GR="FIREBASE_DATABASE_EMULATOR_HOST",Sh={};let YR=!1;function QR(t,e,n,i,r){let s=i||t.options.databaseURL;s===void 0&&(t.options.projectId||er("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),gt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=lg(s,r),a=o.repoInfo,c,l;typeof process<"u"&&process.env&&(l=process.env[GR]),l?(c=!0,s=`http://${l}?ns=${a.namespace}`,o=lg(s,r),a=o.repoInfo):c=!o.repoInfo.secure;const u=r&&c?new mh(mh.OWNER):new DA(t.name,t.options,e);kR("Invalid Firebase Database URL",o),ue(o.path)||er("Database URL must point to the root of a Firebase Database (not including a child path).");const h=JR(a,t,u,new xA(t.name,n));return new ZR(h,t)}function XR(t,e){const n=Sh[e];(!n||n[t.key]!==t)&&er(`Database ${e}(${t.repoInfo_}) has already been deleted.`),BR(t),delete n[t.key]}function JR(t,e,n,i){let r=Sh[e.name];r||(r={},Sh[e.name]=r);let s=r[t.toURLString()];return s&&er("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new MR(t,YR,n,i),r[t.toURLString()]=s,s}class ZR{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(LR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ys(this._repo,Se())),this._rootInternal}_delete(){return this._rootInternal!==null&&(XR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&er("Cannot call "+e+" on a deleted database.")}}/**
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
 */function eN(t){yA(ps),Rn(new dn("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return QR(i,r,s,n)},"PUBLIC").setMultipleInstances(!0)),Kt(Nm,xm,t),Kt(Nm,xm,"esm2017")}$n.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};$n.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};eN();var tN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},j,pd=pd||{},J=tN||self;function _c(){}function fl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ho(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function nN(t){return Object.prototype.hasOwnProperty.call(t,bu)&&t[bu]||(t[bu]=++iN)}var bu="closure_uid_"+(1e9*Math.random()>>>0),iN=0;function rN(t,e,n){return t.call.apply(t.bind,arguments)}function sN(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,i),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function It(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?It=rN:It=sN,It.apply(null,arguments)}function wa(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function ft(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(i,r,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(i,o)}}function Ii(){this.s=this.s,this.o=this.o}var oN=0;Ii.prototype.s=!1;Ii.prototype.na=function(){!this.s&&(this.s=!0,this.M(),oN!=0)&&nN(this)};Ii.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const L0=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function md(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function ug(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(fl(i)){const r=t.length||0,s=i.length||0;t.length=r+s;for(let o=0;o<s;o++)t[r+o]=i[o]}else t.push(i)}}function Ct(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ct.prototype.h=function(){this.defaultPrevented=!0};var aN=function(){if(!J.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{J.addEventListener("test",_c,e),J.removeEventListener("test",_c,e)}catch{}return t}();function vc(t){return/^[\s\xa0]*$/.test(t)}var hg=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function wu(t,e){return t<e?-1:t>e?1:0}function dl(){var t=J.navigator;return t&&(t=t.userAgent)?t:""}function wn(t){return dl().indexOf(t)!=-1}function gd(t){return gd[" "](t),t}gd[" "]=_c;function cN(t){var e=hN;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var lN=wn("Opera"),Qr=wn("Trident")||wn("MSIE"),F0=wn("Edge"),Ah=F0||Qr,U0=wn("Gecko")&&!(dl().toLowerCase().indexOf("webkit")!=-1&&!wn("Edge"))&&!(wn("Trident")||wn("MSIE"))&&!wn("Edge"),uN=dl().toLowerCase().indexOf("webkit")!=-1&&!wn("Edge");function V0(){var t=J.document;return t?t.documentMode:void 0}var bc;e:{var Eu="",Tu=function(){var t=dl();if(U0)return/rv:([^\);]+)(\)|;)/.exec(t);if(F0)return/Edge\/([\d\.]+)/.exec(t);if(Qr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(uN)return/WebKit\/(\S+)/.exec(t);if(lN)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Tu&&(Eu=Tu?Tu[1]:""),Qr){var Iu=V0();if(Iu!=null&&Iu>parseFloat(Eu)){bc=String(Iu);break e}}bc=Eu}var hN={};function fN(){return cN(function(){let t=0;const e=hg(String(bc)).split("."),n=hg("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var r=e[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r[0].length==0&&s[0].length==0)break;t=wu(r[1].length==0?0:parseInt(r[1],10),s[1].length==0?0:parseInt(s[1],10))||wu(r[2].length==0,s[2].length==0)||wu(r[2],s[2]),r=r[3],s=s[3]}while(t==0)}return 0<=t})}var kh;if(J.document&&Qr){var fg=V0();kh=fg||parseInt(bc,10)||void 0}else kh=void 0;var dN=kh;function go(t,e){if(Ct.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(U0){e:{try{gd(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:pN[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&go.X.h.call(this)}}ft(go,Ct);var pN={2:"touch",3:"pen",4:"mouse"};go.prototype.h=function(){go.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ko="closure_listenable_"+(1e6*Math.random()|0),mN=0;function gN(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=r,this.key=++mN,this.ba=this.ea=!1}function pl(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function yd(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function $0(t){const e={};for(const n in t)e[n]=t[n];return e}const dg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function B0(t,e){let n,i;for(let r=1;r<arguments.length;r++){i=arguments[r];for(n in i)t[n]=i[n];for(let s=0;s<dg.length;s++)n=dg[s],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function ml(t){this.src=t,this.g={},this.h=0}ml.prototype.add=function(t,e,n,i,r){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Nh(t,e,i,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new gN(e,this.src,s,!!i,r),e.ea=n,t.push(e)),e};function Rh(t,e){var n=e.type;if(n in t.g){var i=t.g[n],r=L0(i,e),s;(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(pl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Nh(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==i)return r}return-1}var _d="closure_lm_"+(1e6*Math.random()|0),Cu={};function j0(t,e,n,i,r){if(i&&i.once)return H0(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)j0(t,e[s],n,i,r);return null}return n=wd(n),t&&t[Ko]?t.N(e,n,Ho(i)?!!i.capture:!!i,r):z0(t,e,n,!1,i,r)}function z0(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=Ho(r)?!!r.capture:!!r,a=bd(t);if(a||(t[_d]=a=new ml(t)),n=a.add(e,n,i,o,s),n.proxy)return n;if(i=yN(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)aN||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(W0(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function yN(){function t(n){return e.call(t.src,t.listener,n)}const e=_N;return t}function H0(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)H0(t,e[s],n,i,r);return null}return n=wd(n),t&&t[Ko]?t.O(e,n,Ho(i)?!!i.capture:!!i,r):z0(t,e,n,!0,i,r)}function K0(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)K0(t,e[s],n,i,r);else i=Ho(i)?!!i.capture:!!i,n=wd(n),t&&t[Ko]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Nh(s,n,i,r),-1<n&&(pl(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=bd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Nh(e,n,i,r)),(n=-1<t?e[t]:null)&&vd(n))}function vd(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Ko])Rh(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(W0(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=bd(e))?(Rh(n,t),n.h==0&&(n.src=null,e[_d]=null)):pl(t)}}}function W0(t){return t in Cu?Cu[t]:Cu[t]="on"+t}function _N(t,e){if(t.ba)t=!0;else{e=new go(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&vd(t),t=n.call(i,e)}return t}function bd(t){return t=t[_d],t instanceof ml?t:null}var Su="__closure_events_fn_"+(1e9*Math.random()>>>0);function wd(t){return typeof t=="function"?t:(t[Su]||(t[Su]=function(e){return t.handleEvent(e)}),t[Su])}function at(){Ii.call(this),this.i=new ml(this),this.P=this,this.I=null}ft(at,Ii);at.prototype[Ko]=!0;at.prototype.removeEventListener=function(t,e,n,i){K0(this,t,e,n,i)};function ht(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new Ct(e,t);else if(e instanceof Ct)e.target=e.target||t;else{var r=e;e=new Ct(i,t),B0(e,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=Ea(o,i,!0,e)&&r}if(o=e.g=t,r=Ea(o,i,!0,e)&&r,r=Ea(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)o=e.g=n[s],r=Ea(o,i,!1,e)&&r}at.prototype.M=function(){if(at.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)pl(n[i]);delete t.g[e],t.h--}}this.I=null};at.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};at.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function Ea(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Rh(t.i,o),r=a.call(c,i)!==!1&&r}}return r&&!i.defaultPrevented}var Ed=J.JSON.stringify;function vN(){var t=Y0;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class bN{constructor(){this.h=this.g=null}add(e,n){const i=q0.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var q0=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new wN,t=>t.reset());class wN{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function EN(t){J.setTimeout(()=>{throw t},0)}function G0(t,e){xh||TN(),Dh||(xh(),Dh=!0),Y0.add(t,e)}var xh;function TN(){var t=J.Promise.resolve(void 0);xh=function(){t.then(IN)}}var Dh=!1,Y0=new bN;function IN(){for(var t;t=vN();){try{t.h.call(t.g)}catch(n){EN(n)}var e=q0;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Dh=!1}function gl(t,e){at.call(this),this.h=t||1,this.g=e||J,this.j=It(this.lb,this),this.l=Date.now()}ft(gl,at);j=gl.prototype;j.ca=!1;j.R=null;j.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ht(this,"tick"),this.ca&&(Td(this),this.start()))}};j.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Td(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}j.M=function(){gl.X.M.call(this),Td(this),delete this.g};function Id(t,e,n){if(typeof t=="function")n&&(t=It(t,n));else if(t&&typeof t.handleEvent=="function")t=It(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:J.setTimeout(t,e||0)}function Q0(t){t.g=Id(()=>{t.g=null,t.i&&(t.i=!1,Q0(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class CN extends Ii{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Q0(this)}M(){super.M(),this.g&&(J.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yo(t){Ii.call(this),this.h=t,this.g={}}ft(yo,Ii);var pg=[];function X0(t,e,n,i){Array.isArray(n)||(n&&(pg[0]=n.toString()),n=pg);for(var r=0;r<n.length;r++){var s=j0(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function J0(t){yd(t.g,function(e,n){this.g.hasOwnProperty(n)&&vd(e)},t),t.g={}}yo.prototype.M=function(){yo.X.M.call(this),J0(this)};yo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function yl(){this.g=!0}yl.prototype.Aa=function(){this.g=!1};function SN(t,e,n,i,r,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function AN(t,e,n,i,r,s,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+`
`+n+`
`+s+" "+o})}function kr(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+RN(t,n)+(i?" "+i:"")})}function kN(t,e){t.info(function(){return"TIMEOUT: "+e})}yl.prototype.info=function(){};function RN(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Ed(n)}catch{return e}}var dr={},mg=null;function _l(){return mg=mg||new at}dr.Pa="serverreachability";function Z0(t){Ct.call(this,dr.Pa,t)}ft(Z0,Ct);function _o(t){const e=_l();ht(e,new Z0(e))}dr.STAT_EVENT="statevent";function eb(t,e){Ct.call(this,dr.STAT_EVENT,t),this.stat=e}ft(eb,Ct);function kt(t){const e=_l();ht(e,new eb(e,t))}dr.Qa="timingevent";function tb(t,e){Ct.call(this,dr.Qa,t),this.size=e}ft(tb,Ct);function Wo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return J.setTimeout(function(){t()},e)}var vl={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},nb={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Cd(){}Cd.prototype.h=null;function gg(t){return t.h||(t.h=t.i())}function ib(){}var qo={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Sd(){Ct.call(this,"d")}ft(Sd,Ct);function Ad(){Ct.call(this,"c")}ft(Ad,Ct);var Oh;function bl(){}ft(bl,Cd);bl.prototype.g=function(){return new XMLHttpRequest};bl.prototype.i=function(){return{}};Oh=new bl;function Go(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new yo(this),this.O=NN,t=Ah?125:void 0,this.T=new gl(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new rb}function rb(){this.i=null,this.g="",this.h=!1}var NN=45e3,Ph={},wc={};j=Go.prototype;j.setTimeout=function(t){this.O=t};function Mh(t,e,n){t.K=1,t.v=El(Kn(e)),t.s=n,t.P=!0,sb(t,null)}function sb(t,e){t.F=Date.now(),Yo(t),t.A=Kn(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),db(n.i,"t",i),t.C=0,n=t.l.H,t.h=new rb,t.g=Pb(t.l,n?e:null,!t.s),0<t.N&&(t.L=new CN(It(t.La,t,t.g),t.N)),X0(t.S,t.g,"readystatechange",t.ib),e=t.H?$0(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),_o(),SN(t.j,t.u,t.A,t.m,t.U,t.s)}j.ib=function(t){t=t.target;const e=this.L;e&&Vn(t)==3?e.l():this.La(t)};j.La=function(t){try{if(t==this.g)e:{const u=Vn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Ah||this.g&&(this.h.h||this.g.fa()||bg(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?_o(3):_o(2)),wl(this);var n=this.g.aa();this.Y=n;t:if(ob(this)){var i=bg(this.g);t="";var r=i.length,s=Vn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){$i(this),qs(this);var o="";break t}this.h.i=new J.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,AN(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!vc(a)){var l=a;break t}}l=null}if(n=l)kr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Lh(this,n);else{this.i=!1,this.o=3,kt(12),$i(this),qs(this);break e}}this.P?(ab(this,u,o),Ah&&this.i&&u==3&&(X0(this.S,this.T,"tick",this.hb),this.T.start())):(kr(this.j,this.m,o,null),Lh(this,o)),u==4&&$i(this),this.i&&!this.I&&(u==4?Nb(this.l,this):(this.i=!1,Yo(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,kt(12)):(this.o=0,kt(13)),$i(this),qs(this)}}}catch{}finally{}};function ob(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function ab(t,e,n){let i=!0,r;for(;!t.I&&t.C<n.length;)if(r=xN(t,n),r==wc){e==4&&(t.o=4,kt(14),i=!1),kr(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Ph){t.o=4,kt(15),kr(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else kr(t.j,t.m,r,null),Lh(t,r);ob(t)&&r!=wc&&r!=Ph&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,kt(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Pd(e),e.K=!0,kt(11))):(kr(t.j,t.m,n,"[Invalid Chunked Response]"),$i(t),qs(t))}j.hb=function(){if(this.g){var t=Vn(this.g),e=this.g.fa();this.C<e.length&&(wl(this),ab(this,t,e),this.i&&t!=4&&Yo(this))}};function xN(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?wc:(n=Number(e.substring(n,i)),isNaN(n)?Ph:(i+=1,i+n>e.length?wc:(e=e.substr(i,n),t.C=i+n,e)))}j.cancel=function(){this.I=!0,$i(this)};function Yo(t){t.V=Date.now()+t.O,cb(t,t.O)}function cb(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Wo(It(t.gb,t),e)}function wl(t){t.B&&(J.clearTimeout(t.B),t.B=null)}j.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(kN(this.j,this.A),this.K!=2&&(_o(),kt(17)),$i(this),this.o=2,qs(this)):cb(this,this.V-t)};function qs(t){t.l.G==0||t.I||Nb(t.l,t)}function $i(t){wl(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Td(t.T),J0(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Lh(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Fh(n.h,t))){if(!t.J&&Fh(n.h,t)&&n.G==3){try{var i=n.Fa.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var r=i;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ic(n),Cl(n);else break e;Od(n),kt(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Wo(It(n.cb,n),6e3));if(1>=gb(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Bi(n,11)}else if((t.J||n.g==t)&&Ic(n),!vc(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(i=1.5*f,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const d=t.g;if(d){const m=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var s=i.h;s.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(kd(s,s.h),s.h=null))}if(i.D){const y=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(i.za=y,Le(i.F,i.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),i=n;var o=t;if(i.sa=Ob(i,i.H?i.ka:null,i.V),o.J){yb(i.h,o);var a=o,c=i.J;c&&a.setTimeout(c),a.B&&(wl(a),Yo(a)),i.g=o}else kb(i);0<n.i.length&&Sl(n)}else l[0]!="stop"&&l[0]!="close"||Bi(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Bi(n,7):Dd(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}_o(4)}catch{}}function DN(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(fl(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function ON(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(fl(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function lb(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(fl(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=ON(t),i=DN(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}var ub=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function PN(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Qi(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Qi){this.h=e!==void 0?e:t.h,Ec(this,t.j),this.s=t.s,this.g=t.g,Tc(this,t.m),this.l=t.l,e=t.i;var n=new vo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),yg(this,n),this.o=t.o}else t&&(n=String(t).match(ub))?(this.h=!!e,Ec(this,n[1]||"",!0),this.s=Ms(n[2]||""),this.g=Ms(n[3]||"",!0),Tc(this,n[4]),this.l=Ms(n[5]||"",!0),yg(this,n[6]||"",!0),this.o=Ms(n[7]||"")):(this.h=!!e,this.i=new vo(null,this.h))}Qi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ls(e,_g,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ls(e,_g,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ls(n,n.charAt(0)=="/"?FN:LN,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ls(n,VN)),t.join("")};function Kn(t){return new Qi(t)}function Ec(t,e,n){t.j=n?Ms(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Tc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function yg(t,e,n){e instanceof vo?(t.i=e,$N(t.i,t.h)):(n||(e=Ls(e,UN)),t.i=new vo(e,t.h))}function Le(t,e,n){t.i.set(e,n)}function El(t){return Le(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ms(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ls(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,MN),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function MN(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var _g=/[#\/\?@]/g,LN=/[#\?:]/g,FN=/[#\?]/g,UN=/[#\?@]/g,VN=/#/g;function vo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ci(t){t.g||(t.g=new Map,t.h=0,t.i&&PN(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}j=vo.prototype;j.add=function(t,e){Ci(this),this.i=null,t=_s(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function hb(t,e){Ci(t),e=_s(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function fb(t,e){return Ci(t),e=_s(t,e),t.g.has(e)}j.forEach=function(t,e){Ci(this),this.g.forEach(function(n,i){n.forEach(function(r){t.call(e,r,i,this)},this)},this)};j.oa=function(){Ci(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let s=0;s<r.length;s++)n.push(e[i])}return n};j.W=function(t){Ci(this);let e=[];if(typeof t=="string")fb(this,t)&&(e=e.concat(this.g.get(_s(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};j.set=function(t,e){return Ci(this),this.i=null,t=_s(this,t),fb(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};j.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function db(t,e,n){hb(t,e),0<n.length&&(t.i=null,t.g.set(_s(t,e),md(n)),t.h+=n.length)}j.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const s=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var r=s;o[i]!==""&&(r+="="+encodeURIComponent(String(o[i]))),t.push(r)}}return this.i=t.join("&")};function _s(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function $N(t,e){e&&!t.j&&(Ci(t),t.i=null,t.g.forEach(function(n,i){var r=i.toLowerCase();i!=r&&(hb(this,i),db(this,r,n))},t)),t.j=e}var BN=class{constructor(e,n){this.h=e,this.g=n}};function pb(t){this.l=t||jN,J.PerformanceNavigationTiming?(t=J.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(J.g&&J.g.Ga&&J.g.Ga()&&J.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var jN=10;function mb(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function gb(t){return t.h?1:t.g?t.g.size:0}function Fh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function kd(t,e){t.g?t.g.add(e):t.h=e}function yb(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}pb.prototype.cancel=function(){if(this.i=_b(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function _b(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return md(t.i)}function Rd(){}Rd.prototype.stringify=function(t){return J.JSON.stringify(t,void 0)};Rd.prototype.parse=function(t){return J.JSON.parse(t,void 0)};function zN(){this.g=new Rd}function HN(t,e,n){const i=n||"";try{lb(t,function(r,s){let o=r;Ho(r)&&(o=Ed(r)),e.push(i+s+"="+encodeURIComponent(o))})}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function KN(t,e){const n=new yl;if(J.Image){const i=new Image;i.onload=wa(Ta,n,i,"TestLoadImage: loaded",!0,e),i.onerror=wa(Ta,n,i,"TestLoadImage: error",!1,e),i.onabort=wa(Ta,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=wa(Ta,n,i,"TestLoadImage: timeout",!1,e),J.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function Ta(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch{}}function Qo(t){this.l=t.ac||null,this.j=t.jb||!1}ft(Qo,Cd);Qo.prototype.g=function(){return new Tl(this.l,this.j)};Qo.prototype.i=function(t){return function(){return t}}({});function Tl(t,e){at.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Nd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ft(Tl,at);var Nd=0;j=Tl.prototype;j.open=function(t,e){if(this.readyState!=Nd)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,bo(this)};j.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||J).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};j.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xo(this)),this.readyState=Nd};j.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,bo(this)),this.g&&(this.readyState=3,bo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof J.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;vb(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function vb(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}j.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Xo(this):bo(this),this.readyState==3&&vb(this)}};j.Va=function(t){this.g&&(this.response=this.responseText=t,Xo(this))};j.Ua=function(t){this.g&&(this.response=t,Xo(this))};j.ga=function(){this.g&&Xo(this)};function Xo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,bo(t)}j.setRequestHeader=function(t,e){this.v.append(t,e)};j.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};j.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function bo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Tl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var WN=J.JSON.parse;function ze(t){at.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=bb,this.K=this.L=!1}ft(ze,at);var bb="",qN=/^https?$/i,GN=["POST","PUT"];j=ze.prototype;j.Ka=function(t){this.L=t};j.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Oh.g(),this.C=this.u?gg(this.u):gg(Oh),this.g.onreadystatechange=It(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){vg(this,s);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const s of i.keys())n.set(s,i.get(s));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),r=J.FormData&&t instanceof J.FormData,!(0<=L0(GN,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Tb(this),0<this.B&&((this.K=YN(this.g))?(this.g.timeout=this.B,this.g.ontimeout=It(this.qa,this)):this.A=Id(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){vg(this,s)}};function YN(t){return Qr&&fN()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}j.qa=function(){typeof pd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ht(this,"timeout"),this.abort(8))};function vg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,wb(t),Il(t)}function wb(t){t.D||(t.D=!0,ht(t,"complete"),ht(t,"error"))}j.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ht(this,"complete"),ht(this,"abort"),Il(this))};j.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Il(this,!0)),ze.X.M.call(this)};j.Ha=function(){this.s||(this.F||this.v||this.l?Eb(this):this.fb())};j.fb=function(){Eb(this)};function Eb(t){if(t.h&&typeof pd<"u"&&(!t.C[1]||Vn(t)!=4||t.aa()!=2)){if(t.v&&Vn(t)==4)Id(t.Ha,0,t);else if(ht(t,"readystatechange"),Vn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var r=String(t.H).match(ub)[1]||null;if(!r&&J.self&&J.self.location){var s=J.self.location.protocol;r=s.substr(0,s.length-1)}i=!qN.test(r?r.toLowerCase():"")}n=i}if(n)ht(t,"complete"),ht(t,"success");else{t.m=6;try{var o=2<Vn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",wb(t)}}finally{Il(t)}}}}function Il(t,e){if(t.g){Tb(t);const n=t.g,i=t.C[0]?_c:null;t.g=null,t.C=null,e||ht(t,"ready");try{n.onreadystatechange=i}catch{}}}function Tb(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(J.clearTimeout(t.A),t.A=null)}function Vn(t){return t.g?t.g.readyState:0}j.aa=function(){try{return 2<Vn(this)?this.g.status:-1}catch{return-1}};j.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};j.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),WN(e)}};function bg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case bb:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}j.Ea=function(){return this.m};j.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ib(t){let e="";return yd(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function xd(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=Ib(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Le(t,e,n))}function xs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Cb(t){this.Ca=0,this.i=[],this.j=new yl,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=xs("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=xs("baseRetryDelayMs",5e3,t),this.bb=xs("retryDelaySeedMs",1e4,t),this.$a=xs("forwardChannelMaxRetries",2,t),this.ta=xs("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new pb(t&&t.concurrentRequestLimit),this.Fa=new zN,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}j=Cb.prototype;j.ma=8;j.G=1;function Dd(t){if(Sb(t),t.G==3){var e=t.U++,n=Kn(t.F);Le(n,"SID",t.I),Le(n,"RID",e),Le(n,"TYPE","terminate"),Jo(t,n),e=new Go(t,t.j,e,void 0),e.K=2,e.v=El(Kn(n)),n=!1,J.navigator&&J.navigator.sendBeacon&&(n=J.navigator.sendBeacon(e.v.toString(),"")),!n&&J.Image&&(new Image().src=e.v,n=!0),n||(e.g=Pb(e.l,null),e.g.da(e.v)),e.F=Date.now(),Yo(e)}Db(t)}function Cl(t){t.g&&(Pd(t),t.g.cancel(),t.g=null)}function Sb(t){Cl(t),t.u&&(J.clearTimeout(t.u),t.u=null),Ic(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&J.clearTimeout(t.m),t.m=null)}function Sl(t){mb(t.h)||t.m||(t.m=!0,G0(t.Ja,t),t.C=0)}function QN(t,e){return gb(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Wo(It(t.Ja,t,e),xb(t,t.C)),t.C++,!0)}j.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Go(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=$0(s),B0(s,this.S)):s=this.S),this.o!==null||this.N||(r.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var i=this.i[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Ab(this,r,e),n=Kn(this.F),Le(n,"RID",t),Le(n,"CVER",22),this.D&&Le(n,"X-HTTP-Session-Id",this.D),Jo(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(Ib(s)))+"&"+e:this.o&&xd(n,this.o,s)),kd(this.h,r),this.Ya&&Le(n,"TYPE","init"),this.O?(Le(n,"$req",e),Le(n,"SID","null"),r.Z=!0,Mh(r,n,null)):Mh(r,n,e),this.G=2}}else this.G==3&&(t?wg(this,t):this.i.length==0||mb(this.h)||wg(this))};function wg(t,e){var n;e?n=e.m:n=t.U++;const i=Kn(t.F);Le(i,"SID",t.I),Le(i,"RID",n),Le(i,"AID",t.T),Jo(t,i),t.o&&t.s&&xd(i,t.o,t.s),n=new Go(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Ab(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),kd(t.h,n),Mh(n,i,e)}function Jo(t,e){t.ia&&yd(t.ia,function(n,i){Le(e,i,n)}),t.l&&lb({},function(n,i){Le(e,i,n)})}function Ab(t,e,n){n=Math.min(t.i.length,n);var i=t.l?It(t.l.Ra,t.l,t):null;e:{var r=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=r[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=s,0>l)s=Math.max(0,r[c].h-100),a=!1;else try{HN(u,o,"req"+l+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,i}function kb(t){t.g||t.u||(t.Z=1,G0(t.Ia,t),t.A=0)}function Od(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Wo(It(t.Ia,t),xb(t,t.A)),t.A++,!0)}j.Ia=function(){if(this.u=null,Rb(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Wo(It(this.eb,this),t)}};j.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,kt(10),Cl(this),Rb(this))};function Pd(t){t.B!=null&&(J.clearTimeout(t.B),t.B=null)}function Rb(t){t.g=new Go(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Kn(t.sa);Le(e,"RID","rpc"),Le(e,"SID",t.I),Le(e,"CI",t.L?"0":"1"),Le(e,"AID",t.T),Le(e,"TYPE","xmlhttp"),Jo(t,e),t.o&&t.s&&xd(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=El(Kn(e)),n.s=null,n.P=!0,sb(n,t)}j.cb=function(){this.v!=null&&(this.v=null,Cl(this),Od(this),kt(19))};function Ic(t){t.v!=null&&(J.clearTimeout(t.v),t.v=null)}function Nb(t,e){var n=null;if(t.g==e){Ic(t),Pd(t),t.g=null;var i=2}else if(Fh(t.h,e))n=e.D,yb(t.h,e),i=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;i=_l(),ht(i,new tb(i,n)),Sl(t)}else kb(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(i==1&&QN(t,e)||i==2&&Od(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Bi(t,5);break;case 4:Bi(t,10);break;case 3:Bi(t,6);break;default:Bi(t,2)}}}function xb(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Bi(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var i=It(t.kb,t);n||(n=new Qi("//www.google.com/images/cleardot.gif"),J.location&&J.location.protocol=="http"||Ec(n,"https"),El(n)),KN(n.toString(),i)}else kt(2);t.G=0,t.l&&t.l.va(e),Db(t),Sb(t)}j.kb=function(t){t?(this.j.info("Successfully pinged google.com"),kt(2)):(this.j.info("Failed to ping google.com"),kt(1))};function Db(t){if(t.G=0,t.la=[],t.l){const e=_b(t.h);(e.length!=0||t.i.length!=0)&&(ug(t.la,e),ug(t.la,t.i),t.h.i.length=0,md(t.i),t.i.length=0),t.l.ua()}}function Ob(t,e,n){var i=n instanceof Qi?Kn(n):new Qi(n,void 0);if(i.g!="")e&&(i.g=e+"."+i.g),Tc(i,i.m);else{var r=J.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new Qi(null,void 0);i&&Ec(s,i),e&&(s.g=e),r&&Tc(s,r),n&&(s.l=n),i=s}return n=t.D,e=t.za,n&&e&&Le(i,n,e),Le(i,"VER",t.ma),Jo(t,i),i}function Pb(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ze(new Qo({jb:!0})):new ze(t.ra),e.Ka(t.H),e}function Mb(){}j=Mb.prototype;j.xa=function(){};j.wa=function(){};j.va=function(){};j.ua=function(){};j.Ra=function(){};function Cc(){if(Qr&&!(10<=Number(dN)))throw Error("Environmental error: no available transport.")}Cc.prototype.g=function(t,e){return new qt(t,e)};function qt(t,e){at.call(this),this.g=new Cb(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!vc(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!vc(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new vs(this)}ft(qt,at);qt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;kt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Ob(t,null,t.V),Sl(t)};qt.prototype.close=function(){Dd(this.g)};qt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ed(t),t=n);e.i.push(new BN(e.ab++,t)),e.G==3&&Sl(e)};qt.prototype.M=function(){this.g.l=null,delete this.j,Dd(this.g),delete this.g,qt.X.M.call(this)};function Lb(t){Sd.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ft(Lb,Sd);function Fb(){Ad.call(this),this.status=1}ft(Fb,Ad);function vs(t){this.g=t}ft(vs,Mb);vs.prototype.xa=function(){ht(this.g,"a")};vs.prototype.wa=function(t){ht(this.g,new Lb(t))};vs.prototype.va=function(t){ht(this.g,new Fb)};vs.prototype.ua=function(){ht(this.g,"b")};Cc.prototype.createWebChannel=Cc.prototype.g;qt.prototype.send=qt.prototype.u;qt.prototype.open=qt.prototype.m;qt.prototype.close=qt.prototype.close;vl.NO_ERROR=0;vl.TIMEOUT=8;vl.HTTP_ERROR=6;nb.COMPLETE="complete";ib.EventType=qo;qo.OPEN="a";qo.CLOSE="b";qo.ERROR="c";qo.MESSAGE="d";at.prototype.listen=at.prototype.N;ze.prototype.listenOnce=ze.prototype.O;ze.prototype.getLastError=ze.prototype.Oa;ze.prototype.getLastErrorCode=ze.prototype.Ea;ze.prototype.getStatus=ze.prototype.aa;ze.prototype.getResponseJson=ze.prototype.Sa;ze.prototype.getResponseText=ze.prototype.fa;ze.prototype.send=ze.prototype.da;ze.prototype.setWithCredentials=ze.prototype.Ka;var XN=function(){return new Cc},JN=function(){return _l()},Au=vl,ZN=nb,ex=dr,Eg={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},tx=Qo,Ia=ib,nx=ze;const Tg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let bs="9.20.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=new Fo("@firebase/firestore");function Ig(){return rr.logLevel}function z(t,...e){if(rr.logLevel<=ye.DEBUG){const n=e.map(Md);rr.debug(`Firestore (${bs}): ${t}`,...n)}}function Wn(t,...e){if(rr.logLevel<=ye.ERROR){const n=e.map(Md);rr.error(`Firestore (${bs}): ${t}`,...n)}}function Sc(t,...e){if(rr.logLevel<=ye.WARN){const n=e.map(Md);rr.warn(`Firestore (${bs}): ${t}`,...n)}}function Md(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${bs}) INTERNAL ASSERTION FAILED: `+t;throw Wn(e),new Error(e)}function Pe(t,e){t||Q()}function ie(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Zn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ub{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ix{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(mt.UNAUTHENTICATED))}shutdown(){}}class rx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class sx{constructor(e){this.t=e,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const r=c=>this.i!==i?(i=this.i,n(c)):Promise.resolve();let s=new Bn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Bn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Bn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Pe(typeof i.accessToken=="string"),new Ub(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Pe(e===null||typeof e=="string"),new mt(e)}}class ox{constructor(e,n,i){this.h=e,this.l=n,this.m=i,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class ax{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new ox(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cx{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lx{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const i=s=>{s.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>i(s))};const r=s=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?r(s):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Pe(typeof n.token=="string"),this.T=n.token,new cx(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ux(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const r=ux(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=e.charAt(r[s]%e.length))}return i}}function be(t,e){return t<e?-1:t>e?1:0}function Xr(t,e,n){return t.length===e.length&&t.every((i,r)=>n(i,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Qe(0,0))}static max(){return new ee(new Qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,n,i){n===void 0?n=0:n>e.length&&Q(),i===void 0?i=e.length-n:i>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return wo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof wo?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let r=0;r<i;r++){const s=e.get(r),o=n.get(r);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Fe extends wo{construct(e,n,i){return new Fe(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new q(A.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(r=>r.length>0))}return new Fe(n)}static emptyPath(){return new Fe([])}}const hx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bt extends wo{construct(e,n,i){return new bt(e,n,i)}static isValidIdentifier(e){return hx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new bt(["__name__"])}static fromServerFormat(e){const n=[];let i="",r=0;const s=()=>{if(i.length===0)throw new q(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new q(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new q(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(i+=a,r++):(s(),r++)}if(s(),o)throw new q(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new bt(n)}static emptyPath(){return new bt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(Fe.fromString(e))}static fromName(e){return new G(Fe.fromString(e).popFirst(5))}static empty(){return new G(Fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new Fe(e.slice()))}}function fx(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,r=ee.fromTimestamp(i===1e9?new Qe(n+1,0):new Qe(n,i));return new _i(r,G.empty(),e)}function dx(t){return new _i(t.readTime,t.key,-1)}class _i{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new _i(ee.min(),G.empty(),-1)}static max(){return new _i(ee.max(),G.empty(),-1)}}function px(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:be(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zo(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==mx)throw t;z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((i,r)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(i,r)},this.catchCallback=s=>{this.wrapFailure(n,s).next(i,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,i)=>{n(e)})}static reject(e){return new R((n,i)=>{i(e)})}static waitFor(e){return new R((n,i)=>{let r=0,s=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++s,o&&s===r&&n()},c=>i(c))}),o=!0,s===r&&n()})}static or(e){let n=R.resolve(!1);for(const i of e)n=n.next(r=>r?R.resolve(r):i());return n}static forEach(e,n){const i=[];return e.forEach((r,s)=>{i.push(n.call(this,r,s))}),this.waitFor(i)}static mapArray(e,n){return new R((i,r)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===s&&i(o)},u=>r(u))}})}static doWhile(e,n){return new R((i,r)=>{const s=()=>{e()===!0?n().next(()=>{s()},r):i()};s()})}}function ea(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ld{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ot(i),this.ut=i=>n.writeSequenceNumber(i))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Ld.ct=-1;function Al(t){return t==null}function Ac(t){return t===0&&1/t==-1/0}function yx(t){return typeof t=="number"&&Number.isInteger(t)&&!Ac(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function pr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function $b(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n){this.comparator=e,this.root=n||ct.EMPTY}insert(e,n){return new et(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ct.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(e,i.key);if(r===0)return n+i.left.size;r<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ca(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ca(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ca(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ca(this.root,e,this.comparator,!0)}}class Ca{constructor(e,n,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?i(e.key,n):1,n&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ct{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i??ct.RED,this.left=r??ct.EMPTY,this.right=s??ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,r,s){return new ct(e??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return ct.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(t,e,n,i,r){return this}insert(t,e,n){return new ct(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Sg(this.data.getIterator())}getIteratorFrom(e){return new Sg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Je(this.comparator);return n.data=e,n}}class Sg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.fields=e,e.sort(bt.comparator)}static empty(){return new zt([])}unionWith(e){let n=new Je(bt.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new zt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Xr(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class _x extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new _x("Invalid base64 string: "+r):r}}(e);return new St(n)}static fromUint8Array(e){const n=function(i){let r="";for(let s=0;s<i.length;++s)r+=String.fromCharCode(i[s]);return r}(e);return new St(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}St.EMPTY_BYTE_STRING=new St("");const vx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vi(t){if(Pe(!!t),typeof t=="string"){let e=0;const n=vx.exec(t);if(Pe(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Ye(t.seconds),nanos:Ye(t.nanos)}}function Ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Jr(t){return typeof t=="string"?St.fromBase64String(t):St.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function jb(t){const e=t.mapValue.fields.__previous_value__;return Bb(e)?jb(e):e}function Eo(t){const e=vi(t.mapValue.fields.__local_write_time__.timestampValue);return new Qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(e,n,i,r,s,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class To{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new To("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof To&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function sr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Bb(t)?4:wx(t)?9007199254740991:10:Q()}function xn(t,e){if(t===e)return!0;const n=sr(t);if(n!==sr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Eo(t).isEqual(Eo(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const s=vi(i.timestampValue),o=vi(r.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,r){return Jr(i.bytesValue).isEqual(Jr(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,r){return Ye(i.geoPointValue.latitude)===Ye(r.geoPointValue.latitude)&&Ye(i.geoPointValue.longitude)===Ye(r.geoPointValue.longitude)}(t,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return Ye(i.integerValue)===Ye(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const s=Ye(i.doubleValue),o=Ye(r.doubleValue);return s===o?Ac(s)===Ac(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Xr(t.arrayValue.values||[],e.arrayValue.values||[],xn);case 10:return function(i,r){const s=i.mapValue.fields||{},o=r.mapValue.fields||{};if(Cg(s)!==Cg(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!xn(s[a],o[a])))return!1;return!0}(t,e);default:return Q()}}function Io(t,e){return(t.values||[]).find(n=>xn(n,e))!==void 0}function Zr(t,e){if(t===e)return 0;const n=sr(t),i=sr(e);if(n!==i)return be(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return be(t.booleanValue,e.booleanValue);case 2:return function(r,s){const o=Ye(r.integerValue||r.doubleValue),a=Ye(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Ag(t.timestampValue,e.timestampValue);case 4:return Ag(Eo(t),Eo(e));case 5:return be(t.stringValue,e.stringValue);case 6:return function(r,s){const o=Jr(r),a=Jr(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,s){const o=r.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=be(o[c],a[c]);if(l!==0)return l}return be(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,s){const o=be(Ye(r.latitude),Ye(s.latitude));return o!==0?o:be(Ye(r.longitude),Ye(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,s){const o=r.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Zr(o[c],a[c]);if(l)return l}return be(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,s){if(r===Sa.mapValue&&s===Sa.mapValue)return 0;if(r===Sa.mapValue)return 1;if(s===Sa.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=s.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=be(a[u],l[u]);if(h!==0)return h;const f=Zr(o[a[u]],c[l[u]]);if(f!==0)return f}return be(a.length,l.length)}(t.mapValue,e.mapValue);default:throw Q()}}function Ag(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return be(t,e);const n=vi(t),i=vi(e),r=be(n.seconds,i.seconds);return r!==0?r:be(n.nanos,i.nanos)}function es(t){return Uh(t)}function Uh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const r=vi(i);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Jr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,G.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let r="[",s=!0;for(const o of i.values||[])s?s=!1:r+=",",r+=Uh(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(i){const r=Object.keys(i.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Uh(i.fields[a])}`;return s+"}"}(t.mapValue):Q();var e,n}function Vh(t){return!!t&&"integerValue"in t}function Fd(t){return!!t&&"arrayValue"in t}function kg(t){return!!t&&"nullValue"in t}function Rg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Wa(t){return!!t&&"mapValue"in t}function Gs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return pr(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=Gs(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Gs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function wx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.value=e}static empty(){return new Mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Wa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Gs(n)}setAll(e){let n=bt.emptyPath(),i={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,i,r),i={},r=[],n=a.popLast()}o?i[a.lastSegment()]=Gs(o):r.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,i,r)}delete(e){const n=this.field(e.popLast());Wa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return xn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let r=n.mapValue.fields[e.get(i)];Wa(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,i){pr(n,(r,s)=>e[r]=s);for(const r of i)delete e[r]}clone(){return new Mt(Gs(this.value))}}function zb(t){const e=[];return pr(t.fields,(n,i)=>{const r=new bt([n]);if(Wa(i)){const s=zb(i.mapValue).fields;if(s.length===0)e.push(r);else for(const o of s)e.push(r.child(o))}else e.push(r)}),new zt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,n,i,r,s,o,a){this.key=e,this.documentType=n,this.version=i,this.readTime=r,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new _t(e,0,ee.min(),ee.min(),ee.min(),Mt.empty(),0)}static newFoundDocument(e,n,i,r){return new _t(e,1,n,ee.min(),i,r,0)}static newNoDocument(e,n){return new _t(e,2,n,ee.min(),ee.min(),Mt.empty(),0)}static newUnknownDocument(e,n){return new _t(e,3,n,ee.min(),ee.min(),Mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class kc{constructor(e,n){this.position=e,this.inclusive=n}}function Ng(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(s.field.isKeyField()?i=G.comparator(G.fromName(o.referenceValue),n.key):i=Zr(o,n.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return i}function xg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!xn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ys{constructor(e,n="asc"){this.field=e,this.dir=n}}function Ex(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Hb{}class Xe extends Hb{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new Ix(e,n,i):n==="array-contains"?new Ax(e,i):n==="in"?new kx(e,i):n==="not-in"?new Rx(e,i):n==="array-contains-any"?new Nx(e,i):new Xe(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new Cx(e,i):new Sx(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Zr(n,this.value)):n!==null&&sr(this.value)===sr(n)&&this.matchesComparison(Zr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Dn extends Hb{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Dn(e,n)}matches(e){return Kb(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Kb(t){return t.op==="and"}function Wb(t){return Tx(t)&&Kb(t)}function Tx(t){for(const e of t.filters)if(e instanceof Dn)return!1;return!0}function $h(t){if(t instanceof Xe)return t.field.canonicalString()+t.op.toString()+es(t.value);if(Wb(t))return t.filters.map(e=>$h(e)).join(",");{const e=t.filters.map(n=>$h(n)).join(",");return`${t.op}(${e})`}}function qb(t,e){return t instanceof Xe?function(n,i){return i instanceof Xe&&n.op===i.op&&n.field.isEqual(i.field)&&xn(n.value,i.value)}(t,e):t instanceof Dn?function(n,i){return i instanceof Dn&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((r,s,o)=>r&&qb(s,i.filters[o]),!0):!1}(t,e):void Q()}function Gb(t){return t instanceof Xe?function(e){return`${e.field.canonicalString()} ${e.op} ${es(e.value)}`}(t):t instanceof Dn?function(e){return e.op.toString()+" {"+e.getFilters().map(Gb).join(" ,")+"}"}(t):"Filter"}class Ix extends Xe{constructor(e,n,i){super(e,n,i),this.key=G.fromName(i.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class Cx extends Xe{constructor(e,n){super(e,"in",n),this.keys=Yb("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Sx extends Xe{constructor(e,n){super(e,"not-in",n),this.keys=Yb("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Yb(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>G.fromName(i.referenceValue))}class Ax extends Xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Fd(n)&&Io(n.arrayValue,this.value)}}class kx extends Xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Io(this.value.arrayValue,n)}}class Rx extends Xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Io(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Io(this.value.arrayValue,n)}}class Nx extends Xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Fd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Io(this.value.arrayValue,i))}}/**
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
 */class xx{constructor(e,n=null,i=[],r=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=r,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function Dg(t,e=null,n=[],i=[],r=null,s=null,o=null){return new xx(t,e,n,i,r,s,o)}function Ud(t){const e=ie(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>$h(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),Al(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>es(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>es(i)).join(",")),e.ft=n}return e.ft}function Vd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Ex(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!qb(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!xg(t.startAt,e.startAt)&&xg(t.endAt,e.endAt)}function Bh(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,n=null,i=[],r=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this.wt=null,this.startAt,this.endAt}}function Dx(t,e,n,i,r,s,o,a){return new kl(t,e,n,i,r,s,o,a)}function Rl(t){return new kl(t)}function Og(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Ox(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Px(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Mx(t){return t.collectionGroup!==null}function $r(t){const e=ie(t);if(e.dt===null){e.dt=[];const n=Px(e),i=Ox(e);if(n!==null&&i===null)n.isKeyField()||e.dt.push(new Ys(n)),e.dt.push(new Ys(bt.keyField(),"asc"));else{let r=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(r=!0);if(!r){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Ys(bt.keyField(),s))}}}return e.dt}function qn(t){const e=ie(t);if(!e.wt)if(e.limitType==="F")e.wt=Dg(e.path,e.collectionGroup,$r(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of $r(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ys(s.field,o))}const i=e.endAt?new kc(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new kc(e.startAt.position,e.startAt.inclusive):null;e.wt=Dg(e.path,e.collectionGroup,n,e.filters,e.limit,i,r)}return e.wt}function jh(t,e,n){return new kl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Nl(t,e){return Vd(qn(t),qn(e))&&t.limitType===e.limitType}function Qb(t){return`${Ud(qn(t))}|lt:${t.limitType}`}function zh(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>Gb(i)).join(", ")}]`),Al(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>es(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>es(i)).join(",")),`Target(${n})`}(qn(t))}; limitType=${t.limitType})`}function xl(t,e){return e.isFoundDocument()&&function(n,i){const r=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):G.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,i){for(const r of $r(n))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const r of n.filters)if(!r.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!function(r,s,o){const a=Ng(r,s,o);return r.inclusive?a<=0:a<0}(n.startAt,$r(n),i)||n.endAt&&!function(r,s,o){const a=Ng(r,s,o);return r.inclusive?a>=0:a>0}(n.endAt,$r(n),i))}(t,e)}function Lx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Xb(t){return(e,n)=>{let i=!1;for(const r of $r(t)){const s=Fx(r,e,n);if(s!==0)return s;i=i||r.field.isKeyField()}return 0}}function Fx(t,e,n){const i=t.field.isKeyField()?G.comparator(e.key,n.key):function(r,s,o){const a=s.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Zr(a,c):Q()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[r,s]of i)if(this.equalsFn(r,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),r=this.inner[i];if(r===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return i.length===1?delete this.inner[n]:i.splice(r,1),this.innerSize--,!0;return!1}forEach(e){pr(this.inner,(n,i)=>{for(const[r,s]of i)e(r,s)})}isEmpty(){return $b(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ux=new et(G.comparator);function Gn(){return Ux}const Jb=new et(G.comparator);function Fs(...t){let e=Jb;for(const n of t)e=e.insert(n.key,n);return e}function Zb(t){let e=Jb;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function ji(){return Qs()}function e1(){return Qs()}function Qs(){return new ws(t=>t.toString(),(t,e)=>t.isEqual(e))}const Vx=new et(G.comparator),$x=new Je(G.comparator);function le(...t){let e=$x;for(const n of t)e=e.add(n);return e}const Bx=new Je(be);function t1(){return Bx}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ac(e)?"-0":e}}function i1(t){return{integerValue:""+t}}function jx(t,e){return yx(e)?i1(e):n1(t,e)}/**
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
 */class Dl{constructor(){this._=void 0}}function zx(t,e,n){return t instanceof Rc?function(i,r){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&(s.fields.__previous_value__=r),{mapValue:s}}(n,e):t instanceof Co?s1(t,e):t instanceof So?o1(t,e):function(i,r){const s=r1(i,r),o=Pg(s)+Pg(i._t);return Vh(s)&&Vh(i._t)?i1(o):n1(i.serializer,o)}(t,e)}function Hx(t,e,n){return t instanceof Co?s1(t,e):t instanceof So?o1(t,e):n}function r1(t,e){return t instanceof Nc?Vh(n=e)||function(i){return!!i&&"doubleValue"in i}(n)?e:{integerValue:0}:null;var n}class Rc extends Dl{}class Co extends Dl{constructor(e){super(),this.elements=e}}function s1(t,e){const n=a1(e);for(const i of t.elements)n.some(r=>xn(r,i))||n.push(i);return{arrayValue:{values:n}}}class So extends Dl{constructor(e){super(),this.elements=e}}function o1(t,e){let n=a1(e);for(const i of t.elements)n=n.filter(r=>!xn(r,i));return{arrayValue:{values:n}}}class Nc extends Dl{constructor(e,n){super(),this.serializer=e,this._t=n}}function Pg(t){return Ye(t.integerValue||t.doubleValue)}function a1(t){return Fd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Kx(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof Co&&i instanceof Co||n instanceof So&&i instanceof So?Xr(n.elements,i.elements,xn):n instanceof Nc&&i instanceof Nc?xn(n._t,i._t):n instanceof Rc&&i instanceof Rc}(t.transform,e.transform)}class Wx{constructor(e,n){this.version=e,this.transformResults=n}}class Cn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Cn}static exists(e){return new Cn(void 0,e)}static updateTime(e){return new Cn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function qa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ol{}function c1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new u1(t.key,Cn.none()):new ta(t.key,t.data,Cn.none());{const n=t.data,i=Mt.empty();let r=new Je(bt.comparator);for(let s of e.fields)if(!r.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?i.delete(s):i.set(s,o),r=r.add(s)}return new Si(t.key,i,new zt(r.toArray()),Cn.none())}}function qx(t,e,n){t instanceof ta?function(i,r,s){const o=i.value.clone(),a=Lg(i.fieldTransforms,r,s.transformResults);o.setAll(a),r.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Si?function(i,r,s){if(!qa(i.precondition,r))return void r.convertToUnknownDocument(s.version);const o=Lg(i.fieldTransforms,r,s.transformResults),a=r.data;a.setAll(l1(i)),a.setAll(o),r.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(i,r,s){r.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Xs(t,e,n,i){return t instanceof ta?function(r,s,o,a){if(!qa(r.precondition,s))return o;const c=r.value.clone(),l=Fg(r.fieldTransforms,a,s);return c.setAll(l),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),null}(t,e,n,i):t instanceof Si?function(r,s,o,a){if(!qa(r.precondition,s))return o;const c=Fg(r.fieldTransforms,a,s),l=s.data;return l.setAll(l1(r)),l.setAll(c),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,i):function(r,s,o){return qa(r.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function Gx(t,e){let n=null;for(const i of t.fieldTransforms){const r=e.data.field(i.field),s=r1(i.transform,r||null);s!=null&&(n===null&&(n=Mt.empty()),n.set(i.field,s))}return n||null}function Mg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Xr(n,i,(r,s)=>Kx(r,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ta extends Ol{constructor(e,n,i,r=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Si extends Ol{constructor(e,n,i,r,s=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function l1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function Lg(t,e,n){const i=new Map;Pe(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,Hx(o,a,n[r]))}return i}function Fg(t,e,n){const i=new Map;for(const r of t){const s=r.transform,o=n.data.field(r.field);i.set(r.field,zx(s,o,e))}return i}class u1 extends Ol{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Yx extends Ol{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qx{constructor(e,n,i,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(e.key)&&qx(s,e,i[r])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=Xs(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=Xs(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=e1();return this.mutations.forEach(r=>{const s=e.get(r.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(r.key)?null:a;const c=c1(o,a);c!==null&&i.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(ee.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&Xr(this.mutations,e.mutations,(n,i)=>Mg(n,i))&&Xr(this.baseMutations,e.baseMutations,(n,i)=>Mg(n,i))}}class $d{constructor(e,n,i,r){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=r}static from(e,n,i){Pe(e.mutations.length===i.length);let r=Vx;const s=e.mutations;for(let o=0;o<s.length;o++)r=r.insert(s[o].key,i[o].version);return new $d(e,n,i,r)}}/**
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
 */class Xx{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Jx{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ge,he;function Zx(t){switch(t){default:return Q();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function h1(t){if(t===void 0)return Wn("GRPC error has no .code"),A.UNKNOWN;switch(t){case Ge.OK:return A.OK;case Ge.CANCELLED:return A.CANCELLED;case Ge.UNKNOWN:return A.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return A.INTERNAL;case Ge.UNAVAILABLE:return A.UNAVAILABLE;case Ge.UNAUTHENTICATED:return A.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case Ge.NOT_FOUND:return A.NOT_FOUND;case Ge.ALREADY_EXISTS:return A.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return A.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case Ge.ABORTED:return A.ABORTED;case Ge.OUT_OF_RANGE:return A.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return A.UNIMPLEMENTED;case Ge.DATA_LOSS:return A.DATA_LOSS;default:return Q()}}(he=Ge||(Ge={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Bd{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Aa}static getOrCreateInstance(){return Aa===null&&(Aa=new Bd),Aa}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Aa=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,n,i,r,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const r=new Map;return r.set(e,na.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new Pl(ee.min(),r,t1(),Gn(),le())}}class na{constructor(e,n,i,r,s){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new na(i,n,le(),le(),le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,n,i,r){this.It=e,this.removedTargetIds=n,this.key=i,this.Tt=r}}class f1{constructor(e,n){this.targetId=e,this.Et=n}}class d1{constructor(e,n,i=St.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=r}}class Ug{constructor(){this.At=0,this.Rt=$g(),this.vt=St.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=le(),n=le(),i=le();return this.Rt.forEach((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:i=i.add(r);break;default:Q()}}),new na(this.vt,this.bt,e,n,i)}xt(){this.Pt=!1,this.Rt=$g()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class eD{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=Gn(),this.qt=Vg(),this.Ut=new Je(be)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const i=this.jt(n);switch(e.state){case 0:this.Wt(n)&&i.Dt(e.resumeToken);break;case 1:i.$t(),i.Vt||i.xt(),i.Dt(e.resumeToken);break;case 2:i.$t(),i.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(i.Mt(),i.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),i.Dt(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((i,r)=>{this.Wt(r)&&n(r)})}Jt(e){var n;const i=e.targetId,r=e.Et.count,s=this.Yt(i);if(s){const o=s.target;if(Bh(o))if(r===0){const a=new G(o.path);this.Qt(i,a,_t.newNoDocument(a,ee.min()))}else Pe(r===1);else{const a=this.Zt(i);a!==r&&(this.Ht(i),this.Ut=this.Ut.add(i),(n=Bd.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((s,o)=>{const a=this.Yt(o);if(a){if(s.current&&Bh(a.target)){const c=new G(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,_t.newNoDocument(c,e))}s.St&&(n.set(o,s.Ct()),s.xt())}});let i=le();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Yt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(i=i.add(s))}),this.Lt.forEach((s,o)=>o.setReadTime(e));const r=new Pl(e,n,this.Ut,this.Lt,i);return this.Lt=Gn(),this.qt=Vg(),this.Ut=new Je(be),r}Gt(e,n){if(!this.Wt(e))return;const i=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,i),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,i){if(!this.Wt(e))return;const r=this.jt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),i&&(this.Lt=this.Lt.insert(n,i))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new Ug,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Je(be),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||z("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new Ug),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function Vg(){return new et(G.comparator)}function $g(){return new et(G.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tD=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),nD=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),iD=(()=>({and:"AND",or:"OR"}))();class rD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function xc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function p1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function sD(t,e){return xc(t,e.toTimestamp())}function Sn(t){return Pe(!!t),ee.fromTimestamp(function(e){const n=vi(e);return new Qe(n.seconds,n.nanos)}(t))}function jd(t,e){return function(n){return new Fe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function m1(t){const e=Fe.fromString(t);return Pe(v1(e)),e}function Hh(t,e){return jd(t.databaseId,e.path)}function ku(t,e){const n=m1(e);if(n.get(1)!==t.databaseId.projectId)throw new q(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(g1(n))}function Kh(t,e){return jd(t.databaseId,e)}function oD(t){const e=m1(t);return e.length===4?Fe.emptyPath():g1(e)}function Wh(t){return new Fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function g1(t){return Pe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Bg(t,e,n){return{name:Hh(t,e),fields:n.value.mapValue.fields}}function aD(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=function(c,l){return c.useProto3Json?(Pe(l===void 0||typeof l=="string"),St.fromBase64String(l||"")):(Pe(l===void 0||l instanceof Uint8Array),St.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?A.UNKNOWN:h1(c.code);return new q(l,c.message||"")}(o);n=new d1(i,r,s,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=ku(t,i.document.name),s=Sn(i.document.updateTime),o=i.document.createTime?Sn(i.document.createTime):ee.min(),a=new Mt({mapValue:{fields:i.document.fields}}),c=_t.newFoundDocument(r,s,o,a),l=i.targetIds||[],u=i.removedTargetIds||[];n=new Ga(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=ku(t,i.document),s=i.readTime?Sn(i.readTime):ee.min(),o=_t.newNoDocument(r,s),a=i.removedTargetIds||[];n=new Ga([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=ku(t,i.document),s=i.removedTargetIds||[];n=new Ga([],s,r,null)}else{if(!("filter"in e))return Q();{e.filter;const i=e.filter;i.targetId;const r=i.count||0,s=new Jx(r),o=i.targetId;n=new f1(o,s)}}return n}function cD(t,e){let n;if(e instanceof ta)n={update:Bg(t,e.key,e.value)};else if(e instanceof u1)n={delete:Hh(t,e.key)};else if(e instanceof Si)n={update:Bg(t,e.key,e.data),updateMask:yD(e.fieldMask)};else{if(!(e instanceof Yx))return Q();n={verify:Hh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(r,s){const o=s.transform;if(o instanceof Rc)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Co)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof So)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Nc)return{fieldPath:s.field.canonicalString(),increment:o._t};throw Q()}(0,i))),e.precondition.isNone||(n.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:sD(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:Q()}(t,e.precondition)),n}function lD(t,e){return t&&t.length>0?(Pe(e!==void 0),t.map(n=>function(i,r){let s=i.updateTime?Sn(i.updateTime):Sn(r);return s.isEqual(ee.min())&&(s=Sn(r)),new Wx(s,i.transformResults||[])}(n,e))):[]}function uD(t,e){return{documents:[Kh(t,e.path)]}}function hD(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=Kh(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Kh(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(c){if(c.length!==0)return _1(Dn.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const s=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Tr(u.field),direction:pD(u.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(c,l){return c.useProto3Json||Al(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function fD(t){let e=oD(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){Pe(i===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=function(u){const h=y1(u);return h instanceof Dn&&Wb(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Ys(Ir(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Al(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new kc(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new kc(f,h)}(n.endAt)),Dx(e,r,o,s,a,"F",c,l)}function dD(t,e){const n=function(i,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Q()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function y1(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ir(e.unaryFilter.field);return Xe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Ir(e.unaryFilter.field);return Xe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ir(e.unaryFilter.field);return Xe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ir(e.unaryFilter.field);return Xe.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(e){return Xe.create(Ir(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Dn.create(e.compositeFilter.filters.map(n=>y1(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return Q()}}(e.compositeFilter.op))}(t):Q()}function pD(t){return tD[t]}function mD(t){return nD[t]}function gD(t){return iD[t]}function Tr(t){return{fieldPath:t.canonicalString()}}function Ir(t){return bt.fromServerFormat(t.fieldPath)}function _1(t){return t instanceof Xe?function(e){if(e.op==="=="){if(Rg(e.value))return{unaryFilter:{field:Tr(e.field),op:"IS_NAN"}};if(kg(e.value))return{unaryFilter:{field:Tr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Rg(e.value))return{unaryFilter:{field:Tr(e.field),op:"IS_NOT_NAN"}};if(kg(e.value))return{unaryFilter:{field:Tr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Tr(e.field),op:mD(e.op),value:e.value}}}(t):t instanceof Dn?function(e){const n=e.getFilters().map(i=>_1(i));return n.length===1?n[0]:{compositeFilter:{op:gD(e.op),filters:n}}}(t):Q()}function yD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function v1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,n,i,r,s=ee.min(),o=ee.min(),a=St.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Xi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Xi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Xi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _D{constructor(e){this.se=e}}function vD(t){const e=fD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?jh(e,e.limit,"L"):e}/**
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
 */class bD{constructor(){this.He=new wD}addToCollectionParentIndex(e,n){return this.He.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(_i.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(_i.min())}updateCollectionGroup(e,n,i){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class wD{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n]||new Je(Fe.comparator),s=!r.has(i);return this.index[n]=r.add(i),s}has(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n];return r&&r.has(i)}getEntries(e){return(this.index[e]||new Je(Fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new ts(0)}static bn(){return new ts(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED{constructor(){this.changes=new ws(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,_t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?R.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class TD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{constructor(e,n,i,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=r}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(i=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(i!==null&&Xs(i.mutation,r,zt.empty(),Qe.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,le()).next(()=>i))}getLocalViewOfDocuments(e,n,i=le()){const r=ji();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,i).next(s=>{let o=Fs();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const i=ji();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,le()))}populateOverlays(e,n,i){const r=[];return i.forEach(s=>{n.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(e,r).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,i,r){let s=Gn();const o=Qs(),a=Qs();return n.forEach((c,l)=>{const u=i.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof Si)?s=s.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Xs(u.mutation,l,u.mutation.getFieldMask(),Qe.now())):o.set(l.key,zt.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new TD(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const i=Qs();let r=new et((o,a)=>o-a),s=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=i.get(c)||zt.empty();u=a.applyToLocalView(l,u),i.set(c,u);const h=(r.get(a.batchId)||le()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=e1();u.forEach(f=>{if(!s.has(f)){const d=c1(n.get(f),i.get(f));d!==null&&h.set(f,d),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return R.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i){return function(r){return G.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Mx(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i):this.getDocumentsMatchingCollectionQuery(e,n,i)}getNextDocuments(e,n,i,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,r).next(s=>{const o=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,r-s.size):R.resolve(ji());let a=-1,c=s;return o.next(l=>R.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?R.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,c,l,le())).next(u=>({batchId:a,changes:Zb(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(i=>{let r=Fs();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,i){const r=n.collectionGroup;let s=Fs();return this.indexManager.getCollectionParents(e,r).next(o=>R.forEach(o,a=>{const c=function(l,u){return new kl(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,i).next(l=>{l.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(s=>(r=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,r))).next(s=>{r.forEach((a,c)=>{const l=c.getKey();s.get(l)===null&&(s=s.insert(l,_t.newInvalidDocument(l)))});let o=Fs();return s.forEach((a,c)=>{const l=r.get(a);l!==void 0&&Xs(l.mutation,c,zt.empty(),Qe.now()),xl(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return R.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var i;return this.Zn.set(n.id,{id:(i=n).id,version:i.version,createTime:Sn(i.createTime)}),R.resolve()}getNamedQuery(e,n){return R.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(i){return{name:i.name,query:vD(i.bundledQuery),readTime:Sn(i.readTime)}}(n)),R.resolve()}}/**
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
 */class SD{constructor(){this.overlays=new et(G.comparator),this.ts=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const i=ji();return R.forEach(n,r=>this.getOverlay(e,r).next(s=>{s!==null&&i.set(r,s)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((r,s)=>{this.re(e,n,s)}),R.resolve()}removeOverlaysForBatchId(e,n,i){const r=this.ts.get(i);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.ts.delete(i)),R.resolve()}getOverlaysForCollection(e,n,i){const r=ji(),s=n.length+1,o=new G(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&c.largestBatchId>i&&r.set(c.getKey(),c)}return R.resolve(r)}getOverlaysForCollectionGroup(e,n,i,r){let s=new et((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>i){let u=s.get(l.largestBatchId);u===null&&(u=ji(),s=s.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=ji(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return R.resolve(a)}re(e,n,i){const r=this.overlays.get(i.key);if(r!==null){const o=this.ts.get(r.largestBatchId).delete(i.key);this.ts.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new Xx(n,i));let s=this.ts.get(n);s===void 0&&(s=le(),this.ts.set(n,s)),this.ts.set(n,s.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(){this.es=new Je(it.ns),this.ss=new Je(it.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const i=new it(e,n);this.es=this.es.add(i),this.ss=this.ss.add(i)}os(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.us(new it(e,n))}cs(e,n){e.forEach(i=>this.removeReference(i,n))}hs(e){const n=new G(new Fe([])),i=new it(n,e),r=new it(n,e+1),s=[];return this.ss.forEachInRange([i,r],o=>{this.us(o),s.push(o.key)}),s}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new G(new Fe([])),i=new it(n,e),r=new it(n,e+1);let s=le();return this.ss.forEachInRange([i,r],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new it(e,0),i=this.es.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class it{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return G.comparator(e.key,n.key)||be(e.ds,n.ds)}static rs(e,n){return be(e.ds,n.ds)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new Je(it.ns)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,r){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Qx(s,n,i,r);this.mutationQueue.push(o);for(const a of r)this._s=this._s.add(new it(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,r=this.ys(i),s=r<0?0:r;return R.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new it(n,0),r=new it(n,Number.POSITIVE_INFINITY),s=[];return this._s.forEachInRange([i,r],o=>{const a=this.gs(o.ds);s.push(a)}),R.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new Je(be);return n.forEach(r=>{const s=new it(r,0),o=new it(r,Number.POSITIVE_INFINITY);this._s.forEachInRange([s,o],a=>{i=i.add(a.ds)})}),R.resolve(this.ps(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,r=i.length+1;let s=i;G.isDocumentKey(s)||(s=s.child(""));const o=new it(new G(s),0);let a=new Je(be);return this._s.forEachWhile(c=>{const l=c.key.path;return!!i.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.ds)),!0)},o),R.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(i=>{const r=this.gs(i);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Pe(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this._s;return R.forEach(n.mutations,r=>{const s=new it(r.key,n.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this._s=i})}En(e){}containsKey(e,n){const i=new it(n,0),r=this._s.firstAfterOrEqual(i);return R.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kD{constructor(e){this.Ts=e,this.docs=new et(G.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,r=this.docs.get(i),s=r?r.size:0,o=this.Ts(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return R.resolve(i?i.document.mutableCopy():_t.newInvalidDocument(n))}getEntries(e,n){let i=Gn();return n.forEach(r=>{const s=this.docs.get(r);i=i.insert(r,s?s.document.mutableCopy():_t.newInvalidDocument(r))}),R.resolve(i)}getDocumentsMatchingQuery(e,n,i,r){let s=Gn();const o=n.path,a=new G(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||px(dx(u),i)<=0||(r.has(u.key)||xl(n,u))&&(s=s.insert(u.key,u.mutableCopy()))}return R.resolve(s)}getAllFromCollectionGroup(e,n,i,r){Q()}Es(e,n){return R.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new RD(this)}getSize(e){return R.resolve(this.size)}}class RD extends ED{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((i,r)=>{r.isValidDocument()?n.push(this.Jn.addEntry(e,r)):this.Jn.removeEntry(i)}),R.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ND{constructor(e){this.persistence=e,this.As=new ws(n=>Ud(n),Vd),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Rs=0,this.vs=new zd,this.targetCount=0,this.bs=ts.vn()}forEachTarget(e,n){return this.As.forEach((i,r)=>n(r)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Rs&&(this.Rs=n),R.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new ts(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.Sn(n),R.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,i){let r=0;const s=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.As.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),R.waitFor(s).next(()=>r)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const i=this.As.get(n)||null;return R.resolve(i)}addMatchingKeys(e,n,i){return this.vs.os(n,i),R.resolve()}removeMatchingKeys(e,n,i){this.vs.cs(n,i);const r=this.persistence.referenceDelegate,s=[];return r&&n.forEach(o=>{s.push(r.markPotentiallyOrphaned(e,o))}),R.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),R.resolve()}getMatchingKeysForTargetId(e,n){const i=this.vs.fs(n);return R.resolve(i)}containsKey(e,n){return R.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new Ld(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new ND(this),this.indexManager=new bD,this.remoteDocumentCache=function(i){return new kD(i)}(i=>this.referenceDelegate.Cs(i)),this.serializer=new _D(n),this.xs=new CD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new SD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.Ps[e.toKey()];return i||(i=new AD(n,this.referenceDelegate),this.Ps[e.toKey()]=i),i}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,i){z("MemoryPersistence","Starting transaction:",e);const r=new DD(this.Vs.next());return this.referenceDelegate.Ns(),i(r).next(s=>this.referenceDelegate.ks(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Os(e,n){return R.or(Object.values(this.Ps).map(i=>()=>i.containsKey(e,n)))}}class DD extends gx{constructor(e){super(),this.currentSequenceNumber=e}}class Hd{constructor(e){this.persistence=e,this.$s=new zd,this.Ms=null}static Fs(e){return new Hd(e)}get Bs(){if(this.Ms)return this.Ms;throw Q()}addReference(e,n,i){return this.$s.addReference(i,n),this.Bs.delete(i.toString()),R.resolve()}removeReference(e,n,i){return this.$s.removeReference(i,n),this.Bs.add(i.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),R.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(r=>this.Bs.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(s=>this.Bs.add(s.toString()))}).next(()=>i.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Bs,i=>{const r=G.fromPath(i);return this.Ls(e,r).next(s=>{s||n.removeEntry(r,ee.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(i=>{i?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return R.or([()=>R.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e,n,i,r){this.targetId=e,this.fromCache=n,this.Vi=i,this.Si=r}static Di(e,n){let i=le(),r=le();for(const s of n.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Kd(e,n.fromCache,i,r)}}/**
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
 */class OD{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,i,r){return this.Ni(e,n).next(s=>s||this.ki(e,n,r,i)).next(s=>s||this.Oi(e,n))}Ni(e,n){if(Og(n))return R.resolve(null);let i=qn(n);return this.indexManager.getIndexType(e,i).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=jh(n,null,"F"),i=qn(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(s=>{const o=le(...s);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(c=>{const l=this.$i(n,a);return this.Mi(n,l,o,c.readTime)?this.Ni(e,jh(n,null,"F")):this.Fi(e,l,n,c)}))})))}ki(e,n,i,r){return Og(n)||r.isEqual(ee.min())?this.Oi(e,n):this.xi.getDocuments(e,i).next(s=>{const o=this.$i(n,s);return this.Mi(n,o,i,r)?this.Oi(e,n):(Ig()<=ye.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),zh(n)),this.Fi(e,o,n,fx(r,-1)))})}$i(e,n){let i=new Je(Xb(e));return n.forEach((r,s)=>{xl(e,s)&&(i=i.add(s))}),i}Mi(e,n,i,r){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Oi(e,n){return Ig()<=ye.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",zh(n)),this.xi.getDocumentsMatchingQuery(e,n,_i.min())}Fi(e,n,i,r){return this.xi.getDocumentsMatchingQuery(e,i,r).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PD{constructor(e,n,i,r){this.persistence=e,this.Bi=n,this.serializer=r,this.Li=new et(be),this.qi=new ws(s=>Ud(s),Vd),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(i)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ID(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function MD(t,e,n,i){return new PD(t,e,n,i)}async function b1(t,e){const n=ie(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let r;return n.mutationQueue.getAllMutationBatches(i).next(s=>(r=s,n.Gi(e),n.mutationQueue.getAllMutationBatches(i))).next(s=>{const o=[],a=[];let c=le();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of s){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(i,c).next(l=>({Qi:l,removedBatchIds:o,addedBatchIds:a}))})})}function LD(t,e){const n=ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const r=e.batch.keys(),s=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=R.resolve();return h.forEach(d=>{f=f.next(()=>l.getEntry(a,d)).next(m=>{const y=c.docVersions.get(d);Pe(y!==null),m.version.compareTo(y)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,i,e,s).next(()=>s.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(o){let a=le();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(i,r))})}function w1(t){const e=ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function FD(t,e){const n=ie(t),i=e.snapshotVersion;let r=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});r=n.Li;const a=[];e.targetChanges.forEach((u,h)=>{const f=r.get(h);if(!f)return;a.push(n.Ds.removeMatchingKeys(s,u.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(s,u.addedDocuments,h)));let d=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?d=d.withResumeToken(St.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,i)),r=r.insert(h,d),function(m,y,b){return m.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(f,d,u)&&a.push(n.Ds.updateTargetData(s,d))});let c=Gn(),l=le();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(UD(s,o,e.documentUpdates).next(u=>{c=u.zi,l=u.ji})),!i.isEqual(ee.min())){const u=n.Ds.getLastRemoteSnapshotVersion(s).next(h=>n.Ds.setTargetsMetadata(s,s.currentSequenceNumber,i));a.push(u)}return R.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,l)).next(()=>c)}).then(s=>(n.Li=r,s))}function UD(t,e,n){let i=le(),r=le();return n.forEach(s=>i=i.add(s)),e.getEntries(t,i).next(s=>{let o=Gn();return n.forEach((a,c)=>{const l=s.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(ee.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):z("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{zi:o,ji:r}})}function VD(t,e){const n=ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function $D(t,e){const n=ie(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let r;return n.Ds.getTargetData(i,e).next(s=>s?(r=s,R.resolve(r)):n.Ds.allocateTargetId(i).next(o=>(r=new Xi(e,o,0,i.currentSequenceNumber),n.Ds.addTargetData(i,r).next(()=>r))))}).then(i=>{const r=n.Li.get(i.targetId);return(r===null||i.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Li=n.Li.insert(i.targetId,i),n.qi.set(e,i.targetId)),i})}async function qh(t,e,n){const i=ie(t),r=i.Li.get(e),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,o=>i.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!ea(o))throw o;z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.Li=i.Li.remove(e),i.qi.delete(r.target)}function jg(t,e,n){const i=ie(t);let r=ee.min(),s=le();return i.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=ie(a),h=u.qi.get(l);return h!==void 0?R.resolve(u.Li.get(h)):u.Ds.getTargetData(c,l)}(i,o,qn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,i.Ds.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>i.Bi.getDocumentsMatchingQuery(o,e,n?r:ee.min(),n?s:le())).next(a=>(BD(i,Lx(e),a),{documents:a,Wi:s})))}function BD(t,e,n){let i=t.Ui.get(e)||ee.min();n.forEach((r,s)=>{s.readTime.compareTo(i)>0&&(i=s.readTime)}),t.Ui.set(e,i)}class zg{constructor(){this.activeTargetIds=t1()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jD{constructor(){this.Br=new zg,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,i){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new zg,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class zD{qr(e){}shutdown(){}}/**
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
 */class Hg{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ka=null;function Ru(){return ka===null?ka=268435456+Math.round(2147483648*Math.random()):ka++,"0x"+ka.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection";class WD extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,i,r,s){const o=Ru(),a=this.ao(e,n);z("RestConnection",`Sending RPC '${e}' ${o}:`,a,i);const c={};return this.ho(c,r,s),this.lo(e,a,c,i).then(l=>(z("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw Sc("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",i),l})}fo(e,n,i,r,s,o){return this.co(e,n,i,r,s)}ho(e,n,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+bs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,s)=>e[s]=r),i&&i.headers.forEach((r,s)=>e[s]=r)}ao(e,n){const i=HD[e];return`${this.ro}/v1/${n}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,i,r){const s=Ru();return new Promise((o,a)=>{const c=new nx;c.setWithCredentials(!0),c.listenOnce(ZN.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Au.NO_ERROR:const u=c.getResponseJson();z(pt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(u)),o(u);break;case Au.TIMEOUT:z(pt,`RPC '${e}' ${s} timed out`),a(new q(A.DEADLINE_EXCEEDED,"Request time out"));break;case Au.HTTP_ERROR:const h=c.getStatus();if(z(pt,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const m=function(y){const b=y.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(b)>=0?b:A.UNKNOWN}(d.status);a(new q(m,d.message))}else a(new q(A.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new q(A.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{z(pt,`RPC '${e}' ${s} completed.`)}});const l=JSON.stringify(r);z(pt,`RPC '${e}' ${s} sending request:`,r),c.send(n,"POST",l,i,15)})}wo(e,n,i){const r=Ru(),s=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=XN(),a=JN(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new tx({})),this.ho(c.initMessageHeaders,n,i),c.encodeInitMessageHeaders=!0;const l=s.join("");z(pt,`Creating RPC '${e}' stream ${r}: ${l}`,c);const u=o.createWebChannel(l,c);let h=!1,f=!1;const d=new KD({Wr:y=>{f?z(pt,`Not sending because RPC '${e}' stream ${r} is closed:`,y):(h||(z(pt,`Opening RPC '${e}' stream ${r} transport.`),u.open(),h=!0),z(pt,`RPC '${e}' stream ${r} sending:`,y),u.send(y))},Hr:()=>u.close()}),m=(y,b,_)=>{y.listen(b,v=>{try{_(v)}catch(w){setTimeout(()=>{throw w},0)}})};return m(u,Ia.EventType.OPEN,()=>{f||z(pt,`RPC '${e}' stream ${r} transport opened.`)}),m(u,Ia.EventType.CLOSE,()=>{f||(f=!0,z(pt,`RPC '${e}' stream ${r} transport closed`),d.so())}),m(u,Ia.EventType.ERROR,y=>{f||(f=!0,Sc(pt,`RPC '${e}' stream ${r} transport errored:`,y),d.so(new q(A.UNAVAILABLE,"The operation could not be completed")))}),m(u,Ia.EventType.MESSAGE,y=>{var b;if(!f){const _=y.data[0];Pe(!!_);const v=_,w=v.error||((b=v[0])===null||b===void 0?void 0:b.error);if(w){z(pt,`RPC '${e}' stream ${r} received error:`,w);const I=w.status;let F=function(oe){const _e=Ge[oe];if(_e!==void 0)return h1(_e)}(I),X=w.message;F===void 0&&(F=A.INTERNAL,X="Unknown error status: "+I+" with message "+w.message),f=!0,d.so(new q(F,X)),u.close()}else z(pt,`RPC '${e}' stream ${r} received:`,_),d.io(_)}}),m(a,ex.STAT_EVENT,y=>{y.stat===Eg.PROXY?z(pt,`RPC '${e}' stream ${r} detected buffering proxy`):y.stat===Eg.NOPROXY&&z(pt,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{d.no()},0),d}}function Nu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(t){return new rD(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(e,n,i=1e3,r=1.5,s=6e4){this.Ws=e,this.timerId=n,this._o=i,this.mo=r,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),i=Math.max(0,Date.now()-this.To),r=Math.max(0,n-i);r>0&&z("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,r,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(e,n,i,r,s,o,a,c){this.Ws=e,this.bo=i,this.Po=r,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new E1(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(Wn(n.toString()),Wn("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,r])=>{this.Vo===n&&this.Ko(i,r)},i=>{e(()=>{const r=new q(A.UNKNOWN,"Fetching auth token failed: "+i.message);return this.Go(r)})})}Ko(e,n){const i=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{i(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(r=>{i(()=>this.Go(r))}),this.stream.onMessage(r=>{i(()=>this.onMessage(r))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class qD extends T1{constructor(e,n,i,r,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,r,o),this.serializer=s}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=aD(this.serializer,e),i=function(r){if(!("targetChange"in r))return ee.min();const s=r.targetChange;return s.targetIds&&s.targetIds.length?ee.min():s.readTime?Sn(s.readTime):ee.min()}(e);return this.listener.zo(n,i)}jo(e){const n={};n.database=Wh(this.serializer),n.addTarget=function(r,s){let o;const a=s.target;return o=Bh(a)?{documents:uD(r,a)}:{query:hD(r,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=p1(r,s.resumeToken):s.snapshotVersion.compareTo(ee.min())>0&&(o.readTime=xc(r,s.snapshotVersion.toTimestamp())),o}(this.serializer,e);const i=dD(this.serializer,e);i&&(n.labels=i),this.Fo(n)}Wo(e){const n={};n.database=Wh(this.serializer),n.removeTarget=e,this.Fo(n)}}class GD extends T1{constructor(e,n,i,r,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,r,o),this.serializer=s,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Pe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=lD(e.writeResults,e.commitTime),i=Sn(e.commitTime);return this.listener.Zo(i,n)}return Pe(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=Wh(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>cD(this.serializer,i))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YD extends class{}{constructor(e,n,i,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=r,this.eu=!1}nu(){if(this.eu)throw new q(A.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.connection.co(e,n,i,r,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new q(A.UNKNOWN,r.toString())})}fo(e,n,i,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.fo(e,n,i,s,o,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(A.UNKNOWN,s.toString())})}terminate(){this.eu=!0}}class QD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(Wn(n),this.ru=!1):z("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(e,n,i,r,s){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=s,this._u.qr(o=>{i.enqueueAndForget(async()=>{mr(this)&&(z("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=ie(a);c.du.add(4),await ia(c),c.mu.set("Unknown"),c.du.delete(4),await Ll(c)}(this))})}),this.mu=new QD(i,r)}}async function Ll(t){if(mr(t))for(const e of t.wu)await e(!0)}async function ia(t){for(const e of t.wu)await e(!1)}function I1(t,e){const n=ie(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),Gd(n)?qd(n):Es(n).No()&&Wd(n,e))}function C1(t,e){const n=ie(t),i=Es(n);n.fu.delete(e),i.No()&&S1(n,e),n.fu.size===0&&(i.No()?i.$o():mr(n)&&n.mu.set("Unknown"))}function Wd(t,e){t.gu.Ot(e.targetId),Es(t).jo(e)}function S1(t,e){t.gu.Ot(e),Es(t).Wo(e)}function qd(t){t.gu=new eD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),Es(t).start(),t.mu.ou()}function Gd(t){return mr(t)&&!Es(t).xo()&&t.fu.size>0}function mr(t){return ie(t).du.size===0}function A1(t){t.gu=void 0}async function JD(t){t.fu.forEach((e,n)=>{Wd(t,e)})}async function ZD(t,e){A1(t),Gd(t)?(t.mu.au(e),qd(t)):t.mu.set("Unknown")}async function eO(t,e,n){if(t.mu.set("Online"),e instanceof d1&&e.state===2&&e.cause)try{await async function(i,r){const s=r.cause;for(const o of r.targetIds)i.fu.has(o)&&(await i.remoteSyncer.rejectListen(o,s),i.fu.delete(o),i.gu.removeTarget(o))}(t,e)}catch(i){z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Dc(t,i)}else if(e instanceof Ga?t.gu.Kt(e):e instanceof f1?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(ee.min()))try{const i=await w1(t.localStore);n.compareTo(i)>=0&&await function(r,s){const o=r.gu.Xt(s);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.fu.get(c);l&&r.fu.set(c,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const c=r.fu.get(a);if(!c)return;r.fu.set(a,c.withResumeToken(St.EMPTY_BYTE_STRING,c.snapshotVersion)),S1(r,a);const l=new Xi(c.target,a,1,c.sequenceNumber);Wd(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(i){z("RemoteStore","Failed to raise snapshot:",i),await Dc(t,i)}}async function Dc(t,e,n){if(!ea(e))throw e;t.du.add(1),await ia(t),t.mu.set("Offline"),n||(n=()=>w1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{z("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await Ll(t)})}function k1(t,e){return e().catch(n=>Dc(t,n,e))}async function Fl(t){const e=ie(t),n=bi(e);let i=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;tO(e);)try{const r=await VD(e.localStore,i);if(r===null){e.lu.length===0&&n.$o();break}i=r.batchId,nO(e,r)}catch(r){await Dc(e,r)}R1(e)&&N1(e)}function tO(t){return mr(t)&&t.lu.length<10}function nO(t,e){t.lu.push(e);const n=bi(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function R1(t){return mr(t)&&!bi(t).xo()&&t.lu.length>0}function N1(t){bi(t).start()}async function iO(t){bi(t).tu()}async function rO(t){const e=bi(t);for(const n of t.lu)e.Yo(n.mutations)}async function sO(t,e,n){const i=t.lu.shift(),r=$d.from(i,e,n);await k1(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Fl(t)}async function oO(t,e){e&&bi(t).Jo&&await async function(n,i){if(r=i.code,Zx(r)&&r!==A.ABORTED){const s=n.lu.shift();bi(n).Oo(),await k1(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Fl(n)}var r}(t,e),R1(t)&&N1(t)}async function Kg(t,e){const n=ie(t);n.asyncQueue.verifyOperationInProgress(),z("RemoteStore","RemoteStore received new credentials");const i=mr(n);n.du.add(3),await ia(n),i&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await Ll(n)}async function aO(t,e){const n=ie(t);e?(n.du.delete(2),await Ll(n)):e||(n.du.add(2),await ia(n),n.mu.set("Unknown"))}function Es(t){return t.yu||(t.yu=function(e,n,i){const r=ie(e);return r.nu(),new qD(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{Jr:JD.bind(null,t),Zr:ZD.bind(null,t),zo:eO.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),Gd(t)?qd(t):t.mu.set("Unknown")):(await t.yu.stop(),A1(t))})),t.yu}function bi(t){return t.pu||(t.pu=function(e,n,i){const r=ie(e);return r.nu(),new GD(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{Jr:iO.bind(null,t),Zr:oO.bind(null,t),Xo:rO.bind(null,t),Zo:sO.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await Fl(t)):(await t.pu.stop(),t.lu.length>0&&(z("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,n,i,r,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new Bn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,r,s){const o=Date.now()+i,a=new Yd(e,n,o,r,s);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qd(t,e){if(Wn("AsyncQueue",`${e}: ${t}`),ea(t))return new q(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e){this.comparator=e?(n,i)=>e(n,i)||G.comparator(n.key,i.key):(n,i)=>G.comparator(n.key,i.key),this.keyedMap=Fs(),this.sortedSet=new et(this.comparator)}static emptySet(e){return new Br(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Br)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new Br;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(){this.Iu=new et(G.comparator)}track(e){const n=e.doc.key,i=this.Iu.get(n);i?e.type!==0&&i.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&i.type!==1?this.Iu=this.Iu.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Iu=this.Iu.remove(n):e.type===1&&i.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):Q():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,i)=>{e.push(i)}),e}}class ns{constructor(e,n,i,r,s,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,i,r,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ns(e,n,Br.emptySet(n),o,i,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Nl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==i[r].type||!n[r].doc.isEqual(i[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(){this.Eu=void 0,this.listeners=[]}}class lO{constructor(){this.queries=new ws(e=>Qb(e),Nl),this.onlineState="Unknown",this.Au=new Set}}async function Xd(t,e){const n=ie(t),i=e.query;let r=!1,s=n.queries.get(i);if(s||(r=!0,s=new cO),r)try{s.Eu=await n.onListen(i)}catch(o){const a=Qd(o,`Initialization of query '${zh(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.listeners.push(e),e.Ru(n.onlineState),s.Eu&&e.vu(s.Eu)&&Zd(n)}async function Jd(t,e){const n=ie(t),i=e.query;let r=!1;const s=n.queries.get(i);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),r=s.listeners.length===0)}if(r)return n.queries.delete(i),n.onUnlisten(i)}function uO(t,e){const n=ie(t);let i=!1;for(const r of e){const s=r.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.vu(r)&&(i=!0);o.Eu=r}}i&&Zd(n)}function hO(t,e,n){const i=ie(t),r=i.queries.get(e);if(r)for(const s of r.listeners)s.onError(n);i.queries.delete(e)}function Zd(t){t.Au.forEach(e=>{e.next()})}class ep{constructor(e,n,i){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=i||{}}vu(e){if(!this.options.includeMetadataChanges){const i=[];for(const r of e.docChanges)r.type!==3&&i.push(r);e=new ns(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.xu||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=ns.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(e){this.key=e}}class D1{constructor(e){this.key=e}}class fO{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=le(),this.mutatedKeys=le(),this.Ku=Xb(e),this.Gu=new Br(this.Ku)}get Qu(){return this.Lu}zu(e,n){const i=n?n.ju:new Wg,r=n?n.Gu:this.Gu;let s=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const f=r.get(u),d=xl(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),y=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let b=!1;f&&d?f.data.isEqual(d.data)?m!==y&&(i.track({type:3,doc:d}),b=!0):this.Wu(f,d)||(i.track({type:2,doc:d}),b=!0,(c&&this.Ku(d,c)>0||l&&this.Ku(d,l)<0)&&(a=!0)):!f&&d?(i.track({type:0,doc:d}),b=!0):f&&!d&&(i.track({type:1,doc:f}),b=!0,(c||l)&&(a=!0)),b&&(d?(o=o.add(d),s=y?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),i.track({type:1,doc:u})}return{Gu:o,ju:i,Mi:a,mutatedKeys:s}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const r=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const s=e.ju.Tu();s.sort((l,u)=>function(h,f){const d=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return d(h)-d(f)}(l.type,u.type)||this.Ku(l.doc,u.doc)),this.Hu(i);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,s.length!==0||c?{snapshot:new ns(this.query,e.Gu,r,s,e.mutatedKeys,a===0,c,!1,!!i&&i.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Wg,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=le(),this.Gu.forEach(i=>{this.Zu(i.key)&&(this.Uu=this.Uu.add(i.key))});const n=[];return e.forEach(i=>{this.Uu.has(i)||n.push(new D1(i))}),this.Uu.forEach(i=>{e.has(i)||n.push(new x1(i))}),n}Xu(e){this.Lu=e.Wi,this.Uu=le();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return ns.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class dO{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class pO{constructor(e){this.key=e,this.ec=!1}}class mO{constructor(e,n,i,r,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new ws(a=>Qb(a),Nl),this.ic=new Map,this.rc=new Set,this.oc=new et(G.comparator),this.uc=new Map,this.cc=new zd,this.ac={},this.hc=new Map,this.lc=ts.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function gO(t,e){const n=SO(t);let i,r;const s=n.sc.get(e);if(s)i=s.targetId,n.sharedClientState.addLocalQueryTarget(i),r=s.view.tc();else{const o=await $D(n.localStore,qn(e));n.isPrimaryClient&&I1(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,r=await yO(n,e,i,a==="current",o.resumeToken)}return r}async function yO(t,e,n,i,r){t.dc=(h,f,d)=>async function(m,y,b,_){let v=y.view.zu(b);v.Mi&&(v=await jg(m.localStore,y.query,!1).then(({documents:F})=>y.view.zu(F,v)));const w=_&&_.targetChanges.get(y.targetId),I=y.view.applyChanges(v,m.isPrimaryClient,w);return Gg(m,y.targetId,I.Yu),I.snapshot}(t,h,f,d);const s=await jg(t.localStore,e,!0),o=new fO(e,s.Wi),a=o.zu(s.documents),c=na.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);Gg(t,n,l.Yu);const u=new dO(e,n,o);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),l.snapshot}async function _O(t,e){const n=ie(t),i=n.sc.get(e),r=n.ic.get(i.targetId);if(r.length>1)return n.ic.set(i.targetId,r.filter(s=>!Nl(s,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await qh(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),C1(n.remoteStore,i.targetId),Gh(n,i.targetId)}).catch(Zo)):(Gh(n,i.targetId),await qh(n.localStore,i.targetId,!0))}async function vO(t,e,n){const i=AO(t);try{const r=await function(s,o){const a=ie(s),c=Qe.now(),l=o.reduce((f,d)=>f.add(d.key),le());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=Gn(),m=le();return a.Ki.getEntries(f,l).next(y=>{d=y,d.forEach((b,_)=>{_.isValidDocument()||(m=m.add(b))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(y=>{u=y;const b=[];for(const _ of o){const v=Gx(_,u.get(_.key).overlayedDocument);v!=null&&b.push(new Si(_.key,v,zb(v.value.mapValue),Cn.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,b,o)}).next(y=>{h=y;const b=y.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(f,y.batchId,b)})}).then(()=>({batchId:h.batchId,changes:Zb(u)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(r.batchId),function(s,o,a){let c=s.ac[s.currentUser.toKey()];c||(c=new et(be)),c=c.insert(o,a),s.ac[s.currentUser.toKey()]=c}(i,r.batchId,n),await ra(i,r.changes),await Fl(i.remoteStore)}catch(r){const s=Qd(r,"Failed to persist write");n.reject(s)}}async function O1(t,e){const n=ie(t);try{const i=await FD(n.localStore,e);e.targetChanges.forEach((r,s)=>{const o=n.uc.get(s);o&&(Pe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ec=!0:r.modifiedDocuments.size>0?Pe(o.ec):r.removedDocuments.size>0&&(Pe(o.ec),o.ec=!1))}),await ra(n,i,e)}catch(i){await Zo(i)}}function qg(t,e,n){const i=ie(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const r=[];i.sc.forEach((s,o)=>{const a=o.view.Ru(e);a.snapshot&&r.push(a.snapshot)}),function(s,o){const a=ie(s);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Ru(o)&&(c=!0)}),c&&Zd(a)}(i.eventManager,e),r.length&&i.nc.zo(r),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function bO(t,e,n){const i=ie(t);i.sharedClientState.updateQueryState(e,"rejected",n);const r=i.uc.get(e),s=r&&r.key;if(s){let o=new et(G.comparator);o=o.insert(s,_t.newNoDocument(s,ee.min()));const a=le().add(s),c=new Pl(ee.min(),new Map,new Je(be),o,a);await O1(i,c),i.oc=i.oc.remove(s),i.uc.delete(e),tp(i)}else await qh(i.localStore,e,!1).then(()=>Gh(i,e,n)).catch(Zo)}async function wO(t,e){const n=ie(t),i=e.batch.batchId;try{const r=await LD(n.localStore,e);M1(n,i,null),P1(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await ra(n,r)}catch(r){await Zo(r)}}async function EO(t,e,n){const i=ie(t);try{const r=await function(s,o){const a=ie(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(Pe(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(i.localStore,e);M1(i,e,n),P1(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await ra(i,r)}catch(r){await Zo(r)}}function P1(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function M1(t,e,n){const i=ie(t);let r=i.ac[i.currentUser.toKey()];if(r){const s=r.get(e);s&&(n?s.reject(n):s.resolve(),r=r.remove(e)),i.ac[i.currentUser.toKey()]=r}}function Gh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.ic.get(e))t.sc.delete(i),n&&t.nc.wc(i,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(i=>{t.cc.containsKey(i)||L1(t,i)})}function L1(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(C1(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),tp(t))}function Gg(t,e,n){for(const i of n)i instanceof x1?(t.cc.addReference(i.key,e),TO(t,i)):i instanceof D1?(z("SyncEngine","Document no longer in limbo: "+i.key),t.cc.removeReference(i.key,e),t.cc.containsKey(i.key)||L1(t,i.key)):Q()}function TO(t,e){const n=e.key,i=n.path.canonicalString();t.oc.get(n)||t.rc.has(i)||(z("SyncEngine","New document in limbo: "+n),t.rc.add(i),tp(t))}function tp(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new G(Fe.fromString(e)),i=t.lc.next();t.uc.set(i,new pO(n)),t.oc=t.oc.insert(n,i),I1(t.remoteStore,new Xi(qn(Rl(n.path)),i,2,Ld.ct))}}async function ra(t,e,n){const i=ie(t),r=[],s=[],o=[];i.sc.isEmpty()||(i.sc.forEach((a,c)=>{o.push(i.dc(c,e,n).then(l=>{if((l||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=Kd.Di(c.targetId,l);s.push(u)}}))}),await Promise.all(o),i.nc.zo(r),await async function(a,c){const l=ie(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>R.forEach(c,h=>R.forEach(h.Vi,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>R.forEach(h.Si,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!ea(u))throw u;z("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.Li.get(h),d=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(d);l.Li=l.Li.insert(h,m)}}}(i.localStore,s))}async function IO(t,e){const n=ie(t);if(!n.currentUser.isEqual(e)){z("SyncEngine","User change. New user:",e.toKey());const i=await b1(n.localStore,e);n.currentUser=e,function(r,s){r.hc.forEach(o=>{o.forEach(a=>{a.reject(new q(A.CANCELLED,s))})}),r.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await ra(n,i.Qi)}}function CO(t,e){const n=ie(t),i=n.uc.get(e);if(i&&i.ec)return le().add(i.key);{let r=le();const s=n.ic.get(e);if(!s)return r;for(const o of s){const a=n.sc.get(o);r=r.unionWith(a.view.Qu)}return r}}function SO(t){const e=ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=O1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=CO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=bO.bind(null,e),e.nc.zo=uO.bind(null,e.eventManager),e.nc.wc=hO.bind(null,e.eventManager),e}function AO(t){const e=ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=wO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=EO.bind(null,e),e}class Yg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ml(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return MD(this.persistence,new OD,e.initialUser,this.serializer)}createPersistence(e){return new xD(Hd.Fs,this.serializer)}createSharedClientState(e){return new jD}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class kO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>qg(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=IO.bind(null,this.syncEngine),await aO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new lO}createDatastore(e){const n=Ml(e.databaseInfo.databaseId),i=(r=e.databaseInfo,new WD(r));var r;return function(s,o,a,c){return new YD(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return n=this.localStore,i=this.datastore,r=e.asyncQueue,s=a=>qg(this.syncEngine,a,0),o=Hg.D()?new Hg:new zD,new XD(n,i,r,s,o);var n,i,r,s,o}createSyncEngine(e,n){return function(i,r,s,o,a,c,l){const u=new mO(i,r,s,o,a,c);return l&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ie(e);z("RemoteStore","RemoteStore shutting down."),n.du.add(5),await ia(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class np{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):Wn("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RO{constructor(e,n,i,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=r,this.user=mt.UNAUTHENTICATED,this.clientId=Vb.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async s=>{z("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(i,s=>(z("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Bn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=Qd(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function xu(t,e){t.asyncQueue.verifyOperationInProgress(),z("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async r=>{i.isEqual(r)||(await b1(e.localStore,r),i=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Qg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await xO(t);z("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(r=>Kg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Kg(e.remoteStore,s)),t._onlineComponents=e}function NO(t){return t.name==="FirebaseError"?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function xO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){z("FirestoreClient","Using user provided OfflineComponentProvider");try{await xu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!NO(n))throw n;Sc("Error using user provided cache. Falling back to memory cache: "+n),await xu(t,new Yg)}}else z("FirestoreClient","Using default OfflineComponentProvider"),await xu(t,new Yg);return t._offlineComponents}async function F1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(z("FirestoreClient","Using user provided OnlineComponentProvider"),await Qg(t,t._uninitializedComponentsProvider._online)):(z("FirestoreClient","Using default OnlineComponentProvider"),await Qg(t,new kO))),t._onlineComponents}function DO(t){return F1(t).then(e=>e.syncEngine)}async function Oc(t){const e=await F1(t),n=e.eventManager;return n.onListen=gO.bind(null,e.syncEngine),n.onUnlisten=_O.bind(null,e.syncEngine),n}function OO(t,e,n={}){const i=new Bn;return t.asyncQueue.enqueueAndForget(async()=>function(r,s,o,a,c){const l=new np({next:h=>{s.enqueueAndForget(()=>Jd(r,u));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new q(A.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new q(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new ep(Rl(o.path),l,{includeMetadataChanges:!0,xu:!0});return Xd(r,u)}(await Oc(t),t.asyncQueue,e,n,i)),i.promise}function PO(t,e,n={}){const i=new Bn;return t.asyncQueue.enqueueAndForget(async()=>function(r,s,o,a,c){const l=new np({next:h=>{s.enqueueAndForget(()=>Jd(r,u)),h.fromCache&&a.source==="server"?c.reject(new q(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new ep(o,l,{includeMetadataChanges:!0,xu:!0});return Xd(r,u)}(await Oc(t),t.asyncQueue,e,n,i)),i.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function U1(t,e,n){if(!n)throw new q(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function MO(t,e,n,i){if(e===!0&&i===!0)throw new q(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Jg(t){if(!G.isDocumentKey(t))throw new q(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Zg(t){if(G.isDocumentKey(t))throw new q(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ip(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function Xt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ip(t);throw new q(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new q(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,MO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,n,i,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ey({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new q(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new q(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ey(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new ix;switch(n.type){case"firstParty":return new ax(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new q(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Xg.get(e);n&&(z("ComponentProvider","Removing Datastore"),Xg.delete(e),n.terminate())}(this),Promise.resolve()}}function LO(t,e,n,i={}){var r;const s=(t=Xt(t,Ul))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Sc("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let o,a;if(typeof i.mockUserToken=="string")o=i.mockUserToken,a=mt.MOCK_USER;else{o=NI(i.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new q(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new mt(c)}t._authCredentials=new rx(new Ub(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Nt(this.firestore,e,this._key)}}class sa{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new sa(this.firestore,e,this._query)}}class mi extends sa{constructor(e,n,i){super(e,n,Rl(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Nt(this.firestore,null,new G(e))}withConverter(e){return new mi(this.firestore,e,this._path)}}function Ao(t,e,...n){if(t=Ut(t),U1("collection","path",e),t instanceof Ul){const i=Fe.fromString(e,...n);return Zg(i),new mi(t,null,i)}{if(!(t instanceof Nt||t instanceof mi))throw new q(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Fe.fromString(e,...n));return Zg(i),new mi(t.firestore,null,i)}}function wt(t,e,...n){if(t=Ut(t),arguments.length===1&&(e=Vb.A()),U1("doc","path",e),t instanceof Ul){const i=Fe.fromString(e,...n);return Jg(i),new Nt(t,null,new G(i))}{if(!(t instanceof Nt||t instanceof mi))throw new q(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Fe.fromString(e,...n));return Jg(i),new Nt(t.firestore,t instanceof mi?t.converter:null,new G(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new E1(this,"async_queue_retry"),this.qc=()=>{const n=Nu();n&&z("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=Nu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=Nu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new Bn;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!ea(e))throw e;z("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(i=>{this.Mc=i,this.Fc=!1;const r=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(i);throw Wn("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.Fc=!1,i))));return this.Nc=n,n}enqueueAfterDelay(e,n,i){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const r=Yd.createAndSchedule(this,e,n,i,s=>this.Qc(s));return this.$c.push(r),r}Uc(){this.Mc&&Q()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function ty(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const i=e;for(const r of n)if(r in i&&typeof i[r]=="function")return!0;return!1}(t,["next","error","complete"])}class or extends Ul{constructor(e,n,i,r){super(e,n,i,r),this.type="firestore",this._queue=new FO,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||$1(this),this._firestoreClient.terminate()}}function V1(t,e){const n=typeof t=="object"?t:ov(),i=typeof t=="string"?t:e||"(default)",r=UC(n,"firestore").getImmediate({identifier:i});if(!r._initialized){const s=AI("firestore");s&&LO(r,...s)}return r}function Vl(t){return t._firestoreClient||$1(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function $1(t){var e,n,i;const r=t._freezeSettings(),s=function(o,a,c,l){return new bx(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new RO(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=r.cache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this._byteString=e}static fromBase64String(e){try{return new is(St.fromBase64String(e))}catch(n){throw new q(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new is(St.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class rp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const UO=/^__.*__$/;class VO{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new Si(e,this.data,this.fieldMask,n,this.fieldTransforms):new ta(e,this.data,n,this.fieldTransforms)}}class B1{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new Si(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function j1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class sp{constructor(e,n,i,r,s,o){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=r,s===void 0&&this.Jc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new sp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Zc({path:i,ta:!1});return r.ea(e),r}na(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Zc({path:i,ta:!1});return r.Jc(),r}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return Pc(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(j1(this.Yc)&&UO.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class $O{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||Ml(e)}ua(e,n,i,r=!1){return new sp({Yc:e,methodName:n,oa:i,path:bt.emptyPath(),ta:!1,ra:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function z1(t){const e=t._freezeSettings(),n=Ml(t._databaseId);return new $O(t._databaseId,!!e.ignoreUndefinedProperties,n)}function BO(t,e,n,i,r,s={}){const o=t.ua(s.merge||s.mergeFields?2:0,e,n,r);op("Data must be an object, but it was:",o,i);const a=H1(i,o);let c,l;if(s.merge)c=new zt(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const f=Yh(e,h,n);if(!o.contains(f))throw new q(A.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);W1(u,f)||u.push(f)}c=new zt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new VO(new Mt(a),c,l)}class jl extends rp{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof jl}}function jO(t,e,n,i){const r=t.ua(1,e,n);op("Data must be an object, but it was:",r,i);const s=[],o=Mt.empty();pr(i,(c,l)=>{const u=ap(e,c,n);l=Ut(l);const h=r.na(u);if(l instanceof jl)s.push(u);else{const f=zl(l,h);f!=null&&(s.push(u),o.set(u,f))}});const a=new zt(s);return new B1(o,a,r.fieldTransforms)}function zO(t,e,n,i,r,s){const o=t.ua(1,e,n),a=[Yh(e,i,n)],c=[r];if(s.length%2!=0)throw new q(A.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(Yh(e,s[f])),c.push(s[f+1]);const l=[],u=Mt.empty();for(let f=a.length-1;f>=0;--f)if(!W1(l,a[f])){const d=a[f];let m=c[f];m=Ut(m);const y=o.na(d);if(m instanceof jl)l.push(d);else{const b=zl(m,y);b!=null&&(l.push(d),u.set(d,b))}}const h=new zt(l);return new B1(u,h,o.fieldTransforms)}function zl(t,e){if(K1(t=Ut(t)))return op("Unsupported field value:",e,t),H1(t,e);if(t instanceof rp)return function(n,i){if(!j1(i.Yc))throw i.ia(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.ia(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,i){const r=[];let s=0;for(const o of n){let a=zl(o,i.sa(s));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),s++}return{arrayValue:{values:r}}}(t,e)}return function(n,i){if((n=Ut(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return jx(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Qe.fromDate(n);return{timestampValue:xc(i.serializer,r)}}if(n instanceof Qe){const r=new Qe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:xc(i.serializer,r)}}if(n instanceof Bl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof is)return{bytesValue:p1(i.serializer,n._byteString)};if(n instanceof Nt){const r=i.databaseId,s=n.firestore._databaseId;if(!s.isEqual(r))throw i.ia(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:jd(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i.ia(`Unsupported field value: ${ip(n)}`)}(t,e)}function H1(t,e){const n={};return $b(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):pr(t,(i,r)=>{const s=zl(r,e.Xc(i));s!=null&&(n[i]=s)}),{mapValue:{fields:n}}}function K1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Qe||t instanceof Bl||t instanceof is||t instanceof Nt||t instanceof rp)}function op(t,e,n){if(!K1(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=ip(n);throw i==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+i)}}function Yh(t,e,n){if((e=Ut(e))instanceof $l)return e._internalPath;if(typeof e=="string")return ap(t,e);throw Pc("Field path arguments must be of type string or ",t,!1,void 0,n)}const HO=new RegExp("[~\\*/\\[\\]]");function ap(t,e,n){if(e.search(HO)>=0)throw Pc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new $l(...e.split("."))._internalPath}catch{throw Pc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Pc(t,e,n,i,r){const s=i&&!i.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${i}`),o&&(c+=` in document ${r}`),c+=")"),new q(A.INVALID_ARGUMENT,a+t+c)}function W1(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(e,n,i,r,s){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new KO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(G1("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class KO extends q1{data(){return super.data()}}function G1(t,e){return typeof e=="string"?ap(t,e):e instanceof $l?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y1(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class WO{convertValue(e,n="none"){switch(sr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Q()}}convertObject(e,n){const i={};return pr(e.fields,(r,s)=>{i[r]=this.convertValue(s,n)}),i}convertGeoPoint(e){return new Bl(Ye(e.latitude),Ye(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=jb(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Eo(e));default:return null}}convertTimestamp(e){const n=vi(e);return new Qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=Fe.fromString(e);Pe(v1(i));const r=new To(i.get(1),i.get(3)),s=new G(i.popFirst(5));return r.isEqual(n)||Wn(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qO(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Q1 extends q1{constructor(e,n,i,r,s,o){super(e,n,i,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ya(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(G1("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class Ya extends Q1{data(e={}){return super.data(e)}}class X1{constructor(e,n,i,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Us(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new Ya(this._firestore,this._userDataWriter,i.key,i,new Us(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(o=>{const a=new Ya(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Us(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Ya(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Us(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,l=-1;return o.type!==0&&(c=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),l=s.indexOf(o.doc.key)),{type:GO(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function GO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J1(t){t=Xt(t,Nt);const e=Xt(t.firestore,or);return OO(Vl(e),t._key).then(n=>ew(e,t,n))}class cp extends WO{constructor(e){super(),this.firestore=e}convertBytes(e){return new is(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Nt(this.firestore,null,n)}}function YO(t){t=Xt(t,sa);const e=Xt(t.firestore,or),n=Vl(e),i=new cp(e);return Y1(t._query),PO(n,t._query).then(r=>new X1(e,i,t,r))}function QO(t,e,n){t=Xt(t,Nt);const i=Xt(t.firestore,or),r=qO(t.converter,e,n);return Z1(i,[BO(z1(i),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Cn.none())])}function Li(t,e,n,...i){t=Xt(t,Nt);const r=Xt(t.firestore,or),s=z1(r);let o;return o=typeof(e=Ut(e))=="string"||e instanceof $l?zO(s,"updateDoc",t._key,e,n,i):jO(s,"updateDoc",t._key,e),Z1(r,[o.toMutation(t._key,Cn.exists(!0))])}function lp(t,...e){var n,i,r;t=Ut(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||ty(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(ty(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,l,u;if(t instanceof Nt)l=Xt(t.firestore,or),u=Rl(t._key.path),c={next:h=>{e[o]&&e[o](ew(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Xt(t,sa);l=Xt(h.firestore,or),u=h._query;const f=new cp(l);c={next:d=>{e[o]&&e[o](new X1(l,f,h,d))},error:e[o+1],complete:e[o+2]},Y1(t._query)}return function(h,f,d,m){const y=new np(m),b=new ep(f,y,d);return h.asyncQueue.enqueueAndForget(async()=>Xd(await Oc(h),b)),()=>{y.yc(),h.asyncQueue.enqueueAndForget(async()=>Jd(await Oc(h),b))}}(Vl(l),u,a,c)}function Z1(t,e){return function(n,i){const r=new Bn;return n.asyncQueue.enqueueAndForget(async()=>vO(await DO(n),i,r)),r.promise}(Vl(t),e)}function ew(t,e,n){const i=n.docs.get(e._key),r=new cp(t);return new Q1(t,r,e._key,i,new Us(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){bs=n})(ps),Rn(new dn("firestore",(n,{instanceIdentifier:i,options:r})=>{const s=n.getProvider("app").getImmediate(),o=new or(new sx(n.getProvider("auth-internal")),new lx(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new q(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new To(a.options.projectId,c)}(s,i),s);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Kt(Tg,"3.10.1",t),Kt(Tg,"3.10.1","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw="firebasestorage.googleapis.com",XO="storageBucket",JO=2*60*1e3,ZO=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends Zn{constructor(e,n,i=0){super(Du(e),`Firebase Storage: ${n} (${Du(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Pn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Du(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var On;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(On||(On={}));function Du(t){return"storage/"+t}function e2(){const t="An unknown error occurred, please check the error payload for server response.";return new Pn(On.UNKNOWN,t)}function t2(){return new Pn(On.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function n2(){return new Pn(On.CANCELED,"User canceled the upload/download.")}function i2(t){return new Pn(On.INVALID_URL,"Invalid URL '"+t+"'.")}function r2(t){return new Pn(On.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function ny(t){return new Pn(On.INVALID_ARGUMENT,t)}function nw(){return new Pn(On.APP_DELETED,"The Firebase app was deleted.")}function s2(t){return new Pn(On.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=cn.makeFromUrl(e,n)}catch{return new cn(e,"")}if(i.path==="")return i;throw r2(e)}static makeFromUrl(e,n){let i=null;const r="([A-Za-z0-9.\\-_]+)";function s(I){I.path.charAt(I.path.length-1)==="/"&&(I.path_=I.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function l(I){I.path_=decodeURIComponent(I.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${r}/o${f}`,"i"),m={bucket:1,path:3},y=n===tw?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",_=new RegExp(`^https?://${y}/${r}/${b}`,"i"),w=[{regex:a,indices:c,postModify:s},{regex:d,indices:m,postModify:l},{regex:_,indices:{bucket:1,path:2},postModify:l}];for(let I=0;I<w.length;I++){const F=w[I],X=F.regex.exec(e);if(X){const oe=X[F.indices.bucket];let _e=X[F.indices.path];_e||(_e=""),i=new cn(oe,_e),F.postModify(i);break}}if(i==null)throw i2(e);return i}}class o2{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a2(t,e,n){let i=1,r=null,s=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...b){l||(l=!0,e.apply(null,b))}function h(b){r=setTimeout(()=>{r=null,t(d,c())},b)}function f(){s&&clearTimeout(s)}function d(b,..._){if(l){f();return}if(b){f(),u.call(null,b,..._);return}if(c()||o){f(),u.call(null,b,..._);return}i<64&&(i*=2);let w;a===1?(a=2,w=0):w=(i+Math.random())*1e3,h(w)}let m=!1;function y(b){m||(m=!0,f(),!l&&(r!==null?(b||(a=2),clearTimeout(r),h(0)):b||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function c2(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l2(t){return t!==void 0}function iy(t,e,n,i){if(i<e)throw ny(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw ny(`Invalid value for '${t}'. Expected ${n} or less.`)}function u2(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const r=e(i)+"="+e(t[i]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Mc||(Mc={}));/**
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
 */function h2(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||r||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f2{constructor(e,n,i,r,s,o,a,c,l,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,m)=>{this.resolve_=d,this.reject_=m,this.start_()})}start_(){const e=(i,r)=>{if(r){i(!1,new Ra(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Mc.NO_ERROR,c=s.getStatus();if(!a||h2(c,this.additionalRetryCodes_)&&this.retry){const u=s.getErrorCode()===Mc.ABORT;i(!1,new Ra(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;i(!0,new Ra(l,s))})},n=(i,r)=>{const s=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());l2(c)?s(c):s()}catch(c){o(c)}else if(a!==null){const c=e2();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?nw():n2();o(c)}else{const c=t2();o(c)}};this.canceled_?n(!1,new Ra(!1,null,!0)):this.backoffId_=a2(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&c2(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ra{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function d2(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function p2(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function m2(t,e){e&&(t["X-Firebase-GMPID"]=e)}function g2(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function y2(t,e,n,i,r,s,o=!0){const a=u2(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return m2(l,e),d2(l,n),p2(l,s),g2(l,i),new f2(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _2(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function v2(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Lc{constructor(e,n){this._service=e,n instanceof cn?this._location=n:this._location=cn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Lc(e,n)}get root(){const e=new cn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return v2(this._location.path)}get storage(){return this._service}get parent(){const e=_2(this._location.path);if(e===null)return null;const n=new cn(this._location.bucket,e);return new Lc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw s2(e)}}function ry(t,e){const n=e==null?void 0:e[XO];return n==null?null:cn.makeFromBucketSpec(n,t)}class b2{constructor(e,n,i,r,s){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=tw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=JO,this._maxUploadRetryTime=ZO,this._requests=new Set,r!=null?this._bucket=cn.makeFromBucketSpec(r,this._host):this._bucket=ry(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=cn.makeFromBucketSpec(this._url,e):this._bucket=ry(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){iy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){iy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Lc(this,e)}_makeRequest(e,n,i,r,s=!0){if(this._deleted)return new o2(nw());{const o=y2(e,this._appId,i,r,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,r).getPromise()}}const sy="@firebase/storage",oy="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w2="storage";function E2(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new b2(n,i,r,e,ps)}function T2(){Rn(new dn(w2,E2,"PUBLIC").setMultipleInstances(!0)),Kt(sy,oy,""),Kt(sy,oy,"esm2017")}T2();const Ou=new WeakMap;function iw(t,e){return Ou.has(e)||Ou.set(e,t||{f:{},r:{},s:{},u:{}}),Ou.get(e)}function I2(t,e,n,i){if(!t)return n;const[r,s]=rw(t);if(!r)return n;const o=iw(void 0,i)[r]||{},a=e||s;return a&&a in o?o[a]:n}function C2(t,e,n,i){if(!t)return;const[r,s]=rw(t);if(!r)return;const o=iw(void 0,i)[r],a=e||s;if(a)return n.then(c=>{o[a]=c}).catch(En),a}function rw(t){return hA(t)||fA(t)?["f",t.path]:dA(t)?["r",t.toString()]:pA(t)?["s",t.toString()]:[]}const Pu=new WeakMap;function S2(t,e,n){const i=Hf();Pu.has(i)||Pu.set(i,new Map);const r=Pu.get(i),s=C2(e,n,t,i);return s&&r.set(s,t),s?()=>r.delete(s):En}const A2={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function Qh(t,e,n,i){if(!uA(t))return[t,{}];const r=[{},{}],s=Object.keys(n).reduce((a,c)=>{const l=n[c];return a[l.path]=l.data(),a},{});function o(a,c,l,u){c=c||{};const[h,f]=u;Object.getOwnPropertyNames(a).forEach(d=>{const m=Object.getOwnPropertyDescriptor(a,d);m&&!m.enumerable&&Object.defineProperty(h,d,m)});for(const d in a){const m=a[d];if(m==null||m instanceof Date||m instanceof Qe||m instanceof Bl)h[d]=m;else if(Wf(m)){const y=l+d;h[d]=y in n?c[d]:m.path,f[y]=m.converter?m:m.withConverter(i.converter)}else if(Array.isArray(m)){h[d]=Array(m.length);for(let y=0;y<m.length;y++){const b=m[y];b&&b.path in s&&(h[d][y]=s[b.path])}o(m,c[d]||h[d],l+d+".",[h[d],f])}else ur(m)?(h[d]={},o(m,c[d],l+d+".",[h[d],f])):h[d]=m}}return o(t,e,"",r),r}const up={reset:!1,wait:!0,maxRefDepth:2,converter:A2,snapshotOptions:{serverTimestamps:"estimate"}};function Fc(t){for(const e in t)t[e].unsub()}function Xh(t,e,n,i,r,s,o,a,c){const[l,u]=Qh(i.data(t.snapshotOptions),Kf(e,n),r,t);s.set(e,n,l),Jh(t,e,n,r,u,s,o,a,c)}function k2({ref:t,target:e,path:n,depth:i,resolve:r,reject:s,ops:o},a){const c=Object.create(null);let l=En;return a.once?J1(t).then(u=>{u.exists()?Xh(a,e,n,u,c,o,i,r,s):(o.set(e,n,null),r())}).catch(s):l=lp(t,u=>{u.exists()?Xh(a,e,n,u,c,o,i,r,s):(o.set(e,n,null),r())},s),()=>{l(),Fc(c)}}function Jh(t,e,n,i,r,s,o,a,c){const l=Object.keys(r);if(Object.keys(i).filter(y=>l.indexOf(y)<0).forEach(y=>{i[y].unsub(),delete i[y]}),!l.length||++o>t.maxRefDepth)return a(n);let h=0;const f=l.length,d=Object.create(null);function m(y){y in d&&++h>=f&&a(n)}l.forEach(y=>{const b=i[y],_=r[y],v=`${n}.${y}`;if(d[v]=!0,b)if(b.path!==_.path)b.unsub();else return;i[y]={data:()=>Kf(e,v),unsub:k2({ref:_,target:e,path:v,depth:o,ops:s,resolve:m.bind(null,v),reject:c},t),path:_.path}})}function R2(t,e,n,i,r,s){const o=Object.assign({},up,s),{snapshotListenOptions:a,snapshotOptions:c,wait:l,once:u}=o,h="value";let f=Tt(l?[]:t.value);l||n.set(t,h,[]);const d=i;let m,y=En;const b=[],_={added:({newIndex:w,doc:I})=>{b.splice(w,0,Object.create(null));const F=b[w],[X,oe]=Qh(I.data(c),void 0,F,o);n.add(D(f),w,X),Jh(o,f,`${h}.${w}`,F,oe,n,0,i.bind(null,I),r)},modified:({oldIndex:w,newIndex:I,doc:F})=>{const X=D(f),oe=b[w],_e=X[w],[He,dt]=Qh(F.data(c),_e,oe,o);b.splice(I,0,oe),n.remove(X,w),n.add(X,I,He),Jh(o,f,`${h}.${I}`,oe,dt,n,0,i,r)},removed:({oldIndex:w})=>{const I=D(f);n.remove(I,w),Fc(b.splice(w,1)[0])}};function v(w){const I=w.docChanges(a);if(!m&&I.length){m=!0;let F=0;const X=I.length,oe=Object.create(null);for(let _e=0;_e<X;_e++)oe[I[_e].doc.id]=!0;i=_e=>{_e&&_e.id in oe&&++F>=X&&(l&&(n.set(t,h,D(f)),f=t),d(D(f)),i=En)}}I.forEach(F=>{_[F.type](F)}),I.length||(l&&(n.set(t,h,D(f)),f=t),i(D(f)))}return u?YO(e).then(v).catch(r):y=lp(e,v,r),w=>{if(y(),w){const I=typeof w=="function"?w():[];n.set(t,h,I)}b.forEach(Fc)}}function N2(t,e,n,i,r,s){const o=Object.assign({},up,s),a="value",c=Object.create(null);i=mA(i,()=>Kf(t,a));let l=En;function u(h){h.exists()?Xh(o,t,a,h,c,n,0,i,r):(n.set(t,a,null),i(null))}return o.once?J1(e).then(u).catch(r):l=lp(e,u,r),h=>{if(l(),h){const f=typeof h=="function"?h():null;n.set(t,a,f)}Fc(c)}}function x2(t,e){let n=En;const i=Object.assign({},up,e),r=D(t),s=i.target||Tt();gA()&&(i.once=!0);const o=I2(r,i.ssrKey,s.value,Hf());s.value=o;let c=!(Iv(r)?(o||[]).length>0:o!==void 0);const l=Tt(!1),u=Tt(),h=v_(),f=r_();let d=En;function m(){let _=D(t);const v=new Promise((w,I)=>{if(n(i.reset),!_)return n=En,w(null);l.value=c,c=!0,_.converter||(_=_.withConverter(i.converter)),n=(Wf(_)?N2:R2)(s,_,D2,w,I,i)}).catch(w=>(h.value===v&&(u.value=w),Promise.reject(w))).finally(()=>{h.value===v&&(l.value=!1)});h.value=v}let y=En;ut(t)&&(y=Mr(t,m)),m(),r&&(d=S2(h.value,r,i.ssrKey)),nl()&&O_(()=>h.value),f&&lE(b);function b(_=i.reset){y(),d(),n(_)}return Object.defineProperties(s,{error:{get:()=>u},data:{get:()=>s},pending:{get:()=>l},promise:{get:()=>h},stop:{get:()=>b}})}const D2={set:(t,e,n)=>cA(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function Yt(t,e){return x2(t,e)}function gr(t){return V1(Hf(t))}function O2(t,{firebaseApp:e,modules:n=[]}){t.provide(Tv,e);for(const i of n)t.use(i.bind(null,e))}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Cr=typeof window<"u";function P2(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Te=Object.assign;function Mu(t,e){const n={};for(const i in e){const r=e[i];n[i]=pn(r)?r.map(t):t(r)}return n}const Js=()=>{},pn=Array.isArray,M2=/\/$/,L2=t=>t.replace(M2,"");function Lu(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(i=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),r=t(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=$2(i??e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function F2(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ay(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function U2(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&rs(e.matched[i],n.matched[r])&&sw(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function rs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function sw(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!V2(t[n],e[n]))return!1;return!0}function V2(t,e){return pn(t)?cy(t,e):pn(e)?cy(e,t):t===e}function cy(t,e){return pn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function $2(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/");let r=n.length-1,s,o;for(s=0;s<i.length;s++)if(o=i[s],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(s-(s===i.length?1:0)).join("/")}var ko;(function(t){t.pop="pop",t.push="push"})(ko||(ko={}));var Zs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Zs||(Zs={}));function B2(t){if(!t)if(Cr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),L2(t)}const j2=/^[^#]+#/;function z2(t,e){return t.replace(j2,"#")+e}function H2(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Hl=()=>({left:window.pageXOffset,top:window.pageYOffset});function K2(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=H2(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function ly(t,e){return(history.state?history.state.position-e:-1)+t}const Zh=new Map;function W2(t,e){Zh.set(t,e)}function q2(t){const e=Zh.get(t);return Zh.delete(t),e}let G2=()=>location.protocol+"//"+location.host;function ow(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),ay(c,"")}return ay(n,t)+i+r}function Y2(t,e,n,i){let r=[],s=[],o=null;const a=({state:f})=>{const d=ow(t,location),m=n.value,y=e.value;let b=0;if(f){if(n.value=d,e.value=f,o&&o===m){o=null;return}b=y?f.position-y.position:0}else i(d);r.forEach(_=>{_(n.value,m,{delta:b,type:ko.pop,direction:b?b>0?Zs.forward:Zs.back:Zs.unknown})})};function c(){o=n.value}function l(f){r.push(f);const d=()=>{const m=r.indexOf(f);m>-1&&r.splice(m,1)};return s.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(Te({},f.state,{scroll:Hl()}),"")}function h(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function uy(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?Hl():null}}function Q2(t){const{history:e,location:n}=window,i={value:ow(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:G2()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),r.value=l}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(c,l){const u=Te({},e.state,uy(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});s(c,u,!0),i.value=c}function a(c,l){const u=Te({},r.value,e.state,{forward:c,scroll:Hl()});s(u.current,u,!0);const h=Te({},uy(i.value,c,null),{position:u.position+1},l);s(c,h,!1),i.value=c}return{location:i,state:r,push:a,replace:o}}function X2(t){t=B2(t);const e=Q2(t),n=Y2(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=Te({location:"",base:t,go:i,createHref:z2.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function J2(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),X2(t)}function Z2(t){return typeof t=="string"||t&&typeof t=="object"}function aw(t){return typeof t=="string"||typeof t=="symbol"}const oi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},cw=Symbol("");var hy;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(hy||(hy={}));function ss(t,e){return Te(new Error,{type:t,[cw]:!0},e)}function Ln(t,e){return t instanceof Error&&cw in t&&(e==null||!!(t.type&e))}const fy="[^/]+?",eP={sensitive:!1,strict:!1,start:!0,end:!0},tP=/[.+*?^${}()[\]/\\]/g;function nP(t,e){const n=Te({},eP,e),i=[];let r=n.start?"^":"";const s=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const f=l[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(tP,"\\$&"),d+=40;else if(f.type===1){const{value:m,repeatable:y,optional:b,regexp:_}=f;s.push({name:m,repeatable:y,optional:b});const v=_||fy;if(v!==fy){d+=10;try{new RegExp(`(${v})`)}catch(I){throw new Error(`Invalid custom RegExp for param "${m}" (${v}): `+I.message)}}let w=y?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;h||(w=b&&l.length<2?`(?:/${w})`:"/"+w),b&&(w+="?"),r+=w,d+=20,b&&(d+=-8),y&&(d+=-20),v===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(n.strict&&n.end){const l=i.length-1;i[l][i[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",m=s[f-1];h[m.name]=d&&m.repeatable?d.split("/"):d}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:m,repeatable:y,optional:b}=d,_=m in l?l[m]:"";if(pn(_)&&!y)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const v=pn(_)?_.join("/"):_;if(!v)if(b)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=v}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:c}}function iP(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function rP(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=iP(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(dy(i))return 1;if(dy(r))return-1}return r.length-i.length}function dy(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const sP={type:0,value:""},oP=/[a-zA-Z0-9_]/;function aP(t){if(!t)return[[]];if(t==="/")return[[sP]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${l}": ${d}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,c,l="",u="";function h(){l&&(n===0?s.push({type:0,value:l}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=i;break;case 1:c==="("?n=2:oP.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function cP(t,e,n){const i=nP(aP(t.path),n),r=Te(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function lP(t,e){const n=[],i=new Map;e=gy({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,h,f){const d=!f,m=uP(u);m.aliasOf=f&&f.record;const y=gy(e,u),b=[m];if("alias"in u){const w=typeof u.alias=="string"?[u.alias]:u.alias;for(const I of w)b.push(Te({},m,{components:f?f.record.components:m.components,path:I,aliasOf:f?f.record:m}))}let _,v;for(const w of b){const{path:I}=w;if(h&&I[0]!=="/"){const F=h.record.path,X=F[F.length-1]==="/"?"":"/";w.path=h.record.path+(I&&X+I)}if(_=cP(w,h,y),f?f.alias.push(_):(v=v||_,v!==_&&v.alias.push(_),d&&u.name&&!my(_)&&o(u.name)),m.children){const F=m.children;for(let X=0;X<F.length;X++)s(F[X],_,f&&f.children[X])}f=f||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&c(_)}return v?()=>{o(v)}:Js}function o(u){if(aw(u)){const h=i.get(u);h&&(i.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&rP(u,n[h])>=0&&(u.record.path!==n[h].record.path||!lw(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!my(u)&&i.set(u.record.name,u)}function l(u,h){let f,d={},m,y;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw ss(1,{location:u});y=f.record.name,d=Te(py(h.params,f.keys.filter(v=>!v.optional).map(v=>v.name)),u.params&&py(u.params,f.keys.map(v=>v.name))),m=f.stringify(d)}else if("path"in u)m=u.path,f=n.find(v=>v.re.test(m)),f&&(d=f.parse(m),y=f.record.name);else{if(f=h.name?i.get(h.name):n.find(v=>v.re.test(h.path)),!f)throw ss(1,{location:u,currentLocation:h});y=f.record.name,d=Te({},h.params,u.params),m=f.stringify(d)}const b=[];let _=f;for(;_;)b.unshift(_.record),_=_.parent;return{name:y,path:m,params:d,matched:b,meta:fP(b)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function py(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function uP(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:hP(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function hP(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="boolean"?n:n[i];return e}function my(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function fP(t){return t.reduce((e,n)=>Te(e,n.meta),{})}function gy(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function lw(t,e){return e.children.some(n=>n===t||lw(t,n))}const uw=/#/g,dP=/&/g,pP=/\//g,mP=/=/g,gP=/\?/g,hw=/\+/g,yP=/%5B/g,_P=/%5D/g,fw=/%5E/g,vP=/%60/g,dw=/%7B/g,bP=/%7C/g,pw=/%7D/g,wP=/%20/g;function hp(t){return encodeURI(""+t).replace(bP,"|").replace(yP,"[").replace(_P,"]")}function EP(t){return hp(t).replace(dw,"{").replace(pw,"}").replace(fw,"^")}function ef(t){return hp(t).replace(hw,"%2B").replace(wP,"+").replace(uw,"%23").replace(dP,"%26").replace(vP,"`").replace(dw,"{").replace(pw,"}").replace(fw,"^")}function TP(t){return ef(t).replace(mP,"%3D")}function IP(t){return hp(t).replace(uw,"%23").replace(gP,"%3F")}function CP(t){return t==null?"":IP(t).replace(pP,"%2F")}function Uc(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function SP(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(hw," "),o=s.indexOf("="),a=Uc(o<0?s:s.slice(0,o)),c=o<0?null:Uc(s.slice(o+1));if(a in e){let l=e[a];pn(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function yy(t){let e="";for(let n in t){const i=t[n];if(n=TP(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(pn(i)?i.map(s=>s&&ef(s)):[i&&ef(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function AP(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=pn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const kP=Symbol(""),_y=Symbol(""),Kl=Symbol(""),fp=Symbol(""),tf=Symbol("");function Ds(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function li(t,e,n,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(ss(4,{from:n,to:e})):h instanceof Error?a(h):Z2(h)?a(ss(2,{from:e,to:h})):(s&&i.enterCallbacks[r]===s&&typeof h=="function"&&s.push(h),o())},l=t.call(i&&i.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Fu(t,e,n,i){const r=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(RP(a)){const l=(a.__vccOpts||a)[e];l&&r.push(li(l,n,i,s,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=P2(l)?l.default:l;s.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&li(f,n,i,s,o)()}))}}return r}function RP(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function vy(t){const e=Ht(Kl),n=Ht(fp),i=se(()=>e.resolve(D(t.to))),r=se(()=>{const{matched:c}=i.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(rs.bind(null,u));if(f>-1)return f;const d=by(c[l-2]);return l>1&&by(u)===d&&h[h.length-1].path!==d?h.findIndex(rs.bind(null,c[l-2])):f}),s=se(()=>r.value>-1&&OP(n.params,i.value.params)),o=se(()=>r.value>-1&&r.value===n.matched.length-1&&sw(n.params,i.value.params));function a(c={}){return DP(c)?e[D(t.replace)?"replace":"push"](D(t.to)).catch(Js):Promise.resolve()}return{route:i,href:se(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const NP=Lo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:vy,setup(t,{slots:e}){const n=Mo(vy(t)),{options:i}=Ht(Kl),r=se(()=>({[wy(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[wy(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:rl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),xP=NP;function DP(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function OP(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!pn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function by(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const wy=(t,e,n)=>t??e??n,PP=Lo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Ht(tf),r=se(()=>t.route||i.value),s=Ht(_y,0),o=se(()=>{let l=D(s);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=se(()=>r.value.matched[o.value]);Ba(_y,se(()=>o.value+1)),Ba(kP,a),Ba(tf,r);const c=Tt();return Mr(()=>[c.value,a.value,t.name],([l,u,h],[f,d,m])=>{u&&(u.instances[h]=l,d&&d!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),l&&u&&(!d||!rs(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(y=>y(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return Ey(n.default,{Component:f,route:l});const d=h.props[u],m=d?d===!0?l.params:typeof d=="function"?d(l):d:null,b=rl(f,Te({},m,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Ey(n.default,{Component:b,route:l})||b}}});function Ey(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const mw=PP;function MP(t){const e=lP(t.routes,t),n=t.parseQuery||SP,i=t.stringifyQuery||yy,r=t.history,s=Ds(),o=Ds(),a=Ds(),c=v_(oi);let l=oi;Cr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Mu.bind(null,C=>""+C),h=Mu.bind(null,CP),f=Mu.bind(null,Uc);function d(C,U){let M,H;return aw(C)?(M=e.getRecordMatcher(C),H=U):H=C,e.addRoute(H,M)}function m(C){const U=e.getRecordMatcher(C);U&&e.removeRoute(U)}function y(){return e.getRoutes().map(C=>C.record)}function b(C){return!!e.getRecordMatcher(C)}function _(C,U){if(U=Te({},U||c.value),typeof C=="string"){const p=Lu(n,C,U.path),g=e.resolve({path:p.path},U),E=r.createHref(p.fullPath);return Te(p,g,{params:f(g.params),hash:Uc(p.hash),redirectedFrom:void 0,href:E})}let M;if("path"in C)M=Te({},C,{path:Lu(n,C.path,U.path).path});else{const p=Te({},C.params);for(const g in p)p[g]==null&&delete p[g];M=Te({},C,{params:h(C.params)}),U.params=h(U.params)}const H=e.resolve(M,U),me=C.hash||"";H.params=u(f(H.params));const Ve=F2(i,Te({},C,{hash:EP(me),path:H.path})),ae=r.createHref(Ve);return Te({fullPath:Ve,hash:me,query:i===yy?AP(C.query):C.query||{}},H,{redirectedFrom:void 0,href:ae})}function v(C){return typeof C=="string"?Lu(n,C,c.value.path):Te({},C)}function w(C,U){if(l!==C)return ss(8,{from:U,to:C})}function I(C){return oe(C)}function F(C){return I(Te(v(C),{replace:!0}))}function X(C){const U=C.matched[C.matched.length-1];if(U&&U.redirect){const{redirect:M}=U;let H=typeof M=="function"?M(C):M;return typeof H=="string"&&(H=H.includes("?")||H.includes("#")?H=v(H):{path:H},H.params={}),Te({query:C.query,hash:C.hash,params:"path"in H?{}:C.params},H)}}function oe(C,U){const M=l=_(C),H=c.value,me=C.state,Ve=C.force,ae=C.replace===!0,p=X(M);if(p)return oe(Te(v(p),{state:typeof p=="object"?Te({},me,p.state):me,force:Ve,replace:ae}),U||M);const g=M;g.redirectedFrom=U;let E;return!Ve&&U2(i,H,M)&&(E=ss(16,{to:g,from:H}),ki(H,H,!0,!1)),(E?Promise.resolve(E):He(g,H)).catch(T=>Ln(T)?Ln(T,2)?T:Zt(T):Ae(T,g,H)).then(T=>{if(T){if(Ln(T,2))return oe(Te({replace:ae},v(T.to),{state:typeof T.to=="object"?Te({},me,T.to.state):me,force:Ve}),U||g)}else T=ii(g,H,!0,ae,me);return dt(g,H,T),T})}function _e(C,U){const M=w(C,U);return M?Promise.reject(M):Promise.resolve()}function He(C,U){let M;const[H,me,Ve]=LP(C,U);M=Fu(H.reverse(),"beforeRouteLeave",C,U);for(const p of H)p.leaveGuards.forEach(g=>{M.push(li(g,C,U))});const ae=_e.bind(null,C,U);return M.push(ae),wr(M).then(()=>{M=[];for(const p of s.list())M.push(li(p,C,U));return M.push(ae),wr(M)}).then(()=>{M=Fu(me,"beforeRouteUpdate",C,U);for(const p of me)p.updateGuards.forEach(g=>{M.push(li(g,C,U))});return M.push(ae),wr(M)}).then(()=>{M=[];for(const p of C.matched)if(p.beforeEnter&&!U.matched.includes(p))if(pn(p.beforeEnter))for(const g of p.beforeEnter)M.push(li(g,C,U));else M.push(li(p.beforeEnter,C,U));return M.push(ae),wr(M)}).then(()=>(C.matched.forEach(p=>p.enterCallbacks={}),M=Fu(Ve,"beforeRouteEnter",C,U),M.push(ae),wr(M))).then(()=>{M=[];for(const p of o.list())M.push(li(p,C,U));return M.push(ae),wr(M)}).catch(p=>Ln(p,8)?p:Promise.reject(p))}function dt(C,U,M){for(const H of a.list())H(C,U,M)}function ii(C,U,M,H,me){const Ve=w(C,U);if(Ve)return Ve;const ae=U===oi,p=Cr?history.state:{};M&&(H||ae?r.replace(C.fullPath,Te({scroll:ae&&p&&p.scroll},me)):r.push(C.fullPath,me)),c.value=C,ki(C,U,M,ae),Zt()}let gn;function yr(){gn||(gn=r.listen((C,U,M)=>{if(!ua.listening)return;const H=_(C),me=X(H);if(me){oe(Te(me,{replace:!0}),H).catch(Js);return}l=H;const Ve=c.value;Cr&&W2(ly(Ve.fullPath,M.delta),Hl()),He(H,Ve).catch(ae=>Ln(ae,12)?ae:Ln(ae,2)?(oe(ae.to,H).then(p=>{Ln(p,20)&&!M.delta&&M.type===ko.pop&&r.go(-1,!1)}).catch(Js),Promise.reject()):(M.delta&&r.go(-M.delta,!1),Ae(ae,H,Ve))).then(ae=>{ae=ae||ii(H,Ve,!1),ae&&(M.delta&&!Ln(ae,8)?r.go(-M.delta,!1):M.type===ko.pop&&Ln(ae,20)&&r.go(-1,!1)),dt(H,Ve,ae)}).catch(Js)}))}let Ai=Ds(),Is=Ds(),We;function Ae(C,U,M){Zt(C);const H=Is.list();return H.length?H.forEach(me=>me(C,U,M)):console.error(C),Promise.reject(C)}function Ie(){return We&&c.value!==oi?Promise.resolve():new Promise((C,U)=>{Ai.add([C,U])})}function Zt(C){return We||(We=!C,yr(),Ai.list().forEach(([U,M])=>C?M(C):U()),Ai.reset()),C}function ki(C,U,M,H){const{scrollBehavior:me}=t;if(!Cr||!me)return Promise.resolve();const Ve=!M&&q2(ly(C.fullPath,0))||(H||!M)&&history.state&&history.state.scroll||null;return I_().then(()=>me(C,U,Ve)).then(ae=>ae&&K2(ae)).catch(ae=>Ae(ae,C,U))}const en=C=>r.go(C);let Dt;const _r=new Set,ua={currentRoute:c,listening:!0,addRoute:d,removeRoute:m,hasRoute:b,getRoutes:y,resolve:_,options:t,push:I,replace:F,go:en,back:()=>en(-1),forward:()=>en(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:Is.add,isReady:Ie,install(C){const U=this;C.component("RouterLink",xP),C.component("RouterView",mw),C.config.globalProperties.$router=U,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>D(c)}),Cr&&!Dt&&c.value===oi&&(Dt=!0,I(r.location).catch(me=>{}));const M={};for(const me in oi)M[me]=se(()=>c.value[me]);C.provide(Kl,U),C.provide(fp,Mo(M)),C.provide(tf,c);const H=C.unmount;_r.add(C),C.unmount=function(){_r.delete(C),_r.size<1&&(l=oi,gn&&gn(),gn=null,c.value=oi,Dt=!1,We=!1),H()}}};return ua}function wr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function LP(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(l=>rs(l,a))?i.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>rs(l,c))||r.push(c))}return[n,i,r]}function dp(){return Ht(Kl)}function Wl(){return Ht(fp)}const FP={class:"container"},UP={__name:"App",setup(t){const e=Wl();return(n,i)=>{const r=M_("RouterView");return te(),de("div",FP,[(te(),Hn(r,{key:D(e).fullPath}))])}}},ti=sv({apiKey:"AIzaSyAnOiG77O1ukT9C2x8u1VbMLw7For9C_3w",authDomain:"bingo-50cec.firebaseapp.com",databaseURL:"https://bingo-50cec-default-rtdb.europe-west1.firebasedatabase.app",projectId:"bingo-50cec",storageBucket:"bingo-50cec.appspot.com",messagingSenderId:"866066986693",appId:"1:866066986693:web:de513df8434d232b0562ac",measurementId:"G-8F3EECYHQ0"}),VP=V1(ti);Ao(VP,"todos");function Ty(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function V(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ty(Object(n),!0).forEach(function(i){tt(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ty(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Vc(t){return Vc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Vc(t)}function $P(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Iy(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function BP(t,e,n){return e&&Iy(t.prototype,e),n&&Iy(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function tt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function pp(t,e){return zP(t)||KP(t,e)||gw(t,e)||qP()}function oa(t){return jP(t)||HP(t)||gw(t)||WP()}function jP(t){if(Array.isArray(t))return nf(t)}function zP(t){if(Array.isArray(t))return t}function HP(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function KP(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],r=!0,s=!1,o,a;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(c){s=!0,a=c}finally{try{!r&&n.return!=null&&n.return()}finally{if(s)throw a}}return i}}function gw(t,e){if(t){if(typeof t=="string")return nf(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return nf(t,e)}}function nf(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function WP(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qP(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Cy=function(){},mp={},yw={},_w=null,vw={mark:Cy,measure:Cy};try{typeof window<"u"&&(mp=window),typeof document<"u"&&(yw=document),typeof MutationObserver<"u"&&(_w=MutationObserver),typeof performance<"u"&&(vw=performance)}catch{}var GP=mp.navigator||{},Sy=GP.userAgent,Ay=Sy===void 0?"":Sy,wi=mp,Oe=yw,ky=_w,Na=vw;wi.document;var ni=!!Oe.documentElement&&!!Oe.head&&typeof Oe.addEventListener=="function"&&typeof Oe.createElement=="function",bw=~Ay.indexOf("MSIE")||~Ay.indexOf("Trident/"),xa,Da,Oa,Pa,Ma,Yn="___FONT_AWESOME___",rf=16,ww="fa",Ew="svg-inline--fa",ar="data-fa-i2svg",sf="data-fa-pseudo-element",YP="data-fa-pseudo-element-pending",gp="data-prefix",yp="data-icon",Ry="fontawesome-i2svg",QP="async",XP=["HTML","HEAD","STYLE","SCRIPT"],Tw=function(){try{return!0}catch{return!1}}(),De="classic",Be="sharp",_p=[De,Be];function aa(t){return new Proxy(t,{get:function(n,i){return i in n?n[i]:n[De]}})}var Ro=aa((xa={},tt(xa,De,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),tt(xa,Be,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),xa)),No=aa((Da={},tt(Da,De,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),tt(Da,Be,{solid:"fass",regular:"fasr",light:"fasl"}),Da)),xo=aa((Oa={},tt(Oa,De,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),tt(Oa,Be,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Oa)),JP=aa((Pa={},tt(Pa,De,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),tt(Pa,Be,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Pa)),ZP=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Iw="fa-layers-text",eM=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,tM=aa((Ma={},tt(Ma,De,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),tt(Ma,Be,{900:"fass",400:"fasr",300:"fasl"}),Ma)),Cw=[1,2,3,4,5,6,7,8,9,10],nM=Cw.concat([11,12,13,14,15,16,17,18,19,20]),iM=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],zi={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Do=new Set;Object.keys(No[De]).map(Do.add.bind(Do));Object.keys(No[Be]).map(Do.add.bind(Do));var rM=[].concat(_p,oa(Do),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",zi.GROUP,zi.SWAP_OPACITY,zi.PRIMARY,zi.SECONDARY]).concat(Cw.map(function(t){return"".concat(t,"x")})).concat(nM.map(function(t){return"w-".concat(t)})),eo=wi.FontAwesomeConfig||{};function sM(t){var e=Oe.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function oM(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Oe&&typeof Oe.querySelector=="function"){var aM=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];aM.forEach(function(t){var e=pp(t,2),n=e[0],i=e[1],r=oM(sM(n));r!=null&&(eo[i]=r)})}var Sw={styleDefault:"solid",familyDefault:"classic",cssPrefix:ww,replacementClass:Ew,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};eo.familyPrefix&&(eo.cssPrefix=eo.familyPrefix);var os=V(V({},Sw),eo);os.autoReplaceSvg||(os.observeMutations=!1);var B={};Object.keys(Sw).forEach(function(t){Object.defineProperty(B,t,{enumerable:!0,set:function(n){os[t]=n,to.forEach(function(i){return i(B)})},get:function(){return os[t]}})});Object.defineProperty(B,"familyPrefix",{enumerable:!0,set:function(e){os.cssPrefix=e,to.forEach(function(n){return n(B)})},get:function(){return os.cssPrefix}});wi.FontAwesomeConfig=B;var to=[];function cM(t){return to.push(t),function(){to.splice(to.indexOf(t),1)}}var ai=rf,In={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function lM(t){if(!(!t||!ni)){var e=Oe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Oe.head.childNodes,i=null,r=n.length-1;r>-1;r--){var s=n[r],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=s)}return Oe.head.insertBefore(e,i),t}}var uM="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Oo(){for(var t=12,e="";t-- >0;)e+=uM[Math.random()*62|0];return e}function Ts(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function vp(t){return t.classList?Ts(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Aw(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function hM(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Aw(t[n]),'" ')},"").trim()}function ql(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function bp(t){return t.size!==In.size||t.x!==In.x||t.y!==In.y||t.rotate!==In.rotate||t.flipX||t.flipY}function fM(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(s," ").concat(o," ").concat(a)},l={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:c,path:l}}function dM(t){var e=t.transform,n=t.width,i=n===void 0?rf:n,r=t.height,s=r===void 0?rf:r,o=t.startCentered,a=o===void 0?!1:o,c="";return a&&bw?c+="translate(".concat(e.x/ai-i/2,"em, ").concat(e.y/ai-s/2,"em) "):a?c+="translate(calc(-50% + ".concat(e.x/ai,"em), calc(-50% + ").concat(e.y/ai,"em)) "):c+="translate(".concat(e.x/ai,"em, ").concat(e.y/ai,"em) "),c+="scale(".concat(e.size/ai*(e.flipX?-1:1),", ").concat(e.size/ai*(e.flipY?-1:1),") "),c+="rotate(".concat(e.rotate,"deg) "),c}var pM=`:root, :host {
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
}`;function kw(){var t=ww,e=Ew,n=B.cssPrefix,i=B.replacementClass,r=pM;if(n!==t||i!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(i))}return r}var Ny=!1;function Uu(){B.autoAddCss&&!Ny&&(lM(kw()),Ny=!0)}var mM={mixout:function(){return{dom:{css:kw,insertCss:Uu}}},hooks:function(){return{beforeDOMElementCreation:function(){Uu()},beforeI2svg:function(){Uu()}}}},Qn=wi||{};Qn[Yn]||(Qn[Yn]={});Qn[Yn].styles||(Qn[Yn].styles={});Qn[Yn].hooks||(Qn[Yn].hooks={});Qn[Yn].shims||(Qn[Yn].shims=[]);var ln=Qn[Yn],Rw=[],gM=function t(){Oe.removeEventListener("DOMContentLoaded",t),$c=1,Rw.map(function(e){return e()})},$c=!1;ni&&($c=(Oe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Oe.readyState),$c||Oe.addEventListener("DOMContentLoaded",gM));function yM(t){ni&&($c?setTimeout(t,0):Rw.push(t))}function ca(t){var e=t.tag,n=t.attributes,i=n===void 0?{}:n,r=t.children,s=r===void 0?[]:r;return typeof t=="string"?Aw(t):"<".concat(e," ").concat(hM(i),">").concat(s.map(ca).join(""),"</").concat(e,">")}function xy(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var _M=function(e,n){return function(i,r,s,o){return e.call(n,i,r,s,o)}},Vu=function(e,n,i,r){var s=Object.keys(e),o=s.length,a=r!==void 0?_M(n,r):n,c,l,u;for(i===void 0?(c=1,u=e[s[0]]):(c=0,u=i);c<o;c++)l=s[c],u=a(u,e[l],l,e);return u};function vM(t){for(var e=[],n=0,i=t.length;n<i;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function of(t){var e=vM(t);return e.length===1?e[0].toString(16):null}function bM(t,e){var n=t.length,i=t.charCodeAt(e),r;return i>=55296&&i<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function Dy(t){return Object.keys(t).reduce(function(e,n){var i=t[n],r=!!i.icon;return r?e[i.iconName]=i.icon:e[n]=i,e},{})}function af(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,r=i===void 0?!1:i,s=Dy(e);typeof ln.hooks.addPack=="function"&&!r?ln.hooks.addPack(t,Dy(e)):ln.styles[t]=V(V({},ln.styles[t]||{}),s),t==="fas"&&af("fa",e)}var La,Fa,Ua,Rr=ln.styles,wM=ln.shims,EM=(La={},tt(La,De,Object.values(xo[De])),tt(La,Be,Object.values(xo[Be])),La),wp=null,Nw={},xw={},Dw={},Ow={},Pw={},TM=(Fa={},tt(Fa,De,Object.keys(Ro[De])),tt(Fa,Be,Object.keys(Ro[Be])),Fa);function IM(t){return~rM.indexOf(t)}function CM(t,e){var n=e.split("-"),i=n[0],r=n.slice(1).join("-");return i===t&&r!==""&&!IM(r)?r:null}var Mw=function(){var e=function(s){return Vu(Rr,function(o,a,c){return o[c]=Vu(a,s,{}),o},{})};Nw=e(function(r,s,o){if(s[3]&&(r[s[3]]=o),s[2]){var a=s[2].filter(function(c){return typeof c=="number"});a.forEach(function(c){r[c.toString(16)]=o})}return r}),xw=e(function(r,s,o){if(r[o]=o,s[2]){var a=s[2].filter(function(c){return typeof c=="string"});a.forEach(function(c){r[c]=o})}return r}),Pw=e(function(r,s,o){var a=s[2];return r[o]=o,a.forEach(function(c){r[c]=o}),r});var n="far"in Rr||B.autoFetchSvg,i=Vu(wM,function(r,s){var o=s[0],a=s[1],c=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(r.names[o]={prefix:a,iconName:c}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:a,iconName:c}),r},{names:{},unicodes:{}});Dw=i.names,Ow=i.unicodes,wp=Gl(B.styleDefault,{family:B.familyDefault})};cM(function(t){wp=Gl(t.styleDefault,{family:B.familyDefault})});Mw();function Ep(t,e){return(Nw[t]||{})[e]}function SM(t,e){return(xw[t]||{})[e]}function Hi(t,e){return(Pw[t]||{})[e]}function Lw(t){return Dw[t]||{prefix:null,iconName:null}}function AM(t){var e=Ow[t],n=Ep("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ei(){return wp}var Tp=function(){return{prefix:null,iconName:null,rest:[]}};function Gl(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,i=n===void 0?De:n,r=Ro[i][t],s=No[i][t]||No[i][r],o=t in ln.styles?t:null;return s||o||null}var Oy=(Ua={},tt(Ua,De,Object.keys(xo[De])),tt(Ua,Be,Object.keys(xo[Be])),Ua);function Yl(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.skipLookups,r=i===void 0?!1:i,s=(e={},tt(e,De,"".concat(B.cssPrefix,"-").concat(De)),tt(e,Be,"".concat(B.cssPrefix,"-").concat(Be)),e),o=null,a=De;(t.includes(s[De])||t.some(function(l){return Oy[De].includes(l)}))&&(a=De),(t.includes(s[Be])||t.some(function(l){return Oy[Be].includes(l)}))&&(a=Be);var c=t.reduce(function(l,u){var h=CM(B.cssPrefix,u);if(Rr[u]?(u=EM[a].includes(u)?JP[a][u]:u,o=u,l.prefix=u):TM[a].indexOf(u)>-1?(o=u,l.prefix=Gl(u,{family:a})):h?l.iconName=h:u!==B.replacementClass&&u!==s[De]&&u!==s[Be]&&l.rest.push(u),!r&&l.prefix&&l.iconName){var f=o==="fa"?Lw(l.iconName):{},d=Hi(l.prefix,l.iconName);f.prefix&&(o=null),l.iconName=f.iconName||d||l.iconName,l.prefix=f.prefix||l.prefix,l.prefix==="far"&&!Rr.far&&Rr.fas&&!B.autoFetchSvg&&(l.prefix="fas")}return l},Tp());return(t.includes("fa-brands")||t.includes("fab"))&&(c.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(c.prefix="fad"),!c.prefix&&a===Be&&(Rr.fass||B.autoFetchSvg)&&(c.prefix="fass",c.iconName=Hi(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||o==="fa")&&(c.prefix=Ei()||"fas"),c}var kM=function(){function t(){$P(this,t),this.definitions={}}return BP(t,[{key:"add",value:function(){for(var n=this,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=V(V({},n.definitions[a]||{}),o[a]),af(a,o[a]);var c=xo[De][a];c&&af(c,o[a]),Mw()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var r=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(r).map(function(s){var o=r[s],a=o.prefix,c=o.iconName,l=o.icon,u=l[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(h){typeof h=="string"&&(n[a][h]=l)}),n[a][c]=l}),n}}]),t}(),Py=[],Nr={},jr={},RM=Object.keys(jr);function NM(t,e){var n=e.mixoutsTo;return Py=t,Nr={},Object.keys(jr).forEach(function(i){RM.indexOf(i)===-1&&delete jr[i]}),Py.forEach(function(i){var r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),Vc(r[o])==="object"&&Object.keys(r[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=r[o][a]})}),i.hooks){var s=i.hooks();Object.keys(s).forEach(function(o){Nr[o]||(Nr[o]=[]),Nr[o].push(s[o])})}i.provides&&i.provides(jr)}),n}function cf(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];var s=Nr[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(i))}),e}function cr(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var r=Nr[t]||[];r.forEach(function(s){s.apply(null,n)})}function Xn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return jr[t]?jr[t].apply(null,e):void 0}function lf(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Ei();if(e)return e=Hi(n,e)||e,xy(Fw.definitions,n,e)||xy(ln.styles,n,e)}var Fw=new kM,xM=function(){B.autoReplaceSvg=!1,B.observeMutations=!1,cr("noAuto")},DM={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ni?(cr("beforeI2svg",e),Xn("pseudoElements2svg",e),Xn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;B.autoReplaceSvg===!1&&(B.autoReplaceSvg=!0),B.observeMutations=!0,yM(function(){PM({autoReplaceSvgRoot:n}),cr("watch",e)})}},OM={icon:function(e){if(e===null)return null;if(Vc(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Hi(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=Gl(e[0]);return{prefix:i,iconName:Hi(i,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(B.cssPrefix,"-"))>-1||e.match(ZP))){var r=Yl(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||Ei(),iconName:Hi(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var s=Ei();return{prefix:s,iconName:Hi(s,e)||e}}}},Gt={noAuto:xM,config:B,dom:DM,parse:OM,library:Fw,findIconDefinition:lf,toHtml:ca},PM=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,i=n===void 0?Oe:n;(Object.keys(ln.styles).length>0||B.autoFetchSvg)&&ni&&B.autoReplaceSvg&&Gt.dom.i2svg({node:i})};function Ql(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return ca(i)})}}),Object.defineProperty(t,"node",{get:function(){if(ni){var i=Oe.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function MM(t){var e=t.children,n=t.main,i=t.mask,r=t.attributes,s=t.styles,o=t.transform;if(bp(o)&&n.found&&!i.found){var a=n.width,c=n.height,l={x:a/c/2,y:.5};r.style=ql(V(V({},s),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function LM(t){var e=t.prefix,n=t.iconName,i=t.children,r=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(B.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:V(V({},r),{},{id:o}),children:i}]}]}function Ip(t){var e=t.icons,n=e.main,i=e.mask,r=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,c=t.title,l=t.maskId,u=t.titleId,h=t.extra,f=t.watchable,d=f===void 0?!1:f,m=i.found?i:n,y=m.width,b=m.height,_=r==="fak",v=[B.replacementClass,s?"".concat(B.cssPrefix,"-").concat(s):""].filter(function(He){return h.classes.indexOf(He)===-1}).filter(function(He){return He!==""||!!He}).concat(h.classes).join(" "),w={children:[],attributes:V(V({},h.attributes),{},{"data-prefix":r,"data-icon":s,class:v,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(b)})},I=_&&!~h.classes.indexOf("fa-fw")?{width:"".concat(y/b*16*.0625,"em")}:{};d&&(w.attributes[ar]=""),c&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(u||Oo())},children:[c]}),delete w.attributes.title);var F=V(V({},w),{},{prefix:r,iconName:s,main:n,mask:i,maskId:l,transform:o,symbol:a,styles:V(V({},I),h.styles)}),X=i.found&&n.found?Xn("generateAbstractMask",F)||{children:[],attributes:{}}:Xn("generateAbstractIcon",F)||{children:[],attributes:{}},oe=X.children,_e=X.attributes;return F.children=oe,F.attributes=_e,a?LM(F):MM(F)}function My(t){var e=t.content,n=t.width,i=t.height,r=t.transform,s=t.title,o=t.extra,a=t.watchable,c=a===void 0?!1:a,l=V(V(V({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});c&&(l[ar]="");var u=V({},o.styles);bp(r)&&(u.transform=dM({transform:r,startCentered:!0,width:n,height:i}),u["-webkit-transform"]=u.transform);var h=ql(u);h.length>0&&(l.style=h);var f=[];return f.push({tag:"span",attributes:l,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function FM(t){var e=t.content,n=t.title,i=t.extra,r=V(V(V({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),s=ql(i.styles);s.length>0&&(r.style=s);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var $u=ln.styles;function uf(t){var e=t[0],n=t[1],i=t.slice(4),r=pp(i,1),s=r[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(B.cssPrefix,"-").concat(zi.GROUP)},children:[{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat(zi.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat(zi.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var UM={found:!1,width:512,height:512};function VM(t,e){!Tw&&!B.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function hf(t,e){var n=e;return e==="fa"&&B.styleDefault!==null&&(e=Ei()),new Promise(function(i,r){if(Xn("missingIconAbstract"),n==="fa"){var s=Lw(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&$u[e]&&$u[e][t]){var o=$u[e][t];return i(uf(o))}VM(t,e),i(V(V({},UM),{},{icon:B.showMissingIcons&&t?Xn("missingIconAbstract")||{}:{}}))})}var Ly=function(){},ff=B.measurePerformance&&Na&&Na.mark&&Na.measure?Na:{mark:Ly,measure:Ly},Vs='FA "6.4.0"',$M=function(e){return ff.mark("".concat(Vs," ").concat(e," begins")),function(){return Uw(e)}},Uw=function(e){ff.mark("".concat(Vs," ").concat(e," ends")),ff.measure("".concat(Vs," ").concat(e),"".concat(Vs," ").concat(e," begins"),"".concat(Vs," ").concat(e," ends"))},Cp={begin:$M,end:Uw},Qa=function(){};function Fy(t){var e=t.getAttribute?t.getAttribute(ar):null;return typeof e=="string"}function BM(t){var e=t.getAttribute?t.getAttribute(gp):null,n=t.getAttribute?t.getAttribute(yp):null;return e&&n}function jM(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(B.replacementClass)}function zM(){if(B.autoReplaceSvg===!0)return Xa.replace;var t=Xa[B.autoReplaceSvg];return t||Xa.replace}function HM(t){return Oe.createElementNS("http://www.w3.org/2000/svg",t)}function KM(t){return Oe.createElement(t)}function Vw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,i=n===void 0?t.tag==="svg"?HM:KM:n;if(typeof t=="string")return Oe.createTextNode(t);var r=i(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){r.appendChild(Vw(o,{ceFn:i}))}),r}function WM(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Xa={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(Vw(r),n)}),n.getAttribute(ar)===null&&B.keepOriginalSource){var i=Oe.createComment(WM(n));n.parentNode.replaceChild(i,n)}else n.remove()},nest:function(e){var n=e[0],i=e[1];if(~vp(n).indexOf(B.replacementClass))return Xa.replace(e);var r=new RegExp("".concat(B.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var s=i[0].attributes.class.split(" ").reduce(function(a,c){return c===B.replacementClass||c.match(r)?a.toSvg.push(c):a.toNode.push(c),a},{toNode:[],toSvg:[]});i[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=i.map(function(a){return ca(a)}).join(`
`);n.setAttribute(ar,""),n.innerHTML=o}};function Uy(t){t()}function $w(t,e){var n=typeof e=="function"?e:Qa;if(t.length===0)n();else{var i=Uy;B.mutateApproach===QP&&(i=wi.requestAnimationFrame||Uy),i(function(){var r=zM(),s=Cp.begin("mutate");t.map(r),s(),n()})}}var Sp=!1;function Bw(){Sp=!0}function df(){Sp=!1}var Bc=null;function Vy(t){if(ky&&B.observeMutations){var e=t.treeCallback,n=e===void 0?Qa:e,i=t.nodeCallback,r=i===void 0?Qa:i,s=t.pseudoElementsCallback,o=s===void 0?Qa:s,a=t.observeMutationsRoot,c=a===void 0?Oe:a;Bc=new ky(function(l){if(!Sp){var u=Ei();Ts(l).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!Fy(h.addedNodes[0])&&(B.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&B.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&Fy(h.target)&&~iM.indexOf(h.attributeName))if(h.attributeName==="class"&&BM(h.target)){var f=Yl(vp(h.target)),d=f.prefix,m=f.iconName;h.target.setAttribute(gp,d||u),m&&h.target.setAttribute(yp,m)}else jM(h.target)&&r(h.target)})}}),ni&&Bc.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function qM(){Bc&&Bc.disconnect()}function GM(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(i,r){var s=r.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(i[o]=a.join(":").trim()),i},{})),n}function YM(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"",r=Yl(vp(t));return r.prefix||(r.prefix=Ei()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=SM(r.prefix,t.innerText)||Ep(r.prefix,of(t.innerText))),!r.iconName&&B.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function QM(t){var e=Ts(t.attributes).reduce(function(r,s){return r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r},{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return B.autoA11y&&(n?e["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(i||Oo()):(e["aria-hidden"]="true",e.focusable="false")),e}function XM(){return{iconName:null,title:null,titleId:null,prefix:null,transform:In,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function $y(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=YM(t),i=n.iconName,r=n.prefix,s=n.rest,o=QM(t),a=cf("parseNodeAttributes",{},t),c=e.styleParser?GM(t):[];return V({iconName:i,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:In,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:c,attributes:o}},a)}var JM=ln.styles;function jw(t){var e=B.autoReplaceSvg==="nest"?$y(t,{styleParser:!1}):$y(t);return~e.extra.classes.indexOf(Iw)?Xn("generateLayersText",t,e):Xn("generateSvgReplacementMutation",t,e)}var Ti=new Set;_p.map(function(t){Ti.add("fa-".concat(t))});Object.keys(Ro[De]).map(Ti.add.bind(Ti));Object.keys(Ro[Be]).map(Ti.add.bind(Ti));Ti=oa(Ti);function By(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ni)return Promise.resolve();var n=Oe.documentElement.classList,i=function(h){return n.add("".concat(Ry,"-").concat(h))},r=function(h){return n.remove("".concat(Ry,"-").concat(h))},s=B.autoFetchSvg?Ti:_p.map(function(u){return"fa-".concat(u)}).concat(Object.keys(JM));s.includes("fa")||s.push("fa");var o=[".".concat(Iw,":not([").concat(ar,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(ar,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Ts(t.querySelectorAll(o))}catch{}if(a.length>0)i("pending"),r("complete");else return Promise.resolve();var c=Cp.begin("onTree"),l=a.reduce(function(u,h){try{var f=jw(h);f&&u.push(f)}catch(d){Tw||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise(function(u,h){Promise.all(l).then(function(f){$w(f,function(){i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),c(),u()})}).catch(function(f){c(),h(f)})})}function ZM(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;jw(t).then(function(n){n&&$w([n],e)})}function eL(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:lf(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:lf(r||{})),t(i,V(V({},n),{},{mask:r}))}}var tL=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,r=i===void 0?In:i,s=n.symbol,o=s===void 0?!1:s,a=n.mask,c=a===void 0?null:a,l=n.maskId,u=l===void 0?null:l,h=n.title,f=h===void 0?null:h,d=n.titleId,m=d===void 0?null:d,y=n.classes,b=y===void 0?[]:y,_=n.attributes,v=_===void 0?{}:_,w=n.styles,I=w===void 0?{}:w;if(e){var F=e.prefix,X=e.iconName,oe=e.icon;return Ql(V({type:"icon"},e),function(){return cr("beforeDOMElementCreation",{iconDefinition:e,params:n}),B.autoA11y&&(f?v["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(m||Oo()):(v["aria-hidden"]="true",v.focusable="false")),Ip({icons:{main:uf(oe),mask:c?uf(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:F,iconName:X,transform:V(V({},In),r),symbol:o,title:f,maskId:u,titleId:m,extra:{attributes:v,styles:I,classes:b}})})}},nL={mixout:function(){return{icon:eL(tL)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=By,n.nodeCallback=ZM,n}}},provides:function(e){e.i2svg=function(n){var i=n.node,r=i===void 0?Oe:i,s=n.callback,o=s===void 0?function(){}:s;return By(r,o)},e.generateSvgReplacementMutation=function(n,i){var r=i.iconName,s=i.title,o=i.titleId,a=i.prefix,c=i.transform,l=i.symbol,u=i.mask,h=i.maskId,f=i.extra;return new Promise(function(d,m){Promise.all([hf(r,a),u.iconName?hf(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var b=pp(y,2),_=b[0],v=b[1];d([n,Ip({icons:{main:_,mask:v},prefix:a,iconName:r,transform:c,symbol:l,maskId:h,title:s,titleId:o,extra:f,watchable:!0})])}).catch(m)})},e.generateAbstractIcon=function(n){var i=n.children,r=n.attributes,s=n.main,o=n.transform,a=n.styles,c=ql(a);c.length>0&&(r.style=c);var l;return bp(o)&&(l=Xn("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),i.push(l||s.icon),{children:i,attributes:r}}}},iL={mixout:function(){return{layer:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.classes,s=r===void 0?[]:r;return Ql({type:"layer"},function(){cr("beforeDOMElementCreation",{assembler:n,params:i});var o=[];return n(function(a){Array.isArray(a)?a.map(function(c){o=o.concat(c.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(B.cssPrefix,"-layers")].concat(oa(s)).join(" ")},children:o}]})}}}},rL={mixout:function(){return{counter:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.title,s=r===void 0?null:r,o=i.classes,a=o===void 0?[]:o,c=i.attributes,l=c===void 0?{}:c,u=i.styles,h=u===void 0?{}:u;return Ql({type:"counter",content:n},function(){return cr("beforeDOMElementCreation",{content:n,params:i}),FM({content:n.toString(),title:s,extra:{attributes:l,styles:h,classes:["".concat(B.cssPrefix,"-layers-counter")].concat(oa(a))}})})}}}},sL={mixout:function(){return{text:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.transform,s=r===void 0?In:r,o=i.title,a=o===void 0?null:o,c=i.classes,l=c===void 0?[]:c,u=i.attributes,h=u===void 0?{}:u,f=i.styles,d=f===void 0?{}:f;return Ql({type:"text",content:n},function(){return cr("beforeDOMElementCreation",{content:n,params:i}),My({content:n,transform:V(V({},In),s),title:a,extra:{attributes:h,styles:d,classes:["".concat(B.cssPrefix,"-layers-text")].concat(oa(l))}})})}}},provides:function(e){e.generateLayersText=function(n,i){var r=i.title,s=i.transform,o=i.extra,a=null,c=null;if(bw){var l=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/l,c=u.height/l}return B.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,My({content:n.innerHTML,width:a,height:c,transform:s,title:r,extra:o,watchable:!0})])}}},oL=new RegExp('"',"ug"),jy=[1105920,1112319];function aL(t){var e=t.replace(oL,""),n=bM(e,0),i=n>=jy[0]&&n<=jy[1],r=e.length===2?e[0]===e[1]:!1;return{value:of(r?e[0]:e),isSecondary:i||r}}function zy(t,e){var n="".concat(YP).concat(e.replace(":","-"));return new Promise(function(i,r){if(t.getAttribute(n)!==null)return i();var s=Ts(t.children),o=s.filter(function(oe){return oe.getAttribute(sf)===e})[0],a=wi.getComputedStyle(t,e),c=a.getPropertyValue("font-family").match(eM),l=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),i();if(c&&u!=="none"&&u!==""){var h=a.getPropertyValue("content"),f=~["Sharp"].indexOf(c[2])?Be:De,d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?No[f][c[2].toLowerCase()]:tM[f][l],m=aL(h),y=m.value,b=m.isSecondary,_=c[0].startsWith("FontAwesome"),v=Ep(d,y),w=v;if(_){var I=AM(y);I.iconName&&I.prefix&&(v=I.iconName,d=I.prefix)}if(v&&!b&&(!o||o.getAttribute(gp)!==d||o.getAttribute(yp)!==w)){t.setAttribute(n,w),o&&t.removeChild(o);var F=XM(),X=F.extra;X.attributes[sf]=e,hf(v,d).then(function(oe){var _e=Ip(V(V({},F),{},{icons:{main:oe,mask:Tp()},prefix:d,iconName:w,extra:X,watchable:!0})),He=Oe.createElement("svg");e==="::before"?t.insertBefore(He,t.firstChild):t.appendChild(He),He.outerHTML=_e.map(function(dt){return ca(dt)}).join(`
`),t.removeAttribute(n),i()}).catch(r)}else i()}else i()})}function cL(t){return Promise.all([zy(t,"::before"),zy(t,"::after")])}function lL(t){return t.parentNode!==document.head&&!~XP.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(sf)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Hy(t){if(ni)return new Promise(function(e,n){var i=Ts(t.querySelectorAll("*")).filter(lL).map(cL),r=Cp.begin("searchPseudoElements");Bw(),Promise.all(i).then(function(){r(),df(),e()}).catch(function(){r(),df(),n()})})}var uL={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Hy,n}}},provides:function(e){e.pseudoElements2svg=function(n){var i=n.node,r=i===void 0?Oe:i;B.searchPseudoElements&&Hy(r)}}},Ky=!1,hL={mixout:function(){return{dom:{unwatch:function(){Bw(),Ky=!0}}}},hooks:function(){return{bootstrap:function(){Vy(cf("mutationObserverCallbacks",{}))},noAuto:function(){qM()},watch:function(n){var i=n.observeMutationsRoot;Ky?df():Vy(cf("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},Wy=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,r){var s=r.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return i.flipX=!0,i;if(o&&a==="v")return i.flipY=!0,i;if(a=parseFloat(a),isNaN(a))return i;switch(o){case"grow":i.size=i.size+a;break;case"shrink":i.size=i.size-a;break;case"left":i.x=i.x-a;break;case"right":i.x=i.x+a;break;case"up":i.y=i.y-a;break;case"down":i.y=i.y+a;break;case"rotate":i.rotate=i.rotate+a;break}return i},n)},fL={mixout:function(){return{parse:{transform:function(n){return Wy(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-transform");return r&&(n.transform=Wy(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var i=n.main,r=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},c="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(c," ").concat(l," ").concat(u)},f={transform:"translate(".concat(o/2*-1," -256)")},d={outer:a,inner:h,path:f};return{tag:"g",attributes:V({},d.outer),children:[{tag:"g",attributes:V({},d.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:V(V({},i.icon.attributes),d.path)}]}]}}}},Bu={x:0,y:0,width:"100%",height:"100%"};function qy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function dL(t){return t.tag==="g"?t.children:[t]}var pL={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-mask"),s=r?Yl(r.split(" ").map(function(o){return o.trim()})):Tp();return s.prefix||(s.prefix=Ei()),n.mask=s,n.maskId=i.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var i=n.children,r=n.attributes,s=n.main,o=n.mask,a=n.maskId,c=n.transform,l=s.width,u=s.icon,h=o.width,f=o.icon,d=fM({transform:c,containerWidth:h,iconWidth:l}),m={tag:"rect",attributes:V(V({},Bu),{},{fill:"white"})},y=u.children?{children:u.children.map(qy)}:{},b={tag:"g",attributes:V({},d.inner),children:[qy(V({tag:u.tag,attributes:V(V({},u.attributes),d.path)},y))]},_={tag:"g",attributes:V({},d.outer),children:[b]},v="mask-".concat(a||Oo()),w="clip-".concat(a||Oo()),I={tag:"mask",attributes:V(V({},Bu),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[m,_]},F={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:dL(f)},I]};return i.push(F,{tag:"rect",attributes:V({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(v,")")},Bu)}),{children:i,attributes:r}}}},mL={provides:function(e){var n=!1;wi.matchMedia&&(n=wi.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:V(V({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=V(V({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:V(V({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:V(V({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:V(V({},o),{},{values:"1;0;1;1;0;1;"})}),i.push(a),i.push({tag:"path",attributes:V(V({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:V(V({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||i.push({tag:"path",attributes:V(V({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:V(V({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},gL={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return n.symbol=s,n}}}},yL=[mM,nL,iL,rL,sL,uL,hL,fL,pL,mL,gL];NM(yL,{mixoutsTo:Gt});Gt.noAuto;var zw=Gt.config,Mn=Gt.library;Gt.dom;var jc=Gt.parse;Gt.findIconDefinition;Gt.toHtml;var _L=Gt.icon;Gt.layer;var vL=Gt.text;Gt.counter;function Gy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function sn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Gy(Object(n),!0).forEach(function(i){Ot(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Gy(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function zc(t){return zc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},zc(t)}function Ot(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function bL(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function wL(t,e){if(t==null)return{};var n=bL(t,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function pf(t){return EL(t)||TL(t)||IL(t)||CL()}function EL(t){if(Array.isArray(t))return mf(t)}function TL(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function IL(t,e){if(t){if(typeof t=="string")return mf(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return mf(t,e)}}function mf(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function CL(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var SL=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Hw={exports:{}};(function(t){(function(e){var n=function(_,v,w){if(!l(v)||h(v)||f(v)||d(v)||c(v))return v;var I,F=0,X=0;if(u(v))for(I=[],X=v.length;F<X;F++)I.push(n(_,v[F],w));else{I={};for(var oe in v)Object.prototype.hasOwnProperty.call(v,oe)&&(I[_(oe,w)]=n(_,v[oe],w))}return I},i=function(_,v){v=v||{};var w=v.separator||"_",I=v.split||/(?=[A-Z])/;return _.split(I).join(w)},r=function(_){return m(_)?_:(_=_.replace(/[\-_\s]+(.)?/g,function(v,w){return w?w.toUpperCase():""}),_.substr(0,1).toLowerCase()+_.substr(1))},s=function(_){var v=r(_);return v.substr(0,1).toUpperCase()+v.substr(1)},o=function(_,v){return i(_,v).toLowerCase()},a=Object.prototype.toString,c=function(_){return typeof _=="function"},l=function(_){return _===Object(_)},u=function(_){return a.call(_)=="[object Array]"},h=function(_){return a.call(_)=="[object Date]"},f=function(_){return a.call(_)=="[object RegExp]"},d=function(_){return a.call(_)=="[object Boolean]"},m=function(_){return _=_-0,_===_},y=function(_,v){var w=v&&"process"in v?v.process:v;return typeof w!="function"?_:function(I,F){return w(I,_,F)}},b={camelize:r,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(_,v){return n(y(r,v),_)},decamelizeKeys:function(_,v){return n(y(o,v),_,v)},pascalizeKeys:function(_,v){return n(y(s,v),_)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=b:e.humps=b})(SL)})(Hw);var AL=Hw.exports,kL=["class","style"];function RL(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),r=AL.camelize(n.slice(0,i)),s=n.slice(i+1).trim();return e[r]=s,e},{})}function NL(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Ap(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var i=(t.children||[]).map(function(c){return Ap(c)}),r=Object.keys(t.attributes||{}).reduce(function(c,l){var u=t.attributes[l];switch(l){case"class":c.class=NL(u);break;case"style":c.style=RL(u);break;default:c.attrs[l]=u}return c},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=wL(n,kL);return rl(t.tag,sn(sn(sn({},e),{},{class:r.class,style:sn(sn({},r.style),o)},r.attrs),a),i)}var Kw=!1;try{Kw=!0}catch{}function xL(){if(!Kw&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function no(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ot({},t,e):{}}function DL(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Ot(e,"fa-".concat(t.size),t.size!==null),Ot(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),Ot(e,"fa-pull-".concat(t.pull),t.pull!==null),Ot(e,"fa-swap-opacity",t.swapOpacity),Ot(e,"fa-bounce",t.bounce),Ot(e,"fa-shake",t.shake),Ot(e,"fa-beat",t.beat),Ot(e,"fa-fade",t.fade),Ot(e,"fa-beat-fade",t.beatFade),Ot(e,"fa-flash",t.flash),Ot(e,"fa-spin-pulse",t.spinPulse),Ot(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(i){return n[i]?i:null}).filter(function(i){return i})}function Yy(t){if(t&&zc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(jc.icon)return jc.icon(t);if(t===null)return null;if(zc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Hc=Lo({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var i=n.attrs,r=se(function(){return Yy(e.icon)}),s=se(function(){return no("classes",DL(e))}),o=se(function(){return no("transform",typeof e.transform=="string"?jc.transform(e.transform):e.transform)}),a=se(function(){return no("mask",Yy(e.mask))}),c=se(function(){return _L(r.value,sn(sn(sn(sn({},s.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});Mr(c,function(u){if(!u)return xL("Could not find one or more icon(s)",r.value,a.value)},{immediate:!0});var l=se(function(){return c.value?Ap(c.value.abstract[0],{},i):null});return function(){return l.value}}});Lo({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var i=n.slots,r=zw.familyPrefix,s=se(function(){return["".concat(r,"-layers")].concat(pf(e.fixedWidth?["".concat(r,"-fw")]:[]))});return function(){return rl("div",{class:s.value},i.default?i.default():[])}}});Lo({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var i=n.attrs,r=zw.familyPrefix,s=se(function(){return no("classes",[].concat(pf(e.counter?["".concat(r,"-layers-counter")]:[]),pf(e.position?["".concat(r,"-layers-").concat(e.position)]:[])))}),o=se(function(){return no("transform",typeof e.transform=="string"?jc.transform(e.transform):e.transform)}),a=se(function(){var l=vL(e.value.toString(),sn(sn({},o.value),s.value)),u=l.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),c=se(function(){return Ap(a.value,{},i)});return function(){return c.value}}});const mn=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},OL={__name:"tileFlag",props:{color:{type:String,required:!0},icon:{type:String,required:!0},inverted:{type:Boolean,required:!1,default:()=>!1}},setup(t){const e=t;return Lf(n=>({"62b4f327":e.color})),(n,i)=>(te(),de("div",{class:jn(["flag",{inverted:e.inverted}]),style:Po({backgroundColor:n.backgroundColor})},[$e(D(Hc),{class:"icon",icon:["fas",e.icon]},null,8,["icon"])],6))}},Ww=mn(OL,[["__scopeId","data-v-55d60c14"]]);const PL=["data-coord"],ML=["src"],LL={class:"boardTileFlags"},FL={__name:"BoardTile",props:{tile:{type:Object,required:!0},collected:{type:Array,default:()=>{}},verify:{type:Array,default:()=>{}},selected:{type:Boolean,default:!1},needVerifying:{type:Boolean,required:!1},groupsData:{type:Object}},setup(t){const e=t,n=se(()=>e.tile),i=se(()=>e.groupsData),r=se(()=>e.selected),s=se(()=>{var a;return(a=e.collected)==null?void 0:a.includes(n.value.id)}),o=se(()=>{var a;return(a=e.verify)==null?void 0:a.includes(n.value.id)});return(a,c)=>D(n)?(te(),de("div",{key:0,class:jn(["tile",{isCollected:D(s),needVerifying:e.needVerifying,isVerify:D(o),isSelected:D(r)}]),"data-coord":D(n).id},[Y("img",{src:D(n).img||"https://oldschool.runescape.wiki/images/Frog_%28Ruins_of_Camdozaal%29.png?6ae5e"},null,8,ML),Y("div",LL,[D(i)?(te(!0),de(je,{key:0},Hr(D(i),l=>(te(),de(je,null,[l.collected.includes(D(n).id)?(te(),Hn(Ww,{class:jn(["tileFlag","flag-end-"+l.flagEnd]),key:D(n).id+l.color,icon:l.icon,color:a.none,inverted:!0},null,8,["class","icon","color"])):ot("",!0)],64))),256)):ot("",!0)])],10,PL)):ot("",!0)}},Xl=mn(FL,[["__scopeId","data-v-7f2b4a66"]]);const qw=t=>(us("data-v-fe0b1fd8"),t=t(),hs(),t),UL={key:0},VL=["onClick","disabled"],$L={key:0},BL={class:"tooltip"},jL=qw(()=>Y("span",{class:"tooltiptext"},"Infestid89 would've gotten this tile on the 30th of April 2023 1:42 AM EST",-1)),zL={key:1},HL={class:"tooltip"},KL=qw(()=>Y("span",{class:"tooltiptext"},"Lies? Phoenix maybe?",-1)),WL={__name:"sidePannel",props:{tileData:{type:Object,required:!0},collected:{type:Array,default:()=>{}},verify:{type:Array,default:()=>{}},boardUUID:{type:String,required:!0},teamUUID:{type:String,required:!0}},setup(t){const e=t,n=gr(ti),i=async()=>{e.verify.includes(e.tileData.id)||Li(wt(n,"Boards",e.boardUUID,"Groups",e.teamUUID),{verify:[...e.verify,e.tileData.id]})};return(r,s)=>e.tileData?(te(),de("div",UL,[$e(Xl,{tile:e.tileData,verify:e.verify,collected:e.collected},null,8,["tile","verify","collected"]),Y("h2",null,"{ "+Bt(e.tileData.id.split("")[0])+" , "+Bt(e.tileData.id.split("")[1])+" }",1),Y("h1",null,Bt(e.tileData.title),1),Y("p",null,Bt(e.tileData.description),1),Y("button",{class:"btn",onClick:lr(i,["prevent"]),disabled:e.verify.includes(e.tileData.id)||e.collected.includes(e.tileData.id)}," Mark Collected ",8,VL),e.tileData.id==44?(te(),de("div",$L,[Y("p",BL,[$e(D(Hc),{class:"icon",icon:["fas","disease"]}),jL])])):ot("",!0),e.tileData.id==41?(te(),de("div",zL,[Y("p",HL,[$e(D(Hc),{class:"icon fire",icon:["fas","dove"]}),KL])])):ot("",!0)])):ot("",!0)}},qL=mn(WL,[["__scopeId","data-v-fe0b1fd8"]]);const Jl=t=>(us("data-v-5b987373"),t=t(),hs(),t),GL={key:0},YL=Jl(()=>Y("br",null,null,-1)),QL={class:"tooltiptext"},XL=Jl(()=>Y("br",null,null,-1)),JL=Jl(()=>Y("br",null,null,-1)),ZL=Jl(()=>Y("br",null,null,-1)),e4={__name:"scoreCard",props:{groupsData:{type:Object,required:!0}},setup(t){const e=t;return(n,i)=>(te(),de("div",null,[e.groupsData?(te(),de("ul",GL,[(te(!0),de(je,null,Hr(e.groupsData,(r,s)=>(te(),de("li",{key:s+t.groupsData,class:"tooltip"},[$e(Ww,{color:r.color,class:jn(["tileFlag","flag-end-"+r.flagEnd]),inverted:r.name=="Ahka's Cum Balls",icon:r.icon,style:Po({"--groupColor":r.color,"--width":r.points/750*100*1.5+"px"})},null,8,["color","class","inverted","icon","style"]),Rt(" "+Bt(r.name),1),YL,Y("span",QL,[(te(!0),de(je,null,Hr(r.member,o=>(te(),de("span",{key:o},[Rt(Bt(o),1),XL]))),128))]),Rt(" score: "+Bt(r.points),1),JL,ZL]))),128))])):ot("",!0)]))}},t4=mn(e4,[["__scopeId","data-v-5b987373"]]);const n4={key:1,class:"bingo-board"},i4={key:0},r4=["onSubmit"],s4={__name:"BingoBoard",props:{boardUUID:{type:String},teamCode:{type:String}},setup(t){const e=t;Lf(v=>({"09888680":D(h),"526ce16d":D(f)}));const n=gr(ti),i=dp(),r=Tt(""),s=Tt(""),o=Tt(""),a=Yt(wt(n,"Boards",e.boardUUID)),c=Yt(Ao(n,`Boards/${e.boardUUID}/Tiles`)),{data:l}=Yt(wt(n,`Boards/${e.boardUUID}/Groups/${e.teamCode}/`)),{data:u}=Yt(Ao(n,"Boards",e.boardUUID,"Groups")),h=se(()=>{var v;return((v=a==null?void 0:a.value)==null?void 0:v.settings.width)||7}),f=se(()=>{var v;return((v=a==null?void 0:a.value)==null?void 0:v.settings.height)||7}),d=se(()=>{var v;return((v=l==null?void 0:l.value)==null?void 0:v.collected)||[]}),m=se(()=>{var v;return((v=l==null?void 0:l.value)==null?void 0:v.verify)||[]}),y=se(()=>{var w;let v={};return u&&((w=u==null?void 0:u.value)==null||w.forEach(I=>{I.name!="moderator"&&(v[I.id]={collected:I.collected,color:I.color,name:I.name,icon:I.icon,points:I.points,flagEnd:I.flagEnd,member:I.members})})),v||{}}),b=async()=>{var v;if(r.value!==""){let w={name:"private-board",params:{boardUUID:e.boardUUID,teamCode:r.value}};const{data:I}=Yt(wt(n,"Boards",e.boardUUID,"Groups",r.value));I&&((v=I==null?void 0:I.value)==null?void 0:v.name)=="moderator"&&(w.name="moderator"),i.push(w)}},_=v=>{s.value=v,o.value=v};return(v,w)=>{const I=M_("fontAwesomeIcon");return te(),de(je,null,[D(u)?(te(),Hn(t4,{key:0,class:"scoreCard",groupsData:D(y)},null,8,["groupsData"])):ot("",!0),D(c)?(te(),de("main",n4,[(te(!0),de(je,null,Hr(D(c),F=>(te(),Hn(Xl,{key:F.id,tile:F,groupsData:D(y),selected:F==o.value,collected:D(d),verify:D(m),onClick:X=>_(F)},null,8,["tile","groupsData","selected","collected","verify","onClick"]))),128))])):ot("",!0),Y("aside",null,[D(l)?(te(),de("p",i4,[$e(I,{class:"icon",icon:["fas",D(l).icon]},null,8,["icon"]),Rt(" "+Bt(D(l).name),1)])):ot("",!0),D(l)?ot("",!0):(te(),de("form",{key:1,onSubmit:lr(b,["prevent"])},[Rt(" team code: "),Wi(Y("input",{type:"text",name:"teamId","onUpdate:modelValue":w[0]||(w[0]=F=>r.value=F)},null,512),[[Gi,r.value]])],40,r4)),$e(qL,{tileData:s.value,collected:D(d),verify:D(m),boardUUID:e.boardUUID,teamUUID:e.teamCode},null,8,["tileData","collected","verify","boardUUID","teamUUID"])])],64)}}},o4=mn(s4,[["__scopeId","data-v-130eb5ee"]]);const a4=t=>(us("data-v-87e34067"),t=t(),hs(),t),c4={key:0,class:"heading"},l4=a4(()=>Y("h2",null,"Notes",-1)),u4=["disabled"],h4={__name:"BoardView",setup(t){const e=gr(ti),n=Wl(),i=Tt(""),r=se(()=>n.params.teamCode),s=se(()=>n.params.boardUUID),{data:o}=Yt(wt(e,`Boards/${s.value}/Groups/${r.value}/`)),a=async()=>{i.value=o.value.notes,await Li(wt(e,`Boards/${s.value}/Groups/${r.value}/`),{notes:i.value})};return(c,l)=>(te(),de(je,null,[Y("section",null,[$e(o4,{boardUUID:D(s),teamCode:D(r)},null,8,["boardUUID","teamCode"])]),D(o)?(te(),de("div",c4,[l4,Y("button",{class:"btn",onClick:a,disabled:i.value==D(o).notes}," Save notes ",8,u4)])):ot("",!0),D(o)?Wi((te(),de("textarea",{key:1,name:"teamNotes",id:"teamNotes",rows:"10","onUpdate:modelValue":l[0]||(l[0]=u=>D(o).notes=u),onSubmit:l[1]||(l[1]=lr(()=>{},["prevent"]))},null,544)),[[Gi,D(o).notes]]):ot("",!0)],64))}},Qy=mn(h4,[["__scopeId","data-v-87e34067"]]);const Zl=t=>(us("data-v-63adaf33"),t=t(),hs(),t),f4=["onSubmit"],d4=Zl(()=>Y("br",null,null,-1)),p4=Zl(()=>Y("br",null,null,-1)),m4=Zl(()=>Y("br",null,null,-1)),g4=Zl(()=>Y("button",{type:"submit"},"Update Tile",-1)),y4={__name:"addTile",props:{boardUUID:{type:String,required:!0},tile:{type:Object,required:!0}},setup(t){const e=t,n=gr(ti),i=Tt({coordinate:e.tile.id,title:e.tile.title,description:e.tile.description,img:e.tile.img,points:e.tile.points}),r=Tt(!1),s=()=>{r.value=!r.value},o=async()=>{await QO(wt(n,"Boards",e.boardUUID,"Tiles",i.value.coordinate),{description:i.value.description,img:i.value.img,title:i.value.title,points:i.value.points})};return(a,c)=>(te(),de(je,null,[Y("div",{class:"tile",onClick:s},"edit"),Y("div",{class:jn(["modal",{open:r.value}])},[Y("form",{onSubmit:lr(o,["prevent"])},[Rt(" title: "),Wi(Y("input",{type:"text","onUpdate:modelValue":c[0]||(c[0]=l=>i.value.title=l),name:"title",id:"addtiletitle"},null,512),[[Gi,i.value.title]]),d4,Rt(" description: "),Wi(Y("input",{type:"text","onUpdate:modelValue":c[1]||(c[1]=l=>i.value.description=l),name:"description",id:"addtiletitle"},null,512),[[Gi,i.value.description]]),p4,Rt(" points: "),Wi(Y("input",{type:"text","onUpdate:modelValue":c[2]||(c[2]=l=>i.value.points=l),name:"type",id:"addtiletitle"},null,512),[[Gi,i.value.points]]),m4,g4],40,f4)],2)],64))}},_4=mn(y4,[["__scopeId","data-v-63adaf33"]]);const v4=t=>(us("data-v-710fc071"),t=t(),hs(),t),b4=["for"],w4=v4(()=>Y("br",null,null,-1)),E4=["id","checked","onClick"],T4={__name:"moderatorSidePannel",props:{tileData:{type:Object,required:!0},boardUUID:{type:String,required:!0},groups:{type:Object,required:!0}},setup(t){const e=t,n=gr(ti),i=se(()=>e.tileData),r=se(()=>e.groups.filter(o=>o.name!=="moderator")),s=({tile:o,group:a})=>{a.collected.includes(o.id)?(Li(wt(n,"Boards",e.boardUUID,"Groups",a.id),{collected:a.collected.filter(c=>c!=o.id)}),Li(wt(n,"Boards",e.boardUUID,"Groups",a.id),{points:a.points-o.points})):(Li(wt(n,"Boards",e.boardUUID,"Groups",a.id),{collected:[...a.collected,o.id]}),Li(wt(n,"Boards",e.boardUUID,"Groups",a.id),{points:a.points+o.points}),a.verify.includes(o.id)&&Li(wt(n,"Boards",e.boardUUID,"Groups",a.id),{verify:a.verify.filter(c=>c!=o.id)}))};return(o,a)=>e.tileData?(te(),de("div",{key:e.tileData.id},[$e(Xl,{tile:D(i),groupsData:e.groups},null,8,["tile","groupsData"]),Y("h2",null,"{ "+Bt(D(i).id.split("")[0])+" , "+Bt(D(i).id.split("")[1])+" }",1),Y("ul",null,[(te(!0),de(je,null,Hr(D(r),c=>(te(),de("li",{key:c.id+D(i).id,class:jn({checkThis:c.verify.includes(D(i).id)})},[Y("label",{for:c.id+D(i).id},[Rt(Bt(c.name)+" : "+Bt(c.verify.includes(D(i).id)),1),w4,Rt(" collected: "),(te(),de("input",{id:c.id+D(i).id,type:"checkbox",key:c.id+D(i).id,checked:c.collected.includes(D(i).id),onClick:lr(l=>s({tile:D(i),group:c}),["prevent"])},null,8,E4))],8,b4)],2))),128))]),$e(_4,{tile:D(i),boardUUID:e.boardUUID},null,8,["tile","boardUUID"])])):ot("",!0)}},I4=mn(T4,[["__scopeId","data-v-710fc071"]]);const C4={key:0,class:"bingo-board"},S4={key:0},A4={__name:"ModeratorBoard",props:{boardUUID:{type:String},teamCode:{type:String},groups:{type:Object}},setup(t){const e=t;Lf(f=>({"717b50ce":D(c),"0739a1b4":D(l)}));const n=gr(ti),i=Tt(""),r=Tt(""),s=Yt(wt(n,"Boards",e.boardUUID)),o=Yt(Ao(n,`Boards/${e.boardUUID}/Tiles`)),{data:a}=Yt(wt(n,`Boards/${e.boardUUID}/Groups/${e.teamCode}/`)),c=se(()=>{var f;return((f=s==null?void 0:s.value)==null?void 0:f.settings.width)||7}),l=se(()=>{var f;return((f=s==null?void 0:s.value)==null?void 0:f.settings.height)||7}),u=f=>{i.value=f,r.value=f},h=f=>{let d=!1;return e.groups&&e.groups.forEach(m=>{m.verify.includes(f.id)&&(d=!0)}),d};return(f,d)=>(te(),de(je,null,[D(o)?(te(),de("main",C4,[(te(!0),de(je,null,Hr(D(o),m=>(te(),Hn(Xl,{key:m.id,groupsData:e.groups,needVerifying:h(m),selected:m==r.value,tile:m,onClick:y=>u(m)},null,8,["groupsData","needVerifying","selected","tile","onClick"]))),128))])):ot("",!0),Y("aside",null,[D(a)?(te(),de("p",S4,Bt(D(a).name),1)):ot("",!0),(te(),Hn(I4,{tileData:i.value,key:i.value,boardUUID:e.boardUUID,groups:e.groups},null,8,["tileData","boardUUID","groups"]))])],64))}},k4=mn(A4,[["__scopeId","data-v-18610144"]]);const eu=t=>(us("data-v-be10d2b9"),t=t(),hs(),t),R4=["onSubmit"],N4=eu(()=>Y("br",null,null,-1)),x4=eu(()=>Y("br",null,null,-1)),D4=eu(()=>Y("br",null,null,-1)),O4=eu(()=>Y("button",{type:"submit",class:"btn"}," Go To Board ",-1)),P4={__name:"ModeratorView",setup(t){const e=gr(ti),n=Wl(),i=dp(),r=se(()=>n.params.teamCode),s=Tt(""),o=se(()=>n.params.boardUUID),{data:a}=Yt(wt(e,`Boards/${o.value}/Groups/${r.value}/`)),{data:c}=Yt(Ao(e,"Boards",o.value,"Groups")),l=async()=>{if(r.value!==""){let u={name:"private-board",params:{boardUUID:o.value,teamCode:s.value}};const{data:h}=Yt(wt(e,"Boards",o.value,"Groups",s.value));h&&h.value.name=="moderator"&&(u.name="moderator"),i.push(u)}};return(u,h)=>(te(),de("section",null,[D(a)&&D(a).name=="moderator"?(te(),Hn(k4,{key:0,boardUUID:D(o),teamCode:D(r),onVerifyTile:h[0]||(h[0]=f=>u.verifyTile(u.tile,u.groupid)),groups:D(c)},null,8,["boardUUID","teamCode","groups"])):ot("",!0),Y("aside",null,[D(a)&&D(a).name!="moderator"?(te(),de("form",{key:0,onSubmit:lr(l,["prevent"])},[Rt(" You are not a moderator, "),N4,Rt("please enter your code to go to the appropriate board for your team"),x4,D4,Rt(" team code: "),Wi(Y("input",{type:"text",name:"teamId","onUpdate:modelValue":h[1]||(h[1]=f=>s.value=f)},null,512),[[Gi,s.value]]),O4],40,R4)):ot("",!0)])]))}},M4=mn(P4,[["__scopeId","data-v-be10d2b9"]]);const L4=["onSubmit"],F4=["disabled"],U4={__name:"HomeView",setup(t){const e=Wl(),n=dp(),i=Tt(""),r=()=>{n.push({name:"overview",params:{boardUUID:i.value}})};return(s,o)=>(te(),de(je,null,[Y("form",{onSubmit:lr(r,["prevent"])},[Rt(" Enter your bingo key: "),Wi(Y("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=a=>i.value=a)},null,512),[[Gi,i.value]]),Y("button",{class:"btn",disabled:i.value==""},"Open Board",8,F4)],40,L4),(te(),Hn(D(mw),{key:D(e).fullPath}))],64))}},V4=mn(U4,[["__scopeId","data-v-53f9c0d8"]]),$4=MP({history:J2(),mode:"hash",routes:[{path:"/",name:"Home",component:V4},{path:"/b/:boardUUID",name:"overview",param:!0,component:Qy},{path:"/b/:boardUUID/team/:teamCode",name:"private-board",param:!0,component:Qy},{path:"/b/:boardUUID/m/:teamCode",name:"moderator",param:!0,component:M4}]});var B4={prefix:"fas",iconName:"spaghetti-monster-flying",icon:[640,512,["pastafarianism"],"f67b","M208 64a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 0c0 16.2-6 31.1-16 42.3l15.6 31.2c18.7-6 39.9-9.5 64.4-9.5s45.8 3.5 64.4 9.5L400 106.3C390 95.1 384 80.2 384 64c0-35.3 28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64c-1.7 0-3.4-.1-5.1-.2L427.8 158c21.1 13.6 37.7 30.2 51.4 46.4c7.1 8.3 13.5 16.6 19.3 24l1.4 1.8c6.3 8.1 11.6 14.8 16.7 20.4C527.3 262.3 532.7 264 536 264c2.5 0 4.3-.6 7.1-3.3c3.7-3.5 7.1-8.8 12.5-17.4l.6-.9c4.6-7.4 11-17.6 19.4-25.7c9.7-9.3 22.9-16.7 40.4-16.7c13.3 0 24 10.7 24 24s-10.7 24-24 24c-2.5 0-4.3 .6-7.1 3.3c-3.7 3.5-7.1 8.8-12.5 17.4l-.6 .9c-4.6 7.4-11 17.6-19.4 25.7c-9.7 9.3-22.9 16.7-40.4 16.7c-18.5 0-32.9-8.5-44.3-18.6c-3.1 4-6.6 8.3-10.5 12.7c1.4 4.3 2.8 8.5 4 12.5c.9 3 1.8 5.8 2.6 8.6c3 9.8 5.5 18.2 8.6 25.9c3.9 9.8 7.4 15.4 10.8 18.5c2.6 2.4 5.9 4.3 12.8 4.3c8.7 0 16.9-4.2 33.7-13.2c15-8 35.7-18.8 62.3-18.8c13.3 0 24 10.7 24 24s-10.7 24-24 24c-13.4 0-24.7 5.2-39.7 13.2c-1 .6-2.1 1.1-3.2 1.7C559.9 414 541.4 424 520 424c-18.4 0-33.6-6.1-45.5-17.2c-11.1-10.3-17.9-23.7-22.7-36c-3.6-9-6.7-19.1-9.5-28.5c-16.4 12.3-36.1 23.6-58.9 31.3c3.6 10.8 8.4 23.5 14.4 36.2c7.5 15.9 16.2 30.4 25.8 40.5C433 460.5 441.2 464 448 464c13.3 0 24 10.7 24 24s-10.7 24-24 24c-25.2 0-45-13.5-59.5-28.8c-14.5-15.4-25.7-34.9-34.2-53c-8-17-14.1-33.8-18.3-46.9c-5.2 .4-10.6 .6-16 .6s-10.8-.2-16-.6c-4.2 13-10.3 29.9-18.3 46.9c-8.5 18.1-19.8 37.6-34.2 53C237 498.5 217.2 512 192 512c-13.3 0-24-10.7-24-24s10.7-24 24-24c6.8 0 15-3.5 24.5-13.7c9.5-10.1 18.3-24.6 25.8-40.5c5.9-12.6 10.7-25.4 14.4-36.2c-22.8-7.7-42.5-19-58.9-31.3c-2.9 9.4-6 19.5-9.5 28.5c-4.8 12.2-11.6 25.6-22.7 36C153.6 417.9 138.4 424 120 424c-21.4 0-39.9-10-53.1-17.1l0 0c-1.1-.6-2.2-1.2-3.2-1.7c-15-8-26.3-13.2-39.7-13.2c-13.3 0-24-10.7-24-24s10.7-24 24-24c26.6 0 47.3 10.8 62.3 18.8c16.8 9 25 13.2 33.7 13.2c6.8 0 10.2-1.9 12.8-4.3c3.4-3.2 7-8.8 10.8-18.5c3-7.7 5.6-16.1 8.6-25.9c.8-2.7 1.7-5.6 2.6-8.6c1.2-4 2.6-8.2 4-12.5c-3.9-4.5-7.4-8.8-10.5-12.7C136.9 303.5 122.5 312 104 312c-17.5 0-30.7-7.4-40.4-16.7c-8.4-8.1-14.8-18.3-19.4-25.7l-.6-.9c-5.4-8.6-8.8-13.9-12.5-17.4c-2.8-2.7-4.6-3.3-7.1-3.3c-13.3 0-24-10.7-24-24s10.7-24 24-24c17.5 0 30.7 7.4 40.4 16.7c8.4 8.1 14.8 18.3 19.4 25.7l.6 .9c5.4 8.6 8.8 13.9 12.5 17.4c2.8 2.7 4.6 3.3 7.1 3.3c3.3 0 8.7-1.7 19.4-13.4c5.1-5.6 10.4-12.3 16.7-20.4l1.4-1.8c5.8-7.4 12.2-15.7 19.3-24c13.8-16.2 30.3-32.8 51.4-46.4l-15.1-30.2c-1.7 .1-3.4 .2-5.1 .2c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64zm208 0a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z"]},j4={prefix:"fas",iconName:"spoon",icon:[512,512,[129348,61873,"utensil-spoon"],"f2e5","M245.8 220.9c-14.5-17.6-21.8-39.2-21.8-60.8C224 80 320 0 416 0c53 0 96 43 96 96c0 96-80 192-160.2 192c-21.6 0-43.2-7.3-60.8-21.8L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L245.8 220.9z"]},z4={prefix:"fas",iconName:"paw",icon:[512,512,[],"f1b0","M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"]},H4={prefix:"fas",iconName:"crow",icon:[640,512,[],"f520","M456 0c-48.6 0-88 39.4-88 88v29.2L12.5 390.6c-14 10.8-16.6 30.9-5.9 44.9s30.9 16.6 44.9 5.9L126.1 384H259.2l46.6 113.1c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3L311.1 384H352c1.1 0 2.1 0 3.2 0l46.6 113.2c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3l-42-102C484.9 354.1 544 280 544 192V128v-8l80.5-20.1c8.6-2.1 13.8-10.8 11.6-19.4C629 52 603.4 32 574 32H523.9C507.7 12.5 483.3 0 456 0zm0 64a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},K4={prefix:"fas",iconName:"frog",icon:[576,512,[],"f52e","M368 32c41.7 0 75.9 31.8 79.7 72.5l85.6 26.3c25.4 7.8 42.8 31.3 42.8 57.9c0 21.8-11.7 41.9-30.7 52.7L400.8 323.5 493.3 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H480c-8.5 0-16.6-3.4-22.6-9.4L346.9 360.2c11.7-36 3.2-77.1-25.4-105.7c-40.6-40.6-106.3-40.6-146.9-.1L101 324.4c-6.4 6.1-6.7 16.2-.6 22.6s16.2 6.6 22.6 .6l73.8-70.2 .1-.1 .1-.1c3.5-3.5 7.3-6.6 11.3-9.2c27.9-18.5 65.9-15.4 90.5 9.2c24.7 24.7 27.7 62.9 9 90.9c-2.6 3.8-5.6 7.5-9 10.9L261.8 416H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-35.3 0-64-28.7-64-64C0 249.6 127 112.9 289.3 97.5C296.2 60.2 328.8 32 368 32zm0 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]},W4={prefix:"fas",iconName:"feather-pointed",icon:[512,512,["feather-alt"],"f56b","M278.5 215.6L23 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l74.8-74.8c7.4 4.6 15.3 8.2 23.8 10.5C200.3 452.8 270 454.5 338 409.4c12.2-8.1 5.8-25.4-8.8-25.4l-16.1 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l97.7-29.3c3.4-1 6.4-3.1 8.4-6.1c4.4-6.4 8.6-12.9 12.6-19.6c6.2-10.3-1.5-23-13.5-23l-38.6 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l80.9-24.3c4.6-1.4 8.4-4.8 10.2-9.3C494.5 163 507.8 86.1 511.9 36.8c.8-9.9-3-19.6-10-26.6s-16.7-10.8-26.6-10C391.5 7 228.5 40.5 137.4 131.6C57.3 211.7 56.7 302.3 71.3 356.4c2.1 7.9 12 9.6 17.8 3.8L253.6 195.8c6.2-6.2 16.4-6.2 22.6 0c5.4 5.4 6.1 13.6 2.2 19.8z"]},q4={prefix:"fas",iconName:"dove",icon:[512,512,[128330],"f4ba","M160.8 96.5c14 17 31 30.9 49.5 42.2c25.9 15.8 53.7 25.9 77.7 31.6V138.8C265.8 108.5 250 71.5 248.6 28c-.4-11.3-7.5-21.5-18.4-24.4c-7.6-2-15.8-.2-21 5.8c-13.3 15.4-32.7 44.6-48.4 87.2zM320 144v30.6l0 0v1.3l0 0 0 32.1c-60.8-5.1-185-43.8-219.3-157.2C97.4 40 87.9 32 76.6 32c-7.9 0-15.3 3.9-18.8 11C46.8 65.9 32 112.1 32 176c0 116.9 80.1 180.5 118.4 202.8L11.8 416.6C6.7 418 2.6 421.8 .9 426.8s-.8 10.6 2.3 14.8C21.7 466.2 77.3 512 160 512c3.6 0 7.2-1.2 10-3.5L245.6 448H320c88.4 0 160-71.6 160-160V128l29.9-44.9c1.3-2 2.1-4.4 2.1-6.8c0-6.8-5.5-12.3-12.3-12.3H400c-44.2 0-80 35.8-80 80zm80-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32z"]},G4={prefix:"fas",iconName:"rocket",icon:[512,512,[],"f135","M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"]},Y4={prefix:"fas",iconName:"disease",icon:[512,512,[],"f7fa","M236.4 61.4L227 75.5c-21.3 32-59.4 48.5-97.3 42.1l-59.6-9.9C33.4 101.6 0 129.9 .1 167.1c0 15.9 6.4 31.2 17.6 42.5l29.2 29.2c11 11 17.2 25.9 17.2 41.5c0 15.8-6.4 30.9-17.7 42L33.3 335.1C22.2 345.9 16 360.7 16 376.2c0 36.8 34.1 64.2 70.1 56.2l62.3-13.8c7.7-1.7 15.7-2.6 23.6-2.6h10c27.2 0 53.7 9.3 75 26.3L287.8 467c10.5 8.4 23.6 13 37 13c32.7 0 59.3-26.5 59.3-59.3l0-25.2c0-34.9 21.4-66.2 53.9-78.8l36.9-14.3c22.4-8.7 37.2-30.3 37.2-54.3c0-28.1-20.1-52.3-47.8-57.3l-28-5.1c-36.5-6.7-65.4-34.5-73.6-70.7l-7.1-31.5C348.9 53.4 322.1 32 291.3 32c-22 0-42.6 11-54.9 29.4zM160 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm0 80a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},Q4={prefix:"fas",iconName:"hippo",icon:[640,512,[129435],"f6ed","M407 47c9.4-9.4 24.6-9.4 33.9 0l17.2 17.2c1.9-.1 3.9-.2 5.8-.2h32c11.2 0 21.9 2.3 31.6 6.5L543 55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L564 101.9c7.6 12.2 12 26.7 12 42.1c0 10.2 7.4 18.8 16.7 23c27.9 12.5 47.3 40.5 47.3 73c0 26.2-12.6 49.4-32 64v32c0 8.8-7.2 16-16 16H560c-8.8 0-16-7.2-16-16V320H480v16c0 8.8-7.2 16-16 16H432c-8.8 0-16-7.2-16-16V318.4c-11.8-2.4-22.7-7.4-32-14.4c-1.5-1.1-2.9-2.3-4.3-3.5c-17-14.7-27.7-36.4-27.7-60.5c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 44.7 26.2 83.2 64 101.2V352c0 17.7 14.3 32 32 32h32v64c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V372c-19.8 7.7-41.4 12-64 12s-44.2-4.3-64-12v76c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V329.1L45.9 369.7c-5.4 12.1-19.6 17.6-31.7 12.2S-3.3 362.4 2.1 350.3L24 300.9c5.3-11.9 8-24.7 8-37.7C32 155.7 117.2 68 223.8 64.1l.2-.1h7.2H256h32c41.7 0 83.4 12.1 117.2 25.7c1.7-1.8 3.5-3.6 5.3-5.2L407 81c-9.4-9.4-9.4-24.6 0-33.9zm73 185a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm88 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM480 144a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"]};Mn.add(G4);Mn.add(B4);Mn.add(z4);Mn.add(Q4);Mn.add(H4);Mn.add(K4);Mn.add(W4);Mn.add(Y4);Mn.add(q4);Mn.add(j4);const la=dI(UP);la.use(yI());la.use($4);la.use(O2,{firebaseApp:ti});la.component("font-awesome-icon",Hc);la.mount("#app");
