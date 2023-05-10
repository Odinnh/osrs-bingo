var jS=Object.defineProperty;var WS=(e,t,n)=>t in e?jS(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var et=(e,t,n)=>(WS(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function $p(e,t){const n=Object.create(null),i=e.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function ho(e){if(rt(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],s=me(i)?YS(i):ho(i);if(s)for(const r in s)t[r]=s[r]}return t}else{if(me(e))return e;if(Qt(e))return e}}const KS=/;(?![^(]*\))/g,qS=/:([^]+)/,GS=/\/\*.*?\*\//gs;function YS(e){const t={};return e.replace(GS,"").split(KS).forEach(n=>{if(n){const i=n.split(qS);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function is(e){let t="";if(me(e))t=e;else if(rt(e))for(let n=0;n<e.length;n++){const i=is(e[n]);i&&(t+=i+" ")}else if(Qt(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const XS="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",QS=$p(XS);function t1(e){return!!e||e===""}const Ke=e=>me(e)?e:e==null?"":rt(e)||Qt(e)&&(e.toString===s1||!ut(e.toString))?JSON.stringify(e,e1,2):String(e),e1=(e,t)=>t&&t.__v_isRef?e1(e,t.value):Dr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:n1(t)?{[`Set(${t.size})`]:[...t.values()]}:Qt(t)&&!rt(t)&&!r1(t)?String(t):t,$t={},Rr=[],Un=()=>{},JS=()=>!1,ZS=/^on[^a-z]/,Ku=e=>ZS.test(e),zp=e=>e.startsWith("onUpdate:"),Ge=Object.assign,Hp=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},tI=Object.prototype.hasOwnProperty,St=(e,t)=>tI.call(e,t),rt=Array.isArray,Dr=e=>qu(e)==="[object Map]",n1=e=>qu(e)==="[object Set]",ut=e=>typeof e=="function",me=e=>typeof e=="string",jp=e=>typeof e=="symbol",Qt=e=>e!==null&&typeof e=="object",i1=e=>Qt(e)&&ut(e.then)&&ut(e.catch),s1=Object.prototype.toString,qu=e=>s1.call(e),eI=e=>qu(e).slice(8,-1),r1=e=>qu(e)==="[object Object]",Wp=e=>me(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Cc=$p(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Gu=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},nI=/-(\w)/g,ii=Gu(e=>e.replace(nI,(t,n)=>n?n.toUpperCase():"")),iI=/\B([A-Z])/g,fo=Gu(e=>e.replace(iI,"-$1").toLowerCase()),Yu=Gu(e=>e.charAt(0).toUpperCase()+e.slice(1)),lf=Gu(e=>e?`on${Yu(e)}`:""),Ta=(e,t)=>!Object.is(e,t),Sc=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},zc=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},id=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let b_;const sI=()=>b_||(b_=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let un;class o1{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=un,!t&&un&&(this.index=(un.scopes||(un.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=un;try{return un=this,t()}finally{un=n}}}on(){un=this}off(){un=this.parent}stop(t){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function a1(e){return new o1(e)}function rI(e,t=un){t&&t.active&&t.effects.push(e)}function Kp(){return un}function l1(e){un&&un.cleanups.push(e)}const qp=e=>{const t=new Set(e);return t.w=0,t.n=0,t},c1=e=>(e.w&ss)>0,u1=e=>(e.n&ss)>0,oI=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=ss},aI=e=>{const{deps:t}=e;if(t.length){let n=0;for(let i=0;i<t.length;i++){const s=t[i];c1(s)&&!u1(s)?s.delete(e):t[n++]=s,s.w&=~ss,s.n&=~ss}t.length=n}},Hc=new WeakMap;let Ho=0,ss=1;const sd=30;let kn;const Vs=Symbol(""),rd=Symbol("");class Gp{constructor(t,n=null,i){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,rI(this,i)}run(){if(!this.active)return this.fn();let t=kn,n=Gi;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=kn,kn=this,Gi=!0,ss=1<<++Ho,Ho<=sd?oI(this):w_(this),this.fn()}finally{Ho<=sd&&aI(this),ss=1<<--Ho,kn=this.parent,Gi=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){kn===this?this.deferStop=!0:this.active&&(w_(this),this.onStop&&this.onStop(),this.active=!1)}}function w_(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Gi=!0;const h1=[];function po(){h1.push(Gi),Gi=!1}function go(){const e=h1.pop();Gi=e===void 0?!0:e}function on(e,t,n){if(Gi&&kn){let i=Hc.get(e);i||Hc.set(e,i=new Map);let s=i.get(n);s||i.set(n,s=qp()),f1(s)}}function f1(e,t){let n=!1;Ho<=sd?u1(e)||(e.n|=ss,n=!c1(e)):n=!e.has(kn),n&&(e.add(kn),kn.deps.push(e))}function Ti(e,t,n,i,s,r){const o=Hc.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&rt(e)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":rt(e)?Wp(n)&&a.push(o.get("length")):(a.push(o.get(Vs)),Dr(e)&&a.push(o.get(rd)));break;case"delete":rt(e)||(a.push(o.get(Vs)),Dr(e)&&a.push(o.get(rd)));break;case"set":Dr(e)&&a.push(o.get(Vs));break}if(a.length===1)a[0]&&od(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);od(qp(l))}}function od(e,t){const n=rt(e)?e:[...e];for(const i of n)i.computed&&E_(i);for(const i of n)i.computed||E_(i)}function E_(e,t){(e!==kn||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function lI(e,t){var n;return(n=Hc.get(e))===null||n===void 0?void 0:n.get(t)}const cI=$p("__proto__,__v_isRef,__isVue"),d1=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(jp)),uI=Yp(),hI=Yp(!1,!0),fI=Yp(!0),x_=dI();function dI(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const i=_t(this);for(let r=0,o=this.length;r<o;r++)on(i,"get",r+"");const s=i[t](...n);return s===-1||s===!1?i[t](...n.map(_t)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){po();const i=_t(this)[t].apply(this,n);return go(),i}}),e}function pI(e){const t=_t(this);return on(t,"has",e),t.hasOwnProperty(e)}function Yp(e=!1,t=!1){return function(i,s,r){if(s==="__v_isReactive")return!e;if(s==="__v_isReadonly")return e;if(s==="__v_isShallow")return t;if(s==="__v_raw"&&r===(e?t?RI:y1:t?_1:m1).get(i))return i;const o=rt(i);if(!e){if(o&&St(x_,s))return Reflect.get(x_,s,r);if(s==="hasOwnProperty")return pI}const a=Reflect.get(i,s,r);return(jp(s)?d1.has(s):cI(s))||(e||on(i,"get",s),t)?a:ee(a)?o&&Wp(s)?a:a.value:Qt(a)?e?v1(a):rs(a):a}}const gI=p1(),mI=p1(!0);function p1(e=!1){return function(n,i,s,r){let o=n[i];if(zr(o)&&ee(o)&&!ee(s))return!1;if(!e&&(!jc(s)&&!zr(s)&&(o=_t(o),s=_t(s)),!rt(n)&&ee(o)&&!ee(s)))return o.value=s,!0;const a=rt(n)&&Wp(i)?Number(i)<n.length:St(n,i),l=Reflect.set(n,i,s,r);return n===_t(r)&&(a?Ta(s,o)&&Ti(n,"set",i,s):Ti(n,"add",i,s)),l}}function _I(e,t){const n=St(e,t);e[t];const i=Reflect.deleteProperty(e,t);return i&&n&&Ti(e,"delete",t,void 0),i}function yI(e,t){const n=Reflect.has(e,t);return(!jp(t)||!d1.has(t))&&on(e,"has",t),n}function vI(e){return on(e,"iterate",rt(e)?"length":Vs),Reflect.ownKeys(e)}const g1={get:uI,set:gI,deleteProperty:_I,has:yI,ownKeys:vI},bI={get:fI,set(e,t){return!0},deleteProperty(e,t){return!0}},wI=Ge({},g1,{get:hI,set:mI}),Xp=e=>e,Xu=e=>Reflect.getPrototypeOf(e);function Ll(e,t,n=!1,i=!1){e=e.__v_raw;const s=_t(e),r=_t(t);n||(t!==r&&on(s,"get",t),on(s,"get",r));const{has:o}=Xu(s),a=i?Xp:n?Zp:Ca;if(o.call(s,t))return a(e.get(t));if(o.call(s,r))return a(e.get(r));e!==s&&e.get(t)}function Fl(e,t=!1){const n=this.__v_raw,i=_t(n),s=_t(e);return t||(e!==s&&on(i,"has",e),on(i,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function Ul(e,t=!1){return e=e.__v_raw,!t&&on(_t(e),"iterate",Vs),Reflect.get(e,"size",e)}function T_(e){e=_t(e);const t=_t(this);return Xu(t).has.call(t,e)||(t.add(e),Ti(t,"add",e,e)),this}function C_(e,t){t=_t(t);const n=_t(this),{has:i,get:s}=Xu(n);let r=i.call(n,e);r||(e=_t(e),r=i.call(n,e));const o=s.call(n,e);return n.set(e,t),r?Ta(t,o)&&Ti(n,"set",e,t):Ti(n,"add",e,t),this}function S_(e){const t=_t(this),{has:n,get:i}=Xu(t);let s=n.call(t,e);s||(e=_t(e),s=n.call(t,e)),i&&i.call(t,e);const r=t.delete(e);return s&&Ti(t,"delete",e,void 0),r}function I_(){const e=_t(this),t=e.size!==0,n=e.clear();return t&&Ti(e,"clear",void 0,void 0),n}function Bl(e,t){return function(i,s){const r=this,o=r.__v_raw,a=_t(o),l=t?Xp:e?Zp:Ca;return!e&&on(a,"iterate",Vs),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function Vl(e,t,n){return function(...i){const s=this.__v_raw,r=_t(s),o=Dr(r),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=s[e](...i),u=n?Xp:t?Zp:Ca;return!t&&on(r,"iterate",l?rd:Vs),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Fi(e){return function(...t){return e==="delete"?!1:this}}function EI(){const e={get(r){return Ll(this,r)},get size(){return Ul(this)},has:Fl,add:T_,set:C_,delete:S_,clear:I_,forEach:Bl(!1,!1)},t={get(r){return Ll(this,r,!1,!0)},get size(){return Ul(this)},has:Fl,add:T_,set:C_,delete:S_,clear:I_,forEach:Bl(!1,!0)},n={get(r){return Ll(this,r,!0)},get size(){return Ul(this,!0)},has(r){return Fl.call(this,r,!0)},add:Fi("add"),set:Fi("set"),delete:Fi("delete"),clear:Fi("clear"),forEach:Bl(!0,!1)},i={get(r){return Ll(this,r,!0,!0)},get size(){return Ul(this,!0)},has(r){return Fl.call(this,r,!0)},add:Fi("add"),set:Fi("set"),delete:Fi("delete"),clear:Fi("clear"),forEach:Bl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=Vl(r,!1,!1),n[r]=Vl(r,!0,!1),t[r]=Vl(r,!1,!0),i[r]=Vl(r,!0,!0)}),[e,n,t,i]}const[xI,TI,CI,SI]=EI();function Qp(e,t){const n=t?e?SI:CI:e?TI:xI;return(i,s,r)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?i:Reflect.get(St(n,s)&&s in i?n:i,s,r)}const II={get:Qp(!1,!1)},kI={get:Qp(!1,!0)},AI={get:Qp(!0,!1)},m1=new WeakMap,_1=new WeakMap,y1=new WeakMap,RI=new WeakMap;function DI(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function OI(e){return e.__v_skip||!Object.isExtensible(e)?0:DI(eI(e))}function rs(e){return zr(e)?e:Jp(e,!1,g1,II,m1)}function PI(e){return Jp(e,!1,wI,kI,_1)}function v1(e){return Jp(e,!0,bI,AI,y1)}function Jp(e,t,n,i,s){if(!Qt(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=s.get(e);if(r)return r;const o=OI(e);if(o===0)return e;const a=new Proxy(e,o===2?i:n);return s.set(e,a),a}function Yi(e){return zr(e)?Yi(e.__v_raw):!!(e&&e.__v_isReactive)}function zr(e){return!!(e&&e.__v_isReadonly)}function jc(e){return!!(e&&e.__v_isShallow)}function Qu(e){return Yi(e)||zr(e)}function _t(e){const t=e&&e.__v_raw;return t?_t(t):e}function Hr(e){return zc(e,"__v_skip",!0),e}const Ca=e=>Qt(e)?rs(e):e,Zp=e=>Qt(e)?v1(e):e;function b1(e){Gi&&kn&&(e=_t(e),f1(e.dep||(e.dep=qp())))}function w1(e,t){e=_t(e);const n=e.dep;n&&od(n)}function ee(e){return!!(e&&e.__v_isRef===!0)}function xn(e){return E1(e,!1)}function Ju(e){return E1(e,!0)}function E1(e,t){return ee(e)?e:new MI(e,t)}class MI{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:_t(t),this._value=n?t:Ca(t)}get value(){return b1(this),this._value}set value(t){const n=this.__v_isShallow||jc(t)||zr(t);t=n?t:_t(t),Ta(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Ca(t),w1(this))}}function $(e){return ee(e)?e.value:e}const NI={get:(e,t,n)=>$(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const s=e[t];return ee(s)&&!ee(n)?(s.value=n,!0):Reflect.set(e,t,n,i)}};function x1(e){return Yi(e)?e:new Proxy(e,NI)}function LI(e){const t=rt(e)?new Array(e.length):{};for(const n in e)t[n]=UI(e,n);return t}class FI{constructor(t,n,i){this._object=t,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return lI(_t(this._object),this._key)}}function UI(e,t,n){const i=e[t];return ee(i)?i:new FI(e,t,n)}var T1;class BI{constructor(t,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[T1]=!1,this._dirty=!0,this.effect=new Gp(t,()=>{this._dirty||(this._dirty=!0,w1(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const t=_t(this);return b1(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}T1="__v_isReadonly";function VI(e,t,n=!1){let i,s;const r=ut(e);return r?(i=e,s=Un):(i=e.get,s=e.set),new BI(i,s,r||!s,n)}function Xi(e,t,n,i){let s;try{s=i?e(...i):e()}catch(r){Zu(r,t,n)}return s}function Bn(e,t,n,i){if(ut(e)){const r=Xi(e,t,n,i);return r&&i1(r)&&r.catch(o=>{Zu(o,t,n)}),r}const s=[];for(let r=0;r<e.length;r++)s.push(Bn(e[r],t,n,i));return s}function Zu(e,t,n,i=!0){const s=t?t.vnode:null;if(t){let r=t.parent;const o=t.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,o,a)===!1)return}r=r.parent}const l=t.appContext.config.errorHandler;if(l){Xi(l,null,10,[e,o,a]);return}}$I(e,n,s,i)}function $I(e,t,n,i=!0){console.error(e)}let Sa=!1,ad=!1;const Ue=[];let Xn=0;const Or=[];let mi=null,As=0;const C1=Promise.resolve();let tg=null;function eg(e){const t=tg||C1;return e?t.then(this?e.bind(this):e):t}function zI(e){let t=Xn+1,n=Ue.length;for(;t<n;){const i=t+n>>>1;Ia(Ue[i])<e?t=i+1:n=i}return t}function ng(e){(!Ue.length||!Ue.includes(e,Sa&&e.allowRecurse?Xn+1:Xn))&&(e.id==null?Ue.push(e):Ue.splice(zI(e.id),0,e),S1())}function S1(){!Sa&&!ad&&(ad=!0,tg=C1.then(k1))}function HI(e){const t=Ue.indexOf(e);t>Xn&&Ue.splice(t,1)}function jI(e){rt(e)?Or.push(...e):(!mi||!mi.includes(e,e.allowRecurse?As+1:As))&&Or.push(e),S1()}function k_(e,t=Sa?Xn+1:0){for(;t<Ue.length;t++){const n=Ue[t];n&&n.pre&&(Ue.splice(t,1),t--,n())}}function I1(e){if(Or.length){const t=[...new Set(Or)];if(Or.length=0,mi){mi.push(...t);return}for(mi=t,mi.sort((n,i)=>Ia(n)-Ia(i)),As=0;As<mi.length;As++)mi[As]();mi=null,As=0}}const Ia=e=>e.id==null?1/0:e.id,WI=(e,t)=>{const n=Ia(e)-Ia(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function k1(e){ad=!1,Sa=!0,Ue.sort(WI);const t=Un;try{for(Xn=0;Xn<Ue.length;Xn++){const n=Ue[Xn];n&&n.active!==!1&&Xi(n,null,14)}}finally{Xn=0,Ue.length=0,I1(),Sa=!1,tg=null,(Ue.length||Or.length)&&k1()}}function KI(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||$t;let s=n;const r=t.startsWith("update:"),o=r&&t.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=i[u]||$t;f&&(s=n.map(d=>me(d)?d.trim():d)),h&&(s=n.map(id))}let a,l=i[a=lf(t)]||i[a=lf(ii(t))];!l&&r&&(l=i[a=lf(fo(t))]),l&&Bn(l,e,6,s);const c=i[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Bn(c,e,6,s)}}function A1(e,t,n=!1){const i=t.emitsCache,s=i.get(e);if(s!==void 0)return s;const r=e.emits;let o={},a=!1;if(!ut(e)){const l=c=>{const u=A1(c,t,!0);u&&(a=!0,Ge(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!r&&!a?(Qt(e)&&i.set(e,null),null):(rt(r)?r.forEach(l=>o[l]=null):Ge(o,r),Qt(e)&&i.set(e,o),o)}function th(e,t){return!e||!Ku(t)?!1:(t=t.slice(2).replace(/Once$/,""),St(e,t[0].toLowerCase()+t.slice(1))||St(e,fo(t))||St(e,t))}let dn=null,eh=null;function Wc(e){const t=dn;return dn=e,eh=e&&e.type.__scopeId||null,t}function nh(e){eh=e}function ih(){eh=null}function ig(e,t=dn,n){if(!t||e._n)return e;const i=(...s)=>{i._d&&F_(-1);const r=Wc(t);let o;try{o=e(...s)}finally{Wc(r),i._d&&F_(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function cf(e){const{type:t,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:p,inheritAttrs:g}=e;let m,_;const v=Wc(e);try{if(n.shapeFlag&4){const E=s||i;m=Yn(u.call(E,E,h,r,d,f,p)),_=l}else{const E=t;m=Yn(E.length>1?E(r,{attrs:l,slots:a,emit:c}):E(r,null)),_=t.props?l:qI(l)}}catch(E){na.length=0,Zu(E,e,1),m=he(Ks)}let w=m;if(_&&g!==!1){const E=Object.keys(_),{shapeFlag:x}=w;E.length&&x&7&&(o&&E.some(zp)&&(_=GI(_,o)),w=Wr(w,_))}return n.dirs&&(w=Wr(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),m=w,Wc(v),m}const qI=e=>{let t;for(const n in e)(n==="class"||n==="style"||Ku(n))&&((t||(t={}))[n]=e[n]);return t},GI=(e,t)=>{const n={};for(const i in e)(!zp(i)||!(i.slice(9)in t))&&(n[i]=e[i]);return n};function YI(e,t,n){const{props:i,children:s,component:r}=e,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?A_(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!th(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?A_(i,o,c):!0:!!o;return!1}function A_(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(t[r]!==e[r]&&!th(n,r))return!0}return!1}function XI({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const QI=e=>e.__isSuspense;function JI(e,t){t&&t.pendingBranch?rt(e)?t.effects.push(...e):t.effects.push(e):jI(e)}function Ic(e,t){if(ae){let n=ae.provides;const i=ae.parent&&ae.parent.provides;i===n&&(n=ae.provides=Object.create(i)),n[e]=t}}function sn(e,t,n=!1){const i=ae||dn;if(i){const s=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&ut(t)?t.call(i.proxy):t}}function ZI(e,t){return sg(e,null,{flush:"post"})}const $l={};function Qi(e,t,n){return sg(e,t,n)}function sg(e,t,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=$t){const a=Kp()===(ae==null?void 0:ae.scope)?ae:null;let l,c=!1,u=!1;if(ee(e)?(l=()=>e.value,c=jc(e)):Yi(e)?(l=()=>e,i=!0):rt(e)?(u=!0,c=e.some(w=>Yi(w)||jc(w)),l=()=>e.map(w=>{if(ee(w))return w.value;if(Yi(w))return Ds(w);if(ut(w))return Xi(w,a,2)})):ut(e)?t?l=()=>Xi(e,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),Bn(e,a,3,[f])}:l=Un,t&&i){const w=l;l=()=>Ds(w())}let h,f=w=>{h=_.onStop=()=>{Xi(w,a,4)}},d;if(Aa)if(f=Un,t?n&&Bn(t,a,3,[l(),u?[]:void 0,f]):l(),s==="sync"){const w=$k();d=w.__watcherHandles||(w.__watcherHandles=[])}else return Un;let p=u?new Array(e.length).fill($l):$l;const g=()=>{if(_.active)if(t){const w=_.run();(i||c||(u?w.some((E,x)=>Ta(E,p[x])):Ta(w,p)))&&(h&&h(),Bn(t,a,3,[w,p===$l?void 0:u&&p[0]===$l?[]:p,f]),p=w)}else _.run()};g.allowRecurse=!!t;let m;s==="sync"?m=g:s==="post"?m=()=>Je(g,a&&a.suspense):(g.pre=!0,a&&(g.id=a.uid),m=()=>ng(g));const _=new Gp(l,m);t?n?g():p=_.run():s==="post"?Je(_.run.bind(_),a&&a.suspense):_.run();const v=()=>{_.stop(),a&&a.scope&&Hp(a.scope.effects,_)};return d&&d.push(v),v}function tk(e,t,n){const i=this.proxy,s=me(e)?e.includes(".")?R1(i,e):()=>i[e]:e.bind(i,i);let r;ut(t)?r=t:(r=t.handler,n=t);const o=ae;Kr(this);const a=sg(s,r.bind(i),n);return o?Kr(o):$s(),a}function R1(e,t){const n=t.split(".");return()=>{let i=e;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function Ds(e,t){if(!Qt(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ee(e))Ds(e.value,t);else if(rt(e))for(let n=0;n<e.length;n++)Ds(e[n],t);else if(n1(e)||Dr(e))e.forEach(n=>{Ds(n,t)});else if(r1(e))for(const n in e)Ds(e[n],t);return e}function sr(e){return ut(e)?{setup:e,name:e.name}:e}const kc=e=>!!e.type.__asyncLoader,D1=e=>e.type.__isKeepAlive;function ek(e,t){O1(e,"a",t)}function nk(e,t){O1(e,"da",t)}function O1(e,t,n=ae){const i=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(sh(t,i,n),n){let s=n.parent;for(;s&&s.parent;)D1(s.parent.vnode)&&ik(i,t,n,s),s=s.parent}}function ik(e,t,n,i){const s=sh(t,e,i,!0);og(()=>{Hp(i[t],s)},n)}function sh(e,t,n=ae,i=!1){if(n){const s=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;po(),Kr(n);const a=Bn(t,n,e,o);return $s(),go(),a});return i?s.unshift(r):s.push(r),r}}const Oi=e=>(t,n=ae)=>(!Aa||e==="sp")&&sh(e,(...i)=>t(...i),n),P1=Oi("bm"),rg=Oi("m"),sk=Oi("bu"),rk=Oi("u"),M1=Oi("bum"),og=Oi("um"),N1=Oi("sp"),ok=Oi("rtg"),ak=Oi("rtc");function lk(e,t=ae){sh("ec",e,t)}function L1(e,t){const n=dn;if(n===null)return e;const i=lh(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[o,a,l,c=$t]=t[r];o&&(ut(o)&&(o={mounted:o,updated:o}),o.deep&&Ds(a),s.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c}))}return e}function ys(e,t,n,i){const s=e.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(po(),Bn(l,n,8,[e.el,a,e,t]),go())}}const F1="components";function rh(e,t){return uk(F1,e,!0,t)||e}const ck=Symbol();function uk(e,t,n=!0,i=!1){const s=dn||ae;if(s){const r=s.type;if(e===F1){const a=Bk(r,!1);if(a&&(a===t||a===ii(t)||a===Yu(ii(t))))return r}const o=R_(s[e]||r[e],t)||R_(s.appContext[e],t);return!o&&i?r:o}}function R_(e,t){return e&&(e[t]||e[ii(t)]||e[Yu(ii(t))])}function jr(e,t,n,i){let s;const r=n&&n[i];if(rt(e)||me(e)){s=new Array(e.length);for(let o=0,a=e.length;o<a;o++)s[o]=t(e[o],o,void 0,r&&r[o])}else if(typeof e=="number"){s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,r&&r[o])}else if(Qt(e))if(e[Symbol.iterator])s=Array.from(e,(o,a)=>t(o,a,void 0,r&&r[a]));else{const o=Object.keys(e);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=t(e[c],c,a,r&&r[a])}}else s=[];return n&&(n[i]=s),s}const ld=e=>e?G1(e)?lh(e)||e.proxy:ld(e.parent):null,ea=Ge(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ld(e.parent),$root:e=>ld(e.root),$emit:e=>e.emit,$options:e=>ag(e),$forceUpdate:e=>e.f||(e.f=()=>ng(e.update)),$nextTick:e=>e.n||(e.n=eg.bind(e.proxy)),$watch:e=>tk.bind(e)}),uf=(e,t)=>e!==$t&&!e.__isScriptSetup&&St(e,t),hk={get({_:e},t){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=e;let c;if(t[0]!=="$"){const d=o[t];if(d!==void 0)switch(d){case 1:return i[t];case 2:return s[t];case 4:return n[t];case 3:return r[t]}else{if(uf(i,t))return o[t]=1,i[t];if(s!==$t&&St(s,t))return o[t]=2,s[t];if((c=e.propsOptions[0])&&St(c,t))return o[t]=3,r[t];if(n!==$t&&St(n,t))return o[t]=4,n[t];cd&&(o[t]=0)}}const u=ea[t];let h,f;if(u)return t==="$attrs"&&on(e,"get",t),u(e);if((h=a.__cssModules)&&(h=h[t]))return h;if(n!==$t&&St(n,t))return o[t]=4,n[t];if(f=l.config.globalProperties,St(f,t))return f[t]},set({_:e},t,n){const{data:i,setupState:s,ctx:r}=e;return uf(s,t)?(s[t]=n,!0):i!==$t&&St(i,t)?(i[t]=n,!0):St(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||e!==$t&&St(e,o)||uf(t,o)||(a=r[0])&&St(a,o)||St(i,o)||St(ea,o)||St(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:St(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let cd=!0;function fk(e){const t=ag(e),n=e.proxy,i=e.ctx;cd=!1,t.beforeCreate&&D_(t.beforeCreate,e,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:p,activated:g,deactivated:m,beforeDestroy:_,beforeUnmount:v,destroyed:w,unmounted:E,render:x,renderTracked:A,renderTriggered:S,errorCaptured:C,serverPrefetch:U,expose:G,inheritAttrs:tt,components:ot,directives:Jt,filters:Gt}=t;if(c&&dk(c,i,null,e.appContext.config.unwrapInjectedRef),o)for(const ft in o){const Tt=o[ft];ut(Tt)&&(i[ft]=Tt.bind(n))}if(s){const ft=s.call(n,n);Qt(ft)&&(e.data=rs(ft))}if(cd=!0,r)for(const ft in r){const Tt=r[ft],Re=ut(Tt)?Tt.bind(n,n):ut(Tt.get)?Tt.get.bind(n,n):Un,Ye=!ut(Tt)&&ut(Tt.set)?Tt.set.bind(n):Un,De=Et({get:Re,set:Ye});Object.defineProperty(i,ft,{enumerable:!0,configurable:!0,get:()=>De.value,set:oe=>De.value=oe})}if(a)for(const ft in a)U1(a[ft],i,n,ft);if(l){const ft=ut(l)?l.call(n):l;Reflect.ownKeys(ft).forEach(Tt=>{Ic(Tt,ft[Tt])})}u&&D_(u,e,"c");function dt(ft,Tt){rt(Tt)?Tt.forEach(Re=>ft(Re.bind(n))):Tt&&ft(Tt.bind(n))}if(dt(P1,h),dt(rg,f),dt(sk,d),dt(rk,p),dt(ek,g),dt(nk,m),dt(lk,C),dt(ak,A),dt(ok,S),dt(M1,v),dt(og,E),dt(N1,U),rt(G))if(G.length){const ft=e.exposed||(e.exposed={});G.forEach(Tt=>{Object.defineProperty(ft,Tt,{get:()=>n[Tt],set:Re=>n[Tt]=Re})})}else e.exposed||(e.exposed={});x&&e.render===Un&&(e.render=x),tt!=null&&(e.inheritAttrs=tt),ot&&(e.components=ot),Jt&&(e.directives=Jt)}function dk(e,t,n=Un,i=!1){rt(e)&&(e=ud(e));for(const s in e){const r=e[s];let o;Qt(r)?"default"in r?o=sn(r.from||s,r.default,!0):o=sn(r.from||s):o=sn(r),ee(o)&&i?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):t[s]=o}}function D_(e,t,n){Bn(rt(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,n)}function U1(e,t,n,i){const s=i.includes(".")?R1(n,i):()=>n[i];if(me(e)){const r=t[e];ut(r)&&Qi(s,r)}else if(ut(e))Qi(s,e.bind(n));else if(Qt(e))if(rt(e))e.forEach(r=>U1(r,t,n,i));else{const r=ut(e.handler)?e.handler.bind(n):t[e.handler];ut(r)&&Qi(s,r,e)}}function ag(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!n&&!i?l=t:(l={},s.length&&s.forEach(c=>Kc(l,c,o,!0)),Kc(l,t,o)),Qt(t)&&r.set(t,l),l}function Kc(e,t,n,i=!1){const{mixins:s,extends:r}=t;r&&Kc(e,r,n,!0),s&&s.forEach(o=>Kc(e,o,n,!0));for(const o in t)if(!(i&&o==="expose")){const a=pk[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const pk={data:O_,props:Ts,emits:Ts,methods:Ts,computed:Ts,beforeCreate:We,created:We,beforeMount:We,mounted:We,beforeUpdate:We,updated:We,beforeDestroy:We,beforeUnmount:We,destroyed:We,unmounted:We,activated:We,deactivated:We,errorCaptured:We,serverPrefetch:We,components:Ts,directives:Ts,watch:mk,provide:O_,inject:gk};function O_(e,t){return t?e?function(){return Ge(ut(e)?e.call(this,this):e,ut(t)?t.call(this,this):t)}:t:e}function gk(e,t){return Ts(ud(e),ud(t))}function ud(e){if(rt(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function We(e,t){return e?[...new Set([].concat(e,t))]:t}function Ts(e,t){return e?Ge(Ge(Object.create(null),e),t):t}function mk(e,t){if(!e)return t;if(!t)return e;const n=Ge(Object.create(null),e);for(const i in t)n[i]=We(e[i],t[i]);return n}function _k(e,t,n,i=!1){const s={},r={};zc(r,ah,1),e.propsDefaults=Object.create(null),B1(e,t,s,r);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=i?s:PI(s):e.type.props?e.props=s:e.props=r,e.attrs=r}function yk(e,t,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=e,a=_t(s),[l]=e.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(th(e.emitsOptions,f))continue;const d=t[f];if(l)if(St(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const p=ii(f);s[p]=hd(l,a,p,d,e,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{B1(e,t,s,r)&&(c=!0);let u;for(const h in a)(!t||!St(t,h)&&((u=fo(h))===h||!St(t,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=hd(l,a,h,void 0,e,!0)):delete s[h]);if(r!==a)for(const h in r)(!t||!St(t,h))&&(delete r[h],c=!0)}c&&Ti(e,"set","$attrs")}function B1(e,t,n,i){const[s,r]=e.propsOptions;let o=!1,a;if(t)for(let l in t){if(Cc(l))continue;const c=t[l];let u;s&&St(s,u=ii(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:th(e.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=_t(n),c=a||$t;for(let u=0;u<r.length;u++){const h=r[u];n[h]=hd(s,l,h,c[h],e,!St(c,h))}}return o}function hd(e,t,n,i,s,r){const o=e[n];if(o!=null){const a=St(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&ut(l)){const{propsDefaults:c}=s;n in c?i=c[n]:(Kr(s),i=c[n]=l.call(null,t),$s())}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===fo(n))&&(i=!0))}return i}function V1(e,t,n=!1){const i=t.propsCache,s=i.get(e);if(s)return s;const r=e.props,o={},a=[];let l=!1;if(!ut(e)){const u=h=>{l=!0;const[f,d]=V1(h,t,!0);Ge(o,f),d&&a.push(...d)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!r&&!l)return Qt(e)&&i.set(e,Rr),Rr;if(rt(r))for(let u=0;u<r.length;u++){const h=ii(r[u]);P_(h)&&(o[h]=$t)}else if(r)for(const u in r){const h=ii(u);if(P_(h)){const f=r[u],d=o[h]=rt(f)||ut(f)?{type:f}:Object.assign({},f);if(d){const p=L_(Boolean,d.type),g=L_(String,d.type);d[0]=p>-1,d[1]=g<0||p<g,(p>-1||St(d,"default"))&&a.push(h)}}}const c=[o,a];return Qt(e)&&i.set(e,c),c}function P_(e){return e[0]!=="$"}function M_(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function N_(e,t){return M_(e)===M_(t)}function L_(e,t){return rt(t)?t.findIndex(n=>N_(n,e)):ut(t)&&N_(t,e)?0:-1}const $1=e=>e[0]==="_"||e==="$stable",lg=e=>rt(e)?e.map(Yn):[Yn(e)],vk=(e,t,n)=>{if(t._n)return t;const i=ig((...s)=>lg(t(...s)),n);return i._c=!1,i},z1=(e,t,n)=>{const i=e._ctx;for(const s in e){if($1(s))continue;const r=e[s];if(ut(r))t[s]=vk(s,r,i);else if(r!=null){const o=lg(r);t[s]=()=>o}}},H1=(e,t)=>{const n=lg(t);e.slots.default=()=>n},bk=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=_t(t),zc(t,"_",n)):z1(t,e.slots={})}else e.slots={},t&&H1(e,t);zc(e.slots,ah,1)},wk=(e,t,n)=>{const{vnode:i,slots:s}=e;let r=!0,o=$t;if(i.shapeFlag&32){const a=t._;a?n&&a===1?r=!1:(Ge(s,t),!n&&a===1&&delete s._):(r=!t.$stable,z1(t,s)),o=t}else t&&(H1(e,t),o={default:1});if(r)for(const a in s)!$1(a)&&!(a in o)&&delete s[a]};function j1(){return{app:null,config:{isNativeTag:JS,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ek=0;function xk(e,t){return function(i,s=null){ut(i)||(i=Object.assign({},i)),s!=null&&!Qt(s)&&(s=null);const r=j1(),o=new Set;let a=!1;const l=r.app={_uid:Ek++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Q1,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&ut(c.install)?(o.add(c),c.install(l,...u)):ut(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const f=he(i,s);return f.appContext=r,u&&t?t(f,c):e(f,c,h),a=!0,l._container=c,c.__vue_app__=l,lh(f.component)||f.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function fd(e,t,n,i,s=!1){if(rt(e)){e.forEach((f,d)=>fd(f,t&&(rt(t)?t[d]:t),n,i,s));return}if(kc(i)&&!s)return;const r=i.shapeFlag&4?lh(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=e,c=t&&t.r,u=a.refs===$t?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(me(c)?(u[c]=null,St(h,c)&&(h[c]=null)):ee(c)&&(c.value=null)),ut(l))Xi(l,a,12,[o,u]);else{const f=me(l),d=ee(l);if(f||d){const p=()=>{if(e.f){const g=f?St(h,l)?h[l]:u[l]:l.value;s?rt(g)&&Hp(g,r):rt(g)?g.includes(r)||g.push(r):f?(u[l]=[r],St(h,l)&&(h[l]=u[l])):(l.value=[r],e.k&&(u[e.k]=l.value))}else f?(u[l]=o,St(h,l)&&(h[l]=o)):d&&(l.value=o,e.k&&(u[e.k]=o))};o?(p.id=-1,Je(p,n)):p()}}}const Je=JI;function Tk(e){return Ck(e)}function Ck(e,t){const n=sI();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=Un,insertStaticContent:p}=e,g=(y,b,T,I=null,R=null,N=null,z=!1,M=null,L=!!b.dynamicChildren)=>{if(y===b)return;y&&!Ro(y,b)&&(I=V(y),oe(y,R,N,!0),y=null),b.patchFlag===-2&&(L=!1,b.dynamicChildren=null);const{type:O,ref:X,shapeFlag:j}=b;switch(O){case oh:m(y,b,T,I);break;case Ks:_(y,b,T,I);break;case Ac:y==null&&v(b,T,I,z);break;case ie:ot(y,b,T,I,R,N,z,M,L);break;default:j&1?x(y,b,T,I,R,N,z,M,L):j&6?Jt(y,b,T,I,R,N,z,M,L):(j&64||j&128)&&O.process(y,b,T,I,R,N,z,M,L,Ct)}X!=null&&R&&fd(X,y&&y.ref,N,b||y,!b)},m=(y,b,T,I)=>{if(y==null)i(b.el=a(b.children),T,I);else{const R=b.el=y.el;b.children!==y.children&&c(R,b.children)}},_=(y,b,T,I)=>{y==null?i(b.el=l(b.children||""),T,I):b.el=y.el},v=(y,b,T,I)=>{[y.el,y.anchor]=p(y.children,b,T,I,y.el,y.anchor)},w=({el:y,anchor:b},T,I)=>{let R;for(;y&&y!==b;)R=f(y),i(y,T,I),y=R;i(b,T,I)},E=({el:y,anchor:b})=>{let T;for(;y&&y!==b;)T=f(y),s(y),y=T;s(b)},x=(y,b,T,I,R,N,z,M,L)=>{z=z||b.type==="svg",y==null?A(b,T,I,R,N,z,M,L):U(y,b,R,N,z,M,L)},A=(y,b,T,I,R,N,z,M)=>{let L,O;const{type:X,props:j,shapeFlag:Q,transition:st,dirs:gt}=y;if(L=y.el=o(y.type,N,j&&j.is,j),Q&8?u(L,y.children):Q&16&&C(y.children,L,null,I,R,N&&X!=="foreignObject",z,M),gt&&ys(y,null,I,"created"),S(L,y,y.scopeId,z,I),j){for(const Lt in j)Lt!=="value"&&!Cc(Lt)&&r(L,Lt,null,j[Lt],N,y.children,I,R,B);"value"in j&&r(L,"value",null,j.value),(O=j.onVnodeBeforeMount)&&Kn(O,I,y)}gt&&ys(y,null,I,"beforeMount");const Ut=(!R||R&&!R.pendingBranch)&&st&&!st.persisted;Ut&&st.beforeEnter(L),i(L,b,T),((O=j&&j.onVnodeMounted)||Ut||gt)&&Je(()=>{O&&Kn(O,I,y),Ut&&st.enter(L),gt&&ys(y,null,I,"mounted")},R)},S=(y,b,T,I,R)=>{if(T&&d(y,T),I)for(let N=0;N<I.length;N++)d(y,I[N]);if(R){let N=R.subTree;if(b===N){const z=R.vnode;S(y,z,z.scopeId,z.slotScopeIds,R.parent)}}},C=(y,b,T,I,R,N,z,M,L=0)=>{for(let O=L;O<y.length;O++){const X=y[O]=M?Hi(y[O]):Yn(y[O]);g(null,X,b,T,I,R,N,z,M)}},U=(y,b,T,I,R,N,z)=>{const M=b.el=y.el;let{patchFlag:L,dynamicChildren:O,dirs:X}=b;L|=y.patchFlag&16;const j=y.props||$t,Q=b.props||$t;let st;T&&vs(T,!1),(st=Q.onVnodeBeforeUpdate)&&Kn(st,T,b,y),X&&ys(b,y,T,"beforeUpdate"),T&&vs(T,!0);const gt=R&&b.type!=="foreignObject";if(O?G(y.dynamicChildren,O,M,T,I,gt,N):z||Tt(y,b,M,null,T,I,gt,N,!1),L>0){if(L&16)tt(M,b,j,Q,T,I,R);else if(L&2&&j.class!==Q.class&&r(M,"class",null,Q.class,R),L&4&&r(M,"style",j.style,Q.style,R),L&8){const Ut=b.dynamicProps;for(let Lt=0;Lt<Ut.length;Lt++){const le=Ut[Lt],Sn=j[le],gr=Q[le];(gr!==Sn||le==="value")&&r(M,le,Sn,gr,R,y.children,T,I,B)}}L&1&&y.children!==b.children&&u(M,b.children)}else!z&&O==null&&tt(M,b,j,Q,T,I,R);((st=Q.onVnodeUpdated)||X)&&Je(()=>{st&&Kn(st,T,b,y),X&&ys(b,y,T,"updated")},I)},G=(y,b,T,I,R,N,z)=>{for(let M=0;M<b.length;M++){const L=y[M],O=b[M],X=L.el&&(L.type===ie||!Ro(L,O)||L.shapeFlag&70)?h(L.el):T;g(L,O,X,null,I,R,N,z,!0)}},tt=(y,b,T,I,R,N,z)=>{if(T!==I){if(T!==$t)for(const M in T)!Cc(M)&&!(M in I)&&r(y,M,T[M],null,z,b.children,R,N,B);for(const M in I){if(Cc(M))continue;const L=I[M],O=T[M];L!==O&&M!=="value"&&r(y,M,O,L,z,b.children,R,N,B)}"value"in I&&r(y,"value",T.value,I.value)}},ot=(y,b,T,I,R,N,z,M,L)=>{const O=b.el=y?y.el:a(""),X=b.anchor=y?y.anchor:a("");let{patchFlag:j,dynamicChildren:Q,slotScopeIds:st}=b;st&&(M=M?M.concat(st):st),y==null?(i(O,T,I),i(X,T,I),C(b.children,T,X,R,N,z,M,L)):j>0&&j&64&&Q&&y.dynamicChildren?(G(y.dynamicChildren,Q,T,R,N,z,M),(b.key!=null||R&&b===R.subTree)&&W1(y,b,!0)):Tt(y,b,T,X,R,N,z,M,L)},Jt=(y,b,T,I,R,N,z,M,L)=>{b.slotScopeIds=M,y==null?b.shapeFlag&512?R.ctx.activate(b,T,I,z,L):Gt(b,T,I,R,N,z,L):ht(y,b,L)},Gt=(y,b,T,I,R,N,z)=>{const M=y.component=Mk(y,I,R);if(D1(y)&&(M.ctx.renderer=Ct),Nk(M),M.asyncDep){if(R&&R.registerDep(M,dt),!y.el){const L=M.subTree=he(Ks);_(null,L,b,T)}return}dt(M,y,b,T,R,N,z)},ht=(y,b,T)=>{const I=b.component=y.component;if(YI(y,b,T))if(I.asyncDep&&!I.asyncResolved){ft(I,b,T);return}else I.next=b,HI(I.update),I.update();else b.el=y.el,I.vnode=b},dt=(y,b,T,I,R,N,z)=>{const M=()=>{if(y.isMounted){let{next:X,bu:j,u:Q,parent:st,vnode:gt}=y,Ut=X,Lt;vs(y,!1),X?(X.el=gt.el,ft(y,X,z)):X=gt,j&&Sc(j),(Lt=X.props&&X.props.onVnodeBeforeUpdate)&&Kn(Lt,st,X,gt),vs(y,!0);const le=cf(y),Sn=y.subTree;y.subTree=le,g(Sn,le,h(Sn.el),V(Sn),y,R,N),X.el=le.el,Ut===null&&XI(y,le.el),Q&&Je(Q,R),(Lt=X.props&&X.props.onVnodeUpdated)&&Je(()=>Kn(Lt,st,X,gt),R)}else{let X;const{el:j,props:Q}=b,{bm:st,m:gt,parent:Ut}=y,Lt=kc(b);if(vs(y,!1),st&&Sc(st),!Lt&&(X=Q&&Q.onVnodeBeforeMount)&&Kn(X,Ut,b),vs(y,!0),j&&pt){const le=()=>{y.subTree=cf(y),pt(j,y.subTree,y,R,null)};Lt?b.type.__asyncLoader().then(()=>!y.isUnmounted&&le()):le()}else{const le=y.subTree=cf(y);g(null,le,T,I,y,R,N),b.el=le.el}if(gt&&Je(gt,R),!Lt&&(X=Q&&Q.onVnodeMounted)){const le=b;Je(()=>Kn(X,Ut,le),R)}(b.shapeFlag&256||Ut&&kc(Ut.vnode)&&Ut.vnode.shapeFlag&256)&&y.a&&Je(y.a,R),y.isMounted=!0,b=T=I=null}},L=y.effect=new Gp(M,()=>ng(O),y.scope),O=y.update=()=>L.run();O.id=y.uid,vs(y,!0),O()},ft=(y,b,T)=>{b.component=y;const I=y.vnode.props;y.vnode=b,y.next=null,yk(y,b.props,I,T),wk(y,b.children,T),po(),k_(),go()},Tt=(y,b,T,I,R,N,z,M,L=!1)=>{const O=y&&y.children,X=y?y.shapeFlag:0,j=b.children,{patchFlag:Q,shapeFlag:st}=b;if(Q>0){if(Q&128){Ye(O,j,T,I,R,N,z,M,L);return}else if(Q&256){Re(O,j,T,I,R,N,z,M,L);return}}st&8?(X&16&&B(O,R,N),j!==O&&u(T,j)):X&16?st&16?Ye(O,j,T,I,R,N,z,M,L):B(O,R,N,!0):(X&8&&u(T,""),st&16&&C(j,T,I,R,N,z,M,L))},Re=(y,b,T,I,R,N,z,M,L)=>{y=y||Rr,b=b||Rr;const O=y.length,X=b.length,j=Math.min(O,X);let Q;for(Q=0;Q<j;Q++){const st=b[Q]=L?Hi(b[Q]):Yn(b[Q]);g(y[Q],st,T,null,R,N,z,M,L)}O>X?B(y,R,N,!0,!1,j):C(b,T,I,R,N,z,M,L,j)},Ye=(y,b,T,I,R,N,z,M,L)=>{let O=0;const X=b.length;let j=y.length-1,Q=X-1;for(;O<=j&&O<=Q;){const st=y[O],gt=b[O]=L?Hi(b[O]):Yn(b[O]);if(Ro(st,gt))g(st,gt,T,null,R,N,z,M,L);else break;O++}for(;O<=j&&O<=Q;){const st=y[j],gt=b[Q]=L?Hi(b[Q]):Yn(b[Q]);if(Ro(st,gt))g(st,gt,T,null,R,N,z,M,L);else break;j--,Q--}if(O>j){if(O<=Q){const st=Q+1,gt=st<X?b[st].el:I;for(;O<=Q;)g(null,b[O]=L?Hi(b[O]):Yn(b[O]),T,gt,R,N,z,M,L),O++}}else if(O>Q)for(;O<=j;)oe(y[O],R,N,!0),O++;else{const st=O,gt=O,Ut=new Map;for(O=gt;O<=Q;O++){const ln=b[O]=L?Hi(b[O]):Yn(b[O]);ln.key!=null&&Ut.set(ln.key,O)}let Lt,le=0;const Sn=Q-gt+1;let gr=!1,__=0;const Ao=new Array(Sn);for(O=0;O<Sn;O++)Ao[O]=0;for(O=st;O<=j;O++){const ln=y[O];if(le>=Sn){oe(ln,R,N,!0);continue}let Wn;if(ln.key!=null)Wn=Ut.get(ln.key);else for(Lt=gt;Lt<=Q;Lt++)if(Ao[Lt-gt]===0&&Ro(ln,b[Lt])){Wn=Lt;break}Wn===void 0?oe(ln,R,N,!0):(Ao[Wn-gt]=O+1,Wn>=__?__=Wn:gr=!0,g(ln,b[Wn],T,null,R,N,z,M,L),le++)}const y_=gr?Sk(Ao):Rr;for(Lt=y_.length-1,O=Sn-1;O>=0;O--){const ln=gt+O,Wn=b[ln],v_=ln+1<X?b[ln+1].el:I;Ao[O]===0?g(null,Wn,T,v_,R,N,z,M,L):gr&&(Lt<0||O!==y_[Lt]?De(Wn,T,v_,2):Lt--)}}},De=(y,b,T,I,R=null)=>{const{el:N,type:z,transition:M,children:L,shapeFlag:O}=y;if(O&6){De(y.component.subTree,b,T,I);return}if(O&128){y.suspense.move(b,T,I);return}if(O&64){z.move(y,b,T,Ct);return}if(z===ie){i(N,b,T);for(let j=0;j<L.length;j++)De(L[j],b,T,I);i(y.anchor,b,T);return}if(z===Ac){w(y,b,T);return}if(I!==2&&O&1&&M)if(I===0)M.beforeEnter(N),i(N,b,T),Je(()=>M.enter(N),R);else{const{leave:j,delayLeave:Q,afterLeave:st}=M,gt=()=>i(N,b,T),Ut=()=>{j(N,()=>{gt(),st&&st()})};Q?Q(N,gt,Ut):Ut()}else i(N,b,T)},oe=(y,b,T,I=!1,R=!1)=>{const{type:N,props:z,ref:M,children:L,dynamicChildren:O,shapeFlag:X,patchFlag:j,dirs:Q}=y;if(M!=null&&fd(M,null,T,y,!0),X&256){b.ctx.deactivate(y);return}const st=X&1&&Q,gt=!kc(y);let Ut;if(gt&&(Ut=z&&z.onVnodeBeforeUnmount)&&Kn(Ut,b,y),X&6)k(y.component,T,I);else{if(X&128){y.suspense.unmount(T,I);return}st&&ys(y,null,b,"beforeUnmount"),X&64?y.type.remove(y,b,T,R,Ct,I):O&&(N!==ie||j>0&&j&64)?B(O,b,T,!1,!0):(N===ie&&j&384||!R&&X&16)&&B(L,b,T),I&&yn(y)}(gt&&(Ut=z&&z.onVnodeUnmounted)||st)&&Je(()=>{Ut&&Kn(Ut,b,y),st&&ys(y,null,b,"unmounted")},T)},yn=y=>{const{type:b,el:T,anchor:I,transition:R}=y;if(b===ie){jn(T,I);return}if(b===Ac){E(y);return}const N=()=>{s(T),R&&!R.persisted&&R.afterLeave&&R.afterLeave()};if(y.shapeFlag&1&&R&&!R.persisted){const{leave:z,delayLeave:M}=R,L=()=>z(T,N);M?M(y.el,N,L):L()}else N()},jn=(y,b)=>{let T;for(;y!==b;)T=f(y),s(y),y=T;s(b)},k=(y,b,T)=>{const{bum:I,scope:R,update:N,subTree:z,um:M}=y;I&&Sc(I),R.stop(),N&&(N.active=!1,oe(z,y,b,T)),M&&Je(M,b),Je(()=>{y.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},B=(y,b,T,I=!1,R=!1,N=0)=>{for(let z=N;z<y.length;z++)oe(y[z],b,T,I,R)},V=y=>y.shapeFlag&6?V(y.component.subTree):y.shapeFlag&128?y.suspense.next():f(y.anchor||y.el),Y=(y,b,T)=>{y==null?b._vnode&&oe(b._vnode,null,null,!0):g(b._vnode||null,y,b,null,null,null,T),k_(),I1(),b._vnode=y},Ct={p:g,um:oe,m:De,r:yn,mt:Gt,mc:C,pc:Tt,pbc:G,n:V,o:e};let Zt,pt;return t&&([Zt,pt]=t(Ct)),{render:Y,hydrate:Zt,createApp:xk(Y,Zt)}}function vs({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function W1(e,t,n=!1){const i=e.children,s=t.children;if(rt(i)&&rt(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Hi(s[r]),a.el=o.el),n||W1(o,a)),a.type===oh&&(a.el=o.el)}}function Sk(e){const t=e.slice(),n=[0];let i,s,r,o,a;const l=e.length;for(i=0;i<l;i++){const c=e[i];if(c!==0){if(s=n[n.length-1],e[s]<c){t[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,e[n[a]]<c?r=a+1:o=a;c<e[n[r]]&&(r>0&&(t[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=t[o];return n}const Ik=e=>e.__isTeleport,ie=Symbol(void 0),oh=Symbol(void 0),Ks=Symbol(void 0),Ac=Symbol(void 0),na=[];let On=null;function lt(e=!1){na.push(On=e?null:[])}function kk(){na.pop(),On=na[na.length-1]||null}let ka=1;function F_(e){ka+=e}function K1(e){return e.dynamicChildren=ka>0?On||Rr:null,kk(),ka>0&&On&&On.push(e),e}function kt(e,t,n,i,s,r){return K1(Pt(e,t,n,i,s,r,!0))}function Vn(e,t,n,i,s){return K1(he(e,t,n,i,s,!0))}function dd(e){return e?e.__v_isVNode===!0:!1}function Ro(e,t){return e.type===t.type&&e.key===t.key}const ah="__vInternal",q1=({key:e})=>e??null,Rc=({ref:e,ref_key:t,ref_for:n})=>e!=null?me(e)||ee(e)||ut(e)?{i:dn,r:e,k:t,f:!!n}:e:null;function Pt(e,t=null,n=null,i=0,s=null,r=e===ie?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&q1(t),ref:t&&Rc(t),scopeId:eh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:dn};return a?(cg(l,n),r&128&&e.normalize(l)):n&&(l.shapeFlag|=me(n)?8:16),ka>0&&!o&&On&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&On.push(l),l}const he=Ak;function Ak(e,t=null,n=null,i=0,s=null,r=!1){if((!e||e===ck)&&(e=Ks),dd(e)){const a=Wr(e,t,!0);return n&&cg(a,n),ka>0&&!r&&On&&(a.shapeFlag&6?On[On.indexOf(e)]=a:On.push(a)),a.patchFlag|=-2,a}if(Vk(e)&&(e=e.__vccOpts),t){t=Rk(t);let{class:a,style:l}=t;a&&!me(a)&&(t.class=is(a)),Qt(l)&&(Qu(l)&&!rt(l)&&(l=Ge({},l)),t.style=ho(l))}const o=me(e)?1:QI(e)?128:Ik(e)?64:Qt(e)?4:ut(e)?2:0;return Pt(e,t,n,i,s,o,r,!0)}function Rk(e){return e?Qu(e)||ah in e?Ge({},e):e:null}function Wr(e,t,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=e,a=t?Dk(i||{},t):i;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&q1(a),ref:t&&t.ref?n&&s?rt(s)?s.concat(Rc(t)):[s,Rc(t)]:Rc(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ie?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Wr(e.ssContent),ssFallback:e.ssFallback&&Wr(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Pn(e=" ",t=0){return he(oh,null,e,t)}function Ze(e="",t=!1){return t?(lt(),Vn(Ks,null,e)):he(Ks,null,e)}function Yn(e){return e==null||typeof e=="boolean"?he(Ks):rt(e)?he(ie,null,e.slice()):typeof e=="object"?Hi(e):he(oh,null,String(e))}function Hi(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Wr(e)}function cg(e,t){let n=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(rt(t))n=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),cg(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(ah in t)?t._ctx=dn:s===3&&dn&&(dn.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ut(t)?(t={default:t,_ctx:dn},n=32):(t=String(t),i&64?(n=16,t=[Pn(t)]):n=8);e.children=t,e.shapeFlag|=n}function Dk(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=is([t.class,i.class]));else if(s==="style")t.style=ho([t.style,i.style]);else if(Ku(s)){const r=t[s],o=i[s];o&&r!==o&&!(rt(r)&&r.includes(o))&&(t[s]=r?[].concat(r,o):o)}else s!==""&&(t[s]=i[s])}return t}function Kn(e,t,n,i=null){Bn(e,t,7,[n,i])}const Ok=j1();let Pk=0;function Mk(e,t,n){const i=e.type,s=(t?t.appContext:e.appContext)||Ok,r={uid:Pk++,vnode:e,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new o1(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:V1(i,s),emitsOptions:A1(i,s),emit:null,emitted:null,propsDefaults:$t,inheritAttrs:i.inheritAttrs,ctx:$t,data:$t,props:$t,attrs:$t,slots:$t,refs:$t,setupState:$t,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=KI.bind(null,r),e.ce&&e.ce(r),r}let ae=null;const sl=()=>ae||dn,Kr=e=>{ae=e,e.scope.on()},$s=()=>{ae&&ae.scope.off(),ae=null};function G1(e){return e.vnode.shapeFlag&4}let Aa=!1;function Nk(e,t=!1){Aa=t;const{props:n,children:i}=e.vnode,s=G1(e);_k(e,n,s,t),bk(e,i);const r=s?Lk(e,t):void 0;return Aa=!1,r}function Lk(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Hr(new Proxy(e.ctx,hk));const{setup:i}=n;if(i){const s=e.setupContext=i.length>1?Uk(e):null;Kr(e),po();const r=Xi(i,e,0,[e.props,s]);if(go(),$s(),i1(r)){if(r.then($s,$s),t)return r.then(o=>{U_(e,o,t)}).catch(o=>{Zu(o,e,0)});e.asyncDep=r}else U_(e,r,t)}else Y1(e,t)}function U_(e,t,n){ut(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Qt(t)&&(e.setupState=x1(t)),Y1(e,n)}let B_;function Y1(e,t,n){const i=e.type;if(!e.render){if(!t&&B_&&!i.render){const s=i.template||ag(e).template;if(s){const{isCustomElement:r,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Ge(Ge({isCustomElement:r,delimiters:a},o),l);i.render=B_(s,c)}}e.render=i.render||Un}Kr(e),po(),fk(e),go(),$s()}function Fk(e){return new Proxy(e.attrs,{get(t,n){return on(e,"get","$attrs"),t[n]}})}function Uk(e){const t=i=>{e.exposed=i||{}};let n;return{get attrs(){return n||(n=Fk(e))},slots:e.slots,emit:e.emit,expose:t}}function lh(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(x1(Hr(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ea)return ea[n](e)},has(t,n){return n in t||n in ea}}))}function Bk(e,t=!0){return ut(e)?e.displayName||e.name:e.name||t&&e.__name}function Vk(e){return ut(e)&&"__vccOpts"in e}const Et=(e,t)=>VI(e,t,Aa);function mo(e,t,n){const i=arguments.length;return i===2?Qt(t)&&!rt(t)?dd(t)?he(e,null,[t]):he(e,t):he(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&dd(n)&&(n=[n]),he(e,t,n))}const X1=Symbol(""),$k=()=>sn(X1),Q1="3.2.47",zk="http://www.w3.org/2000/svg",Rs=typeof document<"u"?document:null,V_=Rs&&Rs.createElement("template"),Hk={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const s=t?Rs.createElementNS(zk,e):Rs.createElement(e,n?{is:n}:void 0);return e==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:e=>Rs.createTextNode(e),createComment:e=>Rs.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Rs.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,s,r){const o=n?n.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{V_.innerHTML=i?`<svg>${e}</svg>`:e;const a=V_.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function jk(e,t,n){const i=e._vtc;i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Wk(e,t,n){const i=e.style,s=me(n);if(n&&!s){if(t&&!me(t))for(const r in t)n[r]==null&&pd(i,r,"");for(const r in n)pd(i,r,n[r])}else{const r=i.display;s?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const $_=/\s*!important$/;function pd(e,t,n){if(rt(n))n.forEach(i=>pd(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=Kk(e,t);$_.test(n)?e.setProperty(fo(i),n.replace($_,""),"important"):e[i]=n}}const z_=["Webkit","Moz","ms"],hf={};function Kk(e,t){const n=hf[t];if(n)return n;let i=ii(t);if(i!=="filter"&&i in e)return hf[t]=i;i=Yu(i);for(let s=0;s<z_.length;s++){const r=z_[s]+i;if(r in e)return hf[t]=r}return t}const H_="http://www.w3.org/1999/xlink";function qk(e,t,n,i,s){if(i&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(H_,t.slice(6,t.length)):e.setAttributeNS(H_,t,n);else{const r=QS(t);n==null||r&&!t1(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function Gk(e,t,n,i,s,r,o){if(t==="innerHTML"||t==="textContent"){i&&o(i,s,r),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=t1(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}function wr(e,t,n,i){e.addEventListener(t,n,i)}function Yk(e,t,n,i){e.removeEventListener(t,n,i)}function Xk(e,t,n,i,s=null){const r=e._vei||(e._vei={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=Qk(t);if(i){const c=r[t]=tA(i,s);wr(e,a,c,l)}else o&&(Yk(e,a,o,l),r[t]=void 0)}}const j_=/(?:Once|Passive|Capture)$/;function Qk(e){let t;if(j_.test(e)){t={};let i;for(;i=e.match(j_);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):fo(e.slice(2)),t]}let ff=0;const Jk=Promise.resolve(),Zk=()=>ff||(Jk.then(()=>ff=0),ff=Date.now());function tA(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Bn(eA(i,n.value),t,5,[i])};return n.value=e,n.attached=Zk(),n}function eA(e,t){if(rt(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const W_=/^on[a-z]/,nA=(e,t,n,i,s=!1,r,o,a,l)=>{t==="class"?jk(e,i,s):t==="style"?Wk(e,n,i):Ku(t)?zp(t)||Xk(e,t,n,i,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):iA(e,t,i,s))?Gk(e,t,i,r,o,a,l):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),qk(e,t,i,s))};function iA(e,t,n,i){return i?!!(t==="innerHTML"||t==="textContent"||t in e&&W_.test(t)&&ut(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||W_.test(t)&&me(n)?!1:t in e}function J1(e){const t=sl();if(!t)return;const n=t.ut=(s=e(t.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach(r=>md(r,s))},i=()=>{const s=e(t.proxy);gd(t.subTree,s),n(s)};ZI(i),rg(()=>{const s=new MutationObserver(i);s.observe(t.subTree.el.parentNode,{childList:!0}),og(()=>s.disconnect())})}function gd(e,t){if(e.shapeFlag&128){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{gd(n.activeBranch,t)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)md(e.el,t);else if(e.type===ie)e.children.forEach(n=>gd(n,t));else if(e.type===Ac){let{el:n,anchor:i}=e;for(;n&&(md(n,t),n!==i);)n=n.nextSibling}}function md(e,t){if(e.nodeType===1){const n=e.style;for(const i in t)n.setProperty(`--${i}`,t[i])}}const K_=e=>{const t=e.props["onUpdate:modelValue"]||!1;return rt(t)?n=>Sc(t,n):t};function sA(e){e.target.composing=!0}function q_(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Z1={created(e,{modifiers:{lazy:t,trim:n,number:i}},s){e._assign=K_(s);const r=i||s.props&&s.props.type==="number";wr(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),r&&(a=id(a)),e._assign(a)}),n&&wr(e,"change",()=>{e.value=e.value.trim()}),t||(wr(e,"compositionstart",sA),wr(e,"compositionend",q_),wr(e,"change",q_))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:s}},r){if(e._assign=K_(r),e.composing||document.activeElement===e&&e.type!=="range"&&(n||i&&e.value.trim()===t||(s||e.type==="number")&&id(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},rA=["ctrl","shift","alt","meta"],oA={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>rA.some(n=>e[`${n}Key`]&&!t.includes(n))},ug=(e,t)=>(n,...i)=>{for(let s=0;s<t.length;s++){const r=oA[t[s]];if(r&&r(n,t))return}return e(n,...i)},aA=Ge({patchProp:nA},Hk);let G_;function lA(){return G_||(G_=Tk(aA))}const cA=(...e)=>{const t=lA().createApp(...e),{mount:n}=t;return t.mount=i=>{const s=uA(i);if(!s)return;const r=t._component;!ut(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function uA(e){return me(e)?document.querySelector(e):e}var hA=!1;/*!
  * pinia v2.0.35
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let tw;const ch=e=>tw=e,ew=Symbol();function _d(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var ia;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(ia||(ia={}));function fA(){const e=a1(!0),t=e.run(()=>xn({}));let n=[],i=[];const s=Hr({install(r){ch(s),s._a=r,r.provide(ew,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return!this._a&&!hA?i.push(r):n.push(r),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}const nw=()=>{};function Y_(e,t,n,i=nw){e.push(t);const s=()=>{const r=e.indexOf(t);r>-1&&(e.splice(r,1),i())};return!n&&Kp()&&l1(s),s}function mr(e,...t){e.slice().forEach(n=>{n(...t)})}function yd(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,i)=>e.set(i,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const i=t[n],s=e[n];_d(s)&&_d(i)&&e.hasOwnProperty(n)&&!ee(i)&&!Yi(i)?e[n]=yd(s,i):e[n]=i}return e}const dA=Symbol();function pA(e){return!_d(e)||!e.hasOwnProperty(dA)}const{assign:zi}=Object;function gA(e){return!!(ee(e)&&e.effect)}function mA(e,t,n,i){const{state:s,actions:r,getters:o}=t,a=n.state.value[e];let l;function c(){a||(n.state.value[e]=s?s():{});const u=LI(n.state.value[e]);return zi(u,r,Object.keys(o||{}).reduce((h,f)=>(h[f]=Hr(Et(()=>{ch(n);const d=n._s.get(e);return o[f].call(d,d)})),h),{}))}return l=iw(e,c,t,n,i,!0),l}function iw(e,t,n={},i,s,r){let o;const a=zi({actions:{}},n),l={deep:!0};let c,u,h=Hr([]),f=Hr([]),d;const p=i.state.value[e];!r&&!p&&(i.state.value[e]={}),xn({});let g;function m(S){let C;c=u=!1,typeof S=="function"?(S(i.state.value[e]),C={type:ia.patchFunction,storeId:e,events:d}):(yd(i.state.value[e],S),C={type:ia.patchObject,payload:S,storeId:e,events:d});const U=g=Symbol();eg().then(()=>{g===U&&(c=!0)}),u=!0,mr(h,C,i.state.value[e])}const _=r?function(){const{state:C}=n,U=C?C():{};this.$patch(G=>{zi(G,U)})}:nw;function v(){o.stop(),h=[],f=[],i._s.delete(e)}function w(S,C){return function(){ch(i);const U=Array.from(arguments),G=[],tt=[];function ot(ht){G.push(ht)}function Jt(ht){tt.push(ht)}mr(f,{args:U,name:S,store:x,after:ot,onError:Jt});let Gt;try{Gt=C.apply(this&&this.$id===e?this:x,U)}catch(ht){throw mr(tt,ht),ht}return Gt instanceof Promise?Gt.then(ht=>(mr(G,ht),ht)).catch(ht=>(mr(tt,ht),Promise.reject(ht))):(mr(G,Gt),Gt)}}const E={_p:i,$id:e,$onAction:Y_.bind(null,f),$patch:m,$reset:_,$subscribe(S,C={}){const U=Y_(h,S,C.detached,()=>G()),G=o.run(()=>Qi(()=>i.state.value[e],tt=>{(C.flush==="sync"?u:c)&&S({storeId:e,type:ia.direct,events:d},tt)},zi({},l,C)));return U},$dispose:v},x=rs(E);i._s.set(e,x);const A=i._e.run(()=>(o=a1(),o.run(()=>t())));for(const S in A){const C=A[S];if(ee(C)&&!gA(C)||Yi(C))r||(p&&pA(C)&&(ee(C)?C.value=p[S]:yd(C,p[S])),i.state.value[e][S]=C);else if(typeof C=="function"){const U=w(S,C);A[S]=U,a.actions[S]=C}}return zi(x,A),zi(_t(x),A),Object.defineProperty(x,"$state",{get:()=>i.state.value[e],set:S=>{m(C=>{zi(C,S)})}}),i._p.forEach(S=>{zi(x,o.run(()=>S({store:x,app:i._a,pinia:i,options:a})))}),p&&r&&n.hydrate&&n.hydrate(x.$state,p),c=!0,u=!0,x}function _A(e,t,n){let i,s;const r=typeof t=="function";typeof e=="string"?(i=e,s=r?n:t):(s=e,i=e.id);function o(a,l){const c=sl();return a=a||c&&sn(ew,null),a&&ch(a),a=tw,a._s.has(i)||(r?iw(i,t,s,a):mA(i,s,a)),a._s.get(i)}return o.$id=i,o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F=function(e,t){if(!e)throw _o(t)},_o=function(e){return new Error("Firebase Database ("+sw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},yA=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=e[n++],o=e[n++],a=e[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[i++]=String.fromCharCode(55296+(l>>10)),t[i++]=String.fromCharCode(56320+(l&1023))}else{const r=e[n++],o=e[n++];t[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return t.join("")},uh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<e.length;s+=3){const r=e[s],o=s+1<e.length,a=o?e[s+1]:0,l=s+2<e.length,c=l?e[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(f=64)),i.push(n[u],n[h],n[f],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(rw(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):yA(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<e.length;){const r=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const c=s<e.length?n[e.charAt(s)]:64;++s;const h=s<e.length?n[e.charAt(s)]:64;if(++s,r==null||a==null||c==null||h==null)throw new vA;const f=r<<2|a>>4;if(i.push(f),c!==64){const d=a<<4&240|c>>2;if(i.push(d),h!==64){const p=c<<6&192|h;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class vA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ow=function(e){const t=rw(e);return uh.encodeByteArray(t,!0)},qc=function(e){return ow(e).replace(/\./g,"")},Gc=function(e){try{return uh.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bA(e){return aw(void 0,e)}function aw(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!wA(n)||(e[n]=aw(e[n],t[n]));return e}function wA(e){return e!=="__proto__"}/**
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
 */function EA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const xA=()=>EA().__FIREBASE_DEFAULTS__,TA=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},CA=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Gc(e[1]);return t&&JSON.parse(t)},hg=()=>{try{return xA()||TA()||CA()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},SA=e=>{var t,n;return(n=(t=hg())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},IA=e=>{const t=SA(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),i]:[t.substring(0,n),i]},kA=()=>{var e;return(e=hg())===null||e===void 0?void 0:e.config},AA=e=>{var t;return(t=hg())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,i))}}}/**
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
 */function RA(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",s=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[qc(JSON.stringify(n)),qc(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(si())}function DA(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function lw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cw(){return sw.NODE_ADMIN===!0}function uw(){try{return typeof indexedDB=="object"}catch{return!1}}function OA(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;t(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA="FirebaseError";class Pi extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=PA,Object.setPrototypeOf(this,Pi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yo.prototype.create)}}class yo{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},s=`${this.service}/${t}`,r=this.errors[t],o=r?MA(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Pi(s,a,i)}}function MA(e,t){return e.replace(NA,(n,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const NA=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(e){return JSON.parse(e)}function Ie(e){return JSON.stringify(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hw=function(e){let t={},n={},i={},s="";try{const r=e.split(".");t=Da(Gc(r[0])||""),n=Da(Gc(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:i,signature:s}},LA=function(e){const t=hw(e),n=t.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},FA=function(e){const t=hw(e).claims;return typeof t=="object"&&t.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function qr(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function X_(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Yc(e,t,n){const i={};for(const s in e)Object.prototype.hasOwnProperty.call(e,s)&&(i[s]=t.call(n,e[s],s,e));return i}function vd(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const r=e[s],o=t[s];if(Q_(r)&&Q_(o)){if(!vd(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Q_(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,n){n||(n=0);const i=this.W_;if(typeof t=="string")for(let h=0;h<16;h++)i[h]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)i[h]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(let h=16;h<80;h++){const f=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const f=(s<<5|s>>>27)+c+l+u+i[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(t,n){if(t==null)return;n===void 0&&(n=t.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<n;)if(r[o]=t.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=t[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const t=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)t[i]=this.chain_[s]>>r&255,++i;return t}}function BA(e,t){const n=new VA(e,t);return n.subscribe.bind(n)}class VA{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,i){let s;if(t===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");$A(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:i},s.next===void 0&&(s.next=df),s.error===void 0&&(s.error=df),s.complete===void 0&&(s.complete=df);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $A(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function df(){}function zA(e,t){return`${e} failed: ${t} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HA=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,F(i<e.length,"Surrogate pair missing trail surrogate.");const o=e.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},hh=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};/**
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
 */function an(e){return e&&e._delegate?e._delegate:e}class zn{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Cs="[DEFAULT]";/**
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
 */class jA{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const i=new Ra;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(KA(t))try{this.getOrInitializeService({instanceIdentifier:Cs})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(t=Cs){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Cs){return this.instances.has(t)}getOptions(t=Cs){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(t,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(t),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&t(o,s),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:WA(t),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Cs){return this.component?this.component.multipleInstances?t:Cs:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function WA(e){return e===Cs?void 0:e}function KA(e){return e.instantiationMode==="EAGER"}/**
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
 */class qA{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new jA(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var It;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(It||(It={}));const GA={debug:It.DEBUG,verbose:It.VERBOSE,info:It.INFO,warn:It.WARN,error:It.ERROR,silent:It.SILENT},YA=It.INFO,XA={[It.DEBUG]:"log",[It.VERBOSE]:"log",[It.INFO]:"info",[It.WARN]:"warn",[It.ERROR]:"error"},QA=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),s=XA[t];if(s)console[s](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class rl{constructor(t){this.name=t,this._logLevel=YA,this._logHandler=QA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in It))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?GA[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,It.DEBUG,...t),this._logHandler(this,It.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,It.VERBOSE,...t),this._logHandler(this,It.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,It.INFO,...t),this._logHandler(this,It.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,It.WARN,...t),this._logHandler(this,It.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,It.ERROR,...t),this._logHandler(this,It.ERROR,...t)}}const JA=(e,t)=>t.some(n=>e instanceof n);let J_,Z_;function ZA(){return J_||(J_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tR(){return Z_||(Z_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fw=new WeakMap,bd=new WeakMap,dw=new WeakMap,pf=new WeakMap,pg=new WeakMap;function eR(e){const t=new Promise((n,i)=>{const s=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{n(Ji(e.result)),s()},o=()=>{i(e.error),s()};e.addEventListener("success",r),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&fw.set(n,e)}).catch(()=>{}),pg.set(t,e),t}function nR(e){if(bd.has(e))return;const t=new Promise((n,i)=>{const s=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)});bd.set(e,t)}let wd={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return bd.get(e);if(t==="objectStoreNames")return e.objectStoreNames||dw.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ji(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function iR(e){wd=e(wd)}function sR(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=e.call(gf(this),t,...n);return dw.set(i,t.sort?t.sort():[t]),Ji(i)}:tR().includes(e)?function(...t){return e.apply(gf(this),t),Ji(fw.get(this))}:function(...t){return Ji(e.apply(gf(this),t))}}function rR(e){return typeof e=="function"?sR(e):(e instanceof IDBTransaction&&nR(e),JA(e,ZA())?new Proxy(e,wd):e)}function Ji(e){if(e instanceof IDBRequest)return eR(e);if(pf.has(e))return pf.get(e);const t=rR(e);return t!==e&&(pf.set(e,t),pg.set(t,e)),t}const gf=e=>pg.get(e);function oR(e,t,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(e,t),a=Ji(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Ji(o.result),l.oldVersion,l.newVersion,Ji(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const aR=["get","getKey","getAll","getAllKeys","count"],lR=["put","add","delete","clear"],mf=new Map;function ty(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(mf.get(t))return mf.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,s=lR.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||aR.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return mf.set(t,r),r}iR(e=>({...e,get:(t,n,i)=>ty(t,n)||e.get(t,n,i),has:(t,n)=>!!ty(t,n)||e.has(t,n)}));/**
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
 */class cR{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(uR(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function uR(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ed="@firebase/app",ey="0.9.8";/**
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
 */const qs=new rl("@firebase/app"),hR="@firebase/app-compat",fR="@firebase/analytics-compat",dR="@firebase/analytics",pR="@firebase/app-check-compat",gR="@firebase/app-check",mR="@firebase/auth",_R="@firebase/auth-compat",yR="@firebase/database",vR="@firebase/database-compat",bR="@firebase/functions",wR="@firebase/functions-compat",ER="@firebase/installations",xR="@firebase/installations-compat",TR="@firebase/messaging",CR="@firebase/messaging-compat",SR="@firebase/performance",IR="@firebase/performance-compat",kR="@firebase/remote-config",AR="@firebase/remote-config-compat",RR="@firebase/storage",DR="@firebase/storage-compat",OR="@firebase/firestore",PR="@firebase/firestore-compat",MR="firebase",NR="9.20.0";/**
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
 */const xd="[DEFAULT]",LR={[Ed]:"fire-core",[hR]:"fire-core-compat",[dR]:"fire-analytics",[fR]:"fire-analytics-compat",[gR]:"fire-app-check",[pR]:"fire-app-check-compat",[mR]:"fire-auth",[_R]:"fire-auth-compat",[yR]:"fire-rtdb",[vR]:"fire-rtdb-compat",[bR]:"fire-fn",[wR]:"fire-fn-compat",[ER]:"fire-iid",[xR]:"fire-iid-compat",[TR]:"fire-fcm",[CR]:"fire-fcm-compat",[SR]:"fire-perf",[IR]:"fire-perf-compat",[kR]:"fire-rc",[AR]:"fire-rc-compat",[RR]:"fire-gcs",[DR]:"fire-gcs-compat",[OR]:"fire-fst",[PR]:"fire-fst-compat","fire-js":"fire-js",[MR]:"fire-js-all"};/**
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
 */const Xc=new Map,Td=new Map;function FR(e,t){try{e.container.addComponent(t)}catch(n){qs.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ri(e){const t=e.name;if(Td.has(t))return qs.debug(`There were multiple attempts to register component ${t}.`),!1;Td.set(t,e);for(const n of Xc.values())FR(n,e);return!0}function UR(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const BR={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Zi=new yo("app","Firebase",BR);/**
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
 */class VR{constructor(t,n,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Zi.create("app-deleted",{appName:this._name})}}/**
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
 */const vo=NR;function pw(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const i=Object.assign({name:xd,automaticDataCollectionEnabled:!1},t),s=i.name;if(typeof s!="string"||!s)throw Zi.create("bad-app-name",{appName:String(s)});if(n||(n=kA()),!n)throw Zi.create("no-options");const r=Xc.get(s);if(r){if(vd(n,r.options)&&vd(i,r.config))return r;throw Zi.create("duplicate-app",{appName:s})}const o=new qA(s);for(const l of Td.values())o.addComponent(l);const a=new VR(n,i,o);return Xc.set(s,a),a}function gw(e=xd){const t=Xc.get(e);if(!t&&e===xd)return pw();if(!t)throw Zi.create("no-app",{appName:e});return t}function pn(e,t,n){var i;let s=(i=LR[e])!==null&&i!==void 0?i:e;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${t}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),qs.warn(a.join(" "));return}ri(new zn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const $R="firebase-heartbeat-database",zR=1,Oa="firebase-heartbeat-store";let _f=null;function mw(){return _f||(_f=oR($R,zR,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Oa)}}}).catch(e=>{throw Zi.create("idb-open",{originalErrorMessage:e.message})})),_f}async function HR(e){try{return(await mw()).transaction(Oa).objectStore(Oa).get(_w(e))}catch(t){if(t instanceof Pi)qs.warn(t.message);else{const n=Zi.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});qs.warn(n.message)}}}async function ny(e,t){try{const i=(await mw()).transaction(Oa,"readwrite");return await i.objectStore(Oa).put(t,_w(e)),i.done}catch(n){if(n instanceof Pi)qs.warn(n.message);else{const i=Zi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qs.warn(i.message)}}}function _w(e){return`${e.name}!${e.options.appId}`}/**
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
 */const jR=1024,WR=30*24*60*60*1e3;class KR{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new GR(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=iy();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=WR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=iy(),{heartbeatsToSend:n,unsentEntries:i}=qR(this._heartbeatsCache.heartbeats),s=qc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function iy(){return new Date().toISOString().substring(0,10)}function qR(e,t=jR){const n=[];let i=e.slice();for(const s of e){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),sy(n)>t){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),sy(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class GR{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return uw()?OA().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await HR(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ny(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ny(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function sy(e){return qc(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function YR(e){ri(new zn("platform-logger",t=>new cR(t),"PRIVATE")),ri(new zn("heartbeat",t=>new KR(t),"PRIVATE")),pn(Ed,ey,e),pn(Ed,ey,"esm2017"),pn("fire-js","")}YR("");function yw(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(n[i[s]]=e[i[s]]);return n}function vw(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const XR=vw,bw=new yo("auth","Firebase",vw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc=new rl("@firebase/auth");function QR(e,...t){Qc.logLevel<=It.WARN&&Qc.warn(`Auth (${vo}): ${e}`,...t)}function Dc(e,...t){Qc.logLevel<=It.ERROR&&Qc.error(`Auth (${vo}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ry(e,...t){throw mg(e,...t)}function gg(e,...t){return mg(e,...t)}function JR(e,t,n){const i=Object.assign(Object.assign({},XR()),{[t]:n});return new yo("auth","Firebase",i).create(t,{appName:e.name})}function mg(e,...t){if(typeof e!="string"){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return bw.create(e,...t)}function Dt(e,t,...n){if(!e)throw mg(t,...n)}function sa(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Dc(t),new Error(t)}function Jc(e,t){e||sa(t)}function ZR(){return oy()==="http:"||oy()==="https:"}function oy(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ZR()||DA()||"connection"in navigator)?navigator.onLine:!0}function eD(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(t,n){this.shortDelay=t,this.longDelay=n,Jc(n>t,"Short delay should be less than long delay!"),this.isMobile=fg()||lw()}get(){return tD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nD(e,t){Jc(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{static initialize(t,n,i){this.fetchImpl=t,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;sa("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;sa("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;sa("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sD=new ol(3e4,6e4);function rD(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function _g(e,t,n,i,s={}){return Ew(e,s,async()=>{let r={},o={};i&&(t==="GET"?o=i:r={body:JSON.stringify(i)});const a=dg(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),ww.fetch()(xw(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},r))})}async function Ew(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},iD),t);try{const s=new oD(e),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw zl(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw zl(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw zl(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw zl(e,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw JR(e,u,c);ry(e,u)}}catch(s){if(s instanceof Pi)throw s;ry(e,"network-request-failed",{message:String(s)})}}function xw(e,t,n,i){const s=`${t}${n}?${i}`;return e.config.emulator?nD(e.config,s):`${e.config.apiScheme}://${s}`}class oD{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(gg(this.auth,"network-request-failed")),sD.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function zl(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=gg(e,t,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aD(e,t){return _g(e,"POST","/v1/accounts:delete",t)}async function lD(e,t){return _g(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function cD(e,t=!1){const n=an(e),i=await n.getIdToken(t),s=Tw(i);Dt(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:ra(yf(s.auth_time)),issuedAtTime:ra(yf(s.iat)),expirationTime:ra(yf(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function yf(e){return Number(e)*1e3}function Tw(e){const[t,n,i]=e.split(".");if(t===void 0||n===void 0||i===void 0)return Dc("JWT malformed, contained fewer than 3 sections"),null;try{const s=Gc(n);return s?JSON.parse(s):(Dc("Failed to decode base64 JWT payload"),null)}catch(s){return Dc("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function uD(e){const t=Tw(e);return Dt(t,"internal-error"),Dt(typeof t.exp<"u","internal-error"),Dt(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cd(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof Pi&&hD(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function hD({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ra(this.lastLoginAt),this.creationTime=ra(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Zc(e){var t;const n=e.auth,i=await e.getIdToken(),s=await Cd(e,lD(n,{idToken:i}));Dt(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];e._notifyReloadListener(r);const o=!((t=r.providerUserInfo)===null||t===void 0)&&t.length?gD(r.providerUserInfo):[],a=pD(e.providerData,o),l=e.isAnonymous,c=!(e.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Cw(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(e,h)}async function dD(e){const t=an(e);await Zc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function pD(e,t){return[...e.filter(i=>!t.some(s=>s.providerId===i.providerId)),...t]}function gD(e){return e.map(t=>{var{providerId:n}=t,i=yw(t,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mD(e,t){const n=await Ew(e,{},async()=>{const i=dg({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:r}=e.config,o=xw(e,s,"/v1/token",`key=${r}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ww.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Dt(t.idToken,"internal-error"),Dt(typeof t.idToken<"u","internal-error"),Dt(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):uD(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return Dt(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await mD(t,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(t,n,i){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new Pa;return i&&(Dt(typeof i=="string","internal-error",{appName:t}),o.refreshToken=i),s&&(Dt(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),r&&(Dt(typeof r=="number","internal-error",{appName:t}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Pa,this.toJSON())}_performRefresh(){return sa("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(e,t){Dt(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Pr{constructor(t){var{uid:n,auth:i,stsTokenManager:s}=t,r=yw(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Cw(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const n=await Cd(this,this.stsTokenManager.getToken(this.auth,t));return Dt(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return cD(this,t)}reload(){return dD(this)}_assign(t){this!==t&&(Dt(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Pr(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){Dt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),n&&await Zc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Cd(this,aD(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var i,s,r,o,a,l,c,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,d=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,m=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,_=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:w,emailVerified:E,isAnonymous:x,providerData:A,stsTokenManager:S}=n;Dt(w&&S,t,"internal-error");const C=Pa.fromJSON(this.name,S);Dt(typeof w=="string",t,"internal-error"),Ui(h,t.name),Ui(f,t.name),Dt(typeof E=="boolean",t,"internal-error"),Dt(typeof x=="boolean",t,"internal-error"),Ui(d,t.name),Ui(p,t.name),Ui(g,t.name),Ui(m,t.name),Ui(_,t.name),Ui(v,t.name);const U=new Pr({uid:w,auth:t,email:f,emailVerified:E,displayName:h,isAnonymous:x,photoURL:p,phoneNumber:d,tenantId:g,stsTokenManager:C,createdAt:_,lastLoginAt:v});return A&&Array.isArray(A)&&(U.providerData=A.map(G=>Object.assign({},G))),m&&(U._redirectEventId=m),U}static async _fromIdTokenResponse(t,n,i=!1){const s=new Pa;s.updateFromServerResponse(n);const r=new Pr({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:i});return await Zc(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=new Map;function Os(e){Jc(e instanceof Function,"Expected a class definition");let t=ay.get(e);return t?(Jc(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ay.set(e,t),t)}/**
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
 */class Sw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Sw.type="NONE";const ly=Sw;/**
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
 */function vf(e,t,n){return`firebase:${e}:${t}:${n}`}class Mr{constructor(t,n,i){this.persistence=t,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=vf(this.userKey,s.apiKey,r),this.fullPersistenceKey=vf("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Pr._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,i="authUser"){if(!n.length)return new Mr(Os(ly),t,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||Os(ly);const o=vf(i,t.config.apiKey,t.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Pr._fromJSON(t,u);c!==r&&(a=h),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Mr(r,t,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Mr(r,t,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cy(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(bD(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(_D(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ED(t))return"Blackberry";if(xD(t))return"Webos";if(yD(t))return"Safari";if((t.includes("chrome/")||vD(t))&&!t.includes("edge/"))return"Chrome";if(wD(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=e.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function _D(e=si()){return/firefox\//i.test(e)}function yD(e=si()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function vD(e=si()){return/crios\//i.test(e)}function bD(e=si()){return/iemobile/i.test(e)}function wD(e=si()){return/android/i.test(e)}function ED(e=si()){return/blackberry/i.test(e)}function xD(e=si()){return/webos/i.test(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iw(e,t=[]){let n;switch(e){case"Browser":n=cy(si());break;case"Worker":n=`${cy(si())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${vo}/${i}`}async function kw(e,t){return _g(e,"GET","/v2/recaptchaConfig",rD(e,t))}function uy(e){return e!==void 0&&e.enterprise!==void 0}class Aw{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TD(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function CD(e){return new Promise((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=s=>{const r=gg("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",TD().appendChild(i)})}const SD="https://www.google.com/recaptcha/enterprise.js?render=",ID="recaptcha-enterprise";class kD{constructor(t){this.type=ID,this.auth=Rw(t)}async verify(t="verify",n=!1){async function i(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{kw(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Aw(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(r,o,a){const l=window.grecaptcha;uy(l)?l.enterprise.ready(()=>{try{l.enterprise.execute(r,{action:t}).then(c=>{o(c)}).catch(c=>{a(c)})}catch(c){a(c)}}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(a=>{if(!n&&uy(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}CD(SD+a).then(()=>{s(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class AD{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const i=r=>new Promise((o,a)=>{try{const l=t(r);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const i of this.queue)await i(t),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(t,n,i,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hy(this),this.idTokenSubscription=new hy(this),this.beforeStateQueue=new AD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Os(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Mr.create(this,t),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Dt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Zc(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=eD()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?an(t):null;return n&&Dt(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&Dt(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Os(t))})}async initializeRecaptchaConfig(){const t=await kw(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Aw(t);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new kD(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new yo("auth","Firebase",t())}onAuthStateChanged(t,n,i){return this.registerStateListener(this.authStateSubscription,t,n,i)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,i){return this.registerStateListener(this.idTokenSubscription,t,n,i)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const i=await this.getOrInitRedirectPersistenceManager(n);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Os(t)||this._popupRedirectResolver;Dt(n,this,"argument-error"),this.redirectPersistenceManager=await Mr.create(this,[Os(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Dt(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?t.addObserver(n,i,s):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Dt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Iw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&QR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Rw(e){return an(e)}class hy{constructor(t){this.auth=t,this.observer=null,this.addObserver=BA(n=>this.observer=n)}get next(){return Dt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function DD(e,t){const n=(t==null?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Os);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,t==null?void 0:t.popupRedirectResolver)}new ol(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new ol(2e3,1e4);/**
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
 */new ol(3e4,6e4);/**
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
 */new ol(5e3,15e3);var fy="@firebase/auth",dy="0.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OD{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(i=>{t((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Dt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PD(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function MD(e){ri(new zn("auth",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),r=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;Dt(o&&!o.includes(":"),"invalid-api-key",{appName:i.name}),Dt(!(a!=null&&a.includes(":")),"argument-error",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Iw(e)},c=new RD(i,s,r,l);return DD(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,i)=>{t.getProvider("auth-internal").initialize()})),ri(new zn("auth-internal",t=>{const n=Rw(t.getProvider("auth").getImmediate());return(i=>new OD(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),pn(fy,dy,PD(e)),pn(fy,dy,"esm2017")}/**
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
 */const ND=5*60;AA("authIdTokenMaxAge");MD("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LD=new Map,FD={activated:!1,tokenObservers:[]};function oi(e){return LD.get(e)||Object.assign({},FD)}const py={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UD{constructor(t,n,i,s,r){if(this.operation=t,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=s,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=s,s>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(t){this.stop();try{this.pending=new Ra,await BD(this.getNextRun(t)),this.pending.resolve(),await this.pending.promise,this.pending=new Ra,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(t){if(t)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function BD(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VD={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},tu=new yo("appCheck","AppCheck",VD);function $D(e){if(!oi(e).activated)throw tu.create("use-before-activation",{appName:e.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zD="firebase-app-check-database",HD=1,Sd="firebase-app-check-store";let Hl=null;function jD(){return Hl||(Hl=new Promise((e,t)=>{try{const n=indexedDB.open(zD,HD);n.onsuccess=i=>{e(i.target.result)},n.onerror=i=>{var s;t(tu.create("storage-open",{originalErrorMessage:(s=i.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(Sd,{keyPath:"compositeKey"})}}}catch(n){t(tu.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Hl)}function WD(e,t){return KD(qD(e),t)}async function KD(e,t){const i=(await jD()).transaction(Sd,"readwrite"),r=i.objectStore(Sd).put({compositeKey:e,value:t});return new Promise((o,a)=>{r.onsuccess=l=>{o()},i.onerror=l=>{var c;a(tu.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function qD(e){return`${e.options.appId}-${e.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id=new rl("@firebase/app-check");function gy(e,t){return uw()?WD(e,t).catch(n=>{Id.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GD={error:"UNKNOWN_ERROR"};function YD(e){return uh.encodeString(JSON.stringify(e),!1)}async function kd(e,t=!1){const n=e.app;$D(n);const i=oi(n);let s=i.token,r;if(s&&!jo(s)&&(i.token=void 0,s=void 0),!s){const l=await i.cachedTokenPromise;l&&(jo(l)?s=l:await gy(n,void 0))}if(!t&&s&&jo(s))return{token:s.token};let o=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),s=await oi(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?Id.warn(l.message):Id.error(l),r=l}let a;return s?r?jo(s)?a={token:s.token,internalError:r}:a=_y(r):(a={token:s.token},i.token=s,await gy(n,s)):a=_y(r),o&&JD(n,a),a}function XD(e,t,n,i){const{app:s}=e,r=oi(s),o={next:n,error:i,type:t};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&jo(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),my(e)}).catch(()=>{})}r.cachedTokenPromise.then(()=>my(e))}function Dw(e,t){const n=oi(e),i=n.tokenObservers.filter(s=>s.next!==t);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function my(e){const{app:t}=e,n=oi(t);let i=n.tokenRefresher;i||(i=QD(e),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function QD(e){const{app:t}=e;return new UD(async()=>{const n=oi(t);let i;if(n.token?i=await kd(e,!0):i=await kd(e),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=oi(t);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,s),Math.max(0,i-Date.now())}else return 0},py.RETRIAL_MIN_WAIT,py.RETRIAL_MAX_WAIT)}function JD(e,t){const n=oi(e).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&t.error!=null?i.error(t.error):i.next(t)}catch{}}function jo(e){return e.expireTimeMillis-Date.now()>0}function _y(e){return{token:YD(GD),error:e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(t,n){this.app=t,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:t}=oi(this.app);for(const n of t)Dw(this.app,n.next);return Promise.resolve()}}function tO(e,t){return new ZD(e,t)}function eO(e){return{getToken:t=>kd(e,t),addTokenListener:t=>XD(e,"INTERNAL",t),removeTokenListener:t=>Dw(e.app,t)}}const nO="@firebase/app-check",iO="0.6.5",sO="app-check",yy="app-check-internal";function rO(){ri(new zn(sO,e=>{const t=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat");return tO(t,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider(yy).initialize()})),ri(new zn(yy,e=>{const t=e.getProvider("app-check").getImmediate();return eO(t)},"PUBLIC").setInstantiationMode("EXPLICIT")),pn(nO,iO)}rO();var oO="firebase",aO="9.20.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pn(oO,aO,"app");const Ow=Symbol("firebaseApp");function yg(e){return sl()&&sn(Ow,null)||gw(e)}const Jn=()=>{};function vg(e,t){return t.split(".").reduce((n,i)=>n&&n[i],e)}function lO(e,t,n){const i=(""+t).split("."),s=i.pop(),r=i.reduce((o,a)=>o&&o[a],e);if(r!=null)return Array.isArray(r)?r.splice(Number(s),1,n):r[s]=n}function rr(e){return!!e&&typeof e=="object"}const cO=Object.prototype;function uO(e){return rr(e)&&Object.getPrototypeOf(e)===cO}function bg(e){return rr(e)&&e.type==="document"}function Pw(e){return rr(e)&&e.type==="collection"}function hO(e){return bg(e)||Pw(e)}function fO(e){return rr(e)&&e.type==="query"}function dO(e){return rr(e)&&"ref"in e}function pO(e){return rr(e)&&typeof e.bucket=="string"}function gO(e,t){let n;return()=>{if(!n)return n=!0,e(t())}}function mO(){return!!(sl()&&sn(X1,null))}const vy="@firebase/database",by="0.14.4";/**
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
 */let Mw="";function _O(e){Mw=e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yO{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,n){n==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),Ie(n))}get(t){const n=this.domStorage_.getItem(this.prefixedName_(t));return n==null?null:Da(n)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,n){n==null?delete this.cache_[t]:this.cache_[t]=n}get(t){return Mi(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new yO(t)}}catch{}return new vO},Ps=Nw("localStorage"),Ad=Nw("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=new rl("@firebase/database"),bO=function(){let e=1;return function(){return e++}}(),Lw=function(e){const t=HA(e),n=new UA;n.update(t);const i=n.digest();return uh.encodeByteArray(i)},al=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?t+=al.apply(null,i):typeof i=="object"?t+=Ie(i):t+=i,t+=" "}return t};let zs=null,wy=!0;const wO=function(e,t){F(!t||e===!0||e===!1,"Can't turn on custom loggers persistently."),e===!0?(Nr.logLevel=It.VERBOSE,zs=Nr.log.bind(Nr),t&&Ad.set("logging_enabled",!0)):typeof e=="function"?zs=e:(zs=null,Ad.remove("logging_enabled"))},Ne=function(...e){if(wy===!0&&(wy=!1,zs===null&&Ad.get("logging_enabled")===!0&&wO(!0)),zs){const t=al.apply(null,e);zs(t)}},ll=function(e){return function(...t){Ne(e,...t)}},Rd=function(...e){const t="FIREBASE INTERNAL ERROR: "+al(...e);Nr.error(t)},Gs=function(...e){const t=`FIREBASE FATAL ERROR: ${al(...e)}`;throw Nr.error(t),new Error(t)},gn=function(...e){const t="FIREBASE WARNING: "+al(...e);Nr.warn(t)},EO=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&gn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Fw=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},xO=function(e){if(document.readyState==="complete")e();else{let t=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Gr="[MIN_NAME]",Ys="[MAX_NAME]",bo=function(e,t){if(e===t)return 0;if(e===Gr||t===Ys)return-1;if(t===Gr||e===Ys)return 1;{const n=Ey(e),i=Ey(t);return n!==null?i!==null?n-i===0?e.length-t.length:n-i:-1:i!==null?1:e<t?-1:1}},TO=function(e,t){return e===t?0:e<t?-1:1},Do=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Ie(t))},wg=function(e){if(typeof e!="object"||e===null)return Ie(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)i!==0&&(n+=","),n+=Ie(t[i]),n+=":",n+=wg(e[t[i]]);return n+="}",n},Uw=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let s=0;s<n;s+=t)s+t>n?i.push(e.substring(s,n)):i.push(e.substring(s,s+t));return i};function Cn(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const Bw=function(e){F(!Fw(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let s,r,o,a,l;e===0?(r=0,o=0,s=1/e===-1/0?1:0):(s=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(e)/Math.LN2),i),r=a+i,o=Math.round(e*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(e/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=t;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},CO=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},SO=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},IO=new RegExp("^-?(0*)\\d{1,10}$"),kO=-2147483648,AO=2147483647,Ey=function(e){if(IO.test(e)){const t=Number(e);if(t>=kO&&t<=AO)return t}return null},cl=function(e){try{e()}catch(t){setTimeout(()=>{const n=t.stack||"";throw gn("Exception was thrown by user callback.",n),t},Math.floor(0))}},RO=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},oa=function(e,t){const n=setTimeout(e,t);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class DO{constructor(t,n){this.appName_=t,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(n,i):n(null)},0)})}addTokenChangeListener(t){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(t))}notifyForInvalidToken(){gn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OO{constructor(t,n,i){this.appName_=t,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ne("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(n,i):n(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(n=>n.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(n=>n.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',gn(t)}}class Dd{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}Dd.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg="5",Vw="v",$w="s",zw="r",Hw="f",jw=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ww="ls",Kw="p",Od="ac",qw="websocket",Gw="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PO{constructor(t,n,i,s,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ps.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&Ps.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${n}`}}function MO(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function Yw(e,t,n){F(typeof t=="string","typeof type must == string"),F(typeof n=="object","typeof params must == object");let i;if(t===qw)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===Gw)i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);MO(e)&&(n.ns=e.namespace);const s=[];return Cn(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO{constructor(){this.counters_={}}incrementCounter(t,n=1){Mi(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=n}get(){return bA(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf={},wf={};function xg(e){const t=e.toString();return bf[t]||(bf[t]=new NO),bf[t]}function LO(e,t){const n=e.toString();return wf[n]||(wf[n]=t()),wf[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,n){this.closeAfterResponse=t,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,n){for(this.pendingResponses[t]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&cl(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy="start",UO="close",BO="pLPCommand",VO="pRTLPCB",Xw="id",Qw="pw",Jw="ser",$O="cb",zO="seg",HO="ts",jO="d",WO="dframe",Zw=1870,tE=30,KO=Zw-tE,qO=25e3,GO=3e4;class Cr{constructor(t,n,i,s,r,o,a){this.connId=t,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ll(t),this.stats_=xg(n),this.urlFn=l=>(this.appCheckToken&&(l[Od]=this.appCheckToken),Yw(n,Gw,l))}open(t,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new FO(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(GO)),xO(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Tg((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===xy)this.id=a,this.password=l;else if(o===UO)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[xy]="t",i[Jw]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[$O]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Vw]=Eg,this.transportSessionId&&(i[$w]=this.transportSessionId),this.lastSessionId&&(i[Ww]=this.lastSessionId),this.applicationId&&(i[Kw]=this.applicationId),this.appCheckToken&&(i[Od]=this.appCheckToken),typeof location<"u"&&location.hostname&&jw.test(location.hostname)&&(i[zw]=Hw);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Cr.forceAllow_=!0}static forceDisallow(){Cr.forceDisallow_=!0}static isAvailable(){return Cr.forceAllow_?!0:!Cr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!CO()&&!SO()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const n=Ie(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=ow(n),s=Uw(i,KO);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(t,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[WO]="t",i[Xw]=t,i[Qw]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const n=Ie(t).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Tg{constructor(t,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=bO(),window[BO+this.uniqueCallbackIdentifier]=t,window[VO+this.uniqueCallbackIdentifier]=n,this.myIFrame=Tg.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ne("frame writing exception"),a.stack&&Ne(a.stack),Ne(a)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||Ne("No IE domain setting required")}catch{const i=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,n){for(this.myID=t,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[Xw]=this.myID,t[Qw]=this.myPW,t[Jw]=this.currentSerial;let n=this.urlFn(t),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+tE+i.length<=Zw;){const o=this.pendingSegs.shift();i=i+"&"+zO+s+"="+o.seg+"&"+HO+s+"="+o.ts+"&"+jO+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(t,n,i){this.pendingSegs.push({seg:t,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(t,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(qO)),r=()=>{clearTimeout(s),i()};this.addTag(t,r)}addTag(t,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=t,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Ne("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YO=16384,XO=45e3;let eu=null;typeof MozWebSocket<"u"?eu=MozWebSocket:typeof WebSocket<"u"&&(eu=WebSocket);class An{constructor(t,n,i,s,r,o,a){this.connId=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ll(this.connId),this.stats_=xg(n),this.connURL=An.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(t,n,i,s,r){const o={};return o[Vw]=Eg,typeof location<"u"&&location.hostname&&jw.test(location.hostname)&&(o[zw]=Hw),n&&(o[$w]=n),i&&(o[Ww]=i),s&&(o[Od]=s),r&&(o[Kw]=r),Yw(t,qw,o)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ps.set("previous_websocket_failure",!0);try{let i;cw(),this.mySock=new eu(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){An.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(t=!0)}return!t&&eu!==null&&!An.forceDisallow_}static previouslyFailed(){return Ps.isInMemoryStorage||Ps.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ps.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Da(n);this.onMessage(i)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(F(this.frames===null,"We already have a frame buffer"),t.length<=6){const n=Number(t);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const n=t.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(t){this.resetKeepAlive();const n=Ie(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Uw(n,YO);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(XO))}sendString_(t){try{this.mySock.send(t)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}An.responsesRequiredToBeHealthy=2;An.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(t){this.initTransports_(t)}static get ALL_TRANSPORTS(){return[Cr,An]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(t){const n=An&&An.isAvailable();let i=n&&!An.previouslyFailed();if(t.webSocketOnly&&(n||gn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[An];else{const s=this.transports_=[];for(const r of Ma.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Ma.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ma.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QO=6e4,JO=5e3,ZO=10*1024,tP=100*1024,Ef="t",Ty="d",eP="s",Cy="r",nP="e",Sy="o",Iy="a",ky="n",Ay="p",iP="h";class sP{constructor(t,n,i,s,r,o,a,l,c,u){this.id=t,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ll("c:"+this.id+":"),this.transportManager_=new Ma(n),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=t.healthyTimeout||0;s>0&&(this.healthyTimeout_=oa(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>tP?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ZO?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return n=>{t===this.conn_?this.onConnectionLost_(n):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return n=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(n):t===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(t){const n={t:"d",d:t};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(Ef in t){const n=t[Ef];n===Iy?this.upgradeIfSecondaryHealthy_():n===Cy?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Sy&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const n=Do("t",t),i=Do("d",t);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ay,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Iy,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ky,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const n=Do("t",t),i=Do("d",t);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const n=Do(Ef,t);if(Ty in t){const i=t[Ty];if(n===iP){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===ky){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===eP?this.onConnectionShutdown_(i):n===Cy?this.onReset_(i):n===nP?Rd("Server Error: "+i):n===Sy?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Rd("Unknown control packet command: "+n)}}onHandshake_(t){const n=t.ts,i=t.v,s=t.h;this.sessionId=t.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Eg!==i&&gn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),oa(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(QO))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,n){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):oa(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(JO))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ay,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ps.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{put(t,n,i,s){}merge(t,n,i,s){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,n,i){}onDisconnectMerge(t,n,i){}onDisconnectCancel(t,n){}reportStats(t){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(t){this.allowedEvents_=t,this.listeners_={},F(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...n){if(Array.isArray(this.listeners_[t])){const i=[...this.listeners_[t]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(t,n,i){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:n,context:i});const s=this.getInitialEvent(t);s&&n.apply(i,s)}off(t,n,i){this.validateEventType_(t);const s=this.listeners_[t]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(t){F(this.allowedEvents_.find(n=>n===t),"Unknown event: "+t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu extends nE{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!fg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new nu}getInitialEvent(t){return F(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry=32,Dy=768;class qt{constructor(t,n){if(n===void 0){this.pieces_=t.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}toString(){let t="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(t+="/"+this.pieces_[n]);return t||"/"}}function Ft(){return new qt("")}function wt(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function os(e){return e.pieces_.length-e.pieceNum_}function zt(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new qt(e.pieces_,t)}function iE(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function rP(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==""&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function sE(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function rE(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new qt(t,0)}function xe(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof qt)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const i=t.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new qt(n,0)}function yt(e){return e.pieceNum_>=e.pieces_.length}function bn(e,t){const n=wt(e),i=wt(t);if(n===null)return t;if(n===i)return bn(zt(e),zt(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function oE(e,t){if(os(e)!==os(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Mn(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(os(e)>os(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class oP{constructor(t,n){this.errorPrefix_=n,this.parts_=sE(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=hh(this.parts_[i]);aE(this)}}function aP(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=hh(t),aE(e)}function lP(e){const t=e.parts_.pop();e.byteLength_-=hh(t),e.parts_.length>0&&(e.byteLength_-=1)}function aE(e){if(e.byteLength_>Dy)throw new Error(e.errorPrefix_+"has a key path longer than "+Dy+" bytes ("+e.byteLength_+").");if(e.parts_.length>Ry)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ry+") or object contains a cycle "+Ss(e))}function Ss(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg extends nE{constructor(){super(["visible"]);let t,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[t];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Cg}getInitialEvent(t){return F(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo=1e3,cP=60*5*1e3,Oy=30*1e3,uP=1.3,hP=3e4,fP="server_kill",Py=3;class wi extends eE{constructor(t,n,i,s,r,o,a,l){if(super(),this.repoInfo_=t,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=wi.nextPersistentConnectionId_++,this.log_=ll("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Oo,this.maxReconnectDelay_=cP,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!cw())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Cg.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&nu.getInstance().on("online",this.onOnline_,this)}sendRequest(t,n,i){const s=++this.requestNumber_,r={r:s,a:t,b:n};this.log_(Ie(r)),F(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(t){this.initConnection_();const n=new Ra,s={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(t,n,i,s){this.initConnection_();const r=t._queryIdentifier,o=t._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),F(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),F(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:t,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(t){const n=this.outstandingGets_[t];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(t){const n=t.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";t.tag&&(r.q=n._queryObject,r.t=t.tag),r.h=t.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;wi.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(s))===t&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),t.onComplete&&t.onComplete(c,l))})}static warnOnListenWarnings_(t,n){if(t&&typeof t=="object"&&Mi(t,"w")){const i=qr(t,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();gn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||FA(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Oy)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,n=LA(t)?"auth":"gauth",i={cred:t};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===t&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const n=t.s,i=t.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(t,n){const i=t._path.toString(),s=t._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),F(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,t._queryObject,n)}sendUnlisten_(t,n,i,s){this.log_("Unlisten on "+t+" for "+n);const r={p:t},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(t,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,n,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:n,onComplete:i})}onDisconnectMerge(t,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,n,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:n,onComplete:i})}onDisconnectCancel(t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(t,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+t,r),this.sendRequest(t,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(t,n,i,s){this.putInternal("p",t,n,i,s)}merge(t,n,i,s){this.putInternal("m",t,n,i,s)}putInternal(t,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:t,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(t){const n=this.outstandingPuts_[t].action,i=this.outstandingPuts_[t].request,s=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(t){if(this.connected_){const n={c:t};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+Ie(t));const n=t.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,n){this.log_("handleServerMessage",t,n),t==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):t==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):t==="c"?this.onListenRevoked_(n.p,n.q):t==="ac"?this.onAuthRevoked_(n.s,n.d):t==="apc"?this.onAppCheckRevoked_(n.s,n.d):t==="sd"?this.onSecurityDebugPacket_(n):Rd("Unrecognized action received from server: "+Ie(t)+`
Are you using the latest client?`)}onReady_(t,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){F(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Oo,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=Oo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>hP&&(this.reconnectDelay_=Oo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*uP)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+wi.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(h){F(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ne("getToken() completed but was canceled"):(Ne("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new sP(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,i,d=>{gn(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(fP)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&gn(h),l())}}}interrupt(t){Ne("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){Ne("Resuming connection for reason: "+t),delete this.interruptReasons_[t],X_(this.interruptReasons_)&&(this.reconnectDelay_=Oo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const n=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const n=this.outstandingPuts_[t];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,n){let i;n?i=n.map(r=>wg(r)).join("$"):i="default";const s=this.removeListen_(t,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(t,n){const i=new qt(t).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(t,n){Ne("Auth token revoked: "+t+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Py&&(this.reconnectDelay_=Oy,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,n){Ne("App check token revoked: "+t+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Py&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const n of t.values())this.sendListen_(n);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let n="js";t["sdk."+n+"."+Mw.replace(/\./g,"-")]=1,fg()?t["framework.cordova"]=1:lw()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=nu.getInstance().currentlyOnline();return X_(this.interruptReasons_)&&t}}wi.nextPersistentConnectionId_=0;wi.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(t,n){this.name=t,this.node=n}static Wrap(t,n){return new xt(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,n){const i=new xt(Gr,t),s=new xt(Gr,n);return this.compare(i,s)!==0}minPost(){return xt.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jl;class lE extends fh{static get __EMPTY_NODE(){return jl}static set __EMPTY_NODE(t){jl=t}compare(t,n){return bo(t.name,n.name)}isDefinedOn(t){throw _o("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,n){return!1}minPost(){return xt.MIN}maxPost(){return new xt(Ys,jl)}makePost(t,n){return F(typeof t=="string","KeyIndex indexValue must always be a string."),new xt(t,jl)}toString(){return".key"}}const Lr=new lE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(t,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!t.isEmpty();)if(t=t,o=n?i(t.key,n):1,s&&(o*=-1),o<0)this.isReverse_?t=t.left:t=t.right;else if(o===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(t.key,t.value):n={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class Ee{constructor(t,n,i,s,r){this.key=t,this.value=n,this.color=i??Ee.RED,this.left=s??en.EMPTY_NODE,this.right=r??en.EMPTY_NODE}copy(t,n,i,s,r){return new Ee(t??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,i){let s=this;const r=i(t,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(t,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(t,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return en.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,n){let i,s;if(i=this,n(t,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(t,i.key)===0){if(i.right.isEmpty())return en.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}Ee.RED=!0;Ee.BLACK=!1;class dP{copy(t,n,i,s,r){return this}insert(t,n,i){return new Ee(t,n,null)}remove(t,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class en{constructor(t,n=en.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new en(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,Ee.BLACK,null,null))}remove(t){return new en(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,Ee.BLACK,null,null))}get(t){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(t,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(t){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(t,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new Wl(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,n){return new Wl(this.root_,t,this.comparator_,!1,n)}getReverseIteratorFrom(t,n){return new Wl(this.root_,t,this.comparator_,!0,n)}getReverseIterator(t){return new Wl(this.root_,null,this.comparator_,!0,t)}}en.EMPTY_NODE=new dP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pP(e,t){return bo(e.name,t.name)}function Sg(e,t){return bo(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pd;function gP(e){Pd=e}const cE=function(e){return typeof e=="number"?"number:"+Bw(e):"string:"+e},uE=function(e){if(e.isLeafNode()){const t=e.val();F(typeof t=="string"||typeof t=="number"||typeof t=="object"&&Mi(t,".sv"),"Priority must be a string or number.")}else F(e===Pd||e.isEmpty(),"priority of unexpected type.");F(e===Pd||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let My;class be{constructor(t,n=be.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=n,this.lazyHash_=null,F(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),uE(this.priorityNode_)}static set __childrenNodeConstructor(t){My=t}static get __childrenNodeConstructor(){return My}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new be(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:be.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return yt(t)?this:wt(t)===".priority"?this.priorityNode_:be.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,n){return null}updateImmediateChild(t,n){return t===".priority"?this.updatePriority(n):n.isEmpty()&&t!==".priority"?this:be.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}updateChild(t,n){const i=wt(t);return i===null?n:n.isEmpty()&&i!==".priority"?this:(F(i!==".priority"||os(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,be.__childrenNodeConstructor.EMPTY_NODE.updateChild(zt(t),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,n){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+cE(this.priorityNode_.val())+":");const n=typeof this.value_;t+=n+":",n==="number"?t+=Bw(this.value_):t+=this.value_,this.lazyHash_=Lw(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===be.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof be.__childrenNodeConstructor?-1:(F(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const n=typeof t.value_,i=typeof this.value_,s=be.VALUE_TYPE_ORDER.indexOf(n),r=be.VALUE_TYPE_ORDER.indexOf(i);return F(s>=0,"Unknown leaf type: "+n),F(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}be.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hE,fE;function mP(e){hE=e}function _P(e){fE=e}class yP extends fh{compare(t,n){const i=t.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?bo(t.name,n.name):r}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,n){return!t.getPriority().equals(n.getPriority())}minPost(){return xt.MIN}maxPost(){return new xt(Ys,new be("[PRIORITY-POST]",fE))}makePost(t,n){const i=hE(t);return new xt(n,new be("[PRIORITY-POST]",i))}toString(){return".priority"}}const Ve=new yP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vP=Math.log(2);class bP{constructor(t){const n=r=>parseInt(Math.log(r)/vP,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(t+1),this.current_=this.count-1;const s=i(this.count);this.bits_=t+1&s}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const iu=function(e,t,n,i){e.sort(t);const s=function(l,c){const u=c-l;let h,f;if(u===0)return null;if(u===1)return h=e[l],f=n?n(h):h,new Ee(f,h.node,Ee.BLACK,null,null);{const d=parseInt(u/2,10)+l,p=s(l,d),g=s(d+1,c);return h=e[d],f=n?n(h):h,new Ee(f,h.node,Ee.BLACK,p,g)}},r=function(l){let c=null,u=null,h=e.length;const f=function(p,g){const m=h-p,_=h;h-=p;const v=s(m+1,_),w=e[m],E=n?n(w):w;d(new Ee(E,w.node,g,null,v))},d=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const g=l.nextBitIsOne(),m=Math.pow(2,l.count-(p+1));g?f(m,Ee.BLACK):(f(m,Ee.BLACK),f(m,Ee.RED))}return u},o=new bP(e.length),a=r(o);return new en(i||t,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xf;const _r={};class yi{constructor(t,n){this.indexes_=t,this.indexSet_=n}static get Default(){return F(_r&&Ve,"ChildrenNode.ts has not been loaded"),xf=xf||new yi({".priority":_r},{".priority":Ve}),xf}get(t){const n=qr(this.indexes_,t);if(!n)throw new Error("No index defined for "+t);return n instanceof en?n:null}hasIndex(t){return Mi(this.indexSet_,t.toString())}addIndex(t,n){F(t!==Lr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(xt.Wrap);let o=r.getNext();for(;o;)s=s||t.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=iu(i,t.getCompare()):a=_r;const l=t.toString(),c=Object.assign({},this.indexSet_);c[l]=t;const u=Object.assign({},this.indexes_);return u[l]=a,new yi(u,c)}addToIndexes(t,n){const i=Yc(this.indexes_,(s,r)=>{const o=qr(this.indexSet_,r);if(F(o,"Missing index implementation for "+r),s===_r)if(o.isDefinedOn(t.node)){const a=[],l=n.getIterator(xt.Wrap);let c=l.getNext();for(;c;)c.name!==t.name&&a.push(c),c=l.getNext();return a.push(t),iu(a,o.getCompare())}else return _r;else{const a=n.get(t.name);let l=s;return a&&(l=l.remove(new xt(t.name,a))),l.insert(t,t.node)}});return new yi(i,this.indexSet_)}removeFromIndexes(t,n){const i=Yc(this.indexes_,s=>{if(s===_r)return s;{const r=n.get(t.name);return r?s.remove(new xt(t.name,r)):s}});return new yi(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Po;class Ot{constructor(t,n,i){this.children_=t,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&uE(this.priorityNode_),this.children_.isEmpty()&&F(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Po||(Po=new Ot(new en(Sg),null,yi.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Po}updatePriority(t){return this.children_.isEmpty()?this:new Ot(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const n=this.children_.get(t);return n===null?Po:n}}getChild(t){const n=wt(t);return n===null?this:this.getImmediateChild(n).getChild(zt(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,n){if(F(n,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(n);{const i=new xt(t,n);let s,r;n.isEmpty()?(s=this.children_.remove(t),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(t,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Po:this.priorityNode_;return new Ot(s,o,r)}}updateChild(t,n){const i=wt(t);if(i===null)return n;{F(wt(t)!==".priority"||os(t)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(zt(t),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(Ve,(o,a)=>{n[o]=a.val(t),i++,r&&Ot.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!t&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+cE(this.getPriority().val())+":"),this.forEachChild(Ve,(n,i)=>{const s=i.hash();s!==""&&(t+=":"+n+":"+s)}),this.lazyHash_=t===""?"":Lw(t)}return this.lazyHash_}getPredecessorChildName(t,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new xt(t,n));return r?r.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const n=this.resolveIndex_(t);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(t){const n=this.getFirstChildName(t);return n?new xt(n,this.children_.get(n)):null}getLastChildName(t){const n=this.resolveIndex_(t);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(t){const n=this.getLastChildName(t);return n?new xt(n,this.children_.get(n)):null}forEachChild(t,n){const i=this.resolveIndex_(t);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(t,s=>s);{const s=this.children_.getIteratorFrom(t.name,xt.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,t)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(t,s=>s);{const s=this.children_.getReverseIteratorFrom(t.name,xt.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,t)>0;)s.getNext(),r=s.peek();return s}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===ul?-1:0}withIndex(t){if(t===Lr||this.indexMap_.hasIndex(t))return this;{const n=this.indexMap_.addIndex(t,this.children_);return new Ot(this.children_,this.priorityNode_,n)}}isIndexed(t){return t===Lr||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const n=t;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(Ve),s=n.getIterator(Ve);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(t){return t===Lr?null:this.indexMap_.get(t.toString())}}Ot.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class wP extends Ot{constructor(){super(new en(Sg),Ot.EMPTY_NODE,yi.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return Ot.EMPTY_NODE}isEmpty(){return!1}}const ul=new wP;Object.defineProperties(xt,{MIN:{value:new xt(Gr,Ot.EMPTY_NODE)},MAX:{value:new xt(Ys,ul)}});lE.__EMPTY_NODE=Ot.EMPTY_NODE;be.__childrenNodeConstructor=Ot;gP(ul);_P(ul);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EP=!0;function Le(e,t=null){if(e===null)return Ot.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(t=e[".priority"]),F(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){const n=e;return new be(n,Le(t))}if(!(e instanceof Array)&&EP){const n=[];let i=!1;if(Cn(e,(o,a)=>{if(o.substring(0,1)!=="."){const l=Le(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new xt(o,l)))}}),n.length===0)return Ot.EMPTY_NODE;const r=iu(n,pP,o=>o.name,Sg);if(i){const o=iu(n,Ve.getCompare());return new Ot(r,Le(t),new yi({".priority":o},{".priority":Ve}))}else return new Ot(r,Le(t),yi.Default)}else{let n=Ot.EMPTY_NODE;return Cn(e,(i,s)=>{if(Mi(e,i)&&i.substring(0,1)!=="."){const r=Le(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(Le(t))}}mP(Le);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP extends fh{constructor(t){super(),this.indexPath_=t,F(!yt(t)&&wt(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,n){const i=this.extractChild(t.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?bo(t.name,n.name):r}makePost(t,n){const i=Le(t),s=Ot.EMPTY_NODE.updateChild(this.indexPath_,i);return new xt(n,s)}maxPost(){const t=Ot.EMPTY_NODE.updateChild(this.indexPath_,ul);return new xt(Ys,t)}toString(){return sE(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP extends fh{compare(t,n){const i=t.node.compareTo(n.node);return i===0?bo(t.name,n.name):i}isDefinedOn(t){return!0}indexedValueChanged(t,n){return!t.equals(n)}minPost(){return xt.MIN}maxPost(){return xt.MAX}makePost(t,n){const i=Le(t);return new xt(n,i)}toString(){return".value"}}const CP=new TP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SP(e){return{type:"value",snapshotNode:e}}function IP(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function kP(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Ny(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function AP(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ve}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return F(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return F(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Gr}hasEnd(){return this.endSet_}getIndexEndValue(){return F(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return F(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ys}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return F(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ve}copy(){const t=new Ig;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function Ly(e){const t={};if(e.isDefault())return t;let n;if(e.index_===Ve?n="$priority":e.index_===CP?n="$value":e.index_===Lr?n="$key":(F(e.index_ instanceof xP,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=Ie(n),e.startSet_){const i=e.startAfterSet_?"startAfter":"startAt";t[i]=Ie(e.indexStartValue_),e.startNameSet_&&(t[i]+=","+Ie(e.indexStartName_))}if(e.endSet_){const i=e.endBeforeSet_?"endBefore":"endAt";t[i]=Ie(e.indexEndValue_),e.endNameSet_&&(t[i]+=","+Ie(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Fy(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;n===""&&(e.isViewFromLeft()?n="l":n="r"),t.vf=n}return e.index_!==Ve&&(t.i=e.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su extends eE{constructor(t,n,i,s){super(),this.repoInfo_=t,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=ll("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,n){return n!==void 0?"tag$"+n:(F(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,n,i,s){const r=t._path.toString();this.log_("Listen called for "+r+" "+t._queryIdentifier);const o=su.getListenId_(t,i),a={};this.listens_[o]=a;const l=Ly(t._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,i),qr(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",s(f,null)}})}unlisten(t,n){const i=su.getListenId_(t,n);delete this.listens_[i]}get(t){const n=Ly(t._queryParams),i=t._path.toString(),s=new Ra;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(t){}restRequest_(t,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+dg(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Da(a.responseText)}catch{gn("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&gn("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(){this.rootNode_=Ot.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,n){this.rootNode_=this.rootNode_.updateChild(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(){return{value:null,children:new Map}}function dE(e,t,n){if(yt(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{const i=wt(t);e.children.has(i)||e.children.set(i,ru());const s=e.children.get(i);t=zt(t),dE(s,t,n)}}function Md(e,t,n){e.value!==null?n(t,e.value):DP(e,(i,s)=>{const r=new qt(t.toString()+"/"+i);Md(s,r,n)})}function DP(e,t){e.children.forEach((n,i)=>{t(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OP{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),n=Object.assign({},t);return this.last_&&Cn(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy=10*1e3,PP=30*1e3,MP=5*60*1e3;class NP{constructor(t,n){this.server_=n,this.statsToReport_={},this.statsListener_=new OP(t);const i=Uy+(PP-Uy)*Math.random();oa(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const t=this.statsListener_.get(),n={};let i=!1;Cn(t,(s,r)=>{r>0&&Mi(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),oa(this.reportStats_.bind(this),Math.floor(Math.random()*2*MP))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zn;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Zn||(Zn={}));function pE(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function gE(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function mE(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(t,n,i){this.path=t,this.affectedTree=n,this.revert=i,this.type=Zn.ACK_USER_WRITE,this.source=pE()}operationForChild(t){if(yt(this.path)){if(this.affectedTree.value!=null)return F(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new qt(t));return new ou(Ft(),n,this.revert)}}else return F(wt(this.path)===t,"operationForChild called for unrelated child."),new ou(zt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(t,n,i){this.source=t,this.path=n,this.snap=i,this.type=Zn.OVERWRITE}operationForChild(t){return yt(this.path)?new Xs(this.source,Ft(),this.snap.getImmediateChild(t)):new Xs(this.source,zt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(t,n,i){this.source=t,this.path=n,this.children=i,this.type=Zn.MERGE}operationForChild(t){if(yt(this.path)){const n=this.children.subtree(new qt(t));return n.isEmpty()?null:n.value?new Xs(this.source,Ft(),n.value):new Na(this.source,Ft(),n)}else return F(wt(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new Na(this.source,zt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(t,n,i){this.node_=t,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(yt(t))return this.isFullyInitialized()&&!this.filtered_;const n=wt(t);return this.isCompleteForChild(n)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}function LP(e,t,n,i){const s=[],r=[];return t.forEach(o=>{o.type==="child_changed"&&e.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(AP(o.childName,o.snapshotNode))}),Mo(e,s,"child_removed",t,i,n),Mo(e,s,"child_added",t,i,n),Mo(e,s,"child_moved",r,i,n),Mo(e,s,"child_changed",t,i,n),Mo(e,s,"value",t,i,n),s}function Mo(e,t,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,l)=>UP(e,a,l)),o.forEach(a=>{const l=FP(e,a,r);s.forEach(c=>{c.respondsTo(a.type)&&t.push(c.createEvent(l,e.query_))})})}function FP(e,t,n){return t.type==="value"||t.type==="child_removed"||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function UP(e,t,n){if(t.childName==null||n.childName==null)throw _o("Should only compare child_ events.");const i=new xt(t.childName,t.snapshotNode),s=new xt(n.childName,n.snapshotNode);return e.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _E(e,t){return{eventCache:e,serverCache:t}}function aa(e,t,n,i){return _E(new kg(t,n,i),e.serverCache)}function yE(e,t,n,i){return _E(e.eventCache,new kg(t,n,i))}function Nd(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Qs(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tf;const BP=()=>(Tf||(Tf=new en(TO)),Tf);class Vt{constructor(t,n=BP()){this.value=t,this.children=n}static fromObject(t){let n=new Vt(null);return Cn(t,(i,s)=>{n=n.set(new qt(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,n){if(this.value!=null&&n(this.value))return{path:Ft(),value:this.value};if(yt(t))return null;{const i=wt(t),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(zt(t),n);return r!=null?{path:xe(new qt(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(yt(t))return this;{const n=wt(t),i=this.children.get(n);return i!==null?i.subtree(zt(t)):new Vt(null)}}set(t,n){if(yt(t))return new Vt(n,this.children);{const i=wt(t),r=(this.children.get(i)||new Vt(null)).set(zt(t),n),o=this.children.insert(i,r);return new Vt(this.value,o)}}remove(t){if(yt(t))return this.children.isEmpty()?new Vt(null):new Vt(null,this.children);{const n=wt(t),i=this.children.get(n);if(i){const s=i.remove(zt(t));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new Vt(null):new Vt(this.value,r)}else return this}}get(t){if(yt(t))return this.value;{const n=wt(t),i=this.children.get(n);return i?i.get(zt(t)):null}}setTree(t,n){if(yt(t))return n;{const i=wt(t),r=(this.children.get(i)||new Vt(null)).setTree(zt(t),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new Vt(this.value,o)}}fold(t){return this.fold_(Ft(),t)}fold_(t,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(xe(t,s),n)}),n(t,this.value,i)}findOnPath(t,n){return this.findOnPath_(t,Ft(),n)}findOnPath_(t,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(yt(t))return null;{const r=wt(t),o=this.children.get(r);return o?o.findOnPath_(zt(t),xe(n,r),i):null}}foreachOnPath(t,n){return this.foreachOnPath_(t,Ft(),n)}foreachOnPath_(t,n,i){if(yt(t))return this;{this.value&&i(n,this.value);const s=wt(t),r=this.children.get(s);return r?r.foreachOnPath_(zt(t),xe(n,s),i):new Vt(null)}}foreach(t){this.foreach_(Ft(),t)}foreach_(t,n){this.children.inorderTraversal((i,s)=>{s.foreach_(xe(t,i),n)}),this.value&&n(t,this.value)}foreachChild(t){this.children.inorderTraversal((n,i)=>{i.value&&t(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(t){this.writeTree_=t}static empty(){return new $n(new Vt(null))}}function la(e,t,n){if(yt(t))return new $n(new Vt(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(i!=null){const s=i.path;let r=i.value;const o=bn(s,t);return r=r.updateChild(o,n),new $n(e.writeTree_.set(s,r))}else{const s=new Vt(n),r=e.writeTree_.setTree(t,s);return new $n(r)}}}function By(e,t,n){let i=e;return Cn(n,(s,r)=>{i=la(i,xe(t,s),r)}),i}function Vy(e,t){if(yt(t))return $n.empty();{const n=e.writeTree_.setTree(t,new Vt(null));return new $n(n)}}function Ld(e,t){return or(e,t)!=null}function or(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return n!=null?e.writeTree_.get(n.path).getChild(bn(n.path,t)):null}function $y(e){const t=[],n=e.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ve,(i,s)=>{t.push(new xt(i,s))}):e.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&t.push(new xt(i,s.value))}),t}function ts(e,t){if(yt(t))return e;{const n=or(e,t);return n!=null?new $n(new Vt(n)):new $n(e.writeTree_.subtree(t))}}function Fd(e){return e.writeTree_.isEmpty()}function Yr(e,t){return vE(Ft(),e.writeTree_,t)}function vE(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal((s,r)=>{s===".priority"?(F(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=vE(xe(e,s),r,n)}),!n.getChild(e).isEmpty()&&i!==null&&(n=n.updateChild(xe(e,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bE(e,t){return CE(t,e)}function VP(e,t,n,i,s){F(i>e.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:s}),s&&(e.visibleWrites=la(e.visibleWrites,t,n)),e.lastWriteId=i}function $P(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function zP(e,t){const n=e.allWrites.findIndex(a=>a.writeId===t);F(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let s=i.visible,r=!1,o=e.allWrites.length-1;for(;s&&o>=0;){const a=e.allWrites[o];a.visible&&(o>=n&&HP(a,i.path)?s=!1:Mn(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return jP(e),!0;if(i.snap)e.visibleWrites=Vy(e.visibleWrites,i.path);else{const a=i.children;Cn(a,l=>{e.visibleWrites=Vy(e.visibleWrites,xe(i.path,l))})}return!0}else return!1}function HP(e,t){if(e.snap)return Mn(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Mn(xe(e.path,n),t))return!0;return!1}function jP(e){e.visibleWrites=wE(e.allWrites,WP,Ft()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function WP(e){return e.visible}function wE(e,t,n){let i=$n.empty();for(let s=0;s<e.length;++s){const r=e[s];if(t(r)){const o=r.path;let a;if(r.snap)Mn(n,o)?(a=bn(n,o),i=la(i,a,r.snap)):Mn(o,n)&&(a=bn(o,n),i=la(i,Ft(),r.snap.getChild(a)));else if(r.children){if(Mn(n,o))a=bn(n,o),i=By(i,a,r.children);else if(Mn(o,n))if(a=bn(o,n),yt(a))i=By(i,Ft(),r.children);else{const l=qr(r.children,wt(a));if(l){const c=l.getChild(zt(a));i=la(i,Ft(),c)}}}else throw _o("WriteRecord should have .snap or .children")}}return i}function EE(e,t,n,i,s){if(!i&&!s){const r=or(e.visibleWrites,t);if(r!=null)return r;{const o=ts(e.visibleWrites,t);if(Fd(o))return n;if(n==null&&!Ld(o,Ft()))return null;{const a=n||Ot.EMPTY_NODE;return Yr(o,a)}}}else{const r=ts(e.visibleWrites,t);if(!s&&Fd(r))return n;if(!s&&n==null&&!Ld(r,Ft()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(Mn(c.path,t)||Mn(t,c.path))},a=wE(e.allWrites,o,t),l=n||Ot.EMPTY_NODE;return Yr(a,l)}}}function KP(e,t,n){let i=Ot.EMPTY_NODE;const s=or(e.visibleWrites,t);if(s)return s.isLeafNode()||s.forEachChild(Ve,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=ts(e.visibleWrites,t);return n.forEachChild(Ve,(o,a)=>{const l=Yr(ts(r,new qt(o)),a);i=i.updateImmediateChild(o,l)}),$y(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=ts(e.visibleWrites,t);return $y(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function qP(e,t,n,i,s){F(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=xe(t,n);if(Ld(e.visibleWrites,r))return null;{const o=ts(e.visibleWrites,r);return Fd(o)?s.getChild(n):Yr(o,s.getChild(n))}}function GP(e,t,n,i){const s=xe(t,n),r=or(e.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=ts(e.visibleWrites,s);return Yr(o,i.getNode().getImmediateChild(n))}else return null}function YP(e,t){return or(e.visibleWrites,t)}function XP(e,t,n,i,s,r,o){let a;const l=ts(e.visibleWrites,t),c=or(l,Ft());if(c!=null)a=c;else if(n!=null)a=Yr(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let d=f.getNext();for(;d&&u.length<s;)h(d,i)!==0&&u.push(d),d=f.getNext();return u}else return[]}function QP(){return{visibleWrites:$n.empty(),allWrites:[],lastWriteId:-1}}function Ud(e,t,n,i){return EE(e.writeTree,e.treePath,t,n,i)}function xE(e,t){return KP(e.writeTree,e.treePath,t)}function zy(e,t,n,i){return qP(e.writeTree,e.treePath,t,n,i)}function au(e,t){return YP(e.writeTree,xe(e.treePath,t))}function JP(e,t,n,i,s,r){return XP(e.writeTree,e.treePath,t,n,i,s,r)}function Ag(e,t,n){return GP(e.writeTree,e.treePath,t,n)}function TE(e,t){return CE(xe(e.treePath,t),e.writeTree)}function CE(e,t){return{treePath:e,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZP{constructor(){this.changeMap=new Map}trackChildChange(t){const n=t.type,i=t.childName;F(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),F(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,Ny(i,t.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,kP(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,IP(i,t.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,Ny(i,t.snapshotNode,s.oldSnap));else throw _o("Illegal combination of changes: "+t+" occurred after "+s)}else this.changeMap.set(i,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{getCompleteChild(t){return null}getChildAfterChild(t,n,i){return null}}const SE=new t2;class Rg{constructor(t,n,i=null){this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(t){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(t))return n.getNode().getImmediateChild(t);{const i=this.optCompleteServerCache_!=null?new kg(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ag(this.writes_,t,i)}}getChildAfterChild(t,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Qs(this.viewCache_),r=JP(this.writes_,s,n,1,i,t);return r.length===0?null:r[0]}}function e2(e,t){F(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),F(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function n2(e,t,n,i,s){const r=new ZP;let o,a;if(n.type===Zn.OVERWRITE){const c=n;c.source.fromUser?o=Bd(e,t,c.path,c.snap,i,s,r):(F(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered()&&!yt(c.path),o=lu(e,t,c.path,c.snap,i,s,a,r))}else if(n.type===Zn.MERGE){const c=n;c.source.fromUser?o=s2(e,t,c.path,c.children,i,s,r):(F(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered(),o=Vd(e,t,c.path,c.children,i,s,a,r))}else if(n.type===Zn.ACK_USER_WRITE){const c=n;c.revert?o=a2(e,t,c.path,i,s,r):o=r2(e,t,c.path,c.affectedTree,i,s,r)}else if(n.type===Zn.LISTEN_COMPLETE)o=o2(e,t,n.path,i,r);else throw _o("Unknown operation type: "+n.type);const l=r.getChanges();return i2(t,o,l),{viewCache:o,changes:l}}function i2(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Nd(e);(n.length>0||!e.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(SP(Nd(t)))}}function IE(e,t,n,i,s,r){const o=t.eventCache;if(au(i,n)!=null)return t;{let a,l;if(yt(n))if(F(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const c=Qs(t),u=c instanceof Ot?c:Ot.EMPTY_NODE,h=xE(i,u);a=e.filter.updateFullNode(t.eventCache.getNode(),h,r)}else{const c=Ud(i,Qs(t));a=e.filter.updateFullNode(t.eventCache.getNode(),c,r)}else{const c=wt(n);if(c===".priority"){F(os(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=t.serverCache.getNode();const h=zy(i,n,u,l);h!=null?a=e.filter.updatePriority(u,h):a=o.getNode()}else{const u=zt(n);let h;if(o.isCompleteForChild(c)){l=t.serverCache.getNode();const f=zy(i,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=Ag(i,c,t.serverCache);h!=null?a=e.filter.updateChild(o.getNode(),c,h,u,s,r):a=o.getNode()}}return aa(t,a,o.isFullyInitialized()||yt(n),e.filter.filtersNodes())}}function lu(e,t,n,i,s,r,o,a){const l=t.serverCache;let c;const u=o?e.filter:e.filter.getIndexedFilter();if(yt(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const d=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),d,null)}else{const d=wt(n);if(!l.isCompleteForPath(n)&&os(n)>1)return t;const p=zt(n),m=l.getNode().getImmediateChild(d).updateChild(p,i);d===".priority"?c=u.updatePriority(l.getNode(),m):c=u.updateChild(l.getNode(),d,m,p,SE,null)}const h=yE(t,c,l.isFullyInitialized()||yt(n),u.filtersNodes()),f=new Rg(s,h,r);return IE(e,h,n,s,f,a)}function Bd(e,t,n,i,s,r,o){const a=t.eventCache;let l,c;const u=new Rg(s,t,r);if(yt(n))c=e.filter.updateFullNode(t.eventCache.getNode(),i,o),l=aa(t,c,!0,e.filter.filtersNodes());else{const h=wt(n);if(h===".priority")c=e.filter.updatePriority(t.eventCache.getNode(),i),l=aa(t,c,a.isFullyInitialized(),a.isFiltered());else{const f=zt(n),d=a.getNode().getImmediateChild(h);let p;if(yt(f))p=i;else{const g=u.getCompleteChild(h);g!=null?iE(f)===".priority"&&g.getChild(rE(f)).isEmpty()?p=g:p=g.updateChild(f,i):p=Ot.EMPTY_NODE}if(d.equals(p))l=t;else{const g=e.filter.updateChild(a.getNode(),h,p,f,u,o);l=aa(t,g,a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function Hy(e,t){return e.eventCache.isCompleteForChild(t)}function s2(e,t,n,i,s,r,o){let a=t;return i.foreach((l,c)=>{const u=xe(n,l);Hy(t,wt(u))&&(a=Bd(e,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=xe(n,l);Hy(t,wt(u))||(a=Bd(e,a,u,c,s,r,o))}),a}function jy(e,t,n){return n.foreach((i,s)=>{t=t.updateChild(i,s)}),t}function Vd(e,t,n,i,s,r,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l=t,c;yt(n)?c=i:c=new Vt(null).setTree(n,i);const u=t.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const d=t.serverCache.getNode().getImmediateChild(h),p=jy(e,d,f);l=lu(e,l,new qt(h),p,s,r,o,a)}}),c.children.inorderTraversal((h,f)=>{const d=!t.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!d){const p=t.serverCache.getNode().getImmediateChild(h),g=jy(e,p,f);l=lu(e,l,new qt(h),g,s,r,o,a)}}),l}function r2(e,t,n,i,s,r,o){if(au(s,n)!=null)return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(i.value!=null){if(yt(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return lu(e,t,n,l.getNode().getChild(n),s,r,a,o);if(yt(n)){let c=new Vt(null);return l.getNode().forEachChild(Lr,(u,h)=>{c=c.set(new qt(u),h)}),Vd(e,t,n,c,s,r,a,o)}else return t}else{let c=new Vt(null);return i.foreach((u,h)=>{const f=xe(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),Vd(e,t,n,c,s,r,a,o)}}function o2(e,t,n,i,s){const r=t.serverCache,o=yE(t,r.getNode(),r.isFullyInitialized()||yt(n),r.isFiltered());return IE(e,o,n,i,SE,s)}function a2(e,t,n,i,s,r){let o;if(au(i,n)!=null)return t;{const a=new Rg(i,t,s),l=t.eventCache.getNode();let c;if(yt(n)||wt(n)===".priority"){let u;if(t.serverCache.isFullyInitialized())u=Ud(i,Qs(t));else{const h=t.serverCache.getNode();F(h instanceof Ot,"serverChildren would be complete if leaf node"),u=xE(i,h)}u=u,c=e.filter.updateFullNode(l,u,r)}else{const u=wt(n);let h=Ag(i,u,t.serverCache);h==null&&t.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=e.filter.updateChild(l,u,h,zt(n),a,r):t.eventCache.getNode().hasChild(u)?c=e.filter.updateChild(l,u,Ot.EMPTY_NODE,zt(n),a,r):c=l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=Ud(i,Qs(t)),o.isLeafNode()&&(c=e.filter.updateFullNode(c,o,r)))}return o=t.serverCache.isFullyInitialized()||au(i,Ft())!=null,aa(t,c,o,e.filter.filtersNodes())}}function l2(e,t){const n=Qs(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!yt(t)&&!n.getImmediateChild(wt(t)).isEmpty())?n.getChild(t):null}function Wy(e,t,n,i){t.type===Zn.MERGE&&t.source.queryId!==null&&(F(Qs(e.viewCache_),"We should always have a full cache before handling merges"),F(Nd(e.viewCache_),"Missing event cache, even though we have a server cache"));const s=e.viewCache_,r=n2(e.processor_,s,t,n,i);return e2(e.processor_,r.viewCache),F(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=r.viewCache,c2(e,r.changes,r.viewCache.eventCache.getNode(),null)}function c2(e,t,n,i){const s=i?[i]:e.eventRegistrations_;return LP(e.eventGenerator_,t,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ky;function u2(e){F(!Ky,"__referenceConstructor has already been defined"),Ky=e}function Dg(e,t,n,i){const s=t.source.queryId;if(s!==null){const r=e.views.get(s);return F(r!=null,"SyncTree gave us an op for an invalid query."),Wy(r,t,n,i)}else{let r=[];for(const o of e.views.values())r=r.concat(Wy(o,t,n,i));return r}}function Og(e,t){let n=null;for(const i of e.views.values())n=n||l2(i,t);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qy;function h2(e){F(!qy,"__referenceConstructor has already been defined"),qy=e}class Gy{constructor(t){this.listenProvider_=t,this.syncPointTree_=new Vt(null),this.pendingWriteTree_=QP(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function f2(e,t,n,i,s){return VP(e.pendingWriteTree_,t,n,i,s),s?ph(e,new Xs(pE(),t,n)):[]}function Sr(e,t,n=!1){const i=$P(e.pendingWriteTree_,t);if(zP(e.pendingWriteTree_,t)){let r=new Vt(null);return i.snap!=null?r=r.set(Ft(),!0):Cn(i.children,o=>{r=r.set(new qt(o),!0)}),ph(e,new ou(i.path,r,n))}else return[]}function dh(e,t,n){return ph(e,new Xs(gE(),t,n))}function d2(e,t,n){const i=Vt.fromObject(n);return ph(e,new Na(gE(),t,i))}function p2(e,t,n,i){const s=DE(e,i);if(s!=null){const r=OE(s),o=r.path,a=r.queryId,l=bn(o,t),c=new Xs(mE(a),l,n);return PE(e,o,c)}else return[]}function g2(e,t,n,i){const s=DE(e,i);if(s){const r=OE(s),o=r.path,a=r.queryId,l=bn(o,t),c=Vt.fromObject(n),u=new Na(mE(a),l,c);return PE(e,o,u)}else return[]}function kE(e,t,n){const s=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,(o,a)=>{const l=bn(o,t),c=Og(a,l);if(c)return c});return EE(s,t,r,n,!0)}function ph(e,t){return AE(t,e.syncPointTree_,null,bE(e.pendingWriteTree_,Ft()))}function AE(e,t,n,i){if(yt(e.path))return RE(e,t,n,i);{const s=t.get(Ft());n==null&&s!=null&&(n=Og(s,Ft()));let r=[];const o=wt(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=TE(i,o);r=r.concat(AE(a,l,c,u))}return s&&(r=r.concat(Dg(s,e,i,n))),r}}function RE(e,t,n,i){const s=t.get(Ft());n==null&&s!=null&&(n=Og(s,Ft()));let r=[];return t.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=TE(i,o),u=e.operationForChild(o);u&&(r=r.concat(RE(u,a,l,c)))}),s&&(r=r.concat(Dg(s,e,i,n))),r}function DE(e,t){return e.tagToQueryMap.get(t)}function OE(e){const t=e.indexOf("$");return F(t!==-1&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new qt(e.substr(0,t))}}function PE(e,t,n){const i=e.syncPointTree_.get(t);F(i,"Missing sync point for query tag that we're tracking");const s=bE(e.pendingWriteTree_,t);return Dg(i,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(t){this.node_=t}getImmediateChild(t){const n=this.node_.getImmediateChild(t);return new Pg(n)}node(){return this.node_}}class Mg{constructor(t,n){this.syncTree_=t,this.path_=n}getImmediateChild(t){const n=xe(this.path_,t);return new Mg(this.syncTree_,n)}node(){return kE(this.syncTree_,this.path_)}}const m2=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},Yy=function(e,t,n){if(!e||typeof e!="object")return e;if(F(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return _2(e[".sv"],t,n);if(typeof e[".sv"]=="object")return y2(e[".sv"],t);F(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},_2=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:F(!1,"Unexpected server value: "+e)}},y2=function(e,t,n){e.hasOwnProperty("increment")||F(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;typeof i!="number"&&F(!1,"Unexpected increment value: "+i);const s=t.node();if(F(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},v2=function(e,t,n,i){return Ng(t,new Mg(n,e),i)},b2=function(e,t,n){return Ng(e,new Pg(t),n)};function Ng(e,t,n){const i=e.getPriority().val(),s=Yy(i,t.getImmediateChild(".priority"),n);let r;if(e.isLeafNode()){const o=e,a=Yy(o.getValue(),t,n);return a!==o.getValue()||s!==o.getPriority().val()?new be(a,Le(s)):e}else{const o=e;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new be(s))),o.forEachChild(Ve,(a,l)=>{const c=Ng(l,t.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(t="",n=null,i={children:{},childCount:0}){this.name=t,this.parent=n,this.node=i}}function Fg(e,t){let n=t instanceof qt?t:new qt(t),i=e,s=wt(n);for(;s!==null;){const r=qr(i.node.children,s)||{children:{},childCount:0};i=new Lg(s,i,r),n=zt(n),s=wt(n)}return i}function wo(e){return e.node.value}function ME(e,t){e.node.value=t,$d(e)}function NE(e){return e.node.childCount>0}function w2(e){return wo(e)===void 0&&!NE(e)}function gh(e,t){Cn(e.node.children,(n,i)=>{t(new Lg(n,e,i))})}function LE(e,t,n,i){n&&!i&&t(e),gh(e,s=>{LE(s,t,!0,i)}),n&&i&&t(e)}function E2(e,t,n){let i=n?e:e.parent;for(;i!==null;){if(t(i))return!0;i=i.parent}return!1}function hl(e){return new qt(e.parent===null?e.name:hl(e.parent)+"/"+e.name)}function $d(e){e.parent!==null&&x2(e.parent,e.name,e)}function x2(e,t,n){const i=w2(n),s=Mi(e.node.children,t);i&&s?(delete e.node.children[t],e.node.childCount--,$d(e)):!i&&!s&&(e.node.children[t]=n.node,e.node.childCount++,$d(e))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T2=/[\[\].#$\/\u0000-\u001F\u007F]/,C2=/[\[\].#$\u0000-\u001F\u007F]/,Cf=10*1024*1024,FE=function(e){return typeof e=="string"&&e.length!==0&&!T2.test(e)},S2=function(e){return typeof e=="string"&&e.length!==0&&!C2.test(e)},I2=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),S2(e)},UE=function(e,t,n){const i=n instanceof qt?new oP(n,e):n;if(t===void 0)throw new Error(e+"contains undefined "+Ss(i));if(typeof t=="function")throw new Error(e+"contains a function "+Ss(i)+" with contents = "+t.toString());if(Fw(t))throw new Error(e+"contains "+t.toString()+" "+Ss(i));if(typeof t=="string"&&t.length>Cf/3&&hh(t)>Cf)throw new Error(e+"contains a string greater than "+Cf+" utf8 bytes "+Ss(i)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let s=!1,r=!1;if(Cn(t,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!FE(o)))throw new Error(e+" contains an invalid key ("+o+") "+Ss(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);aP(i,o),UE(e,a,i),lP(i)}),s&&r)throw new Error(e+' contains ".value" child '+Ss(i)+" in addition to actual children.")}},k2=function(e,t){const n=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!FE(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!I2(n))throw new Error(zA(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function R2(e,t){let n=null;for(let i=0;i<t.length;i++){const s=t[i],r=s.getPath();n!==null&&!oE(r,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&e.eventLists_.push(n)}function ar(e,t,n){R2(e,n),D2(e,i=>Mn(i,t)||Mn(t,i))}function D2(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const s=e.eventLists_[i];if(s){const r=s.path;t(r)?(O2(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function O2(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(n!==null){e.events[t]=null;const i=n.getEventRunner();zs&&Ne("event: "+n.toString()),cl(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P2="repo_interrupt",M2=25;class N2{constructor(t,n,i,s){this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new A2,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ru(),this.transactionQueueTree_=new Lg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function L2(e,t,n){if(e.stats_=xg(e.repoInfo_),e.forceRestClient_||RO())e.server_=new su(e.repoInfo_,(i,s,r,o)=>{Xy(e,i,s,r,o)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>Qy(e,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ie(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new wi(e.repoInfo_,t,(i,s,r,o)=>{Xy(e,i,s,r,o)},i=>{Qy(e,i)},i=>{U2(e,i)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(i=>{e.server_.refreshAuthToken(i)}),e.appCheckProvider_.addTokenChangeListener(i=>{e.server_.refreshAppCheckToken(i.token)}),e.statsReporter_=LO(e.repoInfo_,()=>new NP(e.stats_,e.server_)),e.infoData_=new RP,e.infoSyncTree_=new Gy({startListening:(i,s,r,o)=>{let a=[];const l=e.infoData_.getNode(i._path);return l.isEmpty()||(a=dh(e.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ug(e,"connected",!1),e.serverSyncTree_=new Gy({startListening:(i,s,r,o)=>(e.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);ar(e.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{e.server_.unlisten(i,s)}})}function F2(e){const n=e.infoData_.getNode(new qt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function BE(e){return m2({timestamp:F2(e)})}function Xy(e,t,n,i,s){e.dataUpdateCount++;const r=new qt(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(s)if(i){const l=Yc(n,c=>Le(c));o=g2(e.serverSyncTree_,r,l,s)}else{const l=Le(n);o=p2(e.serverSyncTree_,r,l,s)}else if(i){const l=Yc(n,c=>Le(c));o=d2(e.serverSyncTree_,r,l)}else{const l=Le(n);o=dh(e.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Vg(e,r)),ar(e.eventQueue_,a,o)}function Qy(e,t){Ug(e,"connected",t),t===!1&&V2(e)}function U2(e,t){Cn(t,(n,i)=>{Ug(e,n,i)})}function Ug(e,t,n){const i=new qt("/.info/"+t),s=Le(n);e.infoData_.updateSnapshot(i,s);const r=dh(e.infoSyncTree_,i,s);ar(e.eventQueue_,i,r)}function B2(e){return e.nextWriteId_++}function V2(e){VE(e,"onDisconnectEvents");const t=BE(e),n=ru();Md(e.onDisconnect_,Ft(),(s,r)=>{const o=v2(s,r,e.serverSyncTree_,t);dE(n,s,o)});let i=[];Md(n,Ft(),(s,r)=>{i=i.concat(dh(e.serverSyncTree_,s,r));const o=j2(e,s);Vg(e,o)}),e.onDisconnect_=ru(),ar(e.eventQueue_,Ft(),i)}function $2(e){e.persistentConnection_&&e.persistentConnection_.interrupt(P2)}function VE(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Ne(n,...t)}function $E(e,t,n){return kE(e.serverSyncTree_,t,n)||Ot.EMPTY_NODE}function Bg(e,t=e.transactionQueueTree_){if(t||mh(e,t),wo(t)){const n=HE(e,t);F(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&z2(e,hl(t),n)}else NE(t)&&gh(t,n=>{Bg(e,n)})}function z2(e,t,n){const i=n.map(c=>c.currentWriteId),s=$E(e,t,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];F(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=bn(t,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=t;e.server_.put(l.toString(),a,c=>{VE(e,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(Sr(e.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();mh(e,Fg(e.transactionQueueTree_,t)),Bg(e,e.transactionQueueTree_),ar(e.eventQueue_,t,u);for(let f=0;f<h.length;f++)cl(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{gn("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Vg(e,t)}},o)}function Vg(e,t){const n=zE(e,t),i=hl(n),s=HE(e,n);return H2(e,s,i),i}function H2(e,t,n){if(t.length===0)return;const i=[];let s=[];const o=t.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<t.length;a++){const l=t[a],c=bn(n,l.path);let u=!1,h;if(F(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat(Sr(e.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=M2)u=!0,h="maxretry",s=s.concat(Sr(e.serverSyncTree_,l.currentWriteId,!0));else{const f=$E(e,l.path,o);l.currentInputSnapshot=f;const d=t[a].update(f.val());if(d!==void 0){UE("transaction failed: Data returned ",d,l.path);let p=Le(d);typeof d=="object"&&d!=null&&Mi(d,".priority")||(p=p.updatePriority(f.getPriority()));const m=l.currentWriteId,_=BE(e),v=b2(p,f,_);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=v,l.currentWriteId=B2(e),o.splice(o.indexOf(m),1),s=s.concat(f2(e.serverSyncTree_,l.path,v,l.currentWriteId,l.applyLocally)),s=s.concat(Sr(e.serverSyncTree_,m,!0))}else u=!0,h="nodata",s=s.concat(Sr(e.serverSyncTree_,l.currentWriteId,!0))}ar(e.eventQueue_,n,s),s=[],u&&(t[a].status=2,function(f){setTimeout(f,Math.floor(0))}(t[a].unwatcher),t[a].onComplete&&(h==="nodata"?i.push(()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot)):i.push(()=>t[a].onComplete(new Error(h),!1,null))))}mh(e,e.transactionQueueTree_);for(let a=0;a<i.length;a++)cl(i[a]);Bg(e,e.transactionQueueTree_)}function zE(e,t){let n,i=e.transactionQueueTree_;for(n=wt(t);n!==null&&wo(i)===void 0;)i=Fg(i,n),t=zt(t),n=wt(t);return i}function HE(e,t){const n=[];return jE(e,t,n),n.sort((i,s)=>i.order-s.order),n}function jE(e,t,n){const i=wo(t);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);gh(t,s=>{jE(e,s,n)})}function mh(e,t){const n=wo(t);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,ME(t,n.length>0?n:void 0)}gh(t,i=>{mh(e,i)})}function j2(e,t){const n=hl(zE(e,t)),i=Fg(e.transactionQueueTree_,t);return E2(i,s=>{Sf(e,s)}),Sf(e,i),LE(i,s=>{Sf(e,s)}),n}function Sf(e,t){const n=wo(t);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(F(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(F(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Sr(e.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?ME(t,void 0):n.length=r+1,ar(e.eventQueue_,hl(t),s);for(let o=0;o<i.length;o++)cl(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W2(e){let t="";const n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}t+="/"+s}return t}function K2(e){const t={};e.charAt(0)==="?"&&(e=e.substring(1));for(const n of e.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):gn(`Invalid query segment '${n}' in query '${e}'`)}return t}const Jy=function(e,t){const n=q2(e),i=n.namespace;n.domain==="firebase.com"&&Gs(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Gs("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||EO();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new PO(n.host,n.secure,i,s,t,"",i!==n.subdomain),path:new qt(n.pathString)}},q2=function(e){let t="",n="",i="",s="",r="",o=!0,a="https",l=443;if(typeof e=="string"){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let u=e.indexOf("/");u===-1&&(u=e.length);let h=e.indexOf("?");h===-1&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(s=W2(e.substring(u,h)));const f=K2(e.substring(Math.min(e.length,h)));c=t.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(t.substring(c+1),10)):c=t.length;const d=t.slice(0,c);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{const p=t.indexOf(".");i=t.substring(0,p).toLowerCase(),n=t.substring(p+1),r=i}"ns"in f&&(r=f.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(t,n,i,s){this._repo=t,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return yt(this._path)?null:iE(this._path)}get ref(){return new Eo(this._repo,this._path)}get _queryIdentifier(){const t=Fy(this._queryParams),n=wg(t);return n==="{}"?"default":n}get _queryObject(){return Fy(this._queryParams)}isEqual(t){if(t=an(t),!(t instanceof $g))return!1;const n=this._repo===t._repo,i=oE(this._path,t._path),s=this._queryIdentifier===t._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+rP(this._path)}}class Eo extends $g{constructor(t,n){super(t,n,new Ig,!1)}get parent(){const t=rE(this._path);return t===null?null:new Eo(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}u2(Eo);h2(Eo);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G2="FIREBASE_DATABASE_EMULATOR_HOST",zd={};let Y2=!1;function X2(e,t,n,i,s){let r=i||e.options.databaseURL;r===void 0&&(e.options.projectId||Gs("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ne("Using default host for project ",e.options.projectId),r=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o=Jy(r,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[G2]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Jy(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new Dd(Dd.OWNER):new OO(e.name,e.options,t);k2("Invalid Firebase Database URL",o),yt(o.path)||Gs("Database URL must point to the root of a Firebase Database (not including a child path).");const h=J2(a,e,u,new DO(e.name,n));return new Z2(h,e)}function Q2(e,t){const n=zd[t];(!n||n[e.key]!==e)&&Gs(`Database ${t}(${e.repoInfo_}) has already been deleted.`),$2(e),delete n[e.key]}function J2(e,t,n,i){let s=zd[t.name];s||(s={},zd[t.name]=s);let r=s[e.toURLString()];return r&&Gs("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new N2(e,Y2,n,i),s[e.toURLString()]=r,r}class Z2{constructor(t,n){this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(L2(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Eo(this._repo,Ft())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Q2(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&Gs("Cannot call "+t+" on a deleted database.")}}/**
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
 */function tM(e){_O(vo),ri(new zn("database",(t,{instanceIdentifier:n})=>{const i=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return X2(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),pn(vy,by,e),pn(vy,by,"esm2017")}wi.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)};wi.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};tM();var eM=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},K,zg=zg||{},it=eM||self;function cu(){}function _h(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function fl(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function nM(e){return Object.prototype.hasOwnProperty.call(e,If)&&e[If]||(e[If]=++iM)}var If="closure_uid_"+(1e9*Math.random()>>>0),iM=0;function sM(e,t,n){return e.call.apply(e.bind,arguments)}function rM(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function $e(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?$e=sM:$e=rM,$e.apply(null,arguments)}function Kl(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),e.apply(this,i)}}function Ae(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(i,o)}}function gs(){this.s=this.s,this.o=this.o}var oM=0;gs.prototype.s=!1;gs.prototype.na=function(){!this.s&&(this.s=!0,this.M(),oM!=0)&&nM(this)};gs.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const WE=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Hg(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function Zy(e,t){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(_h(i)){const s=e.length||0,r=i.length||0;e.length=s+r;for(let o=0;o<r;o++)e[s+o]=i[o]}else e.push(i)}}function ze(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}ze.prototype.h=function(){this.defaultPrevented=!0};var aM=function(){if(!it.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{it.addEventListener("test",cu,t),it.removeEventListener("test",cu,t)}catch{}return e}();function uu(e){return/^[\s\xa0]*$/.test(e)}var tv=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function kf(e,t){return e<t?-1:e>t?1:0}function yh(){var e=it.navigator;return e&&(e=e.userAgent)?e:""}function Qn(e){return yh().indexOf(e)!=-1}function jg(e){return jg[" "](e),e}jg[" "]=cu;function lM(e){var t=hM;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var cM=Qn("Opera"),Xr=Qn("Trident")||Qn("MSIE"),KE=Qn("Edge"),Hd=KE||Xr,qE=Qn("Gecko")&&!(yh().toLowerCase().indexOf("webkit")!=-1&&!Qn("Edge"))&&!(Qn("Trident")||Qn("MSIE"))&&!Qn("Edge"),uM=yh().toLowerCase().indexOf("webkit")!=-1&&!Qn("Edge");function GE(){var e=it.document;return e?e.documentMode:void 0}var hu;t:{var Af="",Rf=function(){var e=yh();if(qE)return/rv:([^\);]+)(\)|;)/.exec(e);if(KE)return/Edge\/([\d\.]+)/.exec(e);if(Xr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(uM)return/WebKit\/(\S+)/.exec(e);if(cM)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Rf&&(Af=Rf?Rf[1]:""),Xr){var Df=GE();if(Df!=null&&Df>parseFloat(Af)){hu=String(Df);break t}}hu=Af}var hM={};function fM(){return lM(function(){let e=0;const t=tv(String(hu)).split("."),n=tv("9").split("."),i=Math.max(t.length,n.length);for(let o=0;e==0&&o<i;o++){var s=t[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;e=kf(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||kf(s[2].length==0,r[2].length==0)||kf(s[2],r[2]),s=s[3],r=r[3]}while(e==0)}return 0<=e})}var jd;if(it.document&&Xr){var ev=GE();jd=ev||parseInt(hu,10)||void 0}else jd=void 0;var dM=jd;function La(e,t){if(ze.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(qE){t:{try{jg(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:pM[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&La.X.h.call(this)}}Ae(La,ze);var pM={2:"touch",3:"pen",4:"mouse"};La.prototype.h=function(){La.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var dl="closure_listenable_"+(1e6*Math.random()|0),gM=0;function mM(e,t,n,i,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.ha=s,this.key=++gM,this.ba=this.ea=!1}function vh(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Wg(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function YE(e){const t={};for(const n in e)t[n]=e[n];return t}const nv="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function XE(e,t){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)e[n]=i[n];for(let r=0;r<nv.length;r++)n=nv[r],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function bh(e){this.src=e,this.g={},this.h=0}bh.prototype.add=function(e,t,n,i,s){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=Kd(e,t,i,s);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new mM(t,this.src,r,!!i,s),t.ea=n,e.push(t)),t};function Wd(e,t){var n=t.type;if(n in e.g){var i=e.g[n],s=WE(i,t),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(vh(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Kd(e,t,n,i){for(var s=0;s<e.length;++s){var r=e[s];if(!r.ba&&r.listener==t&&r.capture==!!n&&r.ha==i)return s}return-1}var Kg="closure_lm_"+(1e6*Math.random()|0),Of={};function QE(e,t,n,i,s){if(i&&i.once)return ZE(e,t,n,i,s);if(Array.isArray(t)){for(var r=0;r<t.length;r++)QE(e,t[r],n,i,s);return null}return n=Yg(n),e&&e[dl]?e.N(t,n,fl(i)?!!i.capture:!!i,s):JE(e,t,n,!1,i,s)}function JE(e,t,n,i,s,r){if(!t)throw Error("Invalid event type");var o=fl(s)?!!s.capture:!!s,a=Gg(e);if(a||(e[Kg]=a=new bh(e)),n=a.add(t,n,i,o,r),n.proxy)return n;if(i=_M(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)aM||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),i,s);else if(e.attachEvent)e.attachEvent(ex(t.toString()),i);else if(e.addListener&&e.removeListener)e.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function _M(){function e(n){return t.call(e.src,e.listener,n)}const t=yM;return e}function ZE(e,t,n,i,s){if(Array.isArray(t)){for(var r=0;r<t.length;r++)ZE(e,t[r],n,i,s);return null}return n=Yg(n),e&&e[dl]?e.O(t,n,fl(i)?!!i.capture:!!i,s):JE(e,t,n,!0,i,s)}function tx(e,t,n,i,s){if(Array.isArray(t))for(var r=0;r<t.length;r++)tx(e,t[r],n,i,s);else i=fl(i)?!!i.capture:!!i,n=Yg(n),e&&e[dl]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=Kd(r,n,i,s),-1<n&&(vh(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=Gg(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Kd(t,n,i,s)),(n=-1<e?t[e]:null)&&qg(n))}function qg(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[dl])Wd(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(ex(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=Gg(t))?(Wd(n,e),n.h==0&&(n.src=null,t[Kg]=null)):vh(e)}}}function ex(e){return e in Of?Of[e]:Of[e]="on"+e}function yM(e,t){if(e.ba)e=!0;else{t=new La(t,this);var n=e.listener,i=e.ha||e.src;e.ea&&qg(e),e=n.call(i,t)}return e}function Gg(e){return e=e[Kg],e instanceof bh?e:null}var Pf="__closure_events_fn_"+(1e9*Math.random()>>>0);function Yg(e){return typeof e=="function"?e:(e[Pf]||(e[Pf]=function(t){return e.handleEvent(t)}),e[Pf])}function Ce(){gs.call(this),this.i=new bh(this),this.P=this,this.I=null}Ae(Ce,gs);Ce.prototype[dl]=!0;Ce.prototype.removeEventListener=function(e,t,n,i){tx(this,e,t,n,i)};function ke(e,t){var n,i=e.I;if(i)for(n=[];i;i=i.I)n.push(i);if(e=e.P,i=t.type||t,typeof t=="string")t=new ze(t,e);else if(t instanceof ze)t.target=t.target||e;else{var s=t;t=new ze(i,e),XE(t,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];s=ql(o,i,!0,t)&&s}if(o=t.g=e,s=ql(o,i,!0,t)&&s,s=ql(o,i,!1,t)&&s,n)for(r=0;r<n.length;r++)o=t.g=n[r],s=ql(o,i,!1,t)&&s}Ce.prototype.M=function(){if(Ce.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)vh(n[i]);delete e.g[t],e.h--}}this.I=null};Ce.prototype.N=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)};Ce.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};function ql(e,t,n,i){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&Wd(e.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var Xg=it.JSON.stringify;function vM(){var e=sx;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class bM{constructor(){this.h=this.g=null}add(t,n){const i=nx.get();i.set(t,n),this.h?this.h.next=i:this.g=i,this.h=i}}var nx=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new wM,e=>e.reset());class wM{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function EM(e){it.setTimeout(()=>{throw e},0)}function ix(e,t){qd||xM(),Gd||(qd(),Gd=!0),sx.add(e,t)}var qd;function xM(){var e=it.Promise.resolve(void 0);qd=function(){e.then(TM)}}var Gd=!1,sx=new bM;function TM(){for(var e;e=vM();){try{e.h.call(e.g)}catch(n){EM(n)}var t=nx;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Gd=!1}function wh(e,t){Ce.call(this),this.h=e||1,this.g=t||it,this.j=$e(this.lb,this),this.l=Date.now()}Ae(wh,Ce);K=wh.prototype;K.ca=!1;K.R=null;K.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ke(this,"tick"),this.ca&&(Qg(this),this.start()))}};K.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Qg(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}K.M=function(){wh.X.M.call(this),Qg(this),delete this.g};function Jg(e,t,n){if(typeof e=="function")n&&(e=$e(e,n));else if(e&&typeof e.handleEvent=="function")e=$e(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:it.setTimeout(e,t||0)}function rx(e){e.g=Jg(()=>{e.g=null,e.i&&(e.i=!1,rx(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class CM extends gs{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:rx(this)}M(){super.M(),this.g&&(it.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fa(e){gs.call(this),this.h=e,this.g={}}Ae(Fa,gs);var iv=[];function ox(e,t,n,i){Array.isArray(n)||(n&&(iv[0]=n.toString()),n=iv);for(var s=0;s<n.length;s++){var r=QE(t,n[s],i||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function ax(e){Wg(e.g,function(t,n){this.g.hasOwnProperty(n)&&qg(t)},e),e.g={}}Fa.prototype.M=function(){Fa.X.M.call(this),ax(this)};Fa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Eh(){this.g=!0}Eh.prototype.Aa=function(){this.g=!1};function SM(e,t,n,i,s,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function IM(e,t,n,i,s,r,o){e.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+t+`
`+n+`
`+r+" "+o})}function Ir(e,t,n,i){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+AM(e,n)+(i?" "+i:"")})}function kM(e,t){e.info(function(){return"TIMEOUT: "+t})}Eh.prototype.info=function(){};function AM(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Xg(n)}catch{return t}}var lr={},sv=null;function xh(){return sv=sv||new Ce}lr.Pa="serverreachability";function lx(e){ze.call(this,lr.Pa,e)}Ae(lx,ze);function Ua(e){const t=xh();ke(t,new lx(t))}lr.STAT_EVENT="statevent";function cx(e,t){ze.call(this,lr.STAT_EVENT,e),this.stat=t}Ae(cx,ze);function qe(e){const t=xh();ke(t,new cx(t,e))}lr.Qa="timingevent";function ux(e,t){ze.call(this,lr.Qa,e),this.size=t}Ae(ux,ze);function pl(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return it.setTimeout(function(){e()},t)}var Th={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},hx={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Zg(){}Zg.prototype.h=null;function rv(e){return e.h||(e.h=e.i())}function fx(){}var gl={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function tm(){ze.call(this,"d")}Ae(tm,ze);function em(){ze.call(this,"c")}Ae(em,ze);var Yd;function Ch(){}Ae(Ch,Zg);Ch.prototype.g=function(){return new XMLHttpRequest};Ch.prototype.i=function(){return{}};Yd=new Ch;function ml(e,t,n,i){this.l=e,this.j=t,this.m=n,this.U=i||1,this.S=new Fa(this),this.O=RM,e=Hd?125:void 0,this.T=new wh(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new dx}function dx(){this.i=null,this.g="",this.h=!1}var RM=45e3,Xd={},fu={};K=ml.prototype;K.setTimeout=function(e){this.O=e};function Qd(e,t,n){e.K=1,e.v=Ih(Ci(t)),e.s=n,e.P=!0,px(e,null)}function px(e,t){e.F=Date.now(),_l(e),e.A=Ci(e.v);var n=e.A,i=e.U;Array.isArray(i)||(i=[String(i)]),Ex(n.i,"t",i),e.C=0,n=e.l.H,e.h=new dx,e.g=Hx(e.l,n?t:null,!e.s),0<e.N&&(e.L=new CM($e(e.La,e,e.g),e.N)),ox(e.S,e.g,"readystatechange",e.ib),t=e.H?YE(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),Ua(),SM(e.j,e.u,e.A,e.m,e.U,e.s)}K.ib=function(e){e=e.target;const t=this.L;t&&vi(e)==3?t.l():this.La(e)};K.La=function(e){try{if(e==this.g)t:{const u=vi(this.g);var t=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Hd||this.g&&(this.h.h||this.g.fa()||cv(this.g)))){this.I||u!=4||t==7||(t==8||0>=h?Ua(3):Ua(2)),Sh(this);var n=this.g.aa();this.Y=n;e:if(gx(this)){var i=cv(this.g);e="";var s=i.length,r=vi(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ms(this),ca(this);var o="";break e}this.h.i=new it.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:r&&t==s-1});i.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,IM(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!uu(a)){var c=a;break e}}c=null}if(n=c)Ir(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Jd(this,n);else{this.i=!1,this.o=3,qe(12),Ms(this),ca(this);break t}}this.P?(mx(this,u,o),Hd&&this.i&&u==3&&(ox(this.S,this.T,"tick",this.hb),this.T.start())):(Ir(this.j,this.m,o,null),Jd(this,o)),u==4&&Ms(this),this.i&&!this.I&&(u==4?Bx(this.l,this):(this.i=!1,_l(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,qe(12)):(this.o=0,qe(13)),Ms(this),ca(this)}}}catch{}finally{}};function gx(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function mx(e,t,n){let i=!0,s;for(;!e.I&&e.C<n.length;)if(s=DM(e,n),s==fu){t==4&&(e.o=4,qe(14),i=!1),Ir(e.j,e.m,null,"[Incomplete Response]");break}else if(s==Xd){e.o=4,qe(15),Ir(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}else Ir(e.j,e.m,s,null),Jd(e,s);gx(e)&&s!=fu&&s!=Xd&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,qe(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),lm(t),t.K=!0,qe(11))):(Ir(e.j,e.m,n,"[Invalid Chunked Response]"),Ms(e),ca(e))}K.hb=function(){if(this.g){var e=vi(this.g),t=this.g.fa();this.C<t.length&&(Sh(this),mx(this,e,t),this.i&&e!=4&&_l(this))}};function DM(e,t){var n=e.C,i=t.indexOf(`
`,n);return i==-1?fu:(n=Number(t.substring(n,i)),isNaN(n)?Xd:(i+=1,i+n>t.length?fu:(t=t.substr(i,n),e.C=i+n,t)))}K.cancel=function(){this.I=!0,Ms(this)};function _l(e){e.V=Date.now()+e.O,_x(e,e.O)}function _x(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=pl($e(e.gb,e),t)}function Sh(e){e.B&&(it.clearTimeout(e.B),e.B=null)}K.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(kM(this.j,this.A),this.K!=2&&(Ua(),qe(17)),Ms(this),this.o=2,ca(this)):_x(this,this.V-e)};function ca(e){e.l.G==0||e.I||Bx(e.l,e)}function Ms(e){Sh(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,Qg(e.T),ax(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Jd(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||Zd(n.h,e))){if(!e.J&&Zd(n.h,e)&&n.G==3){try{var i=n.Fa.g.parse(t)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)gu(n),Rh(n);else break t;am(n),qe(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&n.A==0&&!n.v&&(n.v=pl($e(n.cb,n),6e3));if(1>=Cx(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Ns(n,11)}else if((e.J||n.g==e)&&gu(n),!uu(t))for(s=n.Fa.g.parse(t),t=0;t<s.length;t++){let c=s[t];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(i=1.5*f,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const d=e.g;if(d){const p=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var r=i.h;r.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(nm(r,r.h),r.h=null))}if(i.D){const g=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(i.za=g,Yt(i.F,i.D,g))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),i=n;var o=e;if(i.sa=zx(i,i.H?i.ka:null,i.V),o.J){Sx(i.h,o);var a=o,l=i.J;l&&a.setTimeout(l),a.B&&(Sh(a),_l(a)),i.g=o}else Fx(i);0<n.i.length&&Dh(n)}else c[0]!="stop"&&c[0]!="close"||Ns(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Ns(n,7):om(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}Ua(4)}catch{}}function OM(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(_h(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}t=[],n=0;for(i in e)t[n++]=e[i];return t}function PM(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(_h(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const i in e)t[n++]=i;return t}}}function yx(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(_h(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=PM(e),i=OM(e),s=i.length,r=0;r<s;r++)t.call(void 0,i[r],n&&n[r],e)}var vx=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function MM(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),s=null;if(0<=i){var r=e[n].substring(0,i);s=e[n].substring(i+1)}else r=e[n];t(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Hs(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Hs){this.h=t!==void 0?t:e.h,du(this,e.j),this.s=e.s,this.g=e.g,pu(this,e.m),this.l=e.l,t=e.i;var n=new Ba;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),ov(this,n),this.o=e.o}else e&&(n=String(e).match(vx))?(this.h=!!t,du(this,n[1]||"",!0),this.s=Wo(n[2]||""),this.g=Wo(n[3]||"",!0),pu(this,n[4]),this.l=Wo(n[5]||"",!0),ov(this,n[6]||"",!0),this.o=Wo(n[7]||"")):(this.h=!!t,this.i=new Ba(null,this.h))}Hs.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ko(t,av,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Ko(t,av,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Ko(n,n.charAt(0)=="/"?FM:LM,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ko(n,BM)),e.join("")};function Ci(e){return new Hs(e)}function du(e,t,n){e.j=n?Wo(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function pu(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function ov(e,t,n){t instanceof Ba?(e.i=t,VM(e.i,e.h)):(n||(t=Ko(t,UM)),e.i=new Ba(t,e.h))}function Yt(e,t,n){e.i.set(t,n)}function Ih(e){return Yt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Wo(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ko(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,NM),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function NM(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var av=/[#\/\?@]/g,LM=/[#\?:]/g,FM=/[#\?]/g,UM=/[#\?@]/g,BM=/#/g;function Ba(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function ms(e){e.g||(e.g=new Map,e.h=0,e.i&&MM(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}K=Ba.prototype;K.add=function(e,t){ms(this),this.i=null,e=xo(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function bx(e,t){ms(e),t=xo(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function wx(e,t){return ms(e),t=xo(e,t),e.g.has(t)}K.forEach=function(e,t){ms(this),this.g.forEach(function(n,i){n.forEach(function(s){e.call(t,s,i,this)},this)},this)};K.oa=function(){ms(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let i=0;i<t.length;i++){const s=e[i];for(let r=0;r<s.length;r++)n.push(t[i])}return n};K.W=function(e){ms(this);let t=[];if(typeof e=="string")wx(this,e)&&(t=t.concat(this.g.get(xo(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};K.set=function(e,t){return ms(this),this.i=null,e=xo(this,e),wx(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};K.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function Ex(e,t,n){bx(e,t),0<n.length&&(e.i=null,e.g.set(xo(e,t),Hg(n)),e.h+=n.length)}K.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var i=t[n];const r=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),e.push(s)}}return this.i=e.join("&")};function xo(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function VM(e,t){t&&!e.j&&(ms(e),e.i=null,e.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(bx(this,i),Ex(this,s,n))},e)),e.j=t}var $M=class{constructor(t,n){this.h=t,this.g=n}};function xx(e){this.l=e||zM,it.PerformanceNavigationTiming?(e=it.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(it.g&&it.g.Ga&&it.g.Ga()&&it.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var zM=10;function Tx(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Cx(e){return e.h?1:e.g?e.g.size:0}function Zd(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function nm(e,t){e.g?e.g.add(t):e.h=t}function Sx(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}xx.prototype.cancel=function(){if(this.i=Ix(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Ix(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Hg(e.i)}function im(){}im.prototype.stringify=function(e){return it.JSON.stringify(e,void 0)};im.prototype.parse=function(e){return it.JSON.parse(e,void 0)};function HM(){this.g=new im}function jM(e,t,n){const i=n||"";try{yx(e,function(s,r){let o=s;fl(s)&&(o=Xg(s)),t.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw t.push(i+"type="+encodeURIComponent("_badmap")),s}}function WM(e,t){const n=new Eh;if(it.Image){const i=new Image;i.onload=Kl(Gl,n,i,"TestLoadImage: loaded",!0,t),i.onerror=Kl(Gl,n,i,"TestLoadImage: error",!1,t),i.onabort=Kl(Gl,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=Kl(Gl,n,i,"TestLoadImage: timeout",!1,t),it.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=e}else t(!1)}function Gl(e,t,n,i,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(i)}catch{}}function yl(e){this.l=e.ac||null,this.j=e.jb||!1}Ae(yl,Zg);yl.prototype.g=function(){return new kh(this.l,this.j)};yl.prototype.i=function(e){return function(){return e}}({});function kh(e,t){Ce.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=sm,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ae(kh,Ce);var sm=0;K=kh.prototype;K.open=function(e,t){if(this.readyState!=sm)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Va(this)};K.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||it).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};K.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vl(this)),this.readyState=sm};K.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Va(this)),this.g&&(this.readyState=3,Va(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof it.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;kx(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function kx(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}K.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?vl(this):Va(this),this.readyState==3&&kx(this)}};K.Va=function(e){this.g&&(this.response=this.responseText=e,vl(this))};K.Ua=function(e){this.g&&(this.response=e,vl(this))};K.ga=function(){this.g&&vl(this)};function vl(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Va(e)}K.setRequestHeader=function(e,t){this.v.append(e,t)};K.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};K.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Va(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(kh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var KM=it.JSON.parse;function re(e){Ce.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ax,this.K=this.L=!1}Ae(re,Ce);var Ax="",qM=/^https?$/i,GM=["POST","PUT"];K=re.prototype;K.Ka=function(e){this.L=e};K.da=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Yd.g(),this.C=this.u?rv(this.u):rv(Yd),this.g.onreadystatechange=$e(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){lv(this,r);return}if(e=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=it.FormData&&e instanceof it.FormData,!(0<=WE(GM,t))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ox(this),0<this.B&&((this.K=YM(this.g))?(this.g.timeout=this.B,this.g.ontimeout=$e(this.qa,this)):this.A=Jg(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){lv(this,r)}};function YM(e){return Xr&&fM()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}K.qa=function(){typeof zg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ke(this,"timeout"),this.abort(8))};function lv(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Rx(e),Ah(e)}function Rx(e){e.D||(e.D=!0,ke(e,"complete"),ke(e,"error"))}K.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,ke(this,"complete"),ke(this,"abort"),Ah(this))};K.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ah(this,!0)),re.X.M.call(this)};K.Ha=function(){this.s||(this.F||this.v||this.l?Dx(this):this.fb())};K.fb=function(){Dx(this)};function Dx(e){if(e.h&&typeof zg<"u"&&(!e.C[1]||vi(e)!=4||e.aa()!=2)){if(e.v&&vi(e)==4)Jg(e.Ha,0,e);else if(ke(e,"readystatechange"),vi(e)==4){e.h=!1;try{const a=e.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var i;if(i=a===0){var s=String(e.H).match(vx)[1]||null;if(!s&&it.self&&it.self.location){var r=it.self.location.protocol;s=r.substr(0,r.length-1)}i=!qM.test(s?s.toLowerCase():"")}n=i}if(n)ke(e,"complete"),ke(e,"success");else{e.m=6;try{var o=2<vi(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",Rx(e)}}finally{Ah(e)}}}}function Ah(e,t){if(e.g){Ox(e);const n=e.g,i=e.C[0]?cu:null;e.g=null,e.C=null,t||ke(e,"ready");try{n.onreadystatechange=i}catch{}}}function Ox(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(it.clearTimeout(e.A),e.A=null)}function vi(e){return e.g?e.g.readyState:0}K.aa=function(){try{return 2<vi(this)?this.g.status:-1}catch{return-1}};K.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};K.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),KM(t)}};function cv(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Ax:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}K.Ea=function(){return this.m};K.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Px(e){let t="";return Wg(e,function(n,i){t+=i,t+=":",t+=n,t+=`\r
`}),t}function rm(e,t,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=Px(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):Yt(e,t,n))}function No(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Mx(e){this.Ca=0,this.i=[],this.j=new Eh,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=No("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=No("baseRetryDelayMs",5e3,e),this.bb=No("retryDelaySeedMs",1e4,e),this.$a=No("forwardChannelMaxRetries",2,e),this.ta=No("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new xx(e&&e.concurrentRequestLimit),this.Fa=new HM,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}K=Mx.prototype;K.ma=8;K.G=1;function om(e){if(Nx(e),e.G==3){var t=e.U++,n=Ci(e.F);Yt(n,"SID",e.I),Yt(n,"RID",t),Yt(n,"TYPE","terminate"),bl(e,n),t=new ml(e,e.j,t,void 0),t.K=2,t.v=Ih(Ci(n)),n=!1,it.navigator&&it.navigator.sendBeacon&&(n=it.navigator.sendBeacon(t.v.toString(),"")),!n&&it.Image&&(new Image().src=t.v,n=!0),n||(t.g=Hx(t.l,null),t.g.da(t.v)),t.F=Date.now(),_l(t)}$x(e)}function Rh(e){e.g&&(lm(e),e.g.cancel(),e.g=null)}function Nx(e){Rh(e),e.u&&(it.clearTimeout(e.u),e.u=null),gu(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&it.clearTimeout(e.m),e.m=null)}function Dh(e){Tx(e.h)||e.m||(e.m=!0,ix(e.Ja,e),e.C=0)}function XM(e,t){return Cx(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=pl($e(e.Ja,e,t),Vx(e,e.C)),e.C++,!0)}K.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const s=new ml(this,this.j,e,void 0);let r=this.s;if(this.S&&(r?(r=YE(r),XE(r,this.S)):r=this.S),this.o!==null||this.N||(s.H=r,r=null),this.O)t:{for(var t=0,n=0;n<this.i.length;n++){e:{var i=this.i[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break e}i=void 0}if(i===void 0)break;if(t+=i,4096<t){t=n;break t}if(t===4096||n===this.i.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Lx(this,s,t),n=Ci(this.F),Yt(n,"RID",e),Yt(n,"CVER",22),this.D&&Yt(n,"X-HTTP-Session-Id",this.D),bl(this,n),r&&(this.N?t="headers="+encodeURIComponent(String(Px(r)))+"&"+t:this.o&&rm(n,this.o,r)),nm(this.h,s),this.Ya&&Yt(n,"TYPE","init"),this.O?(Yt(n,"$req",t),Yt(n,"SID","null"),s.Z=!0,Qd(s,n,null)):Qd(s,n,t),this.G=2}}else this.G==3&&(e?uv(this,e):this.i.length==0||Tx(this.h)||uv(this))};function uv(e,t){var n;t?n=t.m:n=e.U++;const i=Ci(e.F);Yt(i,"SID",e.I),Yt(i,"RID",n),Yt(i,"AID",e.T),bl(e,i),e.o&&e.s&&rm(i,e.o,e.s),n=new ml(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=Lx(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),nm(e.h,n),Qd(n,i,t)}function bl(e,t){e.ia&&Wg(e.ia,function(n,i){Yt(t,i,n)}),e.l&&yx({},function(n,i){Yt(t,i,n)})}function Lx(e,t,n){n=Math.min(e.i.length,n);var i=e.l?$e(e.l.Ra,e.l,e):null;t:{var s=e.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=s[l].h;const u=s[l].g;if(c-=r,0>c)r=Math.max(0,s[l].h-100),a=!1;else try{jM(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break t}}}return e=e.i.splice(0,n),t.D=e,i}function Fx(e){e.g||e.u||(e.Z=1,ix(e.Ia,e),e.A=0)}function am(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=pl($e(e.Ia,e),Vx(e,e.A)),e.A++,!0)}K.Ia=function(){if(this.u=null,Ux(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=pl($e(this.eb,this),e)}};K.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,qe(10),Rh(this),Ux(this))};function lm(e){e.B!=null&&(it.clearTimeout(e.B),e.B=null)}function Ux(e){e.g=new ml(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=Ci(e.sa);Yt(t,"RID","rpc"),Yt(t,"SID",e.I),Yt(t,"CI",e.L?"0":"1"),Yt(t,"AID",e.T),Yt(t,"TYPE","xmlhttp"),bl(e,t),e.o&&e.s&&rm(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Ih(Ci(t)),n.s=null,n.P=!0,px(n,e)}K.cb=function(){this.v!=null&&(this.v=null,Rh(this),am(this),qe(19))};function gu(e){e.v!=null&&(it.clearTimeout(e.v),e.v=null)}function Bx(e,t){var n=null;if(e.g==t){gu(e),lm(e),e.g=null;var i=2}else if(Zd(e.h,t))n=t.D,Sx(e.h,t),i=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(i==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var s=e.C;i=xh(),ke(i,new ux(i,n)),Dh(e)}else Fx(e);else if(s=t.o,s==3||s==0&&0<e.pa||!(i==1&&XM(e,t)||i==2&&am(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),s){case 1:Ns(e,5);break;case 4:Ns(e,10);break;case 3:Ns(e,6);break;default:Ns(e,2)}}}function Vx(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function Ns(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var i=$e(e.kb,e);n||(n=new Hs("//www.google.com/images/cleardot.gif"),it.location&&it.location.protocol=="http"||du(n,"https"),Ih(n)),WM(n.toString(),i)}else qe(2);e.G=0,e.l&&e.l.va(t),$x(e),Nx(e)}K.kb=function(e){e?(this.j.info("Successfully pinged google.com"),qe(2)):(this.j.info("Failed to ping google.com"),qe(1))};function $x(e){if(e.G=0,e.la=[],e.l){const t=Ix(e.h);(t.length!=0||e.i.length!=0)&&(Zy(e.la,t),Zy(e.la,e.i),e.h.i.length=0,Hg(e.i),e.i.length=0),e.l.ua()}}function zx(e,t,n){var i=n instanceof Hs?Ci(n):new Hs(n,void 0);if(i.g!="")t&&(i.g=t+"."+i.g),pu(i,i.m);else{var s=it.location;i=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var r=new Hs(null,void 0);i&&du(r,i),t&&(r.g=t),s&&pu(r,s),n&&(r.l=n),i=r}return n=e.D,t=e.za,n&&t&&Yt(i,n,t),Yt(i,"VER",e.ma),bl(e,i),i}function Hx(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new re(new yl({jb:!0})):new re(e.ra),t.Ka(e.H),t}function jx(){}K=jx.prototype;K.xa=function(){};K.wa=function(){};K.va=function(){};K.ua=function(){};K.Ra=function(){};function mu(){if(Xr&&!(10<=Number(dM)))throw Error("Environmental error: no available transport.")}mu.prototype.g=function(e,t){return new mn(e,t)};function mn(e,t){Ce.call(this),this.g=new Mx(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!uu(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!uu(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new To(this)}Ae(mn,Ce);mn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;qe(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=zx(e,null,e.V),Dh(e)};mn.prototype.close=function(){om(this.g)};mn.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Xg(e),e=n);t.i.push(new $M(t.ab++,e)),t.G==3&&Dh(t)};mn.prototype.M=function(){this.g.l=null,delete this.j,om(this.g),delete this.g,mn.X.M.call(this)};function Wx(e){tm.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}Ae(Wx,tm);function Kx(){em.call(this),this.status=1}Ae(Kx,em);function To(e){this.g=e}Ae(To,jx);To.prototype.xa=function(){ke(this.g,"a")};To.prototype.wa=function(e){ke(this.g,new Wx(e))};To.prototype.va=function(e){ke(this.g,new Kx)};To.prototype.ua=function(){ke(this.g,"b")};mu.prototype.createWebChannel=mu.prototype.g;mn.prototype.send=mn.prototype.u;mn.prototype.open=mn.prototype.m;mn.prototype.close=mn.prototype.close;Th.NO_ERROR=0;Th.TIMEOUT=8;Th.HTTP_ERROR=6;hx.COMPLETE="complete";fx.EventType=gl;gl.OPEN="a";gl.CLOSE="b";gl.ERROR="c";gl.MESSAGE="d";Ce.prototype.listen=Ce.prototype.N;re.prototype.listenOnce=re.prototype.O;re.prototype.getLastError=re.prototype.Oa;re.prototype.getLastErrorCode=re.prototype.Ea;re.prototype.getStatus=re.prototype.aa;re.prototype.getResponseJson=re.prototype.Sa;re.prototype.getResponseText=re.prototype.fa;re.prototype.send=re.prototype.da;re.prototype.setWithCredentials=re.prototype.Ka;var QM=function(){return new mu},JM=function(){return xh()},Mf=Th,ZM=hx,tN=lr,hv={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},eN=yl,Yl=fx,nN=re;const fv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Me.UNAUTHENTICATED=new Me(null),Me.GOOGLE_CREDENTIALS=new Me("google-credentials-uid"),Me.FIRST_PARTY=new Me("first-party-uid"),Me.MOCK_USER=new Me("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Co="9.20.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js=new rl("@firebase/firestore");function dv(){return Js.logLevel}function q(e,...t){if(Js.logLevel<=It.DEBUG){const n=t.map(cm);Js.debug(`Firestore (${Co}): ${e}`,...n)}}function Si(e,...t){if(Js.logLevel<=It.ERROR){const n=t.map(cm);Js.error(`Firestore (${Co}): ${e}`,...n)}}function _u(e,...t){if(Js.logLevel<=It.WARN){const n=t.map(cm);Js.warn(`Firestore (${Co}): ${e}`,...n)}}function cm(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(e="Unexpected state"){const t=`FIRESTORE (${Co}) INTERNAL ASSERTION FAILED: `+e;throw Si(t),new Error(t)}function Kt(e,t){e||nt()}function ct(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends Pi{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class iN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Me.UNAUTHENTICATED))}shutdown(){}}class sN{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class rN{constructor(t){this.t=t,this.currentUser=Me.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let i=this.i;const s=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let r=new Ei;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Ei,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;t.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Ei)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==t?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Kt(typeof i.accessToken=="string"),new qx(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Kt(t===null||typeof t=="string"),new Me(t)}}class oN{constructor(t,n,i){this.h=t,this.l=n,this.m=i,this.type="FirstParty",this.user=Me.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class aN{constructor(t,n,i){this.h=t,this.l=n,this.m=i}getToken(){return Promise.resolve(new oN(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(Me.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class lN{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cN{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,n){const i=r=>{r.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>i(r))};const s=r=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?s(r):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Kt(typeof n.token=="string"),this.T=n.token,new lN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uN(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let i=0;i<e;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const s=uN(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=t.charAt(s[r]%t.length))}return i}}function Rt(e,t){return e<t?-1:e>t?1:0}function Qr(e,t,n){return e.length===t.length&&e.every((i,s)=>n(i,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new J(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new J(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new J(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new J(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return fe.fromMillis(Date.now())}static fromDate(t){return fe.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*n));return new fe(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Rt(this.nanoseconds,t.nanoseconds):Rt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t){this.timestamp=t}static fromTimestamp(t){return new at(t)}static min(){return new at(new fe(0,0))}static max(){return new at(new fe(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(t,n,i){n===void 0?n=0:n>t.length&&nt(),i===void 0?i=t.length-n:i>t.length-n&&nt(),this.segments=t,this.offset=n,this.len=i}get length(){return this.len}isEqual(t){return $a.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof $a?t.forEach(i=>{n.push(i)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,i=this.limit();n<i;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const i=Math.min(t.length,n.length);for(let s=0;s<i;s++){const r=t.get(s),o=n.get(s);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class Xt extends $a{construct(t,n,i){return new Xt(t,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const i of t){if(i.indexOf("//")>=0)throw new J(D.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new Xt(n)}static emptyPath(){return new Xt([])}}const hN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Be extends $a{construct(t,n,i){return new Be(t,n,i)}static isValidIdentifier(t){return hN.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Be.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Be(["__name__"])}static fromServerFormat(t){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new J(D.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new J(D.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new J(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new J(D.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Be(n)}static emptyPath(){return new Be([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t){this.path=t}static fromPath(t){return new Z(Xt.fromString(t))}static fromName(t){return new Z(Xt.fromString(t).popFirst(5))}static empty(){return new Z(Xt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Xt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Xt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Z(new Xt(t.slice()))}}function fN(e,t){const n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,s=at.fromTimestamp(i===1e9?new fe(n+1,0):new fe(n,i));return new as(s,Z.empty(),t)}function dN(e){return new as(e.readTime,e.key,-1)}class as{constructor(t,n,i){this.readTime=t,this.documentKey=n,this.largestBatchId=i}static min(){return new as(at.min(),Z.empty(),-1)}static max(){return new as(at.max(),Z.empty(),-1)}}function pN(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=Z.comparator(e.documentKey,t.documentKey),n!==0?n:Rt(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class mN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wl(e){if(e.code!==D.FAILED_PRECONDITION||e.message!==gN)throw e;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&nt(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new P((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof P?n:P.resolve(n)}catch(n){return P.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):P.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):P.reject(n)}static resolve(t){return new P((n,i)=>{n(t)})}static reject(t){return new P((n,i)=>{i(t)})}static waitFor(t){return new P((n,i)=>{let s=0,r=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&n()},l=>i(l))}),o=!0,r===s&&n()})}static or(t){let n=P.resolve(!1);for(const i of t)n=n.next(s=>s?P.resolve(s):i());return n}static forEach(t,n){const i=[];return t.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}static mapArray(t,n){return new P((i,s)=>{const r=t.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(t[c]).next(u=>{o[c]=u,++a,a===r&&i(o)},u=>s(u))}})}static doWhile(t,n){return new P((i,s)=>{const r=()=>{t()===!0?n().next(()=>{r()},s):i()};r()})}}function El(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class um{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=i=>this.ot(i),this.ut=i=>n.writeSequenceNumber(i))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}um.ct=-1;function Oh(e){return e==null}function yu(e){return e===0&&1/e==-1/0}function _N(e){return typeof e=="number"&&Number.isInteger(e)&&!yu(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function cr(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Yx(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(t,n){this.comparator=t,this.root=n||Se.EMPTY}insert(t,n){return new _e(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Se.BLACK,null,null))}remove(t){return new _e(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Se.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(t){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,i)=>(t(n,i),!1))}toString(){const t=[];return this.inorderTraversal((n,i)=>(t.push(`${n}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Xl(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Xl(this.root,t,this.comparator,!1)}getReverseIterator(){return new Xl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Xl(this.root,t,this.comparator,!0)}}class Xl{constructor(t,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?i(t.key,n):1,n&&s&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Se{constructor(t,n,i,s,r){this.key=t,this.value=n,this.color=i??Se.RED,this.left=s??Se.EMPTY,this.right=r??Se.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,i,s,r){return new Se(t??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,i){let s=this;const r=i(t,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(t,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Se.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let i,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return Se.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw nt();const t=this.left.check();if(t!==this.right.check())throw nt();return t+(this.isRed()?0:1)}}Se.EMPTY=null,Se.RED=!0,Se.BLACK=!1;Se.EMPTY=new class{constructor(){this.size=0}get key(){throw nt()}get value(){throw nt()}get color(){throw nt()}get left(){throw nt()}get right(){throw nt()}copy(e,t,n,i,s){return this}insert(e,t,n){return new Se(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(t){this.comparator=t,this.data=new _e(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,i)=>(t(n),!1))}forEachInRange(t,n){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new gv(this.data.getIterator())}getIteratorFrom(t){return new gv(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(i=>{n=n.add(i)}),n}isEqual(t){if(!(t instanceof ge)||this.size!==t.size)return!1;const n=this.data.getIterator(),i=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new ge(this.comparator);return n.data=t,n}}class gv{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(t){this.fields=t,t.sort(Be.comparator)}static empty(){return new Nn([])}unionWith(t){let n=new ge(Be.comparator);for(const i of this.fields)n=n.add(i);for(const i of t)n=n.add(i);return new Nn(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Qr(this.fields,t.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class yN extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new yN("Invalid base64 string: "+s):s}}(t);return new He(n)}static fromUint8Array(t){const n=function(i){let s="";for(let r=0;r<i.length;++r)s+=String.fromCharCode(i[r]);return s}(t);return new He(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Rt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}He.EMPTY_BYTE_STRING=new He("");const vN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ls(e){if(Kt(!!e),typeof e=="string"){let t=0;const n=vN.exec(e);if(Kt(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:ue(e.seconds),nanos:ue(e.nanos)}}function ue(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Jr(e){return typeof e=="string"?He.fromBase64String(e):He.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xx(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Qx(e){const t=e.mapValue.fields.__previous_value__;return Xx(t)?Qx(t):t}function za(e){const t=ls(e.mapValue.fields.__local_write_time__.timestampValue);return new fe(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(t,n,i,s,r,o,a,l){this.databaseId=t,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Ha{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Ha("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ha&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Zs(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Xx(e)?4:wN(e)?9007199254740991:10:nt()}function ai(e,t){if(e===t)return!0;const n=Zs(e);if(n!==Zs(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return za(e).isEqual(za(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const r=ls(i.timestampValue),o=ls(s.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return Jr(i.bytesValue).isEqual(Jr(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return ue(i.geoPointValue.latitude)===ue(s.geoPointValue.latitude)&&ue(i.geoPointValue.longitude)===ue(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ue(i.integerValue)===ue(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const r=ue(i.doubleValue),o=ue(s.doubleValue);return r===o?yu(r)===yu(o):isNaN(r)&&isNaN(o)}return!1}(e,t);case 9:return Qr(e.arrayValue.values||[],t.arrayValue.values||[],ai);case 10:return function(i,s){const r=i.mapValue.fields||{},o=s.mapValue.fields||{};if(pv(r)!==pv(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!ai(r[a],o[a])))return!1;return!0}(e,t);default:return nt()}}function ja(e,t){return(e.values||[]).find(n=>ai(n,t))!==void 0}function Zr(e,t){if(e===t)return 0;const n=Zs(e),i=Zs(t);if(n!==i)return Rt(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Rt(e.booleanValue,t.booleanValue);case 2:return function(s,r){const o=ue(s.integerValue||s.doubleValue),a=ue(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return mv(e.timestampValue,t.timestampValue);case 4:return mv(za(e),za(t));case 5:return Rt(e.stringValue,t.stringValue);case 6:return function(s,r){const o=Jr(s),a=Jr(r);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(s,r){const o=s.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=Rt(o[l],a[l]);if(c!==0)return c}return Rt(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,r){const o=Rt(ue(s.latitude),ue(r.latitude));return o!==0?o:Rt(ue(s.longitude),ue(r.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,r){const o=s.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Zr(o[l],a[l]);if(c)return c}return Rt(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,r){if(s===Ql.mapValue&&r===Ql.mapValue)return 0;if(s===Ql.mapValue)return 1;if(r===Ql.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=Rt(a[u],c[u]);if(h!==0)return h;const f=Zr(o[a[u]],l[c[u]]);if(f!==0)return f}return Rt(a.length,c.length)}(e.mapValue,t.mapValue);default:throw nt()}}function mv(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return Rt(e,t);const n=ls(e),i=ls(t),s=Rt(n.seconds,i.seconds);return s!==0?s:Rt(n.nanos,i.nanos)}function to(e){return tp(e)}function tp(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(i){const s=ls(i);return`time(${s.seconds},${s.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Jr(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,Z.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(i){let s="[",r=!0;for(const o of i.values||[])r?r=!1:s+=",",s+=tp(o);return s+"]"}(e.arrayValue):"mapValue"in e?function(i){const s=Object.keys(i.fields||{}).sort();let r="{",o=!0;for(const a of s)o?o=!1:r+=",",r+=`${a}:${tp(i.fields[a])}`;return r+"}"}(e.mapValue):nt();var t,n}function ep(e){return!!e&&"integerValue"in e}function hm(e){return!!e&&"arrayValue"in e}function _v(e){return!!e&&"nullValue"in e}function yv(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Oc(e){return!!e&&"mapValue"in e}function ua(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return cr(e.mapValue.fields,(n,i)=>t.mapValue.fields[n]=ua(i)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ua(e.arrayValue.values[n]);return t}return Object.assign({},e)}function wN(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(t){this.value=t}static empty(){return new hn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let i=0;i<t.length-1;++i)if(n=(n.mapValue.fields||{})[t.get(i)],!Oc(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=ua(n)}setAll(t){let n=Be.emptyPath(),i={},s=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,s),i={},s=[],n=a.popLast()}o?i[a.lastSegment()]=ua(o):s.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(t){const n=this.field(t.popLast());Oc(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return ai(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<t.length;++i){let s=n.mapValue.fields[t.get(i)];Oc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,i){cr(n,(s,r)=>t[s]=r);for(const s of i)delete t[s]}clone(){return new hn(ua(this.value))}}function Jx(e){const t=[];return cr(e.fields,(n,i)=>{const s=new Be([n]);if(Oc(i)){const r=Jx(i.mapValue).fields;if(r.length===0)t.push(s);else for(const o of r)t.push(s.child(o))}else t.push(s)}),new Nn(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(t,n,i,s,r,o,a){this.key=t,this.documentType=n,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Fe(t,0,at.min(),at.min(),at.min(),hn.empty(),0)}static newFoundDocument(t,n,i,s){return new Fe(t,1,n,at.min(),i,s,0)}static newNoDocument(t,n){return new Fe(t,2,n,at.min(),at.min(),hn.empty(),0)}static newUnknownDocument(t,n){return new Fe(t,3,n,at.min(),at.min(),hn.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(at.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=hn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=hn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=at.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Fe&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Fe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class vu{constructor(t,n){this.position=t,this.inclusive=n}}function vv(e,t,n){let i=0;for(let s=0;s<e.position.length;s++){const r=t[s],o=e.position[s];if(r.field.isKeyField()?i=Z.comparator(Z.fromName(o.referenceValue),n.key):i=Zr(o,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function bv(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ai(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class ha{constructor(t,n="asc"){this.field=t,this.dir=n}}function EN(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class Zx{}class de extends Zx{constructor(t,n,i){super(),this.field=t,this.op=n,this.value=i}static create(t,n,i){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,i):new TN(t,n,i):n==="array-contains"?new IN(t,i):n==="in"?new kN(t,i):n==="not-in"?new AN(t,i):n==="array-contains-any"?new RN(t,i):new de(t,n,i)}static createKeyFieldInFilter(t,n,i){return n==="in"?new CN(t,i):new SN(t,i)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Zr(n,this.value)):n!==null&&Zs(this.value)===Zs(n)&&this.matchesComparison(Zr(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return nt()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class li extends Zx{constructor(t,n){super(),this.filters=t,this.op=n,this.ht=null}static create(t,n){return new li(t,n)}matches(t){return tT(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt(n=>n.isInequality());return t!==null?t.field:null}lt(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function tT(e){return e.op==="and"}function eT(e){return xN(e)&&tT(e)}function xN(e){for(const t of e.filters)if(t instanceof li)return!1;return!0}function np(e){if(e instanceof de)return e.field.canonicalString()+e.op.toString()+to(e.value);if(eT(e))return e.filters.map(t=>np(t)).join(",");{const t=e.filters.map(n=>np(n)).join(",");return`${e.op}(${t})`}}function nT(e,t){return e instanceof de?function(n,i){return i instanceof de&&n.op===i.op&&n.field.isEqual(i.field)&&ai(n.value,i.value)}(e,t):e instanceof li?function(n,i){return i instanceof li&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((s,r,o)=>s&&nT(r,i.filters[o]),!0):!1}(e,t):void nt()}function iT(e){return e instanceof de?function(t){return`${t.field.canonicalString()} ${t.op} ${to(t.value)}`}(e):e instanceof li?function(t){return t.op.toString()+" {"+t.getFilters().map(iT).join(" ,")+"}"}(e):"Filter"}class TN extends de{constructor(t,n,i){super(t,n,i),this.key=Z.fromName(i.referenceValue)}matches(t){const n=Z.comparator(t.key,this.key);return this.matchesComparison(n)}}class CN extends de{constructor(t,n){super(t,"in",n),this.keys=sT("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class SN extends de{constructor(t,n){super(t,"not-in",n),this.keys=sT("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function sT(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>Z.fromName(i.referenceValue))}class IN extends de{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return hm(n)&&ja(n.arrayValue,this.value)}}class kN extends de{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&ja(this.value.arrayValue,n)}}class AN extends de{constructor(t,n){super(t,"not-in",n)}matches(t){if(ja(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!ja(this.value.arrayValue,n)}}class RN extends de{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!hm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>ja(this.value.arrayValue,i))}}/**
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
 */class DN{constructor(t,n=null,i=[],s=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function wv(e,t=null,n=[],i=[],s=null,r=null,o=null){return new DN(e,t,n,i,s,r,o)}function fm(e){const t=ct(e);if(t.ft===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(i=>np(i)).join(","),n+="|ob:",n+=t.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),Oh(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>to(i)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>to(i)).join(",")),t.ft=n}return t.ft}function dm(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!EN(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!nT(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!bv(e.startAt,t.startAt)&&bv(e.endAt,t.endAt)}function ip(e){return Z.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(t,n=null,i=[],s=[],r=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this.wt=null,this.startAt,this.endAt}}function ON(e,t,n,i,s,r,o,a){return new Ph(e,t,n,i,s,r,o,a)}function Mh(e){return new Ph(e)}function Ev(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function PN(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function MN(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function NN(e){return e.collectionGroup!==null}function Fr(e){const t=ct(e);if(t.dt===null){t.dt=[];const n=MN(t),i=PN(t);if(n!==null&&i===null)n.isKeyField()||t.dt.push(new ha(n)),t.dt.push(new ha(Be.keyField(),"asc"));else{let s=!1;for(const r of t.explicitOrderBy)t.dt.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new ha(Be.keyField(),r))}}}return t.dt}function Ii(e){const t=ct(e);if(!t.wt)if(t.limitType==="F")t.wt=wv(t.path,t.collectionGroup,Fr(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const r of Fr(t)){const o=r.dir==="desc"?"asc":"desc";n.push(new ha(r.field,o))}const i=t.endAt?new vu(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new vu(t.startAt.position,t.startAt.inclusive):null;t.wt=wv(t.path,t.collectionGroup,n,t.filters,t.limit,i,s)}return t.wt}function sp(e,t,n){return new Ph(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Nh(e,t){return dm(Ii(e),Ii(t))&&e.limitType===t.limitType}function rT(e){return`${fm(Ii(e))}|lt:${e.limitType}`}function rp(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(i=>iT(i)).join(", ")}]`),Oh(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>to(i)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>to(i)).join(",")),`Target(${n})`}(Ii(e))}; limitType=${e.limitType})`}function Lh(e,t){return t.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):Z.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(e,t)&&function(n,i){for(const s of Fr(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(n,i){return!(n.startAt&&!function(s,r,o){const a=vv(s,r,o);return s.inclusive?a<=0:a<0}(n.startAt,Fr(n),i)||n.endAt&&!function(s,r,o){const a=vv(s,r,o);return s.inclusive?a>=0:a>0}(n.endAt,Fr(n),i))}(e,t)}function LN(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function oT(e){return(t,n)=>{let i=!1;for(const s of Fr(e)){const r=FN(s,t,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function FN(e,t,n){const i=e.field.isKeyField()?Z.comparator(t.key,n.key):function(s,r,o){const a=r.data.field(s),l=o.data.field(s);return a!==null&&l!==null?Zr(a,l):nt()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return nt()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return this.inner[i]=[[t,n]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return void(s[r]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(t){cr(this.inner,(n,i)=>{for(const[s,r]of i)t(s,r)})}isEmpty(){return Yx(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UN=new _e(Z.comparator);function ki(){return UN}const aT=new _e(Z.comparator);function qo(...e){let t=aT;for(const n of e)t=t.insert(n.key,n);return t}function lT(e){let t=aT;return e.forEach((n,i)=>t=t.insert(n,i.overlayedDocument)),t}function Ls(){return fa()}function cT(){return fa()}function fa(){return new So(e=>e.toString(),(e,t)=>e.isEqual(t))}const BN=new _e(Z.comparator),VN=new ge(Z.comparator);function mt(...e){let t=VN;for(const n of e)t=t.add(n);return t}const $N=new ge(Rt);function uT(){return $N}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hT(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yu(t)?"-0":t}}function fT(e){return{integerValue:""+e}}function zN(e,t){return _N(t)?fT(t):hT(e,t)}/**
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
 */class Fh{constructor(){this._=void 0}}function HN(e,t,n){return e instanceof bu?function(i,s){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&(r.fields.__previous_value__=s),{mapValue:r}}(n,t):e instanceof Wa?pT(e,t):e instanceof Ka?gT(e,t):function(i,s){const r=dT(i,s),o=xv(r)+xv(i._t);return ep(r)&&ep(i._t)?fT(o):hT(i.serializer,o)}(e,t)}function jN(e,t,n){return e instanceof Wa?pT(e,t):e instanceof Ka?gT(e,t):n}function dT(e,t){return e instanceof wu?ep(n=t)||function(i){return!!i&&"doubleValue"in i}(n)?t:{integerValue:0}:null;var n}class bu extends Fh{}class Wa extends Fh{constructor(t){super(),this.elements=t}}function pT(e,t){const n=mT(t);for(const i of e.elements)n.some(s=>ai(s,i))||n.push(i);return{arrayValue:{values:n}}}class Ka extends Fh{constructor(t){super(),this.elements=t}}function gT(e,t){let n=mT(t);for(const i of e.elements)n=n.filter(s=>!ai(s,i));return{arrayValue:{values:n}}}class wu extends Fh{constructor(t,n){super(),this.serializer=t,this._t=n}}function xv(e){return ue(e.integerValue||e.doubleValue)}function mT(e){return hm(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function WN(e,t){return e.field.isEqual(t.field)&&function(n,i){return n instanceof Wa&&i instanceof Wa||n instanceof Ka&&i instanceof Ka?Qr(n.elements,i.elements,ai):n instanceof wu&&i instanceof wu?ai(n._t,i._t):n instanceof bu&&i instanceof bu}(e.transform,t.transform)}class KN{constructor(t,n){this.version=t,this.transformResults=n}}class xi{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new xi}static exists(t){return new xi(void 0,t)}static updateTime(t){return new xi(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Pc(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Uh{}function _T(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new vT(e.key,xi.none()):new Bh(e.key,e.data,xi.none());{const n=e.data,i=hn.empty();let s=new ge(Be.comparator);for(let r of t.fields)if(!s.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new ur(e.key,i,new Nn(s.toArray()),xi.none())}}function qN(e,t,n){e instanceof Bh?function(i,s,r){const o=i.value.clone(),a=Cv(i.fieldTransforms,s,r.transformResults);o.setAll(a),s.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,n):e instanceof ur?function(i,s,r){if(!Pc(i.precondition,s))return void s.convertToUnknownDocument(r.version);const o=Cv(i.fieldTransforms,s,r.transformResults),a=s.data;a.setAll(yT(i)),a.setAll(o),s.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(e,t,n):function(i,s,r){s.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,n)}function da(e,t,n,i){return e instanceof Bh?function(s,r,o,a){if(!Pc(s.precondition,r))return o;const l=s.value.clone(),c=Sv(s.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(e,t,n,i):e instanceof ur?function(s,r,o,a){if(!Pc(s.precondition,r))return o;const l=Sv(s.fieldTransforms,a,r),c=r.data;return c.setAll(yT(s)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(e,t,n,i):function(s,r,o){return Pc(s.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(e,t,n)}function GN(e,t){let n=null;for(const i of e.fieldTransforms){const s=t.data.field(i.field),r=dT(i.transform,s||null);r!=null&&(n===null&&(n=hn.empty()),n.set(i.field,r))}return n||null}function Tv(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Qr(n,i,(s,r)=>WN(s,r))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Bh extends Uh{constructor(t,n,i,s=[]){super(),this.key=t,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ur extends Uh{constructor(t,n,i,s,r=[]){super(),this.key=t,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function yT(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}}),t}function Cv(e,t,n){const i=new Map;Kt(e.length===n.length);for(let s=0;s<n.length;s++){const r=e[s],o=r.transform,a=t.data.field(r.field);i.set(r.field,jN(o,a,n[s]))}return i}function Sv(e,t,n){const i=new Map;for(const s of e){const r=s.transform,o=n.data.field(s.field);i.set(s.field,HN(r,o,t))}return i}class vT extends Uh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class YN extends Uh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(t,n,i,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(t,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(t.key)&&qN(r,t,i[s])}}applyToLocalView(t,n){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(n=da(i,t,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(n=da(i,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const i=cT();return this.mutations.forEach(s=>{const r=t.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(s.key)?null:a;const l=_T(o,a);l!==null&&i.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(at.min())}),i}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),mt())}isEqual(t){return this.batchId===t.batchId&&Qr(this.mutations,t.mutations,(n,i)=>Tv(n,i))&&Qr(this.baseMutations,t.baseMutations,(n,i)=>Tv(n,i))}}class pm{constructor(t,n,i,s){this.batch=t,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(t,n,i){Kt(t.mutations.length===i.length);let s=BN;const r=t.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new pm(t,n,i,s)}}/**
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
 */class QN{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class JN{constructor(t){this.count=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce,bt;function ZN(e){switch(e){default:return nt();case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0}}function bT(e){if(e===void 0)return Si("GRPC error has no .code"),D.UNKNOWN;switch(e){case ce.OK:return D.OK;case ce.CANCELLED:return D.CANCELLED;case ce.UNKNOWN:return D.UNKNOWN;case ce.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case ce.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case ce.INTERNAL:return D.INTERNAL;case ce.UNAVAILABLE:return D.UNAVAILABLE;case ce.UNAUTHENTICATED:return D.UNAUTHENTICATED;case ce.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case ce.NOT_FOUND:return D.NOT_FOUND;case ce.ALREADY_EXISTS:return D.ALREADY_EXISTS;case ce.PERMISSION_DENIED:return D.PERMISSION_DENIED;case ce.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case ce.ABORTED:return D.ABORTED;case ce.OUT_OF_RANGE:return D.OUT_OF_RANGE;case ce.UNIMPLEMENTED:return D.UNIMPLEMENTED;case ce.DATA_LOSS:return D.DATA_LOSS;default:return nt()}}(bt=ce||(ce={}))[bt.OK=0]="OK",bt[bt.CANCELLED=1]="CANCELLED",bt[bt.UNKNOWN=2]="UNKNOWN",bt[bt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",bt[bt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",bt[bt.NOT_FOUND=5]="NOT_FOUND",bt[bt.ALREADY_EXISTS=6]="ALREADY_EXISTS",bt[bt.PERMISSION_DENIED=7]="PERMISSION_DENIED",bt[bt.UNAUTHENTICATED=16]="UNAUTHENTICATED",bt[bt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",bt[bt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",bt[bt.ABORTED=10]="ABORTED",bt[bt.OUT_OF_RANGE=11]="OUT_OF_RANGE",bt[bt.UNIMPLEMENTED=12]="UNIMPLEMENTED",bt[bt.INTERNAL=13]="INTERNAL",bt[bt.UNAVAILABLE=14]="UNAVAILABLE",bt[bt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class gm{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Jl}static getOrCreateInstance(){return Jl===null&&(Jl=new gm),Jl}onExistenceFilterMismatch(t){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,t),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(t))}}let Jl=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(t,n,i,s,r){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,n,i){const s=new Map;return s.set(t,xl.createSynthesizedTargetChangeForCurrentChange(t,n,i)),new Vh(at.min(),s,uT(),ki(),mt())}}class xl{constructor(t,n,i,s,r){this.resumeToken=t,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,n,i){return new xl(i,n,mt(),mt(),mt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(t,n,i,s){this.It=t,this.removedTargetIds=n,this.key=i,this.Tt=s}}class wT{constructor(t,n){this.targetId=t,this.Et=n}}class ET{constructor(t,n,i=He.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=i,this.cause=s}}class Iv{constructor(){this.At=0,this.Rt=Av(),this.vt=He.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(t){t.approximateByteSize()>0&&(this.Pt=!0,this.vt=t)}Ct(){let t=mt(),n=mt(),i=mt();return this.Rt.forEach((s,r)=>{switch(r){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:nt()}}),new xl(this.vt,this.bt,t,n,i)}xt(){this.Pt=!1,this.Rt=Av()}Nt(t,n){this.Pt=!0,this.Rt=this.Rt.insert(t,n)}kt(t){this.Pt=!0,this.Rt=this.Rt.remove(t)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class tL{constructor(t){this.Ft=t,this.Bt=new Map,this.Lt=ki(),this.qt=kv(),this.Ut=new ge(Rt)}Kt(t){for(const n of t.It)t.Tt&&t.Tt.isFoundDocument()?this.Gt(n,t.Tt):this.Qt(n,t.key,t.Tt);for(const n of t.removedTargetIds)this.Qt(n,t.key,t.Tt)}zt(t){this.forEachTarget(t,n=>{const i=this.jt(n);switch(t.state){case 0:this.Wt(n)&&i.Dt(t.resumeToken);break;case 1:i.$t(),i.Vt||i.xt(),i.Dt(t.resumeToken);break;case 2:i.$t(),i.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(i.Mt(),i.Dt(t.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),i.Dt(t.resumeToken));break;default:nt()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Bt.forEach((i,s)=>{this.Wt(s)&&n(s)})}Jt(t){var n;const i=t.targetId,s=t.Et.count,r=this.Yt(i);if(r){const o=r.target;if(ip(o))if(s===0){const a=new Z(o.path);this.Qt(i,a,Fe.newNoDocument(a,at.min()))}else Kt(s===1);else{const a=this.Zt(i);a!==s&&(this.Ht(i),this.Ut=this.Ut.add(i),(n=gm.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:t.Et.count}))}}}Xt(t){const n=new Map;this.Bt.forEach((r,o)=>{const a=this.Yt(o);if(a){if(r.current&&ip(a.target)){const l=new Z(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,Fe.newNoDocument(l,t))}r.St&&(n.set(o,r.Ct()),r.xt())}});let i=mt();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Yt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(i=i.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(t));const s=new Vh(t,n,this.Ut,this.Lt,i);return this.Lt=ki(),this.qt=kv(),this.Ut=new ge(Rt),s}Gt(t,n){if(!this.Wt(t))return;const i=this.te(t,n.key)?2:0;this.jt(t).Nt(n.key,i),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(t))}Qt(t,n,i){if(!this.Wt(t))return;const s=this.jt(t);this.te(t,n)?s.Nt(n,1):s.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(t)),i&&(this.Lt=this.Lt.insert(n,i))}removeTarget(t){this.Bt.delete(t)}Zt(t){const n=this.jt(t).Ct();return this.Ft.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ot(t){this.jt(t).Ot()}jt(t){let n=this.Bt.get(t);return n||(n=new Iv,this.Bt.set(t,n)),n}ee(t){let n=this.qt.get(t);return n||(n=new ge(Rt),this.qt=this.qt.insert(t,n)),n}Wt(t){const n=this.Yt(t)!==null;return n||q("WatchChangeAggregator","Detected inactive target",t),n}Yt(t){const n=this.Bt.get(t);return n&&n.Vt?null:this.Ft.ne(t)}Ht(t){this.Bt.set(t,new Iv),this.Ft.getRemoteKeysForTarget(t).forEach(n=>{this.Qt(t,n,null)})}te(t,n){return this.Ft.getRemoteKeysForTarget(t).has(n)}}function kv(){return new _e(Z.comparator)}function Av(){return new _e(Z.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eL=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),nL=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),iL=(()=>({and:"AND",or:"OR"}))();class sL{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Eu(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function xT(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function rL(e,t){return Eu(e,t.toTimestamp())}function ei(e){return Kt(!!e),at.fromTimestamp(function(t){const n=ls(t);return new fe(n.seconds,n.nanos)}(e))}function mm(e,t){return function(n){return new Xt(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function TT(e){const t=Xt.fromString(e);return Kt(kT(t)),t}function op(e,t){return mm(e.databaseId,t.path)}function Nf(e,t){const n=TT(t);if(n.get(1)!==e.databaseId.projectId)throw new J(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new J(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Z(CT(n))}function ap(e,t){return mm(e.databaseId,t)}function oL(e){const t=TT(e);return t.length===4?Xt.emptyPath():CT(t)}function lp(e){return new Xt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function CT(e){return Kt(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Rv(e,t,n){return{name:op(e,t),fields:n.value.mapValue.fields}}function aL(e,t){let n;if("targetChange"in t){t.targetChange;const i=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:nt()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],r=function(l,c){return l.useProto3Json?(Kt(c===void 0||typeof c=="string"),He.fromBase64String(c||"")):(Kt(c===void 0||c instanceof Uint8Array),He.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(l){const c=l.code===void 0?D.UNKNOWN:bT(l.code);return new J(c,l.message||"")}(o);n=new ET(i,s,r,a||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const s=Nf(e,i.document.name),r=ei(i.document.updateTime),o=i.document.createTime?ei(i.document.createTime):at.min(),a=new hn({mapValue:{fields:i.document.fields}}),l=Fe.newFoundDocument(s,r,o,a),c=i.targetIds||[],u=i.removedTargetIds||[];n=new Mc(c,u,l.key,l)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const s=Nf(e,i.document),r=i.readTime?ei(i.readTime):at.min(),o=Fe.newNoDocument(s,r),a=i.removedTargetIds||[];n=new Mc([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const s=Nf(e,i.document),r=i.removedTargetIds||[];n=new Mc([],r,s,null)}else{if(!("filter"in t))return nt();{t.filter;const i=t.filter;i.targetId;const s=i.count||0,r=new JN(s),o=i.targetId;n=new wT(o,r)}}return n}function lL(e,t){let n;if(t instanceof Bh)n={update:Rv(e,t.key,t.value)};else if(t instanceof vT)n={delete:op(e,t.key)};else if(t instanceof ur)n={update:Rv(e,t.key,t.data),updateMask:_L(t.fieldMask)};else{if(!(t instanceof YN))return nt();n={verify:op(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(i=>function(s,r){const o=r.transform;if(o instanceof bu)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Wa)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ka)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof wu)return{fieldPath:r.field.canonicalString(),increment:o._t};throw nt()}(0,i))),t.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:rL(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:nt()}(e,t.precondition)),n}function cL(e,t){return e&&e.length>0?(Kt(t!==void 0),e.map(n=>function(i,s){let r=i.updateTime?ei(i.updateTime):ei(s);return r.isEqual(at.min())&&(r=ei(s)),new KN(r,i.transformResults||[])}(n,t))):[]}function uL(e,t){return{documents:[ap(e,t.path)]}}function hL(e,t){const n={structuredQuery:{}},i=t.path;t.collectionGroup!==null?(n.parent=ap(e,i),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=ap(e,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(l){if(l.length!==0)return IT(li.create(l,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const r=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:Er(u.field),direction:pL(u.dir)}}(c))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(l,c){return l.useProto3Json||Oh(c)?c:{value:c}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(t.endAt)),n}function fL(e){let t=oL(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){Kt(i===1);const u=n.from[0];u.allDescendants?s=u.collectionId:t=t.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=ST(u);return h instanceof li&&eT(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new ha(xr(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Oh(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,f=u.values||[];return new vu(f,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,f=u.values||[];return new vu(f,h)}(n.endAt)),ON(t,s,o,r,a,"F",l,c)}function dL(e,t){const n=function(i,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return nt()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function ST(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=xr(t.unaryFilter.field);return de.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=xr(t.unaryFilter.field);return de.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=xr(t.unaryFilter.field);return de.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=xr(t.unaryFilter.field);return de.create(r,"!=",{nullValue:"NULL_VALUE"});default:return nt()}}(e):e.fieldFilter!==void 0?function(t){return de.create(xr(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return nt()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return li.create(t.compositeFilter.filters.map(n=>ST(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return nt()}}(t.compositeFilter.op))}(e):nt()}function pL(e){return eL[e]}function gL(e){return nL[e]}function mL(e){return iL[e]}function Er(e){return{fieldPath:e.canonicalString()}}function xr(e){return Be.fromServerFormat(e.fieldPath)}function IT(e){return e instanceof de?function(t){if(t.op==="=="){if(yv(t.value))return{unaryFilter:{field:Er(t.field),op:"IS_NAN"}};if(_v(t.value))return{unaryFilter:{field:Er(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(yv(t.value))return{unaryFilter:{field:Er(t.field),op:"IS_NOT_NAN"}};if(_v(t.value))return{unaryFilter:{field:Er(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Er(t.field),op:gL(t.op),value:t.value}}}(e):e instanceof li?function(t){const n=t.getFilters().map(i=>IT(i));return n.length===1?n[0]:{compositeFilter:{op:mL(t.op),filters:n}}}(e):nt()}function _L(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function kT(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(t,n,i,s,r=at.min(),o=at.min(),a=He.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new js(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new js(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new js(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yL{constructor(t){this.se=t}}function vL(e){const t=fL({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?sp(t,t.limit,"L"):t}/**
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
 */class bL{constructor(){this.He=new wL}addToCollectionParentIndex(t,n){return this.He.add(n),P.resolve()}getCollectionParents(t,n){return P.resolve(this.He.getEntries(n))}addFieldIndex(t,n){return P.resolve()}deleteFieldIndex(t,n){return P.resolve()}getDocumentsMatchingTarget(t,n){return P.resolve(null)}getIndexType(t,n){return P.resolve(0)}getFieldIndexes(t,n){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,n){return P.resolve(as.min())}getMinOffsetFromCollectionGroup(t,n){return P.resolve(as.min())}updateCollectionGroup(t,n,i){return P.resolve()}updateIndexEntries(t,n){return P.resolve()}}class wL{constructor(){this.index={}}add(t){const n=t.lastSegment(),i=t.popLast(),s=this.index[n]||new ge(Xt.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(t){const n=t.lastSegment(),i=t.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(t){return(this.index[t]||new ge(Xt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(t){this.Rn=t}next(){return this.Rn+=2,this.Rn}static vn(){return new eo(0)}static bn(){return new eo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EL{constructor(){this.changes=new So(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Fe.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?P.resolve(i):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class xL{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TL{constructor(t,n,i,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(t,n){let i=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(i=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(i!==null&&da(i.mutation,s,Nn.empty(),fe.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(i=>this.getLocalViewOfDocuments(t,i,mt()).next(()=>i))}getLocalViewOfDocuments(t,n,i=mt()){const s=Ls();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,i).next(r=>{let o=qo();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const i=Ls();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,mt()))}populateOverlays(t,n,i){const s=[];return i.forEach(r=>{n.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(t,s).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,i,s){let r=ki();const o=fa(),a=fa();return n.forEach((l,c)=>{const u=i.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof ur)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),da(u.mutation,c,u.mutation.getFieldMask(),fe.now())):o.set(c.key,Nn.empty())}),this.recalculateAndSaveOverlays(t,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new xL(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const i=fa();let s=new _e((o,a)=>o-a),r=mt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=i.get(l)||Nn.empty();u=a.applyToLocalView(c,u),i.set(l,u);const h=(s.get(a.batchId)||mt()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=cT();u.forEach(f=>{if(!r.has(f)){const d=_T(n.get(f),i.get(f));d!==null&&h.set(f,d),r=r.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,h))}return P.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,n,i){return function(s){return Z.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):NN(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,i):this.getDocumentsMatchingCollectionQuery(t,n,i)}getNextDocuments(t,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,i.largestBatchId,s-r.size):P.resolve(Ls());let a=-1,l=r;return o.next(c=>P.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?P.resolve():this.remoteDocumentCache.getEntry(t,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(t,c,r)).next(()=>this.computeViews(t,l,c,mt())).next(u=>({batchId:a,changes:lT(u)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new Z(n)).next(i=>{let s=qo();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,i){const s=n.collectionGroup;let r=qo();return this.indexManager.getCollectionParents(t,s).next(o=>P.forEach(o,a=>{const l=function(c,u){return new Ph(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(t,l,i).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(t,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,i.largestBatchId).next(r=>(s=r,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,i,s))).next(r=>{s.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,Fe.newInvalidDocument(c)))});let o=qo();return r.forEach((a,l)=>{const c=s.get(a);c!==void 0&&da(c.mutation,l,Nn.empty(),fe.now()),Lh(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CL{constructor(t){this.serializer=t,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(t,n){return P.resolve(this.Zn.get(n))}saveBundleMetadata(t,n){var i;return this.Zn.set(n.id,{id:(i=n).id,version:i.version,createTime:ei(i.createTime)}),P.resolve()}getNamedQuery(t,n){return P.resolve(this.Xn.get(n))}saveNamedQuery(t,n){return this.Xn.set(n.name,function(i){return{name:i.name,query:vL(i.bundledQuery),readTime:ei(i.readTime)}}(n)),P.resolve()}}/**
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
 */class SL{constructor(){this.overlays=new _e(Z.comparator),this.ts=new Map}getOverlay(t,n){return P.resolve(this.overlays.get(n))}getOverlays(t,n){const i=Ls();return P.forEach(n,s=>this.getOverlay(t,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(t,n,i){return i.forEach((s,r)=>{this.re(t,n,r)}),P.resolve()}removeOverlaysForBatchId(t,n,i){const s=this.ts.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.ts.delete(i)),P.resolve()}getOverlaysForCollection(t,n,i){const s=Ls(),r=n.length+1,o=new Z(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>i&&s.set(l.getKey(),l)}return P.resolve(s)}getOverlaysForCollectionGroup(t,n,i,s){let r=new _e((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>i){let u=r.get(c.largestBatchId);u===null&&(u=Ls(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Ls(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return P.resolve(a)}re(t,n,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.ts.get(s.largestBatchId).delete(i.key);this.ts.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new QN(n,i));let r=this.ts.get(n);r===void 0&&(r=mt(),this.ts.set(n,r)),this.ts.set(n,r.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(){this.es=new ge(we.ns),this.ss=new ge(we.rs)}isEmpty(){return this.es.isEmpty()}addReference(t,n){const i=new we(t,n);this.es=this.es.add(i),this.ss=this.ss.add(i)}os(t,n){t.forEach(i=>this.addReference(i,n))}removeReference(t,n){this.us(new we(t,n))}cs(t,n){t.forEach(i=>this.removeReference(i,n))}hs(t){const n=new Z(new Xt([])),i=new we(n,t),s=new we(n,t+1),r=[];return this.ss.forEachInRange([i,s],o=>{this.us(o),r.push(o.key)}),r}ls(){this.es.forEach(t=>this.us(t))}us(t){this.es=this.es.delete(t),this.ss=this.ss.delete(t)}fs(t){const n=new Z(new Xt([])),i=new we(n,t),s=new we(n,t+1);let r=mt();return this.ss.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new we(t,0),i=this.es.firstAfterOrEqual(n);return i!==null&&t.isEqual(i.key)}}class we{constructor(t,n){this.key=t,this.ds=n}static ns(t,n){return Z.comparator(t.key,n.key)||Rt(t.ds,n.ds)}static rs(t,n){return Rt(t.ds,n.ds)||Z.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IL{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new ge(we.ns)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,i,s){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new XN(r,n,i,s);this.mutationQueue.push(o);for(const a of s)this._s=this._s.add(new we(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return P.resolve(o)}lookupMutationBatch(t,n){return P.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(t,n){const i=n+1,s=this.ys(i),r=s<0?0:s;return P.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const i=new we(n,0),s=new we(n,Number.POSITIVE_INFINITY),r=[];return this._s.forEachInRange([i,s],o=>{const a=this.gs(o.ds);r.push(a)}),P.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let i=new ge(Rt);return n.forEach(s=>{const r=new we(s,0),o=new we(s,Number.POSITIVE_INFINITY);this._s.forEachInRange([r,o],a=>{i=i.add(a.ds)})}),P.resolve(this.ps(i))}getAllMutationBatchesAffectingQuery(t,n){const i=n.path,s=i.length+1;let r=i;Z.isDocumentKey(r)||(r=r.child(""));const o=new we(new Z(r),0);let a=new ge(Rt);return this._s.forEachWhile(l=>{const c=l.key.path;return!!i.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.ds)),!0)},o),P.resolve(this.ps(a))}ps(t){const n=[];return t.forEach(i=>{const s=this.gs(i);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){Kt(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this._s;return P.forEach(n.mutations,s=>{const r=new we(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this._s=i})}En(t){}containsKey(t,n){const i=new we(n,0),s=this._s.firstAfterOrEqual(i);return P.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}Is(t,n){return this.ys(t)}ys(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}gs(t){const n=this.ys(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kL{constructor(t){this.Ts=t,this.docs=new _e(Z.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const i=n.key,s=this.docs.get(i),r=s?s.size:0,o=this.Ts(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const i=this.docs.get(n);return P.resolve(i?i.document.mutableCopy():Fe.newInvalidDocument(n))}getEntries(t,n){let i=ki();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():Fe.newInvalidDocument(s))}),P.resolve(i)}getDocumentsMatchingQuery(t,n,i,s){let r=ki();const o=n.path,a=new Z(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||pN(dN(u),i)<=0||(s.has(u.key)||Lh(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return P.resolve(r)}getAllFromCollectionGroup(t,n,i,s){nt()}Es(t,n){return P.forEach(this.docs,i=>n(i))}newChangeBuffer(t){return new AL(this)}getSize(t){return P.resolve(this.size)}}class AL extends EL{constructor(t){super(),this.Jn=t}applyChanges(t){const n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this.Jn.addEntry(t,s)):this.Jn.removeEntry(i)}),P.waitFor(n)}getFromCache(t,n){return this.Jn.getEntry(t,n)}getAllFromCache(t,n){return this.Jn.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RL{constructor(t){this.persistence=t,this.As=new So(n=>fm(n),dm),this.lastRemoteSnapshotVersion=at.min(),this.highestTargetId=0,this.Rs=0,this.vs=new _m,this.targetCount=0,this.bs=eo.vn()}forEachTarget(t,n){return this.As.forEach((i,s)=>n(s)),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.Rs)}allocateTargetId(t){return this.highestTargetId=this.bs.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Rs&&(this.Rs=n),P.resolve()}Sn(t){this.As.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.bs=new eo(n),this.highestTargetId=n),t.sequenceNumber>this.Rs&&(this.Rs=t.sequenceNumber)}addTargetData(t,n){return this.Sn(n),this.targetCount+=1,P.resolve()}updateTargetData(t,n){return this.Sn(n),P.resolve()}removeTargetData(t,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,n,i){let s=0;const r=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.As.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),P.waitFor(r).next(()=>s)}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,n){const i=this.As.get(n)||null;return P.resolve(i)}addMatchingKeys(t,n,i){return this.vs.os(n,i),P.resolve()}removeMatchingKeys(t,n,i){this.vs.cs(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(o=>{r.push(s.markPotentiallyOrphaned(t,o))}),P.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.vs.hs(n),P.resolve()}getMatchingKeysForTargetId(t,n){const i=this.vs.fs(n);return P.resolve(i)}containsKey(t,n){return P.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DL{constructor(t,n){this.Ps={},this.overlays={},this.Vs=new um(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=t(this),this.Ds=new RL(this),this.indexManager=new bL,this.remoteDocumentCache=function(i){return new kL(i)}(i=>this.referenceDelegate.Cs(i)),this.serializer=new yL(n),this.xs=new CL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new SL,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let i=this.Ps[t.toKey()];return i||(i=new IL(n,this.referenceDelegate),this.Ps[t.toKey()]=i),i}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(t,n,i){q("MemoryPersistence","Starting transaction:",t);const s=new OL(this.Vs.next());return this.referenceDelegate.Ns(),i(s).next(r=>this.referenceDelegate.ks(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Os(t,n){return P.or(Object.values(this.Ps).map(i=>()=>i.containsKey(t,n)))}}class OL extends mN{constructor(t){super(),this.currentSequenceNumber=t}}class ym{constructor(t){this.persistence=t,this.$s=new _m,this.Ms=null}static Fs(t){return new ym(t)}get Bs(){if(this.Ms)return this.Ms;throw nt()}addReference(t,n,i){return this.$s.addReference(i,n),this.Bs.delete(i.toString()),P.resolve()}removeReference(t,n,i){return this.$s.removeReference(i,n),this.Bs.add(i.toString()),P.resolve()}markPotentiallyOrphaned(t,n){return this.Bs.add(n.toString()),P.resolve()}removeTarget(t,n){this.$s.hs(n.targetId).forEach(s=>this.Bs.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(r=>this.Bs.add(r.toString()))}).next(()=>i.removeTargetData(t,n))}Ns(){this.Ms=new Set}ks(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Bs,i=>{const s=Z.fromPath(i);return this.Ls(t,s).next(r=>{r||n.removeEntry(s,at.min())})}).next(()=>(this.Ms=null,n.apply(t)))}updateLimboDocument(t,n){return this.Ls(t,n).next(i=>{i?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(t){return 0}Ls(t,n){return P.or([()=>P.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Os(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(t,n,i,s){this.targetId=t,this.fromCache=n,this.Vi=i,this.Si=s}static Di(t,n){let i=mt(),s=mt();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new vm(t,n.fromCache,i,s)}}/**
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
 */class PL{constructor(){this.Ci=!1}initialize(t,n){this.xi=t,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(t,n,i,s){return this.Ni(t,n).next(r=>r||this.ki(t,n,s,i)).next(r=>r||this.Oi(t,n))}Ni(t,n){if(Ev(n))return P.resolve(null);let i=Ii(n);return this.indexManager.getIndexType(t,i).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=sp(n,null,"F"),i=Ii(n)),this.indexManager.getDocumentsMatchingTarget(t,i).next(r=>{const o=mt(...r);return this.xi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,i).next(l=>{const c=this.$i(n,a);return this.Mi(n,c,o,l.readTime)?this.Ni(t,sp(n,null,"F")):this.Fi(t,c,n,l)}))})))}ki(t,n,i,s){return Ev(n)||s.isEqual(at.min())?this.Oi(t,n):this.xi.getDocuments(t,i).next(r=>{const o=this.$i(n,r);return this.Mi(n,o,i,s)?this.Oi(t,n):(dv()<=It.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),rp(n)),this.Fi(t,o,n,fN(s,-1)))})}$i(t,n){let i=new ge(oT(t));return n.forEach((s,r)=>{Lh(t,r)&&(i=i.add(r))}),i}Mi(t,n,i,s){if(t.limit===null)return!1;if(i.size!==n.size)return!0;const r=t.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Oi(t,n){return dv()<=It.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",rp(n)),this.xi.getDocumentsMatchingQuery(t,n,as.min())}Fi(t,n,i,s){return this.xi.getDocumentsMatchingQuery(t,i,s).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ML{constructor(t,n,i,s){this.persistence=t,this.Bi=n,this.serializer=s,this.Li=new _e(Rt),this.qi=new So(r=>fm(r),dm),this.Ui=new Map,this.Ki=t.getRemoteDocumentCache(),this.Ds=t.getTargetCache(),this.xs=t.getBundleCache(),this.Gi(i)}Gi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new TL(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Li))}}function NL(e,t,n,i){return new ML(e,t,n,i)}async function AT(e,t){const n=ct(e);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,n.Gi(t),n.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],a=[];let l=mt();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(i,l).next(c=>({Qi:c,removedBatchIds:o,addedBatchIds:a}))})})}function LL(e,t){const n=ct(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=t.batch.keys(),r=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let f=P.resolve();return h.forEach(d=>{f=f.next(()=>c.getEntry(a,d)).next(p=>{const g=l.docVersions.get(d);Kt(g!==null),p.version.compareTo(g)<0&&(u.applyToRemoteDocument(p,l),p.isValidDocument()&&(p.setReadTime(l.commitVersion),c.addEntry(p)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,i,t,r).next(()=>r.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(o){let a=mt();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(t))).next(()=>n.localDocuments.getDocuments(i,s))})}function RT(e){const t=ct(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Ds.getLastRemoteSnapshotVersion(n))}function FL(e,t){const n=ct(e),i=t.snapshotVersion;let s=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});s=n.Li;const a=[];t.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.Ds.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(r,u.addedDocuments,h)));let d=f.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.has(h)?d=d.withResumeToken(He.EMPTY_BYTE_STRING,at.min()).withLastLimboFreeSnapshotVersion(at.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,i)),s=s.insert(h,d),function(p,g,m){return p.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(f,d,u)&&a.push(n.Ds.updateTargetData(r,d))});let l=ki(),c=mt();if(t.documentUpdates.forEach(u=>{t.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(UL(r,o,t.documentUpdates).next(u=>{l=u.zi,c=u.ji})),!i.isEqual(at.min())){const u=n.Ds.getLastRemoteSnapshotVersion(r).next(h=>n.Ds.setTargetsMetadata(r,r.currentSequenceNumber,i));a.push(u)}return P.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Li=s,r))}function UL(e,t,n){let i=mt(),s=mt();return n.forEach(r=>i=i.add(r)),t.getEntries(e,i).next(r=>{let o=ki();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(at.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):q("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{zi:o,ji:s}})}function BL(e,t){const n=ct(e);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}function VL(e,t){const n=ct(e);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return n.Ds.getTargetData(i,t).next(r=>r?(s=r,P.resolve(s)):n.Ds.allocateTargetId(i).next(o=>(s=new js(t,o,0,i.currentSequenceNumber),n.Ds.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=n.Li.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Li=n.Li.insert(i.targetId,i),n.qi.set(t,i.targetId)),i})}async function cp(e,t,n){const i=ct(e),s=i.Li.get(t),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!El(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}i.Li=i.Li.remove(t),i.qi.delete(s.target)}function Dv(e,t,n){const i=ct(e);let s=at.min(),r=mt();return i.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=ct(a),h=u.qi.get(c);return h!==void 0?P.resolve(u.Li.get(h)):u.Ds.getTargetData(l,c)}(i,o,Ii(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.Ds.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>i.Bi.getDocumentsMatchingQuery(o,t,n?s:at.min(),n?r:mt())).next(a=>($L(i,LN(t),a),{documents:a,Wi:r})))}function $L(e,t,n){let i=e.Ui.get(t)||at.min();n.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),e.Ui.set(t,i)}class Ov{constructor(){this.activeTargetIds=uT()}tr(t){this.activeTargetIds=this.activeTargetIds.add(t)}er(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Xi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class zL{constructor(){this.Br=new Ov,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,i){}addLocalQueryTarget(t){return this.Br.tr(t),this.Lr[t]||"not-current"}updateQueryState(t,n,i){this.Lr[t]=n}removeLocalQueryTarget(t){this.Br.er(t)}isLocalQueryTarget(t){return this.Br.activeTargetIds.has(t)}clearQueryState(t){delete this.Lr[t]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(t){return this.Br.activeTargetIds.has(t)}start(){return this.Br=new Ov,Promise.resolve()}handleUserChange(t,n,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class HL{qr(t){}shutdown(){}}/**
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
 */class Pv{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(t){this.zr.push(t)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.zr)t(0)}Qr(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.zr)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Zl=null;function Lf(){return Zl===null?Zl=268435456+Math.round(2147483648*Math.random()):Zl++,"0x"+Zl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WL{constructor(t){this.Wr=t.Wr,this.Hr=t.Hr}Jr(t){this.Yr=t}Zr(t){this.Xr=t}onMessage(t){this.eo=t}close(){this.Hr()}send(t){this.Wr(t)}no(){this.Yr()}so(t){this.Xr(t)}io(t){this.eo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe="WebChannelConnection";class KL extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.ro=n+"://"+t.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(t,n,i,s,r){const o=Lf(),a=this.ao(t,n);q("RestConnection",`Sending RPC '${t}' ${o}:`,a,i);const l={};return this.ho(l,s,r),this.lo(t,a,l,i).then(c=>(q("RestConnection",`Received RPC '${t}' ${o}: `,c),c),c=>{throw _u("RestConnection",`RPC '${t}' ${o} failed with error: `,c,"url: ",a,"request:",i),c})}fo(t,n,i,s,r,o){return this.co(t,n,i,s,r)}ho(t,n,i){t["X-Goog-Api-Client"]="gl-js/ fire/"+Co,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,r)=>t[r]=s),i&&i.headers.forEach((s,r)=>t[r]=s)}ao(t,n){const i=jL[t];return`${this.ro}/v1/${n}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}lo(t,n,i,s){const r=Lf();return new Promise((o,a)=>{const l=new nN;l.setWithCredentials(!0),l.listenOnce(ZM.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Mf.NO_ERROR:const u=l.getResponseJson();q(Oe,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(u)),o(u);break;case Mf.TIMEOUT:q(Oe,`RPC '${t}' ${r} timed out`),a(new J(D.DEADLINE_EXCEEDED,"Request time out"));break;case Mf.HTTP_ERROR:const h=l.getStatus();if(q(Oe,`RPC '${t}' ${r} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const p=function(g){const m=g.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(m)>=0?m:D.UNKNOWN}(d.status);a(new J(p,d.message))}else a(new J(D.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new J(D.UNAVAILABLE,"Connection failed."));break;default:nt()}}finally{q(Oe,`RPC '${t}' ${r} completed.`)}});const c=JSON.stringify(s);q(Oe,`RPC '${t}' ${r} sending request:`,s),l.send(n,"POST",c,i,15)})}wo(t,n,i){const s=Lf(),r=[this.ro,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=QM(),a=JM(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new eN({})),this.ho(l.initMessageHeaders,n,i),l.encodeInitMessageHeaders=!0;const c=r.join("");q(Oe,`Creating RPC '${t}' stream ${s}: ${c}`,l);const u=o.createWebChannel(c,l);let h=!1,f=!1;const d=new WL({Wr:g=>{f?q(Oe,`Not sending because RPC '${t}' stream ${s} is closed:`,g):(h||(q(Oe,`Opening RPC '${t}' stream ${s} transport.`),u.open(),h=!0),q(Oe,`RPC '${t}' stream ${s} sending:`,g),u.send(g))},Hr:()=>u.close()}),p=(g,m,_)=>{g.listen(m,v=>{try{_(v)}catch(w){setTimeout(()=>{throw w},0)}})};return p(u,Yl.EventType.OPEN,()=>{f||q(Oe,`RPC '${t}' stream ${s} transport opened.`)}),p(u,Yl.EventType.CLOSE,()=>{f||(f=!0,q(Oe,`RPC '${t}' stream ${s} transport closed`),d.so())}),p(u,Yl.EventType.ERROR,g=>{f||(f=!0,_u(Oe,`RPC '${t}' stream ${s} transport errored:`,g),d.so(new J(D.UNAVAILABLE,"The operation could not be completed")))}),p(u,Yl.EventType.MESSAGE,g=>{var m;if(!f){const _=g.data[0];Kt(!!_);const v=_,w=v.error||((m=v[0])===null||m===void 0?void 0:m.error);if(w){q(Oe,`RPC '${t}' stream ${s} received error:`,w);const E=w.status;let x=function(S){const C=ce[S];if(C!==void 0)return bT(C)}(E),A=w.message;x===void 0&&(x=D.INTERNAL,A="Unknown error status: "+E+" with message "+w.message),f=!0,d.so(new J(x,A)),u.close()}else q(Oe,`RPC '${t}' stream ${s} received:`,_),d.io(_)}}),p(a,tN.STAT_EVENT,g=>{g.stat===hv.PROXY?q(Oe,`RPC '${t}' stream ${s} detected buffering proxy`):g.stat===hv.NOPROXY&&q(Oe,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{d.no()},0),d}}function Ff(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(e){return new sL(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(t,n,i=1e3,s=1.5,r=6e4){this.Ws=t,this.timerId=n,this._o=i,this.mo=s,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(t){this.cancel();const n=Math.floor(this.po+this.Ro()),i=Math.max(0,Date.now()-this.To),s=Math.max(0,n-i);s>0&&q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,s,()=>(this.To=Date.now(),t())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(t,n,i,s,r,o,a,l){this.Ws=t,this.bo=i,this.Po=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new DT(t,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(t){this.Bo(),this.stream.send(t)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(t,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,t!==4?this.Co.reset():n&&n.code===D.RESOURCE_EXHAUSTED?(Si(n.toString()),Si("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const t=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Vo===n&&this.Ko(i,s)},i=>{t(()=>{const s=new J(D.UNKNOWN,"Fetching auth token failed: "+i.message);return this.Go(s)})})}Ko(t,n){const i=this.Uo(this.Vo);this.stream=this.Qo(t,n),this.stream.Jr(()=>{i(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(s=>{i(()=>this.Go(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(t){return q("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Uo(t){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===t?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class qL extends OT{constructor(t,n,i,s,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r}Qo(t,n){return this.connection.wo("Listen",t,n)}onMessage(t){this.Co.reset();const n=aL(this.serializer,t),i=function(s){if(!("targetChange"in s))return at.min();const r=s.targetChange;return r.targetIds&&r.targetIds.length?at.min():r.readTime?ei(r.readTime):at.min()}(t);return this.listener.zo(n,i)}jo(t){const n={};n.database=lp(this.serializer),n.addTarget=function(s,r){let o;const a=r.target;return o=ip(a)?{documents:uL(s,a)}:{query:hL(s,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=xT(s,r.resumeToken):r.snapshotVersion.compareTo(at.min())>0&&(o.readTime=Eu(s,r.snapshotVersion.toTimestamp())),o}(this.serializer,t);const i=dL(this.serializer,t);i&&(n.labels=i),this.Fo(n)}Wo(t){const n={};n.database=lp(this.serializer),n.removeTarget=t,this.Fo(n)}}class GL extends OT{constructor(t,n,i,s,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(t,n){return this.connection.wo("Write",t,n)}onMessage(t){if(Kt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Ho){this.Co.reset();const n=cL(t.writeResults,t.commitTime),i=ei(t.commitTime);return this.listener.Zo(i,n)}return Kt(!t.writeResults||t.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const t={};t.database=lp(this.serializer),this.Fo(t)}Yo(t){const n={streamToken:this.lastStreamToken,writes:t.map(i=>lL(this.serializer,i))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YL extends class{}{constructor(t,n,i,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=i,this.serializer=s,this.eu=!1}nu(){if(this.eu)throw new J(D.FAILED_PRECONDITION,"The client has already been terminated.")}co(t,n,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.connection.co(t,n,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new J(D.UNKNOWN,s.toString())})}fo(t,n,i,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.fo(t,n,i,r,o,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new J(D.UNKNOWN,r.toString())})}terminate(){this.eu=!0}}class XL{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(t){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.uu("Offline")))}set(t){this.hu(),this.su=0,t==="Online"&&(this.ru=!1),this.uu(t)}uu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}cu(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(Si(n),this.ru=!1):q("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QL{constructor(t,n,i,s,r){this.localStore=t,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=r,this._u.qr(o=>{i.enqueueAndForget(async()=>{hr(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ct(a);l.du.add(4),await Tl(l),l.mu.set("Unknown"),l.du.delete(4),await zh(l)}(this))})}),this.mu=new XL(i,s)}}async function zh(e){if(hr(e))for(const t of e.wu)await t(!0)}async function Tl(e){for(const t of e.wu)await t(!1)}function PT(e,t){const n=ct(e);n.fu.has(t.targetId)||(n.fu.set(t.targetId,t),Em(n)?wm(n):Io(n).No()&&bm(n,t))}function MT(e,t){const n=ct(e),i=Io(n);n.fu.delete(t),i.No()&&NT(n,t),n.fu.size===0&&(i.No()?i.$o():hr(n)&&n.mu.set("Unknown"))}function bm(e,t){e.gu.Ot(t.targetId),Io(e).jo(t)}function NT(e,t){e.gu.Ot(t),Io(e).Wo(t)}function wm(e){e.gu=new tL({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.fu.get(t)||null}),Io(e).start(),e.mu.ou()}function Em(e){return hr(e)&&!Io(e).xo()&&e.fu.size>0}function hr(e){return ct(e).du.size===0}function LT(e){e.gu=void 0}async function JL(e){e.fu.forEach((t,n)=>{bm(e,t)})}async function ZL(e,t){LT(e),Em(e)?(e.mu.au(t),wm(e)):e.mu.set("Unknown")}async function tF(e,t,n){if(e.mu.set("Online"),t instanceof ET&&t.state===2&&t.cause)try{await async function(i,s){const r=s.cause;for(const o of s.targetIds)i.fu.has(o)&&(await i.remoteSyncer.rejectListen(o,r),i.fu.delete(o),i.gu.removeTarget(o))}(e,t)}catch(i){q("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),i),await xu(e,i)}else if(t instanceof Mc?e.gu.Kt(t):t instanceof wT?e.gu.Jt(t):e.gu.zt(t),!n.isEqual(at.min()))try{const i=await RT(e.localStore);n.compareTo(i)>=0&&await function(s,r){const o=s.gu.Xt(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=s.fu.get(l);c&&s.fu.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=s.fu.get(a);if(!l)return;s.fu.set(a,l.withResumeToken(He.EMPTY_BYTE_STRING,l.snapshotVersion)),NT(s,a);const c=new js(l.target,a,1,l.sequenceNumber);bm(s,c)}),s.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(i){q("RemoteStore","Failed to raise snapshot:",i),await xu(e,i)}}async function xu(e,t,n){if(!El(t))throw t;e.du.add(1),await Tl(e),e.mu.set("Offline"),n||(n=()=>RT(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),e.du.delete(1),await zh(e)})}function FT(e,t){return t().catch(n=>xu(e,n,t))}async function Hh(e){const t=ct(e),n=cs(t);let i=t.lu.length>0?t.lu[t.lu.length-1].batchId:-1;for(;eF(t);)try{const s=await BL(t.localStore,i);if(s===null){t.lu.length===0&&n.$o();break}i=s.batchId,nF(t,s)}catch(s){await xu(t,s)}UT(t)&&BT(t)}function eF(e){return hr(e)&&e.lu.length<10}function nF(e,t){e.lu.push(t);const n=cs(e);n.No()&&n.Jo&&n.Yo(t.mutations)}function UT(e){return hr(e)&&!cs(e).xo()&&e.lu.length>0}function BT(e){cs(e).start()}async function iF(e){cs(e).tu()}async function sF(e){const t=cs(e);for(const n of e.lu)t.Yo(n.mutations)}async function rF(e,t,n){const i=e.lu.shift(),s=pm.from(i,t,n);await FT(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await Hh(e)}async function oF(e,t){t&&cs(e).Jo&&await async function(n,i){if(s=i.code,ZN(s)&&s!==D.ABORTED){const r=n.lu.shift();cs(n).Oo(),await FT(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,i)),await Hh(n)}var s}(e,t),UT(e)&&BT(e)}async function Mv(e,t){const n=ct(e);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const i=hr(n);n.du.add(3),await Tl(n),i&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.du.delete(3),await zh(n)}async function aF(e,t){const n=ct(e);t?(n.du.delete(2),await zh(n)):t||(n.du.add(2),await Tl(n),n.mu.set("Unknown"))}function Io(e){return e.yu||(e.yu=function(t,n,i){const s=ct(t);return s.nu(),new qL(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{Jr:JL.bind(null,e),Zr:ZL.bind(null,e),zo:tF.bind(null,e)}),e.wu.push(async t=>{t?(e.yu.Oo(),Em(e)?wm(e):e.mu.set("Unknown")):(await e.yu.stop(),LT(e))})),e.yu}function cs(e){return e.pu||(e.pu=function(t,n,i){const s=ct(t);return s.nu(),new GL(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{Jr:iF.bind(null,e),Zr:oF.bind(null,e),Xo:sF.bind(null,e),Zo:rF.bind(null,e)}),e.wu.push(async t=>{t?(e.pu.Oo(),await Hh(e)):(await e.pu.stop(),e.lu.length>0&&(q("RemoteStore",`Stopping write stream with ${e.lu.length} pending writes`),e.lu=[]))})),e.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(t,n,i,s,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Ei,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,i,s,r){const o=Date.now()+i,a=new xm(t,n,o,s,r);return a.start(i),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(D.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tm(e,t){if(Si("AsyncQueue",`${t}: ${e}`),El(e))return new J(D.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(t){this.comparator=t?(n,i)=>t(n,i)||Z.comparator(n.key,i.key):(n,i)=>Z.comparator(n.key,i.key),this.keyedMap=qo(),this.sortedSet=new _e(this.comparator)}static emptySet(t){return new Ur(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,i)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Ur)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),i=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const i=new Ur;return i.comparator=this.comparator,i.keyedMap=t,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(){this.Iu=new _e(Z.comparator)}track(t){const n=t.doc.key,i=this.Iu.get(n);i?t.type!==0&&i.type===3?this.Iu=this.Iu.insert(n,t):t.type===3&&i.type!==1?this.Iu=this.Iu.insert(n,{type:i.type,doc:t.doc}):t.type===2&&i.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:t.doc}):t.type===2&&i.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:t.doc}):t.type===1&&i.type===0?this.Iu=this.Iu.remove(n):t.type===1&&i.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:i.doc}):t.type===0&&i.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:t.doc}):nt():this.Iu=this.Iu.insert(n,t)}Tu(){const t=[];return this.Iu.inorderTraversal((n,i)=>{t.push(i)}),t}}class no{constructor(t,n,i,s,r,o,a,l,c){this.query=t,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(t,n,i,s,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new no(t,n,Ur.emptySet(n),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Nh(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,i=t.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lF{constructor(){this.Eu=void 0,this.listeners=[]}}class cF{constructor(){this.queries=new So(t=>rT(t),Nh),this.onlineState="Unknown",this.Au=new Set}}async function Cm(e,t){const n=ct(e),i=t.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new lF),s)try{r.Eu=await n.onListen(i)}catch(o){const a=Tm(o,`Initialization of query '${rp(t.query)}' failed`);return void t.onError(a)}n.queries.set(i,r),r.listeners.push(t),t.Ru(n.onlineState),r.Eu&&t.vu(r.Eu)&&Im(n)}async function Sm(e,t){const n=ct(e),i=t.query;let s=!1;const r=n.queries.get(i);if(r){const o=r.listeners.indexOf(t);o>=0&&(r.listeners.splice(o,1),s=r.listeners.length===0)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function uF(e,t){const n=ct(e);let i=!1;for(const s of t){const r=s.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.vu(s)&&(i=!0);o.Eu=s}}i&&Im(n)}function hF(e,t,n){const i=ct(e),s=i.queries.get(t);if(s)for(const r of s.listeners)r.onError(n);i.queries.delete(t)}function Im(e){e.Au.forEach(t=>{t.next()})}class km{constructor(t,n,i){this.query=t,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=i||{}}vu(t){if(!this.options.includeMetadataChanges){const i=[];for(const s of t.docChanges)s.type!==3&&i.push(s);t=new no(t.query,t.docs,t.oldDocs,i,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Pu?this.Su(t)&&(this.bu.next(t),n=!0):this.Du(t,this.onlineState)&&(this.Cu(t),n=!0),this.Vu=t,n}onError(t){this.bu.error(t)}Ru(t){this.onlineState=t;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,t)&&(this.Cu(this.Vu),n=!0),n}Du(t,n){if(!t.fromCache)return!0;const i=n!=="Offline";return(!this.options.xu||!i)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Su(t){if(t.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(t){t=no.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Pu=!0,this.bu.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(t){this.key=t}}class $T{constructor(t){this.key=t}}class fF{constructor(t,n){this.query=t,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=mt(),this.mutatedKeys=mt(),this.Ku=oT(t),this.Gu=new Ur(this.Ku)}get Qu(){return this.Lu}zu(t,n){const i=n?n.ju:new Nv,s=n?n.Gu:this.Gu;let r=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((u,h)=>{const f=s.get(u),d=Lh(this.query,h)?h:null,p=!!f&&this.mutatedKeys.has(f.key),g=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let m=!1;f&&d?f.data.isEqual(d.data)?p!==g&&(i.track({type:3,doc:d}),m=!0):this.Wu(f,d)||(i.track({type:2,doc:d}),m=!0,(l&&this.Ku(d,l)>0||c&&this.Ku(d,c)<0)&&(a=!0)):!f&&d?(i.track({type:0,doc:d}),m=!0):f&&!d&&(i.track({type:1,doc:f}),m=!0,(l||c)&&(a=!0)),m&&(d?(o=o.add(d),r=g?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),i.track({type:1,doc:u})}return{Gu:o,ju:i,Mi:a,mutatedKeys:r}}Wu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,i){const s=this.Gu;this.Gu=t.Gu,this.mutatedKeys=t.mutatedKeys;const r=t.ju.Tu();r.sort((c,u)=>function(h,f){const d=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return nt()}};return d(h)-d(f)}(c.type,u.type)||this.Ku(c.doc,u.doc)),this.Hu(i);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,r.length!==0||l?{snapshot:new no(this.query,t.Gu,s,r,t.mutatedKeys,a===0,l,!1,!!i&&i.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Nv,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(t){return!this.Lu.has(t)&&!!this.Gu.has(t)&&!this.Gu.get(t).hasLocalMutations}Hu(t){t&&(t.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=t.current)}Ju(){if(!this.current)return[];const t=this.Uu;this.Uu=mt(),this.Gu.forEach(i=>{this.Zu(i.key)&&(this.Uu=this.Uu.add(i.key))});const n=[];return t.forEach(i=>{this.Uu.has(i)||n.push(new $T(i))}),this.Uu.forEach(i=>{t.has(i)||n.push(new VT(i))}),n}Xu(t){this.Lu=t.Wi,this.Uu=mt();const n=this.zu(t.documents);return this.applyChanges(n,!0)}tc(){return no.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class dF{constructor(t,n,i){this.query=t,this.targetId=n,this.view=i}}class pF{constructor(t){this.key=t,this.ec=!1}}class gF{constructor(t,n,i,s,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new So(a=>rT(a),Nh),this.ic=new Map,this.rc=new Set,this.oc=new _e(Z.comparator),this.uc=new Map,this.cc=new _m,this.ac={},this.hc=new Map,this.lc=eo.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function mF(e,t){const n=SF(e);let i,s;const r=n.sc.get(t);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.tc();else{const o=await VL(n.localStore,Ii(t));n.isPrimaryClient&&PT(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,s=await _F(n,t,i,a==="current",o.resumeToken)}return s}async function _F(e,t,n,i,s){e.dc=(h,f,d)=>async function(p,g,m,_){let v=g.view.zu(m);v.Mi&&(v=await Dv(p.localStore,g.query,!1).then(({documents:x})=>g.view.zu(x,v)));const w=_&&_.targetChanges.get(g.targetId),E=g.view.applyChanges(v,p.isPrimaryClient,w);return Fv(p,g.targetId,E.Yu),E.snapshot}(e,h,f,d);const r=await Dv(e.localStore,t,!0),o=new fF(t,r.Wi),a=o.zu(r.documents),l=xl.createSynthesizedTargetChangeForCurrentChange(n,i&&e.onlineState!=="Offline",s),c=o.applyChanges(a,e.isPrimaryClient,l);Fv(e,n,c.Yu);const u=new dF(t,n,o);return e.sc.set(t,u),e.ic.has(n)?e.ic.get(n).push(t):e.ic.set(n,[t]),c.snapshot}async function yF(e,t){const n=ct(e),i=n.sc.get(t),s=n.ic.get(i.targetId);if(s.length>1)return n.ic.set(i.targetId,s.filter(r=>!Nh(r,t))),void n.sc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await cp(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),MT(n.remoteStore,i.targetId),up(n,i.targetId)}).catch(wl)):(up(n,i.targetId),await cp(n.localStore,i.targetId,!0))}async function vF(e,t,n){const i=IF(e);try{const s=await function(r,o){const a=ct(r),l=fe.now(),c=o.reduce((f,d)=>f.add(d.key),mt());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=ki(),p=mt();return a.Ki.getEntries(f,c).next(g=>{d=g,d.forEach((m,_)=>{_.isValidDocument()||(p=p.add(m))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(g=>{u=g;const m=[];for(const _ of o){const v=GN(_,u.get(_.key).overlayedDocument);v!=null&&m.push(new ur(_.key,v,Jx(v.value.mapValue),xi.exists(!0)))}return a.mutationQueue.addMutationBatch(f,l,m,o)}).next(g=>{h=g;const m=g.applyToLocalDocumentSet(u,p);return a.documentOverlayCache.saveOverlays(f,g.batchId,m)})}).then(()=>({batchId:h.batchId,changes:lT(u)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),function(r,o,a){let l=r.ac[r.currentUser.toKey()];l||(l=new _e(Rt)),l=l.insert(o,a),r.ac[r.currentUser.toKey()]=l}(i,s.batchId,n),await Cl(i,s.changes),await Hh(i.remoteStore)}catch(s){const r=Tm(s,"Failed to persist write");n.reject(r)}}async function zT(e,t){const n=ct(e);try{const i=await FL(n.localStore,t);t.targetChanges.forEach((s,r)=>{const o=n.uc.get(r);o&&(Kt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ec=!0:s.modifiedDocuments.size>0?Kt(o.ec):s.removedDocuments.size>0&&(Kt(o.ec),o.ec=!1))}),await Cl(n,i,t)}catch(i){await wl(i)}}function Lv(e,t,n){const i=ct(e);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.sc.forEach((r,o)=>{const a=o.view.Ru(t);a.snapshot&&s.push(a.snapshot)}),function(r,o){const a=ct(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.Ru(o)&&(l=!0)}),l&&Im(a)}(i.eventManager,t),s.length&&i.nc.zo(s),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function bF(e,t,n){const i=ct(e);i.sharedClientState.updateQueryState(t,"rejected",n);const s=i.uc.get(t),r=s&&s.key;if(r){let o=new _e(Z.comparator);o=o.insert(r,Fe.newNoDocument(r,at.min()));const a=mt().add(r),l=new Vh(at.min(),new Map,new ge(Rt),o,a);await zT(i,l),i.oc=i.oc.remove(r),i.uc.delete(t),Am(i)}else await cp(i.localStore,t,!1).then(()=>up(i,t,n)).catch(wl)}async function wF(e,t){const n=ct(e),i=t.batch.batchId;try{const s=await LL(n.localStore,t);jT(n,i,null),HT(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Cl(n,s)}catch(s){await wl(s)}}async function EF(e,t,n){const i=ct(e);try{const s=await function(r,o){const a=ct(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(Kt(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(i.localStore,t);jT(i,t,n),HT(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await Cl(i,s)}catch(s){await wl(s)}}function HT(e,t){(e.hc.get(t)||[]).forEach(n=>{n.resolve()}),e.hc.delete(t)}function jT(e,t,n){const i=ct(e);let s=i.ac[i.currentUser.toKey()];if(s){const r=s.get(t);r&&(n?r.reject(n):r.resolve(),s=s.remove(t)),i.ac[i.currentUser.toKey()]=s}}function up(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const i of e.ic.get(t))e.sc.delete(i),n&&e.nc.wc(i,n);e.ic.delete(t),e.isPrimaryClient&&e.cc.hs(t).forEach(i=>{e.cc.containsKey(i)||WT(e,i)})}function WT(e,t){e.rc.delete(t.path.canonicalString());const n=e.oc.get(t);n!==null&&(MT(e.remoteStore,n),e.oc=e.oc.remove(t),e.uc.delete(n),Am(e))}function Fv(e,t,n){for(const i of n)i instanceof VT?(e.cc.addReference(i.key,t),xF(e,i)):i instanceof $T?(q("SyncEngine","Document no longer in limbo: "+i.key),e.cc.removeReference(i.key,t),e.cc.containsKey(i.key)||WT(e,i.key)):nt()}function xF(e,t){const n=t.key,i=n.path.canonicalString();e.oc.get(n)||e.rc.has(i)||(q("SyncEngine","New document in limbo: "+n),e.rc.add(i),Am(e))}function Am(e){for(;e.rc.size>0&&e.oc.size<e.maxConcurrentLimboResolutions;){const t=e.rc.values().next().value;e.rc.delete(t);const n=new Z(Xt.fromString(t)),i=e.lc.next();e.uc.set(i,new pF(n)),e.oc=e.oc.insert(n,i),PT(e.remoteStore,new js(Ii(Mh(n.path)),i,2,um.ct))}}async function Cl(e,t,n){const i=ct(e),s=[],r=[],o=[];i.sc.isEmpty()||(i.sc.forEach((a,l)=>{o.push(i.dc(l,t,n).then(c=>{if((c||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=vm.Di(l.targetId,c);r.push(u)}}))}),await Promise.all(o),i.nc.zo(s),await async function(a,l){const c=ct(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>P.forEach(l,h=>P.forEach(h.Vi,f=>c.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>P.forEach(h.Si,f=>c.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!El(u))throw u;q("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const f=c.Li.get(h),d=f.snapshotVersion,p=f.withLastLimboFreeSnapshotVersion(d);c.Li=c.Li.insert(h,p)}}}(i.localStore,r))}async function TF(e,t){const n=ct(e);if(!n.currentUser.isEqual(t)){q("SyncEngine","User change. New user:",t.toKey());const i=await AT(n.localStore,t);n.currentUser=t,function(s,r){s.hc.forEach(o=>{o.forEach(a=>{a.reject(new J(D.CANCELLED,r))})}),s.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await Cl(n,i.Qi)}}function CF(e,t){const n=ct(e),i=n.uc.get(t);if(i&&i.ec)return mt().add(i.key);{let s=mt();const r=n.ic.get(t);if(!r)return s;for(const o of r){const a=n.sc.get(o);s=s.unionWith(a.view.Qu)}return s}}function SF(e){const t=ct(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=zT.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=CF.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=bF.bind(null,t),t.nc.zo=uF.bind(null,t.eventManager),t.nc.wc=hF.bind(null,t.eventManager),t}function IF(e){const t=ct(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=wF.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=EF.bind(null,t),t}class Uv{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=$h(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return NL(this.persistence,new PL,t.initialUser,this.serializer)}createPersistence(t){return new DL(ym.Fs,this.serializer)}createSharedClientState(t){return new zL}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class kF{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Lv(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=TF.bind(null,this.syncEngine),await aF(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new cF}createDatastore(t){const n=$h(t.databaseInfo.databaseId),i=(s=t.databaseInfo,new KL(s));var s;return function(r,o,a,l){return new YL(r,o,a,l)}(t.authCredentials,t.appCheckCredentials,i,n)}createRemoteStore(t){return n=this.localStore,i=this.datastore,s=t.asyncQueue,r=a=>Lv(this.syncEngine,a,0),o=Pv.D()?new Pv:new HL,new QL(n,i,s,r,o);var n,i,s,r,o}createSyncEngine(t,n){return function(i,s,r,o,a,l,c){const u=new gF(i,s,r,o,a,l);return c&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=ct(t);q("RemoteStore","RemoteStore shutting down."),n.du.add(5),await Tl(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Rm{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.gc(this.observer.next,t)}error(t){this.observer.error?this.gc(this.observer.error,t):Si("Uncaught Error in snapshot listener:",t.toString())}yc(){this.muted=!0}gc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AF{constructor(t,n,i,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=Me.UNAUTHENTICATED,this.clientId=Gx.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{q("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(q("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new J(D.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ei;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const i=Tm(n,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function Uf(e,t){e.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener(async s=>{i.isEqual(s)||(await AT(t.localStore,s),i=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Bv(e,t){e.asyncQueue.verifyOperationInProgress();const n=await DF(e);q("FirestoreClient","Initializing OnlineComponentProvider");const i=await e.getConfiguration();await t.initialize(n,i),e.setCredentialChangeListener(s=>Mv(t.remoteStore,s)),e.setAppCheckTokenChangeListener((s,r)=>Mv(t.remoteStore,r)),e._onlineComponents=t}function RF(e){return e.name==="FirebaseError"?e.code===D.FAILED_PRECONDITION||e.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function DF(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await Uf(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!RF(n))throw n;_u("Error using user provided cache. Falling back to memory cache: "+n),await Uf(e,new Uv)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await Uf(e,new Uv);return e._offlineComponents}async function KT(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await Bv(e,e._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await Bv(e,new kF))),e._onlineComponents}function OF(e){return KT(e).then(t=>t.syncEngine)}async function Tu(e){const t=await KT(e),n=t.eventManager;return n.onListen=mF.bind(null,t.syncEngine),n.onUnlisten=yF.bind(null,t.syncEngine),n}function PF(e,t,n={}){const i=new Ei;return e.asyncQueue.enqueueAndForget(async()=>function(s,r,o,a,l){const c=new Rm({next:h=>{r.enqueueAndForget(()=>Sm(s,u));const f=h.docs.has(o);!f&&h.fromCache?l.reject(new J(D.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?l.reject(new J(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new km(Mh(o.path),c,{includeMetadataChanges:!0,xu:!0});return Cm(s,u)}(await Tu(e),e.asyncQueue,t,n,i)),i.promise}function MF(e,t,n={}){const i=new Ei;return e.asyncQueue.enqueueAndForget(async()=>function(s,r,o,a,l){const c=new Rm({next:h=>{r.enqueueAndForget(()=>Sm(s,u)),h.fromCache&&a.source==="server"?l.reject(new J(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new km(o,c,{includeMetadataChanges:!0,xu:!0});return Cm(s,u)}(await Tu(e),e.asyncQueue,t,n,i)),i.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qT(e,t,n){if(!n)throw new J(D.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function NF(e,t,n,i){if(t===!0&&i===!0)throw new J(D.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function $v(e){if(!Z.isDocumentKey(e))throw new J(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function zv(e){if(Z.isDocumentKey(e))throw new J(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Dm(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":nt()}function ni(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new J(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Dm(e);throw new J(D.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new J(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new J(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,NF("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(t,n,i,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Hv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new J(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new J(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Hv(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new iN;switch(n.type){case"firstParty":return new aN(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new J(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Vv.get(t);n&&(q("ComponentProvider","Removing Datastore"),Vv.delete(t),n.terminate())}(this),Promise.resolve()}}function LF(e,t,n,i={}){var s;const r=(e=ni(e,jh))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==t&&_u("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},r),{host:`${t}:${n}`,ssl:!1})),i.mockUserToken){let o,a;if(typeof i.mockUserToken=="string")o=i.mockUserToken,a=Me.MOCK_USER;else{o=RA(i.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const l=i.mockUserToken.sub||i.mockUserToken.user_id;if(!l)throw new J(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Me(l)}e._authCredentials=new sN(new qx(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(t,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new es(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new rn(this.firestore,t,this._key)}}class Sl{constructor(t,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new Sl(this.firestore,t,this._query)}}class es extends Sl{constructor(t,n,i){super(t,n,Mh(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new rn(this.firestore,null,new Z(t))}withConverter(t){return new es(this.firestore,t,this._path)}}function us(e,t,...n){if(e=an(e),qT("collection","path",t),e instanceof jh){const i=Xt.fromString(t,...n);return zv(i),new es(e,null,i)}{if(!(e instanceof rn||e instanceof es))throw new J(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(Xt.fromString(t,...n));return zv(i),new es(e.firestore,null,i)}}function Rn(e,t,...n){if(e=an(e),arguments.length===1&&(t=Gx.A()),qT("doc","path",t),e instanceof jh){const i=Xt.fromString(t,...n);return $v(i),new rn(e,null,new Z(i))}{if(!(e instanceof rn||e instanceof es))throw new J(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(Xt.fromString(t,...n));return $v(i),new rn(e.firestore,e instanceof es?e.converter:null,new Z(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FF{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new DT(this,"async_queue_retry"),this.qc=()=>{const n=Ff();n&&q("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const t=Ff();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Uc(),this.Kc(t)}enterRestrictedMode(t){if(!this.Oc){this.Oc=!0,this.Bc=t||!1;const n=Ff();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(t){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new Ei;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.kc.push(t),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(t){if(!El(t))throw t;q("AsyncQueue","Operation failed with retryable error: "+t)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(t){const n=this.Nc.then(()=>(this.Fc=!0,t().catch(i=>{this.Mc=i,this.Fc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw Si("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Fc=!1,i))));return this.Nc=n,n}enqueueAfterDelay(t,n,i){this.Uc(),this.Lc.indexOf(t)>-1&&(n=0);const s=xm.createAndSchedule(this,t,n,i,r=>this.Qc(r));return this.$c.push(s),s}Uc(){this.Mc&&nt()}verifyOperationInProgress(){}async zc(){let t;do t=this.Nc,await t;while(t!==this.Nc)}jc(t){for(const n of this.$c)if(n.timerId===t)return!0;return!1}Wc(t){return this.zc().then(()=>{this.$c.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.zc()})}Hc(t){this.Lc.push(t)}Qc(t){const n=this.$c.indexOf(t);this.$c.splice(n,1)}}function jv(e){return function(t,n){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of n)if(s in i&&typeof i[s]=="function")return!0;return!1}(e,["next","error","complete"])}class io extends jh{constructor(t,n,i,s){super(t,n,i,s),this.type="firestore",this._queue=new FF,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||YT(this),this._firestoreClient.terminate()}}function GT(e,t){const n=typeof e=="object"?e:gw(),i=typeof e=="string"?e:t||"(default)",s=UR(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=IA("firestore");r&&LF(s,...r)}return s}function Wh(e){return e._firestoreClient||YT(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function YT(e){var t,n,i;const s=e._freezeSettings(),r=function(o,a,l,c){return new bN(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new AF(e._authCredentials,e._appCheckCredentials,e._queue,r),!((n=s.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.cache)===null||i===void 0)&&i._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(t){this._byteString=t}static fromBase64String(t){try{return new so(He.fromBase64String(t))}catch(n){throw new J(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new so(He.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new J(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Be(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new J(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new J(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Rt(this._lat,t._lat)||Rt(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UF=/^__.*__$/;class XT{constructor(t,n,i){this.data=t,this.fieldMask=n,this.fieldTransforms=i}toMutation(t,n){return new ur(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function QT(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw nt()}}class Pm{constructor(t,n,i,s,r,o){this.settings=t,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.Jc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(t){return new Pm(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(t){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.Zc({path:i,ta:!1});return s.ea(t),s}na(t){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.Zc({path:i,ta:!1});return s.Jc(),s}sa(t){return this.Zc({path:void 0,ta:!0})}ia(t){return Cu(t,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let t=0;t<this.path.length;t++)this.ea(this.path.get(t))}ea(t){if(t.length===0)throw this.ia("Document fields must not be empty");if(QT(this.Yc)&&UF.test(t))throw this.ia('Document fields cannot begin and end with "__"')}}class BF{constructor(t,n,i){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=i||$h(t)}ua(t,n,i,s=!1){return new Pm({Yc:t,methodName:n,oa:i,path:Be.emptyPath(),ta:!1,ra:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function VF(e){const t=e._freezeSettings(),n=$h(e._databaseId);return new BF(e._databaseId,!!t.ignoreUndefinedProperties,n)}class Gh extends Om{_toFieldTransform(t){if(t.Yc!==2)throw t.Yc===1?t.ia(`${this._methodName}() can only appear at the top level of your update data`):t.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Gh}}function $F(e,t,n,i){const s=e.ua(1,t,n);ZT("Data must be an object, but it was:",s,i);const r=[],o=hn.empty();cr(i,(l,c)=>{const u=Mm(t,l,n);c=an(c);const h=s.na(u);if(c instanceof Gh)r.push(u);else{const f=Yh(c,h);f!=null&&(r.push(u),o.set(u,f))}});const a=new Nn(r);return new XT(o,a,s.fieldTransforms)}function zF(e,t,n,i,s,r){const o=e.ua(1,t,n),a=[Wv(t,i,n)],l=[s];if(r.length%2!=0)throw new J(D.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<r.length;f+=2)a.push(Wv(t,r[f])),l.push(r[f+1]);const c=[],u=hn.empty();for(let f=a.length-1;f>=0;--f)if(!WF(c,a[f])){const d=a[f];let p=l[f];p=an(p);const g=o.na(d);if(p instanceof Gh)c.push(d);else{const m=Yh(p,g);m!=null&&(c.push(d),u.set(d,m))}}const h=new Nn(c);return new XT(u,h,o.fieldTransforms)}function Yh(e,t){if(JT(e=an(e)))return ZT("Unsupported field value:",t,e),HF(e,t);if(e instanceof Om)return function(n,i){if(!QT(i.Yc))throw i.ia(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.ia(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ta&&t.Yc!==4)throw t.ia("Nested arrays are not supported");return function(n,i){const s=[];let r=0;for(const o of n){let a=Yh(o,i.sa(r));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),r++}return{arrayValue:{values:s}}}(e,t)}return function(n,i){if((n=an(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return zN(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=fe.fromDate(n);return{timestampValue:Eu(i.serializer,s)}}if(n instanceof fe){const s=new fe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Eu(i.serializer,s)}}if(n instanceof qh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof so)return{bytesValue:xT(i.serializer,n._byteString)};if(n instanceof rn){const s=i.databaseId,r=n.firestore._databaseId;if(!r.isEqual(s))throw i.ia(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:mm(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i.ia(`Unsupported field value: ${Dm(n)}`)}(e,t)}function HF(e,t){const n={};return Yx(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):cr(e,(i,s)=>{const r=Yh(s,t.Xc(i));r!=null&&(n[i]=r)}),{mapValue:{fields:n}}}function JT(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof fe||e instanceof qh||e instanceof so||e instanceof rn||e instanceof Om)}function ZT(e,t,n){if(!JT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=Dm(n);throw i==="an object"?t.ia(e+" a custom object"):t.ia(e+" "+i)}}function Wv(e,t,n){if((t=an(t))instanceof Kh)return t._internalPath;if(typeof t=="string")return Mm(e,t);throw Cu("Field path arguments must be of type string or ",e,!1,void 0,n)}const jF=new RegExp("[~\\*/\\[\\]]");function Mm(e,t,n){if(t.search(jF)>=0)throw Cu(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Kh(...t.split("."))._internalPath}catch{throw Cu(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Cu(e,t,n,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new J(D.INVALID_ARGUMENT,a+e+l)}function WF(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(t,n,i,s,r){this._firestore=t,this._userDataWriter=n,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new rn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new KF(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(eC("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class KF extends tC{data(){return super.data()}}function eC(e,t){return typeof t=="string"?Mm(e,t):t instanceof Kh?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nC(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new J(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class qF{convertValue(t,n="none"){switch(Zs(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ue(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Jr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw nt()}}convertObject(t,n){const i={};return cr(t.fields,(s,r)=>{i[s]=this.convertValue(r,n)}),i}convertGeoPoint(t){return new qh(ue(t.latitude),ue(t.longitude))}convertArray(t,n){return(t.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(t,n){switch(n){case"previous":const i=Qx(t);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(za(t));default:return null}}convertTimestamp(t){const n=ls(t);return new fe(n.seconds,n.nanos)}convertDocumentKey(t,n){const i=Xt.fromString(t);Kt(kT(i));const s=new Ha(i.get(1),i.get(3)),r=new Z(i.popFirst(5));return s.isEqual(n)||Si(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class iC extends tC{constructor(t,n,i,s,r,o){super(t,n,i,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Nc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const i=this._document.data.field(eC("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class Nc extends iC{data(t={}){return super.data(t)}}class sC{constructor(t,n,i,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new Go(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(i=>{t.call(n,new Nc(this._firestore,this._userDataWriter,i.key,i,new Go(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new J(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let r=0;return i._snapshot.docChanges.map(o=>{const a=new Nc(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Go(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new Nc(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Go(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:GF(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function GF(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return nt()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rC(e){e=ni(e,rn);const t=ni(e.firestore,io);return PF(Wh(t),e._key).then(n=>oC(t,e,n))}class Nm extends qF{constructor(t){super(),this.firestore=t}convertBytes(t){return new so(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new rn(this.firestore,null,n)}}function YF(e){e=ni(e,Sl);const t=ni(e.firestore,io),n=Wh(t),i=new Nm(t);return nC(e._query),MF(n,e._query).then(s=>new sC(t,i,e,s))}function Lo(e,t,n,...i){e=ni(e,rn);const s=ni(e.firestore,io),r=VF(s);let o;return o=typeof(t=an(t))=="string"||t instanceof Kh?zF(r,"updateDoc",e._key,t,n,i):$F(r,"updateDoc",e._key,t),XF(s,[o.toMutation(e._key,xi.exists(!0))])}function Lm(e,...t){var n,i,s;e=an(e);let r={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||jv(t[o])||(r=t[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(jv(t[o])){const h=t[o];t[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),t[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),t[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let l,c,u;if(e instanceof rn)c=ni(e.firestore,io),u=Mh(e._key.path),l={next:h=>{t[o]&&t[o](oC(c,e,h))},error:t[o+1],complete:t[o+2]};else{const h=ni(e,Sl);c=ni(h.firestore,io),u=h._query;const f=new Nm(c);l={next:d=>{t[o]&&t[o](new sC(c,f,h,d))},error:t[o+1],complete:t[o+2]},nC(e._query)}return function(h,f,d,p){const g=new Rm(p),m=new km(f,g,d);return h.asyncQueue.enqueueAndForget(async()=>Cm(await Tu(h),m)),()=>{g.yc(),h.asyncQueue.enqueueAndForget(async()=>Sm(await Tu(h),m))}}(Wh(c),u,a,l)}function XF(e,t){return function(n,i){const s=new Ei;return n.asyncQueue.enqueueAndForget(async()=>vF(await OF(n),i,s)),s.promise}(Wh(e),t)}function oC(e,t,n){const i=n.docs.get(t._key),s=new Nm(e);return new iC(e,s,t._key,i,new Go(n.hasPendingWrites,n.fromCache),t.converter)}(function(e,t=!0){(function(n){Co=n})(vo),ri(new zn("firestore",(n,{instanceIdentifier:i,options:s})=>{const r=n.getProvider("app").getImmediate(),o=new io(new rN(n.getProvider("auth-internal")),new cN(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new J(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ha(a.options.projectId,l)}(r,i),r);return s=Object.assign({useFetchStreams:t},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),pn(fv,"3.10.1",e),pn(fv,"3.10.1","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC="firebasestorage.googleapis.com",QF="storageBucket",JF=2*60*1e3,ZF=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui extends Pi{constructor(t,n,i=0){super(Bf(t),`Firebase Storage: ${n} (${Bf(t)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ui.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Bf(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ci;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ci||(ci={}));function Bf(e){return"storage/"+e}function t4(){const e="An unknown error occurred, please check the error payload for server response.";return new ui(ci.UNKNOWN,e)}function e4(){return new ui(ci.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function n4(){return new ui(ci.CANCELED,"User canceled the upload/download.")}function i4(e){return new ui(ci.INVALID_URL,"Invalid URL '"+e+"'.")}function s4(e){return new ui(ci.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Kv(e){return new ui(ci.INVALID_ARGUMENT,e)}function lC(){return new ui(ci.APP_DELETED,"The Firebase app was deleted.")}function r4(e){return new ui(ci.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let i;try{i=Ln.makeFromUrl(t,n)}catch{return new Ln(t,"")}if(i.path==="")return i;throw s4(t)}static makeFromUrl(t,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(E){E.path_=decodeURIComponent(E.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${s}/o${f}`,"i"),p={bucket:1,path:3},g=n===aC?"(?:storage.googleapis.com|storage.cloud.google.com)":n,m="([^?#]*)",_=new RegExp(`^https?://${g}/${s}/${m}`,"i"),w=[{regex:a,indices:l,postModify:r},{regex:d,indices:p,postModify:c},{regex:_,indices:{bucket:1,path:2},postModify:c}];for(let E=0;E<w.length;E++){const x=w[E],A=x.regex.exec(t);if(A){const S=A[x.indices.bucket];let C=A[x.indices.path];C||(C=""),i=new Ln(S,C),x.postModify(i);break}}if(i==null)throw i4(t);return i}}class o4{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a4(e,t,n){let i=1,s=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...m){c||(c=!0,t.apply(null,m))}function h(m){s=setTimeout(()=>{s=null,e(d,l())},m)}function f(){r&&clearTimeout(r)}function d(m,..._){if(c){f();return}if(m){f(),u.call(null,m,..._);return}if(l()||o){f(),u.call(null,m,..._);return}i<64&&(i*=2);let w;a===1?(a=2,w=0):w=(i+Math.random())*1e3,h(w)}let p=!1;function g(m){p||(p=!0,f(),!c&&(s!==null?(m||(a=2),clearTimeout(s),h(0)):m||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,g(!0)},n),g}function l4(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c4(e){return e!==void 0}function qv(e,t,n,i){if(i<t)throw Kv(`Invalid value for '${e}'. Expected ${t} or greater.`);if(i>n)throw Kv(`Invalid value for '${e}'. Expected ${n} or less.`)}function u4(e){const t=encodeURIComponent;let n="?";for(const i in e)if(e.hasOwnProperty(i)){const s=t(i)+"="+t(e[i]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Su;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(Su||(Su={}));/**
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
 */function h4(e,t){const n=e>=500&&e<600,s=[408,429].indexOf(e)!==-1,r=t.indexOf(e)!==-1;return n||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f4{constructor(t,n,i,s,r,o,a,l,c,u,h,f=!0){this.url_=t,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,p)=>{this.resolve_=d,this.reject_=p,this.start_()})}start_(){const t=(i,s)=>{if(s){i(!1,new tc(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Su.NO_ERROR,l=r.getStatus();if(!a||h4(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Su.ABORT;i(!1,new tc(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;i(!0,new tc(c,r))})},n=(i,s)=>{const r=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());c4(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=t4();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?lC():n4();o(l)}else{const l=e4();o(l)}};this.canceled_?n(!1,new tc(!1,null,!0)):this.backoffId_=a4(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&l4(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class tc{constructor(t,n,i){this.wasSuccessCode=t,this.connection=n,this.canceled=!!i}}function d4(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function p4(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function g4(e,t){t&&(e["X-Firebase-GMPID"]=t)}function m4(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function _4(e,t,n,i,s,r,o=!0){const a=u4(e.urlParams),l=e.url+a,c=Object.assign({},e.headers);return g4(c,t),d4(c,n),p4(c,r),m4(c,i),new f4(l,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y4(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function v4(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */class Iu{constructor(t,n){this._service=t,n instanceof Ln?this._location=n:this._location=Ln.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new Iu(t,n)}get root(){const t=new Ln(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return v4(this._location.path)}get storage(){return this._service}get parent(){const t=y4(this._location.path);if(t===null)return null;const n=new Ln(this._location.bucket,t);return new Iu(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw r4(t)}}function Gv(e,t){const n=t==null?void 0:t[QF];return n==null?null:Ln.makeFromBucketSpec(n,e)}class b4{constructor(t,n,i,s,r){this.app=t,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=aC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=JF,this._maxUploadRetryTime=ZF,this._requests=new Set,s!=null?this._bucket=Ln.makeFromBucketSpec(s,this._host):this._bucket=Gv(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Ln.makeFromBucketSpec(this._url,t):this._bucket=Gv(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){qv("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){qv("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Iu(this,t)}_makeRequest(t,n,i,s,r=!0){if(this._deleted)return new o4(lC());{const o=_4(t,this._appId,i,s,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,i,s).getPromise()}}const Yv="@firebase/storage",Xv="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w4="storage";function E4(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new b4(n,i,s,t,vo)}function x4(){ri(new zn(w4,E4,"PUBLIC").setMultipleInstances(!0)),pn(Yv,Xv,""),pn(Yv,Xv,"esm2017")}x4();const Vf=new WeakMap;function cC(e,t){return Vf.has(t)||Vf.set(t,e||{f:{},r:{},s:{},u:{}}),Vf.get(t)}function T4(e,t,n,i){if(!e)return n;const[s,r]=uC(e);if(!s)return n;const o=cC(void 0,i)[s]||{},a=t||r;return a&&a in o?o[a]:n}function C4(e,t,n,i){if(!e)return;const[s,r]=uC(e);if(!s)return;const o=cC(void 0,i)[s],a=t||r;if(a)return n.then(l=>{o[a]=l}).catch(Jn),a}function uC(e){return hO(e)||fO(e)?["f",e.path]:dO(e)?["r",e.toString()]:pO(e)?["s",e.toString()]:[]}const $f=new WeakMap;function S4(e,t,n){const i=yg();$f.has(i)||$f.set(i,new Map);const s=$f.get(i),r=C4(t,n,e,i);return r&&s.set(r,e),r?()=>s.delete(r):Jn}const I4={toFirestore(e){return e},fromFirestore(e,t){return e.exists()?Object.defineProperties(e.data(t),{id:{value:e.id}}):null}};function hp(e,t,n,i){if(!uO(e))return[e,{}];const s=[{},{}],r=Object.keys(n).reduce((a,l)=>{const c=n[l];return a[c.path]=c.data(),a},{});function o(a,l,c,u){l=l||{};const[h,f]=u;Object.getOwnPropertyNames(a).forEach(d=>{const p=Object.getOwnPropertyDescriptor(a,d);p&&!p.enumerable&&Object.defineProperty(h,d,p)});for(const d in a){const p=a[d];if(p==null||p instanceof Date||p instanceof fe||p instanceof qh)h[d]=p;else if(bg(p)){const g=c+d;h[d]=g in n?l[d]:p.path,f[g]=p.converter?p:p.withConverter(i.converter)}else if(Array.isArray(p)){h[d]=Array(p.length);for(let g=0;g<p.length;g++){const m=p[g];m&&m.path in r&&(h[d][g]=r[m.path])}o(p,l[d]||h[d],c+d+".",[h[d],f])}else rr(p)?(h[d]={},o(p,l[d],c+d+".",[h[d],f])):h[d]=p}}return o(e,t,"",s),s}const Fm={reset:!1,wait:!0,maxRefDepth:2,converter:I4,snapshotOptions:{serverTimestamps:"estimate"}};function ku(e){for(const t in e)e[t].unsub()}function fp(e,t,n,i,s,r,o,a,l){const[c,u]=hp(i.data(e.snapshotOptions),vg(t,n),s,e);r.set(t,n,c),dp(e,t,n,s,u,r,o,a,l)}function k4({ref:e,target:t,path:n,depth:i,resolve:s,reject:r,ops:o},a){const l=Object.create(null);let c=Jn;return a.once?rC(e).then(u=>{u.exists()?fp(a,t,n,u,l,o,i,s,r):(o.set(t,n,null),s())}).catch(r):c=Lm(e,u=>{u.exists()?fp(a,t,n,u,l,o,i,s,r):(o.set(t,n,null),s())},r),()=>{c(),ku(l)}}function dp(e,t,n,i,s,r,o,a,l){const c=Object.keys(s);if(Object.keys(i).filter(g=>c.indexOf(g)<0).forEach(g=>{i[g].unsub(),delete i[g]}),!c.length||++o>e.maxRefDepth)return a(n);let h=0;const f=c.length,d=Object.create(null);function p(g){g in d&&++h>=f&&a(n)}c.forEach(g=>{const m=i[g],_=s[g],v=`${n}.${g}`;if(d[v]=!0,m)if(m.path!==_.path)m.unsub();else return;i[g]={data:()=>vg(t,v),unsub:k4({ref:_,target:t,path:v,depth:o,ops:r,resolve:p.bind(null,v),reject:l},e),path:_.path}})}function A4(e,t,n,i,s,r){const o=Object.assign({},Fm,r),{snapshotListenOptions:a,snapshotOptions:l,wait:c,once:u}=o,h="value";let f=xn(c?[]:e.value);c||n.set(e,h,[]);const d=i;let p,g=Jn;const m=[],_={added:({newIndex:w,doc:E})=>{m.splice(w,0,Object.create(null));const x=m[w],[A,S]=hp(E.data(l),void 0,x,o);n.add($(f),w,A),dp(o,f,`${h}.${w}`,x,S,n,0,i.bind(null,E),s)},modified:({oldIndex:w,newIndex:E,doc:x})=>{const A=$(f),S=m[w],C=A[w],[U,G]=hp(x.data(l),C,S,o);m.splice(E,0,S),n.remove(A,w),n.add(A,E,U),dp(o,f,`${h}.${E}`,S,G,n,0,i,s)},removed:({oldIndex:w})=>{const E=$(f);n.remove(E,w),ku(m.splice(w,1)[0])}};function v(w){const E=w.docChanges(a);if(!p&&E.length){p=!0;let x=0;const A=E.length,S=Object.create(null);for(let C=0;C<A;C++)S[E[C].doc.id]=!0;i=C=>{C&&C.id in S&&++x>=A&&(c&&(n.set(e,h,$(f)),f=e),d($(f)),i=Jn)}}E.forEach(x=>{_[x.type](x)}),E.length||(c&&(n.set(e,h,$(f)),f=e),i($(f)))}return u?YF(t).then(v).catch(s):g=Lm(t,v,s),w=>{if(g(),w){const E=typeof w=="function"?w():[];n.set(e,h,E)}m.forEach(ku)}}function R4(e,t,n,i,s,r){const o=Object.assign({},Fm,r),a="value",l=Object.create(null);i=gO(i,()=>vg(e,a));let c=Jn;function u(h){h.exists()?fp(o,e,a,h,l,n,0,i,s):(n.set(e,a,null),i(null))}return o.once?rC(t).then(u).catch(s):c=Lm(t,u,s),h=>{if(c(),h){const f=typeof h=="function"?h():null;n.set(e,a,f)}ku(l)}}function D4(e,t){let n=Jn;const i=Object.assign({},Fm,t),s=$(e),r=i.target||xn();mO()&&(i.once=!0);const o=T4(s,i.ssrKey,r.value,yg());r.value=o;let l=!(Pw(s)?(o||[]).length>0:o!==void 0);const c=xn(!1),u=xn(),h=Ju(),f=Kp();let d=Jn;function p(){let _=$(e);const v=new Promise((w,E)=>{if(n(i.reset),!_)return n=Jn,w(null);c.value=l,l=!0,_.converter||(_=_.withConverter(i.converter)),n=(bg(_)?R4:A4)(r,_,O4,w,E,i)}).catch(w=>(h.value===v&&(u.value=w),Promise.reject(w))).finally(()=>{h.value===v&&(c.value=!1)});h.value=v}let g=Jn;ee(e)&&(g=Qi(e,p)),p(),s&&(d=S4(h.value,s,i.ssrKey)),sl()&&N1(()=>h.value),f&&l1(m);function m(_=i.reset){g(),d(),n(_)}return Object.defineProperties(r,{error:{get:()=>u},data:{get:()=>r},pending:{get:()=>c},promise:{get:()=>h},stop:{get:()=>m}})}const O4={set:(e,t,n)=>lO(e,t,n),add:(e,t,n)=>e.splice(t,0,n),remove:(e,t)=>e.splice(t,1)};function fn(e,t){return D4(e,t)}function Il(e){return GT(yg(e))}function P4(e,{firebaseApp:t,modules:n=[]}){e.provide(Ow,t);for(const i of n)e.use(i.bind(null,t))}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Tr=typeof window<"u";function M4(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Mt=Object.assign;function zf(e,t){const n={};for(const i in t){const s=t[i];n[i]=Hn(s)?s.map(e):e(s)}return n}const pa=()=>{},Hn=Array.isArray,N4=/\/$/,L4=e=>e.replace(N4,"");function Hf(e,t,n="/"){let i,s={},r="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=t.slice(0,l),r=t.slice(l+1,a>-1?a:t.length),s=e(r)),a>-1&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=V4(i??t,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function F4(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Qv(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function U4(e,t,n){const i=t.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&ro(t.matched[i],n.matched[s])&&hC(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function ro(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function hC(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!B4(e[n],t[n]))return!1;return!0}function B4(e,t){return Hn(e)?Jv(e,t):Hn(t)?Jv(t,e):e===t}function Jv(e,t){return Hn(t)?e.length===t.length&&e.every((n,i)=>n===t[i]):e.length===1&&e[0]===t}function V4(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),i=e.split("/");let s=n.length-1,r,o;for(r=0;r<i.length;r++)if(o=i[r],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(r-(r===i.length?1:0)).join("/")}var qa;(function(e){e.pop="pop",e.push="push"})(qa||(qa={}));var ga;(function(e){e.back="back",e.forward="forward",e.unknown=""})(ga||(ga={}));function $4(e){if(!e)if(Tr){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),L4(e)}const z4=/^[^#]+#/;function H4(e,t){return e.replace(z4,"#")+t}function j4(e,t){const n=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:t.behavior,left:i.left-n.left-(t.left||0),top:i.top-n.top-(t.top||0)}}const Xh=()=>({left:window.pageXOffset,top:window.pageYOffset});function W4(e){let t;if("el"in e){const n=e.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=j4(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Zv(e,t){return(history.state?history.state.position-t:-1)+e}const pp=new Map;function K4(e,t){pp.set(e,t)}function q4(e){const t=pp.get(e);return pp.delete(e),t}let G4=()=>location.protocol+"//"+location.host;function fC(e,t){const{pathname:n,search:i,hash:s}=t,r=e.indexOf("#");if(r>-1){let a=s.includes(e.slice(r))?e.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Qv(l,"")}return Qv(n,e)+i+s}function Y4(e,t,n,i){let s=[],r=[],o=null;const a=({state:f})=>{const d=fC(e,location),p=n.value,g=t.value;let m=0;if(f){if(n.value=d,t.value=f,o&&o===p){o=null;return}m=g?f.position-g.position:0}else i(d);s.forEach(_=>{_(n.value,p,{delta:m,type:qa.pop,direction:m?m>0?ga.forward:ga.back:ga.unknown})})};function l(){o=n.value}function c(f){s.push(f);const d=()=>{const p=s.indexOf(f);p>-1&&s.splice(p,1)};return r.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(Mt({},f.state,{scroll:Xh()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function tb(e,t,n,i=!1,s=!1){return{back:e,current:t,forward:n,replaced:i,position:window.history.length,scroll:s?Xh():null}}function X4(e){const{history:t,location:n}=window,i={value:fC(e,n)},s={value:t.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=e.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?e:e.slice(h))+l:G4()+e+l;try{t[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(l,c){const u=Mt({},t.state,tb(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=Mt({},s.value,t.state,{forward:l,scroll:Xh()});r(u.current,u,!0);const h=Mt({},tb(i.value,l,null),{position:u.position+1},c);r(l,h,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function Q4(e){e=$4(e);const t=X4(e),n=Y4(e,t.state,t.location,t.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=Mt({location:"",base:e,go:i,createHref:H4.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function J4(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Q4(e)}function Z4(e){return typeof e=="string"||e&&typeof e=="object"}function dC(e){return typeof e=="string"||typeof e=="symbol"}const Bi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},pC=Symbol("");var eb;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(eb||(eb={}));function oo(e,t){return Mt(new Error,{type:e,[pC]:!0},t)}function fi(e,t){return e instanceof Error&&pC in e&&(t==null||!!(e.type&t))}const nb="[^/]+?",t3={sensitive:!1,strict:!1,start:!0,end:!0},e3=/[.+*?^${}()[\]/\\]/g;function n3(e,t){const n=Mt({},t3,t),i=[];let s=n.start?"^":"";const r=[];for(const c of e){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(e3,"\\$&"),d+=40;else if(f.type===1){const{value:p,repeatable:g,optional:m,regexp:_}=f;r.push({name:p,repeatable:g,optional:m});const v=_||nb;if(v!==nb){d+=10;try{new RegExp(`(${v})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${p}" (${v}): `+E.message)}}let w=g?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;h||(w=m&&c.length<2?`(?:/${w})`:"/"+w),m&&(w+="?"),s+=w,d+=20,m&&(d+=-8),g&&(d+=-20),v===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",p=r[f-1];h[p.name]=d&&p.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of e){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:p,repeatable:g,optional:m}=d,_=p in c?c[p]:"";if(Hn(_)&&!g)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const v=Hn(_)?_.join("/"):_;if(!v)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);u+=v}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function i3(e,t){let n=0;for(;n<e.length&&n<t.length;){const i=t[n]-e[n];if(i)return i;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function s3(e,t){let n=0;const i=e.score,s=t.score;for(;n<i.length&&n<s.length;){const r=i3(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(ib(i))return 1;if(ib(s))return-1}return s.length-i.length}function ib(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const r3={type:0,value:""},o3=/[a-zA-Z0-9_]/;function a3(e){if(!e)return[[]];if(e==="/")return[[r3]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(d){throw new Error(`ERR (${n})/"${c}": ${d}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):f();break;case 4:f(),n=i;break;case 1:l==="("?n=2:o3.test(l)?f():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function l3(e,t,n){const i=n3(a3(e.path),n),s=Mt(i,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function c3(e,t){const n=[],i=new Map;t=ob({strict:!1,end:!0,sensitive:!1},t);function s(u){return i.get(u)}function r(u,h,f){const d=!f,p=u3(u);p.aliasOf=f&&f.record;const g=ob(t,u),m=[p];if("alias"in u){const w=typeof u.alias=="string"?[u.alias]:u.alias;for(const E of w)m.push(Mt({},p,{components:f?f.record.components:p.components,path:E,aliasOf:f?f.record:p}))}let _,v;for(const w of m){const{path:E}=w;if(h&&E[0]!=="/"){const x=h.record.path,A=x[x.length-1]==="/"?"":"/";w.path=h.record.path+(E&&A+E)}if(_=l3(w,h,g),f?f.alias.push(_):(v=v||_,v!==_&&v.alias.push(_),d&&u.name&&!rb(_)&&o(u.name)),p.children){const x=p.children;for(let A=0;A<x.length;A++)r(x[A],_,f&&f.children[A])}f=f||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&l(_)}return v?()=>{o(v)}:pa}function o(u){if(dC(u)){const h=i.get(u);h&&(i.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&s3(u,n[h])>=0&&(u.record.path!==n[h].record.path||!gC(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!rb(u)&&i.set(u.record.name,u)}function c(u,h){let f,d={},p,g;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw oo(1,{location:u});g=f.record.name,d=Mt(sb(h.params,f.keys.filter(v=>!v.optional).map(v=>v.name)),u.params&&sb(u.params,f.keys.map(v=>v.name))),p=f.stringify(d)}else if("path"in u)p=u.path,f=n.find(v=>v.re.test(p)),f&&(d=f.parse(p),g=f.record.name);else{if(f=h.name?i.get(h.name):n.find(v=>v.re.test(h.path)),!f)throw oo(1,{location:u,currentLocation:h});g=f.record.name,d=Mt({},h.params,u.params),p=f.stringify(d)}const m=[];let _=f;for(;_;)m.unshift(_.record),_=_.parent;return{name:g,path:p,params:d,matched:m,meta:f3(m)}}return e.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function sb(e,t){const n={};for(const i of t)i in e&&(n[i]=e[i]);return n}function u3(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:h3(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function h3(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const i in e.components)t[i]=typeof n=="boolean"?n:n[i];return t}function rb(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function f3(e){return e.reduce((t,n)=>Mt(t,n.meta),{})}function ob(e,t){const n={};for(const i in e)n[i]=i in t?t[i]:e[i];return n}function gC(e,t){return t.children.some(n=>n===e||gC(e,n))}const mC=/#/g,d3=/&/g,p3=/\//g,g3=/=/g,m3=/\?/g,_C=/\+/g,_3=/%5B/g,y3=/%5D/g,yC=/%5E/g,v3=/%60/g,vC=/%7B/g,b3=/%7C/g,bC=/%7D/g,w3=/%20/g;function Um(e){return encodeURI(""+e).replace(b3,"|").replace(_3,"[").replace(y3,"]")}function E3(e){return Um(e).replace(vC,"{").replace(bC,"}").replace(yC,"^")}function gp(e){return Um(e).replace(_C,"%2B").replace(w3,"+").replace(mC,"%23").replace(d3,"%26").replace(v3,"`").replace(vC,"{").replace(bC,"}").replace(yC,"^")}function x3(e){return gp(e).replace(g3,"%3D")}function T3(e){return Um(e).replace(mC,"%23").replace(m3,"%3F")}function C3(e){return e==null?"":T3(e).replace(p3,"%2F")}function Au(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function S3(e){const t={};if(e===""||e==="?")return t;const i=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(_C," "),o=r.indexOf("="),a=Au(o<0?r:r.slice(0,o)),l=o<0?null:Au(r.slice(o+1));if(a in t){let c=t[a];Hn(c)||(c=t[a]=[c]),c.push(l)}else t[a]=l}return t}function ab(e){let t="";for(let n in e){const i=e[n];if(n=x3(n),i==null){i!==void 0&&(t+=(t.length?"&":"")+n);continue}(Hn(i)?i.map(r=>r&&gp(r)):[i&&gp(i)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function I3(e){const t={};for(const n in e){const i=e[n];i!==void 0&&(t[n]=Hn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return t}const k3=Symbol(""),lb=Symbol(""),Qh=Symbol(""),Bm=Symbol(""),mp=Symbol("");function Fo(){let e=[];function t(i){return e.push(i),()=>{const s=e.indexOf(i);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function ji(e,t,n,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(oo(4,{from:n,to:t})):h instanceof Error?a(h):Z4(h)?a(oo(2,{from:t,to:h})):(r&&i.enterCallbacks[s]===r&&typeof h=="function"&&r.push(h),o())},c=e.call(i&&i.instances[s],t,n,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function jf(e,t,n,i){const s=[];for(const r of e)for(const o in r.components){let a=r.components[o];if(!(t!=="beforeRouteEnter"&&!r.instances[o]))if(A3(a)){const c=(a.__vccOpts||a)[t];c&&s.push(ji(c,n,i,r,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=M4(c)?c.default:c;r.components[o]=u;const f=(u.__vccOpts||u)[t];return f&&ji(f,n,i,r,o)()}))}}return s}function A3(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function cb(e){const t=sn(Qh),n=sn(Bm),i=Et(()=>t.resolve($(e.to))),s=Et(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(ro.bind(null,u));if(f>-1)return f;const d=ub(l[c-2]);return c>1&&ub(u)===d&&h[h.length-1].path!==d?h.findIndex(ro.bind(null,l[c-2])):f}),r=Et(()=>s.value>-1&&P3(n.params,i.value.params)),o=Et(()=>s.value>-1&&s.value===n.matched.length-1&&hC(n.params,i.value.params));function a(l={}){return O3(l)?t[$(e.replace)?"replace":"push"]($(e.to)).catch(pa):Promise.resolve()}return{route:i,href:Et(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const R3=sr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:cb,setup(e,{slots:t}){const n=rs(cb(e)),{options:i}=sn(Qh),s=Et(()=>({[hb(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[hb(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&t.default(n);return e.custom?r:mo("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),D3=R3;function O3(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function P3(e,t){for(const n in t){const i=t[n],s=e[n];if(typeof i=="string"){if(i!==s)return!1}else if(!Hn(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function ub(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const hb=(e,t,n)=>e??t??n,M3=sr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const i=sn(mp),s=Et(()=>e.route||i.value),r=sn(lb,0),o=Et(()=>{let c=$(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Et(()=>s.value.matched[o.value]);Ic(lb,Et(()=>o.value+1)),Ic(k3,a),Ic(mp,s);const l=xn();return Qi(()=>[l.value,a.value,e.name],([c,u,h],[f,d,p])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!ro(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(g=>g(c))},{flush:"post"}),()=>{const c=s.value,u=e.name,h=a.value,f=h&&h.components[u];if(!f)return fb(n.default,{Component:f,route:c});const d=h.props[u],p=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=mo(f,Mt({},p,t,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return fb(n.default,{Component:m,route:c})||m}}});function fb(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const wC=M3;function N3(e){const t=c3(e.routes,e),n=e.parseQuery||S3,i=e.stringifyQuery||ab,s=e.history,r=Fo(),o=Fo(),a=Fo(),l=Ju(Bi);let c=Bi;Tr&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=zf.bind(null,k=>""+k),h=zf.bind(null,C3),f=zf.bind(null,Au);function d(k,B){let V,Y;return dC(k)?(V=t.getRecordMatcher(k),Y=B):Y=k,t.addRoute(Y,V)}function p(k){const B=t.getRecordMatcher(k);B&&t.removeRoute(B)}function g(){return t.getRoutes().map(k=>k.record)}function m(k){return!!t.getRecordMatcher(k)}function _(k,B){if(B=Mt({},B||l.value),typeof k=="string"){const y=Hf(n,k,B.path),b=t.resolve({path:y.path},B),T=s.createHref(y.fullPath);return Mt(y,b,{params:f(b.params),hash:Au(y.hash),redirectedFrom:void 0,href:T})}let V;if("path"in k)V=Mt({},k,{path:Hf(n,k.path,B.path).path});else{const y=Mt({},k.params);for(const b in y)y[b]==null&&delete y[b];V=Mt({},k,{params:h(k.params)}),B.params=h(B.params)}const Y=t.resolve(V,B),Ct=k.hash||"";Y.params=u(f(Y.params));const Zt=F4(i,Mt({},k,{hash:E3(Ct),path:Y.path})),pt=s.createHref(Zt);return Mt({fullPath:Zt,hash:Ct,query:i===ab?I3(k.query):k.query||{}},Y,{redirectedFrom:void 0,href:pt})}function v(k){return typeof k=="string"?Hf(n,k,l.value.path):Mt({},k)}function w(k,B){if(c!==k)return oo(8,{from:B,to:k})}function E(k){return S(k)}function x(k){return E(Mt(v(k),{replace:!0}))}function A(k){const B=k.matched[k.matched.length-1];if(B&&B.redirect){const{redirect:V}=B;let Y=typeof V=="function"?V(k):V;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=v(Y):{path:Y},Y.params={}),Mt({query:k.query,hash:k.hash,params:"path"in Y?{}:k.params},Y)}}function S(k,B){const V=c=_(k),Y=l.value,Ct=k.state,Zt=k.force,pt=k.replace===!0,y=A(V);if(y)return S(Mt(v(y),{state:typeof y=="object"?Mt({},Ct,y.state):Ct,force:Zt,replace:pt}),B||V);const b=V;b.redirectedFrom=B;let T;return!Zt&&U4(i,Y,V)&&(T=oo(16,{to:b,from:Y}),Ye(Y,Y,!0,!1)),(T?Promise.resolve(T):U(b,Y)).catch(I=>fi(I)?fi(I,2)?I:Re(I):ft(I,b,Y)).then(I=>{if(I){if(fi(I,2))return S(Mt({replace:pt},v(I.to),{state:typeof I.to=="object"?Mt({},Ct,I.to.state):Ct,force:Zt}),B||b)}else I=tt(b,Y,!0,pt,Ct);return G(b,Y,I),I})}function C(k,B){const V=w(k,B);return V?Promise.reject(V):Promise.resolve()}function U(k,B){let V;const[Y,Ct,Zt]=L3(k,B);V=jf(Y.reverse(),"beforeRouteLeave",k,B);for(const y of Y)y.leaveGuards.forEach(b=>{V.push(ji(b,k,B))});const pt=C.bind(null,k,B);return V.push(pt),yr(V).then(()=>{V=[];for(const y of r.list())V.push(ji(y,k,B));return V.push(pt),yr(V)}).then(()=>{V=jf(Ct,"beforeRouteUpdate",k,B);for(const y of Ct)y.updateGuards.forEach(b=>{V.push(ji(b,k,B))});return V.push(pt),yr(V)}).then(()=>{V=[];for(const y of k.matched)if(y.beforeEnter&&!B.matched.includes(y))if(Hn(y.beforeEnter))for(const b of y.beforeEnter)V.push(ji(b,k,B));else V.push(ji(y.beforeEnter,k,B));return V.push(pt),yr(V)}).then(()=>(k.matched.forEach(y=>y.enterCallbacks={}),V=jf(Zt,"beforeRouteEnter",k,B),V.push(pt),yr(V))).then(()=>{V=[];for(const y of o.list())V.push(ji(y,k,B));return V.push(pt),yr(V)}).catch(y=>fi(y,8)?y:Promise.reject(y))}function G(k,B,V){for(const Y of a.list())Y(k,B,V)}function tt(k,B,V,Y,Ct){const Zt=w(k,B);if(Zt)return Zt;const pt=B===Bi,y=Tr?history.state:{};V&&(Y||pt?s.replace(k.fullPath,Mt({scroll:pt&&y&&y.scroll},Ct)):s.push(k.fullPath,Ct)),l.value=k,Ye(k,B,V,pt),Re()}let ot;function Jt(){ot||(ot=s.listen((k,B,V)=>{if(!jn.listening)return;const Y=_(k),Ct=A(Y);if(Ct){S(Mt(Ct,{replace:!0}),Y).catch(pa);return}c=Y;const Zt=l.value;Tr&&K4(Zv(Zt.fullPath,V.delta),Xh()),U(Y,Zt).catch(pt=>fi(pt,12)?pt:fi(pt,2)?(S(pt.to,Y).then(y=>{fi(y,20)&&!V.delta&&V.type===qa.pop&&s.go(-1,!1)}).catch(pa),Promise.reject()):(V.delta&&s.go(-V.delta,!1),ft(pt,Y,Zt))).then(pt=>{pt=pt||tt(Y,Zt,!1),pt&&(V.delta&&!fi(pt,8)?s.go(-V.delta,!1):V.type===qa.pop&&fi(pt,20)&&s.go(-1,!1)),G(Y,Zt,pt)}).catch(pa)}))}let Gt=Fo(),ht=Fo(),dt;function ft(k,B,V){Re(k);const Y=ht.list();return Y.length?Y.forEach(Ct=>Ct(k,B,V)):console.error(k),Promise.reject(k)}function Tt(){return dt&&l.value!==Bi?Promise.resolve():new Promise((k,B)=>{Gt.add([k,B])})}function Re(k){return dt||(dt=!k,Jt(),Gt.list().forEach(([B,V])=>k?V(k):B()),Gt.reset()),k}function Ye(k,B,V,Y){const{scrollBehavior:Ct}=e;if(!Tr||!Ct)return Promise.resolve();const Zt=!V&&q4(Zv(k.fullPath,0))||(Y||!V)&&history.state&&history.state.scroll||null;return eg().then(()=>Ct(k,B,Zt)).then(pt=>pt&&W4(pt)).catch(pt=>ft(pt,k,B))}const De=k=>s.go(k);let oe;const yn=new Set,jn={currentRoute:l,listening:!0,addRoute:d,removeRoute:p,hasRoute:m,getRoutes:g,resolve:_,options:e,push:E,replace:x,go:De,back:()=>De(-1),forward:()=>De(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:ht.add,isReady:Tt,install(k){const B=this;k.component("RouterLink",D3),k.component("RouterView",wC),k.config.globalProperties.$router=B,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>$(l)}),Tr&&!oe&&l.value===Bi&&(oe=!0,E(s.location).catch(Ct=>{}));const V={};for(const Ct in Bi)V[Ct]=Et(()=>l.value[Ct]);k.provide(Qh,B),k.provide(Bm,rs(V)),k.provide(mp,l);const Y=k.unmount;yn.add(k),k.unmount=function(){yn.delete(k),yn.size<1&&(c=Bi,ot&&ot(),ot=null,l.value=Bi,oe=!1,dt=!1),Y()}}};return jn}function yr(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function L3(e,t){const n=[],i=[],s=[],r=Math.max(t.matched.length,e.matched.length);for(let o=0;o<r;o++){const a=t.matched[o];a&&(e.matched.find(c=>ro(c,a))?i.push(a):n.push(a));const l=e.matched[o];l&&(t.matched.find(c=>ro(c,l))||s.push(l))}return[n,i,s]}function Vm(){return sn(Qh)}function kl(){return sn(Bm)}const F3={class:"container"},U3={__name:"App",setup(e){const t=kl();return(n,i)=>{const s=rh("RouterView");return lt(),kt("div",F3,[(lt(),Vn(s,{key:$(t).fullPath}))])}}},fr=pw({apiKey:"AIzaSyAnOiG77O1ukT9C2x8u1VbMLw7For9C_3w",authDomain:"bingo-50cec.firebaseapp.com",databaseURL:"https://bingo-50cec-default-rtdb.europe-west1.firebasedatabase.app",projectId:"bingo-50cec",storageBucket:"bingo-50cec.appspot.com",messagingSenderId:"866066986693",appId:"1:866066986693:web:de513df8434d232b0562ac",measurementId:"G-8F3EECYHQ0"}),B3=GT(fr);us(B3,"todos");function db(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,i)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?db(Object(n),!0).forEach(function(i){ye(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):db(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function Ru(e){return Ru=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ru(e)}function V3(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function pb(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function $3(e,t,n){return t&&pb(e.prototype,t),n&&pb(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ye(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $m(e,t){return H3(e)||W3(e,t)||EC(e,t)||q3()}function Al(e){return z3(e)||j3(e)||EC(e)||K3()}function z3(e){if(Array.isArray(e))return _p(e)}function H3(e){if(Array.isArray(e))return e}function j3(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function W3(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var i=[],s=!0,r=!1,o,a;try{for(n=n.call(e);!(s=(o=n.next()).done)&&(i.push(o.value),!(t&&i.length===t));s=!0);}catch(l){r=!0,a=l}finally{try{!s&&n.return!=null&&n.return()}finally{if(r)throw a}}return i}}function EC(e,t){if(e){if(typeof e=="string")return _p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _p(e,t)}}function _p(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function K3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function q3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var gb=function(){},zm={},xC={},TC=null,CC={mark:gb,measure:gb};try{typeof window<"u"&&(zm=window),typeof document<"u"&&(xC=document),typeof MutationObserver<"u"&&(TC=MutationObserver),typeof performance<"u"&&(CC=performance)}catch{}var G3=zm.navigator||{},mb=G3.userAgent,_b=mb===void 0?"":mb,hs=zm,Wt=xC,yb=TC,ec=CC;hs.document;var Ni=!!Wt.documentElement&&!!Wt.head&&typeof Wt.addEventListener=="function"&&typeof Wt.createElement=="function",SC=~_b.indexOf("MSIE")||~_b.indexOf("Trident/"),nc,ic,sc,rc,oc,Ai="___FONT_AWESOME___",yp=16,IC="fa",kC="svg-inline--fa",tr="data-fa-i2svg",vp="data-fa-pseudo-element",Y3="data-fa-pseudo-element-pending",Hm="data-prefix",jm="data-icon",vb="fontawesome-i2svg",X3="async",Q3=["HTML","HEAD","STYLE","SCRIPT"],AC=function(){try{return!0}catch{return!1}}(),Ht="classic",ne="sharp",Wm=[Ht,ne];function Rl(e){return new Proxy(e,{get:function(n,i){return i in n?n[i]:n[Ht]}})}var Ga=Rl((nc={},ye(nc,Ht,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ye(nc,ne,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),nc)),Ya=Rl((ic={},ye(ic,Ht,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ye(ic,ne,{solid:"fass",regular:"fasr",light:"fasl"}),ic)),Xa=Rl((sc={},ye(sc,Ht,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ye(sc,ne,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),sc)),J3=Rl((rc={},ye(rc,Ht,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ye(rc,ne,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),rc)),Z3=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,RC="fa-layers-text",t6=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,e6=Rl((oc={},ye(oc,Ht,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ye(oc,ne,{900:"fass",400:"fasr",300:"fasl"}),oc)),DC=[1,2,3,4,5,6,7,8,9,10],n6=DC.concat([11,12,13,14,15,16,17,18,19,20]),i6=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Fs={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Qa=new Set;Object.keys(Ya[Ht]).map(Qa.add.bind(Qa));Object.keys(Ya[ne]).map(Qa.add.bind(Qa));var s6=[].concat(Wm,Al(Qa),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Fs.GROUP,Fs.SWAP_OPACITY,Fs.PRIMARY,Fs.SECONDARY]).concat(DC.map(function(e){return"".concat(e,"x")})).concat(n6.map(function(e){return"w-".concat(e)})),ma=hs.FontAwesomeConfig||{};function r6(e){var t=Wt.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function o6(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Wt&&typeof Wt.querySelector=="function"){var a6=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];a6.forEach(function(e){var t=$m(e,2),n=t[0],i=t[1],s=o6(r6(n));s!=null&&(ma[i]=s)})}var OC={styleDefault:"solid",familyDefault:"classic",cssPrefix:IC,replacementClass:kC,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ma.familyPrefix&&(ma.cssPrefix=ma.familyPrefix);var ao=H(H({},OC),ma);ao.autoReplaceSvg||(ao.observeMutations=!1);var W={};Object.keys(OC).forEach(function(e){Object.defineProperty(W,e,{enumerable:!0,set:function(n){ao[e]=n,_a.forEach(function(i){return i(W)})},get:function(){return ao[e]}})});Object.defineProperty(W,"familyPrefix",{enumerable:!0,set:function(t){ao.cssPrefix=t,_a.forEach(function(n){return n(W)})},get:function(){return ao.cssPrefix}});hs.FontAwesomeConfig=W;var _a=[];function l6(e){return _a.push(e),function(){_a.splice(_a.indexOf(e),1)}}var Vi=yp,ti={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function c6(e){if(!(!e||!Ni)){var t=Wt.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Wt.head.childNodes,i=null,s=n.length-1;s>-1;s--){var r=n[s],o=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=r)}return Wt.head.insertBefore(t,i),e}}var u6="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ja(){for(var e=12,t="";e-- >0;)t+=u6[Math.random()*62|0];return t}function ko(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Km(e){return e.classList?ko(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function PC(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function h6(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(PC(e[n]),'" ')},"").trim()}function Jh(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function qm(e){return e.size!==ti.size||e.x!==ti.x||e.y!==ti.y||e.rotate!==ti.rotate||e.flipX||e.flipY}function f6(e){var t=e.transform,n=e.containerWidth,i=e.iconWidth,s={transform:"translate(".concat(n/2," 256)")},r="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(r," ").concat(o," ").concat(a)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:s,inner:l,path:c}}function d6(e){var t=e.transform,n=e.width,i=n===void 0?yp:n,s=e.height,r=s===void 0?yp:s,o=e.startCentered,a=o===void 0?!1:o,l="";return a&&SC?l+="translate(".concat(t.x/Vi-i/2,"em, ").concat(t.y/Vi-r/2,"em) "):a?l+="translate(calc(-50% + ".concat(t.x/Vi,"em), calc(-50% + ").concat(t.y/Vi,"em)) "):l+="translate(".concat(t.x/Vi,"em, ").concat(t.y/Vi,"em) "),l+="scale(".concat(t.size/Vi*(t.flipX?-1:1),", ").concat(t.size/Vi*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var p6=`:root, :host {
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
}`;function MC(){var e=IC,t=kC,n=W.cssPrefix,i=W.replacementClass,s=p6;if(n!==e||i!==t){var r=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");s=s.replace(r,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(i))}return s}var bb=!1;function Wf(){W.autoAddCss&&!bb&&(c6(MC()),bb=!0)}var g6={mixout:function(){return{dom:{css:MC,insertCss:Wf}}},hooks:function(){return{beforeDOMElementCreation:function(){Wf()},beforeI2svg:function(){Wf()}}}},Ri=hs||{};Ri[Ai]||(Ri[Ai]={});Ri[Ai].styles||(Ri[Ai].styles={});Ri[Ai].hooks||(Ri[Ai].hooks={});Ri[Ai].shims||(Ri[Ai].shims=[]);var Fn=Ri[Ai],NC=[],m6=function e(){Wt.removeEventListener("DOMContentLoaded",e),Du=1,NC.map(function(t){return t()})},Du=!1;Ni&&(Du=(Wt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Wt.readyState),Du||Wt.addEventListener("DOMContentLoaded",m6));function _6(e){Ni&&(Du?setTimeout(e,0):NC.push(e))}function Dl(e){var t=e.tag,n=e.attributes,i=n===void 0?{}:n,s=e.children,r=s===void 0?[]:s;return typeof e=="string"?PC(e):"<".concat(t," ").concat(h6(i),">").concat(r.map(Dl).join(""),"</").concat(t,">")}function wb(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var y6=function(t,n){return function(i,s,r,o){return t.call(n,i,s,r,o)}},Kf=function(t,n,i,s){var r=Object.keys(t),o=r.length,a=s!==void 0?y6(n,s):n,l,c,u;for(i===void 0?(l=1,u=t[r[0]]):(l=0,u=i);l<o;l++)c=r[l],u=a(u,t[c],c,t);return u};function v6(e){for(var t=[],n=0,i=e.length;n<i;){var s=e.charCodeAt(n++);if(s>=55296&&s<=56319&&n<i){var r=e.charCodeAt(n++);(r&64512)==56320?t.push(((s&1023)<<10)+(r&1023)+65536):(t.push(s),n--)}else t.push(s)}return t}function bp(e){var t=v6(e);return t.length===1?t[0].toString(16):null}function b6(e,t){var n=e.length,i=e.charCodeAt(t),s;return i>=55296&&i<=56319&&n>t+1&&(s=e.charCodeAt(t+1),s>=56320&&s<=57343)?(i-55296)*1024+s-56320+65536:i}function Eb(e){return Object.keys(e).reduce(function(t,n){var i=e[n],s=!!i.icon;return s?t[i.iconName]=i.icon:t[n]=i,t},{})}function wp(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,s=i===void 0?!1:i,r=Eb(t);typeof Fn.hooks.addPack=="function"&&!s?Fn.hooks.addPack(e,Eb(t)):Fn.styles[e]=H(H({},Fn.styles[e]||{}),r),e==="fas"&&wp("fa",t)}var ac,lc,cc,kr=Fn.styles,w6=Fn.shims,E6=(ac={},ye(ac,Ht,Object.values(Xa[Ht])),ye(ac,ne,Object.values(Xa[ne])),ac),Gm=null,LC={},FC={},UC={},BC={},VC={},x6=(lc={},ye(lc,Ht,Object.keys(Ga[Ht])),ye(lc,ne,Object.keys(Ga[ne])),lc);function T6(e){return~s6.indexOf(e)}function C6(e,t){var n=t.split("-"),i=n[0],s=n.slice(1).join("-");return i===e&&s!==""&&!T6(s)?s:null}var $C=function(){var t=function(r){return Kf(kr,function(o,a,l){return o[l]=Kf(a,r,{}),o},{})};LC=t(function(s,r,o){if(r[3]&&(s[r[3]]=o),r[2]){var a=r[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){s[l.toString(16)]=o})}return s}),FC=t(function(s,r,o){if(s[o]=o,r[2]){var a=r[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){s[l]=o})}return s}),VC=t(function(s,r,o){var a=r[2];return s[o]=o,a.forEach(function(l){s[l]=o}),s});var n="far"in kr||W.autoFetchSvg,i=Kf(w6,function(s,r){var o=r[0],a=r[1],l=r[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(s.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(s.unicodes[o.toString(16)]={prefix:a,iconName:l}),s},{names:{},unicodes:{}});UC=i.names,BC=i.unicodes,Gm=Zh(W.styleDefault,{family:W.familyDefault})};l6(function(e){Gm=Zh(e.styleDefault,{family:W.familyDefault})});$C();function Ym(e,t){return(LC[e]||{})[t]}function S6(e,t){return(FC[e]||{})[t]}function Us(e,t){return(VC[e]||{})[t]}function zC(e){return UC[e]||{prefix:null,iconName:null}}function I6(e){var t=BC[e],n=Ym("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function fs(){return Gm}var Xm=function(){return{prefix:null,iconName:null,rest:[]}};function Zh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,i=n===void 0?Ht:n,s=Ga[i][e],r=Ya[i][e]||Ya[i][s],o=e in Fn.styles?e:null;return r||o||null}var xb=(cc={},ye(cc,Ht,Object.keys(Xa[Ht])),ye(cc,ne,Object.keys(Xa[ne])),cc);function tf(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.skipLookups,s=i===void 0?!1:i,r=(t={},ye(t,Ht,"".concat(W.cssPrefix,"-").concat(Ht)),ye(t,ne,"".concat(W.cssPrefix,"-").concat(ne)),t),o=null,a=Ht;(e.includes(r[Ht])||e.some(function(c){return xb[Ht].includes(c)}))&&(a=Ht),(e.includes(r[ne])||e.some(function(c){return xb[ne].includes(c)}))&&(a=ne);var l=e.reduce(function(c,u){var h=C6(W.cssPrefix,u);if(kr[u]?(u=E6[a].includes(u)?J3[a][u]:u,o=u,c.prefix=u):x6[a].indexOf(u)>-1?(o=u,c.prefix=Zh(u,{family:a})):h?c.iconName=h:u!==W.replacementClass&&u!==r[Ht]&&u!==r[ne]&&c.rest.push(u),!s&&c.prefix&&c.iconName){var f=o==="fa"?zC(c.iconName):{},d=Us(c.prefix,c.iconName);f.prefix&&(o=null),c.iconName=f.iconName||d||c.iconName,c.prefix=f.prefix||c.prefix,c.prefix==="far"&&!kr.far&&kr.fas&&!W.autoFetchSvg&&(c.prefix="fas")}return c},Xm());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===ne&&(kr.fass||W.autoFetchSvg)&&(l.prefix="fass",l.iconName=Us(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=fs()||"fas"),l}var k6=function(){function e(){V3(this,e),this.definitions={}}return $3(e,[{key:"add",value:function(){for(var n=this,i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];var o=s.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=H(H({},n.definitions[a]||{}),o[a]),wp(a,o[a]);var l=Xa[Ht][a];l&&wp(l,o[a]),$C()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var s=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(s).map(function(r){var o=s[r],a=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(h){typeof h=="string"&&(n[a][h]=c)}),n[a][l]=c}),n}}]),e}(),Tb=[],Ar={},Br={},A6=Object.keys(Br);function R6(e,t){var n=t.mixoutsTo;return Tb=e,Ar={},Object.keys(Br).forEach(function(i){A6.indexOf(i)===-1&&delete Br[i]}),Tb.forEach(function(i){var s=i.mixout?i.mixout():{};if(Object.keys(s).forEach(function(o){typeof s[o]=="function"&&(n[o]=s[o]),Ru(s[o])==="object"&&Object.keys(s[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=s[o][a]})}),i.hooks){var r=i.hooks();Object.keys(r).forEach(function(o){Ar[o]||(Ar[o]=[]),Ar[o].push(r[o])})}i.provides&&i.provides(Br)}),n}function Ep(e,t){for(var n=arguments.length,i=new Array(n>2?n-2:0),s=2;s<n;s++)i[s-2]=arguments[s];var r=Ar[e]||[];return r.forEach(function(o){t=o.apply(null,[t].concat(i))}),t}function er(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];var s=Ar[e]||[];s.forEach(function(r){r.apply(null,n)})}function Di(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Br[e]?Br[e].apply(null,t):void 0}function xp(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||fs();if(t)return t=Us(n,t)||t,wb(HC.definitions,n,t)||wb(Fn.styles,n,t)}var HC=new k6,D6=function(){W.autoReplaceSvg=!1,W.observeMutations=!1,er("noAuto")},O6={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ni?(er("beforeI2svg",t),Di("pseudoElements2svg",t),Di("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;W.autoReplaceSvg===!1&&(W.autoReplaceSvg=!0),W.observeMutations=!0,_6(function(){M6({autoReplaceSvgRoot:n}),er("watch",t)})}},P6={icon:function(t){if(t===null)return null;if(Ru(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Us(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],i=Zh(t[0]);return{prefix:i,iconName:Us(i,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(W.cssPrefix,"-"))>-1||t.match(Z3))){var s=tf(t.split(" "),{skipLookups:!0});return{prefix:s.prefix||fs(),iconName:Us(s.prefix,s.iconName)||s.iconName}}if(typeof t=="string"){var r=fs();return{prefix:r,iconName:Us(r,t)||t}}}},_n={noAuto:D6,config:W,dom:O6,parse:P6,library:HC,findIconDefinition:xp,toHtml:Dl},M6=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,i=n===void 0?Wt:n;(Object.keys(Fn.styles).length>0||W.autoFetchSvg)&&Ni&&W.autoReplaceSvg&&_n.dom.i2svg({node:i})};function ef(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(i){return Dl(i)})}}),Object.defineProperty(e,"node",{get:function(){if(Ni){var i=Wt.createElement("div");return i.innerHTML=e.html,i.children}}}),e}function N6(e){var t=e.children,n=e.main,i=e.mask,s=e.attributes,r=e.styles,o=e.transform;if(qm(o)&&n.found&&!i.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};s.style=Jh(H(H({},r),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:t}]}function L6(e){var t=e.prefix,n=e.iconName,i=e.children,s=e.attributes,r=e.symbol,o=r===!0?"".concat(t,"-").concat(W.cssPrefix,"-").concat(n):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:H(H({},s),{},{id:o}),children:i}]}]}function Qm(e){var t=e.icons,n=t.main,i=t.mask,s=e.prefix,r=e.iconName,o=e.transform,a=e.symbol,l=e.title,c=e.maskId,u=e.titleId,h=e.extra,f=e.watchable,d=f===void 0?!1:f,p=i.found?i:n,g=p.width,m=p.height,_=s==="fak",v=[W.replacementClass,r?"".concat(W.cssPrefix,"-").concat(r):""].filter(function(U){return h.classes.indexOf(U)===-1}).filter(function(U){return U!==""||!!U}).concat(h.classes).join(" "),w={children:[],attributes:H(H({},h.attributes),{},{"data-prefix":s,"data-icon":r,class:v,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(m)})},E=_&&!~h.classes.indexOf("fa-fw")?{width:"".concat(g/m*16*.0625,"em")}:{};d&&(w.attributes[tr]=""),l&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(u||Ja())},children:[l]}),delete w.attributes.title);var x=H(H({},w),{},{prefix:s,iconName:r,main:n,mask:i,maskId:c,transform:o,symbol:a,styles:H(H({},E),h.styles)}),A=i.found&&n.found?Di("generateAbstractMask",x)||{children:[],attributes:{}}:Di("generateAbstractIcon",x)||{children:[],attributes:{}},S=A.children,C=A.attributes;return x.children=S,x.attributes=C,a?L6(x):N6(x)}function Cb(e){var t=e.content,n=e.width,i=e.height,s=e.transform,r=e.title,o=e.extra,a=e.watchable,l=a===void 0?!1:a,c=H(H(H({},o.attributes),r?{title:r}:{}),{},{class:o.classes.join(" ")});l&&(c[tr]="");var u=H({},o.styles);qm(s)&&(u.transform=d6({transform:s,startCentered:!0,width:n,height:i}),u["-webkit-transform"]=u.transform);var h=Jh(u);h.length>0&&(c.style=h);var f=[];return f.push({tag:"span",attributes:c,children:[t]}),r&&f.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),f}function F6(e){var t=e.content,n=e.title,i=e.extra,s=H(H(H({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),r=Jh(i.styles);r.length>0&&(s.style=r);var o=[];return o.push({tag:"span",attributes:s,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var qf=Fn.styles;function Tp(e){var t=e[0],n=e[1],i=e.slice(4),s=$m(i,1),r=s[0],o=null;return Array.isArray(r)?o={tag:"g",attributes:{class:"".concat(W.cssPrefix,"-").concat(Fs.GROUP)},children:[{tag:"path",attributes:{class:"".concat(W.cssPrefix,"-").concat(Fs.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(W.cssPrefix,"-").concat(Fs.PRIMARY),fill:"currentColor",d:r[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:o}}var U6={found:!1,width:512,height:512};function B6(e,t){!AC&&!W.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Cp(e,t){var n=t;return t==="fa"&&W.styleDefault!==null&&(t=fs()),new Promise(function(i,s){if(Di("missingIconAbstract"),n==="fa"){var r=zC(e)||{};e=r.iconName||e,t=r.prefix||t}if(e&&t&&qf[t]&&qf[t][e]){var o=qf[t][e];return i(Tp(o))}B6(e,t),i(H(H({},U6),{},{icon:W.showMissingIcons&&e?Di("missingIconAbstract")||{}:{}}))})}var Sb=function(){},Sp=W.measurePerformance&&ec&&ec.mark&&ec.measure?ec:{mark:Sb,measure:Sb},Yo='FA "6.4.0"',V6=function(t){return Sp.mark("".concat(Yo," ").concat(t," begins")),function(){return jC(t)}},jC=function(t){Sp.mark("".concat(Yo," ").concat(t," ends")),Sp.measure("".concat(Yo," ").concat(t),"".concat(Yo," ").concat(t," begins"),"".concat(Yo," ").concat(t," ends"))},Jm={begin:V6,end:jC},Lc=function(){};function Ib(e){var t=e.getAttribute?e.getAttribute(tr):null;return typeof t=="string"}function $6(e){var t=e.getAttribute?e.getAttribute(Hm):null,n=e.getAttribute?e.getAttribute(jm):null;return t&&n}function z6(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(W.replacementClass)}function H6(){if(W.autoReplaceSvg===!0)return Fc.replace;var e=Fc[W.autoReplaceSvg];return e||Fc.replace}function j6(e){return Wt.createElementNS("http://www.w3.org/2000/svg",e)}function W6(e){return Wt.createElement(e)}function WC(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,i=n===void 0?e.tag==="svg"?j6:W6:n;if(typeof e=="string")return Wt.createTextNode(e);var s=i(e.tag);Object.keys(e.attributes||[]).forEach(function(o){s.setAttribute(o,e.attributes[o])});var r=e.children||[];return r.forEach(function(o){s.appendChild(WC(o,{ceFn:i}))}),s}function K6(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Fc={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(s){n.parentNode.insertBefore(WC(s),n)}),n.getAttribute(tr)===null&&W.keepOriginalSource){var i=Wt.createComment(K6(n));n.parentNode.replaceChild(i,n)}else n.remove()},nest:function(t){var n=t[0],i=t[1];if(~Km(n).indexOf(W.replacementClass))return Fc.replace(t);var s=new RegExp("".concat(W.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var r=i[0].attributes.class.split(" ").reduce(function(a,l){return l===W.replacementClass||l.match(s)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});i[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",r.toNode.join(" "))}var o=i.map(function(a){return Dl(a)}).join(`
`);n.setAttribute(tr,""),n.innerHTML=o}};function kb(e){e()}function KC(e,t){var n=typeof t=="function"?t:Lc;if(e.length===0)n();else{var i=kb;W.mutateApproach===X3&&(i=hs.requestAnimationFrame||kb),i(function(){var s=H6(),r=Jm.begin("mutate");e.map(s),r(),n()})}}var Zm=!1;function qC(){Zm=!0}function Ip(){Zm=!1}var Ou=null;function Ab(e){if(yb&&W.observeMutations){var t=e.treeCallback,n=t===void 0?Lc:t,i=e.nodeCallback,s=i===void 0?Lc:i,r=e.pseudoElementsCallback,o=r===void 0?Lc:r,a=e.observeMutationsRoot,l=a===void 0?Wt:a;Ou=new yb(function(c){if(!Zm){var u=fs();ko(c).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!Ib(h.addedNodes[0])&&(W.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&W.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&Ib(h.target)&&~i6.indexOf(h.attributeName))if(h.attributeName==="class"&&$6(h.target)){var f=tf(Km(h.target)),d=f.prefix,p=f.iconName;h.target.setAttribute(Hm,d||u),p&&h.target.setAttribute(jm,p)}else z6(h.target)&&s(h.target)})}}),Ni&&Ou.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function q6(){Ou&&Ou.disconnect()}function G6(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(i,s){var r=s.split(":"),o=r[0],a=r.slice(1);return o&&a.length>0&&(i[o]=a.join(":").trim()),i},{})),n}function Y6(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),i=e.innerText!==void 0?e.innerText.trim():"",s=tf(Km(e));return s.prefix||(s.prefix=fs()),t&&n&&(s.prefix=t,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&i.length>0&&(s.iconName=S6(s.prefix,e.innerText)||Ym(s.prefix,bp(e.innerText))),!s.iconName&&W.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=e.firstChild.data)),s}function X6(e){var t=ko(e.attributes).reduce(function(s,r){return s.name!=="class"&&s.name!=="style"&&(s[r.name]=r.value),s},{}),n=e.getAttribute("title"),i=e.getAttribute("data-fa-title-id");return W.autoA11y&&(n?t["aria-labelledby"]="".concat(W.replacementClass,"-title-").concat(i||Ja()):(t["aria-hidden"]="true",t.focusable="false")),t}function Q6(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ti,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Rb(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Y6(e),i=n.iconName,s=n.prefix,r=n.rest,o=X6(e),a=Ep("parseNodeAttributes",{},e),l=t.styleParser?G6(e):[];return H({iconName:i,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:s,transform:ti,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:l,attributes:o}},a)}var J6=Fn.styles;function GC(e){var t=W.autoReplaceSvg==="nest"?Rb(e,{styleParser:!1}):Rb(e);return~t.extra.classes.indexOf(RC)?Di("generateLayersText",e,t):Di("generateSvgReplacementMutation",e,t)}var ds=new Set;Wm.map(function(e){ds.add("fa-".concat(e))});Object.keys(Ga[Ht]).map(ds.add.bind(ds));Object.keys(Ga[ne]).map(ds.add.bind(ds));ds=Al(ds);function Db(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ni)return Promise.resolve();var n=Wt.documentElement.classList,i=function(h){return n.add("".concat(vb,"-").concat(h))},s=function(h){return n.remove("".concat(vb,"-").concat(h))},r=W.autoFetchSvg?ds:Wm.map(function(u){return"fa-".concat(u)}).concat(Object.keys(J6));r.includes("fa")||r.push("fa");var o=[".".concat(RC,":not([").concat(tr,"])")].concat(r.map(function(u){return".".concat(u,":not([").concat(tr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=ko(e.querySelectorAll(o))}catch{}if(a.length>0)i("pending"),s("complete");else return Promise.resolve();var l=Jm.begin("onTree"),c=a.reduce(function(u,h){try{var f=GC(h);f&&u.push(f)}catch(d){AC||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise(function(u,h){Promise.all(c).then(function(f){KC(f,function(){i("active"),i("complete"),s("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(f){l(),h(f)})})}function Z6(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;GC(e).then(function(n){n&&KC([n],t)})}function t5(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(t||{}).icon?t:xp(t||{}),s=n.mask;return s&&(s=(s||{}).icon?s:xp(s||{})),e(i,H(H({},n),{},{mask:s}))}}var e5=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,s=i===void 0?ti:i,r=n.symbol,o=r===void 0?!1:r,a=n.mask,l=a===void 0?null:a,c=n.maskId,u=c===void 0?null:c,h=n.title,f=h===void 0?null:h,d=n.titleId,p=d===void 0?null:d,g=n.classes,m=g===void 0?[]:g,_=n.attributes,v=_===void 0?{}:_,w=n.styles,E=w===void 0?{}:w;if(t){var x=t.prefix,A=t.iconName,S=t.icon;return ef(H({type:"icon"},t),function(){return er("beforeDOMElementCreation",{iconDefinition:t,params:n}),W.autoA11y&&(f?v["aria-labelledby"]="".concat(W.replacementClass,"-title-").concat(p||Ja()):(v["aria-hidden"]="true",v.focusable="false")),Qm({icons:{main:Tp(S),mask:l?Tp(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:A,transform:H(H({},ti),s),symbol:o,title:f,maskId:u,titleId:p,extra:{attributes:v,styles:E,classes:m}})})}},n5={mixout:function(){return{icon:t5(e5)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Db,n.nodeCallback=Z6,n}}},provides:function(t){t.i2svg=function(n){var i=n.node,s=i===void 0?Wt:i,r=n.callback,o=r===void 0?function(){}:r;return Db(s,o)},t.generateSvgReplacementMutation=function(n,i){var s=i.iconName,r=i.title,o=i.titleId,a=i.prefix,l=i.transform,c=i.symbol,u=i.mask,h=i.maskId,f=i.extra;return new Promise(function(d,p){Promise.all([Cp(s,a),u.iconName?Cp(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(g){var m=$m(g,2),_=m[0],v=m[1];d([n,Qm({icons:{main:_,mask:v},prefix:a,iconName:s,transform:l,symbol:c,maskId:h,title:r,titleId:o,extra:f,watchable:!0})])}).catch(p)})},t.generateAbstractIcon=function(n){var i=n.children,s=n.attributes,r=n.main,o=n.transform,a=n.styles,l=Jh(a);l.length>0&&(s.style=l);var c;return qm(o)&&(c=Di("generateAbstractTransformGrouping",{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),i.push(c||r.icon),{children:i,attributes:s}}}},i5={mixout:function(){return{layer:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.classes,r=s===void 0?[]:s;return ef({type:"layer"},function(){er("beforeDOMElementCreation",{assembler:n,params:i});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(W.cssPrefix,"-layers")].concat(Al(r)).join(" ")},children:o}]})}}}},s5={mixout:function(){return{counter:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.title,r=s===void 0?null:s,o=i.classes,a=o===void 0?[]:o,l=i.attributes,c=l===void 0?{}:l,u=i.styles,h=u===void 0?{}:u;return ef({type:"counter",content:n},function(){return er("beforeDOMElementCreation",{content:n,params:i}),F6({content:n.toString(),title:r,extra:{attributes:c,styles:h,classes:["".concat(W.cssPrefix,"-layers-counter")].concat(Al(a))}})})}}}},r5={mixout:function(){return{text:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.transform,r=s===void 0?ti:s,o=i.title,a=o===void 0?null:o,l=i.classes,c=l===void 0?[]:l,u=i.attributes,h=u===void 0?{}:u,f=i.styles,d=f===void 0?{}:f;return ef({type:"text",content:n},function(){return er("beforeDOMElementCreation",{content:n,params:i}),Cb({content:n,transform:H(H({},ti),r),title:a,extra:{attributes:h,styles:d,classes:["".concat(W.cssPrefix,"-layers-text")].concat(Al(c))}})})}}},provides:function(t){t.generateLayersText=function(n,i){var s=i.title,r=i.transform,o=i.extra,a=null,l=null;if(SC){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/c,l=u.height/c}return W.autoA11y&&!s&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Cb({content:n.innerHTML,width:a,height:l,transform:r,title:s,extra:o,watchable:!0})])}}},o5=new RegExp('"',"ug"),Ob=[1105920,1112319];function a5(e){var t=e.replace(o5,""),n=b6(t,0),i=n>=Ob[0]&&n<=Ob[1],s=t.length===2?t[0]===t[1]:!1;return{value:bp(s?t[0]:t),isSecondary:i||s}}function Pb(e,t){var n="".concat(Y3).concat(t.replace(":","-"));return new Promise(function(i,s){if(e.getAttribute(n)!==null)return i();var r=ko(e.children),o=r.filter(function(S){return S.getAttribute(vp)===t})[0],a=hs.getComputedStyle(e,t),l=a.getPropertyValue("font-family").match(t6),c=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!l)return e.removeChild(o),i();if(l&&u!=="none"&&u!==""){var h=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?ne:Ht,d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Ya[f][l[2].toLowerCase()]:e6[f][c],p=a5(h),g=p.value,m=p.isSecondary,_=l[0].startsWith("FontAwesome"),v=Ym(d,g),w=v;if(_){var E=I6(g);E.iconName&&E.prefix&&(v=E.iconName,d=E.prefix)}if(v&&!m&&(!o||o.getAttribute(Hm)!==d||o.getAttribute(jm)!==w)){e.setAttribute(n,w),o&&e.removeChild(o);var x=Q6(),A=x.extra;A.attributes[vp]=t,Cp(v,d).then(function(S){var C=Qm(H(H({},x),{},{icons:{main:S,mask:Xm()},prefix:d,iconName:w,extra:A,watchable:!0})),U=Wt.createElement("svg");t==="::before"?e.insertBefore(U,e.firstChild):e.appendChild(U),U.outerHTML=C.map(function(G){return Dl(G)}).join(`
`),e.removeAttribute(n),i()}).catch(s)}else i()}else i()})}function l5(e){return Promise.all([Pb(e,"::before"),Pb(e,"::after")])}function c5(e){return e.parentNode!==document.head&&!~Q3.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(vp)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Mb(e){if(Ni)return new Promise(function(t,n){var i=ko(e.querySelectorAll("*")).filter(c5).map(l5),s=Jm.begin("searchPseudoElements");qC(),Promise.all(i).then(function(){s(),Ip(),t()}).catch(function(){s(),Ip(),n()})})}var u5={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Mb,n}}},provides:function(t){t.pseudoElements2svg=function(n){var i=n.node,s=i===void 0?Wt:i;W.searchPseudoElements&&Mb(s)}}},Nb=!1,h5={mixout:function(){return{dom:{unwatch:function(){qC(),Nb=!0}}}},hooks:function(){return{bootstrap:function(){Ab(Ep("mutationObserverCallbacks",{}))},noAuto:function(){q6()},watch:function(n){var i=n.observeMutationsRoot;Nb?Ip():Ab(Ep("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},Lb=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(i,s){var r=s.toLowerCase().split("-"),o=r[0],a=r.slice(1).join("-");if(o&&a==="h")return i.flipX=!0,i;if(o&&a==="v")return i.flipY=!0,i;if(a=parseFloat(a),isNaN(a))return i;switch(o){case"grow":i.size=i.size+a;break;case"shrink":i.size=i.size-a;break;case"left":i.x=i.x-a;break;case"right":i.x=i.x+a;break;case"up":i.y=i.y-a;break;case"down":i.y=i.y+a;break;case"rotate":i.rotate=i.rotate+a;break}return i},n)},f5={mixout:function(){return{parse:{transform:function(n){return Lb(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,i){var s=i.getAttribute("data-fa-transform");return s&&(n.transform=Lb(s)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var i=n.main,s=n.transform,r=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(r/2," 256)")},l="translate(".concat(s.x*32,", ").concat(s.y*32,") "),c="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),u="rotate(".concat(s.rotate," 0 0)"),h={transform:"".concat(l," ").concat(c," ").concat(u)},f={transform:"translate(".concat(o/2*-1," -256)")},d={outer:a,inner:h,path:f};return{tag:"g",attributes:H({},d.outer),children:[{tag:"g",attributes:H({},d.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:H(H({},i.icon.attributes),d.path)}]}]}}}},Gf={x:0,y:0,width:"100%",height:"100%"};function Fb(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function d5(e){return e.tag==="g"?e.children:[e]}var p5={hooks:function(){return{parseNodeAttributes:function(n,i){var s=i.getAttribute("data-fa-mask"),r=s?tf(s.split(" ").map(function(o){return o.trim()})):Xm();return r.prefix||(r.prefix=fs()),n.mask=r,n.maskId=i.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var i=n.children,s=n.attributes,r=n.main,o=n.mask,a=n.maskId,l=n.transform,c=r.width,u=r.icon,h=o.width,f=o.icon,d=f6({transform:l,containerWidth:h,iconWidth:c}),p={tag:"rect",attributes:H(H({},Gf),{},{fill:"white"})},g=u.children?{children:u.children.map(Fb)}:{},m={tag:"g",attributes:H({},d.inner),children:[Fb(H({tag:u.tag,attributes:H(H({},u.attributes),d.path)},g))]},_={tag:"g",attributes:H({},d.outer),children:[m]},v="mask-".concat(a||Ja()),w="clip-".concat(a||Ja()),E={tag:"mask",attributes:H(H({},Gf),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,_]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:d5(f)},E]};return i.push(x,{tag:"rect",attributes:H({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(v,")")},Gf)}),{children:i,attributes:s}}}},g5={provides:function(t){var n=!1;hs.matchMedia&&(n=hs.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var i=[],s={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:H(H({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=H(H({},r),{},{attributeName:"opacity"}),a={tag:"circle",attributes:H(H({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:H(H({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:H(H({},o),{},{values:"1;0;1;1;0;1;"})}),i.push(a),i.push({tag:"path",attributes:H(H({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:H(H({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||i.push({tag:"path",attributes:H(H({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:H(H({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},m5={hooks:function(){return{parseNodeAttributes:function(n,i){var s=i.getAttribute("data-fa-symbol"),r=s===null?!1:s===""?!0:s;return n.symbol=r,n}}}},_5=[g6,n5,i5,s5,r5,u5,h5,f5,p5,g5,m5];R6(_5,{mixoutsTo:_n});_n.noAuto;var YC=_n.config,hi=_n.library;_n.dom;var Pu=_n.parse;_n.findIconDefinition;_n.toHtml;var y5=_n.icon;_n.layer;var v5=_n.text;_n.counter;function Ub(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,i)}return n}function Dn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ub(Object(n),!0).forEach(function(i){Qe(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ub(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function Mu(e){return Mu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Mu(e)}function Qe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b5(e,t){if(e==null)return{};var n={},i=Object.keys(e),s,r;for(r=0;r<i.length;r++)s=i[r],!(t.indexOf(s)>=0)&&(n[s]=e[s]);return n}function w5(e,t){if(e==null)return{};var n=b5(e,t),i,s;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}function kp(e){return E5(e)||x5(e)||T5(e)||C5()}function E5(e){if(Array.isArray(e))return Ap(e)}function x5(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function T5(e,t){if(e){if(typeof e=="string")return Ap(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ap(e,t)}}function Ap(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function C5(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var S5=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},XC={exports:{}};(function(e){(function(t){var n=function(_,v,w){if(!c(v)||h(v)||f(v)||d(v)||l(v))return v;var E,x=0,A=0;if(u(v))for(E=[],A=v.length;x<A;x++)E.push(n(_,v[x],w));else{E={};for(var S in v)Object.prototype.hasOwnProperty.call(v,S)&&(E[_(S,w)]=n(_,v[S],w))}return E},i=function(_,v){v=v||{};var w=v.separator||"_",E=v.split||/(?=[A-Z])/;return _.split(E).join(w)},s=function(_){return p(_)?_:(_=_.replace(/[\-_\s]+(.)?/g,function(v,w){return w?w.toUpperCase():""}),_.substr(0,1).toLowerCase()+_.substr(1))},r=function(_){var v=s(_);return v.substr(0,1).toUpperCase()+v.substr(1)},o=function(_,v){return i(_,v).toLowerCase()},a=Object.prototype.toString,l=function(_){return typeof _=="function"},c=function(_){return _===Object(_)},u=function(_){return a.call(_)=="[object Array]"},h=function(_){return a.call(_)=="[object Date]"},f=function(_){return a.call(_)=="[object RegExp]"},d=function(_){return a.call(_)=="[object Boolean]"},p=function(_){return _=_-0,_===_},g=function(_,v){var w=v&&"process"in v?v.process:v;return typeof w!="function"?_:function(E,x){return w(E,_,x)}},m={camelize:s,decamelize:o,pascalize:r,depascalize:o,camelizeKeys:function(_,v){return n(g(s,v),_)},decamelizeKeys:function(_,v){return n(g(o,v),_,v)},pascalizeKeys:function(_,v){return n(g(r,v),_)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=m:t.humps=m})(S5)})(XC);var I5=XC.exports,k5=["class","style"];function A5(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var i=n.indexOf(":"),s=I5.camelize(n.slice(0,i)),r=n.slice(i+1).trim();return t[s]=r,t},{})}function R5(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function t_(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var i=(e.children||[]).map(function(l){return t_(l)}),s=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.class=R5(u);break;case"style":l.style=A5(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var r=n.style,o=r===void 0?{}:r,a=w5(n,k5);return mo(e.tag,Dn(Dn(Dn({},t),{},{class:s.class,style:Dn(Dn({},s.style),o)},s.attrs),a),i)}var QC=!1;try{QC=!0}catch{}function D5(){if(!QC&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function ya(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Qe({},e,t):{}}function O5(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Qe(t,"fa-".concat(e.size),e.size!==null),Qe(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),Qe(t,"fa-pull-".concat(e.pull),e.pull!==null),Qe(t,"fa-swap-opacity",e.swapOpacity),Qe(t,"fa-bounce",e.bounce),Qe(t,"fa-shake",e.shake),Qe(t,"fa-beat",e.beat),Qe(t,"fa-fade",e.fade),Qe(t,"fa-beat-fade",e.beatFade),Qe(t,"fa-flash",e.flash),Qe(t,"fa-spin-pulse",e.spinPulse),Qe(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(i){return n[i]?i:null}).filter(function(i){return i})}function Bb(e){if(e&&Mu(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Pu.icon)return Pu.icon(e);if(e===null)return null;if(Mu(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var JC=sr({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var i=n.attrs,s=Et(function(){return Bb(t.icon)}),r=Et(function(){return ya("classes",O5(t))}),o=Et(function(){return ya("transform",typeof t.transform=="string"?Pu.transform(t.transform):t.transform)}),a=Et(function(){return ya("mask",Bb(t.mask))}),l=Et(function(){return y5(s.value,Dn(Dn(Dn(Dn({},r.value),o.value),a.value),{},{symbol:t.symbol,title:t.title}))});Qi(l,function(u){if(!u)return D5("Could not find one or more icon(s)",s.value,a.value)},{immediate:!0});var c=Et(function(){return l.value?t_(l.value.abstract[0],{},i):null});return function(){return c.value}}});sr({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var i=n.slots,s=YC.familyPrefix,r=Et(function(){return["".concat(s,"-layers")].concat(kp(t.fixedWidth?["".concat(s,"-fw")]:[]))});return function(){return mo("div",{class:r.value},i.default?i.default():[])}}});sr({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var i=n.attrs,s=YC.familyPrefix,r=Et(function(){return ya("classes",[].concat(kp(t.counter?["".concat(s,"-layers-counter")]:[]),kp(t.position?["".concat(s,"-layers-").concat(t.position)]:[])))}),o=Et(function(){return ya("transform",typeof t.transform=="string"?Pu.transform(t.transform):t.transform)}),a=Et(function(){var c=v5(t.value.toString(),Dn(Dn({},o.value),r.value)),u=c.abstract;return t.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=Et(function(){return t_(a.value,{},i)});return function(){return l.value}}});const Li=(e,t)=>{const n=e.__vccOpts||e;for(const[i,s]of t)n[i]=s;return n},P5={__name:"tileFlag",props:{color:{type:String,required:!0},icon:{type:String,required:!0},inverted:{type:Boolean,required:!1,default:()=>!1}},setup(e){const t=e;return J1(n=>({"8cf1e8de":t.color})),(n,i)=>(lt(),kt("div",{class:is(["flag",{inverted:t.inverted}]),style:ho({backgroundColor:n.backgroundColor})},[he($(JC),{class:"icon",icon:["fas",t.icon]},null,8,["icon"])],6))}},ZC=Li(P5,[["__scopeId","data-v-b423d461"]]),Ol=_A("board",()=>{const e=xn("");function t(n){e.value=n}return{selectedTile:e,setSelectedTile:t}});const M5=["src"],N5={class:"boardTileFlags"},L5={__name:"BoardTile",props:{tileData:{type:Object,required:!0},groupsData:{type:Object,required:!1},teamData:{type:Object,required:!1},needVerifying:{type:Boolean,required:!1}},setup(e){const t=e,n=Ol();return(i,s)=>{var r,o,a;return lt(),kt("div",{class:is(["tile",{isSelected:$(n).selectedTile.id==t.tileData.id&&e.groupsData,isCollected:(r=t.teamData)!=null&&r.collected.hasOwnProperty(t.tileData.id)?1:0,isVerify:(a=(o=t.teamData)==null?void 0:o.verify)==null?void 0:a.includes(t.tileData.id),needVerifying:t.needVerifying,allowHover:!!e.groupsData}])},[Pt("img",{src:t.tileData.img||"https://oldschool.runescape.wiki/images/Frog_%28Ruins_of_Camdozaal%29.png?6ae5e"},null,8,M5),Pt("div",N5,[t.groupsData?(lt(!0),kt(ie,{key:0},jr(t.groupsData,l=>(lt(),Vn(ZC,{key:t.tileData.id+l.color,class:is(["tileFlag","flag-end-"+l.flagEnd]),icon:l.icon,color:i.none,inverted:!0,style:ho({opacity:l.collected.hasOwnProperty(t.tileData.id)?1:0})},null,8,["class","icon","color","style"]))),128)):Ze("",!0)])],2)}}},tS=Li(L5,[["__scopeId","data-v-c4546413"]]);const F5={key:0,class:"bingo-board"},U5={__name:"BingoBoard",props:{boardData:{type:Object,required:!0},groupsData:{type:Object,required:!0},teamData:{type:Object,required:!1,default:()=>({name:"all"})},tilesData:{type:Object,required:!0}},setup(e){const t=e;J1(s=>({"0dfb1ee3":t.boardData.settings.width,d0cc78ac:t.boardData.settings.height}));const n=Ol(),i=s=>{n.setSelectedTile(s)};return(s,r)=>t.boardData?(lt(),kt("main",F5,[(lt(!0),kt(ie,null,jr(t.tilesData,o=>(lt(),Vn(tS,{onClick:a=>i({id:o.id,...o}),key:o.id,tileData:o,groupsData:t.groupsData,teamData:t.teamData,selected:$(n).selectedTile==o.id},null,8,["onClick","tileData","groupsData","teamData","selected"]))),128))])):Ze("",!0)}},eS=Li(U5,[["__scopeId","data-v-85c10726"]]);const nf=e=>(nh("data-v-49ee19f2"),e=e(),ih(),e),B5={key:0},V5=nf(()=>Pt("br",null,null,-1)),$5={class:"tooltiptext"},z5=nf(()=>Pt("br",null,null,-1)),H5=nf(()=>Pt("br",null,null,-1)),j5=nf(()=>Pt("br",null,null,-1)),W5={__name:"scoreCard",props:{groupsData:{type:Object,required:!0},boardUUID:{type:Object,required:!0}},setup(e){const t=e;return(n,i)=>{const s=rh("router-link");return lt(),kt("div",null,[t.groupsData?(lt(),kt("ul",B5,[(lt(!0),kt(ie,null,jr(t.groupsData,(r,o)=>(lt(),kt("li",{key:o+e.groupsData,class:"tooltip"},[he(ZC,{color:r.color,class:is(["tileFlag","flag-end-"+r.flagEnd]),inverted:r.name=="Ahka's Cum Balls",icon:r.icon,style:ho({"--groupColor":r.color,"--width":r.points/750*100*1.5+"px"})},null,8,["color","class","inverted","icon","style"]),Pn(" "+Ke(r.name),1),V5,Pt("span",$5,[(lt(!0),kt(ie,null,jr(r.member,a=>(lt(),kt("span",{key:a},[Pn(Ke(a),1),z5]))),128))]),Pn(" score: "+Ke(r.points),1),H5,j5]))),128)),Pt("li",null,[he(s,{class:"btn",to:{name:"stats-graph",params:{boardUUID:t.boardUUID}}},{default:ig(()=>[Pn("Go To Graph")]),_:1},8,["to"])])])):Ze("",!0)])}}},K5=Li(W5,[["__scopeId","data-v-49ee19f2"]]),q5={__name:"sidePannel",setup(e){const t=Ol();return(n,i)=>(lt(),kt(ie,null,[he(tS,{tileData:$(t).selectedTile},null,8,["tileData"]),Pt("h2",null,Ke($(t).selectedTile.id.split("")[0])+", "+Ke($(t).selectedTile.id.split("")[1]),1),Pt("h1",null,Ke($(t).selectedTile.title),1),Pt("p",null,Ke($(t).selectedTile.description),1)],64))}};const nS=e=>(nh("data-v-7fc10281"),e=e(),ih(),e),G5=nS(()=>Pt("section",null,null,-1)),Y5={class:"main-section"},X5={key:2},Q5={style:{"justify-content":"end",display:"flex"}},J5={key:0},Z5=["onSubmit"],tU=nS(()=>Pt("section",null,null,-1)),eU={__name:"BoardView",setup(e){const t=Ol(),n=kl(),i=Vm(),s=Et(()=>n.params.teamCode||"all"),r=Et(()=>n.params.boardUUID||""),o=async()=>{var g;if(s.value!==""){let m={name:"private-board",params:{boardUUID:r.value,teamCode:s.value}};const{data:_}=fn(Rn(a,"Boards",r.value,"Groups",s.value));_&&((g=_==null?void 0:_.value)==null?void 0:g.name)=="moderator"&&(m.name="moderator"),i.push(m)}},a=Il(fr),{data:l}=fn(us(a,"Boards",r.value,"Groups")),c=fn(Rn(a,"Boards",r.value)),{data:u}=fn(Rn(a,`Boards/${r.value}/Groups/${s.value}/`)),h=Et(()=>{var m;let g={};return l&&((m=l==null?void 0:l.value)==null||m.forEach(_=>{_.name!="moderator"&&(g[_.id]={id:_.id,name:_.name,member:_.members,icon:_.icon,color:_.color,points:_.points,flagEnd:_.flagEnd,collected:_.collected,verify:_.verify})})),g||{}}),f=fn(us(a,`Boards/${r.value}/Tiles`)||"nothing"),d=xn(""),p=xn(!1);return(g,m)=>{var v,w,E,x;const _=rh("fontAwesomeIcon");return lt(),kt(ie,null,[G5,Pt("section",Y5,[$(h)?(lt(),Vn(K5,{key:0,class:"scoreCard",groupsData:$(h),boardUUID:$(r)},null,8,["groupsData","boardUUID"])):Ze("",!0),$(c)?(lt(),Vn(eS,{key:1,boardData:$(c),groupsData:$(h),teamData:$(u),tilesData:$(f)},null,8,["boardData","groupsData","teamData","tilesData"])):Ze("",!0),((w=(v=$(c))==null?void 0:v.settings)==null?void 0:w.mode)=="teams"||p.value?(lt(),kt("aside",X5,[Pt("div",Q5,[p.value?(lt(),kt("button",{key:0,class:"btn close",onClick:m[0]||(m[0]=()=>{p.value=!p.value,d.value=""})}," ╳ ")):Ze("",!0)]),((x=(E=$(c))==null?void 0:E.settings)==null?void 0:x.mode)=="teams"?(lt(),kt(ie,{key:0},[$(u)?(lt(),kt("p",J5,[he(_,{class:"icon",icon:["fas",$(u).icon]},null,8,["icon"]),Pn(" "+Ke($(u).name),1)])):Ze("",!0),$(u)?Ze("",!0):(lt(),kt("form",{key:1,onSubmit:ug(o,["prevent"])},[Pn(" team code: "),L1(Pt("input",{type:"text",name:"teamId","onUpdate:modelValue":m[1]||(m[1]=A=>ee(s)?s.value=A:null)},null,512),[[Z1,$(s)]])],40,Z5))],64)):Ze("",!0),$(t).selectedTile!=""?(lt(),Vn(q5,{key:1,groupsData:$(h),teamData:$(u),boardData:$(c),boardUUID:$(r)},null,8,["groupsData","teamData","boardData","boardUUID"])):Ze("",!0)])):Ze("",!0)]),tU],64)}}},Vb=Li(eU,[["__scopeId","data-v-7fc10281"]]);const nU=e=>(nh("data-v-ab4cbc1a"),e=e(),ih(),e),iU=["for"],sU=nU(()=>Pt("br",null,null,-1)),rU=["id","checked","onClick"],oU={__name:"moderatorSidePannel",props:{tileData:{type:Object,required:!0},boardUUID:{type:Object,required:!0},groupsData:{type:Object,required:!0},boardData:{type:Object,required:!0}},setup(e){const t=e,n=Il(fr),i=Et(()=>t.tileData),s=({tile:r,group:o})=>{if(Object.hasOwn(o.collected,r.id)){let a={...o.collected};delete a[r.id],Lo(Rn(n,"Boards",t.boardUUID,"Groups",o.id),{collected:a}),Lo(Rn(n,"Boards",t.boardUUID,"Groups",o.id),{points:o.points-r.points})}else{let a={...o.collected};a[r.id]=new Date,Lo(Rn(n,"Boards",t.boardUUID,"Groups",o.id),{collected:a}),Lo(Rn(n,"Boards",t.boardUUID,"Groups",o.id),{points:o.points+r.points}),o.verify.includes(r.id)&&Lo(Rn(n,"Boards",t.boardUUID,"Groups",o.id),{verify:o.verify.filter(l=>l!=r.id)})}};return(r,o)=>t.tileData?(lt(),kt("div",{key:t.tileData.id},[Pt("h2",null,"{ "+Ke(t.tileData.id.split("")[0])+" , "+Ke(t.tileData.id.split("")[1])+" }",1),Pt("ul",null,[(lt(!0),kt(ie,null,jr(t.groupsData,a=>(lt(),kt("li",{key:a.id+$(i).id,class:is({checkThis:a.verify.includes($(i).id)})},[Pt("label",{for:a.id+$(i).id},[Pn(Ke(a.name)+" : "+Ke(a.verify.includes($(i).id)),1),sU,Pn(" collected: "),(lt(),kt("input",{id:a.id+$(i).id,type:"checkbox",key:a.id+$(i).id,checked:a.collected.hasOwnProperty(t.tileData.id),onClick:ug(l=>s({tile:$(i),group:a}),["prevent"])},null,8,rU))],8,iU)],2))),128))])])):Ze("",!0)}},aU=Li(oU,[["__scopeId","data-v-ab4cbc1a"]]);const lU={key:0},cU={__name:"ModeratorView",setup(e){const t=Ol(),n=kl(),i=Et(()=>n.params.teamCode),s=Et(()=>n.params.boardUUID),r=Il(fr),{data:o}=fn(us(r,"Boards",s.value,"Groups")),a=fn(Rn(r,"Boards",s.value)),{data:l}=fn(Rn(r,`Boards/${s.value}/Groups/${i.value}/`)),c=Et(()=>{var f;let h={};return o&&((f=o==null?void 0:o.value)==null||f.forEach(d=>{d.name!="moderator"&&(h[d.id]={id:d.id,name:d.name,member:d.members,icon:d.icon,color:d.color,points:d.points,flagEnd:d.flagEnd,collected:d.collected,verify:d.verify})})),h||{}}),{data:u}=fn(us(r,`Boards/${s.value}/Tiles`));return(h,f)=>(lt(),kt("section",null,[$(l)&&$(l).name=="moderator"?(lt(),Vn(eS,{key:0,boardData:$(a),groupsData:$(c),teamData:$(l),tilesData:$(u)},null,8,["boardData","groupsData","teamData","tilesData"])):Ze("",!0),Pt("aside",null,[$(l)?(lt(),kt("p",lU,Ke($(l).name),1)):Ze("",!0),(lt(),Vn(aU,{tileData:$(t).selectedTile,key:$(t).selectedTile.id,boardUUID:$(s),groupsData:$(c),boardData:$(a)},null,8,["tileData","boardUUID","groupsData","boardData"]))])]))}},uU=Li(cU,[["__scopeId","data-v-4f4abe5e"]]);const hU=["onSubmit"],fU=["disabled"],dU={__name:"HomeView",setup(e){const t=kl(),n=Vm(),i=xn(""),s=()=>{n.push({name:"overview",params:{boardUUID:i.value}})};return(r,o)=>(lt(),kt(ie,null,[Pt("form",{onSubmit:ug(s,["prevent"])},[Pn(" Enter your bingo key: "),L1(Pt("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=a=>i.value=a)},null,512),[[Z1,i.value]]),Pt("button",{class:"btn",disabled:i.value==""},"Open Board",8,fU)],40,hU),(lt(),Vn($(wC),{key:$(t).fullPath}))],64))}},pU=Li(dU,[["__scopeId","data-v-f046e3a4"]]);const gU=e=>(nh("data-v-bf18c5e9"),e=e(),ih(),e),mU=gU(()=>Pt("h1",null,"boardList:",-1)),_U={key:0},yU=["onClick"],vU={__name:"BoardList",setup(e){const t=Il(fr),n=fn(us(t,"Boards")),i=Vm(),s=r=>{i.push({name:"overview",params:{boardUUID:r}})};return(r,o)=>(lt(),kt(ie,null,[mU,(lt(),kt("ul",_U,[(lt(!0),kt(ie,null,jr($(n),a=>(lt(),kt("li",{key:a,onClick:l=>s(a.id)},Ke(a.name),9,yU))),128))]))],64))}},bU=Li(vU,[["__scopeId","data-v-bf18c5e9"]]);/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */function Pl(e){return e+.5|0}const Wi=(e,t,n)=>Math.max(Math.min(e,n),t);function Xo(e){return Wi(Pl(e*2.55),0,255)}function ns(e){return Wi(Pl(e*255),0,255)}function _i(e){return Wi(Pl(e/2.55)/100,0,1)}function $b(e){return Wi(Pl(e*100),0,100)}const vn={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Rp=[..."0123456789ABCDEF"],wU=e=>Rp[e&15],EU=e=>Rp[(e&240)>>4]+Rp[e&15],uc=e=>(e&240)>>4===(e&15),xU=e=>uc(e.r)&&uc(e.g)&&uc(e.b)&&uc(e.a);function TU(e){var t=e.length,n;return e[0]==="#"&&(t===4||t===5?n={r:255&vn[e[1]]*17,g:255&vn[e[2]]*17,b:255&vn[e[3]]*17,a:t===5?vn[e[4]]*17:255}:(t===7||t===9)&&(n={r:vn[e[1]]<<4|vn[e[2]],g:vn[e[3]]<<4|vn[e[4]],b:vn[e[5]]<<4|vn[e[6]],a:t===9?vn[e[7]]<<4|vn[e[8]]:255})),n}const CU=(e,t)=>e<255?t(e):"";function SU(e){var t=xU(e)?wU:EU;return e?"#"+t(e.r)+t(e.g)+t(e.b)+CU(e.a,t):void 0}const IU=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function iS(e,t,n){const i=t*Math.min(n,1-n),s=(r,o=(r+e/30)%12)=>n-i*Math.max(Math.min(o-3,9-o,1),-1);return[s(0),s(8),s(4)]}function kU(e,t,n){const i=(s,r=(s+e/60)%6)=>n-n*t*Math.max(Math.min(r,4-r,1),0);return[i(5),i(3),i(1)]}function AU(e,t,n){const i=iS(e,1,.5);let s;for(t+n>1&&(s=1/(t+n),t*=s,n*=s),s=0;s<3;s++)i[s]*=1-t-n,i[s]+=t;return i}function RU(e,t,n,i,s){return e===s?(t-n)/i+(t<n?6:0):t===s?(n-e)/i+2:(e-t)/i+4}function e_(e){const n=e.r/255,i=e.g/255,s=e.b/255,r=Math.max(n,i,s),o=Math.min(n,i,s),a=(r+o)/2;let l,c,u;return r!==o&&(u=r-o,c=a>.5?u/(2-r-o):u/(r+o),l=RU(n,i,s,u,r),l=l*60+.5),[l|0,c||0,a]}function n_(e,t,n,i){return(Array.isArray(t)?e(t[0],t[1],t[2]):e(t,n,i)).map(ns)}function i_(e,t,n){return n_(iS,e,t,n)}function DU(e,t,n){return n_(AU,e,t,n)}function OU(e,t,n){return n_(kU,e,t,n)}function sS(e){return(e%360+360)%360}function PU(e){const t=IU.exec(e);let n=255,i;if(!t)return;t[5]!==i&&(n=t[6]?Xo(+t[5]):ns(+t[5]));const s=sS(+t[2]),r=+t[3]/100,o=+t[4]/100;return t[1]==="hwb"?i=DU(s,r,o):t[1]==="hsv"?i=OU(s,r,o):i=i_(s,r,o),{r:i[0],g:i[1],b:i[2],a:n}}function MU(e,t){var n=e_(e);n[0]=sS(n[0]+t),n=i_(n),e.r=n[0],e.g=n[1],e.b=n[2]}function NU(e){if(!e)return;const t=e_(e),n=t[0],i=$b(t[1]),s=$b(t[2]);return e.a<255?`hsla(${n}, ${i}%, ${s}%, ${_i(e.a)})`:`hsl(${n}, ${i}%, ${s}%)`}const zb={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Hb={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function LU(){const e={},t=Object.keys(Hb),n=Object.keys(zb);let i,s,r,o,a;for(i=0;i<t.length;i++){for(o=a=t[i],s=0;s<n.length;s++)r=n[s],a=a.replace(r,zb[r]);r=parseInt(Hb[o],16),e[a]=[r>>16&255,r>>8&255,r&255]}return e}let hc;function FU(e){hc||(hc=LU(),hc.transparent=[0,0,0,0]);const t=hc[e.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const UU=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function BU(e){const t=UU.exec(e);let n=255,i,s,r;if(t){if(t[7]!==i){const o=+t[7];n=t[8]?Xo(o):Wi(o*255,0,255)}return i=+t[1],s=+t[3],r=+t[5],i=255&(t[2]?Xo(i):Wi(i,0,255)),s=255&(t[4]?Xo(s):Wi(s,0,255)),r=255&(t[6]?Xo(r):Wi(r,0,255)),{r:i,g:s,b:r,a:n}}}function VU(e){return e&&(e.a<255?`rgba(${e.r}, ${e.g}, ${e.b}, ${_i(e.a)})`:`rgb(${e.r}, ${e.g}, ${e.b})`)}const Yf=e=>e<=.0031308?e*12.92:Math.pow(e,1/2.4)*1.055-.055,vr=e=>e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4);function $U(e,t,n){const i=vr(_i(e.r)),s=vr(_i(e.g)),r=vr(_i(e.b));return{r:ns(Yf(i+n*(vr(_i(t.r))-i))),g:ns(Yf(s+n*(vr(_i(t.g))-s))),b:ns(Yf(r+n*(vr(_i(t.b))-r))),a:e.a+n*(t.a-e.a)}}function fc(e,t,n){if(e){let i=e_(e);i[t]=Math.max(0,Math.min(i[t]+i[t]*n,t===0?360:1)),i=i_(i),e.r=i[0],e.g=i[1],e.b=i[2]}}function rS(e,t){return e&&Object.assign(t||{},e)}function jb(e){var t={r:0,g:0,b:0,a:255};return Array.isArray(e)?e.length>=3&&(t={r:e[0],g:e[1],b:e[2],a:255},e.length>3&&(t.a=ns(e[3]))):(t=rS(e,{r:0,g:0,b:0,a:1}),t.a=ns(t.a)),t}function zU(e){return e.charAt(0)==="r"?BU(e):PU(e)}class Za{constructor(t){if(t instanceof Za)return t;const n=typeof t;let i;n==="object"?i=jb(t):n==="string"&&(i=TU(t)||FU(t)||zU(t)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var t=rS(this._rgb);return t&&(t.a=_i(t.a)),t}set rgb(t){this._rgb=jb(t)}rgbString(){return this._valid?VU(this._rgb):void 0}hexString(){return this._valid?SU(this._rgb):void 0}hslString(){return this._valid?NU(this._rgb):void 0}mix(t,n){if(t){const i=this.rgb,s=t.rgb;let r;const o=n===r?.5:n,a=2*o-1,l=i.a-s.a,c=((a*l===-1?a:(a+l)/(1+a*l))+1)/2;r=1-c,i.r=255&c*i.r+r*s.r+.5,i.g=255&c*i.g+r*s.g+.5,i.b=255&c*i.b+r*s.b+.5,i.a=o*i.a+(1-o)*s.a,this.rgb=i}return this}interpolate(t,n){return t&&(this._rgb=$U(this._rgb,t._rgb,n)),this}clone(){return new Za(this.rgb)}alpha(t){return this._rgb.a=ns(t),this}clearer(t){const n=this._rgb;return n.a*=1-t,this}greyscale(){const t=this._rgb,n=Pl(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=n,this}opaquer(t){const n=this._rgb;return n.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return fc(this._rgb,2,t),this}darken(t){return fc(this._rgb,2,-t),this}saturate(t){return fc(this._rgb,1,t),this}desaturate(t){return fc(this._rgb,1,-t),this}rotate(t){return MU(this._rgb,t),this}}/*!
 * Chart.js v4.3.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */function di(){}const HU=(()=>{let e=0;return()=>e++})();function jt(e){return e===null||typeof e>"u"}function te(e){if(Array.isArray&&Array.isArray(e))return!0;const t=Object.prototype.toString.call(e);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function At(e){return e!==null&&Object.prototype.toString.call(e)==="[object Object]"}function Te(e){return(typeof e=="number"||e instanceof Number)&&isFinite(+e)}function cn(e,t){return Te(e)?e:t}function vt(e,t){return typeof e>"u"?t:e}const jU=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100*t:+e;function Bt(e,t,n){if(e&&typeof e.call=="function")return e.apply(n,t)}function Nt(e,t,n,i){let s,r,o;if(te(e))if(r=e.length,i)for(s=r-1;s>=0;s--)t.call(n,e[s],s);else for(s=0;s<r;s++)t.call(n,e[s],s);else if(At(e))for(o=Object.keys(e),r=o.length,s=0;s<r;s++)t.call(n,e[o[s]],o[s])}function Nu(e,t){let n,i,s,r;if(!e||!t||e.length!==t.length)return!1;for(n=0,i=e.length;n<i;++n)if(s=e[n],r=t[n],s.datasetIndex!==r.datasetIndex||s.index!==r.index)return!1;return!0}function Lu(e){if(te(e))return e.map(Lu);if(At(e)){const t=Object.create(null),n=Object.keys(e),i=n.length;let s=0;for(;s<i;++s)t[n[s]]=Lu(e[n[s]]);return t}return e}function oS(e){return["__proto__","prototype","constructor"].indexOf(e)===-1}function WU(e,t,n,i){if(!oS(e))return;const s=t[e],r=n[e];At(s)&&At(r)?tl(s,r,i):t[e]=Lu(r)}function tl(e,t,n){const i=te(t)?t:[t],s=i.length;if(!At(e))return e;n=n||{};const r=n.merger||WU;let o;for(let a=0;a<s;++a){if(o=i[a],!At(o))continue;const l=Object.keys(o);for(let c=0,u=l.length;c<u;++c)r(l[c],e,o,n)}return e}function va(e,t){return tl(e,t,{merger:KU})}function KU(e,t,n){if(!oS(e))return;const i=t[e],s=n[e];At(i)&&At(s)?va(i,s):Object.prototype.hasOwnProperty.call(t,e)||(t[e]=Lu(s))}const Wb={"":e=>e,x:e=>e.x,y:e=>e.y};function qU(e){const t=e.split("."),n=[];let i="";for(const s of t)i+=s,i.endsWith("\\")?i=i.slice(0,-1)+".":(n.push(i),i="");return n}function GU(e){const t=qU(e);return n=>{for(const i of t){if(i==="")break;n=n&&n[i]}return n}}function Fu(e,t){return(Wb[t]||(Wb[t]=GU(t)))(e)}function s_(e){return e.charAt(0).toUpperCase()+e.slice(1)}const Uu=e=>typeof e<"u",ps=e=>typeof e=="function",Kb=(e,t)=>{if(e.size!==t.size)return!1;for(const n of e)if(!t.has(n))return!1;return!0};function YU(e){return e.type==="mouseup"||e.type==="click"||e.type==="contextmenu"}const ve=Math.PI,Tn=2*ve,XU=Tn+ve,Bu=Number.POSITIVE_INFINITY,QU=ve/180,nn=ve/2,bs=ve/4,qb=ve*2/3,Ki=Math.log10,lo=Math.sign;function ba(e,t,n){return Math.abs(e-t)<n}function Gb(e){const t=Math.round(e);e=ba(e,t,e/1e3)?t:e;const n=Math.pow(10,Math.floor(Ki(e))),i=e/n;return(i<=1?1:i<=2?2:i<=5?5:10)*n}function JU(e){const t=[],n=Math.sqrt(e);let i;for(i=1;i<n;i++)e%i===0&&(t.push(i),t.push(e/i));return n===(n|0)&&t.push(n),t.sort((s,r)=>s-r).pop(),t}function el(e){return!isNaN(parseFloat(e))&&isFinite(e)}function ZU(e,t){const n=Math.round(e);return n-t<=e&&n+t>=e}function aS(e,t,n){let i,s,r;for(i=0,s=e.length;i<s;i++)r=e[i][n],isNaN(r)||(t.min=Math.min(t.min,r),t.max=Math.max(t.max,r))}function qi(e){return e*(ve/180)}function r_(e){return e*(180/ve)}function Yb(e){if(!Te(e))return;let t=1,n=0;for(;Math.round(e*t)/t!==e;)t*=10,n++;return n}function tB(e,t){const n=t.x-e.x,i=t.y-e.y,s=Math.sqrt(n*n+i*i);let r=Math.atan2(i,n);return r<-.5*ve&&(r+=Tn),{angle:r,distance:s}}function Dp(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function eB(e,t){return(e-t+XU)%Tn-ve}function In(e){return(e%Tn+Tn)%Tn}function lS(e,t,n,i){const s=In(e),r=In(t),o=In(n),a=In(r-s),l=In(o-s),c=In(s-r),u=In(s-o);return s===r||s===o||i&&r===o||a>l&&c<u}function wn(e,t,n){return Math.max(t,Math.min(n,e))}function nB(e){return wn(e,-32768,32767)}function Qo(e,t,n,i=1e-6){return e>=Math.min(t,n)-i&&e<=Math.max(t,n)+i}function o_(e,t,n){n=n||(o=>e[o]<t);let i=e.length-1,s=0,r;for(;i-s>1;)r=s+i>>1,n(r)?s=r:i=r;return{lo:s,hi:i}}const Bs=(e,t,n,i)=>o_(e,n,i?s=>{const r=e[s][t];return r<n||r===n&&e[s+1][t]===n}:s=>e[s][t]<n),iB=(e,t,n)=>o_(e,n,i=>e[i][t]>=n);function sB(e,t,n){let i=0,s=e.length;for(;i<s&&e[i]<t;)i++;for(;s>i&&e[s-1]>n;)s--;return i>0||s<e.length?e.slice(i,s):e}const cS=["push","pop","shift","splice","unshift"];function rB(e,t){if(e._chartjs){e._chartjs.listeners.push(t);return}Object.defineProperty(e,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),cS.forEach(n=>{const i="_onData"+s_(n),s=e[n];Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value(...r){const o=s.apply(this,r);return e._chartjs.listeners.forEach(a=>{typeof a[i]=="function"&&a[i](...r)}),o}})})}function Xb(e,t){const n=e._chartjs;if(!n)return;const i=n.listeners,s=i.indexOf(t);s!==-1&&i.splice(s,1),!(i.length>0)&&(cS.forEach(r=>{delete e[r]}),delete e._chartjs)}function oB(e){const t=new Set(e);return t.size===e.length?e:Array.from(t)}const uS=function(){return typeof window>"u"?function(e){return e()}:window.requestAnimationFrame}();function hS(e,t){let n=[],i=!1;return function(...s){n=s,i||(i=!0,uS.call(window,()=>{i=!1,e.apply(t,n)}))}}function aB(e,t){let n;return function(...i){return t?(clearTimeout(n),n=setTimeout(e,t,i)):e.apply(this,i),t}}const a_=e=>e==="start"?"left":e==="end"?"right":"center",Pe=(e,t,n)=>e==="start"?t:e==="end"?n:(t+n)/2,lB=(e,t,n,i)=>e===(i?"left":"right")?n:e==="center"?(t+n)/2:t;function cB(e,t,n){const i=t.length;let s=0,r=i;if(e._sorted){const{iScale:o,_parsed:a}=e,l=o.axis,{min:c,max:u,minDefined:h,maxDefined:f}=o.getUserBounds();h&&(s=wn(Math.min(Bs(a,o.axis,c).lo,n?i:Bs(t,l,o.getPixelForValue(c)).lo),0,i-1)),f?r=wn(Math.max(Bs(a,o.axis,u,!0).hi+1,n?0:Bs(t,l,o.getPixelForValue(u),!0).hi+1),s,i)-s:r=i-s}return{start:s,count:r}}function uB(e){const{xScale:t,yScale:n,_scaleRanges:i}=e,s={xmin:t.min,xmax:t.max,ymin:n.min,ymax:n.max};if(!i)return e._scaleRanges=s,!0;const r=i.xmin!==t.min||i.xmax!==t.max||i.ymin!==n.min||i.ymax!==n.max;return Object.assign(i,s),r}const dc=e=>e===0||e===1,Qb=(e,t,n)=>-(Math.pow(2,10*(e-=1))*Math.sin((e-t)*Tn/n)),Jb=(e,t,n)=>Math.pow(2,-10*e)*Math.sin((e-t)*Tn/n)+1,wa={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>-e*(e-2),easeInOutQuad:e=>(e/=.5)<1?.5*e*e:-.5*(--e*(e-2)-1),easeInCubic:e=>e*e*e,easeOutCubic:e=>(e-=1)*e*e+1,easeInOutCubic:e=>(e/=.5)<1?.5*e*e*e:.5*((e-=2)*e*e+2),easeInQuart:e=>e*e*e*e,easeOutQuart:e=>-((e-=1)*e*e*e-1),easeInOutQuart:e=>(e/=.5)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2),easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>(e-=1)*e*e*e*e+1,easeInOutQuint:e=>(e/=.5)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2),easeInSine:e=>-Math.cos(e*nn)+1,easeOutSine:e=>Math.sin(e*nn),easeInOutSine:e=>-.5*(Math.cos(ve*e)-1),easeInExpo:e=>e===0?0:Math.pow(2,10*(e-1)),easeOutExpo:e=>e===1?1:-Math.pow(2,-10*e)+1,easeInOutExpo:e=>dc(e)?e:e<.5?.5*Math.pow(2,10*(e*2-1)):.5*(-Math.pow(2,-10*(e*2-1))+2),easeInCirc:e=>e>=1?e:-(Math.sqrt(1-e*e)-1),easeOutCirc:e=>Math.sqrt(1-(e-=1)*e),easeInOutCirc:e=>(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1),easeInElastic:e=>dc(e)?e:Qb(e,.075,.3),easeOutElastic:e=>dc(e)?e:Jb(e,.075,.3),easeInOutElastic(e){return dc(e)?e:e<.5?.5*Qb(e*2,.1125,.45):.5+.5*Jb(e*2-1,.1125,.45)},easeInBack(e){return e*e*((1.70158+1)*e-1.70158)},easeOutBack(e){return(e-=1)*e*((1.70158+1)*e+1.70158)+1},easeInOutBack(e){let t=1.70158;return(e/=.5)<1?.5*(e*e*(((t*=1.525)+1)*e-t)):.5*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)},easeInBounce:e=>1-wa.easeOutBounce(1-e),easeOutBounce(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},easeInOutBounce:e=>e<.5?wa.easeInBounce(e*2)*.5:wa.easeOutBounce(e*2-1)*.5+.5};function l_(e){if(e&&typeof e=="object"){const t=e.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function Zb(e){return l_(e)?e:new Za(e)}function Xf(e){return l_(e)?e:new Za(e).saturate(.5).darken(.1).hexString()}const hB=["x","y","borderWidth","radius","tension"],fB=["color","borderColor","backgroundColor"];function dB(e){e.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),e.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),e.set("animations",{colors:{type:"color",properties:fB},numbers:{type:"number",properties:hB}}),e.describe("animations",{_fallback:"animation"}),e.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function pB(e){e.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const t0=new Map;function gB(e,t){t=t||{};const n=e+JSON.stringify(t);let i=t0.get(n);return i||(i=new Intl.NumberFormat(e,t),t0.set(n,i)),i}function c_(e,t,n){return gB(t,n).format(e)}const fS={values(e){return te(e)?e:""+e},numeric(e,t,n){if(e===0)return"0";const i=this.chart.options.locale;let s,r=e;if(n.length>1){const c=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(c<1e-4||c>1e15)&&(s="scientific"),r=mB(e,n)}const o=Ki(Math.abs(r)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),l={notation:s,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(l,this.options.ticks.format),c_(e,i,l)},logarithmic(e,t,n){if(e===0)return"0";const i=n[t].significand||e/Math.pow(10,Math.floor(Ki(e)));return[1,2,3,5,10,15].includes(i)||t>.8*n.length?fS.numeric.call(this,e,t,n):""}};function mB(e,t){let n=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(n)>=1&&e!==Math.floor(e)&&(n=e-Math.floor(e)),n}var sf={formatters:fS};function _B(e){e.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,n)=>n.lineWidth,tickColor:(t,n)=>n.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:sf.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),e.route("scale.ticks","color","","color"),e.route("scale.grid","color","","borderColor"),e.route("scale.border","color","","borderColor"),e.route("scale.title","color","","color"),e.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),e.describe("scales",{_fallback:"scale"}),e.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const nr=Object.create(null),Op=Object.create(null);function Ea(e,t){if(!t)return e;const n=t.split(".");for(let i=0,s=n.length;i<s;++i){const r=n[i];e=e[r]||(e[r]=Object.create(null))}return e}function Qf(e,t,n){return typeof t=="string"?tl(Ea(e,t),n):tl(Ea(e,""),t)}class yB{constructor(t,n){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=i=>i.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(i,s)=>Xf(s.backgroundColor),this.hoverBorderColor=(i,s)=>Xf(s.borderColor),this.hoverColor=(i,s)=>Xf(s.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(n)}set(t,n){return Qf(this,t,n)}get(t){return Ea(this,t)}describe(t,n){return Qf(Op,t,n)}override(t,n){return Qf(nr,t,n)}route(t,n,i,s){const r=Ea(this,t),o=Ea(this,i),a="_"+n;Object.defineProperties(r,{[a]:{value:r[n],writable:!0},[n]:{enumerable:!0,get(){const l=this[a],c=o[s];return At(l)?Object.assign({},c,l):vt(l,c)},set(l){this[a]=l}}})}apply(t){t.forEach(n=>n(this))}}var se=new yB({_scriptable:e=>!e.startsWith("on"),_indexable:e=>e!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[dB,pB,_B]);function vB(e){return!e||jt(e.size)||jt(e.family)?null:(e.style?e.style+" ":"")+(e.weight?e.weight+" ":"")+e.size+"px "+e.family}function Vu(e,t,n,i,s){let r=t[s];return r||(r=t[s]=e.measureText(s).width,n.push(s)),r>i&&(i=r),i}function bB(e,t,n,i){i=i||{};let s=i.data=i.data||{},r=i.garbageCollect=i.garbageCollect||[];i.font!==t&&(s=i.data={},r=i.garbageCollect=[],i.font=t),e.save(),e.font=t;let o=0;const a=n.length;let l,c,u,h,f;for(l=0;l<a;l++)if(h=n[l],h!=null&&!te(h))o=Vu(e,s,r,o,h);else if(te(h))for(c=0,u=h.length;c<u;c++)f=h[c],f!=null&&!te(f)&&(o=Vu(e,s,r,o,f));e.restore();const d=r.length/2;if(d>n.length){for(l=0;l<d;l++)delete s[r[l]];r.splice(0,d)}return o}function ws(e,t,n){const i=e.currentDevicePixelRatio,s=n!==0?Math.max(n/2,.5):0;return Math.round((t-s)*i)/i+s}function e0(e,t){t=t||e.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,e.width,e.height),t.restore()}function Pp(e,t,n,i){dS(e,t,n,i,null)}function dS(e,t,n,i,s){let r,o,a,l,c,u,h,f;const d=t.pointStyle,p=t.rotation,g=t.radius;let m=(p||0)*QU;if(d&&typeof d=="object"&&(r=d.toString(),r==="[object HTMLImageElement]"||r==="[object HTMLCanvasElement]")){e.save(),e.translate(n,i),e.rotate(m),e.drawImage(d,-d.width/2,-d.height/2,d.width,d.height),e.restore();return}if(!(isNaN(g)||g<=0)){switch(e.beginPath(),d){default:s?e.ellipse(n,i,s/2,g,0,0,Tn):e.arc(n,i,g,0,Tn),e.closePath();break;case"triangle":u=s?s/2:g,e.moveTo(n+Math.sin(m)*u,i-Math.cos(m)*g),m+=qb,e.lineTo(n+Math.sin(m)*u,i-Math.cos(m)*g),m+=qb,e.lineTo(n+Math.sin(m)*u,i-Math.cos(m)*g),e.closePath();break;case"rectRounded":c=g*.516,l=g-c,o=Math.cos(m+bs)*l,h=Math.cos(m+bs)*(s?s/2-c:l),a=Math.sin(m+bs)*l,f=Math.sin(m+bs)*(s?s/2-c:l),e.arc(n-h,i-a,c,m-ve,m-nn),e.arc(n+f,i-o,c,m-nn,m),e.arc(n+h,i+a,c,m,m+nn),e.arc(n-f,i+o,c,m+nn,m+ve),e.closePath();break;case"rect":if(!p){l=Math.SQRT1_2*g,u=s?s/2:l,e.rect(n-u,i-l,2*u,2*l);break}m+=bs;case"rectRot":h=Math.cos(m)*(s?s/2:g),o=Math.cos(m)*g,a=Math.sin(m)*g,f=Math.sin(m)*(s?s/2:g),e.moveTo(n-h,i-a),e.lineTo(n+f,i-o),e.lineTo(n+h,i+a),e.lineTo(n-f,i+o),e.closePath();break;case"crossRot":m+=bs;case"cross":h=Math.cos(m)*(s?s/2:g),o=Math.cos(m)*g,a=Math.sin(m)*g,f=Math.sin(m)*(s?s/2:g),e.moveTo(n-h,i-a),e.lineTo(n+h,i+a),e.moveTo(n+f,i-o),e.lineTo(n-f,i+o);break;case"star":h=Math.cos(m)*(s?s/2:g),o=Math.cos(m)*g,a=Math.sin(m)*g,f=Math.sin(m)*(s?s/2:g),e.moveTo(n-h,i-a),e.lineTo(n+h,i+a),e.moveTo(n+f,i-o),e.lineTo(n-f,i+o),m+=bs,h=Math.cos(m)*(s?s/2:g),o=Math.cos(m)*g,a=Math.sin(m)*g,f=Math.sin(m)*(s?s/2:g),e.moveTo(n-h,i-a),e.lineTo(n+h,i+a),e.moveTo(n+f,i-o),e.lineTo(n-f,i+o);break;case"line":o=s?s/2:Math.cos(m)*g,a=Math.sin(m)*g,e.moveTo(n-o,i-a),e.lineTo(n+o,i+a);break;case"dash":e.moveTo(n,i),e.lineTo(n+Math.cos(m)*(s?s/2:g),i+Math.sin(m)*g);break;case!1:e.closePath();break}e.fill(),t.borderWidth>0&&e.stroke()}}function bi(e,t,n){return n=n||.5,!t||e&&e.x>t.left-n&&e.x<t.right+n&&e.y>t.top-n&&e.y<t.bottom+n}function u_(e,t){e.save(),e.beginPath(),e.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),e.clip()}function h_(e){e.restore()}function wB(e,t,n,i,s){if(!t)return e.lineTo(n.x,n.y);if(s==="middle"){const r=(t.x+n.x)/2;e.lineTo(r,t.y),e.lineTo(r,n.y)}else s==="after"!=!!i?e.lineTo(t.x,n.y):e.lineTo(n.x,t.y);e.lineTo(n.x,n.y)}function EB(e,t,n,i){if(!t)return e.lineTo(n.x,n.y);e.bezierCurveTo(i?t.cp1x:t.cp2x,i?t.cp1y:t.cp2y,i?n.cp2x:n.cp1x,i?n.cp2y:n.cp1y,n.x,n.y)}function xB(e,t){t.translation&&e.translate(t.translation[0],t.translation[1]),jt(t.rotation)||e.rotate(t.rotation),t.color&&(e.fillStyle=t.color),t.textAlign&&(e.textAlign=t.textAlign),t.textBaseline&&(e.textBaseline=t.textBaseline)}function TB(e,t,n,i,s){if(s.strikethrough||s.underline){const r=e.measureText(i),o=t-r.actualBoundingBoxLeft,a=t+r.actualBoundingBoxRight,l=n-r.actualBoundingBoxAscent,c=n+r.actualBoundingBoxDescent,u=s.strikethrough?(l+c)/2:c;e.strokeStyle=e.fillStyle,e.beginPath(),e.lineWidth=s.decorationWidth||2,e.moveTo(o,u),e.lineTo(a,u),e.stroke()}}function CB(e,t){const n=e.fillStyle;e.fillStyle=t.color,e.fillRect(t.left,t.top,t.width,t.height),e.fillStyle=n}function ir(e,t,n,i,s,r={}){const o=te(t)?t:[t],a=r.strokeWidth>0&&r.strokeColor!=="";let l,c;for(e.save(),e.font=s.string,xB(e,r),l=0;l<o.length;++l)c=o[l],r.backdrop&&CB(e,r.backdrop),a&&(r.strokeColor&&(e.strokeStyle=r.strokeColor),jt(r.strokeWidth)||(e.lineWidth=r.strokeWidth),e.strokeText(c,n,i,r.maxWidth)),e.fillText(c,n,i,r.maxWidth),TB(e,n,i,c,r),i+=Number(s.lineHeight);e.restore()}function $u(e,t){const{x:n,y:i,w:s,h:r,radius:o}=t;e.arc(n+o.topLeft,i+o.topLeft,o.topLeft,-nn,ve,!0),e.lineTo(n,i+r-o.bottomLeft),e.arc(n+o.bottomLeft,i+r-o.bottomLeft,o.bottomLeft,ve,nn,!0),e.lineTo(n+s-o.bottomRight,i+r),e.arc(n+s-o.bottomRight,i+r-o.bottomRight,o.bottomRight,nn,0,!0),e.lineTo(n+s,i+o.topRight),e.arc(n+s-o.topRight,i+o.topRight,o.topRight,0,-nn,!0),e.lineTo(n+o.topLeft,i)}const SB=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,IB=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function kB(e,t){const n=(""+e).match(SB);if(!n||n[1]==="normal")return t*1.2;switch(e=+n[2],n[3]){case"px":return e;case"%":e/=100;break}return t*e}const AB=e=>+e||0;function pS(e,t){const n={},i=At(t),s=i?Object.keys(t):t,r=At(e)?i?o=>vt(e[o],e[t[o]]):o=>e[o]:()=>e;for(const o of s)n[o]=AB(r(o));return n}function RB(e){return pS(e,{top:"y",right:"x",bottom:"y",left:"x"})}function Vr(e){return pS(e,["topLeft","topRight","bottomLeft","bottomRight"])}function je(e){const t=RB(e);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function pe(e,t){e=e||{},t=t||se.font;let n=vt(e.size,t.size);typeof n=="string"&&(n=parseInt(n,10));let i=vt(e.style,t.style);i&&!(""+i).match(IB)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);const s={family:vt(e.family,t.family),lineHeight:kB(vt(e.lineHeight,t.lineHeight),n),size:n,style:i,weight:vt(e.weight,t.weight),string:""};return s.string=vB(s),s}function pc(e,t,n,i){let s=!0,r,o,a;for(r=0,o=e.length;r<o;++r)if(a=e[r],a!==void 0&&(t!==void 0&&typeof a=="function"&&(a=a(t),s=!1),n!==void 0&&te(a)&&(a=a[n%a.length],s=!1),a!==void 0))return i&&!s&&(i.cacheable=!1),a}function DB(e,t,n){const{min:i,max:s}=e,r=jU(t,(s-i)/2),o=(a,l)=>n&&a===0?0:a+l;return{min:o(i,-Math.abs(r)),max:o(s,r)}}function _s(e,t){return Object.assign(Object.create(e),t)}function f_(e,t=[""],n,i,s=()=>e[0]){const r=n||e;typeof i>"u"&&(i=yS("_fallback",e));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:e,_rootScopes:r,_fallback:i,_getTarget:s,override:a=>f_([a,...e],t,r,i)};return new Proxy(o,{deleteProperty(a,l){return delete a[l],delete a._keys,delete e[0][l],!0},get(a,l){return mS(a,l,()=>BB(l,t,e,a))},getOwnPropertyDescriptor(a,l){return Reflect.getOwnPropertyDescriptor(a._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(e[0])},has(a,l){return i0(a).includes(l)},ownKeys(a){return i0(a)},set(a,l,c){const u=a._storage||(a._storage=s());return a[l]=u[l]=c,delete a._keys,!0}})}function co(e,t,n,i){const s={_cacheable:!1,_proxy:e,_context:t,_subProxy:n,_stack:new Set,_descriptors:gS(e,i),setContext:r=>co(e,r,n,i),override:r=>co(e.override(r),t,n,i)};return new Proxy(s,{deleteProperty(r,o){return delete r[o],delete e[o],!0},get(r,o,a){return mS(r,o,()=>PB(r,o,a))},getOwnPropertyDescriptor(r,o){return r._descriptors.allKeys?Reflect.has(e,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(e,o)},getPrototypeOf(){return Reflect.getPrototypeOf(e)},has(r,o){return Reflect.has(e,o)},ownKeys(){return Reflect.ownKeys(e)},set(r,o,a){return e[o]=a,delete r[o],!0}})}function gS(e,t={scriptable:!0,indexable:!0}){const{_scriptable:n=t.scriptable,_indexable:i=t.indexable,_allKeys:s=t.allKeys}=e;return{allKeys:s,scriptable:n,indexable:i,isScriptable:ps(n)?n:()=>n,isIndexable:ps(i)?i:()=>i}}const OB=(e,t)=>e?e+s_(t):t,d_=(e,t)=>At(t)&&e!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function mS(e,t,n){if(Object.prototype.hasOwnProperty.call(e,t))return e[t];const i=n();return e[t]=i,i}function PB(e,t,n){const{_proxy:i,_context:s,_subProxy:r,_descriptors:o}=e;let a=i[t];return ps(a)&&o.isScriptable(t)&&(a=MB(t,a,e,n)),te(a)&&a.length&&(a=NB(t,a,e,o.isIndexable)),d_(t,a)&&(a=co(a,s,r&&r[t],o)),a}function MB(e,t,n,i){const{_proxy:s,_context:r,_subProxy:o,_stack:a}=n;if(a.has(e))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+e);a.add(e);let l=t(r,o||i);return a.delete(e),d_(e,l)&&(l=p_(s._scopes,s,e,l)),l}function NB(e,t,n,i){const{_proxy:s,_context:r,_subProxy:o,_descriptors:a}=n;if(typeof r.index<"u"&&i(e))return t[r.index%t.length];if(At(t[0])){const l=t,c=s._scopes.filter(u=>u!==l);t=[];for(const u of l){const h=p_(c,s,e,u);t.push(co(h,r,o&&o[e],a))}}return t}function _S(e,t,n){return ps(e)?e(t,n):e}const LB=(e,t)=>e===!0?t:typeof e=="string"?Fu(t,e):void 0;function FB(e,t,n,i,s){for(const r of t){const o=LB(n,r);if(o){e.add(o);const a=_S(o._fallback,n,s);if(typeof a<"u"&&a!==n&&a!==i)return a}else if(o===!1&&typeof i<"u"&&n!==i)return null}return!1}function p_(e,t,n,i){const s=t._rootScopes,r=_S(t._fallback,n,i),o=[...e,...s],a=new Set;a.add(i);let l=n0(a,o,n,r||n,i);return l===null||typeof r<"u"&&r!==n&&(l=n0(a,o,r,l,i),l===null)?!1:f_(Array.from(a),[""],s,r,()=>UB(t,n,i))}function n0(e,t,n,i,s){for(;n;)n=FB(e,t,n,i,s);return n}function UB(e,t,n){const i=e._getTarget();t in i||(i[t]={});const s=i[t];return te(s)&&At(n)?n:s||{}}function BB(e,t,n,i){let s;for(const r of t)if(s=yS(OB(r,e),n),typeof s<"u")return d_(e,s)?p_(n,i,e,s):s}function yS(e,t){for(const n of t){if(!n)continue;const i=n[e];if(typeof i<"u")return i}}function i0(e){let t=e._keys;return t||(t=e._keys=VB(e._scopes)),t}function VB(e){const t=new Set;for(const n of e)for(const i of Object.keys(n).filter(s=>!s.startsWith("_")))t.add(i);return Array.from(t)}const $B=Number.EPSILON||1e-14,uo=(e,t)=>t<e.length&&!e[t].skip&&e[t],vS=e=>e==="x"?"y":"x";function zB(e,t,n,i){const s=e.skip?t:e,r=t,o=n.skip?t:n,a=Dp(r,s),l=Dp(o,r);let c=a/(a+l),u=l/(a+l);c=isNaN(c)?0:c,u=isNaN(u)?0:u;const h=i*c,f=i*u;return{previous:{x:r.x-h*(o.x-s.x),y:r.y-h*(o.y-s.y)},next:{x:r.x+f*(o.x-s.x),y:r.y+f*(o.y-s.y)}}}function HB(e,t,n){const i=e.length;let s,r,o,a,l,c=uo(e,0);for(let u=0;u<i-1;++u)if(l=c,c=uo(e,u+1),!(!l||!c)){if(ba(t[u],0,$B)){n[u]=n[u+1]=0;continue}s=n[u]/t[u],r=n[u+1]/t[u],a=Math.pow(s,2)+Math.pow(r,2),!(a<=9)&&(o=3/Math.sqrt(a),n[u]=s*o*t[u],n[u+1]=r*o*t[u])}}function jB(e,t,n="x"){const i=vS(n),s=e.length;let r,o,a,l=uo(e,0);for(let c=0;c<s;++c){if(o=a,a=l,l=uo(e,c+1),!a)continue;const u=a[n],h=a[i];o&&(r=(u-o[n])/3,a[`cp1${n}`]=u-r,a[`cp1${i}`]=h-r*t[c]),l&&(r=(l[n]-u)/3,a[`cp2${n}`]=u+r,a[`cp2${i}`]=h+r*t[c])}}function WB(e,t="x"){const n=vS(t),i=e.length,s=Array(i).fill(0),r=Array(i);let o,a,l,c=uo(e,0);for(o=0;o<i;++o)if(a=l,l=c,c=uo(e,o+1),!!l){if(c){const u=c[t]-l[t];s[o]=u!==0?(c[n]-l[n])/u:0}r[o]=a?c?lo(s[o-1])!==lo(s[o])?0:(s[o-1]+s[o])/2:s[o-1]:s[o]}HB(e,s,r),jB(e,r,t)}function gc(e,t,n){return Math.max(Math.min(e,n),t)}function KB(e,t){let n,i,s,r,o,a=bi(e[0],t);for(n=0,i=e.length;n<i;++n)o=r,r=a,a=n<i-1&&bi(e[n+1],t),r&&(s=e[n],o&&(s.cp1x=gc(s.cp1x,t.left,t.right),s.cp1y=gc(s.cp1y,t.top,t.bottom)),a&&(s.cp2x=gc(s.cp2x,t.left,t.right),s.cp2y=gc(s.cp2y,t.top,t.bottom)))}function qB(e,t,n,i,s){let r,o,a,l;if(t.spanGaps&&(e=e.filter(c=>!c.skip)),t.cubicInterpolationMode==="monotone")WB(e,s);else{let c=i?e[e.length-1]:e[0];for(r=0,o=e.length;r<o;++r)a=e[r],l=zB(c,a,e[Math.min(r+1,o-(i?0:1))%o],t.tension),a.cp1x=l.previous.x,a.cp1y=l.previous.y,a.cp2x=l.next.x,a.cp2y=l.next.y,c=a}t.capBezierPoints&&KB(e,n)}function bS(){return typeof window<"u"&&typeof document<"u"}function g_(e){let t=e.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function zu(e,t,n){let i;return typeof e=="string"?(i=parseInt(e,10),e.indexOf("%")!==-1&&(i=i/100*t.parentNode[n])):i=e,i}const rf=e=>e.ownerDocument.defaultView.getComputedStyle(e,null);function GB(e,t){return rf(e).getPropertyValue(t)}const YB=["top","right","bottom","left"];function Ws(e,t,n){const i={};n=n?"-"+n:"";for(let s=0;s<4;s++){const r=YB[s];i[r]=parseFloat(e[t+"-"+r+n])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}const XB=(e,t,n)=>(e>0||t>0)&&(!n||!n.shadowRoot);function QB(e,t){const n=e.touches,i=n&&n.length?n[0]:e,{offsetX:s,offsetY:r}=i;let o=!1,a,l;if(XB(s,r,e.target))a=s,l=r;else{const c=t.getBoundingClientRect();a=i.clientX-c.left,l=i.clientY-c.top,o=!0}return{x:a,y:l,box:o}}function Is(e,t){if("native"in e)return e;const{canvas:n,currentDevicePixelRatio:i}=t,s=rf(n),r=s.boxSizing==="border-box",o=Ws(s,"padding"),a=Ws(s,"border","width"),{x:l,y:c,box:u}=QB(e,n),h=o.left+(u&&a.left),f=o.top+(u&&a.top);let{width:d,height:p}=t;return r&&(d-=o.width+a.width,p-=o.height+a.height),{x:Math.round((l-h)/d*n.width/i),y:Math.round((c-f)/p*n.height/i)}}function JB(e,t,n){let i,s;if(t===void 0||n===void 0){const r=g_(e);if(!r)t=e.clientWidth,n=e.clientHeight;else{const o=r.getBoundingClientRect(),a=rf(r),l=Ws(a,"border","width"),c=Ws(a,"padding");t=o.width-c.width-l.width,n=o.height-c.height-l.height,i=zu(a.maxWidth,r,"clientWidth"),s=zu(a.maxHeight,r,"clientHeight")}}return{width:t,height:n,maxWidth:i||Bu,maxHeight:s||Bu}}const mc=e=>Math.round(e*10)/10;function ZB(e,t,n,i){const s=rf(e),r=Ws(s,"margin"),o=zu(s.maxWidth,e,"clientWidth")||Bu,a=zu(s.maxHeight,e,"clientHeight")||Bu,l=JB(e,t,n);let{width:c,height:u}=l;if(s.boxSizing==="content-box"){const f=Ws(s,"border","width"),d=Ws(s,"padding");c-=d.width+f.width,u-=d.height+f.height}return c=Math.max(0,c-r.width),u=Math.max(0,i?c/i:u-r.height),c=mc(Math.min(c,o,l.maxWidth)),u=mc(Math.min(u,a,l.maxHeight)),c&&!u&&(u=mc(c/2)),(t!==void 0||n!==void 0)&&i&&l.height&&u>l.height&&(u=l.height,c=mc(Math.floor(u*i))),{width:c,height:u}}function s0(e,t,n){const i=t||1,s=Math.floor(e.height*i),r=Math.floor(e.width*i);e.height=Math.floor(e.height),e.width=Math.floor(e.width);const o=e.canvas;return o.style&&(n||!o.style.height&&!o.style.width)&&(o.style.height=`${e.height}px`,o.style.width=`${e.width}px`),e.currentDevicePixelRatio!==i||o.height!==s||o.width!==r?(e.currentDevicePixelRatio=i,o.height=s,o.width=r,e.ctx.setTransform(i,0,0,i,0,0),!0):!1}const tV=function(){let e=!1;try{const t={get passive(){return e=!0,!1}};window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch{}return e}();function r0(e,t){const n=GB(e,t),i=n&&n.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function ks(e,t,n,i){return{x:e.x+n*(t.x-e.x),y:e.y+n*(t.y-e.y)}}function eV(e,t,n,i){return{x:e.x+n*(t.x-e.x),y:i==="middle"?n<.5?e.y:t.y:i==="after"?n<1?e.y:t.y:n>0?t.y:e.y}}function nV(e,t,n,i){const s={x:e.cp2x,y:e.cp2y},r={x:t.cp1x,y:t.cp1y},o=ks(e,s,n),a=ks(s,r,n),l=ks(r,t,n),c=ks(o,a,n),u=ks(a,l,n);return ks(c,u,n)}const iV=function(e,t){return{x(n){return e+e+t-n},setWidth(n){t=n},textAlign(n){return n==="center"?n:n==="right"?"left":"right"},xPlus(n,i){return n-i},leftForLtr(n,i){return n-i}}},sV=function(){return{x(e){return e},setWidth(e){},textAlign(e){return e},xPlus(e,t){return e+t},leftForLtr(e,t){return e}}};function $r(e,t,n){return e?iV(t,n):sV()}function wS(e,t){let n,i;(t==="ltr"||t==="rtl")&&(n=e.canvas.style,i=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",t,"important"),e.prevTextDirection=i)}function ES(e,t){t!==void 0&&(delete e.prevTextDirection,e.canvas.style.setProperty("direction",t[0],t[1]))}function xS(e){return e==="angle"?{between:lS,compare:eB,normalize:In}:{between:Qo,compare:(t,n)=>t-n,normalize:t=>t}}function o0({start:e,end:t,count:n,loop:i,style:s}){return{start:e%n,end:t%n,loop:i&&(t-e+1)%n===0,style:s}}function rV(e,t,n){const{property:i,start:s,end:r}=n,{between:o,normalize:a}=xS(i),l=t.length;let{start:c,end:u,loop:h}=e,f,d;if(h){for(c+=l,u+=l,f=0,d=l;f<d&&o(a(t[c%l][i]),s,r);++f)c--,u--;c%=l,u%=l}return u<c&&(u+=l),{start:c,end:u,loop:h,style:e.style}}function oV(e,t,n){if(!n)return[e];const{property:i,start:s,end:r}=n,o=t.length,{compare:a,between:l,normalize:c}=xS(i),{start:u,end:h,loop:f,style:d}=rV(e,t,n),p=[];let g=!1,m=null,_,v,w;const E=()=>l(s,w,_)&&a(s,w)!==0,x=()=>a(r,_)===0||l(r,w,_),A=()=>g||E(),S=()=>!g||x();for(let C=u,U=u;C<=h;++C)v=t[C%o],!v.skip&&(_=c(v[i]),_!==w&&(g=l(_,s,r),m===null&&A()&&(m=a(_,s)===0?C:U),m!==null&&S()&&(p.push(o0({start:m,end:C,loop:f,count:o,style:d})),m=null),U=C,w=_));return m!==null&&p.push(o0({start:m,end:h,loop:f,count:o,style:d})),p}function aV(e,t){const n=[],i=e.segments;for(let s=0;s<i.length;s++){const r=oV(i[s],e.points,t);r.length&&n.push(...r)}return n}function lV(e,t,n,i){let s=0,r=t-1;if(n&&!i)for(;s<t&&!e[s].skip;)s++;for(;s<t&&e[s].skip;)s++;for(s%=t,n&&(r+=s);r>s&&e[r%t].skip;)r--;return r%=t,{start:s,end:r}}function cV(e,t,n,i){const s=e.length,r=[];let o=t,a=e[t],l;for(l=t+1;l<=n;++l){const c=e[l%s];c.skip||c.stop?a.skip||(i=!1,r.push({start:t%s,end:(l-1)%s,loop:i}),t=o=c.stop?l:null):(o=l,a.skip&&(t=l)),a=c}return o!==null&&r.push({start:t%s,end:o%s,loop:i}),r}function uV(e,t){const n=e.points,i=e.options.spanGaps,s=n.length;if(!s)return[];const r=!!e._loop,{start:o,end:a}=lV(n,s,r,i);if(i===!0)return a0(e,[{start:o,end:a,loop:r}],n,t);const l=a<o?a+s:a,c=!!e._fullLoop&&o===0&&a===s-1;return a0(e,cV(n,o,l,c),n,t)}function a0(e,t,n,i){return!i||!i.setContext||!n?t:hV(e,t,n,i)}function hV(e,t,n,i){const s=e._chart.getContext(),r=l0(e.options),{_datasetIndex:o,options:{spanGaps:a}}=e,l=n.length,c=[];let u=r,h=t[0].start,f=h;function d(p,g,m,_){const v=a?-1:1;if(p!==g){for(p+=l;n[p%l].skip;)p-=v;for(;n[g%l].skip;)g+=v;p%l!==g%l&&(c.push({start:p%l,end:g%l,loop:m,style:_}),u=_,h=g%l)}}for(const p of t){h=a?h:p.start;let g=n[h%l],m;for(f=h+1;f<=p.end;f++){const _=n[f%l];m=l0(i.setContext(_s(s,{type:"segment",p0:g,p1:_,p0DataIndex:(f-1)%l,p1DataIndex:f%l,datasetIndex:o}))),fV(m,u)&&d(h,f-1,p.loop,u),g=_,u=m}h<f-1&&d(h,f-1,p.loop,u)}return c}function l0(e){return{backgroundColor:e.backgroundColor,borderCapStyle:e.borderCapStyle,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderJoinStyle:e.borderJoinStyle,borderWidth:e.borderWidth,borderColor:e.borderColor}}function fV(e,t){if(!t)return!1;const n=[],i=function(s,r){return l_(r)?(n.includes(r)||n.push(r),n.indexOf(r)):r};return JSON.stringify(e,i)!==JSON.stringify(t,i)}/*!
 * Chart.js v4.3.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */class dV{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,n,i,s){const r=n.listeners[s],o=n.duration;r.forEach(a=>a({chart:t,initial:n.initial,numSteps:o,currentStep:Math.min(i-n.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=uS.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let n=0;this._charts.forEach((i,s)=>{if(!i.running||!i.items.length)return;const r=i.items;let o=r.length-1,a=!1,l;for(;o>=0;--o)l=r[o],l._active?(l._total>i.duration&&(i.duration=l._total),l.tick(t),a=!0):(r[o]=r[r.length-1],r.pop());a&&(s.draw(),this._notify(s,i,t,"progress")),r.length||(i.running=!1,this._notify(s,i,t,"complete"),i.initial=!1),n+=r.length}),this._lastDate=t,n===0&&(this._running=!1)}_getAnims(t){const n=this._charts;let i=n.get(t);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},n.set(t,i)),i}listen(t,n,i){this._getAnims(t).listeners[n].push(i)}add(t,n){!n||!n.length||this._getAnims(t).items.push(...n)}has(t){return this._getAnims(t).items.length>0}start(t){const n=this._charts.get(t);n&&(n.running=!0,n.start=Date.now(),n.duration=n.items.reduce((i,s)=>Math.max(i,s._duration),0),this._refresh())}running(t){if(!this._running)return!1;const n=this._charts.get(t);return!(!n||!n.running||!n.items.length)}stop(t){const n=this._charts.get(t);if(!n||!n.items.length)return;const i=n.items;let s=i.length-1;for(;s>=0;--s)i[s].cancel();n.items=[],this._notify(t,n,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var pi=new dV;const c0="transparent",pV={boolean(e,t,n){return n>.5?t:e},color(e,t,n){const i=Zb(e||c0),s=i.valid&&Zb(t||c0);return s&&s.valid?s.mix(i,n).hexString():t},number(e,t,n){return e+(t-e)*n}};class gV{constructor(t,n,i,s){const r=n[i];s=pc([t.to,s,r,t.from]);const o=pc([t.from,r,s]);this._active=!0,this._fn=t.fn||pV[t.type||typeof o],this._easing=wa[t.easing]||wa.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=n,this._prop=i,this._from=o,this._to=s,this._promises=void 0}active(){return this._active}update(t,n,i){if(this._active){this._notify(!1);const s=this._target[this._prop],r=i-this._start,o=this._duration-r;this._start=i,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=r,this._loop=!!t.loop,this._to=pc([t.to,n,s,t.from]),this._from=pc([t.from,s,n])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const n=t-this._start,i=this._duration,s=this._prop,r=this._from,o=this._loop,a=this._to;let l;if(this._active=r!==a&&(o||n<i),!this._active){this._target[s]=a,this._notify(!0);return}if(n<0){this._target[s]=r;return}l=n/i%2,l=o&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[s]=this._fn(r,a,l)}wait(){const t=this._promises||(this._promises=[]);return new Promise((n,i)=>{t.push({res:n,rej:i})})}_notify(t){const n=t?"res":"rej",i=this._promises||[];for(let s=0;s<i.length;s++)i[s][n]()}}class TS{constructor(t,n){this._chart=t,this._properties=new Map,this.configure(n)}configure(t){if(!At(t))return;const n=Object.keys(se.animation),i=this._properties;Object.getOwnPropertyNames(t).forEach(s=>{const r=t[s];if(!At(r))return;const o={};for(const a of n)o[a]=r[a];(te(r.properties)&&r.properties||[s]).forEach(a=>{(a===s||!i.has(a))&&i.set(a,o)})})}_animateOptions(t,n){const i=n.options,s=_V(t,i);if(!s)return[];const r=this._createAnimations(s,i);return i.$shared&&mV(t.options.$animations,i).then(()=>{t.options=i},()=>{}),r}_createAnimations(t,n){const i=this._properties,s=[],r=t.$animations||(t.$animations={}),o=Object.keys(n),a=Date.now();let l;for(l=o.length-1;l>=0;--l){const c=o[l];if(c.charAt(0)==="$")continue;if(c==="options"){s.push(...this._animateOptions(t,n));continue}const u=n[c];let h=r[c];const f=i.get(c);if(h)if(f&&h.active()){h.update(f,u,a);continue}else h.cancel();if(!f||!f.duration){t[c]=u;continue}r[c]=h=new gV(f,t,c,u),s.push(h)}return s}update(t,n){if(this._properties.size===0){Object.assign(t,n);return}const i=this._createAnimations(t,n);if(i.length)return pi.add(this._chart,i),!0}}function mV(e,t){const n=[],i=Object.keys(t);for(let s=0;s<i.length;s++){const r=e[i[s]];r&&r.active()&&n.push(r.wait())}return Promise.all(n)}function _V(e,t){if(!t)return;let n=e.options;if(!n){e.options=t;return}return n.$shared&&(e.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function u0(e,t){const n=e&&e.options||{},i=n.reverse,s=n.min===void 0?t:0,r=n.max===void 0?t:0;return{start:i?r:s,end:i?s:r}}function yV(e,t,n){if(n===!1)return!1;const i=u0(e,n),s=u0(t,n);return{top:s.end,right:i.end,bottom:s.start,left:i.start}}function vV(e){let t,n,i,s;return At(e)?(t=e.top,n=e.right,i=e.bottom,s=e.left):t=n=i=s=e,{top:t,right:n,bottom:i,left:s,disabled:e===!1}}function CS(e,t){const n=[],i=e._getSortedDatasetMetas(t);let s,r;for(s=0,r=i.length;s<r;++s)n.push(i[s].index);return n}function h0(e,t,n,i={}){const s=e.keys,r=i.mode==="single";let o,a,l,c;if(t!==null){for(o=0,a=s.length;o<a;++o){if(l=+s[o],l===n){if(i.all)continue;break}c=e.values[l],Te(c)&&(r||t===0||lo(t)===lo(c))&&(t+=c)}return t}}function bV(e){const t=Object.keys(e),n=new Array(t.length);let i,s,r;for(i=0,s=t.length;i<s;++i)r=t[i],n[i]={x:r,y:e[r]};return n}function f0(e,t){const n=e&&e.options.stacked;return n||n===void 0&&t.stack!==void 0}function wV(e,t,n){return`${e.id}.${t.id}.${n.stack||n.type}`}function EV(e){const{min:t,max:n,minDefined:i,maxDefined:s}=e.getUserBounds();return{min:i?t:Number.NEGATIVE_INFINITY,max:s?n:Number.POSITIVE_INFINITY}}function xV(e,t,n){const i=e[t]||(e[t]={});return i[n]||(i[n]={})}function d0(e,t,n,i){for(const s of t.getMatchingVisibleMetas(i).reverse()){const r=e[s.index];if(n&&r>0||!n&&r<0)return s.index}return null}function p0(e,t){const{chart:n,_cachedMeta:i}=e,s=n._stacks||(n._stacks={}),{iScale:r,vScale:o,index:a}=i,l=r.axis,c=o.axis,u=wV(r,o,i),h=t.length;let f;for(let d=0;d<h;++d){const p=t[d],{[l]:g,[c]:m}=p,_=p._stacks||(p._stacks={});f=_[c]=xV(s,u,g),f[a]=m,f._top=d0(f,o,!0,i.type),f._bottom=d0(f,o,!1,i.type);const v=f._visualValues||(f._visualValues={});v[a]=m}}function Jf(e,t){const n=e.scales;return Object.keys(n).filter(i=>n[i].axis===t).shift()}function TV(e,t){return _s(e,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function CV(e,t,n){return _s(e,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:n,index:t,mode:"default",type:"data"})}function Uo(e,t){const n=e.controller.index,i=e.vScale&&e.vScale.axis;if(i){t=t||e._parsed;for(const s of t){const r=s._stacks;if(!r||r[i]===void 0||r[i][n]===void 0)return;delete r[i][n],r[i]._visualValues!==void 0&&r[i]._visualValues[n]!==void 0&&delete r[i]._visualValues[n]}}}const Zf=e=>e==="reset"||e==="none",g0=(e,t)=>t?e:Object.assign({},e),SV=(e,t,n)=>e&&!t.hidden&&t._stacked&&{keys:CS(n,!0),values:null};class xa{constructor(t,n){this.chart=t,this._ctx=t.ctx,this.index=n,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=f0(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&Uo(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,n=this._cachedMeta,i=this.getDataset(),s=(h,f,d,p)=>h==="x"?f:h==="r"?p:d,r=n.xAxisID=vt(i.xAxisID,Jf(t,"x")),o=n.yAxisID=vt(i.yAxisID,Jf(t,"y")),a=n.rAxisID=vt(i.rAxisID,Jf(t,"r")),l=n.indexAxis,c=n.iAxisID=s(l,r,o,a),u=n.vAxisID=s(l,o,r,a);n.xScale=this.getScaleForId(r),n.yScale=this.getScaleForId(o),n.rScale=this.getScaleForId(a),n.iScale=this.getScaleForId(c),n.vScale=this.getScaleForId(u)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const n=this._cachedMeta;return t===n.iScale?n.vScale:n.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&Xb(this._data,this),t._stacked&&Uo(t)}_dataCheck(){const t=this.getDataset(),n=t.data||(t.data=[]),i=this._data;if(At(n))this._data=bV(n);else if(i!==n){if(i){Xb(i,this);const s=this._cachedMeta;Uo(s),s._parsed=[]}n&&Object.isExtensible(n)&&rB(n,this),this._syncList=[],this._data=n}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const n=this._cachedMeta,i=this.getDataset();let s=!1;this._dataCheck();const r=n._stacked;n._stacked=f0(n.vScale,n),n.stack!==i.stack&&(s=!0,Uo(n),n.stack=i.stack),this._resyncElements(t),(s||r!==n._stacked)&&p0(this,n._parsed)}configure(){const t=this.chart.config,n=t.datasetScopeKeys(this._type),i=t.getOptionScopes(this.getDataset(),n,!0);this.options=t.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,n){const{_cachedMeta:i,_data:s}=this,{iScale:r,_stacked:o}=i,a=r.axis;let l=t===0&&n===s.length?!0:i._sorted,c=t>0&&i._parsed[t-1],u,h,f;if(this._parsing===!1)i._parsed=s,i._sorted=!0,f=s;else{te(s[t])?f=this.parseArrayData(i,s,t,n):At(s[t])?f=this.parseObjectData(i,s,t,n):f=this.parsePrimitiveData(i,s,t,n);const d=()=>h[a]===null||c&&h[a]<c[a];for(u=0;u<n;++u)i._parsed[u+t]=h=f[u],l&&(d()&&(l=!1),c=h);i._sorted=l}o&&p0(this,f)}parsePrimitiveData(t,n,i,s){const{iScale:r,vScale:o}=t,a=r.axis,l=o.axis,c=r.getLabels(),u=r===o,h=new Array(s);let f,d,p;for(f=0,d=s;f<d;++f)p=f+i,h[f]={[a]:u||r.parse(c[p],p),[l]:o.parse(n[p],p)};return h}parseArrayData(t,n,i,s){const{xScale:r,yScale:o}=t,a=new Array(s);let l,c,u,h;for(l=0,c=s;l<c;++l)u=l+i,h=n[u],a[l]={x:r.parse(h[0],u),y:o.parse(h[1],u)};return a}parseObjectData(t,n,i,s){const{xScale:r,yScale:o}=t,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,c=new Array(s);let u,h,f,d;for(u=0,h=s;u<h;++u)f=u+i,d=n[f],c[u]={x:r.parse(Fu(d,a),f),y:o.parse(Fu(d,l),f)};return c}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,n,i){const s=this.chart,r=this._cachedMeta,o=n[t.axis],a={keys:CS(s,!0),values:n._stacks[t.axis]._visualValues};return h0(a,o,r.index,{mode:i})}updateRangeFromParsed(t,n,i,s){const r=i[n.axis];let o=r===null?NaN:r;const a=s&&i._stacks[n.axis];s&&a&&(s.values=a,o=h0(s,r,this._cachedMeta.index)),t.min=Math.min(t.min,o),t.max=Math.max(t.max,o)}getMinMax(t,n){const i=this._cachedMeta,s=i._parsed,r=i._sorted&&t===i.iScale,o=s.length,a=this._getOtherScale(t),l=SV(n,i,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:u,max:h}=EV(a);let f,d;function p(){d=s[f];const g=d[a.axis];return!Te(d[t.axis])||u>g||h<g}for(f=0;f<o&&!(!p()&&(this.updateRangeFromParsed(c,t,d,l),r));++f);if(r){for(f=o-1;f>=0;--f)if(!p()){this.updateRangeFromParsed(c,t,d,l);break}}return c}getAllParsedValues(t){const n=this._cachedMeta._parsed,i=[];let s,r,o;for(s=0,r=n.length;s<r;++s)o=n[s][t.axis],Te(o)&&i.push(o);return i}getMaxOverflow(){return!1}getLabelAndValue(t){const n=this._cachedMeta,i=n.iScale,s=n.vScale,r=this.getParsed(t);return{label:i?""+i.getLabelForValue(r[i.axis]):"",value:s?""+s.getLabelForValue(r[s.axis]):""}}_update(t){const n=this._cachedMeta;this.update(t||"default"),n._clip=vV(vt(this.options.clip,yV(n.xScale,n.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,n=this.chart,i=this._cachedMeta,s=i.data||[],r=n.chartArea,o=[],a=this._drawStart||0,l=this._drawCount||s.length-a,c=this.options.drawActiveElementsOnTop;let u;for(i.dataset&&i.dataset.draw(t,r,a,l),u=a;u<a+l;++u){const h=s[u];h.hidden||(h.active&&c?o.push(h):h.draw(t,r))}for(u=0;u<o.length;++u)o[u].draw(t,r)}getStyle(t,n){const i=n?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(t||0,i)}getContext(t,n,i){const s=this.getDataset();let r;if(t>=0&&t<this._cachedMeta.data.length){const o=this._cachedMeta.data[t];r=o.$context||(o.$context=CV(this.getContext(),t,o)),r.parsed=this.getParsed(t),r.raw=s.data[t],r.index=r.dataIndex=t}else r=this.$context||(this.$context=TV(this.chart.getContext(),this.index)),r.dataset=s,r.index=r.datasetIndex=this.index;return r.active=!!n,r.mode=i,r}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,n){return this._resolveElementOptions(this.dataElementType.id,n,t)}_resolveElementOptions(t,n="default",i){const s=n==="active",r=this._cachedDataOpts,o=t+"-"+n,a=r[o],l=this.enableOptionSharing&&Uu(i);if(a)return g0(a,l);const c=this.chart.config,u=c.datasetElementScopeKeys(this._type,t),h=s?[`${t}Hover`,"hover",t,""]:[t,""],f=c.getOptionScopes(this.getDataset(),u),d=Object.keys(se.elements[t]),p=()=>this.getContext(i,s,n),g=c.resolveNamedOptions(f,d,p,h);return g.$shared&&(g.$shared=l,r[o]=Object.freeze(g0(g,l))),g}_resolveAnimations(t,n,i){const s=this.chart,r=this._cachedDataOpts,o=`animation-${n}`,a=r[o];if(a)return a;let l;if(s.options.animation!==!1){const u=this.chart.config,h=u.datasetAnimationScopeKeys(this._type,n),f=u.getOptionScopes(this.getDataset(),h);l=u.createResolver(f,this.getContext(t,i,n))}const c=new TS(s,l&&l.animations);return l&&l._cacheable&&(r[o]=Object.freeze(c)),c}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,n){return!n||Zf(t)||this.chart._animationsDisabled}_getSharedOptions(t,n){const i=this.resolveDataElementOptions(t,n),s=this._sharedOptions,r=this.getSharedOptions(i),o=this.includeOptions(n,r)||r!==s;return this.updateSharedOptions(r,n,i),{sharedOptions:r,includeOptions:o}}updateElement(t,n,i,s){Zf(s)?Object.assign(t,i):this._resolveAnimations(n,s).update(t,i)}updateSharedOptions(t,n,i){t&&!Zf(n)&&this._resolveAnimations(void 0,n).update(t,i)}_setStyle(t,n,i,s){t.active=s;const r=this.getStyle(n,s);this._resolveAnimations(n,i,s).update(t,{options:!s&&this.getSharedOptions(r)||r})}removeHoverStyle(t,n,i){this._setStyle(t,i,"active",!1)}setHoverStyle(t,n,i){this._setStyle(t,i,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const n=this._data,i=this._cachedMeta.data;for(const[a,l,c]of this._syncList)this[a](l,c);this._syncList=[];const s=i.length,r=n.length,o=Math.min(r,s);o&&this.parse(0,o),r>s?this._insertElements(s,r-s,t):r<s&&this._removeElements(r,s-r)}_insertElements(t,n,i=!0){const s=this._cachedMeta,r=s.data,o=t+n;let a;const l=c=>{for(c.length+=n,a=c.length-1;a>=o;a--)c[a]=c[a-n]};for(l(r),a=t;a<o;++a)r[a]=new this.dataElementType;this._parsing&&l(s._parsed),this.parse(t,n),i&&this.updateElements(r,t,n,"reset")}updateElements(t,n,i,s){}_removeElements(t,n){const i=this._cachedMeta;if(this._parsing){const s=i._parsed.splice(t,n);i._stacked&&Uo(i,s)}i.data.splice(t,n)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[n,i,s]=t;this[n](i,s)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,n){n&&this._sync(["_removeElements",t,n]);const i=arguments.length-2;i&&this._sync(["_insertElements",t,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}et(xa,"defaults",{}),et(xa,"datasetElementType",null),et(xa,"dataElementType",null);class Uc extends xa{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const n=this._cachedMeta,{dataset:i,data:s=[],_dataset:r}=n,o=this.chart._animationsDisabled;let{start:a,count:l}=cB(n,s,o);this._drawStart=a,this._drawCount=l,uB(n)&&(a=0,l=s.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!r._decimated,i.points=s;const c=this.resolveDatasetElementOptions(t);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(i,void 0,{animated:!o,options:c},t),this.updateElements(s,a,l,t)}updateElements(t,n,i,s){const r=s==="reset",{iScale:o,vScale:a,_stacked:l,_dataset:c}=this._cachedMeta,{sharedOptions:u,includeOptions:h}=this._getSharedOptions(n,s),f=o.axis,d=a.axis,{spanGaps:p,segment:g}=this.options,m=el(p)?p:Number.POSITIVE_INFINITY,_=this.chart._animationsDisabled||r||s==="none",v=n+i,w=t.length;let E=n>0&&this.getParsed(n-1);for(let x=0;x<w;++x){const A=t[x],S=_?A:{};if(x<n||x>=v){S.skip=!0;continue}const C=this.getParsed(x),U=jt(C[d]),G=S[f]=o.getPixelForValue(C[f],x),tt=S[d]=r||U?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,C,l):C[d],x);S.skip=isNaN(G)||isNaN(tt)||U,S.stop=x>0&&Math.abs(C[f]-E[f])>m,g&&(S.parsed=C,S.raw=c.data[x]),h&&(S.options=u||this.resolveDataElementOptions(x,A.active?"active":s)),_||this.updateElement(A,x,S,s),E=C}}getMaxOverflow(){const t=this._cachedMeta,n=t.dataset,i=n.options&&n.options.borderWidth||0,s=t.data||[];if(!s.length)return i;const r=s[0].size(this.resolveDataElementOptions(0)),o=s[s.length-1].size(this.resolveDataElementOptions(s.length-1));return Math.max(i,r,o)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}et(Uc,"id","line"),et(Uc,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),et(Uc,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});function Es(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class m_{constructor(t){et(this,"options");this.options=t||{}}static override(t){Object.assign(m_.prototype,t)}init(){}formats(){return Es()}parse(){return Es()}format(){return Es()}add(){return Es()}diff(){return Es()}startOf(){return Es()}endOf(){return Es()}}var IV={_date:m_};function kV(e,t,n,i){const{controller:s,data:r,_sorted:o}=e,a=s._cachedMeta.iScale;if(a&&t===a.axis&&t!=="r"&&o&&r.length){const l=a._reversePixels?iB:Bs;if(i){if(s._sharedOptions){const c=r[0],u=typeof c.getRange=="function"&&c.getRange(t);if(u){const h=l(r,t,n-u),f=l(r,t,n+u);return{lo:h.lo,hi:f.hi}}}}else return l(r,t,n)}return{lo:0,hi:r.length-1}}function Ml(e,t,n,i,s){const r=e.getSortedVisibleDatasetMetas(),o=n[t];for(let a=0,l=r.length;a<l;++a){const{index:c,data:u}=r[a],{lo:h,hi:f}=kV(r[a],t,o,s);for(let d=h;d<=f;++d){const p=u[d];p.skip||i(p,c,d)}}}function AV(e){const t=e.indexOf("x")!==-1,n=e.indexOf("y")!==-1;return function(i,s){const r=t?Math.abs(i.x-s.x):0,o=n?Math.abs(i.y-s.y):0;return Math.sqrt(Math.pow(r,2)+Math.pow(o,2))}}function td(e,t,n,i,s){const r=[];return!s&&!e.isPointInArea(t)||Ml(e,n,t,function(a,l,c){!s&&!bi(a,e.chartArea,0)||a.inRange(t.x,t.y,i)&&r.push({element:a,datasetIndex:l,index:c})},!0),r}function RV(e,t,n,i){let s=[];function r(o,a,l){const{startAngle:c,endAngle:u}=o.getProps(["startAngle","endAngle"],i),{angle:h}=tB(o,{x:t.x,y:t.y});lS(h,c,u)&&s.push({element:o,datasetIndex:a,index:l})}return Ml(e,n,t,r),s}function DV(e,t,n,i,s,r){let o=[];const a=AV(n);let l=Number.POSITIVE_INFINITY;function c(u,h,f){const d=u.inRange(t.x,t.y,s);if(i&&!d)return;const p=u.getCenterPoint(s);if(!(!!r||e.isPointInArea(p))&&!d)return;const m=a(t,p);m<l?(o=[{element:u,datasetIndex:h,index:f}],l=m):m===l&&o.push({element:u,datasetIndex:h,index:f})}return Ml(e,n,t,c),o}function ed(e,t,n,i,s,r){return!r&&!e.isPointInArea(t)?[]:n==="r"&&!i?RV(e,t,n,s):DV(e,t,n,i,s,r)}function m0(e,t,n,i,s){const r=[],o=n==="x"?"inXRange":"inYRange";let a=!1;return Ml(e,n,t,(l,c,u)=>{l[o](t[n],s)&&(r.push({element:l,datasetIndex:c,index:u}),a=a||l.inRange(t.x,t.y,s))}),i&&!a?[]:r}var OV={evaluateInteractionItems:Ml,modes:{index(e,t,n,i){const s=Is(t,e),r=n.axis||"x",o=n.includeInvisible||!1,a=n.intersect?td(e,s,r,i,o):ed(e,s,r,!1,i,o),l=[];return a.length?(e.getSortedVisibleDatasetMetas().forEach(c=>{const u=a[0].index,h=c.data[u];h&&!h.skip&&l.push({element:h,datasetIndex:c.index,index:u})}),l):[]},dataset(e,t,n,i){const s=Is(t,e),r=n.axis||"xy",o=n.includeInvisible||!1;let a=n.intersect?td(e,s,r,i,o):ed(e,s,r,!1,i,o);if(a.length>0){const l=a[0].datasetIndex,c=e.getDatasetMeta(l).data;a=[];for(let u=0;u<c.length;++u)a.push({element:c[u],datasetIndex:l,index:u})}return a},point(e,t,n,i){const s=Is(t,e),r=n.axis||"xy",o=n.includeInvisible||!1;return td(e,s,r,i,o)},nearest(e,t,n,i){const s=Is(t,e),r=n.axis||"xy",o=n.includeInvisible||!1;return ed(e,s,r,n.intersect,i,o)},x(e,t,n,i){const s=Is(t,e);return m0(e,s,"x",n.intersect,i)},y(e,t,n,i){const s=Is(t,e);return m0(e,s,"y",n.intersect,i)}}};const SS=["left","top","right","bottom"];function Bo(e,t){return e.filter(n=>n.pos===t)}function _0(e,t){return e.filter(n=>SS.indexOf(n.pos)===-1&&n.box.axis===t)}function Vo(e,t){return e.sort((n,i)=>{const s=t?i:n,r=t?n:i;return s.weight===r.weight?s.index-r.index:s.weight-r.weight})}function PV(e){const t=[];let n,i,s,r,o,a;for(n=0,i=(e||[]).length;n<i;++n)s=e[n],{position:r,options:{stack:o,stackWeight:a=1}}=s,t.push({index:n,box:s,pos:r,horizontal:s.isHorizontal(),weight:s.weight,stack:o&&r+o,stackWeight:a});return t}function MV(e){const t={};for(const n of e){const{stack:i,pos:s,stackWeight:r}=n;if(!i||!SS.includes(s))continue;const o=t[i]||(t[i]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=r}return t}function NV(e,t){const n=MV(e),{vBoxMaxWidth:i,hBoxMaxHeight:s}=t;let r,o,a;for(r=0,o=e.length;r<o;++r){a=e[r];const{fullSize:l}=a.box,c=n[a.stack],u=c&&a.stackWeight/c.weight;a.horizontal?(a.width=u?u*i:l&&t.availableWidth,a.height=s):(a.width=i,a.height=u?u*s:l&&t.availableHeight)}return n}function LV(e){const t=PV(e),n=Vo(t.filter(c=>c.box.fullSize),!0),i=Vo(Bo(t,"left"),!0),s=Vo(Bo(t,"right")),r=Vo(Bo(t,"top"),!0),o=Vo(Bo(t,"bottom")),a=_0(t,"x"),l=_0(t,"y");return{fullSize:n,leftAndTop:i.concat(r),rightAndBottom:s.concat(l).concat(o).concat(a),chartArea:Bo(t,"chartArea"),vertical:i.concat(s).concat(l),horizontal:r.concat(o).concat(a)}}function y0(e,t,n,i){return Math.max(e[n],t[n])+Math.max(e[i],t[i])}function IS(e,t){e.top=Math.max(e.top,t.top),e.left=Math.max(e.left,t.left),e.bottom=Math.max(e.bottom,t.bottom),e.right=Math.max(e.right,t.right)}function FV(e,t,n,i){const{pos:s,box:r}=n,o=e.maxPadding;if(!At(s)){n.size&&(e[s]-=n.size);const h=i[n.stack]||{size:0,count:1};h.size=Math.max(h.size,n.horizontal?r.height:r.width),n.size=h.size/h.count,e[s]+=n.size}r.getPadding&&IS(o,r.getPadding());const a=Math.max(0,t.outerWidth-y0(o,e,"left","right")),l=Math.max(0,t.outerHeight-y0(o,e,"top","bottom")),c=a!==e.w,u=l!==e.h;return e.w=a,e.h=l,n.horizontal?{same:c,other:u}:{same:u,other:c}}function UV(e){const t=e.maxPadding;function n(i){const s=Math.max(t[i]-e[i],0);return e[i]+=s,s}e.y+=n("top"),e.x+=n("left"),n("right"),n("bottom")}function BV(e,t){const n=t.maxPadding;function i(s){const r={left:0,top:0,right:0,bottom:0};return s.forEach(o=>{r[o]=Math.max(t[o],n[o])}),r}return i(e?["left","right"]:["top","bottom"])}function Jo(e,t,n,i){const s=[];let r,o,a,l,c,u;for(r=0,o=e.length,c=0;r<o;++r){a=e[r],l=a.box,l.update(a.width||t.w,a.height||t.h,BV(a.horizontal,t));const{same:h,other:f}=FV(t,n,a,i);c|=h&&s.length,u=u||f,l.fullSize||s.push(a)}return c&&Jo(s,t,n,i)||u}function _c(e,t,n,i,s){e.top=n,e.left=t,e.right=t+i,e.bottom=n+s,e.width=i,e.height=s}function v0(e,t,n,i){const s=n.padding;let{x:r,y:o}=t;for(const a of e){const l=a.box,c=i[a.stack]||{count:1,placed:0,weight:1},u=a.stackWeight/c.weight||1;if(a.horizontal){const h=t.w*u,f=c.size||l.height;Uu(c.start)&&(o=c.start),l.fullSize?_c(l,s.left,o,n.outerWidth-s.right-s.left,f):_c(l,t.left+c.placed,o,h,f),c.start=o,c.placed+=h,o=l.bottom}else{const h=t.h*u,f=c.size||l.width;Uu(c.start)&&(r=c.start),l.fullSize?_c(l,r,s.top,f,n.outerHeight-s.bottom-s.top):_c(l,r,t.top+c.placed,f,h),c.start=r,c.placed+=h,r=l.right}}t.x=r,t.y=o}var En={addBox(e,t){e.boxes||(e.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(n){t.draw(n)}}]},e.boxes.push(t)},removeBox(e,t){const n=e.boxes?e.boxes.indexOf(t):-1;n!==-1&&e.boxes.splice(n,1)},configure(e,t,n){t.fullSize=n.fullSize,t.position=n.position,t.weight=n.weight},update(e,t,n,i){if(!e)return;const s=je(e.options.layout.padding),r=Math.max(t-s.width,0),o=Math.max(n-s.height,0),a=LV(e.boxes),l=a.vertical,c=a.horizontal;Nt(e.boxes,g=>{typeof g.beforeLayout=="function"&&g.beforeLayout()});const u=l.reduce((g,m)=>m.box.options&&m.box.options.display===!1?g:g+1,0)||1,h=Object.freeze({outerWidth:t,outerHeight:n,padding:s,availableWidth:r,availableHeight:o,vBoxMaxWidth:r/2/u,hBoxMaxHeight:o/2}),f=Object.assign({},s);IS(f,je(i));const d=Object.assign({maxPadding:f,w:r,h:o,x:s.left,y:s.top},s),p=NV(l.concat(c),h);Jo(a.fullSize,d,h,p),Jo(l,d,h,p),Jo(c,d,h,p)&&Jo(l,d,h,p),UV(d),v0(a.leftAndTop,d,h,p),d.x+=d.w,d.y+=d.h,v0(a.rightAndBottom,d,h,p),e.chartArea={left:d.left,top:d.top,right:d.left+d.w,bottom:d.top+d.h,height:d.h,width:d.w},Nt(a.chartArea,g=>{const m=g.box;Object.assign(m,e.chartArea),m.update(d.w,d.h,{left:0,top:0,right:0,bottom:0})})}};class kS{acquireContext(t,n){}releaseContext(t){return!1}addEventListener(t,n,i){}removeEventListener(t,n,i){}getDevicePixelRatio(){return 1}getMaximumSize(t,n,i,s){return n=Math.max(0,n||t.width),i=i||t.height,{width:n,height:Math.max(0,s?Math.floor(n/s):i)}}isAttached(t){return!0}updateConfig(t){}}class VV extends kS{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const Bc="$chartjs",$V={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},b0=e=>e===null||e==="";function zV(e,t){const n=e.style,i=e.getAttribute("height"),s=e.getAttribute("width");if(e[Bc]={initial:{height:i,width:s,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",n.boxSizing=n.boxSizing||"border-box",b0(s)){const r=r0(e,"width");r!==void 0&&(e.width=r)}if(b0(i))if(e.style.height==="")e.height=e.width/(t||2);else{const r=r0(e,"height");r!==void 0&&(e.height=r)}return e}const AS=tV?{passive:!0}:!1;function HV(e,t,n){e.addEventListener(t,n,AS)}function jV(e,t,n){e.canvas.removeEventListener(t,n,AS)}function WV(e,t){const n=$V[e.type]||e.type,{x:i,y:s}=Is(e,t);return{type:n,chart:t,native:e,x:i!==void 0?i:null,y:s!==void 0?s:null}}function Hu(e,t){for(const n of e)if(n===t||n.contains(t))return!0}function KV(e,t,n){const i=e.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||Hu(a.addedNodes,i),o=o&&!Hu(a.removedNodes,i);o&&n()});return s.observe(document,{childList:!0,subtree:!0}),s}function qV(e,t,n){const i=e.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||Hu(a.removedNodes,i),o=o&&!Hu(a.addedNodes,i);o&&n()});return s.observe(document,{childList:!0,subtree:!0}),s}const nl=new Map;let w0=0;function RS(){const e=window.devicePixelRatio;e!==w0&&(w0=e,nl.forEach((t,n)=>{n.currentDevicePixelRatio!==e&&t()}))}function GV(e,t){nl.size||window.addEventListener("resize",RS),nl.set(e,t)}function YV(e){nl.delete(e),nl.size||window.removeEventListener("resize",RS)}function XV(e,t,n){const i=e.canvas,s=i&&g_(i);if(!s)return;const r=hS((a,l)=>{const c=s.clientWidth;n(a,l),c<s.clientWidth&&n()},window),o=new ResizeObserver(a=>{const l=a[0],c=l.contentRect.width,u=l.contentRect.height;c===0&&u===0||r(c,u)});return o.observe(s),GV(e,r),o}function nd(e,t,n){n&&n.disconnect(),t==="resize"&&YV(e)}function QV(e,t,n){const i=e.canvas,s=hS(r=>{e.ctx!==null&&n(WV(r,e))},e);return HV(i,t,s),s}class JV extends kS{acquireContext(t,n){const i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(zV(t,n),i):null}releaseContext(t){const n=t.canvas;if(!n[Bc])return!1;const i=n[Bc].initial;["height","width"].forEach(r=>{const o=i[r];jt(o)?n.removeAttribute(r):n.setAttribute(r,o)});const s=i.style||{};return Object.keys(s).forEach(r=>{n.style[r]=s[r]}),n.width=n.width,delete n[Bc],!0}addEventListener(t,n,i){this.removeEventListener(t,n);const s=t.$proxies||(t.$proxies={}),o={attach:KV,detach:qV,resize:XV}[n]||QV;s[n]=o(t,n,i)}removeEventListener(t,n){const i=t.$proxies||(t.$proxies={}),s=i[n];if(!s)return;({attach:nd,detach:nd,resize:nd}[n]||jV)(t,n,s),i[n]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,n,i,s){return ZB(t,n,i,s)}isAttached(t){const n=g_(t);return!!(n&&n.isConnected)}}function ZV(e){return!bS()||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas?VV:JV}var Tc;let dr=(Tc=class{constructor(){et(this,"x");et(this,"y");et(this,"active",!1);et(this,"options");et(this,"$animations")}tooltipPosition(t){const{x:n,y:i}=this.getProps(["x","y"],t);return{x:n,y:i}}hasValue(){return el(this.x)&&el(this.y)}getProps(t,n){const i=this.$animations;if(!n||!i)return this;const s={};return t.forEach(r=>{s[r]=i[r]&&i[r].active()?i[r]._to:this[r]}),s}},et(Tc,"defaults",{}),et(Tc,"defaultRoutes"),Tc);function t$(e,t){const n=e.options.ticks,i=e$(e),s=Math.min(n.maxTicksLimit||i,i),r=n.major.enabled?i$(t):[],o=r.length,a=r[0],l=r[o-1],c=[];if(o>s)return s$(t,c,r,o/s),c;const u=n$(r,t,s);if(o>0){let h,f;const d=o>1?Math.round((l-a)/(o-1)):null;for(yc(t,c,u,jt(d)?0:a-d,a),h=0,f=o-1;h<f;h++)yc(t,c,u,r[h],r[h+1]);return yc(t,c,u,l,jt(d)?t.length:l+d),c}return yc(t,c,u),c}function e$(e){const t=e.options.offset,n=e._tickSize(),i=e._length/n+(t?0:1),s=e._maxLength/n;return Math.floor(Math.min(i,s))}function n$(e,t,n){const i=r$(e),s=t.length/n;if(!i)return Math.max(s,1);const r=JU(i);for(let o=0,a=r.length-1;o<a;o++){const l=r[o];if(l>s)return l}return Math.max(s,1)}function i$(e){const t=[];let n,i;for(n=0,i=e.length;n<i;n++)e[n].major&&t.push(n);return t}function s$(e,t,n,i){let s=0,r=n[0],o;for(i=Math.ceil(i),o=0;o<e.length;o++)o===r&&(t.push(e[o]),s++,r=n[s*i])}function yc(e,t,n,i,s){const r=vt(i,0),o=Math.min(vt(s,e.length),e.length);let a=0,l,c,u;for(n=Math.ceil(n),s&&(l=s-i,n=l/Math.floor(l/n)),u=r;u<0;)a++,u=Math.round(r+a*n);for(c=Math.max(r,0);c<o;c++)c===u&&(t.push(e[c]),a++,u=Math.round(r+a*n))}function r$(e){const t=e.length;let n,i;if(t<2)return!1;for(i=e[0],n=1;n<t;++n)if(e[n]-e[n-1]!==i)return!1;return i}const o$=e=>e==="left"?"right":e==="right"?"left":e,E0=(e,t,n)=>t==="top"||t==="left"?e[t]+n:e[t]-n,x0=(e,t)=>Math.min(t||e,e);function T0(e,t){const n=[],i=e.length/t,s=e.length;let r=0;for(;r<s;r+=i)n.push(e[Math.floor(r)]);return n}function a$(e,t,n){const i=e.ticks.length,s=Math.min(t,i-1),r=e._startPixel,o=e._endPixel,a=1e-6;let l=e.getPixelForTick(s),c;if(!(n&&(i===1?c=Math.max(l-r,o-l):t===0?c=(e.getPixelForTick(1)-l)/2:c=(l-e.getPixelForTick(s-1))/2,l+=s<t?c:-c,l<r-a||l>o+a)))return l}function l$(e,t){Nt(e,n=>{const i=n.gc,s=i.length/2;let r;if(s>t){for(r=0;r<s;++r)delete n.data[i[r]];i.splice(0,s)}})}function $o(e){return e.drawTicks?e.tickLength:0}function C0(e,t){if(!e.display)return 0;const n=pe(e.font,t),i=je(e.padding);return(te(e.text)?e.text.length:1)*n.lineHeight+i.height}function c$(e,t){return _s(e,{scale:t,type:"scale"})}function u$(e,t,n){return _s(e,{tick:n,index:t,type:"tick"})}function h$(e,t,n){let i=a_(e);return(n&&t!=="right"||!n&&t==="right")&&(i=o$(i)),i}function f$(e,t,n,i){const{top:s,left:r,bottom:o,right:a,chart:l}=e,{chartArea:c,scales:u}=l;let h=0,f,d,p;const g=o-s,m=a-r;if(e.isHorizontal()){if(d=Pe(i,r,a),At(n)){const _=Object.keys(n)[0],v=n[_];p=u[_].getPixelForValue(v)+g-t}else n==="center"?p=(c.bottom+c.top)/2+g-t:p=E0(e,n,t);f=a-r}else{if(At(n)){const _=Object.keys(n)[0],v=n[_];d=u[_].getPixelForValue(v)-m+t}else n==="center"?d=(c.left+c.right)/2-m+t:d=E0(e,n,t);p=Pe(i,o,s),h=n==="left"?-nn:nn}return{titleX:d,titleY:p,maxWidth:f,rotation:h}}class pr extends dr{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,n){return t}getUserBounds(){let{_userMin:t,_userMax:n,_suggestedMin:i,_suggestedMax:s}=this;return t=cn(t,Number.POSITIVE_INFINITY),n=cn(n,Number.NEGATIVE_INFINITY),i=cn(i,Number.POSITIVE_INFINITY),s=cn(s,Number.NEGATIVE_INFINITY),{min:cn(t,i),max:cn(n,s),minDefined:Te(t),maxDefined:Te(n)}}getMinMax(t){let{min:n,max:i,minDefined:s,maxDefined:r}=this.getUserBounds(),o;if(s&&r)return{min:n,max:i};const a=this.getMatchingVisibleMetas();for(let l=0,c=a.length;l<c;++l)o=a[l].controller.getMinMax(this,t),s||(n=Math.min(n,o.min)),r||(i=Math.max(i,o.max));return n=r&&n>i?i:n,i=s&&n>i?n:i,{min:cn(n,cn(i,n)),max:cn(i,cn(n,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){Bt(this.options.beforeUpdate,[this])}update(t,n,i){const{beginAtZero:s,grace:r,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=n,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=DB(this,r,s),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=a<this.ticks.length;this._convertTicksToLabels(l?T0(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=t$(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,n,i;this.isHorizontal()?(n=this.left,i=this.right):(n=this.top,i=this.bottom,t=!t),this._startPixel=n,this._endPixel=i,this._reversePixels=t,this._length=i-n,this._alignToPixels=this.options.alignToPixels}afterUpdate(){Bt(this.options.afterUpdate,[this])}beforeSetDimensions(){Bt(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){Bt(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),Bt(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){Bt(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const n=this.options.ticks;let i,s,r;for(i=0,s=t.length;i<s;i++)r=t[i],r.label=Bt(n.callback,[r.value,i,t],this)}afterTickToLabelConversion(){Bt(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){Bt(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,n=t.ticks,i=x0(this.ticks.length,t.ticks.maxTicksLimit),s=n.minRotation||0,r=n.maxRotation;let o=s,a,l,c;if(!this._isVisible()||!n.display||s>=r||i<=1||!this.isHorizontal()){this.labelRotation=s;return}const u=this._getLabelSizes(),h=u.widest.width,f=u.highest.height,d=wn(this.chart.width-h,0,this.maxWidth);a=t.offset?this.maxWidth/i:d/(i-1),h+6>a&&(a=d/(i-(t.offset?.5:1)),l=this.maxHeight-$o(t.grid)-n.padding-C0(t.title,this.chart.options.font),c=Math.sqrt(h*h+f*f),o=r_(Math.min(Math.asin(wn((u.highest.height+6)/a,-1,1)),Math.asin(wn(l/c,-1,1))-Math.asin(wn(f/c,-1,1)))),o=Math.max(s,Math.min(r,o))),this.labelRotation=o}afterCalculateLabelRotation(){Bt(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){Bt(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:n,options:{ticks:i,title:s,grid:r}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const l=C0(s,n.options.font);if(a?(t.width=this.maxWidth,t.height=$o(r)+l):(t.height=this.maxHeight,t.width=$o(r)+l),i.display&&this.ticks.length){const{first:c,last:u,widest:h,highest:f}=this._getLabelSizes(),d=i.padding*2,p=qi(this.labelRotation),g=Math.cos(p),m=Math.sin(p);if(a){const _=i.mirror?0:m*h.width+g*f.height;t.height=Math.min(this.maxHeight,t.height+_+d)}else{const _=i.mirror?0:g*h.width+m*f.height;t.width=Math.min(this.maxWidth,t.width+_+d)}this._calculatePadding(c,u,m,g)}}this._handleMargins(),a?(this.width=this._length=n.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=n.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,n,i,s){const{ticks:{align:r,padding:o},position:a}=this.options,l=this.labelRotation!==0,c=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const u=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1);let f=0,d=0;l?c?(f=s*t.width,d=i*n.height):(f=i*t.height,d=s*n.width):r==="start"?d=n.width:r==="end"?f=t.width:r!=="inner"&&(f=t.width/2,d=n.width/2),this.paddingLeft=Math.max((f-u+o)*this.width/(this.width-u),0),this.paddingRight=Math.max((d-h+o)*this.width/(this.width-h),0)}else{let u=n.height/2,h=t.height/2;r==="start"?(u=0,h=t.height):r==="end"&&(u=n.height,h=0),this.paddingTop=u+o,this.paddingBottom=h+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){Bt(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:n}=this.options;return n==="top"||n==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let n,i;for(n=0,i=t.length;n<i;n++)jt(t[n].label)&&(t.splice(n,1),i--,n--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const n=this.options.ticks.sampleSize;let i=this.ticks;n<i.length&&(i=T0(i,n)),this._labelSizes=t=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,n,i){const{ctx:s,_longestTextCache:r}=this,o=[],a=[],l=Math.floor(n/x0(n,i));let c=0,u=0,h,f,d,p,g,m,_,v,w,E,x;for(h=0;h<n;h+=l){if(p=t[h].label,g=this._resolveTickFontOptions(h),s.font=m=g.string,_=r[m]=r[m]||{data:{},gc:[]},v=g.lineHeight,w=E=0,!jt(p)&&!te(p))w=Vu(s,_.data,_.gc,w,p),E=v;else if(te(p))for(f=0,d=p.length;f<d;++f)x=p[f],!jt(x)&&!te(x)&&(w=Vu(s,_.data,_.gc,w,x),E+=v);o.push(w),a.push(E),c=Math.max(w,c),u=Math.max(E,u)}l$(r,n);const A=o.indexOf(c),S=a.indexOf(u),C=U=>({width:o[U]||0,height:a[U]||0});return{first:C(0),last:C(n-1),widest:C(A),highest:C(S),widths:o,heights:a}}getLabelForValue(t){return t}getPixelForValue(t,n){return NaN}getValueForPixel(t){}getPixelForTick(t){const n=this.ticks;return t<0||t>n.length-1?null:this.getPixelForValue(n[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const n=this._startPixel+t*this._length;return nB(this._alignToPixels?ws(this.chart,n,0):n)}getDecimalForPixel(t){const n=(t-this._startPixel)/this._length;return this._reversePixels?1-n:n}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:n}=this;return t<0&&n<0?n:t>0&&n>0?t:0}getContext(t){const n=this.ticks||[];if(t>=0&&t<n.length){const i=n[t];return i.$context||(i.$context=u$(this.getContext(),t,i))}return this.$context||(this.$context=c$(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,n=qi(this.labelRotation),i=Math.abs(Math.cos(n)),s=Math.abs(Math.sin(n)),r=this._getLabelSizes(),o=t.autoSkipPadding||0,a=r?r.widest.width+o:0,l=r?r.highest.height+o:0;return this.isHorizontal()?l*i>a*s?a/i:l/s:l*s<a*i?l/i:a/s}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const n=this.axis,i=this.chart,s=this.options,{grid:r,position:o,border:a}=s,l=r.offset,c=this.isHorizontal(),h=this.ticks.length+(l?1:0),f=$o(r),d=[],p=a.setContext(this.getContext()),g=p.display?p.width:0,m=g/2,_=function(dt){return ws(i,dt,g)};let v,w,E,x,A,S,C,U,G,tt,ot,Jt;if(o==="top")v=_(this.bottom),S=this.bottom-f,U=v-m,tt=_(t.top)+m,Jt=t.bottom;else if(o==="bottom")v=_(this.top),tt=t.top,Jt=_(t.bottom)-m,S=v+m,U=this.top+f;else if(o==="left")v=_(this.right),A=this.right-f,C=v-m,G=_(t.left)+m,ot=t.right;else if(o==="right")v=_(this.left),G=t.left,ot=_(t.right)-m,A=v+m,C=this.left+f;else if(n==="x"){if(o==="center")v=_((t.top+t.bottom)/2+.5);else if(At(o)){const dt=Object.keys(o)[0],ft=o[dt];v=_(this.chart.scales[dt].getPixelForValue(ft))}tt=t.top,Jt=t.bottom,S=v+m,U=S+f}else if(n==="y"){if(o==="center")v=_((t.left+t.right)/2);else if(At(o)){const dt=Object.keys(o)[0],ft=o[dt];v=_(this.chart.scales[dt].getPixelForValue(ft))}A=v-m,C=A-f,G=t.left,ot=t.right}const Gt=vt(s.ticks.maxTicksLimit,h),ht=Math.max(1,Math.ceil(h/Gt));for(w=0;w<h;w+=ht){const dt=this.getContext(w),ft=r.setContext(dt),Tt=a.setContext(dt),Re=ft.lineWidth,Ye=ft.color,De=Tt.dash||[],oe=Tt.dashOffset,yn=ft.tickWidth,jn=ft.tickColor,k=ft.tickBorderDash||[],B=ft.tickBorderDashOffset;E=a$(this,w,l),E!==void 0&&(x=ws(i,E,Re),c?A=C=G=ot=x:S=U=tt=Jt=x,d.push({tx1:A,ty1:S,tx2:C,ty2:U,x1:G,y1:tt,x2:ot,y2:Jt,width:Re,color:Ye,borderDash:De,borderDashOffset:oe,tickWidth:yn,tickColor:jn,tickBorderDash:k,tickBorderDashOffset:B}))}return this._ticksLength=h,this._borderValue=v,d}_computeLabelItems(t){const n=this.axis,i=this.options,{position:s,ticks:r}=i,o=this.isHorizontal(),a=this.ticks,{align:l,crossAlign:c,padding:u,mirror:h}=r,f=$o(i.grid),d=f+u,p=h?-u:d,g=-qi(this.labelRotation),m=[];let _,v,w,E,x,A,S,C,U,G,tt,ot,Jt="middle";if(s==="top")A=this.bottom-p,S=this._getXAxisLabelAlignment();else if(s==="bottom")A=this.top+p,S=this._getXAxisLabelAlignment();else if(s==="left"){const ht=this._getYAxisLabelAlignment(f);S=ht.textAlign,x=ht.x}else if(s==="right"){const ht=this._getYAxisLabelAlignment(f);S=ht.textAlign,x=ht.x}else if(n==="x"){if(s==="center")A=(t.top+t.bottom)/2+d;else if(At(s)){const ht=Object.keys(s)[0],dt=s[ht];A=this.chart.scales[ht].getPixelForValue(dt)+d}S=this._getXAxisLabelAlignment()}else if(n==="y"){if(s==="center")x=(t.left+t.right)/2-d;else if(At(s)){const ht=Object.keys(s)[0],dt=s[ht];x=this.chart.scales[ht].getPixelForValue(dt)}S=this._getYAxisLabelAlignment(f).textAlign}n==="y"&&(l==="start"?Jt="top":l==="end"&&(Jt="bottom"));const Gt=this._getLabelSizes();for(_=0,v=a.length;_<v;++_){w=a[_],E=w.label;const ht=r.setContext(this.getContext(_));C=this.getPixelForTick(_)+r.labelOffset,U=this._resolveTickFontOptions(_),G=U.lineHeight,tt=te(E)?E.length:1;const dt=tt/2,ft=ht.color,Tt=ht.textStrokeColor,Re=ht.textStrokeWidth;let Ye=S;o?(x=C,S==="inner"&&(_===v-1?Ye=this.options.reverse?"left":"right":_===0?Ye=this.options.reverse?"right":"left":Ye="center"),s==="top"?c==="near"||g!==0?ot=-tt*G+G/2:c==="center"?ot=-Gt.highest.height/2-dt*G+G:ot=-Gt.highest.height+G/2:c==="near"||g!==0?ot=G/2:c==="center"?ot=Gt.highest.height/2-dt*G:ot=Gt.highest.height-tt*G,h&&(ot*=-1),g!==0&&!ht.showLabelBackdrop&&(x+=G/2*Math.sin(g))):(A=C,ot=(1-tt)*G/2);let De;if(ht.showLabelBackdrop){const oe=je(ht.backdropPadding),yn=Gt.heights[_],jn=Gt.widths[_];let k=ot-oe.top,B=0-oe.left;switch(Jt){case"middle":k-=yn/2;break;case"bottom":k-=yn;break}switch(S){case"center":B-=jn/2;break;case"right":B-=jn;break}De={left:B,top:k,width:jn+oe.width,height:yn+oe.height,color:ht.backdropColor}}m.push({label:E,font:U,textOffset:ot,options:{rotation:g,color:ft,strokeColor:Tt,strokeWidth:Re,textAlign:Ye,textBaseline:Jt,translation:[x,A],backdrop:De}})}return m}_getXAxisLabelAlignment(){const{position:t,ticks:n}=this.options;if(-qi(this.labelRotation))return t==="top"?"left":"right";let s="center";return n.align==="start"?s="left":n.align==="end"?s="right":n.align==="inner"&&(s="inner"),s}_getYAxisLabelAlignment(t){const{position:n,ticks:{crossAlign:i,mirror:s,padding:r}}=this.options,o=this._getLabelSizes(),a=t+r,l=o.widest.width;let c,u;return n==="left"?s?(u=this.right+r,i==="near"?c="left":i==="center"?(c="center",u+=l/2):(c="right",u+=l)):(u=this.right-a,i==="near"?c="right":i==="center"?(c="center",u-=l/2):(c="left",u=this.left)):n==="right"?s?(u=this.left+r,i==="near"?c="right":i==="center"?(c="center",u-=l/2):(c="left",u-=l)):(u=this.left+a,i==="near"?c="left":i==="center"?(c="center",u+=l/2):(c="right",u=this.right)):c="right",{textAlign:c,x:u}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,n=this.options.position;if(n==="left"||n==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(n==="top"||n==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:n},left:i,top:s,width:r,height:o}=this;n&&(t.save(),t.fillStyle=n,t.fillRect(i,s,r,o),t.restore())}getLineWidthForValue(t){const n=this.options.grid;if(!this._isVisible()||!n.display)return 0;const s=this.ticks.findIndex(r=>r.value===t);return s>=0?n.setContext(this.getContext(s)).lineWidth:0}drawGrid(t){const n=this.options.grid,i=this.ctx,s=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let r,o;const a=(l,c,u)=>{!u.width||!u.color||(i.save(),i.lineWidth=u.width,i.strokeStyle=u.color,i.setLineDash(u.borderDash||[]),i.lineDashOffset=u.borderDashOffset,i.beginPath(),i.moveTo(l.x,l.y),i.lineTo(c.x,c.y),i.stroke(),i.restore())};if(n.display)for(r=0,o=s.length;r<o;++r){const l=s[r];n.drawOnChartArea&&a({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),n.drawTicks&&a({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:n,options:{border:i,grid:s}}=this,r=i.setContext(this.getContext()),o=i.display?r.width:0;if(!o)return;const a=s.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let c,u,h,f;this.isHorizontal()?(c=ws(t,this.left,o)-o/2,u=ws(t,this.right,a)+a/2,h=f=l):(h=ws(t,this.top,o)-o/2,f=ws(t,this.bottom,a)+a/2,c=u=l),n.save(),n.lineWidth=r.width,n.strokeStyle=r.color,n.beginPath(),n.moveTo(c,h),n.lineTo(u,f),n.stroke(),n.restore()}drawLabels(t){if(!this.options.ticks.display)return;const i=this.ctx,s=this._computeLabelArea();s&&u_(i,s);const r=this.getLabelItems(t);for(const o of r){const a=o.options,l=o.font,c=o.label,u=o.textOffset;ir(i,c,0,u,l,a)}s&&h_(i)}drawTitle(){const{ctx:t,options:{position:n,title:i,reverse:s}}=this;if(!i.display)return;const r=pe(i.font),o=je(i.padding),a=i.align;let l=r.lineHeight/2;n==="bottom"||n==="center"||At(n)?(l+=o.bottom,te(i.text)&&(l+=r.lineHeight*(i.text.length-1))):l+=o.top;const{titleX:c,titleY:u,maxWidth:h,rotation:f}=f$(this,l,n,a);ir(t,i.text,0,0,r,{color:i.color,maxWidth:h,rotation:f,textAlign:h$(a,n,s),textBaseline:"middle",translation:[c,u]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,n=t.ticks&&t.ticks.z||0,i=vt(t.grid&&t.grid.z,-1),s=vt(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==pr.prototype.draw?[{z:n,draw:r=>{this.draw(r)}}]:[{z:i,draw:r=>{this.drawBackground(),this.drawGrid(r),this.drawTitle()}},{z:s,draw:()=>{this.drawBorder()}},{z:n,draw:r=>{this.drawLabels(r)}}]}getMatchingVisibleMetas(t){const n=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",s=[];let r,o;for(r=0,o=n.length;r<o;++r){const a=n[r];a[i]===this.id&&(!t||a.type===t)&&s.push(a)}return s}_resolveTickFontOptions(t){const n=this.options.ticks.setContext(this.getContext(t));return pe(n.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class vc{constructor(t,n,i){this.type=t,this.scope=n,this.override=i,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const n=Object.getPrototypeOf(t);let i;g$(n)&&(i=this.register(n));const s=this.items,r=t.id,o=this.scope+"."+r;if(!r)throw new Error("class does not have id: "+t);return r in s||(s[r]=t,d$(t,o,i),this.override&&se.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){const n=this.items,i=t.id,s=this.scope;i in n&&delete n[i],s&&i in se[s]&&(delete se[s][i],this.override&&delete nr[i])}}function d$(e,t,n){const i=tl(Object.create(null),[n?se.get(n):{},se.get(t),e.defaults]);se.set(t,i),e.defaultRoutes&&p$(t,e.defaultRoutes),e.descriptors&&se.describe(t,e.descriptors)}function p$(e,t){Object.keys(t).forEach(n=>{const i=n.split("."),s=i.pop(),r=[e].concat(i).join("."),o=t[n].split("."),a=o.pop(),l=o.join(".");se.route(r,s,l,a)})}function g$(e){return"id"in e&&"defaults"in e}class m${constructor(){this.controllers=new vc(xa,"datasets",!0),this.elements=new vc(dr,"elements"),this.plugins=new vc(Object,"plugins"),this.scales=new vc(pr,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,n,i){[...n].forEach(s=>{const r=i||this._getRegistryForType(s);i||r.isForType(s)||r===this.plugins&&s.id?this._exec(t,r,s):Nt(s,o=>{const a=i||this._getRegistryForType(o);this._exec(t,a,o)})})}_exec(t,n,i){const s=s_(t);Bt(i["before"+s],[],i),n[t](i),Bt(i["after"+s],[],i)}_getRegistryForType(t){for(let n=0;n<this._typedRegistries.length;n++){const i=this._typedRegistries[n];if(i.isForType(t))return i}return this.plugins}_get(t,n,i){const s=n.get(t);if(s===void 0)throw new Error('"'+t+'" is not a registered '+i+".");return s}}var Gn=new m$;class _${constructor(){this._init=[]}notify(t,n,i,s){n==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install"));const r=s?this._descriptors(t).filter(s):this._descriptors(t),o=this._notify(r,t,n,i);return n==="afterDestroy"&&(this._notify(r,t,"stop"),this._notify(this._init,t,"uninstall")),o}_notify(t,n,i,s){s=s||{};for(const r of t){const o=r.plugin,a=o[i],l=[n,s,r.options];if(Bt(a,l,o)===!1&&s.cancelable)return!1}return!0}invalidate(){jt(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const n=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),n}_createDescriptors(t,n){const i=t&&t.config,s=vt(i.options&&i.options.plugins,{}),r=y$(i);return s===!1&&!n?[]:b$(t,r,s,n)}_notifyStateChanges(t){const n=this._oldCache||[],i=this._cache,s=(r,o)=>r.filter(a=>!o.some(l=>a.plugin.id===l.plugin.id));this._notify(s(n,i),t,"stop"),this._notify(s(i,n),t,"start")}}function y$(e){const t={},n=[],i=Object.keys(Gn.plugins.items);for(let r=0;r<i.length;r++)n.push(Gn.getPlugin(i[r]));const s=e.plugins||[];for(let r=0;r<s.length;r++){const o=s[r];n.indexOf(o)===-1&&(n.push(o),t[o.id]=!0)}return{plugins:n,localIds:t}}function v$(e,t){return!t&&e===!1?null:e===!0?{}:e}function b$(e,{plugins:t,localIds:n},i,s){const r=[],o=e.getContext();for(const a of t){const l=a.id,c=v$(i[l],s);c!==null&&r.push({plugin:a,options:w$(e.config,{plugin:a,local:n[l]},c,o)})}return r}function w$(e,{plugin:t,local:n},i,s){const r=e.pluginScopeKeys(t),o=e.getOptionScopes(i,r);return n&&t.defaults&&o.push(t.defaults),e.createResolver(o,s,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Mp(e,t){const n=se.datasets[e]||{};return((t.datasets||{})[e]||{}).indexAxis||t.indexAxis||n.indexAxis||"x"}function E$(e,t){let n=e;return e==="_index_"?n=t:e==="_value_"&&(n=t==="x"?"y":"x"),n}function x$(e,t){return e===t?"_index_":"_value_"}function S0(e){if(e==="x"||e==="y"||e==="r")return e}function T$(e){if(e==="top"||e==="bottom")return"x";if(e==="left"||e==="right")return"y"}function Np(e,...t){if(S0(e))return e;for(const n of t){const i=n.axis||T$(n.position)||e.length>1&&S0(e[0].toLowerCase());if(i)return i}throw new Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`)}function I0(e,t,n){if(n[t+"AxisID"]===e)return{axis:t}}function C$(e,t){if(t.data&&t.data.datasets){const n=t.data.datasets.filter(i=>i.xAxisID===e||i.yAxisID===e);if(n.length)return I0(e,"x",n[0])||I0(e,"y",n[0])}return{}}function S$(e,t){const n=nr[e.type]||{scales:{}},i=t.scales||{},s=Mp(e.type,t),r=Object.create(null);return Object.keys(i).forEach(o=>{const a=i[o];if(!At(a))return console.error(`Invalid scale configuration for scale: ${o}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const l=Np(o,a,C$(o,e),se.scales[a.type]),c=x$(l,s),u=n.scales||{};r[o]=va(Object.create(null),[{axis:l},a,u[l],u[c]])}),e.data.datasets.forEach(o=>{const a=o.type||e.type,l=o.indexAxis||Mp(a,t),u=(nr[a]||{}).scales||{};Object.keys(u).forEach(h=>{const f=E$(h,l),d=o[f+"AxisID"]||f;r[d]=r[d]||Object.create(null),va(r[d],[{axis:f},i[d],u[h]])})}),Object.keys(r).forEach(o=>{const a=r[o];va(a,[se.scales[a.type],se.scale])}),r}function DS(e){const t=e.options||(e.options={});t.plugins=vt(t.plugins,{}),t.scales=S$(e,t)}function OS(e){return e=e||{},e.datasets=e.datasets||[],e.labels=e.labels||[],e}function I$(e){return e=e||{},e.data=OS(e.data),DS(e),e}const k0=new Map,PS=new Set;function bc(e,t){let n=k0.get(e);return n||(n=t(),k0.set(e,n),PS.add(n)),n}const zo=(e,t,n)=>{const i=Fu(t,n);i!==void 0&&e.add(i)};class k${constructor(t){this._config=I$(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=OS(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),DS(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return bc(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,n){return bc(`${t}.transition.${n}`,()=>[[`datasets.${t}.transitions.${n}`,`transitions.${n}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,n){return bc(`${t}-${n}`,()=>[[`datasets.${t}.elements.${n}`,`datasets.${t}`,`elements.${n}`,""]])}pluginScopeKeys(t){const n=t.id,i=this.type;return bc(`${i}-plugin-${n}`,()=>[[`plugins.${n}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,n){const i=this._scopeCache;let s=i.get(t);return(!s||n)&&(s=new Map,i.set(t,s)),s}getOptionScopes(t,n,i){const{options:s,type:r}=this,o=this._cachedScopes(t,i),a=o.get(n);if(a)return a;const l=new Set;n.forEach(u=>{t&&(l.add(t),u.forEach(h=>zo(l,t,h))),u.forEach(h=>zo(l,s,h)),u.forEach(h=>zo(l,nr[r]||{},h)),u.forEach(h=>zo(l,se,h)),u.forEach(h=>zo(l,Op,h))});const c=Array.from(l);return c.length===0&&c.push(Object.create(null)),PS.has(n)&&o.set(n,c),c}chartOptionScopes(){const{options:t,type:n}=this;return[t,nr[n]||{},se.datasets[n]||{},{type:n},se,Op]}resolveNamedOptions(t,n,i,s=[""]){const r={$shared:!0},{resolver:o,subPrefixes:a}=A0(this._resolverCache,t,s);let l=o;if(R$(o,n)){r.$shared=!1,i=ps(i)?i():i;const c=this.createResolver(t,i,a);l=co(o,i,c)}for(const c of n)r[c]=l[c];return r}createResolver(t,n,i=[""],s){const{resolver:r}=A0(this._resolverCache,t,i);return At(n)?co(r,n,void 0,s):r}}function A0(e,t,n){let i=e.get(t);i||(i=new Map,e.set(t,i));const s=n.join();let r=i.get(s);return r||(r={resolver:f_(t,n),subPrefixes:n.filter(a=>!a.toLowerCase().includes("hover"))},i.set(s,r)),r}const A$=e=>At(e)&&Object.getOwnPropertyNames(e).reduce((t,n)=>t||ps(e[n]),!1);function R$(e,t){const{isScriptable:n,isIndexable:i}=gS(e);for(const s of t){const r=n(s),o=i(s),a=(o||r)&&e[s];if(r&&(ps(a)||A$(a))||o&&te(a))return!0}return!1}var D$="4.3.0";const O$=["top","bottom","left","right","chartArea"];function R0(e,t){return e==="top"||e==="bottom"||O$.indexOf(e)===-1&&t==="x"}function D0(e,t){return function(n,i){return n[e]===i[e]?n[t]-i[t]:n[e]-i[e]}}function O0(e){const t=e.chart,n=t.options.animation;t.notifyPlugins("afterRender"),Bt(n&&n.onComplete,[e],t)}function P$(e){const t=e.chart,n=t.options.animation;Bt(n&&n.onProgress,[e],t)}function MS(e){return bS()&&typeof e=="string"?e=document.getElementById(e):e&&e.length&&(e=e[0]),e&&e.canvas&&(e=e.canvas),e}const Vc={},P0=e=>{const t=MS(e);return Object.values(Vc).filter(n=>n.canvas===t).pop()};function M$(e,t,n){const i=Object.keys(e);for(const s of i){const r=+s;if(r>=t){const o=e[s];delete e[s],(n>0||r>t)&&(e[r+n]=o)}}}function N$(e,t,n,i){return!n||e.type==="mouseout"?null:i?t:e}function L$(e){const{xScale:t,yScale:n}=e;if(t&&n)return{left:t.left,right:t.right,top:n.top,bottom:n.bottom}}var $i;let of=($i=class{static register(...t){Gn.add(...t),M0()}static unregister(...t){Gn.remove(...t),M0()}constructor(t,n){const i=this.config=new k$(n),s=MS(t),r=P0(s);if(r)throw new Error("Canvas is already in use. Chart with ID '"+r.id+"' must be destroyed before the canvas with ID '"+r.canvas.id+"' can be reused.");const o=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||ZV(s)),this.platform.updateConfig(i);const a=this.platform.acquireContext(s,o.aspectRatio),l=a&&a.canvas,c=l&&l.height,u=l&&l.width;if(this.id=HU(),this.ctx=a,this.canvas=l,this.width=u,this.height=c,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new _$,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=aB(h=>this.update(h),o.resizeDelay||0),this._dataChanges=[],Vc[this.id]=this,!a||!l){console.error("Failed to create chart: can't acquire context from the given item");return}pi.listen(this,"complete",O0),pi.listen(this,"progress",P$),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:n},width:i,height:s,_aspectRatio:r}=this;return jt(t)?n&&r?r:s?i/s:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return Gn}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():s0(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return e0(this.canvas,this.ctx),this}stop(){return pi.stop(this),this}resize(t,n){pi.running(this)?this._resizeBeforeDraw={width:t,height:n}:this._resize(t,n)}_resize(t,n){const i=this.options,s=this.canvas,r=i.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(s,t,n,r),a=i.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,s0(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),Bt(i.onResize,[this,o],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const n=this.options.scales||{};Nt(n,(i,s)=>{i.id=s})}buildOrUpdateScales(){const t=this.options,n=t.scales,i=this.scales,s=Object.keys(i).reduce((o,a)=>(o[a]=!1,o),{});let r=[];n&&(r=r.concat(Object.keys(n).map(o=>{const a=n[o],l=Np(o,a),c=l==="r",u=l==="x";return{options:a,dposition:c?"chartArea":u?"bottom":"left",dtype:c?"radialLinear":u?"category":"linear"}}))),Nt(r,o=>{const a=o.options,l=a.id,c=Np(l,a),u=vt(a.type,o.dtype);(a.position===void 0||R0(a.position,c)!==R0(o.dposition))&&(a.position=o.dposition),s[l]=!0;let h=null;if(l in i&&i[l].type===u)h=i[l];else{const f=Gn.getScale(u);h=new f({id:l,type:u,ctx:this.ctx,chart:this}),i[h.id]=h}h.init(a,t)}),Nt(s,(o,a)=>{o||delete i[a]}),Nt(i,o=>{En.configure(this,o,o.options),En.addBox(this,o)})}_updateMetasets(){const t=this._metasets,n=this.data.datasets.length,i=t.length;if(t.sort((s,r)=>s.index-r.index),i>n){for(let s=n;s<i;++s)this._destroyDatasetMeta(s);t.splice(n,i-n)}this._sortedMetasets=t.slice(0).sort(D0("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:n}}=this;t.length>n.length&&delete this._stacks,t.forEach((i,s)=>{n.filter(r=>r===i._dataset).length===0&&this._destroyDatasetMeta(s)})}buildOrUpdateControllers(){const t=[],n=this.data.datasets;let i,s;for(this._removeUnreferencedMetasets(),i=0,s=n.length;i<s;i++){const r=n[i];let o=this.getDatasetMeta(i);const a=r.type||this.config.type;if(o.type&&o.type!==a&&(this._destroyDatasetMeta(i),o=this.getDatasetMeta(i)),o.type=a,o.indexAxis=r.indexAxis||Mp(a,this.options),o.order=r.order||0,o.index=i,o.label=""+r.label,o.visible=this.isDatasetVisible(i),o.controller)o.controller.updateIndex(i),o.controller.linkScales();else{const l=Gn.getController(a),{datasetElementType:c,dataElementType:u}=se.datasets[a];Object.assign(l,{dataElementType:Gn.getElement(u),datasetElementType:c&&Gn.getElement(c)}),o.controller=new l(this,i),t.push(o.controller)}}return this._updateMetasets(),t}_resetElements(){Nt(this.data.datasets,(t,n)=>{this.getDatasetMeta(n).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const n=this.config;n.update();const i=this._options=n.createResolver(n.chartOptionScopes(),this.getContext()),s=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const r=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let c=0,u=this.data.datasets.length;c<u;c++){const{controller:h}=this.getDatasetMeta(c),f=!s&&r.indexOf(h)===-1;h.buildOrUpdateElements(f),o=Math.max(+h.getMaxOverflow(),o)}o=this._minPadding=i.layout.autoPadding?o:0,this._updateLayout(o),s||Nt(r,c=>{c.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(D0("z","_idx"));const{_active:a,_lastEvent:l}=this;l?this._eventHandler(l,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){Nt(this.scales,t=>{En.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,n=new Set(Object.keys(this._listeners)),i=new Set(t.events);(!Kb(n,i)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,n=this._getUniformDataChanges()||[];for(const{method:i,start:s,count:r}of n){const o=i==="_removeElements"?-r:r;M$(t,s,o)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const n=this.data.datasets.length,i=r=>new Set(t.filter(o=>o[0]===r).map((o,a)=>a+","+o.splice(1).join(","))),s=i(0);for(let r=1;r<n;r++)if(!Kb(s,i(r)))return;return Array.from(s).map(r=>r.split(",")).map(r=>({method:r[1],start:+r[2],count:+r[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;En.update(this,this.width,this.height,t);const n=this.chartArea,i=n.width<=0||n.height<=0;this._layers=[],Nt(this.boxes,s=>{i&&s.position==="chartArea"||(s.configure&&s.configure(),this._layers.push(...s._layers()))},this),this._layers.forEach((s,r)=>{s._idx=r}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let n=0,i=this.data.datasets.length;n<i;++n)this.getDatasetMeta(n).controller.configure();for(let n=0,i=this.data.datasets.length;n<i;++n)this._updateDataset(n,ps(t)?t({datasetIndex:n}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,n){const i=this.getDatasetMeta(t),s={meta:i,index:t,mode:n,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",s)!==!1&&(i.controller._update(n),s.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",s))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(pi.has(this)?this.attached&&!pi.running(this)&&pi.start(this):(this.draw(),O0({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:i,height:s}=this._resizeBeforeDraw;this._resize(i,s),this._resizeBeforeDraw=null}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const n=this._layers;for(t=0;t<n.length&&n[t].z<=0;++t)n[t].draw(this.chartArea);for(this._drawDatasets();t<n.length;++t)n[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const n=this._sortedMetasets,i=[];let s,r;for(s=0,r=n.length;s<r;++s){const o=n[s];(!t||o.visible)&&i.push(o)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let n=t.length-1;n>=0;--n)this._drawDataset(t[n]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const n=this.ctx,i=t._clip,s=!i.disabled,r=L$(t)||this.chartArea,o={meta:t,index:t.index,cancelable:!0};this.notifyPlugins("beforeDatasetDraw",o)!==!1&&(s&&u_(n,{left:i.left===!1?0:r.left-i.left,right:i.right===!1?this.width:r.right+i.right,top:i.top===!1?0:r.top-i.top,bottom:i.bottom===!1?this.height:r.bottom+i.bottom}),t.controller.draw(),s&&h_(n),o.cancelable=!1,this.notifyPlugins("afterDatasetDraw",o))}isPointInArea(t){return bi(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,n,i,s){const r=OV.modes[n];return typeof r=="function"?r(this,t,i,s):[]}getDatasetMeta(t){const n=this.data.datasets[t],i=this._metasets;let s=i.filter(r=>r&&r._dataset===n).pop();return s||(s={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:n&&n.order||0,index:t,_dataset:n,_parsed:[],_sorted:!1},i.push(s)),s}getContext(){return this.$context||(this.$context=_s(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const n=this.data.datasets[t];if(!n)return!1;const i=this.getDatasetMeta(t);return typeof i.hidden=="boolean"?!i.hidden:!n.hidden}setDatasetVisibility(t,n){const i=this.getDatasetMeta(t);i.hidden=!n}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,n,i){const s=i?"show":"hide",r=this.getDatasetMeta(t),o=r.controller._resolveAnimations(void 0,s);Uu(n)?(r.data[n].hidden=!i,this.update()):(this.setDatasetVisibility(t,i),o.update(r,{visible:i}),this.update(a=>a.datasetIndex===t?s:void 0))}hide(t,n){this._updateVisibility(t,n,!1)}show(t,n){this._updateVisibility(t,n,!0)}_destroyDatasetMeta(t){const n=this._metasets[t];n&&n.controller&&n.controller._destroy(),delete this._metasets[t]}_stop(){let t,n;for(this.stop(),pi.remove(this),t=0,n=this.data.datasets.length;t<n;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:n}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),e0(t,n),this.platform.releaseContext(n),this.canvas=null,this.ctx=null),delete Vc[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,n=this.platform,i=(r,o)=>{n.addEventListener(this,r,o),t[r]=o},s=(r,o,a)=>{r.offsetX=o,r.offsetY=a,this._eventHandler(r)};Nt(this.options.events,r=>i(r,s))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,n=this.platform,i=(l,c)=>{n.addEventListener(this,l,c),t[l]=c},s=(l,c)=>{t[l]&&(n.removeEventListener(this,l,c),delete t[l])},r=(l,c)=>{this.canvas&&this.resize(l,c)};let o;const a=()=>{s("attach",a),this.attached=!0,this.resize(),i("resize",r),i("detach",o)};o=()=>{this.attached=!1,s("resize",r),this._stop(),this._resize(0,0),i("attach",a)},n.isAttached(this.canvas)?a():o()}unbindEvents(){Nt(this._listeners,(t,n)=>{this.platform.removeEventListener(this,n,t)}),this._listeners={},Nt(this._responsiveListeners,(t,n)=>{this.platform.removeEventListener(this,n,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,n,i){const s=i?"set":"remove";let r,o,a,l;for(n==="dataset"&&(r=this.getDatasetMeta(t[0].datasetIndex),r.controller["_"+s+"DatasetHoverStyle"]()),a=0,l=t.length;a<l;++a){o=t[a];const c=o&&this.getDatasetMeta(o.datasetIndex).controller;c&&c[s+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const n=this._active||[],i=t.map(({datasetIndex:r,index:o})=>{const a=this.getDatasetMeta(r);if(!a)throw new Error("No dataset found at index "+r);return{datasetIndex:r,element:a.data[o],index:o}});!Nu(i,n)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,n))}notifyPlugins(t,n,i){return this._plugins.notify(this,t,n,i)}isPluginEnabled(t){return this._plugins._cache.filter(n=>n.plugin.id===t).length===1}_updateHoverStyles(t,n,i){const s=this.options.hover,r=(l,c)=>l.filter(u=>!c.some(h=>u.datasetIndex===h.datasetIndex&&u.index===h.index)),o=r(n,t),a=i?t:r(t,n);o.length&&this.updateHoverStyle(o,s.mode,!1),a.length&&s.mode&&this.updateHoverStyle(a,s.mode,!0)}_eventHandler(t,n){const i={event:t,replay:n,cancelable:!0,inChartArea:this.isPointInArea(t)},s=o=>(o.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",i,s)===!1)return;const r=this._handleEvent(t,n,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,s),(r||i.changed)&&this.render(),this}_handleEvent(t,n,i){const{_active:s=[],options:r}=this,o=n,a=this._getActiveElements(t,s,i,o),l=YU(t),c=N$(t,this._lastEvent,i,l);i&&(this._lastEvent=null,Bt(r.onHover,[t,a,this],this),l&&Bt(r.onClick,[t,a,this],this));const u=!Nu(a,s);return(u||n)&&(this._active=a,this._updateHoverStyles(a,s,n)),this._lastEvent=c,u}_getActiveElements(t,n,i,s){if(t.type==="mouseout")return[];if(!i)return n;const r=this.options.hover;return this.getElementsAtEventForMode(t,r.mode,r,s)}},et($i,"defaults",se),et($i,"instances",Vc),et($i,"overrides",nr),et($i,"registry",Gn),et($i,"version",D$),et($i,"getChart",P0),$i);function M0(){return Nt(of.instances,e=>e._plugins.invalidate())}function NS(e,t,n=t){e.lineCap=vt(n.borderCapStyle,t.borderCapStyle),e.setLineDash(vt(n.borderDash,t.borderDash)),e.lineDashOffset=vt(n.borderDashOffset,t.borderDashOffset),e.lineJoin=vt(n.borderJoinStyle,t.borderJoinStyle),e.lineWidth=vt(n.borderWidth,t.borderWidth),e.strokeStyle=vt(n.borderColor,t.borderColor)}function F$(e,t,n){e.lineTo(n.x,n.y)}function U$(e){return e.stepped?wB:e.tension||e.cubicInterpolationMode==="monotone"?EB:F$}function LS(e,t,n={}){const i=e.length,{start:s=0,end:r=i-1}=n,{start:o,end:a}=t,l=Math.max(s,o),c=Math.min(r,a),u=s<o&&r<o||s>a&&r>a;return{count:i,start:l,loop:t.loop,ilen:c<l&&!u?i+c-l:c-l}}function B$(e,t,n,i){const{points:s,options:r}=t,{count:o,start:a,loop:l,ilen:c}=LS(s,n,i),u=U$(r);let{move:h=!0,reverse:f}=i||{},d,p,g;for(d=0;d<=c;++d)p=s[(a+(f?c-d:d))%o],!p.skip&&(h?(e.moveTo(p.x,p.y),h=!1):u(e,g,p,f,r.stepped),g=p);return l&&(p=s[(a+(f?c:0))%o],u(e,g,p,f,r.stepped)),!!l}function V$(e,t,n,i){const s=t.points,{count:r,start:o,ilen:a}=LS(s,n,i),{move:l=!0,reverse:c}=i||{};let u=0,h=0,f,d,p,g,m,_;const v=E=>(o+(c?a-E:E))%r,w=()=>{g!==m&&(e.lineTo(u,m),e.lineTo(u,g),e.lineTo(u,_))};for(l&&(d=s[v(0)],e.moveTo(d.x,d.y)),f=0;f<=a;++f){if(d=s[v(f)],d.skip)continue;const E=d.x,x=d.y,A=E|0;A===p?(x<g?g=x:x>m&&(m=x),u=(h*u+E)/++h):(w(),e.lineTo(E,x),p=A,h=0,g=m=x),_=x}w()}function Lp(e){const t=e.options,n=t.borderDash&&t.borderDash.length;return!e._decimated&&!e._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!n?V$:B$}function $$(e){return e.stepped?eV:e.tension||e.cubicInterpolationMode==="monotone"?nV:ks}function z$(e,t,n,i){let s=t._path;s||(s=t._path=new Path2D,t.path(s,n,i)&&s.closePath()),NS(e,t.options),e.stroke(s)}function H$(e,t,n,i){const{segments:s,options:r}=t,o=Lp(t);for(const a of s)NS(e,r,a.style),e.beginPath(),o(e,t,a,{start:n,end:n+i-1})&&e.closePath(),e.stroke()}const j$=typeof Path2D=="function";function W$(e,t,n,i){j$&&!t.options.segment?z$(e,t,n,i):H$(e,t,n,i)}class Zo extends dr{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,n){const i=this.options;if((i.tension||i.cubicInterpolationMode==="monotone")&&!i.stepped&&!this._pointsUpdated){const s=i.spanGaps?this._loop:this._fullLoop;qB(this._points,i,t,s,n),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=uV(this,this.options.segment))}first(){const t=this.segments,n=this.points;return t.length&&n[t[0].start]}last(){const t=this.segments,n=this.points,i=t.length;return i&&n[t[i-1].end]}interpolate(t,n){const i=this.options,s=t[n],r=this.points,o=aV(this,{property:n,start:s,end:s});if(!o.length)return;const a=[],l=$$(i);let c,u;for(c=0,u=o.length;c<u;++c){const{start:h,end:f}=o[c],d=r[h],p=r[f];if(d===p){a.push(d);continue}const g=Math.abs((s-d[n])/(p[n]-d[n])),m=l(d,p,g,i.stepped);m[n]=t[n],a.push(m)}return a.length===1?a[0]:a}pathSegment(t,n,i){return Lp(this)(t,this,n,i)}path(t,n,i){const s=this.segments,r=Lp(this);let o=this._loop;n=n||0,i=i||this.points.length-n;for(const a of s)o&=r(t,this,a,{start:n,end:n+i-1});return!!o}draw(t,n,i,s){const r=this.options||{};(this.points||[]).length&&r.borderWidth&&(t.save(),W$(t,this,i,s),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}et(Zo,"id","line"),et(Zo,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),et(Zo,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),et(Zo,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function N0(e,t,n,i){const s=e.options,{[n]:r}=e.getProps([n],i);return Math.abs(t-r)<s.radius+s.hitRadius}class $c extends dr{constructor(n){super();et(this,"parsed");et(this,"skip");et(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,n&&Object.assign(this,n)}inRange(n,i,s){const r=this.options,{x:o,y:a}=this.getProps(["x","y"],s);return Math.pow(n-o,2)+Math.pow(i-a,2)<Math.pow(r.hitRadius+r.radius,2)}inXRange(n,i){return N0(this,n,"x",i)}inYRange(n,i){return N0(this,n,"y",i)}getCenterPoint(n){const{x:i,y:s}=this.getProps(["x","y"],n);return{x:i,y:s}}size(n){n=n||this.options||{};let i=n.radius||0;i=Math.max(i,i&&n.hoverRadius||0);const s=i&&n.borderWidth||0;return(i+s)*2}draw(n,i){const s=this.options;this.skip||s.radius<.1||!bi(this,i,this.size(s)/2)||(n.strokeStyle=s.borderColor,n.lineWidth=s.borderWidth,n.fillStyle=s.backgroundColor,Pp(n,s,this.x,this.y))}getRange(){const n=this.options||{};return n.radius+n.hitRadius}}et($c,"id","point"),et($c,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),et($c,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});const L0=(e,t)=>{let{boxHeight:n=t,boxWidth:i=t}=e;return e.usePointStyle&&(n=Math.min(n,t),i=e.pointStyleWidth||Math.min(i,t)),{boxWidth:i,boxHeight:n,itemHeight:Math.max(t,n)}},K$=(e,t)=>e!==null&&t!==null&&e.datasetIndex===t.datasetIndex&&e.index===t.index;class F0 extends dr{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,n,i){this.maxWidth=t,this.maxHeight=n,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let n=Bt(t.generateLabels,[this.chart],this)||[];t.filter&&(n=n.filter(i=>t.filter(i,this.chart.data))),t.sort&&(n=n.sort((i,s)=>t.sort(i,s,this.chart.data))),this.options.reverse&&n.reverse(),this.legendItems=n}fit(){const{options:t,ctx:n}=this;if(!t.display){this.width=this.height=0;return}const i=t.labels,s=pe(i.font),r=s.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:l}=L0(i,r);let c,u;n.font=s.string,this.isHorizontal()?(c=this.maxWidth,u=this._fitRows(o,r,a,l)+10):(u=this.maxHeight,c=this._fitCols(o,s,a,l)+10),this.width=Math.min(c,t.maxWidth||this.maxWidth),this.height=Math.min(u,t.maxHeight||this.maxHeight)}_fitRows(t,n,i,s){const{ctx:r,maxWidth:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.lineWidths=[0],u=s+a;let h=t;r.textAlign="left",r.textBaseline="middle";let f=-1,d=-u;return this.legendItems.forEach((p,g)=>{const m=i+n/2+r.measureText(p.text).width;(g===0||c[c.length-1]+m+2*a>o)&&(h+=u,c[c.length-(g>0?0:1)]=0,d+=u,f++),l[g]={left:0,top:d,row:f,width:m,height:s},c[c.length-1]+=m+a}),h}_fitCols(t,n,i,s){const{ctx:r,maxHeight:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.columnSizes=[],u=o-t;let h=a,f=0,d=0,p=0,g=0;return this.legendItems.forEach((m,_)=>{const{itemWidth:v,itemHeight:w}=q$(i,n,r,m,s);_>0&&d+w+2*a>u&&(h+=f+a,c.push({width:f,height:d}),p+=f+a,g++,f=d=0),l[_]={left:p,top:d,col:g,width:v,height:w},f=Math.max(f,v),d+=w+a}),h+=f,c.push({width:f,height:d}),h}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:n,options:{align:i,labels:{padding:s},rtl:r}}=this,o=$r(r,this.left,this.width);if(this.isHorizontal()){let a=0,l=Pe(i,this.left+s,this.right-this.lineWidths[a]);for(const c of n)a!==c.row&&(a=c.row,l=Pe(i,this.left+s,this.right-this.lineWidths[a])),c.top+=this.top+t+s,c.left=o.leftForLtr(o.x(l),c.width),l+=c.width+s}else{let a=0,l=Pe(i,this.top+t+s,this.bottom-this.columnSizes[a].height);for(const c of n)c.col!==a&&(a=c.col,l=Pe(i,this.top+t+s,this.bottom-this.columnSizes[a].height)),c.top=l,c.left+=this.left+s,c.left=o.leftForLtr(o.x(c.left),c.width),l+=c.height+s}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;u_(t,this),this._draw(),h_(t)}}_draw(){const{options:t,columnSizes:n,lineWidths:i,ctx:s}=this,{align:r,labels:o}=t,a=se.color,l=$r(t.rtl,this.left,this.width),c=pe(o.font),{padding:u}=o,h=c.size,f=h/2;let d;this.drawTitle(),s.textAlign=l.textAlign("left"),s.textBaseline="middle",s.lineWidth=.5,s.font=c.string;const{boxWidth:p,boxHeight:g,itemHeight:m}=L0(o,h),_=function(A,S,C){if(isNaN(p)||p<=0||isNaN(g)||g<0)return;s.save();const U=vt(C.lineWidth,1);if(s.fillStyle=vt(C.fillStyle,a),s.lineCap=vt(C.lineCap,"butt"),s.lineDashOffset=vt(C.lineDashOffset,0),s.lineJoin=vt(C.lineJoin,"miter"),s.lineWidth=U,s.strokeStyle=vt(C.strokeStyle,a),s.setLineDash(vt(C.lineDash,[])),o.usePointStyle){const G={radius:g*Math.SQRT2/2,pointStyle:C.pointStyle,rotation:C.rotation,borderWidth:U},tt=l.xPlus(A,p/2),ot=S+f;dS(s,G,tt,ot,o.pointStyleWidth&&p)}else{const G=S+Math.max((h-g)/2,0),tt=l.leftForLtr(A,p),ot=Vr(C.borderRadius);s.beginPath(),Object.values(ot).some(Jt=>Jt!==0)?$u(s,{x:tt,y:G,w:p,h:g,radius:ot}):s.rect(tt,G,p,g),s.fill(),U!==0&&s.stroke()}s.restore()},v=function(A,S,C){ir(s,C.text,A,S+m/2,c,{strikethrough:C.hidden,textAlign:l.textAlign(C.textAlign)})},w=this.isHorizontal(),E=this._computeTitleHeight();w?d={x:Pe(r,this.left+u,this.right-i[0]),y:this.top+u+E,line:0}:d={x:this.left+u,y:Pe(r,this.top+E+u,this.bottom-n[0].height),line:0},wS(this.ctx,t.textDirection);const x=m+u;this.legendItems.forEach((A,S)=>{s.strokeStyle=A.fontColor,s.fillStyle=A.fontColor;const C=s.measureText(A.text).width,U=l.textAlign(A.textAlign||(A.textAlign=o.textAlign)),G=p+f+C;let tt=d.x,ot=d.y;l.setWidth(this.width),w?S>0&&tt+G+u>this.right&&(ot=d.y+=x,d.line++,tt=d.x=Pe(r,this.left+u,this.right-i[d.line])):S>0&&ot+x>this.bottom&&(tt=d.x=tt+n[d.line].width+u,d.line++,ot=d.y=Pe(r,this.top+E+u,this.bottom-n[d.line].height));const Jt=l.x(tt);if(_(Jt,ot,A),tt=lB(U,tt+p+f,w?tt+G:this.right,t.rtl),v(l.x(tt),ot,A),w)d.x+=G+u;else if(typeof A.text!="string"){const Gt=c.lineHeight;d.y+=FS(A,Gt)}else d.y+=x}),ES(this.ctx,t.textDirection)}drawTitle(){const t=this.options,n=t.title,i=pe(n.font),s=je(n.padding);if(!n.display)return;const r=$r(t.rtl,this.left,this.width),o=this.ctx,a=n.position,l=i.size/2,c=s.top+l;let u,h=this.left,f=this.width;if(this.isHorizontal())f=Math.max(...this.lineWidths),u=this.top+c,h=Pe(t.align,h,this.right-f);else{const p=this.columnSizes.reduce((g,m)=>Math.max(g,m.height),0);u=c+Pe(t.align,this.top,this.bottom-p-t.labels.padding-this._computeTitleHeight())}const d=Pe(a,h,h+f);o.textAlign=r.textAlign(a_(a)),o.textBaseline="middle",o.strokeStyle=n.color,o.fillStyle=n.color,o.font=i.string,ir(o,n.text,d,u,i)}_computeTitleHeight(){const t=this.options.title,n=pe(t.font),i=je(t.padding);return t.display?n.lineHeight+i.height:0}_getLegendItemAt(t,n){let i,s,r;if(Qo(t,this.left,this.right)&&Qo(n,this.top,this.bottom)){for(r=this.legendHitBoxes,i=0;i<r.length;++i)if(s=r[i],Qo(t,s.left,s.left+s.width)&&Qo(n,s.top,s.top+s.height))return this.legendItems[i]}return null}handleEvent(t){const n=this.options;if(!X$(t.type,n))return;const i=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const s=this._hoveredItem,r=K$(s,i);s&&!r&&Bt(n.onLeave,[t,s,this],this),this._hoveredItem=i,i&&!r&&Bt(n.onHover,[t,i,this],this)}else i&&Bt(n.onClick,[t,i,this],this)}}function q$(e,t,n,i,s){const r=G$(i,e,t,n),o=Y$(s,i,t.lineHeight);return{itemWidth:r,itemHeight:o}}function G$(e,t,n,i){let s=e.text;return s&&typeof s!="string"&&(s=s.reduce((r,o)=>r.length>o.length?r:o)),t+n.size/2+i.measureText(s).width}function Y$(e,t,n){let i=e;return typeof t.text!="string"&&(i=FS(t,n)),i}function FS(e,t){const n=e.text?e.text.length+.5:0;return t*n}function X$(e,t){return!!((e==="mousemove"||e==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(e==="click"||e==="mouseup"))}var Q$={id:"legend",_element:F0,start(e,t,n){const i=e.legend=new F0({ctx:e.ctx,options:n,chart:e});En.configure(e,i,n),En.addBox(e,i)},stop(e){En.removeBox(e,e.legend),delete e.legend},beforeUpdate(e,t,n){const i=e.legend;En.configure(e,i,n),i.options=n},afterUpdate(e){const t=e.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(e,t){t.replay||e.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(e,t,n){const i=t.datasetIndex,s=n.chart;s.isDatasetVisible(i)?(s.hide(i),t.hidden=!0):(s.show(i),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:e=>e.chart.options.color,boxWidth:40,padding:10,generateLabels(e){const t=e.data.datasets,{labels:{usePointStyle:n,pointStyle:i,textAlign:s,color:r,useBorderRadius:o,borderRadius:a}}=e.legend.options;return e._getSortedDatasetMetas().map(l=>{const c=l.controller.getStyle(n?0:void 0),u=je(c.borderWidth);return{text:t[l.index].label,fillStyle:c.backgroundColor,fontColor:r,hidden:!l.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(u.width+u.height)/4,strokeStyle:c.borderColor,pointStyle:i||c.pointStyle,rotation:c.rotation,textAlign:s||c.textAlign,borderRadius:o&&(a||c.borderRadius),datasetIndex:l.index}},this)}},title:{color:e=>e.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:e=>!e.startsWith("on"),labels:{_scriptable:e=>!["generateLabels","filter","sort"].includes(e)}}};class US extends dr{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,n){const i=this.options;if(this.left=0,this.top=0,!i.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=n;const s=te(i.text)?i.text.length:1;this._padding=je(i.padding);const r=s*pe(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=r:this.width=r}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:n,left:i,bottom:s,right:r,options:o}=this,a=o.align;let l=0,c,u,h;return this.isHorizontal()?(u=Pe(a,i,r),h=n+t,c=r-i):(o.position==="left"?(u=i+t,h=Pe(a,s,n),l=ve*-.5):(u=r-t,h=Pe(a,n,s),l=ve*.5),c=s-n),{titleX:u,titleY:h,maxWidth:c,rotation:l}}draw(){const t=this.ctx,n=this.options;if(!n.display)return;const i=pe(n.font),r=i.lineHeight/2+this._padding.top,{titleX:o,titleY:a,maxWidth:l,rotation:c}=this._drawArgs(r);ir(t,n.text,0,0,i,{color:n.color,maxWidth:l,rotation:c,textAlign:a_(n.align),textBaseline:"middle",translation:[o,a]})}}function J$(e,t){const n=new US({ctx:e.ctx,options:t,chart:e});En.configure(e,n,t),En.addBox(e,n),e.titleBlock=n}var Z$={id:"title",_element:US,start(e,t,n){J$(e,n)},stop(e){const t=e.titleBlock;En.removeBox(e,t),delete e.titleBlock},beforeUpdate(e,t,n){const i=e.titleBlock;En.configure(e,i,n),i.options=n},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const ta={average(e){if(!e.length)return!1;let t,n,i=0,s=0,r=0;for(t=0,n=e.length;t<n;++t){const o=e[t].element;if(o&&o.hasValue()){const a=o.tooltipPosition();i+=a.x,s+=a.y,++r}}return{x:i/r,y:s/r}},nearest(e,t){if(!e.length)return!1;let n=t.x,i=t.y,s=Number.POSITIVE_INFINITY,r,o,a;for(r=0,o=e.length;r<o;++r){const l=e[r].element;if(l&&l.hasValue()){const c=l.getCenterPoint(),u=Dp(t,c);u<s&&(s=u,a=l)}}if(a){const l=a.tooltipPosition();n=l.x,i=l.y}return{x:n,y:i}}};function qn(e,t){return t&&(te(t)?Array.prototype.push.apply(e,t):e.push(t)),e}function gi(e){return(typeof e=="string"||e instanceof String)&&e.indexOf(`
`)>-1?e.split(`
`):e}function t8(e,t){const{element:n,datasetIndex:i,index:s}=t,r=e.getDatasetMeta(i).controller,{label:o,value:a}=r.getLabelAndValue(s);return{chart:e,label:o,parsed:r.getParsed(s),raw:e.data.datasets[i].data[s],formattedValue:a,dataset:r.getDataset(),dataIndex:s,datasetIndex:i,element:n}}function U0(e,t){const n=e.chart.ctx,{body:i,footer:s,title:r}=e,{boxWidth:o,boxHeight:a}=t,l=pe(t.bodyFont),c=pe(t.titleFont),u=pe(t.footerFont),h=r.length,f=s.length,d=i.length,p=je(t.padding);let g=p.height,m=0,_=i.reduce((E,x)=>E+x.before.length+x.lines.length+x.after.length,0);if(_+=e.beforeBody.length+e.afterBody.length,h&&(g+=h*c.lineHeight+(h-1)*t.titleSpacing+t.titleMarginBottom),_){const E=t.displayColors?Math.max(a,l.lineHeight):l.lineHeight;g+=d*E+(_-d)*l.lineHeight+(_-1)*t.bodySpacing}f&&(g+=t.footerMarginTop+f*u.lineHeight+(f-1)*t.footerSpacing);let v=0;const w=function(E){m=Math.max(m,n.measureText(E).width+v)};return n.save(),n.font=c.string,Nt(e.title,w),n.font=l.string,Nt(e.beforeBody.concat(e.afterBody),w),v=t.displayColors?o+2+t.boxPadding:0,Nt(i,E=>{Nt(E.before,w),Nt(E.lines,w),Nt(E.after,w)}),v=0,n.font=u.string,Nt(e.footer,w),n.restore(),m+=p.width,{width:m,height:g}}function e8(e,t){const{y:n,height:i}=t;return n<i/2?"top":n>e.height-i/2?"bottom":"center"}function n8(e,t,n,i){const{x:s,width:r}=i,o=n.caretSize+n.caretPadding;if(e==="left"&&s+r+o>t.width||e==="right"&&s-r-o<0)return!0}function i8(e,t,n,i){const{x:s,width:r}=n,{width:o,chartArea:{left:a,right:l}}=e;let c="center";return i==="center"?c=s<=(a+l)/2?"left":"right":s<=r/2?c="left":s>=o-r/2&&(c="right"),n8(c,e,t,n)&&(c="center"),c}function B0(e,t,n){const i=n.yAlign||t.yAlign||e8(e,n);return{xAlign:n.xAlign||t.xAlign||i8(e,t,n,i),yAlign:i}}function s8(e,t){let{x:n,width:i}=e;return t==="right"?n-=i:t==="center"&&(n-=i/2),n}function r8(e,t,n){let{y:i,height:s}=e;return t==="top"?i+=n:t==="bottom"?i-=s+n:i-=s/2,i}function V0(e,t,n,i){const{caretSize:s,caretPadding:r,cornerRadius:o}=e,{xAlign:a,yAlign:l}=n,c=s+r,{topLeft:u,topRight:h,bottomLeft:f,bottomRight:d}=Vr(o);let p=s8(t,a);const g=r8(t,l,c);return l==="center"?a==="left"?p+=c:a==="right"&&(p-=c):a==="left"?p-=Math.max(u,f)+s:a==="right"&&(p+=Math.max(h,d)+s),{x:wn(p,0,i.width-t.width),y:wn(g,0,i.height-t.height)}}function wc(e,t,n){const i=je(n.padding);return t==="center"?e.x+e.width/2:t==="right"?e.x+e.width-i.right:e.x+i.left}function $0(e){return qn([],gi(e))}function o8(e,t,n){return _s(e,{tooltip:t,tooltipItems:n,type:"tooltip"})}function z0(e,t){const n=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return n?e.override(n):e}const BS={beforeTitle:di,title(e){if(e.length>0){const t=e[0],n=t.chart.data.labels,i=n?n.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(i>0&&t.dataIndex<i)return n[t.dataIndex]}return""},afterTitle:di,beforeBody:di,beforeLabel:di,label(e){if(this&&this.options&&this.options.mode==="dataset")return e.label+": "+e.formattedValue||e.formattedValue;let t=e.dataset.label||"";t&&(t+=": ");const n=e.formattedValue;return jt(n)||(t+=n),t},labelColor(e){const n=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{borderColor:n.borderColor,backgroundColor:n.backgroundColor,borderWidth:n.borderWidth,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(e){const n=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{pointStyle:n.pointStyle,rotation:n.rotation}},afterLabel:di,afterBody:di,beforeFooter:di,footer:di,afterFooter:di};function Xe(e,t,n,i){const s=e[t].call(n,i);return typeof s>"u"?BS[t].call(n,i):s}class Fp extends dr{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const n=this.chart,i=this.options.setContext(this.getContext()),s=i.enabled&&n.options.animation&&i.animations,r=new TS(this.chart,s);return s._cacheable&&(this._cachedAnimations=Object.freeze(r)),r}getContext(){return this.$context||(this.$context=o8(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,n){const{callbacks:i}=n,s=Xe(i,"beforeTitle",this,t),r=Xe(i,"title",this,t),o=Xe(i,"afterTitle",this,t);let a=[];return a=qn(a,gi(s)),a=qn(a,gi(r)),a=qn(a,gi(o)),a}getBeforeBody(t,n){return $0(Xe(n.callbacks,"beforeBody",this,t))}getBody(t,n){const{callbacks:i}=n,s=[];return Nt(t,r=>{const o={before:[],lines:[],after:[]},a=z0(i,r);qn(o.before,gi(Xe(a,"beforeLabel",this,r))),qn(o.lines,Xe(a,"label",this,r)),qn(o.after,gi(Xe(a,"afterLabel",this,r))),s.push(o)}),s}getAfterBody(t,n){return $0(Xe(n.callbacks,"afterBody",this,t))}getFooter(t,n){const{callbacks:i}=n,s=Xe(i,"beforeFooter",this,t),r=Xe(i,"footer",this,t),o=Xe(i,"afterFooter",this,t);let a=[];return a=qn(a,gi(s)),a=qn(a,gi(r)),a=qn(a,gi(o)),a}_createItems(t){const n=this._active,i=this.chart.data,s=[],r=[],o=[];let a=[],l,c;for(l=0,c=n.length;l<c;++l)a.push(t8(this.chart,n[l]));return t.filter&&(a=a.filter((u,h,f)=>t.filter(u,h,f,i))),t.itemSort&&(a=a.sort((u,h)=>t.itemSort(u,h,i))),Nt(a,u=>{const h=z0(t.callbacks,u);s.push(Xe(h,"labelColor",this,u)),r.push(Xe(h,"labelPointStyle",this,u)),o.push(Xe(h,"labelTextColor",this,u))}),this.labelColors=s,this.labelPointStyles=r,this.labelTextColors=o,this.dataPoints=a,a}update(t,n){const i=this.options.setContext(this.getContext()),s=this._active;let r,o=[];if(!s.length)this.opacity!==0&&(r={opacity:0});else{const a=ta[i.position].call(this,s,this._eventPosition);o=this._createItems(i),this.title=this.getTitle(o,i),this.beforeBody=this.getBeforeBody(o,i),this.body=this.getBody(o,i),this.afterBody=this.getAfterBody(o,i),this.footer=this.getFooter(o,i);const l=this._size=U0(this,i),c=Object.assign({},a,l),u=B0(this.chart,i,c),h=V0(i,c,u,this.chart);this.xAlign=u.xAlign,this.yAlign=u.yAlign,r={opacity:1,x:h.x,y:h.y,width:l.width,height:l.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,r&&this._resolveAnimations().update(this,r),t&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:n})}drawCaret(t,n,i,s){const r=this.getCaretPosition(t,i,s);n.lineTo(r.x1,r.y1),n.lineTo(r.x2,r.y2),n.lineTo(r.x3,r.y3)}getCaretPosition(t,n,i){const{xAlign:s,yAlign:r}=this,{caretSize:o,cornerRadius:a}=i,{topLeft:l,topRight:c,bottomLeft:u,bottomRight:h}=Vr(a),{x:f,y:d}=t,{width:p,height:g}=n;let m,_,v,w,E,x;return r==="center"?(E=d+g/2,s==="left"?(m=f,_=m-o,w=E+o,x=E-o):(m=f+p,_=m+o,w=E-o,x=E+o),v=m):(s==="left"?_=f+Math.max(l,u)+o:s==="right"?_=f+p-Math.max(c,h)-o:_=this.caretX,r==="top"?(w=d,E=w-o,m=_-o,v=_+o):(w=d+g,E=w+o,m=_+o,v=_-o),x=w),{x1:m,x2:_,x3:v,y1:w,y2:E,y3:x}}drawTitle(t,n,i){const s=this.title,r=s.length;let o,a,l;if(r){const c=$r(i.rtl,this.x,this.width);for(t.x=wc(this,i.titleAlign,i),n.textAlign=c.textAlign(i.titleAlign),n.textBaseline="middle",o=pe(i.titleFont),a=i.titleSpacing,n.fillStyle=i.titleColor,n.font=o.string,l=0;l<r;++l)n.fillText(s[l],c.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+a,l+1===r&&(t.y+=i.titleMarginBottom-a)}}_drawColorBox(t,n,i,s,r){const o=this.labelColors[i],a=this.labelPointStyles[i],{boxHeight:l,boxWidth:c}=r,u=pe(r.bodyFont),h=wc(this,"left",r),f=s.x(h),d=l<u.lineHeight?(u.lineHeight-l)/2:0,p=n.y+d;if(r.usePointStyle){const g={radius:Math.min(c,l)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},m=s.leftForLtr(f,c)+c/2,_=p+l/2;t.strokeStyle=r.multiKeyBackground,t.fillStyle=r.multiKeyBackground,Pp(t,g,m,_),t.strokeStyle=o.borderColor,t.fillStyle=o.backgroundColor,Pp(t,g,m,_)}else{t.lineWidth=At(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,t.strokeStyle=o.borderColor,t.setLineDash(o.borderDash||[]),t.lineDashOffset=o.borderDashOffset||0;const g=s.leftForLtr(f,c),m=s.leftForLtr(s.xPlus(f,1),c-2),_=Vr(o.borderRadius);Object.values(_).some(v=>v!==0)?(t.beginPath(),t.fillStyle=r.multiKeyBackground,$u(t,{x:g,y:p,w:c,h:l,radius:_}),t.fill(),t.stroke(),t.fillStyle=o.backgroundColor,t.beginPath(),$u(t,{x:m,y:p+1,w:c-2,h:l-2,radius:_}),t.fill()):(t.fillStyle=r.multiKeyBackground,t.fillRect(g,p,c,l),t.strokeRect(g,p,c,l),t.fillStyle=o.backgroundColor,t.fillRect(m,p+1,c-2,l-2))}t.fillStyle=this.labelTextColors[i]}drawBody(t,n,i){const{body:s}=this,{bodySpacing:r,bodyAlign:o,displayColors:a,boxHeight:l,boxWidth:c,boxPadding:u}=i,h=pe(i.bodyFont);let f=h.lineHeight,d=0;const p=$r(i.rtl,this.x,this.width),g=function(C){n.fillText(C,p.x(t.x+d),t.y+f/2),t.y+=f+r},m=p.textAlign(o);let _,v,w,E,x,A,S;for(n.textAlign=o,n.textBaseline="middle",n.font=h.string,t.x=wc(this,m,i),n.fillStyle=i.bodyColor,Nt(this.beforeBody,g),d=a&&m!=="right"?o==="center"?c/2+u:c+2+u:0,E=0,A=s.length;E<A;++E){for(_=s[E],v=this.labelTextColors[E],n.fillStyle=v,Nt(_.before,g),w=_.lines,a&&w.length&&(this._drawColorBox(n,t,E,p,i),f=Math.max(h.lineHeight,l)),x=0,S=w.length;x<S;++x)g(w[x]),f=h.lineHeight;Nt(_.after,g)}d=0,f=h.lineHeight,Nt(this.afterBody,g),t.y-=r}drawFooter(t,n,i){const s=this.footer,r=s.length;let o,a;if(r){const l=$r(i.rtl,this.x,this.width);for(t.x=wc(this,i.footerAlign,i),t.y+=i.footerMarginTop,n.textAlign=l.textAlign(i.footerAlign),n.textBaseline="middle",o=pe(i.footerFont),n.fillStyle=i.footerColor,n.font=o.string,a=0;a<r;++a)n.fillText(s[a],l.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+i.footerSpacing}}drawBackground(t,n,i,s){const{xAlign:r,yAlign:o}=this,{x:a,y:l}=t,{width:c,height:u}=i,{topLeft:h,topRight:f,bottomLeft:d,bottomRight:p}=Vr(s.cornerRadius);n.fillStyle=s.backgroundColor,n.strokeStyle=s.borderColor,n.lineWidth=s.borderWidth,n.beginPath(),n.moveTo(a+h,l),o==="top"&&this.drawCaret(t,n,i,s),n.lineTo(a+c-f,l),n.quadraticCurveTo(a+c,l,a+c,l+f),o==="center"&&r==="right"&&this.drawCaret(t,n,i,s),n.lineTo(a+c,l+u-p),n.quadraticCurveTo(a+c,l+u,a+c-p,l+u),o==="bottom"&&this.drawCaret(t,n,i,s),n.lineTo(a+d,l+u),n.quadraticCurveTo(a,l+u,a,l+u-d),o==="center"&&r==="left"&&this.drawCaret(t,n,i,s),n.lineTo(a,l+h),n.quadraticCurveTo(a,l,a+h,l),n.closePath(),n.fill(),s.borderWidth>0&&n.stroke()}_updateAnimationTarget(t){const n=this.chart,i=this.$animations,s=i&&i.x,r=i&&i.y;if(s||r){const o=ta[t.position].call(this,this._active,this._eventPosition);if(!o)return;const a=this._size=U0(this,t),l=Object.assign({},o,this._size),c=B0(n,t,l),u=V0(t,l,c,n);(s._to!==u.x||r._to!==u.y)&&(this.xAlign=c.xAlign,this.yAlign=c.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,u))}}_willRender(){return!!this.opacity}draw(t){const n=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(n);const s={width:this.width,height:this.height},r={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const o=je(n.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;n.enabled&&a&&(t.save(),t.globalAlpha=i,this.drawBackground(r,t,s,n),wS(t,n.textDirection),r.y+=o.top,this.drawTitle(r,t,n),this.drawBody(r,t,n),this.drawFooter(r,t,n),ES(t,n.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,n){const i=this._active,s=t.map(({datasetIndex:a,index:l})=>{const c=this.chart.getDatasetMeta(a);if(!c)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:c.data[l],index:l}}),r=!Nu(i,s),o=this._positionChanged(s,n);(r||o)&&(this._active=s,this._eventPosition=n,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,n,i=!0){if(n&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const s=this.options,r=this._active||[],o=this._getActiveElements(t,r,n,i),a=this._positionChanged(o,t),l=n||!Nu(o,r)||a;return l&&(this._active=o,(s.enabled||s.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,n))),l}_getActiveElements(t,n,i,s){const r=this.options;if(t.type==="mouseout")return[];if(!s)return n;const o=this.chart.getElementsAtEventForMode(t,r.mode,r,i);return r.reverse&&o.reverse(),o}_positionChanged(t,n){const{caretX:i,caretY:s,options:r}=this,o=ta[r.position].call(this,t,n);return o!==!1&&(i!==o.x||s!==o.y)}}et(Fp,"positioners",ta);var a8={id:"tooltip",_element:Fp,positioners:ta,afterInit(e,t,n){n&&(e.tooltip=new Fp({chart:e,options:n}))},beforeUpdate(e,t,n){e.tooltip&&e.tooltip.initialize(n)},reset(e,t,n){e.tooltip&&e.tooltip.initialize(n)},afterDraw(e){const t=e.tooltip;if(t&&t._willRender()){const n={tooltip:t};if(e.notifyPlugins("beforeTooltipDraw",{...n,cancelable:!0})===!1)return;t.draw(e.ctx),e.notifyPlugins("afterTooltipDraw",n)}},afterEvent(e,t){if(e.tooltip){const n=t.replay;e.tooltip.handleEvent(t.event,n,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(e,t)=>t.bodyFont.size,boxWidth:(e,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:BS},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:e=>e!=="filter"&&e!=="itemSort"&&e!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};const l8=(e,t,n,i)=>(typeof t=="string"?(n=e.push(t)-1,i.unshift({index:n,label:t})):isNaN(t)&&(n=null),n);function c8(e,t,n,i){const s=e.indexOf(t);if(s===-1)return l8(e,t,n,i);const r=e.lastIndexOf(t);return s!==r?n:s}const u8=(e,t)=>e===null?null:wn(Math.round(e),0,t);function H0(e){const t=this.getLabels();return e>=0&&e<t.length?t[e]:e}class Up extends pr{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const n=this._addedLabels;if(n.length){const i=this.getLabels();for(const{index:s,label:r}of n)i[s]===r&&i.splice(s,1);this._addedLabels=[]}super.init(t)}parse(t,n){if(jt(t))return null;const i=this.getLabels();return n=isFinite(n)&&i[n]===t?n:c8(i,t,vt(n,t),this._addedLabels),u8(n,i.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:n}=this.getUserBounds();let{min:i,max:s}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(i=0),n||(s=this.getLabels().length-1)),this.min=i,this.max=s}buildTicks(){const t=this.min,n=this.max,i=this.options.offset,s=[];let r=this.getLabels();r=t===0&&n===r.length-1?r:r.slice(t,n+1),this._valueRange=Math.max(r.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let o=t;o<=n;o++)s.push({value:o});return s}getLabelForValue(t){return H0.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const n=this.ticks;return t<0||t>n.length-1?null:this.getPixelForValue(n[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}et(Up,"id","category"),et(Up,"defaults",{ticks:{callback:H0}});function h8(e,t){const n=[],{bounds:s,step:r,min:o,max:a,precision:l,count:c,maxTicks:u,maxDigits:h,includeBounds:f}=e,d=r||1,p=u-1,{min:g,max:m}=t,_=!jt(o),v=!jt(a),w=!jt(c),E=(m-g)/(h+1);let x=Gb((m-g)/p/d)*d,A,S,C,U;if(x<1e-14&&!_&&!v)return[{value:g},{value:m}];U=Math.ceil(m/x)-Math.floor(g/x),U>p&&(x=Gb(U*x/p/d)*d),jt(l)||(A=Math.pow(10,l),x=Math.ceil(x*A)/A),s==="ticks"?(S=Math.floor(g/x)*x,C=Math.ceil(m/x)*x):(S=g,C=m),_&&v&&r&&ZU((a-o)/r,x/1e3)?(U=Math.round(Math.min((a-o)/x,u)),x=(a-o)/U,S=o,C=a):w?(S=_?o:S,C=v?a:C,U=c-1,x=(C-S)/U):(U=(C-S)/x,ba(U,Math.round(U),x/1e3)?U=Math.round(U):U=Math.ceil(U));const G=Math.max(Yb(x),Yb(S));A=Math.pow(10,jt(l)?G:l),S=Math.round(S*A)/A,C=Math.round(C*A)/A;let tt=0;for(_&&(f&&S!==o?(n.push({value:o}),S<o&&tt++,ba(Math.round((S+tt*x)*A)/A,o,j0(o,E,e))&&tt++):S<o&&tt++);tt<U;++tt){const ot=Math.round((S+tt*x)*A)/A;if(v&&ot>a)break;n.push({value:ot})}return v&&f&&C!==a?n.length&&ba(n[n.length-1].value,a,j0(a,E,e))?n[n.length-1].value=a:n.push({value:a}):(!v||C===a)&&n.push({value:C}),n}function j0(e,t,{horizontal:n,minRotation:i}){const s=qi(i),r=(n?Math.sin(s):Math.cos(s))||.001,o=.75*t*(""+e).length;return Math.min(t/r,o)}class ju extends pr{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,n){return jt(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:n,maxDefined:i}=this.getUserBounds();let{min:s,max:r}=this;const o=l=>s=n?s:l,a=l=>r=i?r:l;if(t){const l=lo(s),c=lo(r);l<0&&c<0?a(0):l>0&&c>0&&o(0)}if(s===r){let l=r===0?1:Math.abs(r*.05);a(r+l),t||o(s-l)}this.min=s,this.max=r}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:n,stepSize:i}=t,s;return i?(s=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,s>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${s} ticks. Limiting to 1000.`),s=1e3)):(s=this.computeTickLimit(),n=n||11),n&&(s=Math.min(n,s)),s}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,n=t.ticks;let i=this.getTickLimit();i=Math.max(2,i);const s={maxTicks:i,bounds:t.bounds,min:t.min,max:t.max,precision:n.precision,step:n.stepSize,count:n.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:n.minRotation||0,includeBounds:n.includeBounds!==!1},r=this._range||this,o=h8(s,r);return t.bounds==="ticks"&&aS(o,this,"value"),t.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const t=this.ticks;let n=this.min,i=this.max;if(super.configure(),this.options.offset&&t.length){const s=(i-n)/Math.max(t.length-1,1)/2;n-=s,i+=s}this._startValue=n,this._endValue=i,this._valueRange=i-n}getLabelForValue(t){return c_(t,this.chart.options.locale,this.options.ticks.format)}}class Bp extends ju{determineDataLimits(){const{min:t,max:n}=this.getMinMax(!0);this.min=Te(t)?t:0,this.max=Te(n)?n:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),n=t?this.width:this.height,i=qi(this.options.ticks.minRotation),s=(t?Math.sin(i):Math.cos(i))||.001,r=this._resolveTickFontOptions(0);return Math.ceil(n/Math.min(40,r.lineHeight/s))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}et(Bp,"id","linear"),et(Bp,"defaults",{ticks:{callback:sf.formatters.numeric}});const il=e=>Math.floor(Ki(e)),xs=(e,t)=>Math.pow(10,il(e)+t);function W0(e){return e/Math.pow(10,il(e))===1}function K0(e,t,n){const i=Math.pow(10,n),s=Math.floor(e/i);return Math.ceil(t/i)-s}function f8(e,t){const n=t-e;let i=il(n);for(;K0(e,t,i)>10;)i++;for(;K0(e,t,i)<10;)i--;return Math.min(i,il(e))}function d8(e,{min:t,max:n}){t=cn(e.min,t);const i=[],s=il(t);let r=f8(t,n),o=r<0?Math.pow(10,Math.abs(r)):1;const a=Math.pow(10,r),l=s>r?Math.pow(10,s):0,c=Math.round((t-l)*o)/o,u=Math.floor((t-l)/a/10)*a*10;let h=Math.floor((c-u)/Math.pow(10,r)),f=cn(e.min,Math.round((l+u+h*Math.pow(10,r))*o)/o);for(;f<n;)i.push({value:f,major:W0(f),significand:h}),h>=10?h=h<15?15:20:h++,h>=20&&(r++,h=2,o=r>=0?1:o),f=Math.round((l+u+h*Math.pow(10,r))*o)/o;const d=cn(e.max,f);return i.push({value:d,major:W0(d),significand:h}),i}class q0 extends pr{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,n){const i=ju.prototype.parse.apply(this,[t,n]);if(i===0){this._zero=!0;return}return Te(i)&&i>0?i:null}determineDataLimits(){const{min:t,max:n}=this.getMinMax(!0);this.min=Te(t)?Math.max(0,t):null,this.max=Te(n)?Math.max(0,n):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!Te(this._userMin)&&(this.min=t===xs(this.min,0)?xs(this.min,-1):xs(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:n}=this.getUserBounds();let i=this.min,s=this.max;const r=a=>i=t?i:a,o=a=>s=n?s:a;i===s&&(i<=0?(r(1),o(10)):(r(xs(i,-1)),o(xs(s,1)))),i<=0&&r(xs(s,-1)),s<=0&&o(xs(i,1)),this.min=i,this.max=s}buildTicks(){const t=this.options,n={min:this._userMin,max:this._userMax},i=d8(n,this);return t.bounds==="ticks"&&aS(i,this,"value"),t.reverse?(i.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),i}getLabelForValue(t){return t===void 0?"0":c_(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=Ki(t),this._valueRange=Ki(this.max)-Ki(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(Ki(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const n=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+n*this._valueRange)}}et(q0,"id","logarithmic"),et(q0,"defaults",{ticks:{callback:sf.formatters.logarithmic,major:{enabled:!0}}});function Vp(e){const t=e.ticks;if(t.display&&e.display){const n=je(t.backdropPadding);return vt(t.font&&t.font.size,se.font.size)+n.height}return 0}function p8(e,t,n){return n=te(n)?n:[n],{w:bB(e,t.string,n),h:n.length*t.lineHeight}}function G0(e,t,n,i,s){return e===i||e===s?{start:t-n/2,end:t+n/2}:e<i||e>s?{start:t-n,end:t}:{start:t,end:t+n}}function g8(e){const t={l:e.left+e._padding.left,r:e.right-e._padding.right,t:e.top+e._padding.top,b:e.bottom-e._padding.bottom},n=Object.assign({},t),i=[],s=[],r=e._pointLabels.length,o=e.options.pointLabels,a=o.centerPointLabels?ve/r:0;for(let l=0;l<r;l++){const c=o.setContext(e.getPointLabelContext(l));s[l]=c.padding;const u=e.getPointPosition(l,e.drawingArea+s[l],a),h=pe(c.font),f=p8(e.ctx,h,e._pointLabels[l]);i[l]=f;const d=In(e.getIndexAngle(l)+a),p=Math.round(r_(d)),g=G0(p,u.x,f.w,0,180),m=G0(p,u.y,f.h,90,270);m8(n,t,d,g,m)}e.setCenterPoint(t.l-n.l,n.r-t.r,t.t-n.t,n.b-t.b),e._pointLabelItems=v8(e,i,s)}function m8(e,t,n,i,s){const r=Math.abs(Math.sin(n)),o=Math.abs(Math.cos(n));let a=0,l=0;i.start<t.l?(a=(t.l-i.start)/r,e.l=Math.min(e.l,t.l-a)):i.end>t.r&&(a=(i.end-t.r)/r,e.r=Math.max(e.r,t.r+a)),s.start<t.t?(l=(t.t-s.start)/o,e.t=Math.min(e.t,t.t-l)):s.end>t.b&&(l=(s.end-t.b)/o,e.b=Math.max(e.b,t.b+l))}function _8(e,t,n){const i=e.drawingArea,{extra:s,additionalAngle:r,padding:o,size:a}=n,l=e.getPointPosition(t,i+s+o,r),c=Math.round(r_(In(l.angle+nn))),u=E8(l.y,a.h,c),h=b8(c),f=w8(l.x,a.w,h);return{visible:!0,x:l.x,y:u,textAlign:h,left:f,top:u,right:f+a.w,bottom:u+a.h}}function y8(e,t){if(!t)return!0;const{left:n,top:i,right:s,bottom:r}=e;return!(bi({x:n,y:i},t)||bi({x:n,y:r},t)||bi({x:s,y:i},t)||bi({x:s,y:r},t))}function v8(e,t,n){const i=[],s=e._pointLabels.length,r=e.options,{centerPointLabels:o,display:a}=r.pointLabels,l={extra:Vp(r)/2,additionalAngle:o?ve/s:0};let c;for(let u=0;u<s;u++){l.padding=n[u],l.size=t[u];const h=_8(e,u,l);i.push(h),a==="auto"&&(h.visible=y8(h,c),h.visible&&(c=h))}return i}function b8(e){return e===0||e===180?"center":e<180?"left":"right"}function w8(e,t,n){return n==="right"?e-=t:n==="center"&&(e-=t/2),e}function E8(e,t,n){return n===90||n===270?e-=t/2:(n>270||n<90)&&(e-=t),e}function x8(e,t,n){const{left:i,top:s,right:r,bottom:o}=n,{backdropColor:a}=t;if(!jt(a)){const l=Vr(t.borderRadius),c=je(t.backdropPadding);e.fillStyle=a;const u=i-c.left,h=s-c.top,f=r-i+c.width,d=o-s+c.height;Object.values(l).some(p=>p!==0)?(e.beginPath(),$u(e,{x:u,y:h,w:f,h:d,radius:l}),e.fill()):e.fillRect(u,h,f,d)}}function T8(e,t){const{ctx:n,options:{pointLabels:i}}=e;for(let s=t-1;s>=0;s--){const r=e._pointLabelItems[s];if(!r.visible)continue;const o=i.setContext(e.getPointLabelContext(s));x8(n,o,r);const a=pe(o.font),{x:l,y:c,textAlign:u}=r;ir(n,e._pointLabels[s],l,c+a.lineHeight/2,a,{color:o.color,textAlign:u,textBaseline:"middle"})}}function VS(e,t,n,i){const{ctx:s}=e;if(n)s.arc(e.xCenter,e.yCenter,t,0,Tn);else{let r=e.getPointPosition(0,t);s.moveTo(r.x,r.y);for(let o=1;o<i;o++)r=e.getPointPosition(o,t),s.lineTo(r.x,r.y)}}function C8(e,t,n,i,s){const r=e.ctx,o=t.circular,{color:a,lineWidth:l}=t;!o&&!i||!a||!l||n<0||(r.save(),r.strokeStyle=a,r.lineWidth=l,r.setLineDash(s.dash),r.lineDashOffset=s.dashOffset,r.beginPath(),VS(e,n,o,i),r.closePath(),r.stroke(),r.restore())}function S8(e,t,n){return _s(e,{label:n,index:t,type:"pointLabel"})}class Ec extends ju{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=je(Vp(this.options)/2),n=this.width=this.maxWidth-t.width,i=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+n/2+t.left),this.yCenter=Math.floor(this.top+i/2+t.top),this.drawingArea=Math.floor(Math.min(n,i)/2)}determineDataLimits(){const{min:t,max:n}=this.getMinMax(!1);this.min=Te(t)&&!isNaN(t)?t:0,this.max=Te(n)&&!isNaN(n)?n:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Vp(this.options))}generateTickLabels(t){ju.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((n,i)=>{const s=Bt(this.options.pointLabels.callback,[n,i],this);return s||s===0?s:""}).filter((n,i)=>this.chart.getDataVisibility(i))}fit(){const t=this.options;t.display&&t.pointLabels.display?g8(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,n,i,s){this.xCenter+=Math.floor((t-n)/2),this.yCenter+=Math.floor((i-s)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,n,i,s))}getIndexAngle(t){const n=Tn/(this._pointLabels.length||1),i=this.options.startAngle||0;return In(t*n+qi(i))}getDistanceFromCenterForValue(t){if(jt(t))return NaN;const n=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*n:(t-this.min)*n}getValueForDistanceFromCenter(t){if(jt(t))return NaN;const n=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-n:this.min+n}getPointLabelContext(t){const n=this._pointLabels||[];if(t>=0&&t<n.length){const i=n[t];return S8(this.getContext(),t,i)}}getPointPosition(t,n,i=0){const s=this.getIndexAngle(t)-nn+i;return{x:Math.cos(s)*n+this.xCenter,y:Math.sin(s)*n+this.yCenter,angle:s}}getPointPositionForValue(t,n){return this.getPointPosition(t,this.getDistanceFromCenterForValue(n))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:n,top:i,right:s,bottom:r}=this._pointLabelItems[t];return{left:n,top:i,right:s,bottom:r}}drawBackground(){const{backgroundColor:t,grid:{circular:n}}=this.options;if(t){const i=this.ctx;i.save(),i.beginPath(),VS(this,this.getDistanceFromCenterForValue(this._endValue),n,this._pointLabels.length),i.closePath(),i.fillStyle=t,i.fill(),i.restore()}}drawGrid(){const t=this.ctx,n=this.options,{angleLines:i,grid:s,border:r}=n,o=this._pointLabels.length;let a,l,c;if(n.pointLabels.display&&T8(this,o),s.display&&this.ticks.forEach((u,h)=>{if(h!==0){l=this.getDistanceFromCenterForValue(u.value);const f=this.getContext(h),d=s.setContext(f),p=r.setContext(f);C8(this,d,l,o,p)}}),i.display){for(t.save(),a=o-1;a>=0;a--){const u=i.setContext(this.getPointLabelContext(a)),{color:h,lineWidth:f}=u;!f||!h||(t.lineWidth=f,t.strokeStyle=h,t.setLineDash(u.borderDash),t.lineDashOffset=u.borderDashOffset,l=this.getDistanceFromCenterForValue(n.ticks.reverse?this.min:this.max),c=this.getPointPosition(a,l),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(c.x,c.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,n=this.options,i=n.ticks;if(!i.display)return;const s=this.getIndexAngle(0);let r,o;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(s),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((a,l)=>{if(l===0&&!n.reverse)return;const c=i.setContext(this.getContext(l)),u=pe(c.font);if(r=this.getDistanceFromCenterForValue(this.ticks[l].value),c.showLabelBackdrop){t.font=u.string,o=t.measureText(a.label).width,t.fillStyle=c.backdropColor;const h=je(c.backdropPadding);t.fillRect(-o/2-h.left,-r-u.size/2-h.top,o+h.width,u.size+h.height)}ir(t,a.label,0,-r,u,{color:c.color})}),t.restore()}drawTitle(){}}et(Ec,"id","radialLinear"),et(Ec,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:sf.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),et(Ec,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),et(Ec,"descriptors",{angleLines:{_fallback:"grid"}});const af={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},tn=Object.keys(af);function I8(e,t){return e-t}function Y0(e,t){if(jt(t))return null;const n=e._adapter,{parser:i,round:s,isoWeekday:r}=e._parseOpts;let o=t;return typeof i=="function"&&(o=i(o)),Te(o)||(o=typeof i=="string"?n.parse(o,i):n.parse(o)),o===null?null:(s&&(o=s==="week"&&(el(r)||r===!0)?n.startOf(o,"isoWeek",r):n.startOf(o,s)),+o)}function X0(e,t,n,i){const s=tn.length;for(let r=tn.indexOf(e);r<s-1;++r){const o=af[tn[r]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((n-t)/(a*o.size))<=i)return tn[r]}return tn[s-1]}function k8(e,t,n,i,s){for(let r=tn.length-1;r>=tn.indexOf(n);r--){const o=tn[r];if(af[o].common&&e._adapter.diff(s,i,o)>=t-1)return o}return tn[n?tn.indexOf(n):0]}function A8(e){for(let t=tn.indexOf(e)+1,n=tn.length;t<n;++t)if(af[tn[t]].common)return tn[t]}function Q0(e,t,n){if(!n)e[t]=!0;else if(n.length){const{lo:i,hi:s}=o_(n,t),r=n[i]>=t?n[i]:n[s];e[r]=!0}}function R8(e,t,n,i){const s=e._adapter,r=+s.startOf(t[0].value,i),o=t[t.length-1].value;let a,l;for(a=r;a<=o;a=+s.add(a,1,i))l=n[a],l>=0&&(t[l].major=!0);return t}function J0(e,t,n){const i=[],s={},r=t.length;let o,a;for(o=0;o<r;++o)a=t[o],s[a]=o,i.push({value:a,major:!1});return r===0||!n?i:R8(e,i,s,n)}class Wu extends pr{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,n={}){const i=t.time||(t.time={}),s=this._adapter=new IV._date(t.adapters.date);s.init(n),va(i.displayFormats,s.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(t),this._normalized=n.normalized}parse(t,n){return t===void 0?null:Y0(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,n=this._adapter,i=t.time.unit||"day";let{min:s,max:r,minDefined:o,maxDefined:a}=this.getUserBounds();function l(c){!o&&!isNaN(c.min)&&(s=Math.min(s,c.min)),!a&&!isNaN(c.max)&&(r=Math.max(r,c.max))}(!o||!a)&&(l(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&l(this.getMinMax(!1))),s=Te(s)&&!isNaN(s)?s:+n.startOf(Date.now(),i),r=Te(r)&&!isNaN(r)?r:+n.endOf(Date.now(),i)+1,this.min=Math.min(s,r-1),this.max=Math.max(s+1,r)}_getLabelBounds(){const t=this.getLabelTimestamps();let n=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return t.length&&(n=t[0],i=t[t.length-1]),{min:n,max:i}}buildTicks(){const t=this.options,n=t.time,i=t.ticks,s=i.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&s.length&&(this.min=this._userMin||s[0],this.max=this._userMax||s[s.length-1]);const r=this.min,o=this.max,a=sB(s,r,o);return this._unit=n.unit||(i.autoSkip?X0(n.minUnit,this.min,this.max,this._getLabelCapacity(r)):k8(this,a.length,n.minUnit,this.min,this.max)),this._majorUnit=!i.major.enabled||this._unit==="year"?void 0:A8(this._unit),this.initOffsets(s),t.reverse&&a.reverse(),J0(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let n=0,i=0,s,r;this.options.offset&&t.length&&(s=this.getDecimalForValue(t[0]),t.length===1?n=1-s:n=(this.getDecimalForValue(t[1])-s)/2,r=this.getDecimalForValue(t[t.length-1]),t.length===1?i=r:i=(r-this.getDecimalForValue(t[t.length-2]))/2);const o=t.length<3?.5:.25;n=wn(n,0,o),i=wn(i,0,o),this._offsets={start:n,end:i,factor:1/(n+1+i)}}_generate(){const t=this._adapter,n=this.min,i=this.max,s=this.options,r=s.time,o=r.unit||X0(r.minUnit,n,i,this._getLabelCapacity(n)),a=vt(s.ticks.stepSize,1),l=o==="week"?r.isoWeekday:!1,c=el(l)||l===!0,u={};let h=n,f,d;if(c&&(h=+t.startOf(h,"isoWeek",l)),h=+t.startOf(h,c?"day":o),t.diff(i,n,o)>1e5*a)throw new Error(n+" and "+i+" are too far apart with stepSize of "+a+" "+o);const p=s.ticks.source==="data"&&this.getDataTimestamps();for(f=h,d=0;f<i;f=+t.add(f,a,o),d++)Q0(u,f,p);return(f===i||s.bounds==="ticks"||d===1)&&Q0(u,f,p),Object.keys(u).sort((g,m)=>g-m).map(g=>+g)}getLabelForValue(t){const n=this._adapter,i=this.options.time;return i.tooltipFormat?n.format(t,i.tooltipFormat):n.format(t,i.displayFormats.datetime)}format(t,n){const s=this.options.time.displayFormats,r=this._unit,o=n||s[r];return this._adapter.format(t,o)}_tickFormatFunction(t,n,i,s){const r=this.options,o=r.ticks.callback;if(o)return Bt(o,[t,n,i],this);const a=r.time.displayFormats,l=this._unit,c=this._majorUnit,u=l&&a[l],h=c&&a[c],f=i[n],d=c&&h&&f&&f.major;return this._adapter.format(t,s||(d?h:u))}generateTickLabels(t){let n,i,s;for(n=0,i=t.length;n<i;++n)s=t[n],s.label=this._tickFormatFunction(s.value,n,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const n=this._offsets,i=this.getDecimalForValue(t);return this.getPixelForDecimal((n.start+i)*n.factor)}getValueForPixel(t){const n=this._offsets,i=this.getDecimalForPixel(t)/n.factor-n.end;return this.min+i*(this.max-this.min)}_getLabelSize(t){const n=this.options.ticks,i=this.ctx.measureText(t).width,s=qi(this.isHorizontal()?n.maxRotation:n.minRotation),r=Math.cos(s),o=Math.sin(s),a=this._resolveTickFontOptions(0).size;return{w:i*r+a*o,h:i*o+a*r}}_getLabelCapacity(t){const n=this.options.time,i=n.displayFormats,s=i[n.unit]||i.millisecond,r=this._tickFormatFunction(t,0,J0(this,[t],this._majorUnit),s),o=this._getLabelSize(r),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let t=this._cache.data||[],n,i;if(t.length)return t;const s=this.getMatchingVisibleMetas();if(this._normalized&&s.length)return this._cache.data=s[0].controller.getAllParsedValues(this);for(n=0,i=s.length;n<i;++n)t=t.concat(s[n].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let n,i;if(t.length)return t;const s=this.getLabels();for(n=0,i=s.length;n<i;++n)t.push(Y0(this,s[n]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return oB(t.sort(I8))}}et(Wu,"id","time"),et(Wu,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function xc(e,t,n){let i=0,s=e.length-1,r,o,a,l;n?(t>=e[i].pos&&t<=e[s].pos&&({lo:i,hi:s}=Bs(e,"pos",t)),{pos:r,time:a}=e[i],{pos:o,time:l}=e[s]):(t>=e[i].time&&t<=e[s].time&&({lo:i,hi:s}=Bs(e,"time",t)),{time:r,pos:a}=e[i],{time:o,pos:l}=e[s]);const c=o-r;return c?a+(l-a)*(t-r)/c:a}class Z0 extends Wu{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),n=this._table=this.buildLookupTable(t);this._minPos=xc(n,this.min),this._tableRange=xc(n,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:n,max:i}=this,s=[],r=[];let o,a,l,c,u;for(o=0,a=t.length;o<a;++o)c=t[o],c>=n&&c<=i&&s.push(c);if(s.length<2)return[{time:n,pos:0},{time:i,pos:1}];for(o=0,a=s.length;o<a;++o)u=s[o+1],l=s[o-1],c=s[o],Math.round((u+l)/2)!==c&&r.push({time:c,pos:o/(a-1)});return r}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const n=this.getDataTimestamps(),i=this.getLabelTimestamps();return n.length&&i.length?t=this.normalize(n.concat(i)):t=n.length?n:i,t=this._cache.all=t,t}getDecimalForValue(t){return(xc(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const n=this._offsets,i=this.getDecimalForPixel(t)/n.factor-n.end;return xc(this._table,i*this._tableRange+this._minPos,!0)}}et(Z0,"id","timeseries"),et(Z0,"defaults",Wu.defaults);const $S={data:{type:Object,required:!0},options:{type:Object,default:()=>({})},plugins:{type:Array,default:()=>[]},datasetIdKey:{type:String,default:"label"},updateMode:{type:String,default:void 0}},D8={type:{type:String,required:!0},...$S},O8=Q1[0]==="2"?(e,t)=>Object.assign(e,{attrs:t}):(e,t)=>Object.assign(e,t);function br(e){return Qu(e)?_t(e):e}function P8(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e;return Qu(t)?new Proxy(e,{}):e}function M8(e,t){const n=e.options;n&&t&&Object.assign(n,t)}function zS(e,t){e.labels=t}function HS(e,t,n){const i=[];e.datasets=t.map(s=>{const r=e.datasets.find(o=>o[n]===s[n]);return!r||!s.data||i.includes(r)?{...s}:(i.push(r),Object.assign(r,s),r)})}function N8(e,t){const n={labels:[],datasets:[]};return zS(n,e.labels),HS(n,e.datasets,t),n}const L8=sr({props:D8,setup(e,t){let{expose:n}=t;const i=xn(null),s=Ju(null);n({chart:s});const r=()=>{if(!i.value)return;const{type:l,data:c,options:u,plugins:h,datasetIdKey:f}=e,d=N8(c,f),p=P8(d,c);s.value=new of(i.value,{type:l,data:p,options:{...u},plugins:h})},o=()=>{const l=_t(s.value);l&&(l.destroy(),s.value=null)},a=l=>{l.update(e.updateMode)};return rg(r),M1(o),Qi([()=>e.options,()=>e.data],(l,c)=>{let[u,h]=l,[f,d]=c;const p=_t(s.value);if(!p)return;let g=!1;if(u){const m=br(u),_=br(f);m&&m!==_&&(M8(p,m),g=!0)}if(h){const m=br(h.labels),_=br(d.labels),v=br(h.datasets),w=br(d.datasets);m!==_&&(zS(p.config.data,m),g=!0),v&&v!==w&&(HS(p.config.data,v,e.datasetIdKey),g=!0)}g&&a(p)},{deep:!0}),()=>mo("canvas",{ref:i})}});function F8(e,t){return of.register(t),sr({props:$S,setup(n,i){let{expose:s}=i;const r=Ju(null),o=a=>{r.value=a==null?void 0:a.chart};return s({chart:r}),()=>mo(L8,O8({ref:o},{type:e,...n}))}})}const U8=F8("line",Uc),B8={__name:"BarChart",props:{datasets:{type:Array,required:!0}},setup(e){const t=e;of.register(Up,Bp,$c,Zo,Z$,a8,Q$);const n=rs({datasets:t.datasets}),i=rs({responsive:!0,scales:{x:{type:"linear",ticks:{callback:function(s){let r=new Date(s);return r.getDate()+" May "+(r.getHours()>10?r.getHours():`0${r.getHours()}`)+":"+(r.getMinutes()>10?r.getMinutes():`0${r.getMinutes()}`)}},startAtZero:!0}},plugins:{tooltip:{callbacks:{title:function(s){let r=parseInt(s[0].label.split(".").join("")),o=new Date(r);return o.getDate()+" May "+(o.getHours()>10?o.getHours():`0${o.getHours()}`)+":"+(o.getMinutes()>10?o.getMinutes():`0${o.getMinutes()}`)},label:function(s){let r=s.dataset.label||"";return r&&(r+=" Points: "),s.parsed.y!==null&&(r+=s.parsed.y),r}}}}});return(s,r)=>(lt(),Vn($(U8),{id:"my-chart-id",options:i,data:n},null,8,["options","data"]))}};const V8={class:"graph"},$8={__name:"StatsScreen",setup(e){const t=kl(),n=Et(()=>t.params.boardUUID||"");let i,s;P1(()=>{i=fn(us(r,"Boards",n.value,"Groups")),s=fn(us(r,"Boards",n.value,"Tiles"))});const r=Il(fr),o=fn(Rn(r,"Boards",n.value)),a=Et(()=>{var h;let u=[];return s&&((h=s==null?void 0:s.value)==null||h.forEach(f=>{u[f.id]=f.points})),u||[]}),l=u=>{let h=[{x:16829424e5,y:0}],f=0;const d=Object.entries(u.collected).sort((p,g)=>p[1].seconds-g[1].seconds);return Object.keys(d).forEach(p=>{f+=a.value[d[p][0]],h.push({y:f,x:new Date(d[p][1].seconds*1e3)})}),h.push({x:Date.now(),y:f}),h},c=Et(()=>{var h;let u=[];return i!=null&&i.value&&((h=i==null?void 0:i.value)==null||h.forEach(f=>{f.name!="moderator"&&u.push({label:f.name,borderColor:f.color,backgroundColor:f.color,data:l(f)})})),u||[]});return(u,h)=>{var d;const f=rh("router-link");return lt(),kt(ie,null,[Pt("div",null,[he(f,{class:"btn",to:{name:"overview",params:{boardUUID:$(n)}}},{default:ig(()=>[Pn(" Go to Bingo Board Overview ")]),_:1},8,["to"])]),Pt("h1",null,Ke((d=$(o))==null?void 0:d.name)+" stats:",1),Pt("div",V8,[he(B8,{datasets:$(c)},null,8,["datasets"])])],64)}}},z8=N3({history:J4(),mode:"hash",routes:[{path:"/",name:"Home",component:pU},{path:"/b/:boardUUID",name:"overview",param:!0,component:Vb},{path:"/boards/",name:"boardOverview",param:!0,component:bU},{path:"/b/:boardUUID/team/:teamCode",name:"private-board",param:!0,component:Vb},{path:"/b/:boardUUID/stats/",name:"stats-graph",param:!0,component:$8},{path:"/b/:boardUUID/m/:teamCode",name:"moderator",param:!0,component:uU}]});var H8={prefix:"fas",iconName:"spaghetti-monster-flying",icon:[640,512,["pastafarianism"],"f67b","M208 64a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 0c0 16.2-6 31.1-16 42.3l15.6 31.2c18.7-6 39.9-9.5 64.4-9.5s45.8 3.5 64.4 9.5L400 106.3C390 95.1 384 80.2 384 64c0-35.3 28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64c-1.7 0-3.4-.1-5.1-.2L427.8 158c21.1 13.6 37.7 30.2 51.4 46.4c7.1 8.3 13.5 16.6 19.3 24l1.4 1.8c6.3 8.1 11.6 14.8 16.7 20.4C527.3 262.3 532.7 264 536 264c2.5 0 4.3-.6 7.1-3.3c3.7-3.5 7.1-8.8 12.5-17.4l.6-.9c4.6-7.4 11-17.6 19.4-25.7c9.7-9.3 22.9-16.7 40.4-16.7c13.3 0 24 10.7 24 24s-10.7 24-24 24c-2.5 0-4.3 .6-7.1 3.3c-3.7 3.5-7.1 8.8-12.5 17.4l-.6 .9c-4.6 7.4-11 17.6-19.4 25.7c-9.7 9.3-22.9 16.7-40.4 16.7c-18.5 0-32.9-8.5-44.3-18.6c-3.1 4-6.6 8.3-10.5 12.7c1.4 4.3 2.8 8.5 4 12.5c.9 3 1.8 5.8 2.6 8.6c3 9.8 5.5 18.2 8.6 25.9c3.9 9.8 7.4 15.4 10.8 18.5c2.6 2.4 5.9 4.3 12.8 4.3c8.7 0 16.9-4.2 33.7-13.2c15-8 35.7-18.8 62.3-18.8c13.3 0 24 10.7 24 24s-10.7 24-24 24c-13.4 0-24.7 5.2-39.7 13.2c-1 .6-2.1 1.1-3.2 1.7C559.9 414 541.4 424 520 424c-18.4 0-33.6-6.1-45.5-17.2c-11.1-10.3-17.9-23.7-22.7-36c-3.6-9-6.7-19.1-9.5-28.5c-16.4 12.3-36.1 23.6-58.9 31.3c3.6 10.8 8.4 23.5 14.4 36.2c7.5 15.9 16.2 30.4 25.8 40.5C433 460.5 441.2 464 448 464c13.3 0 24 10.7 24 24s-10.7 24-24 24c-25.2 0-45-13.5-59.5-28.8c-14.5-15.4-25.7-34.9-34.2-53c-8-17-14.1-33.8-18.3-46.9c-5.2 .4-10.6 .6-16 .6s-10.8-.2-16-.6c-4.2 13-10.3 29.9-18.3 46.9c-8.5 18.1-19.8 37.6-34.2 53C237 498.5 217.2 512 192 512c-13.3 0-24-10.7-24-24s10.7-24 24-24c6.8 0 15-3.5 24.5-13.7c9.5-10.1 18.3-24.6 25.8-40.5c5.9-12.6 10.7-25.4 14.4-36.2c-22.8-7.7-42.5-19-58.9-31.3c-2.9 9.4-6 19.5-9.5 28.5c-4.8 12.2-11.6 25.6-22.7 36C153.6 417.9 138.4 424 120 424c-21.4 0-39.9-10-53.1-17.1l0 0c-1.1-.6-2.2-1.2-3.2-1.7c-15-8-26.3-13.2-39.7-13.2c-13.3 0-24-10.7-24-24s10.7-24 24-24c26.6 0 47.3 10.8 62.3 18.8c16.8 9 25 13.2 33.7 13.2c6.8 0 10.2-1.9 12.8-4.3c3.4-3.2 7-8.8 10.8-18.5c3-7.7 5.6-16.1 8.6-25.9c.8-2.7 1.7-5.6 2.6-8.6c1.2-4 2.6-8.2 4-12.5c-3.9-4.5-7.4-8.8-10.5-12.7C136.9 303.5 122.5 312 104 312c-17.5 0-30.7-7.4-40.4-16.7c-8.4-8.1-14.8-18.3-19.4-25.7l-.6-.9c-5.4-8.6-8.8-13.9-12.5-17.4c-2.8-2.7-4.6-3.3-7.1-3.3c-13.3 0-24-10.7-24-24s10.7-24 24-24c17.5 0 30.7 7.4 40.4 16.7c8.4 8.1 14.8 18.3 19.4 25.7l.6 .9c5.4 8.6 8.8 13.9 12.5 17.4c2.8 2.7 4.6 3.3 7.1 3.3c3.3 0 8.7-1.7 19.4-13.4c5.1-5.6 10.4-12.3 16.7-20.4l1.4-1.8c5.8-7.4 12.2-15.7 19.3-24c13.8-16.2 30.3-32.8 51.4-46.4l-15.1-30.2c-1.7 .1-3.4 .2-5.1 .2c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64zm208 0a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z"]},j8={prefix:"fas",iconName:"spoon",icon:[512,512,[129348,61873,"utensil-spoon"],"f2e5","M245.8 220.9c-14.5-17.6-21.8-39.2-21.8-60.8C224 80 320 0 416 0c53 0 96 43 96 96c0 96-80 192-160.2 192c-21.6 0-43.2-7.3-60.8-21.8L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L245.8 220.9z"]},W8={prefix:"fas",iconName:"paw",icon:[512,512,[],"f1b0","M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"]},K8={prefix:"fas",iconName:"crow",icon:[640,512,[],"f520","M456 0c-48.6 0-88 39.4-88 88v29.2L12.5 390.6c-14 10.8-16.6 30.9-5.9 44.9s30.9 16.6 44.9 5.9L126.1 384H259.2l46.6 113.1c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3L311.1 384H352c1.1 0 2.1 0 3.2 0l46.6 113.2c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3l-42-102C484.9 354.1 544 280 544 192V128v-8l80.5-20.1c8.6-2.1 13.8-10.8 11.6-19.4C629 52 603.4 32 574 32H523.9C507.7 12.5 483.3 0 456 0zm0 64a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},q8={prefix:"fas",iconName:"frog",icon:[576,512,[],"f52e","M368 32c41.7 0 75.9 31.8 79.7 72.5l85.6 26.3c25.4 7.8 42.8 31.3 42.8 57.9c0 21.8-11.7 41.9-30.7 52.7L400.8 323.5 493.3 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H480c-8.5 0-16.6-3.4-22.6-9.4L346.9 360.2c11.7-36 3.2-77.1-25.4-105.7c-40.6-40.6-106.3-40.6-146.9-.1L101 324.4c-6.4 6.1-6.7 16.2-.6 22.6s16.2 6.6 22.6 .6l73.8-70.2 .1-.1 .1-.1c3.5-3.5 7.3-6.6 11.3-9.2c27.9-18.5 65.9-15.4 90.5 9.2c24.7 24.7 27.7 62.9 9 90.9c-2.6 3.8-5.6 7.5-9 10.9L261.8 416H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-35.3 0-64-28.7-64-64C0 249.6 127 112.9 289.3 97.5C296.2 60.2 328.8 32 368 32zm0 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]},G8={prefix:"fas",iconName:"feather-pointed",icon:[512,512,["feather-alt"],"f56b","M278.5 215.6L23 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l74.8-74.8c7.4 4.6 15.3 8.2 23.8 10.5C200.3 452.8 270 454.5 338 409.4c12.2-8.1 5.8-25.4-8.8-25.4l-16.1 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l97.7-29.3c3.4-1 6.4-3.1 8.4-6.1c4.4-6.4 8.6-12.9 12.6-19.6c6.2-10.3-1.5-23-13.5-23l-38.6 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l80.9-24.3c4.6-1.4 8.4-4.8 10.2-9.3C494.5 163 507.8 86.1 511.9 36.8c.8-9.9-3-19.6-10-26.6s-16.7-10.8-26.6-10C391.5 7 228.5 40.5 137.4 131.6C57.3 211.7 56.7 302.3 71.3 356.4c2.1 7.9 12 9.6 17.8 3.8L253.6 195.8c6.2-6.2 16.4-6.2 22.6 0c5.4 5.4 6.1 13.6 2.2 19.8z"]},Y8={prefix:"fas",iconName:"dove",icon:[512,512,[128330],"f4ba","M160.8 96.5c14 17 31 30.9 49.5 42.2c25.9 15.8 53.7 25.9 77.7 31.6V138.8C265.8 108.5 250 71.5 248.6 28c-.4-11.3-7.5-21.5-18.4-24.4c-7.6-2-15.8-.2-21 5.8c-13.3 15.4-32.7 44.6-48.4 87.2zM320 144v30.6l0 0v1.3l0 0 0 32.1c-60.8-5.1-185-43.8-219.3-157.2C97.4 40 87.9 32 76.6 32c-7.9 0-15.3 3.9-18.8 11C46.8 65.9 32 112.1 32 176c0 116.9 80.1 180.5 118.4 202.8L11.8 416.6C6.7 418 2.6 421.8 .9 426.8s-.8 10.6 2.3 14.8C21.7 466.2 77.3 512 160 512c3.6 0 7.2-1.2 10-3.5L245.6 448H320c88.4 0 160-71.6 160-160V128l29.9-44.9c1.3-2 2.1-4.4 2.1-6.8c0-6.8-5.5-12.3-12.3-12.3H400c-44.2 0-80 35.8-80 80zm80-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32z"]},X8={prefix:"fas",iconName:"rocket",icon:[512,512,[],"f135","M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"]},Q8={prefix:"fas",iconName:"disease",icon:[512,512,[],"f7fa","M236.4 61.4L227 75.5c-21.3 32-59.4 48.5-97.3 42.1l-59.6-9.9C33.4 101.6 0 129.9 .1 167.1c0 15.9 6.4 31.2 17.6 42.5l29.2 29.2c11 11 17.2 25.9 17.2 41.5c0 15.8-6.4 30.9-17.7 42L33.3 335.1C22.2 345.9 16 360.7 16 376.2c0 36.8 34.1 64.2 70.1 56.2l62.3-13.8c7.7-1.7 15.7-2.6 23.6-2.6h10c27.2 0 53.7 9.3 75 26.3L287.8 467c10.5 8.4 23.6 13 37 13c32.7 0 59.3-26.5 59.3-59.3l0-25.2c0-34.9 21.4-66.2 53.9-78.8l36.9-14.3c22.4-8.7 37.2-30.3 37.2-54.3c0-28.1-20.1-52.3-47.8-57.3l-28-5.1c-36.5-6.7-65.4-34.5-73.6-70.7l-7.1-31.5C348.9 53.4 322.1 32 291.3 32c-22 0-42.6 11-54.9 29.4zM160 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm0 80a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},J8={prefix:"fas",iconName:"hippo",icon:[640,512,[129435],"f6ed","M407 47c9.4-9.4 24.6-9.4 33.9 0l17.2 17.2c1.9-.1 3.9-.2 5.8-.2h32c11.2 0 21.9 2.3 31.6 6.5L543 55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L564 101.9c7.6 12.2 12 26.7 12 42.1c0 10.2 7.4 18.8 16.7 23c27.9 12.5 47.3 40.5 47.3 73c0 26.2-12.6 49.4-32 64v32c0 8.8-7.2 16-16 16H560c-8.8 0-16-7.2-16-16V320H480v16c0 8.8-7.2 16-16 16H432c-8.8 0-16-7.2-16-16V318.4c-11.8-2.4-22.7-7.4-32-14.4c-1.5-1.1-2.9-2.3-4.3-3.5c-17-14.7-27.7-36.4-27.7-60.5c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 44.7 26.2 83.2 64 101.2V352c0 17.7 14.3 32 32 32h32v64c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V372c-19.8 7.7-41.4 12-64 12s-44.2-4.3-64-12v76c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V329.1L45.9 369.7c-5.4 12.1-19.6 17.6-31.7 12.2S-3.3 362.4 2.1 350.3L24 300.9c5.3-11.9 8-24.7 8-37.7C32 155.7 117.2 68 223.8 64.1l.2-.1h7.2H256h32c41.7 0 83.4 12.1 117.2 25.7c1.7-1.8 3.5-3.6 5.3-5.2L407 81c-9.4-9.4-9.4-24.6 0-33.9zm73 185a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm88 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM480 144a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"]};hi.add(X8);hi.add(H8);hi.add(W8);hi.add(J8);hi.add(K8);hi.add(q8);hi.add(G8);hi.add(Q8);hi.add(Y8);hi.add(j8);const Nl=cA(U3);Nl.use(fA());Nl.use(z8);Nl.use(P4,{firebaseApp:fr});Nl.component("font-awesome-icon",JC);Nl.mount("#app");
