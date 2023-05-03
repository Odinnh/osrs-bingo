(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function yf(t,e){const n=Object.create(null),i=t.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function Mo(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=tt(i)?Xw(i):Mo(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(tt(t))return t;if($e(t))return t}}const Gw=/;(?![^(]*\))/g,Yw=/:([^]+)/,Qw=/\/\*.*?\*\//gs;function Xw(t){const e={};return t.replace(Qw,"").split(Gw).forEach(n=>{if(n){const i=n.split(Yw);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Wn(t){let e="";if(tt(t))e=t;else if(ie(t))for(let n=0;n<t.length;n++){const i=Wn(t[n]);i&&(e+=i+" ")}else if($e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Jw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Zw=yf(Jw);function Zy(t){return!!t||t===""}const Lt=t=>tt(t)?t:t==null?"":ie(t)||$e(t)&&(t.toString===i_||!oe(t.toString))?JSON.stringify(t,e_,2):String(t),e_=(t,e)=>e&&e.__v_isRef?e_(t,e.value):Mr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:t_(e)?{[`Set(${e.size})`]:[...e.values()]}:$e(e)&&!ie(e)&&!r_(e)?String(e):e,Ne={},Pr=[],hn=()=>{},eE=()=>!1,tE=/^on[^a-z]/,Wl=t=>tE.test(t),_f=t=>t.startsWith("onUpdate:"),xt=Object.assign,vf=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},nE=Object.prototype.hasOwnProperty,ye=(t,e)=>nE.call(t,e),ie=Array.isArray,Mr=t=>ql(t)==="[object Map]",t_=t=>ql(t)==="[object Set]",oe=t=>typeof t=="function",tt=t=>typeof t=="string",bf=t=>typeof t=="symbol",$e=t=>t!==null&&typeof t=="object",n_=t=>$e(t)&&oe(t.then)&&oe(t.catch),i_=Object.prototype.toString,ql=t=>i_.call(t),iE=t=>ql(t).slice(8,-1),r_=t=>ql(t)==="[object Object]",wf=t=>tt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,$a=yf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Gl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},rE=/-(\w)/g,An=Gl(t=>t.replace(rE,(e,n)=>n?n.toUpperCase():"")),sE=/\B([A-Z])/g,us=Gl(t=>t.replace(sE,"-$1").toLowerCase()),Yl=Gl(t=>t.charAt(0).toUpperCase()+t.slice(1)),nu=Gl(t=>t?`on${Yl(t)}`:""),so=(t,e)=>!Object.is(t,e),Ba=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Za=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},zu=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Op;const oE=()=>Op||(Op=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Bt;class s_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Bt,!e&&Bt&&(this.index=(Bt.scopes||(Bt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Bt;try{return Bt=this,e()}finally{Bt=n}}}on(){Bt=this}off(){Bt=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function aE(t){return new s_(t)}function lE(t,e=Bt){e&&e.active&&e.effects.push(t)}function o_(){return Bt}function cE(t){Bt&&Bt.cleanups.push(t)}const Ef=t=>{const e=new Set(t);return e.w=0,e.n=0,e},a_=t=>(t.w&_i)>0,l_=t=>(t.n&_i)>0,uE=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=_i},hE=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];a_(r)&&!l_(r)?r.delete(t):e[n++]=r,r.w&=~_i,r.n&=~_i}e.length=n}},Hu=new WeakMap;let Ms=0,_i=1;const Ku=30;let rn;const Qi=Symbol(""),Wu=Symbol("");class Tf{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,lE(this,i)}run(){if(!this.active)return this.fn();let e=rn,n=fi;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=rn,rn=this,fi=!0,_i=1<<++Ms,Ms<=Ku?uE(this):Pp(this),this.fn()}finally{Ms<=Ku&&hE(this),_i=1<<--Ms,rn=this.parent,fi=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){rn===this?this.deferStop=!0:this.active&&(Pp(this),this.onStop&&this.onStop(),this.active=!1)}}function Pp(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let fi=!0;const c_=[];function hs(){c_.push(fi),fi=!1}function fs(){const t=c_.pop();fi=t===void 0?!0:t}function Ut(t,e,n){if(fi&&rn){let i=Hu.get(t);i||Hu.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=Ef()),u_(r)}}function u_(t,e){let n=!1;Ms<=Ku?l_(t)||(t.n|=_i,n=!a_(t)):n=!t.has(rn),n&&(t.add(rn),rn.deps.push(t))}function qn(t,e,n,i,r,s){const o=Hu.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ie(t)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ie(t)?wf(n)&&a.push(o.get("length")):(a.push(o.get(Qi)),Mr(t)&&a.push(o.get(Wu)));break;case"delete":ie(t)||(a.push(o.get(Qi)),Mr(t)&&a.push(o.get(Wu)));break;case"set":Mr(t)&&a.push(o.get(Qi));break}if(a.length===1)a[0]&&qu(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);qu(Ef(l))}}function qu(t,e){const n=ie(t)?t:[...t];for(const i of n)i.computed&&Mp(i);for(const i of n)i.computed||Mp(i)}function Mp(t,e){(t!==rn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const fE=yf("__proto__,__v_isRef,__isVue"),h_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(bf)),dE=If(),pE=If(!1,!0),mE=If(!0),Lp=gE();function gE(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=ve(this);for(let s=0,o=this.length;s<o;s++)Ut(i,"get",s+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(ve)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){hs();const i=ve(this)[e].apply(this,n);return fs(),i}}),t}function yE(t){const e=ve(this);return Ut(e,"has",t),e.hasOwnProperty(t)}function If(t=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(t?e?OE:g_:e?m_:p_).get(i))return i;const o=ie(i);if(!t){if(o&&ye(Lp,r))return Reflect.get(Lp,r,s);if(r==="hasOwnProperty")return yE}const a=Reflect.get(i,r,s);return(bf(r)?h_.has(r):fE(r))||(t||Ut(i,"get",r),e)?a:dt(a)?o&&wf(r)?a:a.value:$e(a)?t?y_(a):Lo(a):a}}const _E=f_(),vE=f_(!0);function f_(t=!1){return function(n,i,r,s){let o=n[i];if(Wr(o)&&dt(o)&&!dt(r))return!1;if(!t&&(!el(r)&&!Wr(r)&&(o=ve(o),r=ve(r)),!ie(n)&&dt(o)&&!dt(r)))return o.value=r,!0;const a=ie(n)&&wf(i)?Number(i)<n.length:ye(n,i),l=Reflect.set(n,i,r,s);return n===ve(s)&&(a?so(r,o)&&qn(n,"set",i,r):qn(n,"add",i,r)),l}}function bE(t,e){const n=ye(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&qn(t,"delete",e,void 0),i}function wE(t,e){const n=Reflect.has(t,e);return(!bf(e)||!h_.has(e))&&Ut(t,"has",e),n}function EE(t){return Ut(t,"iterate",ie(t)?"length":Qi),Reflect.ownKeys(t)}const d_={get:dE,set:_E,deleteProperty:bE,has:wE,ownKeys:EE},TE={get:mE,set(t,e){return!0},deleteProperty(t,e){return!0}},IE=xt({},d_,{get:pE,set:vE}),Cf=t=>t,Ql=t=>Reflect.getPrototypeOf(t);function fa(t,e,n=!1,i=!1){t=t.__v_raw;const r=ve(t),s=ve(e);n||(e!==s&&Ut(r,"get",e),Ut(r,"get",s));const{has:o}=Ql(r),a=i?Cf:n?Rf:oo;if(o.call(r,e))return a(t.get(e));if(o.call(r,s))return a(t.get(s));t!==r&&t.get(e)}function da(t,e=!1){const n=this.__v_raw,i=ve(n),r=ve(t);return e||(t!==r&&Ut(i,"has",t),Ut(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function pa(t,e=!1){return t=t.__v_raw,!e&&Ut(ve(t),"iterate",Qi),Reflect.get(t,"size",t)}function Fp(t){t=ve(t);const e=ve(this);return Ql(e).has.call(e,t)||(e.add(t),qn(e,"add",t,t)),this}function Up(t,e){e=ve(e);const n=ve(this),{has:i,get:r}=Ql(n);let s=i.call(n,t);s||(t=ve(t),s=i.call(n,t));const o=r.call(n,t);return n.set(t,e),s?so(e,o)&&qn(n,"set",t,e):qn(n,"add",t,e),this}function Vp(t){const e=ve(this),{has:n,get:i}=Ql(e);let r=n.call(e,t);r||(t=ve(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&qn(e,"delete",t,void 0),s}function $p(){const t=ve(this),e=t.size!==0,n=t.clear();return e&&qn(t,"clear",void 0,void 0),n}function ma(t,e){return function(i,r){const s=this,o=s.__v_raw,a=ve(o),l=e?Cf:t?Rf:oo;return!t&&Ut(a,"iterate",Qi),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function ga(t,e,n){return function(...i){const r=this.__v_raw,s=ve(r),o=Mr(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?Cf:e?Rf:oo;return!e&&Ut(s,"iterate",l?Wu:Qi),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function oi(t){return function(...e){return t==="delete"?!1:this}}function CE(){const t={get(s){return fa(this,s)},get size(){return pa(this)},has:da,add:Fp,set:Up,delete:Vp,clear:$p,forEach:ma(!1,!1)},e={get(s){return fa(this,s,!1,!0)},get size(){return pa(this)},has:da,add:Fp,set:Up,delete:Vp,clear:$p,forEach:ma(!1,!0)},n={get(s){return fa(this,s,!0)},get size(){return pa(this,!0)},has(s){return da.call(this,s,!0)},add:oi("add"),set:oi("set"),delete:oi("delete"),clear:oi("clear"),forEach:ma(!0,!1)},i={get(s){return fa(this,s,!0,!0)},get size(){return pa(this,!0)},has(s){return da.call(this,s,!0)},add:oi("add"),set:oi("set"),delete:oi("delete"),clear:oi("clear"),forEach:ma(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=ga(s,!1,!1),n[s]=ga(s,!0,!1),e[s]=ga(s,!1,!0),i[s]=ga(s,!0,!0)}),[t,n,e,i]}const[SE,AE,kE,RE]=CE();function Sf(t,e){const n=e?t?RE:kE:t?AE:SE;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(ye(n,r)&&r in i?n:i,r,s)}const NE={get:Sf(!1,!1)},xE={get:Sf(!1,!0)},DE={get:Sf(!0,!1)},p_=new WeakMap,m_=new WeakMap,g_=new WeakMap,OE=new WeakMap;function PE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ME(t){return t.__v_skip||!Object.isExtensible(t)?0:PE(iE(t))}function Lo(t){return Wr(t)?t:Af(t,!1,d_,NE,p_)}function LE(t){return Af(t,!1,IE,xE,m_)}function y_(t){return Af(t,!0,TE,DE,g_)}function Af(t,e,n,i,r){if(!$e(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=ME(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function Lr(t){return Wr(t)?Lr(t.__v_raw):!!(t&&t.__v_isReactive)}function Wr(t){return!!(t&&t.__v_isReadonly)}function el(t){return!!(t&&t.__v_isShallow)}function __(t){return Lr(t)||Wr(t)}function ve(t){const e=t&&t.__v_raw;return e?ve(e):t}function kf(t){return Za(t,"__v_skip",!0),t}const oo=t=>$e(t)?Lo(t):t,Rf=t=>$e(t)?y_(t):t;function v_(t){fi&&rn&&(t=ve(t),u_(t.dep||(t.dep=Ef())))}function b_(t,e){t=ve(t);const n=t.dep;n&&qu(n)}function dt(t){return!!(t&&t.__v_isRef===!0)}function pt(t){return E_(t,!1)}function w_(t){return E_(t,!0)}function E_(t,e){return dt(t)?t:new FE(t,e)}class FE{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ve(e),this._value=n?e:oo(e)}get value(){return v_(this),this._value}set value(e){const n=this.__v_isShallow||el(e)||Wr(e);e=n?e:ve(e),so(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:oo(e),b_(this))}}function x(t){return dt(t)?t.value:t}const UE={get:(t,e,n)=>x(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return dt(r)&&!dt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function T_(t){return Lr(t)?t:new Proxy(t,UE)}var I_;class VE{constructor(e,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[I_]=!1,this._dirty=!0,this.effect=new Tf(e,()=>{this._dirty||(this._dirty=!0,b_(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=ve(this);return v_(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}I_="__v_isReadonly";function $E(t,e,n=!1){let i,r;const s=oe(t);return s?(i=t,r=hn):(i=t.get,r=t.set),new VE(i,r,s||!r,n)}function di(t,e,n,i){let r;try{r=i?t(...i):t()}catch(s){Xl(s,e,n)}return r}function fn(t,e,n,i){if(oe(t)){const s=di(t,e,n,i);return s&&n_(s)&&s.catch(o=>{Xl(o,e,n)}),s}const r=[];for(let s=0;s<t.length;s++)r.push(fn(t[s],e,n,i));return r}function Xl(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){di(l,null,10,[t,o,a]);return}}BE(t,n,r,i)}function BE(t,e,n,i=!0){console.error(t)}let ao=!1,Gu=!1;const Et=[];let wn=0;const Fr=[];let Vn=null,Vi=0;const C_=Promise.resolve();let Nf=null;function S_(t){const e=Nf||C_;return t?e.then(this?t.bind(this):t):e}function jE(t){let e=wn+1,n=Et.length;for(;e<n;){const i=e+n>>>1;lo(Et[i])<t?e=i+1:n=i}return e}function xf(t){(!Et.length||!Et.includes(t,ao&&t.allowRecurse?wn+1:wn))&&(t.id==null?Et.push(t):Et.splice(jE(t.id),0,t),A_())}function A_(){!ao&&!Gu&&(Gu=!0,Nf=C_.then(R_))}function zE(t){const e=Et.indexOf(t);e>wn&&Et.splice(e,1)}function HE(t){ie(t)?Fr.push(...t):(!Vn||!Vn.includes(t,t.allowRecurse?Vi+1:Vi))&&Fr.push(t),A_()}function Bp(t,e=ao?wn+1:0){for(;e<Et.length;e++){const n=Et[e];n&&n.pre&&(Et.splice(e,1),e--,n())}}function k_(t){if(Fr.length){const e=[...new Set(Fr)];if(Fr.length=0,Vn){Vn.push(...e);return}for(Vn=e,Vn.sort((n,i)=>lo(n)-lo(i)),Vi=0;Vi<Vn.length;Vi++)Vn[Vi]();Vn=null,Vi=0}}const lo=t=>t.id==null?1/0:t.id,KE=(t,e)=>{const n=lo(t)-lo(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function R_(t){Gu=!1,ao=!0,Et.sort(KE);const e=hn;try{for(wn=0;wn<Et.length;wn++){const n=Et[wn];n&&n.active!==!1&&di(n,null,14)}}finally{wn=0,Et.length=0,k_(),ao=!1,Nf=null,(Et.length||Fr.length)&&R_()}}function WE(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Ne;let r=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=i[u]||Ne;f&&(r=n.map(d=>tt(d)?d.trim():d)),h&&(r=n.map(zu))}let a,l=i[a=nu(e)]||i[a=nu(An(e))];!l&&s&&(l=i[a=nu(us(e))]),l&&fn(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,fn(c,t,6,r)}}function N_(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!oe(t)){const l=c=>{const u=N_(c,e,!0);u&&(a=!0,xt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?($e(t)&&i.set(t,null),null):(ie(s)?s.forEach(l=>o[l]=null):xt(o,s),$e(t)&&i.set(t,o),o)}function Jl(t,e){return!t||!Wl(e)?!1:(e=e.slice(2).replace(/Once$/,""),ye(t,e[0].toLowerCase()+e.slice(1))||ye(t,us(e))||ye(t,e))}let zt=null,Zl=null;function tl(t){const e=zt;return zt=t,Zl=t&&t.type.__scopeId||null,e}function fr(t){Zl=t}function dr(){Zl=null}function qE(t,e=zt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Qp(-1);const s=tl(e);let o;try{o=t(...r)}finally{tl(s),i._d&&Qp(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function iu(t){const{type:e,vnode:n,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:m,inheritAttrs:y}=t;let b,_;const w=tl(t);try{if(n.shapeFlag&4){const C=r||i;b=bn(u.call(C,C,h,s,d,f,m)),_=l}else{const C=e;b=bn(C.length>1?C(s,{attrs:l,slots:a,emit:c}):C(s,null)),_=e.props?l:GE(l)}}catch(C){zs.length=0,Xl(C,t,1),b=He(nr)}let v=b;if(_&&y!==!1){const C=Object.keys(_),{shapeFlag:O}=v;C.length&&O&7&&(o&&C.some(_f)&&(_=YE(_,o)),v=qr(v,_))}return n.dirs&&(v=qr(v),v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&(v.transition=n.transition),b=v,tl(w),b}const GE=t=>{let e;for(const n in t)(n==="class"||n==="style"||Wl(n))&&((e||(e={}))[n]=t[n]);return e},YE=(t,e)=>{const n={};for(const i in t)(!_f(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function QE(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?jp(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!Jl(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?jp(i,o,c):!0:!!o;return!1}function jp(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!Jl(n,s))return!0}return!1}function XE({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const JE=t=>t.__isSuspense;function ZE(t,e){e&&e.pendingBranch?ie(t)?e.effects.push(...t):e.effects.push(t):HE(t)}function ja(t,e){if(qe){let n=qe.provides;const i=qe.parent&&qe.parent.provides;i===n&&(n=qe.provides=Object.create(i)),n[t]=e}}function Kt(t,e,n=!1){const i=qe||zt;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&oe(e)?e.call(i.proxy):e}}function eT(t,e){return Df(t,null,{flush:"post"})}const ya={};function Ur(t,e,n){return Df(t,e,n)}function Df(t,e,{immediate:n,deep:i,flush:r,onTrack:s,onTrigger:o}=Ne){const a=o_()===(qe==null?void 0:qe.scope)?qe:null;let l,c=!1,u=!1;if(dt(t)?(l=()=>t.value,c=el(t)):Lr(t)?(l=()=>t,i=!0):ie(t)?(u=!0,c=t.some(v=>Lr(v)||el(v)),l=()=>t.map(v=>{if(dt(v))return v.value;if(Lr(v))return ji(v);if(oe(v))return di(v,a,2)})):oe(t)?e?l=()=>di(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),fn(t,a,3,[f])}:l=hn,e&&i){const v=l;l=()=>ji(v())}let h,f=v=>{h=_.onStop=()=>{di(v,a,4)}},d;if(uo)if(f=hn,e?n&&fn(e,a,3,[l(),u?[]:void 0,f]):l(),r==="sync"){const v=HT();d=v.__watcherHandles||(v.__watcherHandles=[])}else return hn;let m=u?new Array(t.length).fill(ya):ya;const y=()=>{if(_.active)if(e){const v=_.run();(i||c||(u?v.some((C,O)=>so(C,m[O])):so(v,m)))&&(h&&h(),fn(e,a,3,[v,m===ya?void 0:u&&m[0]===ya?[]:m,f]),m=v)}else _.run()};y.allowRecurse=!!e;let b;r==="sync"?b=y:r==="post"?b=()=>Pt(y,a&&a.suspense):(y.pre=!0,a&&(y.id=a.uid),b=()=>xf(y));const _=new Tf(l,b);e?n?y():m=_.run():r==="post"?Pt(_.run.bind(_),a&&a.suspense):_.run();const w=()=>{_.stop(),a&&a.scope&&vf(a.scope.effects,_)};return d&&d.push(w),w}function tT(t,e,n){const i=this.proxy,r=tt(t)?t.includes(".")?x_(i,t):()=>i[t]:t.bind(i,i);let s;oe(e)?s=e:(s=e.handler,n=e);const o=qe;Gr(this);const a=Df(r,s.bind(i),n);return o?Gr(o):Xi(),a}function x_(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function ji(t,e){if(!$e(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),dt(t))ji(t.value,e);else if(ie(t))for(let n=0;n<t.length;n++)ji(t[n],e);else if(t_(t)||Mr(t))t.forEach(n=>{ji(n,e)});else if(r_(t))for(const n in t)ji(t[n],e);return t}function Fo(t){return oe(t)?{setup:t,name:t.name}:t}const za=t=>!!t.type.__asyncLoader,D_=t=>t.type.__isKeepAlive;function nT(t,e){O_(t,"a",e)}function iT(t,e){O_(t,"da",e)}function O_(t,e,n=qe){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ec(e,i,n),n){let r=n.parent;for(;r&&r.parent;)D_(r.parent.vnode)&&rT(i,e,n,r),r=r.parent}}function rT(t,e,n,i){const r=ec(e,t,i,!0);Of(()=>{vf(i[e],r)},n)}function ec(t,e,n=qe,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;hs(),Gr(n);const a=fn(e,n,t,o);return Xi(),fs(),a});return i?r.unshift(s):r.push(s),s}}const ni=t=>(e,n=qe)=>(!uo||t==="sp")&&ec(t,(...i)=>e(...i),n),sT=ni("bm"),P_=ni("m"),oT=ni("bu"),aT=ni("u"),lT=ni("bum"),Of=ni("um"),M_=ni("sp"),cT=ni("rtg"),uT=ni("rtc");function hT(t,e=qe){ec("ec",t,e)}function $n(t,e){const n=zt;if(n===null)return t;const i=rc(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=Ne]=e[s];o&&(oe(o)&&(o={mounted:o,updated:o}),o.deep&&ji(a),r.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Pi(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(hs(),fn(l,n,8,[t.el,a,t,e]),fs())}}const L_="components";function F_(t,e){return dT(L_,t,!0,e)||t}const fT=Symbol();function dT(t,e,n=!0,i=!1){const r=zt||qe;if(r){const s=r.type;if(t===L_){const a=jT(s,!1);if(a&&(a===e||a===An(e)||a===Yl(An(e))))return s}const o=zp(r[t]||s[t],e)||zp(r.appContext[t],e);return!o&&i?s:o}}function zp(t,e){return t&&(t[e]||t[An(e)]||t[Yl(An(e))])}function tr(t,e,n,i){let r;const s=n&&n[i];if(ie(t)||tt(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if($e(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,s&&s[a])}}else r=[];return n&&(n[i]=r),r}const Yu=t=>t?G_(t)?rc(t)||t.proxy:Yu(t.parent):null,js=xt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Yu(t.parent),$root:t=>Yu(t.root),$emit:t=>t.emit,$options:t=>Pf(t),$forceUpdate:t=>t.f||(t.f=()=>xf(t.update)),$nextTick:t=>t.n||(t.n=S_.bind(t.proxy)),$watch:t=>tT.bind(t)}),ru=(t,e)=>t!==Ne&&!t.__isScriptSetup&&ye(t,e),pT={get({_:t},e){const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(ru(i,e))return o[e]=1,i[e];if(r!==Ne&&ye(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&ye(c,e))return o[e]=3,s[e];if(n!==Ne&&ye(n,e))return o[e]=4,n[e];Qu&&(o[e]=0)}}const u=js[e];let h,f;if(u)return e==="$attrs"&&Ut(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ne&&ye(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,ye(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return ru(r,e)?(r[e]=n,!0):i!==Ne&&ye(i,e)?(i[e]=n,!0):ye(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==Ne&&ye(t,o)||ru(e,o)||(a=s[0])&&ye(a,o)||ye(i,o)||ye(js,o)||ye(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ye(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Qu=!0;function mT(t){const e=Pf(t),n=t.proxy,i=t.ctx;Qu=!1,e.beforeCreate&&Hp(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:m,activated:y,deactivated:b,beforeDestroy:_,beforeUnmount:w,destroyed:v,unmounted:C,render:O,renderTracked:X,renderTriggered:se,errorCaptured:fe,serverPrefetch:Fe,expose:Be,inheritAttrs:Fn,components:yn,directives:br,filters:Di}=e;if(c&&gT(c,i,null,t.appContext.config.unwrapInjectedRef),o)for(const Ae in o){const Ie=o[Ae];oe(Ie)&&(i[Ae]=Ie.bind(n))}if(r){const Ae=r.call(n,n);$e(Ae)&&(t.data=Lo(Ae))}if(Qu=!0,s)for(const Ae in s){const Ie=s[Ae],en=oe(Ie)?Ie.bind(n,n):oe(Ie.get)?Ie.get.bind(n,n):hn,Oi=!oe(Ie)&&oe(Ie.set)?Ie.set.bind(n):hn,tn=ae({get:en,set:Oi});Object.defineProperty(i,Ae,{enumerable:!0,configurable:!0,get:()=>tn.value,set:Dt=>tn.value=Dt})}if(a)for(const Ae in a)U_(a[Ae],i,n,Ae);if(l){const Ae=oe(l)?l.call(n):l;Reflect.ownKeys(Ae).forEach(Ie=>{ja(Ie,Ae[Ie])})}u&&Hp(u,t,"c");function Ge(Ae,Ie){ie(Ie)?Ie.forEach(en=>Ae(en.bind(n))):Ie&&Ae(Ie.bind(n))}if(Ge(sT,h),Ge(P_,f),Ge(oT,d),Ge(aT,m),Ge(nT,y),Ge(iT,b),Ge(hT,fe),Ge(uT,X),Ge(cT,se),Ge(lT,w),Ge(Of,C),Ge(M_,Fe),ie(Be))if(Be.length){const Ae=t.exposed||(t.exposed={});Be.forEach(Ie=>{Object.defineProperty(Ae,Ie,{get:()=>n[Ie],set:en=>n[Ie]=en})})}else t.exposed||(t.exposed={});O&&t.render===hn&&(t.render=O),Fn!=null&&(t.inheritAttrs=Fn),yn&&(t.components=yn),br&&(t.directives=br)}function gT(t,e,n=hn,i=!1){ie(t)&&(t=Xu(t));for(const r in t){const s=t[r];let o;$e(s)?"default"in s?o=Kt(s.from||r,s.default,!0):o=Kt(s.from||r):o=Kt(s),dt(o)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Hp(t,e,n){fn(ie(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function U_(t,e,n,i){const r=i.includes(".")?x_(n,i):()=>n[i];if(tt(t)){const s=e[t];oe(s)&&Ur(r,s)}else if(oe(t))Ur(r,t.bind(n));else if($e(t))if(ie(t))t.forEach(s=>U_(s,e,n,i));else{const s=oe(t.handler)?t.handler.bind(n):e[t.handler];oe(s)&&Ur(r,s,t)}}function Pf(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>nl(l,c,o,!0)),nl(l,e,o)),$e(e)&&s.set(e,l),l}function nl(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&nl(t,s,n,!0),r&&r.forEach(o=>nl(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=yT[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const yT={data:Kp,props:Li,emits:Li,methods:Li,computed:Li,beforeCreate:kt,created:kt,beforeMount:kt,mounted:kt,beforeUpdate:kt,updated:kt,beforeDestroy:kt,beforeUnmount:kt,destroyed:kt,unmounted:kt,activated:kt,deactivated:kt,errorCaptured:kt,serverPrefetch:kt,components:Li,directives:Li,watch:vT,provide:Kp,inject:_T};function Kp(t,e){return e?t?function(){return xt(oe(t)?t.call(this,this):t,oe(e)?e.call(this,this):e)}:e:t}function _T(t,e){return Li(Xu(t),Xu(e))}function Xu(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function kt(t,e){return t?[...new Set([].concat(t,e))]:e}function Li(t,e){return t?xt(xt(Object.create(null),t),e):e}function vT(t,e){if(!t)return e;if(!e)return t;const n=xt(Object.create(null),t);for(const i in e)n[i]=kt(t[i],e[i]);return n}function bT(t,e,n,i=!1){const r={},s={};Za(s,nc,1),t.propsDefaults=Object.create(null),V_(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:LE(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function wT(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=ve(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Jl(t.emitsOptions,f))continue;const d=e[f];if(l)if(ye(s,f))d!==s[f]&&(s[f]=d,c=!0);else{const m=An(f);r[m]=Ju(l,a,m,d,t,!1)}else d!==s[f]&&(s[f]=d,c=!0)}}}else{V_(t,e,r,s)&&(c=!0);let u;for(const h in a)(!e||!ye(e,h)&&((u=us(h))===h||!ye(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Ju(l,a,h,void 0,t,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!ye(e,h))&&(delete s[h],c=!0)}c&&qn(t,"set","$attrs")}function V_(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if($a(l))continue;const c=e[l];let u;r&&ye(r,u=An(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:Jl(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=ve(n),c=a||Ne;for(let u=0;u<s.length;u++){const h=s[u];n[h]=Ju(r,l,h,c[h],t,!ye(c,h))}}return o}function Ju(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=ye(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&oe(l)){const{propsDefaults:c}=r;n in c?i=c[n]:(Gr(r),i=c[n]=l.call(null,e),Xi())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===us(n))&&(i=!0))}return i}function $_(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!oe(t)){const u=h=>{l=!0;const[f,d]=$_(h,e,!0);xt(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return $e(t)&&i.set(t,Pr),Pr;if(ie(s))for(let u=0;u<s.length;u++){const h=An(s[u]);Wp(h)&&(o[h]=Ne)}else if(s)for(const u in s){const h=An(u);if(Wp(h)){const f=s[u],d=o[h]=ie(f)||oe(f)?{type:f}:Object.assign({},f);if(d){const m=Yp(Boolean,d.type),y=Yp(String,d.type);d[0]=m>-1,d[1]=y<0||m<y,(m>-1||ye(d,"default"))&&a.push(h)}}}const c=[o,a];return $e(t)&&i.set(t,c),c}function Wp(t){return t[0]!=="$"}function qp(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Gp(t,e){return qp(t)===qp(e)}function Yp(t,e){return ie(e)?e.findIndex(n=>Gp(n,t)):oe(e)&&Gp(e,t)?0:-1}const B_=t=>t[0]==="_"||t==="$stable",Mf=t=>ie(t)?t.map(bn):[bn(t)],ET=(t,e,n)=>{if(e._n)return e;const i=qE((...r)=>Mf(e(...r)),n);return i._c=!1,i},j_=(t,e,n)=>{const i=t._ctx;for(const r in t){if(B_(r))continue;const s=t[r];if(oe(s))e[r]=ET(r,s,i);else if(s!=null){const o=Mf(s);e[r]=()=>o}}},z_=(t,e)=>{const n=Mf(e);t.slots.default=()=>n},TT=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ve(e),Za(e,"_",n)):j_(e,t.slots={})}else t.slots={},e&&z_(t,e);Za(t.slots,nc,1)},IT=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=Ne;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(xt(r,e),!n&&a===1&&delete r._):(s=!e.$stable,j_(e,r)),o=e}else e&&(z_(t,e),o={default:1});if(s)for(const a in r)!B_(a)&&!(a in o)&&delete r[a]};function H_(){return{app:null,config:{isNativeTag:eE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let CT=0;function ST(t,e){return function(i,r=null){oe(i)||(i=Object.assign({},i)),r!=null&&!$e(r)&&(r=null);const s=H_(),o=new Set;let a=!1;const l=s.app={_uid:CT++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:KT,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&oe(c.install)?(o.add(c),c.install(l,...u)):oe(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const f=He(i,r);return f.appContext=s,u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,rc(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Zu(t,e,n,i,r=!1){if(ie(t)){t.forEach((f,d)=>Zu(f,e&&(ie(e)?e[d]:e),n,i,r));return}if(za(i)&&!r)return;const s=i.shapeFlag&4?rc(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Ne?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(tt(c)?(u[c]=null,ye(h,c)&&(h[c]=null)):dt(c)&&(c.value=null)),oe(l))di(l,a,12,[o,u]);else{const f=tt(l),d=dt(l);if(f||d){const m=()=>{if(t.f){const y=f?ye(h,l)?h[l]:u[l]:l.value;r?ie(y)&&vf(y,s):ie(y)?y.includes(s)||y.push(s):f?(u[l]=[s],ye(h,l)&&(h[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,ye(h,l)&&(h[l]=o)):d&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Pt(m,n)):m()}}}const Pt=ZE;function AT(t){return kT(t)}function kT(t,e){const n=oE();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=hn,insertStaticContent:m}=t,y=(p,g,E,T=null,S=null,D=null,F=!1,N=null,P=!!g.dynamicChildren)=>{if(p===g)return;p&&!ks(p,g)&&(T=L(p),Dt(p,S,D,!0),p=null),g.patchFlag===-2&&(P=!1,g.dynamicChildren=null);const{type:k,ref:K,shapeFlag:$}=g;switch(k){case tc:b(p,g,E,T);break;case nr:_(p,g,E,T);break;case Ha:p==null&&w(g,E,T,F);break;case Oe:yn(p,g,E,T,S,D,F,N,P);break;default:$&1?O(p,g,E,T,S,D,F,N,P):$&6?br(p,g,E,T,S,D,F,N,P):($&64||$&128)&&k.process(p,g,E,T,S,D,F,N,P,ge)}K!=null&&S&&Zu(K,p&&p.ref,D,g||p,!g)},b=(p,g,E,T)=>{if(p==null)i(g.el=a(g.children),E,T);else{const S=g.el=p.el;g.children!==p.children&&c(S,g.children)}},_=(p,g,E,T)=>{p==null?i(g.el=l(g.children||""),E,T):g.el=p.el},w=(p,g,E,T)=>{[p.el,p.anchor]=m(p.children,g,E,T,p.el,p.anchor)},v=({el:p,anchor:g},E,T)=>{let S;for(;p&&p!==g;)S=f(p),i(p,E,T),p=S;i(g,E,T)},C=({el:p,anchor:g})=>{let E;for(;p&&p!==g;)E=f(p),r(p),p=E;r(g)},O=(p,g,E,T,S,D,F,N,P)=>{F=F||g.type==="svg",p==null?X(g,E,T,S,D,F,N,P):Fe(p,g,S,D,F,N,P)},X=(p,g,E,T,S,D,F,N)=>{let P,k;const{type:K,props:$,shapeFlag:W,transition:ee,dirs:ce}=p;if(P=p.el=o(p.type,D,$&&$.is,$),W&8?u(P,p.children):W&16&&fe(p.children,P,null,T,S,D&&K!=="foreignObject",F,N),ce&&Pi(p,null,T,"created"),se(P,p,p.scopeId,F,T),$){for(const Ce in $)Ce!=="value"&&!$a(Ce)&&s(P,Ce,null,$[Ce],D,p.children,T,S,U);"value"in $&&s(P,"value",null,$.value),(k=$.onVnodeBeforeMount)&&vn(k,T,p)}ce&&Pi(p,null,T,"beforeMount");const ke=(!S||S&&!S.pendingBranch)&&ee&&!ee.persisted;ke&&ee.beforeEnter(P),i(P,g,E),((k=$&&$.onVnodeMounted)||ke||ce)&&Pt(()=>{k&&vn(k,T,p),ke&&ee.enter(P),ce&&Pi(p,null,T,"mounted")},S)},se=(p,g,E,T,S)=>{if(E&&d(p,E),T)for(let D=0;D<T.length;D++)d(p,T[D]);if(S){let D=S.subTree;if(g===D){const F=S.vnode;se(p,F,F.scopeId,F.slotScopeIds,S.parent)}}},fe=(p,g,E,T,S,D,F,N,P=0)=>{for(let k=P;k<p.length;k++){const K=p[k]=N?ui(p[k]):bn(p[k]);y(null,K,g,E,T,S,D,F,N)}},Fe=(p,g,E,T,S,D,F)=>{const N=g.el=p.el;let{patchFlag:P,dynamicChildren:k,dirs:K}=g;P|=p.patchFlag&16;const $=p.props||Ne,W=g.props||Ne;let ee;E&&Mi(E,!1),(ee=W.onVnodeBeforeUpdate)&&vn(ee,E,g,p),K&&Pi(g,p,E,"beforeUpdate"),E&&Mi(E,!0);const ce=S&&g.type!=="foreignObject";if(k?Be(p.dynamicChildren,k,N,E,T,ce,D):F||Ie(p,g,N,null,E,T,ce,D,!1),P>0){if(P&16)Fn(N,g,$,W,E,T,S);else if(P&2&&$.class!==W.class&&s(N,"class",null,W.class,S),P&4&&s(N,"style",$.style,W.style,S),P&8){const ke=g.dynamicProps;for(let Ce=0;Ce<ke.length;Ce++){const Ye=ke[Ce],nn=$[Ye],Er=W[Ye];(Er!==nn||Ye==="value")&&s(N,Ye,nn,Er,S,p.children,E,T,U)}}P&1&&p.children!==g.children&&u(N,g.children)}else!F&&k==null&&Fn(N,g,$,W,E,T,S);((ee=W.onVnodeUpdated)||K)&&Pt(()=>{ee&&vn(ee,E,g,p),K&&Pi(g,p,E,"updated")},T)},Be=(p,g,E,T,S,D,F)=>{for(let N=0;N<g.length;N++){const P=p[N],k=g[N],K=P.el&&(P.type===Oe||!ks(P,k)||P.shapeFlag&70)?h(P.el):E;y(P,k,K,null,T,S,D,F,!0)}},Fn=(p,g,E,T,S,D,F)=>{if(E!==T){if(E!==Ne)for(const N in E)!$a(N)&&!(N in T)&&s(p,N,E[N],null,F,g.children,S,D,U);for(const N in T){if($a(N))continue;const P=T[N],k=E[N];P!==k&&N!=="value"&&s(p,N,k,P,F,g.children,S,D,U)}"value"in T&&s(p,"value",E.value,T.value)}},yn=(p,g,E,T,S,D,F,N,P)=>{const k=g.el=p?p.el:a(""),K=g.anchor=p?p.anchor:a("");let{patchFlag:$,dynamicChildren:W,slotScopeIds:ee}=g;ee&&(N=N?N.concat(ee):ee),p==null?(i(k,E,T),i(K,E,T),fe(g.children,E,K,S,D,F,N,P)):$>0&&$&64&&W&&p.dynamicChildren?(Be(p.dynamicChildren,W,E,S,D,F,N),(g.key!=null||S&&g===S.subTree)&&K_(p,g,!0)):Ie(p,g,E,K,S,D,F,N,P)},br=(p,g,E,T,S,D,F,N,P)=>{g.slotScopeIds=N,p==null?g.shapeFlag&512?S.ctx.activate(g,E,T,F,P):Di(g,E,T,S,D,F,P):Ss(p,g,P)},Di=(p,g,E,T,S,D,F)=>{const N=p.component=FT(p,T,S);if(D_(p)&&(N.ctx.renderer=ge),UT(N),N.asyncDep){if(S&&S.registerDep(N,Ge),!p.el){const P=N.subTree=He(nr);_(null,P,g,E)}return}Ge(N,p,g,E,S,D,F)},Ss=(p,g,E)=>{const T=g.component=p.component;if(QE(p,g,E))if(T.asyncDep&&!T.asyncResolved){Ae(T,g,E);return}else T.next=g,zE(T.update),T.update();else g.el=p.el,T.vnode=g},Ge=(p,g,E,T,S,D,F)=>{const N=()=>{if(p.isMounted){let{next:K,bu:$,u:W,parent:ee,vnode:ce}=p,ke=K,Ce;Mi(p,!1),K?(K.el=ce.el,Ae(p,K,F)):K=ce,$&&Ba($),(Ce=K.props&&K.props.onVnodeBeforeUpdate)&&vn(Ce,ee,K,ce),Mi(p,!0);const Ye=iu(p),nn=p.subTree;p.subTree=Ye,y(nn,Ye,h(nn.el),L(nn),p,S,D),K.el=Ye.el,ke===null&&XE(p,Ye.el),W&&Pt(W,S),(Ce=K.props&&K.props.onVnodeUpdated)&&Pt(()=>vn(Ce,ee,K,ce),S)}else{let K;const{el:$,props:W}=g,{bm:ee,m:ce,parent:ke}=p,Ce=za(g);if(Mi(p,!1),ee&&Ba(ee),!Ce&&(K=W&&W.onVnodeBeforeMount)&&vn(K,ke,g),Mi(p,!0),$&&le){const Ye=()=>{p.subTree=iu(p),le($,p.subTree,p,S,null)};Ce?g.type.__asyncLoader().then(()=>!p.isUnmounted&&Ye()):Ye()}else{const Ye=p.subTree=iu(p);y(null,Ye,E,T,p,S,D),g.el=Ye.el}if(ce&&Pt(ce,S),!Ce&&(K=W&&W.onVnodeMounted)){const Ye=g;Pt(()=>vn(K,ke,Ye),S)}(g.shapeFlag&256||ke&&za(ke.vnode)&&ke.vnode.shapeFlag&256)&&p.a&&Pt(p.a,S),p.isMounted=!0,g=E=T=null}},P=p.effect=new Tf(N,()=>xf(k),p.scope),k=p.update=()=>P.run();k.id=p.uid,Mi(p,!0),k()},Ae=(p,g,E)=>{g.component=p;const T=p.vnode.props;p.vnode=g,p.next=null,wT(p,g.props,T,E),IT(p,g.children,E),hs(),Bp(),fs()},Ie=(p,g,E,T,S,D,F,N,P=!1)=>{const k=p&&p.children,K=p?p.shapeFlag:0,$=g.children,{patchFlag:W,shapeFlag:ee}=g;if(W>0){if(W&128){Oi(k,$,E,T,S,D,F,N,P);return}else if(W&256){en(k,$,E,T,S,D,F,N,P);return}}ee&8?(K&16&&U(k,S,D),$!==k&&u(E,$)):K&16?ee&16?Oi(k,$,E,T,S,D,F,N,P):U(k,S,D,!0):(K&8&&u(E,""),ee&16&&fe($,E,T,S,D,F,N,P))},en=(p,g,E,T,S,D,F,N,P)=>{p=p||Pr,g=g||Pr;const k=p.length,K=g.length,$=Math.min(k,K);let W;for(W=0;W<$;W++){const ee=g[W]=P?ui(g[W]):bn(g[W]);y(p[W],ee,E,null,S,D,F,N,P)}k>K?U(p,S,D,!0,!1,$):fe(g,E,T,S,D,F,N,P,$)},Oi=(p,g,E,T,S,D,F,N,P)=>{let k=0;const K=g.length;let $=p.length-1,W=K-1;for(;k<=$&&k<=W;){const ee=p[k],ce=g[k]=P?ui(g[k]):bn(g[k]);if(ks(ee,ce))y(ee,ce,E,null,S,D,F,N,P);else break;k++}for(;k<=$&&k<=W;){const ee=p[$],ce=g[W]=P?ui(g[W]):bn(g[W]);if(ks(ee,ce))y(ee,ce,E,null,S,D,F,N,P);else break;$--,W--}if(k>$){if(k<=W){const ee=W+1,ce=ee<K?g[ee].el:T;for(;k<=W;)y(null,g[k]=P?ui(g[k]):bn(g[k]),E,ce,S,D,F,N,P),k++}}else if(k>W)for(;k<=$;)Dt(p[k],S,D,!0),k++;else{const ee=k,ce=k,ke=new Map;for(k=ce;k<=W;k++){const $t=g[k]=P?ui(g[k]):bn(g[k]);$t.key!=null&&ke.set($t.key,k)}let Ce,Ye=0;const nn=W-ce+1;let Er=!1,Np=0;const As=new Array(nn);for(k=0;k<nn;k++)As[k]=0;for(k=ee;k<=$;k++){const $t=p[k];if(Ye>=nn){Dt($t,S,D,!0);continue}let _n;if($t.key!=null)_n=ke.get($t.key);else for(Ce=ce;Ce<=W;Ce++)if(As[Ce-ce]===0&&ks($t,g[Ce])){_n=Ce;break}_n===void 0?Dt($t,S,D,!0):(As[_n-ce]=k+1,_n>=Np?Np=_n:Er=!0,y($t,g[_n],E,null,S,D,F,N,P),Ye++)}const xp=Er?RT(As):Pr;for(Ce=xp.length-1,k=nn-1;k>=0;k--){const $t=ce+k,_n=g[$t],Dp=$t+1<K?g[$t+1].el:T;As[k]===0?y(null,_n,E,Dp,S,D,F,N,P):Er&&(Ce<0||k!==xp[Ce]?tn(_n,E,Dp,2):Ce--)}}},tn=(p,g,E,T,S=null)=>{const{el:D,type:F,transition:N,children:P,shapeFlag:k}=p;if(k&6){tn(p.component.subTree,g,E,T);return}if(k&128){p.suspense.move(g,E,T);return}if(k&64){F.move(p,g,E,ge);return}if(F===Oe){i(D,g,E);for(let $=0;$<P.length;$++)tn(P[$],g,E,T);i(p.anchor,g,E);return}if(F===Ha){v(p,g,E);return}if(T!==2&&k&1&&N)if(T===0)N.beforeEnter(D),i(D,g,E),Pt(()=>N.enter(D),S);else{const{leave:$,delayLeave:W,afterLeave:ee}=N,ce=()=>i(D,g,E),ke=()=>{$(D,()=>{ce(),ee&&ee()})};W?W(D,ce,ke):ke()}else i(D,g,E)},Dt=(p,g,E,T=!1,S=!1)=>{const{type:D,props:F,ref:N,children:P,dynamicChildren:k,shapeFlag:K,patchFlag:$,dirs:W}=p;if(N!=null&&Zu(N,null,E,p,!0),K&256){g.ctx.deactivate(p);return}const ee=K&1&&W,ce=!za(p);let ke;if(ce&&(ke=F&&F.onVnodeBeforeUnmount)&&vn(ke,g,p),K&6)I(p.component,E,T);else{if(K&128){p.suspense.unmount(E,T);return}ee&&Pi(p,null,g,"beforeUnmount"),K&64?p.type.remove(p,g,E,S,ge,T):k&&(D!==Oe||$>0&&$&64)?U(k,g,E,!1,!0):(D===Oe&&$&384||!S&&K&16)&&U(P,g,E),T&&wr(p)}(ce&&(ke=F&&F.onVnodeUnmounted)||ee)&&Pt(()=>{ke&&vn(ke,g,p),ee&&Pi(p,null,g,"unmounted")},E)},wr=p=>{const{type:g,el:E,anchor:T,transition:S}=p;if(g===Oe){ha(E,T);return}if(g===Ha){C(p);return}const D=()=>{r(E),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(p.shapeFlag&1&&S&&!S.persisted){const{leave:F,delayLeave:N}=S,P=()=>F(E,D);N?N(p.el,D,P):P()}else D()},ha=(p,g)=>{let E;for(;p!==g;)E=f(p),r(p),p=E;r(g)},I=(p,g,E)=>{const{bum:T,scope:S,update:D,subTree:F,um:N}=p;T&&Ba(T),S.stop(),D&&(D.active=!1,Dt(F,p,g,E)),N&&Pt(N,g),Pt(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},U=(p,g,E,T=!1,S=!1,D=0)=>{for(let F=D;F<p.length;F++)Dt(p[F],g,E,T,S)},L=p=>p.shapeFlag&6?L(p.component.subTree):p.shapeFlag&128?p.suspense.next():f(p.anchor||p.el),H=(p,g,E)=>{p==null?g._vnode&&Dt(g._vnode,null,null,!0):y(g._vnode||null,p,g,null,null,null,E),Bp(),k_(),g._vnode=p},ge={p:y,um:Dt,m:tn,r:wr,mt:Di,mc:fe,pc:Ie,pbc:Be,n:L,o:t};let je,le;return e&&([je,le]=e(ge)),{render:H,hydrate:je,createApp:ST(H,je)}}function Mi({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function K_(t,e,n=!1){const i=t.children,r=e.children;if(ie(i)&&ie(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=ui(r[s]),a.el=o.el),n||K_(o,a)),a.type===tc&&(a.el=o.el)}}function RT(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const NT=t=>t.__isTeleport,Oe=Symbol(void 0),tc=Symbol(void 0),nr=Symbol(void 0),Ha=Symbol(void 0),zs=[];let an=null;function G(t=!1){zs.push(an=t?null:[])}function xT(){zs.pop(),an=zs[zs.length-1]||null}let co=1;function Qp(t){co+=t}function W_(t){return t.dynamicChildren=co>0?an||Pr:null,xT(),co>0&&an&&an.push(t),t}function ne(t,e,n,i,r,s){return W_(Q(t,e,n,i,r,s,!0))}function Gn(t,e,n,i,r){return W_(He(t,e,n,i,r,!0))}function eh(t){return t?t.__v_isVNode===!0:!1}function ks(t,e){return t.type===e.type&&t.key===e.key}const nc="__vInternal",q_=({key:t})=>t??null,Ka=({ref:t,ref_key:e,ref_for:n})=>t!=null?tt(t)||dt(t)||oe(t)?{i:zt,r:t,k:e,f:!!n}:t:null;function Q(t,e=null,n=null,i=0,r=null,s=t===Oe?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&q_(e),ref:e&&Ka(e),scopeId:Zl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:zt};return a?(Lf(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=tt(n)?8:16),co>0&&!o&&an&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&an.push(l),l}const He=DT;function DT(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===fT)&&(t=nr),eh(t)){const a=qr(t,e,!0);return n&&Lf(a,n),co>0&&!s&&an&&(a.shapeFlag&6?an[an.indexOf(t)]=a:an.push(a)),a.patchFlag|=-2,a}if(zT(t)&&(t=t.__vccOpts),e){e=OT(e);let{class:a,style:l}=e;a&&!tt(a)&&(e.class=Wn(a)),$e(l)&&(__(l)&&!ie(l)&&(l=xt({},l)),e.style=Mo(l))}const o=tt(t)?1:JE(t)?128:NT(t)?64:$e(t)?4:oe(t)?2:0;return Q(t,e,n,i,r,o,s,!0)}function OT(t){return t?__(t)||nc in t?xt({},t):t:null}function qr(t,e,n=!1){const{props:i,ref:r,patchFlag:s,children:o}=t,a=e?PT(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&q_(a),ref:e&&e.ref?n&&r?ie(r)?r.concat(Ka(e)):[r,Ka(e)]:Ka(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Oe?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&qr(t.ssContent),ssFallback:t.ssFallback&&qr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function ut(t=" ",e=0){return He(tc,null,t,e)}function ze(t="",e=!1){return e?(G(),Gn(nr,null,t)):He(nr,null,t)}function bn(t){return t==null||typeof t=="boolean"?He(nr):ie(t)?He(Oe,null,t.slice()):typeof t=="object"?ui(t):He(tc,null,String(t))}function ui(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:qr(t)}function Lf(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(ie(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Lf(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(nc in e)?e._ctx=zt:r===3&&zt&&(zt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else oe(e)?(e={default:e,_ctx:zt},n=32):(e=String(e),i&64?(n=16,e=[ut(e)]):n=8);t.children=e,t.shapeFlag|=n}function PT(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Wn([e.class,i.class]));else if(r==="style")e.style=Mo([e.style,i.style]);else if(Wl(r)){const s=e[r],o=i[r];o&&s!==o&&!(ie(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function vn(t,e,n,i=null){fn(t,e,7,[n,i])}const MT=H_();let LT=0;function FT(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||MT,s={uid:LT++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new s_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$_(i,r),emitsOptions:N_(i,r),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:i.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=WE.bind(null,s),t.ce&&t.ce(s),s}let qe=null;const ic=()=>qe||zt,Gr=t=>{qe=t,t.scope.on()},Xi=()=>{qe&&qe.scope.off(),qe=null};function G_(t){return t.vnode.shapeFlag&4}let uo=!1;function UT(t,e=!1){uo=e;const{props:n,children:i}=t.vnode,r=G_(t);bT(t,n,r,e),TT(t,i);const s=r?VT(t,e):void 0;return uo=!1,s}function VT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=kf(new Proxy(t.ctx,pT));const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?BT(t):null;Gr(t),hs();const s=di(i,t,0,[t.props,r]);if(fs(),Xi(),n_(s)){if(s.then(Xi,Xi),e)return s.then(o=>{Xp(t,o,e)}).catch(o=>{Xl(o,t,0)});t.asyncDep=s}else Xp(t,s,e)}else Y_(t,e)}function Xp(t,e,n){oe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:$e(e)&&(t.setupState=T_(e)),Y_(t,n)}let Jp;function Y_(t,e,n){const i=t.type;if(!t.render){if(!e&&Jp&&!i.render){const r=i.template||Pf(t).template;if(r){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=xt(xt({isCustomElement:s,delimiters:a},o),l);i.render=Jp(r,c)}}t.render=i.render||hn}Gr(t),hs(),mT(t),fs(),Xi()}function $T(t){return new Proxy(t.attrs,{get(e,n){return Ut(t,"get","$attrs"),e[n]}})}function BT(t){const e=i=>{t.exposed=i||{}};let n;return{get attrs(){return n||(n=$T(t))},slots:t.slots,emit:t.emit,expose:e}}function rc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(T_(kf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in js)return js[n](t)},has(e,n){return n in e||n in js}}))}function jT(t,e=!0){return oe(t)?t.displayName||t.name:t.name||e&&t.__name}function zT(t){return oe(t)&&"__vccOpts"in t}const ae=(t,e)=>$E(t,e,uo);function sc(t,e,n){const i=arguments.length;return i===2?$e(e)&&!ie(e)?eh(e)?He(t,null,[e]):He(t,e):He(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&eh(n)&&(n=[n]),He(t,e,n))}const Q_=Symbol(""),HT=()=>Kt(Q_),KT="3.2.47",WT="http://www.w3.org/2000/svg",$i=typeof document<"u"?document:null,Zp=$i&&$i.createElement("template"),qT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e?$i.createElementNS(WT,t):$i.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>$i.createTextNode(t),createComment:t=>$i.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>$i.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Zp.innerHTML=i?`<svg>${t}</svg>`:t;const a=Zp.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function GT(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function YT(t,e,n){const i=t.style,r=tt(n);if(n&&!r){if(e&&!tt(e))for(const s in e)n[s]==null&&th(i,s,"");for(const s in n)th(i,s,n[s])}else{const s=i.display;r?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=s)}}const em=/\s*!important$/;function th(t,e,n){if(ie(n))n.forEach(i=>th(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=QT(t,e);em.test(n)?t.setProperty(us(i),n.replace(em,""),"important"):t[i]=n}}const tm=["Webkit","Moz","ms"],su={};function QT(t,e){const n=su[e];if(n)return n;let i=An(e);if(i!=="filter"&&i in t)return su[e]=i;i=Yl(i);for(let r=0;r<tm.length;r++){const s=tm[r]+i;if(s in t)return su[e]=s}return e}const nm="http://www.w3.org/1999/xlink";function XT(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(nm,e.slice(6,e.length)):t.setAttributeNS(nm,e,n);else{const s=Zw(e);n==null||s&&!Zy(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function JT(t,e,n,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Zy(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Cr(t,e,n,i){t.addEventListener(e,n,i)}function ZT(t,e,n,i){t.removeEventListener(e,n,i)}function eI(t,e,n,i,r=null){const s=t._vei||(t._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=tI(e);if(i){const c=s[e]=rI(i,r);Cr(t,a,c,l)}else o&&(ZT(t,a,o,l),s[e]=void 0)}}const im=/(?:Once|Passive|Capture)$/;function tI(t){let e;if(im.test(t)){e={};let i;for(;i=t.match(im);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):us(t.slice(2)),e]}let ou=0;const nI=Promise.resolve(),iI=()=>ou||(nI.then(()=>ou=0),ou=Date.now());function rI(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;fn(sI(i,n.value),e,5,[i])};return n.value=t,n.attached=iI(),n}function sI(t,e){if(ie(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const rm=/^on[a-z]/,oI=(t,e,n,i,r=!1,s,o,a,l)=>{e==="class"?GT(t,i,r):e==="style"?YT(t,n,i):Wl(e)?_f(e)||eI(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):aI(t,e,i,r))?JT(t,e,i,s,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),XT(t,e,i,r))};function aI(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&rm.test(e)&&oe(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||rm.test(e)&&tt(n)?!1:e in t}function Ff(t){const e=ic();if(!e)return;const n=e.ut=(r=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(s=>ih(s,r))},i=()=>{const r=t(e.proxy);nh(e.subTree,r),n(r)};eT(i),P_(()=>{const r=new MutationObserver(i);r.observe(e.subTree.el.parentNode,{childList:!0}),Of(()=>r.disconnect())})}function nh(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{nh(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)ih(t.el,e);else if(t.type===Oe)t.children.forEach(n=>nh(n,e));else if(t.type===Ha){let{el:n,anchor:i}=t;for(;n&&(ih(n,e),n!==i);)n=n.nextSibling}}function ih(t,e){if(t.nodeType===1){const n=t.style;for(const i in e)n.setProperty(`--${i}`,e[i])}}const sm=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ie(e)?n=>Ba(e,n):e};function lI(t){t.target.composing=!0}function om(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Bn={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t._assign=sm(r);const s=i||r.props&&r.props.type==="number";Cr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=zu(a)),t._assign(a)}),n&&Cr(t,"change",()=>{t.value=t.value.trim()}),e||(Cr(t,"compositionstart",lI),Cr(t,"compositionend",om),Cr(t,"change",om))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:r}},s){if(t._assign=sm(s),t.composing||document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===e||(r||t.type==="number")&&zu(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},cI=["ctrl","shift","alt","meta"],uI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>cI.some(n=>t[`${n}Key`]&&!e.includes(n))},vi=(t,e)=>(n,...i)=>{for(let r=0;r<e.length;r++){const s=uI[e[r]];if(s&&s(n,e))return}return t(n,...i)},hI=xt({patchProp:oI},qT);let am;function fI(){return am||(am=AT(hI))}const dI=(...t)=>{const e=fI().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=pI(i);if(!r)return;const s=e._component;!oe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function pI(t){return tt(t)?document.querySelector(t):t}var mI=!1;/*!
  * pinia v2.0.35
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const gI=Symbol();var lm;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(lm||(lm={}));function yI(){const t=aE(!0),e=t.run(()=>pt({}));let n=[],i=[];const r=kf({install(s){r._a=s,s.provide(gI,r),s.config.globalProperties.$pinia=r,i.forEach(o=>n.push(o)),i=[]},use(s){return!this._a&&!mI?i.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M=function(t,e){if(!t)throw ds(e)},ds=function(t){return new Error("Firebase Database ("+X_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},_I=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},oc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(f=64)),i.push(n[u],n[h],n[f],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(J_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_I(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||c==null||h==null)throw new vI;const f=s<<2|a>>4;if(i.push(f),c!==64){const d=a<<4&240|c>>2;if(i.push(d),h!==64){const m=c<<6&192|h;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class vI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Z_=function(t){const e=J_(t);return oc.encodeByteArray(e,!0)},il=function(t){return Z_(t).replace(/\./g,"")},rl=function(t){try{return oc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(t){return ev(void 0,t)}function ev(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!wI(n)||(t[n]=ev(t[n],e[n]));return t}function wI(t){return t!=="__proto__"}/**
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
 */const TI=()=>EI().__FIREBASE_DEFAULTS__,II=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},CI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&rl(t[1]);return e&&JSON.parse(e)},Uf=()=>{try{return TI()||II()||CI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},SI=t=>{var e,n;return(n=(e=Uf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},AI=t=>{const e=SI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},kI=()=>{var t;return(t=Uf())===null||t===void 0?void 0:t.config},RI=t=>{var e;return(e=Uf())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function NI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[il(JSON.stringify(n)),il(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(kn())}function xI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function tv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nv(){return X_.NODE_ADMIN===!0}function iv(){try{return typeof indexedDB=="object"}catch{return!1}}function DI(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI="FirebaseError";class ii extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=OI,Object.setPrototypeOf(this,ii.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ps.prototype.create)}}class ps{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?PI(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new ii(r,a,i)}}function PI(t,e){return t.replace(MI,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const MI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(t){return JSON.parse(t)}function ht(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv=function(t){let e={},n={},i={},r="";try{const s=t.split(".");e=fo(rl(s[0])||""),n=fo(rl(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:r}},LI=function(t){const e=rv(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},FI=function(t){const e=rv(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Yr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function cm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function sl(t,e,n){const i={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=e.call(n,t[r],r,t));return i}function rh(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(um(s)&&um(o)){if(!rh(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function um(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class UI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)i[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(f<<1|f>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):h<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const f=(r<<5|r>>>27)+c+l+u+i[h]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=r,r=f}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<n;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}}function VI(t,e){const n=new $I(t,e);return n.subscribe.bind(n)}class $I{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");BI(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=au),r.error===void 0&&(r.error=au),r.complete===void 0&&(r.complete=au);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function BI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function au(){}function jI(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,M(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},ac=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Vt(t){return t&&t._delegate?t._delegate:t}class mn{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Fi="[DEFAULT]";/**
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
 */class HI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new ho;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(WI(e))try{this.getOrInitializeService({instanceIdentifier:Fi})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=Fi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fi){return this.instances.has(e)}getOptions(e=Fi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:KI(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Fi){return this.component?this.component.multipleInstances?e:Fi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function KI(t){return t===Fi?void 0:t}function WI(t){return t.instantiationMode==="EAGER"}/**
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
 */var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const GI={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},YI=_e.INFO,QI={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},XI=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=QI[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Uo{constructor(e){this.name=e,this._logLevel=YI,this._logHandler=XI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?GI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const JI=(t,e)=>e.some(n=>t instanceof n);let hm,fm;function ZI(){return hm||(hm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function eC(){return fm||(fm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sv=new WeakMap,sh=new WeakMap,ov=new WeakMap,lu=new WeakMap,Bf=new WeakMap;function tC(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(pi(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&sv.set(n,t)}).catch(()=>{}),Bf.set(e,t),e}function nC(t){if(sh.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});sh.set(t,e)}let oh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return sh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ov.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function iC(t){oh=t(oh)}function rC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(cu(this),e,...n);return ov.set(i,e.sort?e.sort():[e]),pi(i)}:eC().includes(t)?function(...e){return t.apply(cu(this),e),pi(sv.get(this))}:function(...e){return pi(t.apply(cu(this),e))}}function sC(t){return typeof t=="function"?rC(t):(t instanceof IDBTransaction&&nC(t),JI(t,ZI())?new Proxy(t,oh):t)}function pi(t){if(t instanceof IDBRequest)return tC(t);if(lu.has(t))return lu.get(t);const e=sC(t);return e!==t&&(lu.set(t,e),Bf.set(e,t)),e}const cu=t=>Bf.get(t);function oC(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=pi(o);return i&&o.addEventListener("upgradeneeded",l=>{i(pi(o.result),l.oldVersion,l.newVersion,pi(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const aC=["get","getKey","getAll","getAllKeys","count"],lC=["put","add","delete","clear"],uu=new Map;function dm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(uu.get(e))return uu.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=lC.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||aC.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return uu.set(e,s),s}iC(t=>({...t,get:(e,n,i)=>dm(e,n)||t.get(e,n,i),has:(e,n)=>!!dm(e,n)||t.has(e,n)}));/**
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
 */class cC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(uC(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function uC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ah="@firebase/app",pm="0.9.8";/**
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
 */const ir=new Uo("@firebase/app"),hC="@firebase/app-compat",fC="@firebase/analytics-compat",dC="@firebase/analytics",pC="@firebase/app-check-compat",mC="@firebase/app-check",gC="@firebase/auth",yC="@firebase/auth-compat",_C="@firebase/database",vC="@firebase/database-compat",bC="@firebase/functions",wC="@firebase/functions-compat",EC="@firebase/installations",TC="@firebase/installations-compat",IC="@firebase/messaging",CC="@firebase/messaging-compat",SC="@firebase/performance",AC="@firebase/performance-compat",kC="@firebase/remote-config",RC="@firebase/remote-config-compat",NC="@firebase/storage",xC="@firebase/storage-compat",DC="@firebase/firestore",OC="@firebase/firestore-compat",PC="firebase",MC="9.20.0";/**
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
 */const lh="[DEFAULT]",LC={[ah]:"fire-core",[hC]:"fire-core-compat",[dC]:"fire-analytics",[fC]:"fire-analytics-compat",[mC]:"fire-app-check",[pC]:"fire-app-check-compat",[gC]:"fire-auth",[yC]:"fire-auth-compat",[_C]:"fire-rtdb",[vC]:"fire-rtdb-compat",[bC]:"fire-fn",[wC]:"fire-fn-compat",[EC]:"fire-iid",[TC]:"fire-iid-compat",[IC]:"fire-fcm",[CC]:"fire-fcm-compat",[SC]:"fire-perf",[AC]:"fire-perf-compat",[kC]:"fire-rc",[RC]:"fire-rc-compat",[NC]:"fire-gcs",[xC]:"fire-gcs-compat",[DC]:"fire-fst",[OC]:"fire-fst-compat","fire-js":"fire-js",[PC]:"fire-js-all"};/**
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
 */const ol=new Map,ch=new Map;function FC(t,e){try{t.container.addComponent(e)}catch(n){ir.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Rn(t){const e=t.name;if(ch.has(e))return ir.debug(`There were multiple attempts to register component ${e}.`),!1;ch.set(e,t);for(const n of ol.values())FC(n,t);return!0}function UC(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const VC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},mi=new ps("app","Firebase",VC);/**
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
 */class $C{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mi.create("app-deleted",{appName:this._name})}}/**
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
 */const ms=MC;function av(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:lh,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw mi.create("bad-app-name",{appName:String(r)});if(n||(n=kI()),!n)throw mi.create("no-options");const s=ol.get(r);if(s){if(rh(n,s.options)&&rh(i,s.config))return s;throw mi.create("duplicate-app",{appName:r})}const o=new qI(r);for(const l of ch.values())o.addComponent(l);const a=new $C(n,i,o);return ol.set(r,a),a}function lv(t=lh){const e=ol.get(t);if(!e&&t===lh)return av();if(!e)throw mi.create("no-app",{appName:t});return e}function Wt(t,e,n){var i;let r=(i=LC[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ir.warn(a.join(" "));return}Rn(new mn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const BC="firebase-heartbeat-database",jC=1,po="firebase-heartbeat-store";let hu=null;function cv(){return hu||(hu=oC(BC,jC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(po)}}}).catch(t=>{throw mi.create("idb-open",{originalErrorMessage:t.message})})),hu}async function zC(t){try{return(await cv()).transaction(po).objectStore(po).get(uv(t))}catch(e){if(e instanceof ii)ir.warn(e.message);else{const n=mi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ir.warn(n.message)}}}async function mm(t,e){try{const i=(await cv()).transaction(po,"readwrite");return await i.objectStore(po).put(e,uv(t)),i.done}catch(n){if(n instanceof ii)ir.warn(n.message);else{const i=mi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ir.warn(i.message)}}}function uv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const HC=1024,KC=30*24*60*60*1e3;class WC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new GC(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=gm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=KC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=gm(),{heartbeatsToSend:n,unsentEntries:i}=qC(this._heartbeatsCache.heartbeats),r=il(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function gm(){return new Date().toISOString().substring(0,10)}function qC(t,e=HC){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),ym(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ym(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class GC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return iv()?DI().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await zC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return mm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return mm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ym(t){return il(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function YC(t){Rn(new mn("platform-logger",e=>new cC(e),"PRIVATE")),Rn(new mn("heartbeat",e=>new WC(e),"PRIVATE")),Wt(ah,pm,t),Wt(ah,pm,"esm2017"),Wt("fire-js","")}YC("");function hv(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function fv(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const QC=fv,dv=new ps("auth","Firebase",fv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al=new Uo("@firebase/auth");function XC(t,...e){al.logLevel<=_e.WARN&&al.warn(`Auth (${ms}): ${t}`,...e)}function Wa(t,...e){al.logLevel<=_e.ERROR&&al.error(`Auth (${ms}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _m(t,...e){throw zf(t,...e)}function jf(t,...e){return zf(t,...e)}function JC(t,e,n){const i=Object.assign(Object.assign({},QC()),{[e]:n});return new ps("auth","Firebase",i).create(e,{appName:t.name})}function zf(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return dv.create(t,...e)}function we(t,e,...n){if(!t)throw zf(e,...n)}function Hs(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Wa(e),new Error(e)}function ll(t,e){t||Hs(e)}function ZC(){return vm()==="http:"||vm()==="https:"}function vm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Vo{constructor(e,n){this.shortDelay=e,this.longDelay=n,ll(n>e,"Short delay should be less than long delay!"),this.isMobile=Vf()||tv()}get(){return eS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nS(t,e){ll(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Hs("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Hs("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Hs("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const rS=new Vo(3e4,6e4);function sS(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Hf(t,e,n,i,r={}){return mv(t,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=$f(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),pv.fetch()(gv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function mv(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},iS),e);try{const r=new oS(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw _a(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw _a(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw _a(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw _a(t,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw JC(t,u,c);_m(t,u)}}catch(r){if(r instanceof ii)throw r;_m(t,"network-request-failed",{message:String(r)})}}function gv(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?nS(t.config,r):`${t.config.apiScheme}://${r}`}class oS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(jf(this.auth,"network-request-failed")),rS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _a(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=jf(t,e,i);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aS(t,e){return Hf(t,"POST","/v1/accounts:delete",e)}async function lS(t,e){return Hf(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function cS(t,e=!1){const n=Vt(t),i=await n.getIdToken(e),r=yv(i);we(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Ks(fu(r.auth_time)),issuedAtTime:Ks(fu(r.iat)),expirationTime:Ks(fu(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function fu(t){return Number(t)*1e3}function yv(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Wa("JWT malformed, contained fewer than 3 sections"),null;try{const r=rl(n);return r?JSON.parse(r):(Wa("Failed to decode base64 JWT payload"),null)}catch(r){return Wa("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function uS(t){const e=yv(t);return we(e,"internal-error"),we(typeof e.exp<"u","internal-error"),we(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uh(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof ii&&hS(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function hS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class _v{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ks(this.lastLoginAt),this.creationTime=Ks(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function cl(t){var e;const n=t.auth,i=await t.getIdToken(),r=await uh(t,lS(n,{idToken:i}));we(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?mS(s.providerUserInfo):[],a=pS(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new _v(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function dS(t){const e=Vt(t);await cl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pS(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function mS(t){return t.map(e=>{var{providerId:n}=e,i=hv(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gS(t,e){const n=await mv(t,{},async()=>{const i=$f({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=gv(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",pv.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){we(e.idToken,"internal-error"),we(typeof e.idToken<"u","internal-error"),we(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):uS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return we(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await gS(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new mo;return i&&(we(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(we(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(we(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mo,this.toJSON())}_performRefresh(){return Hs("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(t,e){we(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Vr{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=hv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new _v(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await uh(this,this.stsTokenManager.getToken(this.auth,e));return we(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return cS(this,e)}reload(){return dS(this)}_assign(e){this!==e&&(we(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Vr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){we(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await cl(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await uh(this,aS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,a,l,c,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,d=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,_=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:v,emailVerified:C,isAnonymous:O,providerData:X,stsTokenManager:se}=n;we(v&&se,e,"internal-error");const fe=mo.fromJSON(this.name,se);we(typeof v=="string",e,"internal-error"),ai(h,e.name),ai(f,e.name),we(typeof C=="boolean",e,"internal-error"),we(typeof O=="boolean",e,"internal-error"),ai(d,e.name),ai(m,e.name),ai(y,e.name),ai(b,e.name),ai(_,e.name),ai(w,e.name);const Fe=new Vr({uid:v,auth:e,email:f,emailVerified:C,displayName:h,isAnonymous:O,photoURL:m,phoneNumber:d,tenantId:y,stsTokenManager:fe,createdAt:_,lastLoginAt:w});return X&&Array.isArray(X)&&(Fe.providerData=X.map(Be=>Object.assign({},Be))),b&&(Fe._redirectEventId=b),Fe}static async _fromIdTokenResponse(e,n,i=!1){const r=new mo;r.updateFromServerResponse(n);const s=new Vr({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await cl(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm=new Map;function zi(t){ll(t instanceof Function,"Expected a class definition");let e=bm.get(t);return e?(ll(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,bm.set(t,e),e)}/**
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
 */class vv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}vv.type="NONE";const wm=vv;/**
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
 */function du(t,e,n){return`firebase:${t}:${e}:${n}`}class $r{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=du(this.userKey,r.apiKey,s),this.fullPersistenceKey=du("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new $r(zi(wm),e,i);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||zi(wm);const o=du(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Vr._fromJSON(e,u);c!==s&&(a=h),s=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new $r(s,e,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new $r(s,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ES(e))return"Blackberry";if(TS(e))return"Webos";if(_S(e))return"Safari";if((e.includes("chrome/")||vS(e))&&!e.includes("edge/"))return"Chrome";if(wS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function yS(t=kn()){return/firefox\//i.test(t)}function _S(t=kn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vS(t=kn()){return/crios\//i.test(t)}function bS(t=kn()){return/iemobile/i.test(t)}function wS(t=kn()){return/android/i.test(t)}function ES(t=kn()){return/blackberry/i.test(t)}function TS(t=kn()){return/webos/i.test(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bv(t,e=[]){let n;switch(t){case"Browser":n=Em(kn());break;case"Worker":n=`${Em(kn())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ms}/${i}`}async function wv(t,e){return Hf(t,"GET","/v2/recaptchaConfig",sS(t,e))}function Tm(t){return t!==void 0&&t.enterprise!==void 0}class Ev{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function CS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=jf("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",IS().appendChild(i)})}const SS="https://www.google.com/recaptcha/enterprise.js?render=",AS="recaptcha-enterprise";class kS{constructor(e){this.type=AS,this.auth=Tv(e)}async verify(e="verify",n=!1){async function i(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{wv(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Ev(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function r(s,o,a){const l=window.grecaptcha;Tm(l)?l.enterprise.ready(()=>{try{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(c=>{a(c)})}catch(c){a(c)}}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{i(this.auth).then(a=>{if(!n&&Tm(window.grecaptcha))r(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}CS(SS+a).then(()=>{r(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class RS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Im(this),this.idTokenSubscription=new Im(this),this.beforeStateQueue=new RS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=zi(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await $r.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return we(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await cl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=tS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Vt(e):null;return n&&we(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&we(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(zi(e))})}async initializeRecaptchaConfig(){const e=await wv(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Ev(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new kS(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ps("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&zi(e)||this._popupRedirectResolver;we(n,this,"argument-error"),this.redirectPersistenceManager=await $r.create(this,[zi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return we(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,i,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return we(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=bv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&XC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Tv(t){return Vt(t)}class Im{constructor(e){this.auth=e,this.observer=null,this.addObserver=VI(n=>this.observer=n)}get next(){return we(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function xS(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(zi);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}new Vo(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Vo(2e3,1e4);/**
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
 */new Vo(3e4,6e4);/**
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
 */new Vo(5e3,15e3);var Cm="@firebase/auth",Sm="0.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function OS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function PS(t){Rn(new mn("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;we(o&&!o.includes(":"),"invalid-api-key",{appName:i.name}),we(!(a!=null&&a.includes(":")),"argument-error",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bv(t)},c=new NS(i,r,s,l);return xS(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Rn(new mn("auth-internal",e=>{const n=Tv(e.getProvider("auth").getImmediate());return(i=>new DS(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wt(Cm,Sm,OS(t)),Wt(Cm,Sm,"esm2017")}/**
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
 */const LS=new Map,FS={activated:!1,tokenObservers:[]};function Nn(t){return LS.get(t)||Object.assign({},FS)}const Am={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e,n,i,r,s){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=r,this.upperBound=s,this.pending=null,this.nextErrorWaitInterval=r,r>s)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new ho,await VS(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new ho,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function VS(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},ul=new ps("appCheck","AppCheck",$S);function BS(t){if(!Nn(t).activated)throw ul.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS="firebase-app-check-database",zS=1,hh="firebase-app-check-store";let va=null;function HS(){return va||(va=new Promise((t,e)=>{try{const n=indexedDB.open(jS,zS);n.onsuccess=i=>{t(i.target.result)},n.onerror=i=>{var r;e(ul.create("storage-open",{originalErrorMessage:(r=i.target.error)===null||r===void 0?void 0:r.message}))},n.onupgradeneeded=i=>{const r=i.target.result;switch(i.oldVersion){case 0:r.createObjectStore(hh,{keyPath:"compositeKey"})}}}catch(n){e(ul.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),va)}function KS(t,e){return WS(qS(t),e)}async function WS(t,e){const i=(await HS()).transaction(hh,"readwrite"),s=i.objectStore(hh).put({compositeKey:t,value:e});return new Promise((o,a)=>{s.onsuccess=l=>{o()},i.onerror=l=>{var c;a(ul.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function qS(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh=new Uo("@firebase/app-check");function km(t,e){return iv()?KS(t,e).catch(n=>{fh.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS={error:"UNKNOWN_ERROR"};function YS(t){return oc.encodeString(JSON.stringify(t),!1)}async function dh(t,e=!1){const n=t.app;BS(n);const i=Nn(n);let r=i.token,s;if(r&&!Ls(r)&&(i.token=void 0,r=void 0),!r){const l=await i.cachedTokenPromise;l&&(Ls(l)?r=l:await km(n,void 0))}if(!e&&r&&Ls(r))return{token:r.token};let o=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),r=await Nn(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?fh.warn(l.message):fh.error(l),s=l}let a;return r?s?Ls(r)?a={token:r.token,internalError:s}:a=Nm(s):(a={token:r.token},i.token=r,await km(n,r)):a=Nm(s),o&&JS(n,a),a}function QS(t,e,n,i){const{app:r}=t,s=Nn(r),o={next:n,error:i,type:e};if(s.tokenObservers=[...s.tokenObservers,o],s.token&&Ls(s.token)){const a=s.token;Promise.resolve().then(()=>{n({token:a.token}),Rm(t)}).catch(()=>{})}s.cachedTokenPromise.then(()=>Rm(t))}function Iv(t,e){const n=Nn(t),i=n.tokenObservers.filter(r=>r.next!==e);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function Rm(t){const{app:e}=t,n=Nn(e);let i=n.tokenRefresher;i||(i=XS(t),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function XS(t){const{app:e}=t;return new US(async()=>{const n=Nn(e);let i;if(n.token?i=await dh(t,!0):i=await dh(t),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=Nn(e);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const r=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,r),Math.max(0,i-Date.now())}else return 0},Am.RETRIAL_MIN_WAIT,Am.RETRIAL_MAX_WAIT)}function JS(t,e){const n=Nn(t).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function Ls(t){return t.expireTimeMillis-Date.now()>0}function Nm(t){return{token:YS(GS),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Nn(this.app);for(const n of e)Iv(this.app,n.next);return Promise.resolve()}}function eA(t,e){return new ZS(t,e)}function tA(t){return{getToken:e=>dh(t,e),addTokenListener:e=>QS(t,"INTERNAL",e),removeTokenListener:e=>Iv(t.app,e)}}const nA="@firebase/app-check",iA="0.6.5",rA="app-check",xm="app-check-internal";function sA(){Rn(new mn(rA,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return eA(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(xm).initialize()})),Rn(new mn(xm,t=>{const e=t.getProvider("app-check").getImmediate();return tA(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Wt(nA,iA)}sA();var oA="firebase",aA="9.20.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wt(oA,aA,"app");const Cv=Symbol("firebaseApp");function Kf(t){return ic()&&Kt(Cv,null)||lv(t)}const Tn=()=>{};function Wf(t,e){return e.split(".").reduce((n,i)=>n&&n[i],t)}function lA(t,e,n){const i=(""+e).split("."),r=i.pop(),s=i.reduce((o,a)=>o&&o[a],t);if(s!=null)return Array.isArray(s)?s.splice(Number(r),1,n):s[r]=n}function pr(t){return!!t&&typeof t=="object"}const cA=Object.prototype;function uA(t){return pr(t)&&Object.getPrototypeOf(t)===cA}function qf(t){return pr(t)&&t.type==="document"}function Sv(t){return pr(t)&&t.type==="collection"}function hA(t){return qf(t)||Sv(t)}function fA(t){return pr(t)&&t.type==="query"}function dA(t){return pr(t)&&"ref"in t}function pA(t){return pr(t)&&typeof t.bucket=="string"}function mA(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}function gA(){return!!(ic()&&Kt(Q_,null))}const Dm="@firebase/database",Om="0.14.4";/**
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
 */let Av="";function yA(t){Av=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ht(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:fo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ri(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new _A(e)}}catch{}return new vA},Hi=kv("localStorage"),ph=kv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=new Uo("@firebase/database"),bA=function(){let t=1;return function(){return t++}}(),Rv=function(t){const e=zI(t),n=new UI;n.update(e);const i=n.digest();return oc.encodeByteArray(i)},$o=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=$o.apply(null,i):typeof i=="object"?e+=ht(i):e+=i,e+=" "}return e};let Ji=null,Pm=!0;const wA=function(t,e){M(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Br.logLevel=_e.VERBOSE,Ji=Br.log.bind(Br),e&&ph.set("logging_enabled",!0)):typeof t=="function"?Ji=t:(Ji=null,ph.remove("logging_enabled"))},vt=function(...t){if(Pm===!0&&(Pm=!1,Ji===null&&ph.get("logging_enabled")===!0&&wA(!0)),Ji){const e=$o.apply(null,t);Ji(e)}},Bo=function(t){return function(...e){vt(t,...e)}},mh=function(...t){const e="FIREBASE INTERNAL ERROR: "+$o(...t);Br.error(e)},rr=function(...t){const e=`FIREBASE FATAL ERROR: ${$o(...t)}`;throw Br.error(e),new Error(e)},qt=function(...t){const e="FIREBASE WARNING: "+$o(...t);Br.warn(e)},EA=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&qt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Nv=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},TA=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Qr="[MIN_NAME]",sr="[MAX_NAME]",gs=function(t,e){if(t===e)return 0;if(t===Qr||e===sr)return-1;if(e===Qr||t===sr)return 1;{const n=Mm(t),i=Mm(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},IA=function(t,e){return t===e?0:t<e?-1:1},Rs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ht(e))},Gf=function(t){if(typeof t!="object"||t===null)return ht(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=ht(e[i]),n+=":",n+=Gf(t[e[i]]);return n+="}",n},xv=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let r=0;r<n;r+=e)r+e>n?i.push(t.substring(r,n)):i.push(t.substring(r,r+e));return i};function Jt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Dv=function(t){M(!Nv(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let r,s,o,a,l;t===0?(s=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),s=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(r?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},CA=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},SA=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},AA=new RegExp("^-?(0*)\\d{1,10}$"),kA=-2147483648,RA=2147483647,Mm=function(t){if(AA.test(t)){const e=Number(t);if(e>=kA&&e<=RA)return e}return null},jo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw qt("Exception was thrown by user callback.",n),e},Math.floor(0))}},NA=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ws=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class xA{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){qt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(vt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',qt(e)}}class gh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}gh.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf="5",Ov="v",Pv="s",Mv="r",Lv="f",Fv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Uv="ls",Vv="p",yh="ac",$v="websocket",Bv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e,n,i,r,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Hi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Hi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function PA(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function jv(t,e,n){M(typeof e=="string","typeof type must == string"),M(typeof n=="object","typeof params must == object");let i;if(e===$v)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Bv)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);PA(t)&&(n.ns=t.namespace);const r=[];return Jt(n,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(){this.counters_={}}incrementCounter(e,n=1){ri(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return bI(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu={},mu={};function Qf(t){const e=t.toString();return pu[e]||(pu[e]=new MA),pu[e]}function LA(t,e){const n=t.toString();return mu[n]||(mu[n]=e()),mu[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&jo(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm="start",UA="close",VA="pLPCommand",$A="pRTLPCB",zv="id",Hv="pw",Kv="ser",BA="cb",jA="seg",zA="ts",HA="d",KA="dframe",Wv=1870,qv=30,WA=Wv-qv,qA=25e3,GA=3e4;class Rr{constructor(e,n,i,r,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Bo(e),this.stats_=Qf(n),this.urlFn=l=>(this.appCheckToken&&(l[yh]=this.appCheckToken),jv(n,Bv,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new FA(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(GA)),TA(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Xf((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Lm)this.id=a,this.password=l;else if(o===UA)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Lm]="t",i[Kv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[BA]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Ov]=Yf,this.transportSessionId&&(i[Pv]=this.transportSessionId),this.lastSessionId&&(i[Uv]=this.lastSessionId),this.applicationId&&(i[Vv]=this.applicationId),this.appCheckToken&&(i[yh]=this.appCheckToken),typeof location<"u"&&location.hostname&&Fv.test(location.hostname)&&(i[Mv]=Lv);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Rr.forceAllow_=!0}static forceDisallow(){Rr.forceDisallow_=!0}static isAvailable(){return Rr.forceAllow_?!0:!Rr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!CA()&&!SA()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ht(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Z_(n),r=xv(i,WA);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[KA]="t",i[zv]=e,i[Hv]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ht(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Xf{constructor(e,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=bA(),window[VA+this.uniqueCallbackIdentifier]=e,window[$A+this.uniqueCallbackIdentifier]=n,this.myIFrame=Xf.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){vt("frame writing exception"),a.stack&&vt(a.stack),vt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||vt("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[zv]=this.myID,e[Hv]=this.myPW,e[Kv]=this.currentSerial;let n=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+qv+i.length<=Wv;){const o=this.pendingSegs.shift();i=i+"&"+jA+r+"="+o.seg+"&"+zA+r+"="+o.ts+"&"+HA+r+"="+o.d,r++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(i,Math.floor(qA)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{vt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA=16384,QA=45e3;let hl=null;typeof MozWebSocket<"u"?hl=MozWebSocket:typeof WebSocket<"u"&&(hl=WebSocket);class sn{constructor(e,n,i,r,s,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Bo(this.connId),this.stats_=Qf(n),this.connURL=sn.connectionURL_(n,o,a,r,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,r,s){const o={};return o[Ov]=Yf,typeof location<"u"&&location.hostname&&Fv.test(location.hostname)&&(o[Mv]=Lv),n&&(o[Pv]=n),i&&(o[Uv]=i),r&&(o[yh]=r),s&&(o[Vv]=s),jv(e,$v,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Hi.set("previous_websocket_failure",!0);try{let i;nv(),this.mySock=new hl(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){sn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&hl!==null&&!sn.forceDisallow_}static previouslyFailed(){return Hi.isInMemoryStorage||Hi.get("previous_websocket_failure")===!0}markConnectionHealthy(){Hi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=fo(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(M(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=ht(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=xv(n,YA);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(QA))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}sn.responsesRequiredToBeHealthy=2;sn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Rr,sn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=sn&&sn.isAvailable();let i=n&&!sn.previouslyFailed();if(e.webSocketOnly&&(n||qt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[sn];else{const r=this.transports_=[];for(const s of go.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);go.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}go.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA=6e4,JA=5e3,ZA=10*1024,ek=100*1024,gu="t",Fm="d",tk="s",Um="r",nk="e",Vm="o",$m="a",Bm="n",jm="p",ik="h";class rk{constructor(e,n,i,r,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Bo("c:"+this.id+":"),this.transportManager_=new go(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Ws(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ek?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ZA?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(gu in e){const n=e[gu];n===$m?this.upgradeIfSecondaryHealthy_():n===Um?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Vm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Rs("t",e),i=Rs("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:jm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:$m,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Bm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Rs("t",e),i=Rs("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Rs(gu,e);if(Fm in e){const i=e[Fm];if(n===ik){const r=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===Bm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===tk?this.onConnectionShutdown_(i):n===Um?this.onReset_(i):n===nk?mh("Server Error: "+i):n===Vm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):mh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Yf!==i&&qt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Ws(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(XA))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ws(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(JA))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:jm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Hi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{put(e,n,i,r){}merge(e,n,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e){this.allowedEvents_=e,this.listeners_={},M(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const r=this.getInitialEvent(e);r&&n.apply(i,r)}off(e,n,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===n&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(e){M(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl extends Yv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Vf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new fl}getInitialEvent(e){return M(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm=32,Hm=768;class Le{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Se(){return new Le("")}function pe(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function bi(t){return t.pieces_.length-t.pieceNum_}function xe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Le(t.pieces_,e)}function Qv(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function sk(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Xv(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Jv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Le(e,0)}function at(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof Le)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new Le(n,0)}function he(t){return t.pieceNum_>=t.pieces_.length}function Xt(t,e){const n=pe(t),i=pe(e);if(n===null)return e;if(n===i)return Xt(xe(t),xe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Zv(t,e){if(bi(t)!==bi(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function ln(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(bi(t)>bi(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class ok{constructor(e,n){this.errorPrefix_=n,this.parts_=Xv(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=ac(this.parts_[i]);e0(this)}}function ak(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ac(e),e0(t)}function lk(t){const e=t.parts_.pop();t.byteLength_-=ac(e),t.parts_.length>0&&(t.byteLength_-=1)}function e0(t){if(t.byteLength_>Hm)throw new Error(t.errorPrefix_+"has a key path longer than "+Hm+" bytes ("+t.byteLength_+").");if(t.parts_.length>zm)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+zm+") or object contains a cycle "+Ui(t))}function Ui(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf extends Yv{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Jf}getInitialEvent(e){return M(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns=1e3,ck=60*5*1e3,Km=30*1e3,uk=1.3,hk=3e4,fk="server_kill",Wm=3;class Hn extends Gv{constructor(e,n,i,r,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Hn.nextPersistentConnectionId_++,this.log_=Bo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ns,this.maxReconnectDelay_=ck,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!nv())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Jf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&fl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const r=++this.requestNumber_,s={r,a:e,b:n};this.log_(ht(s)),M(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const n=new ho,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,i,r){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),M(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),M(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:i};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;Hn.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ri(e,"w")){const i=Yr(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();qt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||FI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Km)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=LI(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),M(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,n)}sendUnlisten_(e,n,i,r){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,r){const s={p:n,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,i,r){this.putInternal("p",e,n,i,r)}merge(e,n,i,r){this.putInternal("m",e,n,i,r)}putInternal(e,n,i,r,s){this.initConnection_();const o={p:n,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ht(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):mh("Unrecognized action received from server: "+ht(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){M(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ns,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ns,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>hk&&(this.reconnectDelay_=Ns),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*uk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Hn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(h){M(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?vt("getToken() completed but was canceled"):(vt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new rk(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,d=>{qt(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(fk)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&qt(h),l())}}}interrupt(e){vt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){vt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],cm(this.interruptReasons_)&&(this.reconnectDelay_=Ns,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(s=>Gf(s)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const i=new Le(e).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(n),s.delete(n),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,n){vt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Wm&&(this.reconnectDelay_=Km,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){vt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Wm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Av.replace(/\./g,"-")]=1,Vf()?e["framework.cordova"]=1:tv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=fl.getInstance().currentlyOnline();return cm(this.interruptReasons_)&&e}}Hn.nextPersistentConnectionId_=0;Hn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new me(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new me(Qr,e),r=new me(Qr,n);return this.compare(i,r)!==0}minPost(){return me.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ba;class t0 extends lc{static get __EMPTY_NODE(){return ba}static set __EMPTY_NODE(e){ba=e}compare(e,n){return gs(e.name,n.name)}isDefinedOn(e){throw ds("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return me.MIN}maxPost(){return new me(sr,ba)}makePost(e,n){return M(typeof e=="string","KeyIndex indexValue must always be a string."),new me(e,ba)}toString(){return".key"}}const jr=new t0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,n,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ot{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i??ot.RED,this.left=r??Ft.EMPTY_NODE,this.right=s??Ft.EMPTY_NODE}copy(e,n,i,r,s){return new ot(e??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ft.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,r;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return Ft.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ot.RED=!0;ot.BLACK=!1;class dk{copy(e,n,i,r,s){return this}insert(e,n,i){return new ot(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ft{constructor(e,n=Ft.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ft(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ot.BLACK,null,null))}remove(e){return new Ft(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ot.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,r=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new wa(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new wa(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new wa(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new wa(this.root_,null,this.comparator_,!0,e)}}Ft.EMPTY_NODE=new dk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pk(t,e){return gs(t.name,e.name)}function Zf(t,e){return gs(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _h;function mk(t){_h=t}const n0=function(t){return typeof t=="number"?"number:"+Dv(t):"string:"+t},i0=function(t){if(t.isLeafNode()){const e=t.val();M(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ri(e,".sv"),"Priority must be a string or number.")}else M(t===_h||t.isEmpty(),"priority of unexpected type.");M(t===_h||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qm;class rt{constructor(e,n=rt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,M(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),i0(this.priorityNode_)}static set __childrenNodeConstructor(e){qm=e}static get __childrenNodeConstructor(){return qm}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new rt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:rt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return he(e)?this:pe(e)===".priority"?this.priorityNode_:rt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:rt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=pe(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(M(i!==".priority"||bi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,rt.__childrenNodeConstructor.EMPTY_NODE.updateChild(xe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+n0(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Dv(this.value_):e+=this.value_,this.lazyHash_=Rv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===rt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof rt.__childrenNodeConstructor?-1:(M(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,r=rt.VALUE_TYPE_ORDER.indexOf(n),s=rt.VALUE_TYPE_ORDER.indexOf(i);return M(r>=0,"Unknown leaf type: "+n),M(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}rt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let r0,s0;function gk(t){r0=t}function yk(t){s0=t}class _k extends lc{compare(e,n){const i=e.node.getPriority(),r=n.node.getPriority(),s=i.compareTo(r);return s===0?gs(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return me.MIN}maxPost(){return new me(sr,new rt("[PRIORITY-POST]",s0))}makePost(e,n){const i=r0(e);return new me(n,new rt("[PRIORITY-POST]",i))}toString(){return".priority"}}const It=new _k;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk=Math.log(2);class bk{constructor(e){const n=s=>parseInt(Math.log(s)/vk,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const dl=function(t,e,n,i){t.sort(e);const r=function(l,c){const u=c-l;let h,f;if(u===0)return null;if(u===1)return h=t[l],f=n?n(h):h,new ot(f,h.node,ot.BLACK,null,null);{const d=parseInt(u/2,10)+l,m=r(l,d),y=r(d+1,c);return h=t[d],f=n?n(h):h,new ot(f,h.node,ot.BLACK,m,y)}},s=function(l){let c=null,u=null,h=t.length;const f=function(m,y){const b=h-m,_=h;h-=m;const w=r(b+1,_),v=t[b],C=n?n(v):v;d(new ot(C,v.node,y,null,w))},d=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const y=l.nextBitIsOne(),b=Math.pow(2,l.count-(m+1));y?f(b,ot.BLACK):(f(b,ot.BLACK),f(b,ot.RED))}return u},o=new bk(t.length),a=s(o);return new Ft(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yu;const Tr={};class jn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return M(Tr&&It,"ChildrenNode.ts has not been loaded"),yu=yu||new jn({".priority":Tr},{".priority":It}),yu}get(e){const n=Yr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ft?n:null}hasIndex(e){return ri(this.indexSet_,e.toString())}addIndex(e,n){M(e!==jr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=n.getIterator(me.Wrap);let o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();let a;r?a=dl(i,e.getCompare()):a=Tr;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new jn(u,c)}addToIndexes(e,n){const i=sl(this.indexes_,(r,s)=>{const o=Yr(this.indexSet_,s);if(M(o,"Missing index implementation for "+s),r===Tr)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(me.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),dl(a,o.getCompare())}else return Tr;else{const a=n.get(e.name);let l=r;return a&&(l=l.remove(new me(e.name,a))),l.insert(e,e.node)}});return new jn(i,this.indexSet_)}removeFromIndexes(e,n){const i=sl(this.indexes_,r=>{if(r===Tr)return r;{const s=n.get(e.name);return s?r.remove(new me(e.name,s)):r}});return new jn(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xs;class Ee{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&i0(this.priorityNode_),this.children_.isEmpty()&&M(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return xs||(xs=new Ee(new Ft(Zf),null,jn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||xs}updatePriority(e){return this.children_.isEmpty()?this:new Ee(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?xs:n}}getChild(e){const n=pe(e);return n===null?this:this.getImmediateChild(n).getChild(xe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(M(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new me(e,n);let r,s;n.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?xs:this.priorityNode_;return new Ee(r,o,s)}}updateChild(e,n){const i=pe(e);if(i===null)return n;{M(pe(e)!==".priority"||bi(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(xe(e),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,r=0,s=!0;if(this.forEachChild(It,(o,a)=>{n[o]=a.val(e),i++,s&&Ee.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+n0(this.getPriority().val())+":"),this.forEachChild(It,(n,i)=>{const r=i.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":Rv(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new me(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new me(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new me(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,me.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,me.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===zo?-1:0}withIndex(e){if(e===jr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Ee(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===jr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(It),r=n.getIterator(It);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===jr?null:this.indexMap_.get(e.toString())}}Ee.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class wk extends Ee{constructor(){super(new Ft(Zf),Ee.EMPTY_NODE,jn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ee.EMPTY_NODE}isEmpty(){return!1}}const zo=new wk;Object.defineProperties(me,{MIN:{value:new me(Qr,Ee.EMPTY_NODE)},MAX:{value:new me(sr,zo)}});t0.__EMPTY_NODE=Ee.EMPTY_NODE;rt.__childrenNodeConstructor=Ee;mk(zo);yk(zo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek=!0;function bt(t,e=null){if(t===null)return Ee.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),M(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new rt(n,bt(e))}if(!(t instanceof Array)&&Ek){const n=[];let i=!1;if(Jt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=bt(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new me(o,l)))}}),n.length===0)return Ee.EMPTY_NODE;const s=dl(n,pk,o=>o.name,Zf);if(i){const o=dl(n,It.getCompare());return new Ee(s,bt(e),new jn({".priority":o},{".priority":It}))}else return new Ee(s,bt(e),jn.Default)}else{let n=Ee.EMPTY_NODE;return Jt(t,(i,r)=>{if(ri(t,i)&&i.substring(0,1)!=="."){const s=bt(r);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(i,s))}}),n.updatePriority(bt(e))}}gk(bt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk extends lc{constructor(e){super(),this.indexPath_=e,M(!he(e)&&pe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),r=this.extractChild(n.node),s=i.compareTo(r);return s===0?gs(e.name,n.name):s}makePost(e,n){const i=bt(e),r=Ee.EMPTY_NODE.updateChild(this.indexPath_,i);return new me(n,r)}maxPost(){const e=Ee.EMPTY_NODE.updateChild(this.indexPath_,zo);return new me(sr,e)}toString(){return Xv(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik extends lc{compare(e,n){const i=e.node.compareTo(n.node);return i===0?gs(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return me.MIN}maxPost(){return me.MAX}makePost(e,n){const i=bt(e);return new me(n,i)}toString(){return".value"}}const Ck=new Ik;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sk(t){return{type:"value",snapshotNode:t}}function Ak(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function kk(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Gm(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Rk(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=It}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return M(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return M(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Qr}hasEnd(){return this.endSet_}getIndexEndValue(){return M(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return M(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:sr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return M(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===It}copy(){const e=new ed;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ym(t){const e={};if(t.isDefault())return e;let n;if(t.index_===It?n="$priority":t.index_===Ck?n="$value":t.index_===jr?n="$key":(M(t.index_ instanceof Tk,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ht(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=ht(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+ht(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=ht(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+ht(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Qm(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==It&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl extends Gv{constructor(e,n,i,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=Bo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(M(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=pl.getListenId_(e,i),a={};this.listens_[o]=a;const l=Ym(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(s,h,!1,i),Yr(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",r(f,null)}})}unlisten(e,n){const i=pl.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Ym(e._queryParams),i=e._path.toString(),r=new ho;return this.restRequest_(i+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(i,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(n.auth=r.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+$f(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=fo(a.responseText)}catch{qt("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&qt("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function ml(){return{value:null,children:new Map}}function o0(t,e,n){if(he(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=pe(e);t.children.has(i)||t.children.set(i,ml());const r=t.children.get(i);e=xe(e),o0(r,e,n)}}function vh(t,e,n){t.value!==null?n(e,t.value):xk(t,(i,r)=>{const s=new Le(e.toString()+"/"+i);vh(r,s,n)})}function xk(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Xm=10*1e3,Ok=30*1e3,Pk=5*60*1e3;class Mk{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Dk(e);const i=Xm+(Ok-Xm)*Math.random();Ws(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;Jt(e,(r,s)=>{s>0&&ri(this.statsToReport_,r)&&(n[r]=s,i=!0)}),i&&this.server_.reportStats(n),Ws(this.reportStats_.bind(this),Math.floor(Math.random()*2*Pk))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var In;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(In||(In={}));function a0(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function l0(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function c0(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=In.ACK_USER_WRITE,this.source=a0()}operationForChild(e){if(he(this.path)){if(this.affectedTree.value!=null)return M(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Le(e));return new gl(Se(),n,this.revert)}}else return M(pe(this.path)===e,"operationForChild called for unrelated child."),new gl(xe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=In.OVERWRITE}operationForChild(e){return he(this.path)?new or(this.source,Se(),this.snap.getImmediateChild(e)):new or(this.source,xe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=In.MERGE}operationForChild(e){if(he(this.path)){const n=this.children.subtree(new Le(e));return n.isEmpty()?null:n.value?new or(this.source,Se(),n.value):new yo(this.source,Se(),n)}else return M(pe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new yo(this.source,xe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(he(e))return this.isFullyInitialized()&&!this.filtered_;const n=pe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function Lk(t,e,n,i){const r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(Rk(o.childName,o.snapshotNode))}),Ds(t,r,"child_removed",e,i,n),Ds(t,r,"child_added",e,i,n),Ds(t,r,"child_moved",s,i,n),Ds(t,r,"child_changed",e,i,n),Ds(t,r,"value",e,i,n),r}function Ds(t,e,n,i,r,s){const o=i.filter(a=>a.type===n);o.sort((a,l)=>Uk(t,a,l)),o.forEach(a=>{const l=Fk(t,a,s);r.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Fk(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Uk(t,e,n){if(e.childName==null||n.childName==null)throw ds("Should only compare child_ events.");const i=new me(e.childName,e.snapshotNode),r=new me(n.childName,n.snapshotNode);return t.index_.compare(i,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u0(t,e){return{eventCache:t,serverCache:e}}function qs(t,e,n,i){return u0(new td(e,n,i),t.serverCache)}function h0(t,e,n,i){return u0(t.eventCache,new td(e,n,i))}function bh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ar(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _u;const Vk=()=>(_u||(_u=new Ft(IA)),_u);class Re{constructor(e,n=Vk()){this.value=e,this.children=n}static fromObject(e){let n=new Re(null);return Jt(e,(i,r)=>{n=n.set(new Le(i),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Se(),value:this.value};if(he(e))return null;{const i=pe(e),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(xe(e),n);return s!=null?{path:at(new Le(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(he(e))return this;{const n=pe(e),i=this.children.get(n);return i!==null?i.subtree(xe(e)):new Re(null)}}set(e,n){if(he(e))return new Re(n,this.children);{const i=pe(e),s=(this.children.get(i)||new Re(null)).set(xe(e),n),o=this.children.insert(i,s);return new Re(this.value,o)}}remove(e){if(he(e))return this.children.isEmpty()?new Re(null):new Re(null,this.children);{const n=pe(e),i=this.children.get(n);if(i){const r=i.remove(xe(e));let s;return r.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,r),this.value===null&&s.isEmpty()?new Re(null):new Re(this.value,s)}else return this}}get(e){if(he(e))return this.value;{const n=pe(e),i=this.children.get(n);return i?i.get(xe(e)):null}}setTree(e,n){if(he(e))return n;{const i=pe(e),s=(this.children.get(i)||new Re(null)).setTree(xe(e),n);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new Re(this.value,o)}}fold(e){return this.fold_(Se(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(at(e,r),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,Se(),n)}findOnPath_(e,n,i){const r=this.value?i(n,this.value):!1;if(r)return r;if(he(e))return null;{const s=pe(e),o=this.children.get(s);return o?o.findOnPath_(xe(e),at(n,s),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Se(),n)}foreachOnPath_(e,n,i){if(he(e))return this;{this.value&&i(n,this.value);const r=pe(e),s=this.children.get(r);return s?s.foreachOnPath_(xe(e),at(n,r),i):new Re(null)}}foreach(e){this.foreach_(Se(),e)}foreach_(e,n){this.children.inorderTraversal((i,r)=>{r.foreach_(at(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.writeTree_=e}static empty(){return new dn(new Re(null))}}function Gs(t,e,n){if(he(e))return new dn(new Re(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let s=i.value;const o=Xt(r,e);return s=s.updateChild(o,n),new dn(t.writeTree_.set(r,s))}else{const r=new Re(n),s=t.writeTree_.setTree(e,r);return new dn(s)}}}function Jm(t,e,n){let i=t;return Jt(n,(r,s)=>{i=Gs(i,at(e,r),s)}),i}function Zm(t,e){if(he(e))return dn.empty();{const n=t.writeTree_.setTree(e,new Re(null));return new dn(n)}}function wh(t,e){return mr(t,e)!=null}function mr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Xt(n.path,e)):null}function eg(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(It,(i,r)=>{e.push(new me(i,r))}):t.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new me(i,r.value))}),e}function gi(t,e){if(he(e))return t;{const n=mr(t,e);return n!=null?new dn(new Re(n)):new dn(t.writeTree_.subtree(e))}}function Eh(t){return t.writeTree_.isEmpty()}function Xr(t,e){return f0(Se(),t.writeTree_,e)}function f0(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(M(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):n=f0(at(t,r),s,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(at(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d0(t,e){return _0(e,t)}function $k(t,e,n,i,r){M(i>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:r}),r&&(t.visibleWrites=Gs(t.visibleWrites,e,n)),t.lastWriteId=i}function Bk(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function jk(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);M(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let r=i.visible,s=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&zk(a,i.path)?r=!1:ln(i.path,a.path)&&(s=!0)),o--}if(r){if(s)return Hk(t),!0;if(i.snap)t.visibleWrites=Zm(t.visibleWrites,i.path);else{const a=i.children;Jt(a,l=>{t.visibleWrites=Zm(t.visibleWrites,at(i.path,l))})}return!0}else return!1}function zk(t,e){if(t.snap)return ln(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ln(at(t.path,n),e))return!0;return!1}function Hk(t){t.visibleWrites=p0(t.allWrites,Kk,Se()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Kk(t){return t.visible}function p0(t,e,n){let i=dn.empty();for(let r=0;r<t.length;++r){const s=t[r];if(e(s)){const o=s.path;let a;if(s.snap)ln(n,o)?(a=Xt(n,o),i=Gs(i,a,s.snap)):ln(o,n)&&(a=Xt(o,n),i=Gs(i,Se(),s.snap.getChild(a)));else if(s.children){if(ln(n,o))a=Xt(n,o),i=Jm(i,a,s.children);else if(ln(o,n))if(a=Xt(o,n),he(a))i=Jm(i,Se(),s.children);else{const l=Yr(s.children,pe(a));if(l){const c=l.getChild(xe(a));i=Gs(i,Se(),c)}}}else throw ds("WriteRecord should have .snap or .children")}}return i}function m0(t,e,n,i,r){if(!i&&!r){const s=mr(t.visibleWrites,e);if(s!=null)return s;{const o=gi(t.visibleWrites,e);if(Eh(o))return n;if(n==null&&!wh(o,Se()))return null;{const a=n||Ee.EMPTY_NODE;return Xr(o,a)}}}else{const s=gi(t.visibleWrites,e);if(!r&&Eh(s))return n;if(!r&&n==null&&!wh(s,Se()))return null;{const o=function(c){return(c.visible||r)&&(!i||!~i.indexOf(c.writeId))&&(ln(c.path,e)||ln(e,c.path))},a=p0(t.allWrites,o,e),l=n||Ee.EMPTY_NODE;return Xr(a,l)}}}function Wk(t,e,n){let i=Ee.EMPTY_NODE;const r=mr(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(It,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(n){const s=gi(t.visibleWrites,e);return n.forEachChild(It,(o,a)=>{const l=Xr(gi(s,new Le(o)),a);i=i.updateImmediateChild(o,l)}),eg(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=gi(t.visibleWrites,e);return eg(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function qk(t,e,n,i,r){M(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=at(e,n);if(wh(t.visibleWrites,s))return null;{const o=gi(t.visibleWrites,s);return Eh(o)?r.getChild(n):Xr(o,r.getChild(n))}}function Gk(t,e,n,i){const r=at(e,n),s=mr(t.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(n)){const o=gi(t.visibleWrites,r);return Xr(o,i.getNode().getImmediateChild(n))}else return null}function Yk(t,e){return mr(t.visibleWrites,e)}function Qk(t,e,n,i,r,s,o){let a;const l=gi(t.visibleWrites,e),c=mr(l,Se());if(c!=null)a=c;else if(n!=null)a=Xr(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let d=f.getNext();for(;d&&u.length<r;)h(d,i)!==0&&u.push(d),d=f.getNext();return u}else return[]}function Xk(){return{visibleWrites:dn.empty(),allWrites:[],lastWriteId:-1}}function Th(t,e,n,i){return m0(t.writeTree,t.treePath,e,n,i)}function g0(t,e){return Wk(t.writeTree,t.treePath,e)}function tg(t,e,n,i){return qk(t.writeTree,t.treePath,e,n,i)}function yl(t,e){return Yk(t.writeTree,at(t.treePath,e))}function Jk(t,e,n,i,r,s){return Qk(t.writeTree,t.treePath,e,n,i,r,s)}function nd(t,e,n){return Gk(t.writeTree,t.treePath,e,n)}function y0(t,e){return _0(at(t.treePath,e),t.writeTree)}function _0(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;M(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),M(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(i,Gm(i,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(i,kk(i,r.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(i,Ak(i,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(i,Gm(i,e.snapshotNode,r.oldSnap));else throw ds("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const v0=new eR;class id{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new td(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return nd(this.writes_,e,i)}}getChildAfterChild(e,n,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ar(this.viewCache_),s=Jk(this.writes_,r,n,1,i,e);return s.length===0?null:s[0]}}function tR(t,e){M(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),M(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function nR(t,e,n,i,r){const s=new Zk;let o,a;if(n.type===In.OVERWRITE){const c=n;c.source.fromUser?o=Ih(t,e,c.path,c.snap,i,r,s):(M(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!he(c.path),o=_l(t,e,c.path,c.snap,i,r,a,s))}else if(n.type===In.MERGE){const c=n;c.source.fromUser?o=rR(t,e,c.path,c.children,i,r,s):(M(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Ch(t,e,c.path,c.children,i,r,a,s))}else if(n.type===In.ACK_USER_WRITE){const c=n;c.revert?o=aR(t,e,c.path,i,r,s):o=sR(t,e,c.path,c.affectedTree,i,r,s)}else if(n.type===In.LISTEN_COMPLETE)o=oR(t,e,n.path,i,s);else throw ds("Unknown operation type: "+n.type);const l=s.getChanges();return iR(e,o,l),{viewCache:o,changes:l}}function iR(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=bh(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(Sk(bh(e)))}}function b0(t,e,n,i,r,s){const o=e.eventCache;if(yl(i,n)!=null)return e;{let a,l;if(he(n))if(M(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ar(e),u=c instanceof Ee?c:Ee.EMPTY_NODE,h=g0(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const c=Th(i,ar(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=pe(n);if(c===".priority"){M(bi(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=tg(i,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=xe(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=tg(i,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=nd(i,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,r,s):a=o.getNode()}}return qs(e,a,o.isFullyInitialized()||he(n),t.filter.filtersNodes())}}function _l(t,e,n,i,r,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(he(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const d=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),d,null)}else{const d=pe(n);if(!l.isCompleteForPath(n)&&bi(n)>1)return e;const m=xe(n),b=l.getNode().getImmediateChild(d).updateChild(m,i);d===".priority"?c=u.updatePriority(l.getNode(),b):c=u.updateChild(l.getNode(),d,b,m,v0,null)}const h=h0(e,c,l.isFullyInitialized()||he(n),u.filtersNodes()),f=new id(r,h,s);return b0(t,h,n,r,f,a)}function Ih(t,e,n,i,r,s,o){const a=e.eventCache;let l,c;const u=new id(r,e,s);if(he(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=qs(e,c,!0,t.filter.filtersNodes());else{const h=pe(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=qs(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=xe(n),d=a.getNode().getImmediateChild(h);let m;if(he(f))m=i;else{const y=u.getCompleteChild(h);y!=null?Qv(f)===".priority"&&y.getChild(Jv(f)).isEmpty()?m=y:m=y.updateChild(f,i):m=Ee.EMPTY_NODE}if(d.equals(m))l=e;else{const y=t.filter.updateChild(a.getNode(),h,m,f,u,o);l=qs(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function ng(t,e){return t.eventCache.isCompleteForChild(e)}function rR(t,e,n,i,r,s,o){let a=e;return i.foreach((l,c)=>{const u=at(n,l);ng(e,pe(u))&&(a=Ih(t,a,u,c,r,s,o))}),i.foreach((l,c)=>{const u=at(n,l);ng(e,pe(u))||(a=Ih(t,a,u,c,r,s,o))}),a}function ig(t,e,n){return n.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function Ch(t,e,n,i,r,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;he(n)?c=i:c=new Re(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const d=e.serverCache.getNode().getImmediateChild(h),m=ig(t,d,f);l=_l(t,l,new Le(h),m,r,s,o,a)}}),c.children.inorderTraversal((h,f)=>{const d=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!d){const m=e.serverCache.getNode().getImmediateChild(h),y=ig(t,m,f);l=_l(t,l,new Le(h),y,r,s,o,a)}}),l}function sR(t,e,n,i,r,s,o){if(yl(r,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(he(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return _l(t,e,n,l.getNode().getChild(n),r,s,a,o);if(he(n)){let c=new Re(null);return l.getNode().forEachChild(jr,(u,h)=>{c=c.set(new Le(u),h)}),Ch(t,e,n,c,r,s,a,o)}else return e}else{let c=new Re(null);return i.foreach((u,h)=>{const f=at(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),Ch(t,e,n,c,r,s,a,o)}}function oR(t,e,n,i,r){const s=e.serverCache,o=h0(e,s.getNode(),s.isFullyInitialized()||he(n),s.isFiltered());return b0(t,o,n,i,v0,r)}function aR(t,e,n,i,r,s){let o;if(yl(i,n)!=null)return e;{const a=new id(i,e,r),l=e.eventCache.getNode();let c;if(he(n)||pe(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Th(i,ar(e));else{const h=e.serverCache.getNode();M(h instanceof Ee,"serverChildren would be complete if leaf node"),u=g0(i,h)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=pe(n);let h=nd(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,xe(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,Ee.EMPTY_NODE,xe(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Th(i,ar(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||yl(i,Se())!=null,qs(e,c,o,t.filter.filtersNodes())}}function lR(t,e){const n=ar(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!he(e)&&!n.getImmediateChild(pe(e)).isEmpty())?n.getChild(e):null}function rg(t,e,n,i){e.type===In.MERGE&&e.source.queryId!==null&&(M(ar(t.viewCache_),"We should always have a full cache before handling merges"),M(bh(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,s=nR(t.processor_,r,e,n,i);return tR(t.processor_,s.viewCache),M(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,cR(t,s.changes,s.viewCache.eventCache.getNode(),null)}function cR(t,e,n,i){const r=i?[i]:t.eventRegistrations_;return Lk(t.eventGenerator_,e,n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sg;function uR(t){M(!sg,"__referenceConstructor has already been defined"),sg=t}function rd(t,e,n,i){const r=e.source.queryId;if(r!==null){const s=t.views.get(r);return M(s!=null,"SyncTree gave us an op for an invalid query."),rg(s,e,n,i)}else{let s=[];for(const o of t.views.values())s=s.concat(rg(o,e,n,i));return s}}function sd(t,e){let n=null;for(const i of t.views.values())n=n||lR(i,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let og;function hR(t){M(!og,"__referenceConstructor has already been defined"),og=t}class ag{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Re(null),this.pendingWriteTree_=Xk(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function fR(t,e,n,i,r){return $k(t.pendingWriteTree_,e,n,i,r),r?uc(t,new or(a0(),e,n)):[]}function Nr(t,e,n=!1){const i=Bk(t.pendingWriteTree_,e);if(jk(t.pendingWriteTree_,e)){let s=new Re(null);return i.snap!=null?s=s.set(Se(),!0):Jt(i.children,o=>{s=s.set(new Le(o),!0)}),uc(t,new gl(i.path,s,n))}else return[]}function cc(t,e,n){return uc(t,new or(l0(),e,n))}function dR(t,e,n){const i=Re.fromObject(n);return uc(t,new yo(l0(),e,i))}function pR(t,e,n,i){const r=I0(t,i);if(r!=null){const s=C0(r),o=s.path,a=s.queryId,l=Xt(o,e),c=new or(c0(a),l,n);return S0(t,o,c)}else return[]}function mR(t,e,n,i){const r=I0(t,i);if(r){const s=C0(r),o=s.path,a=s.queryId,l=Xt(o,e),c=Re.fromObject(n),u=new yo(c0(a),l,c);return S0(t,o,u)}else return[]}function w0(t,e,n){const r=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Xt(o,e),c=sd(a,l);if(c)return c});return m0(r,e,s,n,!0)}function uc(t,e){return E0(e,t.syncPointTree_,null,d0(t.pendingWriteTree_,Se()))}function E0(t,e,n,i){if(he(t.path))return T0(t,e,n,i);{const r=e.get(Se());n==null&&r!=null&&(n=sd(r,Se()));let s=[];const o=pe(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=y0(i,o);s=s.concat(E0(a,l,c,u))}return r&&(s=s.concat(rd(r,t,i,n))),s}}function T0(t,e,n,i){const r=e.get(Se());n==null&&r!=null&&(n=sd(r,Se()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=y0(i,o),u=t.operationForChild(o);u&&(s=s.concat(T0(u,a,l,c)))}),r&&(s=s.concat(rd(r,t,i,n))),s}function I0(t,e){return t.tagToQueryMap.get(e)}function C0(t){const e=t.indexOf("$");return M(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Le(t.substr(0,e))}}function S0(t,e,n){const i=t.syncPointTree_.get(e);M(i,"Missing sync point for query tag that we're tracking");const r=d0(t.pendingWriteTree_,e);return rd(i,n,r,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new od(n)}node(){return this.node_}}class ad{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=at(this.path_,e);return new ad(this.syncTree_,n)}node(){return w0(this.syncTree_,this.path_)}}const gR=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},lg=function(t,e,n){if(!t||typeof t!="object")return t;if(M(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return yR(t[".sv"],e,n);if(typeof t[".sv"]=="object")return _R(t[".sv"],e);M(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},yR=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:M(!1,"Unexpected server value: "+t)}},_R=function(t,e,n){t.hasOwnProperty("increment")||M(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&M(!1,"Unexpected increment value: "+i);const r=e.node();if(M(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},vR=function(t,e,n,i){return ld(e,new ad(n,t),i)},bR=function(t,e,n){return ld(t,new od(e),n)};function ld(t,e,n){const i=t.getPriority().val(),r=lg(i,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=lg(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new rt(a,bt(r)):t}else{const o=t;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new rt(r))),o.forEachChild(It,(a,l)=>{const c=ld(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function ud(t,e){let n=e instanceof Le?e:new Le(e),i=t,r=pe(n);for(;r!==null;){const s=Yr(i.node.children,r)||{children:{},childCount:0};i=new cd(r,i,s),n=xe(n),r=pe(n)}return i}function ys(t){return t.node.value}function A0(t,e){t.node.value=e,Sh(t)}function k0(t){return t.node.childCount>0}function wR(t){return ys(t)===void 0&&!k0(t)}function hc(t,e){Jt(t.node.children,(n,i)=>{e(new cd(n,t,i))})}function R0(t,e,n,i){n&&!i&&e(t),hc(t,r=>{R0(r,e,!0,i)}),n&&i&&e(t)}function ER(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Ho(t){return new Le(t.parent===null?t.name:Ho(t.parent)+"/"+t.name)}function Sh(t){t.parent!==null&&TR(t.parent,t.name,t)}function TR(t,e,n){const i=wR(n),r=ri(t.node.children,e);i&&r?(delete t.node.children[e],t.node.childCount--,Sh(t)):!i&&!r&&(t.node.children[e]=n.node,t.node.childCount++,Sh(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR=/[\[\].#$\/\u0000-\u001F\u007F]/,CR=/[\[\].#$\u0000-\u001F\u007F]/,vu=10*1024*1024,N0=function(t){return typeof t=="string"&&t.length!==0&&!IR.test(t)},SR=function(t){return typeof t=="string"&&t.length!==0&&!CR.test(t)},AR=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),SR(t)},x0=function(t,e,n){const i=n instanceof Le?new ok(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ui(i));if(typeof e=="function")throw new Error(t+"contains a function "+Ui(i)+" with contents = "+e.toString());if(Nv(e))throw new Error(t+"contains "+e.toString()+" "+Ui(i));if(typeof e=="string"&&e.length>vu/3&&ac(e)>vu)throw new Error(t+"contains a string greater than "+vu+" utf8 bytes "+Ui(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(Jt(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!N0(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ui(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ak(i,o),x0(t,a,i),lk(i)}),r&&s)throw new Error(t+' contains ".value" child '+Ui(i)+" in addition to actual children.")}},kR=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!N0(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!AR(n))throw new Error(jI(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function NR(t,e){let n=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();n!==null&&!Zv(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(r)}n&&t.eventLists_.push(n)}function gr(t,e,n){NR(t,n),xR(t,i=>ln(i,e)||ln(e,i))}function xR(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const r=t.eventLists_[i];if(r){const s=r.path;e(s)?(DR(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function DR(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Ji&&vt("event: "+n.toString()),jo(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR="repo_interrupt",PR=25;class MR{constructor(e,n,i,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new RR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ml(),this.transactionQueueTree_=new cd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function LR(t,e,n){if(t.stats_=Qf(t.repoInfo_),t.forceRestClient_||NA())t.server_=new pl(t.repoInfo_,(i,r,s,o)=>{cg(t,i,r,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ug(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ht(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new Hn(t.repoInfo_,e,(i,r,s,o)=>{cg(t,i,r,s,o)},i=>{ug(t,i)},i=>{UR(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=LA(t.repoInfo_,()=>new Mk(t.stats_,t.server_)),t.infoData_=new Nk,t.infoSyncTree_=new ag({startListening:(i,r,s,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=cc(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),hd(t,"connected",!1),t.serverSyncTree_=new ag({startListening:(i,r,s,o)=>(t.server_.listen(i,s,r,(a,l)=>{const c=o(a,l);gr(t.eventQueue_,i._path,c)}),[]),stopListening:(i,r)=>{t.server_.unlisten(i,r)}})}function FR(t){const n=t.infoData_.getNode(new Le(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function D0(t){return gR({timestamp:FR(t)})}function cg(t,e,n,i,r){t.dataUpdateCount++;const s=new Le(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(i){const l=sl(n,c=>bt(c));o=mR(t.serverSyncTree_,s,l,r)}else{const l=bt(n);o=pR(t.serverSyncTree_,s,l,r)}else if(i){const l=sl(n,c=>bt(c));o=dR(t.serverSyncTree_,s,l)}else{const l=bt(n);o=cc(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=dd(t,s)),gr(t.eventQueue_,a,o)}function ug(t,e){hd(t,"connected",e),e===!1&&$R(t)}function UR(t,e){Jt(e,(n,i)=>{hd(t,n,i)})}function hd(t,e,n){const i=new Le("/.info/"+e),r=bt(n);t.infoData_.updateSnapshot(i,r);const s=cc(t.infoSyncTree_,i,r);gr(t.eventQueue_,i,s)}function VR(t){return t.nextWriteId_++}function $R(t){O0(t,"onDisconnectEvents");const e=D0(t),n=ml();vh(t.onDisconnect_,Se(),(r,s)=>{const o=vR(r,s,t.serverSyncTree_,e);o0(n,r,o)});let i=[];vh(n,Se(),(r,s)=>{i=i.concat(cc(t.serverSyncTree_,r,s));const o=HR(t,r);dd(t,o)}),t.onDisconnect_=ml(),gr(t.eventQueue_,Se(),i)}function BR(t){t.persistentConnection_&&t.persistentConnection_.interrupt(OR)}function O0(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),vt(n,...e)}function P0(t,e,n){return w0(t.serverSyncTree_,e,n)||Ee.EMPTY_NODE}function fd(t,e=t.transactionQueueTree_){if(e||fc(t,e),ys(e)){const n=L0(t,e);M(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&jR(t,Ho(e),n)}else k0(e)&&hc(e,n=>{fd(t,n)})}function jR(t,e,n){const i=n.map(c=>c.currentWriteId),r=P0(t,e,i);let s=r;const o=r.hash();for(let c=0;c<n.length;c++){const u=n[c];M(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Xt(e,u.path);s=s.updateChild(h,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{O0(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(Nr(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();fc(t,ud(t.transactionQueueTree_,e)),fd(t,t.transactionQueueTree_),gr(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)jo(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{qt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}dd(t,e)}},o)}function dd(t,e){const n=M0(t,e),i=Ho(n),r=L0(t,n);return zR(t,r,i),i}function zR(t,e,n){if(e.length===0)return;const i=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Xt(n,l.path);let u=!1,h;if(M(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,r=r.concat(Nr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=PR)u=!0,h="maxretry",r=r.concat(Nr(t.serverSyncTree_,l.currentWriteId,!0));else{const f=P0(t,l.path,o);l.currentInputSnapshot=f;const d=e[a].update(f.val());if(d!==void 0){x0("transaction failed: Data returned ",d,l.path);let m=bt(d);typeof d=="object"&&d!=null&&ri(d,".priority")||(m=m.updatePriority(f.getPriority()));const b=l.currentWriteId,_=D0(t),w=bR(m,f,_);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=w,l.currentWriteId=VR(t),o.splice(o.indexOf(b),1),r=r.concat(fR(t.serverSyncTree_,l.path,w,l.currentWriteId,l.applyLocally)),r=r.concat(Nr(t.serverSyncTree_,b,!0))}else u=!0,h="nodata",r=r.concat(Nr(t.serverSyncTree_,l.currentWriteId,!0))}gr(t.eventQueue_,n,r),r=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}fc(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)jo(i[a]);fd(t,t.transactionQueueTree_)}function M0(t,e){let n,i=t.transactionQueueTree_;for(n=pe(e);n!==null&&ys(i)===void 0;)i=ud(i,n),e=xe(e),n=pe(e);return i}function L0(t,e){const n=[];return F0(t,e,n),n.sort((i,r)=>i.order-r.order),n}function F0(t,e,n){const i=ys(e);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);hc(e,r=>{F0(t,r,n)})}function fc(t,e){const n=ys(e);if(n){let i=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[i]=n[r],i++);n.length=i,A0(e,n.length>0?n:void 0)}hc(e,i=>{fc(t,i)})}function HR(t,e){const n=Ho(M0(t,e)),i=ud(t.transactionQueueTree_,e);return ER(i,r=>{bu(t,r)}),bu(t,i),R0(i,r=>{bu(t,r)}),n}function bu(t,e){const n=ys(e);if(n){const i=[];let r=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(M(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(M(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(Nr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?A0(e,void 0):n.length=s+1,gr(t.eventQueue_,Ho(e),r);for(let o=0;o<i.length;o++)jo(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KR(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function WR(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):qt(`Invalid query segment '${n}' in query '${t}'`)}return e}const hg=function(t,e){const n=qR(t),i=n.namespace;n.domain==="firebase.com"&&rr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&rr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||EA();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new OA(n.host,n.secure,i,r,e,"",i!==n.subdomain),path:new Le(n.pathString)}},qR=function(t){let e="",n="",i="",r="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(r=KR(t.substring(u,h)));const f=WR(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const d=e.slice(0,c);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{const m=e.indexOf(".");i=e.substring(0,m).toLowerCase(),n=e.substring(m+1),s=i}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(e,n,i,r){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=r}get key(){return he(this._path)?null:Qv(this._path)}get ref(){return new _s(this._repo,this._path)}get _queryIdentifier(){const e=Qm(this._queryParams),n=Gf(e);return n==="{}"?"default":n}get _queryObject(){return Qm(this._queryParams)}isEqual(e){if(e=Vt(e),!(e instanceof pd))return!1;const n=this._repo===e._repo,i=Zv(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+sk(this._path)}}class _s extends pd{constructor(e,n){super(e,n,new ed,!1)}get parent(){const e=Jv(this._path);return e===null?null:new _s(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}uR(_s);hR(_s);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GR="FIREBASE_DATABASE_EMULATOR_HOST",Ah={};let YR=!1;function QR(t,e,n,i,r){let s=i||t.options.databaseURL;s===void 0&&(t.options.projectId||rr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),vt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=hg(s,r),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[GR]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=hg(s,r),a=o.repoInfo):l=!o.repoInfo.secure;const u=r&&l?new gh(gh.OWNER):new DA(t.name,t.options,e);kR("Invalid Firebase Database URL",o),he(o.path)||rr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=JR(a,t,u,new xA(t.name,n));return new ZR(h,t)}function XR(t,e){const n=Ah[e];(!n||n[t.key]!==t)&&rr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),BR(t),delete n[t.key]}function JR(t,e,n,i){let r=Ah[e.name];r||(r={},Ah[e.name]=r);let s=r[t.toURLString()];return s&&rr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new MR(t,YR,n,i),r[t.toURLString()]=s,s}class ZR{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(LR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new _s(this._repo,Se())),this._rootInternal}_delete(){return this._rootInternal!==null&&(XR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&rr("Cannot call "+e+" on a deleted database.")}}/**
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
 */function eN(t){yA(ms),Rn(new mn("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return QR(i,r,s,n)},"PUBLIC").setMultipleInstances(!0)),Wt(Dm,Om,t),Wt(Dm,Om,"esm2017")}Hn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Hn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};eN();var tN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},j,md=md||{},Z=tN||self;function vl(){}function dc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ko(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function nN(t){return Object.prototype.hasOwnProperty.call(t,wu)&&t[wu]||(t[wu]=++iN)}var wu="closure_uid_"+(1e9*Math.random()>>>0),iN=0;function rN(t,e,n){return t.call.apply(t.bind,arguments)}function sN(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,i),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Ct(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ct=rN:Ct=sN,Ct.apply(null,arguments)}function Ea(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function gt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(i,r,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(i,o)}}function ki(){this.s=this.s,this.o=this.o}var oN=0;ki.prototype.s=!1;ki.prototype.na=function(){!this.s&&(this.s=!0,this.M(),oN!=0)&&nN(this)};ki.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const U0=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function gd(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function fg(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(dc(i)){const r=t.length||0,s=i.length||0;t.length=r+s;for(let o=0;o<s;o++)t[r+o]=i[o]}else t.push(i)}}function St(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}St.prototype.h=function(){this.defaultPrevented=!0};var aN=function(){if(!Z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Z.addEventListener("test",vl,e),Z.removeEventListener("test",vl,e)}catch{}return t}();function bl(t){return/^[\s\xa0]*$/.test(t)}var dg=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Eu(t,e){return t<e?-1:t>e?1:0}function pc(){var t=Z.navigator;return t&&(t=t.userAgent)?t:""}function En(t){return pc().indexOf(t)!=-1}function yd(t){return yd[" "](t),t}yd[" "]=vl;function lN(t){var e=hN;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var cN=En("Opera"),Jr=En("Trident")||En("MSIE"),V0=En("Edge"),kh=V0||Jr,$0=En("Gecko")&&!(pc().toLowerCase().indexOf("webkit")!=-1&&!En("Edge"))&&!(En("Trident")||En("MSIE"))&&!En("Edge"),uN=pc().toLowerCase().indexOf("webkit")!=-1&&!En("Edge");function B0(){var t=Z.document;return t?t.documentMode:void 0}var wl;e:{var Tu="",Iu=function(){var t=pc();if($0)return/rv:([^\);]+)(\)|;)/.exec(t);if(V0)return/Edge\/([\d\.]+)/.exec(t);if(Jr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(uN)return/WebKit\/(\S+)/.exec(t);if(cN)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Iu&&(Tu=Iu?Iu[1]:""),Jr){var Cu=B0();if(Cu!=null&&Cu>parseFloat(Tu)){wl=String(Cu);break e}}wl=Tu}var hN={};function fN(){return lN(function(){let t=0;const e=dg(String(wl)).split("."),n=dg("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var r=e[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r[0].length==0&&s[0].length==0)break;t=Eu(r[1].length==0?0:parseInt(r[1],10),s[1].length==0?0:parseInt(s[1],10))||Eu(r[2].length==0,s[2].length==0)||Eu(r[2],s[2]),r=r[3],s=s[3]}while(t==0)}return 0<=t})}var Rh;if(Z.document&&Jr){var pg=B0();Rh=pg||parseInt(wl,10)||void 0}else Rh=void 0;var dN=Rh;function _o(t,e){if(St.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if($0){e:{try{yd(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:pN[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&_o.X.h.call(this)}}gt(_o,St);var pN={2:"touch",3:"pen",4:"mouse"};_o.prototype.h=function(){_o.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Wo="closure_listenable_"+(1e6*Math.random()|0),mN=0;function gN(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=r,this.key=++mN,this.ba=this.ea=!1}function mc(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function _d(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function j0(t){const e={};for(const n in t)e[n]=t[n];return e}const mg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function z0(t,e){let n,i;for(let r=1;r<arguments.length;r++){i=arguments[r];for(n in i)t[n]=i[n];for(let s=0;s<mg.length;s++)n=mg[s],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function gc(t){this.src=t,this.g={},this.h=0}gc.prototype.add=function(t,e,n,i,r){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=xh(t,e,i,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new gN(e,this.src,s,!!i,r),e.ea=n,t.push(e)),e};function Nh(t,e){var n=e.type;if(n in t.g){var i=t.g[n],r=U0(i,e),s;(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(mc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function xh(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==i)return r}return-1}var vd="closure_lm_"+(1e6*Math.random()|0),Su={};function H0(t,e,n,i,r){if(i&&i.once)return W0(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)H0(t,e[s],n,i,r);return null}return n=Ed(n),t&&t[Wo]?t.N(e,n,Ko(i)?!!i.capture:!!i,r):K0(t,e,n,!1,i,r)}function K0(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=Ko(r)?!!r.capture:!!r,a=wd(t);if(a||(t[vd]=a=new gc(t)),n=a.add(e,n,i,o,s),n.proxy)return n;if(i=yN(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)aN||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(G0(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function yN(){function t(n){return e.call(t.src,t.listener,n)}const e=_N;return t}function W0(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)W0(t,e[s],n,i,r);return null}return n=Ed(n),t&&t[Wo]?t.O(e,n,Ko(i)?!!i.capture:!!i,r):K0(t,e,n,!0,i,r)}function q0(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)q0(t,e[s],n,i,r);else i=Ko(i)?!!i.capture:!!i,n=Ed(n),t&&t[Wo]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=xh(s,n,i,r),-1<n&&(mc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=wd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=xh(e,n,i,r)),(n=-1<t?e[t]:null)&&bd(n))}function bd(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Wo])Nh(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(G0(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=wd(e))?(Nh(n,t),n.h==0&&(n.src=null,e[vd]=null)):mc(t)}}}function G0(t){return t in Su?Su[t]:Su[t]="on"+t}function _N(t,e){if(t.ba)t=!0;else{e=new _o(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&bd(t),t=n.call(i,e)}return t}function wd(t){return t=t[vd],t instanceof gc?t:null}var Au="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ed(t){return typeof t=="function"?t:(t[Au]||(t[Au]=function(e){return t.handleEvent(e)}),t[Au])}function lt(){ki.call(this),this.i=new gc(this),this.P=this,this.I=null}gt(lt,ki);lt.prototype[Wo]=!0;lt.prototype.removeEventListener=function(t,e,n,i){q0(this,t,e,n,i)};function mt(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new St(e,t);else if(e instanceof St)e.target=e.target||t;else{var r=e;e=new St(i,t),z0(e,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=Ta(o,i,!0,e)&&r}if(o=e.g=t,r=Ta(o,i,!0,e)&&r,r=Ta(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)o=e.g=n[s],r=Ta(o,i,!1,e)&&r}lt.prototype.M=function(){if(lt.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)mc(n[i]);delete t.g[e],t.h--}}this.I=null};lt.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};lt.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function Ta(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&Nh(t.i,o),r=a.call(l,i)!==!1&&r}}return r&&!i.defaultPrevented}var Td=Z.JSON.stringify;function vN(){var t=X0;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class bN{constructor(){this.h=this.g=null}add(e,n){const i=Y0.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var Y0=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new wN,t=>t.reset());class wN{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function EN(t){Z.setTimeout(()=>{throw t},0)}function Q0(t,e){Dh||TN(),Oh||(Dh(),Oh=!0),X0.add(t,e)}var Dh;function TN(){var t=Z.Promise.resolve(void 0);Dh=function(){t.then(IN)}}var Oh=!1,X0=new bN;function IN(){for(var t;t=vN();){try{t.h.call(t.g)}catch(n){EN(n)}var e=Y0;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Oh=!1}function yc(t,e){lt.call(this),this.h=t||1,this.g=e||Z,this.j=Ct(this.lb,this),this.l=Date.now()}gt(yc,lt);j=yc.prototype;j.ca=!1;j.R=null;j.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),mt(this,"tick"),this.ca&&(Id(this),this.start()))}};j.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Id(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}j.M=function(){yc.X.M.call(this),Id(this),delete this.g};function Cd(t,e,n){if(typeof t=="function")n&&(t=Ct(t,n));else if(t&&typeof t.handleEvent=="function")t=Ct(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Z.setTimeout(t,e||0)}function J0(t){t.g=Cd(()=>{t.g=null,t.i&&(t.i=!1,J0(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class CN extends ki{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:J0(this)}M(){super.M(),this.g&&(Z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vo(t){ki.call(this),this.h=t,this.g={}}gt(vo,ki);var gg=[];function Z0(t,e,n,i){Array.isArray(n)||(n&&(gg[0]=n.toString()),n=gg);for(var r=0;r<n.length;r++){var s=H0(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function eb(t){_d(t.g,function(e,n){this.g.hasOwnProperty(n)&&bd(e)},t),t.g={}}vo.prototype.M=function(){vo.X.M.call(this),eb(this)};vo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function _c(){this.g=!0}_c.prototype.Aa=function(){this.g=!1};function SN(t,e,n,i,r,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function AN(t,e,n,i,r,s,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+`
`+n+`
`+s+" "+o})}function xr(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+RN(t,n)+(i?" "+i:"")})}function kN(t,e){t.info(function(){return"TIMEOUT: "+e})}_c.prototype.info=function(){};function RN(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Td(n)}catch{return e}}var yr={},yg=null;function vc(){return yg=yg||new lt}yr.Pa="serverreachability";function tb(t){St.call(this,yr.Pa,t)}gt(tb,St);function bo(t){const e=vc();mt(e,new tb(e))}yr.STAT_EVENT="statevent";function nb(t,e){St.call(this,yr.STAT_EVENT,t),this.stat=e}gt(nb,St);function Rt(t){const e=vc();mt(e,new nb(e,t))}yr.Qa="timingevent";function ib(t,e){St.call(this,yr.Qa,t),this.size=e}gt(ib,St);function qo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Z.setTimeout(function(){t()},e)}var bc={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},rb={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Sd(){}Sd.prototype.h=null;function _g(t){return t.h||(t.h=t.i())}function sb(){}var Go={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Ad(){St.call(this,"d")}gt(Ad,St);function kd(){St.call(this,"c")}gt(kd,St);var Ph;function wc(){}gt(wc,Sd);wc.prototype.g=function(){return new XMLHttpRequest};wc.prototype.i=function(){return{}};Ph=new wc;function Yo(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new vo(this),this.O=NN,t=kh?125:void 0,this.T=new yc(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new ob}function ob(){this.i=null,this.g="",this.h=!1}var NN=45e3,Mh={},El={};j=Yo.prototype;j.setTimeout=function(t){this.O=t};function Lh(t,e,n){t.K=1,t.v=Tc(Yn(e)),t.s=n,t.P=!0,ab(t,null)}function ab(t,e){t.F=Date.now(),Qo(t),t.A=Yn(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),mb(n.i,"t",i),t.C=0,n=t.l.H,t.h=new ob,t.g=Lb(t.l,n?e:null,!t.s),0<t.N&&(t.L=new CN(Ct(t.La,t,t.g),t.N)),Z0(t.S,t.g,"readystatechange",t.ib),e=t.H?j0(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),bo(),SN(t.j,t.u,t.A,t.m,t.U,t.s)}j.ib=function(t){t=t.target;const e=this.L;e&&zn(t)==3?e.l():this.La(t)};j.La=function(t){try{if(t==this.g)e:{const u=zn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||kh||this.g&&(this.h.h||this.g.fa()||Eg(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?bo(3):bo(2)),Ec(this);var n=this.g.aa();this.Y=n;t:if(lb(this)){var i=Eg(this.g);t="";var r=i.length,s=zn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ki(this),Ys(this);var o="";break t}this.h.i=new Z.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,AN(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!bl(a)){var c=a;break t}}c=null}if(n=c)xr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Fh(this,n);else{this.i=!1,this.o=3,Rt(12),Ki(this),Ys(this);break e}}this.P?(cb(this,u,o),kh&&this.i&&u==3&&(Z0(this.S,this.T,"tick",this.hb),this.T.start())):(xr(this.j,this.m,o,null),Fh(this,o)),u==4&&Ki(this),this.i&&!this.I&&(u==4?Db(this.l,this):(this.i=!1,Qo(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Rt(12)):(this.o=0,Rt(13)),Ki(this),Ys(this)}}}catch{}finally{}};function lb(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function cb(t,e,n){let i=!0,r;for(;!t.I&&t.C<n.length;)if(r=xN(t,n),r==El){e==4&&(t.o=4,Rt(14),i=!1),xr(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Mh){t.o=4,Rt(15),xr(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else xr(t.j,t.m,r,null),Fh(t,r);lb(t)&&r!=El&&r!=Mh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Rt(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Md(e),e.K=!0,Rt(11))):(xr(t.j,t.m,n,"[Invalid Chunked Response]"),Ki(t),Ys(t))}j.hb=function(){if(this.g){var t=zn(this.g),e=this.g.fa();this.C<e.length&&(Ec(this),cb(this,t,e),this.i&&t!=4&&Qo(this))}};function xN(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?El:(n=Number(e.substring(n,i)),isNaN(n)?Mh:(i+=1,i+n>e.length?El:(e=e.substr(i,n),t.C=i+n,e)))}j.cancel=function(){this.I=!0,Ki(this)};function Qo(t){t.V=Date.now()+t.O,ub(t,t.O)}function ub(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=qo(Ct(t.gb,t),e)}function Ec(t){t.B&&(Z.clearTimeout(t.B),t.B=null)}j.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(kN(this.j,this.A),this.K!=2&&(bo(),Rt(17)),Ki(this),this.o=2,Ys(this)):ub(this,this.V-t)};function Ys(t){t.l.G==0||t.I||Db(t.l,t)}function Ki(t){Ec(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Id(t.T),eb(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Fh(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Uh(n.h,t))){if(!t.J&&Uh(n.h,t)&&n.G==3){try{var i=n.Fa.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var r=i;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Cl(n),Sc(n);else break e;Pd(n),Rt(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=qo(Ct(n.cb,n),6e3));if(1>=_b(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Wi(n,11)}else if((t.J||n.g==t)&&Cl(n),!bl(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(i=1.5*f,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const d=t.g;if(d){const m=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var s=i.h;s.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Rd(s,s.h),s.h=null))}if(i.D){const y=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(i.za=y,Ue(i.F,i.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),i=n;var o=t;if(i.sa=Mb(i,i.H?i.ka:null,i.V),o.J){vb(i.h,o);var a=o,l=i.J;l&&a.setTimeout(l),a.B&&(Ec(a),Qo(a)),i.g=o}else Nb(i);0<n.i.length&&Ac(n)}else c[0]!="stop"&&c[0]!="close"||Wi(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Wi(n,7):Od(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}bo(4)}catch{}}function DN(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(dc(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function ON(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(dc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function hb(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(dc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=ON(t),i=DN(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}var fb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function PN(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Zi(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Zi){this.h=e!==void 0?e:t.h,Tl(this,t.j),this.s=t.s,this.g=t.g,Il(this,t.m),this.l=t.l,e=t.i;var n=new wo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),vg(this,n),this.o=t.o}else t&&(n=String(t).match(fb))?(this.h=!!e,Tl(this,n[1]||"",!0),this.s=Fs(n[2]||""),this.g=Fs(n[3]||"",!0),Il(this,n[4]),this.l=Fs(n[5]||"",!0),vg(this,n[6]||"",!0),this.o=Fs(n[7]||"")):(this.h=!!e,this.i=new wo(null,this.h))}Zi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Us(e,bg,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Us(e,bg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Us(n,n.charAt(0)=="/"?FN:LN,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Us(n,VN)),t.join("")};function Yn(t){return new Zi(t)}function Tl(t,e,n){t.j=n?Fs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Il(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function vg(t,e,n){e instanceof wo?(t.i=e,$N(t.i,t.h)):(n||(e=Us(e,UN)),t.i=new wo(e,t.h))}function Ue(t,e,n){t.i.set(e,n)}function Tc(t){return Ue(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Fs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Us(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,MN),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function MN(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var bg=/[#\/\?@]/g,LN=/[#\?:]/g,FN=/[#\?]/g,UN=/[#\?@]/g,VN=/#/g;function wo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ri(t){t.g||(t.g=new Map,t.h=0,t.i&&PN(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}j=wo.prototype;j.add=function(t,e){Ri(this),this.i=null,t=vs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function db(t,e){Ri(t),e=vs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function pb(t,e){return Ri(t),e=vs(t,e),t.g.has(e)}j.forEach=function(t,e){Ri(this),this.g.forEach(function(n,i){n.forEach(function(r){t.call(e,r,i,this)},this)},this)};j.oa=function(){Ri(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let s=0;s<r.length;s++)n.push(e[i])}return n};j.W=function(t){Ri(this);let e=[];if(typeof t=="string")pb(this,t)&&(e=e.concat(this.g.get(vs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};j.set=function(t,e){return Ri(this),this.i=null,t=vs(this,t),pb(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};j.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function mb(t,e,n){db(t,e),0<n.length&&(t.i=null,t.g.set(vs(t,e),gd(n)),t.h+=n.length)}j.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const s=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var r=s;o[i]!==""&&(r+="="+encodeURIComponent(String(o[i]))),t.push(r)}}return this.i=t.join("&")};function vs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function $N(t,e){e&&!t.j&&(Ri(t),t.i=null,t.g.forEach(function(n,i){var r=i.toLowerCase();i!=r&&(db(this,i),mb(this,r,n))},t)),t.j=e}var BN=class{constructor(e,n){this.h=e,this.g=n}};function gb(t){this.l=t||jN,Z.PerformanceNavigationTiming?(t=Z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Z.g&&Z.g.Ga&&Z.g.Ga()&&Z.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var jN=10;function yb(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function _b(t){return t.h?1:t.g?t.g.size:0}function Uh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Rd(t,e){t.g?t.g.add(e):t.h=e}function vb(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}gb.prototype.cancel=function(){if(this.i=bb(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function bb(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return gd(t.i)}function Nd(){}Nd.prototype.stringify=function(t){return Z.JSON.stringify(t,void 0)};Nd.prototype.parse=function(t){return Z.JSON.parse(t,void 0)};function zN(){this.g=new Nd}function HN(t,e,n){const i=n||"";try{hb(t,function(r,s){let o=r;Ko(r)&&(o=Td(r)),e.push(i+s+"="+encodeURIComponent(o))})}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function KN(t,e){const n=new _c;if(Z.Image){const i=new Image;i.onload=Ea(Ia,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Ea(Ia,n,i,"TestLoadImage: error",!1,e),i.onabort=Ea(Ia,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Ea(Ia,n,i,"TestLoadImage: timeout",!1,e),Z.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function Ia(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch{}}function Xo(t){this.l=t.ac||null,this.j=t.jb||!1}gt(Xo,Sd);Xo.prototype.g=function(){return new Ic(this.l,this.j)};Xo.prototype.i=function(t){return function(){return t}}({});function Ic(t,e){lt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=xd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}gt(Ic,lt);var xd=0;j=Ic.prototype;j.open=function(t,e){if(this.readyState!=xd)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Eo(this)};j.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Z).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};j.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Jo(this)),this.readyState=xd};j.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Eo(this)),this.g&&(this.readyState=3,Eo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;wb(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function wb(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}j.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Jo(this):Eo(this),this.readyState==3&&wb(this)}};j.Va=function(t){this.g&&(this.response=this.responseText=t,Jo(this))};j.Ua=function(t){this.g&&(this.response=t,Jo(this))};j.ga=function(){this.g&&Jo(this)};function Jo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Eo(t)}j.setRequestHeader=function(t,e){this.v.append(t,e)};j.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};j.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Eo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ic.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var WN=Z.JSON.parse;function We(t){lt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Eb,this.K=this.L=!1}gt(We,lt);var Eb="",qN=/^https?$/i,GN=["POST","PUT"];j=We.prototype;j.Ka=function(t){this.L=t};j.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ph.g(),this.C=this.u?_g(this.u):_g(Ph),this.g.onreadystatechange=Ct(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){wg(this,s);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const s of i.keys())n.set(s,i.get(s));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),r=Z.FormData&&t instanceof Z.FormData,!(0<=U0(GN,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Cb(this),0<this.B&&((this.K=YN(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ct(this.qa,this)):this.A=Cd(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){wg(this,s)}};function YN(t){return Jr&&fN()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}j.qa=function(){typeof md<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,mt(this,"timeout"),this.abort(8))};function wg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Tb(t),Cc(t)}function Tb(t){t.D||(t.D=!0,mt(t,"complete"),mt(t,"error"))}j.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,mt(this,"complete"),mt(this,"abort"),Cc(this))};j.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Cc(this,!0)),We.X.M.call(this)};j.Ha=function(){this.s||(this.F||this.v||this.l?Ib(this):this.fb())};j.fb=function(){Ib(this)};function Ib(t){if(t.h&&typeof md<"u"&&(!t.C[1]||zn(t)!=4||t.aa()!=2)){if(t.v&&zn(t)==4)Cd(t.Ha,0,t);else if(mt(t,"readystatechange"),zn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var r=String(t.H).match(fb)[1]||null;if(!r&&Z.self&&Z.self.location){var s=Z.self.location.protocol;r=s.substr(0,s.length-1)}i=!qN.test(r?r.toLowerCase():"")}n=i}if(n)mt(t,"complete"),mt(t,"success");else{t.m=6;try{var o=2<zn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Tb(t)}}finally{Cc(t)}}}}function Cc(t,e){if(t.g){Cb(t);const n=t.g,i=t.C[0]?vl:null;t.g=null,t.C=null,e||mt(t,"ready");try{n.onreadystatechange=i}catch{}}}function Cb(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Z.clearTimeout(t.A),t.A=null)}function zn(t){return t.g?t.g.readyState:0}j.aa=function(){try{return 2<zn(this)?this.g.status:-1}catch{return-1}};j.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};j.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),WN(e)}};function Eg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Eb:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}j.Ea=function(){return this.m};j.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Sb(t){let e="";return _d(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function Dd(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=Sb(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ue(t,e,n))}function Os(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ab(t){this.Ca=0,this.i=[],this.j=new _c,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Os("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Os("baseRetryDelayMs",5e3,t),this.bb=Os("retryDelaySeedMs",1e4,t),this.$a=Os("forwardChannelMaxRetries",2,t),this.ta=Os("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new gb(t&&t.concurrentRequestLimit),this.Fa=new zN,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}j=Ab.prototype;j.ma=8;j.G=1;function Od(t){if(kb(t),t.G==3){var e=t.U++,n=Yn(t.F);Ue(n,"SID",t.I),Ue(n,"RID",e),Ue(n,"TYPE","terminate"),Zo(t,n),e=new Yo(t,t.j,e,void 0),e.K=2,e.v=Tc(Yn(n)),n=!1,Z.navigator&&Z.navigator.sendBeacon&&(n=Z.navigator.sendBeacon(e.v.toString(),"")),!n&&Z.Image&&(new Image().src=e.v,n=!0),n||(e.g=Lb(e.l,null),e.g.da(e.v)),e.F=Date.now(),Qo(e)}Pb(t)}function Sc(t){t.g&&(Md(t),t.g.cancel(),t.g=null)}function kb(t){Sc(t),t.u&&(Z.clearTimeout(t.u),t.u=null),Cl(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Z.clearTimeout(t.m),t.m=null)}function Ac(t){yb(t.h)||t.m||(t.m=!0,Q0(t.Ja,t),t.C=0)}function QN(t,e){return _b(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=qo(Ct(t.Ja,t,e),Ob(t,t.C)),t.C++,!0)}j.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Yo(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=j0(s),z0(s,this.S)):s=this.S),this.o!==null||this.N||(r.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var i=this.i[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Rb(this,r,e),n=Yn(this.F),Ue(n,"RID",t),Ue(n,"CVER",22),this.D&&Ue(n,"X-HTTP-Session-Id",this.D),Zo(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(Sb(s)))+"&"+e:this.o&&Dd(n,this.o,s)),Rd(this.h,r),this.Ya&&Ue(n,"TYPE","init"),this.O?(Ue(n,"$req",e),Ue(n,"SID","null"),r.Z=!0,Lh(r,n,null)):Lh(r,n,e),this.G=2}}else this.G==3&&(t?Tg(this,t):this.i.length==0||yb(this.h)||Tg(this))};function Tg(t,e){var n;e?n=e.m:n=t.U++;const i=Yn(t.F);Ue(i,"SID",t.I),Ue(i,"RID",n),Ue(i,"AID",t.T),Zo(t,i),t.o&&t.s&&Dd(i,t.o,t.s),n=new Yo(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Rb(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Rd(t.h,n),Lh(n,i,e)}function Zo(t,e){t.ia&&_d(t.ia,function(n,i){Ue(e,i,n)}),t.l&&hb({},function(n,i){Ue(e,i,n)})}function Rb(t,e,n){n=Math.min(t.i.length,n);var i=t.l?Ct(t.l.Ra,t.l,t):null;e:{var r=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=r[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let c=r[l].h;const u=r[l].g;if(c-=s,0>c)s=Math.max(0,r[l].h-100),a=!1;else try{HN(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,i}function Nb(t){t.g||t.u||(t.Z=1,Q0(t.Ia,t),t.A=0)}function Pd(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=qo(Ct(t.Ia,t),Ob(t,t.A)),t.A++,!0)}j.Ia=function(){if(this.u=null,xb(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=qo(Ct(this.eb,this),t)}};j.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Rt(10),Sc(this),xb(this))};function Md(t){t.B!=null&&(Z.clearTimeout(t.B),t.B=null)}function xb(t){t.g=new Yo(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Yn(t.sa);Ue(e,"RID","rpc"),Ue(e,"SID",t.I),Ue(e,"CI",t.L?"0":"1"),Ue(e,"AID",t.T),Ue(e,"TYPE","xmlhttp"),Zo(t,e),t.o&&t.s&&Dd(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Tc(Yn(e)),n.s=null,n.P=!0,ab(n,t)}j.cb=function(){this.v!=null&&(this.v=null,Sc(this),Pd(this),Rt(19))};function Cl(t){t.v!=null&&(Z.clearTimeout(t.v),t.v=null)}function Db(t,e){var n=null;if(t.g==e){Cl(t),Md(t),t.g=null;var i=2}else if(Uh(t.h,e))n=e.D,vb(t.h,e),i=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;i=vc(),mt(i,new ib(i,n)),Ac(t)}else Nb(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(i==1&&QN(t,e)||i==2&&Pd(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Wi(t,5);break;case 4:Wi(t,10);break;case 3:Wi(t,6);break;default:Wi(t,2)}}}function Ob(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Wi(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var i=Ct(t.kb,t);n||(n=new Zi("//www.google.com/images/cleardot.gif"),Z.location&&Z.location.protocol=="http"||Tl(n,"https"),Tc(n)),KN(n.toString(),i)}else Rt(2);t.G=0,t.l&&t.l.va(e),Pb(t),kb(t)}j.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Rt(2)):(this.j.info("Failed to ping google.com"),Rt(1))};function Pb(t){if(t.G=0,t.la=[],t.l){const e=bb(t.h);(e.length!=0||t.i.length!=0)&&(fg(t.la,e),fg(t.la,t.i),t.h.i.length=0,gd(t.i),t.i.length=0),t.l.ua()}}function Mb(t,e,n){var i=n instanceof Zi?Yn(n):new Zi(n,void 0);if(i.g!="")e&&(i.g=e+"."+i.g),Il(i,i.m);else{var r=Z.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new Zi(null,void 0);i&&Tl(s,i),e&&(s.g=e),r&&Il(s,r),n&&(s.l=n),i=s}return n=t.D,e=t.za,n&&e&&Ue(i,n,e),Ue(i,"VER",t.ma),Zo(t,i),i}function Lb(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new We(new Xo({jb:!0})):new We(t.ra),e.Ka(t.H),e}function Fb(){}j=Fb.prototype;j.xa=function(){};j.wa=function(){};j.va=function(){};j.ua=function(){};j.Ra=function(){};function Sl(){if(Jr&&!(10<=Number(dN)))throw Error("Environmental error: no available transport.")}Sl.prototype.g=function(t,e){return new Yt(t,e)};function Yt(t,e){lt.call(this),this.g=new Ab(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!bl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!bl(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new bs(this)}gt(Yt,lt);Yt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Rt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Mb(t,null,t.V),Ac(t)};Yt.prototype.close=function(){Od(this.g)};Yt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Td(t),t=n);e.i.push(new BN(e.ab++,t)),e.G==3&&Ac(e)};Yt.prototype.M=function(){this.g.l=null,delete this.j,Od(this.g),delete this.g,Yt.X.M.call(this)};function Ub(t){Ad.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}gt(Ub,Ad);function Vb(){kd.call(this),this.status=1}gt(Vb,kd);function bs(t){this.g=t}gt(bs,Fb);bs.prototype.xa=function(){mt(this.g,"a")};bs.prototype.wa=function(t){mt(this.g,new Ub(t))};bs.prototype.va=function(t){mt(this.g,new Vb)};bs.prototype.ua=function(){mt(this.g,"b")};Sl.prototype.createWebChannel=Sl.prototype.g;Yt.prototype.send=Yt.prototype.u;Yt.prototype.open=Yt.prototype.m;Yt.prototype.close=Yt.prototype.close;bc.NO_ERROR=0;bc.TIMEOUT=8;bc.HTTP_ERROR=6;rb.COMPLETE="complete";sb.EventType=Go;Go.OPEN="a";Go.CLOSE="b";Go.ERROR="c";Go.MESSAGE="d";lt.prototype.listen=lt.prototype.N;We.prototype.listenOnce=We.prototype.O;We.prototype.getLastError=We.prototype.Oa;We.prototype.getLastErrorCode=We.prototype.Ea;We.prototype.getStatus=We.prototype.aa;We.prototype.getResponseJson=We.prototype.Sa;We.prototype.getResponseText=We.prototype.fa;We.prototype.send=We.prototype.da;We.prototype.setWithCredentials=We.prototype.Ka;var XN=function(){return new Sl},JN=function(){return vc()},ku=bc,ZN=rb,ex=yr,Ig={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},tx=Xo,Ca=sb,nx=We;const Cg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ws="9.20.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=new Uo("@firebase/firestore");function Sg(){return lr.logLevel}function z(t,...e){if(lr.logLevel<=_e.DEBUG){const n=e.map(Ld);lr.debug(`Firestore (${ws}): ${t}`,...n)}}function Qn(t,...e){if(lr.logLevel<=_e.ERROR){const n=e.map(Ld);lr.error(`Firestore (${ws}): ${t}`,...n)}}function Al(t,...e){if(lr.logLevel<=_e.WARN){const n=e.map(Ld);lr.warn(`Firestore (${ws}): ${t}`,...n)}}function Ld(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function J(t="Unexpected state"){const e=`FIRESTORE (${ws}) INTERNAL ASSERTION FAILED: `+t;throw Qn(e),new Error(e)}function Me(t,e){t||J()}function re(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends ii{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ix{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(_t.UNAUTHENTICATED))}shutdown(){}}class rx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class sx{constructor(e){this.t=e,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const r=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let s=new Kn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Kn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Kn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Me(typeof i.accessToken=="string"),new $b(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Me(e===null||typeof e=="string"),new _t(e)}}class ox{constructor(e,n,i){this.h=e,this.l=n,this.m=i,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class ax{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new ox(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class lx{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cx{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const i=s=>{s.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>i(s))};const r=s=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?r(s):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Me(typeof n.token=="string"),this.T=n.token,new lx(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Bb{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const r=ux(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=e.charAt(r[s]%e.length))}return i}}function be(t,e){return t<e?-1:t>e?1:0}function Zr(t,e,n){return t.length===e.length&&t.every((i,r)=>n(i,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new Je(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new Je(0,0))}static max(){return new te(new Je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,n,i){n===void 0?n=0:n>e.length&&J(),i===void 0?i=e.length-n:i>e.length-n&&J(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return To.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof To?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let r=0;r<i;r++){const s=e.get(r),o=n.get(r);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ve extends To{construct(e,n,i){return new Ve(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new q(A.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(r=>r.length>0))}return new Ve(n)}static emptyPath(){return new Ve([])}}const hx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Tt extends To{construct(e,n,i){return new Tt(e,n,i)}static isValidIdentifier(e){return hx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Tt(["__name__"])}static fromServerFormat(e){const n=[];let i="",r=0;const s=()=>{if(i.length===0)throw new q(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new q(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new q(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(i+=a,r++):(s(),r++)}if(s(),o)throw new q(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Tt(n)}static emptyPath(){return new Tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(Ve.fromString(e))}static fromName(e){return new Y(Ve.fromString(e).popFirst(5))}static empty(){return new Y(Ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new Ve(e.slice()))}}function fx(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,r=te.fromTimestamp(i===1e9?new Je(n+1,0):new Je(n,i));return new wi(r,Y.empty(),e)}function dx(t){return new wi(t.readTime,t.key,-1)}class wi{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new wi(te.min(),Y.empty(),-1)}static max(){return new wi(te.max(),Y.empty(),-1)}}function px(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:be(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function ea(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==mx)throw t;z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((i,r)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(i,r)},this.catchCallback=s=>{this.wrapFailure(n,s).next(i,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,i)=>{n(e)})}static reject(e){return new R((n,i)=>{i(e)})}static waitFor(e){return new R((n,i)=>{let r=0,s=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++s,o&&s===r&&n()},l=>i(l))}),o=!0,s===r&&n()})}static or(e){let n=R.resolve(!1);for(const i of e)n=n.next(r=>r?R.resolve(r):i());return n}static forEach(e,n){const i=[];return e.forEach((r,s)=>{i.push(n.call(this,r,s))}),this.waitFor(i)}static mapArray(e,n){return new R((i,r)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===s&&i(o)},u=>r(u))}})}static doWhile(e,n){return new R((i,r)=>{const s=()=>{e()===!0?n().next(()=>{s()},r):i()};s()})}}function ta(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Fd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ot(i),this.ut=i=>n.writeSequenceNumber(i))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Fd.ct=-1;function kc(t){return t==null}function kl(t){return t===0&&1/t==-1/0}function yx(t){return typeof t=="number"&&Number.isInteger(t)&&!kl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function _r(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function jb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n){this.comparator=e,this.root=n||ct.EMPTY}insert(e,n){return new nt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ct.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(e,i.key);if(r===0)return n+i.left.size;r<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Sa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Sa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Sa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Sa(this.root,e,this.comparator,!0)}}class Sa{constructor(e,n,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?i(e.key,n):1,n&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ct{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i??ct.RED,this.left=r??ct.EMPTY,this.right=s??ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,r,s){return new ct(e??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return ct.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(t,e,n,i,r){return this}insert(t,e,n){return new ct(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new kg(this.data.getIterator())}getIteratorFrom(e){return new kg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof et)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new et(this.comparator);return n.data=e,n}}class kg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.fields=e,e.sort(Tt.comparator)}static empty(){return new Ht([])}unionWith(e){let n=new et(Tt.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new Ht(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Zr(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class At{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new _x("Invalid base64 string: "+r):r}}(e);return new At(n)}static fromUint8Array(e){const n=function(i){let r="";for(let s=0;s<i.length;++s)r+=String.fromCharCode(i[s]);return r}(e);return new At(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}At.EMPTY_BYTE_STRING=new At("");const vx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ei(t){if(Me(!!t),typeof t=="string"){let e=0;const n=vx.exec(t);if(Me(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Xe(t.seconds),nanos:Xe(t.nanos)}}function Xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function es(t){return typeof t=="string"?At.fromBase64String(t):At.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Hb(t){const e=t.mapValue.fields.__previous_value__;return zb(e)?Hb(e):e}function Io(t){const e=Ei(t.mapValue.fields.__local_write_time__.timestampValue);return new Je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(e,n,i,r,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Co{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Co("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Co&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function cr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?zb(t)?4:wx(t)?9007199254740991:10:J()}function xn(t,e){if(t===e)return!0;const n=cr(t);if(n!==cr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Io(t).isEqual(Io(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const s=Ei(i.timestampValue),o=Ei(r.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,r){return es(i.bytesValue).isEqual(es(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,r){return Xe(i.geoPointValue.latitude)===Xe(r.geoPointValue.latitude)&&Xe(i.geoPointValue.longitude)===Xe(r.geoPointValue.longitude)}(t,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return Xe(i.integerValue)===Xe(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const s=Xe(i.doubleValue),o=Xe(r.doubleValue);return s===o?kl(s)===kl(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Zr(t.arrayValue.values||[],e.arrayValue.values||[],xn);case 10:return function(i,r){const s=i.mapValue.fields||{},o=r.mapValue.fields||{};if(Ag(s)!==Ag(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!xn(s[a],o[a])))return!1;return!0}(t,e);default:return J()}}function So(t,e){return(t.values||[]).find(n=>xn(n,e))!==void 0}function ts(t,e){if(t===e)return 0;const n=cr(t),i=cr(e);if(n!==i)return be(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return be(t.booleanValue,e.booleanValue);case 2:return function(r,s){const o=Xe(r.integerValue||r.doubleValue),a=Xe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Rg(t.timestampValue,e.timestampValue);case 4:return Rg(Io(t),Io(e));case 5:return be(t.stringValue,e.stringValue);case 6:return function(r,s){const o=es(r),a=es(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,s){const o=r.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=be(o[l],a[l]);if(c!==0)return c}return be(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,s){const o=be(Xe(r.latitude),Xe(s.latitude));return o!==0?o:be(Xe(r.longitude),Xe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,s){const o=r.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=ts(o[l],a[l]);if(c)return c}return be(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,s){if(r===Aa.mapValue&&s===Aa.mapValue)return 0;if(r===Aa.mapValue)return 1;if(s===Aa.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),l=s.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=be(a[u],c[u]);if(h!==0)return h;const f=ts(o[a[u]],l[c[u]]);if(f!==0)return f}return be(a.length,c.length)}(t.mapValue,e.mapValue);default:throw J()}}function Rg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return be(t,e);const n=Ei(t),i=Ei(e),r=be(n.seconds,i.seconds);return r!==0?r:be(n.nanos,i.nanos)}function ns(t){return Vh(t)}function Vh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const r=Ei(i);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?es(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Y.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let r="[",s=!0;for(const o of i.values||[])s?s=!1:r+=",",r+=Vh(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(i){const r=Object.keys(i.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Vh(i.fields[a])}`;return s+"}"}(t.mapValue):J();var e,n}function $h(t){return!!t&&"integerValue"in t}function Ud(t){return!!t&&"arrayValue"in t}function Ng(t){return!!t&&"nullValue"in t}function xg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function qa(t){return!!t&&"mapValue"in t}function Qs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return _r(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=Qs(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Qs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function wx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.value=e}static empty(){return new Mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!qa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qs(n)}setAll(e){let n=Tt.emptyPath(),i={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,r),i={},r=[],n=a.popLast()}o?i[a.lastSegment()]=Qs(o):r.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,i,r)}delete(e){const n=this.field(e.popLast());qa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return xn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let r=n.mapValue.fields[e.get(i)];qa(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,i){_r(n,(r,s)=>e[r]=s);for(const r of i)delete e[r]}clone(){return new Mt(Qs(this.value))}}function Kb(t){const e=[];return _r(t.fields,(n,i)=>{const r=new Tt([n]);if(qa(i)){const s=Kb(i.mapValue).fields;if(s.length===0)e.push(r);else for(const o of s)e.push(r.child(o))}else e.push(r)}),new Ht(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,n,i,r,s,o,a){this.key=e,this.documentType=n,this.version=i,this.readTime=r,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new wt(e,0,te.min(),te.min(),te.min(),Mt.empty(),0)}static newFoundDocument(e,n,i,r){return new wt(e,1,n,te.min(),i,r,0)}static newNoDocument(e,n){return new wt(e,2,n,te.min(),te.min(),Mt.empty(),0)}static newUnknownDocument(e,n){return new wt(e,3,n,te.min(),te.min(),Mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof wt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Rl{constructor(e,n){this.position=e,this.inclusive=n}}function Dg(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(s.field.isKeyField()?i=Y.comparator(Y.fromName(o.referenceValue),n.key):i=ts(o,n.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return i}function Og(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!xn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Xs{constructor(e,n="asc"){this.field=e,this.dir=n}}function Ex(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Wb{}class Ze extends Wb{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new Ix(e,n,i):n==="array-contains"?new Ax(e,i):n==="in"?new kx(e,i):n==="not-in"?new Rx(e,i):n==="array-contains-any"?new Nx(e,i):new Ze(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new Cx(e,i):new Sx(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ts(n,this.value)):n!==null&&cr(this.value)===cr(n)&&this.matchesComparison(ts(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Dn extends Wb{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Dn(e,n)}matches(e){return qb(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function qb(t){return t.op==="and"}function Gb(t){return Tx(t)&&qb(t)}function Tx(t){for(const e of t.filters)if(e instanceof Dn)return!1;return!0}function Bh(t){if(t instanceof Ze)return t.field.canonicalString()+t.op.toString()+ns(t.value);if(Gb(t))return t.filters.map(e=>Bh(e)).join(",");{const e=t.filters.map(n=>Bh(n)).join(",");return`${t.op}(${e})`}}function Yb(t,e){return t instanceof Ze?function(n,i){return i instanceof Ze&&n.op===i.op&&n.field.isEqual(i.field)&&xn(n.value,i.value)}(t,e):t instanceof Dn?function(n,i){return i instanceof Dn&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((r,s,o)=>r&&Yb(s,i.filters[o]),!0):!1}(t,e):void J()}function Qb(t){return t instanceof Ze?function(e){return`${e.field.canonicalString()} ${e.op} ${ns(e.value)}`}(t):t instanceof Dn?function(e){return e.op.toString()+" {"+e.getFilters().map(Qb).join(" ,")+"}"}(t):"Filter"}class Ix extends Ze{constructor(e,n,i){super(e,n,i),this.key=Y.fromName(i.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class Cx extends Ze{constructor(e,n){super(e,"in",n),this.keys=Xb("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Sx extends Ze{constructor(e,n){super(e,"not-in",n),this.keys=Xb("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Xb(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>Y.fromName(i.referenceValue))}class Ax extends Ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ud(n)&&So(n.arrayValue,this.value)}}class kx extends Ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&So(this.value.arrayValue,n)}}class Rx extends Ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(So(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!So(this.value.arrayValue,n)}}class Nx extends Ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ud(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>So(this.value.arrayValue,i))}}/**
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
 */class xx{constructor(e,n=null,i=[],r=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=r,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function Pg(t,e=null,n=[],i=[],r=null,s=null,o=null){return new xx(t,e,n,i,r,s,o)}function Vd(t){const e=re(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>Bh(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),kc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>ns(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>ns(i)).join(",")),e.ft=n}return e.ft}function $d(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Ex(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Yb(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Og(t.startAt,e.startAt)&&Og(t.endAt,e.endAt)}function jh(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,n=null,i=[],r=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this.wt=null,this.startAt,this.endAt}}function Dx(t,e,n,i,r,s,o,a){return new Rc(t,e,n,i,r,s,o,a)}function Nc(t){return new Rc(t)}function Mg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Ox(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Px(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Mx(t){return t.collectionGroup!==null}function zr(t){const e=re(t);if(e.dt===null){e.dt=[];const n=Px(e),i=Ox(e);if(n!==null&&i===null)n.isKeyField()||e.dt.push(new Xs(n)),e.dt.push(new Xs(Tt.keyField(),"asc"));else{let r=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(r=!0);if(!r){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Xs(Tt.keyField(),s))}}}return e.dt}function Xn(t){const e=re(t);if(!e.wt)if(e.limitType==="F")e.wt=Pg(e.path,e.collectionGroup,zr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of zr(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Xs(s.field,o))}const i=e.endAt?new Rl(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Rl(e.startAt.position,e.startAt.inclusive):null;e.wt=Pg(e.path,e.collectionGroup,n,e.filters,e.limit,i,r)}return e.wt}function zh(t,e,n){return new Rc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function xc(t,e){return $d(Xn(t),Xn(e))&&t.limitType===e.limitType}function Jb(t){return`${Vd(Xn(t))}|lt:${t.limitType}`}function Hh(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>Qb(i)).join(", ")}]`),kc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>ns(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>ns(i)).join(",")),`Target(${n})`}(Xn(t))}; limitType=${t.limitType})`}function Dc(t,e){return e.isFoundDocument()&&function(n,i){const r=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):Y.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,i){for(const r of zr(n))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const r of n.filters)if(!r.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!function(r,s,o){const a=Dg(r,s,o);return r.inclusive?a<=0:a<0}(n.startAt,zr(n),i)||n.endAt&&!function(r,s,o){const a=Dg(r,s,o);return r.inclusive?a>=0:a>0}(n.endAt,zr(n),i))}(t,e)}function Lx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Zb(t){return(e,n)=>{let i=!1;for(const r of zr(t)){const s=Fx(r,e,n);if(s!==0)return s;i=i||r.field.isKeyField()}return 0}}function Fx(t,e,n){const i=t.field.isKeyField()?Y.comparator(e.key,n.key):function(r,s,o){const a=s.data.field(r),l=o.data.field(r);return a!==null&&l!==null?ts(a,l):J()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return J()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[r,s]of i)if(this.equalsFn(r,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),r=this.inner[i];if(r===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return i.length===1?delete this.inner[n]:i.splice(r,1),this.innerSize--,!0;return!1}forEach(e){_r(this.inner,(n,i)=>{for(const[r,s]of i)e(r,s)})}isEmpty(){return jb(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ux=new nt(Y.comparator);function Jn(){return Ux}const e1=new nt(Y.comparator);function Vs(...t){let e=e1;for(const n of t)e=e.insert(n.key,n);return e}function t1(t){let e=e1;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function qi(){return Js()}function n1(){return Js()}function Js(){return new Es(t=>t.toString(),(t,e)=>t.isEqual(e))}const Vx=new nt(Y.comparator),$x=new et(Y.comparator);function ue(...t){let e=$x;for(const n of t)e=e.add(n);return e}const Bx=new et(be);function i1(){return Bx}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r1(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:kl(e)?"-0":e}}function s1(t){return{integerValue:""+t}}function jx(t,e){return yx(e)?s1(e):r1(t,e)}/**
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
 */class Oc{constructor(){this._=void 0}}function zx(t,e,n){return t instanceof Nl?function(i,r){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&(s.fields.__previous_value__=r),{mapValue:s}}(n,e):t instanceof Ao?a1(t,e):t instanceof ko?l1(t,e):function(i,r){const s=o1(i,r),o=Lg(s)+Lg(i._t);return $h(s)&&$h(i._t)?s1(o):r1(i.serializer,o)}(t,e)}function Hx(t,e,n){return t instanceof Ao?a1(t,e):t instanceof ko?l1(t,e):n}function o1(t,e){return t instanceof xl?$h(n=e)||function(i){return!!i&&"doubleValue"in i}(n)?e:{integerValue:0}:null;var n}class Nl extends Oc{}class Ao extends Oc{constructor(e){super(),this.elements=e}}function a1(t,e){const n=c1(e);for(const i of t.elements)n.some(r=>xn(r,i))||n.push(i);return{arrayValue:{values:n}}}class ko extends Oc{constructor(e){super(),this.elements=e}}function l1(t,e){let n=c1(e);for(const i of t.elements)n=n.filter(r=>!xn(r,i));return{arrayValue:{values:n}}}class xl extends Oc{constructor(e,n){super(),this.serializer=e,this._t=n}}function Lg(t){return Xe(t.integerValue||t.doubleValue)}function c1(t){return Ud(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Kx(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof Ao&&i instanceof Ao||n instanceof ko&&i instanceof ko?Zr(n.elements,i.elements,xn):n instanceof xl&&i instanceof xl?xn(n._t,i._t):n instanceof Nl&&i instanceof Nl}(t.transform,e.transform)}class Wx{constructor(e,n){this.version=e,this.transformResults=n}}class pn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new pn}static exists(e){return new pn(void 0,e)}static updateTime(e){return new pn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ga(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Pc{}function u1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Bd(t.key,pn.none()):new na(t.key,t.data,pn.none());{const n=t.data,i=Mt.empty();let r=new et(Tt.comparator);for(let s of e.fields)if(!r.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?i.delete(s):i.set(s,o),r=r.add(s)}return new Ni(t.key,i,new Ht(r.toArray()),pn.none())}}function qx(t,e,n){t instanceof na?function(i,r,s){const o=i.value.clone(),a=Ug(i.fieldTransforms,r,s.transformResults);o.setAll(a),r.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ni?function(i,r,s){if(!Ga(i.precondition,r))return void r.convertToUnknownDocument(s.version);const o=Ug(i.fieldTransforms,r,s.transformResults),a=r.data;a.setAll(h1(i)),a.setAll(o),r.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(i,r,s){r.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Zs(t,e,n,i){return t instanceof na?function(r,s,o,a){if(!Ga(r.precondition,s))return o;const l=r.value.clone(),c=Vg(r.fieldTransforms,a,s);return l.setAll(c),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,i):t instanceof Ni?function(r,s,o,a){if(!Ga(r.precondition,s))return o;const l=Vg(r.fieldTransforms,a,s),c=s.data;return c.setAll(h1(r)),c.setAll(l),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,i):function(r,s,o){return Ga(r.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function Gx(t,e){let n=null;for(const i of t.fieldTransforms){const r=e.data.field(i.field),s=o1(i.transform,r||null);s!=null&&(n===null&&(n=Mt.empty()),n.set(i.field,s))}return n||null}function Fg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Zr(n,i,(r,s)=>Kx(r,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class na extends Pc{constructor(e,n,i,r=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ni extends Pc{constructor(e,n,i,r,s=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function h1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function Ug(t,e,n){const i=new Map;Me(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,Hx(o,a,n[r]))}return i}function Vg(t,e,n){const i=new Map;for(const r of t){const s=r.transform,o=n.data.field(r.field);i.set(r.field,zx(s,o,e))}return i}class Bd extends Pc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Yx extends Pc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qx{constructor(e,n,i,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(e.key)&&qx(s,e,i[r])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=Zs(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=Zs(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=n1();return this.mutations.forEach(r=>{const s=e.get(r.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(r.key)?null:a;const l=u1(o,a);l!==null&&i.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(te.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ue())}isEqual(e){return this.batchId===e.batchId&&Zr(this.mutations,e.mutations,(n,i)=>Fg(n,i))&&Zr(this.baseMutations,e.baseMutations,(n,i)=>Fg(n,i))}}class jd{constructor(e,n,i,r){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=r}static from(e,n,i){Me(e.mutations.length===i.length);let r=Vx;const s=e.mutations;for(let o=0;o<s.length;o++)r=r.insert(s[o].key,i[o].version);return new jd(e,n,i,r)}}/**
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
 */var Qe,de;function Zx(t){switch(t){default:return J();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function f1(t){if(t===void 0)return Qn("GRPC error has no .code"),A.UNKNOWN;switch(t){case Qe.OK:return A.OK;case Qe.CANCELLED:return A.CANCELLED;case Qe.UNKNOWN:return A.UNKNOWN;case Qe.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case Qe.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case Qe.INTERNAL:return A.INTERNAL;case Qe.UNAVAILABLE:return A.UNAVAILABLE;case Qe.UNAUTHENTICATED:return A.UNAUTHENTICATED;case Qe.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case Qe.NOT_FOUND:return A.NOT_FOUND;case Qe.ALREADY_EXISTS:return A.ALREADY_EXISTS;case Qe.PERMISSION_DENIED:return A.PERMISSION_DENIED;case Qe.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case Qe.ABORTED:return A.ABORTED;case Qe.OUT_OF_RANGE:return A.OUT_OF_RANGE;case Qe.UNIMPLEMENTED:return A.UNIMPLEMENTED;case Qe.DATA_LOSS:return A.DATA_LOSS;default:return J()}}(de=Qe||(Qe={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class zd{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ka}static getOrCreateInstance(){return ka===null&&(ka=new zd),ka}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let ka=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,n,i,r,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const r=new Map;return r.set(e,ia.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new Mc(te.min(),r,i1(),Jn(),ue())}}class ia{constructor(e,n,i,r,s){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new ia(i,n,ue(),ue(),ue())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,n,i,r){this.It=e,this.removedTargetIds=n,this.key=i,this.Tt=r}}class d1{constructor(e,n){this.targetId=e,this.Et=n}}class p1{constructor(e,n,i=At.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=r}}class $g{constructor(){this.At=0,this.Rt=jg(),this.vt=At.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=ue(),n=ue(),i=ue();return this.Rt.forEach((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:i=i.add(r);break;default:J()}}),new ia(this.vt,this.bt,e,n,i)}xt(){this.Pt=!1,this.Rt=jg()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class eD{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=Jn(),this.qt=Bg(),this.Ut=new et(be)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const i=this.jt(n);switch(e.state){case 0:this.Wt(n)&&i.Dt(e.resumeToken);break;case 1:i.$t(),i.Vt||i.xt(),i.Dt(e.resumeToken);break;case 2:i.$t(),i.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(i.Mt(),i.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),i.Dt(e.resumeToken));break;default:J()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((i,r)=>{this.Wt(r)&&n(r)})}Jt(e){var n;const i=e.targetId,r=e.Et.count,s=this.Yt(i);if(s){const o=s.target;if(jh(o))if(r===0){const a=new Y(o.path);this.Qt(i,a,wt.newNoDocument(a,te.min()))}else Me(r===1);else{const a=this.Zt(i);a!==r&&(this.Ht(i),this.Ut=this.Ut.add(i),(n=zd.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((s,o)=>{const a=this.Yt(o);if(a){if(s.current&&jh(a.target)){const l=new Y(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,wt.newNoDocument(l,e))}s.St&&(n.set(o,s.Ct()),s.xt())}});let i=ue();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Yt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(i=i.add(s))}),this.Lt.forEach((s,o)=>o.setReadTime(e));const r=new Mc(e,n,this.Ut,this.Lt,i);return this.Lt=Jn(),this.qt=Bg(),this.Ut=new et(be),r}Gt(e,n){if(!this.Wt(e))return;const i=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,i),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,i){if(!this.Wt(e))return;const r=this.jt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),i&&(this.Lt=this.Lt.insert(n,i))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new $g,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new et(be),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||z("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new $g),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function Bg(){return new nt(Y.comparator)}function jg(){return new nt(Y.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tD=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),nD=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),iD=(()=>({and:"AND",or:"OR"}))();class rD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Dl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function m1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function sD(t,e){return Dl(t,e.toTimestamp())}function Sn(t){return Me(!!t),te.fromTimestamp(function(e){const n=Ei(e);return new Je(n.seconds,n.nanos)}(t))}function Hd(t,e){return function(n){return new Ve(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function g1(t){const e=Ve.fromString(t);return Me(b1(e)),e}function Kh(t,e){return Hd(t.databaseId,e.path)}function Ru(t,e){const n=g1(e);if(n.get(1)!==t.databaseId.projectId)throw new q(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(y1(n))}function Wh(t,e){return Hd(t.databaseId,e)}function oD(t){const e=g1(t);return e.length===4?Ve.emptyPath():y1(e)}function qh(t){return new Ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function y1(t){return Me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function zg(t,e,n){return{name:Kh(t,e),fields:n.value.mapValue.fields}}function aD(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:J()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=function(l,c){return l.useProto3Json?(Me(c===void 0||typeof c=="string"),At.fromBase64String(c||"")):(Me(c===void 0||c instanceof Uint8Array),At.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?A.UNKNOWN:f1(l.code);return new q(c,l.message||"")}(o);n=new p1(i,r,s,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=Ru(t,i.document.name),s=Sn(i.document.updateTime),o=i.document.createTime?Sn(i.document.createTime):te.min(),a=new Mt({mapValue:{fields:i.document.fields}}),l=wt.newFoundDocument(r,s,o,a),c=i.targetIds||[],u=i.removedTargetIds||[];n=new Ya(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=Ru(t,i.document),s=i.readTime?Sn(i.readTime):te.min(),o=wt.newNoDocument(r,s),a=i.removedTargetIds||[];n=new Ya([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=Ru(t,i.document),s=i.removedTargetIds||[];n=new Ya([],s,r,null)}else{if(!("filter"in e))return J();{e.filter;const i=e.filter;i.targetId;const r=i.count||0,s=new Jx(r),o=i.targetId;n=new d1(o,s)}}return n}function lD(t,e){let n;if(e instanceof na)n={update:zg(t,e.key,e.value)};else if(e instanceof Bd)n={delete:Kh(t,e.key)};else if(e instanceof Ni)n={update:zg(t,e.key,e.data),updateMask:yD(e.fieldMask)};else{if(!(e instanceof Yx))return J();n={verify:Kh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(r,s){const o=s.transform;if(o instanceof Nl)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ao)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ko)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof xl)return{fieldPath:s.field.canonicalString(),increment:o._t};throw J()}(0,i))),e.precondition.isNone||(n.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:sD(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:J()}(t,e.precondition)),n}function cD(t,e){return t&&t.length>0?(Me(e!==void 0),t.map(n=>function(i,r){let s=i.updateTime?Sn(i.updateTime):Sn(r);return s.isEqual(te.min())&&(s=Sn(r)),new Wx(s,i.transformResults||[])}(n,e))):[]}function uD(t,e){return{documents:[Wh(t,e.path)]}}function hD(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=Wh(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Wh(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(l){if(l.length!==0)return v1(Dn.create(l,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const s=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:Sr(u.field),direction:pD(u.dir)}}(c))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,c){return l.useProto3Json||kc(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function fD(t){let e=oD(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){Me(i===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=function(u){const h=_1(u);return h instanceof Dn&&Gb(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Xs(Ar(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,kc(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,f=u.values||[];return new Rl(f,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,f=u.values||[];return new Rl(f,h)}(n.endAt)),Dx(e,r,o,s,a,"F",l,c)}function dD(t,e){const n=function(i,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return J()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function _1(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ar(e.unaryFilter.field);return Ze.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Ar(e.unaryFilter.field);return Ze.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ar(e.unaryFilter.field);return Ze.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ar(e.unaryFilter.field);return Ze.create(s,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(t):t.fieldFilter!==void 0?function(e){return Ze.create(Ar(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Dn.create(e.compositeFilter.filters.map(n=>_1(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return J()}}(e.compositeFilter.op))}(t):J()}function pD(t){return tD[t]}function mD(t){return nD[t]}function gD(t){return iD[t]}function Sr(t){return{fieldPath:t.canonicalString()}}function Ar(t){return Tt.fromServerFormat(t.fieldPath)}function v1(t){return t instanceof Ze?function(e){if(e.op==="=="){if(xg(e.value))return{unaryFilter:{field:Sr(e.field),op:"IS_NAN"}};if(Ng(e.value))return{unaryFilter:{field:Sr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(xg(e.value))return{unaryFilter:{field:Sr(e.field),op:"IS_NOT_NAN"}};if(Ng(e.value))return{unaryFilter:{field:Sr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Sr(e.field),op:mD(e.op),value:e.value}}}(t):t instanceof Dn?function(e){const n=e.getFilters().map(i=>v1(i));return n.length===1?n[0]:{compositeFilter:{op:gD(e.op),filters:n}}}(t):J()}function yD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function b1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,n,i,r,s=te.min(),o=te.min(),a=At.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new er(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _D{constructor(e){this.se=e}}function vD(t){const e=fD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?zh(e,e.limit,"L"):e}/**
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
 */class bD{constructor(){this.He=new wD}addToCollectionParentIndex(e,n){return this.He.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(wi.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(wi.min())}updateCollectionGroup(e,n,i){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class wD{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n]||new et(Ve.comparator),s=!r.has(i);return this.index[n]=r.add(i),s}has(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n];return r&&r.has(i)}getEntries(e){return(this.index[e]||new et(Ve.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new is(0)}static bn(){return new is(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED{constructor(){this.changes=new Es(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,wt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?R.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ID{constructor(e,n,i,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=r}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(i=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(i!==null&&Zs(i.mutation,r,Ht.empty(),Je.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,ue()).next(()=>i))}getLocalViewOfDocuments(e,n,i=ue()){const r=qi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,i).next(s=>{let o=Vs();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const i=qi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,ue()))}populateOverlays(e,n,i){const r=[];return i.forEach(s=>{n.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(e,r).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,i,r){let s=Jn();const o=Js(),a=Js();return n.forEach((l,c)=>{const u=i.get(c.key);r.has(c.key)&&(u===void 0||u.mutation instanceof Ni)?s=s.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Zs(u.mutation,c,u.mutation.getFieldMask(),Je.now())):o.set(c.key,Ht.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new TD(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const i=Js();let r=new nt((o,a)=>o-a),s=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=i.get(l)||Ht.empty();u=a.applyToLocalView(c,u),i.set(l,u);const h=(r.get(a.batchId)||ue()).add(l);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=n1();u.forEach(f=>{if(!s.has(f)){const d=u1(n.get(f),i.get(f));d!==null&&h.set(f,d),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return R.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i){return function(r){return Y.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Mx(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i):this.getDocumentsMatchingCollectionQuery(e,n,i)}getNextDocuments(e,n,i,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,r).next(s=>{const o=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,r-s.size):R.resolve(qi());let a=-1,l=s;return o.next(c=>R.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?R.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,ue())).next(u=>({batchId:a,changes:t1(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(i=>{let r=Vs();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,i){const r=n.collectionGroup;let s=Vs();return this.indexManager.getCollectionParents(e,r).next(o=>R.forEach(o,a=>{const l=function(c,u){return new Rc(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,l,i).next(c=>{c.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(s=>(r=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,r))).next(s=>{r.forEach((a,l)=>{const c=l.getKey();s.get(c)===null&&(s=s.insert(c,wt.newInvalidDocument(c)))});let o=Vs();return s.forEach((a,l)=>{const c=r.get(a);c!==void 0&&Zs(c.mutation,l,Ht.empty(),Je.now()),Dc(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class SD{constructor(){this.overlays=new nt(Y.comparator),this.ts=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const i=qi();return R.forEach(n,r=>this.getOverlay(e,r).next(s=>{s!==null&&i.set(r,s)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((r,s)=>{this.re(e,n,s)}),R.resolve()}removeOverlaysForBatchId(e,n,i){const r=this.ts.get(i);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.ts.delete(i)),R.resolve()}getOverlaysForCollection(e,n,i){const r=qi(),s=n.length+1,o=new Y(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>i&&r.set(l.getKey(),l)}return R.resolve(r)}getOverlaysForCollectionGroup(e,n,i,r){let s=new nt((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>i){let u=s.get(c.largestBatchId);u===null&&(u=qi(),s=s.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=qi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=r)););return R.resolve(a)}re(e,n,i){const r=this.overlays.get(i.key);if(r!==null){const o=this.ts.get(r.largestBatchId).delete(i.key);this.ts.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new Xx(n,i));let s=this.ts.get(n);s===void 0&&(s=ue(),this.ts.set(n,s)),this.ts.set(n,s.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(){this.es=new et(st.ns),this.ss=new et(st.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const i=new st(e,n);this.es=this.es.add(i),this.ss=this.ss.add(i)}os(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.us(new st(e,n))}cs(e,n){e.forEach(i=>this.removeReference(i,n))}hs(e){const n=new Y(new Ve([])),i=new st(n,e),r=new st(n,e+1),s=[];return this.ss.forEachInRange([i,r],o=>{this.us(o),s.push(o.key)}),s}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new Y(new Ve([])),i=new st(n,e),r=new st(n,e+1);let s=ue();return this.ss.forEachInRange([i,r],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new st(e,0),i=this.es.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class st{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return Y.comparator(e.key,n.key)||be(e.ds,n.ds)}static rs(e,n){return be(e.ds,n.ds)||Y.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new et(st.ns)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,r){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Qx(s,n,i,r);this.mutationQueue.push(o);for(const a of r)this._s=this._s.add(new st(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,r=this.ys(i),s=r<0?0:r;return R.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new st(n,0),r=new st(n,Number.POSITIVE_INFINITY),s=[];return this._s.forEachInRange([i,r],o=>{const a=this.gs(o.ds);s.push(a)}),R.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new et(be);return n.forEach(r=>{const s=new st(r,0),o=new st(r,Number.POSITIVE_INFINITY);this._s.forEachInRange([s,o],a=>{i=i.add(a.ds)})}),R.resolve(this.ps(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,r=i.length+1;let s=i;Y.isDocumentKey(s)||(s=s.child(""));const o=new st(new Y(s),0);let a=new et(be);return this._s.forEachWhile(l=>{const c=l.key.path;return!!i.isPrefixOf(c)&&(c.length===r&&(a=a.add(l.ds)),!0)},o),R.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(i=>{const r=this.gs(i);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Me(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this._s;return R.forEach(n.mutations,r=>{const s=new st(r.key,n.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this._s=i})}En(e){}containsKey(e,n){const i=new st(n,0),r=this._s.firstAfterOrEqual(i);return R.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kD{constructor(e){this.Ts=e,this.docs=new nt(Y.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,r=this.docs.get(i),s=r?r.size:0,o=this.Ts(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return R.resolve(i?i.document.mutableCopy():wt.newInvalidDocument(n))}getEntries(e,n){let i=Jn();return n.forEach(r=>{const s=this.docs.get(r);i=i.insert(r,s?s.document.mutableCopy():wt.newInvalidDocument(r))}),R.resolve(i)}getDocumentsMatchingQuery(e,n,i,r){let s=Jn();const o=n.path,a=new Y(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||px(dx(u),i)<=0||(r.has(u.key)||Dc(n,u))&&(s=s.insert(u.key,u.mutableCopy()))}return R.resolve(s)}getAllFromCollectionGroup(e,n,i,r){J()}Es(e,n){return R.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new RD(this)}getSize(e){return R.resolve(this.size)}}class RD extends ED{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((i,r)=>{r.isValidDocument()?n.push(this.Jn.addEntry(e,r)):this.Jn.removeEntry(i)}),R.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ND{constructor(e){this.persistence=e,this.As=new Es(n=>Vd(n),$d),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Kd,this.targetCount=0,this.bs=is.vn()}forEachTarget(e,n){return this.As.forEach((i,r)=>n(r)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Rs&&(this.Rs=n),R.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new is(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.Sn(n),R.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,i){let r=0;const s=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.As.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),R.waitFor(s).next(()=>r)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const i=this.As.get(n)||null;return R.resolve(i)}addMatchingKeys(e,n,i){return this.vs.os(n,i),R.resolve()}removeMatchingKeys(e,n,i){this.vs.cs(n,i);const r=this.persistence.referenceDelegate,s=[];return r&&n.forEach(o=>{s.push(r.markPotentiallyOrphaned(e,o))}),R.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),R.resolve()}getMatchingKeysForTargetId(e,n){const i=this.vs.fs(n);return R.resolve(i)}containsKey(e,n){return R.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new Fd(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new ND(this),this.indexManager=new bD,this.remoteDocumentCache=function(i){return new kD(i)}(i=>this.referenceDelegate.Cs(i)),this.serializer=new _D(n),this.xs=new CD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new SD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.Ps[e.toKey()];return i||(i=new AD(n,this.referenceDelegate),this.Ps[e.toKey()]=i),i}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,i){z("MemoryPersistence","Starting transaction:",e);const r=new DD(this.Vs.next());return this.referenceDelegate.Ns(),i(r).next(s=>this.referenceDelegate.ks(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Os(e,n){return R.or(Object.values(this.Ps).map(i=>()=>i.containsKey(e,n)))}}class DD extends gx{constructor(e){super(),this.currentSequenceNumber=e}}class Wd{constructor(e){this.persistence=e,this.$s=new Kd,this.Ms=null}static Fs(e){return new Wd(e)}get Bs(){if(this.Ms)return this.Ms;throw J()}addReference(e,n,i){return this.$s.addReference(i,n),this.Bs.delete(i.toString()),R.resolve()}removeReference(e,n,i){return this.$s.removeReference(i,n),this.Bs.add(i.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),R.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(r=>this.Bs.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(s=>this.Bs.add(s.toString()))}).next(()=>i.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Bs,i=>{const r=Y.fromPath(i);return this.Ls(e,r).next(s=>{s||n.removeEntry(r,te.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(i=>{i?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return R.or([()=>R.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e,n,i,r){this.targetId=e,this.fromCache=n,this.Vi=i,this.Si=r}static Di(e,n){let i=ue(),r=ue();for(const s of n.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new qd(e,n.fromCache,i,r)}}/**
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
 */class OD{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,i,r){return this.Ni(e,n).next(s=>s||this.ki(e,n,r,i)).next(s=>s||this.Oi(e,n))}Ni(e,n){if(Mg(n))return R.resolve(null);let i=Xn(n);return this.indexManager.getIndexType(e,i).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=zh(n,null,"F"),i=Xn(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(s=>{const o=ue(...s);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(l=>{const c=this.$i(n,a);return this.Mi(n,c,o,l.readTime)?this.Ni(e,zh(n,null,"F")):this.Fi(e,c,n,l)}))})))}ki(e,n,i,r){return Mg(n)||r.isEqual(te.min())?this.Oi(e,n):this.xi.getDocuments(e,i).next(s=>{const o=this.$i(n,s);return this.Mi(n,o,i,r)?this.Oi(e,n):(Sg()<=_e.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Hh(n)),this.Fi(e,o,n,fx(r,-1)))})}$i(e,n){let i=new et(Zb(e));return n.forEach((r,s)=>{Dc(e,s)&&(i=i.add(s))}),i}Mi(e,n,i,r){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Oi(e,n){return Sg()<=_e.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",Hh(n)),this.xi.getDocumentsMatchingQuery(e,n,wi.min())}Fi(e,n,i,r){return this.xi.getDocumentsMatchingQuery(e,i,r).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PD{constructor(e,n,i,r){this.persistence=e,this.Bi=n,this.serializer=r,this.Li=new nt(be),this.qi=new Es(s=>Vd(s),$d),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(i)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ID(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function MD(t,e,n,i){return new PD(t,e,n,i)}async function w1(t,e){const n=re(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let r;return n.mutationQueue.getAllMutationBatches(i).next(s=>(r=s,n.Gi(e),n.mutationQueue.getAllMutationBatches(i))).next(s=>{const o=[],a=[];let l=ue();for(const c of r){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of s){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(i,l).next(c=>({Qi:c,removedBatchIds:o,addedBatchIds:a}))})})}function LD(t,e){const n=re(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const r=e.batch.keys(),s=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let f=R.resolve();return h.forEach(d=>{f=f.next(()=>c.getEntry(a,d)).next(m=>{const y=l.docVersions.get(d);Me(y!==null),m.version.compareTo(y)<0&&(u.applyToRemoteDocument(m,l),m.isValidDocument()&&(m.setReadTime(l.commitVersion),c.addEntry(m)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,i,e,s).next(()=>s.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(o){let a=ue();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(i,r))})}function E1(t){const e=re(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function FD(t,e){const n=re(t),i=e.snapshotVersion;let r=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});r=n.Li;const a=[];e.targetChanges.forEach((u,h)=>{const f=r.get(h);if(!f)return;a.push(n.Ds.removeMatchingKeys(s,u.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(s,u.addedDocuments,h)));let d=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?d=d.withResumeToken(At.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,i)),r=r.insert(h,d),function(m,y,b){return m.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(f,d,u)&&a.push(n.Ds.updateTargetData(s,d))});let l=Jn(),c=ue();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(UD(s,o,e.documentUpdates).next(u=>{l=u.zi,c=u.ji})),!i.isEqual(te.min())){const u=n.Ds.getLastRemoteSnapshotVersion(s).next(h=>n.Ds.setTargetsMetadata(s,s.currentSequenceNumber,i));a.push(u)}return R.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.Li=r,s))}function UD(t,e,n){let i=ue(),r=ue();return n.forEach(s=>i=i.add(s)),e.getEntries(t,i).next(s=>{let o=Jn();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(r=r.add(a)),l.isNoDocument()&&l.version.isEqual(te.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):z("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{zi:o,ji:r}})}function VD(t,e){const n=re(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function $D(t,e){const n=re(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let r;return n.Ds.getTargetData(i,e).next(s=>s?(r=s,R.resolve(r)):n.Ds.allocateTargetId(i).next(o=>(r=new er(e,o,0,i.currentSequenceNumber),n.Ds.addTargetData(i,r).next(()=>r))))}).then(i=>{const r=n.Li.get(i.targetId);return(r===null||i.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Li=n.Li.insert(i.targetId,i),n.qi.set(e,i.targetId)),i})}async function Gh(t,e,n){const i=re(t),r=i.Li.get(e),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,o=>i.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!ta(o))throw o;z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.Li=i.Li.remove(e),i.qi.delete(r.target)}function Hg(t,e,n){const i=re(t);let r=te.min(),s=ue();return i.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=re(a),h=u.qi.get(c);return h!==void 0?R.resolve(u.Li.get(h)):u.Ds.getTargetData(l,c)}(i,o,Xn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,i.Ds.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>i.Bi.getDocumentsMatchingQuery(o,e,n?r:te.min(),n?s:ue())).next(a=>(BD(i,Lx(e),a),{documents:a,Wi:s})))}function BD(t,e,n){let i=t.Ui.get(e)||te.min();n.forEach((r,s)=>{s.readTime.compareTo(i)>0&&(i=s.readTime)}),t.Ui.set(e,i)}class Kg{constructor(){this.activeTargetIds=i1()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jD{constructor(){this.Br=new Kg,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,i){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new Kg,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Wg{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ra=null;function Nu(){return Ra===null?Ra=268435456+Math.round(2147483648*Math.random()):Ra++,"0x"+Ra.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const yt="WebChannelConnection";class WD extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,i,r,s){const o=Nu(),a=this.ao(e,n);z("RestConnection",`Sending RPC '${e}' ${o}:`,a,i);const l={};return this.ho(l,r,s),this.lo(e,a,l,i).then(c=>(z("RestConnection",`Received RPC '${e}' ${o}: `,c),c),c=>{throw Al("RestConnection",`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",i),c})}fo(e,n,i,r,s,o){return this.co(e,n,i,r,s)}ho(e,n,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+ws,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,s)=>e[s]=r),i&&i.headers.forEach((r,s)=>e[s]=r)}ao(e,n){const i=HD[e];return`${this.ro}/v1/${n}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,i,r){const s=Nu();return new Promise((o,a)=>{const l=new nx;l.setWithCredentials(!0),l.listenOnce(ZN.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case ku.NO_ERROR:const u=l.getResponseJson();z(yt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(u)),o(u);break;case ku.TIMEOUT:z(yt,`RPC '${e}' ${s} timed out`),a(new q(A.DEADLINE_EXCEEDED,"Request time out"));break;case ku.HTTP_ERROR:const h=l.getStatus();if(z(yt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const m=function(y){const b=y.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(b)>=0?b:A.UNKNOWN}(d.status);a(new q(m,d.message))}else a(new q(A.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new q(A.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{z(yt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(r);z(yt,`RPC '${e}' ${s} sending request:`,r),l.send(n,"POST",c,i,15)})}wo(e,n,i){const r=Nu(),s=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=XN(),a=JN(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new tx({})),this.ho(l.initMessageHeaders,n,i),l.encodeInitMessageHeaders=!0;const c=s.join("");z(yt,`Creating RPC '${e}' stream ${r}: ${c}`,l);const u=o.createWebChannel(c,l);let h=!1,f=!1;const d=new KD({Wr:y=>{f?z(yt,`Not sending because RPC '${e}' stream ${r} is closed:`,y):(h||(z(yt,`Opening RPC '${e}' stream ${r} transport.`),u.open(),h=!0),z(yt,`RPC '${e}' stream ${r} sending:`,y),u.send(y))},Hr:()=>u.close()}),m=(y,b,_)=>{y.listen(b,w=>{try{_(w)}catch(v){setTimeout(()=>{throw v},0)}})};return m(u,Ca.EventType.OPEN,()=>{f||z(yt,`RPC '${e}' stream ${r} transport opened.`)}),m(u,Ca.EventType.CLOSE,()=>{f||(f=!0,z(yt,`RPC '${e}' stream ${r} transport closed`),d.so())}),m(u,Ca.EventType.ERROR,y=>{f||(f=!0,Al(yt,`RPC '${e}' stream ${r} transport errored:`,y),d.so(new q(A.UNAVAILABLE,"The operation could not be completed")))}),m(u,Ca.EventType.MESSAGE,y=>{var b;if(!f){const _=y.data[0];Me(!!_);const w=_,v=w.error||((b=w[0])===null||b===void 0?void 0:b.error);if(v){z(yt,`RPC '${e}' stream ${r} received error:`,v);const C=v.status;let O=function(se){const fe=Qe[se];if(fe!==void 0)return f1(fe)}(C),X=v.message;O===void 0&&(O=A.INTERNAL,X="Unknown error status: "+C+" with message "+v.message),f=!0,d.so(new q(O,X)),u.close()}else z(yt,`RPC '${e}' stream ${r} received:`,_),d.io(_)}}),m(a,ex.STAT_EVENT,y=>{y.stat===Ig.PROXY?z(yt,`RPC '${e}' stream ${r} detected buffering proxy`):y.stat===Ig.NOPROXY&&z(yt,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{d.no()},0),d}}function xu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(t){return new rD(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(e,n,i=1e3,r=1.5,s=6e4){this.Ws=e,this.timerId=n,this._o=i,this.mo=r,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),i=Math.max(0,Date.now()-this.To),r=Math.max(0,n-i);r>0&&z("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,r,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(e,n,i,r,s,o,a,l){this.Ws=e,this.bo=i,this.Po=r,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new T1(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(Qn(n.toString()),Qn("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,r])=>{this.Vo===n&&this.Ko(i,r)},i=>{e(()=>{const r=new q(A.UNKNOWN,"Fetching auth token failed: "+i.message);return this.Go(r)})})}Ko(e,n){const i=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{i(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(r=>{i(()=>this.Go(r))}),this.stream.onMessage(r=>{i(()=>this.onMessage(r))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class qD extends I1{constructor(e,n,i,r,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,r,o),this.serializer=s}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=aD(this.serializer,e),i=function(r){if(!("targetChange"in r))return te.min();const s=r.targetChange;return s.targetIds&&s.targetIds.length?te.min():s.readTime?Sn(s.readTime):te.min()}(e);return this.listener.zo(n,i)}jo(e){const n={};n.database=qh(this.serializer),n.addTarget=function(r,s){let o;const a=s.target;return o=jh(a)?{documents:uD(r,a)}:{query:hD(r,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=m1(r,s.resumeToken):s.snapshotVersion.compareTo(te.min())>0&&(o.readTime=Dl(r,s.snapshotVersion.toTimestamp())),o}(this.serializer,e);const i=dD(this.serializer,e);i&&(n.labels=i),this.Fo(n)}Wo(e){const n={};n.database=qh(this.serializer),n.removeTarget=e,this.Fo(n)}}class GD extends I1{constructor(e,n,i,r,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,r,o),this.serializer=s,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=cD(e.writeResults,e.commitTime),i=Sn(e.commitTime);return this.listener.Zo(i,n)}return Me(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=qh(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>lD(this.serializer,i))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(Qn(n),this.ru=!1):z("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(e,n,i,r,s){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=s,this._u.qr(o=>{i.enqueueAndForget(async()=>{vr(this)&&(z("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=re(a);l.du.add(4),await ra(l),l.mu.set("Unknown"),l.du.delete(4),await Fc(l)}(this))})}),this.mu=new QD(i,r)}}async function Fc(t){if(vr(t))for(const e of t.wu)await e(!0)}async function ra(t){for(const e of t.wu)await e(!1)}function C1(t,e){const n=re(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),Qd(n)?Yd(n):Ts(n).No()&&Gd(n,e))}function S1(t,e){const n=re(t),i=Ts(n);n.fu.delete(e),i.No()&&A1(n,e),n.fu.size===0&&(i.No()?i.$o():vr(n)&&n.mu.set("Unknown"))}function Gd(t,e){t.gu.Ot(e.targetId),Ts(t).jo(e)}function A1(t,e){t.gu.Ot(e),Ts(t).Wo(e)}function Yd(t){t.gu=new eD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),Ts(t).start(),t.mu.ou()}function Qd(t){return vr(t)&&!Ts(t).xo()&&t.fu.size>0}function vr(t){return re(t).du.size===0}function k1(t){t.gu=void 0}async function JD(t){t.fu.forEach((e,n)=>{Gd(t,e)})}async function ZD(t,e){k1(t),Qd(t)?(t.mu.au(e),Yd(t)):t.mu.set("Unknown")}async function eO(t,e,n){if(t.mu.set("Online"),e instanceof p1&&e.state===2&&e.cause)try{await async function(i,r){const s=r.cause;for(const o of r.targetIds)i.fu.has(o)&&(await i.remoteSyncer.rejectListen(o,s),i.fu.delete(o),i.gu.removeTarget(o))}(t,e)}catch(i){z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Ol(t,i)}else if(e instanceof Ya?t.gu.Kt(e):e instanceof d1?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(te.min()))try{const i=await E1(t.localStore);n.compareTo(i)>=0&&await function(r,s){const o=r.gu.Xt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=r.fu.get(l);c&&r.fu.set(l,c.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=r.fu.get(a);if(!l)return;r.fu.set(a,l.withResumeToken(At.EMPTY_BYTE_STRING,l.snapshotVersion)),A1(r,a);const c=new er(l.target,a,1,l.sequenceNumber);Gd(r,c)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(i){z("RemoteStore","Failed to raise snapshot:",i),await Ol(t,i)}}async function Ol(t,e,n){if(!ta(e))throw e;t.du.add(1),await ra(t),t.mu.set("Offline"),n||(n=()=>E1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{z("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await Fc(t)})}function R1(t,e){return e().catch(n=>Ol(t,n,e))}async function Uc(t){const e=re(t),n=Ti(e);let i=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;tO(e);)try{const r=await VD(e.localStore,i);if(r===null){e.lu.length===0&&n.$o();break}i=r.batchId,nO(e,r)}catch(r){await Ol(e,r)}N1(e)&&x1(e)}function tO(t){return vr(t)&&t.lu.length<10}function nO(t,e){t.lu.push(e);const n=Ti(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function N1(t){return vr(t)&&!Ti(t).xo()&&t.lu.length>0}function x1(t){Ti(t).start()}async function iO(t){Ti(t).tu()}async function rO(t){const e=Ti(t);for(const n of t.lu)e.Yo(n.mutations)}async function sO(t,e,n){const i=t.lu.shift(),r=jd.from(i,e,n);await R1(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Uc(t)}async function oO(t,e){e&&Ti(t).Jo&&await async function(n,i){if(r=i.code,Zx(r)&&r!==A.ABORTED){const s=n.lu.shift();Ti(n).Oo(),await R1(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Uc(n)}var r}(t,e),N1(t)&&x1(t)}async function qg(t,e){const n=re(t);n.asyncQueue.verifyOperationInProgress(),z("RemoteStore","RemoteStore received new credentials");const i=vr(n);n.du.add(3),await ra(n),i&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await Fc(n)}async function aO(t,e){const n=re(t);e?(n.du.delete(2),await Fc(n)):e||(n.du.add(2),await ra(n),n.mu.set("Unknown"))}function Ts(t){return t.yu||(t.yu=function(e,n,i){const r=re(e);return r.nu(),new qD(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{Jr:JD.bind(null,t),Zr:ZD.bind(null,t),zo:eO.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),Qd(t)?Yd(t):t.mu.set("Unknown")):(await t.yu.stop(),k1(t))})),t.yu}function Ti(t){return t.pu||(t.pu=function(e,n,i){const r=re(e);return r.nu(),new GD(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{Jr:iO.bind(null,t),Zr:oO.bind(null,t),Xo:rO.bind(null,t),Zo:sO.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await Uc(t)):(await t.pu.stop(),t.lu.length>0&&(z("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e,n,i,r,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new Kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,r,s){const o=Date.now()+i,a=new Xd(e,n,o,r,s);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jd(t,e){if(Qn("AsyncQueue",`${e}: ${t}`),ta(t))return new q(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e){this.comparator=e?(n,i)=>e(n,i)||Y.comparator(n.key,i.key):(n,i)=>Y.comparator(n.key,i.key),this.keyedMap=Vs(),this.sortedSet=new nt(this.comparator)}static emptySet(e){return new Hr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Hr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new Hr;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(){this.Iu=new nt(Y.comparator)}track(e){const n=e.doc.key,i=this.Iu.get(n);i?e.type!==0&&i.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&i.type!==1?this.Iu=this.Iu.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Iu=this.Iu.remove(n):e.type===1&&i.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):J():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,i)=>{e.push(i)}),e}}class rs{constructor(e,n,i,r,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,i,r,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new rs(e,n,Hr.emptySet(n),o,i,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==i[r].type||!n[r].doc.isEqual(i[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lO{constructor(){this.Eu=void 0,this.listeners=[]}}class cO{constructor(){this.queries=new Es(e=>Jb(e),xc),this.onlineState="Unknown",this.Au=new Set}}async function Zd(t,e){const n=re(t),i=e.query;let r=!1,s=n.queries.get(i);if(s||(r=!0,s=new lO),r)try{s.Eu=await n.onListen(i)}catch(o){const a=Jd(o,`Initialization of query '${Hh(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.listeners.push(e),e.Ru(n.onlineState),s.Eu&&e.vu(s.Eu)&&tp(n)}async function ep(t,e){const n=re(t),i=e.query;let r=!1;const s=n.queries.get(i);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),r=s.listeners.length===0)}if(r)return n.queries.delete(i),n.onUnlisten(i)}function uO(t,e){const n=re(t);let i=!1;for(const r of e){const s=r.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.vu(r)&&(i=!0);o.Eu=r}}i&&tp(n)}function hO(t,e,n){const i=re(t),r=i.queries.get(e);if(r)for(const s of r.listeners)s.onError(n);i.queries.delete(e)}function tp(t){t.Au.forEach(e=>{e.next()})}class np{constructor(e,n,i){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=i||{}}vu(e){if(!this.options.includeMetadataChanges){const i=[];for(const r of e.docChanges)r.type!==3&&i.push(r);e=new rs(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.xu||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=rs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(e){this.key=e}}class O1{constructor(e){this.key=e}}class fO{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=ue(),this.mutatedKeys=ue(),this.Ku=Zb(e),this.Gu=new Hr(this.Ku)}get Qu(){return this.Lu}zu(e,n){const i=n?n.ju:new Gg,r=n?n.Gu:this.Gu;let s=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const l=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,c=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const f=r.get(u),d=Dc(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),y=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let b=!1;f&&d?f.data.isEqual(d.data)?m!==y&&(i.track({type:3,doc:d}),b=!0):this.Wu(f,d)||(i.track({type:2,doc:d}),b=!0,(l&&this.Ku(d,l)>0||c&&this.Ku(d,c)<0)&&(a=!0)):!f&&d?(i.track({type:0,doc:d}),b=!0):f&&!d&&(i.track({type:1,doc:f}),b=!0,(l||c)&&(a=!0)),b&&(d?(o=o.add(d),s=y?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),i.track({type:1,doc:u})}return{Gu:o,ju:i,Mi:a,mutatedKeys:s}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const r=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const s=e.ju.Tu();s.sort((c,u)=>function(h,f){const d=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return d(h)-d(f)}(c.type,u.type)||this.Ku(c.doc,u.doc)),this.Hu(i);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,s.length!==0||l?{snapshot:new rs(this.query,e.Gu,r,s,e.mutatedKeys,a===0,l,!1,!!i&&i.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Gg,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=ue(),this.Gu.forEach(i=>{this.Zu(i.key)&&(this.Uu=this.Uu.add(i.key))});const n=[];return e.forEach(i=>{this.Uu.has(i)||n.push(new O1(i))}),this.Uu.forEach(i=>{e.has(i)||n.push(new D1(i))}),n}Xu(e){this.Lu=e.Wi,this.Uu=ue();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return rs.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class dO{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class pO{constructor(e){this.key=e,this.ec=!1}}class mO{constructor(e,n,i,r,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new Es(a=>Jb(a),xc),this.ic=new Map,this.rc=new Set,this.oc=new nt(Y.comparator),this.uc=new Map,this.cc=new Kd,this.ac={},this.hc=new Map,this.lc=is.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function gO(t,e){const n=SO(t);let i,r;const s=n.sc.get(e);if(s)i=s.targetId,n.sharedClientState.addLocalQueryTarget(i),r=s.view.tc();else{const o=await $D(n.localStore,Xn(e));n.isPrimaryClient&&C1(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,r=await yO(n,e,i,a==="current",o.resumeToken)}return r}async function yO(t,e,n,i,r){t.dc=(h,f,d)=>async function(m,y,b,_){let w=y.view.zu(b);w.Mi&&(w=await Hg(m.localStore,y.query,!1).then(({documents:O})=>y.view.zu(O,w)));const v=_&&_.targetChanges.get(y.targetId),C=y.view.applyChanges(w,m.isPrimaryClient,v);return Qg(m,y.targetId,C.Yu),C.snapshot}(t,h,f,d);const s=await Hg(t.localStore,e,!0),o=new fO(e,s.Wi),a=o.zu(s.documents),l=ia.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",r),c=o.applyChanges(a,t.isPrimaryClient,l);Qg(t,n,c.Yu);const u=new dO(e,n,o);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),c.snapshot}async function _O(t,e){const n=re(t),i=n.sc.get(e),r=n.ic.get(i.targetId);if(r.length>1)return n.ic.set(i.targetId,r.filter(s=>!xc(s,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Gh(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),S1(n.remoteStore,i.targetId),Yh(n,i.targetId)}).catch(ea)):(Yh(n,i.targetId),await Gh(n.localStore,i.targetId,!0))}async function vO(t,e,n){const i=AO(t);try{const r=await function(s,o){const a=re(s),l=Je.now(),c=o.reduce((f,d)=>f.add(d.key),ue());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=Jn(),m=ue();return a.Ki.getEntries(f,c).next(y=>{d=y,d.forEach((b,_)=>{_.isValidDocument()||(m=m.add(b))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(y=>{u=y;const b=[];for(const _ of o){const w=Gx(_,u.get(_.key).overlayedDocument);w!=null&&b.push(new Ni(_.key,w,Kb(w.value.mapValue),pn.exists(!0)))}return a.mutationQueue.addMutationBatch(f,l,b,o)}).next(y=>{h=y;const b=y.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(f,y.batchId,b)})}).then(()=>({batchId:h.batchId,changes:t1(u)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(r.batchId),function(s,o,a){let l=s.ac[s.currentUser.toKey()];l||(l=new nt(be)),l=l.insert(o,a),s.ac[s.currentUser.toKey()]=l}(i,r.batchId,n),await sa(i,r.changes),await Uc(i.remoteStore)}catch(r){const s=Jd(r,"Failed to persist write");n.reject(s)}}async function P1(t,e){const n=re(t);try{const i=await FD(n.localStore,e);e.targetChanges.forEach((r,s)=>{const o=n.uc.get(s);o&&(Me(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ec=!0:r.modifiedDocuments.size>0?Me(o.ec):r.removedDocuments.size>0&&(Me(o.ec),o.ec=!1))}),await sa(n,i,e)}catch(i){await ea(i)}}function Yg(t,e,n){const i=re(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const r=[];i.sc.forEach((s,o)=>{const a=o.view.Ru(e);a.snapshot&&r.push(a.snapshot)}),function(s,o){const a=re(s);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.Ru(o)&&(l=!0)}),l&&tp(a)}(i.eventManager,e),r.length&&i.nc.zo(r),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function bO(t,e,n){const i=re(t);i.sharedClientState.updateQueryState(e,"rejected",n);const r=i.uc.get(e),s=r&&r.key;if(s){let o=new nt(Y.comparator);o=o.insert(s,wt.newNoDocument(s,te.min()));const a=ue().add(s),l=new Mc(te.min(),new Map,new et(be),o,a);await P1(i,l),i.oc=i.oc.remove(s),i.uc.delete(e),ip(i)}else await Gh(i.localStore,e,!1).then(()=>Yh(i,e,n)).catch(ea)}async function wO(t,e){const n=re(t),i=e.batch.batchId;try{const r=await LD(n.localStore,e);L1(n,i,null),M1(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await sa(n,r)}catch(r){await ea(r)}}async function EO(t,e,n){const i=re(t);try{const r=await function(s,o){const a=re(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(Me(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(i.localStore,e);L1(i,e,n),M1(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await sa(i,r)}catch(r){await ea(r)}}function M1(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function L1(t,e,n){const i=re(t);let r=i.ac[i.currentUser.toKey()];if(r){const s=r.get(e);s&&(n?s.reject(n):s.resolve(),r=r.remove(e)),i.ac[i.currentUser.toKey()]=r}}function Yh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.ic.get(e))t.sc.delete(i),n&&t.nc.wc(i,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(i=>{t.cc.containsKey(i)||F1(t,i)})}function F1(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(S1(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),ip(t))}function Qg(t,e,n){for(const i of n)i instanceof D1?(t.cc.addReference(i.key,e),TO(t,i)):i instanceof O1?(z("SyncEngine","Document no longer in limbo: "+i.key),t.cc.removeReference(i.key,e),t.cc.containsKey(i.key)||F1(t,i.key)):J()}function TO(t,e){const n=e.key,i=n.path.canonicalString();t.oc.get(n)||t.rc.has(i)||(z("SyncEngine","New document in limbo: "+n),t.rc.add(i),ip(t))}function ip(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new Y(Ve.fromString(e)),i=t.lc.next();t.uc.set(i,new pO(n)),t.oc=t.oc.insert(n,i),C1(t.remoteStore,new er(Xn(Nc(n.path)),i,2,Fd.ct))}}async function sa(t,e,n){const i=re(t),r=[],s=[],o=[];i.sc.isEmpty()||(i.sc.forEach((a,l)=>{o.push(i.dc(l,e,n).then(c=>{if((c||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){r.push(c);const u=qd.Di(l.targetId,c);s.push(u)}}))}),await Promise.all(o),i.nc.zo(r),await async function(a,l){const c=re(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>R.forEach(l,h=>R.forEach(h.Vi,f=>c.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>R.forEach(h.Si,f=>c.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!ta(u))throw u;z("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const f=c.Li.get(h),d=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(d);c.Li=c.Li.insert(h,m)}}}(i.localStore,s))}async function IO(t,e){const n=re(t);if(!n.currentUser.isEqual(e)){z("SyncEngine","User change. New user:",e.toKey());const i=await w1(n.localStore,e);n.currentUser=e,function(r,s){r.hc.forEach(o=>{o.forEach(a=>{a.reject(new q(A.CANCELLED,s))})}),r.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await sa(n,i.Qi)}}function CO(t,e){const n=re(t),i=n.uc.get(e);if(i&&i.ec)return ue().add(i.key);{let r=ue();const s=n.ic.get(e);if(!s)return r;for(const o of s){const a=n.sc.get(o);r=r.unionWith(a.view.Qu)}return r}}function SO(t){const e=re(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=P1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=CO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=bO.bind(null,e),e.nc.zo=uO.bind(null,e.eventManager),e.nc.wc=hO.bind(null,e.eventManager),e}function AO(t){const e=re(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=wO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=EO.bind(null,e),e}class Xg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Lc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return MD(this.persistence,new OD,e.initialUser,this.serializer)}createPersistence(e){return new xD(Wd.Fs,this.serializer)}createSharedClientState(e){return new jD}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class kO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Yg(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=IO.bind(null,this.syncEngine),await aO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new cO}createDatastore(e){const n=Lc(e.databaseInfo.databaseId),i=(r=e.databaseInfo,new WD(r));var r;return function(s,o,a,l){return new YD(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return n=this.localStore,i=this.datastore,r=e.asyncQueue,s=a=>Yg(this.syncEngine,a,0),o=Wg.D()?new Wg:new zD,new XD(n,i,r,s,o);var n,i,r,s,o}createSyncEngine(e,n){return function(i,r,s,o,a,l,c){const u=new mO(i,r,s,o,a,l);return c&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=re(e);z("RemoteStore","RemoteStore shutting down."),n.du.add(5),await ra(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class rp{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):Qn("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RO{constructor(e,n,i,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=r,this.user=_t.UNAUTHENTICATED,this.clientId=Bb.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async s=>{z("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(i,s=>(z("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=Jd(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Du(t,e){t.asyncQueue.verifyOperationInProgress(),z("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async r=>{i.isEqual(r)||(await w1(e.localStore,r),i=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Jg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await xO(t);z("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(r=>qg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>qg(e.remoteStore,s)),t._onlineComponents=e}function NO(t){return t.name==="FirebaseError"?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function xO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){z("FirestoreClient","Using user provided OfflineComponentProvider");try{await Du(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!NO(n))throw n;Al("Error using user provided cache. Falling back to memory cache: "+n),await Du(t,new Xg)}}else z("FirestoreClient","Using default OfflineComponentProvider"),await Du(t,new Xg);return t._offlineComponents}async function U1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(z("FirestoreClient","Using user provided OnlineComponentProvider"),await Jg(t,t._uninitializedComponentsProvider._online)):(z("FirestoreClient","Using default OnlineComponentProvider"),await Jg(t,new kO))),t._onlineComponents}function DO(t){return U1(t).then(e=>e.syncEngine)}async function Pl(t){const e=await U1(t),n=e.eventManager;return n.onListen=gO.bind(null,e.syncEngine),n.onUnlisten=_O.bind(null,e.syncEngine),n}function OO(t,e,n={}){const i=new Kn;return t.asyncQueue.enqueueAndForget(async()=>function(r,s,o,a,l){const c=new rp({next:h=>{s.enqueueAndForget(()=>ep(r,u));const f=h.docs.has(o);!f&&h.fromCache?l.reject(new q(A.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?l.reject(new q(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new np(Nc(o.path),c,{includeMetadataChanges:!0,xu:!0});return Zd(r,u)}(await Pl(t),t.asyncQueue,e,n,i)),i.promise}function PO(t,e,n={}){const i=new Kn;return t.asyncQueue.enqueueAndForget(async()=>function(r,s,o,a,l){const c=new rp({next:h=>{s.enqueueAndForget(()=>ep(r,u)),h.fromCache&&a.source==="server"?l.reject(new q(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new np(o,c,{includeMetadataChanges:!0,xu:!0});return Zd(r,u)}(await Pl(t),t.asyncQueue,e,n,i)),i.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V1(t,e,n){if(!n)throw new q(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function MO(t,e,n,i){if(e===!0&&i===!0)throw new q(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ey(t){if(!Y.isDocumentKey(t))throw new q(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ty(t){if(Y.isDocumentKey(t))throw new q(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function sp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function Gt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=sp(t);throw new q(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new q(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,MO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,n,i,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ny({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new q(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new q(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ny(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new ix;switch(n.type){case"firstParty":return new ax(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new q(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Zg.get(e);n&&(z("ComponentProvider","Removing Datastore"),Zg.delete(e),n.terminate())}(this),Promise.resolve()}}function LO(t,e,n,i={}){var r;const s=(t=Gt(t,Vc))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Al("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let o,a;if(typeof i.mockUserToken=="string")o=i.mockUserToken,a=_t.MOCK_USER;else{o=NI(i.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const l=i.mockUserToken.sub||i.mockUserToken.user_id;if(!l)throw new q(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new _t(l)}t._authCredentials=new rx(new $b(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new yi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Nt(this.firestore,e,this._key)}}class oa{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new oa(this.firestore,e,this._query)}}class yi extends oa{constructor(e,n,i){super(e,n,Nc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Nt(this.firestore,null,new Y(e))}withConverter(e){return new yi(this.firestore,e,this._path)}}function ss(t,e,...n){if(t=Vt(t),V1("collection","path",e),t instanceof Vc){const i=Ve.fromString(e,...n);return ty(i),new yi(t,null,i)}{if(!(t instanceof Nt||t instanceof yi))throw new q(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Ve.fromString(e,...n));return ty(i),new yi(t.firestore,null,i)}}function ft(t,e,...n){if(t=Vt(t),arguments.length===1&&(e=Bb.A()),V1("doc","path",e),t instanceof Vc){const i=Ve.fromString(e,...n);return ey(i),new Nt(t,null,new Y(i))}{if(!(t instanceof Nt||t instanceof yi))throw new q(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Ve.fromString(e,...n));return ey(i),new Nt(t.firestore,t instanceof yi?t.converter:null,new Y(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new T1(this,"async_queue_retry"),this.qc=()=>{const n=xu();n&&z("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=xu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=xu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new Kn;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!ta(e))throw e;z("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(i=>{this.Mc=i,this.Fc=!1;const r=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(i);throw Qn("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.Fc=!1,i))));return this.Nc=n,n}enqueueAfterDelay(e,n,i){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const r=Xd.createAndSchedule(this,e,n,i,s=>this.Qc(s));return this.$c.push(r),r}Uc(){this.Mc&&J()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function iy(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const i=e;for(const r of n)if(r in i&&typeof i[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Ii extends Vc{constructor(e,n,i,r){super(e,n,i,r),this.type="firestore",this._queue=new FO,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||B1(this),this._firestoreClient.terminate()}}function $1(t,e){const n=typeof t=="object"?t:lv(),i=typeof t=="string"?t:e||"(default)",r=UC(n,"firestore").getImmediate({identifier:i});if(!r._initialized){const s=AI("firestore");s&&LO(r,...s)}return r}function $c(t){return t._firestoreClient||B1(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function B1(t){var e,n,i;const r=t._freezeSettings(),s=function(o,a,l,c){return new bx(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new RO(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=r.cache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this._byteString=e}static fromBase64String(e){try{return new os(At.fromBase64String(e))}catch(n){throw new q(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new os(At.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UO=/^__.*__$/;class VO{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new Ni(e,this.data,this.fieldMask,n,this.fieldTransforms):new na(e,this.data,n,this.fieldTransforms)}}class j1{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new Ni(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function z1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class ap{constructor(e,n,i,r,s,o){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=r,s===void 0&&this.Jc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new ap(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Zc({path:i,ta:!1});return r.ea(e),r}na(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Zc({path:i,ta:!1});return r.Jc(),r}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return Ml(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(z1(this.Yc)&&UO.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class $O{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||Lc(e)}ua(e,n,i,r=!1){return new ap({Yc:e,methodName:n,oa:i,path:Tt.emptyPath(),ta:!1,ra:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function H1(t){const e=t._freezeSettings(),n=Lc(t._databaseId);return new $O(t._databaseId,!!e.ignoreUndefinedProperties,n)}function BO(t,e,n,i,r,s={}){const o=t.ua(s.merge||s.mergeFields?2:0,e,n,r);lp("Data must be an object, but it was:",o,i);const a=K1(i,o);let l,c;if(s.merge)l=new Ht(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const f=Qh(e,h,n);if(!o.contains(f))throw new q(A.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);q1(u,f)||u.push(f)}l=new Ht(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new VO(new Mt(a),l,c)}class zc extends op{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof zc}}function jO(t,e,n,i){const r=t.ua(1,e,n);lp("Data must be an object, but it was:",r,i);const s=[],o=Mt.empty();_r(i,(l,c)=>{const u=cp(e,l,n);c=Vt(c);const h=r.na(u);if(c instanceof zc)s.push(u);else{const f=Hc(c,h);f!=null&&(s.push(u),o.set(u,f))}});const a=new Ht(s);return new j1(o,a,r.fieldTransforms)}function zO(t,e,n,i,r,s){const o=t.ua(1,e,n),a=[Qh(e,i,n)],l=[r];if(s.length%2!=0)throw new q(A.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(Qh(e,s[f])),l.push(s[f+1]);const c=[],u=Mt.empty();for(let f=a.length-1;f>=0;--f)if(!q1(c,a[f])){const d=a[f];let m=l[f];m=Vt(m);const y=o.na(d);if(m instanceof zc)c.push(d);else{const b=Hc(m,y);b!=null&&(c.push(d),u.set(d,b))}}const h=new Ht(c);return new j1(u,h,o.fieldTransforms)}function Hc(t,e){if(W1(t=Vt(t)))return lp("Unsupported field value:",e,t),K1(t,e);if(t instanceof op)return function(n,i){if(!z1(i.Yc))throw i.ia(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.ia(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,i){const r=[];let s=0;for(const o of n){let a=Hc(o,i.sa(s));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),s++}return{arrayValue:{values:r}}}(t,e)}return function(n,i){if((n=Vt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return jx(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Je.fromDate(n);return{timestampValue:Dl(i.serializer,r)}}if(n instanceof Je){const r=new Je(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Dl(i.serializer,r)}}if(n instanceof jc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof os)return{bytesValue:m1(i.serializer,n._byteString)};if(n instanceof Nt){const r=i.databaseId,s=n.firestore._databaseId;if(!s.isEqual(r))throw i.ia(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Hd(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i.ia(`Unsupported field value: ${sp(n)}`)}(t,e)}function K1(t,e){const n={};return jb(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_r(t,(i,r)=>{const s=Hc(r,e.Xc(i));s!=null&&(n[i]=s)}),{mapValue:{fields:n}}}function W1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Je||t instanceof jc||t instanceof os||t instanceof Nt||t instanceof op)}function lp(t,e,n){if(!W1(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=sp(n);throw i==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+i)}}function Qh(t,e,n){if((e=Vt(e))instanceof Bc)return e._internalPath;if(typeof e=="string")return cp(t,e);throw Ml("Field path arguments must be of type string or ",t,!1,void 0,n)}const HO=new RegExp("[~\\*/\\[\\]]");function cp(t,e,n){if(e.search(HO)>=0)throw Ml(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Bc(...e.split("."))._internalPath}catch{throw Ml(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ml(t,e,n,i,r){const s=i&&!i.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${i}`),o&&(l+=` in document ${r}`),l+=")"),new q(A.INVALID_ARGUMENT,a+t+l)}function q1(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{constructor(e,n,i,r,s){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new KO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Y1("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class KO extends G1{data(){return super.data()}}function Y1(t,e){return typeof e=="string"?cp(t,e):e instanceof Bc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q1(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class WO{convertValue(e,n="none"){switch(cr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(es(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw J()}}convertObject(e,n){const i={};return _r(e.fields,(r,s)=>{i[r]=this.convertValue(s,n)}),i}convertGeoPoint(e){return new jc(Xe(e.latitude),Xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=Hb(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Io(e));default:return null}}convertTimestamp(e){const n=Ei(e);return new Je(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=Ve.fromString(e);Me(b1(i));const r=new Co(i.get(1),i.get(3)),s=new Y(i.popFirst(5));return r.isEqual(n)||Qn(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class $s{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class X1 extends G1{constructor(e,n,i,r,s,o){super(e,n,i,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Qa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(Y1("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class Qa extends X1{data(e={}){return super.data(e)}}class J1{constructor(e,n,i,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new $s(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new Qa(this._firestore,this._userDataWriter,i.key,i,new $s(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(o=>{const a=new Qa(i._firestore,i._userDataWriter,o.doc.key,o.doc,new $s(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Qa(i._firestore,i._userDataWriter,o.doc.key,o.doc,new $s(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,c=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),c=s.indexOf(o.doc.key)),{type:GO(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function GO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z1(t){t=Gt(t,Nt);const e=Gt(t.firestore,Ii);return OO($c(e),t._key).then(n=>ew(e,t,n))}class up extends WO{constructor(e){super(),this.firestore=e}convertBytes(e){return new os(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Nt(this.firestore,null,n)}}function YO(t){t=Gt(t,oa);const e=Gt(t.firestore,Ii),n=$c(e),i=new up(e);return Q1(t._query),PO(n,t._query).then(r=>new J1(e,i,t,r))}function QO(t,e,n){t=Gt(t,Nt);const i=Gt(t.firestore,Ii),r=qO(t.converter,e,n);return fp(i,[BO(H1(i),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,pn.none())])}function Bi(t,e,n,...i){t=Gt(t,Nt);const r=Gt(t.firestore,Ii),s=H1(r);let o;return o=typeof(e=Vt(e))=="string"||e instanceof Bc?zO(s,"updateDoc",t._key,e,n,i):jO(s,"updateDoc",t._key,e),fp(r,[o.toMutation(t._key,pn.exists(!0))])}function XO(t){return fp(Gt(t.firestore,Ii),[new Bd(t._key,pn.none())])}function hp(t,...e){var n,i,r;t=Vt(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||iy(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(iy(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let l,c,u;if(t instanceof Nt)c=Gt(t.firestore,Ii),u=Nc(t._key.path),l={next:h=>{e[o]&&e[o](ew(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Gt(t,oa);c=Gt(h.firestore,Ii),u=h._query;const f=new up(c);l={next:d=>{e[o]&&e[o](new J1(c,f,h,d))},error:e[o+1],complete:e[o+2]},Q1(t._query)}return function(h,f,d,m){const y=new rp(m),b=new np(f,y,d);return h.asyncQueue.enqueueAndForget(async()=>Zd(await Pl(h),b)),()=>{y.yc(),h.asyncQueue.enqueueAndForget(async()=>ep(await Pl(h),b))}}($c(c),u,a,l)}function fp(t,e){return function(n,i){const r=new Kn;return n.asyncQueue.enqueueAndForget(async()=>vO(await DO(n),i,r)),r.promise}($c(t),e)}function ew(t,e,n){const i=n.docs.get(e._key),r=new up(t);return new X1(t,r,e._key,i,new $s(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){ws=n})(ms),Rn(new mn("firestore",(n,{instanceIdentifier:i,options:r})=>{const s=n.getProvider("app").getImmediate(),o=new Ii(new sx(n.getProvider("auth-internal")),new cx(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new q(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Co(a.options.projectId,l)}(s,i),s);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Wt(Cg,"3.10.1",t),Wt(Cg,"3.10.1","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw="firebasestorage.googleapis.com",JO="storageBucket",ZO=2*60*1e3,e2=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends ii{constructor(e,n,i=0){super(Ou(e),`Firebase Storage: ${n} (${Ou(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Pn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ou(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var On;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(On||(On={}));function Ou(t){return"storage/"+t}function t2(){const t="An unknown error occurred, please check the error payload for server response.";return new Pn(On.UNKNOWN,t)}function n2(){return new Pn(On.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function i2(){return new Pn(On.CANCELED,"User canceled the upload/download.")}function r2(t){return new Pn(On.INVALID_URL,"Invalid URL '"+t+"'.")}function s2(t){return new Pn(On.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function ry(t){return new Pn(On.INVALID_ARGUMENT,t)}function nw(){return new Pn(On.APP_DELETED,"The Firebase app was deleted.")}function o2(t){return new Pn(On.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=cn.makeFromUrl(e,n)}catch{return new cn(e,"")}if(i.path==="")return i;throw s2(e)}static makeFromUrl(e,n){let i=null;const r="([A-Za-z0-9.\\-_]+)";function s(C){C.path.charAt(C.path.length-1)==="/"&&(C.path_=C.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),l={bucket:1,path:3};function c(C){C.path_=decodeURIComponent(C.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${r}/o${f}`,"i"),m={bucket:1,path:3},y=n===tw?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",_=new RegExp(`^https?://${y}/${r}/${b}`,"i"),v=[{regex:a,indices:l,postModify:s},{regex:d,indices:m,postModify:c},{regex:_,indices:{bucket:1,path:2},postModify:c}];for(let C=0;C<v.length;C++){const O=v[C],X=O.regex.exec(e);if(X){const se=X[O.indices.bucket];let fe=X[O.indices.path];fe||(fe=""),i=new cn(se,fe),O.postModify(i);break}}if(i==null)throw r2(e);return i}}class a2{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l2(t,e,n){let i=1,r=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...b){c||(c=!0,e.apply(null,b))}function h(b){r=setTimeout(()=>{r=null,t(d,l())},b)}function f(){s&&clearTimeout(s)}function d(b,..._){if(c){f();return}if(b){f(),u.call(null,b,..._);return}if(l()||o){f(),u.call(null,b,..._);return}i<64&&(i*=2);let v;a===1?(a=2,v=0):v=(i+Math.random())*1e3,h(v)}let m=!1;function y(b){m||(m=!0,f(),!c&&(r!==null?(b||(a=2),clearTimeout(r),h(0)):b||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function c2(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u2(t){return t!==void 0}function sy(t,e,n,i){if(i<e)throw ry(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw ry(`Invalid value for '${t}'. Expected ${n} or less.`)}function h2(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const r=e(i)+"="+e(t[i]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ll;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ll||(Ll={}));/**
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
 */function f2(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||r||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2{constructor(e,n,i,r,s,o,a,l,c,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,m)=>{this.resolve_=d,this.reject_=m,this.start_()})}start_(){const e=(i,r)=>{if(r){i(!1,new Na(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Ll.NO_ERROR,l=s.getStatus();if(!a||f2(l,this.additionalRetryCodes_)&&this.retry){const u=s.getErrorCode()===Ll.ABORT;i(!1,new Na(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;i(!0,new Na(c,s))})},n=(i,r)=>{const s=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());u2(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=t2();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(r.canceled){const l=this.appDelete_?nw():i2();o(l)}else{const l=n2();o(l)}};this.canceled_?n(!1,new Na(!1,null,!0)):this.backoffId_=l2(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&c2(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Na{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function p2(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function m2(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function g2(t,e){e&&(t["X-Firebase-GMPID"]=e)}function y2(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function _2(t,e,n,i,r,s,o=!0){const a=h2(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return g2(c,e),p2(c,n),m2(c,s),y2(c,i),new d2(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v2(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function b2(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Fl{constructor(e,n){this._service=e,n instanceof cn?this._location=n:this._location=cn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Fl(e,n)}get root(){const e=new cn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return b2(this._location.path)}get storage(){return this._service}get parent(){const e=v2(this._location.path);if(e===null)return null;const n=new cn(this._location.bucket,e);return new Fl(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw o2(e)}}function oy(t,e){const n=e==null?void 0:e[JO];return n==null?null:cn.makeFromBucketSpec(n,t)}class w2{constructor(e,n,i,r,s){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=tw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ZO,this._maxUploadRetryTime=e2,this._requests=new Set,r!=null?this._bucket=cn.makeFromBucketSpec(r,this._host):this._bucket=oy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=cn.makeFromBucketSpec(this._url,e):this._bucket=oy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){sy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){sy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Fl(this,e)}_makeRequest(e,n,i,r,s=!0){if(this._deleted)return new a2(nw());{const o=_2(e,this._appId,i,r,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,r).getPromise()}}const ay="@firebase/storage",ly="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E2="storage";function T2(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new w2(n,i,r,e,ms)}function I2(){Rn(new mn(E2,T2,"PUBLIC").setMultipleInstances(!0)),Wt(ay,ly,""),Wt(ay,ly,"esm2017")}I2();const Pu=new WeakMap;function iw(t,e){return Pu.has(e)||Pu.set(e,t||{f:{},r:{},s:{},u:{}}),Pu.get(e)}function C2(t,e,n,i){if(!t)return n;const[r,s]=rw(t);if(!r)return n;const o=iw(void 0,i)[r]||{},a=e||s;return a&&a in o?o[a]:n}function S2(t,e,n,i){if(!t)return;const[r,s]=rw(t);if(!r)return;const o=iw(void 0,i)[r],a=e||s;if(a)return n.then(l=>{o[a]=l}).catch(Tn),a}function rw(t){return hA(t)||fA(t)?["f",t.path]:dA(t)?["r",t.toString()]:pA(t)?["s",t.toString()]:[]}const Mu=new WeakMap;function A2(t,e,n){const i=Kf();Mu.has(i)||Mu.set(i,new Map);const r=Mu.get(i),s=S2(e,n,t,i);return s&&r.set(s,t),s?()=>r.delete(s):Tn}const k2={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function Xh(t,e,n,i){if(!uA(t))return[t,{}];const r=[{},{}],s=Object.keys(n).reduce((a,l)=>{const c=n[l];return a[c.path]=c.data(),a},{});function o(a,l,c,u){l=l||{};const[h,f]=u;Object.getOwnPropertyNames(a).forEach(d=>{const m=Object.getOwnPropertyDescriptor(a,d);m&&!m.enumerable&&Object.defineProperty(h,d,m)});for(const d in a){const m=a[d];if(m==null||m instanceof Date||m instanceof Je||m instanceof jc)h[d]=m;else if(qf(m)){const y=c+d;h[d]=y in n?l[d]:m.path,f[y]=m.converter?m:m.withConverter(i.converter)}else if(Array.isArray(m)){h[d]=Array(m.length);for(let y=0;y<m.length;y++){const b=m[y];b&&b.path in s&&(h[d][y]=s[b.path])}o(m,l[d]||h[d],c+d+".",[h[d],f])}else pr(m)?(h[d]={},o(m,l[d],c+d+".",[h[d],f])):h[d]=m}}return o(t,e,"",r),r}const dp={reset:!1,wait:!0,maxRefDepth:2,converter:k2,snapshotOptions:{serverTimestamps:"estimate"}};function Ul(t){for(const e in t)t[e].unsub()}function Jh(t,e,n,i,r,s,o,a,l){const[c,u]=Xh(i.data(t.snapshotOptions),Wf(e,n),r,t);s.set(e,n,c),Zh(t,e,n,r,u,s,o,a,l)}function R2({ref:t,target:e,path:n,depth:i,resolve:r,reject:s,ops:o},a){const l=Object.create(null);let c=Tn;return a.once?Z1(t).then(u=>{u.exists()?Jh(a,e,n,u,l,o,i,r,s):(o.set(e,n,null),r())}).catch(s):c=hp(t,u=>{u.exists()?Jh(a,e,n,u,l,o,i,r,s):(o.set(e,n,null),r())},s),()=>{c(),Ul(l)}}function Zh(t,e,n,i,r,s,o,a,l){const c=Object.keys(r);if(Object.keys(i).filter(y=>c.indexOf(y)<0).forEach(y=>{i[y].unsub(),delete i[y]}),!c.length||++o>t.maxRefDepth)return a(n);let h=0;const f=c.length,d=Object.create(null);function m(y){y in d&&++h>=f&&a(n)}c.forEach(y=>{const b=i[y],_=r[y],w=`${n}.${y}`;if(d[w]=!0,b)if(b.path!==_.path)b.unsub();else return;i[y]={data:()=>Wf(e,w),unsub:R2({ref:_,target:e,path:w,depth:o,ops:s,resolve:m.bind(null,w),reject:l},t),path:_.path}})}function N2(t,e,n,i,r,s){const o=Object.assign({},dp,s),{snapshotListenOptions:a,snapshotOptions:l,wait:c,once:u}=o,h="value";let f=pt(c?[]:t.value);c||n.set(t,h,[]);const d=i;let m,y=Tn;const b=[],_={added:({newIndex:v,doc:C})=>{b.splice(v,0,Object.create(null));const O=b[v],[X,se]=Xh(C.data(l),void 0,O,o);n.add(x(f),v,X),Zh(o,f,`${h}.${v}`,O,se,n,0,i.bind(null,C),r)},modified:({oldIndex:v,newIndex:C,doc:O})=>{const X=x(f),se=b[v],fe=X[v],[Fe,Be]=Xh(O.data(l),fe,se,o);b.splice(C,0,se),n.remove(X,v),n.add(X,C,Fe),Zh(o,f,`${h}.${C}`,se,Be,n,0,i,r)},removed:({oldIndex:v})=>{const C=x(f);n.remove(C,v),Ul(b.splice(v,1)[0])}};function w(v){const C=v.docChanges(a);if(!m&&C.length){m=!0;let O=0;const X=C.length,se=Object.create(null);for(let fe=0;fe<X;fe++)se[C[fe].doc.id]=!0;i=fe=>{fe&&fe.id in se&&++O>=X&&(c&&(n.set(t,h,x(f)),f=t),d(x(f)),i=Tn)}}C.forEach(O=>{_[O.type](O)}),C.length||(c&&(n.set(t,h,x(f)),f=t),i(x(f)))}return u?YO(e).then(w).catch(r):y=hp(e,w,r),v=>{if(y(),v){const C=typeof v=="function"?v():[];n.set(t,h,C)}b.forEach(Ul)}}function x2(t,e,n,i,r,s){const o=Object.assign({},dp,s),a="value",l=Object.create(null);i=mA(i,()=>Wf(t,a));let c=Tn;function u(h){h.exists()?Jh(o,t,a,h,l,n,0,i,r):(n.set(t,a,null),i(null))}return o.once?Z1(e).then(u).catch(r):c=hp(e,u,r),h=>{if(c(),h){const f=typeof h=="function"?h():null;n.set(t,a,f)}Ul(l)}}function D2(t,e){let n=Tn;const i=Object.assign({},dp,e),r=x(t),s=i.target||pt();gA()&&(i.once=!0);const o=C2(r,i.ssrKey,s.value,Kf());s.value=o;let l=!(Sv(r)?(o||[]).length>0:o!==void 0);const c=pt(!1),u=pt(),h=w_(),f=o_();let d=Tn;function m(){let _=x(t);const w=new Promise((v,C)=>{if(n(i.reset),!_)return n=Tn,v(null);c.value=l,l=!0,_.converter||(_=_.withConverter(i.converter)),n=(qf(_)?x2:N2)(s,_,O2,v,C,i)}).catch(v=>(h.value===w&&(u.value=v),Promise.reject(v))).finally(()=>{h.value===w&&(c.value=!1)});h.value=w}let y=Tn;dt(t)&&(y=Ur(t,m)),m(),r&&(d=A2(h.value,r,i.ssrKey)),ic()&&M_(()=>h.value),f&&cE(b);function b(_=i.reset){y(),d(),n(_)}return Object.defineProperties(s,{error:{get:()=>u},data:{get:()=>s},pending:{get:()=>c},promise:{get:()=>h},stop:{get:()=>b}})}const O2={set:(t,e,n)=>lA(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function jt(t,e){return D2(t,e)}function xi(t){return $1(Kf(t))}function P2(t,{firebaseApp:e,modules:n=[]}){t.provide(Cv,e);for(const i of n)t.use(i.bind(null,e))}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const kr=typeof window<"u";function M2(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Te=Object.assign;function Lu(t,e){const n={};for(const i in e){const r=e[i];n[i]=gn(r)?r.map(t):t(r)}return n}const eo=()=>{},gn=Array.isArray,L2=/\/$/,F2=t=>t.replace(L2,"");function Fu(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=t(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=B2(i??e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function U2(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function cy(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function V2(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&as(e.matched[i],n.matched[r])&&sw(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function as(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function sw(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!$2(t[n],e[n]))return!1;return!0}function $2(t,e){return gn(t)?uy(t,e):gn(e)?uy(e,t):t===e}function uy(t,e){return gn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function B2(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/");let r=n.length-1,s,o;for(s=0;s<i.length;s++)if(o=i[s],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(s-(s===i.length?1:0)).join("/")}var Ro;(function(t){t.pop="pop",t.push="push"})(Ro||(Ro={}));var to;(function(t){t.back="back",t.forward="forward",t.unknown=""})(to||(to={}));function j2(t){if(!t)if(kr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),F2(t)}const z2=/^[^#]+#/;function H2(t,e){return t.replace(z2,"#")+e}function K2(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Kc=()=>({left:window.pageXOffset,top:window.pageYOffset});function W2(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=K2(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function hy(t,e){return(history.state?history.state.position-e:-1)+t}const ef=new Map;function q2(t,e){ef.set(t,e)}function G2(t){const e=ef.get(t);return ef.delete(t),e}let Y2=()=>location.protocol+"//"+location.host;function ow(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),cy(l,"")}return cy(n,t)+i+r}function Q2(t,e,n,i){let r=[],s=[],o=null;const a=({state:f})=>{const d=ow(t,location),m=n.value,y=e.value;let b=0;if(f){if(n.value=d,e.value=f,o&&o===m){o=null;return}b=y?f.position-y.position:0}else i(d);r.forEach(_=>{_(n.value,m,{delta:b,type:Ro.pop,direction:b?b>0?to.forward:to.back:to.unknown})})};function l(){o=n.value}function c(f){r.push(f);const d=()=>{const m=r.indexOf(f);m>-1&&r.splice(m,1)};return s.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(Te({},f.state,{scroll:Kc()}),"")}function h(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function fy(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?Kc():null}}function X2(t){const{history:e,location:n}=window,i={value:ow(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:Y2()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),r.value=c}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(l,c){const u=Te({},e.state,fy(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=Te({},r.value,e.state,{forward:l,scroll:Kc()});s(u.current,u,!0);const h=Te({},fy(i.value,l,null),{position:u.position+1},c);s(l,h,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function J2(t){t=j2(t);const e=X2(t),n=Q2(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=Te({location:"",base:t,go:i,createHref:H2.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Z2(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),J2(t)}function eP(t){return typeof t=="string"||t&&typeof t=="object"}function aw(t){return typeof t=="string"||typeof t=="symbol"}const li={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},lw=Symbol("");var dy;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(dy||(dy={}));function ls(t,e){return Te(new Error,{type:t,[lw]:!0},e)}function Un(t,e){return t instanceof Error&&lw in t&&(e==null||!!(t.type&e))}const py="[^/]+?",tP={sensitive:!1,strict:!1,start:!0,end:!0},nP=/[.+*?^${}()[\]/\\]/g;function iP(t,e){const n=Te({},tP,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(nP,"\\$&"),d+=40;else if(f.type===1){const{value:m,repeatable:y,optional:b,regexp:_}=f;s.push({name:m,repeatable:y,optional:b});const w=_||py;if(w!==py){d+=10;try{new RegExp(`(${w})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${m}" (${w}): `+C.message)}}let v=y?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;h||(v=b&&c.length<2?`(?:/${v})`:"/"+v),b&&(v+="?"),r+=v,d+=20,b&&(d+=-8),y&&(d+=-20),w===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",m=s[f-1];h[m.name]=d&&m.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:m,repeatable:y,optional:b}=d,_=m in c?c[m]:"";if(gn(_)&&!y)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const w=gn(_)?_.join("/"):_;if(!w)if(b)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=w}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function rP(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function sP(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=rP(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(my(i))return 1;if(my(r))return-1}return r.length-i.length}function my(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const oP={type:0,value:""},aP=/[a-zA-Z0-9_]/;function lP(t){if(!t)return[[]];if(t==="/")return[[oP]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${c}": ${d}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function h(){c&&(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):f();break;case 4:f(),n=i;break;case 1:l==="("?n=2:aP.test(l)?f():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),r}function cP(t,e,n){const i=iP(lP(t.path),n),r=Te(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function uP(t,e){const n=[],i=new Map;e=_y({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,h,f){const d=!f,m=hP(u);m.aliasOf=f&&f.record;const y=_y(e,u),b=[m];if("alias"in u){const v=typeof u.alias=="string"?[u.alias]:u.alias;for(const C of v)b.push(Te({},m,{components:f?f.record.components:m.components,path:C,aliasOf:f?f.record:m}))}let _,w;for(const v of b){const{path:C}=v;if(h&&C[0]!=="/"){const O=h.record.path,X=O[O.length-1]==="/"?"":"/";v.path=h.record.path+(C&&X+C)}if(_=cP(v,h,y),f?f.alias.push(_):(w=w||_,w!==_&&w.alias.push(_),d&&u.name&&!yy(_)&&o(u.name)),m.children){const O=m.children;for(let X=0;X<O.length;X++)s(O[X],_,f&&f.children[X])}f=f||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&l(_)}return w?()=>{o(w)}:eo}function o(u){if(aw(u)){const h=i.get(u);h&&(i.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&sP(u,n[h])>=0&&(u.record.path!==n[h].record.path||!cw(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!yy(u)&&i.set(u.record.name,u)}function c(u,h){let f,d={},m,y;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw ls(1,{location:u});y=f.record.name,d=Te(gy(h.params,f.keys.filter(w=>!w.optional).map(w=>w.name)),u.params&&gy(u.params,f.keys.map(w=>w.name))),m=f.stringify(d)}else if("path"in u)m=u.path,f=n.find(w=>w.re.test(m)),f&&(d=f.parse(m),y=f.record.name);else{if(f=h.name?i.get(h.name):n.find(w=>w.re.test(h.path)),!f)throw ls(1,{location:u,currentLocation:h});y=f.record.name,d=Te({},h.params,u.params),m=f.stringify(d)}const b=[];let _=f;for(;_;)b.unshift(_.record),_=_.parent;return{name:y,path:m,params:d,matched:b,meta:dP(b)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function gy(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function hP(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:fP(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function fP(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="boolean"?n:n[i];return e}function yy(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function dP(t){return t.reduce((e,n)=>Te(e,n.meta),{})}function _y(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function cw(t,e){return e.children.some(n=>n===t||cw(t,n))}const uw=/#/g,pP=/&/g,mP=/\//g,gP=/=/g,yP=/\?/g,hw=/\+/g,_P=/%5B/g,vP=/%5D/g,fw=/%5E/g,bP=/%60/g,dw=/%7B/g,wP=/%7C/g,pw=/%7D/g,EP=/%20/g;function pp(t){return encodeURI(""+t).replace(wP,"|").replace(_P,"[").replace(vP,"]")}function TP(t){return pp(t).replace(dw,"{").replace(pw,"}").replace(fw,"^")}function tf(t){return pp(t).replace(hw,"%2B").replace(EP,"+").replace(uw,"%23").replace(pP,"%26").replace(bP,"`").replace(dw,"{").replace(pw,"}").replace(fw,"^")}function IP(t){return tf(t).replace(gP,"%3D")}function CP(t){return pp(t).replace(uw,"%23").replace(yP,"%3F")}function SP(t){return t==null?"":CP(t).replace(mP,"%2F")}function Vl(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function AP(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(hw," "),o=s.indexOf("="),a=Vl(o<0?s:s.slice(0,o)),l=o<0?null:Vl(s.slice(o+1));if(a in e){let c=e[a];gn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function vy(t){let e="";for(let n in t){const i=t[n];if(n=IP(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(gn(i)?i.map(s=>s&&tf(s)):[i&&tf(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function kP(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=gn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const RP=Symbol(""),by=Symbol(""),Wc=Symbol(""),mp=Symbol(""),nf=Symbol("");function Ps(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function hi(t,e,n,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(ls(4,{from:n,to:e})):h instanceof Error?a(h):eP(h)?a(ls(2,{from:e,to:h})):(s&&i.enterCallbacks[r]===s&&typeof h=="function"&&s.push(h),o())},c=t.call(i&&i.instances[r],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Uu(t,e,n,i){const r=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(NP(a)){const c=(a.__vccOpts||a)[e];c&&r.push(hi(c,n,i,s,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=M2(c)?c.default:c;s.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&hi(f,n,i,s,o)()}))}}return r}function NP(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function wy(t){const e=Kt(Wc),n=Kt(mp),i=ae(()=>e.resolve(x(t.to))),r=ae(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(as.bind(null,u));if(f>-1)return f;const d=Ey(l[c-2]);return c>1&&Ey(u)===d&&h[h.length-1].path!==d?h.findIndex(as.bind(null,l[c-2])):f}),s=ae(()=>r.value>-1&&PP(n.params,i.value.params)),o=ae(()=>r.value>-1&&r.value===n.matched.length-1&&sw(n.params,i.value.params));function a(l={}){return OP(l)?e[x(t.replace)?"replace":"push"](x(t.to)).catch(eo):Promise.resolve()}return{route:i,href:ae(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const xP=Fo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:wy,setup(t,{slots:e}){const n=Lo(wy(t)),{options:i}=Kt(Wc),r=ae(()=>({[Ty(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Ty(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:sc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),DP=xP;function OP(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function PP(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!gn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function Ey(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ty=(t,e,n)=>t??e??n,MP=Fo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Kt(nf),r=ae(()=>t.route||i.value),s=Kt(by,0),o=ae(()=>{let c=x(s);const{matched:u}=r.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=ae(()=>r.value.matched[o.value]);ja(by,ae(()=>o.value+1)),ja(RP,a),ja(nf,r);const l=pt();return Ur(()=>[l.value,a.value,t.name],([c,u,h],[f,d,m])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!as(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return Iy(n.default,{Component:f,route:c});const d=h.props[u],m=d?d===!0?c.params:typeof d=="function"?d(c):d:null,b=sc(f,Te({},m,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Iy(n.default,{Component:b,route:c})||b}}});function Iy(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const mw=MP;function LP(t){const e=uP(t.routes,t),n=t.parseQuery||AP,i=t.stringifyQuery||vy,r=t.history,s=Ps(),o=Ps(),a=Ps(),l=w_(li);let c=li;kr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Lu.bind(null,I=>""+I),h=Lu.bind(null,SP),f=Lu.bind(null,Vl);function d(I,U){let L,H;return aw(I)?(L=e.getRecordMatcher(I),H=U):H=I,e.addRoute(H,L)}function m(I){const U=e.getRecordMatcher(I);U&&e.removeRoute(U)}function y(){return e.getRoutes().map(I=>I.record)}function b(I){return!!e.getRecordMatcher(I)}function _(I,U){if(U=Te({},U||l.value),typeof I=="string"){const p=Fu(n,I,U.path),g=e.resolve({path:p.path},U),E=r.createHref(p.fullPath);return Te(p,g,{params:f(g.params),hash:Vl(p.hash),redirectedFrom:void 0,href:E})}let L;if("path"in I)L=Te({},I,{path:Fu(n,I.path,U.path).path});else{const p=Te({},I.params);for(const g in p)p[g]==null&&delete p[g];L=Te({},I,{params:h(I.params)}),U.params=h(U.params)}const H=e.resolve(L,U),ge=I.hash||"";H.params=u(f(H.params));const je=U2(i,Te({},I,{hash:TP(ge),path:H.path})),le=r.createHref(je);return Te({fullPath:je,hash:ge,query:i===vy?kP(I.query):I.query||{}},H,{redirectedFrom:void 0,href:le})}function w(I){return typeof I=="string"?Fu(n,I,l.value.path):Te({},I)}function v(I,U){if(c!==I)return ls(8,{from:U,to:I})}function C(I){return se(I)}function O(I){return C(Te(w(I),{replace:!0}))}function X(I){const U=I.matched[I.matched.length-1];if(U&&U.redirect){const{redirect:L}=U;let H=typeof L=="function"?L(I):L;return typeof H=="string"&&(H=H.includes("?")||H.includes("#")?H=w(H):{path:H},H.params={}),Te({query:I.query,hash:I.hash,params:"path"in H?{}:I.params},H)}}function se(I,U){const L=c=_(I),H=l.value,ge=I.state,je=I.force,le=I.replace===!0,p=X(L);if(p)return se(Te(w(p),{state:typeof p=="object"?Te({},ge,p.state):ge,force:je,replace:le}),U||L);const g=L;g.redirectedFrom=U;let E;return!je&&V2(i,H,L)&&(E=ls(16,{to:g,from:H}),Oi(H,H,!0,!1)),(E?Promise.resolve(E):Fe(g,H)).catch(T=>Un(T)?Un(T,2)?T:en(T):Ae(T,g,H)).then(T=>{if(T){if(Un(T,2))return se(Te({replace:le},w(T.to),{state:typeof T.to=="object"?Te({},ge,T.to.state):ge,force:je}),U||g)}else T=Fn(g,H,!0,le,ge);return Be(g,H,T),T})}function fe(I,U){const L=v(I,U);return L?Promise.reject(L):Promise.resolve()}function Fe(I,U){let L;const[H,ge,je]=FP(I,U);L=Uu(H.reverse(),"beforeRouteLeave",I,U);for(const p of H)p.leaveGuards.forEach(g=>{L.push(hi(g,I,U))});const le=fe.bind(null,I,U);return L.push(le),Ir(L).then(()=>{L=[];for(const p of s.list())L.push(hi(p,I,U));return L.push(le),Ir(L)}).then(()=>{L=Uu(ge,"beforeRouteUpdate",I,U);for(const p of ge)p.updateGuards.forEach(g=>{L.push(hi(g,I,U))});return L.push(le),Ir(L)}).then(()=>{L=[];for(const p of I.matched)if(p.beforeEnter&&!U.matched.includes(p))if(gn(p.beforeEnter))for(const g of p.beforeEnter)L.push(hi(g,I,U));else L.push(hi(p.beforeEnter,I,U));return L.push(le),Ir(L)}).then(()=>(I.matched.forEach(p=>p.enterCallbacks={}),L=Uu(je,"beforeRouteEnter",I,U),L.push(le),Ir(L))).then(()=>{L=[];for(const p of o.list())L.push(hi(p,I,U));return L.push(le),Ir(L)}).catch(p=>Un(p,8)?p:Promise.reject(p))}function Be(I,U,L){for(const H of a.list())H(I,U,L)}function Fn(I,U,L,H,ge){const je=v(I,U);if(je)return je;const le=U===li,p=kr?history.state:{};L&&(H||le?r.replace(I.fullPath,Te({scroll:le&&p&&p.scroll},ge)):r.push(I.fullPath,ge)),l.value=I,Oi(I,U,L,le),en()}let yn;function br(){yn||(yn=r.listen((I,U,L)=>{if(!ha.listening)return;const H=_(I),ge=X(H);if(ge){se(Te(ge,{replace:!0}),H).catch(eo);return}c=H;const je=l.value;kr&&q2(hy(je.fullPath,L.delta),Kc()),Fe(H,je).catch(le=>Un(le,12)?le:Un(le,2)?(se(le.to,H).then(p=>{Un(p,20)&&!L.delta&&L.type===Ro.pop&&r.go(-1,!1)}).catch(eo),Promise.reject()):(L.delta&&r.go(-L.delta,!1),Ae(le,H,je))).then(le=>{le=le||Fn(H,je,!1),le&&(L.delta&&!Un(le,8)?r.go(-L.delta,!1):L.type===Ro.pop&&Un(le,20)&&r.go(-1,!1)),Be(H,je,le)}).catch(eo)}))}let Di=Ps(),Ss=Ps(),Ge;function Ae(I,U,L){en(I);const H=Ss.list();return H.length?H.forEach(ge=>ge(I,U,L)):console.error(I),Promise.reject(I)}function Ie(){return Ge&&l.value!==li?Promise.resolve():new Promise((I,U)=>{Di.add([I,U])})}function en(I){return Ge||(Ge=!I,br(),Di.list().forEach(([U,L])=>I?L(I):U()),Di.reset()),I}function Oi(I,U,L,H){const{scrollBehavior:ge}=t;if(!kr||!ge)return Promise.resolve();const je=!L&&G2(hy(I.fullPath,0))||(H||!L)&&history.state&&history.state.scroll||null;return S_().then(()=>ge(I,U,je)).then(le=>le&&W2(le)).catch(le=>Ae(le,I,U))}const tn=I=>r.go(I);let Dt;const wr=new Set,ha={currentRoute:l,listening:!0,addRoute:d,removeRoute:m,hasRoute:b,getRoutes:y,resolve:_,options:t,push:C,replace:O,go:tn,back:()=>tn(-1),forward:()=>tn(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:Ss.add,isReady:Ie,install(I){const U=this;I.component("RouterLink",DP),I.component("RouterView",mw),I.config.globalProperties.$router=U,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>x(l)}),kr&&!Dt&&l.value===li&&(Dt=!0,C(r.location).catch(ge=>{}));const L={};for(const ge in li)L[ge]=ae(()=>l.value[ge]);I.provide(Wc,U),I.provide(mp,Lo(L)),I.provide(nf,l);const H=I.unmount;wr.add(I),I.unmount=function(){wr.delete(I),wr.size<1&&(c=li,yn&&yn(),yn=null,l.value=li,Dt=!1,Ge=!1),H()}}};return ha}function Ir(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function FP(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>as(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>as(c,l))||r.push(l))}return[n,i,r]}function qc(){return Kt(Wc)}function Gc(){return Kt(mp)}const UP={class:"container"},VP={__name:"App",setup(t){const e=Gc();return(n,i)=>{const r=F_("RouterView");return G(),ne("div",UP,[(G(),Gn(r,{key:x(e).fullPath}))])}}},Mn=av({apiKey:"AIzaSyAnOiG77O1ukT9C2x8u1VbMLw7For9C_3w",authDomain:"bingo-50cec.firebaseapp.com",databaseURL:"https://bingo-50cec-default-rtdb.europe-west1.firebasedatabase.app",projectId:"bingo-50cec",storageBucket:"bingo-50cec.appspot.com",messagingSenderId:"866066986693",appId:"1:866066986693:web:de513df8434d232b0562ac",measurementId:"G-8F3EECYHQ0"}),$P=$1(Mn);ss($P,"todos");function Cy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function V(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Cy(Object(n),!0).forEach(function(i){it(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Cy(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function $l(t){return $l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$l(t)}function BP(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Sy(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function jP(t,e,n){return e&&Sy(t.prototype,e),n&&Sy(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function it(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function gp(t,e){return HP(t)||WP(t,e)||gw(t,e)||GP()}function aa(t){return zP(t)||KP(t)||gw(t)||qP()}function zP(t){if(Array.isArray(t))return rf(t)}function HP(t){if(Array.isArray(t))return t}function KP(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function WP(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],r=!0,s=!1,o,a;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(l){s=!0,a=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(s)throw a}}return i}}function gw(t,e){if(t){if(typeof t=="string")return rf(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return rf(t,e)}}function rf(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function qP(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function GP(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ay=function(){},yp={},yw={},_w=null,vw={mark:Ay,measure:Ay};try{typeof window<"u"&&(yp=window),typeof document<"u"&&(yw=document),typeof MutationObserver<"u"&&(_w=MutationObserver),typeof performance<"u"&&(vw=performance)}catch{}var YP=yp.navigator||{},ky=YP.userAgent,Ry=ky===void 0?"":ky,Ci=yp,Pe=yw,Ny=_w,xa=vw;Ci.document;var si=!!Pe.documentElement&&!!Pe.head&&typeof Pe.addEventListener=="function"&&typeof Pe.createElement=="function",bw=~Ry.indexOf("MSIE")||~Ry.indexOf("Trident/"),Da,Oa,Pa,Ma,La,Zn="___FONT_AWESOME___",sf=16,ww="fa",Ew="svg-inline--fa",ur="data-fa-i2svg",of="data-fa-pseudo-element",QP="data-fa-pseudo-element-pending",_p="data-prefix",vp="data-icon",xy="fontawesome-i2svg",XP="async",JP=["HTML","HEAD","STYLE","SCRIPT"],Tw=function(){try{return!0}catch{return!1}}(),De="classic",Ke="sharp",bp=[De,Ke];function la(t){return new Proxy(t,{get:function(n,i){return i in n?n[i]:n[De]}})}var No=la((Da={},it(Da,De,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),it(Da,Ke,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Da)),xo=la((Oa={},it(Oa,De,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),it(Oa,Ke,{solid:"fass",regular:"fasr",light:"fasl"}),Oa)),Do=la((Pa={},it(Pa,De,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),it(Pa,Ke,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Pa)),ZP=la((Ma={},it(Ma,De,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),it(Ma,Ke,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Ma)),eM=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Iw="fa-layers-text",tM=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,nM=la((La={},it(La,De,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),it(La,Ke,{900:"fass",400:"fasr",300:"fasl"}),La)),Cw=[1,2,3,4,5,6,7,8,9,10],iM=Cw.concat([11,12,13,14,15,16,17,18,19,20]),rM=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Gi={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Oo=new Set;Object.keys(xo[De]).map(Oo.add.bind(Oo));Object.keys(xo[Ke]).map(Oo.add.bind(Oo));var sM=[].concat(bp,aa(Oo),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Gi.GROUP,Gi.SWAP_OPACITY,Gi.PRIMARY,Gi.SECONDARY]).concat(Cw.map(function(t){return"".concat(t,"x")})).concat(iM.map(function(t){return"w-".concat(t)})),no=Ci.FontAwesomeConfig||{};function oM(t){var e=Pe.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function aM(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Pe&&typeof Pe.querySelector=="function"){var lM=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];lM.forEach(function(t){var e=gp(t,2),n=e[0],i=e[1],r=aM(oM(n));r!=null&&(no[i]=r)})}var Sw={styleDefault:"solid",familyDefault:"classic",cssPrefix:ww,replacementClass:Ew,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};no.familyPrefix&&(no.cssPrefix=no.familyPrefix);var cs=V(V({},Sw),no);cs.autoReplaceSvg||(cs.observeMutations=!1);var B={};Object.keys(Sw).forEach(function(t){Object.defineProperty(B,t,{enumerable:!0,set:function(n){cs[t]=n,io.forEach(function(i){return i(B)})},get:function(){return cs[t]}})});Object.defineProperty(B,"familyPrefix",{enumerable:!0,set:function(e){cs.cssPrefix=e,io.forEach(function(n){return n(B)})},get:function(){return cs.cssPrefix}});Ci.FontAwesomeConfig=B;var io=[];function cM(t){return io.push(t),function(){io.splice(io.indexOf(t),1)}}var ci=sf,Cn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function uM(t){if(!(!t||!si)){var e=Pe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Pe.head.childNodes,i=null,r=n.length-1;r>-1;r--){var s=n[r],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=s)}return Pe.head.insertBefore(e,i),t}}var hM="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Po(){for(var t=12,e="";t-- >0;)e+=hM[Math.random()*62|0];return e}function Is(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function wp(t){return t.classList?Is(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Aw(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function fM(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Aw(t[n]),'" ')},"").trim()}function Yc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Ep(t){return t.size!==Cn.size||t.x!==Cn.x||t.y!==Cn.y||t.rotate!==Cn.rotate||t.flipX||t.flipY}function dM(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:c}}function pM(t){var e=t.transform,n=t.width,i=n===void 0?sf:n,r=t.height,s=r===void 0?sf:r,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&bw?l+="translate(".concat(e.x/ci-i/2,"em, ").concat(e.y/ci-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/ci,"em), calc(-50% + ").concat(e.y/ci,"em)) "):l+="translate(".concat(e.x/ci,"em, ").concat(e.y/ci,"em) "),l+="scale(".concat(e.size/ci*(e.flipX?-1:1),", ").concat(e.size/ci*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var mM=`:root, :host {
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
}`;function kw(){var t=ww,e=Ew,n=B.cssPrefix,i=B.replacementClass,r=mM;if(n!==t||i!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(i))}return r}var Dy=!1;function Vu(){B.autoAddCss&&!Dy&&(uM(kw()),Dy=!0)}var gM={mixout:function(){return{dom:{css:kw,insertCss:Vu}}},hooks:function(){return{beforeDOMElementCreation:function(){Vu()},beforeI2svg:function(){Vu()}}}},ei=Ci||{};ei[Zn]||(ei[Zn]={});ei[Zn].styles||(ei[Zn].styles={});ei[Zn].hooks||(ei[Zn].hooks={});ei[Zn].shims||(ei[Zn].shims=[]);var un=ei[Zn],Rw=[],yM=function t(){Pe.removeEventListener("DOMContentLoaded",t),Bl=1,Rw.map(function(e){return e()})},Bl=!1;si&&(Bl=(Pe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Pe.readyState),Bl||Pe.addEventListener("DOMContentLoaded",yM));function _M(t){si&&(Bl?setTimeout(t,0):Rw.push(t))}function ca(t){var e=t.tag,n=t.attributes,i=n===void 0?{}:n,r=t.children,s=r===void 0?[]:r;return typeof t=="string"?Aw(t):"<".concat(e," ").concat(fM(i),">").concat(s.map(ca).join(""),"</").concat(e,">")}function Oy(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var vM=function(e,n){return function(i,r,s,o){return e.call(n,i,r,s,o)}},$u=function(e,n,i,r){var s=Object.keys(e),o=s.length,a=r!==void 0?vM(n,r):n,l,c,u;for(i===void 0?(l=1,u=e[s[0]]):(l=0,u=i);l<o;l++)c=s[l],u=a(u,e[c],c,e);return u};function bM(t){for(var e=[],n=0,i=t.length;n<i;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function af(t){var e=bM(t);return e.length===1?e[0].toString(16):null}function wM(t,e){var n=t.length,i=t.charCodeAt(e),r;return i>=55296&&i<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function Py(t){return Object.keys(t).reduce(function(e,n){var i=t[n],r=!!i.icon;return r?e[i.iconName]=i.icon:e[n]=i,e},{})}function lf(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,r=i===void 0?!1:i,s=Py(e);typeof un.hooks.addPack=="function"&&!r?un.hooks.addPack(t,Py(e)):un.styles[t]=V(V({},un.styles[t]||{}),s),t==="fas"&&lf("fa",e)}var Fa,Ua,Va,Dr=un.styles,EM=un.shims,TM=(Fa={},it(Fa,De,Object.values(Do[De])),it(Fa,Ke,Object.values(Do[Ke])),Fa),Tp=null,Nw={},xw={},Dw={},Ow={},Pw={},IM=(Ua={},it(Ua,De,Object.keys(No[De])),it(Ua,Ke,Object.keys(No[Ke])),Ua);function CM(t){return~sM.indexOf(t)}function SM(t,e){var n=e.split("-"),i=n[0],r=n.slice(1).join("-");return i===t&&r!==""&&!CM(r)?r:null}var Mw=function(){var e=function(s){return $u(Dr,function(o,a,l){return o[l]=$u(a,s,{}),o},{})};Nw=e(function(r,s,o){if(s[3]&&(r[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){r[l.toString(16)]=o})}return r}),xw=e(function(r,s,o){if(r[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){r[l]=o})}return r}),Pw=e(function(r,s,o){var a=s[2];return r[o]=o,a.forEach(function(l){r[l]=o}),r});var n="far"in Dr||B.autoFetchSvg,i=$u(EM,function(r,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(r.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:a,iconName:l}),r},{names:{},unicodes:{}});Dw=i.names,Ow=i.unicodes,Tp=Qc(B.styleDefault,{family:B.familyDefault})};cM(function(t){Tp=Qc(t.styleDefault,{family:B.familyDefault})});Mw();function Ip(t,e){return(Nw[t]||{})[e]}function AM(t,e){return(xw[t]||{})[e]}function Yi(t,e){return(Pw[t]||{})[e]}function Lw(t){return Dw[t]||{prefix:null,iconName:null}}function kM(t){var e=Ow[t],n=Ip("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Si(){return Tp}var Cp=function(){return{prefix:null,iconName:null,rest:[]}};function Qc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,i=n===void 0?De:n,r=No[i][t],s=xo[i][t]||xo[i][r],o=t in un.styles?t:null;return s||o||null}var My=(Va={},it(Va,De,Object.keys(Do[De])),it(Va,Ke,Object.keys(Do[Ke])),Va);function Xc(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.skipLookups,r=i===void 0?!1:i,s=(e={},it(e,De,"".concat(B.cssPrefix,"-").concat(De)),it(e,Ke,"".concat(B.cssPrefix,"-").concat(Ke)),e),o=null,a=De;(t.includes(s[De])||t.some(function(c){return My[De].includes(c)}))&&(a=De),(t.includes(s[Ke])||t.some(function(c){return My[Ke].includes(c)}))&&(a=Ke);var l=t.reduce(function(c,u){var h=SM(B.cssPrefix,u);if(Dr[u]?(u=TM[a].includes(u)?ZP[a][u]:u,o=u,c.prefix=u):IM[a].indexOf(u)>-1?(o=u,c.prefix=Qc(u,{family:a})):h?c.iconName=h:u!==B.replacementClass&&u!==s[De]&&u!==s[Ke]&&c.rest.push(u),!r&&c.prefix&&c.iconName){var f=o==="fa"?Lw(c.iconName):{},d=Yi(c.prefix,c.iconName);f.prefix&&(o=null),c.iconName=f.iconName||d||c.iconName,c.prefix=f.prefix||c.prefix,c.prefix==="far"&&!Dr.far&&Dr.fas&&!B.autoFetchSvg&&(c.prefix="fas")}return c},Cp());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===Ke&&(Dr.fass||B.autoFetchSvg)&&(l.prefix="fass",l.iconName=Yi(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Si()||"fas"),l}var RM=function(){function t(){BP(this,t),this.definitions={}}return jP(t,[{key:"add",value:function(){for(var n=this,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=V(V({},n.definitions[a]||{}),o[a]),lf(a,o[a]);var l=Do[De][a];l&&lf(l,o[a]),Mw()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var r=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(r).map(function(s){var o=r[s],a=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(h){typeof h=="string"&&(n[a][h]=c)}),n[a][l]=c}),n}}]),t}(),Ly=[],Or={},Kr={},NM=Object.keys(Kr);function xM(t,e){var n=e.mixoutsTo;return Ly=t,Or={},Object.keys(Kr).forEach(function(i){NM.indexOf(i)===-1&&delete Kr[i]}),Ly.forEach(function(i){var r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),$l(r[o])==="object"&&Object.keys(r[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=r[o][a]})}),i.hooks){var s=i.hooks();Object.keys(s).forEach(function(o){Or[o]||(Or[o]=[]),Or[o].push(s[o])})}i.provides&&i.provides(Kr)}),n}function cf(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];var s=Or[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(i))}),e}function hr(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var r=Or[t]||[];r.forEach(function(s){s.apply(null,n)})}function ti(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Kr[t]?Kr[t].apply(null,e):void 0}function uf(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Si();if(e)return e=Yi(n,e)||e,Oy(Fw.definitions,n,e)||Oy(un.styles,n,e)}var Fw=new RM,DM=function(){B.autoReplaceSvg=!1,B.observeMutations=!1,hr("noAuto")},OM={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return si?(hr("beforeI2svg",e),ti("pseudoElements2svg",e),ti("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;B.autoReplaceSvg===!1&&(B.autoReplaceSvg=!0),B.observeMutations=!0,_M(function(){MM({autoReplaceSvgRoot:n}),hr("watch",e)})}},PM={icon:function(e){if(e===null)return null;if($l(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Yi(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=Qc(e[0]);return{prefix:i,iconName:Yi(i,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(B.cssPrefix,"-"))>-1||e.match(eM))){var r=Xc(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||Si(),iconName:Yi(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var s=Si();return{prefix:s,iconName:Yi(s,e)||e}}}},Qt={noAuto:DM,config:B,dom:OM,parse:PM,library:Fw,findIconDefinition:uf,toHtml:ca},MM=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,i=n===void 0?Pe:n;(Object.keys(un.styles).length>0||B.autoFetchSvg)&&si&&B.autoReplaceSvg&&Qt.dom.i2svg({node:i})};function Jc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return ca(i)})}}),Object.defineProperty(t,"node",{get:function(){if(si){var i=Pe.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function LM(t){var e=t.children,n=t.main,i=t.mask,r=t.attributes,s=t.styles,o=t.transform;if(Ep(o)&&n.found&&!i.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};r.style=Yc(V(V({},s),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function FM(t){var e=t.prefix,n=t.iconName,i=t.children,r=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(B.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:V(V({},r),{},{id:o}),children:i}]}]}function Sp(t){var e=t.icons,n=e.main,i=e.mask,r=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,c=t.maskId,u=t.titleId,h=t.extra,f=t.watchable,d=f===void 0?!1:f,m=i.found?i:n,y=m.width,b=m.height,_=r==="fak",w=[B.replacementClass,s?"".concat(B.cssPrefix,"-").concat(s):""].filter(function(Fe){return h.classes.indexOf(Fe)===-1}).filter(function(Fe){return Fe!==""||!!Fe}).concat(h.classes).join(" "),v={children:[],attributes:V(V({},h.attributes),{},{"data-prefix":r,"data-icon":s,class:w,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(b)})},C=_&&!~h.classes.indexOf("fa-fw")?{width:"".concat(y/b*16*.0625,"em")}:{};d&&(v.attributes[ur]=""),l&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(u||Po())},children:[l]}),delete v.attributes.title);var O=V(V({},v),{},{prefix:r,iconName:s,main:n,mask:i,maskId:c,transform:o,symbol:a,styles:V(V({},C),h.styles)}),X=i.found&&n.found?ti("generateAbstractMask",O)||{children:[],attributes:{}}:ti("generateAbstractIcon",O)||{children:[],attributes:{}},se=X.children,fe=X.attributes;return O.children=se,O.attributes=fe,a?FM(O):LM(O)}function Fy(t){var e=t.content,n=t.width,i=t.height,r=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,c=V(V(V({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(c[ur]="");var u=V({},o.styles);Ep(r)&&(u.transform=pM({transform:r,startCentered:!0,width:n,height:i}),u["-webkit-transform"]=u.transform);var h=Yc(u);h.length>0&&(c.style=h);var f=[];return f.push({tag:"span",attributes:c,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function UM(t){var e=t.content,n=t.title,i=t.extra,r=V(V(V({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),s=Yc(i.styles);s.length>0&&(r.style=s);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Bu=un.styles;function hf(t){var e=t[0],n=t[1],i=t.slice(4),r=gp(i,1),s=r[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(B.cssPrefix,"-").concat(Gi.GROUP)},children:[{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat(Gi.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat(Gi.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var VM={found:!1,width:512,height:512};function $M(t,e){!Tw&&!B.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function ff(t,e){var n=e;return e==="fa"&&B.styleDefault!==null&&(e=Si()),new Promise(function(i,r){if(ti("missingIconAbstract"),n==="fa"){var s=Lw(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Bu[e]&&Bu[e][t]){var o=Bu[e][t];return i(hf(o))}$M(t,e),i(V(V({},VM),{},{icon:B.showMissingIcons&&t?ti("missingIconAbstract")||{}:{}}))})}var Uy=function(){},df=B.measurePerformance&&xa&&xa.mark&&xa.measure?xa:{mark:Uy,measure:Uy},Bs='FA "6.4.0"',BM=function(e){return df.mark("".concat(Bs," ").concat(e," begins")),function(){return Uw(e)}},Uw=function(e){df.mark("".concat(Bs," ").concat(e," ends")),df.measure("".concat(Bs," ").concat(e),"".concat(Bs," ").concat(e," begins"),"".concat(Bs," ").concat(e," ends"))},Ap={begin:BM,end:Uw},Xa=function(){};function Vy(t){var e=t.getAttribute?t.getAttribute(ur):null;return typeof e=="string"}function jM(t){var e=t.getAttribute?t.getAttribute(_p):null,n=t.getAttribute?t.getAttribute(vp):null;return e&&n}function zM(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(B.replacementClass)}function HM(){if(B.autoReplaceSvg===!0)return Ja.replace;var t=Ja[B.autoReplaceSvg];return t||Ja.replace}function KM(t){return Pe.createElementNS("http://www.w3.org/2000/svg",t)}function WM(t){return Pe.createElement(t)}function Vw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,i=n===void 0?t.tag==="svg"?KM:WM:n;if(typeof t=="string")return Pe.createTextNode(t);var r=i(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){r.appendChild(Vw(o,{ceFn:i}))}),r}function qM(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Ja={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(Vw(r),n)}),n.getAttribute(ur)===null&&B.keepOriginalSource){var i=Pe.createComment(qM(n));n.parentNode.replaceChild(i,n)}else n.remove()},nest:function(e){var n=e[0],i=e[1];if(~wp(n).indexOf(B.replacementClass))return Ja.replace(e);var r=new RegExp("".concat(B.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var s=i[0].attributes.class.split(" ").reduce(function(a,l){return l===B.replacementClass||l.match(r)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});i[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=i.map(function(a){return ca(a)}).join(`
`);n.setAttribute(ur,""),n.innerHTML=o}};function $y(t){t()}function $w(t,e){var n=typeof e=="function"?e:Xa;if(t.length===0)n();else{var i=$y;B.mutateApproach===XP&&(i=Ci.requestAnimationFrame||$y),i(function(){var r=HM(),s=Ap.begin("mutate");t.map(r),s(),n()})}}var kp=!1;function Bw(){kp=!0}function pf(){kp=!1}var jl=null;function By(t){if(Ny&&B.observeMutations){var e=t.treeCallback,n=e===void 0?Xa:e,i=t.nodeCallback,r=i===void 0?Xa:i,s=t.pseudoElementsCallback,o=s===void 0?Xa:s,a=t.observeMutationsRoot,l=a===void 0?Pe:a;jl=new Ny(function(c){if(!kp){var u=Si();Is(c).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!Vy(h.addedNodes[0])&&(B.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&B.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&Vy(h.target)&&~rM.indexOf(h.attributeName))if(h.attributeName==="class"&&jM(h.target)){var f=Xc(wp(h.target)),d=f.prefix,m=f.iconName;h.target.setAttribute(_p,d||u),m&&h.target.setAttribute(vp,m)}else zM(h.target)&&r(h.target)})}}),si&&jl.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function GM(){jl&&jl.disconnect()}function YM(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(i,r){var s=r.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(i[o]=a.join(":").trim()),i},{})),n}function QM(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"",r=Xc(wp(t));return r.prefix||(r.prefix=Si()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=AM(r.prefix,t.innerText)||Ip(r.prefix,af(t.innerText))),!r.iconName&&B.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function XM(t){var e=Is(t.attributes).reduce(function(r,s){return r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r},{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return B.autoA11y&&(n?e["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(i||Po()):(e["aria-hidden"]="true",e.focusable="false")),e}function JM(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Cn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function jy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=QM(t),i=n.iconName,r=n.prefix,s=n.rest,o=XM(t),a=cf("parseNodeAttributes",{},t),l=e.styleParser?YM(t):[];return V({iconName:i,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:Cn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var ZM=un.styles;function jw(t){var e=B.autoReplaceSvg==="nest"?jy(t,{styleParser:!1}):jy(t);return~e.extra.classes.indexOf(Iw)?ti("generateLayersText",t,e):ti("generateSvgReplacementMutation",t,e)}var Ai=new Set;bp.map(function(t){Ai.add("fa-".concat(t))});Object.keys(No[De]).map(Ai.add.bind(Ai));Object.keys(No[Ke]).map(Ai.add.bind(Ai));Ai=aa(Ai);function zy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!si)return Promise.resolve();var n=Pe.documentElement.classList,i=function(h){return n.add("".concat(xy,"-").concat(h))},r=function(h){return n.remove("".concat(xy,"-").concat(h))},s=B.autoFetchSvg?Ai:bp.map(function(u){return"fa-".concat(u)}).concat(Object.keys(ZM));s.includes("fa")||s.push("fa");var o=[".".concat(Iw,":not([").concat(ur,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(ur,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Is(t.querySelectorAll(o))}catch{}if(a.length>0)i("pending"),r("complete");else return Promise.resolve();var l=Ap.begin("onTree"),c=a.reduce(function(u,h){try{var f=jw(h);f&&u.push(f)}catch(d){Tw||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise(function(u,h){Promise.all(c).then(function(f){$w(f,function(){i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(f){l(),h(f)})})}function eL(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;jw(t).then(function(n){n&&$w([n],e)})}function tL(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:uf(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:uf(r||{})),t(i,V(V({},n),{},{mask:r}))}}var nL=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,r=i===void 0?Cn:i,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,c=n.maskId,u=c===void 0?null:c,h=n.title,f=h===void 0?null:h,d=n.titleId,m=d===void 0?null:d,y=n.classes,b=y===void 0?[]:y,_=n.attributes,w=_===void 0?{}:_,v=n.styles,C=v===void 0?{}:v;if(e){var O=e.prefix,X=e.iconName,se=e.icon;return Jc(V({type:"icon"},e),function(){return hr("beforeDOMElementCreation",{iconDefinition:e,params:n}),B.autoA11y&&(f?w["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(m||Po()):(w["aria-hidden"]="true",w.focusable="false")),Sp({icons:{main:hf(se),mask:l?hf(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:O,iconName:X,transform:V(V({},Cn),r),symbol:o,title:f,maskId:u,titleId:m,extra:{attributes:w,styles:C,classes:b}})})}},iL={mixout:function(){return{icon:tL(nL)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=zy,n.nodeCallback=eL,n}}},provides:function(e){e.i2svg=function(n){var i=n.node,r=i===void 0?Pe:i,s=n.callback,o=s===void 0?function(){}:s;return zy(r,o)},e.generateSvgReplacementMutation=function(n,i){var r=i.iconName,s=i.title,o=i.titleId,a=i.prefix,l=i.transform,c=i.symbol,u=i.mask,h=i.maskId,f=i.extra;return new Promise(function(d,m){Promise.all([ff(r,a),u.iconName?ff(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var b=gp(y,2),_=b[0],w=b[1];d([n,Sp({icons:{main:_,mask:w},prefix:a,iconName:r,transform:l,symbol:c,maskId:h,title:s,titleId:o,extra:f,watchable:!0})])}).catch(m)})},e.generateAbstractIcon=function(n){var i=n.children,r=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Yc(a);l.length>0&&(r.style=l);var c;return Ep(o)&&(c=ti("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),i.push(c||s.icon),{children:i,attributes:r}}}},rL={mixout:function(){return{layer:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.classes,s=r===void 0?[]:r;return Jc({type:"layer"},function(){hr("beforeDOMElementCreation",{assembler:n,params:i});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(B.cssPrefix,"-layers")].concat(aa(s)).join(" ")},children:o}]})}}}},sL={mixout:function(){return{counter:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.title,s=r===void 0?null:r,o=i.classes,a=o===void 0?[]:o,l=i.attributes,c=l===void 0?{}:l,u=i.styles,h=u===void 0?{}:u;return Jc({type:"counter",content:n},function(){return hr("beforeDOMElementCreation",{content:n,params:i}),UM({content:n.toString(),title:s,extra:{attributes:c,styles:h,classes:["".concat(B.cssPrefix,"-layers-counter")].concat(aa(a))}})})}}}},oL={mixout:function(){return{text:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.transform,s=r===void 0?Cn:r,o=i.title,a=o===void 0?null:o,l=i.classes,c=l===void 0?[]:l,u=i.attributes,h=u===void 0?{}:u,f=i.styles,d=f===void 0?{}:f;return Jc({type:"text",content:n},function(){return hr("beforeDOMElementCreation",{content:n,params:i}),Fy({content:n,transform:V(V({},Cn),s),title:a,extra:{attributes:h,styles:d,classes:["".concat(B.cssPrefix,"-layers-text")].concat(aa(c))}})})}}},provides:function(e){e.generateLayersText=function(n,i){var r=i.title,s=i.transform,o=i.extra,a=null,l=null;if(bw){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/c,l=u.height/c}return B.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Fy({content:n.innerHTML,width:a,height:l,transform:s,title:r,extra:o,watchable:!0})])}}},aL=new RegExp('"',"ug"),Hy=[1105920,1112319];function lL(t){var e=t.replace(aL,""),n=wM(e,0),i=n>=Hy[0]&&n<=Hy[1],r=e.length===2?e[0]===e[1]:!1;return{value:af(r?e[0]:e),isSecondary:i||r}}function Ky(t,e){var n="".concat(QP).concat(e.replace(":","-"));return new Promise(function(i,r){if(t.getAttribute(n)!==null)return i();var s=Is(t.children),o=s.filter(function(se){return se.getAttribute(of)===e})[0],a=Ci.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(tM),c=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),i();if(l&&u!=="none"&&u!==""){var h=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?Ke:De,d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?xo[f][l[2].toLowerCase()]:nM[f][c],m=lL(h),y=m.value,b=m.isSecondary,_=l[0].startsWith("FontAwesome"),w=Ip(d,y),v=w;if(_){var C=kM(y);C.iconName&&C.prefix&&(w=C.iconName,d=C.prefix)}if(w&&!b&&(!o||o.getAttribute(_p)!==d||o.getAttribute(vp)!==v)){t.setAttribute(n,v),o&&t.removeChild(o);var O=JM(),X=O.extra;X.attributes[of]=e,ff(w,d).then(function(se){var fe=Sp(V(V({},O),{},{icons:{main:se,mask:Cp()},prefix:d,iconName:v,extra:X,watchable:!0})),Fe=Pe.createElement("svg");e==="::before"?t.insertBefore(Fe,t.firstChild):t.appendChild(Fe),Fe.outerHTML=fe.map(function(Be){return ca(Be)}).join(`
`),t.removeAttribute(n),i()}).catch(r)}else i()}else i()})}function cL(t){return Promise.all([Ky(t,"::before"),Ky(t,"::after")])}function uL(t){return t.parentNode!==document.head&&!~JP.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(of)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Wy(t){if(si)return new Promise(function(e,n){var i=Is(t.querySelectorAll("*")).filter(uL).map(cL),r=Ap.begin("searchPseudoElements");Bw(),Promise.all(i).then(function(){r(),pf(),e()}).catch(function(){r(),pf(),n()})})}var hL={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Wy,n}}},provides:function(e){e.pseudoElements2svg=function(n){var i=n.node,r=i===void 0?Pe:i;B.searchPseudoElements&&Wy(r)}}},qy=!1,fL={mixout:function(){return{dom:{unwatch:function(){Bw(),qy=!0}}}},hooks:function(){return{bootstrap:function(){By(cf("mutationObserverCallbacks",{}))},noAuto:function(){GM()},watch:function(n){var i=n.observeMutationsRoot;qy?pf():By(cf("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},Gy=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,r){var s=r.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return i.flipX=!0,i;if(o&&a==="v")return i.flipY=!0,i;if(a=parseFloat(a),isNaN(a))return i;switch(o){case"grow":i.size=i.size+a;break;case"shrink":i.size=i.size-a;break;case"left":i.x=i.x-a;break;case"right":i.x=i.x+a;break;case"up":i.y=i.y-a;break;case"down":i.y=i.y+a;break;case"rotate":i.rotate=i.rotate+a;break}return i},n)},dL={mixout:function(){return{parse:{transform:function(n){return Gy(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-transform");return r&&(n.transform=Gy(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var i=n.main,r=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(l," ").concat(c," ").concat(u)},f={transform:"translate(".concat(o/2*-1," -256)")},d={outer:a,inner:h,path:f};return{tag:"g",attributes:V({},d.outer),children:[{tag:"g",attributes:V({},d.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:V(V({},i.icon.attributes),d.path)}]}]}}}},ju={x:0,y:0,width:"100%",height:"100%"};function Yy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function pL(t){return t.tag==="g"?t.children:[t]}var mL={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-mask"),s=r?Xc(r.split(" ").map(function(o){return o.trim()})):Cp();return s.prefix||(s.prefix=Si()),n.mask=s,n.maskId=i.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var i=n.children,r=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,c=s.width,u=s.icon,h=o.width,f=o.icon,d=dM({transform:l,containerWidth:h,iconWidth:c}),m={tag:"rect",attributes:V(V({},ju),{},{fill:"white"})},y=u.children?{children:u.children.map(Yy)}:{},b={tag:"g",attributes:V({},d.inner),children:[Yy(V({tag:u.tag,attributes:V(V({},u.attributes),d.path)},y))]},_={tag:"g",attributes:V({},d.outer),children:[b]},w="mask-".concat(a||Po()),v="clip-".concat(a||Po()),C={tag:"mask",attributes:V(V({},ju),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[m,_]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:pL(f)},C]};return i.push(O,{tag:"rect",attributes:V({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(w,")")},ju)}),{children:i,attributes:r}}}},gL={provides:function(e){var n=!1;Ci.matchMedia&&(n=Ci.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:V(V({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=V(V({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:V(V({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:V(V({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:V(V({},o),{},{values:"1;0;1;1;0;1;"})}),i.push(a),i.push({tag:"path",attributes:V(V({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:V(V({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||i.push({tag:"path",attributes:V(V({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:V(V({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},yL={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return n.symbol=s,n}}}},_L=[gM,iL,rL,sL,oL,hL,fL,dL,mL,gL,yL];xM(_L,{mixoutsTo:Qt});Qt.noAuto;var zw=Qt.config,Ln=Qt.library;Qt.dom;var zl=Qt.parse;Qt.findIconDefinition;Qt.toHtml;var vL=Qt.icon;Qt.layer;var bL=Qt.text;Qt.counter;function Qy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function on(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Qy(Object(n),!0).forEach(function(i){Ot(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Qy(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Hl(t){return Hl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Hl(t)}function Ot(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function wL(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function EL(t,e){if(t==null)return{};var n=wL(t,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function mf(t){return TL(t)||IL(t)||CL(t)||SL()}function TL(t){if(Array.isArray(t))return gf(t)}function IL(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function CL(t,e){if(t){if(typeof t=="string")return gf(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return gf(t,e)}}function gf(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function SL(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var AL=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Hw={exports:{}};(function(t){(function(e){var n=function(_,w,v){if(!c(w)||h(w)||f(w)||d(w)||l(w))return w;var C,O=0,X=0;if(u(w))for(C=[],X=w.length;O<X;O++)C.push(n(_,w[O],v));else{C={};for(var se in w)Object.prototype.hasOwnProperty.call(w,se)&&(C[_(se,v)]=n(_,w[se],v))}return C},i=function(_,w){w=w||{};var v=w.separator||"_",C=w.split||/(?=[A-Z])/;return _.split(C).join(v)},r=function(_){return m(_)?_:(_=_.replace(/[\-_\s]+(.)?/g,function(w,v){return v?v.toUpperCase():""}),_.substr(0,1).toLowerCase()+_.substr(1))},s=function(_){var w=r(_);return w.substr(0,1).toUpperCase()+w.substr(1)},o=function(_,w){return i(_,w).toLowerCase()},a=Object.prototype.toString,l=function(_){return typeof _=="function"},c=function(_){return _===Object(_)},u=function(_){return a.call(_)=="[object Array]"},h=function(_){return a.call(_)=="[object Date]"},f=function(_){return a.call(_)=="[object RegExp]"},d=function(_){return a.call(_)=="[object Boolean]"},m=function(_){return _=_-0,_===_},y=function(_,w){var v=w&&"process"in w?w.process:w;return typeof v!="function"?_:function(C,O){return v(C,_,O)}},b={camelize:r,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(_,w){return n(y(r,w),_)},decamelizeKeys:function(_,w){return n(y(o,w),_,w)},pascalizeKeys:function(_,w){return n(y(s,w),_)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=b:e.humps=b})(AL)})(Hw);var kL=Hw.exports,RL=["class","style"];function NL(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),r=kL.camelize(n.slice(0,i)),s=n.slice(i+1).trim();return e[r]=s,e},{})}function xL(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Rp(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var i=(t.children||[]).map(function(l){return Rp(l)}),r=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=xL(u);break;case"style":l.style=NL(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=EL(n,RL);return sc(t.tag,on(on(on({},e),{},{class:r.class,style:on(on({},r.style),o)},r.attrs),a),i)}var Kw=!1;try{Kw=!0}catch{}function DL(){if(!Kw&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function ro(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ot({},t,e):{}}function OL(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Ot(e,"fa-".concat(t.size),t.size!==null),Ot(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),Ot(e,"fa-pull-".concat(t.pull),t.pull!==null),Ot(e,"fa-swap-opacity",t.swapOpacity),Ot(e,"fa-bounce",t.bounce),Ot(e,"fa-shake",t.shake),Ot(e,"fa-beat",t.beat),Ot(e,"fa-fade",t.fade),Ot(e,"fa-beat-fade",t.beatFade),Ot(e,"fa-flash",t.flash),Ot(e,"fa-spin-pulse",t.spinPulse),Ot(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(i){return n[i]?i:null}).filter(function(i){return i})}function Xy(t){if(t&&Hl(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(zl.icon)return zl.icon(t);if(t===null)return null;if(Hl(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Kl=Fo({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var i=n.attrs,r=ae(function(){return Xy(e.icon)}),s=ae(function(){return ro("classes",OL(e))}),o=ae(function(){return ro("transform",typeof e.transform=="string"?zl.transform(e.transform):e.transform)}),a=ae(function(){return ro("mask",Xy(e.mask))}),l=ae(function(){return vL(r.value,on(on(on(on({},s.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});Ur(l,function(u){if(!u)return DL("Could not find one or more icon(s)",r.value,a.value)},{immediate:!0});var c=ae(function(){return l.value?Rp(l.value.abstract[0],{},i):null});return function(){return c.value}}});Fo({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var i=n.slots,r=zw.familyPrefix,s=ae(function(){return["".concat(r,"-layers")].concat(mf(e.fixedWidth?["".concat(r,"-fw")]:[]))});return function(){return sc("div",{class:s.value},i.default?i.default():[])}}});Fo({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var i=n.attrs,r=zw.familyPrefix,s=ae(function(){return ro("classes",[].concat(mf(e.counter?["".concat(r,"-layers-counter")]:[]),mf(e.position?["".concat(r,"-layers-").concat(e.position)]:[])))}),o=ae(function(){return ro("transform",typeof e.transform=="string"?zl.transform(e.transform):e.transform)}),a=ae(function(){var c=bL(e.value.toString(),on(on({},o.value),s.value)),u=c.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=ae(function(){return Rp(a.value,{},i)});return function(){return l.value}}});const Zt=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},PL={__name:"tileFlag",props:{color:{type:String,required:!0},icon:{type:String,required:!0},inverted:{type:Boolean,required:!1,default:()=>!1}},setup(t){const e=t;return Ff(n=>({"62b4f327":e.color})),(n,i)=>(G(),ne("div",{class:Wn(["flag",{inverted:e.inverted}]),style:Mo({backgroundColor:n.backgroundColor})},[He(x(Kl),{class:"icon",icon:["fas",e.icon]},null,8,["icon"])],6))}},Ww=Zt(PL,[["__scopeId","data-v-55d60c14"]]);const ML=["data-coord"],LL=["src"],FL={class:"boardTileFlags"},UL={__name:"BoardTile",props:{tile:{type:Object,required:!0},collected:{type:Array,default:()=>{}},verify:{type:Array,default:()=>{}},selected:{type:Boolean,default:!1},needVerifying:{type:Boolean,required:!1},groupsData:{type:Object}},setup(t){const e=t,n=ae(()=>e.tile),i=ae(()=>e.groupsData),r=ae(()=>e.selected),s=ae(()=>{var a;return(a=e.collected)==null?void 0:a.includes(n.value.id)}),o=ae(()=>{var a;return(a=e.verify)==null?void 0:a.includes(n.value.id)});return(a,l)=>x(n)?(G(),ne("div",{key:0,class:Wn(["tile",{isCollected:x(s),needVerifying:e.needVerifying,isVerify:x(o),isSelected:x(r)}]),"data-coord":x(n).id},[Q("img",{src:x(n).img||"https://oldschool.runescape.wiki/images/Frog_%28Ruins_of_Camdozaal%29.png?6ae5e"},null,8,LL),Q("div",FL,[x(i)?(G(!0),ne(Oe,{key:0},tr(x(i),c=>(G(),ne(Oe,null,[c.collected.includes(x(n).id)?(G(),Gn(Ww,{class:Wn(["tileFlag","flag-end-"+c.flagEnd]),key:x(n).id+c.color,icon:c.icon,color:a.none,inverted:!0},null,8,["class","icon","color"])):ze("",!0)],64))),256)):ze("",!0)])],10,ML)):ze("",!0)}},Zc=Zt(UL,[["__scopeId","data-v-7f2b4a66"]]);const qw=t=>(fr("data-v-71ba491b"),t=t(),dr(),t),VL={key:0},$L=["onClick","disabled"],BL={key:1},jL={class:"tooltip"},zL=qw(()=>Q("span",{class:"tooltiptext"},"Infestid89 would've gotten this tile on the 30th of April 2023 1:42 AM EST",-1)),HL={key:2},KL={class:"tooltip"},WL=qw(()=>Q("span",{class:"tooltiptext"},"Lies? Phoenix maybe?",-1)),qL={__name:"sidePannel",props:{tileData:{type:Object,required:!0},collected:{type:Array,default:()=>{}},verify:{type:Array,default:()=>{}},boardUUID:{type:String,required:!0},teamUUID:{type:String,required:!0}},setup(t){const e=t,n=xi(Mn),i=async()=>{e.verify.includes(e.tileData.id)||Bi(ft(n,"Boards",e.boardUUID,"Groups",e.teamUUID),{verify:[...e.verify,e.tileData.id]})};return(r,s)=>e.tileData?(G(),ne("div",VL,[He(Zc,{tile:e.tileData,verify:e.verify,collected:e.collected},null,8,["tile","verify","collected"]),Q("h2",null,"{ "+Lt(e.tileData.id.split("")[0])+" , "+Lt(e.tileData.id.split("")[1])+" }",1),Q("h1",null,Lt(e.tileData.title),1),Q("p",null,Lt(e.tileData.description),1),t.teamUUID?(G(),ne("button",{key:0,class:"btn",onClick:vi(i,["prevent"]),disabled:e.verify.includes(e.tileData.id)||e.collected.includes(e.tileData.id)}," Mark Collected ",8,$L)):ze("",!0),e.tileData.id==44&&e.boardUUID=="lcB4kyFpY3N6Kb4yGpLj"?(G(),ne("div",BL,[Q("p",jL,[He(x(Kl),{class:"icon",icon:["fas","disease"]}),zL])])):ze("",!0),e.tileData.id==41&&e.boardUUID=="lcB4kyFpY3N6Kb4yGpLj"?(G(),ne("div",HL,[Q("p",KL,[He(x(Kl),{class:"icon fire",icon:["fas","dove"]}),WL])])):ze("",!0)])):ze("",!0)}},GL=Zt(qL,[["__scopeId","data-v-71ba491b"]]);const eu=t=>(fr("data-v-5b987373"),t=t(),dr(),t),YL={key:0},QL=eu(()=>Q("br",null,null,-1)),XL={class:"tooltiptext"},JL=eu(()=>Q("br",null,null,-1)),ZL=eu(()=>Q("br",null,null,-1)),e4=eu(()=>Q("br",null,null,-1)),t4={__name:"scoreCard",props:{groupsData:{type:Object,required:!0}},setup(t){const e=t;return(n,i)=>(G(),ne("div",null,[e.groupsData?(G(),ne("ul",YL,[(G(!0),ne(Oe,null,tr(e.groupsData,(r,s)=>(G(),ne("li",{key:s+t.groupsData,class:"tooltip"},[He(Ww,{color:r.color,class:Wn(["tileFlag","flag-end-"+r.flagEnd]),inverted:r.name=="Ahka's Cum Balls",icon:r.icon,style:Mo({"--groupColor":r.color,"--width":r.points/750*100*1.5+"px"})},null,8,["color","class","inverted","icon","style"]),ut(" "+Lt(r.name),1),QL,Q("span",XL,[(G(!0),ne(Oe,null,tr(r.member,o=>(G(),ne("span",{key:o},[ut(Lt(o),1),JL]))),128))]),ut(" score: "+Lt(r.points),1),ZL,e4]))),128))])):ze("",!0)]))}},n4=Zt(t4,[["__scopeId","data-v-5b987373"]]);const i4={key:1,class:"bingo-board"},r4={key:2},s4={style:{"justify-content":"end",display:"flex"}},o4={key:0},a4=["onSubmit"],l4={__name:"BingoBoard",props:{boardUUID:{type:String},teamCode:{type:String}},setup(t){const e=t;Ff(v=>({ccf460b8:x(f),"7d652b09":x(d)}));const n=xi(Mn),i=qc(),r=pt(""),s=pt(""),o=pt(""),a=pt(!1),l=jt(ft(n,"Boards",e.boardUUID)),c=jt(ss(n,`Boards/${e.boardUUID}/Tiles`)),{data:u}=jt(ft(n,`Boards/${e.boardUUID}/Groups/${e.teamCode}/`)),{data:h}=jt(ss(n,"Boards",e.boardUUID,"Groups")),f=ae(()=>{var v;return((v=l==null?void 0:l.value)==null?void 0:v.settings.width)||7}),d=ae(()=>{var v;return((v=l==null?void 0:l.value)==null?void 0:v.settings.height)||7}),m=ae(()=>{var v;return((v=u==null?void 0:u.value)==null?void 0:v.collected)||[]}),y=ae(()=>{var v;return((v=u==null?void 0:u.value)==null?void 0:v.verify)||[]}),b=ae(()=>{var C;let v={};return h&&((C=h==null?void 0:h.value)==null||C.forEach(O=>{O.name!="moderator"&&(v[O.id]={collected:O.collected,color:O.color,name:O.name,icon:O.icon,points:O.points,flagEnd:O.flagEnd,member:O.members})})),v||{}}),_=async()=>{var v;if(r.value!==""){let C={name:"private-board",params:{boardUUID:e.boardUUID,teamCode:r.value}};const{data:O}=jt(ft(n,"Boards",e.boardUUID,"Groups",r.value));O&&((v=O==null?void 0:O.value)==null?void 0:v.name)=="moderator"&&(C.name="moderator"),i.push(C)}},w=v=>{a.value=!0,s.value=v,o.value=v};return(v,C)=>{var X,se,fe,Fe;const O=F_("fontAwesomeIcon");return G(),ne(Oe,null,[x(h)?(G(),Gn(n4,{key:0,class:"scoreCard",groupsData:x(b)},null,8,["groupsData"])):ze("",!0),x(c)?(G(),ne("main",i4,[(G(!0),ne(Oe,null,tr(x(c),Be=>(G(),Gn(Zc,{key:Be.id,tile:Be,groupsData:x(b),selected:Be==o.value,collected:x(m),verify:x(y),onClick:Fn=>w(Be)},null,8,["tile","groupsData","selected","collected","verify","onClick"]))),128))])):ze("",!0),((se=(X=x(l))==null?void 0:X.settings)==null?void 0:se.mode)=="teams"||a.value?(G(),ne("aside",r4,[Q("div",s4,[a.value?(G(),ne("button",{key:0,style:{color:"#ff3359","font-weight":"bolder","font-size":"1.3rem","line-height":"0.2rem","aspect-ratio":"1/1.2","text-align":"center","padding-top":"3px"},class:"btn",onClick:C[0]||(C[0]=()=>{a.value=!a.value,o.value=""})}," ╳ ")):ze("",!0)]),((Fe=(fe=x(l))==null?void 0:fe.settings)==null?void 0:Fe.mode)=="teams"?(G(),ne(Oe,{key:0},[x(u)?(G(),ne("p",o4,[He(O,{class:"icon",icon:["fas",x(u).icon]},null,8,["icon"]),ut(" "+Lt(x(u).name),1)])):ze("",!0),x(u)?ze("",!0):(G(),ne("form",{key:1,onSubmit:vi(_,["prevent"])},[ut(" team code: "),$n(Q("input",{type:"text",name:"teamId","onUpdate:modelValue":C[1]||(C[1]=Be=>r.value=Be)},null,512),[[Bn,r.value]])],40,a4))],64)):ze("",!0),He(GL,{tileData:s.value,collected:x(m),verify:x(y),boardUUID:e.boardUUID,teamUUID:e.teamCode},null,8,["tileData","collected","verify","boardUUID","teamUUID"])])):ze("",!0)],64)}}},c4=Zt(l4,[["__scopeId","data-v-c413c16c"]]);const u4=t=>(fr("data-v-87e34067"),t=t(),dr(),t),h4={key:0,class:"heading"},f4=u4(()=>Q("h2",null,"Notes",-1)),d4=["disabled"],p4={__name:"BoardView",setup(t){const e=xi(Mn),n=Gc(),i=pt(""),r=ae(()=>n.params.teamCode),s=ae(()=>n.params.boardUUID),{data:o}=jt(ft(e,`Boards/${s.value}/Groups/${r.value}/`)),a=async()=>{i.value=o.value.notes,await Bi(ft(e,`Boards/${s.value}/Groups/${r.value}/`),{notes:i.value})};return(l,c)=>(G(),ne(Oe,null,[Q("section",null,[He(c4,{boardUUID:x(s),teamCode:x(r)},null,8,["boardUUID","teamCode"])]),x(o)?(G(),ne("div",h4,[f4,Q("button",{class:"btn",onClick:a,disabled:i.value==x(o).notes}," Save notes ",8,d4)])):ze("",!0),x(o)?$n((G(),ne("textarea",{key:1,name:"teamNotes",id:"teamNotes",rows:"10","onUpdate:modelValue":c[0]||(c[0]=u=>x(o).notes=u),onSubmit:c[1]||(c[1]=vi(()=>{},["prevent"]))},null,544)),[[Bn,x(o).notes]]):ze("",!0)],64))}},Jy=Zt(p4,[["__scopeId","data-v-87e34067"]]);const Cs=t=>(fr("data-v-3cbaebca"),t=t(),dr(),t),m4=Cs(()=>Q("br",null,null,-1)),g4=["onSubmit"],y4=Cs(()=>Q("br",null,null,-1)),_4=Cs(()=>Q("br",null,null,-1)),v4=Cs(()=>Q("br",null,null,-1)),b4=Cs(()=>Q("br",null,null,-1)),w4=Cs(()=>Q("button",{type:"submit"},"Update Tile",-1)),E4=["onClick"],T4={__name:"addTile",props:{boardUUID:{type:String,required:!0},tile:{type:Object,required:!0},boardSettings:{type:Object,required:!1,default:()=>{}}},setup(t){const e=t,n=xi(Mn),i=pt({coordinate:e.tile.id,title:e.tile.title,description:e.tile.description,img:e.tile.img,points:e.tile.points}),r=pt(!1),s=()=>{r.value=!r.value},o=async()=>{await QO(ft(n,"Boards",e.boardUUID,"Tiles",i.value.coordinate),{description:i.value.description,img:i.value.img,title:i.value.title,points:parseInt(i.value.points)})},a=async()=>{await XO(ft(n,"Boards",e.boardUUID,"Tiles",i.value.coordinate))};return(l,c)=>(G(),ne(Oe,null,[Q("div",{class:"tile",onClick:s},"edit"),Q("div",{class:Wn(["modal",{open:r.value}])},[ut(" id: "),$n(Q("input",{type:"text","onUpdate:modelValue":c[0]||(c[0]=u=>i.value.coordinate=u),name:"id",id:"addtiletitle"},null,512),[[Bn,i.value.coordinate]]),m4,Q("form",{onSubmit:vi(o,["prevent"])},[ut(" title: "),$n(Q("input",{type:"text","onUpdate:modelValue":c[1]||(c[1]=u=>i.value.title=u),name:"title",id:"addtiletitle"},null,512),[[Bn,i.value.title]]),y4,ut(" description: "),$n(Q("input",{type:"text","onUpdate:modelValue":c[2]||(c[2]=u=>i.value.description=u),name:"description",id:"addtiletitle"},null,512),[[Bn,i.value.description]]),_4,ut(" points: "),$n(Q("input",{type:"text","onUpdate:modelValue":c[3]||(c[3]=u=>i.value.points=u),name:"type",id:"addtiletitle"},null,512),[[Bn,i.value.points]]),v4,ut(" img: "),$n(Q("input",{type:"text","onUpdate:modelValue":c[4]||(c[4]=u=>i.value.img=u),name:"type",id:"addtiletitle"},null,512),[[Bn,i.value.img]]),b4,w4,e.boardSettings.settings.public?ze("",!0):(G(),ne("button",{key:0,onClick:vi(a,["prevent"])}," delete Tile ",8,E4))],40,g4)],2)],64))}},I4=Zt(T4,[["__scopeId","data-v-3cbaebca"]]);const C4=t=>(fr("data-v-76cb558f"),t=t(),dr(),t),S4=["for"],A4=C4(()=>Q("br",null,null,-1)),k4=["id","checked","onClick"],R4={__name:"moderatorSidePannel",props:{tileData:{type:Object,required:!0},boardUUID:{type:String,required:!0},groups:{type:Object,required:!0},boardSettings:{type:Object,required:!1}},setup(t){const e=t,n=xi(Mn),i=ae(()=>e.tileData),r=ae(()=>e.groups.filter(o=>o.name!=="moderator")),s=({tile:o,group:a})=>{a.collected.includes(o.id)?(Bi(ft(n,"Boards",e.boardUUID,"Groups",a.id),{collected:a.collected.filter(l=>l!=o.id)}),Bi(ft(n,"Boards",e.boardUUID,"Groups",a.id),{points:a.points-o.points})):(Bi(ft(n,"Boards",e.boardUUID,"Groups",a.id),{collected:[...a.collected,o.id]}),Bi(ft(n,"Boards",e.boardUUID,"Groups",a.id),{points:a.points+o.points}),a.verify.includes(o.id)&&Bi(ft(n,"Boards",e.boardUUID,"Groups",a.id),{verify:a.verify.filter(l=>l!=o.id)}))};return(o,a)=>e.tileData?(G(),ne("div",{key:e.tileData.id},[He(Zc,{tile:x(i),groupsData:e.groups},null,8,["tile","groupsData"]),Q("h2",null,"{ "+Lt(x(i).id.split("")[0])+" , "+Lt(x(i).id.split("")[1])+" }",1),Q("ul",null,[(G(!0),ne(Oe,null,tr(x(r),l=>(G(),ne("li",{key:l.id+x(i).id,class:Wn({checkThis:l.verify.includes(x(i).id)})},[Q("label",{for:l.id+x(i).id},[ut(Lt(l.name)+" : "+Lt(l.verify.includes(x(i).id)),1),A4,ut(" collected: "),(G(),ne("input",{id:l.id+x(i).id,type:"checkbox",key:l.id+x(i).id,checked:l.collected.includes(x(i).id),onClick:vi(c=>s({tile:x(i),group:l}),["prevent"])},null,8,k4))],8,S4)],2))),128))]),He(I4,{tile:x(i),boardUUID:e.boardUUID,boardSettings:e.boardSettings},null,8,["tile","boardUUID","boardSettings"])])):ze("",!0)}},N4=Zt(R4,[["__scopeId","data-v-76cb558f"]]);const x4={key:0,class:"bingo-board"},D4={key:0},O4={__name:"ModeratorBoard",props:{boardUUID:{type:String},teamCode:{type:String},groups:{type:Object}},setup(t){const e=t;Ff(f=>({"4eb8a8da":x(l),"2202ccfa":x(c)}));const n=xi(Mn),i=pt(""),r=pt(""),s=jt(ft(n,"Boards",e.boardUUID)),o=jt(ss(n,`Boards/${e.boardUUID}/Tiles`)),{data:a}=jt(ft(n,`Boards/${e.boardUUID}/Groups/${e.teamCode}/`)),l=ae(()=>{var f;return((f=s==null?void 0:s.value)==null?void 0:f.settings.width)||7}),c=ae(()=>{var f;return((f=s==null?void 0:s.value)==null?void 0:f.settings.height)||7}),u=f=>{i.value=f,r.value=f},h=f=>{let d=!1;return e.groups&&e.groups.forEach(m=>{m.verify.includes(f.id)&&(d=!0)}),d};return(f,d)=>(G(),ne(Oe,null,[x(o)?(G(),ne("main",x4,[(G(!0),ne(Oe,null,tr(x(o),m=>(G(),Gn(Zc,{key:m.id,groupsData:e.groups,needVerifying:h(m),selected:m==r.value,tile:m,onClick:y=>u(m)},null,8,["groupsData","needVerifying","selected","tile","onClick"]))),128))])):ze("",!0),Q("aside",null,[x(a)?(G(),ne("p",D4,Lt(x(a).name),1)):ze("",!0),(G(),Gn(N4,{tileData:i.value,key:i.value,boardUUID:e.boardUUID,groups:e.groups,boardSettings:x(s)},null,8,["tileData","boardUUID","groups","boardSettings"]))])],64))}},P4=Zt(O4,[["__scopeId","data-v-61b5fbb5"]]);const tu=t=>(fr("data-v-be10d2b9"),t=t(),dr(),t),M4=["onSubmit"],L4=tu(()=>Q("br",null,null,-1)),F4=tu(()=>Q("br",null,null,-1)),U4=tu(()=>Q("br",null,null,-1)),V4=tu(()=>Q("button",{type:"submit",class:"btn"}," Go To Board ",-1)),$4={__name:"ModeratorView",setup(t){const e=xi(Mn),n=Gc(),i=qc(),r=ae(()=>n.params.teamCode),s=pt(""),o=ae(()=>n.params.boardUUID),{data:a}=jt(ft(e,`Boards/${o.value}/Groups/${r.value}/`)),{data:l}=jt(ss(e,"Boards",o.value,"Groups")),c=async()=>{if(r.value!==""){let u={name:"private-board",params:{boardUUID:o.value,teamCode:s.value}};const{data:h}=jt(ft(e,"Boards",o.value,"Groups",s.value));h&&h.value.name=="moderator"&&(u.name="moderator"),i.push(u)}};return(u,h)=>(G(),ne("section",null,[x(a)&&x(a).name=="moderator"?(G(),Gn(P4,{key:0,boardUUID:x(o),teamCode:x(r),onVerifyTile:h[0]||(h[0]=f=>u.verifyTile(u.tile,u.groupid)),groups:x(l)},null,8,["boardUUID","teamCode","groups"])):ze("",!0),Q("aside",null,[x(a)&&x(a).name!="moderator"?(G(),ne("form",{key:0,onSubmit:vi(c,["prevent"])},[ut(" You are not a moderator, "),L4,ut("please enter your code to go to the appropriate board for your team"),F4,U4,ut(" team code: "),$n(Q("input",{type:"text",name:"teamId","onUpdate:modelValue":h[1]||(h[1]=f=>s.value=f)},null,512),[[Bn,s.value]]),V4],40,M4)):ze("",!0)])]))}},B4=Zt($4,[["__scopeId","data-v-be10d2b9"]]);const j4=["onSubmit"],z4=["disabled"],H4={__name:"HomeView",setup(t){const e=Gc(),n=qc(),i=pt(""),r=()=>{n.push({name:"overview",params:{boardUUID:i.value}})};return(s,o)=>(G(),ne(Oe,null,[Q("form",{onSubmit:vi(r,["prevent"])},[ut(" Enter your bingo key: "),$n(Q("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=a=>i.value=a)},null,512),[[Bn,i.value]]),Q("button",{class:"btn",disabled:i.value==""},"Open Board",8,z4)],40,j4),(G(),Gn(x(mw),{key:x(e).fullPath}))],64))}},K4=Zt(H4,[["__scopeId","data-v-53f9c0d8"]]);const W4=t=>(fr("data-v-c6840bf0"),t=t(),dr(),t),q4=W4(()=>Q("h1",null,"boardList:",-1)),G4={key:0},Y4=["onClick"],Q4={__name:"BoardList",setup(t){const e=xi(Mn),n=jt(ss(e,"Boards")),i=qc(),r=s=>{i.push({name:"overview",params:{boardUUID:s}})};return(s,o)=>(G(),ne(Oe,null,[q4,(G(),ne("ul",G4,[(G(!0),ne(Oe,null,tr(x(n),a=>(G(),ne("li",{key:a,onClick:l=>r(a.id)},Lt(a.name),9,Y4))),128))]))],64))}},X4=Zt(Q4,[["__scopeId","data-v-c6840bf0"]]),J4=LP({history:Z2(),mode:"hash",routes:[{path:"/",name:"Home",component:K4},{path:"/b/:boardUUID",name:"overview",param:!0,component:Jy},{path:"/boards/",name:"boardOverview",param:!0,component:X4},{path:"/b/:boardUUID/team/:teamCode",name:"private-board",param:!0,component:Jy},{path:"/b/:boardUUID/m/:teamCode",name:"moderator",param:!0,component:B4}]});var Z4={prefix:"fas",iconName:"spaghetti-monster-flying",icon:[640,512,["pastafarianism"],"f67b","M208 64a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 0c0 16.2-6 31.1-16 42.3l15.6 31.2c18.7-6 39.9-9.5 64.4-9.5s45.8 3.5 64.4 9.5L400 106.3C390 95.1 384 80.2 384 64c0-35.3 28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64c-1.7 0-3.4-.1-5.1-.2L427.8 158c21.1 13.6 37.7 30.2 51.4 46.4c7.1 8.3 13.5 16.6 19.3 24l1.4 1.8c6.3 8.1 11.6 14.8 16.7 20.4C527.3 262.3 532.7 264 536 264c2.5 0 4.3-.6 7.1-3.3c3.7-3.5 7.1-8.8 12.5-17.4l.6-.9c4.6-7.4 11-17.6 19.4-25.7c9.7-9.3 22.9-16.7 40.4-16.7c13.3 0 24 10.7 24 24s-10.7 24-24 24c-2.5 0-4.3 .6-7.1 3.3c-3.7 3.5-7.1 8.8-12.5 17.4l-.6 .9c-4.6 7.4-11 17.6-19.4 25.7c-9.7 9.3-22.9 16.7-40.4 16.7c-18.5 0-32.9-8.5-44.3-18.6c-3.1 4-6.6 8.3-10.5 12.7c1.4 4.3 2.8 8.5 4 12.5c.9 3 1.8 5.8 2.6 8.6c3 9.8 5.5 18.2 8.6 25.9c3.9 9.8 7.4 15.4 10.8 18.5c2.6 2.4 5.9 4.3 12.8 4.3c8.7 0 16.9-4.2 33.7-13.2c15-8 35.7-18.8 62.3-18.8c13.3 0 24 10.7 24 24s-10.7 24-24 24c-13.4 0-24.7 5.2-39.7 13.2c-1 .6-2.1 1.1-3.2 1.7C559.9 414 541.4 424 520 424c-18.4 0-33.6-6.1-45.5-17.2c-11.1-10.3-17.9-23.7-22.7-36c-3.6-9-6.7-19.1-9.5-28.5c-16.4 12.3-36.1 23.6-58.9 31.3c3.6 10.8 8.4 23.5 14.4 36.2c7.5 15.9 16.2 30.4 25.8 40.5C433 460.5 441.2 464 448 464c13.3 0 24 10.7 24 24s-10.7 24-24 24c-25.2 0-45-13.5-59.5-28.8c-14.5-15.4-25.7-34.9-34.2-53c-8-17-14.1-33.8-18.3-46.9c-5.2 .4-10.6 .6-16 .6s-10.8-.2-16-.6c-4.2 13-10.3 29.9-18.3 46.9c-8.5 18.1-19.8 37.6-34.2 53C237 498.5 217.2 512 192 512c-13.3 0-24-10.7-24-24s10.7-24 24-24c6.8 0 15-3.5 24.5-13.7c9.5-10.1 18.3-24.6 25.8-40.5c5.9-12.6 10.7-25.4 14.4-36.2c-22.8-7.7-42.5-19-58.9-31.3c-2.9 9.4-6 19.5-9.5 28.5c-4.8 12.2-11.6 25.6-22.7 36C153.6 417.9 138.4 424 120 424c-21.4 0-39.9-10-53.1-17.1l0 0c-1.1-.6-2.2-1.2-3.2-1.7c-15-8-26.3-13.2-39.7-13.2c-13.3 0-24-10.7-24-24s10.7-24 24-24c26.6 0 47.3 10.8 62.3 18.8c16.8 9 25 13.2 33.7 13.2c6.8 0 10.2-1.9 12.8-4.3c3.4-3.2 7-8.8 10.8-18.5c3-7.7 5.6-16.1 8.6-25.9c.8-2.7 1.7-5.6 2.6-8.6c1.2-4 2.6-8.2 4-12.5c-3.9-4.5-7.4-8.8-10.5-12.7C136.9 303.5 122.5 312 104 312c-17.5 0-30.7-7.4-40.4-16.7c-8.4-8.1-14.8-18.3-19.4-25.7l-.6-.9c-5.4-8.6-8.8-13.9-12.5-17.4c-2.8-2.7-4.6-3.3-7.1-3.3c-13.3 0-24-10.7-24-24s10.7-24 24-24c17.5 0 30.7 7.4 40.4 16.7c8.4 8.1 14.8 18.3 19.4 25.7l.6 .9c5.4 8.6 8.8 13.9 12.5 17.4c2.8 2.7 4.6 3.3 7.1 3.3c3.3 0 8.7-1.7 19.4-13.4c5.1-5.6 10.4-12.3 16.7-20.4l1.4-1.8c5.8-7.4 12.2-15.7 19.3-24c13.8-16.2 30.3-32.8 51.4-46.4l-15.1-30.2c-1.7 .1-3.4 .2-5.1 .2c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64zm208 0a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z"]},e3={prefix:"fas",iconName:"spoon",icon:[512,512,[129348,61873,"utensil-spoon"],"f2e5","M245.8 220.9c-14.5-17.6-21.8-39.2-21.8-60.8C224 80 320 0 416 0c53 0 96 43 96 96c0 96-80 192-160.2 192c-21.6 0-43.2-7.3-60.8-21.8L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L245.8 220.9z"]},t3={prefix:"fas",iconName:"paw",icon:[512,512,[],"f1b0","M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"]},n3={prefix:"fas",iconName:"crow",icon:[640,512,[],"f520","M456 0c-48.6 0-88 39.4-88 88v29.2L12.5 390.6c-14 10.8-16.6 30.9-5.9 44.9s30.9 16.6 44.9 5.9L126.1 384H259.2l46.6 113.1c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3L311.1 384H352c1.1 0 2.1 0 3.2 0l46.6 113.2c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3l-42-102C484.9 354.1 544 280 544 192V128v-8l80.5-20.1c8.6-2.1 13.8-10.8 11.6-19.4C629 52 603.4 32 574 32H523.9C507.7 12.5 483.3 0 456 0zm0 64a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},i3={prefix:"fas",iconName:"frog",icon:[576,512,[],"f52e","M368 32c41.7 0 75.9 31.8 79.7 72.5l85.6 26.3c25.4 7.8 42.8 31.3 42.8 57.9c0 21.8-11.7 41.9-30.7 52.7L400.8 323.5 493.3 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H480c-8.5 0-16.6-3.4-22.6-9.4L346.9 360.2c11.7-36 3.2-77.1-25.4-105.7c-40.6-40.6-106.3-40.6-146.9-.1L101 324.4c-6.4 6.1-6.7 16.2-.6 22.6s16.2 6.6 22.6 .6l73.8-70.2 .1-.1 .1-.1c3.5-3.5 7.3-6.6 11.3-9.2c27.9-18.5 65.9-15.4 90.5 9.2c24.7 24.7 27.7 62.9 9 90.9c-2.6 3.8-5.6 7.5-9 10.9L261.8 416H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-35.3 0-64-28.7-64-64C0 249.6 127 112.9 289.3 97.5C296.2 60.2 328.8 32 368 32zm0 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]},r3={prefix:"fas",iconName:"feather-pointed",icon:[512,512,["feather-alt"],"f56b","M278.5 215.6L23 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l74.8-74.8c7.4 4.6 15.3 8.2 23.8 10.5C200.3 452.8 270 454.5 338 409.4c12.2-8.1 5.8-25.4-8.8-25.4l-16.1 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l97.7-29.3c3.4-1 6.4-3.1 8.4-6.1c4.4-6.4 8.6-12.9 12.6-19.6c6.2-10.3-1.5-23-13.5-23l-38.6 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l80.9-24.3c4.6-1.4 8.4-4.8 10.2-9.3C494.5 163 507.8 86.1 511.9 36.8c.8-9.9-3-19.6-10-26.6s-16.7-10.8-26.6-10C391.5 7 228.5 40.5 137.4 131.6C57.3 211.7 56.7 302.3 71.3 356.4c2.1 7.9 12 9.6 17.8 3.8L253.6 195.8c6.2-6.2 16.4-6.2 22.6 0c5.4 5.4 6.1 13.6 2.2 19.8z"]},s3={prefix:"fas",iconName:"dove",icon:[512,512,[128330],"f4ba","M160.8 96.5c14 17 31 30.9 49.5 42.2c25.9 15.8 53.7 25.9 77.7 31.6V138.8C265.8 108.5 250 71.5 248.6 28c-.4-11.3-7.5-21.5-18.4-24.4c-7.6-2-15.8-.2-21 5.8c-13.3 15.4-32.7 44.6-48.4 87.2zM320 144v30.6l0 0v1.3l0 0 0 32.1c-60.8-5.1-185-43.8-219.3-157.2C97.4 40 87.9 32 76.6 32c-7.9 0-15.3 3.9-18.8 11C46.8 65.9 32 112.1 32 176c0 116.9 80.1 180.5 118.4 202.8L11.8 416.6C6.7 418 2.6 421.8 .9 426.8s-.8 10.6 2.3 14.8C21.7 466.2 77.3 512 160 512c3.6 0 7.2-1.2 10-3.5L245.6 448H320c88.4 0 160-71.6 160-160V128l29.9-44.9c1.3-2 2.1-4.4 2.1-6.8c0-6.8-5.5-12.3-12.3-12.3H400c-44.2 0-80 35.8-80 80zm80-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32z"]},o3={prefix:"fas",iconName:"rocket",icon:[512,512,[],"f135","M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"]},a3={prefix:"fas",iconName:"disease",icon:[512,512,[],"f7fa","M236.4 61.4L227 75.5c-21.3 32-59.4 48.5-97.3 42.1l-59.6-9.9C33.4 101.6 0 129.9 .1 167.1c0 15.9 6.4 31.2 17.6 42.5l29.2 29.2c11 11 17.2 25.9 17.2 41.5c0 15.8-6.4 30.9-17.7 42L33.3 335.1C22.2 345.9 16 360.7 16 376.2c0 36.8 34.1 64.2 70.1 56.2l62.3-13.8c7.7-1.7 15.7-2.6 23.6-2.6h10c27.2 0 53.7 9.3 75 26.3L287.8 467c10.5 8.4 23.6 13 37 13c32.7 0 59.3-26.5 59.3-59.3l0-25.2c0-34.9 21.4-66.2 53.9-78.8l36.9-14.3c22.4-8.7 37.2-30.3 37.2-54.3c0-28.1-20.1-52.3-47.8-57.3l-28-5.1c-36.5-6.7-65.4-34.5-73.6-70.7l-7.1-31.5C348.9 53.4 322.1 32 291.3 32c-22 0-42.6 11-54.9 29.4zM160 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm0 80a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},l3={prefix:"fas",iconName:"hippo",icon:[640,512,[129435],"f6ed","M407 47c9.4-9.4 24.6-9.4 33.9 0l17.2 17.2c1.9-.1 3.9-.2 5.8-.2h32c11.2 0 21.9 2.3 31.6 6.5L543 55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L564 101.9c7.6 12.2 12 26.7 12 42.1c0 10.2 7.4 18.8 16.7 23c27.9 12.5 47.3 40.5 47.3 73c0 26.2-12.6 49.4-32 64v32c0 8.8-7.2 16-16 16H560c-8.8 0-16-7.2-16-16V320H480v16c0 8.8-7.2 16-16 16H432c-8.8 0-16-7.2-16-16V318.4c-11.8-2.4-22.7-7.4-32-14.4c-1.5-1.1-2.9-2.3-4.3-3.5c-17-14.7-27.7-36.4-27.7-60.5c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 44.7 26.2 83.2 64 101.2V352c0 17.7 14.3 32 32 32h32v64c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V372c-19.8 7.7-41.4 12-64 12s-44.2-4.3-64-12v76c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V329.1L45.9 369.7c-5.4 12.1-19.6 17.6-31.7 12.2S-3.3 362.4 2.1 350.3L24 300.9c5.3-11.9 8-24.7 8-37.7C32 155.7 117.2 68 223.8 64.1l.2-.1h7.2H256h32c41.7 0 83.4 12.1 117.2 25.7c1.7-1.8 3.5-3.6 5.3-5.2L407 81c-9.4-9.4-9.4-24.6 0-33.9zm73 185a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm88 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM480 144a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"]};Ln.add(o3);Ln.add(Z4);Ln.add(t3);Ln.add(l3);Ln.add(n3);Ln.add(i3);Ln.add(r3);Ln.add(a3);Ln.add(s3);Ln.add(e3);const ua=dI(VP);ua.use(yI());ua.use(J4);ua.use(P2,{firebaseApp:Mn});ua.component("font-awesome-icon",Kl);ua.mount("#app");
